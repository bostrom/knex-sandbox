(ns demo.components.sandbox
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :refer [atom]]
            [demo.hydrate :refer [hydrate]]
            [demo.components.records :as records]
            [demo.components.expander :as expander]
            [demo.knex :as knex]
            [cljs.core.async :refer [<!]]
            [clojure.string :refer [join]]))

(def hydration (atom nil))

(def hydration-result (atom nil))
(def hydration-error (atom nil))
(def sql-statements (atom []))

(def first-example "knex('subjects')")

(defn do-hydration []
  (go
    (when @hydration
      (reset! sql-statements [])
      (reset! hydration-result nil)
      (let [hr (<! (hydrate @hydration))
            result (hr 0)
            error (hr 1)]
        (if result
          (do
            (reset! hydration-result result)
            (reset! hydration-error nil))
          (do
            (println "and error in here " error)
            (let [error-msg (or (.-message error) (.toString error))]
              (reset! hydration-error error-msg))))))))

(defn set-hydration [new-hydration]
  (reset! hydration new-hydration)
  (do-hydration))

(defn example [hydration]
  [:div.example
   [:a {:on-click #(set-hydration hydration)}
    [:span.example-hydration [:pre hydration]]]])

(defn examples []
  (let [collapsed (atom false)]
    (fn []
      [:div.examples (when @collapsed {:style {:padding 0 :margin 0}})
       (when-not @collapsed [:h3 "Examples"])
       [expander/cmp collapsed "examples"]
       (when-not @collapsed [:div.examples-container
        [example first-example]
        [example
"knex
  .table('authors')
  .innerJoin('books', 'books.author_id', 'authors.id')
  .select('authors.first_name', 'books.title')"]
        [example
"knex
  .select(
    knex.raw('first_name || \" \" || last_name as author'),
    knex.raw('count(books.id) as quantity')
  )
  .from('books')
  .innerJoin('authors', 'authors.id', 'books.author_id')
  .groupBy('author_id')
  .orderBy('quantity', 'desc')"]])])))

(defn get-value [e]
  (-> e .-target .-value))

(defn tabs [current-atom]
  (let [sqls @sql-statements
        sqls-c (count sqls)
        rows @hydration-result
        row-c (count rows)]
    [:ul.nav.nav-tabs
     [:li
      [:a {:on-click #(reset! current-atom "records")}
       (str "returned " row-c " row" (when-not (= row-c 1) "s"))]]
     [:li
      [:a {:on-click #(reset! current-atom "sql")}
       (str sqls-c " SQL statement" (when-not (= sqls-c 1) "s"))]]
     [:li.pull-right.knex-version "knex " (-> js/window .-knex .-VERSION)]]))

(defn sql-view [sql]
  [:div.sql-view
   [:div.sql-view-sql
    [:span.sql-view-header "query: "]
    [:code (:sql sql)]]
   [:div.sql-view-bindings
    [:span.sql-view-header "bindings: "]
    [:code "[" (join ", " (:bindings sql)) "]"]]])

(defn hydration-display []
  (let [current-tab (atom "records")]
    (fn []
      [:div.hydration-display
       [tabs current-tab]
       (if (= "records" @current-tab)
         [:div.hydration-display-records
          [:div.hydration-display-title ]
          [records/cmp (js->clj @hydration-result :keywordize-keys true)]]
         [:div.hydration-display-sql
          (for [sql @sql-statements]
            [sql-view sql])])])))


(defn hydration-input []
  [:div.hydration-input
   [:textarea {:value @hydration
               :style { :width "100%" :height "300px" }
               :on-change (fn [e]
                            (reset! hydration (get-value e))
                            (do-hydration))}]])


(defn cmp []
  [:div
   [:div.half
    [examples]
    [hydration-input]]
   [:div.half
     (when @hydration-error
       [:div.hydration-error @hydration-error])
     (when @hydration-result
       [hydration-display])]])

(defn listen! []
  (let [out (knex/init-chan)]
    (go (while true
          (let [sql (<! out)]
            (swap! sql-statements conj sql))))))

(listen!)
(set-hydration first-example)
