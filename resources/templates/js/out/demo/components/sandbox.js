// Compiled by ClojureScript 0.0-3308 {}
goog.provide('demo.components.sandbox');
goog.require('cljs.core');
goog.require('demo.hydrate');
goog.require('demo.knex');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('demo.components.records');
goog.require('demo.components.expander');
goog.require('clojure.string');
demo.components.sandbox.hydration = reagent.core.atom.call(null,null);
demo.components.sandbox.hydration_result = reagent.core.atom.call(null,null);
demo.components.sandbox.hydration_error = reagent.core.atom.call(null,null);
demo.components.sandbox.sql_statements = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
demo.components.sandbox.first_example = "knex('subjects')";
demo.components.sandbox.do_hydration = (function demo$components$sandbox$do_hydration(){
var c__6544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6544__auto__){
return (function (){
var f__6545__auto__ = (function (){var switch__6523__auto__ = ((function (c__6544__auto__){
return (function (state_11046){
var state_val_11047 = (state_11046[(1)]);
if((state_val_11047 === (7))){
var inst_11027 = (state_11046[(7)]);
var inst_11033 = (state_11046[(8)]);
var inst_11032 = cljs.core.println.call(null,"and error in here ",inst_11027);
var inst_11033__$1 = inst_11027.message;
var state_11046__$1 = (function (){var statearr_11048 = state_11046;
(statearr_11048[(9)] = inst_11032);

(statearr_11048[(8)] = inst_11033__$1);

return statearr_11048;
})();
if(cljs.core.truth_(inst_11033__$1)){
var statearr_11049_11071 = state_11046__$1;
(statearr_11049_11071[(1)] = (9));

} else {
var statearr_11050_11072 = state_11046__$1;
(statearr_11050_11072[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11047 === (1))){
var inst_11017 = cljs.core.deref.call(null,demo.components.sandbox.hydration);
var state_11046__$1 = state_11046;
if(cljs.core.truth_(inst_11017)){
var statearr_11051_11073 = state_11046__$1;
(statearr_11051_11073[(1)] = (2));

} else {
var statearr_11052_11074 = state_11046__$1;
(statearr_11052_11074[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11047 === (4))){
var inst_11044 = (state_11046[(2)]);
var state_11046__$1 = state_11046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11046__$1,inst_11044);
} else {
if((state_val_11047 === (6))){
var inst_11026 = (state_11046[(10)]);
var inst_11029 = cljs.core.reset_BANG_.call(null,demo.components.sandbox.hydration_result,inst_11026);
var inst_11030 = cljs.core.reset_BANG_.call(null,demo.components.sandbox.hydration_error,null);
var state_11046__$1 = (function (){var statearr_11053 = state_11046;
(statearr_11053[(11)] = inst_11029);

return statearr_11053;
})();
var statearr_11054_11075 = state_11046__$1;
(statearr_11054_11075[(2)] = inst_11030);

(statearr_11054_11075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11047 === (3))){
var state_11046__$1 = state_11046;
var statearr_11055_11076 = state_11046__$1;
(statearr_11055_11076[(2)] = null);

(statearr_11055_11076[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11047 === (2))){
var inst_11019 = cljs.core.PersistentVector.EMPTY;
var inst_11020 = cljs.core.reset_BANG_.call(null,demo.components.sandbox.sql_statements,inst_11019);
var inst_11021 = cljs.core.reset_BANG_.call(null,demo.components.sandbox.hydration_result,null);
var inst_11022 = cljs.core.deref.call(null,demo.components.sandbox.hydration);
var inst_11023 = demo.hydrate.hydrate.call(null,inst_11022);
var state_11046__$1 = (function (){var statearr_11056 = state_11046;
(statearr_11056[(12)] = inst_11020);

(statearr_11056[(13)] = inst_11021);

return statearr_11056;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11046__$1,(5),inst_11023);
} else {
if((state_val_11047 === (11))){
var inst_11038 = (state_11046[(2)]);
var inst_11039 = cljs.core.reset_BANG_.call(null,demo.components.sandbox.hydration_error,inst_11038);
var state_11046__$1 = state_11046;
var statearr_11057_11077 = state_11046__$1;
(statearr_11057_11077[(2)] = inst_11039);

(statearr_11057_11077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11047 === (9))){
var inst_11033 = (state_11046[(8)]);
var state_11046__$1 = state_11046;
var statearr_11058_11078 = state_11046__$1;
(statearr_11058_11078[(2)] = inst_11033);

(statearr_11058_11078[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11047 === (5))){
var inst_11026 = (state_11046[(10)]);
var inst_11025 = (state_11046[(2)]);
var inst_11026__$1 = inst_11025.call(null,(0));
var inst_11027 = inst_11025.call(null,(1));
var state_11046__$1 = (function (){var statearr_11059 = state_11046;
(statearr_11059[(7)] = inst_11027);

(statearr_11059[(10)] = inst_11026__$1);

return statearr_11059;
})();
if(cljs.core.truth_(inst_11026__$1)){
var statearr_11060_11079 = state_11046__$1;
(statearr_11060_11079[(1)] = (6));

} else {
var statearr_11061_11080 = state_11046__$1;
(statearr_11061_11080[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11047 === (10))){
var inst_11027 = (state_11046[(7)]);
var inst_11036 = inst_11027.toString();
var state_11046__$1 = state_11046;
var statearr_11062_11081 = state_11046__$1;
(statearr_11062_11081[(2)] = inst_11036);

(statearr_11062_11081[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11047 === (8))){
var inst_11041 = (state_11046[(2)]);
var state_11046__$1 = state_11046;
var statearr_11063_11082 = state_11046__$1;
(statearr_11063_11082[(2)] = inst_11041);

(statearr_11063_11082[(1)] = (4));


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
}
}
}
});})(c__6544__auto__))
;
return ((function (switch__6523__auto__,c__6544__auto__){
return (function() {
var demo$components$sandbox$do_hydration_$_state_machine__6524__auto__ = null;
var demo$components$sandbox$do_hydration_$_state_machine__6524__auto____0 = (function (){
var statearr_11067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11067[(0)] = demo$components$sandbox$do_hydration_$_state_machine__6524__auto__);

(statearr_11067[(1)] = (1));

return statearr_11067;
});
var demo$components$sandbox$do_hydration_$_state_machine__6524__auto____1 = (function (state_11046){
while(true){
var ret_value__6525__auto__ = (function (){try{while(true){
var result__6526__auto__ = switch__6523__auto__.call(null,state_11046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6526__auto__;
}
break;
}
}catch (e11068){if((e11068 instanceof Object)){
var ex__6527__auto__ = e11068;
var statearr_11069_11083 = state_11046;
(statearr_11069_11083[(5)] = ex__6527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11084 = state_11046;
state_11046 = G__11084;
continue;
} else {
return ret_value__6525__auto__;
}
break;
}
});
demo$components$sandbox$do_hydration_$_state_machine__6524__auto__ = function(state_11046){
switch(arguments.length){
case 0:
return demo$components$sandbox$do_hydration_$_state_machine__6524__auto____0.call(this);
case 1:
return demo$components$sandbox$do_hydration_$_state_machine__6524__auto____1.call(this,state_11046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$components$sandbox$do_hydration_$_state_machine__6524__auto__.cljs$core$IFn$_invoke$arity$0 = demo$components$sandbox$do_hydration_$_state_machine__6524__auto____0;
demo$components$sandbox$do_hydration_$_state_machine__6524__auto__.cljs$core$IFn$_invoke$arity$1 = demo$components$sandbox$do_hydration_$_state_machine__6524__auto____1;
return demo$components$sandbox$do_hydration_$_state_machine__6524__auto__;
})()
;})(switch__6523__auto__,c__6544__auto__))
})();
var state__6546__auto__ = (function (){var statearr_11070 = f__6545__auto__.call(null);
(statearr_11070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6544__auto__);

return statearr_11070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6546__auto__);
});})(c__6544__auto__))
);

return c__6544__auto__;
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
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.examples","div.examples",-1009767485),(cljs.core.truth_(cljs.core.deref.call(null,collapsed))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null):null),(cljs.core.truth_(cljs.core.deref.call(null,collapsed))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Examples"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.expander.cmp,collapsed,"examples"], null),(cljs.core.truth_(cljs.core.deref.call(null,collapsed))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.examples-container","div.examples-container",-594635501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.example,demo.components.sandbox.first_example], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.example,"knex\n  .table('authors')\n  .innerJoin('books', 'books.author_id', 'authors.id')\n  .select('authors.first_name', 'books.title')"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.example,"knex\n  .select(\n    knex.raw('first_name || \" \" || last_name as author'),\n    knex.raw('count(books.id) as quantity')\n  )\n  .from('books')\n  .innerJoin('authors', 'authors.id', 'books.author_id')\n  .groupBy('author_id')\n  .orderBy('quantity', 'desc')"], null)], null))], null);
});
;})(collapsed))
});
demo.components.sandbox.get_value = (function demo$components$sandbox$get_value(e){
return e.target.value;
});
demo.components.sandbox.tabs = (function demo$components$sandbox$tabs(current_atom){
var sqls = cljs.core.deref.call(null,demo.components.sandbox.sql_statements);
var sqls_c = cljs.core.count.call(null,sqls);
var rows = cljs.core.deref.call(null,demo.components.sandbox.hydration_result);
var row_c = cljs.core.count.call(null,rows);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.nav-tabs","ul.nav.nav-tabs",1865557319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sqls,sqls_c,rows,row_c){
return (function (){
return cljs.core.reset_BANG_.call(null,current_atom,"records");
});})(sqls,sqls_c,rows,row_c))
], null),[cljs.core.str("returned "),cljs.core.str(row_c),cljs.core.str(" row"),cljs.core.str(((cljs.core._EQ_.call(null,row_c,(1)))?null:"s"))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sqls,sqls_c,rows,row_c){
return (function (){
return cljs.core.reset_BANG_.call(null,current_atom,"sql");
});})(sqls,sqls_c,rows,row_c))
], null),[cljs.core.str(sqls_c),cljs.core.str(" SQL statement"),cljs.core.str(((cljs.core._EQ_.call(null,sqls_c,(1)))?null:"s"))].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.pull-right.knex-version","li.pull-right.knex-version",-1328888954),"knex ",window.knex.VERSION], null)], null);
});
demo.components.sandbox.sql_view = (function demo$components$sandbox$sql_view(sql){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sql-view","div.sql-view",-1627977429),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sql-view-sql","div.sql-view-sql",496262137),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sql-view-header","span.sql-view-header",-1834974999),"query: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"sql","sql",1251448786).cljs$core$IFn$_invoke$arity$1(sql)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sql-view-bindings","div.sql-view-bindings",1235997037),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sql-view-header","span.sql-view-header",-1834974999),"bindings: "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"[",clojure.string.join.call(null,", ",new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(sql)),"]"], null)], null)], null);
});
demo.components.sandbox.hydration_display = (function demo$components$sandbox$hydration_display(){
var current_tab = reagent.core.atom.call(null,"records");
return ((function (current_tab){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hydration-display","div.hydration-display",882572613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.tabs,current_tab], null),((cljs.core._EQ_.call(null,"records",cljs.core.deref.call(null,current_tab)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hydration-display-records","div.hydration-display-records",-643544925),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hydration-display-title","div.hydration-display-title",1975490183)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.records.cmp,cljs.core.js__GT_clj.call(null,cljs.core.deref.call(null,demo.components.sandbox.hydration_result),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hydration-display-sql","div.hydration-display-sql",2123688630),(function (){var iter__5005__auto__ = ((function (current_tab){
return (function demo$components$sandbox$hydration_display_$_iter__11089(s__11090){
return (new cljs.core.LazySeq(null,((function (current_tab){
return (function (){
var s__11090__$1 = s__11090;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11090__$1);
if(temp__4425__auto__){
var s__11090__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11090__$2)){
var c__5003__auto__ = cljs.core.chunk_first.call(null,s__11090__$2);
var size__5004__auto__ = cljs.core.count.call(null,c__5003__auto__);
var b__11092 = cljs.core.chunk_buffer.call(null,size__5004__auto__);
if((function (){var i__11091 = (0);
while(true){
if((i__11091 < size__5004__auto__)){
var sql = cljs.core._nth.call(null,c__5003__auto__,i__11091);
cljs.core.chunk_append.call(null,b__11092,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.sql_view,sql], null));

var G__11093 = (i__11091 + (1));
i__11091 = G__11093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11092),demo$components$sandbox$hydration_display_$_iter__11089.call(null,cljs.core.chunk_rest.call(null,s__11090__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11092),null);
}
} else {
var sql = cljs.core.first.call(null,s__11090__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.sql_view,sql], null),demo$components$sandbox$hydration_display_$_iter__11089.call(null,cljs.core.rest.call(null,s__11090__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hydration-input","div.hydration-input",1118611150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,demo.components.sandbox.hydration),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"300px"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
cljs.core.reset_BANG_.call(null,demo.components.sandbox.hydration,demo.components.sandbox.get_value.call(null,e));

return demo.components.sandbox.do_hydration.call(null);
})], null)], null)], null);
});
demo.components.sandbox.cmp = (function demo$components$sandbox$cmp(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.half","div.half",1332116275),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.examples], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.hydration_input], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.half","div.half",1332116275),(cljs.core.truth_(cljs.core.deref.call(null,demo.components.sandbox.hydration_error))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hydration-error","div.hydration-error",-1182518173),cljs.core.deref.call(null,demo.components.sandbox.hydration_error)], null):null),(cljs.core.truth_(cljs.core.deref.call(null,demo.components.sandbox.hydration_result))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.hydration_display], null):null)], null)], null);
});
demo.components.sandbox.listen_BANG_ = (function demo$components$sandbox$listen_BANG_(){
var out = demo.knex.init_chan.call(null);
var c__6544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6544__auto__,out){
return (function (){
var f__6545__auto__ = (function (){var switch__6523__auto__ = ((function (c__6544__auto__,out){
return (function (state_11134){
var state_val_11135 = (state_11134[(1)]);
if((state_val_11135 === (1))){
var state_11134__$1 = state_11134;
var statearr_11136_11150 = state_11134__$1;
(statearr_11136_11150[(2)] = null);

(statearr_11136_11150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11135 === (2))){
var state_11134__$1 = state_11134;
var statearr_11137_11151 = state_11134__$1;
(statearr_11137_11151[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11135 === (3))){
var inst_11132 = (state_11134[(2)]);
var state_11134__$1 = state_11134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11134__$1,inst_11132);
} else {
if((state_val_11135 === (4))){
var state_11134__$1 = state_11134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11134__$1,(7),out);
} else {
if((state_val_11135 === (5))){
var state_11134__$1 = state_11134;
var statearr_11139_11152 = state_11134__$1;
(statearr_11139_11152[(2)] = null);

(statearr_11139_11152[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11135 === (6))){
var inst_11130 = (state_11134[(2)]);
var state_11134__$1 = state_11134;
var statearr_11140_11153 = state_11134__$1;
(statearr_11140_11153[(2)] = inst_11130);

(statearr_11140_11153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11135 === (7))){
var inst_11125 = (state_11134[(2)]);
var inst_11126 = cljs.core.swap_BANG_.call(null,demo.components.sandbox.sql_statements,cljs.core.conj,inst_11125);
var state_11134__$1 = (function (){var statearr_11141 = state_11134;
(statearr_11141[(7)] = inst_11126);

return statearr_11141;
})();
var statearr_11142_11154 = state_11134__$1;
(statearr_11142_11154[(2)] = null);

(statearr_11142_11154[(1)] = (2));


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
});})(c__6544__auto__,out))
;
return ((function (switch__6523__auto__,c__6544__auto__,out){
return (function() {
var demo$components$sandbox$listen_BANG__$_state_machine__6524__auto__ = null;
var demo$components$sandbox$listen_BANG__$_state_machine__6524__auto____0 = (function (){
var statearr_11146 = [null,null,null,null,null,null,null,null];
(statearr_11146[(0)] = demo$components$sandbox$listen_BANG__$_state_machine__6524__auto__);

(statearr_11146[(1)] = (1));

return statearr_11146;
});
var demo$components$sandbox$listen_BANG__$_state_machine__6524__auto____1 = (function (state_11134){
while(true){
var ret_value__6525__auto__ = (function (){try{while(true){
var result__6526__auto__ = switch__6523__auto__.call(null,state_11134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6526__auto__;
}
break;
}
}catch (e11147){if((e11147 instanceof Object)){
var ex__6527__auto__ = e11147;
var statearr_11148_11155 = state_11134;
(statearr_11148_11155[(5)] = ex__6527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11156 = state_11134;
state_11134 = G__11156;
continue;
} else {
return ret_value__6525__auto__;
}
break;
}
});
demo$components$sandbox$listen_BANG__$_state_machine__6524__auto__ = function(state_11134){
switch(arguments.length){
case 0:
return demo$components$sandbox$listen_BANG__$_state_machine__6524__auto____0.call(this);
case 1:
return demo$components$sandbox$listen_BANG__$_state_machine__6524__auto____1.call(this,state_11134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$components$sandbox$listen_BANG__$_state_machine__6524__auto__.cljs$core$IFn$_invoke$arity$0 = demo$components$sandbox$listen_BANG__$_state_machine__6524__auto____0;
demo$components$sandbox$listen_BANG__$_state_machine__6524__auto__.cljs$core$IFn$_invoke$arity$1 = demo$components$sandbox$listen_BANG__$_state_machine__6524__auto____1;
return demo$components$sandbox$listen_BANG__$_state_machine__6524__auto__;
})()
;})(switch__6523__auto__,c__6544__auto__,out))
})();
var state__6546__auto__ = (function (){var statearr_11149 = f__6545__auto__.call(null);
(statearr_11149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6544__auto__);

return statearr_11149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6546__auto__);
});})(c__6544__auto__,out))
);

return c__6544__auto__;
});
demo.components.sandbox.listen_BANG_.call(null);
demo.components.sandbox.set_hydration.call(null,demo.components.sandbox.first_example);

//# sourceMappingURL=sandbox.js.map