// Compiled by ClojureScript 0.0-3308 {}
goog.provide('demo.components.db_schema');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('demo.components.expander');
demo.components.db_schema.cmp = (function demo$components$db_schema$cmp(){
var collapsed = reagent.core.atom.call(null,false);
return ((function (collapsed){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.db-schema","header.db-schema",732638122),(cljs.core.truth_(cljs.core.deref.call(null,collapsed))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"collapsed"], null):null),(cljs.core.truth_(cljs.core.deref.call(null,collapsed))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"In this webpage is a small IndexedDB of books."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/schema.svg"], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.expander.cmp,collapsed,"schema"], null)], null);
});
;})(collapsed))
});

//# sourceMappingURL=db_schema.js.map