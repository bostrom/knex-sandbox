(ns demo.components.db-schema
  (:require [reagent.core :refer [atom]]
            [demo.components.expander :as expander]))


(defn cmp []
  (let [collapsed (atom false)]
    (fn []
      [:header.db-schema (when @collapsed {:class "collapsed"})
       (when-not @collapsed
         [:div
          [:p "Here's the tiny database we're playing with"]
          [:img {:src "img/schema.svg"}]])
       [expander/cmp collapsed "schema"]])))
