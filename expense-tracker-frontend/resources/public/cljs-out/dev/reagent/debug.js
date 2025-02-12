// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__10387__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10387 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10388__i = 0, G__10388__a = new Array(arguments.length -  0);
while (G__10388__i < G__10388__a.length) {G__10388__a[G__10388__i] = arguments[G__10388__i + 0]; ++G__10388__i;}
  args = new cljs.core.IndexedSeq(G__10388__a,0,null);
} 
return G__10387__delegate.call(this,args);};
G__10387.cljs$lang$maxFixedArity = 0;
G__10387.cljs$lang$applyTo = (function (arglist__10389){
var args = cljs.core.seq(arglist__10389);
return G__10387__delegate(args);
});
G__10387.cljs$core$IFn$_invoke$arity$variadic = G__10387__delegate;
return G__10387;
})()
);

(o.error = (function() { 
var G__10390__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10390 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10391__i = 0, G__10391__a = new Array(arguments.length -  0);
while (G__10391__i < G__10391__a.length) {G__10391__a[G__10391__i] = arguments[G__10391__i + 0]; ++G__10391__i;}
  args = new cljs.core.IndexedSeq(G__10391__a,0,null);
} 
return G__10390__delegate.call(this,args);};
G__10390.cljs$lang$maxFixedArity = 0;
G__10390.cljs$lang$applyTo = (function (arglist__10392){
var args = cljs.core.seq(arglist__10392);
return G__10390__delegate(args);
});
G__10390.cljs$core$IFn$_invoke$arity$variadic = G__10390__delegate;
return G__10390;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
