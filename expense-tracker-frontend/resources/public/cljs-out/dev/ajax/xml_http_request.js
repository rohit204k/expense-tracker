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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__10499,handler){
var map__10500 = p__10499;
var map__10500__$1 = cljs.core.__destructure_map.call(null,map__10500);
var uri = cljs.core.get.call(null,map__10500__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__10500__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__10500__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__10500__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__10500__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__10500__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__10500__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__10498_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__10498_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5823__auto___10517 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5823__auto___10517)){
var response_type_10518 = temp__5823__auto___10517;
(this$__$1.responseType = cljs.core.name.call(null,response_type_10518));
} else {
}

var seq__10501_10519 = cljs.core.seq.call(null,headers);
var chunk__10502_10520 = null;
var count__10503_10521 = (0);
var i__10504_10522 = (0);
while(true){
if((i__10504_10522 < count__10503_10521)){
var vec__10511_10523 = cljs.core._nth.call(null,chunk__10502_10520,i__10504_10522);
var k_10524 = cljs.core.nth.call(null,vec__10511_10523,(0),null);
var v_10525 = cljs.core.nth.call(null,vec__10511_10523,(1),null);
this$__$1.setRequestHeader(k_10524,v_10525);


var G__10526 = seq__10501_10519;
var G__10527 = chunk__10502_10520;
var G__10528 = count__10503_10521;
var G__10529 = (i__10504_10522 + (1));
seq__10501_10519 = G__10526;
chunk__10502_10520 = G__10527;
count__10503_10521 = G__10528;
i__10504_10522 = G__10529;
continue;
} else {
var temp__5823__auto___10530 = cljs.core.seq.call(null,seq__10501_10519);
if(temp__5823__auto___10530){
var seq__10501_10531__$1 = temp__5823__auto___10530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10501_10531__$1)){
var c__5525__auto___10532 = cljs.core.chunk_first.call(null,seq__10501_10531__$1);
var G__10533 = cljs.core.chunk_rest.call(null,seq__10501_10531__$1);
var G__10534 = c__5525__auto___10532;
var G__10535 = cljs.core.count.call(null,c__5525__auto___10532);
var G__10536 = (0);
seq__10501_10519 = G__10533;
chunk__10502_10520 = G__10534;
count__10503_10521 = G__10535;
i__10504_10522 = G__10536;
continue;
} else {
var vec__10514_10537 = cljs.core.first.call(null,seq__10501_10531__$1);
var k_10538 = cljs.core.nth.call(null,vec__10514_10537,(0),null);
var v_10539 = cljs.core.nth.call(null,vec__10514_10537,(1),null);
this$__$1.setRequestHeader(k_10538,v_10539);


var G__10540 = cljs.core.next.call(null,seq__10501_10531__$1);
var G__10541 = null;
var G__10542 = (0);
var G__10543 = (0);
seq__10501_10519 = G__10540;
chunk__10502_10520 = G__10541;
count__10503_10521 = G__10542;
i__10504_10522 = G__10543;
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
