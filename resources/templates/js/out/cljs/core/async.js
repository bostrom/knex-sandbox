// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t9571 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9571 = (function (fn_handler,f,meta9572){
this.fn_handler = fn_handler;
this.f = f;
this.meta9572 = meta9572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t9571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9573,meta9572__$1){
var self__ = this;
var _9573__$1 = this;
return (new cljs.core.async.t9571(self__.fn_handler,self__.f,meta9572__$1));
});

cljs.core.async.t9571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9573){
var self__ = this;
var _9573__$1 = this;
return self__.meta9572;
});

cljs.core.async.t9571.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9571.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t9571.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t9571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta9572","meta9572",-995386032,null)], null);
});

cljs.core.async.t9571.cljs$lang$type = true;

cljs.core.async.t9571.cljs$lang$ctorStr = "cljs.core.async/t9571";

cljs.core.async.t9571.cljs$lang$ctorPrWriter = (function (this__4830__auto__,writer__4831__auto__,opt__4832__auto__){
return cljs.core._write.call(null,writer__4831__auto__,"cljs.core.async/t9571");
});

cljs.core.async.__GT_t9571 = (function cljs$core$async$fn_handler_$___GT_t9571(fn_handler__$1,f__$1,meta9572){
return (new cljs.core.async.t9571(fn_handler__$1,f__$1,meta9572));
});

}

return (new cljs.core.async.t9571(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__9575 = buff;
if(G__9575){
var bit__4925__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4925__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__9575.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__9575.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9575);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9575);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__9577 = arguments.length;
switch (G__9577) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__9580 = arguments.length;
switch (G__9580) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9582 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9582);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9582,ret){
return (function (){
return fn1.call(null,val_9582);
});})(val_9582,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__9584 = arguments.length;
switch (G__9584) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5136__auto___9586 = n;
var x_9587 = (0);
while(true){
if((x_9587 < n__5136__auto___9586)){
(a[x_9587] = (0));

var G__9588 = (x_9587 + (1));
x_9587 = G__9588;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__9589 = (i + (1));
i = G__9589;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t9593 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9593 = (function (alt_flag,flag,meta9594){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta9594 = meta9594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t9593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9595,meta9594__$1){
var self__ = this;
var _9595__$1 = this;
return (new cljs.core.async.t9593(self__.alt_flag,self__.flag,meta9594__$1));
});})(flag))
;

cljs.core.async.t9593.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9595){
var self__ = this;
var _9595__$1 = this;
return self__.meta9594;
});})(flag))
;

cljs.core.async.t9593.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9593.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t9593.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t9593.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9594","meta9594",-331648308,null)], null);
});})(flag))
;

cljs.core.async.t9593.cljs$lang$type = true;

cljs.core.async.t9593.cljs$lang$ctorStr = "cljs.core.async/t9593";

cljs.core.async.t9593.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4830__auto__,writer__4831__auto__,opt__4832__auto__){
return cljs.core._write.call(null,writer__4831__auto__,"cljs.core.async/t9593");
});})(flag))
;

cljs.core.async.__GT_t9593 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t9593(alt_flag__$1,flag__$1,meta9594){
return (new cljs.core.async.t9593(alt_flag__$1,flag__$1,meta9594));
});})(flag))
;

}

return (new cljs.core.async.t9593(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t9599 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9599 = (function (alt_handler,flag,cb,meta9600){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta9600 = meta9600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t9599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9601,meta9600__$1){
var self__ = this;
var _9601__$1 = this;
return (new cljs.core.async.t9599(self__.alt_handler,self__.flag,self__.cb,meta9600__$1));
});

cljs.core.async.t9599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9601){
var self__ = this;
var _9601__$1 = this;
return self__.meta9600;
});

cljs.core.async.t9599.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9599.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t9599.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t9599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9600","meta9600",-1778441228,null)], null);
});

cljs.core.async.t9599.cljs$lang$type = true;

cljs.core.async.t9599.cljs$lang$ctorStr = "cljs.core.async/t9599";

cljs.core.async.t9599.cljs$lang$ctorPrWriter = (function (this__4830__auto__,writer__4831__auto__,opt__4832__auto__){
return cljs.core._write.call(null,writer__4831__auto__,"cljs.core.async/t9599");
});

cljs.core.async.__GT_t9599 = (function cljs$core$async$alt_handler_$___GT_t9599(alt_handler__$1,flag__$1,cb__$1,meta9600){
return (new cljs.core.async.t9599(alt_handler__$1,flag__$1,cb__$1,meta9600));
});

}

