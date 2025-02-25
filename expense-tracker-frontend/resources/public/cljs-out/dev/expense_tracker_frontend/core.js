// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('expense_tracker_frontend.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.dom');
goog.require('expense_tracker_frontend.state');
goog.require('expense_tracker_frontend.pages.auth');
goog.require('expense_tracker_frontend.pages.dashboard');
expense_tracker_frontend.core.multiply = (function expense_tracker_frontend$core$multiply(a,b){
return (a * b);
});
expense_tracker_frontend.core.current_page = (function expense_tracker_frontend$core$current_page(){
var G__15035 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,expense_tracker_frontend.state.app_state));
switch (G__15035) {
case "login":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expense_tracker_frontend.pages.auth.login_page], null);

break;
case "register":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expense_tracker_frontend.pages.auth.registration_page], null);

break;
case "dashboard":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expense_tracker_frontend.pages.dashboard.dashboard_page], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expense_tracker_frontend.pages.auth.login_page], null);

}
});
expense_tracker_frontend.core.get_app_element = (function expense_tracker_frontend$core$get_app_element(){
return goog.dom.getElement("app");
});
expense_tracker_frontend.core.hello_world = (function expense_tracker_frontend$core$hello_world(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,expense_tracker_frontend.state.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Edit this in src/expense_tracker_frontend/core.cljs and watch it change!"], null)], null);
});
expense_tracker_frontend.core.mount = (function expense_tracker_frontend$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expense_tracker_frontend.core.current_page], null),el);
});
expense_tracker_frontend.core.mount_app_element = (function expense_tracker_frontend$core$mount_app_element(){
var temp__5823__auto__ = expense_tracker_frontend.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5823__auto__)){
var el = temp__5823__auto__;
return expense_tracker_frontend.core.mount.call(null,el);
} else {
return null;
}
});
expense_tracker_frontend.core.mount_app_element.call(null);
expense_tracker_frontend.core.on_reload = (function expense_tracker_frontend$core$on_reload(){
return expense_tracker_frontend.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
