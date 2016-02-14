// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs_promises.async');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs_promises.core');
/**
 * If you want, you can globally extend Promise to act as a one-way channel which
 * can only be taken from, and which starts producing a never-ending stream of constants
 * once the promise resolves. `value-transform` and `error-transform` are functions
 * which are applied to the value or error when the Promise resolves or rejects.
 * Both `value-transform` and `error-transform` default to identity. Takes an optional
 * `promise-constructor` to extend, defaulting to `js/Promise`.
 */
cljs_promises.async.extend_promises_as_channels_BANG_ = (function cljs_promises$async$extend_promises_as_channels_BANG_(){
var G__12201 = arguments.length;
switch (G__12201) {
case 0:
return cljs_promises.async.extend_promises_as_channels_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_promises.async.extend_promises_as_channels_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_promises.async.extend_promises_as_channels_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_promises.async.extend_promises_as_channels_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_promises.async.extend_promises_as_channels_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_promises.async.extend_promises_as_channels_BANG_.call(null,cljs.core.identity);
});

cljs_promises.async.extend_promises_as_channels_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (value_transform){
return cljs_promises.async.extend_promises_as_channels_BANG_.call(null,value_transform,cljs.core.identity);
});

cljs_promises.async.extend_promises_as_channels_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (value_transform,error_transform){
return cljs_promises.async.extend_promises_as_channels_BANG_.call(null,value_transform,error_transform,Promise);
});

cljs_promises.async.extend_promises_as_channels_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (value_transform,error_transform,promise_constructor){
promise_constructor.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

promise_constructor.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (promise,handler){
var promise__$1 = this;
promise__$1.then(((function (promise__$1){
return (function (val){
return cljs.core.async.impl.dispatch.run.call(null,((function (promise__$1){
return (function (){
return cljs.core.async.impl.protocols.commit.call(null,handler).call(null,value_transform.call(null,val));
});})(promise__$1))
);
});})(promise__$1))
,((function (promise__$1){
return (function (err){
return cljs.core.async.impl.dispatch.run.call(null,((function (promise__$1){
return (function (){
return cljs.core.async.impl.protocols.commit.call(null,handler).call(null,error_transform.call(null,err));
});})(promise__$1))
);
});})(promise__$1))
);

return null;
});

promise_constructor.prototype.cljs$core$async$impl$protocols$Channel$ = true;

return promise_constructor.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var ___$1 = this;
return null;
});
});

cljs_promises.async.extend_promises_as_channels_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Globally extends Promises with `extend-promises-as-channels!` such that the
 * values taken from them are vector pairs of [value nil] in the case of fulfillment,
 * or [nil error] in the case of rejection. Takes an optional `promise-constructor`
 * to extend, defaulting to `js/Promise`.
 */
cljs_promises.async.extend_promises_as_pair_channels_BANG_ = (function cljs_promises$async$extend_promises_as_pair_channels_BANG_(){
var G__12204 = arguments.length;
switch (G__12204) {
case 0:
return cljs_promises.async.extend_promises_as_pair_channels_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_promises.async.extend_promises_as_pair_channels_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs_promises.async.extend_promises_as_pair_channels_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_promises.async.extend_promises_as_pair_channels_BANG_.call(null,Promise);
});

cljs_promises.async.extend_promises_as_pair_channels_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (promise_constructor){
return cljs_promises.async.extend_promises_as_channels_BANG_.call(null,(function (val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,null], null);
}),(function (err){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,err], null);
}),promise_constructor);
});

cljs_promises.async.extend_promises_as_pair_channels_BANG_.cljs$lang$maxFixedArity = 1;
/**
 * When passed a [value nil] pair, returns value. When passed a [nil error] pair,
 * throws error. See also `cljs-promises.async/<?`.
 */
