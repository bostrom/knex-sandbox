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
var c__6544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6544__auto__){
return (function (){
var f__6545__auto__ = (function (){var switch__6523__auto__ = ((function (c__6544__auto__){
return (function (state_10444){
var state_val_10445 = (state_10444[(1)]);
if((state_val_10445 === (1))){
var state_10444__$1 = state_10444;
if(cljs.core.truth_(demo.core.has_index_db)){
var statearr_10446_10459 = state_10444__$1;
(statearr_10446_10459[(1)] = (2));

} else {
var statearr_10447_10460 = state_10444__$1;
(statearr_10447_10460[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10445 === (2))){
var inst_10427 = demo.create_db.create.call(null);
var state_10444__$1 = state_10444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10444__$1,(5),inst_10427);
} else {
if((state_val_10445 === (3))){
var state_10444__$1 = state_10444;
var statearr_10448_10461 = state_10444__$1;
(statearr_10448_10461[(2)] = null);

(statearr_10448_10461[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10445 === (4))){
var inst_10437 = (state_10444[(2)]);
var inst_10438 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10439 = [demo.core.container];
var inst_10440 = (new cljs.core.PersistentVector(null,1,(5),inst_10438,inst_10439,null));
var inst_10441 = document.getElementById("app");
var inst_10442 = reagent.core.render_component.call(null,inst_10440,inst_10441);
var state_10444__$1 = (function (){var statearr_10449 = state_10444;
(statearr_10449[(7)] = inst_10437);

return statearr_10449;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10444__$1,inst_10442);
} else {
if((state_val_10445 === (5))){
var inst_10429 = (state_10444[(2)]);
var inst_10430 = cljs_promises.async.consume_pair.call(null,inst_10429);
var inst_10431 = demo.populate_db.populate.call(null);
var state_10444__$1 = (function (){var statearr_10450 = state_10444;
(statearr_10450[(8)] = inst_10430);

return statearr_10450;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10444__$1,(6),inst_10431);
} else {
if((state_val_10445 === (6))){
var inst_10433 = (state_10444[(2)]);
var inst_10434 = cljs_promises.async.consume_pair.call(null,inst_10433);
var state_10444__$1 = state_10444;
var statearr_10451_10462 = state_10444__$1;
(statearr_10451_10462[(2)] = inst_10434);

(statearr_10451_10462[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
var demo$core$init_BANG__$_state_machine__6524__auto__ = null;
var demo$core$init_BANG__$_state_machine__6524__auto____0 = (function (){
var statearr_10455 = [null,null,null,null,null,null,null,null,null];
(statearr_10455[(0)] = demo$core$init_BANG__$_state_machine__6524__auto__);

(statearr_10455[(1)] = (1));

return statearr_10455;
});
var demo$core$init_BANG__$_state_machine__6524__auto____1 = (function (state_10444){
while(true){
var ret_value__6525__auto__ = (function (){try{while(true){
var result__6526__auto__ = switch__6523__auto__.call(null,state_10444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6526__auto__;
}
break;
}
}catch (e10456){if((e10456 instanceof Object)){
var ex__6527__auto__ = e10456;
var statearr_10457_10463 = state_10444;
(statearr_10457_10463[(5)] = ex__6527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10464 = state_10444;
state_10444 = G__10464;
continue;
} else {
return ret_value__6525__auto__;
}
break;
}
});
demo$core$init_BANG__$_state_machine__6524__auto__ = function(state_10444){
switch(arguments.length){
case 0:
return demo$core$init_BANG__$_state_machine__6524__auto____0.call(this);
case 1:
return demo$core$init_BANG__$_state_machine__6524__auto____1.call(this,state_10444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$core$init_BANG__$_state_machine__6524__auto__.cljs$core$IFn$_invoke$arity$0 = demo$core$init_BANG__$_state_machine__6524__auto____0;
demo$core$init_BANG__$_state_machine__6524__auto__.cljs$core$IFn$_invoke$arity$1 = demo$core$init_BANG__$_state_machine__6524__auto____1;
return demo$core$init_BANG__$_state_machine__6524__auto__;
})()
;})(switch__6523__auto__,c__6544__auto__))
})();
var state__6546__auto__ = (function (){var statearr_10458 = f__6545__auto__.call(null);
(statearr_10458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6544__auto__);

return statearr_10458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6546__auto__);
});})(c__6544__auto__))
);

return c__6544__auto__;
});
demo.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map