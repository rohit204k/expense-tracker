// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('figwheel.main.css_reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.cssom');
goog.require('goog.events');
goog.require('figwheel.repl.logging');
goog.require('goog.Promise');
goog.require('goog.debug.Console');
goog.require('goog.object');
goog.scope(function(){
figwheel.main.css_reload.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.main !== 'undefined') && (typeof figwheel.main.css_reload !== 'undefined') && (typeof figwheel.main.css_reload.logger !== 'undefined')){
} else {
figwheel.main.css_reload.logger = figwheel.repl.logging.get_logger.call(null,"Figwheel CSS Reload");
}

figwheel.main.css_reload.console_logging = (function figwheel$main$css_reload$console_logging(){
if(cljs.core.truth_(figwheel.main.css_reload.goog$module$goog$object.get.call(null,goog.debug.Console,"instance"))){
} else {
var c_21224 = (new goog.debug.Console());
var G__21214_21225 = c_21224.getFormatter();
figwheel.main.css_reload.goog$module$goog$object.set.call(null,G__21214_21225,"showAbsoluteTime",false);

figwheel.main.css_reload.goog$module$goog$object.set.call(null,G__21214_21225,"showRelativeTime",false);


figwheel.main.css_reload.goog$module$goog$object.set.call(null,goog.debug.Console,"instance",c_21224);

}

var temp__5823__auto__ = figwheel.main.css_reload.goog$module$goog$object.get.call(null,goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5823__auto__)){
var console_instance = temp__5823__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.main.css_reload.console_logging', figwheel.main.css_reload.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.main !== 'undefined') && (typeof figwheel.main.css_reload !== 'undefined') && (typeof figwheel.main.css_reload.log_console !== 'undefined')){
} else {
figwheel.main.css_reload.log_console = figwheel.main.css_reload.console_logging.call(null);
}

figwheel.main.css_reload.add_cache_buster = (function figwheel$main$css_reload$add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});

figwheel.main.css_reload.truncate_url = (function figwheel$main$css_reload$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});

figwheel.main.css_reload.matches_file_QMARK_ = (function figwheel$main$css_reload$matches_file_QMARK_(file,stylesheet){
var temp__5823__auto__ = stylesheet.href;
if(cljs.core.truth_(temp__5823__auto__)){
var href = temp__5823__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__21210_SHARP_,p2__21211_SHARP_){
if(cljs.core._EQ_.call(null,p1__21210_SHARP_,p2__21211_SHARP_)){
return p1__21210_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.main.css_reload.truncate_url.call(null,href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stylesheet","stylesheet",-1792612426),stylesheet,new cljs.core.Keyword(null,"link-href","link-href",-250644450),href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.main.css_reload.truncate_url.call(null,href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});

figwheel.main.css_reload.root_stylesheet = (function figwheel$main$css_reload$root_stylesheet(stylesheet){
while(true){
var temp__5821__auto__ = stylesheet.parentStyleSheet;
if(cljs.core.truth_(temp__5821__auto__)){
var parent_stylesheet = temp__5821__auto__;
var G__21226 = parent_stylesheet;
stylesheet = G__21226;
continue;
} else {
return stylesheet;
}
break;
}
});

figwheel.main.css_reload.get_correct_link = (function figwheel$main$css_reload$get_correct_link(file){
var temp__5823__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__21215){
var map__21216 = p__21215;
var map__21216__$1 = cljs.core.__destructure_map.call(null,map__21216);
var match_length = cljs.core.get.call(null,map__21216__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__21216__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__21212_SHARP_){
return figwheel.main.css_reload.matches_file_QMARK_.call(null,file,p1__21212_SHARP_);
}),goog.cssom.getAllCssStyleSheets())));
if(cljs.core.truth_(temp__5823__auto__)){
var res = temp__5823__auto__;
return figwheel.main.css_reload.root_stylesheet.call(null,new cljs.core.Keyword(null,"stylesheet","stylesheet",-1792612426).cljs$core$IFn$_invoke$arity$1(res)).ownerNode;
} else {
return null;
}
});

figwheel.main.css_reload.clone_link = (function figwheel$main$css_reload$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.main.css_reload.add_cache_buster.call(null,url));

return clone;
});

figwheel.main.css_reload.add_link_to_document = (function figwheel$main$css_reload$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
goog.events.listenOnce(klone,"load",(function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}));

if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
return parent.appendChild(klone);
} else {
return parent.insertBefore(klone,orig_link.nextSibling);
}
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.main !== 'undefined') && (typeof figwheel.main.css_reload !== 'undefined') && (typeof figwheel.main.css_reload.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.main.css_reload.reload_css_deferred_chain = cljs.core.atom.call(null,(new goog.Promise((function (p1__21213_SHARP_){
return p1__21213_SHARP_.call(null,cljs.core.PersistentVector.EMPTY);
}))));
}

figwheel.main.css_reload.reload_css_file = (function figwheel$main$css_reload$reload_css_file(file,fin){
var temp__5821__auto__ = figwheel.main.css_reload.get_correct_link.call(null,file);
if(cljs.core.truth_(temp__5821__auto__)){
var link = temp__5821__auto__;
return figwheel.main.css_reload.add_link_to_document.call(null,link,figwheel.main.css_reload.clone_link.call(null,link,link.href),(function (){
return fin.call(null,file);
}));
} else {
return fin.call(null,null);
}
});

