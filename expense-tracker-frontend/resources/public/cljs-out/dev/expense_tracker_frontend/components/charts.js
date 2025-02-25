// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('expense_tracker_frontend.components.charts');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('expense_tracker_frontend.state');
expense_tracker_frontend.components.charts.generate_colors = (function expense_tracker_frontend$components$charts$generate_colors(num){
var colors = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#FF6384","#36A2EB","#FFCE56","#4BC0C0","#9966FF","#FF9F40","#E7E9ED"], null);
return cljs.core.take.call(null,num,cljs.core.cycle.call(null,colors));
});
expense_tracker_frontend.components.charts.pie_chart = (function expense_tracker_frontend$components$charts$pie_chart(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var report = new cljs.core.Keyword(null,"report","report",1394055010).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,expense_tracker_frontend.state.app_state));
var debit_split = new cljs.core.Keyword(null,"debit_percentage_split","debit_percentage_split",-549135350).cljs$core$IFn$_invoke$arity$1(report);
var labels = cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"subtype","subtype",-2092672993),debit_split));
var data = cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),debit_split));
var colors = cljs.core.clj__GT_js.call(null,expense_tracker_frontend.components.charts.generate_colors.call(null,cljs.core.count.call(null,debit_split)));
var ctx = document.getElementById("pieChart").getContext("2d");
return (new Chart(ctx,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"pie",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),labels,new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Debit Expense Split",new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),colors,new cljs.core.Keyword(null,"hoverBackgroundColor","hoverBackgroundColor",1000718427),colors], null)], null)], null)], null))));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Debit Expense Split"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"pieChart",new cljs.core.Keyword(null,"width","width",-384071477),"300",new cljs.core.Keyword(null,"height","height",1025178622),"300"], null)], null)], null);
})], null));
});
expense_tracker_frontend.components.charts.month_names = cljs.core.PersistentHashMap.fromArrays(["9","3","4","8","7","5","12","6","1","11","2","10"],["Sep","Mar","Apr","Aug","Jul","May","Dec","Jun","Jan","Nov","Feb","Oct"]);
expense_tracker_frontend.components.charts.line_chart = (function expense_tracker_frontend$components$charts$line_chart(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var report = new cljs.core.Keyword(null,"report","report",1394055010).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,expense_tracker_frontend.state.app_state));
var ctx = document.getElementById("lineChart").getContext("2d");
var month_keys = cljs.core.sort.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"monthly_credit_debit","monthly_credit_debit",-676138370).cljs$core$IFn$_invoke$arity$1(report)));
var months = cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__12190_SHARP_){
return cljs.core.get.call(null,expense_tracker_frontend.components.charts.month_names,cljs.core.name.call(null,p1__12190_SHARP_));
}),month_keys));
var credit_data = cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__12191_SHARP_){
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"monthly_credit_debit","monthly_credit_debit",-676138370).cljs$core$IFn$_invoke$arity$1(report),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12191_SHARP_,new cljs.core.Keyword(null,"Credit","Credit",1550580027)], null),(0));
}),month_keys));
var debit_data = cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__12192_SHARP_){
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"monthly_credit_debit","monthly_credit_debit",-676138370).cljs$core$IFn$_invoke$arity$1(report),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12192_SHARP_,new cljs.core.Keyword(null,"Debit","Debit",-2117693532)], null),(0));
}),month_keys));
return (new Chart(ctx,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),months,new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Credit",new cljs.core.Keyword(null,"data","data",-232669377),credit_data,new cljs.core.Keyword(null,"borderColor","borderColor",1372977096),"rgba(75, 192, 192, 1)",new cljs.core.Keyword(null,"fill","fill",883462889),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Debit",new cljs.core.Keyword(null,"data","data",-232669377),debit_data,new cljs.core.Keyword(null,"borderColor","borderColor",1372977096),"rgba(255, 99, 132, 1)",new cljs.core.Keyword(null,"fill","fill",883462889),false], null)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"responsive","responsive",-1606632318),true,new cljs.core.Keyword(null,"scales","scales",-1197224722),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),true,new cljs.core.Keyword(null,"text","text",-1790561697),"Month"], null),new cljs.core.Keyword(null,"ticks","ticks",-406190313),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoSkip","autoSkip",-86758424),false], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"beginAtZero","beginAtZero",-291981386),true], null)], null)], null)], null))));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Monthly Credit vs Debit Trends"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"lineChart",new cljs.core.Keyword(null,"width","width",-384071477),"300",new cljs.core.Keyword(null,"height","height",1025178622),"300"], null)], null)], null);
})], null));
});

//# sourceMappingURL=charts.js.map
