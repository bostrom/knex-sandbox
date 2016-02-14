// Compiled by ClojureScript 0.0-3308 {}
goog.provide('demo.components.records');
goog.require('cljs.core');
goog.require('reagent.core');

demo.components.records.sort_keys = (function demo$components$records$sort_keys(object){
var keys = cljs.core.keys.call(null,object);
return cljs.core.sort_by.call(null,((function (keys){
return (function (p1__21529_SHARP_){
return cljs.core.vector_QMARK_.call(null,object.call(null,p1__21529_SHARP_));
});})(keys))
,keys);
});
demo.components.records.primitive_QMARK_ = (function demo$components$records$primitive_QMARK_(obj){
return (typeof obj === 'string') || (typeof obj === 'number');
});
demo.components.records.primitive_view = (function demo$components$records$primitive_view(p,needs_comma){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((typeof p === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.primitive-string","span.primitive-string",694485187),[cljs.core.str("\""),cljs.core.str(p),cljs.core.str("\"")].join('')], null):((typeof p === 'number')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.primitive-number","span.primitive-number",-665034496),p], null):null)),(cljs.core.truth_(needs_comma)?",":null)], null);
});
demo.components.records.expander = (function demo$components$records$expander(collapsed_atom){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.expander","span.expander",-563604764),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,collapsed_atom,cljs.core.not);
})], null),(cljs.core.truth_(cljs.core.deref.call(null,collapsed_atom))?"+":"-")], null);
});
demo.components.records.title_view = (function demo$components$records$title_view(title,opener){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.object-view-entry-key","span.object-view-entry-key",-233653292),[cljs.core.str(title),cljs.core.str(": ")].join('')], null):null),opener], null);
});
demo.components.records.array_view = (function demo$components$records$array_view(){
var collapsed = reagent.core.atom.call(null,false);
return ((function (collapsed){
return (function (title,array,needs_comma){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.array-view.expander-container","div.array-view.expander-container",-801965437),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.records.expander,collapsed], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.records.title_view,title,"["], null),(cljs.core.truth_(cljs.core.deref.call(null,collapsed))?"\u2026":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.indent","div.indent",-1749025025),(function (){var iter__5005__auto__ = ((function (collapsed){
return (function demo$components$records$array_view_$_iter__21534(s__21535){
return (new cljs.core.LazySeq(null,((function (collapsed){
return (function (){
var s__21535__$1 = s__21535;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21535__$1);
if(temp__4425__auto__){
var s__21535__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21535__$2)){
var c__5003__auto__ = cljs.core.chunk_first.call(null,s__21535__$2);
var size__5004__auto__ = cljs.core.count.call(null,c__5003__auto__);
var b__21537 = cljs.core.chunk_buffer.call(null,size__5004__auto__);
if((function (){var i__21536 = (0);
while(true){
if((i__21536 < size__5004__auto__)){
var object = cljs.core._nth.call(null,c__5003__auto__,i__21536);
cljs.core.chunk_append.call(null,b__21537,(function (){var is_last = cljs.core._EQ_.call(null,cljs.core.last.call(null,array),object);
var needs_comma__$1 = !(is_last);
if(cljs.core.truth_(demo.components.records.primitive_QMARK_.call(null,object))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.records.primitive_view,object,needs_comma__$1], null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.records.object_view,null,object,needs_comma__$1], null);
}
})());

var G__21538 = (i__21536 + (1));
i__21536 = G__21538;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21537),demo$components$records$array_view_$_iter__21534.call(null,cljs.core.chunk_rest.call(null,s__21535__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21537),null);
}
} else {
var object = cljs.core.first.call(null,s__21535__$2);
return cljs.core.cons.call(null,(function (){var is_last = cljs.core._EQ_.call(null,cljs.core.last.call(null,array),object);
var needs_comma__$1 = !(is_last);
if(cljs.core.truth_(demo.components.records.primitive_QMARK_.call(null,object))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.records.primitive_view,object,needs_comma__$1], null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.records.object_view,null,object,needs_comma__$1], null);
}
})(),demo$components$records$array_view_$_iter__21534.call(null,cljs.core.rest.call(null,s__21535__$2)));
}
} else {
return null;
}
break;
}
});})(collapsed))
,null,null));
});})(collapsed))
;
return iter__5005__auto__.call(null,array);
})()], null)),"]",(cljs.core.truth_(needs_comma)?",":null)], null);
});
;})(collapsed))
});
demo.components.records.key_value_view = (function demo$components$records$key_value_view(keyname,value,needs_comma){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.object-view-entry-key","span.object-view-entry-key",-233653292),[cljs.core.str(keyname),cljs.core.str(":")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.object-view-entry-value","span.object-view-entry-value",1392477795),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.records.primitive_view,value], null)], null),(cljs.core.truth_(needs_comma)?",":null)], null);
});
demo.components.records.object_view = (function demo$components$records$object_view(){
var collapsed = reagent.core.atom.call(null,false);
return ((function (collapsed){
return (function (title,object,needs_comma){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.object-view.expander-container","div.object-view.expander-container",1498954941),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.records.expander,collapsed], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.records.title_view,title,"{"], null),(cljs.core.truth_(cljs.core.deref.call(null,collapsed))?"\u2026":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.indent","div.indent",-1749025025),(function (){var keys = demo.components.records.sort_keys.call(null,object);
var iter__5005__auto__ = ((function (keys,collapsed){
return (function demo$components$records$object_view_$_iter__21543(s__21544){
return (new cljs.core.LazySeq(null,((function (keys,collapsed){
return (function (){
var s__21544__$1 = s__21544;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21544__$1);
if(temp__4425__auto__){
var s__21544__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21544__$2)){
var c__5003__auto__ = cljs.core.chunk_first.call(null,s__21544__$2);
var size__5004__auto__ = cljs.core.count.call(null,c__5003__auto__);
var b__21546 = cljs.core.chunk_buffer.call(null,size__5004__auto__);
if((function (){var i__21545 = (0);
while(true){
if((i__21545 < size__5004__auto__)){
var key = cljs.core._nth.call(null,c__5003__auto__,i__21545);
cljs.core.chunk_append.call(null,b__21546,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.object-view-entry","div.object-view-entry",1708248308),(function (){var keyname = cljs.core.name.call(null,key);
var value = object.call(null,key);
var is_last = cljs.core._EQ_.call(null,cljs.core.last.call(null,keys),key);
var needs_comma__$1 = !(is_last);
if(cljs.core.vector_QMARK_.call(null,value)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.records.array_view,keyname,value,needs_comma__$1], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo$components$records$object_view,keyname,value,needs_comma__$1], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.records.key_value_view,keyname,value,needs_comma__$1], null);

}
}
})()], null));

var G__21547 = (i__21545 + (1));
i__21545 = G__21547;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21546),demo$components$records$object_view_$_iter__21543.call(null,cljs.core.chunk_rest.call(null,s__21544__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21546),null);
}
} else {
var key = cljs.core.first.call(null,s__21544__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.object-view-entry","div.object-view-entry",1708248308),(function (){var keyname = cljs.core.name.call(null,key);
var value = object.call(null,key);
var is_last = cljs.core._EQ_.call(null,cljs.core.last.call(null,keys),key);
var needs_comma__$1 = !(is_last);
if(cljs.core.vector_QMARK_.call(null,value)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.records.array_view,keyname,value,needs_comma__$1], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo$components$records$object_view,keyname,value,needs_comma__$1], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.records.key_value_view,keyname,value,needs_comma__$1], null);

}
}
})()], null),demo$components$records$object_view_$_iter__21543.call(null,cljs.core.rest.call(null,s__21544__$2)));
}
} else {
return null;
}
break;
}
});})(keys,collapsed))
,null,null));
});})(keys,collapsed))
;
return iter__5005__auto__.call(null,keys);
})()], null)),"}",(cljs.core.truth_(needs_comma)?",":null)], null);
});
;})(collapsed))
});
demo.components.records.cmp = (function demo$components$records$cmp(object){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.records-list","div.records-list",-255231158),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.records.array_view,null,object,false], null)], null);
});

//# sourceMappingURL=records.js.map