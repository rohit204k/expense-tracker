// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.call(null,(function (headers,header_line){
if(goog.string.isEmptyOrWhitespace(header_line)){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return req.call(null,"xmlhttprequest").XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__11670,handler){
var map__11671 = p__11670;
var map__11671__$1 = cljs.core.__destructure_map.call(null,map__11671);
var uri = cljs.core.get.call(null,map__11671__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__11671__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__11671__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__11671__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__11671__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__11671__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__11671__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__11669_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__11669_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5823__auto___11688 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5823__auto___11688)){
var response_type_11689 = temp__5823__auto___11688;
(this$__$1.responseType = cljs.core.name.call(null,response_type_11689));
} else {
}

var seq__11672_11690 = cljs.core.seq.call(null,headers);
var chunk__11673_11691 = null;
var count__11674_11692 = (0);
var i__11675_11693 = (0);
while(true){
if((i__11675_11693 < count__11674_11692)){
var vec__11682_11694 = cljs.core._nth.call(null,chunk__11673_11691,i__11675_11693);
var k_11695 = cljs.core.nth.call(null,vec__11682_11694,(0),null);
var v_11696 = cljs.core.nth.call(null,vec__11682_11694,(1),null);
this$__$1.setRequestHeader(k_11695,v_11696);


var G__11697 = seq__11672_11690;
var G__11698 = chunk__11673_11691;
var G__11699 = count__11674_11692;
var G__11700 = (i__11675_11693 + (1));
seq__11672_11690 = G__11697;
chunk__11673_11691 = G__11698;
count__11674_11692 = G__11699;
i__11675_11693 = G__11700;
continue;
} else {
var temp__5823__auto___11701 = cljs.core.seq.call(null,seq__11672_11690);
if(temp__5823__auto___11701){
var seq__11672_11702__$1 = temp__5823__auto___11701;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11672_11702__$1)){
var c__5525__auto___11703 = cljs.core.chunk_first.call(null,seq__11672_11702__$1);
var G__11704 = cljs.core.chunk_rest.call(null,seq__11672_11702__$1);
var G__11705 = c__5525__auto___11703;
var G__11706 = cljs.core.count.call(null,c__5525__auto___11703);
var G__11707 = (0);
seq__11672_11690 = G__11704;
chunk__11673_11691 = G__11705;
count__11674_11692 = G__11706;
i__11675_11693 = G__11707;
continue;
} else {
var vec__11685_11708 = cljs.core.first.call(null,seq__11672_11702__$1);
var k_11709 = cljs.core.nth.call(null,vec__11685_11708,(0),null);
var v_11710 = cljs.core.nth.call(null,vec__11685_11708,(1),null);
this$__$1.setRequestHeader(k_11709,v_11710);


var G__11711 = cljs.core.next.call(null,seq__11672_11702__$1);
var G__11712 = null;
var G__11713 = (0);
var G__11714 = (0);
seq__11672_11690 = G__11711;
chunk__11673_11691 = G__11712;
count__11674_11692 = G__11713;
i__11675_11693 = G__11714;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5002__auto__ = body;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
}));

//# sourceMappingURL=xml_http_request.js.map
