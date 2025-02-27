// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs_test_display.favicon');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.object');
goog.scope(function(){
cljs_test_display.favicon.goog$module$goog$object = goog.module.get('goog.object');
});

/**
 * @define {string}
 */
cljs_test_display.favicon.link_id = goog.define("cljs_test_display.favicon.link_id","cljs-test-favicon");
cljs_test_display.favicon.html_collection__GT_seq = (function cljs_test_display$favicon$html_collection__GT_seq(html_coll){
return cljs.core.map.call(null,(function (p1__12532_SHARP_){
return html_coll.item(p1__12532_SHARP_);
}),cljs.core.range.call(null,html_coll.length));
});
cljs_test_display.favicon.find_existing_link = (function cljs_test_display$favicon$find_existing_link(){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (l){
var temp__5823__auto__ = l.rel;
if(cljs.core.truth_(temp__5823__auto__)){
var rel = temp__5823__auto__;
return cljs.core.some.call(null,(function (p1__12533_SHARP_){
return cljs.core._EQ_.call(null,"icon",p1__12533_SHARP_);
}),clojure.string.split.call(null,rel,/\s/));
} else {
return null;
}
}),cljs_test_display.favicon.html_collection__GT_seq.call(null,goog.dom.getElementsByTagName("link"))));
});
cljs_test_display.favicon.init_link_BANG_ = (function cljs_test_display$favicon$init_link_BANG_(l){
(l.id = cljs_test_display.favicon.link_id);

(l.rel = "shortcut icon");

(l.type = "image/png");

return (l.href = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIElEQVQ4T2NMS0v7z0ABYBw1gGE0DBhGwwCYh4ZBOgAAcQUjIUXh8RYAAAAASUVORK5CYII=");
});
cljs_test_display.favicon.get_or_create_BANG_ = (function cljs_test_display$favicon$get_or_create_BANG_(){
var temp__5821__auto__ = goog.dom.getElement(cljs_test_display.favicon.link_id);
if(cljs.core.truth_(temp__5821__auto__)){
var favicon = temp__5821__auto__;
return favicon;
} else {
var temp__5821__auto____$1 = cljs_test_display.favicon.find_existing_link.call(null);
if(cljs.core.truth_(temp__5821__auto____$1)){
var favicon = temp__5821__auto____$1;
cljs_test_display.favicon.init_link_BANG_.call(null,favicon);

return favicon;
} else {
var favicon = goog.dom.createDom("link");
cljs_test_display.favicon.init_link_BANG_.call(null,favicon);

goog.dom.appendChild(cljs_test_display.favicon.goog$module$goog$object.get.call(null,goog.dom.getDocument(),"head"),favicon);

return favicon;
}
}
});
cljs_test_display.favicon.color_data_url = (function cljs_test_display$favicon$color_data_url(color,size){
var cvs = goog.dom.createDom("canvas",({"width": size, "height": size}));
var ctx_12534 = cvs.getContext("2d");
(ctx_12534.fillStyle = color);

ctx_12534.fillRect((0),(0),size,size);

return cvs.toDataURL();
});
cljs_test_display.favicon.change_to_color = (function cljs_test_display$favicon$change_to_color(color){
return (cljs_test_display.favicon.get_or_create_BANG_.call(null).href = cljs_test_display.favicon.color_data_url.call(null,color,(16)));
});
cljs_test_display.favicon.green = (function cljs_test_display$favicon$green(){
return cljs_test_display.favicon.change_to_color.call(null,"#0d0");
});
cljs_test_display.favicon.red = (function cljs_test_display$favicon$red(){
return cljs_test_display.favicon.change_to_color.call(null,"#d00");
});

//# sourceMappingURL=favicon.js.map
