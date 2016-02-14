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
return (function (state_8698){
var state_val_8699 = (state_8698[(1)]);
if((state_val_8699 === (1))){
var state_8698__$1 = state_8698;
if(cljs.core.truth_(demo.core.has_index_db)){
var statearr_8700_8713 = state_8698__$1;
(statearr_8700_8713[(1)] = (2));

} else {
var statearr_8701_8714 = state_8698__$1;
(statearr_8701_8714[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8699 === (2))){
var inst_8681 = demo.create_db.create.call(null);
var state_8698__$1 = state_8698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8698__$1,(5),inst_8681);
} else {
if((state_val_8699 === (3))){
var state_8698__$1 = state_8698;
var statearr_8702_8715 = state_8698__$1;
(statearr_8702_8715[(2)] = null);

(statearr_8702_8715[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8699 === (4))){
var inst_8691 = (state_8698[(2)]);
var inst_8692 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8693 = [demo.core.container];
var inst_8694 = (new cljs.core.PersistentVector(null,1,(5),inst_8692,inst_8693,null));
var inst_8695 = document.getElementById("app");
var inst_8696 = reagent.core.render_component.call(null,inst_8694,inst_8695);
var state_8698__$1 = (function (){var statearr_8703 = state_8698;
(statearr_8703[(7)] = inst_8691);

return statearr_8703;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8698__$1,inst_8696);
} else {
if((state_val_8699 === (5))){
var inst_8683 = (state_8698[(2)]);
var inst_8684 = cljs_promises.async.consume_pair.call(null,inst_8683);
var inst_8685 = demo.populate_db.populate.call(null);
var state_8698__$1 = (function (){var statearr_8704 = state_8698;
(statearr_8704[(8)] = inst_8684);

return statearr_8704;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8698__$1,(6),inst_8685);
} else {
if((state_val_8699 === (6))){
var inst_8687 = (state_8698[(2)]);
var inst_8688 = cljs_promises.async.consume_pair.call(null,inst_8687);
var state_8698__$1 = state_8698;
var statearr_8705_8716 = state_8698__$1;
(statearr_8705_8716[(2)] = inst_8688);

(statearr_8705_8716[(1)] = (4));


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
var statearr_8709 = [null,null,null,null,null,null,null,null,null];
(statearr_8709[(0)] = demo$core$init_BANG__$_state_machine__6524__auto__);

(statearr_8709[(1)] = (1));

return statearr_8709;
});
var demo$core$init_BANG__$_state_machine__6524__auto____1 = (function (state_8698){
while(true){
var ret_value__6525__auto__ = (function (){try{while(true){
var result__6526__auto__ = switch__6523__auto__.call(null,state_8698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6526__auto__;
}
break;
}
}catch (e8710){if((e8710 instanceof Object)){
var ex__6527__auto__ = e8710;
var statearr_8711_8717 = state_8698;
(statearr_8711_8717[(5)] = ex__6527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8718 = state_8698;
state_8698 = G__8718;
continue;
} else {
return ret_value__6525__auto__;
}
break;
}
});
demo$core$init_BANG__$_state_machine__6524__auto__ = function(state_8698){
switch(arguments.length){
case 0:
return demo$core$init_BANG__$_state_machine__6524__auto____0.call(this);
case 1:
return demo$core$init_BANG__$_state_machine__6524__auto____1.call(this,state_8698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$core$init_BANG__$_state_machine__6524__auto__.cljs$core$IFn$_invoke$arity$0 = demo$core$init_BANG__$_state_machine__6524__auto____0;
demo$core$init_BANG__$_state_machine__6524__auto__.cljs$core$IFn$_invoke$arity$1 = demo$core$init_BANG__$_state_machine__6524__auto____1;
return demo$core$init_BANG__$_state_machine__6524__auto__;
})()
;})(switch__6523__auto__,c__6544__auto__))
})();
var state__6546__auto__ = (function (){var statearr_8712 = f__6545__auto__.call(null);
(statearr_8712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6544__auto__);

return statearr_8712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6546__auto__);
});})(c__6544__auto__))
);

return c__6544__auto__;
});
demo.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map