// Compiled by ClojureScript 0.0-3308 {}
goog.provide('demo.populate_db');
goog.require('cljs.core');
goog.require('demo.data');
goog.require('demo.knex');
goog.require('cljs_promises.core');
goog.require('cljs_promises.async');
demo.populate_db.populate_table = (function demo$populate_db$populate_table(name,data){
return demo.knex.knex.call(null,name).insert(data);
});
demo.populate_db.populate = (function demo$populate_db$populate(){
var populate_promises = [demo.populate_db.populate_table.call(null,"authors",demo.data.authors),demo.populate_db.populate_table.call(null,"books",demo.data.books),demo.populate_db.populate_table.call(null,"subjects",demo.data.subjects)];
return cljs_promises.async.pair_port.call(null,Promise.all(populate_promises));
});

//# sourceMappingURL=populate_db.js.map