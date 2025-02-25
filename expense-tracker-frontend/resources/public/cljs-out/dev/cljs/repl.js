// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27542){
var map__27543 = p__27542;
var map__27543__$1 = cljs.core.__destructure_map.call(null,map__27543);
var m = map__27543__$1;
var n = cljs.core.get.call(null,map__27543__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__27543__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27544_27572 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27545_27573 = null;
var count__27546_27574 = (0);
var i__27547_27575 = (0);
while(true){
if((i__27547_27575 < count__27546_27574)){
var f_27576 = cljs.core._nth.call(null,chunk__27545_27573,i__27547_27575);
cljs.core.println.call(null,"  ",f_27576);


var G__27577 = seq__27544_27572;
var G__27578 = chunk__27545_27573;
var G__27579 = count__27546_27574;
var G__27580 = (i__27547_27575 + (1));
seq__27544_27572 = G__27577;
chunk__27545_27573 = G__27578;
count__27546_27574 = G__27579;
i__27547_27575 = G__27580;
continue;
} else {
var temp__5823__auto___27581 = cljs.core.seq.call(null,seq__27544_27572);
if(temp__5823__auto___27581){
var seq__27544_27582__$1 = temp__5823__auto___27581;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27544_27582__$1)){
var c__5525__auto___27583 = cljs.core.chunk_first.call(null,seq__27544_27582__$1);
var G__27584 = cljs.core.chunk_rest.call(null,seq__27544_27582__$1);
var G__27585 = c__5525__auto___27583;
var G__27586 = cljs.core.count.call(null,c__5525__auto___27583);
var G__27587 = (0);
seq__27544_27572 = G__27584;
chunk__27545_27573 = G__27585;
count__27546_27574 = G__27586;
i__27547_27575 = G__27587;
continue;
} else {
var f_27588 = cljs.core.first.call(null,seq__27544_27582__$1);
cljs.core.println.call(null,"  ",f_27588);


var G__27589 = cljs.core.next.call(null,seq__27544_27582__$1);
var G__27590 = null;
var G__27591 = (0);
var G__27592 = (0);
seq__27544_27572 = G__27589;
chunk__27545_27573 = G__27590;
count__27546_27574 = G__27591;
i__27547_27575 = G__27592;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27593 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27593);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27593)))?cljs.core.second.call(null,arglists_27593):arglists_27593));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27548_27594 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27549_27595 = null;
var count__27550_27596 = (0);
var i__27551_27597 = (0);
while(true){
if((i__27551_27597 < count__27550_27596)){
var vec__27560_27598 = cljs.core._nth.call(null,chunk__27549_27595,i__27551_27597);
var name_27599 = cljs.core.nth.call(null,vec__27560_27598,(0),null);
var map__27563_27600 = cljs.core.nth.call(null,vec__27560_27598,(1),null);
var map__27563_27601__$1 = cljs.core.__destructure_map.call(null,map__27563_27600);
var doc_27602 = cljs.core.get.call(null,map__27563_27601__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27603 = cljs.core.get.call(null,map__27563_27601__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27599);

cljs.core.println.call(null," ",arglists_27603);

if(cljs.core.truth_(doc_27602)){
cljs.core.println.call(null," ",doc_27602);
} else {
}


var G__27604 = seq__27548_27594;
var G__27605 = chunk__27549_27595;
var G__27606 = count__27550_27596;
var G__27607 = (i__27551_27597 + (1));
seq__27548_27594 = G__27604;
chunk__27549_27595 = G__27605;
count__27550_27596 = G__27606;
i__27551_27597 = G__27607;
continue;
} else {
var temp__5823__auto___27608 = cljs.core.seq.call(null,seq__27548_27594);
if(temp__5823__auto___27608){
var seq__27548_27609__$1 = temp__5823__auto___27608;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27548_27609__$1)){
var c__5525__auto___27610 = cljs.core.chunk_first.call(null,seq__27548_27609__$1);
var G__27611 = cljs.core.chunk_rest.call(null,seq__27548_27609__$1);
var G__27612 = c__5525__auto___27610;
var G__27613 = cljs.core.count.call(null,c__5525__auto___27610);
var G__27614 = (0);
seq__27548_27594 = G__27611;
chunk__27549_27595 = G__27612;
count__27550_27596 = G__27613;
i__27551_27597 = G__27614;
continue;
} else {
var vec__27564_27615 = cljs.core.first.call(null,seq__27548_27609__$1);
var name_27616 = cljs.core.nth.call(null,vec__27564_27615,(0),null);
var map__27567_27617 = cljs.core.nth.call(null,vec__27564_27615,(1),null);
var map__27567_27618__$1 = cljs.core.__destructure_map.call(null,map__27567_27617);
var doc_27619 = cljs.core.get.call(null,map__27567_27618__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27620 = cljs.core.get.call(null,map__27567_27618__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27616);

cljs.core.println.call(null," ",arglists_27620);

if(cljs.core.truth_(doc_27619)){
cljs.core.println.call(null," ",doc_27619);
} else {
}


var G__27621 = cljs.core.next.call(null,seq__27548_27609__$1);
var G__27622 = null;
var G__27623 = (0);
var G__27624 = (0);
seq__27548_27594 = G__27621;
chunk__27549_27595 = G__27622;
count__27550_27596 = G__27623;
i__27551_27597 = G__27624;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.call(null,"Spec");

var seq__27568 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27569 = null;
var count__27570 = (0);
var i__27571 = (0);
while(true){
if((i__27571 < count__27570)){
var role = cljs.core._nth.call(null,chunk__27569,i__27571);
var temp__5823__auto___27625__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5823__auto___27625__$1)){
var spec_27626 = temp__5823__auto___27625__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_27626));
} else {
}


var G__27627 = seq__27568;
var G__27628 = chunk__27569;
var G__27629 = count__27570;
var G__27630 = (i__27571 + (1));
seq__27568 = G__27627;
chunk__27569 = G__27628;
count__27570 = G__27629;
i__27571 = G__27630;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq.call(null,seq__27568);
if(temp__5823__auto____$1){
var seq__27568__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27568__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__27568__$1);
var G__27631 = cljs.core.chunk_rest.call(null,seq__27568__$1);
var G__27632 = c__5525__auto__;
var G__27633 = cljs.core.count.call(null,c__5525__auto__);
var G__27634 = (0);
seq__27568 = G__27631;
chunk__27569 = G__27632;
count__27570 = G__27633;
i__27571 = G__27634;
continue;
} else {
var role = cljs.core.first.call(null,seq__27568__$1);
var temp__5823__auto___27635__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5823__auto___27635__$2)){
var spec_27636 = temp__5823__auto___27635__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_27636));
} else {
}