cljs_promises.async.consume_pair = (function cljs_promises$async$consume_pair(p__12206){
var vec__12208 = p__12206;
var val = cljs.core.nth.call(null,vec__12208,(0),null);
var err = cljs.core.nth.call(null,vec__12208,(1),null);
if(cljs.core.truth_(err)){
throw err;
} else {
return val;
}
});
/**
 * Wraps a promise and returns a ReadPort (a read-only channel-like). When the
 * promise fulfills with a value, that value is sent constantly on the channel
 * (the value might be nil). When the promise rejects with an error, nil is sent
 * constantly.
 */
cljs_promises.async.value_port = (function cljs_promises$async$value_port(promise){
if(typeof cljs_promises.async.t12212 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_promises.async.t12212 = (function (value_port,promise,meta12213){
this.value_port = value_port;
this.promise = promise;
this.meta12213 = meta12213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_promises.async.t12212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12214,meta12213__$1){
var self__ = this;
var _12214__$1 = this;
return (new cljs_promises.async.t12212(self__.value_port,self__.promise,meta12213__$1));
});

cljs_promises.async.t12212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12214){
var self__ = this;
var _12214__$1 = this;
return self__.meta12213;
});

cljs_promises.async.t12212.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs_promises.async.t12212.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){
var self__ = this;
var ___$1 = this;
self__.promise.then(((function (___$1){
return (function (val){
return cljs.core.async.impl.dispatch.run.call(null,((function (___$1){
return (function (){
return cljs.core.async.impl.protocols.commit.call(null,handler).call(null,val);
});})(___$1))
);
});})(___$1))
,((function (___$1){
return (function (___$2){
return cljs.core.async.impl.dispatch.run.call(null,((function (___$1){
return (function (){
return cljs.core.async.impl.protocols.commit.call(null,handler).call(null,null);
});})(___$1))
);
});})(___$1))
);

return null;
});

cljs_promises.async.t12212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value-port","value-port",-360767883,null),new cljs.core.Symbol(null,"promise","promise",-887306482,null),new cljs.core.Symbol(null,"meta12213","meta12213",-2011683987,null)], null);
});

cljs_promises.async.t12212.cljs$lang$type = true;

cljs_promises.async.t12212.cljs$lang$ctorStr = "cljs-promises.async/t12212";

cljs_promises.async.t12212.cljs$lang$ctorPrWriter = (function (this__4830__auto__,writer__4831__auto__,opt__4832__auto__){
return cljs.core._write.call(null,writer__4831__auto__,"cljs-promises.async/t12212");
});

cljs_promises.async.__GT_t12212 = (function cljs_promises$async$value_port_$___GT_t12212(value_port__$1,promise__$1,meta12213){
return (new cljs_promises.async.t12212(value_port__$1,promise__$1,meta12213));
});

}

return (new cljs_promises.async.t12212(cljs_promises$async$value_port,promise,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * The reverse of `value-port`, passing along errors when `promise` rejects and sending
 * nils when `promise` fulfills with a value.
 */
cljs_promises.async.error_port = (function cljs_promises$async$error_port(promise){
if(typeof cljs_promises.async.t12218 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_promises.async.t12218 = (function (error_port,promise,meta12219){
this.error_port = error_port;
this.promise = promise;
this.meta12219 = meta12219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_promises.async.t12218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12220,meta12219__$1){
var self__ = this;
var _12220__$1 = this;
return (new cljs_promises.async.t12218(self__.error_port,self__.promise,meta12219__$1));
});

cljs_promises.async.t12218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12220){
var self__ = this;
var _12220__$1 = this;
return self__.meta12219;
});

cljs_promises.async.t12218.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs_promises.async.t12218.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){
var self__ = this;
var ___$1 = this;
self__.promise.then(((function (___$1){
return (function (___$2){
return cljs.core.async.impl.dispatch.run.call(null,((function (___$1){
return (function (){
return cljs.core.async.impl.protocols.commit.call(null,handler).call(null,null);
});})(___$1))
);
});})(___$1))
,((function (___$1){
return (function (err){
return cljs.core.async.impl.dispatch.run.call(null,((function (___$1){
return (function (){
return cljs.core.async.impl.protocols.commit.call(null,handler).call(null,err);
});})(___$1))
);
});})(___$1))
);

return null;
});

cljs_promises.async.t12218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"error-port","error-port",583983688,null),new cljs.core.Symbol(null,"promise","promise",-887306482,null),new cljs.core.Symbol(null,"meta12219","meta12219",17145510,null)], null);
});

