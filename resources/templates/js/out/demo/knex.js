// Compiled by ClojureScript 0.0-3308 {}
goog.provide('demo.knex');
goog.require('cljs.core');
goog.require('cljs.core.async');
demo.knex.knex = (new Knex({"client": "websql", "debug": true}));
demo.knex.init_chan = (function demo$knex$init_chan(){
var out = cljs.core.async.chan.call(null);
var client = demo.knex.knex.client;
var Runner = client.Runner;
var proto = Runner.prototype;
proto.debug = ((function (out,client,Runner,proto){
return (function (obj){
return cljs.core.async.put_BANG_.call(null,out,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sql","sql",1251448786),obj.sql,new cljs.core.Keyword(null,"bindings","bindings",1271397192),obj.bindings], null));
});})(out,client,Runner,proto))
;

return out;
});

//# sourceMappingURL=knex.js.map