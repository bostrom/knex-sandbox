// Compiled by ClojureScript 0.0-3308 {}
goog.provide('demo.components.sandbox');
goog.require('cljs.core');
goog.require('demo.hydrate');
goog.require('demo.knex');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('demo.components.models');
goog.require('demo.components.records');
goog.require('demo.components.expander');
goog.require('clojure.string');
demo.components.sandbox.hydration = reagent.core.atom.call(null,null);
demo.components.sandbox.hydration_result = reagent.core.atom.call(null,null);
demo.components.sandbox.hydration_error = reagent.core.atom.call(null,null);
demo.components.sandbox.sql_statements = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
demo.components.sandbox.first_example = "knex\n  .select()\n  .table('subjects')";
demo.components.sandbox.do_hydration = (function demo$components$sandbox$do_hydration(){
var c__6627__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6627__auto__){
return (function (){
var f__6628__auto__ = (function (){var switch__6606__auto__ = ((function (c__6627__auto__){
return (function (state_15017){
var state_val_15018 = (state_15017[(1)]);
if((state_val_15018 === (1))){
var inst_14995 = cljs.core.deref.call(null,demo.components.sandbox.hydration);
var state_15017__$1 = state_15017;
if(cljs.core.truth_(inst_14995)){
var statearr_15019_15037 = state_15017__$1;
(statearr_15019_15037[(1)] = (2));

} else {
var statearr_15020_15038 = state_15017__$1;
(statearr_15020_15038[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15018 === (2))){
var inst_14997 = cljs.core.PersistentVector.EMPTY;
var inst_14998 = cljs.core.reset_BANG_.call(null,demo.components.sandbox.sql_statements,inst_14997);
var inst_14999 = cljs.core.reset_BANG_.call(null,demo.components.sandbox.hydration_result,null);
var inst_15000 = cljs.core.deref.call(null,demo.components.sandbox.hydration);
var inst_15001 = demo.hydrate.hydrate.call(null,inst_15000);
var state_15017__$1 = (function (){var statearr_15021 = state_15017;
(statearr_15021[(7)] = inst_14998);

(statearr_15021[(8)] = inst_14999);

return statearr_15021;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15017__$1,(5),inst_15001);
} else {
if((state_val_15018 === (3))){
var state_15017__$1 = state_15017;
var statearr_15022_15039 = state_15017__$1;
(statearr_15022_15039[(2)] = null);

(statearr_15022_15039[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15018 === (4))){
var inst_15015 = (state_15017[(2)]);
var state_15017__$1 = state_15017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15017__$1,inst_15015);
} else {
if((state_val_15018 === (5))){
var inst_15004 = (state_15017[(9)]);
var inst_15003 = (state_15017[(2)]);
var inst_15004__$1 = inst_15003.call(null,(0));
var inst_15005 = inst_15003.call(null,(1));
var state_15017__$1 = (function (){var statearr_15023 = state_15017;
(statearr_15023[(9)] = inst_15004__$1);

(statearr_15023[(10)] = inst_15005);

return statearr_15023;
})();
if(cljs.core.truth_(inst_15004__$1)){
var statearr_15024_15040 = state_15017__$1;
(statearr_15024_15040[(1)] = (6));

} else {
var statearr_15025_15041 = state_15017__$1;
(statearr_15025_15041[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15018 === (6))){
var inst_15004 = (state_15017[(9)]);
var inst_15007 = cljs.core.reset_BANG_.call(null,demo.components.sandbox.hydration_result,inst_15004);
var inst_15008 = cljs.core.reset_BANG_.call(null,demo.components.sandbox.hydration_error,null);
var state_15017__$1 = (function (){var statearr_15026 = state_15017;
(statearr_15026[(11)] = inst_15007);

return statearr_15026;
})();
var statearr_15027_15042 = state_15017__$1;
(statearr_15027_15042[(2)] = inst_15008);

(statearr_15027_15042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15018 === (7))){
var inst_15005 = (state_15017[(10)]);
var inst_15010 = cljs.core.reset_BANG_.call(null,demo.components.sandbox.hydration_error,inst_15005);
var state_15017__$1 = state_15017;
var statearr_15028_15043 = state_15017__$1;
(statearr_15028_15043[(2)] = inst_15010);

(statearr_15028_15043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15018 === (8))){
var inst_15012 = (state_15017[(2)]);
var state_15017__$1 = state_15017;
var statearr_15029_15044 = state_15017__$1;
(statearr_15029_15044[(2)] = inst_15012);

(statearr_15029_15044[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__6627__auto__))
;
return ((function (switch__6606__auto__,c__6627__auto__){
return (function() {
var demo$components$sandbox$do_hydration_$_state_machine__6607__auto__ = null;
var demo$components$sandbox$do_hydration_$_state_machine__6607__auto____0 = (function (){
var statearr_15033 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15033[(0)] = demo$components$sandbox$do_hydration_$_state_machine__6607__auto__);

(statearr_15033[(1)] = (1));

return statearr_15033;
});
var demo$components$sandbox$do_hydration_$_state_machine__6607__auto____1 = (function (state_15017){
while(true){
var ret_value__6608__auto__ = (function (){try{while(true){
var result__6609__auto__ = switch__6606__auto__.call(null,state_15017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6609__auto__;
}
break;
}
}catch (e15034){if((e15034 instanceof Object)){
var ex__6610__auto__ = e15034;
var statearr_15035_15045 = state_15017;
(statearr_15035_15045[(5)] = ex__6610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15046 = state_15017;
state_15017 = G__15046;
continue;
} else {
return ret_value__6608__auto__;
}
break;
}
});
demo$components$sandbox$do_hydration_$_state_machine__6607__auto__ = function(state_15017){
switch(arguments.length){
case 0:
return demo$components$sandbox$do_hydration_$_state_machine__6607__auto____0.call(this);
case 1:
return demo$components$sandbox$do_hydration_$_state_machine__6607__auto____1.call(this,state_15017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$components$sandbox$do_hydration_$_state_machine__6607__auto__.cljs$core$IFn$_invoke$arity$0 = demo$components$sandbox$do_hydration_$_state_machine__6607__auto____0;
demo$components$sandbox$do_hydration_$_state_machine__6607__auto__.cljs$core$IFn$_invoke$arity$1 = demo$components$sandbox$do_hydration_$_state_machine__6607__auto____1;
return demo$components$sandbox$do_hydration_$_state_machine__6607__auto__;
})()
;})(switch__6606__auto__,c__6627__auto__))
})();
var state__6629__auto__ = (function (){var statearr_15036 = f__6628__auto__.call(null);
(statearr_15036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6627__auto__);

return statearr_15036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6629__auto__);
});})(c__6627__auto__))
);

return c__6627__auto__;
});
demo.components.sandbox.set_hydration = (function demo$components$sandbox$set_hydration(new_hydration){
cljs.core.reset_BANG_.call(null,demo.components.sandbox.hydration,new_hydration);

return demo.components.sandbox.do_hydration.call(null);
});
demo.components.sandbox.example = (function demo$components$sandbox$example(hydration){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example","div.example",265005017),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return demo.components.sandbox.set_hydration.call(null,hydration);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.example-hydration","span.example-hydration",-317688502),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),hydration], null)], null)], null)], null);
});
demo.components.sandbox.examples = (function demo$components$sandbox$examples(){
var collapsed = reagent.core.atom.call(null,false);
return ((function (collapsed){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.examples","div.examples",-1009767485),(cljs.core.truth_(cljs.core.deref.call(null,collapsed))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null):null),(cljs.core.truth_(cljs.core.deref.call(null,collapsed))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Examples"], null)),(cljs.core.truth_(cljs.core.deref.call(null,collapsed))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.examples-container","div.examples-container",-594635501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.example,demo.components.sandbox.first_example], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.example,"knex\n  .column('first_name', 'last_name')\n  .select()\n  .from('authors')"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.example,"knex\n  .table('authors')\n  .innerJoin('books', 'books.author_id', 'authors.id')\n  .select('authors.first_name', 'books.title')"], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.expander.cmp,collapsed,"examples"], null)], null);
});
;})(collapsed))
});
demo.components.sandbox.get_value = (function demo$components$sandbox$get_value(e){
return e.target.value;
});
demo.components.sandbox.tabs = (function demo$components$sandbox$tabs(current_atom){
var sqls = cljs.core.deref.call(null,demo.components.sandbox.sql_statements);
var sqls_c = cljs.core.count.call(null,sqls);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.nav-tabs","ul.nav.nav-tabs",1865557319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sqls,sqls_c){
return (function (){
return cljs.core.reset_BANG_.call(null,current_atom,"records");
});})(sqls,sqls_c))
], null),[cljs.core.str("returned "),cljs.core.str(cljs.core.deref.call(null,demo.components.sandbox.hydration_result).length),cljs.core.str(" rows")].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sqls,sqls_c){
return (function (){
return cljs.core.reset_BANG_.call(null,current_atom,"sql");
});})(sqls,sqls_c))
], null),[cljs.core.str(sqls_c),cljs.core.str(" SQL statement"),cljs.core.str(((cljs.core._EQ_.call(null,sqls_c,(1)))?null:"s"))].join('')], null)], null)], null);
});
demo.components.sandbox.sql_view = (function demo$components$sandbox$sql_view(sql){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sql-view","div.sql-view",-1627977429),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sql-view-sql","div.sql-view-sql",496262137),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sql-view-header","span.sql-view-header",-1834974999),"query: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"sql","sql",1251448786).cljs$core$IFn$_invoke$arity$1(sql)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sql-view-bindings","div.sql-view-bindings",1235997037),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sql-view-header","span.sql-view-header",-1834974999),"bindings: "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"[",clojure.string.join.call(null,", ",new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(sql)),"]"], null)], null)], null);
});
demo.components.sandbox.hydration_display = (function demo$components$sandbox$hydration_display(){
var current_tab = reagent.core.atom.call(null,"records");
return ((function (current_tab){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hydration-display","div.hydration-display",882572613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.tabs,current_tab], null),((cljs.core._EQ_.call(null,"records",cljs.core.deref.call(null,current_tab)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hydration-display-records","div.hydration-display-records",-643544925),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hydration-display-title","div.hydration-display-title",1975490183)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.records.cmp,cljs.core.js__GT_clj.call(null,cljs.core.deref.call(null,demo.components.sandbox.hydration_result),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hydration-display-sql","div.hydration-display-sql",2123688630),(function (){var iter__5005__auto__ = ((function (current_tab){
return (function demo$components$sandbox$hydration_display_$_iter__15051(s__15052){
return (new cljs.core.LazySeq(null,((function (current_tab){
return (function (){
var s__15052__$1 = s__15052;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15052__$1);
if(temp__4425__auto__){
var s__15052__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15052__$2)){
var c__5003__auto__ = cljs.core.chunk_first.call(null,s__15052__$2);
var size__5004__auto__ = cljs.core.count.call(null,c__5003__auto__);
var b__15054 = cljs.core.chunk_buffer.call(null,size__5004__auto__);
if((function (){var i__15053 = (0);
while(true){
if((i__15053 < size__5004__auto__)){
var sql = cljs.core._nth.call(null,c__5003__auto__,i__15053);
cljs.core.chunk_append.call(null,b__15054,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.sql_view,sql], null));

var G__15055 = (i__15053 + (1));
i__15053 = G__15055;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15054),demo$components$sandbox$hydration_display_$_iter__15051.call(null,cljs.core.chunk_rest.call(null,s__15052__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15054),null);
}
} else {
var sql = cljs.core.first.call(null,s__15052__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.sql_view,sql], null),demo$components$sandbox$hydration_display_$_iter__15051.call(null,cljs.core.rest.call(null,s__15052__$2)));
}
} else {
return null;
}
break;
}
});})(current_tab))
,null,null));
});})(current_tab))
;
return iter__5005__auto__.call(null,cljs.core.deref.call(null,demo.components.sandbox.sql_statements));
})()], null))], null);
});
;})(current_tab))
});
demo.components.sandbox.hydration_input = (function demo$components$sandbox$hydration_input(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hydration-input","div.hydration-input",1118611150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,demo.components.sandbox.hydration),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"600px",new cljs.core.Keyword(null,"height","height",1025178622),"160px"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
cljs.core.reset_BANG_.call(null,demo.components.sandbox.hydration,demo.components.sandbox.get_value.call(null,e));

return demo.components.sandbox.do_hydration.call(null);
})], null)], null)], null);
});
demo.components.sandbox.cmp = (function demo$components$sandbox$cmp(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.examples], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.hydration_input], null),(cljs.core.truth_(cljs.core.deref.call(null,demo.components.sandbox.hydration_error))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hydration-error","div.hydration-error",-1182518173),cljs.core.deref.call(null,demo.components.sandbox.hydration_error)], null):null),(cljs.core.truth_(cljs.core.deref.call(null,demo.components.sandbox.hydration_result))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.hydration_display], null):null)], null);
});
demo.components.sandbox.listen_BANG_ = (function demo$components$sandbox$listen_BANG_(){
var out = demo.knex.init_chan.call(null);
var c__6627__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6627__auto__,out){
return (function (){
var f__6628__auto__ = (function (){var switch__6606__auto__ = ((function (c__6627__auto__,out){
return (function (state_15096){
var state_val_15097 = (state_15096[(1)]);
if((state_val_15097 === (1))){
var state_15096__$1 = state_15096;
var statearr_15098_15112 = state_15096__$1;
(statearr_15098_15112[(2)] = null);

(statearr_15098_15112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15097 === (2))){
var state_15096__$1 = state_15096;
var statearr_15099_15113 = state_15096__$1;
(statearr_15099_15113[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15097 === (3))){
var inst_15094 = (state_15096[(2)]);
var state_15096__$1 = state_15096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15096__$1,inst_15094);
} else {
if((state_val_15097 === (4))){
var state_15096__$1 = state_15096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15096__$1,(7),out);
} else {
if((state_val_15097 === (5))){
var state_15096__$1 = state_15096;
var statearr_15101_15114 = state_15096__$1;
(statearr_15101_15114[(2)] = null);

(statearr_15101_15114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15097 === (6))){
var inst_15092 = (state_15096[(2)]);
var state_15096__$1 = state_15096;
var statearr_15102_15115 = state_15096__$1;
(statearr_15102_15115[(2)] = inst_15092);

(statearr_15102_15115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15097 === (7))){
var inst_15087 = (state_15096[(2)]);
var inst_15088 = cljs.core.swap_BANG_.call(null,demo.components.sandbox.sql_statements,cljs.core.conj,inst_15087);
var state_15096__$1 = (function (){var statearr_15103 = state_15096;
(statearr_15103[(7)] = inst_15088);

return statearr_15103;
})();
var statearr_15104_15116 = state_15096__$1;
(statearr_15104_15116[(2)] = null);

(statearr_15104_15116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__6627__auto__,out))
;
return ((function (switch__6606__auto__,c__6627__auto__,out){
return (function() {
var demo$components$sandbox$listen_BANG__$_state_machine__6607__auto__ = null;
var demo$components$sandbox$listen_BANG__$_state_machine__6607__auto____0 = (function (){
var statearr_15108 = [null,null,null,null,null,null,null,null];
(statearr_15108[(0)] = demo$components$sandbox$listen_BANG__$_state_machine__6607__auto__);

(statearr_15108[(1)] = (1));

return statearr_15108;
});
var demo$components$sandbox$listen_BANG__$_state_machine__6607__auto____1 = (function (state_15096){
while(true){
var ret_value__6608__auto__ = (function (){try{while(true){
var result__6609__auto__ = switch__6606__auto__.call(null,state_15096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6609__auto__;
}
break;
}
}catch (e15109){if((e15109 instanceof Object)){
var ex__6610__auto__ = e15109;
var statearr_15110_15117 = state_15096;
(statearr_15110_15117[(5)] = ex__6610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15118 = state_15096;
state_15096 = G__15118;
continue;
} else {
return ret_value__6608__auto__;
}
break;
}
});
demo$components$sandbox$listen_BANG__$_state_machine__6607__auto__ = function(state_15096){
switch(arguments.length){
case 0:
return demo$components$sandbox$listen_BANG__$_state_machine__6607__auto____0.call(this);
case 1:
return demo$components$sandbox$listen_BANG__$_state_machine__6607__auto____1.call(this,state_15096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$components$sandbox$listen_BANG__$_state_machine__6607__auto__.cljs$core$IFn$_invoke$arity$0 = demo$components$sandbox$listen_BANG__$_state_machine__6607__auto____0;
demo$components$sandbox$listen_BANG__$_state_machine__6607__auto__.cljs$core$IFn$_invoke$arity$1 = demo$components$sandbox$listen_BANG__$_state_machine__6607__auto____1;
return demo$components$sandbox$listen_BANG__$_state_machine__6607__auto__;
})()
;})(switch__6606__auto__,c__6627__auto__,out))
})();
var state__6629__auto__ = (function (){var statearr_15111 = f__6628__auto__.call(null);
(statearr_15111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6627__auto__);

return statearr_15111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6629__auto__);
});})(c__6627__auto__,out))
);

return c__6627__auto__;
});
demo.components.sandbox.listen_BANG_.call(null);
demo.components.sandbox.set_hydration.call(null,demo.components.sandbox.first_example);

//# sourceMappingURL=sandbox.js.map