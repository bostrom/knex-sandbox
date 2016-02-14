// Compiled by ClojureScript 0.0-3308 {}
goog.provide('demo.knex');
goog.require('cljs.core');
goog.require('cljs.core.async');
demo.knex.knex = (new Knex({"client": "websql", "debug": true, "useNullAsDefault": true}));
demo.knex.knex_no_debug = (new Knex({"client": "websql", "useNullAsDefault": true}));
demo.knex.init_chan = (function demo$knex$init_chan(){
var out = cljs.core.async.chan.call(null);
console.log = ((function (out){
return (function (obj){
return cljs.core.async.put_BANG_.call(null,out,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sql","sql",1251448786),obj.sql,new cljs.core.Keyword(null,"bindings","bindings",1271397192),obj.bindings], null));
});})(out))
;

return out;
});

//# sourceMappingURL=knex.js.map