cljs_promises.async.t12218.cljs$lang$type = true;

cljs_promises.async.t12218.cljs$lang$ctorStr = "cljs-promises.async/t12218";

cljs_promises.async.t12218.cljs$lang$ctorPrWriter = (function (this__4830__auto__,writer__4831__auto__,opt__4832__auto__){
return cljs.core._write.call(null,writer__4831__auto__,"cljs-promises.async/t12218");
});

cljs_promises.async.__GT_t12218 = (function cljs_promises$async$error_port_$___GT_t12218(error_port__$1,promise__$1,meta12219){
return (new cljs_promises.async.t12218(error_port__$1,promise__$1,meta12219));
});

}

return (new cljs_promises.async.t12218(cljs_promises$async$error_port,promise,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a ReadPort which sends [value nil] when `promise` fulfills, and [nil error]
 * when `promise` rejects.
 */
cljs_promises.async.pair_port = (function cljs_promises$async$pair_port(promise){
if(typeof cljs_promises.async.t12224 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs_promises.async.t12224 = (function (pair_port,promise,meta12225){
this.pair_port = pair_port;
this.promise = promise;
this.meta12225 = meta12225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_promises.async.t12224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12226,meta12225__$1){
var self__ = this;
var _12226__$1 = this;
return (new cljs_promises.async.t12224(self__.pair_port,self__.promise,meta12225__$1));
});

cljs_promises.async.t12224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12226){
var self__ = this;
var _12226__$1 = this;
return self__.meta12225;
});

cljs_promises.async.t12224.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs_promises.async.t12224.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){
var self__ = this;
var ___$1 = this;
self__.promise.then(((function (___$1){
return (function (val){
return cljs.core.async.impl.dispatch.run.call(null,((function (___$1){
return (function (){
return cljs.core.async.impl.protocols.commit.call(null,handler).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,null], null));
});})(___$1))
);
});})(___$1))
,((function (___$1){
return (function (err){
return cljs.core.async.impl.dispatch.run.call(null,((function (___$1){
return (function (){
return cljs.core.async.impl.protocols.commit.call(null,handler).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,err], null));
});})(___$1))
);
});})(___$1))
);

return null;
});

cljs_promises.async.t12224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pair-port","pair-port",1268194861,null),new cljs.core.Symbol(null,"promise","promise",-887306482,null),new cljs.core.Symbol(null,"meta12225","meta12225",-300409316,null)], null);
});

cljs_promises.async.t12224.cljs$lang$type = true;

cljs_promises.async.t12224.cljs$lang$ctorStr = "cljs-promises.async/t12224";

cljs_promises.async.t12224.cljs$lang$ctorPrWriter = (function (this__4830__auto__,writer__4831__auto__,opt__4832__auto__){
return cljs.core._write.call(null,writer__4831__auto__,"cljs-promises.async/t12224");
});

cljs_promises.async.__GT_t12224 = (function cljs_promises$async$pair_port_$___GT_t12224(pair_port__$1,promise__$1,meta12225){
return (new cljs_promises.async.t12224(pair_port__$1,promise__$1,meta12225));
});

}

return (new cljs_promises.async.t12224(cljs_promises$async$pair_port,promise,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Waits for the next value from `ch` and returns a promise of that value.
 */
cljs_promises.async.take_as_promise_BANG_ = (function cljs_promises$async$take_as_promise_BANG_(ch){
return cljs_promises.core.promise.call(null,(function (resolve,_){
return cljs.core.async.take_BANG_.call(null,ch,resolve);
}));
});

//# sourceMappingURL=async.js.map