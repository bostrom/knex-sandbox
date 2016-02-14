(ns demo.hydrate
  (:require [demo.knex :refer [knex]]
            [cljs-promises.core :as p]
            [cljs-promises.async :as pasync]))

(def bookends (js/Bookends.))

(defn hydrate [raw-js]
  (set! (.-knex js/window) knex)
  (set! (.-currentPromise js/window) nil)
  (let [full-raw-js (str "window.currentPromise = " raw-js)]
    (try
      (js/eval full-raw-js)
      (when-let [promise (.-currentPromise js/window)]
        (pasync/pair-port promise))
      (catch :default e (pasync/pair-port (.reject js/Promise e))))))
