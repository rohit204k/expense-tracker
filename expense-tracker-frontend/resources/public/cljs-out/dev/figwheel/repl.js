// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('figwheel.repl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.repl.logging');
goog.require('goog.storage.mechanism.mechanismfactory');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('goog.net.XhrIo');
goog.require('goog.json');
goog.require('goog.html.legacyconversions');
goog.require('goog.userAgent.product');
goog.require('goog.net.WebSocket');
goog.require('goog.debug.Console');
goog.require('goog.Uri.QueryData');
goog.require('goog.Promise');
goog.require('goog.storage.mechanism.HTML5SessionStorage');
goog.require('goog.object');
goog.scope(function(){
figwheel.repl.goog$module$goog$object = goog.module.get('goog.object');
});
goog.require('goog.array');
goog.scope(function(){
figwheel.repl.goog$module$goog$array = goog.module.get('goog.array');
});
figwheel.repl.default_port = (9500);
figwheel.repl.default_ssl_port = (9533);
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.logger !== 'undefined')){
} else {
figwheel.repl.logger = figwheel.repl.logging.get_logger.call(null,"Figwheel REPL");
}

figwheel.repl.console_logging = (function figwheel$repl$console_logging(){
return figwheel.repl.logging.console_logging.call(null);
});
goog.exportSymbol('figwheel.repl.console_logging', figwheel.repl.console_logging);

figwheel.repl.debug = (function figwheel$repl$debug(msg){
return figwheel.repl.logging.debug.call(null,figwheel.repl.logger,msg);
});


figwheel.repl.unprovide_BANG_ = (function figwheel$repl$unprovide_BANG_(ns){
if((!((goog.debugLoader_ == null)))){
var path = goog.debugLoader_.getPathFromDeps_(ns);
figwheel.repl.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,path);

return figwheel.repl.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
} else {
var path = figwheel.repl.goog$module$goog$object.get.call(null,goog.dependencies_.nameToPath,ns);
figwheel.repl.goog$module$goog$object.remove.call(null,goog.dependencies_.visited,path);

figwheel.repl.goog$module$goog$object.remove.call(null,goog.dependencies_.written,path);

return figwheel.repl.goog$module$goog$object.remove.call(null,goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}
});

figwheel.repl.figwheel_require = (function figwheel$repl$figwheel_require(src,reload){
(goog.require = figwheel.repl.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
(goog.cljsReloadAll_ = true);
} else {
}

if(cljs.core.truth_((function (){var or__5002__auto__ = reload;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.cljsReloadAll_;
}
})())){
figwheel.repl.unprovide_BANG_.call(null,src);
} else {
}

var res = goog.require_figwheel_backup_(src);
if(cljs.core._EQ_.call(null,reload,"reload-all")){
(goog.cljsReloadAll_ = false);
} else {
}

return res;
});

/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.repl.bootstrap_goog_base = (function figwheel$repl$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
if(cljs.core.truth_(goog.require_figwheel_backup_)){
} else {
(goog.require_figwheel_backup_ = (function (){var or__5002__auto__ = goog.require__;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.require;
}
})());
}

(goog.isProvided_ = (function (name){
return false;
}));

if((((typeof cljs !== 'undefined')) && ((typeof cljs !== 'undefined') && (typeof cljs.user !== 'undefined')))){
} else {
goog.constructNamespace_("cljs.user");
}

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.repl.queued_file_reload);

return (goog.require = figwheel.repl.figwheel_require);
}
});

figwheel.repl.patch_goog_base = (function figwheel$repl$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.repl.bootstrapped_cljs = (function (){
figwheel.repl.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});

figwheel.repl.add_cache_buster = (function figwheel$repl$add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});

figwheel.repl.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__12606_SHARP_,p2__12607_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12606_SHARP_)),p2__12607_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__12608_SHARP_,p2__12609_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12608_SHARP_),p2__12609_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));

figwheel.repl.reload_file_in_html_env = (function figwheel$repl$reload_file_in_html_env(request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if((!((callback == null)))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

var G__12617 = figwheel.repl.gloader.call(null,figwheel.repl.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__12617.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__12617.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__12617;
});

figwheel.repl.write_script_tag_import = figwheel.repl.reload_file_in_html_env;
goog.exportSymbol('figwheel.repl.write_script_tag_import', figwheel.repl.write_script_tag_import);

figwheel.repl.worker_import_script = (function figwheel$repl$worker_import_script(request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if((!((callback == null)))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

return callback.call(null,(function (){try{self.importScripts(figwheel.repl.add_cache_buster.call(null,request_url));

return true;
}catch (e12618){if((e12618 instanceof Error)){
var e = e12618;
figwheel.repl.logging.error.call(null,figwheel.repl.logger,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.repl.logging.error.call(null,figwheel.repl.logger,e);

return false;
} else {
throw e12618;

}
}})());
});
goog.exportSymbol('figwheel.repl.worker_import_script', figwheel.repl.worker_import_script);

figwheel.repl.create_node_script_import_fn = (function figwheel$repl$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = figwheel.repl.goog$module$goog$object.findKey.call(null,require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((!((callback == null)))),"\n","(string? request-url)"].join('')));
}

var cache_path = node_path_lib.resolve(root_path,request_url);
figwheel.repl.goog$module$goog$object.remove.call(null,require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e12619){if((e12619 instanceof Error)){
var e = e12619;
figwheel.repl.logging.error.call(null,figwheel.repl.logger,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.repl.logging.error.call(null,figwheel.repl.logger,e);

return false;
} else {
throw e12619;

}
}})());
});
});
goog.exportSymbol('figwheel.repl.create_node_script_import_fn', figwheel.repl.create_node_script_import_fn);

