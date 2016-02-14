(ns demo.components.intro
  (:require [reagent.core :refer [atom]]))

(defn cmp []
  (let [hidden (atom false)]
    (fn []
     (when-not @hidden
       [:div.intro
        [:p [:a {:href "http://knexjs.org"} "Knex"] " is a SQL query builder for Node.js. This page lets you play with Knex and see the results. "
          [:a {:href "#" :on-click #(reset! hidden true)} "got it!"]]]))))
