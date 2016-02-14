(ns demo.knex
  (:require [cljs.core.async :refer [put! chan]]))

(def knex (js/Knex. #js {:client "websql" :debug true :useNullAsDefault true}))
(def knex-no-debug (js/Knex. #js {:client "websql" :useNullAsDefault true}))

(defn init-chan []
  (let [out (chan)]
    (set! (.-log js/console)
          (fn [obj]
            (put! out {:sql (.-sql obj)
                       :bindings (.-bindings obj)})))
    out))