figwheel.repl.host_env = (((!((goog.nodeGlobalRequire == null))))?new cljs.core.Keyword(null,"node","node",581201198):(((!((goog.global.document == null))))?new cljs.core.Keyword(null,"html","html",-998796897):(((((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.navigator !== 'undefined')) && (cljs.core._EQ_.call(null,goog.global.navigator.product,"ReactNative"))))?new cljs.core.Keyword(null,"react-native","react-native",-1543085138):(((((goog.global.document == null)) && ((((typeof self !== 'undefined')) && ((!((self.importScripts == null))))))))?new cljs.core.Keyword(null,"worker","worker",938239996):null))));

figwheel.repl.reload_file_STAR_ = (function (){var pred__12620 = cljs.core._EQ_;
var expr__12621 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__12620.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__12621))){
return figwheel.repl.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__12620.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__12621))){
return figwheel.repl.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__12620.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__12621))){
return figwheel.repl.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();

figwheel.repl.reload_file = (function figwheel$repl$reload_file(p__12623,callback){
var map__12624 = p__12623;
var map__12624__$1 = cljs.core.__destructure_map.call(null,map__12624);
var file_msg = map__12624__$1;
var request_url = cljs.core.get.call(null,map__12624__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if((!((callback == null)))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

figwheel.repl.logging.fine.call(null,figwheel.repl.logger,["Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__5002__auto__ = figwheel.repl.goog$module$goog$object.get.call(null,goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return figwheel.repl.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.repl.logging.fine.call(null,figwheel.repl.logger,["Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.repl.logging.error.call(null,figwheel.repl.logger,["Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.reload_promise_chain !== 'undefined')){
} else {
figwheel.repl.reload_promise_chain = cljs.core.atom.call(null,(new goog.Promise((function (p1__12610_SHARP_){
return p1__12610_SHARP_.call(null,true);
}))));
}

figwheel.repl.queued_file_reload = (function figwheel$repl$queued_file_reload(var_args){
var G__12626 = arguments.length;
switch (G__12626) {
case 1:
return figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.repl.queued_file_reload.call(null,url,null);
}));

(figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
if(clojure.string.ends_with_QMARK_.call(null,url,"goog/base.js")){
return true;
} else {
var temp__5823__auto__ = (cljs.core.truth_(opt_source_text)?(function (p1__12611_SHARP_){
return p1__12611_SHARP_.then((function (_){
return (new goog.Promise((function (r,___$1){
try{eval(opt_source_text);
}catch (e12627){if((e12627 instanceof Error)){
var e_12697 = e12627;
figwheel.repl.logging.error.call(null,figwheel.repl.logger,e_12697);
} else {
throw e12627;

}
}
return r.call(null,true);
})));
}));
}):(cljs.core.truth_(url)?(function (p1__12612_SHARP_){
return p1__12612_SHARP_.then((function (_){
return (new goog.Promise((function (r,___$1){
return figwheel.repl.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
return r.call(null,true);
}));
})));
}));
}):null));
if(cljs.core.truth_(temp__5823__auto__)){
var next_promise_fn = temp__5823__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.repl.reload_promise_chain,next_promise_fn);
} else {
return null;
}
}
}));

(figwheel.repl.queued_file_reload.cljs$lang$maxFixedArity = 2);


figwheel.repl.after_reloads = (function figwheel$repl$after_reloads(f){
return cljs.core.swap_BANG_.call(null,figwheel.repl.reload_promise_chain,(function (p1__12613_SHARP_){
return p1__12613_SHARP_.then(f);
}));
});
goog.exportSymbol('figwheel.repl.after_reloads', figwheel.repl.after_reloads);


/**
 * @define {string}
 */
figwheel.repl.print_output = goog.define("figwheel.repl.print_output","console,repl");

figwheel.repl.print_receivers = (function figwheel$repl$print_receivers(outputs){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.filter.call(null,cljs.core.complement.call(null,clojure.string.blank_QMARK_),cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,outputs,/,/)))));
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.out_print !== 'undefined')){
} else {
figwheel.repl.out_print = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","out-print"),(function (k,args){
return k;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.out_print,new cljs.core.Keyword(null,"console","console",1228072057),(function (_,args){
return console.log.apply(console,figwheel.repl.goog$module$goog$array.clone.call(null,cljs.core.to_array.call(null,args)));
}));

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.err_print !== 'undefined')){
} else {
figwheel.repl.err_print = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","err-print"),(function (k,args){
return k;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.err_print,new cljs.core.Keyword(null,"console","console",1228072057),(function (_,args){
return console.error.apply(console,figwheel.repl.goog$module$goog$array.clone.call(null,cljs.core.to_array.call(null,args)));
}));

