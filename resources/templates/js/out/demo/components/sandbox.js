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
return (function (state_8534){
var state_val_8535 = (state_8534[(1)]);
if((state_val_8535 === (7))){
var inst_8515 = (state_8534[(7)]);
var inst_8521 = (state_8534[(8)]);
var inst_8520 = cljs.core.println.call(null,"and error in here ",inst_8515);
var inst_8521__$1 = inst_8515.message;
var state_8534__$1 = (function (){var statearr_8536 = state_8534;
(statearr_8536[(9)] = inst_8520);

(statearr_8536[(8)] = inst_8521__$1);

return statearr_8536;
})();
if(cljs.core.truth_(inst_8521__$1)){
var statearr_8537_8559 = state_8534__$1;
(statearr_8537_8559[(1)] = (9));

} else {
var statearr_8538_8560 = state_8534__$1;
(statearr_8538_8560[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8535 === (1))){
var inst_8505 = cljs.core.deref.call(null,demo.components.sandbox.hydration);
var state_8534__$1 = state_8534;
if(cljs.core.truth_(inst_8505)){
var statearr_8539_8561 = state_8534__$1;
(statearr_8539_8561[(1)] = (2));

} else {
var statearr_8540_8562 = state_8534__$1;
(statearr_8540_8562[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8535 === (4))){
var inst_8532 = (state_8534[(2)]);
var state_8534__$1 = state_8534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8534__$1,inst_8532);
} else {
if((state_val_8535 === (6))){
var inst_8514 = (state_8534[(10)]);
var inst_8517 = cljs.core.reset_BANG_.call(null,demo.components.sandbox.hydration_result,inst_8514);
var inst_8518 = cljs.core.reset_BANG_.call(null,demo.components.sandbox.hydration_error,null);
var state_8534__$1 = (function (){var statearr_8541 = state_8534;
(statearr_8541[(11)] = inst_8517);

return statearr_8541;
})();
var statearr_8542_8563 = state_8534__$1;
(statearr_8542_8563[(2)] = inst_8518);

(statearr_8542_8563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8535 === (3))){
var state_8534__$1 = state_8534;
var statearr_8543_8564 = state_8534__$1;
(statearr_8543_8564[(2)] = null);

(statearr_8543_8564[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8535 === (2))){
var inst_8507 = cljs.core.PersistentVector.EMPTY;
var inst_8508 = cljs.core.reset_BANG_.call(null,demo.components.sandbox.sql_statements,inst_8507);
var inst_8509 = cljs.core.reset_BANG_.call(null,demo.components.sandbox.hydration_result,null);
var inst_8510 = cljs.core.deref.call(null,demo.components.sandbox.hydration);
var inst_8511 = demo.hydrate.hydrate.call(null,inst_8510);
var state_8534__$1 = (function (){var statearr_8544 = state_8534;
(statearr_8544[(12)] = inst_8509);

(statearr_8544[(13)] = inst_8508);

return statearr_8544;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8534__$1,(5),inst_8511);
} else {
if((state_val_8535 === (11))){
var inst_8526 = (state_8534[(2)]);
var inst_8527 = cljs.core.reset_BANG_.call(null,demo.components.sandbox.hydration_error,inst_8526);
var state_8534__$1 = state_8534;
var statearr_8545_8565 = state_8534__$1;
(statearr_8545_8565[(2)] = inst_8527);

(statearr_8545_8565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8535 === (9))){
var inst_8521 = (state_8534[(8)]);
var state_8534__$1 = state_8534;
var statearr_8546_8566 = state_8534__$1;
(statearr_8546_8566[(2)] = inst_8521);

(statearr_8546_8566[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8535 === (5))){
var inst_8514 = (state_8534[(10)]);
var inst_8513 = (state_8534[(2)]);
var inst_8514__$1 = inst_8513.call(null,(0));
var inst_8515 = inst_8513.call(null,(1));
var state_8534__$1 = (function (){var statearr_8547 = state_8534;
(statearr_8547[(7)] = inst_8515);

(statearr_8547[(10)] = inst_8514__$1);

return statearr_8547;
})();
if(cljs.core.truth_(inst_8514__$1)){
var statearr_8548_8567 = state_8534__$1;
(statearr_8548_8567[(1)] = (6));

} else {
var statearr_8549_8568 = state_8534__$1;
(statearr_8549_8568[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8535 === (10))){
var inst_8515 = (state_8534[(7)]);
var inst_8524 = inst_8515.toString();
var state_8534__$1 = state_8534;
var statearr_8550_8569 = state_8534__$1;
(statearr_8550_8569[(2)] = inst_8524);

(statearr_8550_8569[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8535 === (8))){
var inst_8529 = (state_8534[(2)]);
var state_8534__$1 = state_8534;
var statearr_8551_8570 = state_8534__$1;
(statearr_8551_8570[(2)] = inst_8529);

(statearr_8551_8570[(1)] = (4));


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
var statearr_8555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8555[(0)] = demo$components$sandbox$do_hydration_$_state_machine__6524__auto__);

(statearr_8555[(1)] = (1));

return statearr_8555;
});
var demo$components$sandbox$do_hydration_$_state_machine__6524__auto____1 = (function (state_8534){
while(true){
var ret_value__6525__auto__ = (function (){try{while(true){
var result__6526__auto__ = switch__6523__auto__.call(null,state_8534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6526__auto__;
}
break;
}
}catch (e8556){if((e8556 instanceof Object)){
var ex__6527__auto__ = e8556;
var statearr_8557_8571 = state_8534;
(statearr_8557_8571[(5)] = ex__6527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8572 = state_8534;
state_8534 = G__8572;
continue;
} else {
return ret_value__6525__auto__;
}
break;
}
});
demo$components$sandbox$do_hydration_$_state_machine__6524__auto__ = function(state_8534){
switch(arguments.length){
case 0:
return demo$components$sandbox$do_hydration_$_state_machine__6524__auto____0.call(this);
case 1:
return demo$components$sandbox$do_hydration_$_state_machine__6524__auto____1.call(this,state_8534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$components$sandbox$do_hydration_$_state_machine__6524__auto__.cljs$core$IFn$_invoke$arity$0 = demo$components$sandbox$do_hydration_$_state_machine__6524__auto____0;
demo$components$sandbox$do_hydration_$_state_machine__6524__auto__.cljs$core$IFn$_invoke$arity$1 = demo$components$sandbox$do_hydration_$_state_machine__6524__auto____1;
return demo$components$sandbox$do_hydration_$_state_machine__6524__auto__;
})()
;})(switch__6523__auto__,c__6544__auto__))
})();
var state__6546__auto__ = (function (){var statearr_8558 = f__6545__auto__.call(null);
(statearr_8558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6544__auto__);

return statearr_8558;
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
return (function demo$components$sandbox$hydration_display_$_iter__8577(s__8578){
return (new cljs.core.LazySeq(null,((function (current_tab){
return (function (){
var s__8578__$1 = s__8578;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8578__$1);
if(temp__4425__auto__){
var s__8578__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8578__$2)){
var c__5003__auto__ = cljs.core.chunk_first.call(null,s__8578__$2);
var size__5004__auto__ = cljs.core.count.call(null,c__5003__auto__);
var b__8580 = cljs.core.chunk_buffer.call(null,size__5004__auto__);
if((function (){var i__8579 = (0);
while(true){
if((i__8579 < size__5004__auto__)){
var sql = cljs.core._nth.call(null,c__5003__auto__,i__8579);
cljs.core.chunk_append.call(null,b__8580,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.sql_view,sql], null));

var G__8581 = (i__8579 + (1));
i__8579 = G__8581;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8580),demo$components$sandbox$hydration_display_$_iter__8577.call(null,cljs.core.chunk_rest.call(null,s__8578__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8580),null);
}
} else {
var sql = cljs.core.first.call(null,s__8578__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.sql_view,sql], null),demo$components$sandbox$hydration_display_$_iter__8577.call(null,cljs.core.rest.call(null,s__8578__$2)));
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
var c__6544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6544__auto__,out){
return (function (){
var f__6545__auto__ = (function (){var switch__6523__auto__ = ((function (c__6544__auto__,out){
return (function (state_8622){
var state_val_8623 = (state_8622[(1)]);
if((state_val_8623 === (1))){
var state_8622__$1 = state_8622;
var statearr_8624_8638 = state_8622__$1;
(statearr_8624_8638[(2)] = null);

(statearr_8624_8638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8623 === (2))){
var state_8622__$1 = state_8622;
var statearr_8625_8639 = state_8622__$1;
(statearr_8625_8639[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8623 === (3))){
var inst_8620 = (state_8622[(2)]);
var state_8622__$1 = state_8622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8622__$1,inst_8620);
} else {
if((state_val_8623 === (4))){
var state_8622__$1 = state_8622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8622__$1,(7),out);
} else {
if((state_val_8623 === (5))){
var state_8622__$1 = state_8622;
var statearr_8627_8640 = state_8622__$1;
(statearr_8627_8640[(2)] = null);

(statearr_8627_8640[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8623 === (6))){
var inst_8618 = (state_8622[(2)]);
var state_8622__$1 = state_8622;
var statearr_8628_8641 = state_8622__$1;
(statearr_8628_8641[(2)] = inst_8618);

(statearr_8628_8641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8623 === (7))){
var inst_8613 = (state_8622[(2)]);
var inst_8614 = cljs.core.swap_BANG_.call(null,demo.components.sandbox.sql_statements,cljs.core.conj,inst_8613);
var state_8622__$1 = (function (){var statearr_8629 = state_8622;
(statearr_8629[(7)] = inst_8614);

return statearr_8629;
})();
var statearr_8630_8642 = state_8622__$1;
(statearr_8630_8642[(2)] = null);

(statearr_8630_8642[(1)] = (2));


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
var statearr_8634 = [null,null,null,null,null,null,null,null];
(statearr_8634[(0)] = demo$components$sandbox$listen_BANG__$_state_machine__6524__auto__);

(statearr_8634[(1)] = (1));

return statearr_8634;
});
var demo$components$sandbox$listen_BANG__$_state_machine__6524__auto____1 = (function (state_8622){
while(true){
var ret_value__6525__auto__ = (function (){try{while(true){
var result__6526__auto__ = switch__6523__auto__.call(null,state_8622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6526__auto__;
}
break;
}
}catch (e8635){if((e8635 instanceof Object)){
var ex__6527__auto__ = e8635;
var statearr_8636_8643 = state_8622;
(statearr_8636_8643[(5)] = ex__6527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8644 = state_8622;
state_8622 = G__8644;
continue;
} else {
return ret_value__6525__auto__;
}
break;
}
});
demo$components$sandbox$listen_BANG__$_state_machine__6524__auto__ = function(state_8622){
switch(arguments.length){
case 0:
return demo$components$sandbox$listen_BANG__$_state_machine__6524__auto____0.call(this);
case 1:
return demo$components$sandbox$listen_BANG__$_state_machine__6524__auto____1.call(this,state_8622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$components$sandbox$listen_BANG__$_state_machine__6524__auto__.cljs$core$IFn$_invoke$arity$0 = demo$components$sandbox$listen_BANG__$_state_machine__6524__auto____0;
demo$components$sandbox$listen_BANG__$_state_machine__6524__auto__.cljs$core$IFn$_invoke$arity$1 = demo$components$sandbox$listen_BANG__$_state_machine__6524__auto____1;
return demo$components$sandbox$listen_BANG__$_state_machine__6524__auto__;
})()
;})(switch__6523__auto__,c__6544__auto__,out))
})();
var state__6546__auto__ = (function (){var statearr_8637 = f__6545__auto__.call(null);
(statearr_8637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6544__auto__);

return statearr_8637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6546__auto__);
});})(c__6544__auto__,out))
);

return c__6544__auto__;
});
demo.components.sandbox.listen_BANG_.call(null);
demo.components.sandbox.set_hydration.call(null,demo.components.sandbox.first_example);

//# sourceMappingURL=sandbox.js.map