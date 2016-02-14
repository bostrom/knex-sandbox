// Compiled by ClojureScript 0.0-3308 {}
goog.provide('demo.create_db');
goog.require('cljs.core');
goog.require('cljs_promises.async');
demo.create_db.knex = (new Knex({"client": "websql"}));
demo.create_db.schema = demo.create_db.knex.schema;
window.knex = demo.create_db.knex;
demo.create_db.id = (function demo$create_db$id(table){
return table.increments("id").primary();
});
demo.create_db.create_authors_table = (function demo$create_db$create_authors_table(table){
demo.create_db.id.call(null,table);

table.string("last_name");

return table.string("first_name");
});
demo.create_db.create_books_table = (function demo$create_db$create_books_table(table){
demo.create_db.id.call(null,table);

table.string("title");

table.integer("author_id");

return table.integer("subject_id");
});
demo.create_db.create_subjects_table = (function demo$create_db$create_subjects_table(table){
demo.create_db.id.call(null,table);

return table.string("subject");
});
demo.create_db.create = (function demo$create_db$create(){
var drop_table_promises = [demo.create_db.schema.dropTableIfExists("authors"),demo.create_db.schema.dropTableIfExists("books"),demo.create_db.schema.dropTableIfExists("subjects")];
var create_table_promises = [demo.create_db.schema.createTableIfNotExists("authors",demo.create_db.create_authors_table),demo.create_db.schema.createTableIfNotExists("books",demo.create_db.create_books_table),demo.create_db.schema.createTableIfNotExists("subjects",demo.create_db.create_subjects_table)];
return cljs_promises.async.pair_port.call(null,Promise.all(drop_table_promises).then(((function (drop_table_promises,create_table_promises){
return (function (){
return Promise.all(create_table_promises);
});})(drop_table_promises,create_table_promises))
));
});

//# sourceMappingURL=create_db.js.map