figwheel.repl.setup_printing_BANG_ = (function figwheel$repl$setup_printing_BANG_(){
var printers = figwheel.repl.print_receivers.call(null,figwheel.repl.print_output);
cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__12698__delegate = function (args){
var seq__12628 = cljs.core.seq.call(null,printers);
var chunk__12629 = null;
var count__12630 = (0);
var i__12631 = (0);
while(true){
if((i__12631 < count__12630)){
var p = cljs.core._nth.call(null,chunk__12629,i__12631);
figwheel.repl.out_print.call(null,p,args);


var G__12699 = seq__12628;
var G__12700 = chunk__12629;
var G__12701 = count__12630;
var G__12702 = (i__12631 + (1));
seq__12628 = G__12699;
chunk__12629 = G__12700;
count__12630 = G__12701;
i__12631 = G__12702;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__12628);
if(temp__5823__auto__){
var seq__12628__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12628__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12628__$1);
var G__12703 = cljs.core.chunk_rest.call(null,seq__12628__$1);
var G__12704 = c__5525__auto__;
var G__12705 = cljs.core.count.call(null,c__5525__auto__);
var G__12706 = (0);
seq__12628 = G__12703;
chunk__12629 = G__12704;
count__12630 = G__12705;
i__12631 = G__12706;
continue;
} else {
var p = cljs.core.first.call(null,seq__12628__$1);
figwheel.repl.out_print.call(null,p,args);


var G__12707 = cljs.core.next.call(null,seq__12628__$1);
var G__12708 = null;
var G__12709 = (0);
var G__12710 = (0);
seq__12628 = G__12707;
chunk__12629 = G__12708;
count__12630 = G__12709;
i__12631 = G__12710;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__12698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12711__i = 0, G__12711__a = new Array(arguments.length -  0);
while (G__12711__i < G__12711__a.length) {G__12711__a[G__12711__i] = arguments[G__12711__i + 0]; ++G__12711__i;}
  args = new cljs.core.IndexedSeq(G__12711__a,0,null);
} 
return G__12698__delegate.call(this,args);};
G__12698.cljs$lang$maxFixedArity = 0;
G__12698.cljs$lang$applyTo = (function (arglist__12712){
var args = cljs.core.seq(arglist__12712);
return G__12698__delegate(args);
});
G__12698.cljs$core$IFn$_invoke$arity$variadic = G__12698__delegate;
return G__12698;
})()
);

return cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__12713__delegate = function (args){
var seq__12632 = cljs.core.seq.call(null,printers);
var chunk__12633 = null;
var count__12634 = (0);
var i__12635 = (0);
while(true){
if((i__12635 < count__12634)){
var p = cljs.core._nth.call(null,chunk__12633,i__12635);
figwheel.repl.err_print.call(null,p,args);


var G__12714 = seq__12632;
var G__12715 = chunk__12633;
var G__12716 = count__12634;
var G__12717 = (i__12635 + (1));
seq__12632 = G__12714;
chunk__12633 = G__12715;
count__12634 = G__12716;
i__12635 = G__12717;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__12632);
if(temp__5823__auto__){
var seq__12632__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12632__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12632__$1);
var G__12718 = cljs.core.chunk_rest.call(null,seq__12632__$1);
var G__12719 = c__5525__auto__;
var G__12720 = cljs.core.count.call(null,c__5525__auto__);
var G__12721 = (0);
seq__12632 = G__12718;
chunk__12633 = G__12719;
count__12634 = G__12720;
i__12635 = G__12721;
continue;
} else {
var p = cljs.core.first.call(null,seq__12632__$1);
figwheel.repl.err_print.call(null,p,args);


var G__12722 = cljs.core.next.call(null,seq__12632__$1);
var G__12723 = null;
var G__12724 = (0);
var G__12725 = (0);
seq__12632 = G__12722;
chunk__12633 = G__12723;
count__12634 = G__12724;
i__12635 = G__12725;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__12713 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12726__i = 0, G__12726__a = new Array(arguments.length -  0);
while (G__12726__i < G__12726__a.length) {G__12726__a[G__12726__i] = arguments[G__12726__i + 0]; ++G__12726__i;}
  args = new cljs.core.IndexedSeq(G__12726__a,0,null);
} 
return G__12713__delegate.call(this,args);};
G__12713.cljs$lang$maxFixedArity = 0;
G__12713.cljs$lang$applyTo = (function (arglist__12727){
var args = cljs.core.seq(arglist__12727);
return G__12713__delegate(args);
});
G__12713.cljs$core$IFn$_invoke$arity$variadic = G__12713__delegate;
return G__12713;
})()
);
});


/**
 * @define {string}
 */
figwheel.repl.connect_url = goog.define("figwheel.repl.connect_url","ws://[[client-hostname]]:[[client-port]]/figwheel-connect");


/**
 * @define {number}
 */
figwheel.repl.heartbeat_interval = goog.define("figwheel.repl.heartbeat_interval",(10000));

figwheel.repl.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);

figwheel.repl.storage = goog.storage.mechanism.mechanismfactory.createHTML5SessionStorage("figwheel.repl");

figwheel.repl.set_state = (function figwheel$repl$set_state(k,v){
cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,k,v);

if(cljs.core.truth_(figwheel.repl.storage)){
return figwheel.repl.storage.set(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),v);
} else {
return null;
}
});

figwheel.repl.get_state = (function figwheel$repl$get_state(k){
if(cljs.core.truth_(figwheel.repl.storage)){
return figwheel.repl.storage.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k));
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.repl.state),k);
}
});

figwheel.repl.session_name = (function figwheel$repl$session_name(){
return figwheel.repl.get_state.call(null,new cljs.core.Keyword("figwheel.repl","session-name","figwheel.repl/session-name",2102143102));
});
goog.exportSymbol('figwheel.repl.session_name', figwheel.repl.session_name);

