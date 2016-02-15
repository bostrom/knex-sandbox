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
var g, ba = this;
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
var qa = !0, ta = null;
if ("undefined" === typeof ua) {
  var ua = null
}
function va() {
  return new n(null, 5, [xa, !0, ya, !0, za, !1, Ba, !1, Ca, null], null);
}
function r(a) {
  return null != a && !1 !== a;
}
function Da(a) {
  return a instanceof Array;
}
function Fa(a) {
  return r(a) ? !1 : !0;
}
function u(a, b) {
  return a[l(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function Ga(a) {
  return null == a ? null : a.constructor;
}
function w(a, b) {
  var c = Ga(b), c = r(r(c) ? c.nb : c) ? c.mb : l(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Ha(a) {
  var b = a.mb;
  return r(b) ? b : "" + x(a);
}
var Ia = "undefined" !== typeof Symbol && "function" === l(Symbol) ? Symbol.iterator : "@@iterator";
function Ja(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
function Ma() {
  switch(arguments.length) {
    case 1:
      return Na(arguments[0]);
    case 2:
      return Na(arguments[1]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
}
function Oa(a) {
  return Na(a);
}
function Na(a) {
  function b(a, b) {
    a.push(b);
    return a;
  }
  var c = [];
  return Ra ? Ra(b, c, a) : Ta.call(null, b, c, a);
}
var Ua = {}, Va = {}, Wa = {}, Xa = function Xa(b) {
  if (b ? b.$ : b) {
    return b.$(b);
  }
  var c;
  c = Xa[l(null == b ? null : b)];
  if (!c && (c = Xa._, !c)) {
    throw w("ICounted.-count", b);
  }
  return c.call(null, b);
}, Ya = function Ya(b) {
  if (b ? b.da : b) {
    return b.da(b);
  }
  var c;
  c = Ya[l(null == b ? null : b)];
  if (!c && (c = Ya._, !c)) {
    throw w("IEmptyableCollection.-empty", b);
  }
  return c.call(null, b);
}, Za = {}, $a = function $a(b, c) {
  if (b ? b.Z : b) {
    return b.Z(b, c);
  }
  var d;
  d = $a[l(null == b ? null : b)];
  if (!d && (d = $a._, !d)) {
    throw w("ICollection.-conj", b);
  }
  return d.call(null, b, c);
}, bb = {}, y = function y() {
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
var cb = {}, db = function db(b) {
  if (b ? b.ga : b) {
    return b.ga(b);
  }
  var c;
  c = db[l(null == b ? null : b)];
  if (!c && (c = db._, !c)) {
    throw w("ISeq.-first", b);
  }
  return c.call(null, b);
}, eb = function eb(b) {
  if (b ? b.ma : b) {
    return b.ma(b);
  }
  var c;
  c = eb[l(null == b ? null : b)];
  if (!c && (c = eb._, !c)) {
    throw w("ISeq.-rest", b);
  }
  return c.call(null, b);
}, fb = {}, gb = {}, z = function z() {
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
var hb = function hb(b, c) {
  if (b ? b.Gb : b) {
    return b.Gb(b, c);
  }
  var d;
  d = hb[l(null == b ? null : b)];
  if (!d && (d = hb._, !d)) {
    throw w("IAssociative.-contains-key?", b);
  }
  return d.call(null, b, c);
}, jb = function jb(b, c, d) {
  if (b ? b.cb : b) {
    return b.cb(b, c, d);
  }
  var e;
  e = jb[l(null == b ? null : b)];
  if (!e && (e = jb._, !e)) {
    throw w("IAssociative.-assoc", b);
  }
  return e.call(null, b, c, d);
}, kb = {}, lb = function lb(b, c) {
  if (b ? b.Kb : b) {
    return b.Kb(b, c);
  }
  var d;
  d = lb[l(null == b ? null : b)];
  if (!d && (d = lb._, !d)) {
    throw w("IMap.-dissoc", b);
  }
  return d.call(null, b, c);
}, mb = {}, nb = function nb(b) {
  if (b ? b.Lb : b) {
    return b.Lb();
  }
  var c;
  c = nb[l(null == b ? null : b)];
  if (!c && (c = nb._, !c)) {
    throw w("IMapEntry.-key", b);
  }
  return c.call(null, b);
}, ob = function ob(b) {
  if (b ? b.Mb : b) {
    return b.Mb();
  }
  var c;
  c = ob[l(null == b ? null : b)];
  if (!c && (c = ob._, !c)) {
    throw w("IMapEntry.-val", b);
  }
  return c.call(null, b);
}, pb = {}, qb = function qb(b) {
  if (b ? b.hb : b) {
    return b.hb(b);
  }
  var c;
  c = qb[l(null == b ? null : b)];
  if (!c && (c = qb._, !c)) {
    throw w("IStack.-peek", b);
  }
  return c.call(null, b);
}, rb = function rb(b) {
  if (b ? b.ib : b) {
    return b.ib(b);
  }
  var c;
  c = rb[l(null == b ? null : b)];
  if (!c && (c = rb._, !c)) {
    throw w("IStack.-pop", b);
  }
  return c.call(null, b);
}, sb = {}, tb = function tb(b, c, d) {
  if (b ? b.Sb : b) {
    return b.Sb(b, c, d);
  }
  var e;
  e = tb[l(null == b ? null : b)];
  if (!e && (e = tb._, !e)) {
    throw w("IVector.-assoc-n", b);
  }
  return e.call(null, b, c, d);
}, ub = function ub(b) {
  if (b ? b.Wa : b) {
    return b.Wa(b);
  }
  var c;
  c = ub[l(null == b ? null : b)];
  if (!c && (c = ub._, !c)) {
    throw w("IDeref.-deref", b);
  }
  return c.call(null, b);
}, vb = {}, xb = function xb(b) {
  if (b ? b.T : b) {
    return b.T(b);
  }
  var c;
  c = xb[l(null == b ? null : b)];
  if (!c && (c = xb._, !c)) {
    throw w("IMeta.-meta", b);
  }
  return c.call(null, b);
}, yb = {}, zb = function zb(b, c) {
  if (b ? b.X : b) {
    return b.X(b, c);
  }
  var d;
  d = zb[l(null == b ? null : b)];
  if (!d && (d = zb._, !d)) {
    throw w("IWithMeta.-with-meta", b);
  }
  return d.call(null, b, c);
}, Ab = {}, Bb = function Bb() {
  switch(arguments.length) {
    case 2:
      return Bb.l(arguments[0], arguments[1]);
    case 3:
      return Bb.w(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
};
Bb.l = function(a, b) {
  if (a ? a.ea : a) {
    return a.ea(a, b);
  }
  var c;
  c = Bb[l(null == a ? null : a)];
  if (!c && (c = Bb._, !c)) {
    throw w("IReduce.-reduce", a);
  }
  return c.call(null, a, b);
};
Bb.w = function(a, b, c) {
  if (a ? a.fa : a) {
    return a.fa(a, b, c);
  }
  var d;
  d = Bb[l(null == a ? null : a)];
  if (!d && (d = Bb._, !d)) {
    throw w("IReduce.-reduce", a);
  }
  return d.call(null, a, b, c);
};
Bb.J = 3;
var Cb = function Cb(b, c, d) {
  if (b ? b.fb : b) {
    return b.fb(b, c, d);
  }
  var e;
  e = Cb[l(null == b ? null : b)];
  if (!e && (e = Cb._, !e)) {
    throw w("IKVReduce.-kv-reduce", b);
  }
  return e.call(null, b, c, d);
}, Db = function Db(b, c) {
  if (b ? b.G : b) {
    return b.G(b, c);
  }
  var d;
  d = Db[l(null == b ? null : b)];
  if (!d && (d = Db._, !d)) {
    throw w("IEquiv.-equiv", b);
  }
  return d.call(null, b, c);
}, Eb = function Eb(b) {
  if (b ? b.R : b) {
    return b.R(b);
  }
  var c;
  c = Eb[l(null == b ? null : b)];
  if (!c && (c = Eb._, !c)) {
    throw w("IHash.-hash", b);
  }
  return c.call(null, b);
}, Fb = {}, Gb = function Gb(b) {
  if (b ? b.ba : b) {
    return b.ba(b);
  }
  var c;
  c = Gb[l(null == b ? null : b)];
  if (!c && (c = Gb._, !c)) {
    throw w("ISeqable.-seq", b);
  }
  return c.call(null, b);
}, Hb = {}, A = function A(b, c) {
  if (b ? b.ec : b) {
    return b.ec(0, c);
  }
  var d;
  d = A[l(null == b ? null : b)];
  if (!d && (d = A._, !d)) {
    throw w("IWriter.-write", b);
  }
  return d.call(null, b, c);
}, Ib = {}, Jb = function Jb(b, c, d) {
  if (b ? b.U : b) {
    return b.U(b, c, d);
  }
  var e;
  e = Jb[l(null == b ? null : b)];
  if (!e && (e = Jb._, !e)) {
    throw w("IPrintWithWriter.-pr-writer", b);
  }
  return e.call(null, b, c, d);
}, Kb = function Kb(b, c, d) {
  if (b ? b.xb : b) {
    return b.xb(b, c, d);
  }
  var e;
  e = Kb[l(null == b ? null : b)];
  if (!e && (e = Kb._, !e)) {
    throw w("IWatchable.-notify-watches", b);
  }
  return e.call(null, b, c, d);
}, Lb = function Lb(b, c, d) {
  if (b ? b.wb : b) {
    return b.wb(b, c, d);
  }
  var e;
  e = Lb[l(null == b ? null : b)];
  if (!e && (e = Lb._, !e)) {
    throw w("IWatchable.-add-watch", b);
  }
  return e.call(null, b, c, d);
}, Mb = function Mb(b, c) {
  if (b ? b.yb : b) {
    return b.yb(b, c);
  }
  var d;
  d = Mb[l(null == b ? null : b)];
  if (!d && (d = Mb._, !d)) {
    throw w("IWatchable.-remove-watch", b);
  }
  return d.call(null, b, c);
}, Ob = function Ob(b) {
  if (b ? b.Xa : b) {
    return b.Xa(b);
  }
  var c;
  c = Ob[l(null == b ? null : b)];
  if (!c && (c = Ob._, !c)) {
    throw w("IEditableCollection.-as-transient", b);
  }
  return c.call(null, b);
}, Pb = function Pb(b, c) {
  if (b ? b.kb : b) {
    return b.kb(b, c);
  }
  var d;
  d = Pb[l(null == b ? null : b)];
  if (!d && (d = Pb._, !d)) {
    throw w("ITransientCollection.-conj!", b);
  }
  return d.call(null, b, c);
}, Qb = function Qb(b) {
  if (b ? b.lb : b) {
    return b.lb(b);
  }
  var c;
  c = Qb[l(null == b ? null : b)];
  if (!c && (c = Qb._, !c)) {
    throw w("ITransientCollection.-persistent!", b);
  }
  return c.call(null, b);
}, Rb = function Rb(b, c, d) {
  if (b ? b.jb : b) {
    return b.jb(b, c, d);
  }
  var e;
  e = Rb[l(null == b ? null : b)];
  if (!e && (e = Rb._, !e)) {
    throw w("ITransientAssociative.-assoc!", b);
  }
  return e.call(null, b, c, d);
}, Sb = function Sb(b, c, d) {
  if (b ? b.dc : b) {
    return b.dc(0, c, d);
  }
  var e;
  e = Sb[l(null == b ? null : b)];
  if (!e && (e = Sb._, !e)) {
    throw w("ITransientVector.-assoc-n!", b);
  }
  return e.call(null, b, c, d);
}, Tb = {}, Ub = function Ub(b, c) {
  if (b ? b.Va : b) {
    return b.Va(b, c);
  }
  var d;
  d = Ub[l(null == b ? null : b)];
  if (!d && (d = Ub._, !d)) {
    throw w("IComparable.-compare", b);
  }
  return d.call(null, b, c);
}, Vb = function Vb(b) {
  if (b ? b.bc : b) {
    return b.bc();
  }
  var c;
  c = Vb[l(null == b ? null : b)];
  if (!c && (c = Vb._, !c)) {
    throw w("IChunk.-drop-first", b);
  }
  return c.call(null, b);
}, Wb = function Wb(b) {
  if (b ? b.Ib : b) {
    return b.Ib(b);
  }
  var c;
  c = Wb[l(null == b ? null : b)];
  if (!c && (c = Wb._, !c)) {
    throw w("IChunkedSeq.-chunked-first", b);
  }
  return c.call(null, b);
}, Xb = function Xb(b) {
  if (b ? b.Jb : b) {
    return b.Jb(b);
  }
  var c;
  c = Xb[l(null == b ? null : b)];
  if (!c && (c = Xb._, !c)) {
    throw w("IChunkedSeq.-chunked-rest", b);
  }
  return c.call(null, b);
}, Zb = function Zb(b) {
  if (b ? b.Hb : b) {
    return b.Hb(b);
  }
  var c;
  c = Zb[l(null == b ? null : b)];
  if (!c && (c = Zb._, !c)) {
    throw w("IChunkedNext.-chunked-next", b);
  }
  return c.call(null, b);
}, $b = function $b(b, c) {
  if (b ? b.Nb : b) {
    return b.Nb(b, c);
  }
  var d;
  d = $b[l(null == b ? null : b)];
  if (!d && (d = $b._, !d)) {
    throw w("IReset.-reset!", b);
  }
  return d.call(null, b, c);
}, ac = function ac() {
  switch(arguments.length) {
    case 2:
      return ac.l(arguments[0], arguments[1]);
    case 3:
      return ac.w(arguments[0], arguments[1], arguments[2]);
    case 4:
      return ac.K(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return ac.V(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
};
ac.l = function(a, b) {
  if (a ? a.Ob : a) {
    return a.Ob(a, b);
  }
  var c;
  c = ac[l(null == a ? null : a)];
  if (!c && (c = ac._, !c)) {
    throw w("ISwap.-swap!", a);
  }
  return c.call(null, a, b);
};
ac.w = function(a, b, c) {
  if (a ? a.Pb : a) {
    return a.Pb(a, b, c);
  }
  var d;
  d = ac[l(null == a ? null : a)];
  if (!d && (d = ac._, !d)) {
    throw w("ISwap.-swap!", a);
  }
  return d.call(null, a, b, c);
};
ac.K = function(a, b, c, d) {
  if (a ? a.Qb : a) {
    return a.Qb(a, b, c, d);
  }
  var e;
  e = ac[l(null == a ? null : a)];
  if (!e && (e = ac._, !e)) {
    throw w("ISwap.-swap!", a);
  }
  return e.call(null, a, b, c, d);
};
ac.V = function(a, b, c, d, e) {
  if (a ? a.Rb : a) {
    return a.Rb(a, b, c, d, e);
  }
  var f;
  f = ac[l(null == a ? null : a)];
  if (!f && (f = ac._, !f)) {
    throw w("ISwap.-swap!", a);
  }
  return f.call(null, a, b, c, d, e);
};
ac.J = 5;
var bc = function bc(b) {
  if (b ? b.ub : b) {
    return b.ub(b);
  }
  var c;
  c = bc[l(null == b ? null : b)];
  if (!c && (c = bc._, !c)) {
    throw w("IIterable.-iterator", b);
  }
  return c.call(null, b);
};
function cc(a) {
  this.Gc = a;
  this.B = 1073741824;
  this.H = 0;
}
cc.prototype.ec = function(a, b) {
  return this.Gc.append(b);
};
function dc(a) {
  var b = new ka;
  a.U(null, new cc(b), va());
  return "" + x(b);
}
var ec = "undefined" !== typeof Math.imul && 0 !== Math.imul(4294967295, 5) ? function(a, b) {
  return Math.imul(a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function fc(a) {
  a = ec(a | 0, -862048943);
  return ec(a << 15 | a >>> -15, 461845907);
}
function gc(a, b) {
  var c = (a | 0) ^ (b | 0);
  return ec(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function hc(a, b) {
  var c = (a | 0) ^ b, c = ec(c ^ c >>> 16, -2048144789), c = ec(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function ic(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = gc(c, fc(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ fc(a.charCodeAt(a.length - 1)) : b;
  return hc(b, ec(2, a.length));
}
var jc = {}, kc = 0;
function lc(a) {
  255 < kc && (jc = {}, kc = 0);
  var b = jc[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = ec(31, d) + a.charCodeAt(c), c = e
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
    jc[a] = b;
    kc += 1;
  }
  return a = b;
}
function mc(a) {
  a && (a.B & 4194304 || a.Mc) ? a = a.R(null) : "number" === typeof a ? a = Math.floor(a) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = lc(a), 0 !== a && (a = fc(a), a = gc(0, a), a = hc(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : Eb(a);
  return a;
}
function nc(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function oc(a, b) {
  if (a.xa === b.xa) {
    return 0;
  }
  var c = Fa(a.ja);
  if (r(c ? b.ja : c)) {
    return -1;
  }
  if (r(a.ja)) {
    if (Fa(b.ja)) {
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
  return this.call.apply(this, [this].concat(Ja(b)));
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
  return null != a ? a : this._hash = a = nc(ic(this.name), lc(this.ja));
};
g.U = function(a, b) {
  return A(b, this.xa);
};
function pc() {
  var a = [x("reagent"), x(qc.l(rc, sc))].join("");
  return a instanceof D ? a : new D(null, a, a, null, null);
}
function G(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.B & 8388608 || a.Oc)) {
    return a.ba(null);
  }
  if (Da(a) || "string" === typeof a) {
    return 0 === a.length ? null : new I(a, 0);
  }
  if (u(Fb, a)) {
    return Gb(a);
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
  return null == a ? null : db(a);
}
function tc(a) {
  return null != a ? a && (a.B & 64 || a.gb) ? a.ma(null) : (a = G(a)) ? eb(a) : K : K;
}
function M(a) {
  return null == a ? null : a && (a.B & 128 || a.vb) ? a.la(null) : G(tc(a));
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
  return null == a ? null == b : a === b || Db(a, b);
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
function uc(a) {
  this.s = a;
}
uc.prototype.next = function() {
  if (null != this.s) {
    var a = J(this.s);
    this.s = M(this.s);
    return {value:a, done:!1};
  }
  return {value:null, done:!0};
};
function vc(a) {
  return new uc(G(a));
}
function xc(a, b) {
  var c = fc(a), c = gc(0, c);
  return hc(c, b);
}
function yc(a) {
  var b = 0, c = 1;
  for (a = G(a);;) {
    if (null != a) {
      b += 1, c = ec(31, c) + mc(J(a)) | 0, a = M(a);
    } else {
      return xc(c, b);
    }
  }
}
var zc = xc(1, 0);
function Bc(a) {
  var b = 0, c = 0;
  for (a = G(a);;) {
    if (null != a) {
      b += 1, c = c + mc(J(a)) | 0, a = M(a);
    } else {
      return xc(c, b);
    }
  }
}
var Cc = xc(0, 0);
Wa["null"] = !0;
Xa["null"] = function() {
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
Db.number = function(a, b) {
  return a === b;
};
Ua["function"] = !0;
vb["function"] = !0;
xb["function"] = function() {
  return null;
};
Eb._ = function(a) {
  return ca(a);
};
function sc(a) {
  return a + 1;
}
function Dc(a) {
  this.ca = a;
  this.B = 32768;
  this.H = 0;
}
Dc.prototype.Wa = function() {
  return this.ca;
};
function Ec(a) {
  return a instanceof Dc;
}
function O(a) {
  return ub(a);
}
function Fc(a, b) {
  var c = Xa(a);
  if (0 === c) {
    return b.D ? b.D() : b.call(null);
  }
  for (var d = y.l(a, 0), e = 1;;) {
    if (e < c) {
      var f = y.l(a, e), d = b.l ? b.l(d, f) : b.call(null, d, f);
      if (Ec(d)) {
        return ub(d);
      }
      e += 1;
    } else {
      return d;
    }
  }
}
function Gc(a, b, c) {
  var d = Xa(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = y.l(a, c), e = b.l ? b.l(e, f) : b.call(null, e, f);
      if (Ec(e)) {
        return ub(e);
      }
      c += 1;
    } else {
      return e;
    }
  }
}
function Hc(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.D ? b.D() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var f = a[e], d = b.l ? b.l(d, f) : b.call(null, d, f);
      if (Ec(d)) {
        return ub(d);
      }
      e += 1;
    } else {
      return d;
    }
  }
}
function Ic(a, b, c) {
  var d = a.length, e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = a[c], e = b.l ? b.l(e, f) : b.call(null, e, f);
      if (Ec(e)) {
        return ub(e);
      }
      c += 1;
    } else {
      return e;
    }
  }
}
function Jc(a, b, c, d) {
  for (var e = a.length;;) {
    if (d < e) {
      var f = a[d];
      c = b.l ? b.l(c, f) : b.call(null, c, f);
      if (Ec(c)) {
        return ub(c);
      }
      d += 1;
    } else {
      return c;
    }
  }
}
function Kc(a) {
  return a ? a.B & 2 || a.pc ? !0 : a.B ? !1 : u(Wa, a) : u(Wa, a);
}
function Lc(a) {
  return a ? a.B & 16 || a.cc ? !0 : a.B ? !1 : u(bb, a) : u(bb, a);
}
function Mc(a, b) {
  this.o = a;
  this.i = b;
}
Mc.prototype.Xb = function() {
  return this.i < this.o.length;
};
Mc.prototype.next = function() {
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
  return dc(this);
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
  return new Mc(this.o, this.i);
};
g.la = function() {
  return this.i + 1 < this.o.length ? new I(this.o, this.i + 1) : null;
};
g.$ = function() {
  var a = this.o.length - this.i;
  return 0 > a ? 0 : a;
};
g.R = function() {
  return yc(this);
};
g.G = function(a, b) {
  return Nc.l ? Nc.l(this, b) : Nc.call(null, this, b);
};
g.da = function() {
  return K;
};
g.ea = function(a, b) {
  return Jc(this.o, b, this.o[this.i], this.i + 1);
};
g.fa = function(a, b, c) {
  return Jc(this.o, b, c, this.i);
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
I.prototype[Ia] = function() {
  return vc(this);
};
function Oc(a, b) {
  return b < a.length ? new I(a, b) : null;
}
function R() {
  switch(arguments.length) {
    case 1:
      return Oc(arguments[0], 0);
    case 2:
      return Oc(arguments[0], arguments[1]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
}
function Pc(a) {
  for (;;) {
    var b = M(a);
    if (null != b) {
      a = b;
    } else {
      return J(a);
    }
  }
}
Db._ = function(a, b) {
  return a === b;
};
var Qc = function Qc() {
  switch(arguments.length) {
    case 0:
      return Qc.D();
    case 1:
      return Qc.h(arguments[0]);
    case 2:
      return Qc.l(arguments[0], arguments[1]);
    default:
      return Qc.C(arguments[0], arguments[1], new I(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Qc.D = function() {
  return Sc;
};
Qc.h = function(a) {
  return a;
};
Qc.l = function(a, b) {
  return null != a ? $a(a, b) : $a(K, b);
};
Qc.C = function(a, b, c) {
  for (;;) {
    if (r(c)) {
      a = Qc.l(a, b), b = J(c), c = M(c);
    } else {
      return Qc.l(a, b);
    }
  }
};
Qc.I = function(a) {
  var b = J(a), c = M(a);
  a = J(c);
  c = M(c);
  return Qc.C(b, a, c);
};
Qc.J = 2;
function S(a) {
  if (null != a) {
    if (a && (a.B & 2 || a.pc)) {
      a = a.$(null);
    } else {
      if (Da(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (u(Wa, a)) {
            a = Xa(a);
          } else {
            a: {
              a = G(a);
              for (var b = 0;;) {
                if (Kc(a)) {
                  a = b + Xa(a);
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
function Uc(a, b) {
  for (var c = null;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return G(a) ? J(a) : c;
    }
    if (Lc(a)) {
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
function Vc(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number");
  }
  if (null == a) {
    return a;
  }
  if (a && (a.B & 16 || a.cc)) {
    return a.S(null, b);
  }
  if (Da(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (u(bb, a)) {
    return y.l(a, b);
  }
  if (a ? a.B & 64 || a.gb || (a.B ? 0 : u(cb, a)) : u(cb, a)) {
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
        if (Lc(c)) {
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
  throw Error([x("nth not supported on this type "), x(Ha(Ga(a)))].join(""));
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
  if (Da(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (u(bb, a)) {
    return y.l(a, b);
  }
  if (a ? a.B & 64 || a.gb || (a.B ? 0 : u(cb, a)) : u(cb, a)) {
    return Uc(a, b);
  }
  throw Error([x("nth not supported on this type "), x(Ha(Ga(a)))].join(""));
}
function Wc(a, b) {
  return null == a ? null : a && (a.B & 256 || a.uc) ? a.W(null, b) : Da(a) ? b < a.length ? a[b | 0] : null : "string" === typeof a ? b < a.length ? a[b | 0] : null : u(gb, a) ? z.l(a, b) : null;
}
function Xc(a, b, c) {
  return null != a ? a && (a.B & 256 || a.uc) ? a.O(null, b, c) : Da(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : u(gb, a) ? z.w(a, b, c) : c : c;
}
var Yc = function Yc() {
  switch(arguments.length) {
    case 3:
      return Yc.w(arguments[0], arguments[1], arguments[2]);
    default:
      return Yc.C(arguments[0], arguments[1], arguments[2], new I(Array.prototype.slice.call(arguments, 3), 0));
  }
};
Yc.w = function(a, b, c) {
  if (null != a) {
    a = jb(a, b, c);
  } else {
    a: {
      a = [b];
      c = [c];
      b = a.length;
      var d = 0, e;
      for (e = Ob(Zc);;) {
        if (d < b) {
          var f = d + 1;
          e = e.jb(null, a[d], c[d]);
          d = f;
        } else {
          a = Qb(e);
          break a;
        }
      }
    }
  }
  return a;
};
Yc.C = function(a, b, c, d) {
  for (;;) {
    if (a = Yc.w(a, b, c), r(d)) {
      b = J(d), c = J(M(d)), d = M(M(d));
    } else {
      return a;
    }
  }
};
Yc.I = function(a) {
  var b = J(a), c = M(a);
  a = J(c);
  var d = M(c), c = J(d), d = M(d);
  return Yc.C(b, a, c, d);
};
Yc.J = 3;
var $c = function $c() {
  switch(arguments.length) {
    case 1:
      return $c.h(arguments[0]);
    case 2:
      return $c.l(arguments[0], arguments[1]);
    default:
      return $c.C(arguments[0], arguments[1], new I(Array.prototype.slice.call(arguments, 2), 0));
  }
};
$c.h = function(a) {
  return a;
};
$c.l = function(a, b) {
  return null == a ? null : lb(a, b);
};
$c.C = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = $c.l(a, b);
    if (r(c)) {
      b = J(c), c = M(c);
    } else {
      return a;
    }
  }
};
$c.I = function(a) {
  var b = J(a), c = M(a);
  a = J(c);
  c = M(c);
  return $c.C(b, a, c);
};
$c.J = 2;
function ad(a) {
  var b = "function" == l(a);
  return r(b) ? b : a ? r(r(null) ? null : a.oc) ? !0 : a.Ub ? !1 : u(Ua, a) : u(Ua, a);
}
function bd(a, b) {
  this.v = a;
  this.meta = b;
  this.B = 393217;
  this.H = 0;
}
g = bd.prototype;
g.T = function() {
  return this.meta;
};
g.X = function(a, b) {
  return new bd(this.v, b);
};
g.oc = !0;
g.call = function() {
  function a(a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P, F, aa, Qa) {
    a = this.v;
    return cd.tb ? cd.tb(a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P, F, aa, Qa) : cd.call(null, a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P, F, aa, Qa);
  }
  function b(a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P, F, aa) {
    a = this;
    return a.v.Ia ? a.v.Ia(b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P, F, aa) : a.v.call(null, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P, F, aa);
  }
  function c(a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P, F) {
    a = this;
    return a.v.Ha ? a.v.Ha(b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P, F) : a.v.call(null, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P, F);
  }
  function d(a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P) {
    a = this;
    return a.v.Ga ? a.v.Ga(b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P) : a.v.call(null, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P);
  }
  function e(a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L) {
    a = this;
    return a.v.Fa ? a.v.Fa(b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L) : a.v.call(null, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L);
  }
  function f(a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H) {
    a = this;
    return a.v.Ea ? a.v.Ea(b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H) : a.v.call(null, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H);
  }
  function h(a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E) {
    a = this;
    return a.v.Da ? a.v.Da(b, c, d, e, f, h, k, m, p, q, t, v, B, C, E) : a.v.call(null, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E);
  }
  function k(a, b, c, d, e, f, h, k, m, p, q, t, v, B, C) {
    a = this;
    return a.v.Ca ? a.v.Ca(b, c, d, e, f, h, k, m, p, q, t, v, B, C) : a.v.call(null, b, c, d, e, f, h, k, m, p, q, t, v, B, C);
  }
  function m(a, b, c, d, e, f, h, k, m, p, q, t, v, B) {
    a = this;
    return a.v.Ba ? a.v.Ba(b, c, d, e, f, h, k, m, p, q, t, v, B) : a.v.call(null, b, c, d, e, f, h, k, m, p, q, t, v, B);
  }
  function p(a, b, c, d, e, f, h, k, m, p, q, t, v) {
    a = this;
    return a.v.Aa ? a.v.Aa(b, c, d, e, f, h, k, m, p, q, t, v) : a.v.call(null, b, c, d, e, f, h, k, m, p, q, t, v);
  }
  function q(a, b, c, d, e, f, h, k, m, p, q, t) {
    a = this;
    return a.v.za ? a.v.za(b, c, d, e, f, h, k, m, p, q, t) : a.v.call(null, b, c, d, e, f, h, k, m, p, q, t);
  }
  function t(a, b, c, d, e, f, h, k, m, p, q) {
    a = this;
    return a.v.ya ? a.v.ya(b, c, d, e, f, h, k, m, p, q) : a.v.call(null, b, c, d, e, f, h, k, m, p, q);
  }
  function v(a, b, c, d, e, f, h, k, m, p) {
    a = this;
    return a.v.La ? a.v.La(b, c, d, e, f, h, k, m, p) : a.v.call(null, b, c, d, e, f, h, k, m, p);
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
  function aa(a, b, c) {
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
  var F = null, F = function(F, ma, ra, sa, wa, Aa, Ea, Ka, Pa, Sa, ab, ib, wb, Nb, Yb, wc, Rc, sd, je, gf, Lg, Gi) {
    switch(arguments.length) {
      case 1:
        return Qa.call(this, F);
      case 2:
        return La.call(this, F, ma);
      case 3:
        return aa.call(this, F, ma, ra);
      case 4:
        return P.call(this, F, ma, ra, sa);
      case 5:
        return L.call(this, F, ma, ra, sa, wa);
      case 6:
        return H.call(this, F, ma, ra, sa, wa, Aa);
      case 7:
        return E.call(this, F, ma, ra, sa, wa, Aa, Ea);
      case 8:
        return C.call(this, F, ma, ra, sa, wa, Aa, Ea, Ka);
      case 9:
        return B.call(this, F, ma, ra, sa, wa, Aa, Ea, Ka, Pa);
      case 10:
        return v.call(this, F, ma, ra, sa, wa, Aa, Ea, Ka, Pa, Sa);
      case 11:
        return t.call(this, F, ma, ra, sa, wa, Aa, Ea, Ka, Pa, Sa, ab);
      case 12:
        return q.call(this, F, ma, ra, sa, wa, Aa, Ea, Ka, Pa, Sa, ab, ib);
      case 13:
        return p.call(this, F, ma, ra, sa, wa, Aa, Ea, Ka, Pa, Sa, ab, ib, wb);
      case 14:
        return m.call(this, F, ma, ra, sa, wa, Aa, Ea, Ka, Pa, Sa, ab, ib, wb, Nb);
      case 15:
        return k.call(this, F, ma, ra, sa, wa, Aa, Ea, Ka, Pa, Sa, ab, ib, wb, Nb, Yb);
      case 16:
        return h.call(this, F, ma, ra, sa, wa, Aa, Ea, Ka, Pa, Sa, ab, ib, wb, Nb, Yb, wc);
      case 17:
        return f.call(this, F, ma, ra, sa, wa, Aa, Ea, Ka, Pa, Sa, ab, ib, wb, Nb, Yb, wc, Rc);
      case 18:
        return e.call(this, F, ma, ra, sa, wa, Aa, Ea, Ka, Pa, Sa, ab, ib, wb, Nb, Yb, wc, Rc, sd);
      case 19:
        return d.call(this, F, ma, ra, sa, wa, Aa, Ea, Ka, Pa, Sa, ab, ib, wb, Nb, Yb, wc, Rc, sd, je);
      case 20:
        return c.call(this, F, ma, ra, sa, wa, Aa, Ea, Ka, Pa, Sa, ab, ib, wb, Nb, Yb, wc, Rc, sd, je, gf);
      case 21:
        return b.call(this, F, ma, ra, sa, wa, Aa, Ea, Ka, Pa, Sa, ab, ib, wb, Nb, Yb, wc, Rc, sd, je, gf, Lg);
      case 22:
        return a.call(this, F, ma, ra, sa, wa, Aa, Ea, Ka, Pa, Sa, ab, ib, wb, Nb, Yb, wc, Rc, sd, je, gf, Lg, Gi);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  F.h = Qa;
  F.l = La;
  F.w = aa;
  F.K = P;
  F.V = L;
  F.sa = H;
  F.Ja = E;
  F.Ka = C;
  F.La = B;
  F.ya = v;
  F.za = t;
  F.Aa = q;
  F.Ba = p;
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
  return this.call.apply(this, [this].concat(Ja(b)));
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
g.ya = function(a, b, c, d, e, f, h, k, m, p) {
  return this.v.ya ? this.v.ya(a, b, c, d, e, f, h, k, m, p) : this.v.call(null, a, b, c, d, e, f, h, k, m, p);
};
g.za = function(a, b, c, d, e, f, h, k, m, p, q) {
  return this.v.za ? this.v.za(a, b, c, d, e, f, h, k, m, p, q) : this.v.call(null, a, b, c, d, e, f, h, k, m, p, q);
};
g.Aa = function(a, b, c, d, e, f, h, k, m, p, q, t) {
  return this.v.Aa ? this.v.Aa(a, b, c, d, e, f, h, k, m, p, q, t) : this.v.call(null, a, b, c, d, e, f, h, k, m, p, q, t);
};
g.Ba = function(a, b, c, d, e, f, h, k, m, p, q, t, v) {
  return this.v.Ba ? this.v.Ba(a, b, c, d, e, f, h, k, m, p, q, t, v) : this.v.call(null, a, b, c, d, e, f, h, k, m, p, q, t, v);
};
g.Ca = function(a, b, c, d, e, f, h, k, m, p, q, t, v, B) {
  return this.v.Ca ? this.v.Ca(a, b, c, d, e, f, h, k, m, p, q, t, v, B) : this.v.call(null, a, b, c, d, e, f, h, k, m, p, q, t, v, B);
};
g.Da = function(a, b, c, d, e, f, h, k, m, p, q, t, v, B, C) {
  return this.v.Da ? this.v.Da(a, b, c, d, e, f, h, k, m, p, q, t, v, B, C) : this.v.call(null, a, b, c, d, e, f, h, k, m, p, q, t, v, B, C);
};
g.Ea = function(a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E) {
  return this.v.Ea ? this.v.Ea(a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E) : this.v.call(null, a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E);
};
g.Fa = function(a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H) {
  return this.v.Fa ? this.v.Fa(a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H) : this.v.call(null, a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H);
};
g.Ga = function(a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L) {
  return this.v.Ga ? this.v.Ga(a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L) : this.v.call(null, a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L);
};
g.Ha = function(a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P) {
  return this.v.Ha ? this.v.Ha(a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P) : this.v.call(null, a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P);
};
g.Ia = function(a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P, aa) {
  return this.v.Ia ? this.v.Ia(a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P, aa) : this.v.call(null, a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P, aa);
};
g.tc = function(a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P, aa, La) {
  var Qa = this.v;
  return cd.tb ? cd.tb(Qa, a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P, aa, La) : cd.call(null, Qa, a, b, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P, aa, La);
};
function dd(a, b) {
  return ad(a) && !(a ? a.B & 262144 || a.Sc || (a.B ? 0 : u(yb, a)) : u(yb, a)) ? new bd(a, b) : null == a ? null : zb(a, b);
}
function ed(a) {
  var b = null != a;
  return (b ? a ? a.B & 131072 || a.xc || (a.B ? 0 : u(vb, a)) : u(vb, a) : b) ? xb(a) : null;
}
function fd(a) {
  return null == a || Fa(G(a));
}
function gd(a) {
  return null == a ? !1 : a ? a.B & 8 || a.Ic ? !0 : a.B ? !1 : u(Za, a) : u(Za, a);
}
function hd(a) {
  return null == a ? !1 : a ? a.B & 4096 || a.Qc ? !0 : a.B ? !1 : u(pb, a) : u(pb, a);
}
function id(a) {
  return null == a ? !1 : a ? a.B & 1024 || a.vc ? !0 : a.B ? !1 : u(kb, a) : u(kb, a);
}
function jd(a) {
  return a ? a.B & 16384 || a.Rc ? !0 : a.B ? !1 : u(sb, a) : u(sb, a);
}
function kd(a) {
  return a ? a.H & 512 || a.Hc ? !0 : !1 : !1;
}
function ld(a) {
  var b = [];
  ja(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function md(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, --e, b += 1;
  }
}
var nd = {};
function od(a) {
  return null == a ? !1 : a ? a.B & 64 || a.gb ? !0 : a.B ? !1 : u(cb, a) : u(cb, a);
}
function pd(a) {
  return r(a) ? !0 : !1;
}
function qd(a) {
  var b = ad(a);
  return b ? b : a ? a.B & 1 || a.Lc ? !0 : a.B ? !1 : u(Va, a) : u(Va, a);
}
function rd(a, b) {
  return Xc(a, b, nd) === nd ? !1 : !0;
}
function td(a, b) {
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
  if (a ? a.H & 2048 || a.eb || (a.H ? 0 : u(Tb, a)) : u(Tb, a)) {
    return Ub(a, b);
  }
  if ("string" !== typeof a && !Da(a) && !0 !== a && !1 !== a || Ga(a) !== Ga(b)) {
    throw Error([x("Cannot compare "), x(a), x(" to "), x(b)].join(""));
  }
  return na(a, b);
}
function ud(a, b) {
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
            var e = td(Vc(a, d), Vc(b, d));
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
function vd(a) {
  return N.l(a, td) ? td : function(b, c) {
    var d = a.l ? a.l(b, c) : a.call(null, b, c);
    return "number" === typeof d ? d : r(d) ? -1 : r(a.l ? a.l(c, b) : a.call(null, c, b)) ? 1 : 0;
  };
}
function wd(a, b) {
  if (G(b)) {
    var c = xd.h ? xd.h(b) : xd.call(null, b), d = vd(a);
    oa(c, d);
    return G(c);
  }
  return K;
}
function yd(a, b) {
  return zd(a, b);
}
function zd(a, b) {
  return wd(function(b, d) {
    return vd(td).call(null, a.h ? a.h(b) : a.call(null, b), a.h ? a.h(d) : a.call(null, d));
  }, b);
}
function Ad(a, b) {
  var c = G(b);
  if (c) {
    var d = J(c), c = M(c);
    return Ra ? Ra(a, d, c) : Ta.call(null, a, d, c);
  }
  return a.D ? a.D() : a.call(null);
}
function Bd(a, b, c) {
  for (c = G(c);;) {
    if (c) {
      var d = J(c);
      b = a.l ? a.l(b, d) : a.call(null, b, d);
      if (Ec(b)) {
        return ub(b);
      }
      c = M(c);
    } else {
      return b;
    }
  }
}
function Ta() {
  switch(arguments.length) {
    case 2:
      return Cd(arguments[0], arguments[1]);
    case 3:
      return Ra(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
}
function Cd(a, b) {
  return b && (b.B & 524288 || b.zc) ? b.ea(null, a) : Da(b) ? Hc(b, a) : "string" === typeof b ? Hc(b, a) : u(Ab, b) ? Bb.l(b, a) : Ad(a, b);
}
function Ra(a, b, c) {
  return c && (c.B & 524288 || c.zc) ? c.fa(null, a, b) : Da(c) ? Ic(c, a, b) : "string" === typeof c ? Ic(c, a, b) : u(Ab, c) ? Bb.w(c, a, b) : Bd(a, b, c);
}
function Dd(a, b, c) {
  return null != c ? Cb(c, a, b) : b;
}
function Ed(a) {
  return a;
}
function Fd(a) {
  return a - 1;
}
function Gd(a) {
  a = (a - a % 2) / 2;
  return 0 <= a ? Math.floor(a) : Math.ceil(a);
}
function Hd(a) {
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
function Nc(a, b) {
  var c;
  if (b ? b.B & 16777216 || b.Pc || (b.B ? 0 : u(Hb, b)) : u(Hb, b)) {
    if (Kc(a) && Kc(b) && S(a) !== S(b)) {
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
  return pd(c);
}
function Id(a, b, c, d, e) {
  this.meta = a;
  this.first = b;
  this.rest = c;
  this.count = d;
  this.F = e;
  this.B = 65937646;
  this.H = 8192;
}
g = Id.prototype;
g.toString = function() {
  return dc(this);
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
  return eb(this);
};
g.R = function() {
  var a = this.F;
  return null != a ? a : this.F = a = yc(this);
};
g.G = function(a, b) {
  return Nc(this, b);
};
g.da = function() {
  return zb(K, this.meta);
};
g.ea = function(a, b) {
  return Ad(b, this);
};
g.fa = function(a, b, c) {
  return Bd(b, c, this);
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
  return new Id(b, this.first, this.rest, this.count, this.F);
};
g.Z = function(a, b) {
  return new Id(this.meta, b, this, this.count + 1, null);
};
Id.prototype[Ia] = function() {
  return vc(this);
};
function Jd(a) {
  this.meta = a;
  this.B = 65937614;
  this.H = 8192;
}
g = Jd.prototype;
g.toString = function() {
  return dc(this);
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
  return zc;
};
g.G = function(a, b) {
  return Nc(this, b);
};
g.da = function() {
  return this;
};
g.ea = function(a, b) {
  return Ad(b, this);
};
g.fa = function(a, b, c) {
  return Bd(b, c, this);
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
  return new Jd(b);
};
g.Z = function(a, b) {
  return new Id(this.meta, b, null, 1, null);
};
var K = new Jd(null);
Jd.prototype[Ia] = function() {
  return vc(this);
};
function Kd() {
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
function Ld(a, b, c, d) {
  this.meta = a;
  this.first = b;
  this.rest = c;
  this.F = d;
  this.B = 65929452;
  this.H = 8192;
}
g = Ld.prototype;
g.toString = function() {
  return dc(this);
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
  return null != a ? a : this.F = a = yc(this);
};
g.G = function(a, b) {
  return Nc(this, b);
};
g.da = function() {
  return dd(K, this.meta);
};
g.ea = function(a, b) {
  return Ad(b, this);
};
g.fa = function(a, b, c) {
  return Bd(b, c, this);
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
  return new Ld(b, this.first, this.rest, this.F);
};
g.Z = function(a, b) {
  return new Ld(null, b, this, this.F);
};
Ld.prototype[Ia] = function() {
  return vc(this);
};
function Q(a, b) {
  var c = null == b;
  return (c ? c : b && (b.B & 64 || b.gb)) ? new Ld(null, a, b, null) : new Ld(null, a, G(b), null);
}
function Md(a, b) {
  if (a.ta === b.ta) {
    return 0;
  }
  var c = Fa(a.ja);
  if (r(c ? b.ja : c)) {
    return -1;
  }
  if (r(a.ja)) {
    if (Fa(b.ja)) {
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
        return Wc(c, this);
      case 3:
        return Xc(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = function(a, c) {
    return Wc(c, this);
  };
  a.w = function(a, c, d) {
    return Xc(c, this, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ja(b)));
};
g.h = function(a) {
  return Wc(a, this);
};
g.l = function(a, b) {
  return Xc(a, this, b);
};
g.R = function() {
  var a = this._hash;
  return null != a ? a : this._hash = a = nc(ic(this.name), lc(this.ja)) + 2654435769 | 0;
};
g.U = function(a, b) {
  return A(b, [x(":"), x(this.ta)].join(""));
};
function Nd(a, b) {
  return a === b ? !0 : a instanceof U && b instanceof U ? a.ta === b.ta : !1;
}
var Od = function Od() {
  switch(arguments.length) {
    case 1:
      return Od.h(arguments[0]);
    case 2:
      return Od.l(arguments[0], arguments[1]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
};
Od.h = function(a) {
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
    return new U(b, Pd.h ? Pd.h(a) : Pd.call(null, a), a.xa, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new U(b[0], b[1], a, null) : new U(null, b[0], a, null)) : null;
};
Od.l = function(a, b) {
  return new U(a, b, [x(r(a) ? [x(a), x("/")].join("") : null), x(b)].join(""), null);
};
Od.J = 2;
function Qd(a, b, c, d) {
  this.meta = a;
  this.fn = b;
  this.s = c;
  this.F = d;
  this.B = 32374988;
  this.H = 0;
}
g = Qd.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
function Rd(a) {
  null != a.fn && (a.s = a.fn.D ? a.fn.D() : a.fn.call(null), a.fn = null);
  return a.s;
}
g.T = function() {
  return this.meta;
};
g.la = function() {
  Gb(this);
  return null == this.s ? null : M(this.s);
};
g.R = function() {
  var a = this.F;
  return null != a ? a : this.F = a = yc(this);
};
g.G = function(a, b) {
  return Nc(this, b);
};
g.da = function() {
  return dd(K, this.meta);
};
g.ea = function(a, b) {
  return Ad(b, this);
};
g.fa = function(a, b, c) {
  return Bd(b, c, this);
};
g.ga = function() {
  Gb(this);
  return null == this.s ? null : J(this.s);
};
g.ma = function() {
  Gb(this);
  return null != this.s ? tc(this.s) : K;
};
g.ba = function() {
  Rd(this);
  if (null == this.s) {
    return null;
  }
  for (var a = this.s;;) {
    if (a instanceof Qd) {
      a = Rd(a);
    } else {
      return this.s = a, G(this.s);
    }
  }
};
g.X = function(a, b) {
  return new Qd(b, this.fn, this.s, this.F);
};
g.Z = function(a, b) {
  return Q(b, this);
};
Qd.prototype[Ia] = function() {
  return vc(this);
};
function Sd(a, b) {
  this.L = a;
  this.end = b;
  this.B = 2;
  this.H = 0;
}
Sd.prototype.add = function(a) {
  this.L[this.end] = a;
  return this.end += 1;
};
Sd.prototype.chunk = function() {
  var a = new Td(this.L, 0, this.end);
  this.L = null;
  return a;
};
Sd.prototype.$ = function() {
  return this.end;
};
function Ud(a) {
  return new Sd(Array(a), 0);
}
function Td(a, b, c) {
  this.o = a;
  this.off = b;
  this.end = c;
  this.B = 524306;
  this.H = 0;
}
g = Td.prototype;
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
  return new Td(this.o, this.off + 1, this.end);
};
g.ea = function(a, b) {
  return Jc(this.o, b, this.o[this.off], this.off + 1);
};
g.fa = function(a, b, c) {
  return Jc(this.o, b, c, this.off);
};
function Vd(a, b, c, d) {
  this.chunk = a;
  this.wa = b;
  this.meta = c;
  this.F = d;
  this.B = 31850732;
  this.H = 1536;
}
g = Vd.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.T = function() {
  return this.meta;
};
g.la = function() {
  if (1 < Xa(this.chunk)) {
    return new Vd(Vb(this.chunk), this.wa, this.meta, null);
  }
  var a = Gb(this.wa);
  return null == a ? null : a;
};
g.R = function() {
  var a = this.F;
  return null != a ? a : this.F = a = yc(this);
};
g.G = function(a, b) {
  return Nc(this, b);
};
g.da = function() {
  return dd(K, this.meta);
};
g.ga = function() {
  return y.l(this.chunk, 0);
};
g.ma = function() {
  return 1 < Xa(this.chunk) ? new Vd(Vb(this.chunk), this.wa, this.meta, null) : null == this.wa ? K : this.wa;
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
  return new Vd(this.chunk, this.wa, b, this.F);
};
g.Z = function(a, b) {
  return Q(b, this);
};
g.Hb = function() {
  return null == this.wa ? null : this.wa;
};
Vd.prototype[Ia] = function() {
  return vc(this);
};
function Wd(a, b) {
  return 0 === Xa(a) ? b : new Vd(a, b, null, null);
}
function Xd(a, b) {
  a.add(b);
}
function xd(a) {
  for (var b = [];;) {
    if (G(a)) {
      b.push(J(a)), a = M(a);
    } else {
      return b;
    }
  }
}
function Yd(a, b) {
  if (Kc(a)) {
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
var Zd = function Zd(b) {
  return null == b ? null : null == M(b) ? G(J(b)) : Q(J(b), Zd(M(b)));
}, $d = function $d() {
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
  return new Qd(null, function() {
    return null;
  }, null, null);
};
$d.h = function(a) {
  return new Qd(null, function() {
    return a;
  }, null, null);
};
$d.l = function(a, b) {
  return new Qd(null, function() {
    var c = G(a);
    return c ? kd(c) ? Wd(Wb(c), $d.l(Xb(c), b)) : Q(J(c), $d.l(tc(c), b)) : b;
  }, null, null);
};
$d.C = function(a, b, c) {
  return function e(a, b) {
    return new Qd(null, function() {
      var c = G(a);
      return c ? kd(c) ? Wd(Wb(c), e(Xb(c), b)) : Q(J(c), e(tc(c), b)) : r(b) ? e(J(b), M(b)) : null;
    }, null, null);
  }($d.l(a, b), c);
};
$d.I = function(a) {
  var b = J(a), c = M(a);
  a = J(c);
  c = M(c);
  return $d.C(b, a, c);
};
$d.J = 2;
var ae = function ae() {
  switch(arguments.length) {
    case 0:
      return ae.D();
    case 1:
      return ae.h(arguments[0]);
    case 2:
      return ae.l(arguments[0], arguments[1]);
    default:
      return ae.C(arguments[0], arguments[1], new I(Array.prototype.slice.call(arguments, 2), 0));
  }
};
ae.D = function() {
  return Ob(Sc);
};
ae.h = function(a) {
  return a;
};
ae.l = function(a, b) {
  return Pb(a, b);
};
ae.C = function(a, b, c) {
  for (;;) {
    if (a = Pb(a, b), r(c)) {
      b = J(c), c = M(c);
    } else {
      return a;
    }
  }
};
ae.I = function(a) {
  var b = J(a), c = M(a);
  a = J(c);
  c = M(c);
  return ae.C(b, a, c);
};
ae.J = 2;
function be(a, b, c) {
  var d = G(c);
  if (0 === b) {
    return a.D ? a.D() : a.call(null);
  }
  c = db(d);
  var e = eb(d);
  if (1 === b) {
    return a.h ? a.h(c) : a.h ? a.h(c) : a.call(null, c);
  }
  var d = db(e), f = eb(e);
  if (2 === b) {
    return a.l ? a.l(c, d) : a.l ? a.l(c, d) : a.call(null, c, d);
  }
  var e = db(f), h = eb(f);
  if (3 === b) {
    return a.w ? a.w(c, d, e) : a.w ? a.w(c, d, e) : a.call(null, c, d, e);
  }
  var f = db(h), k = eb(h);
  if (4 === b) {
    return a.K ? a.K(c, d, e, f) : a.K ? a.K(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var h = db(k), m = eb(k);
  if (5 === b) {
    return a.V ? a.V(c, d, e, f, h) : a.V ? a.V(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  var k = db(m), p = eb(m);
  if (6 === b) {
    return a.sa ? a.sa(c, d, e, f, h, k) : a.sa ? a.sa(c, d, e, f, h, k) : a.call(null, c, d, e, f, h, k);
  }
  var m = db(p), q = eb(p);
  if (7 === b) {
    return a.Ja ? a.Ja(c, d, e, f, h, k, m) : a.Ja ? a.Ja(c, d, e, f, h, k, m) : a.call(null, c, d, e, f, h, k, m);
  }
  var p = db(q), t = eb(q);
  if (8 === b) {
    return a.Ka ? a.Ka(c, d, e, f, h, k, m, p) : a.Ka ? a.Ka(c, d, e, f, h, k, m, p) : a.call(null, c, d, e, f, h, k, m, p);
  }
  var q = db(t), v = eb(t);
  if (9 === b) {
    return a.La ? a.La(c, d, e, f, h, k, m, p, q) : a.La ? a.La(c, d, e, f, h, k, m, p, q) : a.call(null, c, d, e, f, h, k, m, p, q);
  }
  var t = db(v), B = eb(v);
  if (10 === b) {
    return a.ya ? a.ya(c, d, e, f, h, k, m, p, q, t) : a.ya ? a.ya(c, d, e, f, h, k, m, p, q, t) : a.call(null, c, d, e, f, h, k, m, p, q, t);
  }
  var v = db(B), C = eb(B);
  if (11 === b) {
    return a.za ? a.za(c, d, e, f, h, k, m, p, q, t, v) : a.za ? a.za(c, d, e, f, h, k, m, p, q, t, v) : a.call(null, c, d, e, f, h, k, m, p, q, t, v);
  }
  var B = db(C), E = eb(C);
  if (12 === b) {
    return a.Aa ? a.Aa(c, d, e, f, h, k, m, p, q, t, v, B) : a.Aa ? a.Aa(c, d, e, f, h, k, m, p, q, t, v, B) : a.call(null, c, d, e, f, h, k, m, p, q, t, v, B);
  }
  var C = db(E), H = eb(E);
  if (13 === b) {
    return a.Ba ? a.Ba(c, d, e, f, h, k, m, p, q, t, v, B, C) : a.Ba ? a.Ba(c, d, e, f, h, k, m, p, q, t, v, B, C) : a.call(null, c, d, e, f, h, k, m, p, q, t, v, B, C);
  }
  var E = db(H), L = eb(H);
  if (14 === b) {
    return a.Ca ? a.Ca(c, d, e, f, h, k, m, p, q, t, v, B, C, E) : a.Ca ? a.Ca(c, d, e, f, h, k, m, p, q, t, v, B, C, E) : a.call(null, c, d, e, f, h, k, m, p, q, t, v, B, C, E);
  }
  var H = db(L), P = eb(L);
  if (15 === b) {
    return a.Da ? a.Da(c, d, e, f, h, k, m, p, q, t, v, B, C, E, H) : a.Da ? a.Da(c, d, e, f, h, k, m, p, q, t, v, B, C, E, H) : a.call(null, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H);
  }
  var L = db(P), aa = eb(P);
  if (16 === b) {
    return a.Ea ? a.Ea(c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L) : a.Ea ? a.Ea(c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L) : a.call(null, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L);
  }
  var P = db(aa), La = eb(aa);
  if (17 === b) {
    return a.Fa ? a.Fa(c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P) : a.Fa ? a.Fa(c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P) : a.call(null, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P);
  }
  var aa = db(La), Qa = eb(La);
  if (18 === b) {
    return a.Ga ? a.Ga(c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P, aa) : a.Ga ? a.Ga(c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P, aa) : a.call(null, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P, aa);
  }
  La = db(Qa);
  Qa = eb(Qa);
  if (19 === b) {
    return a.Ha ? a.Ha(c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P, aa, La) : a.Ha ? a.Ha(c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P, aa, La) : a.call(null, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P, aa, La);
  }
  var F = db(Qa);
  eb(Qa);
  if (20 === b) {
    return a.Ia ? a.Ia(c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P, aa, La, F) : a.Ia ? a.Ia(c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P, aa, La, F) : a.call(null, c, d, e, f, h, k, m, p, q, t, v, B, C, E, H, L, P, aa, La, F);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function cd() {
  switch(arguments.length) {
    case 2:
      return ce(arguments[0], arguments[1]);
    case 3:
      return de(arguments[0], arguments[1], arguments[2]);
    case 4:
      var a;
      a = arguments[0];
      var b = Q(arguments[1], Q(arguments[2], arguments[3])), c = a.J;
      if (a.I) {
        var d = Yd(b, c + 1);
        a = d <= c ? be(a, d, b) : a.I(b);
      } else {
        a = a.apply(a, xd(b));
      }
      return a;
    case 5:
      return ee(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return fe(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new I(Array.prototype.slice.call(arguments, 5), 0));
  }
}
function ce(a, b) {
  var c = a.J;
  if (a.I) {
    var d = Yd(b, c + 1);
    return d <= c ? be(a, d, b) : a.I(b);
  }
  return a.apply(a, xd(b));
}
function de(a, b, c) {
  b = Q(b, c);
  c = a.J;
  if (a.I) {
    var d = Yd(b, c + 1);
    return d <= c ? be(a, d, b) : a.I(b);
  }
  return a.apply(a, xd(b));
}
function ee(a, b, c, d, e) {
  b = Q(b, Q(c, Q(d, e)));
  c = a.J;
  return a.I ? (d = Yd(b, c + 1), d <= c ? be(a, d, b) : a.I(b)) : a.apply(a, xd(b));
}
function fe(a, b, c, d, e, f) {
  b = Q(b, Q(c, Q(d, Q(e, Zd(f)))));
  c = a.J;
  return a.I ? (d = Yd(b, c + 1), d <= c ? be(a, d, b) : a.I(b)) : a.apply(a, xd(b));
}
function ge(a, b) {
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
function he(a) {
  for (var b = Ed;;) {
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
var ke = function ke() {
  switch(arguments.length) {
    case 1:
      return ke.h(arguments[0]);
    case 2:
      return ke.l(arguments[0], arguments[1]);
    case 3:
      return ke.w(arguments[0], arguments[1], arguments[2]);
    case 4:
      return ke.K(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return ke.C(arguments[0], arguments[1], arguments[2], arguments[3], new I(Array.prototype.slice.call(arguments, 4), 0));
  }
};
ke.h = function(a) {
  return a;
};
ke.l = function(a, b) {
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
        return fe(a, b, c, e, f, R([h], 0));
      }
      c.J = 3;
      c.I = function(a) {
        var b = J(a);
        a = M(a);
        var c = J(a);
        a = M(a);
        var e = J(a);
        a = tc(a);
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
ke.w = function(a, b, c) {
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
        return fe(a, b, c, d, f, R([h, k], 0));
      }
      d.J = 3;
      d.I = function(a) {
        var b = J(a);
        a = M(a);
        var c = J(a);
        a = M(a);
        var d = J(a);
        a = tc(a);
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
ke.K = function(a, b, c, d) {
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
    var m = null, p = function() {
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
        return fe(a, b, c, d, e, R([h, k, m], 0));
      }
      e.J = 3;
      e.I = function(a) {
        var b = J(a);
        a = M(a);
        var c = J(a);
        a = M(a);
        var d = J(a);
        a = tc(a);
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
          return p.C(a, b, c, m);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    m.J = 3;
    m.I = p.I;
    m.D = k;
    m.h = h;
    m.l = f;
    m.w = e;
    m.C = p.C;
    return m;
  }();
};
ke.C = function(a, b, c, d, e) {
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
      return ee(a, b, c, d, $d.l(e, f));
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
ke.I = function(a) {
  var b = J(a), c = M(a);
  a = J(c);
  var d = M(c), c = J(d), e = M(d), d = J(e), e = M(e);
  return ke.C(b, a, c, d, e);
};
ke.J = 4;
function le(a, b, c, d) {
  this.state = a;
  this.meta = b;
  this.ab = c;
  this.Y = d;
  this.H = 16386;
  this.B = 6455296;
}
g = le.prototype;
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
      var m = b, p = c;
      a.K ? a.K(k, this, m, p) : a.call(null, k, this, m, p);
      h += 1;
    } else {
      if (a = G(d)) {
        d = a, kd(d) ? (e = Wb(d), d = Xb(d), a = e, f = S(e), e = a) : (a = J(d), k = T(a, 0), a = T(a, 1), e = k, f = b, h = c, a.K ? a.K(e, this, f, h) : a.call(null, e, this, f, h), d = M(d), e = null, f = 0), h = 0;
      } else {
        return null;
      }
    }
  }
};
g.wb = function(a, b, c) {
  this.Y = Yc.w(this.Y, b, c);
  return this;
};
g.yb = function(a, b) {
  return this.Y = $c.l(this.Y, b);
};
g.R = function() {
  return ca(this);
};
function me() {
  switch(arguments.length) {
    case 1:
      return ne(arguments[0]);
    default:
      var a = arguments[0], b = new I(Array.prototype.slice.call(arguments, 1), 0), c = od(b) ? ce(oe, b) : b, b = Wc(c, za), c = Wc(c, pe);
      return new le(a, b, c, null);
  }
}
function ne(a) {
  return new le(a, null, null, null);
}
function V(a, b) {
  if (a instanceof le) {
    var c = a.ab;
    if (null != c && !r(c.h ? c.h(b) : c.call(null, b))) {
      throw Error([x("Assert failed: "), x("Validator rejected reference state"), x("\n"), x(function() {
        var a = Kd(new D(null, "validate", "validate", 1439230700, null), new D(null, "new-value", "new-value", -1567397401, null));
        return qe.h ? qe.h(a) : qe.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.Y && Kb(a, c, b);
    return b;
  }
  return $b(a, b);
}
var qc = function qc() {
  switch(arguments.length) {
    case 2:
      return qc.l(arguments[0], arguments[1]);
    case 3:
      return qc.w(arguments[0], arguments[1], arguments[2]);
    case 4:
      return qc.K(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return qc.C(arguments[0], arguments[1], arguments[2], arguments[3], new I(Array.prototype.slice.call(arguments, 4), 0));
  }
};
qc.l = function(a, b) {
  var c;
  a instanceof le ? (c = a.state, c = b.h ? b.h(c) : b.call(null, c), c = V(a, c)) : c = ac.l(a, b);
  return c;
};
qc.w = function(a, b, c) {
  if (a instanceof le) {
    var d = a.state;
    b = b.l ? b.l(d, c) : b.call(null, d, c);
    a = V(a, b);
  } else {
    a = ac.w(a, b, c);
  }
  return a;
};
qc.K = function(a, b, c, d) {
  if (a instanceof le) {
    var e = a.state;
    b = b.w ? b.w(e, c, d) : b.call(null, e, c, d);
    a = V(a, b);
  } else {
    a = ac.K(a, b, c, d);
  }
  return a;
};
qc.C = function(a, b, c, d, e) {
  return a instanceof le ? V(a, ee(b, a.state, c, d, e)) : ac.V(a, b, c, d, e);
};
qc.I = function(a) {
  var b = J(a), c = M(a);
  a = J(c);
  var d = M(c), c = J(d), e = M(d), d = J(e), e = M(e);
  return qc.C(b, a, c, d, e);
};
qc.J = 4;
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
          e = de(a, e, f);
          return b.l ? b.l(c, e) : b.call(null, c, e);
        }
        c.J = 2;
        c.I = function(a) {
          var b = J(a);
          a = M(a);
          var c = J(a);
          a = tc(a);
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
            var q = null;
            if (2 < arguments.length) {
              for (var q = 0, t = Array(arguments.length - 2);q < t.length;) {
                t[q] = arguments[q + 2], ++q;
              }
              q = new I(t, 0);
            }
            return h.C(a, b, q);
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
  return new Qd(null, function() {
    var c = G(b);
    if (c) {
      if (kd(c)) {
        for (var d = Wb(c), e = S(d), f = Ud(e), h = 0;;) {
          if (h < e) {
            Xd(f, function() {
              var b = y.l(d, h);
              return a.h ? a.h(b) : a.call(null, b);
            }()), h += 1;
          } else {
            break;
          }
        }
        return Wd(f.chunk(), W.l(a, Xb(c)));
      }
      return Q(function() {
        var b = J(c);
        return a.h ? a.h(b) : a.call(null, b);
      }(), W.l(a, tc(c)));
    }
    return null;
  }, null, null);
};
W.w = function(a, b, c) {
  return new Qd(null, function() {
    var d = G(b), e = G(c);
    if (d && e) {
      var f = Q, h;
      h = J(d);
      var k = J(e);
      h = a.l ? a.l(h, k) : a.call(null, h, k);
      d = f(h, W.w(a, tc(d), tc(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
W.K = function(a, b, c, d) {
  return new Qd(null, function() {
    var e = G(b), f = G(c), h = G(d);
    if (e && f && h) {
      var k = Q, m;
      m = J(e);
      var p = J(f), q = J(h);
      m = a.w ? a.w(m, p, q) : a.call(null, m, p, q);
      e = k(m, W.K(a, tc(e), tc(f), tc(h)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
W.C = function(a, b, c, d, e) {
  var f = function k(a) {
    return new Qd(null, function() {
      var b = W.l(G, a);
      return ge(Ed, b) ? Q(W.l(J, b), k(W.l(tc, b))) : null;
    }, null, null);
  };
  return W.l(function() {
    return function(b) {
      return ce(a, b);
    };
  }(f), f(Qc.C(e, d, R([c, b], 0))));
};
W.I = function(a) {
  var b = J(a), c = M(a);
  a = J(c);
  var d = M(c), c = J(d), e = M(d), d = J(e), e = M(e);
  return W.C(b, a, c, d, e);
};
W.J = 4;
function re(a, b) {
  var c;
  null != a ? a && (a.H & 4 || a.Jc) ? (c = Ra(Pb, Ob(a), b), c = Qb(c), c = dd(c, ed(a))) : c = Ra($a, a, b) : c = Ra(Qc, K, b);
  return c;
}
function se(a, b) {
  this.M = a;
  this.o = b;
}
function te(a) {
  return new se(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function ue(a) {
  return new se(a.M, Ja(a.o));
}
function ve(a) {
  a = a.A;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function we(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = te(a);
    d.o[0] = c;
    c = d;
    b -= 5;
  }
}
var xe = function xe(b, c, d, e) {
  var f = ue(d), h = b.A - 1 >>> c & 31;
  5 === c ? f.o[h] = e : (d = d.o[h], b = null != d ? xe(b, c - 5, d, e) : we(null, c - 5, e), f.o[h] = b);
  return f;
};
function ye(a, b) {
  throw Error([x("No item "), x(a), x(" in vector of length "), x(b)].join(""));
}
function ze(a, b) {
  if (b >= ve(a)) {
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
function Ae(a, b) {
  return 0 <= b && b < a.A ? ze(a, b) : ye(b, a.A);
}
var Be = function Be(b, c, d, e, f) {
  var h = ue(d);
  if (0 === c) {
    h.o[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Be(b, c - 5, d.o[k], e, f);
    h.o[k] = b;
  }
  return h;
}, Ce = function Ce(b, c, d) {
  var e = b.A - 2 >>> c & 31;
  if (5 < c) {
    b = Ce(b, c - 5, d.o[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = ue(d);
    d.o[e] = b;
    return d;
  }
  if (0 === e) {
    return null;
  }
  d = ue(d);
  d.o[e] = null;
  return d;
};
function De(a, b, c, d, e, f) {
  this.i = a;
  this.base = b;
  this.o = c;
  this.ra = d;
  this.start = e;
  this.end = f;
}
De.prototype.Xb = function() {
  return this.i < this.end;
};
De.prototype.next = function() {
  32 === this.i - this.base && (this.o = ze(this.ra, this.i), this.base += 32);
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
  return dc(this);
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
      var e = ze(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var h = f + a, k = e[f], d = b.w ? b.w(d, h, k) : b.call(null, d, h, k);
            if (Ec(d)) {
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
      if (Ec(e)) {
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
  return Ae(this, b)[b & 31];
};
g.oa = function(a, b, c) {
  return 0 <= b && b < this.A ? ze(this, b)[b & 31] : c;
};
g.Sb = function(a, b, c) {
  if (0 <= b && b < this.A) {
    return ve(this) <= b ? (a = Ja(this.tail), a[b & 31] = c, new X(this.meta, this.A, this.shift, this.root, a, null)) : new X(this.meta, this.A, this.shift, Be(this, this.shift, this.root, b, c), this.tail, null);
  }
  if (b === this.A) {
    return $a(this, c);
  }
  throw Error([x("Index "), x(b), x(" out of bounds  [0,"), x(this.A), x("]")].join(""));
};
g.ub = function() {
  var a = this.A;
  return new De(0, 0, 0 < S(this) ? ze(this, 0) : null, this, 0, a);
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
    return zb(Sc, this.meta);
  }
  if (1 < this.A - ve(this)) {
    return new X(this.meta, this.A - 1, this.shift, this.root, this.tail.slice(0, -1), null);
  }
  var a = ze(this, this.A - 2), b = Ce(this, this.shift, this.root), b = null == b ? Y : b, c = this.A - 1;
  return 5 < this.shift && null == b.o[1] ? new X(this.meta, c, this.shift - 5, b.o[0], a, null) : new X(this.meta, c, this.shift, b, a, null);
};
g.R = function() {
  var a = this.F;
  return null != a ? a : this.F = a = yc(this);
};
g.G = function(a, b) {
  if (b instanceof X) {
    if (this.A === S(b)) {
      for (var c = bc(this), d = bc(b);;) {
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
    return Nc(this, b);
  }
};
g.Xa = function() {
  var a = this;
  return new Ee(a.A, a.shift, function() {
    var b = a.root;
    return Fe.h ? Fe.h(b) : Fe.call(null, b);
  }(), function() {
    var b = a.tail;
    return Ge.h ? Ge.h(b) : Ge.call(null, b);
  }());
};
g.da = function() {
  return dd(Sc, this.meta);
};
g.ea = function(a, b) {
  return Fc(this, b);
};
g.fa = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.A) {
      var e = ze(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var h = e[f], d = b.l ? b.l(d, h) : b.call(null, d, h);
            if (Ec(d)) {
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
      if (Ec(e)) {
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
    return tb(this, b, c);
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
  return He ? He(this, a, 0, 0) : Ie.call(null, this, a, 0, 0);
};
g.X = function(a, b) {
  return new X(b, this.A, this.shift, this.root, this.tail, this.F);
};
g.Z = function(a, b) {
  if (32 > this.A - ve(this)) {
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
  d ? (d = te(null), d.o[0] = this.root, e = we(null, this.shift, new se(null, this.tail)), d.o[1] = e) : d = xe(this, this.shift, this.root, new se(null, this.tail));
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
  return this.call.apply(this, [this].concat(Ja(b)));
};
g.h = function(a) {
  return this.S(null, a);
};
g.l = function(a, b) {
  return this.oa(null, a, b);
};
var Y = new se(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Sc = new X(null, 0, 5, Y, [], zc);
function Je(a) {
  var b = a.length;
  if (32 > b) {
    return new X(null, b, 5, Y, a, null);
  }
  for (var c = 32, d = (new X(null, 32, 5, Y, a.slice(0, 32), null)).Xa(null);;) {
    if (c < b) {
      var e = c + 1, d = ae.l(d, a[c]), c = e
    } else {
      return Qb(d);
    }
  }
}
X.prototype[Ia] = function() {
  return vc(this);
};
function Ke(a) {
  return Da(a) ? Je(a) : Qb(Ra(Pb, Ob(Sc), a));
}
var Le = function Le() {
  return Le.C(0 < arguments.length ? new I(Array.prototype.slice.call(arguments, 0), 0) : null);
};
Le.C = function(a) {
  return a instanceof I && 0 === a.i ? Je(a.o) : Ke(a);
};
Le.J = 0;
Le.I = function(a) {
  return Le.C(G(a));
};
function Me(a, b, c, d, e, f) {
  this.pa = a;
  this.node = b;
  this.i = c;
  this.off = d;
  this.meta = e;
  this.F = f;
  this.B = 32375020;
  this.H = 1536;
}
g = Me.prototype;
g.toString = function() {
  return dc(this);
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
    a = He ? He(a, b, c, d) : Ie.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Zb(this);
};
g.R = function() {
  var a = this.F;
  return null != a ? a : this.F = a = yc(this);
};
g.G = function(a, b) {
  return Nc(this, b);
};
g.da = function() {
  return dd(Sc, this.meta);
};
g.ea = function(a, b) {
  var c;
  c = this.pa;
  var d = this.i + this.off, e = S(this.pa);
  c = Ne ? Ne(c, d, e) : Oe.call(null, c, d, e);
  return Fc(c, b);
};
g.fa = function(a, b, c) {
  a = this.pa;
  var d = this.i + this.off, e = S(this.pa);
  a = Ne ? Ne(a, d, e) : Oe.call(null, a, d, e);
  return Gc(a, b, c);
};
g.ga = function() {
  return this.node[this.off];
};
g.ma = function() {
  if (this.off + 1 < this.node.length) {
    var a;
    a = this.pa;
    var b = this.node, c = this.i, d = this.off + 1;
    a = He ? He(a, b, c, d) : Ie.call(null, a, b, c, d);
    return null == a ? K : a;
  }
  return Xb(this);
};
g.ba = function() {
  return this;
};
g.Ib = function() {
  var a = this.node;
  return new Td(a, this.off, a.length);
};
g.Jb = function() {
  var a = this.i + this.node.length;
  if (a < Xa(this.pa)) {
    var b = this.pa, c = ze(this.pa, a);
    return He ? He(b, c, a, 0) : Ie.call(null, b, c, a, 0);
  }
  return K;
};
g.X = function(a, b) {
  var c = this.pa, d = this.node, e = this.i, f = this.off;
  return Pe ? Pe(c, d, e, f, b) : Ie.call(null, c, d, e, f, b);
};
g.Z = function(a, b) {
  return Q(b, this);
};
g.Hb = function() {
  var a = this.i + this.node.length;
  if (a < Xa(this.pa)) {
    var b = this.pa, c = ze(this.pa, a);
    return He ? He(b, c, a, 0) : Ie.call(null, b, c, a, 0);
  }
  return null;
};
Me.prototype[Ia] = function() {
  return vc(this);
};
function Ie() {
  switch(arguments.length) {
    case 3:
      var a = arguments[0], b = arguments[1], c = arguments[2];
      return new Me(a, Ae(a, b), b, c, null, null);
    case 4:
      return He(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Pe(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
}
function He(a, b, c, d) {
  return new Me(a, b, c, d, null, null);
}
function Pe(a, b, c, d, e) {
  return new Me(a, b, c, d, e, null);
}
function Qe(a, b, c, d, e) {
  this.meta = a;
  this.ra = b;
  this.start = c;
  this.end = d;
  this.F = e;
  this.B = 167666463;
  this.H = 8192;
}
g = Qe.prototype;
g.toString = function() {
  return dc(this);
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
      if (Ec(c)) {
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
  return 0 > b || this.end <= this.start + b ? ye(b, this.end - this.start) : y.l(this.ra, this.start + b);
};
g.oa = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : y.w(this.ra, this.start + b, c);
};
g.Sb = function(a, b, c) {
  var d = this.start + b;
  a = this.meta;
  c = Yc.w(this.ra, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return Re.V ? Re.V(a, c, b, d, null) : Re.call(null, a, c, b, d, null);
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
  return Re.V ? Re.V(a, b, c, d, null) : Re.call(null, a, b, c, d, null);
};
g.R = function() {
  var a = this.F;
  return null != a ? a : this.F = a = yc(this);
};
g.G = function(a, b) {
  return Nc(this, b);
};
g.da = function() {
  return dd(Sc, this.meta);
};
g.ea = function(a, b) {
  return Fc(this, b);
};
g.fa = function(a, b, c) {
  return Gc(this, b, c);
};
g.cb = function(a, b, c) {
  if ("number" === typeof b) {
    return tb(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.ba = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : Q(y.l(a.ra, e), new Qd(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
g.X = function(a, b) {
  var c = this.ra, d = this.start, e = this.end, f = this.F;
  return Re.V ? Re.V(b, c, d, e, f) : Re.call(null, b, c, d, e, f);
};
g.Z = function(a, b) {
  var c = this.meta, d = tb(this.ra, this.end, b), e = this.start, f = this.end + 1;
  return Re.V ? Re.V(c, d, e, f, null) : Re.call(null, c, d, e, f, null);
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
  return this.call.apply(this, [this].concat(Ja(b)));
};
g.h = function(a) {
  return this.S(null, a);
};
g.l = function(a, b) {
  return this.oa(null, a, b);
};
Qe.prototype[Ia] = function() {
  return vc(this);
};
function Re(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Qe) {
      c = b.start + c, d = b.start + d, b = b.ra;
    } else {
      var f = S(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Qe(a, b, c, d, e);
    }
  }
}
function Oe() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0];
      return Ne(a, arguments[1], S(a));
    case 3:
      return Ne(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
}
function Ne(a, b, c) {
  return Re(null, a, b, c, null);
}
function Se(a, b) {
  return a === b.M ? b : new se(a, Ja(b.o));
}
function Fe(a) {
  return new se({}, Ja(a.o));
}
function Ge(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  md(a, 0, b, 0, a.length);
  return b;
}
var Te = function Te(b, c, d, e) {
  d = Se(b.root.M, d);
  var f = b.A - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.o[f];
    b = null != h ? Te(b, c - 5, h, e) : we(b.root.M, c - 5, e);
  }
  d.o[f] = b;
  return d;
};
function Ee(a, b, c, d) {
  this.A = a;
  this.shift = b;
  this.root = c;
  this.tail = d;
  this.H = 88;
  this.B = 275;
}
g = Ee.prototype;
g.kb = function(a, b) {
  if (this.root.M) {
    if (32 > this.A - ve(this)) {
      this.tail[this.A & 31] = b;
    } else {
      var c = new se(this.root.M, this.tail), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.tail = d;
      if (this.A >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = we(this.root.M, this.shift, c);
        this.root = new se(this.root.M, d);
        this.shift = e;
      } else {
        this.root = Te(this, this.shift, this.root, c);
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
    var a = this.A - ve(this), b = Array(a);
    md(this.tail, 0, b, 0, a);
    return new X(null, this.A, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
g.jb = function(a, b, c) {
  if ("number" === typeof b) {
    return Sb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
g.dc = function(a, b, c) {
  var d = this;
  if (d.root.M) {
    if (0 <= b && b < d.A) {
      return ve(this) <= b ? d.tail[b & 31] = c : (a = function() {
        return function f(a, k) {
          var m = Se(d.root.M, k);
          if (0 === a) {
            m.o[b & 31] = c;
          } else {
            var p = b >>> a & 31, q = f(a - 5, m.o[p]);
            m.o[p] = q;
          }
          return m;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.A) {
      return Pb(this, c);
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
    return Ae(this, b)[b & 31];
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
  return this.call.apply(this, [this].concat(Ja(b)));
};
g.h = function(a) {
  return this.W(null, a);
};
g.l = function(a, b) {
  return this.O(null, a, b);
};
function Ue() {
  this.B = 2097152;
  this.H = 0;
}
Ue.prototype.equiv = function(a) {
  return this.G(null, a);
};
Ue.prototype.G = function() {
  return !1;
};
var Ve = new Ue;
function We(a, b) {
  return pd(id(b) ? S(a) === S(b) ? ge(Ed, W.l(function(a) {
    return N.l(Xc(b, J(a), Ve), J(M(a)));
  }, a)) : null : null);
}
function Xe(a) {
  this.s = a;
}
Xe.prototype.next = function() {
  if (null != this.s) {
    var a = J(this.s), b = T(a, 0), a = T(a, 1);
    this.s = M(this.s);
    return {value:[b, a], done:!1};
  }
  return {value:null, done:!0};
};
function Ye(a) {
  return new Xe(G(a));
}
function Ze(a) {
  this.s = a;
}
Ze.prototype.next = function() {
  if (null != this.s) {
    var a = J(this.s);
    this.s = M(this.s);
    return {value:[a, a], done:!1};
  }
  return {value:null, done:!0};
};
function $e(a, b) {
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
function af(a, b, c) {
  this.o = a;
  this.i = b;
  this.ka = c;
  this.B = 32374990;
  this.H = 0;
}
g = af.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.T = function() {
  return this.ka;
};
g.la = function() {
  return this.i < this.o.length - 2 ? new af(this.o, this.i + 2, this.ka) : null;
};
g.$ = function() {
  return (this.o.length - this.i) / 2;
};
g.R = function() {
  return yc(this);
};
g.G = function(a, b) {
  return Nc(this, b);
};
g.da = function() {
  return dd(K, this.ka);
};
g.ea = function(a, b) {
  return Ad(b, this);
};
g.fa = function(a, b, c) {
  return Bd(b, c, this);
};
g.ga = function() {
  return new X(null, 2, 5, Y, [this.o[this.i], this.o[this.i + 1]], null);
};
g.ma = function() {
  return this.i < this.o.length - 2 ? new af(this.o, this.i + 2, this.ka) : K;
};
g.ba = function() {
  return this;
};
g.X = function(a, b) {
  return new af(this.o, this.i, b);
};
g.Z = function(a, b) {
  return Q(b, this);
};
af.prototype[Ia] = function() {
  return vc(this);
};
function bf(a, b, c) {
  this.o = a;
  this.i = b;
  this.A = c;
}
bf.prototype.Xb = function() {
  return this.i < this.A;
};
bf.prototype.next = function() {
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
  return dc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.keys = function() {
  return vc(cf.h ? cf.h(this) : cf.call(null, this));
};
g.entries = function() {
  return Ye(G(this));
};
g.values = function() {
  return vc(df.h ? df.h(this) : df.call(null, this));
};
g.has = function(a) {
  return rd(this, a);
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
        kd(b) ? (c = Wb(b), b = Xb(b), h = c, d = S(c), c = h) : (c = J(b), h = T(c, 0), c = f = T(c, 1), a.l ? a.l(c, h) : a.call(null, c, h), b = M(b), c = null, d = 0), e = 0;
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
  a = $e(this.o, b);
  return -1 === a ? c : this.o[a + 1];
};
g.fb = function(a, b, c) {
  a = this.o.length;
  for (var d = 0;;) {
    if (d < a) {
      var e = this.o[d], f = this.o[d + 1];
      c = b.w ? b.w(c, e, f) : b.call(null, c, e, f);
      if (Ec(c)) {
        return b = c, O.h ? O.h(b) : O.call(null, b);
      }
      d += 2;
    } else {
      return c;
    }
  }
};
g.ub = function() {
  return new bf(this.o, 0, 2 * this.A);
};
g.T = function() {
  return this.meta;
};
g.$ = function() {
  return this.A;
};
g.R = function() {
  var a = this.F;
  return null != a ? a : this.F = a = Bc(this);
};
g.G = function(a, b) {
  if (b && (b.B & 1024 || b.vc)) {
    var c = this.o.length;
    if (this.A === b.$(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.O(null, this.o[d], nd);
          if (e !== nd) {
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
    return We(this, b);
  }
};
g.Xa = function() {
  return new ef({}, this.o.length, Ja(this.o));
};
g.da = function() {
  return zb(ff, this.meta);
};
g.ea = function(a, b) {
  return Ad(b, this);
};
g.fa = function(a, b, c) {
  return Bd(b, c, this);
};
g.Kb = function(a, b) {
  if (0 <= $e(this.o, b)) {
    var c = this.o.length, d = c - 2;
    if (0 === d) {
      return Ya(this);
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
  a = $e(this.o, b);
  if (-1 === a) {
    if (this.A < hf) {
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
    return zb(jb(re(Zc, this), b, c), this.meta);
  }
  if (c === this.o[a + 1]) {
    return this;
  }
  b = Ja(this.o);
  b[a + 1] = c;
  return new n(this.meta, this.A, b, null);
};
g.Gb = function(a, b) {
  return -1 !== $e(this.o, b);
};
g.ba = function() {
  var a = this.o;
  return 0 <= a.length - 2 ? new af(a, 0, null) : null;
};
g.X = function(a, b) {
  return new n(b, this.A, this.o, this.F);
};
g.Z = function(a, b) {
  if (jd(b)) {
    return jb(this, y.l(b, 0), y.l(b, 1));
  }
  for (var c = this, d = G(b);;) {
    if (null == d) {
      return c;
    }
    var e = J(d);
    if (jd(e)) {
      c = jb(c, y.l(e, 0), y.l(e, 1)), d = M(d);
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
  return this.call.apply(this, [this].concat(Ja(b)));
};
g.h = function(a) {
  return this.W(null, a);
};
g.l = function(a, b) {
  return this.O(null, a, b);
};
var ff = new n(null, 0, [], Cc), hf = 8;
n.prototype[Ia] = function() {
  return vc(this);
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
    return Gd(this.$a);
  }
  throw Error("count after persistent!");
};
g.W = function(a, b) {
  return z.w(this, b, null);
};
g.O = function(a, b, c) {
  if (r(this.Ya)) {
    return a = $e(this.o, b), -1 === a ? c : this.o[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.kb = function(a, b) {
  if (r(this.Ya)) {
    if (b ? b.B & 2048 || b.wc || (b.B ? 0 : u(mb, b)) : u(mb, b)) {
      return Rb(this, jf.h ? jf.h(b) : jf.call(null, b), kf.h ? kf.h(b) : kf.call(null, b));
    }
    for (var c = G(b), d = this;;) {
      var e = J(c);
      if (r(e)) {
        var f = e, c = M(c), d = Rb(d, function() {
          var a = f;
          return jf.h ? jf.h(a) : jf.call(null, a);
        }(), function() {
          var a = f;
          return kf.h ? kf.h(a) : kf.call(null, a);
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
    return this.Ya = !1, new n(null, Gd(this.$a), this.o, null);
  }
  throw Error("persistent! called twice");
};
g.jb = function(a, b, c) {
  if (r(this.Ya)) {
    a = $e(this.o, b);
    if (-1 === a) {
      if (this.$a + 2 <= 2 * hf) {
        return this.$a += 2, this.o.push(b), this.o.push(c), this;
      }
      a = this.$a;
      var d = this.o;
      a = lf.l ? lf.l(a, d) : lf.call(null, a, d);
      return Rb(a, b, c);
    }
    c !== this.o[a + 1] && (this.o[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function lf(a, b) {
  for (var c = Ob(Zc), d = 0;;) {
    if (d < a) {
      c = Rb(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function mf() {
  this.ca = !1;
}
function nf(a, b) {
  return a === b ? !0 : Nd(a, b) ? !0 : N.l(a, b);
}
function of(a, b, c) {
  a = Ja(a);
  a[b] = c;
  return a;
}
function pf(a, b) {
  var c = Array(a.length - 2);
  md(a, 0, c, 0, 2 * b);
  md(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
function qf(a, b, c, d) {
  a = a.Sa(b);
  a.o[c] = d;
  return a;
}
function rf(a, b, c) {
  for (var d = a.length, e = 0, f = c;;) {
    if (e < d) {
      c = a[e];
      if (null != c) {
        var h = a[e + 1];
        c = b.w ? b.w(f, c, h) : b.call(null, f, c, h);
      } else {
        c = a[e + 1], c = null != c ? c.rb(b, f) : f;
      }
      if (Ec(c)) {
        return a = c, O.h ? O.h(a) : O.call(null, a);
      }
      e += 2;
      f = c;
    } else {
      return f;
    }
  }
}
function sf(a, b, c) {
  this.M = a;
  this.N = b;
  this.o = c;
}
g = sf.prototype;
g.Sa = function(a) {
  if (a === this.M) {
    return this;
  }
  var b = Hd(this.N), c = Array(0 > b ? 4 : 2 * (b + 1));
  md(this.o, 0, c, 0, 2 * b);
  return new sf(a, this.N, c);
};
g.pb = function() {
  var a = this.o;
  return tf ? tf(a) : uf.call(null, a);
};
g.rb = function(a, b) {
  return rf(this.o, a, b);
};
g.Oa = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.N & e)) {
    return d;
  }
  var f = Hd(this.N & e - 1), e = this.o[2 * f], f = this.o[2 * f + 1];
  return null == e ? f.Oa(a + 5, b, c, d) : nf(c, e) ? f : d;
};
g.va = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = Hd(this.N & h - 1);
  if (0 === (this.N & h)) {
    var m = Hd(this.N);
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
      k[c >>> b & 31] = vf.va(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.N >>> d & 1) && (k[d] = null != this.o[e] ? vf.va(a, b + 5, mc(this.o[e]), this.o[e], this.o[e + 1], f) : this.o[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new wf(a, m + 1, k);
    }
    b = Array(2 * (m + 4));
    md(this.o, 0, b, 0, 2 * k);
    b[2 * k] = d;
    b[2 * k + 1] = e;
    md(this.o, 2 * k, b, 2 * (k + 1), 2 * (m - k));
    f.ca = !0;
    a = this.Sa(a);
    a.o = b;
    a.N |= h;
    return a;
  }
  m = this.o[2 * k];
  h = this.o[2 * k + 1];
  if (null == m) {
    return m = h.va(a, b + 5, c, d, e, f), m === h ? this : qf(this, a, 2 * k + 1, m);
  }
  if (nf(d, m)) {
    return e === h ? this : qf(this, a, 2 * k + 1, e);
  }
  f.ca = !0;
  f = b + 5;
  d = xf ? xf(a, f, m, h, c, d, e) : yf.call(null, a, f, m, h, c, d, e);
  e = 2 * k;
  k = 2 * k + 1;
  a = this.Sa(a);
  a.o[e] = null;
  a.o[k] = d;
  return a;
};
g.ua = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = Hd(this.N & f - 1);
  if (0 === (this.N & f)) {
    var k = Hd(this.N);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = vf.ua(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.N >>> c & 1) && (h[c] = null != this.o[d] ? vf.ua(a + 5, mc(this.o[d]), this.o[d], this.o[d + 1], e) : this.o[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new wf(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    md(this.o, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    md(this.o, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.ca = !0;
    return new sf(null, this.N | f, a);
  }
  var m = this.o[2 * h], f = this.o[2 * h + 1];
  if (null == m) {
    return k = f.ua(a + 5, b, c, d, e), k === f ? this : new sf(null, this.N, of(this.o, 2 * h + 1, k));
  }
  if (nf(c, m)) {
    return d === f ? this : new sf(null, this.N, of(this.o, 2 * h + 1, d));
  }
  e.ca = !0;
  e = this.N;
  k = this.o;
  a += 5;
  a = zf ? zf(a, m, f, b, c, d) : yf.call(null, a, m, f, b, c, d);
  c = 2 * h;
  h = 2 * h + 1;
  d = Ja(k);
  d[c] = null;
  d[h] = a;
  return new sf(null, e, d);
};
g.qb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.N & d)) {
    return this;
  }
  var e = Hd(this.N & d - 1), f = this.o[2 * e], h = this.o[2 * e + 1];
  return null == f ? (a = h.qb(a + 5, b, c), a === h ? this : null != a ? new sf(null, this.N, of(this.o, 2 * e + 1, a)) : this.N === d ? null : new sf(null, this.N ^ d, pf(this.o, e))) : nf(c, f) ? new sf(null, this.N ^ d, pf(this.o, e)) : this;
};
var vf = new sf(null, 0, []);
function wf(a, b, c) {
  this.M = a;
  this.A = b;
  this.o = c;
}
g = wf.prototype;
g.Sa = function(a) {
  return a === this.M ? this : new wf(a, this.A, Ja(this.o));
};
g.pb = function() {
  var a = this.o;
  return Af ? Af(a) : Bf.call(null, a);
};
g.rb = function(a, b) {
  for (var c = this.o.length, d = 0, e = b;;) {
    if (d < c) {
      var f = this.o[d];
      if (null != f && (e = f.rb(a, e), Ec(e))) {
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
    return a = qf(this, a, h, vf.va(a, b + 5, c, d, e, f)), a.A += 1, a;
  }
  b = k.va(a, b + 5, c, d, e, f);
  return b === k ? this : qf(this, a, h, b);
};
g.ua = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.o[f];
  if (null == h) {
    return new wf(null, this.A + 1, of(this.o, f, vf.ua(a + 5, b, c, d, e)));
  }
  a = h.ua(a + 5, b, c, d, e);
  return a === h ? this : new wf(null, this.A, of(this.o, f, a));
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
                d = new sf(null, h, b);
                break a;
              }
            }
          }
        } else {
          d = new wf(null, this.A - 1, of(this.o, d, a));
        }
      } else {
        d = new wf(null, this.A, of(this.o, d, a));
      }
    }
    return d;
  }
  return this;
};
function Cf(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (nf(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return -1;
    }
  }
}
function Df(a, b, c, d) {
  this.M = a;
  this.Ma = b;
  this.A = c;
  this.o = d;
}
g = Df.prototype;
g.Sa = function(a) {
  if (a === this.M) {
    return this;
  }
  var b = Array(2 * (this.A + 1));
  md(this.o, 0, b, 0, 2 * this.A);
  return new Df(a, this.Ma, this.A, b);
};
g.pb = function() {
  var a = this.o;
  return tf ? tf(a) : uf.call(null, a);
};
g.rb = function(a, b) {
  return rf(this.o, a, b);
};
g.Oa = function(a, b, c, d) {
  a = Cf(this.o, this.A, c);
  return 0 > a ? d : nf(c, this.o[a]) ? this.o[a + 1] : d;
};
g.va = function(a, b, c, d, e, f) {
  if (c === this.Ma) {
    b = Cf(this.o, this.A, d);
    if (-1 === b) {
      if (this.o.length > 2 * this.A) {
        return b = 2 * this.A, c = 2 * this.A + 1, a = this.Sa(a), a.o[b] = d, a.o[c] = e, f.ca = !0, a.A += 1, a;
      }
      c = this.o.length;
      b = Array(c + 2);
      md(this.o, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.ca = !0;
      d = this.A + 1;
      a === this.M ? (this.o = b, this.A = d, a = this) : a = new Df(this.M, this.Ma, d, b);
      return a;
    }
    return this.o[b + 1] === e ? this : qf(this, a, b + 1, e);
  }
  return (new sf(a, 1 << (this.Ma >>> b & 31), [null, this, null, null])).va(a, b, c, d, e, f);
};
g.ua = function(a, b, c, d, e) {
  return b === this.Ma ? (a = Cf(this.o, this.A, c), -1 === a ? (a = 2 * this.A, b = Array(a + 2), md(this.o, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ca = !0, new Df(null, this.Ma, this.A + 1, b)) : N.l(this.o[a], d) ? this : new Df(null, this.Ma, this.A, of(this.o, a + 1, d))) : (new sf(null, 1 << (this.Ma >>> a & 31), [null, this])).ua(a, b, c, d, e);
};
g.qb = function(a, b, c) {
  a = Cf(this.o, this.A, c);
  return -1 === a ? this : 1 === this.A ? null : new Df(null, this.Ma, this.A - 1, pf(this.o, Gd(a)));
};
function yf() {
  switch(arguments.length) {
    case 6:
      return zf(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return xf(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
}
function zf(a, b, c, d, e, f) {
  var h = mc(b);
  if (h === d) {
    return new Df(null, h, 2, [b, c, e, f]);
  }
  var k = new mf;
  return vf.ua(a, h, b, c, k).ua(a, d, e, f, k);
}
function xf(a, b, c, d, e, f, h) {
  var k = mc(c);
  if (k === e) {
    return new Df(null, k, 2, [c, d, f, h]);
  }
  var m = new mf;
  return vf.va(a, b, k, c, d, m).va(a, b, e, f, h, m);
}
function Ef(a, b, c, d, e) {
  this.meta = a;
  this.Pa = b;
  this.i = c;
  this.s = d;
  this.F = e;
  this.B = 32374860;
  this.H = 0;
}
g = Ef.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.T = function() {
  return this.meta;
};
g.R = function() {
  var a = this.F;
  return null != a ? a : this.F = a = yc(this);
};
g.G = function(a, b) {
  return Nc(this, b);
};
g.da = function() {
  return dd(K, this.meta);
};
g.ea = function(a, b) {
  return Ad(b, this);
};
g.fa = function(a, b, c) {
  return Bd(b, c, this);
};
g.ga = function() {
  return null == this.s ? new X(null, 2, 5, Y, [this.Pa[this.i], this.Pa[this.i + 1]], null) : J(this.s);
};
g.ma = function() {
  if (null == this.s) {
    var a = this.Pa, b = this.i + 2;
    return Ff ? Ff(a, b, null) : uf.call(null, a, b, null);
  }
  var a = this.Pa, b = this.i, c = M(this.s);
  return Ff ? Ff(a, b, c) : uf.call(null, a, b, c);
};
g.ba = function() {
  return this;
};
g.X = function(a, b) {
  return new Ef(b, this.Pa, this.i, this.s, this.F);
};
g.Z = function(a, b) {
  return Q(b, this);
};
Ef.prototype[Ia] = function() {
  return vc(this);
};
function uf() {
  switch(arguments.length) {
    case 1:
      return tf(arguments[0]);
    case 3:
      return Ff(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
}
function tf(a) {
  return Ff(a, 0, null);
}
function Ff(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new Ef(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (r(d) && (d = d.pb(), r(d))) {
          return new Ef(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new Ef(null, a, b, c, null);
  }
}
function Gf(a, b, c, d, e) {
  this.meta = a;
  this.Pa = b;
  this.i = c;
  this.s = d;
  this.F = e;
  this.B = 32374860;
  this.H = 0;
}
g = Gf.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.T = function() {
  return this.meta;
};
g.R = function() {
  var a = this.F;
  return null != a ? a : this.F = a = yc(this);
};
g.G = function(a, b) {
  return Nc(this, b);
};
g.da = function() {
  return dd(K, this.meta);
};
g.ea = function(a, b) {
  return Ad(b, this);
};
g.fa = function(a, b, c) {
  return Bd(b, c, this);
};
g.ga = function() {
  return J(this.s);
};
g.ma = function() {
  var a = this.Pa, b = this.i, c = M(this.s);
  return Hf ? Hf(null, a, b, c) : Bf.call(null, null, a, b, c);
};
g.ba = function() {
  return this;
};
g.X = function(a, b) {
  return new Gf(b, this.Pa, this.i, this.s, this.F);
};
g.Z = function(a, b) {
  return Q(b, this);
};
Gf.prototype[Ia] = function() {
  return vc(this);
};
function Bf() {
  switch(arguments.length) {
    case 1:
      return Af(arguments[0]);
    case 4:
      return Hf(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
}
function Af(a) {
  return Hf(null, a, 0, null);
}
function Hf(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (r(e) && (e = e.pb(), r(e))) {
          return new Gf(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new Gf(a, b, c, d, null);
  }
}
function If(a, b, c, d, e, f) {
  this.meta = a;
  this.A = b;
  this.root = c;
  this.ha = d;
  this.na = e;
  this.F = f;
  this.B = 16123663;
  this.H = 8196;
}
g = If.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.keys = function() {
  return vc(cf.h ? cf.h(this) : cf.call(null, this));
};
g.entries = function() {
  return Ye(G(this));
};
g.values = function() {
  return vc(df.h ? df.h(this) : df.call(null, this));
};
g.has = function(a) {
  return rd(this, a);
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
        kd(b) ? (c = Wb(b), b = Xb(b), h = c, d = S(c), c = h) : (c = J(b), h = T(c, 0), c = f = T(c, 1), a.l ? a.l(c, h) : a.call(null, c, h), b = M(b), c = null, d = 0), e = 0;
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
  return null == b ? this.ha ? this.na : c : null == this.root ? c : this.root.Oa(0, mc(b), b, c);
};
g.fb = function(a, b, c) {
  this.ha && (a = this.na, c = b.w ? b.w(c, null, a) : b.call(null, c, null, a));
  return Ec(c) ? O.h ? O.h(c) : O.call(null, c) : null != this.root ? this.root.rb(b, c) : c;
};
g.T = function() {
  return this.meta;
};
g.$ = function() {
  return this.A;
};
g.R = function() {
  var a = this.F;
  return null != a ? a : this.F = a = Bc(this);
};
g.G = function(a, b) {
  return We(this, b);
};
g.Xa = function() {
  return new Jf({}, this.root, this.A, this.ha, this.na);
};
g.da = function() {
  return zb(Zc, this.meta);
};
g.Kb = function(a, b) {
  if (null == b) {
    return this.ha ? new If(this.meta, this.A - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.qb(0, mc(b), b);
  return c === this.root ? this : new If(this.meta, this.A - 1, c, this.ha, this.na, null);
};
g.cb = function(a, b, c) {
  if (null == b) {
    return this.ha && c === this.na ? this : new If(this.meta, this.ha ? this.A : this.A + 1, this.root, !0, c, null);
  }
  a = new mf;
  b = (null == this.root ? vf : this.root).ua(0, mc(b), b, c, a);
  return b === this.root ? this : new If(this.meta, a.ca ? this.A + 1 : this.A, b, this.ha, this.na, null);
};
g.Gb = function(a, b) {
  return null == b ? this.ha : null == this.root ? !1 : this.root.Oa(0, mc(b), b, nd) !== nd;
};
g.ba = function() {
  if (0 < this.A) {
    var a = null != this.root ? this.root.pb() : null;
    return this.ha ? Q(new X(null, 2, 5, Y, [null, this.na], null), a) : a;
  }
  return null;
};
g.X = function(a, b) {
  return new If(b, this.A, this.root, this.ha, this.na, this.F);
};
g.Z = function(a, b) {
  if (jd(b)) {
    return jb(this, y.l(b, 0), y.l(b, 1));
  }
  for (var c = this, d = G(b);;) {
    if (null == d) {
      return c;
    }
    var e = J(d);
    if (jd(e)) {
      c = jb(c, y.l(e, 0), y.l(e, 1)), d = M(d);
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
  return this.call.apply(this, [this].concat(Ja(b)));
};
g.h = function(a) {
  return this.W(null, a);
};
g.l = function(a, b) {
  return this.O(null, a, b);
};
var Zc = new If(null, 0, null, !1, null, Cc);
If.prototype[Ia] = function() {
  return vc(this);
};
function Jf(a, b, c, d, e) {
  this.M = a;
  this.root = b;
  this.count = c;
  this.ha = d;
  this.na = e;
  this.B = 258;
  this.H = 56;
}
function Kf(a, b) {
  if (a.M) {
    if (b ? b.B & 2048 || b.wc || (b.B ? 0 : u(mb, b)) : u(mb, b)) {
      return Lf(a, jf.h ? jf.h(b) : jf.call(null, b), kf.h ? kf.h(b) : kf.call(null, b));
    }
    for (var c = G(b), d = a;;) {
      var e = J(c);
      if (r(e)) {
        var f = e, c = M(c), d = Lf(d, function() {
          var a = f;
          return jf.h ? jf.h(a) : jf.call(null, a);
        }(), function() {
          var a = f;
          return kf.h ? kf.h(a) : kf.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function Lf(a, b, c) {
  if (a.M) {
    if (null == b) {
      a.na !== c && (a.na = c), a.ha || (a.count += 1, a.ha = !0);
    } else {
      var d = new mf;
      b = (null == a.root ? vf : a.root).va(a.M, 0, mc(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ca && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
g = Jf.prototype;
g.$ = function() {
  if (this.M) {
    return this.count;
  }
  throw Error("count after persistent!");
};
g.W = function(a, b) {
  return null == b ? this.ha ? this.na : null : null == this.root ? null : this.root.Oa(0, mc(b), b);
};
g.O = function(a, b, c) {
  return null == b ? this.ha ? this.na : c : null == this.root ? c : this.root.Oa(0, mc(b), b, c);
};
g.kb = function(a, b) {
  return Kf(this, b);
};
g.lb = function() {
  var a;
  if (this.M) {
    this.M = null, a = new If(null, this.count, this.root, this.ha, this.na, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.jb = function(a, b, c) {
  return Lf(this, b, c);
};
var oe = function oe() {
  return oe.C(0 < arguments.length ? new I(Array.prototype.slice.call(arguments, 0), 0) : null);
};
oe.C = function(a) {
  for (var b = G(a), c = Ob(Zc);;) {
    if (b) {
      a = M(M(b));
      var d = J(b), b = J(M(b)), c = Rb(c, d, b), b = a;
    } else {
      return Qb(c);
    }
  }
};
oe.J = 0;
oe.I = function(a) {
  return oe.C(G(a));
};
var Mf = function Mf() {
  return Mf.C(0 < arguments.length ? new I(Array.prototype.slice.call(arguments, 0), 0) : null);
};
Mf.C = function(a) {
  a = a instanceof I && 0 === a.i ? a.o : Na(a);
  for (var b = [], c = 0;;) {
    if (c < a.length) {
      var d = a[c], e = a[c + 1];
      -1 === $e(b, d) && (b.push(d), b.push(e));
      c += 2;
    } else {
      break;
    }
  }
  return new n(null, b.length / 2, b, null);
};
Mf.J = 0;
Mf.I = function(a) {
  return Mf.C(G(a));
};
function Nf(a, b) {
  this.ia = a;
  this.ka = b;
  this.B = 32374988;
  this.H = 0;
}
g = Nf.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.T = function() {
  return this.ka;
};
g.la = function() {
  var a = this.ia, a = (a ? a.B & 128 || a.vb || (a.B ? 0 : u(fb, a)) : u(fb, a)) ? this.ia.la(null) : M(this.ia);
  return null == a ? null : new Nf(a, this.ka);
};
g.R = function() {
  return yc(this);
};
g.G = function(a, b) {
  return Nc(this, b);
};
g.da = function() {
  return dd(K, this.ka);
};
g.ea = function(a, b) {
  return Ad(b, this);
};
g.fa = function(a, b, c) {
  return Bd(b, c, this);
};
g.ga = function() {
  return this.ia.ga(null).Lb();
};
g.ma = function() {
  var a = this.ia, a = (a ? a.B & 128 || a.vb || (a.B ? 0 : u(fb, a)) : u(fb, a)) ? this.ia.la(null) : M(this.ia);
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
Nf.prototype[Ia] = function() {
  return vc(this);
};
function cf(a) {
  return (a = G(a)) ? new Nf(a, null) : null;
}
function jf(a) {
  return nb(a);
}
function Of(a, b) {
  this.ia = a;
  this.ka = b;
  this.B = 32374988;
  this.H = 0;
}
g = Of.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.T = function() {
  return this.ka;
};
g.la = function() {
  var a = this.ia, a = (a ? a.B & 128 || a.vb || (a.B ? 0 : u(fb, a)) : u(fb, a)) ? this.ia.la(null) : M(this.ia);
  return null == a ? null : new Of(a, this.ka);
};
g.R = function() {
  return yc(this);
};
g.G = function(a, b) {
  return Nc(this, b);
};
g.da = function() {
  return dd(K, this.ka);
};
g.ea = function(a, b) {
  return Ad(b, this);
};
g.fa = function(a, b, c) {
  return Bd(b, c, this);
};
g.ga = function() {
  return this.ia.ga(null).Mb();
};
g.ma = function() {
  var a = this.ia, a = (a ? a.B & 128 || a.vb || (a.B ? 0 : u(fb, a)) : u(fb, a)) ? this.ia.la(null) : M(this.ia);
  return null != a ? new Of(a, this.ka) : K;
};
g.ba = function() {
  return this;
};
g.X = function(a, b) {
  return new Of(this.ia, b);
};
g.Z = function(a, b) {
  return Q(b, this);
};
Of.prototype[Ia] = function() {
  return vc(this);
};
function df(a) {
  return (a = G(a)) ? new Of(a, null) : null;
}
function kf(a) {
  return ob(a);
}
var Pf = function Pf() {
  return Pf.C(0 < arguments.length ? new I(Array.prototype.slice.call(arguments, 0), 0) : null);
};
Pf.C = function(a) {
  return r(he(a)) ? Cd(function(a, c) {
    return Qc.l(r(a) ? a : ff, c);
  }, a) : null;
};
Pf.J = 0;
Pf.I = function(a) {
  return Pf.C(G(a));
};
function Qf(a, b, c) {
  this.meta = a;
  this.Za = b;
  this.F = c;
  this.B = 15077647;
  this.H = 8196;
}
g = Qf.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.G(null, a);
};
g.keys = function() {
  return vc(G(this));
};
g.entries = function() {
  var a = G(this);
  return new Ze(G(a));
};
g.values = function() {
  return vc(G(this));
};
g.has = function(a) {
  return rd(this, a);
};
g.forEach = function(a) {
  for (var b = G(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.S(null, e), h = T(f, 0), f = T(f, 1);
      a.l ? a.l(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = G(b)) {
        kd(b) ? (c = Wb(b), b = Xb(b), h = c, d = S(c), c = h) : (c = J(b), h = T(c, 0), c = f = T(c, 1), a.l ? a.l(c, h) : a.call(null, c, h), b = M(b), c = null, d = 0), e = 0;
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
  return hb(this.Za, b) ? b : c;
};
g.T = function() {
  return this.meta;
};
g.$ = function() {
  return Xa(this.Za);
};
g.R = function() {
  var a = this.F;
  return null != a ? a : this.F = a = Bc(this);
};
g.G = function(a, b) {
  return hd(b) && S(this) === S(b) && ge(function(a) {
    return function(b) {
      return rd(a, b);
    };
  }(this), b);
};
g.Xa = function() {
  return new Rf(Ob(this.Za));
};
g.da = function() {
  return dd(Sf, this.meta);
};
g.ba = function() {
  return cf(this.Za);
};
g.X = function(a, b) {
  return new Qf(b, this.Za, this.F);
};
g.Z = function(a, b) {
  return new Qf(this.meta, Yc.w(this.Za, b, null), null);
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
  return this.call.apply(this, [this].concat(Ja(b)));
};
g.h = function(a) {
  return this.W(null, a);
};
g.l = function(a, b) {
  return this.O(null, a, b);
};
var Sf = new Qf(null, ff, Cc);
Qf.prototype[Ia] = function() {
  return vc(this);
};
function Rf(a) {
  this.Na = a;
  this.H = 136;
  this.B = 259;
}
g = Rf.prototype;
g.kb = function(a, b) {
  this.Na = Rb(this.Na, b, null);
  return this;
};
g.lb = function() {
  return new Qf(null, Qb(this.Na), null);
};
g.$ = function() {
  return S(this.Na);
};
g.W = function(a, b) {
  return z.w(this, b, null);
};
g.O = function(a, b, c) {
  return z.w(this.Na, b, nd) === nd ? c : b;
};
g.call = function() {
  function a(a, b, c) {
    return z.w(this.Na, b, nd) === nd ? c : b;
  }
  function b(a, b) {
    return z.w(this.Na, b, nd) === nd ? null : b;
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
  return this.call.apply(this, [this].concat(Ja(b)));
};
g.h = function(a) {
  return z.w(this.Na, a, nd) === nd ? null : a;
};
g.l = function(a, b) {
  return z.w(this.Na, a, nd) === nd ? b : a;
};
function Pd(a) {
  if (a && (a.H & 4096 || a.yc)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([x("Doesn't support name: "), x(a)].join(""));
}
function Tf(a) {
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
function Uf(a, b, c, d, e, f, h) {
  var k = ta;
  ta = null == ta ? null : ta - 1;
  try {
    if (null != ta && 0 > ta) {
      return A(a, "#");
    }
    A(a, c);
    if (0 === Ca.h(f)) {
      G(h) && A(a, function() {
        var a = Vf.h(f);
        return r(a) ? a : "...";
      }());
    } else {
      if (G(h)) {
        var m = J(h);
        b.w ? b.w(m, a, f) : b.call(null, m, a, f);
      }
      for (var p = M(h), q = Ca.h(f) - 1;;) {
        if (!p || null != q && 0 === q) {
          G(p) && 0 === q && (A(a, d), A(a, function() {
            var a = Vf.h(f);
            return r(a) ? a : "...";
          }()));
          break;
        } else {
          A(a, d);
          var t = J(p);
          c = a;
          h = f;
          b.w ? b.w(t, c, h) : b.call(null, t, c, h);
          var v = M(p);
          c = q - 1;
          p = v;
          q = c;
        }
      }
    }
    return A(a, e);
  } finally {
    ta = k;
  }
}
function Wf(a, b) {
  for (var c = G(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.S(null, f);
      A(a, h);
      f += 1;
    } else {
      if (c = G(c)) {
        d = c, kd(d) ? (c = Wb(d), e = Xb(d), d = c, h = S(c), c = e, e = h) : (h = J(d), A(a, h), c = M(d), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
}
var Xf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Yf(a) {
  return [x('"'), x(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Xf[a];
  })), x('"')].join("");
}
function Zf(a, b, c) {
  if (null == a) {
    return A(b, "nil");
  }
  if (void 0 === a) {
    return A(b, "#\x3cundefined\x3e");
  }
  if (r(function() {
    var b = Wc(c, za);
    return r(b) ? (b = a ? a.B & 131072 || a.xc ? !0 : a.B ? !1 : u(vb, a) : u(vb, a)) ? ed(a) : b : b;
  }())) {
    A(b, "^");
    var d = ed(a);
    Z.w ? Z.w(d, b, c) : Z.call(null, d, b, c);
    A(b, " ");
  }
  return null == a ? A(b, "nil") : a.nb ? a.Ab(a, b, c) : a && (a.B & 2147483648 || a.aa) ? a.U(null, b, c) : Ga(a) === Boolean || "number" === typeof a ? A(b, "" + x(a)) : null != a && a.constructor === Object ? (A(b, "#js "), d = W.l(function(b) {
    return new X(null, 2, 5, Y, [Od.h(b), a[b]], null);
  }, ld(a)), $f.K ? $f.K(d, Z, b, c) : $f.call(null, d, Z, b, c)) : Da(a) ? Uf(b, Z, "#js [", " ", "]", c, a) : r("string" == typeof a) ? r(ya.h(c)) ? A(b, Yf(a)) : A(b, a) : ad(a) ? Wf(b, R(["#\x3c", "" + x(a), "\x3e"], 0)) : a instanceof Date ? (d = function(a, b) {
    for (var c = "" + x(a);;) {
      if (S(c) < b) {
        c = [x("0"), x(c)].join("");
      } else {
        return c;
      }
    }
  }, Wf(b, R(['#inst "', "" + x(a.getUTCFullYear()), "-", d(a.getUTCMonth() + 1, 2), "-", d(a.getUTCDate(), 2), "T", d(a.getUTCHours(), 2), ":", d(a.getUTCMinutes(), 2), ":", d(a.getUTCSeconds(), 2), ".", d(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : r(a instanceof RegExp) ? Wf(b, R(['#"', a.source, '"'], 0)) : (a ? a.B & 2147483648 || a.aa || (a.B ? 0 : u(Ib, a)) : u(Ib, a)) ? Jb(a, b, c) : Wf(b, R(["#\x3c", "" + x(a), "\x3e"], 0));
}
function Z(a, b, c) {
  var d = ag.h(c);
  return r(d) ? (c = Yc.w(c, bg, Zf), d.w ? d.w(a, b, c) : d.call(null, a, b, c)) : Zf(a, b, c);
}
function cg(a, b) {
  var c;
  if (fd(a)) {
    c = "";
  } else {
    c = x;
    var d = new ka;
    a: {
      var e = new cc(d);
      Z(J(a), e, b);
      for (var f = G(M(a)), h = null, k = 0, m = 0;;) {
        if (m < k) {
          var p = h.S(null, m);
          A(e, " ");
          Z(p, e, b);
          m += 1;
        } else {
          if (f = G(f)) {
            h = f, kd(h) ? (f = Wb(h), k = Xb(h), h = f, p = S(f), f = k, k = p) : (p = J(h), A(e, " "), Z(p, e, b), f = M(h), h = null, k = 0), m = 0;
          } else {
            break a;
          }
        }
      }
    }
    c = "" + c(d);
  }
  return c;
}
function qe() {
  return dg(0 < arguments.length ? new I(Array.prototype.slice.call(arguments, 0), 0) : null);
}
function dg(a) {
  return cg(a, va());
}
function eg(a) {
  var b = Yc.w(va(), ya, !1);
  a = cg(a, b);
  pa.h ? pa.h(a) : pa.call(null, a);
  r(qa) ? (a = va(), pa.h ? pa.h("\n") : pa.call(null, "\n"), a = (Wc(a, xa), null)) : a = null;
  return a;
}
function $f(a, b, c, d) {
  return Uf(c, function(a, c, d) {
    var k = nb(a);
    b.w ? b.w(k, c, d) : b.call(null, k, c, d);
    A(c, " ");
    a = ob(a);
    return b.w ? b.w(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, G(a));
}
I.prototype.aa = !0;
I.prototype.U = function(a, b, c) {
  return Uf(b, Z, "(", " ", ")", c, this);
};
Qd.prototype.aa = !0;
Qd.prototype.U = function(a, b, c) {
  return Uf(b, Z, "(", " ", ")", c, this);
};
Ef.prototype.aa = !0;
Ef.prototype.U = function(a, b, c) {
  return Uf(b, Z, "(", " ", ")", c, this);
};
af.prototype.aa = !0;
af.prototype.U = function(a, b, c) {
  return Uf(b, Z, "(", " ", ")", c, this);
};
Me.prototype.aa = !0;
Me.prototype.U = function(a, b, c) {
  return Uf(b, Z, "(", " ", ")", c, this);
};
Ld.prototype.aa = !0;
Ld.prototype.U = function(a, b, c) {
  return Uf(b, Z, "(", " ", ")", c, this);
};
If.prototype.aa = !0;
If.prototype.U = function(a, b, c) {
  return $f(this, Z, b, c);
};
Gf.prototype.aa = !0;
Gf.prototype.U = function(a, b, c) {
  return Uf(b, Z, "(", " ", ")", c, this);
};
Qe.prototype.aa = !0;
Qe.prototype.U = function(a, b, c) {
  return Uf(b, Z, "[", " ", "]", c, this);
};
Qf.prototype.aa = !0;
Qf.prototype.U = function(a, b, c) {
  return Uf(b, Z, "#{", " ", "}", c, this);
};
Vd.prototype.aa = !0;
Vd.prototype.U = function(a, b, c) {
  return Uf(b, Z, "(", " ", ")", c, this);
};
le.prototype.aa = !0;
le.prototype.U = function(a, b, c) {
  A(b, "#\x3cAtom: ");
  Z(this.state, b, c);
  return A(b, "\x3e");
};
Of.prototype.aa = !0;
Of.prototype.U = function(a, b, c) {
  return Uf(b, Z, "(", " ", ")", c, this);
};
X.prototype.aa = !0;
X.prototype.U = function(a, b, c) {
  return Uf(b, Z, "[", " ", "]", c, this);
};
Jd.prototype.aa = !0;
Jd.prototype.U = function(a, b) {
  return A(b, "()");
};
n.prototype.aa = !0;
n.prototype.U = function(a, b, c) {
  return $f(this, Z, b, c);
};
Nf.prototype.aa = !0;
Nf.prototype.U = function(a, b, c) {
  return Uf(b, Z, "(", " ", ")", c, this);
};
Id.prototype.aa = !0;
Id.prototype.U = function(a, b, c) {
  return Uf(b, Z, "(", " ", ")", c, this);
};
D.prototype.eb = !0;
D.prototype.Va = function(a, b) {
  if (b instanceof D) {
    return oc(this, b);
  }
  throw Error([x("Cannot compare "), x(this), x(" to "), x(b)].join(""));
};
U.prototype.eb = !0;
U.prototype.Va = function(a, b) {
  if (b instanceof U) {
    return Md(this, b);
  }
  throw Error([x("Cannot compare "), x(this), x(" to "), x(b)].join(""));
};
Qe.prototype.eb = !0;
Qe.prototype.Va = function(a, b) {
  if (jd(b)) {
    return ud(this, b);
  }
  throw Error([x("Cannot compare "), x(this), x(" to "), x(b)].join(""));
};
X.prototype.eb = !0;
X.prototype.Va = function(a, b) {
  if (jd(b)) {
    return ud(this, b);
  }
  throw Error([x("Cannot compare "), x(this), x(" to "), x(b)].join(""));
};
var rc = null, fg = {}, gg = function gg(b) {
  if (b ? b.sc : b) {
    return b.sc(b);
  }
  var c;
  c = gg[l(null == b ? null : b)];
  if (!c && (c = gg._, !c)) {
    throw w("IEncodeJS.-clj-\x3ejs", b);
  }
  return c.call(null, b);
};
function hg(a) {
  return (a ? r(r(null) ? null : a.rc) || (a.Ub ? 0 : u(fg, a)) : u(fg, a)) ? gg(a) : "string" === typeof a || "number" === typeof a || a instanceof U || a instanceof D ? ig.h ? ig.h(a) : ig.call(null, a) : dg(R([a], 0));
}
var ig = function ig(b) {
  if (null == b) {
    return null;
  }
  if (b ? r(r(null) ? null : b.rc) || (b.Ub ? 0 : u(fg, b)) : u(fg, b)) {
    return gg(b);
  }
  if (b instanceof U) {
    return Pd(b);
  }
  if (b instanceof D) {
    return "" + x(b);
  }
  if (id(b)) {
    var c = {};
    b = G(b);
    for (var d = null, e = 0, f = 0;;) {
      if (f < e) {
        var h = d.S(null, f), k = T(h, 0), h = T(h, 1);
        c[hg(k)] = ig(h);
        f += 1;
      } else {
        if (b = G(b)) {
          kd(b) ? (e = Wb(b), b = Xb(b), d = e, e = S(e)) : (e = J(b), d = T(e, 0), e = T(e, 1), c[hg(d)] = ig(e), b = M(b), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (gd(b)) {
    c = [];
    b = G(W.l(ig, b));
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        k = d.S(null, f), c.push(k), f += 1;
      } else {
        if (b = G(b)) {
          d = b, kd(d) ? (b = Wb(d), f = Xb(d), d = b, e = S(b), b = f) : (b = J(d), c.push(b), b = M(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return b;
}, jg = {}, kg = function kg(b, c) {
  if (b ? b.qc : b) {
    return b.qc(b, c);
  }
  var d;
  d = kg[l(null == b ? null : b)];
  if (!d && (d = kg._, !d)) {
    throw w("IEncodeClojure.-js-\x3eclj", b);
  }
  return d.call(null, b, c);
};
function lg() {
  var a = O.h ? O.h(mg) : O.call(null, mg), b = R([ng, !0], 0), c = od(b) ? ce(oe, b) : b, d = Wc(c, ng);
  return function(a, c, d, k) {
    return function p(q) {
      return (q ? r(r(null) ? null : q.Kc) || (q.Ub ? 0 : u(jg, q)) : u(jg, q)) ? kg(q, ce(Mf, b)) : od(q) ? Tf(W.l(p, q)) : gd(q) ? re(null == q ? null : Ya(q), W.l(p, q)) : Da(q) ? Ke(W.l(p, q)) : Ga(q) === Object ? re(ff, function() {
        return function(a, b, c, d) {
          return function H(e) {
            return new Qd(null, function(a, b, c, d) {
              return function() {
                for (;;) {
                  var a = G(e);
                  if (a) {
                    if (kd(a)) {
                      var b = Wb(a), c = S(b), f = Ud(c);
                      return function() {
                        for (var a = 0;;) {
                          if (a < c) {
                            var e = y.l(b, a), h = f, k = Y, t;
                            t = e;
                            t = d.h ? d.h(t) : d.call(null, t);
                            e = new X(null, 2, 5, k, [t, p(q[e])], null);
                            h.add(e);
                            a += 1;
                          } else {
                            return !0;
                          }
                        }
                      }() ? Wd(f.chunk(), H(Xb(a))) : Wd(f.chunk(), null);
                    }
                    var h = J(a);
                    return Q(new X(null, 2, 5, Y, [function() {
                      var a = h;
                      return d.h ? d.h(a) : d.call(null, a);
                    }(), p(q[h])], null), H(tc(a)));
                  }
                  return null;
                }
              };
            }(a, b, c, d), null, null);
          };
        }(a, c, d, k)(ld(q));
      }()) : q;
    };
  }(b, c, d, r(d) ? Od : x)(a);
}
var og = {};
var pg = new U(null, "span.primitive-number", "span.primitive-number", -665034496), qg = new U(null, "div.center", "div.center", 1338956224), rg = new U(null, "on-set", "on-set", -140953470), sg = new U(null, "div.hydration-error", "div.hydration-error", -1182518173), tg = new U(null, "div.hydration-display-records", "div.hydration-display-records", -643544925), ug = new U(null, "span.primitive-string", "span.primitive-string", 694485187), vg = new U(null, "div.alert.alert-danger", "div.alert.alert-danger", 
-890058301), wg = new U(null, "span.object-view-entry-value", "span.object-view-entry-value", 1392477795), xg = new U(null, "div.array-view.expander-container", "div.array-view.expander-container", -801965437), yg = new U(null, "div.examples", "div.examples", -1009767485), za = new U(null, "meta", "meta", 1499536964), zg = new U(null, "span.expander", "span.expander", -563604764), Ba = new U(null, "dup", "dup", 556298533), Ag = new U(null, "div.hydration-display", "div.hydration-display", 882572613), 
Bg = new U(null, "pre", "pre", 2118456869), Cg = new U(null, "key", "key", -1516042587), Dg = new U(null, "li.pull-right.knex-version", "li.pull-right.knex-version", -1328888954), Eg = new U(null, "ul.nav.nav-tabs", "ul.nav.nav-tabs", 1865557319), Fg = new U(null, "derefed", "derefed", 590684583), Gg = new U(null, "div.hydration-display-title", "div.hydration-display-title", 1975490183), Hg = new U(null, "displayName", "displayName", -809144601), pe = new U(null, "validator", "validator", -1966190681), 
Ig = new U(null, "cljsRender", "cljsRender", 247449928), Jg = new U(null, "finally-block", "finally-block", 832982472), Kg = new U(null, "bindings", "bindings", 1271397192), Mg = new U(null, "span.sql-view-header", "span.sql-view-header", -1834974999), Ng = new U(null, "li", "li", 723558921), Og = new U(null, "value", "value", 305978217), Pg = new U(null, "span.example-hydration", "span.example-hydration", -317688502), Qg = new U(null, "div.records-list", "div.records-list", -255231158), Rg = new U(null, 
"header.db-schema", "header.db-schema", 732638122), Sg = new U(null, "a.expander", "a.expander", 1322821771), Tg = new U(null, "width", "width", -384071477), Ug = new U(null, "div.sql-view", "div.sql-view", -1627977429), Vg = new U(null, "recur", "recur", -437573268), Wg = new U(null, "catch-block", "catch-block", 1175212748), Xg = new U(null, "src", "src", -1651076051), Yg = new U(null, "div.sql-view-bindings", "div.sql-view-bindings", 1235997037), bg = new U(null, "fallback-impl", "fallback-impl", 
-1501286995), xa = new U(null, "flush-on-newline", "flush-on-newline", -151457939), Zg = new U(null, "componentWillUnmount", "componentWillUnmount", 1573788814), $g = new U(null, "div.hydration-input", "div.hydration-input", 1118611150), ah = new U(null, "charset", "charset", -1063822193), bh = new U(null, "on-click", "on-click", 1632826543), ch = new U(null, "shouldComponentUpdate", "shouldComponentUpdate", 1795750960), dh = new U(null, "style", "style", -496642736), eh = new U(null, "textarea", 
"textarea", -650375824), fh = new U(null, "div", "div", 1057191632), ya = new U(null, "readably", "readably", 1129599760), Vf = new U(null, "more-marker", "more-marker", -14717935), gh = new U(null, "for", "for", -1323786319), hh = new U(null, "render", "render", -1408033454), ih = new U(null, "sql", "sql", 1251448786), jh = new U(null, "div.examples-container", "div.examples-container", -594635501), kh = new U(null, "div.half", "div.half", 1332116275), lh = new U(null, "div.object-view-entry", "div.object-view-entry", 
1708248308), Ca = new U(null, "print-length", "print-length", 1931866356), mh = new U(null, "class", "class", -2030961996), nh = new U(null, "span.object-view-entry-key", "span.object-view-entry-key", -233653292), oh = new U(null, "catch-exception", "catch-exception", -1997306795), ph = new U(null, "padding", "padding", 1660304693), qh = new U(null, "auto-run", "auto-run", 1958400437), rh = new U(null, "div.intro", "div.intro", 1937098677), sh = new U(null, "prev", "prev", -1597069226), th = new U(null, 
"code", "code", 1586293142), uh = new U(null, "continue-block", "continue-block", -1852047850), vh = new U(null, "div.hydration-display-sql", "div.hydration-display-sql", 2123688630), wh = new U(null, "div.instructions", "div.instructions", -526747560), xh = new U(null, "on-dispose", "on-dispose", 2105306360), yh = new U(null, "componentFunction", "componentFunction", 825866104), zh = new U(null, "div.example", "div.example", 265005017), Ah = new U(null, "div.sql-view-sql", "div.sql-view-sql", 496262137), 
Bh = new U(null, "component-function", "component-function", 654728922), Ch = new U(null, "on-change", "on-change", -732046149), Dh = new U(null, "h3", "h3", 2067611163), ag = new U(null, "alt-impl", "alt-impl", 670969595), ng = new U(null, "keywordize-keys", "keywordize-keys", 1310784252), Eh = new U(null, "p", "p", 151049309), Fh = new U(null, "div.object-view.expander-container", "div.object-view.expander-container", 1498954941), Gh = new U(null, "href", "href", -793805698), Hh = new U(null, "img", 
"img", 1442687358), Ih = new U(null, "a", "a", -2123407586), Jh = new U(null, "height", "height", 1025178622), Kh = new U(null, "span", "span", 1394872991), Lh = new U(null, "div.indent", "div.indent", -1749025025), Mh = new U(null, "margin", "margin", -995903681);
var Nh, Oh = "undefined" !== typeof window && null != window.document;
function Ph(a, b) {
  return a.cljsReactClass = b;
}
function Qh(a) {
  return function(b) {
    return function(c) {
      var d = Wc(O.h ? O.h(b) : O.call(null, b), c);
      if (null != d) {
        return d;
      }
      d = a.h ? a.h(c) : a.call(null, c);
      qc.K(b, Yc, c, d);
      return d;
    };
  }(ne ? ne(ff) : me.call(null, ff));
}
var Rh = new Qf(null, new n(null, 2, ["aria", null, "data", null], null), null);
function Sh(a) {
  return 2 > S(a) ? a.toUpperCase() : [x(a.substring(0, 1).toUpperCase()), x(a.substring(1))].join("");
}
function Th(a) {
  if ("string" === typeof a) {
    return a;
  }
  a = Pd(a);
  var b, c = /-/, c = N.l("" + x(c), "/(?:)/") ? Qc.l(Ke(Q("", W.l(x, G(a)))), "") : Ke(("" + x(a)).split(c));
  if (N.l(0, 0)) {
    a: {
      for (;;) {
        if (N.l("", null == c ? null : qb(c))) {
          c = null == c ? null : rb(c);
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
  return r(Rh.h ? Rh.h(c) : Rh.call(null, c)) ? a : de(x, c, W.l(Sh, d));
}
function Uh(a, b, c) {
  this.f = a;
  this.args = b;
  this.p = c;
  this.B = 6291457;
  this.H = 0;
}
g = Uh.prototype;
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
    r(a.p) || (a.p = de(ke, a.f, a.args));
    return ce(a.p, b);
  }
  a.J = 1;
  a.I = function(a) {
    var d = J(a);
    a = tc(a);
    return b(d, a);
  };
  a.C = b;
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ja(b)));
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
    r(self__.p) || (self__.p = de(ke, self__.f, self__.args));
    return ce(self__.p, a);
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
  return mc(new X(null, 2, 5, Y, [this.f, this.args], null));
};
function Vh(a) {
  var b = qd(a);
  return b ? b : a ? a.H & 256 || a.Nc ? !0 : a.H ? !1 : u(og, a) : u(og, a);
}
function Wh(a) {
  return null == a ? null : 9 === a.nodeType ? a.documentElement : a.firstChild;
}
function Xh(a) {
  a = Wh(a);
  return null == a ? null : a.getAttribute("data-reactid");
}
var Yh = ne ? ne(ff) : me.call(null, ff);
function Zh(a) {
  var b = document.getElementById("app");
  return React.renderComponent(a.D ? a.D() : a.call(null), b, function() {
    var c = Xh(b);
    null != c && qc.K(Yh, Yc, c, function() {
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
            c = Wh(b);
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
var $h = {};
function ai(a, b) {
  return Nd(a, b) || (a instanceof D || Ga(a) === Uh) && N.l(a, b);
}
var bi = function bi(b, c) {
  var d = b === c;
  if (d) {
    return d;
  }
  var e = id(b);
  if (e) {
    var f = id(c);
    if (f) {
      var h = S(b) === S(c);
      return h ? Dd(function() {
        return function(b, d, e) {
          var f = Xc(c, d, $h);
          return r(function() {
            var b = e === f;
            if (b) {
              return b;
            }
            b = ai(e, f);
            return r(b) ? b : (b = Nd(d, dh)) ? bi(e, f) : b;
          }()) ? b : new Dc(!1);
        };
      }(h, f, e, d), !0, b) : h;
    }
    return f;
  }
  return e;
};
function ci(a, b) {
  if (!jd(a)) {
    throw Error([x("Assert failed: "), x(dg(R([Kd(new D(null, "vector?", "vector?", -61367869, null), new D(null, "v1", "v1", -2141311508, null))], 0)))].join(""));
  }
  if (!jd(b)) {
    throw Error([x("Assert failed: "), x(dg(R([Kd(new D(null, "vector?", "vector?", -61367869, null), new D(null, "v2", "v2", 1875554983, null))], 0)))].join(""));
  }
  var c = a === b;
  if (c) {
    return c;
  }
  var d = S(a) === S(b);
  return d ? Dd(function() {
    return function(a, c, d) {
      var k = Vc(b, c);
      return r(function() {
        var a = d === k;
        if (a) {
          return a;
        }
        a = ai(d, k);
        return r(a) ? a : (a = id(d)) ? bi(d, k) : a;
      }()) ? a : new Dc(!1);
    };
  }(d, c), !0, a) : d;
}
;var di, ei = ne ? ne(0) : me.call(null, 0);
function fi(a, b) {
  b.Bb = null;
  var c = di;
  di = b;
  try {
    return a.D ? a.D() : a.call(null);
  } finally {
    di = c;
  }
}
function gi(a) {
  var b = a.Bb;
  a.Bb = null;
  return b;
}
function hi(a) {
  var b = di;
  if (null != b) {
    var c = b.Bb;
    b.Bb = Qc.l(null == c ? Sf : c, a);
  }
}
function ii(a, b, c, d) {
  this.state = a;
  this.meta = b;
  this.ab = c;
  this.Y = d;
  this.H = 114690;
  this.B = 2153938944;
}
g = ii.prototype;
g.G = function(a, b) {
  return this === b;
};
g.Wa = function() {
  hi(this);
  return this.state;
};
g.Nb = function(a, b) {
  if (null != this.ab && !r(this.ab.h ? this.ab.h(b) : this.ab.call(null, b))) {
    throw Error([x("Assert failed: "), x("Validator rejected reference state"), x("\n"), x(dg(R([Kd(new D(null, "validator", "validator", -325659154, null), new D(null, "new-value", "new-value", -1567397401, null))], 0)))].join(""));
  }
  var c = this.state;
  this.state = b;
  null != this.Y && Kb(this, c, b);
  return b;
};
g.Ob = function(a, b) {
  var c;
  c = this.state;
  c = b.h ? b.h(c) : b.call(null, c);
  return $b(this, c);
};
g.Pb = function(a, b, c) {
  a = this.state;
  b = b.l ? b.l(a, c) : b.call(null, a, c);
  return $b(this, b);
};
g.Qb = function(a, b, c, d) {
  a = this.state;
  b = b.w ? b.w(a, c, d) : b.call(null, a, c, d);
  return $b(this, b);
};
g.Rb = function(a, b, c, d, e) {
  return $b(this, ee(b, this.state, c, d, e));
};
g.T = function() {
  return this.meta;
};
g.U = function(a, b, c) {
  A(b, "#\x3cAtom: ");
  Z(this.state, b, c);
  return A(b, "\x3e");
};
g.xb = function(a, b, c) {
  return Dd(function(a) {
    return function(e, f, h) {
      h.K ? h.K(f, a, b, c) : h.call(null, f, a, b, c);
      return null;
    };
  }(this), null, this.Y);
};
g.wb = function(a, b, c) {
  return this.Y = Yc.w(this.Y, b, c);
};
g.yb = function(a, b) {
  return this.Y = $c.l(this.Y, b);
};
g.R = function() {
  return ca(this);
};
var ji = function ji() {
  switch(arguments.length) {
    case 1:
      return ji.h(arguments[0]);
    default:
      return ji.C(arguments[0], new I(Array.prototype.slice.call(arguments, 1), 0));
  }
};
ji.h = function(a) {
  return new ii(a, null, null, null);
};
ji.C = function(a, b) {
  var c = od(b) ? ce(oe, b) : b, d = Wc(c, za), c = Wc(c, pe);
  return new ii(a, d, c, null);
};
ji.I = function(a) {
  var b = J(a);
  a = M(a);
  return ji.C(b, a);
};
ji.J = 1;
var ki = function ki(b) {
  if (b ? b.lc : b) {
    return b.lc();
  }
  var c;
  c = ki[l(null == b ? null : b)];
  if (!c && (c = ki._, !c)) {
    throw w("IDisposable.dispose!", b);
  }
  return c.call(null, b);
}, li = function li(b) {
  if (b ? b.mc : b) {
    return b.mc();
  }
  var c;
  c = li[l(null == b ? null : b)];
  if (!c && (c = li._, !c)) {
    throw w("IRunnable.run", b);
  }
  return c.call(null, b);
}, mi = function mi(b, c) {
  if (b ? b.Zb : b) {
    return b.Zb(0, c);
  }
  var d;
  d = mi[l(null == b ? null : b)];
  if (!d && (d = mi._, !d)) {
    throw w("IComputedImpl.-update-watching", b);
  }
  return d.call(null, b, c);
}, ni = function ni(b, c, d, e) {
  if (b ? b.kc : b) {
    return b.kc(0, 0, d, e);
  }
  var f;
  f = ni[l(null == b ? null : b)];
  if (!f && (f = ni._, !f)) {
    throw w("IComputedImpl.-handle-change", b);
  }
  return f.call(null, b, c, d, e);
};
function oi(a, b, c, d) {
  return Dd(function(b, f, h) {
    h.K ? h.K(f, a, c, d) : h.call(null, f, a, c, d);
    return null;
  }, null, b);
}
function pi(a, b, c, d, e, f, h, k, m) {
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
g = pi.prototype;
g.kc = function(a, b, c, d) {
  var e = this;
  return r(function() {
    var a = e.bb;
    return r(a) ? Fa(e.ob) && c !== d : a;
  }()) ? (e.ob = !0, function() {
    var a = e.sb;
    return r(a) ? a : li;
  }().call(null, this)) : null;
};
g.Zb = function(a, b) {
  for (var c = G(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.S(null, f);
      rd(this.Ua, h) || Lb(h, this, ni);
      f += 1;
    } else {
      if (c = G(c)) {
        d = c, kd(d) ? (c = Wb(d), f = Xb(d), d = c, e = S(c), c = f) : (c = J(d), rd(this.Ua, c) || Lb(c, this, ni), c = M(d), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  c = G(this.Ua);
  d = null;
  for (f = e = 0;;) {
    if (f < e) {
      h = d.S(null, f), rd(b, h) || Mb(h, this), f += 1;
    } else {
      if (c = G(c)) {
        d = c, kd(d) ? (c = Wb(d), f = Xb(d), d = c, e = S(c), c = f) : (c = J(d), rd(b, c) || Mb(c, this), c = M(d), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  return this.Ua = b;
};
g.U = function(a, b, c) {
  A(b, [x("#\x3cReaction "), x(mc(this)), x(": ")].join(""));
  Z(this.state, b, c);
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
      Mb(e, this);
      d += 1;
    } else {
      if (a = G(a)) {
        b = a, kd(b) ? (a = Wb(b), d = Xb(b), b = a, c = S(a), a = d) : (a = J(b), Mb(a, this), a = M(b), b = null, c = 0), d = 0;
      } else {
        break;
      }
    }
  }
  this.Ua = Sf;
  this.state = null;
  this.ob = !0;
  r(this.bb) && (r(!1) && qc.l(ei, Fd), this.bb = !1);
  return r(this.Eb) ? this.Eb.D ? this.Eb.D() : this.Eb.call(null) : null;
};
g.Nb = function(a, b) {
  var c = this.state;
  this.state = b;
  Kb(this, c, b);
  return b;
};
g.Ob = function(a, b) {
  var c;
  c = this.state;
  c = b.h ? b.h(c) : b.call(null, c);
  return $b(this, c);
};
g.Pb = function(a, b, c) {
  a = this.state;
  b = b.l ? b.l(a, c) : b.call(null, a, c);
  return $b(this, b);
};
g.Qb = function(a, b, c, d) {
  a = this.state;
  b = b.w ? b.w(a, c, d) : b.call(null, a, c, d);
  return $b(this, b);
};
g.Rb = function(a, b, c, d, e) {
  return $b(this, ee(b, this.state, c, d, e));
};
g.mc = function() {
  var a = this.state, b = fi(this.f, this), c = gi(this);
  !N.l(c, this.Ua) && mi(this, c);
  r(this.bb) || (r(!1) && qc.l(ei, sc), this.bb = !0);
  this.ob = !1;
  this.state = b;
  oi(this, this.Y, a, this.state);
  return b;
};
g.xb = function(a, b, c) {
  r(this.Fb) && (this.Fb.l ? this.Fb.l(b, c) : this.Fb.call(null, b, c));
  return oi(this, this.Y, b, c);
};
g.wb = function(a, b, c) {
  return this.Y = Yc.w(this.Y, b, c);
};
g.yb = function(a, b) {
  this.Y = $c.l(this.Y, b);
  return fd(this.Y) ? ki(this) : null;
};
g.Wa = function() {
  var a = this;
  if (Fa(function() {
    var b = a.sb;
    return r(b) ? b : di;
  }())) {
    var b = new X(null, 2, 5, Y, [a.sb, di], null);
    "undefined" !== typeof console && console.log("" + x([x("dbg "), x("reagent.ratom"), x(":"), x(231), x(": "), x("[auto-run *ratom-context*]"), x(": "), x(dg(R([b], 0)))].join("")));
  }
  if (!r(function() {
    var b = a.sb;
    return r(b) ? b : di;
  }())) {
    throw Error([x("Assert failed: "), x("Reaction derefed outside auto-running context"), x("\n"), x(dg(R([Kd(new D(null, "or", "or", 1876275696, null), new D(null, "auto-run", "auto-run", -696035332, null), new D(null, "*ratom-context*", "*ratom-context*", -1557728360, null))], 0)))].join(""));
  }
  hi(this);
  return r(a.ob) ? li(this) : a.state;
};
function qi(a, b) {
  var c = od(b) ? ce(oe, b) : b, d = Wc(c, qh), e = Wc(c, rg), f = Wc(c, xh), c = Wc(c, Fg), d = N.l(d, !0) ? li : d, h = null != c, e = new pi(a, null, !h, h, null, ff, d, e, f);
  null != c && (r(!1) && qc.l(ei, sc), e.Zb(0, c));
  return e;
}
;function ri(a) {
  return setTimeout(a, 16);
}
var si = Fa(Oh) ? ri : function() {
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
  return r(a) ? a : ri;
}();
function ti(a, b) {
  return a.props.level - b.props.level;
}
function ui() {
  var a = vi;
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
        c.sort(ti);
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
  return si.h ? si.h(a) : si.call(null, a);
}
var vi = new function() {
  this.Yb = [];
  this.$b = !1;
};
function wi(a) {
  a.cljsIsDirty = !0;
  vi.Yb.push(a);
  return ui();
}
function xi(a) {
  a = null == a ? null : a.props;
  return null == a ? null : a.argv;
}
function yi(a, b) {
  if (!r(xi(a))) {
    throw Error([x("Assert failed: "), x(dg(R([Kd(new D(null, "is-reagent-component", "is-reagent-component", -1856228005, null), new D(null, "c", "c", -122660552, null))], 0)))].join(""));
  }
  a.cljsIsDirty = !1;
  var c = a.cljsRatom;
  if (null == c) {
    var d = fi(b, a), e = gi(a);
    null != e && (a.cljsRatom = qi(b, R([qh, function() {
      return function() {
        return wi(a);
      };
    }(d, e, c), Fg, e], 0)));
    return d;
  }
  return li(c);
}
function zi(a) {
  var b = a.cljsRatom;
  null == b || ki(b);
  return a.cljsIsDirty = !1;
}
;function Ai(a) {
  var b = a.cljsState;
  return null != b ? b : a.cljsState = ji.h(null);
}
var Bi = function Bi(b) {
  var c = b.cljsRender;
  if (!r(Vh(c))) {
    throw Error([x("Assert failed: "), x(dg(R([Kd(new D("util", "clj-ifn?", "util/clj-ifn?", 259370460, null), new D(null, "f", "f", 43394975, null))], 0)))].join(""));
  }
  var d = b.props, e = null == b.componentFunction ? c.h ? c.h(b) : c.call(null, b) : function() {
    var b = d.argv;
    switch(S(b)) {
      case 1:
        return c.D ? c.D() : c.call(null);
      case 2:
        return b = Vc(b, 1), c.h ? c.h(b) : c.call(null, b);
      case 3:
        var e = Vc(b, 1), b = Vc(b, 2);
        return c.l ? c.l(e, b) : c.call(null, e, b);
      case 4:
        var e = Vc(b, 1), k = Vc(b, 2), b = Vc(b, 3);
        return c.w ? c.w(e, k, b) : c.call(null, e, k, b);
      case 5:
        var e = Vc(b, 1), k = Vc(b, 2), m = Vc(b, 3), b = Vc(b, 4);
        return c.K ? c.K(e, k, m, b) : c.call(null, e, k, m, b);
      default:
        return ce(c, Ne(b, 1, S(b)));
    }
  }();
  return jd(e) ? b.asComponent(e, d.level) : qd(e) ? (b.cljsRender = e, Bi(b)) : e;
};
function Ci(a, b) {
  var c = a instanceof U ? a.ta : null;
  switch(c) {
    case "getDefaultProps":
      throw Error([x("Assert failed: "), x("getDefaultProps not supported yet"), x("\n"), x(dg(R([!1], 0)))].join(""));;
    case "getInitialState":
      return function() {
        return function() {
          var a = b.h ? b.h(this) : b.call(null, this);
          return qc.w(Ai(this), Pf, a);
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
          var c = Nh;
          if (r(c)) {
            return c;
          }
          c = this.props.argv;
          a = a.argv;
          return null == b ? Fa(ci(c, a)) : b.w ? b.w(this, c, a) : b.call(null, this, c, a);
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
          zi(this);
          return null == b ? null : b.h ? b.h(this) : b.call(null, this);
        };
      }(c);
    default:
      return null;
  }
}
function Di(a) {
  return qd(a) ? function() {
    function b(b) {
      var c = null;
      if (0 < arguments.length) {
        for (var c = 0, f = Array(arguments.length - 0);c < f.length;) {
          f[c] = arguments[c + 0], ++c;
        }
        c = new I(f, 0);
      }
      return de(a, this, c);
    }
    function c(b) {
      return de(a, this, b);
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
var Ei = new Qf(null, new n(null, 3, [Ig, null, hh, null, yh, null], null), null);
function Fi(a) {
  qd(a) && (a.__reactDontBind = !0);
  return a;
}
function Hi(a, b, c) {
  if (r(Ei.h ? Ei.h(a) : Ei.call(null, a))) {
    return Fi(b);
  }
  var d = Ci(a, b);
  if (r(r(d) ? b : d) && !qd(b)) {
    throw Error([x("Assert failed: "), x([x("Expected function in "), x(c), x(a), x(" but got "), x(b)].join("")), x("\n"), x(dg(R([Kd(new D(null, "ifn?", "ifn?", -2106461064, null), new D(null, "f", "f", 43394975, null))], 0)))].join(""));
  }
  return r(d) ? d : Di(b);
}
var Ii = new n(null, 2, [ch, null, Zg, null], null), Ji = Qh(Th);
function Ki(a) {
  return Dd(function(a, c, d) {
    return Yc.w(a, Od.h(Ji.h ? Ji.h(c) : Ji.call(null, c)), d);
  }, ff, a);
}
function Li(a) {
  return Pf.C(R([Ii, a], 0));
}
function Mi(a, b) {
  return Yc.C(a, Ig, b, R([hh, r(Oh) ? function() {
    return yi(this, function(a) {
      return function() {
        return Bi(a);
      };
    }(this));
  } : function() {
    return Bi(this);
  }], 0));
}
function Ni(a) {
  var b = function() {
    var b = yh.h(a);
    return r(b) ? b : hh.h(a);
  }();
  if (!r(Vh(b))) {
    throw Error([x("Assert failed: "), x([x("Render must be a function, not "), x(dg(R([b], 0)))].join("")), x("\n"), x(dg(R([Kd(new D("util", "clj-ifn?", "util/clj-ifn?", 259370460, null), new D(null, "render-fun", "render-fun", -1209513086, null))], 0)))].join(""));
  }
  var c = null, d = function() {
    var c = Hg.h(a);
    if (r(c)) {
      return c;
    }
    c = b.displayName;
    return r(c) ? c : b.name;
  }(), e;
  if (fd(d)) {
    e = x;
    var f;
    null == rc && (rc = ne ? ne(0) : me.call(null, 0));
    f = pc();
    e = "" + e(f);
  } else {
    e = d;
  }
  f = Mi(Yc.w(a, Hg, e), b);
  return Dd(function(a, b, c, d) {
    return function(a, b, c) {
      return Yc.w(a, b, Hi(b, c, d));
    };
  }(b, c, d, e, f), ff, f);
}
function Oi(a) {
  return Dd(function(a, c, d) {
    a[Pd(c)] = d;
    return a;
  }, {}, a);
}
function Pi(a) {
  var b = Qi;
  if (!id(a)) {
    throw Error([x("Assert failed: "), x(dg(R([Kd(new D(null, "map?", "map?", -1780568534, null), new D(null, "body", "body", -408674142, null))], 0)))].join(""));
  }
  var c = Oi(Ni(Li(Ki(a)))), d = c.asComponent = Fi(b);
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
        a = de(Le, d, a);
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
  Ph(c, a);
  Ph(a, a);
  return c;
}
;var Ri = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/, Si = new n(null, 3, [mh, "className", gh, "htmlFor", ah, "charSet"], null);
function Ti(a) {
  return a instanceof U || a instanceof D || "string" === typeof a;
}
function Ui(a) {
  return "string" === typeof a ? a : "number" === typeof a ? a : a instanceof U ? Pd(a) : a instanceof D ? "" + x(a) : gd(a) ? ig(a) : qd(a) ? function() {
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
      return ce(a, b);
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
var Vi = Qh(function(a) {
  var b = Si.h ? Si.h(a) : Si.call(null, a);
  return r(b) ? b : Th(a);
});
Qh(Th);
function Wi(a) {
  return "string" === typeof a ? a : "number" === typeof a ? a : id(a) ? Dd(function(a, c, d) {
    a[Vi.h ? Vi.h(c) : Vi.call(null, c)] = Ui(d);
    return a;
  }, {}, a) : Ui(a);
}
function Xi(a, b) {
  var c = T(b, 0), d = T(b, 1), e = a.id;
  a.id = null != e ? e : c;
  null != d && (c = a.className, a.className = null != c ? [x(d), x(" "), x(c)].join("") : d);
}
function Yi(a, b) {
  if (fd(a) && null == b) {
    return null;
  }
  if (Ga(a) === Object) {
    return a;
  }
  var c = Dd(function(a, b, c) {
    b = Vi.h ? Vi.h(b) : Vi.call(null, b);
    "key" !== b && (a[b] = Wi(c));
    return a;
  }, {}, a);
  null != b && Xi(c, b);
  return c;
}
function Zi(a, b) {
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
      wi(a);
      return b;
    };
  }(b, c, d);
  return b;
}
function $i(a) {
  var b = React.DOM;
  return a === b.input || a === b.textarea;
}
function aj(a) {
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
      return zi(this);
    };
  }(a);
}
function bj(a, b, c) {
  var d = $i(a), e = r(d) ? Zi : null;
  c = {render:function(c, d) {
    return function() {
      var c = this.props, e = c.argv, f = T(e, 1), q = null == f || id(f), t = q ? 2 : 1, c = c.level + 1, e = cj.w ? cj.w(e, t, c) : cj.call(null, e, t, c), f = Yi(q ? f : null, b);
      null != d && (d.l ? d.l(this, f) : d.call(null, this, f));
      e[0] = f;
      return a.apply(null, e);
    };
  }(d, e), shouldComponentUpdate:function() {
    return function(a) {
      var b = Nh;
      return r(b) ? b : Fa(ci(this.props.argv, a.argv));
    };
  }(d, e), displayName:r(c) ? c : "ComponentWrapper"};
  r(d) && aj(c);
  return React.createClass(c);
}
var dj = Qh(function(a) {
  var b, c;
  c = Pd(a);
  if ("string" === typeof c) {
    b = Ri.exec(c), c = N.l(J(b), c) ? 1 === S(b) ? J(b) : Ke(b) : null;
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
    throw Error([x("Assert failed: "), x([x("Unknown tag: '"), x(a), x("'")].join("")), x("\n"), x(dg(R([new D(null, "comp", "comp", -1462482139, null)], 0)))].join(""));
  }
  b = new X(null, 2, 5, Y, [b, r(r(c) ? c : d) ? new X(null, 2, 5, Y, [c, d], null) : null], null);
  c = T(b, 0);
  b = T(b, 1);
  return bj(c, b, "" + x(a));
});
function ej(a) {
  return id(a) ? Wc(a, Cg) : null;
}
function fj(a, b) {
  if (!(0 < S(a))) {
    throw Error([x("Assert failed: "), x("Hiccup form should not be empty"), x("\n"), x(dg(R([Kd(new D(null, "pos?", "pos?", -244377722, null), Kd(new D(null, "count", "count", -514511684, null), new D(null, "v", "v", 1661996586, null)))], 0)))].join(""));
  }
  var c;
  c = Vc(a, 0);
  var d = Ti(c);
  c = r(d) ? d : Vh(c);
  if (!r(c)) {
    throw Error([x("Assert failed: "), x([x("Invalid Hiccup form: "), x(dg(R([a], 0)))].join("")), x("\n"), x(dg(R([Kd(new D(null, "valid-tag?", "valid-tag?", 1243064160, null), Kd(new D(null, "nth", "nth", 1529209554, null), new D(null, "v", "v", 1661996586, null), 0))], 0)))].join(""));
  }
  c = Vc(a, 0);
  r(Ti(c)) ? c = dj.h ? dj.h(c) : dj.call(null, c) : (d = c.cljsReactClass, null != d ? c = d : r(React.isValidClass(c)) ? c = Ph(c, bj(c, null, null)) : (d = ed(c), d = Yc.w(d, Bh, c), d = (gj.h ? gj.h(d) : gj.call(null, d)).cljsReactClass, Ph(c, d), c = d));
  var d = {argv:a, level:b}, e = ej(ed(a)), e = null == e ? ej(T(a, 1)) : e;
  null != e && (d.key = e);
  return c.h ? c.h(d) : c.call(null, d);
}
var hj = {}, Qi = function Qi() {
  switch(arguments.length) {
    case 1:
      return Qi.h(arguments[0]);
    case 2:
      return Qi.l(arguments[0], arguments[1]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
};
Qi.h = function(a) {
  return Qi.l(a, 0);
};
Qi.l = function(a, b) {
  if ("string" === typeof a) {
    return a;
  }
  if (jd(a)) {
    return fj(a, b);
  }
  if (od(a)) {
    if (null != di) {
      return ij.l ? ij.l(a, b) : ij.call(null, a, b);
    }
    var c = fi(function() {
      return ij.l ? ij.l(a, b) : ij.call(null, a, b);
    }, hj);
    r(gi(hj)) && (r(hj.warned) || ("undefined" !== typeof console && console.log("Warning: Reactive deref not supported in seq in ", dg(R([a], 0))), hj.warned = !0));
    return c;
  }
  return a;
};
Qi.J = 2;
function gj(a) {
  return Pi(a);
}
function ij(a, b) {
  for (var c = Na(a), d = b + 1, e = c.length, f = 0;;) {
    if (f < e) {
      c[f] = Qi.l(c[f], d), f += 1;
    } else {
      break;
    }
  }
  return c;
}
function cj(a, b, c) {
  return S(a) === b + 1 ? [null, Qi.l(Vc(a, b), c)] : Dd(function(a, e, f) {
    e >= b && a.push(Qi.l(f, c));
    return a;
  }, [null], a);
}
;function jj() {
  var a = new X(null, 1, 5, Y, [kj], null);
  return Zh(function() {
    var b = ad(a) ? a.D ? a.D() : a.call(null) : a;
    return Qi.h(b);
  });
}
function lj() {
  var a = Nh;
  Nh = !0;
  try {
    for (var b = G(df(O.h ? O.h(Yh) : O.call(null, Yh))), c = null, d = 0, e = 0;;) {
      if (e < d) {
        var f = c.S(null, e);
        f.D ? f.D() : f.call(null);
        e += 1;
      } else {
        var h = G(b);
        if (h) {
          var k = h;
          if (kd(k)) {
            var m = Wb(k), p = Xb(k), k = m, q = S(m), b = p, c = k, d = q
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
    Nh = a;
  }
  return "Updated";
}
var mj = ["reagent", "core", "force_update_all"], nj = ba;
mj[0] in nj || !nj.execScript || nj.execScript("var " + mj[0]);
for (var oj;mj.length && (oj = mj.shift());) {
  mj.length || void 0 === lj ? nj = nj[oj] ? nj[oj] : nj[oj] = {} : nj[oj] = lj;
}
;function pj(a, b) {
  return new X(null, 7, 5, Y, [Sg, new n(null, 1, [bh, function() {
    return qc.l(a, Fa);
  }], null), "(", r(O.h ? O.h(a) : O.call(null, a)) ? "show" : "hide", " ", b, ")"], null);
}
;function qj() {
  return function(a) {
    return function() {
      return new X(null, 4, 5, Y, [Rg, r(O.h ? O.h(a) : O.call(null, a)) ? new n(null, 1, [mh, "collapsed"], null) : null, r(O.h ? O.h(a) : O.call(null, a)) ? null : new X(null, 3, 5, Y, [fh, new X(null, 2, 5, Y, [Eh, "Here's the tiny database we're playing with"], null), new X(null, 2, 5, Y, [Hh, new n(null, 1, [Xg, "img/schema.svg"], null)], null)], null), new X(null, 3, 5, Y, [pj, a, "schema"], null)], null);
    };
  }(ji.h(!1));
}
;function rj() {
  return function(a) {
    return function() {
      return r(O.h ? O.h(a) : O.call(null, a)) ? null : new X(null, 2, 5, Y, [rh, new X(null, 4, 5, Y, [Eh, new X(null, 3, 5, Y, [Ih, new n(null, 1, [Gh, "http://knexjs.org"], null), "Knex"], null), " is a SQL query builder for Node.js. This page lets you play with Knex and see the results. ", new X(null, 3, 5, Y, [Ih, new n(null, 2, [Gh, "#", bh, function(a) {
        return function() {
          return V.l ? V.l(a, !0) : V.call(null, a, !0);
        };
      }(a)], null), "got it!"], null)], null)], null);
    };
  }(ji.h(!1));
}
;var sj, tj = function tj(b, c, d) {
  if (b ? b.Tb : b) {
    return b.Tb(0, c, d);
  }
  var e;
  e = tj[l(null == b ? null : b)];
  if (!e && (e = tj._, !e)) {
    throw w("WritePort.put!", b);
  }
  return e.call(null, b, c, d);
}, uj = function uj(b) {
  if (b ? b.zb : b) {
    return b.zb();
  }
  var c;
  c = uj[l(null == b ? null : b)];
  if (!c && (c = uj._, !c)) {
    throw w("Channel.close!", b);
  }
  return c.call(null, b);
}, vj = function vj(b) {
  if (b ? b.hc : b) {
    return !0;
  }
  var c;
  c = vj[l(null == b ? null : b)];
  if (!c && (c = vj._, !c)) {
    throw w("Handler.active?", b);
  }
  return c.call(null, b);
}, wj = function wj(b) {
  if (b ? b.ic : b) {
    return b.f;
  }
  var c;
  c = wj[l(null == b ? null : b)];
  if (!c && (c = wj._, !c)) {
    throw w("Handler.commit", b);
  }
  return c.call(null, b);
}, xj = function xj(b, c) {
  if (b ? b.gc : b) {
    return b.gc(0, c);
  }
  var d;
  d = xj[l(null == b ? null : b)];
  if (!d && (d = xj._, !d)) {
    throw w("Buffer.add!*", b);
  }
  return d.call(null, b, c);
}, yj = function yj() {
  switch(arguments.length) {
    case 1:
      return yj.h(arguments[0]);
    case 2:
      return yj.l(arguments[0], arguments[1]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
};
yj.h = function(a) {
  return a;
};
yj.l = function(a, b) {
  if (null == b) {
    throw Error([x("Assert failed: "), x(dg(R([Kd(new D(null, "not", "not", 1044554643, null), Kd(new D(null, "nil?", "nil?", 1612038930, null), new D(null, "itm", "itm", -713282527, null)))], 0)))].join(""));
  }
  return xj(a, b);
};
yj.J = 2;
function zj(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function Aj(a, b, c, d) {
  this.head = a;
  this.tail = b;
  this.length = c;
  this.o = d;
}
Aj.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.o[this.tail];
  this.o[this.tail] = null;
  this.tail = (this.tail + 1) % this.o.length;
  --this.length;
  return a;
};
Aj.prototype.unshift = function(a) {
  this.o[this.head] = a;
  this.head = (this.head + 1) % this.o.length;
  this.length += 1;
  return null;
};
function Bj(a, b) {
  a.length + 1 === a.o.length && a.resize();
  a.unshift(b);
}
Aj.prototype.resize = function() {
  var a = Array(2 * this.o.length);
  return this.tail < this.head ? (zj(this.o, this.tail, a, 0, this.length), this.tail = 0, this.head = this.length, this.o = a) : this.tail > this.head ? (zj(this.o, this.tail, a, 0, this.o.length - this.tail), zj(this.o, 0, a, this.o.length - this.tail, this.head), this.tail = 0, this.head = this.length, this.o = a) : this.tail === this.head ? (this.head = this.tail = 0, this.o = a) : null;
};
function Cj(a, b) {
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
function Dj(a) {
  if (!(0 < a)) {
    throw Error([x("Assert failed: "), x("Can't create a ring buffer of size 0"), x("\n"), x(dg(R([Kd(new D(null, "\x3e", "\x3e", 1085014381, null), new D(null, "n", "n", -2092305744, null), 0)], 0)))].join(""));
  }
  return new Aj(0, 0, 0, Array(a));
}
function Ej(a, b) {
  this.L = a;
  this.n = b;
  this.B = 2;
  this.H = 0;
}
function Fj(a) {
  return a.L.length === a.n;
}
Ej.prototype.gc = function(a, b) {
  Bj(this.L, b);
  return this;
};
Ej.prototype.$ = function() {
  return this.L.length;
};
var Gj;
a: {
  var Hj = ba.navigator;
  if (Hj) {
    var Ij = Hj.userAgent;
    if (Ij) {
      Gj = Ij;
      break a;
    }
  }
  Gj = "";
}
;var Jj;
function Kj() {
  var a = ba.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && -1 == Gj.indexOf("Presto") && (a = function() {
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
  if ("undefined" !== typeof a && -1 == Gj.indexOf("Edge") && -1 == Gj.indexOf("Trident") && -1 == Gj.indexOf("MSIE")) {
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
    ba.setTimeout(a, 0);
  };
}
;var Lj = Dj(32), Mj = !1, Nj = !1;
function Oj() {
  Mj = !0;
  Nj = !1;
  for (var a = 0;;) {
    var b = Lj.pop();
    if (null != b && (b.D ? b.D() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  Mj = !1;
  return 0 < Lj.length ? Pj.D ? Pj.D() : Pj.call(null) : null;
}
function Pj() {
  var a = Nj;
  if (r(r(a) ? Mj : a)) {
    return null;
  }
  Nj = !0;
  "function" != l(ba.setImmediate) || ba.Window && ba.Window.prototype && ba.Window.prototype.setImmediate == ba.setImmediate ? (Jj || (Jj = Kj()), Jj(Oj)) : ba.setImmediate(Oj);
}
function Qj(a) {
  Bj(Lj, a);
  return Pj();
}
;var Rj, Sj = function Sj(b) {
  "undefined" === typeof Rj && (Rj = function(b, d, e) {
    this.nc = b;
    this.ca = d;
    this.Dc = e;
    this.B = 425984;
    this.H = 0;
  }, Rj.prototype.X = function(b, d) {
    return new Rj(this.nc, this.ca, d);
  }, Rj.prototype.T = function() {
    return this.Dc;
  }, Rj.prototype.Wa = function() {
    return this.ca;
  }, Rj.Wb = function() {
    return new X(null, 3, 5, Y, [new D(null, "box", "box", -1123515375, null), new D(null, "val", "val", 1769233139, null), new D(null, "meta17657", "meta17657", 1205473490, null)], null);
  }, Rj.nb = !0, Rj.mb = "cljs.core.async.impl.channels/t17656", Rj.Ab = function(b, d) {
    return A(d, "cljs.core.async.impl.channels/t17656");
  });
  return new Rj(Sj, b, ff);
};
function Tj(a, b) {
  this.handler = a;
  this.ca = b;
}
function Uj(a) {
  return vj(a.handler);
}
var Vj = function Vj(b) {
  if (b ? b.fc : b) {
    return b.fc();
  }
  var c;
  c = Vj[l(null == b ? null : b)];
  if (!c && (c = Vj._, !c)) {
    throw w("MMC.abort", b);
  }
  return c.call(null, b);
};
function Wj(a, b, c, d, e, f, h) {
  this.Ta = a;
  this.Db = b;
  this.Qa = c;
  this.Cb = d;
  this.L = e;
  this.closed = f;
  this.qa = h;
}
Wj.prototype.fc = function() {
  for (;;) {
    var a = this.Qa.pop();
    if (null != a) {
      var b = a.handler;
      Qj(function(a) {
        return function() {
          return a.h ? a.h(!0) : a.call(null, !0);
        };
      }(b.f, b, a.ca, a, this));
    }
    break;
  }
  Cj(this.Qa, ie());
  return uj(this);
};
Wj.prototype.Tb = function(a, b, c) {
  var d = this;
  if (null == b) {
    throw Error([x("Assert failed: "), x("Can't put nil in on a channel"), x("\n"), x(dg(R([Kd(new D(null, "not", "not", 1044554643, null), Kd(new D(null, "nil?", "nil?", 1612038930, null), new D(null, "val", "val", 1769233139, null)))], 0)))].join(""));
  }
  if (a = d.closed) {
    return Sj(!a);
  }
  if (r(function() {
    var a = d.L;
    return r(a) ? Fa(Fj(d.L)) : a;
  }())) {
    for (c = Ec(function() {
      var a = d.L;
      return d.qa.l ? d.qa.l(a, b) : d.qa.call(null, a, b);
    }());;) {
      if (0 < d.Ta.length && 0 < S(d.L)) {
        var e = d.Ta.pop(), f = e.f, h = d.L.L.pop();
        Qj(function(a, b) {
          return function() {
            return a.h ? a.h(b) : a.call(null, b);
          };
        }(f, h, e, c, a, this));
      }
      break;
    }
    c && Vj(this);
    return Sj(!0);
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
    return c = wj(e), Qj(function(a) {
      return function() {
        return a.h ? a.h(b) : a.call(null, b);
      };
    }(c, e, a, this)), Sj(!0);
  }
  64 < d.Cb ? (d.Cb = 0, Cj(d.Qa, Uj)) : d.Cb += 1;
  if (!(1024 > d.Qa.length)) {
    throw Error([x("Assert failed: "), x([x("No more than "), x(1024), x(" pending puts are allowed on a single channel."), x(" Consider using a windowed buffer.")].join("")), x("\n"), x(dg(R([Kd(new D(null, "\x3c", "\x3c", 993667236, null), Kd(new D(null, ".-length", ".-length", -280799999, null), new D(null, "puts", "puts", -1883877054, null)), new D("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0)))].join(""));
  }
  Bj(d.Qa, new Tj(c, b));
  return null;
};
Wj.prototype.jc = function(a, b) {
  var c = this;
  if (null != c.L && 0 < S(c.L)) {
    for (var d = b.f, e = Sj(c.L.L.pop());;) {
      if (!r(Fj(c.L))) {
        var f = c.Qa.pop();
        if (null != f) {
          var h = f.handler, k = f.ca;
          Qj(function(a) {
            return function() {
              return a.h ? a.h(!0) : a.call(null, !0);
            };
          }(h.f, h, k, f, d, e, this));
          Ec(function() {
            var a = c.L, b = k;
            return c.qa.l ? c.qa.l(a, b) : c.qa.call(null, a, b);
          }()) && Vj(this);
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
        if (vj(a.handler)) {
          return a;
        }
      } else {
        return null;
      }
    }
  }();
  if (r(d)) {
    return e = wj(d.handler), Qj(function(a) {
      return function() {
        return a.h ? a.h(!0) : a.call(null, !0);
      };
    }(e, d, this)), Sj(d.ca);
  }
  if (r(c.closed)) {
    return r(c.L) && (d = c.L, c.qa.h ? c.qa.h(d) : c.qa.call(null, d)), r(r(!0) ? b.f : !0) ? (d = function() {
      var a = c.L;
      return r(a) ? 0 < S(c.L) : a;
    }(), d = r(d) ? c.L.L.pop() : null, Sj(d)) : null;
  }
  64 < c.Db ? (c.Db = 0, Cj(c.Ta, vj)) : c.Db += 1;
  if (!(1024 > c.Ta.length)) {
    throw Error([x("Assert failed: "), x([x("No more than "), x(1024), x(" pending takes are allowed on a single channel.")].join("")), x("\n"), x(dg(R([Kd(new D(null, "\x3c", "\x3c", 993667236, null), Kd(new D(null, ".-length", ".-length", -280799999, null), new D(null, "takes", "takes", 298247964, null)), new D("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0)))].join(""));
  }
  Bj(c.Ta, b);
  return null;
};
Wj.prototype.zb = function() {
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
      Qj(function(a, b) {
        return function() {
          return a.h ? a.h(b) : a.call(null, b);
        };
      }(c, d, b, this));
    }
  }
  return null;
};
function Xj(a) {
  console.log(a);
  return null;
}
function Yj(a, b) {
  var c = (r(null) ? null : Xj).call(null, b);
  return null == c ? a : yj.l(a, c);
}
function Zj(a) {
  return new Wj(Dj(32), 0, Dj(32), 0, a, !1, function() {
    return function(a) {
      return function() {
        function c(c, d) {
          try {
            return a.l ? a.l(c, d) : a.call(null, c, d);
          } catch (e) {
            return Yj(c, e);
          }
        }
        function d(c) {
          try {
            return a.h ? a.h(c) : a.call(null, c);
          } catch (d) {
            return Yj(c, d);
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
    }(r(null) ? null.h ? null.h(yj) : null.call(null, yj) : yj);
  }());
}
;var ak, bk = function bk(b) {
  "undefined" === typeof ak && (ak = function(b, d, e) {
    this.Vb = b;
    this.f = d;
    this.Cc = e;
    this.B = 393216;
    this.H = 0;
  }, ak.prototype.X = function(b, d) {
    return new ak(this.Vb, this.f, d);
  }, ak.prototype.T = function() {
    return this.Cc;
  }, ak.prototype.hc = function() {
    return !0;
  }, ak.prototype.ic = function() {
    return this.f;
  }, ak.Wb = function() {
    return new X(null, 3, 5, Y, [new D(null, "fn-handler", "fn-handler", 648785851, null), new D(null, "f", "f", 43394975, null), new D(null, "meta17529", "meta17529", -733632008, null)], null);
  }, ak.nb = !0, ak.mb = "cljs.core.async.impl.ioc-helpers/t17528", ak.Ab = function(b, d) {
    return A(d, "cljs.core.async.impl.ioc-helpers/t17528");
  });
  return new ak(bk, b, ff);
};
function ck(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    throw b instanceof Object && a[6].zb(), b;
  }
}
function dk(a, b, c) {
  c = c.jc(null, bk(function(c) {
    a[2] = c;
    a[1] = b;
    return ck(a);
  }));
  return r(c) ? (a[2] = O.h ? O.h(c) : O.call(null, c), a[1] = b, Vg) : null;
}
function ek(a, b) {
  var c = a[6];
  null != b && c.Tb(0, b, bk(function() {
    return function() {
      return null;
    };
  }(c)));
  c.zb();
  return c;
}
function fk(a) {
  for (;;) {
    var b = a[4], c = Wg.h(b), d = oh.h(b), e = a[5];
    if (r(function() {
      var a = e;
      return r(a) ? Fa(b) : a;
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
      a[4] = Yc.C(b, Wg, null, R([oh, null], 0));
      break;
    }
    if (r(function() {
      var a = e;
      return r(a) ? Fa(c) && Fa(Jg.h(b)) : a;
    }())) {
      a[4] = sh.h(b);
    } else {
      if (r(function() {
        var a = e;
        return r(a) ? (a = Fa(c)) ? Jg.h(b) : a : a;
      }())) {
        a[1] = Jg.h(b);
        a[4] = Yc.w(b, Jg, null);
        break;
      }
      if (r(function() {
        var a = Fa(e);
        return a ? Jg.h(b) : a;
      }())) {
        a[1] = Jg.h(b);
        a[4] = Yc.w(b, Jg, null);
        break;
      }
      if (Fa(e) && Fa(Jg.h(b))) {
        a[1] = uh.h(b);
        a[4] = sh.h(b);
        break;
      }
      throw Error("No matching clause");
    }
  }
}
;for (var gk = Array(1), hk = 0;;) {
  if (hk < gk.length) {
    gk[hk] = null, hk += 1;
  } else {
    break;
  }
}
;function ik(a) {
  a = N.l(a, 0) ? null : a;
  if (r(null) && !r(a)) {
    throw Error([x("Assert failed: "), x("buffer must be supplied when transducer is"), x("\n"), x(dg(R([new D(null, "buf-or-n", "buf-or-n", -1646815050, null)], 0)))].join(""));
  }
  a = "number" === typeof a ? new Ej(Dj(a), a) : a;
  return Zj(a);
}
var kk = function jk(b) {
  "undefined" === typeof sj && (sj = function(b, d, e) {
    this.Vb = b;
    this.f = d;
    this.Bc = e;
    this.B = 393216;
    this.H = 0;
  }, sj.prototype.X = function(b, d) {
    return new sj(this.Vb, this.f, d);
  }, sj.prototype.T = function() {
    return this.Bc;
  }, sj.prototype.hc = function() {
    return !0;
  }, sj.prototype.ic = function() {
    return this.f;
  }, sj.Wb = function() {
    return new X(null, 3, 5, Y, [new D(null, "fn-handler", "fn-handler", 648785851, null), new D(null, "f", "f", 43394975, null), new D(null, "meta14822", "meta14822", -622561726, null)], null);
  }, sj.nb = !0, sj.mb = "cljs.core.async/t14821", sj.Ab = function(b, d) {
    return A(d, "cljs.core.async/t14821");
  });
  return new sj(jk, b, ff);
}(function() {
  return null;
});
var lk;
function mk(a) {
  var b = T(a, 0);
  a = T(a, 1);
  if (r(a)) {
    throw a;
  }
  return b;
}
var nk = function nk(b) {
  "undefined" === typeof lk && (lk = function(b, d, e) {
    this.Fc = b;
    this.promise = d;
    this.Ec = e;
    this.B = 393216;
    this.H = 0;
  }, lk.prototype.X = function(b, d) {
    return new lk(this.Fc, this.promise, d);
  }, lk.prototype.T = function() {
    return this.Ec;
  }, lk.prototype.jc = function(b, d) {
    this.promise.then(function(b) {
      return function(c) {
        return Qj(function() {
          return function() {
            return wj(d).call(null, new X(null, 2, 5, Y, [c, null], null));
          };
        }(b));
      };
    }(this), function(b) {
      return function(c) {
        return Qj(function() {
          return function() {
            return wj(d).call(null, new X(null, 2, 5, Y, [null, c], null));
          };
        }(b));
      };
    }(this));
    return null;
  }, lk.Wb = function() {
    return new X(null, 3, 5, Y, [new D(null, "pair-port", "pair-port", 1268194861, null), new D(null, "promise", "promise", -887306482, null), new D(null, "meta23030", "meta23030", 969389769, null)], null);
  }, lk.nb = !0, lk.mb = "cljs-promises.async/t23029", lk.Ab = function(b, d) {
    return A(d, "cljs-promises.async/t23029");
  });
  return new lk(nk, b, ff);
};
var ok = new Knex({client:"websql", useNullAsDefault:!0}), pk = ok.schema;
window.Ac = ok;
function qk(a) {
  a.increments("id").primary();
  a.string("last_name");
  return a.string("first_name");
}
function rk(a) {
  a.increments("id").primary();
  a.string("title");
  a.integer("author_id");
  return a.integer("subject_id");
}
function sk(a) {
  a.increments("id").primary();
  return a.string("subject");
}
function tk() {
  var a = [pk.dropTableIfExists("authors"), pk.dropTableIfExists("books"), pk.dropTableIfExists("subjects")], b = [pk.createTableIfNotExists("authors", qk), pk.createTableIfNotExists("books", rk), pk.createTableIfNotExists("subjects", sk)];
  try {
    return nk(Promise.all(a).then(function(a, b) {
      return function() {
        return Promise.all(b);
      };
    }(a, b)));
  } catch (c) {
    return alert("WOAH");
  }
}
;var uk = new Knex({client:"websql", debug:!0, useNullAsDefault:!0}), vk = new Knex({client:"websql", useNullAsDefault:!0});
function wk() {
  var a = ik(null);
  console.log = function(a) {
    return function(c) {
      c = tj(a, new n(null, 2, [ih, c.sql, Kg, c.bindings], null), kk);
      return r(c) ? O.h ? O.h(c) : O.call(null, c) : !0;
    };
  }(a);
  return a;
}
;function xk(a) {
  window.knex = uk;
  window.Tc = null;
  a = [x("window.currentPromise \x3d "), x(a)].join("");
  try {
    eval(a);
    var b = window.currentPromise;
    return r(b) ? nk(b) : null;
  } catch (c) {
    return nk(Promise.reject(c));
  }
}
;function yk(a) {
  var b = cf(a);
  return yd(function() {
    return function(b) {
      return jd(a.h ? a.h(b) : a.call(null, b));
    };
  }(b), b);
}
function zk(a) {
  return "string" === typeof a || "number" === typeof a;
}
function Ak(a, b) {
  return new X(null, 3, 5, Y, [Kh, "string" === typeof a ? new X(null, 2, 5, Y, [ug, [x('"'), x(a), x('"')].join("")], null) : "number" === typeof a ? new X(null, 2, 5, Y, [pg, a], null) : null, r(b) ? "," : null], null);
}
function Bk(a) {
  return new X(null, 3, 5, Y, [zg, new n(null, 1, [bh, function() {
    return qc.l(a, Fa);
  }], null), r(O.h ? O.h(a) : O.call(null, a)) ? "+" : "-"], null);
}
function Ck(a, b) {
  return new X(null, 3, 5, Y, [Kh, r(a) ? new X(null, 2, 5, Y, [nh, [x(a), x(": ")].join("")], null) : null, b], null);
}
function Dk() {
  return function(a) {
    return function(b, c, d) {
      return new X(null, 6, 5, Y, [xg, new X(null, 2, 5, Y, [Bk, a], null), new X(null, 3, 5, Y, [Ck, b, "["], null), r(O.h ? O.h(a) : O.call(null, a)) ? "\u2026" : new X(null, 2, 5, Y, [Lh, function() {
        return function(a) {
          return function h(b) {
            return new Qd(null, function() {
              return function() {
                for (;;) {
                  var a = G(b);
                  if (a) {
                    if (kd(a)) {
                      var d = Wb(a), e = S(d), t = Ud(e);
                      return function() {
                        for (var a = 0;;) {
                          if (a < e) {
                            var b = y.l(d, a), h = t, k = !N.l(Pc(c), b);
                            h.add(r(zk(b)) ? new X(null, 2, 5, Y, [fh, new X(null, 3, 5, Y, [Ak, b, k], null)], null) : new X(null, 4, 5, Y, [Ek, null, b, k], null));
                            a += 1;
                          } else {
                            return !0;
                          }
                        }
                      }() ? Wd(t.chunk(), h(Xb(a))) : Wd(t.chunk(), null);
                    }
                    var v = J(a);
                    return Q(function() {
                      var a = !N.l(Pc(c), v);
                      return r(zk(v)) ? new X(null, 2, 5, Y, [fh, new X(null, 3, 5, Y, [Ak, v, a], null)], null) : new X(null, 4, 5, Y, [Ek, null, v, a], null);
                    }(), h(tc(a)));
                  }
                  return null;
                }
              };
            }(a), null, null);
          };
        }(a)(c);
      }()], null), "]", r(d) ? "," : null], null);
    };
  }(ji.h(!1));
}
function Fk(a, b, c) {
  return new X(null, 4, 5, Y, [fh, new X(null, 2, 5, Y, [nh, [x(a), x(":")].join("")], null), new X(null, 2, 5, Y, [wg, new X(null, 2, 5, Y, [Ak, b], null)], null), r(c) ? "," : null], null);
}
var Ek = function Ek() {
  return function(b) {
    return function(c, d, e) {
      return new X(null, 6, 5, Y, [Fh, new X(null, 2, 5, Y, [Bk, b], null), new X(null, 3, 5, Y, [Ck, c, "{"], null), r(O.h ? O.h(b) : O.call(null, b)) ? "\u2026" : new X(null, 2, 5, Y, [Lh, function() {
        var c = yk(d);
        return function(b, c) {
          return function p(e) {
            return new Qd(null, function(b) {
              return function() {
                for (;;) {
                  var c = G(e);
                  if (c) {
                    if (kd(c)) {
                      var f = Wb(c), h = S(f), k = Ud(h);
                      return function() {
                        for (var c = 0;;) {
                          if (c < h) {
                            var e = y.l(f, c), p = k, q = Y, v;
                            v = Pd(e);
                            var F = void 0, F = e, F = d.h ? d.h(F) : d.call(null, F), e = !N.l(Pc(b), e);
                            v = jd(F) ? new X(null, 4, 5, Y, [Dk, v, F, e], null) : id(F) ? new X(null, 4, 5, Y, [Ek, v, F, e], null) : new X(null, 4, 5, Y, [Fk, v, F, e], null);
                            p.add(new X(null, 2, 5, q, [lh, v], null));
                            c += 1;
                          } else {
                            return !0;
                          }
                        }
                      }() ? Wd(k.chunk(), p(Xb(c))) : Wd(k.chunk(), null);
                    }
                    var H = J(c);
                    return Q(new X(null, 2, 5, Y, [lh, function() {
                      var c = Pd(H), e;
                      e = H;
                      e = d.h ? d.h(e) : d.call(null, e);
                      var f = !N.l(Pc(b), H);
                      return jd(e) ? new X(null, 4, 5, Y, [Dk, c, e, f], null) : id(e) ? new X(null, 4, 5, Y, [Ek, c, e, f], null) : new X(null, 4, 5, Y, [Fk, c, e, f], null);
                    }()], null), p(tc(c)));
                  }
                  return null;
                }
              };
            }(b, c), null, null);
          };
        }(c, b)(c);
      }()], null), "}", r(e) ? "," : null], null);
    };
  }(ji.h(!1));
};
function Gk(a) {
  return new X(null, 2, 5, Y, [Qg, new X(null, 4, 5, Y, [Dk, null, a, !1], null)], null);
}
;var Hk = ji.h(null), mg = ji.h(null), Ik = ji.h(null), Jk = ji.h(Sc);
function Kk() {
  var a = ik(1);
  Qj(function(a) {
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
                      if (!Nd(f, Vg)) {
                        d = f;
                        break a;
                      }
                    }
                  } catch (h) {
                    if (h instanceof Object) {
                      c[5] = h, fk(c), d = Vg;
                    } else {
                      throw h;
                    }
                  }
                }
                if (!Nd(d, Vg)) {
                  return d;
                }
              }
            }
            function c() {
              var a = [null, null, null, null, null, null, null, null, null, null, null, null, null, null];
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
              var b = a[7], c = a[8], c = eg(R(["and error in here ", b], 0)), b = b.message;
              a[9] = c;
              a[8] = b;
              a[1] = r(b) ? 9 : 10;
              return Vg;
            }
            if (1 === b) {
              return b = O.h ? O.h(Hk) : O.call(null, Hk), a[1] = r(b) ? 2 : 3, Vg;
            }
            if (4 === b) {
              return b = a[2], ek(a, b);
            }
            if (6 === b) {
              var d = a[10], c = function() {
                var a = d;
                return V.l ? V.l(mg, a) : V.call(null, mg, a);
              }(), b = V.l ? V.l(Ik, null) : V.call(null, Ik, null);
              a[11] = c;
              a[2] = b;
              a[1] = 8;
              return Vg;
            }
            if (3 === b) {
              return a[2] = null, a[1] = 4, Vg;
            }
            if (2 === b) {
              var b = function() {
                var a = Sc;
                return V.l ? V.l(Jk, a) : V.call(null, Jk, a);
              }(), c = V.l ? V.l(mg, null) : V.call(null, mg, null), m = O.h ? O.h(Hk) : O.call(null, Hk), m = xk(m);
              a[12] = b;
              a[13] = c;
              return dk(a, 5, m);
            }
            return 11 === b ? (b = a[2], b = V.l ? V.l(Ik, b) : V.call(null, Ik, b), a[2] = b, a[1] = 8, Vg) : 9 === b ? (c = a[8], a[2] = c, a[1] = 11, Vg) : 5 === b ? (d = a[10], b = a[2], c = b.h ? b.h(0) : b.call(null, 0), b = b.h ? b.h(1) : b.call(null, 1), a[7] = b, a[10] = c, a[1] = r(c) ? 6 : 7, Vg) : 10 === b ? (b = a[7], b = b.toString(), a[2] = b, a[1] = 11, Vg) : 8 === b ? (b = a[2], a[2] = b, a[1] = 4, Vg) : null;
          };
        }(a), a);
      }(), d = function() {
        var d = c.D ? c.D() : c.call(null);
        d[6] = a;
        return d;
      }();
      return ck(d);
    };
  }(a));
  return a;
}
function Lk(a) {
  return new X(null, 2, 5, Y, [zh, new X(null, 3, 5, Y, [Ih, new n(null, 1, [bh, function() {
    V.l ? V.l(Hk, a) : V.call(null, Hk, a);
    return Kk();
  }], null), new X(null, 2, 5, Y, [Pg, new X(null, 2, 5, Y, [Bg, a], null)], null)], null)], null);
}
function Mk() {
  return function(a) {
    return function() {
      return new X(null, 5, 5, Y, [yg, r(O.h ? O.h(a) : O.call(null, a)) ? new n(null, 1, [dh, new n(null, 2, [ph, 0, Mh, 0], null)], null) : null, r(O.h ? O.h(a) : O.call(null, a)) ? null : new X(null, 2, 5, Y, [Dh, "Examples"], null), new X(null, 3, 5, Y, [pj, a, "examples"], null), r(O.h ? O.h(a) : O.call(null, a)) ? null : new X(null, 4, 5, Y, [jh, new X(null, 2, 5, Y, [Lk, "knex('subjects')"], null), new X(null, 2, 5, Y, [Lk, "knex\n  .table('authors')\n  .innerJoin('books', 'books.author_id', 'authors.id')\n  .select('authors.first_name', 'books.title')"], 
      null), new X(null, 2, 5, Y, [Lk, "knex\n  .select(\n    knex.raw('first_name || \" \" || last_name as author'),\n    knex.raw('count(books.id) as quantity')\n  )\n  .from('books')\n  .innerJoin('authors', 'authors.id', 'books.author_id')\n  .groupBy('author_id')\n  .orderBy('quantity', 'desc')"], null)], null)], null);
    };
  }(ji.h(!1));
}
function Nk(a) {
  var b = O.h ? O.h(Jk) : O.call(null, Jk), c = S(b), d = O.h ? O.h(mg) : O.call(null, mg), e = S(d);
  return new X(null, 4, 5, Y, [Eg, new X(null, 2, 5, Y, [Ng, new X(null, 3, 5, Y, [Ih, new n(null, 2, [Gh, "#", bh, function() {
    return function(b) {
      b.preventDefault();
      return V.l ? V.l(a, "records") : V.call(null, a, "records");
    };
  }(b, c, d, e)], null), [x("returned "), x(e), x(" row"), x(N.l(e, 1) ? null : "s")].join("")], null)], null), new X(null, 2, 5, Y, [Ng, new X(null, 3, 5, Y, [Ih, new n(null, 2, [Gh, "#", bh, function() {
    return function(b) {
      b.preventDefault();
      return V.l ? V.l(a, "sql") : V.call(null, a, "sql");
    };
  }(b, c, d, e)], null), [x(c), x(" SQL statement"), x(N.l(c, 1) ? null : "s")].join("")], null)], null), new X(null, 3, 5, Y, [Dg, "knex ", window.Ac.VERSION], null)], null);
}
function Ok(a) {
  var b = Y, c = new X(null, 3, 5, Y, [Ah, new X(null, 2, 5, Y, [Mg, "query: "], null), new X(null, 2, 5, Y, [th, ih.h(a)], null)], null), d = Y, e = new X(null, 2, 5, Y, [Mg, "bindings: "], null), f = Y;
  a: {
    var h = Kg.h(a);
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
  return new X(null, 3, 5, b, [Ug, c, new X(null, 3, 5, d, [Yg, e, new X(null, 4, 5, f, [th, "[", a, "]"], null)], null)], null);
}
function Pk() {
  return function(a) {
    return function() {
      return new X(null, 3, 5, Y, [Ag, new X(null, 2, 5, Y, [Nk, a], null), N.l("records", O.h ? O.h(a) : O.call(null, a)) ? new X(null, 3, 5, Y, [tg, new X(null, 1, 5, Y, [Gg], null), new X(null, 2, 5, Y, [Gk, lg()], null)], null) : new X(null, 2, 5, Y, [vh, function() {
        return function(a) {
          return function d(e) {
            return new Qd(null, function() {
              return function() {
                for (;;) {
                  var a = G(e);
                  if (a) {
                    if (kd(a)) {
                      var b = Wb(a), k = S(b), m = Ud(k);
                      a: {
                        for (var p = 0;;) {
                          if (p < k) {
                            var q = y.l(b, p);
                            m.add(new X(null, 2, 5, Y, [Ok, q], null));
                            p += 1;
                          } else {
                            b = !0;
                            break a;
                          }
                        }
                      }
                      return b ? Wd(m.chunk(), d(Xb(a))) : Wd(m.chunk(), null);
                    }
                    m = J(a);
                    return Q(new X(null, 2, 5, Y, [Ok, m], null), d(tc(a)));
                  }
                  return null;
                }
              };
            }(a), null, null);
          };
        }(a)(O.h ? O.h(Jk) : O.call(null, Jk));
      }()], null)], null);
    };
  }(ji.h("records"));
}
function Qk() {
  return new X(null, 2, 5, Y, [$g, new X(null, 2, 5, Y, [eh, new n(null, 3, [Og, O.h ? O.h(Hk) : O.call(null, Hk), dh, new n(null, 2, [Tg, "100%", Jh, "300px"], null), Ch, function(a) {
    a = a.target.value;
    V.l ? V.l(Hk, a) : V.call(null, Hk, a);
    return Kk();
  }], null)], null)], null);
}
function Rk() {
  return new X(null, 2, 5, Y, [wh, new X(null, 2, 5, Y, [Eh, "Click an example to the left or type in a knex statement lower left"], null)], null);
}
function Sk() {
  return new X(null, 3, 5, Y, [fh, new X(null, 3, 5, Y, [kh, new X(null, 1, 5, Y, [Mk], null), new X(null, 1, 5, Y, [Qk], null)], null), new X(null, 3, 5, Y, [kh, r(O.h ? O.h(Ik) : O.call(null, Ik)) ? new X(null, 2, 5, Y, [sg, O.h ? O.h(Ik) : O.call(null, Ik)], null) : null, r(O.h ? O.h(mg) : O.call(null, mg)) ? new X(null, 1, 5, Y, [Pk], null) : new X(null, 1, 5, Y, [Rk], null)], null)], null);
}
(function() {
  var a = wk(), b = ik(1);
  Qj(function(a, b) {
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
                      if (!Nd(e, Vg)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f, fk(c), d = Vg;
                    } else {
                      throw f;
                    }
                  }
                }
                if (!Nd(d, Vg)) {
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
            return 1 === c ? (a[2] = null, a[1] = 2, Vg) : 2 === c ? (a[1] = 4, Vg) : 3 === c ? (c = a[2], ek(a, c)) : 4 === c ? dk(a, 7, b) : 5 === c ? (a[2] = null, a[1] = 6, Vg) : 6 === c ? (c = a[2], a[2] = c, a[1] = 3, Vg) : 7 === c ? (c = qc.w(Jk, Qc, a[2]), a[7] = c, a[2] = null, a[1] = 2, Vg) : null;
          };
        }(a, b), a, b);
      }(), f = function() {
        var b = e.D ? e.D() : e.call(null);
        b[6] = a;
        return b;
      }();
      return ck(f);
    };
  }(b, a));
  return b;
})();
var Tk = [{id:1111, last_name:"Denham", first_name:"Ariel"}, {id:1212, last_name:"Worsley", first_name:"John"}, {id:15990, last_name:"Bourgeois", first_name:"Paulette"}, {id:25041, last_name:"Bianco", first_name:"Margery Williams"}, {id:16, last_name:"Alcott", first_name:"Louisa May"}, {id:4156, last_name:"King", first_name:"Stephen"}, {id:1866, last_name:"Herbert", first_name:"Frank"}, {id:1644, last_name:"Hogarth", first_name:"Burne"}, {id:2031, last_name:"Brown", first_name:"Margaret Wise"}, {id:115, 
last_name:"Poe", first_name:"Edgar Allen"}, {id:7805, last_name:"Lutz", first_name:"Mark"}, {id:7806, last_name:"Christiansen", first_name:"Tom"}, {id:1533, last_name:"Brautigan", first_name:"Richard"}, {id:1717, last_name:"Brite", first_name:"Poppy Z."}, {id:2112, last_name:"Gorey", first_name:"Edward"}, {id:2001, last_name:"Clarke", first_name:"Arthur C."}, {id:1213, last_name:"Brookins", first_name:"Andrew"}, {id:25043, last_name:"Simon", first_name:"Neil"}, {id:1809, last_name:"Geisel", first_name:"Theodor Seuss"}], 
Uk = [{id:7808, title:"The Shining", author_id:4156, subject_id:9}, {id:4513, title:"Dune", author_id:1866, subject_id:15}, {id:4267, title:"2001: A Space Odyssey", author_id:2001, subject_id:15}, {id:1608, title:"The Cat in the Hat", author_id:1809, subject_id:2}, {id:1590, title:"Bartholomew and the Oobleck", author_id:1809, subject_id:2}, {id:1591, title:"One Fish, Two Fish, Red Fish, Blue Fish", author_id:1809, subject_id:2}, {id:1592, title:"Horton Hears a Who", author_id:1809, subject_id:2}, 
{id:1593, title:"The Lorax", author_id:1809, subject_id:2}, {id:25908, title:"Franklin in the Dark", author_id:15990, subject_id:2}, {id:1501, title:"Goodnight Moon", author_id:2031, subject_id:2}, {id:190, title:"Little Women", author_id:16, subject_id:6}, {id:1234, title:"The Velveteen Rabbit", author_id:25041, subject_id:3}, {id:2038, title:"Dynamic Anatomy", author_id:1644, subject_id:0}, {id:156, title:"The Tell-Tale Heart", author_id:115, subject_id:9}, {id:41473, title:"Programming Python", 
author_id:7805, subject_id:4}, {id:41477, title:"Learning Python", author_id:7805, subject_id:4}, {id:41478, title:"Perl Cookbook", author_id:7806, subject_id:4}, {id:41472, title:"Practical PostgreSQL", author_id:1212, subject_id:4}], Vk = [{id:0, subject:"Arts"}, {id:1, subject:"Business"}, {id:2, subject:"Children's Books"}, {id:3, subject:"Classics"}, {id:4, subject:"Computers"}, {id:5, subject:"Cooking"}, {id:6, subject:"Drama"}, {id:7, subject:"Entertainment"}, {id:8, subject:"History"}, {id:9, 
subject:"Horror"}, {id:10, subject:"Mystery"}, {id:11, subject:"Poetry"}, {id:12, subject:"Religion"}, {id:13, subject:"Romance"}, {id:14, subject:"Science"}, {id:15, subject:"Science Fiction"}];
function Wk(a, b) {
  return (vk.h ? vk.h(a) : vk.call(null, a)).insert(b);
}
;qa = !1;
pa = function() {
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
    return console.log.apply(console, Oa ? Na(a) : Ma.call(null, a));
  }
  a.J = 0;
  a.I = function(a) {
    a = G(a);
    return b(a);
  };
  a.C = b;
  return a;
}();
function Xk() {
  try {
    return window.openDatabase("testdb", "1.0", "testing indexeddb support", 100), !0;
  } catch (a) {
    return !1;
  }
}
function Yk() {
  return new X(null, 2, 5, Y, [qg, new X(null, 4, 5, Y, [vg, new X(null, 2, 5, Y, [Dh, "IndexedDB Needed"], null), new X(null, 2, 5, Y, [Eh, "IndexedDB gives browsers access to a SQLite-esque database, which the sandbox needs to function. Unfortunately only webkit browsers these days have IndexedDB, if you come back with Chrome, Safari or Opera you'll be able to try the sandbox."], null), new X(null, 2, 5, Y, [Eh, "(Also possible your mobile browser is just denying access...)"], null)], null)], null);
}
function kj() {
  return r(Xk()) ? new X(null, 4, 5, Y, [fh, new X(null, 1, 5, Y, [rj], null), new X(null, 1, 5, Y, [qj], null), new X(null, 1, 5, Y, [Sk], null)], null) : new X(null, 1, 5, Y, [Yk], null);
}
(function() {
  var a = ik(1);
  Qj(function(a) {
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
                      if (!Nd(f, Vg)) {
                        d = f;
                        break a;
                      }
                    }
                  } catch (h) {
                    if (h instanceof Object) {
                      c[5] = h, fk(c), d = Vg;
                    } else {
                      throw h;
                    }
                  }
                }
                if (!Nd(d, Vg)) {
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
              return b = Xk(), a[1] = r(b) ? 2 : 3, Vg;
            }
            if (2 === b) {
              return b = tk(), dk(a, 5, b);
            }
            if (3 === b) {
              return a[2] = null, a[1] = 4, Vg;
            }
            if (4 === b) {
              var b = a[2], c = jj();
              a[7] = b;
              return ek(a, c);
            }
            return 5 === b ? (b = mk(a[2]), c = [Wk("authors", Tk), Wk("books", Uk), Wk("subjects", Vk)], c = nk(Promise.all(c)), a[8] = b, dk(a, 6, c)) : 6 === b ? (b = mk(a[2]), a[2] = b, a[1] = 4, Vg) : null;
          };
        }(a), a);
      }(), d = function() {
        var d = c.D ? c.D() : c.call(null);
        d[6] = a;
        return d;
      }();
      return ck(d);
    };
  }(a));
  return a;
})();

})();
