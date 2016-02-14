// Compiled by ClojureScript 0.0-3308 {}
goog.provide('demo.components.models');
goog.require('cljs.core');
goog.require('demo.knex');
demo.components.models.db = (new Bookshelf(demo.knex.knex));
demo.components.models.Model = demo.components.models.db.Model;


demo.components.models.Author = demo.components.models.Model.extend({"tableName": "authors", "books": (function (){
var this$ = this;
return this$.hasMany(demo.components.models.Book,"author_id");
})});
demo.components.models.Book = demo.components.models.Model.extend({"tableName": "books", "author": (function (){
var this$ = this;
return this$.belongsTo(demo.components.models.Author,"author_id");
}), "subject": (function (){
var this$ = this;
return this$.belongsTo(demo.components.models.Subject,"subject_id");
})});
demo.components.models.Subject = demo.components.models.Model.extend({"tableName": "subjects", "books": (function (){
var this$ = this;
return this$.hasMany(demo.components.models.Book,"subject_id");
})});
demo.components.models.all = new cljs.core.PersistentArrayMap(null, 3, ["Author",demo.components.models.Author,"Book",demo.components.models.Book,"Subject",demo.components.models.Subject], null);

//# sourceMappingURL=models.js.map