figwheel.repl.session_id = (function figwheel$repl$session_id(){
return figwheel.repl.get_state.call(null,new cljs.core.Keyword("figwheel.repl","session-id","figwheel.repl/session-id",594324955));
});
goog.exportSymbol('figwheel.repl.session_id', figwheel.repl.session_id);

figwheel.repl.response_for = (function figwheel$repl$response_for(p__12636,response_body){
var map__12637 = p__12636;
var map__12637__$1 = cljs.core.__destructure_map.call(null,map__12637);
var uuid = cljs.core.get.call(null,map__12637__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var G__12638 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351),figwheel.repl.session_id.call(null),new cljs.core.Keyword(null,"session-name","session-name",-167167576),figwheel.repl.session_name.call(null),new cljs.core.Keyword(null,"response","response",-1068424192),response_body], null);
if(cljs.core.truth_(uuid)){
return cljs.core.assoc.call(null,G__12638,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),uuid);
} else {
return G__12638;
}
});

figwheel.repl.http_post = (function (){var pred__12639 = cljs.core._EQ_;
var expr__12640 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__12639.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__12640))){
var http = require("http");
return (function (url,post_data){
var data = cljs.core.volatile_BANG_.call(null,"");
var uri = goog.Uri.parse(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url));
var G__12642 = http.request(({"host": uri.getDomain(), "port": uri.getPort(), "path": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri.getPath()),(function (){var temp__5823__auto__ = uri.getQuery();
if(cljs.core.truth_(temp__5823__auto__)){
var q = temp__5823__auto__;
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)].join('');
} else {
return null;
}
})()].join(''), "method": "POST", "headers": ({"Content-Length": Buffer.byteLength(post_data)})}),(function (x){
return null;
})).on("error",(function (p1__12614_SHARP_){
return console.error(p1__12614_SHARP_);
}));
G__12642.write(post_data);

G__12642.end();

return G__12642;
});
} else {
return (function (url,response){
return goog.net.XhrIo.send(url,(function (e){
return figwheel.repl.debug.call(null,"Response Posted");
}),"POST",response);
});
}
})();

figwheel.repl.respond_to = (function figwheel$repl$respond_to(p__12643,response_body){
var map__12644 = p__12643;
var map__12644__$1 = cljs.core.__destructure_map.call(null,map__12644);
var old_msg = map__12644__$1;
var websocket = cljs.core.get.call(null,map__12644__$1,new cljs.core.Keyword(null,"websocket","websocket",-1714963101));
var http_url = cljs.core.get.call(null,map__12644__$1,new cljs.core.Keyword(null,"http-url","http-url",-2043776269));
var response = figwheel.repl.response_for.call(null,old_msg,response_body);
if(cljs.core.truth_(websocket)){
return websocket.send(cljs.core.pr_str.call(null,response));
} else {
if(cljs.core.truth_(http_url)){
return figwheel.repl.http_post.call(null,http_url,cljs.core.pr_str.call(null,response));
} else {
return null;
}
}
});

figwheel.repl.respond_to_connection = (function figwheel$repl$respond_to_connection(response_body){
return figwheel.repl.respond_to.call(null,new cljs.core.Keyword(null,"connection","connection",-123599300).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.repl.state)),response_body);
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.message !== 'undefined')){
} else {
figwheel.repl.message = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","message"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.message,"naming",(function (msg){
var temp__5823__auto___12728 = new cljs.core.Keyword(null,"session-name","session-name",-167167576).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(temp__5823__auto___12728)){
var sn_12729 = temp__5823__auto___12728;
figwheel.repl.set_state.call(null,new cljs.core.Keyword("figwheel.repl","session-name","figwheel.repl/session-name",2102143102),sn_12729);
} else {
}

var temp__5823__auto___12730 = new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(temp__5823__auto___12730)){
var sid_12731 = temp__5823__auto___12730;
figwheel.repl.set_state.call(null,new cljs.core.Keyword("figwheel.repl","session-id","figwheel.repl/session-id",594324955),sid_12731);
} else {
}

figwheel.repl.logging.info.call(null,figwheel.repl.logger,["Session ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.session_id.call(null))].join(''));

return figwheel.repl.logging.info.call(null,figwheel.repl.logger,["Session Name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.session_name.call(null))].join(''));
}));

cljs.core._add_method.call(null,figwheel.repl.message,"ping",(function (msg){
return figwheel.repl.respond_to.call(null,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pong","pong",-172484958),true], null));
}));

figwheel.repl.get_ua_product = (function figwheel$repl$get_ua_product(){
if((!((goog.nodeGlobalRequire == null)))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});

var print_to_console_QMARK__12732 = figwheel.repl.print_receivers.call(null,figwheel.repl.print_output).call(null,new cljs.core.Keyword(null,"console","console",1228072057));
figwheel.repl.eval_javascript_STAR__STAR_ = (function figwheel$repl$eval_javascript_STAR__STAR_(code){
var ua_product = figwheel.repl.get_ua_product.call(null);
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12646 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12647 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12648 = true;
var _STAR_print_fn_STAR__temp_val__12649 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12648);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12649);

try{var result_value = eval(code);
var result_value__$1 = (((!(typeof result_value === 'string')))?(function (){try{return cljs.core.pr_str.call(null,result_value);
}catch (e12650){if((e12650 instanceof Error)){
var e = e12650;
return null;
} else {
throw e12650;

}
}})():result_value);
var output_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
if(cljs.core.truth_((function (){var and__5000__auto__ = print_to_console_QMARK__12732;
if(cljs.core.truth_(and__5000__auto__)){
return (!((sb.getLength() === (0))));
} else {
return and__5000__auto__;
}
})())){
setTimeout((function (){
return figwheel.repl.out_print.call(null,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_str], null));
}),(0));
} else {
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),output_str,new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12647);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12646);
}}catch (e12645){if((e12645 instanceof Error)){
var e = e12645;
if((((typeof console !== 'undefined')) && ((typeof console !== 'undefined') && (typeof console.error !== 'undefined')))){
console.error("REPL eval error",e);
} else {
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),e.stack], null);
} else {
var e = e12645;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null);

}
}});

