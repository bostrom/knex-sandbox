// Compiled by ClojureScript 0.0-3308 {}
goog.provide('demo.hydrate');
goog.require('cljs.core');
goog.require('demo.knex');
goog.require('cljs_promises.core');
goog.require('cljs_promises.async');
demo.hydrate.bookends = (new Bookends());
demo.hydrate.hydrate = (function demo$hydrate$hydrate(raw_js){
window.knex = demo.knex.knex;

window.currentPromise = null;

var full_raw_js = [cljs.core.str("window.currentPromise = "),cljs.core.str(raw_js)].join('');
try{eval(full_raw_js);
}catch (e6950){var e_6951 = e6950;
}
var temp__4425__auto__ = window.currentPromise;
if(cljs.core.truth_(temp__4425__auto__)){
var promise = temp__4425__auto__;
return cljs_promises.async.pair_port.call(null,promise);
} else {
return null;
}
});

//# sourceMappingURL=hydrate.js.map