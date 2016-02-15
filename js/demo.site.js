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
var g, aa = this;
function l(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function ca(a) {
  return a[da] || (a[da] = ++ea);
}
var da = "closure_uid_" + (1E9 * Math.random() >>> 0), ea = 0;
function fa(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ga(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function ha(a, b, c) {
  ha = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? fa : ga;
  return ha.apply(null, arguments);
}
;function ia(a) {
  return Array.prototype.join.call(arguments, "");
}
;function ja(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ka(a, b) {
  null != a && this.append.apply(this, arguments);
}
g = ka.prototype;
g.Ra = "";
g.set = function(a) {
  this.Ra = "" + a;
};
g.append = function(a, b, c) {
  this.Ra += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Ra += arguments[d];
    }
  }
  return this;
};
g.clear = function() {
  this.Ra = "";
};
g.toString = function() {
  return this.Ra;
};
function la(a, b) {
  a.sort(b || na);
}
function oa(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]};
  }
  var d = b || na;
  la(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index;
  });
  for (c = 0;c < a.length;c++) {
    a[c] = a[c].value;
  }
}
function na(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;if ("undefined" === typeof pa) {
  var pa = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
var qa = null;
if ("undefined" === typeof ta) {
  var ta = null
}
function ua() {
  return new n(null, 5, [va, !0, xa, !0, ya, !1, za, !1, Ba, null], null);
}
function r(a) {
  return null != a && !1 !== a;
}
function Ca(a) {
  return a instanceof Array;
}
function Ea(a) {
  return r(a) ? !1 : !0;
}
function u(a, b) {
  return a[l(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function Fa(a) {
  return null == a ? null : a.constructor;
}
function w(a, b) {
  var c = Fa(b), c = r(r(c) ? c.nb : c) ? c.mb : l(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Ga(a) {
  var b = a.mb;
  return r(b) ? b : "" + x(a);
}
var Ha = "undefined" !== typeof Symbol && "function" === l(Symbol) ? Symbol.iterator : "@@iterator";
function Ia(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
function Ja() {
  switch(arguments.length) {
    case 1:
      return Ma(arguments[0]);
    case 2:
      return Ma(arguments[1]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
}
function Na(a) {
  return Ma(a);
}
function Ma(a) {
  function b(a, b) {
    a.push(b);
    return a;
  }
  var c = [];
  return Oa ? Oa(b, c, a) : Ra.call(null, b, c, a);
}
var Ta = {}, Ua = {}, Va = {}, Wa = function Wa(b) {
  if (b ? b.$ : b) {
    return b.$(b);
  }
  var c;
  c = Wa[l(null == b ? null : b)];
  if (!c && (c = Wa._, !c)) {
    throw w("ICounted.-count", b);
  }
  return c.call(null, b);
}, Xa = function Xa(b) {
  if (b ? b.da : b) {
    return b.da(b);
  }
  var c;
  c = Xa[l(null == b ? null : b)];
  if (!c && (c = Xa._, !c)) {
    throw w("IEmptyableCollection.-empty", b);
  }
  return c.call(null, b);
}, Ya = {}, Za = function Za(b, c) {
  if (b ? b.Z : b) {
    return b.Z(b, c);
  }
  var d;
  d = Za[l(null == b ? null : b)];
  if (!d && (d = Za._, !d)) {
    throw w("ICollection.-conj", b);
  }
  return d.call(null, b, c);
}, $a = {}, y = function y() {
  switch(arguments.length) {
    case 2:
      return y.l(arguments[0], arguments[1]);
    case 3:
      return y.w(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
};
y.l = function(a, b) {
  if (a ? a.S : a) {
    return a.S(a, b);
  }
  var c;
  c = y[l(null == a ? null : a)];
  if (!c && (c = y._, !c)) {
    throw w("IIndexed.-nth", a);
  }
  return c.call(null, a, b);
};
y.w = function(a, b, c) {
  if (a ? a.oa : a) {
    return a.oa(a, b, c);
  }
  var d;
  d = y[l(null == a ? null : a)];
  if (!d && (d = y._, !d)) {
    throw w("IIndexed.-nth", a);
  }
  return d.call(null, a, b, c);
};
y.J = 3;
var bb = {}, cb = function cb(b) {
  if (b ? b.ga : b) {
    return b.ga(b);
  }
  var c;
  c = cb[l(null == b ? null : b)];
  if (!c && (c = cb._, !c)) {
    throw w("ISeq.-first", b);
  }
  return c.call(null, b);
}, db = function db(b) {
  if (b ? b.ma : b) {
    return b.ma(b);
  }
  var c;
  c = db[l(null == b ? null : b)];
  if (!c && (c = db._, !c)) {
    throw w("ISeq.-rest", b);
  }
  return c.call(null, b);
}, eb = {}, fb = {}, z = function z() {
  switch(arguments.length) {
    case 2:
      return z.l(arguments[0], arguments[1]);
    case 3:
      return z.w(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
};
z.l = function(a, b) {
  if (a ? a.W : a) {
    return a.W(a, b);
  }
  var c;
  c = z[l(null == a ? null : a)];
  if (!c && (c = z._, !c)) {
    throw w("ILookup.-lookup", a);
  }
  return c.call(null, a, b);
};
z.w = function(a, b, c) {
  if (a ? a.O : a) {
    return a.O(a, b, c);
  }
  var d;
  d = z[l(null == a ? null : a)];
  if (!d && (d = z._, !d)) {
    throw w("ILookup.-lookup", a);
  }
  return d.call(null, a, b, c);
};
z.J = 3;
var gb = function gb(b, c) {
  if (b ? b.Gb : b) {
    return b.Gb(b, c);
  }
  var d;
  d = gb[l(null == b ? null : b)];
  if (!d && (d = gb._, !d)) {
    throw w("IAssociative.-contains-key?", b);
  }
  return d.call(null, b, c);
}, hb = function hb(b, c, d) {
  if (b ? b.cb : b) {
    return b.cb(b, c, d);
  }
  var e;
  e = hb[l(null == b ? null : b)];
  if (!e && (e = hb._, !e)) {
    throw w("IAssociative.-assoc", b);
  }
  return e.call(null, b, c, d);
}, jb = {}, kb = function kb(b, c) {
  if (b ? b.Kb : b) {
    return b.Kb(b, c);
  }
  var d;
  d = kb[l(null == b ? null : b)];
  if (!d && (d = kb._, !d)) {
    throw w("IMap.-dissoc", b);
  }
  return d.call(null, b, c);
}, lb = {}, mb = function mb(b) {
  if (b ? b.Lb : b) {
    return b.Lb();
  }
  var c;
  c = mb[l(null == b ? null : b)];
  if (!c && (c = mb._, !c)) {
    throw w("IMapEntry.-key", b);
  }
  return c.call(null, b);
}, nb = function nb(b) {
  if (b ? b.Mb : b) {
    return b.Mb();
  }
  var c;
  c = nb[l(null == b ? null : b)];
  if (!c && (c = nb._, !c)) {
    throw w("IMapEntry.-val", b);
  }
  return c.call(null, b);
}, ob = {}, pb = function pb(b) {
  if (b ? b.hb : b) {
    return b.hb(b);
  }
  var c;
  c = pb[l(null == b ? null : b)];
  if (!c && (c = pb._, !c)) {
    throw w("IStack.-peek", b);
  }
  return c.call(null, b);
}, qb = function qb(b) {
  if (b ? b.ib : b) {
    return b.ib(b);
  }
  var c;
  c = qb[l(null == b ? null : b)];
  if (!c && (c = qb._, !c)) {
    throw w("IStack.-pop", b);
  }
  return c.call(null, b);
}, rb = {}, sb = function sb(b, c, d) {
  if (b ? b.Sb : b) {
    return b.Sb(b, c, d);
  }
  var e;
  e = sb[l(null == b ? null : b)];
  if (!e && (e = sb._, !e)) {
    throw w("IVector.-assoc-n", b);
  }
  return e.call(null, b, c, d);
}, tb = function tb(b) {
  if (b ? b.Wa : b) {
    return b.Wa(b);
  }
  var c;
  c = tb[l(null == b ? null : b)];
  if (!c && (c = tb._, !c)) {
    throw w("IDeref.-deref", b);
  }
  return c.call(null, b);
}, ub = {}, vb = function vb(b) {
  if (b ? b.T : b) {
    return b.T(b);
  }
  var c;
  c = vb[l(null == b ? null : b)];
  if (!c && (c = vb._, !c)) {
    throw w("IMeta.-meta", b);
  }
  return c.call(null, b);
}, xb = {}, yb = function yb(b, c) {
  if (b ? b.X : b) {
    return b.X(b, c);
  }
  var d;
  d = yb[l(null == b ? null : b)];
  if (!d && (d = yb._, !d)) {
    throw w("IWithMeta.-with-meta", b);
  }
  return d.call(null, b, c);
}, zb = {}, Ab = function Ab() {
  switch(arguments.length) {
    case 2:
      return Ab.l(arguments[0], arguments[1]);
    case 3:
      return Ab.w(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
};
Ab.l = function(a, b) {
  if (a ? a.ea : a) {
    return a.ea(a, b);
  }
  var c;
  c = Ab[l(null == a ? null : a)];
  if (!c && (c = Ab._, !c)) {
    throw w("IReduce.-reduce", a);
  }
  return c.call(null, a, b);
};
Ab.w = function(a, b, c) {
  if (a ? a.fa : a) {
    return a.fa(a, b, c);
  }
  var d;
  d = Ab[l(null == a ? null : a)];
  if (!d && (d = Ab._, !d)) {
    throw w("IReduce.-reduce", a);
  }
  return d.call(null, a, b, c);
};
Ab.J = 3;
var Bb = function Bb(b, c, d) {
  if (b ? b.fb : b) {
    return b.fb(b, c, d);
  }
  var e;
  e = Bb[l(null == b ? null : b)];
  if (!e && (e = Bb._, !e)) {
    throw w("IKVReduce.-kv-reduce", b);
  }
  return e.call(null, b, c, d);
}, Cb = function Cb(b, c) {
  if (b ? b.G : b) {
    return b.G(b, c);
  }
  var d;
  d = Cb[l(null == b ? null : b)];
  if (!d && (d = Cb._, !d)) {
    throw w("IEquiv.-equiv", b);
  }
  return d.call(null, b, c);
}, Db = function Db(b) {
  if (b ? b.R : b) {
    return b.R(b);
  }
  var c;
  c = Db[l(null == b ? null : b)];
  if (!c && (c = Db._, !c)) {
    throw w("IHash.-hash", b);
  }
  return c.call(null, b);
}, Eb = {}, Fb = function Fb(b) {
  if (b ? b.ba : b) {
    return b.ba(b);
  }
  var c;
  c = Fb[l(null == b ? null : b)];
  if (!c && (c = Fb._, !c)) {
    throw w("ISeqable.-seq", b);
  }
  return c.call(null, b);
}, Gb = {}, A = function A(b, c) {
  if (b ? b.ec : b) {
    return b.ec(0, c);
  }
  var d;
  d = A[l(null == b ? null : b)];
  if (!d && (d = A._, !d)) {
    throw w("IWriter.-write", b);
  }
  return d.call(null, b, c);
}, Hb = {}, Ib = function Ib(b, c, d) {
  if (b ? b.U : b) {
    return b.U(b, c, d);
  }
  var e;
  e = Ib[l(null == b ? null : b)];
  if (!e && (e = Ib._, !e)) {
    throw w("IPrintWithWriter.-pr-writer", b);
  }
  return e.call(null, b, c, d);
}, Jb = function Jb(b, c, d) {
  if (b ? b.xb : b) {
    return b.xb(b, c, d);
  }
  var e;
  e = Jb[l(null == b ? null : b)];
  if (!e && (e = Jb._, !e)) {
    throw w("IWatchable.-notify-watches", b);
  }
  return e.call(null, b, c, d);
}, Kb = function Kb(b, c, d) {
  if (b ? b.wb : b) {
    return b.wb(b, c, d);
  }
  var e;
  e = Kb[l(null == b ? null : b)];
  if (!e && (e = Kb._, !e)) {
    throw w("IWatchable.-add-watch", b);
  }
  return e.call(null, b, c, d);
}, Lb = function Lb(b, c) {
  if (b ? b.yb : b) {
    return b.yb(b, c);
  }
  var d;
  d = Lb[l(null == b ? null : b)];
  if (!d && (d = Lb._, !d)) {
    throw w("IWatchable.-remove-watch", b);
  }
  return d.call(null, b, c);
}, Mb = function Mb(b) {
  if (b ? b.Xa : b) {
    return b.Xa(b);
  }
  var c;
  c = Mb[l(null == b ? null : b)];
  if (!c && (c = Mb._, !c)) {
    throw w("IEditableCollection.-as-transient", b);
  }
  return c.call(null, b);
}, Ob = function Ob(b, c) {
  if (b ? b.kb : b) {
    return b.kb(b, c);
  }
  var d;
  d = Ob[l(null == b ? null : b)];
  if (!d && (d = Ob._, !d)) {
    throw w("ITransientCollection.-conj!", b);
  }
  return d.call(null, b, c);
}, Pb = function Pb(b) {
  if (b ? b.lb : b) {
    return b.lb(b);
  }
  var c;
  c = Pb[l(null == b ? null : b)];
  if (!c && (c = Pb._, !c)) {
    throw w("ITransientCollection.-persistent!", b);
  }
  return c.call(null, b);
}, Qb = function Qb(b, c, d) {
  if (b ? b.jb : b) {
    return b.jb(b, c, d);
  }
  var e;
  e = Qb[l(null == b ? null : b)];
  if (!e && (e = Qb._, !e)) {
    throw w("ITransientAssociative.-assoc!", b);
  }
  return e.call(null, b, c, d);
}, Rb = function Rb(b, c, d) {
  if (b ? b.dc : b) {
    return b.dc(0, c, d);
  }
  var e;
  e = Rb[l(null == b ? null : b)];
  if (!e && (e = Rb._, !e)) {
    throw w("ITransientVector.-assoc-n!", b);
  }
  return e.call(null, b, c, d);
}, Sb = {}, Tb = function Tb(b, c) {
  if (b ? b.Va : b) {
    return b.Va(b, c);
  }
  var d;
  d = Tb[l(null == b ? null : b)];
  if (!d && (d = Tb._, !d)) {
    throw w("IComparable.-compare", b);
  }
  return d.call(null, b, c);
}, Ub = function Ub(b) {
  if (b ? b.bc : b) {
    return b.bc();
  }
  var c;
  c = Ub[l(null == b ? null : b)];
  if (!c && (c = Ub._, !c)) {
    throw w("IChunk.-drop-first", b);
  }
  return c.call(null, b);
}, Vb = function Vb(b) {
  if (b ? b.Ib : b) {
    return b.Ib(b);
  }
  var c;
  c = Vb[l(null == b ? null : b)];
  if (!c && (c = Vb._, !c)) {
    throw w("IChunkedSeq.-chunked-first", b);
  }
  return c.call(null, b);
}, Wb = function Wb(b) {
  if (b ? b.Jb : b) {
    return b.Jb(b);
  }
  var c;
  c = Wb[l(null == b ? null : b)];
  if (!c && (c = Wb._, !c)) {
    throw w("IChunkedSeq.-chunked-rest", b);
  }
  return c.call(null, b);
}, Yb = function Yb(b) {
  if (b ? b.Hb : b) {
    return b.Hb(b);
  }
  var c;
  c = Yb[l(null == b ? null : b)];
  if (!c && (c = Yb._, !c)) {
    throw w("IChunkedNext.-chunked-next", b);
  }
  return c.call(null, b);
}, Zb = function Zb(b, c) {
  if (b ? b.Nb : b) {
    return b.Nb(b, c);
  }
  var d;
  d = Zb[l(null == b ? null : b)];
  if (!d && (d = Zb._, !d)) {
    throw w("IReset.-reset!", b);
  }
  return d.call(null, b, c);
}, $b = function $b() {
  switch(arguments.length) {
    case 2:
      return $b.l(arguments[0], arguments[1]);
    case 3:
      return $b.w(arguments[0], arguments[1], arguments[2]);
    case 4:
      return $b.K(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return $b.V(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
};
$b.l = function(a, b) {
  if (a ? a.Ob : a) {
    return a.Ob(a, b);
  }
  var c;
  c = $b[l(null == a ? null : a)];
  if (!c && (c = $b._, !c)) {
    throw w("ISwap.-swap!", a);
  }
  return c.call(null, a, b);
};
$b.w = function(a, b, c) {
  if (a ? a.Pb : a) {
    return a.Pb(a, b, c);
  }
  var d;
  d = $b[l(null == a ? null : a)];
  if (!d && (d = $b._, !d)) {
    throw w("ISwap.-swap!", a);
  }
  return d.call(null, a, b, c);
};
$b.K = function(a, b, c, d) {
  if (a ? a.Qb : a) {
    return a.Qb(a, b, c, d);
  }
  var e;
  e = $b[l(null == a ? null : a)];
  if (!e && (e = $b._, !e)) {
    throw w("ISwap.-swap!", a);
  }
  return e.call(null, a, b, c, d);
};
$b.V = function(a, b, c, d, e) {
  if (a ? a.Rb : a) {
    return a.Rb(a, b, c, d, e);
  }
  var f;
  f = $b[l(null == a ? null : a)];
  if (!f && (f = $b._, !f)) {
    throw w("ISwap.-swap!", a);
  }
  return f.call(null, a, b, c, d, e);
};
$b.J = 5;
var ac = function ac(b) {
  if (b ? b.ub : b) {
    return b.ub(b);
  }
  var c;
  c = ac[l(null == b ? null : b)];
  if (!c && (c = ac._, !c)) {
    throw w("IIterable.-iterator", b);
  }
  return c.call(null, b);
};
function bc(a) {
  this.Gc = a;
  this.B = 1073741824;
  this.H = 0;
}
bc.prototype.ec = function(a, b) {
  return this.Gc.append(b);
};
function cc(a) {
  var b = new ka;
  a.U(null, new bc(b), ua());
  return "" + x(b);
}
var dc = "undefined" !== typeof Math.imul && 0 !== Math.imul(4294967295, 5) ? function(a, b) {
  return Math.imul(a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function ec(a) {
  a = dc(a | 0, -862048943);
  return dc(a << 15 | a >>> -15, 461845907);
}
function fc(a, b) {
  var c = (a | 0) ^ (b | 0);
  return dc(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function gc(a, b) {
  var c = (a | 0) ^ b, c = dc(c ^ c >>> 16, -2048144789), c = dc(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function hc(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = fc(c, ec(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ ec(a.charCodeAt(a.length - 1)) : b;
  return gc(b, dc(2, a.length));
}
var ic = {}, jc = 0;
function kc(a) {
  255 < jc && (ic = {}, jc = 0);
  var b = ic[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = dc(31, d) + a.charCodeAt(c), c = e
            } else {
              b = d;
              break a;
            }
          }
        } else {
          b = 0;
        }
      } else {
        b = 0;
      }
    }
    ic[a] = b;
    jc += 1;
  }
  return a = b;
}
function lc(a) {
  a && (a.B & 4194304 || a.Mc) ? a = a.R(null) : "number" === typeof a ? a = Math.floor(a) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = kc(a), 0 !== a && (a = ec(a), a = fc(0, a), a = gc(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : Db(a);
  return a;
}
function mc(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function nc(a, b) {
  if (a.xa === b.xa) {
    return 0;
  }
  var c = Ea(a.ja);
  if (r(c ? b.ja : c)) {
    return -1;
  }
  if (r(a.ja)) {
    if (Ea(b.ja)) {
      return 1;
    }
    c = na(a.ja, b.ja);
    return 0 === c ? na(a.name, b.name) : c;
  }
  return na(a.name, b.name);
}
function D(a, b, c, d, e) {
  this.ja = a;
  this.name = b;
  this.xa = c;
  this._hash = d;
  this.ka = e;
  this.B = 2154168321;
  this.H = 4096;
}
g = D.prototype;
g.toString = function() {
  return this.xa;
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.G = function(a, b) {
  return b instanceof D ? this.xa === b.xa : !1;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return z.w(c, this, null);
      case 3:
        return z.w(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = function(a, c) {
    return z.w(c, this, null);
  };
  a.w = function(a, c, d) {
    return z.w(c, this, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ia(b)));
};
g.h = function(a) {
  return z.w(a, this, null);
};
g.l = function(a, b) {
  return z.w(a, this, b);
};
g.T = function() {
  return this.ka;
};
g.X = function(a, b) {
  return new D(this.ja, this.name, this.xa, this._hash, b);
};
g.R = function() {
  var a = this._hash;
  return null != a ? a : this._hash = a = mc(hc(this.name), kc(this.ja));
};
g.U = function(a, b) {
  return A(b, this.xa);
};
function oc() {
  var a = [x("reagent"), x(pc.l(qc, rc))].join("");
  return a instanceof D ? a : new D(null, a, a, null, null);
}
function G(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.B & 8388608 || a.Oc)) {
    return a.ba(null);
  }
  if (Ca(a) || "string" === typeof a) {
    return 0 === a.length ? null : new I(a, 0);
  }
  if (u(Eb, a)) {
    return Fb(a);
  }
  throw Error([x(a), x(" is not ISeqable")].join(""));
}
function J(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.B & 64 || a.gb)) {
    return a.ga(null);
  }
  a = G(a);
  return null == a ? null : cb(a);
}
function sc(a) {
  return null != a ? a && (a.B & 64 || a.gb) ? a.ma(null) : (a = G(a)) ? db(a) : K : K;
}
function M(a) {
  return null == a ? null : a && (a.B & 128 || a.vb) ? a.la(null) : G(sc(a));
}
var N = function N() {
  switch(arguments.length) {
    case 1:
      return N.h(arguments[0]);
    case 2:
      return N.l(arguments[0], arguments[1]);
    default:
      return N.C(arguments[0], arguments[1], new I(Array.prototype.slice.call(arguments, 2), 0));
  }
};
N.h = function() {
  return !0;
};
N.l = function(a, b) {
  return null == a ? null == b : a === b || Cb(a, b);
};
N.C = function(a, b, c) {
  for (;;) {
    if (N.l(a, b)) {
      if (M(c)) {
        a = b, b = J(c), c = M(c);
      } else {
        return N.l(b, J(c));
      }
    } else {
      return !1;
    }
  }
};
N.I = function(a) {
  var b = J(a), c = M(a);
  a = J(c);
  c = M(c);
  return N.C(b, a, c);
};
N.J = 2;
function tc(a) {
  this.s = a;
}
tc.prototype.next = function() {
  if (null != this.s) {
    var a = J(this.s);
    this.s = M(this.s);
    return {value:a, done:!1};
  }
  return {value:null, done:!0};
};
function uc(a) {
  return new tc(G(a));
}
function wc(a, b) {
  var c = ec(a), c = fc(0, c);
  return gc(c, b);
}
function xc(a) {
  var b = 0, c = 1;
  for (a = G(a);;) {
    if (null != a) {
      b += 1, c = dc(31, c) + lc(J(a)) | 0, a = M(a);
    } else {
      return wc(c, b);
    }
  }
}
var yc = wc(1, 0);
function zc(a) {
  var b = 0, c = 0;
  for (a = G(a);;) {
    if (null != a) {
      b += 1, c = c + lc(J(a)) | 0, a = M(a);
    } else {
      return wc(c, b);
    }
  }
}
var Bc = wc(0, 0);
Va["null"] = !0;
Wa["null"] = function() {
  return 0;
};
Date.prototype.G = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
Date.prototype.eb = !0;
Date.prototype.Va = function(a, b) {
  if (b instanceof Date) {
    return na(this.valueOf(), b.valueOf());
  }
  throw Error([x("Cannot compare "), x(this), x(" to "), x(b)].join(""));
};
Cb.number = function(a, b) {
  return a === b;
};
Ta["function"] = !0;
ub["function"] = !0;
vb["function"] = function() {
  return null;
};
Db._ = function(a) {
  return ca(a);
};
function rc(a) {
  return a + 1;
}
function Cc(a) {
  this.ca = a;
  this.B = 32768;
  this.H = 0;
}
Cc.prototype.Wa = function() {
  return this.ca;
};
function Dc(a) {
  return a instanceof Cc;
}
function O(a) {
  return tb(a);
}
function Ec(a, b) {
  var c = Wa(a);
  if (0 === c) {
    return b.D ? b.D() : b.call(null);
  }
  for (var d = y.l(a, 0), e = 1;;) {
    if (e < c) {
      var f = y.l(a, e), d = b.l ? b.l(d, f) : b.call(null, d, f);
      if (Dc(d)) {
        return tb(d);
      }
      e += 1;
    } else {
      return d;
    }
  }
}
function Fc(a, b, c) {
  var d = Wa(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = y.l(a, c), e = b.l ? b.l(e, f) : b.call(null, e, f);
      if (Dc(e)) {
        return tb(e);
      }
      c += 1;
    } else {
      return e;
    }
  }
}
function Gc(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.D ? b.D() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var f = a[e], d = b.l ? b.l(d, f) : b.call(null, d, f);
      if (Dc(d)) {
        return tb(d);
      }
      e += 1;
    } else {
      return d;
    }
  }
}
function Hc(a, b, c) {
  var d = a.length, e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = a[c], e = b.l ? b.l(e, f) : b.call(null, e, f);
      if (Dc(e)) {
        return tb(e);
      }
      c += 1;
    } else {
      return e;
    }
  }
}
function Ic(a, b, c, d) {
  for (var e = a.length;;) {
    if (d < e) {
      var f = a[d];
      c = b.l ? b.l(c, f) : b.call(null, c, f);
      if (Dc(c)) {
        return tb(c);
      }
      d += 1;
    } else {
      return c;
    }
  }
}
function Jc(a) {
  return a ? a.B & 2 || a.pc ? !0 : a.B ? !1 : u(Va, a) : u(Va, a);
}
function Kc(a) {
  return a ? a.B & 16 || a.cc ? !0 : a.B ? !1 : u($a, a) : u($a, a);
}
function Lc(a, b) {
  this.o = a;
  this.i = b;
}
Lc.prototype.Xb = function() {
  return this.i < this.o.length;
};
Lc.prototype.next = function() {
  var a = this.o[this.i];
  this.i += 1;
  return a;
};
function I(a, b) {
  this.o = a;
  this.i = b;
  this.B = 166199550;
  this.H = 8192;
}
g = I.prototype;
g.toString = function() {
  return cc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.S = function(a, b) {
  var c = b + this.i;
  return c < this.o.length ? this.o[c] : null;
};
g.oa = function(a, b, c) {
  a = b + this.i;
  return a < this.o.length ? this.o[a] : c;
};
g.ub = function() {
  return new Lc(this.o, this.i);
};
g.la = function() {
  return this.i + 1 < this.o.length ? new I(this.o, this.i + 1) : null;
};
g.$ = function() {
  var a = this.o.length - this.i;
  return 0 > a ? 0 : a;
};
g.R = function() {
  return xc(this);
};
g.G = function(a, b) {
  return Mc.l ? Mc.l(this, b) : Mc.call(null, this, b);
};
g.da = function() {
  return K;
};
g.ea = function(a, b) {
  return Ic(this.o, b, this.o[this.i], this.i + 1);
};
g.fa = function(a, b, c) {
  return Ic(this.o, b, c, this.i);
};
g.ga = function() {
  return this.o[this.i];
};
g.ma = function() {
  return this.i + 1 < this.o.length ? new I(this.o, this.i + 1) : K;
};
g.ba = function() {
  return this.i < this.o.length ? this : null;
};
g.Z = function(a, b) {
  return Q.l ? Q.l(b, this) : Q.call(null, b, this);
};
I.prototype[Ha] = function() {
  return uc(this);
};
function Nc(a, b) {
  return b < a.length ? new I(a, b) : null;
}
function R() {
  switch(arguments.length) {
    case 1:
      return Nc(arguments[0], 0);
    case 2:
      return Nc(arguments[0], arguments[1]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
}
function Oc(a) {
  for (;;) {
    var b = M(a);
    if (null != b) {
      a = b;
    } else {
      return J(a);
    }
  }
}
Cb._ = function(a, b) {
  return a === b;
};
var Pc = function Pc() {
  switch(arguments.length) {
    case 0:
      return Pc.D();
    case 1:
      return Pc.h(arguments[0]);
    case 2:
      return Pc.l(arguments[0], arguments[1]);
    default:
      return Pc.C(arguments[0], arguments[1], new I(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Pc.D = function() {
  return Rc;
};
Pc.h = function(a) {
  return a;
};
Pc.l = function(a, b) {
  return null != a ? Za(a, b) : Za(K, b);
};
Pc.C = function(a, b, c) {
  for (;;) {
    if (r(c)) {
      a = Pc.l(a, b), b = J(c), c = M(c);
    } else {
      return Pc.l(a, b);
    }
  }
};
Pc.I = function(a) {
  var b = J(a), c = M(a);
  a = J(c);
  c = M(c);
  return Pc.C(b, a, c);
};
Pc.J = 2;
function S(a) {
  if (null != a) {
    if (a && (a.B & 2 || a.pc)) {
      a = a.$(null);
    } else {
      if (Ca(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (u(Va, a)) {
            a = Wa(a);
          } else {
            a: {
              a = G(a);
              for (var b = 0;;) {
                if (Jc(a)) {
                  a = b + Wa(a);
                  break a;
                }
                a = M(a);
                b += 1;
              }
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
function Sc(a, b) {
  for (var c = null;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return G(a) ? J(a) : c;
    }
    if (Kc(a)) {
      return y.w(a, b, c);
    }
    if (G(a)) {
      var d = M(a), e = b - 1;
      a = d;
      b = e;
    } else {
      return c;
    }
  }
}
function Uc(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number");
  }
  if (null == a) {
    return a;
  }
  if (a && (a.B & 16 || a.cc)) {
    return a.S(null, b);
  }
  if (Ca(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (u($a, a)) {
    return y.l(a, b);
  }
  if (a ? a.B & 64 || a.gb || (a.B ? 0 : u(bb, a)) : u(bb, a)) {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        if (null == c) {
          throw Error("Index out of bounds");
        }
        if (0 === d) {
          if (G(c)) {
            c = J(c);
            break a;
          }
          throw Error("Index out of bounds");
        }
        if (Kc(c)) {
          c = y.l(c, d);
          break a;
        }
        if (G(c)) {
          c = M(c), --d;
        } else {
          throw Error("Index out of bounds");
        }
      }
    }
    return c;
  }
  throw Error([x("nth not supported on this type "), x(Ga(Fa(a)))].join(""));
}
function T(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number.");
  }
  if (null == a) {
    return null;
  }
  if (a && (a.B & 16 || a.cc)) {
    return a.oa(null, b, null);
  }
  if (Ca(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (u($a, a)) {
    return y.l(a, b);
  }
  if (a ? a.B & 64 || a.gb || (a.B ? 0 : u(bb, a)) : u(bb, a)) {
    return Sc(a, b);
  }
  throw Error([x("nth not supported on this type "), x(Ga(Fa(a)))].join(""));
}
function Vc(a, b) {
  return null == a ? null : a && (a.B & 256 || a.uc) ? a.W(null, b) : Ca(a) ? b < a.length ? a[b | 0] : null : "string" === typeof a ? b < a.length ? a[b | 0] : null : u(fb, a) ? z.l(a, b) : null;
}
function Wc(a, b, c) {
  return null != a ? a && (a.B & 256 || a.uc) ? a.O(null, b, c) : Ca(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : u(fb, a) ? z.w(a, b, c) : c : c;
}
var Xc = function Xc() {
  switch(arguments.length) {
    case 3:
      return Xc.w(arguments[0], arguments[1], arguments[2]);
    default:
      return Xc.C(arguments[0], arguments[1], arguments[2], new I(Array.prototype.slice.call(arguments, 3), 0));
  }
};
Xc.w = function(a, b, c) {
  if (null != a) {
    a = hb(a, b, c);
  } else {
    a: {
      a = [b];
      c = [c];
      b = a.length;
      var d = 0, e;
      for (e = Mb(Yc);;) {
        if (d < b) {
          var f = d + 1;
          e = e.jb(null, a[d], c[d]);
          d = f;
        } else {
          a = Pb(e);
          break a;
        }
      }
    }
  }
  return a;
};
Xc.C = function(a, b, c, d) {
  for (;;) {
    if (a = Xc.w(a, b, c), r(d)) {
      b = J(d), c = J(M(d)), d = M(M(d));
    } else {
      return a;
    }
  }
};
Xc.I = function(a) {
  var b = J(a), c = M(a);
  a = J(c);
  var d = M(c), c = J(d), d = M(d);
  return Xc.C(b, a, c, d);
};
Xc.J = 3;
var Zc = function Zc() {
  switch(arguments.length) {
    case 1:
      return Zc.h(arguments[0]);
    case 2:
      return Zc.l(arguments[0], arguments[1]);
    default:
      return Zc.C(arguments[0], arguments[1], new I(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Zc.h = function(a) {
  return a;
};
Zc.l = function(a, b) {
  return null == a ? null : kb(a, b);
};
Zc.C = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = Zc.l(a, b);
    if (r(c)) {
      b = J(c), c = M(c);
    } else {
      return a;
    }
  }
};
Zc.I = function(a) {
  var b = J(a), c = M(a);
  a = J(c);
  c = M(c);
  return Zc.C(b, a, c);
};
Zc.J = 2;
function $c(a) {
  var b = "function" == l(a);
  return r(b) ? b : a ? r(r(null) ? null : a.oc) ? !0 : a.Ub ? !1 : u(Ta, a) : u(Ta, a);
}
function ad(a, b) {
  this.v = a;
  this.meta = b;
  this.B = 393217;
  this.H = 0;
}
g = ad.prototype;
g.T = function() {
  return this.meta;
};
g.X = function(a, b) {
  return new ad(this.v, b);
};
g.oc = !0;
g.call = function() {
  function a(a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P, F, ba, Qa) {
    a = this.v;
    return bd.tb ? bd.tb(a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P, F, ba, Qa) : bd.call(null, a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P, F, ba, Qa);
  }
  function b(a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P, F, ba) {
    a = this;
    return a.v.Ia ? a.v.Ia(b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P, F, ba) : a.v.call(null, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P, F, ba);
  }
  function c(a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P, F) {
    a = this;
    return a.v.Ha ? a.v.Ha(b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P, F) : a.v.call(null, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P, F);
  }
  function d(a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P) {
    a = this;
    return a.v.Ga ? a.v.Ga(b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P) : a.v.call(null, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P);
  }
  function e(a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L) {
    a = this;
    return a.v.Fa ? a.v.Fa(b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L) : a.v.call(null, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L);
  }
  function f(a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H) {
    a = this;
    return a.v.Ea ? a.v.Ea(b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H) : a.v.call(null, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H);
  }
  function h(a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E) {
    a = this;
    return a.v.Da ? a.v.Da(b, c, d, e, f, h, k, m, q, p, t, v, B, C, E) : a.v.call(null, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E);
  }
  function k(a, b, c, d, e, f, h, k, m, q, p, t, v, B, C) {
    a = this;
    return a.v.Ca ? a.v.Ca(b, c, d, e, f, h, k, m, q, p, t, v, B, C) : a.v.call(null, b, c, d, e, f, h, k, m, q, p, t, v, B, C);
  }
  function m(a, b, c, d, e, f, h, k, m, q, p, t, v, B) {
    a = this;
    return a.v.Ba ? a.v.Ba(b, c, d, e, f, h, k, m, q, p, t, v, B) : a.v.call(null, b, c, d, e, f, h, k, m, q, p, t, v, B);
  }
  function q(a, b, c, d, e, f, h, k, m, q, p, t, v) {
    a = this;
    return a.v.Aa ? a.v.Aa(b, c, d, e, f, h, k, m, q, p, t, v) : a.v.call(null, b, c, d, e, f, h, k, m, q, p, t, v);
  }
  function p(a, b, c, d, e, f, h, k, m, q, p, t) {
    a = this;
    return a.v.za ? a.v.za(b, c, d, e, f, h, k, m, q, p, t) : a.v.call(null, b, c, d, e, f, h, k, m, q, p, t);
  }
  function t(a, b, c, d, e, f, h, k, m, q, p) {
    a = this;
    return a.v.ya ? a.v.ya(b, c, d, e, f, h, k, m, q, p) : a.v.call(null, b, c, d, e, f, h, k, m, q, p);
  }
  function v(a, b, c, d, e, f, h, k, m, q) {
    a = this;
    return a.v.La ? a.v.La(b, c, d, e, f, h, k, m, q) : a.v.call(null, b, c, d, e, f, h, k, m, q);
  }
  function B(a, b, c, d, e, f, h, k, m) {
    a = this;
    return a.v.Ka ? a.v.Ka(b, c, d, e, f, h, k, m) : a.v.call(null, b, c, d, e, f, h, k, m);
  }
  function C(a, b, c, d, e, f, h, k) {
    a = this;
    return a.v.Ja ? a.v.Ja(b, c, d, e, f, h, k) : a.v.call(null, b, c, d, e, f, h, k);
  }
  function E(a, b, c, d, e, f, h) {
    a = this;
    return a.v.sa ? a.v.sa(b, c, d, e, f, h) : a.v.call(null, b, c, d, e, f, h);
  }
  function H(a, b, c, d, e, f) {
    a = this;
    return a.v.V ? a.v.V(b, c, d, e, f) : a.v.call(null, b, c, d, e, f);
  }
  function L(a, b, c, d, e) {
    a = this;
    return a.v.K ? a.v.K(b, c, d, e) : a.v.call(null, b, c, d, e);
  }
  function P(a, b, c, d) {
    a = this;
    return a.v.w ? a.v.w(b, c, d) : a.v.call(null, b, c, d);
  }
  function ba(a, b, c) {
    a = this;
    return a.v.l ? a.v.l(b, c) : a.v.call(null, b, c);
  }
  function La(a, b) {
    a = this;
    return a.v.h ? a.v.h(b) : a.v.call(null, b);
  }
  function Qa(a) {
    a = this;
    return a.v.D ? a.v.D() : a.v.call(null);
  }
  var F = null, F = function(F, ma, ra, sa, wa, Aa, Da, Ka, Pa, Sa, ab, ib, wb, Nb, Xb, vc, Qc, rd, he, df, Jg, Ei) {
    switch(arguments.length) {
      case 1:
        return Qa.call(this, F);
      case 2:
        return La.call(this, F, ma);
      case 3:
        return ba.call(this, F, ma, ra);
      case 4:
        return P.call(this, F, ma, ra, sa);
      case 5:
        return L.call(this, F, ma, ra, sa, wa);
      case 6:
        return H.call(this, F, ma, ra, sa, wa, Aa);
      case 7:
        return E.call(this, F, ma, ra, sa, wa, Aa, Da);
      case 8:
        return C.call(this, F, ma, ra, sa, wa, Aa, Da, Ka);
      case 9:
        return B.call(this, F, ma, ra, sa, wa, Aa, Da, Ka, Pa);
      case 10:
        return v.call(this, F, ma, ra, sa, wa, Aa, Da, Ka, Pa, Sa);
      case 11:
        return t.call(this, F, ma, ra, sa, wa, Aa, Da, Ka, Pa, Sa, ab);
      case 12:
        return p.call(this, F, ma, ra, sa, wa, Aa, Da, Ka, Pa, Sa, ab, ib);
      case 13:
        return q.call(this, F, ma, ra, sa, wa, Aa, Da, Ka, Pa, Sa, ab, ib, wb);
      case 14:
        return m.call(this, F, ma, ra, sa, wa, Aa, Da, Ka, Pa, Sa, ab, ib, wb, Nb);
      case 15:
        return k.call(this, F, ma, ra, sa, wa, Aa, Da, Ka, Pa, Sa, ab, ib, wb, Nb, Xb);
      case 16:
        return h.call(this, F, ma, ra, sa, wa, Aa, Da, Ka, Pa, Sa, ab, ib, wb, Nb, Xb, vc);
      case 17:
        return f.call(this, F, ma, ra, sa, wa, Aa, Da, Ka, Pa, Sa, ab, ib, wb, Nb, Xb, vc, Qc);
      case 18:
        return e.call(this, F, ma, ra, sa, wa, Aa, Da, Ka, Pa, Sa, ab, ib, wb, Nb, Xb, vc, Qc, rd);
      case 19:
        return d.call(this, F, ma, ra, sa, wa, Aa, Da, Ka, Pa, Sa, ab, ib, wb, Nb, Xb, vc, Qc, rd, he);
      case 20:
        return c.call(this, F, ma, ra, sa, wa, Aa, Da, Ka, Pa, Sa, ab, ib, wb, Nb, Xb, vc, Qc, rd, he, df);
      case 21:
        return b.call(this, F, ma, ra, sa, wa, Aa, Da, Ka, Pa, Sa, ab, ib, wb, Nb, Xb, vc, Qc, rd, he, df, Jg);
      case 22:
        return a.call(this, F, ma, ra, sa, wa, Aa, Da, Ka, Pa, Sa, ab, ib, wb, Nb, Xb, vc, Qc, rd, he, df, Jg, Ei);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  F.h = Qa;
  F.l = La;
  F.w = ba;
  F.K = P;
  F.V = L;
  F.sa = H;
  F.Ja = E;
  F.Ka = C;
  F.La = B;
  F.ya = v;
  F.za = t;
  F.Aa = p;
  F.Ba = q;
  F.Ca = m;
  F.Da = k;
  F.Ea = h;
  F.Fa = f;
  F.Ga = e;
  F.Ha = d;
  F.Ia = c;
  F.tc = b;
  F.tb = a;
  return F;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ia(b)));
};
g.D = function() {
  return this.v.D ? this.v.D() : this.v.call(null);
};
g.h = function(a) {
  return this.v.h ? this.v.h(a) : this.v.call(null, a);
};
g.l = function(a, b) {
  return this.v.l ? this.v.l(a, b) : this.v.call(null, a, b);
};
g.w = function(a, b, c) {
  return this.v.w ? this.v.w(a, b, c) : this.v.call(null, a, b, c);
};
g.K = function(a, b, c, d) {
  return this.v.K ? this.v.K(a, b, c, d) : this.v.call(null, a, b, c, d);
};
g.V = function(a, b, c, d, e) {
  return this.v.V ? this.v.V(a, b, c, d, e) : this.v.call(null, a, b, c, d, e);
};
g.sa = function(a, b, c, d, e, f) {
  return this.v.sa ? this.v.sa(a, b, c, d, e, f) : this.v.call(null, a, b, c, d, e, f);
};
g.Ja = function(a, b, c, d, e, f, h) {
  return this.v.Ja ? this.v.Ja(a, b, c, d, e, f, h) : this.v.call(null, a, b, c, d, e, f, h);
};
g.Ka = function(a, b, c, d, e, f, h, k) {
  return this.v.Ka ? this.v.Ka(a, b, c, d, e, f, h, k) : this.v.call(null, a, b, c, d, e, f, h, k);
};
g.La = function(a, b, c, d, e, f, h, k, m) {
  return this.v.La ? this.v.La(a, b, c, d, e, f, h, k, m) : this.v.call(null, a, b, c, d, e, f, h, k, m);
};
g.ya = function(a, b, c, d, e, f, h, k, m, q) {
  return this.v.ya ? this.v.ya(a, b, c, d, e, f, h, k, m, q) : this.v.call(null, a, b, c, d, e, f, h, k, m, q);
};
g.za = function(a, b, c, d, e, f, h, k, m, q, p) {
  return this.v.za ? this.v.za(a, b, c, d, e, f, h, k, m, q, p) : this.v.call(null, a, b, c, d, e, f, h, k, m, q, p);
};
g.Aa = function(a, b, c, d, e, f, h, k, m, q, p, t) {
  return this.v.Aa ? this.v.Aa(a, b, c, d, e, f, h, k, m, q, p, t) : this.v.call(null, a, b, c, d, e, f, h, k, m, q, p, t);
};
g.Ba = function(a, b, c, d, e, f, h, k, m, q, p, t, v) {
  return this.v.Ba ? this.v.Ba(a, b, c, d, e, f, h, k, m, q, p, t, v) : this.v.call(null, a, b, c, d, e, f, h, k, m, q, p, t, v);
};
g.Ca = function(a, b, c, d, e, f, h, k, m, q, p, t, v, B) {
  return this.v.Ca ? this.v.Ca(a, b, c, d, e, f, h, k, m, q, p, t, v, B) : this.v.call(null, a, b, c, d, e, f, h, k, m, q, p, t, v, B);
};
g.Da = function(a, b, c, d, e, f, h, k, m, q, p, t, v, B, C) {
  return this.v.Da ? this.v.Da(a, b, c, d, e, f, h, k, m, q, p, t, v, B, C) : this.v.call(null, a, b, c, d, e, f, h, k, m, q, p, t, v, B, C);
};
g.Ea = function(a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E) {
  return this.v.Ea ? this.v.Ea(a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E) : this.v.call(null, a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E);
};
g.Fa = function(a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H) {
  return this.v.Fa ? this.v.Fa(a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H) : this.v.call(null, a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H);
};
g.Ga = function(a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L) {
  return this.v.Ga ? this.v.Ga(a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L) : this.v.call(null, a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L);
};
g.Ha = function(a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P) {
  return this.v.Ha ? this.v.Ha(a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P) : this.v.call(null, a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P);
};
g.Ia = function(a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P, ba) {
  return this.v.Ia ? this.v.Ia(a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P, ba) : this.v.call(null, a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P, ba);
};
g.tc = function(a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P, ba, La) {
  var Qa = this.v;
  return bd.tb ? bd.tb(Qa, a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P, ba, La) : bd.call(null, Qa, a, b, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P, ba, La);
};
function cd(a, b) {
  return $c(a) && !(a ? a.B & 262144 || a.Sc || (a.B ? 0 : u(xb, a)) : u(xb, a)) ? new ad(a, b) : null == a ? null : yb(a, b);
}
function dd(a) {
  var b = null != a;
  return (b ? a ? a.B & 131072 || a.xc || (a.B ? 0 : u(ub, a)) : u(ub, a) : b) ? vb(a) : null;
}
function ed(a) {
  return null == a || Ea(G(a));
}
function fd(a) {
  return null == a ? !1 : a ? a.B & 8 || a.Ic ? !0 : a.B ? !1 : u(Ya, a) : u(Ya, a);
}
function gd(a) {
  return null == a ? !1 : a ? a.B & 4096 || a.Qc ? !0 : a.B ? !1 : u(ob, a) : u(ob, a);
}
function hd(a) {
  return null == a ? !1 : a ? a.B & 1024 || a.vc ? !0 : a.B ? !1 : u(jb, a) : u(jb, a);
}
function id(a) {
  return a ? a.B & 16384 || a.Rc ? !0 : a.B ? !1 : u(rb, a) : u(rb, a);
}
function jd(a) {
  return a ? a.H & 512 || a.Hc ? !0 : !1 : !1;
}
function kd(a) {
  var b = [];
  ja(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function ld(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, --e, b += 1;
  }
}
var md = {};
function nd(a) {
  return null == a ? !1 : a ? a.B & 64 || a.gb ? !0 : a.B ? !1 : u(bb, a) : u(bb, a);
}
function od(a) {
  return r(a) ? !0 : !1;
}
function pd(a) {
  var b = $c(a);
  return b ? b : a ? a.B & 1 || a.Lc ? !0 : a.B ? !1 : u(Ua, a) : u(Ua, a);
}
function qd(a, b) {
  return Wc(a, b, md) === md ? !1 : !0;
}
function sd(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return -1;
  }
  if (null == b) {
    return 1;
  }
  if ("number" === typeof a) {
    if ("number" === typeof b) {
      return na(a, b);
    }
    throw Error([x("Cannot compare "), x(a), x(" to "), x(b)].join(""));
  }
  if (a ? a.H & 2048 || a.eb || (a.H ? 0 : u(Sb, a)) : u(Sb, a)) {
    return Tb(a, b);
  }
  if ("string" !== typeof a && !Ca(a) && !0 !== a && !1 !== a || Fa(a) !== Fa(b)) {
    throw Error([x("Cannot compare "), x(a), x(" to "), x(b)].join(""));
  }
  return na(a, b);
}
function td(a, b) {
  var c = S(a), d = S(b);
  if (c < d) {
    c = -1;
  } else {
    if (c > d) {
      c = 1;
    } else {
      if (0 === c) {
        c = 0;
      } else {
        a: {
          for (d = 0;;) {
            var e = sd(Uc(a, d), Uc(b, d));
            if (0 === e && d + 1 < c) {
              d += 1;
            } else {
              c = e;
              break a;
            }
          }
        }
      }
    }
  }
  return c;
}
function ud(a) {
  return N.l(a, sd) ? sd : function(b, c) {
    var d = a.l ? a.l(b, c) : a.call(null, b, c);
    return "number" === typeof d ? d : r(d) ? -1 : r(a.l ? a.l(c, b) : a.call(null, c, b)) ? 1 : 0;
  };
}
function vd(a, b) {
  if (G(b)) {
    var c = wd.h ? wd.h(b) : wd.call(null, b), d = ud(a);
    oa(c, d);
    return G(c);
  }
  return K;
}
function xd(a, b) {
  return yd(a, b);
}
function yd(a, b) {
  return vd(function(b, d) {
    return ud(sd).call(null, a.h ? a.h(b) : a.call(null, b), a.h ? a.h(d) : a.call(null, d));
  }, b);
}
function zd(a, b) {
  var c = G(b);
  if (c) {
    var d = J(c), c = M(c);
    return Oa ? Oa(a, d, c) : Ra.call(null, a, d, c);
  }
  return a.D ? a.D() : a.call(null);
}
function Ad(a, b, c) {
  for (c = G(c);;) {
    if (c) {
      var d = J(c);
      b = a.l ? a.l(b, d) : a.call(null, b, d);
      if (Dc(b)) {
        return tb(b);
      }
      c = M(c);
    } else {
      return b;
    }
  }
}
function Ra() {
  switch(arguments.length) {
    case 2:
      return Bd(arguments[0], arguments[1]);
    case 3:
      return Oa(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
}
function Bd(a, b) {
  return b && (b.B & 524288 || b.zc) ? b.ea(null, a) : Ca(b) ? Gc(b, a) : "string" === typeof b ? Gc(b, a) : u(zb, b) ? Ab.l(b, a) : zd(a, b);
}
function Oa(a, b, c) {
  return c && (c.B & 524288 || c.zc) ? c.fa(null, a, b) : Ca(c) ? Hc(c, a, b) : "string" === typeof c ? Hc(c, a, b) : u(zb, c) ? Ab.w(c, a, b) : Ad(a, b, c);
}
function Cd(a, b, c) {
  return null != c ? Bb(c, a, b) : b;
}
function Dd(a) {
  return a;
}
function Ed(a) {
  return a - 1;
}
function Fd(a) {
  a = (a - a % 2) / 2;
  return 0 <= a ? Math.floor(a) : Math.ceil(a);
}
function Gd(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var x = function x() {
  switch(arguments.length) {
    case 0:
      return x.D();
    case 1:
      return x.h(arguments[0]);
    default:
      return x.C(arguments[0], new I(Array.prototype.slice.call(arguments, 1), 0));
  }
};
x.D = function() {
  return "";
};
x.h = function(a) {
  return null == a ? "" : ia(a);
};
x.C = function(a, b) {
  for (var c = new ka("" + x(a)), d = b;;) {
    if (r(d)) {
      c = c.append("" + x(J(d))), d = M(d);
    } else {
      return c.toString();
    }
  }
};
x.I = function(a) {
  var b = J(a);
  a = M(a);
  return x.C(b, a);
};
x.J = 1;
function Mc(a, b) {
  var c;
  if (b ? b.B & 16777216 || b.Pc || (b.B ? 0 : u(Gb, b)) : u(Gb, b)) {
    if (Jc(a) && Jc(b) && S(a) !== S(b)) {
      c = !1;
    } else {
      a: {
        c = G(a);
        for (var d = G(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && N.l(J(c), J(d))) {
            c = M(c), d = M(d);
          } else {
            c = !1;
            break a;
          }
        }
      }
    }
  } else {
    c = null;
  }
  return od(c);
}
function Hd(a, b, c, d, e) {
  this.meta = a;
  this.first = b;
  this.rest = c;
  this.count = d;
  this.F = e;
  this.B = 65937646;
  this.H = 8192;
}
g = Hd.prototype;
g.toString = function() {
  return cc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.T = function() {
  return this.meta;
};
g.la = function() {
  return 1 === this.count ? null : this.rest;
};
g.$ = function() {
  return this.count;
};
g.hb = function() {
  return this.first;
};
g.ib = function() {
  return db(this);
};
g.R = function() {
  var a = this.F;
  return null != a ? a : this.F = a = xc(this);
};
g.G = function(a, b) {
  return Mc(this, b);
};
g.da = function() {
  return yb(K, this.meta);
};
g.ea = function(a, b) {
  return zd(b, this);
};
g.fa = function(a, b, c) {
  return Ad(b, c, this);
};
g.ga = function() {
  return this.first;
};
g.ma = function() {
  return 1 === this.count ? K : this.rest;
};
g.ba = function() {
  return this;
};
g.X = function(a, b) {
  return new Hd(b, this.first, this.rest, this.count, this.F);
};
g.Z = function(a, b) {
  return new Hd(this.meta, b, this, this.count + 1, null);
};
Hd.prototype[Ha] = function() {
  return uc(this);
};
function Id(a) {
  this.meta = a;
  this.B = 65937614;
  this.H = 8192;
}
g = Id.prototype;
g.toString = function() {
  return cc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.T = function() {
  return this.meta;
};
g.la = function() {
  return null;
};
g.$ = function() {
  return 0;
};
g.hb = function() {
  return null;
};
g.ib = function() {
  throw Error("Can't pop empty list");
};
g.R = function() {
  return yc;
};
g.G = function(a, b) {
  return Mc(this, b);
};
g.da = function() {
  return this;
};
g.ea = function(a, b) {
  return zd(b, this);
};
g.fa = function(a, b, c) {
  return Ad(b, c, this);
};
g.ga = function() {
  return null;
};
g.ma = function() {
  return K;
};
g.ba = function() {
  return null;
};
g.X = function(a, b) {
  return new Id(b);
};
g.Z = function(a, b) {
  return new Hd(this.meta, b, null, 1, null);
};
var K = new Id(null);
Id.prototype[Ha] = function() {
  return uc(this);
};
function Jd() {
  a: {
    var a = 0 < arguments.length ? new I(Array.prototype.slice.call(arguments, 0), 0) : null, b;
    if (a instanceof I && 0 === a.i) {
      b = a.o;
    } else {
      b: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.ga(null)), a = a.la(null);
          } else {
            break b;
          }
        }
      }
    }
    for (var a = b.length, c = K;;) {
      if (0 < a) {
        var d = a - 1, c = c.Z(null, b[a - 1]), a = d
      } else {
        break a;
      }
    }
  }
  return c;
}
function Kd(a, b, c, d) {
  this.meta = a;
  this.first = b;
  this.rest = c;
  this.F = d;
  this.B = 65929452;
  this.H = 8192;
}
g = Kd.prototype;
g.toString = function() {
  return cc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.T = function() {
  return this.meta;
};
g.la = function() {
  return null == this.rest ? null : G(this.rest);
};
g.R = function() {
  var a = this.F;
  return null != a ? a : this.F = a = xc(this);
};
g.G = function(a, b) {
  return Mc(this, b);
};
g.da = function() {
  return cd(K, this.meta);
};
g.ea = function(a, b) {
  return zd(b, this);
};
g.fa = function(a, b, c) {
  return Ad(b, c, this);
};
g.ga = function() {
  return this.first;
};
g.ma = function() {
  return null == this.rest ? K : this.rest;
};
g.ba = function() {
  return this;
};
g.X = function(a, b) {
  return new Kd(b, this.first, this.rest, this.F);
};
g.Z = function(a, b) {
  return new Kd(null, b, this, this.F);
};
Kd.prototype[Ha] = function() {
  return uc(this);
};
function Q(a, b) {
  var c = null == b;
  return (c ? c : b && (b.B & 64 || b.gb)) ? new Kd(null, a, b, null) : new Kd(null, a, G(b), null);
}
function Ld(a, b) {
  if (a.ta === b.ta) {
    return 0;
  }
  var c = Ea(a.ja);
  if (r(c ? b.ja : c)) {
    return -1;
  }
  if (r(a.ja)) {
    if (Ea(b.ja)) {
      return 1;
    }
    c = na(a.ja, b.ja);
    return 0 === c ? na(a.name, b.name) : c;
  }
  return na(a.name, b.name);
}
function U(a, b, c, d) {
  this.ja = a;
  this.name = b;
  this.ta = c;
  this._hash = d;
  this.B = 2153775105;
  this.H = 4096;
}
g = U.prototype;
g.toString = function() {
  return [x(":"), x(this.ta)].join("");
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.G = function(a, b) {
  return b instanceof U ? this.ta === b.ta : !1;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Vc(c, this);
      case 3:
        return Wc(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = function(a, c) {
    return Vc(c, this);
  };
  a.w = function(a, c, d) {
    return Wc(c, this, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ia(b)));
};
g.h = function(a) {
  return Vc(a, this);
};
g.l = function(a, b) {
  return Wc(a, this, b);
};
g.R = function() {
  var a = this._hash;
  return null != a ? a : this._hash = a = mc(hc(this.name), kc(this.ja)) + 2654435769 | 0;
};
g.U = function(a, b) {
  return A(b, [x(":"), x(this.ta)].join(""));
};
function Md(a, b) {
  return a === b ? !0 : a instanceof U && b instanceof U ? a.ta === b.ta : !1;
}
var Nd = function Nd() {
  switch(arguments.length) {
    case 1:
      return Nd.h(arguments[0]);
    case 2:
      return Nd.l(arguments[0], arguments[1]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
};
Nd.h = function(a) {
  if (a instanceof U) {
    return a;
  }
  if (a instanceof D) {
    var b;
    if (a && (a.H & 4096 || a.yc)) {
      b = a.ja;
    } else {
      throw Error([x("Doesn't support namespace: "), x(a)].join(""));
    }
    return new U(b, Od.h ? Od.h(a) : Od.call(null, a), a.xa, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new U(b[0], b[1], a, null) : new U(null, b[0], a, null)) : null;
};
Nd.l = function(a, b) {
  return new U(a, b, [x(r(a) ? [x(a), x("/")].join("") : null), x(b)].join(""), null);
};
Nd.J = 2;
function Pd(a, b, c, d) {
  this.meta = a;
  this.fn = b;
  this.s = c;
  this.F = d;
  this.B = 32374988;
  this.H = 0;
}
g = Pd.prototype;
g.toString = function() {
  return cc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
function Qd(a) {
  null != a.fn && (a.s = a.fn.D ? a.fn.D() : a.fn.call(null), a.fn = null);
  return a.s;
}
g.T = function() {
  return this.meta;
};
g.la = function() {
  Fb(this);
  return null == this.s ? null : M(this.s);
};
g.R = function() {
  var a = this.F;
  return null != a ? a : this.F = a = xc(this);
};
g.G = function(a, b) {
  return Mc(this, b);
};
g.da = function() {
  return cd(K, this.meta);
};
g.ea = function(a, b) {
  return zd(b, this);
};
g.fa = function(a, b, c) {
  return Ad(b, c, this);
};
g.ga = function() {
  Fb(this);
  return null == this.s ? null : J(this.s);
};
g.ma = function() {
  Fb(this);
  return null != this.s ? sc(this.s) : K;
};
g.ba = function() {
  Qd(this);
  if (null == this.s) {
    return null;
  }
  for (var a = this.s;;) {
    if (a instanceof Pd) {
      a = Qd(a);
    } else {
      return this.s = a, G(this.s);
    }
  }
};
g.X = function(a, b) {
  return new Pd(b, this.fn, this.s, this.F);
};
g.Z = function(a, b) {
  return Q(b, this);
};
Pd.prototype[Ha] = function() {
  return uc(this);
};
function Rd(a, b) {
  this.L = a;
  this.end = b;
  this.B = 2;
  this.H = 0;
}
Rd.prototype.add = function(a) {
  this.L[this.end] = a;
  return this.end += 1;
};
Rd.prototype.chunk = function() {
  var a = new Sd(this.L, 0, this.end);
  this.L = null;
  return a;
};
Rd.prototype.$ = function() {
  return this.end;
};
function Td(a) {
  return new Rd(Array(a), 0);
}
function Sd(a, b, c) {
  this.o = a;
  this.off = b;
  this.end = c;
  this.B = 524306;
  this.H = 0;
}
g = Sd.prototype;
g.$ = function() {
  return this.end - this.off;
};
g.S = function(a, b) {
  return this.o[this.off + b];
};
g.oa = function(a, b, c) {
  return 0 <= b && b < this.end - this.off ? this.o[this.off + b] : c;
};
g.bc = function() {
  if (this.off === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Sd(this.o, this.off + 1, this.end);
};
g.ea = function(a, b) {
  return Ic(this.o, b, this.o[this.off], this.off + 1);
};
g.fa = function(a, b, c) {
  return Ic(this.o, b, c, this.off);
};
function Ud(a, b, c, d) {
  this.chunk = a;
  this.wa = b;
  this.meta = c;
  this.F = d;
  this.B = 31850732;
  this.H = 1536;
}
g = Ud.prototype;
g.toString = function() {
  return cc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.T = function() {
  return this.meta;
};
g.la = function() {
  if (1 < Wa(this.chunk)) {
    return new Ud(Ub(this.chunk), this.wa, this.meta, null);
  }
  var a = Fb(this.wa);
  return null == a ? null : a;
};
g.R = function() {
  var a = this.F;
  return null != a ? a : this.F = a = xc(this);
};
g.G = function(a, b) {
  return Mc(this, b);
};
g.da = function() {
  return cd(K, this.meta);
};
g.ga = function() {
  return y.l(this.chunk, 0);
};
g.ma = function() {
  return 1 < Wa(this.chunk) ? new Ud(Ub(this.chunk), this.wa, this.meta, null) : null == this.wa ? K : this.wa;
};
g.ba = function() {
  return this;
};
g.Ib = function() {
  return this.chunk;
};
g.Jb = function() {
  return null == this.wa ? K : this.wa;
};
g.X = function(a, b) {
  return new Ud(this.chunk, this.wa, b, this.F);
};
g.Z = function(a, b) {
  return Q(b, this);
};
g.Hb = function() {
  return null == this.wa ? null : this.wa;
};
Ud.prototype[Ha] = function() {
  return uc(this);
};
function Vd(a, b) {
  return 0 === Wa(a) ? b : new Ud(a, b, null, null);
}
function Wd(a, b) {
  a.add(b);
}
function wd(a) {
  for (var b = [];;) {
    if (G(a)) {
      b.push(J(a)), a = M(a);
    } else {
      return b;
    }
  }
}
function Xd(a, b) {
  if (Jc(a)) {
    return S(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && G(c)) {
      c = M(c), --d, e += 1;
    } else {
      return e;
    }
  }
}
var Yd = function Yd(b) {
  return null == b ? null : null == M(b) ? G(J(b)) : Q(J(b), Yd(M(b)));
}, Zd = function Zd() {
  switch(arguments.length) {
    case 0:
      return Zd.D();
    case 1:
      return Zd.h(arguments[0]);
    case 2:
      return Zd.l(arguments[0], arguments[1]);
    default:
      return Zd.C(arguments[0], arguments[1], new I(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Zd.D = function() {
  return new Pd(null, function() {
    return null;
  }, null, null);
};
Zd.h = function(a) {
  return new Pd(null, function() {
    return a;
  }, null, null);
};
Zd.l = function(a, b) {
  return new Pd(null, function() {
    var c = G(a);
    return c ? jd(c) ? Vd(Vb(c), Zd.l(Wb(c), b)) : Q(J(c), Zd.l(sc(c), b)) : b;
  }, null, null);
};
Zd.C = function(a, b, c) {
  return function e(a, b) {
    return new Pd(null, function() {
      var c = G(a);
      return c ? jd(c) ? Vd(Vb(c), e(Wb(c), b)) : Q(J(c), e(sc(c), b)) : r(b) ? e(J(b), M(b)) : null;
    }, null, null);
  }(Zd.l(a, b), c);
};
Zd.I = function(a) {
  var b = J(a), c = M(a);
  a = J(c);
  c = M(c);
  return Zd.C(b, a, c);
};
Zd.J = 2;
var $d = function $d() {
  switch(arguments.length) {
    case 0:
      return $d.D();
    case 1:
      return $d.h(arguments[0]);
    case 2:
      return $d.l(arguments[0], arguments[1]);
    default:
      return $d.C(arguments[0], arguments[1], new I(Array.prototype.slice.call(arguments, 2), 0));
  }
};
$d.D = function() {
  return Mb(Rc);
};
$d.h = function(a) {
  return a;
};
$d.l = function(a, b) {
  return Ob(a, b);
};
$d.C = function(a, b, c) {
  for (;;) {
    if (a = Ob(a, b), r(c)) {
      b = J(c), c = M(c);
    } else {
      return a;
    }
  }
};
$d.I = function(a) {
  var b = J(a), c = M(a);
  a = J(c);
  c = M(c);
  return $d.C(b, a, c);
};
$d.J = 2;
function ae(a, b, c) {
  var d = G(c);
  if (0 === b) {
    return a.D ? a.D() : a.call(null);
  }
  c = cb(d);
  var e = db(d);
  if (1 === b) {
    return a.h ? a.h(c) : a.h ? a.h(c) : a.call(null, c);
  }
  var d = cb(e), f = db(e);
  if (2 === b) {
    return a.l ? a.l(c, d) : a.l ? a.l(c, d) : a.call(null, c, d);
  }
  var e = cb(f), h = db(f);
  if (3 === b) {
    return a.w ? a.w(c, d, e) : a.w ? a.w(c, d, e) : a.call(null, c, d, e);
  }
  var f = cb(h), k = db(h);
  if (4 === b) {
    return a.K ? a.K(c, d, e, f) : a.K ? a.K(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var h = cb(k), m = db(k);
  if (5 === b) {
    return a.V ? a.V(c, d, e, f, h) : a.V ? a.V(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  var k = cb(m), q = db(m);
  if (6 === b) {
    return a.sa ? a.sa(c, d, e, f, h, k) : a.sa ? a.sa(c, d, e, f, h, k) : a.call(null, c, d, e, f, h, k);
  }
  var m = cb(q), p = db(q);
  if (7 === b) {
    return a.Ja ? a.Ja(c, d, e, f, h, k, m) : a.Ja ? a.Ja(c, d, e, f, h, k, m) : a.call(null, c, d, e, f, h, k, m);
  }
  var q = cb(p), t = db(p);
  if (8 === b) {
    return a.Ka ? a.Ka(c, d, e, f, h, k, m, q) : a.Ka ? a.Ka(c, d, e, f, h, k, m, q) : a.call(null, c, d, e, f, h, k, m, q);
  }
  var p = cb(t), v = db(t);
  if (9 === b) {
    return a.La ? a.La(c, d, e, f, h, k, m, q, p) : a.La ? a.La(c, d, e, f, h, k, m, q, p) : a.call(null, c, d, e, f, h, k, m, q, p);
  }
  var t = cb(v), B = db(v);
  if (10 === b) {
    return a.ya ? a.ya(c, d, e, f, h, k, m, q, p, t) : a.ya ? a.ya(c, d, e, f, h, k, m, q, p, t) : a.call(null, c, d, e, f, h, k, m, q, p, t);
  }
  var v = cb(B), C = db(B);
  if (11 === b) {
    return a.za ? a.za(c, d, e, f, h, k, m, q, p, t, v) : a.za ? a.za(c, d, e, f, h, k, m, q, p, t, v) : a.call(null, c, d, e, f, h, k, m, q, p, t, v);
  }
  var B = cb(C), E = db(C);
  if (12 === b) {
    return a.Aa ? a.Aa(c, d, e, f, h, k, m, q, p, t, v, B) : a.Aa ? a.Aa(c, d, e, f, h, k, m, q, p, t, v, B) : a.call(null, c, d, e, f, h, k, m, q, p, t, v, B);
  }
  var C = cb(E), H = db(E);
  if (13 === b) {
    return a.Ba ? a.Ba(c, d, e, f, h, k, m, q, p, t, v, B, C) : a.Ba ? a.Ba(c, d, e, f, h, k, m, q, p, t, v, B, C) : a.call(null, c, d, e, f, h, k, m, q, p, t, v, B, C);
  }
  var E = cb(H), L = db(H);
  if (14 === b) {
    return a.Ca ? a.Ca(c, d, e, f, h, k, m, q, p, t, v, B, C, E) : a.Ca ? a.Ca(c, d, e, f, h, k, m, q, p, t, v, B, C, E) : a.call(null, c, d, e, f, h, k, m, q, p, t, v, B, C, E);
  }
  var H = cb(L), P = db(L);
  if (15 === b) {
    return a.Da ? a.Da(c, d, e, f, h, k, m, q, p, t, v, B, C, E, H) : a.Da ? a.Da(c, d, e, f, h, k, m, q, p, t, v, B, C, E, H) : a.call(null, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H);
  }
  var L = cb(P), ba = db(P);
  if (16 === b) {
    return a.Ea ? a.Ea(c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L) : a.Ea ? a.Ea(c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L) : a.call(null, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L);
  }
  var P = cb(ba), La = db(ba);
  if (17 === b) {
    return a.Fa ? a.Fa(c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P) : a.Fa ? a.Fa(c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P) : a.call(null, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P);
  }
  var ba = cb(La), Qa = db(La);
  if (18 === b) {
    return a.Ga ? a.Ga(c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P, ba) : a.Ga ? a.Ga(c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P, ba) : a.call(null, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P, ba);
  }
  La = cb(Qa);
  Qa = db(Qa);
  if (19 === b) {
    return a.Ha ? a.Ha(c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P, ba, La) : a.Ha ? a.Ha(c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P, ba, La) : a.call(null, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P, ba, La);
  }
  var F = cb(Qa);
  db(Qa);
  if (20 === b) {
    return a.Ia ? a.Ia(c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P, ba, La, F) : a.Ia ? a.Ia(c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P, ba, La, F) : a.call(null, c, d, e, f, h, k, m, q, p, t, v, B, C, E, H, L, P, ba, La, F);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function bd() {
  switch(arguments.length) {
    case 2:
      return be(arguments[0], arguments[1]);
    case 3:
      return ce(arguments[0], arguments[1], arguments[2]);
    case 4:
      var a;
      a = arguments[0];
      var b = Q(arguments[1], Q(arguments[2], arguments[3])), c = a.J;
      if (a.I) {
        var d = Xd(b, c + 1);
        a = d <= c ? ae(a, d, b) : a.I(b);
      } else {
        a = a.apply(a, wd(b));
      }
      return a;
    case 5:
      return de(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return ee(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new I(Array.prototype.slice.call(arguments, 5), 0));
  }
}
function be(a, b) {
  var c = a.J;
  if (a.I) {
    var d = Xd(b, c + 1);
    return d <= c ? ae(a, d, b) : a.I(b);
  }
  return a.apply(a, wd(b));
}
function ce(a, b, c) {
  b = Q(b, c);
  c = a.J;
  if (a.I) {
    var d = Xd(b, c + 1);
    return d <= c ? ae(a, d, b) : a.I(b);
  }
  return a.apply(a, wd(b));
}
function de(a, b, c, d, e) {
  b = Q(b, Q(c, Q(d, e)));
  c = a.J;
  return a.I ? (d = Xd(b, c + 1), d <= c ? ae(a, d, b) : a.I(b)) : a.apply(a, wd(b));
}
function ee(a, b, c, d, e, f) {
  b = Q(b, Q(c, Q(d, Q(e, Yd(f)))));
  c = a.J;
  return a.I ? (d = Xd(b, c + 1), d <= c ? ae(a, d, b) : a.I(b)) : a.apply(a, wd(b));
}
function fe(a, b) {
  for (;;) {
    if (null == G(b)) {
      return !0;
    }
    var c;
    c = J(b);
    c = a.h ? a.h(c) : a.call(null, c);
    if (r(c)) {
      c = a;
      var d = M(b);
      a = c;
      b = d;
    } else {
      return !1;
    }
  }
}
function ge(a) {
  for (var b = Dd;;) {
    if (G(a)) {
      var c;
      c = J(a);
      c = b.h ? b.h(c) : b.call(null, c);
      if (r(c)) {
        return c;
      }
      a = M(a);
    } else {
      return null;
    }
  }
}
function ie() {
  return function() {
    function a(a) {
      if (0 < arguments.length) {
        for (var c = 0, d = Array(arguments.length - 0);c < d.length;) {
          d[c] = arguments[c + 0], ++c;
        }
      }
      return !1;
    }
    a.J = 0;
    a.I = function(a) {
      G(a);
      return !1;
    };
    a.C = function() {
      return !1;
    };
    return a;
  }();
}
var je = function je() {
  switch(arguments.length) {
    case 1:
      return je.h(arguments[0]);
    case 2:
      return je.l(arguments[0], arguments[1]);
    case 3:
      return je.w(arguments[0], arguments[1], arguments[2]);
    case 4:
      return je.K(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return je.C(arguments[0], arguments[1], arguments[2], arguments[3], new I(Array.prototype.slice.call(arguments, 4), 0));
  }
};
je.h = function(a) {
  return a;
};
je.l = function(a, b) {
  return function() {
    function c(c, d, e) {
      return a.K ? a.K(b, c, d, e) : a.call(null, b, c, d, e);
    }
    function d(c, d) {
      return a.w ? a.w(b, c, d) : a.call(null, b, c, d);
    }
    function e(c) {
      return a.l ? a.l(b, c) : a.call(null, b, c);
    }
    function f() {
      return a.h ? a.h(b) : a.call(null, b);
    }
    var h = null, k = function() {
      function c(a, b, e, f) {
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new I(k, 0);
        }
        return d.call(this, a, b, e, h);
      }
      function d(c, e, f, h) {
        return ee(a, b, c, e, f, R([h], 0));
      }
      c.J = 3;
      c.I = function(a) {
        var b = J(a);
        a = M(a);
        var c = J(a);
        a = M(a);
        var e = J(a);
        a = sc(a);
        return d(b, c, e, a);
      };
      c.C = d;
      return c;
    }(), h = function(a, b, h, t) {
      switch(arguments.length) {
        case 0:
          return f.call(this);
        case 1:
          return e.call(this, a);
        case 2:
          return d.call(this, a, b);
        case 3:
          return c.call(this, a, b, h);
        default:
          var v = null;
          if (3 < arguments.length) {
            for (var v = 0, B = Array(arguments.length - 3);v < B.length;) {
              B[v] = arguments[v + 3], ++v;
            }
            v = new I(B, 0);
          }
          return k.C(a, b, h, v);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    h.J = 3;
    h.I = k.I;
    h.D = f;
    h.h = e;
    h.l = d;
    h.w = c;
    h.C = k.C;
    return h;
  }();
};
je.w = function(a, b, c) {
  return function() {
    function d(d, e, f) {
      return a.V ? a.V(b, c, d, e, f) : a.call(null, b, c, d, e, f);
    }
    function e(d, e) {
      return a.K ? a.K(b, c, d, e) : a.call(null, b, c, d, e);
    }
    function f(d) {
      return a.w ? a.w(b, c, d) : a.call(null, b, c, d);
    }
    function h() {
      return a.l ? a.l(b, c) : a.call(null, b, c);
    }
    var k = null, m = function() {
      function d(a, b, c, f) {
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new I(k, 0);
        }
        return e.call(this, a, b, c, h);
      }
      function e(d, f, h, k) {
        return ee(a, b, c, d, f, R([h, k], 0));
      }
      d.J = 3;
      d.I = function(a) {
        var b = J(a);
        a = M(a);
        var c = J(a);
        a = M(a);
        var d = J(a);
        a = sc(a);
        return e(b, c, d, a);
      };
      d.C = e;
      return d;
    }(), k = function(a, b, c, k) {
      switch(arguments.length) {
        case 0:
          return h.call(this);
        case 1:
          return f.call(this, a);
        case 2:
          return e.call(this, a, b);
        case 3:
          return d.call(this, a, b, c);
        default:
          var B = null;
          if (3 < arguments.length) {
            for (var B = 0, C = Array(arguments.length - 3);B < C.length;) {
              C[B] = arguments[B + 3], ++B;
            }
            B = new I(C, 0);
          }
          return m.C(a, b, c, B);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    k.J = 3;
    k.I = m.I;
    k.D = h;
    k.h = f;
    k.l = e;
    k.w = d;
    k.C = m.C;
    return k;
  }();
};
je.K = function(a, b, c, d) {
  return function() {
    function e(e, f, h) {
      return a.sa ? a.sa(b, c, d, e, f, h) : a.call(null, b, c, d, e, f, h);
    }
    function f(e, f) {
      return a.V ? a.V(b, c, d, e, f) : a.call(null, b, c, d, e, f);
    }
    function h(e) {
      return a.K ? a.K(b, c, d, e) : a.call(null, b, c, d, e);
    }
    function k() {
      return a.w ? a.w(b, c, d) : a.call(null, b, c, d);
    }
    var m = null, q = function() {
      function e(a, b, c, d) {
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new I(k, 0);
        }
        return f.call(this, a, b, c, h);
      }
      function f(e, h, k, m) {
        return ee(a, b, c, d, e, R([h, k, m], 0));
      }
      e.J = 3;
      e.I = function(a) {
        var b = J(a);
        a = M(a);
        var c = J(a);
        a = M(a);
        var d = J(a);
        a = sc(a);
        return f(b, c, d, a);
      };
      e.C = f;
      return e;
    }(), m = function(a, b, c, d) {
      switch(arguments.length) {
        case 0:
          return k.call(this);
        case 1:
          return h.call(this, a);
        case 2:
          return f.call(this, a, b);
        case 3:
          return e.call(this, a, b, c);
        default:
          var m = null;
          if (3 < arguments.length) {
            for (var m = 0, E = Array(arguments.length - 3);m < E.length;) {
              E[m] = arguments[m + 3], ++m;
            }
            m = new I(E, 0);
          }
          return q.C(a, b, c, m);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    m.J = 3;
    m.I = q.I;
    m.D = k;
    m.h = h;
    m.l = f;
    m.w = e;
    m.C = q.C;
    return m;
  }();
};
je.C = function(a, b, c, d, e) {
  return function() {
    function f(a) {
      var b = null;
      if (0 < arguments.length) {
        for (var b = 0, c = Array(arguments.length - 0);b < c.length;) {
          c[b] = arguments[b + 0], ++b;
        }
        b = new I(c, 0);
      }
      return h.call(this, b);
    }
    function h(f) {
      return de(a, b, c, d, Zd.l(e, f));
    }
    f.J = 0;
    f.I = function(a) {
      a = G(a);
      return h(a);
    };
    f.C = h;
    return f;
  }();
};
je.I = function(a) {
  var b = J(a), c = M(a);
  a = J(c);
  var d = M(c), c = J(d), e = M(d), d = J(e), e = M(e);
  return je.C(b, a, c, d, e);
};
je.J = 4;
function ke(a, b, c, d) {
  this.state = a;
  this.meta = b;
  this.ab = c;
  this.Y = d;
  this.H = 16386;
  this.B = 6455296;
}
g = ke.prototype;
g.equiv = function(a) {
  return this.G(null, a);
};
g.G = function(a, b) {
  return this === b;
};
g.Wa = function() {
  return this.state;
};
g.T = function() {
  return this.meta;
};
g.xb = function(a, b, c) {
  for (var d = G(this.Y), e = null, f = 0, h = 0;;) {
    if (h < f) {
      a = e.S(null, h);
      var k = T(a, 0);
      a = T(a, 1);
      var m = b, q = c;
      a.K ? a.K(k, this, m, q) : a.call(null, k, this, m, q);
      h += 1;
    } else {
      if (a = G(d)) {
        d = a, jd(d) ? (e = Vb(d), d = Wb(d), a = e, f = S(e), e = a) : (a = J(d), k = T(a, 0), a = T(a, 1), e = k, f = b, h = c, a.K ? a.K(e, this, f, h) : a.call(null, e, this, f, h), d = M(d), e = null, f = 0), h = 0;
      } else {
        return null;
      }
    }
  }
};
g.wb = function(a, b, c) {
  this.Y = Xc.w(this.Y, b, c);
  return this;
};
g.yb = function(a, b) {
  return this.Y = Zc.l(this.Y, b);
};
g.R = function() {
  return ca(this);
};
function le() {
  switch(arguments.length) {
    case 1:
      return me(arguments[0]);
    default:
      var a = arguments[0], b = new I(Array.prototype.slice.call(arguments, 1), 0), c = nd(b) ? be(ne, b) : b, b = Vc(c, ya), c = Vc(c, oe);
      return new ke(a, b, c, null);
  }
}
function me(a) {
  return new ke(a, null, null, null);
}
function V(a, b) {
  if (a instanceof ke) {
    var c = a.ab;
    if (null != c && !r(c.h ? c.h(b) : c.call(null, b))) {
      throw Error([x("Assert failed: "), x("Validator rejected reference state"), x("\n"), x(function() {
        var a = Jd(new D(null, "validate", "validate", 1439230700, null), new D(null, "new-value", "new-value", -1567397401, null));
        return pe.h ? pe.h(a) : pe.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.Y && Jb(a, c, b);
    return b;
  }
  return Zb(a, b);
}
var pc = function pc() {
  switch(arguments.length) {
    case 2:
      return pc.l(arguments[0], arguments[1]);
    case 3:
      return pc.w(arguments[0], arguments[1], arguments[2]);
    case 4:
      return pc.K(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return pc.C(arguments[0], arguments[1], arguments[2], arguments[3], new I(Array.prototype.slice.call(arguments, 4), 0));
  }
};
pc.l = function(a, b) {
  var c;
  a instanceof ke ? (c = a.state, c = b.h ? b.h(c) : b.call(null, c), c = V(a, c)) : c = $b.l(a, b);
  return c;
};
pc.w = function(a, b, c) {
  if (a instanceof ke) {
    var d = a.state;
    b = b.l ? b.l(d, c) : b.call(null, d, c);
    a = V(a, b);
  } else {
    a = $b.w(a, b, c);
  }
  return a;
};
pc.K = function(a, b, c, d) {
  if (a instanceof ke) {
    var e = a.state;
    b = b.w ? b.w(e, c, d) : b.call(null, e, c, d);
    a = V(a, b);
  } else {
    a = $b.K(a, b, c, d);
  }
  return a;
};
pc.C = function(a, b, c, d, e) {
  return a instanceof ke ? V(a, de(b, a.state, c, d, e)) : $b.V(a, b, c, d, e);
};
pc.I = function(a) {
  var b = J(a), c = M(a);
  a = J(c);
  var d = M(c), c = J(d), e = M(d), d = J(e), e = M(e);
  return pc.C(b, a, c, d, e);
};
pc.J = 4;
var W = function W() {
  switch(arguments.length) {
    case 1:
      return W.h(arguments[0]);
    case 2:
      return W.l(arguments[0], arguments[1]);
    case 3:
      return W.w(arguments[0], arguments[1], arguments[2]);
    case 4:
      return W.K(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return W.C(arguments[0], arguments[1], arguments[2], arguments[3], new I(Array.prototype.slice.call(arguments, 4), 0));
  }
};
W.h = function(a) {
  return function(b) {
    return function() {
      function c(c, d) {
        var e = a.h ? a.h(d) : a.call(null, d);
        return b.l ? b.l(c, e) : b.call(null, c, e);
      }
      function d(a) {
        return b.h ? b.h(a) : b.call(null, a);
      }
      function e() {
        return b.D ? b.D() : b.call(null);
      }
      var f = null, h = function() {
        function c(a, b, e) {
          var f = null;
          if (2 < arguments.length) {
            for (var f = 0, h = Array(arguments.length - 2);f < h.length;) {
              h[f] = arguments[f + 2], ++f;
            }
            f = new I(h, 0);
          }
          return d.call(this, a, b, f);
        }
        function d(c, e, f) {
          e = ce(a, e, f);
          return b.l ? b.l(c, e) : b.call(null, c, e);
        }
        c.J = 2;
        c.I = function(a) {
          var b = J(a);
          a = M(a);
          var c = J(a);
          a = sc(a);
          return d(b, c, a);
        };
        c.C = d;
        return c;
      }(), f = function(a, b, f) {
        switch(arguments.length) {
          case 0:
            return e.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, b);
          default:
            var p = null;
            if (2 < arguments.length) {
              for (var p = 0, t = Array(arguments.length - 2);p < t.length;) {
                t[p] = arguments[p + 2], ++p;
              }
              p = new I(t, 0);
            }
            return h.C(a, b, p);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.J = 2;
      f.I = h.I;
      f.D = e;
      f.h = d;
      f.l = c;
      f.C = h.C;
      return f;
    }();
  };
};
W.l = function(a, b) {
  return new Pd(null, function() {
    var c = G(b);
    if (c) {
      if (jd(c)) {
        for (var d = Vb(c), e = S(d), f = Td(e), h = 0;;) {
          if (h < e) {
            Wd(f, function() {
              var b = y.l(d, h);
              return a.h ? a.h(b) : a.call(null, b);
            }()), h += 1;
          } else {
            break;
          }
        }
        return Vd(f.chunk(), W.l(a, Wb(c)));
      }
      return Q(function() {
        var b = J(c);
        return a.h ? a.h(b) : a.call(null, b);
      }(), W.l(a, sc(c)));
    }
    return null;
  }, null, null);
};
W.w = function(a, b, c) {
  return new Pd(null, function() {
    var d = G(b), e = G(c);
    if (d && e) {
      var f = Q, h;
      h = J(d);
      var k = J(e);
      h = a.l ? a.l(h, k) : a.call(null, h, k);
      d = f(h, W.w(a, sc(d), sc(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
W.K = function(a, b, c, d) {
  return new Pd(null, function() {
    var e = G(b), f = G(c), h = G(d);
    if (e && f && h) {
      var k = Q, m;
      m = J(e);
      var q = J(f), p = J(h);
      m = a.w ? a.w(m, q, p) : a.call(null, m, q, p);
      e = k(m, W.K(a, sc(e), sc(f), sc(h)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
W.C = function(a, b, c, d, e) {
  var f = function k(a) {
    return new Pd(null, function() {
      var b = W.l(G, a);
      return fe(Dd, b) ? Q(W.l(J, b), k(W.l(sc, b))) : null;
    }, null, null);
  };
  return W.l(function() {
    return function(b) {
      return be(a, b);
    };
  }(f), f(Pc.C(e, d, R([c, b], 0))));
};
W.I = function(a) {
  var b = J(a), c = M(a);
  a = J(c);
  var d = M(c), c = J(d), e = M(d), d = J(e), e = M(e);
  return W.C(b, a, c, d, e);
};
W.J = 4;
function qe(a, b) {
  var c;
  null != a ? a && (a.H & 4 || a.Jc) ? (c = Oa(Ob, Mb(a), b), c = Pb(c), c = cd(c, dd(a))) : c = Oa(Za, a, b) : c = Oa(Pc, K, b);
  return c;
}
function re(a, b) {
  this.M = a;
  this.o = b;
}
function se(a) {
  return new re(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function te(a) {
  return new re(a.M, Ia(a.o));
}
function ue(a) {
  a = a.A;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function ve(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = se(a);
    d.o[0] = c;
    c = d;
    b -= 5;
  }
}
var we = function we(b, c, d, e) {
  var f = te(d), h = b.A - 1 >>> c & 31;
  5 === c ? f.o[h] = e : (d = d.o[h], b = null != d ? we(b, c - 5, d, e) : ve(null, c - 5, e), f.o[h] = b);
  return f;
};
function xe(a, b) {
  throw Error([x("No item "), x(a), x(" in vector of length "), x(b)].join(""));
}
function ye(a, b) {
  if (b >= ue(a)) {
    return a.tail;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.o[b >>> d & 31], d = e
    } else {
      return c.o;
    }
  }
}
function ze(a, b) {
  return 0 <= b && b < a.A ? ye(a, b) : xe(b, a.A);
}
var Ae = function Ae(b, c, d, e, f) {
  var h = te(d);
  if (0 === c) {
    h.o[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Ae(b, c - 5, d.o[k], e, f);
    h.o[k] = b;
  }
  return h;
}, Be = function Be(b, c, d) {
  var e = b.A - 2 >>> c & 31;
  if (5 < c) {
    b = Be(b, c - 5, d.o[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = te(d);
    d.o[e] = b;
    return d;
  }
  if (0 === e) {
    return null;
  }
  d = te(d);
  d.o[e] = null;
  return d;
};
function Ce(a, b, c, d, e, f) {
  this.i = a;
  this.base = b;
  this.o = c;
  this.ra = d;
  this.start = e;
  this.end = f;
}
Ce.prototype.Xb = function() {
  return this.i < this.end;
};
Ce.prototype.next = function() {
  32 === this.i - this.base && (this.o = ye(this.ra, this.i), this.base += 32);
  var a = this.o[this.i & 31];
  this.i += 1;
  return a;
};
function X(a, b, c, d, e, f) {
  this.meta = a;
  this.A = b;
  this.shift = c;
  this.root = d;
  this.tail = e;
  this.F = f;
  this.B = 167668511;
  this.H = 8196;
}
g = X.prototype;
g.toString = function() {
  return cc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.W = function(a, b) {
  return z.w(this, b, null);
};
g.O = function(a, b, c) {
  return "number" === typeof b ? y.w(this, b, c) : c;
};
g.fb = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.A) {
      var e = ye(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var h = f + a, k = e[f], d = b.w ? b.w(d, h, k) : b.call(null, d, h, k);
            if (Dc(d)) {
              e = d;
              break a;
            }
            f += 1;
          } else {
            e = d;
            break a;
          }
        }
      }
      if (Dc(e)) {
        return b = e, O.h ? O.h(b) : O.call(null, b);
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
g.S = function(a, b) {
  return ze(this, b)[b & 31];
};
g.oa = function(a, b, c) {
  return 0 <= b && b < this.A ? ye(this, b)[b & 31] : c;
};
g.Sb = function(a, b, c) {
  if (0 <= b && b < this.A) {
    return ue(this) <= b ? (a = Ia(this.tail), a[b & 31] = c, new X(this.meta, this.A, this.shift, this.root, a, null)) : new X(this.meta, this.A, this.shift, Ae(this, this.shift, this.root, b, c), this.tail, null);
  }
  if (b === this.A) {
    return Za(this, c);
  }
  throw Error([x("Index "), x(b), x(" out of bounds  [0,"), x(this.A), x("]")].join(""));
};
g.ub = function() {
  var a = this.A;
  return new Ce(0, 0, 0 < S(this) ? ye(this, 0) : null, this, 0, a);
};
g.T = function() {
  return this.meta;
};
g.$ = function() {
  return this.A;
};
g.Lb = function() {
  return y.l(this, 0);
};
g.Mb = function() {
  return y.l(this, 1);
};
g.hb = function() {
  return 0 < this.A ? y.l(this, this.A - 1) : null;
};
g.ib = function() {
  if (0 === this.A) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.A) {
    return yb(Rc, this.meta);
  }
  if (1 < this.A - ue(this)) {
    return new X(this.meta, this.A - 1, this.shift, this.root, this.tail.slice(0, -1), null);
  }
  var a = ye(this, this.A - 2), b = Be(this, this.shift, this.root), b = null == b ? Y : b, c = this.A - 1;
  return 5 < this.shift && null == b.o[1] ? new X(this.meta, c, this.shift - 5, b.o[0], a, null) : new X(this.meta, c, this.shift, b, a, null);
};
g.R = function() {
  var a = this.F;
  return null != a ? a : this.F = a = xc(this);
};
g.G = function(a, b) {
  if (b instanceof X) {
    if (this.A === S(b)) {
      for (var c = ac(this), d = ac(b);;) {
        if (r(c.Xb())) {
          var e = c.next(), f = d.next();
          if (!N.l(e, f)) {
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
    return Mc(this, b);
  }
};
g.Xa = function() {
  var a = this;
  return new De(a.A, a.shift, function() {
    var b = a.root;
    return Ee.h ? Ee.h(b) : Ee.call(null, b);
  }(), function() {
    var b = a.tail;
    return Fe.h ? Fe.h(b) : Fe.call(null, b);
  }());
};
g.da = function() {
  return cd(Rc, this.meta);
};
g.ea = function(a, b) {
  return Ec(this, b);
};
g.fa = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.A) {
      var e = ye(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var h = e[f], d = b.l ? b.l(d, h) : b.call(null, d, h);
            if (Dc(d)) {
              e = d;
              break a;
            }
            f += 1;
          } else {
            e = d;
            break a;
          }
        }
      }
      if (Dc(e)) {
        return b = e, O.h ? O.h(b) : O.call(null, b);
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
g.cb = function(a, b, c) {
  if ("number" === typeof b) {
    return sb(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
g.ba = function() {
  if (0 === this.A) {
    return null;
  }
  if (32 >= this.A) {
    return new I(this.tail, 0);
  }
  var a;
  a: {
    a = this.root;
    for (var b = this.shift;;) {
      if (0 < b) {
        b -= 5, a = a.o[0];
      } else {
        a = a.o;
        break a;
      }
    }
  }
  return Ge ? Ge(this, a, 0, 0) : He.call(null, this, a, 0, 0);
};
g.X = function(a, b) {
  return new X(b, this.A, this.shift, this.root, this.tail, this.F);
};
g.Z = function(a, b) {
  if (32 > this.A - ue(this)) {
    for (var c = this.tail.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.tail[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new X(this.meta, this.A + 1, this.shift, this.root, d, null);
  }
  c = (d = this.A >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = se(null), d.o[0] = this.root, e = ve(null, this.shift, new re(null, this.tail)), d.o[1] = e) : d = we(this, this.shift, this.root, new re(null, this.tail));
  return new X(this.meta, this.A + 1, c, d, [b], null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.S(null, c);
      case 3:
        return this.oa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = function(a, c) {
    return this.S(null, c);
  };
  a.w = function(a, c, d) {
    return this.oa(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ia(b)));
};
g.h = function(a) {
  return this.S(null, a);
};
g.l = function(a, b) {
  return this.oa(null, a, b);
};
var Y = new re(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Rc = new X(null, 0, 5, Y, [], yc);
function Ie(a) {
  var b = a.length;
  if (32 > b) {
    return new X(null, b, 5, Y, a, null);
  }
  for (var c = 32, d = (new X(null, 32, 5, Y, a.slice(0, 32), null)).Xa(null);;) {
    if (c < b) {
      var e = c + 1, d = $d.l(d, a[c]), c = e
    } else {
      return Pb(d);
    }
  }
}
X.prototype[Ha] = function() {
  return uc(this);
};
function Je(a) {
  return Ca(a) ? Ie(a) : Pb(Oa(Ob, Mb(Rc), a));
}
var Ke = function Ke() {
  return Ke.C(0 < arguments.length ? new I(Array.prototype.slice.call(arguments, 0), 0) : null);
};
Ke.C = function(a) {
  return a instanceof I && 0 === a.i ? Ie(a.o) : Je(a);
};
Ke.J = 0;
Ke.I = function(a) {
  return Ke.C(G(a));
};
function Le(a, b, c, d, e, f) {
  this.pa = a;
  this.node = b;
  this.i = c;
  this.off = d;
  this.meta = e;
  this.F = f;
  this.B = 32375020;
  this.H = 1536;
}
g = Le.prototype;
g.toString = function() {
  return cc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.T = function() {
  return this.meta;
};
g.la = function() {
  if (this.off + 1 < this.node.length) {
    var a;
    a = this.pa;
    var b = this.node, c = this.i, d = this.off + 1;
    a = Ge ? Ge(a, b, c, d) : He.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Yb(this);
};
g.R = function() {
  var a = this.F;
  return null != a ? a : this.F = a = xc(this);
};
g.G = function(a, b) {
  return Mc(this, b);
};
g.da = function() {
  return cd(Rc, this.meta);
};
g.ea = function(a, b) {
  var c;
  c = this.pa;
  var d = this.i + this.off, e = S(this.pa);
  c = Me ? Me(c, d, e) : Ne.call(null, c, d, e);
  return Ec(c, b);
};
g.fa = function(a, b, c) {
  a = this.pa;
  var d = this.i + this.off, e = S(this.pa);
  a = Me ? Me(a, d, e) : Ne.call(null, a, d, e);
  return Fc(a, b, c);
};
g.ga = function() {
  return this.node[this.off];
};
g.ma = function() {
  if (this.off + 1 < this.node.length) {
    var a;
    a = this.pa;
    var b = this.node, c = this.i, d = this.off + 1;
    a = Ge ? Ge(a, b, c, d) : He.call(null, a, b, c, d);
    return null == a ? K : a;
  }
  return Wb(this);
};
g.ba = function() {
  return this;
};
g.Ib = function() {
  var a = this.node;
  return new Sd(a, this.off, a.length);
};
g.Jb = function() {
  var a = this.i + this.node.length;
  if (a < Wa(this.pa)) {
    var b = this.pa, c = ye(this.pa, a);
    return Ge ? Ge(b, c, a, 0) : He.call(null, b, c, a, 0);
  }
  return K;
};
g.X = function(a, b) {
  var c = this.pa, d = this.node, e = this.i, f = this.off;
  return Oe ? Oe(c, d, e, f, b) : He.call(null, c, d, e, f, b);
};
g.Z = function(a, b) {
  return Q(b, this);
};
g.Hb = function() {
  var a = this.i + this.node.length;
  if (a < Wa(this.pa)) {
    var b = this.pa, c = ye(this.pa, a);
    return Ge ? Ge(b, c, a, 0) : He.call(null, b, c, a, 0);
  }
  return null;
};
Le.prototype[Ha] = function() {
  return uc(this);
};
function He() {
  switch(arguments.length) {
    case 3:
      var a = arguments[0], b = arguments[1], c = arguments[2];
      return new Le(a, ze(a, b), b, c, null, null);
    case 4:
      return Ge(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Oe(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
}
function Ge(a, b, c, d) {
  return new Le(a, b, c, d, null, null);
}
function Oe(a, b, c, d, e) {
  return new Le(a, b, c, d, e, null);
}
function Pe(a, b, c, d, e) {
  this.meta = a;
  this.ra = b;
  this.start = c;
  this.end = d;
  this.F = e;
  this.B = 167666463;
  this.H = 8192;
}
g = Pe.prototype;
g.toString = function() {
  return cc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.W = function(a, b) {
  return z.w(this, b, null);
};
g.O = function(a, b, c) {
  return "number" === typeof b ? y.w(this, b, c) : c;
};
g.fb = function(a, b, c) {
  a = this.start;
  for (var d = 0;;) {
    if (a < this.end) {
      var e = d, f = y.l(this.ra, a);
      c = b.w ? b.w(c, e, f) : b.call(null, c, e, f);
      if (Dc(c)) {
        return b = c, O.h ? O.h(b) : O.call(null, b);
      }
      d += 1;
      a += 1;
    } else {
      return c;
    }
  }
};
g.S = function(a, b) {
  return 0 > b || this.end <= this.start + b ? xe(b, this.end - this.start) : y.l(this.ra, this.start + b);
};
g.oa = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : y.w(this.ra, this.start + b, c);
};
g.Sb = function(a, b, c) {
  var d = this.start + b;
  a = this.meta;
  c = Xc.w(this.ra, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return Qe.V ? Qe.V(a, c, b, d, null) : Qe.call(null, a, c, b, d, null);
};
g.T = function() {
  return this.meta;
};
g.$ = function() {
  return this.end - this.start;
};
g.hb = function() {
  return y.l(this.ra, this.end - 1);
};
g.ib = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  var a = this.meta, b = this.ra, c = this.start, d = this.end - 1;
  return Qe.V ? Qe.V(a, b, c, d, null) : Qe.call(null, a, b, c, d, null);
};
g.R = function() {
  var a = this.F;
  return null != a ? a : this.F = a = xc(this);
};
g.G = function(a, b) {
  return Mc(this, b);
};
g.da = function() {
  return cd(Rc, this.meta);
};
g.ea = function(a, b) {
  return Ec(this, b);
};
g.fa = function(a, b, c) {
  return Fc(this, b, c);
};
g.cb = function(a, b, c) {
  if ("number" === typeof b) {
    return sb(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.ba = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : Q(y.l(a.ra, e), new Pd(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
g.X = function(a, b) {
  var c = this.ra, d = this.start, e = this.end, f = this.F;
  return Qe.V ? Qe.V(b, c, d, e, f) : Qe.call(null, b, c, d, e, f);
};
g.Z = function(a, b) {
  var c = this.meta, d = sb(this.ra, this.end, b), e = this.start, f = this.end + 1;
  return Qe.V ? Qe.V(c, d, e, f, null) : Qe.call(null, c, d, e, f, null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.S(null, c);
      case 3:
        return this.oa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = function(a, c) {
    return this.S(null, c);
  };
  a.w = function(a, c, d) {
    return this.oa(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ia(b)));
};
g.h = function(a) {
  return this.S(null, a);
};
g.l = function(a, b) {
  return this.oa(null, a, b);
};
Pe.prototype[Ha] = function() {
  return uc(this);
};
function Qe(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Pe) {
      c = b.start + c, d = b.start + d, b = b.ra;
    } else {
      var f = S(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Pe(a, b, c, d, e);
    }
  }
}
function Ne() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0];
      return Me(a, arguments[1], S(a));
    case 3:
      return Me(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
}
function Me(a, b, c) {
  return Qe(null, a, b, c, null);
}
function Re(a, b) {
  return a === b.M ? b : new re(a, Ia(b.o));
}
function Ee(a) {
  return new re({}, Ia(a.o));
}
function Fe(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  ld(a, 0, b, 0, a.length);
  return b;
}
var Se = function Se(b, c, d, e) {
  d = Re(b.root.M, d);
  var f = b.A - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.o[f];
    b = null != h ? Se(b, c - 5, h, e) : ve(b.root.M, c - 5, e);
  }
  d.o[f] = b;
  return d;
};
function De(a, b, c, d) {
  this.A = a;
  this.shift = b;
  this.root = c;
  this.tail = d;
  this.H = 88;
  this.B = 275;
}
g = De.prototype;
g.kb = function(a, b) {
  if (this.root.M) {
    if (32 > this.A - ue(this)) {
      this.tail[this.A & 31] = b;
    } else {
      var c = new re(this.root.M, this.tail), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.tail = d;
      if (this.A >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = ve(this.root.M, this.shift, c);
        this.root = new re(this.root.M, d);
        this.shift = e;
      } else {
        this.root = Se(this, this.shift, this.root, c);
      }
    }
    this.A += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
g.lb = function() {
  if (this.root.M) {
    this.root.M = null;
    var a = this.A - ue(this), b = Array(a);
    ld(this.tail, 0, b, 0, a);
    return new X(null, this.A, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
g.jb = function(a, b, c) {
  if ("number" === typeof b) {
    return Rb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
g.dc = function(a, b, c) {
  var d = this;
  if (d.root.M) {
    if (0 <= b && b < d.A) {
      return ue(this) <= b ? d.tail[b & 31] = c : (a = function() {
        return function f(a, k) {
          var m = Re(d.root.M, k);
          if (0 === a) {
            m.o[b & 31] = c;
          } else {
            var q = b >>> a & 31, p = f(a - 5, m.o[q]);
            m.o[q] = p;
          }
          return m;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.A) {
      return Ob(this, c);
    }
    throw Error([x("Index "), x(b), x(" out of bounds for TransientVector of length"), x(d.A)].join(""));
  }
  throw Error("assoc! after persistent!");
};
g.$ = function() {
  if (this.root.M) {
    return this.A;
  }
  throw Error("count after persistent!");
};
g.S = function(a, b) {
  if (this.root.M) {
    return ze(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.oa = function(a, b, c) {
  return 0 <= b && b < this.A ? y.l(this, b) : c;
};
g.W = function(a, b) {
  return z.w(this, b, null);
};
g.O = function(a, b, c) {
  return "number" === typeof b ? y.w(this, b, c) : c;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.W(null, c);
      case 3:
        return this.O(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = function(a, c) {
    return this.W(null, c);
  };
  a.w = function(a, c, d) {
    return this.O(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ia(b)));
};
g.h = function(a) {
  return this.W(null, a);
};
g.l = function(a, b) {
  return this.O(null, a, b);
};
function Te() {
  this.B = 2097152;
  this.H = 0;
}
Te.prototype.equiv = function(a) {
  return this.G(null, a);
};
Te.prototype.G = function() {
  return !1;
};
var Ue = new Te;
function Ve(a, b) {
  return od(hd(b) ? S(a) === S(b) ? fe(Dd, W.l(function(a) {
    return N.l(Wc(b, J(a), Ue), J(M(a)));
  }, a)) : null : null);
}
function We(a) {
  this.s = a;
}
We.prototype.next = function() {
  if (null != this.s) {
    var a = J(this.s), b = T(a, 0), a = T(a, 1);
    this.s = M(this.s);
    return {value:[b, a], done:!1};
  }
  return {value:null, done:!0};
};
function Xe(a) {
  return new We(G(a));
}
function Ye(a) {
  this.s = a;
}
Ye.prototype.next = function() {
  if (null != this.s) {
    var a = J(this.s);
    this.s = M(this.s);
    return {value:[a, a], done:!1};
  }
  return {value:null, done:!0};
};
function Ze(a, b) {
  var c;
  if (b instanceof U) {
    a: {
      c = a.length;
      for (var d = b.ta, e = 0;;) {
        if (c <= e) {
          c = -1;
          break a;
        }
        var f = a[e];
        if (f instanceof U && d === f.ta) {
          c = e;
          break a;
        }
        e += 2;
      }
    }
  } else {
    if (c = "string" == typeof b, r(r(c) ? c : "number" === typeof b)) {
      a: {
        for (c = a.length, d = 0;;) {
          if (c <= d) {
            c = -1;
            break a;
          }
          if (b === a[d]) {
            c = d;
            break a;
          }
          d += 2;
        }
      }
    } else {
      if (b instanceof D) {
        a: {
          for (c = a.length, d = b.xa, e = 0;;) {
            if (c <= e) {
              c = -1;
              break a;
            }
            f = a[e];
            if (f instanceof D && d === f.xa) {
              c = e;
              break a;
            }
            e += 2;
          }
        }
      } else {
        if (null == b) {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (null == a[d]) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        } else {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (N.l(b, a[d])) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        }
      }
    }
  }
  return c;
}
function $e(a, b, c) {
  this.o = a;
  this.i = b;
  this.ka = c;
  this.B = 32374990;
  this.H = 0;
}
g = $e.prototype;
g.toString = function() {
  return cc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.T = function() {
  return this.ka;
};
g.la = function() {
  return this.i < this.o.length - 2 ? new $e(this.o, this.i + 2, this.ka) : null;
};
g.$ = function() {
  return (this.o.length - this.i) / 2;
};
g.R = function() {
  return xc(this);
};
g.G = function(a, b) {
  return Mc(this, b);
};
g.da = function() {
  return cd(K, this.ka);
};
g.ea = function(a, b) {
  return zd(b, this);
};
g.fa = function(a, b, c) {
  return Ad(b, c, this);
};
g.ga = function() {
  return new X(null, 2, 5, Y, [this.o[this.i], this.o[this.i + 1]], null);
};
g.ma = function() {
  return this.i < this.o.length - 2 ? new $e(this.o, this.i + 2, this.ka) : K;
};
g.ba = function() {
  return this;
};
g.X = function(a, b) {
  return new $e(this.o, this.i, b);
};
g.Z = function(a, b) {
  return Q(b, this);
};
$e.prototype[Ha] = function() {
  return uc(this);
};
function af(a, b, c) {
  this.o = a;
  this.i = b;
  this.A = c;
}
af.prototype.Xb = function() {
  return this.i < this.A;
};
af.prototype.next = function() {
  var a = new X(null, 2, 5, Y, [this.o[this.i], this.o[this.i + 1]], null);
  this.i += 2;
  return a;
};
function n(a, b, c, d) {
  this.meta = a;
  this.A = b;
  this.o = c;
  this.F = d;
  this.B = 16647951;
  this.H = 8196;
}
g = n.prototype;
g.toString = function() {
  return cc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.keys = function() {
  return uc(bf.h ? bf.h(this) : bf.call(null, this));
};
g.entries = function() {
  return Xe(G(this));
};
g.values = function() {
  return uc(cf.h ? cf.h(this) : cf.call(null, this));
};
g.has = function(a) {
  return qd(this, a);
};
g.get = function(a, b) {
  return this.O(null, a, b);
};
g.forEach = function(a) {
  for (var b = G(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.S(null, e), h = T(f, 0), f = T(f, 1);
      a.l ? a.l(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = G(b)) {
        jd(b) ? (c = Vb(b), b = Wb(b), h = c, d = S(c), c = h) : (c = J(b), h = T(c, 0), c = f = T(c, 1), a.l ? a.l(c, h) : a.call(null, c, h), b = M(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.W = function(a, b) {
  return z.w(this, b, null);
};
g.O = function(a, b, c) {
  a = Ze(this.o, b);
  return -1 === a ? c : this.o[a + 1];
};
g.fb = function(a, b, c) {
  a = this.o.length;
  for (var d = 0;;) {
    if (d < a) {
      var e = this.o[d], f = this.o[d + 1];
      c = b.w ? b.w(c, e, f) : b.call(null, c, e, f);
      if (Dc(c)) {
        return b = c, O.h ? O.h(b) : O.call(null, b);
      }
      d += 2;
    } else {
      return c;
    }
  }
};
g.ub = function() {
  return new af(this.o, 0, 2 * this.A);
};
g.T = function() {
  return this.meta;
};
g.$ = function() {
  return this.A;
};
g.R = function() {
  var a = this.F;
  return null != a ? a : this.F = a = zc(this);
};
g.G = function(a, b) {
  if (b && (b.B & 1024 || b.vc)) {
    var c = this.o.length;
    if (this.A === b.$(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.O(null, this.o[d], md);
          if (e !== md) {
            if (N.l(this.o[d + 1], e)) {
              d += 2;
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
    return Ve(this, b);
  }
};
g.Xa = function() {
  return new ef({}, this.o.length, Ia(this.o));
};
g.da = function() {
  return yb(ff, this.meta);
};
g.ea = function(a, b) {
  return zd(b, this);
};
g.fa = function(a, b, c) {
  return Ad(b, c, this);
};
g.Kb = function(a, b) {
  if (0 <= Ze(this.o, b)) {
    var c = this.o.length, d = c - 2;
    if (0 === d) {
      return Xa(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new n(this.meta, this.A - 1, d, null);
      }
      N.l(b, this.o[e]) || (d[f] = this.o[e], d[f + 1] = this.o[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
g.cb = function(a, b, c) {
  a = Ze(this.o, b);
  if (-1 === a) {
    if (this.A < gf) {
      a = this.o;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new n(this.meta, this.A + 1, e, null);
    }
    return yb(hb(qe(Yc, this), b, c), this.meta);
  }
  if (c === this.o[a + 1]) {
    return this;
  }
  b = Ia(this.o);
  b[a + 1] = c;
  return new n(this.meta, this.A, b, null);
};
g.Gb = function(a, b) {
  return -1 !== Ze(this.o, b);
};
g.ba = function() {
  var a = this.o;
  return 0 <= a.length - 2 ? new $e(a, 0, null) : null;
};
g.X = function(a, b) {
  return new n(b, this.A, this.o, this.F);
};
g.Z = function(a, b) {
  if (id(b)) {
    return hb(this, y.l(b, 0), y.l(b, 1));
  }
  for (var c = this, d = G(b);;) {
    if (null == d) {
      return c;
    }
    var e = J(d);
    if (id(e)) {
      c = hb(c, y.l(e, 0), y.l(e, 1)), d = M(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.W(null, c);
      case 3:
        return this.O(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = function(a, c) {
    return this.W(null, c);
  };
  a.w = function(a, c, d) {
    return this.O(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ia(b)));
};
g.h = function(a) {
  return this.W(null, a);
};
g.l = function(a, b) {
  return this.O(null, a, b);
};
var ff = new n(null, 0, [], Bc), gf = 8;
n.prototype[Ha] = function() {
  return uc(this);
};
function ef(a, b, c) {
  this.Ya = a;
  this.$a = b;
  this.o = c;
  this.B = 258;
  this.H = 56;
}
g = ef.prototype;
g.$ = function() {
  if (r(this.Ya)) {
    return Fd(this.$a);
  }
  throw Error("count after persistent!");
};
g.W = function(a, b) {
  return z.w(this, b, null);
};
g.O = function(a, b, c) {
  if (r(this.Ya)) {
    return a = Ze(this.o, b), -1 === a ? c : this.o[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.kb = function(a, b) {
  if (r(this.Ya)) {
    if (b ? b.B & 2048 || b.wc || (b.B ? 0 : u(lb, b)) : u(lb, b)) {
      return Qb(this, hf.h ? hf.h(b) : hf.call(null, b), jf.h ? jf.h(b) : jf.call(null, b));
    }
    for (var c = G(b), d = this;;) {
      var e = J(c);
      if (r(e)) {
        var f = e, c = M(c), d = Qb(d, function() {
          var a = f;
          return hf.h ? hf.h(a) : hf.call(null, a);
        }(), function() {
          var a = f;
          return jf.h ? jf.h(a) : jf.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
g.lb = function() {
  if (r(this.Ya)) {
    return this.Ya = !1, new n(null, Fd(this.$a), this.o, null);
  }
  throw Error("persistent! called twice");
};
g.jb = function(a, b, c) {
  if (r(this.Ya)) {
    a = Ze(this.o, b);
    if (-1 === a) {
      if (this.$a + 2 <= 2 * gf) {
        return this.$a += 2, this.o.push(b), this.o.push(c), this;
      }
      a = this.$a;
      var d = this.o;
      a = kf.l ? kf.l(a, d) : kf.call(null, a, d);
      return Qb(a, b, c);
    }
    c !== this.o[a + 1] && (this.o[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function kf(a, b) {
  for (var c = Mb(Yc), d = 0;;) {
    if (d < a) {
      c = Qb(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function lf() {
  this.ca = !1;
}
function mf(a, b) {
  return a === b ? !0 : Md(a, b) ? !0 : N.l(a, b);
}
function nf(a, b, c) {
  a = Ia(a);
  a[b] = c;
  return a;
}
function of(a, b) {
  var c = Array(a.length - 2);
  ld(a, 0, c, 0, 2 * b);
  ld(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
function pf(a, b, c, d) {
  a = a.Sa(b);
  a.o[c] = d;
  return a;
}
function qf(a, b, c) {
  for (var d = a.length, e = 0, f = c;;) {
    if (e < d) {
      c = a[e];
      if (null != c) {
        var h = a[e + 1];
        c = b.w ? b.w(f, c, h) : b.call(null, f, c, h);
      } else {
        c = a[e + 1], c = null != c ? c.rb(b, f) : f;
      }
      if (Dc(c)) {
        return a = c, O.h ? O.h(a) : O.call(null, a);
      }
      e += 2;
      f = c;
    } else {
      return f;
    }
  }
}
function rf(a, b, c) {
  this.M = a;
  this.N = b;
  this.o = c;
}
g = rf.prototype;
g.Sa = function(a) {
  if (a === this.M) {
    return this;
  }
  var b = Gd(this.N), c = Array(0 > b ? 4 : 2 * (b + 1));
  ld(this.o, 0, c, 0, 2 * b);
  return new rf(a, this.N, c);
};
g.pb = function() {
  var a = this.o;
  return sf ? sf(a) : tf.call(null, a);
};
g.rb = function(a, b) {
  return qf(this.o, a, b);
};
g.Oa = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.N & e)) {
    return d;
  }
  var f = Gd(this.N & e - 1), e = this.o[2 * f], f = this.o[2 * f + 1];
  return null == e ? f.Oa(a + 5, b, c, d) : mf(c, e) ? f : d;
};
g.va = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = Gd(this.N & h - 1);
  if (0 === (this.N & h)) {
    var m = Gd(this.N);
    if (2 * m < this.o.length) {
      a = this.Sa(a);
      b = a.o;
      f.ca = !0;
      a: {
        for (c = 2 * (m - k), f = 2 * k + (c - 1), m = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[m] = b[f];
          --m;
          --c;
          --f;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.N |= h;
      return a;
    }
    if (16 <= m) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = uf.va(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.N >>> d & 1) && (k[d] = null != this.o[e] ? uf.va(a, b + 5, lc(this.o[e]), this.o[e], this.o[e + 1], f) : this.o[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new vf(a, m + 1, k);
    }
    b = Array(2 * (m + 4));
    ld(this.o, 0, b, 0, 2 * k);
    b[2 * k] = d;
    b[2 * k + 1] = e;
    ld(this.o, 2 * k, b, 2 * (k + 1), 2 * (m - k));
    f.ca = !0;
    a = this.Sa(a);
    a.o = b;
    a.N |= h;
    return a;
  }
  m = this.o[2 * k];
  h = this.o[2 * k + 1];
  if (null == m) {
    return m = h.va(a, b + 5, c, d, e, f), m === h ? this : pf(this, a, 2 * k + 1, m);
  }
  if (mf(d, m)) {
    return e === h ? this : pf(this, a, 2 * k + 1, e);
  }
  f.ca = !0;
  f = b + 5;
  d = wf ? wf(a, f, m, h, c, d, e) : xf.call(null, a, f, m, h, c, d, e);
  e = 2 * k;
  k = 2 * k + 1;
  a = this.Sa(a);
  a.o[e] = null;
  a.o[k] = d;
  return a;
};
g.ua = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = Gd(this.N & f - 1);
  if (0 === (this.N & f)) {
    var k = Gd(this.N);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = uf.ua(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.N >>> c & 1) && (h[c] = null != this.o[d] ? uf.ua(a + 5, lc(this.o[d]), this.o[d], this.o[d + 1], e) : this.o[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new vf(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    ld(this.o, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    ld(this.o, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.ca = !0;
    return new rf(null, this.N | f, a);
  }
  var m = this.o[2 * h], f = this.o[2 * h + 1];
  if (null == m) {
    return k = f.ua(a + 5, b, c, d, e), k === f ? this : new rf(null, this.N, nf(this.o, 2 * h + 1, k));
  }
  if (mf(c, m)) {
    return d === f ? this : new rf(null, this.N, nf(this.o, 2 * h + 1, d));
  }
  e.ca = !0;
  e = this.N;
  k = this.o;
  a += 5;
  a = yf ? yf(a, m, f, b, c, d) : xf.call(null, a, m, f, b, c, d);
  c = 2 * h;
  h = 2 * h + 1;
  d = Ia(k);
  d[c] = null;
  d[h] = a;
  return new rf(null, e, d);
};
g.qb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.N & d)) {
    return this;
  }
  var e = Gd(this.N & d - 1), f = this.o[2 * e], h = this.o[2 * e + 1];
  return null == f ? (a = h.qb(a + 5, b, c), a === h ? this : null != a ? new rf(null, this.N, nf(this.o, 2 * e + 1, a)) : this.N === d ? null : new rf(null, this.N ^ d, of(this.o, e))) : mf(c, f) ? new rf(null, this.N ^ d, of(this.o, e)) : this;
};
var uf = new rf(null, 0, []);
function vf(a, b, c) {
  this.M = a;
  this.A = b;
  this.o = c;
}
g = vf.prototype;
g.Sa = function(a) {
  return a === this.M ? this : new vf(a, this.A, Ia(this.o));
};
g.pb = function() {
  var a = this.o;
  return zf ? zf(a) : Af.call(null, a);
};
g.rb = function(a, b) {
  for (var c = this.o.length, d = 0, e = b;;) {
    if (d < c) {
      var f = this.o[d];
      if (null != f && (e = f.rb(a, e), Dc(e))) {
        return c = e, O.h ? O.h(c) : O.call(null, c);
      }
      d += 1;
    } else {
      return e;
    }
  }
};
g.Oa = function(a, b, c, d) {
  var e = this.o[b >>> a & 31];
  return null != e ? e.Oa(a + 5, b, c, d) : d;
};
g.va = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.o[h];
  if (null == k) {
    return a = pf(this, a, h, uf.va(a, b + 5, c, d, e, f)), a.A += 1, a;
  }
  b = k.va(a, b + 5, c, d, e, f);
  return b === k ? this : pf(this, a, h, b);
};
g.ua = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.o[f];
  if (null == h) {
    return new vf(null, this.A + 1, nf(this.o, f, uf.ua(a + 5, b, c, d, e)));
  }
  a = h.ua(a + 5, b, c, d, e);
  return a === h ? this : new vf(null, this.A, nf(this.o, f, a));
};
g.qb = function(a, b, c) {
  var d = b >>> a & 31, e = this.o[d];
  if (null != e) {
    a = e.qb(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.A) {
          a: {
            e = this.o;
            a = e.length;
            b = Array(2 * (this.A - 1));
            c = 0;
            for (var f = 1, h = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, h |= 1 << c), c += 1;
              } else {
                d = new rf(null, h, b);
                break a;
              }
            }
          }
        } else {
          d = new vf(null, this.A - 1, nf(this.o, d, a));
        }
      } else {
        d = new vf(null, this.A, nf(this.o, d, a));
      }
    }
    return d;
  }
  return this;
};
function Bf(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (mf(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return -1;
    }
  }
}
function Cf(a, b, c, d) {
  this.M = a;
  this.Ma = b;
  this.A = c;
  this.o = d;
}
g = Cf.prototype;
g.Sa = function(a) {
  if (a === this.M) {
    return this;
  }
  var b = Array(2 * (this.A + 1));
  ld(this.o, 0, b, 0, 2 * this.A);
  return new Cf(a, this.Ma, this.A, b);
};
g.pb = function() {
  var a = this.o;
  return sf ? sf(a) : tf.call(null, a);
};
g.rb = function(a, b) {
  return qf(this.o, a, b);
};
g.Oa = function(a, b, c, d) {
  a = Bf(this.o, this.A, c);
  return 0 > a ? d : mf(c, this.o[a]) ? this.o[a + 1] : d;
};
g.va = function(a, b, c, d, e, f) {
  if (c === this.Ma) {
    b = Bf(this.o, this.A, d);
    if (-1 === b) {
      if (this.o.length > 2 * this.A) {
        return b = 2 * this.A, c = 2 * this.A + 1, a = this.Sa(a), a.o[b] = d, a.o[c] = e, f.ca = !0, a.A += 1, a;
      }
      c = this.o.length;
      b = Array(c + 2);
      ld(this.o, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.ca = !0;
      d = this.A + 1;
      a === this.M ? (this.o = b, this.A = d, a = this) : a = new Cf(this.M, this.Ma, d, b);
      return a;
    }
    return this.o[b + 1] === e ? this : pf(this, a, b + 1, e);
  }
  return (new rf(a, 1 << (this.Ma >>> b & 31), [null, this, null, null])).va(a, b, c, d, e, f);
};
g.ua = function(a, b, c, d, e) {
  return b === this.Ma ? (a = Bf(this.o, this.A, c), -1 === a ? (a = 2 * this.A, b = Array(a + 2), ld(this.o, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ca = !0, new Cf(null, this.Ma, this.A + 1, b)) : N.l(this.o[a], d) ? this : new Cf(null, this.Ma, this.A, nf(this.o, a + 1, d))) : (new rf(null, 1 << (this.Ma >>> a & 31), [null, this])).ua(a, b, c, d, e);
};
g.qb = function(a, b, c) {
  a = Bf(this.o, this.A, c);
  return -1 === a ? this : 1 === this.A ? null : new Cf(null, this.Ma, this.A - 1, of(this.o, Fd(a)));
};
function xf() {
  switch(arguments.length) {
    case 6:
      return yf(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return wf(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
}
function yf(a, b, c, d, e, f) {
  var h = lc(b);
  if (h === d) {
    return new Cf(null, h, 2, [b, c, e, f]);
  }
  var k = new lf;
  return uf.ua(a, h, b, c, k).ua(a, d, e, f, k);
}
function wf(a, b, c, d, e, f, h) {
  var k = lc(c);
  if (k === e) {
    return new Cf(null, k, 2, [c, d, f, h]);
  }
  var m = new lf;
  return uf.va(a, b, k, c, d, m).va(a, b, e, f, h, m);
}
function Df(a, b, c, d, e) {
  this.meta = a;
  this.Pa = b;
  this.i = c;
  this.s = d;
  this.F = e;
  this.B = 32374860;
  this.H = 0;
}
g = Df.prototype;
g.toString = function() {
  return cc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.T = function() {
  return this.meta;
};
g.R = function() {
  var a = this.F;
  return null != a ? a : this.F = a = xc(this);
};
g.G = function(a, b) {
  return Mc(this, b);
};
g.da = function() {
  return cd(K, this.meta);
};
g.ea = function(a, b) {
  return zd(b, this);
};
g.fa = function(a, b, c) {
  return Ad(b, c, this);
};
g.ga = function() {
  return null == this.s ? new X(null, 2, 5, Y, [this.Pa[this.i], this.Pa[this.i + 1]], null) : J(this.s);
};
g.ma = function() {
  if (null == this.s) {
    var a = this.Pa, b = this.i + 2;
    return Ef ? Ef(a, b, null) : tf.call(null, a, b, null);
  }
  var a = this.Pa, b = this.i, c = M(this.s);
  return Ef ? Ef(a, b, c) : tf.call(null, a, b, c);
};
g.ba = function() {
  return this;
};
g.X = function(a, b) {
  return new Df(b, this.Pa, this.i, this.s, this.F);
};
g.Z = function(a, b) {
  return Q(b, this);
};
Df.prototype[Ha] = function() {
  return uc(this);
};
function tf() {
  switch(arguments.length) {
    case 1:
      return sf(arguments[0]);
    case 3:
      return Ef(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
}
function sf(a) {
  return Ef(a, 0, null);
}
function Ef(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new Df(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (r(d) && (d = d.pb(), r(d))) {
          return new Df(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new Df(null, a, b, c, null);
  }
}
function Ff(a, b, c, d, e) {
  this.meta = a;
  this.Pa = b;
  this.i = c;
  this.s = d;
  this.F = e;
  this.B = 32374860;
  this.H = 0;
}
g = Ff.prototype;
g.toString = function() {
  return cc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.T = function() {
  return this.meta;
};
g.R = function() {
  var a = this.F;
  return null != a ? a : this.F = a = xc(this);
};
g.G = function(a, b) {
  return Mc(this, b);
};
g.da = function() {
  return cd(K, this.meta);
};
g.ea = function(a, b) {
  return zd(b, this);
};
g.fa = function(a, b, c) {
  return Ad(b, c, this);
};
g.ga = function() {
  return J(this.s);
};
g.ma = function() {
  var a = this.Pa, b = this.i, c = M(this.s);
  return Gf ? Gf(null, a, b, c) : Af.call(null, null, a, b, c);
};
g.ba = function() {
  return this;
};
g.X = function(a, b) {
  return new Ff(b, this.Pa, this.i, this.s, this.F);
};
g.Z = function(a, b) {
  return Q(b, this);
};
Ff.prototype[Ha] = function() {
  return uc(this);
};
function Af() {
  switch(arguments.length) {
    case 1:
      return zf(arguments[0]);
    case 4:
      return Gf(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
}
function zf(a) {
  return Gf(null, a, 0, null);
}
function Gf(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (r(e) && (e = e.pb(), r(e))) {
          return new Ff(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new Ff(a, b, c, d, null);
  }
}
function Hf(a, b, c, d, e, f) {
  this.meta = a;
  this.A = b;
  this.root = c;
  this.ha = d;
  this.na = e;
  this.F = f;
  this.B = 16123663;
  this.H = 8196;
}
g = Hf.prototype;
g.toString = function() {
  return cc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.keys = function() {
  return uc(bf.h ? bf.h(this) : bf.call(null, this));
};
g.entries = function() {
  return Xe(G(this));
};
g.values = function() {
  return uc(cf.h ? cf.h(this) : cf.call(null, this));
};
g.has = function(a) {
  return qd(this, a);
};
g.get = function(a, b) {
  return this.O(null, a, b);
};
g.forEach = function(a) {
  for (var b = G(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.S(null, e), h = T(f, 0), f = T(f, 1);
      a.l ? a.l(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = G(b)) {
        jd(b) ? (c = Vb(b), b = Wb(b), h = c, d = S(c), c = h) : (c = J(b), h = T(c, 0), c = f = T(c, 1), a.l ? a.l(c, h) : a.call(null, c, h), b = M(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.W = function(a, b) {
  return z.w(this, b, null);
};
g.O = function(a, b, c) {
  return null == b ? this.ha ? this.na : c : null == this.root ? c : this.root.Oa(0, lc(b), b, c);
};
g.fb = function(a, b, c) {
  this.ha && (a = this.na, c = b.w ? b.w(c, null, a) : b.call(null, c, null, a));
  return Dc(c) ? O.h ? O.h(c) : O.call(null, c) : null != this.root ? this.root.rb(b, c) : c;
};
g.T = function() {
  return this.meta;
};
g.$ = function() {
  return this.A;
};
g.R = function() {
  var a = this.F;
  return null != a ? a : this.F = a = zc(this);
};
g.G = function(a, b) {
  return Ve(this, b);
};
g.Xa = function() {
  return new If({}, this.root, this.A, this.ha, this.na);
};
g.da = function() {
  return yb(Yc, this.meta);
};
g.Kb = function(a, b) {
  if (null == b) {
    return this.ha ? new Hf(this.meta, this.A - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.qb(0, lc(b), b);
  return c === this.root ? this : new Hf(this.meta, this.A - 1, c, this.ha, this.na, null);
};
g.cb = function(a, b, c) {
  if (null == b) {
    return this.ha && c === this.na ? this : new Hf(this.meta, this.ha ? this.A : this.A + 1, this.root, !0, c, null);
  }
  a = new lf;
  b = (null == this.root ? uf : this.root).ua(0, lc(b), b, c, a);
  return b === this.root ? this : new Hf(this.meta, a.ca ? this.A + 1 : this.A, b, this.ha, this.na, null);
};
g.Gb = function(a, b) {
  return null == b ? this.ha : null == this.root ? !1 : this.root.Oa(0, lc(b), b, md) !== md;
};
g.ba = function() {
  if (0 < this.A) {
    var a = null != this.root ? this.root.pb() : null;
    return this.ha ? Q(new X(null, 2, 5, Y, [null, this.na], null), a) : a;
  }
  return null;
};
g.X = function(a, b) {
  return new Hf(b, this.A, this.root, this.ha, this.na, this.F);
};
g.Z = function(a, b) {
  if (id(b)) {
    return hb(this, y.l(b, 0), y.l(b, 1));
  }
  for (var c = this, d = G(b);;) {
    if (null == d) {
      return c;
    }
    var e = J(d);
    if (id(e)) {
      c = hb(c, y.l(e, 0), y.l(e, 1)), d = M(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.W(null, c);
      case 3:
        return this.O(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = function(a, c) {
    return this.W(null, c);
  };
  a.w = function(a, c, d) {
    return this.O(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ia(b)));
};
g.h = function(a) {
  return this.W(null, a);
};
g.l = function(a, b) {
  return this.O(null, a, b);
};
var Yc = new Hf(null, 0, null, !1, null, Bc);
Hf.prototype[Ha] = function() {
  return uc(this);
};
function If(a, b, c, d, e) {
  this.M = a;
  this.root = b;
  this.count = c;
  this.ha = d;
  this.na = e;
  this.B = 258;
  this.H = 56;
}
function Jf(a, b) {
  if (a.M) {
    if (b ? b.B & 2048 || b.wc || (b.B ? 0 : u(lb, b)) : u(lb, b)) {
      return Kf(a, hf.h ? hf.h(b) : hf.call(null, b), jf.h ? jf.h(b) : jf.call(null, b));
    }
    for (var c = G(b), d = a;;) {
      var e = J(c);
      if (r(e)) {
        var f = e, c = M(c), d = Kf(d, function() {
          var a = f;
          return hf.h ? hf.h(a) : hf.call(null, a);
        }(), function() {
          var a = f;
          return jf.h ? jf.h(a) : jf.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function Kf(a, b, c) {
  if (a.M) {
    if (null == b) {
      a.na !== c && (a.na = c), a.ha || (a.count += 1, a.ha = !0);
    } else {
      var d = new lf;
      b = (null == a.root ? uf : a.root).va(a.M, 0, lc(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ca && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
g = If.prototype;
g.$ = function() {
  if (this.M) {
    return this.count;
  }
  throw Error("count after persistent!");
};
g.W = function(a, b) {
  return null == b ? this.ha ? this.na : null : null == this.root ? null : this.root.Oa(0, lc(b), b);
};
g.O = function(a, b, c) {
  return null == b ? this.ha ? this.na : c : null == this.root ? c : this.root.Oa(0, lc(b), b, c);
};
g.kb = function(a, b) {
  return Jf(this, b);
};
g.lb = function() {
  var a;
  if (this.M) {
    this.M = null, a = new Hf(null, this.count, this.root, this.ha, this.na, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.jb = function(a, b, c) {
  return Kf(this, b, c);
};
var ne = function ne() {
  return ne.C(0 < arguments.length ? new I(Array.prototype.slice.call(arguments, 0), 0) : null);
};
ne.C = function(a) {
  for (var b = G(a), c = Mb(Yc);;) {
    if (b) {
      a = M(M(b));
      var d = J(b), b = J(M(b)), c = Qb(c, d, b), b = a;
    } else {
      return Pb(c);
    }
  }
};
ne.J = 0;
ne.I = function(a) {
  return ne.C(G(a));
};
var Lf = function Lf() {
  return Lf.C(0 < arguments.length ? new I(Array.prototype.slice.call(arguments, 0), 0) : null);
};
Lf.C = function(a) {
  a = a instanceof I && 0 === a.i ? a.o : Ma(a);
  for (var b = [], c = 0;;) {
    if (c < a.length) {
      var d = a[c], e = a[c + 1];
      -1 === Ze(b, d) && (b.push(d), b.push(e));
      c += 2;
    } else {
      break;
    }
  }
  return new n(null, b.length / 2, b, null);
};
Lf.J = 0;
Lf.I = function(a) {
  return Lf.C(G(a));
};
function Mf(a, b) {
  this.ia = a;
  this.ka = b;
  this.B = 32374988;
  this.H = 0;
}
g = Mf.prototype;
g.toString = function() {
  return cc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.T = function() {
  return this.ka;
};
g.la = function() {
  var a = this.ia, a = (a ? a.B & 128 || a.vb || (a.B ? 0 : u(eb, a)) : u(eb, a)) ? this.ia.la(null) : M(this.ia);
  return null == a ? null : new Mf(a, this.ka);
};
g.R = function() {
  return xc(this);
};
g.G = function(a, b) {
  return Mc(this, b);
};
g.da = function() {
  return cd(K, this.ka);
};
g.ea = function(a, b) {
  return zd(b, this);
};
g.fa = function(a, b, c) {
  return Ad(b, c, this);
};
g.ga = function() {
  return this.ia.ga(null).Lb();
};
g.ma = function() {
  var a = this.ia, a = (a ? a.B & 128 || a.vb || (a.B ? 0 : u(eb, a)) : u(eb, a)) ? this.ia.la(null) : M(this.ia);
  return null != a ? new Mf(a, this.ka) : K;
};
g.ba = function() {
  return this;
};
g.X = function(a, b) {
  return new Mf(this.ia, b);
};
g.Z = function(a, b) {
  return Q(b, this);
};
Mf.prototype[Ha] = function() {
  return uc(this);
};
function bf(a) {
  return (a = G(a)) ? new Mf(a, null) : null;
}
function hf(a) {
  return mb(a);
}
function Nf(a, b) {
  this.ia = a;
  this.ka = b;
  this.B = 32374988;
  this.H = 0;
}
g = Nf.prototype;
g.toString = function() {
  return cc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.T = function() {
  return this.ka;
};
g.la = function() {
  var a = this.ia, a = (a ? a.B & 128 || a.vb || (a.B ? 0 : u(eb, a)) : u(eb, a)) ? this.ia.la(null) : M(this.ia);
  return null == a ? null : new Nf(a, this.ka);
};
g.R = function() {
  return xc(this);
};
g.G = function(a, b) {
  return Mc(this, b);
};
g.da = function() {
  return cd(K, this.ka);
};
g.ea = function(a, b) {
  return zd(b, this);
};
g.fa = function(a, b, c) {
  return Ad(b, c, this);
};
g.ga = function() {
  return this.ia.ga(null).Mb();
};
g.ma = function() {
  var a = this.ia, a = (a ? a.B & 128 || a.vb || (a.B ? 0 : u(eb, a)) : u(eb, a)) ? this.ia.la(null) : M(this.ia);
  return null != a ? new Nf(a, this.ka) : K;
};
g.ba = function() {
  return this;
};
g.X = function(a, b) {
  return new Nf(this.ia, b);
};
g.Z = function(a, b) {
  return Q(b, this);
};
Nf.prototype[Ha] = function() {
  return uc(this);
};
function cf(a) {
  return (a = G(a)) ? new Nf(a, null) : null;
}
function jf(a) {
  return nb(a);
}
var Of = function Of() {
  return Of.C(0 < arguments.length ? new I(Array.prototype.slice.call(arguments, 0), 0) : null);
};
Of.C = function(a) {
  return r(ge(a)) ? Bd(function(a, c) {
    return Pc.l(r(a) ? a : ff, c);
  }, a) : null;
};
Of.J = 0;
Of.I = function(a) {
  return Of.C(G(a));
};
function Pf(a, b, c) {
  this.meta = a;
  this.Za = b;
  this.F = c;
  this.B = 15077647;
  this.H = 8196;
}
g = Pf.prototype;
g.toString = function() {
  return cc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.keys = function() {
  return uc(G(this));
};
g.entries = function() {
  var a = G(this);
  return new Ye(G(a));
};
g.values = function() {
  return uc(G(this));
};
g.has = function(a) {
  return qd(this, a);
};
g.forEach = function(a) {
  for (var b = G(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.S(null, e), h = T(f, 0), f = T(f, 1);
      a.l ? a.l(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = G(b)) {
        jd(b) ? (c = Vb(b), b = Wb(b), h = c, d = S(c), c = h) : (c = J(b), h = T(c, 0), c = f = T(c, 1), a.l ? a.l(c, h) : a.call(null, c, h), b = M(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.W = function(a, b) {
  return z.w(this, b, null);
};
g.O = function(a, b, c) {
  return gb(this.Za, b) ? b : c;
};
g.T = function() {
  return this.meta;
};
g.$ = function() {
  return Wa(this.Za);
};
g.R = function() {
  var a = this.F;
  return null != a ? a : this.F = a = zc(this);
};
g.G = function(a, b) {
  return gd(b) && S(this) === S(b) && fe(function(a) {
    return function(b) {
      return qd(a, b);
    };
  }(this), b);
};
g.Xa = function() {
  return new Qf(Mb(this.Za));
};
g.da = function() {
  return cd(Rf, this.meta);
};
g.ba = function() {
  return bf(this.Za);
};
g.X = function(a, b) {
  return new Pf(b, this.Za, this.F);
};
g.Z = function(a, b) {
  return new Pf(this.meta, Xc.w(this.Za, b, null), null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.W(null, c);
      case 3:
        return this.O(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = function(a, c) {
    return this.W(null, c);
  };
  a.w = function(a, c, d) {
    return this.O(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ia(b)));
};
g.h = function(a) {
  return this.W(null, a);
};
g.l = function(a, b) {
  return this.O(null, a, b);
};
var Rf = new Pf(null, ff, Bc);
Pf.prototype[Ha] = function() {
  return uc(this);
};
function Qf(a) {
  this.Na = a;
  this.H = 136;
  this.B = 259;
}
g = Qf.prototype;
g.kb = function(a, b) {
  this.Na = Qb(this.Na, b, null);
  return this;
};
g.lb = function() {
  return new Pf(null, Pb(this.Na), null);
};
g.$ = function() {
  return S(this.Na);
};
g.W = function(a, b) {
  return z.w(this, b, null);
};
g.O = function(a, b, c) {
  return z.w(this.Na, b, md) === md ? c : b;
};
g.call = function() {
  function a(a, b, c) {
    return z.w(this.Na, b, md) === md ? c : b;
  }
  function b(a, b) {
    return z.w(this.Na, b, md) === md ? null : b;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = b;
  c.w = a;
  return c;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ia(b)));
};
g.h = function(a) {
  return z.w(this.Na, a, md) === md ? null : a;
};
g.l = function(a, b) {
  return z.w(this.Na, a, md) === md ? b : a;
};
function Od(a) {
  if (a && (a.H & 4096 || a.yc)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([x("Doesn't support name: "), x(a)].join(""));
}
function Sf(a) {
  a: {
    for (var b = a;;) {
      if (G(b)) {
        b = M(b);
      } else {
        break a;
      }
    }
  }
  return a;
}
function Tf(a, b, c, d, e, f, h) {
  var k = qa;
  qa = null == qa ? null : qa - 1;
  try {
    if (null != qa && 0 > qa) {
      return A(a, "#");
    }
    A(a, c);
    if (0 === Ba.h(f)) {
      G(h) && A(a, function() {
        var a = Uf.h(f);
        return r(a) ? a : "...";
      }());
    } else {
      if (G(h)) {
        var m = J(h);
        b.w ? b.w(m, a, f) : b.call(null, m, a, f);
      }
      for (var q = M(h), p = Ba.h(f) - 1;;) {
        if (!q || null != p && 0 === p) {
          G(q) && 0 === p && (A(a, d), A(a, function() {
            var a = Uf.h(f);
            return r(a) ? a : "...";
          }()));
          break;
        } else {
          A(a, d);
          var t = J(q);
          c = a;
          h = f;
          b.w ? b.w(t, c, h) : b.call(null, t, c, h);
          var v = M(q);
          c = p - 1;
          q = v;
          p = c;
        }
      }
    }
    return A(a, e);
  } finally {
    qa = k;
  }
}
function Vf(a, b) {
  for (var c = G(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.S(null, f);
      A(a, h);
      f += 1;
    } else {
      if (c = G(c)) {
        d = c, jd(d) ? (c = Vb(d), e = Wb(d), d = c, h = S(c), c = e, e = h) : (h = J(d), A(a, h), c = M(d), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
}
var Wf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Xf(a) {
  return [x('"'), x(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Wf[a];
  })), x('"')].join("");
}
function Yf(a, b, c) {
  if (null == a) {
    return A(b, "nil");
  }
  if (void 0 === a) {
    return A(b, "#\x3cundefined\x3e");
  }
  if (r(function() {
    var b = Vc(c, ya);
    return r(b) ? (b = a ? a.B & 131072 || a.xc ? !0 : a.B ? !1 : u(ub, a) : u(ub, a)) ? dd(a) : b : b;
  }())) {
    A(b, "^");
    var d = dd(a);
    Zf.w ? Zf.w(d, b, c) : Zf.call(null, d, b, c);
    A(b, " ");
  }
  return null == a ? A(b, "nil") : a.nb ? a.Ab(a, b, c) : a && (a.B & 2147483648 || a.aa) ? a.U(null, b, c) : Fa(a) === Boolean || "number" === typeof a ? A(b, "" + x(a)) : null != a && a.constructor === Object ? (A(b, "#js "), d = W.l(function(b) {
    return new X(null, 2, 5, Y, [Nd.h(b), a[b]], null);
  }, kd(a)), $f.K ? $f.K(d, Zf, b, c) : $f.call(null, d, Zf, b, c)) : Ca(a) ? Tf(b, Zf, "#js [", " ", "]", c, a) : r("string" == typeof a) ? r(xa.h(c)) ? A(b, Xf(a)) : A(b, a) : $c(a) ? Vf(b, R(["#\x3c", "" + x(a), "\x3e"], 0)) : a instanceof Date ? (d = function(a, b) {
    for (var c = "" + x(a);;) {
      if (S(c) < b) {
        c = [x("0"), x(c)].join("");
      } else {
        return c;
      }
    }
  }, Vf(b, R(['#inst "', "" + x(a.getUTCFullYear()), "-", d(a.getUTCMonth() + 1, 2), "-", d(a.getUTCDate(), 2), "T", d(a.getUTCHours(), 2), ":", d(a.getUTCMinutes(), 2), ":", d(a.getUTCSeconds(), 2), ".", d(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : r(a instanceof RegExp) ? Vf(b, R(['#"', a.source, '"'], 0)) : (a ? a.B & 2147483648 || a.aa || (a.B ? 0 : u(Hb, a)) : u(Hb, a)) ? Ib(a, b, c) : Vf(b, R(["#\x3c", "" + x(a), "\x3e"], 0));
}
function Zf(a, b, c) {
  var d = ag.h(c);
  return r(d) ? (c = Xc.w(c, bg, Yf), d.w ? d.w(a, b, c) : d.call(null, a, b, c)) : Yf(a, b, c);
}
function pe() {
  return cg(0 < arguments.length ? new I(Array.prototype.slice.call(arguments, 0), 0) : null);
}
function cg(a) {
  var b = ua();
  if (ed(a)) {
    b = "";
  } else {
    var c = x, d = new ka;
    a: {
      var e = new bc(d);
      Zf(J(a), e, b);
      a = G(M(a));
      for (var f = null, h = 0, k = 0;;) {
        if (k < h) {
          var m = f.S(null, k);
          A(e, " ");
          Zf(m, e, b);
          k += 1;
        } else {
          if (a = G(a)) {
            f = a, jd(f) ? (a = Vb(f), h = Wb(f), f = a, m = S(a), a = h, h = m) : (m = J(f), A(e, " "), Zf(m, e, b), a = M(f), f = null, h = 0), k = 0;
          } else {
            break a;
          }
        }
      }
    }
    b = "" + c(d);
  }
  return b;
}
function $f(a, b, c, d) {
  return Tf(c, function(a, c, d) {
    var k = mb(a);
    b.w ? b.w(k, c, d) : b.call(null, k, c, d);
    A(c, " ");
    a = nb(a);
    return b.w ? b.w(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, G(a));
}
I.prototype.aa = !0;
I.prototype.U = function(a, b, c) {
  return Tf(b, Zf, "(", " ", ")", c, this);
};
Pd.prototype.aa = !0;
Pd.prototype.U = function(a, b, c) {
  return Tf(b, Zf, "(", " ", ")", c, this);
};
Df.prototype.aa = !0;
Df.prototype.U = function(a, b, c) {
  return Tf(b, Zf, "(", " ", ")", c, this);
};
$e.prototype.aa = !0;
$e.prototype.U = function(a, b, c) {
  return Tf(b, Zf, "(", " ", ")", c, this);
};
Le.prototype.aa = !0;
Le.prototype.U = function(a, b, c) {
  return Tf(b, Zf, "(", " ", ")", c, this);
};
Kd.prototype.aa = !0;
Kd.prototype.U = function(a, b, c) {
  return Tf(b, Zf, "(", " ", ")", c, this);
};
Hf.prototype.aa = !0;
Hf.prototype.U = function(a, b, c) {
  return $f(this, Zf, b, c);
};
Ff.prototype.aa = !0;
Ff.prototype.U = function(a, b, c) {
  return Tf(b, Zf, "(", " ", ")", c, this);
};
Pe.prototype.aa = !0;
Pe.prototype.U = function(a, b, c) {
  return Tf(b, Zf, "[", " ", "]", c, this);
};
Pf.prototype.aa = !0;
Pf.prototype.U = function(a, b, c) {
  return Tf(b, Zf, "#{", " ", "}", c, this);
};
Ud.prototype.aa = !0;
Ud.prototype.U = function(a, b, c) {
  return Tf(b, Zf, "(", " ", ")", c, this);
};
ke.prototype.aa = !0;
ke.prototype.U = function(a, b, c) {
  A(b, "#\x3cAtom: ");
  Zf(this.state, b, c);
  return A(b, "\x3e");
};
Nf.prototype.aa = !0;
Nf.prototype.U = function(a, b, c) {
  return Tf(b, Zf, "(", " ", ")", c, this);
};
X.prototype.aa = !0;
X.prototype.U = function(a, b, c) {
  return Tf(b, Zf, "[", " ", "]", c, this);
};
Id.prototype.aa = !0;
Id.prototype.U = function(a, b) {
  return A(b, "()");
};
n.prototype.aa = !0;
n.prototype.U = function(a, b, c) {
  return $f(this, Zf, b, c);
};
Mf.prototype.aa = !0;
Mf.prototype.U = function(a, b, c) {
  return Tf(b, Zf, "(", " ", ")", c, this);
};
Hd.prototype.aa = !0;
Hd.prototype.U = function(a, b, c) {
  return Tf(b, Zf, "(", " ", ")", c, this);
};
D.prototype.eb = !0;
D.prototype.Va = function(a, b) {
  if (b instanceof D) {
    return nc(this, b);
  }
  throw Error([x("Cannot compare "), x(this), x(" to "), x(b)].join(""));
};
U.prototype.eb = !0;
U.prototype.Va = function(a, b) {
  if (b instanceof U) {
    return Ld(this, b);
  }
  throw Error([x("Cannot compare "), x(this), x(" to "), x(b)].join(""));
};
Pe.prototype.eb = !0;
Pe.prototype.Va = function(a, b) {
  if (id(b)) {
    return td(this, b);
  }
  throw Error([x("Cannot compare "), x(this), x(" to "), x(b)].join(""));
};
X.prototype.eb = !0;
X.prototype.Va = function(a, b) {
  if (id(b)) {
    return td(this, b);
  }
  throw Error([x("Cannot compare "), x(this), x(" to "), x(b)].join(""));
};
var qc = null, dg = {}, eg = function eg(b) {
  if (b ? b.sc : b) {
    return b.sc(b);
  }
  var c;
  c = eg[l(null == b ? null : b)];
  if (!c && (c = eg._, !c)) {
    throw w("IEncodeJS.-clj-\x3ejs", b);
  }
  return c.call(null, b);
};
function fg(a) {
  return (a ? r(r(null) ? null : a.rc) || (a.Ub ? 0 : u(dg, a)) : u(dg, a)) ? eg(a) : "string" === typeof a || "number" === typeof a || a instanceof U || a instanceof D ? gg.h ? gg.h(a) : gg.call(null, a) : cg(R([a], 0));
}
var gg = function gg(b) {
  if (null == b) {
    return null;
  }
  if (b ? r(r(null) ? null : b.rc) || (b.Ub ? 0 : u(dg, b)) : u(dg, b)) {
    return eg(b);
  }
  if (b instanceof U) {
    return Od(b);
  }
  if (b instanceof D) {
    return "" + x(b);
  }
  if (hd(b)) {
    var c = {};
    b = G(b);
    for (var d = null, e = 0, f = 0;;) {
      if (f < e) {
        var h = d.S(null, f), k = T(h, 0), h = T(h, 1);
        c[fg(k)] = gg(h);
        f += 1;
      } else {
        if (b = G(b)) {
          jd(b) ? (e = Vb(b), b = Wb(b), d = e, e = S(e)) : (e = J(b), d = T(e, 0), e = T(e, 1), c[fg(d)] = gg(e), b = M(b), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (fd(b)) {
    c = [];
    b = G(W.l(gg, b));
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        k = d.S(null, f), c.push(k), f += 1;
      } else {
        if (b = G(b)) {
          d = b, jd(d) ? (b = Vb(d), f = Wb(d), d = b, e = S(b), b = f) : (b = J(d), c.push(b), b = M(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return b;
}, hg = {}, ig = function ig(b, c) {
  if (b ? b.qc : b) {
    return b.qc(b, c);
  }
  var d;
  d = ig[l(null == b ? null : b)];
  if (!d && (d = ig._, !d)) {
    throw w("IEncodeClojure.-js-\x3eclj", b);
  }
  return d.call(null, b, c);
};
function jg() {
  var a = O.h ? O.h(kg) : O.call(null, kg), b = R([lg, !0], 0), c = nd(b) ? be(ne, b) : b, d = Vc(c, lg);
  return function(a, c, d, k) {
    return function q(p) {
      return (p ? r(r(null) ? null : p.Kc) || (p.Ub ? 0 : u(hg, p)) : u(hg, p)) ? ig(p, be(Lf, b)) : nd(p) ? Sf(W.l(q, p)) : fd(p) ? qe(null == p ? null : Xa(p), W.l(q, p)) : Ca(p) ? Je(W.l(q, p)) : Fa(p) === Object ? qe(ff, function() {
        return function(a, b, c, d) {
          return function H(e) {
            return new Pd(null, function(a, b, c, d) {
              return function() {
                for (;;) {
                  var a = G(e);
                  if (a) {
                    if (jd(a)) {
                      var b = Vb(a), c = S(b), f = Td(c);
                      return function() {
                        for (var a = 0;;) {
                          if (a < c) {
                            var e = y.l(b, a), h = f, k = Y, t;
                            t = e;
                            t = d.h ? d.h(t) : d.call(null, t);
                            e = new X(null, 2, 5, k, [t, q(p[e])], null);
                            h.add(e);
                            a += 1;
                          } else {
                            return !0;
                          }
                        }
                      }() ? Vd(f.chunk(), H(Wb(a))) : Vd(f.chunk(), null);
                    }
                    var h = J(a);
                    return Q(new X(null, 2, 5, Y, [function() {
                      var a = h;
                      return d.h ? d.h(a) : d.call(null, a);
                    }(), q(p[h])], null), H(sc(a)));
                  }
                  return null;
                }
              };
            }(a, b, c, d), null, null);
          };
        }(a, c, d, k)(kd(p));
      }()) : p;
    };
  }(b, c, d, r(d) ? Nd : x)(a);
}
var mg = {};
var ng = new U(null, "span.primitive-number", "span.primitive-number", -665034496), og = new U(null, "div.center", "div.center", 1338956224), pg = new U(null, "on-set", "on-set", -140953470), qg = new U(null, "div.hydration-error", "div.hydration-error", -1182518173), rg = new U(null, "div.hydration-display-records", "div.hydration-display-records", -643544925), sg = new U(null, "span.primitive-string", "span.primitive-string", 694485187), tg = new U(null, "div.alert.alert-danger", "div.alert.alert-danger", 
-890058301), ug = new U(null, "span.object-view-entry-value", "span.object-view-entry-value", 1392477795), vg = new U(null, "div.array-view.expander-container", "div.array-view.expander-container", -801965437), wg = new U(null, "div.examples", "div.examples", -1009767485), ya = new U(null, "meta", "meta", 1499536964), xg = new U(null, "span.expander", "span.expander", -563604764), za = new U(null, "dup", "dup", 556298533), yg = new U(null, "div.hydration-display", "div.hydration-display", 882572613), 
zg = new U(null, "pre", "pre", 2118456869), Ag = new U(null, "key", "key", -1516042587), Bg = new U(null, "li.pull-right.knex-version", "li.pull-right.knex-version", -1328888954), Cg = new U(null, "ul.nav.nav-tabs", "ul.nav.nav-tabs", 1865557319), Dg = new U(null, "derefed", "derefed", 590684583), Eg = new U(null, "div.hydration-display-title", "div.hydration-display-title", 1975490183), Fg = new U(null, "displayName", "displayName", -809144601), oe = new U(null, "validator", "validator", -1966190681), 
Gg = new U(null, "cljsRender", "cljsRender", 247449928), Hg = new U(null, "finally-block", "finally-block", 832982472), Ig = new U(null, "bindings", "bindings", 1271397192), Kg = new U(null, "span.sql-view-header", "span.sql-view-header", -1834974999), Lg = new U(null, "li", "li", 723558921), Mg = new U(null, "value", "value", 305978217), Ng = new U(null, "span.example-hydration", "span.example-hydration", -317688502), Og = new U(null, "div.records-list", "div.records-list", -255231158), Pg = new U(null, 
"header.db-schema", "header.db-schema", 732638122), Qg = new U(null, "a.expander", "a.expander", 1322821771), Rg = new U(null, "width", "width", -384071477), Sg = new U(null, "div.sql-view", "div.sql-view", -1627977429), Z = new U(null, "recur", "recur", -437573268), Tg = new U(null, "catch-block", "catch-block", 1175212748), Ug = new U(null, "src", "src", -1651076051), Vg = new U(null, "div.sql-view-bindings", "div.sql-view-bindings", 1235997037), bg = new U(null, "fallback-impl", "fallback-impl", 
-1501286995), va = new U(null, "flush-on-newline", "flush-on-newline", -151457939), Wg = new U(null, "componentWillUnmount", "componentWillUnmount", 1573788814), Xg = new U(null, "div.hydration-input", "div.hydration-input", 1118611150), Yg = new U(null, "charset", "charset", -1063822193), Zg = new U(null, "on-click", "on-click", 1632826543), $g = new U(null, "shouldComponentUpdate", "shouldComponentUpdate", 1795750960), ah = new U(null, "style", "style", -496642736), bh = new U(null, "textarea", 
"textarea", -650375824), ch = new U(null, "div", "div", 1057191632), xa = new U(null, "readably", "readably", 1129599760), Uf = new U(null, "more-marker", "more-marker", -14717935), dh = new U(null, "for", "for", -1323786319), eh = new U(null, "render", "render", -1408033454), fh = new U(null, "sql", "sql", 1251448786), gh = new U(null, "div.examples-container", "div.examples-container", -594635501), hh = new U(null, "div.half", "div.half", 1332116275), ih = new U(null, "div.object-view-entry", "div.object-view-entry", 
1708248308), Ba = new U(null, "print-length", "print-length", 1931866356), jh = new U(null, "class", "class", -2030961996), kh = new U(null, "span.object-view-entry-key", "span.object-view-entry-key", -233653292), lh = new U(null, "catch-exception", "catch-exception", -1997306795), mh = new U(null, "padding", "padding", 1660304693), nh = new U(null, "auto-run", "auto-run", 1958400437), oh = new U(null, "div.intro", "div.intro", 1937098677), ph = new U(null, "prev", "prev", -1597069226), qh = new U(null, 
"code", "code", 1586293142), rh = new U(null, "continue-block", "continue-block", -1852047850), sh = new U(null, "div.hydration-display-sql", "div.hydration-display-sql", 2123688630), th = new U(null, "div.instructions", "div.instructions", -526747560), uh = new U(null, "on-dispose", "on-dispose", 2105306360), vh = new U(null, "componentFunction", "componentFunction", 825866104), wh = new U(null, "div.example", "div.example", 265005017), xh = new U(null, "div.sql-view-sql", "div.sql-view-sql", 496262137), 
yh = new U(null, "component-function", "component-function", 654728922), zh = new U(null, "on-change", "on-change", -732046149), Ah = new U(null, "h3", "h3", 2067611163), ag = new U(null, "alt-impl", "alt-impl", 670969595), lg = new U(null, "keywordize-keys", "keywordize-keys", 1310784252), Bh = new U(null, "p", "p", 151049309), Ch = new U(null, "div.object-view.expander-container", "div.object-view.expander-container", 1498954941), Dh = new U(null, "href", "href", -793805698), Eh = new U(null, "img", 
"img", 1442687358), Fh = new U(null, "a", "a", -2123407586), Gh = new U(null, "height", "height", 1025178622), Hh = new U(null, "span", "span", 1394872991), Ih = new U(null, "div.indent", "div.indent", -1749025025), Jh = new U(null, "margin", "margin", -995903681);
var Kh, Lh = "undefined" !== typeof window && null != window.document;
function Mh(a, b) {
  return a.cljsReactClass = b;
}
function Nh(a) {
  return function(b) {
    return function(c) {
      var d = Vc(O.h ? O.h(b) : O.call(null, b), c);
      if (null != d) {
        return d;
      }
      d = a.h ? a.h(c) : a.call(null, c);
      pc.K(b, Xc, c, d);
      return d;
    };
  }(me ? me(ff) : le.call(null, ff));
}
var Oh = new Pf(null, new n(null, 2, ["aria", null, "data", null], null), null);
function Ph(a) {
  return 2 > S(a) ? a.toUpperCase() : [x(a.substring(0, 1).toUpperCase()), x(a.substring(1))].join("");
}
function Qh(a) {
  if ("string" === typeof a) {
    return a;
  }
  a = Od(a);
  var b, c = /-/, c = N.l("" + x(c), "/(?:)/") ? Pc.l(Je(Q("", W.l(x, G(a)))), "") : Je(("" + x(a)).split(c));
  if (N.l(0, 0)) {
    a: {
      for (;;) {
        if (N.l("", null == c ? null : pb(c))) {
          c = null == c ? null : qb(c);
        } else {
          break a;
        }
      }
    }
  }
  b = c;
  var c = T(b, 0), d;
  a: {
    for (d = 1, b = G(b);;) {
      if (b && 0 < d) {
        --d, b = M(b);
      } else {
        d = b;
        break a;
      }
    }
  }
  return r(Oh.h ? Oh.h(c) : Oh.call(null, c)) ? a : ce(x, c, W.l(Ph, d));
}
function Rh(a, b, c) {
  this.f = a;
  this.args = b;
  this.p = c;
  this.B = 6291457;
  this.H = 0;
}
g = Rh.prototype;
g.call = function() {
  function a(a, d) {
    a = this;
    var e = null;
    if (1 < arguments.length) {
      for (var e = 0, f = Array(arguments.length - 1);e < f.length;) {
        f[e] = arguments[e + 1], ++e;
      }
      e = new I(f, 0);
    }
    return b.call(this, a, e);
  }
  function b(a, b) {
    r(a.p) || (a.p = ce(je, a.f, a.args));
    return be(a.p, b);
  }
  a.J = 1;
  a.I = function(a) {
    var d = J(a);
    a = sc(a);
    return b(d, a);
  };
  a.C = b;
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ia(b)));
};
g.l = function() {
  function a(a) {
    var d = null;
    if (0 < arguments.length) {
      for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
        e[d] = arguments[d + 0], ++d;
      }
      d = new I(e, 0);
    }
    return b.call(this, d);
  }
  function b(a) {
    r(self__.p) || (self__.p = ce(je, self__.f, self__.args));
    return be(self__.p, a);
  }
  a.J = 0;
  a.I = function(a) {
    a = G(a);
    return b(a);
  };
  a.C = b;
  return a;
}();
g.G = function(a, b) {
  return N.l(this.f, b.f) && N.l(this.args, b.args);
};
g.R = function() {
  return lc(new X(null, 2, 5, Y, [this.f, this.args], null));
};
function Sh(a) {
  var b = pd(a);
  return b ? b : a ? a.H & 256 || a.Nc ? !0 : a.H ? !1 : u(mg, a) : u(mg, a);
}
function Th(a) {
  return null == a ? null : 9 === a.nodeType ? a.documentElement : a.firstChild;
}
function Uh(a) {
  a = Th(a);
  return null == a ? null : a.getAttribute("data-reactid");
}
var Vh = me ? me(ff) : le.call(null, ff);
function Wh(a) {
  var b = document.getElementById("app");
  return React.renderComponent(a.D ? a.D() : a.call(null), b, function() {
    var c = Uh(b);
    null != c && pc.K(Vh, Xc, c, function() {
      return function() {
        var c;
        try {
          c = React.renderComponent(a.D ? a.D() : a.call(null), b);
        } catch (e) {
          if (e instanceof Object) {
            try {
              React.unmountComponentAtNode(b);
            } catch (f) {
              if (f instanceof Object) {
                "undefined" !== typeof console && console.log(f);
              } else {
                throw f;
              }
            }
            c = Th(b);
            r(c) && (c.removeAttribute("data-reactid"), c.innerHTML = "");
          }
          throw e;
        }
        return c;
      };
    }(c));
    return null;
  });
}
var Xh = {};
function Yh(a, b) {
  return Md(a, b) || (a instanceof D || Fa(a) === Rh) && N.l(a, b);
}
var Zh = function Zh(b, c) {
  var d = b === c;
  if (d) {
    return d;
  }
  var e = hd(b);
  if (e) {
    var f = hd(c);
    if (f) {
      var h = S(b) === S(c);
      return h ? Cd(function() {
        return function(b, d, e) {
          var f = Wc(c, d, Xh);
          return r(function() {
            var b = e === f;
            if (b) {
              return b;
            }
            b = Yh(e, f);
            return r(b) ? b : (b = Md(d, ah)) ? Zh(e, f) : b;
          }()) ? b : new Cc(!1);
        };
      }(h, f, e, d), !0, b) : h;
    }
    return f;
  }
  return e;
};
function $h(a, b) {
  if (!id(a)) {
    throw Error([x("Assert failed: "), x(cg(R([Jd(new D(null, "vector?", "vector?", -61367869, null), new D(null, "v1", "v1", -2141311508, null))], 0)))].join(""));
  }
  if (!id(b)) {
    throw Error([x("Assert failed: "), x(cg(R([Jd(new D(null, "vector?", "vector?", -61367869, null), new D(null, "v2", "v2", 1875554983, null))], 0)))].join(""));
  }
  var c = a === b;
  if (c) {
    return c;
  }
  var d = S(a) === S(b);
  return d ? Cd(function() {
    return function(a, c, d) {
      var k = Uc(b, c);
      return r(function() {
        var a = d === k;
        if (a) {
          return a;
        }
        a = Yh(d, k);
        return r(a) ? a : (a = hd(d)) ? Zh(d, k) : a;
      }()) ? a : new Cc(!1);
    };
  }(d, c), !0, a) : d;
}
;var ai, bi = me ? me(0) : le.call(null, 0);
function ci(a, b) {
  b.Bb = null;
  var c = ai;
  ai = b;
  try {
    return a.D ? a.D() : a.call(null);
  } finally {
    ai = c;
  }
}
function di(a) {
  var b = a.Bb;
  a.Bb = null;
  return b;
}
function ei(a) {
  var b = ai;
  if (null != b) {
    var c = b.Bb;
    b.Bb = Pc.l(null == c ? Rf : c, a);
  }
}
function fi(a, b, c, d) {
  this.state = a;
  this.meta = b;
  this.ab = c;
  this.Y = d;
  this.H = 114690;
  this.B = 2153938944;
}
g = fi.prototype;
g.G = function(a, b) {
  return this === b;
};
g.Wa = function() {
  ei(this);
  return this.state;
};
g.Nb = function(a, b) {
  if (null != this.ab && !r(this.ab.h ? this.ab.h(b) : this.ab.call(null, b))) {
    throw Error([x("Assert failed: "), x("Validator rejected reference state"), x("\n"), x(cg(R([Jd(new D(null, "validator", "validator", -325659154, null), new D(null, "new-value", "new-value", -1567397401, null))], 0)))].join(""));
  }
  var c = this.state;
  this.state = b;
  null != this.Y && Jb(this, c, b);
  return b;
};
g.Ob = function(a, b) {
  var c;
  c = this.state;
  c = b.h ? b.h(c) : b.call(null, c);
  return Zb(this, c);
};
g.Pb = function(a, b, c) {
  a = this.state;
  b = b.l ? b.l(a, c) : b.call(null, a, c);
  return Zb(this, b);
};
g.Qb = function(a, b, c, d) {
  a = this.state;
  b = b.w ? b.w(a, c, d) : b.call(null, a, c, d);
  return Zb(this, b);
};
g.Rb = function(a, b, c, d, e) {
  return Zb(this, de(b, this.state, c, d, e));
};
g.T = function() {
  return this.meta;
};
g.U = function(a, b, c) {
  A(b, "#\x3cAtom: ");
  Zf(this.state, b, c);
  return A(b, "\x3e");
};
g.xb = function(a, b, c) {
  return Cd(function(a) {
    return function(e, f, h) {
      h.K ? h.K(f, a, b, c) : h.call(null, f, a, b, c);
      return null;
    };
  }(this), null, this.Y);
};
g.wb = function(a, b, c) {
  return this.Y = Xc.w(this.Y, b, c);
};
g.yb = function(a, b) {
  return this.Y = Zc.l(this.Y, b);
};
g.R = function() {
  return ca(this);
};
var gi = function gi() {
  switch(arguments.length) {
    case 1:
      return gi.h(arguments[0]);
    default:
      return gi.C(arguments[0], new I(Array.prototype.slice.call(arguments, 1), 0));
  }
};
gi.h = function(a) {
  return new fi(a, null, null, null);
};
gi.C = function(a, b) {
  var c = nd(b) ? be(ne, b) : b, d = Vc(c, ya), c = Vc(c, oe);
  return new fi(a, d, c, null);
};
gi.I = function(a) {
  var b = J(a);
  a = M(a);
  return gi.C(b, a);
};
gi.J = 1;
var hi = function hi(b) {
  if (b ? b.lc : b) {
    return b.lc();
  }
  var c;
  c = hi[l(null == b ? null : b)];
  if (!c && (c = hi._, !c)) {
    throw w("IDisposable.dispose!", b);
  }
  return c.call(null, b);
}, ii = function ii(b) {
  if (b ? b.mc : b) {
    return b.mc();
  }
  var c;
  c = ii[l(null == b ? null : b)];
  if (!c && (c = ii._, !c)) {
    throw w("IRunnable.run", b);
  }
  return c.call(null, b);
}, ji = function ji(b, c) {
  if (b ? b.Zb : b) {
    return b.Zb(0, c);
  }
  var d;
  d = ji[l(null == b ? null : b)];
  if (!d && (d = ji._, !d)) {
    throw w("IComputedImpl.-update-watching", b);
  }
  return d.call(null, b, c);
}, ki = function ki(b, c, d, e) {
  if (b ? b.kc : b) {
    return b.kc(0, 0, d, e);
  }
  var f;
  f = ki[l(null == b ? null : b)];
  if (!f && (f = ki._, !f)) {
    throw w("IComputedImpl.-handle-change", b);
  }
  return f.call(null, b, c, d, e);
};
function li(a, b, c, d) {
  return Cd(function(b, f, h) {
    h.K ? h.K(f, a, c, d) : h.call(null, f, a, c, d);
    return null;
  }, null, b);
}
function mi(a, b, c, d, e, f, h, k, m) {
  this.f = a;
  this.state = b;
  this.ob = c;
  this.bb = d;
  this.Ua = e;
  this.Y = f;
  this.sb = h;
  this.Fb = k;
  this.Eb = m;
  this.B = 2153807872;
  this.H = 114690;
}
g = mi.prototype;
g.kc = function(a, b, c, d) {
  var e = this;
  return r(function() {
    var a = e.bb;
    return r(a) ? Ea(e.ob) && c !== d : a;
  }()) ? (e.ob = !0, function() {
    var a = e.sb;
    return r(a) ? a : ii;
  }().call(null, this)) : null;
};
g.Zb = function(a, b) {
  for (var c = G(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.S(null, f);
      qd(this.Ua, h) || Kb(h, this, ki);
      f += 1;
    } else {
      if (c = G(c)) {
        d = c, jd(d) ? (c = Vb(d), f = Wb(d), d = c, e = S(c), c = f) : (c = J(d), qd(this.Ua, c) || Kb(c, this, ki), c = M(d), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  c = G(this.Ua);
  d = null;
  for (f = e = 0;;) {
    if (f < e) {
      h = d.S(null, f), qd(b, h) || Lb(h, this), f += 1;
    } else {
      if (c = G(c)) {
        d = c, jd(d) ? (c = Vb(d), f = Wb(d), d = c, e = S(c), c = f) : (c = J(d), qd(b, c) || Lb(c, this), c = M(d), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  return this.Ua = b;
};
g.U = function(a, b, c) {
  A(b, [x("#\x3cReaction "), x(lc(this)), x(": ")].join(""));
  Zf(this.state, b, c);
  return A(b, "\x3e");
};
g.R = function() {
  return ca(this);
};
g.G = function(a, b) {
  return this === b;
};
g.lc = function() {
  for (var a = G(this.Ua), b = null, c = 0, d = 0;;) {
    if (d < c) {
      var e = b.S(null, d);
      Lb(e, this);
      d += 1;
    } else {
      if (a = G(a)) {
        b = a, jd(b) ? (a = Vb(b), d = Wb(b), b = a, c = S(a), a = d) : (a = J(b), Lb(a, this), a = M(b), b = null, c = 0), d = 0;
      } else {
        break;
      }
    }
  }
  this.Ua = Rf;
  this.state = null;
  this.ob = !0;
  r(this.bb) && (r(!1) && pc.l(bi, Ed), this.bb = !1);
  return r(this.Eb) ? this.Eb.D ? this.Eb.D() : this.Eb.call(null) : null;
};
g.Nb = function(a, b) {
  var c = this.state;
  this.state = b;
  Jb(this, c, b);
  return b;
};
g.Ob = function(a, b) {
  var c;
  c = this.state;
  c = b.h ? b.h(c) : b.call(null, c);
  return Zb(this, c);
};
g.Pb = function(a, b, c) {
  a = this.state;
  b = b.l ? b.l(a, c) : b.call(null, a, c);
  return Zb(this, b);
};
g.Qb = function(a, b, c, d) {
  a = this.state;
  b = b.w ? b.w(a, c, d) : b.call(null, a, c, d);
  return Zb(this, b);
};
g.Rb = function(a, b, c, d, e) {
  return Zb(this, de(b, this.state, c, d, e));
};
g.mc = function() {
  var a = this.state, b = ci(this.f, this), c = di(this);
  !N.l(c, this.Ua) && ji(this, c);
  r(this.bb) || (r(!1) && pc.l(bi, rc), this.bb = !0);
  this.ob = !1;
  this.state = b;
  li(this, this.Y, a, this.state);
  return b;
};
g.xb = function(a, b, c) {
  r(this.Fb) && (this.Fb.l ? this.Fb.l(b, c) : this.Fb.call(null, b, c));
  return li(this, this.Y, b, c);
};
g.wb = function(a, b, c) {
  return this.Y = Xc.w(this.Y, b, c);
};
g.yb = function(a, b) {
  this.Y = Zc.l(this.Y, b);
  return ed(this.Y) ? hi(this) : null;
};
g.Wa = function() {
  var a = this;
  if (Ea(function() {
    var b = a.sb;
    return r(b) ? b : ai;
  }())) {
    var b = new X(null, 2, 5, Y, [a.sb, ai], null);
    "undefined" !== typeof console && console.log("" + x([x("dbg "), x("reagent.ratom"), x(":"), x(231), x(": "), x("[auto-run *ratom-context*]"), x(": "), x(cg(R([b], 0)))].join("")));
  }
  if (!r(function() {
    var b = a.sb;
    return r(b) ? b : ai;
  }())) {
    throw Error([x("Assert failed: "), x("Reaction derefed outside auto-running context"), x("\n"), x(cg(R([Jd(new D(null, "or", "or", 1876275696, null), new D(null, "auto-run", "auto-run", -696035332, null), new D(null, "*ratom-context*", "*ratom-context*", -1557728360, null))], 0)))].join(""));
  }
  ei(this);
  return r(a.ob) ? ii(this) : a.state;
};
function ni(a, b) {
  var c = nd(b) ? be(ne, b) : b, d = Vc(c, nh), e = Vc(c, pg), f = Vc(c, uh), c = Vc(c, Dg), d = N.l(d, !0) ? ii : d, h = null != c, e = new mi(a, null, !h, h, null, ff, d, e, f);
  null != c && (r(!1) && pc.l(bi, rc), e.Zb(0, c));
  return e;
}
;function oi(a) {
  return setTimeout(a, 16);
}
var pi = Ea(Lh) ? oi : function() {
  var a = window, b = a.requestAnimationFrame;
  if (r(b)) {
    return b;
  }
  b = a.webkitRequestAnimationFrame;
  if (r(b)) {
    return b;
  }
  b = a.mozRequestAnimationFrame;
  if (r(b)) {
    return b;
  }
  a = a.msRequestAnimationFrame;
  return r(a) ? a : oi;
}();
function qi(a, b) {
  return a.props.level - b.props.level;
}
function ri() {
  var a = si;
  if (r(a.$b)) {
    return null;
  }
  a.$b = !0;
  a = function(a) {
    return function() {
      var c = a.Yb;
      a.Yb = [];
      a.$b = !1;
      a: {
        c.sort(qi);
        for (var d = c.length, e = 0;;) {
          if (e < d) {
            var f = c[e];
            r(f.cljsIsDirty) && f.forceUpdate();
            e += 1;
          } else {
            break a;
          }
        }
      }
      return null;
    };
  }(a);
  return pi.h ? pi.h(a) : pi.call(null, a);
}
var si = new function() {
  this.Yb = [];
  this.$b = !1;
};
function ti(a) {
  a.cljsIsDirty = !0;
  si.Yb.push(a);
  return ri();
}
function ui(a) {
  a = null == a ? null : a.props;
  return null == a ? null : a.argv;
}
function vi(a, b) {
  if (!r(ui(a))) {
    throw Error([x("Assert failed: "), x(cg(R([Jd(new D(null, "is-reagent-component", "is-reagent-component", -1856228005, null), new D(null, "c", "c", -122660552, null))], 0)))].join(""));
  }
  a.cljsIsDirty = !1;
  var c = a.cljsRatom;
  if (null == c) {
    var d = ci(b, a), e = di(a);
    null != e && (a.cljsRatom = ni(b, R([nh, function() {
      return function() {
        return ti(a);
      };
    }(d, e, c), Dg, e], 0)));
    return d;
  }
  return ii(c);
}
function wi(a) {
  var b = a.cljsRatom;
  null == b || hi(b);
  return a.cljsIsDirty = !1;
}
;function xi(a) {
  var b = a.cljsState;
  return null != b ? b : a.cljsState = gi.h(null);
}
var yi = function yi(b) {
  var c = b.cljsRender;
  if (!r(Sh(c))) {
    throw Error([x("Assert failed: "), x(cg(R([Jd(new D("util", "clj-ifn?", "util/clj-ifn?", 259370460, null), new D(null, "f", "f", 43394975, null))], 0)))].join(""));
  }
  var d = b.props, e = null == b.componentFunction ? c.h ? c.h(b) : c.call(null, b) : function() {
    var b = d.argv;
    switch(S(b)) {
      case 1:
        return c.D ? c.D() : c.call(null);
      case 2:
        return b = Uc(b, 1), c.h ? c.h(b) : c.call(null, b);
      case 3:
        var e = Uc(b, 1), b = Uc(b, 2);
        return c.l ? c.l(e, b) : c.call(null, e, b);
      case 4:
        var e = Uc(b, 1), k = Uc(b, 2), b = Uc(b, 3);
        return c.w ? c.w(e, k, b) : c.call(null, e, k, b);
      case 5:
        var e = Uc(b, 1), k = Uc(b, 2), m = Uc(b, 3), b = Uc(b, 4);
        return c.K ? c.K(e, k, m, b) : c.call(null, e, k, m, b);
      default:
        return be(c, Me(b, 1, S(b)));
    }
  }();
  return id(e) ? b.asComponent(e, d.level) : pd(e) ? (b.cljsRender = e, yi(b)) : e;
};
function zi(a, b) {
  var c = a instanceof U ? a.ta : null;
  switch(c) {
    case "getDefaultProps":
      throw Error([x("Assert failed: "), x("getDefaultProps not supported yet"), x("\n"), x(cg(R([!1], 0)))].join(""));;
    case "getInitialState":
      return function() {
        return function() {
          var a = b.h ? b.h(this) : b.call(null, this);
          return pc.w(xi(this), Of, a);
        };
      }(c);
    case "componentWillReceiveProps":
      return function() {
        return function(a) {
          a = a.argv;
          return b.l ? b.l(this, a) : b.call(null, this, a);
        };
      }(c);
    case "shouldComponentUpdate":
      return function() {
        return function(a) {
          var c = Kh;
          if (r(c)) {
            return c;
          }
          c = this.props.argv;
          a = a.argv;
          return null == b ? Ea($h(c, a)) : b.w ? b.w(this, c, a) : b.call(null, this, c, a);
        };
      }(c);
    case "componentWillUpdate":
      return function() {
        return function(a) {
          a = a.argv;
          return b.l ? b.l(this, a) : b.call(null, this, a);
        };
      }(c);
    case "componentDidUpdate":
      return function() {
        return function(a) {
          a = a.argv;
          return b.l ? b.l(this, a) : b.call(null, this, a);
        };
      }(c);
    case "componentWillUnmount":
      return function() {
        return function() {
          wi(this);
          return null == b ? null : b.h ? b.h(this) : b.call(null, this);
        };
      }(c);
    default:
      return null;
  }
}
function Ai(a) {
  return pd(a) ? function() {
    function b(b) {
      var c = null;
      if (0 < arguments.length) {
        for (var c = 0, f = Array(arguments.length - 0);c < f.length;) {
          f[c] = arguments[c + 0], ++c;
        }
        c = new I(f, 0);
      }
      return ce(a, this, c);
    }
    function c(b) {
      return ce(a, this, b);
    }
    b.J = 0;
    b.I = function(a) {
      a = G(a);
      return c(a);
    };
    b.C = c;
    return b;
  }() : a;
}
var Bi = new Pf(null, new n(null, 3, [Gg, null, eh, null, vh, null], null), null);
function Ci(a) {
  pd(a) && (a.__reactDontBind = !0);
  return a;
}
function Di(a, b, c) {
  if (r(Bi.h ? Bi.h(a) : Bi.call(null, a))) {
    return Ci(b);
  }
  var d = zi(a, b);
  if (r(r(d) ? b : d) && !pd(b)) {
    throw Error([x("Assert failed: "), x([x("Expected function in "), x(c), x(a), x(" but got "), x(b)].join("")), x("\n"), x(cg(R([Jd(new D(null, "ifn?", "ifn?", -2106461064, null), new D(null, "f", "f", 43394975, null))], 0)))].join(""));
  }
  return r(d) ? d : Ai(b);
}
var Fi = new n(null, 2, [$g, null, Wg, null], null), Gi = Nh(Qh);
function Hi(a) {
  return Cd(function(a, c, d) {
    return Xc.w(a, Nd.h(Gi.h ? Gi.h(c) : Gi.call(null, c)), d);
  }, ff, a);
}
function Ii(a) {
  return Of.C(R([Fi, a], 0));
}
function Ji(a, b) {
  return Xc.C(a, Gg, b, R([eh, r(Lh) ? function() {
    return vi(this, function(a) {
      return function() {
        return yi(a);
      };
    }(this));
  } : function() {
    return yi(this);
  }], 0));
}
function Ki(a) {
  var b = function() {
    var b = vh.h(a);
    return r(b) ? b : eh.h(a);
  }();
  if (!r(Sh(b))) {
    throw Error([x("Assert failed: "), x([x("Render must be a function, not "), x(cg(R([b], 0)))].join("")), x("\n"), x(cg(R([Jd(new D("util", "clj-ifn?", "util/clj-ifn?", 259370460, null), new D(null, "render-fun", "render-fun", -1209513086, null))], 0)))].join(""));
  }
  var c = null, d = function() {
    var c = Fg.h(a);
    if (r(c)) {
      return c;
    }
    c = b.displayName;
    return r(c) ? c : b.name;
  }(), e;
  if (ed(d)) {
    e = x;
    var f;
    null == qc && (qc = me ? me(0) : le.call(null, 0));
    f = oc();
    e = "" + e(f);
  } else {
    e = d;
  }
  f = Ji(Xc.w(a, Fg, e), b);
  return Cd(function(a, b, c, d) {
    return function(a, b, c) {
      return Xc.w(a, b, Di(b, c, d));
    };
  }(b, c, d, e, f), ff, f);
}
function Li(a) {
  return Cd(function(a, c, d) {
    a[Od(c)] = d;
    return a;
  }, {}, a);
}
function Mi(a) {
  var b = Ni;
  if (!hd(a)) {
    throw Error([x("Assert failed: "), x(cg(R([Jd(new D(null, "map?", "map?", -1780568534, null), new D(null, "body", "body", -408674142, null))], 0)))].join(""));
  }
  var c = Li(Ki(Ii(Hi(a)))), d = c.asComponent = Ci(b);
  a = React.createClass(c);
  c = function(a, c, d) {
    return function() {
      function a(b) {
        var d = null;
        if (0 < arguments.length) {
          for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
            e[d] = arguments[d + 0], ++d;
          }
          d = new I(e, 0);
        }
        return c.call(this, d);
      }
      function c(a) {
        a = ce(Ke, d, a);
        return b.h ? b.h(a) : b.call(null, a);
      }
      a.J = 0;
      a.I = function(a) {
        a = G(a);
        return c(a);
      };
      a.C = c;
      return a;
    }();
  }(c, d, a);
  Mh(c, a);
  Mh(a, a);
  return c;
}
;var Oi = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/, Pi = new n(null, 3, [jh, "className", dh, "htmlFor", Yg, "charSet"], null);
function Qi(a) {
  return a instanceof U || a instanceof D || "string" === typeof a;
}
function Ri(a) {
  return "string" === typeof a ? a : "number" === typeof a ? a : a instanceof U ? Od(a) : a instanceof D ? "" + x(a) : fd(a) ? gg(a) : pd(a) ? function() {
    function b(a) {
      var b = null;
      if (0 < arguments.length) {
        for (var b = 0, f = Array(arguments.length - 0);b < f.length;) {
          f[b] = arguments[b + 0], ++b;
        }
        b = new I(f, 0);
      }
      return c.call(this, b);
    }
    function c(b) {
      return be(a, b);
    }
    b.J = 0;
    b.I = function(a) {
      a = G(a);
      return c(a);
    };
    b.C = c;
    return b;
  }() : a;
}
var Si = Nh(function(a) {
  var b = Pi.h ? Pi.h(a) : Pi.call(null, a);
  return r(b) ? b : Qh(a);
});
Nh(Qh);
function Ti(a) {
  return "string" === typeof a ? a : "number" === typeof a ? a : hd(a) ? Cd(function(a, c, d) {
    a[Si.h ? Si.h(c) : Si.call(null, c)] = Ri(d);
    return a;
  }, {}, a) : Ri(a);
}
function Ui(a, b) {
  var c = T(b, 0), d = T(b, 1), e = a.id;
  a.id = null != e ? e : c;
  null != d && (c = a.className, a.className = null != c ? [x(d), x(" "), x(c)].join("") : d);
}
function Vi(a, b) {
  if (ed(a) && null == b) {
    return null;
  }
  if (Fa(a) === Object) {
    return a;
  }
  var c = Cd(function(a, b, c) {
    b = Si.h ? Si.h(b) : Si.call(null, b);
    "key" !== b && (a[b] = Ti(c));
    return a;
  }, {}, a);
  null != b && Ui(c, b);
  return c;
}
function Wi(a, b) {
  var c = b.onChange, d = null == c ? null : b.value;
  a.cljsInputValue = d;
  if (null == d) {
    return null;
  }
  a.cljsIsDirty = !1;
  b.defaultValue = d;
  b.value = null;
  b.onChange = function(b, c) {
    return function(b) {
      b = c.h ? c.h(b) : c.call(null, b);
      ti(a);
      return b;
    };
  }(b, c, d);
  return b;
}
function Xi(a) {
  var b = React.DOM;
  return a === b.input || a === b.textarea;
}
function Yi(a) {
  a.componentDidUpdate = function() {
    return function() {
      var a;
      a = this.cljsInputValue;
      if (null == a) {
        a = null;
      } else {
        var c = this.getDOMNode();
        a = N.l(a, c.value) ? null : c.value = a;
      }
      return a;
    };
  }(a);
  a.componentWillUnmount = function() {
    return function() {
      return wi(this);
    };
  }(a);
}
function Zi(a, b, c) {
  var d = Xi(a), e = r(d) ? Wi : null;
  c = {render:function(c, d) {
    return function() {
      var c = this.props, e = c.argv, f = T(e, 1), p = null == f || hd(f), t = p ? 2 : 1, c = c.level + 1, e = $i.w ? $i.w(e, t, c) : $i.call(null, e, t, c), f = Vi(p ? f : null, b);
      null != d && (d.l ? d.l(this, f) : d.call(null, this, f));
      e[0] = f;
      return a.apply(null, e);
    };
  }(d, e), shouldComponentUpdate:function() {
    return function(a) {
      var b = Kh;
      return r(b) ? b : Ea($h(this.props.argv, a.argv));
    };
  }(d, e), displayName:r(c) ? c : "ComponentWrapper"};
  r(d) && Yi(c);
  return React.createClass(c);
}
var aj = Nh(function(a) {
  var b, c;
  c = Od(a);
  if ("string" === typeof c) {
    b = Oi.exec(c), c = N.l(J(b), c) ? 1 === S(b) ? J(b) : Je(b) : null;
  } else {
    throw new TypeError("re-matches must match against a string.");
  }
  var d = M(c);
  b = T(d, 0);
  c = T(d, 1);
  d = T(d, 2);
  b = React.DOM[b];
  if (r(d)) {
    var e = /\./;
    if ("string" === typeof e) {
      d = d.replace(new RegExp(String(e).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), " ");
    } else {
      if (e instanceof RegExp) {
        d = d.replace(new RegExp(e.source, "g"), " ");
      } else {
        throw [x("Invalid match arg: "), x(e)].join("");
      }
    }
  } else {
    d = null;
  }
  if (!r(b)) {
    throw Error([x("Assert failed: "), x([x("Unknown tag: '"), x(a), x("'")].join("")), x("\n"), x(cg(R([new D(null, "comp", "comp", -1462482139, null)], 0)))].join(""));
  }
  b = new X(null, 2, 5, Y, [b, r(r(c) ? c : d) ? new X(null, 2, 5, Y, [c, d], null) : null], null);
  c = T(b, 0);
  b = T(b, 1);
  return Zi(c, b, "" + x(a));
});
function bj(a) {
  return hd(a) ? Vc(a, Ag) : null;
}
function cj(a, b) {
  if (!(0 < S(a))) {
    throw Error([x("Assert failed: "), x("Hiccup form should not be empty"), x("\n"), x(cg(R([Jd(new D(null, "pos?", "pos?", -244377722, null), Jd(new D(null, "count", "count", -514511684, null), new D(null, "v", "v", 1661996586, null)))], 0)))].join(""));
  }
  var c;
  c = Uc(a, 0);
  var d = Qi(c);
  c = r(d) ? d : Sh(c);
  if (!r(c)) {
    throw Error([x("Assert failed: "), x([x("Invalid Hiccup form: "), x(cg(R([a], 0)))].join("")), x("\n"), x(cg(R([Jd(new D(null, "valid-tag?", "valid-tag?", 1243064160, null), Jd(new D(null, "nth", "nth", 1529209554, null), new D(null, "v", "v", 1661996586, null), 0))], 0)))].join(""));
  }
  c = Uc(a, 0);
  r(Qi(c)) ? c = aj.h ? aj.h(c) : aj.call(null, c) : (d = c.cljsReactClass, null != d ? c = d : r(React.isValidClass(c)) ? c = Mh(c, Zi(c, null, null)) : (d = dd(c), d = Xc.w(d, yh, c), d = (dj.h ? dj.h(d) : dj.call(null, d)).cljsReactClass, Mh(c, d), c = d));
  var d = {argv:a, level:b}, e = bj(dd(a)), e = null == e ? bj(T(a, 1)) : e;
  null != e && (d.key = e);
  return c.h ? c.h(d) : c.call(null, d);
}
var ej = {}, Ni = function Ni() {
  switch(arguments.length) {
    case 1:
      return Ni.h(arguments[0]);
    case 2:
      return Ni.l(arguments[0], arguments[1]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
};
Ni.h = function(a) {
  return Ni.l(a, 0);
};
Ni.l = function(a, b) {
  if ("string" === typeof a) {
    return a;
  }
  if (id(a)) {
    return cj(a, b);
  }
  if (nd(a)) {
    if (null != ai) {
      return fj.l ? fj.l(a, b) : fj.call(null, a, b);
    }
    var c = ci(function() {
      return fj.l ? fj.l(a, b) : fj.call(null, a, b);
    }, ej);
    r(di(ej)) && (r(ej.warned) || ("undefined" !== typeof console && console.log("Warning: Reactive deref not supported in seq in ", cg(R([a], 0))), ej.warned = !0));
    return c;
  }
  return a;
};
Ni.J = 2;
function dj(a) {
  return Mi(a);
}
function fj(a, b) {
  for (var c = Ma(a), d = b + 1, e = c.length, f = 0;;) {
    if (f < e) {
      c[f] = Ni.l(c[f], d), f += 1;
    } else {
      break;
    }
  }
  return c;
}
function $i(a, b, c) {
  return S(a) === b + 1 ? [null, Ni.l(Uc(a, b), c)] : Cd(function(a, e, f) {
    e >= b && a.push(Ni.l(f, c));
    return a;
  }, [null], a);
}
;function gj() {
  var a = new X(null, 1, 5, Y, [hj], null);
  return Wh(function() {
    var b = $c(a) ? a.D ? a.D() : a.call(null) : a;
    return Ni.h(b);
  });
}
function ij() {
  var a = Kh;
  Kh = !0;
  try {
    for (var b = G(cf(O.h ? O.h(Vh) : O.call(null, Vh))), c = null, d = 0, e = 0;;) {
      if (e < d) {
        var f = c.S(null, e);
        f.D ? f.D() : f.call(null);
        e += 1;
      } else {
        var h = G(b);
        if (h) {
          var k = h;
          if (jd(k)) {
            var m = Vb(k), q = Wb(k), k = m, p = S(m), b = q, c = k, d = p
          } else {
            var t = J(k);
            t.D ? t.D() : t.call(null);
            b = M(k);
            c = null;
            d = 0;
          }
          e = 0;
        } else {
          break;
        }
      }
    }
  } finally {
    Kh = a;
  }
  return "Updated";
}
var jj = ["reagent", "core", "force_update_all"], kj = aa;
jj[0] in kj || !kj.execScript || kj.execScript("var " + jj[0]);
for (var lj;jj.length && (lj = jj.shift());) {
  jj.length || void 0 === ij ? kj = kj[lj] ? kj[lj] : kj[lj] = {} : kj[lj] = ij;
}
;function mj(a, b) {
  return new X(null, 7, 5, Y, [Qg, new n(null, 1, [Zg, function() {
    return pc.l(a, Ea);
  }], null), "(", r(O.h ? O.h(a) : O.call(null, a)) ? "show" : "hide", " ", b, ")"], null);
}
;function nj() {
  return function(a) {
    return function() {
      return new X(null, 4, 5, Y, [Pg, r(O.h ? O.h(a) : O.call(null, a)) ? new n(null, 1, [jh, "collapsed"], null) : null, r(O.h ? O.h(a) : O.call(null, a)) ? null : new X(null, 3, 5, Y, [ch, new X(null, 2, 5, Y, [Bh, "Here's the tiny database we're playing with"], null), new X(null, 2, 5, Y, [Eh, new n(null, 1, [Ug, "img/schema.svg"], null)], null)], null), new X(null, 3, 5, Y, [mj, a, "schema"], null)], null);
    };
  }(gi.h(!1));
}
;function oj() {
  return function(a) {
    return function() {
      return r(O.h ? O.h(a) : O.call(null, a)) ? null : new X(null, 2, 5, Y, [oh, new X(null, 4, 5, Y, [Bh, new X(null, 3, 5, Y, [Fh, new n(null, 1, [Dh, "http://knexjs.org"], null), "Knex"], null), " is a SQL query builder for Node.js. This page lets you play with Knex and see the results. ", new X(null, 3, 5, Y, [Fh, new n(null, 2, [Dh, "#", Zg, function(a) {
        return function() {
          return V.l ? V.l(a, !0) : V.call(null, a, !0);
        };
      }(a)], null), "got it!"], null)], null)], null);
    };
  }(gi.h(!1));
}
;var pj, qj = function qj(b, c, d) {
  if (b ? b.Tb : b) {
    return b.Tb(0, c, d);
  }
  var e;
  e = qj[l(null == b ? null : b)];
  if (!e && (e = qj._, !e)) {
    throw w("WritePort.put!", b);
  }
  return e.call(null, b, c, d);
}, rj = function rj(b) {
  if (b ? b.zb : b) {
    return b.zb();
  }
  var c;
  c = rj[l(null == b ? null : b)];
  if (!c && (c = rj._, !c)) {
    throw w("Channel.close!", b);
  }
  return c.call(null, b);
}, sj = function sj(b) {
  if (b ? b.hc : b) {
    return !0;
  }
  var c;
  c = sj[l(null == b ? null : b)];
  if (!c && (c = sj._, !c)) {
    throw w("Handler.active?", b);
  }
  return c.call(null, b);
}, tj = function tj(b) {
  if (b ? b.ic : b) {
    return b.f;
  }
  var c;
  c = tj[l(null == b ? null : b)];
  if (!c && (c = tj._, !c)) {
    throw w("Handler.commit", b);
  }
  return c.call(null, b);
}, uj = function uj(b, c) {
  if (b ? b.gc : b) {
    return b.gc(0, c);
  }
  var d;
  d = uj[l(null == b ? null : b)];
  if (!d && (d = uj._, !d)) {
    throw w("Buffer.add!*", b);
  }
  return d.call(null, b, c);
}, vj = function vj() {
  switch(arguments.length) {
    case 1:
      return vj.h(arguments[0]);
    case 2:
      return vj.l(arguments[0], arguments[1]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
};
vj.h = function(a) {
  return a;
};
vj.l = function(a, b) {
  if (null == b) {
    throw Error([x("Assert failed: "), x(cg(R([Jd(new D(null, "not", "not", 1044554643, null), Jd(new D(null, "nil?", "nil?", 1612038930, null), new D(null, "itm", "itm", -713282527, null)))], 0)))].join(""));
  }
  return uj(a, b);
};
vj.J = 2;
function wj(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function xj(a, b, c, d) {
  this.head = a;
  this.tail = b;
  this.length = c;
  this.o = d;
}
xj.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.o[this.tail];
  this.o[this.tail] = null;
  this.tail = (this.tail + 1) % this.o.length;
  --this.length;
  return a;
};
xj.prototype.unshift = function(a) {
  this.o[this.head] = a;
  this.head = (this.head + 1) % this.o.length;
  this.length += 1;
  return null;
};
function yj(a, b) {
  a.length + 1 === a.o.length && a.resize();
  a.unshift(b);
}
xj.prototype.resize = function() {
  var a = Array(2 * this.o.length);
  return this.tail < this.head ? (wj(this.o, this.tail, a, 0, this.length), this.tail = 0, this.head = this.length, this.o = a) : this.tail > this.head ? (wj(this.o, this.tail, a, 0, this.o.length - this.tail), wj(this.o, 0, a, this.o.length - this.tail, this.head), this.tail = 0, this.head = this.length, this.o = a) : this.tail === this.head ? (this.head = this.tail = 0, this.o = a) : null;
};
function zj(a, b) {
  for (var c = a.length, d = 0;;) {
    if (d < c) {
      var e = a.pop(), f;
      f = e;
      f = b.h ? b.h(f) : b.call(null, f);
      r(f) && a.unshift(e);
      d += 1;
    } else {
      break;
    }
  }
}
function Aj(a) {
  if (!(0 < a)) {
    throw Error([x("Assert failed: "), x("Can't create a ring buffer of size 0"), x("\n"), x(cg(R([Jd(new D(null, "\x3e", "\x3e", 1085014381, null), new D(null, "n", "n", -2092305744, null), 0)], 0)))].join(""));
  }
  return new xj(0, 0, 0, Array(a));
}
function Bj(a, b) {
  this.L = a;
  this.n = b;
  this.B = 2;
  this.H = 0;
}
function Cj(a) {
  return a.L.length === a.n;
}
Bj.prototype.gc = function(a, b) {
  yj(this.L, b);
  return this;
};
Bj.prototype.$ = function() {
  return this.L.length;
};
var Dj;
a: {
  var Ej = aa.navigator;
  if (Ej) {
    var Fj = Ej.userAgent;
    if (Fj) {
      Dj = Fj;
      break a;
    }
  }
  Dj = "";
}
;var Gj;
function Hj() {
  var a = aa.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && -1 == Dj.indexOf("Presto") && (a = function() {
    var a = document.createElement("IFRAME");
    a.style.display = "none";
    a.src = "";
    document.documentElement.appendChild(a);
    var b = a.contentWindow, a = b.document;
    a.open();
    a.write("");
    a.close();
    var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host, a = ha(function(a) {
      if (("*" == d || a.origin == d) && a.data == c) {
        this.port1.onmessage();
      }
    }, this);
    b.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      b.postMessage(c, d);
    }};
  });
  if ("undefined" !== typeof a && -1 == Dj.indexOf("Edge") && -1 == Dj.indexOf("Trident") && -1 == Dj.indexOf("MSIE")) {
    var b = new a, c = {}, d = c;
    b.port1.onmessage = function() {
      if (void 0 !== c.next) {
        c = c.next;
        var a = c.ac;
        c.ac = null;
        a();
      }
    };
    return function(a) {
      d.next = {ac:a};
      d = d.next;
      b.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(a) {
    var b = document.createElement("SCRIPT");
    b.onreadystatechange = function() {
      b.onreadystatechange = null;
      b.parentNode.removeChild(b);
      b = null;
      a();
      a = null;
    };
    document.documentElement.appendChild(b);
  } : function(a) {
    aa.setTimeout(a, 0);
  };
}
;var Ij = Aj(32), Jj = !1, Kj = !1;
function Lj() {
  Jj = !0;
  Kj = !1;
  for (var a = 0;;) {
    var b = Ij.pop();
    if (null != b && (b.D ? b.D() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  Jj = !1;
  return 0 < Ij.length ? Mj.D ? Mj.D() : Mj.call(null) : null;
}
function Mj() {
  var a = Kj;
  if (r(r(a) ? Jj : a)) {
    return null;
  }
  Kj = !0;
  "function" != l(aa.setImmediate) || aa.Window && aa.Window.prototype && aa.Window.prototype.setImmediate == aa.setImmediate ? (Gj || (Gj = Hj()), Gj(Lj)) : aa.setImmediate(Lj);
}
function Nj(a) {
  yj(Ij, a);
  return Mj();
}
;var Oj, Pj = function Pj(b) {
  "undefined" === typeof Oj && (Oj = function(b, d, e) {
    this.nc = b;
    this.ca = d;
    this.Dc = e;
    this.B = 425984;
    this.H = 0;
  }, Oj.prototype.X = function(b, d) {
    return new Oj(this.nc, this.ca, d);
  }, Oj.prototype.T = function() {
    return this.Dc;
  }, Oj.prototype.Wa = function() {
    return this.ca;
  }, Oj.Wb = function() {
    return new X(null, 3, 5, Y, [new D(null, "box", "box", -1123515375, null), new D(null, "val", "val", 1769233139, null), new D(null, "meta17657", "meta17657", 1205473490, null)], null);
  }, Oj.nb = !0, Oj.mb = "cljs.core.async.impl.channels/t17656", Oj.Ab = function(b, d) {
    return A(d, "cljs.core.async.impl.channels/t17656");
  });
  return new Oj(Pj, b, ff);
};
function Qj(a, b) {
  this.handler = a;
  this.ca = b;
}
function Rj(a) {
  return sj(a.handler);
}
var Sj = function Sj(b) {
  if (b ? b.fc : b) {
    return b.fc();
  }
  var c;
  c = Sj[l(null == b ? null : b)];
  if (!c && (c = Sj._, !c)) {
    throw w("MMC.abort", b);
  }
  return c.call(null, b);
};
function Tj(a, b, c, d, e, f, h) {
  this.Ta = a;
  this.Db = b;
  this.Qa = c;
  this.Cb = d;
  this.L = e;
  this.closed = f;
  this.qa = h;
}
Tj.prototype.fc = function() {
  for (;;) {
    var a = this.Qa.pop();
    if (null != a) {
      var b = a.handler;
      Nj(function(a) {
        return function() {
          return a.h ? a.h(!0) : a.call(null, !0);
        };
      }(b.f, b, a.ca, a, this));
    }
    break;
  }
  zj(this.Qa, ie());
  return rj(this);
};
Tj.prototype.Tb = function(a, b, c) {
  var d = this;
  if (null == b) {
    throw Error([x("Assert failed: "), x("Can't put nil in on a channel"), x("\n"), x(cg(R([Jd(new D(null, "not", "not", 1044554643, null), Jd(new D(null, "nil?", "nil?", 1612038930, null), new D(null, "val", "val", 1769233139, null)))], 0)))].join(""));
  }
  if (a = d.closed) {
    return Pj(!a);
  }
  if (r(function() {
    var a = d.L;
    return r(a) ? Ea(Cj(d.L)) : a;
  }())) {
    for (c = Dc(function() {
      var a = d.L;
      return d.qa.l ? d.qa.l(a, b) : d.qa.call(null, a, b);
    }());;) {
      if (0 < d.Ta.length && 0 < S(d.L)) {
        var e = d.Ta.pop(), f = e.f, h = d.L.L.pop();
        Nj(function(a, b) {
          return function() {
            return a.h ? a.h(b) : a.call(null, b);
          };
        }(f, h, e, c, a, this));
      }
      break;
    }
    c && Sj(this);
    return Pj(!0);
  }
  e = function() {
    for (;;) {
      var a = d.Ta.pop();
      if (r(a)) {
        if (r(!0)) {
          return a;
        }
      } else {
        return null;
      }
    }
  }();
  if (r(e)) {
    return c = tj(e), Nj(function(a) {
      return function() {
        return a.h ? a.h(b) : a.call(null, b);
      };
    }(c, e, a, this)), Pj(!0);
  }
  64 < d.Cb ? (d.Cb = 0, zj(d.Qa, Rj)) : d.Cb += 1;
  if (!(1024 > d.Qa.length)) {
    throw Error([x("Assert failed: "), x([x("No more than "), x(1024), x(" pending puts are allowed on a single channel."), x(" Consider using a windowed buffer.")].join("")), x("\n"), x(cg(R([Jd(new D(null, "\x3c", "\x3c", 993667236, null), Jd(new D(null, ".-length", ".-length", -280799999, null), new D(null, "puts", "puts", -1883877054, null)), new D("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0)))].join(""));
  }
  yj(d.Qa, new Qj(c, b));
  return null;
};
Tj.prototype.jc = function(a, b) {
  var c = this;
  if (null != c.L && 0 < S(c.L)) {
    for (var d = b.f, e = Pj(c.L.L.pop());;) {
      if (!r(Cj(c.L))) {
        var f = c.Qa.pop();
        if (null != f) {
          var h = f.handler, k = f.ca;
          Nj(function(a) {
            return function() {
              return a.h ? a.h(!0) : a.call(null, !0);
            };
          }(h.f, h, k, f, d, e, this));
          Dc(function() {
            var a = c.L, b = k;
            return c.qa.l ? c.qa.l(a, b) : c.qa.call(null, a, b);
          }()) && Sj(this);
          continue;
        }
      }
      break;
    }
    return e;
  }
  d = function() {
    for (;;) {
      var a = c.Qa.pop();
      if (r(a)) {
        if (sj(a.handler)) {
          return a;
        }
      } else {
        return null;
      }
    }
  }();
  if (r(d)) {
    return e = tj(d.handler), Nj(function(a) {
      return function() {
        return a.h ? a.h(!0) : a.call(null, !0);
      };
    }(e, d, this)), Pj(d.ca);
  }
  if (r(c.closed)) {
    return r(c.L) && (d = c.L, c.qa.h ? c.qa.h(d) : c.qa.call(null, d)), r(r(!0) ? b.f : !0) ? (d = function() {
      var a = c.L;
      return r(a) ? 0 < S(c.L) : a;
    }(), d = r(d) ? c.L.L.pop() : null, Pj(d)) : null;
  }
  64 < c.Db ? (c.Db = 0, zj(c.Ta, sj)) : c.Db += 1;
  if (!(1024 > c.Ta.length)) {
    throw Error([x("Assert failed: "), x([x("No more than "), x(1024), x(" pending takes are allowed on a single channel.")].join("")), x("\n"), x(cg(R([Jd(new D(null, "\x3c", "\x3c", 993667236, null), Jd(new D(null, ".-length", ".-length", -280799999, null), new D(null, "takes", "takes", 298247964, null)), new D("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0)))].join(""));
  }
  yj(c.Ta, b);
  return null;
};
Tj.prototype.zb = function() {
  var a = this;
  if (!a.closed) {
    a.closed = !0;
    if (r(function() {
      var b = a.L;
      return r(b) ? 0 === a.Qa.length : b;
    }())) {
      var b = a.L;
      a.qa.h ? a.qa.h(b) : a.qa.call(null, b);
    }
    for (;b = a.Ta.pop(), null != b;) {
      var c = b.f, d = r(function() {
        var b = a.L;
        return r(b) ? 0 < S(a.L) : b;
      }()) ? a.L.L.pop() : null;
      Nj(function(a, b) {
        return function() {
          return a.h ? a.h(b) : a.call(null, b);
        };
      }(c, d, b, this));
    }
  }
  return null;
};
function Uj(a) {
  console.log(a);
  return null;
}
function Vj(a, b) {
  var c = (r(null) ? null : Uj).call(null, b);
  return null == c ? a : vj.l(a, c);
}
function Wj(a) {
  return new Tj(Aj(32), 0, Aj(32), 0, a, !1, function() {
    return function(a) {
      return function() {
        function c(c, d) {
          try {
            return a.l ? a.l(c, d) : a.call(null, c, d);
          } catch (e) {
            return Vj(c, e);
          }
        }
        function d(c) {
          try {
            return a.h ? a.h(c) : a.call(null, c);
          } catch (d) {
            return Vj(c, d);
          }
        }
        var e = null, e = function(a, b) {
          switch(arguments.length) {
            case 1:
              return d.call(this, a);
            case 2:
              return c.call(this, a, b);
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        e.h = d;
        e.l = c;
        return e;
      }();
    }(r(null) ? null.h ? null.h(vj) : null.call(null, vj) : vj);
  }());
}
;var Xj, Yj = function Yj(b) {
  "undefined" === typeof Xj && (Xj = function(b, d, e) {
    this.Vb = b;
    this.f = d;
    this.Cc = e;
    this.B = 393216;
    this.H = 0;
  }, Xj.prototype.X = function(b, d) {
    return new Xj(this.Vb, this.f, d);
  }, Xj.prototype.T = function() {
    return this.Cc;
  }, Xj.prototype.hc = function() {
    return !0;
  }, Xj.prototype.ic = function() {
    return this.f;
  }, Xj.Wb = function() {
    return new X(null, 3, 5, Y, [new D(null, "fn-handler", "fn-handler", 648785851, null), new D(null, "f", "f", 43394975, null), new D(null, "meta17529", "meta17529", -733632008, null)], null);
  }, Xj.nb = !0, Xj.mb = "cljs.core.async.impl.ioc-helpers/t17528", Xj.Ab = function(b, d) {
    return A(d, "cljs.core.async.impl.ioc-helpers/t17528");
  });
  return new Xj(Yj, b, ff);
};
function Zj(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    throw b instanceof Object && a[6].zb(), b;
  }
}
function ak(a, b, c) {
  c = c.jc(null, Yj(function(c) {
    a[2] = c;
    a[1] = b;
    return Zj(a);
  }));
  return r(c) ? (a[2] = O.h ? O.h(c) : O.call(null, c), a[1] = b, Z) : null;
}
function bk(a, b) {
  var c = a[6];
  null != b && c.Tb(0, b, Yj(function() {
    return function() {
      return null;
    };
  }(c)));
  c.zb();
  return c;
}
function ck(a) {
  for (;;) {
    var b = a[4], c = Tg.h(b), d = lh.h(b), e = a[5];
    if (r(function() {
      var a = e;
      return r(a) ? Ea(b) : a;
    }())) {
      throw e;
    }
    if (r(function() {
      var a = e;
      return r(a) ? (a = c, r(a) ? e instanceof d : a) : a;
    }())) {
      a[1] = c;
      a[2] = e;
      a[5] = null;
      a[4] = Xc.C(b, Tg, null, R([lh, null], 0));
      break;
    }
    if (r(function() {
      var a = e;
      return r(a) ? Ea(c) && Ea(Hg.h(b)) : a;
    }())) {
      a[4] = ph.h(b);
    } else {
      if (r(function() {
        var a = e;
        return r(a) ? (a = Ea(c)) ? Hg.h(b) : a : a;
      }())) {
        a[1] = Hg.h(b);
        a[4] = Xc.w(b, Hg, null);
        break;
      }
      if (r(function() {
        var a = Ea(e);
        return a ? Hg.h(b) : a;
      }())) {
        a[1] = Hg.h(b);
        a[4] = Xc.w(b, Hg, null);
        break;
      }
      if (Ea(e) && Ea(Hg.h(b))) {
        a[1] = rh.h(b);
        a[4] = ph.h(b);
        break;
      }
      throw Error("No matching clause");
    }
  }
}
;for (var dk = Array(1), ek = 0;;) {
  if (ek < dk.length) {
    dk[ek] = null, ek += 1;
  } else {
    break;
  }
}
;function fk(a) {
  a = N.l(a, 0) ? null : a;
  if (r(null) && !r(a)) {
    throw Error([x("Assert failed: "), x("buffer must be supplied when transducer is"), x("\n"), x(cg(R([new D(null, "buf-or-n", "buf-or-n", -1646815050, null)], 0)))].join(""));
  }
  a = "number" === typeof a ? new Bj(Aj(a), a) : a;
  return Wj(a);
}
var hk = function gk(b) {
  "undefined" === typeof pj && (pj = function(b, d, e) {
    this.Vb = b;
    this.f = d;
    this.Bc = e;
    this.B = 393216;
    this.H = 0;
  }, pj.prototype.X = function(b, d) {
    return new pj(this.Vb, this.f, d);
  }, pj.prototype.T = function() {
    return this.Bc;
  }, pj.prototype.hc = function() {
    return !0;
  }, pj.prototype.ic = function() {
    return this.f;
  }, pj.Wb = function() {
    return new X(null, 3, 5, Y, [new D(null, "fn-handler", "fn-handler", 648785851, null), new D(null, "f", "f", 43394975, null), new D(null, "meta14822", "meta14822", -622561726, null)], null);
  }, pj.nb = !0, pj.mb = "cljs.core.async/t14821", pj.Ab = function(b, d) {
    return A(d, "cljs.core.async/t14821");
  });
  return new pj(gk, b, ff);
}(function() {
  return null;
});
var ik;
function jk(a) {
  var b = T(a, 0);
  a = T(a, 1);
  if (r(a)) {
    throw a;
  }
  return b;
}
var kk = function kk(b) {
  "undefined" === typeof ik && (ik = function(b, d, e) {
    this.Fc = b;
    this.promise = d;
    this.Ec = e;
    this.B = 393216;
    this.H = 0;
  }, ik.prototype.X = function(b, d) {
    return new ik(this.Fc, this.promise, d);
  }, ik.prototype.T = function() {
    return this.Ec;
  }, ik.prototype.jc = function(b, d) {
    this.promise.then(function(b) {
      return function(c) {
        return Nj(function() {
          return function() {
            return tj(d).call(null, new X(null, 2, 5, Y, [c, null], null));
          };
        }(b));
      };
    }(this), function(b) {
      return function(c) {
        return Nj(function() {
          return function() {
            return tj(d).call(null, new X(null, 2, 5, Y, [null, c], null));
          };
        }(b));
      };
    }(this));
    return null;
  }, ik.Wb = function() {
    return new X(null, 3, 5, Y, [new D(null, "pair-port", "pair-port", 1268194861, null), new D(null, "promise", "promise", -887306482, null), new D(null, "meta23030", "meta23030", 969389769, null)], null);
  }, ik.nb = !0, ik.mb = "cljs-promises.async/t23029", ik.Ab = function(b, d) {
    return A(d, "cljs-promises.async/t23029");
  });
  return new ik(kk, b, ff);
};
var lk = new Knex({client:"websql", useNullAsDefault:!0}), mk = lk.schema;
window.Ac = lk;
function nk(a) {
  a.increments("id").primary();
  a.string("last_name");
  return a.string("first_name");
}
function ok(a) {
  a.increments("id").primary();
  a.string("title");
  a.integer("author_id");
  return a.integer("subject_id");
}
function pk(a) {
  a.increments("id").primary();
  return a.string("subject");
}
function qk() {
  var a = [mk.dropTableIfExists("authors"), mk.dropTableIfExists("books"), mk.dropTableIfExists("subjects")], b = [mk.createTableIfNotExists("authors", nk), mk.createTableIfNotExists("books", ok), mk.createTableIfNotExists("subjects", pk)];
  try {
    return kk(Promise.all(a).then(function(a, b) {
      return function() {
        return Promise.all(b);
      };
    }(a, b)));
  } catch (c) {
    return alert("WOAH");
  }
}
;var rk = new Knex({client:"websql", debug:!0, useNullAsDefault:!0}), sk = new Knex({client:"websql", useNullAsDefault:!0});
function tk() {
  var a = fk(null);
  console.log = function(a) {
    return function(c) {
      c = qj(a, new n(null, 2, [fh, c.sql, Ig, c.bindings], null), hk);
      return r(c) ? O.h ? O.h(c) : O.call(null, c) : !0;
    };
  }(a);
  return a;
}
;function uk(a) {
  window.knex = rk;
  window.Tc = null;
  a = [x("window.currentPromise \x3d "), x(a)].join("");
  try {
    return eval(a), kk(Promise.resolve(window.currentPromise));
  } catch (b) {
    return kk(Promise.reject(b));
  }
}
;function vk(a) {
  var b = bf(a);
  return xd(function() {
    return function(b) {
      return id(a.h ? a.h(b) : a.call(null, b));
    };
  }(b), b);
}
function wk(a) {
  return "string" === typeof a || "number" === typeof a;
}
function xk(a, b) {
  return new X(null, 3, 5, Y, [Hh, "string" === typeof a ? new X(null, 2, 5, Y, [sg, [x('"'), x(a), x('"')].join("")], null) : "number" === typeof a ? new X(null, 2, 5, Y, [ng, a], null) : null, r(b) ? "," : null], null);
}
function yk(a) {
  return new X(null, 3, 5, Y, [xg, new n(null, 1, [Zg, function() {
    return pc.l(a, Ea);
  }], null), r(O.h ? O.h(a) : O.call(null, a)) ? "+" : "-"], null);
}
function zk(a, b) {
  return new X(null, 3, 5, Y, [Hh, r(a) ? new X(null, 2, 5, Y, [kh, [x(a), x(": ")].join("")], null) : null, b], null);
}
function Ak() {
  return function(a) {
    return function(b, c, d) {
      return new X(null, 6, 5, Y, [vg, new X(null, 2, 5, Y, [yk, a], null), new X(null, 3, 5, Y, [zk, b, "["], null), r(O.h ? O.h(a) : O.call(null, a)) ? "\u2026" : new X(null, 2, 5, Y, [Ih, function() {
        return function(a) {
          return function h(b) {
            return new Pd(null, function() {
              return function() {
                for (;;) {
                  var a = G(b);
                  if (a) {
                    if (jd(a)) {
                      var d = Vb(a), e = S(d), t = Td(e);
                      return function() {
                        for (var a = 0;;) {
                          if (a < e) {
                            var b = y.l(d, a), h = t, k = !N.l(Oc(c), b);
                            h.add(r(wk(b)) ? new X(null, 2, 5, Y, [ch, new X(null, 3, 5, Y, [xk, b, k], null)], null) : new X(null, 4, 5, Y, [Bk, null, b, k], null));
                            a += 1;
                          } else {
                            return !0;
                          }
                        }
                      }() ? Vd(t.chunk(), h(Wb(a))) : Vd(t.chunk(), null);
                    }
                    var v = J(a);
                    return Q(function() {
                      var a = !N.l(Oc(c), v);
                      return r(wk(v)) ? new X(null, 2, 5, Y, [ch, new X(null, 3, 5, Y, [xk, v, a], null)], null) : new X(null, 4, 5, Y, [Bk, null, v, a], null);
                    }(), h(sc(a)));
                  }
                  return null;
                }
              };
            }(a), null, null);
          };
        }(a)(c);
      }()], null), "]", r(d) ? "," : null], null);
    };
  }(gi.h(!1));
}
function Ck(a, b, c) {
  return new X(null, 4, 5, Y, [ch, new X(null, 2, 5, Y, [kh, [x(a), x(":")].join("")], null), new X(null, 2, 5, Y, [ug, new X(null, 2, 5, Y, [xk, b], null)], null), r(c) ? "," : null], null);
}
var Bk = function Bk() {
  return function(b) {
    return function(c, d, e) {
      return new X(null, 6, 5, Y, [Ch, new X(null, 2, 5, Y, [yk, b], null), new X(null, 3, 5, Y, [zk, c, "{"], null), r(O.h ? O.h(b) : O.call(null, b)) ? "\u2026" : new X(null, 2, 5, Y, [Ih, function() {
        var c = vk(d);
        return function(b, c) {
          return function q(e) {
            return new Pd(null, function(b) {
              return function() {
                for (;;) {
                  var c = G(e);
                  if (c) {
                    if (jd(c)) {
                      var f = Vb(c), h = S(f), k = Td(h);
                      return function() {
                        for (var c = 0;;) {
                          if (c < h) {
                            var e = y.l(f, c), q = k, p = Y, v;
                            v = Od(e);
                            var F = void 0, F = e, F = d.h ? d.h(F) : d.call(null, F), e = !N.l(Oc(b), e);
                            v = id(F) ? new X(null, 4, 5, Y, [Ak, v, F, e], null) : hd(F) ? new X(null, 4, 5, Y, [Bk, v, F, e], null) : new X(null, 4, 5, Y, [Ck, v, F, e], null);
                            q.add(new X(null, 2, 5, p, [ih, v], null));
                            c += 1;
                          } else {
                            return !0;
                          }
                        }
                      }() ? Vd(k.chunk(), q(Wb(c))) : Vd(k.chunk(), null);
                    }
                    var H = J(c);
                    return Q(new X(null, 2, 5, Y, [ih, function() {
                      var c = Od(H), e;
                      e = H;
                      e = d.h ? d.h(e) : d.call(null, e);
                      var f = !N.l(Oc(b), H);
                      return id(e) ? new X(null, 4, 5, Y, [Ak, c, e, f], null) : hd(e) ? new X(null, 4, 5, Y, [Bk, c, e, f], null) : new X(null, 4, 5, Y, [Ck, c, e, f], null);
                    }()], null), q(sc(c)));
                  }
                  return null;
                }
              };
            }(b, c), null, null);
          };
        }(c, b)(c);
      }()], null), "}", r(e) ? "," : null], null);
    };
  }(gi.h(!1));
};
function Dk(a) {
  return new X(null, 2, 5, Y, [Og, new X(null, 4, 5, Y, [Ak, null, a, !1], null)], null);
}
;var Ek = gi.h(null), kg = gi.h(null), Fk = gi.h(null), Gk = gi.h(Rc);
function Hk() {
  var a = fk(1);
  Nj(function(a) {
    return function() {
      var c = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d;
                a: {
                  try {
                    for (;;) {
                      var f = a(c);
                      if (!Md(f, Z)) {
                        d = f;
                        break a;
                      }
                    }
                  } catch (h) {
                    if (h instanceof Object) {
                      c[5] = h, ck(c), d = Z;
                    } else {
                      throw h;
                    }
                  }
                }
                if (!Md(d, Z)) {
                  return d;
                }
              }
            }
            function c() {
              var a = [null, null, null, null, null, null, null, null, null, null, null, null, null];
              a[0] = d;
              a[1] = 1;
              return a;
            }
            var d = null, d = function(a) {
              switch(arguments.length) {
                case 0:
                  return c.call(this);
                case 1:
                  return b.call(this, a);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            d.D = c;
            d.h = b;
            return d;
          }();
        }(function() {
          return function(a) {
            var b = a[1];
            if (7 === b) {
              return b = a[7], a[1] = r(b) ? 9 : 10, Z;
            }
            if (1 === b) {
              return b = O.h ? O.h(Ek) : O.call(null, Ek), a[1] = r(b) ? 2 : 3, Z;
            }
            if (4 === b) {
              return b = a[2], bk(a, b);
            }
            if (13 === b) {
              return b = a[7], b = b.toString(), a[2] = b, a[1] = 14, Z;
            }
            if (6 === b) {
              var c = a[8], d = function() {
                var a = c;
                return V.l ? V.l(kg, a) : V.call(null, kg, a);
              }(), b = V.l ? V.l(Fk, null) : V.call(null, Fk, null);
              a[9] = d;
              a[2] = b;
              a[1] = 8;
              return Z;
            }
            if (3 === b) {
              return a[2] = null, a[1] = 4, Z;
            }
            if (12 === b) {
              return d = a[10], a[2] = d, a[1] = 14, Z;
            }
            if (2 === b) {
              var b = function() {
                var a = Rc;
                return V.l ? V.l(Gk, a) : V.call(null, Gk, a);
              }(), d = V.l ? V.l(kg, null) : V.call(null, kg, null), m = O.h ? O.h(Ek) : O.call(null, Ek), m = uk(m);
              a[11] = b;
              a[12] = d;
              return ak(a, 5, m);
            }
            return 11 === b ? (b = a[2], b = V.l ? V.l(Fk, b) : V.call(null, Fk, b), a[2] = b, a[1] = 8, Z) : 9 === b ? (b = a[7], d = a[10], b = b.message, a[10] = b, a[1] = r(b) ? 12 : 13, Z) : 5 === b ? (c = a[8], b = a[2], d = b.h ? b.h(0) : b.call(null, 0), b = b.h ? b.h(1) : b.call(null, 1), a[7] = b, a[8] = d, a[1] = r(d) ? 6 : 7, Z) : 14 === b ? (b = a[2], a[2] = b, a[1] = 11, Z) : 10 === b ? (b = a[7], a[2] = b, a[1] = 11, Z) : 8 === b ? (b = a[2], a[2] = b, a[1] = 4, Z) : null;
          };
        }(a), a);
      }(), d = function() {
        var d = c.D ? c.D() : c.call(null);
        d[6] = a;
        return d;
      }();
      return Zj(d);
    };
  }(a));
  return a;
}
function Ik(a) {
  return new X(null, 2, 5, Y, [wh, new X(null, 3, 5, Y, [Fh, new n(null, 1, [Zg, function() {
    V.l ? V.l(Ek, a) : V.call(null, Ek, a);
    return Hk();
  }], null), new X(null, 2, 5, Y, [Ng, new X(null, 2, 5, Y, [zg, a], null)], null)], null)], null);
}
function Jk() {
  return function(a) {
    return function() {
      return new X(null, 5, 5, Y, [wg, r(O.h ? O.h(a) : O.call(null, a)) ? new n(null, 1, [ah, new n(null, 2, [mh, 0, Jh, 0], null)], null) : null, r(O.h ? O.h(a) : O.call(null, a)) ? null : new X(null, 2, 5, Y, [Ah, "Examples"], null), new X(null, 3, 5, Y, [mj, a, "examples"], null), r(O.h ? O.h(a) : O.call(null, a)) ? null : new X(null, 4, 5, Y, [gh, new X(null, 2, 5, Y, [Ik, "knex('subjects')"], null), new X(null, 2, 5, Y, [Ik, "knex\n  .table('authors')\n  .innerJoin('books', 'books.author_id', 'authors.id')\n  .select('authors.first_name', 'books.title')"], 
      null), new X(null, 2, 5, Y, [Ik, "knex\n  .select(\n    knex.raw('first_name || \" \" || last_name as author'),\n    knex.raw('count(books.id) as quantity')\n  )\n  .from('books')\n  .innerJoin('authors', 'authors.id', 'books.author_id')\n  .groupBy('author_id')\n  .orderBy('quantity', 'desc')"], null)], null)], null);
    };
  }(gi.h(!1));
}
function Kk(a) {
  var b = O.h ? O.h(Gk) : O.call(null, Gk), c = S(b), d = O.h ? O.h(kg) : O.call(null, kg), e = S(d);
  return new X(null, 4, 5, Y, [Cg, new X(null, 2, 5, Y, [Lg, new X(null, 3, 5, Y, [Fh, new n(null, 2, [Dh, "#", Zg, function() {
    return function(b) {
      b.preventDefault();
      return V.l ? V.l(a, "records") : V.call(null, a, "records");
    };
  }(b, c, d, e)], null), [x("returned "), x(e), x(" row"), x(N.l(e, 1) ? null : "s")].join("")], null)], null), new X(null, 2, 5, Y, [Lg, new X(null, 3, 5, Y, [Fh, new n(null, 2, [Dh, "#", Zg, function() {
    return function(b) {
      b.preventDefault();
      return V.l ? V.l(a, "sql") : V.call(null, a, "sql");
    };
  }(b, c, d, e)], null), [x(c), x(" SQL statement"), x(N.l(c, 1) ? null : "s")].join("")], null)], null), new X(null, 3, 5, Y, [Bg, "knex ", window.Ac.VERSION], null)], null);
}
function Lk(a) {
  var b = Y, c = new X(null, 3, 5, Y, [xh, new X(null, 2, 5, Y, [Kg, "query: "], null), new X(null, 2, 5, Y, [qh, fh.h(a)], null)], null), d = Y, e = new X(null, 2, 5, Y, [Kg, "bindings: "], null), f = Y;
  a: {
    var h = Ig.h(a);
    a = new ka;
    for (h = G(h);;) {
      if (h) {
        a.append("" + x(J(h))), h = M(h), null != h && a.append(", ");
      } else {
        a = a.toString();
        break a;
      }
    }
  }
  return new X(null, 3, 5, b, [Sg, c, new X(null, 3, 5, d, [Vg, e, new X(null, 4, 5, f, [qh, "[", a, "]"], null)], null)], null);
}
function Mk() {
  return function(a) {
    return function() {
      return new X(null, 3, 5, Y, [yg, new X(null, 2, 5, Y, [Kk, a], null), N.l("records", O.h ? O.h(a) : O.call(null, a)) ? new X(null, 3, 5, Y, [rg, new X(null, 1, 5, Y, [Eg], null), new X(null, 2, 5, Y, [Dk, jg()], null)], null) : new X(null, 2, 5, Y, [sh, function() {
        return function(a) {
          return function d(e) {
            return new Pd(null, function() {
              return function() {
                for (;;) {
                  var a = G(e);
                  if (a) {
                    if (jd(a)) {
                      var b = Vb(a), k = S(b), m = Td(k);
                      a: {
                        for (var q = 0;;) {
                          if (q < k) {
                            var p = y.l(b, q);
                            m.add(new X(null, 2, 5, Y, [Lk, p], null));
                            q += 1;
                          } else {
                            b = !0;
                            break a;
                          }
                        }
                      }
                      return b ? Vd(m.chunk(), d(Wb(a))) : Vd(m.chunk(), null);
                    }
                    m = J(a);
                    return Q(new X(null, 2, 5, Y, [Lk, m], null), d(sc(a)));
                  }
                  return null;
                }
              };
            }(a), null, null);
          };
        }(a)(O.h ? O.h(Gk) : O.call(null, Gk));
      }()], null)], null);
    };
  }(gi.h("records"));
}
function Nk() {
  return new X(null, 2, 5, Y, [Xg, new X(null, 2, 5, Y, [bh, new n(null, 3, [Mg, O.h ? O.h(Ek) : O.call(null, Ek), ah, new n(null, 2, [Rg, "100%", Gh, "300px"], null), zh, function(a) {
    a = a.target.value;
    V.l ? V.l(Ek, a) : V.call(null, Ek, a);
    return Hk();
  }], null)], null)], null);
}
function Ok() {
  return new X(null, 2, 5, Y, [th, new X(null, 2, 5, Y, [Bh, "Click an example to the left or type in a knex statement lower left"], null)], null);
}
function Pk() {
  return new X(null, 3, 5, Y, [ch, new X(null, 3, 5, Y, [hh, new X(null, 1, 5, Y, [Jk], null), new X(null, 1, 5, Y, [Nk], null)], null), new X(null, 2, 5, Y, [hh, r(O.h ? O.h(Fk) : O.call(null, Fk)) ? new X(null, 2, 5, Y, [qg, O.h ? O.h(Fk) : O.call(null, Fk)], null) : r(O.h ? O.h(kg) : O.call(null, kg)) ? new X(null, 1, 5, Y, [Mk], null) : new X(null, 1, 5, Y, [Ok], null)], null)], null);
}
(function() {
  var a = tk(), b = fk(1);
  Nj(function(a, b) {
    return function() {
      var e = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d;
                a: {
                  try {
                    for (;;) {
                      var e = a(c);
                      if (!Md(e, Z)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f, ck(c), d = Z;
                    } else {
                      throw f;
                    }
                  }
                }
                if (!Md(d, Z)) {
                  return d;
                }
              }
            }
            function c() {
              var a = [null, null, null, null, null, null, null, null];
              a[0] = d;
              a[1] = 1;
              return a;
            }
            var d = null, d = function(a) {
              switch(arguments.length) {
                case 0:
                  return c.call(this);
                case 1:
                  return b.call(this, a);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            d.D = c;
            d.h = b;
            return d;
          }();
        }(function(a, b) {
          return function(a) {
            var c = a[1];
            return 1 === c ? (a[2] = null, a[1] = 2, Z) : 2 === c ? (a[1] = 4, Z) : 3 === c ? (c = a[2], bk(a, c)) : 4 === c ? ak(a, 7, b) : 5 === c ? (a[2] = null, a[1] = 6, Z) : 6 === c ? (c = a[2], a[2] = c, a[1] = 3, Z) : 7 === c ? (c = pc.w(Gk, Pc, a[2]), a[7] = c, a[2] = null, a[1] = 2, Z) : null;
          };
        }(a, b), a, b);
      }(), f = function() {
        var b = e.D ? e.D() : e.call(null);
        b[6] = a;
        return b;
      }();
      return Zj(f);
    };
  }(b, a));
  return b;
})();
var Qk = [{id:1111, last_name:"Denham", first_name:"Ariel"}, {id:1212, last_name:"Worsley", first_name:"John"}, {id:15990, last_name:"Bourgeois", first_name:"Paulette"}, {id:25041, last_name:"Bianco", first_name:"Margery Williams"}, {id:16, last_name:"Alcott", first_name:"Louisa May"}, {id:4156, last_name:"King", first_name:"Stephen"}, {id:1866, last_name:"Herbert", first_name:"Frank"}, {id:1644, last_name:"Hogarth", first_name:"Burne"}, {id:2031, last_name:"Brown", first_name:"Margaret Wise"}, {id:115, 
last_name:"Poe", first_name:"Edgar Allen"}, {id:7805, last_name:"Lutz", first_name:"Mark"}, {id:7806, last_name:"Christiansen", first_name:"Tom"}, {id:1533, last_name:"Brautigan", first_name:"Richard"}, {id:1717, last_name:"Brite", first_name:"Poppy Z."}, {id:2112, last_name:"Gorey", first_name:"Edward"}, {id:2001, last_name:"Clarke", first_name:"Arthur C."}, {id:1213, last_name:"Brookins", first_name:"Andrew"}, {id:25043, last_name:"Simon", first_name:"Neil"}, {id:1809, last_name:"Geisel", first_name:"Theodor Seuss"}], 
Rk = [{id:7808, title:"The Shining", author_id:4156, subject_id:9}, {id:4513, title:"Dune", author_id:1866, subject_id:15}, {id:4267, title:"2001: A Space Odyssey", author_id:2001, subject_id:15}, {id:1608, title:"The Cat in the Hat", author_id:1809, subject_id:2}, {id:1590, title:"Bartholomew and the Oobleck", author_id:1809, subject_id:2}, {id:1591, title:"One Fish, Two Fish, Red Fish, Blue Fish", author_id:1809, subject_id:2}, {id:1592, title:"Horton Hears a Who", author_id:1809, subject_id:2}, 
{id:1593, title:"The Lorax", author_id:1809, subject_id:2}, {id:25908, title:"Franklin in the Dark", author_id:15990, subject_id:2}, {id:1501, title:"Goodnight Moon", author_id:2031, subject_id:2}, {id:190, title:"Little Women", author_id:16, subject_id:6}, {id:1234, title:"The Velveteen Rabbit", author_id:25041, subject_id:3}, {id:2038, title:"Dynamic Anatomy", author_id:1644, subject_id:0}, {id:156, title:"The Tell-Tale Heart", author_id:115, subject_id:9}, {id:41473, title:"Programming Python", 
author_id:7805, subject_id:4}, {id:41477, title:"Learning Python", author_id:7805, subject_id:4}, {id:41478, title:"Perl Cookbook", author_id:7806, subject_id:4}, {id:41472, title:"Practical PostgreSQL", author_id:1212, subject_id:4}], Sk = [{id:0, subject:"Arts"}, {id:1, subject:"Business"}, {id:2, subject:"Children's Books"}, {id:3, subject:"Classics"}, {id:4, subject:"Computers"}, {id:5, subject:"Cooking"}, {id:6, subject:"Drama"}, {id:7, subject:"Entertainment"}, {id:8, subject:"History"}, {id:9, 
subject:"Horror"}, {id:10, subject:"Mystery"}, {id:11, subject:"Poetry"}, {id:12, subject:"Religion"}, {id:13, subject:"Romance"}, {id:14, subject:"Science"}, {id:15, subject:"Science Fiction"}];
function Tk(a, b) {
  return (sk.h ? sk.h(a) : sk.call(null, a)).insert(b);
}
;pa = function() {
  function a(a) {
    var d = null;
    if (0 < arguments.length) {
      for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
        e[d] = arguments[d + 0], ++d;
      }
      d = new I(e, 0);
    }
    return b.call(this, d);
  }
  function b(a) {
    return console.log.apply(console, Na ? Ma(a) : Ja.call(null, a));
  }
  a.J = 0;
  a.I = function(a) {
    a = G(a);
    return b(a);
  };
  a.C = b;
  return a;
}();
function Uk() {
  try {
    return window.openDatabase("testdb", "1.0", "testing indexeddb support", 100), !0;
  } catch (a) {
    return !1;
  }
}
function Vk() {
  return new X(null, 2, 5, Y, [og, new X(null, 4, 5, Y, [tg, new X(null, 2, 5, Y, [Ah, "IndexedDB Needed"], null), new X(null, 2, 5, Y, [Bh, "IndexedDB gives browsers access to a SQLite-esque database, which the sandbox needs to function. Unfortunately only webkit browsers these days have IndexedDB, if you come back with Chrome, Safari or Opera you'll be able to try the sandbox."], null), new X(null, 2, 5, Y, [Bh, "(Also possible your mobile browser is just denying access...)"], null)], null)], null);
}
function hj() {
  return r(Uk()) ? new X(null, 4, 5, Y, [ch, new X(null, 1, 5, Y, [oj], null), new X(null, 1, 5, Y, [nj], null), new X(null, 1, 5, Y, [Pk], null)], null) : new X(null, 1, 5, Y, [Vk], null);
}
(function() {
  var a = fk(1);
  Nj(function(a) {
    return function() {
      var c = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d;
                a: {
                  try {
                    for (;;) {
                      var f = a(c);
                      if (!Md(f, Z)) {
                        d = f;
                        break a;
                      }
                    }
                  } catch (h) {
                    if (h instanceof Object) {
                      c[5] = h, ck(c), d = Z;
                    } else {
                      throw h;
                    }
                  }
                }
                if (!Md(d, Z)) {
                  return d;
                }
              }
            }
            function c() {
              var a = [null, null, null, null, null, null, null, null, null];
              a[0] = d;
              a[1] = 1;
              return a;
            }
            var d = null, d = function(a) {
              switch(arguments.length) {
                case 0:
                  return c.call(this);
                case 1:
                  return b.call(this, a);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            d.D = c;
            d.h = b;
            return d;
          }();
        }(function() {
          return function(a) {
            var b = a[1];
            if (1 === b) {
              return b = Uk(), a[1] = r(b) ? 2 : 3, Z;
            }
            if (2 === b) {
              return b = qk(), ak(a, 5, b);
            }
            if (3 === b) {
              return a[2] = null, a[1] = 4, Z;
            }
            if (4 === b) {
              var b = a[2], c = gj();
              a[7] = b;
              return bk(a, c);
            }
            return 5 === b ? (b = jk(a[2]), c = [Tk("authors", Qk), Tk("books", Rk), Tk("subjects", Sk)], c = kk(Promise.all(c)), a[8] = b, ak(a, 6, c)) : 6 === b ? (b = jk(a[2]), a[2] = b, a[1] = 4, Z) : null;
          };
        }(a), a);
      }(), d = function() {
        var d = c.D ? c.D() : c.call(null);
        d[6] = a;
        return d;
      }();
      return Zj(d);
    };
  }(a));
  return a;
})();

})();