cljs.core._add_method.call(null,figwheel.repl.message,"eval",(function (p__12651){
var map__12652 = p__12651;
var map__12652__$1 = cljs.core.__destructure_map.call(null,map__12652);
var msg = map__12652__$1;
var code = cljs.core.get.call(null,map__12652__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var result = figwheel.repl.eval_javascript_STAR__STAR_.call(null,code);
return figwheel.repl.respond_to.call(null,msg,result);
}));

cljs.core._add_method.call(null,figwheel.repl.message,"messages",(function (p__12653){
var map__12654 = p__12653;
var map__12654__$1 = cljs.core.__destructure_map.call(null,map__12654);
var messages = cljs.core.get.call(null,map__12654__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var http_url = cljs.core.get.call(null,map__12654__$1,new cljs.core.Keyword(null,"http-url","http-url",-2043776269));
var seq__12655 = cljs.core.seq.call(null,messages);
var chunk__12656 = null;
var count__12657 = (0);
var i__12658 = (0);
while(true){
if((i__12658 < count__12657)){
var msg = cljs.core._nth.call(null,chunk__12656,i__12658);
figwheel.repl.message.call(null,(function (){var G__12661 = cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core.truth_(http_url)){
return cljs.core.assoc.call(null,G__12661,new cljs.core.Keyword(null,"http-url","http-url",-2043776269),http_url);
} else {
return G__12661;
}
})());


var G__12733 = seq__12655;
var G__12734 = chunk__12656;
var G__12735 = count__12657;
var G__12736 = (i__12658 + (1));
seq__12655 = G__12733;
chunk__12656 = G__12734;
count__12657 = G__12735;
i__12658 = G__12736;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__12655);
if(temp__5823__auto__){
var seq__12655__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12655__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12655__$1);
var G__12737 = cljs.core.chunk_rest.call(null,seq__12655__$1);
var G__12738 = c__5525__auto__;
var G__12739 = cljs.core.count.call(null,c__5525__auto__);
var G__12740 = (0);
seq__12655 = G__12737;
chunk__12656 = G__12738;
count__12657 = G__12739;
i__12658 = G__12740;
continue;
} else {
var msg = cljs.core.first.call(null,seq__12655__$1);
figwheel.repl.message.call(null,(function (){var G__12662 = cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core.truth_(http_url)){
return cljs.core.assoc.call(null,G__12662,new cljs.core.Keyword(null,"http-url","http-url",-2043776269),http_url);
} else {
return G__12662;
}
})());


var G__12741 = cljs.core.next.call(null,seq__12655__$1);
var G__12742 = null;
var G__12743 = (0);
var G__12744 = (0);
seq__12655 = G__12741;
chunk__12656 = G__12742;
count__12657 = G__12743;
i__12658 = G__12744;
continue;
}
} else {
return null;
}
}
break;
}
}));

figwheel.repl.fill_url_template = (function figwheel$repl$fill_url_template(connect_url_SINGLEQUOTE_){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
return clojure.string.replace.call(null,clojure.string.replace.call(null,connect_url_SINGLEQUOTE_,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
} else {
return connect_url_SINGLEQUOTE_;
}
});

figwheel.repl.make_url = (function figwheel$repl$make_url(connect_url_SINGLEQUOTE_){
var uri = goog.Uri.parse(figwheel.repl.fill_url_template.call(null,(function (){var or__5002__auto__ = connect_url_SINGLEQUOTE_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return figwheel.repl.connect_url;
}
})()));
var domain = uri.getDomain();
if(clojure.string.ends_with_QMARK_.call(null,domain,":")){
uri.setDomain(cljs.core.subs.call(null,domain,(0),(cljs.core.count.call(null,domain) - (1))));
} else {
}

var G__12663_12745 = uri.getQueryData().add("fwsid",(function (){var or__5002__auto__ = figwheel.repl.session_id.call(null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.random_uuid.call(null);
}
})());
if(cljs.core.truth_(figwheel.repl.session_name.call(null))){
G__12663_12745.add("fwsname",figwheel.repl.session_name.call(null));
} else {
}

return uri;
});

figwheel.repl.exponential_backoff = (function figwheel$repl$exponential_backoff(attempt){
return ((1000) * (function (){var x__5090__auto__ = Math.pow((2),attempt);
var y__5091__auto__ = (20);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})());
});

