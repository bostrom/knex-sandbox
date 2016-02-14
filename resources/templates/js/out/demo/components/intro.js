// Compiled by ClojureScript 0.0-3308 {}
goog.provide('demo.components.intro');
goog.require('cljs.core');
goog.require('reagent.core');
demo.components.intro.cmp = (function demo$components$intro$cmp(){
var hidden = reagent.core.atom.call(null,false);
return ((function (hidden){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,hidden))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.intro","div.intro",1937098677),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://knexjs.org"], null),"Knex"], null)," is a SQL query builder for Node.js. This page lets you play with Knex and see the results. ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (hidden){
return (function (){
return cljs.core.reset_BANG_.call(null,hidden,true);
});})(hidden))
], null),"got it!"], null)], null)], null);
}
});
;})(hidden))
});

//# sourceMappingURL=intro.js.map