figwheel.main.css_reload.conj_reload_prom = (function figwheel$main$css_reload$conj_reload_prom(prom,file){
return prom.then((function (files){
return (new goog.Promise((function (succ,fail){
return figwheel.main.css_reload.reload_css_file.call(null,file,(function (f){
return succ.call(null,(cljs.core.truth_(f)?cljs.core.conj.call(null,files,f):files));
}));
})));
}));
});

figwheel.main.css_reload.dispatch_on_css_load = (function figwheel$main$css_reload$dispatch_on_css_load(files){
return document.body.dispatchEvent((function (){var G__21217 = (new Event("figwheel.after-css-load",document.body));
figwheel.main.css_reload.goog$module$goog$object.add.call(null,G__21217,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css-files","css-files",-502009265),files], null));

return G__21217;
})());
});

figwheel.main.css_reload.reload_css_files_STAR_ = (function figwheel$main$css_reload$reload_css_files_STAR_(files,on_cssload){
var seq__21218_21227 = cljs.core.seq.call(null,files);
var chunk__21219_21228 = null;
var count__21220_21229 = (0);
var i__21221_21230 = (0);
while(true){
if((i__21221_21230 < count__21220_21229)){
var file_21231 = cljs.core._nth.call(null,chunk__21219_21228,i__21221_21230);
cljs.core.swap_BANG_.call(null,figwheel.main.css_reload.reload_css_deferred_chain,figwheel.main.css_reload.conj_reload_prom,file_21231);


var G__21232 = seq__21218_21227;
var G__21233 = chunk__21219_21228;
var G__21234 = count__21220_21229;
var G__21235 = (i__21221_21230 + (1));
seq__21218_21227 = G__21232;
chunk__21219_21228 = G__21233;
count__21220_21229 = G__21234;
i__21221_21230 = G__21235;
continue;
} else {
var temp__5823__auto___21236 = cljs.core.seq.call(null,seq__21218_21227);
if(temp__5823__auto___21236){
var seq__21218_21237__$1 = temp__5823__auto___21236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21218_21237__$1)){
var c__5525__auto___21238 = cljs.core.chunk_first.call(null,seq__21218_21237__$1);
var G__21239 = cljs.core.chunk_rest.call(null,seq__21218_21237__$1);
var G__21240 = c__5525__auto___21238;
var G__21241 = cljs.core.count.call(null,c__5525__auto___21238);
var G__21242 = (0);
seq__21218_21227 = G__21239;
chunk__21219_21228 = G__21240;
count__21220_21229 = G__21241;
i__21221_21230 = G__21242;
continue;
} else {
var file_21243 = cljs.core.first.call(null,seq__21218_21237__$1);
cljs.core.swap_BANG_.call(null,figwheel.main.css_reload.reload_css_deferred_chain,figwheel.main.css_reload.conj_reload_prom,file_21243);


var G__21244 = cljs.core.next.call(null,seq__21218_21237__$1);
var G__21245 = null;
var G__21246 = (0);
var G__21247 = (0);
seq__21218_21227 = G__21244;
chunk__21219_21228 = G__21245;
count__21220_21229 = G__21246;
i__21221_21230 = G__21247;
continue;
}
} else {
}
}
break;
}

return cljs.core.swap_BANG_.call(null,figwheel.main.css_reload.reload_css_deferred_chain,(function (prom){
return prom.then((function (loaded_files){
if(cljs.core.truth_(cljs.core.not_empty.call(null,loaded_files))){
figwheel.repl.logging.info.call(null,figwheel.main.css_reload.logger,["loaded ",cljs.core.pr_str.call(null,loaded_files)].join(''));

figwheel.main.css_reload.dispatch_on_css_load.call(null,loaded_files);
} else {
}

var temp__5823__auto___21248 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,loaded_files),cljs.core.set.call(null,files)));
if(cljs.core.truth_(temp__5823__auto___21248)){
var not_loaded_21249 = temp__5823__auto___21248;
figwheel.repl.logging.warning.call(null,figwheel.main.css_reload.logger,["Unable to reload ",cljs.core.pr_str.call(null,not_loaded_21249)].join(''));
} else {
}

return cljs.core.PersistentVector.EMPTY;
}));
}));
});

figwheel.main.css_reload.reload_css_files = (function figwheel$main$css_reload$reload_css_files(p__21222,files){
var map__21223 = p__21222;
var map__21223__$1 = cljs.core.__destructure_map.call(null,map__21223);
var on_cssload = cljs.core.get.call(null,map__21223__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if((!((goog.global.document == null)))){
var temp__5823__auto__ = cljs.core.not_empty.call(null,cljs.core.distinct.call(null,files));
if(cljs.core.truth_(temp__5823__auto__)){
var files_SINGLEQUOTE_ = temp__5823__auto__;
return figwheel.main.css_reload.reload_css_files_STAR_.call(null,files_SINGLEQUOTE_,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

figwheel.main.css_reload.reload_css_files_remote = (function figwheel$main$css_reload$reload_css_files_remote(files_array){
figwheel.main.css_reload.reload_css_files.call(null,cljs.core.PersistentArrayMap.EMPTY,files_array);

return true;
});
goog.exportSymbol('figwheel.main.css_reload.reload_css_files_remote', figwheel.main.css_reload.reload_css_files_remote);

//# sourceMappingURL=css_reload.js.map
