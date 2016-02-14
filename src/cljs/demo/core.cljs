(ns demo.core
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require [demo.create-db :as create-db]
              [demo.populate-db :as populate-db]
              [demo.components.intro :as intro]
              [demo.components.db-schema :as db-schema]
              [demo.components.sandbox :as sandbox]
              [reagent.core :as reagent]
              [cljs-promises.async :as pasync]
              [cljs-promises.async :refer-macros [<?]]))

(enable-console-print!)

(defn can-use-index-db []
  (try
    (.openDatabase js/window "testdb" "1.0" "testing indexeddb support" 100)
    true
    (catch :default e false)))

(defn no-index-db-warning []
  [:div.center
   [:div.alert.alert-danger
    [:h3 "IndexedDB Needed"]
    [:p "IndexedDB gives browsers access to a SQLite-esque database, which the sandbox needs to function. Unfortunately only webkit browsers these days have IndexedDB, if you come back with Chrome, Safari or Opera you'll be able to try the sandbox."]
    [:p "(Also possible your mobile browser is just denying access...)"]]])

(defn container []
  (if (can-use-index-db)
    [:div
     [intro/cmp]
     [db-schema/cmp]
     [sandbox/cmp]]
    [no-index-db-warning]))

(defn init! []
  (go
    (when (can-use-index-db)
      (<? (create-db/create))
      (<? (populate-db/populate)))
    (reagent/render-component [container]
                              (. js/document getElementById "app"))))

(init!)
