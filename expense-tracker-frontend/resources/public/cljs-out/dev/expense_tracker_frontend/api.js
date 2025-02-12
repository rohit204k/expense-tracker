// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('expense_tracker_frontend.api');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('expense_tracker_frontend.state');
expense_tracker_frontend.api.base_url = "http://localhost:8000";
expense_tracker_frontend.api.register_user = (function expense_tracker_frontend$api$register_user(username,password){
return ajax.core.POST.call(null,[expense_tracker_frontend.api.base_url,"/register"].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"password","password",417022471),password], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
alert("Registration successful. Please login.");

return cljs.core.swap_BANG_.call(null,expense_tracker_frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),"login");
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (error){
return alert(["Registration failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,error,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"detail","detail",-1545345025)], null)))].join(''));
})], null));
});
expense_tracker_frontend.api.login_user = (function expense_tracker_frontend$api$login_user(username,password){
return ajax.core.POST.call(null,[expense_tracker_frontend.api.base_url,"/login"].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"password","password",417022471),password], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return cljs.core.swap_BANG_.call(null,expense_tracker_frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.get.call(null,response,"token"),new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"page","page",849072397),"dashboard",new cljs.core.Keyword(null,"dashboard-page","dashboard-page",1953346747),"add-expense");
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (error){
return alert("Login failed: Invalid credentials");
})], null));
});
expense_tracker_frontend.api.add_expense_api = (function expense_tracker_frontend$api$add_expense_api(expense){
return ajax.core.POST.call(null,[expense_tracker_frontend.api.base_url,"/expense"].join(''),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"params","params",710516235),expense,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,expense_tracker_frontend.state.app_state)))].join('')], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return alert("Expense added successfully");
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (error){
return alert("Failed to add expense");
})], null));
});
expense_tracker_frontend.api.fetch_expenses = (function expense_tracker_frontend$api$fetch_expenses(){
return ajax.core.GET.call(null,[expense_tracker_frontend.api.base_url,"/expenses"].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,expense_tracker_frontend.state.app_state)))].join('')], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return cljs.core.swap_BANG_.call(null,expense_tracker_frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"expenses","expenses",-63975799),new cljs.core.Keyword(null,"expenses","expenses",-63975799).cljs$core$IFn$_invoke$arity$1(response));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (error){
return alert("Failed to fetch expenses");
})], null));
});
expense_tracker_frontend.api.fetch_report = (function expense_tracker_frontend$api$fetch_report(on_success){
var year = parseInt(cljs.core.deref.call(null,expense_tracker_frontend.state.selected_year));
var month = parseInt(cljs.core.deref.call(null,expense_tracker_frontend.state.selected_month));
return ajax.core.GET.call(null,[expense_tracker_frontend.api.base_url,"/report"].join(''),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,expense_tracker_frontend.state.app_state)))].join('')], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"month","month",-1960248533),month], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
cljs.core.swap_BANG_.call(null,expense_tracker_frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"report","report",1394055010),response);

if(cljs.core.truth_(on_success)){
return on_success.call(null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (error){
cljs.core.println.call(null,"Fetch Report Error:",error);

return alert("Failed to fetch report data");
})], null));
});

//# sourceMappingURL=api.js.map
