// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('expense_tracker_frontend.pages.report');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('expense_tracker_frontend.api');
goog.require('expense_tracker_frontend.components.charts');
goog.require('expense_tracker_frontend.state');
if((typeof expense_tracker_frontend !== 'undefined') && (typeof expense_tracker_frontend.pages !== 'undefined') && (typeof expense_tracker_frontend.pages.report !== 'undefined') && (typeof expense_tracker_frontend.pages.report.chart_refresh !== 'undefined')){
} else {
expense_tracker_frontend.pages.report.chart_refresh = cljs.core.atom.call(null,false);
}
expense_tracker_frontend.pages.report.toggle_chart_refresh = (function expense_tracker_frontend$pages$report$toggle_chart_refresh(){
return cljs.core.swap_BANG_.call(null,expense_tracker_frontend.pages.report.chart_refresh,cljs.core.not);
});
expense_tracker_frontend.pages.report.report_page = (function expense_tracker_frontend$pages$report$report_page(){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"reports-container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Monthly Expense Report"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"report-form"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Select Month: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,expense_tracker_frontend.state.selected_month),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12195_SHARP_){
return cljs.core.reset_BANG_.call(null,expense_tracker_frontend.state.selected_month,p1__12195_SHARP_.target.value);
})], null),(function (){var iter__5480__auto__ = (function expense_tracker_frontend$pages$report$report_page_$_iter__12197(s__12198){
return (new cljs.core.LazySeq(null,(function (){
var s__12198__$1 = s__12198;
while(true){
var temp__5823__auto__ = cljs.core.seq.call(null,s__12198__$1);
if(temp__5823__auto__){
var s__12198__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12198__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__12198__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__12200 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__12199 = (0);
while(true){
if((i__12199 < size__5479__auto__)){
var m = cljs.core._nth.call(null,c__5478__auto__,i__12199);
cljs.core.chunk_append.call(null,b__12200,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),m], null)));

var G__12201 = (i__12199 + (1));
i__12199 = G__12201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12200),expense_tracker_frontend$pages$report$report_page_$_iter__12197.call(null,cljs.core.chunk_rest.call(null,s__12198__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12200),null);
}
} else {
var m = cljs.core.first.call(null,s__12198__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),m], null)),expense_tracker_frontend$pages$report$report_page_$_iter__12197.call(null,cljs.core.rest.call(null,s__12198__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,cljs.core.range.call(null,(1),(13)));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804)," Select Year: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,expense_tracker_frontend.state.selected_year),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12196_SHARP_){
return cljs.core.reset_BANG_.call(null,expense_tracker_frontend.state.selected_year,p1__12196_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return expense_tracker_frontend.api.fetch_report.call(null,expense_tracker_frontend.pages.report.toggle_chart_refresh);
})], null),"Fetch Report"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"report","report",1394055010).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,expense_tracker_frontend.state.app_state)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),["Total Expenses for the Month: $",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current_month_total","current_month_total",394484373).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"report","report",1394055010).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,expense_tracker_frontend.state.app_state))))].join('')], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"report","report",1394055010).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,expense_tracker_frontend.state.app_state)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"chart-container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"chart-box"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expense_tracker_frontend.components.charts.pie_chart], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"chart-box"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expense_tracker_frontend.components.charts.line_chart], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No report data available."], null))], null);
});
});

//# sourceMappingURL=report.js.map
