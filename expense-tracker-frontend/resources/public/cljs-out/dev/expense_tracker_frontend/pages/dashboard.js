// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('expense_tracker_frontend.pages.dashboard');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('expense_tracker_frontend.state');
goog.require('expense_tracker_frontend.pages.expenses');
goog.require('expense_tracker_frontend.pages.report');
goog.require('expense_tracker_frontend.api');
expense_tracker_frontend.pages.dashboard.dashboard_page = (function expense_tracker_frontend$pages$dashboard$dashboard_page(){
var sub_page = reagent.core.cursor.call(null,expense_tracker_frontend.state.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard-page","dashboard-page",1953346747)], null));
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dashboard-container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"logout-btn-container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"logout-btn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,expense_tracker_frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),"login",new cljs.core.Keyword(null,"token","token",-1211463215),null,new cljs.core.Keyword(null,"username","username",1605666410),null);
})], null),"Logout"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),["Welcome, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,expense_tracker_frontend.state.app_state)))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dashboard-buttons"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"add-expense-btn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,expense_tracker_frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"dashboard-page","dashboard-page",1953346747),"add-expense");
})], null),"Add Expense"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"expenses-btn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.call(null,expense_tracker_frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"dashboard-page","dashboard-page",1953346747),"expenses");

return expense_tracker_frontend.api.fetch_expenses.call(null);
})], null),"Expenses List"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"report-btn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.call(null,expense_tracker_frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"dashboard-page","dashboard-page",1953346747),"report");

return expense_tracker_frontend.api.fetch_report.call(null,expense_tracker_frontend.pages.report.toggle_chart_refresh);
})], null),"Monthly Report"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__16047 = cljs.core.deref.call(null,sub_page);
switch (G__16047) {
case "add-expense":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expense_tracker_frontend.pages.expenses.add_expense_page], null);

break;
case "expenses":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expense_tracker_frontend.pages.expenses.expenses_page], null);

break;
case "report":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expense_tracker_frontend.pages.report.report_page], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Select an option"], null);

}
})()], null)], null);
});
});

//# sourceMappingURL=dashboard.js.map