figwheel.repl.hook_repl_printing_output_BANG_ = (function figwheel$repl$hook_repl_printing_output_BANG_(respond_msg){
cljs.core._add_method.call(null,figwheel.repl.out_print,new cljs.core.Keyword(null,"repl","repl",-35398667),(function (_,args){
return figwheel.repl.respond_to.call(null,respond_msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"output","output",-1105869043),true,new cljs.core.Keyword(null,"stream","stream",1534941648),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__12615_SHARP_){
if(typeof p1__12615_SHARP_ === 'string'){
return p1__12615_SHARP_;
} else {
return goog.json.serialize(p1__12615_SHARP_);
}
}),args)], null));
}));

cljs.core._add_method.call(null,figwheel.repl.err_print,new cljs.core.Keyword(null,"repl","repl",-35398667),(function (_,args){
return figwheel.repl.respond_to.call(null,respond_msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"output","output",-1105869043),true,new cljs.core.Keyword(null,"stream","stream",1534941648),new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__12616_SHARP_){
if(typeof p1__12616_SHARP_ === 'string'){
return p1__12616_SHARP_;
} else {
return goog.json.serialize(p1__12616_SHARP_);
}
}),args)], null));
}));

return figwheel.repl.setup_printing_BANG_.call(null);
});

figwheel.repl.connection_established_BANG_ = (function figwheel$repl$connection_established_BANG_(url){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
var target = goog.global.document.body;
return target.dispatchEvent((function (){var G__12664 = (new Event("figwheel.repl.connected",target));
figwheel.repl.goog$module$goog$object.add.call(null,G__12664,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));

return G__12664;
})());
} else {
return null;
}
});

figwheel.repl.connection_closed_BANG_ = (function figwheel$repl$connection_closed_BANG_(url){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
var target = goog.global.document.body;
return target.dispatchEvent((function (){var G__12665 = (new Event("figwheel.repl.disconnected",target));
figwheel.repl.goog$module$goog$object.add.call(null,G__12665,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));

return G__12665;
})());
} else {
return null;
}
});

figwheel.repl.get_websocket_class = (function figwheel$repl$get_websocket_class(){
var or__5002__auto__ = figwheel.repl.goog$module$goog$object.get.call(null,goog.global,"WebSocket");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = figwheel.repl.goog$module$goog$object.get.call(null,goog.global,"FIGWHEEL_WEBSOCKET_CLASS");
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = (function (){var and__5000__auto__ = cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198));
if(and__5000__auto__){
try{return require("ws");
}catch (e12666){if((e12666 instanceof Error)){
var e = e12666;
return null;
} else {
throw e12666;

}
}} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var and__5000__auto__ = cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"worker","worker",938239996));
if(and__5000__auto__){
return figwheel.repl.goog$module$goog$object.get.call(null,self,"WebSocket");
} else {
return and__5000__auto__;
}
}
}
}
});

figwheel.repl.ensure_websocket = (function figwheel$repl$ensure_websocket(thunk){
if(cljs.core.truth_(figwheel.repl.goog$module$goog$object.get.call(null,goog.global,"WebSocket"))){
return thunk.call(null);
} else {
var temp__5821__auto__ = figwheel.repl.get_websocket_class.call(null);
if(cljs.core.truth_(temp__5821__auto__)){
var websocket_class = temp__5821__auto__;
figwheel.repl.goog$module$goog$object.set.call(null,goog.global,"WebSocket",websocket_class);

thunk.call(null);

return figwheel.repl.goog$module$goog$object.set.call(null,goog.global,"WebSocket",null);
} else {
return figwheel.repl.logging.error.call(null,figwheel.repl.logger,((cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198)))?"Can't connect!! Please make sure ws is installed\n do -> 'npm install ws'":"Can't connect!! This client doesn't support WebSockets"));
}
}
});

figwheel.repl.ws_connect = (function figwheel$repl$ws_connect(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12746 = arguments.length;
var i__5727__auto___12747 = (0);
while(true){
if((i__5727__auto___12747 < len__5726__auto___12746)){
args__5732__auto__.push((arguments[i__5727__auto___12747]));

var G__12748 = (i__5727__auto___12747 + (1));
i__5727__auto___12747 = G__12748;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return figwheel.repl.ws_connect.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(figwheel.repl.ws_connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__12668){
var vec__12669 = p__12668;
var websocket_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__12669,(0),null);
return figwheel.repl.ensure_websocket.call(null,(function (){
var websocket = (new goog.net.WebSocket());
var url = cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.make_url.call(null,websocket_url_SINGLEQUOTE_));
var heartbeat_job = cljs.core.atom.call(null,null);
var G__12672 = websocket;
G__12672.addEventListener(goog.net.WebSocket.EventType.MESSAGE,(function (e){
var temp__5823__auto__ = figwheel.repl.goog$module$goog$object.get.call(null,e,"message");
if(cljs.core.truth_(temp__5823__auto__)){
var msg = temp__5823__auto__;
try{figwheel.repl.debug.call(null,msg);

return figwheel.repl.message.call(null,cljs.core.assoc.call(null,cljs.core.js__GT_clj.call(null,JSON.parse(msg),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket));
}catch (e12673){if((e12673 instanceof Error)){
var e__$1 = e12673;
return figwheel.repl.logging.error.call(null,figwheel.repl.logger,e__$1);
} else {
throw e12673;

}
}} else {
return null;
}
}));

G__12672.addEventListener(goog.net.WebSocket.EventType.OPENED,(function (e){
figwheel.repl.connection_established_BANG_.call(null,url);

cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket], null));

cljs.core.reset_BANG_.call(null,heartbeat_job,setInterval((function (){
if(cljs.core.truth_(websocket.isOpen())){
websocket.send(cljs.core.pr_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"heartbeat"], null)));

return figwheel.repl.logging.fine.call(null,figwheel.repl.logger,"SENDING websocket heartbeat");
} else {
return null;
}
}),figwheel.repl.heartbeat_interval));

return figwheel.repl.hook_repl_printing_output_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket], null));
}));

