// Compiled by ClojureScript 0.0-3308 {}
goog.provide('demo.components.expander');
goog.require('cljs.core');
demo.components.expander.cmp = (function demo$components$expander$cmp(collapsed_atom,noun){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.expander","a.expander",1322821771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,collapsed_atom,cljs.core.not);
})], null),"(",(cljs.core.truth_(cljs.core.deref.call(null,collapsed_atom))?"show":"hide")," ",noun,")"], null);
});

//# sourceMappingURL=expander.js.map