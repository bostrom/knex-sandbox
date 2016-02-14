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
var c__6544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6544__auto__){
return (function (){
var f__6545__auto__ = (function (){var switch__6523__auto__ = ((function (c__6544__auto__){
return (function (state_10280){
var state_val_10281 = (state_10280[(1)]);
if((state_val_10281 === (7))){
var inst_10261 = (state_10280[(7)]);
var inst_10267 = (state_10280[(8)]);
var inst_10266 = cljs.core.println.call(null,"and error in here ",inst_10261);
var inst_10267__$1 = inst_10261.message;
var state_10280__$1 = (function (){var statearr_10282 = state_10280;
(statearr_10282[(9)] = inst_10266);

(statearr_10282[(8)] = inst_10267__$1);

return statearr_10282;
})();
if(cljs.core.truth_(inst_10267__$1)){
var statearr_10283_10305 = state_10280__$1;
(statearr_10283_10305[(1)] = (9));

} else {
var statearr_10284_10306 = state_10280__$1;
(statearr_10284_10306[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10281 === (1))){
var inst_10251 = cljs.core.deref.call(null,demo.components.sandbox.hydration);
var state_10280__$1 = state_10280;
if(cljs.core.truth_(inst_10251)){
var statearr_10285_10307 = state_10280__$1;
(statearr_10285_10307[(1)] = (2));

} else {
var statearr_10286_10308 = state_10280__$1;
(statearr_10286_10308[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10281 === (4))){
var inst_10278 = (state_10280[(2)]);
var state_10280__$1 = state_10280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10280__$1,inst_10278);
} else {
if((state_val_10281 === (6))){
var inst_10260 = (state_10280[(10)]);
var inst_10263 = cljs.core.reset_BANG_.call(null,demo.components.sandbox.hydration_result,inst_10260);
var inst_10264 = cljs.core.reset_BANG_.call(null,demo.components.sandbox.hydration_error,null);
var state_10280__$1 = (function (){var statearr_10287 = state_10280;
(statearr_10287[(11)] = inst_10263);

return statearr_10287;
})();
var statearr_10288_10309 = state_10280__$1;
(statearr_10288_10309[(2)] = inst_10264);

(statearr_10288_10309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10281 === (3))){
var state_10280__$1 = state_10280;
var statearr_10289_10310 = state_10280__$1;
(statearr_10289_10310[(2)] = null);

(statearr_10289_10310[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10281 === (2))){
var inst_10253 = cljs.core.PersistentVector.EMPTY;
var inst_10254 = cljs.core.reset_BANG_.call(null,demo.components.sandbox.sql_statements,inst_10253);
var inst_10255 = cljs.core.reset_BANG_.call(null,demo.components.sandbox.hydration_result,null);
var inst_10256 = cljs.core.deref.call(null,demo.components.sandbox.hydration);
var inst_10257 = demo.hydrate.hydrate.call(null,inst_10256);
var state_10280__$1 = (function (){var statearr_10290 = state_10280;
(statearr_10290[(12)] = inst_10254);

(statearr_10290[(13)] = inst_10255);

return statearr_10290;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10280__$1,(5),inst_10257);
} else {
if((state_val_10281 === (11))){
var inst_10272 = (state_10280[(2)]);
var inst_10273 = cljs.core.reset_BANG_.call(null,demo.components.sandbox.hydration_error,inst_10272);
var state_10280__$1 = state_10280;
var statearr_10291_10311 = state_10280__$1;
(statearr_10291_10311[(2)] = inst_10273);

(statearr_10291_10311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10281 === (9))){
var inst_10267 = (state_10280[(8)]);
var state_10280__$1 = state_10280;
var statearr_10292_10312 = state_10280__$1;
(statearr_10292_10312[(2)] = inst_10267);

(statearr_10292_10312[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10281 === (5))){
var inst_10260 = (state_10280[(10)]);
var inst_10259 = (state_10280[(2)]);
var inst_10260__$1 = inst_10259.call(null,(0));
var inst_10261 = inst_10259.call(null,(1));
var state_10280__$1 = (function (){var statearr_10293 = state_10280;
(statearr_10293[(10)] = inst_10260__$1);

(statearr_10293[(7)] = inst_10261);

return statearr_10293;
})();
if(cljs.core.truth_(inst_10260__$1)){
var statearr_10294_10313 = state_10280__$1;
(statearr_10294_10313[(1)] = (6));

} else {
var statearr_10295_10314 = state_10280__$1;
(statearr_10295_10314[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10281 === (10))){
var inst_10261 = (state_10280[(7)]);
var inst_10270 = inst_10261.toString();
var state_10280__$1 = state_10280;
var statearr_10296_10315 = state_10280__$1;
(statearr_10296_10315[(2)] = inst_10270);

(statearr_10296_10315[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10281 === (8))){
var inst_10275 = (state_10280[(2)]);
var state_10280__$1 = state_10280;
var statearr_10297_10316 = state_10280__$1;
(statearr_10297_10316[(2)] = inst_10275);

(statearr_10297_10316[(1)] = (4));


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
var statearr_10301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10301[(0)] = demo$components$sandbox$do_hydration_$_state_machine__6524__auto__);

(statearr_10301[(1)] = (1));

return statearr_10301;
});
var demo$components$sandbox$do_hydration_$_state_machine__6524__auto____1 = (function (state_10280){
while(true){
var ret_value__6525__auto__ = (function (){try{while(true){
var result__6526__auto__ = switch__6523__auto__.call(null,state_10280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6526__auto__;
}
break;
}
}catch (e10302){if((e10302 instanceof Object)){
var ex__6527__auto__ = e10302;
var statearr_10303_10317 = state_10280;
(statearr_10303_10317[(5)] = ex__6527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10318 = state_10280;
state_10280 = G__10318;
continue;
} else {
return ret_value__6525__auto__;
}
break;
}
});
demo$components$sandbox$do_hydration_$_state_machine__6524__auto__ = function(state_10280){
switch(arguments.length){
case 0:
return demo$components$sandbox$do_hydration_$_state_machine__6524__auto____0.call(this);
case 1:
return demo$components$sandbox$do_hydration_$_state_machine__6524__auto____1.call(this,state_10280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$components$sandbox$do_hydration_$_state_machine__6524__auto__.cljs$core$IFn$_invoke$arity$0 = demo$components$sandbox$do_hydration_$_state_machine__6524__auto____0;
demo$components$sandbox$do_hydration_$_state_machine__6524__auto__.cljs$core$IFn$_invoke$arity$1 = demo$components$sandbox$do_hydration_$_state_machine__6524__auto____1;
return demo$components$sandbox$do_hydration_$_state_machine__6524__auto__;
})()
;})(switch__6523__auto__,c__6544__auto__))
})();
var state__6546__auto__ = (function (){var statearr_10304 = f__6545__auto__.call(null);
(statearr_10304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6544__auto__);

return statearr_10304;
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
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.examples","div.examples",-1009767485),(cljs.core.truth_(cljs.core.deref.call(null,collapsed))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null):null),(cljs.core.truth_(cljs.core.deref.call(null,collapsed))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Examples"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.expander.cmp,collapsed,"examples"], null),(cljs.core.truth_(cljs.core.deref.call(null,collapsed))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.examples-container","div.examples-container",-594635501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.example,demo.components.sandbox.first_example], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.example,"knex\n  .column('first_name', 'last_name')\n  .select()\n  .from('authors')"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.example,"knex\n  .table('authors')\n  .innerJoin('books', 'books.author_id', 'authors.id')\n  .select('authors.first_name', 'books.title')"], null)], null))], null);
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.nav-tabs","ul.nav.nav-tabs",1865557319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sqls,sqls_c,rows,row_c){
return (function (){
return cljs.core.reset_BANG_.call(null,current_atom,"records");
});})(sqls,sqls_c,rows,row_c))
], null),[cljs.core.str("returned "),cljs.core.str(row_c),cljs.core.str(" row"),cljs.core.str(((cljs.core._EQ_.call(null,row_c,(1)))?null:"s"))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sqls,sqls_c,rows,row_c){
return (function (){
return cljs.core.reset_BANG_.call(null,current_atom,"sql");
});})(sqls,sqls_c,rows,row_c))
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
return (function demo$components$sandbox$hydration_display_$_iter__10323(s__10324){
return (new cljs.core.LazySeq(null,((function (current_tab){
return (function (){
var s__10324__$1 = s__10324;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10324__$1);
if(temp__4425__auto__){
var s__10324__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10324__$2)){
var c__5003__auto__ = cljs.core.chunk_first.call(null,s__10324__$2);
var size__5004__auto__ = cljs.core.count.call(null,c__5003__auto__);
var b__10326 = cljs.core.chunk_buffer.call(null,size__5004__auto__);
if((function (){var i__10325 = (0);
while(true){
if((i__10325 < size__5004__auto__)){
var sql = cljs.core._nth.call(null,c__5003__auto__,i__10325);
cljs.core.chunk_append.call(null,b__10326,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.sql_view,sql], null));

var G__10327 = (i__10325 + (1));
i__10325 = G__10327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10326),demo$components$sandbox$hydration_display_$_iter__10323.call(null,cljs.core.chunk_rest.call(null,s__10324__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10326),null);
}
} else {
var sql = cljs.core.first.call(null,s__10324__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.sql_view,sql], null),demo$components$sandbox$hydration_display_$_iter__10323.call(null,cljs.core.rest.call(null,s__10324__$2)));
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
return (function (state_10368){
var state_val_10369 = (state_10368[(1)]);
if((state_val_10369 === (1))){
var state_10368__$1 = state_10368;
var statearr_10370_10384 = state_10368__$1;
(statearr_10370_10384[(2)] = null);

(statearr_10370_10384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10369 === (2))){
var state_10368__$1 = state_10368;
var statearr_10371_10385 = state_10368__$1;
(statearr_10371_10385[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10369 === (3))){
var inst_10366 = (state_10368[(2)]);
var state_10368__$1 = state_10368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10368__$1,inst_10366);
} else {
if((state_val_10369 === (4))){
var state_10368__$1 = state_10368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10368__$1,(7),out);
} else {
if((state_val_10369 === (5))){
var state_10368__$1 = state_10368;
var statearr_10373_10386 = state_10368__$1;
(statearr_10373_10386[(2)] = null);

(statearr_10373_10386[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10369 === (6))){
var inst_10364 = (state_10368[(2)]);
var state_10368__$1 = state_10368;
var statearr_10374_10387 = state_10368__$1;
(statearr_10374_10387[(2)] = inst_10364);

(statearr_10374_10387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10369 === (7))){
var inst_10359 = (state_10368[(2)]);
var inst_10360 = cljs.core.swap_BANG_.call(null,demo.components.sandbox.sql_statements,cljs.core.conj,inst_10359);
var state_10368__$1 = (function (){var statearr_10375 = state_10368;
(statearr_10375[(7)] = inst_10360);

return statearr_10375;
})();
var statearr_10376_10388 = state_10368__$1;
(statearr_10376_10388[(2)] = null);

(statearr_10376_10388[(1)] = (2));


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
var statearr_10380 = [null,null,null,null,null,null,null,null];
(statearr_10380[(0)] = demo$components$sandbox$listen_BANG__$_state_machine__6524__auto__);

(statearr_10380[(1)] = (1));

return statearr_10380;
});
var demo$components$sandbox$listen_BANG__$_state_machine__6524__auto____1 = (function (state_10368){
while(true){
var ret_value__6525__auto__ = (function (){try{while(true){
var result__6526__auto__ = switch__6523__auto__.call(null,state_10368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6526__auto__;
}
break;
}
}catch (e10381){if((e10381 instanceof Object)){
var ex__6527__auto__ = e10381;
var statearr_10382_10389 = state_10368;
(statearr_10382_10389[(5)] = ex__6527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10390 = state_10368;
state_10368 = G__10390;
continue;
} else {
return ret_value__6525__auto__;
}
break;
}
});
demo$components$sandbox$listen_BANG__$_state_machine__6524__auto__ = function(state_10368){
switch(arguments.length){
case 0:
return demo$components$sandbox$listen_BANG__$_state_machine__6524__auto____0.call(this);
case 1:
return demo$components$sandbox$listen_BANG__$_state_machine__6524__auto____1.call(this,state_10368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$components$sandbox$listen_BANG__$_state_machine__6524__auto__.cljs$core$IFn$_invoke$arity$0 = demo$components$sandbox$listen_BANG__$_state_machine__6524__auto____0;
demo$components$sandbox$listen_BANG__$_state_machine__6524__auto__.cljs$core$IFn$_invoke$arity$1 = demo$components$sandbox$listen_BANG__$_state_machine__6524__auto____1;
return demo$components$sandbox$listen_BANG__$_state_machine__6524__auto__;
})()
;})(switch__6523__auto__,c__6544__auto__,out))
})();
var state__6546__auto__ = (function (){var statearr_10383 = f__6545__auto__.call(null);
(statearr_10383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6544__auto__);

return statearr_10383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6546__auto__);
});})(c__6544__auto__,out))
);

return c__6544__auto__;
});
demo.components.sandbox.listen_BANG_.call(null);
demo.components.sandbox.set_hydration.call(null,demo.components.sandbox.first_example);

//# sourceMappingURL=sandbox.js.map