G__12672.addEventListener(goog.net.WebSocket.EventType.CLOSED,(function (e){
figwheel.repl.connection_closed_BANG_.call(null,url);

figwheel.repl.logging.fine.call(null,figwheel.repl.logger,"CLOSING websocket heartbeat");

return clearInterval(cljs.core.deref.call(null,heartbeat_job));
}));

G__12672.open(url);

return G__12672;
}));
}));

(figwheel.repl.ws_connect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.repl.ws_connect.cljs$lang$applyTo = (function (seq12667){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12667));
}));


figwheel.repl.http_get = (function (){var pred__12674 = cljs.core._EQ_;
var expr__12675 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__12674.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__12675))){
var http = require("http");
return (function (url){
return (new goog.Promise((function (succ,err){
var data = cljs.core.volatile_BANG_.call(null,"");
return http.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),(function (response){
response.on("data",(function (chunk){
return cljs.core._vreset_BANG_.call(null,data,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._deref.call(null,data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chunk)].join(''));
}));

return response.on("end",(function (){
return succ.call(null,(function (){try{return JSON.parse(cljs.core.deref.call(null,data));
}catch (e12677){if((e12677 instanceof Error)){
var e = e12677;
console.error(e);

return err.call(null,e);
} else {
throw e12677;

}
}})());
}));
})).on("error",err);
})));
});
} else {
return (function (url){
return (new goog.Promise((function (succ,err){
return goog.net.XhrIo.send(url,(function (e){
var xhr = figwheel.repl.goog$module$goog$object.get.call(null,e,"target");
if(cljs.core.truth_(xhr.isSuccess())){
return succ.call(null,xhr.getResponseJson());
} else {
return err.call(null,xhr);
}
}));
})));
});
}
})();



figwheel.repl.poll = (function figwheel$repl$poll(msg_fn,connect_url_SINGLEQUOTE_){
return figwheel.repl.http_get.call(null,figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_)).then((function (msg){
msg_fn.call(null,msg);

return setTimeout((function (){
return figwheel.repl.poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}),(500));
}),(function (e){
figwheel.repl.connection_closed_BANG_.call(null,connect_url_SINGLEQUOTE_);

return figwheel.repl.http_connect.call(null,connect_url_SINGLEQUOTE_);
}));
});

figwheel.repl.long_poll = (function figwheel$repl$long_poll(msg_fn,connect_url_SINGLEQUOTE_){
return figwheel.repl.http_get.call(null,figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_)).then((function (msg){
msg_fn.call(null,msg);

return figwheel.repl.long_poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}),(function (e){
figwheel.repl.connection_closed_BANG_.call(null,connect_url_SINGLEQUOTE_);

return figwheel.repl.http_connect.call(null,connect_url_SINGLEQUOTE_);
}));
});

figwheel.repl.http_connect_STAR_ = (function figwheel$repl$http_connect_STAR_(attempt,connect_url_SINGLEQUOTE_){
var url = figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_);
var surl = cljs.core.str.cljs$core$IFn$_invoke$arity$1(url);
var msg_fn = (function (msg){
try{figwheel.repl.debug.call(null,cljs.core.pr_str.call(null,msg));

return figwheel.repl.message.call(null,cljs.core.assoc.call(null,cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl));
}catch (e12678){if((e12678 instanceof Error)){
var e = e12678;
return figwheel.repl.logging.error.call(null,figwheel.repl.logger,e);
} else {
throw e12678;

}
}});
var G__12679_12749 = url.getQueryData();
G__12679_12749.add("fwinit","true");


return figwheel.repl.http_get.call(null,url).then((function (msg){
var typ = figwheel.repl.goog$module$goog$object.get.call(null,msg,"connection-type");
figwheel.repl.logging.info.call(null,figwheel.repl.logger,["Connected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(typ)].join(''));

msg_fn.call(null,msg);

figwheel.repl.connection_established_BANG_.call(null,url);

cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl], null));

figwheel.repl.hook_repl_printing_output_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl], null));

if(cljs.core._EQ_.call(null,typ,"http-long-polling")){
return figwheel.repl.long_poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
} else {
return figwheel.repl.poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}
}),(function (e){
if((e instanceof Error)){
figwheel.repl.logging.error.call(null,figwheel.repl.logger,e);
} else {
}

if(cljs.core.truth_((function (){var and__5000__auto__ = (e instanceof goog.net.XhrIo);
if(and__5000__auto__){
return e.getResponseBody();
} else {
return and__5000__auto__;
}
})())){
figwheel.repl.debug.call(null,e.getResponseBody());
} else {
}

var wait_time = figwheel.repl.exponential_backoff.call(null,attempt);
figwheel.repl.logging.info.call(null,figwheel.repl.logger,["HTTP Connection Error: next connection attempt in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((wait_time / (1000)))," seconds"].join(''));

return setTimeout((function (){
return figwheel.repl.http_connect_STAR_.call(null,(attempt + (1)),connect_url_SINGLEQUOTE_);
}),wait_time);
}));
});

