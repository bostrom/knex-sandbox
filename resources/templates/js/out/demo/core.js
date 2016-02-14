// Compiled by ClojureScript 0.0-3308 {}
goog.provide('demo.core');
goog.require('cljs.core');
goog.require('demo.components.intro');
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.intro.cmp], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.db_schema.cmp], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.components.sandbox.cmp], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.core.no_index_db_warning], null);
}
});
demo.core.init_BANG_ = (function demo$core$init_BANG_(){
var c__6544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6544__auto__){
return (function (){
var f__6545__auto__ = (function (){var switch__6523__auto__ = ((function (c__6544__auto__){
return (function (state_11210){
var state_val_11211 = (state_11210[(1)]);
if((state_val_11211 === (1))){
var state_11210__$1 = state_11210;
if(cljs.core.truth_(demo.core.has_index_db)){
var statearr_11212_11225 = state_11210__$1;
(statearr_11212_11225[(1)] = (2));

} else {
var statearr_11213_11226 = state_11210__$1;
(statearr_11213_11226[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11211 === (2))){
var inst_11193 = demo.create_db.create.call(null);
var state_11210__$1 = state_11210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11210__$1,(5),inst_11193);
} else {
if((state_val_11211 === (3))){
var state_11210__$1 = state_11210;
var statearr_11214_11227 = state_11210__$1;
(statearr_11214_11227[(2)] = null);

(statearr_11214_11227[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11211 === (4))){
var inst_11203 = (state_11210[(2)]);
var inst_11204 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11205 = [demo.core.container];
var inst_11206 = (new cljs.core.PersistentVector(null,1,(5),inst_11204,inst_11205,null));
var inst_11207 = document.getElementById("app");
var inst_11208 = reagent.core.render_component.call(null,inst_11206,inst_11207);
var state_11210__$1 = (function (){var statearr_11215 = state_11210;
(statearr_11215[(7)] = inst_11203);

return statearr_11215;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11210__$1,inst_11208);
} else {
if((state_val_11211 === (5))){
var inst_11195 = (state_11210[(2)]);
var inst_11196 = cljs_promises.async.consume_pair.call(null,inst_11195);
var inst_11197 = demo.populate_db.populate.call(null);
var state_11210__$1 = (function (){var statearr_11216 = state_11210;
(statearr_11216[(8)] = inst_11196);

return statearr_11216;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11210__$1,(6),inst_11197);
} else {
if((state_val_11211 === (6))){
var inst_11199 = (state_11210[(2)]);
var inst_11200 = cljs_promises.async.consume_pair.call(null,inst_11199);
var state_11210__$1 = state_11210;
var statearr_11217_11228 = state_11210__$1;
(statearr_11217_11228[(2)] = inst_11200);

(statearr_11217_11228[(1)] = (4));


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
var statearr_11221 = [null,null,null,null,null,null,null,null,null];
(statearr_11221[(0)] = demo$core$init_BANG__$_state_machine__6524__auto__);

(statearr_11221[(1)] = (1));

return statearr_11221;
});
var demo$core$init_BANG__$_state_machine__6524__auto____1 = (function (state_11210){
while(true){
var ret_value__6525__auto__ = (function (){try{while(true){
var result__6526__auto__ = switch__6523__auto__.call(null,state_11210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6526__auto__;
}
break;
}
}catch (e11222){if((e11222 instanceof Object)){
var ex__6527__auto__ = e11222;
var statearr_11223_11229 = state_11210;
(statearr_11223_11229[(5)] = ex__6527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11230 = state_11210;
state_11210 = G__11230;
continue;
} else {
return ret_value__6525__auto__;
}
break;
}
});
demo$core$init_BANG__$_state_machine__6524__auto__ = function(state_11210){
switch(arguments.length){
case 0:
return demo$core$init_BANG__$_state_machine__6524__auto____0.call(this);
case 1:
return demo$core$init_BANG__$_state_machine__6524__auto____1.call(this,state_11210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
demo$core$init_BANG__$_state_machine__6524__auto__.cljs$core$IFn$_invoke$arity$0 = demo$core$init_BANG__$_state_machine__6524__auto____0;
demo$core$init_BANG__$_state_machine__6524__auto__.cljs$core$IFn$_invoke$arity$1 = demo$core$init_BANG__$_state_machine__6524__auto____1;
return demo$core$init_BANG__$_state_machine__6524__auto__;
})()
;})(switch__6523__auto__,c__6544__auto__))
})();
var state__6546__auto__ = (function (){var statearr_11224 = f__6545__auto__.call(null);
(statearr_11224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6544__auto__);

return statearr_11224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6546__auto__);
});})(c__6544__auto__))
);

return c__6544__auto__;
});
demo.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map