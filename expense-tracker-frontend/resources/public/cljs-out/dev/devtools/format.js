// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_15580 = (function (value){
var x__5350__auto__ = (((value == null))?null:value);
var m__5351__auto__ = (devtools.format._header[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,value);
} else {
var m__5349__auto__ = (devtools.format._header["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_15580.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_15581 = (function (value){
var x__5350__auto__ = (((value == null))?null:value);
var m__5351__auto__ = (devtools.format._has_body[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,value);
} else {
var m__5349__auto__ = (devtools.format._has_body["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_15581.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_15582 = (function (value){
var x__5350__auto__ = (((value == null))?null:value);
var m__5351__auto__ = (devtools.format._body[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,value);
} else {
var m__5349__auto__ = (devtools.format._body["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_15582.call(null,value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o15583 = temp__5821__auto__;
var temp__5821__auto____$1 = (o15583["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o15584 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o15584["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o15585 = temp__5821__auto____$2;
return (o15585["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o15586 = temp__5821__auto__;
var temp__5821__auto____$1 = (o15586["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o15587 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o15587["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o15588 = temp__5821__auto____$2;
return (o15588["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o15589 = temp__5821__auto__;
var temp__5821__auto____$1 = (o15589["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o15590 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o15590["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o15591 = temp__5821__auto____$2;
return (o15591["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o15592 = temp__5821__auto__;
var temp__5821__auto____$1 = (o15592["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o15593 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o15593["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o15594 = temp__5821__auto____$2;
return (o15594["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o15595 = temp__5821__auto__;
var temp__5821__auto____$1 = (o15595["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o15596 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o15596["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o15597 = temp__5821__auto____$2;
return (o15597["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o15598 = temp__5821__auto__;
var temp__5821__auto____$1 = (o15598["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o15599 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o15599["markup"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o15600 = temp__5821__auto____$2;
return (o15600["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o15601 = temp__5821__auto__;
var temp__5821__auto____$1 = (o15601["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o15602 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o15602["markup"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o15603 = temp__5821__auto____$2;
return (o15603["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15605 = arguments.length;
var i__5727__auto___15606 = (0);
while(true){
if((i__5727__auto___15606 < len__5726__auto___15605)){
args__5732__auto__.push((arguments[i__5727__auto___15606]));

var G__15607 = (i__5727__auto___15606 + (1));
i__5727__auto___15606 = G__15607;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq15604){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15604));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15609 = arguments.length;
var i__5727__auto___15610 = (0);
while(true){
if((i__5727__auto___15610 < len__5726__auto___15609)){
args__5732__auto__.push((arguments[i__5727__auto___15610]));

var G__15611 = (i__5727__auto___15610 + (1));
i__5727__auto___15610 = G__15611;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq15608){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15608));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15613 = arguments.length;
var i__5727__auto___15614 = (0);
while(true){
if((i__5727__auto___15614 < len__5726__auto___15613)){
args__5732__auto__.push((arguments[i__5727__auto___15614]));

var G__15615 = (i__5727__auto___15614 + (1));
i__5727__auto___15614 = G__15615;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq15612){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15612));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15617 = arguments.length;
var i__5727__auto___15618 = (0);
while(true){
if((i__5727__auto___15618 < len__5726__auto___15617)){
args__5732__auto__.push((arguments[i__5727__auto___15618]));

var G__15619 = (i__5727__auto___15618 + (1));
i__5727__auto___15618 = G__15619;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq15616){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15616));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15621 = arguments.length;
var i__5727__auto___15622 = (0);
while(true){
if((i__5727__auto___15622 < len__5726__auto___15621)){
args__5732__auto__.push((arguments[i__5727__auto___15622]));

var G__15623 = (i__5727__auto___15622 + (1));
i__5727__auto___15622 = G__15623;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq15620){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15620));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15625 = arguments.length;
var i__5727__auto___15626 = (0);
while(true){
if((i__5727__auto___15626 < len__5726__auto___15625)){
args__5732__auto__.push((arguments[i__5727__auto___15626]));

var G__15627 = (i__5727__auto___15626 + (1));
i__5727__auto___15626 = G__15627;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq15624){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15624));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15629 = arguments.length;
var i__5727__auto___15630 = (0);
while(true){
if((i__5727__auto___15630 < len__5726__auto___15629)){
args__5732__auto__.push((arguments[i__5727__auto___15630]));

var G__15631 = (i__5727__auto___15630 + (1));
i__5727__auto___15630 = G__15631;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq15628){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15628));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15639 = arguments.length;
var i__5727__auto___15640 = (0);
while(true){
if((i__5727__auto___15640 < len__5726__auto___15639)){
args__5732__auto__.push((arguments[i__5727__auto___15640]));

var G__15641 = (i__5727__auto___15640 + (1));
i__5727__auto___15640 = G__15641;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__15635){
var vec__15636 = p__15635;
var state_override = cljs.core.nth.call(null,vec__15636,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__15632_SHARP_){
return cljs.core.merge.call(null,p1__15632_SHARP_,state_override);
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq15633){
var G__15634 = cljs.core.first.call(null,seq15633);
var seq15633__$1 = cljs.core.next.call(null,seq15633);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15634,seq15633__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15643 = arguments.length;
var i__5727__auto___15644 = (0);
while(true){
if((i__5727__auto___15644 < len__5726__auto___15643)){
args__5732__auto__.push((arguments[i__5727__auto___15644]));

var G__15645 = (i__5727__auto___15644 + (1));
i__5727__auto___15644 = G__15645;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq15642){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15642));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15648 = arguments.length;
var i__5727__auto___15649 = (0);
while(true){
if((i__5727__auto___15649 < len__5726__auto___15648)){
args__5732__auto__.push((arguments[i__5727__auto___15649]));

var G__15650 = (i__5727__auto___15649 + (1));
i__5727__auto___15649 = G__15650;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq15646){
var G__15647 = cljs.core.first.call(null,seq15646);
var seq15646__$1 = cljs.core.next.call(null,seq15646);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15647,seq15646__$1);
}));


//# sourceMappingURL=format.js.map
