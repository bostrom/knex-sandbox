if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}


;(function(){
var $JSCompiler_prototypeAlias$$, $goog$global$$ = this;
function $goog$typeOf$$($value$$57$$) {
  var $s$$104$$ = typeof $value$$57$$;
  if ("object" == $s$$104$$) {
    if ($value$$57$$) {
      if ($value$$57$$ instanceof Array) {
        return "array";
      }
      if ($value$$57$$ instanceof Object) {
        return $s$$104$$;
      }
      var $className$$1$$ = Object.prototype.toString.call($value$$57$$);
      if ("[object Window]" == $className$$1$$) {
        return "object";
      }
      if ("[object Array]" == $className$$1$$ || "number" == typeof $value$$57$$.length && "undefined" != typeof $value$$57$$.splice && "undefined" != typeof $value$$57$$.propertyIsEnumerable && !$value$$57$$.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == $className$$1$$ || "undefined" != typeof $value$$57$$.call && "undefined" != typeof $value$$57$$.propertyIsEnumerable && !$value$$57$$.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == $s$$104$$ && "undefined" == typeof $value$$57$$.call) {
      return "object";
    }
  }
  return $s$$104$$;
}
function $goog$getUid$$($obj$$21$$) {
  return $obj$$21$$[$goog$UID_PROPERTY_$$] || ($obj$$21$$[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$);
}
var $goog$UID_PROPERTY_$$ = "closure_uid_" + (1E9 * Math.random() >>> 0), $goog$uidCounter_$$ = 0;
function $goog$bindNative_$$($fn$$1$$, $selfObj$$1$$, $var_args$$29$$) {
  return $fn$$1$$.call.apply($fn$$1$$.bind, arguments);
}
function $goog$bindJs_$$($fn$$2$$, $selfObj$$2$$, $var_args$$30$$) {
  if (!$fn$$2$$) {
    throw Error();
  }
  if (2 < arguments.length) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $var_args$$30$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($var_args$$30$$, $boundArgs$$);
      return $fn$$2$$.apply($selfObj$$2$$, $var_args$$30$$);
    };
  }
  return function() {
    return $fn$$2$$.apply($selfObj$$2$$, arguments);
  };
}
function $goog$bind$$($fn$$3$$, $selfObj$$3$$, $var_args$$31$$) {
  $goog$bind$$ = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $goog$bindNative_$$ : $goog$bindJs_$$;
  return $goog$bind$$.apply(null, arguments);
}
;function $goog$string$buildString$$($var_args$$36$$) {
  return Array.prototype.join.call(arguments, "");
}
;function $goog$object$forEach$$($obj$$26$$, $f$$346$$) {
  for (var $key$$23$$ in $obj$$26$$) {
    $f$$346$$.call(void 0, $obj$$26$$[$key$$23$$], $key$$23$$, $obj$$26$$);
  }
}
;function $goog$string$StringBuffer$$($opt_a1$$, $var_args$$41$$) {
  null != $opt_a1$$ && this.append.apply(this, arguments);
}
$JSCompiler_prototypeAlias$$ = $goog$string$StringBuffer$$.prototype;
$JSCompiler_prototypeAlias$$.$buffer_$ = "";
$JSCompiler_prototypeAlias$$.set = function($s$$114$$) {
  this.$buffer_$ = "" + $s$$114$$;
};
$JSCompiler_prototypeAlias$$.append = function($a1$$, $opt_a2$$, $var_args$$42$$) {
  this.$buffer_$ += $a1$$;
  if (null != $opt_a2$$) {
    for (var $i$$311$$ = 1;$i$$311$$ < arguments.length;$i$$311$$++) {
      this.$buffer_$ += arguments[$i$$311$$];
    }
  }
  return this;
};
$JSCompiler_prototypeAlias$$.clear = function() {
  this.$buffer_$ = "";
};
$JSCompiler_prototypeAlias$$.toString = function() {
  return this.$buffer_$;
};
function $goog$array$sort$$($arr$$50$$, $opt_compareFn$$1$$) {
  $arr$$50$$.sort($opt_compareFn$$1$$ || $goog$array$defaultCompare$$);
}
function $goog$array$stableSort$$($arr$$51$$, $opt_compareFn$$2$$) {
  for (var $i$$331$$ = 0;$i$$331$$ < $arr$$51$$.length;$i$$331$$++) {
    $arr$$51$$[$i$$331$$] = {index:$i$$331$$, value:$arr$$51$$[$i$$331$$]};
  }
  var $valueCompareFn$$ = $opt_compareFn$$2$$ || $goog$array$defaultCompare$$;
  $goog$array$sort$$($arr$$51$$, function($arr$$51$$, $opt_compareFn$$2$$) {
    return $valueCompareFn$$($arr$$51$$.value, $opt_compareFn$$2$$.value) || $arr$$51$$.index - $opt_compareFn$$2$$.index;
  });
  for ($i$$331$$ = 0;$i$$331$$ < $arr$$51$$.length;$i$$331$$++) {
    $arr$$51$$[$i$$331$$] = $arr$$51$$[$i$$331$$].value;
  }
}
function $goog$array$defaultCompare$$($a$$1396$$, $b$$971$$) {
  return $a$$1396$$ > $b$$971$$ ? 1 : $a$$1396$$ < $b$$971$$ ? -1 : 0;
}
;if ("undefined" === typeof $cljs$core$_STAR_print_fn_STAR_$$) {
  var $cljs$core$_STAR_print_fn_STAR_$$ = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
var $cljs$core$_STAR_print_newline_STAR_$$ = !0, $cljs$core$_STAR_print_level_STAR_$$ = null;
if ("undefined" === typeof $cljs$core$_STAR_loaded_libs_STAR_$$) {
  var $cljs$core$_STAR_loaded_libs_STAR_$$ = null
}
function $cljs$core$pr_opts$$() {
  return new $cljs$core$PersistentArrayMap$$(null, 5, [$cljs$core$constant$0keyword$0flush_DASH_on_DASH_newline$$, !0, $cljs$core$constant$0keyword$0readably$$, !0, $cljs$core$constant$0keyword$0meta$$, !1, $cljs$core$constant$0keyword$0dup$$, !1, $cljs$core$constant$0keyword$0print_DASH_length$$, null], null);
}
function $cljs$core$truth_$$($x$$76$$) {
  return null != $x$$76$$ && !1 !== $x$$76$$;
}
function $cljs$core$array_QMARK_$$($x$$79$$) {
  return $x$$79$$ instanceof Array;
}
function $cljs$core$not$$($x$$80$$) {
  return $cljs$core$truth_$$($x$$80$$) ? !1 : !0;
}
function $cljs$core$native_satisfies_QMARK_$$($p$$65$$, $x$$84$$) {
  return $p$$65$$[$goog$typeOf$$(null == $x$$84$$ ? null : $x$$84$$)] ? !0 : $p$$65$$._ ? !0 : !1;
}
function $cljs$core$type$$($x$$86$$) {
  return null == $x$$86$$ ? null : $x$$86$$.constructor;
}
function $cljs$core$missing_protocol$$($proto$$1$$, $obj$$65$$) {
  var $ty_ty__$1$$ = $cljs$core$type$$($obj$$65$$), $ty_ty__$1$$ = $cljs$core$truth_$$($cljs$core$truth_$$($ty_ty__$1$$) ? $ty_ty__$1$$.$cljs$lang$type$ : $ty_ty__$1$$) ? $ty_ty__$1$$.$cljs$lang$ctorStr$ : $goog$typeOf$$($obj$$65$$);
  return Error(["No protocol method ", $proto$$1$$, " defined for type ", $ty_ty__$1$$, ": ", $obj$$65$$].join(""));
}
function $cljs$core$type__GT_str$$($ty$$1$$) {
  var $temp__4423__auto__$$ = $ty$$1$$.$cljs$lang$ctorStr$;
  return $cljs$core$truth_$$($temp__4423__auto__$$) ? $temp__4423__auto__$$ : "" + $cljs$core$str$$($ty$$1$$);
}
var $cljs$core$ITER_SYMBOL$$ = "undefined" !== typeof Symbol && "function" === $goog$typeOf$$(Symbol) ? Symbol.iterator : "@@iterator";
function $cljs$core$aclone$$($arr$$60$$) {
  for (var $len$$ = $arr$$60$$.length, $new_arr$$ = Array($len$$), $i_17722$$ = 0;;) {
    if ($i_17722$$ < $len$$) {
      $new_arr$$[$i_17722$$] = $arr$$60$$[$i_17722$$], $i_17722$$ += 1;
    } else {
      break;
    }
  }
  return $new_arr$$;
}
function $cljs$core$into_array$$() {
  switch(arguments.length) {
    case 1:
      return $cljs$core$into_array$cljs$0core$0IFn$0_invoke$0arity$02$$(arguments[0]);
    case 2:
      return $cljs$core$into_array$cljs$0core$0IFn$0_invoke$0arity$02$$(arguments[1]);
    default:
      throw Error([$cljs$core$str$$("Invalid arity: "), $cljs$core$str$$(arguments.length)].join(""));;
  }
}
function $cljs$core$into_array$cljs$0core$0IFn$0_invoke$0arity$01$$($aseq$$) {
  return $cljs$core$into_array$cljs$0core$0IFn$0_invoke$0arity$02$$($aseq$$);
}
function $cljs$core$into_array$cljs$0core$0IFn$0_invoke$0arity$02$$($aseq$$1$$) {
  function $G__17747$$($aseq$$1$$, $G__17747$$) {
    $aseq$$1$$.push($G__17747$$);
    return $aseq$$1$$;
  }
  var $G__17748$$ = [];
  return $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$ ? $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($G__17747$$, $G__17748$$, $aseq$$1$$) : $cljs$core$reduce$$.call(null, $G__17747$$, $G__17748$$, $aseq$$1$$);
}
var $cljs$core$Fn$$ = {}, $cljs$core$IFn$$ = {}, $cljs$core$ICounted$$ = {}, $cljs$core$_count$$ = function $cljs$core$_count$$($coll$$) {
  if ($coll$$ ? $coll$$.$cljs$core$ICounted$_count$arity$1$ : $coll$$) {
    return $coll$$.$cljs$core$ICounted$_count$arity$1$($coll$$);
  }
  var $JSCompiler_inline_result$$451_or__4251__auto__$$inline_555_or__4251__auto____$1$$inline_556$$;
  $JSCompiler_inline_result$$451_or__4251__auto__$$inline_555_or__4251__auto____$1$$inline_556$$ = $cljs$core$_count$$[$goog$typeOf$$(null == $coll$$ ? null : $coll$$)];
  if (!$JSCompiler_inline_result$$451_or__4251__auto__$$inline_555_or__4251__auto____$1$$inline_556$$ && ($JSCompiler_inline_result$$451_or__4251__auto__$$inline_555_or__4251__auto____$1$$inline_556$$ = $cljs$core$_count$$._, !$JSCompiler_inline_result$$451_or__4251__auto__$$inline_555_or__4251__auto____$1$$inline_556$$)) {
    throw $cljs$core$missing_protocol$$("ICounted.-count", $coll$$);
  }
  return $JSCompiler_inline_result$$451_or__4251__auto__$$inline_555_or__4251__auto____$1$$inline_556$$.call(null, $coll$$);
}, $cljs$core$_empty$$ = function $cljs$core$_empty$$($coll$$1$$) {
  if ($coll$$1$$ ? $coll$$1$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ : $coll$$1$$) {
    return $coll$$1$$.$cljs$core$IEmptyableCollection$_empty$arity$1$($coll$$1$$);
  }
  var $JSCompiler_inline_result$$452_or__4251__auto__$$inline_558_or__4251__auto____$1$$inline_559$$;
  $JSCompiler_inline_result$$452_or__4251__auto__$$inline_558_or__4251__auto____$1$$inline_559$$ = $cljs$core$_empty$$[$goog$typeOf$$(null == $coll$$1$$ ? null : $coll$$1$$)];
  if (!$JSCompiler_inline_result$$452_or__4251__auto__$$inline_558_or__4251__auto____$1$$inline_559$$ && ($JSCompiler_inline_result$$452_or__4251__auto__$$inline_558_or__4251__auto____$1$$inline_559$$ = $cljs$core$_empty$$._, !$JSCompiler_inline_result$$452_or__4251__auto__$$inline_558_or__4251__auto____$1$$inline_559$$)) {
    throw $cljs$core$missing_protocol$$("IEmptyableCollection.-empty", $coll$$1$$);
  }
  return $JSCompiler_inline_result$$452_or__4251__auto__$$inline_558_or__4251__auto____$1$$inline_559$$.call(null, $coll$$1$$);
}, $cljs$core$ICollection$$ = {}, $cljs$core$_conj$$ = function $cljs$core$_conj$$($coll$$2$$, $o$$203$$) {
  if ($coll$$2$$ ? $coll$$2$$.$cljs$core$ICollection$_conj$arity$2$ : $coll$$2$$) {
    return $coll$$2$$.$cljs$core$ICollection$_conj$arity$2$($coll$$2$$, $o$$203$$);
  }
  var $JSCompiler_inline_result$$453_or__4251__auto__$$inline_561_or__4251__auto____$1$$inline_562$$;
  $JSCompiler_inline_result$$453_or__4251__auto__$$inline_561_or__4251__auto____$1$$inline_562$$ = $cljs$core$_conj$$[$goog$typeOf$$(null == $coll$$2$$ ? null : $coll$$2$$)];
  if (!$JSCompiler_inline_result$$453_or__4251__auto__$$inline_561_or__4251__auto____$1$$inline_562$$ && ($JSCompiler_inline_result$$453_or__4251__auto__$$inline_561_or__4251__auto____$1$$inline_562$$ = $cljs$core$_conj$$._, !$JSCompiler_inline_result$$453_or__4251__auto__$$inline_561_or__4251__auto____$1$$inline_562$$)) {
    throw $cljs$core$missing_protocol$$("ICollection.-conj", $coll$$2$$);
  }
  return $JSCompiler_inline_result$$453_or__4251__auto__$$inline_561_or__4251__auto____$1$$inline_562$$.call(null, $coll$$2$$, $o$$203$$);
}, $cljs$core$IIndexed$$ = {}, $cljs$core$_nth$$ = function $cljs$core$_nth$$() {
  switch(arguments.length) {
    case 2:
      return $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([$cljs$core$str$$("Invalid arity: "), $cljs$core$str$$(arguments.length)].join(""));;
  }
};
$cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$ = function($coll$$3$$, $n$$532$$) {
  if ($coll$$3$$ ? $coll$$3$$.$cljs$core$IIndexed$_nth$arity$2$ : $coll$$3$$) {
    return $coll$$3$$.$cljs$core$IIndexed$_nth$arity$2$($coll$$3$$, $n$$532$$);
  }
  var $JSCompiler_inline_result$$454_or__4251__auto__$$inline_564_or__4251__auto____$1$$inline_565$$;
  $JSCompiler_inline_result$$454_or__4251__auto__$$inline_564_or__4251__auto____$1$$inline_565$$ = $cljs$core$_nth$$[$goog$typeOf$$(null == $coll$$3$$ ? null : $coll$$3$$)];
  if (!$JSCompiler_inline_result$$454_or__4251__auto__$$inline_564_or__4251__auto____$1$$inline_565$$ && ($JSCompiler_inline_result$$454_or__4251__auto__$$inline_564_or__4251__auto____$1$$inline_565$$ = $cljs$core$_nth$$._, !$JSCompiler_inline_result$$454_or__4251__auto__$$inline_564_or__4251__auto____$1$$inline_565$$)) {
    throw $cljs$core$missing_protocol$$("IIndexed.-nth", $coll$$3$$);
  }
  return $JSCompiler_inline_result$$454_or__4251__auto__$$inline_564_or__4251__auto____$1$$inline_565$$.call(null, $coll$$3$$, $n$$532$$);
};
$cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$3$ = function($coll$$4$$, $n$$533$$, $not_found$$) {
  if ($coll$$4$$ ? $coll$$4$$.$cljs$core$IIndexed$_nth$arity$3$ : $coll$$4$$) {
    return $coll$$4$$.$cljs$core$IIndexed$_nth$arity$3$($coll$$4$$, $n$$533$$, $not_found$$);
  }
  var $JSCompiler_inline_result$$455_or__4251__auto__$$inline_567_or__4251__auto____$1$$inline_568$$;
  $JSCompiler_inline_result$$455_or__4251__auto__$$inline_567_or__4251__auto____$1$$inline_568$$ = $cljs$core$_nth$$[$goog$typeOf$$(null == $coll$$4$$ ? null : $coll$$4$$)];
  if (!$JSCompiler_inline_result$$455_or__4251__auto__$$inline_567_or__4251__auto____$1$$inline_568$$ && ($JSCompiler_inline_result$$455_or__4251__auto__$$inline_567_or__4251__auto____$1$$inline_568$$ = $cljs$core$_nth$$._, !$JSCompiler_inline_result$$455_or__4251__auto__$$inline_567_or__4251__auto____$1$$inline_568$$)) {
    throw $cljs$core$missing_protocol$$("IIndexed.-nth", $coll$$4$$);
  }
  return $JSCompiler_inline_result$$455_or__4251__auto__$$inline_567_or__4251__auto____$1$$inline_568$$.call(null, $coll$$4$$, $n$$533$$, $not_found$$);
};
$cljs$core$_nth$$.$cljs$lang$maxFixedArity$ = 3;
var $cljs$core$ISeq$$ = {}, $cljs$core$_first$$ = function $cljs$core$_first$$($coll$$5$$) {
  if ($coll$$5$$ ? $coll$$5$$.$cljs$core$ISeq$_first$arity$1$ : $coll$$5$$) {
    return $coll$$5$$.$cljs$core$ISeq$_first$arity$1$($coll$$5$$);
  }
  var $JSCompiler_inline_result$$456_or__4251__auto__$$inline_570_or__4251__auto____$1$$inline_571$$;
  $JSCompiler_inline_result$$456_or__4251__auto__$$inline_570_or__4251__auto____$1$$inline_571$$ = $cljs$core$_first$$[$goog$typeOf$$(null == $coll$$5$$ ? null : $coll$$5$$)];
  if (!$JSCompiler_inline_result$$456_or__4251__auto__$$inline_570_or__4251__auto____$1$$inline_571$$ && ($JSCompiler_inline_result$$456_or__4251__auto__$$inline_570_or__4251__auto____$1$$inline_571$$ = $cljs$core$_first$$._, !$JSCompiler_inline_result$$456_or__4251__auto__$$inline_570_or__4251__auto____$1$$inline_571$$)) {
    throw $cljs$core$missing_protocol$$("ISeq.-first", $coll$$5$$);
  }
  return $JSCompiler_inline_result$$456_or__4251__auto__$$inline_570_or__4251__auto____$1$$inline_571$$.call(null, $coll$$5$$);
}, $cljs$core$_rest$$ = function $cljs$core$_rest$$($coll$$6$$) {
  if ($coll$$6$$ ? $coll$$6$$.$cljs$core$ISeq$_rest$arity$1$ : $coll$$6$$) {
    return $coll$$6$$.$cljs$core$ISeq$_rest$arity$1$($coll$$6$$);
  }
  var $JSCompiler_inline_result$$457_or__4251__auto__$$inline_573_or__4251__auto____$1$$inline_574$$;
  $JSCompiler_inline_result$$457_or__4251__auto__$$inline_573_or__4251__auto____$1$$inline_574$$ = $cljs$core$_rest$$[$goog$typeOf$$(null == $coll$$6$$ ? null : $coll$$6$$)];
  if (!$JSCompiler_inline_result$$457_or__4251__auto__$$inline_573_or__4251__auto____$1$$inline_574$$ && ($JSCompiler_inline_result$$457_or__4251__auto__$$inline_573_or__4251__auto____$1$$inline_574$$ = $cljs$core$_rest$$._, !$JSCompiler_inline_result$$457_or__4251__auto__$$inline_573_or__4251__auto____$1$$inline_574$$)) {
    throw $cljs$core$missing_protocol$$("ISeq.-rest", $coll$$6$$);
  }
  return $JSCompiler_inline_result$$457_or__4251__auto__$$inline_573_or__4251__auto____$1$$inline_574$$.call(null, $coll$$6$$);
}, $cljs$core$INext$$ = {}, $cljs$core$ILookup$$ = {}, $cljs$core$_lookup$$ = function $cljs$core$_lookup$$() {
  switch(arguments.length) {
    case 2:
      return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([$cljs$core$str$$("Invalid arity: "), $cljs$core$str$$(arguments.length)].join(""));;
  }
};
$cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$2$ = function($o$$204$$, $k$$91$$) {
  if ($o$$204$$ ? $o$$204$$.$cljs$core$ILookup$_lookup$arity$2$ : $o$$204$$) {
    return $o$$204$$.$cljs$core$ILookup$_lookup$arity$2$($o$$204$$, $k$$91$$);
  }
  var $JSCompiler_inline_result$$458_or__4251__auto__$$inline_576_or__4251__auto____$1$$inline_577$$;
  $JSCompiler_inline_result$$458_or__4251__auto__$$inline_576_or__4251__auto____$1$$inline_577$$ = $cljs$core$_lookup$$[$goog$typeOf$$(null == $o$$204$$ ? null : $o$$204$$)];
  if (!$JSCompiler_inline_result$$458_or__4251__auto__$$inline_576_or__4251__auto____$1$$inline_577$$ && ($JSCompiler_inline_result$$458_or__4251__auto__$$inline_576_or__4251__auto____$1$$inline_577$$ = $cljs$core$_lookup$$._, !$JSCompiler_inline_result$$458_or__4251__auto__$$inline_576_or__4251__auto____$1$$inline_577$$)) {
    throw $cljs$core$missing_protocol$$("ILookup.-lookup", $o$$204$$);
  }
  return $JSCompiler_inline_result$$458_or__4251__auto__$$inline_576_or__4251__auto____$1$$inline_577$$.call(null, $o$$204$$, $k$$91$$);
};
$cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$ = function($o$$205$$, $k$$92$$, $not_found$$1$$) {
  if ($o$$205$$ ? $o$$205$$.$cljs$core$ILookup$_lookup$arity$3$ : $o$$205$$) {
    return $o$$205$$.$cljs$core$ILookup$_lookup$arity$3$($o$$205$$, $k$$92$$, $not_found$$1$$);
  }
  var $JSCompiler_inline_result$$459_or__4251__auto__$$inline_579_or__4251__auto____$1$$inline_580$$;
  $JSCompiler_inline_result$$459_or__4251__auto__$$inline_579_or__4251__auto____$1$$inline_580$$ = $cljs$core$_lookup$$[$goog$typeOf$$(null == $o$$205$$ ? null : $o$$205$$)];
  if (!$JSCompiler_inline_result$$459_or__4251__auto__$$inline_579_or__4251__auto____$1$$inline_580$$ && ($JSCompiler_inline_result$$459_or__4251__auto__$$inline_579_or__4251__auto____$1$$inline_580$$ = $cljs$core$_lookup$$._, !$JSCompiler_inline_result$$459_or__4251__auto__$$inline_579_or__4251__auto____$1$$inline_580$$)) {
    throw $cljs$core$missing_protocol$$("ILookup.-lookup", $o$$205$$);
  }
  return $JSCompiler_inline_result$$459_or__4251__auto__$$inline_579_or__4251__auto____$1$$inline_580$$.call(null, $o$$205$$, $k$$92$$, $not_found$$1$$);
};
$cljs$core$_lookup$$.$cljs$lang$maxFixedArity$ = 3;
var $cljs$core$_contains_key_QMARK_$$ = function $cljs$core$_contains_key_QMARK_$$($coll$$8$$, $k$$93$$) {
  if ($coll$$8$$ ? $coll$$8$$.$cljs$core$IAssociative$_contains_key_QMARK_$arity$2$ : $coll$$8$$) {
    return $coll$$8$$.$cljs$core$IAssociative$_contains_key_QMARK_$arity$2$($coll$$8$$, $k$$93$$);
  }
  var $JSCompiler_inline_result$$460_or__4251__auto__$$inline_582_or__4251__auto____$1$$inline_583$$;
  $JSCompiler_inline_result$$460_or__4251__auto__$$inline_582_or__4251__auto____$1$$inline_583$$ = $cljs$core$_contains_key_QMARK_$$[$goog$typeOf$$(null == $coll$$8$$ ? null : $coll$$8$$)];
  if (!$JSCompiler_inline_result$$460_or__4251__auto__$$inline_582_or__4251__auto____$1$$inline_583$$ && ($JSCompiler_inline_result$$460_or__4251__auto__$$inline_582_or__4251__auto____$1$$inline_583$$ = $cljs$core$_contains_key_QMARK_$$._, !$JSCompiler_inline_result$$460_or__4251__auto__$$inline_582_or__4251__auto____$1$$inline_583$$)) {
    throw $cljs$core$missing_protocol$$("IAssociative.-contains-key?", $coll$$8$$);
  }
  return $JSCompiler_inline_result$$460_or__4251__auto__$$inline_582_or__4251__auto____$1$$inline_583$$.call(null, $coll$$8$$, $k$$93$$);
}, $cljs$core$_assoc$$ = function $cljs$core$_assoc$$($coll$$9$$, $k$$94$$, $v$$25$$) {
  if ($coll$$9$$ ? $coll$$9$$.$cljs$core$IAssociative$_assoc$arity$3$ : $coll$$9$$) {
    return $coll$$9$$.$cljs$core$IAssociative$_assoc$arity$3$($coll$$9$$, $k$$94$$, $v$$25$$);
  }
  var $JSCompiler_inline_result$$461_or__4251__auto__$$inline_585_or__4251__auto____$1$$inline_586$$;
  $JSCompiler_inline_result$$461_or__4251__auto__$$inline_585_or__4251__auto____$1$$inline_586$$ = $cljs$core$_assoc$$[$goog$typeOf$$(null == $coll$$9$$ ? null : $coll$$9$$)];
  if (!$JSCompiler_inline_result$$461_or__4251__auto__$$inline_585_or__4251__auto____$1$$inline_586$$ && ($JSCompiler_inline_result$$461_or__4251__auto__$$inline_585_or__4251__auto____$1$$inline_586$$ = $cljs$core$_assoc$$._, !$JSCompiler_inline_result$$461_or__4251__auto__$$inline_585_or__4251__auto____$1$$inline_586$$)) {
    throw $cljs$core$missing_protocol$$("IAssociative.-assoc", $coll$$9$$);
  }
  return $JSCompiler_inline_result$$461_or__4251__auto__$$inline_585_or__4251__auto____$1$$inline_586$$.call(null, $coll$$9$$, $k$$94$$, $v$$25$$);
}, $cljs$core$IMap$$ = {}, $cljs$core$_dissoc$$ = function $cljs$core$_dissoc$$($coll$$10$$, $k$$95$$) {
  if ($coll$$10$$ ? $coll$$10$$.$cljs$core$IMap$_dissoc$arity$2$ : $coll$$10$$) {
    return $coll$$10$$.$cljs$core$IMap$_dissoc$arity$2$($coll$$10$$, $k$$95$$);
  }
  var $JSCompiler_inline_result$$462_or__4251__auto__$$inline_588_or__4251__auto____$1$$inline_589$$;
  $JSCompiler_inline_result$$462_or__4251__auto__$$inline_588_or__4251__auto____$1$$inline_589$$ = $cljs$core$_dissoc$$[$goog$typeOf$$(null == $coll$$10$$ ? null : $coll$$10$$)];
  if (!$JSCompiler_inline_result$$462_or__4251__auto__$$inline_588_or__4251__auto____$1$$inline_589$$ && ($JSCompiler_inline_result$$462_or__4251__auto__$$inline_588_or__4251__auto____$1$$inline_589$$ = $cljs$core$_dissoc$$._, !$JSCompiler_inline_result$$462_or__4251__auto__$$inline_588_or__4251__auto____$1$$inline_589$$)) {
    throw $cljs$core$missing_protocol$$("IMap.-dissoc", $coll$$10$$);
  }
  return $JSCompiler_inline_result$$462_or__4251__auto__$$inline_588_or__4251__auto____$1$$inline_589$$.call(null, $coll$$10$$, $k$$95$$);
}, $cljs$core$IMapEntry$$ = {}, $cljs$core$_key$$ = function $cljs$core$_key$$($coll$$11$$) {
  if ($coll$$11$$ ? $coll$$11$$.$cljs$core$IMapEntry$_key$arity$1$ : $coll$$11$$) {
    return $coll$$11$$.$cljs$core$IMapEntry$_key$arity$1$();
  }
  var $JSCompiler_inline_result$$463_or__4251__auto__$$inline_591_or__4251__auto____$1$$inline_592$$;
  $JSCompiler_inline_result$$463_or__4251__auto__$$inline_591_or__4251__auto____$1$$inline_592$$ = $cljs$core$_key$$[$goog$typeOf$$(null == $coll$$11$$ ? null : $coll$$11$$)];
  if (!$JSCompiler_inline_result$$463_or__4251__auto__$$inline_591_or__4251__auto____$1$$inline_592$$ && ($JSCompiler_inline_result$$463_or__4251__auto__$$inline_591_or__4251__auto____$1$$inline_592$$ = $cljs$core$_key$$._, !$JSCompiler_inline_result$$463_or__4251__auto__$$inline_591_or__4251__auto____$1$$inline_592$$)) {
    throw $cljs$core$missing_protocol$$("IMapEntry.-key", $coll$$11$$);
  }
  return $JSCompiler_inline_result$$463_or__4251__auto__$$inline_591_or__4251__auto____$1$$inline_592$$.call(null, $coll$$11$$);
}, $cljs$core$_val$$ = function $cljs$core$_val$$($coll$$12$$) {
  if ($coll$$12$$ ? $coll$$12$$.$cljs$core$IMapEntry$_val$arity$1$ : $coll$$12$$) {
    return $coll$$12$$.$cljs$core$IMapEntry$_val$arity$1$();
  }
  var $JSCompiler_inline_result$$464_or__4251__auto__$$inline_594_or__4251__auto____$1$$inline_595$$;
  $JSCompiler_inline_result$$464_or__4251__auto__$$inline_594_or__4251__auto____$1$$inline_595$$ = $cljs$core$_val$$[$goog$typeOf$$(null == $coll$$12$$ ? null : $coll$$12$$)];
  if (!$JSCompiler_inline_result$$464_or__4251__auto__$$inline_594_or__4251__auto____$1$$inline_595$$ && ($JSCompiler_inline_result$$464_or__4251__auto__$$inline_594_or__4251__auto____$1$$inline_595$$ = $cljs$core$_val$$._, !$JSCompiler_inline_result$$464_or__4251__auto__$$inline_594_or__4251__auto____$1$$inline_595$$)) {
    throw $cljs$core$missing_protocol$$("IMapEntry.-val", $coll$$12$$);
  }
  return $JSCompiler_inline_result$$464_or__4251__auto__$$inline_594_or__4251__auto____$1$$inline_595$$.call(null, $coll$$12$$);
}, $cljs$core$ISet$$ = {}, $cljs$core$_peek$$ = function $cljs$core$_peek$$($coll$$14$$) {
  if ($coll$$14$$ ? $coll$$14$$.$cljs$core$IStack$_peek$arity$1$ : $coll$$14$$) {
    return $coll$$14$$.$cljs$core$IStack$_peek$arity$1$($coll$$14$$);
  }
  var $JSCompiler_inline_result$$465_or__4251__auto__$$inline_597_or__4251__auto____$1$$inline_598$$;
  $JSCompiler_inline_result$$465_or__4251__auto__$$inline_597_or__4251__auto____$1$$inline_598$$ = $cljs$core$_peek$$[$goog$typeOf$$(null == $coll$$14$$ ? null : $coll$$14$$)];
  if (!$JSCompiler_inline_result$$465_or__4251__auto__$$inline_597_or__4251__auto____$1$$inline_598$$ && ($JSCompiler_inline_result$$465_or__4251__auto__$$inline_597_or__4251__auto____$1$$inline_598$$ = $cljs$core$_peek$$._, !$JSCompiler_inline_result$$465_or__4251__auto__$$inline_597_or__4251__auto____$1$$inline_598$$)) {
    throw $cljs$core$missing_protocol$$("IStack.-peek", $coll$$14$$);
  }
  return $JSCompiler_inline_result$$465_or__4251__auto__$$inline_597_or__4251__auto____$1$$inline_598$$.call(null, $coll$$14$$);
}, $cljs$core$_pop$$ = function $cljs$core$_pop$$($coll$$15$$) {
  if ($coll$$15$$ ? $coll$$15$$.$cljs$core$IStack$_pop$arity$1$ : $coll$$15$$) {
    return $coll$$15$$.$cljs$core$IStack$_pop$arity$1$($coll$$15$$);
  }
  var $JSCompiler_inline_result$$466_or__4251__auto__$$inline_600_or__4251__auto____$1$$inline_601$$;
  $JSCompiler_inline_result$$466_or__4251__auto__$$inline_600_or__4251__auto____$1$$inline_601$$ = $cljs$core$_pop$$[$goog$typeOf$$(null == $coll$$15$$ ? null : $coll$$15$$)];
  if (!$JSCompiler_inline_result$$466_or__4251__auto__$$inline_600_or__4251__auto____$1$$inline_601$$ && ($JSCompiler_inline_result$$466_or__4251__auto__$$inline_600_or__4251__auto____$1$$inline_601$$ = $cljs$core$_pop$$._, !$JSCompiler_inline_result$$466_or__4251__auto__$$inline_600_or__4251__auto____$1$$inline_601$$)) {
    throw $cljs$core$missing_protocol$$("IStack.-pop", $coll$$15$$);
  }
  return $JSCompiler_inline_result$$466_or__4251__auto__$$inline_600_or__4251__auto____$1$$inline_601$$.call(null, $coll$$15$$);
}, $cljs$core$IVector$$ = {}, $cljs$core$_assoc_n$$ = function $cljs$core$_assoc_n$$($coll$$16$$, $n$$534$$, $val$$24$$) {
  if ($coll$$16$$ ? $coll$$16$$.$cljs$core$IVector$_assoc_n$arity$3$ : $coll$$16$$) {
    return $coll$$16$$.$cljs$core$IVector$_assoc_n$arity$3$($coll$$16$$, $n$$534$$, $val$$24$$);
  }
  var $JSCompiler_inline_result$$467_or__4251__auto__$$inline_603_or__4251__auto____$1$$inline_604$$;
  $JSCompiler_inline_result$$467_or__4251__auto__$$inline_603_or__4251__auto____$1$$inline_604$$ = $cljs$core$_assoc_n$$[$goog$typeOf$$(null == $coll$$16$$ ? null : $coll$$16$$)];
  if (!$JSCompiler_inline_result$$467_or__4251__auto__$$inline_603_or__4251__auto____$1$$inline_604$$ && ($JSCompiler_inline_result$$467_or__4251__auto__$$inline_603_or__4251__auto____$1$$inline_604$$ = $cljs$core$_assoc_n$$._, !$JSCompiler_inline_result$$467_or__4251__auto__$$inline_603_or__4251__auto____$1$$inline_604$$)) {
    throw $cljs$core$missing_protocol$$("IVector.-assoc-n", $coll$$16$$);
  }
  return $JSCompiler_inline_result$$467_or__4251__auto__$$inline_603_or__4251__auto____$1$$inline_604$$.call(null, $coll$$16$$, $n$$534$$, $val$$24$$);
}, $cljs$core$_deref$$ = function $cljs$core$_deref$$($o$$206$$) {
  if ($o$$206$$ ? $o$$206$$.$cljs$core$IDeref$_deref$arity$1$ : $o$$206$$) {
    return $o$$206$$.$cljs$core$IDeref$_deref$arity$1$($o$$206$$);
  }
  var $JSCompiler_inline_result$$468_or__4251__auto__$$inline_606_or__4251__auto____$1$$inline_607$$;
  $JSCompiler_inline_result$$468_or__4251__auto__$$inline_606_or__4251__auto____$1$$inline_607$$ = $cljs$core$_deref$$[$goog$typeOf$$(null == $o$$206$$ ? null : $o$$206$$)];
  if (!$JSCompiler_inline_result$$468_or__4251__auto__$$inline_606_or__4251__auto____$1$$inline_607$$ && ($JSCompiler_inline_result$$468_or__4251__auto__$$inline_606_or__4251__auto____$1$$inline_607$$ = $cljs$core$_deref$$._, !$JSCompiler_inline_result$$468_or__4251__auto__$$inline_606_or__4251__auto____$1$$inline_607$$)) {
    throw $cljs$core$missing_protocol$$("IDeref.-deref", $o$$206$$);
  }
  return $JSCompiler_inline_result$$468_or__4251__auto__$$inline_606_or__4251__auto____$1$$inline_607$$.call(null, $o$$206$$);
}, $cljs$core$IMeta$$ = {}, $cljs$core$_meta$$ = function $cljs$core$_meta$$($o$$208$$) {
  if ($o$$208$$ ? $o$$208$$.$cljs$core$IMeta$_meta$arity$1$ : $o$$208$$) {
    return $o$$208$$.$cljs$core$IMeta$_meta$arity$1$($o$$208$$);
  }
  var $JSCompiler_inline_result$$469_or__4251__auto__$$inline_609_or__4251__auto____$1$$inline_610$$;
  $JSCompiler_inline_result$$469_or__4251__auto__$$inline_609_or__4251__auto____$1$$inline_610$$ = $cljs$core$_meta$$[$goog$typeOf$$(null == $o$$208$$ ? null : $o$$208$$)];
  if (!$JSCompiler_inline_result$$469_or__4251__auto__$$inline_609_or__4251__auto____$1$$inline_610$$ && ($JSCompiler_inline_result$$469_or__4251__auto__$$inline_609_or__4251__auto____$1$$inline_610$$ = $cljs$core$_meta$$._, !$JSCompiler_inline_result$$469_or__4251__auto__$$inline_609_or__4251__auto____$1$$inline_610$$)) {
    throw $cljs$core$missing_protocol$$("IMeta.-meta", $o$$208$$);
  }
  return $JSCompiler_inline_result$$469_or__4251__auto__$$inline_609_or__4251__auto____$1$$inline_610$$.call(null, $o$$208$$);
}, $cljs$core$IWithMeta$$ = {}, $cljs$core$_with_meta$$ = function $cljs$core$_with_meta$$($o$$209$$, $meta$$) {
  if ($o$$209$$ ? $o$$209$$.$cljs$core$IWithMeta$_with_meta$arity$2$ : $o$$209$$) {
    return $o$$209$$.$cljs$core$IWithMeta$_with_meta$arity$2$($o$$209$$, $meta$$);
  }
  var $JSCompiler_inline_result$$470_or__4251__auto__$$inline_612_or__4251__auto____$1$$inline_613$$;
  $JSCompiler_inline_result$$470_or__4251__auto__$$inline_612_or__4251__auto____$1$$inline_613$$ = $cljs$core$_with_meta$$[$goog$typeOf$$(null == $o$$209$$ ? null : $o$$209$$)];
  if (!$JSCompiler_inline_result$$470_or__4251__auto__$$inline_612_or__4251__auto____$1$$inline_613$$ && ($JSCompiler_inline_result$$470_or__4251__auto__$$inline_612_or__4251__auto____$1$$inline_613$$ = $cljs$core$_with_meta$$._, !$JSCompiler_inline_result$$470_or__4251__auto__$$inline_612_or__4251__auto____$1$$inline_613$$)) {
    throw $cljs$core$missing_protocol$$("IWithMeta.-with-meta", $o$$209$$);
  }
  return $JSCompiler_inline_result$$470_or__4251__auto__$$inline_612_or__4251__auto____$1$$inline_613$$.call(null, $o$$209$$, $meta$$);
}, $cljs$core$IReduce$$ = {}, $cljs$core$_reduce$$ = function $cljs$core$_reduce$$() {
  switch(arguments.length) {
    case 2:
      return $cljs$core$_reduce$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$_reduce$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([$cljs$core$str$$("Invalid arity: "), $cljs$core$str$$(arguments.length)].join(""));;
  }
};
$cljs$core$_reduce$$.$cljs$core$IFn$_invoke$arity$2$ = function($coll$$17$$, $f$$393$$) {
  if ($coll$$17$$ ? $coll$$17$$.$cljs$core$IReduce$_reduce$arity$2$ : $coll$$17$$) {
    return $coll$$17$$.$cljs$core$IReduce$_reduce$arity$2$($coll$$17$$, $f$$393$$);
  }
  var $JSCompiler_inline_result$$471_or__4251__auto__$$inline_615_or__4251__auto____$1$$inline_616$$;
  $JSCompiler_inline_result$$471_or__4251__auto__$$inline_615_or__4251__auto____$1$$inline_616$$ = $cljs$core$_reduce$$[$goog$typeOf$$(null == $coll$$17$$ ? null : $coll$$17$$)];
  if (!$JSCompiler_inline_result$$471_or__4251__auto__$$inline_615_or__4251__auto____$1$$inline_616$$ && ($JSCompiler_inline_result$$471_or__4251__auto__$$inline_615_or__4251__auto____$1$$inline_616$$ = $cljs$core$_reduce$$._, !$JSCompiler_inline_result$$471_or__4251__auto__$$inline_615_or__4251__auto____$1$$inline_616$$)) {
    throw $cljs$core$missing_protocol$$("IReduce.-reduce", $coll$$17$$);
  }
  return $JSCompiler_inline_result$$471_or__4251__auto__$$inline_615_or__4251__auto____$1$$inline_616$$.call(null, $coll$$17$$, $f$$393$$);
};
$cljs$core$_reduce$$.$cljs$core$IFn$_invoke$arity$3$ = function($coll$$18$$, $f$$394$$, $start$$8$$) {
  if ($coll$$18$$ ? $coll$$18$$.$cljs$core$IReduce$_reduce$arity$3$ : $coll$$18$$) {
    return $coll$$18$$.$cljs$core$IReduce$_reduce$arity$3$($coll$$18$$, $f$$394$$, $start$$8$$);
  }
  var $JSCompiler_inline_result$$472_or__4251__auto__$$inline_618_or__4251__auto____$1$$inline_619$$;
  $JSCompiler_inline_result$$472_or__4251__auto__$$inline_618_or__4251__auto____$1$$inline_619$$ = $cljs$core$_reduce$$[$goog$typeOf$$(null == $coll$$18$$ ? null : $coll$$18$$)];
  if (!$JSCompiler_inline_result$$472_or__4251__auto__$$inline_618_or__4251__auto____$1$$inline_619$$ && ($JSCompiler_inline_result$$472_or__4251__auto__$$inline_618_or__4251__auto____$1$$inline_619$$ = $cljs$core$_reduce$$._, !$JSCompiler_inline_result$$472_or__4251__auto__$$inline_618_or__4251__auto____$1$$inline_619$$)) {
    throw $cljs$core$missing_protocol$$("IReduce.-reduce", $coll$$18$$);
  }
  return $JSCompiler_inline_result$$472_or__4251__auto__$$inline_618_or__4251__auto____$1$$inline_619$$.call(null, $coll$$18$$, $f$$394$$, $start$$8$$);
};
$cljs$core$_reduce$$.$cljs$lang$maxFixedArity$ = 3;
var $cljs$core$_kv_reduce$$ = function $cljs$core$_kv_reduce$$($coll$$19$$, $f$$395$$, $init$$) {
  if ($coll$$19$$ ? $coll$$19$$.$cljs$core$IKVReduce$_kv_reduce$arity$3$ : $coll$$19$$) {
    return $coll$$19$$.$cljs$core$IKVReduce$_kv_reduce$arity$3$($coll$$19$$, $f$$395$$, $init$$);
  }
  var $JSCompiler_inline_result$$473_or__4251__auto__$$inline_621_or__4251__auto____$1$$inline_622$$;
  $JSCompiler_inline_result$$473_or__4251__auto__$$inline_621_or__4251__auto____$1$$inline_622$$ = $cljs$core$_kv_reduce$$[$goog$typeOf$$(null == $coll$$19$$ ? null : $coll$$19$$)];
  if (!$JSCompiler_inline_result$$473_or__4251__auto__$$inline_621_or__4251__auto____$1$$inline_622$$ && ($JSCompiler_inline_result$$473_or__4251__auto__$$inline_621_or__4251__auto____$1$$inline_622$$ = $cljs$core$_kv_reduce$$._, !$JSCompiler_inline_result$$473_or__4251__auto__$$inline_621_or__4251__auto____$1$$inline_622$$)) {
    throw $cljs$core$missing_protocol$$("IKVReduce.-kv-reduce", $coll$$19$$);
  }
  return $JSCompiler_inline_result$$473_or__4251__auto__$$inline_621_or__4251__auto____$1$$inline_622$$.call(null, $coll$$19$$, $f$$395$$, $init$$);
}, $cljs$core$_equiv$$ = function $cljs$core$_equiv$$($o$$210$$, $other$$3$$) {
  if ($o$$210$$ ? $o$$210$$.$cljs$core$IEquiv$_equiv$arity$2$ : $o$$210$$) {
    return $o$$210$$.$cljs$core$IEquiv$_equiv$arity$2$($o$$210$$, $other$$3$$);
  }
  var $JSCompiler_inline_result$$474_or__4251__auto__$$inline_624_or__4251__auto____$1$$inline_625$$;
  $JSCompiler_inline_result$$474_or__4251__auto__$$inline_624_or__4251__auto____$1$$inline_625$$ = $cljs$core$_equiv$$[$goog$typeOf$$(null == $o$$210$$ ? null : $o$$210$$)];
  if (!$JSCompiler_inline_result$$474_or__4251__auto__$$inline_624_or__4251__auto____$1$$inline_625$$ && ($JSCompiler_inline_result$$474_or__4251__auto__$$inline_624_or__4251__auto____$1$$inline_625$$ = $cljs$core$_equiv$$._, !$JSCompiler_inline_result$$474_or__4251__auto__$$inline_624_or__4251__auto____$1$$inline_625$$)) {
    throw $cljs$core$missing_protocol$$("IEquiv.-equiv", $o$$210$$);
  }
  return $JSCompiler_inline_result$$474_or__4251__auto__$$inline_624_or__4251__auto____$1$$inline_625$$.call(null, $o$$210$$, $other$$3$$);
}, $cljs$core$_hash$$ = function $cljs$core$_hash$$($o$$211$$) {
  if ($o$$211$$ ? $o$$211$$.$cljs$core$IHash$_hash$arity$1$ : $o$$211$$) {
    return $o$$211$$.$cljs$core$IHash$_hash$arity$1$($o$$211$$);
  }
  var $JSCompiler_inline_result$$475_or__4251__auto__$$inline_627_or__4251__auto____$1$$inline_628$$;
  $JSCompiler_inline_result$$475_or__4251__auto__$$inline_627_or__4251__auto____$1$$inline_628$$ = $cljs$core$_hash$$[$goog$typeOf$$(null == $o$$211$$ ? null : $o$$211$$)];
  if (!$JSCompiler_inline_result$$475_or__4251__auto__$$inline_627_or__4251__auto____$1$$inline_628$$ && ($JSCompiler_inline_result$$475_or__4251__auto__$$inline_627_or__4251__auto____$1$$inline_628$$ = $cljs$core$_hash$$._, !$JSCompiler_inline_result$$475_or__4251__auto__$$inline_627_or__4251__auto____$1$$inline_628$$)) {
    throw $cljs$core$missing_protocol$$("IHash.-hash", $o$$211$$);
  }
  return $JSCompiler_inline_result$$475_or__4251__auto__$$inline_627_or__4251__auto____$1$$inline_628$$.call(null, $o$$211$$);
}, $cljs$core$ISeqable$$ = {}, $cljs$core$_seq$$ = function $cljs$core$_seq$$($o$$212$$) {
  if ($o$$212$$ ? $o$$212$$.$cljs$core$ISeqable$_seq$arity$1$ : $o$$212$$) {
    return $o$$212$$.$cljs$core$ISeqable$_seq$arity$1$($o$$212$$);
  }
  var $JSCompiler_inline_result$$476_or__4251__auto__$$inline_630_or__4251__auto____$1$$inline_631$$;
  $JSCompiler_inline_result$$476_or__4251__auto__$$inline_630_or__4251__auto____$1$$inline_631$$ = $cljs$core$_seq$$[$goog$typeOf$$(null == $o$$212$$ ? null : $o$$212$$)];
  if (!$JSCompiler_inline_result$$476_or__4251__auto__$$inline_630_or__4251__auto____$1$$inline_631$$ && ($JSCompiler_inline_result$$476_or__4251__auto__$$inline_630_or__4251__auto____$1$$inline_631$$ = $cljs$core$_seq$$._, !$JSCompiler_inline_result$$476_or__4251__auto__$$inline_630_or__4251__auto____$1$$inline_631$$)) {
    throw $cljs$core$missing_protocol$$("ISeqable.-seq", $o$$212$$);
  }
  return $JSCompiler_inline_result$$476_or__4251__auto__$$inline_630_or__4251__auto____$1$$inline_631$$.call(null, $o$$212$$);
}, $cljs$core$ISequential$$ = {}, $cljs$core$_write$$ = function $cljs$core$_write$$($writer$$, $s$$120$$) {
  if ($writer$$ ? $writer$$.$cljs$core$IWriter$_write$arity$2$ : $writer$$) {
    return $writer$$.$cljs$core$IWriter$_write$arity$2$(0, $s$$120$$);
  }
  var $JSCompiler_inline_result$$477_or__4251__auto__$$inline_633_or__4251__auto____$1$$inline_634$$;
  $JSCompiler_inline_result$$477_or__4251__auto__$$inline_633_or__4251__auto____$1$$inline_634$$ = $cljs$core$_write$$[$goog$typeOf$$(null == $writer$$ ? null : $writer$$)];
  if (!$JSCompiler_inline_result$$477_or__4251__auto__$$inline_633_or__4251__auto____$1$$inline_634$$ && ($JSCompiler_inline_result$$477_or__4251__auto__$$inline_633_or__4251__auto____$1$$inline_634$$ = $cljs$core$_write$$._, !$JSCompiler_inline_result$$477_or__4251__auto__$$inline_633_or__4251__auto____$1$$inline_634$$)) {
    throw $cljs$core$missing_protocol$$("IWriter.-write", $writer$$);
  }
  return $JSCompiler_inline_result$$477_or__4251__auto__$$inline_633_or__4251__auto____$1$$inline_634$$.call(null, $writer$$, $s$$120$$);
}, $cljs$core$IPrintWithWriter$$ = {}, $cljs$core$_pr_writer$$ = function $cljs$core$_pr_writer$$($o$$213$$, $writer$$2$$, $opts$$) {
  if ($o$$213$$ ? $o$$213$$.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ : $o$$213$$) {
    return $o$$213$$.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$($o$$213$$, $writer$$2$$, $opts$$);
  }
  var $JSCompiler_inline_result$$478_or__4251__auto__$$inline_636_or__4251__auto____$1$$inline_637$$;
  $JSCompiler_inline_result$$478_or__4251__auto__$$inline_636_or__4251__auto____$1$$inline_637$$ = $cljs$core$_pr_writer$$[$goog$typeOf$$(null == $o$$213$$ ? null : $o$$213$$)];
  if (!$JSCompiler_inline_result$$478_or__4251__auto__$$inline_636_or__4251__auto____$1$$inline_637$$ && ($JSCompiler_inline_result$$478_or__4251__auto__$$inline_636_or__4251__auto____$1$$inline_637$$ = $cljs$core$_pr_writer$$._, !$JSCompiler_inline_result$$478_or__4251__auto__$$inline_636_or__4251__auto____$1$$inline_637$$)) {
    throw $cljs$core$missing_protocol$$("IPrintWithWriter.-pr-writer", $o$$213$$);
  }
  return $JSCompiler_inline_result$$478_or__4251__auto__$$inline_636_or__4251__auto____$1$$inline_637$$.call(null, $o$$213$$, $writer$$2$$, $opts$$);
}, $cljs$core$_notify_watches$$ = function $cljs$core$_notify_watches$$($this$$$22$$, $oldval$$, $newval$$) {
  if ($this$$$22$$ ? $this$$$22$$.$cljs$core$IWatchable$_notify_watches$arity$3$ : $this$$$22$$) {
    return $this$$$22$$.$cljs$core$IWatchable$_notify_watches$arity$3$($this$$$22$$, $oldval$$, $newval$$);
  }
  var $JSCompiler_inline_result$$479_or__4251__auto__$$inline_639_or__4251__auto____$1$$inline_640$$;
  $JSCompiler_inline_result$$479_or__4251__auto__$$inline_639_or__4251__auto____$1$$inline_640$$ = $cljs$core$_notify_watches$$[$goog$typeOf$$(null == $this$$$22$$ ? null : $this$$$22$$)];
  if (!$JSCompiler_inline_result$$479_or__4251__auto__$$inline_639_or__4251__auto____$1$$inline_640$$ && ($JSCompiler_inline_result$$479_or__4251__auto__$$inline_639_or__4251__auto____$1$$inline_640$$ = $cljs$core$_notify_watches$$._, !$JSCompiler_inline_result$$479_or__4251__auto__$$inline_639_or__4251__auto____$1$$inline_640$$)) {
    throw $cljs$core$missing_protocol$$("IWatchable.-notify-watches", $this$$$22$$);
  }
  return $JSCompiler_inline_result$$479_or__4251__auto__$$inline_639_or__4251__auto____$1$$inline_640$$.call(null, $this$$$22$$, $oldval$$, $newval$$);
}, $cljs$core$_add_watch$$ = function $cljs$core$_add_watch$$($this$$$23$$, $key$$52$$, $f$$396$$) {
  if ($this$$$23$$ ? $this$$$23$$.$cljs$core$IWatchable$_add_watch$arity$3$ : $this$$$23$$) {
    return $this$$$23$$.$cljs$core$IWatchable$_add_watch$arity$3$($this$$$23$$, $key$$52$$, $f$$396$$);
  }
  var $JSCompiler_inline_result$$480_or__4251__auto__$$inline_642_or__4251__auto____$1$$inline_643$$;
  $JSCompiler_inline_result$$480_or__4251__auto__$$inline_642_or__4251__auto____$1$$inline_643$$ = $cljs$core$_add_watch$$[$goog$typeOf$$(null == $this$$$23$$ ? null : $this$$$23$$)];
  if (!$JSCompiler_inline_result$$480_or__4251__auto__$$inline_642_or__4251__auto____$1$$inline_643$$ && ($JSCompiler_inline_result$$480_or__4251__auto__$$inline_642_or__4251__auto____$1$$inline_643$$ = $cljs$core$_add_watch$$._, !$JSCompiler_inline_result$$480_or__4251__auto__$$inline_642_or__4251__auto____$1$$inline_643$$)) {
    throw $cljs$core$missing_protocol$$("IWatchable.-add-watch", $this$$$23$$);
  }
  return $JSCompiler_inline_result$$480_or__4251__auto__$$inline_642_or__4251__auto____$1$$inline_643$$.call(null, $this$$$23$$, $key$$52$$, $f$$396$$);
}, $cljs$core$_remove_watch$$ = function $cljs$core$_remove_watch$$($this$$$24$$, $key$$53$$) {
  if ($this$$$24$$ ? $this$$$24$$.$cljs$core$IWatchable$_remove_watch$arity$2$ : $this$$$24$$) {
    return $this$$$24$$.$cljs$core$IWatchable$_remove_watch$arity$2$($this$$$24$$, $key$$53$$);
  }
  var $JSCompiler_inline_result$$481_or__4251__auto__$$inline_645_or__4251__auto____$1$$inline_646$$;
  $JSCompiler_inline_result$$481_or__4251__auto__$$inline_645_or__4251__auto____$1$$inline_646$$ = $cljs$core$_remove_watch$$[$goog$typeOf$$(null == $this$$$24$$ ? null : $this$$$24$$)];
  if (!$JSCompiler_inline_result$$481_or__4251__auto__$$inline_645_or__4251__auto____$1$$inline_646$$ && ($JSCompiler_inline_result$$481_or__4251__auto__$$inline_645_or__4251__auto____$1$$inline_646$$ = $cljs$core$_remove_watch$$._, !$JSCompiler_inline_result$$481_or__4251__auto__$$inline_645_or__4251__auto____$1$$inline_646$$)) {
    throw $cljs$core$missing_protocol$$("IWatchable.-remove-watch", $this$$$24$$);
  }
  return $JSCompiler_inline_result$$481_or__4251__auto__$$inline_645_or__4251__auto____$1$$inline_646$$.call(null, $this$$$24$$, $key$$53$$);
}, $cljs$core$_as_transient$$ = function $cljs$core$_as_transient$$($coll$$25$$) {
  if ($coll$$25$$ ? $coll$$25$$.$cljs$core$IEditableCollection$_as_transient$arity$1$ : $coll$$25$$) {
    return $coll$$25$$.$cljs$core$IEditableCollection$_as_transient$arity$1$($coll$$25$$);
  }
  var $JSCompiler_inline_result$$482_or__4251__auto__$$inline_648_or__4251__auto____$1$$inline_649$$;
  $JSCompiler_inline_result$$482_or__4251__auto__$$inline_648_or__4251__auto____$1$$inline_649$$ = $cljs$core$_as_transient$$[$goog$typeOf$$(null == $coll$$25$$ ? null : $coll$$25$$)];
  if (!$JSCompiler_inline_result$$482_or__4251__auto__$$inline_648_or__4251__auto____$1$$inline_649$$ && ($JSCompiler_inline_result$$482_or__4251__auto__$$inline_648_or__4251__auto____$1$$inline_649$$ = $cljs$core$_as_transient$$._, !$JSCompiler_inline_result$$482_or__4251__auto__$$inline_648_or__4251__auto____$1$$inline_649$$)) {
    throw $cljs$core$missing_protocol$$("IEditableCollection.-as-transient", $coll$$25$$);
  }
  return $JSCompiler_inline_result$$482_or__4251__auto__$$inline_648_or__4251__auto____$1$$inline_649$$.call(null, $coll$$25$$);
}, $cljs$core$_conj_BANG_$$ = function $cljs$core$_conj_BANG_$$($tcoll$$, $val$$25$$) {
  if ($tcoll$$ ? $tcoll$$.$cljs$core$ITransientCollection$_conj_BANG_$arity$2$ : $tcoll$$) {
    return $tcoll$$.$cljs$core$ITransientCollection$_conj_BANG_$arity$2$($tcoll$$, $val$$25$$);
  }
  var $JSCompiler_inline_result$$483_or__4251__auto__$$inline_651_or__4251__auto____$1$$inline_652$$;
  $JSCompiler_inline_result$$483_or__4251__auto__$$inline_651_or__4251__auto____$1$$inline_652$$ = $cljs$core$_conj_BANG_$$[$goog$typeOf$$(null == $tcoll$$ ? null : $tcoll$$)];
  if (!$JSCompiler_inline_result$$483_or__4251__auto__$$inline_651_or__4251__auto____$1$$inline_652$$ && ($JSCompiler_inline_result$$483_or__4251__auto__$$inline_651_or__4251__auto____$1$$inline_652$$ = $cljs$core$_conj_BANG_$$._, !$JSCompiler_inline_result$$483_or__4251__auto__$$inline_651_or__4251__auto____$1$$inline_652$$)) {
    throw $cljs$core$missing_protocol$$("ITransientCollection.-conj!", $tcoll$$);
  }
  return $JSCompiler_inline_result$$483_or__4251__auto__$$inline_651_or__4251__auto____$1$$inline_652$$.call(null, $tcoll$$, $val$$25$$);
}, $cljs$core$_persistent_BANG_$$ = function $cljs$core$_persistent_BANG_$$($tcoll$$1$$) {
  if ($tcoll$$1$$ ? $tcoll$$1$$.$cljs$core$ITransientCollection$_persistent_BANG_$arity$1$ : $tcoll$$1$$) {
    return $tcoll$$1$$.$cljs$core$ITransientCollection$_persistent_BANG_$arity$1$($tcoll$$1$$);
  }
  var $JSCompiler_inline_result$$484_or__4251__auto__$$inline_654_or__4251__auto____$1$$inline_655$$;
  $JSCompiler_inline_result$$484_or__4251__auto__$$inline_654_or__4251__auto____$1$$inline_655$$ = $cljs$core$_persistent_BANG_$$[$goog$typeOf$$(null == $tcoll$$1$$ ? null : $tcoll$$1$$)];
  if (!$JSCompiler_inline_result$$484_or__4251__auto__$$inline_654_or__4251__auto____$1$$inline_655$$ && ($JSCompiler_inline_result$$484_or__4251__auto__$$inline_654_or__4251__auto____$1$$inline_655$$ = $cljs$core$_persistent_BANG_$$._, !$JSCompiler_inline_result$$484_or__4251__auto__$$inline_654_or__4251__auto____$1$$inline_655$$)) {
    throw $cljs$core$missing_protocol$$("ITransientCollection.-persistent!", $tcoll$$1$$);
  }
  return $JSCompiler_inline_result$$484_or__4251__auto__$$inline_654_or__4251__auto____$1$$inline_655$$.call(null, $tcoll$$1$$);
}, $cljs$core$_assoc_BANG_$$ = function $cljs$core$_assoc_BANG_$$($tcoll$$2$$, $key$$54$$, $val$$26$$) {
  if ($tcoll$$2$$ ? $tcoll$$2$$.$cljs$core$ITransientAssociative$_assoc_BANG_$arity$3$ : $tcoll$$2$$) {
    return $tcoll$$2$$.$cljs$core$ITransientAssociative$_assoc_BANG_$arity$3$($tcoll$$2$$, $key$$54$$, $val$$26$$);
  }
  var $JSCompiler_inline_result$$485_or__4251__auto__$$inline_657_or__4251__auto____$1$$inline_658$$;
  $JSCompiler_inline_result$$485_or__4251__auto__$$inline_657_or__4251__auto____$1$$inline_658$$ = $cljs$core$_assoc_BANG_$$[$goog$typeOf$$(null == $tcoll$$2$$ ? null : $tcoll$$2$$)];
  if (!$JSCompiler_inline_result$$485_or__4251__auto__$$inline_657_or__4251__auto____$1$$inline_658$$ && ($JSCompiler_inline_result$$485_or__4251__auto__$$inline_657_or__4251__auto____$1$$inline_658$$ = $cljs$core$_assoc_BANG_$$._, !$JSCompiler_inline_result$$485_or__4251__auto__$$inline_657_or__4251__auto____$1$$inline_658$$)) {
    throw $cljs$core$missing_protocol$$("ITransientAssociative.-assoc!", $tcoll$$2$$);
  }
  return $JSCompiler_inline_result$$485_or__4251__auto__$$inline_657_or__4251__auto____$1$$inline_658$$.call(null, $tcoll$$2$$, $key$$54$$, $val$$26$$);
}, $cljs$core$_assoc_n_BANG_$$ = function $cljs$core$_assoc_n_BANG_$$($tcoll$$4$$, $n$$535$$, $val$$27$$) {
  if ($tcoll$$4$$ ? $tcoll$$4$$.$cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$ : $tcoll$$4$$) {
    return $tcoll$$4$$.$cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$(0, $n$$535$$, $val$$27$$);
  }
  var $JSCompiler_inline_result$$486_or__4251__auto__$$inline_660_or__4251__auto____$1$$inline_661$$;
  $JSCompiler_inline_result$$486_or__4251__auto__$$inline_660_or__4251__auto____$1$$inline_661$$ = $cljs$core$_assoc_n_BANG_$$[$goog$typeOf$$(null == $tcoll$$4$$ ? null : $tcoll$$4$$)];
  if (!$JSCompiler_inline_result$$486_or__4251__auto__$$inline_660_or__4251__auto____$1$$inline_661$$ && ($JSCompiler_inline_result$$486_or__4251__auto__$$inline_660_or__4251__auto____$1$$inline_661$$ = $cljs$core$_assoc_n_BANG_$$._, !$JSCompiler_inline_result$$486_or__4251__auto__$$inline_660_or__4251__auto____$1$$inline_661$$)) {
    throw $cljs$core$missing_protocol$$("ITransientVector.-assoc-n!", $tcoll$$4$$);
  }
  return $JSCompiler_inline_result$$486_or__4251__auto__$$inline_660_or__4251__auto____$1$$inline_661$$.call(null, $tcoll$$4$$, $n$$535$$, $val$$27$$);
}, $cljs$core$IComparable$$ = {}, $cljs$core$_compare$$ = function $cljs$core$_compare$$($x$$88$$, $y$$64$$) {
  if ($x$$88$$ ? $x$$88$$.$cljs$core$IComparable$_compare$arity$2$ : $x$$88$$) {
    return $x$$88$$.$cljs$core$IComparable$_compare$arity$2$($x$$88$$, $y$$64$$);
  }
  var $JSCompiler_inline_result$$487_or__4251__auto__$$inline_663_or__4251__auto____$1$$inline_664$$;
  $JSCompiler_inline_result$$487_or__4251__auto__$$inline_663_or__4251__auto____$1$$inline_664$$ = $cljs$core$_compare$$[$goog$typeOf$$(null == $x$$88$$ ? null : $x$$88$$)];
  if (!$JSCompiler_inline_result$$487_or__4251__auto__$$inline_663_or__4251__auto____$1$$inline_664$$ && ($JSCompiler_inline_result$$487_or__4251__auto__$$inline_663_or__4251__auto____$1$$inline_664$$ = $cljs$core$_compare$$._, !$JSCompiler_inline_result$$487_or__4251__auto__$$inline_663_or__4251__auto____$1$$inline_664$$)) {
    throw $cljs$core$missing_protocol$$("IComparable.-compare", $x$$88$$);
  }
  return $JSCompiler_inline_result$$487_or__4251__auto__$$inline_663_or__4251__auto____$1$$inline_664$$.call(null, $x$$88$$, $y$$64$$);
}, $cljs$core$_drop_first$$ = function $cljs$core$_drop_first$$($coll$$26$$) {
  if ($coll$$26$$ ? $coll$$26$$.$cljs$core$IChunk$_drop_first$arity$1$ : $coll$$26$$) {
    return $coll$$26$$.$cljs$core$IChunk$_drop_first$arity$1$();
  }
  var $JSCompiler_inline_result$$488_or__4251__auto__$$inline_666_or__4251__auto____$1$$inline_667$$;
  $JSCompiler_inline_result$$488_or__4251__auto__$$inline_666_or__4251__auto____$1$$inline_667$$ = $cljs$core$_drop_first$$[$goog$typeOf$$(null == $coll$$26$$ ? null : $coll$$26$$)];
  if (!$JSCompiler_inline_result$$488_or__4251__auto__$$inline_666_or__4251__auto____$1$$inline_667$$ && ($JSCompiler_inline_result$$488_or__4251__auto__$$inline_666_or__4251__auto____$1$$inline_667$$ = $cljs$core$_drop_first$$._, !$JSCompiler_inline_result$$488_or__4251__auto__$$inline_666_or__4251__auto____$1$$inline_667$$)) {
    throw $cljs$core$missing_protocol$$("IChunk.-drop-first", $coll$$26$$);
  }
  return $JSCompiler_inline_result$$488_or__4251__auto__$$inline_666_or__4251__auto____$1$$inline_667$$.call(null, $coll$$26$$);
}, $cljs$core$_chunked_first$$ = function $cljs$core$_chunked_first$$($coll$$27$$) {
  if ($coll$$27$$ ? $coll$$27$$.$cljs$core$IChunkedSeq$_chunked_first$arity$1$ : $coll$$27$$) {
    return $coll$$27$$.$cljs$core$IChunkedSeq$_chunked_first$arity$1$($coll$$27$$);
  }
  var $JSCompiler_inline_result$$489_or__4251__auto__$$inline_669_or__4251__auto____$1$$inline_670$$;
  $JSCompiler_inline_result$$489_or__4251__auto__$$inline_669_or__4251__auto____$1$$inline_670$$ = $cljs$core$_chunked_first$$[$goog$typeOf$$(null == $coll$$27$$ ? null : $coll$$27$$)];
  if (!$JSCompiler_inline_result$$489_or__4251__auto__$$inline_669_or__4251__auto____$1$$inline_670$$ && ($JSCompiler_inline_result$$489_or__4251__auto__$$inline_669_or__4251__auto____$1$$inline_670$$ = $cljs$core$_chunked_first$$._, !$JSCompiler_inline_result$$489_or__4251__auto__$$inline_669_or__4251__auto____$1$$inline_670$$)) {
    throw $cljs$core$missing_protocol$$("IChunkedSeq.-chunked-first", $coll$$27$$);
  }
  return $JSCompiler_inline_result$$489_or__4251__auto__$$inline_669_or__4251__auto____$1$$inline_670$$.call(null, $coll$$27$$);
}, $cljs$core$_chunked_rest$$ = function $cljs$core$_chunked_rest$$($coll$$28$$) {
  if ($coll$$28$$ ? $coll$$28$$.$cljs$core$IChunkedSeq$_chunked_rest$arity$1$ : $coll$$28$$) {
    return $coll$$28$$.$cljs$core$IChunkedSeq$_chunked_rest$arity$1$($coll$$28$$);
  }
  var $JSCompiler_inline_result$$490_or__4251__auto__$$inline_672_or__4251__auto____$1$$inline_673$$;
  $JSCompiler_inline_result$$490_or__4251__auto__$$inline_672_or__4251__auto____$1$$inline_673$$ = $cljs$core$_chunked_rest$$[$goog$typeOf$$(null == $coll$$28$$ ? null : $coll$$28$$)];
  if (!$JSCompiler_inline_result$$490_or__4251__auto__$$inline_672_or__4251__auto____$1$$inline_673$$ && ($JSCompiler_inline_result$$490_or__4251__auto__$$inline_672_or__4251__auto____$1$$inline_673$$ = $cljs$core$_chunked_rest$$._, !$JSCompiler_inline_result$$490_or__4251__auto__$$inline_672_or__4251__auto____$1$$inline_673$$)) {
    throw $cljs$core$missing_protocol$$("IChunkedSeq.-chunked-rest", $coll$$28$$);
  }
  return $JSCompiler_inline_result$$490_or__4251__auto__$$inline_672_or__4251__auto____$1$$inline_673$$.call(null, $coll$$28$$);
}, $cljs$core$_chunked_next$$ = function $cljs$core$_chunked_next$$($coll$$29$$) {
  if ($coll$$29$$ ? $coll$$29$$.$cljs$core$IChunkedNext$_chunked_next$arity$1$ : $coll$$29$$) {
    return $coll$$29$$.$cljs$core$IChunkedNext$_chunked_next$arity$1$($coll$$29$$);
  }
  var $JSCompiler_inline_result$$491_or__4251__auto__$$inline_675_or__4251__auto____$1$$inline_676$$;
  $JSCompiler_inline_result$$491_or__4251__auto__$$inline_675_or__4251__auto____$1$$inline_676$$ = $cljs$core$_chunked_next$$[$goog$typeOf$$(null == $coll$$29$$ ? null : $coll$$29$$)];
  if (!$JSCompiler_inline_result$$491_or__4251__auto__$$inline_675_or__4251__auto____$1$$inline_676$$ && ($JSCompiler_inline_result$$491_or__4251__auto__$$inline_675_or__4251__auto____$1$$inline_676$$ = $cljs$core$_chunked_next$$._, !$JSCompiler_inline_result$$491_or__4251__auto__$$inline_675_or__4251__auto____$1$$inline_676$$)) {
    throw $cljs$core$missing_protocol$$("IChunkedNext.-chunked-next", $coll$$29$$);
  }
  return $JSCompiler_inline_result$$491_or__4251__auto__$$inline_675_or__4251__auto____$1$$inline_676$$.call(null, $coll$$29$$);
}, $cljs$core$_reset_BANG_$$ = function $cljs$core$_reset_BANG_$$($o$$214$$, $new_value$$) {
  if ($o$$214$$ ? $o$$214$$.$cljs$core$IReset$_reset_BANG_$arity$2$ : $o$$214$$) {
    return $o$$214$$.$cljs$core$IReset$_reset_BANG_$arity$2$($o$$214$$, $new_value$$);
  }
  var $JSCompiler_inline_result$$492_or__4251__auto__$$inline_678_or__4251__auto____$1$$inline_679$$;
  $JSCompiler_inline_result$$492_or__4251__auto__$$inline_678_or__4251__auto____$1$$inline_679$$ = $cljs$core$_reset_BANG_$$[$goog$typeOf$$(null == $o$$214$$ ? null : $o$$214$$)];
  if (!$JSCompiler_inline_result$$492_or__4251__auto__$$inline_678_or__4251__auto____$1$$inline_679$$ && ($JSCompiler_inline_result$$492_or__4251__auto__$$inline_678_or__4251__auto____$1$$inline_679$$ = $cljs$core$_reset_BANG_$$._, !$JSCompiler_inline_result$$492_or__4251__auto__$$inline_678_or__4251__auto____$1$$inline_679$$)) {
    throw $cljs$core$missing_protocol$$("IReset.-reset!", $o$$214$$);
  }
  return $JSCompiler_inline_result$$492_or__4251__auto__$$inline_678_or__4251__auto____$1$$inline_679$$.call(null, $o$$214$$, $new_value$$);
}, $cljs$core$_swap_BANG_$$ = function $cljs$core$_swap_BANG_$$() {
  switch(arguments.length) {
    case 2:
      return $cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    case 4:
      return $cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return $cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$5$(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([$cljs$core$str$$("Invalid arity: "), $cljs$core$str$$(arguments.length)].join(""));;
  }
};
$cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$ = function($o$$215$$, $f$$397$$) {
  if ($o$$215$$ ? $o$$215$$.$cljs$core$ISwap$_swap_BANG_$arity$2$ : $o$$215$$) {
    return $o$$215$$.$cljs$core$ISwap$_swap_BANG_$arity$2$($o$$215$$, $f$$397$$);
  }
  var $JSCompiler_inline_result$$493_or__4251__auto__$$inline_681_or__4251__auto____$1$$inline_682$$;
  $JSCompiler_inline_result$$493_or__4251__auto__$$inline_681_or__4251__auto____$1$$inline_682$$ = $cljs$core$_swap_BANG_$$[$goog$typeOf$$(null == $o$$215$$ ? null : $o$$215$$)];
  if (!$JSCompiler_inline_result$$493_or__4251__auto__$$inline_681_or__4251__auto____$1$$inline_682$$ && ($JSCompiler_inline_result$$493_or__4251__auto__$$inline_681_or__4251__auto____$1$$inline_682$$ = $cljs$core$_swap_BANG_$$._, !$JSCompiler_inline_result$$493_or__4251__auto__$$inline_681_or__4251__auto____$1$$inline_682$$)) {
    throw $cljs$core$missing_protocol$$("ISwap.-swap!", $o$$215$$);
  }
  return $JSCompiler_inline_result$$493_or__4251__auto__$$inline_681_or__4251__auto____$1$$inline_682$$.call(null, $o$$215$$, $f$$397$$);
};
$cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$ = function($o$$216$$, $f$$398$$, $a$$1422$$) {
  if ($o$$216$$ ? $o$$216$$.$cljs$core$ISwap$_swap_BANG_$arity$3$ : $o$$216$$) {
    return $o$$216$$.$cljs$core$ISwap$_swap_BANG_$arity$3$($o$$216$$, $f$$398$$, $a$$1422$$);
  }
  var $JSCompiler_inline_result$$494_or__4251__auto__$$inline_684_or__4251__auto____$1$$inline_685$$;
  $JSCompiler_inline_result$$494_or__4251__auto__$$inline_684_or__4251__auto____$1$$inline_685$$ = $cljs$core$_swap_BANG_$$[$goog$typeOf$$(null == $o$$216$$ ? null : $o$$216$$)];
  if (!$JSCompiler_inline_result$$494_or__4251__auto__$$inline_684_or__4251__auto____$1$$inline_685$$ && ($JSCompiler_inline_result$$494_or__4251__auto__$$inline_684_or__4251__auto____$1$$inline_685$$ = $cljs$core$_swap_BANG_$$._, !$JSCompiler_inline_result$$494_or__4251__auto__$$inline_684_or__4251__auto____$1$$inline_685$$)) {
    throw $cljs$core$missing_protocol$$("ISwap.-swap!", $o$$216$$);
  }
  return $JSCompiler_inline_result$$494_or__4251__auto__$$inline_684_or__4251__auto____$1$$inline_685$$.call(null, $o$$216$$, $f$$398$$, $a$$1422$$);
};
$cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$ = function($o$$217$$, $f$$399$$, $a$$1423$$, $b$$994$$) {
  if ($o$$217$$ ? $o$$217$$.$cljs$core$ISwap$_swap_BANG_$arity$4$ : $o$$217$$) {
    return $o$$217$$.$cljs$core$ISwap$_swap_BANG_$arity$4$($o$$217$$, $f$$399$$, $a$$1423$$, $b$$994$$);
  }
  var $JSCompiler_inline_result$$495_or__4251__auto__$$inline_687_or__4251__auto____$1$$inline_688$$;
  $JSCompiler_inline_result$$495_or__4251__auto__$$inline_687_or__4251__auto____$1$$inline_688$$ = $cljs$core$_swap_BANG_$$[$goog$typeOf$$(null == $o$$217$$ ? null : $o$$217$$)];
  if (!$JSCompiler_inline_result$$495_or__4251__auto__$$inline_687_or__4251__auto____$1$$inline_688$$ && ($JSCompiler_inline_result$$495_or__4251__auto__$$inline_687_or__4251__auto____$1$$inline_688$$ = $cljs$core$_swap_BANG_$$._, !$JSCompiler_inline_result$$495_or__4251__auto__$$inline_687_or__4251__auto____$1$$inline_688$$)) {
    throw $cljs$core$missing_protocol$$("ISwap.-swap!", $o$$217$$);
  }
  return $JSCompiler_inline_result$$495_or__4251__auto__$$inline_687_or__4251__auto____$1$$inline_688$$.call(null, $o$$217$$, $f$$399$$, $a$$1423$$, $b$$994$$);
};
$cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$5$ = function($o$$218$$, $f$$400$$, $a$$1424$$, $b$$995$$, $xs$$) {
  if ($o$$218$$ ? $o$$218$$.$cljs$core$ISwap$_swap_BANG_$arity$5$ : $o$$218$$) {
    return $o$$218$$.$cljs$core$ISwap$_swap_BANG_$arity$5$($o$$218$$, $f$$400$$, $a$$1424$$, $b$$995$$, $xs$$);
  }
  var $JSCompiler_inline_result$$496_or__4251__auto__$$inline_690_or__4251__auto____$1$$inline_691$$;
  $JSCompiler_inline_result$$496_or__4251__auto__$$inline_690_or__4251__auto____$1$$inline_691$$ = $cljs$core$_swap_BANG_$$[$goog$typeOf$$(null == $o$$218$$ ? null : $o$$218$$)];
  if (!$JSCompiler_inline_result$$496_or__4251__auto__$$inline_690_or__4251__auto____$1$$inline_691$$ && ($JSCompiler_inline_result$$496_or__4251__auto__$$inline_690_or__4251__auto____$1$$inline_691$$ = $cljs$core$_swap_BANG_$$._, !$JSCompiler_inline_result$$496_or__4251__auto__$$inline_690_or__4251__auto____$1$$inline_691$$)) {
    throw $cljs$core$missing_protocol$$("ISwap.-swap!", $o$$218$$);
  }
  return $JSCompiler_inline_result$$496_or__4251__auto__$$inline_690_or__4251__auto____$1$$inline_691$$.call(null, $o$$218$$, $f$$400$$, $a$$1424$$, $b$$995$$, $xs$$);
};
$cljs$core$_swap_BANG_$$.$cljs$lang$maxFixedArity$ = 5;
var $cljs$core$_iterator$$ = function $cljs$core$_iterator$$($coll$$30$$) {
  if ($coll$$30$$ ? $coll$$30$$.$cljs$core$IIterable$_iterator$arity$1$ : $coll$$30$$) {
    return $coll$$30$$.$cljs$core$IIterable$_iterator$arity$1$($coll$$30$$);
  }
  var $JSCompiler_inline_result$$497_or__4251__auto__$$inline_693_or__4251__auto____$1$$inline_694$$;
  $JSCompiler_inline_result$$497_or__4251__auto__$$inline_693_or__4251__auto____$1$$inline_694$$ = $cljs$core$_iterator$$[$goog$typeOf$$(null == $coll$$30$$ ? null : $coll$$30$$)];
  if (!$JSCompiler_inline_result$$497_or__4251__auto__$$inline_693_or__4251__auto____$1$$inline_694$$ && ($JSCompiler_inline_result$$497_or__4251__auto__$$inline_693_or__4251__auto____$1$$inline_694$$ = $cljs$core$_iterator$$._, !$JSCompiler_inline_result$$497_or__4251__auto__$$inline_693_or__4251__auto____$1$$inline_694$$)) {
    throw $cljs$core$missing_protocol$$("IIterable.-iterator", $coll$$30$$);
  }
  return $JSCompiler_inline_result$$497_or__4251__auto__$$inline_693_or__4251__auto____$1$$inline_694$$.call(null, $coll$$30$$);
};
function $cljs$core$StringBufferWriter$$($sb$$2$$) {
  this.$sb$ = $sb$$2$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 1073741824;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$cljs$core$StringBufferWriter$$.prototype.$cljs$core$IWriter$_write$arity$2$ = function($_$$24$$, $s$$121$$) {
  return this.$sb$.append($s$$121$$);
};
function $cljs$core$pr_str_STAR_$$($obj$$67$$) {
  var $sb$$4$$ = new $goog$string$StringBuffer$$;
  $obj$$67$$.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$(null, new $cljs$core$StringBufferWriter$$($sb$$4$$), $cljs$core$pr_opts$$());
  return "" + $cljs$core$str$$($sb$$4$$);
}
var $cljs$core$imul$$ = "undefined" !== typeof Math.imul && 0 !== Math.imul(4294967295, 5) ? function($a$$1425$$, $b$$996$$) {
  return Math.imul($a$$1425$$, $b$$996$$);
} : function($a$$1426$$, $b$$997$$) {
  var $al$$ = $a$$1426$$ & 65535, $bl$$ = $b$$997$$ & 65535;
  return $al$$ * $bl$$ + (($a$$1426$$ >>> 16 & 65535) * $bl$$ + $al$$ * ($b$$997$$ >>> 16 & 65535) << 16 >>> 0) | 0;
};
function $cljs$core$m3_mix_K1$$($k1_x$$inline_99$$) {
  $k1_x$$inline_99$$ = $cljs$core$imul$$($k1_x$$inline_99$$ | 0, -862048943);
  return $cljs$core$imul$$($k1_x$$inline_99$$ << 15 | $k1_x$$inline_99$$ >>> -15, 461845907);
}
function $cljs$core$m3_mix_H1$$($h1$$, $k1$$1$$) {
  var $x$$inline_102$$ = ($h1$$ | 0) ^ ($k1$$1$$ | 0);
  return $cljs$core$imul$$($x$$inline_102$$ << 13 | $x$$inline_102$$ >>> -13, 5) + -430675100 | 0;
}
function $cljs$core$m3_fmix$$($h1$$1$$, $len$$1$$) {
  var $h1__$2_h1__$4_h1__$6$$ = ($h1$$1$$ | 0) ^ $len$$1$$, $h1__$2_h1__$4_h1__$6$$ = $cljs$core$imul$$($h1__$2_h1__$4_h1__$6$$ ^ $h1__$2_h1__$4_h1__$6$$ >>> 16, -2048144789), $h1__$2_h1__$4_h1__$6$$ = $cljs$core$imul$$($h1__$2_h1__$4_h1__$6$$ ^ $h1__$2_h1__$4_h1__$6$$ >>> 13, -1028477387);
  return $h1__$2_h1__$4_h1__$6$$ ^ $h1__$2_h1__$4_h1__$6$$ >>> 16;
}
function $cljs$core$m3_hash_unencoded_chars$$($in$$$1$$) {
  var $h1$$3_h1__$1$$1_i$$inline_105$$;
  a: {
    $h1$$3_h1__$1$$1_i$$inline_105$$ = 1;
    for (var $G__18160$$inline_108_h1$$inline_106$$ = 0;;) {
      if ($h1$$3_h1__$1$$1_i$$inline_105$$ < $in$$$1$$.length) {
        var $G__18159$$inline_107$$ = $h1$$3_h1__$1$$1_i$$inline_105$$ + 2, $G__18160$$inline_108_h1$$inline_106$$ = $cljs$core$m3_mix_H1$$($G__18160$$inline_108_h1$$inline_106$$, $cljs$core$m3_mix_K1$$($in$$$1$$.charCodeAt($h1$$3_h1__$1$$1_i$$inline_105$$ - 1) | $in$$$1$$.charCodeAt($h1$$3_h1__$1$$1_i$$inline_105$$) << 16));
        $h1$$3_h1__$1$$1_i$$inline_105$$ = $G__18159$$inline_107$$;
      } else {
        $h1$$3_h1__$1$$1_i$$inline_105$$ = $G__18160$$inline_108_h1$$inline_106$$;
        break a;
      }
    }
  }
  $h1$$3_h1__$1$$1_i$$inline_105$$ = 1 === ($in$$$1$$.length & 1) ? $h1$$3_h1__$1$$1_i$$inline_105$$ ^ $cljs$core$m3_mix_K1$$($in$$$1$$.charCodeAt($in$$$1$$.length - 1)) : $h1$$3_h1__$1$$1_i$$inline_105$$;
  return $cljs$core$m3_fmix$$($h1$$3_h1__$1$$1_i$$inline_105$$, $cljs$core$imul$$(2, $in$$$1$$.length));
}
var $cljs$core$string_hash_cache$$ = {}, $cljs$core$string_hash_cache_count$$ = 0;
function $cljs$core$hash_string$$($JSCompiler_temp$$503_k$$98$$) {
  255 < $cljs$core$string_hash_cache_count$$ && ($cljs$core$string_hash_cache$$ = {}, $cljs$core$string_hash_cache_count$$ = 0);
  var $h$$207_h$$inline_697_len$$inline_698$$ = $cljs$core$string_hash_cache$$[$JSCompiler_temp$$503_k$$98$$];
  if ("number" !== typeof $h$$207_h$$inline_697_len$$inline_698$$) {
    a: {
      if (null != $JSCompiler_temp$$503_k$$98$$) {
        if ($h$$207_h$$inline_697_len$$inline_698$$ = $JSCompiler_temp$$503_k$$98$$.length, 0 < $h$$207_h$$inline_697_len$$inline_698$$) {
          for (var $i$$inline_699$$ = 0, $G__18164$$inline_702_hash$$inline_700$$ = 0;;) {
            if ($i$$inline_699$$ < $h$$207_h$$inline_697_len$$inline_698$$) {
              var $G__18163$$inline_701$$ = $i$$inline_699$$ + 1, $G__18164$$inline_702_hash$$inline_700$$ = $cljs$core$imul$$(31, $G__18164$$inline_702_hash$$inline_700$$) + $JSCompiler_temp$$503_k$$98$$.charCodeAt($i$$inline_699$$), $i$$inline_699$$ = $G__18163$$inline_701$$
            } else {
              $h$$207_h$$inline_697_len$$inline_698$$ = $G__18164$$inline_702_hash$$inline_700$$;
              break a;
            }
          }
        } else {
          $h$$207_h$$inline_697_len$$inline_698$$ = 0;
        }
      } else {
        $h$$207_h$$inline_697_len$$inline_698$$ = 0;
      }
    }
    $cljs$core$string_hash_cache$$[$JSCompiler_temp$$503_k$$98$$] = $h$$207_h$$inline_697_len$$inline_698$$;
    $cljs$core$string_hash_cache_count$$ += 1;
  }
  return $JSCompiler_temp$$503_k$$98$$ = $h$$207_h$$inline_697_len$$inline_698$$;
}
function $cljs$core$hash$$($JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$) {
  $JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$ && ($JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$.$cljs$lang$protocol_mask$partition0$$ & 4194304 || $JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$.$cljs$core$IHash$$) ? 
  $JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$ = $JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$.$cljs$core$IHash$_hash$arity$1$(null) : "number" === typeof $JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$ ? 
  $JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$ = Math.floor($JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$) % 2147483647 : !0 === $JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$ ? 
  $JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$ = 1 : !1 === $JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$ ? $JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$ = 
  0 : "string" === typeof $JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$ ? ($JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$ = $cljs$core$hash_string$$($JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$), 
  0 !== $JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$ && ($JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$ = $cljs$core$m3_mix_K1$$($JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$), 
  $JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$ = $cljs$core$m3_mix_H1$$(0, $JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$), $JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$ = 
  $cljs$core$m3_fmix$$($JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$, 4))) : $JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$ = $JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$ instanceof 
  Date ? $JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$.valueOf() : null == $JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$ ? 0 : $cljs$core$_hash$$($JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$);
  return $JSCompiler_temp$$498_JSCompiler_temp$$499_JSCompiler_temp$$500_JSCompiler_temp$$501_JSCompiler_temp$$502_h1$$inline_707_in$$$inline_705_k1$$inline_706_o$$220$$;
}
function $cljs$core$hash_combine$$($seed$$, $hash$$1$$) {
  return $seed$$ ^ $hash$$1$$ + 2654435769 + ($seed$$ << 6) + ($seed$$ >> 2);
}
function $cljs$core$compare_symbols$$($a$$1427$$, $b$$998$$) {
  if ($a$$1427$$.$str$ === $b$$998$$.$str$) {
    return 0;
  }
  var $and__4239__auto__$$inline_709_nsc$$ = $cljs$core$not$$($a$$1427$$.$ns$);
  if ($cljs$core$truth_$$($and__4239__auto__$$inline_709_nsc$$ ? $b$$998$$.$ns$ : $and__4239__auto__$$inline_709_nsc$$)) {
    return -1;
  }
  if ($cljs$core$truth_$$($a$$1427$$.$ns$)) {
    if ($cljs$core$not$$($b$$998$$.$ns$)) {
      return 1;
    }
    $and__4239__auto__$$inline_709_nsc$$ = $goog$array$defaultCompare$$($a$$1427$$.$ns$, $b$$998$$.$ns$);
    return 0 === $and__4239__auto__$$inline_709_nsc$$ ? $goog$array$defaultCompare$$($a$$1427$$.name, $b$$998$$.name) : $and__4239__auto__$$inline_709_nsc$$;
  }
  return $goog$array$defaultCompare$$($a$$1427$$.name, $b$$998$$.name);
}
function $cljs$core$Symbol$$($ns$$, $name$$61$$, $str$$55$$, $_hash$$, $_meta$$) {
  this.$ns$ = $ns$$;
  this.name = $name$$61$$;
  this.$str$ = $str$$55$$;
  this._hash = $_hash$$;
  this.$_meta$ = $_meta$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 2154168321;
  this.$cljs$lang$protocol_mask$partition1$$ = 4096;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$Symbol$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return this.$str$;
};
$JSCompiler_prototypeAlias$$.equiv = function($other$$4$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$$4$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($_$$27$$, $other$$5$$) {
  return $other$$5$$ instanceof $cljs$core$Symbol$$ ? this.$str$ === $other$$5$$.$str$ : !1;
};
$JSCompiler_prototypeAlias$$.call = function() {
  var $G__18186$$ = null, $G__18186$$ = function($G__18186$$, $coll$$33$$, $not_found$$3$$) {
    switch(arguments.length) {
      case 2:
        return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$($coll$$33$$, this, null);
      case 3:
        return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$($coll$$33$$, this, $not_found$$3$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__18186$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__18186$$, $coll$$31$$) {
    return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$($coll$$31$$, this, null);
  };
  $G__18186$$.$cljs$core$IFn$_invoke$arity$3$ = function($G__18186$$, $coll$$32$$, $not_found$$2$$) {
    return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$($coll$$32$$, this, $not_found$$2$$);
  };
  return $G__18186$$;
}();
$JSCompiler_prototypeAlias$$.apply = function($self__$$9$$, $args18185$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args18185$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($coll$$34$$) {
  return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$($coll$$34$$, this, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($coll$$35$$, $not_found$$4$$) {
  return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$($coll$$35$$, this, $not_found$$4$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$_meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($_$$29$$, $new_meta$$) {
  return new $cljs$core$Symbol$$(this.$ns$, this.name, this.$str$, this._hash, $new_meta$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4667__auto___h__4667__auto____$1$$ = this._hash;
  return null != $h__4667__auto___h__4667__auto____$1$$ ? $h__4667__auto___h__4667__auto____$1$$ : this._hash = $h__4667__auto___h__4667__auto____$1$$ = $cljs$core$hash_combine$$($cljs$core$m3_hash_unencoded_chars$$(this.name), $cljs$core$hash_string$$(this.$ns$));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($o$$222$$, $writer$$4$$) {
  return $cljs$core$_write$$($writer$$4$$, this.$str$);
};
function $cljs$core$symbol$cljs$0core$0IFn$0_invoke$0arity$01$$() {
  var $name$$63$$ = [$cljs$core$str$$("reagent"), $cljs$core$str$$($cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$gensym_counter$$, $cljs$core$inc$$))].join("");
  return $name$$63$$ instanceof $cljs$core$Symbol$$ ? $name$$63$$ : new $cljs$core$Symbol$$(null, $name$$63$$, $name$$63$$, null, null);
}
function $cljs$core$seq$$($coll$$36$$) {
  if (null == $coll$$36$$) {
    return null;
  }
  if ($coll$$36$$ && ($coll$$36$$.$cljs$lang$protocol_mask$partition0$$ & 8388608 || $coll$$36$$.$cljs$core$ISeqable$$)) {
    return $coll$$36$$.$cljs$core$ISeqable$_seq$arity$1$(null);
  }
  if ($cljs$core$array_QMARK_$$($coll$$36$$) || "string" === typeof $coll$$36$$) {
    return 0 === $coll$$36$$.length ? null : new $cljs$core$IndexedSeq$$($coll$$36$$, 0);
  }
  if ($cljs$core$native_satisfies_QMARK_$$($cljs$core$ISeqable$$, $coll$$36$$)) {
    return $cljs$core$_seq$$($coll$$36$$);
  }
  throw Error([$cljs$core$str$$($coll$$36$$), $cljs$core$str$$(" is not ISeqable")].join(""));
}
function $cljs$core$first$$($coll$$37_s$$130$$) {
  if (null == $coll$$37_s$$130$$) {
    return null;
  }
  if ($coll$$37_s$$130$$ && ($coll$$37_s$$130$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $coll$$37_s$$130$$.$cljs$core$ISeq$$)) {
    return $coll$$37_s$$130$$.$cljs$core$ISeq$_first$arity$1$(null);
  }
  $coll$$37_s$$130$$ = $cljs$core$seq$$($coll$$37_s$$130$$);
  return null == $coll$$37_s$$130$$ ? null : $cljs$core$_first$$($coll$$37_s$$130$$);
}
function $cljs$core$rest$$($coll$$38_s$$131$$) {
  return null != $coll$$38_s$$131$$ ? $coll$$38_s$$131$$ && ($coll$$38_s$$131$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $coll$$38_s$$131$$.$cljs$core$ISeq$$) ? $coll$$38_s$$131$$.$cljs$core$ISeq$_rest$arity$1$(null) : ($coll$$38_s$$131$$ = $cljs$core$seq$$($coll$$38_s$$131$$)) ? $cljs$core$_rest$$($coll$$38_s$$131$$) : $cljs$core$List$EMPTY$$ : $cljs$core$List$EMPTY$$;
}
function $cljs$core$next$$($coll$$39$$) {
  return null == $coll$$39$$ ? null : $coll$$39$$ && ($coll$$39$$.$cljs$lang$protocol_mask$partition0$$ & 128 || $coll$$39$$.$cljs$core$INext$$) ? $coll$$39$$.$cljs$core$INext$_next$arity$1$(null) : $cljs$core$seq$$($cljs$core$rest$$($coll$$39$$));
}
var $cljs$core$_EQ_$$ = function $cljs$core$_EQ_$$() {
  switch(arguments.length) {
    case 1:
      return $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      return $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], new $cljs$core$IndexedSeq$$(Array.prototype.slice.call(arguments, 2), 0));
  }
};
$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$1$ = function() {
  return !0;
};
$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$$95$$, $y$$65$$) {
  return null == $x$$95$$ ? null == $y$$65$$ : $x$$95$$ === $y$$65$$ || $cljs$core$_equiv$$($x$$95$$, $y$$65$$);
};
$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($G__18254_x$$96$$, $G__18255_y$$66$$, $G__18256_more$$) {
  for (;;) {
    if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($G__18254_x$$96$$, $G__18255_y$$66$$)) {
      if ($cljs$core$next$$($G__18256_more$$)) {
        $G__18254_x$$96$$ = $G__18255_y$$66$$, $G__18255_y$$66$$ = $cljs$core$first$$($G__18256_more$$), $G__18256_more$$ = $cljs$core$next$$($G__18256_more$$);
      } else {
        return $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($G__18255_y$$66$$, $cljs$core$first$$($G__18256_more$$));
      }
    } else {
      return !1;
    }
  }
};
$cljs$core$_EQ_$$.$cljs$lang$applyTo$ = function($G__18250_seq18248$$) {
  var $G__18249$$ = $cljs$core$first$$($G__18250_seq18248$$), $seq18248__$1_seq18248__$2$$ = $cljs$core$next$$($G__18250_seq18248$$);
  $G__18250_seq18248$$ = $cljs$core$first$$($seq18248__$1_seq18248__$2$$);
  $seq18248__$1_seq18248__$2$$ = $cljs$core$next$$($seq18248__$1_seq18248__$2$$);
  return $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$variadic$($G__18249$$, $G__18250_seq18248$$, $seq18248__$1_seq18248__$2$$);
};
$cljs$core$_EQ_$$.$cljs$lang$maxFixedArity$ = 2;
function $cljs$core$ES6Iterator$$($s$$132$$) {
  this.s = $s$$132$$;
}
$cljs$core$ES6Iterator$$.prototype.next = function() {
  if (null != this.s) {
    var $x$$97$$ = $cljs$core$first$$(this.s);
    this.s = $cljs$core$next$$(this.s);
    return {value:$x$$97$$, done:!1};
  }
  return {value:null, done:!0};
};
function $cljs$core$es6_iterator$$($coll$$40$$) {
  return new $cljs$core$ES6Iterator$$($cljs$core$seq$$($coll$$40$$));
}
function $cljs$core$mix_collection_hash$$($hash_basis$$, $count$$12$$) {
  var $h1__$1$$2_k1$$3$$ = $cljs$core$m3_mix_K1$$($hash_basis$$), $h1__$1$$2_k1$$3$$ = $cljs$core$m3_mix_H1$$(0, $h1__$1$$2_k1$$3$$);
  return $cljs$core$m3_fmix$$($h1__$1$$2_k1$$3$$, $count$$12$$);
}
function $cljs$core$hash_ordered_coll$$($G__18260_coll$$41_coll__$1$$) {
  var $G__18258_n$$554$$ = 0, $G__18259_hash_code$$ = 1;
  for ($G__18260_coll$$41_coll__$1$$ = $cljs$core$seq$$($G__18260_coll$$41_coll__$1$$);;) {
    if (null != $G__18260_coll$$41_coll__$1$$) {
      $G__18258_n$$554$$ += 1, $G__18259_hash_code$$ = $cljs$core$imul$$(31, $G__18259_hash_code$$) + $cljs$core$hash$$($cljs$core$first$$($G__18260_coll$$41_coll__$1$$)) | 0, $G__18260_coll$$41_coll__$1$$ = $cljs$core$next$$($G__18260_coll$$41_coll__$1$$);
    } else {
      return $cljs$core$mix_collection_hash$$($G__18259_hash_code$$, $G__18258_n$$554$$);
    }
  }
}
var $cljs$core$empty_ordered_hash$$ = $cljs$core$mix_collection_hash$$(1, 0);
function $cljs$core$hash_unordered_coll$$($G__18263_coll$$42_coll__$1$$1$$) {
  var $G__18261_n$$555$$ = 0, $G__18262_hash_code$$1$$ = 0;
  for ($G__18263_coll$$42_coll__$1$$1$$ = $cljs$core$seq$$($G__18263_coll$$42_coll__$1$$1$$);;) {
    if (null != $G__18263_coll$$42_coll__$1$$1$$) {
      $G__18261_n$$555$$ += 1, $G__18262_hash_code$$1$$ = $G__18262_hash_code$$1$$ + $cljs$core$hash$$($cljs$core$first$$($G__18263_coll$$42_coll__$1$$1$$)) | 0, $G__18263_coll$$42_coll__$1$$1$$ = $cljs$core$next$$($G__18263_coll$$42_coll__$1$$1$$);
    } else {
      return $cljs$core$mix_collection_hash$$($G__18262_hash_code$$1$$, $G__18261_n$$555$$);
    }
  }
}
var $cljs$core$empty_unordered_hash$$ = $cljs$core$mix_collection_hash$$(0, 0);
$cljs$core$ICounted$$["null"] = !0;
$cljs$core$_count$$["null"] = function() {
  return 0;
};
Date.prototype.$cljs$core$IEquiv$_equiv$arity$2$ = function($o$$238$$, $other$$6$$) {
  return $other$$6$$ instanceof Date && this.valueOf() === $other$$6$$.valueOf();
};
Date.prototype.$cljs$core$IComparable$$ = !0;
Date.prototype.$cljs$core$IComparable$_compare$arity$2$ = function($this$$$27$$, $other$$7$$) {
  if ($other$$7$$ instanceof Date) {
    return $goog$array$defaultCompare$$(this.valueOf(), $other$$7$$.valueOf());
  }
  throw Error([$cljs$core$str$$("Cannot compare "), $cljs$core$str$$(this), $cljs$core$str$$(" to "), $cljs$core$str$$($other$$7$$)].join(""));
};
$cljs$core$_equiv$$.number = function($x$$98$$, $o$$239$$) {
  return $x$$98$$ === $o$$239$$;
};
$cljs$core$Fn$$["function"] = !0;
$cljs$core$IMeta$$["function"] = !0;
$cljs$core$_meta$$["function"] = function() {
  return null;
};
$cljs$core$_hash$$._ = function($o$$240$$) {
  return $goog$getUid$$($o$$240$$);
};
function $cljs$core$inc$$($x$$99$$) {
  return $x$$99$$ + 1;
}
function $cljs$core$Reduced$$($val$$30$$) {
  this.$val$ = $val$$30$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 32768;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$cljs$core$Reduced$$.prototype.$cljs$core$IDeref$_deref$arity$1$ = function() {
  return this.$val$;
};
function $cljs$core$reduced_QMARK_$$($r$$434$$) {
  return $r$$434$$ instanceof $cljs$core$Reduced$$;
}
function $cljs$core$deref$$($o$$242$$) {
  return $cljs$core$_deref$$($o$$242$$);
}
function $cljs$core$ci_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($cicoll$$, $f$$434$$) {
  var $cnt$$ = $cljs$core$_count$$($cicoll$$);
  if (0 === $cnt$$) {
    return $f$$434$$.$cljs$core$IFn$_invoke$arity$0$ ? $f$$434$$.$cljs$core$IFn$_invoke$arity$0$() : $f$$434$$.call(null);
  }
  for (var $G__18271$$inline_121_nval_val$$32$$ = $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($cicoll$$, 0), $G__18279_n$$556$$ = 1;;) {
    if ($G__18279_n$$556$$ < $cnt$$) {
      var $G__18272$$inline_122$$ = $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($cicoll$$, $G__18279_n$$556$$), $G__18271$$inline_121_nval_val$$32$$ = $f$$434$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$$434$$.$cljs$core$IFn$_invoke$arity$2$($G__18271$$inline_121_nval_val$$32$$, $G__18272$$inline_122$$) : $f$$434$$.call(null, $G__18271$$inline_121_nval_val$$32$$, $G__18272$$inline_122$$);
      if ($cljs$core$reduced_QMARK_$$($G__18271$$inline_121_nval_val$$32$$)) {
        return $cljs$core$_deref$$($G__18271$$inline_121_nval_val$$32$$);
      }
      $G__18279_n$$556$$ += 1;
    } else {
      return $G__18271$$inline_121_nval_val$$32$$;
    }
  }
}
function $cljs$core$ci_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($cicoll$$1$$, $f$$435$$, $G__18281_n$$557_val$$33$$) {
  var $cnt$$1$$ = $cljs$core$_count$$($cicoll$$1$$), $G__18273$$inline_124_nval$$1_val__$1$$ = $G__18281_n$$557_val$$33$$;
  for ($G__18281_n$$557_val$$33$$ = 0;;) {
    if ($G__18281_n$$557_val$$33$$ < $cnt$$1$$) {
      var $G__18274$$inline_125$$ = $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($cicoll$$1$$, $G__18281_n$$557_val$$33$$), $G__18273$$inline_124_nval$$1_val__$1$$ = $f$$435$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$$435$$.$cljs$core$IFn$_invoke$arity$2$($G__18273$$inline_124_nval$$1_val__$1$$, $G__18274$$inline_125$$) : $f$$435$$.call(null, $G__18273$$inline_124_nval$$1_val__$1$$, $G__18274$$inline_125$$);
      if ($cljs$core$reduced_QMARK_$$($G__18273$$inline_124_nval$$1_val__$1$$)) {
        return $cljs$core$_deref$$($G__18273$$inline_124_nval$$1_val__$1$$);
      }
      $G__18281_n$$557_val$$33$$ += 1;
    } else {
      return $G__18273$$inline_124_nval$$1_val__$1$$;
    }
  }
}
function $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($arr$$61$$, $f$$437$$) {
  var $cnt$$3$$ = $arr$$61$$.length;
  if (0 === $arr$$61$$.length) {
    return $f$$437$$.$cljs$core$IFn$_invoke$arity$0$ ? $f$$437$$.$cljs$core$IFn$_invoke$arity$0$() : $f$$437$$.call(null);
  }
  for (var $G__18286$$inline_127_nval$$3_val$$35$$ = $arr$$61$$[0], $G__18294_n$$559$$ = 1;;) {
    if ($G__18294_n$$559$$ < $cnt$$3$$) {
      var $G__18287$$inline_128$$ = $arr$$61$$[$G__18294_n$$559$$], $G__18286$$inline_127_nval$$3_val$$35$$ = $f$$437$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$$437$$.$cljs$core$IFn$_invoke$arity$2$($G__18286$$inline_127_nval$$3_val$$35$$, $G__18287$$inline_128$$) : $f$$437$$.call(null, $G__18286$$inline_127_nval$$3_val$$35$$, $G__18287$$inline_128$$);
      if ($cljs$core$reduced_QMARK_$$($G__18286$$inline_127_nval$$3_val$$35$$)) {
        return $cljs$core$_deref$$($G__18286$$inline_127_nval$$3_val$$35$$);
      }
      $G__18294_n$$559$$ += 1;
    } else {
      return $G__18286$$inline_127_nval$$3_val$$35$$;
    }
  }
}
function $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($arr$$62$$, $f$$438$$, $G__18296_n$$560_val$$36$$) {
  var $cnt$$4$$ = $arr$$62$$.length, $G__18288$$inline_130_nval$$4_val__$1$$2$$ = $G__18296_n$$560_val$$36$$;
  for ($G__18296_n$$560_val$$36$$ = 0;;) {
    if ($G__18296_n$$560_val$$36$$ < $cnt$$4$$) {
      var $G__18289$$inline_131$$ = $arr$$62$$[$G__18296_n$$560_val$$36$$], $G__18288$$inline_130_nval$$4_val__$1$$2$$ = $f$$438$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$$438$$.$cljs$core$IFn$_invoke$arity$2$($G__18288$$inline_130_nval$$4_val__$1$$2$$, $G__18289$$inline_131$$) : $f$$438$$.call(null, $G__18288$$inline_130_nval$$4_val__$1$$2$$, $G__18289$$inline_131$$);
      if ($cljs$core$reduced_QMARK_$$($G__18288$$inline_130_nval$$4_val__$1$$2$$)) {
        return $cljs$core$_deref$$($G__18288$$inline_130_nval$$4_val__$1$$2$$);
      }
      $G__18296_n$$560_val$$36$$ += 1;
    } else {
      return $G__18288$$inline_130_nval$$4_val__$1$$2$$;
    }
  }
}
function $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$04$$($arr$$63$$, $f$$439$$, $G__18290$$inline_133_nval$$5_val$$37_val__$1$$3$$, $G__18298_idx$$2_n$$561$$) {
  for (var $cnt$$5$$ = $arr$$63$$.length;;) {
    if ($G__18298_idx$$2_n$$561$$ < $cnt$$5$$) {
      var $G__18291$$inline_134$$ = $arr$$63$$[$G__18298_idx$$2_n$$561$$];
      $G__18290$$inline_133_nval$$5_val$$37_val__$1$$3$$ = $f$$439$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$$439$$.$cljs$core$IFn$_invoke$arity$2$($G__18290$$inline_133_nval$$5_val$$37_val__$1$$3$$, $G__18291$$inline_134$$) : $f$$439$$.call(null, $G__18290$$inline_133_nval$$5_val$$37_val__$1$$3$$, $G__18291$$inline_134$$);
      if ($cljs$core$reduced_QMARK_$$($G__18290$$inline_133_nval$$5_val$$37_val__$1$$3$$)) {
        return $cljs$core$_deref$$($G__18290$$inline_133_nval$$5_val$$37_val__$1$$3$$);
      }
      $G__18298_idx$$2_n$$561$$ += 1;
    } else {
      return $G__18290$$inline_133_nval$$5_val$$37_val__$1$$3$$;
    }
  }
}
function $cljs$core$counted_QMARK_$$($x$$103$$) {
  return $x$$103$$ ? $x$$103$$.$cljs$lang$protocol_mask$partition0$$ & 2 || $x$$103$$.$cljs$core$ICounted$$ ? !0 : $x$$103$$.$cljs$lang$protocol_mask$partition0$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ICounted$$, $x$$103$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ICounted$$, $x$$103$$);
}
function $cljs$core$indexed_QMARK_$$($x$$104$$) {
  return $x$$104$$ ? $x$$104$$.$cljs$lang$protocol_mask$partition0$$ & 16 || $x$$104$$.$cljs$core$IIndexed$$ ? !0 : $x$$104$$.$cljs$lang$protocol_mask$partition0$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IIndexed$$, $x$$104$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IIndexed$$, $x$$104$$);
}
function $cljs$core$IndexedSeqIterator$$($arr$$64$$, $i$$387$$) {
  this.$arr$ = $arr$$64$$;
  this.i = $i$$387$$;
}
$cljs$core$IndexedSeqIterator$$.prototype.$hasNext$ = function() {
  return this.i < this.$arr$.length;
};
$cljs$core$IndexedSeqIterator$$.prototype.next = function() {
  var $ret$$1$$ = this.$arr$[this.i];
  this.i += 1;
  return $ret$$1$$;
};
function $cljs$core$IndexedSeq$$($arr$$66$$, $i$$389$$) {
  this.$arr$ = $arr$$66$$;
  this.i = $i$$389$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 166199550;
  this.$cljs$lang$protocol_mask$partition1$$ = 8192;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$IndexedSeq$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$$8$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$$8$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$2$ = function($coll$$44$$, $n$$562$$) {
  var $i__$1$$ = $n$$562$$ + this.i;
  return $i__$1$$ < this.$arr$.length ? this.$arr$[$i__$1$$] : null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$3$ = function($coll$$45_i__$1$$1$$, $n$$563$$, $not_found$$5$$) {
  $coll$$45_i__$1$$1$$ = $n$$563$$ + this.i;
  return $coll$$45_i__$1$$1$$ < this.$arr$.length ? this.$arr$[$coll$$45_i__$1$$1$$] : $not_found$$5$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIterable$_iterator$arity$1$ = function() {
  return new $cljs$core$IndexedSeqIterator$$(this.$arr$, this.i);
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  return this.i + 1 < this.$arr$.length ? new $cljs$core$IndexedSeq$$(this.$arr$, this.i + 1) : null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  var $y__4564__auto__$$ = this.$arr$.length - this.i;
  return 0 > $y__4564__auto__$$ ? 0 : $y__4564__auto__$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  return $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$$49$$, $other$$9$$) {
  return $cljs$core$equiv_sequential$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$core$equiv_sequential$$.$cljs$core$IFn$_invoke$arity$2$(this, $other$$9$$) : $cljs$core$equiv_sequential$$.call(null, this, $other$$9$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$$51$$, $f$$440$$) {
  return $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$04$$(this.$arr$, $f$$440$$, this.$arr$[this.i], this.i + 1);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$$52$$, $f$$441$$, $start$$9$$) {
  return $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$04$$(this.$arr$, $f$$441$$, $start$$9$$, this.i);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return this.$arr$[this.i];
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  return this.i + 1 < this.$arr$.length ? new $cljs$core$IndexedSeq$$(this.$arr$, this.i + 1) : $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this.i < this.$arr$.length ? this : null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$$53$$, $o$$243$$) {
  return $cljs$core$cons$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$core$cons$$.$cljs$core$IFn$_invoke$arity$2$($o$$243$$, this) : $cljs$core$cons$$.call(null, $o$$243$$, this);
};
$cljs$core$IndexedSeq$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$($prim$$1$$, $i$$391$$) {
  return $i$$391$$ < $prim$$1$$.length ? new $cljs$core$IndexedSeq$$($prim$$1$$, $i$$391$$) : null;
}
function $cljs$core$array_seq$$() {
  switch(arguments.length) {
    case 1:
      return $cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(arguments[0], 0);
    case 2:
      return $cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(arguments[0], arguments[1]);
    default:
      throw Error([$cljs$core$str$$("Invalid arity: "), $cljs$core$str$$(arguments.length)].join(""));;
  }
}
function $cljs$core$last$$($s$$134$$) {
  for (;;) {
    var $sn$$1$$ = $cljs$core$next$$($s$$134$$);
    if (null != $sn$$1$$) {
      $s$$134$$ = $sn$$1$$;
    } else {
      return $cljs$core$first$$($s$$134$$);
    }
  }
}
$cljs$core$_equiv$$._ = function($x$$105$$, $o$$245$$) {
  return $x$$105$$ === $o$$245$$;
};
var $cljs$core$conj$$ = function $cljs$core$conj$$() {
  switch(arguments.length) {
    case 0:
      return $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$0$();
    case 1:
      return $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      return $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], new $cljs$core$IndexedSeq$$(Array.prototype.slice.call(arguments, 2), 0));
  }
};
$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$0$ = function() {
  return $cljs$core$PersistentVector$EMPTY$$;
};
$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$1$ = function($coll$$71$$) {
  return $coll$$71$$;
};
$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$ = function($coll$$72$$, $x$$106$$) {
  return null != $coll$$72$$ ? $cljs$core$_conj$$($coll$$72$$, $x$$106$$) : $cljs$core$_conj$$($cljs$core$List$EMPTY$$, $x$$106$$);
};
$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($G__18331_coll$$73$$, $G__18332_x$$107$$, $G__18333_xs$$1$$) {
  for (;;) {
    if ($cljs$core$truth_$$($G__18333_xs$$1$$)) {
      $G__18331_coll$$73$$ = $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__18331_coll$$73$$, $G__18332_x$$107$$), $G__18332_x$$107$$ = $cljs$core$first$$($G__18333_xs$$1$$), $G__18333_xs$$1$$ = $cljs$core$next$$($G__18333_xs$$1$$);
    } else {
      return $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__18331_coll$$73$$, $G__18332_x$$107$$);
    }
  }
};
$cljs$core$conj$$.$cljs$lang$applyTo$ = function($G__18327_seq18325$$) {
  var $G__18326$$ = $cljs$core$first$$($G__18327_seq18325$$), $seq18325__$1_seq18325__$2$$ = $cljs$core$next$$($G__18327_seq18325$$);
  $G__18327_seq18325$$ = $cljs$core$first$$($seq18325__$1_seq18325__$2$$);
  $seq18325__$1_seq18325__$2$$ = $cljs$core$next$$($seq18325__$1_seq18325__$2$$);
  return $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$variadic$($G__18326$$, $G__18327_seq18325$$, $seq18325__$1_seq18325__$2$$);
};
$cljs$core$conj$$.$cljs$lang$maxFixedArity$ = 2;
function $cljs$core$count$$($G__18334$$inline_714_JSCompiler_temp$$505_JSCompiler_temp$$506_JSCompiler_temp$$507_JSCompiler_temp$$508_JSCompiler_temp$$509_coll$$76_s$$inline_712$$) {
  if (null != $G__18334$$inline_714_JSCompiler_temp$$505_JSCompiler_temp$$506_JSCompiler_temp$$507_JSCompiler_temp$$508_JSCompiler_temp$$509_coll$$76_s$$inline_712$$) {
    if ($G__18334$$inline_714_JSCompiler_temp$$505_JSCompiler_temp$$506_JSCompiler_temp$$507_JSCompiler_temp$$508_JSCompiler_temp$$509_coll$$76_s$$inline_712$$ && ($G__18334$$inline_714_JSCompiler_temp$$505_JSCompiler_temp$$506_JSCompiler_temp$$507_JSCompiler_temp$$508_JSCompiler_temp$$509_coll$$76_s$$inline_712$$.$cljs$lang$protocol_mask$partition0$$ & 2 || $G__18334$$inline_714_JSCompiler_temp$$505_JSCompiler_temp$$506_JSCompiler_temp$$507_JSCompiler_temp$$508_JSCompiler_temp$$509_coll$$76_s$$inline_712$$.$cljs$core$ICounted$$)) {
      $G__18334$$inline_714_JSCompiler_temp$$505_JSCompiler_temp$$506_JSCompiler_temp$$507_JSCompiler_temp$$508_JSCompiler_temp$$509_coll$$76_s$$inline_712$$ = $G__18334$$inline_714_JSCompiler_temp$$505_JSCompiler_temp$$506_JSCompiler_temp$$507_JSCompiler_temp$$508_JSCompiler_temp$$509_coll$$76_s$$inline_712$$.$cljs$core$ICounted$_count$arity$1$(null);
    } else {
      if ($cljs$core$array_QMARK_$$($G__18334$$inline_714_JSCompiler_temp$$505_JSCompiler_temp$$506_JSCompiler_temp$$507_JSCompiler_temp$$508_JSCompiler_temp$$509_coll$$76_s$$inline_712$$)) {
        $G__18334$$inline_714_JSCompiler_temp$$505_JSCompiler_temp$$506_JSCompiler_temp$$507_JSCompiler_temp$$508_JSCompiler_temp$$509_coll$$76_s$$inline_712$$ = $G__18334$$inline_714_JSCompiler_temp$$505_JSCompiler_temp$$506_JSCompiler_temp$$507_JSCompiler_temp$$508_JSCompiler_temp$$509_coll$$76_s$$inline_712$$.length;
      } else {
        if ("string" === typeof $G__18334$$inline_714_JSCompiler_temp$$505_JSCompiler_temp$$506_JSCompiler_temp$$507_JSCompiler_temp$$508_JSCompiler_temp$$509_coll$$76_s$$inline_712$$) {
          $G__18334$$inline_714_JSCompiler_temp$$505_JSCompiler_temp$$506_JSCompiler_temp$$507_JSCompiler_temp$$508_JSCompiler_temp$$509_coll$$76_s$$inline_712$$ = $G__18334$$inline_714_JSCompiler_temp$$505_JSCompiler_temp$$506_JSCompiler_temp$$507_JSCompiler_temp$$508_JSCompiler_temp$$509_coll$$76_s$$inline_712$$.length;
        } else {
          if ($cljs$core$native_satisfies_QMARK_$$($cljs$core$ICounted$$, $G__18334$$inline_714_JSCompiler_temp$$505_JSCompiler_temp$$506_JSCompiler_temp$$507_JSCompiler_temp$$508_JSCompiler_temp$$509_coll$$76_s$$inline_712$$)) {
            $G__18334$$inline_714_JSCompiler_temp$$505_JSCompiler_temp$$506_JSCompiler_temp$$507_JSCompiler_temp$$508_JSCompiler_temp$$509_coll$$76_s$$inline_712$$ = $cljs$core$_count$$($G__18334$$inline_714_JSCompiler_temp$$505_JSCompiler_temp$$506_JSCompiler_temp$$507_JSCompiler_temp$$508_JSCompiler_temp$$509_coll$$76_s$$inline_712$$);
          } else {
            a: {
              $G__18334$$inline_714_JSCompiler_temp$$505_JSCompiler_temp$$506_JSCompiler_temp$$507_JSCompiler_temp$$508_JSCompiler_temp$$509_coll$$76_s$$inline_712$$ = $cljs$core$seq$$($G__18334$$inline_714_JSCompiler_temp$$505_JSCompiler_temp$$506_JSCompiler_temp$$507_JSCompiler_temp$$508_JSCompiler_temp$$509_coll$$76_s$$inline_712$$);
              for (var $G__18335$$inline_715_acc$$inline_713$$ = 0;;) {
                if ($cljs$core$counted_QMARK_$$($G__18334$$inline_714_JSCompiler_temp$$505_JSCompiler_temp$$506_JSCompiler_temp$$507_JSCompiler_temp$$508_JSCompiler_temp$$509_coll$$76_s$$inline_712$$)) {
                  $G__18334$$inline_714_JSCompiler_temp$$505_JSCompiler_temp$$506_JSCompiler_temp$$507_JSCompiler_temp$$508_JSCompiler_temp$$509_coll$$76_s$$inline_712$$ = $G__18335$$inline_715_acc$$inline_713$$ + $cljs$core$_count$$($G__18334$$inline_714_JSCompiler_temp$$505_JSCompiler_temp$$506_JSCompiler_temp$$507_JSCompiler_temp$$508_JSCompiler_temp$$509_coll$$76_s$$inline_712$$);
                  break a;
                }
                $G__18334$$inline_714_JSCompiler_temp$$505_JSCompiler_temp$$506_JSCompiler_temp$$507_JSCompiler_temp$$508_JSCompiler_temp$$509_coll$$76_s$$inline_712$$ = $cljs$core$next$$($G__18334$$inline_714_JSCompiler_temp$$505_JSCompiler_temp$$506_JSCompiler_temp$$507_JSCompiler_temp$$508_JSCompiler_temp$$509_coll$$76_s$$inline_712$$);
                $G__18335$$inline_715_acc$$inline_713$$ += 1;
              }
            }
          }
        }
      }
    }
  } else {
    $G__18334$$inline_714_JSCompiler_temp$$505_JSCompiler_temp$$506_JSCompiler_temp$$507_JSCompiler_temp$$508_JSCompiler_temp$$509_coll$$76_s$$inline_712$$ = 0;
  }
  return $G__18334$$inline_714_JSCompiler_temp$$505_JSCompiler_temp$$506_JSCompiler_temp$$507_JSCompiler_temp$$508_JSCompiler_temp$$509_coll$$76_s$$inline_712$$;
}
function $cljs$core$linear_traversal_nth$cljs$0core$0IFn$0_invoke$0arity$03$$($coll$$78$$, $n$$565$$) {
  for (var $G__18345_not_found$$6$$ = null;;) {
    if (null == $coll$$78$$) {
      return $G__18345_not_found$$6$$;
    }
    if (0 === $n$$565$$) {
      return $cljs$core$seq$$($coll$$78$$) ? $cljs$core$first$$($coll$$78$$) : $G__18345_not_found$$6$$;
    }
    if ($cljs$core$indexed_QMARK_$$($coll$$78$$)) {
      return $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$3$($coll$$78$$, $n$$565$$, $G__18345_not_found$$6$$);
    }
    if ($cljs$core$seq$$($coll$$78$$)) {
      var $G__18343$$ = $cljs$core$next$$($coll$$78$$), $G__18344$$ = $n$$565$$ - 1;
      $coll$$78$$ = $G__18343$$;
      $n$$565$$ = $G__18344$$;
    } else {
      return $G__18345_not_found$$6$$;
    }
  }
}
function $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($coll$$79$$, $n$$566$$) {
  if ("number" !== typeof $n$$566$$) {
    throw Error("index argument to nth must be a number");
  }
  if (null == $coll$$79$$) {
    return $coll$$79$$;
  }
  if ($coll$$79$$ && ($coll$$79$$.$cljs$lang$protocol_mask$partition0$$ & 16 || $coll$$79$$.$cljs$core$IIndexed$$)) {
    return $coll$$79$$.$cljs$core$IIndexed$_nth$arity$2$(null, $n$$566$$);
  }
  if ($cljs$core$array_QMARK_$$($coll$$79$$) || "string" === typeof $coll$$79$$) {
    return $n$$566$$ < $coll$$79$$.length ? $coll$$79$$[$n$$566$$] : null;
  }
  if ($cljs$core$native_satisfies_QMARK_$$($cljs$core$IIndexed$$, $coll$$79$$)) {
    return $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($coll$$79$$, $n$$566$$);
  }
  if ($coll$$79$$ ? $coll$$79$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $coll$$79$$.$cljs$core$ISeq$$ || ($coll$$79$$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ISeq$$, $coll$$79$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ISeq$$, $coll$$79$$)) {
    var $G__18341$$inline_719_JSCompiler_inline_result$$510_coll$$inline_717$$;
    a: {
      $G__18341$$inline_719_JSCompiler_inline_result$$510_coll$$inline_717$$ = $coll$$79$$;
      for (var $G__18342$$inline_720_n$$inline_718$$ = $n$$566$$;;) {
        if (null == $G__18341$$inline_719_JSCompiler_inline_result$$510_coll$$inline_717$$) {
          throw Error("Index out of bounds");
        }
        if (0 === $G__18342$$inline_720_n$$inline_718$$) {
          if ($cljs$core$seq$$($G__18341$$inline_719_JSCompiler_inline_result$$510_coll$$inline_717$$)) {
            $G__18341$$inline_719_JSCompiler_inline_result$$510_coll$$inline_717$$ = $cljs$core$first$$($G__18341$$inline_719_JSCompiler_inline_result$$510_coll$$inline_717$$);
            break a;
          }
          throw Error("Index out of bounds");
        }
        if ($cljs$core$indexed_QMARK_$$($G__18341$$inline_719_JSCompiler_inline_result$$510_coll$$inline_717$$)) {
          $G__18341$$inline_719_JSCompiler_inline_result$$510_coll$$inline_717$$ = $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($G__18341$$inline_719_JSCompiler_inline_result$$510_coll$$inline_717$$, $G__18342$$inline_720_n$$inline_718$$);
          break a;
        }
        if ($cljs$core$seq$$($G__18341$$inline_719_JSCompiler_inline_result$$510_coll$$inline_717$$)) {
          $G__18341$$inline_719_JSCompiler_inline_result$$510_coll$$inline_717$$ = $cljs$core$next$$($G__18341$$inline_719_JSCompiler_inline_result$$510_coll$$inline_717$$), --$G__18342$$inline_720_n$$inline_718$$;
        } else {
          throw Error("Index out of bounds");
        }
      }
    }
    return $G__18341$$inline_719_JSCompiler_inline_result$$510_coll$$inline_717$$;
  }
  throw Error([$cljs$core$str$$("nth not supported on this type "), $cljs$core$str$$($cljs$core$type__GT_str$$($cljs$core$type$$($coll$$79$$)))].join(""));
}
function $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($coll$$80$$, $n$$567$$) {
  if ("number" !== typeof $n$$567$$) {
    throw Error("index argument to nth must be a number.");
  }
  if (null == $coll$$80$$) {
    return null;
  }
  if ($coll$$80$$ && ($coll$$80$$.$cljs$lang$protocol_mask$partition0$$ & 16 || $coll$$80$$.$cljs$core$IIndexed$$)) {
    return $coll$$80$$.$cljs$core$IIndexed$_nth$arity$3$(null, $n$$567$$, null);
  }
  if ($cljs$core$array_QMARK_$$($coll$$80$$) || "string" === typeof $coll$$80$$) {
    return $n$$567$$ < $coll$$80$$.length ? $coll$$80$$[$n$$567$$] : null;
  }
  if ($cljs$core$native_satisfies_QMARK_$$($cljs$core$IIndexed$$, $coll$$80$$)) {
    return $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($coll$$80$$, $n$$567$$);
  }
  if ($coll$$80$$ ? $coll$$80$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $coll$$80$$.$cljs$core$ISeq$$ || ($coll$$80$$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ISeq$$, $coll$$80$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ISeq$$, $coll$$80$$)) {
    return $cljs$core$linear_traversal_nth$cljs$0core$0IFn$0_invoke$0arity$03$$($coll$$80$$, $n$$567$$);
  }
  throw Error([$cljs$core$str$$("nth not supported on this type "), $cljs$core$str$$($cljs$core$type__GT_str$$($cljs$core$type$$($coll$$80$$)))].join(""));
}
function $cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($o$$246$$, $k$$122$$) {
  return null == $o$$246$$ ? null : $o$$246$$ && ($o$$246$$.$cljs$lang$protocol_mask$partition0$$ & 256 || $o$$246$$.$cljs$core$ILookup$$) ? $o$$246$$.$cljs$core$ILookup$_lookup$arity$2$(null, $k$$122$$) : $cljs$core$array_QMARK_$$($o$$246$$) ? $k$$122$$ < $o$$246$$.length ? $o$$246$$[$k$$122$$ | 0] : null : "string" === typeof $o$$246$$ ? $k$$122$$ < $o$$246$$.length ? $o$$246$$[$k$$122$$ | 0] : null : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ILookup$$, $o$$246$$) ? $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$2$($o$$246$$, 
  $k$$122$$) : null;
}
function $cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($o$$247$$, $k$$123$$, $not_found$$8$$) {
  return null != $o$$247$$ ? $o$$247$$ && ($o$$247$$.$cljs$lang$protocol_mask$partition0$$ & 256 || $o$$247$$.$cljs$core$ILookup$$) ? $o$$247$$.$cljs$core$ILookup$_lookup$arity$3$(null, $k$$123$$, $not_found$$8$$) : $cljs$core$array_QMARK_$$($o$$247$$) ? $k$$123$$ < $o$$247$$.length ? $o$$247$$[$k$$123$$] : $not_found$$8$$ : "string" === typeof $o$$247$$ ? $k$$123$$ < $o$$247$$.length ? $o$$247$$[$k$$123$$] : $not_found$$8$$ : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ILookup$$, $o$$247$$) ? 
  $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$($o$$247$$, $k$$123$$, $not_found$$8$$) : $not_found$$8$$ : $not_found$$8$$;
}
var $cljs$core$assoc$$ = function $cljs$core$assoc$$() {
  switch(arguments.length) {
    case 3:
      return $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    default:
      return $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], arguments[2], new $cljs$core$IndexedSeq$$(Array.prototype.slice.call(arguments, 3), 0));
  }
};
$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$ = function($JSCompiler_temp$$54_coll$$82_ks$$inline_136$$, $k$$124_len$$inline_138$$, $v$$30_vs$$inline_137$$) {
  if (null != $JSCompiler_temp$$54_coll$$82_ks$$inline_136$$) {
    $JSCompiler_temp$$54_coll$$82_ks$$inline_136$$ = $cljs$core$_assoc$$($JSCompiler_temp$$54_coll$$82_ks$$inline_136$$, $k$$124_len$$inline_138$$, $v$$30_vs$$inline_137$$);
  } else {
    a: {
      $JSCompiler_temp$$54_coll$$82_ks$$inline_136$$ = [$k$$124_len$$inline_138$$];
      $v$$30_vs$$inline_137$$ = [$v$$30_vs$$inline_137$$];
      $k$$124_len$$inline_138$$ = $JSCompiler_temp$$54_coll$$82_ks$$inline_136$$.length;
      var $i$$inline_139$$ = 0, $G__21232$$inline_142_out$$inline_140$$;
      for ($G__21232$$inline_142_out$$inline_140$$ = $cljs$core$_as_transient$$($cljs$core$PersistentHashMap$EMPTY$$);;) {
        if ($i$$inline_139$$ < $k$$124_len$$inline_138$$) {
          var $G__21231$$inline_141$$ = $i$$inline_139$$ + 1;
          $G__21232$$inline_142_out$$inline_140$$ = $G__21232$$inline_142_out$$inline_140$$.$cljs$core$ITransientAssociative$_assoc_BANG_$arity$3$(null, $JSCompiler_temp$$54_coll$$82_ks$$inline_136$$[$i$$inline_139$$], $v$$30_vs$$inline_137$$[$i$$inline_139$$]);
          $i$$inline_139$$ = $G__21231$$inline_141$$;
        } else {
          $JSCompiler_temp$$54_coll$$82_ks$$inline_136$$ = $cljs$core$_persistent_BANG_$$($G__21232$$inline_142_out$$inline_140$$);
          break a;
        }
      }
    }
  }
  return $JSCompiler_temp$$54_coll$$82_ks$$inline_136$$;
};
$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($G__18367_coll$$83_ret$$2$$, $G__18368_k$$125$$, $G__18369_v$$31$$, $G__18370_kvs$$) {
  for (;;) {
    if ($G__18367_coll$$83_ret$$2$$ = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($G__18367_coll$$83_ret$$2$$, $G__18368_k$$125$$, $G__18369_v$$31$$), $cljs$core$truth_$$($G__18370_kvs$$)) {
      $G__18368_k$$125$$ = $cljs$core$first$$($G__18370_kvs$$), $G__18369_v$$31$$ = $cljs$core$first$$($cljs$core$next$$($G__18370_kvs$$)), $G__18370_kvs$$ = $cljs$core$next$$($cljs$core$next$$($G__18370_kvs$$));
    } else {
      return $G__18367_coll$$83_ret$$2$$;
    }
  }
};
$cljs$core$assoc$$.$cljs$lang$applyTo$ = function($G__18362_seq18360$$) {
  var $G__18361$$ = $cljs$core$first$$($G__18362_seq18360$$), $G__18363_seq18360__$1$$ = $cljs$core$next$$($G__18362_seq18360$$);
  $G__18362_seq18360$$ = $cljs$core$first$$($G__18363_seq18360__$1$$);
  var $seq18360__$2_seq18360__$3$$ = $cljs$core$next$$($G__18363_seq18360__$1$$), $G__18363_seq18360__$1$$ = $cljs$core$first$$($seq18360__$2_seq18360__$3$$), $seq18360__$2_seq18360__$3$$ = $cljs$core$next$$($seq18360__$2_seq18360__$3$$);
  return $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$variadic$($G__18361$$, $G__18362_seq18360$$, $G__18363_seq18360__$1$$, $seq18360__$2_seq18360__$3$$);
};
$cljs$core$assoc$$.$cljs$lang$maxFixedArity$ = 3;
var $cljs$core$dissoc$$ = function $cljs$core$dissoc$$() {
  switch(arguments.length) {
    case 1:
      return $cljs$core$dissoc$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$dissoc$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      return $cljs$core$dissoc$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], new $cljs$core$IndexedSeq$$(Array.prototype.slice.call(arguments, 2), 0));
  }
};
$cljs$core$dissoc$$.$cljs$core$IFn$_invoke$arity$1$ = function($coll$$84$$) {
  return $coll$$84$$;
};
$cljs$core$dissoc$$.$cljs$core$IFn$_invoke$arity$2$ = function($coll$$85$$, $k$$126$$) {
  return null == $coll$$85$$ ? null : $cljs$core$_dissoc$$($coll$$85$$, $k$$126$$);
};
$cljs$core$dissoc$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($G__18377_coll$$86_ret$$3$$, $G__18378_k$$127$$, $G__18379_ks$$) {
  for (;;) {
    if (null == $G__18377_coll$$86_ret$$3$$) {
      return null;
    }
    $G__18377_coll$$86_ret$$3$$ = $cljs$core$dissoc$$.$cljs$core$IFn$_invoke$arity$2$($G__18377_coll$$86_ret$$3$$, $G__18378_k$$127$$);
    if ($cljs$core$truth_$$($G__18379_ks$$)) {
      $G__18378_k$$127$$ = $cljs$core$first$$($G__18379_ks$$), $G__18379_ks$$ = $cljs$core$next$$($G__18379_ks$$);
    } else {
      return $G__18377_coll$$86_ret$$3$$;
    }
  }
};
$cljs$core$dissoc$$.$cljs$lang$applyTo$ = function($G__18373_seq18371$$) {
  var $G__18372$$ = $cljs$core$first$$($G__18373_seq18371$$), $seq18371__$1_seq18371__$2$$ = $cljs$core$next$$($G__18373_seq18371$$);
  $G__18373_seq18371$$ = $cljs$core$first$$($seq18371__$1_seq18371__$2$$);
  $seq18371__$1_seq18371__$2$$ = $cljs$core$next$$($seq18371__$1_seq18371__$2$$);
  return $cljs$core$dissoc$$.$cljs$core$IFn$_invoke$arity$variadic$($G__18372$$, $G__18373_seq18371$$, $seq18371__$1_seq18371__$2$$);
};
$cljs$core$dissoc$$.$cljs$lang$maxFixedArity$ = 2;
function $cljs$core$fn_QMARK_$$($f$$444$$) {
  var $or__4251__auto__$$87$$ = "function" == $goog$typeOf$$($f$$444$$);
  return $cljs$core$truth_$$($or__4251__auto__$$87$$) ? $or__4251__auto__$$87$$ : $f$$444$$ ? $cljs$core$truth_$$($cljs$core$truth_$$(null) ? null : $f$$444$$.$cljs$core$Fn$$) ? !0 : $f$$444$$.$cljs$lang$protocol_mask$partition$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$Fn$$, $f$$444$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$Fn$$, $f$$444$$);
}
function $cljs$core$MetaFn$$($afn$$, $meta$$3$$) {
  this.$afn$ = $afn$$;
  this.meta = $meta$$3$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 393217;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$MetaFn$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.meta;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($_$$93$$, $new_meta$$2$$) {
  return new $cljs$core$MetaFn$$(this.$afn$, $new_meta$$2$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$Fn$$ = !0;
$JSCompiler_prototypeAlias$$.call = function() {
  function $G__18851__22$$($G__18851__22$$, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$, $G__18851__8$$, $G__18851__7$$, $G__18851__6$$, $G__18851__5$$, $G__18851__4$$, $G__18851$$, $G__18851__3$$, $G__18851__1$$) {
    $G__18851__22$$ = this.$afn$;
    return $cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$22$ ? $cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$22$($G__18851__22$$, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$, $G__18851__8$$, $G__18851__7$$, $G__18851__6$$, $G__18851__5$$, $G__18851__4$$, $G__18851$$, $G__18851__3$$, $G__18851__1$$) : $cljs$core$apply$$.call(null, 
    $G__18851__22$$, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$, $G__18851__8$$, $G__18851__7$$, $G__18851__6$$, $G__18851__5$$, $G__18851__4$$, $G__18851$$, $G__18851__3$$, $G__18851__1$$);
  }
  function $G__18851__21$$($G__18851__22$$, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$, $G__18851__8$$, $G__18851__7$$, $G__18851__6$$, $G__18851__5$$, $G__18851__4$$, $G__18851$$, $G__18851__3$$) {
    $G__18851__22$$ = this;
    return $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$20$ ? $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$20$($G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$, $G__18851__8$$, $G__18851__7$$, $G__18851__6$$, $G__18851__5$$, $G__18851__4$$, $G__18851$$, $G__18851__3$$) : $G__18851__22$$.$afn$.call(null, $G__18851__21$$, 
    $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$, $G__18851__8$$, $G__18851__7$$, $G__18851__6$$, $G__18851__5$$, $G__18851__4$$, $G__18851$$, $G__18851__3$$);
  }
  function $G__18851__20$$($G__18851__22$$, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$, $G__18851__8$$, $G__18851__7$$, $G__18851__6$$, $G__18851__5$$, $G__18851__4$$, $G__18851$$) {
    $G__18851__22$$ = this;
    return $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$19$ ? $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$19$($G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$, $G__18851__8$$, $G__18851__7$$, $G__18851__6$$, $G__18851__5$$, $G__18851__4$$, $G__18851$$) : $G__18851__22$$.$afn$.call(null, $G__18851__21$$, $G__18851__20$$, 
    $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$, $G__18851__8$$, $G__18851__7$$, $G__18851__6$$, $G__18851__5$$, $G__18851__4$$, $G__18851$$);
  }
  function $G__18851__19$$($G__18851__22$$, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$, $G__18851__8$$, $G__18851__7$$, $G__18851__6$$, $G__18851__5$$, $G__18851__4$$) {
    $G__18851__22$$ = this;
    return $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$18$ ? $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$18$($G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$, $G__18851__8$$, $G__18851__7$$, $G__18851__6$$, $G__18851__5$$, $G__18851__4$$) : $G__18851__22$$.$afn$.call(null, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, 
    $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$, $G__18851__8$$, $G__18851__7$$, $G__18851__6$$, $G__18851__5$$, $G__18851__4$$);
  }
  function $G__18851__18$$($G__18851__22$$, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$, $G__18851__8$$, $G__18851__7$$, $G__18851__6$$, $G__18851__5$$) {
    $G__18851__22$$ = this;
    return $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$17$ ? $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$17$($G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$, $G__18851__8$$, $G__18851__7$$, $G__18851__6$$, $G__18851__5$$) : $G__18851__22$$.$afn$.call(null, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, 
    $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$, $G__18851__8$$, $G__18851__7$$, $G__18851__6$$, $G__18851__5$$);
  }
  function $G__18851__17$$($G__18851__22$$, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$, $G__18851__8$$, $G__18851__7$$, $G__18851__6$$) {
    $G__18851__22$$ = this;
    return $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$16$ ? $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$16$($G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$, $G__18851__8$$, $G__18851__7$$, $G__18851__6$$) : $G__18851__22$$.$afn$.call(null, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, 
    $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$, $G__18851__8$$, $G__18851__7$$, $G__18851__6$$);
  }
  function $G__18851__16$$($G__18851__22$$, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$, $G__18851__8$$, $G__18851__7$$) {
    $G__18851__22$$ = this;
    return $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$15$ ? $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$15$($G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$, $G__18851__8$$, $G__18851__7$$) : $G__18851__22$$.$afn$.call(null, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, 
    $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$, $G__18851__8$$, $G__18851__7$$);
  }
  function $G__18851__15$$($G__18851__22$$, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$, $G__18851__8$$) {
    $G__18851__22$$ = this;
    return $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$14$ ? $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$14$($G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$, $G__18851__8$$) : $G__18851__22$$.$afn$.call(null, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, 
    $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$, $G__18851__8$$);
  }
  function $G__18851__14$$($G__18851__22$$, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$) {
    $G__18851__22$$ = this;
    return $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$13$ ? $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$13$($G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$) : $G__18851__22$$.$afn$.call(null, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, 
    $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$, $G__18851__9$$);
  }
  function $G__18851__13$$($G__18851__22$$, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$) {
    $G__18851__22$$ = this;
    return $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$12$ ? $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$12$($G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$, $G__18851__10$$) : $G__18851__22$$.$afn$.call(null, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, 
    $G__18851__12$$, $G__18851__11$$, $G__18851__10$$);
  }
  function $G__18851__12$$($G__18851__22$$, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$) {
    $G__18851__22$$ = this;
    return $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$11$ ? $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$11$($G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, $G__18851__11$$) : $G__18851__22$$.$afn$.call(null, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$, 
    $G__18851__11$$);
  }
  function $G__18851__11$$($G__18851__22$$, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$) {
    $G__18851__22$$ = this;
    return $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$10$ ? $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$10$($G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$) : $G__18851__22$$.$afn$.call(null, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$, $G__18851__12$$);
  }
  function $G__18851__10$$($G__18851__22$$, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$) {
    $G__18851__22$$ = this;
    return $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$9$ ? $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$9$($G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$) : $G__18851__22$$.$afn$.call(null, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$, $G__18851__13$$);
  }
  function $G__18851__9$$($G__18851__22$$, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$) {
    $G__18851__22$$ = this;
    return $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$8$ ? $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$8$($G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$) : $G__18851__22$$.$afn$.call(null, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$, $G__18851__14$$);
  }
  function $G__18851__8$$($G__18851__22$$, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$) {
    $G__18851__22$$ = this;
    return $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$7$ ? $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$7$($G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$) : $G__18851__22$$.$afn$.call(null, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$, $G__18851__15$$);
  }
  function $G__18851__7$$($G__18851__22$$, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$) {
    $G__18851__22$$ = this;
    return $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$6$ ? $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$6$($G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$) : $G__18851__22$$.$afn$.call(null, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$, $G__18851__16$$);
  }
  function $G__18851__6$$($G__18851__22$$, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$) {
    $G__18851__22$$ = this;
    return $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$5$ ? $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$5$($G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$) : $G__18851__22$$.$afn$.call(null, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$, $G__18851__17$$);
  }
  function $G__18851__5$$($G__18851__22$$, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$) {
    $G__18851__22$$ = this;
    return $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$4$ ? $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$4$($G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$) : $G__18851__22$$.$afn$.call(null, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$, $G__18851__18$$);
  }
  function $G__18851__4$$($G__18851__22$$, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$) {
    $G__18851__22$$ = this;
    return $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$3$ ? $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$3$($G__18851__21$$, $G__18851__20$$, $G__18851__19$$) : $G__18851__22$$.$afn$.call(null, $G__18851__21$$, $G__18851__20$$, $G__18851__19$$);
  }
  function $G__18851__3$$($G__18851__22$$, $G__18851__21$$, $G__18851__20$$) {
    $G__18851__22$$ = this;
    return $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$2$ ? $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$2$($G__18851__21$$, $G__18851__20$$) : $G__18851__22$$.$afn$.call(null, $G__18851__21$$, $G__18851__20$$);
  }
  function $G__18851__2$$($G__18851__22$$, $G__18851__21$$) {
    $G__18851__22$$ = this;
    return $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$1$ ? $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$1$($G__18851__21$$) : $G__18851__22$$.$afn$.call(null, $G__18851__21$$);
  }
  function $G__18851__1$$($G__18851__22$$) {
    $G__18851__22$$ = this;
    return $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$0$ ? $G__18851__22$$.$afn$.$cljs$core$IFn$_invoke$arity$0$() : $G__18851__22$$.$afn$.call(null);
  }
  var $G__18851$$ = null, $G__18851$$ = function($G__18851$$, $a$$1492$$, $b$$1060$$, $c$$849$$, $d$$597$$, $e$$813$$, $f$$461$$, $g$$282$$, $h$$251$$, $i$$408$$, $j$$154$$, $k$$139$$, $l$$160$$, $m$$96$$, $n$$577$$, $o$$255$$, $p$$91$$, $q$$52$$, $r$$439$$, $s$$139$$, $t$$654$$, $rest$$5$$) {
    switch(arguments.length) {
      case 1:
        return $G__18851__1$$.call(this, $G__18851$$);
      case 2:
        return $G__18851__2$$.call(this, $G__18851$$, $a$$1492$$);
      case 3:
        return $G__18851__3$$.call(this, $G__18851$$, $a$$1492$$, $b$$1060$$);
      case 4:
        return $G__18851__4$$.call(this, $G__18851$$, $a$$1492$$, $b$$1060$$, $c$$849$$);
      case 5:
        return $G__18851__5$$.call(this, $G__18851$$, $a$$1492$$, $b$$1060$$, $c$$849$$, $d$$597$$);
      case 6:
        return $G__18851__6$$.call(this, $G__18851$$, $a$$1492$$, $b$$1060$$, $c$$849$$, $d$$597$$, $e$$813$$);
      case 7:
        return $G__18851__7$$.call(this, $G__18851$$, $a$$1492$$, $b$$1060$$, $c$$849$$, $d$$597$$, $e$$813$$, $f$$461$$);
      case 8:
        return $G__18851__8$$.call(this, $G__18851$$, $a$$1492$$, $b$$1060$$, $c$$849$$, $d$$597$$, $e$$813$$, $f$$461$$, $g$$282$$);
      case 9:
        return $G__18851__9$$.call(this, $G__18851$$, $a$$1492$$, $b$$1060$$, $c$$849$$, $d$$597$$, $e$$813$$, $f$$461$$, $g$$282$$, $h$$251$$);
      case 10:
        return $G__18851__10$$.call(this, $G__18851$$, $a$$1492$$, $b$$1060$$, $c$$849$$, $d$$597$$, $e$$813$$, $f$$461$$, $g$$282$$, $h$$251$$, $i$$408$$);
      case 11:
        return $G__18851__11$$.call(this, $G__18851$$, $a$$1492$$, $b$$1060$$, $c$$849$$, $d$$597$$, $e$$813$$, $f$$461$$, $g$$282$$, $h$$251$$, $i$$408$$, $j$$154$$);
      case 12:
        return $G__18851__12$$.call(this, $G__18851$$, $a$$1492$$, $b$$1060$$, $c$$849$$, $d$$597$$, $e$$813$$, $f$$461$$, $g$$282$$, $h$$251$$, $i$$408$$, $j$$154$$, $k$$139$$);
      case 13:
        return $G__18851__13$$.call(this, $G__18851$$, $a$$1492$$, $b$$1060$$, $c$$849$$, $d$$597$$, $e$$813$$, $f$$461$$, $g$$282$$, $h$$251$$, $i$$408$$, $j$$154$$, $k$$139$$, $l$$160$$);
      case 14:
        return $G__18851__14$$.call(this, $G__18851$$, $a$$1492$$, $b$$1060$$, $c$$849$$, $d$$597$$, $e$$813$$, $f$$461$$, $g$$282$$, $h$$251$$, $i$$408$$, $j$$154$$, $k$$139$$, $l$$160$$, $m$$96$$);
      case 15:
        return $G__18851__15$$.call(this, $G__18851$$, $a$$1492$$, $b$$1060$$, $c$$849$$, $d$$597$$, $e$$813$$, $f$$461$$, $g$$282$$, $h$$251$$, $i$$408$$, $j$$154$$, $k$$139$$, $l$$160$$, $m$$96$$, $n$$577$$);
      case 16:
        return $G__18851__16$$.call(this, $G__18851$$, $a$$1492$$, $b$$1060$$, $c$$849$$, $d$$597$$, $e$$813$$, $f$$461$$, $g$$282$$, $h$$251$$, $i$$408$$, $j$$154$$, $k$$139$$, $l$$160$$, $m$$96$$, $n$$577$$, $o$$255$$);
      case 17:
        return $G__18851__17$$.call(this, $G__18851$$, $a$$1492$$, $b$$1060$$, $c$$849$$, $d$$597$$, $e$$813$$, $f$$461$$, $g$$282$$, $h$$251$$, $i$$408$$, $j$$154$$, $k$$139$$, $l$$160$$, $m$$96$$, $n$$577$$, $o$$255$$, $p$$91$$);
      case 18:
        return $G__18851__18$$.call(this, $G__18851$$, $a$$1492$$, $b$$1060$$, $c$$849$$, $d$$597$$, $e$$813$$, $f$$461$$, $g$$282$$, $h$$251$$, $i$$408$$, $j$$154$$, $k$$139$$, $l$$160$$, $m$$96$$, $n$$577$$, $o$$255$$, $p$$91$$, $q$$52$$);
      case 19:
        return $G__18851__19$$.call(this, $G__18851$$, $a$$1492$$, $b$$1060$$, $c$$849$$, $d$$597$$, $e$$813$$, $f$$461$$, $g$$282$$, $h$$251$$, $i$$408$$, $j$$154$$, $k$$139$$, $l$$160$$, $m$$96$$, $n$$577$$, $o$$255$$, $p$$91$$, $q$$52$$, $r$$439$$);
      case 20:
        return $G__18851__20$$.call(this, $G__18851$$, $a$$1492$$, $b$$1060$$, $c$$849$$, $d$$597$$, $e$$813$$, $f$$461$$, $g$$282$$, $h$$251$$, $i$$408$$, $j$$154$$, $k$$139$$, $l$$160$$, $m$$96$$, $n$$577$$, $o$$255$$, $p$$91$$, $q$$52$$, $r$$439$$, $s$$139$$);
      case 21:
        return $G__18851__21$$.call(this, $G__18851$$, $a$$1492$$, $b$$1060$$, $c$$849$$, $d$$597$$, $e$$813$$, $f$$461$$, $g$$282$$, $h$$251$$, $i$$408$$, $j$$154$$, $k$$139$$, $l$$160$$, $m$$96$$, $n$$577$$, $o$$255$$, $p$$91$$, $q$$52$$, $r$$439$$, $s$$139$$, $t$$654$$);
      case 22:
        return $G__18851__22$$.call(this, $G__18851$$, $a$$1492$$, $b$$1060$$, $c$$849$$, $d$$597$$, $e$$813$$, $f$$461$$, $g$$282$$, $h$$251$$, $i$$408$$, $j$$154$$, $k$$139$$, $l$$160$$, $m$$96$$, $n$$577$$, $o$$255$$, $p$$91$$, $q$$52$$, $r$$439$$, $s$$139$$, $t$$654$$, $rest$$5$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__18851$$.$cljs$core$IFn$_invoke$arity$1$ = $G__18851__1$$;
  $G__18851$$.$cljs$core$IFn$_invoke$arity$2$ = $G__18851__2$$;
  $G__18851$$.$cljs$core$IFn$_invoke$arity$3$ = $G__18851__3$$;
  $G__18851$$.$cljs$core$IFn$_invoke$arity$4$ = $G__18851__4$$;
  $G__18851$$.$cljs$core$IFn$_invoke$arity$5$ = $G__18851__5$$;
  $G__18851$$.$cljs$core$IFn$_invoke$arity$6$ = $G__18851__6$$;
  $G__18851$$.$cljs$core$IFn$_invoke$arity$7$ = $G__18851__7$$;
  $G__18851$$.$cljs$core$IFn$_invoke$arity$8$ = $G__18851__8$$;
  $G__18851$$.$cljs$core$IFn$_invoke$arity$9$ = $G__18851__9$$;
  $G__18851$$.$cljs$core$IFn$_invoke$arity$10$ = $G__18851__10$$;
  $G__18851$$.$cljs$core$IFn$_invoke$arity$11$ = $G__18851__11$$;
  $G__18851$$.$cljs$core$IFn$_invoke$arity$12$ = $G__18851__12$$;
  $G__18851$$.$cljs$core$IFn$_invoke$arity$13$ = $G__18851__13$$;
  $G__18851$$.$cljs$core$IFn$_invoke$arity$14$ = $G__18851__14$$;
  $G__18851$$.$cljs$core$IFn$_invoke$arity$15$ = $G__18851__15$$;
  $G__18851$$.$cljs$core$IFn$_invoke$arity$16$ = $G__18851__16$$;
  $G__18851$$.$cljs$core$IFn$_invoke$arity$17$ = $G__18851__17$$;
  $G__18851$$.$cljs$core$IFn$_invoke$arity$18$ = $G__18851__18$$;
  $G__18851$$.$cljs$core$IFn$_invoke$arity$19$ = $G__18851__19$$;
  $G__18851$$.$cljs$core$IFn$_invoke$arity$20$ = $G__18851__20$$;
  $G__18851$$.$cljs$core$IFn$_invoke$arity$21$ = $G__18851__21$$;
  $G__18851$$.$cljs$core$IFn$_invoke$arity$22$ = $G__18851__22$$;
  return $G__18851$$;
}();
$JSCompiler_prototypeAlias$$.apply = function($self__$$132$$, $args18386$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args18386$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$0$ = function() {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$0$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$0$() : this.$afn$.call(null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($a$$1493$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$1$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$1$($a$$1493$$) : this.$afn$.call(null, $a$$1493$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($a$$1494$$, $b$$1061$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$2$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$2$($a$$1494$$, $b$$1061$$) : this.$afn$.call(null, $a$$1494$$, $b$$1061$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$3$ = function($a$$1495$$, $b$$1062$$, $c$$850$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$3$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$3$($a$$1495$$, $b$$1062$$, $c$$850$$) : this.$afn$.call(null, $a$$1495$$, $b$$1062$$, $c$$850$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$4$ = function($a$$1496$$, $b$$1063$$, $c$$851$$, $d$$598$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$4$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$4$($a$$1496$$, $b$$1063$$, $c$$851$$, $d$$598$$) : this.$afn$.call(null, $a$$1496$$, $b$$1063$$, $c$$851$$, $d$$598$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$5$ = function($a$$1497$$, $b$$1064$$, $c$$852$$, $d$$599$$, $e$$814$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$5$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$5$($a$$1497$$, $b$$1064$$, $c$$852$$, $d$$599$$, $e$$814$$) : this.$afn$.call(null, $a$$1497$$, $b$$1064$$, $c$$852$$, $d$$599$$, $e$$814$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$6$ = function($a$$1498$$, $b$$1065$$, $c$$853$$, $d$$600$$, $e$$815$$, $f$$462$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$6$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$6$($a$$1498$$, $b$$1065$$, $c$$853$$, $d$$600$$, $e$$815$$, $f$$462$$) : this.$afn$.call(null, $a$$1498$$, $b$$1065$$, $c$$853$$, $d$$600$$, $e$$815$$, $f$$462$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$7$ = function($a$$1499$$, $b$$1066$$, $c$$854$$, $d$$601$$, $e$$816$$, $f$$463$$, $g$$283$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$7$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$7$($a$$1499$$, $b$$1066$$, $c$$854$$, $d$$601$$, $e$$816$$, $f$$463$$, $g$$283$$) : this.$afn$.call(null, $a$$1499$$, $b$$1066$$, $c$$854$$, $d$$601$$, $e$$816$$, $f$$463$$, $g$$283$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$8$ = function($a$$1500$$, $b$$1067$$, $c$$855$$, $d$$602$$, $e$$817$$, $f$$464$$, $g$$284$$, $h$$252$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$8$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$8$($a$$1500$$, $b$$1067$$, $c$$855$$, $d$$602$$, $e$$817$$, $f$$464$$, $g$$284$$, $h$$252$$) : this.$afn$.call(null, $a$$1500$$, $b$$1067$$, $c$$855$$, $d$$602$$, $e$$817$$, $f$$464$$, $g$$284$$, $h$$252$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$9$ = function($a$$1501$$, $b$$1068$$, $c$$856$$, $d$$603$$, $e$$818$$, $f$$465$$, $g$$285$$, $h$$253$$, $i$$409$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$9$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$9$($a$$1501$$, $b$$1068$$, $c$$856$$, $d$$603$$, $e$$818$$, $f$$465$$, $g$$285$$, $h$$253$$, $i$$409$$) : this.$afn$.call(null, $a$$1501$$, $b$$1068$$, $c$$856$$, $d$$603$$, $e$$818$$, $f$$465$$, $g$$285$$, $h$$253$$, $i$$409$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$10$ = function($a$$1502$$, $b$$1069$$, $c$$857$$, $d$$604$$, $e$$819$$, $f$$466$$, $g$$286$$, $h$$254$$, $i$$410$$, $j$$155$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$10$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$10$($a$$1502$$, $b$$1069$$, $c$$857$$, $d$$604$$, $e$$819$$, $f$$466$$, $g$$286$$, $h$$254$$, $i$$410$$, $j$$155$$) : this.$afn$.call(null, $a$$1502$$, $b$$1069$$, $c$$857$$, $d$$604$$, $e$$819$$, $f$$466$$, $g$$286$$, $h$$254$$, $i$$410$$, $j$$155$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$11$ = function($a$$1503$$, $b$$1070$$, $c$$858$$, $d$$605$$, $e$$820$$, $f$$467$$, $g$$287$$, $h$$255$$, $i$$411$$, $j$$156$$, $k$$140$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$11$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$11$($a$$1503$$, $b$$1070$$, $c$$858$$, $d$$605$$, $e$$820$$, $f$$467$$, $g$$287$$, $h$$255$$, $i$$411$$, $j$$156$$, $k$$140$$) : this.$afn$.call(null, $a$$1503$$, $b$$1070$$, $c$$858$$, $d$$605$$, $e$$820$$, $f$$467$$, $g$$287$$, $h$$255$$, $i$$411$$, $j$$156$$, $k$$140$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$12$ = function($a$$1504$$, $b$$1071$$, $c$$859$$, $d$$606$$, $e$$821$$, $f$$468$$, $g$$288$$, $h$$256$$, $i$$412$$, $j$$157$$, $k$$141$$, $l$$161$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$12$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$12$($a$$1504$$, $b$$1071$$, $c$$859$$, $d$$606$$, $e$$821$$, $f$$468$$, $g$$288$$, $h$$256$$, $i$$412$$, $j$$157$$, $k$$141$$, $l$$161$$) : this.$afn$.call(null, $a$$1504$$, $b$$1071$$, $c$$859$$, $d$$606$$, $e$$821$$, $f$$468$$, $g$$288$$, $h$$256$$, $i$$412$$, $j$$157$$, $k$$141$$, $l$$161$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$13$ = function($a$$1505$$, $b$$1072$$, $c$$860$$, $d$$607$$, $e$$822$$, $f$$469$$, $g$$289$$, $h$$257$$, $i$$413$$, $j$$158$$, $k$$142$$, $l$$162$$, $m$$97$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$13$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$13$($a$$1505$$, $b$$1072$$, $c$$860$$, $d$$607$$, $e$$822$$, $f$$469$$, $g$$289$$, $h$$257$$, $i$$413$$, $j$$158$$, $k$$142$$, $l$$162$$, $m$$97$$) : this.$afn$.call(null, $a$$1505$$, $b$$1072$$, $c$$860$$, $d$$607$$, $e$$822$$, $f$$469$$, $g$$289$$, $h$$257$$, $i$$413$$, $j$$158$$, $k$$142$$, $l$$162$$, $m$$97$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$14$ = function($a$$1506$$, $b$$1073$$, $c$$861$$, $d$$608$$, $e$$823$$, $f$$470$$, $g$$290$$, $h$$258$$, $i$$414$$, $j$$159$$, $k$$143$$, $l$$163$$, $m$$98$$, $n$$578$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$14$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$14$($a$$1506$$, $b$$1073$$, $c$$861$$, $d$$608$$, $e$$823$$, $f$$470$$, $g$$290$$, $h$$258$$, $i$$414$$, $j$$159$$, $k$$143$$, $l$$163$$, $m$$98$$, $n$$578$$) : this.$afn$.call(null, $a$$1506$$, $b$$1073$$, $c$$861$$, $d$$608$$, $e$$823$$, $f$$470$$, $g$$290$$, $h$$258$$, $i$$414$$, $j$$159$$, $k$$143$$, $l$$163$$, $m$$98$$, $n$$578$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$15$ = function($a$$1507$$, $b$$1074$$, $c$$862$$, $d$$609$$, $e$$824$$, $f$$471$$, $g$$291$$, $h$$259$$, $i$$415$$, $j$$160$$, $k$$144$$, $l$$164$$, $m$$99$$, $n$$579$$, $o$$256$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$15$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$15$($a$$1507$$, $b$$1074$$, $c$$862$$, $d$$609$$, $e$$824$$, $f$$471$$, $g$$291$$, $h$$259$$, $i$$415$$, $j$$160$$, $k$$144$$, $l$$164$$, $m$$99$$, $n$$579$$, $o$$256$$) : this.$afn$.call(null, $a$$1507$$, $b$$1074$$, $c$$862$$, $d$$609$$, $e$$824$$, $f$$471$$, $g$$291$$, $h$$259$$, $i$$415$$, $j$$160$$, $k$$144$$, $l$$164$$, $m$$99$$, $n$$579$$, $o$$256$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$16$ = function($a$$1508$$, $b$$1075$$, $c$$863$$, $d$$610$$, $e$$825$$, $f$$472$$, $g$$292$$, $h$$260$$, $i$$416$$, $j$$161$$, $k$$145$$, $l$$165$$, $m$$100$$, $n$$580$$, $o$$257$$, $p$$92$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$16$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$16$($a$$1508$$, $b$$1075$$, $c$$863$$, $d$$610$$, $e$$825$$, $f$$472$$, $g$$292$$, $h$$260$$, $i$$416$$, $j$$161$$, $k$$145$$, $l$$165$$, $m$$100$$, $n$$580$$, $o$$257$$, $p$$92$$) : this.$afn$.call(null, $a$$1508$$, $b$$1075$$, $c$$863$$, $d$$610$$, $e$$825$$, $f$$472$$, $g$$292$$, $h$$260$$, $i$$416$$, $j$$161$$, $k$$145$$, $l$$165$$, $m$$100$$, $n$$580$$, $o$$257$$, $p$$92$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$17$ = function($a$$1509$$, $b$$1076$$, $c$$864$$, $d$$611$$, $e$$826$$, $f$$473$$, $g$$293$$, $h$$261$$, $i$$417$$, $j$$162$$, $k$$146$$, $l$$166$$, $m$$101$$, $n$$581$$, $o$$258$$, $p$$93$$, $q$$53$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$17$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$17$($a$$1509$$, $b$$1076$$, $c$$864$$, $d$$611$$, $e$$826$$, $f$$473$$, $g$$293$$, $h$$261$$, $i$$417$$, $j$$162$$, $k$$146$$, $l$$166$$, $m$$101$$, $n$$581$$, $o$$258$$, $p$$93$$, $q$$53$$) : this.$afn$.call(null, $a$$1509$$, $b$$1076$$, $c$$864$$, $d$$611$$, $e$$826$$, $f$$473$$, $g$$293$$, $h$$261$$, $i$$417$$, $j$$162$$, $k$$146$$, $l$$166$$, $m$$101$$, $n$$581$$, $o$$258$$, $p$$93$$, $q$$53$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$18$ = function($a$$1510$$, $b$$1077$$, $c$$865$$, $d$$612$$, $e$$827$$, $f$$474$$, $g$$294$$, $h$$262$$, $i$$418$$, $j$$163$$, $k$$147$$, $l$$167$$, $m$$102$$, $n$$582$$, $o$$259$$, $p$$94$$, $q$$54$$, $r$$440$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$18$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$18$($a$$1510$$, $b$$1077$$, $c$$865$$, $d$$612$$, $e$$827$$, $f$$474$$, $g$$294$$, $h$$262$$, $i$$418$$, $j$$163$$, $k$$147$$, $l$$167$$, $m$$102$$, $n$$582$$, $o$$259$$, $p$$94$$, $q$$54$$, $r$$440$$) : this.$afn$.call(null, $a$$1510$$, $b$$1077$$, $c$$865$$, $d$$612$$, $e$$827$$, $f$$474$$, $g$$294$$, $h$$262$$, $i$$418$$, $j$$163$$, $k$$147$$, $l$$167$$, $m$$102$$, $n$$582$$, $o$$259$$, $p$$94$$, $q$$54$$, 
  $r$$440$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$19$ = function($a$$1511$$, $b$$1078$$, $c$$866$$, $d$$613$$, $e$$828$$, $f$$475$$, $g$$295$$, $h$$263$$, $i$$419$$, $j$$164$$, $k$$148$$, $l$$168$$, $m$$103$$, $n$$583$$, $o$$260$$, $p$$95$$, $q$$55$$, $r$$441$$, $s$$140$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$19$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$19$($a$$1511$$, $b$$1078$$, $c$$866$$, $d$$613$$, $e$$828$$, $f$$475$$, $g$$295$$, $h$$263$$, $i$$419$$, $j$$164$$, $k$$148$$, $l$$168$$, $m$$103$$, $n$$583$$, $o$$260$$, $p$$95$$, $q$$55$$, $r$$441$$, $s$$140$$) : this.$afn$.call(null, $a$$1511$$, $b$$1078$$, $c$$866$$, $d$$613$$, $e$$828$$, $f$$475$$, $g$$295$$, $h$$263$$, $i$$419$$, $j$$164$$, $k$$148$$, $l$$168$$, $m$$103$$, $n$$583$$, $o$$260$$, $p$$95$$, 
  $q$$55$$, $r$$441$$, $s$$140$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$20$ = function($a$$1512$$, $b$$1079$$, $c$$867$$, $d$$614$$, $e$$829$$, $f$$476$$, $g$$296$$, $h$$264$$, $i$$420$$, $j$$165$$, $k$$149$$, $l$$169$$, $m$$104$$, $n$$584$$, $o$$261$$, $p$$96$$, $q$$56$$, $r$$442$$, $s$$141$$, $t$$655$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$20$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$20$($a$$1512$$, $b$$1079$$, $c$$867$$, $d$$614$$, $e$$829$$, $f$$476$$, $g$$296$$, $h$$264$$, $i$$420$$, $j$$165$$, $k$$149$$, $l$$169$$, $m$$104$$, $n$$584$$, $o$$261$$, $p$$96$$, $q$$56$$, $r$$442$$, $s$$141$$, $t$$655$$) : this.$afn$.call(null, $a$$1512$$, $b$$1079$$, $c$$867$$, $d$$614$$, $e$$829$$, $f$$476$$, $g$$296$$, $h$$264$$, $i$$420$$, $j$$165$$, $k$$149$$, $l$$169$$, $m$$104$$, $n$$584$$, $o$$261$$, 
  $p$$96$$, $q$$56$$, $r$$442$$, $s$$141$$, $t$$655$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$21$ = function($a$$1513$$, $b$$1080$$, $c$$868$$, $d$$615$$, $e$$830$$, $f$$477$$, $g$$297$$, $h$$265$$, $i$$421$$, $j$$166$$, $k$$150$$, $l$$170$$, $m$$105$$, $n$$585$$, $o$$262$$, $p$$97$$, $q$$57$$, $r$$443$$, $s$$142$$, $t$$656$$, $rest$$6$$) {
  var $G__18829$$ = this.$afn$;
  return $cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$22$ ? $cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$22$($G__18829$$, $a$$1513$$, $b$$1080$$, $c$$868$$, $d$$615$$, $e$$830$$, $f$$477$$, $g$$297$$, $h$$265$$, $i$$421$$, $j$$166$$, $k$$150$$, $l$$170$$, $m$$105$$, $n$$585$$, $o$$262$$, $p$$97$$, $q$$57$$, $r$$443$$, $s$$142$$, $t$$656$$, $rest$$6$$) : $cljs$core$apply$$.call(null, $G__18829$$, $a$$1513$$, $b$$1080$$, $c$$868$$, $d$$615$$, $e$$830$$, $f$$477$$, $g$$297$$, $h$$265$$, $i$$421$$, 
  $j$$166$$, $k$$150$$, $l$$170$$, $m$$105$$, $n$$585$$, $o$$262$$, $p$$97$$, $q$$57$$, $r$$443$$, $s$$142$$, $t$$656$$, $rest$$6$$);
};
function $cljs$core$with_meta$$($o$$263$$, $meta$$5$$) {
  return $cljs$core$fn_QMARK_$$($o$$263$$) && !($o$$263$$ ? $o$$263$$.$cljs$lang$protocol_mask$partition0$$ & 262144 || $o$$263$$.$cljs$core$IWithMeta$$ || ($o$$263$$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IWithMeta$$, $o$$263$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IWithMeta$$, $o$$263$$)) ? new $cljs$core$MetaFn$$($o$$263$$, $meta$$5$$) : null == $o$$263$$ ? null : $cljs$core$_with_meta$$($o$$263$$, $meta$$5$$);
}
function $cljs$core$meta$$($o$$264$$) {
  var $and__4239__auto__$$inline_144$$ = null != $o$$264$$;
  return ($and__4239__auto__$$inline_144$$ ? $o$$264$$ ? $o$$264$$.$cljs$lang$protocol_mask$partition0$$ & 131072 || $o$$264$$.$cljs$core$IMeta$$ || ($o$$264$$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IMeta$$, $o$$264$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IMeta$$, $o$$264$$) : $and__4239__auto__$$inline_144$$) ? $cljs$core$_meta$$($o$$264$$) : null;
}
function $cljs$core$empty_QMARK_$$($coll$$92$$) {
  return null == $coll$$92$$ || $cljs$core$not$$($cljs$core$seq$$($coll$$92$$));
}
function $cljs$core$coll_QMARK_$$($x$$108$$) {
  return null == $x$$108$$ ? !1 : $x$$108$$ ? $x$$108$$.$cljs$lang$protocol_mask$partition0$$ & 8 || $x$$108$$.$cljs$core$ICollection$$ ? !0 : $x$$108$$.$cljs$lang$protocol_mask$partition0$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ICollection$$, $x$$108$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ICollection$$, $x$$108$$);
}
function $cljs$core$set_QMARK_$$($x$$109$$) {
  return null == $x$$109$$ ? !1 : $x$$109$$ ? $x$$109$$.$cljs$lang$protocol_mask$partition0$$ & 4096 || $x$$109$$.$cljs$core$ISet$$ ? !0 : $x$$109$$.$cljs$lang$protocol_mask$partition0$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ISet$$, $x$$109$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ISet$$, $x$$109$$);
}
function $cljs$core$map_QMARK_$$($x$$114$$) {
  return null == $x$$114$$ ? !1 : $x$$114$$ ? $x$$114$$.$cljs$lang$protocol_mask$partition0$$ & 1024 || $x$$114$$.$cljs$core$IMap$$ ? !0 : $x$$114$$.$cljs$lang$protocol_mask$partition0$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IMap$$, $x$$114$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IMap$$, $x$$114$$);
}
function $cljs$core$vector_QMARK_$$($x$$116$$) {
  return $x$$116$$ ? $x$$116$$.$cljs$lang$protocol_mask$partition0$$ & 16384 || $x$$116$$.$cljs$core$IVector$$ ? !0 : $x$$116$$.$cljs$lang$protocol_mask$partition0$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IVector$$, $x$$116$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IVector$$, $x$$116$$);
}
function $cljs$core$chunked_seq_QMARK_$$($x$$117$$) {
  return $x$$117$$ ? $x$$117$$.$cljs$lang$protocol_mask$partition1$$ & 512 || $x$$117$$.$cljs$core$IChunkedSeq$$ ? !0 : !1 : !1;
}
function $cljs$core$js_keys$$($obj$$68$$) {
  var $keys$$1$$ = [];
  $goog$object$forEach$$($obj$$68$$, function($obj$$68$$, $keys$$1$$) {
    return function($obj$$68$$, $G__18899_18901$$1$$) {
      return $keys$$1$$.push($G__18899_18901$$1$$);
    };
  }($obj$$68$$, $keys$$1$$));
  return $keys$$1$$;
}
function $cljs$core$array_copy$$($from$$, $i$$422_i__$1$$2$$, $to$$1$$, $G__18904_j$$167_j__$1$$, $G__18905_len$$3_len__$1$$) {
  for (;0 !== $G__18905_len$$3_len__$1$$;) {
    $to$$1$$[$G__18904_j$$167_j__$1$$] = $from$$[$i$$422_i__$1$$2$$], $G__18904_j$$167_j__$1$$ += 1, --$G__18905_len$$3_len__$1$$, $i$$422_i__$1$$2$$ += 1;
  }
}
var $cljs$core$lookup_sentinel$$ = {};
function $cljs$core$seq_QMARK_$$($s$$143$$) {
  return null == $s$$143$$ ? !1 : $s$$143$$ ? $s$$143$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $s$$143$$.$cljs$core$ISeq$$ ? !0 : $s$$143$$.$cljs$lang$protocol_mask$partition0$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ISeq$$, $s$$143$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ISeq$$, $s$$143$$);
}
function $cljs$core$boolean$0$$($x$$121$$) {
  return $cljs$core$truth_$$($x$$121$$) ? !0 : !1;
}
function $cljs$core$ifn_QMARK_$$($f$$478$$) {
  var $or__4251__auto__$$88$$ = $cljs$core$fn_QMARK_$$($f$$478$$);
  return $or__4251__auto__$$88$$ ? $or__4251__auto__$$88$$ : $f$$478$$ ? $f$$478$$.$cljs$lang$protocol_mask$partition0$$ & 1 || $f$$478$$.$cljs$core$IFn$$ ? !0 : $f$$478$$.$cljs$lang$protocol_mask$partition0$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IFn$$, $f$$478$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IFn$$, $f$$478$$);
}
function $cljs$core$contains_QMARK_$$($coll$$93$$, $v$$32$$) {
  return $cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($coll$$93$$, $v$$32$$, $cljs$core$lookup_sentinel$$) === $cljs$core$lookup_sentinel$$ ? !1 : !0;
}
function $cljs$core$compare$$($x$$125$$, $y$$69$$) {
  if ($x$$125$$ === $y$$69$$) {
    return 0;
  }
  if (null == $x$$125$$) {
    return -1;
  }
  if (null == $y$$69$$) {
    return 1;
  }
  if ("number" === typeof $x$$125$$) {
    if ("number" === typeof $y$$69$$) {
      return $goog$array$defaultCompare$$($x$$125$$, $y$$69$$);
    }
    throw Error([$cljs$core$str$$("Cannot compare "), $cljs$core$str$$($x$$125$$), $cljs$core$str$$(" to "), $cljs$core$str$$($y$$69$$)].join(""));
  }
  if ($x$$125$$ ? $x$$125$$.$cljs$lang$protocol_mask$partition1$$ & 2048 || $x$$125$$.$cljs$core$IComparable$$ || ($x$$125$$.$cljs$lang$protocol_mask$partition1$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IComparable$$, $x$$125$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IComparable$$, $x$$125$$)) {
    return $cljs$core$_compare$$($x$$125$$, $y$$69$$);
  }
  if ("string" !== typeof $x$$125$$ && !$cljs$core$array_QMARK_$$($x$$125$$) && !0 !== $x$$125$$ && !1 !== $x$$125$$ || $cljs$core$type$$($x$$125$$) !== $cljs$core$type$$($y$$69$$)) {
    throw Error([$cljs$core$str$$("Cannot compare "), $cljs$core$str$$($x$$125$$), $cljs$core$str$$(" to "), $cljs$core$str$$($y$$69$$)].join(""));
  }
  return $goog$array$defaultCompare$$($x$$125$$, $y$$69$$);
}
function $cljs$core$compare_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$($xs$$4$$, $ys$$) {
  var $JSCompiler_temp$$5_JSCompiler_temp$$6_JSCompiler_temp$$7_xl$$ = $cljs$core$count$$($xs$$4$$), $n$$inline_149_yl$$ = $cljs$core$count$$($ys$$);
  if ($JSCompiler_temp$$5_JSCompiler_temp$$6_JSCompiler_temp$$7_xl$$ < $n$$inline_149_yl$$) {
    $JSCompiler_temp$$5_JSCompiler_temp$$6_JSCompiler_temp$$7_xl$$ = -1;
  } else {
    if ($JSCompiler_temp$$5_JSCompiler_temp$$6_JSCompiler_temp$$7_xl$$ > $n$$inline_149_yl$$) {
      $JSCompiler_temp$$5_JSCompiler_temp$$6_JSCompiler_temp$$7_xl$$ = 1;
    } else {
      if (0 === $JSCompiler_temp$$5_JSCompiler_temp$$6_JSCompiler_temp$$7_xl$$) {
        $JSCompiler_temp$$5_JSCompiler_temp$$6_JSCompiler_temp$$7_xl$$ = 0;
      } else {
        a: {
          for ($n$$inline_149_yl$$ = 0;;) {
            var $d$$inline_150$$ = $cljs$core$compare$$($cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($xs$$4$$, $n$$inline_149_yl$$), $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($ys$$, $n$$inline_149_yl$$));
            if (0 === $d$$inline_150$$ && $n$$inline_149_yl$$ + 1 < $JSCompiler_temp$$5_JSCompiler_temp$$6_JSCompiler_temp$$7_xl$$) {
              $n$$inline_149_yl$$ += 1;
            } else {
              $JSCompiler_temp$$5_JSCompiler_temp$$6_JSCompiler_temp$$7_xl$$ = $d$$inline_150$$;
              break a;
            }
          }
        }
      }
    }
  }
  return $JSCompiler_temp$$5_JSCompiler_temp$$6_JSCompiler_temp$$7_xl$$;
}
function $cljs$core$fn__GT_comparator$$($f$$479$$) {
  return $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($f$$479$$, $cljs$core$compare$$) ? $cljs$core$compare$$ : function($x$$126$$, $y$$70$$) {
    var $r$$444$$ = $f$$479$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$$479$$.$cljs$core$IFn$_invoke$arity$2$($x$$126$$, $y$$70$$) : $f$$479$$.call(null, $x$$126$$, $y$$70$$);
    return "number" === typeof $r$$444$$ ? $r$$444$$ : $cljs$core$truth_$$($r$$444$$) ? -1 : $cljs$core$truth_$$($f$$479$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$$479$$.$cljs$core$IFn$_invoke$arity$2$($y$$70$$, $x$$126$$) : $f$$479$$.call(null, $y$$70$$, $x$$126$$)) ? 1 : 0;
  };
}
function $cljs$core$sort$cljs$0core$0IFn$0_invoke$0arity$02$$($comp$$, $coll$$96$$) {
  if ($cljs$core$seq$$($coll$$96$$)) {
    var $a$$1514$$ = $cljs$core$to_array$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$to_array$$.$cljs$core$IFn$_invoke$arity$1$($coll$$96$$) : $cljs$core$to_array$$.call(null, $coll$$96$$), $G__18972_18975$$ = $cljs$core$fn__GT_comparator$$($comp$$);
    $goog$array$stableSort$$($a$$1514$$, $G__18972_18975$$);
    return $cljs$core$seq$$($a$$1514$$);
  }
  return $cljs$core$List$EMPTY$$;
}
function $cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($keyfn$$, $coll$$97$$) {
  return $cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$03$$($keyfn$$, $coll$$97$$);
}
function $cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$03$$($keyfn$$1$$, $coll$$98$$) {
  return $cljs$core$sort$cljs$0core$0IFn$0_invoke$0arity$02$$(function($coll$$98$$, $y$$71$$) {
    return $cljs$core$fn__GT_comparator$$($cljs$core$compare$$).call(null, $keyfn$$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $keyfn$$1$$.$cljs$core$IFn$_invoke$arity$1$($coll$$98$$) : $keyfn$$1$$.call(null, $coll$$98$$), $keyfn$$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $keyfn$$1$$.$cljs$core$IFn$_invoke$arity$1$($y$$71$$) : $keyfn$$1$$.call(null, $y$$71$$));
  }, $coll$$98$$);
}
function $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$$480$$, $coll$$99$$) {
  var $G__18985_temp__4423__auto__$$1$$ = $cljs$core$seq$$($coll$$99$$);
  if ($G__18985_temp__4423__auto__$$1$$) {
    var $G__18984$$ = $cljs$core$first$$($G__18985_temp__4423__auto__$$1$$), $G__18985_temp__4423__auto__$$1$$ = $cljs$core$next$$($G__18985_temp__4423__auto__$$1$$);
    return $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$ ? $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$$480$$, $G__18984$$, $G__18985_temp__4423__auto__$$1$$) : $cljs$core$reduce$$.call(null, $f$$480$$, $G__18984$$, $G__18985_temp__4423__auto__$$1$$);
  }
  return $f$$480$$.$cljs$core$IFn$_invoke$arity$0$ ? $f$$480$$.$cljs$core$IFn$_invoke$arity$0$() : $f$$480$$.call(null);
}
function $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$$481$$, $G__18986$$inline_152_G__18989_nval$$6_val$$39_val__$1$$4$$, $G__18990_coll$$100_coll__$1$$23$$) {
  for ($G__18990_coll$$100_coll__$1$$23$$ = $cljs$core$seq$$($G__18990_coll$$100_coll__$1$$23$$);;) {
    if ($G__18990_coll$$100_coll__$1$$23$$) {
      var $G__18987$$inline_153$$ = $cljs$core$first$$($G__18990_coll$$100_coll__$1$$23$$);
      $G__18986$$inline_152_G__18989_nval$$6_val$$39_val__$1$$4$$ = $f$$481$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$$481$$.$cljs$core$IFn$_invoke$arity$2$($G__18986$$inline_152_G__18989_nval$$6_val$$39_val__$1$$4$$, $G__18987$$inline_153$$) : $f$$481$$.call(null, $G__18986$$inline_152_G__18989_nval$$6_val$$39_val__$1$$4$$, $G__18987$$inline_153$$);
      if ($cljs$core$reduced_QMARK_$$($G__18986$$inline_152_G__18989_nval$$6_val$$39_val__$1$$4$$)) {
        return $cljs$core$_deref$$($G__18986$$inline_152_G__18989_nval$$6_val$$39_val__$1$$4$$);
      }
      $G__18990_coll$$100_coll__$1$$23$$ = $cljs$core$next$$($G__18990_coll$$100_coll__$1$$23$$);
    } else {
      return $G__18986$$inline_152_G__18989_nval$$6_val$$39_val__$1$$4$$;
    }
  }
}
function $cljs$core$reduce$$() {
  switch(arguments.length) {
    case 2:
      return $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([$cljs$core$str$$("Invalid arity: "), $cljs$core$str$$(arguments.length)].join(""));;
  }
}
function $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$$482$$, $coll$$102$$) {
  return $coll$$102$$ && ($coll$$102$$.$cljs$lang$protocol_mask$partition0$$ & 524288 || $coll$$102$$.$cljs$core$IReduce$$) ? $coll$$102$$.$cljs$core$IReduce$_reduce$arity$2$(null, $f$$482$$) : $cljs$core$array_QMARK_$$($coll$$102$$) ? $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($coll$$102$$, $f$$482$$) : "string" === typeof $coll$$102$$ ? $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($coll$$102$$, $f$$482$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IReduce$$, 
  $coll$$102$$) ? $cljs$core$_reduce$$.$cljs$core$IFn$_invoke$arity$2$($coll$$102$$, $f$$482$$) : $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$$482$$, $coll$$102$$);
}
function $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$$483$$, $val$$40$$, $coll$$103$$) {
  return $coll$$103$$ && ($coll$$103$$.$cljs$lang$protocol_mask$partition0$$ & 524288 || $coll$$103$$.$cljs$core$IReduce$$) ? $coll$$103$$.$cljs$core$IReduce$_reduce$arity$3$(null, $f$$483$$, $val$$40$$) : $cljs$core$array_QMARK_$$($coll$$103$$) ? $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($coll$$103$$, $f$$483$$, $val$$40$$) : "string" === typeof $coll$$103$$ ? $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($coll$$103$$, $f$$483$$, $val$$40$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IReduce$$, 
  $coll$$103$$) ? $cljs$core$_reduce$$.$cljs$core$IFn$_invoke$arity$3$($coll$$103$$, $f$$483$$, $val$$40$$) : $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$$483$$, $val$$40$$, $coll$$103$$);
}
function $cljs$core$reduce_kv$$($f$$484$$, $init$$1$$, $coll$$104$$) {
  return null != $coll$$104$$ ? $cljs$core$_kv_reduce$$($coll$$104$$, $f$$484$$, $init$$1$$) : $init$$1$$;
}
function $cljs$core$identity$$($x$$128$$) {
  return $x$$128$$;
}
function $cljs$core$dec$$($x$$156$$) {
  return $x$$156$$ - 1;
}
function $cljs$core$quot$$($n$$591_q$$inline_155$$) {
  $n$$591_q$$inline_155$$ = ($n$$591_q$$inline_155$$ - $n$$591_q$$inline_155$$ % 2) / 2;
  return 0 <= $n$$591_q$$inline_155$$ ? Math.floor($n$$591_q$$inline_155$$) : Math.ceil($n$$591_q$$inline_155$$);
}
function $cljs$core$bit_count$$($v$$33_v__$1_v__$2$$) {
  $v$$33_v__$1_v__$2$$ -= $v$$33_v__$1_v__$2$$ >> 1 & 1431655765;
  $v$$33_v__$1_v__$2$$ = ($v$$33_v__$1_v__$2$$ & 858993459) + ($v$$33_v__$1_v__$2$$ >> 2 & 858993459);
  return 16843009 * ($v$$33_v__$1_v__$2$$ + ($v$$33_v__$1_v__$2$$ >> 4) & 252645135) >> 24;
}
var $cljs$core$str$$ = function $cljs$core$str$$() {
  switch(arguments.length) {
    case 0:
      return $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$0$();
    case 1:
      return $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    default:
      return $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], new $cljs$core$IndexedSeq$$(Array.prototype.slice.call(arguments, 1), 0));
  }
};
$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$0$ = function() {
  return "";
};
$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$ = function($x$$234$$) {
  return null == $x$$234$$ ? "" : $goog$string$buildString$$($x$$234$$);
};
$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($x$$235$$, $ys$$2$$) {
  for (var $G__19178_sb$$5$$ = new $goog$string$StringBuffer$$("" + $cljs$core$str$$($x$$235$$)), $G__19179_more$$24$$ = $ys$$2$$;;) {
    if ($cljs$core$truth_$$($G__19179_more$$24$$)) {
      $G__19178_sb$$5$$ = $G__19178_sb$$5$$.append("" + $cljs$core$str$$($cljs$core$first$$($G__19179_more$$24$$))), $G__19179_more$$24$$ = $cljs$core$next$$($G__19179_more$$24$$);
    } else {
      return $G__19178_sb$$5$$.toString();
    }
  }
};
$cljs$core$str$$.$cljs$lang$applyTo$ = function($seq19172_seq19172__$1$$) {
  var $G__19173$$ = $cljs$core$first$$($seq19172_seq19172__$1$$);
  $seq19172_seq19172__$1$$ = $cljs$core$next$$($seq19172_seq19172__$1$$);
  return $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$variadic$($G__19173$$, $seq19172_seq19172__$1$$);
};
$cljs$core$str$$.$cljs$lang$maxFixedArity$ = 1;
function $cljs$core$equiv_sequential$$($x$$236$$, $y$$118$$) {
  var $G__19183$$inline_159_JSCompiler_temp$$11_JSCompiler_temp$$12_xs$$inline_157$$;
  if ($y$$118$$ ? $y$$118$$.$cljs$lang$protocol_mask$partition0$$ & 16777216 || $y$$118$$.$cljs$core$ISequential$$ || ($y$$118$$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ISequential$$, $y$$118$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ISequential$$, $y$$118$$)) {
    if ($cljs$core$counted_QMARK_$$($x$$236$$) && $cljs$core$counted_QMARK_$$($y$$118$$) && $cljs$core$count$$($x$$236$$) !== $cljs$core$count$$($y$$118$$)) {
      $G__19183$$inline_159_JSCompiler_temp$$11_JSCompiler_temp$$12_xs$$inline_157$$ = !1;
    } else {
      a: {
        $G__19183$$inline_159_JSCompiler_temp$$11_JSCompiler_temp$$12_xs$$inline_157$$ = $cljs$core$seq$$($x$$236$$);
        for (var $G__19184$$inline_160_ys$$inline_158$$ = $cljs$core$seq$$($y$$118$$);;) {
          if (null == $G__19183$$inline_159_JSCompiler_temp$$11_JSCompiler_temp$$12_xs$$inline_157$$) {
            $G__19183$$inline_159_JSCompiler_temp$$11_JSCompiler_temp$$12_xs$$inline_157$$ = null == $G__19184$$inline_160_ys$$inline_158$$;
            break a;
          }
          if (null != $G__19184$$inline_160_ys$$inline_158$$ && $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$first$$($G__19183$$inline_159_JSCompiler_temp$$11_JSCompiler_temp$$12_xs$$inline_157$$), $cljs$core$first$$($G__19184$$inline_160_ys$$inline_158$$))) {
            $G__19183$$inline_159_JSCompiler_temp$$11_JSCompiler_temp$$12_xs$$inline_157$$ = $cljs$core$next$$($G__19183$$inline_159_JSCompiler_temp$$11_JSCompiler_temp$$12_xs$$inline_157$$), $G__19184$$inline_160_ys$$inline_158$$ = $cljs$core$next$$($G__19184$$inline_160_ys$$inline_158$$);
          } else {
            $G__19183$$inline_159_JSCompiler_temp$$11_JSCompiler_temp$$12_xs$$inline_157$$ = !1;
            break a;
          }
        }
      }
    }
  } else {
    $G__19183$$inline_159_JSCompiler_temp$$11_JSCompiler_temp$$12_xs$$inline_157$$ = null;
  }
  return $cljs$core$boolean$0$$($G__19183$$inline_159_JSCompiler_temp$$11_JSCompiler_temp$$12_xs$$inline_157$$);
}
function $cljs$core$List$$($meta$$6$$, $first$$2$$, $rest$$7$$, $count$$13$$, $__hash$$) {
  this.meta = $meta$$6$$;
  this.first = $first$$2$$;
  this.rest = $rest$$7$$;
  this.count = $count$$13$$;
  this.$__hash$ = $__hash$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 65937646;
  this.$cljs$lang$protocol_mask$partition1$$ = 8192;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$List$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$$12$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$$12$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.meta;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  return 1 === this.count ? null : this.rest;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return this.count;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IStack$_peek$arity$1$ = function() {
  return this.first;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IStack$_pop$arity$1$ = function() {
  return $cljs$core$_rest$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4667__auto__$$1_h__4667__auto____$1$$1$$ = this.$__hash$;
  return null != $h__4667__auto__$$1_h__4667__auto____$1$$1$$ ? $h__4667__auto__$$1_h__4667__auto____$1$$1$$ : this.$__hash$ = $h__4667__auto__$$1_h__4667__auto____$1$$1$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$$116$$, $other$$13$$) {
  return $cljs$core$equiv_sequential$$(this, $other$$13$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$_with_meta$$($cljs$core$List$EMPTY$$, this.meta);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$$118$$, $f$$489$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$$489$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$$119$$, $f$$490$$, $start$$13$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$$490$$, $start$$13$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return this.first;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  return 1 === this.count ? $cljs$core$List$EMPTY$$ : this.rest;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$$123$$, $meta__$1$$) {
  return new $cljs$core$List$$($meta__$1$$, this.first, this.rest, this.count, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$$124$$, $o$$265$$) {
  return new $cljs$core$List$$(this.meta, $o$$265$$, this, this.count + 1, null);
};
$cljs$core$List$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$EmptyList$$($meta$$8$$) {
  this.meta = $meta$$8$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 65937614;
  this.$cljs$lang$protocol_mask$partition1$$ = 8192;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$EmptyList$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$$14$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$$14$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.meta;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  return null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return 0;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IStack$_peek$arity$1$ = function() {
  return null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IStack$_pop$arity$1$ = function() {
  throw Error("Can't pop empty list");
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  return $cljs$core$empty_ordered_hash$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$$132$$, $other$$15$$) {
  return $cljs$core$equiv_sequential$$(this, $other$$15$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$$134$$, $f$$491$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$$491$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$$135$$, $f$$492$$, $start$$14$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$$492$$, $start$$14$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  return $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$$139$$, $meta__$1$$1$$) {
  return new $cljs$core$EmptyList$$($meta__$1$$1$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$$140$$, $o$$266$$) {
  return new $cljs$core$List$$(this.meta, $o$$266$$, null, 1, null);
};
var $cljs$core$List$EMPTY$$ = new $cljs$core$EmptyList$$(null);
$cljs$core$EmptyList$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$list$$() {
  a: {
    var $i$$inline_731_xs$$inline_726_xs__$1$$inline_729$$ = 0 < arguments.length ? new $cljs$core$IndexedSeq$$(Array.prototype.slice.call(arguments, 0), 0) : null, $JSCompiler_temp$$inline_727_arr$$inline_728_arr$$inline_730$$;
    if ($i$$inline_731_xs$$inline_726_xs__$1$$inline_729$$ instanceof $cljs$core$IndexedSeq$$ && 0 === $i$$inline_731_xs$$inline_726_xs__$1$$inline_729$$.i) {
      $JSCompiler_temp$$inline_727_arr$$inline_728_arr$$inline_730$$ = $i$$inline_731_xs$$inline_726_xs__$1$$inline_729$$.$arr$;
    } else {
      b: {
        for ($JSCompiler_temp$$inline_727_arr$$inline_728_arr$$inline_730$$ = [];;) {
          if (null != $i$$inline_731_xs$$inline_726_xs__$1$$inline_729$$) {
            $JSCompiler_temp$$inline_727_arr$$inline_728_arr$$inline_730$$.push($i$$inline_731_xs$$inline_726_xs__$1$$inline_729$$.$cljs$core$ISeq$_first$arity$1$(null)), $i$$inline_731_xs$$inline_726_xs__$1$$inline_729$$ = $i$$inline_731_xs$$inline_726_xs__$1$$inline_729$$.$cljs$core$INext$_next$arity$1$(null);
          } else {
            break b;
          }
        }
      }
    }
    for (var $i$$inline_731_xs$$inline_726_xs__$1$$inline_729$$ = $JSCompiler_temp$$inline_727_arr$$inline_728_arr$$inline_730$$.length, $G__19247$$inline_734_r$$inline_732$$ = $cljs$core$List$EMPTY$$;;) {
      if (0 < $i$$inline_731_xs$$inline_726_xs__$1$$inline_729$$) {
        var $G__19246$$inline_733$$ = $i$$inline_731_xs$$inline_726_xs__$1$$inline_729$$ - 1, $G__19247$$inline_734_r$$inline_732$$ = $G__19247$$inline_734_r$$inline_732$$.$cljs$core$ICollection$_conj$arity$2$(null, $JSCompiler_temp$$inline_727_arr$$inline_728_arr$$inline_730$$[$i$$inline_731_xs$$inline_726_xs__$1$$inline_729$$ - 1]), $i$$inline_731_xs$$inline_726_xs__$1$$inline_729$$ = $G__19246$$inline_733$$
      } else {
        break a;
      }
    }
  }
  return $G__19247$$inline_734_r$$inline_732$$;
}
function $cljs$core$Cons$$($meta$$10$$, $first$$4$$, $rest$$9$$, $__hash$$2$$) {
  this.meta = $meta$$10$$;
  this.first = $first$$4$$;
  this.rest = $rest$$9$$;
  this.$__hash$ = $__hash$$2$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 65929452;
  this.$cljs$lang$protocol_mask$partition1$$ = 8192;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$Cons$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$$16$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$$16$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.meta;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  return null == this.rest ? null : $cljs$core$seq$$(this.rest);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4667__auto__$$2_h__4667__auto____$1$$2$$ = this.$__hash$;
  return null != $h__4667__auto__$$2_h__4667__auto____$1$$2$$ ? $h__4667__auto__$$2_h__4667__auto____$1$$2$$ : this.$__hash$ = $h__4667__auto__$$2_h__4667__auto____$1$$2$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$$148$$, $other$$17$$) {
  return $cljs$core$equiv_sequential$$(this, $other$$17$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$with_meta$$($cljs$core$List$EMPTY$$, this.meta);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$$150$$, $f$$493$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$$493$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$$151$$, $f$$494$$, $start$$15$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$$494$$, $start$$15$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return this.first;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  return null == this.rest ? $cljs$core$List$EMPTY$$ : this.rest;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$$155$$, $meta__$1$$2$$) {
  return new $cljs$core$Cons$$($meta__$1$$2$$, this.first, this.rest, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$$156$$, $o$$267$$) {
  return new $cljs$core$Cons$$(null, $o$$267$$, this, this.$__hash$);
};
$cljs$core$Cons$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$cons$$($x$$237$$, $coll$$157$$) {
  var $or__4251__auto__$$inline_165$$ = null == $coll$$157$$;
  return ($or__4251__auto__$$inline_165$$ ? $or__4251__auto__$$inline_165$$ : $coll$$157$$ && ($coll$$157$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $coll$$157$$.$cljs$core$ISeq$$)) ? new $cljs$core$Cons$$(null, $x$$237$$, $coll$$157$$, null) : new $cljs$core$Cons$$(null, $x$$237$$, $cljs$core$seq$$($coll$$157$$), null);
}
function $cljs$core$compare_keywords$$($a$$1516$$, $b$$1081$$) {
  if ($a$$1516$$.$fqn$ === $b$$1081$$.$fqn$) {
    return 0;
  }
  var $and__4239__auto__$$inline_737_nsc$$1$$ = $cljs$core$not$$($a$$1516$$.$ns$);
  if ($cljs$core$truth_$$($and__4239__auto__$$inline_737_nsc$$1$$ ? $b$$1081$$.$ns$ : $and__4239__auto__$$inline_737_nsc$$1$$)) {
    return -1;
  }
  if ($cljs$core$truth_$$($a$$1516$$.$ns$)) {
    if ($cljs$core$not$$($b$$1081$$.$ns$)) {
      return 1;
    }
    $and__4239__auto__$$inline_737_nsc$$1$$ = $goog$array$defaultCompare$$($a$$1516$$.$ns$, $b$$1081$$.$ns$);
    return 0 === $and__4239__auto__$$inline_737_nsc$$1$$ ? $goog$array$defaultCompare$$($a$$1516$$.name, $b$$1081$$.name) : $and__4239__auto__$$inline_737_nsc$$1$$;
  }
  return $goog$array$defaultCompare$$($a$$1516$$.name, $b$$1081$$.name);
}
function $cljs$core$Keyword$$($ns$$3$$, $name$$65$$, $fqn$$, $_hash$$2$$) {
  this.$ns$ = $ns$$3$$;
  this.name = $name$$65$$;
  this.$fqn$ = $fqn$$;
  this._hash = $_hash$$2$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 2153775105;
  this.$cljs$lang$protocol_mask$partition1$$ = 4096;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$Keyword$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return [$cljs$core$str$$(":"), $cljs$core$str$$(this.$fqn$)].join("");
};
$JSCompiler_prototypeAlias$$.equiv = function($other$$18$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$$18$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($_$$142$$, $other$$19$$) {
  return $other$$19$$ instanceof $cljs$core$Keyword$$ ? this.$fqn$ === $other$$19$$.$fqn$ : !1;
};
$JSCompiler_prototypeAlias$$.call = function() {
  var $G__19267$$ = null, $G__19267$$ = function($G__19267$$, $coll$$160$$, $not_found$$10$$) {
    switch(arguments.length) {
      case 2:
        return $cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($coll$$160$$, this);
      case 3:
        return $cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($coll$$160$$, this, $not_found$$10$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__19267$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__19267$$, $coll$$158$$) {
    return $cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($coll$$158$$, this);
  };
  $G__19267$$.$cljs$core$IFn$_invoke$arity$3$ = function($G__19267$$, $coll$$159$$, $not_found$$9$$) {
    return $cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($coll$$159$$, this, $not_found$$9$$);
  };
  return $G__19267$$;
}();
$JSCompiler_prototypeAlias$$.apply = function($self__$$212$$, $args19266$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args19266$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($coll$$161$$) {
  return $cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($coll$$161$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($coll$$162$$, $not_found$$11$$) {
  return $cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($coll$$162$$, this, $not_found$$11$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4667__auto__$$3_h__4667__auto____$1$$3$$ = this._hash;
  return null != $h__4667__auto__$$3_h__4667__auto____$1$$3$$ ? $h__4667__auto__$$3_h__4667__auto____$1$$3$$ : this._hash = $h__4667__auto__$$3_h__4667__auto____$1$$3$$ = $cljs$core$hash_combine$$($cljs$core$m3_hash_unencoded_chars$$(this.name), $cljs$core$hash_string$$(this.$ns$)) + 2654435769 | 0;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($o$$268$$, $writer$$5$$) {
  return $cljs$core$_write$$($writer$$5$$, [$cljs$core$str$$(":"), $cljs$core$str$$(this.$fqn$)].join(""));
};
function $cljs$core$keyword_identical_QMARK_$$($x$$240$$, $y$$119$$) {
  return $x$$240$$ === $y$$119$$ ? !0 : $x$$240$$ instanceof $cljs$core$Keyword$$ && $y$$119$$ instanceof $cljs$core$Keyword$$ ? $x$$240$$.$fqn$ === $y$$119$$.$fqn$ : !1;
}
var $cljs$core$keyword$$ = function $cljs$core$keyword$$() {
  switch(arguments.length) {
    case 1:
      return $cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      throw Error([$cljs$core$str$$("Invalid arity: "), $cljs$core$str$$(arguments.length)].join(""));;
  }
};
$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$ = function($name$$67$$) {
  if ($name$$67$$ instanceof $cljs$core$Keyword$$) {
    return $name$$67$$;
  }
  if ($name$$67$$ instanceof $cljs$core$Symbol$$) {
    var $JSCompiler_inline_result$$514_parts$$4$$;
    if ($name$$67$$ && ($name$$67$$.$cljs$lang$protocol_mask$partition1$$ & 4096 || $name$$67$$.$cljs$core$INamed$$)) {
      $JSCompiler_inline_result$$514_parts$$4$$ = $name$$67$$.$ns$;
    } else {
      throw Error([$cljs$core$str$$("Doesn't support namespace: "), $cljs$core$str$$($name$$67$$)].join(""));
    }
    return new $cljs$core$Keyword$$($JSCompiler_inline_result$$514_parts$$4$$, $cljs$core$name$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$name$$.$cljs$core$IFn$_invoke$arity$1$($name$$67$$) : $cljs$core$name$$.call(null, $name$$67$$), $name$$67$$.$str$, null);
  }
  return "string" === typeof $name$$67$$ ? ($JSCompiler_inline_result$$514_parts$$4$$ = $name$$67$$.split("/"), 2 === $JSCompiler_inline_result$$514_parts$$4$$.length ? new $cljs$core$Keyword$$($JSCompiler_inline_result$$514_parts$$4$$[0], $JSCompiler_inline_result$$514_parts$$4$$[1], $name$$67$$, null) : new $cljs$core$Keyword$$(null, $JSCompiler_inline_result$$514_parts$$4$$[0], $name$$67$$, null)) : null;
};
$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$2$ = function($ns$$5$$, $name$$68$$) {
  return new $cljs$core$Keyword$$($ns$$5$$, $name$$68$$, [$cljs$core$str$$($cljs$core$truth_$$($ns$$5$$) ? [$cljs$core$str$$($ns$$5$$), $cljs$core$str$$("/")].join("") : null), $cljs$core$str$$($name$$68$$)].join(""), null);
};
$cljs$core$keyword$$.$cljs$lang$maxFixedArity$ = 2;
function $cljs$core$LazySeq$$($meta$$12$$, $fn$$6$$, $s$$152$$, $__hash$$4$$) {
  this.meta = $meta$$12$$;
  this.fn = $fn$$6$$;
  this.s = $s$$152$$;
  this.$__hash$ = $__hash$$4$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 32374988;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$LazySeq$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$$20$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$$20$$);
};
function $JSCompiler_StaticMethods_sval$$($JSCompiler_StaticMethods_sval$self$$) {
  null != $JSCompiler_StaticMethods_sval$self$$.fn && ($JSCompiler_StaticMethods_sval$self$$.s = $JSCompiler_StaticMethods_sval$self$$.fn.$cljs$core$IFn$_invoke$arity$0$ ? $JSCompiler_StaticMethods_sval$self$$.fn.$cljs$core$IFn$_invoke$arity$0$() : $JSCompiler_StaticMethods_sval$self$$.fn.call(null), $JSCompiler_StaticMethods_sval$self$$.fn = null);
  return $JSCompiler_StaticMethods_sval$self$$.s;
}
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.meta;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  $cljs$core$_seq$$(this);
  return null == this.s ? null : $cljs$core$next$$(this.s);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4667__auto__$$4_h__4667__auto____$1$$4$$ = this.$__hash$;
  return null != $h__4667__auto__$$4_h__4667__auto____$1$$4$$ ? $h__4667__auto__$$4_h__4667__auto____$1$$4$$ : this.$__hash$ = $h__4667__auto__$$4_h__4667__auto____$1$$4$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$$168$$, $other$$21$$) {
  return $cljs$core$equiv_sequential$$(this, $other$$21$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$with_meta$$($cljs$core$List$EMPTY$$, this.meta);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$$170$$, $f$$495$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$$495$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$$171$$, $f$$496$$, $start$$16$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$$496$$, $start$$16$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  $cljs$core$_seq$$(this);
  return null == this.s ? null : $cljs$core$first$$(this.s);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  $cljs$core$_seq$$(this);
  return null != this.s ? $cljs$core$rest$$(this.s) : $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  $JSCompiler_StaticMethods_sval$$(this);
  if (null == this.s) {
    return null;
  }
  for (var $ls$$ = this.s;;) {
    if ($ls$$ instanceof $cljs$core$LazySeq$$) {
      $ls$$ = $JSCompiler_StaticMethods_sval$$($ls$$);
    } else {
      return this.s = $ls$$, $cljs$core$seq$$(this.s);
    }
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$$175$$, $meta__$1$$3$$) {
  return new $cljs$core$LazySeq$$($meta__$1$$3$$, this.fn, this.s, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$$176$$, $o$$269$$) {
  return $cljs$core$cons$$($o$$269$$, this);
};
$cljs$core$LazySeq$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$ChunkBuffer$$($buf$$, $end$$5$$) {
  this.$buf$ = $buf$$;
  this.end = $end$$5$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 2;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$cljs$core$ChunkBuffer$$.prototype.add = function($o$$270$$) {
  this.$buf$[this.end] = $o$$270$$;
  return this.end += 1;
};
$cljs$core$ChunkBuffer$$.prototype.chunk = function() {
  var $ret$$6$$ = new $cljs$core$ArrayChunk$$(this.$buf$, 0, this.end);
  this.$buf$ = null;
  return $ret$$6$$;
};
$cljs$core$ChunkBuffer$$.prototype.$cljs$core$ICounted$_count$arity$1$ = function() {
  return this.end;
};
function $cljs$core$chunk_buffer$$($capacity$$) {
  return new $cljs$core$ChunkBuffer$$(Array($capacity$$), 0);
}
function $cljs$core$ArrayChunk$$($arr$$70$$, $off$$, $end$$7$$) {
  this.$arr$ = $arr$$70$$;
  this.off = $off$$;
  this.end = $end$$7$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 524306;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$ArrayChunk$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return this.end - this.off;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$2$ = function($coll$$177$$, $i$$425$$) {
  return this.$arr$[this.off + $i$$425$$];
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$3$ = function($coll$$178$$, $i$$426$$, $not_found$$12$$) {
  return 0 <= $i$$426$$ && $i$$426$$ < this.end - this.off ? this.$arr$[this.off + $i$$426$$] : $not_found$$12$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IChunk$_drop_first$arity$1$ = function() {
  if (this.off === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new $cljs$core$ArrayChunk$$(this.$arr$, this.off + 1, this.end);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$$180$$, $f$$497$$) {
  return $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$04$$(this.$arr$, $f$$497$$, this.$arr$[this.off], this.off + 1);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$$181$$, $f$$498$$, $start$$17$$) {
  return $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$04$$(this.$arr$, $f$$498$$, $start$$17$$, this.off);
};
function $cljs$core$ChunkedCons$$($chunk$$1$$, $more$$25$$, $meta$$14$$, $__hash$$6$$) {
  this.chunk = $chunk$$1$$;
  this.$more$ = $more$$25$$;
  this.meta = $meta$$14$$;
  this.$__hash$ = $__hash$$6$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 31850732;
  this.$cljs$lang$protocol_mask$partition1$$ = 1536;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$ChunkedCons$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$$22$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$$22$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.meta;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  if (1 < $cljs$core$_count$$(this.chunk)) {
    return new $cljs$core$ChunkedCons$$($cljs$core$_drop_first$$(this.chunk), this.$more$, this.meta, null);
  }
  var $more__$1$$ = $cljs$core$_seq$$(this.$more$);
  return null == $more__$1$$ ? null : $more__$1$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4667__auto__$$5_h__4667__auto____$1$$5$$ = this.$__hash$;
  return null != $h__4667__auto__$$5_h__4667__auto____$1$$5$$ ? $h__4667__auto__$$5_h__4667__auto____$1$$5$$ : this.$__hash$ = $h__4667__auto__$$5_h__4667__auto____$1$$5$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$$186$$, $other$$23$$) {
  return $cljs$core$equiv_sequential$$(this, $other$$23$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$with_meta$$($cljs$core$List$EMPTY$$, this.meta);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$(this.chunk, 0);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  return 1 < $cljs$core$_count$$(this.chunk) ? new $cljs$core$ChunkedCons$$($cljs$core$_drop_first$$(this.chunk), this.$more$, this.meta, null) : null == this.$more$ ? $cljs$core$List$EMPTY$$ : this.$more$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IChunkedSeq$_chunked_first$arity$1$ = function() {
  return this.chunk;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IChunkedSeq$_chunked_rest$arity$1$ = function() {
  return null == this.$more$ ? $cljs$core$List$EMPTY$$ : this.$more$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$$193$$, $m$$107$$) {
  return new $cljs$core$ChunkedCons$$(this.chunk, this.$more$, $m$$107$$, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($this$$$38$$, $o$$272$$) {
  return $cljs$core$cons$$($o$$272$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IChunkedNext$_chunked_next$arity$1$ = function() {
  return null == this.$more$ ? null : this.$more$;
};
$cljs$core$ChunkedCons$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$chunk_cons$$($chunk$$3$$, $rest$$11$$) {
  return 0 === $cljs$core$_count$$($chunk$$3$$) ? $rest$$11$$ : new $cljs$core$ChunkedCons$$($chunk$$3$$, $rest$$11$$, null, null);
}
function $cljs$core$chunk_append$$($b$$1082$$, $x$$242$$) {
  $b$$1082$$.add($x$$242$$);
}
function $cljs$core$to_array$$($s$$157_s__$1$$1$$) {
  for (var $ary$$ = [];;) {
    if ($cljs$core$seq$$($s$$157_s__$1$$1$$)) {
      $ary$$.push($cljs$core$first$$($s$$157_s__$1$$1$$)), $s$$157_s__$1$$1$$ = $cljs$core$next$$($s$$157_s__$1$$1$$);
    } else {
      return $ary$$;
    }
  }
}
function $cljs$core$bounded_count$$($s$$162$$, $n$$604$$) {
  if ($cljs$core$counted_QMARK_$$($s$$162$$)) {
    return $cljs$core$count$$($s$$162$$);
  }
  for (var $G__19317_s__$1$$6$$ = $s$$162$$, $G__19318_i$$431$$ = $n$$604$$, $G__19319_sum$$ = 0;;) {
    if (0 < $G__19318_i$$431$$ && $cljs$core$seq$$($G__19317_s__$1$$6$$)) {
      $G__19317_s__$1$$6$$ = $cljs$core$next$$($G__19317_s__$1$$6$$), --$G__19318_i$$431$$, $G__19319_sum$$ += 1;
    } else {
      return $G__19319_sum$$;
    }
  }
}
var $cljs$core$spread$$ = function $cljs$core$spread$$($arglist$$) {
  return null == $arglist$$ ? null : null == $cljs$core$next$$($arglist$$) ? $cljs$core$seq$$($cljs$core$first$$($arglist$$)) : $cljs$core$cons$$($cljs$core$first$$($arglist$$), $cljs$core$spread$$($cljs$core$next$$($arglist$$)));
}, $cljs$core$concat$$ = function $cljs$core$concat$$() {
  switch(arguments.length) {
    case 0:
      return $cljs$core$concat$$.$cljs$core$IFn$_invoke$arity$0$();
    case 1:
      return $cljs$core$concat$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$concat$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      return $cljs$core$concat$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], new $cljs$core$IndexedSeq$$(Array.prototype.slice.call(arguments, 2), 0));
  }
};
$cljs$core$concat$$.$cljs$core$IFn$_invoke$arity$0$ = function() {
  return new $cljs$core$LazySeq$$(null, function() {
    return null;
  }, null, null);
};
$cljs$core$concat$$.$cljs$core$IFn$_invoke$arity$1$ = function($x$$243$$) {
  return new $cljs$core$LazySeq$$(null, function() {
    return $x$$243$$;
  }, null, null);
};
$cljs$core$concat$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$$244$$, $y$$120$$) {
  return new $cljs$core$LazySeq$$(null, function() {
    var $s$$163$$ = $cljs$core$seq$$($x$$244$$);
    return $s$$163$$ ? $cljs$core$chunked_seq_QMARK_$$($s$$163$$) ? $cljs$core$chunk_cons$$($cljs$core$_chunked_first$$($s$$163$$), $cljs$core$concat$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$_chunked_rest$$($s$$163$$), $y$$120$$)) : $cljs$core$cons$$($cljs$core$first$$($s$$163$$), $cljs$core$concat$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$rest$$($s$$163$$), $y$$120$$)) : $y$$120$$;
  }, null, null);
};
$cljs$core$concat$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($x$$245$$, $y$$121$$, $zs$$) {
  return function $cljs$core$cat$$($x$$245$$, $y$$121$$) {
    return new $cljs$core$LazySeq$$(null, function() {
      var $zs$$ = $cljs$core$seq$$($x$$245$$);
      return $zs$$ ? $cljs$core$chunked_seq_QMARK_$$($zs$$) ? $cljs$core$chunk_cons$$($cljs$core$_chunked_first$$($zs$$), $cljs$core$cat$$($cljs$core$_chunked_rest$$($zs$$), $y$$121$$)) : $cljs$core$cons$$($cljs$core$first$$($zs$$), $cljs$core$cat$$($cljs$core$rest$$($zs$$), $y$$121$$)) : $cljs$core$truth_$$($y$$121$$) ? $cljs$core$cat$$($cljs$core$first$$($y$$121$$), $cljs$core$next$$($y$$121$$)) : null;
    }, null, null);
  }($cljs$core$concat$$.$cljs$core$IFn$_invoke$arity$2$($x$$245$$, $y$$121$$), $zs$$);
};
$cljs$core$concat$$.$cljs$lang$applyTo$ = function($G__19323_seq19321$$) {
  var $G__19322$$ = $cljs$core$first$$($G__19323_seq19321$$), $seq19321__$1_seq19321__$2$$ = $cljs$core$next$$($G__19323_seq19321$$);
  $G__19323_seq19321$$ = $cljs$core$first$$($seq19321__$1_seq19321__$2$$);
  $seq19321__$1_seq19321__$2$$ = $cljs$core$next$$($seq19321__$1_seq19321__$2$$);
  return $cljs$core$concat$$.$cljs$core$IFn$_invoke$arity$variadic$($G__19322$$, $G__19323_seq19321$$, $seq19321__$1_seq19321__$2$$);
};
$cljs$core$concat$$.$cljs$lang$maxFixedArity$ = 2;
var $cljs$core$conj_BANG_$$ = function $cljs$core$conj_BANG_$$() {
  switch(arguments.length) {
    case 0:
      return $cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$0$();
    case 1:
      return $cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      return $cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], new $cljs$core$IndexedSeq$$(Array.prototype.slice.call(arguments, 2), 0));
  }
};
$cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$0$ = function() {
  return $cljs$core$_as_transient$$($cljs$core$PersistentVector$EMPTY$$);
};
$cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ = function($coll$$197$$) {
  return $coll$$197$$;
};
$cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$2$ = function($tcoll$$8$$, $val$$41$$) {
  return $cljs$core$_conj_BANG_$$($tcoll$$8$$, $val$$41$$);
};
$cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($G__19347_ntcoll_tcoll$$9$$, $G__19348_val$$42$$, $G__19349_vals$$) {
  for (;;) {
    if ($G__19347_ntcoll_tcoll$$9$$ = $cljs$core$_conj_BANG_$$($G__19347_ntcoll_tcoll$$9$$, $G__19348_val$$42$$), $cljs$core$truth_$$($G__19349_vals$$)) {
      $G__19348_val$$42$$ = $cljs$core$first$$($G__19349_vals$$), $G__19349_vals$$ = $cljs$core$next$$($G__19349_vals$$);
    } else {
      return $G__19347_ntcoll_tcoll$$9$$;
    }
  }
};
$cljs$core$conj_BANG_$$.$cljs$lang$applyTo$ = function($G__19343_seq19341$$) {
  var $G__19342$$ = $cljs$core$first$$($G__19343_seq19341$$), $seq19341__$1_seq19341__$2$$ = $cljs$core$next$$($G__19343_seq19341$$);
  $G__19343_seq19341$$ = $cljs$core$first$$($seq19341__$1_seq19341__$2$$);
  $seq19341__$1_seq19341__$2$$ = $cljs$core$next$$($seq19341__$1_seq19341__$2$$);
  return $cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$variadic$($G__19342$$, $G__19343_seq19341$$, $seq19341__$1_seq19341__$2$$);
};
$cljs$core$conj_BANG_$$.$cljs$lang$maxFixedArity$ = 2;
function $cljs$core$apply_to$$($f$$499$$, $argc$$, $a5180_args$$12$$) {
  var $args__$1_b5181$$ = $cljs$core$seq$$($a5180_args$$12$$);
  if (0 === $argc$$) {
    return $f$$499$$.$cljs$core$IFn$_invoke$arity$0$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$0$() : $f$$499$$.call(null);
  }
  $a5180_args$$12$$ = $cljs$core$_first$$($args__$1_b5181$$);
  var $args__$2_c5182$$ = $cljs$core$_rest$$($args__$1_b5181$$);
  if (1 === $argc$$) {
    return $f$$499$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$1$($a5180_args$$12$$) : $f$$499$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$1$($a5180_args$$12$$) : $f$$499$$.call(null, $a5180_args$$12$$);
  }
  var $args__$1_b5181$$ = $cljs$core$_first$$($args__$2_c5182$$), $args__$3_d5183$$ = $cljs$core$_rest$$($args__$2_c5182$$);
  if (2 === $argc$$) {
    return $f$$499$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$2$($a5180_args$$12$$, $args__$1_b5181$$) : $f$$499$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$2$($a5180_args$$12$$, $args__$1_b5181$$) : $f$$499$$.call(null, $a5180_args$$12$$, $args__$1_b5181$$);
  }
  var $args__$2_c5182$$ = $cljs$core$_first$$($args__$3_d5183$$), $args__$4_e5184$$ = $cljs$core$_rest$$($args__$3_d5183$$);
  if (3 === $argc$$) {
    return $f$$499$$.$cljs$core$IFn$_invoke$arity$3$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$3$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$) : $f$$499$$.$cljs$core$IFn$_invoke$arity$3$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$3$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$) : $f$$499$$.call(null, $a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$);
  }
  var $args__$3_d5183$$ = $cljs$core$_first$$($args__$4_e5184$$), $args__$5_f5185$$ = $cljs$core$_rest$$($args__$4_e5184$$);
  if (4 === $argc$$) {
    return $f$$499$$.$cljs$core$IFn$_invoke$arity$4$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$4$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$) : $f$$499$$.$cljs$core$IFn$_invoke$arity$4$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$4$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$) : $f$$499$$.call(null, $a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$);
  }
  var $args__$4_e5184$$ = $cljs$core$_first$$($args__$5_f5185$$), $args__$6_g5186$$ = $cljs$core$_rest$$($args__$5_f5185$$);
  if (5 === $argc$$) {
    return $f$$499$$.$cljs$core$IFn$_invoke$arity$5$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$5$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$) : $f$$499$$.$cljs$core$IFn$_invoke$arity$5$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$5$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$) : $f$$499$$.call(null, $a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$);
  }
  var $args__$5_f5185$$ = $cljs$core$_first$$($args__$6_g5186$$), $args__$7_h5187$$ = $cljs$core$_rest$$($args__$6_g5186$$);
  if (6 === $argc$$) {
    return $f$$499$$.$cljs$core$IFn$_invoke$arity$6$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$6$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$) : $f$$499$$.$cljs$core$IFn$_invoke$arity$6$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$6$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$) : $f$$499$$.call(null, $a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, 
    $args__$4_e5184$$, $args__$5_f5185$$);
  }
  var $args__$6_g5186$$ = $cljs$core$_first$$($args__$7_h5187$$), $args__$8_i5188$$ = $cljs$core$_rest$$($args__$7_h5187$$);
  if (7 === $argc$$) {
    return $f$$499$$.$cljs$core$IFn$_invoke$arity$7$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$7$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$) : $f$$499$$.$cljs$core$IFn$_invoke$arity$7$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$7$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$) : $f$$499$$.call(null, $a5180_args$$12$$, $args__$1_b5181$$, 
    $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$);
  }
  var $args__$7_h5187$$ = $cljs$core$_first$$($args__$8_i5188$$), $args__$9_j5189$$ = $cljs$core$_rest$$($args__$8_i5188$$);
  if (8 === $argc$$) {
    return $f$$499$$.$cljs$core$IFn$_invoke$arity$8$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$8$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$) : $f$$499$$.$cljs$core$IFn$_invoke$arity$8$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$8$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$) : $f$$499$$.call(null, 
    $a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$);
  }
  var $args__$8_i5188$$ = $cljs$core$_first$$($args__$9_j5189$$), $args__$10_k5190$$ = $cljs$core$_rest$$($args__$9_j5189$$);
  if (9 === $argc$$) {
    return $f$$499$$.$cljs$core$IFn$_invoke$arity$9$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$9$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$) : $f$$499$$.$cljs$core$IFn$_invoke$arity$9$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$9$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, 
    $args__$8_i5188$$) : $f$$499$$.call(null, $a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$);
  }
  var $args__$9_j5189$$ = $cljs$core$_first$$($args__$10_k5190$$), $args__$11_l5191$$ = $cljs$core$_rest$$($args__$10_k5190$$);
  if (10 === $argc$$) {
    return $f$$499$$.$cljs$core$IFn$_invoke$arity$10$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$10$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$) : $f$$499$$.$cljs$core$IFn$_invoke$arity$10$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$10$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, 
    $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$) : $f$$499$$.call(null, $a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$);
  }
  var $args__$10_k5190$$ = $cljs$core$_first$$($args__$11_l5191$$), $args__$12_m5192$$ = $cljs$core$_rest$$($args__$11_l5191$$);
  if (11 === $argc$$) {
    return $f$$499$$.$cljs$core$IFn$_invoke$arity$11$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$11$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$) : $f$$499$$.$cljs$core$IFn$_invoke$arity$11$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$11$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, 
    $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$) : $f$$499$$.call(null, $a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$);
  }
  var $args__$11_l5191$$ = $cljs$core$_first$$($args__$12_m5192$$), $args__$13_n5193$$ = $cljs$core$_rest$$($args__$12_m5192$$);
  if (12 === $argc$$) {
    return $f$$499$$.$cljs$core$IFn$_invoke$arity$12$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$12$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$) : $f$$499$$.$cljs$core$IFn$_invoke$arity$12$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$12$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, 
    $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$) : $f$$499$$.call(null, $a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$);
  }
  var $args__$12_m5192$$ = $cljs$core$_first$$($args__$13_n5193$$), $args__$14_o5194$$ = $cljs$core$_rest$$($args__$13_n5193$$);
  if (13 === $argc$$) {
    return $f$$499$$.$cljs$core$IFn$_invoke$arity$13$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$13$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$, $args__$12_m5192$$) : $f$$499$$.$cljs$core$IFn$_invoke$arity$13$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$13$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, 
    $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$, $args__$12_m5192$$) : $f$$499$$.call(null, $a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$, $args__$12_m5192$$);
  }
  var $args__$13_n5193$$ = $cljs$core$_first$$($args__$14_o5194$$), $args__$15_p5195$$ = $cljs$core$_rest$$($args__$14_o5194$$);
  if (14 === $argc$$) {
    return $f$$499$$.$cljs$core$IFn$_invoke$arity$14$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$14$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$, $args__$12_m5192$$, $args__$13_n5193$$) : $f$$499$$.$cljs$core$IFn$_invoke$arity$14$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$14$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, 
    $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$, $args__$12_m5192$$, $args__$13_n5193$$) : $f$$499$$.call(null, $a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$, $args__$12_m5192$$, $args__$13_n5193$$)
    ;
  }
  var $args__$14_o5194$$ = $cljs$core$_first$$($args__$15_p5195$$), $args__$16_q5196$$ = $cljs$core$_rest$$($args__$15_p5195$$);
  if (15 === $argc$$) {
    return $f$$499$$.$cljs$core$IFn$_invoke$arity$15$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$15$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$, $args__$12_m5192$$, $args__$13_n5193$$, $args__$14_o5194$$) : $f$$499$$.$cljs$core$IFn$_invoke$arity$15$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$15$($a5180_args$$12$$, $args__$1_b5181$$, 
    $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$, $args__$12_m5192$$, $args__$13_n5193$$, $args__$14_o5194$$) : $f$$499$$.call(null, $a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$, 
    $args__$12_m5192$$, $args__$13_n5193$$, $args__$14_o5194$$);
  }
  var $args__$15_p5195$$ = $cljs$core$_first$$($args__$16_q5196$$), $args__$17_r5197$$ = $cljs$core$_rest$$($args__$16_q5196$$);
  if (16 === $argc$$) {
    return $f$$499$$.$cljs$core$IFn$_invoke$arity$16$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$16$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$, $args__$12_m5192$$, $args__$13_n5193$$, $args__$14_o5194$$, $args__$15_p5195$$) : $f$$499$$.$cljs$core$IFn$_invoke$arity$16$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$16$($a5180_args$$12$$, 
    $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$, $args__$12_m5192$$, $args__$13_n5193$$, $args__$14_o5194$$, $args__$15_p5195$$) : $f$$499$$.call(null, $a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, 
    $args__$10_k5190$$, $args__$11_l5191$$, $args__$12_m5192$$, $args__$13_n5193$$, $args__$14_o5194$$, $args__$15_p5195$$);
  }
  var $args__$16_q5196$$ = $cljs$core$_first$$($args__$17_r5197$$), $args__$18_s5198$$ = $cljs$core$_rest$$($args__$17_r5197$$);
  if (17 === $argc$$) {
    return $f$$499$$.$cljs$core$IFn$_invoke$arity$17$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$17$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$, $args__$12_m5192$$, $args__$13_n5193$$, $args__$14_o5194$$, $args__$15_p5195$$, $args__$16_q5196$$) : $f$$499$$.$cljs$core$IFn$_invoke$arity$17$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$17$($a5180_args$$12$$, 
    $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$, $args__$12_m5192$$, $args__$13_n5193$$, $args__$14_o5194$$, $args__$15_p5195$$, $args__$16_q5196$$) : $f$$499$$.call(null, $a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, 
    $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$, $args__$12_m5192$$, $args__$13_n5193$$, $args__$14_o5194$$, $args__$15_p5195$$, $args__$16_q5196$$);
  }
  var $args__$17_r5197$$ = $cljs$core$_first$$($args__$18_s5198$$), $args__$19_args__$20$$ = $cljs$core$_rest$$($args__$18_s5198$$);
  if (18 === $argc$$) {
    return $f$$499$$.$cljs$core$IFn$_invoke$arity$18$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$18$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$, $args__$12_m5192$$, $args__$13_n5193$$, $args__$14_o5194$$, $args__$15_p5195$$, $args__$16_q5196$$, $args__$17_r5197$$) : $f$$499$$.$cljs$core$IFn$_invoke$arity$18$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$18$($a5180_args$$12$$, 
    $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$, $args__$12_m5192$$, $args__$13_n5193$$, $args__$14_o5194$$, $args__$15_p5195$$, $args__$16_q5196$$, $args__$17_r5197$$) : $f$$499$$.call(null, $a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, 
    $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$, $args__$12_m5192$$, $args__$13_n5193$$, $args__$14_o5194$$, $args__$15_p5195$$, $args__$16_q5196$$, $args__$17_r5197$$);
  }
  $args__$18_s5198$$ = $cljs$core$_first$$($args__$19_args__$20$$);
  $args__$19_args__$20$$ = $cljs$core$_rest$$($args__$19_args__$20$$);
  if (19 === $argc$$) {
    return $f$$499$$.$cljs$core$IFn$_invoke$arity$19$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$19$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$, $args__$12_m5192$$, $args__$13_n5193$$, $args__$14_o5194$$, $args__$15_p5195$$, $args__$16_q5196$$, $args__$17_r5197$$, $args__$18_s5198$$) : $f$$499$$.$cljs$core$IFn$_invoke$arity$19$ ? 
    $f$$499$$.$cljs$core$IFn$_invoke$arity$19$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$, $args__$12_m5192$$, $args__$13_n5193$$, $args__$14_o5194$$, $args__$15_p5195$$, $args__$16_q5196$$, $args__$17_r5197$$, $args__$18_s5198$$) : $f$$499$$.call(null, $a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, 
    $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$, $args__$12_m5192$$, $args__$13_n5193$$, $args__$14_o5194$$, $args__$15_p5195$$, $args__$16_q5196$$, $args__$17_r5197$$, $args__$18_s5198$$);
  }
  var $t5199$$ = $cljs$core$_first$$($args__$19_args__$20$$);
  $cljs$core$_rest$$($args__$19_args__$20$$);
  if (20 === $argc$$) {
    return $f$$499$$.$cljs$core$IFn$_invoke$arity$20$ ? $f$$499$$.$cljs$core$IFn$_invoke$arity$20$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$, $args__$12_m5192$$, $args__$13_n5193$$, $args__$14_o5194$$, $args__$15_p5195$$, $args__$16_q5196$$, $args__$17_r5197$$, $args__$18_s5198$$, $t5199$$) : $f$$499$$.$cljs$core$IFn$_invoke$arity$20$ ? 
    $f$$499$$.$cljs$core$IFn$_invoke$arity$20$($a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$, $args__$12_m5192$$, $args__$13_n5193$$, $args__$14_o5194$$, $args__$15_p5195$$, $args__$16_q5196$$, $args__$17_r5197$$, $args__$18_s5198$$, $t5199$$) : $f$$499$$.call(null, $a5180_args$$12$$, $args__$1_b5181$$, $args__$2_c5182$$, 
    $args__$3_d5183$$, $args__$4_e5184$$, $args__$5_f5185$$, $args__$6_g5186$$, $args__$7_h5187$$, $args__$8_i5188$$, $args__$9_j5189$$, $args__$10_k5190$$, $args__$11_l5191$$, $args__$12_m5192$$, $args__$13_n5193$$, $args__$14_o5194$$, $args__$15_p5195$$, $args__$16_q5196$$, $args__$17_r5197$$, $args__$18_s5198$$, $t5199$$);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function $cljs$core$apply$$() {
  switch(arguments.length) {
    case 2:
      return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$03$$(arguments[0], arguments[1], arguments[2]);
    case 4:
      var $JSCompiler_inline_result$$16_f$$inline_167$$;
      $JSCompiler_inline_result$$16_f$$inline_167$$ = arguments[0];
      var $arglist$$inline_171$$ = $cljs$core$cons$$(arguments[1], $cljs$core$cons$$(arguments[2], arguments[3])), $fixed_arity$$inline_172$$ = $JSCompiler_inline_result$$16_f$$inline_167$$.$cljs$lang$maxFixedArity$;
      if ($JSCompiler_inline_result$$16_f$$inline_167$$.$cljs$lang$applyTo$) {
        var $bc$$inline_173$$ = $cljs$core$bounded_count$$($arglist$$inline_171$$, $fixed_arity$$inline_172$$ + 1);
        $JSCompiler_inline_result$$16_f$$inline_167$$ = $bc$$inline_173$$ <= $fixed_arity$$inline_172$$ ? $cljs$core$apply_to$$($JSCompiler_inline_result$$16_f$$inline_167$$, $bc$$inline_173$$, $arglist$$inline_171$$) : $JSCompiler_inline_result$$16_f$$inline_167$$.$cljs$lang$applyTo$($arglist$$inline_171$$);
      } else {
        $JSCompiler_inline_result$$16_f$$inline_167$$ = $JSCompiler_inline_result$$16_f$$inline_167$$.apply($JSCompiler_inline_result$$16_f$$inline_167$$, $cljs$core$to_array$$($arglist$$inline_171$$));
      }
      return $JSCompiler_inline_result$$16_f$$inline_167$$;
    case 5:
      return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$05$$(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$0variadic$$(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new $cljs$core$IndexedSeq$$(Array.prototype.slice.call(arguments, 5), 0));
  }
}
function $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($f$$500$$, $args$$13$$) {
  var $fixed_arity$$ = $f$$500$$.$cljs$lang$maxFixedArity$;
  if ($f$$500$$.$cljs$lang$applyTo$) {
    var $bc$$ = $cljs$core$bounded_count$$($args$$13$$, $fixed_arity$$ + 1);
    return $bc$$ <= $fixed_arity$$ ? $cljs$core$apply_to$$($f$$500$$, $bc$$, $args$$13$$) : $f$$500$$.$cljs$lang$applyTo$($args$$13$$);
  }
  return $f$$500$$.apply($f$$500$$, $cljs$core$to_array$$($args$$13$$));
}
function $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$03$$($f$$501$$, $arglist$$1_x$$246$$, $args$$14_fixed_arity$$1$$) {
  $arglist$$1_x$$246$$ = $cljs$core$cons$$($arglist$$1_x$$246$$, $args$$14_fixed_arity$$1$$);
  $args$$14_fixed_arity$$1$$ = $f$$501$$.$cljs$lang$maxFixedArity$;
  if ($f$$501$$.$cljs$lang$applyTo$) {
    var $bc$$1$$ = $cljs$core$bounded_count$$($arglist$$1_x$$246$$, $args$$14_fixed_arity$$1$$ + 1);
    return $bc$$1$$ <= $args$$14_fixed_arity$$1$$ ? $cljs$core$apply_to$$($f$$501$$, $bc$$1$$, $arglist$$1_x$$246$$) : $f$$501$$.$cljs$lang$applyTo$($arglist$$1_x$$246$$);
  }
  return $f$$501$$.apply($f$$501$$, $cljs$core$to_array$$($arglist$$1_x$$246$$));
}
function $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$05$$($f$$503$$, $arglist$$3_x$$248$$, $fixed_arity$$3_y$$123$$, $bc$$3_z$$20$$, $args$$16$$) {
  $arglist$$3_x$$248$$ = $cljs$core$cons$$($arglist$$3_x$$248$$, $cljs$core$cons$$($fixed_arity$$3_y$$123$$, $cljs$core$cons$$($bc$$3_z$$20$$, $args$$16$$)));
  $fixed_arity$$3_y$$123$$ = $f$$503$$.$cljs$lang$maxFixedArity$;
  return $f$$503$$.$cljs$lang$applyTo$ ? ($bc$$3_z$$20$$ = $cljs$core$bounded_count$$($arglist$$3_x$$248$$, $fixed_arity$$3_y$$123$$ + 1), $bc$$3_z$$20$$ <= $fixed_arity$$3_y$$123$$ ? $cljs$core$apply_to$$($f$$503$$, $bc$$3_z$$20$$, $arglist$$3_x$$248$$) : $f$$503$$.$cljs$lang$applyTo$($arglist$$3_x$$248$$)) : $f$$503$$.apply($f$$503$$, $cljs$core$to_array$$($arglist$$3_x$$248$$));
}
function $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($f$$504$$, $a$$1525_arglist$$4$$, $b$$1087_fixed_arity$$4$$, $bc$$4_c$$871$$, $d$$622$$, $args$$17$$) {
  $a$$1525_arglist$$4$$ = $cljs$core$cons$$($a$$1525_arglist$$4$$, $cljs$core$cons$$($b$$1087_fixed_arity$$4$$, $cljs$core$cons$$($bc$$4_c$$871$$, $cljs$core$cons$$($d$$622$$, $cljs$core$spread$$($args$$17$$)))));
  $b$$1087_fixed_arity$$4$$ = $f$$504$$.$cljs$lang$maxFixedArity$;
  return $f$$504$$.$cljs$lang$applyTo$ ? ($bc$$4_c$$871$$ = $cljs$core$bounded_count$$($a$$1525_arglist$$4$$, $b$$1087_fixed_arity$$4$$ + 1), $bc$$4_c$$871$$ <= $b$$1087_fixed_arity$$4$$ ? $cljs$core$apply_to$$($f$$504$$, $bc$$4_c$$871$$, $a$$1525_arglist$$4$$) : $f$$504$$.$cljs$lang$applyTo$($a$$1525_arglist$$4$$)) : $f$$504$$.apply($f$$504$$, $cljs$core$to_array$$($a$$1525_arglist$$4$$));
}
function $cljs$core$every_QMARK_$$($pred$$, $coll$$205$$) {
  for (;;) {
    if (null == $cljs$core$seq$$($coll$$205$$)) {
      return !0;
    }
    var $G__19891$$inline_175_G__19892_JSCompiler_inline_result$$17$$;
    $G__19891$$inline_175_G__19892_JSCompiler_inline_result$$17$$ = $cljs$core$first$$($coll$$205$$);
    $G__19891$$inline_175_G__19892_JSCompiler_inline_result$$17$$ = $pred$$.$cljs$core$IFn$_invoke$arity$1$ ? $pred$$.$cljs$core$IFn$_invoke$arity$1$($G__19891$$inline_175_G__19892_JSCompiler_inline_result$$17$$) : $pred$$.call(null, $G__19891$$inline_175_G__19892_JSCompiler_inline_result$$17$$);
    if ($cljs$core$truth_$$($G__19891$$inline_175_G__19892_JSCompiler_inline_result$$17$$)) {
      $G__19891$$inline_175_G__19892_JSCompiler_inline_result$$17$$ = $pred$$;
      var $G__19893$$ = $cljs$core$next$$($coll$$205$$);
      $pred$$ = $G__19891$$inline_175_G__19892_JSCompiler_inline_result$$17$$;
      $coll$$205$$ = $G__19893$$;
    } else {
      return !1;
    }
  }
}
function $cljs$core$some$$($G__19899_coll$$207$$) {
  for (var $G__19898_pred$$2$$ = $cljs$core$identity$$;;) {
    if ($cljs$core$seq$$($G__19899_coll$$207$$)) {
      var $G__19897$$inline_177_or__4251__auto__$$91$$;
      $G__19897$$inline_177_or__4251__auto__$$91$$ = $cljs$core$first$$($G__19899_coll$$207$$);
      $G__19897$$inline_177_or__4251__auto__$$91$$ = $G__19898_pred$$2$$.$cljs$core$IFn$_invoke$arity$1$ ? $G__19898_pred$$2$$.$cljs$core$IFn$_invoke$arity$1$($G__19897$$inline_177_or__4251__auto__$$91$$) : $G__19898_pred$$2$$.call(null, $G__19897$$inline_177_or__4251__auto__$$91$$);
      if ($cljs$core$truth_$$($G__19897$$inline_177_or__4251__auto__$$91$$)) {
        return $G__19897$$inline_177_or__4251__auto__$$91$$;
      }
      $G__19899_coll$$207$$ = $cljs$core$next$$($G__19899_coll$$207$$);
    } else {
      return null;
    }
  }
}
function $cljs$core$constantly$$() {
  return function() {
    function $G__19912$$($G__19912$$) {
      if (0 < arguments.length) {
        for (var $G__19913__i$$ = 0, $G__19913__a$$ = Array(arguments.length - 0);$G__19913__i$$ < $G__19913__a$$.length;) {
          $G__19913__a$$[$G__19913__i$$] = arguments[$G__19913__i$$ + 0], ++$G__19913__i$$;
        }
      }
      return !1;
    }
    $G__19912$$.$cljs$lang$maxFixedArity$ = 0;
    $G__19912$$.$cljs$lang$applyTo$ = function($G__19912$$) {
      $cljs$core$seq$$($G__19912$$);
      return !1;
    };
    $G__19912$$.$cljs$core$IFn$_invoke$arity$variadic$ = function() {
      return !1;
    };
    return $G__19912$$;
  }();
}
var $cljs$core$partial$$ = function $cljs$core$partial$$() {
  switch(arguments.length) {
    case 1:
      return $cljs$core$partial$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$partial$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$partial$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    case 4:
      return $cljs$core$partial$$.$cljs$core$IFn$_invoke$arity$4$(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return $cljs$core$partial$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], arguments[2], arguments[3], new $cljs$core$IndexedSeq$$(Array.prototype.slice.call(arguments, 4), 0));
  }
};
$cljs$core$partial$$.$cljs$core$IFn$_invoke$arity$1$ = function($f$$515$$) {
  return $f$$515$$;
};
$cljs$core$partial$$.$cljs$core$IFn$_invoke$arity$2$ = function($f$$516$$, $arg1$$1$$) {
  return function() {
    function $G__20016__3$$($G__20016__3$$, $G__20016__2$$, $G__20016__1$$) {
      return $f$$516$$.$cljs$core$IFn$_invoke$arity$4$ ? $f$$516$$.$cljs$core$IFn$_invoke$arity$4$($arg1$$1$$, $G__20016__3$$, $G__20016__2$$, $G__20016__1$$) : $f$$516$$.call(null, $arg1$$1$$, $G__20016__3$$, $G__20016__2$$, $G__20016__1$$);
    }
    function $G__20016__2$$($G__20016__3$$, $G__20016__2$$) {
      return $f$$516$$.$cljs$core$IFn$_invoke$arity$3$ ? $f$$516$$.$cljs$core$IFn$_invoke$arity$3$($arg1$$1$$, $G__20016__3$$, $G__20016__2$$) : $f$$516$$.call(null, $arg1$$1$$, $G__20016__3$$, $G__20016__2$$);
    }
    function $G__20016__1$$($G__20016__3$$) {
      return $f$$516$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$$516$$.$cljs$core$IFn$_invoke$arity$2$($arg1$$1$$, $G__20016__3$$) : $f$$516$$.call(null, $arg1$$1$$, $G__20016__3$$);
    }
    function $G__20016__0$$() {
      return $f$$516$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$$516$$.$cljs$core$IFn$_invoke$arity$1$($arg1$$1$$) : $f$$516$$.call(null, $arg1$$1$$);
    }
    var $G__20016$$ = null, $G__20016__4$$ = function() {
      function $G__20016__3$$($f$$516$$, $arg1$$1$$, $G__20016__1$$, $G__20016__0$$) {
        var $G__20016$$ = null;
        if (3 < arguments.length) {
          for (var $G__20016$$ = 0, $G__20016__4$$ = Array(arguments.length - 3);$G__20016$$ < $G__20016__4$$.length;) {
            $G__20016__4$$[$G__20016$$] = arguments[$G__20016$$ + 3], ++$G__20016$$;
          }
          $G__20016$$ = new $cljs$core$IndexedSeq$$($G__20016__4$$, 0);
        }
        return $G__20016__2$$.call(this, $f$$516$$, $arg1$$1$$, $G__20016__1$$, $G__20016$$);
      }
      function $G__20016__2$$($G__20016__3$$, $G__20016__1$$, $G__20016__0$$, $G__20016$$) {
        return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($f$$516$$, $arg1$$1$$, $G__20016__3$$, $G__20016__1$$, $G__20016__0$$, $cljs$core$array_seq$$([$G__20016$$], 0));
      }
      $G__20016__3$$.$cljs$lang$maxFixedArity$ = 3;
      $G__20016__3$$.$cljs$lang$applyTo$ = function($f$$516$$) {
        var $arg1$$1$$ = $cljs$core$first$$($f$$516$$);
        $f$$516$$ = $cljs$core$next$$($f$$516$$);
        var $G__20016__3$$ = $cljs$core$first$$($f$$516$$);
        $f$$516$$ = $cljs$core$next$$($f$$516$$);
        var $G__20016__1$$ = $cljs$core$first$$($f$$516$$);
        $f$$516$$ = $cljs$core$rest$$($f$$516$$);
        return $G__20016__2$$($arg1$$1$$, $G__20016__3$$, $G__20016__1$$, $f$$516$$);
      };
      $G__20016__3$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__20016__2$$;
      return $G__20016__3$$;
    }(), $G__20016$$ = function($f$$516$$, $arg1$$1$$, $G__20016$$, $var_args$$70$$) {
      switch(arguments.length) {
        case 0:
          return $G__20016__0$$.call(this);
        case 1:
          return $G__20016__1$$.call(this, $f$$516$$);
        case 2:
          return $G__20016__2$$.call(this, $f$$516$$, $arg1$$1$$);
        case 3:
          return $G__20016__3$$.call(this, $f$$516$$, $arg1$$1$$, $G__20016$$);
        default:
          var $G__20020_G__20021__i$$ = null;
          if (3 < arguments.length) {
            for (var $G__20020_G__20021__i$$ = 0, $G__20021__a$$ = Array(arguments.length - 3);$G__20020_G__20021__i$$ < $G__20021__a$$.length;) {
              $G__20021__a$$[$G__20020_G__20021__i$$] = arguments[$G__20020_G__20021__i$$ + 3], ++$G__20020_G__20021__i$$;
            }
            $G__20020_G__20021__i$$ = new $cljs$core$IndexedSeq$$($G__20021__a$$, 0);
          }
          return $G__20016__4$$.$cljs$core$IFn$_invoke$arity$variadic$($f$$516$$, $arg1$$1$$, $G__20016$$, $G__20020_G__20021__i$$);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    $G__20016$$.$cljs$lang$maxFixedArity$ = 3;
    $G__20016$$.$cljs$lang$applyTo$ = $G__20016__4$$.$cljs$lang$applyTo$;
    $G__20016$$.$cljs$core$IFn$_invoke$arity$0$ = $G__20016__0$$;
    $G__20016$$.$cljs$core$IFn$_invoke$arity$1$ = $G__20016__1$$;
    $G__20016$$.$cljs$core$IFn$_invoke$arity$2$ = $G__20016__2$$;
    $G__20016$$.$cljs$core$IFn$_invoke$arity$3$ = $G__20016__3$$;
    $G__20016$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__20016__4$$.$cljs$core$IFn$_invoke$arity$variadic$;
    return $G__20016$$;
  }();
};
$cljs$core$partial$$.$cljs$core$IFn$_invoke$arity$3$ = function($f$$517$$, $arg1$$2$$, $arg2$$1$$) {
  return function() {
    function $G__20022__3$$($G__20022__3$$, $G__20022__2$$, $G__20022__1$$) {
      return $f$$517$$.$cljs$core$IFn$_invoke$arity$5$ ? $f$$517$$.$cljs$core$IFn$_invoke$arity$5$($arg1$$2$$, $arg2$$1$$, $G__20022__3$$, $G__20022__2$$, $G__20022__1$$) : $f$$517$$.call(null, $arg1$$2$$, $arg2$$1$$, $G__20022__3$$, $G__20022__2$$, $G__20022__1$$);
    }
    function $G__20022__2$$($G__20022__3$$, $G__20022__2$$) {
      return $f$$517$$.$cljs$core$IFn$_invoke$arity$4$ ? $f$$517$$.$cljs$core$IFn$_invoke$arity$4$($arg1$$2$$, $arg2$$1$$, $G__20022__3$$, $G__20022__2$$) : $f$$517$$.call(null, $arg1$$2$$, $arg2$$1$$, $G__20022__3$$, $G__20022__2$$);
    }
    function $G__20022__1$$($G__20022__3$$) {
      return $f$$517$$.$cljs$core$IFn$_invoke$arity$3$ ? $f$$517$$.$cljs$core$IFn$_invoke$arity$3$($arg1$$2$$, $arg2$$1$$, $G__20022__3$$) : $f$$517$$.call(null, $arg1$$2$$, $arg2$$1$$, $G__20022__3$$);
    }
    function $G__20022__0$$() {
      return $f$$517$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$$517$$.$cljs$core$IFn$_invoke$arity$2$($arg1$$2$$, $arg2$$1$$) : $f$$517$$.call(null, $arg1$$2$$, $arg2$$1$$);
    }
    var $G__20022$$ = null, $G__20022__4$$ = function() {
      function $G__20022__3$$($f$$517$$, $arg1$$2$$, $arg2$$1$$, $G__20022__1$$) {
        var $G__20022__0$$ = null;
        if (3 < arguments.length) {
          for (var $G__20022__0$$ = 0, $G__20022$$ = Array(arguments.length - 3);$G__20022__0$$ < $G__20022$$.length;) {
            $G__20022$$[$G__20022__0$$] = arguments[$G__20022__0$$ + 3], ++$G__20022__0$$;
          }
          $G__20022__0$$ = new $cljs$core$IndexedSeq$$($G__20022$$, 0);
        }
        return $G__20022__2$$.call(this, $f$$517$$, $arg1$$2$$, $arg2$$1$$, $G__20022__0$$);
      }
      function $G__20022__2$$($G__20022__3$$, $G__20022__1$$, $G__20022__0$$, $G__20022$$) {
        return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($f$$517$$, $arg1$$2$$, $arg2$$1$$, $G__20022__3$$, $G__20022__1$$, $cljs$core$array_seq$$([$G__20022__0$$, $G__20022$$], 0));
      }
      $G__20022__3$$.$cljs$lang$maxFixedArity$ = 3;
      $G__20022__3$$.$cljs$lang$applyTo$ = function($f$$517$$) {
        var $arg1$$2$$ = $cljs$core$first$$($f$$517$$);
        $f$$517$$ = $cljs$core$next$$($f$$517$$);
        var $arg2$$1$$ = $cljs$core$first$$($f$$517$$);
        $f$$517$$ = $cljs$core$next$$($f$$517$$);
        var $G__20022__3$$ = $cljs$core$first$$($f$$517$$);
        $f$$517$$ = $cljs$core$rest$$($f$$517$$);
        return $G__20022__2$$($arg1$$2$$, $arg2$$1$$, $G__20022__3$$, $f$$517$$);
      };
      $G__20022__3$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__20022__2$$;
      return $G__20022__3$$;
    }(), $G__20022$$ = function($f$$517$$, $arg1$$2$$, $arg2$$1$$, $G__20022$$) {
      switch(arguments.length) {
        case 0:
          return $G__20022__0$$.call(this);
        case 1:
          return $G__20022__1$$.call(this, $f$$517$$);
        case 2:
          return $G__20022__2$$.call(this, $f$$517$$, $arg1$$2$$);
        case 3:
          return $G__20022__3$$.call(this, $f$$517$$, $arg1$$2$$, $arg2$$1$$);
        default:
          var $G__20026_G__20027__i$$ = null;
          if (3 < arguments.length) {
            for (var $G__20026_G__20027__i$$ = 0, $G__20027__a$$ = Array(arguments.length - 3);$G__20026_G__20027__i$$ < $G__20027__a$$.length;) {
              $G__20027__a$$[$G__20026_G__20027__i$$] = arguments[$G__20026_G__20027__i$$ + 3], ++$G__20026_G__20027__i$$;
            }
            $G__20026_G__20027__i$$ = new $cljs$core$IndexedSeq$$($G__20027__a$$, 0);
          }
          return $G__20022__4$$.$cljs$core$IFn$_invoke$arity$variadic$($f$$517$$, $arg1$$2$$, $arg2$$1$$, $G__20026_G__20027__i$$);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    $G__20022$$.$cljs$lang$maxFixedArity$ = 3;
    $G__20022$$.$cljs$lang$applyTo$ = $G__20022__4$$.$cljs$lang$applyTo$;
    $G__20022$$.$cljs$core$IFn$_invoke$arity$0$ = $G__20022__0$$;
    $G__20022$$.$cljs$core$IFn$_invoke$arity$1$ = $G__20022__1$$;
    $G__20022$$.$cljs$core$IFn$_invoke$arity$2$ = $G__20022__2$$;
    $G__20022$$.$cljs$core$IFn$_invoke$arity$3$ = $G__20022__3$$;
    $G__20022$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__20022__4$$.$cljs$core$IFn$_invoke$arity$variadic$;
    return $G__20022$$;
  }();
};
$cljs$core$partial$$.$cljs$core$IFn$_invoke$arity$4$ = function($f$$518$$, $arg1$$3$$, $arg2$$2$$, $arg3$$) {
  return function() {
    function $G__20028__3$$($G__20028__3$$, $G__20028__2$$, $G__20028__1$$) {
      return $f$$518$$.$cljs$core$IFn$_invoke$arity$6$ ? $f$$518$$.$cljs$core$IFn$_invoke$arity$6$($arg1$$3$$, $arg2$$2$$, $arg3$$, $G__20028__3$$, $G__20028__2$$, $G__20028__1$$) : $f$$518$$.call(null, $arg1$$3$$, $arg2$$2$$, $arg3$$, $G__20028__3$$, $G__20028__2$$, $G__20028__1$$);
    }
    function $G__20028__2$$($G__20028__3$$, $G__20028__2$$) {
      return $f$$518$$.$cljs$core$IFn$_invoke$arity$5$ ? $f$$518$$.$cljs$core$IFn$_invoke$arity$5$($arg1$$3$$, $arg2$$2$$, $arg3$$, $G__20028__3$$, $G__20028__2$$) : $f$$518$$.call(null, $arg1$$3$$, $arg2$$2$$, $arg3$$, $G__20028__3$$, $G__20028__2$$);
    }
    function $G__20028__1$$($G__20028__3$$) {
      return $f$$518$$.$cljs$core$IFn$_invoke$arity$4$ ? $f$$518$$.$cljs$core$IFn$_invoke$arity$4$($arg1$$3$$, $arg2$$2$$, $arg3$$, $G__20028__3$$) : $f$$518$$.call(null, $arg1$$3$$, $arg2$$2$$, $arg3$$, $G__20028__3$$);
    }
    function $G__20028__0$$() {
      return $f$$518$$.$cljs$core$IFn$_invoke$arity$3$ ? $f$$518$$.$cljs$core$IFn$_invoke$arity$3$($arg1$$3$$, $arg2$$2$$, $arg3$$) : $f$$518$$.call(null, $arg1$$3$$, $arg2$$2$$, $arg3$$);
    }
    var $G__20028$$ = null, $G__20028__4$$ = function() {
      function $G__20028__3$$($f$$518$$, $arg1$$3$$, $arg2$$2$$, $arg3$$) {
        var $G__20028__1$$ = null;
        if (3 < arguments.length) {
          for (var $G__20028__1$$ = 0, $G__20028__0$$ = Array(arguments.length - 3);$G__20028__1$$ < $G__20028__0$$.length;) {
            $G__20028__0$$[$G__20028__1$$] = arguments[$G__20028__1$$ + 3], ++$G__20028__1$$;
          }
          $G__20028__1$$ = new $cljs$core$IndexedSeq$$($G__20028__0$$, 0);
        }
        return $G__20028__2$$.call(this, $f$$518$$, $arg1$$3$$, $arg2$$2$$, $G__20028__1$$);
      }
      function $G__20028__2$$($G__20028__3$$, $G__20028__1$$, $G__20028__0$$, $G__20028$$) {
        return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($f$$518$$, $arg1$$3$$, $arg2$$2$$, $arg3$$, $G__20028__3$$, $cljs$core$array_seq$$([$G__20028__1$$, $G__20028__0$$, $G__20028$$], 0));
      }
      $G__20028__3$$.$cljs$lang$maxFixedArity$ = 3;
      $G__20028__3$$.$cljs$lang$applyTo$ = function($f$$518$$) {
        var $arg1$$3$$ = $cljs$core$first$$($f$$518$$);
        $f$$518$$ = $cljs$core$next$$($f$$518$$);
        var $arg2$$2$$ = $cljs$core$first$$($f$$518$$);
        $f$$518$$ = $cljs$core$next$$($f$$518$$);
        var $arg3$$ = $cljs$core$first$$($f$$518$$);
        $f$$518$$ = $cljs$core$rest$$($f$$518$$);
        return $G__20028__2$$($arg1$$3$$, $arg2$$2$$, $arg3$$, $f$$518$$);
      };
      $G__20028__3$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__20028__2$$;
      return $G__20028__3$$;
    }(), $G__20028$$ = function($f$$518$$, $arg1$$3$$, $arg2$$2$$, $arg3$$) {
      switch(arguments.length) {
        case 0:
          return $G__20028__0$$.call(this);
        case 1:
          return $G__20028__1$$.call(this, $f$$518$$);
        case 2:
          return $G__20028__2$$.call(this, $f$$518$$, $arg1$$3$$);
        case 3:
          return $G__20028__3$$.call(this, $f$$518$$, $arg1$$3$$, $arg2$$2$$);
        default:
          var $G__20028$$ = null;
          if (3 < arguments.length) {
            for (var $G__20028$$ = 0, $G__20033__a$$ = Array(arguments.length - 3);$G__20028$$ < $G__20033__a$$.length;) {
              $G__20033__a$$[$G__20028$$] = arguments[$G__20028$$ + 3], ++$G__20028$$;
            }
            $G__20028$$ = new $cljs$core$IndexedSeq$$($G__20033__a$$, 0);
          }
          return $G__20028__4$$.$cljs$core$IFn$_invoke$arity$variadic$($f$$518$$, $arg1$$3$$, $arg2$$2$$, $G__20028$$);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    $G__20028$$.$cljs$lang$maxFixedArity$ = 3;
    $G__20028$$.$cljs$lang$applyTo$ = $G__20028__4$$.$cljs$lang$applyTo$;
    $G__20028$$.$cljs$core$IFn$_invoke$arity$0$ = $G__20028__0$$;
    $G__20028$$.$cljs$core$IFn$_invoke$arity$1$ = $G__20028__1$$;
    $G__20028$$.$cljs$core$IFn$_invoke$arity$2$ = $G__20028__2$$;
    $G__20028$$.$cljs$core$IFn$_invoke$arity$3$ = $G__20028__3$$;
    $G__20028$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__20028__4$$.$cljs$core$IFn$_invoke$arity$variadic$;
    return $G__20028$$;
  }();
};
$cljs$core$partial$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($f$$519$$, $arg1$$4$$, $arg2$$3$$, $arg3$$1$$, $more$$29$$) {
  return function() {
    function $G__20034$$($f$$519$$) {
      var $arg1$$4$$ = null;
      if (0 < arguments.length) {
        for (var $arg1$$4$$ = 0, $arg2$$3$$ = Array(arguments.length - 0);$arg1$$4$$ < $arg2$$3$$.length;) {
          $arg2$$3$$[$arg1$$4$$] = arguments[$arg1$$4$$ + 0], ++$arg1$$4$$;
        }
        $arg1$$4$$ = new $cljs$core$IndexedSeq$$($arg2$$3$$, 0);
      }
      return $G__20034__delegate$$.call(this, $arg1$$4$$);
    }
    function $G__20034__delegate$$($G__20034$$) {
      return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$05$$($f$$519$$, $arg1$$4$$, $arg2$$3$$, $arg3$$1$$, $cljs$core$concat$$.$cljs$core$IFn$_invoke$arity$2$($more$$29$$, $G__20034$$));
    }
    $G__20034$$.$cljs$lang$maxFixedArity$ = 0;
    $G__20034$$.$cljs$lang$applyTo$ = function($f$$519$$) {
      $f$$519$$ = $cljs$core$seq$$($f$$519$$);
      return $G__20034__delegate$$($f$$519$$);
    };
    $G__20034$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__20034__delegate$$;
    return $G__20034$$;
  }();
};
$cljs$core$partial$$.$cljs$lang$applyTo$ = function($G__19968_seq19966$$) {
  var $G__19967$$ = $cljs$core$first$$($G__19968_seq19966$$), $G__19969_seq19966__$1$$ = $cljs$core$next$$($G__19968_seq19966$$);
  $G__19968_seq19966$$ = $cljs$core$first$$($G__19969_seq19966__$1$$);
  var $G__19970_seq19966__$2$$ = $cljs$core$next$$($G__19969_seq19966__$1$$), $G__19969_seq19966__$1$$ = $cljs$core$first$$($G__19970_seq19966__$2$$), $seq19966__$3_seq19966__$4$$ = $cljs$core$next$$($G__19970_seq19966__$2$$), $G__19970_seq19966__$2$$ = $cljs$core$first$$($seq19966__$3_seq19966__$4$$), $seq19966__$3_seq19966__$4$$ = $cljs$core$next$$($seq19966__$3_seq19966__$4$$);
  return $cljs$core$partial$$.$cljs$core$IFn$_invoke$arity$variadic$($G__19967$$, $G__19968_seq19966$$, $G__19969_seq19966__$1$$, $G__19970_seq19966__$2$$, $seq19966__$3_seq19966__$4$$);
};
$cljs$core$partial$$.$cljs$lang$maxFixedArity$ = 4;
function $cljs$core$Atom$$($state$$1$$, $meta$$18$$, $validator$$, $watches$$) {
  this.state = $state$$1$$;
  this.meta = $meta$$18$$;
  this.$validator$ = $validator$$;
  this.$watches$ = $watches$$;
  this.$cljs$lang$protocol_mask$partition1$$ = 16386;
  this.$cljs$lang$protocol_mask$partition0$$ = 6455296;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$Atom$$.prototype;
$JSCompiler_prototypeAlias$$.equiv = function($other$$25$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$$25$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($o$$274$$, $other$$26$$) {
  return this === $other$$26$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IDeref$_deref$arity$1$ = function() {
  return this.state;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.meta;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWatchable$_notify_watches$arity$3$ = function($G__20149_f$$527_temp__4425__auto__$$2_this$$$52_vec__20129_vec__20134$$, $oldval$$1$$, $newval$$1$$) {
  for (var $G__20148_seq__20125_seq__20125__$1$$ = $cljs$core$seq$$(this.$watches$), $G__20135_20152_c__5036__auto___chunk__20126$$ = null, $G__20137_20154_G__20150_count__20127$$ = 0, $G__20138_20155_i__20128$$ = 0;;) {
    if ($G__20138_20155_i__20128$$ < $G__20137_20154_G__20150_count__20127$$) {
      $G__20149_f$$527_temp__4425__auto__$$2_this$$$52_vec__20129_vec__20134$$ = $G__20135_20152_c__5036__auto___chunk__20126$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__20138_20155_i__20128$$);
      var $G__20130_20140_key$$62$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__20149_f$$527_temp__4425__auto__$$2_this$$$52_vec__20129_vec__20134$$, 0);
      $G__20149_f$$527_temp__4425__auto__$$2_this$$$52_vec__20129_vec__20134$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__20149_f$$527_temp__4425__auto__$$2_this$$$52_vec__20129_vec__20134$$, 1);
      var $G__20132_20142$$ = $oldval$$1$$, $G__20133_20143$$ = $newval$$1$$;
      $G__20149_f$$527_temp__4425__auto__$$2_this$$$52_vec__20129_vec__20134$$.$cljs$core$IFn$_invoke$arity$4$ ? $G__20149_f$$527_temp__4425__auto__$$2_this$$$52_vec__20129_vec__20134$$.$cljs$core$IFn$_invoke$arity$4$($G__20130_20140_key$$62$$, this, $G__20132_20142$$, $G__20133_20143$$) : $G__20149_f$$527_temp__4425__auto__$$2_this$$$52_vec__20129_vec__20134$$.call(null, $G__20130_20140_key$$62$$, this, $G__20132_20142$$, $G__20133_20143$$);
      $G__20138_20155_i__20128$$ += 1;
    } else {
      if ($G__20149_f$$527_temp__4425__auto__$$2_this$$$52_vec__20129_vec__20134$$ = $cljs$core$seq$$($G__20148_seq__20125_seq__20125__$1$$)) {
        $G__20148_seq__20125_seq__20125__$1$$ = $G__20149_f$$527_temp__4425__auto__$$2_this$$$52_vec__20129_vec__20134$$, $cljs$core$chunked_seq_QMARK_$$($G__20148_seq__20125_seq__20125__$1$$) ? ($G__20135_20152_c__5036__auto___chunk__20126$$ = $cljs$core$_chunked_first$$($G__20148_seq__20125_seq__20125__$1$$), $G__20148_seq__20125_seq__20125__$1$$ = $cljs$core$_chunked_rest$$($G__20148_seq__20125_seq__20125__$1$$), $G__20149_f$$527_temp__4425__auto__$$2_this$$$52_vec__20129_vec__20134$$ = $G__20135_20152_c__5036__auto___chunk__20126$$, 
        $G__20137_20154_G__20150_count__20127$$ = $cljs$core$count$$($G__20135_20152_c__5036__auto___chunk__20126$$), $G__20135_20152_c__5036__auto___chunk__20126$$ = $G__20149_f$$527_temp__4425__auto__$$2_this$$$52_vec__20129_vec__20134$$) : ($G__20149_f$$527_temp__4425__auto__$$2_this$$$52_vec__20129_vec__20134$$ = $cljs$core$first$$($G__20148_seq__20125_seq__20125__$1$$), $G__20130_20140_key$$62$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__20149_f$$527_temp__4425__auto__$$2_this$$$52_vec__20129_vec__20134$$, 
        0), $G__20149_f$$527_temp__4425__auto__$$2_this$$$52_vec__20129_vec__20134$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__20149_f$$527_temp__4425__auto__$$2_this$$$52_vec__20129_vec__20134$$, 1), $G__20135_20152_c__5036__auto___chunk__20126$$ = $G__20130_20140_key$$62$$, $G__20137_20154_G__20150_count__20127$$ = $oldval$$1$$, $G__20138_20155_i__20128$$ = $newval$$1$$, $G__20149_f$$527_temp__4425__auto__$$2_this$$$52_vec__20129_vec__20134$$.$cljs$core$IFn$_invoke$arity$4$ ? $G__20149_f$$527_temp__4425__auto__$$2_this$$$52_vec__20129_vec__20134$$.$cljs$core$IFn$_invoke$arity$4$($G__20135_20152_c__5036__auto___chunk__20126$$, 
        this, $G__20137_20154_G__20150_count__20127$$, $G__20138_20155_i__20128$$) : $G__20149_f$$527_temp__4425__auto__$$2_this$$$52_vec__20129_vec__20134$$.call(null, $G__20135_20152_c__5036__auto___chunk__20126$$, this, $G__20137_20154_G__20150_count__20127$$, $G__20138_20155_i__20128$$), $G__20148_seq__20125_seq__20125__$1$$ = $cljs$core$next$$($G__20148_seq__20125_seq__20125__$1$$), $G__20135_20152_c__5036__auto___chunk__20126$$ = null, $G__20137_20154_G__20150_count__20127$$ = 0), $G__20138_20155_i__20128$$ = 
        0;
      } else {
        return null;
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWatchable$_add_watch$arity$3$ = function($this$$$53$$, $key$$63$$, $f$$528$$) {
  this.$watches$ = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$(this.$watches$, $key$$63$$, $f$$528$$);
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWatchable$_remove_watch$arity$2$ = function($this$$$54$$, $key$$64$$) {
  return this.$watches$ = $cljs$core$dissoc$$.$cljs$core$IFn$_invoke$arity$2$(this.$watches$, $key$$64$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  return $goog$getUid$$(this);
};
function $cljs$core$atom$$() {
  switch(arguments.length) {
    case 1:
      return $cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(arguments[0]);
    default:
      var $x$$inline_179$$ = arguments[0], $meta$$inline_182_p__20164$$inline_180$$ = new $cljs$core$IndexedSeq$$(Array.prototype.slice.call(arguments, 1), 0), $map__20165__$1$$inline_181_validator$$inline_183$$ = $cljs$core$seq_QMARK_$$($meta$$inline_182_p__20164$$inline_180$$) ? $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$hash_map$$, $meta$$inline_182_p__20164$$inline_180$$) : $meta$$inline_182_p__20164$$inline_180$$, $meta$$inline_182_p__20164$$inline_180$$ = $cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__20165__$1$$inline_181_validator$$inline_183$$, 
      $cljs$core$constant$0keyword$0meta$$), $map__20165__$1$$inline_181_validator$$inline_183$$ = $cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__20165__$1$$inline_181_validator$$inline_183$$, $cljs$core$constant$0keyword$0validator$$);
      return new $cljs$core$Atom$$($x$$inline_179$$, $meta$$inline_182_p__20164$$inline_180$$, $map__20165__$1$$inline_181_validator$$inline_183$$, null);
  }
}
function $cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($x$$300$$) {
  return new $cljs$core$Atom$$($x$$300$$, null, null, null);
}
function $cljs$core$reset_BANG_$$($a$$1550$$, $new_value$$2$$) {
  if ($a$$1550$$ instanceof $cljs$core$Atom$$) {
    var $old_value_validate$$ = $a$$1550$$.$validator$;
    if (null != $old_value_validate$$ && !$cljs$core$truth_$$($old_value_validate$$.$cljs$core$IFn$_invoke$arity$1$ ? $old_value_validate$$.$cljs$core$IFn$_invoke$arity$1$($new_value$$2$$) : $old_value_validate$$.call(null, $new_value$$2$$))) {
      throw Error([$cljs$core$str$$("Assert failed: "), $cljs$core$str$$("Validator rejected reference state"), $cljs$core$str$$("\n"), $cljs$core$str$$(function() {
        var $a$$1550$$ = $cljs$core$list$$(new $cljs$core$Symbol$$(null, "validate", "validate", 1439230700, null), new $cljs$core$Symbol$$(null, "new-value", "new-value", -1567397401, null));
        return $cljs$core$pr_str$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$pr_str$$.$cljs$core$IFn$_invoke$arity$1$($a$$1550$$) : $cljs$core$pr_str$$.call(null, $a$$1550$$);
      }())].join(""));
    }
    $old_value_validate$$ = $a$$1550$$.state;
    $a$$1550$$.state = $new_value$$2$$;
    null != $a$$1550$$.$watches$ && $cljs$core$_notify_watches$$($a$$1550$$, $old_value_validate$$, $new_value$$2$$);
    return $new_value$$2$$;
  }
  return $cljs$core$_reset_BANG_$$($a$$1550$$, $new_value$$2$$);
}
var $cljs$core$swap_BANG_$$ = function $cljs$core$swap_BANG_$$() {
  switch(arguments.length) {
    case 2:
      return $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    case 4:
      return $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], arguments[2], arguments[3], new $cljs$core$IndexedSeq$$(Array.prototype.slice.call(arguments, 4), 0));
  }
};
$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$ = function($a$$1551$$, $f$$529$$) {
  var $G__20178$$inline_185_JSCompiler_inline_result$$20_JSCompiler_temp$$19$$;
  $a$$1551$$ instanceof $cljs$core$Atom$$ ? ($G__20178$$inline_185_JSCompiler_inline_result$$20_JSCompiler_temp$$19$$ = $a$$1551$$.state, $G__20178$$inline_185_JSCompiler_inline_result$$20_JSCompiler_temp$$19$$ = $f$$529$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$$529$$.$cljs$core$IFn$_invoke$arity$1$($G__20178$$inline_185_JSCompiler_inline_result$$20_JSCompiler_temp$$19$$) : $f$$529$$.call(null, $G__20178$$inline_185_JSCompiler_inline_result$$20_JSCompiler_temp$$19$$), $G__20178$$inline_185_JSCompiler_inline_result$$20_JSCompiler_temp$$19$$ = 
  $cljs$core$reset_BANG_$$($a$$1551$$, $G__20178$$inline_185_JSCompiler_inline_result$$20_JSCompiler_temp$$19$$)) : $G__20178$$inline_185_JSCompiler_inline_result$$20_JSCompiler_temp$$19$$ = $cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($a$$1551$$, $f$$529$$);
  return $G__20178$$inline_185_JSCompiler_inline_result$$20_JSCompiler_temp$$19$$;
};
$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$ = function($JSCompiler_temp$$21_a$$1552$$, $JSCompiler_inline_result$$22_f$$530$$, $x$$302$$) {
  if ($JSCompiler_temp$$21_a$$1552$$ instanceof $cljs$core$Atom$$) {
    var $G__20179$$inline_187$$ = $JSCompiler_temp$$21_a$$1552$$.state;
    $JSCompiler_inline_result$$22_f$$530$$ = $JSCompiler_inline_result$$22_f$$530$$.$cljs$core$IFn$_invoke$arity$2$ ? $JSCompiler_inline_result$$22_f$$530$$.$cljs$core$IFn$_invoke$arity$2$($G__20179$$inline_187$$, $x$$302$$) : $JSCompiler_inline_result$$22_f$$530$$.call(null, $G__20179$$inline_187$$, $x$$302$$);
    $JSCompiler_temp$$21_a$$1552$$ = $cljs$core$reset_BANG_$$($JSCompiler_temp$$21_a$$1552$$, $JSCompiler_inline_result$$22_f$$530$$);
  } else {
    $JSCompiler_temp$$21_a$$1552$$ = $cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($JSCompiler_temp$$21_a$$1552$$, $JSCompiler_inline_result$$22_f$$530$$, $x$$302$$);
  }
  return $JSCompiler_temp$$21_a$$1552$$;
};
$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$ = function($JSCompiler_temp$$23_a$$1553$$, $JSCompiler_inline_result$$24_f$$531$$, $x$$303$$, $y$$163$$) {
  if ($JSCompiler_temp$$23_a$$1553$$ instanceof $cljs$core$Atom$$) {
    var $G__20181$$inline_189$$ = $JSCompiler_temp$$23_a$$1553$$.state;
    $JSCompiler_inline_result$$24_f$$531$$ = $JSCompiler_inline_result$$24_f$$531$$.$cljs$core$IFn$_invoke$arity$3$ ? $JSCompiler_inline_result$$24_f$$531$$.$cljs$core$IFn$_invoke$arity$3$($G__20181$$inline_189$$, $x$$303$$, $y$$163$$) : $JSCompiler_inline_result$$24_f$$531$$.call(null, $G__20181$$inline_189$$, $x$$303$$, $y$$163$$);
    $JSCompiler_temp$$23_a$$1553$$ = $cljs$core$reset_BANG_$$($JSCompiler_temp$$23_a$$1553$$, $JSCompiler_inline_result$$24_f$$531$$);
  } else {
    $JSCompiler_temp$$23_a$$1553$$ = $cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$($JSCompiler_temp$$23_a$$1553$$, $JSCompiler_inline_result$$24_f$$531$$, $x$$303$$, $y$$163$$);
  }
  return $JSCompiler_temp$$23_a$$1553$$;
};
$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($a$$1554$$, $f$$532$$, $x$$304$$, $y$$164$$, $more$$30$$) {
  return $a$$1554$$ instanceof $cljs$core$Atom$$ ? $cljs$core$reset_BANG_$$($a$$1554$$, $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$05$$($f$$532$$, $a$$1554$$.state, $x$$304$$, $y$$164$$, $more$$30$$)) : $cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$5$($a$$1554$$, $f$$532$$, $x$$304$$, $y$$164$$, $more$$30$$);
};
$cljs$core$swap_BANG_$$.$cljs$lang$applyTo$ = function($G__20173_seq20171$$) {
  var $G__20172$$ = $cljs$core$first$$($G__20173_seq20171$$), $G__20174_seq20171__$1$$ = $cljs$core$next$$($G__20173_seq20171$$);
  $G__20173_seq20171$$ = $cljs$core$first$$($G__20174_seq20171__$1$$);
  var $G__20175_seq20171__$2$$ = $cljs$core$next$$($G__20174_seq20171__$1$$), $G__20174_seq20171__$1$$ = $cljs$core$first$$($G__20175_seq20171__$2$$), $seq20171__$3_seq20171__$4$$ = $cljs$core$next$$($G__20175_seq20171__$2$$), $G__20175_seq20171__$2$$ = $cljs$core$first$$($seq20171__$3_seq20171__$4$$), $seq20171__$3_seq20171__$4$$ = $cljs$core$next$$($seq20171__$3_seq20171__$4$$);
  return $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$variadic$($G__20172$$, $G__20173_seq20171$$, $G__20174_seq20171__$1$$, $G__20175_seq20171__$2$$, $seq20171__$3_seq20171__$4$$);
};
$cljs$core$swap_BANG_$$.$cljs$lang$maxFixedArity$ = 4;
var $cljs$core$map$$ = function $cljs$core$map$$() {
  switch(arguments.length) {
    case 1:
      return $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    case 4:
      return $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$4$(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], arguments[2], arguments[3], new $cljs$core$IndexedSeq$$(Array.prototype.slice.call(arguments, 4), 0));
  }
};
$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$1$ = function($f$$535$$) {
  return function($rf$$3$$) {
    return function() {
      function $G__20683__2$$($G__20683__2$$, $G__20683__1$$) {
        var $G__20683__0$$ = $f$$535$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$$535$$.$cljs$core$IFn$_invoke$arity$1$($G__20683__1$$) : $f$$535$$.call(null, $G__20683__1$$);
        return $rf$$3$$.$cljs$core$IFn$_invoke$arity$2$ ? $rf$$3$$.$cljs$core$IFn$_invoke$arity$2$($G__20683__2$$, $G__20683__0$$) : $rf$$3$$.call(null, $G__20683__2$$, $G__20683__0$$);
      }
      function $G__20683__1$$($f$$535$$) {
        return $rf$$3$$.$cljs$core$IFn$_invoke$arity$1$ ? $rf$$3$$.$cljs$core$IFn$_invoke$arity$1$($f$$535$$) : $rf$$3$$.call(null, $f$$535$$);
      }
      function $G__20683__0$$() {
        return $rf$$3$$.$cljs$core$IFn$_invoke$arity$0$ ? $rf$$3$$.$cljs$core$IFn$_invoke$arity$0$() : $rf$$3$$.call(null);
      }
      var $G__20683$$ = null, $G__20683__3$$ = function() {
        function $G__20683__2$$($f$$535$$, $rf$$3$$, $G__20683__0$$) {
          var $G__20683$$ = null;
          if (2 < arguments.length) {
            for (var $G__20683$$ = 0, $G__20683__3$$ = Array(arguments.length - 2);$G__20683$$ < $G__20683__3$$.length;) {
              $G__20683__3$$[$G__20683$$] = arguments[$G__20683$$ + 2], ++$G__20683$$;
            }
            $G__20683$$ = new $cljs$core$IndexedSeq$$($G__20683__3$$, 0);
          }
          return $G__20683__1$$.call(this, $f$$535$$, $rf$$3$$, $G__20683$$);
        }
        function $G__20683__1$$($G__20683__2$$, $G__20683__0$$, $G__20683$$) {
          $G__20683__0$$ = $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$03$$($f$$535$$, $G__20683__0$$, $G__20683$$);
          return $rf$$3$$.$cljs$core$IFn$_invoke$arity$2$ ? $rf$$3$$.$cljs$core$IFn$_invoke$arity$2$($G__20683__2$$, $G__20683__0$$) : $rf$$3$$.call(null, $G__20683__2$$, $G__20683__0$$);
        }
        $G__20683__2$$.$cljs$lang$maxFixedArity$ = 2;
        $G__20683__2$$.$cljs$lang$applyTo$ = function($f$$535$$) {
          var $rf$$3$$ = $cljs$core$first$$($f$$535$$);
          $f$$535$$ = $cljs$core$next$$($f$$535$$);
          var $G__20683__2$$ = $cljs$core$first$$($f$$535$$);
          $f$$535$$ = $cljs$core$rest$$($f$$535$$);
          return $G__20683__1$$($rf$$3$$, $G__20683__2$$, $f$$535$$);
        };
        $G__20683__2$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__20683__1$$;
        return $G__20683__2$$;
      }(), $G__20683$$ = function($f$$535$$, $rf$$3$$, $G__20683$$) {
        switch(arguments.length) {
          case 0:
            return $G__20683__0$$.call(this);
          case 1:
            return $G__20683__1$$.call(this, $f$$535$$);
          case 2:
            return $G__20683__2$$.call(this, $f$$535$$, $rf$$3$$);
          default:
            var $G__20687_G__20688__i$$ = null;
            if (2 < arguments.length) {
              for (var $G__20687_G__20688__i$$ = 0, $G__20688__a$$ = Array(arguments.length - 2);$G__20687_G__20688__i$$ < $G__20688__a$$.length;) {
                $G__20688__a$$[$G__20687_G__20688__i$$] = arguments[$G__20687_G__20688__i$$ + 2], ++$G__20687_G__20688__i$$;
              }
              $G__20687_G__20688__i$$ = new $cljs$core$IndexedSeq$$($G__20688__a$$, 0);
            }
            return $G__20683__3$$.$cljs$core$IFn$_invoke$arity$variadic$($f$$535$$, $rf$$3$$, $G__20687_G__20688__i$$);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      $G__20683$$.$cljs$lang$maxFixedArity$ = 2;
      $G__20683$$.$cljs$lang$applyTo$ = $G__20683__3$$.$cljs$lang$applyTo$;
      $G__20683$$.$cljs$core$IFn$_invoke$arity$0$ = $G__20683__0$$;
      $G__20683$$.$cljs$core$IFn$_invoke$arity$1$ = $G__20683__1$$;
      $G__20683$$.$cljs$core$IFn$_invoke$arity$2$ = $G__20683__2$$;
      $G__20683$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__20683__3$$.$cljs$core$IFn$_invoke$arity$variadic$;
      return $G__20683$$;
    }();
  };
};
$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$ = function($f$$536$$, $coll$$212$$) {
  return new $cljs$core$LazySeq$$(null, function() {
    var $temp__4425__auto__$$4$$ = $cljs$core$seq$$($coll$$212$$);
    if ($temp__4425__auto__$$4$$) {
      if ($cljs$core$chunked_seq_QMARK_$$($temp__4425__auto__$$4$$)) {
        for (var $c$$893$$ = $cljs$core$_chunked_first$$($temp__4425__auto__$$4$$), $size$$20$$ = $cljs$core$count$$($c$$893$$), $b$$1113$$ = $cljs$core$chunk_buffer$$($size$$20$$), $i_20690$$ = 0;;) {
          if ($i_20690$$ < $size$$20$$) {
            $cljs$core$chunk_append$$($b$$1113$$, function() {
              var $coll$$212$$ = $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($c$$893$$, $i_20690$$);
              return $f$$536$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$$536$$.$cljs$core$IFn$_invoke$arity$1$($coll$$212$$) : $f$$536$$.call(null, $coll$$212$$);
            }()), $i_20690$$ += 1;
          } else {
            break;
          }
        }
        return $cljs$core$chunk_cons$$($b$$1113$$.chunk(), $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($f$$536$$, $cljs$core$_chunked_rest$$($temp__4425__auto__$$4$$)));
      }
      return $cljs$core$cons$$(function() {
        var $coll$$212$$ = $cljs$core$first$$($temp__4425__auto__$$4$$);
        return $f$$536$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$$536$$.$cljs$core$IFn$_invoke$arity$1$($coll$$212$$) : $f$$536$$.call(null, $coll$$212$$);
      }(), $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($f$$536$$, $cljs$core$rest$$($temp__4425__auto__$$4$$)));
    }
    return null;
  }, null, null);
};
$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$3$ = function($f$$537$$, $c1$$, $c2$$) {
  return new $cljs$core$LazySeq$$(null, function() {
    var $JSCompiler_temp$$25_s1$$ = $cljs$core$seq$$($c1$$), $s2$$ = $cljs$core$seq$$($c2$$);
    if ($JSCompiler_temp$$25_s1$$ && $s2$$) {
      var $JSCompiler_temp_const$$26$$ = $cljs$core$cons$$, $G__20676$$inline_191_JSCompiler_inline_result$$27$$;
      $G__20676$$inline_191_JSCompiler_inline_result$$27$$ = $cljs$core$first$$($JSCompiler_temp$$25_s1$$);
      var $G__20677$$inline_192$$ = $cljs$core$first$$($s2$$);
      $G__20676$$inline_191_JSCompiler_inline_result$$27$$ = $f$$537$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$$537$$.$cljs$core$IFn$_invoke$arity$2$($G__20676$$inline_191_JSCompiler_inline_result$$27$$, $G__20677$$inline_192$$) : $f$$537$$.call(null, $G__20676$$inline_191_JSCompiler_inline_result$$27$$, $G__20677$$inline_192$$);
      $JSCompiler_temp$$25_s1$$ = $JSCompiler_temp_const$$26$$($G__20676$$inline_191_JSCompiler_inline_result$$27$$, $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$3$($f$$537$$, $cljs$core$rest$$($JSCompiler_temp$$25_s1$$), $cljs$core$rest$$($s2$$)));
    } else {
      $JSCompiler_temp$$25_s1$$ = null;
    }
    return $JSCompiler_temp$$25_s1$$;
  }, null, null);
};
$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$4$ = function($f$$538$$, $c1$$1$$, $c2$$1$$, $c3$$) {
  return new $cljs$core$LazySeq$$(null, function() {
    var $JSCompiler_temp$$28_s1$$1$$ = $cljs$core$seq$$($c1$$1$$), $s2$$1$$ = $cljs$core$seq$$($c2$$1$$), $s3$$ = $cljs$core$seq$$($c3$$);
    if ($JSCompiler_temp$$28_s1$$1$$ && $s2$$1$$ && $s3$$) {
      var $JSCompiler_temp_const$$29$$ = $cljs$core$cons$$, $G__20678$$inline_194_JSCompiler_inline_result$$30$$;
      $G__20678$$inline_194_JSCompiler_inline_result$$30$$ = $cljs$core$first$$($JSCompiler_temp$$28_s1$$1$$);
      var $G__20679$$inline_195$$ = $cljs$core$first$$($s2$$1$$), $G__20680$$inline_196$$ = $cljs$core$first$$($s3$$);
      $G__20678$$inline_194_JSCompiler_inline_result$$30$$ = $f$$538$$.$cljs$core$IFn$_invoke$arity$3$ ? $f$$538$$.$cljs$core$IFn$_invoke$arity$3$($G__20678$$inline_194_JSCompiler_inline_result$$30$$, $G__20679$$inline_195$$, $G__20680$$inline_196$$) : $f$$538$$.call(null, $G__20678$$inline_194_JSCompiler_inline_result$$30$$, $G__20679$$inline_195$$, $G__20680$$inline_196$$);
      $JSCompiler_temp$$28_s1$$1$$ = $JSCompiler_temp_const$$29$$($G__20678$$inline_194_JSCompiler_inline_result$$30$$, $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$4$($f$$538$$, $cljs$core$rest$$($JSCompiler_temp$$28_s1$$1$$), $cljs$core$rest$$($s2$$1$$), $cljs$core$rest$$($s3$$)));
    } else {
      $JSCompiler_temp$$28_s1$$1$$ = null;
    }
    return $JSCompiler_temp$$28_s1$$1$$;
  }, null, null);
};
$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($f$$539$$, $c1$$2$$, $c2$$2$$, $c3$$1$$, $colls$$2$$) {
  var $step$$1$$ = function $cljs$core$step$$($f$$539$$) {
    return new $cljs$core$LazySeq$$(null, function() {
      var $c1$$2$$ = $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$seq$$, $f$$539$$);
      return $cljs$core$every_QMARK_$$($cljs$core$identity$$, $c1$$2$$) ? $cljs$core$cons$$($cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$first$$, $c1$$2$$), $cljs$core$step$$($cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$rest$$, $c1$$2$$))) : null;
    }, null, null);
  };
  return $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function() {
    return function($c1$$2$$) {
      return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($f$$539$$, $c1$$2$$);
    };
  }($step$$1$$), $step$$1$$($cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$variadic$($colls$$2$$, $c3$$1$$, $cljs$core$array_seq$$([$c2$$2$$, $c1$$2$$], 0))));
};
$cljs$core$map$$.$cljs$lang$applyTo$ = function($G__20663_seq20661$$) {
  var $G__20662$$ = $cljs$core$first$$($G__20663_seq20661$$), $G__20664_seq20661__$1$$ = $cljs$core$next$$($G__20663_seq20661$$);
  $G__20663_seq20661$$ = $cljs$core$first$$($G__20664_seq20661__$1$$);
  var $G__20665_seq20661__$2$$ = $cljs$core$next$$($G__20664_seq20661__$1$$), $G__20664_seq20661__$1$$ = $cljs$core$first$$($G__20665_seq20661__$2$$), $seq20661__$3_seq20661__$4$$ = $cljs$core$next$$($G__20665_seq20661__$2$$), $G__20665_seq20661__$2$$ = $cljs$core$first$$($seq20661__$3_seq20661__$4$$), $seq20661__$3_seq20661__$4$$ = $cljs$core$next$$($seq20661__$3_seq20661__$4$$);
  return $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$variadic$($G__20662$$, $G__20663_seq20661$$, $G__20664_seq20661__$1$$, $G__20665_seq20661__$2$$, $seq20661__$3_seq20661__$4$$);
};
$cljs$core$map$$.$cljs$lang$maxFixedArity$ = 4;
function $cljs$core$into$cljs$0core$0IFn$0_invoke$0arity$02$$($to$$3$$, $from$$2$$) {
  var $JSCompiler_inline_result$$517_JSCompiler_temp$$515_JSCompiler_temp$$516_tcoll$$inline_741$$;
  null != $to$$3$$ ? $to$$3$$ && ($to$$3$$.$cljs$lang$protocol_mask$partition1$$ & 4 || $to$$3$$.$cljs$core$IEditableCollection$$) ? ($JSCompiler_inline_result$$517_JSCompiler_temp$$515_JSCompiler_temp$$516_tcoll$$inline_741$$ = $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($cljs$core$_conj_BANG_$$, $cljs$core$_as_transient$$($to$$3$$), $from$$2$$), $JSCompiler_inline_result$$517_JSCompiler_temp$$515_JSCompiler_temp$$516_tcoll$$inline_741$$ = $cljs$core$_persistent_BANG_$$($JSCompiler_inline_result$$517_JSCompiler_temp$$515_JSCompiler_temp$$516_tcoll$$inline_741$$), 
  $JSCompiler_inline_result$$517_JSCompiler_temp$$515_JSCompiler_temp$$516_tcoll$$inline_741$$ = $cljs$core$with_meta$$($JSCompiler_inline_result$$517_JSCompiler_temp$$515_JSCompiler_temp$$516_tcoll$$inline_741$$, $cljs$core$meta$$($to$$3$$))) : $JSCompiler_inline_result$$517_JSCompiler_temp$$515_JSCompiler_temp$$516_tcoll$$inline_741$$ = $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($cljs$core$_conj$$, $to$$3$$, $from$$2$$) : $JSCompiler_inline_result$$517_JSCompiler_temp$$515_JSCompiler_temp$$516_tcoll$$inline_741$$ = 
  $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($cljs$core$conj$$, $cljs$core$List$EMPTY$$, $from$$2$$);
  return $JSCompiler_inline_result$$517_JSCompiler_temp$$515_JSCompiler_temp$$516_tcoll$$inline_741$$;
}
function $cljs$core$VectorNode$$($edit$$, $arr$$77$$) {
  this.$edit$ = $edit$$;
  this.$arr$ = $arr$$77$$;
}
function $cljs$core$pv_fresh_node$$($edit$$2$$) {
  return new $cljs$core$VectorNode$$($edit$$2$$, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function $cljs$core$pv_clone_node$$($node$$5$$) {
  return new $cljs$core$VectorNode$$($node$$5$$.$edit$, $cljs$core$aclone$$($node$$5$$.$arr$));
}
function $cljs$core$tail_off$$($cnt$$6_pv$$) {
  $cnt$$6_pv$$ = $cnt$$6_pv$$.$cnt$;
  return 32 > $cnt$$6_pv$$ ? 0 : $cnt$$6_pv$$ - 1 >>> 5 << 5;
}
function $cljs$core$new_path$$($edit$$3$$, $level$$7_ll$$, $G__20874_node$$6_ret$$11$$) {
  for (;;) {
    if (0 === $level$$7_ll$$) {
      return $G__20874_node$$6_ret$$11$$;
    }
    var $r$$447$$ = $cljs$core$pv_fresh_node$$($edit$$3$$);
    $r$$447$$.$arr$[0] = $G__20874_node$$6_ret$$11$$;
    $G__20874_node$$6_ret$$11$$ = $r$$447$$;
    $level$$7_ll$$ -= 5;
  }
}
var $cljs$core$push_tail$$ = function $cljs$core$push_tail$$($node_to_insert_pv$$1$$, $level$$8$$, $child$$1_parent$$2$$, $tailnode$$) {
  var $ret$$12$$ = $cljs$core$pv_clone_node$$($child$$1_parent$$2$$), $subidx$$ = $node_to_insert_pv$$1$$.$cnt$ - 1 >>> $level$$8$$ & 31;
  5 === $level$$8$$ ? $ret$$12$$.$arr$[$subidx$$] = $tailnode$$ : ($child$$1_parent$$2$$ = $child$$1_parent$$2$$.$arr$[$subidx$$], $node_to_insert_pv$$1$$ = null != $child$$1_parent$$2$$ ? $cljs$core$push_tail$$($node_to_insert_pv$$1$$, $level$$8$$ - 5, $child$$1_parent$$2$$, $tailnode$$) : $cljs$core$new_path$$(null, $level$$8$$ - 5, $tailnode$$), $ret$$12$$.$arr$[$subidx$$] = $node_to_insert_pv$$1$$);
  return $ret$$12$$;
};
function $cljs$core$vector_index_out_of_bounds$$($i$$439$$, $cnt$$7$$) {
  throw Error([$cljs$core$str$$("No item "), $cljs$core$str$$($i$$439$$), $cljs$core$str$$(" in vector of length "), $cljs$core$str$$($cnt$$7$$)].join(""));
}
function $cljs$core$unchecked_array_for$$($pv$$3$$, $i$$440$$) {
  if ($i$$440$$ >= $cljs$core$tail_off$$($pv$$3$$)) {
    return $pv$$3$$.tail;
  }
  for (var $node$$8$$ = $pv$$3$$.root, $level$$10$$ = $pv$$3$$.shift;;) {
    if (0 < $level$$10$$) {
      var $G__20882$$ = $level$$10$$ - 5, $node$$8$$ = $node$$8$$.$arr$[$i$$440$$ >>> $level$$10$$ & 31], $level$$10$$ = $G__20882$$
    } else {
      return $node$$8$$.$arr$;
    }
  }
}
function $cljs$core$array_for$$($pv$$4$$, $i$$441$$) {
  return 0 <= $i$$441$$ && $i$$441$$ < $pv$$4$$.$cnt$ ? $cljs$core$unchecked_array_for$$($pv$$4$$, $i$$441$$) : $cljs$core$vector_index_out_of_bounds$$($i$$441$$, $pv$$4$$.$cnt$);
}
var $cljs$core$do_assoc$$ = function $cljs$core$do_assoc$$($pv$$5_val$$inline_968$$, $level$$11$$, $node$$9$$, $i$$442$$, $val$$50$$) {
  var $ret$$13$$ = $cljs$core$pv_clone_node$$($node$$9$$);
  if (0 === $level$$11$$) {
    $ret$$13$$.$arr$[$i$$442$$ & 31] = $val$$50$$;
  } else {
    var $subidx$$1$$ = $i$$442$$ >>> $level$$11$$ & 31;
    $pv$$5_val$$inline_968$$ = $cljs$core$do_assoc$$($pv$$5_val$$inline_968$$, $level$$11$$ - 5, $node$$9$$.$arr$[$subidx$$1$$], $i$$442$$, $val$$50$$);
    $ret$$13$$.$arr$[$subidx$$1$$] = $pv$$5_val$$inline_968$$;
  }
  return $ret$$13$$;
}, $cljs$core$pop_tail$$ = function $cljs$core$pop_tail$$($new_child_pv$$6$$, $level$$12$$, $node$$10_ret$$14$$) {
  var $subidx$$2$$ = $new_child_pv$$6$$.$cnt$ - 2 >>> $level$$12$$ & 31;
  if (5 < $level$$12$$) {
    $new_child_pv$$6$$ = $cljs$core$pop_tail$$($new_child_pv$$6$$, $level$$12$$ - 5, $node$$10_ret$$14$$.$arr$[$subidx$$2$$]);
    if (null == $new_child_pv$$6$$ && 0 === $subidx$$2$$) {
      return null;
    }
    $node$$10_ret$$14$$ = $cljs$core$pv_clone_node$$($node$$10_ret$$14$$);
    $node$$10_ret$$14$$.$arr$[$subidx$$2$$] = $new_child_pv$$6$$;
    return $node$$10_ret$$14$$;
  }
  if (0 === $subidx$$2$$) {
    return null;
  }
  $node$$10_ret$$14$$ = $cljs$core$pv_clone_node$$($node$$10_ret$$14$$);
  $node$$10_ret$$14$$.$arr$[$subidx$$2$$] = null;
  return $node$$10_ret$$14$$;
};
function $cljs$core$RangedIterator$$($i$$443$$, $base$$1$$, $arr$$79$$, $v$$39$$, $start$$18$$, $end$$10$$) {
  this.i = $i$$443$$;
  this.base = $base$$1$$;
  this.$arr$ = $arr$$79$$;
  this.$v$ = $v$$39$$;
  this.start = $start$$18$$;
  this.end = $end$$10$$;
}
$cljs$core$RangedIterator$$.prototype.$hasNext$ = function() {
  return this.i < this.end;
};
$cljs$core$RangedIterator$$.prototype.next = function() {
  32 === this.i - this.base && (this.$arr$ = $cljs$core$unchecked_array_for$$(this.$v$, this.i), this.base += 32);
  var $ret$$15$$ = this.$arr$[this.i & 31];
  this.i += 1;
  return $ret$$15$$;
};
function $cljs$core$PersistentVector$$($meta$$21$$, $cnt$$8$$, $shift$$, $root$$3$$, $tail$$, $__hash$$8$$) {
  this.meta = $meta$$21$$;
  this.$cnt$ = $cnt$$8$$;
  this.shift = $shift$$;
  this.root = $root$$3$$;
  this.tail = $tail$$;
  this.$__hash$ = $__hash$$8$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 167668511;
  this.$cljs$lang$protocol_mask$partition1$$ = 8196;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$PersistentVector$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$$27$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$$27$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($coll$$229$$, $k$$166$$) {
  return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$(this, $k$$166$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($coll$$230$$, $k$$167$$, $not_found$$14$$) {
  return "number" === typeof $k$$167$$ ? $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$3$(this, $k$$167$$, $not_found$$14$$) : $not_found$$14$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IKVReduce$_kv_reduce$arity$3$ = function($i$$446_v$$42$$, $G__20895_f$$560$$, $init$$3_len$$6$$) {
  $i$$446_v$$42$$ = 0;
  for (var $G__20892$$inline_746_G__20906$$inline_749_init__$1_init__$2$$inline_744_init__$3$$inline_745$$ = $init$$3_len$$6$$;;) {
    if ($i$$446_v$$42$$ < this.$cnt$) {
      var $G__20908_arr$$81_init__$2$$ = $cljs$core$unchecked_array_for$$(this, $i$$446_v$$42$$);
      $init$$3_len$$6$$ = $G__20908_arr$$81_init__$2$$.length;
      a: {
        for (var $j$$inline_743$$ = 0;;) {
          if ($j$$inline_743$$ < $init$$3_len$$6$$) {
            var $G__20893$$inline_747$$ = $j$$inline_743$$ + $i$$446_v$$42$$, $G__20894$$inline_748$$ = $G__20908_arr$$81_init__$2$$[$j$$inline_743$$], $G__20892$$inline_746_G__20906$$inline_749_init__$1_init__$2$$inline_744_init__$3$$inline_745$$ = $G__20895_f$$560$$.$cljs$core$IFn$_invoke$arity$3$ ? $G__20895_f$$560$$.$cljs$core$IFn$_invoke$arity$3$($G__20892$$inline_746_G__20906$$inline_749_init__$1_init__$2$$inline_744_init__$3$$inline_745$$, $G__20893$$inline_747$$, $G__20894$$inline_748$$) : 
            $G__20895_f$$560$$.call(null, $G__20892$$inline_746_G__20906$$inline_749_init__$1_init__$2$$inline_744_init__$3$$inline_745$$, $G__20893$$inline_747$$, $G__20894$$inline_748$$);
            if ($cljs$core$reduced_QMARK_$$($G__20892$$inline_746_G__20906$$inline_749_init__$1_init__$2$$inline_744_init__$3$$inline_745$$)) {
              $G__20908_arr$$81_init__$2$$ = $G__20892$$inline_746_G__20906$$inline_749_init__$1_init__$2$$inline_744_init__$3$$inline_745$$;
              break a;
            }
            $j$$inline_743$$ += 1;
          } else {
            $G__20908_arr$$81_init__$2$$ = $G__20892$$inline_746_G__20906$$inline_749_init__$1_init__$2$$inline_744_init__$3$$inline_745$$;
            break a;
          }
        }
      }
      if ($cljs$core$reduced_QMARK_$$($G__20908_arr$$81_init__$2$$)) {
        return $G__20895_f$$560$$ = $G__20908_arr$$81_init__$2$$, $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($G__20895_f$$560$$) : $cljs$core$deref$$.call(null, $G__20895_f$$560$$);
      }
      $i$$446_v$$42$$ += $init$$3_len$$6$$;
      $G__20892$$inline_746_G__20906$$inline_749_init__$1_init__$2$$inline_744_init__$3$$inline_745$$ = $G__20908_arr$$81_init__$2$$;
    } else {
      return $G__20892$$inline_746_G__20906$$inline_749_init__$1_init__$2$$inline_744_init__$3$$inline_745$$;
    }
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$2$ = function($coll$$231$$, $n$$620$$) {
  return $cljs$core$array_for$$(this, $n$$620$$)[$n$$620$$ & 31];
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$3$ = function($coll$$232$$, $n$$621$$, $not_found$$15$$) {
  return 0 <= $n$$621$$ && $n$$621$$ < this.$cnt$ ? $cljs$core$unchecked_array_for$$(this, $n$$621$$)[$n$$621$$ & 31] : $not_found$$15$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IVector$_assoc_n$arity$3$ = function($coll$$233_new_tail$$, $n$$622$$, $val$$51$$) {
  if (0 <= $n$$622$$ && $n$$622$$ < this.$cnt$) {
    return $cljs$core$tail_off$$(this) <= $n$$622$$ ? ($coll$$233_new_tail$$ = $cljs$core$aclone$$(this.tail), $coll$$233_new_tail$$[$n$$622$$ & 31] = $val$$51$$, new $cljs$core$PersistentVector$$(this.meta, this.$cnt$, this.shift, this.root, $coll$$233_new_tail$$, null)) : new $cljs$core$PersistentVector$$(this.meta, this.$cnt$, this.shift, $cljs$core$do_assoc$$(this, this.shift, this.root, $n$$622$$, $val$$51$$), this.tail, null);
  }
  if ($n$$622$$ === this.$cnt$) {
    return $cljs$core$_conj$$(this, $val$$51$$);
  }
  throw Error([$cljs$core$str$$("Index "), $cljs$core$str$$($n$$622$$), $cljs$core$str$$(" out of bounds  [0,"), $cljs$core$str$$(this.$cnt$), $cljs$core$str$$("]")].join(""));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIterable$_iterator$arity$1$ = function() {
  var $end$$inline_204$$ = this.$cnt$;
  return new $cljs$core$RangedIterator$$(0, 0, 0 < $cljs$core$count$$(this) ? $cljs$core$unchecked_array_for$$(this, 0) : null, this, 0, $end$$inline_204$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.meta;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return this.$cnt$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMapEntry$_key$arity$1$ = function() {
  return $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$(this, 0);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMapEntry$_val$arity$1$ = function() {
  return $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$(this, 1);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IStack$_peek$arity$1$ = function() {
  return 0 < this.$cnt$ ? $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$(this, this.$cnt$ - 1) : null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IStack$_pop$arity$1$ = function() {
  if (0 === this.$cnt$) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.$cnt$) {
    return $cljs$core$_with_meta$$($cljs$core$PersistentVector$EMPTY$$, this.meta);
  }
  if (1 < this.$cnt$ - $cljs$core$tail_off$$(this)) {
    return new $cljs$core$PersistentVector$$(this.meta, this.$cnt$ - 1, this.shift, this.root, this.tail.slice(0, -1), null);
  }
  var $new_tail$$1$$ = $cljs$core$unchecked_array_for$$(this, this.$cnt$ - 2), $new_root_nr$$1$$ = $cljs$core$pop_tail$$(this, this.shift, this.root), $new_root_nr$$1$$ = null == $new_root_nr$$1$$ ? $cljs$core$PersistentVector$EMPTY_NODE$$ : $new_root_nr$$1$$, $cnt_1$$ = this.$cnt$ - 1;
  return 5 < this.shift && null == $new_root_nr$$1$$.$arr$[1] ? new $cljs$core$PersistentVector$$(this.meta, $cnt_1$$, this.shift - 5, $new_root_nr$$1$$.$arr$[0], $new_tail$$1$$, null) : new $cljs$core$PersistentVector$$(this.meta, $cnt_1$$, this.shift, $new_root_nr$$1$$, $new_tail$$1$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4667__auto__$$6_h__4667__auto____$1$$6$$ = this.$__hash$;
  return null != $h__4667__auto__$$6_h__4667__auto____$1$$6$$ ? $h__4667__auto__$$6_h__4667__auto____$1$$6$$ : this.$__hash$ = $h__4667__auto__$$6_h__4667__auto____$1$$6$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$$242$$, $other$$28$$) {
  if ($other$$28$$ instanceof $cljs$core$PersistentVector$$) {
    if (this.$cnt$ === $cljs$core$count$$($other$$28$$)) {
      for (var $me_iter$$ = $cljs$core$_iterator$$(this), $you_iter$$ = $cljs$core$_iterator$$($other$$28$$);;) {
        if ($cljs$core$truth_$$($me_iter$$.$hasNext$())) {
          var $x$$373$$ = $me_iter$$.next(), $y$$216$$ = $you_iter$$.next();
          if (!$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($x$$373$$, $y$$216$$)) {
            return !1;
          }
        } else {
          return !0;
        }
      }
    } else {
      return !1;
    }
  } else {
    return $cljs$core$equiv_sequential$$(this, $other$$28$$);
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEditableCollection$_as_transient$arity$1$ = function() {
  var $self__$$316$$ = this;
  return new $cljs$core$TransientVector$$($self__$$316$$.$cnt$, $self__$$316$$.shift, function() {
    var $G__20896$$ = $self__$$316$$.root;
    return $cljs$core$tv_editable_root$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$tv_editable_root$$.$cljs$core$IFn$_invoke$arity$1$($G__20896$$) : $cljs$core$tv_editable_root$$.call(null, $G__20896$$);
  }(), function() {
    var $G__20897$$ = $self__$$316$$.tail;
    return $cljs$core$tv_editable_tail$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$tv_editable_tail$$.$cljs$core$IFn$_invoke$arity$1$($G__20897$$) : $cljs$core$tv_editable_tail$$.call(null, $G__20897$$);
  }());
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$with_meta$$($cljs$core$PersistentVector$EMPTY$$, this.meta);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($v$$43$$, $f$$561$$) {
  return $cljs$core$ci_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$(this, $f$$561$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($i$$447_v$$44$$, $G__20900_f$$562$$, $init$$4_len$$7$$) {
  $i$$447_v$$44$$ = 0;
  for (var $G__20898$$inline_754_G__20910$$inline_756_init__$1$$1_init__$2$$inline_752_init__$3$$inline_753$$ = $init$$4_len$$7$$;;) {
    if ($i$$447_v$$44$$ < this.$cnt$) {
      var $G__20912_arr$$82_init__$2$$2$$ = $cljs$core$unchecked_array_for$$(this, $i$$447_v$$44$$);
      $init$$4_len$$7$$ = $G__20912_arr$$82_init__$2$$2$$.length;
      a: {
        for (var $j$$inline_751$$ = 0;;) {
          if ($j$$inline_751$$ < $init$$4_len$$7$$) {
            var $G__20899$$inline_755$$ = $G__20912_arr$$82_init__$2$$2$$[$j$$inline_751$$], $G__20898$$inline_754_G__20910$$inline_756_init__$1$$1_init__$2$$inline_752_init__$3$$inline_753$$ = $G__20900_f$$562$$.$cljs$core$IFn$_invoke$arity$2$ ? $G__20900_f$$562$$.$cljs$core$IFn$_invoke$arity$2$($G__20898$$inline_754_G__20910$$inline_756_init__$1$$1_init__$2$$inline_752_init__$3$$inline_753$$, $G__20899$$inline_755$$) : $G__20900_f$$562$$.call(null, $G__20898$$inline_754_G__20910$$inline_756_init__$1$$1_init__$2$$inline_752_init__$3$$inline_753$$, 
            $G__20899$$inline_755$$);
            if ($cljs$core$reduced_QMARK_$$($G__20898$$inline_754_G__20910$$inline_756_init__$1$$1_init__$2$$inline_752_init__$3$$inline_753$$)) {
              $G__20912_arr$$82_init__$2$$2$$ = $G__20898$$inline_754_G__20910$$inline_756_init__$1$$1_init__$2$$inline_752_init__$3$$inline_753$$;
              break a;
            }
            $j$$inline_751$$ += 1;
          } else {
            $G__20912_arr$$82_init__$2$$2$$ = $G__20898$$inline_754_G__20910$$inline_756_init__$1$$1_init__$2$$inline_752_init__$3$$inline_753$$;
            break a;
          }
        }
      }
      if ($cljs$core$reduced_QMARK_$$($G__20912_arr$$82_init__$2$$2$$)) {
        return $G__20900_f$$562$$ = $G__20912_arr$$82_init__$2$$2$$, $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($G__20900_f$$562$$) : $cljs$core$deref$$.call(null, $G__20900_f$$562$$);
      }
      $i$$447_v$$44$$ += $init$$4_len$$7$$;
      $G__20898$$inline_754_G__20910$$inline_756_init__$1$$1_init__$2$$inline_752_init__$3$$inline_753$$ = $G__20912_arr$$82_init__$2$$2$$;
    } else {
      return $G__20898$$inline_754_G__20910$$inline_756_init__$1$$1_init__$2$$inline_752_init__$3$$inline_753$$;
    }
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$IAssociative$_assoc$arity$3$ = function($coll$$245$$, $k$$168$$, $v$$45$$) {
  if ("number" === typeof $k$$168$$) {
    return $cljs$core$_assoc_n$$(this, $k$$168$$, $v$$45$$);
  }
  throw Error("Vector's key for assoc must be a number.");
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  if (0 === this.$cnt$) {
    return null;
  }
  if (32 >= this.$cnt$) {
    return new $cljs$core$IndexedSeq$$(this.tail, 0);
  }
  var $G__20902_node$$inline_210$$;
  a: {
    $G__20902_node$$inline_210$$ = this.root;
    for (var $G__20880$$inline_212_level$$inline_211$$ = this.shift;;) {
      if (0 < $G__20880$$inline_212_level$$inline_211$$) {
        $G__20880$$inline_212_level$$inline_211$$ -= 5, $G__20902_node$$inline_210$$ = $G__20902_node$$inline_210$$.$arr$[0];
      } else {
        $G__20902_node$$inline_210$$ = $G__20902_node$$inline_210$$.$arr$;
        break a;
      }
    }
  }
  return $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$(this, $G__20902_node$$inline_210$$, 0, 0) : $cljs$core$chunked_seq$$.call(null, this, $G__20902_node$$inline_210$$, 0, 0);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$$247$$, $meta__$1$$4$$) {
  return new $cljs$core$PersistentVector$$($meta__$1$$4$$, this.$cnt$, this.shift, this.root, this.tail, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$$248$$, $o$$277$$) {
  if (32 > this.$cnt$ - $cljs$core$tail_off$$(this)) {
    for (var $len$$8_new_shift$$ = this.tail.length, $JSCompiler_temp$$32_n_r$$inline_214_new_tail$$2_root_overflow_QMARK_$$ = Array($len$$8_new_shift$$ + 1), $i_20914_val$$inline_976$$ = 0;;) {
      if ($i_20914_val$$inline_976$$ < $len$$8_new_shift$$) {
        $JSCompiler_temp$$32_n_r$$inline_214_new_tail$$2_root_overflow_QMARK_$$[$i_20914_val$$inline_976$$] = this.tail[$i_20914_val$$inline_976$$], $i_20914_val$$inline_976$$ += 1;
      } else {
        break;
      }
    }
    $JSCompiler_temp$$32_n_r$$inline_214_new_tail$$2_root_overflow_QMARK_$$[$len$$8_new_shift$$] = $o$$277$$;
    return new $cljs$core$PersistentVector$$(this.meta, this.$cnt$ + 1, this.shift, this.root, $JSCompiler_temp$$32_n_r$$inline_214_new_tail$$2_root_overflow_QMARK_$$, null);
  }
  $len$$8_new_shift$$ = ($JSCompiler_temp$$32_n_r$$inline_214_new_tail$$2_root_overflow_QMARK_$$ = this.$cnt$ >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  $JSCompiler_temp$$32_n_r$$inline_214_new_tail$$2_root_overflow_QMARK_$$ ? ($JSCompiler_temp$$32_n_r$$inline_214_new_tail$$2_root_overflow_QMARK_$$ = $cljs$core$pv_fresh_node$$(null), $JSCompiler_temp$$32_n_r$$inline_214_new_tail$$2_root_overflow_QMARK_$$.$arr$[0] = this.root, $i_20914_val$$inline_976$$ = $cljs$core$new_path$$(null, this.shift, new $cljs$core$VectorNode$$(null, this.tail)), $JSCompiler_temp$$32_n_r$$inline_214_new_tail$$2_root_overflow_QMARK_$$.$arr$[1] = $i_20914_val$$inline_976$$) : 
  $JSCompiler_temp$$32_n_r$$inline_214_new_tail$$2_root_overflow_QMARK_$$ = $cljs$core$push_tail$$(this, this.shift, this.root, new $cljs$core$VectorNode$$(null, this.tail));
  return new $cljs$core$PersistentVector$$(this.meta, this.$cnt$ + 1, $len$$8_new_shift$$, $JSCompiler_temp$$32_n_r$$inline_214_new_tail$$2_root_overflow_QMARK_$$, [$o$$277$$], null);
};
$JSCompiler_prototypeAlias$$.call = function() {
  var $G__20916$$ = null, $G__20916$$ = function($G__20916$$, $k$$171$$, $not_found$$17$$) {
    switch(arguments.length) {
      case 2:
        return this.$cljs$core$IIndexed$_nth$arity$2$(null, $k$$171$$);
      case 3:
        return this.$cljs$core$IIndexed$_nth$arity$3$(null, $k$$171$$, $not_found$$17$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__20916$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__20916$$, $k$$169$$) {
    return this.$cljs$core$IIndexed$_nth$arity$2$(null, $k$$169$$);
  };
  $G__20916$$.$cljs$core$IFn$_invoke$arity$3$ = function($G__20916$$, $k$$170$$, $not_found$$16$$) {
    return this.$cljs$core$IIndexed$_nth$arity$3$(null, $k$$170$$, $not_found$$16$$);
  };
  return $G__20916$$;
}();
$JSCompiler_prototypeAlias$$.apply = function($self__$$327$$, $args20891$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args20891$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($k$$172$$) {
  return this.$cljs$core$IIndexed$_nth$arity$2$(null, $k$$172$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($k$$173$$, $not_found$$18$$) {
  return this.$cljs$core$IIndexed$_nth$arity$3$(null, $k$$173$$, $not_found$$18$$);
};
var $cljs$core$PersistentVector$EMPTY_NODE$$ = new $cljs$core$VectorNode$$(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), $cljs$core$PersistentVector$EMPTY$$ = new $cljs$core$PersistentVector$$(null, 0, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [], $cljs$core$empty_ordered_hash$$);
function $cljs$core$PersistentVector$fromArray$$($xs$$9$$) {
  var $l$$171$$ = $xs$$9$$.length;
  if (32 > $l$$171$$) {
    return new $cljs$core$PersistentVector$$(null, $l$$171$$, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, $xs$$9$$, null);
  }
  for (var $i$$448$$ = 32, $G__20918_out$$ = (new $cljs$core$PersistentVector$$(null, 32, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, $xs$$9$$.slice(0, 32), null)).$cljs$core$IEditableCollection$_as_transient$arity$1$(null);;) {
    if ($i$$448$$ < $l$$171$$) {
      var $G__20917$$ = $i$$448$$ + 1, $G__20918_out$$ = $cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($G__20918_out$$, $xs$$9$$[$i$$448$$]), $i$$448$$ = $G__20917$$
    } else {
      return $cljs$core$_persistent_BANG_$$($G__20918_out$$);
    }
  }
}
$cljs$core$PersistentVector$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$vec$$($coll$$253$$) {
  return $cljs$core$array_QMARK_$$($coll$$253$$) ? $cljs$core$PersistentVector$fromArray$$($coll$$253$$) : $cljs$core$_persistent_BANG_$$($cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($cljs$core$_conj_BANG_$$, $cljs$core$_as_transient$$($cljs$core$PersistentVector$EMPTY$$), $coll$$253$$));
}
var $cljs$core$vector$$ = function $cljs$core$vector$$() {
  return $cljs$core$vector$$.$cljs$core$IFn$_invoke$arity$variadic$(0 < arguments.length ? new $cljs$core$IndexedSeq$$(Array.prototype.slice.call(arguments, 0), 0) : null);
};
$cljs$core$vector$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($args$$81$$) {
  return $args$$81$$ instanceof $cljs$core$IndexedSeq$$ && 0 === $args$$81$$.i ? $cljs$core$PersistentVector$fromArray$$($args$$81$$.$arr$) : $cljs$core$vec$$($args$$81$$);
};
$cljs$core$vector$$.$cljs$lang$maxFixedArity$ = 0;
$cljs$core$vector$$.$cljs$lang$applyTo$ = function($seq20919$$) {
  return $cljs$core$vector$$.$cljs$core$IFn$_invoke$arity$variadic$($cljs$core$seq$$($seq20919$$));
};
function $cljs$core$ChunkedSeq$$($vec$$, $node$$12$$, $i$$449$$, $off$$4$$, $meta$$23$$, $__hash$$10$$) {
  this.$vec$ = $vec$$;
  this.node = $node$$12$$;
  this.i = $i$$449$$;
  this.off = $off$$4$$;
  this.meta = $meta$$23$$;
  this.$__hash$ = $__hash$$10$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 32375020;
  this.$cljs$lang$protocol_mask$partition1$$ = 1536;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$ChunkedSeq$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$$29$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$$29$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.meta;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  if (this.off + 1 < this.node.length) {
    var $G__20920$$inline_216_s$$181$$;
    $G__20920$$inline_216_s$$181$$ = this.$vec$;
    var $G__20921$$inline_217$$ = this.node, $G__20922$$inline_218$$ = this.i, $G__20923$$inline_219$$ = this.off + 1;
    $G__20920$$inline_216_s$$181$$ = $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$($G__20920$$inline_216_s$$181$$, $G__20921$$inline_217$$, $G__20922$$inline_218$$, $G__20923$$inline_219$$) : $cljs$core$chunked_seq$$.call(null, $G__20920$$inline_216_s$$181$$, $G__20921$$inline_217$$, $G__20922$$inline_218$$, $G__20923$$inline_219$$);
    return null == $G__20920$$inline_216_s$$181$$ ? null : $G__20920$$inline_216_s$$181$$;
  }
  return $cljs$core$_chunked_next$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4667__auto__$$7_h__4667__auto____$1$$7$$ = this.$__hash$;
  return null != $h__4667__auto__$$7_h__4667__auto____$1$$7$$ ? $h__4667__auto__$$7_h__4667__auto____$1$$7$$ : this.$__hash$ = $h__4667__auto__$$7_h__4667__auto____$1$$7$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$$258$$, $other$$30$$) {
  return $cljs$core$equiv_sequential$$(this, $other$$30$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$with_meta$$($cljs$core$PersistentVector$EMPTY$$, this.meta);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$$260$$, $f$$563$$) {
  var $G__20924$$inline_221_JSCompiler_inline_result$$34$$;
  $G__20924$$inline_221_JSCompiler_inline_result$$34$$ = this.$vec$;
  var $G__20925$$inline_222$$ = this.i + this.off, $G__20926$$inline_223$$ = $cljs$core$count$$(this.$vec$);
  $G__20924$$inline_221_JSCompiler_inline_result$$34$$ = $cljs$core$subvec$cljs$0core$0IFn$0_invoke$0arity$03$$ ? $cljs$core$subvec$cljs$0core$0IFn$0_invoke$0arity$03$$($G__20924$$inline_221_JSCompiler_inline_result$$34$$, $G__20925$$inline_222$$, $G__20926$$inline_223$$) : $cljs$core$subvec$$.call(null, $G__20924$$inline_221_JSCompiler_inline_result$$34$$, $G__20925$$inline_222$$, $G__20926$$inline_223$$);
  return $cljs$core$ci_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($G__20924$$inline_221_JSCompiler_inline_result$$34$$, $f$$563$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($G__20927$$inline_225_JSCompiler_inline_result$$36_coll$$261$$, $f$$564$$, $start$$21$$) {
  $G__20927$$inline_225_JSCompiler_inline_result$$36_coll$$261$$ = this.$vec$;
  var $G__20928$$inline_226$$ = this.i + this.off, $G__20929$$inline_227$$ = $cljs$core$count$$(this.$vec$);
  $G__20927$$inline_225_JSCompiler_inline_result$$36_coll$$261$$ = $cljs$core$subvec$cljs$0core$0IFn$0_invoke$0arity$03$$ ? $cljs$core$subvec$cljs$0core$0IFn$0_invoke$0arity$03$$($G__20927$$inline_225_JSCompiler_inline_result$$36_coll$$261$$, $G__20928$$inline_226$$, $G__20929$$inline_227$$) : $cljs$core$subvec$$.call(null, $G__20927$$inline_225_JSCompiler_inline_result$$36_coll$$261$$, $G__20928$$inline_226$$, $G__20929$$inline_227$$);
  return $cljs$core$ci_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($G__20927$$inline_225_JSCompiler_inline_result$$36_coll$$261$$, $f$$564$$, $start$$21$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return this.node[this.off];
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  if (this.off + 1 < this.node.length) {
    var $G__20930$$inline_229_s$$182$$;
    $G__20930$$inline_229_s$$182$$ = this.$vec$;
    var $G__20931$$inline_230$$ = this.node, $G__20932$$inline_231$$ = this.i, $G__20933$$inline_232$$ = this.off + 1;
    $G__20930$$inline_229_s$$182$$ = $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$($G__20930$$inline_229_s$$182$$, $G__20931$$inline_230$$, $G__20932$$inline_231$$, $G__20933$$inline_232$$) : $cljs$core$chunked_seq$$.call(null, $G__20930$$inline_229_s$$182$$, $G__20931$$inline_230$$, $G__20932$$inline_231$$, $G__20933$$inline_232$$);
    return null == $G__20930$$inline_229_s$$182$$ ? $cljs$core$List$EMPTY$$ : $G__20930$$inline_229_s$$182$$;
  }
  return $cljs$core$_chunked_rest$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IChunkedSeq$_chunked_first$arity$1$ = function() {
  var $arr$$inline_234$$ = this.node;
  return new $cljs$core$ArrayChunk$$($arr$$inline_234$$, this.off, $arr$$inline_234$$.length);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IChunkedSeq$_chunked_rest$arity$1$ = function() {
  var $end$$13$$ = this.i + this.node.length;
  if ($end$$13$$ < $cljs$core$_count$$(this.$vec$)) {
    var $G__20934$$ = this.$vec$, $G__20935$$ = $cljs$core$unchecked_array_for$$(this.$vec$, $end$$13$$);
    return $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$($G__20934$$, $G__20935$$, $end$$13$$, 0) : $cljs$core$chunked_seq$$.call(null, $G__20934$$, $G__20935$$, $end$$13$$, 0);
  }
  return $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$$267$$, $m$$121$$) {
  var $G__20938$$ = this.$vec$, $G__20939$$ = this.node, $G__20940$$ = this.i, $G__20941$$ = this.off;
  return $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$05$$ ? $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$05$$($G__20938$$, $G__20939$$, $G__20940$$, $G__20941$$, $m$$121$$) : $cljs$core$chunked_seq$$.call(null, $G__20938$$, $G__20939$$, $G__20940$$, $G__20941$$, $m$$121$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$$268$$, $o$$278$$) {
  return $cljs$core$cons$$($o$$278$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IChunkedNext$_chunked_next$arity$1$ = function() {
  var $end$$14$$ = this.i + this.node.length;
  if ($end$$14$$ < $cljs$core$_count$$(this.$vec$)) {
    var $G__20943$$ = this.$vec$, $G__20944$$ = $cljs$core$unchecked_array_for$$(this.$vec$, $end$$14$$);
    return $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$($G__20943$$, $G__20944$$, $end$$14$$, 0) : $cljs$core$chunked_seq$$.call(null, $G__20943$$, $G__20944$$, $end$$14$$, 0);
  }
  return null;
};
$cljs$core$ChunkedSeq$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$chunked_seq$$() {
  switch(arguments.length) {
    case 3:
      var $vec$$inline_237$$ = arguments[0], $i$$inline_238$$ = arguments[1], $off$$inline_239$$ = arguments[2];
      return new $cljs$core$ChunkedSeq$$($vec$$inline_237$$, $cljs$core$array_for$$($vec$$inline_237$$, $i$$inline_238$$), $i$$inline_238$$, $off$$inline_239$$, null, null);
    case 4:
      return $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$05$$(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([$cljs$core$str$$("Invalid arity: "), $cljs$core$str$$(arguments.length)].join(""));;
  }
}
function $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$($vec$$3$$, $node$$14$$, $i$$452$$, $off$$7$$) {
  return new $cljs$core$ChunkedSeq$$($vec$$3$$, $node$$14$$, $i$$452$$, $off$$7$$, null, null);
}
function $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$05$$($vec$$4$$, $node$$15$$, $i$$453$$, $off$$8$$, $meta$$25$$) {
  return new $cljs$core$ChunkedSeq$$($vec$$4$$, $node$$15$$, $i$$453$$, $off$$8$$, $meta$$25$$, null);
}
function $cljs$core$Subvec$$($meta$$26$$, $v$$47$$, $start$$22$$, $end$$15$$, $__hash$$12$$) {
  this.meta = $meta$$26$$;
  this.$v$ = $v$$47$$;
  this.start = $start$$22$$;
  this.end = $end$$15$$;
  this.$__hash$ = $__hash$$12$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 167666463;
  this.$cljs$lang$protocol_mask$partition1$$ = 8192;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$Subvec$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$$31$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$$31$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($coll$$271$$, $k$$174$$) {
  return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$(this, $k$$174$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($coll$$272$$, $k$$175$$, $not_found$$19$$) {
  return "number" === typeof $k$$175$$ ? $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$3$(this, $k$$175$$, $not_found$$19$$) : $not_found$$19$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IKVReduce$_kv_reduce$arity$3$ = function($coll$$273_i$$454$$, $G__20954_f$$565$$, $G__20951$$inline_241_G__20978_init$$5_init__$1$$2_init__$2$$4$$) {
  $coll$$273_i$$454$$ = this.start;
  for (var $G__20977_j$$171$$ = 0;;) {
    if ($coll$$273_i$$454$$ < this.end) {
      var $G__20952$$inline_242$$ = $G__20977_j$$171$$, $G__20953$$inline_243$$ = $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$(this.$v$, $coll$$273_i$$454$$);
      $G__20951$$inline_241_G__20978_init$$5_init__$1$$2_init__$2$$4$$ = $G__20954_f$$565$$.$cljs$core$IFn$_invoke$arity$3$ ? $G__20954_f$$565$$.$cljs$core$IFn$_invoke$arity$3$($G__20951$$inline_241_G__20978_init$$5_init__$1$$2_init__$2$$4$$, $G__20952$$inline_242$$, $G__20953$$inline_243$$) : $G__20954_f$$565$$.call(null, $G__20951$$inline_241_G__20978_init$$5_init__$1$$2_init__$2$$4$$, $G__20952$$inline_242$$, $G__20953$$inline_243$$);
      if ($cljs$core$reduced_QMARK_$$($G__20951$$inline_241_G__20978_init$$5_init__$1$$2_init__$2$$4$$)) {
        return $G__20954_f$$565$$ = $G__20951$$inline_241_G__20978_init$$5_init__$1$$2_init__$2$$4$$, $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($G__20954_f$$565$$) : $cljs$core$deref$$.call(null, $G__20954_f$$565$$);
      }
      $G__20977_j$$171$$ += 1;
      $coll$$273_i$$454$$ += 1;
    } else {
      return $G__20951$$inline_241_G__20978_init$$5_init__$1$$2_init__$2$$4$$;
    }
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$2$ = function($coll$$274$$, $n$$623$$) {
  return 0 > $n$$623$$ || this.end <= this.start + $n$$623$$ ? $cljs$core$vector_index_out_of_bounds$$($n$$623$$, this.end - this.start) : $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$(this.$v$, this.start + $n$$623$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$3$ = function($coll$$275$$, $n$$624$$, $not_found$$20$$) {
  return 0 > $n$$624$$ || this.end <= this.start + $n$$624$$ ? $not_found$$20$$ : $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$3$(this.$v$, this.start + $n$$624$$, $not_found$$20$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IVector$_assoc_n$arity$3$ = function($G__20955_coll$$276$$, $G__20957_n$$625$$, $G__20956_val$$52$$) {
  var $G__20958_v_pos_y__4564__auto__$$inline_246$$ = this.start + $G__20957_n$$625$$;
  $G__20955_coll$$276$$ = this.meta;
  $G__20956_val$$52$$ = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$(this.$v$, $G__20958_v_pos_y__4564__auto__$$inline_246$$, $G__20956_val$$52$$);
  $G__20957_n$$625$$ = this.start;
  var $x__4563__auto__$$inline_245$$ = this.end, $G__20958_v_pos_y__4564__auto__$$inline_246$$ = $G__20958_v_pos_y__4564__auto__$$inline_246$$ + 1, $G__20958_v_pos_y__4564__auto__$$inline_246$$ = $x__4563__auto__$$inline_245$$ > $G__20958_v_pos_y__4564__auto__$$inline_246$$ ? $x__4563__auto__$$inline_245$$ : $G__20958_v_pos_y__4564__auto__$$inline_246$$;
  return $cljs$core$build_subvec$$.$cljs$core$IFn$_invoke$arity$5$ ? $cljs$core$build_subvec$$.$cljs$core$IFn$_invoke$arity$5$($G__20955_coll$$276$$, $G__20956_val$$52$$, $G__20957_n$$625$$, $G__20958_v_pos_y__4564__auto__$$inline_246$$, null) : $cljs$core$build_subvec$$.call(null, $G__20955_coll$$276$$, $G__20956_val$$52$$, $G__20957_n$$625$$, $G__20958_v_pos_y__4564__auto__$$inline_246$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.meta;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return this.end - this.start;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IStack$_peek$arity$1$ = function() {
  return $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$(this.$v$, this.end - 1);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IStack$_pop$arity$1$ = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  var $G__20960$$ = this.meta, $G__20961$$ = this.$v$, $G__20962$$ = this.start, $G__20963$$ = this.end - 1;
  return $cljs$core$build_subvec$$.$cljs$core$IFn$_invoke$arity$5$ ? $cljs$core$build_subvec$$.$cljs$core$IFn$_invoke$arity$5$($G__20960$$, $G__20961$$, $G__20962$$, $G__20963$$, null) : $cljs$core$build_subvec$$.call(null, $G__20960$$, $G__20961$$, $G__20962$$, $G__20963$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4667__auto__$$8_h__4667__auto____$1$$8$$ = this.$__hash$;
  return null != $h__4667__auto__$$8_h__4667__auto____$1$$8$$ ? $h__4667__auto__$$8_h__4667__auto____$1$$8$$ : this.$__hash$ = $h__4667__auto__$$8_h__4667__auto____$1$$8$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$$283$$, $other$$32$$) {
  return $cljs$core$equiv_sequential$$(this, $other$$32$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$with_meta$$($cljs$core$PersistentVector$EMPTY$$, this.meta);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$$285$$, $f$$566$$) {
  return $cljs$core$ci_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$(this, $f$$566$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$$286$$, $f$$567$$, $start__$1$$) {
  return $cljs$core$ci_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $f$$567$$, $start__$1$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IAssociative$_assoc$arity$3$ = function($coll$$287$$, $key$$65$$, $val$$53$$) {
  if ("number" === typeof $key$$65$$) {
    return $cljs$core$_assoc_n$$(this, $key$$65$$, $val$$53$$);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  var $self__$$367$$ = this;
  return function($coll__$1$$153$$) {
    return function $cljs$core$subvec_seq$$($i$$455$$) {
      return $i$$455$$ === $self__$$367$$.end ? null : $cljs$core$cons$$($cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($self__$$367$$.$v$, $i$$455$$), new $cljs$core$LazySeq$$(null, function() {
        return function() {
          return $cljs$core$subvec_seq$$($i$$455$$ + 1);
        };
      }($coll__$1$$153$$), null, null));
    };
  }(this)($self__$$367$$.start);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$$289$$, $meta__$1$$5$$) {
  var $G__20967$$ = this.$v$, $G__20968$$ = this.start, $G__20969$$ = this.end, $G__20970$$ = this.$__hash$;
  return $cljs$core$build_subvec$$.$cljs$core$IFn$_invoke$arity$5$ ? $cljs$core$build_subvec$$.$cljs$core$IFn$_invoke$arity$5$($meta__$1$$5$$, $G__20967$$, $G__20968$$, $G__20969$$, $G__20970$$) : $cljs$core$build_subvec$$.call(null, $meta__$1$$5$$, $G__20967$$, $G__20968$$, $G__20969$$, $G__20970$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$$290$$, $o$$279$$) {
  var $G__20971$$ = this.meta, $G__20972$$ = $cljs$core$_assoc_n$$(this.$v$, this.end, $o$$279$$), $G__20973$$ = this.start, $G__20974$$ = this.end + 1;
  return $cljs$core$build_subvec$$.$cljs$core$IFn$_invoke$arity$5$ ? $cljs$core$build_subvec$$.$cljs$core$IFn$_invoke$arity$5$($G__20971$$, $G__20972$$, $G__20973$$, $G__20974$$, null) : $cljs$core$build_subvec$$.call(null, $G__20971$$, $G__20972$$, $G__20973$$, $G__20974$$, null);
};
$JSCompiler_prototypeAlias$$.call = function() {
  var $G__20979$$ = null, $G__20979$$ = function($G__20979$$, $k$$178$$, $not_found$$22$$) {
    switch(arguments.length) {
      case 2:
        return this.$cljs$core$IIndexed$_nth$arity$2$(null, $k$$178$$);
      case 3:
        return this.$cljs$core$IIndexed$_nth$arity$3$(null, $k$$178$$, $not_found$$22$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__20979$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__20979$$, $k$$176$$) {
    return this.$cljs$core$IIndexed$_nth$arity$2$(null, $k$$176$$);
  };
  $G__20979$$.$cljs$core$IFn$_invoke$arity$3$ = function($G__20979$$, $k$$177$$, $not_found$$21$$) {
    return this.$cljs$core$IIndexed$_nth$arity$3$(null, $k$$177$$, $not_found$$21$$);
  };
  return $G__20979$$;
}();
$JSCompiler_prototypeAlias$$.apply = function($self__$$373$$, $args20950$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args20950$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($k$$179$$) {
  return this.$cljs$core$IIndexed$_nth$arity$2$(null, $k$$179$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($k$$180$$, $not_found$$23$$) {
  return this.$cljs$core$IIndexed$_nth$arity$3$(null, $k$$180$$, $not_found$$23$$);
};
$cljs$core$Subvec$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$build_subvec$$($meta$$28$$, $v$$49$$, $G__20982_start$$24$$, $G__20983_end$$17$$, $G__20984___hash$$14$$) {
  for (;;) {
    if ($v$$49$$ instanceof $cljs$core$Subvec$$) {
      $G__20982_start$$24$$ = $v$$49$$.start + $G__20982_start$$24$$, $G__20983_end$$17$$ = $v$$49$$.start + $G__20983_end$$17$$, $v$$49$$ = $v$$49$$.$v$;
    } else {
      var $c$$897$$ = $cljs$core$count$$($v$$49$$);
      if (0 > $G__20982_start$$24$$ || 0 > $G__20983_end$$17$$ || $G__20982_start$$24$$ > $c$$897$$ || $G__20983_end$$17$$ > $c$$897$$) {
        throw Error("Index out of bounds");
      }
      return new $cljs$core$Subvec$$($meta$$28$$, $v$$49$$, $G__20982_start$$24$$, $G__20983_end$$17$$, $G__20984___hash$$14$$);
    }
  }
}
function $cljs$core$subvec$$() {
  switch(arguments.length) {
    case 2:
      var $v$$inline_248$$ = arguments[0];
      return $cljs$core$subvec$cljs$0core$0IFn$0_invoke$0arity$03$$($v$$inline_248$$, arguments[1], $cljs$core$count$$($v$$inline_248$$));
    case 3:
      return $cljs$core$subvec$cljs$0core$0IFn$0_invoke$0arity$03$$(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([$cljs$core$str$$("Invalid arity: "), $cljs$core$str$$(arguments.length)].join(""));;
  }
}
function $cljs$core$subvec$cljs$0core$0IFn$0_invoke$0arity$03$$($v$$51$$, $start$$26$$, $end$$18$$) {
  return $cljs$core$build_subvec$$(null, $v$$51$$, $start$$26$$, $end$$18$$, null);
}
function $cljs$core$tv_ensure_editable$$($edit$$4$$, $node$$16$$) {
  return $edit$$4$$ === $node$$16$$.$edit$ ? $node$$16$$ : new $cljs$core$VectorNode$$($edit$$4$$, $cljs$core$aclone$$($node$$16$$.$arr$));
}
function $cljs$core$tv_editable_root$$($node$$17$$) {
  return new $cljs$core$VectorNode$$({}, $cljs$core$aclone$$($node$$17$$.$arr$));
}
function $cljs$core$tv_editable_tail$$($tl$$) {
  var $ret$$16$$ = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  $cljs$core$array_copy$$($tl$$, 0, $ret$$16$$, 0, $tl$$.length);
  return $ret$$16$$;
}
var $cljs$core$tv_push_tail$$ = function $cljs$core$tv_push_tail$$($JSCompiler_temp$$39_tv$$, $level$$13$$, $parent$$3_ret$$17$$, $tail_node$$) {
  $parent$$3_ret$$17$$ = $cljs$core$tv_ensure_editable$$($JSCompiler_temp$$39_tv$$.root.$edit$, $parent$$3_ret$$17$$);
  var $subidx$$3$$ = $JSCompiler_temp$$39_tv$$.$cnt$ - 1 >>> $level$$13$$ & 31;
  if (5 === $level$$13$$) {
    $JSCompiler_temp$$39_tv$$ = $tail_node$$;
  } else {
    var $child$$inline_251$$ = $parent$$3_ret$$17$$.$arr$[$subidx$$3$$];
    $JSCompiler_temp$$39_tv$$ = null != $child$$inline_251$$ ? $cljs$core$tv_push_tail$$($JSCompiler_temp$$39_tv$$, $level$$13$$ - 5, $child$$inline_251$$, $tail_node$$) : $cljs$core$new_path$$($JSCompiler_temp$$39_tv$$.root.$edit$, $level$$13$$ - 5, $tail_node$$);
  }
  $parent$$3_ret$$17$$.$arr$[$subidx$$3$$] = $JSCompiler_temp$$39_tv$$;
  return $parent$$3_ret$$17$$;
};
function $cljs$core$TransientVector$$($cnt$$10$$, $shift$$2$$, $root$$6$$, $tail$$2$$) {
  this.$cnt$ = $cnt$$10$$;
  this.shift = $shift$$2$$;
  this.root = $root$$6$$;
  this.tail = $tail$$2$$;
  this.$cljs$lang$protocol_mask$partition1$$ = 88;
  this.$cljs$lang$protocol_mask$partition0$$ = 275;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$TransientVector$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientCollection$_conj_BANG_$arity$2$ = function($tcoll$$17$$, $o$$280$$) {
  if (this.root.$edit$) {
    if (32 > this.$cnt$ - $cljs$core$tail_off$$(this)) {
      this.tail[this.$cnt$ & 31] = $o$$280$$;
    } else {
      var $tail_node$$1$$ = new $cljs$core$VectorNode$$(this.root.$edit$, this.tail), $new_root_array_new_tail$$3$$ = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      $new_root_array_new_tail$$3$$[0] = $o$$280$$;
      this.tail = $new_root_array_new_tail$$3$$;
      if (this.$cnt$ >>> 5 > 1 << this.shift) {
        var $new_root_array_new_tail$$3$$ = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], $new_shift$$1$$ = this.shift + 5;
        $new_root_array_new_tail$$3$$[0] = this.root;
        $new_root_array_new_tail$$3$$[1] = $cljs$core$new_path$$(this.root.$edit$, this.shift, $tail_node$$1$$);
        this.root = new $cljs$core$VectorNode$$(this.root.$edit$, $new_root_array_new_tail$$3$$);
        this.shift = $new_shift$$1$$;
      } else {
        this.root = $cljs$core$tv_push_tail$$(this, this.shift, this.root, $tail_node$$1$$);
      }
    }
    this.$cnt$ += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientCollection$_persistent_BANG_$arity$1$ = function() {
  if (this.root.$edit$) {
    this.root.$edit$ = null;
    var $len$$9$$ = this.$cnt$ - $cljs$core$tail_off$$(this), $trimmed_tail$$ = Array($len$$9$$);
    $cljs$core$array_copy$$(this.tail, 0, $trimmed_tail$$, 0, $len$$9$$);
    return new $cljs$core$PersistentVector$$(null, this.$cnt$, this.shift, this.root, $trimmed_tail$$, null);
  }
  throw Error("persistent! called twice");
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientAssociative$_assoc_BANG_$arity$3$ = function($tcoll$$19$$, $key$$66$$, $val$$54$$) {
  if ("number" === typeof $key$$66$$) {
    return $cljs$core$_assoc_n_BANG_$$(this, $key$$66$$, $val$$54$$);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$ = function($new_root$$3_tcoll$$20$$, $n$$626$$, $val$$55$$) {
  var $self__$$379$$ = this;
  if ($self__$$379$$.root.$edit$) {
    if (0 <= $n$$626$$ && $n$$626$$ < $self__$$379$$.$cnt$) {
      return $cljs$core$tail_off$$(this) <= $n$$626$$ ? $self__$$379$$.tail[$n$$626$$ & 31] = $val$$55$$ : ($new_root$$3_tcoll$$20$$ = function() {
        return function $cljs$core$go$$($new_root$$3_tcoll$$20$$, $node$$20$$) {
          var $node__$1$$1$$ = $cljs$core$tv_ensure_editable$$($self__$$379$$.root.$edit$, $node$$20$$);
          if (0 === $new_root$$3_tcoll$$20$$) {
            $node__$1$$1$$.$arr$[$n$$626$$ & 31] = $val$$55$$;
          } else {
            var $subidx$$5$$ = $n$$626$$ >>> $new_root$$3_tcoll$$20$$ & 31, $val$$inline_984$$ = $cljs$core$go$$($new_root$$3_tcoll$$20$$ - 5, $node__$1$$1$$.$arr$[$subidx$$5$$]);
            $node__$1$$1$$.$arr$[$subidx$$5$$] = $val$$inline_984$$;
          }
          return $node__$1$$1$$;
        };
      }(this).call(null, $self__$$379$$.shift, $self__$$379$$.root), $self__$$379$$.root = $new_root$$3_tcoll$$20$$), this;
    }
    if ($n$$626$$ === $self__$$379$$.$cnt$) {
      return $cljs$core$_conj_BANG_$$(this, $val$$55$$);
    }
    throw Error([$cljs$core$str$$("Index "), $cljs$core$str$$($n$$626$$), $cljs$core$str$$(" out of bounds for TransientVector of length"), $cljs$core$str$$($self__$$379$$.$cnt$)].join(""));
  }
  throw Error("assoc! after persistent!");
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  if (this.root.$edit$) {
    return this.$cnt$;
  }
  throw Error("count after persistent!");
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$2$ = function($coll$$296$$, $n$$627$$) {
  if (this.root.$edit$) {
    return $cljs$core$array_for$$(this, $n$$627$$)[$n$$627$$ & 31];
  }
  throw Error("nth after persistent!");
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$3$ = function($coll$$297$$, $n$$628$$, $not_found$$24$$) {
  return 0 <= $n$$628$$ && $n$$628$$ < this.$cnt$ ? $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$(this, $n$$628$$) : $not_found$$24$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($coll$$298$$, $k$$181$$) {
  return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$(this, $k$$181$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($coll$$299$$, $k$$182$$, $not_found$$25$$) {
  return "number" === typeof $k$$182$$ ? $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$3$(this, $k$$182$$, $not_found$$25$$) : $not_found$$25$$;
};
$JSCompiler_prototypeAlias$$.call = function() {
  var $G__21004$$ = null, $G__21004$$ = function($G__21004$$, $k$$185$$, $not_found$$27$$) {
    switch(arguments.length) {
      case 2:
        return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$$185$$);
      case 3:
        return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$$185$$, $not_found$$27$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__21004$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__21004$$, $k$$183$$) {
    return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$$183$$);
  };
  $G__21004$$.$cljs$core$IFn$_invoke$arity$3$ = function($G__21004$$, $k$$184$$, $not_found$$26$$) {
    return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$$184$$, $not_found$$26$$);
  };
  return $G__21004$$;
}();
$JSCompiler_prototypeAlias$$.apply = function($self__$$389$$, $args21001$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args21001$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($k$$186$$) {
  return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$$186$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($k$$187$$, $not_found$$28$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$$187$$, $not_found$$28$$);
};
function $cljs$core$NeverEquiv$$() {
  this.$cljs$lang$protocol_mask$partition0$$ = 2097152;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$cljs$core$NeverEquiv$$.prototype.equiv = function($other$$37$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$$37$$);
};
$cljs$core$NeverEquiv$$.prototype.$cljs$core$IEquiv$_equiv$arity$2$ = function() {
  return !1;
};
var $cljs$core$never_equiv$$ = new $cljs$core$NeverEquiv$$;
function $cljs$core$equiv_map$$($x$$374$$, $y$$217$$) {
  return $cljs$core$boolean$0$$($cljs$core$map_QMARK_$$($y$$217$$) ? $cljs$core$count$$($x$$374$$) === $cljs$core$count$$($y$$217$$) ? $cljs$core$every_QMARK_$$($cljs$core$identity$$, $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($x$$374$$) {
    return $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($y$$217$$, $cljs$core$first$$($x$$374$$), $cljs$core$never_equiv$$), $cljs$core$first$$($cljs$core$next$$($x$$374$$)));
  }, $x$$374$$)) : null : null);
}
function $cljs$core$ES6EntriesIterator$$($s$$183$$) {
  this.s = $s$$183$$;
}
$cljs$core$ES6EntriesIterator$$.prototype.next = function() {
  if (null != this.s) {
    var $v$$54_vec__21033$$ = $cljs$core$first$$(this.s), $k$$201$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($v$$54_vec__21033$$, 0), $v$$54_vec__21033$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($v$$54_vec__21033$$, 1);
    this.s = $cljs$core$next$$(this.s);
    return {value:[$k$$201$$, $v$$54_vec__21033$$], done:!1};
  }
  return {value:null, done:!0};
};
function $cljs$core$es6_entries_iterator$$($coll$$348$$) {
  return new $cljs$core$ES6EntriesIterator$$($cljs$core$seq$$($coll$$348$$));
}
function $cljs$core$ES6SetEntriesIterator$$($s$$185$$) {
  this.s = $s$$185$$;
}
$cljs$core$ES6SetEntriesIterator$$.prototype.next = function() {
  if (null != this.s) {
    var $x$$375$$ = $cljs$core$first$$(this.s);
    this.s = $cljs$core$next$$(this.s);
    return {value:[$x$$375$$, $x$$375$$], done:!1};
  }
  return {value:null, done:!0};
};
function $cljs$core$array_index_of$$($arr$$88$$, $k$$206$$) {
  var $JSCompiler_temp$$518_JSCompiler_temp$$958_JSCompiler_temp$$959_JSCompiler_temp$$960_len$$inline_1000_len$$inline_1006_len$$inline_1011_len$$inline_988_len$$inline_995_or__4251__auto__$$inline_758$$;
  if ($k$$206$$ instanceof $cljs$core$Keyword$$) {
    a: {
      $JSCompiler_temp$$518_JSCompiler_temp$$958_JSCompiler_temp$$959_JSCompiler_temp$$960_len$$inline_1000_len$$inline_1006_len$$inline_1011_len$$inline_988_len$$inline_995_or__4251__auto__$$inline_758$$ = $arr$$88$$.length;
      for (var $i$$inline_1007_i$$inline_1012_i$$inline_996_kstr$$inline_1001_kstr$$inline_989$$ = $k$$206$$.$fqn$, $i$$inline_1002_i$$inline_990$$ = 0;;) {
        if ($JSCompiler_temp$$518_JSCompiler_temp$$958_JSCompiler_temp$$959_JSCompiler_temp$$960_len$$inline_1000_len$$inline_1006_len$$inline_1011_len$$inline_988_len$$inline_995_or__4251__auto__$$inline_758$$ <= $i$$inline_1002_i$$inline_990$$) {
          $JSCompiler_temp$$518_JSCompiler_temp$$958_JSCompiler_temp$$959_JSCompiler_temp$$960_len$$inline_1000_len$$inline_1006_len$$inline_1011_len$$inline_988_len$$inline_995_or__4251__auto__$$inline_758$$ = -1;
          break a;
        }
        var $k_SINGLEQUOTE_$$inline_1003_k_SINGLEQUOTE_$$inline_991$$ = $arr$$88$$[$i$$inline_1002_i$$inline_990$$];
        if ($k_SINGLEQUOTE_$$inline_1003_k_SINGLEQUOTE_$$inline_991$$ instanceof $cljs$core$Keyword$$ && $i$$inline_1007_i$$inline_1012_i$$inline_996_kstr$$inline_1001_kstr$$inline_989$$ === $k_SINGLEQUOTE_$$inline_1003_k_SINGLEQUOTE_$$inline_991$$.$fqn$) {
          $JSCompiler_temp$$518_JSCompiler_temp$$958_JSCompiler_temp$$959_JSCompiler_temp$$960_len$$inline_1000_len$$inline_1006_len$$inline_1011_len$$inline_988_len$$inline_995_or__4251__auto__$$inline_758$$ = $i$$inline_1002_i$$inline_990$$;
          break a;
        }
        $i$$inline_1002_i$$inline_990$$ += 2;
      }
    }
  } else {
    if ($JSCompiler_temp$$518_JSCompiler_temp$$958_JSCompiler_temp$$959_JSCompiler_temp$$960_len$$inline_1000_len$$inline_1006_len$$inline_1011_len$$inline_988_len$$inline_995_or__4251__auto__$$inline_758$$ = "string" == typeof $k$$206$$, $cljs$core$truth_$$($cljs$core$truth_$$($JSCompiler_temp$$518_JSCompiler_temp$$958_JSCompiler_temp$$959_JSCompiler_temp$$960_len$$inline_1000_len$$inline_1006_len$$inline_1011_len$$inline_988_len$$inline_995_or__4251__auto__$$inline_758$$) ? $JSCompiler_temp$$518_JSCompiler_temp$$958_JSCompiler_temp$$959_JSCompiler_temp$$960_len$$inline_1000_len$$inline_1006_len$$inline_1011_len$$inline_988_len$$inline_995_or__4251__auto__$$inline_758$$ : 
    "number" === typeof $k$$206$$)) {
      a: {
        for ($JSCompiler_temp$$518_JSCompiler_temp$$958_JSCompiler_temp$$959_JSCompiler_temp$$960_len$$inline_1000_len$$inline_1006_len$$inline_1011_len$$inline_988_len$$inline_995_or__4251__auto__$$inline_758$$ = $arr$$88$$.length, $i$$inline_1007_i$$inline_1012_i$$inline_996_kstr$$inline_1001_kstr$$inline_989$$ = 0;;) {
          if ($JSCompiler_temp$$518_JSCompiler_temp$$958_JSCompiler_temp$$959_JSCompiler_temp$$960_len$$inline_1000_len$$inline_1006_len$$inline_1011_len$$inline_988_len$$inline_995_or__4251__auto__$$inline_758$$ <= $i$$inline_1007_i$$inline_1012_i$$inline_996_kstr$$inline_1001_kstr$$inline_989$$) {
            $JSCompiler_temp$$518_JSCompiler_temp$$958_JSCompiler_temp$$959_JSCompiler_temp$$960_len$$inline_1000_len$$inline_1006_len$$inline_1011_len$$inline_988_len$$inline_995_or__4251__auto__$$inline_758$$ = -1;
            break a;
          }
          if ($k$$206$$ === $arr$$88$$[$i$$inline_1007_i$$inline_1012_i$$inline_996_kstr$$inline_1001_kstr$$inline_989$$]) {
            $JSCompiler_temp$$518_JSCompiler_temp$$958_JSCompiler_temp$$959_JSCompiler_temp$$960_len$$inline_1000_len$$inline_1006_len$$inline_1011_len$$inline_988_len$$inline_995_or__4251__auto__$$inline_758$$ = $i$$inline_1007_i$$inline_1012_i$$inline_996_kstr$$inline_1001_kstr$$inline_989$$;
            break a;
          }
          $i$$inline_1007_i$$inline_1012_i$$inline_996_kstr$$inline_1001_kstr$$inline_989$$ += 2;
        }
      }
    } else {
      if ($k$$206$$ instanceof $cljs$core$Symbol$$) {
        a: {
          for ($JSCompiler_temp$$518_JSCompiler_temp$$958_JSCompiler_temp$$959_JSCompiler_temp$$960_len$$inline_1000_len$$inline_1006_len$$inline_1011_len$$inline_988_len$$inline_995_or__4251__auto__$$inline_758$$ = $arr$$88$$.length, $i$$inline_1007_i$$inline_1012_i$$inline_996_kstr$$inline_1001_kstr$$inline_989$$ = $k$$206$$.$str$, $i$$inline_1002_i$$inline_990$$ = 0;;) {
            if ($JSCompiler_temp$$518_JSCompiler_temp$$958_JSCompiler_temp$$959_JSCompiler_temp$$960_len$$inline_1000_len$$inline_1006_len$$inline_1011_len$$inline_988_len$$inline_995_or__4251__auto__$$inline_758$$ <= $i$$inline_1002_i$$inline_990$$) {
              $JSCompiler_temp$$518_JSCompiler_temp$$958_JSCompiler_temp$$959_JSCompiler_temp$$960_len$$inline_1000_len$$inline_1006_len$$inline_1011_len$$inline_988_len$$inline_995_or__4251__auto__$$inline_758$$ = -1;
              break a;
            }
            $k_SINGLEQUOTE_$$inline_1003_k_SINGLEQUOTE_$$inline_991$$ = $arr$$88$$[$i$$inline_1002_i$$inline_990$$];
            if ($k_SINGLEQUOTE_$$inline_1003_k_SINGLEQUOTE_$$inline_991$$ instanceof $cljs$core$Symbol$$ && $i$$inline_1007_i$$inline_1012_i$$inline_996_kstr$$inline_1001_kstr$$inline_989$$ === $k_SINGLEQUOTE_$$inline_1003_k_SINGLEQUOTE_$$inline_991$$.$str$) {
              $JSCompiler_temp$$518_JSCompiler_temp$$958_JSCompiler_temp$$959_JSCompiler_temp$$960_len$$inline_1000_len$$inline_1006_len$$inline_1011_len$$inline_988_len$$inline_995_or__4251__auto__$$inline_758$$ = $i$$inline_1002_i$$inline_990$$;
              break a;
            }
            $i$$inline_1002_i$$inline_990$$ += 2;
          }
        }
      } else {
        if (null == $k$$206$$) {
          a: {
            for ($JSCompiler_temp$$518_JSCompiler_temp$$958_JSCompiler_temp$$959_JSCompiler_temp$$960_len$$inline_1000_len$$inline_1006_len$$inline_1011_len$$inline_988_len$$inline_995_or__4251__auto__$$inline_758$$ = $arr$$88$$.length, $i$$inline_1007_i$$inline_1012_i$$inline_996_kstr$$inline_1001_kstr$$inline_989$$ = 0;;) {
              if ($JSCompiler_temp$$518_JSCompiler_temp$$958_JSCompiler_temp$$959_JSCompiler_temp$$960_len$$inline_1000_len$$inline_1006_len$$inline_1011_len$$inline_988_len$$inline_995_or__4251__auto__$$inline_758$$ <= $i$$inline_1007_i$$inline_1012_i$$inline_996_kstr$$inline_1001_kstr$$inline_989$$) {
                $JSCompiler_temp$$518_JSCompiler_temp$$958_JSCompiler_temp$$959_JSCompiler_temp$$960_len$$inline_1000_len$$inline_1006_len$$inline_1011_len$$inline_988_len$$inline_995_or__4251__auto__$$inline_758$$ = -1;
                break a;
              }
              if (null == $arr$$88$$[$i$$inline_1007_i$$inline_1012_i$$inline_996_kstr$$inline_1001_kstr$$inline_989$$]) {
                $JSCompiler_temp$$518_JSCompiler_temp$$958_JSCompiler_temp$$959_JSCompiler_temp$$960_len$$inline_1000_len$$inline_1006_len$$inline_1011_len$$inline_988_len$$inline_995_or__4251__auto__$$inline_758$$ = $i$$inline_1007_i$$inline_1012_i$$inline_996_kstr$$inline_1001_kstr$$inline_989$$;
                break a;
              }
              $i$$inline_1007_i$$inline_1012_i$$inline_996_kstr$$inline_1001_kstr$$inline_989$$ += 2;
            }
          }
        } else {
          a: {
            for ($JSCompiler_temp$$518_JSCompiler_temp$$958_JSCompiler_temp$$959_JSCompiler_temp$$960_len$$inline_1000_len$$inline_1006_len$$inline_1011_len$$inline_988_len$$inline_995_or__4251__auto__$$inline_758$$ = $arr$$88$$.length, $i$$inline_1007_i$$inline_1012_i$$inline_996_kstr$$inline_1001_kstr$$inline_989$$ = 0;;) {
              if ($JSCompiler_temp$$518_JSCompiler_temp$$958_JSCompiler_temp$$959_JSCompiler_temp$$960_len$$inline_1000_len$$inline_1006_len$$inline_1011_len$$inline_988_len$$inline_995_or__4251__auto__$$inline_758$$ <= $i$$inline_1007_i$$inline_1012_i$$inline_996_kstr$$inline_1001_kstr$$inline_989$$) {
                $JSCompiler_temp$$518_JSCompiler_temp$$958_JSCompiler_temp$$959_JSCompiler_temp$$960_len$$inline_1000_len$$inline_1006_len$$inline_1011_len$$inline_988_len$$inline_995_or__4251__auto__$$inline_758$$ = -1;
                break a;
              }
              if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($k$$206$$, $arr$$88$$[$i$$inline_1007_i$$inline_1012_i$$inline_996_kstr$$inline_1001_kstr$$inline_989$$])) {
                $JSCompiler_temp$$518_JSCompiler_temp$$958_JSCompiler_temp$$959_JSCompiler_temp$$960_len$$inline_1000_len$$inline_1006_len$$inline_1011_len$$inline_988_len$$inline_995_or__4251__auto__$$inline_758$$ = $i$$inline_1007_i$$inline_1012_i$$inline_996_kstr$$inline_1001_kstr$$inline_989$$;
                break a;
              }
              $i$$inline_1007_i$$inline_1012_i$$inline_996_kstr$$inline_1001_kstr$$inline_989$$ += 2;
            }
          }
        }
      }
    }
  }
  return $JSCompiler_temp$$518_JSCompiler_temp$$958_JSCompiler_temp$$959_JSCompiler_temp$$960_len$$inline_1000_len$$inline_1006_len$$inline_1011_len$$inline_988_len$$inline_995_or__4251__auto__$$inline_758$$;
}
function $cljs$core$PersistentArrayMapSeq$$($arr$$90$$, $i$$464$$, $_meta$$4$$) {
  this.$arr$ = $arr$$90$$;
  this.i = $i$$464$$;
  this.$_meta$ = $_meta$$4$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 32374990;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$PersistentArrayMapSeq$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$$41$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$$41$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$_meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  return this.i < this.$arr$.length - 2 ? new $cljs$core$PersistentArrayMapSeq$$(this.$arr$, this.i + 2, this.$_meta$) : null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return (this.$arr$.length - this.i) / 2;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  return $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$$355$$, $other$$42$$) {
  return $cljs$core$equiv_sequential$$(this, $other$$42$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$with_meta$$($cljs$core$List$EMPTY$$, this.$_meta$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$$357$$, $f$$569$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$$569$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$$358$$, $f$$570$$, $start$$27$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$$570$$, $start$$27$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [this.$arr$[this.i], this.$arr$[this.i + 1]], null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  return this.i < this.$arr$.length - 2 ? new $cljs$core$PersistentArrayMapSeq$$(this.$arr$, this.i + 2, this.$_meta$) : $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$$362$$, $new_meta$$4$$) {
  return new $cljs$core$PersistentArrayMapSeq$$(this.$arr$, this.i, $new_meta$$4$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$$363$$, $o$$284$$) {
  return $cljs$core$cons$$($o$$284$$, this);
};
$cljs$core$PersistentArrayMapSeq$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$PersistentArrayMapIterator$$($arr$$93$$, $i$$467$$, $cnt$$12$$) {
  this.$arr$ = $arr$$93$$;
  this.i = $i$$467$$;
  this.$cnt$ = $cnt$$12$$;
}
$cljs$core$PersistentArrayMapIterator$$.prototype.$hasNext$ = function() {
  return this.i < this.$cnt$;
};
$cljs$core$PersistentArrayMapIterator$$.prototype.next = function() {
  var $ret$$18$$ = new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [this.$arr$[this.i], this.$arr$[this.i + 1]], null);
  this.i += 2;
  return $ret$$18$$;
};
function $cljs$core$PersistentArrayMap$$($meta$$35$$, $cnt$$14$$, $arr$$95$$, $__hash$$21$$) {
  this.meta = $meta$$35$$;
  this.$cnt$ = $cnt$$14$$;
  this.$arr$ = $arr$$95$$;
  this.$__hash$ = $__hash$$21$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 16647951;
  this.$cljs$lang$protocol_mask$partition1$$ = 8196;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$PersistentArrayMap$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$$43$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$$43$$);
};
$JSCompiler_prototypeAlias$$.keys = function() {
  return $cljs$core$es6_iterator$$($cljs$core$keys$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$keys$$.$cljs$core$IFn$_invoke$arity$1$(this) : $cljs$core$keys$$.call(null, this));
};
$JSCompiler_prototypeAlias$$.entries = function() {
  return $cljs$core$es6_entries_iterator$$($cljs$core$seq$$(this));
};
$JSCompiler_prototypeAlias$$.values = function() {
  return $cljs$core$es6_iterator$$($cljs$core$vals$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$vals$$.$cljs$core$IFn$_invoke$arity$1$(this) : $cljs$core$vals$$.call(null, this));
};
$JSCompiler_prototypeAlias$$.has = function($k$$210$$) {
  return $cljs$core$contains_QMARK_$$(this, $k$$210$$);
};
$JSCompiler_prototypeAlias$$.get = function($k$$211$$, $not_found$$33$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$$211$$, $not_found$$33$$);
};
$JSCompiler_prototypeAlias$$.forEach = function($f$$571$$) {
  for (var $G__21072_seq__21048_seq__21048__$1_temp__4425__auto__$$10$$ = $cljs$core$seq$$(this), $G__21056_21076_c__5036__auto__$$1_chunk__21049_vec__21055$$ = null, $G__21074_count__21050$$ = 0, $i__21051$$ = 0;;) {
    if ($i__21051$$ < $G__21074_count__21050$$) {
      var $G__21053_21066_v$$57_vec__21052$$ = $G__21056_21076_c__5036__auto__$$1_chunk__21049_vec__21055$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__21051$$), $G__21054_21067_G__21057_21077_G__21073_k$$212$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__21053_21066_v$$57_vec__21052$$, 0), $G__21053_21066_v$$57_vec__21052$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__21053_21066_v$$57_vec__21052$$, 1);
      $f$$571$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$$571$$.$cljs$core$IFn$_invoke$arity$2$($G__21053_21066_v$$57_vec__21052$$, $G__21054_21067_G__21057_21077_G__21073_k$$212$$) : $f$$571$$.call(null, $G__21053_21066_v$$57_vec__21052$$, $G__21054_21067_G__21057_21077_G__21073_k$$212$$);
      $i__21051$$ += 1;
    } else {
      if ($G__21072_seq__21048_seq__21048__$1_temp__4425__auto__$$10$$ = $cljs$core$seq$$($G__21072_seq__21048_seq__21048__$1_temp__4425__auto__$$10$$)) {
        $cljs$core$chunked_seq_QMARK_$$($G__21072_seq__21048_seq__21048__$1_temp__4425__auto__$$10$$) ? ($G__21056_21076_c__5036__auto__$$1_chunk__21049_vec__21055$$ = $cljs$core$_chunked_first$$($G__21072_seq__21048_seq__21048__$1_temp__4425__auto__$$10$$), $G__21072_seq__21048_seq__21048__$1_temp__4425__auto__$$10$$ = $cljs$core$_chunked_rest$$($G__21072_seq__21048_seq__21048__$1_temp__4425__auto__$$10$$), $G__21054_21067_G__21057_21077_G__21073_k$$212$$ = $G__21056_21076_c__5036__auto__$$1_chunk__21049_vec__21055$$, 
        $G__21074_count__21050$$ = $cljs$core$count$$($G__21056_21076_c__5036__auto__$$1_chunk__21049_vec__21055$$), $G__21056_21076_c__5036__auto__$$1_chunk__21049_vec__21055$$ = $G__21054_21067_G__21057_21077_G__21073_k$$212$$) : ($G__21056_21076_c__5036__auto__$$1_chunk__21049_vec__21055$$ = $cljs$core$first$$($G__21072_seq__21048_seq__21048__$1_temp__4425__auto__$$10$$), $G__21054_21067_G__21057_21077_G__21073_k$$212$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__21056_21076_c__5036__auto__$$1_chunk__21049_vec__21055$$, 
        0), $G__21056_21076_c__5036__auto__$$1_chunk__21049_vec__21055$$ = $G__21053_21066_v$$57_vec__21052$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__21056_21076_c__5036__auto__$$1_chunk__21049_vec__21055$$, 1), $f$$571$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$$571$$.$cljs$core$IFn$_invoke$arity$2$($G__21056_21076_c__5036__auto__$$1_chunk__21049_vec__21055$$, $G__21054_21067_G__21057_21077_G__21073_k$$212$$) : $f$$571$$.call(null, $G__21056_21076_c__5036__auto__$$1_chunk__21049_vec__21055$$, 
        $G__21054_21067_G__21057_21077_G__21073_k$$212$$), $G__21072_seq__21048_seq__21048__$1_temp__4425__auto__$$10$$ = $cljs$core$next$$($G__21072_seq__21048_seq__21048__$1_temp__4425__auto__$$10$$), $G__21056_21076_c__5036__auto__$$1_chunk__21049_vec__21055$$ = null, $G__21074_count__21050$$ = 0), $i__21051$$ = 0;
      } else {
        return null;
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($coll$$371$$, $k$$213$$) {
  return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$(this, $k$$213$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($coll$$372_idx$$7$$, $k$$214$$, $not_found$$34$$) {
  $coll$$372_idx$$7$$ = $cljs$core$array_index_of$$(this.$arr$, $k$$214$$);
  return -1 === $coll$$372_idx$$7$$ ? $not_found$$34$$ : this.$arr$[$coll$$372_idx$$7$$ + 1];
};
$JSCompiler_prototypeAlias$$.$cljs$core$IKVReduce$_kv_reduce$arity$3$ = function($coll$$373_len$$18$$, $G__21061_f$$572$$, $G__21058$$inline_257_G__21083_init$$7_init__$1$$4_init__$2$$6$$) {
  $coll$$373_len$$18$$ = this.$arr$.length;
  for (var $i$$469$$ = 0;;) {
    if ($i$$469$$ < $coll$$373_len$$18$$) {
      var $G__21059$$inline_258$$ = this.$arr$[$i$$469$$], $G__21060$$inline_259$$ = this.$arr$[$i$$469$$ + 1];
      $G__21058$$inline_257_G__21083_init$$7_init__$1$$4_init__$2$$6$$ = $G__21061_f$$572$$.$cljs$core$IFn$_invoke$arity$3$ ? $G__21061_f$$572$$.$cljs$core$IFn$_invoke$arity$3$($G__21058$$inline_257_G__21083_init$$7_init__$1$$4_init__$2$$6$$, $G__21059$$inline_258$$, $G__21060$$inline_259$$) : $G__21061_f$$572$$.call(null, $G__21058$$inline_257_G__21083_init$$7_init__$1$$4_init__$2$$6$$, $G__21059$$inline_258$$, $G__21060$$inline_259$$);
      if ($cljs$core$reduced_QMARK_$$($G__21058$$inline_257_G__21083_init$$7_init__$1$$4_init__$2$$6$$)) {
        return $G__21061_f$$572$$ = $G__21058$$inline_257_G__21083_init$$7_init__$1$$4_init__$2$$6$$, $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($G__21061_f$$572$$) : $cljs$core$deref$$.call(null, $G__21061_f$$572$$);
      }
      $i$$469$$ += 2;
    } else {
      return $G__21058$$inline_257_G__21083_init$$7_init__$1$$4_init__$2$$6$$;
    }
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIterable$_iterator$arity$1$ = function() {
  return new $cljs$core$PersistentArrayMapIterator$$(this.$arr$, 0, 2 * this.$cnt$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.meta;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return this.$cnt$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4667__auto__$$12_h__4667__auto____$1$$12$$ = this.$__hash$;
  return null != $h__4667__auto__$$12_h__4667__auto____$1$$12$$ ? $h__4667__auto__$$12_h__4667__auto____$1$$12$$ : this.$__hash$ = $h__4667__auto__$$12_h__4667__auto____$1$$12$$ = $cljs$core$hash_unordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$$377$$, $other$$44$$) {
  if ($other$$44$$ && ($other$$44$$.$cljs$lang$protocol_mask$partition0$$ & 1024 || $other$$44$$.$cljs$core$IMap$$)) {
    var $alen$$ = this.$arr$.length;
    if (this.$cnt$ === $other$$44$$.$cljs$core$ICounted$_count$arity$1$(null)) {
      for (var $i$$470$$ = 0;;) {
        if ($i$$470$$ < $alen$$) {
          var $v$$58$$ = $other$$44$$.$cljs$core$ILookup$_lookup$arity$3$(null, this.$arr$[$i$$470$$], $cljs$core$lookup_sentinel$$);
          if ($v$$58$$ !== $cljs$core$lookup_sentinel$$) {
            if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$(this.$arr$[$i$$470$$ + 1], $v$$58$$)) {
              $i$$470$$ += 2;
            } else {
              return !1;
            }
          } else {
            return !1;
          }
        } else {
          return !0;
        }
      }
    } else {
      return !1;
    }
  } else {
    return $cljs$core$equiv_map$$(this, $other$$44$$);
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEditableCollection$_as_transient$arity$1$ = function() {
  return new $cljs$core$TransientArrayMap$$({}, this.$arr$.length, $cljs$core$aclone$$(this.$arr$));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$_with_meta$$($cljs$core$PersistentArrayMap$EMPTY$$, this.meta);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$$380$$, $f$$573$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$$573$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$$381$$, $f$$574$$, $start$$28$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$$574$$, $start$$28$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMap$_dissoc$arity$2$ = function($coll$$382$$, $k$$215$$) {
  if (0 <= $cljs$core$array_index_of$$(this.$arr$, $k$$215$$)) {
    var $len$$19$$ = this.$arr$.length, $new_arr$$1_new_len$$ = $len$$19$$ - 2;
    if (0 === $new_arr$$1_new_len$$) {
      return $cljs$core$_empty$$(this);
    }
    for (var $new_arr$$1_new_len$$ = Array($new_arr$$1_new_len$$), $s$$187$$ = 0, $G__21086_G__21088_d$$625$$ = 0;;) {
      if ($s$$187$$ >= $len$$19$$) {
        return new $cljs$core$PersistentArrayMap$$(this.meta, this.$cnt$ - 1, $new_arr$$1_new_len$$, null);
      }
      $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($k$$215$$, this.$arr$[$s$$187$$]) || ($new_arr$$1_new_len$$[$G__21086_G__21088_d$$625$$] = this.$arr$[$s$$187$$], $new_arr$$1_new_len$$[$G__21086_G__21088_d$$625$$ + 1] = this.$arr$[$s$$187$$ + 1], $G__21086_G__21088_d$$625$$ += 2);
      $s$$187$$ += 2;
    }
  } else {
    return this;
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$IAssociative$_assoc$arity$3$ = function($arr$$inline_760_coll$$383_idx$$9$$, $G__21065$$inline_261_k$$216$$, $v$$59$$) {
  $arr$$inline_760_coll$$383_idx$$9$$ = $cljs$core$array_index_of$$(this.$arr$, $G__21065$$inline_261_k$$216$$);
  if (-1 === $arr$$inline_760_coll$$383_idx$$9$$) {
    if (this.$cnt$ < $cljs$core$PersistentArrayMap$HASHMAP_THRESHOLD$$) {
      $arr$$inline_760_coll$$383_idx$$9$$ = this.$arr$;
      for (var $l$$inline_763$$ = $arr$$inline_760_coll$$383_idx$$9$$.length, $narr$$inline_764$$ = Array($l$$inline_763$$ + 2), $i_21043$$inline_765$$ = 0;;) {
        if ($i_21043$$inline_765$$ < $l$$inline_763$$) {
          $narr$$inline_764$$[$i_21043$$inline_765$$] = $arr$$inline_760_coll$$383_idx$$9$$[$i_21043$$inline_765$$], $i_21043$$inline_765$$ += 1;
        } else {
          break;
        }
      }
      $narr$$inline_764$$[$l$$inline_763$$] = $G__21065$$inline_261_k$$216$$;
      $narr$$inline_764$$[$l$$inline_763$$ + 1] = $v$$59$$;
      return new $cljs$core$PersistentArrayMap$$(this.meta, this.$cnt$ + 1, $narr$$inline_764$$, null);
    }
    return $cljs$core$_with_meta$$($cljs$core$_assoc$$($cljs$core$into$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$PersistentHashMap$EMPTY$$, this), $G__21065$$inline_261_k$$216$$, $v$$59$$), this.meta);
  }
  if ($v$$59$$ === this.$arr$[$arr$$inline_760_coll$$383_idx$$9$$ + 1]) {
    return this;
  }
  $G__21065$$inline_261_k$$216$$ = $cljs$core$aclone$$(this.$arr$);
  $G__21065$$inline_261_k$$216$$[$arr$$inline_760_coll$$383_idx$$9$$ + 1] = $v$$59$$;
  return new $cljs$core$PersistentArrayMap$$(this.meta, this.$cnt$, $G__21065$$inline_261_k$$216$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IAssociative$_contains_key_QMARK_$arity$2$ = function($coll$$384$$, $k$$217$$) {
  return -1 !== $cljs$core$array_index_of$$(this.$arr$, $k$$217$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  var $arr$$inline_263$$ = this.$arr$;
  return 0 <= $arr$$inline_263$$.length - 2 ? new $cljs$core$PersistentArrayMapSeq$$($arr$$inline_263$$, 0, null) : null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$$386$$, $meta__$1$$9$$) {
  return new $cljs$core$PersistentArrayMap$$($meta__$1$$9$$, this.$cnt$, this.$arr$, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$$387$$, $entry$$3$$) {
  if ($cljs$core$vector_QMARK_$$($entry$$3$$)) {
    return $cljs$core$_assoc$$(this, $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($entry$$3$$, 0), $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($entry$$3$$, 1));
  }
  for (var $G__21089_ret$$19$$ = this, $G__21090_es$$ = $cljs$core$seq$$($entry$$3$$);;) {
    if (null == $G__21090_es$$) {
      return $G__21089_ret$$19$$;
    }
    var $e$$833$$ = $cljs$core$first$$($G__21090_es$$);
    if ($cljs$core$vector_QMARK_$$($e$$833$$)) {
      $G__21089_ret$$19$$ = $cljs$core$_assoc$$($G__21089_ret$$19$$, $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($e$$833$$, 0), $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($e$$833$$, 1)), $G__21090_es$$ = $cljs$core$next$$($G__21090_es$$);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
$JSCompiler_prototypeAlias$$.call = function() {
  var $G__21091$$ = null, $G__21091$$ = function($G__21091$$, $k$$220$$, $not_found$$36$$) {
    switch(arguments.length) {
      case 2:
        return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$$220$$);
      case 3:
        return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$$220$$, $not_found$$36$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__21091$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__21091$$, $k$$218$$) {
    return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$$218$$);
  };
  $G__21091$$.$cljs$core$IFn$_invoke$arity$3$ = function($G__21091$$, $k$$219$$, $not_found$$35$$) {
    return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$$219$$, $not_found$$35$$);
  };
  return $G__21091$$;
}();
$JSCompiler_prototypeAlias$$.apply = function($self__$$492$$, $args21045$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args21045$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($k$$221$$) {
  return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$$221$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($k$$222$$, $not_found$$37$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$$222$$, $not_found$$37$$);
};
var $cljs$core$PersistentArrayMap$EMPTY$$ = new $cljs$core$PersistentArrayMap$$(null, 0, [], $cljs$core$empty_unordered_hash$$), $cljs$core$PersistentArrayMap$HASHMAP_THRESHOLD$$ = 8;
$cljs$core$PersistentArrayMap$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$TransientArrayMap$$($editable_QMARK_$$, $len$$20$$, $arr$$98$$) {
  this.$editable_QMARK_$ = $editable_QMARK_$$;
  this.$len$ = $len$$20$$;
  this.$arr$ = $arr$$98$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 258;
  this.$cljs$lang$protocol_mask$partition1$$ = 56;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$TransientArrayMap$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  if ($cljs$core$truth_$$(this.$editable_QMARK_$)) {
    return $cljs$core$quot$$(this.$len$);
  }
  throw Error("count after persistent!");
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($tcoll$$23$$, $k$$223$$) {
  return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$(this, $k$$223$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($idx$$10_tcoll$$24$$, $k$$224$$, $not_found$$38$$) {
  if ($cljs$core$truth_$$(this.$editable_QMARK_$)) {
    return $idx$$10_tcoll$$24$$ = $cljs$core$array_index_of$$(this.$arr$, $k$$224$$), -1 === $idx$$10_tcoll$$24$$ ? $not_found$$38$$ : this.$arr$[$idx$$10_tcoll$$24$$ + 1];
  }
  throw Error("lookup after persistent!");
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientCollection$_conj_BANG_$arity$2$ = function($tcoll$$25$$, $o$$285$$) {
  if ($cljs$core$truth_$$(this.$editable_QMARK_$)) {
    if ($o$$285$$ ? $o$$285$$.$cljs$lang$protocol_mask$partition0$$ & 2048 || $o$$285$$.$cljs$core$IMapEntry$$ || ($o$$285$$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IMapEntry$$, $o$$285$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IMapEntry$$, $o$$285$$)) {
      return $cljs$core$_assoc_BANG_$$(this, $cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$($o$$285$$) : $cljs$core$key$$.call(null, $o$$285$$), $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$($o$$285$$) : $cljs$core$val$$.call(null, $o$$285$$));
    }
    for (var $G__21105_es$$1$$ = $cljs$core$seq$$($o$$285$$), $G__21106_tcoll__$2$$ = this;;) {
      var $temp__4423__auto__$$5$$ = $cljs$core$first$$($G__21105_es$$1$$);
      if ($cljs$core$truth_$$($temp__4423__auto__$$5$$)) {
        var $e$$834$$ = $temp__4423__auto__$$5$$, $G__21105_es$$1$$ = $cljs$core$next$$($G__21105_es$$1$$), $G__21106_tcoll__$2$$ = $cljs$core$_assoc_BANG_$$($G__21106_tcoll__$2$$, function() {
          var $tcoll$$25$$ = $e$$834$$;
          return $cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$($tcoll$$25$$) : $cljs$core$key$$.call(null, $tcoll$$25$$);
        }(), function() {
          var $tcoll$$25$$ = $e$$834$$;
          return $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$($tcoll$$25$$) : $cljs$core$val$$.call(null, $tcoll$$25$$);
        }())
      } else {
        return $G__21106_tcoll__$2$$;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientCollection$_persistent_BANG_$arity$1$ = function() {
  if ($cljs$core$truth_$$(this.$editable_QMARK_$)) {
    return this.$editable_QMARK_$ = !1, new $cljs$core$PersistentArrayMap$$(null, $cljs$core$quot$$(this.$len$), this.$arr$, null);
  }
  throw Error("persistent! called twice");
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientAssociative$_assoc_BANG_$arity$3$ = function($G__21102$$inline_267_JSCompiler_inline_result$$44_idx$$11_tcoll$$27$$, $key$$67$$, $val$$56$$) {
  if ($cljs$core$truth_$$(this.$editable_QMARK_$)) {
    $G__21102$$inline_267_JSCompiler_inline_result$$44_idx$$11_tcoll$$27$$ = $cljs$core$array_index_of$$(this.$arr$, $key$$67$$);
    if (-1 === $G__21102$$inline_267_JSCompiler_inline_result$$44_idx$$11_tcoll$$27$$) {
      if (this.$len$ + 2 <= 2 * $cljs$core$PersistentArrayMap$HASHMAP_THRESHOLD$$) {
        return this.$len$ += 2, this.$arr$.push($key$$67$$), this.$arr$.push($val$$56$$), this;
      }
      $G__21102$$inline_267_JSCompiler_inline_result$$44_idx$$11_tcoll$$27$$ = this.$len$;
      var $G__21103$$inline_268$$ = this.$arr$;
      $G__21102$$inline_267_JSCompiler_inline_result$$44_idx$$11_tcoll$$27$$ = $cljs$core$array__GT_transient_hash_map$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$core$array__GT_transient_hash_map$$.$cljs$core$IFn$_invoke$arity$2$($G__21102$$inline_267_JSCompiler_inline_result$$44_idx$$11_tcoll$$27$$, $G__21103$$inline_268$$) : $cljs$core$array__GT_transient_hash_map$$.call(null, $G__21102$$inline_267_JSCompiler_inline_result$$44_idx$$11_tcoll$$27$$, $G__21103$$inline_268$$);
      return $cljs$core$_assoc_BANG_$$($G__21102$$inline_267_JSCompiler_inline_result$$44_idx$$11_tcoll$$27$$, $key$$67$$, $val$$56$$);
    }
    $val$$56$$ !== this.$arr$[$G__21102$$inline_267_JSCompiler_inline_result$$44_idx$$11_tcoll$$27$$ + 1] && (this.$arr$[$G__21102$$inline_267_JSCompiler_inline_result$$44_idx$$11_tcoll$$27$$ + 1] = $val$$56$$);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function $cljs$core$array__GT_transient_hash_map$$($len$$22$$, $arr$$100$$) {
  for (var $G__21108_out$$2$$ = $cljs$core$_as_transient$$($cljs$core$PersistentHashMap$EMPTY$$), $G__21109_i$$471$$ = 0;;) {
    if ($G__21109_i$$471$$ < $len$$22$$) {
      $G__21108_out$$2$$ = $cljs$core$_assoc_BANG_$$($G__21108_out$$2$$, $arr$$100$$[$G__21109_i$$471$$], $arr$$100$$[$G__21109_i$$471$$ + 1]), $G__21109_i$$471$$ += 2;
    } else {
      return $G__21108_out$$2$$;
    }
  }
}
function $cljs$core$Box$$() {
  this.$val$ = !1;
}
function $cljs$core$key_test$$($key$$69$$, $other$$45$$) {
  return $key$$69$$ === $other$$45$$ ? !0 : $cljs$core$keyword_identical_QMARK_$$($key$$69$$, $other$$45$$) ? !0 : $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($key$$69$$, $other$$45$$);
}
function $cljs$core$clone_and_set$cljs$0core$0IFn$0_invoke$0arity$03$$($G__21112_arr$$101$$, $i$$472$$, $a$$1561$$) {
  $G__21112_arr$$101$$ = $cljs$core$aclone$$($G__21112_arr$$101$$);
  $G__21112_arr$$101$$[$i$$472$$] = $a$$1561$$;
  return $G__21112_arr$$101$$;
}
function $cljs$core$remove_pair$$($arr$$103$$, $i$$474$$) {
  var $new_arr$$2$$ = Array($arr$$103$$.length - 2);
  $cljs$core$array_copy$$($arr$$103$$, 0, $new_arr$$2$$, 0, 2 * $i$$474$$);
  $cljs$core$array_copy$$($arr$$103$$, 2 * ($i$$474$$ + 1), $new_arr$$2$$, 2 * $i$$474$$, $new_arr$$2$$.length - 2 * $i$$474$$);
  return $new_arr$$2$$;
}
function $cljs$core$edit_and_set$cljs$0core$0IFn$0_invoke$0arity$04$$($editable_inode$$, $edit$$5$$, $i$$475$$, $a$$1563$$) {
  $editable_inode$$ = $editable_inode$$.$ensure_editable$($edit$$5$$);
  $editable_inode$$.$arr$[$i$$475$$] = $a$$1563$$;
  return $editable_inode$$;
}
function $cljs$core$inode_kv_reduce$$($G__21125_arr$$104$$, $f$$575$$, $G__21127_init$$8_init__$2$$7_k$$inline_270_node$$inline_273$$) {
  for (var $len$$23$$ = $G__21125_arr$$104$$.length, $i$$477$$ = 0, $G__21122$$inline_271_init__$1$$5$$ = $G__21127_init$$8_init__$2$$7_k$$inline_270_node$$inline_273$$;;) {
    if ($i$$477$$ < $len$$23$$) {
      $G__21127_init$$8_init__$2$$7_k$$inline_270_node$$inline_273$$ = $G__21125_arr$$104$$[$i$$477$$];
      if (null != $G__21127_init$$8_init__$2$$7_k$$inline_270_node$$inline_273$$) {
        var $G__21124$$inline_272$$ = $G__21125_arr$$104$$[$i$$477$$ + 1];
        $G__21127_init$$8_init__$2$$7_k$$inline_270_node$$inline_273$$ = $f$$575$$.$cljs$core$IFn$_invoke$arity$3$ ? $f$$575$$.$cljs$core$IFn$_invoke$arity$3$($G__21122$$inline_271_init__$1$$5$$, $G__21127_init$$8_init__$2$$7_k$$inline_270_node$$inline_273$$, $G__21124$$inline_272$$) : $f$$575$$.call(null, $G__21122$$inline_271_init__$1$$5$$, $G__21127_init$$8_init__$2$$7_k$$inline_270_node$$inline_273$$, $G__21124$$inline_272$$);
      } else {
        $G__21127_init$$8_init__$2$$7_k$$inline_270_node$$inline_273$$ = $G__21125_arr$$104$$[$i$$477$$ + 1], $G__21127_init$$8_init__$2$$7_k$$inline_270_node$$inline_273$$ = null != $G__21127_init$$8_init__$2$$7_k$$inline_270_node$$inline_273$$ ? $G__21127_init$$8_init__$2$$7_k$$inline_270_node$$inline_273$$.$kv_reduce$($f$$575$$, $G__21122$$inline_271_init__$1$$5$$) : $G__21122$$inline_271_init__$1$$5$$;
      }
      if ($cljs$core$reduced_QMARK_$$($G__21127_init$$8_init__$2$$7_k$$inline_270_node$$inline_273$$)) {
        return $G__21125_arr$$104$$ = $G__21127_init$$8_init__$2$$7_k$$inline_270_node$$inline_273$$, $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($G__21125_arr$$104$$) : $cljs$core$deref$$.call(null, $G__21125_arr$$104$$);
      }
      $i$$477$$ += 2;
      $G__21122$$inline_271_init__$1$$5$$ = $G__21127_init$$8_init__$2$$7_k$$inline_270_node$$inline_273$$;
    } else {
      return $G__21122$$inline_271_init__$1$$5$$;
    }
  }
}
function $cljs$core$BitmapIndexedNode$$($edit$$7$$, $bitmap$$1$$, $arr$$105$$) {
  this.$edit$ = $edit$$7$$;
  this.$bitmap$ = $bitmap$$1$$;
  this.$arr$ = $arr$$105$$;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$BitmapIndexedNode$$.prototype;
$JSCompiler_prototypeAlias$$.$ensure_editable$ = function($e$$835$$) {
  if ($e$$835$$ === this.$edit$) {
    return this;
  }
  var $n$$629$$ = $cljs$core$bit_count$$(this.$bitmap$), $new_arr$$3$$ = Array(0 > $n$$629$$ ? 4 : 2 * ($n$$629$$ + 1));
  $cljs$core$array_copy$$(this.$arr$, 0, $new_arr$$3$$, 0, 2 * $n$$629$$);
  return new $cljs$core$BitmapIndexedNode$$($e$$835$$, this.$bitmap$, $new_arr$$3$$);
};
$JSCompiler_prototypeAlias$$.$inode_seq$ = function() {
  var $G__21128$$ = this.$arr$;
  return $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$01$$ ? $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$01$$($G__21128$$) : $cljs$core$create_inode_seq$$.call(null, $G__21128$$);
};
$JSCompiler_prototypeAlias$$.$kv_reduce$ = function($f$$576$$, $init$$9$$) {
  return $cljs$core$inode_kv_reduce$$(this.$arr$, $f$$576$$, $init$$9$$);
};
$JSCompiler_prototypeAlias$$.$inode_lookup$ = function($shift$$7$$, $hash$$5$$, $key$$71$$, $not_found$$39$$) {
  var $bit$$3_key_or_nil$$1$$ = 1 << ($hash$$5$$ >>> $shift$$7$$ & 31);
  if (0 === (this.$bitmap$ & $bit$$3_key_or_nil$$1$$)) {
    return $not_found$$39$$;
  }
  var $idx$$14_val_or_node$$1$$ = $cljs$core$bit_count$$(this.$bitmap$ & $bit$$3_key_or_nil$$1$$ - 1), $bit$$3_key_or_nil$$1$$ = this.$arr$[2 * $idx$$14_val_or_node$$1$$], $idx$$14_val_or_node$$1$$ = this.$arr$[2 * $idx$$14_val_or_node$$1$$ + 1];
  return null == $bit$$3_key_or_nil$$1$$ ? $idx$$14_val_or_node$$1$$.$inode_lookup$($shift$$7$$ + 5, $hash$$5$$, $key$$71$$, $not_found$$39$$) : $cljs$core$key_test$$($key$$71$$, $bit$$3_key_or_nil$$1$$) ? $idx$$14_val_or_node$$1$$ : $not_found$$39$$;
};
$JSCompiler_prototypeAlias$$.$inode_assoc_BANG_$ = function($edit__$1$$1_editable$$3_editable$$inline_789$$, $earr$$1_new_arr$$4_shift$$8$$, $G__18908$$inline_781_hash$$6_len$$inline_776_len__$1$$inline_779$$, $JSCompiler_inline_result$$45_i_21142_key$$72$$, $G__21145_G__21147_i$$inline_785_j_21143_val$$59$$, $G__21130$$inline_275_added_leaf_QMARK__i__$1$$inline_777$$) {
  var $bit$$4_val_or_node$$2$$ = 1 << ($G__18908$$inline_781_hash$$6_len$$inline_776_len__$1$$inline_779$$ >>> $earr$$1_new_arr$$4_shift$$8$$ & 31), $idx$$15_j$$inline_787_nodes$$ = $cljs$core$bit_count$$(this.$bitmap$ & $bit$$4_val_or_node$$2$$ - 1);
  if (0 === (this.$bitmap$ & $bit$$4_val_or_node$$2$$)) {
    var $G__18907$$inline_780_j__$1$$inline_778_key_or_nil$$2_n$$631$$ = $cljs$core$bit_count$$(this.$bitmap$);
    if (2 * $G__18907$$inline_780_j__$1$$inline_778_key_or_nil$$2_n$$631$$ < this.$arr$.length) {
      $edit__$1$$1_editable$$3_editable$$inline_789$$ = this.$ensure_editable$($edit__$1$$1_editable$$3_editable$$inline_789$$);
      $earr$$1_new_arr$$4_shift$$8$$ = $edit__$1$$1_editable$$3_editable$$inline_789$$.$arr$;
      $G__21130$$inline_275_added_leaf_QMARK__i__$1$$inline_777$$.$val$ = !0;
      a: {
        for ($G__18908$$inline_781_hash$$6_len$$inline_776_len__$1$$inline_779$$ = 2 * ($G__18907$$inline_780_j__$1$$inline_778_key_or_nil$$2_n$$631$$ - $idx$$15_j$$inline_787_nodes$$), $G__21130$$inline_275_added_leaf_QMARK__i__$1$$inline_777$$ = 2 * $idx$$15_j$$inline_787_nodes$$ + ($G__18908$$inline_781_hash$$6_len$$inline_776_len__$1$$inline_779$$ - 1), $G__18907$$inline_780_j__$1$$inline_778_key_or_nil$$2_n$$631$$ = 2 * ($idx$$15_j$$inline_787_nodes$$ + 1) + ($G__18908$$inline_781_hash$$6_len$$inline_776_len__$1$$inline_779$$ - 
        1);;) {
          if (0 === $G__18908$$inline_781_hash$$6_len$$inline_776_len__$1$$inline_779$$) {
            break a;
          }
          $earr$$1_new_arr$$4_shift$$8$$[$G__18907$$inline_780_j__$1$$inline_778_key_or_nil$$2_n$$631$$] = $earr$$1_new_arr$$4_shift$$8$$[$G__21130$$inline_275_added_leaf_QMARK__i__$1$$inline_777$$];
          --$G__18907$$inline_780_j__$1$$inline_778_key_or_nil$$2_n$$631$$;
          --$G__18908$$inline_781_hash$$6_len$$inline_776_len__$1$$inline_779$$;
          --$G__21130$$inline_275_added_leaf_QMARK__i__$1$$inline_777$$;
        }
      }
      $earr$$1_new_arr$$4_shift$$8$$[2 * $idx$$15_j$$inline_787_nodes$$] = $JSCompiler_inline_result$$45_i_21142_key$$72$$;
      $earr$$1_new_arr$$4_shift$$8$$[2 * $idx$$15_j$$inline_787_nodes$$ + 1] = $G__21145_G__21147_i$$inline_785_j_21143_val$$59$$;
      $edit__$1$$1_editable$$3_editable$$inline_789$$.$bitmap$ |= $bit$$4_val_or_node$$2$$;
      return $edit__$1$$1_editable$$3_editable$$inline_789$$;
    }
    if (16 <= $G__18907$$inline_780_j__$1$$inline_778_key_or_nil$$2_n$$631$$) {
      $idx$$15_j$$inline_787_nodes$$ = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      $idx$$15_j$$inline_787_nodes$$[$G__18908$$inline_781_hash$$6_len$$inline_776_len__$1$$inline_779$$ >>> $earr$$1_new_arr$$4_shift$$8$$ & 31] = $cljs$core$BitmapIndexedNode$EMPTY$$.$inode_assoc_BANG_$($edit__$1$$1_editable$$3_editable$$inline_789$$, $earr$$1_new_arr$$4_shift$$8$$ + 5, $G__18908$$inline_781_hash$$6_len$$inline_776_len__$1$$inline_779$$, $JSCompiler_inline_result$$45_i_21142_key$$72$$, $G__21145_G__21147_i$$inline_785_j_21143_val$$59$$, $G__21130$$inline_275_added_leaf_QMARK__i__$1$$inline_777$$);
      for ($G__21145_G__21147_i$$inline_785_j_21143_val$$59$$ = $JSCompiler_inline_result$$45_i_21142_key$$72$$ = 0;;) {
        if (32 > $JSCompiler_inline_result$$45_i_21142_key$$72$$) {
          0 !== (this.$bitmap$ >>> $JSCompiler_inline_result$$45_i_21142_key$$72$$ & 1) && ($idx$$15_j$$inline_787_nodes$$[$JSCompiler_inline_result$$45_i_21142_key$$72$$] = null != this.$arr$[$G__21145_G__21147_i$$inline_785_j_21143_val$$59$$] ? $cljs$core$BitmapIndexedNode$EMPTY$$.$inode_assoc_BANG_$($edit__$1$$1_editable$$3_editable$$inline_789$$, $earr$$1_new_arr$$4_shift$$8$$ + 5, $cljs$core$hash$$(this.$arr$[$G__21145_G__21147_i$$inline_785_j_21143_val$$59$$]), this.$arr$[$G__21145_G__21147_i$$inline_785_j_21143_val$$59$$], 
          this.$arr$[$G__21145_G__21147_i$$inline_785_j_21143_val$$59$$ + 1], $G__21130$$inline_275_added_leaf_QMARK__i__$1$$inline_777$$) : this.$arr$[$G__21145_G__21147_i$$inline_785_j_21143_val$$59$$ + 1], $G__21145_G__21147_i$$inline_785_j_21143_val$$59$$ += 2), $JSCompiler_inline_result$$45_i_21142_key$$72$$ += 1;
        } else {
          break;
        }
      }
      return new $cljs$core$ArrayNode$$($edit__$1$$1_editable$$3_editable$$inline_789$$, $G__18907$$inline_780_j__$1$$inline_778_key_or_nil$$2_n$$631$$ + 1, $idx$$15_j$$inline_787_nodes$$);
    }
    $earr$$1_new_arr$$4_shift$$8$$ = Array(2 * ($G__18907$$inline_780_j__$1$$inline_778_key_or_nil$$2_n$$631$$ + 4));
    $cljs$core$array_copy$$(this.$arr$, 0, $earr$$1_new_arr$$4_shift$$8$$, 0, 2 * $idx$$15_j$$inline_787_nodes$$);
    $earr$$1_new_arr$$4_shift$$8$$[2 * $idx$$15_j$$inline_787_nodes$$] = $JSCompiler_inline_result$$45_i_21142_key$$72$$;
    $earr$$1_new_arr$$4_shift$$8$$[2 * $idx$$15_j$$inline_787_nodes$$ + 1] = $G__21145_G__21147_i$$inline_785_j_21143_val$$59$$;
    $cljs$core$array_copy$$(this.$arr$, 2 * $idx$$15_j$$inline_787_nodes$$, $earr$$1_new_arr$$4_shift$$8$$, 2 * ($idx$$15_j$$inline_787_nodes$$ + 1), 2 * ($G__18907$$inline_780_j__$1$$inline_778_key_or_nil$$2_n$$631$$ - $idx$$15_j$$inline_787_nodes$$));
    $G__21130$$inline_275_added_leaf_QMARK__i__$1$$inline_777$$.$val$ = !0;
    $edit__$1$$1_editable$$3_editable$$inline_789$$ = this.$ensure_editable$($edit__$1$$1_editable$$3_editable$$inline_789$$);
    $edit__$1$$1_editable$$3_editable$$inline_789$$.$arr$ = $earr$$1_new_arr$$4_shift$$8$$;
    $edit__$1$$1_editable$$3_editable$$inline_789$$.$bitmap$ |= $bit$$4_val_or_node$$2$$;
    return $edit__$1$$1_editable$$3_editable$$inline_789$$;
  }
  $G__18907$$inline_780_j__$1$$inline_778_key_or_nil$$2_n$$631$$ = this.$arr$[2 * $idx$$15_j$$inline_787_nodes$$];
  $bit$$4_val_or_node$$2$$ = this.$arr$[2 * $idx$$15_j$$inline_787_nodes$$ + 1];
  if (null == $G__18907$$inline_780_j__$1$$inline_778_key_or_nil$$2_n$$631$$) {
    return $G__18907$$inline_780_j__$1$$inline_778_key_or_nil$$2_n$$631$$ = $bit$$4_val_or_node$$2$$.$inode_assoc_BANG_$($edit__$1$$1_editable$$3_editable$$inline_789$$, $earr$$1_new_arr$$4_shift$$8$$ + 5, $G__18908$$inline_781_hash$$6_len$$inline_776_len__$1$$inline_779$$, $JSCompiler_inline_result$$45_i_21142_key$$72$$, $G__21145_G__21147_i$$inline_785_j_21143_val$$59$$, $G__21130$$inline_275_added_leaf_QMARK__i__$1$$inline_777$$), $G__18907$$inline_780_j__$1$$inline_778_key_or_nil$$2_n$$631$$ === 
    $bit$$4_val_or_node$$2$$ ? this : $cljs$core$edit_and_set$cljs$0core$0IFn$0_invoke$0arity$04$$(this, $edit__$1$$1_editable$$3_editable$$inline_789$$, 2 * $idx$$15_j$$inline_787_nodes$$ + 1, $G__18907$$inline_780_j__$1$$inline_778_key_or_nil$$2_n$$631$$);
  }
  if ($cljs$core$key_test$$($JSCompiler_inline_result$$45_i_21142_key$$72$$, $G__18907$$inline_780_j__$1$$inline_778_key_or_nil$$2_n$$631$$)) {
    return $G__21145_G__21147_i$$inline_785_j_21143_val$$59$$ === $bit$$4_val_or_node$$2$$ ? this : $cljs$core$edit_and_set$cljs$0core$0IFn$0_invoke$0arity$04$$(this, $edit__$1$$1_editable$$3_editable$$inline_789$$, 2 * $idx$$15_j$$inline_787_nodes$$ + 1, $G__21145_G__21147_i$$inline_785_j_21143_val$$59$$);
  }
  $G__21130$$inline_275_added_leaf_QMARK__i__$1$$inline_777$$.$val$ = !0;
  $G__21130$$inline_275_added_leaf_QMARK__i__$1$$inline_777$$ = $earr$$1_new_arr$$4_shift$$8$$ + 5;
  $JSCompiler_inline_result$$45_i_21142_key$$72$$ = $cljs$core$create_node$cljs$0core$0IFn$0_invoke$0arity$07$$ ? $cljs$core$create_node$cljs$0core$0IFn$0_invoke$0arity$07$$($edit__$1$$1_editable$$3_editable$$inline_789$$, $G__21130$$inline_275_added_leaf_QMARK__i__$1$$inline_777$$, $G__18907$$inline_780_j__$1$$inline_778_key_or_nil$$2_n$$631$$, $bit$$4_val_or_node$$2$$, $G__18908$$inline_781_hash$$6_len$$inline_776_len__$1$$inline_779$$, $JSCompiler_inline_result$$45_i_21142_key$$72$$, $G__21145_G__21147_i$$inline_785_j_21143_val$$59$$) : 
  $cljs$core$create_node$$.call(null, $edit__$1$$1_editable$$3_editable$$inline_789$$, $G__21130$$inline_275_added_leaf_QMARK__i__$1$$inline_777$$, $G__18907$$inline_780_j__$1$$inline_778_key_or_nil$$2_n$$631$$, $bit$$4_val_or_node$$2$$, $G__18908$$inline_781_hash$$6_len$$inline_776_len__$1$$inline_779$$, $JSCompiler_inline_result$$45_i_21142_key$$72$$, $G__21145_G__21147_i$$inline_785_j_21143_val$$59$$);
  $G__21145_G__21147_i$$inline_785_j_21143_val$$59$$ = 2 * $idx$$15_j$$inline_787_nodes$$;
  $idx$$15_j$$inline_787_nodes$$ = 2 * $idx$$15_j$$inline_787_nodes$$ + 1;
  $edit__$1$$1_editable$$3_editable$$inline_789$$ = this.$ensure_editable$($edit__$1$$1_editable$$3_editable$$inline_789$$);
  $edit__$1$$1_editable$$3_editable$$inline_789$$.$arr$[$G__21145_G__21147_i$$inline_785_j_21143_val$$59$$] = null;
  $edit__$1$$1_editable$$3_editable$$inline_789$$.$arr$[$idx$$15_j$$inline_787_nodes$$] = $JSCompiler_inline_result$$45_i_21142_key$$72$$;
  return $edit__$1$$1_editable$$3_editable$$inline_789$$;
};
$JSCompiler_prototypeAlias$$.$inode_assoc$ = function($G__21136$$inline_277_JSCompiler_inline_result$$48_new_arr$$5_shift$$9$$, $hash$$7$$, $i$$inline_792_i_21148_key$$73$$, $G__21113$$inline_795_G__21151_G__21153_j_21149_val$$60$$, $JSCompiler_temp_const$$47_added_leaf_QMARK_$$1$$) {
  var $bit$$5_val_or_node$$3$$ = 1 << ($hash$$7$$ >>> $G__21136$$inline_277_JSCompiler_inline_result$$48_new_arr$$5_shift$$9$$ & 31), $idx$$16_j$$inline_793_nodes$$1$$ = $cljs$core$bit_count$$(this.$bitmap$ & $bit$$5_val_or_node$$3$$ - 1);
  if (0 === (this.$bitmap$ & $bit$$5_val_or_node$$3$$)) {
    var $JSCompiler_temp_const$$46_n$$632$$ = $cljs$core$bit_count$$(this.$bitmap$);
    if (16 <= $JSCompiler_temp_const$$46_n$$632$$) {
      $idx$$16_j$$inline_793_nodes$$1$$ = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      $idx$$16_j$$inline_793_nodes$$1$$[$hash$$7$$ >>> $G__21136$$inline_277_JSCompiler_inline_result$$48_new_arr$$5_shift$$9$$ & 31] = $cljs$core$BitmapIndexedNode$EMPTY$$.$inode_assoc$($G__21136$$inline_277_JSCompiler_inline_result$$48_new_arr$$5_shift$$9$$ + 5, $hash$$7$$, $i$$inline_792_i_21148_key$$73$$, $G__21113$$inline_795_G__21151_G__21153_j_21149_val$$60$$, $JSCompiler_temp_const$$47_added_leaf_QMARK_$$1$$);
      for ($G__21113$$inline_795_G__21151_G__21153_j_21149_val$$60$$ = $i$$inline_792_i_21148_key$$73$$ = 0;;) {
        if (32 > $i$$inline_792_i_21148_key$$73$$) {
          0 !== (this.$bitmap$ >>> $i$$inline_792_i_21148_key$$73$$ & 1) && ($idx$$16_j$$inline_793_nodes$$1$$[$i$$inline_792_i_21148_key$$73$$] = null != this.$arr$[$G__21113$$inline_795_G__21151_G__21153_j_21149_val$$60$$] ? $cljs$core$BitmapIndexedNode$EMPTY$$.$inode_assoc$($G__21136$$inline_277_JSCompiler_inline_result$$48_new_arr$$5_shift$$9$$ + 5, $cljs$core$hash$$(this.$arr$[$G__21113$$inline_795_G__21151_G__21153_j_21149_val$$60$$]), this.$arr$[$G__21113$$inline_795_G__21151_G__21153_j_21149_val$$60$$], 
          this.$arr$[$G__21113$$inline_795_G__21151_G__21153_j_21149_val$$60$$ + 1], $JSCompiler_temp_const$$47_added_leaf_QMARK_$$1$$) : this.$arr$[$G__21113$$inline_795_G__21151_G__21153_j_21149_val$$60$$ + 1], $G__21113$$inline_795_G__21151_G__21153_j_21149_val$$60$$ += 2), $i$$inline_792_i_21148_key$$73$$ += 1;
        } else {
          break;
        }
      }
      return new $cljs$core$ArrayNode$$(null, $JSCompiler_temp_const$$46_n$$632$$ + 1, $idx$$16_j$$inline_793_nodes$$1$$);
    }
    $G__21136$$inline_277_JSCompiler_inline_result$$48_new_arr$$5_shift$$9$$ = Array(2 * ($JSCompiler_temp_const$$46_n$$632$$ + 1));
    $cljs$core$array_copy$$(this.$arr$, 0, $G__21136$$inline_277_JSCompiler_inline_result$$48_new_arr$$5_shift$$9$$, 0, 2 * $idx$$16_j$$inline_793_nodes$$1$$);
    $G__21136$$inline_277_JSCompiler_inline_result$$48_new_arr$$5_shift$$9$$[2 * $idx$$16_j$$inline_793_nodes$$1$$] = $i$$inline_792_i_21148_key$$73$$;
    $G__21136$$inline_277_JSCompiler_inline_result$$48_new_arr$$5_shift$$9$$[2 * $idx$$16_j$$inline_793_nodes$$1$$ + 1] = $G__21113$$inline_795_G__21151_G__21153_j_21149_val$$60$$;
    $cljs$core$array_copy$$(this.$arr$, 2 * $idx$$16_j$$inline_793_nodes$$1$$, $G__21136$$inline_277_JSCompiler_inline_result$$48_new_arr$$5_shift$$9$$, 2 * ($idx$$16_j$$inline_793_nodes$$1$$ + 1), 2 * ($JSCompiler_temp_const$$46_n$$632$$ - $idx$$16_j$$inline_793_nodes$$1$$));
    $JSCompiler_temp_const$$47_added_leaf_QMARK_$$1$$.$val$ = !0;
    return new $cljs$core$BitmapIndexedNode$$(null, this.$bitmap$ | $bit$$5_val_or_node$$3$$, $G__21136$$inline_277_JSCompiler_inline_result$$48_new_arr$$5_shift$$9$$);
  }
  var $key_or_nil$$3$$ = this.$arr$[2 * $idx$$16_j$$inline_793_nodes$$1$$], $bit$$5_val_or_node$$3$$ = this.$arr$[2 * $idx$$16_j$$inline_793_nodes$$1$$ + 1];
  if (null == $key_or_nil$$3$$) {
    return $JSCompiler_temp_const$$46_n$$632$$ = $bit$$5_val_or_node$$3$$.$inode_assoc$($G__21136$$inline_277_JSCompiler_inline_result$$48_new_arr$$5_shift$$9$$ + 5, $hash$$7$$, $i$$inline_792_i_21148_key$$73$$, $G__21113$$inline_795_G__21151_G__21153_j_21149_val$$60$$, $JSCompiler_temp_const$$47_added_leaf_QMARK_$$1$$), $JSCompiler_temp_const$$46_n$$632$$ === $bit$$5_val_or_node$$3$$ ? this : new $cljs$core$BitmapIndexedNode$$(null, this.$bitmap$, $cljs$core$clone_and_set$cljs$0core$0IFn$0_invoke$0arity$03$$(this.$arr$, 
    2 * $idx$$16_j$$inline_793_nodes$$1$$ + 1, $JSCompiler_temp_const$$46_n$$632$$));
  }
  if ($cljs$core$key_test$$($i$$inline_792_i_21148_key$$73$$, $key_or_nil$$3$$)) {
    return $G__21113$$inline_795_G__21151_G__21153_j_21149_val$$60$$ === $bit$$5_val_or_node$$3$$ ? this : new $cljs$core$BitmapIndexedNode$$(null, this.$bitmap$, $cljs$core$clone_and_set$cljs$0core$0IFn$0_invoke$0arity$03$$(this.$arr$, 2 * $idx$$16_j$$inline_793_nodes$$1$$ + 1, $G__21113$$inline_795_G__21151_G__21153_j_21149_val$$60$$));
  }
  $JSCompiler_temp_const$$47_added_leaf_QMARK_$$1$$.$val$ = !0;
  $JSCompiler_temp_const$$47_added_leaf_QMARK_$$1$$ = this.$bitmap$;
  $JSCompiler_temp_const$$46_n$$632$$ = this.$arr$;
  $G__21136$$inline_277_JSCompiler_inline_result$$48_new_arr$$5_shift$$9$$ += 5;
  $G__21136$$inline_277_JSCompiler_inline_result$$48_new_arr$$5_shift$$9$$ = $cljs$core$create_node$cljs$0core$0IFn$0_invoke$0arity$06$$ ? $cljs$core$create_node$cljs$0core$0IFn$0_invoke$0arity$06$$($G__21136$$inline_277_JSCompiler_inline_result$$48_new_arr$$5_shift$$9$$, $key_or_nil$$3$$, $bit$$5_val_or_node$$3$$, $hash$$7$$, $i$$inline_792_i_21148_key$$73$$, $G__21113$$inline_795_G__21151_G__21153_j_21149_val$$60$$) : $cljs$core$create_node$$.call(null, $G__21136$$inline_277_JSCompiler_inline_result$$48_new_arr$$5_shift$$9$$, 
  $key_or_nil$$3$$, $bit$$5_val_or_node$$3$$, $hash$$7$$, $i$$inline_792_i_21148_key$$73$$, $G__21113$$inline_795_G__21151_G__21153_j_21149_val$$60$$);
  $i$$inline_792_i_21148_key$$73$$ = 2 * $idx$$16_j$$inline_793_nodes$$1$$;
  $idx$$16_j$$inline_793_nodes$$1$$ = 2 * $idx$$16_j$$inline_793_nodes$$1$$ + 1;
  $G__21113$$inline_795_G__21151_G__21153_j_21149_val$$60$$ = $cljs$core$aclone$$($JSCompiler_temp_const$$46_n$$632$$);
  $G__21113$$inline_795_G__21151_G__21153_j_21149_val$$60$$[$i$$inline_792_i_21148_key$$73$$] = null;
  $G__21113$$inline_795_G__21151_G__21153_j_21149_val$$60$$[$idx$$16_j$$inline_793_nodes$$1$$] = $G__21136$$inline_277_JSCompiler_inline_result$$48_new_arr$$5_shift$$9$$;
  return new $cljs$core$BitmapIndexedNode$$(null, $JSCompiler_temp_const$$47_added_leaf_QMARK_$$1$$, $G__21113$$inline_795_G__21151_G__21153_j_21149_val$$60$$);
};
$JSCompiler_prototypeAlias$$.$inode_without$ = function($n$$633_shift$$11$$, $hash$$9$$, $key$$75$$) {
  var $bit$$7$$ = 1 << ($hash$$9$$ >>> $n$$633_shift$$11$$ & 31);
  if (0 === (this.$bitmap$ & $bit$$7$$)) {
    return this;
  }
  var $idx$$18$$ = $cljs$core$bit_count$$(this.$bitmap$ & $bit$$7$$ - 1), $key_or_nil$$5$$ = this.$arr$[2 * $idx$$18$$], $val_or_node$$5$$ = this.$arr$[2 * $idx$$18$$ + 1];
  return null == $key_or_nil$$5$$ ? ($n$$633_shift$$11$$ = $val_or_node$$5$$.$inode_without$($n$$633_shift$$11$$ + 5, $hash$$9$$, $key$$75$$), $n$$633_shift$$11$$ === $val_or_node$$5$$ ? this : null != $n$$633_shift$$11$$ ? new $cljs$core$BitmapIndexedNode$$(null, this.$bitmap$, $cljs$core$clone_and_set$cljs$0core$0IFn$0_invoke$0arity$03$$(this.$arr$, 2 * $idx$$18$$ + 1, $n$$633_shift$$11$$)) : this.$bitmap$ === $bit$$7$$ ? null : new $cljs$core$BitmapIndexedNode$$(null, this.$bitmap$ ^ $bit$$7$$, 
  $cljs$core$remove_pair$$(this.$arr$, $idx$$18$$))) : $cljs$core$key_test$$($key$$75$$, $key_or_nil$$5$$) ? new $cljs$core$BitmapIndexedNode$$(null, this.$bitmap$ ^ $bit$$7$$, $cljs$core$remove_pair$$(this.$arr$, $idx$$18$$)) : this;
};
var $cljs$core$BitmapIndexedNode$EMPTY$$ = new $cljs$core$BitmapIndexedNode$$(null, 0, []);
function $cljs$core$ArrayNode$$($edit$$10$$, $cnt$$17$$, $arr$$108$$) {
  this.$edit$ = $edit$$10$$;
  this.$cnt$ = $cnt$$17$$;
  this.$arr$ = $arr$$108$$;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$ArrayNode$$.prototype;
$JSCompiler_prototypeAlias$$.$ensure_editable$ = function($e$$837$$) {
  return $e$$837$$ === this.$edit$ ? this : new $cljs$core$ArrayNode$$($e$$837$$, this.$cnt$, $cljs$core$aclone$$(this.$arr$));
};
$JSCompiler_prototypeAlias$$.$inode_seq$ = function() {
  var $G__21160$$ = this.$arr$;
  return $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$01$$ ? $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$01$$($G__21160$$) : $cljs$core$create_array_node_seq$$.call(null, $G__21160$$);
};
$JSCompiler_prototypeAlias$$.$kv_reduce$ = function($f$$577$$, $init$$10$$) {
  for (var $G__21161_len$$26$$ = this.$arr$.length, $i$$480$$ = 0, $G__21163_G__21165_init__$1$$6_init__$2$$8$$ = $init$$10$$;;) {
    if ($i$$480$$ < $G__21161_len$$26$$) {
      var $node$$23$$ = this.$arr$[$i$$480$$];
      if (null != $node$$23$$ && ($G__21163_G__21165_init__$1$$6_init__$2$$8$$ = $node$$23$$.$kv_reduce$($f$$577$$, $G__21163_G__21165_init__$1$$6_init__$2$$8$$), $cljs$core$reduced_QMARK_$$($G__21163_G__21165_init__$1$$6_init__$2$$8$$))) {
        return $G__21161_len$$26$$ = $G__21163_G__21165_init__$1$$6_init__$2$$8$$, $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($G__21161_len$$26$$) : $cljs$core$deref$$.call(null, $G__21161_len$$26$$);
      }
      $i$$480$$ += 1;
    } else {
      return $G__21163_G__21165_init__$1$$6_init__$2$$8$$;
    }
  }
};
$JSCompiler_prototypeAlias$$.$inode_lookup$ = function($shift$$13$$, $hash$$11$$, $key$$77$$, $not_found$$41$$) {
  var $node$$24$$ = this.$arr$[$hash$$11$$ >>> $shift$$13$$ & 31];
  return null != $node$$24$$ ? $node$$24$$.$inode_lookup$($shift$$13$$ + 5, $hash$$11$$, $key$$77$$, $not_found$$41$$) : $not_found$$41$$;
};
$JSCompiler_prototypeAlias$$.$inode_assoc_BANG_$ = function($edit__$1$$3_editable$$5$$, $n$$635_shift$$14$$, $hash$$12$$, $key$$78$$, $val$$61$$, $added_leaf_QMARK_$$2$$) {
  var $idx$$22$$ = $hash$$12$$ >>> $n$$635_shift$$14$$ & 31, $node$$25$$ = this.$arr$[$idx$$22$$];
  if (null == $node$$25$$) {
    return $edit__$1$$3_editable$$5$$ = $cljs$core$edit_and_set$cljs$0core$0IFn$0_invoke$0arity$04$$(this, $edit__$1$$3_editable$$5$$, $idx$$22$$, $cljs$core$BitmapIndexedNode$EMPTY$$.$inode_assoc_BANG_$($edit__$1$$3_editable$$5$$, $n$$635_shift$$14$$ + 5, $hash$$12$$, $key$$78$$, $val$$61$$, $added_leaf_QMARK_$$2$$)), $edit__$1$$3_editable$$5$$.$cnt$ += 1, $edit__$1$$3_editable$$5$$;
  }
  $n$$635_shift$$14$$ = $node$$25$$.$inode_assoc_BANG_$($edit__$1$$3_editable$$5$$, $n$$635_shift$$14$$ + 5, $hash$$12$$, $key$$78$$, $val$$61$$, $added_leaf_QMARK_$$2$$);
  return $n$$635_shift$$14$$ === $node$$25$$ ? this : $cljs$core$edit_and_set$cljs$0core$0IFn$0_invoke$0arity$04$$(this, $edit__$1$$3_editable$$5$$, $idx$$22$$, $n$$635_shift$$14$$);
};
$JSCompiler_prototypeAlias$$.$inode_assoc$ = function($n$$636_shift$$15$$, $hash$$13$$, $key$$79$$, $val$$62$$, $added_leaf_QMARK_$$3$$) {
  var $idx$$23$$ = $hash$$13$$ >>> $n$$636_shift$$15$$ & 31, $node$$26$$ = this.$arr$[$idx$$23$$];
  if (null == $node$$26$$) {
    return new $cljs$core$ArrayNode$$(null, this.$cnt$ + 1, $cljs$core$clone_and_set$cljs$0core$0IFn$0_invoke$0arity$03$$(this.$arr$, $idx$$23$$, $cljs$core$BitmapIndexedNode$EMPTY$$.$inode_assoc$($n$$636_shift$$15$$ + 5, $hash$$13$$, $key$$79$$, $val$$62$$, $added_leaf_QMARK_$$3$$)));
  }
  $n$$636_shift$$15$$ = $node$$26$$.$inode_assoc$($n$$636_shift$$15$$ + 5, $hash$$13$$, $key$$79$$, $val$$62$$, $added_leaf_QMARK_$$3$$);
  return $n$$636_shift$$15$$ === $node$$26$$ ? this : new $cljs$core$ArrayNode$$(null, this.$cnt$, $cljs$core$clone_and_set$cljs$0core$0IFn$0_invoke$0arity$03$$(this.$arr$, $idx$$23$$, $n$$636_shift$$15$$));
};
$JSCompiler_prototypeAlias$$.$inode_without$ = function($len$$inline_283_n$$637_shift$$17$$, $hash$$15_new_arr$$inline_284$$, $i$$inline_285_key$$81$$) {
  var $JSCompiler_temp$$49_JSCompiler_temp$$50_JSCompiler_temp$$51_idx$$25$$ = $hash$$15_new_arr$$inline_284$$ >>> $len$$inline_283_n$$637_shift$$17$$ & 31, $arr$$inline_282_node$$28$$ = this.$arr$[$JSCompiler_temp$$49_JSCompiler_temp$$50_JSCompiler_temp$$51_idx$$25$$];
  if (null != $arr$$inline_282_node$$28$$) {
    $len$$inline_283_n$$637_shift$$17$$ = $arr$$inline_282_node$$28$$.$inode_without$($len$$inline_283_n$$637_shift$$17$$ + 5, $hash$$15_new_arr$$inline_284$$, $i$$inline_285_key$$81$$);
    if ($len$$inline_283_n$$637_shift$$17$$ === $arr$$inline_282_node$$28$$) {
      $JSCompiler_temp$$49_JSCompiler_temp$$50_JSCompiler_temp$$51_idx$$25$$ = this;
    } else {
      if (null == $len$$inline_283_n$$637_shift$$17$$) {
        if (8 >= this.$cnt$) {
          a: {
            $arr$$inline_282_node$$28$$ = this.$arr$;
            $len$$inline_283_n$$637_shift$$17$$ = $arr$$inline_282_node$$28$$.length;
            $hash$$15_new_arr$$inline_284$$ = Array(2 * (this.$cnt$ - 1));
            $i$$inline_285_key$$81$$ = 0;
            for (var $G__21155$$inline_288_G__21158$$inline_290_j$$inline_286$$ = 1, $G__21156$$inline_289_G__21159$$inline_291_bitmap$$inline_287$$ = 0;;) {
              if ($i$$inline_285_key$$81$$ < $len$$inline_283_n$$637_shift$$17$$) {
                $i$$inline_285_key$$81$$ !== $JSCompiler_temp$$49_JSCompiler_temp$$50_JSCompiler_temp$$51_idx$$25$$ && null != $arr$$inline_282_node$$28$$[$i$$inline_285_key$$81$$] && ($hash$$15_new_arr$$inline_284$$[$G__21155$$inline_288_G__21158$$inline_290_j$$inline_286$$] = $arr$$inline_282_node$$28$$[$i$$inline_285_key$$81$$], $G__21155$$inline_288_G__21158$$inline_290_j$$inline_286$$ += 2, $G__21156$$inline_289_G__21159$$inline_291_bitmap$$inline_287$$ |= 1 << $i$$inline_285_key$$81$$), $i$$inline_285_key$$81$$ += 
                1;
              } else {
                $JSCompiler_temp$$49_JSCompiler_temp$$50_JSCompiler_temp$$51_idx$$25$$ = new $cljs$core$BitmapIndexedNode$$(null, $G__21156$$inline_289_G__21159$$inline_291_bitmap$$inline_287$$, $hash$$15_new_arr$$inline_284$$);
                break a;
              }
            }
          }
        } else {
          $JSCompiler_temp$$49_JSCompiler_temp$$50_JSCompiler_temp$$51_idx$$25$$ = new $cljs$core$ArrayNode$$(null, this.$cnt$ - 1, $cljs$core$clone_and_set$cljs$0core$0IFn$0_invoke$0arity$03$$(this.$arr$, $JSCompiler_temp$$49_JSCompiler_temp$$50_JSCompiler_temp$$51_idx$$25$$, $len$$inline_283_n$$637_shift$$17$$));
        }
      } else {
        $JSCompiler_temp$$49_JSCompiler_temp$$50_JSCompiler_temp$$51_idx$$25$$ = new $cljs$core$ArrayNode$$(null, this.$cnt$, $cljs$core$clone_and_set$cljs$0core$0IFn$0_invoke$0arity$03$$(this.$arr$, $JSCompiler_temp$$49_JSCompiler_temp$$50_JSCompiler_temp$$51_idx$$25$$, $len$$inline_283_n$$637_shift$$17$$));
      }
    }
    return $JSCompiler_temp$$49_JSCompiler_temp$$50_JSCompiler_temp$$51_idx$$25$$;
  }
  return this;
};
function $cljs$core$hash_collision_node_find_index$$($arr$$110$$, $cnt$$19_lim$$, $key$$82$$) {
  $cnt$$19_lim$$ *= 2;
  for (var $i$$481$$ = 0;;) {
    if ($i$$481$$ < $cnt$$19_lim$$) {
      if ($cljs$core$key_test$$($key$$82$$, $arr$$110$$[$i$$481$$])) {
        return $i$$481$$;
      }
      $i$$481$$ += 2;
    } else {
      return -1;
    }
  }
}
function $cljs$core$HashCollisionNode$$($edit$$12$$, $collision_hash$$, $cnt$$20$$, $arr$$111$$) {
  this.$edit$ = $edit$$12$$;
  this.$collision_hash$ = $collision_hash$$;
  this.$cnt$ = $cnt$$20$$;
  this.$arr$ = $arr$$111$$;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$HashCollisionNode$$.prototype;
$JSCompiler_prototypeAlias$$.$ensure_editable$ = function($e$$838$$) {
  if ($e$$838$$ === this.$edit$) {
    return this;
  }
  var $new_arr$$7$$ = Array(2 * (this.$cnt$ + 1));
  $cljs$core$array_copy$$(this.$arr$, 0, $new_arr$$7$$, 0, 2 * this.$cnt$);
  return new $cljs$core$HashCollisionNode$$($e$$838$$, this.$collision_hash$, this.$cnt$, $new_arr$$7$$);
};
$JSCompiler_prototypeAlias$$.$inode_seq$ = function() {
  var $G__21167$$ = this.$arr$;
  return $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$01$$ ? $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$01$$($G__21167$$) : $cljs$core$create_inode_seq$$.call(null, $G__21167$$);
};
$JSCompiler_prototypeAlias$$.$kv_reduce$ = function($f$$578$$, $init$$11$$) {
  return $cljs$core$inode_kv_reduce$$(this.$arr$, $f$$578$$, $init$$11$$);
};
$JSCompiler_prototypeAlias$$.$inode_lookup$ = function($idx$$27_shift$$19$$, $hash$$17$$, $key$$84$$, $not_found$$43$$) {
  $idx$$27_shift$$19$$ = $cljs$core$hash_collision_node_find_index$$(this.$arr$, this.$cnt$, $key$$84$$);
  return 0 > $idx$$27_shift$$19$$ ? $not_found$$43$$ : $cljs$core$key_test$$($key$$84$$, this.$arr$[$idx$$27_shift$$19$$]) ? this.$arr$[$idx$$27_shift$$19$$ + 1] : $not_found$$43$$;
};
$JSCompiler_prototypeAlias$$.$inode_assoc_BANG_$ = function($JSCompiler_inline_result$$52_edit__$1$$5_editable$$inline_803$$, $i$$inline_799_idx$$28_new_arr$$8_shift$$20$$, $hash$$18_j$$inline_801_len$$27$$, $count$$inline_295_key$$85$$, $val$$63$$, $added_leaf_QMARK_$$4$$) {
  if ($hash$$18_j$$inline_801_len$$27$$ === this.$collision_hash$) {
    $i$$inline_799_idx$$28_new_arr$$8_shift$$20$$ = $cljs$core$hash_collision_node_find_index$$(this.$arr$, this.$cnt$, $count$$inline_295_key$$85$$);
    if (-1 === $i$$inline_799_idx$$28_new_arr$$8_shift$$20$$) {
      if (this.$arr$.length > 2 * this.$cnt$) {
        return $i$$inline_799_idx$$28_new_arr$$8_shift$$20$$ = 2 * this.$cnt$, $hash$$18_j$$inline_801_len$$27$$ = 2 * this.$cnt$ + 1, $JSCompiler_inline_result$$52_edit__$1$$5_editable$$inline_803$$ = this.$ensure_editable$($JSCompiler_inline_result$$52_edit__$1$$5_editable$$inline_803$$), $JSCompiler_inline_result$$52_edit__$1$$5_editable$$inline_803$$.$arr$[$i$$inline_799_idx$$28_new_arr$$8_shift$$20$$] = $count$$inline_295_key$$85$$, $JSCompiler_inline_result$$52_edit__$1$$5_editable$$inline_803$$.$arr$[$hash$$18_j$$inline_801_len$$27$$] = 
        $val$$63$$, $added_leaf_QMARK_$$4$$.$val$ = !0, $JSCompiler_inline_result$$52_edit__$1$$5_editable$$inline_803$$.$cnt$ += 1, $JSCompiler_inline_result$$52_edit__$1$$5_editable$$inline_803$$;
      }
      $hash$$18_j$$inline_801_len$$27$$ = this.$arr$.length;
      $i$$inline_799_idx$$28_new_arr$$8_shift$$20$$ = Array($hash$$18_j$$inline_801_len$$27$$ + 2);
      $cljs$core$array_copy$$(this.$arr$, 0, $i$$inline_799_idx$$28_new_arr$$8_shift$$20$$, 0, $hash$$18_j$$inline_801_len$$27$$);
      $i$$inline_799_idx$$28_new_arr$$8_shift$$20$$[$hash$$18_j$$inline_801_len$$27$$] = $count$$inline_295_key$$85$$;
      $i$$inline_799_idx$$28_new_arr$$8_shift$$20$$[$hash$$18_j$$inline_801_len$$27$$ + 1] = $val$$63$$;
      $added_leaf_QMARK_$$4$$.$val$ = !0;
      $count$$inline_295_key$$85$$ = this.$cnt$ + 1;
      $JSCompiler_inline_result$$52_edit__$1$$5_editable$$inline_803$$ === this.$edit$ ? (this.$arr$ = $i$$inline_799_idx$$28_new_arr$$8_shift$$20$$, this.$cnt$ = $count$$inline_295_key$$85$$, $JSCompiler_inline_result$$52_edit__$1$$5_editable$$inline_803$$ = this) : $JSCompiler_inline_result$$52_edit__$1$$5_editable$$inline_803$$ = new $cljs$core$HashCollisionNode$$(this.$edit$, this.$collision_hash$, $count$$inline_295_key$$85$$, $i$$inline_799_idx$$28_new_arr$$8_shift$$20$$);
      return $JSCompiler_inline_result$$52_edit__$1$$5_editable$$inline_803$$;
    }
    return this.$arr$[$i$$inline_799_idx$$28_new_arr$$8_shift$$20$$ + 1] === $val$$63$$ ? this : $cljs$core$edit_and_set$cljs$0core$0IFn$0_invoke$0arity$04$$(this, $JSCompiler_inline_result$$52_edit__$1$$5_editable$$inline_803$$, $i$$inline_799_idx$$28_new_arr$$8_shift$$20$$ + 1, $val$$63$$);
  }
  return (new $cljs$core$BitmapIndexedNode$$($JSCompiler_inline_result$$52_edit__$1$$5_editable$$inline_803$$, 1 << (this.$collision_hash$ >>> $i$$inline_799_idx$$28_new_arr$$8_shift$$20$$ & 31), [null, this, null, null])).$inode_assoc_BANG_$($JSCompiler_inline_result$$52_edit__$1$$5_editable$$inline_803$$, $i$$inline_799_idx$$28_new_arr$$8_shift$$20$$, $hash$$18_j$$inline_801_len$$27$$, $count$$inline_295_key$$85$$, $val$$63$$, $added_leaf_QMARK_$$4$$);
};
$JSCompiler_prototypeAlias$$.$inode_assoc$ = function($idx$$29_len$$28_shift$$21$$, $hash$$19_new_arr$$9$$, $key$$86$$, $val$$64$$, $added_leaf_QMARK_$$5$$) {
  return $hash$$19_new_arr$$9$$ === this.$collision_hash$ ? ($idx$$29_len$$28_shift$$21$$ = $cljs$core$hash_collision_node_find_index$$(this.$arr$, this.$cnt$, $key$$86$$), -1 === $idx$$29_len$$28_shift$$21$$ ? ($idx$$29_len$$28_shift$$21$$ = 2 * this.$cnt$, $hash$$19_new_arr$$9$$ = Array($idx$$29_len$$28_shift$$21$$ + 2), $cljs$core$array_copy$$(this.$arr$, 0, $hash$$19_new_arr$$9$$, 0, $idx$$29_len$$28_shift$$21$$), $hash$$19_new_arr$$9$$[$idx$$29_len$$28_shift$$21$$] = $key$$86$$, $hash$$19_new_arr$$9$$[$idx$$29_len$$28_shift$$21$$ + 
  1] = $val$$64$$, $added_leaf_QMARK_$$5$$.$val$ = !0, new $cljs$core$HashCollisionNode$$(null, this.$collision_hash$, this.$cnt$ + 1, $hash$$19_new_arr$$9$$)) : $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$(this.$arr$[$idx$$29_len$$28_shift$$21$$], $val$$64$$) ? this : new $cljs$core$HashCollisionNode$$(null, this.$collision_hash$, this.$cnt$, $cljs$core$clone_and_set$cljs$0core$0IFn$0_invoke$0arity$03$$(this.$arr$, $idx$$29_len$$28_shift$$21$$ + 1, $val$$64$$))) : (new $cljs$core$BitmapIndexedNode$$(null, 
  1 << (this.$collision_hash$ >>> $idx$$29_len$$28_shift$$21$$ & 31), [null, this])).$inode_assoc$($idx$$29_len$$28_shift$$21$$, $hash$$19_new_arr$$9$$, $key$$86$$, $val$$64$$, $added_leaf_QMARK_$$5$$);
};
$JSCompiler_prototypeAlias$$.$inode_without$ = function($idx$$31_shift$$23$$, $hash$$21$$, $key$$88$$) {
  $idx$$31_shift$$23$$ = $cljs$core$hash_collision_node_find_index$$(this.$arr$, this.$cnt$, $key$$88$$);
  return -1 === $idx$$31_shift$$23$$ ? this : 1 === this.$cnt$ ? null : new $cljs$core$HashCollisionNode$$(null, this.$collision_hash$, this.$cnt$ - 1, $cljs$core$remove_pair$$(this.$arr$, $cljs$core$quot$$($idx$$31_shift$$23$$)));
};
function $cljs$core$create_node$$() {
  switch(arguments.length) {
    case 6:
      return $cljs$core$create_node$cljs$0core$0IFn$0_invoke$0arity$06$$(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return $cljs$core$create_node$cljs$0core$0IFn$0_invoke$0arity$07$$(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([$cljs$core$str$$("Invalid arity: "), $cljs$core$str$$(arguments.length)].join(""));;
  }
}
function $cljs$core$create_node$cljs$0core$0IFn$0_invoke$0arity$06$$($shift$$24$$, $key1$$, $val1$$, $key2hash$$, $key2$$, $val2$$) {
  var $key1hash$$ = $cljs$core$hash$$($key1$$);
  if ($key1hash$$ === $key2hash$$) {
    return new $cljs$core$HashCollisionNode$$(null, $key1hash$$, 2, [$key1$$, $val1$$, $key2$$, $val2$$]);
  }
  var $added_leaf_QMARK_$$6$$ = new $cljs$core$Box$$;
  return $cljs$core$BitmapIndexedNode$EMPTY$$.$inode_assoc$($shift$$24$$, $key1hash$$, $key1$$, $val1$$, $added_leaf_QMARK_$$6$$).$inode_assoc$($shift$$24$$, $key2hash$$, $key2$$, $val2$$, $added_leaf_QMARK_$$6$$);
}
function $cljs$core$create_node$cljs$0core$0IFn$0_invoke$0arity$07$$($edit$$14$$, $shift$$25$$, $key1$$1$$, $val1$$1$$, $key2hash$$1$$, $key2$$1$$, $val2$$1$$) {
  var $key1hash$$1$$ = $cljs$core$hash$$($key1$$1$$);
  if ($key1hash$$1$$ === $key2hash$$1$$) {
    return new $cljs$core$HashCollisionNode$$(null, $key1hash$$1$$, 2, [$key1$$1$$, $val1$$1$$, $key2$$1$$, $val2$$1$$]);
  }
  var $added_leaf_QMARK_$$7$$ = new $cljs$core$Box$$;
  return $cljs$core$BitmapIndexedNode$EMPTY$$.$inode_assoc_BANG_$($edit$$14$$, $shift$$25$$, $key1hash$$1$$, $key1$$1$$, $val1$$1$$, $added_leaf_QMARK_$$7$$).$inode_assoc_BANG_$($edit$$14$$, $shift$$25$$, $key2hash$$1$$, $key2$$1$$, $val2$$1$$, $added_leaf_QMARK_$$7$$);
}
function $cljs$core$NodeSeq$$($meta$$37$$, $nodes$$2$$, $i$$482$$, $s$$188$$, $__hash$$23$$) {
  this.meta = $meta$$37$$;
  this.$nodes$ = $nodes$$2$$;
  this.i = $i$$482$$;
  this.s = $s$$188$$;
  this.$__hash$ = $__hash$$23$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 32374860;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$NodeSeq$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$$46$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$$46$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.meta;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4667__auto__$$13_h__4667__auto____$1$$13$$ = this.$__hash$;
  return null != $h__4667__auto__$$13_h__4667__auto____$1$$13$$ ? $h__4667__auto__$$13_h__4667__auto____$1$$13$$ : this.$__hash$ = $h__4667__auto__$$13_h__4667__auto____$1$$13$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$$395$$, $other$$47$$) {
  return $cljs$core$equiv_sequential$$(this, $other$$47$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$with_meta$$($cljs$core$List$EMPTY$$, this.meta);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$$397$$, $f$$579$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$$579$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$$398$$, $f$$580$$, $start$$29$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$$580$$, $start$$29$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return null == this.s ? new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [this.$nodes$[this.i], this.$nodes$[this.i + 1]], null) : $cljs$core$first$$(this.s);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  if (null == this.s) {
    var $G__21171_G__21174$$ = this.$nodes$, $G__21172_G__21175$$ = this.i + 2;
    return $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$03$$ ? $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$03$$($G__21171_G__21174$$, $G__21172_G__21175$$, null) : $cljs$core$create_inode_seq$$.call(null, $G__21171_G__21174$$, $G__21172_G__21175$$, null);
  }
  var $G__21171_G__21174$$ = this.$nodes$, $G__21172_G__21175$$ = this.i, $G__21176$$ = $cljs$core$next$$(this.s);
  return $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$03$$ ? $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$03$$($G__21171_G__21174$$, $G__21172_G__21175$$, $G__21176$$) : $cljs$core$create_inode_seq$$.call(null, $G__21171_G__21174$$, $G__21172_G__21175$$, $G__21176$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$$401$$, $meta__$1$$10$$) {
  return new $cljs$core$NodeSeq$$($meta__$1$$10$$, this.$nodes$, this.i, this.s, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$$402$$, $o$$286$$) {
  return $cljs$core$cons$$($o$$286$$, this);
};
$cljs$core$NodeSeq$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$create_inode_seq$$() {
  switch(arguments.length) {
    case 1:
      return $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$01$$(arguments[0]);
    case 3:
      return $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$03$$(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([$cljs$core$str$$("Invalid arity: "), $cljs$core$str$$(arguments.length)].join(""));;
  }
}
function $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$01$$($nodes$$4$$) {
  return $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$03$$($nodes$$4$$, 0, null);
}
function $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$03$$($nodes$$5$$, $i$$484_j$$175$$, $len$$29_s$$190$$) {
  if (null == $len$$29_s$$190$$) {
    for ($len$$29_s$$190$$ = $nodes$$5$$.length;;) {
      if ($i$$484_j$$175$$ < $len$$29_s$$190$$) {
        if (null != $nodes$$5$$[$i$$484_j$$175$$]) {
          return new $cljs$core$NodeSeq$$(null, $nodes$$5$$, $i$$484_j$$175$$, null, null);
        }
        var $temp__4423__auto__$$6_temp__4423__auto____$1$$ = $nodes$$5$$[$i$$484_j$$175$$ + 1];
        if ($cljs$core$truth_$$($temp__4423__auto__$$6_temp__4423__auto____$1$$) && ($temp__4423__auto__$$6_temp__4423__auto____$1$$ = $temp__4423__auto__$$6_temp__4423__auto____$1$$.$inode_seq$(), $cljs$core$truth_$$($temp__4423__auto__$$6_temp__4423__auto____$1$$))) {
          return new $cljs$core$NodeSeq$$(null, $nodes$$5$$, $i$$484_j$$175$$ + 2, $temp__4423__auto__$$6_temp__4423__auto____$1$$, null);
        }
        $i$$484_j$$175$$ += 2;
      } else {
        return null;
      }
    }
  } else {
    return new $cljs$core$NodeSeq$$(null, $nodes$$5$$, $i$$484_j$$175$$, $len$$29_s$$190$$, null);
  }
}
function $cljs$core$ArrayNodeSeq$$($meta$$39$$, $nodes$$6$$, $i$$485$$, $s$$191$$, $__hash$$25$$) {
  this.meta = $meta$$39$$;
  this.$nodes$ = $nodes$$6$$;
  this.i = $i$$485$$;
  this.s = $s$$191$$;
  this.$__hash$ = $__hash$$25$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 32374860;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$ArrayNodeSeq$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$$48$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$$48$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.meta;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4667__auto__$$14_h__4667__auto____$1$$14$$ = this.$__hash$;
  return null != $h__4667__auto__$$14_h__4667__auto____$1$$14$$ ? $h__4667__auto__$$14_h__4667__auto____$1$$14$$ : this.$__hash$ = $h__4667__auto__$$14_h__4667__auto____$1$$14$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$$406$$, $other$$49$$) {
  return $cljs$core$equiv_sequential$$(this, $other$$49$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$with_meta$$($cljs$core$List$EMPTY$$, this.meta);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$$408$$, $f$$581$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$$581$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$$409$$, $f$$582$$, $start$$30$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$$582$$, $start$$30$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return $cljs$core$first$$(this.s);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  var $G__21183$$ = this.$nodes$, $G__21184$$ = this.i, $G__21185$$ = $cljs$core$next$$(this.s);
  return $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$04$$(null, $G__21183$$, $G__21184$$, $G__21185$$) : $cljs$core$create_array_node_seq$$.call(null, null, $G__21183$$, $G__21184$$, $G__21185$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$$412$$, $meta__$1$$11$$) {
  return new $cljs$core$ArrayNodeSeq$$($meta__$1$$11$$, this.$nodes$, this.i, this.s, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$$413$$, $o$$287$$) {
  return $cljs$core$cons$$($o$$287$$, this);
};
$cljs$core$ArrayNodeSeq$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$create_array_node_seq$$() {
  switch(arguments.length) {
    case 1:
      return $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$01$$(arguments[0]);
    case 4:
      return $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$04$$(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([$cljs$core$str$$("Invalid arity: "), $cljs$core$str$$(arguments.length)].join(""));;
  }
}
function $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$01$$($nodes$$8$$) {
  return $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$04$$(null, $nodes$$8$$, 0, null);
}
function $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$04$$($meta$$41$$, $nodes$$9$$, $i$$487_j$$176$$, $len$$30_s$$193$$) {
  if (null == $len$$30_s$$193$$) {
    for ($len$$30_s$$193$$ = $nodes$$9$$.length;;) {
      if ($i$$487_j$$176$$ < $len$$30_s$$193$$) {
        var $temp__4423__auto__$$7_temp__4423__auto____$1$$1$$ = $nodes$$9$$[$i$$487_j$$176$$];
        if ($cljs$core$truth_$$($temp__4423__auto__$$7_temp__4423__auto____$1$$1$$) && ($temp__4423__auto__$$7_temp__4423__auto____$1$$1$$ = $temp__4423__auto__$$7_temp__4423__auto____$1$$1$$.$inode_seq$(), $cljs$core$truth_$$($temp__4423__auto__$$7_temp__4423__auto____$1$$1$$))) {
          return new $cljs$core$ArrayNodeSeq$$($meta$$41$$, $nodes$$9$$, $i$$487_j$$176$$ + 1, $temp__4423__auto__$$7_temp__4423__auto____$1$$1$$, null);
        }
        $i$$487_j$$176$$ += 1;
      } else {
        return null;
      }
    }
  } else {
    return new $cljs$core$ArrayNodeSeq$$($meta$$41$$, $nodes$$9$$, $i$$487_j$$176$$, $len$$30_s$$193$$, null);
  }
}
function $cljs$core$PersistentHashMap$$($meta$$42$$, $cnt$$22$$, $root$$8$$, $has_nil_QMARK_$$, $nil_val$$, $__hash$$27$$) {
  this.meta = $meta$$42$$;
  this.$cnt$ = $cnt$$22$$;
  this.root = $root$$8$$;
  this.$has_nil_QMARK_$ = $has_nil_QMARK_$$;
  this.$nil_val$ = $nil_val$$;
  this.$__hash$ = $__hash$$27$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 16123663;
  this.$cljs$lang$protocol_mask$partition1$$ = 8196;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$PersistentHashMap$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$$50$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$$50$$);
};
$JSCompiler_prototypeAlias$$.keys = function() {
  return $cljs$core$es6_iterator$$($cljs$core$keys$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$keys$$.$cljs$core$IFn$_invoke$arity$1$(this) : $cljs$core$keys$$.call(null, this));
};
$JSCompiler_prototypeAlias$$.entries = function() {
  return $cljs$core$es6_entries_iterator$$($cljs$core$seq$$(this));
};
$JSCompiler_prototypeAlias$$.values = function() {
  return $cljs$core$es6_iterator$$($cljs$core$vals$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$vals$$.$cljs$core$IFn$_invoke$arity$1$(this) : $cljs$core$vals$$.call(null, this));
};
$JSCompiler_prototypeAlias$$.has = function($k$$226$$) {
  return $cljs$core$contains_QMARK_$$(this, $k$$226$$);
};
$JSCompiler_prototypeAlias$$.get = function($k$$227$$, $not_found$$45$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$$227$$, $not_found$$45$$);
};
$JSCompiler_prototypeAlias$$.forEach = function($f$$583$$) {
  for (var $G__21216_seq__21194_seq__21194__$1_temp__4425__auto__$$11$$ = $cljs$core$seq$$(this), $G__21202_21220_c__5036__auto__$$2_chunk__21195_vec__21201$$ = null, $G__21218_count__21196$$ = 0, $i__21197$$ = 0;;) {
    if ($i__21197$$ < $G__21218_count__21196$$) {
      var $G__21199_21210_v$$60_vec__21198$$ = $G__21202_21220_c__5036__auto__$$2_chunk__21195_vec__21201$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__21197$$), $G__21200_21211_G__21203_21221_G__21217_k$$228$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__21199_21210_v$$60_vec__21198$$, 0), $G__21199_21210_v$$60_vec__21198$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__21199_21210_v$$60_vec__21198$$, 1);
      $f$$583$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$$583$$.$cljs$core$IFn$_invoke$arity$2$($G__21199_21210_v$$60_vec__21198$$, $G__21200_21211_G__21203_21221_G__21217_k$$228$$) : $f$$583$$.call(null, $G__21199_21210_v$$60_vec__21198$$, $G__21200_21211_G__21203_21221_G__21217_k$$228$$);
      $i__21197$$ += 1;
    } else {
      if ($G__21216_seq__21194_seq__21194__$1_temp__4425__auto__$$11$$ = $cljs$core$seq$$($G__21216_seq__21194_seq__21194__$1_temp__4425__auto__$$11$$)) {
        $cljs$core$chunked_seq_QMARK_$$($G__21216_seq__21194_seq__21194__$1_temp__4425__auto__$$11$$) ? ($G__21202_21220_c__5036__auto__$$2_chunk__21195_vec__21201$$ = $cljs$core$_chunked_first$$($G__21216_seq__21194_seq__21194__$1_temp__4425__auto__$$11$$), $G__21216_seq__21194_seq__21194__$1_temp__4425__auto__$$11$$ = $cljs$core$_chunked_rest$$($G__21216_seq__21194_seq__21194__$1_temp__4425__auto__$$11$$), $G__21200_21211_G__21203_21221_G__21217_k$$228$$ = $G__21202_21220_c__5036__auto__$$2_chunk__21195_vec__21201$$, 
        $G__21218_count__21196$$ = $cljs$core$count$$($G__21202_21220_c__5036__auto__$$2_chunk__21195_vec__21201$$), $G__21202_21220_c__5036__auto__$$2_chunk__21195_vec__21201$$ = $G__21200_21211_G__21203_21221_G__21217_k$$228$$) : ($G__21202_21220_c__5036__auto__$$2_chunk__21195_vec__21201$$ = $cljs$core$first$$($G__21216_seq__21194_seq__21194__$1_temp__4425__auto__$$11$$), $G__21200_21211_G__21203_21221_G__21217_k$$228$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__21202_21220_c__5036__auto__$$2_chunk__21195_vec__21201$$, 
        0), $G__21202_21220_c__5036__auto__$$2_chunk__21195_vec__21201$$ = $G__21199_21210_v$$60_vec__21198$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__21202_21220_c__5036__auto__$$2_chunk__21195_vec__21201$$, 1), $f$$583$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$$583$$.$cljs$core$IFn$_invoke$arity$2$($G__21202_21220_c__5036__auto__$$2_chunk__21195_vec__21201$$, $G__21200_21211_G__21203_21221_G__21217_k$$228$$) : $f$$583$$.call(null, $G__21202_21220_c__5036__auto__$$2_chunk__21195_vec__21201$$, 
        $G__21200_21211_G__21203_21221_G__21217_k$$228$$), $G__21216_seq__21194_seq__21194__$1_temp__4425__auto__$$11$$ = $cljs$core$next$$($G__21216_seq__21194_seq__21194__$1_temp__4425__auto__$$11$$), $G__21202_21220_c__5036__auto__$$2_chunk__21195_vec__21201$$ = null, $G__21218_count__21196$$ = 0), $i__21197$$ = 0;
      } else {
        return null;
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($coll$$421$$, $k$$229$$) {
  return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$(this, $k$$229$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($coll$$422$$, $k$$230$$, $not_found$$46$$) {
  return null == $k$$230$$ ? this.$has_nil_QMARK_$ ? this.$nil_val$ : $not_found$$46$$ : null == this.root ? $not_found$$46$$ : this.root.$inode_lookup$(0, $cljs$core$hash$$($k$$230$$), $k$$230$$, $not_found$$46$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IKVReduce$_kv_reduce$arity$3$ = function($G__21206$$inline_298_coll$$423$$, $f$$584$$, $JSCompiler_temp$$53_init$$12_init__$1$$7$$) {
  this.$has_nil_QMARK_$ && ($G__21206$$inline_298_coll$$423$$ = this.$nil_val$, $JSCompiler_temp$$53_init$$12_init__$1$$7$$ = $f$$584$$.$cljs$core$IFn$_invoke$arity$3$ ? $f$$584$$.$cljs$core$IFn$_invoke$arity$3$($JSCompiler_temp$$53_init$$12_init__$1$$7$$, null, $G__21206$$inline_298_coll$$423$$) : $f$$584$$.call(null, $JSCompiler_temp$$53_init$$12_init__$1$$7$$, null, $G__21206$$inline_298_coll$$423$$));
  return $cljs$core$reduced_QMARK_$$($JSCompiler_temp$$53_init$$12_init__$1$$7$$) ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$$53_init$$12_init__$1$$7$$) : $cljs$core$deref$$.call(null, $JSCompiler_temp$$53_init$$12_init__$1$$7$$) : null != this.root ? this.root.$kv_reduce$($f$$584$$, $JSCompiler_temp$$53_init$$12_init__$1$$7$$) : $JSCompiler_temp$$53_init$$12_init__$1$$7$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.meta;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return this.$cnt$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4667__auto__$$15_h__4667__auto____$1$$15$$ = this.$__hash$;
  return null != $h__4667__auto__$$15_h__4667__auto____$1$$15$$ ? $h__4667__auto__$$15_h__4667__auto____$1$$15$$ : this.$__hash$ = $h__4667__auto__$$15_h__4667__auto____$1$$15$$ = $cljs$core$hash_unordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$$427$$, $other$$51$$) {
  return $cljs$core$equiv_map$$(this, $other$$51$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEditableCollection$_as_transient$arity$1$ = function() {
  return new $cljs$core$TransientHashMap$$({}, this.root, this.$cnt$, this.$has_nil_QMARK_$, this.$nil_val$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$_with_meta$$($cljs$core$PersistentHashMap$EMPTY$$, this.meta);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMap$_dissoc$arity$2$ = function($coll$$430$$, $k$$231$$) {
  if (null == $k$$231$$) {
    return this.$has_nil_QMARK_$ ? new $cljs$core$PersistentHashMap$$(this.meta, this.$cnt$ - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var $new_root$$5$$ = this.root.$inode_without$(0, $cljs$core$hash$$($k$$231$$), $k$$231$$);
  return $new_root$$5$$ === this.root ? this : new $cljs$core$PersistentHashMap$$(this.meta, this.$cnt$ - 1, $new_root$$5$$, this.$has_nil_QMARK_$, this.$nil_val$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IAssociative$_assoc$arity$3$ = function($added_leaf_QMARK_$$8_coll$$431$$, $k$$232_new_root$$6$$, $v$$61$$) {
  if (null == $k$$232_new_root$$6$$) {
    return this.$has_nil_QMARK_$ && $v$$61$$ === this.$nil_val$ ? this : new $cljs$core$PersistentHashMap$$(this.meta, this.$has_nil_QMARK_$ ? this.$cnt$ : this.$cnt$ + 1, this.root, !0, $v$$61$$, null);
  }
  $added_leaf_QMARK_$$8_coll$$431$$ = new $cljs$core$Box$$;
  $k$$232_new_root$$6$$ = (null == this.root ? $cljs$core$BitmapIndexedNode$EMPTY$$ : this.root).$inode_assoc$(0, $cljs$core$hash$$($k$$232_new_root$$6$$), $k$$232_new_root$$6$$, $v$$61$$, $added_leaf_QMARK_$$8_coll$$431$$);
  return $k$$232_new_root$$6$$ === this.root ? this : new $cljs$core$PersistentHashMap$$(this.meta, $added_leaf_QMARK_$$8_coll$$431$$.$val$ ? this.$cnt$ + 1 : this.$cnt$, $k$$232_new_root$$6$$, this.$has_nil_QMARK_$, this.$nil_val$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IAssociative$_contains_key_QMARK_$arity$2$ = function($coll$$432$$, $k$$233$$) {
  return null == $k$$233$$ ? this.$has_nil_QMARK_$ : null == this.root ? !1 : this.root.$inode_lookup$(0, $cljs$core$hash$$($k$$233$$), $k$$233$$, $cljs$core$lookup_sentinel$$) !== $cljs$core$lookup_sentinel$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  if (0 < this.$cnt$) {
    var $s$$194$$ = null != this.root ? this.root.$inode_seq$() : null;
    return this.$has_nil_QMARK_$ ? $cljs$core$cons$$(new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [null, this.$nil_val$], null), $s$$194$$) : $s$$194$$;
  }
  return null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$$434$$, $meta__$1$$12$$) {
  return new $cljs$core$PersistentHashMap$$($meta__$1$$12$$, this.$cnt$, this.root, this.$has_nil_QMARK_$, this.$nil_val$, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$$435$$, $entry$$4$$) {
  if ($cljs$core$vector_QMARK_$$($entry$$4$$)) {
    return $cljs$core$_assoc$$(this, $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($entry$$4$$, 0), $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($entry$$4$$, 1));
  }
  for (var $G__21226_ret$$21$$ = this, $G__21227_es$$2$$ = $cljs$core$seq$$($entry$$4$$);;) {
    if (null == $G__21227_es$$2$$) {
      return $G__21226_ret$$21$$;
    }
    var $e$$840$$ = $cljs$core$first$$($G__21227_es$$2$$);
    if ($cljs$core$vector_QMARK_$$($e$$840$$)) {
      $G__21226_ret$$21$$ = $cljs$core$_assoc$$($G__21226_ret$$21$$, $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($e$$840$$, 0), $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($e$$840$$, 1)), $G__21227_es$$2$$ = $cljs$core$next$$($G__21227_es$$2$$);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
$JSCompiler_prototypeAlias$$.call = function() {
  var $G__21228$$ = null, $G__21228$$ = function($G__21228$$, $k$$236$$, $not_found$$48$$) {
    switch(arguments.length) {
      case 2:
        return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$$236$$);
      case 3:
        return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$$236$$, $not_found$$48$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__21228$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__21228$$, $k$$234$$) {
    return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$$234$$);
  };
  $G__21228$$.$cljs$core$IFn$_invoke$arity$3$ = function($G__21228$$, $k$$235$$, $not_found$$47$$) {
    return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$$235$$, $not_found$$47$$);
  };
  return $G__21228$$;
}();
$JSCompiler_prototypeAlias$$.apply = function($self__$$584$$, $args21191$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args21191$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($k$$237$$) {
  return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$$237$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($k$$238$$, $not_found$$49$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$$238$$, $not_found$$49$$);
};
var $cljs$core$PersistentHashMap$EMPTY$$ = new $cljs$core$PersistentHashMap$$(null, 0, null, !1, null, $cljs$core$empty_unordered_hash$$);
$cljs$core$PersistentHashMap$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$TransientHashMap$$($edit$$15$$, $root$$10$$, $count$$18$$, $has_nil_QMARK_$$2$$, $nil_val$$2$$) {
  this.$edit$ = $edit$$15$$;
  this.root = $root$$10$$;
  this.count = $count$$18$$;
  this.$has_nil_QMARK_$ = $has_nil_QMARK_$$2$$;
  this.$nil_val$ = $nil_val$$2$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 258;
  this.$cljs$lang$protocol_mask$partition1$$ = 56;
}
function $JSCompiler_StaticMethods_conj_BANG_$$($JSCompiler_StaticMethods_conj_BANG_$self$$, $o$$288$$) {
  if ($JSCompiler_StaticMethods_conj_BANG_$self$$.$edit$) {
    if ($o$$288$$ ? $o$$288$$.$cljs$lang$protocol_mask$partition0$$ & 2048 || $o$$288$$.$cljs$core$IMapEntry$$ || ($o$$288$$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IMapEntry$$, $o$$288$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IMapEntry$$, $o$$288$$)) {
      return $JSCompiler_StaticMethods_assoc_BANG_$$($JSCompiler_StaticMethods_conj_BANG_$self$$, $cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$($o$$288$$) : $cljs$core$key$$.call(null, $o$$288$$), $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$($o$$288$$) : $cljs$core$val$$.call(null, $o$$288$$));
    }
    for (var $G__21238_es$$3$$ = $cljs$core$seq$$($o$$288$$), $G__21239_tcoll__$1$$13$$ = $JSCompiler_StaticMethods_conj_BANG_$self$$;;) {
      var $temp__4423__auto__$$8$$ = $cljs$core$first$$($G__21238_es$$3$$);
      if ($cljs$core$truth_$$($temp__4423__auto__$$8$$)) {
        var $e$$841$$ = $temp__4423__auto__$$8$$, $G__21238_es$$3$$ = $cljs$core$next$$($G__21238_es$$3$$), $G__21239_tcoll__$1$$13$$ = $JSCompiler_StaticMethods_assoc_BANG_$$($G__21239_tcoll__$1$$13$$, function() {
          var $JSCompiler_StaticMethods_conj_BANG_$self$$ = $e$$841$$;
          return $cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_StaticMethods_conj_BANG_$self$$) : $cljs$core$key$$.call(null, $JSCompiler_StaticMethods_conj_BANG_$self$$);
        }(), function() {
          var $JSCompiler_StaticMethods_conj_BANG_$self$$ = $e$$841$$;
          return $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_StaticMethods_conj_BANG_$self$$) : $cljs$core$val$$.call(null, $JSCompiler_StaticMethods_conj_BANG_$self$$);
        }())
      } else {
        return $G__21239_tcoll__$1$$13$$;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function $JSCompiler_StaticMethods_assoc_BANG_$$($JSCompiler_StaticMethods_assoc_BANG_$self$$, $k$$239_node$$30$$, $v$$62$$) {
  if ($JSCompiler_StaticMethods_assoc_BANG_$self$$.$edit$) {
    if (null == $k$$239_node$$30$$) {
      $JSCompiler_StaticMethods_assoc_BANG_$self$$.$nil_val$ !== $v$$62$$ && ($JSCompiler_StaticMethods_assoc_BANG_$self$$.$nil_val$ = $v$$62$$), $JSCompiler_StaticMethods_assoc_BANG_$self$$.$has_nil_QMARK_$ || ($JSCompiler_StaticMethods_assoc_BANG_$self$$.count += 1, $JSCompiler_StaticMethods_assoc_BANG_$self$$.$has_nil_QMARK_$ = !0);
    } else {
      var $added_leaf_QMARK_$$9$$ = new $cljs$core$Box$$;
      $k$$239_node$$30$$ = (null == $JSCompiler_StaticMethods_assoc_BANG_$self$$.root ? $cljs$core$BitmapIndexedNode$EMPTY$$ : $JSCompiler_StaticMethods_assoc_BANG_$self$$.root).$inode_assoc_BANG_$($JSCompiler_StaticMethods_assoc_BANG_$self$$.$edit$, 0, $cljs$core$hash$$($k$$239_node$$30$$), $k$$239_node$$30$$, $v$$62$$, $added_leaf_QMARK_$$9$$);
      $k$$239_node$$30$$ !== $JSCompiler_StaticMethods_assoc_BANG_$self$$.root && ($JSCompiler_StaticMethods_assoc_BANG_$self$$.root = $k$$239_node$$30$$);
      $added_leaf_QMARK_$$9$$.$val$ && ($JSCompiler_StaticMethods_assoc_BANG_$self$$.count += 1);
    }
    return $JSCompiler_StaticMethods_assoc_BANG_$self$$;
  }
  throw Error("assoc! after persistent!");
}
$JSCompiler_prototypeAlias$$ = $cljs$core$TransientHashMap$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  if (this.$edit$) {
    return this.count;
  }
  throw Error("count after persistent!");
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($tcoll$$33$$, $k$$241$$) {
  return null == $k$$241$$ ? this.$has_nil_QMARK_$ ? this.$nil_val$ : null : null == this.root ? null : this.root.$inode_lookup$(0, $cljs$core$hash$$($k$$241$$), $k$$241$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($tcoll$$34$$, $k$$242$$, $not_found$$50$$) {
  return null == $k$$242$$ ? this.$has_nil_QMARK_$ ? this.$nil_val$ : $not_found$$50$$ : null == this.root ? $not_found$$50$$ : this.root.$inode_lookup$(0, $cljs$core$hash$$($k$$242$$), $k$$242$$, $not_found$$50$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientCollection$_conj_BANG_$arity$2$ = function($tcoll$$35$$, $val$$65$$) {
  return $JSCompiler_StaticMethods_conj_BANG_$$(this, $val$$65$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientCollection$_persistent_BANG_$arity$1$ = function() {
  var $JSCompiler_inline_result$$55$$;
  if (this.$edit$) {
    this.$edit$ = null, $JSCompiler_inline_result$$55$$ = new $cljs$core$PersistentHashMap$$(null, this.count, this.root, this.$has_nil_QMARK_$, this.$nil_val$, null);
  } else {
    throw Error("persistent! called twice");
  }
  return $JSCompiler_inline_result$$55$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientAssociative$_assoc_BANG_$arity$3$ = function($tcoll$$37$$, $key$$89$$, $val$$66$$) {
  return $JSCompiler_StaticMethods_assoc_BANG_$$(this, $key$$89$$, $val$$66$$);
};
var $cljs$core$hash_map$$ = function $cljs$core$hash_map$$() {
  return $cljs$core$hash_map$$.$cljs$core$IFn$_invoke$arity$variadic$(0 < arguments.length ? new $cljs$core$IndexedSeq$$(Array.prototype.slice.call(arguments, 0), 0) : null);
};
$cljs$core$hash_map$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($G__21358_keyvals$$1$$) {
  for (var $in$$$2_val$$inline_807$$ = $cljs$core$seq$$($G__21358_keyvals$$1$$), $G__21359_out$$4$$ = $cljs$core$_as_transient$$($cljs$core$PersistentHashMap$EMPTY$$);;) {
    if ($in$$$2_val$$inline_807$$) {
      $G__21358_keyvals$$1$$ = $cljs$core$next$$($cljs$core$next$$($in$$$2_val$$inline_807$$));
      var $key$$inline_806$$ = $cljs$core$first$$($in$$$2_val$$inline_807$$), $in$$$2_val$$inline_807$$ = $cljs$core$first$$($cljs$core$next$$($in$$$2_val$$inline_807$$)), $G__21359_out$$4$$ = $cljs$core$_assoc_BANG_$$($G__21359_out$$4$$, $key$$inline_806$$, $in$$$2_val$$inline_807$$), $in$$$2_val$$inline_807$$ = $G__21358_keyvals$$1$$;
    } else {
      return $cljs$core$_persistent_BANG_$$($G__21359_out$$4$$);
    }
  }
};
$cljs$core$hash_map$$.$cljs$lang$maxFixedArity$ = 0;
$cljs$core$hash_map$$.$cljs$lang$applyTo$ = function($seq21357$$) {
  return $cljs$core$hash_map$$.$cljs$core$IFn$_invoke$arity$variadic$($cljs$core$seq$$($seq21357$$));
};
var $cljs$core$array_map$$ = function $cljs$core$array_map$$() {
  return $cljs$core$array_map$$.$cljs$core$IFn$_invoke$arity$variadic$(0 < arguments.length ? new $cljs$core$IndexedSeq$$(Array.prototype.slice.call(arguments, 0), 0) : null);
};
$cljs$core$array_map$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($arr$$inline_1014_keyvals$$2$$) {
  $arr$$inline_1014_keyvals$$2$$ = $arr$$inline_1014_keyvals$$2$$ instanceof $cljs$core$IndexedSeq$$ && 0 === $arr$$inline_1014_keyvals$$2$$.i ? $arr$$inline_1014_keyvals$$2$$.$arr$ : $cljs$core$into_array$cljs$0core$0IFn$0_invoke$0arity$02$$($arr$$inline_1014_keyvals$$2$$);
  for (var $ret$$inline_1015$$ = [], $i_21092$$inline_1016$$ = 0;;) {
    if ($i_21092$$inline_1016$$ < $arr$$inline_1014_keyvals$$2$$.length) {
      var $k_21093$$inline_1017$$ = $arr$$inline_1014_keyvals$$2$$[$i_21092$$inline_1016$$], $v_21094$$inline_1018$$ = $arr$$inline_1014_keyvals$$2$$[$i_21092$$inline_1016$$ + 1];
      -1 === $cljs$core$array_index_of$$($ret$$inline_1015$$, $k_21093$$inline_1017$$) && ($ret$$inline_1015$$.push($k_21093$$inline_1017$$), $ret$$inline_1015$$.push($v_21094$$inline_1018$$));
      $i_21092$$inline_1016$$ += 2;
    } else {
      break;
    }
  }
  return new $cljs$core$PersistentArrayMap$$(null, $ret$$inline_1015$$.length / 2, $ret$$inline_1015$$, null);
};
$cljs$core$array_map$$.$cljs$lang$maxFixedArity$ = 0;
$cljs$core$array_map$$.$cljs$lang$applyTo$ = function($seq21360$$) {
  return $cljs$core$array_map$$.$cljs$core$IFn$_invoke$arity$variadic$($cljs$core$seq$$($seq21360$$));
};
function $cljs$core$KeySeq$$($mseq$$, $_meta$$7$$) {
  this.$mseq$ = $mseq$$;
  this.$_meta$ = $_meta$$7$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 32374988;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$KeySeq$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$$58$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$$58$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$_meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  var $G__21372$$inline_302_nseq$$ = this.$mseq$, $G__21372$$inline_302_nseq$$ = ($G__21372$$inline_302_nseq$$ ? $G__21372$$inline_302_nseq$$.$cljs$lang$protocol_mask$partition0$$ & 128 || $G__21372$$inline_302_nseq$$.$cljs$core$INext$$ || ($G__21372$$inline_302_nseq$$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$INext$$, $G__21372$$inline_302_nseq$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$INext$$, $G__21372$$inline_302_nseq$$)) ? this.$mseq$.$cljs$core$INext$_next$arity$1$(null) : 
  $cljs$core$next$$(this.$mseq$);
  return null == $G__21372$$inline_302_nseq$$ ? null : new $cljs$core$KeySeq$$($G__21372$$inline_302_nseq$$, this.$_meta$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  return $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$$490$$, $other$$59$$) {
  return $cljs$core$equiv_sequential$$(this, $other$$59$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$with_meta$$($cljs$core$List$EMPTY$$, this.$_meta$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$$492$$, $f$$596$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$$596$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$$493$$, $f$$597$$, $start$$34$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$$597$$, $start$$34$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return this.$mseq$.$cljs$core$ISeq$_first$arity$1$(null).$cljs$core$IMapEntry$_key$arity$1$();
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  var $G__21373$$inline_304_nseq$$1$$ = this.$mseq$, $G__21373$$inline_304_nseq$$1$$ = ($G__21373$$inline_304_nseq$$1$$ ? $G__21373$$inline_304_nseq$$1$$.$cljs$lang$protocol_mask$partition0$$ & 128 || $G__21373$$inline_304_nseq$$1$$.$cljs$core$INext$$ || ($G__21373$$inline_304_nseq$$1$$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$INext$$, $G__21373$$inline_304_nseq$$1$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$INext$$, $G__21373$$inline_304_nseq$$1$$)) ? 
  this.$mseq$.$cljs$core$INext$_next$arity$1$(null) : $cljs$core$next$$(this.$mseq$);
  return null != $G__21373$$inline_304_nseq$$1$$ ? new $cljs$core$KeySeq$$($G__21373$$inline_304_nseq$$1$$, this.$_meta$) : $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$$497$$, $new_meta$$5$$) {
  return new $cljs$core$KeySeq$$(this.$mseq$, $new_meta$$5$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$$498$$, $o$$292$$) {
  return $cljs$core$cons$$($o$$292$$, this);
};
$cljs$core$KeySeq$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$keys$$($hash_map_temp__4425__auto__$$13$$) {
  return ($hash_map_temp__4425__auto__$$13$$ = $cljs$core$seq$$($hash_map_temp__4425__auto__$$13$$)) ? new $cljs$core$KeySeq$$($hash_map_temp__4425__auto__$$13$$, null) : null;
}
function $cljs$core$key$$($map_entry$$) {
  return $cljs$core$_key$$($map_entry$$);
}
function $cljs$core$ValSeq$$($mseq$$3$$, $_meta$$9$$) {
  this.$mseq$ = $mseq$$3$$;
  this.$_meta$ = $_meta$$9$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 32374988;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$ValSeq$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$$60$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$$60$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$_meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  var $G__21374$$inline_306_nseq$$2$$ = this.$mseq$, $G__21374$$inline_306_nseq$$2$$ = ($G__21374$$inline_306_nseq$$2$$ ? $G__21374$$inline_306_nseq$$2$$.$cljs$lang$protocol_mask$partition0$$ & 128 || $G__21374$$inline_306_nseq$$2$$.$cljs$core$INext$$ || ($G__21374$$inline_306_nseq$$2$$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$INext$$, $G__21374$$inline_306_nseq$$2$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$INext$$, $G__21374$$inline_306_nseq$$2$$)) ? 
  this.$mseq$.$cljs$core$INext$_next$arity$1$(null) : $cljs$core$next$$(this.$mseq$);
  return null == $G__21374$$inline_306_nseq$$2$$ ? null : new $cljs$core$ValSeq$$($G__21374$$inline_306_nseq$$2$$, this.$_meta$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  return $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$$503$$, $other$$61$$) {
  return $cljs$core$equiv_sequential$$(this, $other$$61$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$with_meta$$($cljs$core$List$EMPTY$$, this.$_meta$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$$505$$, $f$$598$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$$598$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$$506$$, $f$$599$$, $start$$35$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$$599$$, $start$$35$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return this.$mseq$.$cljs$core$ISeq$_first$arity$1$(null).$cljs$core$IMapEntry$_val$arity$1$();
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  var $G__21375$$inline_308_nseq$$3$$ = this.$mseq$, $G__21375$$inline_308_nseq$$3$$ = ($G__21375$$inline_308_nseq$$3$$ ? $G__21375$$inline_308_nseq$$3$$.$cljs$lang$protocol_mask$partition0$$ & 128 || $G__21375$$inline_308_nseq$$3$$.$cljs$core$INext$$ || ($G__21375$$inline_308_nseq$$3$$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$INext$$, $G__21375$$inline_308_nseq$$3$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$INext$$, $G__21375$$inline_308_nseq$$3$$)) ? 
  this.$mseq$.$cljs$core$INext$_next$arity$1$(null) : $cljs$core$next$$(this.$mseq$);
  return null != $G__21375$$inline_308_nseq$$3$$ ? new $cljs$core$ValSeq$$($G__21375$$inline_308_nseq$$3$$, this.$_meta$) : $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$$510$$, $new_meta$$6$$) {
  return new $cljs$core$ValSeq$$(this.$mseq$, $new_meta$$6$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$$511$$, $o$$293$$) {
  return $cljs$core$cons$$($o$$293$$, this);
};
$cljs$core$ValSeq$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$vals$$($hash_map$$1_temp__4425__auto__$$14$$) {
  return ($hash_map$$1_temp__4425__auto__$$14$$ = $cljs$core$seq$$($hash_map$$1_temp__4425__auto__$$14$$)) ? new $cljs$core$ValSeq$$($hash_map$$1_temp__4425__auto__$$14$$, null) : null;
}
function $cljs$core$val$$($map_entry$$1$$) {
  return $cljs$core$_val$$($map_entry$$1$$);
}
var $cljs$core$merge$$ = function $cljs$core$merge$$() {
  return $cljs$core$merge$$.$cljs$core$IFn$_invoke$arity$variadic$(0 < arguments.length ? new $cljs$core$IndexedSeq$$(Array.prototype.slice.call(arguments, 0), 0) : null);
};
$cljs$core$merge$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($maps$$) {
  return $cljs$core$truth_$$($cljs$core$some$$($maps$$)) ? $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$(function($maps$$, $p2__21377_SHARP_$$) {
    return $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$truth_$$($maps$$) ? $maps$$ : $cljs$core$PersistentArrayMap$EMPTY$$, $p2__21377_SHARP_$$);
  }, $maps$$) : null;
};
$cljs$core$merge$$.$cljs$lang$maxFixedArity$ = 0;
$cljs$core$merge$$.$cljs$lang$applyTo$ = function($seq21378$$) {
  return $cljs$core$merge$$.$cljs$core$IFn$_invoke$arity$variadic$($cljs$core$seq$$($seq21378$$));
};
function $cljs$core$PersistentHashSet$$($meta$$50$$, $hash_map$$2$$, $__hash$$37$$) {
  this.meta = $meta$$50$$;
  this.$hash_map$ = $hash_map$$2$$;
  this.$__hash$ = $__hash$$37$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 15077647;
  this.$cljs$lang$protocol_mask$partition1$$ = 8196;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$PersistentHashSet$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$$62$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$$62$$);
};
$JSCompiler_prototypeAlias$$.keys = function() {
  return $cljs$core$es6_iterator$$($cljs$core$seq$$(this));
};
$JSCompiler_prototypeAlias$$.entries = function() {
  var $coll$$inline_310$$ = $cljs$core$seq$$(this);
  return new $cljs$core$ES6SetEntriesIterator$$($cljs$core$seq$$($coll$$inline_310$$));
};
$JSCompiler_prototypeAlias$$.values = function() {
  return $cljs$core$es6_iterator$$($cljs$core$seq$$(this));
};
$JSCompiler_prototypeAlias$$.has = function($k$$278$$) {
  return $cljs$core$contains_QMARK_$$(this, $k$$278$$);
};
$JSCompiler_prototypeAlias$$.forEach = function($f$$601$$) {
  for (var $G__21403_seq__21387_seq__21387__$1_temp__4425__auto__$$15$$ = $cljs$core$seq$$(this), $G__21395_21407_c__5036__auto__$$4_chunk__21388_vec__21394$$ = null, $G__21405_count__21389$$ = 0, $i__21390$$ = 0;;) {
    if ($i__21390$$ < $G__21405_count__21389$$) {
      var $G__21392_21397_v$$72_vec__21391$$ = $G__21395_21407_c__5036__auto__$$4_chunk__21388_vec__21394$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__21390$$), $G__21393_21398_G__21396_21408_G__21404_k$$279$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__21392_21397_v$$72_vec__21391$$, 0), $G__21392_21397_v$$72_vec__21391$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__21392_21397_v$$72_vec__21391$$, 1);
      $f$$601$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$$601$$.$cljs$core$IFn$_invoke$arity$2$($G__21392_21397_v$$72_vec__21391$$, $G__21393_21398_G__21396_21408_G__21404_k$$279$$) : $f$$601$$.call(null, $G__21392_21397_v$$72_vec__21391$$, $G__21393_21398_G__21396_21408_G__21404_k$$279$$);
      $i__21390$$ += 1;
    } else {
      if ($G__21403_seq__21387_seq__21387__$1_temp__4425__auto__$$15$$ = $cljs$core$seq$$($G__21403_seq__21387_seq__21387__$1_temp__4425__auto__$$15$$)) {
        $cljs$core$chunked_seq_QMARK_$$($G__21403_seq__21387_seq__21387__$1_temp__4425__auto__$$15$$) ? ($G__21395_21407_c__5036__auto__$$4_chunk__21388_vec__21394$$ = $cljs$core$_chunked_first$$($G__21403_seq__21387_seq__21387__$1_temp__4425__auto__$$15$$), $G__21403_seq__21387_seq__21387__$1_temp__4425__auto__$$15$$ = $cljs$core$_chunked_rest$$($G__21403_seq__21387_seq__21387__$1_temp__4425__auto__$$15$$), $G__21393_21398_G__21396_21408_G__21404_k$$279$$ = $G__21395_21407_c__5036__auto__$$4_chunk__21388_vec__21394$$, 
        $G__21405_count__21389$$ = $cljs$core$count$$($G__21395_21407_c__5036__auto__$$4_chunk__21388_vec__21394$$), $G__21395_21407_c__5036__auto__$$4_chunk__21388_vec__21394$$ = $G__21393_21398_G__21396_21408_G__21404_k$$279$$) : ($G__21395_21407_c__5036__auto__$$4_chunk__21388_vec__21394$$ = $cljs$core$first$$($G__21403_seq__21387_seq__21387__$1_temp__4425__auto__$$15$$), $G__21393_21398_G__21396_21408_G__21404_k$$279$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__21395_21407_c__5036__auto__$$4_chunk__21388_vec__21394$$, 
        0), $G__21395_21407_c__5036__auto__$$4_chunk__21388_vec__21394$$ = $G__21392_21397_v$$72_vec__21391$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__21395_21407_c__5036__auto__$$4_chunk__21388_vec__21394$$, 1), $f$$601$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$$601$$.$cljs$core$IFn$_invoke$arity$2$($G__21395_21407_c__5036__auto__$$4_chunk__21388_vec__21394$$, $G__21393_21398_G__21396_21408_G__21404_k$$279$$) : $f$$601$$.call(null, $G__21395_21407_c__5036__auto__$$4_chunk__21388_vec__21394$$, 
        $G__21393_21398_G__21396_21408_G__21404_k$$279$$), $G__21403_seq__21387_seq__21387__$1_temp__4425__auto__$$15$$ = $cljs$core$next$$($G__21403_seq__21387_seq__21387__$1_temp__4425__auto__$$15$$), $G__21395_21407_c__5036__auto__$$4_chunk__21388_vec__21394$$ = null, $G__21405_count__21389$$ = 0), $i__21390$$ = 0;
      } else {
        return null;
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($coll$$518$$, $v$$73$$) {
  return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$(this, $v$$73$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($coll$$519$$, $v$$74$$, $not_found$$66$$) {
  return $cljs$core$_contains_key_QMARK_$$(this.$hash_map$, $v$$74$$) ? $v$$74$$ : $not_found$$66$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.meta;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return $cljs$core$_count$$(this.$hash_map$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4667__auto__$$20_h__4667__auto____$1$$20$$ = this.$__hash$;
  return null != $h__4667__auto__$$20_h__4667__auto____$1$$20$$ ? $h__4667__auto__$$20_h__4667__auto____$1$$20$$ : this.$__hash$ = $h__4667__auto__$$20_h__4667__auto____$1$$20$$ = $cljs$core$hash_unordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$$523$$, $other$$63$$) {
  return $cljs$core$set_QMARK_$$($other$$63$$) && $cljs$core$count$$(this) === $cljs$core$count$$($other$$63$$) && $cljs$core$every_QMARK_$$(function($coll$$523$$) {
    return function($other$$63$$) {
      return $cljs$core$contains_QMARK_$$($coll$$523$$, $other$$63$$);
    };
  }(this), $other$$63$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEditableCollection$_as_transient$arity$1$ = function() {
  return new $cljs$core$TransientHashSet$$($cljs$core$_as_transient$$(this.$hash_map$));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$with_meta$$($cljs$core$PersistentHashSet$EMPTY$$, this.meta);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return $cljs$core$keys$$(this.$hash_map$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$$528$$, $meta__$1$$15$$) {
  return new $cljs$core$PersistentHashSet$$($meta__$1$$15$$, this.$hash_map$, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$$529$$, $o$$294$$) {
  return new $cljs$core$PersistentHashSet$$(this.meta, $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$(this.$hash_map$, $o$$294$$, null), null);
};
$JSCompiler_prototypeAlias$$.call = function() {
  var $G__21413$$ = null, $G__21413$$ = function($G__21413$$, $k$$282$$, $not_found$$68$$) {
    switch(arguments.length) {
      case 2:
        return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$$282$$);
      case 3:
        return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$$282$$, $not_found$$68$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__21413$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__21413$$, $k$$280$$) {
    return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$$280$$);
  };
  $G__21413$$.$cljs$core$IFn$_invoke$arity$3$ = function($G__21413$$, $k$$281$$, $not_found$$67$$) {
    return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$$281$$, $not_found$$67$$);
  };
  return $G__21413$$;
}();
$JSCompiler_prototypeAlias$$.apply = function($self__$$770$$, $args21386$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args21386$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($k$$283$$) {
  return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$$283$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($k$$284$$, $not_found$$69$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$$284$$, $not_found$$69$$);
};
var $cljs$core$PersistentHashSet$EMPTY$$ = new $cljs$core$PersistentHashSet$$(null, $cljs$core$PersistentArrayMap$EMPTY$$, $cljs$core$empty_unordered_hash$$);
$cljs$core$PersistentHashSet$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$TransientHashSet$$($transient_map$$) {
  this.$transient_map$ = $transient_map$$;
  this.$cljs$lang$protocol_mask$partition1$$ = 136;
  this.$cljs$lang$protocol_mask$partition0$$ = 259;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$TransientHashSet$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientCollection$_conj_BANG_$arity$2$ = function($tcoll$$39$$, $o$$295$$) {
  this.$transient_map$ = $cljs$core$_assoc_BANG_$$(this.$transient_map$, $o$$295$$, null);
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientCollection$_persistent_BANG_$arity$1$ = function() {
  return new $cljs$core$PersistentHashSet$$(null, $cljs$core$_persistent_BANG_$$(this.$transient_map$), null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return $cljs$core$count$$(this.$transient_map$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($tcoll$$43$$, $v$$77$$) {
  return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$(this, $v$$77$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($tcoll$$44$$, $v$$78$$, $not_found$$70$$) {
  return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$(this.$transient_map$, $v$$78$$, $cljs$core$lookup_sentinel$$) === $cljs$core$lookup_sentinel$$ ? $not_found$$70$$ : $v$$78$$;
};
$JSCompiler_prototypeAlias$$.call = function() {
  function $G__21419__3$$($G__21419__3$$, $G__21419__2$$, $G__21419$$) {
    return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$(this.$transient_map$, $G__21419__2$$, $cljs$core$lookup_sentinel$$) === $cljs$core$lookup_sentinel$$ ? $G__21419$$ : $G__21419__2$$;
  }
  function $G__21419__2$$($G__21419__3$$, $G__21419__2$$) {
    return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$(this.$transient_map$, $G__21419__2$$, $cljs$core$lookup_sentinel$$) === $cljs$core$lookup_sentinel$$ ? null : $G__21419__2$$;
  }
  var $G__21419$$ = null, $G__21419$$ = function($G__21419$$, $k$$287$$, $not_found$$72$$) {
    switch(arguments.length) {
      case 2:
        return $G__21419__2$$.call(this, $G__21419$$, $k$$287$$);
      case 3:
        return $G__21419__3$$.call(this, $G__21419$$, $k$$287$$, $not_found$$72$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__21419$$.$cljs$core$IFn$_invoke$arity$2$ = $G__21419__2$$;
  $G__21419$$.$cljs$core$IFn$_invoke$arity$3$ = $G__21419__3$$;
  return $G__21419$$;
}();
$JSCompiler_prototypeAlias$$.apply = function($self__$$782$$, $args21418$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args21418$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($k$$288$$) {
  return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$(this.$transient_map$, $k$$288$$, $cljs$core$lookup_sentinel$$) === $cljs$core$lookup_sentinel$$ ? null : $k$$288$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($k$$289$$, $not_found$$73$$) {
  return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$(this.$transient_map$, $k$$289$$, $cljs$core$lookup_sentinel$$) === $cljs$core$lookup_sentinel$$ ? $not_found$$73$$ : $k$$289$$;
};
function $cljs$core$name$$($x$$376$$) {
  if ($x$$376$$ && ($x$$376$$.$cljs$lang$protocol_mask$partition1$$ & 4096 || $x$$376$$.$cljs$core$INamed$$)) {
    return $x$$376$$.name;
  }
  if ("string" === typeof $x$$376$$) {
    return $x$$376$$;
  }
  throw Error([$cljs$core$str$$("Doesn't support name: "), $cljs$core$str$$($x$$376$$)].join(""));
}
function $cljs$core$doall$cljs$0core$0IFn$0_invoke$0arity$01$$($coll$$575$$) {
  a: {
    for (var $coll$$inline_312$$ = $coll$$575$$;;) {
      if ($cljs$core$seq$$($coll$$inline_312$$)) {
        $coll$$inline_312$$ = $cljs$core$next$$($coll$$inline_312$$);
      } else {
        break a;
      }
    }
  }
  return $coll$$575$$;
}
function $cljs$core$pr_sequential_writer$$($writer$$6$$, $print_one$$, $G__21691_21699_G__21702_begin$$11$$, $sep$$2$$, $end$$26$$, $opts$$1$$, $G__21692_21700_coll$$577$$) {
  var $_STAR_print_level_STAR_21686$$ = $cljs$core$_STAR_print_level_STAR_$$;
  $cljs$core$_STAR_print_level_STAR_$$ = null == $cljs$core$_STAR_print_level_STAR_$$ ? null : $cljs$core$_STAR_print_level_STAR_$$ - 1;
  try {
    if (null != $cljs$core$_STAR_print_level_STAR_$$ && 0 > $cljs$core$_STAR_print_level_STAR_$$) {
      return $cljs$core$_write$$($writer$$6$$, "#");
    }
    $cljs$core$_write$$($writer$$6$$, $G__21691_21699_G__21702_begin$$11$$);
    if (0 === $cljs$core$constant$0keyword$0print_DASH_length$$.$cljs$core$IFn$_invoke$arity$1$($opts$$1$$)) {
      $cljs$core$seq$$($G__21692_21700_coll$$577$$) && $cljs$core$_write$$($writer$$6$$, function() {
        var $writer$$6$$ = $cljs$core$constant$0keyword$0more_DASH_marker$$.$cljs$core$IFn$_invoke$arity$1$($opts$$1$$);
        return $cljs$core$truth_$$($writer$$6$$) ? $writer$$6$$ : "...";
      }());
    } else {
      if ($cljs$core$seq$$($G__21692_21700_coll$$577$$)) {
        var $G__21687_21693$$ = $cljs$core$first$$($G__21692_21700_coll$$577$$);
        $print_one$$.$cljs$core$IFn$_invoke$arity$3$ ? $print_one$$.$cljs$core$IFn$_invoke$arity$3$($G__21687_21693$$, $writer$$6$$, $opts$$1$$) : $print_one$$.call(null, $G__21687_21693$$, $writer$$6$$, $opts$$1$$);
      }
      for (var $coll_21696__$1$$ = $cljs$core$next$$($G__21692_21700_coll$$577$$), $n_21697$$ = $cljs$core$constant$0keyword$0print_DASH_length$$.$cljs$core$IFn$_invoke$arity$1$($opts$$1$$) - 1;;) {
        if (!$coll_21696__$1$$ || null != $n_21697$$ && 0 === $n_21697$$) {
          $cljs$core$seq$$($coll_21696__$1$$) && 0 === $n_21697$$ && ($cljs$core$_write$$($writer$$6$$, $sep$$2$$), $cljs$core$_write$$($writer$$6$$, function() {
            var $writer$$6$$ = $cljs$core$constant$0keyword$0more_DASH_marker$$.$cljs$core$IFn$_invoke$arity$1$($opts$$1$$);
            return $cljs$core$truth_$$($writer$$6$$) ? $writer$$6$$ : "...";
          }()));
          break;
        } else {
          $cljs$core$_write$$($writer$$6$$, $sep$$2$$);
          var $G__21690_21698$$ = $cljs$core$first$$($coll_21696__$1$$);
          $G__21691_21699_G__21702_begin$$11$$ = $writer$$6$$;
          $G__21692_21700_coll$$577$$ = $opts$$1$$;
          $print_one$$.$cljs$core$IFn$_invoke$arity$3$ ? $print_one$$.$cljs$core$IFn$_invoke$arity$3$($G__21690_21698$$, $G__21691_21699_G__21702_begin$$11$$, $G__21692_21700_coll$$577$$) : $print_one$$.call(null, $G__21690_21698$$, $G__21691_21699_G__21702_begin$$11$$, $G__21692_21700_coll$$577$$);
          var $G__21701$$ = $cljs$core$next$$($coll_21696__$1$$);
          $G__21691_21699_G__21702_begin$$11$$ = $n_21697$$ - 1;
          $coll_21696__$1$$ = $G__21701$$;
          $n_21697$$ = $G__21691_21699_G__21702_begin$$11$$;
        }
      }
    }
    return $cljs$core$_write$$($writer$$6$$, $end$$26$$);
  } finally {
    $cljs$core$_STAR_print_level_STAR_$$ = $_STAR_print_level_STAR_21686$$;
  }
}
function $cljs$core$write_all$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($writer$$7$$, $ss$$5$$) {
  for (var $c__5036__auto__$$6_seq__21705_temp__4425__auto__$$28$$ = $cljs$core$seq$$($ss$$5$$), $G__21714_chunk__21706_seq__21705__$1$$ = null, $G__21713_count__21707$$ = 0, $i__21708$$ = 0;;) {
    if ($i__21708$$ < $G__21713_count__21707$$) {
      var $G__21715_s$$212$$ = $G__21714_chunk__21706_seq__21705__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__21708$$);
      $cljs$core$_write$$($writer$$7$$, $G__21715_s$$212$$);
      $i__21708$$ += 1;
    } else {
      if ($c__5036__auto__$$6_seq__21705_temp__4425__auto__$$28$$ = $cljs$core$seq$$($c__5036__auto__$$6_seq__21705_temp__4425__auto__$$28$$)) {
        $G__21714_chunk__21706_seq__21705__$1$$ = $c__5036__auto__$$6_seq__21705_temp__4425__auto__$$28$$, $cljs$core$chunked_seq_QMARK_$$($G__21714_chunk__21706_seq__21705__$1$$) ? ($c__5036__auto__$$6_seq__21705_temp__4425__auto__$$28$$ = $cljs$core$_chunked_first$$($G__21714_chunk__21706_seq__21705__$1$$), $G__21713_count__21707$$ = $cljs$core$_chunked_rest$$($G__21714_chunk__21706_seq__21705__$1$$), $G__21714_chunk__21706_seq__21705__$1$$ = $c__5036__auto__$$6_seq__21705_temp__4425__auto__$$28$$, 
        $G__21715_s$$212$$ = $cljs$core$count$$($c__5036__auto__$$6_seq__21705_temp__4425__auto__$$28$$), $c__5036__auto__$$6_seq__21705_temp__4425__auto__$$28$$ = $G__21713_count__21707$$, $G__21713_count__21707$$ = $G__21715_s$$212$$) : ($G__21715_s$$212$$ = $cljs$core$first$$($G__21714_chunk__21706_seq__21705__$1$$), $cljs$core$_write$$($writer$$7$$, $G__21715_s$$212$$), $c__5036__auto__$$6_seq__21705_temp__4425__auto__$$28$$ = $cljs$core$next$$($G__21714_chunk__21706_seq__21705__$1$$), $G__21714_chunk__21706_seq__21705__$1$$ = 
        null, $G__21713_count__21707$$ = 0), $i__21708$$ = 0;
      } else {
        return null;
      }
    }
  }
}
var $cljs$core$char_escapes$$ = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function $cljs$core$quote_string$$($s$$213$$) {
  return [$cljs$core$str$$('"'), $cljs$core$str$$($s$$213$$.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function($s$$213$$) {
    return $cljs$core$char_escapes$$[$s$$213$$];
  })), $cljs$core$str$$('"')].join("");
}
function $cljs$core$pr_writer_impl$$($obj$$80$$, $writer$$8$$, $opts$$2$$) {
  if (null == $obj$$80$$) {
    return $cljs$core$_write$$($writer$$8$$, "nil");
  }
  if (void 0 === $obj$$80$$) {
    return $cljs$core$_write$$($writer$$8$$, "#\x3cundefined\x3e");
  }
  if ($cljs$core$truth_$$(function() {
    var $writer$$8$$ = $cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($opts$$2$$, $cljs$core$constant$0keyword$0meta$$);
    return $cljs$core$truth_$$($writer$$8$$) ? ($writer$$8$$ = $obj$$80$$ ? $obj$$80$$.$cljs$lang$protocol_mask$partition0$$ & 131072 || $obj$$80$$.$cljs$core$IMeta$$ ? !0 : $obj$$80$$.$cljs$lang$protocol_mask$partition0$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IMeta$$, $obj$$80$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IMeta$$, $obj$$80$$)) ? $cljs$core$meta$$($obj$$80$$) : $writer$$8$$ : $writer$$8$$;
  }())) {
    $cljs$core$_write$$($writer$$8$$, "^");
    var $G__21741_21751_G__21745_normalize$$ = $cljs$core$meta$$($obj$$80$$);
    $cljs$core$pr_writer$$.$cljs$core$IFn$_invoke$arity$3$ ? $cljs$core$pr_writer$$.$cljs$core$IFn$_invoke$arity$3$($G__21741_21751_G__21745_normalize$$, $writer$$8$$, $opts$$2$$) : $cljs$core$pr_writer$$.call(null, $G__21741_21751_G__21745_normalize$$, $writer$$8$$, $opts$$2$$);
    $cljs$core$_write$$($writer$$8$$, " ");
  }
  return null == $obj$$80$$ ? $cljs$core$_write$$($writer$$8$$, "nil") : $obj$$80$$.$cljs$lang$type$ ? $obj$$80$$.$cljs$lang$ctorPrWriter$($obj$$80$$, $writer$$8$$, $opts$$2$$) : $obj$$80$$ && ($obj$$80$$.$cljs$lang$protocol_mask$partition0$$ & 2147483648 || $obj$$80$$.$cljs$core$IPrintWithWriter$$) ? $obj$$80$$.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$(null, $writer$$8$$, $opts$$2$$) : $cljs$core$type$$($obj$$80$$) === Boolean || "number" === typeof $obj$$80$$ ? $cljs$core$_write$$($writer$$8$$, 
  "" + $cljs$core$str$$($obj$$80$$)) : null != $obj$$80$$ && $obj$$80$$.constructor === Object ? ($cljs$core$_write$$($writer$$8$$, "#js "), $G__21741_21751_G__21745_normalize$$ = $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($writer$$8$$) {
    return new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($writer$$8$$), $obj$$80$$[$writer$$8$$]], null);
  }, $cljs$core$js_keys$$($obj$$80$$)), $cljs$core$print_map$$.$cljs$core$IFn$_invoke$arity$4$ ? $cljs$core$print_map$$.$cljs$core$IFn$_invoke$arity$4$($G__21741_21751_G__21745_normalize$$, $cljs$core$pr_writer$$, $writer$$8$$, $opts$$2$$) : $cljs$core$print_map$$.call(null, $G__21741_21751_G__21745_normalize$$, $cljs$core$pr_writer$$, $writer$$8$$, $opts$$2$$)) : $cljs$core$array_QMARK_$$($obj$$80$$) ? $cljs$core$pr_sequential_writer$$($writer$$8$$, $cljs$core$pr_writer$$, "#js [", " ", "]", $opts$$2$$, 
  $obj$$80$$) : $cljs$core$truth_$$("string" == typeof $obj$$80$$) ? $cljs$core$truth_$$($cljs$core$constant$0keyword$0readably$$.$cljs$core$IFn$_invoke$arity$1$($opts$$2$$)) ? $cljs$core$_write$$($writer$$8$$, $cljs$core$quote_string$$($obj$$80$$)) : $cljs$core$_write$$($writer$$8$$, $obj$$80$$) : $cljs$core$fn_QMARK_$$($obj$$80$$) ? $cljs$core$write_all$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($writer$$8$$, $cljs$core$array_seq$$(["#\x3c", "" + $cljs$core$str$$($obj$$80$$), "\x3e"], 0)) : $obj$$80$$ instanceof 
  Date ? ($G__21741_21751_G__21745_normalize$$ = function($obj$$80$$, $writer$$8$$) {
    for (var $opts$$2$$ = "" + $cljs$core$str$$($obj$$80$$);;) {
      if ($cljs$core$count$$($opts$$2$$) < $writer$$8$$) {
        $opts$$2$$ = [$cljs$core$str$$("0"), $cljs$core$str$$($opts$$2$$)].join("");
      } else {
        return $opts$$2$$;
      }
    }
  }, $cljs$core$write_all$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($writer$$8$$, $cljs$core$array_seq$$(['#inst "', "" + $cljs$core$str$$($obj$$80$$.getUTCFullYear()), "-", $G__21741_21751_G__21745_normalize$$($obj$$80$$.getUTCMonth() + 1, 2), "-", $G__21741_21751_G__21745_normalize$$($obj$$80$$.getUTCDate(), 2), "T", $G__21741_21751_G__21745_normalize$$($obj$$80$$.getUTCHours(), 2), ":", $G__21741_21751_G__21745_normalize$$($obj$$80$$.getUTCMinutes(), 2), ":", $G__21741_21751_G__21745_normalize$$($obj$$80$$.getUTCSeconds(), 
  2), ".", $G__21741_21751_G__21745_normalize$$($obj$$80$$.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : $cljs$core$truth_$$($obj$$80$$ instanceof RegExp) ? $cljs$core$write_all$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($writer$$8$$, $cljs$core$array_seq$$(['#"', $obj$$80$$.source, '"'], 0)) : ($obj$$80$$ ? $obj$$80$$.$cljs$lang$protocol_mask$partition0$$ & 2147483648 || $obj$$80$$.$cljs$core$IPrintWithWriter$$ || ($obj$$80$$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IPrintWithWriter$$, 
  $obj$$80$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IPrintWithWriter$$, $obj$$80$$)) ? $cljs$core$_pr_writer$$($obj$$80$$, $writer$$8$$, $opts$$2$$) : $cljs$core$write_all$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($writer$$8$$, $cljs$core$array_seq$$(["#\x3c", "" + $cljs$core$str$$($obj$$80$$), "\x3e"], 0));
}
function $cljs$core$pr_writer$$($obj$$81$$, $writer$$9$$, $G__21760_opts$$3$$) {
  var $temp__4423__auto__$$13$$ = $cljs$core$constant$0keyword$0alt_DASH_impl$$.$cljs$core$IFn$_invoke$arity$1$($G__21760_opts$$3$$);
  return $cljs$core$truth_$$($temp__4423__auto__$$13$$) ? ($G__21760_opts$$3$$ = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($G__21760_opts$$3$$, $cljs$core$constant$0keyword$0fallback_DASH_impl$$, $cljs$core$pr_writer_impl$$), $temp__4423__auto__$$13$$.$cljs$core$IFn$_invoke$arity$3$ ? $temp__4423__auto__$$13$$.$cljs$core$IFn$_invoke$arity$3$($obj$$81$$, $writer$$9$$, $G__21760_opts$$3$$) : $temp__4423__auto__$$13$$.call(null, $obj$$81$$, $writer$$9$$, $G__21760_opts$$3$$)) : $cljs$core$pr_writer_impl$$($obj$$81$$, 
  $writer$$9$$, $G__21760_opts$$3$$);
}
function $cljs$core$pr_str_with_opts$$($objs$$2$$, $opts$$6$$) {
  var $JSCompiler_temp$$60_JSCompiler_temp_const$$61$$;
  if ($cljs$core$empty_QMARK_$$($objs$$2$$)) {
    $JSCompiler_temp$$60_JSCompiler_temp_const$$61$$ = "";
  } else {
    $JSCompiler_temp$$60_JSCompiler_temp_const$$61$$ = $cljs$core$str$$;
    var $sb$$inline_316$$ = new $goog$string$StringBuffer$$;
    a: {
      var $writer$$inline_810$$ = new $cljs$core$StringBufferWriter$$($sb$$inline_316$$);
      $cljs$core$pr_writer$$($cljs$core$first$$($objs$$2$$), $writer$$inline_810$$, $opts$$6$$);
      for (var $c__5036__auto__$$inline_819_seq__21765$$inline_812_temp__4425__auto__$$inline_817$$ = $cljs$core$seq$$($cljs$core$next$$($objs$$2$$)), $G__21774$$inline_821_chunk__21766$$inline_813_seq__21765__$1$$inline_818$$ = null, $G__21773$$inline_820_count__21767$$inline_814$$ = 0, $i__21768$$inline_815$$ = 0;;) {
        if ($i__21768$$inline_815$$ < $G__21773$$inline_820_count__21767$$inline_814$$) {
          var $G__21775$$inline_822_obj$$inline_816$$ = $G__21774$$inline_821_chunk__21766$$inline_813_seq__21765__$1$$inline_818$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__21768$$inline_815$$);
          $cljs$core$_write$$($writer$$inline_810$$, " ");
          $cljs$core$pr_writer$$($G__21775$$inline_822_obj$$inline_816$$, $writer$$inline_810$$, $opts$$6$$);
          $i__21768$$inline_815$$ += 1;
        } else {
          if ($c__5036__auto__$$inline_819_seq__21765$$inline_812_temp__4425__auto__$$inline_817$$ = $cljs$core$seq$$($c__5036__auto__$$inline_819_seq__21765$$inline_812_temp__4425__auto__$$inline_817$$)) {
            $G__21774$$inline_821_chunk__21766$$inline_813_seq__21765__$1$$inline_818$$ = $c__5036__auto__$$inline_819_seq__21765$$inline_812_temp__4425__auto__$$inline_817$$, $cljs$core$chunked_seq_QMARK_$$($G__21774$$inline_821_chunk__21766$$inline_813_seq__21765__$1$$inline_818$$) ? ($c__5036__auto__$$inline_819_seq__21765$$inline_812_temp__4425__auto__$$inline_817$$ = $cljs$core$_chunked_first$$($G__21774$$inline_821_chunk__21766$$inline_813_seq__21765__$1$$inline_818$$), $G__21773$$inline_820_count__21767$$inline_814$$ = 
            $cljs$core$_chunked_rest$$($G__21774$$inline_821_chunk__21766$$inline_813_seq__21765__$1$$inline_818$$), $G__21774$$inline_821_chunk__21766$$inline_813_seq__21765__$1$$inline_818$$ = $c__5036__auto__$$inline_819_seq__21765$$inline_812_temp__4425__auto__$$inline_817$$, $G__21775$$inline_822_obj$$inline_816$$ = $cljs$core$count$$($c__5036__auto__$$inline_819_seq__21765$$inline_812_temp__4425__auto__$$inline_817$$), $c__5036__auto__$$inline_819_seq__21765$$inline_812_temp__4425__auto__$$inline_817$$ = 
            $G__21773$$inline_820_count__21767$$inline_814$$, $G__21773$$inline_820_count__21767$$inline_814$$ = $G__21775$$inline_822_obj$$inline_816$$) : ($G__21775$$inline_822_obj$$inline_816$$ = $cljs$core$first$$($G__21774$$inline_821_chunk__21766$$inline_813_seq__21765__$1$$inline_818$$), $cljs$core$_write$$($writer$$inline_810$$, " "), $cljs$core$pr_writer$$($G__21775$$inline_822_obj$$inline_816$$, $writer$$inline_810$$, $opts$$6$$), $c__5036__auto__$$inline_819_seq__21765$$inline_812_temp__4425__auto__$$inline_817$$ = 
            $cljs$core$next$$($G__21774$$inline_821_chunk__21766$$inline_813_seq__21765__$1$$inline_818$$), $G__21774$$inline_821_chunk__21766$$inline_813_seq__21765__$1$$inline_818$$ = null, $G__21773$$inline_820_count__21767$$inline_814$$ = 0), $i__21768$$inline_815$$ = 0;
          } else {
            break a;
          }
        }
      }
    }
    $JSCompiler_temp$$60_JSCompiler_temp_const$$61$$ = "" + $JSCompiler_temp$$60_JSCompiler_temp_const$$61$$($sb$$inline_316$$);
  }
  return $JSCompiler_temp$$60_JSCompiler_temp_const$$61$$;
}
function $cljs$core$pr_str$$() {
  return $cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$(0 < arguments.length ? new $cljs$core$IndexedSeq$$(Array.prototype.slice.call(arguments, 0), 0) : null);
}
function $cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($objs$$5$$) {
  return $cljs$core$pr_str_with_opts$$($objs$$5$$, $cljs$core$pr_opts$$());
}
function $cljs$core$println$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($JSCompiler_temp$$63_objs$$12_opts$$inline_321_x$$inline_1020$$) {
  var $opts$$inline_319$$ = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($cljs$core$pr_opts$$(), $cljs$core$constant$0keyword$0readably$$, !1);
  $JSCompiler_temp$$63_objs$$12_opts$$inline_321_x$$inline_1020$$ = $cljs$core$pr_str_with_opts$$($JSCompiler_temp$$63_objs$$12_opts$$inline_321_x$$inline_1020$$, $opts$$inline_319$$);
  $cljs$core$_STAR_print_fn_STAR_$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$_STAR_print_fn_STAR_$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$$63_objs$$12_opts$$inline_321_x$$inline_1020$$) : $cljs$core$_STAR_print_fn_STAR_$$.call(null, $JSCompiler_temp$$63_objs$$12_opts$$inline_321_x$$inline_1020$$);
  $cljs$core$truth_$$($cljs$core$_STAR_print_newline_STAR_$$) ? ($JSCompiler_temp$$63_objs$$12_opts$$inline_321_x$$inline_1020$$ = $cljs$core$pr_opts$$(), $cljs$core$_STAR_print_fn_STAR_$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$_STAR_print_fn_STAR_$$.$cljs$core$IFn$_invoke$arity$1$("\n") : $cljs$core$_STAR_print_fn_STAR_$$.call(null, "\n"), $JSCompiler_temp$$63_objs$$12_opts$$inline_321_x$$inline_1020$$ = ($cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($JSCompiler_temp$$63_objs$$12_opts$$inline_321_x$$inline_1020$$, 
  $cljs$core$constant$0keyword$0flush_DASH_on_DASH_newline$$), null)) : $JSCompiler_temp$$63_objs$$12_opts$$inline_321_x$$inline_1020$$ = null;
  return $JSCompiler_temp$$63_objs$$12_opts$$inline_321_x$$inline_1020$$;
}
function $cljs$core$print_map$$($m$$126$$, $print_one$$1$$, $writer$$12$$, $opts$$10$$) {
  return $cljs$core$pr_sequential_writer$$($writer$$12$$, function($m$$126$$, $writer$$12$$, $opts$$10$$) {
    var $G__21799_21805$$ = $cljs$core$_key$$($m$$126$$);
    $print_one$$1$$.$cljs$core$IFn$_invoke$arity$3$ ? $print_one$$1$$.$cljs$core$IFn$_invoke$arity$3$($G__21799_21805$$, $writer$$12$$, $opts$$10$$) : $print_one$$1$$.call(null, $G__21799_21805$$, $writer$$12$$, $opts$$10$$);
    $cljs$core$_write$$($writer$$12$$, " ");
    $m$$126$$ = $cljs$core$_val$$($m$$126$$);
    return $print_one$$1$$.$cljs$core$IFn$_invoke$arity$3$ ? $print_one$$1$$.$cljs$core$IFn$_invoke$arity$3$($m$$126$$, $writer$$12$$, $opts$$10$$) : $print_one$$1$$.call(null, $m$$126$$, $writer$$12$$, $opts$$10$$);
  }, "{", ", ", "}", $opts$$10$$, $cljs$core$seq$$($m$$126$$));
}
$cljs$core$IndexedSeq$$.prototype.$cljs$core$IPrintWithWriter$$ = !0;
$cljs$core$IndexedSeq$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$$578$$, $writer$$15$$, $opts$$13$$) {
  return $cljs$core$pr_sequential_writer$$($writer$$15$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$$13$$, this);
};
$cljs$core$LazySeq$$.prototype.$cljs$core$IPrintWithWriter$$ = !0;
$cljs$core$LazySeq$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$$579$$, $writer$$16$$, $opts$$14$$) {
  return $cljs$core$pr_sequential_writer$$($writer$$16$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$$14$$, this);
};
$cljs$core$NodeSeq$$.prototype.$cljs$core$IPrintWithWriter$$ = !0;
$cljs$core$NodeSeq$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$$581$$, $writer$$18$$, $opts$$16$$) {
  return $cljs$core$pr_sequential_writer$$($writer$$18$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$$16$$, this);
};
$cljs$core$PersistentArrayMapSeq$$.prototype.$cljs$core$IPrintWithWriter$$ = !0;
$cljs$core$PersistentArrayMapSeq$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$$583$$, $writer$$20$$, $opts$$18$$) {
  return $cljs$core$pr_sequential_writer$$($writer$$20$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$$18$$, this);
};
$cljs$core$ChunkedSeq$$.prototype.$cljs$core$IPrintWithWriter$$ = !0;
$cljs$core$ChunkedSeq$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$$586$$, $writer$$23$$, $opts$$21$$) {
  return $cljs$core$pr_sequential_writer$$($writer$$23$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$$21$$, this);
};
$cljs$core$Cons$$.prototype.$cljs$core$IPrintWithWriter$$ = !0;
$cljs$core$Cons$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$$588$$, $writer$$25$$, $opts$$23$$) {
  return $cljs$core$pr_sequential_writer$$($writer$$25$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$$23$$, this);
};
$cljs$core$PersistentHashMap$$.prototype.$cljs$core$IPrintWithWriter$$ = !0;
$cljs$core$PersistentHashMap$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$$590$$, $writer$$27$$, $opts$$25$$) {
  return $cljs$core$print_map$$(this, $cljs$core$pr_writer$$, $writer$$27$$, $opts$$25$$);
};
$cljs$core$ArrayNodeSeq$$.prototype.$cljs$core$IPrintWithWriter$$ = !0;
$cljs$core$ArrayNodeSeq$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$$591$$, $writer$$28$$, $opts$$26$$) {
  return $cljs$core$pr_sequential_writer$$($writer$$28$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$$26$$, this);
};
$cljs$core$Subvec$$.prototype.$cljs$core$IPrintWithWriter$$ = !0;
$cljs$core$Subvec$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$$592$$, $writer$$29$$, $opts$$27$$) {
  return $cljs$core$pr_sequential_writer$$($writer$$29$$, $cljs$core$pr_writer$$, "[", " ", "]", $opts$$27$$, this);
};
$cljs$core$PersistentHashSet$$.prototype.$cljs$core$IPrintWithWriter$$ = !0;
$cljs$core$PersistentHashSet$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$$594$$, $writer$$31$$, $opts$$29$$) {
  return $cljs$core$pr_sequential_writer$$($writer$$31$$, $cljs$core$pr_writer$$, "#{", " ", "}", $opts$$29$$, this);
};
$cljs$core$ChunkedCons$$.prototype.$cljs$core$IPrintWithWriter$$ = !0;
$cljs$core$ChunkedCons$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$$595$$, $writer$$32$$, $opts$$30$$) {
  return $cljs$core$pr_sequential_writer$$($writer$$32$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$$30$$, this);
};
$cljs$core$Atom$$.prototype.$cljs$core$IPrintWithWriter$$ = !0;
$cljs$core$Atom$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($a$$1571$$, $writer$$33$$, $opts$$31$$) {
  $cljs$core$_write$$($writer$$33$$, "#\x3cAtom: ");
  $cljs$core$pr_writer$$(this.state, $writer$$33$$, $opts$$31$$);
  return $cljs$core$_write$$($writer$$33$$, "\x3e");
};
$cljs$core$ValSeq$$.prototype.$cljs$core$IPrintWithWriter$$ = !0;
$cljs$core$ValSeq$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$$596$$, $writer$$34$$, $opts$$32$$) {
  return $cljs$core$pr_sequential_writer$$($writer$$34$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$$32$$, this);
};
$cljs$core$PersistentVector$$.prototype.$cljs$core$IPrintWithWriter$$ = !0;
$cljs$core$PersistentVector$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$$598$$, $writer$$36$$, $opts$$34$$) {
  return $cljs$core$pr_sequential_writer$$($writer$$36$$, $cljs$core$pr_writer$$, "[", " ", "]", $opts$$34$$, this);
};
$cljs$core$EmptyList$$.prototype.$cljs$core$IPrintWithWriter$$ = !0;
$cljs$core$EmptyList$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$$600$$, $writer$$38$$) {
  return $cljs$core$_write$$($writer$$38$$, "()");
};
$cljs$core$PersistentArrayMap$$.prototype.$cljs$core$IPrintWithWriter$$ = !0;
$cljs$core$PersistentArrayMap$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$$603$$, $writer$$41$$, $opts$$39$$) {
  return $cljs$core$print_map$$(this, $cljs$core$pr_writer$$, $writer$$41$$, $opts$$39$$);
};
$cljs$core$KeySeq$$.prototype.$cljs$core$IPrintWithWriter$$ = !0;
$cljs$core$KeySeq$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$$605$$, $writer$$43$$, $opts$$41$$) {
  return $cljs$core$pr_sequential_writer$$($writer$$43$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$$41$$, this);
};
$cljs$core$List$$.prototype.$cljs$core$IPrintWithWriter$$ = !0;
$cljs$core$List$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$$606$$, $writer$$44$$, $opts$$42$$) {
  return $cljs$core$pr_sequential_writer$$($writer$$44$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$$42$$, this);
};
$cljs$core$Symbol$$.prototype.$cljs$core$IComparable$$ = !0;
$cljs$core$Symbol$$.prototype.$cljs$core$IComparable$_compare$arity$2$ = function($x$$415$$, $y$$246$$) {
  if ($y$$246$$ instanceof $cljs$core$Symbol$$) {
    return $cljs$core$compare_symbols$$(this, $y$$246$$);
  }
  throw Error([$cljs$core$str$$("Cannot compare "), $cljs$core$str$$(this), $cljs$core$str$$(" to "), $cljs$core$str$$($y$$246$$)].join(""));
};
$cljs$core$Keyword$$.prototype.$cljs$core$IComparable$$ = !0;
$cljs$core$Keyword$$.prototype.$cljs$core$IComparable$_compare$arity$2$ = function($x$$416$$, $y$$247$$) {
  if ($y$$247$$ instanceof $cljs$core$Keyword$$) {
    return $cljs$core$compare_keywords$$(this, $y$$247$$);
  }
  throw Error([$cljs$core$str$$("Cannot compare "), $cljs$core$str$$(this), $cljs$core$str$$(" to "), $cljs$core$str$$($y$$247$$)].join(""));
};
$cljs$core$Subvec$$.prototype.$cljs$core$IComparable$$ = !0;
$cljs$core$Subvec$$.prototype.$cljs$core$IComparable$_compare$arity$2$ = function($x$$417$$, $y$$248$$) {
  if ($cljs$core$vector_QMARK_$$($y$$248$$)) {
    return $cljs$core$compare_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(this, $y$$248$$);
  }
  throw Error([$cljs$core$str$$("Cannot compare "), $cljs$core$str$$(this), $cljs$core$str$$(" to "), $cljs$core$str$$($y$$248$$)].join(""));
};
$cljs$core$PersistentVector$$.prototype.$cljs$core$IComparable$$ = !0;
$cljs$core$PersistentVector$$.prototype.$cljs$core$IComparable$_compare$arity$2$ = function($x$$418$$, $y$$249$$) {
  if ($cljs$core$vector_QMARK_$$($y$$249$$)) {
    return $cljs$core$compare_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(this, $y$$249$$);
  }
  throw Error([$cljs$core$str$$("Cannot compare "), $cljs$core$str$$(this), $cljs$core$str$$(" to "), $cljs$core$str$$($y$$249$$)].join(""));
};
var $cljs$core$gensym_counter$$ = null, $cljs$core$IEncodeJS$$ = {}, $cljs$core$_clj__GT_js$$ = function $cljs$core$_clj__GT_js$$($x$$421$$) {
  if ($x$$421$$ ? $x$$421$$.$cljs$core$IEncodeJS$_clj__GT_js$arity$1$ : $x$$421$$) {
    return $x$$421$$.$cljs$core$IEncodeJS$_clj__GT_js$arity$1$($x$$421$$);
  }
  var $JSCompiler_inline_result$$526_or__4251__auto__$$inline_824_or__4251__auto____$1$$inline_825$$;
  $JSCompiler_inline_result$$526_or__4251__auto__$$inline_824_or__4251__auto____$1$$inline_825$$ = $cljs$core$_clj__GT_js$$[$goog$typeOf$$(null == $x$$421$$ ? null : $x$$421$$)];
  if (!$JSCompiler_inline_result$$526_or__4251__auto__$$inline_824_or__4251__auto____$1$$inline_825$$ && ($JSCompiler_inline_result$$526_or__4251__auto__$$inline_824_or__4251__auto____$1$$inline_825$$ = $cljs$core$_clj__GT_js$$._, !$JSCompiler_inline_result$$526_or__4251__auto__$$inline_824_or__4251__auto____$1$$inline_825$$)) {
    throw $cljs$core$missing_protocol$$("IEncodeJS.-clj-\x3ejs", $x$$421$$);
  }
  return $JSCompiler_inline_result$$526_or__4251__auto__$$inline_824_or__4251__auto____$1$$inline_825$$.call(null, $x$$421$$);
};
function $cljs$core$key__GT_js$$($k$$305$$) {
  return ($k$$305$$ ? $cljs$core$truth_$$($cljs$core$truth_$$(null) ? null : $k$$305$$.$cljs$core$IEncodeJS$$) || ($k$$305$$.$cljs$lang$protocol_mask$partition$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IEncodeJS$$, $k$$305$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IEncodeJS$$, $k$$305$$)) ? $cljs$core$_clj__GT_js$$($k$$305$$) : "string" === typeof $k$$305$$ || "number" === typeof $k$$305$$ || $k$$305$$ instanceof $cljs$core$Keyword$$ || $k$$305$$ instanceof $cljs$core$Symbol$$ ? 
  $cljs$core$clj__GT_js$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$clj__GT_js$$.$cljs$core$IFn$_invoke$arity$1$($k$$305$$) : $cljs$core$clj__GT_js$$.call(null, $k$$305$$) : $cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$array_seq$$([$k$$305$$], 0));
}
var $cljs$core$clj__GT_js$$ = function $cljs$core$clj__GT_js$$($G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$) {
  if (null == $G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$) {
    return null;
  }
  if ($G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$ ? $cljs$core$truth_$$($cljs$core$truth_$$(null) ? null : $G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$.$cljs$core$IEncodeJS$$) || ($G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$.$cljs$lang$protocol_mask$partition$$ ? 
  0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IEncodeJS$$, $G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IEncodeJS$$, $G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$)) {
    return $cljs$core$_clj__GT_js$$($G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$);
  }
  if ($G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$ instanceof $cljs$core$Keyword$$) {
    return $cljs$core$name$$($G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$);
  }
  if ($G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$ instanceof $cljs$core$Symbol$$) {
    return "" + $cljs$core$str$$($G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$);
  }
  if ($cljs$core$map_QMARK_$$($G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$)) {
    var $arr$$119_m$$128$$ = {};
    $G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$ = $cljs$core$seq$$($G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$);
    for (var $G__21899_G__21922_chunk__21875_21885_chunk__21881_21910_k_21903_seq__21880_21919__$1$$ = null, $G__21900_G__21923_c__5036__auto___21897_count__21876_21886_count__21882_21911_v_21904_vec__21879_21902$$ = 0, $G__21921_i__21877_21887_i__21883_21912$$ = 0;;) {
      if ($G__21921_i__21877_21887_i__21883_21912$$ < $G__21900_G__21923_c__5036__auto___21897_count__21876_21886_count__21882_21911_v_21904_vec__21879_21902$$) {
        var $v_21890_vec__21878_21888$$ = $G__21899_G__21922_chunk__21875_21885_chunk__21881_21910_k_21903_seq__21880_21919__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__21921_i__21877_21887_i__21883_21912$$), $k_21889_x_21913__$1$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($v_21890_vec__21878_21888$$, 0), $v_21890_vec__21878_21888$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($v_21890_vec__21878_21888$$, 1);
        $arr$$119_m$$128$$[$cljs$core$key__GT_js$$($k_21889_x_21913__$1$$)] = $cljs$core$clj__GT_js$$($v_21890_vec__21878_21888$$);
        $G__21921_i__21877_21887_i__21883_21912$$ += 1;
      } else {
        if ($G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$ = $cljs$core$seq$$($G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$)) {
          $cljs$core$chunked_seq_QMARK_$$($G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$) ? ($G__21900_G__21923_c__5036__auto___21897_count__21876_21886_count__21882_21911_v_21904_vec__21879_21902$$ = $cljs$core$_chunked_first$$($G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$), $G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$ = 
          $cljs$core$_chunked_rest$$($G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$), $G__21899_G__21922_chunk__21875_21885_chunk__21881_21910_k_21903_seq__21880_21919__$1$$ = $G__21900_G__21923_c__5036__auto___21897_count__21876_21886_count__21882_21911_v_21904_vec__21879_21902$$, $G__21900_G__21923_c__5036__auto___21897_count__21876_21886_count__21882_21911_v_21904_vec__21879_21902$$ = 
          $cljs$core$count$$($G__21900_G__21923_c__5036__auto___21897_count__21876_21886_count__21882_21911_v_21904_vec__21879_21902$$)) : ($G__21900_G__21923_c__5036__auto___21897_count__21876_21886_count__21882_21911_v_21904_vec__21879_21902$$ = $cljs$core$first$$($G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$), $G__21899_G__21922_chunk__21875_21885_chunk__21881_21910_k_21903_seq__21880_21919__$1$$ = 
          $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__21900_G__21923_c__5036__auto___21897_count__21876_21886_count__21882_21911_v_21904_vec__21879_21902$$, 0), $G__21900_G__21923_c__5036__auto___21897_count__21876_21886_count__21882_21911_v_21904_vec__21879_21902$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__21900_G__21923_c__5036__auto___21897_count__21876_21886_count__21882_21911_v_21904_vec__21879_21902$$, 1), $arr$$119_m$$128$$[$cljs$core$key__GT_js$$($G__21899_G__21922_chunk__21875_21885_chunk__21881_21910_k_21903_seq__21880_21919__$1$$)] = 
          $cljs$core$clj__GT_js$$($G__21900_G__21923_c__5036__auto___21897_count__21876_21886_count__21882_21911_v_21904_vec__21879_21902$$), $G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$ = $cljs$core$next$$($G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$), $G__21899_G__21922_chunk__21875_21885_chunk__21881_21910_k_21903_seq__21880_21919__$1$$ = 
          null, $G__21900_G__21923_c__5036__auto___21897_count__21876_21886_count__21882_21911_v_21904_vec__21879_21902$$ = 0), $G__21921_i__21877_21887_i__21883_21912$$ = 0;
        } else {
          break;
        }
      }
    }
    return $arr$$119_m$$128$$;
  }
  if ($cljs$core$coll_QMARK_$$($G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$)) {
    $arr$$119_m$$128$$ = [];
    $G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$ = $cljs$core$seq$$($cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$clj__GT_js$$, $G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$));
    $G__21899_G__21922_chunk__21875_21885_chunk__21881_21910_k_21903_seq__21880_21919__$1$$ = null;
    for ($G__21921_i__21877_21887_i__21883_21912$$ = $G__21900_G__21923_c__5036__auto___21897_count__21876_21886_count__21882_21911_v_21904_vec__21879_21902$$ = 0;;) {
      if ($G__21921_i__21877_21887_i__21883_21912$$ < $G__21900_G__21923_c__5036__auto___21897_count__21876_21886_count__21882_21911_v_21904_vec__21879_21902$$) {
        $k_21889_x_21913__$1$$ = $G__21899_G__21922_chunk__21875_21885_chunk__21881_21910_k_21903_seq__21880_21919__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__21921_i__21877_21887_i__21883_21912$$), $arr$$119_m$$128$$.push($k_21889_x_21913__$1$$), $G__21921_i__21877_21887_i__21883_21912$$ += 1;
      } else {
        if ($G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$ = $cljs$core$seq$$($G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$)) {
          $G__21899_G__21922_chunk__21875_21885_chunk__21881_21910_k_21903_seq__21880_21919__$1$$ = $G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$, $cljs$core$chunked_seq_QMARK_$$($G__21899_G__21922_chunk__21875_21885_chunk__21881_21910_k_21903_seq__21880_21919__$1$$) ? ($G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$ = 
          $cljs$core$_chunked_first$$($G__21899_G__21922_chunk__21875_21885_chunk__21881_21910_k_21903_seq__21880_21919__$1$$), $G__21921_i__21877_21887_i__21883_21912$$ = $cljs$core$_chunked_rest$$($G__21899_G__21922_chunk__21875_21885_chunk__21881_21910_k_21903_seq__21880_21919__$1$$), $G__21899_G__21922_chunk__21875_21885_chunk__21881_21910_k_21903_seq__21880_21919__$1$$ = $G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$, 
          $G__21900_G__21923_c__5036__auto___21897_count__21876_21886_count__21882_21911_v_21904_vec__21879_21902$$ = $cljs$core$count$$($G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$), $G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$ = $G__21921_i__21877_21887_i__21883_21912$$) : 
          ($G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$ = $cljs$core$first$$($G__21899_G__21922_chunk__21875_21885_chunk__21881_21910_k_21903_seq__21880_21919__$1$$), $arr$$119_m$$128$$.push($G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$), $G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$ = 
          $cljs$core$next$$($G__21899_G__21922_chunk__21875_21885_chunk__21881_21910_k_21903_seq__21880_21919__$1$$), $G__21899_G__21922_chunk__21875_21885_chunk__21881_21910_k_21903_seq__21880_21919__$1$$ = null, $G__21900_G__21923_c__5036__auto___21897_count__21876_21886_count__21882_21911_v_21904_vec__21879_21902$$ = 0), $G__21921_i__21877_21887_i__21883_21912$$ = 0;
        } else {
          break;
        }
      }
    }
    return $arr$$119_m$$128$$;
  }
  return $G__21898_c__5036__auto___21920_seq__21874_21884_seq__21874_21896__$1_seq__21880_21909_temp__4425__auto___21895_temp__4425__auto___21918_x$$423_x_21925__$1$$;
}, $cljs$core$IEncodeClojure$$ = {}, $cljs$core$_js__GT_clj$$ = function $cljs$core$_js__GT_clj$$($x$$424$$, $options$$7$$) {
  if ($x$$424$$ ? $x$$424$$.$cljs$core$IEncodeClojure$_js__GT_clj$arity$2$ : $x$$424$$) {
    return $x$$424$$.$cljs$core$IEncodeClojure$_js__GT_clj$arity$2$($x$$424$$, $options$$7$$);
  }
  var $JSCompiler_inline_result$$527_or__4251__auto__$$inline_827_or__4251__auto____$1$$inline_828$$;
  $JSCompiler_inline_result$$527_or__4251__auto__$$inline_827_or__4251__auto____$1$$inline_828$$ = $cljs$core$_js__GT_clj$$[$goog$typeOf$$(null == $x$$424$$ ? null : $x$$424$$)];
  if (!$JSCompiler_inline_result$$527_or__4251__auto__$$inline_827_or__4251__auto____$1$$inline_828$$ && ($JSCompiler_inline_result$$527_or__4251__auto__$$inline_827_or__4251__auto____$1$$inline_828$$ = $cljs$core$_js__GT_clj$$._, !$JSCompiler_inline_result$$527_or__4251__auto__$$inline_827_or__4251__auto____$1$$inline_828$$)) {
    throw $cljs$core$missing_protocol$$("IEncodeClojure.-js-\x3eclj", $x$$424$$);
  }
  return $JSCompiler_inline_result$$527_or__4251__auto__$$inline_827_or__4251__auto____$1$$inline_828$$.call(null, $x$$424$$, $options$$7$$);
};
function $cljs$core$js__GT_clj$cljs$0core$0IFn$0_invoke$0arity$0variadic$$() {
  var $x$$426$$ = $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($demo$components$sandbox$hydration_result$$) : $cljs$core$deref$$.call(null, $demo$components$sandbox$hydration_result$$), $opts$$44$$ = $cljs$core$array_seq$$([$cljs$core$constant$0keyword$0keywordize_DASH_keys$$, !0], 0), $map__21940__$1$$ = $cljs$core$seq_QMARK_$$($opts$$44$$) ? $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$hash_map$$, $opts$$44$$) : $opts$$44$$, 
  $keywordize_keys$$ = $cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__21940__$1$$, $cljs$core$constant$0keyword$0keywordize_DASH_keys$$);
  return function($x$$426$$, $map__21940__$1$$, $keywordize_keys$$, $keyfn$$3$$) {
    return function $cljs$core$thisfn$$($x__$1$$6$$) {
      return ($x__$1$$6$$ ? $cljs$core$truth_$$($cljs$core$truth_$$(null) ? null : $x__$1$$6$$.$cljs$core$IEncodeClojure$$) || ($x__$1$$6$$.$cljs$lang$protocol_mask$partition$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IEncodeClojure$$, $x__$1$$6$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IEncodeClojure$$, $x__$1$$6$$)) ? $cljs$core$_js__GT_clj$$($x__$1$$6$$, $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$array_map$$, $opts$$44$$)) : $cljs$core$seq_QMARK_$$($x__$1$$6$$) ? 
      $cljs$core$doall$cljs$0core$0IFn$0_invoke$0arity$01$$($cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$thisfn$$, $x__$1$$6$$)) : $cljs$core$coll_QMARK_$$($x__$1$$6$$) ? $cljs$core$into$cljs$0core$0IFn$0_invoke$0arity$02$$(null == $x__$1$$6$$ ? null : $cljs$core$_empty$$($x__$1$$6$$), $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$thisfn$$, $x__$1$$6$$)) : $cljs$core$array_QMARK_$$($x__$1$$6$$) ? $cljs$core$vec$$($cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$thisfn$$, 
      $x__$1$$6$$)) : $cljs$core$type$$($x__$1$$6$$) === Object ? $cljs$core$into$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$PersistentArrayMap$EMPTY$$, function() {
        return function($x$$426$$, $opts$$44$$, $map__21940__$1$$, $keywordize_keys$$) {
          return function $cljs$core$thisfn_$_iter__21957$$($map__21940$$1$$) {
            return new $cljs$core$LazySeq$$(null, function($x$$426$$, $opts$$44$$, $map__21940__$1$$, $keywordize_keys$$) {
              return function() {
                for (;;) {
                  var $x$$426$$ = $cljs$core$seq$$($map__21940$$1$$);
                  if ($x$$426$$) {
                    if ($cljs$core$chunked_seq_QMARK_$$($x$$426$$)) {
                      var $opts$$44$$ = $cljs$core$_chunked_first$$($x$$426$$), $map__21940__$1$$ = $cljs$core$count$$($opts$$44$$), $map__21940__$1$$1$$ = $cljs$core$chunk_buffer$$($map__21940__$1$$);
                      return function() {
                        for (var $x$$426$$ = 0;;) {
                          if ($x$$426$$ < $map__21940__$1$$) {
                            var $map__21940$$1$$ = $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($opts$$44$$, $x$$426$$), $keywordize_keys$$1$$ = $map__21940__$1$$1$$, $keyfn$$3$$ = $cljs$core$PersistentVector$EMPTY_NODE$$, $map__21940$$2$$;
                            $map__21940$$2$$ = $map__21940$$1$$;
                            $map__21940$$2$$ = $keywordize_keys$$.$cljs$core$IFn$_invoke$arity$1$ ? $keywordize_keys$$.$cljs$core$IFn$_invoke$arity$1$($map__21940$$2$$) : $keywordize_keys$$.call(null, $map__21940$$2$$);
                            $map__21940$$1$$ = new $cljs$core$PersistentVector$$(null, 2, 5, $keyfn$$3$$, [$map__21940$$2$$, $cljs$core$thisfn$$($x__$1$$6$$[$map__21940$$1$$])], null);
                            $keywordize_keys$$1$$.add($map__21940$$1$$);
                            $x$$426$$ += 1;
                          } else {
                            return !0;
                          }
                        }
                      }() ? $cljs$core$chunk_cons$$($map__21940__$1$$1$$.chunk(), $cljs$core$thisfn_$_iter__21957$$($cljs$core$_chunked_rest$$($x$$426$$))) : $cljs$core$chunk_cons$$($map__21940__$1$$1$$.chunk(), null);
                    }
                    var $keywordize_keys$$1$$ = $cljs$core$first$$($x$$426$$);
                    return $cljs$core$cons$$(new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [function() {
                      var $x$$426$$ = $keywordize_keys$$1$$;
                      return $keywordize_keys$$.$cljs$core$IFn$_invoke$arity$1$ ? $keywordize_keys$$.$cljs$core$IFn$_invoke$arity$1$($x$$426$$) : $keywordize_keys$$.call(null, $x$$426$$);
                    }(), $cljs$core$thisfn$$($x__$1$$6$$[$keywordize_keys$$1$$])], null), $cljs$core$thisfn_$_iter__21957$$($cljs$core$rest$$($x$$426$$)));
                  }
                  return null;
                }
              };
            }($x$$426$$, $opts$$44$$, $map__21940__$1$$, $keywordize_keys$$), null, null);
          };
        }($x$$426$$, $map__21940__$1$$, $keywordize_keys$$, $keyfn$$3$$)($cljs$core$js_keys$$($x__$1$$6$$));
      }()) : $x__$1$$6$$;
    };
  }($opts$$44$$, $map__21940__$1$$, $keywordize_keys$$, $cljs$core$truth_$$($keywordize_keys$$) ? $cljs$core$keyword$$ : $cljs$core$str$$)($x$$426$$);
}
var $cljs$core$IMultiFn$$ = {};
var $cljs$core$constant$0keyword$0span$0primitive_DASH_number$$ = new $cljs$core$Keyword$$(null, "span.primitive-number", "span.primitive-number", -665034496), $cljs$core$constant$0keyword$0div$0center$$ = new $cljs$core$Keyword$$(null, "div.center", "div.center", 1338956224), $cljs$core$constant$0keyword$0on_DASH_set$$ = new $cljs$core$Keyword$$(null, "on-set", "on-set", -140953470), $cljs$core$constant$0keyword$0div$0hydration_DASH_error$$ = new $cljs$core$Keyword$$(null, "div.hydration-error", 
"div.hydration-error", -1182518173), $cljs$core$constant$0keyword$0div$0hydration_DASH_display_DASH_records$$ = new $cljs$core$Keyword$$(null, "div.hydration-display-records", "div.hydration-display-records", -643544925), $cljs$core$constant$0keyword$0span$0primitive_DASH_string$$ = new $cljs$core$Keyword$$(null, "span.primitive-string", "span.primitive-string", 694485187), $cljs$core$constant$0keyword$0div$0alert$0alert_DASH_danger$$ = new $cljs$core$Keyword$$(null, "div.alert.alert-danger", "div.alert.alert-danger", 
-890058301), $cljs$core$constant$0keyword$0span$0object_DASH_view_DASH_entry_DASH_value$$ = new $cljs$core$Keyword$$(null, "span.object-view-entry-value", "span.object-view-entry-value", 1392477795), $cljs$core$constant$0keyword$0div$0array_DASH_view$0expander_DASH_container$$ = new $cljs$core$Keyword$$(null, "div.array-view.expander-container", "div.array-view.expander-container", -801965437), $cljs$core$constant$0keyword$0div$0examples$$ = new $cljs$core$Keyword$$(null, "div.examples", "div.examples", 
-1009767485), $cljs$core$constant$0keyword$0meta$$ = new $cljs$core$Keyword$$(null, "meta", "meta", 1499536964), $cljs$core$constant$0keyword$0span$0expander$$ = new $cljs$core$Keyword$$(null, "span.expander", "span.expander", -563604764), $cljs$core$constant$0keyword$0dup$$ = new $cljs$core$Keyword$$(null, "dup", "dup", 556298533), $cljs$core$constant$0keyword$0div$0hydration_DASH_display$$ = new $cljs$core$Keyword$$(null, "div.hydration-display", "div.hydration-display", 882572613), $cljs$core$constant$0keyword$0pre$$ = 
new $cljs$core$Keyword$$(null, "pre", "pre", 2118456869), $cljs$core$constant$0keyword$0key$$ = new $cljs$core$Keyword$$(null, "key", "key", -1516042587), $cljs$core$constant$0keyword$0li$0pull_DASH_right$0knex_DASH_version$$ = new $cljs$core$Keyword$$(null, "li.pull-right.knex-version", "li.pull-right.knex-version", -1328888954), $cljs$core$constant$0keyword$0ul$0nav$0nav_DASH_tabs$$ = new $cljs$core$Keyword$$(null, "ul.nav.nav-tabs", "ul.nav.nav-tabs", 1865557319), $cljs$core$constant$0keyword$0derefed$$ = 
new $cljs$core$Keyword$$(null, "derefed", "derefed", 590684583), $cljs$core$constant$0keyword$0div$0hydration_DASH_display_DASH_title$$ = new $cljs$core$Keyword$$(null, "div.hydration-display-title", "div.hydration-display-title", 1975490183), $cljs$core$constant$0keyword$0displayName$$ = new $cljs$core$Keyword$$(null, "displayName", "displayName", -809144601), $cljs$core$constant$0keyword$0validator$$ = new $cljs$core$Keyword$$(null, "validator", "validator", -1966190681), $cljs$core$constant$0keyword$0cljsRender$$ = 
new $cljs$core$Keyword$$(null, "cljsRender", "cljsRender", 247449928), $cljs$core$constant$0keyword$0finally_DASH_block$$ = new $cljs$core$Keyword$$(null, "finally-block", "finally-block", 832982472), $cljs$core$constant$0keyword$0bindings$$ = new $cljs$core$Keyword$$(null, "bindings", "bindings", 1271397192), $cljs$core$constant$0keyword$0span$0sql_DASH_view_DASH_header$$ = new $cljs$core$Keyword$$(null, "span.sql-view-header", "span.sql-view-header", -1834974999), $cljs$core$constant$0keyword$0li$$ = 
new $cljs$core$Keyword$$(null, "li", "li", 723558921), $cljs$core$constant$0keyword$0value$$ = new $cljs$core$Keyword$$(null, "value", "value", 305978217), $cljs$core$constant$0keyword$0span$0example_DASH_hydration$$ = new $cljs$core$Keyword$$(null, "span.example-hydration", "span.example-hydration", -317688502), $cljs$core$constant$0keyword$0div$0records_DASH_list$$ = new $cljs$core$Keyword$$(null, "div.records-list", "div.records-list", -255231158), $cljs$core$constant$0keyword$0header$0db_DASH_schema$$ = 
new $cljs$core$Keyword$$(null, "header.db-schema", "header.db-schema", 732638122), $cljs$core$constant$0keyword$0a$0expander$$ = new $cljs$core$Keyword$$(null, "a.expander", "a.expander", 1322821771), $cljs$core$constant$0keyword$0width$$ = new $cljs$core$Keyword$$(null, "width", "width", -384071477), $cljs$core$constant$0keyword$0div$0sql_DASH_view$$ = new $cljs$core$Keyword$$(null, "div.sql-view", "div.sql-view", -1627977429), $cljs$core$constant$0keyword$0recur$$ = new $cljs$core$Keyword$$(null, 
"recur", "recur", -437573268), $cljs$core$constant$0keyword$0catch_DASH_block$$ = new $cljs$core$Keyword$$(null, "catch-block", "catch-block", 1175212748), $cljs$core$constant$0keyword$0src$$ = new $cljs$core$Keyword$$(null, "src", "src", -1651076051), $cljs$core$constant$0keyword$0div$0sql_DASH_view_DASH_bindings$$ = new $cljs$core$Keyword$$(null, "div.sql-view-bindings", "div.sql-view-bindings", 1235997037), $cljs$core$constant$0keyword$0fallback_DASH_impl$$ = new $cljs$core$Keyword$$(null, "fallback-impl", 
"fallback-impl", -1501286995), $cljs$core$constant$0keyword$0flush_DASH_on_DASH_newline$$ = new $cljs$core$Keyword$$(null, "flush-on-newline", "flush-on-newline", -151457939), $cljs$core$constant$0keyword$0componentWillUnmount$$ = new $cljs$core$Keyword$$(null, "componentWillUnmount", "componentWillUnmount", 1573788814), $cljs$core$constant$0keyword$0div$0hydration_DASH_input$$ = new $cljs$core$Keyword$$(null, "div.hydration-input", "div.hydration-input", 1118611150), $cljs$core$constant$0keyword$0charset$$ = 
new $cljs$core$Keyword$$(null, "charset", "charset", -1063822193), $cljs$core$constant$0keyword$0on_DASH_click$$ = new $cljs$core$Keyword$$(null, "on-click", "on-click", 1632826543), $cljs$core$constant$0keyword$0shouldComponentUpdate$$ = new $cljs$core$Keyword$$(null, "shouldComponentUpdate", "shouldComponentUpdate", 1795750960), $cljs$core$constant$0keyword$0style$$ = new $cljs$core$Keyword$$(null, "style", "style", -496642736), $cljs$core$constant$0keyword$0textarea$$ = new $cljs$core$Keyword$$(null, 
"textarea", "textarea", -650375824), $cljs$core$constant$0keyword$0div$$ = new $cljs$core$Keyword$$(null, "div", "div", 1057191632), $cljs$core$constant$0keyword$0readably$$ = new $cljs$core$Keyword$$(null, "readably", "readably", 1129599760), $cljs$core$constant$0keyword$0more_DASH_marker$$ = new $cljs$core$Keyword$$(null, "more-marker", "more-marker", -14717935), $cljs$core$constant$0keyword$0for$$ = new $cljs$core$Keyword$$(null, "for", "for", -1323786319), $cljs$core$constant$0keyword$0render$$ = 
new $cljs$core$Keyword$$(null, "render", "render", -1408033454), $cljs$core$constant$0keyword$0sql$$ = new $cljs$core$Keyword$$(null, "sql", "sql", 1251448786), $cljs$core$constant$0keyword$0div$0examples_DASH_container$$ = new $cljs$core$Keyword$$(null, "div.examples-container", "div.examples-container", -594635501), $cljs$core$constant$0keyword$0div$0half$$ = new $cljs$core$Keyword$$(null, "div.half", "div.half", 1332116275), $cljs$core$constant$0keyword$0div$0object_DASH_view_DASH_entry$$ = new $cljs$core$Keyword$$(null, 
"div.object-view-entry", "div.object-view-entry", 1708248308), $cljs$core$constant$0keyword$0print_DASH_length$$ = new $cljs$core$Keyword$$(null, "print-length", "print-length", 1931866356), $cljs$core$constant$0keyword$0class$$ = new $cljs$core$Keyword$$(null, "class", "class", -2030961996), $cljs$core$constant$0keyword$0span$0object_DASH_view_DASH_entry_DASH_key$$ = new $cljs$core$Keyword$$(null, "span.object-view-entry-key", "span.object-view-entry-key", -233653292), $cljs$core$constant$0keyword$0catch_DASH_exception$$ = 
new $cljs$core$Keyword$$(null, "catch-exception", "catch-exception", -1997306795), $cljs$core$constant$0keyword$0padding$$ = new $cljs$core$Keyword$$(null, "padding", "padding", 1660304693), $cljs$core$constant$0keyword$0auto_DASH_run$$ = new $cljs$core$Keyword$$(null, "auto-run", "auto-run", 1958400437), $cljs$core$constant$0keyword$0div$0intro$$ = new $cljs$core$Keyword$$(null, "div.intro", "div.intro", 1937098677), $cljs$core$constant$0keyword$0prev$$ = new $cljs$core$Keyword$$(null, "prev", "prev", 
-1597069226), $cljs$core$constant$0keyword$0code$$ = new $cljs$core$Keyword$$(null, "code", "code", 1586293142), $cljs$core$constant$0keyword$0continue_DASH_block$$ = new $cljs$core$Keyword$$(null, "continue-block", "continue-block", -1852047850), $cljs$core$constant$0keyword$0div$0hydration_DASH_display_DASH_sql$$ = new $cljs$core$Keyword$$(null, "div.hydration-display-sql", "div.hydration-display-sql", 2123688630), $cljs$core$constant$0keyword$0on_DASH_dispose$$ = new $cljs$core$Keyword$$(null, 
"on-dispose", "on-dispose", 2105306360), $cljs$core$constant$0keyword$0componentFunction$$ = new $cljs$core$Keyword$$(null, "componentFunction", "componentFunction", 825866104), $cljs$core$constant$0keyword$0div$0example$$ = new $cljs$core$Keyword$$(null, "div.example", "div.example", 265005017), $cljs$core$constant$0keyword$0div$0sql_DASH_view_DASH_sql$$ = new $cljs$core$Keyword$$(null, "div.sql-view-sql", "div.sql-view-sql", 496262137), $cljs$core$constant$0keyword$0component_DASH_function$$ = 
new $cljs$core$Keyword$$(null, "component-function", "component-function", 654728922), $cljs$core$constant$0keyword$0on_DASH_change$$ = new $cljs$core$Keyword$$(null, "on-change", "on-change", -732046149), $cljs$core$constant$0keyword$0h3$$ = new $cljs$core$Keyword$$(null, "h3", "h3", 2067611163), $cljs$core$constant$0keyword$0alt_DASH_impl$$ = new $cljs$core$Keyword$$(null, "alt-impl", "alt-impl", 670969595), $cljs$core$constant$0keyword$0keywordize_DASH_keys$$ = new $cljs$core$Keyword$$(null, "keywordize-keys", 
"keywordize-keys", 1310784252), $cljs$core$constant$0keyword$0p$$ = new $cljs$core$Keyword$$(null, "p", "p", 151049309), $cljs$core$constant$0keyword$0div$0object_DASH_view$0expander_DASH_container$$ = new $cljs$core$Keyword$$(null, "div.object-view.expander-container", "div.object-view.expander-container", 1498954941), $cljs$core$constant$0keyword$0href$$ = new $cljs$core$Keyword$$(null, "href", "href", -793805698), $cljs$core$constant$0keyword$0img$$ = new $cljs$core$Keyword$$(null, "img", "img", 
1442687358), $cljs$core$constant$0keyword$0a$$ = new $cljs$core$Keyword$$(null, "a", "a", -2123407586), $cljs$core$constant$0keyword$0height$$ = new $cljs$core$Keyword$$(null, "height", "height", 1025178622), $cljs$core$constant$0keyword$0span$$ = new $cljs$core$Keyword$$(null, "span", "span", 1394872991), $cljs$core$constant$0keyword$0div$0indent$$ = new $cljs$core$Keyword$$(null, "div.indent", "div.indent", -1749025025), $cljs$core$constant$0keyword$0margin$$ = new $cljs$core$Keyword$$(null, "margin", 
"margin", -995903681);
var $reagent$impl$util$_STAR_always_update_STAR_$$, $reagent$impl$util$is_client$$ = "undefined" !== typeof window && null != window.document;
function $reagent$impl$util$cache_react_class$$($c$$948$$, $constructor$$2$$) {
  return $c$$948$$.cljsReactClass = $constructor$$2$$;
}
function $reagent$impl$util$memoize_1$$($f$$660$$) {
  return function($mem$$3$$) {
    return function($arg$$5$$) {
      var $ret$$36_v$$96$$ = $cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($mem$$3$$) : $cljs$core$deref$$.call(null, $mem$$3$$), $arg$$5$$);
      if (null != $ret$$36_v$$96$$) {
        return $ret$$36_v$$96$$;
      }
      $ret$$36_v$$96$$ = $f$$660$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$$660$$.$cljs$core$IFn$_invoke$arity$1$($arg$$5$$) : $f$$660$$.call(null, $arg$$5$$);
      $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$($mem$$3$$, $cljs$core$assoc$$, $arg$$5$$, $ret$$36_v$$96$$);
      return $ret$$36_v$$96$$;
    };
  }($cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$ ? $cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($cljs$core$PersistentArrayMap$EMPTY$$) : $cljs$core$atom$$.call(null, $cljs$core$PersistentArrayMap$EMPTY$$));
}
var $reagent$impl$util$dont_camel_case$$ = new $cljs$core$PersistentHashSet$$(null, new $cljs$core$PersistentArrayMap$$(null, 2, ["aria", null, "data", null], null), null);
function $reagent$impl$util$capitalize$$($s$$238$$) {
  return 2 > $cljs$core$count$$($s$$238$$) ? $s$$238$$.toUpperCase() : [$cljs$core$str$$($s$$238$$.substring(0, 1).toUpperCase()), $cljs$core$str$$($s$$238$$.substring(1))].join("");
}
function $reagent$impl$util$dash_to_camel$$($dashed_name_str$$) {
  if ("string" === typeof $dashed_name_str$$) {
    return $dashed_name_str$$;
  }
  $dashed_name_str$$ = $cljs$core$name$$($dashed_name_str$$);
  var $G__19171$$inline_841_vec__14668_xs$$inline_839$$, $JSCompiler_temp$$inline_1031_re$$inline_1028_start$$40_v$$inline_1030_v__$1$$inline_1032$$ = /-/, $JSCompiler_temp$$inline_1031_re$$inline_1028_start$$40_v$$inline_1030_v__$1$$inline_1032$$ = $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$("" + $cljs$core$str$$($JSCompiler_temp$$inline_1031_re$$inline_1028_start$$40_v$$inline_1030_v__$1$$inline_1032$$), "/(?:)/") ? $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$vec$$($cljs$core$cons$$("", 
  $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$str$$, $cljs$core$seq$$($dashed_name_str$$)))), "") : $cljs$core$vec$$(("" + $cljs$core$str$$($dashed_name_str$$)).split($JSCompiler_temp$$inline_1031_re$$inline_1028_start$$40_v$$inline_1030_v__$1$$inline_1032$$));
  if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$(0, 0)) {
    a: {
      for (;;) {
        if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$("", null == $JSCompiler_temp$$inline_1031_re$$inline_1028_start$$40_v$$inline_1030_v__$1$$inline_1032$$ ? null : $cljs$core$_peek$$($JSCompiler_temp$$inline_1031_re$$inline_1028_start$$40_v$$inline_1030_v__$1$$inline_1032$$))) {
          $JSCompiler_temp$$inline_1031_re$$inline_1028_start$$40_v$$inline_1030_v__$1$$inline_1032$$ = null == $JSCompiler_temp$$inline_1031_re$$inline_1028_start$$40_v$$inline_1030_v__$1$$inline_1032$$ ? null : $cljs$core$_pop$$($JSCompiler_temp$$inline_1031_re$$inline_1028_start$$40_v$$inline_1030_v__$1$$inline_1032$$);
        } else {
          break a;
        }
      }
    }
  }
  $G__19171$$inline_841_vec__14668_xs$$inline_839$$ = $JSCompiler_temp$$inline_1031_re$$inline_1028_start$$40_v$$inline_1030_v__$1$$inline_1032$$;
  var $JSCompiler_temp$$inline_1031_re$$inline_1028_start$$40_v$$inline_1030_v__$1$$inline_1032$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__19171$$inline_841_vec__14668_xs$$inline_839$$, 0), $G__19170$$inline_840_n__$1$$inline_838_parts$$6$$;
  a: {
    for ($G__19170$$inline_840_n__$1$$inline_838_parts$$6$$ = 1, $G__19171$$inline_841_vec__14668_xs$$inline_839$$ = $cljs$core$seq$$($G__19171$$inline_841_vec__14668_xs$$inline_839$$);;) {
      if ($G__19171$$inline_841_vec__14668_xs$$inline_839$$ && 0 < $G__19170$$inline_840_n__$1$$inline_838_parts$$6$$) {
        --$G__19170$$inline_840_n__$1$$inline_838_parts$$6$$, $G__19171$$inline_841_vec__14668_xs$$inline_839$$ = $cljs$core$next$$($G__19171$$inline_841_vec__14668_xs$$inline_839$$);
      } else {
        $G__19170$$inline_840_n__$1$$inline_838_parts$$6$$ = $G__19171$$inline_841_vec__14668_xs$$inline_839$$;
        break a;
      }
    }
  }
  return $cljs$core$truth_$$($reagent$impl$util$dont_camel_case$$.$cljs$core$IFn$_invoke$arity$1$ ? $reagent$impl$util$dont_camel_case$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$$inline_1031_re$$inline_1028_start$$40_v$$inline_1030_v__$1$$inline_1032$$) : $reagent$impl$util$dont_camel_case$$.call(null, $JSCompiler_temp$$inline_1031_re$$inline_1028_start$$40_v$$inline_1030_v__$1$$inline_1032$$)) ? $dashed_name_str$$ : $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$03$$($cljs$core$str$$, 
  $JSCompiler_temp$$inline_1031_re$$inline_1028_start$$40_v$$inline_1030_v__$1$$inline_1032$$, $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($reagent$impl$util$capitalize$$, $G__19170$$inline_840_n__$1$$inline_838_parts$$6$$));
}
function $reagent$impl$util$partial_ifn$$($f$$661$$, $args$$104$$, $p$$117$$) {
  this.f = $f$$661$$;
  this.args = $args$$104$$;
  this.p = $p$$117$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 6291457;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $reagent$impl$util$partial_ifn$$.prototype;
$JSCompiler_prototypeAlias$$.call = function() {
  function $G__14671$$($G__14671$$, $var_args$$110$$) {
    $G__14671$$ = this;
    var $G__14673__i_a$$1616$$ = null;
    if (1 < arguments.length) {
      for (var $G__14673__i_a$$1616$$ = 0, $G__14673__a$$ = Array(arguments.length - 1);$G__14673__i_a$$1616$$ < $G__14673__a$$.length;) {
        $G__14673__a$$[$G__14673__i_a$$1616$$] = arguments[$G__14673__i_a$$1616$$ + 1], ++$G__14673__i_a$$1616$$;
      }
      $G__14673__i_a$$1616$$ = new $cljs$core$IndexedSeq$$($G__14673__a$$, 0);
    }
    return $G__14671__delegate$$.call(this, $G__14671$$, $G__14673__i_a$$1616$$);
  }
  function $G__14671__delegate$$($G__14671$$, $G__14671__delegate$$) {
    $cljs$core$truth_$$($G__14671$$.p) || ($G__14671$$.p = $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$03$$($cljs$core$partial$$, $G__14671$$.f, $G__14671$$.args));
    return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($G__14671$$.p, $G__14671__delegate$$);
  }
  $G__14671$$.$cljs$lang$maxFixedArity$ = 1;
  $G__14671$$.$cljs$lang$applyTo$ = function($G__14671$$) {
    var $self__$$919$$ = $cljs$core$first$$($G__14671$$);
    $G__14671$$ = $cljs$core$rest$$($G__14671$$);
    return $G__14671__delegate$$($self__$$919$$, $G__14671$$);
  };
  $G__14671$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__14671__delegate$$;
  return $G__14671$$;
}();
$JSCompiler_prototypeAlias$$.apply = function($self__$$920$$, $args14670$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args14670$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function() {
  function $G__14675$$($G__14675$$) {
    var $G__14677__i_a$$1619$$ = null;
    if (0 < arguments.length) {
      for (var $G__14677__i_a$$1619$$ = 0, $G__14677__a$$ = Array(arguments.length - 0);$G__14677__i_a$$1619$$ < $G__14677__a$$.length;) {
        $G__14677__a$$[$G__14677__i_a$$1619$$] = arguments[$G__14677__i_a$$1619$$ + 0], ++$G__14677__i_a$$1619$$;
      }
      $G__14677__i_a$$1619$$ = new $cljs$core$IndexedSeq$$($G__14677__a$$, 0);
    }
    return $G__14675__delegate$$.call(this, $G__14677__i_a$$1619$$);
  }
  function $G__14675__delegate$$($G__14675$$) {
    $cljs$core$truth_$$(self__.p) || (self__.p = $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$03$$($cljs$core$partial$$, self__.f, self__.args));
    return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$(self__.p, $G__14675$$);
  }
  $G__14675$$.$cljs$lang$maxFixedArity$ = 0;
  $G__14675$$.$cljs$lang$applyTo$ = function($G__14675$$) {
    $G__14675$$ = $cljs$core$seq$$($G__14675$$);
    return $G__14675__delegate$$($G__14675$$);
  };
  $G__14675$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__14675__delegate$$;
  return $G__14675$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($_$$204$$, $other$$72$$) {
  return $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$(this.f, $other$$72$$.f) && $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$(this.args, $other$$72$$.args);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  return $cljs$core$hash$$(new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [this.f, this.args], null));
};
function $reagent$impl$util$clj_ifn_QMARK_$$($x$$432$$) {
  var $or__4251__auto__$$137$$ = $cljs$core$ifn_QMARK_$$($x$$432$$);
  return $or__4251__auto__$$137$$ ? $or__4251__auto__$$137$$ : $x$$432$$ ? $x$$432$$.$cljs$lang$protocol_mask$partition1$$ & 256 || $x$$432$$.$cljs$core$IMultiFn$$ ? !0 : $x$$432$$.$cljs$lang$protocol_mask$partition1$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IMultiFn$$, $x$$432$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IMultiFn$$, $x$$432$$);
}
function $reagent$impl$util$get_react_node$$($cont$$) {
  return null == $cont$$ ? null : 9 === $cont$$.nodeType ? $cont$$.documentElement : $cont$$.firstChild;
}
function $reagent$impl$util$get_root_id$$($G__14684_cont$$1$$) {
  $G__14684_cont$$1$$ = $reagent$impl$util$get_react_node$$($G__14684_cont$$1$$);
  return null == $G__14684_cont$$1$$ ? null : $G__14684_cont$$1$$.getAttribute("data-reactid");
}
var $reagent$impl$util$roots$$ = $cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$ ? $cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($cljs$core$PersistentArrayMap$EMPTY$$) : $cljs$core$atom$$.call(null, $cljs$core$PersistentArrayMap$EMPTY$$);
function $reagent$impl$util$render_component$$($comp$$9$$) {
  var $container$$4$$ = document.getElementById("app");
  return React.renderComponent($comp$$9$$.$cljs$core$IFn$_invoke$arity$0$ ? $comp$$9$$.$cljs$core$IFn$_invoke$arity$0$() : $comp$$9$$.call(null), $container$$4$$, function() {
    var $id_14693$$ = $reagent$impl$util$get_root_id$$($container$$4$$);
    null != $id_14693$$ && $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$($reagent$impl$util$roots$$, $cljs$core$assoc$$, $id_14693$$, function() {
      return function() {
        var $id_14693$$;
        try {
          $id_14693$$ = React.renderComponent($comp$$9$$.$cljs$core$IFn$_invoke$arity$0$ ? $comp$$9$$.$cljs$core$IFn$_invoke$arity$0$() : $comp$$9$$.call(null), $container$$4$$);
        } catch ($e14688$$inline_846$$) {
          if ($e14688$$inline_846$$ instanceof Object) {
            try {
              React.unmountComponentAtNode($container$$4$$);
            } catch ($e14689$$inline_847$$) {
              if ($e14689$$inline_847$$ instanceof Object) {
                "undefined" !== typeof console && console.log($e14689$$inline_847$$);
              } else {
                throw $e14689$$inline_847$$;
              }
            }
            $id_14693$$ = $reagent$impl$util$get_react_node$$($container$$4$$);
            $cljs$core$truth_$$($id_14693$$) && ($id_14693$$.removeAttribute("data-reactid"), $id_14693$$.innerHTML = "");
          }
          throw $e14688$$inline_846$$;
        }
        return $id_14693$$;
      };
    }($id_14693$$));
    return null;
  });
}
var $reagent$impl$util$_not_found$$ = {};
function $reagent$impl$util$identical_ish_QMARK_$$($x$$433$$, $y$$253$$) {
  return $cljs$core$keyword_identical_QMARK_$$($x$$433$$, $y$$253$$) || ($x$$433$$ instanceof $cljs$core$Symbol$$ || $cljs$core$type$$($x$$433$$) === $reagent$impl$util$partial_ifn$$) && $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($x$$433$$, $y$$253$$);
}
var $reagent$impl$util$shallow_equal_maps$$ = function $reagent$impl$util$shallow_equal_maps$$($x$$434$$, $y$$254$$) {
  var $or__4251__auto__$$138$$ = $x$$434$$ === $y$$254$$;
  if ($or__4251__auto__$$138$$) {
    return $or__4251__auto__$$138$$;
  }
  var $and__4239__auto__$$129$$ = $cljs$core$map_QMARK_$$($x$$434$$);
  if ($and__4239__auto__$$129$$) {
    var $and__4239__auto____$1$$11$$ = $cljs$core$map_QMARK_$$($y$$254$$);
    if ($and__4239__auto____$1$$11$$) {
      var $and__4239__auto____$2$$6$$ = $cljs$core$count$$($x$$434$$) === $cljs$core$count$$($y$$254$$);
      return $and__4239__auto____$2$$6$$ ? $cljs$core$reduce_kv$$(function() {
        return function($x$$434$$, $or__4251__auto__$$138$$, $and__4239__auto__$$129$$) {
          var $and__4239__auto____$1$$11$$ = $cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($y$$254$$, $or__4251__auto__$$138$$, $reagent$impl$util$_not_found$$);
          return $cljs$core$truth_$$(function() {
            var $x$$434$$ = $and__4239__auto__$$129$$ === $and__4239__auto____$1$$11$$;
            if ($x$$434$$) {
              return $x$$434$$;
            }
            $x$$434$$ = $reagent$impl$util$identical_ish_QMARK_$$($and__4239__auto__$$129$$, $and__4239__auto____$1$$11$$);
            return $cljs$core$truth_$$($x$$434$$) ? $x$$434$$ : ($x$$434$$ = $cljs$core$keyword_identical_QMARK_$$($or__4251__auto__$$138$$, $cljs$core$constant$0keyword$0style$$)) ? $reagent$impl$util$shallow_equal_maps$$($and__4239__auto__$$129$$, $and__4239__auto____$1$$11$$) : $x$$434$$;
          }()) ? $x$$434$$ : new $cljs$core$Reduced$$(!1);
        };
      }($and__4239__auto____$2$$6$$, $and__4239__auto____$1$$11$$, $and__4239__auto__$$129$$, $or__4251__auto__$$138$$), !0, $x$$434$$) : $and__4239__auto____$2$$6$$;
    }
    return $and__4239__auto____$1$$11$$;
  }
  return $and__4239__auto__$$129$$;
};
function $reagent$impl$util$equal_args$$($v1$$1$$, $v2$$) {
  if (!$cljs$core$vector_QMARK_$$($v1$$1$$)) {
    throw Error([$cljs$core$str$$("Assert failed: "), $cljs$core$str$$($cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$array_seq$$([$cljs$core$list$$(new $cljs$core$Symbol$$(null, "vector?", "vector?", -61367869, null), new $cljs$core$Symbol$$(null, "v1", "v1", -2141311508, null))], 0)))].join(""));
  }
  if (!$cljs$core$vector_QMARK_$$($v2$$)) {
    throw Error([$cljs$core$str$$("Assert failed: "), $cljs$core$str$$($cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$array_seq$$([$cljs$core$list$$(new $cljs$core$Symbol$$(null, "vector?", "vector?", -61367869, null), new $cljs$core$Symbol$$(null, "v2", "v2", 1875554983, null))], 0)))].join(""));
  }
  var $or__4251__auto__$$140$$ = $v1$$1$$ === $v2$$;
  if ($or__4251__auto__$$140$$) {
    return $or__4251__auto__$$140$$;
  }
  var $and__4239__auto__$$131$$ = $cljs$core$count$$($v1$$1$$) === $cljs$core$count$$($v2$$);
  return $and__4239__auto__$$131$$ ? $cljs$core$reduce_kv$$(function() {
    return function($v1$$1$$, $or__4251__auto__$$140$$, $and__4239__auto__$$131$$) {
      var $v_SINGLEQUOTE_$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($v2$$, $or__4251__auto__$$140$$);
      return $cljs$core$truth_$$(function() {
        var $v1$$1$$ = $and__4239__auto__$$131$$ === $v_SINGLEQUOTE_$$;
        if ($v1$$1$$) {
          return $v1$$1$$;
        }
        $v1$$1$$ = $reagent$impl$util$identical_ish_QMARK_$$($and__4239__auto__$$131$$, $v_SINGLEQUOTE_$$);
        return $cljs$core$truth_$$($v1$$1$$) ? $v1$$1$$ : ($v1$$1$$ = $cljs$core$map_QMARK_$$($and__4239__auto__$$131$$)) ? $reagent$impl$util$shallow_equal_maps$$($and__4239__auto__$$131$$, $v_SINGLEQUOTE_$$) : $v1$$1$$;
      }()) ? $v1$$1$$ : new $cljs$core$Reduced$$(!1);
    };
  }($and__4239__auto__$$131$$, $or__4251__auto__$$140$$), !0, $v1$$1$$) : $and__4239__auto__$$131$$;
}
;var $reagent$ratom$_STAR_ratom_context_STAR_$$, $reagent$ratom$_running$$ = $cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$ ? $cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(0) : $cljs$core$atom$$.call(null, 0);
function $reagent$ratom$capture_derefed$$($f$$663$$, $obj$$85$$) {
  $obj$$85$$.$cljsCaptured$ = null;
  var $_STAR_ratom_context_STAR_14505$$ = $reagent$ratom$_STAR_ratom_context_STAR_$$;
  $reagent$ratom$_STAR_ratom_context_STAR_$$ = $obj$$85$$;
  try {
    return $f$$663$$.$cljs$core$IFn$_invoke$arity$0$ ? $f$$663$$.$cljs$core$IFn$_invoke$arity$0$() : $f$$663$$.call(null);
  } finally {
    $reagent$ratom$_STAR_ratom_context_STAR_$$ = $_STAR_ratom_context_STAR_14505$$;
  }
}
function $reagent$ratom$captured$$($obj$$86$$) {
  var $c$$949$$ = $obj$$86$$.$cljsCaptured$;
  $obj$$86$$.$cljsCaptured$ = null;
  return $c$$949$$;
}
function $reagent$ratom$notify_deref_watcher_BANG_$$($derefable$$) {
  var $obj$$87$$ = $reagent$ratom$_STAR_ratom_context_STAR_$$;
  if (null != $obj$$87$$) {
    var $captured$$ = $obj$$87$$.$cljsCaptured$;
    $obj$$87$$.$cljsCaptured$ = $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$(null == $captured$$ ? $cljs$core$PersistentHashSet$EMPTY$$ : $captured$$, $derefable$$);
  }
}
function $reagent$ratom$RAtom$$($state$$5$$, $meta$$56$$, $validator$$3$$, $watches$$2$$) {
  this.state = $state$$5$$;
  this.meta = $meta$$56$$;
  this.$validator$ = $validator$$3$$;
  this.$watches$ = $watches$$2$$;
  this.$cljs$lang$protocol_mask$partition1$$ = 114690;
  this.$cljs$lang$protocol_mask$partition0$$ = 2153938944;
}
$JSCompiler_prototypeAlias$$ = $reagent$ratom$RAtom$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($o$$314$$, $other$$73$$) {
  return this === $other$$73$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IDeref$_deref$arity$1$ = function() {
  $reagent$ratom$notify_deref_watcher_BANG_$$(this);
  return this.state;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReset$_reset_BANG_$arity$2$ = function($a$$1621$$, $new_value$$3$$) {
  if (null != this.$validator$ && !$cljs$core$truth_$$(this.$validator$.$cljs$core$IFn$_invoke$arity$1$ ? this.$validator$.$cljs$core$IFn$_invoke$arity$1$($new_value$$3$$) : this.$validator$.call(null, $new_value$$3$$))) {
    throw Error([$cljs$core$str$$("Assert failed: "), $cljs$core$str$$("Validator rejected reference state"), $cljs$core$str$$("\n"), $cljs$core$str$$($cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$array_seq$$([$cljs$core$list$$(new $cljs$core$Symbol$$(null, "validator", "validator", -325659154, null), new $cljs$core$Symbol$$(null, "new-value", "new-value", -1567397401, null))], 0)))].join(""));
  }
  var $old_value$$1$$ = this.state;
  this.state = $new_value$$3$$;
  null != this.$watches$ && $cljs$core$_notify_watches$$(this, $old_value$$1$$, $new_value$$3$$);
  return $new_value$$3$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISwap$_swap_BANG_$arity$2$ = function($a$$1622$$, $f$$664$$) {
  var $G__14507$$inline_342_JSCompiler_inline_result$$79$$;
  $G__14507$$inline_342_JSCompiler_inline_result$$79$$ = this.state;
  $G__14507$$inline_342_JSCompiler_inline_result$$79$$ = $f$$664$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$$664$$.$cljs$core$IFn$_invoke$arity$1$($G__14507$$inline_342_JSCompiler_inline_result$$79$$) : $f$$664$$.call(null, $G__14507$$inline_342_JSCompiler_inline_result$$79$$);
  return $cljs$core$_reset_BANG_$$(this, $G__14507$$inline_342_JSCompiler_inline_result$$79$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISwap$_swap_BANG_$arity$3$ = function($G__14508$$inline_344_a$$1623$$, $JSCompiler_inline_result$$80_f$$665$$, $x$$435$$) {
  $G__14508$$inline_344_a$$1623$$ = this.state;
  $JSCompiler_inline_result$$80_f$$665$$ = $JSCompiler_inline_result$$80_f$$665$$.$cljs$core$IFn$_invoke$arity$2$ ? $JSCompiler_inline_result$$80_f$$665$$.$cljs$core$IFn$_invoke$arity$2$($G__14508$$inline_344_a$$1623$$, $x$$435$$) : $JSCompiler_inline_result$$80_f$$665$$.call(null, $G__14508$$inline_344_a$$1623$$, $x$$435$$);
  return $cljs$core$_reset_BANG_$$(this, $JSCompiler_inline_result$$80_f$$665$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISwap$_swap_BANG_$arity$4$ = function($G__14510$$inline_346_a$$1624$$, $JSCompiler_inline_result$$81_f$$666$$, $x$$436$$, $y$$255$$) {
  $G__14510$$inline_346_a$$1624$$ = this.state;
  $JSCompiler_inline_result$$81_f$$666$$ = $JSCompiler_inline_result$$81_f$$666$$.$cljs$core$IFn$_invoke$arity$3$ ? $JSCompiler_inline_result$$81_f$$666$$.$cljs$core$IFn$_invoke$arity$3$($G__14510$$inline_346_a$$1624$$, $x$$436$$, $y$$255$$) : $JSCompiler_inline_result$$81_f$$666$$.call(null, $G__14510$$inline_346_a$$1624$$, $x$$436$$, $y$$255$$);
  return $cljs$core$_reset_BANG_$$(this, $JSCompiler_inline_result$$81_f$$666$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISwap$_swap_BANG_$arity$5$ = function($a$$1625$$, $f$$667$$, $x$$437$$, $y$$256$$, $more$$34$$) {
  return $cljs$core$_reset_BANG_$$(this, $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$05$$($f$$667$$, this.state, $x$$437$$, $y$$256$$, $more$$34$$));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.meta;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($a$$1626$$, $writer$$50$$, $opts$$48$$) {
  $cljs$core$_write$$($writer$$50$$, "#\x3cAtom: ");
  $cljs$core$pr_writer$$(this.state, $writer$$50$$, $opts$$48$$);
  return $cljs$core$_write$$($writer$$50$$, "\x3e");
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWatchable$_notify_watches$arity$3$ = function($this$$$96$$, $oldval$$3$$, $newval$$4$$) {
  return $cljs$core$reduce_kv$$(function($this$$$96$$) {
    return function($_$$207$$, $key$$105$$, $f$$668$$) {
      $f$$668$$.$cljs$core$IFn$_invoke$arity$4$ ? $f$$668$$.$cljs$core$IFn$_invoke$arity$4$($key$$105$$, $this$$$96$$, $oldval$$3$$, $newval$$4$$) : $f$$668$$.call(null, $key$$105$$, $this$$$96$$, $oldval$$3$$, $newval$$4$$);
      return null;
    };
  }(this), null, this.$watches$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWatchable$_add_watch$arity$3$ = function($this$$$97$$, $key$$106$$, $f$$669$$) {
  return this.$watches$ = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$(this.$watches$, $key$$106$$, $f$$669$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWatchable$_remove_watch$arity$2$ = function($this$$$98$$, $key$$107$$) {
  return this.$watches$ = $cljs$core$dissoc$$.$cljs$core$IFn$_invoke$arity$2$(this.$watches$, $key$$107$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  return $goog$getUid$$(this);
};
var $reagent$ratom$atom$$ = function $reagent$ratom$atom$$() {
  switch(arguments.length) {
    case 1:
      return $reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    default:
      return $reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], new $cljs$core$IndexedSeq$$(Array.prototype.slice.call(arguments, 1), 0));
  }
};
$reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$1$ = function($x$$438$$) {
  return new $reagent$ratom$RAtom$$($x$$438$$, null, null, null);
};
$reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($x$$439$$, $p__14526$$) {
  var $map__14527__$1_validator$$5$$ = $cljs$core$seq_QMARK_$$($p__14526$$) ? $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$hash_map$$, $p__14526$$) : $p__14526$$, $meta$$58$$ = $cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__14527__$1_validator$$5$$, $cljs$core$constant$0keyword$0meta$$), $map__14527__$1_validator$$5$$ = $cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__14527__$1_validator$$5$$, $cljs$core$constant$0keyword$0validator$$);
  return new $reagent$ratom$RAtom$$($x$$439$$, $meta$$58$$, $map__14527__$1_validator$$5$$, null);
};
$reagent$ratom$atom$$.$cljs$lang$applyTo$ = function($seq14522_seq14522__$1$$) {
  var $G__14523$$ = $cljs$core$first$$($seq14522_seq14522__$1$$);
  $seq14522_seq14522__$1$$ = $cljs$core$next$$($seq14522_seq14522__$1$$);
  return $reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$variadic$($G__14523$$, $seq14522_seq14522__$1$$);
};
$reagent$ratom$atom$$.$cljs$lang$maxFixedArity$ = 1;
var $reagent$ratom$dispose_BANG_$$ = function $reagent$ratom$dispose_BANG_$$($this$$$105$$) {
  if ($this$$$105$$ ? $this$$$105$$.$reagent$ratom$IDisposable$dispose_BANG_$arity$1$ : $this$$$105$$) {
    return $this$$$105$$.$reagent$ratom$IDisposable$dispose_BANG_$arity$1$();
  }
  var $JSCompiler_inline_result$$531_or__4251__auto__$$inline_849_or__4251__auto____$1$$inline_850$$;
  $JSCompiler_inline_result$$531_or__4251__auto__$$inline_849_or__4251__auto____$1$$inline_850$$ = $reagent$ratom$dispose_BANG_$$[$goog$typeOf$$(null == $this$$$105$$ ? null : $this$$$105$$)];
  if (!$JSCompiler_inline_result$$531_or__4251__auto__$$inline_849_or__4251__auto____$1$$inline_850$$ && ($JSCompiler_inline_result$$531_or__4251__auto__$$inline_849_or__4251__auto____$1$$inline_850$$ = $reagent$ratom$dispose_BANG_$$._, !$JSCompiler_inline_result$$531_or__4251__auto__$$inline_849_or__4251__auto____$1$$inline_850$$)) {
    throw $cljs$core$missing_protocol$$("IDisposable.dispose!", $this$$$105$$);
  }
  return $JSCompiler_inline_result$$531_or__4251__auto__$$inline_849_or__4251__auto____$1$$inline_850$$.call(null, $this$$$105$$);
}, $reagent$ratom$run$$ = function $reagent$ratom$run$$($this$$$106$$) {
  if ($this$$$106$$ ? $this$$$106$$.$reagent$ratom$IRunnable$run$arity$1$ : $this$$$106$$) {
    return $this$$$106$$.$reagent$ratom$IRunnable$run$arity$1$();
  }
  var $JSCompiler_inline_result$$532_or__4251__auto__$$inline_852_or__4251__auto____$1$$inline_853$$;
  $JSCompiler_inline_result$$532_or__4251__auto__$$inline_852_or__4251__auto____$1$$inline_853$$ = $reagent$ratom$run$$[$goog$typeOf$$(null == $this$$$106$$ ? null : $this$$$106$$)];
  if (!$JSCompiler_inline_result$$532_or__4251__auto__$$inline_852_or__4251__auto____$1$$inline_853$$ && ($JSCompiler_inline_result$$532_or__4251__auto__$$inline_852_or__4251__auto____$1$$inline_853$$ = $reagent$ratom$run$$._, !$JSCompiler_inline_result$$532_or__4251__auto__$$inline_852_or__4251__auto____$1$$inline_853$$)) {
    throw $cljs$core$missing_protocol$$("IRunnable.run", $this$$$106$$);
  }
  return $JSCompiler_inline_result$$532_or__4251__auto__$$inline_852_or__4251__auto____$1$$inline_853$$.call(null, $this$$$106$$);
}, $reagent$ratom$_update_watching$$ = function $reagent$ratom$_update_watching$$($this$$$107$$, $derefed$$) {
  if ($this$$$107$$ ? $this$$$107$$.$reagent$ratom$IComputedImpl$_update_watching$arity$2$ : $this$$$107$$) {
    return $this$$$107$$.$reagent$ratom$IComputedImpl$_update_watching$arity$2$(0, $derefed$$);
  }
  var $JSCompiler_inline_result$$533_or__4251__auto__$$inline_855_or__4251__auto____$1$$inline_856$$;
  $JSCompiler_inline_result$$533_or__4251__auto__$$inline_855_or__4251__auto____$1$$inline_856$$ = $reagent$ratom$_update_watching$$[$goog$typeOf$$(null == $this$$$107$$ ? null : $this$$$107$$)];
  if (!$JSCompiler_inline_result$$533_or__4251__auto__$$inline_855_or__4251__auto____$1$$inline_856$$ && ($JSCompiler_inline_result$$533_or__4251__auto__$$inline_855_or__4251__auto____$1$$inline_856$$ = $reagent$ratom$_update_watching$$._, !$JSCompiler_inline_result$$533_or__4251__auto__$$inline_855_or__4251__auto____$1$$inline_856$$)) {
    throw $cljs$core$missing_protocol$$("IComputedImpl.-update-watching", $this$$$107$$);
  }
  return $JSCompiler_inline_result$$533_or__4251__auto__$$inline_855_or__4251__auto____$1$$inline_856$$.call(null, $this$$$107$$, $derefed$$);
}, $reagent$ratom$_handle_change$$ = function $reagent$ratom$_handle_change$$($k$$336$$, $sender$$, $oldval$$5$$, $newval$$6$$) {
  if ($k$$336$$ ? $k$$336$$.$reagent$ratom$IComputedImpl$_handle_change$arity$4$ : $k$$336$$) {
    return $k$$336$$.$reagent$ratom$IComputedImpl$_handle_change$arity$4$(0, 0, $oldval$$5$$, $newval$$6$$);
  }
  var $JSCompiler_inline_result$$534_or__4251__auto__$$inline_858_or__4251__auto____$1$$inline_859$$;
  $JSCompiler_inline_result$$534_or__4251__auto__$$inline_858_or__4251__auto____$1$$inline_859$$ = $reagent$ratom$_handle_change$$[$goog$typeOf$$(null == $k$$336$$ ? null : $k$$336$$)];
  if (!$JSCompiler_inline_result$$534_or__4251__auto__$$inline_858_or__4251__auto____$1$$inline_859$$ && ($JSCompiler_inline_result$$534_or__4251__auto__$$inline_858_or__4251__auto____$1$$inline_859$$ = $reagent$ratom$_handle_change$$._, !$JSCompiler_inline_result$$534_or__4251__auto__$$inline_858_or__4251__auto____$1$$inline_859$$)) {
    throw $cljs$core$missing_protocol$$("IComputedImpl.-handle-change", $k$$336$$);
  }
  return $JSCompiler_inline_result$$534_or__4251__auto__$$inline_858_or__4251__auto____$1$$inline_859$$.call(null, $k$$336$$, $sender$$, $oldval$$5$$, $newval$$6$$);
};
function $reagent$ratom$call_watches$$($obs$$, $watches$$4$$, $oldval$$6$$, $newval$$7$$) {
  return $cljs$core$reduce_kv$$(function($watches$$4$$, $key$$110$$, $f$$675$$) {
    $f$$675$$.$cljs$core$IFn$_invoke$arity$4$ ? $f$$675$$.$cljs$core$IFn$_invoke$arity$4$($key$$110$$, $obs$$, $oldval$$6$$, $newval$$7$$) : $f$$675$$.call(null, $key$$110$$, $obs$$, $oldval$$6$$, $newval$$7$$);
    return null;
  }, null, $watches$$4$$);
}
function $reagent$ratom$Reaction$$($f$$676$$, $state$$7$$, $dirty_QMARK_$$, $active_QMARK_$$, $watching$$, $watches$$5$$, $auto_run$$, $on_set$$, $on_dispose$$) {
  this.f = $f$$676$$;
  this.state = $state$$7$$;
  this.$dirty_QMARK_$ = $dirty_QMARK_$$;
  this.$active_QMARK_$ = $active_QMARK_$$;
  this.$watching$ = $watching$$;
  this.$watches$ = $watches$$5$$;
  this.$auto_run$ = $auto_run$$;
  this.$on_set$ = $on_set$$;
  this.$on_dispose$ = $on_dispose$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 2153807872;
  this.$cljs$lang$protocol_mask$partition1$$ = 114690;
}
$JSCompiler_prototypeAlias$$ = $reagent$ratom$Reaction$$.prototype;
$JSCompiler_prototypeAlias$$.$reagent$ratom$IComputedImpl$_handle_change$arity$4$ = function($this$$$108$$, $sender$$1$$, $oldval$$7$$, $newval$$8$$) {
  var $self__$$950$$ = this;
  return $cljs$core$truth_$$(function() {
    var $this$$$108$$ = $self__$$950$$.$active_QMARK_$;
    return $cljs$core$truth_$$($this$$$108$$) ? $cljs$core$not$$($self__$$950$$.$dirty_QMARK_$) && $oldval$$7$$ !== $newval$$8$$ : $this$$$108$$;
  }()) ? ($self__$$950$$.$dirty_QMARK_$ = !0, function() {
    var $this$$$108$$ = $self__$$950$$.$auto_run$;
    return $cljs$core$truth_$$($this$$$108$$) ? $this$$$108$$ : $reagent$ratom$run$$;
  }().call(null, this)) : null;
};
$JSCompiler_prototypeAlias$$.$reagent$ratom$IComputedImpl$_update_watching$arity$2$ = function($this$$$109$$, $derefed$$1$$) {
  for (var $c__5036__auto___14597_c__5036__auto___14618_seq__14565_14586_seq__14569_14607_temp__4425__auto___14595_temp__4425__auto___14616_w_14602_w_14623$$ = $cljs$core$seq$$($derefed$$1$$), $G__14599_G__14620_chunk__14566_14587_chunk__14570_14608_seq__14565_14596__$1_seq__14569_14617__$1$$ = null, $G__14600_G__14621_count__14567_14588_count__14571_14609$$ = 0, $G__14598_G__14619_i__14568_14589_i__14572_14610$$ = 0;;) {
    if ($G__14598_G__14619_i__14568_14589_i__14572_14610$$ < $G__14600_G__14621_count__14567_14588_count__14571_14609$$) {
      var $w_14590_w_14611$$ = $G__14599_G__14620_chunk__14566_14587_chunk__14570_14608_seq__14565_14596__$1_seq__14569_14617__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__14598_G__14619_i__14568_14589_i__14572_14610$$);
      $cljs$core$contains_QMARK_$$(this.$watching$, $w_14590_w_14611$$) || $cljs$core$_add_watch$$($w_14590_w_14611$$, this, $reagent$ratom$_handle_change$$);
      $G__14598_G__14619_i__14568_14589_i__14572_14610$$ += 1;
    } else {
      if ($c__5036__auto___14597_c__5036__auto___14618_seq__14565_14586_seq__14569_14607_temp__4425__auto___14595_temp__4425__auto___14616_w_14602_w_14623$$ = $cljs$core$seq$$($c__5036__auto___14597_c__5036__auto___14618_seq__14565_14586_seq__14569_14607_temp__4425__auto___14595_temp__4425__auto___14616_w_14602_w_14623$$)) {
        $G__14599_G__14620_chunk__14566_14587_chunk__14570_14608_seq__14565_14596__$1_seq__14569_14617__$1$$ = $c__5036__auto___14597_c__5036__auto___14618_seq__14565_14586_seq__14569_14607_temp__4425__auto___14595_temp__4425__auto___14616_w_14602_w_14623$$, $cljs$core$chunked_seq_QMARK_$$($G__14599_G__14620_chunk__14566_14587_chunk__14570_14608_seq__14565_14596__$1_seq__14569_14617__$1$$) ? ($c__5036__auto___14597_c__5036__auto___14618_seq__14565_14586_seq__14569_14607_temp__4425__auto___14595_temp__4425__auto___14616_w_14602_w_14623$$ = 
        $cljs$core$_chunked_first$$($G__14599_G__14620_chunk__14566_14587_chunk__14570_14608_seq__14565_14596__$1_seq__14569_14617__$1$$), $G__14598_G__14619_i__14568_14589_i__14572_14610$$ = $cljs$core$_chunked_rest$$($G__14599_G__14620_chunk__14566_14587_chunk__14570_14608_seq__14565_14596__$1_seq__14569_14617__$1$$), $G__14599_G__14620_chunk__14566_14587_chunk__14570_14608_seq__14565_14596__$1_seq__14569_14617__$1$$ = $c__5036__auto___14597_c__5036__auto___14618_seq__14565_14586_seq__14569_14607_temp__4425__auto___14595_temp__4425__auto___14616_w_14602_w_14623$$, 
        $G__14600_G__14621_count__14567_14588_count__14571_14609$$ = $cljs$core$count$$($c__5036__auto___14597_c__5036__auto___14618_seq__14565_14586_seq__14569_14607_temp__4425__auto___14595_temp__4425__auto___14616_w_14602_w_14623$$), $c__5036__auto___14597_c__5036__auto___14618_seq__14565_14586_seq__14569_14607_temp__4425__auto___14595_temp__4425__auto___14616_w_14602_w_14623$$ = $G__14598_G__14619_i__14568_14589_i__14572_14610$$) : ($c__5036__auto___14597_c__5036__auto___14618_seq__14565_14586_seq__14569_14607_temp__4425__auto___14595_temp__4425__auto___14616_w_14602_w_14623$$ = 
        $cljs$core$first$$($G__14599_G__14620_chunk__14566_14587_chunk__14570_14608_seq__14565_14596__$1_seq__14569_14617__$1$$), $cljs$core$contains_QMARK_$$(this.$watching$, $c__5036__auto___14597_c__5036__auto___14618_seq__14565_14586_seq__14569_14607_temp__4425__auto___14595_temp__4425__auto___14616_w_14602_w_14623$$) || $cljs$core$_add_watch$$($c__5036__auto___14597_c__5036__auto___14618_seq__14565_14586_seq__14569_14607_temp__4425__auto___14595_temp__4425__auto___14616_w_14602_w_14623$$, this, 
        $reagent$ratom$_handle_change$$), $c__5036__auto___14597_c__5036__auto___14618_seq__14565_14586_seq__14569_14607_temp__4425__auto___14595_temp__4425__auto___14616_w_14602_w_14623$$ = $cljs$core$next$$($G__14599_G__14620_chunk__14566_14587_chunk__14570_14608_seq__14565_14596__$1_seq__14569_14617__$1$$), $G__14599_G__14620_chunk__14566_14587_chunk__14570_14608_seq__14565_14596__$1_seq__14569_14617__$1$$ = null, $G__14600_G__14621_count__14567_14588_count__14571_14609$$ = 0), $G__14598_G__14619_i__14568_14589_i__14572_14610$$ = 
        0;
      } else {
        break;
      }
    }
  }
  $c__5036__auto___14597_c__5036__auto___14618_seq__14565_14586_seq__14569_14607_temp__4425__auto___14595_temp__4425__auto___14616_w_14602_w_14623$$ = $cljs$core$seq$$(this.$watching$);
  $G__14599_G__14620_chunk__14566_14587_chunk__14570_14608_seq__14565_14596__$1_seq__14569_14617__$1$$ = null;
  for ($G__14598_G__14619_i__14568_14589_i__14572_14610$$ = $G__14600_G__14621_count__14567_14588_count__14571_14609$$ = 0;;) {
    if ($G__14598_G__14619_i__14568_14589_i__14572_14610$$ < $G__14600_G__14621_count__14567_14588_count__14571_14609$$) {
      $w_14590_w_14611$$ = $G__14599_G__14620_chunk__14566_14587_chunk__14570_14608_seq__14565_14596__$1_seq__14569_14617__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__14598_G__14619_i__14568_14589_i__14572_14610$$), $cljs$core$contains_QMARK_$$($derefed$$1$$, $w_14590_w_14611$$) || $cljs$core$_remove_watch$$($w_14590_w_14611$$, this), $G__14598_G__14619_i__14568_14589_i__14572_14610$$ += 1;
    } else {
      if ($c__5036__auto___14597_c__5036__auto___14618_seq__14565_14586_seq__14569_14607_temp__4425__auto___14595_temp__4425__auto___14616_w_14602_w_14623$$ = $cljs$core$seq$$($c__5036__auto___14597_c__5036__auto___14618_seq__14565_14586_seq__14569_14607_temp__4425__auto___14595_temp__4425__auto___14616_w_14602_w_14623$$)) {
        $G__14599_G__14620_chunk__14566_14587_chunk__14570_14608_seq__14565_14596__$1_seq__14569_14617__$1$$ = $c__5036__auto___14597_c__5036__auto___14618_seq__14565_14586_seq__14569_14607_temp__4425__auto___14595_temp__4425__auto___14616_w_14602_w_14623$$, $cljs$core$chunked_seq_QMARK_$$($G__14599_G__14620_chunk__14566_14587_chunk__14570_14608_seq__14565_14596__$1_seq__14569_14617__$1$$) ? ($c__5036__auto___14597_c__5036__auto___14618_seq__14565_14586_seq__14569_14607_temp__4425__auto___14595_temp__4425__auto___14616_w_14602_w_14623$$ = 
        $cljs$core$_chunked_first$$($G__14599_G__14620_chunk__14566_14587_chunk__14570_14608_seq__14565_14596__$1_seq__14569_14617__$1$$), $G__14598_G__14619_i__14568_14589_i__14572_14610$$ = $cljs$core$_chunked_rest$$($G__14599_G__14620_chunk__14566_14587_chunk__14570_14608_seq__14565_14596__$1_seq__14569_14617__$1$$), $G__14599_G__14620_chunk__14566_14587_chunk__14570_14608_seq__14565_14596__$1_seq__14569_14617__$1$$ = $c__5036__auto___14597_c__5036__auto___14618_seq__14565_14586_seq__14569_14607_temp__4425__auto___14595_temp__4425__auto___14616_w_14602_w_14623$$, 
        $G__14600_G__14621_count__14567_14588_count__14571_14609$$ = $cljs$core$count$$($c__5036__auto___14597_c__5036__auto___14618_seq__14565_14586_seq__14569_14607_temp__4425__auto___14595_temp__4425__auto___14616_w_14602_w_14623$$), $c__5036__auto___14597_c__5036__auto___14618_seq__14565_14586_seq__14569_14607_temp__4425__auto___14595_temp__4425__auto___14616_w_14602_w_14623$$ = $G__14598_G__14619_i__14568_14589_i__14572_14610$$) : ($c__5036__auto___14597_c__5036__auto___14618_seq__14565_14586_seq__14569_14607_temp__4425__auto___14595_temp__4425__auto___14616_w_14602_w_14623$$ = 
        $cljs$core$first$$($G__14599_G__14620_chunk__14566_14587_chunk__14570_14608_seq__14565_14596__$1_seq__14569_14617__$1$$), $cljs$core$contains_QMARK_$$($derefed$$1$$, $c__5036__auto___14597_c__5036__auto___14618_seq__14565_14586_seq__14569_14607_temp__4425__auto___14595_temp__4425__auto___14616_w_14602_w_14623$$) || $cljs$core$_remove_watch$$($c__5036__auto___14597_c__5036__auto___14618_seq__14565_14586_seq__14569_14607_temp__4425__auto___14595_temp__4425__auto___14616_w_14602_w_14623$$, this), 
        $c__5036__auto___14597_c__5036__auto___14618_seq__14565_14586_seq__14569_14607_temp__4425__auto___14595_temp__4425__auto___14616_w_14602_w_14623$$ = $cljs$core$next$$($G__14599_G__14620_chunk__14566_14587_chunk__14570_14608_seq__14565_14596__$1_seq__14569_14617__$1$$), $G__14599_G__14620_chunk__14566_14587_chunk__14570_14608_seq__14565_14596__$1_seq__14569_14617__$1$$ = null, $G__14600_G__14621_count__14567_14588_count__14571_14609$$ = 0), $G__14598_G__14619_i__14568_14589_i__14572_14610$$ = 
        0;
      } else {
        break;
      }
    }
  }
  return this.$watching$ = $derefed$$1$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($this$$$110$$, $writer$$52$$, $opts$$50$$) {
  $cljs$core$_write$$($writer$$52$$, [$cljs$core$str$$("#\x3cReaction "), $cljs$core$str$$($cljs$core$hash$$(this)), $cljs$core$str$$(": ")].join(""));
  $cljs$core$pr_writer$$(this.state, $writer$$52$$, $opts$$50$$);
  return $cljs$core$_write$$($writer$$52$$, "\x3e");
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  return $goog$getUid$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($o$$316$$, $other$$75$$) {
  return this === $other$$75$$;
};
$JSCompiler_prototypeAlias$$.$reagent$ratom$IDisposable$dispose_BANG_$arity$1$ = function() {
  for (var $c__5036__auto___14639_seq__14574_14628_temp__4425__auto___14637_w_14644$$ = $cljs$core$seq$$(this.$watching$), $G__14641_chunk__14575_14629_seq__14574_14638__$1$$ = null, $G__14642_count__14576_14630$$ = 0, $G__14640_i__14577_14631$$ = 0;;) {
    if ($G__14640_i__14577_14631$$ < $G__14642_count__14576_14630$$) {
      var $w_14632$$ = $G__14641_chunk__14575_14629_seq__14574_14638__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__14640_i__14577_14631$$);
      $cljs$core$_remove_watch$$($w_14632$$, this);
      $G__14640_i__14577_14631$$ += 1;
    } else {
      if ($c__5036__auto___14639_seq__14574_14628_temp__4425__auto___14637_w_14644$$ = $cljs$core$seq$$($c__5036__auto___14639_seq__14574_14628_temp__4425__auto___14637_w_14644$$)) {
        $G__14641_chunk__14575_14629_seq__14574_14638__$1$$ = $c__5036__auto___14639_seq__14574_14628_temp__4425__auto___14637_w_14644$$, $cljs$core$chunked_seq_QMARK_$$($G__14641_chunk__14575_14629_seq__14574_14638__$1$$) ? ($c__5036__auto___14639_seq__14574_14628_temp__4425__auto___14637_w_14644$$ = $cljs$core$_chunked_first$$($G__14641_chunk__14575_14629_seq__14574_14638__$1$$), $G__14640_i__14577_14631$$ = $cljs$core$_chunked_rest$$($G__14641_chunk__14575_14629_seq__14574_14638__$1$$), $G__14641_chunk__14575_14629_seq__14574_14638__$1$$ = 
        $c__5036__auto___14639_seq__14574_14628_temp__4425__auto___14637_w_14644$$, $G__14642_count__14576_14630$$ = $cljs$core$count$$($c__5036__auto___14639_seq__14574_14628_temp__4425__auto___14637_w_14644$$), $c__5036__auto___14639_seq__14574_14628_temp__4425__auto___14637_w_14644$$ = $G__14640_i__14577_14631$$) : ($c__5036__auto___14639_seq__14574_14628_temp__4425__auto___14637_w_14644$$ = $cljs$core$first$$($G__14641_chunk__14575_14629_seq__14574_14638__$1$$), $cljs$core$_remove_watch$$($c__5036__auto___14639_seq__14574_14628_temp__4425__auto___14637_w_14644$$, 
        this), $c__5036__auto___14639_seq__14574_14628_temp__4425__auto___14637_w_14644$$ = $cljs$core$next$$($G__14641_chunk__14575_14629_seq__14574_14638__$1$$), $G__14641_chunk__14575_14629_seq__14574_14638__$1$$ = null, $G__14642_count__14576_14630$$ = 0), $G__14640_i__14577_14631$$ = 0;
      } else {
        break;
      }
    }
  }
  this.$watching$ = $cljs$core$PersistentHashSet$EMPTY$$;
  this.state = null;
  this.$dirty_QMARK_$ = !0;
  $cljs$core$truth_$$(this.$active_QMARK_$) && ($cljs$core$truth_$$(!1) && $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($reagent$ratom$_running$$, $cljs$core$dec$$), this.$active_QMARK_$ = !1);
  return $cljs$core$truth_$$(this.$on_dispose$) ? this.$on_dispose$.$cljs$core$IFn$_invoke$arity$0$ ? this.$on_dispose$.$cljs$core$IFn$_invoke$arity$0$() : this.$on_dispose$.call(null) : null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReset$_reset_BANG_$arity$2$ = function($a$$1633$$, $new_value$$5$$) {
  var $old_value$$2$$ = this.state;
  this.state = $new_value$$5$$;
  $cljs$core$_notify_watches$$(this, $old_value$$2$$, $new_value$$5$$);
  return $new_value$$5$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISwap$_swap_BANG_$arity$2$ = function($a$$1634$$, $f__$1$$1$$) {
  var $G__14578$$inline_356_JSCompiler_inline_result$$82$$;
  $G__14578$$inline_356_JSCompiler_inline_result$$82$$ = this.state;
  $G__14578$$inline_356_JSCompiler_inline_result$$82$$ = $f__$1$$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $f__$1$$1$$.$cljs$core$IFn$_invoke$arity$1$($G__14578$$inline_356_JSCompiler_inline_result$$82$$) : $f__$1$$1$$.call(null, $G__14578$$inline_356_JSCompiler_inline_result$$82$$);
  return $cljs$core$_reset_BANG_$$(this, $G__14578$$inline_356_JSCompiler_inline_result$$82$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISwap$_swap_BANG_$arity$3$ = function($G__14579$$inline_358_a$$1635$$, $JSCompiler_inline_result$$83_f__$1$$2$$, $x$$443$$) {
  $G__14579$$inline_358_a$$1635$$ = this.state;
  $JSCompiler_inline_result$$83_f__$1$$2$$ = $JSCompiler_inline_result$$83_f__$1$$2$$.$cljs$core$IFn$_invoke$arity$2$ ? $JSCompiler_inline_result$$83_f__$1$$2$$.$cljs$core$IFn$_invoke$arity$2$($G__14579$$inline_358_a$$1635$$, $x$$443$$) : $JSCompiler_inline_result$$83_f__$1$$2$$.call(null, $G__14579$$inline_358_a$$1635$$, $x$$443$$);
  return $cljs$core$_reset_BANG_$$(this, $JSCompiler_inline_result$$83_f__$1$$2$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISwap$_swap_BANG_$arity$4$ = function($G__14581$$inline_360_a$$1636$$, $JSCompiler_inline_result$$84_f__$1$$3$$, $x$$444$$, $y$$259$$) {
  $G__14581$$inline_360_a$$1636$$ = this.state;
  $JSCompiler_inline_result$$84_f__$1$$3$$ = $JSCompiler_inline_result$$84_f__$1$$3$$.$cljs$core$IFn$_invoke$arity$3$ ? $JSCompiler_inline_result$$84_f__$1$$3$$.$cljs$core$IFn$_invoke$arity$3$($G__14581$$inline_360_a$$1636$$, $x$$444$$, $y$$259$$) : $JSCompiler_inline_result$$84_f__$1$$3$$.call(null, $G__14581$$inline_360_a$$1636$$, $x$$444$$, $y$$259$$);
  return $cljs$core$_reset_BANG_$$(this, $JSCompiler_inline_result$$84_f__$1$$3$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISwap$_swap_BANG_$arity$5$ = function($a$$1637$$, $f__$1$$4$$, $x$$445$$, $y$$260$$, $more$$36$$) {
  return $cljs$core$_reset_BANG_$$(this, $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$05$$($f__$1$$4$$, this.state, $x$$445$$, $y$$260$$, $more$$36$$));
};
$JSCompiler_prototypeAlias$$.$reagent$ratom$IRunnable$run$arity$1$ = function() {
  var $oldstate$$ = this.state, $res$$11$$ = $reagent$ratom$capture_derefed$$(this.f, this), $derefed$$2$$ = $reagent$ratom$captured$$(this);
  !$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($derefed$$2$$, this.$watching$) && $reagent$ratom$_update_watching$$(this, $derefed$$2$$);
  $cljs$core$truth_$$(this.$active_QMARK_$) || ($cljs$core$truth_$$(!1) && $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($reagent$ratom$_running$$, $cljs$core$inc$$), this.$active_QMARK_$ = !0);
  this.$dirty_QMARK_$ = !1;
  this.state = $res$$11$$;
  $reagent$ratom$call_watches$$(this, this.$watches$, $oldstate$$, this.state);
  return $res$$11$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWatchable$_notify_watches$arity$3$ = function($this$$$114$$, $oldval$$8$$, $newval$$9$$) {
  $cljs$core$truth_$$(this.$on_set$) && (this.$on_set$.$cljs$core$IFn$_invoke$arity$2$ ? this.$on_set$.$cljs$core$IFn$_invoke$arity$2$($oldval$$8$$, $newval$$9$$) : this.$on_set$.call(null, $oldval$$8$$, $newval$$9$$));
  return $reagent$ratom$call_watches$$(this, this.$watches$, $oldval$$8$$, $newval$$9$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWatchable$_add_watch$arity$3$ = function($this$$$115$$, $k$$337$$, $wf$$) {
  return this.$watches$ = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$(this.$watches$, $k$$337$$, $wf$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWatchable$_remove_watch$arity$2$ = function($this$$$116$$, $k$$338$$) {
  this.$watches$ = $cljs$core$dissoc$$.$cljs$core$IFn$_invoke$arity$2$(this.$watches$, $k$$338$$);
  return $cljs$core$empty_QMARK_$$(this.$watches$) ? $reagent$ratom$dispose_BANG_$$(this) : null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IDeref$_deref$arity$1$ = function() {
  var $self__$$965$$ = this;
  if ($cljs$core$not$$(function() {
    var $x__13529__auto___14651$$ = $self__$$965$$.$auto_run$;
    return $cljs$core$truth_$$($x__13529__auto___14651$$) ? $x__13529__auto___14651$$ : $reagent$ratom$_STAR_ratom_context_STAR_$$;
  }())) {
    var $x__13529__auto___14651$$ = new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$self__$$965$$.$auto_run$, $reagent$ratom$_STAR_ratom_context_STAR_$$], null);
    "undefined" !== typeof console && console.log("" + $cljs$core$str$$([$cljs$core$str$$("dbg "), $cljs$core$str$$("reagent.ratom"), $cljs$core$str$$(":"), $cljs$core$str$$(231), $cljs$core$str$$(": "), $cljs$core$str$$("[auto-run *ratom-context*]"), $cljs$core$str$$(": "), $cljs$core$str$$($cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$array_seq$$([$x__13529__auto___14651$$], 0)))].join("")));
  }
  if (!$cljs$core$truth_$$(function() {
    var $x__13529__auto___14651$$ = $self__$$965$$.$auto_run$;
    return $cljs$core$truth_$$($x__13529__auto___14651$$) ? $x__13529__auto___14651$$ : $reagent$ratom$_STAR_ratom_context_STAR_$$;
  }())) {
    throw Error([$cljs$core$str$$("Assert failed: "), $cljs$core$str$$("Reaction derefed outside auto-running context"), $cljs$core$str$$("\n"), $cljs$core$str$$($cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$array_seq$$([$cljs$core$list$$(new $cljs$core$Symbol$$(null, "or", "or", 1876275696, null), new $cljs$core$Symbol$$(null, "auto-run", "auto-run", -696035332, null), new $cljs$core$Symbol$$(null, "*ratom-context*", "*ratom-context*", -1557728360, null))], 0)))].join(""));
  }
  $reagent$ratom$notify_deref_watcher_BANG_$$(this);
  return $cljs$core$truth_$$($self__$$965$$.$dirty_QMARK_$) ? $reagent$ratom$run$$(this) : $self__$$965$$.state;
};
function $reagent$ratom$make_reaction$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($f$$678$$, $p__14654$$) {
  var $derefed$$3_map__14655__$1$$ = $cljs$core$seq_QMARK_$$($p__14654$$) ? $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$hash_map$$, $p__14654$$) : $p__14654$$, $auto_run$$2_runner$$ = $cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($derefed$$3_map__14655__$1$$, $cljs$core$constant$0keyword$0auto_DASH_run$$), $on_set$$2_reaction$$ = $cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($derefed$$3_map__14655__$1$$, $cljs$core$constant$0keyword$0on_DASH_set$$), $on_dispose$$2$$ = 
  $cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($derefed$$3_map__14655__$1$$, $cljs$core$constant$0keyword$0on_DASH_dispose$$), $derefed$$3_map__14655__$1$$ = $cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($derefed$$3_map__14655__$1$$, $cljs$core$constant$0keyword$0derefed$$), $auto_run$$2_runner$$ = $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($auto_run$$2_runner$$, !0) ? $reagent$ratom$run$$ : $auto_run$$2_runner$$, $active$$ = null != $derefed$$3_map__14655__$1$$, $on_set$$2_reaction$$ = 
  new $reagent$ratom$Reaction$$($f$$678$$, null, !$active$$, $active$$, null, $cljs$core$PersistentArrayMap$EMPTY$$, $auto_run$$2_runner$$, $on_set$$2_reaction$$, $on_dispose$$2$$);
  null != $derefed$$3_map__14655__$1$$ && ($cljs$core$truth_$$(!1) && $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($reagent$ratom$_running$$, $cljs$core$inc$$), $on_set$$2_reaction$$.$reagent$ratom$IComputedImpl$_update_watching$arity$2$(0, $derefed$$3_map__14655__$1$$));
  return $on_set$$2_reaction$$;
}
;function $reagent$impl$batching$fake_raf$$($f$$679$$) {
  return setTimeout($f$$679$$, 16);
}
var $reagent$impl$batching$next_tick$$ = $cljs$core$not$$($reagent$impl$util$is_client$$) ? $reagent$impl$batching$fake_raf$$ : function() {
  var $or__4251__auto____$3$$3_w$$24$$ = window, $or__4251__auto__$$149_or__4251__auto____$1$$116_or__4251__auto____$2$$8$$ = $or__4251__auto____$3$$3_w$$24$$.requestAnimationFrame;
  if ($cljs$core$truth_$$($or__4251__auto__$$149_or__4251__auto____$1$$116_or__4251__auto____$2$$8$$)) {
    return $or__4251__auto__$$149_or__4251__auto____$1$$116_or__4251__auto____$2$$8$$;
  }
  $or__4251__auto__$$149_or__4251__auto____$1$$116_or__4251__auto____$2$$8$$ = $or__4251__auto____$3$$3_w$$24$$.webkitRequestAnimationFrame;
  if ($cljs$core$truth_$$($or__4251__auto__$$149_or__4251__auto____$1$$116_or__4251__auto____$2$$8$$)) {
    return $or__4251__auto__$$149_or__4251__auto____$1$$116_or__4251__auto____$2$$8$$;
  }
  $or__4251__auto__$$149_or__4251__auto____$1$$116_or__4251__auto____$2$$8$$ = $or__4251__auto____$3$$3_w$$24$$.mozRequestAnimationFrame;
  if ($cljs$core$truth_$$($or__4251__auto__$$149_or__4251__auto____$1$$116_or__4251__auto____$2$$8$$)) {
    return $or__4251__auto__$$149_or__4251__auto____$1$$116_or__4251__auto____$2$$8$$;
  }
  $or__4251__auto____$3$$3_w$$24$$ = $or__4251__auto____$3$$3_w$$24$$.msRequestAnimationFrame;
  return $cljs$core$truth_$$($or__4251__auto____$3$$3_w$$24$$) ? $or__4251__auto____$3$$3_w$$24$$ : $reagent$impl$batching$fake_raf$$;
}();
function $reagent$impl$batching$compare_levels$$($c1$$9$$, $c2$$9$$) {
  return $c1$$9$$.props.level - $c2$$9$$.props.level;
}
function $JSCompiler_StaticMethods_schedule$$() {
  var $G__14430_JSCompiler_StaticMethods_schedule$self$$ = $reagent$impl$batching$render_queue$$;
  if ($cljs$core$truth_$$($G__14430_JSCompiler_StaticMethods_schedule$self$$.$scheduled_QMARK_$)) {
    return null;
  }
  $G__14430_JSCompiler_StaticMethods_schedule$self$$.$scheduled_QMARK_$ = !0;
  $G__14430_JSCompiler_StaticMethods_schedule$self$$ = function($G__14430_JSCompiler_StaticMethods_schedule$self$$) {
    return function() {
      var $q$$inline_363$$ = $G__14430_JSCompiler_StaticMethods_schedule$self$$.$queue$;
      $G__14430_JSCompiler_StaticMethods_schedule$self$$.$queue$ = [];
      $G__14430_JSCompiler_StaticMethods_schedule$self$$.$scheduled_QMARK_$ = !1;
      a: {
        $q$$inline_363$$.sort($reagent$impl$batching$compare_levels$$);
        for (var $n__5136__auto__$$inline_862$$ = $q$$inline_363$$.length, $i$$inline_863$$ = 0;;) {
          if ($i$$inline_863$$ < $n__5136__auto__$$inline_862$$) {
            var $c_14428$$inline_864$$ = $q$$inline_363$$[$i$$inline_863$$];
            $cljs$core$truth_$$($c_14428$$inline_864$$.cljsIsDirty) && $c_14428$$inline_864$$.forceUpdate();
            $i$$inline_863$$ += 1;
          } else {
            break a;
          }
        }
      }
      return null;
    };
  }($G__14430_JSCompiler_StaticMethods_schedule$self$$);
  return $reagent$impl$batching$next_tick$$.$cljs$core$IFn$_invoke$arity$1$ ? $reagent$impl$batching$next_tick$$.$cljs$core$IFn$_invoke$arity$1$($G__14430_JSCompiler_StaticMethods_schedule$self$$) : $reagent$impl$batching$next_tick$$.call(null, $G__14430_JSCompiler_StaticMethods_schedule$self$$);
}
var $reagent$impl$batching$render_queue$$ = new function() {
  this.$queue$ = [];
  this.$scheduled_QMARK_$ = !1;
};
function $reagent$impl$batching$queue_render$$($c$$951$$) {
  $c$$951$$.cljsIsDirty = !0;
  $reagent$impl$batching$render_queue$$.$queue$.push($c$$951$$);
  return $JSCompiler_StaticMethods_schedule$$();
}
function $reagent$impl$batching$is_reagent_component$$($G__14432__$1_c$$953$$) {
  $G__14432__$1_c$$953$$ = null == $G__14432__$1_c$$953$$ ? null : $G__14432__$1_c$$953$$.props;
  return null == $G__14432__$1_c$$953$$ ? null : $G__14432__$1_c$$953$$.argv;
}
function $reagent$impl$batching$run_reactively$$($c$$954$$, $run$$1$$) {
  if (!$cljs$core$truth_$$($reagent$impl$batching$is_reagent_component$$($c$$954$$))) {
    throw Error([$cljs$core$str$$("Assert failed: "), $cljs$core$str$$($cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$array_seq$$([$cljs$core$list$$(new $cljs$core$Symbol$$(null, "is-reagent-component", "is-reagent-component", -1856228005, null), new $cljs$core$Symbol$$(null, "c", "c", -122660552, null))], 0)))].join(""));
  }
  $c$$954$$.cljsIsDirty = !1;
  var $rat$$ = $c$$954$$.cljsRatom;
  if (null == $rat$$) {
    var $res$$12$$ = $reagent$ratom$capture_derefed$$($run$$1$$, $c$$954$$), $derefed$$4$$ = $reagent$ratom$captured$$($c$$954$$);
    null != $derefed$$4$$ && ($c$$954$$.cljsRatom = $reagent$ratom$make_reaction$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($run$$1$$, $cljs$core$array_seq$$([$cljs$core$constant$0keyword$0auto_DASH_run$$, function() {
      return function() {
        return $reagent$impl$batching$queue_render$$($c$$954$$);
      };
    }($res$$12$$, $derefed$$4$$, $rat$$), $cljs$core$constant$0keyword$0derefed$$, $derefed$$4$$], 0)));
    return $res$$12$$;
  }
  return $reagent$ratom$run$$($rat$$);
}
function $reagent$impl$batching$dispose$$($c$$955$$) {
  var $G__14434_14435$$ = $c$$955$$.cljsRatom;
  null == $G__14434_14435$$ || $reagent$ratom$dispose_BANG_$$($G__14434_14435$$);
  return $c$$955$$.cljsIsDirty = !1;
}
;function $reagent$impl$component$state_atom$$($this$$$121$$) {
  var $sa$$ = $this$$$121$$.cljsState;
  return null != $sa$$ ? $sa$$ : $this$$$121$$.cljsState = $reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$1$(null);
}
var $reagent$impl$component$do_render$$ = function $reagent$impl$component$do_render$$($c$$956$$) {
  var $f$$680$$ = $c$$956$$.cljsRender;
  if (!$cljs$core$truth_$$($reagent$impl$util$clj_ifn_QMARK_$$($f$$680$$))) {
    throw Error([$cljs$core$str$$("Assert failed: "), $cljs$core$str$$($cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$array_seq$$([$cljs$core$list$$(new $cljs$core$Symbol$$("util", "clj-ifn?", "util/clj-ifn?", 259370460, null), new $cljs$core$Symbol$$(null, "f", "f", 43394975, null))], 0)))].join(""));
  }
  var $p$$119$$ = $c$$956$$.props, $res$$14$$ = null == $c$$956$$.componentFunction ? $f$$680$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$$680$$.$cljs$core$IFn$_invoke$arity$1$($c$$956$$) : $f$$680$$.call(null, $c$$956$$) : function() {
    var $c$$956$$ = $p$$119$$.argv;
    switch($cljs$core$count$$($c$$956$$)) {
      case 1:
        return $f$$680$$.$cljs$core$IFn$_invoke$arity$0$ ? $f$$680$$.$cljs$core$IFn$_invoke$arity$0$() : $f$$680$$.call(null);
      case 2:
        return $c$$956$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($c$$956$$, 1), $f$$680$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$$680$$.$cljs$core$IFn$_invoke$arity$1$($c$$956$$) : $f$$680$$.call(null, $c$$956$$);
      case 3:
        var $res$$14$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($c$$956$$, 1), $c$$956$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($c$$956$$, 2);
        return $f$$680$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$$680$$.$cljs$core$IFn$_invoke$arity$2$($res$$14$$, $c$$956$$) : $f$$680$$.call(null, $res$$14$$, $c$$956$$);
      case 4:
        var $res$$14$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($c$$956$$, 1), $G__14374_G__14377$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($c$$956$$, 2), $c$$956$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($c$$956$$, 3);
        return $f$$680$$.$cljs$core$IFn$_invoke$arity$3$ ? $f$$680$$.$cljs$core$IFn$_invoke$arity$3$($res$$14$$, $G__14374_G__14377$$, $c$$956$$) : $f$$680$$.call(null, $res$$14$$, $G__14374_G__14377$$, $c$$956$$);
      case 5:
        var $res$$14$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($c$$956$$, 1), $G__14374_G__14377$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($c$$956$$, 2), $G__14378$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($c$$956$$, 3), $c$$956$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($c$$956$$, 4);
        return $f$$680$$.$cljs$core$IFn$_invoke$arity$4$ ? $f$$680$$.$cljs$core$IFn$_invoke$arity$4$($res$$14$$, $G__14374_G__14377$$, $G__14378$$, $c$$956$$) : $f$$680$$.call(null, $res$$14$$, $G__14374_G__14377$$, $G__14378$$, $c$$956$$);
      default:
        return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($f$$680$$, $cljs$core$subvec$cljs$0core$0IFn$0_invoke$0arity$03$$($c$$956$$, 1, $cljs$core$count$$($c$$956$$)));
    }
  }();
  return $cljs$core$vector_QMARK_$$($res$$14$$) ? $c$$956$$.asComponent($res$$14$$, $p$$119$$.level) : $cljs$core$ifn_QMARK_$$($res$$14$$) ? ($c$$956$$.cljsRender = $res$$14$$, $reagent$impl$component$do_render$$($c$$956$$)) : $res$$14$$;
};
function $reagent$impl$component$custom_wrapper$$($key$$111$$, $f$$681$$) {
  var $G__14393$$ = $key$$111$$ instanceof $cljs$core$Keyword$$ ? $key$$111$$.$fqn$ : null;
  switch($G__14393$$) {
    case "getDefaultProps":
      throw Error([$cljs$core$str$$("Assert failed: "), $cljs$core$str$$("getDefaultProps not supported yet"), $cljs$core$str$$("\n"), $cljs$core$str$$($cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$array_seq$$([!1], 0)))].join(""));;
    case "getInitialState":
      return function() {
        return function() {
          var $key$$111$$ = $f$$681$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$$681$$.$cljs$core$IFn$_invoke$arity$1$(this) : $f$$681$$.call(null, this);
          return $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($reagent$impl$component$state_atom$$(this), $cljs$core$merge$$, $key$$111$$);
        };
      }($G__14393$$);
    case "componentWillReceiveProps":
      return function() {
        return function($key$$111$$) {
          $key$$111$$ = $key$$111$$.argv;
          return $f$$681$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$$681$$.$cljs$core$IFn$_invoke$arity$2$(this, $key$$111$$) : $f$$681$$.call(null, this, $key$$111$$);
        };
      }($G__14393$$);
    case "shouldComponentUpdate":
      return function() {
        return function($key$$111$$) {
          var $G__14393$$ = $reagent$impl$util$_STAR_always_update_STAR_$$;
          if ($cljs$core$truth_$$($G__14393$$)) {
            return $G__14393$$;
          }
          $G__14393$$ = this.props.argv;
          $key$$111$$ = $key$$111$$.argv;
          return null == $f$$681$$ ? $cljs$core$not$$($reagent$impl$util$equal_args$$($G__14393$$, $key$$111$$)) : $f$$681$$.$cljs$core$IFn$_invoke$arity$3$ ? $f$$681$$.$cljs$core$IFn$_invoke$arity$3$(this, $G__14393$$, $key$$111$$) : $f$$681$$.call(null, this, $G__14393$$, $key$$111$$);
        };
      }($G__14393$$);
    case "componentWillUpdate":
      return function() {
        return function($key$$111$$) {
          $key$$111$$ = $key$$111$$.argv;
          return $f$$681$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$$681$$.$cljs$core$IFn$_invoke$arity$2$(this, $key$$111$$) : $f$$681$$.call(null, this, $key$$111$$);
        };
      }($G__14393$$);
    case "componentDidUpdate":
      return function() {
        return function($key$$111$$) {
          $key$$111$$ = $key$$111$$.argv;
          return $f$$681$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$$681$$.$cljs$core$IFn$_invoke$arity$2$(this, $key$$111$$) : $f$$681$$.call(null, this, $key$$111$$);
        };
      }($G__14393$$);
    case "componentWillUnmount":
      return function() {
        return function() {
          $reagent$impl$batching$dispose$$(this);
          return null == $f$$681$$ ? null : $f$$681$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$$681$$.$cljs$core$IFn$_invoke$arity$1$(this) : $f$$681$$.call(null, this);
        };
      }($G__14393$$);
    default:
      return null;
  }
}
function $reagent$impl$component$default_wrapper$$($f$$682$$) {
  return $cljs$core$ifn_QMARK_$$($f$$682$$) ? function() {
    function $G__14406$$($G__14406$$) {
      var $G__14406__delegate$$ = null;
      if (0 < arguments.length) {
        for (var $G__14406__delegate$$ = 0, $G__14407__a$$ = Array(arguments.length - 0);$G__14406__delegate$$ < $G__14407__a$$.length;) {
          $G__14407__a$$[$G__14406__delegate$$] = arguments[$G__14406__delegate$$ + 0], ++$G__14406__delegate$$;
        }
        $G__14406__delegate$$ = new $cljs$core$IndexedSeq$$($G__14407__a$$, 0);
      }
      return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$03$$($f$$682$$, this, $G__14406__delegate$$);
    }
    function $G__14406__delegate$$($G__14406$$) {
      return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$03$$($f$$682$$, this, $G__14406$$);
    }
    $G__14406$$.$cljs$lang$maxFixedArity$ = 0;
    $G__14406$$.$cljs$lang$applyTo$ = function($f$$682$$) {
      $f$$682$$ = $cljs$core$seq$$($f$$682$$);
      return $G__14406__delegate$$($f$$682$$);
    };
    $G__14406$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__14406__delegate$$;
    return $G__14406$$;
  }() : $f$$682$$;
}
var $reagent$impl$component$dont_wrap$$ = new $cljs$core$PersistentHashSet$$(null, new $cljs$core$PersistentArrayMap$$(null, 3, [$cljs$core$constant$0keyword$0cljsRender$$, null, $cljs$core$constant$0keyword$0render$$, null, $cljs$core$constant$0keyword$0componentFunction$$, null], null), null);
function $reagent$impl$component$dont_bind$$($f$$683$$) {
  $cljs$core$ifn_QMARK_$$($f$$683$$) && ($f$$683$$.__reactDontBind = !0);
  return $f$$683$$;
}
function $reagent$impl$component$get_wrapper$$($key$$112$$, $f$$684$$, $name$$73$$) {
  if ($cljs$core$truth_$$($reagent$impl$component$dont_wrap$$.$cljs$core$IFn$_invoke$arity$1$ ? $reagent$impl$component$dont_wrap$$.$cljs$core$IFn$_invoke$arity$1$($key$$112$$) : $reagent$impl$component$dont_wrap$$.call(null, $key$$112$$))) {
    return $reagent$impl$component$dont_bind$$($f$$684$$);
  }
  var $wrap$$ = $reagent$impl$component$custom_wrapper$$($key$$112$$, $f$$684$$);
  if ($cljs$core$truth_$$($cljs$core$truth_$$($wrap$$) ? $f$$684$$ : $wrap$$) && !$cljs$core$ifn_QMARK_$$($f$$684$$)) {
    throw Error([$cljs$core$str$$("Assert failed: "), $cljs$core$str$$([$cljs$core$str$$("Expected function in "), $cljs$core$str$$($name$$73$$), $cljs$core$str$$($key$$112$$), $cljs$core$str$$(" but got "), $cljs$core$str$$($f$$684$$)].join("")), $cljs$core$str$$("\n"), $cljs$core$str$$($cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$array_seq$$([$cljs$core$list$$(new $cljs$core$Symbol$$(null, "ifn?", "ifn?", -2106461064, null), new $cljs$core$Symbol$$(null, "f", "f", 43394975, 
    null))], 0)))].join(""));
  }
  return $cljs$core$truth_$$($wrap$$) ? $wrap$$ : $reagent$impl$component$default_wrapper$$($f$$684$$);
}
var $reagent$impl$component$obligatory$$ = new $cljs$core$PersistentArrayMap$$(null, 2, [$cljs$core$constant$0keyword$0shouldComponentUpdate$$, null, $cljs$core$constant$0keyword$0componentWillUnmount$$, null], null), $reagent$impl$component$dash_to_camel$$ = $reagent$impl$util$memoize_1$$($reagent$impl$util$dash_to_camel$$);
function $reagent$impl$component$camelify_map_keys$$($fun_map$$) {
  return $cljs$core$reduce_kv$$(function($fun_map$$, $k$$339$$, $v$$99$$) {
    return $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($fun_map$$, $cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($reagent$impl$component$dash_to_camel$$.$cljs$core$IFn$_invoke$arity$1$ ? $reagent$impl$component$dash_to_camel$$.$cljs$core$IFn$_invoke$arity$1$($k$$339$$) : $reagent$impl$component$dash_to_camel$$.call(null, $k$$339$$)), $v$$99$$);
  }, $cljs$core$PersistentArrayMap$EMPTY$$, $fun_map$$);
}
function $reagent$impl$component$add_obligatory$$($fun_map$$1$$) {
  return $cljs$core$merge$$.$cljs$core$IFn$_invoke$arity$variadic$($cljs$core$array_seq$$([$reagent$impl$component$obligatory$$, $fun_map$$1$$], 0));
}
function $reagent$impl$component$add_render$$($fun_map$$2$$, $render_f$$) {
  return $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$variadic$($fun_map$$2$$, $cljs$core$constant$0keyword$0cljsRender$$, $render_f$$, $cljs$core$array_seq$$([$cljs$core$constant$0keyword$0render$$, $cljs$core$truth_$$($reagent$impl$util$is_client$$) ? function() {
    return $reagent$impl$batching$run_reactively$$(this, function($fun_map$$2$$) {
      return function() {
        return $reagent$impl$component$do_render$$($fun_map$$2$$);
      };
    }(this));
  } : function() {
    return $reagent$impl$component$do_render$$(this);
  }], 0));
}
function $reagent$impl$component$wrap_funs$$($fun_map$$3$$) {
  var $render_fun$$ = function() {
    var $render_fun$$ = $cljs$core$constant$0keyword$0componentFunction$$.$cljs$core$IFn$_invoke$arity$1$($fun_map$$3$$);
    return $cljs$core$truth_$$($render_fun$$) ? $render_fun$$ : $cljs$core$constant$0keyword$0render$$.$cljs$core$IFn$_invoke$arity$1$($fun_map$$3$$);
  }();
  if (!$cljs$core$truth_$$($reagent$impl$util$clj_ifn_QMARK_$$($render_fun$$))) {
    throw Error([$cljs$core$str$$("Assert failed: "), $cljs$core$str$$([$cljs$core$str$$("Render must be a function, not "), $cljs$core$str$$($cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$array_seq$$([$render_fun$$], 0)))].join("")), $cljs$core$str$$("\n"), $cljs$core$str$$($cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$array_seq$$([$cljs$core$list$$(new $cljs$core$Symbol$$("util", "clj-ifn?", "util/clj-ifn?", 259370460, null), new $cljs$core$Symbol$$(null, 
    "render-fun", "render-fun", -1209513086, null))], 0)))].join(""));
  }
  var $_$$212$$ = null, $name$$74$$ = function() {
    var $_$$212$$ = $cljs$core$constant$0keyword$0displayName$$.$cljs$core$IFn$_invoke$arity$1$($fun_map$$3$$);
    if ($cljs$core$truth_$$($_$$212$$)) {
      return $_$$212$$;
    }
    $_$$212$$ = $render_fun$$.displayName;
    return $cljs$core$truth_$$($_$$212$$) ? $_$$212$$ : $render_fun$$.name;
  }(), $JSCompiler_temp$$523_JSCompiler_temp_const$$524_name_SINGLEQUOTE_$$;
  if ($cljs$core$empty_QMARK_$$($name$$74$$)) {
    $JSCompiler_temp$$523_JSCompiler_temp_const$$524_name_SINGLEQUOTE_$$ = $cljs$core$str$$;
    var $JSCompiler_inline_result$$525_fmap$$;
    null == $cljs$core$gensym_counter$$ && ($cljs$core$gensym_counter$$ = $cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$ ? $cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(0) : $cljs$core$atom$$.call(null, 0));
    $JSCompiler_inline_result$$525_fmap$$ = $cljs$core$symbol$cljs$0core$0IFn$0_invoke$0arity$01$$();
    $JSCompiler_temp$$523_JSCompiler_temp_const$$524_name_SINGLEQUOTE_$$ = "" + $JSCompiler_temp$$523_JSCompiler_temp_const$$524_name_SINGLEQUOTE_$$($JSCompiler_inline_result$$525_fmap$$);
  } else {
    $JSCompiler_temp$$523_JSCompiler_temp_const$$524_name_SINGLEQUOTE_$$ = $name$$74$$;
  }
  $JSCompiler_inline_result$$525_fmap$$ = $reagent$impl$component$add_render$$($cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($fun_map$$3$$, $cljs$core$constant$0keyword$0displayName$$, $JSCompiler_temp$$523_JSCompiler_temp_const$$524_name_SINGLEQUOTE_$$), $render_fun$$);
  return $cljs$core$reduce_kv$$(function($fun_map$$3$$, $render_fun$$, $_$$212$$, $name$$74$$) {
    return function($fun_map$$3$$, $render_fun$$, $_$$212$$) {
      return $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($fun_map$$3$$, $render_fun$$, $reagent$impl$component$get_wrapper$$($render_fun$$, $_$$212$$, $name$$74$$));
    };
  }($render_fun$$, $_$$212$$, $name$$74$$, $JSCompiler_temp$$523_JSCompiler_temp_const$$524_name_SINGLEQUOTE_$$, $JSCompiler_inline_result$$525_fmap$$), $cljs$core$PersistentArrayMap$EMPTY$$, $JSCompiler_inline_result$$525_fmap$$);
}
function $reagent$impl$component$map_to_js$$($m$$152$$) {
  return $cljs$core$reduce_kv$$(function($m$$152$$, $k$$341$$, $v$$101$$) {
    $m$$152$$[$cljs$core$name$$($k$$341$$)] = $v$$101$$;
    return $m$$152$$;
  }, {}, $m$$152$$);
}
function $reagent$impl$component$create_class$$($body$$2_res$$15$$) {
  var $as_component$$ = $reagent$impl$template$as_component$$;
  if (!$cljs$core$map_QMARK_$$($body$$2_res$$15$$)) {
    throw Error([$cljs$core$str$$("Assert failed: "), $cljs$core$str$$($cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$array_seq$$([$cljs$core$list$$(new $cljs$core$Symbol$$(null, "map?", "map?", -1780568534, null), new $cljs$core$Symbol$$(null, "body", "body", -408674142, null))], 0)))].join(""));
  }
  var $f$$685_spec$$ = $reagent$impl$component$map_to_js$$($reagent$impl$component$wrap_funs$$($reagent$impl$component$add_obligatory$$($reagent$impl$component$camelify_map_keys$$($body$$2_res$$15$$)))), $_$$214$$ = $f$$685_spec$$.asComponent = $reagent$impl$component$dont_bind$$($as_component$$);
  $body$$2_res$$15$$ = React.createClass($f$$685_spec$$);
  $f$$685_spec$$ = function($body$$2_res$$15$$, $f$$685_spec$$, $_$$214$$) {
    return function() {
      function $body$$2_res$$15$$($as_component$$) {
        var $_$$214$$ = null;
        if (0 < arguments.length) {
          for (var $_$$214$$ = 0, $spec$$1$$ = Array(arguments.length - 0);$_$$214$$ < $spec$$1$$.length;) {
            $spec$$1$$[$_$$214$$] = arguments[$_$$214$$ + 0], ++$_$$214$$;
          }
          $_$$214$$ = new $cljs$core$IndexedSeq$$($spec$$1$$, 0);
        }
        return $f$$685_spec$$.call(this, $_$$214$$);
      }
      function $f$$685_spec$$($body$$2_res$$15$$) {
        $body$$2_res$$15$$ = $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$03$$($cljs$core$vector$$, $_$$214$$, $body$$2_res$$15$$);
        return $as_component$$.$cljs$core$IFn$_invoke$arity$1$ ? $as_component$$.$cljs$core$IFn$_invoke$arity$1$($body$$2_res$$15$$) : $as_component$$.call(null, $body$$2_res$$15$$);
      }
      $body$$2_res$$15$$.$cljs$lang$maxFixedArity$ = 0;
      $body$$2_res$$15$$.$cljs$lang$applyTo$ = function($body$$2_res$$15$$) {
        $body$$2_res$$15$$ = $cljs$core$seq$$($body$$2_res$$15$$);
        return $f$$685_spec$$($body$$2_res$$15$$);
      };
      $body$$2_res$$15$$.$cljs$core$IFn$_invoke$arity$variadic$ = $f$$685_spec$$;
      return $body$$2_res$$15$$;
    }();
  }($f$$685_spec$$, $_$$214$$, $body$$2_res$$15$$);
  $reagent$impl$util$cache_react_class$$($f$$685_spec$$, $body$$2_res$$15$$);
  $reagent$impl$util$cache_react_class$$($body$$2_res$$15$$, $body$$2_res$$15$$);
  return $f$$685_spec$$;
}
;var $reagent$impl$template$re_tag$$ = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/, $reagent$impl$template$attr_aliases$$ = new $cljs$core$PersistentArrayMap$$(null, 3, [$cljs$core$constant$0keyword$0class$$, "className", $cljs$core$constant$0keyword$0for$$, "htmlFor", $cljs$core$constant$0keyword$0charset$$, "charSet"], null);
function $reagent$impl$template$hiccup_tag_QMARK_$$($x$$446$$) {
  return $x$$446$$ instanceof $cljs$core$Keyword$$ || $x$$446$$ instanceof $cljs$core$Symbol$$ || "string" === typeof $x$$446$$;
}
function $reagent$impl$template$to_js_val$$($v$$102$$) {
  return "string" === typeof $v$$102$$ ? $v$$102$$ : "number" === typeof $v$$102$$ ? $v$$102$$ : $v$$102$$ instanceof $cljs$core$Keyword$$ ? $cljs$core$name$$($v$$102$$) : $v$$102$$ instanceof $cljs$core$Symbol$$ ? "" + $cljs$core$str$$($v$$102$$) : $cljs$core$coll_QMARK_$$($v$$102$$) ? $cljs$core$clj__GT_js$$($v$$102$$) : $cljs$core$ifn_QMARK_$$($v$$102$$) ? function() {
    function $G__14439$$($v$$102$$) {
      var $G__14439$$ = null;
      if (0 < arguments.length) {
        for (var $G__14439$$ = 0, $G__14440__a$$ = Array(arguments.length - 0);$G__14439$$ < $G__14440__a$$.length;) {
          $G__14440__a$$[$G__14439$$] = arguments[$G__14439$$ + 0], ++$G__14439$$;
        }
        $G__14439$$ = new $cljs$core$IndexedSeq$$($G__14440__a$$, 0);
      }
      return $G__14439__delegate$$.call(this, $G__14439$$);
    }
    function $G__14439__delegate$$($G__14439$$) {
      return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($v$$102$$, $G__14439$$);
    }
    $G__14439$$.$cljs$lang$maxFixedArity$ = 0;
    $G__14439$$.$cljs$lang$applyTo$ = function($v$$102$$) {
      $v$$102$$ = $cljs$core$seq$$($v$$102$$);
      return $G__14439__delegate$$($v$$102$$);
    };
    $G__14439$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__14439__delegate$$;
    return $G__14439$$;
  }() : $v$$102$$;
}
var $reagent$impl$template$cached_prop_name$$ = $reagent$impl$util$memoize_1$$(function($n$$678$$) {
  var $or__4251__auto__$$155$$ = $reagent$impl$template$attr_aliases$$.$cljs$core$IFn$_invoke$arity$1$ ? $reagent$impl$template$attr_aliases$$.$cljs$core$IFn$_invoke$arity$1$($n$$678$$) : $reagent$impl$template$attr_aliases$$.call(null, $n$$678$$);
  return $cljs$core$truth_$$($or__4251__auto__$$155$$) ? $or__4251__auto__$$155$$ : $reagent$impl$util$dash_to_camel$$($n$$678$$);
});
$reagent$impl$util$memoize_1$$($reagent$impl$util$dash_to_camel$$);
function $reagent$impl$template$convert_prop_value$$($x$$448$$) {
  return "string" === typeof $x$$448$$ ? $x$$448$$ : "number" === typeof $x$$448$$ ? $x$$448$$ : $cljs$core$map_QMARK_$$($x$$448$$) ? $cljs$core$reduce_kv$$(function($x$$448$$, $k$$342$$, $v$$103$$) {
    $x$$448$$[$reagent$impl$template$cached_prop_name$$.$cljs$core$IFn$_invoke$arity$1$ ? $reagent$impl$template$cached_prop_name$$.$cljs$core$IFn$_invoke$arity$1$($k$$342$$) : $reagent$impl$template$cached_prop_name$$.call(null, $k$$342$$)] = $reagent$impl$template$to_js_val$$($v$$103$$);
    return $x$$448$$;
  }, {}, $x$$448$$) : $reagent$impl$template$to_js_val$$($x$$448$$);
}
function $reagent$impl$template$set_id_class$$($props$$124$$, $p__14450$$) {
  var $id$$5_old$$1$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__14450$$, 0), $class$$$1$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__14450$$, 1), $pid$$ = $props$$124$$.id;
  $props$$124$$.id = null != $pid$$ ? $pid$$ : $id$$5_old$$1$$;
  null != $class$$$1$$ && ($id$$5_old$$1$$ = $props$$124$$.className, $props$$124$$.className = null != $id$$5_old$$1$$ ? [$cljs$core$str$$($class$$$1$$), $cljs$core$str$$(" "), $cljs$core$str$$($id$$5_old$$1$$)].join("") : $class$$$1$$);
}
function $reagent$impl$template$convert_props$$($props$$125$$, $id_class$$) {
  if ($cljs$core$empty_QMARK_$$($props$$125$$) && null == $id_class$$) {
    return null;
  }
  if ($cljs$core$type$$($props$$125$$) === Object) {
    return $props$$125$$;
  }
  var $objprops$$ = $cljs$core$reduce_kv$$(function($props$$125$$, $id_class$$, $objprops$$) {
    $id_class$$ = $reagent$impl$template$cached_prop_name$$.$cljs$core$IFn$_invoke$arity$1$ ? $reagent$impl$template$cached_prop_name$$.$cljs$core$IFn$_invoke$arity$1$($id_class$$) : $reagent$impl$template$cached_prop_name$$.call(null, $id_class$$);
    "key" !== $id_class$$ && ($props$$125$$[$id_class$$] = $reagent$impl$template$convert_prop_value$$($objprops$$));
    return $props$$125$$;
  }, {}, $props$$125$$);
  null != $id_class$$ && $reagent$impl$template$set_id_class$$($objprops$$, $id_class$$);
  return $objprops$$;
}
function $reagent$impl$template$input_render_setup$$($this$$$127$$, $jsprops$$) {
  var $on_change$$1$$ = $jsprops$$.onChange, $value$$85$$ = null == $on_change$$1$$ ? null : $jsprops$$.value;
  $this$$$127$$.cljsInputValue = $value$$85$$;
  if (null == $value$$85$$) {
    return null;
  }
  $this$$$127$$.cljsIsDirty = !1;
  $jsprops$$.defaultValue = $value$$85$$;
  $jsprops$$.value = null;
  $jsprops$$.onChange = function($jsprops$$, $on_change$$1$$) {
    return function($jsprops$$) {
      $jsprops$$ = $on_change$$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_change$$1$$.$cljs$core$IFn$_invoke$arity$1$($jsprops$$) : $on_change$$1$$.call(null, $jsprops$$);
      $reagent$impl$batching$queue_render$$($this$$$127$$);
      return $jsprops$$;
    };
  }($jsprops$$, $on_change$$1$$, $value$$85$$);
  return $jsprops$$;
}
function $reagent$impl$template$input_component_QMARK_$$($x$$449$$) {
  var $DOM$$ = React.DOM;
  return $x$$449$$ === $DOM$$.input || $x$$449$$ === $DOM$$.textarea;
}
function $reagent$impl$template$add_input_methods$$($spec$$2$$) {
  $spec$$2$$.componentDidUpdate = function() {
    return function() {
      var $spec$$2$$;
      $spec$$2$$ = this.cljsInputValue;
      if (null == $spec$$2$$) {
        $spec$$2$$ = null;
      } else {
        var $node$$inline_375$$ = this.getDOMNode();
        $spec$$2$$ = $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($spec$$2$$, $node$$inline_375$$.value) ? null : $node$$inline_375$$.value = $spec$$2$$;
      }
      return $spec$$2$$;
    };
  }($spec$$2$$);
  $spec$$2$$.componentWillUnmount = function() {
    return function() {
      return $reagent$impl$batching$dispose$$(this);
    };
  }($spec$$2$$);
}
function $reagent$impl$template$wrap_component$$($comp$$11$$, $extras$$, $name$$76_spec$$3$$) {
  var $input_QMARK_$$ = $reagent$impl$template$input_component_QMARK_$$($comp$$11$$), $input_setup$$1$$ = $cljs$core$truth_$$($input_QMARK_$$) ? $reagent$impl$template$input_render_setup$$ : null;
  $name$$76_spec$$3$$ = {render:function($name$$76_spec$$3$$, $input_QMARK_$$) {
    return function() {
      var $name$$76_spec$$3$$ = this.props, $input_setup$$1$$ = $name$$76_spec$$3$$.argv, $input_QMARK_$$1$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($input_setup$$1$$, 1), $hasprops$$inline_882$$ = null == $input_QMARK_$$1$$ || $cljs$core$map_QMARK_$$($input_QMARK_$$1$$), $G__14467$$inline_884$$ = $hasprops$$inline_882$$ ? 2 : 1, $name$$76_spec$$3$$ = $name$$76_spec$$3$$.level + 1, $input_setup$$1$$ = $reagent$impl$template$convert_args$$.$cljs$core$IFn$_invoke$arity$3$ ? $reagent$impl$template$convert_args$$.$cljs$core$IFn$_invoke$arity$3$($input_setup$$1$$, 
      $G__14467$$inline_884$$, $name$$76_spec$$3$$) : $reagent$impl$template$convert_args$$.call(null, $input_setup$$1$$, $G__14467$$inline_884$$, $name$$76_spec$$3$$), $input_QMARK_$$1$$ = $reagent$impl$template$convert_props$$($hasprops$$inline_882$$ ? $input_QMARK_$$1$$ : null, $extras$$);
      null != $input_QMARK_$$ && ($input_QMARK_$$.$cljs$core$IFn$_invoke$arity$2$ ? $input_QMARK_$$.$cljs$core$IFn$_invoke$arity$2$(this, $input_QMARK_$$1$$) : $input_QMARK_$$.call(null, this, $input_QMARK_$$1$$));
      $input_setup$$1$$[0] = $input_QMARK_$$1$$;
      return $comp$$11$$.apply(null, $input_setup$$1$$);
    };
  }($input_QMARK_$$, $input_setup$$1$$), shouldComponentUpdate:function() {
    return function($comp$$11$$) {
      var $extras$$ = $reagent$impl$util$_STAR_always_update_STAR_$$;
      return $cljs$core$truth_$$($extras$$) ? $extras$$ : $cljs$core$not$$($reagent$impl$util$equal_args$$(this.props.argv, $comp$$11$$.argv));
    };
  }($input_QMARK_$$, $input_setup$$1$$), displayName:$cljs$core$truth_$$($name$$76_spec$$3$$) ? $name$$76_spec$$3$$ : "ComponentWrapper"};
  $cljs$core$truth_$$($input_QMARK_$$) && $reagent$impl$template$add_input_methods$$($name$$76_spec$$3$$);
  return React.createClass($name$$76_spec$$3$$);
}
var $reagent$impl$template$cached_wrapper$$ = $reagent$impl$util$memoize_1$$(function($tag$$14$$) {
  var $comp$$inline_893_id_class$$2_matches$$inline_1049_tag$$inline_890_vec__14480$$, $JSCompiler_inline_result$$962_comp$$13_id$$inline_891_s$$inline_1048$$;
  $JSCompiler_inline_result$$962_comp$$13_id$$inline_891_s$$inline_1048$$ = $cljs$core$name$$($tag$$14$$);
  if ("string" === typeof $JSCompiler_inline_result$$962_comp$$13_id$$inline_891_s$$inline_1048$$) {
    $comp$$inline_893_id_class$$2_matches$$inline_1049_tag$$inline_890_vec__14480$$ = $reagent$impl$template$re_tag$$.exec($JSCompiler_inline_result$$962_comp$$13_id$$inline_891_s$$inline_1048$$), $JSCompiler_inline_result$$962_comp$$13_id$$inline_891_s$$inline_1048$$ = $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$first$$($comp$$inline_893_id_class$$2_matches$$inline_1049_tag$$inline_890_vec__14480$$), $JSCompiler_inline_result$$962_comp$$13_id$$inline_891_s$$inline_1048$$) ? 1 === 
    $cljs$core$count$$($comp$$inline_893_id_class$$2_matches$$inline_1049_tag$$inline_890_vec__14480$$) ? $cljs$core$first$$($comp$$inline_893_id_class$$2_matches$$inline_1049_tag$$inline_890_vec__14480$$) : $cljs$core$vec$$($comp$$inline_893_id_class$$2_matches$$inline_1049_tag$$inline_890_vec__14480$$) : null;
  } else {
    throw new TypeError("re-matches must match against a string.");
  }
  var $JSCompiler_temp$$965_class$$$inline_892_class_SINGLEQUOTE_$$inline_894_vec__14478$$inline_889$$ = $cljs$core$next$$($JSCompiler_inline_result$$962_comp$$13_id$$inline_891_s$$inline_1048$$);
  $comp$$inline_893_id_class$$2_matches$$inline_1049_tag$$inline_890_vec__14480$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_temp$$965_class$$$inline_892_class_SINGLEQUOTE_$$inline_894_vec__14478$$inline_889$$, 0);
  $JSCompiler_inline_result$$962_comp$$13_id$$inline_891_s$$inline_1048$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_temp$$965_class$$$inline_892_class_SINGLEQUOTE_$$inline_894_vec__14478$$inline_889$$, 1);
  $JSCompiler_temp$$965_class$$$inline_892_class_SINGLEQUOTE_$$inline_894_vec__14478$$inline_889$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_temp$$965_class$$$inline_892_class_SINGLEQUOTE_$$inline_894_vec__14478$$inline_889$$, 2);
  $comp$$inline_893_id_class$$2_matches$$inline_1049_tag$$inline_890_vec__14480$$ = React.DOM[$comp$$inline_893_id_class$$2_matches$$inline_1049_tag$$inline_890_vec__14480$$];
  if ($cljs$core$truth_$$($JSCompiler_temp$$965_class$$$inline_892_class_SINGLEQUOTE_$$inline_894_vec__14478$$inline_889$$)) {
    var $match$$inline_1052$$ = /\./;
    if ("string" === typeof $match$$inline_1052$$) {
      $JSCompiler_temp$$965_class$$$inline_892_class_SINGLEQUOTE_$$inline_894_vec__14478$$inline_889$$ = $JSCompiler_temp$$965_class$$$inline_892_class_SINGLEQUOTE_$$inline_894_vec__14478$$inline_889$$.replace(new RegExp(String($match$$inline_1052$$).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), " ");
    } else {
      if ($match$$inline_1052$$ instanceof RegExp) {
        $JSCompiler_temp$$965_class$$$inline_892_class_SINGLEQUOTE_$$inline_894_vec__14478$$inline_889$$ = $JSCompiler_temp$$965_class$$$inline_892_class_SINGLEQUOTE_$$inline_894_vec__14478$$inline_889$$.replace(new RegExp($match$$inline_1052$$.source, "g"), " ");
      } else {
        throw [$cljs$core$str$$("Invalid match arg: "), $cljs$core$str$$($match$$inline_1052$$)].join("");
      }
    }
  } else {
    $JSCompiler_temp$$965_class$$$inline_892_class_SINGLEQUOTE_$$inline_894_vec__14478$$inline_889$$ = null;
  }
  if (!$cljs$core$truth_$$($comp$$inline_893_id_class$$2_matches$$inline_1049_tag$$inline_890_vec__14480$$)) {
    throw Error([$cljs$core$str$$("Assert failed: "), $cljs$core$str$$([$cljs$core$str$$("Unknown tag: '"), $cljs$core$str$$($tag$$14$$), $cljs$core$str$$("'")].join("")), $cljs$core$str$$("\n"), $cljs$core$str$$($cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$array_seq$$([new $cljs$core$Symbol$$(null, "comp", "comp", -1462482139, null)], 0)))].join(""));
  }
  $comp$$inline_893_id_class$$2_matches$$inline_1049_tag$$inline_890_vec__14480$$ = new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$comp$$inline_893_id_class$$2_matches$$inline_1049_tag$$inline_890_vec__14480$$, $cljs$core$truth_$$($cljs$core$truth_$$($JSCompiler_inline_result$$962_comp$$13_id$$inline_891_s$$inline_1048$$) ? $JSCompiler_inline_result$$962_comp$$13_id$$inline_891_s$$inline_1048$$ : $JSCompiler_temp$$965_class$$$inline_892_class_SINGLEQUOTE_$$inline_894_vec__14478$$inline_889$$) ? 
  new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$JSCompiler_inline_result$$962_comp$$13_id$$inline_891_s$$inline_1048$$, $JSCompiler_temp$$965_class$$$inline_892_class_SINGLEQUOTE_$$inline_894_vec__14478$$inline_889$$], null) : null], null);
  $JSCompiler_inline_result$$962_comp$$13_id$$inline_891_s$$inline_1048$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($comp$$inline_893_id_class$$2_matches$$inline_1049_tag$$inline_890_vec__14480$$, 0);
  $comp$$inline_893_id_class$$2_matches$$inline_1049_tag$$inline_890_vec__14480$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($comp$$inline_893_id_class$$2_matches$$inline_1049_tag$$inline_890_vec__14480$$, 1);
  return $reagent$impl$template$wrap_component$$($JSCompiler_inline_result$$962_comp$$13_id$$inline_891_s$$inline_1048$$, $comp$$inline_893_id_class$$2_matches$$inline_1049_tag$$inline_890_vec__14480$$, "" + $cljs$core$str$$($tag$$14$$));
});
function $reagent$impl$template$get_key$$($x$$450$$) {
  return $cljs$core$map_QMARK_$$($x$$450$$) ? $cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($x$$450$$, $cljs$core$constant$0keyword$0key$$) : null;
}
function $reagent$impl$template$vec_to_comp$$($v$$105$$, $level$$17$$) {
  if (!(0 < $cljs$core$count$$($v$$105$$))) {
    throw Error([$cljs$core$str$$("Assert failed: "), $cljs$core$str$$("Hiccup form should not be empty"), $cljs$core$str$$("\n"), $cljs$core$str$$($cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$array_seq$$([$cljs$core$list$$(new $cljs$core$Symbol$$(null, "pos?", "pos?", -244377722, null), $cljs$core$list$$(new $cljs$core$Symbol$$(null, "count", "count", -514511684, null), new $cljs$core$Symbol$$(null, "v", "v", 1661996586, null)))], 0)))].join(""));
  }
  var $JSCompiler_inline_result$$89_JSCompiler_temp$$539_JSCompiler_temp$$540_c$$970_tag$$inline_385_x$$inline_382$$;
  $JSCompiler_inline_result$$89_JSCompiler_temp$$539_JSCompiler_temp$$540_c$$970_tag$$inline_385_x$$inline_382$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($v$$105$$, 0);
  var $cached_class$$inline_386_jsprops$$2_or__4251__auto__$$inline_383_spec$$inline_897_withrender$$inline_898_wrapf$$inline_900$$ = $reagent$impl$template$hiccup_tag_QMARK_$$($JSCompiler_inline_result$$89_JSCompiler_temp$$539_JSCompiler_temp$$540_c$$970_tag$$inline_385_x$$inline_382$$);
  $JSCompiler_inline_result$$89_JSCompiler_temp$$539_JSCompiler_temp$$540_c$$970_tag$$inline_385_x$$inline_382$$ = $cljs$core$truth_$$($cached_class$$inline_386_jsprops$$2_or__4251__auto__$$inline_383_spec$$inline_897_withrender$$inline_898_wrapf$$inline_900$$) ? $cached_class$$inline_386_jsprops$$2_or__4251__auto__$$inline_383_spec$$inline_897_withrender$$inline_898_wrapf$$inline_900$$ : $reagent$impl$util$clj_ifn_QMARK_$$($JSCompiler_inline_result$$89_JSCompiler_temp$$539_JSCompiler_temp$$540_c$$970_tag$$inline_385_x$$inline_382$$);
  if (!$cljs$core$truth_$$($JSCompiler_inline_result$$89_JSCompiler_temp$$539_JSCompiler_temp$$540_c$$970_tag$$inline_385_x$$inline_382$$)) {
    throw Error([$cljs$core$str$$("Assert failed: "), $cljs$core$str$$([$cljs$core$str$$("Invalid Hiccup form: "), $cljs$core$str$$($cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$array_seq$$([$v$$105$$], 0)))].join("")), $cljs$core$str$$("\n"), $cljs$core$str$$($cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$array_seq$$([$cljs$core$list$$(new $cljs$core$Symbol$$(null, "valid-tag?", "valid-tag?", 1243064160, null), $cljs$core$list$$(new $cljs$core$Symbol$$(null, 
    "nth", "nth", 1529209554, null), new $cljs$core$Symbol$$(null, "v", "v", 1661996586, null), 0))], 0)))].join(""));
  }
  $JSCompiler_inline_result$$89_JSCompiler_temp$$539_JSCompiler_temp$$540_c$$970_tag$$inline_385_x$$inline_382$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($v$$105$$, 0);
  $cljs$core$truth_$$($reagent$impl$template$hiccup_tag_QMARK_$$($JSCompiler_inline_result$$89_JSCompiler_temp$$539_JSCompiler_temp$$540_c$$970_tag$$inline_385_x$$inline_382$$)) ? $JSCompiler_inline_result$$89_JSCompiler_temp$$539_JSCompiler_temp$$540_c$$970_tag$$inline_385_x$$inline_382$$ = $reagent$impl$template$cached_wrapper$$.$cljs$core$IFn$_invoke$arity$1$ ? $reagent$impl$template$cached_wrapper$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$$89_JSCompiler_temp$$539_JSCompiler_temp$$540_c$$970_tag$$inline_385_x$$inline_382$$) : 
  $reagent$impl$template$cached_wrapper$$.call(null, $JSCompiler_inline_result$$89_JSCompiler_temp$$539_JSCompiler_temp$$540_c$$970_tag$$inline_385_x$$inline_382$$) : ($cached_class$$inline_386_jsprops$$2_or__4251__auto__$$inline_383_spec$$inline_897_withrender$$inline_898_wrapf$$inline_900$$ = $JSCompiler_inline_result$$89_JSCompiler_temp$$539_JSCompiler_temp$$540_c$$970_tag$$inline_385_x$$inline_382$$.cljsReactClass, null != $cached_class$$inline_386_jsprops$$2_or__4251__auto__$$inline_383_spec$$inline_897_withrender$$inline_898_wrapf$$inline_900$$ ? 
  $JSCompiler_inline_result$$89_JSCompiler_temp$$539_JSCompiler_temp$$540_c$$970_tag$$inline_385_x$$inline_382$$ = $cached_class$$inline_386_jsprops$$2_or__4251__auto__$$inline_383_spec$$inline_897_withrender$$inline_898_wrapf$$inline_900$$ : $cljs$core$truth_$$(React.isValidClass($JSCompiler_inline_result$$89_JSCompiler_temp$$539_JSCompiler_temp$$540_c$$970_tag$$inline_385_x$$inline_382$$)) ? $JSCompiler_inline_result$$89_JSCompiler_temp$$539_JSCompiler_temp$$540_c$$970_tag$$inline_385_x$$inline_382$$ = 
  $reagent$impl$util$cache_react_class$$($JSCompiler_inline_result$$89_JSCompiler_temp$$539_JSCompiler_temp$$540_c$$970_tag$$inline_385_x$$inline_382$$, $reagent$impl$template$wrap_component$$($JSCompiler_inline_result$$89_JSCompiler_temp$$539_JSCompiler_temp$$540_c$$970_tag$$inline_385_x$$inline_382$$, null, null)) : ($cached_class$$inline_386_jsprops$$2_or__4251__auto__$$inline_383_spec$$inline_897_withrender$$inline_898_wrapf$$inline_900$$ = $cljs$core$meta$$($JSCompiler_inline_result$$89_JSCompiler_temp$$539_JSCompiler_temp$$540_c$$970_tag$$inline_385_x$$inline_382$$), 
  $cached_class$$inline_386_jsprops$$2_or__4251__auto__$$inline_383_spec$$inline_897_withrender$$inline_898_wrapf$$inline_900$$ = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($cached_class$$inline_386_jsprops$$2_or__4251__auto__$$inline_383_spec$$inline_897_withrender$$inline_898_wrapf$$inline_900$$, $cljs$core$constant$0keyword$0component_DASH_function$$, $JSCompiler_inline_result$$89_JSCompiler_temp$$539_JSCompiler_temp$$540_c$$970_tag$$inline_385_x$$inline_382$$), $cached_class$$inline_386_jsprops$$2_or__4251__auto__$$inline_383_spec$$inline_897_withrender$$inline_898_wrapf$$inline_900$$ = 
  ($reagent$impl$template$create_class$$.$cljs$core$IFn$_invoke$arity$1$ ? $reagent$impl$template$create_class$$.$cljs$core$IFn$_invoke$arity$1$($cached_class$$inline_386_jsprops$$2_or__4251__auto__$$inline_383_spec$$inline_897_withrender$$inline_898_wrapf$$inline_900$$) : $reagent$impl$template$create_class$$.call(null, $cached_class$$inline_386_jsprops$$2_or__4251__auto__$$inline_383_spec$$inline_897_withrender$$inline_898_wrapf$$inline_900$$)).cljsReactClass, $reagent$impl$util$cache_react_class$$($JSCompiler_inline_result$$89_JSCompiler_temp$$539_JSCompiler_temp$$540_c$$970_tag$$inline_385_x$$inline_382$$, 
  $cached_class$$inline_386_jsprops$$2_or__4251__auto__$$inline_383_spec$$inline_897_withrender$$inline_898_wrapf$$inline_900$$), $JSCompiler_inline_result$$89_JSCompiler_temp$$539_JSCompiler_temp$$540_c$$970_tag$$inline_385_x$$inline_382$$ = $cached_class$$inline_386_jsprops$$2_or__4251__auto__$$inline_383_spec$$inline_897_withrender$$inline_898_wrapf$$inline_900$$));
  var $cached_class$$inline_386_jsprops$$2_or__4251__auto__$$inline_383_spec$$inline_897_withrender$$inline_898_wrapf$$inline_900$$ = {argv:$v$$105$$, level:$level$$17$$}, $k_14487_k_SINGLEQUOTE__14488$$ = $reagent$impl$template$get_key$$($cljs$core$meta$$($v$$105$$)), $k_14487_k_SINGLEQUOTE__14488$$ = null == $k_14487_k_SINGLEQUOTE__14488$$ ? $reagent$impl$template$get_key$$($cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($v$$105$$, 1)) : $k_14487_k_SINGLEQUOTE__14488$$;
  null != $k_14487_k_SINGLEQUOTE__14488$$ && ($cached_class$$inline_386_jsprops$$2_or__4251__auto__$$inline_383_spec$$inline_897_withrender$$inline_898_wrapf$$inline_900$$.key = $k_14487_k_SINGLEQUOTE__14488$$);
  return $JSCompiler_inline_result$$89_JSCompiler_temp$$539_JSCompiler_temp$$540_c$$970_tag$$inline_385_x$$inline_382$$.$cljs$core$IFn$_invoke$arity$1$ ? $JSCompiler_inline_result$$89_JSCompiler_temp$$539_JSCompiler_temp$$540_c$$970_tag$$inline_385_x$$inline_382$$.$cljs$core$IFn$_invoke$arity$1$($cached_class$$inline_386_jsprops$$2_or__4251__auto__$$inline_383_spec$$inline_897_withrender$$inline_898_wrapf$$inline_900$$) : $JSCompiler_inline_result$$89_JSCompiler_temp$$539_JSCompiler_temp$$540_c$$970_tag$$inline_385_x$$inline_382$$.call(null, 
  $cached_class$$inline_386_jsprops$$2_or__4251__auto__$$inline_383_spec$$inline_897_withrender$$inline_898_wrapf$$inline_900$$);
}
var $reagent$impl$template$seq_ctx$$ = {}, $reagent$impl$template$as_component$$ = function $reagent$impl$template$as_component$$() {
  switch(arguments.length) {
    case 1:
      return $reagent$impl$template$as_component$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $reagent$impl$template$as_component$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      throw Error([$cljs$core$str$$("Invalid arity: "), $cljs$core$str$$(arguments.length)].join(""));;
  }
};
$reagent$impl$template$as_component$$.$cljs$core$IFn$_invoke$arity$1$ = function($x$$452$$) {
  return $reagent$impl$template$as_component$$.$cljs$core$IFn$_invoke$arity$2$($x$$452$$, 0);
};
$reagent$impl$template$as_component$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$$453$$, $level$$18$$) {
  if ("string" === typeof $x$$453$$) {
    return $x$$453$$;
  }
  if ($cljs$core$vector_QMARK_$$($x$$453$$)) {
    return $reagent$impl$template$vec_to_comp$$($x$$453$$, $level$$18$$);
  }
  if ($cljs$core$seq_QMARK_$$($x$$453$$)) {
    if (null != $reagent$ratom$_STAR_ratom_context_STAR_$$) {
      return $reagent$impl$template$expand_seq$$.$cljs$core$IFn$_invoke$arity$2$ ? $reagent$impl$template$expand_seq$$.$cljs$core$IFn$_invoke$arity$2$($x$$453$$, $level$$18$$) : $reagent$impl$template$expand_seq$$.call(null, $x$$453$$, $level$$18$$);
    }
    var $s$$239$$ = $reagent$ratom$capture_derefed$$(function() {
      return $reagent$impl$template$expand_seq$$.$cljs$core$IFn$_invoke$arity$2$ ? $reagent$impl$template$expand_seq$$.$cljs$core$IFn$_invoke$arity$2$($x$$453$$, $level$$18$$) : $reagent$impl$template$expand_seq$$.call(null, $x$$453$$, $level$$18$$);
    }, $reagent$impl$template$seq_ctx$$);
    $cljs$core$truth_$$($reagent$ratom$captured$$($reagent$impl$template$seq_ctx$$)) && ($cljs$core$truth_$$($reagent$impl$template$seq_ctx$$.warned) || ("undefined" !== typeof console && console.log("Warning: Reactive deref not supported in seq in ", $cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$array_seq$$([$x$$453$$], 0))), $reagent$impl$template$seq_ctx$$.warned = !0));
    return $s$$239$$;
  }
  return $x$$453$$;
};
$reagent$impl$template$as_component$$.$cljs$lang$maxFixedArity$ = 2;
function $reagent$impl$template$create_class$$($spec$$5$$) {
  return $reagent$impl$component$create_class$$($spec$$5$$);
}
function $reagent$impl$template$expand_seq$$($s$$240$$, $level$$19$$) {
  for (var $a$$1639$$ = $cljs$core$into_array$cljs$0core$0IFn$0_invoke$0arity$02$$($s$$240$$), $level_SINGLEQUOTE_$$ = $level$$19$$ + 1, $n__5136__auto___14496$$ = $a$$1639$$.length, $i_14497$$ = 0;;) {
    if ($i_14497$$ < $n__5136__auto___14496$$) {
      $a$$1639$$[$i_14497$$] = $reagent$impl$template$as_component$$.$cljs$core$IFn$_invoke$arity$2$($a$$1639$$[$i_14497$$], $level_SINGLEQUOTE_$$), $i_14497$$ += 1;
    } else {
      break;
    }
  }
  return $a$$1639$$;
}
function $reagent$impl$template$convert_args$$($argv$$2$$, $first_child$$1$$, $level$$20$$) {
  return $cljs$core$count$$($argv$$2$$) === $first_child$$1$$ + 1 ? [null, $reagent$impl$template$as_component$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($argv$$2$$, $first_child$$1$$), $level$$20$$)] : $cljs$core$reduce_kv$$(function($argv$$2$$, $k$$344$$, $v$$106$$) {
    $k$$344$$ >= $first_child$$1$$ && $argv$$2$$.push($reagent$impl$template$as_component$$.$cljs$core$IFn$_invoke$arity$2$($v$$106$$, $level$$20$$));
    return $argv$$2$$;
  }, [null], $argv$$2$$);
}
;function $reagent$core$render_component$cljs$0core$0IFn$0_invoke$0arity$03$$() {
  var $comp$$15$$ = new $cljs$core$PersistentVector$$(null, 1, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$core$container$$], null);
  return $reagent$impl$util$render_component$$(function() {
    var $form$$inline_902$$ = $cljs$core$fn_QMARK_$$($comp$$15$$) ? $comp$$15$$.$cljs$core$IFn$_invoke$arity$0$ ? $comp$$15$$.$cljs$core$IFn$_invoke$arity$0$() : $comp$$15$$.call(null) : $comp$$15$$;
    return $reagent$impl$template$as_component$$.$cljs$core$IFn$_invoke$arity$1$($form$$inline_902$$);
  });
}
function $opt_object$$inline_919$$() {
  var $_STAR_always_update_STAR_14701_14707$$inline_904$$ = $reagent$impl$util$_STAR_always_update_STAR_$$;
  $reagent$impl$util$_STAR_always_update_STAR_$$ = !0;
  try {
    for (var $seq__14702_14708$$inline_905$$ = $cljs$core$seq$$($cljs$core$vals$$($cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($reagent$impl$util$roots$$) : $cljs$core$deref$$.call(null, $reagent$impl$util$roots$$))), $chunk__14703_14709$$inline_906$$ = null, $count__14704_14710$$inline_907$$ = 0, $i__14705_14711$$inline_908$$ = 0;;) {
      if ($i__14705_14711$$inline_908$$ < $count__14704_14710$$inline_907$$) {
        var $f_14712$$inline_909$$ = $chunk__14703_14709$$inline_906$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__14705_14711$$inline_908$$);
        $f_14712$$inline_909$$.$cljs$core$IFn$_invoke$arity$0$ ? $f_14712$$inline_909$$.$cljs$core$IFn$_invoke$arity$0$() : $f_14712$$inline_909$$.call(null);
        $i__14705_14711$$inline_908$$ += 1;
      } else {
        var $temp__4425__auto___14717$$inline_910$$ = $cljs$core$seq$$($seq__14702_14708$$inline_905$$);
        if ($temp__4425__auto___14717$$inline_910$$) {
          var $G__14721$$inline_914_seq__14702_14718__$1$$inline_911$$ = $temp__4425__auto___14717$$inline_910$$;
          if ($cljs$core$chunked_seq_QMARK_$$($G__14721$$inline_914_seq__14702_14718__$1$$inline_911$$)) {
            var $c__5036__auto___14719$$inline_912$$ = $cljs$core$_chunked_first$$($G__14721$$inline_914_seq__14702_14718__$1$$inline_911$$), $G__14720$$inline_913$$ = $cljs$core$_chunked_rest$$($G__14721$$inline_914_seq__14702_14718__$1$$inline_911$$), $G__14721$$inline_914_seq__14702_14718__$1$$inline_911$$ = $c__5036__auto___14719$$inline_912$$, $G__14722$$inline_915$$ = $cljs$core$count$$($c__5036__auto___14719$$inline_912$$), $seq__14702_14708$$inline_905$$ = $G__14720$$inline_913$$, $chunk__14703_14709$$inline_906$$ = 
            $G__14721$$inline_914_seq__14702_14718__$1$$inline_911$$, $count__14704_14710$$inline_907$$ = $G__14722$$inline_915$$
          } else {
            var $f_14724$$inline_916$$ = $cljs$core$first$$($G__14721$$inline_914_seq__14702_14718__$1$$inline_911$$);
            $f_14724$$inline_916$$.$cljs$core$IFn$_invoke$arity$0$ ? $f_14724$$inline_916$$.$cljs$core$IFn$_invoke$arity$0$() : $f_14724$$inline_916$$.call(null);
            $seq__14702_14708$$inline_905$$ = $cljs$core$next$$($G__14721$$inline_914_seq__14702_14718__$1$$inline_911$$);
            $chunk__14703_14709$$inline_906$$ = null;
            $count__14704_14710$$inline_907$$ = 0;
          }
          $i__14705_14711$$inline_908$$ = 0;
        } else {
          break;
        }
      }
    }
  } finally {
    $reagent$impl$util$_STAR_always_update_STAR_$$ = $_STAR_always_update_STAR_14701_14707$$inline_904$$;
  }
  return "Updated";
}
var $parts$$inline_921$$ = ["reagent", "core", "force_update_all"], $cur$$inline_922$$ = $goog$global$$;
$parts$$inline_921$$[0] in $cur$$inline_922$$ || !$cur$$inline_922$$.execScript || $cur$$inline_922$$.execScript("var " + $parts$$inline_921$$[0]);
for (var $part$$inline_923$$;$parts$$inline_921$$.length && ($part$$inline_923$$ = $parts$$inline_921$$.shift());) {
  $parts$$inline_921$$.length || void 0 === $opt_object$$inline_919$$ ? $cur$$inline_922$$ = $cur$$inline_922$$[$part$$inline_923$$] ? $cur$$inline_922$$[$part$$inline_923$$] : $cur$$inline_922$$[$part$$inline_923$$] = {} : $cur$$inline_922$$[$part$$inline_923$$] = $opt_object$$inline_919$$;
}
;function $demo$components$expander$cmp$$($collapsed_atom$$, $noun$$) {
  return new $cljs$core$PersistentVector$$(null, 7, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0a$0expander$$, new $cljs$core$PersistentArrayMap$$(null, 1, [$cljs$core$constant$0keyword$0on_DASH_click$$, function() {
    return $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($collapsed_atom$$, $cljs$core$not$$);
  }], null), "(", $cljs$core$truth_$$($cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($collapsed_atom$$) : $cljs$core$deref$$.call(null, $collapsed_atom$$)) ? "show" : "hide", " ", $noun$$, ")"], null);
}
;function $demo$components$db_schema$cmp$$() {
  return function($collapsed$$1$$) {
    return function() {
      return new $cljs$core$PersistentVector$$(null, 4, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0header$0db_DASH_schema$$, $cljs$core$truth_$$($cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($collapsed$$1$$) : $cljs$core$deref$$.call(null, $collapsed$$1$$)) ? new $cljs$core$PersistentArrayMap$$(null, 1, [$cljs$core$constant$0keyword$0class$$, "collapsed"], null) : null, $cljs$core$truth_$$($cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? 
      $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($collapsed$$1$$) : $cljs$core$deref$$.call(null, $collapsed$$1$$)) ? null : new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$$, new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0p$$, "Here's the tiny database we're playing with"], null), new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, 
      [$cljs$core$constant$0keyword$0img$$, new $cljs$core$PersistentArrayMap$$(null, 1, [$cljs$core$constant$0keyword$0src$$, "img/schema.svg"], null)], null)], null), new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$expander$cmp$$, $collapsed$$1$$, "schema"], null)], null);
    };
  }($reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$1$(!1));
}
;function $demo$components$intro$cmp$$() {
  return function($hidden$$1$$) {
    return function() {
      return $cljs$core$truth_$$($cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($hidden$$1$$) : $cljs$core$deref$$.call(null, $hidden$$1$$)) ? null : new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$0intro$$, new $cljs$core$PersistentVector$$(null, 4, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0p$$, new $cljs$core$PersistentVector$$(null, 
      3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0a$$, new $cljs$core$PersistentArrayMap$$(null, 1, [$cljs$core$constant$0keyword$0href$$, "http://knexjs.org"], null), "Knex"], null), " is a SQL query builder for Node.js. This page lets you play with Knex and see the results. ", new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0a$$, new $cljs$core$PersistentArrayMap$$(null, 2, [$cljs$core$constant$0keyword$0href$$, 
      "#", $cljs$core$constant$0keyword$0on_DASH_click$$, function($hidden$$1$$) {
        return function() {
          return $cljs$core$reset_BANG_$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$core$reset_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($hidden$$1$$, !0) : $cljs$core$reset_BANG_$$.call(null, $hidden$$1$$, !0);
        };
      }($hidden$$1$$)], null), "got it!"], null)], null)], null);
    };
  }($reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$1$(!1));
}
;var $cljs$core$async$t14821$$, $cljs$core$async$impl$protocols$put_BANG_$$ = function $cljs$core$async$impl$protocols$put_BANG_$$($port$$1$$, $val$$76$$, $fn1_handler$$1$$) {
  if ($port$$1$$ ? $port$$1$$.$cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3$ : $port$$1$$) {
    return $port$$1$$.$cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3$(0, $val$$76$$, $fn1_handler$$1$$);
  }
  var $JSCompiler_inline_result$$542_or__4251__auto__$$inline_925_or__4251__auto____$1$$inline_926$$;
  $JSCompiler_inline_result$$542_or__4251__auto__$$inline_925_or__4251__auto____$1$$inline_926$$ = $cljs$core$async$impl$protocols$put_BANG_$$[$goog$typeOf$$(null == $port$$1$$ ? null : $port$$1$$)];
  if (!$JSCompiler_inline_result$$542_or__4251__auto__$$inline_925_or__4251__auto____$1$$inline_926$$ && ($JSCompiler_inline_result$$542_or__4251__auto__$$inline_925_or__4251__auto____$1$$inline_926$$ = $cljs$core$async$impl$protocols$put_BANG_$$._, !$JSCompiler_inline_result$$542_or__4251__auto__$$inline_925_or__4251__auto____$1$$inline_926$$)) {
    throw $cljs$core$missing_protocol$$("WritePort.put!", $port$$1$$);
  }
  return $JSCompiler_inline_result$$542_or__4251__auto__$$inline_925_or__4251__auto____$1$$inline_926$$.call(null, $port$$1$$, $val$$76$$, $fn1_handler$$1$$);
}, $cljs$core$async$impl$protocols$close_BANG_$$ = function $cljs$core$async$impl$protocols$close_BANG_$$($chan$$) {
  if ($chan$$ ? $chan$$.$cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1$ : $chan$$) {
    return $chan$$.$cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1$();
  }
  var $JSCompiler_inline_result$$543_or__4251__auto__$$inline_928_or__4251__auto____$1$$inline_929$$;
  $JSCompiler_inline_result$$543_or__4251__auto__$$inline_928_or__4251__auto____$1$$inline_929$$ = $cljs$core$async$impl$protocols$close_BANG_$$[$goog$typeOf$$(null == $chan$$ ? null : $chan$$)];
  if (!$JSCompiler_inline_result$$543_or__4251__auto__$$inline_928_or__4251__auto____$1$$inline_929$$ && ($JSCompiler_inline_result$$543_or__4251__auto__$$inline_928_or__4251__auto____$1$$inline_929$$ = $cljs$core$async$impl$protocols$close_BANG_$$._, !$JSCompiler_inline_result$$543_or__4251__auto__$$inline_928_or__4251__auto____$1$$inline_929$$)) {
    throw $cljs$core$missing_protocol$$("Channel.close!", $chan$$);
  }
  return $JSCompiler_inline_result$$543_or__4251__auto__$$inline_928_or__4251__auto____$1$$inline_929$$.call(null, $chan$$);
}, $cljs$core$async$impl$protocols$active_QMARK_$$ = function $cljs$core$async$impl$protocols$active_QMARK_$$($h$$306$$) {
  if ($h$$306$$ ? $h$$306$$.$cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1$ : $h$$306$$) {
    return !0;
  }
  var $JSCompiler_inline_result$$544_or__4251__auto__$$inline_931_or__4251__auto____$1$$inline_932$$;
  $JSCompiler_inline_result$$544_or__4251__auto__$$inline_931_or__4251__auto____$1$$inline_932$$ = $cljs$core$async$impl$protocols$active_QMARK_$$[$goog$typeOf$$(null == $h$$306$$ ? null : $h$$306$$)];
  if (!$JSCompiler_inline_result$$544_or__4251__auto__$$inline_931_or__4251__auto____$1$$inline_932$$ && ($JSCompiler_inline_result$$544_or__4251__auto__$$inline_931_or__4251__auto____$1$$inline_932$$ = $cljs$core$async$impl$protocols$active_QMARK_$$._, !$JSCompiler_inline_result$$544_or__4251__auto__$$inline_931_or__4251__auto____$1$$inline_932$$)) {
    throw $cljs$core$missing_protocol$$("Handler.active?", $h$$306$$);
  }
  return $JSCompiler_inline_result$$544_or__4251__auto__$$inline_931_or__4251__auto____$1$$inline_932$$.call(null, $h$$306$$);
}, $cljs$core$async$impl$protocols$commit$$ = function $cljs$core$async$impl$protocols$commit$$($h$$307$$) {
  if ($h$$307$$ ? $h$$307$$.$cljs$core$async$impl$protocols$Handler$commit$arity$1$ : $h$$307$$) {
    return $h$$307$$.f;
  }
  var $JSCompiler_inline_result$$545_or__4251__auto__$$inline_934_or__4251__auto____$1$$inline_935$$;
  $JSCompiler_inline_result$$545_or__4251__auto__$$inline_934_or__4251__auto____$1$$inline_935$$ = $cljs$core$async$impl$protocols$commit$$[$goog$typeOf$$(null == $h$$307$$ ? null : $h$$307$$)];
  if (!$JSCompiler_inline_result$$545_or__4251__auto__$$inline_934_or__4251__auto____$1$$inline_935$$ && ($JSCompiler_inline_result$$545_or__4251__auto__$$inline_934_or__4251__auto____$1$$inline_935$$ = $cljs$core$async$impl$protocols$commit$$._, !$JSCompiler_inline_result$$545_or__4251__auto__$$inline_934_or__4251__auto____$1$$inline_935$$)) {
    throw $cljs$core$missing_protocol$$("Handler.commit", $h$$307$$);
  }
  return $JSCompiler_inline_result$$545_or__4251__auto__$$inline_934_or__4251__auto____$1$$inline_935$$.call(null, $h$$307$$);
}, $cljs$core$async$impl$protocols$add_BANG__STAR_$$ = function $cljs$core$async$impl$protocols$add_BANG__STAR_$$($b$$1164$$, $itm$$) {
  if ($b$$1164$$ ? $b$$1164$$.$cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2$ : $b$$1164$$) {
    return $b$$1164$$.$cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2$(0, $itm$$);
  }
  var $JSCompiler_inline_result$$546_or__4251__auto__$$inline_937_or__4251__auto____$1$$inline_938$$;
  $JSCompiler_inline_result$$546_or__4251__auto__$$inline_937_or__4251__auto____$1$$inline_938$$ = $cljs$core$async$impl$protocols$add_BANG__STAR_$$[$goog$typeOf$$(null == $b$$1164$$ ? null : $b$$1164$$)];
  if (!$JSCompiler_inline_result$$546_or__4251__auto__$$inline_937_or__4251__auto____$1$$inline_938$$ && ($JSCompiler_inline_result$$546_or__4251__auto__$$inline_937_or__4251__auto____$1$$inline_938$$ = $cljs$core$async$impl$protocols$add_BANG__STAR_$$._, !$JSCompiler_inline_result$$546_or__4251__auto__$$inline_937_or__4251__auto____$1$$inline_938$$)) {
    throw $cljs$core$missing_protocol$$("Buffer.add!*", $b$$1164$$);
  }
  return $JSCompiler_inline_result$$546_or__4251__auto__$$inline_937_or__4251__auto____$1$$inline_938$$.call(null, $b$$1164$$, $itm$$);
}, $cljs$core$async$impl$protocols$add_BANG_$$ = function $cljs$core$async$impl$protocols$add_BANG_$$() {
  switch(arguments.length) {
    case 1:
      return $cljs$core$async$impl$protocols$add_BANG_$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$async$impl$protocols$add_BANG_$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      throw Error([$cljs$core$str$$("Invalid arity: "), $cljs$core$str$$(arguments.length)].join(""));;
  }
};
$cljs$core$async$impl$protocols$add_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ = function($b$$1165$$) {
  return $b$$1165$$;
};
$cljs$core$async$impl$protocols$add_BANG_$$.$cljs$core$IFn$_invoke$arity$2$ = function($b$$1166$$, $itm$$1$$) {
  if (null == $itm$$1$$) {
    throw Error([$cljs$core$str$$("Assert failed: "), $cljs$core$str$$($cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$array_seq$$([$cljs$core$list$$(new $cljs$core$Symbol$$(null, "not", "not", 1044554643, null), $cljs$core$list$$(new $cljs$core$Symbol$$(null, "nil?", "nil?", 1612038930, null), new $cljs$core$Symbol$$(null, "itm", "itm", -713282527, null)))], 0)))].join(""));
  }
  return $cljs$core$async$impl$protocols$add_BANG__STAR_$$($b$$1166$$, $itm$$1$$);
};
$cljs$core$async$impl$protocols$add_BANG_$$.$cljs$lang$maxFixedArity$ = 2;
function $cljs$core$async$impl$buffers$acopy$$($src$$11$$, $src_start$$, $dest$$, $dest_start$$, $len$$35$$) {
  for (var $cnt$$29$$ = 0;;) {
    if ($cnt$$29$$ < $len$$35$$) {
      $dest$$[$dest_start$$ + $cnt$$29$$] = $src$$11$$[$src_start$$ + $cnt$$29$$], $cnt$$29$$ += 1;
    } else {
      break;
    }
  }
}
function $cljs$core$async$impl$buffers$RingBuffer$$($head$$, $tail$$4$$, $length$$20$$, $arr$$120$$) {
  this.head = $head$$;
  this.tail = $tail$$4$$;
  this.length = $length$$20$$;
  this.$arr$ = $arr$$120$$;
}
$cljs$core$async$impl$buffers$RingBuffer$$.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var $x$$456$$ = this.$arr$[this.tail];
  this.$arr$[this.tail] = null;
  this.tail = (this.tail + 1) % this.$arr$.length;
  --this.length;
  return $x$$456$$;
};
$cljs$core$async$impl$buffers$RingBuffer$$.prototype.unshift = function($x$$457$$) {
  this.$arr$[this.head] = $x$$457$$;
  this.head = (this.head + 1) % this.$arr$.length;
  this.length += 1;
  return null;
};
function $JSCompiler_StaticMethods_unbounded_unshift$$($JSCompiler_StaticMethods_unbounded_unshift$self$$, $x$$458$$) {
  $JSCompiler_StaticMethods_unbounded_unshift$self$$.length + 1 === $JSCompiler_StaticMethods_unbounded_unshift$self$$.$arr$.length && $JSCompiler_StaticMethods_unbounded_unshift$self$$.resize();
  $JSCompiler_StaticMethods_unbounded_unshift$self$$.unshift($x$$458$$);
}
$cljs$core$async$impl$buffers$RingBuffer$$.prototype.resize = function() {
  var $new_arr$$10$$ = Array(2 * this.$arr$.length);
  return this.tail < this.head ? ($cljs$core$async$impl$buffers$acopy$$(this.$arr$, this.tail, $new_arr$$10$$, 0, this.length), this.tail = 0, this.head = this.length, this.$arr$ = $new_arr$$10$$) : this.tail > this.head ? ($cljs$core$async$impl$buffers$acopy$$(this.$arr$, this.tail, $new_arr$$10$$, 0, this.$arr$.length - this.tail), $cljs$core$async$impl$buffers$acopy$$(this.$arr$, 0, $new_arr$$10$$, this.$arr$.length - this.tail, this.head), this.tail = 0, this.head = this.length, this.$arr$ = 
  $new_arr$$10$$) : this.tail === this.head ? (this.head = this.tail = 0, this.$arr$ = $new_arr$$10$$) : null;
};
function $JSCompiler_StaticMethods_cleanup$$($JSCompiler_StaticMethods_cleanup$self$$, $keep_QMARK_$$) {
  for (var $n__5136__auto__$$1$$ = $JSCompiler_StaticMethods_cleanup$self$$.length, $x$$459$$ = 0;;) {
    if ($x$$459$$ < $n__5136__auto__$$1$$) {
      var $v_17638$$ = $JSCompiler_StaticMethods_cleanup$self$$.pop(), $G__17637$$inline_394_JSCompiler_inline_result$$93$$;
      $G__17637$$inline_394_JSCompiler_inline_result$$93$$ = $v_17638$$;
      $G__17637$$inline_394_JSCompiler_inline_result$$93$$ = $keep_QMARK_$$.$cljs$core$IFn$_invoke$arity$1$ ? $keep_QMARK_$$.$cljs$core$IFn$_invoke$arity$1$($G__17637$$inline_394_JSCompiler_inline_result$$93$$) : $keep_QMARK_$$.call(null, $G__17637$$inline_394_JSCompiler_inline_result$$93$$);
      $cljs$core$truth_$$($G__17637$$inline_394_JSCompiler_inline_result$$93$$) && $JSCompiler_StaticMethods_cleanup$self$$.unshift($v_17638$$);
      $x$$459$$ += 1;
    } else {
      break;
    }
  }
}
function $cljs$core$async$impl$buffers$ring_buffer$$($n$$679$$) {
  if (!(0 < $n$$679$$)) {
    throw Error([$cljs$core$str$$("Assert failed: "), $cljs$core$str$$("Can't create a ring buffer of size 0"), $cljs$core$str$$("\n"), $cljs$core$str$$($cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$array_seq$$([$cljs$core$list$$(new $cljs$core$Symbol$$(null, "\x3e", "\x3e", 1085014381, null), new $cljs$core$Symbol$$(null, "n", "n", -2092305744, null), 0)], 0)))].join(""));
  }
  return new $cljs$core$async$impl$buffers$RingBuffer$$(0, 0, 0, Array($n$$679$$));
}
function $cljs$core$async$impl$buffers$FixedBuffer$$($buf$$2$$, $n$$680$$) {
  this.$buf$ = $buf$$2$$;
  this.n = $n$$680$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 2;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
function $JSCompiler_StaticMethods_cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1$$($JSCompiler_StaticMethods_cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1$self$$) {
  return $JSCompiler_StaticMethods_cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1$self$$.$buf$.length === $JSCompiler_StaticMethods_cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1$self$$.n;
}
$cljs$core$async$impl$buffers$FixedBuffer$$.prototype.$cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2$ = function($this$$$140$$, $itm$$2$$) {
  $JSCompiler_StaticMethods_unbounded_unshift$$(this.$buf$, $itm$$2$$);
  return this;
};
$cljs$core$async$impl$buffers$FixedBuffer$$.prototype.$cljs$core$ICounted$_count$arity$1$ = function() {
  return this.$buf$.length;
};
var $goog$labs$userAgent$util$userAgent_$$;
a: {
  var $navigator$$inline_396$$ = $goog$global$$.navigator;
  if ($navigator$$inline_396$$) {
    var $userAgent$$inline_397$$ = $navigator$$inline_396$$.userAgent;
    if ($userAgent$$inline_397$$) {
      $goog$labs$userAgent$util$userAgent_$$ = $userAgent$$inline_397$$;
      break a;
    }
  }
  $goog$labs$userAgent$util$userAgent_$$ = "";
}
;var $goog$async$nextTick$setImmediate_$$;
function $goog$async$nextTick$getSetImmediateEmulator_$$() {
  var $Channel$$ = $goog$global$$.MessageChannel;
  "undefined" === typeof $Channel$$ && "undefined" !== typeof window && window.postMessage && window.addEventListener && -1 == $goog$labs$userAgent$util$userAgent_$$.indexOf("Presto") && ($Channel$$ = function() {
    var $Channel$$ = document.createElement("IFRAME");
    $Channel$$.style.display = "none";
    $Channel$$.src = "";
    document.documentElement.appendChild($Channel$$);
    var $channel$$1$$ = $Channel$$.contentWindow, $Channel$$ = $channel$$1$$.document;
    $Channel$$.open();
    $Channel$$.write("");
    $Channel$$.close();
    var $head$$2$$ = "callImmediate" + Math.random(), $tail$$6$$ = "file:" == $channel$$1$$.location.protocol ? "*" : $channel$$1$$.location.protocol + "//" + $channel$$1$$.location.host, $Channel$$ = $goog$bind$$(function($Channel$$) {
      if (("*" == $tail$$6$$ || $Channel$$.origin == $tail$$6$$) && $Channel$$.data == $head$$2$$) {
        this.port1.onmessage();
      }
    }, this);
    $channel$$1$$.addEventListener("message", $Channel$$, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      $channel$$1$$.postMessage($head$$2$$, $tail$$6$$);
    }};
  });
  if ("undefined" !== typeof $Channel$$ && -1 == $goog$labs$userAgent$util$userAgent_$$.indexOf("Edge") && -1 == $goog$labs$userAgent$util$userAgent_$$.indexOf("Trident") && -1 == $goog$labs$userAgent$util$userAgent_$$.indexOf("MSIE")) {
    var $channel$$1$$ = new $Channel$$, $head$$2$$ = {}, $tail$$6$$ = $head$$2$$;
    $channel$$1$$.port1.onmessage = function() {
      if (void 0 !== $head$$2$$.next) {
        $head$$2$$ = $head$$2$$.next;
        var $Channel$$ = $head$$2$$.$cb$;
        $head$$2$$.$cb$ = null;
        $Channel$$();
      }
    };
    return function($Channel$$) {
      $tail$$6$$.next = {$cb$:$Channel$$};
      $tail$$6$$ = $tail$$6$$.next;
      $channel$$1$$.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function($Channel$$) {
    var $channel$$1$$ = document.createElement("SCRIPT");
    $channel$$1$$.onreadystatechange = function() {
      $channel$$1$$.onreadystatechange = null;
      $channel$$1$$.parentNode.removeChild($channel$$1$$);
      $channel$$1$$ = null;
      $Channel$$();
      $Channel$$ = null;
    };
    document.documentElement.appendChild($channel$$1$$);
  } : function($Channel$$) {
    $goog$global$$.setTimeout($Channel$$, 0);
  };
}
;var $cljs$core$async$impl$dispatch$tasks$$ = $cljs$core$async$impl$buffers$ring_buffer$$(32), $cljs$core$async$impl$dispatch$running_QMARK_$$ = !1, $cljs$core$async$impl$dispatch$queued_QMARK_$$ = !1;
function $cljs$core$async$impl$dispatch$process_messages$$() {
  $cljs$core$async$impl$dispatch$running_QMARK_$$ = !0;
  $cljs$core$async$impl$dispatch$queued_QMARK_$$ = !1;
  for (var $count_17642$$ = 0;;) {
    var $m_17643$$ = $cljs$core$async$impl$dispatch$tasks$$.pop();
    if (null != $m_17643$$ && ($m_17643$$.$cljs$core$IFn$_invoke$arity$0$ ? $m_17643$$.$cljs$core$IFn$_invoke$arity$0$() : $m_17643$$.call(null), 1024 > $count_17642$$)) {
      $count_17642$$ += 1;
      continue;
    }
    break;
  }
  $cljs$core$async$impl$dispatch$running_QMARK_$$ = !1;
  return 0 < $cljs$core$async$impl$dispatch$tasks$$.length ? $cljs$core$async$impl$dispatch$queue_dispatcher$$.$cljs$core$IFn$_invoke$arity$0$ ? $cljs$core$async$impl$dispatch$queue_dispatcher$$.$cljs$core$IFn$_invoke$arity$0$() : $cljs$core$async$impl$dispatch$queue_dispatcher$$.call(null) : null;
}
function $cljs$core$async$impl$dispatch$queue_dispatcher$$() {
  var $and__4239__auto__$$inline_400$$ = $cljs$core$async$impl$dispatch$queued_QMARK_$$;
  if ($cljs$core$truth_$$($cljs$core$truth_$$($and__4239__auto__$$inline_400$$) ? $cljs$core$async$impl$dispatch$running_QMARK_$$ : $and__4239__auto__$$inline_400$$)) {
    return null;
  }
  $cljs$core$async$impl$dispatch$queued_QMARK_$$ = !0;
  "function" != $goog$typeOf$$($goog$global$$.setImmediate) || $goog$global$$.Window && $goog$global$$.Window.prototype && $goog$global$$.Window.prototype.setImmediate == $goog$global$$.setImmediate ? ($goog$async$nextTick$setImmediate_$$ || ($goog$async$nextTick$setImmediate_$$ = $goog$async$nextTick$getSetImmediateEmulator_$$()), $goog$async$nextTick$setImmediate_$$($cljs$core$async$impl$dispatch$process_messages$$)) : $goog$global$$.setImmediate($cljs$core$async$impl$dispatch$process_messages$$);
}
function $cljs$core$async$impl$dispatch$run$$($f$$693$$) {
  $JSCompiler_StaticMethods_unbounded_unshift$$($cljs$core$async$impl$dispatch$tasks$$, $f$$693$$);
  return $cljs$core$async$impl$dispatch$queue_dispatcher$$();
}
;var $cljs$core$async$impl$channels$t17656$$, $cljs$core$async$impl$channels$box$$ = function $cljs$core$async$impl$channels$box$$($val$$77$$) {
  "undefined" === typeof $cljs$core$async$impl$channels$t17656$$ && ($cljs$core$async$impl$channels$t17656$$ = function($val$$77$$, $val$$78$$, $meta17657$$) {
    this.$box$ = $val$$77$$;
    this.$val$ = $val$$78$$;
    this.$meta17657$ = $meta17657$$;
    this.$cljs$lang$protocol_mask$partition0$$ = 425984;
    this.$cljs$lang$protocol_mask$partition1$$ = 0;
  }, $cljs$core$async$impl$channels$t17656$$.prototype.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($val$$77$$, $meta17657__$1$$) {
    return new $cljs$core$async$impl$channels$t17656$$(this.$box$, this.$val$, $meta17657__$1$$);
  }, $cljs$core$async$impl$channels$t17656$$.prototype.$cljs$core$IMeta$_meta$arity$1$ = function() {
    return this.$meta17657$;
  }, $cljs$core$async$impl$channels$t17656$$.prototype.$cljs$core$IDeref$_deref$arity$1$ = function() {
    return this.$val$;
  }, $cljs$core$async$impl$channels$t17656$$.$getBasis$ = function() {
    return new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [new $cljs$core$Symbol$$(null, "box", "box", -1123515375, null), new $cljs$core$Symbol$$(null, "val", "val", 1769233139, null), new $cljs$core$Symbol$$(null, "meta17657", "meta17657", 1205473490, null)], null);
  }, $cljs$core$async$impl$channels$t17656$$.$cljs$lang$type$ = !0, $cljs$core$async$impl$channels$t17656$$.$cljs$lang$ctorStr$ = "cljs.core.async.impl.channels/t17656", $cljs$core$async$impl$channels$t17656$$.$cljs$lang$ctorPrWriter$ = function($val$$77$$, $writer__4831__auto__$$77$$) {
    return $cljs$core$_write$$($writer__4831__auto__$$77$$, "cljs.core.async.impl.channels/t17656");
  });
  return new $cljs$core$async$impl$channels$t17656$$($cljs$core$async$impl$channels$box$$, $val$$77$$, $cljs$core$PersistentArrayMap$EMPTY$$);
};
function $cljs$core$async$impl$channels$PutBox$$($handler$$3$$, $val$$79$$) {
  this.handler = $handler$$3$$;
  this.$val$ = $val$$79$$;
}
function $cljs$core$async$impl$channels$put_active_QMARK_$$($box$$1$$) {
  return $cljs$core$async$impl$protocols$active_QMARK_$$($box$$1$$.handler);
}
var $cljs$core$async$impl$channels$abort$$ = function $cljs$core$async$impl$channels$abort$$($this$$$150$$) {
  if ($this$$$150$$ ? $this$$$150$$.$cljs$core$async$impl$channels$MMC$abort$arity$1$ : $this$$$150$$) {
    return $this$$$150$$.$cljs$core$async$impl$channels$MMC$abort$arity$1$();
  }
  var $JSCompiler_inline_result$$550_or__4251__auto__$$inline_943_or__4251__auto____$1$$inline_944$$;
  $JSCompiler_inline_result$$550_or__4251__auto__$$inline_943_or__4251__auto____$1$$inline_944$$ = $cljs$core$async$impl$channels$abort$$[$goog$typeOf$$(null == $this$$$150$$ ? null : $this$$$150$$)];
  if (!$JSCompiler_inline_result$$550_or__4251__auto__$$inline_943_or__4251__auto____$1$$inline_944$$ && ($JSCompiler_inline_result$$550_or__4251__auto__$$inline_943_or__4251__auto____$1$$inline_944$$ = $cljs$core$async$impl$channels$abort$$._, !$JSCompiler_inline_result$$550_or__4251__auto__$$inline_943_or__4251__auto____$1$$inline_944$$)) {
    throw $cljs$core$missing_protocol$$("MMC.abort", $this$$$150$$);
  }
  return $JSCompiler_inline_result$$550_or__4251__auto__$$inline_943_or__4251__auto____$1$$inline_944$$.call(null, $this$$$150$$);
};
function $cljs$core$async$impl$channels$ManyToManyChannel$$($takes$$, $dirty_takes$$, $puts$$, $dirty_puts$$, $buf$$8$$, $closed$$, $add_BANG_$$) {
  this.$takes$ = $takes$$;
  this.$dirty_takes$ = $dirty_takes$$;
  this.$puts$ = $puts$$;
  this.$dirty_puts$ = $dirty_puts$$;
  this.$buf$ = $buf$$8$$;
  this.closed = $closed$$;
  this.$add_BANG_$ = $add_BANG_$$;
}
$cljs$core$async$impl$channels$ManyToManyChannel$$.prototype.$cljs$core$async$impl$channels$MMC$abort$arity$1$ = function() {
  for (;;) {
    var $putter_17677$$ = this.$puts$.pop();
    if (null != $putter_17677$$) {
      var $put_handler_17678$$ = $putter_17677$$.handler;
      $cljs$core$async$impl$dispatch$run$$(function($putter_17677$$) {
        return function() {
          return $putter_17677$$.$cljs$core$IFn$_invoke$arity$1$ ? $putter_17677$$.$cljs$core$IFn$_invoke$arity$1$(!0) : $putter_17677$$.call(null, !0);
        };
      }($put_handler_17678$$.f, $put_handler_17678$$, $putter_17677$$.$val$, $putter_17677$$, this));
    }
    break;
  }
  $JSCompiler_StaticMethods_cleanup$$(this.$puts$, $cljs$core$constantly$$());
  return $cljs$core$async$impl$protocols$close_BANG_$$(this);
};
$cljs$core$async$impl$channels$ManyToManyChannel$$.prototype.$cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3$ = function($closed__$1_this$$$152$$, $val$$81$$, $done_QMARK__handler$$5_take_cb$$) {
  var $self__$$990$$ = this;
  if (null == $val$$81$$) {
    throw Error([$cljs$core$str$$("Assert failed: "), $cljs$core$str$$("Can't put nil in on a channel"), $cljs$core$str$$("\n"), $cljs$core$str$$($cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$array_seq$$([$cljs$core$list$$(new $cljs$core$Symbol$$(null, "not", "not", 1044554643, null), $cljs$core$list$$(new $cljs$core$Symbol$$(null, "nil?", "nil?", 1612038930, null), new $cljs$core$Symbol$$(null, "val", "val", 1769233139, null)))], 0)))].join(""));
  }
  if ($closed__$1_this$$$152$$ = $self__$$990$$.closed) {
    return $cljs$core$async$impl$channels$box$$(!$closed__$1_this$$$152$$);
  }
  if ($cljs$core$truth_$$(function() {
    var $closed__$1_this$$$152$$ = $self__$$990$$.$buf$;
    return $cljs$core$truth_$$($closed__$1_this$$$152$$) ? $cljs$core$not$$($JSCompiler_StaticMethods_cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1$$($self__$$990$$.$buf$)) : $closed__$1_this$$$152$$;
  }())) {
    for ($done_QMARK__handler$$5_take_cb$$ = $cljs$core$reduced_QMARK_$$(function() {
      var $closed__$1_this$$$152$$ = $self__$$990$$.$buf$;
      return $self__$$990$$.$add_BANG_$.$cljs$core$IFn$_invoke$arity$2$ ? $self__$$990$$.$add_BANG_$.$cljs$core$IFn$_invoke$arity$2$($closed__$1_this$$$152$$, $val$$81$$) : $self__$$990$$.$add_BANG_$.call(null, $closed__$1_this$$$152$$, $val$$81$$);
    }());;) {
      if (0 < $self__$$990$$.$takes$.length && 0 < $cljs$core$count$$($self__$$990$$.$buf$)) {
        var $taker_taker_17681$$ = $self__$$990$$.$takes$.pop(), $take_cb_17682$$ = $taker_taker_17681$$.f, $val_17683__$1$$ = $self__$$990$$.$buf$.$buf$.pop();
        $cljs$core$async$impl$dispatch$run$$(function($closed__$1_this$$$152$$, $val$$81$$) {
          return function() {
            return $closed__$1_this$$$152$$.$cljs$core$IFn$_invoke$arity$1$ ? $closed__$1_this$$$152$$.$cljs$core$IFn$_invoke$arity$1$($val$$81$$) : $closed__$1_this$$$152$$.call(null, $val$$81$$);
          };
        }($take_cb_17682$$, $val_17683__$1$$, $taker_taker_17681$$, $done_QMARK__handler$$5_take_cb$$, $closed__$1_this$$$152$$, this));
      }
      break;
    }
    $done_QMARK__handler$$5_take_cb$$ && $cljs$core$async$impl$channels$abort$$(this);
    return $cljs$core$async$impl$channels$box$$(!0);
  }
  $taker_taker_17681$$ = function() {
    for (;;) {
      var $closed__$1_this$$$152$$ = $self__$$990$$.$takes$.pop();
      if ($cljs$core$truth_$$($closed__$1_this$$$152$$)) {
        if ($cljs$core$truth_$$(!0)) {
          return $closed__$1_this$$$152$$;
        }
      } else {
        return null;
      }
    }
  }();
  if ($cljs$core$truth_$$($taker_taker_17681$$)) {
    return $done_QMARK__handler$$5_take_cb$$ = $cljs$core$async$impl$protocols$commit$$($taker_taker_17681$$), $cljs$core$async$impl$dispatch$run$$(function($closed__$1_this$$$152$$) {
      return function() {
        return $closed__$1_this$$$152$$.$cljs$core$IFn$_invoke$arity$1$ ? $closed__$1_this$$$152$$.$cljs$core$IFn$_invoke$arity$1$($val$$81$$) : $closed__$1_this$$$152$$.call(null, $val$$81$$);
      };
    }($done_QMARK__handler$$5_take_cb$$, $taker_taker_17681$$, $closed__$1_this$$$152$$, this)), $cljs$core$async$impl$channels$box$$(!0);
  }
  64 < $self__$$990$$.$dirty_puts$ ? ($self__$$990$$.$dirty_puts$ = 0, $JSCompiler_StaticMethods_cleanup$$($self__$$990$$.$puts$, $cljs$core$async$impl$channels$put_active_QMARK_$$)) : $self__$$990$$.$dirty_puts$ += 1;
  if (!(1024 > $self__$$990$$.$puts$.length)) {
    throw Error([$cljs$core$str$$("Assert failed: "), $cljs$core$str$$([$cljs$core$str$$("No more than "), $cljs$core$str$$(1024), $cljs$core$str$$(" pending puts are allowed on a single channel."), $cljs$core$str$$(" Consider using a windowed buffer.")].join("")), $cljs$core$str$$("\n"), $cljs$core$str$$($cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$array_seq$$([$cljs$core$list$$(new $cljs$core$Symbol$$(null, "\x3c", "\x3c", 993667236, null), $cljs$core$list$$(new $cljs$core$Symbol$$(null, 
    ".-length", ".-length", -280799999, null), new $cljs$core$Symbol$$(null, "puts", "puts", -1883877054, null)), new $cljs$core$Symbol$$("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0)))].join(""));
  }
  $JSCompiler_StaticMethods_unbounded_unshift$$($self__$$990$$.$puts$, new $cljs$core$async$impl$channels$PutBox$$($done_QMARK__handler$$5_take_cb$$, $val$$81$$));
  return null;
};
$cljs$core$async$impl$channels$ManyToManyChannel$$.prototype.$cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2$ = function($this$$$153$$, $handler$$6$$) {
  var $self__$$991$$ = this;
  if (null != $self__$$991$$.$buf$ && 0 < $cljs$core$count$$($self__$$991$$.$buf$)) {
    for (var $G__17674_17688__$$220_has_val_putter_val$$82$$ = $handler$$6$$.f, $put_cb_retval$$ = $cljs$core$async$impl$channels$box$$($self__$$991$$.$buf$.$buf$.pop());;) {
      if (!$cljs$core$truth_$$($JSCompiler_StaticMethods_cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1$$($self__$$991$$.$buf$))) {
        var $putter_17684$$ = $self__$$991$$.$puts$.pop();
        if (null != $putter_17684$$) {
          var $put_handler_17685$$ = $putter_17684$$.handler, $val_17686$$ = $putter_17684$$.$val$;
          $cljs$core$async$impl$dispatch$run$$(function($this$$$153$$) {
            return function() {
              return $this$$$153$$.$cljs$core$IFn$_invoke$arity$1$ ? $this$$$153$$.$cljs$core$IFn$_invoke$arity$1$(!0) : $this$$$153$$.call(null, !0);
            };
          }($put_handler_17685$$.f, $put_handler_17685$$, $val_17686$$, $putter_17684$$, $G__17674_17688__$$220_has_val_putter_val$$82$$, $put_cb_retval$$, this));
          $cljs$core$reduced_QMARK_$$(function() {
            var $this$$$153$$ = $self__$$991$$.$buf$, $handler$$6$$ = $val_17686$$;
            return $self__$$991$$.$add_BANG_$.$cljs$core$IFn$_invoke$arity$2$ ? $self__$$991$$.$add_BANG_$.$cljs$core$IFn$_invoke$arity$2$($this$$$153$$, $handler$$6$$) : $self__$$991$$.$add_BANG_$.call(null, $this$$$153$$, $handler$$6$$);
          }()) && $cljs$core$async$impl$channels$abort$$(this);
          continue;
        }
      }
      break;
    }
    return $put_cb_retval$$;
  }
  $G__17674_17688__$$220_has_val_putter_val$$82$$ = function() {
    for (;;) {
      var $this$$$153$$ = $self__$$991$$.$puts$.pop();
      if ($cljs$core$truth_$$($this$$$153$$)) {
        if ($cljs$core$async$impl$protocols$active_QMARK_$$($this$$$153$$.handler)) {
          return $this$$$153$$;
        }
      } else {
        return null;
      }
    }
  }();
  if ($cljs$core$truth_$$($G__17674_17688__$$220_has_val_putter_val$$82$$)) {
    return $put_cb_retval$$ = $cljs$core$async$impl$protocols$commit$$($G__17674_17688__$$220_has_val_putter_val$$82$$.handler), $cljs$core$async$impl$dispatch$run$$(function($this$$$153$$) {
      return function() {
        return $this$$$153$$.$cljs$core$IFn$_invoke$arity$1$ ? $this$$$153$$.$cljs$core$IFn$_invoke$arity$1$(!0) : $this$$$153$$.call(null, !0);
      };
    }($put_cb_retval$$, $G__17674_17688__$$220_has_val_putter_val$$82$$, this)), $cljs$core$async$impl$channels$box$$($G__17674_17688__$$220_has_val_putter_val$$82$$.$val$);
  }
  if ($cljs$core$truth_$$($self__$$991$$.closed)) {
    return $cljs$core$truth_$$($self__$$991$$.$buf$) && ($G__17674_17688__$$220_has_val_putter_val$$82$$ = $self__$$991$$.$buf$, $self__$$991$$.$add_BANG_$.$cljs$core$IFn$_invoke$arity$1$ ? $self__$$991$$.$add_BANG_$.$cljs$core$IFn$_invoke$arity$1$($G__17674_17688__$$220_has_val_putter_val$$82$$) : $self__$$991$$.$add_BANG_$.call(null, $G__17674_17688__$$220_has_val_putter_val$$82$$)), $cljs$core$truth_$$($cljs$core$truth_$$(!0) ? $handler$$6$$.f : !0) ? ($G__17674_17688__$$220_has_val_putter_val$$82$$ = 
    function() {
      var $this$$$153$$ = $self__$$991$$.$buf$;
      return $cljs$core$truth_$$($this$$$153$$) ? 0 < $cljs$core$count$$($self__$$991$$.$buf$) : $this$$$153$$;
    }(), $G__17674_17688__$$220_has_val_putter_val$$82$$ = $cljs$core$truth_$$($G__17674_17688__$$220_has_val_putter_val$$82$$) ? $self__$$991$$.$buf$.$buf$.pop() : null, $cljs$core$async$impl$channels$box$$($G__17674_17688__$$220_has_val_putter_val$$82$$)) : null;
  }
  64 < $self__$$991$$.$dirty_takes$ ? ($self__$$991$$.$dirty_takes$ = 0, $JSCompiler_StaticMethods_cleanup$$($self__$$991$$.$takes$, $cljs$core$async$impl$protocols$active_QMARK_$$)) : $self__$$991$$.$dirty_takes$ += 1;
  if (!(1024 > $self__$$991$$.$takes$.length)) {
    throw Error([$cljs$core$str$$("Assert failed: "), $cljs$core$str$$([$cljs$core$str$$("No more than "), $cljs$core$str$$(1024), $cljs$core$str$$(" pending takes are allowed on a single channel.")].join("")), $cljs$core$str$$("\n"), $cljs$core$str$$($cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$array_seq$$([$cljs$core$list$$(new $cljs$core$Symbol$$(null, "\x3c", "\x3c", 993667236, null), $cljs$core$list$$(new $cljs$core$Symbol$$(null, ".-length", ".-length", -280799999, 
    null), new $cljs$core$Symbol$$(null, "takes", "takes", 298247964, null)), new $cljs$core$Symbol$$("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0)))].join(""));
  }
  $JSCompiler_StaticMethods_unbounded_unshift$$($self__$$991$$.$takes$, $handler$$6$$);
  return null;
};
$cljs$core$async$impl$channels$ManyToManyChannel$$.prototype.$cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1$ = function() {
  var $self__$$993$$ = this;
  if (!$self__$$993$$.closed) {
    $self__$$993$$.closed = !0;
    if ($cljs$core$truth_$$(function() {
      var $G__17675_17689_taker_17690$$ = $self__$$993$$.$buf$;
      return $cljs$core$truth_$$($G__17675_17689_taker_17690$$) ? 0 === $self__$$993$$.$puts$.length : $G__17675_17689_taker_17690$$;
    }())) {
      var $G__17675_17689_taker_17690$$ = $self__$$993$$.$buf$;
      $self__$$993$$.$add_BANG_$.$cljs$core$IFn$_invoke$arity$1$ ? $self__$$993$$.$add_BANG_$.$cljs$core$IFn$_invoke$arity$1$($G__17675_17689_taker_17690$$) : $self__$$993$$.$add_BANG_$.call(null, $G__17675_17689_taker_17690$$);
    }
    for (;$G__17675_17689_taker_17690$$ = $self__$$993$$.$takes$.pop(), null != $G__17675_17689_taker_17690$$;) {
      var $take_cb_17691$$ = $G__17675_17689_taker_17690$$.f, $val_17692$$ = $cljs$core$truth_$$(function() {
        var $G__17675_17689_taker_17690$$ = $self__$$993$$.$buf$;
        return $cljs$core$truth_$$($G__17675_17689_taker_17690$$) ? 0 < $cljs$core$count$$($self__$$993$$.$buf$) : $G__17675_17689_taker_17690$$;
      }()) ? $self__$$993$$.$buf$.$buf$.pop() : null;
      $cljs$core$async$impl$dispatch$run$$(function($self__$$993$$, $G__17675_17689_taker_17690$$) {
        return function() {
          return $self__$$993$$.$cljs$core$IFn$_invoke$arity$1$ ? $self__$$993$$.$cljs$core$IFn$_invoke$arity$1$($G__17675_17689_taker_17690$$) : $self__$$993$$.call(null, $G__17675_17689_taker_17690$$);
        };
      }($take_cb_17691$$, $val_17692$$, $G__17675_17689_taker_17690$$, this));
    }
  }
  return null;
};
function $cljs$core$async$impl$channels$ex_handler$$($ex$$4$$) {
  console.log($ex$$4$$);
  return null;
}
function $cljs$core$async$impl$channels$handle$$($buf$$10$$, $t$$668$$) {
  var $else$$$ = ($cljs$core$truth_$$(null) ? null : $cljs$core$async$impl$channels$ex_handler$$).call(null, $t$$668$$);
  return null == $else$$$ ? $buf$$10$$ : $cljs$core$async$impl$protocols$add_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($buf$$10$$, $else$$$);
}
function $cljs$core$async$impl$channels$chan$cljs$0core$0IFn$0_invoke$0arity$03$$($buf$$13$$) {
  return new $cljs$core$async$impl$channels$ManyToManyChannel$$($cljs$core$async$impl$buffers$ring_buffer$$(32), 0, $cljs$core$async$impl$buffers$ring_buffer$$(32), 0, $buf$$13$$, !1, function() {
    return function($buf$$13$$) {
      return function() {
        function $G__17702__2$$($G__17702__2$$, $G__17702__1$$) {
          try {
            return $buf$$13$$.$cljs$core$IFn$_invoke$arity$2$ ? $buf$$13$$.$cljs$core$IFn$_invoke$arity$2$($G__17702__2$$, $G__17702__1$$) : $buf$$13$$.call(null, $G__17702__2$$, $G__17702__1$$);
          } catch ($G__17702$$) {
            return $cljs$core$async$impl$channels$handle$$($G__17702__2$$, $G__17702$$);
          }
        }
        function $G__17702__1$$($G__17702__2$$) {
          try {
            return $buf$$13$$.$cljs$core$IFn$_invoke$arity$1$ ? $buf$$13$$.$cljs$core$IFn$_invoke$arity$1$($G__17702__2$$) : $buf$$13$$.call(null, $G__17702__2$$);
          } catch ($G__17702__1$$) {
            return $cljs$core$async$impl$channels$handle$$($G__17702__2$$, $G__17702__1$$);
          }
        }
        var $G__17702$$ = null, $G__17702$$ = function($buf$$13$$, $add_BANG_$$3$$) {
          switch(arguments.length) {
            case 1:
              return $G__17702__1$$.call(this, $buf$$13$$);
            case 2:
              return $G__17702__2$$.call(this, $buf$$13$$, $add_BANG_$$3$$);
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        $G__17702$$.$cljs$core$IFn$_invoke$arity$1$ = $G__17702__1$$;
        $G__17702$$.$cljs$core$IFn$_invoke$arity$2$ = $G__17702__2$$;
        return $G__17702$$;
      }();
    }($cljs$core$truth_$$(null) ? null.$cljs$core$IFn$_invoke$arity$1$ ? null.$cljs$core$IFn$_invoke$arity$1$($cljs$core$async$impl$protocols$add_BANG_$$) : null.call(null, $cljs$core$async$impl$protocols$add_BANG_$$) : $cljs$core$async$impl$protocols$add_BANG_$$);
  }());
}
;var $cljs$core$async$impl$ioc_helpers$t17528$$, $cljs$core$async$impl$ioc_helpers$fn_handler$$ = function $cljs$core$async$impl$ioc_helpers$fn_handler$$($f$$695$$) {
  "undefined" === typeof $cljs$core$async$impl$ioc_helpers$t17528$$ && ($cljs$core$async$impl$ioc_helpers$t17528$$ = function($f$$695$$, $f$$696$$, $meta17529$$) {
    this.$fn_handler$ = $f$$695$$;
    this.f = $f$$696$$;
    this.$meta17529$ = $meta17529$$;
    this.$cljs$lang$protocol_mask$partition0$$ = 393216;
    this.$cljs$lang$protocol_mask$partition1$$ = 0;
  }, $cljs$core$async$impl$ioc_helpers$t17528$$.prototype.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($f$$695$$, $meta17529__$1$$) {
    return new $cljs$core$async$impl$ioc_helpers$t17528$$(this.$fn_handler$, this.f, $meta17529__$1$$);
  }, $cljs$core$async$impl$ioc_helpers$t17528$$.prototype.$cljs$core$IMeta$_meta$arity$1$ = function() {
    return this.$meta17529$;
  }, $cljs$core$async$impl$ioc_helpers$t17528$$.prototype.$cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1$ = function() {
    return !0;
  }, $cljs$core$async$impl$ioc_helpers$t17528$$.prototype.$cljs$core$async$impl$protocols$Handler$commit$arity$1$ = function() {
    return this.f;
  }, $cljs$core$async$impl$ioc_helpers$t17528$$.$getBasis$ = function() {
    return new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [new $cljs$core$Symbol$$(null, "fn-handler", "fn-handler", 648785851, null), new $cljs$core$Symbol$$(null, "f", "f", 43394975, null), new $cljs$core$Symbol$$(null, "meta17529", "meta17529", -733632008, null)], null);
  }, $cljs$core$async$impl$ioc_helpers$t17528$$.$cljs$lang$type$ = !0, $cljs$core$async$impl$ioc_helpers$t17528$$.$cljs$lang$ctorStr$ = "cljs.core.async.impl.ioc-helpers/t17528", $cljs$core$async$impl$ioc_helpers$t17528$$.$cljs$lang$ctorPrWriter$ = function($f$$695$$, $writer__4831__auto__$$80$$) {
    return $cljs$core$_write$$($writer__4831__auto__$$80$$, "cljs.core.async.impl.ioc-helpers/t17528");
  });
  return new $cljs$core$async$impl$ioc_helpers$t17528$$($cljs$core$async$impl$ioc_helpers$fn_handler$$, $f$$695$$, $cljs$core$PersistentArrayMap$EMPTY$$);
};
function $cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped$$($state$$10$$) {
  try {
    return $state$$10$$[0].call(null, $state$$10$$);
  } catch ($e17532$$) {
    throw $e17532$$ instanceof Object && $state$$10$$[6].$cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1$(), $e17532$$;
  }
}
function $cljs$core$async$impl$ioc_helpers$take_BANG_$$($state$$11$$, $blk$$, $c$$971_temp__4423__auto__$$16$$) {
  $c$$971_temp__4423__auto__$$16$$ = $c$$971_temp__4423__auto__$$16$$.$cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2$(null, $cljs$core$async$impl$ioc_helpers$fn_handler$$(function($c$$971_temp__4423__auto__$$16$$) {
    $state$$11$$[2] = $c$$971_temp__4423__auto__$$16$$;
    $state$$11$$[1] = $blk$$;
    return $cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped$$($state$$11$$);
  }));
  return $cljs$core$truth_$$($c$$971_temp__4423__auto__$$16$$) ? ($state$$11$$[2] = $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($c$$971_temp__4423__auto__$$16$$) : $cljs$core$deref$$.call(null, $c$$971_temp__4423__auto__$$16$$), $state$$11$$[1] = $blk$$, $cljs$core$constant$0keyword$0recur$$) : null;
}
function $cljs$core$async$impl$ioc_helpers$return_chan$$($state$$13$$, $value$$90$$) {
  var $c$$973$$ = $state$$13$$[6];
  null != $value$$90$$ && $c$$973$$.$cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3$(0, $value$$90$$, $cljs$core$async$impl$ioc_helpers$fn_handler$$(function() {
    return function() {
      return null;
    };
  }($c$$973$$)));
  $c$$973$$.$cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1$();
  return $c$$973$$;
}
function $cljs$core$async$impl$ioc_helpers$process_exception$$($state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$) {
  for (;;) {
    var $exception_frame$$ = $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$[4], $catch_block$$3$$ = $cljs$core$constant$0keyword$0catch_DASH_block$$.$cljs$core$IFn$_invoke$arity$1$($exception_frame$$), $catch_exception$$3$$ = $cljs$core$constant$0keyword$0catch_DASH_exception$$.$cljs$core$IFn$_invoke$arity$1$($exception_frame$$), $exception$$2$$ = $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$[5];
    if ($cljs$core$truth_$$(function() {
      var $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$ = $exception$$2$$;
      return $cljs$core$truth_$$($state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$) ? $cljs$core$not$$($exception_frame$$) : $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$;
    }())) {
      throw $exception$$2$$;
    }
    if ($cljs$core$truth_$$(function() {
      var $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$ = $exception$$2$$;
      return $cljs$core$truth_$$($state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$) ? ($state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$ = $catch_block$$3$$, $cljs$core$truth_$$($state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$) ? $exception$$2$$ instanceof $catch_exception$$3$$ : $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$) : $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$;
    }())) {
      $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$[1] = $catch_block$$3$$;
      $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$[2] = $exception$$2$$;
      $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$[5] = null;
      $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$[4] = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$variadic$($exception_frame$$, $cljs$core$constant$0keyword$0catch_DASH_block$$, null, $cljs$core$array_seq$$([$cljs$core$constant$0keyword$0catch_DASH_exception$$, null], 0));
      break;
    }
    if ($cljs$core$truth_$$(function() {
      var $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$ = $exception$$2$$;
      return $cljs$core$truth_$$($state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$) ? $cljs$core$not$$($catch_block$$3$$) && $cljs$core$not$$($cljs$core$constant$0keyword$0finally_DASH_block$$.$cljs$core$IFn$_invoke$arity$1$($exception_frame$$)) : $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$;
    }())) {
      $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$[4] = $cljs$core$constant$0keyword$0prev$$.$cljs$core$IFn$_invoke$arity$1$($exception_frame$$);
    } else {
      if ($cljs$core$truth_$$(function() {
        var $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$ = $exception$$2$$;
        return $cljs$core$truth_$$($state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$) ? ($state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$ = $cljs$core$not$$($catch_block$$3$$)) ? $cljs$core$constant$0keyword$0finally_DASH_block$$.$cljs$core$IFn$_invoke$arity$1$($exception_frame$$) : $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$ : $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$;
      }())) {
        $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$[1] = $cljs$core$constant$0keyword$0finally_DASH_block$$.$cljs$core$IFn$_invoke$arity$1$($exception_frame$$);
        $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$[4] = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($exception_frame$$, $cljs$core$constant$0keyword$0finally_DASH_block$$, null);
        break;
      }
      if ($cljs$core$truth_$$(function() {
        var $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$ = $cljs$core$not$$($exception$$2$$);
        return $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$ ? $cljs$core$constant$0keyword$0finally_DASH_block$$.$cljs$core$IFn$_invoke$arity$1$($exception_frame$$) : $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$;
      }())) {
        $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$[1] = $cljs$core$constant$0keyword$0finally_DASH_block$$.$cljs$core$IFn$_invoke$arity$1$($exception_frame$$);
        $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$[4] = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($exception_frame$$, $cljs$core$constant$0keyword$0finally_DASH_block$$, null);
        break;
      }
      if ($cljs$core$not$$($exception$$2$$) && $cljs$core$not$$($cljs$core$constant$0keyword$0finally_DASH_block$$.$cljs$core$IFn$_invoke$arity$1$($exception_frame$$))) {
        $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$[1] = $cljs$core$constant$0keyword$0continue_DASH_block$$.$cljs$core$IFn$_invoke$arity$1$($exception_frame$$);
        $state$$15_statearr_17574_statearr_17576_statearr_17577_statearr_17578$$[4] = $cljs$core$constant$0keyword$0prev$$.$cljs$core$IFn$_invoke$arity$1$($exception_frame$$);
        break;
      }
      throw Error("No matching clause");
    }
  }
}
;for (var $arr$$inline_1057$$ = Array(1), $i_17495$$inline_1058$$ = 0;;) {
  if ($i_17495$$inline_1058$$ < $arr$$inline_1057$$.length) {
    $arr$$inline_1057$$[$i_17495$$inline_1058$$] = null, $i_17495$$inline_1058$$ += 1;
  } else {
    break;
  }
}
;function $cljs$core$async$chan$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_temp$$548_buf_or_n$$2_buf_or_n__$1$$) {
  $JSCompiler_temp$$548_buf_or_n$$2_buf_or_n__$1$$ = $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$$548_buf_or_n$$2_buf_or_n__$1$$, 0) ? null : $JSCompiler_temp$$548_buf_or_n$$2_buf_or_n__$1$$;
  if ($cljs$core$truth_$$(null) && !$cljs$core$truth_$$($JSCompiler_temp$$548_buf_or_n$$2_buf_or_n__$1$$)) {
    throw Error([$cljs$core$str$$("Assert failed: "), $cljs$core$str$$("buffer must be supplied when transducer is"), $cljs$core$str$$("\n"), $cljs$core$str$$($cljs$core$pr_str$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$array_seq$$([new $cljs$core$Symbol$$(null, "buf-or-n", "buf-or-n", -1646815050, null)], 0)))].join(""));
  }
  $JSCompiler_temp$$548_buf_or_n$$2_buf_or_n__$1$$ = "number" === typeof $JSCompiler_temp$$548_buf_or_n$$2_buf_or_n__$1$$ ? new $cljs$core$async$impl$buffers$FixedBuffer$$($cljs$core$async$impl$buffers$ring_buffer$$($JSCompiler_temp$$548_buf_or_n$$2_buf_or_n__$1$$), $JSCompiler_temp$$548_buf_or_n$$2_buf_or_n__$1$$) : $JSCompiler_temp$$548_buf_or_n$$2_buf_or_n__$1$$;
  return $cljs$core$async$impl$channels$chan$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_temp$$548_buf_or_n$$2_buf_or_n__$1$$);
}
var $cljs$core$async$fhnop$$ = function $cljs$core$async$fn_handler$$($f$$697$$) {
  "undefined" === typeof $cljs$core$async$t14821$$ && ($cljs$core$async$t14821$$ = function($f$$697$$, $f$$698$$, $meta14822$$) {
    this.$fn_handler$ = $f$$697$$;
    this.f = $f$$698$$;
    this.$meta14822$ = $meta14822$$;
    this.$cljs$lang$protocol_mask$partition0$$ = 393216;
    this.$cljs$lang$protocol_mask$partition1$$ = 0;
  }, $cljs$core$async$t14821$$.prototype.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($f$$697$$, $meta14822__$1$$) {
    return new $cljs$core$async$t14821$$(this.$fn_handler$, this.f, $meta14822__$1$$);
  }, $cljs$core$async$t14821$$.prototype.$cljs$core$IMeta$_meta$arity$1$ = function() {
    return this.$meta14822$;
  }, $cljs$core$async$t14821$$.prototype.$cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1$ = function() {
    return !0;
  }, $cljs$core$async$t14821$$.prototype.$cljs$core$async$impl$protocols$Handler$commit$arity$1$ = function() {
    return this.f;
  }, $cljs$core$async$t14821$$.$getBasis$ = function() {
    return new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [new $cljs$core$Symbol$$(null, "fn-handler", "fn-handler", 648785851, null), new $cljs$core$Symbol$$(null, "f", "f", 43394975, null), new $cljs$core$Symbol$$(null, "meta14822", "meta14822", -622561726, null)], null);
  }, $cljs$core$async$t14821$$.$cljs$lang$type$ = !0, $cljs$core$async$t14821$$.$cljs$lang$ctorStr$ = "cljs.core.async/t14821", $cljs$core$async$t14821$$.$cljs$lang$ctorPrWriter$ = function($f$$697$$, $writer__4831__auto__$$83$$) {
    return $cljs$core$_write$$($writer__4831__auto__$$83$$, "cljs.core.async/t14821");
  });
  return new $cljs$core$async$t14821$$($cljs$core$async$fn_handler$$, $f$$697$$, $cljs$core$PersistentArrayMap$EMPTY$$);
}(function() {
  return null;
});
var $cljs_promises$async$t23029$$;
function $cljs_promises$async$consume_pair$$($err$$3_p__23011$$) {
  var $val$$100$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($err$$3_p__23011$$, 0);
  $err$$3_p__23011$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($err$$3_p__23011$$, 1);
  if ($cljs$core$truth_$$($err$$3_p__23011$$)) {
    throw $err$$3_p__23011$$;
  }
  return $val$$100$$;
}
var $cljs_promises$async$pair_port$$ = function $cljs_promises$async$pair_port$$($promise$$8$$) {
  "undefined" === typeof $cljs_promises$async$t23029$$ && ($cljs_promises$async$t23029$$ = function($promise$$8$$, $promise$$9$$, $meta23030$$) {
    this.$pair_port$ = $promise$$8$$;
    this.promise = $promise$$9$$;
    this.$meta23030$ = $meta23030$$;
    this.$cljs$lang$protocol_mask$partition0$$ = 393216;
    this.$cljs$lang$protocol_mask$partition1$$ = 0;
  }, $cljs_promises$async$t23029$$.prototype.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($promise$$8$$, $meta23030__$1$$) {
    return new $cljs_promises$async$t23029$$(this.$pair_port$, this.promise, $meta23030__$1$$);
  }, $cljs_promises$async$t23029$$.prototype.$cljs$core$IMeta$_meta$arity$1$ = function() {
    return this.$meta23030$;
  }, $cljs_promises$async$t23029$$.prototype.$cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2$ = function($promise$$8$$, $handler$$10$$) {
    this.promise.then(function($promise$$8$$) {
      return function($_$$264$$) {
        return $cljs$core$async$impl$dispatch$run$$(function() {
          return function() {
            return $cljs$core$async$impl$protocols$commit$$($handler$$10$$).call(null, new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$_$$264$$, null], null));
          };
        }($promise$$8$$));
      };
    }(this), function($promise$$8$$) {
      return function($_$$264$$) {
        return $cljs$core$async$impl$dispatch$run$$(function() {
          return function() {
            return $cljs$core$async$impl$protocols$commit$$($handler$$10$$).call(null, new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [null, $_$$264$$], null));
          };
        }($promise$$8$$));
      };
    }(this));
    return null;
  }, $cljs_promises$async$t23029$$.$getBasis$ = function() {
    return new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [new $cljs$core$Symbol$$(null, "pair-port", "pair-port", 1268194861, null), new $cljs$core$Symbol$$(null, "promise", "promise", -887306482, null), new $cljs$core$Symbol$$(null, "meta23030", "meta23030", 969389769, null)], null);
  }, $cljs_promises$async$t23029$$.$cljs$lang$type$ = !0, $cljs_promises$async$t23029$$.$cljs$lang$ctorStr$ = "cljs-promises.async/t23029", $cljs_promises$async$t23029$$.$cljs$lang$ctorPrWriter$ = function($promise$$8$$, $writer__4831__auto__$$95$$) {
    return $cljs$core$_write$$($writer__4831__auto__$$95$$, "cljs-promises.async/t23029");
  });
  return new $cljs_promises$async$t23029$$($cljs_promises$async$pair_port$$, $promise$$8$$, $cljs$core$PersistentArrayMap$EMPTY$$);
};
var $demo$create_db$knex$$ = new Knex({client:"websql", useNullAsDefault:!0}), $demo$create_db$schema$$ = $demo$create_db$knex$$.schema;
window.$knex$ = $demo$create_db$knex$$;
function $demo$create_db$create_authors_table$$($table$$1$$) {
  $table$$1$$.increments("id").primary();
  $table$$1$$.string("last_name");
  return $table$$1$$.string("first_name");
}
function $demo$create_db$create_books_table$$($table$$2$$) {
  $table$$2$$.increments("id").primary();
  $table$$2$$.string("title");
  $table$$2$$.integer("author_id");
  return $table$$2$$.integer("subject_id");
}
function $demo$create_db$create_subjects_table$$($table$$3$$) {
  $table$$3$$.increments("id").primary();
  return $table$$3$$.string("subject");
}
function $demo$create_db$create$$() {
  var $drop_table_promises$$ = [$demo$create_db$schema$$.dropTableIfExists("authors"), $demo$create_db$schema$$.dropTableIfExists("books"), $demo$create_db$schema$$.dropTableIfExists("subjects")], $create_table_promises$$ = [$demo$create_db$schema$$.createTableIfNotExists("authors", $demo$create_db$create_authors_table$$), $demo$create_db$schema$$.createTableIfNotExists("books", $demo$create_db$create_books_table$$), $demo$create_db$schema$$.createTableIfNotExists("subjects", $demo$create_db$create_subjects_table$$)];
  return $cljs_promises$async$pair_port$$(Promise.all($drop_table_promises$$).then(function($drop_table_promises$$, $create_table_promises$$) {
    return function() {
      return Promise.all($create_table_promises$$);
    };
  }($drop_table_promises$$, $create_table_promises$$)));
}
;var $demo$knex$knex$$ = new Knex({client:"websql", debug:!0, useNullAsDefault:!0}), $demo$knex$knex_no_debug$$ = new Knex({client:"websql", useNullAsDefault:!0});
function $demo$knex$init_chan$$() {
  var $out$$46$$ = $cljs$core$async$chan$cljs$0core$0IFn$0_invoke$0arity$03$$(null);
  console.log = function($out$$46$$) {
    return function($obj$$89_temp__4423__auto__$$inline_408$$) {
      $obj$$89_temp__4423__auto__$$inline_408$$ = $cljs$core$async$impl$protocols$put_BANG_$$($out$$46$$, new $cljs$core$PersistentArrayMap$$(null, 2, [$cljs$core$constant$0keyword$0sql$$, $obj$$89_temp__4423__auto__$$inline_408$$.sql, $cljs$core$constant$0keyword$0bindings$$, $obj$$89_temp__4423__auto__$$inline_408$$.bindings], null), $cljs$core$async$fhnop$$);
      return $cljs$core$truth_$$($obj$$89_temp__4423__auto__$$inline_408$$) ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($obj$$89_temp__4423__auto__$$inline_408$$) : $cljs$core$deref$$.call(null, $obj$$89_temp__4423__auto__$$inline_408$$) : !0;
    };
  }($out$$46$$);
  return $out$$46$$;
}
;function $demo$hydrate$hydrate$$($full_raw_js_raw_js$$) {
  window.knex = $demo$knex$knex$$;
  window.$currentPromise$ = null;
  $full_raw_js_raw_js$$ = [$cljs$core$str$$("window.currentPromise \x3d "), $cljs$core$str$$($full_raw_js_raw_js$$)].join("");
  try {
    eval($full_raw_js_raw_js$$);
    var $temp__4425__auto__$$36$$ = window.currentPromise;
    return $cljs$core$truth_$$($temp__4425__auto__$$36$$) ? $cljs_promises$async$pair_port$$($temp__4425__auto__$$36$$) : null;
  } catch ($e13465$$) {
    return $cljs_promises$async$pair_port$$(Promise.reject($e13465$$));
  }
}
;function $demo$components$records$sort_keys$$($object$$3$$) {
  var $keys$$11$$ = $cljs$core$keys$$($object$$3$$);
  return $cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$(function() {
    return function($keys$$11$$) {
      return $cljs$core$vector_QMARK_$$($object$$3$$.$cljs$core$IFn$_invoke$arity$1$ ? $object$$3$$.$cljs$core$IFn$_invoke$arity$1$($keys$$11$$) : $object$$3$$.call(null, $keys$$11$$));
    };
  }($keys$$11$$), $keys$$11$$);
}
function $demo$components$records$primitive_QMARK_$$($obj$$90$$) {
  return "string" === typeof $obj$$90$$ || "number" === typeof $obj$$90$$;
}
function $demo$components$records$primitive_view$$($p$$149$$, $needs_comma$$) {
  return new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0span$$, "string" === typeof $p$$149$$ ? new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0span$0primitive_DASH_string$$, [$cljs$core$str$$('"'), $cljs$core$str$$($p$$149$$), $cljs$core$str$$('"')].join("")], null) : "number" === typeof $p$$149$$ ? new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$cljs$core$constant$0keyword$0span$0primitive_DASH_number$$, $p$$149$$], null) : null, $cljs$core$truth_$$($needs_comma$$) ? "," : null], null);
}
function $demo$components$records$expander$$($collapsed_atom$$1$$) {
  return new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0span$0expander$$, new $cljs$core$PersistentArrayMap$$(null, 1, [$cljs$core$constant$0keyword$0on_DASH_click$$, function() {
    return $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($collapsed_atom$$1$$, $cljs$core$not$$);
  }], null), $cljs$core$truth_$$($cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($collapsed_atom$$1$$) : $cljs$core$deref$$.call(null, $collapsed_atom$$1$$)) ? "+" : "-"], null);
}
function $demo$components$records$title_view$$($title$$7$$, $opener$$) {
  return new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0span$$, $cljs$core$truth_$$($title$$7$$) ? new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0span$0object_DASH_view_DASH_entry_DASH_key$$, [$cljs$core$str$$($title$$7$$), $cljs$core$str$$(": ")].join("")], null) : null, $opener$$], null);
}
function $demo$components$records$array_view$$() {
  return function($collapsed$$3$$) {
    return function($title$$8$$, $array$$28$$, $needs_comma$$1$$) {
      return new $cljs$core$PersistentVector$$(null, 6, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$0array_DASH_view$0expander_DASH_container$$, new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$records$expander$$, $collapsed$$3$$], null), new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$records$title_view$$, $title$$8$$, "["], null), $cljs$core$truth_$$($cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? 
      $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($collapsed$$3$$) : $cljs$core$deref$$.call(null, $collapsed$$3$$)) ? "\u2026" : new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$0indent$$, function() {
        return function($collapsed$$3$$) {
          return function $demo$components$records$array_view_$_iter__13902$$($title$$8$$) {
            return new $cljs$core$LazySeq$$(null, function() {
              return function() {
                for (;;) {
                  var $collapsed$$3$$ = $cljs$core$seq$$($title$$8$$);
                  if ($collapsed$$3$$) {
                    if ($cljs$core$chunked_seq_QMARK_$$($collapsed$$3$$)) {
                      var $needs_comma$$1$$ = $cljs$core$_chunked_first$$($collapsed$$3$$), $collapsed$$4$$ = $cljs$core$count$$($needs_comma$$1$$), $b__13905$$ = $cljs$core$chunk_buffer$$($collapsed$$4$$);
                      return function() {
                        for (var $collapsed$$3$$ = 0;;) {
                          if ($collapsed$$3$$ < $collapsed$$4$$) {
                            var $title$$8$$ = $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($needs_comma$$1$$, $collapsed$$3$$), $demo$components$records$array_view_$_iter__13902$$ = $b__13905$$, $s__13903$$ = !$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$last$$($array$$28$$), $title$$8$$);
                            $demo$components$records$array_view_$_iter__13902$$.add($cljs$core$truth_$$($demo$components$records$primitive_QMARK_$$($title$$8$$)) ? new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$$, new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$records$primitive_view$$, $title$$8$$, $s__13903$$], null)], null) : new $cljs$core$PersistentVector$$(null, 
                            4, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$records$object_view$$, null, $title$$8$$, $s__13903$$], null));
                            $collapsed$$3$$ += 1;
                          } else {
                            return !0;
                          }
                        }
                      }() ? $cljs$core$chunk_cons$$($b__13905$$.chunk(), $demo$components$records$array_view_$_iter__13902$$($cljs$core$_chunked_rest$$($collapsed$$3$$))) : $cljs$core$chunk_cons$$($b__13905$$.chunk(), null);
                    }
                    var $object$$4$$ = $cljs$core$first$$($collapsed$$3$$);
                    return $cljs$core$cons$$(function() {
                      var $collapsed$$3$$ = !$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$last$$($array$$28$$), $object$$4$$);
                      return $cljs$core$truth_$$($demo$components$records$primitive_QMARK_$$($object$$4$$)) ? new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$$, new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$records$primitive_view$$, $object$$4$$, $collapsed$$3$$], null)], null) : new $cljs$core$PersistentVector$$(null, 4, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, 
                      [$demo$components$records$object_view$$, null, $object$$4$$, $collapsed$$3$$], null);
                    }(), $demo$components$records$array_view_$_iter__13902$$($cljs$core$rest$$($collapsed$$3$$)));
                  }
                  return null;
                }
              };
            }($collapsed$$3$$), null, null);
          };
        }($collapsed$$3$$)($array$$28$$);
      }()], null), "]", $cljs$core$truth_$$($needs_comma$$1$$) ? "," : null], null);
    };
  }($reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$1$(!1));
}
function $demo$components$records$key_value_view$$($keyname$$, $value$$91$$, $needs_comma$$2$$) {
  return new $cljs$core$PersistentVector$$(null, 4, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$$, new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0span$0object_DASH_view_DASH_entry_DASH_key$$, [$cljs$core$str$$($keyname$$), $cljs$core$str$$(":")].join("")], null), new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0span$0object_DASH_view_DASH_entry_DASH_value$$, 
  new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$records$primitive_view$$, $value$$91$$], null)], null), $cljs$core$truth_$$($needs_comma$$2$$) ? "," : null], null);
}
var $demo$components$records$object_view$$ = function $demo$components$records$object_view$$() {
  return function($collapsed$$7$$) {
    return function($title$$9$$, $object$$6$$, $needs_comma$$3$$) {
      return new $cljs$core$PersistentVector$$(null, 6, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$0object_DASH_view$0expander_DASH_container$$, new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$records$expander$$, $collapsed$$7$$], null), new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$records$title_view$$, $title$$9$$, "{"], null), $cljs$core$truth_$$($cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? 
      $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($collapsed$$7$$) : $cljs$core$deref$$.call(null, $collapsed$$7$$)) ? "\u2026" : new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$0indent$$, function() {
        var $title$$9$$ = $demo$components$records$sort_keys$$($object$$6$$);
        return function($collapsed$$7$$, $title$$9$$) {
          return function $demo$components$records$object_view_$_iter__13921$$($needs_comma$$3$$) {
            return new $cljs$core$LazySeq$$(null, function($collapsed$$7$$) {
              return function() {
                for (;;) {
                  var $title$$9$$ = $cljs$core$seq$$($needs_comma$$3$$);
                  if ($title$$9$$) {
                    if ($cljs$core$chunked_seq_QMARK_$$($title$$9$$)) {
                      var $keys$$13$$ = $cljs$core$_chunked_first$$($title$$9$$), $keys$$14$$ = $cljs$core$count$$($keys$$13$$), $collapsed$$8$$ = $cljs$core$chunk_buffer$$($keys$$14$$);
                      return function() {
                        for (var $title$$9$$ = 0;;) {
                          if ($title$$9$$ < $keys$$14$$) {
                            var $needs_comma$$3$$ = $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($keys$$13$$, $title$$9$$), $demo$components$records$object_view_$_iter__13921$$ = $collapsed$$8$$, $s__13922$$ = $cljs$core$PersistentVector$EMPTY_NODE$$, $s__13922__$2_temp__4425__auto__$$38$$;
                            $s__13922__$2_temp__4425__auto__$$38$$ = $cljs$core$name$$($needs_comma$$3$$);
                            var $G__13929$$inline_953_value$$inline_952$$ = void 0, $G__13929$$inline_953_value$$inline_952$$ = $needs_comma$$3$$, $G__13929$$inline_953_value$$inline_952$$ = $object$$6$$.$cljs$core$IFn$_invoke$arity$1$ ? $object$$6$$.$cljs$core$IFn$_invoke$arity$1$($G__13929$$inline_953_value$$inline_952$$) : $object$$6$$.call(null, $G__13929$$inline_953_value$$inline_952$$), $needs_comma$$3$$ = !$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$last$$($collapsed$$7$$), 
                            $needs_comma$$3$$);
                            $s__13922__$2_temp__4425__auto__$$38$$ = $cljs$core$vector_QMARK_$$($G__13929$$inline_953_value$$inline_952$$) ? new $cljs$core$PersistentVector$$(null, 4, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$records$array_view$$, $s__13922__$2_temp__4425__auto__$$38$$, $G__13929$$inline_953_value$$inline_952$$, $needs_comma$$3$$], null) : $cljs$core$map_QMARK_$$($G__13929$$inline_953_value$$inline_952$$) ? new $cljs$core$PersistentVector$$(null, 4, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, 
                            [$demo$components$records$object_view$$, $s__13922__$2_temp__4425__auto__$$38$$, $G__13929$$inline_953_value$$inline_952$$, $needs_comma$$3$$], null) : new $cljs$core$PersistentVector$$(null, 4, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$records$key_value_view$$, $s__13922__$2_temp__4425__auto__$$38$$, $G__13929$$inline_953_value$$inline_952$$, $needs_comma$$3$$], null);
                            $demo$components$records$object_view_$_iter__13921$$.add(new $cljs$core$PersistentVector$$(null, 2, 5, $s__13922$$, [$cljs$core$constant$0keyword$0div$0object_DASH_view_DASH_entry$$, $s__13922__$2_temp__4425__auto__$$38$$], null));
                            $title$$9$$ += 1;
                          } else {
                            return !0;
                          }
                        }
                      }() ? $cljs$core$chunk_cons$$($collapsed$$8$$.chunk(), $demo$components$records$object_view_$_iter__13921$$($cljs$core$_chunked_rest$$($title$$9$$))) : $cljs$core$chunk_cons$$($collapsed$$8$$.chunk(), null);
                    }
                    var $key$$118$$ = $cljs$core$first$$($title$$9$$);
                    return $cljs$core$cons$$(new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$0object_DASH_view_DASH_entry$$, function() {
                      var $title$$9$$ = $cljs$core$name$$($key$$118$$), $needs_comma$$3$$;
                      $needs_comma$$3$$ = $key$$118$$;
                      $needs_comma$$3$$ = $object$$6$$.$cljs$core$IFn$_invoke$arity$1$ ? $object$$6$$.$cljs$core$IFn$_invoke$arity$1$($needs_comma$$3$$) : $object$$6$$.call(null, $needs_comma$$3$$);
                      var $keys$$13$$ = !$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$last$$($collapsed$$7$$), $key$$118$$);
                      return $cljs$core$vector_QMARK_$$($needs_comma$$3$$) ? new $cljs$core$PersistentVector$$(null, 4, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$records$array_view$$, $title$$9$$, $needs_comma$$3$$, $keys$$13$$], null) : $cljs$core$map_QMARK_$$($needs_comma$$3$$) ? new $cljs$core$PersistentVector$$(null, 4, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$records$object_view$$, $title$$9$$, $needs_comma$$3$$, $keys$$13$$], null) : new $cljs$core$PersistentVector$$(null, 
                      4, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$records$key_value_view$$, $title$$9$$, $needs_comma$$3$$, $keys$$13$$], null);
                    }()], null), $demo$components$records$object_view_$_iter__13921$$($cljs$core$rest$$($title$$9$$)));
                  }
                  return null;
                }
              };
            }($collapsed$$7$$, $title$$9$$), null, null);
          };
        }($title$$9$$, $collapsed$$7$$)($title$$9$$);
      }()], null), "}", $cljs$core$truth_$$($needs_comma$$3$$) ? "," : null], null);
    };
  }($reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$1$(!1));
};
function $demo$components$records$cmp$$($object$$7$$) {
  return new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$0records_DASH_list$$, new $cljs$core$PersistentVector$$(null, 4, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$records$array_view$$, null, $object$$7$$, !1], null)], null);
}
;var $demo$components$sandbox$hydration$$ = $reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$1$(null), $demo$components$sandbox$hydration_result$$ = $reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$1$(null), $demo$components$sandbox$hydration_error$$ = $reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$1$(null), $demo$components$sandbox$sql_statements$$ = $reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$PersistentVector$EMPTY$$);
function $demo$components$sandbox$do_hydration$$() {
  var $c__11125__auto__$$16$$ = $cljs$core$async$chan$cljs$0core$0IFn$0_invoke$0arity$03$$(1);
  $cljs$core$async$impl$dispatch$run$$(function($c__11125__auto__$$16$$) {
    return function() {
      var $f__11126__auto__$$20$$ = function() {
        return function($c__11125__auto__$$16$$) {
          return function() {
            function $c__11125__auto__$$17$$($f__11126__auto__$$20$$) {
              for (;;) {
                var $state__11127__auto__$$20$$;
                a: {
                  try {
                    for (;;) {
                      var $demo$components$sandbox$do_hydration_$_state_machine__11048__auto____1$$ = $c__11125__auto__$$16$$($f__11126__auto__$$20$$);
                      if (!$cljs$core$keyword_identical_QMARK_$$($demo$components$sandbox$do_hydration_$_state_machine__11048__auto____1$$, $cljs$core$constant$0keyword$0recur$$)) {
                        $state__11127__auto__$$20$$ = $demo$components$sandbox$do_hydration_$_state_machine__11048__auto____1$$;
                        break a;
                      }
                    }
                  } catch ($demo$components$sandbox$do_hydration_$_state_machine__11048__auto____0$$) {
                    if ($demo$components$sandbox$do_hydration_$_state_machine__11048__auto____0$$ instanceof Object) {
                      $f__11126__auto__$$20$$[5] = $demo$components$sandbox$do_hydration_$_state_machine__11048__auto____0$$, $cljs$core$async$impl$ioc_helpers$process_exception$$($f__11126__auto__$$20$$), $state__11127__auto__$$20$$ = $cljs$core$constant$0keyword$0recur$$;
                    } else {
                      throw $demo$components$sandbox$do_hydration_$_state_machine__11048__auto____0$$;
                    }
                  }
                }
                if (!$cljs$core$keyword_identical_QMARK_$$($state__11127__auto__$$20$$, $cljs$core$constant$0keyword$0recur$$)) {
                  return $state__11127__auto__$$20$$;
                }
              }
            }
            function $f__11126__auto__$$20$$() {
              var $c__11125__auto__$$16$$ = [null, null, null, null, null, null, null, null, null, null, null, null, null, null];
              $c__11125__auto__$$16$$[0] = $state__11127__auto__$$20$$;
              $c__11125__auto__$$16$$[1] = 1;
              return $c__11125__auto__$$16$$;
            }
            var $state__11127__auto__$$20$$ = null, $state__11127__auto__$$20$$ = function($c__11125__auto__$$16$$) {
              switch(arguments.length) {
                case 0:
                  return $f__11126__auto__$$20$$.call(this);
                case 1:
                  return $c__11125__auto__$$17$$.call(this, $c__11125__auto__$$16$$);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            $state__11127__auto__$$20$$.$cljs$core$IFn$_invoke$arity$0$ = $f__11126__auto__$$20$$;
            $state__11127__auto__$$20$$.$cljs$core$IFn$_invoke$arity$1$ = $c__11125__auto__$$17$$;
            return $state__11127__auto__$$20$$;
          }();
        }(function() {
          return function($c__11125__auto__$$16$$) {
            var $c__11125__auto__$$17$$ = $c__11125__auto__$$16$$[1];
            if (7 === $c__11125__auto__$$17$$) {
              var $c__11125__auto__$$17$$ = $c__11125__auto__$$16$$[7], $c__11125__auto__$$17$$ = $c__11125__auto__$$16$$[8], $f__11126__auto__$$20$$ = $cljs$core$println$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$array_seq$$(["and error in here ", $c__11125__auto__$$17$$], 0)), $c__11125__auto__$$17$$ = $c__11125__auto__$$17$$.message;
              $c__11125__auto__$$16$$[9] = $f__11126__auto__$$20$$;
              $c__11125__auto__$$16$$[7] = $c__11125__auto__$$17$$;
              $c__11125__auto__$$16$$[1] = $cljs$core$truth_$$($c__11125__auto__$$17$$) ? 9 : 10;
              return $cljs$core$constant$0keyword$0recur$$;
            }
            if (1 === $c__11125__auto__$$17$$) {
              return $c__11125__auto__$$17$$ = $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($demo$components$sandbox$hydration$$) : $cljs$core$deref$$.call(null, $demo$components$sandbox$hydration$$), $c__11125__auto__$$16$$[1] = $cljs$core$truth_$$($c__11125__auto__$$17$$) ? 2 : 3, $cljs$core$constant$0keyword$0recur$$;
            }
            if (4 === $c__11125__auto__$$17$$) {
              return $c__11125__auto__$$17$$ = $c__11125__auto__$$16$$[2], $cljs$core$async$impl$ioc_helpers$return_chan$$($c__11125__auto__$$16$$, $c__11125__auto__$$17$$);
            }
            if (6 === $c__11125__auto__$$17$$) {
              var $state__11127__auto__$$20$$ = $c__11125__auto__$$16$$[10], $f__11126__auto__$$20$$ = function() {
                var $c__11125__auto__$$16$$ = $state__11127__auto__$$20$$;
                return $cljs$core$reset_BANG_$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$core$reset_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($demo$components$sandbox$hydration_result$$, $c__11125__auto__$$16$$) : $cljs$core$reset_BANG_$$.call(null, $demo$components$sandbox$hydration_result$$, $c__11125__auto__$$16$$);
              }(), $c__11125__auto__$$17$$ = $cljs$core$reset_BANG_$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$core$reset_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($demo$components$sandbox$hydration_error$$, null) : $cljs$core$reset_BANG_$$.call(null, $demo$components$sandbox$hydration_error$$, null);
              $c__11125__auto__$$16$$[11] = $f__11126__auto__$$20$$;
              $c__11125__auto__$$16$$[2] = $c__11125__auto__$$17$$;
              $c__11125__auto__$$16$$[1] = 8;
              return $cljs$core$constant$0keyword$0recur$$;
            }
            if (3 === $c__11125__auto__$$17$$) {
              return $c__11125__auto__$$16$$[2] = null, $c__11125__auto__$$16$$[1] = 4, $cljs$core$constant$0keyword$0recur$$;
            }
            if (2 === $c__11125__auto__$$17$$) {
              var $c__11125__auto__$$17$$ = function() {
                var $c__11125__auto__$$16$$ = $cljs$core$PersistentVector$EMPTY$$;
                return $cljs$core$reset_BANG_$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$core$reset_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($demo$components$sandbox$sql_statements$$, $c__11125__auto__$$16$$) : $cljs$core$reset_BANG_$$.call(null, $demo$components$sandbox$sql_statements$$, $c__11125__auto__$$16$$);
              }(), $f__11126__auto__$$20$$ = $cljs$core$reset_BANG_$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$core$reset_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($demo$components$sandbox$hydration_result$$, null) : $cljs$core$reset_BANG_$$.call(null, $demo$components$sandbox$hydration_result$$, null), $inst_13988_inst_13989$$ = $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($demo$components$sandbox$hydration$$) : $cljs$core$deref$$.call(null, 
              $demo$components$sandbox$hydration$$), $inst_13988_inst_13989$$ = $demo$hydrate$hydrate$$($inst_13988_inst_13989$$);
              $c__11125__auto__$$16$$[12] = $c__11125__auto__$$17$$;
              $c__11125__auto__$$16$$[13] = $f__11126__auto__$$20$$;
              return $cljs$core$async$impl$ioc_helpers$take_BANG_$$($c__11125__auto__$$16$$, 5, $inst_13988_inst_13989$$);
            }
            return 11 === $c__11125__auto__$$17$$ ? ($c__11125__auto__$$17$$ = $c__11125__auto__$$16$$[2], $c__11125__auto__$$17$$ = $cljs$core$reset_BANG_$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$core$reset_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($demo$components$sandbox$hydration_error$$, $c__11125__auto__$$17$$) : $cljs$core$reset_BANG_$$.call(null, $demo$components$sandbox$hydration_error$$, $c__11125__auto__$$17$$), $c__11125__auto__$$16$$[2] = $c__11125__auto__$$17$$, $c__11125__auto__$$16$$[1] = 
            8, $cljs$core$constant$0keyword$0recur$$) : 9 === $c__11125__auto__$$17$$ ? ($c__11125__auto__$$17$$ = $c__11125__auto__$$16$$[7], $c__11125__auto__$$16$$[2] = $c__11125__auto__$$17$$, $c__11125__auto__$$16$$[1] = 11, $cljs$core$constant$0keyword$0recur$$) : 5 === $c__11125__auto__$$17$$ ? ($state__11127__auto__$$20$$ = $c__11125__auto__$$16$$[10], $c__11125__auto__$$17$$ = $c__11125__auto__$$16$$[2], $f__11126__auto__$$20$$ = $c__11125__auto__$$17$$.$cljs$core$IFn$_invoke$arity$1$ ? 
            $c__11125__auto__$$17$$.$cljs$core$IFn$_invoke$arity$1$(0) : $c__11125__auto__$$17$$.call(null, 0), $c__11125__auto__$$17$$ = $c__11125__auto__$$17$$.$cljs$core$IFn$_invoke$arity$1$ ? $c__11125__auto__$$17$$.$cljs$core$IFn$_invoke$arity$1$(1) : $c__11125__auto__$$17$$.call(null, 1), $c__11125__auto__$$16$$[10] = $f__11126__auto__$$20$$, $c__11125__auto__$$16$$[8] = $c__11125__auto__$$17$$, $c__11125__auto__$$16$$[1] = $cljs$core$truth_$$($f__11126__auto__$$20$$) ? 6 : 7, $cljs$core$constant$0keyword$0recur$$) : 
            10 === $c__11125__auto__$$17$$ ? ($c__11125__auto__$$17$$ = $c__11125__auto__$$16$$[8], $c__11125__auto__$$17$$ = $c__11125__auto__$$17$$.toString(), $c__11125__auto__$$16$$[2] = $c__11125__auto__$$17$$, $c__11125__auto__$$16$$[1] = 11, $cljs$core$constant$0keyword$0recur$$) : 8 === $c__11125__auto__$$17$$ ? ($c__11125__auto__$$17$$ = $c__11125__auto__$$16$$[2], $c__11125__auto__$$16$$[2] = $c__11125__auto__$$17$$, $c__11125__auto__$$16$$[1] = 4, $cljs$core$constant$0keyword$0recur$$) : 
            null;
          };
        }($c__11125__auto__$$16$$), $c__11125__auto__$$16$$);
      }(), $state__11127__auto__$$20$$ = function() {
        var $state__11127__auto__$$20$$ = $f__11126__auto__$$20$$.$cljs$core$IFn$_invoke$arity$0$ ? $f__11126__auto__$$20$$.$cljs$core$IFn$_invoke$arity$0$() : $f__11126__auto__$$20$$.call(null);
        $state__11127__auto__$$20$$[6] = $c__11125__auto__$$16$$;
        return $state__11127__auto__$$20$$;
      }();
      return $cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped$$($state__11127__auto__$$20$$);
    };
  }($c__11125__auto__$$16$$));
  return $c__11125__auto__$$16$$;
}
function $demo$components$sandbox$set_hydration$$($new_hydration$$) {
  $cljs$core$reset_BANG_$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$core$reset_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($demo$components$sandbox$hydration$$, $new_hydration$$) : $cljs$core$reset_BANG_$$.call(null, $demo$components$sandbox$hydration$$, $new_hydration$$);
  return $demo$components$sandbox$do_hydration$$();
}
function $demo$components$sandbox$example$$($hydration$$) {
  return new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$0example$$, new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0a$$, new $cljs$core$PersistentArrayMap$$(null, 1, [$cljs$core$constant$0keyword$0on_DASH_click$$, function() {
    return $demo$components$sandbox$set_hydration$$($hydration$$);
  }], null), new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0span$0example_DASH_hydration$$, new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0pre$$, $hydration$$], null)], null)], null)], null);
}
function $demo$components$sandbox$examples$$() {
  return function($collapsed$$11$$) {
    return function() {
      return new $cljs$core$PersistentVector$$(null, 5, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$0examples$$, $cljs$core$truth_$$($cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($collapsed$$11$$) : $cljs$core$deref$$.call(null, $collapsed$$11$$)) ? new $cljs$core$PersistentArrayMap$$(null, 1, [$cljs$core$constant$0keyword$0style$$, new $cljs$core$PersistentArrayMap$$(null, 2, [$cljs$core$constant$0keyword$0padding$$, 
      0, $cljs$core$constant$0keyword$0margin$$, 0], null)], null) : null, $cljs$core$truth_$$($cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($collapsed$$11$$) : $cljs$core$deref$$.call(null, $collapsed$$11$$)) ? null : new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0h3$$, "Examples"], null), new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, 
      [$demo$components$expander$cmp$$, $collapsed$$11$$, "examples"], null), $cljs$core$truth_$$($cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($collapsed$$11$$) : $cljs$core$deref$$.call(null, $collapsed$$11$$)) ? null : new $cljs$core$PersistentVector$$(null, 4, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$0examples_DASH_container$$, new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, 
      [$demo$components$sandbox$example$$, "knex('subjects')"], null), new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$sandbox$example$$, "knex\n  .table('authors')\n  .innerJoin('books', 'books.author_id', 'authors.id')\n  .select('authors.first_name', 'books.title')"], null), new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$sandbox$example$$, "knex\n  .select(\n    knex.raw('first_name || \" \" || last_name as author'),\n    knex.raw('count(books.id) as quantity')\n  )\n  .from('books')\n  .innerJoin('authors', 'authors.id', 'books.author_id')\n  .groupBy('author_id')\n  .orderBy('quantity', 'desc')"], 
      null)], null)], null);
    };
  }($reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$1$(!1));
}
function $demo$components$sandbox$tabs$$($current_atom$$) {
  var $sqls$$ = $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($demo$components$sandbox$sql_statements$$) : $cljs$core$deref$$.call(null, $demo$components$sandbox$sql_statements$$), $sqls_c$$ = $cljs$core$count$$($sqls$$), $rows$$ = $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($demo$components$sandbox$hydration_result$$) : $cljs$core$deref$$.call(null, $demo$components$sandbox$hydration_result$$), 
  $row_c$$ = $cljs$core$count$$($rows$$);
  return new $cljs$core$PersistentVector$$(null, 4, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0ul$0nav$0nav_DASH_tabs$$, new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0li$$, new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0a$$, new $cljs$core$PersistentArrayMap$$(null, 1, [$cljs$core$constant$0keyword$0on_DASH_click$$, function() {
    return function() {
      return $cljs$core$reset_BANG_$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$core$reset_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($current_atom$$, "records") : $cljs$core$reset_BANG_$$.call(null, $current_atom$$, "records");
    };
  }($sqls$$, $sqls_c$$, $rows$$, $row_c$$)], null), [$cljs$core$str$$("returned "), $cljs$core$str$$($row_c$$), $cljs$core$str$$(" row"), $cljs$core$str$$($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($row_c$$, 1) ? null : "s")].join("")], null)], null), new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0li$$, new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0a$$, 
  new $cljs$core$PersistentArrayMap$$(null, 1, [$cljs$core$constant$0keyword$0on_DASH_click$$, function() {
    return function() {
      return $cljs$core$reset_BANG_$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$core$reset_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($current_atom$$, "sql") : $cljs$core$reset_BANG_$$.call(null, $current_atom$$, "sql");
    };
  }($sqls$$, $sqls_c$$, $rows$$, $row_c$$)], null), [$cljs$core$str$$($sqls_c$$), $cljs$core$str$$(" SQL statement"), $cljs$core$str$$($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($sqls_c$$, 1) ? null : "s")].join("")], null)], null), new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0li$0pull_DASH_right$0knex_DASH_version$$, "knex ", window.$knex$.VERSION], null)], null);
}
function $demo$components$sandbox$sql_view$$($JSCompiler_inline_result$$74_sb$$inline_425_sql$$) {
  var $JSCompiler_temp_const$$73$$ = $cljs$core$PersistentVector$EMPTY_NODE$$, $JSCompiler_temp_const$$72$$ = new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$0sql_DASH_view_DASH_sql$$, new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0span$0sql_DASH_view_DASH_header$$, "query: "], null), new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$cljs$core$constant$0keyword$0code$$, $cljs$core$constant$0keyword$0sql$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$$74_sb$$inline_425_sql$$)], null)], null), $JSCompiler_temp_const$$71$$ = $cljs$core$PersistentVector$EMPTY_NODE$$, $JSCompiler_temp_const$$70$$ = new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0span$0sql_DASH_view_DASH_header$$, "bindings: "], null), $JSCompiler_temp_const$$69$$ = $cljs$core$PersistentVector$EMPTY_NODE$$;
  a: {
    var $coll$$inline_423_coll__$1$$inline_426_coll__$2$$inline_427$$ = $cljs$core$constant$0keyword$0bindings$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$$74_sb$$inline_425_sql$$);
    $JSCompiler_inline_result$$74_sb$$inline_425_sql$$ = new $goog$string$StringBuffer$$;
    for ($coll$$inline_423_coll__$1$$inline_426_coll__$2$$inline_427$$ = $cljs$core$seq$$($coll$$inline_423_coll__$1$$inline_426_coll__$2$$inline_427$$);;) {
      if ($coll$$inline_423_coll__$1$$inline_426_coll__$2$$inline_427$$) {
        $JSCompiler_inline_result$$74_sb$$inline_425_sql$$.append("" + $cljs$core$str$$($cljs$core$first$$($coll$$inline_423_coll__$1$$inline_426_coll__$2$$inline_427$$))), $coll$$inline_423_coll__$1$$inline_426_coll__$2$$inline_427$$ = $cljs$core$next$$($coll$$inline_423_coll__$1$$inline_426_coll__$2$$inline_427$$), null != $coll$$inline_423_coll__$1$$inline_426_coll__$2$$inline_427$$ && $JSCompiler_inline_result$$74_sb$$inline_425_sql$$.append(", ");
      } else {
        $JSCompiler_inline_result$$74_sb$$inline_425_sql$$ = $JSCompiler_inline_result$$74_sb$$inline_425_sql$$.toString();
        break a;
      }
    }
  }
  return new $cljs$core$PersistentVector$$(null, 3, 5, $JSCompiler_temp_const$$73$$, [$cljs$core$constant$0keyword$0div$0sql_DASH_view$$, $JSCompiler_temp_const$$72$$, new $cljs$core$PersistentVector$$(null, 3, 5, $JSCompiler_temp_const$$71$$, [$cljs$core$constant$0keyword$0div$0sql_DASH_view_DASH_bindings$$, $JSCompiler_temp_const$$70$$, new $cljs$core$PersistentVector$$(null, 4, 5, $JSCompiler_temp_const$$69$$, [$cljs$core$constant$0keyword$0code$$, "[", $JSCompiler_inline_result$$74_sb$$inline_425_sql$$, 
  "]"], null)], null)], null);
}
function $demo$components$sandbox$hydration_display$$() {
  return function($current_tab$$1$$) {
    return function() {
      return new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$0hydration_DASH_display$$, new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$sandbox$tabs$$, $current_tab$$1$$], null), $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$("records", $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($current_tab$$1$$) : $cljs$core$deref$$.call(null, 
      $current_tab$$1$$)) ? new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$0hydration_DASH_display_DASH_records$$, new $cljs$core$PersistentVector$$(null, 1, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$0hydration_DASH_display_DASH_title$$], null), new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$records$cmp$$, $cljs$core$js__GT_clj$cljs$0core$0IFn$0_invoke$0arity$0variadic$$()], 
      null)], null) : new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$0hydration_DASH_display_DASH_sql$$, function() {
        return function($current_tab$$1$$) {
          return function $demo$components$sandbox$hydration_display_$_iter__14100$$($s__14101$$) {
            return new $cljs$core$LazySeq$$(null, function() {
              return function() {
                for (;;) {
                  var $current_tab$$1$$ = $cljs$core$seq$$($s__14101$$);
                  if ($current_tab$$1$$) {
                    if ($cljs$core$chunked_seq_QMARK_$$($current_tab$$1$$)) {
                      var $current_tab$$2$$ = $cljs$core$_chunked_first$$($current_tab$$1$$), $size__5004__auto__$$3$$ = $cljs$core$count$$($current_tab$$2$$), $b__14103_sql$$1$$ = $cljs$core$chunk_buffer$$($size__5004__auto__$$3$$);
                      a: {
                        for (var $i__14102$$inline_429$$ = 0;;) {
                          if ($i__14102$$inline_429$$ < $size__5004__auto__$$3$$) {
                            var $sql$$inline_430$$ = $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($current_tab$$2$$, $i__14102$$inline_429$$);
                            $b__14103_sql$$1$$.add(new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$sandbox$sql_view$$, $sql$$inline_430$$], null));
                            $i__14102$$inline_429$$ += 1;
                          } else {
                            $current_tab$$2$$ = !0;
                            break a;
                          }
                        }
                      }
                      return $current_tab$$2$$ ? $cljs$core$chunk_cons$$($b__14103_sql$$1$$.chunk(), $demo$components$sandbox$hydration_display_$_iter__14100$$($cljs$core$_chunked_rest$$($current_tab$$1$$))) : $cljs$core$chunk_cons$$($b__14103_sql$$1$$.chunk(), null);
                    }
                    $b__14103_sql$$1$$ = $cljs$core$first$$($current_tab$$1$$);
                    return $cljs$core$cons$$(new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$sandbox$sql_view$$, $b__14103_sql$$1$$], null), $demo$components$sandbox$hydration_display_$_iter__14100$$($cljs$core$rest$$($current_tab$$1$$)));
                  }
                  return null;
                }
              };
            }($current_tab$$1$$), null, null);
          };
        }($current_tab$$1$$)($cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($demo$components$sandbox$sql_statements$$) : $cljs$core$deref$$.call(null, $demo$components$sandbox$sql_statements$$));
      }()], null)], null);
    };
  }($reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$1$("records"));
}
function $demo$components$sandbox$hydration_input$$() {
  return new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$0hydration_DASH_input$$, new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0textarea$$, new $cljs$core$PersistentArrayMap$$(null, 3, [$cljs$core$constant$0keyword$0value$$, $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($demo$components$sandbox$hydration$$) : 
  $cljs$core$deref$$.call(null, $demo$components$sandbox$hydration$$), $cljs$core$constant$0keyword$0style$$, new $cljs$core$PersistentArrayMap$$(null, 2, [$cljs$core$constant$0keyword$0width$$, "100%", $cljs$core$constant$0keyword$0height$$, "300px"], null), $cljs$core$constant$0keyword$0on_DASH_change$$, function($G__14113_14115_e$$895$$) {
    $G__14113_14115_e$$895$$ = $G__14113_14115_e$$895$$.target.value;
    $cljs$core$reset_BANG_$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$core$reset_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($demo$components$sandbox$hydration$$, $G__14113_14115_e$$895$$) : $cljs$core$reset_BANG_$$.call(null, $demo$components$sandbox$hydration$$, $G__14113_14115_e$$895$$);
    return $demo$components$sandbox$do_hydration$$();
  }], null)], null)], null);
}
function $demo$components$sandbox$cmp$$() {
  return new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$$, new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$0half$$, new $cljs$core$PersistentVector$$(null, 1, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$sandbox$examples$$], null), new $cljs$core$PersistentVector$$(null, 1, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$sandbox$hydration_input$$], 
  null)], null), new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$0half$$, $cljs$core$truth_$$($cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($demo$components$sandbox$hydration_error$$) : $cljs$core$deref$$.call(null, $demo$components$sandbox$hydration_error$$)) ? new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$0hydration_DASH_error$$, 
  $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($demo$components$sandbox$hydration_error$$) : $cljs$core$deref$$.call(null, $demo$components$sandbox$hydration_error$$)], null) : null, $cljs$core$truth_$$($cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($demo$components$sandbox$hydration_result$$) : $cljs$core$deref$$.call(null, $demo$components$sandbox$hydration_result$$)) ? new $cljs$core$PersistentVector$$(null, 
  1, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$sandbox$hydration_display$$], null) : null], null)], null);
}
(function() {
  var $out$$48$$ = $demo$knex$init_chan$$();
  $demo$components$sandbox$set_hydration$$("knex('subjects')");
  var $c__11125__auto__$$20$$ = $cljs$core$async$chan$cljs$0core$0IFn$0_invoke$0arity$03$$(1);
  $cljs$core$async$impl$dispatch$run$$(function($out$$48$$, $c__11125__auto__$$20$$) {
    return function() {
      var $f__11126__auto__$$21$$ = function() {
        return function($out$$48$$) {
          return function() {
            function $c__11125__auto__$$20$$($c__11125__auto__$$21$$) {
              for (;;) {
                var $out$$49$$;
                a: {
                  try {
                    for (;;) {
                      var $f__11126__auto__$$21$$ = $out$$48$$($c__11125__auto__$$21$$);
                      if (!$cljs$core$keyword_identical_QMARK_$$($f__11126__auto__$$21$$, $cljs$core$constant$0keyword$0recur$$)) {
                        $out$$49$$ = $f__11126__auto__$$21$$;
                        break a;
                      }
                    }
                  } catch ($state__11127__auto__$$21$$) {
                    if ($state__11127__auto__$$21$$ instanceof Object) {
                      $c__11125__auto__$$21$$[5] = $state__11127__auto__$$21$$, $cljs$core$async$impl$ioc_helpers$process_exception$$($c__11125__auto__$$21$$), $out$$49$$ = $cljs$core$constant$0keyword$0recur$$;
                    } else {
                      throw $state__11127__auto__$$21$$;
                    }
                  }
                }
                if (!$cljs$core$keyword_identical_QMARK_$$($out$$49$$, $cljs$core$constant$0keyword$0recur$$)) {
                  return $out$$49$$;
                }
              }
            }
            function $c__11125__auto__$$21$$() {
              var $out$$48$$ = [null, null, null, null, null, null, null, null];
              $out$$48$$[0] = $out$$49$$;
              $out$$48$$[1] = 1;
              return $out$$48$$;
            }
            var $out$$49$$ = null, $out$$49$$ = function($out$$48$$) {
              switch(arguments.length) {
                case 0:
                  return $c__11125__auto__$$21$$.call(this);
                case 1:
                  return $c__11125__auto__$$20$$.call(this, $out$$48$$);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            $out$$49$$.$cljs$core$IFn$_invoke$arity$0$ = $c__11125__auto__$$21$$;
            $out$$49$$.$cljs$core$IFn$_invoke$arity$1$ = $c__11125__auto__$$20$$;
            return $out$$49$$;
          }();
        }(function($out$$48$$, $c__11125__auto__$$20$$) {
          return function($out$$48$$) {
            var $c__11125__auto__$$21$$ = $out$$48$$[1];
            return 1 === $c__11125__auto__$$21$$ ? ($out$$48$$[2] = null, $out$$48$$[1] = 2, $cljs$core$constant$0keyword$0recur$$) : 2 === $c__11125__auto__$$21$$ ? ($out$$48$$[1] = 4, $cljs$core$constant$0keyword$0recur$$) : 3 === $c__11125__auto__$$21$$ ? ($c__11125__auto__$$21$$ = $out$$48$$[2], $cljs$core$async$impl$ioc_helpers$return_chan$$($out$$48$$, $c__11125__auto__$$21$$)) : 4 === $c__11125__auto__$$21$$ ? $cljs$core$async$impl$ioc_helpers$take_BANG_$$($out$$48$$, 7, $c__11125__auto__$$20$$) : 
            5 === $c__11125__auto__$$21$$ ? ($out$$48$$[2] = null, $out$$48$$[1] = 6, $cljs$core$constant$0keyword$0recur$$) : 6 === $c__11125__auto__$$21$$ ? ($c__11125__auto__$$21$$ = $out$$48$$[2], $out$$48$$[2] = $c__11125__auto__$$21$$, $out$$48$$[1] = 3, $cljs$core$constant$0keyword$0recur$$) : 7 === $c__11125__auto__$$21$$ ? ($c__11125__auto__$$21$$ = $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($demo$components$sandbox$sql_statements$$, $cljs$core$conj$$, $out$$48$$[2]), $out$$48$$[7] = 
            $c__11125__auto__$$21$$, $out$$48$$[2] = null, $out$$48$$[1] = 2, $cljs$core$constant$0keyword$0recur$$) : null;
          };
        }($out$$48$$, $c__11125__auto__$$20$$), $out$$48$$, $c__11125__auto__$$20$$);
      }(), $state__11127__auto__$$21$$ = function() {
        var $c__11125__auto__$$20$$ = $f__11126__auto__$$21$$.$cljs$core$IFn$_invoke$arity$0$ ? $f__11126__auto__$$21$$.$cljs$core$IFn$_invoke$arity$0$() : $f__11126__auto__$$21$$.call(null);
        $c__11125__auto__$$20$$[6] = $out$$48$$;
        return $c__11125__auto__$$20$$;
      }();
      return $cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped$$($state__11127__auto__$$21$$);
    };
  }($c__11125__auto__$$20$$, $out$$48$$));
  return $c__11125__auto__$$20$$;
})();
var $demo$data$authors$$ = [{id:1111, last_name:"Denham", first_name:"Ariel"}, {id:1212, last_name:"Worsley", first_name:"John"}, {id:15990, last_name:"Bourgeois", first_name:"Paulette"}, {id:25041, last_name:"Bianco", first_name:"Margery Williams"}, {id:16, last_name:"Alcott", first_name:"Louisa May"}, {id:4156, last_name:"King", first_name:"Stephen"}, {id:1866, last_name:"Herbert", first_name:"Frank"}, {id:1644, last_name:"Hogarth", first_name:"Burne"}, {id:2031, last_name:"Brown", first_name:"Margaret Wise"}, 
{id:115, last_name:"Poe", first_name:"Edgar Allen"}, {id:7805, last_name:"Lutz", first_name:"Mark"}, {id:7806, last_name:"Christiansen", first_name:"Tom"}, {id:1533, last_name:"Brautigan", first_name:"Richard"}, {id:1717, last_name:"Brite", first_name:"Poppy Z."}, {id:2112, last_name:"Gorey", first_name:"Edward"}, {id:2001, last_name:"Clarke", first_name:"Arthur C."}, {id:1213, last_name:"Brookins", first_name:"Andrew"}, {id:25043, last_name:"Simon", first_name:"Neil"}, {id:1809, last_name:"Geisel", 
first_name:"Theodor Seuss"}], $demo$data$books$$ = [{id:7808, title:"The Shining", author_id:4156, subject_id:9}, {id:4513, title:"Dune", author_id:1866, subject_id:15}, {id:4267, title:"2001: A Space Odyssey", author_id:2001, subject_id:15}, {id:1608, title:"The Cat in the Hat", author_id:1809, subject_id:2}, {id:1590, title:"Bartholomew and the Oobleck", author_id:1809, subject_id:2}, {id:1591, title:"One Fish, Two Fish, Red Fish, Blue Fish", author_id:1809, subject_id:2}, {id:1592, title:"Horton Hears a Who", 
author_id:1809, subject_id:2}, {id:1593, title:"The Lorax", author_id:1809, subject_id:2}, {id:25908, title:"Franklin in the Dark", author_id:15990, subject_id:2}, {id:1501, title:"Goodnight Moon", author_id:2031, subject_id:2}, {id:190, title:"Little Women", author_id:16, subject_id:6}, {id:1234, title:"The Velveteen Rabbit", author_id:25041, subject_id:3}, {id:2038, title:"Dynamic Anatomy", author_id:1644, subject_id:0}, {id:156, title:"The Tell-Tale Heart", author_id:115, subject_id:9}, {id:41473, 
title:"Programming Python", author_id:7805, subject_id:4}, {id:41477, title:"Learning Python", author_id:7805, subject_id:4}, {id:41478, title:"Perl Cookbook", author_id:7806, subject_id:4}, {id:41472, title:"Practical PostgreSQL", author_id:1212, subject_id:4}], $demo$data$subjects$$ = [{id:0, subject:"Arts"}, {id:1, subject:"Business"}, {id:2, subject:"Children's Books"}, {id:3, subject:"Classics"}, {id:4, subject:"Computers"}, {id:5, subject:"Cooking"}, {id:6, subject:"Drama"}, {id:7, subject:"Entertainment"}, 
{id:8, subject:"History"}, {id:9, subject:"Horror"}, {id:10, subject:"Mystery"}, {id:11, subject:"Poetry"}, {id:12, subject:"Religion"}, {id:13, subject:"Romance"}, {id:14, subject:"Science"}, {id:15, subject:"Science Fiction"}];
function $demo$populate_db$populate_table$$($name$$77$$, $data$$35$$) {
  return ($demo$knex$knex_no_debug$$.$cljs$core$IFn$_invoke$arity$1$ ? $demo$knex$knex_no_debug$$.$cljs$core$IFn$_invoke$arity$1$($name$$77$$) : $demo$knex$knex_no_debug$$.call(null, $name$$77$$)).insert($data$$35$$);
}
;var $cljs$core$_STAR_print_newline_STAR_$$ = !1, $cljs$core$_STAR_print_fn_STAR_$$ = function() {
  function $G__17707$$inline_437$$($G__17707$$inline_437$$) {
    var $G__17708__i$$inline_441_args$$inline_440$$ = null;
    if (0 < arguments.length) {
      for (var $G__17708__i$$inline_441_args$$inline_440$$ = 0, $G__17708__a$$inline_442$$ = Array(arguments.length - 0);$G__17708__i$$inline_441_args$$inline_440$$ < $G__17708__a$$inline_442$$.length;) {
        $G__17708__a$$inline_442$$[$G__17708__i$$inline_441_args$$inline_440$$] = arguments[$G__17708__i$$inline_441_args$$inline_440$$ + 0], ++$G__17708__i$$inline_441_args$$inline_440$$;
      }
      $G__17708__i$$inline_441_args$$inline_440$$ = new $cljs$core$IndexedSeq$$($G__17708__a$$inline_442$$, 0);
    }
    return $G__17707__delegate$$inline_436$$.call(this, $G__17708__i$$inline_441_args$$inline_440$$);
  }
  function $G__17707__delegate$$inline_436$$($G__17707$$inline_437$$) {
    return console.log.apply(console, $cljs$core$into_array$cljs$0core$0IFn$0_invoke$0arity$01$$ ? $cljs$core$into_array$cljs$0core$0IFn$0_invoke$0arity$02$$($G__17707$$inline_437$$) : $cljs$core$into_array$$.call(null, $G__17707$$inline_437$$));
  }
  $G__17707$$inline_437$$.$cljs$lang$maxFixedArity$ = 0;
  $G__17707$$inline_437$$.$cljs$lang$applyTo$ = function($G__17707$$inline_437$$) {
    $G__17707$$inline_437$$ = $cljs$core$seq$$($G__17707$$inline_437$$);
    return $G__17707__delegate$$inline_436$$($G__17707$$inline_437$$);
  };
  $G__17707$$inline_437$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__17707__delegate$$inline_436$$;
  return $G__17707$$inline_437$$;
}(), $demo$core$has_index_db$$ = !$cljs$core$not$$(window.openDatabase);
function $demo$core$no_index_db_warning$$() {
  return new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$0center$$, new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$0alert$0alert_DASH_danger$$, new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0h3$$, "IndexedDB Needed"], null), new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$cljs$core$constant$0keyword$0p$$, "IndexedDB gives browsers access to a SQLite-esque database, which the sandbox needs to function. Unfortunately only webkit browsers these days have IndexedDB, if you come back with Chrome, Safari or Opera you'll be able to try the sandbox."], null)], null)], null);
}
function $demo$core$container$$() {
  return $cljs$core$truth_$$($demo$core$has_index_db$$) ? new $cljs$core$PersistentVector$$(null, 4, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$constant$0keyword$0div$$, new $cljs$core$PersistentVector$$(null, 1, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$intro$cmp$$], null), new $cljs$core$PersistentVector$$(null, 1, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$components$db_schema$cmp$$], null), new $cljs$core$PersistentVector$$(null, 1, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, 
  [$demo$components$sandbox$cmp$$], null)], null) : new $cljs$core$PersistentVector$$(null, 1, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$demo$core$no_index_db_warning$$], null);
}
(function() {
  var $c__11125__auto__$$24$$ = $cljs$core$async$chan$cljs$0core$0IFn$0_invoke$0arity$03$$(1);
  $cljs$core$async$impl$dispatch$run$$(function($c__11125__auto__$$24$$) {
    return function() {
      var $f__11126__auto__$$22$$ = function() {
        return function($c__11125__auto__$$24$$) {
          return function() {
            function $c__11125__auto__$$25$$($f__11126__auto__$$22$$) {
              for (;;) {
                var $state__11127__auto__$$22$$;
                a: {
                  try {
                    for (;;) {
                      var $demo$core$init_BANG__$_state_machine__11048__auto____1$$ = $c__11125__auto__$$24$$($f__11126__auto__$$22$$);
                      if (!$cljs$core$keyword_identical_QMARK_$$($demo$core$init_BANG__$_state_machine__11048__auto____1$$, $cljs$core$constant$0keyword$0recur$$)) {
                        $state__11127__auto__$$22$$ = $demo$core$init_BANG__$_state_machine__11048__auto____1$$;
                        break a;
                      }
                    }
                  } catch ($demo$core$init_BANG__$_state_machine__11048__auto____0$$) {
                    if ($demo$core$init_BANG__$_state_machine__11048__auto____0$$ instanceof Object) {
                      $f__11126__auto__$$22$$[5] = $demo$core$init_BANG__$_state_machine__11048__auto____0$$, $cljs$core$async$impl$ioc_helpers$process_exception$$($f__11126__auto__$$22$$), $state__11127__auto__$$22$$ = $cljs$core$constant$0keyword$0recur$$;
                    } else {
                      throw $demo$core$init_BANG__$_state_machine__11048__auto____0$$;
                    }
                  }
                }
                if (!$cljs$core$keyword_identical_QMARK_$$($state__11127__auto__$$22$$, $cljs$core$constant$0keyword$0recur$$)) {
                  return $state__11127__auto__$$22$$;
                }
              }
            }
            function $f__11126__auto__$$22$$() {
              var $c__11125__auto__$$24$$ = [null, null, null, null, null, null, null, null, null];
              $c__11125__auto__$$24$$[0] = $state__11127__auto__$$22$$;
              $c__11125__auto__$$24$$[1] = 1;
              return $c__11125__auto__$$24$$;
            }
            var $state__11127__auto__$$22$$ = null, $state__11127__auto__$$22$$ = function($c__11125__auto__$$24$$) {
              switch(arguments.length) {
                case 0:
                  return $f__11126__auto__$$22$$.call(this);
                case 1:
                  return $c__11125__auto__$$25$$.call(this, $c__11125__auto__$$24$$);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            $state__11127__auto__$$22$$.$cljs$core$IFn$_invoke$arity$0$ = $f__11126__auto__$$22$$;
            $state__11127__auto__$$22$$.$cljs$core$IFn$_invoke$arity$1$ = $c__11125__auto__$$25$$;
            return $state__11127__auto__$$22$$;
          }();
        }(function() {
          return function($c__11125__auto__$$24$$) {
            var $c__11125__auto__$$25$$ = $c__11125__auto__$$24$$[1];
            if (1 === $c__11125__auto__$$25$$) {
              return $c__11125__auto__$$24$$[1] = $cljs$core$truth_$$($demo$core$has_index_db$$) ? 2 : 3, $cljs$core$constant$0keyword$0recur$$;
            }
            if (2 === $c__11125__auto__$$25$$) {
              return $c__11125__auto__$$25$$ = $demo$create_db$create$$(), $cljs$core$async$impl$ioc_helpers$take_BANG_$$($c__11125__auto__$$24$$, 5, $c__11125__auto__$$25$$);
            }
            if (3 === $c__11125__auto__$$25$$) {
              return $c__11125__auto__$$24$$[2] = null, $c__11125__auto__$$24$$[1] = 4, $cljs$core$constant$0keyword$0recur$$;
            }
            if (4 === $c__11125__auto__$$25$$) {
              var $c__11125__auto__$$25$$ = $c__11125__auto__$$24$$[2], $f__11126__auto__$$22$$ = $reagent$core$render_component$cljs$0core$0IFn$0_invoke$0arity$03$$();
              $c__11125__auto__$$24$$[7] = $c__11125__auto__$$25$$;
              return $cljs$core$async$impl$ioc_helpers$return_chan$$($c__11125__auto__$$24$$, $f__11126__auto__$$22$$);
            }
            return 5 === $c__11125__auto__$$25$$ ? ($c__11125__auto__$$25$$ = $cljs_promises$async$consume_pair$$($c__11125__auto__$$24$$[2]), $f__11126__auto__$$22$$ = [$demo$populate_db$populate_table$$("authors", $demo$data$authors$$), $demo$populate_db$populate_table$$("books", $demo$data$books$$), $demo$populate_db$populate_table$$("subjects", $demo$data$subjects$$)], $f__11126__auto__$$22$$ = $cljs_promises$async$pair_port$$(Promise.all($f__11126__auto__$$22$$)), $c__11125__auto__$$24$$[8] = 
            $c__11125__auto__$$25$$, $cljs$core$async$impl$ioc_helpers$take_BANG_$$($c__11125__auto__$$24$$, 6, $f__11126__auto__$$22$$)) : 6 === $c__11125__auto__$$25$$ ? ($c__11125__auto__$$25$$ = $cljs_promises$async$consume_pair$$($c__11125__auto__$$24$$[2]), $c__11125__auto__$$24$$[2] = $c__11125__auto__$$25$$, $c__11125__auto__$$24$$[1] = 4, $cljs$core$constant$0keyword$0recur$$) : null;
          };
        }($c__11125__auto__$$24$$), $c__11125__auto__$$24$$);
      }(), $state__11127__auto__$$22$$ = function() {
        var $state__11127__auto__$$22$$ = $f__11126__auto__$$22$$.$cljs$core$IFn$_invoke$arity$0$ ? $f__11126__auto__$$22$$.$cljs$core$IFn$_invoke$arity$0$() : $f__11126__auto__$$22$$.call(null);
        $state__11127__auto__$$22$$[6] = $c__11125__auto__$$24$$;
        return $state__11127__auto__$$22$$;
      }();
      return $cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped$$($state__11127__auto__$$22$$);
    };
  }($c__11125__auto__$$24$$));
  return $c__11125__auto__$$24$$;
})();

})();
