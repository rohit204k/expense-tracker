// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
goog.require('goog.object');
goog.scope(function(){
figwheel.core.goog$module$goog$object = goog.module.get('goog.object');
});
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,(function (p1__20864_SHARP_){
var k = f.call(null,p1__20864_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__20865){
var vec__20866 = p__20865;
var k = cljs.core.nth.call(null,vec__20866,(0),null);
var v = cljs.core.nth.call(null,vec__20866,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20870 = arguments.length;
var i__5727__auto___20871 = (0);
while(true){
if((i__5727__auto___20871 < len__5726__auto___20870)){
args__5732__auto__.push((arguments[i__5727__auto___20871]));

var G__20872 = (i__5727__auto___20871 + (1));
i__5727__auto___20871 = G__20872;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
}));

(figwheel.core.cross_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq20869){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20869));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__20875){
var map__20876 = p__20875;
var map__20876__$1 = cljs.core.__destructure_map.call(null,map__20876);
var message = cljs.core.get.call(null,map__20876__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__20876__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__20874_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20874_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__20873_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__20873_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__20878){
var map__20879 = p__20878;
var map__20879__$1 = cljs.core.__destructure_map.call(null,map__20879);
var message_data = map__20879__$1;
var message = cljs.core.get.call(null,map__20879__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__20879__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__20879__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__20879__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__20880 = file_excerpt;
var map__20880__$1 = cljs.core.__destructure_map.call(null,map__20880);
var start_line = cljs.core.get.call(null,map__20880__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__20880__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__20880__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__20881 = cljs.core.split_with.call(null,(function (p1__20877_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__20877_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__20881,(0),null);
var end = cljs.core.nth.call(null,vec__20881,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__20884){
var map__20885 = p__20884;
var map__20885__$1 = cljs.core.__destructure_map.call(null,map__20885);
var file = cljs.core.get.call(null,map__20885__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__20885__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__20885__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__20886 = "";
var G__20886__$1 = (cljs.core.truth_(file)?[G__20886,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__20886);
var G__20886__$2 = (cljs.core.truth_(line)?[G__20886__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__20886__$1);
if(cljs.core.truth_((function (){var and__5000__auto__ = line;
if(cljs.core.truth_(and__5000__auto__)){
return column;
} else {
return and__5000__auto__;
}
})())){
return [G__20886__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__20886__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger.call(null,"Figwheel");
}

figwheel.core.glog_info = (function figwheel$core$glog_info(log,msg){
return goog.log.info.call(null,log,msg);
});

figwheel.core.glog_warning = (function figwheel$core$glog_warning(log,msg){
return goog.log.warning.call(null,log,msg);
});

figwheel.core.glog_error = (function figwheel$core$glog_error(log,msg){
return goog.log.error.call(null,log,msg);
});

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(figwheel.core.goog$module$goog$object.get.call(null,goog.debug.Console,"instance"))){
} else {
var c_20944 = (new goog.debug.Console());
var G__20893_20945 = c_20944.getFormatter();
figwheel.core.goog$module$goog$object.set.call(null,G__20893_20945,"showAbsoluteTime",false);

figwheel.core.goog$module$goog$object.set.call(null,G__20893_20945,"showRelativeTime",false);


figwheel.core.goog$module$goog$object.set.call(null,goog.debug.Console,"instance",c_20944);

}

var temp__5823__auto__ = figwheel.core.goog$module$goog$object.get.call(null,goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5823__auto__)){
var console_instance = temp__5823__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5823__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__20894 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
figwheel.core.goog$module$goog$object.add.call(null,G__20894,"data",(function (){var or__5002__auto__ = data;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__20894;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return figwheel.core.goog$module$goog$object.get.call(null,(function (){var temp__5821__auto__ = e.event_;
if(cljs.core.truth_(temp__5821__auto__)){
var e__$1 = temp__5821__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/**
 * @define {boolean}
 */
figwheel.core.load_warninged_code = goog.define("figwheel.core.load_warninged_code",false);


/**
 * @define {boolean}
 */
figwheel.core.heads_up_display = goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
var and__5000__auto__ = figwheel.core.heads_up_display;
if(cljs.core.truth_(and__5000__auto__)){
return (!((goog.global.document == null)));
} else {
return and__5000__auto__;
}
});

var last_reload_timestamp_20946 = cljs.core.atom.call(null,(0));
var promise_chain_20947 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5821__auto__ = (function (){var temp__5823__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5823__auto__)){
var ts = temp__5823__auto__;
var and__5000__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_20946) < ts);
if(and__5000__auto__){
return ts;
} else {
return and__5000__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5821__auto__)){
var ts = temp__5821__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_20946,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_20947.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__20895 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__20896 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__20896);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__20897 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__20898 = null;
var count__20899 = (0);
var i__20900 = (0);
while(true){
if((i__20900 < count__20899)){
var w = cljs.core._nth.call(null,chunk__20898,i__20900);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__20948 = seq__20897;
var G__20949 = chunk__20898;
var G__20950 = count__20899;
var G__20951 = (i__20900 + (1));
seq__20897 = G__20948;
chunk__20898 = G__20949;
count__20899 = G__20950;
i__20900 = G__20951;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__20897);
if(temp__5823__auto__){
var seq__20897__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20897__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20897__$1);
var G__20952 = cljs.core.chunk_rest.call(null,seq__20897__$1);
var G__20953 = c__5525__auto__;
var G__20954 = cljs.core.count.call(null,c__5525__auto__);
var G__20955 = (0);
seq__20897 = G__20952;
chunk__20898 = G__20953;
count__20899 = G__20954;
i__20900 = G__20955;
continue;
} else {
var w = cljs.core.first.call(null,seq__20897__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__20956 = cljs.core.next.call(null,seq__20897__$1);
var G__20957 = null;
var G__20958 = (0);
var G__20959 = (0);
seq__20897 = G__20956;
chunk__20898 = G__20957;
count__20899 = G__20958;
i__20900 = G__20959;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__20895);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_20947.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__20901 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__20902 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__20902);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__20901);
}}));
} else {
return promise_chain_20947.then((function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
}));

}
}
} else {
return null;
}
} else {
return null;
}
});

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__5002__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return ((goog.string.startsWith("clojure.",ns__$1)) || (goog.string.startsWith("goog.",ns__$1)));
}
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.core.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__5000__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__5000__auto____$1){
var or__5002__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20960 = arguments.length;
var i__5727__auto___20961 = (0);
while(true){
if((i__5727__auto___20961 < len__5726__auto___20960)){
args__5732__auto__.push((arguments[i__5727__auto___20961]));

var G__20962 = (i__5727__auto___20961 + (1));
i__5727__auto___20961 = G__20962;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__20905){
var vec__20906 = p__20905;
var n = cljs.core.nth.call(null,vec__20906,(0),null);
var mdata = cljs.core.nth.call(null,vec__20906,(1),null);
var temp__5823__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__20909 = cljs.core.seq.call(null,hooks);
var chunk__20910 = null;
var count__20911 = (0);
var i__20912 = (0);
while(true){
if((i__20912 < count__20911)){
var vec__20921 = cljs.core._nth.call(null,chunk__20910,i__20912);
var n = cljs.core.nth.call(null,vec__20921,(0),null);
var f = cljs.core.nth.call(null,vec__20921,(1),null);
var temp__5821__auto___20963 = cljs.core.reduce.call(null,((function (seq__20909,chunk__20910,count__20911,i__20912,vec__20921,n,f,hooks){
return (function (p1__20887_SHARP_,p2__20888_SHARP_){
if(cljs.core.truth_(p1__20887_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__20887_SHARP_,p2__20888_SHARP_);
} else {
return null;
}
});})(seq__20909,chunk__20910,count__20911,i__20912,vec__20921,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5821__auto___20963)){
var hook_20964 = temp__5821__auto___20963;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_20964,args);
}catch (e20924){if((e20924 instanceof Error)){
var e_20965 = e20924;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_20965);
} else {
throw e20924;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__20966 = seq__20909;
var G__20967 = chunk__20910;
var G__20968 = count__20911;
var G__20969 = (i__20912 + (1));
seq__20909 = G__20966;
chunk__20910 = G__20967;
count__20911 = G__20968;
i__20912 = G__20969;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__20909);
if(temp__5823__auto__){
var seq__20909__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20909__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20909__$1);
var G__20970 = cljs.core.chunk_rest.call(null,seq__20909__$1);
var G__20971 = c__5525__auto__;
var G__20972 = cljs.core.count.call(null,c__5525__auto__);
var G__20973 = (0);
seq__20909 = G__20970;
chunk__20910 = G__20971;
count__20911 = G__20972;
i__20912 = G__20973;
continue;
} else {
var vec__20925 = cljs.core.first.call(null,seq__20909__$1);
var n = cljs.core.nth.call(null,vec__20925,(0),null);
var f = cljs.core.nth.call(null,vec__20925,(1),null);
var temp__5821__auto___20974 = cljs.core.reduce.call(null,((function (seq__20909,chunk__20910,count__20911,i__20912,vec__20925,n,f,seq__20909__$1,temp__5823__auto__,hooks){
return (function (p1__20887_SHARP_,p2__20888_SHARP_){
if(cljs.core.truth_(p1__20887_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__20887_SHARP_,p2__20888_SHARP_);
} else {
return null;
}
});})(seq__20909,chunk__20910,count__20911,i__20912,vec__20925,n,f,seq__20909__$1,temp__5823__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5821__auto___20974)){
var hook_20975 = temp__5821__auto___20974;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_20975,args);
}catch (e20928){if((e20928 instanceof Error)){
var e_20976 = e20928;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_20976);
} else {
throw e20928;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__20977 = cljs.core.next.call(null,seq__20909__$1);
var G__20978 = null;
var G__20979 = (0);
var G__20980 = (0);
seq__20909 = G__20977;
chunk__20910 = G__20978;
count__20911 = G__20979;
i__20912 = G__20980;
continue;
}
} else {
return null;
}
}
break;
}
}));

(figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq20903){
var G__20904 = cljs.core.first.call(null,seq20903);
var seq20903__$1 = cljs.core.next.call(null,seq20903);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20904,seq20903__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__20929){
var vec__20930 = p__20929;
var k = cljs.core.nth.call(null,vec__20930,(0),null);
var v = cljs.core.nth.call(null,vec__20930,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__20889_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__20889_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__20889_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__20890_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__20890_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not.call(null,figwheel.core.load_warninged_code);
if(and__5000__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__5000__auto__;
}
})())?null:cljs.core.filter.call(null,(function (p1__20891_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__20891_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__20933_20981 = cljs.core.seq.call(null,to_reload);
var chunk__20934_20982 = null;
var count__20935_20983 = (0);
var i__20936_20984 = (0);
while(true){
if((i__20936_20984 < count__20935_20983)){
var ns_20985 = cljs.core._nth.call(null,chunk__20934_20982,i__20936_20984);
goog.require(cljs.core.name.call(null,ns_20985),true);


var G__20986 = seq__20933_20981;
var G__20987 = chunk__20934_20982;
var G__20988 = count__20935_20983;
var G__20989 = (i__20936_20984 + (1));
seq__20933_20981 = G__20986;
chunk__20934_20982 = G__20987;
count__20935_20983 = G__20988;
i__20936_20984 = G__20989;
continue;
} else {
var temp__5823__auto___20990 = cljs.core.seq.call(null,seq__20933_20981);
if(temp__5823__auto___20990){
var seq__20933_20991__$1 = temp__5823__auto___20990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20933_20991__$1)){
var c__5525__auto___20992 = cljs.core.chunk_first.call(null,seq__20933_20991__$1);
var G__20993 = cljs.core.chunk_rest.call(null,seq__20933_20991__$1);
var G__20994 = c__5525__auto___20992;
var G__20995 = cljs.core.count.call(null,c__5525__auto___20992);
var G__20996 = (0);
seq__20933_20981 = G__20993;
chunk__20934_20982 = G__20994;
count__20935_20983 = G__20995;
i__20936_20984 = G__20996;
continue;
} else {
var ns_20997 = cljs.core.first.call(null,seq__20933_20991__$1);
goog.require(cljs.core.name.call(null,ns_20997),true);


var G__20998 = cljs.core.next.call(null,seq__20933_20991__$1);
var G__20999 = null;
var G__21000 = (0);
var G__21001 = (0);
seq__20933_20981 = G__20998;
chunk__20934_20982 = G__20999;
count__20935_20983 = G__21000;
i__20936_20984 = G__21001;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_21002 = (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
figwheel.core.glog_info.call(null,figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5823__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5823__auto__)){
var not_loaded = temp__5823__auto__;
return figwheel.core.glog_info.call(null,figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_21002);
} else {
setTimeout(after_reload_fn_21002,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__20937 = cljs.core.seq.call(null,warnings);
var chunk__20938 = null;
var count__20939 = (0);
var i__20940 = (0);
while(true){
if((i__20940 < count__20939)){
var warning = cljs.core._nth.call(null,chunk__20938,i__20940);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__21003 = seq__20937;
var G__21004 = chunk__20938;
var G__21005 = count__20939;
var G__21006 = (i__20940 + (1));
seq__20937 = G__21003;
chunk__20938 = G__21004;
count__20939 = G__21005;
i__20940 = G__21006;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__20937);
if(temp__5823__auto__){
var seq__20937__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20937__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__20937__$1);
var G__21007 = cljs.core.chunk_rest.call(null,seq__20937__$1);
var G__21008 = c__5525__auto__;
var G__21009 = cljs.core.count.call(null,c__5525__auto__);
var G__21010 = (0);
seq__20937 = G__21007;
chunk__20938 = G__21008;
count__20939 = G__21009;
i__20940 = G__21010;
continue;
} else {
var warning = cljs.core.first.call(null,seq__20937__$1);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__21011 = cljs.core.next.call(null,seq__20937__$1);
var G__21012 = null;
var G__21013 = (0);
var G__21014 = (0);
seq__20937 = G__21011;
chunk__20938 = G__21012;
count__20939 = G__21013;
i__20940 = G__21014;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__20941){
var map__20942 = p__20941;
var map__20942__$1 = cljs.core.__destructure_map.call(null,map__20942);
var exception_data = map__20942__$1;
var file = cljs.core.get.call(null,map__20942__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__20942__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__20942__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__20892_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__20892_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return figwheel.core.glog_warning.call(null,figwheel.core.logger,(function (){var G__20943 = "Compile Exception - ";
var G__20943__$1 = (cljs.core.truth_((function (){var or__5002__auto__ = type;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return message;
}
})())?[G__20943,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__20943);
if(cljs.core.truth_(file)){
return [G__20943__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__20943__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
