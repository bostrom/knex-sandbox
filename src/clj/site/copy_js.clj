(ns site.copy-js
  (:require [clojure.java.io :refer [file copy]]))

(defn -main []
  (.mkdir (java.io.File. "resources/templates/js"))
  (copy (file "src/jslibs/knex.js") (file "resources/templates/js/knex.js"))
  (copy (file "src/jslibs/lodash.min.js") (file "resources/templates/js/lodash.min.js"))
  (copy (file "src/jslibs/bluebird.min.js") (file "resources/templates/js/bluebird.min.js")))