var G__27637 = cljs.core.next.call(null,seq__27568__$1);
var G__27638 = null;
var G__27639 = (0);
var G__27640 = (0);
seq__27568 = G__27637;
chunk__27569 = G__27638;
count__27570 = G__27639;
i__27571 = G__27640;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map.call(null,o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__27643 = datafied_throwable;
var map__27643__$1 = cljs.core.__destructure_map.call(null,map__27643);
var via = cljs.core.get.call(null,map__27643__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__27643__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__27643__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__27644 = cljs.core.last.call(null,via);
var map__27644__$1 = cljs.core.__destructure_map.call(null,map__27644);
var type = cljs.core.get.call(null,map__27644__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__27644__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__27644__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__27645 = data;
var map__27645__$1 = cljs.core.__destructure_map.call(null,map__27645);
var problems = cljs.core.get.call(null,map__27645__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__27645__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__27645__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__27646 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__27646__$1 = cljs.core.__destructure_map.call(null,map__27646);
var top_data = map__27646__$1;
var source = cljs.core.get.call(null,map__27646__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__27647 = phase;
var G__27647__$1 = (((G__27647 instanceof cljs.core.Keyword))?G__27647.fqn:null);
switch (G__27647__$1) {
case "read-source":
var map__27648 = data;
var map__27648__$1 = cljs.core.__destructure_map.call(null,map__27648);
var line = cljs.core.get.call(null,map__27648__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__27648__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__27649 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__27649__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__27649,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27649);
var G__27649__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__27649__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27649__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__27649__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27649__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27650 = top_data;
var G__27650__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__27650,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27650);
var G__27650__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__27650__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27650__$1);
var G__27650__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__27650__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27650__$2);
var G__27650__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__27650__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27650__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__27650__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27650__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27651 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__27651,(0),null);
var method = cljs.core.nth.call(null,vec__27651,(1),null);
var file = cljs.core.nth.call(null,vec__27651,(2),null);
var line = cljs.core.nth.call(null,vec__27651,(3),null);
var G__27654 = top_data;
var G__27654__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__27654,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__27654);
var G__27654__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__27654__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__27654__$1);
var G__27654__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.call(null,G__27654__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27654__$2);
var G__27654__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__27654__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27654__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__27654__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27654__$4;
}

break;
case "execution":
var vec__27655 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__27655,(0),null);
var method = cljs.core.nth.call(null,vec__27655,(1),null);
var file = cljs.core.nth.call(null,vec__27655,(2),null);
var line = cljs.core.nth.call(null,vec__27655,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__27642_SHARP_){
var or__5002__auto__ = (p1__27642_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__27642_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__27658 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__27658__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__27658,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__27658);
var G__27658__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__27658__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27658__$1);
var G__27658__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.call(null,G__27658__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27658__$2);
var G__27658__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__27658__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__27658__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__27658__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27658__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27647__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27662){
var map__27663 = p__27662;
var map__27663__$1 = cljs.core.__destructure_map.call(null,map__27663);
var triage_data = map__27663__$1;
var phase = cljs.core.get.call(null,map__27663__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__27663__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__27663__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__27663__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__27663__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__27663__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__27663__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__27663__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__27664 = phase;
var G__27664__$1 = (((G__27664 instanceof cljs.core.Keyword))?G__27664.fqn:null);
switch (G__27664__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27665_27674 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27666_27675 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27667_27676 = true;
var _STAR_print_fn_STAR__temp_val__27668_27677 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27667_27676);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27668_27677);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__27660_SHARP_){
return cljs.core.dissoc.call(null,p1__27660_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27666_27675);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27665_27674);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27669_27678 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27670_27679 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27671_27680 = true;
var _STAR_print_fn_STAR__temp_val__27672_27681 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27671_27680);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27672_27681);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__27661_SHARP_){
return cljs.core.dissoc.call(null,p1__27661_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27670_27679);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27669_27678);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27664__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
