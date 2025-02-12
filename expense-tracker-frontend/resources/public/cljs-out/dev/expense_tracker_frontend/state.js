// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('expense_tracker_frontend.state');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof expense_tracker_frontend !== 'undefined') && (typeof expense_tracker_frontend.state !== 'undefined') && (typeof expense_tracker_frontend.state.app_state !== 'undefined')){
} else {
expense_tracker_frontend.state.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"page","page",849072397),"login",new cljs.core.Keyword(null,"token","token",-1211463215),null,new cljs.core.Keyword(null,"username","username",1605666410),null,new cljs.core.Keyword(null,"expenses","expenses",-63975799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"report","report",1394055010),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dashboard-page","dashboard-page",1953346747),"add-expense"], null));
}
if((typeof expense_tracker_frontend !== 'undefined') && (typeof expense_tracker_frontend.state !== 'undefined') && (typeof expense_tracker_frontend.state.selected_month !== 'undefined')){
} else {
expense_tracker_frontend.state.selected_month = reagent.core.atom.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(((new Date()).getMonth() + (1))));
}
if((typeof expense_tracker_frontend !== 'undefined') && (typeof expense_tracker_frontend.state !== 'undefined') && (typeof expense_tracker_frontend.state.selected_year !== 'undefined')){
} else {
expense_tracker_frontend.state.selected_year = reagent.core.atom.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getFullYear()));
}

//# sourceMappingURL=state.js.map