figwheel.repl.http_connect = (function figwheel$repl$http_connect(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12750 = arguments.length;
var i__5727__auto___12751 = (0);
while(true){
if((i__5727__auto___12751 < len__5726__auto___12750)){
args__5732__auto__.push((arguments[i__5727__auto___12751]));

var G__12752 = (i__5727__auto___12751 + (1));
i__5727__auto___12751 = G__12752;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return figwheel.repl.http_connect.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(figwheel.repl.http_connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__12681){
var vec__12682 = p__12681;
var connect_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__12682,(0),null);
return figwheel.repl.http_connect_STAR_.call(null,(0),connect_url_SINGLEQUOTE_);
}));

(figwheel.repl.http_connect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.repl.http_connect.cljs$lang$applyTo = (function (seq12680){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12680));
}));


figwheel.repl.switch_to_http_QMARK_ = (function figwheel$repl$switch_to_http_QMARK_(url){
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(url,"http");
if(or__5002__auto__){
return or__5002__auto__;
} else {
return figwheel.repl.get_websocket_class.call(null);
}
})())){
return url;
} else {
figwheel.repl.logging.warning.call(null,figwheel.repl.logger,["No WebSocket implementation found! Falling back to http-long-polling",((cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198)))?":\n For a more efficient connection ensure that \"ws\" is installed :: do -> 'npm install ws'":null)].join(''));

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.Uri.parse(url).setScheme("http"));
}
});


/**
 * @define {string}
 */
figwheel.repl.client_log_level = goog.define("figwheel.repl.client_log_level","info");

figwheel.repl.init_log_level_BANG_ = (function figwheel$repl$init_log_level_BANG_(){
var seq__12685 = cljs.core.seq.call(null,(function (){var G__12690 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [figwheel.repl.logger], null);
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined')){
return cljs.core.conj.call(null,G__12690,figwheel.core.logger);
} else {
return G__12690;
}
})());
var chunk__12686 = null;
var count__12687 = (0);
var i__12688 = (0);
while(true){
if((i__12688 < count__12687)){
var logger_SINGLEQUOTE_ = cljs.core._nth.call(null,chunk__12686,i__12688);
figwheel.repl.logging.set_log_level.call(null,logger_SINGLEQUOTE_,figwheel.repl.client_log_level);


var G__12753 = seq__12685;
var G__12754 = chunk__12686;
var G__12755 = count__12687;
var G__12756 = (i__12688 + (1));
seq__12685 = G__12753;
chunk__12686 = G__12754;
count__12687 = G__12755;
i__12688 = G__12756;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__12685);
if(temp__5823__auto__){
var seq__12685__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12685__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__12685__$1);
var G__12757 = cljs.core.chunk_rest.call(null,seq__12685__$1);
var G__12758 = c__5525__auto__;
var G__12759 = cljs.core.count.call(null,c__5525__auto__);
var G__12760 = (0);
seq__12685 = G__12757;
chunk__12686 = G__12758;
count__12687 = G__12759;
i__12688 = G__12760;
continue;
} else {
var logger_SINGLEQUOTE_ = cljs.core.first.call(null,seq__12685__$1);
figwheel.repl.logging.set_log_level.call(null,logger_SINGLEQUOTE_,figwheel.repl.client_log_level);


var G__12761 = cljs.core.next.call(null,seq__12685__$1);
var G__12762 = null;
var G__12763 = (0);
var G__12764 = (0);
seq__12685 = G__12761;
chunk__12686 = G__12762;
count__12687 = G__12763;
i__12688 = G__12764;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.repl.connect_STAR_ = (function figwheel$repl$connect_STAR_(connect_url_SINGLEQUOTE_){
figwheel.repl.init_log_level_BANG_.call(null);

figwheel.repl.patch_goog_base.call(null);

var url = figwheel.repl.switch_to_http_QMARK_.call(null,clojure.string.trim.call(null,(function (){var or__5002__auto__ = connect_url_SINGLEQUOTE_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return figwheel.repl.connect_url;
}
})()));
if(goog.string.startsWith(url,"ws")){
return figwheel.repl.ws_connect.call(null,url);
} else {
if(goog.string.startsWith(url,"http")){
return figwheel.repl.http_connect.call(null,url);
} else {
return null;
}
}
});

figwheel.repl.connect = (function figwheel$repl$connect(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12765 = arguments.length;
var i__5727__auto___12766 = (0);
while(true){
if((i__5727__auto___12766 < len__5726__auto___12765)){
args__5732__auto__.push((arguments[i__5727__auto___12766]));

var G__12767 = (i__5727__auto___12766 + (1));
i__5727__auto___12766 = G__12767;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return figwheel.repl.connect.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(figwheel.repl.connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__12692){
var vec__12693 = p__12692;
var connect_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__12693,(0),null);
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.connected !== 'undefined')){
return null;
} else {
return (
figwheel.repl.connected = (function (){
figwheel.repl.connect_STAR_.call(null,connect_url_SINGLEQUOTE_);

return true;
})()
)
;
}
}));

(figwheel.repl.connect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.repl.connect.cljs$lang$applyTo = (function (seq12691){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12691));
}));


//# sourceMappingURL=repl.js.map
