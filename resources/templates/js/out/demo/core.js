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
return (function (state_7435){
var state_val_7436 = (state_7435[(1)]);
if((state_val_7436 === (1))){
var state_7435__$1 = state_7435;
if(cljs.core.truth_(demo.core.has_index_db)){
var statearr_7437_7450 = state_7435__$1;
(statearr_7437_7450[(1)] = (2));

} else {
var statearr_7438_7451 = state_7435__$1;
(statearr_7438_7451[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7436 === (2))){
var inst_7418 = demo.create_db.create.call(null);
var state_7435__$1 = state_7435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7435__$1,(5),inst_7418);
} else {
if((state_val_7436 === (3))){
var state_7435__$1 = state_7435;
var statearr_7439_7452 = state_7435__$1;
(statearr_7439_7452[(2)] = null);

(statearr_7439_7452[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7436 === (4))){
var inst_7428 = (state_7435[(2)]);
var inst_7429 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7430 = [demo.core.container];
var inst_7431 = (new cljs.core.PersistentVector(null,1,(5),inst_7429,inst_7430,null));
var inst_7432 = document.getElementById("app");
var inst_7433 = reagent.core.render_component.call(null,inst_7431,inst_7432);
var state_7435__$1 = (function (){var statearr_7440 = state_7435;
(statearr_7440[(7)] = inst_7428);

return statearr_7440;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7435__$1,inst_7433);
} else {
if((state_val_7436 === (5))){
var inst_7420 = (state_7435[(2)]);
var inst_7421 = cljs_promises.async.consume_pair.call(null,inst_7420);
var inst_7422 = demo.populate_db.populate.call(null);
var state_7435__$1 = (function (){var statearr_7441 = state_7435;
(statearr_7441[(8)] = inst_7421);

return statearr_7441;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7435__$1,(6),inst_7422);
} else {
if((state_val_7436 === (6))){
var inst_7424 = (state_7435[(2)]);
var inst_7425 = cljs_promises.async.consume_pair.call(null,inst_7424);
var state_7435__$1 = state_7435;
var statearr_7442_7453 = state_7435__$1;
(statearr_7442_7453[(2)] = inst_7425);

(statearr_7442_7453[(1)] = (4));


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
var statearr_7446 = [null,null,null,null,null,null,null,null,null];
(statearr_7446[(0)] = demo$core$init_BANG__$_state_machine__6524__auto__);

(statearr_7446[(1)] = (1));

return statearr_7446;
});
var demo$core$init_BANG__$_state_machine__6524__auto____1 = (function (state_7435){
while(true){
var ret_value__6525__auto__ = (function (){try{while(true){
var result__6526__auto__ = switch__6523__auto__.call(null,state_7435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6526__auto__;
}
break;
}
}catch (e7447){if((e7447 instanceof Object)){
var ex__6527__auto__ = e7447;
var statearr_7448_7454 = state_7435;
(statearr_7448_7454[(5)] = ex__6527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7455 = state_7435;
state_7435 = G__7455;
continue;
} else {
return ret_value__6525__auto__;
}
break;
}
});
demo$core$init_BANG__$_state_machine__6524__auto__ = function(state_7435){
switch(arguments.length){
case 0:
return demo$core$init_BANG__$_state_machine__6524__auto____0.call(this);
case 1:
return demo$core$init_BANG__$_state_machine__6524__auto____1.call(this,state_7435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$core$init_BANG__$_state_machine__6524__auto__.cljs$core$IFn$_invoke$arity$0 = demo$core$init_BANG__$_state_machine__6524__auto____0;
demo$core$init_BANG__$_state_machine__6524__auto__.cljs$core$IFn$_invoke$arity$1 = demo$core$init_BANG__$_state_machine__6524__auto____1;
return demo$core$init_BANG__$_state_machine__6524__auto__;
})()
;})(switch__6523__auto__,c__6544__auto__))
})();
var state__6546__auto__ = (function (){var statearr_7449 = f__6545__auto__.call(null);
(statearr_7449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6544__auto__);

return statearr_7449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6546__auto__);
});})(c__6544__auto__))
);

return c__6544__auto__;
});
demo.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map