return (new cljs.core.async.t9599(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9602_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9602_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9603_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9603_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4251__auto__ = wport;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9604 = (i + (1));
i = G__9604;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4251__auto__ = ret;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4239__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4239__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4239__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5291__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5291__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9607){
var map__9608 = p__9607;
var map__9608__$1 = ((cljs.core.seq_QMARK_.call(null,map__9608))?cljs.core.apply.call(null,cljs.core.hash_map,map__9608):map__9608);
var opts = map__9608__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9605){
var G__9606 = cljs.core.first.call(null,seq9605);
var seq9605__$1 = cljs.core.next.call(null,seq9605);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9606,seq9605__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__9610 = arguments.length;
switch (G__9610) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__6611__auto___9659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6611__auto___9659){
return (function (){
var f__6612__auto__ = (function (){var switch__6549__auto__ = ((function (c__6611__auto___9659){
return (function (state_9634){
var state_val_9635 = (state_9634[(1)]);
if((state_val_9635 === (7))){
var inst_9630 = (state_9634[(2)]);
var state_9634__$1 = state_9634;
var statearr_9636_9660 = state_9634__$1;
(statearr_9636_9660[(2)] = inst_9630);

(statearr_9636_9660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9635 === (1))){
var state_9634__$1 = state_9634;
var statearr_9637_9661 = state_9634__$1;
(statearr_9637_9661[(2)] = null);

(statearr_9637_9661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9635 === (4))){
var inst_9613 = (state_9634[(7)]);
var inst_9613__$1 = (state_9634[(2)]);
var inst_9614 = (inst_9613__$1 == null);
var state_9634__$1 = (function (){var statearr_9638 = state_9634;
(statearr_9638[(7)] = inst_9613__$1);

return statearr_9638;
})();
if(cljs.core.truth_(inst_9614)){
var statearr_9639_9662 = state_9634__$1;
(statearr_9639_9662[(1)] = (5));

} else {
var statearr_9640_9663 = state_9634__$1;
(statearr_9640_9663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9635 === (13))){
var state_9634__$1 = state_9634;
var statearr_9641_9664 = state_9634__$1;
(statearr_9641_9664[(2)] = null);

(statearr_9641_9664[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9635 === (6))){
var inst_9613 = (state_9634[(7)]);
var state_9634__$1 = state_9634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9634__$1,(11),to,inst_9613);
} else {
if((state_val_9635 === (3))){
var inst_9632 = (state_9634[(2)]);
var state_9634__$1 = state_9634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9634__$1,inst_9632);
} else {
if((state_val_9635 === (12))){
var state_9634__$1 = state_9634;
var statearr_9642_9665 = state_9634__$1;
(statearr_9642_9665[(2)] = null);

(statearr_9642_9665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9635 === (2))){
var state_9634__$1 = state_9634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9634__$1,(4),from);
} else {
if((state_val_9635 === (11))){
var inst_9623 = (state_9634[(2)]);
var state_9634__$1 = state_9634;
if(cljs.core.truth_(inst_9623)){
var statearr_9643_9666 = state_9634__$1;
(statearr_9643_9666[(1)] = (12));

} else {
var statearr_9644_9667 = state_9634__$1;
(statearr_9644_9667[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9635 === (9))){
var state_9634__$1 = state_9634;
var statearr_9645_9668 = state_9634__$1;
(statearr_9645_9668[(2)] = null);

(statearr_9645_9668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9635 === (5))){
var state_9634__$1 = state_9634;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9646_9669 = state_9634__$1;
(statearr_9646_9669[(1)] = (8));

} else {
var statearr_9647_9670 = state_9634__$1;
(statearr_9647_9670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9635 === (14))){
var inst_9628 = (state_9634[(2)]);
var state_9634__$1 = state_9634;
var statearr_9648_9671 = state_9634__$1;
(statearr_9648_9671[(2)] = inst_9628);

(statearr_9648_9671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9635 === (10))){
var inst_9620 = (state_9634[(2)]);
var state_9634__$1 = state_9634;
var statearr_9649_9672 = state_9634__$1;
(statearr_9649_9672[(2)] = inst_9620);

(statearr_9649_9672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9635 === (8))){
var inst_9617 = cljs.core.async.close_BANG_.call(null,to);
var state_9634__$1 = state_9634;
var statearr_9650_9673 = state_9634__$1;
(statearr_9650_9673[(2)] = inst_9617);

(statearr_9650_9673[(1)] = (10));


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
}
}
}
});})(c__6611__auto___9659))
;
return ((function (switch__6549__auto__,c__6611__auto___9659){
return (function() {
var cljs$core$async$state_machine__6550__auto__ = null;
var cljs$core$async$state_machine__6550__auto____0 = (function (){
var statearr_9654 = [null,null,null,null,null,null,null,null];
(statearr_9654[(0)] = cljs$core$async$state_machine__6550__auto__);

(statearr_9654[(1)] = (1));

return statearr_9654;
});
var cljs$core$async$state_machine__6550__auto____1 = (function (state_9634){
while(true){
var ret_value__6551__auto__ = (function (){try{while(true){
var result__6552__auto__ = switch__6549__auto__.call(null,state_9634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6552__auto__;
}
break;
}
}catch (e9655){if((e9655 instanceof Object)){
var ex__6553__auto__ = e9655;
var statearr_9656_9674 = state_9634;
(statearr_9656_9674[(5)] = ex__6553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9675 = state_9634;
state_9634 = G__9675;
continue;
} else {
return ret_value__6551__auto__;
}
break;
}
});
cljs$core$async$state_machine__6550__auto__ = function(state_9634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6550__auto____1.call(this,state_9634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6550__auto____0;
cljs$core$async$state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6550__auto____1;
return cljs$core$async$state_machine__6550__auto__;
})()
;})(switch__6549__auto__,c__6611__auto___9659))
})();
var state__6613__auto__ = (function (){var statearr_9657 = f__6612__auto__.call(null);
(statearr_9657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6611__auto___9659);

return statearr_9657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6613__auto__);
});})(c__6611__auto___9659))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__9859){
var vec__9860 = p__9859;
var v = cljs.core.nth.call(null,vec__9860,(0),null);
var p = cljs.core.nth.call(null,vec__9860,(1),null);
var job = vec__9860;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6611__auto___10042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6611__auto___10042,res,vec__9860,v,p,job,jobs,results){
return (function (){
var f__6612__auto__ = (function (){var switch__6549__auto__ = ((function (c__6611__auto___10042,res,vec__9860,v,p,job,jobs,results){
return (function (state_9865){
var state_val_9866 = (state_9865[(1)]);
if((state_val_9866 === (1))){
var state_9865__$1 = state_9865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9865__$1,(2),res,v);
} else {
if((state_val_9866 === (2))){
var inst_9862 = (state_9865[(2)]);
var inst_9863 = cljs.core.async.close_BANG_.call(null,res);
var state_9865__$1 = (function (){var statearr_9867 = state_9865;
(statearr_9867[(7)] = inst_9862);

return statearr_9867;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9865__$1,inst_9863);
} else {
return null;
}
}
});})(c__6611__auto___10042,res,vec__9860,v,p,job,jobs,results))
;
return ((function (switch__6549__auto__,c__6611__auto___10042,res,vec__9860,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____0 = (function (){
var statearr_9871 = [null,null,null,null,null,null,null,null];
(statearr_9871[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__);

(statearr_9871[(1)] = (1));

return statearr_9871;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____1 = (function (state_9865){
while(true){
var ret_value__6551__auto__ = (function (){try{while(true){
var result__6552__auto__ = switch__6549__auto__.call(null,state_9865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6552__auto__;
}
break;
}
}catch (e9872){if((e9872 instanceof Object)){
var ex__6553__auto__ = e9872;
var statearr_9873_10043 = state_9865;
(statearr_9873_10043[(5)] = ex__6553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10044 = state_9865;
state_9865 = G__10044;
continue;
} else {
return ret_value__6551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__ = function(state_9865){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____1.call(this,state_9865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__;
})()
;})(switch__6549__auto__,c__6611__auto___10042,res,vec__9860,v,p,job,jobs,results))
})();
var state__6613__auto__ = (function (){var statearr_9874 = f__6612__auto__.call(null);
(statearr_9874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6611__auto___10042);

return statearr_9874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6613__auto__);
});})(c__6611__auto___10042,res,vec__9860,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9875){
var vec__9876 = p__9875;
var v = cljs.core.nth.call(null,vec__9876,(0),null);
var p = cljs.core.nth.call(null,vec__9876,(1),null);
var job = vec__9876;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5136__auto___10045 = n;
var __10046 = (0);
while(true){
if((__10046 < n__5136__auto___10045)){
var G__9877_10047 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9877_10047) {
case "compute":
var c__6611__auto___10049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10046,c__6611__auto___10049,G__9877_10047,n__5136__auto___10045,jobs,results,process,async){
return (function (){
var f__6612__auto__ = (function (){var switch__6549__auto__ = ((function (__10046,c__6611__auto___10049,G__9877_10047,n__5136__auto___10045,jobs,results,process,async){
return (function (state_9890){
var state_val_9891 = (state_9890[(1)]);
if((state_val_9891 === (1))){
var state_9890__$1 = state_9890;
var statearr_9892_10050 = state_9890__$1;
(statearr_9892_10050[(2)] = null);

(statearr_9892_10050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9891 === (2))){
var state_9890__$1 = state_9890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9890__$1,(4),jobs);
} else {
if((state_val_9891 === (3))){
var inst_9888 = (state_9890[(2)]);
var state_9890__$1 = state_9890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9890__$1,inst_9888);
} else {
if((state_val_9891 === (4))){
var inst_9880 = (state_9890[(2)]);
var inst_9881 = process.call(null,inst_9880);
var state_9890__$1 = state_9890;
if(cljs.core.truth_(inst_9881)){
var statearr_9893_10051 = state_9890__$1;
(statearr_9893_10051[(1)] = (5));

} else {
var statearr_9894_10052 = state_9890__$1;
(statearr_9894_10052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9891 === (5))){
var state_9890__$1 = state_9890;
var statearr_9895_10053 = state_9890__$1;
(statearr_9895_10053[(2)] = null);

(statearr_9895_10053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9891 === (6))){
var state_9890__$1 = state_9890;
var statearr_9896_10054 = state_9890__$1;
(statearr_9896_10054[(2)] = null);

(statearr_9896_10054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9891 === (7))){
var inst_9886 = (state_9890[(2)]);
var state_9890__$1 = state_9890;
var statearr_9897_10055 = state_9890__$1;
(statearr_9897_10055[(2)] = inst_9886);

(statearr_9897_10055[(1)] = (3));


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
});})(__10046,c__6611__auto___10049,G__9877_10047,n__5136__auto___10045,jobs,results,process,async))
;
return ((function (__10046,switch__6549__auto__,c__6611__auto___10049,G__9877_10047,n__5136__auto___10045,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____0 = (function (){
var statearr_9901 = [null,null,null,null,null,null,null];
(statearr_9901[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__);

(statearr_9901[(1)] = (1));

return statearr_9901;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____1 = (function (state_9890){
while(true){
var ret_value__6551__auto__ = (function (){try{while(true){
var result__6552__auto__ = switch__6549__auto__.call(null,state_9890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6552__auto__;
}
break;
}
}catch (e9902){if((e9902 instanceof Object)){
var ex__6553__auto__ = e9902;
var statearr_9903_10056 = state_9890;
(statearr_9903_10056[(5)] = ex__6553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10057 = state_9890;
state_9890 = G__10057;
continue;
} else {
return ret_value__6551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__ = function(state_9890){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____1.call(this,state_9890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__;
})()
;})(__10046,switch__6549__auto__,c__6611__auto___10049,G__9877_10047,n__5136__auto___10045,jobs,results,process,async))
})();
var state__6613__auto__ = (function (){var statearr_9904 = f__6612__auto__.call(null);
(statearr_9904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6611__auto___10049);

return statearr_9904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6613__auto__);
});})(__10046,c__6611__auto___10049,G__9877_10047,n__5136__auto___10045,jobs,results,process,async))
);


break;
case "async":
var c__6611__auto___10058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10046,c__6611__auto___10058,G__9877_10047,n__5136__auto___10045,jobs,results,process,async){
return (function (){
var f__6612__auto__ = (function (){var switch__6549__auto__ = ((function (__10046,c__6611__auto___10058,G__9877_10047,n__5136__auto___10045,jobs,results,process,async){
return (function (state_9917){
var state_val_9918 = (state_9917[(1)]);
if((state_val_9918 === (1))){
var state_9917__$1 = state_9917;
var statearr_9919_10059 = state_9917__$1;
(statearr_9919_10059[(2)] = null);

(statearr_9919_10059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9918 === (2))){
var state_9917__$1 = state_9917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9917__$1,(4),jobs);
} else {
if((state_val_9918 === (3))){
var inst_9915 = (state_9917[(2)]);
var state_9917__$1 = state_9917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9917__$1,inst_9915);
} else {
if((state_val_9918 === (4))){
var inst_9907 = (state_9917[(2)]);
var inst_9908 = async.call(null,inst_9907);
var state_9917__$1 = state_9917;
if(cljs.core.truth_(inst_9908)){
var statearr_9920_10060 = state_9917__$1;
(statearr_9920_10060[(1)] = (5));

} else {
var statearr_9921_10061 = state_9917__$1;
(statearr_9921_10061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9918 === (5))){
var state_9917__$1 = state_9917;
var statearr_9922_10062 = state_9917__$1;
(statearr_9922_10062[(2)] = null);

(statearr_9922_10062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9918 === (6))){
var state_9917__$1 = state_9917;
var statearr_9923_10063 = state_9917__$1;
(statearr_9923_10063[(2)] = null);

(statearr_9923_10063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9918 === (7))){
var inst_9913 = (state_9917[(2)]);
var state_9917__$1 = state_9917;
var statearr_9924_10064 = state_9917__$1;
(statearr_9924_10064[(2)] = inst_9913);

(statearr_9924_10064[(1)] = (3));


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
});})(__10046,c__6611__auto___10058,G__9877_10047,n__5136__auto___10045,jobs,results,process,async))
;
return ((function (__10046,switch__6549__auto__,c__6611__auto___10058,G__9877_10047,n__5136__auto___10045,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____0 = (function (){
var statearr_9928 = [null,null,null,null,null,null,null];
(statearr_9928[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__);

(statearr_9928[(1)] = (1));

return statearr_9928;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____1 = (function (state_9917){
while(true){
var ret_value__6551__auto__ = (function (){try{while(true){
var result__6552__auto__ = switch__6549__auto__.call(null,state_9917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6552__auto__;
}
break;
}
}catch (e9929){if((e9929 instanceof Object)){
var ex__6553__auto__ = e9929;
var statearr_9930_10065 = state_9917;
(statearr_9930_10065[(5)] = ex__6553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10066 = state_9917;
state_9917 = G__10066;
continue;
} else {
return ret_value__6551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__ = function(state_9917){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____1.call(this,state_9917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__;
})()
;})(__10046,switch__6549__auto__,c__6611__auto___10058,G__9877_10047,n__5136__auto___10045,jobs,results,process,async))
})();
var state__6613__auto__ = (function (){var statearr_9931 = f__6612__auto__.call(null);
(statearr_9931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6611__auto___10058);

return statearr_9931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6613__auto__);
});})(__10046,c__6611__auto___10058,G__9877_10047,n__5136__auto___10045,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__10067 = (__10046 + (1));
__10046 = G__10067;
continue;
} else {
}
break;
}

var c__6611__auto___10068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6611__auto___10068,jobs,results,process,async){
return (function (){
var f__6612__auto__ = (function (){var switch__6549__auto__ = ((function (c__6611__auto___10068,jobs,results,process,async){
return (function (state_9953){
var state_val_9954 = (state_9953[(1)]);
if((state_val_9954 === (1))){
var state_9953__$1 = state_9953;
var statearr_9955_10069 = state_9953__$1;
(statearr_9955_10069[(2)] = null);

(statearr_9955_10069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9954 === (2))){
var state_9953__$1 = state_9953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9953__$1,(4),from);
} else {
if((state_val_9954 === (3))){
var inst_9951 = (state_9953[(2)]);
var state_9953__$1 = state_9953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9953__$1,inst_9951);
} else {
if((state_val_9954 === (4))){
var inst_9934 = (state_9953[(7)]);
var inst_9934__$1 = (state_9953[(2)]);
var inst_9935 = (inst_9934__$1 == null);
var state_9953__$1 = (function (){var statearr_9956 = state_9953;
(statearr_9956[(7)] = inst_9934__$1);

return statearr_9956;
})();
if(cljs.core.truth_(inst_9935)){
var statearr_9957_10070 = state_9953__$1;
(statearr_9957_10070[(1)] = (5));

} else {
var statearr_9958_10071 = state_9953__$1;
(statearr_9958_10071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9954 === (5))){
var inst_9937 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9953__$1 = state_9953;
var statearr_9959_10072 = state_9953__$1;
(statearr_9959_10072[(2)] = inst_9937);

(statearr_9959_10072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9954 === (6))){
var inst_9939 = (state_9953[(8)]);
var inst_9934 = (state_9953[(7)]);
var inst_9939__$1 = cljs.core.async.chan.call(null,(1));
var inst_9940 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9941 = [inst_9934,inst_9939__$1];
var inst_9942 = (new cljs.core.PersistentVector(null,2,(5),inst_9940,inst_9941,null));
var state_9953__$1 = (function (){var statearr_9960 = state_9953;
(statearr_9960[(8)] = inst_9939__$1);

return statearr_9960;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9953__$1,(8),jobs,inst_9942);
} else {
if((state_val_9954 === (7))){
var inst_9949 = (state_9953[(2)]);
var state_9953__$1 = state_9953;
var statearr_9961_10073 = state_9953__$1;
(statearr_9961_10073[(2)] = inst_9949);

(statearr_9961_10073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9954 === (8))){
var inst_9939 = (state_9953[(8)]);
var inst_9944 = (state_9953[(2)]);
var state_9953__$1 = (function (){var statearr_9962 = state_9953;
(statearr_9962[(9)] = inst_9944);

return statearr_9962;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9953__$1,(9),results,inst_9939);
} else {
if((state_val_9954 === (9))){
var inst_9946 = (state_9953[(2)]);
var state_9953__$1 = (function (){var statearr_9963 = state_9953;
(statearr_9963[(10)] = inst_9946);

return statearr_9963;
})();
var statearr_9964_10074 = state_9953__$1;
(statearr_9964_10074[(2)] = null);

(statearr_9964_10074[(1)] = (2));


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
});})(c__6611__auto___10068,jobs,results,process,async))
;
return ((function (switch__6549__auto__,c__6611__auto___10068,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____0 = (function (){
var statearr_9968 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9968[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__);

(statearr_9968[(1)] = (1));

return statearr_9968;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____1 = (function (state_9953){
while(true){
var ret_value__6551__auto__ = (function (){try{while(true){
var result__6552__auto__ = switch__6549__auto__.call(null,state_9953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6552__auto__;
}
break;
}
}catch (e9969){if((e9969 instanceof Object)){
var ex__6553__auto__ = e9969;
var statearr_9970_10075 = state_9953;
(statearr_9970_10075[(5)] = ex__6553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10076 = state_9953;
state_9953 = G__10076;
continue;
} else {
return ret_value__6551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__ = function(state_9953){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____1.call(this,state_9953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__;
})()
;})(switch__6549__auto__,c__6611__auto___10068,jobs,results,process,async))
})();
var state__6613__auto__ = (function (){var statearr_9971 = f__6612__auto__.call(null);
(statearr_9971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6611__auto___10068);

return statearr_9971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6613__auto__);
});})(c__6611__auto___10068,jobs,results,process,async))
);


var c__6611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6611__auto__,jobs,results,process,async){
return (function (){
var f__6612__auto__ = (function (){var switch__6549__auto__ = ((function (c__6611__auto__,jobs,results,process,async){
return (function (state_10009){
var state_val_10010 = (state_10009[(1)]);
if((state_val_10010 === (7))){
var inst_10005 = (state_10009[(2)]);
var state_10009__$1 = state_10009;
var statearr_10011_10077 = state_10009__$1;
(statearr_10011_10077[(2)] = inst_10005);

(statearr_10011_10077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10010 === (20))){
var state_10009__$1 = state_10009;
var statearr_10012_10078 = state_10009__$1;
(statearr_10012_10078[(2)] = null);

(statearr_10012_10078[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10010 === (1))){
var state_10009__$1 = state_10009;
var statearr_10013_10079 = state_10009__$1;
(statearr_10013_10079[(2)] = null);

(statearr_10013_10079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10010 === (4))){
var inst_9974 = (state_10009[(7)]);
var inst_9974__$1 = (state_10009[(2)]);
var inst_9975 = (inst_9974__$1 == null);
var state_10009__$1 = (function (){var statearr_10014 = state_10009;
(statearr_10014[(7)] = inst_9974__$1);

return statearr_10014;
})();
if(cljs.core.truth_(inst_9975)){
var statearr_10015_10080 = state_10009__$1;
(statearr_10015_10080[(1)] = (5));

} else {
var statearr_10016_10081 = state_10009__$1;
(statearr_10016_10081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10010 === (15))){
var inst_9987 = (state_10009[(8)]);
var state_10009__$1 = state_10009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10009__$1,(18),to,inst_9987);
} else {
if((state_val_10010 === (21))){
var inst_10000 = (state_10009[(2)]);
var state_10009__$1 = state_10009;
var statearr_10017_10082 = state_10009__$1;
(statearr_10017_10082[(2)] = inst_10000);

(statearr_10017_10082[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10010 === (13))){
var inst_10002 = (state_10009[(2)]);
var state_10009__$1 = (function (){var statearr_10018 = state_10009;
(statearr_10018[(9)] = inst_10002);

return statearr_10018;
})();
var statearr_10019_10083 = state_10009__$1;
(statearr_10019_10083[(2)] = null);

(statearr_10019_10083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10010 === (6))){
var inst_9974 = (state_10009[(7)]);
var state_10009__$1 = state_10009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10009__$1,(11),inst_9974);
} else {
if((state_val_10010 === (17))){
var inst_9995 = (state_10009[(2)]);
var state_10009__$1 = state_10009;
if(cljs.core.truth_(inst_9995)){
var statearr_10020_10084 = state_10009__$1;
(statearr_10020_10084[(1)] = (19));

} else {
var statearr_10021_10085 = state_10009__$1;
(statearr_10021_10085[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10010 === (3))){
var inst_10007 = (state_10009[(2)]);
var state_10009__$1 = state_10009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10009__$1,inst_10007);
} else {
if((state_val_10010 === (12))){
var inst_9984 = (state_10009[(10)]);
var state_10009__$1 = state_10009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10009__$1,(14),inst_9984);
} else {
if((state_val_10010 === (2))){
var state_10009__$1 = state_10009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10009__$1,(4),results);
} else {
if((state_val_10010 === (19))){
var state_10009__$1 = state_10009;
var statearr_10022_10086 = state_10009__$1;
(statearr_10022_10086[(2)] = null);

(statearr_10022_10086[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10010 === (11))){
var inst_9984 = (state_10009[(2)]);
var state_10009__$1 = (function (){var statearr_10023 = state_10009;
(statearr_10023[(10)] = inst_9984);

return statearr_10023;
})();
var statearr_10024_10087 = state_10009__$1;
(statearr_10024_10087[(2)] = null);

(statearr_10024_10087[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10010 === (9))){
var state_10009__$1 = state_10009;
var statearr_10025_10088 = state_10009__$1;
(statearr_10025_10088[(2)] = null);

(statearr_10025_10088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10010 === (5))){
var state_10009__$1 = state_10009;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10026_10089 = state_10009__$1;
(statearr_10026_10089[(1)] = (8));

} else {
var statearr_10027_10090 = state_10009__$1;
(statearr_10027_10090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10010 === (14))){
var inst_9987 = (state_10009[(8)]);
var inst_9989 = (state_10009[(11)]);
var inst_9987__$1 = (state_10009[(2)]);
var inst_9988 = (inst_9987__$1 == null);
var inst_9989__$1 = cljs.core.not.call(null,inst_9988);
var state_10009__$1 = (function (){var statearr_10028 = state_10009;
(statearr_10028[(8)] = inst_9987__$1);

(statearr_10028[(11)] = inst_9989__$1);

return statearr_10028;
})();
if(inst_9989__$1){
var statearr_10029_10091 = state_10009__$1;
(statearr_10029_10091[(1)] = (15));

} else {
var statearr_10030_10092 = state_10009__$1;
(statearr_10030_10092[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10010 === (16))){
var inst_9989 = (state_10009[(11)]);
var state_10009__$1 = state_10009;
var statearr_10031_10093 = state_10009__$1;
(statearr_10031_10093[(2)] = inst_9989);

(statearr_10031_10093[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10010 === (10))){
var inst_9981 = (state_10009[(2)]);
var state_10009__$1 = state_10009;
var statearr_10032_10094 = state_10009__$1;
(statearr_10032_10094[(2)] = inst_9981);

(statearr_10032_10094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10010 === (18))){
var inst_9992 = (state_10009[(2)]);
var state_10009__$1 = state_10009;
var statearr_10033_10095 = state_10009__$1;
(statearr_10033_10095[(2)] = inst_9992);

(statearr_10033_10095[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10010 === (8))){
var inst_9978 = cljs.core.async.close_BANG_.call(null,to);
var state_10009__$1 = state_10009;
var statearr_10034_10096 = state_10009__$1;
(statearr_10034_10096[(2)] = inst_9978);

(statearr_10034_10096[(1)] = (10));


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
});})(c__6611__auto__,jobs,results,process,async))
;
return ((function (switch__6549__auto__,c__6611__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____0 = (function (){
var statearr_10038 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10038[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__);

(statearr_10038[(1)] = (1));

return statearr_10038;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____1 = (function (state_10009){
while(true){
var ret_value__6551__auto__ = (function (){try{while(true){
var result__6552__auto__ = switch__6549__auto__.call(null,state_10009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6552__auto__;
}
break;
}
}catch (e10039){if((e10039 instanceof Object)){
var ex__6553__auto__ = e10039;
var statearr_10040_10097 = state_10009;
(statearr_10040_10097[(5)] = ex__6553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10098 = state_10009;
state_10009 = G__10098;
continue;
} else {
return ret_value__6551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__ = function(state_10009){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____1.call(this,state_10009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6550__auto__;
})()
;})(switch__6549__auto__,c__6611__auto__,jobs,results,process,async))
})();
var state__6613__auto__ = (function (){var statearr_10041 = f__6612__auto__.call(null);
(statearr_10041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6611__auto__);

return statearr_10041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6613__auto__);
});})(c__6611__auto__,jobs,results,process,async))
);

return c__6611__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__10100 = arguments.length;
switch (G__10100) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__10103 = arguments.length;
switch (G__10103) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__10106 = arguments.length;
switch (G__10106) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6611__auto___10158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6611__auto___10158,tc,fc){
return (function (){
var f__6612__auto__ = (function (){var switch__6549__auto__ = ((function (c__6611__auto___10158,tc,fc){
return (function (state_10132){
var state_val_10133 = (state_10132[(1)]);
if((state_val_10133 === (7))){
var inst_10128 = (state_10132[(2)]);
var state_10132__$1 = state_10132;
var statearr_10134_10159 = state_10132__$1;
(statearr_10134_10159[(2)] = inst_10128);

(statearr_10134_10159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10133 === (1))){
var state_10132__$1 = state_10132;
var statearr_10135_10160 = state_10132__$1;
(statearr_10135_10160[(2)] = null);

(statearr_10135_10160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10133 === (4))){
var inst_10109 = (state_10132[(7)]);
var inst_10109__$1 = (state_10132[(2)]);
var inst_10110 = (inst_10109__$1 == null);
var state_10132__$1 = (function (){var statearr_10136 = state_10132;
(statearr_10136[(7)] = inst_10109__$1);

return statearr_10136;
})();
if(cljs.core.truth_(inst_10110)){
var statearr_10137_10161 = state_10132__$1;
(statearr_10137_10161[(1)] = (5));

} else {
var statearr_10138_10162 = state_10132__$1;
(statearr_10138_10162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10133 === (13))){
var state_10132__$1 = state_10132;
var statearr_10139_10163 = state_10132__$1;
(statearr_10139_10163[(2)] = null);

(statearr_10139_10163[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10133 === (6))){
var inst_10109 = (state_10132[(7)]);
var inst_10115 = p.call(null,inst_10109);
var state_10132__$1 = state_10132;
if(cljs.core.truth_(inst_10115)){
var statearr_10140_10164 = state_10132__$1;
(statearr_10140_10164[(1)] = (9));

} else {
var statearr_10141_10165 = state_10132__$1;
(statearr_10141_10165[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10133 === (3))){
var inst_10130 = (state_10132[(2)]);
var state_10132__$1 = state_10132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10132__$1,inst_10130);
} else {
if((state_val_10133 === (12))){
var state_10132__$1 = state_10132;
var statearr_10142_10166 = state_10132__$1;
(statearr_10142_10166[(2)] = null);

(statearr_10142_10166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10133 === (2))){
var state_10132__$1 = state_10132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10132__$1,(4),ch);
} else {
if((state_val_10133 === (11))){
var inst_10109 = (state_10132[(7)]);
var inst_10119 = (state_10132[(2)]);
var state_10132__$1 = state_10132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10132__$1,(8),inst_10119,inst_10109);
} else {
if((state_val_10133 === (9))){
var state_10132__$1 = state_10132;
var statearr_10143_10167 = state_10132__$1;
(statearr_10143_10167[(2)] = tc);

(statearr_10143_10167[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10133 === (5))){
var inst_10112 = cljs.core.async.close_BANG_.call(null,tc);
var inst_10113 = cljs.core.async.close_BANG_.call(null,fc);
var state_10132__$1 = (function (){var statearr_10144 = state_10132;
(statearr_10144[(8)] = inst_10112);

return statearr_10144;
})();
var statearr_10145_10168 = state_10132__$1;
(statearr_10145_10168[(2)] = inst_10113);

(statearr_10145_10168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10133 === (14))){
var inst_10126 = (state_10132[(2)]);
var state_10132__$1 = state_10132;
var statearr_10146_10169 = state_10132__$1;
(statearr_10146_10169[(2)] = inst_10126);

(statearr_10146_10169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10133 === (10))){
var state_10132__$1 = state_10132;
var statearr_10147_10170 = state_10132__$1;
(statearr_10147_10170[(2)] = fc);

(statearr_10147_10170[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10133 === (8))){
var inst_10121 = (state_10132[(2)]);
var state_10132__$1 = state_10132;
if(cljs.core.truth_(inst_10121)){
var statearr_10148_10171 = state_10132__$1;
(statearr_10148_10171[(1)] = (12));

} else {
var statearr_10149_10172 = state_10132__$1;
(statearr_10149_10172[(1)] = (13));

}

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
}
}
}
});})(c__6611__auto___10158,tc,fc))
;
return ((function (switch__6549__auto__,c__6611__auto___10158,tc,fc){
return (function() {
var cljs$core$async$state_machine__6550__auto__ = null;
var cljs$core$async$state_machine__6550__auto____0 = (function (){
var statearr_10153 = [null,null,null,null,null,null,null,null,null];
(statearr_10153[(0)] = cljs$core$async$state_machine__6550__auto__);

(statearr_10153[(1)] = (1));

return statearr_10153;
});
var cljs$core$async$state_machine__6550__auto____1 = (function (state_10132){
while(true){
var ret_value__6551__auto__ = (function (){try{while(true){
var result__6552__auto__ = switch__6549__auto__.call(null,state_10132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6552__auto__;
}
break;
}
}catch (e10154){if((e10154 instanceof Object)){
var ex__6553__auto__ = e10154;
var statearr_10155_10173 = state_10132;
(statearr_10155_10173[(5)] = ex__6553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10174 = state_10132;
state_10132 = G__10174;
continue;
} else {
return ret_value__6551__auto__;
}
break;
}
});
cljs$core$async$state_machine__6550__auto__ = function(state_10132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6550__auto____1.call(this,state_10132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6550__auto____0;
cljs$core$async$state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6550__auto____1;
return cljs$core$async$state_machine__6550__auto__;
})()
;})(switch__6549__auto__,c__6611__auto___10158,tc,fc))
})();
var state__6613__auto__ = (function (){var statearr_10156 = f__6612__auto__.call(null);
(statearr_10156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6611__auto___10158);

return statearr_10156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6613__auto__);
});})(c__6611__auto___10158,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__6611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6611__auto__){
return (function (){
var f__6612__auto__ = (function (){var switch__6549__auto__ = ((function (c__6611__auto__){
return (function (state_10221){
var state_val_10222 = (state_10221[(1)]);
if((state_val_10222 === (1))){
var inst_10207 = init;
var state_10221__$1 = (function (){var statearr_10223 = state_10221;
(statearr_10223[(7)] = inst_10207);

return statearr_10223;
})();
var statearr_10224_10239 = state_10221__$1;
(statearr_10224_10239[(2)] = null);

(statearr_10224_10239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10222 === (2))){
var state_10221__$1 = state_10221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10221__$1,(4),ch);
} else {
if((state_val_10222 === (3))){
var inst_10219 = (state_10221[(2)]);
var state_10221__$1 = state_10221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10221__$1,inst_10219);
} else {
if((state_val_10222 === (4))){
var inst_10210 = (state_10221[(8)]);
var inst_10210__$1 = (state_10221[(2)]);
var inst_10211 = (inst_10210__$1 == null);
var state_10221__$1 = (function (){var statearr_10225 = state_10221;
(statearr_10225[(8)] = inst_10210__$1);

return statearr_10225;
})();
if(cljs.core.truth_(inst_10211)){
var statearr_10226_10240 = state_10221__$1;
(statearr_10226_10240[(1)] = (5));

} else {
var statearr_10227_10241 = state_10221__$1;
(statearr_10227_10241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10222 === (5))){
var inst_10207 = (state_10221[(7)]);
var state_10221__$1 = state_10221;
var statearr_10228_10242 = state_10221__$1;
(statearr_10228_10242[(2)] = inst_10207);

(statearr_10228_10242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10222 === (6))){
var inst_10207 = (state_10221[(7)]);
var inst_10210 = (state_10221[(8)]);
var inst_10214 = f.call(null,inst_10207,inst_10210);
var inst_10207__$1 = inst_10214;
var state_10221__$1 = (function (){var statearr_10229 = state_10221;
(statearr_10229[(7)] = inst_10207__$1);

return statearr_10229;
})();
var statearr_10230_10243 = state_10221__$1;
(statearr_10230_10243[(2)] = null);

(statearr_10230_10243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10222 === (7))){
var inst_10217 = (state_10221[(2)]);
var state_10221__$1 = state_10221;
var statearr_10231_10244 = state_10221__$1;
(statearr_10231_10244[(2)] = inst_10217);

(statearr_10231_10244[(1)] = (3));


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
});})(c__6611__auto__))
;
return ((function (switch__6549__auto__,c__6611__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6550__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6550__auto____0 = (function (){
var statearr_10235 = [null,null,null,null,null,null,null,null,null];
(statearr_10235[(0)] = cljs$core$async$reduce_$_state_machine__6550__auto__);

(statearr_10235[(1)] = (1));

return statearr_10235;
});
var cljs$core$async$reduce_$_state_machine__6550__auto____1 = (function (state_10221){
while(true){
var ret_value__6551__auto__ = (function (){try{while(true){
var result__6552__auto__ = switch__6549__auto__.call(null,state_10221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6552__auto__;
}
break;
}
}catch (e10236){if((e10236 instanceof Object)){
var ex__6553__auto__ = e10236;
var statearr_10237_10245 = state_10221;
(statearr_10237_10245[(5)] = ex__6553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10246 = state_10221;
state_10221 = G__10246;
continue;
} else {
return ret_value__6551__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6550__auto__ = function(state_10221){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6550__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6550__auto____1.call(this,state_10221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6550__auto____0;
cljs$core$async$reduce_$_state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6550__auto____1;
return cljs$core$async$reduce_$_state_machine__6550__auto__;
})()
;})(switch__6549__auto__,c__6611__auto__))
})();
var state__6613__auto__ = (function (){var statearr_10238 = f__6612__auto__.call(null);
(statearr_10238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6611__auto__);

return statearr_10238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6613__auto__);
});})(c__6611__auto__))
);

return c__6611__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__10248 = arguments.length;
switch (G__10248) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__6611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6611__auto__){
return (function (){
var f__6612__auto__ = (function (){var switch__6549__auto__ = ((function (c__6611__auto__){
return (function (state_10273){
var state_val_10274 = (state_10273[(1)]);
if((state_val_10274 === (7))){
var inst_10255 = (state_10273[(2)]);
var state_10273__$1 = state_10273;
var statearr_10275_10299 = state_10273__$1;
(statearr_10275_10299[(2)] = inst_10255);

(statearr_10275_10299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10274 === (1))){
var inst_10249 = cljs.core.seq.call(null,coll);
var inst_10250 = inst_10249;
var state_10273__$1 = (function (){var statearr_10276 = state_10273;
(statearr_10276[(7)] = inst_10250);

return statearr_10276;
})();
var statearr_10277_10300 = state_10273__$1;
(statearr_10277_10300[(2)] = null);

(statearr_10277_10300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10274 === (4))){
var inst_10250 = (state_10273[(7)]);
var inst_10253 = cljs.core.first.call(null,inst_10250);
var state_10273__$1 = state_10273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10273__$1,(7),ch,inst_10253);
} else {
if((state_val_10274 === (13))){
var inst_10267 = (state_10273[(2)]);
var state_10273__$1 = state_10273;
var statearr_10278_10301 = state_10273__$1;
(statearr_10278_10301[(2)] = inst_10267);

(statearr_10278_10301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10274 === (6))){
var inst_10258 = (state_10273[(2)]);
var state_10273__$1 = state_10273;
if(cljs.core.truth_(inst_10258)){
var statearr_10279_10302 = state_10273__$1;
(statearr_10279_10302[(1)] = (8));

} else {
var statearr_10280_10303 = state_10273__$1;
(statearr_10280_10303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10274 === (3))){
var inst_10271 = (state_10273[(2)]);
var state_10273__$1 = state_10273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10273__$1,inst_10271);
} else {
if((state_val_10274 === (12))){
var state_10273__$1 = state_10273;
var statearr_10281_10304 = state_10273__$1;
(statearr_10281_10304[(2)] = null);

(statearr_10281_10304[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10274 === (2))){
var inst_10250 = (state_10273[(7)]);
var state_10273__$1 = state_10273;
if(cljs.core.truth_(inst_10250)){
var statearr_10282_10305 = state_10273__$1;
(statearr_10282_10305[(1)] = (4));

} else {
var statearr_10283_10306 = state_10273__$1;
(statearr_10283_10306[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10274 === (11))){
var inst_10264 = cljs.core.async.close_BANG_.call(null,ch);
var state_10273__$1 = state_10273;
var statearr_10284_10307 = state_10273__$1;
(statearr_10284_10307[(2)] = inst_10264);

(statearr_10284_10307[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10274 === (9))){
var state_10273__$1 = state_10273;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10285_10308 = state_10273__$1;
(statearr_10285_10308[(1)] = (11));

} else {
var statearr_10286_10309 = state_10273__$1;
(statearr_10286_10309[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10274 === (5))){
var inst_10250 = (state_10273[(7)]);
var state_10273__$1 = state_10273;
var statearr_10287_10310 = state_10273__$1;
(statearr_10287_10310[(2)] = inst_10250);

(statearr_10287_10310[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10274 === (10))){
var inst_10269 = (state_10273[(2)]);
var state_10273__$1 = state_10273;
var statearr_10288_10311 = state_10273__$1;
(statearr_10288_10311[(2)] = inst_10269);

(statearr_10288_10311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10274 === (8))){
var inst_10250 = (state_10273[(7)]);
var inst_10260 = cljs.core.next.call(null,inst_10250);
var inst_10250__$1 = inst_10260;
var state_10273__$1 = (function (){var statearr_10289 = state_10273;
(statearr_10289[(7)] = inst_10250__$1);

return statearr_10289;
})();
var statearr_10290_10312 = state_10273__$1;
(statearr_10290_10312[(2)] = null);

(statearr_10290_10312[(1)] = (2));


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
}
}
});})(c__6611__auto__))
;
return ((function (switch__6549__auto__,c__6611__auto__){
return (function() {
var cljs$core$async$state_machine__6550__auto__ = null;
var cljs$core$async$state_machine__6550__auto____0 = (function (){
var statearr_10294 = [null,null,null,null,null,null,null,null];
(statearr_10294[(0)] = cljs$core$async$state_machine__6550__auto__);

(statearr_10294[(1)] = (1));

return statearr_10294;
});
var cljs$core$async$state_machine__6550__auto____1 = (function (state_10273){
while(true){
var ret_value__6551__auto__ = (function (){try{while(true){
var result__6552__auto__ = switch__6549__auto__.call(null,state_10273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6552__auto__;
}
break;
}
}catch (e10295){if((e10295 instanceof Object)){
var ex__6553__auto__ = e10295;
var statearr_10296_10313 = state_10273;
(statearr_10296_10313[(5)] = ex__6553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10314 = state_10273;
state_10273 = G__10314;
continue;
} else {
return ret_value__6551__auto__;
}
break;
}
});
cljs$core$async$state_machine__6550__auto__ = function(state_10273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6550__auto____1.call(this,state_10273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6550__auto____0;
cljs$core$async$state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6550__auto____1;
return cljs$core$async$state_machine__6550__auto__;
})()
;})(switch__6549__auto__,c__6611__auto__))
})();
var state__6613__auto__ = (function (){var statearr_10297 = f__6612__auto__.call(null);
(statearr_10297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6611__auto__);

return statearr_10297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6613__auto__);
});})(c__6611__auto__))
);

return c__6611__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj10316 = {};
return obj10316;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4239__auto__ = _;
if(and__4239__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4239__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4887__auto__ = (((_ == null))?null:_);
return (function (){var or__4251__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4887__auto__)]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj10318 = {};
return obj10318;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4239__auto__ = m;
if(and__4239__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4239__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4887__auto__ = (((m == null))?null:m);
return (function (){var or__4251__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4887__auto__)]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4239__auto__ = m;
if(and__4239__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4887__auto__ = (((m == null))?null:m);
return (function (){var or__4251__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4887__auto__)]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4239__auto__ = m;
if(and__4239__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4239__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4887__auto__ = (((m == null))?null:m);
return (function (){var or__4251__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4887__auto__)]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t10540 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10540 = (function (mult,ch,cs,meta10541){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta10541 = meta10541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10542,meta10541__$1){
var self__ = this;
var _10542__$1 = this;
return (new cljs.core.async.t10540(self__.mult,self__.ch,self__.cs,meta10541__$1));
});})(cs))
;

cljs.core.async.t10540.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10542){
var self__ = this;
var _10542__$1 = this;
return self__.meta10541;
});})(cs))
;

cljs.core.async.t10540.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t10540.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t10540.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t10540.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t10540.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t10540.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t10540.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10541","meta10541",-1475444388,null)], null);
});})(cs))
;

cljs.core.async.t10540.cljs$lang$type = true;

cljs.core.async.t10540.cljs$lang$ctorStr = "cljs.core.async/t10540";

cljs.core.async.t10540.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4830__auto__,writer__4831__auto__,opt__4832__auto__){
return cljs.core._write.call(null,writer__4831__auto__,"cljs.core.async/t10540");
});})(cs))
;

cljs.core.async.__GT_t10540 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t10540(mult__$1,ch__$1,cs__$1,meta10541){
return (new cljs.core.async.t10540(mult__$1,ch__$1,cs__$1,meta10541));
});})(cs))
;

}

return (new cljs.core.async.t10540(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6611__auto___10761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6611__auto___10761,cs,m,dchan,dctr,done){
return (function (){
var f__6612__auto__ = (function (){var switch__6549__auto__ = ((function (c__6611__auto___10761,cs,m,dchan,dctr,done){
return (function (state_10673){
var state_val_10674 = (state_10673[(1)]);
if((state_val_10674 === (7))){
var inst_10669 = (state_10673[(2)]);
var state_10673__$1 = state_10673;
var statearr_10675_10762 = state_10673__$1;
(statearr_10675_10762[(2)] = inst_10669);

(statearr_10675_10762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (20))){
var inst_10574 = (state_10673[(7)]);
var inst_10584 = cljs.core.first.call(null,inst_10574);
var inst_10585 = cljs.core.nth.call(null,inst_10584,(0),null);
var inst_10586 = cljs.core.nth.call(null,inst_10584,(1),null);
var state_10673__$1 = (function (){var statearr_10676 = state_10673;
(statearr_10676[(8)] = inst_10585);

return statearr_10676;
})();
if(cljs.core.truth_(inst_10586)){
var statearr_10677_10763 = state_10673__$1;
(statearr_10677_10763[(1)] = (22));

} else {
var statearr_10678_10764 = state_10673__$1;
(statearr_10678_10764[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (27))){
var inst_10545 = (state_10673[(9)]);
var inst_10621 = (state_10673[(10)]);
var inst_10616 = (state_10673[(11)]);
var inst_10614 = (state_10673[(12)]);
var inst_10621__$1 = cljs.core._nth.call(null,inst_10614,inst_10616);
var inst_10622 = cljs.core.async.put_BANG_.call(null,inst_10621__$1,inst_10545,done);
var state_10673__$1 = (function (){var statearr_10679 = state_10673;
(statearr_10679[(10)] = inst_10621__$1);

return statearr_10679;
})();
if(cljs.core.truth_(inst_10622)){
var statearr_10680_10765 = state_10673__$1;
(statearr_10680_10765[(1)] = (30));

} else {
var statearr_10681_10766 = state_10673__$1;
(statearr_10681_10766[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (1))){
var state_10673__$1 = state_10673;
var statearr_10682_10767 = state_10673__$1;
(statearr_10682_10767[(2)] = null);

(statearr_10682_10767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (24))){
var inst_10574 = (state_10673[(7)]);
var inst_10591 = (state_10673[(2)]);
var inst_10592 = cljs.core.next.call(null,inst_10574);
var inst_10554 = inst_10592;
var inst_10555 = null;
var inst_10556 = (0);
var inst_10557 = (0);
var state_10673__$1 = (function (){var statearr_10683 = state_10673;
(statearr_10683[(13)] = inst_10591);

(statearr_10683[(14)] = inst_10556);

(statearr_10683[(15)] = inst_10557);

(statearr_10683[(16)] = inst_10555);

(statearr_10683[(17)] = inst_10554);

return statearr_10683;
})();
var statearr_10684_10768 = state_10673__$1;
(statearr_10684_10768[(2)] = null);

(statearr_10684_10768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (39))){
var state_10673__$1 = state_10673;
var statearr_10688_10769 = state_10673__$1;
(statearr_10688_10769[(2)] = null);

(statearr_10688_10769[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (4))){
var inst_10545 = (state_10673[(9)]);
var inst_10545__$1 = (state_10673[(2)]);
var inst_10546 = (inst_10545__$1 == null);
var state_10673__$1 = (function (){var statearr_10689 = state_10673;
(statearr_10689[(9)] = inst_10545__$1);

return statearr_10689;
})();
if(cljs.core.truth_(inst_10546)){
var statearr_10690_10770 = state_10673__$1;
(statearr_10690_10770[(1)] = (5));

} else {
var statearr_10691_10771 = state_10673__$1;
(statearr_10691_10771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (15))){
var inst_10556 = (state_10673[(14)]);
var inst_10557 = (state_10673[(15)]);
var inst_10555 = (state_10673[(16)]);
var inst_10554 = (state_10673[(17)]);
var inst_10570 = (state_10673[(2)]);
var inst_10571 = (inst_10557 + (1));
var tmp10685 = inst_10556;
var tmp10686 = inst_10555;
var tmp10687 = inst_10554;
var inst_10554__$1 = tmp10687;
var inst_10555__$1 = tmp10686;
var inst_10556__$1 = tmp10685;
var inst_10557__$1 = inst_10571;
var state_10673__$1 = (function (){var statearr_10692 = state_10673;
(statearr_10692[(18)] = inst_10570);

(statearr_10692[(14)] = inst_10556__$1);

(statearr_10692[(15)] = inst_10557__$1);

(statearr_10692[(16)] = inst_10555__$1);

(statearr_10692[(17)] = inst_10554__$1);

return statearr_10692;
})();
var statearr_10693_10772 = state_10673__$1;
(statearr_10693_10772[(2)] = null);

(statearr_10693_10772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (21))){
var inst_10595 = (state_10673[(2)]);
var state_10673__$1 = state_10673;
var statearr_10697_10773 = state_10673__$1;
(statearr_10697_10773[(2)] = inst_10595);

(statearr_10697_10773[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (31))){
var inst_10621 = (state_10673[(10)]);
var inst_10625 = done.call(null,null);
var inst_10626 = cljs.core.async.untap_STAR_.call(null,m,inst_10621);
var state_10673__$1 = (function (){var statearr_10698 = state_10673;
(statearr_10698[(19)] = inst_10625);

return statearr_10698;
})();
var statearr_10699_10774 = state_10673__$1;
(statearr_10699_10774[(2)] = inst_10626);

(statearr_10699_10774[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (32))){
var inst_10613 = (state_10673[(20)]);
var inst_10616 = (state_10673[(11)]);
var inst_10615 = (state_10673[(21)]);
var inst_10614 = (state_10673[(12)]);
var inst_10628 = (state_10673[(2)]);
var inst_10629 = (inst_10616 + (1));
var tmp10694 = inst_10613;
var tmp10695 = inst_10615;
var tmp10696 = inst_10614;
var inst_10613__$1 = tmp10694;
var inst_10614__$1 = tmp10696;
var inst_10615__$1 = tmp10695;
var inst_10616__$1 = inst_10629;
var state_10673__$1 = (function (){var statearr_10700 = state_10673;
(statearr_10700[(20)] = inst_10613__$1);

(statearr_10700[(22)] = inst_10628);

(statearr_10700[(11)] = inst_10616__$1);

(statearr_10700[(21)] = inst_10615__$1);

(statearr_10700[(12)] = inst_10614__$1);

return statearr_10700;
})();
var statearr_10701_10775 = state_10673__$1;
(statearr_10701_10775[(2)] = null);

(statearr_10701_10775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (40))){
var inst_10641 = (state_10673[(23)]);
var inst_10645 = done.call(null,null);
var inst_10646 = cljs.core.async.untap_STAR_.call(null,m,inst_10641);
var state_10673__$1 = (function (){var statearr_10702 = state_10673;
(statearr_10702[(24)] = inst_10645);

return statearr_10702;
})();
var statearr_10703_10776 = state_10673__$1;
(statearr_10703_10776[(2)] = inst_10646);

(statearr_10703_10776[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (33))){
var inst_10632 = (state_10673[(25)]);
var inst_10634 = cljs.core.chunked_seq_QMARK_.call(null,inst_10632);
var state_10673__$1 = state_10673;
if(inst_10634){
var statearr_10704_10777 = state_10673__$1;
(statearr_10704_10777[(1)] = (36));

} else {
var statearr_10705_10778 = state_10673__$1;
(statearr_10705_10778[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (13))){
var inst_10564 = (state_10673[(26)]);
var inst_10567 = cljs.core.async.close_BANG_.call(null,inst_10564);
var state_10673__$1 = state_10673;
var statearr_10706_10779 = state_10673__$1;
(statearr_10706_10779[(2)] = inst_10567);

(statearr_10706_10779[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (22))){
var inst_10585 = (state_10673[(8)]);
var inst_10588 = cljs.core.async.close_BANG_.call(null,inst_10585);
var state_10673__$1 = state_10673;
var statearr_10707_10780 = state_10673__$1;
(statearr_10707_10780[(2)] = inst_10588);

(statearr_10707_10780[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (36))){
var inst_10632 = (state_10673[(25)]);
var inst_10636 = cljs.core.chunk_first.call(null,inst_10632);
var inst_10637 = cljs.core.chunk_rest.call(null,inst_10632);
var inst_10638 = cljs.core.count.call(null,inst_10636);
var inst_10613 = inst_10637;
var inst_10614 = inst_10636;
var inst_10615 = inst_10638;
var inst_10616 = (0);
var state_10673__$1 = (function (){var statearr_10708 = state_10673;
(statearr_10708[(20)] = inst_10613);

(statearr_10708[(11)] = inst_10616);

(statearr_10708[(21)] = inst_10615);

(statearr_10708[(12)] = inst_10614);

return statearr_10708;
})();
var statearr_10709_10781 = state_10673__$1;
(statearr_10709_10781[(2)] = null);

(statearr_10709_10781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (41))){
var inst_10632 = (state_10673[(25)]);
var inst_10648 = (state_10673[(2)]);
var inst_10649 = cljs.core.next.call(null,inst_10632);
var inst_10613 = inst_10649;
var inst_10614 = null;
var inst_10615 = (0);
var inst_10616 = (0);
var state_10673__$1 = (function (){var statearr_10710 = state_10673;
(statearr_10710[(20)] = inst_10613);

(statearr_10710[(11)] = inst_10616);

(statearr_10710[(21)] = inst_10615);

(statearr_10710[(27)] = inst_10648);

(statearr_10710[(12)] = inst_10614);

return statearr_10710;
})();
var statearr_10711_10782 = state_10673__$1;
(statearr_10711_10782[(2)] = null);

(statearr_10711_10782[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (43))){
var state_10673__$1 = state_10673;
var statearr_10712_10783 = state_10673__$1;
(statearr_10712_10783[(2)] = null);

(statearr_10712_10783[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (29))){
var inst_10657 = (state_10673[(2)]);
var state_10673__$1 = state_10673;
var statearr_10713_10784 = state_10673__$1;
(statearr_10713_10784[(2)] = inst_10657);

(statearr_10713_10784[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (44))){
var inst_10666 = (state_10673[(2)]);
var state_10673__$1 = (function (){var statearr_10714 = state_10673;
(statearr_10714[(28)] = inst_10666);

return statearr_10714;
})();
var statearr_10715_10785 = state_10673__$1;
(statearr_10715_10785[(2)] = null);

(statearr_10715_10785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (6))){
var inst_10605 = (state_10673[(29)]);
var inst_10604 = cljs.core.deref.call(null,cs);
var inst_10605__$1 = cljs.core.keys.call(null,inst_10604);
var inst_10606 = cljs.core.count.call(null,inst_10605__$1);
var inst_10607 = cljs.core.reset_BANG_.call(null,dctr,inst_10606);
var inst_10612 = cljs.core.seq.call(null,inst_10605__$1);
var inst_10613 = inst_10612;
var inst_10614 = null;
var inst_10615 = (0);
var inst_10616 = (0);
var state_10673__$1 = (function (){var statearr_10716 = state_10673;
(statearr_10716[(20)] = inst_10613);

(statearr_10716[(11)] = inst_10616);

(statearr_10716[(21)] = inst_10615);

(statearr_10716[(30)] = inst_10607);

(statearr_10716[(12)] = inst_10614);

(statearr_10716[(29)] = inst_10605__$1);

return statearr_10716;
})();
var statearr_10717_10786 = state_10673__$1;
(statearr_10717_10786[(2)] = null);

(statearr_10717_10786[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (28))){
var inst_10632 = (state_10673[(25)]);
var inst_10613 = (state_10673[(20)]);
var inst_10632__$1 = cljs.core.seq.call(null,inst_10613);
var state_10673__$1 = (function (){var statearr_10718 = state_10673;
(statearr_10718[(25)] = inst_10632__$1);

return statearr_10718;
})();
if(inst_10632__$1){
var statearr_10719_10787 = state_10673__$1;
(statearr_10719_10787[(1)] = (33));

} else {
var statearr_10720_10788 = state_10673__$1;
(statearr_10720_10788[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (25))){
var inst_10616 = (state_10673[(11)]);
var inst_10615 = (state_10673[(21)]);
var inst_10618 = (inst_10616 < inst_10615);
var inst_10619 = inst_10618;
var state_10673__$1 = state_10673;
if(cljs.core.truth_(inst_10619)){
var statearr_10721_10789 = state_10673__$1;
(statearr_10721_10789[(1)] = (27));

} else {
var statearr_10722_10790 = state_10673__$1;
(statearr_10722_10790[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (34))){
var state_10673__$1 = state_10673;
var statearr_10723_10791 = state_10673__$1;
(statearr_10723_10791[(2)] = null);

(statearr_10723_10791[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (17))){
var state_10673__$1 = state_10673;
var statearr_10724_10792 = state_10673__$1;
(statearr_10724_10792[(2)] = null);

(statearr_10724_10792[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (3))){
var inst_10671 = (state_10673[(2)]);
var state_10673__$1 = state_10673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10673__$1,inst_10671);
} else {
if((state_val_10674 === (12))){
var inst_10600 = (state_10673[(2)]);
var state_10673__$1 = state_10673;
var statearr_10725_10793 = state_10673__$1;
(statearr_10725_10793[(2)] = inst_10600);

(statearr_10725_10793[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (2))){
var state_10673__$1 = state_10673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10673__$1,(4),ch);
} else {
if((state_val_10674 === (23))){
var state_10673__$1 = state_10673;
var statearr_10726_10794 = state_10673__$1;
(statearr_10726_10794[(2)] = null);

(statearr_10726_10794[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (35))){
var inst_10655 = (state_10673[(2)]);
var state_10673__$1 = state_10673;
var statearr_10727_10795 = state_10673__$1;
(statearr_10727_10795[(2)] = inst_10655);

(statearr_10727_10795[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (19))){
var inst_10574 = (state_10673[(7)]);
var inst_10578 = cljs.core.chunk_first.call(null,inst_10574);
var inst_10579 = cljs.core.chunk_rest.call(null,inst_10574);
var inst_10580 = cljs.core.count.call(null,inst_10578);
var inst_10554 = inst_10579;
var inst_10555 = inst_10578;
var inst_10556 = inst_10580;
var inst_10557 = (0);
var state_10673__$1 = (function (){var statearr_10728 = state_10673;
(statearr_10728[(14)] = inst_10556);

(statearr_10728[(15)] = inst_10557);

(statearr_10728[(16)] = inst_10555);

(statearr_10728[(17)] = inst_10554);

return statearr_10728;
})();
var statearr_10729_10796 = state_10673__$1;
(statearr_10729_10796[(2)] = null);

(statearr_10729_10796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (11))){
var inst_10574 = (state_10673[(7)]);
var inst_10554 = (state_10673[(17)]);
var inst_10574__$1 = cljs.core.seq.call(null,inst_10554);
var state_10673__$1 = (function (){var statearr_10730 = state_10673;
(statearr_10730[(7)] = inst_10574__$1);

return statearr_10730;
})();
if(inst_10574__$1){
var statearr_10731_10797 = state_10673__$1;
(statearr_10731_10797[(1)] = (16));

} else {
var statearr_10732_10798 = state_10673__$1;
(statearr_10732_10798[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (9))){
var inst_10602 = (state_10673[(2)]);
var state_10673__$1 = state_10673;
var statearr_10733_10799 = state_10673__$1;
(statearr_10733_10799[(2)] = inst_10602);

(statearr_10733_10799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (5))){
var inst_10552 = cljs.core.deref.call(null,cs);
var inst_10553 = cljs.core.seq.call(null,inst_10552);
var inst_10554 = inst_10553;
var inst_10555 = null;
var inst_10556 = (0);
var inst_10557 = (0);
var state_10673__$1 = (function (){var statearr_10734 = state_10673;
(statearr_10734[(14)] = inst_10556);

(statearr_10734[(15)] = inst_10557);

(statearr_10734[(16)] = inst_10555);

(statearr_10734[(17)] = inst_10554);

return statearr_10734;
})();
var statearr_10735_10800 = state_10673__$1;
(statearr_10735_10800[(2)] = null);

(statearr_10735_10800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (14))){
var state_10673__$1 = state_10673;
var statearr_10736_10801 = state_10673__$1;
(statearr_10736_10801[(2)] = null);

(statearr_10736_10801[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (45))){
var inst_10663 = (state_10673[(2)]);
var state_10673__$1 = state_10673;
var statearr_10737_10802 = state_10673__$1;
(statearr_10737_10802[(2)] = inst_10663);

(statearr_10737_10802[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (26))){
var inst_10605 = (state_10673[(29)]);
var inst_10659 = (state_10673[(2)]);
var inst_10660 = cljs.core.seq.call(null,inst_10605);
var state_10673__$1 = (function (){var statearr_10738 = state_10673;
(statearr_10738[(31)] = inst_10659);

return statearr_10738;
})();
if(inst_10660){
var statearr_10739_10803 = state_10673__$1;
(statearr_10739_10803[(1)] = (42));

} else {
var statearr_10740_10804 = state_10673__$1;
(statearr_10740_10804[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (16))){
var inst_10574 = (state_10673[(7)]);
var inst_10576 = cljs.core.chunked_seq_QMARK_.call(null,inst_10574);
var state_10673__$1 = state_10673;
if(inst_10576){
var statearr_10741_10805 = state_10673__$1;
(statearr_10741_10805[(1)] = (19));

} else {
var statearr_10742_10806 = state_10673__$1;
(statearr_10742_10806[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (38))){
var inst_10652 = (state_10673[(2)]);
var state_10673__$1 = state_10673;
var statearr_10743_10807 = state_10673__$1;
(statearr_10743_10807[(2)] = inst_10652);

(statearr_10743_10807[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (30))){
var state_10673__$1 = state_10673;
var statearr_10744_10808 = state_10673__$1;
(statearr_10744_10808[(2)] = null);

(statearr_10744_10808[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (10))){
var inst_10557 = (state_10673[(15)]);
var inst_10555 = (state_10673[(16)]);
var inst_10563 = cljs.core._nth.call(null,inst_10555,inst_10557);
var inst_10564 = cljs.core.nth.call(null,inst_10563,(0),null);
var inst_10565 = cljs.core.nth.call(null,inst_10563,(1),null);
var state_10673__$1 = (function (){var statearr_10745 = state_10673;
(statearr_10745[(26)] = inst_10564);

return statearr_10745;
})();
if(cljs.core.truth_(inst_10565)){
var statearr_10746_10809 = state_10673__$1;
(statearr_10746_10809[(1)] = (13));

} else {
var statearr_10747_10810 = state_10673__$1;
(statearr_10747_10810[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (18))){
var inst_10598 = (state_10673[(2)]);
var state_10673__$1 = state_10673;
var statearr_10748_10811 = state_10673__$1;
(statearr_10748_10811[(2)] = inst_10598);

(statearr_10748_10811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (42))){
var state_10673__$1 = state_10673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10673__$1,(45),dchan);
} else {
if((state_val_10674 === (37))){
var inst_10632 = (state_10673[(25)]);
var inst_10545 = (state_10673[(9)]);
var inst_10641 = (state_10673[(23)]);
var inst_10641__$1 = cljs.core.first.call(null,inst_10632);
var inst_10642 = cljs.core.async.put_BANG_.call(null,inst_10641__$1,inst_10545,done);
var state_10673__$1 = (function (){var statearr_10749 = state_10673;
(statearr_10749[(23)] = inst_10641__$1);

return statearr_10749;
})();
if(cljs.core.truth_(inst_10642)){
var statearr_10750_10812 = state_10673__$1;
(statearr_10750_10812[(1)] = (39));

} else {
var statearr_10751_10813 = state_10673__$1;
(statearr_10751_10813[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10674 === (8))){
var inst_10556 = (state_10673[(14)]);
var inst_10557 = (state_10673[(15)]);
var inst_10559 = (inst_10557 < inst_10556);
var inst_10560 = inst_10559;
var state_10673__$1 = state_10673;
if(cljs.core.truth_(inst_10560)){
var statearr_10752_10814 = state_10673__$1;
(statearr_10752_10814[(1)] = (10));

} else {
var statearr_10753_10815 = state_10673__$1;
(statearr_10753_10815[(1)] = (11));

}

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
}
});})(c__6611__auto___10761,cs,m,dchan,dctr,done))
;
return ((function (switch__6549__auto__,c__6611__auto___10761,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6550__auto__ = null;
var cljs$core$async$mult_$_state_machine__6550__auto____0 = (function (){
var statearr_10757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10757[(0)] = cljs$core$async$mult_$_state_machine__6550__auto__);

(statearr_10757[(1)] = (1));

return statearr_10757;
});
var cljs$core$async$mult_$_state_machine__6550__auto____1 = (function (state_10673){
while(true){
var ret_value__6551__auto__ = (function (){try{while(true){
var result__6552__auto__ = switch__6549__auto__.call(null,state_10673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6552__auto__;
}
break;
}
}catch (e10758){if((e10758 instanceof Object)){
var ex__6553__auto__ = e10758;
var statearr_10759_10816 = state_10673;
(statearr_10759_10816[(5)] = ex__6553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10817 = state_10673;
state_10673 = G__10817;
continue;
} else {
return ret_value__6551__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6550__auto__ = function(state_10673){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6550__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6550__auto____1.call(this,state_10673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6550__auto____0;
cljs$core$async$mult_$_state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6550__auto____1;
return cljs$core$async$mult_$_state_machine__6550__auto__;
})()
;})(switch__6549__auto__,c__6611__auto___10761,cs,m,dchan,dctr,done))
})();
var state__6613__auto__ = (function (){var statearr_10760 = f__6612__auto__.call(null);
(statearr_10760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6611__auto___10761);

return statearr_10760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6613__auto__);
});})(c__6611__auto___10761,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__10819 = arguments.length;
switch (G__10819) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj10822 = {};
return obj10822;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4239__auto__ = m;
if(and__4239__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4887__auto__ = (((m == null))?null:m);
return (function (){var or__4251__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4887__auto__)]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4239__auto__ = m;
if(and__4239__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4887__auto__ = (((m == null))?null:m);
return (function (){var or__4251__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4887__auto__)]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4239__auto__ = m;
if(and__4239__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4239__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4887__auto__ = (((m == null))?null:m);
return (function (){var or__4251__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4887__auto__)]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4239__auto__ = m;
if(and__4239__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4887__auto__ = (((m == null))?null:m);
return (function (){var or__4251__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4887__auto__)]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4239__auto__ = m;
if(and__4239__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4887__auto__ = (((m == null))?null:m);
return (function (){var or__4251__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4887__auto__)]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5291__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5291__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10827){
var map__10828 = p__10827;
var map__10828__$1 = ((cljs.core.seq_QMARK_.call(null,map__10828))?cljs.core.apply.call(null,cljs.core.hash_map,map__10828):map__10828);
var opts = map__10828__$1;
var statearr_10829_10832 = state;
(statearr_10829_10832[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__10828,map__10828__$1,opts){
return (function (val){
var statearr_10830_10833 = state;
(statearr_10830_10833[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10828,map__10828__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_10831_10834 = state;
(statearr_10831_10834[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10823){
var G__10824 = cljs.core.first.call(null,seq10823);
var seq10823__$1 = cljs.core.next.call(null,seq10823);
var G__10825 = cljs.core.first.call(null,seq10823__$1);
var seq10823__$2 = cljs.core.next.call(null,seq10823__$1);
var G__10826 = cljs.core.first.call(null,seq10823__$2);
var seq10823__$3 = cljs.core.next.call(null,seq10823__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10824,G__10825,G__10826,seq10823__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t10954 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10954 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10955){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta10955 = meta10955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10956,meta10955__$1){
var self__ = this;
var _10956__$1 = this;
return (new cljs.core.async.t10954(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10955__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10954.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10956){
var self__ = this;
var _10956__$1 = this;
return self__.meta10955;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10954.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t10954.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10954.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t10954.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10954.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10954.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10954.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10954.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10954.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10955","meta10955",-1516302480,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10954.cljs$lang$type = true;

cljs.core.async.t10954.cljs$lang$ctorStr = "cljs.core.async/t10954";

cljs.core.async.t10954.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4830__auto__,writer__4831__auto__,opt__4832__auto__){
return cljs.core._write.call(null,writer__4831__auto__,"cljs.core.async/t10954");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t10954 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t10954(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10955){
return (new cljs.core.async.t10954(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10955));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t10954(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6611__auto___11073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6611__auto___11073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6612__auto__ = (function (){var switch__6549__auto__ = ((function (c__6611__auto___11073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11026){
var state_val_11027 = (state_11026[(1)]);
if((state_val_11027 === (7))){
var inst_10970 = (state_11026[(7)]);
var inst_10975 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10970);
var state_11026__$1 = state_11026;
var statearr_11028_11074 = state_11026__$1;
(statearr_11028_11074[(2)] = inst_10975);

(statearr_11028_11074[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11027 === (20))){
var inst_10985 = (state_11026[(8)]);
var state_11026__$1 = state_11026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11026__$1,(23),out,inst_10985);
} else {
if((state_val_11027 === (1))){
var inst_10960 = (state_11026[(9)]);
var inst_10960__$1 = calc_state.call(null);
var inst_10961 = cljs.core.seq_QMARK_.call(null,inst_10960__$1);
var state_11026__$1 = (function (){var statearr_11029 = state_11026;
(statearr_11029[(9)] = inst_10960__$1);

return statearr_11029;
})();
if(inst_10961){
var statearr_11030_11075 = state_11026__$1;
(statearr_11030_11075[(1)] = (2));

} else {
var statearr_11031_11076 = state_11026__$1;
(statearr_11031_11076[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11027 === (24))){
var inst_10978 = (state_11026[(10)]);
var inst_10970 = inst_10978;
var state_11026__$1 = (function (){var statearr_11032 = state_11026;
(statearr_11032[(7)] = inst_10970);

return statearr_11032;
})();
var statearr_11033_11077 = state_11026__$1;
(statearr_11033_11077[(2)] = null);

(statearr_11033_11077[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11027 === (4))){
var inst_10960 = (state_11026[(9)]);
var inst_10966 = (state_11026[(2)]);
var inst_10967 = cljs.core.get.call(null,inst_10966,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10968 = cljs.core.get.call(null,inst_10966,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10969 = cljs.core.get.call(null,inst_10966,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10970 = inst_10960;
var state_11026__$1 = (function (){var statearr_11034 = state_11026;
(statearr_11034[(11)] = inst_10967);

(statearr_11034[(12)] = inst_10968);

(statearr_11034[(7)] = inst_10970);

(statearr_11034[(13)] = inst_10969);

return statearr_11034;
})();
var statearr_11035_11078 = state_11026__$1;
(statearr_11035_11078[(2)] = null);

(statearr_11035_11078[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11027 === (15))){
var state_11026__$1 = state_11026;
var statearr_11036_11079 = state_11026__$1;
(statearr_11036_11079[(2)] = null);

(statearr_11036_11079[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11027 === (21))){
var inst_10978 = (state_11026[(10)]);
var inst_10970 = inst_10978;
var state_11026__$1 = (function (){var statearr_11037 = state_11026;
(statearr_11037[(7)] = inst_10970);

return statearr_11037;
})();
var statearr_11038_11080 = state_11026__$1;
(statearr_11038_11080[(2)] = null);

(statearr_11038_11080[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11027 === (13))){
var inst_11022 = (state_11026[(2)]);
var state_11026__$1 = state_11026;
var statearr_11039_11081 = state_11026__$1;
(statearr_11039_11081[(2)] = inst_11022);

(statearr_11039_11081[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11027 === (22))){
var inst_11020 = (state_11026[(2)]);
var state_11026__$1 = state_11026;
var statearr_11040_11082 = state_11026__$1;
(statearr_11040_11082[(2)] = inst_11020);

(statearr_11040_11082[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11027 === (6))){
var inst_11024 = (state_11026[(2)]);
var state_11026__$1 = state_11026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11026__$1,inst_11024);
} else {
if((state_val_11027 === (25))){
var state_11026__$1 = state_11026;
var statearr_11041_11083 = state_11026__$1;
(statearr_11041_11083[(2)] = null);

(statearr_11041_11083[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11027 === (17))){
var inst_11000 = (state_11026[(14)]);
var state_11026__$1 = state_11026;
var statearr_11042_11084 = state_11026__$1;
(statearr_11042_11084[(2)] = inst_11000);

(statearr_11042_11084[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11027 === (3))){
var inst_10960 = (state_11026[(9)]);
var state_11026__$1 = state_11026;
var statearr_11043_11085 = state_11026__$1;
(statearr_11043_11085[(2)] = inst_10960);

(statearr_11043_11085[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11027 === (12))){
var inst_10986 = (state_11026[(15)]);
var inst_10979 = (state_11026[(16)]);
var inst_11000 = (state_11026[(14)]);
var inst_11000__$1 = inst_10979.call(null,inst_10986);
var state_11026__$1 = (function (){var statearr_11044 = state_11026;
(statearr_11044[(14)] = inst_11000__$1);

return statearr_11044;
})();
if(cljs.core.truth_(inst_11000__$1)){
var statearr_11045_11086 = state_11026__$1;
(statearr_11045_11086[(1)] = (17));

} else {
var statearr_11046_11087 = state_11026__$1;
(statearr_11046_11087[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11027 === (2))){
var inst_10960 = (state_11026[(9)]);
var inst_10963 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10960);
var state_11026__$1 = state_11026;
var statearr_11047_11088 = state_11026__$1;
(statearr_11047_11088[(2)] = inst_10963);

(statearr_11047_11088[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11027 === (23))){
var inst_11011 = (state_11026[(2)]);
var state_11026__$1 = state_11026;
if(cljs.core.truth_(inst_11011)){
var statearr_11048_11089 = state_11026__$1;
(statearr_11048_11089[(1)] = (24));

} else {
var statearr_11049_11090 = state_11026__$1;
(statearr_11049_11090[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11027 === (19))){
var inst_11008 = (state_11026[(2)]);
var state_11026__$1 = state_11026;
if(cljs.core.truth_(inst_11008)){
var statearr_11050_11091 = state_11026__$1;
(statearr_11050_11091[(1)] = (20));

} else {
var statearr_11051_11092 = state_11026__$1;
(statearr_11051_11092[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11027 === (11))){
var inst_10985 = (state_11026[(8)]);
var inst_10991 = (inst_10985 == null);
var state_11026__$1 = state_11026;
if(cljs.core.truth_(inst_10991)){
var statearr_11052_11093 = state_11026__$1;
(statearr_11052_11093[(1)] = (14));

} else {
var statearr_11053_11094 = state_11026__$1;
(statearr_11053_11094[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11027 === (9))){
var inst_10978 = (state_11026[(10)]);
var inst_10978__$1 = (state_11026[(2)]);
var inst_10979 = cljs.core.get.call(null,inst_10978__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10980 = cljs.core.get.call(null,inst_10978__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10981 = cljs.core.get.call(null,inst_10978__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11026__$1 = (function (){var statearr_11054 = state_11026;
(statearr_11054[(16)] = inst_10979);

(statearr_11054[(17)] = inst_10980);

(statearr_11054[(10)] = inst_10978__$1);

return statearr_11054;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11026__$1,(10),inst_10981);
} else {
if((state_val_11027 === (5))){
var inst_10970 = (state_11026[(7)]);
var inst_10973 = cljs.core.seq_QMARK_.call(null,inst_10970);
var state_11026__$1 = state_11026;
if(inst_10973){
var statearr_11055_11095 = state_11026__$1;
(statearr_11055_11095[(1)] = (7));

} else {
var statearr_11056_11096 = state_11026__$1;
(statearr_11056_11096[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11027 === (14))){
var inst_10986 = (state_11026[(15)]);
var inst_10993 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10986);
var state_11026__$1 = state_11026;
var statearr_11057_11097 = state_11026__$1;
(statearr_11057_11097[(2)] = inst_10993);

(statearr_11057_11097[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11027 === (26))){
var inst_11016 = (state_11026[(2)]);
var state_11026__$1 = state_11026;
var statearr_11058_11098 = state_11026__$1;
(statearr_11058_11098[(2)] = inst_11016);

(statearr_11058_11098[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11027 === (16))){
var inst_10996 = (state_11026[(2)]);
var inst_10997 = calc_state.call(null);
var inst_10970 = inst_10997;
var state_11026__$1 = (function (){var statearr_11059 = state_11026;
(statearr_11059[(18)] = inst_10996);

(statearr_11059[(7)] = inst_10970);

return statearr_11059;
})();
var statearr_11060_11099 = state_11026__$1;
(statearr_11060_11099[(2)] = null);

(statearr_11060_11099[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11027 === (10))){
var inst_10986 = (state_11026[(15)]);
var inst_10985 = (state_11026[(8)]);
var inst_10984 = (state_11026[(2)]);
var inst_10985__$1 = cljs.core.nth.call(null,inst_10984,(0),null);
var inst_10986__$1 = cljs.core.nth.call(null,inst_10984,(1),null);
var inst_10987 = (inst_10985__$1 == null);
var inst_10988 = cljs.core._EQ_.call(null,inst_10986__$1,change);
var inst_10989 = (inst_10987) || (inst_10988);
var state_11026__$1 = (function (){var statearr_11061 = state_11026;
(statearr_11061[(15)] = inst_10986__$1);

(statearr_11061[(8)] = inst_10985__$1);

return statearr_11061;
})();
if(cljs.core.truth_(inst_10989)){
var statearr_11062_11100 = state_11026__$1;
(statearr_11062_11100[(1)] = (11));

} else {
var statearr_11063_11101 = state_11026__$1;
(statearr_11063_11101[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11027 === (18))){
var inst_10986 = (state_11026[(15)]);
var inst_10979 = (state_11026[(16)]);
var inst_10980 = (state_11026[(17)]);
var inst_11003 = cljs.core.empty_QMARK_.call(null,inst_10979);
var inst_11004 = inst_10980.call(null,inst_10986);
var inst_11005 = cljs.core.not.call(null,inst_11004);
var inst_11006 = (inst_11003) && (inst_11005);
var state_11026__$1 = state_11026;
var statearr_11064_11102 = state_11026__$1;
(statearr_11064_11102[(2)] = inst_11006);

(statearr_11064_11102[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11027 === (8))){
var inst_10970 = (state_11026[(7)]);
var state_11026__$1 = state_11026;
var statearr_11065_11103 = state_11026__$1;
(statearr_11065_11103[(2)] = inst_10970);

(statearr_11065_11103[(1)] = (9));


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
}
}
}
}
});})(c__6611__auto___11073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6549__auto__,c__6611__auto___11073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6550__auto__ = null;
var cljs$core$async$mix_$_state_machine__6550__auto____0 = (function (){
var statearr_11069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11069[(0)] = cljs$core$async$mix_$_state_machine__6550__auto__);

(statearr_11069[(1)] = (1));

return statearr_11069;
});
var cljs$core$async$mix_$_state_machine__6550__auto____1 = (function (state_11026){
while(true){
var ret_value__6551__auto__ = (function (){try{while(true){
var result__6552__auto__ = switch__6549__auto__.call(null,state_11026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6552__auto__;
}
break;
}
}catch (e11070){if((e11070 instanceof Object)){
var ex__6553__auto__ = e11070;
var statearr_11071_11104 = state_11026;
(statearr_11071_11104[(5)] = ex__6553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11105 = state_11026;
state_11026 = G__11105;
continue;
} else {
return ret_value__6551__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6550__auto__ = function(state_11026){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6550__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6550__auto____1.call(this,state_11026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6550__auto____0;
cljs$core$async$mix_$_state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6550__auto____1;
return cljs$core$async$mix_$_state_machine__6550__auto__;
})()
;})(switch__6549__auto__,c__6611__auto___11073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6613__auto__ = (function (){var statearr_11072 = f__6612__auto__.call(null);
(statearr_11072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6611__auto___11073);

return statearr_11072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6613__auto__);
});})(c__6611__auto___11073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj11107 = {};
return obj11107;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4239__auto__ = p;
if(and__4239__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4239__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4887__auto__ = (((p == null))?null:p);
return (function (){var or__4251__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4887__auto__)]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4239__auto__ = p;
if(and__4239__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4239__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4887__auto__ = (((p == null))?null:p);
return (function (){var or__4251__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4887__auto__)]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__11109 = arguments.length;
switch (G__11109) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4239__auto__ = p;
if(and__4239__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4239__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4887__auto__ = (((p == null))?null:p);
return (function (){var or__4251__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4887__auto__)]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4239__auto__ = p;
if(and__4239__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4887__auto__ = (((p == null))?null:p);
return (function (){var or__4251__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4887__auto__)]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__11113 = arguments.length;
switch (G__11113) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4251__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4251__auto__,mults){
return (function (p1__11111_SHARP_){
if(cljs.core.truth_(p1__11111_SHARP_.call(null,topic))){
return p1__11111_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11111_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4251__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t11114 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11114 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11115){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11115 = meta11115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11116,meta11115__$1){
var self__ = this;
var _11116__$1 = this;
return (new cljs.core.async.t11114(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11115__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t11114.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11116){
var self__ = this;
var _11116__$1 = this;
return self__.meta11115;
});})(mults,ensure_mult))
;

cljs.core.async.t11114.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t11114.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t11114.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t11114.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t11114.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t11114.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t11114.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t11114.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11115","meta11115",428223918,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t11114.cljs$lang$type = true;

cljs.core.async.t11114.cljs$lang$ctorStr = "cljs.core.async/t11114";

cljs.core.async.t11114.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4830__auto__,writer__4831__auto__,opt__4832__auto__){
return cljs.core._write.call(null,writer__4831__auto__,"cljs.core.async/t11114");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t11114 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t11114(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11115){
return (new cljs.core.async.t11114(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11115));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t11114(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6611__auto___11237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6611__auto___11237,mults,ensure_mult,p){
return (function (){
var f__6612__auto__ = (function (){var switch__6549__auto__ = ((function (c__6611__auto___11237,mults,ensure_mult,p){
return (function (state_11188){
var state_val_11189 = (state_11188[(1)]);
if((state_val_11189 === (7))){
var inst_11184 = (state_11188[(2)]);
var state_11188__$1 = state_11188;
var statearr_11190_11238 = state_11188__$1;
(statearr_11190_11238[(2)] = inst_11184);

(statearr_11190_11238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (20))){
var state_11188__$1 = state_11188;
var statearr_11191_11239 = state_11188__$1;
(statearr_11191_11239[(2)] = null);

(statearr_11191_11239[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (1))){
var state_11188__$1 = state_11188;
var statearr_11192_11240 = state_11188__$1;
(statearr_11192_11240[(2)] = null);

(statearr_11192_11240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (24))){
var inst_11167 = (state_11188[(7)]);
var inst_11176 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11167);
var state_11188__$1 = state_11188;
var statearr_11193_11241 = state_11188__$1;
(statearr_11193_11241[(2)] = inst_11176);

(statearr_11193_11241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (4))){
var inst_11119 = (state_11188[(8)]);
var inst_11119__$1 = (state_11188[(2)]);
var inst_11120 = (inst_11119__$1 == null);
var state_11188__$1 = (function (){var statearr_11194 = state_11188;
(statearr_11194[(8)] = inst_11119__$1);

return statearr_11194;
})();
if(cljs.core.truth_(inst_11120)){
var statearr_11195_11242 = state_11188__$1;
(statearr_11195_11242[(1)] = (5));

} else {
var statearr_11196_11243 = state_11188__$1;
(statearr_11196_11243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (15))){
var inst_11161 = (state_11188[(2)]);
var state_11188__$1 = state_11188;
var statearr_11197_11244 = state_11188__$1;
(statearr_11197_11244[(2)] = inst_11161);

(statearr_11197_11244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (21))){
var inst_11181 = (state_11188[(2)]);
var state_11188__$1 = (function (){var statearr_11198 = state_11188;
(statearr_11198[(9)] = inst_11181);

return statearr_11198;
})();
var statearr_11199_11245 = state_11188__$1;
(statearr_11199_11245[(2)] = null);

(statearr_11199_11245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (13))){
var inst_11143 = (state_11188[(10)]);
var inst_11145 = cljs.core.chunked_seq_QMARK_.call(null,inst_11143);
var state_11188__$1 = state_11188;
if(inst_11145){
var statearr_11200_11246 = state_11188__$1;
(statearr_11200_11246[(1)] = (16));

} else {
var statearr_11201_11247 = state_11188__$1;
(statearr_11201_11247[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (22))){
var inst_11173 = (state_11188[(2)]);
var state_11188__$1 = state_11188;
if(cljs.core.truth_(inst_11173)){
var statearr_11202_11248 = state_11188__$1;
(statearr_11202_11248[(1)] = (23));

} else {
var statearr_11203_11249 = state_11188__$1;
(statearr_11203_11249[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (6))){
var inst_11167 = (state_11188[(7)]);
var inst_11119 = (state_11188[(8)]);
var inst_11169 = (state_11188[(11)]);
var inst_11167__$1 = topic_fn.call(null,inst_11119);
var inst_11168 = cljs.core.deref.call(null,mults);
var inst_11169__$1 = cljs.core.get.call(null,inst_11168,inst_11167__$1);
var state_11188__$1 = (function (){var statearr_11204 = state_11188;
(statearr_11204[(7)] = inst_11167__$1);

(statearr_11204[(11)] = inst_11169__$1);

return statearr_11204;
})();
if(cljs.core.truth_(inst_11169__$1)){
var statearr_11205_11250 = state_11188__$1;
(statearr_11205_11250[(1)] = (19));

} else {
var statearr_11206_11251 = state_11188__$1;
(statearr_11206_11251[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (25))){
var inst_11178 = (state_11188[(2)]);
var state_11188__$1 = state_11188;
var statearr_11207_11252 = state_11188__$1;
(statearr_11207_11252[(2)] = inst_11178);

(statearr_11207_11252[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (17))){
var inst_11143 = (state_11188[(10)]);
var inst_11152 = cljs.core.first.call(null,inst_11143);
var inst_11153 = cljs.core.async.muxch_STAR_.call(null,inst_11152);
var inst_11154 = cljs.core.async.close_BANG_.call(null,inst_11153);
var inst_11155 = cljs.core.next.call(null,inst_11143);
var inst_11129 = inst_11155;
var inst_11130 = null;
var inst_11131 = (0);
var inst_11132 = (0);
var state_11188__$1 = (function (){var statearr_11208 = state_11188;
(statearr_11208[(12)] = inst_11129);

(statearr_11208[(13)] = inst_11130);

(statearr_11208[(14)] = inst_11154);

(statearr_11208[(15)] = inst_11131);

(statearr_11208[(16)] = inst_11132);

return statearr_11208;
})();
var statearr_11209_11253 = state_11188__$1;
(statearr_11209_11253[(2)] = null);

(statearr_11209_11253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (3))){
var inst_11186 = (state_11188[(2)]);
var state_11188__$1 = state_11188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11188__$1,inst_11186);
} else {
if((state_val_11189 === (12))){
var inst_11163 = (state_11188[(2)]);
var state_11188__$1 = state_11188;
var statearr_11210_11254 = state_11188__$1;
(statearr_11210_11254[(2)] = inst_11163);

(statearr_11210_11254[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (2))){
var state_11188__$1 = state_11188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11188__$1,(4),ch);
} else {
if((state_val_11189 === (23))){
var state_11188__$1 = state_11188;
var statearr_11211_11255 = state_11188__$1;
(statearr_11211_11255[(2)] = null);

(statearr_11211_11255[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (19))){
var inst_11119 = (state_11188[(8)]);
var inst_11169 = (state_11188[(11)]);
var inst_11171 = cljs.core.async.muxch_STAR_.call(null,inst_11169);
var state_11188__$1 = state_11188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11188__$1,(22),inst_11171,inst_11119);
} else {
if((state_val_11189 === (11))){
var inst_11129 = (state_11188[(12)]);
var inst_11143 = (state_11188[(10)]);
var inst_11143__$1 = cljs.core.seq.call(null,inst_11129);
var state_11188__$1 = (function (){var statearr_11212 = state_11188;
(statearr_11212[(10)] = inst_11143__$1);

return statearr_11212;
})();
if(inst_11143__$1){
var statearr_11213_11256 = state_11188__$1;
(statearr_11213_11256[(1)] = (13));

} else {
var statearr_11214_11257 = state_11188__$1;
(statearr_11214_11257[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (9))){
var inst_11165 = (state_11188[(2)]);
var state_11188__$1 = state_11188;
var statearr_11215_11258 = state_11188__$1;
(statearr_11215_11258[(2)] = inst_11165);

(statearr_11215_11258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (5))){
var inst_11126 = cljs.core.deref.call(null,mults);
var inst_11127 = cljs.core.vals.call(null,inst_11126);
var inst_11128 = cljs.core.seq.call(null,inst_11127);
var inst_11129 = inst_11128;
var inst_11130 = null;
var inst_11131 = (0);
var inst_11132 = (0);
var state_11188__$1 = (function (){var statearr_11216 = state_11188;
(statearr_11216[(12)] = inst_11129);

(statearr_11216[(13)] = inst_11130);

(statearr_11216[(15)] = inst_11131);

(statearr_11216[(16)] = inst_11132);

return statearr_11216;
})();
var statearr_11217_11259 = state_11188__$1;
(statearr_11217_11259[(2)] = null);

(statearr_11217_11259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (14))){
var state_11188__$1 = state_11188;
var statearr_11221_11260 = state_11188__$1;
(statearr_11221_11260[(2)] = null);

(statearr_11221_11260[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (16))){
var inst_11143 = (state_11188[(10)]);
var inst_11147 = cljs.core.chunk_first.call(null,inst_11143);
var inst_11148 = cljs.core.chunk_rest.call(null,inst_11143);
var inst_11149 = cljs.core.count.call(null,inst_11147);
var inst_11129 = inst_11148;
var inst_11130 = inst_11147;
var inst_11131 = inst_11149;
var inst_11132 = (0);
var state_11188__$1 = (function (){var statearr_11222 = state_11188;
(statearr_11222[(12)] = inst_11129);

(statearr_11222[(13)] = inst_11130);

(statearr_11222[(15)] = inst_11131);

(statearr_11222[(16)] = inst_11132);

return statearr_11222;
})();
var statearr_11223_11261 = state_11188__$1;
(statearr_11223_11261[(2)] = null);

(statearr_11223_11261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (10))){
var inst_11129 = (state_11188[(12)]);
var inst_11130 = (state_11188[(13)]);
var inst_11131 = (state_11188[(15)]);
var inst_11132 = (state_11188[(16)]);
var inst_11137 = cljs.core._nth.call(null,inst_11130,inst_11132);
var inst_11138 = cljs.core.async.muxch_STAR_.call(null,inst_11137);
var inst_11139 = cljs.core.async.close_BANG_.call(null,inst_11138);
var inst_11140 = (inst_11132 + (1));
var tmp11218 = inst_11129;
var tmp11219 = inst_11130;
var tmp11220 = inst_11131;
var inst_11129__$1 = tmp11218;
var inst_11130__$1 = tmp11219;
var inst_11131__$1 = tmp11220;
var inst_11132__$1 = inst_11140;
var state_11188__$1 = (function (){var statearr_11224 = state_11188;
(statearr_11224[(17)] = inst_11139);

(statearr_11224[(12)] = inst_11129__$1);

(statearr_11224[(13)] = inst_11130__$1);

(statearr_11224[(15)] = inst_11131__$1);

(statearr_11224[(16)] = inst_11132__$1);

return statearr_11224;
})();
var statearr_11225_11262 = state_11188__$1;
(statearr_11225_11262[(2)] = null);

(statearr_11225_11262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (18))){
var inst_11158 = (state_11188[(2)]);
var state_11188__$1 = state_11188;
var statearr_11226_11263 = state_11188__$1;
(statearr_11226_11263[(2)] = inst_11158);

(statearr_11226_11263[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11189 === (8))){
var inst_11131 = (state_11188[(15)]);
var inst_11132 = (state_11188[(16)]);
var inst_11134 = (inst_11132 < inst_11131);
var inst_11135 = inst_11134;
var state_11188__$1 = state_11188;
if(cljs.core.truth_(inst_11135)){
var statearr_11227_11264 = state_11188__$1;
(statearr_11227_11264[(1)] = (10));

} else {
var statearr_11228_11265 = state_11188__$1;
(statearr_11228_11265[(1)] = (11));

}

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
}
}
}
});})(c__6611__auto___11237,mults,ensure_mult,p))
;
return ((function (switch__6549__auto__,c__6611__auto___11237,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6550__auto__ = null;
var cljs$core$async$state_machine__6550__auto____0 = (function (){
var statearr_11232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11232[(0)] = cljs$core$async$state_machine__6550__auto__);

(statearr_11232[(1)] = (1));

return statearr_11232;
});
var cljs$core$async$state_machine__6550__auto____1 = (function (state_11188){
while(true){
var ret_value__6551__auto__ = (function (){try{while(true){
var result__6552__auto__ = switch__6549__auto__.call(null,state_11188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6552__auto__;
}
break;
}
}catch (e11233){if((e11233 instanceof Object)){
var ex__6553__auto__ = e11233;
var statearr_11234_11266 = state_11188;
(statearr_11234_11266[(5)] = ex__6553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11267 = state_11188;
state_11188 = G__11267;
continue;
} else {
return ret_value__6551__auto__;
}
break;
}
});
cljs$core$async$state_machine__6550__auto__ = function(state_11188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6550__auto____1.call(this,state_11188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6550__auto____0;
cljs$core$async$state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6550__auto____1;
return cljs$core$async$state_machine__6550__auto__;
})()
;})(switch__6549__auto__,c__6611__auto___11237,mults,ensure_mult,p))
})();
var state__6613__auto__ = (function (){var statearr_11235 = f__6612__auto__.call(null);
(statearr_11235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6611__auto___11237);

return statearr_11235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6613__auto__);
});})(c__6611__auto___11237,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__11269 = arguments.length;
switch (G__11269) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__11272 = arguments.length;
switch (G__11272) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__11275 = arguments.length;
switch (G__11275) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6611__auto___11345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6611__auto___11345,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6612__auto__ = (function (){var switch__6549__auto__ = ((function (c__6611__auto___11345,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11314){
var state_val_11315 = (state_11314[(1)]);
if((state_val_11315 === (7))){
var state_11314__$1 = state_11314;
var statearr_11316_11346 = state_11314__$1;
(statearr_11316_11346[(2)] = null);

(statearr_11316_11346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11315 === (1))){
var state_11314__$1 = state_11314;
var statearr_11317_11347 = state_11314__$1;
(statearr_11317_11347[(2)] = null);

(statearr_11317_11347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11315 === (4))){
var inst_11278 = (state_11314[(7)]);
var inst_11280 = (inst_11278 < cnt);
var state_11314__$1 = state_11314;
if(cljs.core.truth_(inst_11280)){
var statearr_11318_11348 = state_11314__$1;
(statearr_11318_11348[(1)] = (6));

} else {
var statearr_11319_11349 = state_11314__$1;
(statearr_11319_11349[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11315 === (15))){
var inst_11310 = (state_11314[(2)]);
var state_11314__$1 = state_11314;
var statearr_11320_11350 = state_11314__$1;
(statearr_11320_11350[(2)] = inst_11310);

(statearr_11320_11350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11315 === (13))){
var inst_11303 = cljs.core.async.close_BANG_.call(null,out);
var state_11314__$1 = state_11314;
var statearr_11321_11351 = state_11314__$1;
(statearr_11321_11351[(2)] = inst_11303);

(statearr_11321_11351[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11315 === (6))){
var state_11314__$1 = state_11314;
var statearr_11322_11352 = state_11314__$1;
(statearr_11322_11352[(2)] = null);

(statearr_11322_11352[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11315 === (3))){
var inst_11312 = (state_11314[(2)]);
var state_11314__$1 = state_11314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11314__$1,inst_11312);
} else {
if((state_val_11315 === (12))){
var inst_11300 = (state_11314[(8)]);
var inst_11300__$1 = (state_11314[(2)]);
var inst_11301 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11300__$1);
var state_11314__$1 = (function (){var statearr_11323 = state_11314;
(statearr_11323[(8)] = inst_11300__$1);

return statearr_11323;
})();
if(cljs.core.truth_(inst_11301)){
var statearr_11324_11353 = state_11314__$1;
(statearr_11324_11353[(1)] = (13));

} else {
var statearr_11325_11354 = state_11314__$1;
(statearr_11325_11354[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11315 === (2))){
var inst_11277 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11278 = (0);
var state_11314__$1 = (function (){var statearr_11326 = state_11314;
(statearr_11326[(7)] = inst_11278);

(statearr_11326[(9)] = inst_11277);

return statearr_11326;
})();
var statearr_11327_11355 = state_11314__$1;
(statearr_11327_11355[(2)] = null);

(statearr_11327_11355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11315 === (11))){
var inst_11278 = (state_11314[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11314,(10),Object,null,(9));
var inst_11287 = chs__$1.call(null,inst_11278);
var inst_11288 = done.call(null,inst_11278);
var inst_11289 = cljs.core.async.take_BANG_.call(null,inst_11287,inst_11288);
var state_11314__$1 = state_11314;
var statearr_11328_11356 = state_11314__$1;
(statearr_11328_11356[(2)] = inst_11289);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11314__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11315 === (9))){
var inst_11278 = (state_11314[(7)]);
var inst_11291 = (state_11314[(2)]);
var inst_11292 = (inst_11278 + (1));
var inst_11278__$1 = inst_11292;
var state_11314__$1 = (function (){var statearr_11329 = state_11314;
(statearr_11329[(10)] = inst_11291);

(statearr_11329[(7)] = inst_11278__$1);

return statearr_11329;
})();
var statearr_11330_11357 = state_11314__$1;
(statearr_11330_11357[(2)] = null);

(statearr_11330_11357[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11315 === (5))){
var inst_11298 = (state_11314[(2)]);
var state_11314__$1 = (function (){var statearr_11331 = state_11314;
(statearr_11331[(11)] = inst_11298);

return statearr_11331;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11314__$1,(12),dchan);
} else {
if((state_val_11315 === (14))){
var inst_11300 = (state_11314[(8)]);
var inst_11305 = cljs.core.apply.call(null,f,inst_11300);
var state_11314__$1 = state_11314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11314__$1,(16),out,inst_11305);
} else {
if((state_val_11315 === (16))){
var inst_11307 = (state_11314[(2)]);
var state_11314__$1 = (function (){var statearr_11332 = state_11314;
(statearr_11332[(12)] = inst_11307);

return statearr_11332;
})();
var statearr_11333_11358 = state_11314__$1;
(statearr_11333_11358[(2)] = null);

(statearr_11333_11358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11315 === (10))){
var inst_11282 = (state_11314[(2)]);
var inst_11283 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11314__$1 = (function (){var statearr_11334 = state_11314;
(statearr_11334[(13)] = inst_11282);

return statearr_11334;
})();
var statearr_11335_11359 = state_11314__$1;
(statearr_11335_11359[(2)] = inst_11283);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11314__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11315 === (8))){
var inst_11296 = (state_11314[(2)]);
var state_11314__$1 = state_11314;
var statearr_11336_11360 = state_11314__$1;
(statearr_11336_11360[(2)] = inst_11296);

(statearr_11336_11360[(1)] = (5));


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
}
}
}
}
}
});})(c__6611__auto___11345,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6549__auto__,c__6611__auto___11345,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6550__auto__ = null;
var cljs$core$async$state_machine__6550__auto____0 = (function (){
var statearr_11340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11340[(0)] = cljs$core$async$state_machine__6550__auto__);

(statearr_11340[(1)] = (1));

return statearr_11340;
});
var cljs$core$async$state_machine__6550__auto____1 = (function (state_11314){
while(true){
var ret_value__6551__auto__ = (function (){try{while(true){
var result__6552__auto__ = switch__6549__auto__.call(null,state_11314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6552__auto__;
}
break;
}
}catch (e11341){if((e11341 instanceof Object)){
var ex__6553__auto__ = e11341;
var statearr_11342_11361 = state_11314;
(statearr_11342_11361[(5)] = ex__6553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11362 = state_11314;
state_11314 = G__11362;
continue;
} else {
return ret_value__6551__auto__;
}
break;
}
});
cljs$core$async$state_machine__6550__auto__ = function(state_11314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6550__auto____1.call(this,state_11314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6550__auto____0;
cljs$core$async$state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6550__auto____1;
return cljs$core$async$state_machine__6550__auto__;
})()
;})(switch__6549__auto__,c__6611__auto___11345,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6613__auto__ = (function (){var statearr_11343 = f__6612__auto__.call(null);
(statearr_11343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6611__auto___11345);

return statearr_11343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6613__auto__);
});})(c__6611__auto___11345,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__11365 = arguments.length;
switch (G__11365) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6611__auto___11420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6611__auto___11420,out){
return (function (){
var f__6612__auto__ = (function (){var switch__6549__auto__ = ((function (c__6611__auto___11420,out){
return (function (state_11395){
var state_val_11396 = (state_11395[(1)]);
if((state_val_11396 === (7))){
var inst_11374 = (state_11395[(7)]);
var inst_11375 = (state_11395[(8)]);
var inst_11374__$1 = (state_11395[(2)]);
var inst_11375__$1 = cljs.core.nth.call(null,inst_11374__$1,(0),null);
var inst_11376 = cljs.core.nth.call(null,inst_11374__$1,(1),null);
var inst_11377 = (inst_11375__$1 == null);
var state_11395__$1 = (function (){var statearr_11397 = state_11395;
(statearr_11397[(7)] = inst_11374__$1);

(statearr_11397[(9)] = inst_11376);

(statearr_11397[(8)] = inst_11375__$1);

return statearr_11397;
})();
if(cljs.core.truth_(inst_11377)){
var statearr_11398_11421 = state_11395__$1;
(statearr_11398_11421[(1)] = (8));

} else {
var statearr_11399_11422 = state_11395__$1;
(statearr_11399_11422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11396 === (1))){
var inst_11366 = cljs.core.vec.call(null,chs);
var inst_11367 = inst_11366;
var state_11395__$1 = (function (){var statearr_11400 = state_11395;
(statearr_11400[(10)] = inst_11367);

return statearr_11400;
})();
var statearr_11401_11423 = state_11395__$1;
(statearr_11401_11423[(2)] = null);

(statearr_11401_11423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11396 === (4))){
var inst_11367 = (state_11395[(10)]);
var state_11395__$1 = state_11395;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11395__$1,(7),inst_11367);
} else {
if((state_val_11396 === (6))){
var inst_11391 = (state_11395[(2)]);
var state_11395__$1 = state_11395;
var statearr_11402_11424 = state_11395__$1;
(statearr_11402_11424[(2)] = inst_11391);

(statearr_11402_11424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11396 === (3))){
var inst_11393 = (state_11395[(2)]);
var state_11395__$1 = state_11395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11395__$1,inst_11393);
} else {
if((state_val_11396 === (2))){
var inst_11367 = (state_11395[(10)]);
var inst_11369 = cljs.core.count.call(null,inst_11367);
var inst_11370 = (inst_11369 > (0));
var state_11395__$1 = state_11395;
if(cljs.core.truth_(inst_11370)){
var statearr_11404_11425 = state_11395__$1;
(statearr_11404_11425[(1)] = (4));

} else {
var statearr_11405_11426 = state_11395__$1;
(statearr_11405_11426[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11396 === (11))){
var inst_11367 = (state_11395[(10)]);
var inst_11384 = (state_11395[(2)]);
var tmp11403 = inst_11367;
var inst_11367__$1 = tmp11403;
var state_11395__$1 = (function (){var statearr_11406 = state_11395;
(statearr_11406[(11)] = inst_11384);

(statearr_11406[(10)] = inst_11367__$1);

return statearr_11406;
})();
var statearr_11407_11427 = state_11395__$1;
(statearr_11407_11427[(2)] = null);

(statearr_11407_11427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11396 === (9))){
var inst_11375 = (state_11395[(8)]);
var state_11395__$1 = state_11395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11395__$1,(11),out,inst_11375);
} else {
if((state_val_11396 === (5))){
var inst_11389 = cljs.core.async.close_BANG_.call(null,out);
var state_11395__$1 = state_11395;
var statearr_11408_11428 = state_11395__$1;
(statearr_11408_11428[(2)] = inst_11389);

(statearr_11408_11428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11396 === (10))){
var inst_11387 = (state_11395[(2)]);
var state_11395__$1 = state_11395;
var statearr_11409_11429 = state_11395__$1;
(statearr_11409_11429[(2)] = inst_11387);

(statearr_11409_11429[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11396 === (8))){
var inst_11374 = (state_11395[(7)]);
var inst_11376 = (state_11395[(9)]);
var inst_11375 = (state_11395[(8)]);
var inst_11367 = (state_11395[(10)]);
var inst_11379 = (function (){var cs = inst_11367;
var vec__11372 = inst_11374;
var v = inst_11375;
var c = inst_11376;
return ((function (cs,vec__11372,v,c,inst_11374,inst_11376,inst_11375,inst_11367,state_val_11396,c__6611__auto___11420,out){
return (function (p1__11363_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11363_SHARP_);
});
;})(cs,vec__11372,v,c,inst_11374,inst_11376,inst_11375,inst_11367,state_val_11396,c__6611__auto___11420,out))
})();
var inst_11380 = cljs.core.filterv.call(null,inst_11379,inst_11367);
var inst_11367__$1 = inst_11380;
var state_11395__$1 = (function (){var statearr_11410 = state_11395;
(statearr_11410[(10)] = inst_11367__$1);

return statearr_11410;
})();
var statearr_11411_11430 = state_11395__$1;
(statearr_11411_11430[(2)] = null);

(statearr_11411_11430[(1)] = (2));


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
});})(c__6611__auto___11420,out))
;
return ((function (switch__6549__auto__,c__6611__auto___11420,out){
return (function() {
var cljs$core$async$state_machine__6550__auto__ = null;
var cljs$core$async$state_machine__6550__auto____0 = (function (){
var statearr_11415 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11415[(0)] = cljs$core$async$state_machine__6550__auto__);

(statearr_11415[(1)] = (1));

return statearr_11415;
});
var cljs$core$async$state_machine__6550__auto____1 = (function (state_11395){
while(true){
var ret_value__6551__auto__ = (function (){try{while(true){
var result__6552__auto__ = switch__6549__auto__.call(null,state_11395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6552__auto__;
}
break;
}
}catch (e11416){if((e11416 instanceof Object)){
var ex__6553__auto__ = e11416;
var statearr_11417_11431 = state_11395;
(statearr_11417_11431[(5)] = ex__6553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11432 = state_11395;
state_11395 = G__11432;
continue;
} else {
return ret_value__6551__auto__;
}
break;
}
});
cljs$core$async$state_machine__6550__auto__ = function(state_11395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6550__auto____1.call(this,state_11395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6550__auto____0;
cljs$core$async$state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6550__auto____1;
return cljs$core$async$state_machine__6550__auto__;
})()
;})(switch__6549__auto__,c__6611__auto___11420,out))
})();
var state__6613__auto__ = (function (){var statearr_11418 = f__6612__auto__.call(null);
(statearr_11418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6611__auto___11420);

return statearr_11418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6613__auto__);
});})(c__6611__auto___11420,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__11434 = arguments.length;
switch (G__11434) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6611__auto___11482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6611__auto___11482,out){
return (function (){
var f__6612__auto__ = (function (){var switch__6549__auto__ = ((function (c__6611__auto___11482,out){
return (function (state_11458){
var state_val_11459 = (state_11458[(1)]);
if((state_val_11459 === (7))){
var inst_11440 = (state_11458[(7)]);
var inst_11440__$1 = (state_11458[(2)]);
var inst_11441 = (inst_11440__$1 == null);
var inst_11442 = cljs.core.not.call(null,inst_11441);
var state_11458__$1 = (function (){var statearr_11460 = state_11458;
(statearr_11460[(7)] = inst_11440__$1);

return statearr_11460;
})();
if(inst_11442){
var statearr_11461_11483 = state_11458__$1;
(statearr_11461_11483[(1)] = (8));

} else {
var statearr_11462_11484 = state_11458__$1;
(statearr_11462_11484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (1))){
var inst_11435 = (0);
var state_11458__$1 = (function (){var statearr_11463 = state_11458;
(statearr_11463[(8)] = inst_11435);

return statearr_11463;
})();
var statearr_11464_11485 = state_11458__$1;
(statearr_11464_11485[(2)] = null);

(statearr_11464_11485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (4))){
var state_11458__$1 = state_11458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11458__$1,(7),ch);
} else {
if((state_val_11459 === (6))){
var inst_11453 = (state_11458[(2)]);
var state_11458__$1 = state_11458;
var statearr_11465_11486 = state_11458__$1;
(statearr_11465_11486[(2)] = inst_11453);

(statearr_11465_11486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (3))){
var inst_11455 = (state_11458[(2)]);
var inst_11456 = cljs.core.async.close_BANG_.call(null,out);
var state_11458__$1 = (function (){var statearr_11466 = state_11458;
(statearr_11466[(9)] = inst_11455);

return statearr_11466;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11458__$1,inst_11456);
} else {
if((state_val_11459 === (2))){
var inst_11435 = (state_11458[(8)]);
var inst_11437 = (inst_11435 < n);
var state_11458__$1 = state_11458;
if(cljs.core.truth_(inst_11437)){
var statearr_11467_11487 = state_11458__$1;
(statearr_11467_11487[(1)] = (4));

} else {
var statearr_11468_11488 = state_11458__$1;
(statearr_11468_11488[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (11))){
var inst_11435 = (state_11458[(8)]);
var inst_11445 = (state_11458[(2)]);
var inst_11446 = (inst_11435 + (1));
var inst_11435__$1 = inst_11446;
var state_11458__$1 = (function (){var statearr_11469 = state_11458;
(statearr_11469[(10)] = inst_11445);

(statearr_11469[(8)] = inst_11435__$1);

return statearr_11469;
})();
var statearr_11470_11489 = state_11458__$1;
(statearr_11470_11489[(2)] = null);

(statearr_11470_11489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (9))){
var state_11458__$1 = state_11458;
var statearr_11471_11490 = state_11458__$1;
(statearr_11471_11490[(2)] = null);

(statearr_11471_11490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (5))){
var state_11458__$1 = state_11458;
var statearr_11472_11491 = state_11458__$1;
(statearr_11472_11491[(2)] = null);

(statearr_11472_11491[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (10))){
var inst_11450 = (state_11458[(2)]);
var state_11458__$1 = state_11458;
var statearr_11473_11492 = state_11458__$1;
(statearr_11473_11492[(2)] = inst_11450);

(statearr_11473_11492[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (8))){
var inst_11440 = (state_11458[(7)]);
var state_11458__$1 = state_11458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11458__$1,(11),out,inst_11440);
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
});})(c__6611__auto___11482,out))
;
return ((function (switch__6549__auto__,c__6611__auto___11482,out){
return (function() {
var cljs$core$async$state_machine__6550__auto__ = null;
var cljs$core$async$state_machine__6550__auto____0 = (function (){
var statearr_11477 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11477[(0)] = cljs$core$async$state_machine__6550__auto__);

(statearr_11477[(1)] = (1));

return statearr_11477;
});
var cljs$core$async$state_machine__6550__auto____1 = (function (state_11458){
while(true){
var ret_value__6551__auto__ = (function (){try{while(true){
var result__6552__auto__ = switch__6549__auto__.call(null,state_11458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6552__auto__;
}
break;
}
}catch (e11478){if((e11478 instanceof Object)){
var ex__6553__auto__ = e11478;
var statearr_11479_11493 = state_11458;
(statearr_11479_11493[(5)] = ex__6553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11494 = state_11458;
state_11458 = G__11494;
continue;
} else {
return ret_value__6551__auto__;
}
break;
}
});
cljs$core$async$state_machine__6550__auto__ = function(state_11458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6550__auto____1.call(this,state_11458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6550__auto____0;
cljs$core$async$state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6550__auto____1;
return cljs$core$async$state_machine__6550__auto__;
})()
;})(switch__6549__auto__,c__6611__auto___11482,out))
})();
var state__6613__auto__ = (function (){var statearr_11480 = f__6612__auto__.call(null);
(statearr_11480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6611__auto___11482);

return statearr_11480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6613__auto__);
});})(c__6611__auto___11482,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t11502 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11502 = (function (map_LT_,f,ch,meta11503){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11503 = meta11503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11504,meta11503__$1){
var self__ = this;
var _11504__$1 = this;
return (new cljs.core.async.t11502(self__.map_LT_,self__.f,self__.ch,meta11503__$1));
});

cljs.core.async.t11502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11504){
var self__ = this;
var _11504__$1 = this;
return self__.meta11503;
});

cljs.core.async.t11502.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t11502.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t11502.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t11502.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t11502.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t11505 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11505 = (function (map_LT_,f,ch,meta11503,_,fn1,meta11506){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11503 = meta11503;
this._ = _;
this.fn1 = fn1;
this.meta11506 = meta11506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11507,meta11506__$1){
var self__ = this;
var _11507__$1 = this;
return (new cljs.core.async.t11505(self__.map_LT_,self__.f,self__.ch,self__.meta11503,self__._,self__.fn1,meta11506__$1));
});})(___$1))
;

cljs.core.async.t11505.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11507){
var self__ = this;
var _11507__$1 = this;
return self__.meta11506;
});})(___$1))
;

cljs.core.async.t11505.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11505.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t11505.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11495_SHARP_){
return f1.call(null,(((p1__11495_SHARP_ == null))?null:self__.f.call(null,p1__11495_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t11505.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11503","meta11503",-1945541941,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11506","meta11506",514256571,null)], null);
});})(___$1))
;

cljs.core.async.t11505.cljs$lang$type = true;

cljs.core.async.t11505.cljs$lang$ctorStr = "cljs.core.async/t11505";

cljs.core.async.t11505.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4830__auto__,writer__4831__auto__,opt__4832__auto__){
return cljs.core._write.call(null,writer__4831__auto__,"cljs.core.async/t11505");
});})(___$1))
;

cljs.core.async.__GT_t11505 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t11505(map_LT___$1,f__$1,ch__$1,meta11503__$1,___$2,fn1__$1,meta11506){
return (new cljs.core.async.t11505(map_LT___$1,f__$1,ch__$1,meta11503__$1,___$2,fn1__$1,meta11506));
});})(___$1))
;

}

return (new cljs.core.async.t11505(self__.map_LT_,self__.f,self__.ch,self__.meta11503,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4239__auto__ = ret;
if(cljs.core.truth_(and__4239__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4239__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t11502.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t11502.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t11502.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11503","meta11503",-1945541941,null)], null);
});

cljs.core.async.t11502.cljs$lang$type = true;

cljs.core.async.t11502.cljs$lang$ctorStr = "cljs.core.async/t11502";

cljs.core.async.t11502.cljs$lang$ctorPrWriter = (function (this__4830__auto__,writer__4831__auto__,opt__4832__auto__){
return cljs.core._write.call(null,writer__4831__auto__,"cljs.core.async/t11502");
});

cljs.core.async.__GT_t11502 = (function cljs$core$async$map_LT__$___GT_t11502(map_LT___$1,f__$1,ch__$1,meta11503){
return (new cljs.core.async.t11502(map_LT___$1,f__$1,ch__$1,meta11503));
});

}

return (new cljs.core.async.t11502(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t11511 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11511 = (function (map_GT_,f,ch,meta11512){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta11512 = meta11512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11513,meta11512__$1){
var self__ = this;
var _11513__$1 = this;
return (new cljs.core.async.t11511(self__.map_GT_,self__.f,self__.ch,meta11512__$1));
});

cljs.core.async.t11511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11513){
var self__ = this;
var _11513__$1 = this;
return self__.meta11512;
});

cljs.core.async.t11511.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t11511.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t11511.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t11511.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t11511.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t11511.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t11511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11512","meta11512",436967366,null)], null);
});

cljs.core.async.t11511.cljs$lang$type = true;

cljs.core.async.t11511.cljs$lang$ctorStr = "cljs.core.async/t11511";

cljs.core.async.t11511.cljs$lang$ctorPrWriter = (function (this__4830__auto__,writer__4831__auto__,opt__4832__auto__){
return cljs.core._write.call(null,writer__4831__auto__,"cljs.core.async/t11511");
});

cljs.core.async.__GT_t11511 = (function cljs$core$async$map_GT__$___GT_t11511(map_GT___$1,f__$1,ch__$1,meta11512){
return (new cljs.core.async.t11511(map_GT___$1,f__$1,ch__$1,meta11512));
});

}

return (new cljs.core.async.t11511(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t11517 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11517 = (function (filter_GT_,p,ch,meta11518){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta11518 = meta11518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11519,meta11518__$1){
var self__ = this;
var _11519__$1 = this;
return (new cljs.core.async.t11517(self__.filter_GT_,self__.p,self__.ch,meta11518__$1));
});

cljs.core.async.t11517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11519){
var self__ = this;
var _11519__$1 = this;
return self__.meta11518;
});

cljs.core.async.t11517.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t11517.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t11517.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t11517.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t11517.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t11517.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t11517.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t11517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11518","meta11518",-466051803,null)], null);
});

cljs.core.async.t11517.cljs$lang$type = true;

cljs.core.async.t11517.cljs$lang$ctorStr = "cljs.core.async/t11517";

cljs.core.async.t11517.cljs$lang$ctorPrWriter = (function (this__4830__auto__,writer__4831__auto__,opt__4832__auto__){
return cljs.core._write.call(null,writer__4831__auto__,"cljs.core.async/t11517");
});

cljs.core.async.__GT_t11517 = (function cljs$core$async$filter_GT__$___GT_t11517(filter_GT___$1,p__$1,ch__$1,meta11518){
return (new cljs.core.async.t11517(filter_GT___$1,p__$1,ch__$1,meta11518));
});

}

return (new cljs.core.async.t11517(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__11521 = arguments.length;
switch (G__11521) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6611__auto___11564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6611__auto___11564,out){
return (function (){
var f__6612__auto__ = (function (){var switch__6549__auto__ = ((function (c__6611__auto___11564,out){
return (function (state_11542){
var state_val_11543 = (state_11542[(1)]);
if((state_val_11543 === (7))){
var inst_11538 = (state_11542[(2)]);
var state_11542__$1 = state_11542;
var statearr_11544_11565 = state_11542__$1;
(statearr_11544_11565[(2)] = inst_11538);

(statearr_11544_11565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11543 === (1))){
var state_11542__$1 = state_11542;
var statearr_11545_11566 = state_11542__$1;
(statearr_11545_11566[(2)] = null);

(statearr_11545_11566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11543 === (4))){
var inst_11524 = (state_11542[(7)]);
var inst_11524__$1 = (state_11542[(2)]);
var inst_11525 = (inst_11524__$1 == null);
var state_11542__$1 = (function (){var statearr_11546 = state_11542;
(statearr_11546[(7)] = inst_11524__$1);

return statearr_11546;
})();
if(cljs.core.truth_(inst_11525)){
var statearr_11547_11567 = state_11542__$1;
(statearr_11547_11567[(1)] = (5));

} else {
var statearr_11548_11568 = state_11542__$1;
(statearr_11548_11568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11543 === (6))){
var inst_11524 = (state_11542[(7)]);
var inst_11529 = p.call(null,inst_11524);
var state_11542__$1 = state_11542;
if(cljs.core.truth_(inst_11529)){
var statearr_11549_11569 = state_11542__$1;
(statearr_11549_11569[(1)] = (8));

} else {
var statearr_11550_11570 = state_11542__$1;
(statearr_11550_11570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11543 === (3))){
var inst_11540 = (state_11542[(2)]);
var state_11542__$1 = state_11542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11542__$1,inst_11540);
} else {
if((state_val_11543 === (2))){
var state_11542__$1 = state_11542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11542__$1,(4),ch);
} else {
if((state_val_11543 === (11))){
var inst_11532 = (state_11542[(2)]);
var state_11542__$1 = state_11542;
var statearr_11551_11571 = state_11542__$1;
(statearr_11551_11571[(2)] = inst_11532);

(statearr_11551_11571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11543 === (9))){
var state_11542__$1 = state_11542;
var statearr_11552_11572 = state_11542__$1;
(statearr_11552_11572[(2)] = null);

(statearr_11552_11572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11543 === (5))){
var inst_11527 = cljs.core.async.close_BANG_.call(null,out);
var state_11542__$1 = state_11542;
var statearr_11553_11573 = state_11542__$1;
(statearr_11553_11573[(2)] = inst_11527);

(statearr_11553_11573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11543 === (10))){
var inst_11535 = (state_11542[(2)]);
var state_11542__$1 = (function (){var statearr_11554 = state_11542;
(statearr_11554[(8)] = inst_11535);

return statearr_11554;
})();
var statearr_11555_11574 = state_11542__$1;
(statearr_11555_11574[(2)] = null);

(statearr_11555_11574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11543 === (8))){
var inst_11524 = (state_11542[(7)]);
var state_11542__$1 = state_11542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11542__$1,(11),out,inst_11524);
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
});})(c__6611__auto___11564,out))
;
return ((function (switch__6549__auto__,c__6611__auto___11564,out){
return (function() {
var cljs$core$async$state_machine__6550__auto__ = null;
var cljs$core$async$state_machine__6550__auto____0 = (function (){
var statearr_11559 = [null,null,null,null,null,null,null,null,null];
(statearr_11559[(0)] = cljs$core$async$state_machine__6550__auto__);

(statearr_11559[(1)] = (1));

return statearr_11559;
});
var cljs$core$async$state_machine__6550__auto____1 = (function (state_11542){
while(true){
var ret_value__6551__auto__ = (function (){try{while(true){
var result__6552__auto__ = switch__6549__auto__.call(null,state_11542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6552__auto__;
}
break;
}
}catch (e11560){if((e11560 instanceof Object)){
var ex__6553__auto__ = e11560;
var statearr_11561_11575 = state_11542;
(statearr_11561_11575[(5)] = ex__6553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11576 = state_11542;
state_11542 = G__11576;
continue;
} else {
return ret_value__6551__auto__;
}
break;
}
});
cljs$core$async$state_machine__6550__auto__ = function(state_11542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6550__auto____1.call(this,state_11542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6550__auto____0;
cljs$core$async$state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6550__auto____1;
return cljs$core$async$state_machine__6550__auto__;
})()
;})(switch__6549__auto__,c__6611__auto___11564,out))
})();
var state__6613__auto__ = (function (){var statearr_11562 = f__6612__auto__.call(null);
(statearr_11562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6611__auto___11564);

return statearr_11562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6613__auto__);
});})(c__6611__auto___11564,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__11578 = arguments.length;
switch (G__11578) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__6611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6611__auto__){
return (function (){
var f__6612__auto__ = (function (){var switch__6549__auto__ = ((function (c__6611__auto__){
return (function (state_11745){
var state_val_11746 = (state_11745[(1)]);
if((state_val_11746 === (7))){
var inst_11741 = (state_11745[(2)]);
var state_11745__$1 = state_11745;
var statearr_11747_11788 = state_11745__$1;
(statearr_11747_11788[(2)] = inst_11741);

(statearr_11747_11788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (20))){
var inst_11711 = (state_11745[(7)]);
var inst_11722 = (state_11745[(2)]);
var inst_11723 = cljs.core.next.call(null,inst_11711);
var inst_11697 = inst_11723;
var inst_11698 = null;
var inst_11699 = (0);
var inst_11700 = (0);
var state_11745__$1 = (function (){var statearr_11748 = state_11745;
(statearr_11748[(8)] = inst_11698);

(statearr_11748[(9)] = inst_11722);

(statearr_11748[(10)] = inst_11699);

(statearr_11748[(11)] = inst_11700);

(statearr_11748[(12)] = inst_11697);

return statearr_11748;
})();
var statearr_11749_11789 = state_11745__$1;
(statearr_11749_11789[(2)] = null);

(statearr_11749_11789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (1))){
var state_11745__$1 = state_11745;
var statearr_11750_11790 = state_11745__$1;
(statearr_11750_11790[(2)] = null);

(statearr_11750_11790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (4))){
var inst_11686 = (state_11745[(13)]);
var inst_11686__$1 = (state_11745[(2)]);
var inst_11687 = (inst_11686__$1 == null);
var state_11745__$1 = (function (){var statearr_11751 = state_11745;
(statearr_11751[(13)] = inst_11686__$1);

return statearr_11751;
})();
if(cljs.core.truth_(inst_11687)){
var statearr_11752_11791 = state_11745__$1;
(statearr_11752_11791[(1)] = (5));

} else {
var statearr_11753_11792 = state_11745__$1;
(statearr_11753_11792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (15))){
var state_11745__$1 = state_11745;
var statearr_11757_11793 = state_11745__$1;
(statearr_11757_11793[(2)] = null);

(statearr_11757_11793[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (21))){
var state_11745__$1 = state_11745;
var statearr_11758_11794 = state_11745__$1;
(statearr_11758_11794[(2)] = null);

(statearr_11758_11794[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (13))){
var inst_11698 = (state_11745[(8)]);
var inst_11699 = (state_11745[(10)]);
var inst_11700 = (state_11745[(11)]);
var inst_11697 = (state_11745[(12)]);
var inst_11707 = (state_11745[(2)]);
var inst_11708 = (inst_11700 + (1));
var tmp11754 = inst_11698;
var tmp11755 = inst_11699;
var tmp11756 = inst_11697;
var inst_11697__$1 = tmp11756;
var inst_11698__$1 = tmp11754;
var inst_11699__$1 = tmp11755;
var inst_11700__$1 = inst_11708;
var state_11745__$1 = (function (){var statearr_11759 = state_11745;
(statearr_11759[(8)] = inst_11698__$1);

(statearr_11759[(10)] = inst_11699__$1);

(statearr_11759[(11)] = inst_11700__$1);

(statearr_11759[(14)] = inst_11707);

(statearr_11759[(12)] = inst_11697__$1);

return statearr_11759;
})();
var statearr_11760_11795 = state_11745__$1;
(statearr_11760_11795[(2)] = null);

(statearr_11760_11795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (22))){
var state_11745__$1 = state_11745;
var statearr_11761_11796 = state_11745__$1;
(statearr_11761_11796[(2)] = null);

(statearr_11761_11796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (6))){
var inst_11686 = (state_11745[(13)]);
var inst_11695 = f.call(null,inst_11686);
var inst_11696 = cljs.core.seq.call(null,inst_11695);
var inst_11697 = inst_11696;
var inst_11698 = null;
var inst_11699 = (0);
var inst_11700 = (0);
var state_11745__$1 = (function (){var statearr_11762 = state_11745;
(statearr_11762[(8)] = inst_11698);

(statearr_11762[(10)] = inst_11699);

(statearr_11762[(11)] = inst_11700);

(statearr_11762[(12)] = inst_11697);

return statearr_11762;
})();
var statearr_11763_11797 = state_11745__$1;
(statearr_11763_11797[(2)] = null);

(statearr_11763_11797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (17))){
var inst_11711 = (state_11745[(7)]);
var inst_11715 = cljs.core.chunk_first.call(null,inst_11711);
var inst_11716 = cljs.core.chunk_rest.call(null,inst_11711);
var inst_11717 = cljs.core.count.call(null,inst_11715);
var inst_11697 = inst_11716;
var inst_11698 = inst_11715;
var inst_11699 = inst_11717;
var inst_11700 = (0);
var state_11745__$1 = (function (){var statearr_11764 = state_11745;
(statearr_11764[(8)] = inst_11698);

(statearr_11764[(10)] = inst_11699);

(statearr_11764[(11)] = inst_11700);

(statearr_11764[(12)] = inst_11697);

return statearr_11764;
})();
var statearr_11765_11798 = state_11745__$1;
(statearr_11765_11798[(2)] = null);

(statearr_11765_11798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (3))){
var inst_11743 = (state_11745[(2)]);
var state_11745__$1 = state_11745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11745__$1,inst_11743);
} else {
if((state_val_11746 === (12))){
var inst_11731 = (state_11745[(2)]);
var state_11745__$1 = state_11745;
var statearr_11766_11799 = state_11745__$1;
(statearr_11766_11799[(2)] = inst_11731);

(statearr_11766_11799[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (2))){
var state_11745__$1 = state_11745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11745__$1,(4),in$);
} else {
if((state_val_11746 === (23))){
var inst_11739 = (state_11745[(2)]);
var state_11745__$1 = state_11745;
var statearr_11767_11800 = state_11745__$1;
(statearr_11767_11800[(2)] = inst_11739);

(statearr_11767_11800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (19))){
var inst_11726 = (state_11745[(2)]);
var state_11745__$1 = state_11745;
var statearr_11768_11801 = state_11745__$1;
(statearr_11768_11801[(2)] = inst_11726);

(statearr_11768_11801[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (11))){
var inst_11711 = (state_11745[(7)]);
var inst_11697 = (state_11745[(12)]);
var inst_11711__$1 = cljs.core.seq.call(null,inst_11697);
var state_11745__$1 = (function (){var statearr_11769 = state_11745;
(statearr_11769[(7)] = inst_11711__$1);

return statearr_11769;
})();
if(inst_11711__$1){
var statearr_11770_11802 = state_11745__$1;
(statearr_11770_11802[(1)] = (14));

} else {
var statearr_11771_11803 = state_11745__$1;
(statearr_11771_11803[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (9))){
var inst_11733 = (state_11745[(2)]);
var inst_11734 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11745__$1 = (function (){var statearr_11772 = state_11745;
(statearr_11772[(15)] = inst_11733);

return statearr_11772;
})();
if(cljs.core.truth_(inst_11734)){
var statearr_11773_11804 = state_11745__$1;
(statearr_11773_11804[(1)] = (21));

} else {
var statearr_11774_11805 = state_11745__$1;
(statearr_11774_11805[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (5))){
var inst_11689 = cljs.core.async.close_BANG_.call(null,out);
var state_11745__$1 = state_11745;
var statearr_11775_11806 = state_11745__$1;
(statearr_11775_11806[(2)] = inst_11689);

(statearr_11775_11806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (14))){
var inst_11711 = (state_11745[(7)]);
var inst_11713 = cljs.core.chunked_seq_QMARK_.call(null,inst_11711);
var state_11745__$1 = state_11745;
if(inst_11713){
var statearr_11776_11807 = state_11745__$1;
(statearr_11776_11807[(1)] = (17));

} else {
var statearr_11777_11808 = state_11745__$1;
(statearr_11777_11808[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (16))){
var inst_11729 = (state_11745[(2)]);
var state_11745__$1 = state_11745;
var statearr_11778_11809 = state_11745__$1;
(statearr_11778_11809[(2)] = inst_11729);

(statearr_11778_11809[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (10))){
var inst_11698 = (state_11745[(8)]);
var inst_11700 = (state_11745[(11)]);
var inst_11705 = cljs.core._nth.call(null,inst_11698,inst_11700);
var state_11745__$1 = state_11745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11745__$1,(13),out,inst_11705);
} else {
if((state_val_11746 === (18))){
var inst_11711 = (state_11745[(7)]);
var inst_11720 = cljs.core.first.call(null,inst_11711);
var state_11745__$1 = state_11745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11745__$1,(20),out,inst_11720);
} else {
if((state_val_11746 === (8))){
var inst_11699 = (state_11745[(10)]);
var inst_11700 = (state_11745[(11)]);
var inst_11702 = (inst_11700 < inst_11699);
var inst_11703 = inst_11702;
var state_11745__$1 = state_11745;
if(cljs.core.truth_(inst_11703)){
var statearr_11779_11810 = state_11745__$1;
(statearr_11779_11810[(1)] = (10));

} else {
var statearr_11780_11811 = state_11745__$1;
(statearr_11780_11811[(1)] = (11));

}

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
}
});})(c__6611__auto__))
;
return ((function (switch__6549__auto__,c__6611__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6550__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6550__auto____0 = (function (){
var statearr_11784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11784[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6550__auto__);

(statearr_11784[(1)] = (1));

return statearr_11784;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6550__auto____1 = (function (state_11745){
while(true){
var ret_value__6551__auto__ = (function (){try{while(true){
var result__6552__auto__ = switch__6549__auto__.call(null,state_11745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6552__auto__;
}
break;
}
}catch (e11785){if((e11785 instanceof Object)){
var ex__6553__auto__ = e11785;
var statearr_11786_11812 = state_11745;
(statearr_11786_11812[(5)] = ex__6553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11813 = state_11745;
state_11745 = G__11813;
continue;
} else {
return ret_value__6551__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6550__auto__ = function(state_11745){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6550__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6550__auto____1.call(this,state_11745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6550__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6550__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6550__auto__;
})()
;})(switch__6549__auto__,c__6611__auto__))
})();
var state__6613__auto__ = (function (){var statearr_11787 = f__6612__auto__.call(null);
(statearr_11787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6611__auto__);

return statearr_11787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6613__auto__);
});})(c__6611__auto__))
);

return c__6611__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__11815 = arguments.length;
switch (G__11815) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__11818 = arguments.length;
switch (G__11818) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__11821 = arguments.length;
switch (G__11821) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6611__auto___11871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6611__auto___11871,out){
return (function (){
var f__6612__auto__ = (function (){var switch__6549__auto__ = ((function (c__6611__auto___11871,out){
return (function (state_11845){
var state_val_11846 = (state_11845[(1)]);
if((state_val_11846 === (7))){
var inst_11840 = (state_11845[(2)]);
var state_11845__$1 = state_11845;
var statearr_11847_11872 = state_11845__$1;
(statearr_11847_11872[(2)] = inst_11840);

(statearr_11847_11872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (1))){
var inst_11822 = null;
var state_11845__$1 = (function (){var statearr_11848 = state_11845;
(statearr_11848[(7)] = inst_11822);

return statearr_11848;
})();
var statearr_11849_11873 = state_11845__$1;
(statearr_11849_11873[(2)] = null);

(statearr_11849_11873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (4))){
var inst_11825 = (state_11845[(8)]);
var inst_11825__$1 = (state_11845[(2)]);
var inst_11826 = (inst_11825__$1 == null);
var inst_11827 = cljs.core.not.call(null,inst_11826);
var state_11845__$1 = (function (){var statearr_11850 = state_11845;
(statearr_11850[(8)] = inst_11825__$1);

return statearr_11850;
})();
if(inst_11827){
var statearr_11851_11874 = state_11845__$1;
(statearr_11851_11874[(1)] = (5));

} else {
var statearr_11852_11875 = state_11845__$1;
(statearr_11852_11875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (6))){
var state_11845__$1 = state_11845;
var statearr_11853_11876 = state_11845__$1;
(statearr_11853_11876[(2)] = null);

(statearr_11853_11876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (3))){
var inst_11842 = (state_11845[(2)]);
var inst_11843 = cljs.core.async.close_BANG_.call(null,out);
var state_11845__$1 = (function (){var statearr_11854 = state_11845;
(statearr_11854[(9)] = inst_11842);

return statearr_11854;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11845__$1,inst_11843);
} else {
if((state_val_11846 === (2))){
var state_11845__$1 = state_11845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11845__$1,(4),ch);
} else {
if((state_val_11846 === (11))){
var inst_11825 = (state_11845[(8)]);
var inst_11834 = (state_11845[(2)]);
var inst_11822 = inst_11825;
var state_11845__$1 = (function (){var statearr_11855 = state_11845;
(statearr_11855[(10)] = inst_11834);

(statearr_11855[(7)] = inst_11822);

return statearr_11855;
})();
var statearr_11856_11877 = state_11845__$1;
(statearr_11856_11877[(2)] = null);

(statearr_11856_11877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (9))){
var inst_11825 = (state_11845[(8)]);
var state_11845__$1 = state_11845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11845__$1,(11),out,inst_11825);
} else {
if((state_val_11846 === (5))){
var inst_11825 = (state_11845[(8)]);
var inst_11822 = (state_11845[(7)]);
var inst_11829 = cljs.core._EQ_.call(null,inst_11825,inst_11822);
var state_11845__$1 = state_11845;
if(inst_11829){
var statearr_11858_11878 = state_11845__$1;
(statearr_11858_11878[(1)] = (8));

} else {
var statearr_11859_11879 = state_11845__$1;
(statearr_11859_11879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (10))){
var inst_11837 = (state_11845[(2)]);
var state_11845__$1 = state_11845;
var statearr_11860_11880 = state_11845__$1;
(statearr_11860_11880[(2)] = inst_11837);

(statearr_11860_11880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (8))){
var inst_11822 = (state_11845[(7)]);
var tmp11857 = inst_11822;
var inst_11822__$1 = tmp11857;
var state_11845__$1 = (function (){var statearr_11861 = state_11845;
(statearr_11861[(7)] = inst_11822__$1);

return statearr_11861;
})();
var statearr_11862_11881 = state_11845__$1;
(statearr_11862_11881[(2)] = null);

(statearr_11862_11881[(1)] = (2));


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
});})(c__6611__auto___11871,out))
;
return ((function (switch__6549__auto__,c__6611__auto___11871,out){
return (function() {
var cljs$core$async$state_machine__6550__auto__ = null;
var cljs$core$async$state_machine__6550__auto____0 = (function (){
var statearr_11866 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11866[(0)] = cljs$core$async$state_machine__6550__auto__);

(statearr_11866[(1)] = (1));

return statearr_11866;
});
var cljs$core$async$state_machine__6550__auto____1 = (function (state_11845){
while(true){
var ret_value__6551__auto__ = (function (){try{while(true){
var result__6552__auto__ = switch__6549__auto__.call(null,state_11845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6552__auto__;
}
break;
}
}catch (e11867){if((e11867 instanceof Object)){
var ex__6553__auto__ = e11867;
var statearr_11868_11882 = state_11845;
(statearr_11868_11882[(5)] = ex__6553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11883 = state_11845;
state_11845 = G__11883;
continue;
} else {
return ret_value__6551__auto__;
}
break;
}
});
cljs$core$async$state_machine__6550__auto__ = function(state_11845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6550__auto____1.call(this,state_11845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6550__auto____0;
cljs$core$async$state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6550__auto____1;
return cljs$core$async$state_machine__6550__auto__;
})()
;})(switch__6549__auto__,c__6611__auto___11871,out))
})();
var state__6613__auto__ = (function (){var statearr_11869 = f__6612__auto__.call(null);
(statearr_11869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6611__auto___11871);

return statearr_11869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6613__auto__);
});})(c__6611__auto___11871,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__11885 = arguments.length;
switch (G__11885) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6611__auto___11954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6611__auto___11954,out){
return (function (){
var f__6612__auto__ = (function (){var switch__6549__auto__ = ((function (c__6611__auto___11954,out){
return (function (state_11923){
var state_val_11924 = (state_11923[(1)]);
if((state_val_11924 === (7))){
var inst_11919 = (state_11923[(2)]);
var state_11923__$1 = state_11923;
var statearr_11925_11955 = state_11923__$1;
(statearr_11925_11955[(2)] = inst_11919);

(statearr_11925_11955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (1))){
var inst_11886 = (new Array(n));
var inst_11887 = inst_11886;
var inst_11888 = (0);
var state_11923__$1 = (function (){var statearr_11926 = state_11923;
(statearr_11926[(7)] = inst_11888);

(statearr_11926[(8)] = inst_11887);

return statearr_11926;
})();
var statearr_11927_11956 = state_11923__$1;
(statearr_11927_11956[(2)] = null);

(statearr_11927_11956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (4))){
var inst_11891 = (state_11923[(9)]);
var inst_11891__$1 = (state_11923[(2)]);
var inst_11892 = (inst_11891__$1 == null);
var inst_11893 = cljs.core.not.call(null,inst_11892);
var state_11923__$1 = (function (){var statearr_11928 = state_11923;
(statearr_11928[(9)] = inst_11891__$1);

return statearr_11928;
})();
if(inst_11893){
var statearr_11929_11957 = state_11923__$1;
(statearr_11929_11957[(1)] = (5));

} else {
var statearr_11930_11958 = state_11923__$1;
(statearr_11930_11958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (15))){
var inst_11913 = (state_11923[(2)]);
var state_11923__$1 = state_11923;
var statearr_11931_11959 = state_11923__$1;
(statearr_11931_11959[(2)] = inst_11913);

(statearr_11931_11959[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (13))){
var state_11923__$1 = state_11923;
var statearr_11932_11960 = state_11923__$1;
(statearr_11932_11960[(2)] = null);

(statearr_11932_11960[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (6))){
var inst_11888 = (state_11923[(7)]);
var inst_11909 = (inst_11888 > (0));
var state_11923__$1 = state_11923;
if(cljs.core.truth_(inst_11909)){
var statearr_11933_11961 = state_11923__$1;
(statearr_11933_11961[(1)] = (12));

} else {
var statearr_11934_11962 = state_11923__$1;
(statearr_11934_11962[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (3))){
var inst_11921 = (state_11923[(2)]);
var state_11923__$1 = state_11923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11923__$1,inst_11921);
} else {
if((state_val_11924 === (12))){
var inst_11887 = (state_11923[(8)]);
var inst_11911 = cljs.core.vec.call(null,inst_11887);
var state_11923__$1 = state_11923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11923__$1,(15),out,inst_11911);
} else {
if((state_val_11924 === (2))){
var state_11923__$1 = state_11923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11923__$1,(4),ch);
} else {
if((state_val_11924 === (11))){
var inst_11903 = (state_11923[(2)]);
var inst_11904 = (new Array(n));
var inst_11887 = inst_11904;
var inst_11888 = (0);
var state_11923__$1 = (function (){var statearr_11935 = state_11923;
(statearr_11935[(7)] = inst_11888);

(statearr_11935[(10)] = inst_11903);

(statearr_11935[(8)] = inst_11887);

return statearr_11935;
})();
var statearr_11936_11963 = state_11923__$1;
(statearr_11936_11963[(2)] = null);

(statearr_11936_11963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (9))){
var inst_11887 = (state_11923[(8)]);
var inst_11901 = cljs.core.vec.call(null,inst_11887);
var state_11923__$1 = state_11923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11923__$1,(11),out,inst_11901);
} else {
if((state_val_11924 === (5))){
var inst_11888 = (state_11923[(7)]);
var inst_11887 = (state_11923[(8)]);
var inst_11891 = (state_11923[(9)]);
var inst_11896 = (state_11923[(11)]);
var inst_11895 = (inst_11887[inst_11888] = inst_11891);
var inst_11896__$1 = (inst_11888 + (1));
var inst_11897 = (inst_11896__$1 < n);
var state_11923__$1 = (function (){var statearr_11937 = state_11923;
(statearr_11937[(11)] = inst_11896__$1);

(statearr_11937[(12)] = inst_11895);

return statearr_11937;
})();
if(cljs.core.truth_(inst_11897)){
var statearr_11938_11964 = state_11923__$1;
(statearr_11938_11964[(1)] = (8));

} else {
var statearr_11939_11965 = state_11923__$1;
(statearr_11939_11965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (14))){
var inst_11916 = (state_11923[(2)]);
var inst_11917 = cljs.core.async.close_BANG_.call(null,out);
var state_11923__$1 = (function (){var statearr_11941 = state_11923;
(statearr_11941[(13)] = inst_11916);

return statearr_11941;
})();
var statearr_11942_11966 = state_11923__$1;
(statearr_11942_11966[(2)] = inst_11917);

(statearr_11942_11966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (10))){
var inst_11907 = (state_11923[(2)]);
var state_11923__$1 = state_11923;
var statearr_11943_11967 = state_11923__$1;
(statearr_11943_11967[(2)] = inst_11907);

(statearr_11943_11967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11924 === (8))){
var inst_11887 = (state_11923[(8)]);
var inst_11896 = (state_11923[(11)]);
var tmp11940 = inst_11887;
var inst_11887__$1 = tmp11940;
var inst_11888 = inst_11896;
var state_11923__$1 = (function (){var statearr_11944 = state_11923;
(statearr_11944[(7)] = inst_11888);

(statearr_11944[(8)] = inst_11887__$1);

return statearr_11944;
})();
var statearr_11945_11968 = state_11923__$1;
(statearr_11945_11968[(2)] = null);

(statearr_11945_11968[(1)] = (2));


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
}
}
}
}
});})(c__6611__auto___11954,out))
;
return ((function (switch__6549__auto__,c__6611__auto___11954,out){
return (function() {
var cljs$core$async$state_machine__6550__auto__ = null;
var cljs$core$async$state_machine__6550__auto____0 = (function (){
var statearr_11949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11949[(0)] = cljs$core$async$state_machine__6550__auto__);

(statearr_11949[(1)] = (1));

return statearr_11949;
});
var cljs$core$async$state_machine__6550__auto____1 = (function (state_11923){
while(true){
var ret_value__6551__auto__ = (function (){try{while(true){
var result__6552__auto__ = switch__6549__auto__.call(null,state_11923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6552__auto__;
}
break;
}
}catch (e11950){if((e11950 instanceof Object)){
var ex__6553__auto__ = e11950;
var statearr_11951_11969 = state_11923;
(statearr_11951_11969[(5)] = ex__6553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11970 = state_11923;
state_11923 = G__11970;
continue;
} else {
return ret_value__6551__auto__;
}
break;
}
});
cljs$core$async$state_machine__6550__auto__ = function(state_11923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6550__auto____1.call(this,state_11923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6550__auto____0;
cljs$core$async$state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6550__auto____1;
return cljs$core$async$state_machine__6550__auto__;
})()
;})(switch__6549__auto__,c__6611__auto___11954,out))
})();
var state__6613__auto__ = (function (){var statearr_11952 = f__6612__auto__.call(null);
(statearr_11952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6611__auto___11954);

return statearr_11952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6613__auto__);
});})(c__6611__auto___11954,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__11972 = arguments.length;
switch (G__11972) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6611__auto___12045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6611__auto___12045,out){
return (function (){
var f__6612__auto__ = (function (){var switch__6549__auto__ = ((function (c__6611__auto___12045,out){
return (function (state_12014){
var state_val_12015 = (state_12014[(1)]);
if((state_val_12015 === (7))){
var inst_12010 = (state_12014[(2)]);
var state_12014__$1 = state_12014;
var statearr_12016_12046 = state_12014__$1;
(statearr_12016_12046[(2)] = inst_12010);

(statearr_12016_12046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12015 === (1))){
var inst_11973 = [];
var inst_11974 = inst_11973;
var inst_11975 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12014__$1 = (function (){var statearr_12017 = state_12014;
(statearr_12017[(7)] = inst_11975);

(statearr_12017[(8)] = inst_11974);

return statearr_12017;
})();
var statearr_12018_12047 = state_12014__$1;
(statearr_12018_12047[(2)] = null);

(statearr_12018_12047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12015 === (4))){
var inst_11978 = (state_12014[(9)]);
var inst_11978__$1 = (state_12014[(2)]);
var inst_11979 = (inst_11978__$1 == null);
var inst_11980 = cljs.core.not.call(null,inst_11979);
var state_12014__$1 = (function (){var statearr_12019 = state_12014;
(statearr_12019[(9)] = inst_11978__$1);

return statearr_12019;
})();
if(inst_11980){
var statearr_12020_12048 = state_12014__$1;
(statearr_12020_12048[(1)] = (5));

} else {
var statearr_12021_12049 = state_12014__$1;
(statearr_12021_12049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12015 === (15))){
var inst_12004 = (state_12014[(2)]);
var state_12014__$1 = state_12014;
var statearr_12022_12050 = state_12014__$1;
(statearr_12022_12050[(2)] = inst_12004);

(statearr_12022_12050[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12015 === (13))){
var state_12014__$1 = state_12014;
var statearr_12023_12051 = state_12014__$1;
(statearr_12023_12051[(2)] = null);

(statearr_12023_12051[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12015 === (6))){
var inst_11974 = (state_12014[(8)]);
var inst_11999 = inst_11974.length;
var inst_12000 = (inst_11999 > (0));
var state_12014__$1 = state_12014;
if(cljs.core.truth_(inst_12000)){
var statearr_12024_12052 = state_12014__$1;
(statearr_12024_12052[(1)] = (12));

} else {
var statearr_12025_12053 = state_12014__$1;
(statearr_12025_12053[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12015 === (3))){
var inst_12012 = (state_12014[(2)]);
var state_12014__$1 = state_12014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12014__$1,inst_12012);
} else {
if((state_val_12015 === (12))){
var inst_11974 = (state_12014[(8)]);
var inst_12002 = cljs.core.vec.call(null,inst_11974);
var state_12014__$1 = state_12014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12014__$1,(15),out,inst_12002);
} else {
if((state_val_12015 === (2))){
var state_12014__$1 = state_12014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12014__$1,(4),ch);
} else {
if((state_val_12015 === (11))){
var inst_11978 = (state_12014[(9)]);
var inst_11982 = (state_12014[(10)]);
var inst_11992 = (state_12014[(2)]);
var inst_11993 = [];
var inst_11994 = inst_11993.push(inst_11978);
var inst_11974 = inst_11993;
var inst_11975 = inst_11982;
var state_12014__$1 = (function (){var statearr_12026 = state_12014;
(statearr_12026[(7)] = inst_11975);

(statearr_12026[(11)] = inst_11992);

(statearr_12026[(8)] = inst_11974);

(statearr_12026[(12)] = inst_11994);

return statearr_12026;
})();
var statearr_12027_12054 = state_12014__$1;
(statearr_12027_12054[(2)] = null);

(statearr_12027_12054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12015 === (9))){
var inst_11974 = (state_12014[(8)]);
var inst_11990 = cljs.core.vec.call(null,inst_11974);
var state_12014__$1 = state_12014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12014__$1,(11),out,inst_11990);
} else {
if((state_val_12015 === (5))){
var inst_11978 = (state_12014[(9)]);
var inst_11975 = (state_12014[(7)]);
var inst_11982 = (state_12014[(10)]);
var inst_11982__$1 = f.call(null,inst_11978);
var inst_11983 = cljs.core._EQ_.call(null,inst_11982__$1,inst_11975);
var inst_11984 = cljs.core.keyword_identical_QMARK_.call(null,inst_11975,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11985 = (inst_11983) || (inst_11984);
var state_12014__$1 = (function (){var statearr_12028 = state_12014;
(statearr_12028[(10)] = inst_11982__$1);

return statearr_12028;
})();
if(cljs.core.truth_(inst_11985)){
var statearr_12029_12055 = state_12014__$1;
(statearr_12029_12055[(1)] = (8));

} else {
var statearr_12030_12056 = state_12014__$1;
(statearr_12030_12056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12015 === (14))){
var inst_12007 = (state_12014[(2)]);
var inst_12008 = cljs.core.async.close_BANG_.call(null,out);
var state_12014__$1 = (function (){var statearr_12032 = state_12014;
(statearr_12032[(13)] = inst_12007);

return statearr_12032;
})();
var statearr_12033_12057 = state_12014__$1;
(statearr_12033_12057[(2)] = inst_12008);

(statearr_12033_12057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12015 === (10))){
var inst_11997 = (state_12014[(2)]);
var state_12014__$1 = state_12014;
var statearr_12034_12058 = state_12014__$1;
(statearr_12034_12058[(2)] = inst_11997);

(statearr_12034_12058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12015 === (8))){
var inst_11978 = (state_12014[(9)]);
var inst_11982 = (state_12014[(10)]);
var inst_11974 = (state_12014[(8)]);
var inst_11987 = inst_11974.push(inst_11978);
var tmp12031 = inst_11974;
var inst_11974__$1 = tmp12031;
var inst_11975 = inst_11982;
var state_12014__$1 = (function (){var statearr_12035 = state_12014;
(statearr_12035[(7)] = inst_11975);

(statearr_12035[(8)] = inst_11974__$1);

(statearr_12035[(14)] = inst_11987);

return statearr_12035;
})();
var statearr_12036_12059 = state_12014__$1;
(statearr_12036_12059[(2)] = null);

(statearr_12036_12059[(1)] = (2));


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
}
}
}
}
});})(c__6611__auto___12045,out))
;
return ((function (switch__6549__auto__,c__6611__auto___12045,out){
return (function() {
var cljs$core$async$state_machine__6550__auto__ = null;
var cljs$core$async$state_machine__6550__auto____0 = (function (){
var statearr_12040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12040[(0)] = cljs$core$async$state_machine__6550__auto__);

(statearr_12040[(1)] = (1));

return statearr_12040;
});
var cljs$core$async$state_machine__6550__auto____1 = (function (state_12014){
while(true){
var ret_value__6551__auto__ = (function (){try{while(true){
var result__6552__auto__ = switch__6549__auto__.call(null,state_12014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6552__auto__;
}
break;
}
}catch (e12041){if((e12041 instanceof Object)){
var ex__6553__auto__ = e12041;
var statearr_12042_12060 = state_12014;
(statearr_12042_12060[(5)] = ex__6553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12061 = state_12014;
state_12014 = G__12061;
continue;
} else {
return ret_value__6551__auto__;
}
break;
}
});
cljs$core$async$state_machine__6550__auto__ = function(state_12014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6550__auto____1.call(this,state_12014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6550__auto____0;
cljs$core$async$state_machine__6550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6550__auto____1;
return cljs$core$async$state_machine__6550__auto__;
})()
;})(switch__6549__auto__,c__6611__auto___12045,out))
})();
var state__6613__auto__ = (function (){var statearr_12043 = f__6612__auto__.call(null);
(statearr_12043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6611__auto___12045);

return statearr_12043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6613__auto__);
});})(c__6611__auto___12045,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map