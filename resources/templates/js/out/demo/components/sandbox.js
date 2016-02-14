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
demo.components.sandbox.model = reagent.core.atom.call(null,demo.components.models.Author);
demo.components.sandbox.hydration = reagent.core.atom.call(null,null);
demo.components.sandbox.hydration_result = reagent.core.atom.call(null,null);
demo.components.sandbox.hydration_error = reagent.core.atom.call(null,null);
demo.components.sandbox.sql_statements = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
demo.components.sandbox.do_hydration = (function demo$components$sandbox$do_hydration(){
var c__6544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6544__auto__){
return (function (){
var f__6545__auto__ = (function (){var switch__6523__auto__ = ((function (c__6544__auto__){
return (function (state_7271){
var state_val_7272 = (state_7271[(1)]);
if((state_val_7272 === (1))){
var inst_7250 = cljs.core.deref.call(null,demo.components.sandbox.hydration);
var state_7271__$1 = state_7271;
if(cljs.core.truth_(inst_7250)){
var statearr_7273_7291 = state_7271__$1;
(statearr_7273_7291[(1)] = (2));

} else {
var statearr_7274_7292 = state_7271__$1;
(statearr_7274_7292[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7272 === (2))){
var inst_7252 = cljs.core.PersistentVector.EMPTY;
var inst_7253 = cljs.core.reset_BANG_.call(null,demo.components.sandbox.sql_statements,inst_7252);
var inst_7254 = cljs.core.deref.call(null,demo.components.sandbox.hydration);
var inst_7255 = demo.hydrate.hydrate.call(null,inst_7254);
var state_7271__$1 = (function (){var statearr_7275 = state_7271;
(statearr_7275[(7)] = inst_7253);

return statearr_7275;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7271__$1,(5),inst_7255);
} else {
if((state_val_7272 === (3))){
var state_7271__$1 = state_7271;
var statearr_7276_7293 = state_7271__$1;
(statearr_7276_7293[(2)] = null);

(statearr_7276_7293[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7272 === (4))){
var inst_7269 = (state_7271[(2)]);
var state_7271__$1 = state_7271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7271__$1,inst_7269);
} else {
if((state_val_7272 === (5))){
var inst_7258 = (state_7271[(8)]);
var inst_7257 = (state_7271[(2)]);
var inst_7258__$1 = inst_7257.call(null,(0));
var inst_7259 = inst_7257.call(null,(1));
var state_7271__$1 = (function (){var statearr_7277 = state_7271;
(statearr_7277[(8)] = inst_7258__$1);

(statearr_7277[(9)] = inst_7259);

return statearr_7277;
})();
if(cljs.core.truth_(inst_7258__$1)){
var statearr_7278_7294 = state_7271__$1;
(statearr_7278_7294[(1)] = (6));

} else {
var statearr_7279_7295 = state_7271__$1;
(statearr_7279_7295[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7272 === (6))){
var inst_7258 = (state_7271[(8)]);
var inst_7261 = cljs.core.reset_BANG_.call(null,demo.components.sandbox.hydration_result,inst_7258);
var inst_7262 = cljs.core.reset_BANG_.call(null,demo.components.sandbox.hydration_error,null);
var state_7271__$1 = (function (){var statearr_7280 = state_7271;
(statearr_7280[(10)] = inst_7261);

return statearr_7280;
})();
var statearr_7281_7296 = state_7271__$1;
(statearr_7281_7296[(2)] = inst_7262);

(statearr_7281_7296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7272 === (7))){
var inst_7259 = (state_7271[(9)]);
var inst_7264 = cljs.core.reset_BANG_.call(null,demo.components.sandbox.hydration_error,inst_7259);
var state_7271__$1 = state_7271;
var statearr_7282_7297 = state_7271__$1;
(statearr_7282_7297[(2)] = inst_7264);

(statearr_7282_7297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7272 === (8))){
var inst_7266 = (state_7271[(2)]);
var state_7271__$1 = state_7271;
var statearr_7283_7298 = state_7271__$1;
(statearr_7283_7298[(2)] = inst_7266);

(statearr_7283_7298[(1)] = (4));


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
});})(c__6544__auto__))
;
return ((function (switch__6523__auto__,c__6544__auto__){
return (function() {
var demo$components$sandbox$do_hydration_$_state_machine__6524__auto__ = null;
var demo$components$sandbox$do_hydration_$_state_machine__6524__auto____0 = (function (){
var statearr_7287 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7287[(0)] = demo$components$sandbox$do_hydration_$_state_machine__6524__auto__);

(statearr_7287[(1)] = (1));

return statearr_7287;
});
var demo$components$sandbox$do_hydration_$_state_machine__6524__auto____1 = (function (state_7271){
while(true){
var ret_value__6525__auto__ = (function (){try{while(true){
var result__6526__auto__ = switch__6523__auto__.call(null,state_7271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6526__auto__;
}
break;
}
}catch (e7288){if((e7288 instanceof Object)){
var ex__6527__auto__ = e7288;
var statearr_7289_7299 = state_7271;
(statearr_7289_7299[(5)] = ex__6527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7300 = state_7271;
state_7271 = G__7300;
continue;
} else {
return ret_value__6525__auto__;
}
break;
}
});
demo$components$sandbox$do_hydration_$_state_machine__6524__auto__ = function(state_7271){
switch(arguments.length){
case 0:
return demo$components$sandbox$do_hydration_$_state_machine__6524__auto____0.call(this);
case 1:
return demo$components$sandbox$do_hydration_$_state_machine__6524__auto____1.call(this,state_7271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$components$sandbox$do_hydration_$_state_machine__6524__auto__.cljs$core$IFn$_invoke$arity$0 = demo$components$sandbox$do_hydration_$_state_machine__6524__auto____0;
demo$components$sandbox$do_hydration_$_state_machine__6524__auto__.cljs$core$IFn$_invoke$arity$1 = demo$components$sandbox$do_hydration_$_state_machine__6524__auto____1;
return demo$components$sandbox$do_hydration_$_state_machine__6524__auto__;
})()
;})(switch__6523__auto__,c__6544__auto__))
})();
var state__6546__auto__ = (function (){var statearr_7290 = f__6545__auto__.call(null);
(statearr_7290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6544__auto__);

return statearr_7290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6546__auto__);
});})(c__6544__auto__))
);

return c__6544__auto__;
});
demo.components.sandbox.set_hydration = (function demo$components$sandbox$set_hydration(new_model,new_hydration){
cljs.core.reset_BANG_.call(null,demo.components.sandbox.model,new_model);

cljs.core.reset_BANG_.call(null,demo.components.sandbox.hydration,new_hydration);

return demo.components.sandbox.do_hydration.call(null);
});
demo.components.sandbox.example = (function demo$components$sandbox$example(model,modelName,hydration){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example","div.example",265005017),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return demo.components.sandbox.set_hydration.call(null,model,hydration);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.example-model","span.example-model",-430688109),modelName], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.example-hydration","span.example-hydration",-317688502),hydration], null)], null)], null);
});
demo.components.sandbox.examples = (function demo$components$sandbox$examples(){
var collapsed = reagent.core.atom.call(null,false);
return ((function (collapsed){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.examples","div.examples",-1009767485),(cljs.core.truth_(cljs.core.deref.call(null,collapsed))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null):null),(cljs.core.truth_(cljs.core.deref.call(null,collapsed))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Examples"], null)),(cljs.core.truth_(cljs.core.deref.call(null,collapsed))?null:new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.examples-container","div.examples-container",-594635501),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.example,demo.components.models.Author,"Author","[first_name,last_name]"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.example,demo.components.models.Book,"Book","[id,title]"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.example,demo.components.models.Author,"Author","[first_name,last_name,books=[title]]"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.example,demo.components.models.Subject,"Subject","[subject,books=count]"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.example,demo.components.models.Subject,"Subject","[subject,books=collect(title)]"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.example,demo.components.models.Author,"Author","[first_name,last_name,books=[title,subject=[subject]]]"], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.expander.cmp,collapsed,"examples"], null)], null);
});
;})(collapsed))
});
demo.components.sandbox.get_value = (function demo$components$sandbox$get_value(e){
return e.target.value;
});
demo.components.sandbox.model_dropdown = (function demo$components$sandbox$model_dropdown(){
var values = demo.components.models.all;
var m = cljs.core.deref.call(null,demo.components.sandbox.model);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (values,m){
return (function (e){
return demo.components.sandbox.set_hydration.call(null,values.call(null,demo.components.sandbox.get_value.call(null,e)),"");
});})(values,m))
], null),(function (){var iter__5005__auto__ = ((function (values,m){
return (function demo$components$sandbox$model_dropdown_$_iter__7305(s__7306){
return (new cljs.core.LazySeq(null,((function (values,m){
return (function (){
var s__7306__$1 = s__7306;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7306__$1);
if(temp__4425__auto__){
var s__7306__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7306__$2)){
var c__5003__auto__ = cljs.core.chunk_first.call(null,s__7306__$2);
var size__5004__auto__ = cljs.core.count.call(null,c__5003__auto__);
var b__7308 = cljs.core.chunk_buffer.call(null,size__5004__auto__);
if((function (){var i__7307 = (0);
while(true){
if((i__7307 < size__5004__auto__)){
var key = cljs.core._nth.call(null,c__5003__auto__,i__7307);
cljs.core.chunk_append.call(null,b__7308,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),((cljs.core._EQ_.call(null,values.call(null,key),cljs.core.deref.call(null,demo.components.sandbox.model)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),key,new cljs.core.Keyword(null,"selected","selected",574897764),"selected"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),key], null)),key], null));

var G__7309 = (i__7307 + (1));
i__7307 = G__7309;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7308),demo$components$sandbox$model_dropdown_$_iter__7305.call(null,cljs.core.chunk_rest.call(null,s__7306__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7308),null);
}
} else {
var key = cljs.core.first.call(null,s__7306__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),((cljs.core._EQ_.call(null,values.call(null,key),cljs.core.deref.call(null,demo.components.sandbox.model)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),key,new cljs.core.Keyword(null,"selected","selected",574897764),"selected"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),key], null)),key], null),demo$components$sandbox$model_dropdown_$_iter__7305.call(null,cljs.core.rest.call(null,s__7306__$2)));
}
} else {
return null;
}
break;
}
});})(values,m))
,null,null));
});})(values,m))
;
return iter__5005__auto__.call(null,cljs.core.keys.call(null,values));
})()], null);
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
return (function demo$components$sandbox$hydration_display_$_iter__7314(s__7315){
return (new cljs.core.LazySeq(null,((function (current_tab){
return (function (){
var s__7315__$1 = s__7315;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7315__$1);
if(temp__4425__auto__){
var s__7315__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7315__$2)){
var c__5003__auto__ = cljs.core.chunk_first.call(null,s__7315__$2);
var size__5004__auto__ = cljs.core.count.call(null,c__5003__auto__);
var b__7317 = cljs.core.chunk_buffer.call(null,size__5004__auto__);
if((function (){var i__7316 = (0);
while(true){
if((i__7316 < size__5004__auto__)){
var sql = cljs.core._nth.call(null,c__5003__auto__,i__7316);
cljs.core.chunk_append.call(null,b__7317,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.sql_view,sql], null));

var G__7318 = (i__7316 + (1));
i__7316 = G__7318;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7317),demo$components$sandbox$hydration_display_$_iter__7314.call(null,cljs.core.chunk_rest.call(null,s__7315__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7317),null);
}
} else {
var sql = cljs.core.first.call(null,s__7315__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.sql_view,sql], null),demo$components$sandbox$hydration_display_$_iter__7314.call(null,cljs.core.rest.call(null,s__7315__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hydration-input","div.hydration-input",1118611150),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,demo.components.sandbox.hydration),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"400px"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
cljs.core.reset_BANG_.call(null,demo.components.sandbox.hydration,demo.components.sandbox.get_value.call(null,e));

return demo.components.sandbox.do_hydration.call(null);
})], null)], null)], null);
});
demo.components.sandbox.cmp = (function demo$components$sandbox$cmp(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.hydration_input], null),(cljs.core.truth_(cljs.core.deref.call(null,demo.components.sandbox.hydration_error))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hydration-error","div.hydration-error",-1182518173),cljs.core.deref.call(null,demo.components.sandbox.hydration_error)], null):null),(cljs.core.truth_(cljs.core.deref.call(null,demo.components.sandbox.hydration_result))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.hydration_display], null):null)], null);
});
demo.components.sandbox.listen_BANG_ = (function demo$components$sandbox$listen_BANG_(){
var out = demo.knex.init_chan.call(null);
var c__6544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6544__auto__,out){
return (function (){
var f__6545__auto__ = (function (){var switch__6523__auto__ = ((function (c__6544__auto__,out){
return (function (state_7359){
var state_val_7360 = (state_7359[(1)]);
if((state_val_7360 === (1))){
var state_7359__$1 = state_7359;
var statearr_7361_7375 = state_7359__$1;
(statearr_7361_7375[(2)] = null);

(statearr_7361_7375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7360 === (2))){
var state_7359__$1 = state_7359;
var statearr_7362_7376 = state_7359__$1;
(statearr_7362_7376[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7360 === (3))){
var inst_7357 = (state_7359[(2)]);
var state_7359__$1 = state_7359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7359__$1,inst_7357);
} else {
if((state_val_7360 === (4))){
var state_7359__$1 = state_7359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7359__$1,(7),out);
} else {
if((state_val_7360 === (5))){
var state_7359__$1 = state_7359;
var statearr_7364_7377 = state_7359__$1;
(statearr_7364_7377[(2)] = null);

(statearr_7364_7377[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7360 === (6))){
var inst_7355 = (state_7359[(2)]);
var state_7359__$1 = state_7359;
var statearr_7365_7378 = state_7359__$1;
(statearr_7365_7378[(2)] = inst_7355);

(statearr_7365_7378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7360 === (7))){
var inst_7350 = (state_7359[(2)]);
var inst_7351 = cljs.core.swap_BANG_.call(null,demo.components.sandbox.sql_statements,cljs.core.conj,inst_7350);
var state_7359__$1 = (function (){var statearr_7366 = state_7359;
(statearr_7366[(7)] = inst_7351);

return statearr_7366;
})();
var statearr_7367_7379 = state_7359__$1;
(statearr_7367_7379[(2)] = null);

(statearr_7367_7379[(1)] = (2));


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
var statearr_7371 = [null,null,null,null,null,null,null,null];
(statearr_7371[(0)] = demo$components$sandbox$listen_BANG__$_state_machine__6524__auto__);

(statearr_7371[(1)] = (1));

return statearr_7371;
});
var demo$components$sandbox$listen_BANG__$_state_machine__6524__auto____1 = (function (state_7359){
while(true){
var ret_value__6525__auto__ = (function (){try{while(true){
var result__6526__auto__ = switch__6523__auto__.call(null,state_7359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6526__auto__;
}
break;
}
}catch (e7372){if((e7372 instanceof Object)){
var ex__6527__auto__ = e7372;
var statearr_7373_7380 = state_7359;
(statearr_7373_7380[(5)] = ex__6527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7381 = state_7359;
state_7359 = G__7381;
continue;
} else {
return ret_value__6525__auto__;
}
break;
}
});
demo$components$sandbox$listen_BANG__$_state_machine__6524__auto__ = function(state_7359){
switch(arguments.length){
case 0:
return demo$components$sandbox$listen_BANG__$_state_machine__6524__auto____0.call(this);
case 1:
return demo$components$sandbox$listen_BANG__$_state_machine__6524__auto____1.call(this,state_7359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$components$sandbox$listen_BANG__$_state_machine__6524__auto__.cljs$core$IFn$_invoke$arity$0 = demo$components$sandbox$listen_BANG__$_state_machine__6524__auto____0;
demo$components$sandbox$listen_BANG__$_state_machine__6524__auto__.cljs$core$IFn$_invoke$arity$1 = demo$components$sandbox$listen_BANG__$_state_machine__6524__auto____1;
return demo$components$sandbox$listen_BANG__$_state_machine__6524__auto__;
})()
;})(switch__6523__auto__,c__6544__auto__,out))
})();
var state__6546__auto__ = (function (){var statearr_7374 = f__6545__auto__.call(null);
(statearr_7374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6544__auto__);

return statearr_7374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6546__auto__);
});})(c__6544__auto__,out))
);

return c__6544__auto__;
});
demo.components.sandbox.listen_BANG_.call(null);

//# sourceMappingURL=sandbox.js.map