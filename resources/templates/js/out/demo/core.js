// Compiled by ClojureScript 0.0-3308 {}
goog.provide('demo.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_promises.async');
goog.require('demo.components.db_schema');
goog.require('demo.create_db');
goog.require('demo.populate_db');
goog.require('demo.components.sandbox');
cljs.core.enable_console_print_BANG_.call(null);
demo.core.has_index_db = !(cljs.core.not.call(null,window.openDatabase));
demo.core.no_index_db_warning = (function demo$core$no_index_db_warning(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.center","div.center",1338956224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.alert.alert-danger","div.alert.alert-danger",-890058301),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"IndexedDB Needed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"IndexedDB gives browsers access to a SQLite-esque database, which the demo needs to function. Unfortunately only webkit browsers these days have IndexedDB, if you come back with Chrome, Safari or Opera you'll be able to try the demo."], null)], null)], null);
});
demo.core.container = (function demo$core$container(){
if(cljs.core.truth_(demo.core.has_index_db)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.db_schema.cmp], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.cmp], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.core.no_index_db_warning], null);
}
});
demo.core.init_BANG_ = (function demo$core$init_BANG_(){
var c__6627__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6627__auto__){
return (function (){
var f__6628__auto__ = (function (){var switch__6606__auto__ = ((function (c__6627__auto__){
return (function (state_15172){
var state_val_15173 = (state_15172[(1)]);
if((state_val_15173 === (1))){
var state_15172__$1 = state_15172;
if(cljs.core.truth_(demo.core.has_index_db)){
var statearr_15174_15187 = state_15172__$1;
(statearr_15174_15187[(1)] = (2));

} else {
var statearr_15175_15188 = state_15172__$1;
(statearr_15175_15188[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15173 === (2))){
var inst_15155 = demo.create_db.create.call(null);
var state_15172__$1 = state_15172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15172__$1,(5),inst_15155);
} else {
if((state_val_15173 === (3))){
var state_15172__$1 = state_15172;
var statearr_15176_15189 = state_15172__$1;
(statearr_15176_15189[(2)] = null);

(statearr_15176_15189[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15173 === (4))){
var inst_15165 = (state_15172[(2)]);
var inst_15166 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15167 = [demo.core.container];
var inst_15168 = (new cljs.core.PersistentVector(null,1,(5),inst_15166,inst_15167,null));
var inst_15169 = document.getElementById("app");
var inst_15170 = reagent.core.render_component.call(null,inst_15168,inst_15169);
var state_15172__$1 = (function (){var statearr_15177 = state_15172;
(statearr_15177[(7)] = inst_15165);

return statearr_15177;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15172__$1,inst_15170);
} else {
if((state_val_15173 === (5))){
var inst_15157 = (state_15172[(2)]);
var inst_15158 = cljs_promises.async.consume_pair.call(null,inst_15157);
var inst_15159 = demo.populate_db.populate.call(null);
var state_15172__$1 = (function (){var statearr_15178 = state_15172;
(statearr_15178[(8)] = inst_15158);

return statearr_15178;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15172__$1,(6),inst_15159);
} else {
if((state_val_15173 === (6))){
var inst_15161 = (state_15172[(2)]);
var inst_15162 = cljs_promises.async.consume_pair.call(null,inst_15161);
var state_15172__$1 = state_15172;
var statearr_15179_15190 = state_15172__$1;
(statearr_15179_15190[(2)] = inst_15162);

(statearr_15179_15190[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
var demo$core$init_BANG__$_state_machine__6607__auto__ = null;
var demo$core$init_BANG__$_state_machine__6607__auto____0 = (function (){
var statearr_15183 = [null,null,null,null,null,null,null,null,null];
(statearr_15183[(0)] = demo$core$init_BANG__$_state_machine__6607__auto__);

(statearr_15183[(1)] = (1));

return statearr_15183;
});
var demo$core$init_BANG__$_state_machine__6607__auto____1 = (function (state_15172){
while(true){
var ret_value__6608__auto__ = (function (){try{while(true){
var result__6609__auto__ = switch__6606__auto__.call(null,state_15172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6609__auto__;
}
break;
}
}catch (e15184){if((e15184 instanceof Object)){
var ex__6610__auto__ = e15184;
var statearr_15185_15191 = state_15172;
(statearr_15185_15191[(5)] = ex__6610__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6608__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15192 = state_15172;
state_15172 = G__15192;
continue;
} else {
return ret_value__6608__auto__;
}
break;
}
});
demo$core$init_BANG__$_state_machine__6607__auto__ = function(state_15172){
switch(arguments.length){
case 0:
return demo$core$init_BANG__$_state_machine__6607__auto____0.call(this);
case 1:
return demo$core$init_BANG__$_state_machine__6607__auto____1.call(this,state_15172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$core$init_BANG__$_state_machine__6607__auto__.cljs$core$IFn$_invoke$arity$0 = demo$core$init_BANG__$_state_machine__6607__auto____0;
demo$core$init_BANG__$_state_machine__6607__auto__.cljs$core$IFn$_invoke$arity$1 = demo$core$init_BANG__$_state_machine__6607__auto____1;
return demo$core$init_BANG__$_state_machine__6607__auto__;
})()
;})(switch__6606__auto__,c__6627__auto__))
})();
var state__6629__auto__ = (function (){var statearr_15186 = f__6628__auto__.call(null);
(statearr_15186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6627__auto__);

return statearr_15186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6629__auto__);
});})(c__6627__auto__))
);

return c__6627__auto__;
});
demo.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map