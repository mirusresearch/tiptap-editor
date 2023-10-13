(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".error-list .error-list__item.selected,.error-list .error-list__item:hover{background-color:#fff3}.tiptap-editor{border:1px solid #e5e7eb;background:white;border-radius:8px;padding:4px}.tiptap-editor p.is-empty:first-child:before{content:attr(data-placeholder);float:left;color:#aaa;pointer-events:none;height:0}.tiptap-editor .menubar{padding:4px;border-radius:4px;background-color:#f4f4f5;display:flex}.tiptap-editor .menubar button{font-size:14px;background-color:transparent;border:none;cursor:pointer;height:30px;outline:50;width:35px;vertical-align:bottom;border-radius:4px;margin-right:3px}.tiptap-editor .menubar button:focus{outline:2px solid #3b82f6;transition:all .08s ease-in-out}.tiptap-editor .menubar button.is-active{background-color:#d3e3fd}.tiptap-editor .menubar button.is-active:focus{background-color:#bfd2f9}.tiptap-editor .menubar button:not(.is-active):hover{background-color:#e5e7eb}.tiptap-editor .menubar button:not(.is-active):focus{background-color:#e5e7eb}.tiptap-editor .menubar button svg{width:12px}.tiptap-editor .editor__content{font-size:16px;outline:0;overflow-y:auto;padding:10px}.tiptap-editor .editor__content .underline-red{border-bottom:3px red solid}.tiptap-editor .editor__content .underline-orange{border-bottom:3px orange solid}.tiptap-editor .editor__content .underline-green{border-bottom:3px lightgreen solid}.tiptap-editor .editor__content .underline-blue{border-bottom:3px #3b82f6 solid}.tiptap-editor .editor__content ul{padding:0 40px}.tiptap-editor .editor__content .ProseMirror{height:100%;padding:2px;border-radius:7px}.tiptap-editor .editor__content .ProseMirror:focus{outline:2px solid #3b82f6;transition:all .08s ease-in-out}.character-count{padding:4px 15px 4px 4px;border-radius:4px;text-align:right;display:flex;gap:8px;justify-content:flex-end;flex-grow:2}.character-count__graph{color:#a8c2f7}.character-count__graph--warning{color:#fb7373}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
var un = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function kw(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function zC(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(t).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(t, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[r];
      }
    });
  }), n;
}
var Nw = { exports: {} }, VC = Nw.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
typeof __g == "number" && (__g = VC);
var se = Nw.exports, WC = {}.hasOwnProperty, Bt = function(t, e) {
  return WC.call(t, e);
}, ae = function(t) {
  try {
    return !!t();
  } catch {
    return !0;
  }
}, Re = !ae(function() {
  return Object.defineProperty({}, "a", { get: function() {
    return 7;
  } }).a != 7;
}), Mw = { exports: {} }, HC = Mw.exports = { version: "2.6.12" };
typeof __e == "number" && (__e = HC);
var We = Mw.exports, Te = {}, le = function(t) {
  return typeof t == "object" ? t !== null : typeof t == "function";
}, UC = le, ce = function(t) {
  if (!UC(t))
    throw TypeError(t + " is not an object!");
  return t;
}, Tm = le, up = se.document, GC = Tm(up) && Tm(up.createElement), Bd = function(t) {
  return GC ? up.createElement(t) : {};
}, Tw = !Re && !ae(function() {
  return Object.defineProperty(Bd("div"), "a", { get: function() {
    return 7;
  } }).a != 7;
}), $s = le, ur = function(t, e) {
  if (!$s(t))
    return t;
  var n, r;
  if (e && typeof (n = t.toString) == "function" && !$s(r = n.call(t)) || typeof (n = t.valueOf) == "function" && !$s(r = n.call(t)) || !e && typeof (n = t.toString) == "function" && !$s(r = n.call(t)))
    return r;
  throw TypeError("Can't convert object to primitive value");
}, $m = ce, qC = Tw, JC = ur, KC = Object.defineProperty;
Te.f = Re ? Object.defineProperty : function(e, n, r) {
  if ($m(e), n = JC(n, !0), $m(r), qC)
    try {
      return KC(e, n, r);
    } catch {
    }
  if ("get" in r || "set" in r)
    throw TypeError("Accessors not supported!");
  return "value" in r && (e[n] = r.value), e;
};
var Qr = function(t, e) {
  return {
    enumerable: !(t & 1),
    configurable: !(t & 2),
    writable: !(t & 4),
    value: e
  };
}, XC = Te, YC = Qr, zt = Re ? function(t, e, n) {
  return XC.f(t, e, YC(1, n));
} : function(t, e, n) {
  return t[e] = n, t;
}, $w = { exports: {} }, ZC = 0, QC = Math.random(), ei = function(t) {
  return "Symbol(".concat(t === void 0 ? "" : t, ")_", (++ZC + QC).toString(36));
}, Iw = { exports: {} }, Pw = !1, e_ = We, Im = se, Pm = "__core-js_shared__", Dm = Im[Pm] || (Im[Pm] = {});
(Iw.exports = function(t, e) {
  return Dm[t] || (Dm[t] = e !== void 0 ? e : {});
})("versions", []).push({
  version: e_.version,
  mode: "global",
  copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
});
var Ol = Iw.exports, t_ = Ol("native-function-to-string", Function.toString), n_ = se, Is = zt, Am = Bt, Tc = ei("src"), zd = t_, Dw = "toString", r_ = ("" + zd).split(Dw);
We.inspectSource = function(t) {
  return zd.call(t);
};
($w.exports = function(t, e, n, r) {
  var i = typeof n == "function";
  i && (Am(n, "name") || Is(n, "name", e)), t[e] !== n && (i && (Am(n, Tc) || Is(n, Tc, t[e] ? "" + t[e] : r_.join(String(e)))), t === n_ ? t[e] = n : r ? t[e] ? t[e] = n : Is(t, e, n) : (delete t[e], Is(t, e, n)));
})(Function.prototype, Dw, function() {
  return typeof this == "function" && this[Tc] || zd.call(this);
});
var _t = $w.exports, mn = function(t) {
  if (typeof t != "function")
    throw TypeError(t + " is not a function!");
  return t;
}, i_ = mn, vn = function(t, e, n) {
  if (i_(t), e === void 0)
    return t;
  switch (n) {
    case 1:
      return function(r) {
        return t.call(e, r);
      };
    case 2:
      return function(r, i) {
        return t.call(e, r, i);
      };
    case 3:
      return function(r, i, o) {
        return t.call(e, r, i, o);
      };
  }
  return function() {
    return t.apply(e, arguments);
  };
}, xi = se, _a = We, o_ = zt, s_ = _t, Rm = vn, $c = "prototype", at = function(t, e, n) {
  var r = t & at.F, i = t & at.G, o = t & at.S, s = t & at.P, a = t & at.B, l = i ? xi : o ? xi[e] || (xi[e] = {}) : (xi[e] || {})[$c], c = i ? _a : _a[e] || (_a[e] = {}), u = c[$c] || (c[$c] = {}), f, p, d, h;
  i && (n = e);
  for (f in n)
    p = !r && l && l[f] !== void 0, d = (p ? l : n)[f], h = a && p ? Rm(d, xi) : s && typeof d == "function" ? Rm(Function.call, d) : d, l && s_(l, f, d, t & at.U), c[f] != d && o_(c, f, h), s && u[f] != d && (u[f] = d);
};
xi.core = _a;
at.F = 1;
at.G = 2;
at.S = 4;
at.P = 8;
at.B = 16;
at.W = 32;
at.U = 64;
at.R = 128;
var $ = at, Aw = { exports: {} }, Hr = ei("meta"), a_ = le, Vd = Bt, l_ = Te.f, c_ = 0, El = Object.isExtensible || function() {
  return !0;
}, u_ = !ae(function() {
  return El(Object.preventExtensions({}));
}), Wd = function(t) {
  l_(t, Hr, { value: {
    i: "O" + ++c_,
    // object ID
    w: {}
    // weak collections IDs
  } });
}, f_ = function(t, e) {
  if (!a_(t))
    return typeof t == "symbol" ? t : (typeof t == "string" ? "S" : "P") + t;
  if (!Vd(t, Hr)) {
    if (!El(t))
      return "F";
    if (!e)
      return "E";
    Wd(t);
  }
  return t[Hr].i;
}, p_ = function(t, e) {
  if (!Vd(t, Hr)) {
    if (!El(t))
      return !0;
    if (!e)
      return !1;
    Wd(t);
  }
  return t[Hr].w;
}, d_ = function(t) {
  return u_ && h_.NEED && El(t) && !Vd(t, Hr) && Wd(t), t;
}, h_ = Aw.exports = {
  KEY: Hr,
  NEED: !1,
  fastKey: f_,
  getWeak: p_,
  onFreeze: d_
}, fr = Aw.exports, Rw = { exports: {} }, fp = Ol("wks"), m_ = ei, pp = se.Symbol, Fm = typeof pp == "function", v_ = Rw.exports = function(t) {
  return fp[t] || (fp[t] = Fm && pp[t] || (Fm ? pp : m_)("Symbol." + t));
};
v_.store = fp;
var Se = Rw.exports, g_ = Te.f, y_ = Bt, Lm = Se("toStringTag"), Yi = function(t, e, n) {
  t && !y_(t = n ? t : t.prototype, Lm) && g_(t, Lm, { configurable: !0, value: e });
}, Cl = {};
Cl.f = Se;
var b_ = se, jm = We, w_ = Cl, S_ = Te.f, Fw = function(t) {
  var e = jm.Symbol || (jm.Symbol = b_.Symbol || {});
  t.charAt(0) != "_" && !(t in e) && S_(e, t, { value: w_.f(t) });
}, x_ = {}.toString, Rn = function(t) {
  return x_.call(t).slice(8, -1);
}, O_ = Rn, fs = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
  return O_(t) == "String" ? t.split("") : Object(t);
}, Fn = function(t) {
  if (t == null)
    throw TypeError("Can't call method on  " + t);
  return t;
}, E_ = fs, C_ = Fn, Vt = function(t) {
  return E_(C_(t));
}, __ = Math.ceil, k_ = Math.floor, gn = function(t) {
  return isNaN(t = +t) ? 0 : (t > 0 ? k_ : __)(t);
}, N_ = gn, M_ = Math.min, Ee = function(t) {
  return t > 0 ? M_(N_(t), 9007199254740991) : 0;
}, T_ = gn, $_ = Math.max, I_ = Math.min, ti = function(t, e) {
  return t = T_(t), t < 0 ? $_(t + e, 0) : I_(t, e);
}, P_ = Vt, D_ = Ee, A_ = ti, _l = function(t) {
  return function(e, n, r) {
    var i = P_(e), o = D_(i.length), s = A_(r, o), a;
    if (t && n != n) {
      for (; o > s; )
        if (a = i[s++], a != a)
          return !0;
    } else
      for (; o > s; s++)
        if ((t || s in i) && i[s] === n)
          return t || s || 0;
    return !t && -1;
  };
}, Bm = Ol("keys"), R_ = ei, Hd = function(t) {
  return Bm[t] || (Bm[t] = R_(t));
}, zm = Bt, F_ = Vt, L_ = _l(!1), j_ = Hd("IE_PROTO"), Lw = function(t, e) {
  var n = F_(t), r = 0, i = [], o;
  for (o in n)
    o != j_ && zm(n, o) && i.push(o);
  for (; e.length > r; )
    zm(n, o = e[r++]) && (~L_(i, o) || i.push(o));
  return i;
}, Ud = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), B_ = Lw, z_ = Ud, ni = Object.keys || function(e) {
  return B_(e, z_);
}, ps = {};
ps.f = Object.getOwnPropertySymbols;
var Zi = {};
Zi.f = {}.propertyIsEnumerable;
var V_ = ni, W_ = ps, H_ = Zi, U_ = function(t) {
  var e = V_(t), n = W_.f;
  if (n)
    for (var r = n(t), i = H_.f, o = 0, s; r.length > o; )
      i.call(t, s = r[o++]) && e.push(s);
  return e;
}, G_ = Rn, kl = Array.isArray || function(e) {
  return G_(e) == "Array";
}, q_ = Fn, pt = function(t) {
  return Object(q_(t));
}, J_ = Te, K_ = ce, X_ = ni, jw = Re ? Object.defineProperties : function(e, n) {
  K_(e);
  for (var r = X_(n), i = r.length, o = 0, s; i > o; )
    J_.f(e, s = r[o++], n[s]);
  return e;
}, Vm = se.document, Gd = Vm && Vm.documentElement, Y_ = ce, Z_ = jw, Wm = Ud, Q_ = Hd("IE_PROTO"), Ic = function() {
}, dp = "prototype", ka = function() {
  var t = Bd("iframe"), e = Wm.length, n = "<", r = ">", i;
  for (t.style.display = "none", Gd.appendChild(t), t.src = "javascript:", i = t.contentWindow.document, i.open(), i.write(n + "script" + r + "document.F=Object" + n + "/script" + r), i.close(), ka = i.F; e--; )
    delete ka[dp][Wm[e]];
  return ka();
}, ri = Object.create || function(e, n) {
  var r;
  return e !== null ? (Ic[dp] = Y_(e), r = new Ic(), Ic[dp] = null, r[Q_] = e) : r = ka(), n === void 0 ? r : Z_(r, n);
}, qd = {}, pr = {}, ek = Lw, tk = Ud.concat("length", "prototype");
pr.f = Object.getOwnPropertyNames || function(e) {
  return ek(e, tk);
};
var nk = Vt, Bw = pr.f, rk = {}.toString, zw = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], ik = function(t) {
  try {
    return Bw(t);
  } catch {
    return zw.slice();
  }
};
qd.f = function(e) {
  return zw && rk.call(e) == "[object Window]" ? ik(e) : Bw(nk(e));
};
var en = {}, ok = Zi, sk = Qr, ak = Vt, lk = ur, ck = Bt, uk = Tw, Hm = Object.getOwnPropertyDescriptor;
en.f = Re ? Hm : function(e, n) {
  if (e = ak(e), n = lk(n, !0), uk)
    try {
      return Hm(e, n);
    } catch {
    }
  if (ck(e, n))
    return sk(!ok.f.call(e, n), e[n]);
};
var Nl = se, Fe = Bt, hp = Re, nt = $, Um = _t, fk = fr.KEY, Jd = ae, Kd = Ol, Xd = Yi, pk = ei, ds = Se, dk = Cl, hk = Fw, mk = U_, vk = kl, mp = ce, gk = le, yk = pt, Ml = Vt, Yd = ur, vp = Qr, Ho = ri, Vw = qd, Ww = en, Tl = ps, Hw = Te, bk = ni, Uw = Ww.f, kr = Hw.f, Gw = Vw.f, gt = Nl.Symbol, ja = Nl.JSON, Ps = ja && ja.stringify, Xn = "prototype", vt = ds("_hidden"), Gm = ds("toPrimitive"), wk = {}.propertyIsEnumerable, ho = Kd("symbol-registry"), Pn = Kd("symbols"), hs = Kd("op-symbols"), Pt = Object[Xn], Qi = typeof gt == "function" && !!Tl.f, Pc = Nl.QObject, gp = !Pc || !Pc[Xn] || !Pc[Xn].findChild, yp = hp && Jd(function() {
  return Ho(kr({}, "a", {
    get: function() {
      return kr(this, "a", { value: 7 }).a;
    }
  })).a != 7;
}) ? function(t, e, n) {
  var r = Uw(Pt, e);
  r && delete Pt[e], kr(t, e, n), r && t !== Pt && kr(Pt, e, r);
} : kr, qm = function(t) {
  var e = Pn[t] = Ho(gt[Xn]);
  return e._k = t, e;
}, bp = Qi && typeof gt.iterator == "symbol" ? function(t) {
  return typeof t == "symbol";
} : function(t) {
  return t instanceof gt;
}, $l = function(e, n, r) {
  return e === Pt && $l(hs, n, r), mp(e), n = Yd(n, !0), mp(r), Fe(Pn, n) ? (r.enumerable ? (Fe(e, vt) && e[vt][n] && (e[vt][n] = !1), r = Ho(r, { enumerable: vp(0, !1) })) : (Fe(e, vt) || kr(e, vt, vp(1, {})), e[vt][n] = !0), yp(e, n, r)) : kr(e, n, r);
}, qw = function(e, n) {
  mp(e);
  for (var r = mk(n = Ml(n)), i = 0, o = r.length, s; o > i; )
    $l(e, s = r[i++], n[s]);
  return e;
}, Sk = function(e, n) {
  return n === void 0 ? Ho(e) : qw(Ho(e), n);
}, Jm = function(e) {
  var n = wk.call(this, e = Yd(e, !0));
  return this === Pt && Fe(Pn, e) && !Fe(hs, e) ? !1 : n || !Fe(this, e) || !Fe(Pn, e) || Fe(this, vt) && this[vt][e] ? n : !0;
}, Jw = function(e, n) {
  if (e = Ml(e), n = Yd(n, !0), !(e === Pt && Fe(Pn, n) && !Fe(hs, n))) {
    var r = Uw(e, n);
    return r && Fe(Pn, n) && !(Fe(e, vt) && e[vt][n]) && (r.enumerable = !0), r;
  }
}, Kw = function(e) {
  for (var n = Gw(Ml(e)), r = [], i = 0, o; n.length > i; )
    !Fe(Pn, o = n[i++]) && o != vt && o != fk && r.push(o);
  return r;
}, Xw = function(e) {
  for (var n = e === Pt, r = Gw(n ? hs : Ml(e)), i = [], o = 0, s; r.length > o; )
    Fe(Pn, s = r[o++]) && (!n || Fe(Pt, s)) && i.push(Pn[s]);
  return i;
};
Qi || (gt = function() {
  if (this instanceof gt)
    throw TypeError("Symbol is not a constructor!");
  var e = pk(arguments.length > 0 ? arguments[0] : void 0), n = function(r) {
    this === Pt && n.call(hs, r), Fe(this, vt) && Fe(this[vt], e) && (this[vt][e] = !1), yp(this, e, vp(1, r));
  };
  return hp && gp && yp(Pt, e, { configurable: !0, set: n }), qm(e);
}, Um(gt[Xn], "toString", function() {
  return this._k;
}), Ww.f = Jw, Hw.f = $l, pr.f = Vw.f = Kw, Zi.f = Jm, Tl.f = Xw, hp && !Pw && Um(Pt, "propertyIsEnumerable", Jm, !0), dk.f = function(t) {
  return qm(ds(t));
});
nt(nt.G + nt.W + nt.F * !Qi, { Symbol: gt });
for (var Km = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(",")
), Xm = 0; Km.length > Xm; )
  ds(Km[Xm++]);
for (var Ym = bk(ds.store), Zm = 0; Ym.length > Zm; )
  hk(Ym[Zm++]);
nt(nt.S + nt.F * !Qi, "Symbol", {
  // 19.4.2.1 Symbol.for(key)
  for: function(t) {
    return Fe(ho, t += "") ? ho[t] : ho[t] = gt(t);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function(e) {
    if (!bp(e))
      throw TypeError(e + " is not a symbol!");
    for (var n in ho)
      if (ho[n] === e)
        return n;
  },
  useSetter: function() {
    gp = !0;
  },
  useSimple: function() {
    gp = !1;
  }
});
nt(nt.S + nt.F * !Qi, "Object", {
  // 19.1.2.2 Object.create(O [, Properties])
  create: Sk,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $l,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: qw,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: Jw,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: Kw,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: Xw
});
var xk = Jd(function() {
  Tl.f(1);
});
nt(nt.S + nt.F * xk, "Object", {
  getOwnPropertySymbols: function(e) {
    return Tl.f(yk(e));
  }
});
ja && nt(nt.S + nt.F * (!Qi || Jd(function() {
  var t = gt();
  return Ps([t]) != "[null]" || Ps({ a: t }) != "{}" || Ps(Object(t)) != "{}";
})), "JSON", {
  stringify: function(e) {
    for (var n = [e], r = 1, i, o; arguments.length > r; )
      n.push(arguments[r++]);
    if (o = i = n[1], !(!gk(i) && e === void 0 || bp(e)))
      return vk(i) || (i = function(s, a) {
        if (typeof o == "function" && (a = o.call(this, s, a)), !bp(a))
          return a;
      }), n[1] = i, Ps.apply(ja, n);
  }
});
gt[Xn][Gm] || zt(gt[Xn], Gm, gt[Xn].valueOf);
Xd(gt, "Symbol");
Xd(Math, "Math", !0);
Xd(Nl.JSON, "JSON", !0);
var Qm = $;
Qm(Qm.S, "Object", { create: ri });
var Dc = $;
Dc(Dc.S + Dc.F * !Re, "Object", { defineProperty: Te.f });
var Ac = $;
Ac(Ac.S + Ac.F * !Re, "Object", { defineProperties: jw });
var Rc = $, Ok = We, Ek = ae, yn = function(t, e) {
  var n = (Ok.Object || {})[t] || Object[t], r = {};
  r[t] = e(n), Rc(Rc.S + Rc.F * Ek(function() {
    n(1);
  }), "Object", r);
}, Ck = Vt, _k = en.f;
yn("getOwnPropertyDescriptor", function() {
  return function(e, n) {
    return _k(Ck(e), n);
  };
});
var kk = Bt, Nk = pt, ev = Hd("IE_PROTO"), Mk = Object.prototype, ii = Object.getPrototypeOf || function(t) {
  return t = Nk(t), kk(t, ev) ? t[ev] : typeof t.constructor == "function" && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? Mk : null;
}, Tk = pt, $k = ii;
yn("getPrototypeOf", function() {
  return function(e) {
    return $k(Tk(e));
  };
});
var Ik = pt, Pk = ni;
yn("keys", function() {
  return function(e) {
    return Pk(Ik(e));
  };
});
yn("getOwnPropertyNames", function() {
  return qd.f;
});
var Dk = le, Ak = fr.onFreeze;
yn("freeze", function(t) {
  return function(n) {
    return t && Dk(n) ? t(Ak(n)) : n;
  };
});
var Rk = le, Fk = fr.onFreeze;
yn("seal", function(t) {
  return function(n) {
    return t && Rk(n) ? t(Fk(n)) : n;
  };
});
var Lk = le, jk = fr.onFreeze;
yn("preventExtensions", function(t) {
  return function(n) {
    return t && Lk(n) ? t(jk(n)) : n;
  };
});
var Bk = le;
yn("isFrozen", function(t) {
  return function(n) {
    return Bk(n) ? t ? t(n) : !1 : !0;
  };
});
var zk = le;
yn("isSealed", function(t) {
  return function(n) {
    return zk(n) ? t ? t(n) : !1 : !0;
  };
});
var Vk = le;
yn("isExtensible", function(t) {
  return function(n) {
    return Vk(n) ? t ? t(n) : !0 : !1;
  };
});
var Wk = Re, tv = ni, Hk = ps, Uk = Zi, Gk = pt, qk = fs, Ds = Object.assign, Yw = !Ds || ae(function() {
  var t = {}, e = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
  return t[n] = 7, r.split("").forEach(function(i) {
    e[i] = i;
  }), Ds({}, t)[n] != 7 || Object.keys(Ds({}, e)).join("") != r;
}) ? function(e, n) {
  for (var r = Gk(e), i = arguments.length, o = 1, s = Hk.f, a = Uk.f; i > o; )
    for (var l = qk(arguments[o++]), c = s ? tv(l).concat(s(l)) : tv(l), u = c.length, f = 0, p; u > f; )
      p = c[f++], (!Wk || a.call(l, p)) && (r[p] = l[p]);
  return r;
} : Ds, Fc = $;
Fc(Fc.S + Fc.F, "Object", { assign: Yw });
var Zw = Object.is || function(e, n) {
  return e === n ? e !== 0 || 1 / e === 1 / n : e != e && n != n;
}, nv = $;
nv(nv.S, "Object", { is: Zw });
var Jk = le, Kk = ce, rv = function(t, e) {
  if (Kk(t), !Jk(e) && e !== null)
    throw TypeError(e + ": can't set as prototype!");
}, Zd = {
  set: Object.setPrototypeOf || ("__proto__" in {} ? (
    // eslint-disable-line
    function(t, e, n) {
      try {
        n = vn(Function.call, en.f(Object.prototype, "__proto__").set, 2), n(t, []), e = !(t instanceof Array);
      } catch {
        e = !0;
      }
      return function(i, o) {
        return rv(i, o), e ? i.__proto__ = o : n(i, o), i;
      };
    }({}, !1)
  ) : void 0),
  check: rv
}, iv = $;
iv(iv.S, "Object", { setPrototypeOf: Zd.set });
var wp = Rn, Xk = Se("toStringTag"), Yk = wp(function() {
  return arguments;
}()) == "Arguments", Zk = function(t, e) {
  try {
    return t[e];
  } catch {
  }
}, ms = function(t) {
  var e, n, r;
  return t === void 0 ? "Undefined" : t === null ? "Null" : typeof (n = Zk(e = Object(t), Xk)) == "string" ? n : Yk ? wp(e) : (r = wp(e)) == "Object" && typeof e.callee == "function" ? "Arguments" : r;
}, Qk = ms, Qw = {};
Qw[Se("toStringTag")] = "z";
Qw + "" != "[object z]" && _t(Object.prototype, "toString", function() {
  return "[object " + Qk(this) + "]";
}, !0);
var eS = function(t, e, n) {
  var r = n === void 0;
  switch (e.length) {
    case 0:
      return r ? t() : t.call(n);
    case 1:
      return r ? t(e[0]) : t.call(n, e[0]);
    case 2:
      return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
    case 3:
      return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
    case 4:
      return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);
  }
  return t.apply(n, e);
}, eN = mn, tN = le, nN = eS, ov = [].slice, Lc = {}, rN = function(t, e, n) {
  if (!(e in Lc)) {
    for (var r = [], i = 0; i < e; i++)
      r[i] = "a[" + i + "]";
    Lc[e] = Function("F,a", "return new F(" + r.join(",") + ")");
  }
  return Lc[e](t, n);
}, tS = Function.bind || function(e) {
  var n = eN(this), r = ov.call(arguments, 1), i = function() {
    var o = r.concat(ov.call(arguments));
    return this instanceof i ? rN(n, o.length, o) : nN(n, o, e);
  };
  return tN(n.prototype) && (i.prototype = n.prototype), i;
}, sv = $;
sv(sv.P, "Function", { bind: tS });
var iN = Te.f, av = Function.prototype, oN = /^\s*function ([^ (]*)/, lv = "name";
lv in av || Re && iN(av, lv, {
  configurable: !0,
  get: function() {
    try {
      return ("" + this).match(oN)[1];
    } catch {
      return "";
    }
  }
});
var cv = le, sN = ii, uv = Se("hasInstance"), fv = Function.prototype;
uv in fv || Te.f(fv, uv, { value: function(t) {
  if (typeof this != "function" || !cv(t))
    return !1;
  if (!cv(this.prototype))
    return t instanceof this;
  for (; t = sN(t); )
    if (this.prototype === t)
      return !0;
  return !1;
} });
var Qd = `	
\v\f\r   ᠎             　\u2028\u2029\uFEFF`, jc = $, aN = Fn, lN = ae, Sp = Qd, Ba = "[" + Sp + "]", pv = "​", cN = RegExp("^" + Ba + Ba + "*"), uN = RegExp(Ba + Ba + "*$"), nS = function(t, e, n) {
  var r = {}, i = lN(function() {
    return !!Sp[t]() || pv[t]() != pv;
  }), o = r[t] = i ? e(fN) : Sp[t];
  n && (r[n] = o), jc(jc.P + jc.F * i, "String", r);
}, fN = nS.trim = function(t, e) {
  return t = String(aN(t)), e & 1 && (t = t.replace(cN, "")), e & 2 && (t = t.replace(uN, "")), t;
}, eo = nS, As = se.parseInt, pN = eo.trim, dv = Qd, dN = /^[-+]?0[xX]/, rS = As(dv + "08") !== 8 || As(dv + "0x16") !== 22 ? function(e, n) {
  var r = pN(String(e), 3);
  return As(r, n >>> 0 || (dN.test(r) ? 16 : 10));
} : As, Bc = $, hv = rS;
Bc(Bc.G + Bc.F * (parseInt != hv), { parseInt: hv });
var zc = se.parseFloat, hN = eo.trim, iS = 1 / zc(Qd + "-0") !== -1 / 0 ? function(e) {
  var n = hN(String(e), 3), r = zc(n);
  return r === 0 && n.charAt(0) == "-" ? -0 : r;
} : zc, Vc = $, mv = iS;
Vc(Vc.G + Vc.F * (parseFloat != mv), { parseFloat: mv });
var mN = le, vv = Zd.set, eh = function(t, e, n) {
  var r = e.constructor, i;
  return r !== n && typeof r == "function" && (i = r.prototype) !== n.prototype && mN(i) && vv && vv(t, i), t;
}, oS = se, gv = Bt, sS = Rn, vN = eh, gN = ur, yN = ae, bN = pr.f, wN = en.f, SN = Te.f, xN = eo.trim, za = "Number", St = oS[za], Rs = St, Na = St.prototype, ON = sS(ri(Na)) == za, EN = "trim" in String.prototype, yv = function(t) {
  var e = gN(t, !1);
  if (typeof e == "string" && e.length > 2) {
    e = EN ? e.trim() : xN(e, 3);
    var n = e.charCodeAt(0), r, i, o;
    if (n === 43 || n === 45) {
      if (r = e.charCodeAt(2), r === 88 || r === 120)
        return NaN;
    } else if (n === 48) {
      switch (e.charCodeAt(1)) {
        case 66:
        case 98:
          i = 2, o = 49;
          break;
        case 79:
        case 111:
          i = 8, o = 55;
          break;
        default:
          return +e;
      }
      for (var s = e.slice(2), a = 0, l = s.length, c; a < l; a++)
        if (c = s.charCodeAt(a), c < 48 || c > o)
          return NaN;
      return parseInt(s, i);
    }
  }
  return +e;
};
if (!St(" 0o1") || !St("0b1") || St("+0x1")) {
  St = function(e) {
    var n = arguments.length < 1 ? 0 : e, r = this;
    return r instanceof St && (ON ? yN(function() {
      Na.valueOf.call(r);
    }) : sS(r) != za) ? vN(new Rs(yv(n)), r, St) : yv(n);
  };
  for (var bv = Re ? bN(Rs) : (
    // ES3:
    "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(",")
  ), Wc = 0, Fs; bv.length > Wc; Wc++)
    gv(Rs, Fs = bv[Wc]) && !gv(St, Fs) && SN(St, Fs, wN(Rs, Fs));
  St.prototype = Na, Na.constructor = St, _t(oS, za, St);
}
var CN = Rn, aS = function(t, e) {
  if (typeof t != "number" && CN(t) != "Number")
    throw TypeError(e);
  return +t;
}, _N = gn, kN = Fn, th = function(e) {
  var n = String(kN(this)), r = "", i = _N(e);
  if (i < 0 || i == 1 / 0)
    throw RangeError("Count can't be negative");
  for (; i > 0; (i >>>= 1) && (n += n))
    i & 1 && (r += n);
  return r;
}, Hc = $, NN = gn, MN = aS, xp = th, wv = 1 .toFixed, lS = Math.floor, Li = [0, 0, 0, 0, 0, 0], Sv = "Number.toFixed: incorrect invocation!", Ma = "0", hi = function(t, e) {
  for (var n = -1, r = e; ++n < 6; )
    r += t * Li[n], Li[n] = r % 1e7, r = lS(r / 1e7);
}, Uc = function(t) {
  for (var e = 6, n = 0; --e >= 0; )
    n += Li[e], Li[e] = lS(n / t), n = n % t * 1e7;
}, xv = function() {
  for (var t = 6, e = ""; --t >= 0; )
    if (e !== "" || t === 0 || Li[t] !== 0) {
      var n = String(Li[t]);
      e = e === "" ? n : e + xp.call(Ma, 7 - n.length) + n;
    }
  return e;
}, _i = function(t, e, n) {
  return e === 0 ? n : e % 2 === 1 ? _i(t, e - 1, n * t) : _i(t * t, e / 2, n);
}, TN = function(t) {
  for (var e = 0, n = t; n >= 4096; )
    e += 12, n /= 4096;
  for (; n >= 2; )
    e += 1, n /= 2;
  return e;
};
Hc(Hc.P + Hc.F * (!!wv && (8e-5.toFixed(3) !== "0.000" || 0.9.toFixed(0) !== "1" || 1.255.toFixed(2) !== "1.25" || 1000000000000000100 .toFixed(0) !== "1000000000000000128") || !ae(function() {
  wv.call({});
})), "Number", {
  toFixed: function(e) {
    var n = MN(this, Sv), r = NN(e), i = "", o = Ma, s, a, l, c;
    if (r < 0 || r > 20)
      throw RangeError(Sv);
    if (n != n)
      return "NaN";
    if (n <= -1e21 || n >= 1e21)
      return String(n);
    if (n < 0 && (i = "-", n = -n), n > 1e-21)
      if (s = TN(n * _i(2, 69, 1)) - 69, a = s < 0 ? n * _i(2, -s, 1) : n / _i(2, s, 1), a *= 4503599627370496, s = 52 - s, s > 0) {
        for (hi(0, a), l = r; l >= 7; )
          hi(1e7, 0), l -= 7;
        for (hi(_i(10, l, 1), 0), l = s - 1; l >= 23; )
          Uc(1 << 23), l -= 23;
        Uc(1 << l), hi(1, 1), Uc(2), o = xv();
      } else
        hi(0, a), hi(1 << -s, 0), o = xv() + xp.call(Ma, r);
    return r > 0 ? (c = o.length, o = i + (c <= r ? "0." + xp.call(Ma, r - c) + o : o.slice(0, c - r) + "." + o.slice(c - r))) : o = i + o, o;
  }
});
var Gc = $, Ov = ae, $N = aS, Ls = 1 .toPrecision;
Gc(Gc.P + Gc.F * (Ov(function() {
  return Ls.call(1, void 0) !== "1";
}) || !Ov(function() {
  Ls.call({});
})), "Number", {
  toPrecision: function(e) {
    var n = $N(this, "Number#toPrecision: incorrect invocation!");
    return e === void 0 ? Ls.call(n) : Ls.call(n, e);
  }
});
var Ev = $;
Ev(Ev.S, "Number", { EPSILON: Math.pow(2, -52) });
var Cv = $, IN = se.isFinite;
Cv(Cv.S, "Number", {
  isFinite: function(e) {
    return typeof e == "number" && IN(e);
  }
});
var PN = le, DN = Math.floor, cS = function(e) {
  return !PN(e) && isFinite(e) && DN(e) === e;
}, _v = $;
_v(_v.S, "Number", { isInteger: cS });
var kv = $;
kv(kv.S, "Number", {
  isNaN: function(e) {
    return e != e;
  }
});
var Nv = $, AN = cS, RN = Math.abs;
Nv(Nv.S, "Number", {
  isSafeInteger: function(e) {
    return AN(e) && RN(e) <= 9007199254740991;
  }
});
var Mv = $;
Mv(Mv.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
var Tv = $;
Tv(Tv.S, "Number", { MIN_SAFE_INTEGER: -9007199254740991 });
var qc = $, $v = iS;
qc(qc.S + qc.F * (Number.parseFloat != $v), "Number", { parseFloat: $v });
var Jc = $, Iv = rS;
Jc(Jc.S + Jc.F * (Number.parseInt != Iv), "Number", { parseInt: Iv });
var uS = Math.log1p || function(e) {
  return (e = +e) > -1e-8 && e < 1e-8 ? e - e * e / 2 : Math.log(1 + e);
}, Kc = $, FN = uS, Pv = Math.sqrt, Xc = Math.acosh;
Kc(Kc.S + Kc.F * !(Xc && Math.floor(Xc(Number.MAX_VALUE)) == 710 && Xc(1 / 0) == 1 / 0), "Math", {
  acosh: function(e) {
    return (e = +e) < 1 ? NaN : e > 9490626562425156e-8 ? Math.log(e) + Math.LN2 : FN(e - 1 + Pv(e - 1) * Pv(e + 1));
  }
});
var Yc = $, Dv = Math.asinh;
function fS(t) {
  return !isFinite(t = +t) || t == 0 ? t : t < 0 ? -fS(-t) : Math.log(t + Math.sqrt(t * t + 1));
}
Yc(Yc.S + Yc.F * !(Dv && 1 / Dv(0) > 0), "Math", { asinh: fS });
var Zc = $, Av = Math.atanh;
Zc(Zc.S + Zc.F * !(Av && 1 / Av(-0) < 0), "Math", {
  atanh: function(e) {
    return (e = +e) == 0 ? e : Math.log((1 + e) / (1 - e)) / 2;
  }
});
var nh = Math.sign || function(e) {
  return (e = +e) == 0 || e != e ? e : e < 0 ? -1 : 1;
}, Rv = $, LN = nh;
Rv(Rv.S, "Math", {
  cbrt: function(e) {
    return LN(e = +e) * Math.pow(Math.abs(e), 1 / 3);
  }
});
var Fv = $;
Fv(Fv.S, "Math", {
  clz32: function(e) {
    return (e >>>= 0) ? 31 - Math.floor(Math.log(e + 0.5) * Math.LOG2E) : 32;
  }
});
var Lv = $, jv = Math.exp;
Lv(Lv.S, "Math", {
  cosh: function(e) {
    return (jv(e = +e) + jv(-e)) / 2;
  }
});
var mo = Math.expm1, rh = !mo || mo(10) > 22025.465794806718 || mo(10) < 22025.465794806718 || mo(-2e-17) != -2e-17 ? function(e) {
  return (e = +e) == 0 ? e : e > -1e-6 && e < 1e-6 ? e + e * e / 2 : Math.exp(e) - 1;
} : mo, Qc = $, Bv = rh;
Qc(Qc.S + Qc.F * (Bv != Math.expm1), "Math", { expm1: Bv });
var eu, zv;
function jN() {
  if (zv)
    return eu;
  zv = 1;
  var t = nh, e = Math.pow, n = e(2, -52), r = e(2, -23), i = e(2, 127) * (2 - r), o = e(2, -126), s = function(a) {
    return a + 1 / n - 1 / n;
  };
  return eu = Math.fround || function(l) {
    var c = Math.abs(l), u = t(l), f, p;
    return c < o ? u * s(c / o / r) * o * r : (f = (1 + r / n) * c, p = f - (f - c), p > i || p != p ? u * (1 / 0) : u * p);
  }, eu;
}
var Vv = $;
Vv(Vv.S, "Math", { fround: jN() });
var Wv = $, BN = Math.abs;
Wv(Wv.S, "Math", {
  hypot: function(e, n) {
    for (var r = 0, i = 0, o = arguments.length, s = 0, a, l; i < o; )
      a = BN(arguments[i++]), s < a ? (l = s / a, r = r * l * l + 1, s = a) : a > 0 ? (l = a / s, r += l * l) : r += a;
    return s === 1 / 0 ? 1 / 0 : s * Math.sqrt(r);
  }
});
var tu = $, Hv = Math.imul;
tu(tu.S + tu.F * ae(function() {
  return Hv(4294967295, 5) != -5 || Hv.length != 2;
}), "Math", {
  imul: function(e, n) {
    var r = 65535, i = +e, o = +n, s = r & i, a = r & o;
    return 0 | s * a + ((r & i >>> 16) * a + s * (r & o >>> 16) << 16 >>> 0);
  }
});
var Uv = $;
Uv(Uv.S, "Math", {
  log10: function(e) {
    return Math.log(e) * Math.LOG10E;
  }
});
var Gv = $;
Gv(Gv.S, "Math", { log1p: uS });
var qv = $;
qv(qv.S, "Math", {
  log2: function(e) {
    return Math.log(e) / Math.LN2;
  }
});
var Jv = $;
Jv(Jv.S, "Math", { sign: nh });
var nu = $, Kv = rh, Xv = Math.exp;
nu(nu.S + nu.F * ae(function() {
  return !Math.sinh(-2e-17) != -2e-17;
}), "Math", {
  sinh: function(e) {
    return Math.abs(e = +e) < 1 ? (Kv(e) - Kv(-e)) / 2 : (Xv(e - 1) - Xv(-e - 1)) * (Math.E / 2);
  }
});
var Yv = $, Zv = rh, Qv = Math.exp;
Yv(Yv.S, "Math", {
  tanh: function(e) {
    var n = Zv(e = +e), r = Zv(-e);
    return n == 1 / 0 ? 1 : r == 1 / 0 ? -1 : (n - r) / (Qv(e) + Qv(-e));
  }
});
var eg = $;
eg(eg.S, "Math", {
  trunc: function(e) {
    return (e > 0 ? Math.floor : Math.ceil)(e);
  }
});
var ru = $, zN = ti, tg = String.fromCharCode, ng = String.fromCodePoint;
ru(ru.S + ru.F * (!!ng && ng.length != 1), "String", {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function(e) {
    for (var n = [], r = arguments.length, i = 0, o; r > i; ) {
      if (o = +arguments[i++], zN(o, 1114111) !== o)
        throw RangeError(o + " is not a valid code point");
      n.push(
        o < 65536 ? tg(o) : tg(((o -= 65536) >> 10) + 55296, o % 1024 + 56320)
      );
    }
    return n.join("");
  }
});
var rg = $, VN = Vt, WN = Ee;
rg(rg.S, "String", {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function(e) {
    for (var n = VN(e.raw), r = WN(n.length), i = arguments.length, o = [], s = 0; r > s; )
      o.push(String(n[s++])), s < i && o.push(String(arguments[s]));
    return o.join("");
  }
});
eo("trim", function(t) {
  return function() {
    return t(this, 3);
  };
});
var HN = gn, UN = Fn, ih = function(t) {
  return function(e, n) {
    var r = String(UN(e)), i = HN(n), o = r.length, s, a;
    return i < 0 || i >= o ? t ? "" : void 0 : (s = r.charCodeAt(i), s < 55296 || s > 56319 || i + 1 === o || (a = r.charCodeAt(i + 1)) < 56320 || a > 57343 ? t ? r.charAt(i) : s : t ? r.slice(i, i + 2) : (s - 55296 << 10) + (a - 56320) + 65536);
  };
}, to = {}, GN = ri, qN = Qr, JN = Yi, pS = {};
zt(pS, Se("iterator"), function() {
  return this;
});
var dS = function(t, e, n) {
  t.prototype = GN(pS, { next: qN(1, n) }), JN(t, e + " Iterator");
}, iu = $, KN = _t, ig = zt, og = to, XN = dS, YN = Yi, ZN = ii, vo = Se("iterator"), ou = !([].keys && "next" in [].keys()), QN = "@@iterator", sg = "keys", js = "values", ag = function() {
  return this;
}, oh = function(t, e, n, r, i, o, s) {
  XN(n, e, r);
  var a = function(O) {
    if (!ou && O in f)
      return f[O];
    switch (O) {
      case sg:
        return function() {
          return new n(this, O);
        };
      case js:
        return function() {
          return new n(this, O);
        };
    }
    return function() {
      return new n(this, O);
    };
  }, l = e + " Iterator", c = i == js, u = !1, f = t.prototype, p = f[vo] || f[QN] || i && f[i], d = p || a(i), h = i ? c ? a("entries") : d : void 0, m = e == "Array" && f.entries || p, v, y, C;
  if (m && (C = ZN(m.call(new t())), C !== Object.prototype && C.next && (YN(C, l, !0), typeof C[vo] != "function" && ig(C, vo, ag))), c && p && p.name !== js && (u = !0, d = function() {
    return p.call(this);
  }), (ou || u || !f[vo]) && ig(f, vo, d), og[e] = d, og[l] = ag, i)
    if (v = {
      values: c ? d : a(js),
      keys: o ? d : a(sg),
      entries: h
    }, s)
      for (y in v)
        y in f || KN(f, y, v[y]);
    else
      iu(iu.P + iu.F * (ou || u), e, v);
  return v;
}, eM = ih(!0);
oh(String, "String", function(t) {
  this._t = String(t), this._i = 0;
}, function() {
  var t = this._t, e = this._i, n;
  return e >= t.length ? { value: void 0, done: !0 } : (n = eM(t, e), this._i += n.length, { value: n, done: !1 });
});
var lg = $, tM = ih(!1);
lg(lg.P, "String", {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function(e) {
    return tM(this, e);
  }
});
var nM = le, rM = Rn, iM = Se("match"), sh = function(t) {
  var e;
  return nM(t) && ((e = t[iM]) !== void 0 ? !!e : rM(t) == "RegExp");
}, oM = sh, sM = Fn, ah = function(t, e, n) {
  if (oM(e))
    throw TypeError("String#" + n + " doesn't accept regex!");
  return String(sM(t));
}, su, cg;
function lh() {
  if (cg)
    return su;
  cg = 1;
  var t = Se("match");
  return su = function(e) {
    var n = /./;
    try {
      "/./"[e](n);
    } catch {
      try {
        return n[t] = !1, !"/./"[e](n);
      } catch {
      }
    }
    return !0;
  }, su;
}
var au = $, ug = Ee, aM = ah, Op = "endsWith", fg = ""[Op];
au(au.P + au.F * lh()(Op), "String", {
  endsWith: function(e) {
    var n = aM(this, e, Op), r = arguments.length > 1 ? arguments[1] : void 0, i = ug(n.length), o = r === void 0 ? i : Math.min(ug(r), i), s = String(e);
    return fg ? fg.call(n, s, o) : n.slice(o - s.length, o) === s;
  }
});
var lu = $, lM = ah, pg = "includes";
lu(lu.P + lu.F * lh()(pg), "String", {
  includes: function(e) {
    return !!~lM(this, e, pg).indexOf(e, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var dg = $;
dg(dg.P, "String", {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: th
});
var cu = $, cM = Ee, uM = ah, Ep = "startsWith", hg = ""[Ep];
cu(cu.P + cu.F * lh()(Ep), "String", {
  startsWith: function(e) {
    var n = uM(this, e, Ep), r = cM(Math.min(arguments.length > 1 ? arguments[1] : void 0, n.length)), i = String(e);
    return hg ? hg.call(n, i, r) : n.slice(r, r + i.length) === i;
  }
});
var uu = $, fM = ae, pM = Fn, dM = /"/g, hM = function(t, e, n, r) {
  var i = String(pM(t)), o = "<" + e;
  return n !== "" && (o += " " + n + '="' + String(r).replace(dM, "&quot;") + '"'), o + ">" + i + "</" + e + ">";
}, kt = function(t, e) {
  var n = {};
  n[t] = e(hM), uu(uu.P + uu.F * fM(function() {
    var r = ""[t]('"');
    return r !== r.toLowerCase() || r.split('"').length > 3;
  }), "String", n);
};
kt("anchor", function(t) {
  return function(n) {
    return t(this, "a", "name", n);
  };
});
kt("big", function(t) {
  return function() {
    return t(this, "big", "", "");
  };
});
kt("blink", function(t) {
  return function() {
    return t(this, "blink", "", "");
  };
});
kt("bold", function(t) {
  return function() {
    return t(this, "b", "", "");
  };
});
kt("fixed", function(t) {
  return function() {
    return t(this, "tt", "", "");
  };
});
kt("fontcolor", function(t) {
  return function(n) {
    return t(this, "font", "color", n);
  };
});
kt("fontsize", function(t) {
  return function(n) {
    return t(this, "font", "size", n);
  };
});
kt("italics", function(t) {
  return function() {
    return t(this, "i", "", "");
  };
});
kt("link", function(t) {
  return function(n) {
    return t(this, "a", "href", n);
  };
});
kt("small", function(t) {
  return function() {
    return t(this, "small", "", "");
  };
});
kt("strike", function(t) {
  return function() {
    return t(this, "strike", "", "");
  };
});
kt("sub", function(t) {
  return function() {
    return t(this, "sub", "", "");
  };
});
kt("sup", function(t) {
  return function() {
    return t(this, "sup", "", "");
  };
});
var mg = $;
mg(mg.S, "Date", { now: function() {
  return (/* @__PURE__ */ new Date()).getTime();
} });
var fu = $, mM = pt, vM = ur;
fu(fu.P + fu.F * ae(function() {
  return (/* @__PURE__ */ new Date(NaN)).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function() {
    return 1;
  } }) !== 1;
}), "Date", {
  // eslint-disable-next-line no-unused-vars
  toJSON: function(e) {
    var n = mM(this), r = vM(n);
    return typeof r == "number" && !isFinite(r) ? null : n.toISOString();
  }
});
var vg = ae, gM = Date.prototype.getTime, pu = Date.prototype.toISOString, mi = function(t) {
  return t > 9 ? t : "0" + t;
}, yM = vg(function() {
  return pu.call(new Date(-5e13 - 1)) != "0385-07-25T07:06:39.999Z";
}) || !vg(function() {
  pu.call(/* @__PURE__ */ new Date(NaN));
}) ? function() {
  if (!isFinite(gM.call(this)))
    throw RangeError("Invalid time value");
  var e = this, n = e.getUTCFullYear(), r = e.getUTCMilliseconds(), i = n < 0 ? "-" : n > 9999 ? "+" : "";
  return i + ("00000" + Math.abs(n)).slice(i ? -6 : -4) + "-" + mi(e.getUTCMonth() + 1) + "-" + mi(e.getUTCDate()) + "T" + mi(e.getUTCHours()) + ":" + mi(e.getUTCMinutes()) + ":" + mi(e.getUTCSeconds()) + "." + (r > 99 ? r : "0" + mi(r)) + "Z";
} : pu, du = $, gg = yM;
du(du.P + du.F * (Date.prototype.toISOString !== gg), "Date", {
  toISOString: gg
});
var ch = Date.prototype, yg = "Invalid Date", hS = "toString", bM = ch[hS], wM = ch.getTime;
/* @__PURE__ */ new Date(NaN) + "" != yg && _t(ch, hS, function() {
  var e = wM.call(this);
  return e === e ? bM.call(this) : yg;
});
var hu, bg;
function SM() {
  if (bg)
    return hu;
  bg = 1;
  var t = ce, e = ur, n = "number";
  return hu = function(r) {
    if (r !== "string" && r !== n && r !== "default")
      throw TypeError("Incorrect hint");
    return e(t(this), r != n);
  }, hu;
}
var wg = Se("toPrimitive"), Sg = Date.prototype;
wg in Sg || zt(Sg, wg, SM());
var xg = $;
xg(xg.S, "Array", { isArray: kl });
var Og = ce, mS = function(t, e, n, r) {
  try {
    return r ? e(Og(n)[0], n[1]) : e(n);
  } catch (o) {
    var i = t.return;
    throw i !== void 0 && Og(i.call(t)), o;
  }
}, xM = to, OM = Se("iterator"), EM = Array.prototype, uh = function(t) {
  return t !== void 0 && (xM.Array === t || EM[OM] === t);
}, CM = Te, _M = Qr, fh = function(t, e, n) {
  e in t ? CM.f(t, e, _M(0, n)) : t[e] = n;
}, kM = ms, NM = Se("iterator"), MM = to, ph = We.getIteratorMethod = function(t) {
  if (t != null)
    return t[NM] || t["@@iterator"] || MM[kM(t)];
}, mu, Eg;
function Il() {
  if (Eg)
    return mu;
  Eg = 1;
  var t = Se("iterator"), e = !1;
  try {
    var n = [7][t]();
    n.return = function() {
      e = !0;
    }, Array.from(n, function() {
      throw 2;
    });
  } catch {
  }
  return mu = function(r, i) {
    if (!i && !e)
      return !1;
    var o = !1;
    try {
      var s = [7], a = s[t]();
      a.next = function() {
        return { done: o = !0 };
      }, s[t] = function() {
        return a;
      }, r(s);
    } catch {
    }
    return o;
  }, mu;
}
var TM = vn, vu = $, $M = pt, IM = mS, PM = uh, DM = Ee, Cg = fh, AM = ph;
vu(vu.S + vu.F * !Il()(function(t) {
  Array.from(t);
}), "Array", {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function(e) {
    var n = $M(e), r = typeof this == "function" ? this : Array, i = arguments.length, o = i > 1 ? arguments[1] : void 0, s = o !== void 0, a = 0, l = AM(n), c, u, f, p;
    if (s && (o = TM(o, i > 2 ? arguments[2] : void 0, 2)), l != null && !(r == Array && PM(l)))
      for (p = l.call(n), u = new r(); !(f = p.next()).done; a++)
        Cg(u, a, s ? IM(p, o, [f.value, a], !0) : f.value);
    else
      for (c = DM(n.length), u = new r(c); c > a; a++)
        Cg(u, a, s ? o(n[a], a) : n[a]);
    return u.length = a, u;
  }
});
var gu = $, RM = fh;
gu(gu.S + gu.F * ae(function() {
  function t() {
  }
  return !(Array.of.call(t) instanceof t);
}), "Array", {
  // 22.1.2.3 Array.of( ...items)
  of: function() {
    for (var e = 0, n = arguments.length, r = new (typeof this == "function" ? this : Array)(n); n > e; )
      RM(r, e, arguments[e++]);
    return r.length = n, r;
  }
});
var FM = ae, tn = function(t, e) {
  return !!t && FM(function() {
    e ? t.call(null, function() {
    }, 1) : t.call(null);
  });
}, yu = $, LM = Vt, _g = [].join;
yu(yu.P + yu.F * (fs != Object || !tn(_g)), "Array", {
  join: function(e) {
    return _g.call(LM(this), e === void 0 ? "," : e);
  }
});
var bu = $, kg = Gd, jM = Rn, Ng = ti, Mg = Ee, Tg = [].slice;
bu(bu.P + bu.F * ae(function() {
  kg && Tg.call(kg);
}), "Array", {
  slice: function(e, n) {
    var r = Mg(this.length), i = jM(this);
    if (n = n === void 0 ? r : n, i == "Array")
      return Tg.call(this, e, n);
    for (var o = Ng(e, r), s = Ng(n, r), a = Mg(s - o), l = new Array(a), c = 0; c < a; c++)
      l[c] = i == "String" ? this.charAt(o + c) : this[o + c];
    return l;
  }
});
var wu = $, BM = mn, $g = pt, Ig = ae, Su = [].sort, Pg = [1, 2, 3];
wu(wu.P + wu.F * (Ig(function() {
  Pg.sort(void 0);
}) || !Ig(function() {
  Pg.sort(null);
}) || !tn(Su)), "Array", {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function(e) {
    return e === void 0 ? Su.call($g(this)) : Su.call($g(this), BM(e));
  }
});
var zM = le, Dg = kl, VM = Se("species"), WM = function(t) {
  var e;
  return Dg(t) && (e = t.constructor, typeof e == "function" && (e === Array || Dg(e.prototype)) && (e = void 0), zM(e) && (e = e[VM], e === null && (e = void 0))), e === void 0 ? Array : e;
}, HM = WM, vS = function(t, e) {
  return new (HM(t))(e);
}, UM = vn, GM = fs, qM = pt, JM = Ee, KM = vS, bn = function(t, e) {
  var n = t == 1, r = t == 2, i = t == 3, o = t == 4, s = t == 6, a = t == 5 || s, l = e || KM;
  return function(c, u, f) {
    for (var p = qM(c), d = GM(p), h = UM(u, f, 3), m = JM(d.length), v = 0, y = n ? l(c, m) : r ? l(c, 0) : void 0, C, O; m > v; v++)
      if ((a || v in d) && (C = d[v], O = h(C, v, p), t)) {
        if (n)
          y[v] = O;
        else if (O)
          switch (t) {
            case 3:
              return !0;
            case 5:
              return C;
            case 6:
              return v;
            case 2:
              y.push(C);
          }
        else if (o)
          return !1;
      }
    return s ? -1 : i || o ? o : y;
  };
}, xu = $, XM = bn(0), YM = tn([].forEach, !0);
xu(xu.P + xu.F * !YM, "Array", {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function(e) {
    return XM(this, e, arguments[1]);
  }
});
var Ou = $, ZM = bn(1);
Ou(Ou.P + Ou.F * !tn([].map, !0), "Array", {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function(e) {
    return ZM(this, e, arguments[1]);
  }
});
var Eu = $, QM = bn(2);
Eu(Eu.P + Eu.F * !tn([].filter, !0), "Array", {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function(e) {
    return QM(this, e, arguments[1]);
  }
});
var Cu = $, eT = bn(3);
Cu(Cu.P + Cu.F * !tn([].some, !0), "Array", {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function(e) {
    return eT(this, e, arguments[1]);
  }
});
var _u = $, tT = bn(4);
_u(_u.P + _u.F * !tn([].every, !0), "Array", {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function(e) {
    return tT(this, e, arguments[1]);
  }
});
var nT = mn, rT = pt, iT = fs, oT = Ee, gS = function(t, e, n, r, i) {
  nT(e);
  var o = rT(t), s = iT(o), a = oT(o.length), l = i ? a - 1 : 0, c = i ? -1 : 1;
  if (n < 2)
    for (; ; ) {
      if (l in s) {
        r = s[l], l += c;
        break;
      }
      if (l += c, i ? l < 0 : a <= l)
        throw TypeError("Reduce of empty array with no initial value");
    }
  for (; i ? l >= 0 : a > l; l += c)
    l in s && (r = e(r, s[l], l, o));
  return r;
}, ku = $, sT = gS;
ku(ku.P + ku.F * !tn([].reduce, !0), "Array", {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function(e) {
    return sT(this, e, arguments.length, arguments[1], !1);
  }
});
var Nu = $, aT = gS;
Nu(Nu.P + Nu.F * !tn([].reduceRight, !0), "Array", {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function(e) {
    return aT(this, e, arguments.length, arguments[1], !0);
  }
});
var Mu = $, lT = _l(!1), Cp = [].indexOf, Ag = !!Cp && 1 / [1].indexOf(1, -0) < 0;
Mu(Mu.P + Mu.F * (Ag || !tn(Cp)), "Array", {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function(e) {
    return Ag ? Cp.apply(this, arguments) || 0 : lT(this, e, arguments[1]);
  }
});
var Tu = $, cT = Vt, uT = gn, fT = Ee, _p = [].lastIndexOf, Rg = !!_p && 1 / [1].lastIndexOf(1, -0) < 0;
Tu(Tu.P + Tu.F * (Rg || !tn(_p)), "Array", {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function(e) {
    if (Rg)
      return _p.apply(this, arguments) || 0;
    var n = cT(this), r = fT(n.length), i = r - 1;
    for (arguments.length > 1 && (i = Math.min(i, uT(arguments[1]))), i < 0 && (i = r + i); i >= 0; i--)
      if (i in n && n[i] === e)
        return i || 0;
    return -1;
  }
});
var $u, Fg;
function yS() {
  if (Fg)
    return $u;
  Fg = 1;
  var t = pt, e = ti, n = Ee;
  return $u = [].copyWithin || function(i, o) {
    var s = t(this), a = n(s.length), l = e(i, a), c = e(o, a), u = arguments.length > 2 ? arguments[2] : void 0, f = Math.min((u === void 0 ? a : e(u, a)) - c, a - l), p = 1;
    for (c < l && l < c + f && (p = -1, c += f - 1, l += f - 1); f-- > 0; )
      c in s ? s[l] = s[c] : delete s[l], l += p, c += p;
    return s;
  }, $u;
}
var kp = Se("unscopables"), Np = Array.prototype;
Np[kp] == null && zt(Np, kp, {});
var oi = function(t) {
  Np[kp][t] = !0;
}, Lg = $;
Lg(Lg.P, "Array", { copyWithin: yS() });
oi("copyWithin");
var Iu, jg;
function dh() {
  if (jg)
    return Iu;
  jg = 1;
  var t = pt, e = ti, n = Ee;
  return Iu = function(i) {
    for (var o = t(this), s = n(o.length), a = arguments.length, l = e(a > 1 ? arguments[1] : void 0, s), c = a > 2 ? arguments[2] : void 0, u = c === void 0 ? s : e(c, s); u > l; )
      o[l++] = i;
    return o;
  }, Iu;
}
var Bg = $;
Bg(Bg.P, "Array", { fill: dh() });
oi("fill");
var Pu = $, pT = bn(5), Mp = "find", bS = !0;
Mp in [] && Array(1)[Mp](function() {
  bS = !1;
});
Pu(Pu.P + Pu.F * bS, "Array", {
  find: function(e) {
    return pT(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});
oi(Mp);
var Du = $, dT = bn(6), Tp = "findIndex", wS = !0;
Tp in [] && Array(1)[Tp](function() {
  wS = !1;
});
Du(Du.P + Du.F * wS, "Array", {
  findIndex: function(e) {
    return dT(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});
oi(Tp);
var hT = se, mT = Te, vT = Re, zg = Se("species"), no = function(t) {
  var e = hT[t];
  vT && e && !e[zg] && mT.f(e, zg, {
    configurable: !0,
    get: function() {
      return this;
    }
  });
};
no("Array");
var SS = function(t, e) {
  return { value: e, done: !!t };
}, hh = oi, Bs = SS, Vg = to, gT = Vt, xS = oh(Array, "Array", function(t, e) {
  this._t = gT(t), this._i = 0, this._k = e;
}, function() {
  var t = this._t, e = this._k, n = this._i++;
  return !t || n >= t.length ? (this._t = void 0, Bs(1)) : e == "keys" ? Bs(0, n) : e == "values" ? Bs(0, t[n]) : Bs(0, [n, t[n]]);
}, "values");
Vg.Arguments = Vg.Array;
hh("keys");
hh("values");
hh("entries");
var yT = ce, Pl = function() {
  var t = yT(this), e = "";
  return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
}, OS = se, bT = eh, wT = Te.f, ST = pr.f, xT = sh, OT = Pl, Ye = OS.RegExp, go = Ye, Au = Ye.prototype, Ro = /a/g, Ru = /a/g, Wg = new Ye(Ro) !== Ro;
if (Re && (!Wg || ae(function() {
  return Ru[Se("match")] = !1, Ye(Ro) != Ro || Ye(Ru) == Ru || Ye(Ro, "i") != "/a/i";
}))) {
  Ye = function(e, n) {
    var r = this instanceof Ye, i = xT(e), o = n === void 0;
    return !r && i && e.constructor === Ye && o ? e : bT(
      Wg ? new go(i && !o ? e.source : e, n) : go((i = e instanceof Ye) ? e.source : e, i && o ? OT.call(e) : n),
      r ? this : Au,
      Ye
    );
  };
  for (var ET = function(t) {
    t in Ye || wT(Ye, t, {
      configurable: !0,
      get: function() {
        return go[t];
      },
      set: function(e) {
        go[t] = e;
      }
    });
  }, Hg = ST(go), Ug = 0; Hg.length > Ug; )
    ET(Hg[Ug++]);
  Au.constructor = Ye, Ye.prototype = Au, _t(OS, "RegExp", Ye);
}
no("RegExp");
var CT = Pl, Va = RegExp.prototype.exec, _T = String.prototype.replace, ES = Va, Wa = "lastIndex", $p = function() {
  var t = /a/, e = /b*/g;
  return Va.call(t, "a"), Va.call(e, "a"), t[Wa] !== 0 || e[Wa] !== 0;
}(), Ip = /()??/.exec("")[1] !== void 0, kT = $p || Ip;
kT && (ES = function(e) {
  var n = this, r, i, o, s;
  return Ip && (i = new RegExp("^" + n.source + "$(?!\\s)", CT.call(n))), $p && (r = n[Wa]), o = Va.call(n, e), $p && o && (n[Wa] = n.global ? o.index + o[0].length : r), Ip && o && o.length > 1 && _T.call(o[0], i, function() {
    for (s = 1; s < arguments.length - 2; s++)
      arguments[s] === void 0 && (o[s] = void 0);
  }), o;
});
var mh = ES, Gg = mh;
$({
  target: "RegExp",
  proto: !0,
  forced: Gg !== /./.exec
}, {
  exec: Gg
});
Re && /./g.flags != "g" && Te.f(RegExp.prototype, "flags", {
  configurable: !0,
  get: Pl
});
var NT = ce, MT = Pl, TT = Re, vh = "toString", Fu = /./[vh], qg = function(t) {
  _t(RegExp.prototype, vh, t, !0);
};
ae(function() {
  return Fu.call({ source: "a", flags: "b" }) != "/a/b";
}) ? qg(function() {
  var e = NT(this);
  return "/".concat(
    e.source,
    "/",
    "flags" in e ? e.flags : !TT && e instanceof RegExp ? MT.call(e) : void 0
  );
}) : Fu.name != vh && qg(function() {
  return Fu.call(this);
});
var $T = ih(!0), gh = function(t, e, n) {
  return e + (n ? $T(t, e).length : 1);
}, IT = ms, PT = RegExp.prototype.exec, Dl = function(t, e) {
  var n = t.exec;
  if (typeof n == "function") {
    var r = n.call(t, e);
    if (typeof r != "object")
      throw new TypeError("RegExp exec method returned something other than an Object or null");
    return r;
  }
  if (IT(t) !== "RegExp")
    throw new TypeError("RegExp#exec called on incompatible receiver");
  return PT.call(t, e);
}, DT = _t, AT = zt, Pp = ae, RT = Fn, CS = Se, FT = mh, LT = CS("species"), jT = !Pp(function() {
  var t = /./;
  return t.exec = function() {
    var e = [];
    return e.groups = { a: "7" }, e;
  }, "".replace(t, "$<a>") !== "7";
}), BT = function() {
  var t = /(?:)/, e = t.exec;
  t.exec = function() {
    return e.apply(this, arguments);
  };
  var n = "ab".split(t);
  return n.length === 2 && n[0] === "a" && n[1] === "b";
}(), Al = function(t, e, n) {
  var r = CS(t), i = !Pp(function() {
    var u = {};
    return u[r] = function() {
      return 7;
    }, ""[t](u) != 7;
  }), o = i ? !Pp(function() {
    var u = !1, f = /a/;
    return f.exec = function() {
      return u = !0, null;
    }, t === "split" && (f.constructor = {}, f.constructor[LT] = function() {
      return f;
    }), f[r](""), !u;
  }) : void 0;
  if (!i || !o || t === "replace" && !jT || t === "split" && !BT) {
    var s = /./[r], a = n(
      RT,
      r,
      ""[t],
      function(f, p, d, h, m) {
        return p.exec === FT ? i && !m ? { done: !0, value: s.call(p, d, h) } : { done: !0, value: f.call(d, p, h) } : { done: !1 };
      }
    ), l = a[0], c = a[1];
    DT(String.prototype, t, l), AT(
      RegExp.prototype,
      r,
      e == 2 ? function(u, f) {
        return c.call(u, this, f);
      } : function(u) {
        return c.call(u, this);
      }
    );
  }
}, zT = ce, VT = Ee, WT = gh, Jg = Dl;
Al("match", 1, function(t, e, n, r) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function(o) {
      var s = t(this), a = o == null ? void 0 : o[e];
      return a !== void 0 ? a.call(o, s) : new RegExp(o)[e](String(s));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function(i) {
      var o = r(n, i, this);
      if (o.done)
        return o.value;
      var s = zT(i), a = String(this);
      if (!s.global)
        return Jg(s, a);
      var l = s.unicode;
      s.lastIndex = 0;
      for (var c = [], u = 0, f; (f = Jg(s, a)) !== null; ) {
        var p = String(f[0]);
        c[u] = p, p === "" && (s.lastIndex = WT(a, VT(s.lastIndex), l)), u++;
      }
      return u === 0 ? null : c;
    }
  ];
});
var HT = ce, UT = pt, GT = Ee, qT = gn, JT = gh, KT = Dl, XT = Math.max, YT = Math.min, ZT = Math.floor, QT = /\$([$&`']|\d\d?|<[^>]*>)/g, e$ = /\$([$&`']|\d\d?)/g, t$ = function(t) {
  return t === void 0 ? t : String(t);
};
Al("replace", 2, function(t, e, n, r) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function(s, a) {
      var l = t(this), c = s == null ? void 0 : s[e];
      return c !== void 0 ? c.call(s, l, a) : n.call(String(l), s, a);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function(o, s) {
      var a = r(n, o, this, s);
      if (a.done)
        return a.value;
      var l = HT(o), c = String(this), u = typeof s == "function";
      u || (s = String(s));
      var f = l.global;
      if (f) {
        var p = l.unicode;
        l.lastIndex = 0;
      }
      for (var d = []; ; ) {
        var h = KT(l, c);
        if (h === null || (d.push(h), !f))
          break;
        var m = String(h[0]);
        m === "" && (l.lastIndex = JT(c, GT(l.lastIndex), p));
      }
      for (var v = "", y = 0, C = 0; C < d.length; C++) {
        h = d[C];
        for (var O = String(h[0]), N = XT(YT(qT(h.index), c.length), 0), T = [], B = 1; B < h.length; B++)
          T.push(t$(h[B]));
        var b = h.groups;
        if (u) {
          var re = [O].concat(T, N, c);
          b !== void 0 && re.push(b);
          var j = String(s.apply(void 0, re));
        } else
          j = i(O, c, N, T, b, s);
        N >= y && (v += c.slice(y, N) + j, y = N + O.length);
      }
      return v + c.slice(y);
    }
  ];
  function i(o, s, a, l, c, u) {
    var f = a + o.length, p = l.length, d = e$;
    return c !== void 0 && (c = UT(c), d = QT), n.call(u, d, function(h, m) {
      var v;
      switch (m.charAt(0)) {
        case "$":
          return "$";
        case "&":
          return o;
        case "`":
          return s.slice(0, a);
        case "'":
          return s.slice(f);
        case "<":
          v = c[m.slice(1, -1)];
          break;
        default:
          var y = +m;
          if (y === 0)
            return h;
          if (y > p) {
            var C = ZT(y / 10);
            return C === 0 ? h : C <= p ? l[C - 1] === void 0 ? m.charAt(1) : l[C - 1] + m.charAt(1) : h;
          }
          v = l[y - 1];
      }
      return v === void 0 ? "" : v;
    });
  }
});
var n$ = ce, Kg = Zw, r$ = Dl;
Al("search", 1, function(t, e, n, r) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function(o) {
      var s = t(this), a = o == null ? void 0 : o[e];
      return a !== void 0 ? a.call(o, s) : new RegExp(o)[e](String(s));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function(i) {
      var o = r(n, i, this);
      if (o.done)
        return o.value;
      var s = n$(i), a = String(this), l = s.lastIndex;
      Kg(l, 0) || (s.lastIndex = 0);
      var c = r$(s, a);
      return Kg(s.lastIndex, l) || (s.lastIndex = l), c === null ? -1 : c.index;
    }
  ];
});
var Xg = ce, i$ = mn, o$ = Se("species"), vs = function(t, e) {
  var n = Xg(t).constructor, r;
  return n === void 0 || (r = Xg(n)[o$]) == null ? e : i$(r);
}, s$ = sh, a$ = ce, l$ = vs, c$ = gh, u$ = Ee, Yg = Dl, f$ = mh, p$ = ae, d$ = Math.min, h$ = [].push, xr = "split", Tt = "length", Lu = "lastIndex", Dp = 4294967295, yo = !p$(function() {
  RegExp(Dp, "y");
});
Al("split", 2, function(t, e, n, r) {
  var i;
  return "abbc"[xr](/(b)*/)[1] == "c" || "test"[xr](/(?:)/, -1)[Tt] != 4 || "ab"[xr](/(?:ab)*/)[Tt] != 2 || "."[xr](/(.?)(.?)/)[Tt] != 4 || "."[xr](/()()/)[Tt] > 1 || ""[xr](/.?/)[Tt] ? i = function(o, s) {
    var a = String(this);
    if (o === void 0 && s === 0)
      return [];
    if (!s$(o))
      return n.call(a, o, s);
    for (var l = [], c = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.unicode ? "u" : "") + (o.sticky ? "y" : ""), u = 0, f = s === void 0 ? Dp : s >>> 0, p = new RegExp(o.source, c + "g"), d, h, m; (d = f$.call(p, a)) && (h = p[Lu], !(h > u && (l.push(a.slice(u, d.index)), d[Tt] > 1 && d.index < a[Tt] && h$.apply(l, d.slice(1)), m = d[0][Tt], u = h, l[Tt] >= f))); )
      p[Lu] === d.index && p[Lu]++;
    return u === a[Tt] ? (m || !p.test("")) && l.push("") : l.push(a.slice(u)), l[Tt] > f ? l.slice(0, f) : l;
  } : "0"[xr](void 0, 0)[Tt] ? i = function(o, s) {
    return o === void 0 && s === 0 ? [] : n.call(this, o, s);
  } : i = n, [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function(s, a) {
      var l = t(this), c = s == null ? void 0 : s[e];
      return c !== void 0 ? c.call(s, l, a) : i.call(String(l), s, a);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function(o, s) {
      var a = r(i, o, this, s, i !== n);
      if (a.done)
        return a.value;
      var l = a$(o), c = String(this), u = l$(l, RegExp), f = l.unicode, p = (l.ignoreCase ? "i" : "") + (l.multiline ? "m" : "") + (l.unicode ? "u" : "") + (yo ? "y" : "g"), d = new u(yo ? l : "^(?:" + l.source + ")", p), h = s === void 0 ? Dp : s >>> 0;
      if (h === 0)
        return [];
      if (c.length === 0)
        return Yg(d, c) === null ? [c] : [];
      for (var m = 0, v = 0, y = []; v < c.length; ) {
        d.lastIndex = yo ? v : 0;
        var C = Yg(d, yo ? c : c.slice(v)), O;
        if (C === null || (O = d$(u$(d.lastIndex + (yo ? 0 : v)), c.length)) === m)
          v = c$(c, v, f);
        else {
          if (y.push(c.slice(m, v)), y.length === h)
            return y;
          for (var N = 1; N <= C.length - 1; N++)
            if (y.push(C[N]), y.length === h)
              return y;
          v = m = O;
        }
      }
      return y.push(c.slice(m)), y;
    }
  ];
});
var ro = function(t, e, n, r) {
  if (!(t instanceof e) || r !== void 0 && r in t)
    throw TypeError(n + ": incorrect invocation!");
  return t;
}, _S = { exports: {} }, m$ = vn, v$ = mS, g$ = uh, y$ = ce, b$ = Ee, w$ = ph, Ap = {}, Rp = {}, kS = _S.exports = function(t, e, n, r, i) {
  var o = i ? function() {
    return t;
  } : w$(t), s = m$(n, r, e ? 2 : 1), a = 0, l, c, u, f;
  if (typeof o != "function")
    throw TypeError(t + " is not iterable!");
  if (g$(o)) {
    for (l = b$(t.length); l > a; a++)
      if (f = e ? s(y$(c = t[a])[0], c[1]) : s(t[a]), f === Ap || f === Rp)
        return f;
  } else
    for (u = o.call(t); !(c = u.next()).done; )
      if (f = v$(u, s, c.value, e), f === Ap || f === Rp)
        return f;
};
kS.BREAK = Ap;
kS.RETURN = Rp;
var Rl = _S.exports, zs = vn, S$ = eS, Zg = Gd, Qg = Bd, Mn = se, ey = Mn.process, Fp = Mn.setImmediate, Lp = Mn.clearImmediate, ty = Mn.MessageChannel, ju = Mn.Dispatch, Bu = 0, Fo = {}, ny = "onreadystatechange", Or, zu, Vu, $o = function() {
  var t = +this;
  if (Fo.hasOwnProperty(t)) {
    var e = Fo[t];
    delete Fo[t], e();
  }
}, ry = function(t) {
  $o.call(t.data);
};
(!Fp || !Lp) && (Fp = function(e) {
  for (var n = [], r = 1; arguments.length > r; )
    n.push(arguments[r++]);
  return Fo[++Bu] = function() {
    S$(typeof e == "function" ? e : Function(e), n);
  }, Or(Bu), Bu;
}, Lp = function(e) {
  delete Fo[e];
}, Rn(ey) == "process" ? Or = function(t) {
  ey.nextTick(zs($o, t, 1));
} : ju && ju.now ? Or = function(t) {
  ju.now(zs($o, t, 1));
} : ty ? (zu = new ty(), Vu = zu.port2, zu.port1.onmessage = ry, Or = zs(Vu.postMessage, Vu, 1)) : Mn.addEventListener && typeof postMessage == "function" && !Mn.importScripts ? (Or = function(t) {
  Mn.postMessage(t + "", "*");
}, Mn.addEventListener("message", ry, !1)) : ny in Qg("script") ? Or = function(t) {
  Zg.appendChild(Qg("script"))[ny] = function() {
    Zg.removeChild(this), $o.call(t);
  };
} : Or = function(t) {
  setTimeout(zs($o, t, 1), 0);
});
var yh = {
  set: Fp,
  clear: Lp
}, Dr = se, x$ = yh.set, iy = Dr.MutationObserver || Dr.WebKitMutationObserver, jp = Dr.process, Wu = Dr.Promise, oy = Rn(jp) == "process", O$ = function() {
  var t, e, n, r = function() {
    var a, l;
    for (oy && (a = jp.domain) && a.exit(); t; ) {
      l = t.fn, t = t.next;
      try {
        l();
      } catch (c) {
        throw t ? n() : e = void 0, c;
      }
    }
    e = void 0, a && a.enter();
  };
  if (oy)
    n = function() {
      jp.nextTick(r);
    };
  else if (iy && !(Dr.navigator && Dr.navigator.standalone)) {
    var i = !0, o = document.createTextNode("");
    new iy(r).observe(o, { characterData: !0 }), n = function() {
      o.data = i = !i;
    };
  } else if (Wu && Wu.resolve) {
    var s = Wu.resolve(void 0);
    n = function() {
      s.then(r);
    };
  } else
    n = function() {
      x$.call(Dr, r);
    };
  return function(a) {
    var l = { fn: a, next: void 0 };
    e && (e.next = l), t || (t = l, n()), e = l;
  };
}, bh = {}, sy = mn;
function E$(t) {
  var e, n;
  this.promise = new t(function(r, i) {
    if (e !== void 0 || n !== void 0)
      throw TypeError("Bad Promise constructor");
    e = r, n = i;
  }), this.resolve = sy(e), this.reject = sy(n);
}
bh.f = function(t) {
  return new E$(t);
};
var C$ = function(t) {
  try {
    return { e: !1, v: t() };
  } catch (e) {
    return { e: !0, v: e };
  }
}, _$ = se, ay = _$.navigator, Fl = ay && ay.userAgent || "", k$ = ce, N$ = le, M$ = bh, NS = function(t, e) {
  if (k$(t), N$(e) && e.constructor === t)
    return e;
  var n = M$.f(t), r = n.resolve;
  return r(e), n.promise;
}, T$ = _t, io = function(t, e, n) {
  for (var r in e)
    T$(t, r, e[r], n);
  return t;
}, Yn = se, ki = vn, $$ = ms, Ot = $, I$ = le, P$ = mn, D$ = ro, ly = Rl, A$ = vs, MS = yh.set, TS = O$(), $S = bh, Bp = C$, R$ = Fl, F$ = NS, dr = "Promise", IS = Yn.TypeError, ji = Yn.process, cy = ji && ji.versions, L$ = cy && cy.v8 || "", Nn = Yn[dr], Uo = $$(ji) == "process", Ta = function() {
}, Vs, PS, uy, DS, Go = PS = $S.f, gs = !!function() {
  try {
    var t = Nn.resolve(1), e = (t.constructor = {})[Se("species")] = function(n) {
      n(Ta, Ta);
    };
    return (Uo || typeof PromiseRejectionEvent == "function") && t.then(Ta) instanceof e && L$.indexOf("6.6") !== 0 && R$.indexOf("Chrome/66") === -1;
  } catch {
  }
}(), AS = function(t) {
  var e;
  return I$(t) && typeof (e = t.then) == "function" ? e : !1;
}, wh = function(t, e) {
  if (!t._n) {
    t._n = !0;
    var n = t._c;
    TS(function() {
      for (var r = t._v, i = t._s == 1, o = 0, s = function(a) {
        var l = i ? a.ok : a.fail, c = a.resolve, u = a.reject, f = a.domain, p, d, h;
        try {
          l ? (i || (t._h == 2 && B$(t), t._h = 1), l === !0 ? p = r : (f && f.enter(), p = l(r), f && (f.exit(), h = !0)), p === a.promise ? u(IS("Promise-chain cycle")) : (d = AS(p)) ? d.call(p, c, u) : c(p)) : u(r);
        } catch (m) {
          f && !h && f.exit(), u(m);
        }
      }; n.length > o; )
        s(n[o++]);
      t._c = [], t._n = !1, e && !t._h && j$(t);
    });
  }
}, j$ = function(t) {
  MS.call(Yn, function() {
    var e = t._v, n = fy(t), r, i, o;
    if (n && (r = Bp(function() {
      Uo ? ji.emit("unhandledRejection", e, t) : (i = Yn.onunhandledrejection) ? i({ promise: t, reason: e }) : (o = Yn.console) && o.error && o.error("Unhandled promise rejection", e);
    }), t._h = Uo || fy(t) ? 2 : 1), t._a = void 0, n && r.e)
      throw r.v;
  });
}, fy = function(t) {
  return t._h !== 1 && (t._a || t._c).length === 0;
}, B$ = function(t) {
  MS.call(Yn, function() {
    var e;
    Uo ? ji.emit("rejectionHandled", t) : (e = Yn.onrejectionhandled) && e({ promise: t, reason: t._v });
  });
}, Pi = function(t) {
  var e = this;
  e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), wh(e, !0));
}, zp = function(t) {
  var e = this, n;
  if (!e._d) {
    e._d = !0, e = e._w || e;
    try {
      if (e === t)
        throw IS("Promise can't be resolved itself");
      (n = AS(t)) ? TS(function() {
        var r = { _w: e, _d: !1 };
        try {
          n.call(t, ki(zp, r, 1), ki(Pi, r, 1));
        } catch (i) {
          Pi.call(r, i);
        }
      }) : (e._v = t, e._s = 1, wh(e, !1));
    } catch (r) {
      Pi.call({ _w: e, _d: !1 }, r);
    }
  }
};
gs || (Nn = function(e) {
  D$(this, Nn, dr, "_h"), P$(e), Vs.call(this);
  try {
    e(ki(zp, this, 1), ki(Pi, this, 1));
  } catch (n) {
    Pi.call(this, n);
  }
}, Vs = function(e) {
  this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
}, Vs.prototype = io(Nn.prototype, {
  // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
  then: function(e, n) {
    var r = Go(A$(this, Nn));
    return r.ok = typeof e == "function" ? e : !0, r.fail = typeof n == "function" && n, r.domain = Uo ? ji.domain : void 0, this._c.push(r), this._a && this._a.push(r), this._s && wh(this, !1), r.promise;
  },
  // 25.4.5.1 Promise.prototype.catch(onRejected)
  catch: function(t) {
    return this.then(void 0, t);
  }
}), uy = function() {
  var t = new Vs();
  this.promise = t, this.resolve = ki(zp, t, 1), this.reject = ki(Pi, t, 1);
}, $S.f = Go = function(t) {
  return t === Nn || t === DS ? new uy(t) : PS(t);
});
Ot(Ot.G + Ot.W + Ot.F * !gs, { Promise: Nn });
Yi(Nn, dr);
no(dr);
DS = We[dr];
Ot(Ot.S + Ot.F * !gs, dr, {
  // 25.4.4.5 Promise.reject(r)
  reject: function(e) {
    var n = Go(this), r = n.reject;
    return r(e), n.promise;
  }
});
Ot(Ot.S + Ot.F * !gs, dr, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function(e) {
    return F$(this, e);
  }
});
Ot(Ot.S + Ot.F * !(gs && Il()(function(t) {
  Nn.all(t).catch(Ta);
})), dr, {
  // 25.4.4.1 Promise.all(iterable)
  all: function(e) {
    var n = this, r = Go(n), i = r.resolve, o = r.reject, s = Bp(function() {
      var a = [], l = 0, c = 1;
      ly(e, !1, function(u) {
        var f = l++, p = !1;
        a.push(void 0), c++, n.resolve(u).then(function(d) {
          p || (p = !0, a[f] = d, --c || i(a));
        }, o);
      }), --c || i(a);
    });
    return s.e && o(s.v), r.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function(e) {
    var n = this, r = Go(n), i = r.reject, o = Bp(function() {
      ly(e, !1, function(s) {
        n.resolve(s).then(r.resolve, i);
      });
    });
    return o.e && i(o.v), r.promise;
  }
});
var z$ = le, si = function(t, e) {
  if (!z$(t) || t._t !== e)
    throw TypeError("Incompatible receiver, " + e + " required!");
  return t;
}, V$ = Te.f, W$ = ri, H$ = io, U$ = vn, G$ = ro, q$ = Rl, J$ = oh, Ws = SS, K$ = no, RS = Re, FS = fr.fastKey, vi = si, bo = RS ? "_s" : "size", Hs = function(t, e) {
  var n = FS(e), r;
  if (n !== "F")
    return t._i[n];
  for (r = t._f; r; r = r.n)
    if (r.k == e)
      return r;
}, LS = {
  getConstructor: function(t, e, n, r) {
    var i = t(function(o, s) {
      G$(o, i, e, "_i"), o._t = e, o._i = W$(null), o._f = void 0, o._l = void 0, o[bo] = 0, s != null && q$(s, n, o[r], o);
    });
    return H$(i.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function() {
        for (var s = vi(this, e), a = s._i, l = s._f; l; l = l.n)
          l.r = !0, l.p && (l.p = l.p.n = void 0), delete a[l.i];
        s._f = s._l = void 0, s[bo] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      delete: function(o) {
        var s = vi(this, e), a = Hs(s, o);
        if (a) {
          var l = a.n, c = a.p;
          delete s._i[a.i], a.r = !0, c && (c.n = l), l && (l.p = c), s._f == a && (s._f = l), s._l == a && (s._l = c), s[bo]--;
        }
        return !!a;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function(s) {
        vi(this, e);
        for (var a = U$(s, arguments.length > 1 ? arguments[1] : void 0, 3), l; l = l ? l.n : this._f; )
          for (a(l.v, l.k, this); l && l.r; )
            l = l.p;
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function(s) {
        return !!Hs(vi(this, e), s);
      }
    }), RS && V$(i.prototype, "size", {
      get: function() {
        return vi(this, e)[bo];
      }
    }), i;
  },
  def: function(t, e, n) {
    var r = Hs(t, e), i, o;
    return r ? r.v = n : (t._l = r = {
      i: o = FS(e, !0),
      // <- index
      k: e,
      // <- key
      v: n,
      // <- value
      p: i = t._l,
      // <- previous entry
      n: void 0,
      // <- next entry
      r: !1
      // <- removed
    }, t._f || (t._f = r), i && (i.n = r), t[bo]++, o !== "F" && (t._i[o] = r)), t;
  },
  getEntry: Hs,
  setStrong: function(t, e, n) {
    J$(t, e, function(r, i) {
      this._t = vi(r, e), this._k = i, this._l = void 0;
    }, function() {
      for (var r = this, i = r._k, o = r._l; o && o.r; )
        o = o.p;
      return !r._t || !(r._l = o = o ? o.n : r._t._f) ? (r._t = void 0, Ws(1)) : i == "keys" ? Ws(0, o.k) : i == "values" ? Ws(0, o.v) : Ws(0, [o.k, o.v]);
    }, n ? "entries" : "values", !n, !0), K$(e);
  }
}, X$ = se, Us = $, Y$ = _t, Z$ = io, Q$ = fr, eI = Rl, tI = ro, Hu = le, Uu = ae, nI = Il(), rI = Yi, iI = eh, Ll = function(t, e, n, r, i, o) {
  var s = X$[t], a = s, l = i ? "set" : "add", c = a && a.prototype, u = {}, f = function(y) {
    var C = c[y];
    Y$(
      c,
      y,
      y == "delete" ? function(O) {
        return o && !Hu(O) ? !1 : C.call(this, O === 0 ? 0 : O);
      } : y == "has" ? function(N) {
        return o && !Hu(N) ? !1 : C.call(this, N === 0 ? 0 : N);
      } : y == "get" ? function(N) {
        return o && !Hu(N) ? void 0 : C.call(this, N === 0 ? 0 : N);
      } : y == "add" ? function(N) {
        return C.call(this, N === 0 ? 0 : N), this;
      } : function(N, T) {
        return C.call(this, N === 0 ? 0 : N, T), this;
      }
    );
  };
  if (typeof a != "function" || !(o || c.forEach && !Uu(function() {
    new a().entries().next();
  })))
    a = r.getConstructor(e, t, i, l), Z$(a.prototype, n), Q$.NEED = !0;
  else {
    var p = new a(), d = p[l](o ? {} : -0, 1) != p, h = Uu(function() {
      p.has(1);
    }), m = nI(function(y) {
      new a(y);
    }), v = !o && Uu(function() {
      for (var y = new a(), C = 5; C--; )
        y[l](C, C);
      return !y.has(-0);
    });
    m || (a = e(function(y, C) {
      tI(y, a, t);
      var O = iI(new s(), y, a);
      return C != null && eI(C, i, O[l], O), O;
    }), a.prototype = c, c.constructor = a), (h || v) && (f("delete"), f("has"), i && f("get")), (v || d) && f(l), o && c.clear && delete c.clear;
  }
  return rI(a, t), u[t] = a, Us(Us.G + Us.W + Us.F * (a != s), u), o || r.setStrong(a, t, i), a;
}, Gu = LS, py = si, qu = "Map";
Ll(qu, function(t) {
  return function() {
    return t(this, arguments.length > 0 ? arguments[0] : void 0);
  };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function(e) {
    var n = Gu.getEntry(py(this, qu), e);
    return n && n.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function(e, n) {
    return Gu.def(py(this, qu), e === 0 ? 0 : e, n);
  }
}, Gu, !0);
var dy = LS, oI = si, hy = "Set";
Ll(hy, function(t) {
  return function() {
    return t(this, arguments.length > 0 ? arguments[0] : void 0);
  };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function(e) {
    return dy.def(oI(this, hy), e = e === 0 ? 0 : e, e);
  }
}, dy);
var sI = io, Ju = fr.getWeak, aI = ce, my = le, lI = ro, cI = Rl, jS = bn, vy = Bt, gy = si, uI = jS(5), fI = jS(6), pI = 0, Gs = function(t) {
  return t._l || (t._l = new BS());
}, BS = function() {
  this.a = [];
}, Ku = function(t, e) {
  return uI(t.a, function(n) {
    return n[0] === e;
  });
};
BS.prototype = {
  get: function(t) {
    var e = Ku(this, t);
    if (e)
      return e[1];
  },
  has: function(t) {
    return !!Ku(this, t);
  },
  set: function(t, e) {
    var n = Ku(this, t);
    n ? n[1] = e : this.a.push([t, e]);
  },
  delete: function(t) {
    var e = fI(this.a, function(n) {
      return n[0] === t;
    });
    return ~e && this.a.splice(e, 1), !!~e;
  }
};
var zS = {
  getConstructor: function(t, e, n, r) {
    var i = t(function(o, s) {
      lI(o, i, e, "_i"), o._t = e, o._i = pI++, o._l = void 0, s != null && cI(s, n, o[r], o);
    });
    return sI(i.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      delete: function(o) {
        if (!my(o))
          return !1;
        var s = Ju(o);
        return s === !0 ? Gs(gy(this, e)).delete(o) : s && vy(s, this._i) && delete s[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function(s) {
        if (!my(s))
          return !1;
        var a = Ju(s);
        return a === !0 ? Gs(gy(this, e)).has(s) : a && vy(a, this._i);
      }
    }), i;
  },
  def: function(t, e, n) {
    var r = Ju(aI(e), !0);
    return r === !0 ? Gs(t).set(e, n) : r[t._i] = n, t;
  },
  ufstore: Gs
}, yy = se, dI = bn(0), hI = _t, VS = fr, mI = Yw, jl = zS, WS = le, by = si, vI = si, gI = !yy.ActiveXObject && "ActiveXObject" in yy, Ha = "WeakMap", yI = VS.getWeak, bI = Object.isExtensible, wI = jl.ufstore, Xu, HS = function(t) {
  return function() {
    return t(this, arguments.length > 0 ? arguments[0] : void 0);
  };
}, US = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function(e) {
    if (WS(e)) {
      var n = yI(e);
      return n === !0 ? wI(by(this, Ha)).get(e) : n ? n[this._i] : void 0;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function(e, n) {
    return jl.def(by(this, Ha), e, n);
  }
}, SI = Ll(Ha, HS, US, jl, !0, !0);
vI && gI && (Xu = jl.getConstructor(HS, Ha), mI(Xu.prototype, US), VS.NEED = !0, dI(["delete", "has", "get", "set"], function(t) {
  var e = SI.prototype, n = e[t];
  hI(e, t, function(r, i) {
    if (WS(r) && !bI(r)) {
      this._f || (this._f = new Xu());
      var o = this._f[t](r, i);
      return t == "set" ? this : o;
    }
    return n.call(this, r, i);
  });
}));
var wy = zS, xI = si, Sy = "WeakSet";
Ll(Sy, function(t) {
  return function() {
    return t(this, arguments.length > 0 ? arguments[0] : void 0);
  };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function(e) {
    return wy.def(xI(this, Sy), e, !0);
  }
}, wy, !1, !0);
var Vp = se, xy = zt, GS = ei, qS = GS("typed_array"), JS = GS("view"), KS = !!(Vp.ArrayBuffer && Vp.DataView), XS = KS, Oy = 0, OI = 9, Yu, EI = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");
for (; Oy < OI; )
  (Yu = Vp[EI[Oy++]]) ? (xy(Yu.prototype, qS, !0), xy(Yu.prototype, JS, !0)) : XS = !1;
var Bl = {
  ABV: KS,
  CONSTR: XS,
  TYPED: qS,
  VIEW: JS
}, zl = {}, CI = gn, _I = Ee, YS = function(t) {
  if (t === void 0)
    return 0;
  var e = CI(t), n = _I(e);
  if (e !== n)
    throw RangeError("Wrong length!");
  return n;
};
(function(t) {
  var e = se, n = Re, r = Bl, i = zt, o = io, s = ae, a = ro, l = gn, c = Ee, u = YS, f = pr.f, p = Te.f, d = dh(), h = Yi, m = "ArrayBuffer", v = "DataView", y = "prototype", C = "Wrong length!", O = "Wrong index!", N = e[m], T = e[v], B = e.Math, b = e.RangeError, re = e.Infinity, j = N, Q = B.abs, ee = B.pow, ke = B.floor, $e = B.log, Nt = B.LN2, He = "buffer", Xe = "byteLength", x = "byteOffset", w = n ? "_b" : He, g = n ? "_l" : Xe, S = n ? "_o" : x;
  function _(R, F, Y) {
    var Ie = new Array(Y), Pe = Y * 8 - F - 1, be = (1 << Pe) - 1, Ne = be >> 1, k = F === 23 ? ee(2, -24) - ee(2, -77) : 0, z = 0, W = R < 0 || R === 0 && 1 / R < 0 ? 1 : 0, G, Oe, mt;
    for (R = Q(R), R != R || R === re ? (Oe = R != R ? 1 : 0, G = be) : (G = ke($e(R) / Nt), R * (mt = ee(2, -G)) < 1 && (G--, mt *= 2), G + Ne >= 1 ? R += k / mt : R += k * ee(2, 1 - Ne), R * mt >= 2 && (G++, mt /= 2), G + Ne >= be ? (Oe = 0, G = be) : G + Ne >= 1 ? (Oe = (R * mt - 1) * ee(2, F), G = G + Ne) : (Oe = R * ee(2, Ne - 1) * ee(2, F), G = 0)); F >= 8; Ie[z++] = Oe & 255, Oe /= 256, F -= 8)
      ;
    for (G = G << F | Oe, Pe += F; Pe > 0; Ie[z++] = G & 255, G /= 256, Pe -= 8)
      ;
    return Ie[--z] |= W * 128, Ie;
  }
  function D(R, F, Y) {
    var Ie = Y * 8 - F - 1, Pe = (1 << Ie) - 1, be = Pe >> 1, Ne = Ie - 7, k = Y - 1, z = R[k--], W = z & 127, G;
    for (z >>= 7; Ne > 0; W = W * 256 + R[k], k--, Ne -= 8)
      ;
    for (G = W & (1 << -Ne) - 1, W >>= -Ne, Ne += F; Ne > 0; G = G * 256 + R[k], k--, Ne -= 8)
      ;
    if (W === 0)
      W = 1 - be;
    else {
      if (W === Pe)
        return G ? NaN : z ? -re : re;
      G = G + ee(2, F), W = W - be;
    }
    return (z ? -1 : 1) * G * ee(2, W - F);
  }
  function P(R) {
    return R[3] << 24 | R[2] << 16 | R[1] << 8 | R[0];
  }
  function A(R) {
    return [R & 255];
  }
  function U(R) {
    return [R & 255, R >> 8 & 255];
  }
  function H(R) {
    return [R & 255, R >> 8 & 255, R >> 16 & 255, R >> 24 & 255];
  }
  function q(R) {
    return _(R, 52, 8);
  }
  function Z(R) {
    return _(R, 23, 4);
  }
  function ye(R, F, Y) {
    p(R[y], F, { get: function() {
      return this[Y];
    } });
  }
  function ve(R, F, Y, Ie) {
    var Pe = +Y, be = u(Pe);
    if (be + F > R[g])
      throw b(O);
    var Ne = R[w]._b, k = be + R[S], z = Ne.slice(k, k + F);
    return Ie ? z : z.reverse();
  }
  function fe(R, F, Y, Ie, Pe, be) {
    var Ne = +Y, k = u(Ne);
    if (k + F > R[g])
      throw b(O);
    for (var z = R[w]._b, W = k + R[S], G = Ie(+Pe), Oe = 0; Oe < F; Oe++)
      z[W + Oe] = G[be ? Oe : F - Oe - 1];
  }
  if (!r.ABV)
    N = function(F) {
      a(this, N, m);
      var Y = u(F);
      this._b = d.call(new Array(Y), 0), this[g] = Y;
    }, T = function(F, Y, Ie) {
      a(this, T, v), a(F, N, v);
      var Pe = F[g], be = l(Y);
      if (be < 0 || be > Pe)
        throw b("Wrong offset!");
      if (Ie = Ie === void 0 ? Pe - be : c(Ie), be + Ie > Pe)
        throw b(C);
      this[w] = F, this[S] = be, this[g] = Ie;
    }, n && (ye(N, Xe, "_l"), ye(T, He, "_b"), ye(T, Xe, "_l"), ye(T, x, "_o")), o(T[y], {
      getInt8: function(F) {
        return ve(this, 1, F)[0] << 24 >> 24;
      },
      getUint8: function(F) {
        return ve(this, 1, F)[0];
      },
      getInt16: function(F) {
        var Y = ve(this, 2, F, arguments[1]);
        return (Y[1] << 8 | Y[0]) << 16 >> 16;
      },
      getUint16: function(F) {
        var Y = ve(this, 2, F, arguments[1]);
        return Y[1] << 8 | Y[0];
      },
      getInt32: function(F) {
        return P(ve(this, 4, F, arguments[1]));
      },
      getUint32: function(F) {
        return P(ve(this, 4, F, arguments[1])) >>> 0;
      },
      getFloat32: function(F) {
        return D(ve(this, 4, F, arguments[1]), 23, 4);
      },
      getFloat64: function(F) {
        return D(ve(this, 8, F, arguments[1]), 52, 8);
      },
      setInt8: function(F, Y) {
        fe(this, 1, F, A, Y);
      },
      setUint8: function(F, Y) {
        fe(this, 1, F, A, Y);
      },
      setInt16: function(F, Y) {
        fe(this, 2, F, U, Y, arguments[2]);
      },
      setUint16: function(F, Y) {
        fe(this, 2, F, U, Y, arguments[2]);
      },
      setInt32: function(F, Y) {
        fe(this, 4, F, H, Y, arguments[2]);
      },
      setUint32: function(F, Y) {
        fe(this, 4, F, H, Y, arguments[2]);
      },
      setFloat32: function(F, Y) {
        fe(this, 4, F, Z, Y, arguments[2]);
      },
      setFloat64: function(F, Y) {
        fe(this, 8, F, q, Y, arguments[2]);
      }
    });
  else {
    if (!s(function() {
      N(1);
    }) || !s(function() {
      new N(-1);
    }) || s(function() {
      return new N(), new N(1.5), new N(NaN), N.name != m;
    })) {
      N = function(F) {
        return a(this, N), new j(u(F));
      };
      for (var it = N[y] = j[y], wr = f(j), Ut = 0, Gt; wr.length > Ut; )
        (Gt = wr[Ut++]) in N || i(N, Gt, j[Gt]);
      it.constructor = N;
    }
    var Sr = new T(new N(2)), Ms = T[y].setInt8;
    Sr.setInt8(0, 2147483648), Sr.setInt8(1, 2147483649), (Sr.getInt8(0) || !Sr.getInt8(1)) && o(T[y], {
      setInt8: function(F, Y) {
        Ms.call(this, F, Y << 24 >> 24);
      },
      setUint8: function(F, Y) {
        Ms.call(this, F, Y << 24 >> 24);
      }
    }, !0);
  }
  h(N, m), h(T, v), i(T[y], r.VIEW, !0), t[m] = N, t[v] = T;
})(zl);
var Yt = $, Sh = Bl, ZS = zl, Ey = ce, Cy = ti, kI = Ee, NI = le, QS = se.ArrayBuffer, MI = vs, qo = ZS.ArrayBuffer, _y = ZS.DataView, ky = Sh.ABV && QS.isView, Ny = qo.prototype.slice, TI = Sh.VIEW, xh = "ArrayBuffer";
Yt(Yt.G + Yt.W + Yt.F * (QS !== qo), { ArrayBuffer: qo });
Yt(Yt.S + Yt.F * !Sh.CONSTR, xh, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function(e) {
    return ky && ky(e) || NI(e) && TI in e;
  }
});
Yt(Yt.P + Yt.U + Yt.F * ae(function() {
  return !new qo(2).slice(1, void 0).byteLength;
}), xh, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function(e, n) {
    if (Ny !== void 0 && n === void 0)
      return Ny.call(Ey(this), e);
    for (var r = Ey(this).byteLength, i = Cy(e, r), o = Cy(n === void 0 ? r : n, r), s = new (MI(this, qo))(kI(o - i)), a = new _y(this), l = new _y(s), c = 0; i < o; )
      l.setUint8(c++, a.getUint8(i++));
    return s;
  }
});
no(xh);
var qs = $;
qs(qs.G + qs.W + qs.F * !Bl.ABV, {
  DataView: zl.DataView
});
var Wp = { exports: {} };
if (Re) {
  var Zu = Pw, Js = se, nn = ae, de = $, Ks = Bl, My = zl, $I = vn, Ty = ro, II = Qr, rn = zt, Qu = io, PI = gn, Xs = Ee, $y = YS, Iy = ti, Py = ur, wo = Bt, Dy = ms, gi = le, Ay = pt, DI = uh, AI = ri, RI = ii, ef = pr.f, FI = ph, Ry = ei, Fy = Se, Er = bn, Ly = _l, tf = vs, nf = xS, LI = to, jI = Il(), BI = no, zI = dh(), VI = yS(), jy = Te, By = en, So = jy.f, WI = By.f, xo = Js.RangeError, zy = Js.TypeError, yi = Js.Uint8Array, rf = "ArrayBuffer", Vy = "Shared" + rf, Wy = "BYTES_PER_ELEMENT", Oo = "prototype", Bn = Array[Oo], of = My.ArrayBuffer, HI = My.DataView, Hy = Er(0), UI = Er(2), GI = Er(3), qI = Er(4), JI = Er(5), KI = Er(6), XI = Ly(!0), YI = Ly(!1), ZI = nf.values, QI = nf.keys, eP = nf.entries, tP = Bn.lastIndexOf, nP = Bn.reduce, rP = Bn.reduceRight, Uy = Bn.join, iP = Bn.sort, Gy = Bn.slice, Eo = Bn.toString, sf = Bn.toLocaleString, af = Fy("iterator"), Ys = Fy("toStringTag"), qy = Ry("typed_constructor"), Zs = Ry("def_constructor"), Jy = Ks.CONSTR, bi = Ks.TYPED, oP = Ks.VIEW, Qs = "Wrong length!", sP = Er(1, function(t, e) {
    return ta(tf(t, t[Zs]), e);
  }), Ky = nn(function() {
    return new yi(new Uint16Array([1]).buffer)[0] === 1;
  }), aP = !!yi && !!yi[Oo].set && nn(function() {
    new yi(1).set({});
  }), ea = function(t, e) {
    var n = PI(t);
    if (n < 0 || n % e)
      throw xo("Wrong offset!");
    return n;
  }, ge = function(t) {
    if (gi(t) && bi in t)
      return t;
    throw zy(t + " is not a typed array!");
  }, ta = function(t, e) {
    if (!(gi(t) && qy in t))
      throw zy("It is not a typed array constructor!");
    return new t(e);
  }, Xy = function(t, e) {
    return lf(tf(t, t[Zs]), e);
  }, lf = function(t, e) {
    for (var n = 0, r = e.length, i = ta(t, r); r > n; )
      i[n] = e[n++];
    return i;
  }, na = function(t, e, n) {
    So(t, e, { get: function() {
      return this._d[n];
    } });
  }, cf = function(e) {
    var n = Ay(e), r = arguments.length, i = r > 1 ? arguments[1] : void 0, o = i !== void 0, s = FI(n), a, l, c, u, f, p;
    if (s != null && !DI(s)) {
      for (p = s.call(n), c = [], a = 0; !(f = p.next()).done; a++)
        c.push(f.value);
      n = c;
    }
    for (o && r > 2 && (i = $I(i, arguments[2], 2)), a = 0, l = Xs(n.length), u = ta(this, l); l > a; a++)
      u[a] = o ? i(n[a], a) : n[a];
    return u;
  }, lP = function() {
    for (var e = 0, n = arguments.length, r = ta(this, n); n > e; )
      r[e] = arguments[e++];
    return r;
  }, cP = !!yi && nn(function() {
    sf.call(new yi(1));
  }), Yy = function() {
    return sf.apply(cP ? Gy.call(ge(this)) : ge(this), arguments);
  }, Zy = {
    copyWithin: function(e, n) {
      return VI.call(ge(this), e, n, arguments.length > 2 ? arguments[2] : void 0);
    },
    every: function(e) {
      return qI(ge(this), e, arguments.length > 1 ? arguments[1] : void 0);
    },
    fill: function(e) {
      return zI.apply(ge(this), arguments);
    },
    filter: function(e) {
      return Xy(this, UI(
        ge(this),
        e,
        arguments.length > 1 ? arguments[1] : void 0
      ));
    },
    find: function(e) {
      return JI(ge(this), e, arguments.length > 1 ? arguments[1] : void 0);
    },
    findIndex: function(e) {
      return KI(ge(this), e, arguments.length > 1 ? arguments[1] : void 0);
    },
    forEach: function(e) {
      Hy(ge(this), e, arguments.length > 1 ? arguments[1] : void 0);
    },
    indexOf: function(e) {
      return YI(ge(this), e, arguments.length > 1 ? arguments[1] : void 0);
    },
    includes: function(e) {
      return XI(ge(this), e, arguments.length > 1 ? arguments[1] : void 0);
    },
    join: function(e) {
      return Uy.apply(ge(this), arguments);
    },
    lastIndexOf: function(e) {
      return tP.apply(ge(this), arguments);
    },
    map: function(e) {
      return sP(ge(this), e, arguments.length > 1 ? arguments[1] : void 0);
    },
    reduce: function(e) {
      return nP.apply(ge(this), arguments);
    },
    reduceRight: function(e) {
      return rP.apply(ge(this), arguments);
    },
    reverse: function() {
      for (var e = this, n = ge(e).length, r = Math.floor(n / 2), i = 0, o; i < r; )
        o = e[i], e[i++] = e[--n], e[n] = o;
      return e;
    },
    some: function(e) {
      return GI(ge(this), e, arguments.length > 1 ? arguments[1] : void 0);
    },
    sort: function(e) {
      return iP.call(ge(this), e);
    },
    subarray: function(e, n) {
      var r = ge(this), i = r.length, o = Iy(e, i);
      return new (tf(r, r[Zs]))(
        r.buffer,
        r.byteOffset + o * r.BYTES_PER_ELEMENT,
        Xs((n === void 0 ? i : Iy(n, i)) - o)
      );
    }
  }, Qy = function(e, n) {
    return Xy(this, Gy.call(ge(this), e, n));
  }, eb = function(e) {
    ge(this);
    var n = ea(arguments[1], 1), r = this.length, i = Ay(e), o = Xs(i.length), s = 0;
    if (o + n > r)
      throw xo(Qs);
    for (; s < o; )
      this[n + s] = i[s++];
  }, ra = {
    entries: function() {
      return eP.call(ge(this));
    },
    keys: function() {
      return QI.call(ge(this));
    },
    values: function() {
      return ZI.call(ge(this));
    }
  }, tb = function(t, e) {
    return gi(t) && t[bi] && typeof e != "symbol" && e in t && String(+e) == String(e);
  }, nb = function(e, n) {
    return tb(e, n = Py(n, !0)) ? II(2, e[n]) : WI(e, n);
  }, rb = function(e, n, r) {
    return tb(e, n = Py(n, !0)) && gi(r) && wo(r, "value") && !wo(r, "get") && !wo(r, "set") && !r.configurable && (!wo(r, "writable") || r.writable) && (!wo(r, "enumerable") || r.enumerable) ? (e[n] = r.value, e) : So(e, n, r);
  };
  Jy || (By.f = nb, jy.f = rb), de(de.S + de.F * !Jy, "Object", {
    getOwnPropertyDescriptor: nb,
    defineProperty: rb
  }), nn(function() {
    Eo.call({});
  }) && (Eo = sf = function() {
    return Uy.call(this);
  });
  var On = Qu({}, Zy);
  Qu(On, ra), rn(On, af, ra.values), Qu(On, {
    slice: Qy,
    set: eb,
    constructor: function() {
    },
    toString: Eo,
    toLocaleString: Yy
  }), na(On, "buffer", "b"), na(On, "byteOffset", "o"), na(On, "byteLength", "l"), na(On, "length", "e"), So(On, Ys, {
    get: function() {
      return this[bi];
    }
  }), Wp.exports = function(t, e, n, r) {
    r = !!r;
    var i = t + (r ? "Clamped" : "") + "Array", o = "get" + t, s = "set" + t, a = Js[i], l = a || {}, c = a && RI(a), u = !a || !Ks.ABV, f = {}, p = a && a[Oo], d = function(O, N) {
      var T = O._d;
      return T.v[o](N * e + T.o, Ky);
    }, h = function(O, N, T) {
      var B = O._d;
      r && (T = (T = Math.round(T)) < 0 ? 0 : T > 255 ? 255 : T & 255), B.v[s](N * e + B.o, T, Ky);
    }, m = function(O, N) {
      So(O, N, {
        get: function() {
          return d(this, N);
        },
        set: function(T) {
          return h(this, N, T);
        },
        enumerable: !0
      });
    };
    u ? (a = n(function(O, N, T, B) {
      Ty(O, a, i, "_d");
      var b = 0, re = 0, j, Q, ee, ke;
      if (!gi(N))
        ee = $y(N), Q = ee * e, j = new of(Q);
      else if (N instanceof of || (ke = Dy(N)) == rf || ke == Vy) {
        j = N, re = ea(T, e);
        var $e = N.byteLength;
        if (B === void 0) {
          if ($e % e || (Q = $e - re, Q < 0))
            throw xo(Qs);
        } else if (Q = Xs(B) * e, Q + re > $e)
          throw xo(Qs);
        ee = Q / e;
      } else
        return bi in N ? lf(a, N) : cf.call(a, N);
      for (rn(O, "_d", {
        b: j,
        o: re,
        l: Q,
        e: ee,
        v: new HI(j)
      }); b < ee; )
        m(O, b++);
    }), p = a[Oo] = AI(On), rn(p, "constructor", a)) : (!nn(function() {
      a(1);
    }) || !nn(function() {
      new a(-1);
    }) || !jI(function(O) {
      new a(), new a(null), new a(1.5), new a(O);
    }, !0)) && (a = n(function(O, N, T, B) {
      Ty(O, a, i);
      var b;
      return gi(N) ? N instanceof of || (b = Dy(N)) == rf || b == Vy ? B !== void 0 ? new l(N, ea(T, e), B) : T !== void 0 ? new l(N, ea(T, e)) : new l(N) : bi in N ? lf(a, N) : cf.call(a, N) : new l($y(N));
    }), Hy(c !== Function.prototype ? ef(l).concat(ef(c)) : ef(l), function(O) {
      O in a || rn(a, O, l[O]);
    }), a[Oo] = p, Zu || (p.constructor = a));
    var v = p[af], y = !!v && (v.name == "values" || v.name == null), C = ra.values;
    rn(a, qy, !0), rn(p, bi, i), rn(p, oP, !0), rn(p, Zs, a), (r ? new a(1)[Ys] != i : !(Ys in p)) && So(p, Ys, {
      get: function() {
        return i;
      }
    }), f[i] = a, de(de.G + de.W + de.F * (a != l), f), de(de.S, i, {
      BYTES_PER_ELEMENT: e
    }), de(de.S + de.F * nn(function() {
      l.of.call(a, 1);
    }), i, {
      from: cf,
      of: lP
    }), Wy in p || rn(p, Wy, e), de(de.P, i, Zy), BI(i), de(de.P + de.F * aP, i, { set: eb }), de(de.P + de.F * !y, i, ra), !Zu && p.toString != Eo && (p.toString = Eo), de(de.P + de.F * nn(function() {
      new a(1).slice();
    }), i, { slice: Qy }), de(de.P + de.F * (nn(function() {
      return [1, 2].toLocaleString() != new a([1, 2]).toLocaleString();
    }) || !nn(function() {
      p.toLocaleString.call([1, 2]);
    })), i, { toLocaleString: Yy }), LI[i] = y ? v : C, !Zu && !y && rn(p, af, C);
  };
} else
  Wp.exports = function() {
  };
var Ln = Wp.exports;
Ln("Int8", 1, function(t) {
  return function(n, r, i) {
    return t(this, n, r, i);
  };
});
Ln("Uint8", 1, function(t) {
  return function(n, r, i) {
    return t(this, n, r, i);
  };
});
Ln("Uint8", 1, function(t) {
  return function(n, r, i) {
    return t(this, n, r, i);
  };
}, !0);
Ln("Int16", 2, function(t) {
  return function(n, r, i) {
    return t(this, n, r, i);
  };
});
Ln("Uint16", 2, function(t) {
  return function(n, r, i) {
    return t(this, n, r, i);
  };
});
Ln("Int32", 4, function(t) {
  return function(n, r, i) {
    return t(this, n, r, i);
  };
});
Ln("Uint32", 4, function(t) {
  return function(n, r, i) {
    return t(this, n, r, i);
  };
});
Ln("Float32", 4, function(t) {
  return function(n, r, i) {
    return t(this, n, r, i);
  };
});
Ln("Float64", 8, function(t) {
  return function(n, r, i) {
    return t(this, n, r, i);
  };
});
var uf = $, uP = mn, fP = ce, ff = (se.Reflect || {}).apply, pP = Function.apply;
uf(uf.S + uf.F * !ae(function() {
  ff(function() {
  });
}), "Reflect", {
  apply: function(e, n, r) {
    var i = uP(e), o = fP(r);
    return ff ? ff(i, n, o) : pP.call(i, n, o);
  }
});
var pf = $, dP = ri, ib = mn, hP = ce, ob = le, ex = ae, mP = tS, Oh = (se.Reflect || {}).construct, sb = ex(function() {
  function t() {
  }
  return !(Oh(function() {
  }, [], t) instanceof t);
}), ab = !ex(function() {
  Oh(function() {
  });
});
pf(pf.S + pf.F * (sb || ab), "Reflect", {
  construct: function(e, n) {
    ib(e), hP(n);
    var r = arguments.length < 3 ? e : ib(arguments[2]);
    if (ab && !sb)
      return Oh(e, n, r);
    if (e == r) {
      switch (n.length) {
        case 0:
          return new e();
        case 1:
          return new e(n[0]);
        case 2:
          return new e(n[0], n[1]);
        case 3:
          return new e(n[0], n[1], n[2]);
        case 4:
          return new e(n[0], n[1], n[2], n[3]);
      }
      var i = [null];
      return i.push.apply(i, n), new (mP.apply(e, i))();
    }
    var o = r.prototype, s = dP(ob(o) ? o : Object.prototype), a = Function.apply.call(e, s, n);
    return ob(a) ? a : s;
  }
});
var lb = Te, df = $, cb = ce, vP = ur;
df(df.S + df.F * ae(function() {
  Reflect.defineProperty(lb.f({}, 1, { value: 1 }), 1, { value: 2 });
}), "Reflect", {
  defineProperty: function(e, n, r) {
    cb(e), n = vP(n, !0), cb(r);
    try {
      return lb.f(e, n, r), !0;
    } catch {
      return !1;
    }
  }
});
var ub = $, gP = en.f, yP = ce;
ub(ub.S, "Reflect", {
  deleteProperty: function(e, n) {
    var r = gP(yP(e), n);
    return r && !r.configurable ? !1 : delete e[n];
  }
});
var fb = $, bP = ce, tx = function(t) {
  this._t = bP(t), this._i = 0;
  var e = this._k = [], n;
  for (n in t)
    e.push(n);
};
dS(tx, "Object", function() {
  var t = this, e = t._k, n;
  do
    if (t._i >= e.length)
      return { value: void 0, done: !0 };
  while (!((n = e[t._i++]) in t._t));
  return { value: n, done: !1 };
});
fb(fb.S, "Reflect", {
  enumerate: function(e) {
    return new tx(e);
  }
});
var wP = en, SP = ii, xP = Bt, pb = $, OP = le, EP = ce;
function nx(t, e) {
  var n = arguments.length < 3 ? t : arguments[2], r, i;
  if (EP(t) === n)
    return t[e];
  if (r = wP.f(t, e))
    return xP(r, "value") ? r.value : r.get !== void 0 ? r.get.call(n) : void 0;
  if (OP(i = SP(t)))
    return nx(i, e, n);
}
pb(pb.S, "Reflect", { get: nx });
var CP = en, db = $, _P = ce;
db(db.S, "Reflect", {
  getOwnPropertyDescriptor: function(e, n) {
    return CP.f(_P(e), n);
  }
});
var hb = $, kP = ii, NP = ce;
hb(hb.S, "Reflect", {
  getPrototypeOf: function(e) {
    return kP(NP(e));
  }
});
var mb = $;
mb(mb.S, "Reflect", {
  has: function(e, n) {
    return n in e;
  }
});
var vb = $, MP = ce, gb = Object.isExtensible;
vb(vb.S, "Reflect", {
  isExtensible: function(e) {
    return MP(e), gb ? gb(e) : !0;
  }
});
var TP = pr, $P = ps, IP = ce, yb = se.Reflect, rx = yb && yb.ownKeys || function(e) {
  var n = TP.f(IP(e)), r = $P.f;
  return r ? n.concat(r(e)) : n;
}, bb = $;
bb(bb.S, "Reflect", { ownKeys: rx });
var wb = $, PP = ce, Sb = Object.preventExtensions;
wb(wb.S, "Reflect", {
  preventExtensions: function(e) {
    PP(e);
    try {
      return Sb && Sb(e), !0;
    } catch {
      return !1;
    }
  }
});
var xb = Te, Ob = en, DP = ii, AP = Bt, Eb = $, Cb = Qr, RP = ce, _b = le;
function ix(t, e, n) {
  var r = arguments.length < 4 ? t : arguments[3], i = Ob.f(RP(t), e), o, s;
  if (!i) {
    if (_b(s = DP(t)))
      return ix(s, e, n, r);
    i = Cb(0);
  }
  if (AP(i, "value")) {
    if (i.writable === !1 || !_b(r))
      return !1;
    if (o = Ob.f(r, e)) {
      if (o.get || o.set || o.writable === !1)
        return !1;
      o.value = n, xb.f(r, e, o);
    } else
      xb.f(r, e, Cb(0, n));
    return !0;
  }
  return i.set === void 0 ? !1 : (i.set.call(r, n), !0);
}
Eb(Eb.S, "Reflect", { set: ix });
var kb = $, hf = Zd;
hf && kb(kb.S, "Reflect", {
  setPrototypeOf: function(e, n) {
    hf.check(e, n);
    try {
      return hf.set(e, n), !0;
    } catch {
      return !1;
    }
  }
});
var Nb = $, FP = _l(!0);
Nb(Nb.P, "Array", {
  includes: function(e) {
    return FP(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});
oi("includes");
We.Array.includes;
var LP = kl, jP = le, BP = Ee, zP = vn, VP = Se("isConcatSpreadable");
function ox(t, e, n, r, i, o, s, a) {
  for (var l = i, c = 0, u = s ? zP(s, a, 3) : !1, f, p; c < r; ) {
    if (c in n) {
      if (f = u ? u(n[c], c, e) : n[c], p = !1, jP(f) && (p = f[VP], p = p !== void 0 ? !!p : LP(f)), p && o > 0)
        l = ox(t, e, f, BP(f.length), l, o - 1) - 1;
      else {
        if (l >= 9007199254740991)
          throw TypeError();
        t[l] = f;
      }
      l++;
    }
    c++;
  }
  return l;
}
var WP = ox, Mb = $, HP = WP, UP = pt, GP = Ee, qP = mn, JP = vS;
Mb(Mb.P, "Array", {
  flatMap: function(e) {
    var n = UP(this), r, i;
    return qP(e), r = GP(n.length), i = JP(n, 0), HP(i, n, n, r, 0, 1, e, arguments[1]), i;
  }
});
oi("flatMap");
We.Array.flatMap;
var KP = Ee, XP = th, YP = Fn, sx = function(t, e, n, r) {
  var i = String(YP(t)), o = i.length, s = n === void 0 ? " " : String(n), a = KP(e);
  if (a <= o || s == "")
    return i;
  var l = a - o, c = XP.call(s, Math.ceil(l / s.length));
  return c.length > l && (c = c.slice(0, l)), r ? c + i : i + c;
}, mf = $, ZP = sx, QP = Fl, eD = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(QP);
mf(mf.P + mf.F * eD, "String", {
  padStart: function(e) {
    return ZP(this, e, arguments.length > 1 ? arguments[1] : void 0, !0);
  }
});
We.String.padStart;
var vf = $, tD = sx, nD = Fl, rD = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(nD);
vf(vf.P + vf.F * rD, "String", {
  padEnd: function(e) {
    return tD(this, e, arguments.length > 1 ? arguments[1] : void 0, !1);
  }
});
We.String.padEnd;
eo("trimLeft", function(t) {
  return function() {
    return t(this, 1);
  };
}, "trimStart");
We.String.trimLeft;
eo("trimRight", function(t) {
  return function() {
    return t(this, 2);
  };
}, "trimEnd");
We.String.trimRight;
Fw("asyncIterator");
Cl.f("asyncIterator");
var Tb = $, iD = rx, oD = Vt, sD = en, aD = fh;
Tb(Tb.S, "Object", {
  getOwnPropertyDescriptors: function(e) {
    for (var n = oD(e), r = sD.f, i = iD(n), o = {}, s = 0, a, l; i.length > s; )
      l = r(n, a = i[s++]), l !== void 0 && aD(o, a, l);
    return o;
  }
});
We.Object.getOwnPropertyDescriptors;
var lD = Re, cD = ni, uD = Vt, fD = Zi.f, ax = function(t) {
  return function(e) {
    for (var n = uD(e), r = cD(n), i = r.length, o = 0, s = [], a; i > o; )
      a = r[o++], (!lD || fD.call(n, a)) && s.push(t ? [a, n[a]] : n[a]);
    return s;
  };
}, $b = $, pD = ax(!1);
$b($b.S, "Object", {
  values: function(e) {
    return pD(e);
  }
});
We.Object.values;
var Ib = $, dD = ax(!0);
Ib(Ib.S, "Object", {
  entries: function(e) {
    return dD(e);
  }
});
We.Object.entries;
var gf = $, hD = We, mD = se, vD = vs, Pb = NS;
gf(gf.P + gf.R, "Promise", { finally: function(t) {
  var e = vD(this, hD.Promise || mD.Promise), n = typeof t == "function";
  return this.then(
    n ? function(r) {
      return Pb(e, t()).then(function() {
        return r;
      });
    } : t,
    n ? function(r) {
      return Pb(e, t()).then(function() {
        throw r;
      });
    } : t
  );
} });
We.Promise.finally;
var Db = se, ia = $, gD = Fl, yD = [].slice, bD = /MSIE .\./.test(gD), Ab = function(t) {
  return function(e, n) {
    var r = arguments.length > 2, i = r ? yD.call(arguments, 2) : !1;
    return t(r ? function() {
      (typeof e == "function" ? e : Function(e)).apply(this, i);
    } : e, n);
  };
};
ia(ia.G + ia.B + ia.F * bD, {
  setTimeout: Ab(Db.setTimeout),
  setInterval: Ab(Db.setInterval)
});
var yf = $, Rb = yh;
yf(yf.G + yf.B, {
  setImmediate: Rb.set,
  clearImmediate: Rb.clear
});
var Fb = xS, wD = ni, SD = _t, xD = se, Lb = zt, lx = to, cx = Se, jb = cx("iterator"), Bb = cx("toStringTag"), zb = lx.Array, Vb = {
  CSSRuleList: !0,
  // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: !1,
  CSSValueList: !1,
  ClientRectList: !1,
  DOMRectList: !1,
  DOMStringList: !1,
  DOMTokenList: !0,
  DataTransferItemList: !1,
  FileList: !1,
  HTMLAllCollection: !1,
  HTMLCollection: !1,
  HTMLFormElement: !1,
  HTMLSelectElement: !1,
  MediaList: !0,
  // TODO: Not spec compliant, should be false.
  MimeTypeArray: !1,
  NamedNodeMap: !1,
  NodeList: !0,
  PaintRequestList: !1,
  Plugin: !1,
  PluginArray: !1,
  SVGLengthList: !1,
  SVGNumberList: !1,
  SVGPathSegList: !1,
  SVGPointList: !1,
  SVGStringList: !1,
  SVGTransformList: !1,
  SourceBufferList: !1,
  StyleSheetList: !0,
  // TODO: Not spec compliant, should be false.
  TextTrackCueList: !1,
  TextTrackList: !1,
  TouchList: !1
};
for (var Wb = wD(Vb), bf = 0; bf < Wb.length; bf++) {
  var oa = Wb[bf], OD = Vb[oa], Hb = xD[oa], Cr = Hb && Hb.prototype, sa;
  if (Cr && (Cr[jb] || Lb(Cr, jb, zb), Cr[Bb] || Lb(Cr, Bb, oa), lx[oa] = zb, OD))
    for (sa in Fb)
      Cr[sa] || SD(Cr, sa, Fb[sa], !0);
}
var ED = { exports: {} };
(function(t) {
  var e = function(n) {
    var r = Object.prototype, i = r.hasOwnProperty, o = Object.defineProperty || function(g, S, _) {
      g[S] = _.value;
    }, s, a = typeof Symbol == "function" ? Symbol : {}, l = a.iterator || "@@iterator", c = a.asyncIterator || "@@asyncIterator", u = a.toStringTag || "@@toStringTag";
    function f(g, S, _) {
      return Object.defineProperty(g, S, {
        value: _,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), g[S];
    }
    try {
      f({}, "");
    } catch {
      f = function(S, _, D) {
        return S[_] = D;
      };
    }
    function p(g, S, _, D) {
      var P = S && S.prototype instanceof O ? S : O, A = Object.create(P.prototype), U = new Xe(D || []);
      return o(A, "_invoke", { value: ke(g, _, U) }), A;
    }
    n.wrap = p;
    function d(g, S, _) {
      try {
        return { type: "normal", arg: g.call(S, _) };
      } catch (D) {
        return { type: "throw", arg: D };
      }
    }
    var h = "suspendedStart", m = "suspendedYield", v = "executing", y = "completed", C = {};
    function O() {
    }
    function N() {
    }
    function T() {
    }
    var B = {};
    f(B, l, function() {
      return this;
    });
    var b = Object.getPrototypeOf, re = b && b(b(x([])));
    re && re !== r && i.call(re, l) && (B = re);
    var j = T.prototype = O.prototype = Object.create(B);
    N.prototype = T, o(j, "constructor", { value: T, configurable: !0 }), o(
      T,
      "constructor",
      { value: N, configurable: !0 }
    ), N.displayName = f(
      T,
      u,
      "GeneratorFunction"
    );
    function Q(g) {
      ["next", "throw", "return"].forEach(function(S) {
        f(g, S, function(_) {
          return this._invoke(S, _);
        });
      });
    }
    n.isGeneratorFunction = function(g) {
      var S = typeof g == "function" && g.constructor;
      return S ? S === N || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (S.displayName || S.name) === "GeneratorFunction" : !1;
    }, n.mark = function(g) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(g, T) : (g.__proto__ = T, f(g, u, "GeneratorFunction")), g.prototype = Object.create(j), g;
    }, n.awrap = function(g) {
      return { __await: g };
    };
    function ee(g, S) {
      function _(A, U, H, q) {
        var Z = d(g[A], g, U);
        if (Z.type === "throw")
          q(Z.arg);
        else {
          var ye = Z.arg, ve = ye.value;
          return ve && typeof ve == "object" && i.call(ve, "__await") ? S.resolve(ve.__await).then(function(fe) {
            _("next", fe, H, q);
          }, function(fe) {
            _("throw", fe, H, q);
          }) : S.resolve(ve).then(function(fe) {
            ye.value = fe, H(ye);
          }, function(fe) {
            return _("throw", fe, H, q);
          });
        }
      }
      var D;
      function P(A, U) {
        function H() {
          return new S(function(q, Z) {
            _(A, U, q, Z);
          });
        }
        return D = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        D ? D.then(
          H,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          H
        ) : H();
      }
      o(this, "_invoke", { value: P });
    }
    Q(ee.prototype), f(ee.prototype, c, function() {
      return this;
    }), n.AsyncIterator = ee, n.async = function(g, S, _, D, P) {
      P === void 0 && (P = Promise);
      var A = new ee(
        p(g, S, _, D),
        P
      );
      return n.isGeneratorFunction(S) ? A : A.next().then(function(U) {
        return U.done ? U.value : A.next();
      });
    };
    function ke(g, S, _) {
      var D = h;
      return function(A, U) {
        if (D === v)
          throw new Error("Generator is already running");
        if (D === y) {
          if (A === "throw")
            throw U;
          return w();
        }
        for (_.method = A, _.arg = U; ; ) {
          var H = _.delegate;
          if (H) {
            var q = $e(H, _);
            if (q) {
              if (q === C)
                continue;
              return q;
            }
          }
          if (_.method === "next")
            _.sent = _._sent = _.arg;
          else if (_.method === "throw") {
            if (D === h)
              throw D = y, _.arg;
            _.dispatchException(_.arg);
          } else
            _.method === "return" && _.abrupt("return", _.arg);
          D = v;
          var Z = d(g, S, _);
          if (Z.type === "normal") {
            if (D = _.done ? y : m, Z.arg === C)
              continue;
            return {
              value: Z.arg,
              done: _.done
            };
          } else
            Z.type === "throw" && (D = y, _.method = "throw", _.arg = Z.arg);
        }
      };
    }
    function $e(g, S) {
      var _ = S.method, D = g.iterator[_];
      if (D === s)
        return S.delegate = null, _ === "throw" && g.iterator.return && (S.method = "return", S.arg = s, $e(g, S), S.method === "throw") || _ !== "return" && (S.method = "throw", S.arg = new TypeError(
          "The iterator does not provide a '" + _ + "' method"
        )), C;
      var P = d(D, g.iterator, S.arg);
      if (P.type === "throw")
        return S.method = "throw", S.arg = P.arg, S.delegate = null, C;
      var A = P.arg;
      if (!A)
        return S.method = "throw", S.arg = new TypeError("iterator result is not an object"), S.delegate = null, C;
      if (A.done)
        S[g.resultName] = A.value, S.next = g.nextLoc, S.method !== "return" && (S.method = "next", S.arg = s);
      else
        return A;
      return S.delegate = null, C;
    }
    Q(j), f(j, u, "Generator"), f(j, l, function() {
      return this;
    }), f(j, "toString", function() {
      return "[object Generator]";
    });
    function Nt(g) {
      var S = { tryLoc: g[0] };
      1 in g && (S.catchLoc = g[1]), 2 in g && (S.finallyLoc = g[2], S.afterLoc = g[3]), this.tryEntries.push(S);
    }
    function He(g) {
      var S = g.completion || {};
      S.type = "normal", delete S.arg, g.completion = S;
    }
    function Xe(g) {
      this.tryEntries = [{ tryLoc: "root" }], g.forEach(Nt, this), this.reset(!0);
    }
    n.keys = function(g) {
      var S = Object(g), _ = [];
      for (var D in S)
        _.push(D);
      return _.reverse(), function P() {
        for (; _.length; ) {
          var A = _.pop();
          if (A in S)
            return P.value = A, P.done = !1, P;
        }
        return P.done = !0, P;
      };
    };
    function x(g) {
      if (g) {
        var S = g[l];
        if (S)
          return S.call(g);
        if (typeof g.next == "function")
          return g;
        if (!isNaN(g.length)) {
          var _ = -1, D = function P() {
            for (; ++_ < g.length; )
              if (i.call(g, _))
                return P.value = g[_], P.done = !1, P;
            return P.value = s, P.done = !0, P;
          };
          return D.next = D;
        }
      }
      return { next: w };
    }
    n.values = x;
    function w() {
      return { value: s, done: !0 };
    }
    return Xe.prototype = {
      constructor: Xe,
      reset: function(g) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = s, this.done = !1, this.delegate = null, this.method = "next", this.arg = s, this.tryEntries.forEach(He), !g)
          for (var S in this)
            S.charAt(0) === "t" && i.call(this, S) && !isNaN(+S.slice(1)) && (this[S] = s);
      },
      stop: function() {
        this.done = !0;
        var g = this.tryEntries[0], S = g.completion;
        if (S.type === "throw")
          throw S.arg;
        return this.rval;
      },
      dispatchException: function(g) {
        if (this.done)
          throw g;
        var S = this;
        function _(q, Z) {
          return A.type = "throw", A.arg = g, S.next = q, Z && (S.method = "next", S.arg = s), !!Z;
        }
        for (var D = this.tryEntries.length - 1; D >= 0; --D) {
          var P = this.tryEntries[D], A = P.completion;
          if (P.tryLoc === "root")
            return _("end");
          if (P.tryLoc <= this.prev) {
            var U = i.call(P, "catchLoc"), H = i.call(P, "finallyLoc");
            if (U && H) {
              if (this.prev < P.catchLoc)
                return _(P.catchLoc, !0);
              if (this.prev < P.finallyLoc)
                return _(P.finallyLoc);
            } else if (U) {
              if (this.prev < P.catchLoc)
                return _(P.catchLoc, !0);
            } else if (H) {
              if (this.prev < P.finallyLoc)
                return _(P.finallyLoc);
            } else
              throw new Error("try statement without catch or finally");
          }
        }
      },
      abrupt: function(g, S) {
        for (var _ = this.tryEntries.length - 1; _ >= 0; --_) {
          var D = this.tryEntries[_];
          if (D.tryLoc <= this.prev && i.call(D, "finallyLoc") && this.prev < D.finallyLoc) {
            var P = D;
            break;
          }
        }
        P && (g === "break" || g === "continue") && P.tryLoc <= S && S <= P.finallyLoc && (P = null);
        var A = P ? P.completion : {};
        return A.type = g, A.arg = S, P ? (this.method = "next", this.next = P.finallyLoc, C) : this.complete(A);
      },
      complete: function(g, S) {
        if (g.type === "throw")
          throw g.arg;
        return g.type === "break" || g.type === "continue" ? this.next = g.arg : g.type === "return" ? (this.rval = this.arg = g.arg, this.method = "return", this.next = "end") : g.type === "normal" && S && (this.next = S), C;
      },
      finish: function(g) {
        for (var S = this.tryEntries.length - 1; S >= 0; --S) {
          var _ = this.tryEntries[S];
          if (_.finallyLoc === g)
            return this.complete(_.completion, _.afterLoc), He(_), C;
        }
      },
      catch: function(g) {
        for (var S = this.tryEntries.length - 1; S >= 0; --S) {
          var _ = this.tryEntries[S];
          if (_.tryLoc === g) {
            var D = _.completion;
            if (D.type === "throw") {
              var P = D.arg;
              He(_);
            }
            return P;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function(g, S, _) {
        return this.delegate = {
          iterator: x(g),
          resultName: S,
          nextLoc: _
        }, this.method === "next" && (this.arg = s), C;
      }
    }, n;
  }(
    // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    t.exports
  );
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object" ? globalThis.regeneratorRuntime = e : Function("r", "regeneratorRuntime = r")(e);
  }
})(ED);
var ux = { exports: {} }, CD = ux.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
typeof __g == "number" && (__g = CD);
var Eh = ux.exports, fx = { exports: {} }, _D = fx.exports = { version: "2.6.12" };
typeof __e == "number" && (__e = _D);
var px = fx.exports, kD = function(t) {
  if (typeof t != "function")
    throw TypeError(t + " is not a function!");
  return t;
}, ND = kD, MD = function(t, e, n) {
  if (ND(t), e === void 0)
    return t;
  switch (n) {
    case 1:
      return function(r) {
        return t.call(e, r);
      };
    case 2:
      return function(r, i) {
        return t.call(e, r, i);
      };
    case 3:
      return function(r, i, o) {
        return t.call(e, r, i, o);
      };
  }
  return function() {
    return t.apply(e, arguments);
  };
}, dx = {}, Ch = function(t) {
  return typeof t == "object" ? t !== null : typeof t == "function";
}, TD = Ch, $D = function(t) {
  if (!TD(t))
    throw TypeError(t + " is not an object!");
  return t;
}, hx = function(t) {
  try {
    return !!t();
  } catch {
    return !0;
  }
}, _h = !hx(function() {
  return Object.defineProperty({}, "a", { get: function() {
    return 7;
  } }).a != 7;
}), wf, Ub;
function ID() {
  if (Ub)
    return wf;
  Ub = 1;
  var t = Ch, e = Eh.document, n = t(e) && t(e.createElement);
  return wf = function(r) {
    return n ? e.createElement(r) : {};
  }, wf;
}
var PD = !_h && !hx(function() {
  return Object.defineProperty(ID()("div"), "a", { get: function() {
    return 7;
  } }).a != 7;
}), aa = Ch, DD = function(t, e) {
  if (!aa(t))
    return t;
  var n, r;
  if (e && typeof (n = t.toString) == "function" && !aa(r = n.call(t)) || typeof (n = t.valueOf) == "function" && !aa(r = n.call(t)) || !e && typeof (n = t.toString) == "function" && !aa(r = n.call(t)))
    return r;
  throw TypeError("Can't convert object to primitive value");
}, Gb = $D, AD = PD, RD = DD, FD = Object.defineProperty;
dx.f = _h ? Object.defineProperty : function(e, n, r) {
  if (Gb(e), n = RD(n, !0), Gb(r), AD)
    try {
      return FD(e, n, r);
    } catch {
    }
  if ("get" in r || "set" in r)
    throw TypeError("Accessors not supported!");
  return "value" in r && (e[n] = r.value), e;
};
var LD = function(t, e) {
  return {
    enumerable: !(t & 1),
    configurable: !(t & 2),
    writable: !(t & 4),
    value: e
  };
}, jD = dx, BD = LD, zD = _h ? function(t, e, n) {
  return jD.f(t, e, BD(1, n));
} : function(t, e, n) {
  return t[e] = n, t;
}, VD = {}.hasOwnProperty, WD = function(t, e) {
  return VD.call(t, e);
}, la = Eh, Sf = px, qb = MD, HD = zD, UD = WD, ca = "prototype", et = function(t, e, n) {
  var r = t & et.F, i = t & et.G, o = t & et.S, s = t & et.P, a = t & et.B, l = t & et.W, c = i ? Sf : Sf[e] || (Sf[e] = {}), u = c[ca], f = i ? la : o ? la[e] : (la[e] || {})[ca], p, d, h;
  i && (n = e);
  for (p in n)
    d = !r && f && f[p] !== void 0, !(d && UD(c, p)) && (h = d ? f[p] : n[p], c[p] = i && typeof f[p] != "function" ? n[p] : a && d ? qb(h, la) : l && f[p] == h ? function(m) {
      var v = function(y, C, O) {
        if (this instanceof m) {
          switch (arguments.length) {
            case 0:
              return new m();
            case 1:
              return new m(y);
            case 2:
              return new m(y, C);
          }
          return new m(y, C, O);
        }
        return m.apply(this, arguments);
      };
      return v[ca] = m[ca], v;
    }(h) : s && typeof h == "function" ? qb(Function.call, h) : h, s && ((c.virtual || (c.virtual = {}))[p] = h, t & et.R && u && !u[p] && HD(u, p, h)));
};
et.F = 1;
et.G = 2;
et.S = 4;
et.P = 8;
et.B = 16;
et.W = 32;
et.U = 64;
et.R = 128;
var GD = et, Jb = GD;
Jb(Jb.G, { global: Eh });
var qD = px.global, mx = JD(qD);
function JD(t) {
  return t && t.__esModule ? t : { default: t };
}
mx.default._babelPolyfill && typeof console < "u" && console.warn && console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning.");
mx.default._babelPolyfill = !0;
(function(t) {
  var e = "currentScript", n = t.getElementsByTagName("script");
  e in t || Object.defineProperty(t, e, {
    get: function() {
      try {
        throw new Error();
      } catch (o) {
        var r, i = (/.*at [^\(]*\((.*):.+:.+\)$/ig.exec(o.stack) || [!1])[1];
        for (r in n)
          if (n[r].src == i || n[r].readyState == "interactive")
            return n[r];
        return null;
      }
    }
  });
})(document);
function Ue(t) {
  this.content = t;
}
Ue.prototype = {
  constructor: Ue,
  find: function(t) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === t)
        return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(t) {
    var e = this.find(t);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(t, e, n) {
    var r = n && n != t ? this.remove(n) : this, i = r.find(t), o = r.content.slice();
    return i == -1 ? o.push(n || t, e) : (o[i + 1] = e, n && (o[i] = n)), new Ue(o);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(t) {
    var e = this.find(t);
    if (e == -1)
      return this;
    var n = this.content.slice();
    return n.splice(e, 2), new Ue(n);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(t, e) {
    return new Ue([t, e].concat(this.remove(t).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(t, e) {
    var n = this.remove(t).content.slice();
    return n.push(t, e), new Ue(n);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(t, e, n) {
    var r = this.remove(e), i = r.content.slice(), o = r.find(t);
    return i.splice(o == -1 ? i.length : o, 0, e, n), new Ue(i);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(t) {
    for (var e = 0; e < this.content.length; e += 2)
      t(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(t) {
    return t = Ue.from(t), t.size ? new Ue(t.content.concat(this.subtract(t).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(t) {
    return t = Ue.from(t), t.size ? new Ue(this.subtract(t).content.concat(t.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(t) {
    var e = this;
    t = Ue.from(t);
    for (var n = 0; n < t.content.length; n += 2)
      e = e.remove(t.content[n]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var t = {};
    return this.forEach(function(e, n) {
      t[e] = n;
    }), t;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
Ue.from = function(t) {
  if (t instanceof Ue)
    return t;
  var e = [];
  if (t)
    for (var n in t)
      e.push(n, t[n]);
  return new Ue(e);
};
function vx(t, e, n) {
  for (let r = 0; ; r++) {
    if (r == t.childCount || r == e.childCount)
      return t.childCount == e.childCount ? null : n;
    let i = t.child(r), o = e.child(r);
    if (i == o) {
      n += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(o))
      return n;
    if (i.isText && i.text != o.text) {
      for (let s = 0; i.text[s] == o.text[s]; s++)
        n++;
      return n;
    }
    if (i.content.size || o.content.size) {
      let s = vx(i.content, o.content, n + 1);
      if (s != null)
        return s;
    }
    n += i.nodeSize;
  }
}
function gx(t, e, n, r) {
  for (let i = t.childCount, o = e.childCount; ; ) {
    if (i == 0 || o == 0)
      return i == o ? null : { a: n, b: r };
    let s = t.child(--i), a = e.child(--o), l = s.nodeSize;
    if (s == a) {
      n -= l, r -= l;
      continue;
    }
    if (!s.sameMarkup(a))
      return { a: n, b: r };
    if (s.isText && s.text != a.text) {
      let c = 0, u = Math.min(s.text.length, a.text.length);
      for (; c < u && s.text[s.text.length - c - 1] == a.text[a.text.length - c - 1]; )
        c++, n--, r--;
      return { a: n, b: r };
    }
    if (s.content.size || a.content.size) {
      let c = gx(s.content, a.content, n - 1, r - 1);
      if (c)
        return c;
    }
    n -= l, r -= l;
  }
}
class I {
  /**
  @internal
  */
  constructor(e, n) {
    if (this.content = e, this.size = n || 0, n == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, n, r, i = 0, o) {
    for (let s = 0, a = 0; a < n; s++) {
      let l = this.content[s], c = a + l.nodeSize;
      if (c > e && r(l, i + a, o || null, s) !== !1 && l.content.size) {
        let u = a + 1;
        l.nodesBetween(Math.max(0, e - u), Math.min(l.content.size, n - u), r, i + u);
      }
      a = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, n, r, i) {
    let o = "", s = !0;
    return this.nodesBetween(e, n, (a, l) => {
      a.isText ? (o += a.text.slice(Math.max(e, l) - l, n - l), s = !r) : a.isLeaf ? (i ? o += typeof i == "function" ? i(a) : i : a.type.spec.leafText && (o += a.type.spec.leafText(a)), s = !r) : !s && a.isBlock && (o += r, s = !0);
    }, 0), o;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let n = this.lastChild, r = e.firstChild, i = this.content.slice(), o = 0;
    for (n.isText && n.sameMarkup(r) && (i[i.length - 1] = n.withText(n.text + r.text), o = 1); o < e.content.length; o++)
      i.push(e.content[o]);
    return new I(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, n = this.size) {
    if (e == 0 && n == this.size)
      return this;
    let r = [], i = 0;
    if (n > e)
      for (let o = 0, s = 0; s < n; o++) {
        let a = this.content[o], l = s + a.nodeSize;
        l > e && ((s < e || l > n) && (a.isText ? a = a.cut(Math.max(0, e - s), Math.min(a.text.length, n - s)) : a = a.cut(Math.max(0, e - s - 1), Math.min(a.content.size, n - s - 1))), r.push(a), i += a.nodeSize), s = l;
      }
    return new I(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, n) {
    return e == n ? I.empty : e == 0 && n == this.content.length ? this : new I(this.content.slice(e, n));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, n) {
    let r = this.content[e];
    if (r == n)
      return this;
    let i = this.content.slice(), o = this.size + n.nodeSize - r.nodeSize;
    return i[e] = n, new I(i, o);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new I([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new I(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let n = 0; n < this.content.length; n++)
      if (!this.content[n].eq(e.content[n]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let n = this.content[e];
    if (!n)
      throw new RangeError("Index " + e + " out of range for " + this);
    return n;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let n = 0, r = 0; n < this.content.length; n++) {
      let i = this.content[n];
      e(i, r, n), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, n = 0) {
    return vx(this, e, n);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, n = this.size, r = e.size) {
    return gx(this, e, n, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. (Not public.)
  */
  findIndex(e, n = -1) {
    if (e == 0)
      return ua(0, e);
    if (e == this.size)
      return ua(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let r = 0, i = 0; ; r++) {
      let o = this.child(r), s = i + o.nodeSize;
      if (s >= e)
        return s == e || n > 0 ? ua(r + 1, s) : ua(r, i);
      i = s;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      return I.empty;
    if (!Array.isArray(n))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new I(n.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return I.empty;
    let n, r = 0;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      r += o.nodeSize, i && o.isText && e[i - 1].sameMarkup(o) ? (n || (n = e.slice(0, i)), n[n.length - 1] = o.withText(n[n.length - 1].text + o.text)) : n && n.push(o);
    }
    return new I(n || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return I.empty;
    if (e instanceof I)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new I([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
I.empty = new I([], 0);
const xf = { index: 0, offset: 0 };
function ua(t, e) {
  return xf.index = t, xf.offset = e, xf;
}
function Ua(t, e) {
  if (t === e)
    return !0;
  if (!(t && typeof t == "object") || !(e && typeof e == "object"))
    return !1;
  let n = Array.isArray(t);
  if (Array.isArray(e) != n)
    return !1;
  if (n) {
    if (t.length != e.length)
      return !1;
    for (let r = 0; r < t.length; r++)
      if (!Ua(t[r], e[r]))
        return !1;
  } else {
    for (let r in t)
      if (!(r in e) || !Ua(t[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in t))
        return !1;
  }
  return !0;
}
let pe = class Hp {
  /**
  @internal
  */
  constructor(e, n) {
    this.type = e, this.attrs = n;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let n, r = !1;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      if (this.eq(o))
        return e;
      if (this.type.excludes(o.type))
        n || (n = e.slice(0, i));
      else {
        if (o.type.excludes(this.type))
          return e;
        !r && o.type.rank > this.type.rank && (n || (n = e.slice(0, i)), n.push(this), r = !0), n && n.push(o);
      }
    }
    return n || (n = e.slice()), r || n.push(this), n;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let n = 0; n < e.length; n++)
      if (this.eq(e[n]))
        return e.slice(0, n).concat(e.slice(n + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let n = 0; n < e.length; n++)
      if (this.eq(e[n]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && Ua(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let n in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, n) {
    if (!n)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[n.type];
    if (!r)
      throw new RangeError(`There is no mark type ${n.type} in this schema`);
    return r.create(n.attrs);
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, n) {
    if (e == n)
      return !0;
    if (e.length != n.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(n[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return Hp.none;
    if (e instanceof Hp)
      return [e];
    let n = e.slice();
    return n.sort((r, i) => r.type.rank - i.type.rank), n;
  }
};
pe.none = [];
class Ga extends Error {
}
class L {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, n, r) {
    this.content = e, this.openStart = n, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, n) {
    let r = bx(this.content, e + this.openStart, n);
    return r && new L(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, n) {
    return new L(yx(this.content, e + this.openStart, n + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      return L.empty;
    let r = n.openStart || 0, i = n.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new L(I.fromJSON(e, n.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, n = !0) {
    let r = 0, i = 0;
    for (let o = e.firstChild; o && !o.isLeaf && (n || !o.type.spec.isolating); o = o.firstChild)
      r++;
    for (let o = e.lastChild; o && !o.isLeaf && (n || !o.type.spec.isolating); o = o.lastChild)
      i++;
    return new L(e, r, i);
  }
}
L.empty = new L(I.empty, 0, 0);
function yx(t, e, n) {
  let { index: r, offset: i } = t.findIndex(e), o = t.maybeChild(r), { index: s, offset: a } = t.findIndex(n);
  if (i == e || o.isText) {
    if (a != n && !t.child(s).isText)
      throw new RangeError("Removing non-flat range");
    return t.cut(0, e).append(t.cut(n));
  }
  if (r != s)
    throw new RangeError("Removing non-flat range");
  return t.replaceChild(r, o.copy(yx(o.content, e - i - 1, n - i - 1)));
}
function bx(t, e, n, r) {
  let { index: i, offset: o } = t.findIndex(e), s = t.maybeChild(i);
  if (o == e || s.isText)
    return r && !r.canReplace(i, i, n) ? null : t.cut(0, e).append(n).append(t.cut(e));
  let a = bx(s.content, e - o - 1, n);
  return a && t.replaceChild(i, s.copy(a));
}
function KD(t, e, n) {
  if (n.openStart > t.depth)
    throw new Ga("Inserted content deeper than insertion position");
  if (t.depth - n.openStart != e.depth - n.openEnd)
    throw new Ga("Inconsistent open depths");
  return wx(t, e, n, 0);
}
function wx(t, e, n, r) {
  let i = t.index(r), o = t.node(r);
  if (i == e.index(r) && r < t.depth - n.openStart) {
    let s = wx(t, e, n, r + 1);
    return o.copy(o.content.replaceChild(i, s));
  } else if (n.content.size)
    if (!n.openStart && !n.openEnd && t.depth == r && e.depth == r) {
      let s = t.parent, a = s.content;
      return Rr(s, a.cut(0, t.parentOffset).append(n.content).append(a.cut(e.parentOffset)));
    } else {
      let { start: s, end: a } = XD(n, t);
      return Rr(o, xx(t, s, a, e, r));
    }
  else
    return Rr(o, qa(t, e, r));
}
function Sx(t, e) {
  if (!e.type.compatibleContent(t.type))
    throw new Ga("Cannot join " + e.type.name + " onto " + t.type.name);
}
function Up(t, e, n) {
  let r = t.node(n);
  return Sx(r, e.node(n)), r;
}
function Ar(t, e) {
  let n = e.length - 1;
  n >= 0 && t.isText && t.sameMarkup(e[n]) ? e[n] = t.withText(e[n].text + t.text) : e.push(t);
}
function Lo(t, e, n, r) {
  let i = (e || t).node(n), o = 0, s = e ? e.index(n) : i.childCount;
  t && (o = t.index(n), t.depth > n ? o++ : t.textOffset && (Ar(t.nodeAfter, r), o++));
  for (let a = o; a < s; a++)
    Ar(i.child(a), r);
  e && e.depth == n && e.textOffset && Ar(e.nodeBefore, r);
}
function Rr(t, e) {
  return t.type.checkContent(e), t.copy(e);
}
function xx(t, e, n, r, i) {
  let o = t.depth > i && Up(t, e, i + 1), s = r.depth > i && Up(n, r, i + 1), a = [];
  return Lo(null, t, i, a), o && s && e.index(i) == n.index(i) ? (Sx(o, s), Ar(Rr(o, xx(t, e, n, r, i + 1)), a)) : (o && Ar(Rr(o, qa(t, e, i + 1)), a), Lo(e, n, i, a), s && Ar(Rr(s, qa(n, r, i + 1)), a)), Lo(r, null, i, a), new I(a);
}
function qa(t, e, n) {
  let r = [];
  if (Lo(null, t, n, r), t.depth > n) {
    let i = Up(t, e, n + 1);
    Ar(Rr(i, qa(t, e, n + 1)), r);
  }
  return Lo(e, null, n, r), new I(r);
}
function XD(t, e) {
  let n = e.depth - t.openStart, i = e.node(n).copy(t.content);
  for (let o = n - 1; o >= 0; o--)
    i = e.node(o).copy(I.from(i));
  return {
    start: i.resolveNoCache(t.openStart + n),
    end: i.resolveNoCache(i.content.size - t.openEnd - n)
  };
}
class Jo {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.pos = e, this.path = n, this.parentOffset = r, this.depth = n.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, n = this.index(this.depth);
    if (n == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], i = e.child(n);
    return r ? e.child(n).cut(r) : i;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), n = this.pos - this.path[this.path.length - 1];
    return n ? this.parent.child(e).cut(0, n) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, n) {
    n = this.resolveDepth(n);
    let r = this.path[n * 3], i = n == 0 ? 0 : this.path[n * 3 - 1] + 1;
    for (let o = 0; o < e; o++)
      i += r.child(o).nodeSize;
    return i;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, n = this.index();
    if (e.content.size == 0)
      return pe.none;
    if (this.textOffset)
      return e.child(n).marks;
    let r = e.maybeChild(n - 1), i = e.maybeChild(n);
    if (!r) {
      let a = r;
      r = i, i = a;
    }
    let o = r.marks;
    for (var s = 0; s < o.length; s++)
      o[s].type.spec.inclusive === !1 && (!i || !o[s].isInSet(i.marks)) && (o = o[s--].removeFromSet(o));
    return o;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let n = this.parent.maybeChild(this.index());
    if (!n || !n.isInline)
      return null;
    let r = n.marks, i = e.parent.maybeChild(e.index());
    for (var o = 0; o < r.length; o++)
      r[o].type.spec.inclusive === !1 && (!i || !r[o].isInSet(i.marks)) && (r = r[o--].removeFromSet(r));
    return r;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let n = this.depth; n > 0; n--)
      if (this.start(n) <= e && this.end(n) >= e)
        return n;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, n) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!n || n(this.node(r))))
        return new Ja(this, e, r);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let n = 1; n <= this.depth; n++)
      e += (e ? "/" : "") + this.node(n).type.name + "_" + this.index(n - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, n) {
    if (!(n >= 0 && n <= e.content.size))
      throw new RangeError("Position " + n + " out of range");
    let r = [], i = 0, o = n;
    for (let s = e; ; ) {
      let { index: a, offset: l } = s.content.findIndex(o), c = o - l;
      if (r.push(s, a, i + l), !c || (s = s.child(a), s.isText))
        break;
      o = c - 1, i += l + 1;
    }
    return new Jo(n, r, o);
  }
  /**
  @internal
  */
  static resolveCached(e, n) {
    for (let i = 0; i < Of.length; i++) {
      let o = Of[i];
      if (o.pos == n && o.doc == e)
        return o;
    }
    let r = Of[Ef] = Jo.resolve(e, n);
    return Ef = (Ef + 1) % YD, r;
  }
}
let Of = [], Ef = 0, YD = 12;
class Ja {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, n, r) {
    this.$from = e, this.$to = n, this.depth = r;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const ZD = /* @__PURE__ */ Object.create(null);
let Fr = class Gp {
  /**
  @internal
  */
  constructor(e, n, r, i = pe.none) {
    this.type = e, this.attrs = n, this.marks = i, this.content = r || I.empty;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, n, r, i = 0) {
    this.content.nodesBetween(e, n, r, i, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec^leafText) will be used.
  */
  textBetween(e, n, r, i) {
    return this.content.textBetween(e, n, r, i);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, n, r) {
    return this.type == e && Ua(this.attrs, n || e.defaultAttrs || ZD) && pe.sameSet(this.marks, r || pe.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new Gp(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new Gp(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, n = this.content.size) {
    return e == 0 && n == this.content.size ? this : this.copy(this.content.cut(e, n));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, n = this.content.size, r = !1) {
    if (e == n)
      return L.empty;
    let i = this.resolve(e), o = this.resolve(n), s = r ? 0 : i.sharedDepth(n), a = i.start(s), c = i.node(s).content.cut(i.pos - a, o.pos - a);
    return new L(c, i.depth - s, o.depth - s);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, n, r) {
    return KD(this.resolve(e), this.resolve(n), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let n = this; ; ) {
      let { index: r, offset: i } = n.content.findIndex(e);
      if (n = n.maybeChild(r), !n)
        return null;
      if (i == e || n.isText)
        return n;
      e -= i + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: n, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(n), index: n, offset: r };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: n, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(n), index: n, offset: r };
    let i = this.content.child(n - 1);
    return { node: i, index: n - 1, offset: r - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return Jo.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return Jo.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, n, r) {
    let i = !1;
    return n > e && this.nodesBetween(e, n, (o) => (r.isInSet(o.marks) && (i = !0), !i)), i;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), Ox(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let n = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!n)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return n;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, n, r = I.empty, i = 0, o = r.childCount) {
    let s = this.contentMatchAt(e).matchFragment(r, i, o), a = s && s.matchFragment(this.content, n);
    if (!a || !a.validEnd)
      return !1;
    for (let l = i; l < o; l++)
      if (!this.type.allowsMarks(r.child(l).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, n, r, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let o = this.contentMatchAt(e).matchType(r), s = o && o.matchFragment(this.content, n);
    return s ? s.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise error when they do not.
  */
  check() {
    this.type.checkContent(this.content);
    let e = pe.none;
    for (let n = 0; n < this.marks.length; n++)
      e = this.marks[n].addToSet(e);
    if (!pe.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((n) => n.type.name)}`);
    this.content.forEach((n) => n.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let n in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((n) => n.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r = null;
    if (n.marks) {
      if (!Array.isArray(n.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = n.marks.map(e.markFromJSON);
    }
    if (n.type == "text") {
      if (typeof n.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(n.text, r);
    }
    let i = I.fromJSON(e, n.content);
    return e.nodeType(n.type).create(n.attrs, i, r);
  }
};
Fr.prototype.text = void 0;
class Ka extends Fr {
  /**
  @internal
  */
  constructor(e, n, r, i) {
    if (super(e, n, null, i), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : Ox(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, n) {
    return this.text.slice(e, n);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new Ka(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new Ka(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, n = this.text.length) {
    return e == 0 && n == this.text.length ? this : this.withText(this.text.slice(e, n));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function Ox(t, e) {
  for (let n = t.length - 1; n >= 0; n--)
    e = t[n].type.name + "(" + e + ")";
  return e;
}
class Ur {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, n) {
    let r = new QD(e, n);
    if (r.next == null)
      return Ur.empty;
    let i = Ex(r);
    r.next && r.err("Unexpected trailing text");
    let o = sA(oA(i));
    return aA(o, r), o;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let n = 0; n < this.next.length; n++)
      if (this.next[n].type == e)
        return this.next[n].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, n = 0, r = e.childCount) {
    let i = this;
    for (let o = n; i && o < r; o++)
      i = i.matchType(e.child(o).type);
    return i;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: n } = this.next[e];
      if (!(n.isText || n.hasRequiredAttrs()))
        return n;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let n = 0; n < this.next.length; n++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[n].type == e.next[r].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, n = !1, r = 0) {
    let i = [this];
    function o(s, a) {
      let l = s.matchFragment(e, r);
      if (l && (!n || l.validEnd))
        return I.from(a.map((c) => c.createAndFill()));
      for (let c = 0; c < s.next.length; c++) {
        let { type: u, next: f } = s.next[c];
        if (!(u.isText || u.hasRequiredAttrs()) && i.indexOf(f) == -1) {
          i.push(f);
          let p = o(f, a.concat(u));
          if (p)
            return p;
        }
      }
      return null;
    }
    return o(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    let n = this.computeWrapping(e);
    return this.wrapCache.push(e, n), n;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let n = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let i = r.shift(), o = i.match;
      if (o.matchType(e)) {
        let s = [];
        for (let a = i; a.type; a = a.via)
          s.push(a.type);
        return s.reverse();
      }
      for (let s = 0; s < o.next.length; s++) {
        let { type: a, next: l } = o.next[s];
        !a.isLeaf && !a.hasRequiredAttrs() && !(a.name in n) && (!i.type || l.validEnd) && (r.push({ match: a.contentMatch, type: a, via: i }), n[a.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function n(r) {
      e.push(r);
      for (let i = 0; i < r.next.length; i++)
        e.indexOf(r.next[i].next) == -1 && n(r.next[i].next);
    }
    return n(this), e.map((r, i) => {
      let o = i + (r.validEnd ? "*" : " ") + " ";
      for (let s = 0; s < r.next.length; s++)
        o += (s ? ", " : "") + r.next[s].type.name + "->" + e.indexOf(r.next[s].next);
      return o;
    }).join(`
`);
  }
}
Ur.empty = new Ur(!0);
class QD {
  constructor(e, n) {
    this.string = e, this.nodeTypes = n, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function Ex(t) {
  let e = [];
  do
    e.push(eA(t));
  while (t.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function eA(t) {
  let e = [];
  do
    e.push(tA(t));
  while (t.next && t.next != ")" && t.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function tA(t) {
  let e = iA(t);
  for (; ; )
    if (t.eat("+"))
      e = { type: "plus", expr: e };
    else if (t.eat("*"))
      e = { type: "star", expr: e };
    else if (t.eat("?"))
      e = { type: "opt", expr: e };
    else if (t.eat("{"))
      e = nA(t, e);
    else
      break;
  return e;
}
function Kb(t) {
  /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
  let e = Number(t.next);
  return t.pos++, e;
}
function nA(t, e) {
  let n = Kb(t), r = n;
  return t.eat(",") && (t.next != "}" ? r = Kb(t) : r = -1), t.eat("}") || t.err("Unclosed braced range"), { type: "range", min: n, max: r, expr: e };
}
function rA(t, e) {
  let n = t.nodeTypes, r = n[e];
  if (r)
    return [r];
  let i = [];
  for (let o in n) {
    let s = n[o];
    s.groups.indexOf(e) > -1 && i.push(s);
  }
  return i.length == 0 && t.err("No node type or group '" + e + "' found"), i;
}
function iA(t) {
  if (t.eat("(")) {
    let e = Ex(t);
    return t.eat(")") || t.err("Missing closing paren"), e;
  } else if (/\W/.test(t.next))
    t.err("Unexpected token '" + t.next + "'");
  else {
    let e = rA(t, t.next).map((n) => (t.inline == null ? t.inline = n.isInline : t.inline != n.isInline && t.err("Mixing inline and block content"), { type: "name", value: n }));
    return t.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function oA(t) {
  let e = [[]];
  return i(o(t, 0), n()), e;
  function n() {
    return e.push([]) - 1;
  }
  function r(s, a, l) {
    let c = { term: l, to: a };
    return e[s].push(c), c;
  }
  function i(s, a) {
    s.forEach((l) => l.to = a);
  }
  function o(s, a) {
    if (s.type == "choice")
      return s.exprs.reduce((l, c) => l.concat(o(c, a)), []);
    if (s.type == "seq")
      for (let l = 0; ; l++) {
        let c = o(s.exprs[l], a);
        if (l == s.exprs.length - 1)
          return c;
        i(c, a = n());
      }
    else if (s.type == "star") {
      let l = n();
      return r(a, l), i(o(s.expr, l), l), [r(l)];
    } else if (s.type == "plus") {
      let l = n();
      return i(o(s.expr, a), l), i(o(s.expr, l), l), [r(l)];
    } else {
      if (s.type == "opt")
        return [r(a)].concat(o(s.expr, a));
      if (s.type == "range") {
        let l = a;
        for (let c = 0; c < s.min; c++) {
          let u = n();
          i(o(s.expr, l), u), l = u;
        }
        if (s.max == -1)
          i(o(s.expr, l), l);
        else
          for (let c = s.min; c < s.max; c++) {
            let u = n();
            r(l, u), i(o(s.expr, l), u), l = u;
          }
        return [r(l)];
      } else {
        if (s.type == "name")
          return [r(a, void 0, s.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function Cx(t, e) {
  return e - t;
}
function Xb(t, e) {
  let n = [];
  return r(e), n.sort(Cx);
  function r(i) {
    let o = t[i];
    if (o.length == 1 && !o[0].term)
      return r(o[0].to);
    n.push(i);
    for (let s = 0; s < o.length; s++) {
      let { term: a, to: l } = o[s];
      !a && n.indexOf(l) == -1 && r(l);
    }
  }
}
function sA(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return n(Xb(t, 0));
  function n(r) {
    let i = [];
    r.forEach((s) => {
      t[s].forEach(({ term: a, to: l }) => {
        if (!a)
          return;
        let c;
        for (let u = 0; u < i.length; u++)
          i[u][0] == a && (c = i[u][1]);
        Xb(t, l).forEach((u) => {
          c || i.push([a, c = []]), c.indexOf(u) == -1 && c.push(u);
        });
      });
    });
    let o = e[r.join(",")] = new Ur(r.indexOf(t.length - 1) > -1);
    for (let s = 0; s < i.length; s++) {
      let a = i[s][1].sort(Cx);
      o.next.push({ type: i[s][0], next: e[a.join(",")] || n(a) });
    }
    return o;
  }
}
function aA(t, e) {
  for (let n = 0, r = [t]; n < r.length; n++) {
    let i = r[n], o = !i.validEnd, s = [];
    for (let a = 0; a < i.next.length; a++) {
      let { type: l, next: c } = i.next[a];
      s.push(l.name), o && !(l.isText || l.hasRequiredAttrs()) && (o = !1), r.indexOf(c) == -1 && r.push(c);
    }
    o && e.err("Only non-generatable nodes (" + s.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function _x(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t) {
    let r = t[n];
    if (!r.hasDefault)
      return null;
    e[n] = r.default;
  }
  return e;
}
function kx(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  for (let r in t) {
    let i = e && e[r];
    if (i === void 0) {
      let o = t[r];
      if (o.hasDefault)
        i = o.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    n[r] = i;
  }
  return n;
}
function Nx(t) {
  let e = /* @__PURE__ */ Object.create(null);
  if (t)
    for (let n in t)
      e[n] = new lA(t[n]);
  return e;
}
let Yb = class Mx {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.name = e, this.schema = n, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = Nx(r.attrs), this.defaultAttrs = _x(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == Ur.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : kx(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, n, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new Fr(this, this.computeAttrs(e), I.from(n), pe.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, n, r) {
    return n = I.from(n), this.checkContent(n), new Fr(this, this.computeAttrs(e), n, pe.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, n, r) {
    if (e = this.computeAttrs(e), n = I.from(n), n.size) {
      let s = this.contentMatch.fillBefore(n);
      if (!s)
        return null;
      n = s.append(n);
    }
    let i = this.contentMatch.matchFragment(n), o = i && i.fillBefore(I.empty, !0);
    return o ? new Fr(this, e, n.append(o), pe.setFrom(r)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type with the given attributes.
  */
  validContent(e) {
    let n = this.contentMatch.matchFragment(e);
    if (!n || !n.validEnd)
      return !1;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let n = 0; n < e.length; n++)
      if (!this.allowsMarkType(e[n].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let n;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? n && n.push(e[r]) : n || (n = e.slice(0, r));
    return n ? n.length ? n : pe.none : e;
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((o, s) => r[o] = new Mx(o, n, s));
    let i = n.spec.topNode || "doc";
    if (!r[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let o in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
class lA {
  constructor(e) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(e, "default"), this.default = e.default;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class Vl {
  /**
  @internal
  */
  constructor(e, n, r, i) {
    this.name = e, this.rank = n, this.schema = r, this.spec = i, this.attrs = Nx(i.attrs), this.excluded = null;
    let o = _x(this.attrs);
    this.instance = o ? new pe(this, o) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new pe(this, kx(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((o, s) => r[o] = new Vl(o, i++, n, s)), r;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var n = 0; n < e.length; n++)
      e[n].type == this && (e = e.slice(0, n).concat(e.slice(n + 1)), n--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let n = 0; n < e.length; n++)
      if (e[n].type == this)
        return e[n];
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class cA {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.cached = /* @__PURE__ */ Object.create(null);
    let n = this.spec = {};
    for (let i in e)
      n[i] = e[i];
    n.nodes = Ue.from(e.nodes), n.marks = Ue.from(e.marks || {}), this.nodes = Yb.compile(this.spec.nodes, this), this.marks = Vl.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let o = this.nodes[i], s = o.spec.content || "", a = o.spec.marks;
      o.contentMatch = r[s] || (r[s] = Ur.parse(s, this.nodes)), o.inlineContent = o.contentMatch.inlineContent, o.markSet = a == "_" ? null : a ? Zb(this, a.split(" ")) : a == "" || !o.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let o = this.marks[i], s = o.spec.excludes;
      o.excluded = s == null ? [o] : s == "" ? [] : Zb(this, s.split(" "));
    }
    this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, n = null, r, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof Yb) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else
      throw new RangeError("Invalid node type: " + e);
    return e.createChecked(n, r, i);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, n) {
    let r = this.nodes.text;
    return new Ka(r, r.defaultAttrs, e, pe.setFrom(n));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, n) {
    return typeof e == "string" && (e = this.marks[e]), e.create(n);
  }
  /**
  Deserialize a node from its JSON representation. This method is
  bound.
  */
  nodeFromJSON(e) {
    return Fr.fromJSON(this, e);
  }
  /**
  Deserialize a mark from its JSON representation. This method is
  bound.
  */
  markFromJSON(e) {
    return pe.fromJSON(this, e);
  }
  /**
  @internal
  */
  nodeType(e) {
    let n = this.nodes[e];
    if (!n)
      throw new RangeError("Unknown node type: " + e);
    return n;
  }
}
function Zb(t, e) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r], o = t.marks[i], s = o;
    if (o)
      n.push(o);
    else
      for (let a in t.marks) {
        let l = t.marks[a];
        (i == "_" || l.spec.group && l.spec.group.split(" ").indexOf(i) > -1) && n.push(s = l);
      }
    if (!s)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return n;
}
class Bi {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, n) {
    this.schema = e, this.rules = n, this.tags = [], this.styles = [], n.forEach((r) => {
      r.tag ? this.tags.push(r) : r.style && this.styles.push(r);
    }), this.normalizeLists = !this.tags.some((r) => {
      if (!/^(ul|ol)\b/.test(r.tag) || !r.node)
        return !1;
      let i = e.nodes[r.node];
      return i.contentMatch.matchType(i);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, n = {}) {
    let r = new e0(this, n, !1);
    return r.addAll(e, n.from, n.to), r.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, n = {}) {
    let r = new e0(this, n, !0);
    return r.addAll(e, n.from, n.to), L.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, n, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let o = this.tags[i];
      if (pA(e, o.tag) && (o.namespace === void 0 || e.namespaceURI == o.namespace) && (!o.context || n.matchesContext(o.context))) {
        if (o.getAttrs) {
          let s = o.getAttrs(e);
          if (s === !1)
            continue;
          o.attrs = s || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, n, r, i) {
    for (let o = i ? this.styles.indexOf(i) + 1 : 0; o < this.styles.length; o++) {
      let s = this.styles[o], a = s.style;
      if (!(a.indexOf(e) != 0 || s.context && !r.matchesContext(s.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      a.length > e.length && (a.charCodeAt(e.length) != 61 || a.slice(e.length + 1) != n))) {
        if (s.getAttrs) {
          let l = s.getAttrs(n);
          if (l === !1)
            continue;
          s.attrs = l || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let n = [];
    function r(i) {
      let o = i.priority == null ? 50 : i.priority, s = 0;
      for (; s < n.length; s++) {
        let a = n[s];
        if ((a.priority == null ? 50 : a.priority) < o)
          break;
      }
      n.splice(s, 0, i);
    }
    for (let i in e.marks) {
      let o = e.marks[i].spec.parseDOM;
      o && o.forEach((s) => {
        r(s = t0(s)), s.mark || s.ignore || s.clearMark || (s.mark = i);
      });
    }
    for (let i in e.nodes) {
      let o = e.nodes[i].spec.parseDOM;
      o && o.forEach((s) => {
        r(s = t0(s)), s.node || s.ignore || s.mark || (s.node = i);
      });
    }
    return n;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.ParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new Bi(e, Bi.schemaRules(e)));
  }
}
const Tx = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, uA = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, $x = { ol: !0, ul: !0 }, Xa = 1, Ya = 2, jo = 4;
function Qb(t, e, n) {
  return e != null ? (e ? Xa : 0) | (e === "full" ? Ya : 0) : t && t.whitespace == "pre" ? Xa | Ya : n & ~jo;
}
class fa {
  constructor(e, n, r, i, o, s, a) {
    this.type = e, this.attrs = n, this.marks = r, this.pendingMarks = i, this.solid = o, this.options = a, this.content = [], this.activeMarks = pe.none, this.stashMarks = [], this.match = s || (a & jo ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let n = this.type.contentMatch.fillBefore(I.from(e));
      if (n)
        this.match = this.type.contentMatch.matchFragment(n);
      else {
        let r = this.type.contentMatch, i;
        return (i = r.findWrapping(e.type)) ? (this.match = r, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & Xa)) {
      let r = this.content[this.content.length - 1], i;
      if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let o = r;
        r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = o.withText(o.text.slice(0, o.text.length - i[0].length));
      }
    }
    let n = I.from(this.content);
    return !e && this.match && (n = n.append(this.match.fillBefore(I.empty, !0))), this.type ? this.type.create(this.attrs, n, this.marks) : n;
  }
  popFromStashMark(e) {
    for (let n = this.stashMarks.length - 1; n >= 0; n--)
      if (e.eq(this.stashMarks[n]))
        return this.stashMarks.splice(n, 1)[0];
  }
  applyPending(e) {
    for (let n = 0, r = this.pendingMarks; n < r.length; n++) {
      let i = r[n];
      (this.type ? this.type.allowsMarkType(i.type) : hA(i.type, e)) && !i.isInSet(this.activeMarks) && (this.activeMarks = i.addToSet(this.activeMarks), this.pendingMarks = i.removeFromSet(this.pendingMarks));
    }
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !Tx.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class e0 {
  constructor(e, n, r) {
    this.parser = e, this.options = n, this.isOpen = r, this.open = 0;
    let i = n.topNode, o, s = Qb(null, n.preserveWhitespace, 0) | (r ? jo : 0);
    i ? o = new fa(i.type, i.attrs, pe.none, pe.none, !0, n.topMatch || i.type.contentMatch, s) : r ? o = new fa(null, null, pe.none, pe.none, !0, null, s) : o = new fa(e.schema.topNodeType, null, pe.none, pe.none, !0, null, s), this.nodes = [o], this.find = n.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e) {
    e.nodeType == 3 ? this.addTextNode(e) : e.nodeType == 1 && this.addElement(e);
  }
  withStyleRules(e, n) {
    let r = e.getAttribute("style");
    if (!r)
      return n();
    let i = this.readStyles(dA(r));
    if (!i)
      return;
    let [o, s] = i, a = this.top;
    for (let l = 0; l < s.length; l++)
      this.removePendingMark(s[l], a);
    for (let l = 0; l < o.length; l++)
      this.addPendingMark(o[l]);
    n();
    for (let l = 0; l < o.length; l++)
      this.removePendingMark(o[l], a);
    for (let l = 0; l < s.length; l++)
      this.addPendingMark(s[l]);
  }
  addTextNode(e) {
    let n = e.nodeValue, r = this.top;
    if (r.options & Ya || r.inlineContext(e) || /[^ \t\r\n\u000c]/.test(n)) {
      if (r.options & Xa)
        r.options & Ya ? n = n.replace(/\r\n?/g, `
`) : n = n.replace(/\r?\n|\r/g, " ");
      else if (n = n.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(n) && this.open == this.nodes.length - 1) {
        let i = r.content[r.content.length - 1], o = e.previousSibling;
        (!i || o && o.nodeName == "BR" || i.isText && /[ \t\r\n\u000c]$/.test(i.text)) && (n = n.slice(1));
      }
      n && this.insertNode(this.parser.schema.text(n)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, n) {
    let r = e.nodeName.toLowerCase(), i;
    $x.hasOwnProperty(r) && this.parser.normalizeLists && fA(e);
    let o = this.options.ruleFromNode && this.options.ruleFromNode(e) || (i = this.parser.matchTag(e, this, n));
    if (o ? o.ignore : uA.hasOwnProperty(r))
      this.findInside(e), this.ignoreFallback(e);
    else if (!o || o.skip || o.closeParent) {
      o && o.closeParent ? this.open = Math.max(0, this.open - 1) : o && o.skip.nodeType && (e = o.skip);
      let s, a = this.top, l = this.needsBlock;
      if (Tx.hasOwnProperty(r))
        a.content.length && a.content[0].isInline && this.open && (this.open--, a = this.top), s = !0, a.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e);
        return;
      }
      o && o.skip ? this.addAll(e) : this.withStyleRules(e, () => this.addAll(e)), s && this.sync(a), this.needsBlock = l;
    } else
      this.withStyleRules(e, () => {
        this.addElementByRule(e, o, o.consuming === !1 ? i : void 0);
      });
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`));
  }
  // Called for ignored nodes
  ignoreFallback(e) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"));
  }
  // Run any style parser associated with the node's styles. Either
  // return an array of marks, or null to indicate some of the styles
  // had a rule with `ignore` set.
  readStyles(e) {
    let n = pe.none, r = pe.none;
    for (let i = 0; i < e.length; i += 2)
      for (let o = void 0; ; ) {
        let s = this.parser.matchStyle(e[i], e[i + 1], this, o);
        if (!s)
          break;
        if (s.ignore)
          return null;
        if (s.clearMark ? this.top.pendingMarks.concat(this.top.activeMarks).forEach((a) => {
          s.clearMark(a) && (r = a.addToSet(r));
        }) : n = this.parser.schema.marks[s.mark].create(s.attrs).addToSet(n), s.consuming === !1)
          o = s;
        else
          break;
      }
    return [n, r];
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, n, r) {
    let i, o, s;
    n.node ? (o = this.parser.schema.nodes[n.node], o.isLeaf ? this.insertNode(o.create(n.attrs)) || this.leafFallback(e) : i = this.enter(o, n.attrs || null, n.preserveWhitespace)) : (s = this.parser.schema.marks[n.mark].create(n.attrs), this.addPendingMark(s));
    let a = this.top;
    if (o && o.isLeaf)
      this.findInside(e);
    else if (r)
      this.addElement(e, r);
    else if (n.getContent)
      this.findInside(e), n.getContent(e, this.parser.schema).forEach((l) => this.insertNode(l));
    else {
      let l = e;
      typeof n.contentElement == "string" ? l = e.querySelector(n.contentElement) : typeof n.contentElement == "function" ? l = n.contentElement(e) : n.contentElement && (l = n.contentElement), this.findAround(e, l, !0), this.addAll(l);
    }
    i && this.sync(a) && this.open--, s && this.removePendingMark(s, a);
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, n, r) {
    let i = n || 0;
    for (let o = n ? e.childNodes[n] : e.firstChild, s = r == null ? null : e.childNodes[r]; o != s; o = o.nextSibling, ++i)
      this.findAtPoint(e, i), this.addDOM(o);
    this.findAtPoint(e, i);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e) {
    let n, r;
    for (let i = this.open; i >= 0; i--) {
      let o = this.nodes[i], s = o.findWrapping(e);
      if (s && (!n || n.length > s.length) && (n = s, r = o, !s.length) || o.solid)
        break;
    }
    if (!n)
      return !1;
    this.sync(r);
    for (let i = 0; i < n.length; i++)
      this.enterInner(n[i], null, !1);
    return !0;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let n = this.textblockFromContext();
      n && this.enterInner(n);
    }
    if (this.findPlace(e)) {
      this.closeExtra();
      let n = this.top;
      n.applyPending(e.type), n.match && (n.match = n.match.matchType(e.type));
      let r = n.activeMarks;
      for (let i = 0; i < e.marks.length; i++)
        (!n.type || n.type.allowsMarkType(e.marks[i].type)) && (r = e.marks[i].addToSet(r));
      return n.content.push(e.mark(r)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, n, r) {
    let i = this.findPlace(e.create(n));
    return i && this.enterInner(e, n, !0, r), i;
  }
  // Open a node of the given type
  enterInner(e, n = null, r = !1, i) {
    this.closeExtra();
    let o = this.top;
    o.applyPending(e), o.match = o.match && o.match.matchType(e);
    let s = Qb(e, i, o.options);
    o.options & jo && o.content.length == 0 && (s |= jo), this.nodes.push(new fa(e, n, o.activeMarks, o.pendingMarks, r, null, s)), this.open++;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let n = this.nodes.length - 1;
    if (n > this.open) {
      for (; n > this.open; n--)
        this.nodes[n - 1].content.push(this.nodes[n].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(this.isOpen || this.options.topOpen);
  }
  sync(e) {
    for (let n = this.open; n >= 0; n--)
      if (this.nodes[n] == e)
        return this.open = n, !0;
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let n = this.open; n >= 0; n--) {
      let r = this.nodes[n].content;
      for (let i = r.length - 1; i >= 0; i--)
        e += r[i].nodeSize;
      n && e++;
    }
    return e;
  }
  findAtPoint(e, n) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == n && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].pos == null && e.nodeType == 1 && e.contains(this.find[n].node) && (this.find[n].pos = this.currentPos);
  }
  findAround(e, n, r) {
    if (e != n && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && n.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].node == e && (this.find[n].pos = this.currentPos - (e.nodeValue.length - this.find[n].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let n = e.split("/"), r = this.options.context, i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), o = -(r ? r.depth + 1 : 0) + (i ? 0 : 1), s = (a, l) => {
      for (; a >= 0; a--) {
        let c = n[a];
        if (c == "") {
          if (a == n.length - 1 || a == 0)
            continue;
          for (; l >= o; l--)
            if (s(a - 1, l))
              return !0;
          return !1;
        } else {
          let u = l > 0 || l == 0 && i ? this.nodes[l].type : r && l >= o ? r.node(l - o).type : null;
          if (!u || u.name != c && u.groups.indexOf(c) == -1)
            return !1;
          l--;
        }
      }
      return !0;
    };
    return s(n.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let n = e.depth; n >= 0; n--) {
        let r = e.node(n).contentMatchAt(e.indexAfter(n)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let n in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[n];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
  addPendingMark(e) {
    let n = mA(e, this.top.pendingMarks);
    n && this.top.stashMarks.push(n), this.top.pendingMarks = e.addToSet(this.top.pendingMarks);
  }
  removePendingMark(e, n) {
    for (let r = this.open; r >= 0; r--) {
      let i = this.nodes[r];
      if (i.pendingMarks.lastIndexOf(e) > -1)
        i.pendingMarks = e.removeFromSet(i.pendingMarks);
      else {
        i.activeMarks = e.removeFromSet(i.activeMarks);
        let s = i.popFromStashMark(e);
        s && i.type && i.type.allowsMarkType(s.type) && (i.activeMarks = s.addToSet(i.activeMarks));
      }
      if (i == n)
        break;
    }
  }
}
function fA(t) {
  for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && $x.hasOwnProperty(r) && n ? (n.appendChild(e), e = n) : r == "li" ? n = e : r && (n = null);
  }
}
function pA(t, e) {
  return (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(t, e);
}
function dA(t) {
  let e = /\s*([\w-]+)\s*:\s*([^;]+)/g, n, r = [];
  for (; n = e.exec(t); )
    r.push(n[1], n[2].trim());
  return r;
}
function t0(t) {
  let e = {};
  for (let n in t)
    e[n] = t[n];
  return e;
}
function hA(t, e) {
  let n = e.schema.nodes;
  for (let r in n) {
    let i = n[r];
    if (!i.allowsMarkType(t))
      continue;
    let o = [], s = (a) => {
      o.push(a);
      for (let l = 0; l < a.edgeCount; l++) {
        let { type: c, next: u } = a.edge(l);
        if (c == e || o.indexOf(u) < 0 && s(u))
          return !0;
      }
    };
    if (s(i.contentMatch))
      return !0;
  }
}
function mA(t, e) {
  for (let n = 0; n < e.length; n++)
    if (t.eq(e[n]))
      return e[n];
}
class fn {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, n) {
    this.nodes = e, this.marks = n;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, n = {}, r) {
    r || (r = Cf(n).createDocumentFragment());
    let i = r, o = [];
    return e.forEach((s) => {
      if (o.length || s.marks.length) {
        let a = 0, l = 0;
        for (; a < o.length && l < s.marks.length; ) {
          let c = s.marks[l];
          if (!this.marks[c.type.name]) {
            l++;
            continue;
          }
          if (!c.eq(o[a][0]) || c.type.spec.spanning === !1)
            break;
          a++, l++;
        }
        for (; a < o.length; )
          i = o.pop()[1];
        for (; l < s.marks.length; ) {
          let c = s.marks[l++], u = this.serializeMark(c, s.isInline, n);
          u && (o.push([c, i]), i.appendChild(u.dom), i = u.contentDOM || u.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(s, n));
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, n) {
    let { dom: r, contentDOM: i } = fn.renderSpec(Cf(n), this.nodes[e.type.name](e));
    if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, n, i);
    }
    return r;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, n = {}) {
    let r = this.serializeNodeInner(e, n);
    for (let i = e.marks.length - 1; i >= 0; i--) {
      let o = this.serializeMark(e.marks[i], e.isInline, n);
      o && ((o.contentDOM || o.dom).appendChild(r), r = o.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, n, r = {}) {
    let i = this.marks[e.type.name];
    return i && fn.renderSpec(Cf(r), i(e, n));
  }
  /**
  Render an [output spec](https://prosemirror.net/docs/ref/#model.DOMOutputSpec) to a DOM node. If
  the spec has a hole (zero) in it, `contentDOM` will point at the
  node with the hole.
  */
  static renderSpec(e, n, r = null) {
    if (typeof n == "string")
      return { dom: e.createTextNode(n) };
    if (n.nodeType != null)
      return { dom: n };
    if (n.dom && n.dom.nodeType != null)
      return n;
    let i = n[0], o = i.indexOf(" ");
    o > 0 && (r = i.slice(0, o), i = i.slice(o + 1));
    let s, a = r ? e.createElementNS(r, i) : e.createElement(i), l = n[1], c = 1;
    if (l && typeof l == "object" && l.nodeType == null && !Array.isArray(l)) {
      c = 2;
      for (let u in l)
        if (l[u] != null) {
          let f = u.indexOf(" ");
          f > 0 ? a.setAttributeNS(u.slice(0, f), u.slice(f + 1), l[u]) : a.setAttribute(u, l[u]);
        }
    }
    for (let u = c; u < n.length; u++) {
      let f = n[u];
      if (f === 0) {
        if (u < n.length - 1 || u > c)
          throw new RangeError("Content hole must be the only child of its parent node");
        return { dom: a, contentDOM: a };
      } else {
        let { dom: p, contentDOM: d } = fn.renderSpec(e, f, r);
        if (a.appendChild(p), d) {
          if (s)
            throw new RangeError("Multiple content holes");
          s = d;
        }
      }
    }
    return { dom: a, contentDOM: s };
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new fn(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let n = n0(e.nodes);
    return n.text || (n.text = (r) => r.text), n;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return n0(e.marks);
  }
}
function n0(t) {
  let e = {};
  for (let n in t) {
    let r = t[n].spec.toDOM;
    r && (e[n] = r);
  }
  return e;
}
function Cf(t) {
  return t.document || window.document;
}
const Ix = 65535, Px = Math.pow(2, 16);
function vA(t, e) {
  return t + e * Px;
}
function r0(t) {
  return t & Ix;
}
function gA(t) {
  return (t - (t & Ix)) / Px;
}
const Dx = 1, Ax = 2, $a = 4, Rx = 8;
class qp {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.pos = e, this.delInfo = n, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & Rx) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (Dx | $a)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (Ax | $a)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & $a) > 0;
  }
}
class It {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, n = !1) {
    if (this.ranges = e, this.inverted = n, !e.length && It.empty)
      return It.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let n = 0, r = r0(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        n += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + n + gA(e);
  }
  mapResult(e, n = 1) {
    return this._map(e, n, !1);
  }
  map(e, n = 1) {
    return this._map(e, n, !0);
  }
  /**
  @internal
  */
  _map(e, n, r) {
    let i = 0, o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let a = 0; a < this.ranges.length; a += 3) {
      let l = this.ranges[a] - (this.inverted ? i : 0);
      if (l > e)
        break;
      let c = this.ranges[a + o], u = this.ranges[a + s], f = l + c;
      if (e <= f) {
        let p = c ? e == l ? -1 : e == f ? 1 : n : n, d = l + i + (p < 0 ? 0 : u);
        if (r)
          return d;
        let h = e == (n < 0 ? l : f) ? null : vA(a / 3, e - l), m = e == l ? Ax : e == f ? Dx : $a;
        return (n < 0 ? e != l : e != f) && (m |= Rx), new qp(d, m, h);
      }
      i += u - c;
    }
    return r ? e + i : new qp(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, n) {
    let r = 0, i = r0(n), o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let a = 0; a < this.ranges.length; a += 3) {
      let l = this.ranges[a] - (this.inverted ? r : 0);
      if (l > e)
        break;
      let c = this.ranges[a + o], u = l + c;
      if (e <= u && a == i * 3)
        return !0;
      r += this.ranges[a + s] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let n = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let i = 0, o = 0; i < this.ranges.length; i += 3) {
      let s = this.ranges[i], a = s - (this.inverted ? o : 0), l = s + (this.inverted ? 0 : o), c = this.ranges[i + n], u = this.ranges[i + r];
      e(a, a + c, l, l + u), o += u - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new It(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? It.empty : new It(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
It.empty = new It([]);
class Di {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e = [], n, r = 0, i = e.length) {
    this.maps = e, this.mirror = n, this.from = r, this.to = i;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, n = this.maps.length) {
    return new Di(this.maps, this.mirror, e, n);
  }
  /**
  @internal
  */
  copy() {
    return new Di(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, n) {
    this.to = this.maps.push(e), n != null && this.setMirror(this.maps.length - 1, n);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let n = 0, r = this.maps.length; n < e.maps.length; n++) {
      let i = e.getMirror(n);
      this.appendMap(e.maps[n], i != null && i < n ? r + i : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let n = 0; n < this.mirror.length; n++)
        if (this.mirror[n] == e)
          return this.mirror[n + (n % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, n) {
    this.mirror || (this.mirror = []), this.mirror.push(e, n);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let n = e.maps.length - 1, r = this.maps.length + e.maps.length; n >= 0; n--) {
      let i = e.getMirror(n);
      this.appendMap(e.maps[n].invert(), i != null && i > n ? r - i - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new Di();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, n = 1) {
    if (this.mirror)
      return this._map(e, n, !0);
    for (let r = this.from; r < this.to; r++)
      e = this.maps[r].map(e, n);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, n = 1) {
    return this._map(e, n, !1);
  }
  /**
  @internal
  */
  _map(e, n, r) {
    let i = 0;
    for (let o = this.from; o < this.to; o++) {
      let s = this.maps[o], a = s.mapResult(e, n);
      if (a.recover != null) {
        let l = this.getMirror(o);
        if (l != null && l > o && l < this.to) {
          o = l, e = this.maps[l].recover(a.recover);
          continue;
        }
      }
      i |= a.delInfo, e = a.pos;
    }
    return r ? e : new qp(e, i, null);
  }
}
const _f = /* @__PURE__ */ Object.create(null);
class wt {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return It.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, n) {
    if (!n || !n.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = _f[n.stepType];
    if (!r)
      throw new RangeError(`No step type ${n.stepType} defined`);
    return r.fromJSON(e, n);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, n) {
    if (e in _f)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return _f[e] = n, n.prototype.jsonID = e, n;
  }
}
class De {
  /**
  @internal
  */
  constructor(e, n) {
    this.doc = e, this.failed = n;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new De(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new De(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, n, r, i) {
    try {
      return De.ok(e.replace(n, r, i));
    } catch (o) {
      if (o instanceof Ga)
        return De.fail(o.message);
      throw o;
    }
  }
}
function kh(t, e, n) {
  let r = [];
  for (let i = 0; i < t.childCount; i++) {
    let o = t.child(i);
    o.content.size && (o = o.copy(kh(o.content, e, o))), o.isInline && (o = e(o, n, i)), r.push(o);
  }
  return I.fromArray(r);
}
class Un extends wt {
  /**
  Create a mark step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), o = new L(kh(n.content, (s, a) => !s.isAtom || !a.type.allowsMarkType(this.mark.type) ? s : s.mark(this.mark.addToSet(s.marks)), i), n.openStart, n.openEnd);
    return De.fromReplace(e, this.from, this.to, o);
  }
  invert() {
    return new pn(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new Un(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Un && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Un(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new Un(n.from, n.to, e.markFromJSON(n.mark));
  }
}
wt.jsonID("addMark", Un);
class pn extends wt {
  /**
  Create a mark-removing step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = new L(kh(n.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), n.openStart, n.openEnd);
    return De.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new Un(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new pn(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof pn && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new pn(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new pn(n.from, n.to, e.markFromJSON(n.mark));
  }
}
wt.jsonID("removeMark", pn);
class Gn extends wt {
  /**
  Create a node mark step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return De.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.addToSet(n.marks));
    return De.fromReplace(e, this.pos, this.pos + 1, new L(I.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    if (n) {
      let r = this.mark.addToSet(n.marks);
      if (r.length == n.marks.length) {
        for (let i = 0; i < n.marks.length; i++)
          if (!n.marks[i].isInSet(r))
            return new Gn(this.pos, n.marks[i]);
        return new Gn(this.pos, this.mark);
      }
    }
    return new zi(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new Gn(n.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new Gn(n.pos, e.markFromJSON(n.mark));
  }
}
wt.jsonID("addNodeMark", Gn);
class zi extends wt {
  /**
  Create a mark-removing step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return De.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.removeFromSet(n.marks));
    return De.fromReplace(e, this.pos, this.pos + 1, new L(I.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    return !n || !this.mark.isInSet(n.marks) ? this : new Gn(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new zi(n.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new zi(n.pos, e.markFromJSON(n.mark));
  }
}
wt.jsonID("removeNodeMark", zi);
class Ge extends wt {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, n, r, i = !1) {
    super(), this.from = e, this.to = n, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && Jp(e, this.from, this.to) ? De.fail("Structure replace would overwrite content") : De.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new It([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new Ge(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deletedAcross && r.deletedAcross ? null : new Ge(n.pos, Math.max(n.pos, r.pos), this.slice);
  }
  merge(e) {
    if (!(e instanceof Ge) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let n = this.slice.size + e.slice.size == 0 ? L.empty : new L(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new Ge(this.from, this.to + (e.to - e.from), n, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let n = this.slice.size + e.slice.size == 0 ? L.empty : new L(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new Ge(e.from, this.to, n, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new Ge(n.from, n.to, L.fromJSON(e, n.slice), !!n.structure);
  }
}
wt.jsonID("replace", Ge);
class je extends wt {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, n, r, i, o, s, a = !1) {
    super(), this.from = e, this.to = n, this.gapFrom = r, this.gapTo = i, this.slice = o, this.insert = s, this.structure = a;
  }
  apply(e) {
    if (this.structure && (Jp(e, this.from, this.gapFrom) || Jp(e, this.gapTo, this.to)))
      return De.fail("Structure gap-replace would overwrite content");
    let n = e.slice(this.gapFrom, this.gapTo);
    if (n.openStart || n.openEnd)
      return De.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, n.content);
    return r ? De.fromReplace(e, this.from, this.to, r) : De.fail("Content does not fit in gap");
  }
  getMap() {
    return new It([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let n = this.gapTo - this.gapFrom;
    return new je(this.from, this.from + this.slice.size + n, this.from + this.insert, this.from + this.insert + n, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = e.map(this.gapFrom, -1), o = e.map(this.gapTo, 1);
    return n.deletedAcross && r.deletedAcross || i < n.pos || o > r.pos ? null : new je(n.pos, r.pos, i, o, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number" || typeof n.gapFrom != "number" || typeof n.gapTo != "number" || typeof n.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new je(n.from, n.to, n.gapFrom, n.gapTo, L.fromJSON(e, n.slice), n.insert, !!n.structure);
  }
}
wt.jsonID("replaceAround", je);
function Jp(t, e, n) {
  let r = t.resolve(e), i = n - e, o = r.depth;
  for (; i > 0 && o > 0 && r.indexAfter(o) == r.node(o).childCount; )
    o--, i--;
  if (i > 0) {
    let s = r.node(o).maybeChild(r.indexAfter(o));
    for (; i > 0; ) {
      if (!s || s.isLeaf)
        return !0;
      s = s.firstChild, i--;
    }
  }
  return !1;
}
function yA(t, e, n, r) {
  let i = [], o = [], s, a;
  t.doc.nodesBetween(e, n, (l, c, u) => {
    if (!l.isInline)
      return;
    let f = l.marks;
    if (!r.isInSet(f) && u.type.allowsMarkType(r.type)) {
      let p = Math.max(c, e), d = Math.min(c + l.nodeSize, n), h = r.addToSet(f);
      for (let m = 0; m < f.length; m++)
        f[m].isInSet(h) || (s && s.to == p && s.mark.eq(f[m]) ? s.to = d : i.push(s = new pn(p, d, f[m])));
      a && a.to == p ? a.to = d : o.push(a = new Un(p, d, r));
    }
  }), i.forEach((l) => t.step(l)), o.forEach((l) => t.step(l));
}
function bA(t, e, n, r) {
  let i = [], o = 0;
  t.doc.nodesBetween(e, n, (s, a) => {
    if (!s.isInline)
      return;
    o++;
    let l = null;
    if (r instanceof Vl) {
      let c = s.marks, u;
      for (; u = r.isInSet(c); )
        (l || (l = [])).push(u), c = u.removeFromSet(c);
    } else
      r ? r.isInSet(s.marks) && (l = [r]) : l = s.marks;
    if (l && l.length) {
      let c = Math.min(a + s.nodeSize, n);
      for (let u = 0; u < l.length; u++) {
        let f = l[u], p;
        for (let d = 0; d < i.length; d++) {
          let h = i[d];
          h.step == o - 1 && f.eq(i[d].style) && (p = h);
        }
        p ? (p.to = c, p.step = o) : i.push({ style: f, from: Math.max(a, e), to: c, step: o });
      }
    }
  }), i.forEach((s) => t.step(new pn(s.from, s.to, s.style)));
}
function wA(t, e, n, r = n.contentMatch) {
  let i = t.doc.nodeAt(e), o = [], s = e + 1;
  for (let a = 0; a < i.childCount; a++) {
    let l = i.child(a), c = s + l.nodeSize, u = r.matchType(l.type);
    if (!u)
      o.push(new Ge(s, c, L.empty));
    else {
      r = u;
      for (let f = 0; f < l.marks.length; f++)
        n.allowsMarkType(l.marks[f].type) || t.step(new pn(s, c, l.marks[f]));
      if (l.isText && !n.spec.code) {
        let f, p = /\r?\n|\r/g, d;
        for (; f = p.exec(l.text); )
          d || (d = new L(I.from(n.schema.text(" ", n.allowedMarks(l.marks))), 0, 0)), o.push(new Ge(s + f.index, s + f.index + f[0].length, d));
      }
    }
    s = c;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(I.empty, !0);
    t.replace(s, s, new L(a, 0, 0));
  }
  for (let a = o.length - 1; a >= 0; a--)
    t.step(o[a]);
}
function SA(t, e, n) {
  return (e == 0 || t.canReplace(e, t.childCount)) && (n == t.childCount || t.canReplace(0, n));
}
function oo(t) {
  let n = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
  for (let r = t.depth; ; --r) {
    let i = t.$from.node(r), o = t.$from.index(r), s = t.$to.indexAfter(r);
    if (r < t.depth && i.canReplace(o, s, n))
      return r;
    if (r == 0 || i.type.spec.isolating || !SA(i, o, s))
      break;
  }
  return null;
}
function xA(t, e, n) {
  let { $from: r, $to: i, depth: o } = e, s = r.before(o + 1), a = i.after(o + 1), l = s, c = a, u = I.empty, f = 0;
  for (let h = o, m = !1; h > n; h--)
    m || r.index(h) > 0 ? (m = !0, u = I.from(r.node(h).copy(u)), f++) : l--;
  let p = I.empty, d = 0;
  for (let h = o, m = !1; h > n; h--)
    m || i.after(h + 1) < i.end(h) ? (m = !0, p = I.from(i.node(h).copy(p)), d++) : c++;
  t.step(new je(l, c, s, a, new L(u.append(p), f, d), u.size - f, !0));
}
function Nh(t, e, n = null, r = t) {
  let i = OA(t, e), o = i && EA(r, e);
  return o ? i.map(i0).concat({ type: e, attrs: n }).concat(o.map(i0)) : null;
}
function i0(t) {
  return { type: t, attrs: null };
}
function OA(t, e) {
  let { parent: n, startIndex: r, endIndex: i } = t, o = n.contentMatchAt(r).findWrapping(e);
  if (!o)
    return null;
  let s = o.length ? o[0] : e;
  return n.canReplaceWith(r, i, s) ? o : null;
}
function EA(t, e) {
  let { parent: n, startIndex: r, endIndex: i } = t, o = n.child(r), s = e.contentMatch.findWrapping(o.type);
  if (!s)
    return null;
  let l = (s.length ? s[s.length - 1] : e).contentMatch;
  for (let c = r; l && c < i; c++)
    l = l.matchType(n.child(c).type);
  return !l || !l.validEnd ? null : s;
}
function CA(t, e, n) {
  let r = I.empty;
  for (let s = n.length - 1; s >= 0; s--) {
    if (r.size) {
      let a = n[s].type.contentMatch.matchFragment(r);
      if (!a || !a.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = I.from(n[s].type.create(n[s].attrs, r));
  }
  let i = e.start, o = e.end;
  t.step(new je(i, o, i, o, new L(r, 0, 0), n.length, !0));
}
function _A(t, e, n, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let o = t.steps.length;
  t.doc.nodesBetween(e, n, (s, a) => {
    if (s.isTextblock && !s.hasMarkup(r, i) && kA(t.doc, t.mapping.slice(o).map(a), r)) {
      t.clearIncompatible(t.mapping.slice(o).map(a, 1), r);
      let l = t.mapping.slice(o), c = l.map(a, 1), u = l.map(a + s.nodeSize, 1);
      return t.step(new je(c, u, c + 1, u - 1, new L(I.from(r.create(i, null, s.marks)), 0, 0), 1, !0)), !1;
    }
  });
}
function kA(t, e, n) {
  let r = t.resolve(e), i = r.index();
  return r.parent.canReplaceWith(i, i + 1, n);
}
function NA(t, e, n, r, i) {
  let o = t.doc.nodeAt(e);
  if (!o)
    throw new RangeError("No node at given position");
  n || (n = o.type);
  let s = n.create(r, null, i || o.marks);
  if (o.isLeaf)
    return t.replaceWith(e, e + o.nodeSize, s);
  if (!n.validContent(o.content))
    throw new RangeError("Invalid content for node type " + n.name);
  t.step(new je(e, e + o.nodeSize, e + 1, e + o.nodeSize - 1, new L(I.from(s), 0, 0), 1, !0));
}
function Ai(t, e, n = 1, r) {
  let i = t.resolve(e), o = i.depth - n, s = r && r[r.length - 1] || i.parent;
  if (o < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !s.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let c = i.depth - 1, u = n - 2; c > o; c--, u--) {
    let f = i.node(c), p = i.index(c);
    if (f.type.spec.isolating)
      return !1;
    let d = f.content.cutByIndex(p, f.childCount), h = r && r[u + 1];
    h && (d = d.replaceChild(0, h.type.create(h.attrs)));
    let m = r && r[u] || f;
    if (!f.canReplace(p + 1, f.childCount) || !m.type.validContent(d))
      return !1;
  }
  let a = i.indexAfter(o), l = r && r[0];
  return i.node(o).canReplaceWith(a, a, l ? l.type : i.node(o + 1).type);
}
function MA(t, e, n = 1, r) {
  let i = t.doc.resolve(e), o = I.empty, s = I.empty;
  for (let a = i.depth, l = i.depth - n, c = n - 1; a > l; a--, c--) {
    o = I.from(i.node(a).copy(o));
    let u = r && r[c];
    s = I.from(u ? u.type.create(u.attrs, s) : i.node(a).copy(s));
  }
  t.step(new Ge(e, e, new L(o.append(s), n, n), !0));
}
function hr(t, e) {
  let n = t.resolve(e), r = n.index();
  return Fx(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function Fx(t, e) {
  return !!(t && e && !t.isLeaf && t.canAppend(e));
}
function Wl(t, e, n = -1) {
  let r = t.resolve(e);
  for (let i = r.depth; ; i--) {
    let o, s, a = r.index(i);
    if (i == r.depth ? (o = r.nodeBefore, s = r.nodeAfter) : n > 0 ? (o = r.node(i + 1), a++, s = r.node(i).maybeChild(a)) : (o = r.node(i).maybeChild(a - 1), s = r.node(i + 1)), o && !o.isTextblock && Fx(o, s) && r.node(i).canReplace(a, a + 1))
      return e;
    if (i == 0)
      break;
    e = n < 0 ? r.before(i) : r.after(i);
  }
}
function TA(t, e, n) {
  let r = new Ge(e - n, e + n, L.empty, !0);
  t.step(r);
}
function $A(t, e, n) {
  let r = t.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), n))
    return e;
  if (r.parentOffset == 0)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.index(i);
      if (r.node(i).canReplaceWith(o, o, n))
        return r.before(i + 1);
      if (o > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.indexAfter(i);
      if (r.node(i).canReplaceWith(o, o, n))
        return r.after(i + 1);
      if (o < r.node(i).childCount)
        return null;
    }
  return null;
}
function IA(t, e, n) {
  let r = t.resolve(e);
  if (!n.content.size)
    return e;
  let i = n.content;
  for (let o = 0; o < n.openStart; o++)
    i = i.firstChild.content;
  for (let o = 1; o <= (n.openStart == 0 && n.size ? 2 : 1); o++)
    for (let s = r.depth; s >= 0; s--) {
      let a = s == r.depth ? 0 : r.pos <= (r.start(s + 1) + r.end(s + 1)) / 2 ? -1 : 1, l = r.index(s) + (a > 0 ? 1 : 0), c = r.node(s), u = !1;
      if (o == 1)
        u = c.canReplace(l, l, i);
      else {
        let f = c.contentMatchAt(l).findWrapping(i.firstChild.type);
        u = f && c.canReplaceWith(l, l, f[0]);
      }
      if (u)
        return a == 0 ? r.pos : a < 0 ? r.before(s + 1) : r.after(s + 1);
    }
  return null;
}
function Mh(t, e, n = e, r = L.empty) {
  if (e == n && !r.size)
    return null;
  let i = t.resolve(e), o = t.resolve(n);
  return Lx(i, o, r) ? new Ge(e, n, r) : new PA(i, o, r).fit();
}
function Lx(t, e, n) {
  return !n.openStart && !n.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), n.content);
}
class PA {
  constructor(e, n, r) {
    this.$from = e, this.$to = n, this.unplaced = r, this.frontier = [], this.placed = I.empty;
    for (let i = 0; i <= e.depth; i++) {
      let o = e.node(i);
      this.frontier.push({
        type: o.type,
        match: o.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = I.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), n = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!i)
      return null;
    let o = this.placed, s = r.depth, a = i.depth;
    for (; s && a && o.childCount == 1; )
      o = o.firstChild.content, s--, a--;
    let l = new L(o, s, a);
    return e > -1 ? new je(r.pos, e, this.$to.pos, this.$to.end(), l, n) : l.size || r.pos != this.$to.pos ? new Ge(r.pos, i.pos, l) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let n = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++) {
      let o = n.firstChild;
      if (n.childCount > 1 && (i = 0), o.type.spec.isolating && i <= r) {
        e = r;
        break;
      }
      n = o.content;
    }
    for (let n = 1; n <= 2; n++)
      for (let r = n == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let i, o = null;
        r ? (o = kf(this.unplaced.content, r - 1).firstChild, i = o.content) : i = this.unplaced.content;
        let s = i.firstChild;
        for (let a = this.depth; a >= 0; a--) {
          let { type: l, match: c } = this.frontier[a], u, f = null;
          if (n == 1 && (s ? c.matchType(s.type) || (f = c.fillBefore(I.from(s), !1)) : o && l.compatibleContent(o.type)))
            return { sliceDepth: r, frontierDepth: a, parent: o, inject: f };
          if (n == 2 && s && (u = c.findWrapping(s.type)))
            return { sliceDepth: r, frontierDepth: a, parent: o, wrap: u };
          if (o && c.matchType(o.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, i = kf(e, n);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new L(e, n + 1, Math.max(r, i.size + n >= e.size - r ? n + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, i = kf(e, n);
    if (i.childCount <= 1 && n > 0) {
      let o = e.size - n <= n + i.size;
      this.unplaced = new L(Io(e, n - 1, 1), n - 1, o ? n - 1 : r);
    } else
      this.unplaced = new L(Io(e, n, 1), n, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: n, parent: r, inject: i, wrap: o }) {
    for (; this.depth > n; )
      this.closeFrontierNode();
    if (o)
      for (let m = 0; m < o.length; m++)
        this.openFrontierNode(o[m]);
    let s = this.unplaced, a = r ? r.content : s.content, l = s.openStart - e, c = 0, u = [], { match: f, type: p } = this.frontier[n];
    if (i) {
      for (let m = 0; m < i.childCount; m++)
        u.push(i.child(m));
      f = f.matchFragment(i);
    }
    let d = a.size + e - (s.content.size - s.openEnd);
    for (; c < a.childCount; ) {
      let m = a.child(c), v = f.matchType(m.type);
      if (!v)
        break;
      c++, (c > 1 || l == 0 || m.content.size) && (f = v, u.push(jx(m.mark(p.allowedMarks(m.marks)), c == 1 ? l : 0, c == a.childCount ? d : -1)));
    }
    let h = c == a.childCount;
    h || (d = -1), this.placed = Po(this.placed, n, I.from(u)), this.frontier[n].match = f, h && d < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, v = a; m < d; m++) {
      let y = v.lastChild;
      this.frontier.push({ type: y.type, match: y.contentMatchAt(y.childCount) }), v = y.content;
    }
    this.unplaced = h ? e == 0 ? L.empty : new L(Io(s.content, e - 1, 1), e - 1, d < 0 ? s.openEnd : e - 1) : new L(Io(s.content, e, c), s.openStart, s.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], n;
    if (!e.type.isTextblock || !Nf(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (n = this.findCloseLevel(this.$to)) && n.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, i = this.$to.after(r);
    for (; r > 1 && i == this.$to.end(--r); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e:
      for (let n = Math.min(this.depth, e.depth); n >= 0; n--) {
        let { match: r, type: i } = this.frontier[n], o = n < e.depth && e.end(n + 1) == e.pos + (e.depth - (n + 1)), s = Nf(e, n, i, r, o);
        if (s) {
          for (let a = n - 1; a >= 0; a--) {
            let { match: l, type: c } = this.frontier[a], u = Nf(e, a, c, l, !0);
            if (!u || u.childCount)
              continue e;
          }
          return { depth: n, fit: s, move: o ? e.doc.resolve(e.after(n + 1)) : e };
        }
      }
  }
  close(e) {
    let n = this.findCloseLevel(e);
    if (!n)
      return null;
    for (; this.depth > n.depth; )
      this.closeFrontierNode();
    n.fit.childCount && (this.placed = Po(this.placed, n.depth, n.fit)), e = n.move;
    for (let r = n.depth + 1; r <= e.depth; r++) {
      let i = e.node(r), o = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
      this.openFrontierNode(i.type, i.attrs, o);
    }
    return e;
  }
  openFrontierNode(e, n = null, r) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = Po(this.placed, this.depth, I.from(e.create(n, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let n = this.frontier.pop().match.fillBefore(I.empty, !0);
    n.childCount && (this.placed = Po(this.placed, this.frontier.length, n));
  }
}
function Io(t, e, n) {
  return e == 0 ? t.cutByIndex(n, t.childCount) : t.replaceChild(0, t.firstChild.copy(Io(t.firstChild.content, e - 1, n)));
}
function Po(t, e, n) {
  return e == 0 ? t.append(n) : t.replaceChild(t.childCount - 1, t.lastChild.copy(Po(t.lastChild.content, e - 1, n)));
}
function kf(t, e) {
  for (let n = 0; n < e; n++)
    t = t.firstChild.content;
  return t;
}
function jx(t, e, n) {
  if (e <= 0)
    return t;
  let r = t.content;
  return e > 1 && (r = r.replaceChild(0, jx(r.firstChild, e - 1, r.childCount == 1 ? n - 1 : 0))), e > 0 && (r = t.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(t.type.contentMatch.matchFragment(r).fillBefore(I.empty, !0)))), t.copy(r);
}
function Nf(t, e, n, r, i) {
  let o = t.node(e), s = i ? t.indexAfter(e) : t.index(e);
  if (s == o.childCount && !n.compatibleContent(o.type))
    return null;
  let a = r.fillBefore(o.content, !0, s);
  return a && !DA(n, o.content, s) ? a : null;
}
function DA(t, e, n) {
  for (let r = n; r < e.childCount; r++)
    if (!t.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function AA(t) {
  return t.spec.defining || t.spec.definingForContent;
}
function RA(t, e, n, r) {
  if (!r.size)
    return t.deleteRange(e, n);
  let i = t.doc.resolve(e), o = t.doc.resolve(n);
  if (Lx(i, o, r))
    return t.step(new Ge(e, n, r));
  let s = zx(i, t.doc.resolve(n));
  s[s.length - 1] == 0 && s.pop();
  let a = -(i.depth + 1);
  s.unshift(a);
  for (let p = i.depth, d = i.pos - 1; p > 0; p--, d--) {
    let h = i.node(p).type.spec;
    if (h.defining || h.definingAsContext || h.isolating)
      break;
    s.indexOf(p) > -1 ? a = p : i.before(p) == d && s.splice(1, 0, -p);
  }
  let l = s.indexOf(a), c = [], u = r.openStart;
  for (let p = r.content, d = 0; ; d++) {
    let h = p.firstChild;
    if (c.push(h), d == r.openStart)
      break;
    p = h.content;
  }
  for (let p = u - 1; p >= 0; p--) {
    let d = c[p], h = AA(d.type);
    if (h && !d.sameMarkup(i.node(Math.abs(a) - 1)))
      u = p;
    else if (h || !d.type.isTextblock)
      break;
  }
  for (let p = r.openStart; p >= 0; p--) {
    let d = (p + u + 1) % (r.openStart + 1), h = c[d];
    if (h)
      for (let m = 0; m < s.length; m++) {
        let v = s[(m + l) % s.length], y = !0;
        v < 0 && (y = !1, v = -v);
        let C = i.node(v - 1), O = i.index(v - 1);
        if (C.canReplaceWith(O, O, h.type, h.marks))
          return t.replace(i.before(v), y ? o.after(v) : n, new L(Bx(r.content, 0, r.openStart, d), d, r.openEnd));
      }
  }
  let f = t.steps.length;
  for (let p = s.length - 1; p >= 0 && (t.replace(e, n, r), !(t.steps.length > f)); p--) {
    let d = s[p];
    d < 0 || (e = i.before(d), n = o.after(d));
  }
}
function Bx(t, e, n, r, i) {
  if (e < n) {
    let o = t.firstChild;
    t = t.replaceChild(0, o.copy(Bx(o.content, e + 1, n, r, o)));
  }
  if (e > r) {
    let o = i.contentMatchAt(0), s = o.fillBefore(t).append(t);
    t = s.append(o.matchFragment(s).fillBefore(I.empty, !0));
  }
  return t;
}
function FA(t, e, n, r) {
  if (!r.isInline && e == n && t.doc.resolve(e).parent.content.size) {
    let i = $A(t.doc, e, r.type);
    i != null && (e = n = i);
  }
  t.replaceRange(e, n, new L(I.from(r), 0, 0));
}
function LA(t, e, n) {
  let r = t.doc.resolve(e), i = t.doc.resolve(n), o = zx(r, i);
  for (let s = 0; s < o.length; s++) {
    let a = o[s], l = s == o.length - 1;
    if (l && a == 0 || r.node(a).type.contentMatch.validEnd)
      return t.delete(r.start(a), i.end(a));
    if (a > 0 && (l || r.node(a - 1).canReplace(r.index(a - 1), i.indexAfter(a - 1))))
      return t.delete(r.before(a), i.after(a));
  }
  for (let s = 1; s <= r.depth && s <= i.depth; s++)
    if (e - r.start(s) == r.depth - s && n > r.end(s) && i.end(s) - n != i.depth - s)
      return t.delete(r.before(s), n);
  t.delete(e, n);
}
function zx(t, e) {
  let n = [], r = Math.min(t.depth, e.depth);
  for (let i = r; i >= 0; i--) {
    let o = t.start(i);
    if (o < t.pos - (t.depth - i) || e.end(i) > e.pos + (e.depth - i) || t.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (o == e.start(i) || i == t.depth && i == e.depth && t.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == o - 1) && n.push(i);
  }
  return n;
}
class Ri extends wt {
  /**
  Construct an attribute step.
  */
  constructor(e, n, r) {
    super(), this.pos = e, this.attr = n, this.value = r;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return De.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let o in n.attrs)
      r[o] = n.attrs[o];
    r[this.attr] = this.value;
    let i = n.type.create(r, null, n.marks);
    return De.fromReplace(e, this.pos, this.pos + 1, new L(I.from(i), 0, n.isLeaf ? 0 : 1));
  }
  getMap() {
    return It.empty;
  }
  invert(e) {
    return new Ri(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new Ri(n.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, n) {
    if (typeof n.pos != "number" || typeof n.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new Ri(n.pos, n.attr, n.value);
  }
}
wt.jsonID("attr", Ri);
let Vi = class extends Error {
};
Vi = function t(e) {
  let n = Error.call(this, e);
  return n.__proto__ = t.prototype, n;
};
Vi.prototype = Object.create(Error.prototype);
Vi.prototype.constructor = Vi;
Vi.prototype.name = "TransformError";
class jA {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new Di();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let n = this.maybeStep(e);
    if (n.failed)
      throw new Vi(n.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let n = e.apply(this.doc);
    return n.failed || this.addStep(e, n.doc), n;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  @internal
  */
  addStep(e, n) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = n;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, n = e, r = L.empty) {
    let i = Mh(this.doc, e, n, r);
    return i && this.step(i), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, n, r) {
    return this.replace(e, n, new L(I.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, n) {
    return this.replace(e, n, L.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, n) {
    return this.replaceWith(e, e, n);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, n, r) {
    return RA(this, e, n, r), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, n, r) {
    return FA(this, e, n, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, n) {
    return LA(this, e, n), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, n) {
    return xA(this, e, n), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, n = 1) {
    return TA(this, e, n), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, n) {
    return CA(this, e, n), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, n = e, r, i = null) {
    return _A(this, e, n, r, i), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, n, r = null, i) {
    return NA(this, e, n, r, i), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  */
  setNodeAttribute(e, n, r) {
    return this.step(new Ri(e, n, r)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, n) {
    return this.step(new Gn(e, n)), this;
  }
  /**
  Remove a mark (or a mark of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, n) {
    if (!(n instanceof pe)) {
      let r = this.doc.nodeAt(e);
      if (!r)
        throw new RangeError("No node at position " + e);
      if (n = n.isInSet(r.marks), !n)
        return this;
    }
    return this.step(new zi(e, n)), this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split.
  */
  split(e, n = 1, r) {
    return MA(this, e, n, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, n, r) {
    return yA(this, e, n, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, n, r) {
    return bA(this, e, n, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, n, r) {
    return wA(this, e, n, r), this;
  }
}
const Mf = /* @__PURE__ */ Object.create(null);
class ne {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, n, r) {
    this.$anchor = e, this.$head = n, this.ranges = r || [new BA(e.min(n), e.max(n))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let n = 0; n < e.length; n++)
      if (e[n].$from.pos != e[n].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, n = L.empty) {
    let r = n.content.lastChild, i = null;
    for (let a = 0; a < n.openEnd; a++)
      i = r, r = r.lastChild;
    let o = e.steps.length, s = this.ranges;
    for (let a = 0; a < s.length; a++) {
      let { $from: l, $to: c } = s[a], u = e.mapping.slice(o);
      e.replaceRange(u.map(l.pos), u.map(c.pos), a ? L.empty : n), a == 0 && a0(e, o, (r ? r.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, n) {
    let r = e.steps.length, i = this.ranges;
    for (let o = 0; o < i.length; o++) {
      let { $from: s, $to: a } = i[o], l = e.mapping.slice(r), c = l.map(s.pos), u = l.map(a.pos);
      o ? e.deleteRange(c, u) : (e.replaceRangeWith(c, u, n), a0(e, r, n.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, n, r = !1) {
    let i = e.parent.inlineContent ? new ie(e) : Oi(e.node(0), e.parent, e.pos, e.index(), n, r);
    if (i)
      return i;
    for (let o = e.depth - 1; o >= 0; o--) {
      let s = n < 0 ? Oi(e.node(0), e.node(o), e.before(o + 1), e.index(o), n, r) : Oi(e.node(0), e.node(o), e.after(o + 1), e.index(o) + 1, n, r);
      if (s)
        return s;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, n = 1) {
    return this.findFrom(e, n) || this.findFrom(e, -n) || new Zt(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return Oi(e, e, 0, 0, 1) || new Zt(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return Oi(e, e, e.content.size, e.childCount, -1) || new Zt(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, n) {
    if (!n || !n.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = Mf[n.type];
    if (!r)
      throw new RangeError(`No selection type ${n.type} defined`);
    return r.fromJSON(e, n);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, n) {
    if (e in Mf)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return Mf[e] = n, n.prototype.jsonID = e, n;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return ie.between(this.$anchor, this.$head).getBookmark();
  }
}
ne.prototype.visible = !0;
class BA {
  /**
  Create a range.
  */
  constructor(e, n) {
    this.$from = e, this.$to = n;
  }
}
let o0 = !1;
function s0(t) {
  !o0 && !t.parent.inlineContent && (o0 = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + t.parent.type.name + ")"));
}
class ie extends ne {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, n = e) {
    s0(e), s0(n), super(e, n);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, n) {
    let r = e.resolve(n.map(this.head));
    if (!r.parent.inlineContent)
      return ne.near(r);
    let i = e.resolve(n.map(this.anchor));
    return new ie(i.parent.inlineContent ? i : r, r);
  }
  replace(e, n = L.empty) {
    if (super.replace(e, n), n == L.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof ie && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new Hl(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.anchor != "number" || typeof n.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new ie(e.resolve(n.anchor), e.resolve(n.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, n, r = n) {
    let i = e.resolve(n);
    return new this(i, r == n ? i : e.resolve(r));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, n, r) {
    let i = e.pos - n.pos;
    if ((!r || i) && (r = i >= 0 ? 1 : -1), !n.parent.inlineContent) {
      let o = ne.findFrom(n, r, !0) || ne.findFrom(n, -r, !0);
      if (o)
        n = o.$head;
      else
        return ne.near(n, r);
    }
    return e.parent.inlineContent || (i == 0 ? e = n : (e = (ne.findFrom(e, -r, !0) || ne.findFrom(e, r, !0)).$anchor, e.pos < n.pos != i < 0 && (e = n))), new ie(e, n);
  }
}
ne.jsonID("text", ie);
class Hl {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new Hl(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return ie.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class X extends ne {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let n = e.nodeAfter, r = e.node(0).resolve(e.pos + n.nodeSize);
    super(e, r), this.node = n;
  }
  map(e, n) {
    let { deleted: r, pos: i } = n.mapResult(this.anchor), o = e.resolve(i);
    return r ? ne.near(o) : new X(o);
  }
  content() {
    return new L(I.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof X && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new Th(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new X(e.resolve(n.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, n) {
    return new X(e.resolve(n));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
X.prototype.visible = !1;
ne.jsonID("node", X);
class Th {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: n, pos: r } = e.mapResult(this.anchor);
    return n ? new Hl(r, r) : new Th(r);
  }
  resolve(e) {
    let n = e.resolve(this.anchor), r = n.nodeAfter;
    return r && X.isSelectable(r) ? new X(n) : ne.near(n);
  }
}
class Zt extends ne {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, n = L.empty) {
    if (n == L.empty) {
      e.delete(0, e.doc.content.size);
      let r = ne.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, n);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new Zt(e);
  }
  map(e) {
    return new Zt(e);
  }
  eq(e) {
    return e instanceof Zt;
  }
  getBookmark() {
    return zA;
  }
}
ne.jsonID("all", Zt);
const zA = {
  map() {
    return this;
  },
  resolve(t) {
    return new Zt(t);
  }
};
function Oi(t, e, n, r, i, o = !1) {
  if (e.inlineContent)
    return ie.create(t, n);
  for (let s = r - (i > 0 ? 0 : 1); i > 0 ? s < e.childCount : s >= 0; s += i) {
    let a = e.child(s);
    if (a.isAtom) {
      if (!o && X.isSelectable(a))
        return X.create(t, n - (i < 0 ? a.nodeSize : 0));
    } else {
      let l = Oi(t, a, n + i, i < 0 ? a.childCount : 0, i, o);
      if (l)
        return l;
    }
    n += a.nodeSize * i;
  }
  return null;
}
function a0(t, e, n) {
  let r = t.steps.length - 1;
  if (r < e)
    return;
  let i = t.steps[r];
  if (!(i instanceof Ge || i instanceof je))
    return;
  let o = t.mapping.maps[r], s;
  o.forEach((a, l, c, u) => {
    s == null && (s = u);
  }), t.setSelection(ne.near(t.doc.resolve(s), n));
}
const l0 = 1, pa = 2, c0 = 4;
class VA extends jA {
  /**
  @internal
  */
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | l0) & ~pa, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & l0) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= pa, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return pe.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & pa) > 0;
  }
  /**
  @internal
  */
  addStep(e, n) {
    super.addStep(e, n), this.updated = this.updated & ~pa, this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(e) {
    return this.time = e, this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(e, n = !0) {
    let r = this.selection;
    return n && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || pe.none))), r.replaceWith(this, e), this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    return this.selection.replace(this), this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(e, n, r) {
    let i = this.doc.type.schema;
    if (n == null)
      return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection();
    {
      if (r == null && (r = n), r = r ?? n, !e)
        return this.deleteRange(n, r);
      let o = this.storedMarks;
      if (!o) {
        let s = this.doc.resolve(n);
        o = r == n ? s.marks() : s.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(n, r, i.text(e, o)), this.selection.empty || this.setSelection(ne.near(this.selection.$to)), this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(e, n) {
    return this.meta[typeof e == "string" ? e : e.key] = n, this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(e) {
    return this.meta[typeof e == "string" ? e : e.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let e in this.meta)
      return !1;
    return !0;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    return this.updated |= c0, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & c0) > 0;
  }
}
function u0(t, e) {
  return !e || !t ? t : t.bind(e);
}
class Do {
  constructor(e, n, r) {
    this.name = e, this.init = u0(n.init, r), this.apply = u0(n.apply, r);
  }
}
const WA = [
  new Do("doc", {
    init(t) {
      return t.doc || t.schema.topNodeType.createAndFill();
    },
    apply(t) {
      return t.doc;
    }
  }),
  new Do("selection", {
    init(t, e) {
      return t.selection || ne.atStart(e.doc);
    },
    apply(t) {
      return t.selection;
    }
  }),
  new Do("storedMarks", {
    init(t) {
      return t.storedMarks || null;
    },
    apply(t, e, n, r) {
      return r.selection.$cursor ? t.storedMarks : null;
    }
  }),
  new Do("scrollToSelection", {
    init() {
      return 0;
    },
    apply(t, e) {
      return t.scrolledIntoView ? e + 1 : e;
    }
  })
];
class Tf {
  constructor(e, n) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = WA.slice(), n && n.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new Do(r.key, r.spec.state, r));
    });
  }
}
class Ni {
  /**
  @internal
  */
  constructor(e) {
    this.config = e;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(e) {
    return this.applyTransaction(e).state;
  }
  /**
  @internal
  */
  filterTransaction(e, n = -1) {
    for (let r = 0; r < this.config.plugins.length; r++)
      if (r != n) {
        let i = this.config.plugins[r];
        if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this))
          return !1;
      }
    return !0;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] };
    let n = [e], r = this.applyInner(e), i = null;
    for (; ; ) {
      let o = !1;
      for (let s = 0; s < this.config.plugins.length; s++) {
        let a = this.config.plugins[s];
        if (a.spec.appendTransaction) {
          let l = i ? i[s].n : 0, c = i ? i[s].state : this, u = l < n.length && a.spec.appendTransaction.call(a, l ? n.slice(l) : n, c, r);
          if (u && r.filterTransaction(u, s)) {
            if (u.setMeta("appendedTransaction", e), !i) {
              i = [];
              for (let f = 0; f < this.config.plugins.length; f++)
                i.push(f < s ? { state: r, n: n.length } : { state: this, n: 0 });
            }
            n.push(u), r = r.applyInner(u), o = !0;
          }
          i && (i[s] = { state: r, n: n.length });
        }
      }
      if (!o)
        return { state: r, transactions: n };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let n = new Ni(this.config), r = this.config.fields;
    for (let i = 0; i < r.length; i++) {
      let o = r[i];
      n[o.name] = o.apply(e, this[o.name], this, n);
    }
    return n;
  }
  /**
  Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new VA(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let n = new Tf(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new Ni(n);
    for (let i = 0; i < n.fields.length; i++)
      r[n.fields[i].name] = n.fields[i].init(e, r);
    return r;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(e) {
    let n = new Tf(this.schema, e.plugins), r = n.fields, i = new Ni(n);
    for (let o = 0; o < r.length; o++) {
      let s = r[o].name;
      i[s] = this.hasOwnProperty(s) ? this[s] : r[o].init(e, i);
    }
    return i;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(e) {
    let n = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (n.storedMarks = this.storedMarks.map((r) => r.toJSON())), e && typeof e == "object")
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let i = e[r], o = i.spec.state;
        o && o.toJSON && (n[r] = o.toJSON.call(i, this[i.key]));
      }
    return n;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(e, n, r) {
    if (!n)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let i = new Tf(e.schema, e.plugins), o = new Ni(i);
    return i.fields.forEach((s) => {
      if (s.name == "doc")
        o.doc = Fr.fromJSON(e.schema, n.doc);
      else if (s.name == "selection")
        o.selection = ne.fromJSON(o.doc, n.selection);
      else if (s.name == "storedMarks")
        n.storedMarks && (o.storedMarks = n.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let a in r) {
            let l = r[a], c = l.spec.state;
            if (l.key == s.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(n, a)) {
              o[s.name] = c.fromJSON.call(l, e, n[a], o);
              return;
            }
          }
        o[s.name] = s.init(e, o);
      }
    }), o;
  }
}
function Vx(t, e, n) {
  for (let r in t) {
    let i = t[r];
    i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = Vx(i, e, {})), n[r] = i;
  }
  return n;
}
class Wt {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && Vx(e.props, this, this.props), this.key = e.key ? e.key.key : Wx("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const $f = /* @__PURE__ */ Object.create(null);
function Wx(t) {
  return t in $f ? t + "$" + ++$f[t] : ($f[t] = 0, t + "$");
}
class wn {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = Wx(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const lt = function(t) {
  for (var e = 0; ; e++)
    if (t = t.previousSibling, !t)
      return e;
}, Ko = function(t) {
  let e = t.assignedSlot || t.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let f0 = null;
const kn = function(t, e, n) {
  let r = f0 || (f0 = document.createRange());
  return r.setEnd(t, n ?? t.nodeValue.length), r.setStart(t, e || 0), r;
}, Gr = function(t, e, n, r) {
  return n && (p0(t, e, n, r, -1) || p0(t, e, n, r, 1));
}, HA = /^(img|br|input|textarea|hr)$/i;
function p0(t, e, n, r, i) {
  for (; ; ) {
    if (t == n && e == r)
      return !0;
    if (e == (i < 0 ? 0 : an(t))) {
      let o = t.parentNode;
      if (!o || o.nodeType != 1 || $h(t) || HA.test(t.nodeName) || t.contentEditable == "false")
        return !1;
      e = lt(t) + (i < 0 ? 0 : 1), t = o;
    } else if (t.nodeType == 1) {
      if (t = t.childNodes[e + (i < 0 ? -1 : 0)], t.contentEditable == "false")
        return !1;
      e = i < 0 ? an(t) : 0;
    } else
      return !1;
  }
}
function an(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function UA(t, e, n) {
  for (let r = e == 0, i = e == an(t); r || i; ) {
    if (t == n)
      return !0;
    let o = lt(t);
    if (t = t.parentNode, !t)
      return !1;
    r = r && o == 0, i = i && o == an(t);
  }
}
function $h(t) {
  let e;
  for (let n = t; n && !(e = n.pmViewDesc); n = n.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == t || e.contentDOM == t);
}
const Ul = function(t) {
  return t.focusNode && Gr(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset);
};
function Nr(t, e) {
  let n = document.createEvent("Event");
  return n.initEvent("keydown", !0, !0), n.keyCode = t, n.key = n.code = e, n;
}
function GA(t) {
  let e = t.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function qA(t, e, n) {
  if (t.caretPositionFromPoint)
    try {
      let r = t.caretPositionFromPoint(e, n);
      if (r)
        return { node: r.offsetNode, offset: r.offset };
    } catch {
    }
  if (t.caretRangeFromPoint) {
    let r = t.caretRangeFromPoint(e, n);
    if (r)
      return { node: r.startContainer, offset: r.startOffset };
  }
}
const dn = typeof navigator < "u" ? navigator : null, d0 = typeof document < "u" ? document : null, mr = dn && dn.userAgent || "", Kp = /Edge\/(\d+)/.exec(mr), Hx = /MSIE \d/.exec(mr), Xp = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(mr), yt = !!(Hx || Xp || Kp), Zn = Hx ? document.documentMode : Xp ? +Xp[1] : Kp ? +Kp[1] : 0, Qt = !yt && /gecko\/(\d+)/i.test(mr);
Qt && +(/Firefox\/(\d+)/.exec(mr) || [0, 0])[1];
const Yp = !yt && /Chrome\/(\d+)/.exec(mr), tt = !!Yp, JA = Yp ? +Yp[1] : 0, ct = !yt && !!dn && /Apple Computer/.test(dn.vendor), Wi = ct && (/Mobile\/\w+/.test(mr) || !!dn && dn.maxTouchPoints > 2), $t = Wi || (dn ? /Mac/.test(dn.platform) : !1), KA = dn ? /Win/.test(dn.platform) : !1, Kt = /Android \d/.test(mr), Gl = !!d0 && "webkitFontSmoothing" in d0.documentElement.style, XA = Gl ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function YA(t) {
  return {
    left: 0,
    right: t.documentElement.clientWidth,
    top: 0,
    bottom: t.documentElement.clientHeight
  };
}
function En(t, e) {
  return typeof t == "number" ? t : t[e];
}
function ZA(t) {
  let e = t.getBoundingClientRect(), n = e.width / t.offsetWidth || 1, r = e.height / t.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + t.clientWidth * n,
    top: e.top,
    bottom: e.top + t.clientHeight * r
  };
}
function h0(t, e, n) {
  let r = t.someProp("scrollThreshold") || 0, i = t.someProp("scrollMargin") || 5, o = t.dom.ownerDocument;
  for (let s = n || t.dom; s; s = Ko(s)) {
    if (s.nodeType != 1)
      continue;
    let a = s, l = a == o.body, c = l ? YA(o) : ZA(a), u = 0, f = 0;
    if (e.top < c.top + En(r, "top") ? f = -(c.top - e.top + En(i, "top")) : e.bottom > c.bottom - En(r, "bottom") && (f = e.bottom - e.top > c.bottom - c.top ? e.top + En(i, "top") - c.top : e.bottom - c.bottom + En(i, "bottom")), e.left < c.left + En(r, "left") ? u = -(c.left - e.left + En(i, "left")) : e.right > c.right - En(r, "right") && (u = e.right - c.right + En(i, "right")), u || f)
      if (l)
        o.defaultView.scrollBy(u, f);
      else {
        let p = a.scrollLeft, d = a.scrollTop;
        f && (a.scrollTop += f), u && (a.scrollLeft += u);
        let h = a.scrollLeft - p, m = a.scrollTop - d;
        e = { left: e.left - h, top: e.top - m, right: e.right - h, bottom: e.bottom - m };
      }
    if (l || /^(fixed|sticky)$/.test(getComputedStyle(s).position))
      break;
  }
}
function QA(t) {
  let e = t.dom.getBoundingClientRect(), n = Math.max(0, e.top), r, i;
  for (let o = (e.left + e.right) / 2, s = n + 1; s < Math.min(innerHeight, e.bottom); s += 5) {
    let a = t.root.elementFromPoint(o, s);
    if (!a || a == t.dom || !t.dom.contains(a))
      continue;
    let l = a.getBoundingClientRect();
    if (l.top >= n - 20) {
      r = a, i = l.top;
      break;
    }
  }
  return { refDOM: r, refTop: i, stack: Ux(t.dom) };
}
function Ux(t) {
  let e = [], n = t.ownerDocument;
  for (let r = t; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), t != n); r = Ko(r))
    ;
  return e;
}
function eR({ refDOM: t, refTop: e, stack: n }) {
  let r = t ? t.getBoundingClientRect().top : 0;
  Gx(n, r == 0 ? 0 : r - e);
}
function Gx(t, e) {
  for (let n = 0; n < t.length; n++) {
    let { dom: r, top: i, left: o } = t[n];
    r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != o && (r.scrollLeft = o);
  }
}
let wi = null;
function tR(t) {
  if (t.setActive)
    return t.setActive();
  if (wi)
    return t.focus(wi);
  let e = Ux(t);
  t.focus(wi == null ? {
    get preventScroll() {
      return wi = { preventScroll: !0 }, !0;
    }
  } : void 0), wi || (wi = !1, Gx(e, 0));
}
function qx(t, e) {
  let n, r = 2e8, i, o = 0, s = e.top, a = e.top, l, c;
  for (let u = t.firstChild, f = 0; u; u = u.nextSibling, f++) {
    let p;
    if (u.nodeType == 1)
      p = u.getClientRects();
    else if (u.nodeType == 3)
      p = kn(u).getClientRects();
    else
      continue;
    for (let d = 0; d < p.length; d++) {
      let h = p[d];
      if (h.top <= s && h.bottom >= a) {
        s = Math.max(h.bottom, s), a = Math.min(h.top, a);
        let m = h.left > e.left ? h.left - e.left : h.right < e.left ? e.left - h.right : 0;
        if (m < r) {
          n = u, r = m, i = m && n.nodeType == 3 ? {
            left: h.right < e.left ? h.right : h.left,
            top: e.top
          } : e, u.nodeType == 1 && m && (o = f + (e.left >= (h.left + h.right) / 2 ? 1 : 0));
          continue;
        }
      } else
        h.top > e.top && !l && h.left <= e.left && h.right >= e.left && (l = u, c = { left: Math.max(h.left, Math.min(h.right, e.left)), top: h.top });
      !n && (e.left >= h.right && e.top >= h.top || e.left >= h.left && e.top >= h.bottom) && (o = f + 1);
    }
  }
  return !n && l && (n = l, i = c, r = 0), n && n.nodeType == 3 ? nR(n, i) : !n || r && n.nodeType == 1 ? { node: t, offset: o } : qx(n, i);
}
function nR(t, e) {
  let n = t.nodeValue.length, r = document.createRange();
  for (let i = 0; i < n; i++) {
    r.setEnd(t, i + 1), r.setStart(t, i);
    let o = zn(r, 1);
    if (o.top != o.bottom && Ih(e, o))
      return { node: t, offset: i + (e.left >= (o.left + o.right) / 2 ? 1 : 0) };
  }
  return { node: t, offset: 0 };
}
function Ih(t, e) {
  return t.left >= e.left - 1 && t.left <= e.right + 1 && t.top >= e.top - 1 && t.top <= e.bottom + 1;
}
function rR(t, e) {
  let n = t.parentNode;
  return n && /^li$/i.test(n.nodeName) && e.left < t.getBoundingClientRect().left ? n : t;
}
function iR(t, e, n) {
  let { node: r, offset: i } = qx(e, n), o = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let s = r.getBoundingClientRect();
    o = s.left != s.right && n.left > (s.left + s.right) / 2 ? 1 : -1;
  }
  return t.docView.posFromDOM(r, i, o);
}
function oR(t, e, n, r) {
  let i = -1;
  for (let o = e, s = !1; o != t.dom; ) {
    let a = t.docView.nearestDesc(o, !0);
    if (!a)
      return null;
    if (a.dom.nodeType == 1 && (a.node.isBlock && a.parent && !s || !a.contentDOM)) {
      let l = a.dom.getBoundingClientRect();
      if (a.node.isBlock && a.parent && !s && (s = !0, l.left > r.left || l.top > r.top ? i = a.posBefore : (l.right < r.left || l.bottom < r.top) && (i = a.posAfter)), !a.contentDOM && i < 0 && !a.node.isText)
        return (a.node.isBlock ? r.top < (l.top + l.bottom) / 2 : r.left < (l.left + l.right) / 2) ? a.posBefore : a.posAfter;
    }
    o = a.dom.parentNode;
  }
  return i > -1 ? i : t.docView.posFromDOM(e, n, -1);
}
function Jx(t, e, n) {
  let r = t.childNodes.length;
  if (r && n.top < n.bottom)
    for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - n.top) / (n.bottom - n.top)) - 2)), o = i; ; ) {
      let s = t.childNodes[o];
      if (s.nodeType == 1) {
        let a = s.getClientRects();
        for (let l = 0; l < a.length; l++) {
          let c = a[l];
          if (Ih(e, c))
            return Jx(s, e, c);
        }
      }
      if ((o = (o + 1) % r) == i)
        break;
    }
  return t;
}
function sR(t, e) {
  let n = t.dom.ownerDocument, r, i = 0, o = qA(n, e.left, e.top);
  o && ({ node: r, offset: i } = o);
  let s = (t.root.elementFromPoint ? t.root : n).elementFromPoint(e.left, e.top), a;
  if (!s || !t.dom.contains(s.nodeType != 1 ? s.parentNode : s)) {
    let c = t.dom.getBoundingClientRect();
    if (!Ih(e, c) || (s = Jx(t.dom, e, c), !s))
      return null;
  }
  if (ct)
    for (let c = s; r && c; c = Ko(c))
      c.draggable && (r = void 0);
  if (s = rR(s, e), r) {
    if (Qt && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
      let c = r.childNodes[i], u;
      c.nodeName == "IMG" && (u = c.getBoundingClientRect()).right <= e.left && u.bottom > e.top && i++;
    }
    r == t.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? a = t.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (a = oR(t, r, i, e));
  }
  a == null && (a = iR(t, s, e));
  let l = t.docView.nearestDesc(s, !0);
  return { pos: a, inside: l ? l.posAtStart - l.border : -1 };
}
function m0(t) {
  return t.top < t.bottom || t.left < t.right;
}
function zn(t, e) {
  let n = t.getClientRects();
  if (n.length) {
    let r = n[e < 0 ? 0 : n.length - 1];
    if (m0(r))
      return r;
  }
  return Array.prototype.find.call(n, m0) || t.getBoundingClientRect();
}
const aR = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function Kx(t, e, n) {
  let { node: r, offset: i, atom: o } = t.docView.domFromPos(e, n < 0 ? -1 : 1), s = Gl || Qt;
  if (r.nodeType == 3)
    if (s && (aR.test(r.nodeValue) || (n < 0 ? !i : i == r.nodeValue.length))) {
      let l = zn(kn(r, i, i), n);
      if (Qt && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let c = zn(kn(r, i - 1, i - 1), -1);
        if (c.top == l.top) {
          let u = zn(kn(r, i, i + 1), -1);
          if (u.top != l.top)
            return Co(u, u.left < c.left);
        }
      }
      return l;
    } else {
      let l = i, c = i, u = n < 0 ? 1 : -1;
      return n < 0 && !i ? (c++, u = -1) : n >= 0 && i == r.nodeValue.length ? (l--, u = 1) : n < 0 ? l-- : c++, Co(zn(kn(r, l, c), u), u < 0);
    }
  if (!t.state.doc.resolve(e - (o || 0)).parent.inlineContent) {
    if (o == null && i && (n < 0 || i == an(r))) {
      let l = r.childNodes[i - 1];
      if (l.nodeType == 1)
        return If(l.getBoundingClientRect(), !1);
    }
    if (o == null && i < an(r)) {
      let l = r.childNodes[i];
      if (l.nodeType == 1)
        return If(l.getBoundingClientRect(), !0);
    }
    return If(r.getBoundingClientRect(), n >= 0);
  }
  if (o == null && i && (n < 0 || i == an(r))) {
    let l = r.childNodes[i - 1], c = l.nodeType == 3 ? kn(l, an(l) - (s ? 0 : 1)) : l.nodeType == 1 && (l.nodeName != "BR" || !l.nextSibling) ? l : null;
    if (c)
      return Co(zn(c, 1), !1);
  }
  if (o == null && i < an(r)) {
    let l = r.childNodes[i];
    for (; l.pmViewDesc && l.pmViewDesc.ignoreForCoords; )
      l = l.nextSibling;
    let c = l ? l.nodeType == 3 ? kn(l, 0, s ? 0 : 1) : l.nodeType == 1 ? l : null : null;
    if (c)
      return Co(zn(c, -1), !0);
  }
  return Co(zn(r.nodeType == 3 ? kn(r) : r, -n), n >= 0);
}
function Co(t, e) {
  if (t.width == 0)
    return t;
  let n = e ? t.left : t.right;
  return { top: t.top, bottom: t.bottom, left: n, right: n };
}
function If(t, e) {
  if (t.height == 0)
    return t;
  let n = e ? t.top : t.bottom;
  return { top: n, bottom: n, left: t.left, right: t.right };
}
function Xx(t, e, n) {
  let r = t.state, i = t.root.activeElement;
  r != e && t.updateState(e), i != t.dom && t.focus();
  try {
    return n();
  } finally {
    r != e && t.updateState(r), i != t.dom && i && i.focus();
  }
}
function lR(t, e, n) {
  let r = e.selection, i = n == "up" ? r.$from : r.$to;
  return Xx(t, e, () => {
    let { node: o } = t.docView.domFromPos(i.pos, n == "up" ? -1 : 1);
    for (; ; ) {
      let a = t.docView.nearestDesc(o, !0);
      if (!a)
        break;
      if (a.node.isBlock) {
        o = a.contentDOM || a.dom;
        break;
      }
      o = a.dom.parentNode;
    }
    let s = Kx(t, i.pos, 1);
    for (let a = o.firstChild; a; a = a.nextSibling) {
      let l;
      if (a.nodeType == 1)
        l = a.getClientRects();
      else if (a.nodeType == 3)
        l = kn(a, 0, a.nodeValue.length).getClientRects();
      else
        continue;
      for (let c = 0; c < l.length; c++) {
        let u = l[c];
        if (u.bottom > u.top + 1 && (n == "up" ? s.top - u.top > (u.bottom - s.top) * 2 : u.bottom - s.bottom > (s.bottom - u.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const cR = /[\u0590-\u08ac]/;
function uR(t, e, n) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let i = r.parentOffset, o = !i, s = i == r.parent.content.size, a = t.domSelection();
  return !cR.test(r.parent.textContent) || !a.modify ? n == "left" || n == "backward" ? o : s : Xx(t, e, () => {
    let { focusNode: l, focusOffset: c, anchorNode: u, anchorOffset: f } = t.domSelectionRange(), p = a.caretBidiLevel;
    a.modify("move", n, "character");
    let d = r.depth ? t.docView.domAfterPos(r.before()) : t.dom, { focusNode: h, focusOffset: m } = t.domSelectionRange(), v = h && !d.contains(h.nodeType == 1 ? h : h.parentNode) || l == h && c == m;
    try {
      a.collapse(u, f), l && (l != u || c != f) && a.extend && a.extend(l, c);
    } catch {
    }
    return p != null && (a.caretBidiLevel = p), v;
  });
}
let v0 = null, g0 = null, y0 = !1;
function fR(t, e, n) {
  return v0 == e && g0 == n ? y0 : (v0 = e, g0 = n, y0 = n == "up" || n == "down" ? lR(t, e, n) : uR(t, e, n));
}
const Ft = 0, b0 = 1, Tr = 2, hn = 3;
class ys {
  constructor(e, n, r, i) {
    this.parent = e, this.children = n, this.dom = r, this.contentDOM = i, this.dirty = Ft, r.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, n, r) {
    return !1;
  }
  matchesHack(e) {
    return !1;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(e) {
    return !1;
  }
  // The size of the content represented by this desc.
  get size() {
    let e = 0;
    for (let n = 0; n < this.children.length; n++)
      e += this.children[n].size;
    return e;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let e = 0; e < this.children.length; e++)
      this.children[e].destroy();
  }
  posBeforeChild(e) {
    for (let n = 0, r = this.posAtStart; ; n++) {
      let i = this.children[n];
      if (i == e)
        return r;
      r += i.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, n, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (r < 0) {
        let o, s;
        if (e == this.contentDOM)
          o = e.childNodes[n - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.previousSibling;
        }
        for (; o && !((s = o.pmViewDesc) && s.parent == this); )
          o = o.previousSibling;
        return o ? this.posBeforeChild(s) + s.size : this.posAtStart;
      } else {
        let o, s;
        if (e == this.contentDOM)
          o = e.childNodes[n];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.nextSibling;
        }
        for (; o && !((s = o.pmViewDesc) && s.parent == this); )
          o = o.nextSibling;
        return o ? this.posBeforeChild(s) : this.posAtEnd;
      }
    let i;
    if (e == this.dom && this.contentDOM)
      i = n > lt(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      i = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (n == 0)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = !1;
            break;
          }
          if (o.previousSibling)
            break;
        }
      if (i == null && n == e.childNodes.length)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = !0;
            break;
          }
          if (o.nextSibling)
            break;
        }
    }
    return i ?? r > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, n = !1) {
    for (let r = !0, i = e; i; i = i.parentNode) {
      let o = this.getDesc(i), s;
      if (o && (!n || o.node))
        if (r && (s = o.nodeDOM) && !(s.nodeType == 1 ? s.contains(e.nodeType == 1 ? e : e.parentNode) : s == e))
          r = !1;
        else
          return o;
    }
  }
  getDesc(e) {
    let n = e.pmViewDesc;
    for (let r = n; r; r = r.parent)
      if (r == this)
        return n;
  }
  posFromDOM(e, n, r) {
    for (let i = e; i; i = i.parentNode) {
      let o = this.getDesc(i);
      if (o)
        return o.localPosFromDOM(e, n, r);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let n = 0, r = 0; n < this.children.length; n++) {
      let i = this.children[n], o = r + i.size;
      if (r == e && o != r) {
        for (; !i.border && i.children.length; )
          i = i.children[0];
        return i;
      }
      if (e < o)
        return i.descAt(e - r - i.border);
      r = o;
    }
  }
  domFromPos(e, n) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, i = 0;
    for (let o = 0; r < this.children.length; r++) {
      let s = this.children[r], a = o + s.size;
      if (a > e || s instanceof Zx) {
        i = e - o;
        break;
      }
      o = a;
    }
    if (i)
      return this.children[r].domFromPos(i - this.children[r].border, n);
    for (let o; r && !(o = this.children[r - 1]).size && o instanceof Yx && o.side >= 0; r--)
      ;
    if (n <= 0) {
      let o, s = !0;
      for (; o = r ? this.children[r - 1] : null, !(!o || o.dom.parentNode == this.contentDOM); r--, s = !1)
        ;
      return o && n && s && !o.border && !o.domAtom ? o.domFromPos(o.size, n) : { node: this.contentDOM, offset: o ? lt(o.dom) + 1 : 0 };
    } else {
      let o, s = !0;
      for (; o = r < this.children.length ? this.children[r] : null, !(!o || o.dom.parentNode == this.contentDOM); r++, s = !1)
        ;
      return o && s && !o.border && !o.domAtom ? o.domFromPos(0, n) : { node: this.contentDOM, offset: o ? lt(o.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, n, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: n, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let i = -1, o = -1;
    for (let s = r, a = 0; ; a++) {
      let l = this.children[a], c = s + l.size;
      if (i == -1 && e <= c) {
        let u = s + l.border;
        if (e >= u && n <= c - l.border && l.node && l.contentDOM && this.contentDOM.contains(l.contentDOM))
          return l.parseRange(e, n, u);
        e = s;
        for (let f = a; f > 0; f--) {
          let p = this.children[f - 1];
          if (p.size && p.dom.parentNode == this.contentDOM && !p.emptyChildAt(1)) {
            i = lt(p.dom) + 1;
            break;
          }
          e -= p.size;
        }
        i == -1 && (i = 0);
      }
      if (i > -1 && (c > n || a == this.children.length - 1)) {
        n = c;
        for (let u = a + 1; u < this.children.length; u++) {
          let f = this.children[u];
          if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(-1)) {
            o = lt(f.dom);
            break;
          }
          n += f.size;
        }
        o == -1 && (o = this.contentDOM.childNodes.length);
        break;
      }
      s = c;
    }
    return { node: this.contentDOM, from: e, to: n, fromOffset: i, toOffset: o };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let n = this.children[e < 0 ? 0 : this.children.length - 1];
    return n.size == 0 || n.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: n, offset: r } = this.domFromPos(e, 0);
    if (n.nodeType != 1 || r == n.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return n.childNodes[r];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(e, n, r, i = !1) {
    let o = Math.min(e, n), s = Math.max(e, n);
    for (let p = 0, d = 0; p < this.children.length; p++) {
      let h = this.children[p], m = d + h.size;
      if (o > d && s < m)
        return h.setSelection(e - d - h.border, n - d - h.border, r, i);
      d = m;
    }
    let a = this.domFromPos(e, e ? -1 : 1), l = n == e ? a : this.domFromPos(n, n ? -1 : 1), c = r.getSelection(), u = !1;
    if ((Qt || ct) && e == n) {
      let { node: p, offset: d } = a;
      if (p.nodeType == 3) {
        if (u = !!(d && p.nodeValue[d - 1] == `
`), u && d == p.nodeValue.length)
          for (let h = p, m; h; h = h.parentNode) {
            if (m = h.nextSibling) {
              m.nodeName == "BR" && (a = l = { node: m.parentNode, offset: lt(m) + 1 });
              break;
            }
            let v = h.pmViewDesc;
            if (v && v.node && v.node.isBlock)
              break;
          }
      } else {
        let h = p.childNodes[d - 1];
        u = h && (h.nodeName == "BR" || h.contentEditable == "false");
      }
    }
    if (Qt && c.focusNode && c.focusNode != l.node && c.focusNode.nodeType == 1) {
      let p = c.focusNode.childNodes[c.focusOffset];
      p && p.contentEditable == "false" && (i = !0);
    }
    if (!(i || u && ct) && Gr(a.node, a.offset, c.anchorNode, c.anchorOffset) && Gr(l.node, l.offset, c.focusNode, c.focusOffset))
      return;
    let f = !1;
    if ((c.extend || e == n) && !u) {
      c.collapse(a.node, a.offset);
      try {
        e != n && c.extend(l.node, l.offset), f = !0;
      } catch {
      }
    }
    if (!f) {
      if (e > n) {
        let d = a;
        a = l, l = d;
      }
      let p = document.createRange();
      p.setEnd(l.node, l.offset), p.setStart(a.node, a.offset), c.removeAllRanges(), c.addRange(p);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(e, n) {
    for (let r = 0, i = 0; i < this.children.length; i++) {
      let o = this.children[i], s = r + o.size;
      if (r == s ? e <= s && n >= r : e < s && n > r) {
        let a = r + o.border, l = s - o.border;
        if (e >= a && n <= l) {
          this.dirty = e == r || n == s ? Tr : b0, e == a && n == l && (o.contentLost || o.dom.parentNode != this.contentDOM) ? o.dirty = hn : o.markDirty(e - a, n - a);
          return;
        } else
          o.dirty = o.dom == o.contentDOM && o.dom.parentNode == this.contentDOM && !o.children.length ? Tr : hn;
      }
      r = s;
    }
    this.dirty = Tr;
  }
  markParentsDirty() {
    let e = 1;
    for (let n = this.parent; n; n = n.parent, e++) {
      let r = e == 1 ? Tr : b0;
      n.dirty < r && (n.dirty = r);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
}
class Yx extends ys {
  constructor(e, n, r, i) {
    let o, s = n.type.toDOM;
    if (typeof s == "function" && (s = s(r, () => {
      if (!o)
        return i;
      if (o.parent)
        return o.parent.posBeforeChild(o);
    })), !n.type.spec.raw) {
      if (s.nodeType != 1) {
        let a = document.createElement("span");
        a.appendChild(s), s = a;
      }
      s.contentEditable = "false", s.classList.add("ProseMirror-widget");
    }
    super(e, [], s, null), this.widget = n, this.widget = n, o = this;
  }
  matchesWidget(e) {
    return this.dirty == Ft && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(e) {
    let n = this.widget.spec.stopEvent;
    return n ? n(e) : !1;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom), super.destroy();
  }
  get domAtom() {
    return !0;
  }
  get side() {
    return this.widget.type.side;
  }
}
class pR extends ys {
  constructor(e, n, r, i) {
    super(e, [], n, null), this.textDOM = r, this.text = i;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, n) {
    return e != this.textDOM ? this.posAtStart + (n ? this.size : 0) : this.posAtStart + n;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class qr extends ys {
  constructor(e, n, r, i) {
    super(e, [], r, i), this.mark = n;
  }
  static create(e, n, r, i) {
    let o = i.nodeViews[n.type.name], s = o && o(n, i, r);
    return (!s || !s.dom) && (s = fn.renderSpec(document, n.type.spec.toDOM(n, r))), new qr(e, n, s.dom, s.contentDOM || s.dom);
  }
  parseRule() {
    return this.dirty & hn || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(e) {
    return this.dirty != hn && this.mark.eq(e);
  }
  markDirty(e, n) {
    if (super.markDirty(e, n), this.dirty != Ft) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = Ft;
    }
  }
  slice(e, n, r) {
    let i = qr.create(this.parent, this.mark, !0, r), o = this.children, s = this.size;
    n < s && (o = ed(o, n, s, r)), e > 0 && (o = ed(o, 0, e, r));
    for (let a = 0; a < o.length; a++)
      o[a].parent = i;
    return i.children = o, i;
  }
}
class Qn extends ys {
  constructor(e, n, r, i, o, s, a, l, c) {
    super(e, [], o, s), this.node = n, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = a;
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(e, n, r, i, o, s) {
    let a = o.nodeViews[n.type.name], l, c = a && a(n, o, () => {
      if (!l)
        return s;
      if (l.parent)
        return l.parent.posBeforeChild(l);
    }, r, i), u = c && c.dom, f = c && c.contentDOM;
    if (n.isText) {
      if (!u)
        u = document.createTextNode(n.text);
      else if (u.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else
      u || ({ dom: u, contentDOM: f } = fn.renderSpec(document, n.type.spec.toDOM(n)));
    !f && !n.isText && u.nodeName != "BR" && (u.hasAttribute("contenteditable") || (u.contentEditable = "false"), n.type.spec.draggable && (u.draggable = !0));
    let p = u;
    return u = tO(u, r, n), c ? l = new dR(e, n, r, i, u, f || null, p, c, o, s + 1) : n.isText ? new ql(e, n, r, i, u, p, o) : new Qn(e, n, r, i, u, f || null, p, o, s + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let e = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM)
      e.getContent = () => this.node.content;
    else if (!this.contentLost)
      e.contentElement = this.contentDOM;
    else {
      for (let n = this.children.length - 1; n >= 0; n--) {
        let r = this.children[n];
        if (this.dom.contains(r.dom.parentNode)) {
          e.contentElement = r.dom.parentNode;
          break;
        }
      }
      e.contentElement || (e.getContent = () => I.empty);
    }
    return e;
  }
  matchesNode(e, n, r) {
    return this.dirty == Ft && e.eq(this.node) && Qp(n, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(e, n) {
    let r = this.node.inlineContent, i = n, o = e.composing ? this.localCompositionInfo(e, n) : null, s = o && o.pos > -1 ? o : null, a = o && o.pos < 0, l = new mR(this, s && s.node, e);
    yR(this.node, this.innerDeco, (c, u, f) => {
      c.spec.marks ? l.syncToMarks(c.spec.marks, r, e) : c.type.side >= 0 && !f && l.syncToMarks(u == this.node.childCount ? pe.none : this.node.child(u).marks, r, e), l.placeWidget(c, e, i);
    }, (c, u, f, p) => {
      l.syncToMarks(c.marks, r, e);
      let d;
      l.findNodeMatch(c, u, f, p) || a && e.state.selection.from > i && e.state.selection.to < i + c.nodeSize && (d = l.findIndexWithChild(o.node)) > -1 && l.updateNodeAt(c, u, f, d, e) || l.updateNextNode(c, u, f, e, p, i) || l.addNode(c, u, f, e, i), i += c.nodeSize;
    }), l.syncToMarks([], r, e), this.node.isTextblock && l.addTextblockHacks(), l.destroyRest(), (l.changed || this.dirty == Tr) && (s && this.protectLocalComposition(e, s), Qx(this.contentDOM, this.children, e), Wi && bR(this.dom));
  }
  localCompositionInfo(e, n) {
    let { from: r, to: i } = e.state.selection;
    if (!(e.state.selection instanceof ie) || r < n || i > n + this.node.content.size)
      return null;
    let o = e.domSelectionRange(), s = wR(o.focusNode, o.focusOffset);
    if (!s || !this.dom.contains(s.parentNode))
      return null;
    if (this.node.inlineContent) {
      let a = s.nodeValue, l = SR(this.node.content, a, r - n, i - n);
      return l < 0 ? null : { node: s, pos: l, text: a };
    } else
      return { node: s, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: n, pos: r, text: i }) {
    if (this.getDesc(n))
      return;
    let o = n;
    for (; o.parentNode != this.contentDOM; o = o.parentNode) {
      for (; o.previousSibling; )
        o.parentNode.removeChild(o.previousSibling);
      for (; o.nextSibling; )
        o.parentNode.removeChild(o.nextSibling);
      o.pmViewDesc && (o.pmViewDesc = void 0);
    }
    let s = new pR(this, o, n, i);
    e.input.compositionNodes.push(s), this.children = ed(this.children, r, r + i.length, e, s);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, n, r, i) {
    return this.dirty == hn || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, n, r, i), !0);
  }
  updateInner(e, n, r, i) {
    this.updateOuterDeco(n), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = Ft;
  }
  updateOuterDeco(e) {
    if (Qp(e, this.outerDeco))
      return;
    let n = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = eO(this.dom, this.nodeDOM, Zp(this.outerDeco, this.node, n), Zp(e, this.node, n)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  // Mark this node as being the selected node.
  selectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0);
  }
  // Remove selected node marking from this node.
  deselectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable");
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function w0(t, e, n, r, i) {
  tO(r, e, t);
  let o = new Qn(void 0, t, e, n, r, r, r, i, 0);
  return o.contentDOM && o.updateChildren(i, 0), o;
}
class ql extends Qn {
  constructor(e, n, r, i, o, s, a) {
    super(e, n, r, i, o, null, s, a, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, n, r, i) {
    return this.dirty == hn || this.dirty != Ft && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(n), (this.dirty != Ft || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = Ft, !0);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let n = this.nodeDOM; n; n = n.parentNode)
      if (n == e)
        return !0;
    return !1;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, n, r) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(n, this.node.text.length) : super.localPosFromDOM(e, n, r);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, n, r) {
    let i = this.node.cut(e, n), o = document.createTextNode(i.text);
    return new ql(this.parent, i, this.outerDeco, this.innerDeco, o, o, r);
  }
  markDirty(e, n) {
    super.markDirty(e, n), this.dom != this.nodeDOM && (e == 0 || n == this.nodeDOM.nodeValue.length) && (this.dirty = hn);
  }
  get domAtom() {
    return !1;
  }
}
class Zx extends ys {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == Ft && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class dR extends Qn {
  constructor(e, n, r, i, o, s, a, l, c, u) {
    super(e, n, r, i, o, s, a, c, u), this.spec = l;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, n, r, i) {
    if (this.dirty == hn)
      return !1;
    if (this.spec.update) {
      let o = this.spec.update(e, n, r);
      return o && this.updateInner(e, n, r, i), o;
    } else
      return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, n, r, i);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, n, r, i) {
    this.spec.setSelection ? this.spec.setSelection(e, n, r) : super.setSelection(e, n, r, i);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(e) {
    return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
}
function Qx(t, e, n) {
  let r = t.firstChild, i = !1;
  for (let o = 0; o < e.length; o++) {
    let s = e[o], a = s.dom;
    if (a.parentNode == t) {
      for (; a != r; )
        r = S0(r), i = !0;
      r = r.nextSibling;
    } else
      i = !0, t.insertBefore(a, r);
    if (s instanceof qr) {
      let l = r ? r.previousSibling : t.lastChild;
      Qx(s.contentDOM, s.children, n), r = l ? l.nextSibling : t.firstChild;
    }
  }
  for (; r; )
    r = S0(r), i = !0;
  i && n.trackWrites == t && (n.trackWrites = null);
}
const Bo = function(t) {
  t && (this.nodeName = t);
};
Bo.prototype = /* @__PURE__ */ Object.create(null);
const $r = [new Bo()];
function Zp(t, e, n) {
  if (t.length == 0)
    return $r;
  let r = n ? $r[0] : new Bo(), i = [r];
  for (let o = 0; o < t.length; o++) {
    let s = t[o].type.attrs;
    if (s) {
      s.nodeName && i.push(r = new Bo(s.nodeName));
      for (let a in s) {
        let l = s[a];
        l != null && (n && i.length == 1 && i.push(r = new Bo(e.isInline ? "span" : "div")), a == "class" ? r.class = (r.class ? r.class + " " : "") + l : a == "style" ? r.style = (r.style ? r.style + ";" : "") + l : a != "nodeName" && (r[a] = l));
      }
    }
  }
  return i;
}
function eO(t, e, n, r) {
  if (n == $r && r == $r)
    return e;
  let i = e;
  for (let o = 0; o < r.length; o++) {
    let s = r[o], a = n[o];
    if (o) {
      let l;
      a && a.nodeName == s.nodeName && i != t && (l = i.parentNode) && l.nodeName.toLowerCase() == s.nodeName || (l = document.createElement(s.nodeName), l.pmIsDeco = !0, l.appendChild(i), a = $r[0]), i = l;
    }
    hR(i, a || $r[0], s);
  }
  return i;
}
function hR(t, e, n) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in n) && t.removeAttribute(r);
  for (let r in n)
    r != "class" && r != "style" && r != "nodeName" && n[r] != e[r] && t.setAttribute(r, n[r]);
  if (e.class != n.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], i = n.class ? n.class.split(" ").filter(Boolean) : [];
    for (let o = 0; o < r.length; o++)
      i.indexOf(r[o]) == -1 && t.classList.remove(r[o]);
    for (let o = 0; o < i.length; o++)
      r.indexOf(i[o]) == -1 && t.classList.add(i[o]);
    t.classList.length == 0 && t.removeAttribute("class");
  }
  if (e.style != n.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, i;
      for (; i = r.exec(e.style); )
        t.style.removeProperty(i[1]);
    }
    n.style && (t.style.cssText += n.style);
  }
}
function tO(t, e, n) {
  return eO(t, t, $r, Zp(e, n, t.nodeType != 1));
}
function Qp(t, e) {
  if (t.length != e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (!t[n].type.eq(e[n].type))
      return !1;
  return !0;
}
function S0(t) {
  let e = t.nextSibling;
  return t.parentNode.removeChild(t), e;
}
class mR {
  constructor(e, n, r) {
    this.lock = n, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = vR(e.node.content, e);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(e, n) {
    if (e != n) {
      for (let r = e; r < n; r++)
        this.top.children[r].destroy();
      this.top.children.splice(e, n - e), this.changed = !0;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(e, n, r) {
    let i = 0, o = this.stack.length >> 1, s = Math.min(o, e.length);
    for (; i < s && (i == o - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1; )
      i++;
    for (; i < o; )
      this.destroyRest(), this.top.dirty = Ft, this.index = this.stack.pop(), this.top = this.stack.pop(), o--;
    for (; o < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let a = -1;
      for (let l = this.index; l < Math.min(this.index + 3, this.top.children.length); l++) {
        let c = this.top.children[l];
        if (c.matchesMark(e[o]) && !this.isLocked(c.dom)) {
          a = l;
          break;
        }
      }
      if (a > -1)
        a > this.index && (this.changed = !0, this.destroyBetween(this.index, a)), this.top = this.top.children[this.index];
      else {
        let l = qr.create(this.top, e[o], n, r);
        this.top.children.splice(this.index, 0, l), this.top = l, this.changed = !0;
      }
      this.index = 0, o++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, n, r, i) {
    let o = -1, s;
    if (i >= this.preMatch.index && (s = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && s.matchesNode(e, n, r))
      o = this.top.children.indexOf(s, this.index);
    else
      for (let a = this.index, l = Math.min(this.top.children.length, a + 5); a < l; a++) {
        let c = this.top.children[a];
        if (c.matchesNode(e, n, r) && !this.preMatch.matched.has(c)) {
          o = a;
          break;
        }
      }
    return o < 0 ? !1 : (this.destroyBetween(this.index, o), this.index++, !0);
  }
  updateNodeAt(e, n, r, i, o) {
    let s = this.top.children[i];
    return s.dirty == hn && s.dom == s.contentDOM && (s.dirty = Tr), s.update(e, n, r, o) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let n = e.parentNode;
      if (!n)
        return -1;
      if (n == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let i = this.index; i < this.top.children.length; i++)
            if (this.top.children[i] == r)
              return i;
        }
        return -1;
      }
      e = n;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, n, r, i, o, s) {
    for (let a = this.index; a < this.top.children.length; a++) {
      let l = this.top.children[a];
      if (l instanceof Qn) {
        let c = this.preMatch.matched.get(l);
        if (c != null && c != o)
          return !1;
        let u = l.dom, f, p = this.isLocked(u) && !(e.isText && l.node && l.node.isText && l.nodeDOM.nodeValue == e.text && l.dirty != hn && Qp(n, l.outerDeco));
        if (!p && l.update(e, n, r, i))
          return this.destroyBetween(this.index, a), l.dom != u && (this.changed = !0), this.index++, !0;
        if (!p && (f = this.recreateWrapper(l, e, n, r, i, s)))
          return this.top.children[this.index] = f, f.contentDOM && (f.dirty = Tr, f.updateChildren(i, s + 1), f.dirty = Ft), this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(e, n, r, i, o, s) {
    if (e.dirty || n.isAtom || !e.children.length || !e.node.content.eq(n.content))
      return null;
    let a = Qn.create(this.top, n, r, i, o, s);
    if (a.contentDOM) {
      a.children = e.children, e.children = [];
      for (let l of a.children)
        l.parent = a;
    }
    return e.destroy(), a;
  }
  // Insert the node as a newly created node desc.
  addNode(e, n, r, i, o) {
    let s = Qn.create(this.top, e, n, r, i, o);
    s.contentDOM && s.updateChildren(i, o + 1), this.top.children.splice(this.index++, 0, s), this.changed = !0;
  }
  placeWidget(e, n, r) {
    let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let o = new Yx(this.top, e, n, r);
      this.top.children.splice(this.index++, 0, o), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], n = this.top;
    for (; e instanceof qr; )
      n = e, e = n.children[n.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof ql) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((ct || tt) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", n), this.addHackNode("BR", this.top));
  }
  addHackNode(e, n) {
    if (n == this.top && this.index < n.children.length && n.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let i = new Zx(this.top, [], r, null);
      n != this.top ? n.children.push(i) : n.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function vR(t, e) {
  let n = e, r = n.children.length, i = t.childCount, o = /* @__PURE__ */ new Map(), s = [];
  e:
    for (; i > 0; ) {
      let a;
      for (; ; )
        if (r) {
          let c = n.children[r - 1];
          if (c instanceof qr)
            n = c, r = c.children.length;
          else {
            a = c, r--;
            break;
          }
        } else {
          if (n == e)
            break e;
          r = n.parent.children.indexOf(n), n = n.parent;
        }
      let l = a.node;
      if (l) {
        if (l != t.child(i - 1))
          break;
        --i, o.set(a, i), s.push(a);
      }
    }
  return { index: i, matched: o, matches: s.reverse() };
}
function gR(t, e) {
  return t.type.side - e.type.side;
}
function yR(t, e, n, r) {
  let i = e.locals(t), o = 0;
  if (i.length == 0) {
    for (let c = 0; c < t.childCount; c++) {
      let u = t.child(c);
      r(u, i, e.forChild(o, u), c), o += u.nodeSize;
    }
    return;
  }
  let s = 0, a = [], l = null;
  for (let c = 0; ; ) {
    let u, f;
    for (; s < i.length && i[s].to == o; ) {
      let v = i[s++];
      v.widget && (u ? (f || (f = [u])).push(v) : u = v);
    }
    if (u)
      if (f) {
        f.sort(gR);
        for (let v = 0; v < f.length; v++)
          n(f[v], c, !!l);
      } else
        n(u, c, !!l);
    let p, d;
    if (l)
      d = -1, p = l, l = null;
    else if (c < t.childCount)
      d = c, p = t.child(c++);
    else
      break;
    for (let v = 0; v < a.length; v++)
      a[v].to <= o && a.splice(v--, 1);
    for (; s < i.length && i[s].from <= o && i[s].to > o; )
      a.push(i[s++]);
    let h = o + p.nodeSize;
    if (p.isText) {
      let v = h;
      s < i.length && i[s].from < v && (v = i[s].from);
      for (let y = 0; y < a.length; y++)
        a[y].to < v && (v = a[y].to);
      v < h && (l = p.cut(v - o), p = p.cut(0, v - o), h = v, d = -1);
    }
    let m = p.isInline && !p.isLeaf ? a.filter((v) => !v.inline) : a.slice();
    r(p, m, e.forChild(o, p), d), o = h;
  }
}
function bR(t) {
  if (t.nodeName == "UL" || t.nodeName == "OL") {
    let e = t.style.cssText;
    t.style.cssText = e + "; list-style: square !important", window.getComputedStyle(t).listStyle, t.style.cssText = e;
  }
}
function wR(t, e) {
  for (; ; ) {
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && e > 0) {
      if (t.childNodes.length > e && t.childNodes[e].nodeType == 3)
        return t.childNodes[e];
      t = t.childNodes[e - 1], e = an(t);
    } else if (t.nodeType == 1 && e < t.childNodes.length)
      t = t.childNodes[e], e = 0;
    else
      return null;
  }
}
function SR(t, e, n, r) {
  for (let i = 0, o = 0; i < t.childCount && o <= r; ) {
    let s = t.child(i++), a = o;
    if (o += s.nodeSize, !s.isText)
      continue;
    let l = s.text;
    for (; i < t.childCount; ) {
      let c = t.child(i++);
      if (o += c.nodeSize, !c.isText)
        break;
      l += c.text;
    }
    if (o >= n) {
      let c = a < r ? l.lastIndexOf(e, r - a - 1) : -1;
      if (c >= 0 && c + e.length + a >= n)
        return a + c;
      if (n == r && l.length >= r + e.length - a && l.slice(r - a, r - a + e.length) == e)
        return r;
    }
  }
  return -1;
}
function ed(t, e, n, r, i) {
  let o = [];
  for (let s = 0, a = 0; s < t.length; s++) {
    let l = t[s], c = a, u = a += l.size;
    c >= n || u <= e ? o.push(l) : (c < e && o.push(l.slice(0, e - c, r)), i && (o.push(i), i = void 0), u > n && o.push(l.slice(n - c, l.size, r)));
  }
  return o;
}
function Ph(t, e = null) {
  let n = t.domSelectionRange(), r = t.state.doc;
  if (!n.focusNode)
    return null;
  let i = t.docView.nearestDesc(n.focusNode), o = i && i.size == 0, s = t.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
  if (s < 0)
    return null;
  let a = r.resolve(s), l, c;
  if (Ul(n)) {
    for (l = a; i && !i.node; )
      i = i.parent;
    let u = i.node;
    if (i && u.isAtom && X.isSelectable(u) && i.parent && !(u.isInline && UA(n.focusNode, n.focusOffset, i.dom))) {
      let f = i.posBefore;
      c = new X(s == f ? a : r.resolve(f));
    }
  } else {
    let u = t.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
    if (u < 0)
      return null;
    l = r.resolve(u);
  }
  if (!c) {
    let u = e == "pointer" || t.state.selection.head < a.pos && !o ? 1 : -1;
    c = Dh(t, l, a, u);
  }
  return c;
}
function nO(t) {
  return t.editable ? t.hasFocus() : iO(t) && document.activeElement && document.activeElement.contains(t.dom);
}
function In(t, e = !1) {
  let n = t.state.selection;
  if (rO(t, n), !!nO(t)) {
    if (!e && t.input.mouseDown && t.input.mouseDown.allowDefault && tt) {
      let r = t.domSelectionRange(), i = t.domObserver.currentSelection;
      if (r.anchorNode && i.anchorNode && Gr(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
        t.input.mouseDown.delayedSelectionSync = !0, t.domObserver.setCurSelection();
        return;
      }
    }
    if (t.domObserver.disconnectSelection(), t.cursorWrapper)
      OR(t);
    else {
      let { anchor: r, head: i } = n, o, s;
      x0 && !(n instanceof ie) && (n.$from.parent.inlineContent || (o = O0(t, n.from)), !n.empty && !n.$from.parent.inlineContent && (s = O0(t, n.to))), t.docView.setSelection(r, i, t.root, e), x0 && (o && E0(o), s && E0(s)), n.visible ? t.dom.classList.remove("ProseMirror-hideselection") : (t.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && xR(t));
    }
    t.domObserver.setCurSelection(), t.domObserver.connectSelection();
  }
}
const x0 = ct || tt && JA < 63;
function O0(t, e) {
  let { node: n, offset: r } = t.docView.domFromPos(e, 0), i = r < n.childNodes.length ? n.childNodes[r] : null, o = r ? n.childNodes[r - 1] : null;
  if (ct && i && i.contentEditable == "false")
    return Pf(i);
  if ((!i || i.contentEditable == "false") && (!o || o.contentEditable == "false")) {
    if (i)
      return Pf(i);
    if (o)
      return Pf(o);
  }
}
function Pf(t) {
  return t.contentEditable = "true", ct && t.draggable && (t.draggable = !1, t.wasDraggable = !0), t;
}
function E0(t) {
  t.contentEditable = "false", t.wasDraggable && (t.draggable = !0, t.wasDraggable = null);
}
function xR(t) {
  let e = t.dom.ownerDocument;
  e.removeEventListener("selectionchange", t.input.hideSelectionGuard);
  let n = t.domSelectionRange(), r = n.anchorNode, i = n.anchorOffset;
  e.addEventListener("selectionchange", t.input.hideSelectionGuard = () => {
    (n.anchorNode != r || n.anchorOffset != i) && (e.removeEventListener("selectionchange", t.input.hideSelectionGuard), setTimeout(() => {
      (!nO(t) || t.state.selection.visible) && t.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function OR(t) {
  let e = t.domSelection(), n = document.createRange(), r = t.cursorWrapper.dom, i = r.nodeName == "IMG";
  i ? n.setEnd(r.parentNode, lt(r) + 1) : n.setEnd(r, 0), n.collapse(!1), e.removeAllRanges(), e.addRange(n), !i && !t.state.selection.visible && yt && Zn <= 11 && (r.disabled = !0, r.disabled = !1);
}
function rO(t, e) {
  if (e instanceof X) {
    let n = t.docView.descAt(e.from);
    n != t.lastSelectedViewDesc && (C0(t), n && n.selectNode(), t.lastSelectedViewDesc = n);
  } else
    C0(t);
}
function C0(t) {
  t.lastSelectedViewDesc && (t.lastSelectedViewDesc.parent && t.lastSelectedViewDesc.deselectNode(), t.lastSelectedViewDesc = void 0);
}
function Dh(t, e, n, r) {
  return t.someProp("createSelectionBetween", (i) => i(t, e, n)) || ie.between(e, n, r);
}
function _0(t) {
  return t.editable && !t.hasFocus() ? !1 : iO(t);
}
function iO(t) {
  let e = t.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return t.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (t.editable || t.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function ER(t) {
  let e = t.docView.domFromPos(t.state.selection.anchor, 0), n = t.domSelectionRange();
  return Gr(e.node, e.offset, n.anchorNode, n.anchorOffset);
}
function td(t, e) {
  let { $anchor: n, $head: r } = t.selection, i = e > 0 ? n.max(r) : n.min(r), o = i.parent.inlineContent ? i.depth ? t.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return o && ne.findFrom(o, e);
}
function Mr(t, e) {
  return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()), !0;
}
function k0(t, e, n) {
  let r = t.state.selection;
  if (r instanceof ie) {
    if (!r.empty || n.indexOf("s") > -1)
      return !1;
    if (t.endOfTextblock(e > 0 ? "forward" : "backward")) {
      let i = td(t.state, e);
      return i && i instanceof X ? Mr(t, i) : !1;
    } else if (!($t && n.indexOf("m") > -1)) {
      let i = r.$head, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, s;
      if (!o || o.isText)
        return !1;
      let a = e < 0 ? i.pos - o.nodeSize : i.pos;
      return o.isAtom || (s = t.docView.descAt(a)) && !s.contentDOM ? X.isSelectable(o) ? Mr(t, new X(e < 0 ? t.state.doc.resolve(i.pos - o.nodeSize) : i)) : Gl ? Mr(t, new ie(t.state.doc.resolve(e < 0 ? a : a + o.nodeSize))) : !1 : !1;
    }
  } else {
    if (r instanceof X && r.node.isInline)
      return Mr(t, new ie(e > 0 ? r.$to : r.$from));
    {
      let i = td(t.state, e);
      return i ? Mr(t, i) : !1;
    }
  }
}
function Za(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function zo(t, e) {
  if (t.contentEditable == "false")
    return !0;
  let n = t.pmViewDesc;
  return n && n.size == 0 && (e < 0 || t.nextSibling || t.nodeName != "BR");
}
function Si(t, e) {
  return e < 0 ? CR(t) : _R(t);
}
function CR(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let i, o, s = !1;
  for (Qt && n.nodeType == 1 && r < Za(n) && zo(n.childNodes[r], -1) && (s = !0); ; )
    if (r > 0) {
      if (n.nodeType != 1)
        break;
      {
        let a = n.childNodes[r - 1];
        if (zo(a, -1))
          i = n, o = --r;
        else if (a.nodeType == 3)
          n = a, r = n.nodeValue.length;
        else
          break;
      }
    } else {
      if (oO(n))
        break;
      {
        let a = n.previousSibling;
        for (; a && zo(a, -1); )
          i = n.parentNode, o = lt(a), a = a.previousSibling;
        if (a)
          n = a, r = Za(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = 0;
        }
      }
    }
  s ? nd(t, n, r) : i && nd(t, i, o);
}
function _R(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let i = Za(n), o, s;
  for (; ; )
    if (r < i) {
      if (n.nodeType != 1)
        break;
      let a = n.childNodes[r];
      if (zo(a, 1))
        o = n, s = ++r;
      else
        break;
    } else {
      if (oO(n))
        break;
      {
        let a = n.nextSibling;
        for (; a && zo(a, 1); )
          o = a.parentNode, s = lt(a) + 1, a = a.nextSibling;
        if (a)
          n = a, r = 0, i = Za(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = i = 0;
        }
      }
    }
  o && nd(t, o, s);
}
function oO(t) {
  let e = t.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function kR(t, e) {
  for (; t && e == t.childNodes.length && !$h(t); )
    e = lt(t) + 1, t = t.parentNode;
  for (; t && e < t.childNodes.length; ) {
    let n = t.childNodes[e];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    t = n, e = 0;
  }
}
function NR(t, e) {
  for (; t && !e && !$h(t); )
    e = lt(t), t = t.parentNode;
  for (; t && e; ) {
    let n = t.childNodes[e - 1];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    t = n, e = t.childNodes.length;
  }
}
function nd(t, e, n) {
  if (e.nodeType != 3) {
    let o, s;
    (s = kR(e, n)) ? (e = s, n = 0) : (o = NR(e, n)) && (e = o, n = o.nodeValue.length);
  }
  let r = t.domSelection();
  if (Ul(r)) {
    let o = document.createRange();
    o.setEnd(e, n), o.setStart(e, n), r.removeAllRanges(), r.addRange(o);
  } else
    r.extend && r.extend(e, n);
  t.domObserver.setCurSelection();
  let { state: i } = t;
  setTimeout(() => {
    t.state == i && In(t);
  }, 50);
}
function N0(t, e) {
  let n = t.state.doc.resolve(e);
  if (!(tt || KA) && n.parent.inlineContent) {
    let i = t.coordsAtPos(e);
    if (e > n.start()) {
      let o = t.coordsAtPos(e - 1), s = (o.top + o.bottom) / 2;
      if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left < i.left ? "ltr" : "rtl";
    }
    if (e < n.end()) {
      let o = t.coordsAtPos(e + 1), s = (o.top + o.bottom) / 2;
      if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left > i.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(t.dom).direction == "rtl" ? "rtl" : "ltr";
}
function M0(t, e, n) {
  let r = t.state.selection;
  if (r instanceof ie && !r.empty || n.indexOf("s") > -1 || $t && n.indexOf("m") > -1)
    return !1;
  let { $from: i, $to: o } = r;
  if (!i.parent.inlineContent || t.endOfTextblock(e < 0 ? "up" : "down")) {
    let s = td(t.state, e);
    if (s && s instanceof X)
      return Mr(t, s);
  }
  if (!i.parent.inlineContent) {
    let s = e < 0 ? i : o, a = r instanceof Zt ? ne.near(s, e) : ne.findFrom(s, e);
    return a ? Mr(t, a) : !1;
  }
  return !1;
}
function T0(t, e) {
  if (!(t.state.selection instanceof ie))
    return !0;
  let { $head: n, $anchor: r, empty: i } = t.state.selection;
  if (!n.sameParent(r))
    return !0;
  if (!i)
    return !1;
  if (t.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let o = !n.textOffset && (e < 0 ? n.nodeBefore : n.nodeAfter);
  if (o && !o.isText) {
    let s = t.state.tr;
    return e < 0 ? s.delete(n.pos - o.nodeSize, n.pos) : s.delete(n.pos, n.pos + o.nodeSize), t.dispatch(s), !0;
  }
  return !1;
}
function $0(t, e, n) {
  t.domObserver.stop(), e.contentEditable = n, t.domObserver.start();
}
function MR(t) {
  if (!ct || t.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (e && e.nodeType == 1 && n == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    $0(t, r, "true"), setTimeout(() => $0(t, r, "false"), 20);
  }
  return !1;
}
function TR(t) {
  let e = "";
  return t.ctrlKey && (e += "c"), t.metaKey && (e += "m"), t.altKey && (e += "a"), t.shiftKey && (e += "s"), e;
}
function $R(t, e) {
  let n = e.keyCode, r = TR(e);
  if (n == 8 || $t && n == 72 && r == "c")
    return T0(t, -1) || Si(t, -1);
  if (n == 46 && !e.shiftKey || $t && n == 68 && r == "c")
    return T0(t, 1) || Si(t, 1);
  if (n == 13 || n == 27)
    return !0;
  if (n == 37 || $t && n == 66 && r == "c") {
    let i = n == 37 ? N0(t, t.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return k0(t, i, r) || Si(t, i);
  } else if (n == 39 || $t && n == 70 && r == "c") {
    let i = n == 39 ? N0(t, t.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return k0(t, i, r) || Si(t, i);
  } else {
    if (n == 38 || $t && n == 80 && r == "c")
      return M0(t, -1, r) || Si(t, -1);
    if (n == 40 || $t && n == 78 && r == "c")
      return MR(t) || M0(t, 1, r) || Si(t, 1);
    if (r == ($t ? "m" : "c") && (n == 66 || n == 73 || n == 89 || n == 90))
      return !0;
  }
  return !1;
}
function sO(t, e) {
  t.someProp("transformCopied", (d) => {
    e = d(e, t);
  });
  let n = [], { content: r, openStart: i, openEnd: o } = e;
  for (; i > 1 && o > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    i--, o--;
    let d = r.firstChild;
    n.push(d.type.name, d.attrs != d.type.defaultAttrs ? d.attrs : null), r = d.content;
  }
  let s = t.someProp("clipboardSerializer") || fn.fromSchema(t.state.schema), a = pO(), l = a.createElement("div");
  l.appendChild(s.serializeFragment(r, { document: a }));
  let c = l.firstChild, u, f = 0;
  for (; c && c.nodeType == 1 && (u = fO[c.nodeName.toLowerCase()]); ) {
    for (let d = u.length - 1; d >= 0; d--) {
      let h = a.createElement(u[d]);
      for (; l.firstChild; )
        h.appendChild(l.firstChild);
      l.appendChild(h), f++;
    }
    c = l.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${i} ${o}${f ? ` -${f}` : ""} ${JSON.stringify(n)}`);
  let p = t.someProp("clipboardTextSerializer", (d) => d(e, t)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: l, text: p };
}
function aO(t, e, n, r, i) {
  let o = i.parent.type.spec.code, s, a;
  if (!n && !e)
    return null;
  let l = e && (r || o || !n);
  if (l) {
    if (t.someProp("transformPastedText", (p) => {
      e = p(e, o || r, t);
    }), o)
      return e ? new L(I.from(t.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : L.empty;
    let f = t.someProp("clipboardTextParser", (p) => p(e, i, r, t));
    if (f)
      a = f;
    else {
      let p = i.marks(), { schema: d } = t.state, h = fn.fromSchema(d);
      s = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((m) => {
        let v = s.appendChild(document.createElement("p"));
        m && v.appendChild(h.serializeNode(d.text(m, p)));
      });
    }
  } else
    t.someProp("transformPastedHTML", (f) => {
      n = f(n, t);
    }), s = DR(n), Gl && AR(s);
  let c = s && s.querySelector("[data-pm-slice]"), u = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (u && u[3])
    for (let f = +u[3]; f > 0; f--) {
      let p = s.firstChild;
      for (; p && p.nodeType != 1; )
        p = p.nextSibling;
      if (!p)
        break;
      s = p;
    }
  if (a || (a = (t.someProp("clipboardParser") || t.someProp("domParser") || Bi.fromSchema(t.state.schema)).parseSlice(s, {
    preserveWhitespace: !!(l || u),
    context: i,
    ruleFromNode(p) {
      return p.nodeName == "BR" && !p.nextSibling && p.parentNode && !IR.test(p.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), u)
    a = RR(I0(a, +u[1], +u[2]), u[4]);
  else if (a = L.maxOpen(PR(a.content, i), !0), a.openStart || a.openEnd) {
    let f = 0, p = 0;
    for (let d = a.content.firstChild; f < a.openStart && !d.type.spec.isolating; f++, d = d.firstChild)
      ;
    for (let d = a.content.lastChild; p < a.openEnd && !d.type.spec.isolating; p++, d = d.lastChild)
      ;
    a = I0(a, f, p);
  }
  return t.someProp("transformPasted", (f) => {
    a = f(a, t);
  }), a;
}
const IR = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function PR(t, e) {
  if (t.childCount < 2)
    return t;
  for (let n = e.depth; n >= 0; n--) {
    let i = e.node(n).contentMatchAt(e.index(n)), o, s = [];
    if (t.forEach((a) => {
      if (!s)
        return;
      let l = i.findWrapping(a.type), c;
      if (!l)
        return s = null;
      if (c = s.length && o.length && cO(l, o, a, s[s.length - 1], 0))
        s[s.length - 1] = c;
      else {
        s.length && (s[s.length - 1] = uO(s[s.length - 1], o.length));
        let u = lO(a, l);
        s.push(u), i = i.matchType(u.type), o = l;
      }
    }), s)
      return I.from(s);
  }
  return t;
}
function lO(t, e, n = 0) {
  for (let r = e.length - 1; r >= n; r--)
    t = e[r].create(null, I.from(t));
  return t;
}
function cO(t, e, n, r, i) {
  if (i < t.length && i < e.length && t[i] == e[i]) {
    let o = cO(t, e, n, r.lastChild, i + 1);
    if (o)
      return r.copy(r.content.replaceChild(r.childCount - 1, o));
    if (r.contentMatchAt(r.childCount).matchType(i == t.length - 1 ? n.type : t[i + 1]))
      return r.copy(r.content.append(I.from(lO(n, t, i + 1))));
  }
}
function uO(t, e) {
  if (e == 0)
    return t;
  let n = t.content.replaceChild(t.childCount - 1, uO(t.lastChild, e - 1)), r = t.contentMatchAt(t.childCount).fillBefore(I.empty, !0);
  return t.copy(n.append(r));
}
function rd(t, e, n, r, i, o) {
  let s = e < 0 ? t.firstChild : t.lastChild, a = s.content;
  return t.childCount > 1 && (o = 0), i < r - 1 && (a = rd(a, e, n, r, i + 1, o)), i >= n && (a = e < 0 ? s.contentMatchAt(0).fillBefore(a, o <= i).append(a) : a.append(s.contentMatchAt(s.childCount).fillBefore(I.empty, !0))), t.replaceChild(e < 0 ? 0 : t.childCount - 1, s.copy(a));
}
function I0(t, e, n) {
  return e < t.openStart && (t = new L(rd(t.content, -1, e, t.openStart, 0, t.openEnd), e, t.openEnd)), n < t.openEnd && (t = new L(rd(t.content, 1, n, t.openEnd, 0, 0), t.openStart, n)), t;
}
const fO = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let P0 = null;
function pO() {
  return P0 || (P0 = document.implementation.createHTMLDocument("title"));
}
function DR(t) {
  let e = /^(\s*<meta [^>]*>)*/.exec(t);
  e && (t = t.slice(e[0].length));
  let n = pO().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(t), i;
  if ((i = r && fO[r[1].toLowerCase()]) && (t = i.map((o) => "<" + o + ">").join("") + t + i.map((o) => "</" + o + ">").reverse().join("")), n.innerHTML = t, i)
    for (let o = 0; o < i.length; o++)
      n = n.querySelector(i[o]) || n;
  return n;
}
function AR(t) {
  let e = t.querySelectorAll(tt ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(t.ownerDocument.createTextNode(" "), r);
  }
}
function RR(t, e) {
  if (!t.size)
    return t;
  let n = t.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return t;
  }
  let { content: i, openStart: o, openEnd: s } = t;
  for (let a = r.length - 2; a >= 0; a -= 2) {
    let l = n.nodes[r[a]];
    if (!l || l.hasRequiredAttrs())
      break;
    i = I.from(l.create(r[a + 1], i)), o++, s++;
  }
  return new L(i, o, s);
}
const ut = {}, ft = {}, FR = { touchstart: !0, touchmove: !0 };
class LR {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "" }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastAndroidDelete = 0, this.composing = !1, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function jR(t) {
  for (let e in ut) {
    let n = ut[e];
    t.dom.addEventListener(e, t.input.eventHandlers[e] = (r) => {
      zR(t, r) && !Ah(t, r) && (t.editable || !(r.type in ft)) && n(t, r);
    }, FR[e] ? { passive: !0 } : void 0);
  }
  ct && t.dom.addEventListener("input", () => null), id(t);
}
function qn(t, e) {
  t.input.lastSelectionOrigin = e, t.input.lastSelectionTime = Date.now();
}
function BR(t) {
  t.domObserver.stop();
  for (let e in t.input.eventHandlers)
    t.dom.removeEventListener(e, t.input.eventHandlers[e]);
  clearTimeout(t.input.composingTimeout), clearTimeout(t.input.lastIOSEnterFallbackTimeout);
}
function id(t) {
  t.someProp("handleDOMEvents", (e) => {
    for (let n in e)
      t.input.eventHandlers[n] || t.dom.addEventListener(n, t.input.eventHandlers[n] = (r) => Ah(t, r));
  });
}
function Ah(t, e) {
  return t.someProp("handleDOMEvents", (n) => {
    let r = n[e.type];
    return r ? r(t, e) || e.defaultPrevented : !1;
  });
}
function zR(t, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let n = e.target; n != t.dom; n = n.parentNode)
    if (!n || n.nodeType == 11 || n.pmViewDesc && n.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function VR(t, e) {
  !Ah(t, e) && ut[e.type] && (t.editable || !(e.type in ft)) && ut[e.type](t, e);
}
ft.keydown = (t, e) => {
  let n = e;
  if (t.input.shiftKey = n.keyCode == 16 || n.shiftKey, !hO(t, n) && (t.input.lastKeyCode = n.keyCode, t.input.lastKeyCodeTime = Date.now(), !(Kt && tt && n.keyCode == 13)))
    if (n.keyCode != 229 && t.domObserver.forceFlush(), Wi && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey) {
      let r = Date.now();
      t.input.lastIOSEnter = r, t.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        t.input.lastIOSEnter == r && (t.someProp("handleKeyDown", (i) => i(t, Nr(13, "Enter"))), t.input.lastIOSEnter = 0);
      }, 200);
    } else
      t.someProp("handleKeyDown", (r) => r(t, n)) || $R(t, n) ? n.preventDefault() : qn(t, "key");
};
ft.keyup = (t, e) => {
  e.keyCode == 16 && (t.input.shiftKey = !1);
};
ft.keypress = (t, e) => {
  let n = e;
  if (hO(t, n) || !n.charCode || n.ctrlKey && !n.altKey || $t && n.metaKey)
    return;
  if (t.someProp("handleKeyPress", (i) => i(t, n))) {
    n.preventDefault();
    return;
  }
  let r = t.state.selection;
  if (!(r instanceof ie) || !r.$from.sameParent(r.$to)) {
    let i = String.fromCharCode(n.charCode);
    !/[\r\n]/.test(i) && !t.someProp("handleTextInput", (o) => o(t, r.$from.pos, r.$to.pos, i)) && t.dispatch(t.state.tr.insertText(i).scrollIntoView()), n.preventDefault();
  }
};
function Jl(t) {
  return { left: t.clientX, top: t.clientY };
}
function WR(t, e) {
  let n = e.x - t.clientX, r = e.y - t.clientY;
  return n * n + r * r < 100;
}
function Rh(t, e, n, r, i) {
  if (r == -1)
    return !1;
  let o = t.state.doc.resolve(r);
  for (let s = o.depth + 1; s > 0; s--)
    if (t.someProp(e, (a) => s > o.depth ? a(t, n, o.nodeAfter, o.before(s), i, !0) : a(t, n, o.node(s), o.before(s), i, !1)))
      return !0;
  return !1;
}
function Fi(t, e, n) {
  t.focused || t.focus();
  let r = t.state.tr.setSelection(e);
  n == "pointer" && r.setMeta("pointer", !0), t.dispatch(r);
}
function HR(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.doc.resolve(e), r = n.nodeAfter;
  return r && r.isAtom && X.isSelectable(r) ? (Fi(t, new X(n), "pointer"), !0) : !1;
}
function UR(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.selection, r, i;
  n instanceof X && (r = n.node);
  let o = t.state.doc.resolve(e);
  for (let s = o.depth + 1; s > 0; s--) {
    let a = s > o.depth ? o.nodeAfter : o.node(s);
    if (X.isSelectable(a)) {
      r && n.$from.depth > 0 && s >= n.$from.depth && o.before(n.$from.depth + 1) == n.$from.pos ? i = o.before(n.$from.depth) : i = o.before(s);
      break;
    }
  }
  return i != null ? (Fi(t, X.create(t.state.doc, i), "pointer"), !0) : !1;
}
function GR(t, e, n, r, i) {
  return Rh(t, "handleClickOn", e, n, r) || t.someProp("handleClick", (o) => o(t, e, r)) || (i ? UR(t, n) : HR(t, n));
}
function qR(t, e, n, r) {
  return Rh(t, "handleDoubleClickOn", e, n, r) || t.someProp("handleDoubleClick", (i) => i(t, e, r));
}
function JR(t, e, n, r) {
  return Rh(t, "handleTripleClickOn", e, n, r) || t.someProp("handleTripleClick", (i) => i(t, e, r)) || KR(t, n, r);
}
function KR(t, e, n) {
  if (n.button != 0)
    return !1;
  let r = t.state.doc;
  if (e == -1)
    return r.inlineContent ? (Fi(t, ie.create(r, 0, r.content.size), "pointer"), !0) : !1;
  let i = r.resolve(e);
  for (let o = i.depth + 1; o > 0; o--) {
    let s = o > i.depth ? i.nodeAfter : i.node(o), a = i.before(o);
    if (s.inlineContent)
      Fi(t, ie.create(r, a + 1, a + 1 + s.content.size), "pointer");
    else if (X.isSelectable(s))
      Fi(t, X.create(r, a), "pointer");
    else
      continue;
    return !0;
  }
}
function Fh(t) {
  return Qa(t);
}
const dO = $t ? "metaKey" : "ctrlKey";
ut.mousedown = (t, e) => {
  let n = e;
  t.input.shiftKey = n.shiftKey;
  let r = Fh(t), i = Date.now(), o = "singleClick";
  i - t.input.lastClick.time < 500 && WR(n, t.input.lastClick) && !n[dO] && (t.input.lastClick.type == "singleClick" ? o = "doubleClick" : t.input.lastClick.type == "doubleClick" && (o = "tripleClick")), t.input.lastClick = { time: i, x: n.clientX, y: n.clientY, type: o };
  let s = t.posAtCoords(Jl(n));
  s && (o == "singleClick" ? (t.input.mouseDown && t.input.mouseDown.done(), t.input.mouseDown = new XR(t, s, n, !!r)) : (o == "doubleClick" ? qR : JR)(t, s.pos, s.inside, n) ? n.preventDefault() : qn(t, "pointer"));
};
class XR {
  constructor(e, n, r, i) {
    this.view = e, this.pos = n, this.event = r, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[dO], this.allowDefault = r.shiftKey;
    let o, s;
    if (n.inside > -1)
      o = e.state.doc.nodeAt(n.inside), s = n.inside;
    else {
      let u = e.state.doc.resolve(n.pos);
      o = u.parent, s = u.depth ? u.before() : 0;
    }
    const a = i ? null : r.target, l = a ? e.docView.nearestDesc(a, !0) : null;
    this.target = l ? l.dom : null;
    let { selection: c } = e.state;
    (r.button == 0 && o.type.spec.draggable && o.type.spec.selectable !== !1 || c instanceof X && c.from <= s && c.to > s) && (this.mightDrag = {
      node: o,
      pos: s,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && Qt && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), qn(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => In(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let n = this.pos;
    this.view.state.doc != this.startDoc && (n = this.view.posAtCoords(Jl(e))), this.updateAllowDefault(e), this.allowDefault || !n ? qn(this.view, "pointer") : GR(this.view, n.pos, n.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    ct && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    tt && !this.view.state.selection.visible && Math.min(Math.abs(n.pos - this.view.state.selection.from), Math.abs(n.pos - this.view.state.selection.to)) <= 2) ? (Fi(this.view, ne.near(this.view.state.doc.resolve(n.pos)), "pointer"), e.preventDefault()) : qn(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), qn(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
ut.touchstart = (t) => {
  t.input.lastTouch = Date.now(), Fh(t), qn(t, "pointer");
};
ut.touchmove = (t) => {
  t.input.lastTouch = Date.now(), qn(t, "pointer");
};
ut.contextmenu = (t) => Fh(t);
function hO(t, e) {
  return t.composing ? !0 : ct && Math.abs(e.timeStamp - t.input.compositionEndedAt) < 500 ? (t.input.compositionEndedAt = -2e8, !0) : !1;
}
const YR = Kt ? 5e3 : -1;
ft.compositionstart = ft.compositionupdate = (t) => {
  if (!t.composing) {
    t.domObserver.flush();
    let { state: e } = t, n = e.selection.$from;
    if (e.selection.empty && (e.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1)))
      t.markCursor = t.state.storedMarks || n.marks(), Qa(t, !0), t.markCursor = null;
    else if (Qa(t), Qt && e.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
      let r = t.domSelectionRange();
      for (let i = r.focusNode, o = r.focusOffset; i && i.nodeType == 1 && o != 0; ) {
        let s = o < 0 ? i.lastChild : i.childNodes[o - 1];
        if (!s)
          break;
        if (s.nodeType == 3) {
          t.domSelection().collapse(s, s.nodeValue.length);
          break;
        } else
          i = s, o = -1;
      }
    }
    t.input.composing = !0;
  }
  mO(t, YR);
};
ft.compositionend = (t, e) => {
  t.composing && (t.input.composing = !1, t.input.compositionEndedAt = e.timeStamp, t.input.compositionPendingChanges = t.domObserver.pendingRecords().length ? t.input.compositionID : 0, t.input.compositionPendingChanges && Promise.resolve().then(() => t.domObserver.flush()), t.input.compositionID++, mO(t, 20));
};
function mO(t, e) {
  clearTimeout(t.input.composingTimeout), e > -1 && (t.input.composingTimeout = setTimeout(() => Qa(t), e));
}
function vO(t) {
  for (t.composing && (t.input.composing = !1, t.input.compositionEndedAt = ZR()); t.input.compositionNodes.length > 0; )
    t.input.compositionNodes.pop().markParentsDirty();
}
function ZR() {
  let t = document.createEvent("Event");
  return t.initEvent("event", !0, !0), t.timeStamp;
}
function Qa(t, e = !1) {
  if (!(Kt && t.domObserver.flushingSoon >= 0)) {
    if (t.domObserver.forceFlush(), vO(t), e || t.docView && t.docView.dirty) {
      let n = Ph(t);
      return n && !n.eq(t.state.selection) ? t.dispatch(t.state.tr.setSelection(n)) : t.updateState(t.state), !0;
    }
    return !1;
  }
}
function QR(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.dom.parentNode.appendChild(document.createElement("div"));
  n.appendChild(e), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), i = document.createRange();
  i.selectNodeContents(e), t.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
    n.parentNode && n.parentNode.removeChild(n), t.focus();
  }, 50);
}
const Hi = yt && Zn < 15 || Wi && XA < 604;
ut.copy = ft.cut = (t, e) => {
  let n = e, r = t.state.selection, i = n.type == "cut";
  if (r.empty)
    return;
  let o = Hi ? null : n.clipboardData, s = r.content(), { dom: a, text: l } = sO(t, s);
  o ? (n.preventDefault(), o.clearData(), o.setData("text/html", a.innerHTML), o.setData("text/plain", l)) : QR(t, a), i && t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function eF(t) {
  return t.openStart == 0 && t.openEnd == 0 && t.content.childCount == 1 ? t.content.firstChild : null;
}
function tF(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.input.shiftKey || t.state.selection.$from.parent.type.spec.code, r = t.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
  n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let i = t.input.shiftKey && t.input.lastKeyCode != 45;
  setTimeout(() => {
    t.focus(), r.parentNode && r.parentNode.removeChild(r), n ? Xo(t, r.value, null, i, e) : Xo(t, r.textContent, r.innerHTML, i, e);
  }, 50);
}
function Xo(t, e, n, r, i) {
  let o = aO(t, e, n, r, t.state.selection.$from);
  if (t.someProp("handlePaste", (l) => l(t, i, o || L.empty)))
    return !0;
  if (!o)
    return !1;
  let s = eF(o), a = s ? t.state.tr.replaceSelectionWith(s, r) : t.state.tr.replaceSelection(o);
  return t.dispatch(a.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
ft.paste = (t, e) => {
  let n = e;
  if (t.composing && !Kt)
    return;
  let r = Hi ? null : n.clipboardData, i = t.input.shiftKey && t.input.lastKeyCode != 45;
  r && Xo(t, r.getData("text/plain"), r.getData("text/html"), i, n) ? n.preventDefault() : tF(t, n);
};
class nF {
  constructor(e, n) {
    this.slice = e, this.move = n;
  }
}
const gO = $t ? "altKey" : "ctrlKey";
ut.dragstart = (t, e) => {
  let n = e, r = t.input.mouseDown;
  if (r && r.done(), !n.dataTransfer)
    return;
  let i = t.state.selection, o = i.empty ? null : t.posAtCoords(Jl(n));
  if (!(o && o.pos >= i.from && o.pos <= (i instanceof X ? i.to - 1 : i.to))) {
    if (r && r.mightDrag)
      t.dispatch(t.state.tr.setSelection(X.create(t.state.doc, r.mightDrag.pos)));
    else if (n.target && n.target.nodeType == 1) {
      let c = t.docView.nearestDesc(n.target, !0);
      c && c.node.type.spec.draggable && c != t.docView && t.dispatch(t.state.tr.setSelection(X.create(t.state.doc, c.posBefore)));
    }
  }
  let s = t.state.selection.content(), { dom: a, text: l } = sO(t, s);
  n.dataTransfer.clearData(), n.dataTransfer.setData(Hi ? "Text" : "text/html", a.innerHTML), n.dataTransfer.effectAllowed = "copyMove", Hi || n.dataTransfer.setData("text/plain", l), t.dragging = new nF(s, !n[gO]);
};
ut.dragend = (t) => {
  let e = t.dragging;
  window.setTimeout(() => {
    t.dragging == e && (t.dragging = null);
  }, 50);
};
ft.dragover = ft.dragenter = (t, e) => e.preventDefault();
ft.drop = (t, e) => {
  let n = e, r = t.dragging;
  if (t.dragging = null, !n.dataTransfer)
    return;
  let i = t.posAtCoords(Jl(n));
  if (!i)
    return;
  let o = t.state.doc.resolve(i.pos), s = r && r.slice;
  s ? t.someProp("transformPasted", (h) => {
    s = h(s, t);
  }) : s = aO(t, n.dataTransfer.getData(Hi ? "Text" : "text/plain"), Hi ? null : n.dataTransfer.getData("text/html"), !1, o);
  let a = !!(r && !n[gO]);
  if (t.someProp("handleDrop", (h) => h(t, n, s || L.empty, a))) {
    n.preventDefault();
    return;
  }
  if (!s)
    return;
  n.preventDefault();
  let l = s ? IA(t.state.doc, o.pos, s) : o.pos;
  l == null && (l = o.pos);
  let c = t.state.tr;
  a && c.deleteSelection();
  let u = c.mapping.map(l), f = s.openStart == 0 && s.openEnd == 0 && s.content.childCount == 1, p = c.doc;
  if (f ? c.replaceRangeWith(u, u, s.content.firstChild) : c.replaceRange(u, u, s), c.doc.eq(p))
    return;
  let d = c.doc.resolve(u);
  if (f && X.isSelectable(s.content.firstChild) && d.nodeAfter && d.nodeAfter.sameMarkup(s.content.firstChild))
    c.setSelection(new X(d));
  else {
    let h = c.mapping.map(l);
    c.mapping.maps[c.mapping.maps.length - 1].forEach((m, v, y, C) => h = C), c.setSelection(Dh(t, d, c.doc.resolve(h)));
  }
  t.focus(), t.dispatch(c.setMeta("uiEvent", "drop"));
};
ut.focus = (t) => {
  t.input.lastFocus = Date.now(), t.focused || (t.domObserver.stop(), t.dom.classList.add("ProseMirror-focused"), t.domObserver.start(), t.focused = !0, setTimeout(() => {
    t.docView && t.hasFocus() && !t.domObserver.currentSelection.eq(t.domSelectionRange()) && In(t);
  }, 20));
};
ut.blur = (t, e) => {
  let n = e;
  t.focused && (t.domObserver.stop(), t.dom.classList.remove("ProseMirror-focused"), t.domObserver.start(), n.relatedTarget && t.dom.contains(n.relatedTarget) && t.domObserver.currentSelection.clear(), t.focused = !1);
};
ut.beforeinput = (t, e) => {
  if (tt && Kt && e.inputType == "deleteContentBackward") {
    t.domObserver.flushSoon();
    let { domChangeCount: r } = t.input;
    setTimeout(() => {
      if (t.input.domChangeCount != r || (t.dom.blur(), t.focus(), t.someProp("handleKeyDown", (o) => o(t, Nr(8, "Backspace")))))
        return;
      let { $cursor: i } = t.state.selection;
      i && i.pos > 0 && t.dispatch(t.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
};
for (let t in ft)
  ut[t] = ft[t];
function Yo(t, e) {
  if (t == e)
    return !0;
  for (let n in t)
    if (t[n] !== e[n])
      return !1;
  for (let n in e)
    if (!(n in t))
      return !1;
  return !0;
}
class el {
  constructor(e, n) {
    this.toDOM = e, this.spec = n || Lr, this.side = this.spec.side || 0;
  }
  map(e, n, r, i) {
    let { pos: o, deleted: s } = e.mapResult(n.from + i, this.side < 0 ? -1 : 1);
    return s ? null : new Et(o - r, o - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof el && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Yo(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class er {
  constructor(e, n) {
    this.attrs = e, this.spec = n || Lr;
  }
  map(e, n, r, i) {
    let o = e.map(n.from + i, this.spec.inclusiveStart ? -1 : 1) - r, s = e.map(n.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
    return o >= s ? null : new Et(o, s, this);
  }
  valid(e, n) {
    return n.from < n.to;
  }
  eq(e) {
    return this == e || e instanceof er && Yo(this.attrs, e.attrs) && Yo(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof er;
  }
  destroy() {
  }
}
class Lh {
  constructor(e, n) {
    this.attrs = e, this.spec = n || Lr;
  }
  map(e, n, r, i) {
    let o = e.mapResult(n.from + i, 1);
    if (o.deleted)
      return null;
    let s = e.mapResult(n.to + i, -1);
    return s.deleted || s.pos <= o.pos ? null : new Et(o.pos - r, s.pos - r, this);
  }
  valid(e, n) {
    let { index: r, offset: i } = e.content.findIndex(n.from), o;
    return i == n.from && !(o = e.child(r)).isText && i + o.nodeSize == n.to;
  }
  eq(e) {
    return this == e || e instanceof Lh && Yo(this.attrs, e.attrs) && Yo(this.spec, e.spec);
  }
  destroy() {
  }
}
class Et {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.from = e, this.to = n, this.type = r;
  }
  /**
  @internal
  */
  copy(e, n) {
    return new Et(e, n, this.type);
  }
  /**
  @internal
  */
  eq(e, n = 0) {
    return this.type.eq(e.type) && this.from + n == e.from && this.to + n == e.to;
  }
  /**
  @internal
  */
  map(e, n, r) {
    return this.type.map(e, this, n, r);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, n, r) {
    return new Et(e, e, new el(n, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, n, r, i) {
    return new Et(e, n, new er(r, i));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, n, r, i) {
    return new Et(e, n, new Lh(r, i));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof er;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof el;
  }
}
const Ei = [], Lr = {};
class Me {
  /**
  @internal
  */
  constructor(e, n) {
    this.local = e.length ? e : Ei, this.children = n.length ? n : Ei;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, n) {
    return n.length ? tl(n, e, 0, Lr) : Ze;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, n, r) {
    let i = [];
    return this.findInner(e ?? 0, n ?? 1e9, i, 0, r), i;
  }
  findInner(e, n, r, i, o) {
    for (let s = 0; s < this.local.length; s++) {
      let a = this.local[s];
      a.from <= n && a.to >= e && (!o || o(a.spec)) && r.push(a.copy(a.from + i, a.to + i));
    }
    for (let s = 0; s < this.children.length; s += 3)
      if (this.children[s] < n && this.children[s + 1] > e) {
        let a = this.children[s] + 1;
        this.children[s + 2].findInner(e - a, n - a, r, i + a, o);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, n, r) {
    return this == Ze || e.maps.length == 0 ? this : this.mapInner(e, n, 0, 0, r || Lr);
  }
  /**
  @internal
  */
  mapInner(e, n, r, i, o) {
    let s;
    for (let a = 0; a < this.local.length; a++) {
      let l = this.local[a].map(e, r, i);
      l && l.type.valid(n, l) ? (s || (s = [])).push(l) : o.onRemove && o.onRemove(this.local[a].spec);
    }
    return this.children.length ? rF(this.children, s || [], e, n, r, i, o) : s ? new Me(s.sort(jr), Ei) : Ze;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, n) {
    return n.length ? this == Ze ? Me.create(e, n) : this.addInner(e, n, 0) : this;
  }
  addInner(e, n, r) {
    let i, o = 0;
    e.forEach((a, l) => {
      let c = l + r, u;
      if (u = bO(n, a, c)) {
        for (i || (i = this.children.slice()); o < i.length && i[o] < l; )
          o += 3;
        i[o] == l ? i[o + 2] = i[o + 2].addInner(a, u, c + 1) : i.splice(o, 0, l, l + a.nodeSize, tl(u, a, c + 1, Lr)), o += 3;
      }
    });
    let s = yO(o ? wO(n) : n, -r);
    for (let a = 0; a < s.length; a++)
      s[a].type.valid(e, s[a]) || s.splice(a--, 1);
    return new Me(s.length ? this.local.concat(s).sort(jr) : this.local, i || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == Ze ? this : this.removeInner(e, 0);
  }
  removeInner(e, n) {
    let r = this.children, i = this.local;
    for (let o = 0; o < r.length; o += 3) {
      let s, a = r[o] + n, l = r[o + 1] + n;
      for (let u = 0, f; u < e.length; u++)
        (f = e[u]) && f.from > a && f.to < l && (e[u] = null, (s || (s = [])).push(f));
      if (!s)
        continue;
      r == this.children && (r = this.children.slice());
      let c = r[o + 2].removeInner(s, a + 1);
      c != Ze ? r[o + 2] = c : (r.splice(o, 3), o -= 3);
    }
    if (i.length) {
      for (let o = 0, s; o < e.length; o++)
        if (s = e[o])
          for (let a = 0; a < i.length; a++)
            i[a].eq(s, n) && (i == this.local && (i = this.local.slice()), i.splice(a--, 1));
    }
    return r == this.children && i == this.local ? this : i.length || r.length ? new Me(i, r) : Ze;
  }
  /**
  @internal
  */
  forChild(e, n) {
    if (this == Ze)
      return this;
    if (n.isLeaf)
      return Me.empty;
    let r, i;
    for (let a = 0; a < this.children.length; a += 3)
      if (this.children[a] >= e) {
        this.children[a] == e && (r = this.children[a + 2]);
        break;
      }
    let o = e + 1, s = o + n.content.size;
    for (let a = 0; a < this.local.length; a++) {
      let l = this.local[a];
      if (l.from < s && l.to > o && l.type instanceof er) {
        let c = Math.max(o, l.from) - o, u = Math.min(s, l.to) - o;
        c < u && (i || (i = [])).push(l.copy(c, u));
      }
    }
    if (i) {
      let a = new Me(i.sort(jr), Ei);
      return r ? new Wn([a, r]) : a;
    }
    return r || Ze;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof Me) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let n = 0; n < this.local.length; n++)
      if (!this.local[n].eq(e.local[n]))
        return !1;
    for (let n = 0; n < this.children.length; n += 3)
      if (this.children[n] != e.children[n] || this.children[n + 1] != e.children[n + 1] || !this.children[n + 2].eq(e.children[n + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return jh(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == Ze)
      return Ei;
    if (e.inlineContent || !this.local.some(er.is))
      return this.local;
    let n = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof er || n.push(this.local[r]);
    return n;
  }
}
Me.empty = new Me([], []);
Me.removeOverlap = jh;
const Ze = Me.empty;
class Wn {
  constructor(e) {
    this.members = e;
  }
  map(e, n) {
    const r = this.members.map((i) => i.map(e, n, Lr));
    return Wn.from(r);
  }
  forChild(e, n) {
    if (n.isLeaf)
      return Me.empty;
    let r = [];
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].forChild(e, n);
      o != Ze && (o instanceof Wn ? r = r.concat(o.members) : r.push(o));
    }
    return Wn.from(r);
  }
  eq(e) {
    if (!(e instanceof Wn) || e.members.length != this.members.length)
      return !1;
    for (let n = 0; n < this.members.length; n++)
      if (!this.members[n].eq(e.members[n]))
        return !1;
    return !0;
  }
  locals(e) {
    let n, r = !0;
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].localsInner(e);
      if (o.length)
        if (!n)
          n = o;
        else {
          r && (n = n.slice(), r = !1);
          for (let s = 0; s < o.length; s++)
            n.push(o[s]);
        }
    }
    return n ? jh(r ? n : n.sort(jr)) : Ei;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return Ze;
      case 1:
        return e[0];
      default:
        return new Wn(e.every((n) => n instanceof Me) ? e : e.reduce((n, r) => n.concat(r instanceof Me ? r : r.members), []));
    }
  }
}
function rF(t, e, n, r, i, o, s) {
  let a = t.slice();
  for (let c = 0, u = o; c < n.maps.length; c++) {
    let f = 0;
    n.maps[c].forEach((p, d, h, m) => {
      let v = m - h - (d - p);
      for (let y = 0; y < a.length; y += 3) {
        let C = a[y + 1];
        if (C < 0 || p > C + u - f)
          continue;
        let O = a[y] + u - f;
        d >= O ? a[y + 1] = p <= O ? -2 : -1 : h >= i && v && (a[y] += v, a[y + 1] += v);
      }
      f += v;
    }), u = n.maps[c].map(u, -1);
  }
  let l = !1;
  for (let c = 0; c < a.length; c += 3)
    if (a[c + 1] < 0) {
      if (a[c + 1] == -2) {
        l = !0, a[c + 1] = -1;
        continue;
      }
      let u = n.map(t[c] + o), f = u - i;
      if (f < 0 || f >= r.content.size) {
        l = !0;
        continue;
      }
      let p = n.map(t[c + 1] + o, -1), d = p - i, { index: h, offset: m } = r.content.findIndex(f), v = r.maybeChild(h);
      if (v && m == f && m + v.nodeSize == d) {
        let y = a[c + 2].mapInner(n, v, u + 1, t[c] + o + 1, s);
        y != Ze ? (a[c] = f, a[c + 1] = d, a[c + 2] = y) : (a[c + 1] = -2, l = !0);
      } else
        l = !0;
    }
  if (l) {
    let c = iF(a, t, e, n, i, o, s), u = tl(c, r, 0, s);
    e = u.local;
    for (let f = 0; f < a.length; f += 3)
      a[f + 1] < 0 && (a.splice(f, 3), f -= 3);
    for (let f = 0, p = 0; f < u.children.length; f += 3) {
      let d = u.children[f];
      for (; p < a.length && a[p] < d; )
        p += 3;
      a.splice(p, 0, u.children[f], u.children[f + 1], u.children[f + 2]);
    }
  }
  return new Me(e.sort(jr), a);
}
function yO(t, e) {
  if (!e || !t.length)
    return t;
  let n = [];
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    n.push(new Et(i.from + e, i.to + e, i.type));
  }
  return n;
}
function iF(t, e, n, r, i, o, s) {
  function a(l, c) {
    for (let u = 0; u < l.local.length; u++) {
      let f = l.local[u].map(r, i, c);
      f ? n.push(f) : s.onRemove && s.onRemove(l.local[u].spec);
    }
    for (let u = 0; u < l.children.length; u += 3)
      a(l.children[u + 2], l.children[u] + c + 1);
  }
  for (let l = 0; l < t.length; l += 3)
    t[l + 1] == -1 && a(t[l + 2], e[l] + o + 1);
  return n;
}
function bO(t, e, n) {
  if (e.isLeaf)
    return null;
  let r = n + e.nodeSize, i = null;
  for (let o = 0, s; o < t.length; o++)
    (s = t[o]) && s.from > n && s.to < r && ((i || (i = [])).push(s), t[o] = null);
  return i;
}
function wO(t) {
  let e = [];
  for (let n = 0; n < t.length; n++)
    t[n] != null && e.push(t[n]);
  return e;
}
function tl(t, e, n, r) {
  let i = [], o = !1;
  e.forEach((a, l) => {
    let c = bO(t, a, l + n);
    if (c) {
      o = !0;
      let u = tl(c, a, n + l + 1, r);
      u != Ze && i.push(l, l + a.nodeSize, u);
    }
  });
  let s = yO(o ? wO(t) : t, -n).sort(jr);
  for (let a = 0; a < s.length; a++)
    s[a].type.valid(e, s[a]) || (r.onRemove && r.onRemove(s[a].spec), s.splice(a--, 1));
  return s.length || i.length ? new Me(s, i) : Ze;
}
function jr(t, e) {
  return t.from - e.from || t.to - e.to;
}
function jh(t) {
  let e = t;
  for (let n = 0; n < e.length - 1; n++) {
    let r = e[n];
    if (r.from != r.to)
      for (let i = n + 1; i < e.length; i++) {
        let o = e[i];
        if (o.from == r.from) {
          o.to != r.to && (e == t && (e = t.slice()), e[i] = o.copy(o.from, r.to), D0(e, i + 1, o.copy(r.to, o.to)));
          continue;
        } else {
          o.from < r.to && (e == t && (e = t.slice()), e[n] = r.copy(r.from, o.from), D0(e, i, r.copy(o.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function D0(t, e, n) {
  for (; e < t.length && jr(n, t[e]) > 0; )
    e++;
  t.splice(e, 0, n);
}
function Df(t) {
  let e = [];
  return t.someProp("decorations", (n) => {
    let r = n(t.state);
    r && r != Ze && e.push(r);
  }), t.cursorWrapper && e.push(Me.create(t.state.doc, [t.cursorWrapper.deco])), Wn.from(e);
}
const oF = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, sF = yt && Zn <= 11;
class aF {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class lF {
  constructor(e, n) {
    this.view = e, this.handleDOMChange = n, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new aF(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let i = 0; i < r.length; i++)
        this.queue.push(r[i]);
      yt && Zn <= 11 && r.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), sF && (this.onCharData = (r) => {
      this.queue.push({ target: r.target, type: "characterData", oldValue: r.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1, this.flush();
    }, 20));
  }
  forceFlush() {
    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
  }
  start() {
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, oF)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let n = 0; n < e.length; n++)
          this.queue.push(e[n]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
  }
  onSelectionChange() {
    if (_0(this.view)) {
      if (this.suppressingSelectionUpdates)
        return In(this.view);
      if (yt && Zn <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && Gr(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode)
      return !0;
    let n = /* @__PURE__ */ new Set(), r;
    for (let o = e.focusNode; o; o = Ko(o))
      n.add(o);
    for (let o = e.anchorNode; o; o = Ko(o))
      if (n.has(o)) {
        r = o;
        break;
      }
    let i = r && this.view.docView.nearestDesc(r);
    if (i && i.ignoreMutation({
      type: "selection",
      target: r.nodeType == 3 ? r.parentNode : r
    }))
      return this.setCurSelection(), !0;
  }
  pendingRecords() {
    if (this.observer)
      for (let e of this.observer.takeRecords())
        this.queue.push(e);
    return this.queue;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let n = this.pendingRecords();
    n.length && (this.queue = []);
    let r = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && _0(e) && !this.ignoreSelectionChange(r), o = -1, s = -1, a = !1, l = [];
    if (e.editable)
      for (let u = 0; u < n.length; u++) {
        let f = this.registerMutation(n[u], l);
        f && (o = o < 0 ? f.from : Math.min(f.from, o), s = s < 0 ? f.to : Math.max(f.to, s), f.typeOver && (a = !0));
      }
    if (Qt && l.length > 1) {
      let u = l.filter((f) => f.nodeName == "BR");
      if (u.length == 2) {
        let f = u[0], p = u[1];
        f.parentNode && f.parentNode.parentNode == p.parentNode ? p.remove() : f.remove();
      }
    }
    let c = null;
    o < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && Ul(r) && (c = Ph(e)) && c.eq(ne.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, In(e), this.currentSelection.set(r), e.scrollToSelection()) : (o > -1 || i) && (o > -1 && (e.docView.markDirty(o, s), cF(e)), this.handleDOMChange(o, s, a, l), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || In(e), this.currentSelection.set(r));
  }
  registerMutation(e, n) {
    if (n.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let u = 0; u < e.addedNodes.length; u++)
        n.push(e.addedNodes[u]);
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let i = e.previousSibling, o = e.nextSibling;
      if (yt && Zn <= 11 && e.addedNodes.length)
        for (let u = 0; u < e.addedNodes.length; u++) {
          let { previousSibling: f, nextSibling: p } = e.addedNodes[u];
          (!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (i = f), (!p || Array.prototype.indexOf.call(e.addedNodes, p) < 0) && (o = p);
        }
      let s = i && i.parentNode == e.target ? lt(i) + 1 : 0, a = r.localPosFromDOM(e.target, s, -1), l = o && o.parentNode == e.target ? lt(o) : e.target.childNodes.length, c = r.localPosFromDOM(e.target, l, 1);
      return { from: a, to: c };
    } else
      return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : {
        from: r.posAtStart,
        to: r.posAtEnd,
        // An event was generated for a text change that didn't change
        // any text. Mark the dom change to fall back to assuming the
        // selection was typed over with an identical value if it can't
        // find another change.
        typeOver: e.target.nodeValue == e.oldValue
      };
  }
}
let A0 = /* @__PURE__ */ new WeakMap(), R0 = !1;
function cF(t) {
  if (!A0.has(t) && (A0.set(t, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(t.dom).whiteSpace) !== -1)) {
    if (t.requiresGeckoHackNode = Qt, R0)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), R0 = !0;
  }
}
function uF(t) {
  let e;
  function n(l) {
    l.preventDefault(), l.stopImmediatePropagation(), e = l.getTargetRanges()[0];
  }
  t.dom.addEventListener("beforeinput", n, !0), document.execCommand("indent"), t.dom.removeEventListener("beforeinput", n, !0);
  let r = e.startContainer, i = e.startOffset, o = e.endContainer, s = e.endOffset, a = t.domAtPos(t.state.selection.anchor);
  return Gr(a.node, a.offset, o, s) && ([r, i, o, s] = [o, s, r, i]), { anchorNode: r, anchorOffset: i, focusNode: o, focusOffset: s };
}
function fF(t, e, n) {
  let { node: r, fromOffset: i, toOffset: o, from: s, to: a } = t.docView.parseRange(e, n), l = t.domSelectionRange(), c, u = l.anchorNode;
  if (u && t.dom.contains(u.nodeType == 1 ? u : u.parentNode) && (c = [{ node: u, offset: l.anchorOffset }], Ul(l) || c.push({ node: l.focusNode, offset: l.focusOffset })), tt && t.input.lastKeyCode === 8)
    for (let v = o; v > i; v--) {
      let y = r.childNodes[v - 1], C = y.pmViewDesc;
      if (y.nodeName == "BR" && !C) {
        o = v;
        break;
      }
      if (!C || C.size)
        break;
    }
  let f = t.state.doc, p = t.someProp("domParser") || Bi.fromSchema(t.state.schema), d = f.resolve(s), h = null, m = p.parse(r, {
    topNode: d.parent,
    topMatch: d.parent.contentMatchAt(d.index()),
    topOpen: !0,
    from: i,
    to: o,
    preserveWhitespace: d.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: c,
    ruleFromNode: pF,
    context: d
  });
  if (c && c[0].pos != null) {
    let v = c[0].pos, y = c[1] && c[1].pos;
    y == null && (y = v), h = { anchor: v + s, head: y + s };
  }
  return { doc: m, sel: h, from: s, to: a };
}
function pF(t) {
  let e = t.pmViewDesc;
  if (e)
    return e.parseRule();
  if (t.nodeName == "BR" && t.parentNode) {
    if (ct && /^(ul|ol)$/i.test(t.parentNode.nodeName)) {
      let n = document.createElement("div");
      return n.appendChild(document.createElement("li")), { skip: n };
    } else if (t.parentNode.lastChild == t || ct && /^(tr|table)$/i.test(t.parentNode.nodeName))
      return { ignore: !0 };
  } else if (t.nodeName == "IMG" && t.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const dF = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function hF(t, e, n, r, i) {
  let o = t.input.compositionPendingChanges || (t.composing ? t.input.compositionID : 0);
  if (t.input.compositionPendingChanges = 0, e < 0) {
    let j = t.input.lastSelectionTime > Date.now() - 50 ? t.input.lastSelectionOrigin : null, Q = Ph(t, j);
    if (Q && !t.state.selection.eq(Q)) {
      if (tt && Kt && t.input.lastKeyCode === 13 && Date.now() - 100 < t.input.lastKeyCodeTime && t.someProp("handleKeyDown", (ke) => ke(t, Nr(13, "Enter"))))
        return;
      let ee = t.state.tr.setSelection(Q);
      j == "pointer" ? ee.setMeta("pointer", !0) : j == "key" && ee.scrollIntoView(), o && ee.setMeta("composition", o), t.dispatch(ee);
    }
    return;
  }
  let s = t.state.doc.resolve(e), a = s.sharedDepth(n);
  e = s.before(a + 1), n = t.state.doc.resolve(n).after(a + 1);
  let l = t.state.selection, c = fF(t, e, n), u = t.state.doc, f = u.slice(c.from, c.to), p, d;
  t.input.lastKeyCode === 8 && Date.now() - 100 < t.input.lastKeyCodeTime ? (p = t.state.selection.to, d = "end") : (p = t.state.selection.from, d = "start"), t.input.lastKeyCode = null;
  let h = gF(f.content, c.doc.content, c.from, p, d);
  if ((Wi && t.input.lastIOSEnter > Date.now() - 225 || Kt) && i.some((j) => j.nodeType == 1 && !dF.test(j.nodeName)) && (!h || h.endA >= h.endB) && t.someProp("handleKeyDown", (j) => j(t, Nr(13, "Enter")))) {
    t.input.lastIOSEnter = 0;
    return;
  }
  if (!h)
    if (r && l instanceof ie && !l.empty && l.$head.sameParent(l.$anchor) && !t.composing && !(c.sel && c.sel.anchor != c.sel.head))
      h = { start: l.from, endA: l.to, endB: l.to };
    else {
      if (c.sel) {
        let j = F0(t, t.state.doc, c.sel);
        if (j && !j.eq(t.state.selection)) {
          let Q = t.state.tr.setSelection(j);
          o && Q.setMeta("composition", o), t.dispatch(Q);
        }
      }
      return;
    }
  if (tt && t.cursorWrapper && c.sel && c.sel.anchor == t.cursorWrapper.deco.from && c.sel.head == c.sel.anchor) {
    let j = h.endB - h.start;
    c.sel = { anchor: c.sel.anchor + j, head: c.sel.anchor + j };
  }
  t.input.domChangeCount++, t.state.selection.from < t.state.selection.to && h.start == h.endB && t.state.selection instanceof ie && (h.start > t.state.selection.from && h.start <= t.state.selection.from + 2 && t.state.selection.from >= c.from ? h.start = t.state.selection.from : h.endA < t.state.selection.to && h.endA >= t.state.selection.to - 2 && t.state.selection.to <= c.to && (h.endB += t.state.selection.to - h.endA, h.endA = t.state.selection.to)), yt && Zn <= 11 && h.endB == h.start + 1 && h.endA == h.start && h.start > c.from && c.doc.textBetween(h.start - c.from - 1, h.start - c.from + 1) == "  " && (h.start--, h.endA--, h.endB--);
  let m = c.doc.resolveNoCache(h.start - c.from), v = c.doc.resolveNoCache(h.endB - c.from), y = u.resolve(h.start), C = m.sameParent(v) && m.parent.inlineContent && y.end() >= h.endA, O;
  if ((Wi && t.input.lastIOSEnter > Date.now() - 225 && (!C || i.some((j) => j.nodeName == "DIV" || j.nodeName == "P")) || !C && m.pos < c.doc.content.size && !m.sameParent(v) && (O = ne.findFrom(c.doc.resolve(m.pos + 1), 1, !0)) && O.head == v.pos) && t.someProp("handleKeyDown", (j) => j(t, Nr(13, "Enter")))) {
    t.input.lastIOSEnter = 0;
    return;
  }
  if (t.state.selection.anchor > h.start && vF(u, h.start, h.endA, m, v) && t.someProp("handleKeyDown", (j) => j(t, Nr(8, "Backspace")))) {
    Kt && tt && t.domObserver.suppressSelectionUpdates();
    return;
  }
  tt && Kt && h.endB == h.start && (t.input.lastAndroidDelete = Date.now()), Kt && !C && m.start() != v.start() && v.parentOffset == 0 && m.depth == v.depth && c.sel && c.sel.anchor == c.sel.head && c.sel.head == h.endA && (h.endB -= 2, v = c.doc.resolveNoCache(h.endB - c.from), setTimeout(() => {
    t.someProp("handleKeyDown", function(j) {
      return j(t, Nr(13, "Enter"));
    });
  }, 20));
  let N = h.start, T = h.endA, B, b, re;
  if (C) {
    if (m.pos == v.pos)
      yt && Zn <= 11 && m.parentOffset == 0 && (t.domObserver.suppressSelectionUpdates(), setTimeout(() => In(t), 20)), B = t.state.tr.delete(N, T), b = u.resolve(h.start).marksAcross(u.resolve(h.endA));
    else if (
      // Adding or removing a mark
      h.endA == h.endB && (re = mF(m.parent.content.cut(m.parentOffset, v.parentOffset), y.parent.content.cut(y.parentOffset, h.endA - y.start())))
    )
      B = t.state.tr, re.type == "add" ? B.addMark(N, T, re.mark) : B.removeMark(N, T, re.mark);
    else if (m.parent.child(m.index()).isText && m.index() == v.index() - (v.textOffset ? 0 : 1)) {
      let j = m.parent.textBetween(m.parentOffset, v.parentOffset);
      if (t.someProp("handleTextInput", (Q) => Q(t, N, T, j)))
        return;
      B = t.state.tr.insertText(j, N, T);
    }
  }
  if (B || (B = t.state.tr.replace(N, T, c.doc.slice(h.start - c.from, h.endB - c.from))), c.sel) {
    let j = F0(t, B.doc, c.sel);
    j && !(tt && Kt && t.composing && j.empty && (h.start != h.endB || t.input.lastAndroidDelete < Date.now() - 100) && (j.head == N || j.head == B.mapping.map(T) - 1) || yt && j.empty && j.head == N) && B.setSelection(j);
  }
  b && B.ensureMarks(b), o && B.setMeta("composition", o), t.dispatch(B.scrollIntoView());
}
function F0(t, e, n) {
  return Math.max(n.anchor, n.head) > e.content.size ? null : Dh(t, e.resolve(n.anchor), e.resolve(n.head));
}
function mF(t, e) {
  let n = t.firstChild.marks, r = e.firstChild.marks, i = n, o = r, s, a, l;
  for (let u = 0; u < r.length; u++)
    i = r[u].removeFromSet(i);
  for (let u = 0; u < n.length; u++)
    o = n[u].removeFromSet(o);
  if (i.length == 1 && o.length == 0)
    a = i[0], s = "add", l = (u) => u.mark(a.addToSet(u.marks));
  else if (i.length == 0 && o.length == 1)
    a = o[0], s = "remove", l = (u) => u.mark(a.removeFromSet(u.marks));
  else
    return null;
  let c = [];
  for (let u = 0; u < e.childCount; u++)
    c.push(l(e.child(u)));
  if (I.from(c).eq(t))
    return { mark: a, type: s };
}
function vF(t, e, n, r, i) {
  if (!r.parent.isTextblock || // The content must have shrunk
  n - e <= i.pos - r.pos || // newEnd must point directly at or after the end of the block that newStart points into
  Af(r, !0, !1) < i.pos)
    return !1;
  let o = t.resolve(e);
  if (o.parentOffset < o.parent.content.size || !o.parent.isTextblock)
    return !1;
  let s = t.resolve(Af(o, !0, !0));
  return !s.parent.isTextblock || s.pos > n || Af(s, !0, !1) < n ? !1 : r.parent.content.cut(r.parentOffset).eq(s.parent.content);
}
function Af(t, e, n) {
  let r = t.depth, i = e ? t.end() : t.pos;
  for (; r > 0 && (e || t.indexAfter(r) == t.node(r).childCount); )
    r--, i++, e = !1;
  if (n) {
    let o = t.node(r).maybeChild(t.indexAfter(r));
    for (; o && !o.isLeaf; )
      o = o.firstChild, i++;
  }
  return i;
}
function gF(t, e, n, r, i) {
  let o = t.findDiffStart(e, n);
  if (o == null)
    return null;
  let { a: s, b: a } = t.findDiffEnd(e, n + t.size, n + e.size);
  if (i == "end") {
    let l = Math.max(0, o - Math.min(s, a));
    r -= s + l - o;
  }
  if (s < o && t.size < e.size) {
    let l = r <= o && r >= s ? o - r : 0;
    o -= l, a = o + (a - s), s = o;
  } else if (a < o) {
    let l = r <= o && r >= a ? o - r : 0;
    o -= l, s = o + (s - a), a = o;
  }
  return { start: o, endA: s, endB: a };
}
class yF {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, n) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new LR(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = n, this.state = n.state, this.directPlugins = n.plugins || [], this.directPlugins.forEach(V0), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = B0(this), j0(this), this.nodeViews = z0(this), this.docView = w0(this.state.doc, L0(this), Df(this), this.dom, this), this.domObserver = new lF(this, (r, i, o, s) => hF(this, r, i, o, s)), this.domObserver.start(), jR(this), this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let n in e)
        this._props[n] = e[n];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && id(this);
    let n = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(V0), this.directPlugins = e.plugins), this.updateStateInner(e.state, n);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(e) {
    let n = {};
    for (let r in this._props)
      n[r] = this._props[r];
    n.state = this.state;
    for (let r in e)
      n[r] = e[r];
    this.update(n);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, n) {
    let r = this.state, i = !1, o = !1;
    e.storedMarks && this.composing && (vO(this), o = !0), this.state = e;
    let s = r.plugins != e.plugins || this._props.plugins != n.plugins;
    if (s || this._props.plugins != n.plugins || this._props.nodeViews != n.nodeViews) {
      let p = z0(this);
      wF(p, this.nodeViews) && (this.nodeViews = p, i = !0);
    }
    (s || n.handleDOMEvents != this._props.handleDOMEvents) && id(this), this.editable = B0(this), j0(this);
    let a = Df(this), l = L0(this), c = r.plugins != e.plugins && !r.doc.eq(e.doc) ? "reset" : e.scrollToSelection > r.scrollToSelection ? "to selection" : "preserve", u = i || !this.docView.matchesNode(e.doc, l, a);
    (u || !e.selection.eq(r.selection)) && (o = !0);
    let f = c == "preserve" && o && this.dom.style.overflowAnchor == null && QA(this);
    if (o) {
      this.domObserver.stop();
      let p = u && (yt || tt) && !this.composing && !r.selection.empty && !e.selection.empty && bF(r.selection, e.selection);
      if (u) {
        let d = tt ? this.trackWrites = this.domSelectionRange().focusNode : null;
        (i || !this.docView.update(e.doc, l, a, this)) && (this.docView.updateOuterDeco([]), this.docView.destroy(), this.docView = w0(e.doc, l, a, this.dom, this)), d && !this.trackWrites && (p = !0);
      }
      p || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && ER(this)) ? In(this, p) : (rO(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(r), c == "reset" ? this.dom.scrollTop = 0 : c == "to selection" ? this.scrollToSelection() : f && eR(f);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!this.someProp("handleScrollToSelection", (n) => n(this)))
      if (this.state.selection instanceof X) {
        let n = this.docView.domAfterPos(this.state.selection.from);
        n.nodeType == 1 && h0(this, n.getBoundingClientRect(), e);
      } else
        h0(this, this.coordsAtPos(this.state.selection.head, 1), e);
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let n = 0; n < this.directPlugins.length; n++) {
        let r = this.directPlugins[n];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
      for (let n = 0; n < this.state.plugins.length; n++) {
        let r = this.state.plugins[n];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
    } else
      for (let n = 0; n < this.pluginViews.length; n++) {
        let r = this.pluginViews[n];
        r.update && r.update(this, e);
      }
  }
  someProp(e, n) {
    let r = this._props && this._props[e], i;
    if (r != null && (i = n ? n(r) : r))
      return i;
    for (let s = 0; s < this.directPlugins.length; s++) {
      let a = this.directPlugins[s].props[e];
      if (a != null && (i = n ? n(a) : a))
        return i;
    }
    let o = this.state.plugins;
    if (o)
      for (let s = 0; s < o.length; s++) {
        let a = o[s].props[e];
        if (a != null && (i = n ? n(a) : a))
          return i;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (yt) {
      let e = this.root.activeElement;
      if (e == this.dom)
        return !0;
      if (!e || !this.dom.contains(e))
        return !1;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == "false")
          return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop(), this.editable && tR(this.dom), In(this), this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let e = this._root;
    if (e == null) {
      for (let n = this.dom.parentNode; n; n = n.parentNode)
        if (n.nodeType == 9 || n.nodeType == 11 && n.host)
          return n.getSelection || (Object.getPrototypeOf(n).getSelection = () => n.ownerDocument.getSelection()), this._root = n;
    }
    return e || document;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(e) {
    return sR(this, e);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(e, n = 1) {
    return Kx(this, e, n);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(e, n = 0) {
    return this.docView.domFromPos(e, n);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(e) {
    let n = this.docView.descAt(e);
    return n ? n.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(e, n, r = -1) {
    let i = this.docView.posFromDOM(e, n, r);
    if (i == null)
      throw new RangeError("DOM position not inside the editor");
    return i;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(e, n) {
    return fR(this, n || this.state, e);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(e, n) {
    return Xo(this, "", e, !1, n || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(e, n) {
    return Xo(this, e, null, !0, n || new ClipboardEvent("paste"));
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (BR(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], Df(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null);
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(e) {
    return VR(this, e);
  }
  /**
  Dispatch a transaction. Will call
  [`dispatchTransaction`](https://prosemirror.net/docs/ref/#view.DirectEditorProps.dispatchTransaction)
  when given, and otherwise defaults to applying the transaction to
  the current state and calling
  [`updateState`](https://prosemirror.net/docs/ref/#view.EditorView.updateState) with the result.
  This method is bound to the view instance, so that it can be
  easily passed around.
  */
  dispatch(e) {
    let n = this._props.dispatchTransaction;
    n ? n.call(this, e) : this.updateState(this.state.apply(e));
  }
  /**
  @internal
  */
  domSelectionRange() {
    return ct && this.root.nodeType === 11 && GA(this.dom.ownerDocument) == this.dom ? uF(this) : this.domSelection();
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
function L0(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(t.editable), t.someProp("attributes", (n) => {
    if (typeof n == "function" && (n = n(t.state)), n)
      for (let r in n)
        r == "class" ? e.class += " " + n[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + n[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(n[r]));
  }), e.translate || (e.translate = "no"), [Et.node(0, t.state.doc.content.size, e)];
}
function j0(t) {
  if (t.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), t.cursorWrapper = { dom: e, deco: Et.widget(t.state.selection.head, e, { raw: !0, marks: t.markCursor }) };
  } else
    t.cursorWrapper = null;
}
function B0(t) {
  return !t.someProp("editable", (e) => e(t.state) === !1);
}
function bF(t, e) {
  let n = Math.min(t.$anchor.sharedDepth(t.head), e.$anchor.sharedDepth(e.head));
  return t.$anchor.start(n) != e.$anchor.start(n);
}
function z0(t) {
  let e = /* @__PURE__ */ Object.create(null);
  function n(r) {
    for (let i in r)
      Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i]);
  }
  return t.someProp("nodeViews", n), t.someProp("markViews", n), e;
}
function wF(t, e) {
  let n = 0, r = 0;
  for (let i in t) {
    if (t[i] != e[i])
      return !0;
    n++;
  }
  for (let i in e)
    r++;
  return n != r;
}
function V0(t) {
  if (t.spec.state || t.spec.filterTransaction || t.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var rr = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, nl = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, SF = typeof navigator < "u" && /Mac/.test(navigator.platform), xF = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var qe = 0; qe < 10; qe++)
  rr[48 + qe] = rr[96 + qe] = String(qe);
for (var qe = 1; qe <= 24; qe++)
  rr[qe + 111] = "F" + qe;
for (var qe = 65; qe <= 90; qe++)
  rr[qe] = String.fromCharCode(qe + 32), nl[qe] = String.fromCharCode(qe);
for (var Rf in rr)
  nl.hasOwnProperty(Rf) || (nl[Rf] = rr[Rf]);
function OF(t) {
  var e = SF && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey || xF && t.shiftKey && t.key && t.key.length == 1 || t.key == "Unidentified", n = !e && t.key || (t.shiftKey ? nl : rr)[t.keyCode] || t.key || "Unidentified";
  return n == "Esc" && (n = "Escape"), n == "Del" && (n = "Delete"), n == "Left" && (n = "ArrowLeft"), n == "Up" && (n = "ArrowUp"), n == "Right" && (n = "ArrowRight"), n == "Down" && (n = "ArrowDown"), n;
}
const EF = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
function CF(t) {
  let e = t.split(/-(?!$)/), n = e[e.length - 1];
  n == "Space" && (n = " ");
  let r, i, o, s;
  for (let a = 0; a < e.length - 1; a++) {
    let l = e[a];
    if (/^(cmd|meta|m)$/i.test(l))
      s = !0;
    else if (/^a(lt)?$/i.test(l))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(l))
      i = !0;
    else if (/^s(hift)?$/i.test(l))
      o = !0;
    else if (/^mod$/i.test(l))
      EF ? s = !0 : i = !0;
    else
      throw new Error("Unrecognized modifier name: " + l);
  }
  return r && (n = "Alt-" + n), i && (n = "Ctrl-" + n), s && (n = "Meta-" + n), o && (n = "Shift-" + n), n;
}
function _F(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t)
    e[CF(n)] = t[n];
  return e;
}
function Ff(t, e, n = !0) {
  return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), n && e.shiftKey && (t = "Shift-" + t), t;
}
function kF(t) {
  return new Wt({ props: { handleKeyDown: NF(t) } });
}
function NF(t) {
  let e = _F(t);
  return function(n, r) {
    let i = OF(r), o, s = e[Ff(i, r)];
    if (s && s(n.state, n.dispatch, n))
      return !0;
    if (i.length == 1 && i != " ") {
      if (r.shiftKey) {
        let a = e[Ff(i, r, !1)];
        if (a && a(n.state, n.dispatch, n))
          return !0;
      }
      if ((r.shiftKey || r.altKey || r.metaKey || i.charCodeAt(0) > 127) && (o = rr[r.keyCode]) && o != i) {
        let a = e[Ff(o, r)];
        if (a && a(n.state, n.dispatch, n))
          return !0;
      }
    }
    return !1;
  };
}
const MF = (t, e) => t.selection.empty ? !1 : (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
function TF(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("backward", t) : n.parentOffset > 0) ? null : n;
}
const $F = (t, e, n) => {
  let r = TF(t, n);
  if (!r)
    return !1;
  let i = SO(r);
  if (!i) {
    let s = r.blockRange(), a = s && oo(s);
    return a == null ? !1 : (e && e(t.tr.lift(s, a).scrollIntoView()), !0);
  }
  let o = i.nodeBefore;
  if (!o.type.spec.isolating && EO(t, i, e))
    return !0;
  if (r.parent.content.size == 0 && (Ui(o, "end") || X.isSelectable(o))) {
    let s = Mh(t.doc, r.before(), r.after(), L.empty);
    if (s && s.slice.size < s.to - s.from) {
      if (e) {
        let a = t.tr.step(s);
        a.setSelection(Ui(o, "end") ? ne.findFrom(a.doc.resolve(a.mapping.map(i.pos, -1)), -1) : X.create(a.doc, i.pos - o.nodeSize)), e(a.scrollIntoView());
      }
      return !0;
    }
  }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(t.tr.delete(i.pos - o.nodeSize, i.pos).scrollIntoView()), !0) : !1;
};
function Ui(t, e, n = !1) {
  for (let r = t; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (n && r.childCount != 1)
      return !1;
  }
  return !1;
}
const IF = (t, e, n) => {
  let { $head: r, empty: i } = t.selection, o = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0)
      return !1;
    o = SO(r);
  }
  let s = o && o.nodeBefore;
  return !s || !X.isSelectable(s) ? !1 : (e && e(t.tr.setSelection(X.create(t.doc, o.pos - s.nodeSize)).scrollIntoView()), !0);
};
function SO(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      if (t.index(e) > 0)
        return t.doc.resolve(t.before(e + 1));
      if (t.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function PF(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("forward", t) : n.parentOffset < n.parent.content.size) ? null : n;
}
const DF = (t, e, n) => {
  let r = PF(t, n);
  if (!r)
    return !1;
  let i = xO(r);
  if (!i)
    return !1;
  let o = i.nodeAfter;
  if (EO(t, i, e))
    return !0;
  if (r.parent.content.size == 0 && (Ui(o, "start") || X.isSelectable(o))) {
    let s = Mh(t.doc, r.before(), r.after(), L.empty);
    if (s && s.slice.size < s.to - s.from) {
      if (e) {
        let a = t.tr.step(s);
        a.setSelection(Ui(o, "start") ? ne.findFrom(a.doc.resolve(a.mapping.map(i.pos)), 1) : X.create(a.doc, a.mapping.map(i.pos))), e(a.scrollIntoView());
      }
      return !0;
    }
  }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(t.tr.delete(i.pos, i.pos + o.nodeSize).scrollIntoView()), !0) : !1;
}, AF = (t, e, n) => {
  let { $head: r, empty: i } = t.selection, o = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("forward", t) : r.parentOffset < r.parent.content.size)
      return !1;
    o = xO(r);
  }
  let s = o && o.nodeAfter;
  return !s || !X.isSelectable(s) ? !1 : (e && e(t.tr.setSelection(X.create(t.doc, o.pos)).scrollIntoView()), !0);
};
function xO(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      let n = t.node(e);
      if (t.index(e) + 1 < n.childCount)
        return t.doc.resolve(t.after(e + 1));
      if (n.type.spec.isolating)
        break;
    }
  return null;
}
const RF = (t, e) => {
  let n = t.selection, r = n instanceof X, i;
  if (r) {
    if (n.node.isTextblock || !hr(t.doc, n.from))
      return !1;
    i = n.from;
  } else if (i = Wl(t.doc, n.from, -1), i == null)
    return !1;
  if (e) {
    let o = t.tr.join(i);
    r && o.setSelection(X.create(o.doc, i - t.doc.resolve(i).nodeBefore.nodeSize)), e(o.scrollIntoView());
  }
  return !0;
}, FF = (t, e) => {
  let n = t.selection, r;
  if (n instanceof X) {
    if (n.node.isTextblock || !hr(t.doc, n.to))
      return !1;
    r = n.to;
  } else if (r = Wl(t.doc, n.to, 1), r == null)
    return !1;
  return e && e(t.tr.join(r).scrollIntoView()), !0;
}, LF = (t, e) => {
  let { $from: n, $to: r } = t.selection, i = n.blockRange(r), o = i && oo(i);
  return o == null ? !1 : (e && e(t.tr.lift(i, o).scrollIntoView()), !0);
}, jF = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  return !n.parent.type.spec.code || !n.sameParent(r) ? !1 : (e && e(t.tr.insertText(`
`).scrollIntoView()), !0);
};
function OO(t) {
  for (let e = 0; e < t.edgeCount; e++) {
    let { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
const BF = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  if (!n.parent.type.spec.code || !n.sameParent(r))
    return !1;
  let i = n.node(-1), o = n.indexAfter(-1), s = OO(i.contentMatchAt(o));
  if (!s || !i.canReplaceWith(o, o, s))
    return !1;
  if (e) {
    let a = n.after(), l = t.tr.replaceWith(a, a, s.createAndFill());
    l.setSelection(ne.near(l.doc.resolve(a), 1)), e(l.scrollIntoView());
  }
  return !0;
}, zF = (t, e) => {
  let n = t.selection, { $from: r, $to: i } = n;
  if (n instanceof Zt || r.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let o = OO(i.parent.contentMatchAt(i.indexAfter()));
  if (!o || !o.isTextblock)
    return !1;
  if (e) {
    let s = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, a = t.tr.insert(s, o.createAndFill());
    a.setSelection(ie.create(a.doc, s + 1)), e(a.scrollIntoView());
  }
  return !0;
}, VF = (t, e) => {
  let { $cursor: n } = t.selection;
  if (!n || n.parent.content.size)
    return !1;
  if (n.depth > 1 && n.after() != n.end(-1)) {
    let o = n.before();
    if (Ai(t.doc, o))
      return e && e(t.tr.split(o).scrollIntoView()), !0;
  }
  let r = n.blockRange(), i = r && oo(r);
  return i == null ? !1 : (e && e(t.tr.lift(r, i).scrollIntoView()), !0);
}, WF = (t, e) => {
  let { $from: n, to: r } = t.selection, i, o = n.sharedDepth(r);
  return o == 0 ? !1 : (i = n.before(o), e && e(t.tr.setSelection(X.create(t.doc, i))), !0);
};
function HF(t, e, n) {
  let r = e.nodeBefore, i = e.nodeAfter, o = e.index();
  return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(o - 1, o) ? (n && n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(o, o + 1) || !(i.isTextblock || hr(t.doc, e.pos)) ? !1 : (n && n(t.tr.clearIncompatible(e.pos, r.type, r.contentMatchAt(r.childCount)).join(e.pos).scrollIntoView()), !0);
}
function EO(t, e, n) {
  let r = e.nodeBefore, i = e.nodeAfter, o, s;
  if (r.type.spec.isolating || i.type.spec.isolating)
    return !1;
  if (HF(t, e, n))
    return !0;
  let a = e.parent.canReplace(e.index(), e.index() + 1);
  if (a && (o = (s = r.contentMatchAt(r.childCount)).findWrapping(i.type)) && s.matchType(o[0] || i.type).validEnd) {
    if (n) {
      let f = e.pos + i.nodeSize, p = I.empty;
      for (let m = o.length - 1; m >= 0; m--)
        p = I.from(o[m].create(null, p));
      p = I.from(r.copy(p));
      let d = t.tr.step(new je(e.pos - 1, f, e.pos, f, new L(p, 1, 0), o.length, !0)), h = f + 2 * o.length;
      hr(d.doc, h) && d.join(h), n(d.scrollIntoView());
    }
    return !0;
  }
  let l = ne.findFrom(e, 1), c = l && l.$from.blockRange(l.$to), u = c && oo(c);
  if (u != null && u >= e.depth)
    return n && n(t.tr.lift(c, u).scrollIntoView()), !0;
  if (a && Ui(i, "start", !0) && Ui(r, "end")) {
    let f = r, p = [];
    for (; p.push(f), !f.isTextblock; )
      f = f.lastChild;
    let d = i, h = 1;
    for (; !d.isTextblock; d = d.firstChild)
      h++;
    if (f.canReplace(f.childCount, f.childCount, d.content)) {
      if (n) {
        let m = I.empty;
        for (let y = p.length - 1; y >= 0; y--)
          m = I.from(p[y].copy(m));
        let v = t.tr.step(new je(e.pos - p.length, e.pos + i.nodeSize, e.pos + h, e.pos + i.nodeSize - h, new L(m, p.length, 0), 0, !0));
        n(v.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function CO(t) {
  return function(e, n) {
    let r = e.selection, i = t < 0 ? r.$from : r.$to, o = i.depth;
    for (; i.node(o).isInline; ) {
      if (!o)
        return !1;
      o--;
    }
    return i.node(o).isTextblock ? (n && n(e.tr.setSelection(ie.create(e.doc, t < 0 ? i.start(o) : i.end(o)))), !0) : !1;
  };
}
const UF = CO(-1), GF = CO(1);
function qF(t, e = null) {
  return function(n, r) {
    let { $from: i, $to: o } = n.selection, s = i.blockRange(o), a = s && Nh(s, t, e);
    return a ? (r && r(n.tr.wrap(s, a).scrollIntoView()), !0) : !1;
  };
}
function W0(t, e = null) {
  return function(n, r) {
    let i = !1;
    for (let o = 0; o < n.selection.ranges.length && !i; o++) {
      let { $from: { pos: s }, $to: { pos: a } } = n.selection.ranges[o];
      n.doc.nodesBetween(s, a, (l, c) => {
        if (i)
          return !1;
        if (!(!l.isTextblock || l.hasMarkup(t, e)))
          if (l.type == t)
            i = !0;
          else {
            let u = n.doc.resolve(c), f = u.index();
            i = u.parent.canReplaceWith(f, f + 1, t);
          }
      });
    }
    if (!i)
      return !1;
    if (r) {
      let o = n.tr;
      for (let s = 0; s < n.selection.ranges.length; s++) {
        let { $from: { pos: a }, $to: { pos: l } } = n.selection.ranges[s];
        o.setBlockType(a, l, t, e);
      }
      r(o.scrollIntoView());
    }
    return !0;
  };
}
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function JF(t, e = null) {
  return function(n, r) {
    let { $from: i, $to: o } = n.selection, s = i.blockRange(o), a = !1, l = s;
    if (!s)
      return !1;
    if (s.depth >= 2 && i.node(s.depth - 1).type.compatibleContent(t) && s.startIndex == 0) {
      if (i.index(s.depth - 1) == 0)
        return !1;
      let u = n.doc.resolve(s.start - 2);
      l = new Ja(u, u, s.depth), s.endIndex < s.parent.childCount && (s = new Ja(i, n.doc.resolve(o.end(s.depth)), s.depth)), a = !0;
    }
    let c = Nh(l, t, e, s);
    return c ? (r && r(KF(n.tr, s, c, a, t).scrollIntoView()), !0) : !1;
  };
}
function KF(t, e, n, r, i) {
  let o = I.empty;
  for (let u = n.length - 1; u >= 0; u--)
    o = I.from(n[u].type.create(n[u].attrs, o));
  t.step(new je(e.start - (r ? 2 : 0), e.end, e.start, e.end, new L(o, 0, 0), n.length, !0));
  let s = 0;
  for (let u = 0; u < n.length; u++)
    n[u].type == i && (s = u + 1);
  let a = n.length - s, l = e.start + n.length - (r ? 2 : 0), c = e.parent;
  for (let u = e.startIndex, f = e.endIndex, p = !0; u < f; u++, p = !1)
    !p && Ai(t.doc, l, a) && (t.split(l, a), l += 2 * a), l += c.child(u).nodeSize;
  return t;
}
function XF(t) {
  return function(e, n) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (s) => s.childCount > 0 && s.firstChild.type == t);
    return o ? n ? r.node(o.depth - 1).type == t ? YF(e, n, t, o) : ZF(e, n, o) : !0 : !1;
  };
}
function YF(t, e, n, r) {
  let i = t.tr, o = r.end, s = r.$to.end(r.depth);
  o < s && (i.step(new je(o - 1, s, o, s, new L(I.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new Ja(i.doc.resolve(r.$from.pos), i.doc.resolve(s), r.depth));
  const a = oo(r);
  if (a == null)
    return !1;
  i.lift(r, a);
  let l = i.mapping.map(o, -1) - 1;
  return hr(i.doc, l) && i.join(l), e(i.scrollIntoView()), !0;
}
function ZF(t, e, n) {
  let r = t.tr, i = n.parent;
  for (let d = n.end, h = n.endIndex - 1, m = n.startIndex; h > m; h--)
    d -= i.child(h).nodeSize, r.delete(d - 1, d + 1);
  let o = r.doc.resolve(n.start), s = o.nodeAfter;
  if (r.mapping.map(n.end) != n.start + o.nodeAfter.nodeSize)
    return !1;
  let a = n.startIndex == 0, l = n.endIndex == i.childCount, c = o.node(-1), u = o.index(-1);
  if (!c.canReplace(u + (a ? 0 : 1), u + 1, s.content.append(l ? I.empty : I.from(i))))
    return !1;
  let f = o.pos, p = f + s.nodeSize;
  return r.step(new je(f - (a ? 1 : 0), p + (l ? 1 : 0), f + 1, p - 1, new L((a ? I.empty : I.from(i.copy(I.empty))).append(l ? I.empty : I.from(i.copy(I.empty))), a ? 0 : 1, l ? 0 : 1), a ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function QF(t) {
  return function(e, n) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (c) => c.childCount > 0 && c.firstChild.type == t);
    if (!o)
      return !1;
    let s = o.startIndex;
    if (s == 0)
      return !1;
    let a = o.parent, l = a.child(s - 1);
    if (l.type != t)
      return !1;
    if (n) {
      let c = l.lastChild && l.lastChild.type == a.type, u = I.from(c ? t.create() : null), f = new L(I.from(t.create(null, I.from(a.type.create(null, u)))), c ? 3 : 1, 0), p = o.start, d = o.end;
      n(e.tr.step(new je(p - (c ? 3 : 1), d, p, d, f, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function Kl(t) {
  const { state: e, transaction: n } = t;
  let { selection: r } = n, { doc: i } = n, { storedMarks: o } = n;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    filterTransaction: e.filterTransaction,
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return o;
    },
    get selection() {
      return r;
    },
    get doc() {
      return i;
    },
    get tr() {
      return r = n.selection, i = n.doc, o = n.storedMarks, n;
    }
  };
}
class Xl {
  constructor(e) {
    this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: e, editor: n, state: r } = this, { view: i } = n, { tr: o } = r, s = this.buildProps(o);
    return Object.fromEntries(Object.entries(e).map(([a, l]) => [a, (...u) => {
      const f = l(...u)(s);
      return !o.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(o), f;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, n = !0) {
    const { rawCommands: r, editor: i, state: o } = this, { view: s } = i, a = [], l = !!e, c = e || o.tr, u = () => (!l && n && !c.getMeta("preventDispatch") && !this.hasCustomState && s.dispatch(c), a.every((p) => p === !0)), f = {
      ...Object.fromEntries(Object.entries(r).map(([p, d]) => [p, (...m) => {
        const v = this.buildProps(c, n), y = d(...m)(v);
        return a.push(y), f;
      }])),
      run: u
    };
    return f;
  }
  createCan(e) {
    const { rawCommands: n, state: r } = this, i = !1, o = e || r.tr, s = this.buildProps(o, i);
    return {
      ...Object.fromEntries(Object.entries(n).map(([l, c]) => [l, (...u) => c(...u)({ ...s, dispatch: void 0 })])),
      chain: () => this.createChain(o, i)
    };
  }
  buildProps(e, n = !0) {
    const { rawCommands: r, editor: i, state: o } = this, { view: s } = i, a = {
      tr: e,
      editor: i,
      view: s,
      state: Kl({
        state: o,
        transaction: e
      }),
      dispatch: n ? () => {
      } : void 0,
      chain: () => this.createChain(e, n),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(r).map(([l, c]) => [l, (...u) => c(...u)(a)]));
      }
    };
    return a;
  }
}
class eL {
  constructor() {
    this.callbacks = {};
  }
  on(e, n) {
    return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(n), this;
  }
  emit(e, ...n) {
    const r = this.callbacks[e];
    return r && r.forEach((i) => i.apply(this, n)), this;
  }
  off(e, n) {
    const r = this.callbacks[e];
    return r && (n ? this.callbacks[e] = r.filter((i) => i !== n) : delete this.callbacks[e]), this;
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
function V(t, e, n) {
  return t.config[e] === void 0 && t.parent ? V(t.parent, e, n) : typeof t.config[e] == "function" ? t.config[e].bind({
    ...n,
    parent: t.parent ? V(t.parent, e, n) : null
  }) : t.config[e];
}
function Yl(t) {
  const e = t.filter((i) => i.type === "extension"), n = t.filter((i) => i.type === "node"), r = t.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: n,
    markExtensions: r
  };
}
function _O(t) {
  const e = [], { nodeExtensions: n, markExtensions: r } = Yl(t), i = [...n, ...r], o = {
    default: null,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return t.forEach((s) => {
    const a = {
      name: s.name,
      options: s.options,
      storage: s.storage
    }, l = V(s, "addGlobalAttributes", a);
    if (!l)
      return;
    l().forEach((u) => {
      u.types.forEach((f) => {
        Object.entries(u.attributes).forEach(([p, d]) => {
          e.push({
            type: f,
            name: p,
            attribute: {
              ...o,
              ...d
            }
          });
        });
      });
    });
  }), i.forEach((s) => {
    const a = {
      name: s.name,
      options: s.options,
      storage: s.storage
    }, l = V(s, "addAttributes", a);
    if (!l)
      return;
    const c = l();
    Object.entries(c).forEach(([u, f]) => {
      const p = {
        ...o,
        ...f
      };
      typeof (p == null ? void 0 : p.default) == "function" && (p.default = p.default()), p != null && p.isRequired && (p == null ? void 0 : p.default) === void 0 && delete p.default, e.push({
        type: s.name,
        name: u,
        attribute: p
      });
    });
  }), e;
}
function Ve(t, e) {
  if (typeof t == "string") {
    if (!e.nodes[t])
      throw Error(`There is no node type named '${t}'. Maybe you forgot to add the extension?`);
    return e.nodes[t];
  }
  return t;
}
function vr(...t) {
  return t.filter((e) => !!e).reduce((e, n) => {
    const r = { ...e };
    return Object.entries(n).forEach(([i, o]) => {
      if (!r[i]) {
        r[i] = o;
        return;
      }
      if (i === "class") {
        const a = o ? o.split(" ") : [], l = r[i] ? r[i].split(" ") : [], c = a.filter((u) => !l.includes(u));
        r[i] = [...l, ...c].join(" ");
      } else
        i === "style" ? r[i] = [r[i], o].join("; ") : r[i] = o;
    }), r;
  }, {});
}
function od(t, e) {
  return e.filter((n) => n.attribute.rendered).map((n) => n.attribute.renderHTML ? n.attribute.renderHTML(t.attrs) || {} : {
    [n.name]: t.attrs[n.name]
  }).reduce((n, r) => vr(n, r), {});
}
function kO(t) {
  return typeof t == "function";
}
function te(t, e = void 0, ...n) {
  return kO(t) ? e ? t.bind(e)(...n) : t(...n) : t;
}
function tL(t = {}) {
  return Object.keys(t).length === 0 && t.constructor === Object;
}
function nL(t) {
  return typeof t != "string" ? t : t.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(t) : t === "true" ? !0 : t === "false" ? !1 : t;
}
function H0(t, e) {
  return t.style ? t : {
    ...t,
    getAttrs: (n) => {
      const r = t.getAttrs ? t.getAttrs(n) : t.attrs;
      if (r === !1)
        return !1;
      const i = e.reduce((o, s) => {
        const a = s.attribute.parseHTML ? s.attribute.parseHTML(n) : nL(n.getAttribute(s.name));
        return a == null ? o : {
          ...o,
          [s.name]: a
        };
      }, {});
      return { ...r, ...i };
    }
  };
}
function U0(t) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(t).filter(([e, n]) => e === "attrs" && tL(n) ? !1 : n != null)
  );
}
function rL(t, e) {
  var n;
  const r = _O(t), { nodeExtensions: i, markExtensions: o } = Yl(t), s = (n = i.find((c) => V(c, "topNode"))) === null || n === void 0 ? void 0 : n.name, a = Object.fromEntries(i.map((c) => {
    const u = r.filter((y) => y.type === c.name), f = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, p = t.reduce((y, C) => {
      const O = V(C, "extendNodeSchema", f);
      return {
        ...y,
        ...O ? O(c) : {}
      };
    }, {}), d = U0({
      ...p,
      content: te(V(c, "content", f)),
      marks: te(V(c, "marks", f)),
      group: te(V(c, "group", f)),
      inline: te(V(c, "inline", f)),
      atom: te(V(c, "atom", f)),
      selectable: te(V(c, "selectable", f)),
      draggable: te(V(c, "draggable", f)),
      code: te(V(c, "code", f)),
      defining: te(V(c, "defining", f)),
      isolating: te(V(c, "isolating", f)),
      attrs: Object.fromEntries(u.map((y) => {
        var C;
        return [y.name, { default: (C = y == null ? void 0 : y.attribute) === null || C === void 0 ? void 0 : C.default }];
      }))
    }), h = te(V(c, "parseHTML", f));
    h && (d.parseDOM = h.map((y) => H0(y, u)));
    const m = V(c, "renderHTML", f);
    m && (d.toDOM = (y) => m({
      node: y,
      HTMLAttributes: od(y, u)
    }));
    const v = V(c, "renderText", f);
    return v && (d.toText = v), [c.name, d];
  })), l = Object.fromEntries(o.map((c) => {
    const u = r.filter((v) => v.type === c.name), f = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, p = t.reduce((v, y) => {
      const C = V(y, "extendMarkSchema", f);
      return {
        ...v,
        ...C ? C(c) : {}
      };
    }, {}), d = U0({
      ...p,
      inclusive: te(V(c, "inclusive", f)),
      excludes: te(V(c, "excludes", f)),
      group: te(V(c, "group", f)),
      spanning: te(V(c, "spanning", f)),
      code: te(V(c, "code", f)),
      attrs: Object.fromEntries(u.map((v) => {
        var y;
        return [v.name, { default: (y = v == null ? void 0 : v.attribute) === null || y === void 0 ? void 0 : y.default }];
      }))
    }), h = te(V(c, "parseHTML", f));
    h && (d.parseDOM = h.map((v) => H0(v, u)));
    const m = V(c, "renderHTML", f);
    return m && (d.toDOM = (v) => m({
      mark: v,
      HTMLAttributes: od(v, u)
    })), [c.name, d];
  }));
  return new cA({
    topNode: s,
    nodes: a,
    marks: l
  });
}
function Lf(t, e) {
  return e.nodes[t] || e.marks[t] || null;
}
function G0(t, e) {
  return Array.isArray(e) ? e.some((n) => (typeof n == "string" ? n : n.name) === t.name) : e;
}
const iL = (t, e = 500) => {
  let n = "";
  const r = t.parentOffset;
  return t.parent.nodesBetween(Math.max(0, r - e), r, (i, o, s, a) => {
    var l, c;
    const u = ((c = (l = i.type.spec).toText) === null || c === void 0 ? void 0 : c.call(l, {
      node: i,
      pos: o,
      parent: s,
      index: a
    })) || i.textContent || "%leaf%";
    n += u.slice(0, Math.max(0, r - o));
  }), n;
};
function Bh(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
class NO {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const oL = (t, e) => {
  if (Bh(e))
    return e.exec(t);
  const n = e(t);
  if (!n)
    return null;
  const r = [n.text];
  return r.index = n.index, r.input = t, r.data = n.data, n.replaceWith && (n.text.includes(n.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(n.replaceWith)), r;
};
function jf(t) {
  var e;
  const { editor: n, from: r, to: i, text: o, rules: s, plugin: a } = t, { view: l } = n;
  if (l.composing)
    return !1;
  const c = l.state.doc.resolve(r);
  if (
    // check for code node
    c.parent.type.spec.code || !((e = c.nodeBefore || c.nodeAfter) === null || e === void 0) && e.marks.find((p) => p.type.spec.code)
  )
    return !1;
  let u = !1;
  const f = iL(c) + o;
  return s.forEach((p) => {
    if (u)
      return;
    const d = oL(f, p.find);
    if (!d)
      return;
    const h = l.state.tr, m = Kl({
      state: l.state,
      transaction: h
    }), v = {
      from: r - (d[0].length - o.length),
      to: i
    }, { commands: y, chain: C, can: O } = new Xl({
      editor: n,
      state: m
    });
    p.handler({
      state: m,
      range: v,
      match: d,
      commands: y,
      chain: C,
      can: O
    }) === null || !h.steps.length || (h.setMeta(a, {
      transform: h,
      from: r,
      to: i,
      text: o
    }), l.dispatch(h), u = !0);
  }), u;
}
function sL(t) {
  const { editor: e, rules: n } = t, r = new Wt({
    state: {
      init() {
        return null;
      },
      apply(i, o) {
        const s = i.getMeta(r);
        return s || (i.selectionSet || i.docChanged ? null : o);
      }
    },
    props: {
      handleTextInput(i, o, s, a) {
        return jf({
          editor: e,
          from: o,
          to: s,
          text: a,
          rules: n,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (i) => (setTimeout(() => {
          const { $cursor: o } = i.state.selection;
          o && jf({
            editor: e,
            from: o.pos,
            to: o.pos,
            text: "",
            rules: n,
            plugin: r
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(i, o) {
        if (o.key !== "Enter")
          return !1;
        const { $cursor: s } = i.state.selection;
        return s ? jf({
          editor: e,
          from: s.pos,
          to: s.pos,
          text: `
`,
          rules: n,
          plugin: r
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return r;
}
function aL(t) {
  return typeof t == "number";
}
class lL {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const cL = (t, e) => {
  if (Bh(e))
    return [...t.matchAll(e)];
  const n = e(t);
  return n ? n.map((r) => {
    const i = [r.text];
    return i.index = r.index, i.input = t, i.data = r.data, r.replaceWith && (r.text.includes(r.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), i.push(r.replaceWith)), i;
  }) : [];
};
function uL(t) {
  const { editor: e, state: n, from: r, to: i, rule: o, pasteEvent: s, dropEvent: a } = t, { commands: l, chain: c, can: u } = new Xl({
    editor: e,
    state: n
  }), f = [];
  return n.doc.nodesBetween(r, i, (d, h) => {
    if (!d.isTextblock || d.type.spec.code)
      return;
    const m = Math.max(r, h), v = Math.min(i, h + d.content.size), y = d.textBetween(m - h, v - h, void 0, "￼");
    cL(y, o.find).forEach((O) => {
      if (O.index === void 0)
        return;
      const N = m + O.index + 1, T = N + O[0].length, B = {
        from: n.tr.mapping.map(N),
        to: n.tr.mapping.map(T)
      }, b = o.handler({
        state: n,
        range: B,
        match: O,
        commands: l,
        chain: c,
        can: u,
        pasteEvent: s,
        dropEvent: a
      });
      f.push(b);
    });
  }), f.every((d) => d !== null);
}
function fL(t) {
  const { editor: e, rules: n } = t;
  let r = null, i = !1, o = !1, s = new ClipboardEvent("paste"), a = new DragEvent("drop");
  return n.map((c) => new Wt({
    // we register a global drag handler to track the current drag source element
    view(u) {
      const f = (p) => {
        var d;
        r = !((d = u.dom.parentElement) === null || d === void 0) && d.contains(p.target) ? u.dom.parentElement : null;
      };
      return window.addEventListener("dragstart", f), {
        destroy() {
          window.removeEventListener("dragstart", f);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (u, f) => (o = r === u.dom.parentElement, a = f, !1),
        paste: (u, f) => {
          var p;
          const d = (p = f.clipboardData) === null || p === void 0 ? void 0 : p.getData("text/html");
          return s = f, i = !!(d != null && d.includes("data-pm-slice")), !1;
        }
      }
    },
    appendTransaction: (u, f, p) => {
      const d = u[0], h = d.getMeta("uiEvent") === "paste" && !i, m = d.getMeta("uiEvent") === "drop" && !o;
      if (!h && !m)
        return;
      const v = f.doc.content.findDiffStart(p.doc.content), y = f.doc.content.findDiffEnd(p.doc.content);
      if (!aL(v) || !y || v === y.b)
        return;
      const C = p.tr, O = Kl({
        state: p,
        transaction: C
      });
      if (!(!uL({
        editor: e,
        state: O,
        from: Math.max(v - 1, 0),
        to: y.b - 1,
        rule: c,
        pasteEvent: s,
        dropEvent: a
      }) || !C.steps.length))
        return a = new DragEvent("drop"), s = new ClipboardEvent("paste"), C;
    }
  }));
}
function pL(t) {
  const e = t.filter((n, r) => t.indexOf(n) !== r);
  return [...new Set(e)];
}
class Mi {
  constructor(e, n) {
    this.splittableMarks = [], this.editor = n, this.extensions = Mi.resolve(e), this.schema = rL(this.extensions, n), this.extensions.forEach((r) => {
      var i;
      this.editor.extensionStorage[r.name] = r.storage;
      const o = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: this.editor,
        type: Lf(r.name, this.schema)
      };
      r.type === "mark" && (!((i = te(V(r, "keepOnSplit", o))) !== null && i !== void 0) || i) && this.splittableMarks.push(r.name);
      const s = V(r, "onBeforeCreate", o);
      s && this.editor.on("beforeCreate", s);
      const a = V(r, "onCreate", o);
      a && this.editor.on("create", a);
      const l = V(r, "onUpdate", o);
      l && this.editor.on("update", l);
      const c = V(r, "onSelectionUpdate", o);
      c && this.editor.on("selectionUpdate", c);
      const u = V(r, "onTransaction", o);
      u && this.editor.on("transaction", u);
      const f = V(r, "onFocus", o);
      f && this.editor.on("focus", f);
      const p = V(r, "onBlur", o);
      p && this.editor.on("blur", p);
      const d = V(r, "onDestroy", o);
      d && this.editor.on("destroy", d);
    });
  }
  static resolve(e) {
    const n = Mi.sort(Mi.flatten(e)), r = pL(n.map((i) => i.name));
    return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map((i) => `'${i}'`).join(", ")}]. This can lead to issues.`), n;
  }
  static flatten(e) {
    return e.map((n) => {
      const r = {
        name: n.name,
        options: n.options,
        storage: n.storage
      }, i = V(n, "addExtensions", r);
      return i ? [n, ...this.flatten(i())] : n;
    }).flat(10);
  }
  static sort(e) {
    return e.sort((r, i) => {
      const o = V(r, "priority") || 100, s = V(i, "priority") || 100;
      return o > s ? -1 : o < s ? 1 : 0;
    });
  }
  get commands() {
    return this.extensions.reduce((e, n) => {
      const r = {
        name: n.name,
        options: n.options,
        storage: n.storage,
        editor: this.editor,
        type: Lf(n.name, this.schema)
      }, i = V(n, "addCommands", r);
      return i ? {
        ...e,
        ...i()
      } : e;
    }, {});
  }
  get plugins() {
    const { editor: e } = this, n = Mi.sort([...this.extensions].reverse()), r = [], i = [], o = n.map((s) => {
      const a = {
        name: s.name,
        options: s.options,
        storage: s.storage,
        editor: e,
        type: Lf(s.name, this.schema)
      }, l = [], c = V(s, "addKeyboardShortcuts", a);
      let u = {};
      if (s.type === "mark" && s.config.exitable && (u.ArrowRight = () => Jr.handleExit({ editor: e, mark: s })), c) {
        const m = Object.fromEntries(Object.entries(c()).map(([v, y]) => [v, () => y({ editor: e })]));
        u = { ...u, ...m };
      }
      const f = kF(u);
      l.push(f);
      const p = V(s, "addInputRules", a);
      G0(s, e.options.enableInputRules) && p && r.push(...p());
      const d = V(s, "addPasteRules", a);
      G0(s, e.options.enablePasteRules) && d && i.push(...d());
      const h = V(s, "addProseMirrorPlugins", a);
      if (h) {
        const m = h();
        l.push(...m);
      }
      return l;
    }).flat();
    return [
      sL({
        editor: e,
        rules: r
      }),
      ...fL({
        editor: e,
        rules: i
      }),
      ...o
    ];
  }
  get attributes() {
    return _O(this.extensions);
  }
  get nodeViews() {
    const { editor: e } = this, { nodeExtensions: n } = Yl(this.extensions);
    return Object.fromEntries(n.filter((r) => !!V(r, "addNodeView")).map((r) => {
      const i = this.attributes.filter((l) => l.type === r.name), o = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: e,
        type: Ve(r.name, this.schema)
      }, s = V(r, "addNodeView", o);
      if (!s)
        return [];
      const a = (l, c, u, f) => {
        const p = od(l, i);
        return s()({
          editor: e,
          node: l,
          getPos: u,
          decorations: f,
          HTMLAttributes: p,
          extension: r
        });
      };
      return [r.name, a];
    }));
  }
}
function dL(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function Bf(t) {
  return dL(t) !== "Object" ? !1 : t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype;
}
function Zl(t, e) {
  const n = { ...t };
  return Bf(t) && Bf(e) && Object.keys(e).forEach((r) => {
    Bf(e[r]) ? r in t ? n[r] = Zl(t[r], e[r]) : Object.assign(n, { [r]: e[r] }) : Object.assign(n, { [r]: e[r] });
  }), n;
}
class Lt {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = te(V(this, "addOptions", {
      name: this.name
    }))), this.storage = te(V(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Lt(e);
  }
  configure(e = {}) {
    const n = this.extend();
    return n.options = Zl(this.options, e), n.storage = te(V(n, "addStorage", {
      name: n.name,
      options: n.options
    })), n;
  }
  extend(e = {}) {
    const n = new Lt(e);
    return n.parent = this, this.child = n, n.name = e.name ? e.name : n.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${n.name}".`), n.options = te(V(n, "addOptions", {
      name: n.name
    })), n.storage = te(V(n, "addStorage", {
      name: n.name,
      options: n.options
    })), n;
  }
}
function MO(t, e, n) {
  const { from: r, to: i } = e, { blockSeparator: o = `

`, textSerializers: s = {} } = n || {};
  let a = "", l = !0;
  return t.nodesBetween(r, i, (c, u, f, p) => {
    var d;
    const h = s == null ? void 0 : s[c.type.name];
    h ? (c.isBlock && !l && (a += o, l = !0), f && (a += h({
      node: c,
      pos: u,
      parent: f,
      index: p,
      range: e
    }))) : c.isText ? (a += (d = c == null ? void 0 : c.text) === null || d === void 0 ? void 0 : d.slice(Math.max(r, u) - u, i - u), l = !1) : c.isBlock && !l && (a += o, l = !0);
  }), a;
}
function TO(t) {
  return Object.fromEntries(Object.entries(t.nodes).filter(([, e]) => e.spec.toText).map(([e, n]) => [e, n.spec.toText]));
}
const hL = Lt.create({
  name: "clipboardTextSerializer",
  addProseMirrorPlugins() {
    return [
      new Wt({
        key: new wn("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: t } = this, { state: e, schema: n } = t, { doc: r, selection: i } = e, { ranges: o } = i, s = Math.min(...o.map((u) => u.$from.pos)), a = Math.max(...o.map((u) => u.$to.pos)), l = TO(n);
            return MO(r, { from: s, to: a }, {
              textSerializers: l
            });
          }
        }
      })
    ];
  }
}), mL = () => ({ editor: t, view: e }) => (requestAnimationFrame(() => {
  var n;
  t.isDestroyed || (e.dom.blur(), (n = window == null ? void 0 : window.getSelection()) === null || n === void 0 || n.removeAllRanges());
}), !0), vL = (t = !1) => ({ commands: e }) => e.setContent("", t), gL = () => ({ state: t, tr: e, dispatch: n }) => {
  const { selection: r } = e, { ranges: i } = r;
  return n && i.forEach(({ $from: o, $to: s }) => {
    t.doc.nodesBetween(o.pos, s.pos, (a, l) => {
      if (a.type.isText)
        return;
      const { doc: c, mapping: u } = e, f = c.resolve(u.map(l)), p = c.resolve(u.map(l + a.nodeSize)), d = f.blockRange(p);
      if (!d)
        return;
      const h = oo(d);
      if (a.type.isTextblock) {
        const { defaultType: m } = f.parent.contentMatchAt(f.index());
        e.setNodeMarkup(d.start, m);
      }
      (h || h === 0) && e.lift(d, h);
    });
  }), !0;
}, yL = (t) => (e) => t(e), bL = () => ({ state: t, dispatch: e }) => zF(t, e), wL = (t, e) => ({ editor: n, tr: r }) => {
  const { state: i } = n, o = i.doc.slice(t.from, t.to);
  r.deleteRange(t.from, t.to);
  const s = r.mapping.map(e);
  return r.insert(s, o.content), r.setSelection(new ie(r.doc.resolve(s - 1))), !0;
}, SL = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, r = n.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const i = t.selection.$anchor;
  for (let o = i.depth; o > 0; o -= 1)
    if (i.node(o).type === r.type) {
      if (e) {
        const a = i.before(o), l = i.after(o);
        t.delete(a, l).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, xL = (t) => ({ tr: e, state: n, dispatch: r }) => {
  const i = Ve(t, n.schema), o = e.selection.$anchor;
  for (let s = o.depth; s > 0; s -= 1)
    if (o.node(s).type === i) {
      if (r) {
        const l = o.before(s), c = o.after(s);
        e.delete(l, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, OL = (t) => ({ tr: e, dispatch: n }) => {
  const { from: r, to: i } = t;
  return n && e.delete(r, i), !0;
}, EL = () => ({ state: t, dispatch: e }) => MF(t, e), CL = () => ({ commands: t }) => t.keyboardShortcut("Enter"), _L = () => ({ state: t, dispatch: e }) => BF(t, e);
function rl(t, e, n = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((i) => n.strict ? e[i] === t[i] : Bh(e[i]) ? e[i].test(t[i]) : e[i] === t[i]) : !0;
}
function sd(t, e, n = {}) {
  return t.find((r) => r.type === e && rl(r.attrs, n));
}
function kL(t, e, n = {}) {
  return !!sd(t, e, n);
}
function zh(t, e, n = {}) {
  if (!t || !e)
    return;
  let r = t.parent.childAfter(t.parentOffset);
  if (t.parentOffset === r.offset && r.offset !== 0 && (r = t.parent.childBefore(t.parentOffset)), !r.node)
    return;
  const i = sd([...r.node.marks], e, n);
  if (!i)
    return;
  let o = r.index, s = t.start() + r.offset, a = o + 1, l = s + r.node.nodeSize;
  for (sd([...r.node.marks], e, n); o > 0 && i.isInSet(t.parent.child(o - 1).marks); )
    o -= 1, s -= t.parent.child(o).nodeSize;
  for (; a < t.parent.childCount && kL([...t.parent.child(a).marks], e, n); )
    l += t.parent.child(a).nodeSize, a += 1;
  return {
    from: s,
    to: l
  };
}
function gr(t, e) {
  if (typeof t == "string") {
    if (!e.marks[t])
      throw Error(`There is no mark type named '${t}'. Maybe you forgot to add the extension?`);
    return e.marks[t];
  }
  return t;
}
const NL = (t, e = {}) => ({ tr: n, state: r, dispatch: i }) => {
  const o = gr(t, r.schema), { doc: s, selection: a } = n, { $from: l, from: c, to: u } = a;
  if (i) {
    const f = zh(l, o, e);
    if (f && f.from <= c && f.to >= u) {
      const p = ie.create(s, f.from, f.to);
      n.setSelection(p);
    }
  }
  return !0;
}, ML = (t) => (e) => {
  const n = typeof t == "function" ? t(e) : t;
  for (let r = 0; r < n.length; r += 1)
    if (n[r](e))
      return !0;
  return !1;
};
function $O(t) {
  return t instanceof ie;
}
function Ir(t = 0, e = 0, n = 0) {
  return Math.min(Math.max(t, e), n);
}
function IO(t, e = null) {
  if (!e)
    return null;
  const n = ne.atStart(t), r = ne.atEnd(t);
  if (e === "start" || e === !0)
    return n;
  if (e === "end")
    return r;
  const i = n.from, o = r.to;
  return e === "all" ? ie.create(t, Ir(0, i, o), Ir(t.content.size, i, o)) : ie.create(t, Ir(e, i, o), Ir(e, i, o));
}
function Vh() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const TL = (t = null, e = {}) => ({ editor: n, view: r, tr: i, dispatch: o }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const s = () => {
    Vh() && r.dom.focus(), requestAnimationFrame(() => {
      n.isDestroyed || (r.focus(), e != null && e.scrollIntoView && n.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && t === null || t === !1)
    return !0;
  if (o && t === null && !$O(n.state.selection))
    return s(), !0;
  const a = IO(i.doc, t) || n.state.selection, l = n.state.selection.eq(a);
  return o && (l || i.setSelection(a), l && i.storedMarks && i.setStoredMarks(i.storedMarks), s()), !0;
}, $L = (t, e) => (n) => t.every((r, i) => e(r, { ...n, index: i })), IL = (t, e) => ({ tr: n, commands: r }) => r.insertContentAt({ from: n.selection.from, to: n.selection.to }, t, e);
function q0(t) {
  const e = `<body>${t}</body>`;
  return new window.DOMParser().parseFromString(e, "text/html").body;
}
function il(t, e, n) {
  if (n = {
    slice: !0,
    parseOptions: {},
    ...n
  }, typeof t == "object" && t !== null)
    try {
      return Array.isArray(t) && t.length > 0 ? I.fromArray(t.map((r) => e.nodeFromJSON(r))) : e.nodeFromJSON(t);
    } catch (r) {
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", t, "Error:", r), il("", e, n);
    }
  if (typeof t == "string") {
    const r = Bi.fromSchema(e);
    return n.slice ? r.parseSlice(q0(t), n.parseOptions).content : r.parse(q0(t), n.parseOptions);
  }
  return il("", e, n);
}
function PL(t, e, n) {
  const r = t.steps.length - 1;
  if (r < e)
    return;
  const i = t.steps[r];
  if (!(i instanceof Ge || i instanceof je))
    return;
  const o = t.mapping.maps[r];
  let s = 0;
  o.forEach((a, l, c, u) => {
    s === 0 && (s = u);
  }), t.setSelection(ne.near(t.doc.resolve(s), n));
}
const DL = (t) => t.toString().startsWith("<"), AL = (t, e, n) => ({ tr: r, dispatch: i, editor: o }) => {
  if (i) {
    n = {
      parseOptions: {},
      updateSelection: !0,
      ...n
    };
    const s = il(e, o.schema, {
      parseOptions: {
        preserveWhitespace: "full",
        ...n.parseOptions
      }
    });
    if (s.toString() === "<>")
      return !0;
    let { from: a, to: l } = typeof t == "number" ? { from: t, to: t } : { from: t.from, to: t.to }, c = !0, u = !0;
    if ((DL(s) ? s : [s]).forEach((p) => {
      p.check(), c = c ? p.isText && p.marks.length === 0 : !1, u = u ? p.isBlock : !1;
    }), a === l && u) {
      const { parent: p } = r.doc.resolve(a);
      p.isTextblock && !p.type.spec.code && !p.childCount && (a -= 1, l += 1);
    }
    c ? Array.isArray(e) ? r.insertText(e.map((p) => p.text || "").join(""), a, l) : typeof e == "object" && e && e.text ? r.insertText(e.text, a, l) : r.insertText(e, a, l) : r.replaceWith(a, l, s), n.updateSelection && PL(r, r.steps.length - 1, -1);
  }
  return !0;
}, RL = () => ({ state: t, dispatch: e }) => RF(t, e), FL = () => ({ state: t, dispatch: e }) => FF(t, e), LL = () => ({ state: t, dispatch: e }) => $F(t, e), jL = () => ({ state: t, dispatch: e }) => DF(t, e), BL = () => ({ tr: t, state: e, dispatch: n }) => {
  try {
    const r = Wl(e.doc, e.selection.$from.pos, -1);
    return r == null ? !1 : (t.join(r, 2), n && n(t), !0);
  } catch {
    return !1;
  }
}, zL = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = Wl(t.doc, t.selection.$from.pos, 1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
};
function PO() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function VL(t) {
  const e = t.split(/-(?!$)/);
  let n = e[e.length - 1];
  n === "Space" && (n = " ");
  let r, i, o, s;
  for (let a = 0; a < e.length - 1; a += 1) {
    const l = e[a];
    if (/^(cmd|meta|m)$/i.test(l))
      s = !0;
    else if (/^a(lt)?$/i.test(l))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(l))
      i = !0;
    else if (/^s(hift)?$/i.test(l))
      o = !0;
    else if (/^mod$/i.test(l))
      Vh() || PO() ? s = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${l}`);
  }
  return r && (n = `Alt-${n}`), i && (n = `Ctrl-${n}`), s && (n = `Meta-${n}`), o && (n = `Shift-${n}`), n;
}
const WL = (t) => ({ editor: e, view: n, tr: r, dispatch: i }) => {
  const o = VL(t).split(/-(?!$)/), s = o.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), a = new KeyboardEvent("keydown", {
    key: s === "Space" ? " " : s,
    altKey: o.includes("Alt"),
    ctrlKey: o.includes("Ctrl"),
    metaKey: o.includes("Meta"),
    shiftKey: o.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), l = e.captureTransaction(() => {
    n.someProp("handleKeyDown", (c) => c(n, a));
  });
  return l == null || l.steps.forEach((c) => {
    const u = c.map(r.mapping);
    u && i && r.maybeStep(u);
  }), !0;
};
function Zo(t, e, n = {}) {
  const { from: r, to: i, empty: o } = t.selection, s = e ? Ve(e, t.schema) : null, a = [];
  t.doc.nodesBetween(r, i, (f, p) => {
    if (f.isText)
      return;
    const d = Math.max(r, p), h = Math.min(i, p + f.nodeSize);
    a.push({
      node: f,
      from: d,
      to: h
    });
  });
  const l = i - r, c = a.filter((f) => s ? s.name === f.node.type.name : !0).filter((f) => rl(f.node.attrs, n, { strict: !1 }));
  return o ? !!c.length : c.reduce((f, p) => f + p.to - p.from, 0) >= l;
}
const HL = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const i = Ve(t, n.schema);
  return Zo(n, i, e) ? LF(n, r) : !1;
}, UL = () => ({ state: t, dispatch: e }) => VF(t, e), GL = (t) => ({ state: e, dispatch: n }) => {
  const r = Ve(t, e.schema);
  return XF(r)(e, n);
}, qL = () => ({ state: t, dispatch: e }) => jF(t, e);
function Ql(t, e) {
  return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null;
}
function J0(t, e) {
  const n = typeof e == "string" ? [e] : e;
  return Object.keys(t).reduce((r, i) => (n.includes(i) || (r[i] = t[i]), r), {});
}
const JL = (t, e) => ({ tr: n, state: r, dispatch: i }) => {
  let o = null, s = null;
  const a = Ql(typeof t == "string" ? t : t.name, r.schema);
  return a ? (a === "node" && (o = Ve(t, r.schema)), a === "mark" && (s = gr(t, r.schema)), i && n.selection.ranges.forEach((l) => {
    r.doc.nodesBetween(l.$from.pos, l.$to.pos, (c, u) => {
      o && o === c.type && n.setNodeMarkup(u, void 0, J0(c.attrs, e)), s && c.marks.length && c.marks.forEach((f) => {
        s === f.type && n.addMark(u, u + c.nodeSize, s.create(J0(f.attrs, e)));
      });
    });
  }), !0) : !1;
}, KL = () => ({ tr: t, dispatch: e }) => (e && t.scrollIntoView(), !0), XL = () => ({ tr: t, commands: e }) => e.setTextSelection({
  from: 0,
  to: t.doc.content.size
}), YL = () => ({ state: t, dispatch: e }) => IF(t, e), ZL = () => ({ state: t, dispatch: e }) => AF(t, e), QL = () => ({ state: t, dispatch: e }) => WF(t, e), e2 = () => ({ state: t, dispatch: e }) => GF(t, e), t2 = () => ({ state: t, dispatch: e }) => UF(t, e);
function DO(t, e, n = {}) {
  return il(t, e, { slice: !1, parseOptions: n });
}
const n2 = (t, e = !1, n = {}) => ({ tr: r, editor: i, dispatch: o }) => {
  const { doc: s } = r, a = DO(t, i.schema, n);
  return o && r.replaceWith(0, s.content.size, a).setMeta("preventUpdate", !e), !0;
};
function Wh(t, e) {
  const n = gr(e, t.schema), { from: r, to: i, empty: o } = t.selection, s = [];
  o ? (t.storedMarks && s.push(...t.storedMarks), s.push(...t.selection.$head.marks())) : t.doc.nodesBetween(r, i, (l) => {
    s.push(...l.marks);
  });
  const a = s.find((l) => l.type.name === n.name);
  return a ? { ...a.attrs } : {};
}
function r2(t) {
  for (let e = 0; e < t.edgeCount; e += 1) {
    const { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
function i2(t, e) {
  for (let n = t.depth; n > 0; n -= 1) {
    const r = t.node(n);
    if (e(r))
      return {
        pos: n > 0 ? t.before(n) : 0,
        start: t.start(n),
        depth: n,
        node: r
      };
  }
}
function Hh(t) {
  return (e) => i2(e.$from, t);
}
function o2(t, e) {
  const n = fn.fromSchema(e).serializeFragment(t), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(n), i.innerHTML;
}
function s2(t, e) {
  const n = {
    from: 0,
    to: t.content.size
  };
  return MO(t, n, e);
}
function a2(t, e) {
  const n = Ve(e, t.schema), { from: r, to: i } = t.selection, o = [];
  t.doc.nodesBetween(r, i, (a) => {
    o.push(a);
  });
  const s = o.reverse().find((a) => a.type.name === n.name);
  return s ? { ...s.attrs } : {};
}
function l2(t, e) {
  const n = Ql(typeof e == "string" ? e : e.name, t.schema);
  return n === "node" ? a2(t, e) : n === "mark" ? Wh(t, e) : {};
}
function AO(t, e, n) {
  const r = [];
  return t === e ? n.resolve(t).marks().forEach((i) => {
    const o = n.resolve(t - 1), s = zh(o, i.type);
    s && r.push({
      mark: i,
      ...s
    });
  }) : n.nodesBetween(t, e, (i, o) => {
    r.push(...i.marks.map((s) => ({
      from: o,
      to: o + i.nodeSize,
      mark: s
    })));
  }), r;
}
function Ia(t, e, n) {
  return Object.fromEntries(Object.entries(n).filter(([r]) => {
    const i = t.find((o) => o.type === e && o.name === r);
    return i ? i.attribute.keepOnSplit : !1;
  }));
}
function ad(t, e, n = {}) {
  const { empty: r, ranges: i } = t.selection, o = e ? gr(e, t.schema) : null;
  if (r)
    return !!(t.storedMarks || t.selection.$from.marks()).filter((f) => o ? o.name === f.type.name : !0).find((f) => rl(f.attrs, n, { strict: !1 }));
  let s = 0;
  const a = [];
  if (i.forEach(({ $from: f, $to: p }) => {
    const d = f.pos, h = p.pos;
    t.doc.nodesBetween(d, h, (m, v) => {
      if (!m.isText && !m.marks.length)
        return;
      const y = Math.max(d, v), C = Math.min(h, v + m.nodeSize), O = C - y;
      s += O, a.push(...m.marks.map((N) => ({
        mark: N,
        from: y,
        to: C
      })));
    });
  }), s === 0)
    return !1;
  const l = a.filter((f) => o ? o.name === f.mark.type.name : !0).filter((f) => rl(f.mark.attrs, n, { strict: !1 })).reduce((f, p) => f + p.to - p.from, 0), c = a.filter((f) => o ? f.mark.type !== o && f.mark.type.excludes(o) : !0).reduce((f, p) => f + p.to - p.from, 0);
  return (l > 0 ? l + c : l) >= s;
}
function c2(t, e, n = {}) {
  if (!e)
    return Zo(t, null, n) || ad(t, null, n);
  const r = Ql(e, t.schema);
  return r === "node" ? Zo(t, e, n) : r === "mark" ? ad(t, e, n) : !1;
}
function K0(t, e) {
  const { nodeExtensions: n } = Yl(e), r = n.find((s) => s.name === t);
  if (!r)
    return !1;
  const i = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, o = te(V(r, "group", i));
  return typeof o != "string" ? !1 : o.split(" ").includes("list");
}
function u2(t) {
  var e;
  const n = (e = t.type.createAndFill()) === null || e === void 0 ? void 0 : e.toJSON(), r = t.toJSON();
  return JSON.stringify(n) === JSON.stringify(r);
}
function f2(t, e, n) {
  var r;
  const { selection: i } = e;
  let o = null;
  if ($O(i) && (o = i.$cursor), o) {
    const a = (r = t.storedMarks) !== null && r !== void 0 ? r : o.marks();
    return !!n.isInSet(a) || !a.some((l) => l.type.excludes(n));
  }
  const { ranges: s } = i;
  return s.some(({ $from: a, $to: l }) => {
    let c = a.depth === 0 ? t.doc.inlineContent && t.doc.type.allowsMarkType(n) : !1;
    return t.doc.nodesBetween(a.pos, l.pos, (u, f, p) => {
      if (c)
        return !1;
      if (u.isInline) {
        const d = !p || p.type.allowsMarkType(n), h = !!n.isInSet(u.marks) || !u.marks.some((m) => m.type.excludes(n));
        c = d && h;
      }
      return !c;
    }), c;
  });
}
const p2 = (t, e = {}) => ({ tr: n, state: r, dispatch: i }) => {
  const { selection: o } = n, { empty: s, ranges: a } = o, l = gr(t, r.schema);
  if (i)
    if (s) {
      const c = Wh(r, l);
      n.addStoredMark(l.create({
        ...c,
        ...e
      }));
    } else
      a.forEach((c) => {
        const u = c.$from.pos, f = c.$to.pos;
        r.doc.nodesBetween(u, f, (p, d) => {
          const h = Math.max(d, u), m = Math.min(d + p.nodeSize, f);
          p.marks.find((y) => y.type === l) ? p.marks.forEach((y) => {
            l === y.type && n.addMark(h, m, l.create({
              ...y.attrs,
              ...e
            }));
          }) : n.addMark(h, m, l.create(e));
        });
      });
  return f2(r, n, l);
}, d2 = (t, e) => ({ tr: n }) => (n.setMeta(t, e), !0), h2 = (t, e = {}) => ({ state: n, dispatch: r, chain: i }) => {
  const o = Ve(t, n.schema);
  return o.isTextblock ? i().command(({ commands: s }) => W0(o, e)(n) ? !0 : s.clearNodes()).command(({ state: s }) => W0(o, e)(s, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, m2 = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, i = Ir(t, 0, r.content.size), o = X.create(r, i);
    e.setSelection(o);
  }
  return !0;
}, v2 = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, { from: i, to: o } = typeof t == "number" ? { from: t, to: t } : t, s = ie.atStart(r).from, a = ie.atEnd(r).to, l = Ir(i, s, a), c = Ir(o, s, a), u = ie.create(r, l, c);
    e.setSelection(u);
  }
  return !0;
}, g2 = (t) => ({ state: e, dispatch: n }) => {
  const r = Ve(t, e.schema);
  return QF(r)(e, n);
};
function X0(t, e) {
  const n = t.storedMarks || t.selection.$to.parentOffset && t.selection.$from.marks();
  if (n) {
    const r = n.filter((i) => e == null ? void 0 : e.includes(i.type.name));
    t.tr.ensureMarks(r);
  }
}
const y2 = ({ keepMarks: t = !0 } = {}) => ({ tr: e, state: n, dispatch: r, editor: i }) => {
  const { selection: o, doc: s } = e, { $from: a, $to: l } = o, c = i.extensionManager.attributes, u = Ia(c, a.node().type.name, a.node().attrs);
  if (o instanceof X && o.node.isBlock)
    return !a.parentOffset || !Ai(s, a.pos) ? !1 : (r && (t && X0(n, i.extensionManager.splittableMarks), e.split(a.pos).scrollIntoView()), !0);
  if (!a.parent.isBlock)
    return !1;
  if (r) {
    const f = l.parentOffset === l.parent.content.size;
    o instanceof ie && e.deleteSelection();
    const p = a.depth === 0 ? void 0 : r2(a.node(-1).contentMatchAt(a.indexAfter(-1)));
    let d = f && p ? [
      {
        type: p,
        attrs: u
      }
    ] : void 0, h = Ai(e.doc, e.mapping.map(a.pos), 1, d);
    if (!d && !h && Ai(e.doc, e.mapping.map(a.pos), 1, p ? [{ type: p }] : void 0) && (h = !0, d = p ? [
      {
        type: p,
        attrs: u
      }
    ] : void 0), h && (e.split(e.mapping.map(a.pos), 1, d), p && !f && !a.parentOffset && a.parent.type !== p)) {
      const m = e.mapping.map(a.before()), v = e.doc.resolve(m);
      a.node(-1).canReplaceWith(v.index(), v.index() + 1, p) && e.setNodeMarkup(e.mapping.map(a.before()), p);
    }
    t && X0(n, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return !0;
}, b2 = (t) => ({ tr: e, state: n, dispatch: r, editor: i }) => {
  var o;
  const s = Ve(t, n.schema), { $from: a, $to: l } = n.selection, c = n.selection.node;
  if (c && c.isBlock || a.depth < 2 || !a.sameParent(l))
    return !1;
  const u = a.node(-1);
  if (u.type !== s)
    return !1;
  const f = i.extensionManager.attributes;
  if (a.parent.content.size === 0 && a.node(-1).childCount === a.indexAfter(-1)) {
    if (a.depth === 2 || a.node(-3).type !== s || a.index(-2) !== a.node(-2).childCount - 1)
      return !1;
    if (r) {
      let v = I.empty;
      const y = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
      for (let b = a.depth - y; b >= a.depth - 3; b -= 1)
        v = I.from(a.node(b).copy(v));
      const C = a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3, O = Ia(f, a.node().type.name, a.node().attrs), N = ((o = s.contentMatch.defaultType) === null || o === void 0 ? void 0 : o.createAndFill(O)) || void 0;
      v = v.append(I.from(s.createAndFill(null, N) || void 0));
      const T = a.before(a.depth - (y - 1));
      e.replace(T, a.after(-C), new L(v, 4 - y, 0));
      let B = -1;
      e.doc.nodesBetween(T, e.doc.content.size, (b, re) => {
        if (B > -1)
          return !1;
        b.isTextblock && b.content.size === 0 && (B = re + 1);
      }), B > -1 && e.setSelection(ie.near(e.doc.resolve(B))), e.scrollIntoView();
    }
    return !0;
  }
  const p = l.pos === a.end() ? u.contentMatchAt(0).defaultType : null, d = Ia(f, u.type.name, u.attrs), h = Ia(f, a.node().type.name, a.node().attrs);
  e.delete(a.pos, l.pos);
  const m = p ? [
    { type: s, attrs: d },
    { type: p, attrs: h }
  ] : [{ type: s, attrs: d }];
  if (!Ai(e.doc, a.pos, 2))
    return !1;
  if (r) {
    const { selection: v, storedMarks: y } = n, { splittableMarks: C } = i.extensionManager, O = y || v.$to.parentOffset && v.$from.marks();
    if (e.split(a.pos, 2, m).scrollIntoView(), !O || !r)
      return !0;
    const N = O.filter((T) => C.includes(T.type.name));
    e.ensureMarks(N);
  }
  return !0;
}, zf = (t, e) => {
  const n = Hh((s) => s.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
  if (r === void 0)
    return !0;
  const i = t.doc.nodeAt(r);
  return n.node.type === (i == null ? void 0 : i.type) && hr(t.doc, n.pos) && t.join(n.pos), !0;
}, Vf = (t, e) => {
  const n = Hh((s) => s.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(n.start).after(n.depth);
  if (r === void 0)
    return !0;
  const i = t.doc.nodeAt(r);
  return n.node.type === (i == null ? void 0 : i.type) && hr(t.doc, r) && t.join(r), !0;
}, w2 = (t, e, n, r = {}) => ({ editor: i, tr: o, state: s, dispatch: a, chain: l, commands: c, can: u }) => {
  const { extensions: f, splittableMarks: p } = i.extensionManager, d = Ve(t, s.schema), h = Ve(e, s.schema), { selection: m, storedMarks: v } = s, { $from: y, $to: C } = m, O = y.blockRange(C), N = v || m.$to.parentOffset && m.$from.marks();
  if (!O)
    return !1;
  const T = Hh((B) => K0(B.type.name, f))(m);
  if (O.depth >= 1 && T && O.depth - T.depth <= 1) {
    if (T.node.type === d)
      return c.liftListItem(h);
    if (K0(T.node.type.name, f) && d.validContent(T.node.content) && a)
      return l().command(() => (o.setNodeMarkup(T.pos, d), !0)).command(() => zf(o, d)).command(() => Vf(o, d)).run();
  }
  return !n || !N || !a ? l().command(() => u().wrapInList(d, r) ? !0 : c.clearNodes()).wrapInList(d, r).command(() => zf(o, d)).command(() => Vf(o, d)).run() : l().command(() => {
    const B = u().wrapInList(d, r), b = N.filter((re) => p.includes(re.type.name));
    return o.ensureMarks(b), B ? !0 : c.clearNodes();
  }).wrapInList(d, r).command(() => zf(o, d)).command(() => Vf(o, d)).run();
}, S2 = (t, e = {}, n = {}) => ({ state: r, commands: i }) => {
  const { extendEmptyMarkRange: o = !1 } = n, s = gr(t, r.schema);
  return ad(r, s, e) ? i.unsetMark(s, { extendEmptyMarkRange: o }) : i.setMark(s, e);
}, x2 = (t, e, n = {}) => ({ state: r, commands: i }) => {
  const o = Ve(t, r.schema), s = Ve(e, r.schema);
  return Zo(r, o, n) ? i.setNode(s) : i.setNode(o, n);
}, O2 = (t, e = {}) => ({ state: n, commands: r }) => {
  const i = Ve(t, n.schema);
  return Zo(n, i, e) ? r.lift(i) : r.wrapIn(i, e);
}, E2 = () => ({ state: t, dispatch: e }) => {
  const n = t.plugins;
  for (let r = 0; r < n.length; r += 1) {
    const i = n[r];
    let o;
    if (i.spec.isInputRules && (o = i.getState(t))) {
      if (e) {
        const s = t.tr, a = o.transform;
        for (let l = a.steps.length - 1; l >= 0; l -= 1)
          s.step(a.steps[l].invert(a.docs[l]));
        if (o.text) {
          const l = s.doc.resolve(o.from).marks();
          s.replaceWith(o.from, o.to, t.schema.text(o.text, l));
        } else
          s.delete(o.from, o.to);
      }
      return !0;
    }
  }
  return !1;
}, C2 = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, { empty: r, ranges: i } = n;
  return r || e && i.forEach((o) => {
    t.removeMark(o.$from.pos, o.$to.pos);
  }), !0;
}, _2 = (t, e = {}) => ({ tr: n, state: r, dispatch: i }) => {
  var o;
  const { extendEmptyMarkRange: s = !1 } = e, { selection: a } = n, l = gr(t, r.schema), { $from: c, empty: u, ranges: f } = a;
  if (!i)
    return !0;
  if (u && s) {
    let { from: p, to: d } = a;
    const h = (o = c.marks().find((v) => v.type === l)) === null || o === void 0 ? void 0 : o.attrs, m = zh(c, l, h);
    m && (p = m.from, d = m.to), n.removeMark(p, d, l);
  } else
    f.forEach((p) => {
      n.removeMark(p.$from.pos, p.$to.pos, l);
    });
  return n.removeStoredMark(l), !0;
}, k2 = (t, e = {}) => ({ tr: n, state: r, dispatch: i }) => {
  let o = null, s = null;
  const a = Ql(typeof t == "string" ? t : t.name, r.schema);
  return a ? (a === "node" && (o = Ve(t, r.schema)), a === "mark" && (s = gr(t, r.schema)), i && n.selection.ranges.forEach((l) => {
    const c = l.$from.pos, u = l.$to.pos;
    r.doc.nodesBetween(c, u, (f, p) => {
      o && o === f.type && n.setNodeMarkup(p, void 0, {
        ...f.attrs,
        ...e
      }), s && f.marks.length && f.marks.forEach((d) => {
        if (s === d.type) {
          const h = Math.max(p, c), m = Math.min(p + f.nodeSize, u);
          n.addMark(h, m, s.create({
            ...d.attrs,
            ...e
          }));
        }
      });
    });
  }), !0) : !1;
}, N2 = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const i = Ve(t, n.schema);
  return qF(i, e)(n, r);
}, M2 = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const i = Ve(t, n.schema);
  return JF(i, e)(n, r);
};
var T2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: mL,
  clearContent: vL,
  clearNodes: gL,
  command: yL,
  createParagraphNear: bL,
  cut: wL,
  deleteCurrentNode: SL,
  deleteNode: xL,
  deleteRange: OL,
  deleteSelection: EL,
  enter: CL,
  exitCode: _L,
  extendMarkRange: NL,
  first: ML,
  focus: TL,
  forEach: $L,
  insertContent: IL,
  insertContentAt: AL,
  joinUp: RL,
  joinDown: FL,
  joinBackward: LL,
  joinForward: jL,
  joinItemBackward: BL,
  joinItemForward: zL,
  keyboardShortcut: WL,
  lift: HL,
  liftEmptyBlock: UL,
  liftListItem: GL,
  newlineInCode: qL,
  resetAttributes: JL,
  scrollIntoView: KL,
  selectAll: XL,
  selectNodeBackward: YL,
  selectNodeForward: ZL,
  selectParentNode: QL,
  selectTextblockEnd: e2,
  selectTextblockStart: t2,
  setContent: n2,
  setMark: p2,
  setMeta: d2,
  setNode: h2,
  setNodeSelection: m2,
  setTextSelection: v2,
  sinkListItem: g2,
  splitBlock: y2,
  splitListItem: b2,
  toggleList: w2,
  toggleMark: S2,
  toggleNode: x2,
  toggleWrap: O2,
  undoInputRule: E2,
  unsetAllMarks: C2,
  unsetMark: _2,
  updateAttributes: k2,
  wrapIn: N2,
  wrapInList: M2
});
const $2 = Lt.create({
  name: "commands",
  addCommands() {
    return {
      ...T2
    };
  }
}), I2 = Lt.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new Wt({
        key: new wn("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), P2 = Lt.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: t } = this;
    return [
      new Wt({
        key: new wn("focusEvents"),
        props: {
          handleDOMEvents: {
            focus: (e, n) => {
              t.isFocused = !0;
              const r = t.state.tr.setMeta("focus", { event: n }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
            blur: (e, n) => {
              t.isFocused = !1;
              const r = t.state.tr.setMeta("blur", { event: n }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
}), D2 = Lt.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const t = () => this.editor.commands.first(({ commands: s }) => [
      () => s.undoInputRule(),
      // maybe convert first text block node to default node
      () => s.command(({ tr: a }) => {
        const { selection: l, doc: c } = a, { empty: u, $anchor: f } = l, { pos: p, parent: d } = f, h = f.parent.isTextblock ? a.doc.resolve(p - 1) : f, m = h.parent.type.spec.isolating, v = f.pos - f.parentOffset, y = m && h.parent.childCount === 1 ? v === f.pos : ne.atStart(c).from === p;
        return !u || !y || !d.type.isTextblock || d.textContent.length ? !1 : s.clearNodes();
      }),
      () => s.deleteSelection(),
      () => s.joinBackward(),
      () => s.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: s }) => [
      () => s.deleteSelection(),
      () => s.deleteCurrentNode(),
      () => s.joinForward(),
      () => s.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: s }) => [
        () => s.newlineInCode(),
        () => s.createParagraphNear(),
        () => s.liftEmptyBlock(),
        () => s.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: t,
      "Mod-Backspace": t,
      "Shift-Backspace": t,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...r
    }, o = {
      ...r,
      "Ctrl-h": t,
      "Alt-Backspace": t,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return Vh() || PO() ? o : i;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new Wt({
        key: new wn("clearDocument"),
        appendTransaction: (t, e, n) => {
          if (!(t.some((h) => h.docChanged) && !e.doc.eq(n.doc)))
            return;
          const { empty: i, from: o, to: s } = e.selection, a = ne.atStart(e.doc).from, l = ne.atEnd(e.doc).to;
          if (i || !(o === a && s === l) || !(n.doc.textBetween(0, n.doc.content.size, " ", " ").length === 0))
            return;
          const f = n.tr, p = Kl({
            state: n,
            transaction: f
          }), { commands: d } = new Xl({
            editor: this.editor,
            state: p
          });
          if (d.clearNodes(), !!f.steps.length)
            return f;
        }
      })
    ];
  }
}), A2 = Lt.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new Wt({
        key: new wn("tabindex"),
        props: {
          attributes: this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
var R2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ClipboardTextSerializer: hL,
  Commands: $2,
  Editable: I2,
  FocusEvents: P2,
  Keymap: D2,
  Tabindex: A2
});
const F2 = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 1px !important;
  height: 1px !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
function L2(t, e, n) {
  const r = document.querySelector(`style[data-tiptap-style${n ? `-${n}` : ""}]`);
  if (r !== null)
    return r;
  const i = document.createElement("style");
  return e && i.setAttribute("nonce", e), i.setAttribute(`data-tiptap-style${n ? `-${n}` : ""}`, ""), i.innerHTML = t, document.getElementsByTagName("head")[0].appendChild(i), i;
}
let j2 = class extends eL {
  constructor(e = {}) {
    super(), this.isFocused = !1, this.extensionStorage = {}, this.options = {
      element: document.createElement("div"),
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      editorProps: {},
      parseOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), window.setTimeout(() => {
      this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }));
    }, 0);
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    this.options.injectCSS && document && (this.css = L2(F2, this.options.injectNonce));
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(e = {}) {
    this.options = {
      ...this.options,
      ...e
    }, !(!this.view || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(e, n = !0) {
    this.setOptions({ editable: e }), n && this.emit("update", { editor: this, transaction: this.state.tr });
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
  get state() {
    return this.view.state;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   */
  registerPlugin(e, n) {
    const r = kO(n) ? n(e, [...this.state.plugins]) : [...this.state.plugins, e], i = this.state.reconfigure({ plugins: r });
    this.view.updateState(i);
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKey The plugins name
   */
  unregisterPlugin(e) {
    if (this.isDestroyed)
      return;
    const n = typeof e == "string" ? `${e}$` : e.key, r = this.state.reconfigure({
      // @ts-ignore
      plugins: this.state.plugins.filter((i) => !i.key.startsWith(n))
    });
    this.view.updateState(r);
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    const n = [...this.options.enableCoreExtensions ? Object.values(R2) : [], ...this.options.extensions].filter((r) => ["extension", "node", "mark"].includes(r == null ? void 0 : r.type));
    this.extensionManager = new Mi(n, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new Xl({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView() {
    const e = DO(this.options.content, this.schema, this.options.parseOptions), n = IO(e, this.options.autofocus);
    this.view = new yF(this.options.element, {
      ...this.options.editorProps,
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: Ni.create({
        doc: e,
        selection: n || void 0
      })
    });
    const r = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(r), this.createNodeViews(), this.prependClass();
    const i = this.view.dom;
    i.editor = this;
  }
  /**
   * Creates all node views.
   */
  createNodeViews() {
    this.view.setProps({
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
   * Prepend class name to element.
   */
  prependClass() {
    this.view.dom.className = `tiptap ${this.view.dom.className}`;
  }
  captureTransaction(e) {
    this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
    const n = this.capturedTransaction;
    return this.capturedTransaction = null, n;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(e) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = e;
        return;
      }
      e.steps.forEach((s) => {
        var a;
        return (a = this.capturedTransaction) === null || a === void 0 ? void 0 : a.step(s);
      });
      return;
    }
    const n = this.state.apply(e), r = !this.state.selection.eq(n.selection);
    this.view.updateState(n), this.emit("transaction", {
      editor: this,
      transaction: e
    }), r && this.emit("selectionUpdate", {
      editor: this,
      transaction: e
    });
    const i = e.getMeta("focus"), o = e.getMeta("blur");
    i && this.emit("focus", {
      editor: this,
      event: i.event,
      transaction: e
    }), o && this.emit("blur", {
      editor: this,
      event: o.event,
      transaction: e
    }), !(!e.docChanged || e.getMeta("preventUpdate")) && this.emit("update", {
      editor: this,
      transaction: e
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(e) {
    return l2(this.state, e);
  }
  isActive(e, n) {
    const r = typeof e == "string" ? e : null, i = typeof e == "string" ? n : e;
    return c2(this.state, r, i);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return o2(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(e) {
    const { blockSeparator: n = `

`, textSerializers: r = {} } = e || {};
    return s2(this.state.doc, {
      blockSeparator: n,
      textSerializers: {
        ...TO(this.schema),
        ...r
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return u2(this.state.doc);
  }
  /**
   * Get the number of characters for the current document.
   *
   * @deprecated
   */
  getCharacterCount() {
    return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'), this.state.doc.content.size - 2;
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    this.emit("destroy"), this.view && this.view.destroy(), this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var e;
    return !(!((e = this.view) === null || e === void 0) && e.docView);
  }
};
function ol(t) {
  return new NO({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const i = te(t.getAttributes, void 0, r);
      if (i === !1 || i === null)
        return null;
      const { tr: o } = e, s = r[r.length - 1], a = r[0];
      if (s) {
        const l = a.search(/\S/), c = n.from + a.indexOf(s), u = c + s.length;
        if (AO(n.from, n.to, e.doc).filter((d) => d.mark.type.excluded.find((m) => m === t.type && m !== d.mark.type)).filter((d) => d.to > c).length)
          return null;
        u < n.to && o.delete(u, n.to), c > n.from && o.delete(n.from + l, c);
        const p = n.from + l + s.length;
        o.addMark(n.from + l, p, t.type.create(i || {})), o.removeStoredMark(t.type);
      }
    }
  });
}
function Y0(t) {
  return new NO({
    find: t.find,
    handler: ({ state: e, range: n, match: r, chain: i }) => {
      const o = te(t.getAttributes, void 0, r) || {}, s = e.tr.delete(n.from, n.to), l = s.doc.resolve(n.from).blockRange(), c = l && Nh(l, t.type, o);
      if (!c)
        return null;
      if (s.wrap(l, c), t.keepMarks && t.editor) {
        const { selection: f, storedMarks: p } = e, { splittableMarks: d } = t.editor.extensionManager, h = p || f.$to.parentOffset && f.$from.marks();
        if (h) {
          const m = h.filter((v) => d.includes(v.type.name));
          s.ensureMarks(m);
        }
      }
      if (t.keepAttributes) {
        const f = t.type.name === "bulletList" || t.type.name === "orderedList" ? "listItem" : "taskList";
        i().updateAttributes(f, o).run();
      }
      const u = s.doc.resolve(n.from - 1).nodeBefore;
      u && u.type === t.type && hr(s.doc, n.from - 1) && (!t.joinPredicate || t.joinPredicate(r, u)) && s.join(n.from - 1);
    }
  });
}
class Jr {
  constructor(e = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = te(V(this, "addOptions", {
      name: this.name
    }))), this.storage = te(V(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Jr(e);
  }
  configure(e = {}) {
    const n = this.extend();
    return n.options = Zl(this.options, e), n.storage = te(V(n, "addStorage", {
      name: n.name,
      options: n.options
    })), n;
  }
  extend(e = {}) {
    const n = new Jr(e);
    return n.parent = this, this.child = n, n.name = e.name ? e.name : n.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${n.name}".`), n.options = te(V(n, "addOptions", {
      name: n.name
    })), n.storage = te(V(n, "addStorage", {
      name: n.name,
      options: n.options
    })), n;
  }
  static handleExit({ editor: e, mark: n }) {
    const { tr: r } = e.state, i = e.state.selection.$from;
    if (i.pos === i.end()) {
      const s = i.marks();
      if (!!!s.find((c) => (c == null ? void 0 : c.type.name) === n.name))
        return !1;
      const l = s.find((c) => (c == null ? void 0 : c.type.name) === n.name);
      return l && r.removeStoredMark(l), r.insertText(" ", i.pos), e.view.dispatch(r), !0;
    }
    return !1;
  }
}
let ai = class ld {
  constructor(e = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = te(V(this, "addOptions", {
      name: this.name
    }))), this.storage = te(V(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new ld(e);
  }
  configure(e = {}) {
    const n = this.extend();
    return n.options = Zl(this.options, e), n.storage = te(V(n, "addStorage", {
      name: n.name,
      options: n.options
    })), n;
  }
  extend(e = {}) {
    const n = new ld(e);
    return n.parent = this, this.child = n, n.name = e.name ? e.name : n.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${n.name}".`), n.options = te(V(n, "addOptions", {
      name: n.name
    })), n.storage = te(V(n, "addStorage", {
      name: n.name,
      options: n.options
    })), n;
  }
};
function sl(t) {
  return new lL({
    find: t.find,
    handler: ({ state: e, range: n, match: r, pasteEvent: i }) => {
      const o = te(t.getAttributes, void 0, r, i);
      if (o === !1 || o === null)
        return null;
      const { tr: s } = e, a = r[r.length - 1], l = r[0];
      let c = n.to;
      if (a) {
        const u = l.search(/\S/), f = n.from + l.indexOf(a), p = f + a.length;
        if (AO(n.from, n.to, e.doc).filter((h) => h.mark.type.excluded.find((v) => v === t.type && v !== h.mark.type)).filter((h) => h.to > f).length)
          return null;
        p < n.to && s.delete(p, n.to), f > n.from && s.delete(n.from + u, f), c = n.from + u + a.length, s.addMark(n.from + u, c, t.type.create(o || {})), s.removeStoredMark(t.type);
      }
    }
  });
}
/*!
 * Vue.js v2.7.14
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
var Le = Object.freeze({}), K = Array.isArray;
function J(t) {
  return t == null;
}
function E(t) {
  return t != null;
}
function xe(t) {
  return t === !0;
}
function B2(t) {
  return t === !1;
}
function jn(t) {
  return typeof t == "string" || typeof t == "number" || // $flow-disable-line
  typeof t == "symbol" || typeof t == "boolean";
}
function oe(t) {
  return typeof t == "function";
}
function Ae(t) {
  return t !== null && typeof t == "object";
}
var ec = Object.prototype.toString;
function bs(t) {
  return ec.call(t).slice(8, -1);
}
function Ke(t) {
  return ec.call(t) === "[object Object]";
}
function RO(t) {
  return ec.call(t) === "[object RegExp]";
}
function FO(t) {
  var e = parseFloat(String(t));
  return e >= 0 && Math.floor(e) === e && isFinite(t);
}
function cd(t) {
  return E(t) && typeof t.then == "function" && typeof t.catch == "function";
}
function z2(t) {
  return t == null ? "" : Array.isArray(t) || Ke(t) && t.toString === ec ? JSON.stringify(t, null, 2) : String(t);
}
function Qo(t) {
  var e = parseFloat(t);
  return isNaN(e) ? t : e;
}
function Ct(t, e) {
  for (var n = /* @__PURE__ */ Object.create(null), r = t.split(","), i = 0; i < r.length; i++)
    n[r[i]] = !0;
  return e ? function(o) {
    return n[o.toLowerCase()];
  } : function(o) {
    return n[o];
  };
}
var V2 = Ct("slot,component", !0), LO = Ct("key,ref,slot,slot-scope,is");
function yr(t, e) {
  var n = t.length;
  if (n) {
    if (e === t[n - 1]) {
      t.length = n - 1;
      return;
    }
    var r = t.indexOf(e);
    if (r > -1)
      return t.splice(r, 1);
  }
}
var W2 = Object.prototype.hasOwnProperty;
function Be(t, e) {
  return W2.call(t, e);
}
function li(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(r) {
    var i = e[r];
    return i || (e[r] = t(r));
  };
}
var H2 = /-(\w)/g, Kr = li(function(t) {
  return t.replace(H2, function(e, n) {
    return n ? n.toUpperCase() : "";
  });
}), jO = li(function(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}), U2 = /\B([A-Z])/g, ci = li(function(t) {
  return t.replace(U2, "-$1").toLowerCase();
});
function G2(t, e) {
  function n(r) {
    var i = arguments.length;
    return i ? i > 1 ? t.apply(e, arguments) : t.call(e, r) : t.call(e);
  }
  return n._length = t.length, n;
}
function q2(t, e) {
  return t.bind(e);
}
var BO = Function.prototype.bind ? q2 : G2;
function ud(t, e) {
  e = e || 0;
  for (var n = t.length - e, r = new Array(n); n--; )
    r[n] = t[n + e];
  return r;
}
function me(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function zO(t) {
  for (var e = {}, n = 0; n < t.length; n++)
    t[n] && me(e, t[n]);
  return e;
}
function he(t, e, n) {
}
var da = function(t, e, n) {
  return !1;
}, VO = function(t) {
  return t;
};
function Xr(t, e) {
  if (t === e)
    return !0;
  var n = Ae(t), r = Ae(e);
  if (n && r)
    try {
      var i = Array.isArray(t), o = Array.isArray(e);
      if (i && o)
        return t.length === e.length && t.every(function(l, c) {
          return Xr(l, e[c]);
        });
      if (t instanceof Date && e instanceof Date)
        return t.getTime() === e.getTime();
      if (!i && !o) {
        var s = Object.keys(t), a = Object.keys(e);
        return s.length === a.length && s.every(function(l) {
          return Xr(t[l], e[l]);
        });
      } else
        return !1;
    } catch {
      return !1;
    }
  else
    return !n && !r ? String(t) === String(e) : !1;
}
function WO(t, e) {
  for (var n = 0; n < t.length; n++)
    if (Xr(t[n], e))
      return n;
  return -1;
}
function al(t) {
  var e = !1;
  return function() {
    e || (e = !0, t.apply(this, arguments));
  };
}
function fd(t, e) {
  return t === e ? t === 0 && 1 / t !== 1 / e : t === t || e === e;
}
var Z0 = "data-server-rendered", tc = ["component", "directive", "filter"], HO = [
  "beforeCreate",
  "created",
  "beforeMount",
  "mounted",
  "beforeUpdate",
  "updated",
  "beforeDestroy",
  "destroyed",
  "activated",
  "deactivated",
  "errorCaptured",
  "serverPrefetch",
  "renderTracked",
  "renderTriggered"
], ue = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: /* @__PURE__ */ Object.create(null),
  /**
   * Whether to suppress warnings.
   */
  silent: !1,
  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== "production",
  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== "production",
  /**
   * Whether to record perf
   */
  performance: !1,
  /**
   * Error handler for watcher errors
   */
  errorHandler: null,
  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,
  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],
  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: /* @__PURE__ */ Object.create(null),
  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: da,
  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: da,
  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: da,
  /**
   * Get the namespace of an element
   */
  getTagNamespace: he,
  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: VO,
  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: da,
  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: !0,
  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: HO
}, UO = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
function Uh(t) {
  var e = (t + "").charCodeAt(0);
  return e === 36 || e === 95;
}
function _e(t, e, n, r) {
  Object.defineProperty(t, e, {
    value: n,
    enumerable: !!r,
    writable: !0,
    configurable: !0
  });
}
var J2 = new RegExp("[^".concat(UO.source, ".$_\\d]"));
function K2(t) {
  if (!J2.test(t)) {
    var e = t.split(".");
    return function(n) {
      for (var r = 0; r < e.length; r++) {
        if (!n)
          return;
        n = n[e[r]];
      }
      return n;
    };
  }
}
var X2 = "__proto__" in {}, dt = typeof window < "u", jt = dt && window.navigator.userAgent.toLowerCase(), so = jt && /msie|trident/.test(jt), ao = jt && jt.indexOf("msie 9.0") > 0, GO = jt && jt.indexOf("edge/") > 0;
jt && jt.indexOf("android") > 0;
var Y2 = jt && /iphone|ipad|ipod|ios/.test(jt), Q0 = jt && jt.match(/firefox\/(\d+)/), pd = {}.watch, qO = !1;
if (dt)
  try {
    var e1 = {};
    Object.defineProperty(e1, "passive", {
      get: function() {
        qO = !0;
      }
    }), window.addEventListener("test-passive", null, e1);
  } catch {
  }
var ha, br = function() {
  return ha === void 0 && (!dt && typeof global < "u" ? ha = global.process && global.process.env.VUE_ENV === "server" : ha = !1), ha;
}, ll = dt && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
function Br(t) {
  return typeof t == "function" && /native code/.test(t.toString());
}
var ws = typeof Symbol < "u" && Br(Symbol) && typeof Reflect < "u" && Br(Reflect.ownKeys), es;
typeof Set < "u" && Br(Set) ? es = Set : es = /** @class */
function() {
  function t() {
    this.set = /* @__PURE__ */ Object.create(null);
  }
  return t.prototype.has = function(e) {
    return this.set[e] === !0;
  }, t.prototype.add = function(e) {
    this.set[e] = !0;
  }, t.prototype.clear = function() {
    this.set = /* @__PURE__ */ Object.create(null);
  }, t;
}();
var we = null;
function Z2() {
  return we && { proxy: we };
}
function ir(t) {
  t === void 0 && (t = null), t || we && we._scope.off(), we = t, t && t._scope.on();
}
var bt = (
  /** @class */
  function() {
    function t(e, n, r, i, o, s, a, l) {
      this.tag = e, this.data = n, this.children = r, this.text = i, this.elm = o, this.ns = void 0, this.context = s, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = n && n.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = l, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
    }
    return Object.defineProperty(t.prototype, "child", {
      // DEPRECATED: alias for componentInstance for backwards compat.
      /* istanbul ignore next */
      get: function() {
        return this.componentInstance;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }()
), zr = function(t) {
  t === void 0 && (t = "");
  var e = new bt();
  return e.text = t, e.isComment = !0, e;
};
function Ti(t) {
  return new bt(void 0, void 0, void 0, String(t));
}
function dd(t) {
  var e = new bt(
    t.tag,
    t.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    t.children && t.children.slice(),
    t.text,
    t.elm,
    t.context,
    t.componentOptions,
    t.asyncFactory
  );
  return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, e.fnContext = t.fnContext, e.fnOptions = t.fnOptions, e.fnScopeId = t.fnScopeId, e.asyncMeta = t.asyncMeta, e.isCloned = !0, e;
}
var or = function() {
  return or = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, or.apply(this, arguments);
}, Q2 = 0, Pa = [], ej = function() {
  for (var t = 0; t < Pa.length; t++) {
    var e = Pa[t];
    e.subs = e.subs.filter(function(n) {
      return n;
    }), e._pending = !1;
  }
  Pa.length = 0;
}, rt = (
  /** @class */
  function() {
    function t() {
      this._pending = !1, this.id = Q2++, this.subs = [];
    }
    return t.prototype.addSub = function(e) {
      this.subs.push(e);
    }, t.prototype.removeSub = function(e) {
      this.subs[this.subs.indexOf(e)] = null, this._pending || (this._pending = !0, Pa.push(this));
    }, t.prototype.depend = function(e) {
      t.target && (t.target.addDep(this), process.env.NODE_ENV !== "production" && e && t.target.onTrack && t.target.onTrack(or({ effect: t.target }, e)));
    }, t.prototype.notify = function(e) {
      var n = this.subs.filter(function(s) {
        return s;
      });
      process.env.NODE_ENV !== "production" && !ue.async && n.sort(function(s, a) {
        return s.id - a.id;
      });
      for (var r = 0, i = n.length; r < i; r++) {
        var o = n[r];
        process.env.NODE_ENV !== "production" && e && o.onTrigger && o.onTrigger(or({ effect: n[r] }, e)), o.update();
      }
    }, t;
  }()
);
rt.target = null;
var Da = [];
function lo(t) {
  Da.push(t), rt.target = t;
}
function co() {
  Da.pop(), rt.target = Da[Da.length - 1];
}
var JO = Array.prototype, cl = Object.create(JO), tj = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse"
];
tj.forEach(function(t) {
  var e = JO[t];
  _e(cl, t, function() {
    for (var r = [], i = 0; i < arguments.length; i++)
      r[i] = arguments[i];
    var o = e.apply(this, r), s = this.__ob__, a;
    switch (t) {
      case "push":
      case "unshift":
        a = r;
        break;
      case "splice":
        a = r.slice(2);
        break;
    }
    return a && s.observeArray(a), process.env.NODE_ENV !== "production" ? s.dep.notify({
      type: "array mutation",
      target: this,
      key: t
    }) : s.dep.notify(), o;
  });
});
var t1 = Object.getOwnPropertyNames(cl), KO = {}, Gh = !0;
function sr(t) {
  Gh = t;
}
var nj = {
  notify: he,
  depend: he,
  addSub: he,
  removeSub: he
}, n1 = (
  /** @class */
  function() {
    function t(e, n, r) {
      if (n === void 0 && (n = !1), r === void 0 && (r = !1), this.value = e, this.shallow = n, this.mock = r, this.dep = r ? nj : new rt(), this.vmCount = 0, _e(e, "__ob__", this), K(e)) {
        if (!r)
          if (X2)
            e.__proto__ = cl;
          else
            for (var i = 0, o = t1.length; i < o; i++) {
              var s = t1[i];
              _e(e, s, cl[s]);
            }
        n || this.observeArray(e);
      } else
        for (var a = Object.keys(e), i = 0; i < a.length; i++) {
          var s = a[i];
          Dt(e, s, KO, void 0, n, r);
        }
    }
    return t.prototype.observeArray = function(e) {
      for (var n = 0, r = e.length; n < r; n++)
        Dn(e[n], !1, this.mock);
    }, t;
  }()
);
function Dn(t, e, n) {
  if (t && Be(t, "__ob__") && t.__ob__ instanceof n1)
    return t.__ob__;
  if (Gh && (n || !br()) && (K(t) || Ke(t)) && Object.isExtensible(t) && !t.__v_skip && !Je(t) && !(t instanceof bt))
    return new n1(t, e, n);
}
function Dt(t, e, n, r, i, o) {
  var s = new rt(), a = Object.getOwnPropertyDescriptor(t, e);
  if (!(a && a.configurable === !1)) {
    var l = a && a.get, c = a && a.set;
    (!l || c) && (n === KO || arguments.length === 2) && (n = t[e]);
    var u = !i && Dn(n, !1, o);
    return Object.defineProperty(t, e, {
      enumerable: !0,
      configurable: !0,
      get: function() {
        var p = l ? l.call(t) : n;
        return rt.target && (process.env.NODE_ENV !== "production" ? s.depend({
          target: t,
          type: "get",
          key: e
        }) : s.depend(), u && (u.dep.depend(), K(p) && XO(p))), Je(p) && !i ? p.value : p;
      },
      set: function(p) {
        var d = l ? l.call(t) : n;
        if (fd(d, p)) {
          if (process.env.NODE_ENV !== "production" && r && r(), c)
            c.call(t, p);
          else {
            if (l)
              return;
            if (!i && Je(d) && !Je(p)) {
              d.value = p;
              return;
            } else
              n = p;
          }
          u = !i && Dn(p, !1, o), process.env.NODE_ENV !== "production" ? s.notify({
            type: "set",
            target: t,
            key: e,
            newValue: p,
            oldValue: d
          }) : s.notify();
        }
      }
    }), s;
  }
}
function nc(t, e, n) {
  if (process.env.NODE_ENV !== "production" && (J(t) || jn(t)) && M("Cannot set reactive property on undefined, null, or primitive value: ".concat(t)), ui(t)) {
    process.env.NODE_ENV !== "production" && M('Set operation on key "'.concat(e, '" failed: target is readonly.'));
    return;
  }
  var r = t.__ob__;
  return K(t) && FO(e) ? (t.length = Math.max(t.length, e), t.splice(e, 1, n), r && !r.shallow && r.mock && Dn(n, !1, !0), n) : e in t && !(e in Object.prototype) ? (t[e] = n, n) : t._isVue || r && r.vmCount ? (process.env.NODE_ENV !== "production" && M("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."), n) : r ? (Dt(r.value, e, n, void 0, r.shallow, r.mock), process.env.NODE_ENV !== "production" ? r.dep.notify({
    type: "add",
    target: t,
    key: e,
    newValue: n,
    oldValue: void 0
  }) : r.dep.notify(), n) : (t[e] = n, n);
}
function qh(t, e) {
  if (process.env.NODE_ENV !== "production" && (J(t) || jn(t)) && M("Cannot delete reactive property on undefined, null, or primitive value: ".concat(t)), K(t) && FO(e)) {
    t.splice(e, 1);
    return;
  }
  var n = t.__ob__;
  if (t._isVue || n && n.vmCount) {
    process.env.NODE_ENV !== "production" && M("Avoid deleting properties on a Vue instance or its root $data - just set it to null.");
    return;
  }
  if (ui(t)) {
    process.env.NODE_ENV !== "production" && M('Delete operation on key "'.concat(e, '" failed: target is readonly.'));
    return;
  }
  Be(t, e) && (delete t[e], n && (process.env.NODE_ENV !== "production" ? n.dep.notify({
    type: "delete",
    target: t,
    key: e
  }) : n.dep.notify()));
}
function XO(t) {
  for (var e = void 0, n = 0, r = t.length; n < r; n++)
    e = t[n], e && e.__ob__ && e.__ob__.dep.depend(), K(e) && XO(e);
}
function rj(t) {
  return YO(t, !1), t;
}
function Jh(t) {
  return YO(t, !0), _e(t, "__v_isShallow", !0), t;
}
function YO(t, e) {
  if (!ui(t)) {
    if (process.env.NODE_ENV !== "production") {
      K(t) && M("Avoid using Array as root value for ".concat(e ? "shallowReactive()" : "reactive()", " as it cannot be tracked in watch() or watchEffect(). Use ").concat(e ? "shallowRef()" : "ref()", " instead. This is a Vue-2-only limitation."));
      var n = t && t.__ob__;
      n && n.shallow !== e && M("Target is already a ".concat(n.shallow ? "" : "non-", "shallow reactive object, and cannot be converted to ").concat(e ? "" : "non-", "shallow."));
    }
    var r = Dn(
      t,
      e,
      br()
      /* ssr mock reactivity */
    );
    process.env.NODE_ENV !== "production" && !r && ((t == null || jn(t)) && M("value cannot be made reactive: ".concat(String(t))), QO(t) && M("Vue 2 does not support reactive collection types such as Map or Set."));
  }
}
function tr(t) {
  return ui(t) ? tr(t.__v_raw) : !!(t && t.__ob__);
}
function ul(t) {
  return !!(t && t.__v_isShallow);
}
function ui(t) {
  return !!(t && t.__v_isReadonly);
}
function ij(t) {
  return tr(t) || ui(t);
}
function ZO(t) {
  var e = t && t.__v_raw;
  return e ? ZO(e) : t;
}
function oj(t) {
  return Object.isExtensible(t) && _e(t, "__v_skip", !0), t;
}
function QO(t) {
  var e = bs(t);
  return e === "Map" || e === "WeakMap" || e === "Set" || e === "WeakSet";
}
var Ss = "__v_isRef";
function Je(t) {
  return !!(t && t.__v_isRef === !0);
}
function sj(t) {
  return eE(t, !1);
}
function aj(t) {
  return eE(t, !0);
}
function eE(t, e) {
  if (Je(t))
    return t;
  var n = {};
  return _e(n, Ss, !0), _e(n, "__v_isShallow", e), _e(n, "dep", Dt(n, "value", t, null, e, br())), n;
}
function lj(t) {
  process.env.NODE_ENV !== "production" && !t.dep && M("received object is not a triggerable ref."), process.env.NODE_ENV !== "production" ? t.dep && t.dep.notify({
    type: "set",
    target: t,
    key: "value"
  }) : t.dep && t.dep.notify();
}
function cj(t) {
  return Je(t) ? t.value : t;
}
function uj(t) {
  if (tr(t))
    return t;
  for (var e = {}, n = Object.keys(t), r = 0; r < n.length; r++)
    fl(e, t, n[r]);
  return e;
}
function fl(t, e, n) {
  Object.defineProperty(t, n, {
    enumerable: !0,
    configurable: !0,
    get: function() {
      var r = e[n];
      if (Je(r))
        return r.value;
      var i = r && r.__ob__;
      return i && i.dep.depend(), r;
    },
    set: function(r) {
      var i = e[n];
      Je(i) && !Je(r) ? i.value = r : e[n] = r;
    }
  });
}
function fj(t) {
  var e = new rt(), n = t(function() {
    process.env.NODE_ENV !== "production" ? e.depend({
      target: o,
      type: "get",
      key: "value"
    }) : e.depend();
  }, function() {
    process.env.NODE_ENV !== "production" ? e.notify({
      target: o,
      type: "set",
      key: "value"
    }) : e.notify();
  }), r = n.get, i = n.set, o = {
    get value() {
      return r();
    },
    set value(s) {
      i(s);
    }
  };
  return _e(o, Ss, !0), o;
}
function pj(t) {
  process.env.NODE_ENV !== "production" && !tr(t) && M("toRefs() expects a reactive object but received a plain one.");
  var e = K(t) ? new Array(t.length) : {};
  for (var n in t)
    e[n] = tE(t, n);
  return e;
}
function tE(t, e, n) {
  var r = t[e];
  if (Je(r))
    return r;
  var i = {
    get value() {
      var o = t[e];
      return o === void 0 ? n : o;
    },
    set value(o) {
      t[e] = o;
    }
  };
  return _e(i, Ss, !0), i;
}
var dj = "__v_rawToReadonly", hj = "__v_rawToShallowReadonly";
function nE(t) {
  return rE(t, !1);
}
function rE(t, e) {
  if (!Ke(t))
    return process.env.NODE_ENV !== "production" && (K(t) ? M("Vue 2 does not support readonly arrays.") : QO(t) ? M("Vue 2 does not support readonly collection types such as Map or Set.") : M("value cannot be made readonly: ".concat(typeof t))), t;
  if (process.env.NODE_ENV !== "production" && !Object.isExtensible(t) && M("Vue 2 does not support creating readonly proxy for non-extensible object."), ui(t))
    return t;
  var n = e ? hj : dj, r = t[n];
  if (r)
    return r;
  var i = Object.create(Object.getPrototypeOf(t));
  _e(t, n, i), _e(i, "__v_isReadonly", !0), _e(i, "__v_raw", t), Je(t) && _e(i, Ss, !0), (e || ul(t)) && _e(i, "__v_isShallow", !0);
  for (var o = Object.keys(t), s = 0; s < o.length; s++)
    mj(i, t, o[s], e);
  return i;
}
function mj(t, e, n, r) {
  Object.defineProperty(t, n, {
    enumerable: !0,
    configurable: !0,
    get: function() {
      var i = e[n];
      return r || !Ke(i) ? i : nE(i);
    },
    set: function() {
      process.env.NODE_ENV !== "production" && M('Set operation on key "'.concat(n, '" failed: target is readonly.'));
    }
  });
}
function vj(t) {
  return rE(t, !0);
}
function gj(t, e) {
  var n, r, i = oe(t);
  i ? (n = t, r = process.env.NODE_ENV !== "production" ? function() {
    M("Write operation failed: computed value is readonly");
  } : he) : (n = t.get, r = t.set);
  var o = br() ? null : new xs(we, n, he, { lazy: !0 });
  process.env.NODE_ENV !== "production" && o && e && (o.onTrack = e.onTrack, o.onTrigger = e.onTrigger);
  var s = {
    // some libs rely on the presence effect for checking computed refs
    // from normal refs, but the implementation doesn't matter
    effect: o,
    get value() {
      return o ? (o.dirty && o.evaluate(), rt.target && (process.env.NODE_ENV !== "production" && rt.target.onTrack && rt.target.onTrack({
        effect: rt.target,
        target: s,
        type: "get",
        key: "value"
      }), o.depend()), o.value) : n();
    },
    set value(a) {
      r(a);
    }
  };
  return _e(s, Ss, !0), _e(s, "__v_isReadonly", i), s;
}
var rc = "watcher", r1 = "".concat(rc, " callback"), i1 = "".concat(rc, " getter"), yj = "".concat(rc, " cleanup");
function bj(t, e) {
  return ic(t, null, e);
}
function iE(t, e) {
  return ic(t, null, process.env.NODE_ENV !== "production" ? or(or({}, e), { flush: "post" }) : { flush: "post" });
}
function wj(t, e) {
  return ic(t, null, process.env.NODE_ENV !== "production" ? or(or({}, e), { flush: "sync" }) : { flush: "sync" });
}
var o1 = {};
function Sj(t, e, n) {
  return process.env.NODE_ENV !== "production" && typeof e != "function" && M("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), ic(t, e, n);
}
function ic(t, e, n) {
  var r = n === void 0 ? Le : n, i = r.immediate, o = r.deep, s = r.flush, a = s === void 0 ? "pre" : s, l = r.onTrack, c = r.onTrigger;
  process.env.NODE_ENV !== "production" && !e && (i !== void 0 && M('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && M('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  var u = function(T) {
    M("Invalid watch source: ".concat(T, ". A watch source can only be a getter/effect ") + "function, a ref, a reactive object, or an array of these types.");
  }, f = we, p = function(T, B, b) {
    return b === void 0 && (b = null), An(T, null, b, f, B);
  }, d, h = !1, m = !1;
  if (Je(t) ? (d = function() {
    return t.value;
  }, h = ul(t)) : tr(t) ? (d = function() {
    return t.__ob__.dep.depend(), t;
  }, o = !0) : K(t) ? (m = !0, h = t.some(function(T) {
    return tr(T) || ul(T);
  }), d = function() {
    return t.map(function(T) {
      if (Je(T))
        return T.value;
      if (tr(T))
        return Gi(T);
      if (oe(T))
        return p(T, i1);
      process.env.NODE_ENV !== "production" && u(T);
    });
  }) : oe(t) ? e ? d = function() {
    return p(t, i1);
  } : d = function() {
    if (!(f && f._isDestroyed))
      return y && y(), p(t, rc, [C]);
  } : (d = he, process.env.NODE_ENV !== "production" && u(t)), e && o) {
    var v = d;
    d = function() {
      return Gi(v());
    };
  }
  var y, C = function(T) {
    y = O.onStop = function() {
      p(T, yj);
    };
  };
  if (br())
    return C = he, e ? i && p(e, r1, [
      d(),
      m ? [] : void 0,
      C
    ]) : d(), he;
  var O = new xs(we, d, he, {
    lazy: !0
  });
  O.noRecurse = !e;
  var N = m ? [] : o1;
  return O.run = function() {
    if (O.active)
      if (e) {
        var T = O.get();
        (o || h || (m ? T.some(function(B, b) {
          return fd(B, N[b]);
        }) : fd(T, N))) && (y && y(), p(e, r1, [
          T,
          // pass undefined as the old value when it's changed for the first time
          N === o1 ? void 0 : N,
          C
        ]), N = T);
      } else
        O.get();
  }, a === "sync" ? O.update = O.run : a === "post" ? (O.post = !0, O.update = function() {
    return Sd(O);
  }) : O.update = function() {
    if (f && f === we && !f._isMounted) {
      var T = f._preWatchers || (f._preWatchers = []);
      T.indexOf(O) < 0 && T.push(O);
    } else
      Sd(O);
  }, process.env.NODE_ENV !== "production" && (O.onTrack = l, O.onTrigger = c), e ? i ? O.run() : N = O.get() : a === "post" && f ? f.$once("hook:mounted", function() {
    return O.get();
  }) : O.get(), function() {
    O.teardown();
  };
}
var Qe, Kh = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = !1), this.detached = e, this.active = !0, this.effects = [], this.cleanups = [], this.parent = Qe, !e && Qe && (this.index = (Qe.scopes || (Qe.scopes = [])).push(this) - 1);
    }
    return t.prototype.run = function(e) {
      if (this.active) {
        var n = Qe;
        try {
          return Qe = this, e();
        } finally {
          Qe = n;
        }
      } else
        process.env.NODE_ENV !== "production" && M("cannot run an inactive effect scope.");
    }, t.prototype.on = function() {
      Qe = this;
    }, t.prototype.off = function() {
      Qe = this.parent;
    }, t.prototype.stop = function(e) {
      if (this.active) {
        var n = void 0, r = void 0;
        for (n = 0, r = this.effects.length; n < r; n++)
          this.effects[n].teardown();
        for (n = 0, r = this.cleanups.length; n < r; n++)
          this.cleanups[n]();
        if (this.scopes)
          for (n = 0, r = this.scopes.length; n < r; n++)
            this.scopes[n].stop(!0);
        if (!this.detached && this.parent && !e) {
          var i = this.parent.scopes.pop();
          i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
        }
        this.parent = void 0, this.active = !1;
      }
    }, t;
  }()
);
function xj(t) {
  return new Kh(t);
}
function Oj(t, e) {
  e === void 0 && (e = Qe), e && e.active && e.effects.push(t);
}
function Ej() {
  return Qe;
}
function Cj(t) {
  Qe ? Qe.cleanups.push(t) : process.env.NODE_ENV !== "production" && M("onScopeDispose() is called when there is no active effect scope to be associated with.");
}
function _j(t, e) {
  we ? oE(we)[t] = e : process.env.NODE_ENV !== "production" && M("provide() can only be used inside setup().");
}
function oE(t) {
  var e = t._provided, n = t.$parent && t.$parent._provided;
  return n === e ? t._provided = Object.create(n) : e;
}
function kj(t, e, n) {
  n === void 0 && (n = !1);
  var r = we;
  if (r) {
    var i = r.$parent && r.$parent._provided;
    if (i && t in i)
      return i[t];
    if (arguments.length > 1)
      return n && oe(e) ? e.call(r) : e;
    process.env.NODE_ENV !== "production" && M('injection "'.concat(String(t), '" not found.'));
  } else
    process.env.NODE_ENV !== "production" && M("inject() can only be used inside setup() or functional components.");
}
var s1 = li(function(t) {
  var e = t.charAt(0) === "&";
  t = e ? t.slice(1) : t;
  var n = t.charAt(0) === "~";
  t = n ? t.slice(1) : t;
  var r = t.charAt(0) === "!";
  return t = r ? t.slice(1) : t, {
    name: t,
    once: n,
    capture: r,
    passive: e
  };
});
function hd(t, e) {
  function n() {
    var r = n.fns;
    if (K(r))
      for (var i = r.slice(), o = 0; o < i.length; o++)
        An(i[o], null, arguments, e, "v-on handler");
    else
      return An(r, null, arguments, e, "v-on handler");
  }
  return n.fns = t, n;
}
function sE(t, e, n, r, i, o) {
  var s, a, l, c;
  for (s in t)
    a = t[s], l = e[s], c = s1(s), J(a) ? process.env.NODE_ENV !== "production" && M('Invalid handler for event "'.concat(c.name, '": got ') + String(a), o) : J(l) ? (J(a.fns) && (a = t[s] = hd(a, o)), xe(c.once) && (a = t[s] = i(c.name, a, c.capture)), n(c.name, a, c.capture, c.passive, c.params)) : a !== l && (l.fns = a, t[s] = l);
  for (s in e)
    J(t[s]) && (c = s1(s), r(c.name, e[s], c.capture));
}
function Jn(t, e, n) {
  t instanceof bt && (t = t.data.hook || (t.data.hook = {}));
  var r, i = t[e];
  function o() {
    n.apply(this, arguments), yr(r.fns, o);
  }
  J(i) ? r = hd([o]) : E(i.fns) && xe(i.merged) ? (r = i, r.fns.push(o)) : r = hd([i, o]), r.merged = !0, t[e] = r;
}
function Nj(t, e, n) {
  var r = e.options.props;
  if (!J(r)) {
    var i = {}, o = t.attrs, s = t.props;
    if (E(o) || E(s))
      for (var a in r) {
        var l = ci(a);
        if (process.env.NODE_ENV !== "production") {
          var c = a.toLowerCase();
          a !== c && o && Be(o, c) && im('Prop "'.concat(c, '" is passed to component ') + "".concat(Pr(
            // @ts-expect-error tag is string
            n || e
          ), ", but the declared prop name is") + ' "'.concat(a, '". ') + "Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM " + 'templates. You should probably use "'.concat(l, '" instead of "').concat(a, '".'));
        }
        a1(i, s, a, l, !0) || a1(i, o, a, l, !1);
      }
    return i;
  }
}
function a1(t, e, n, r, i) {
  if (E(e)) {
    if (Be(e, n))
      return t[n] = e[n], i || delete e[n], !0;
    if (Be(e, r))
      return t[n] = e[r], i || delete e[r], !0;
  }
  return !1;
}
function Mj(t) {
  for (var e = 0; e < t.length; e++)
    if (K(t[e]))
      return Array.prototype.concat.apply([], t);
  return t;
}
function Xh(t) {
  return jn(t) ? [Ti(t)] : K(t) ? aE(t) : void 0;
}
function _o(t) {
  return E(t) && E(t.text) && B2(t.isComment);
}
function aE(t, e) {
  var n = [], r, i, o, s;
  for (r = 0; r < t.length; r++)
    i = t[r], !(J(i) || typeof i == "boolean") && (o = n.length - 1, s = n[o], K(i) ? i.length > 0 && (i = aE(i, "".concat(e || "", "_").concat(r)), _o(i[0]) && _o(s) && (n[o] = Ti(s.text + i[0].text), i.shift()), n.push.apply(n, i)) : jn(i) ? _o(s) ? n[o] = Ti(s.text + i) : i !== "" && n.push(Ti(i)) : _o(i) && _o(s) ? n[o] = Ti(s.text + i.text) : (xe(t._isVList) && E(i.tag) && J(i.key) && E(e) && (i.key = "__vlist".concat(e, "_").concat(r, "__")), n.push(i)));
  return n;
}
function Tj(t, e) {
  var n = null, r, i, o, s;
  if (K(t) || typeof t == "string")
    for (n = new Array(t.length), r = 0, i = t.length; r < i; r++)
      n[r] = e(t[r], r);
  else if (typeof t == "number")
    for (n = new Array(t), r = 0; r < t; r++)
      n[r] = e(r + 1, r);
  else if (Ae(t))
    if (ws && t[Symbol.iterator]) {
      n = [];
      for (var a = t[Symbol.iterator](), l = a.next(); !l.done; )
        n.push(e(l.value, n.length)), l = a.next();
    } else
      for (o = Object.keys(t), n = new Array(o.length), r = 0, i = o.length; r < i; r++)
        s = o[r], n[r] = e(t[s], s, r);
  return E(n) || (n = []), n._isVList = !0, n;
}
function $j(t, e, n, r) {
  var i = this.$scopedSlots[t], o;
  i ? (n = n || {}, r && (process.env.NODE_ENV !== "production" && !Ae(r) && M("slot v-bind without argument expects an Object", this), n = me(me({}, r), n)), o = i(n) || (oe(e) ? e() : e)) : o = this.$slots[t] || (oe(e) ? e() : e);
  var s = n && n.slot;
  return s ? this.$createElement("template", { slot: s }, o) : o;
}
function Ij(t) {
  return hl(this.$options, "filters", t, !0) || VO;
}
function l1(t, e) {
  return K(t) ? t.indexOf(e) === -1 : t !== e;
}
function Pj(t, e, n, r, i) {
  var o = ue.keyCodes[e] || n;
  return i && r && !ue.keyCodes[e] ? l1(i, r) : o ? l1(o, t) : r ? ci(r) !== e : t === void 0;
}
function Dj(t, e, n, r, i) {
  if (n)
    if (!Ae(n))
      process.env.NODE_ENV !== "production" && M("v-bind without argument expects an Object or Array value", this);
    else {
      K(n) && (n = zO(n));
      var o = void 0, s = function(l) {
        if (l === "class" || l === "style" || LO(l))
          o = t;
        else {
          var c = t.attrs && t.attrs.type;
          o = r || ue.mustUseProp(e, c, l) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
        }
        var u = Kr(l), f = ci(l);
        if (!(u in o) && !(f in o) && (o[l] = n[l], i)) {
          var p = t.on || (t.on = {});
          p["update:".concat(l)] = function(d) {
            n[l] = d;
          };
        }
      };
      for (var a in n)
        s(a);
    }
  return t;
}
function Aj(t, e) {
  var n = this._staticTrees || (this._staticTrees = []), r = n[t];
  return r && !e || (r = n[t] = this.$options.staticRenderFns[t].call(
    this._renderProxy,
    this._c,
    this
    // for render fns generated for functional component templates
  ), lE(r, "__static__".concat(t), !1)), r;
}
function Rj(t, e, n) {
  return lE(t, "__once__".concat(e).concat(n ? "_".concat(n) : ""), !0), t;
}
function lE(t, e, n) {
  if (K(t))
    for (var r = 0; r < t.length; r++)
      t[r] && typeof t[r] != "string" && c1(t[r], "".concat(e, "_").concat(r), n);
  else
    c1(t, e, n);
}
function c1(t, e, n) {
  t.isStatic = !0, t.key = e, t.isOnce = n;
}
function Fj(t, e) {
  if (e)
    if (!Ke(e))
      process.env.NODE_ENV !== "production" && M("v-on without argument expects an Object value", this);
    else {
      var n = t.on = t.on ? me({}, t.on) : {};
      for (var r in e) {
        var i = n[r], o = e[r];
        n[r] = i ? [].concat(i, o) : o;
      }
    }
  return t;
}
function cE(t, e, n, r) {
  e = e || { $stable: !n };
  for (var i = 0; i < t.length; i++) {
    var o = t[i];
    K(o) ? cE(o, e, n) : o && (o.proxy && (o.fn.proxy = !0), e[o.key] = o.fn);
  }
  return r && (e.$key = r), e;
}
function Lj(t, e) {
  for (var n = 0; n < e.length; n += 2) {
    var r = e[n];
    typeof r == "string" && r ? t[e[n]] = e[n + 1] : process.env.NODE_ENV !== "production" && r !== "" && r !== null && M("Invalid value for dynamic directive argument (expected string or null): ".concat(r), this);
  }
  return t;
}
function jj(t, e) {
  return typeof t == "string" ? e + t : t;
}
function uE(t) {
  t._o = Rj, t._n = Qo, t._s = z2, t._l = Tj, t._t = $j, t._q = Xr, t._i = WO, t._m = Aj, t._f = Ij, t._k = Pj, t._b = Dj, t._v = Ti, t._e = zr, t._u = cE, t._g = Fj, t._d = Lj, t._p = jj;
}
function Yh(t, e) {
  if (!t || !t.length)
    return {};
  for (var n = {}, r = 0, i = t.length; r < i; r++) {
    var o = t[r], s = o.data;
    if (s && s.attrs && s.attrs.slot && delete s.attrs.slot, (o.context === e || o.fnContext === e) && s && s.slot != null) {
      var a = s.slot, l = n[a] || (n[a] = []);
      o.tag === "template" ? l.push.apply(l, o.children || []) : l.push(o);
    } else
      (n.default || (n.default = [])).push(o);
  }
  for (var c in n)
    n[c].every(Bj) && delete n[c];
  return n;
}
function Bj(t) {
  return t.isComment && !t.asyncFactory || t.text === " ";
}
function ts(t) {
  return t.isComment && t.asyncFactory;
}
function Vo(t, e, n, r) {
  var i, o = Object.keys(n).length > 0, s = e ? !!e.$stable : !o, a = e && e.$key;
  if (!e)
    i = {};
  else {
    if (e._normalized)
      return e._normalized;
    if (s && r && r !== Le && a === r.$key && !o && !r.$hasNormal)
      return r;
    i = {};
    for (var l in e)
      e[l] && l[0] !== "$" && (i[l] = zj(t, n, l, e[l]));
  }
  for (var c in n)
    c in i || (i[c] = Vj(n, c));
  return e && Object.isExtensible(e) && (e._normalized = i), _e(i, "$stable", s), _e(i, "$key", a), _e(i, "$hasNormal", o), i;
}
function zj(t, e, n, r) {
  var i = function() {
    var o = we;
    ir(t);
    var s = arguments.length ? r.apply(null, arguments) : r({});
    s = s && typeof s == "object" && !K(s) ? [s] : Xh(s);
    var a = s && s[0];
    return ir(o), s && (!a || s.length === 1 && a.isComment && !ts(a)) ? void 0 : s;
  };
  return r.proxy && Object.defineProperty(e, n, {
    get: i,
    enumerable: !0,
    configurable: !0
  }), i;
}
function Vj(t, e) {
  return function() {
    return t[e];
  };
}
function Wj(t) {
  var e = t.$options, n = e.setup;
  if (n) {
    var r = t._setupContext = fE(t);
    ir(t), lo();
    var i = An(n, null, [t._props || Jh({}), r], t, "setup");
    if (co(), ir(), oe(i))
      e.render = i;
    else if (Ae(i))
      if (process.env.NODE_ENV !== "production" && i instanceof bt && M("setup() should not return VNodes directly - return a render function instead."), t._setupState = i, i.__sfc) {
        var s = t._setupProxy = {};
        for (var o in i)
          o !== "__sfc" && fl(s, i, o);
      } else
        for (var o in i)
          Uh(o) ? process.env.NODE_ENV !== "production" && M("Avoid using variables that start with _ or $ in setup().") : fl(t, i, o);
    else
      process.env.NODE_ENV !== "production" && i !== void 0 && M("setup() should return an object. Received: ".concat(i === null ? "null" : typeof i));
  }
}
function fE(t) {
  var e = !1;
  return {
    get attrs() {
      if (!t._attrsProxy) {
        var n = t._attrsProxy = {};
        _e(n, "_v_attr_proxy", !0), pl(n, t.$attrs, Le, t, "$attrs");
      }
      return t._attrsProxy;
    },
    get listeners() {
      if (!t._listenersProxy) {
        var n = t._listenersProxy = {};
        pl(n, t.$listeners, Le, t, "$listeners");
      }
      return t._listenersProxy;
    },
    get slots() {
      return Uj(t);
    },
    emit: BO(t.$emit, t),
    expose: function(n) {
      process.env.NODE_ENV !== "production" && (e && M("expose() should be called only once per setup().", t), e = !0), n && Object.keys(n).forEach(function(r) {
        return fl(t, n, r);
      });
    }
  };
}
function pl(t, e, n, r, i) {
  var o = !1;
  for (var s in e)
    s in t ? e[s] !== n[s] && (o = !0) : (o = !0, Hj(t, s, r, i));
  for (var s in t)
    s in e || (o = !0, delete t[s]);
  return o;
}
function Hj(t, e, n, r) {
  Object.defineProperty(t, e, {
    enumerable: !0,
    configurable: !0,
    get: function() {
      return n[r][e];
    }
  });
}
function Uj(t) {
  return t._slotsProxy || pE(t._slotsProxy = {}, t.$scopedSlots), t._slotsProxy;
}
function pE(t, e) {
  for (var n in e)
    t[n] = e[n];
  for (var n in t)
    n in e || delete t[n];
}
function Gj() {
  return Zh().slots;
}
function qj() {
  return Zh().attrs;
}
function Jj() {
  return Zh().listeners;
}
function Zh() {
  process.env.NODE_ENV !== "production" && !we && M("useContext() called without active instance.");
  var t = we;
  return t._setupContext || (t._setupContext = fE(t));
}
function Kj(t, e) {
  var n = K(t) ? t.reduce(function(o, s) {
    return o[s] = {}, o;
  }, {}) : t;
  for (var r in e) {
    var i = n[r];
    i ? K(i) || oe(i) ? n[r] = { type: i, default: e[r] } : i.default = e[r] : i === null ? n[r] = { default: e[r] } : process.env.NODE_ENV !== "production" && M('props default key "'.concat(r, '" has no corresponding declaration.'));
  }
  return n;
}
function Xj(t) {
  t._vnode = null, t._staticTrees = null;
  var e = t.$options, n = t.$vnode = e._parentVnode, r = n && n.context;
  t.$slots = Yh(e._renderChildren, r), t.$scopedSlots = n ? Vo(t.$parent, n.data.scopedSlots, t.$slots) : Le, t._c = function(o, s, a, l) {
    return ns(t, o, s, a, l, !1);
  }, t.$createElement = function(o, s, a, l) {
    return ns(t, o, s, a, l, !0);
  };
  var i = n && n.data;
  process.env.NODE_ENV !== "production" ? (Dt(t, "$attrs", i && i.attrs || Le, function() {
    !is && M("$attrs is readonly.", t);
  }, !0), Dt(t, "$listeners", e._parentListeners || Le, function() {
    !is && M("$listeners is readonly.", t);
  }, !0)) : (Dt(t, "$attrs", i && i.attrs || Le, null, !0), Dt(t, "$listeners", e._parentListeners || Le, null, !0));
}
var md = null;
function Yj(t) {
  uE(t.prototype), t.prototype.$nextTick = function(e) {
    return oc(e, this);
  }, t.prototype._render = function() {
    var e = this, n = e.$options, r = n.render, i = n._parentVnode;
    i && e._isMounted && (e.$scopedSlots = Vo(e.$parent, i.data.scopedSlots, e.$slots, e.$scopedSlots), e._slotsProxy && pE(e._slotsProxy, e.$scopedSlots)), e.$vnode = i;
    var o;
    try {
      ir(e), md = e, o = r.call(e._renderProxy, e.$createElement);
    } catch (s) {
      if (ar(s, e, "render"), process.env.NODE_ENV !== "production" && e.$options.renderError)
        try {
          o = e.$options.renderError.call(e._renderProxy, e.$createElement, s);
        } catch (a) {
          ar(a, e, "renderError"), o = e._vnode;
        }
      else
        o = e._vnode;
    } finally {
      md = null, ir();
    }
    return K(o) && o.length === 1 && (o = o[0]), o instanceof bt || (process.env.NODE_ENV !== "production" && K(o) && M("Multiple root nodes returned from render function. Render function should return a single root node.", e), o = zr()), o.parent = i, o;
  };
}
function Wf(t, e) {
  return (t.__esModule || ws && t[Symbol.toStringTag] === "Module") && (t = t.default), Ae(t) ? e.extend(t) : t;
}
function Zj(t, e, n, r, i) {
  var o = zr();
  return o.asyncFactory = t, o.asyncMeta = { data: e, context: n, children: r, tag: i }, o;
}
function Qj(t, e) {
  if (xe(t.error) && E(t.errorComp))
    return t.errorComp;
  if (E(t.resolved))
    return t.resolved;
  var n = md;
  if (n && E(t.owners) && t.owners.indexOf(n) === -1 && t.owners.push(n), xe(t.loading) && E(t.loadingComp))
    return t.loadingComp;
  if (n && !E(t.owners)) {
    var r = t.owners = [n], i = !0, o = null, s = null;
    n.$on("hook:destroyed", function() {
      return yr(r, n);
    });
    var a = function(f) {
      for (var p = 0, d = r.length; p < d; p++)
        r[p].$forceUpdate();
      f && (r.length = 0, o !== null && (clearTimeout(o), o = null), s !== null && (clearTimeout(s), s = null));
    }, l = al(function(f) {
      t.resolved = Wf(f, e), i ? r.length = 0 : a(!0);
    }), c = al(function(f) {
      process.env.NODE_ENV !== "production" && M("Failed to resolve async component: ".concat(String(t)) + (f ? `
Reason: `.concat(f) : "")), E(t.errorComp) && (t.error = !0, a(!0));
    }), u = t(l, c);
    return Ae(u) && (cd(u) ? J(t.resolved) && u.then(l, c) : cd(u.component) && (u.component.then(l, c), E(u.error) && (t.errorComp = Wf(u.error, e)), E(u.loading) && (t.loadingComp = Wf(u.loading, e), u.delay === 0 ? t.loading = !0 : o = setTimeout(function() {
      o = null, J(t.resolved) && J(t.error) && (t.loading = !0, a(!1));
    }, u.delay || 200)), E(u.timeout) && (s = setTimeout(function() {
      s = null, J(t.resolved) && c(process.env.NODE_ENV !== "production" ? "timeout (".concat(u.timeout, "ms)") : null);
    }, u.timeout)))), i = !1, t.loading ? t.loadingComp : t.resolved;
  }
}
function dE(t) {
  if (K(t))
    for (var e = 0; e < t.length; e++) {
      var n = t[e];
      if (E(n) && (E(n.componentOptions) || ts(n)))
        return n;
    }
}
var eB = 1, hE = 2;
function ns(t, e, n, r, i, o) {
  return (K(n) || jn(n)) && (i = r, r = n, n = void 0), xe(o) && (i = hE), tB(t, e, n, r, i);
}
function tB(t, e, n, r, i) {
  if (E(n) && E(n.__ob__))
    return process.env.NODE_ENV !== "production" && M("Avoid using observed data object as vnode data: ".concat(JSON.stringify(n), `
`) + "Always create fresh vnode data objects in each render!", t), zr();
  if (E(n) && E(n.is) && (e = n.is), !e)
    return zr();
  process.env.NODE_ENV !== "production" && E(n) && E(n.key) && !jn(n.key) && M("Avoid using non-primitive value as key, use string/number value instead.", t), K(r) && oe(r[0]) && (n = n || {}, n.scopedSlots = { default: r[0] }, r.length = 0), i === hE ? r = Xh(r) : i === eB && (r = Mj(r));
  var o, s;
  if (typeof e == "string") {
    var a = void 0;
    s = t.$vnode && t.$vnode.ns || ue.getTagNamespace(e), ue.isReservedTag(e) ? (process.env.NODE_ENV !== "production" && E(n) && E(n.nativeOn) && n.tag !== "component" && M("The .native modifier for v-on is only valid on components but it was used on <".concat(e, ">."), t), o = new bt(ue.parsePlatformTagName(e), n, r, void 0, void 0, t)) : (!n || !n.pre) && E(a = hl(t.$options, "components", e)) ? o = y1(a, n, t, r, e) : o = new bt(e, n, r, void 0, void 0, t);
  } else
    o = y1(e, n, t, r);
  return K(o) ? o : E(o) ? (E(s) && mE(o, s), E(n) && nB(n), o) : zr();
}
function mE(t, e, n) {
  if (t.ns = e, t.tag === "foreignObject" && (e = void 0, n = !0), E(t.children))
    for (var r = 0, i = t.children.length; r < i; r++) {
      var o = t.children[r];
      E(o.tag) && (J(o.ns) || xe(n) && o.tag !== "svg") && mE(o, e, n);
    }
}
function nB(t) {
  Ae(t.style) && Gi(t.style), Ae(t.class) && Gi(t.class);
}
function rB(t, e, n) {
  return we || process.env.NODE_ENV !== "production" && M("globally imported h() can only be invoked when there is an active component instance, e.g. synchronously in a component's render or setup function."), ns(we, t, e, n, 2, !0);
}
function ar(t, e, n) {
  lo();
  try {
    if (e)
      for (var r = e; r = r.$parent; ) {
        var i = r.$options.errorCaptured;
        if (i)
          for (var o = 0; o < i.length; o++)
            try {
              var s = i[o].call(r, t, e, n) === !1;
              if (s)
                return;
            } catch (a) {
              u1(a, r, "errorCaptured hook");
            }
      }
    u1(t, e, n);
  } finally {
    co();
  }
}
function An(t, e, n, r, i) {
  var o;
  try {
    o = n ? t.apply(e, n) : t.call(e), o && !o._isVue && cd(o) && !o._handled && (o.catch(function(s) {
      return ar(s, r, i + " (Promise/async)");
    }), o._handled = !0);
  } catch (s) {
    ar(s, r, i);
  }
  return o;
}
function u1(t, e, n) {
  if (ue.errorHandler)
    try {
      return ue.errorHandler.call(null, t, e, n);
    } catch (r) {
      r !== t && f1(r, null, "config.errorHandler");
    }
  f1(t, e, n);
}
function f1(t, e, n) {
  if (process.env.NODE_ENV !== "production" && M("Error in ".concat(n, ': "').concat(t.toString(), '"'), e), dt && typeof console < "u")
    console.error(t);
  else
    throw t;
}
var vd = !1, gd = [], yd = !1;
function ma() {
  yd = !1;
  var t = gd.slice(0);
  gd.length = 0;
  for (var e = 0; e < t.length; e++)
    t[e]();
}
var Ao;
if (typeof Promise < "u" && Br(Promise)) {
  var iB = Promise.resolve();
  Ao = function() {
    iB.then(ma), Y2 && setTimeout(he);
  }, vd = !0;
} else if (!so && typeof MutationObserver < "u" && (Br(MutationObserver) || // PhantomJS and iOS 7.x
MutationObserver.toString() === "[object MutationObserverConstructor]")) {
  var va = 1, oB = new MutationObserver(ma), p1 = document.createTextNode(String(va));
  oB.observe(p1, {
    characterData: !0
  }), Ao = function() {
    va = (va + 1) % 2, p1.data = String(va);
  }, vd = !0;
} else
  typeof setImmediate < "u" && Br(setImmediate) ? Ao = function() {
    setImmediate(ma);
  } : Ao = function() {
    setTimeout(ma, 0);
  };
function oc(t, e) {
  var n;
  if (gd.push(function() {
    if (t)
      try {
        t.call(e);
      } catch (r) {
        ar(r, e, "nextTick");
      }
    else
      n && n(e);
  }), yd || (yd = !0, Ao()), !t && typeof Promise < "u")
    return new Promise(function(r) {
      n = r;
    });
}
function sB(t) {
  t === void 0 && (t = "$style");
  {
    if (!we)
      return process.env.NODE_ENV !== "production" && M("useCssModule must be called inside setup()"), Le;
    var e = we[t];
    return e || (process.env.NODE_ENV !== "production" && M('Current instance does not have CSS module named "'.concat(t, '".')), Le);
  }
}
function aB(t) {
  if (dt) {
    var e = we;
    if (!e) {
      process.env.NODE_ENV !== "production" && M("useCssVars is called without current active component instance.");
      return;
    }
    iE(function() {
      var n = e.$el, r = t(e, e._setupProxy);
      if (n && n.nodeType === 1) {
        var i = n.style;
        for (var o in r)
          i.setProperty("--".concat(o), r[o]);
      }
    });
  }
}
function lB(t) {
  oe(t) && (t = { loader: t });
  var e = t.loader, n = t.loadingComponent, r = t.errorComponent, i = t.delay, o = i === void 0 ? 200 : i, s = t.timeout, a = t.suspensible, l = a === void 0 ? !1 : a, c = t.onError;
  process.env.NODE_ENV !== "production" && l && M("The suspensiblbe option for async components is not supported in Vue2. It is ignored.");
  var u = null, f = 0, p = function() {
    return f++, u = null, d();
  }, d = function() {
    var h;
    return u || (h = u = e().catch(function(m) {
      if (m = m instanceof Error ? m : new Error(String(m)), c)
        return new Promise(function(v, y) {
          var C = function() {
            return v(p());
          }, O = function() {
            return y(m);
          };
          c(m, C, O, f + 1);
        });
      throw m;
    }).then(function(m) {
      if (h !== u && u)
        return u;
      if (process.env.NODE_ENV !== "production" && !m && M("Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."), m && (m.__esModule || m[Symbol.toStringTag] === "Module") && (m = m.default), process.env.NODE_ENV !== "production" && m && !Ae(m) && !oe(m))
        throw new Error("Invalid async component load result: ".concat(m));
      return m;
    }));
  };
  return function() {
    var h = d();
    return {
      component: h,
      delay: o,
      timeout: s,
      error: r,
      loading: n
    };
  };
}
function Ht(t) {
  return function(e, n) {
    if (n === void 0 && (n = we), !n) {
      process.env.NODE_ENV !== "production" && M("".concat(cB(t), " is called when there is no active component instance to be ") + "associated with. Lifecycle injection APIs can only be used during execution of setup().");
      return;
    }
    return uB(n, t, e);
  };
}
function cB(t) {
  return t === "beforeDestroy" ? t = "beforeUnmount" : t === "destroyed" && (t = "unmounted"), "on".concat(t[0].toUpperCase() + t.slice(1));
}
function uB(t, e, n) {
  var r = t.$options;
  r[e] = OE(r[e], n);
}
var fB = Ht("beforeMount"), pB = Ht("mounted"), dB = Ht("beforeUpdate"), hB = Ht("updated"), mB = Ht("beforeDestroy"), vB = Ht("destroyed"), gB = Ht("activated"), yB = Ht("deactivated"), bB = Ht("serverPrefetch"), wB = Ht("renderTracked"), SB = Ht("renderTriggered"), xB = Ht("errorCaptured");
function OB(t, e) {
  e === void 0 && (e = we), xB(t, e);
}
var vE = "2.7.14";
function EB(t) {
  return t;
}
var d1 = new es();
function Gi(t) {
  return Aa(t, d1), d1.clear(), t;
}
function Aa(t, e) {
  var n, r, i = K(t);
  if (!(!i && !Ae(t) || t.__v_skip || Object.isFrozen(t) || t instanceof bt)) {
    if (t.__ob__) {
      var o = t.__ob__.dep.id;
      if (e.has(o))
        return;
      e.add(o);
    }
    if (i)
      for (n = t.length; n--; )
        Aa(t[n], e);
    else if (Je(t))
      Aa(t.value, e);
    else
      for (r = Object.keys(t), n = r.length; n--; )
        Aa(t[r[n]], e);
  }
}
var CB = 0, xs = (
  /** @class */
  function() {
    function t(e, n, r, i, o) {
      Oj(
        this,
        // if the active effect scope is manually created (not a component scope),
        // prioritize it
        Qe && !Qe._vm ? Qe : e ? e._scope : void 0
      ), (this.vm = e) && o && (e._watcher = this), i ? (this.deep = !!i.deep, this.user = !!i.user, this.lazy = !!i.lazy, this.sync = !!i.sync, this.before = i.before, process.env.NODE_ENV !== "production" && (this.onTrack = i.onTrack, this.onTrigger = i.onTrigger)) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = r, this.id = ++CB, this.active = !0, this.post = !1, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new es(), this.newDepIds = new es(), this.expression = process.env.NODE_ENV !== "production" ? n.toString() : "", oe(n) ? this.getter = n : (this.getter = K2(n), this.getter || (this.getter = he, process.env.NODE_ENV !== "production" && M('Failed watching path: "'.concat(n, '" ') + "Watcher only accepts simple dot-delimited paths. For full control, use a function instead.", e))), this.value = this.lazy ? void 0 : this.get();
    }
    return t.prototype.get = function() {
      lo(this);
      var e, n = this.vm;
      try {
        e = this.getter.call(n, n);
      } catch (r) {
        if (this.user)
          ar(r, n, 'getter for watcher "'.concat(this.expression, '"'));
        else
          throw r;
      } finally {
        this.deep && Gi(e), co(), this.cleanupDeps();
      }
      return e;
    }, t.prototype.addDep = function(e) {
      var n = e.id;
      this.newDepIds.has(n) || (this.newDepIds.add(n), this.newDeps.push(e), this.depIds.has(n) || e.addSub(this));
    }, t.prototype.cleanupDeps = function() {
      for (var e = this.deps.length; e--; ) {
        var n = this.deps[e];
        this.newDepIds.has(n.id) || n.removeSub(this);
      }
      var r = this.depIds;
      this.depIds = this.newDepIds, this.newDepIds = r, this.newDepIds.clear(), r = this.deps, this.deps = this.newDeps, this.newDeps = r, this.newDeps.length = 0;
    }, t.prototype.update = function() {
      this.lazy ? this.dirty = !0 : this.sync ? this.run() : Sd(this);
    }, t.prototype.run = function() {
      if (this.active) {
        var e = this.get();
        if (e !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        Ae(e) || this.deep) {
          var n = this.value;
          if (this.value = e, this.user) {
            var r = 'callback for watcher "'.concat(this.expression, '"');
            An(this.cb, this.vm, [e, n], this.vm, r);
          } else
            this.cb.call(this.vm, e, n);
        }
      }
    }, t.prototype.evaluate = function() {
      this.value = this.get(), this.dirty = !1;
    }, t.prototype.depend = function() {
      for (var e = this.deps.length; e--; )
        this.deps[e].depend();
    }, t.prototype.teardown = function() {
      if (this.vm && !this.vm._isBeingDestroyed && yr(this.vm._scope.effects, this), this.active) {
        for (var e = this.deps.length; e--; )
          this.deps[e].removeSub(this);
        this.active = !1, this.onStop && this.onStop();
      }
    }, t;
  }()
), ln, dl;
if (process.env.NODE_ENV !== "production") {
  var Cn = dt && window.performance;
  Cn && // @ts-ignore
  Cn.mark && // @ts-ignore
  Cn.measure && // @ts-ignore
  Cn.clearMarks && // @ts-ignore
  Cn.clearMeasures && (ln = function(t) {
    return Cn.mark(t);
  }, dl = function(t, e, n) {
    Cn.measure(t, e, n), Cn.clearMarks(e), Cn.clearMarks(n);
  });
}
function _B(t) {
  t._events = /* @__PURE__ */ Object.create(null), t._hasHookEvent = !1;
  var e = t.$options._parentListeners;
  e && gE(t, e);
}
var rs;
function kB(t, e) {
  rs.$on(t, e);
}
function NB(t, e) {
  rs.$off(t, e);
}
function MB(t, e) {
  var n = rs;
  return function r() {
    var i = e.apply(null, arguments);
    i !== null && n.$off(t, r);
  };
}
function gE(t, e, n) {
  rs = t, sE(e, n || {}, kB, NB, MB, t), rs = void 0;
}
function TB(t) {
  var e = /^hook:/;
  t.prototype.$on = function(n, r) {
    var i = this;
    if (K(n))
      for (var o = 0, s = n.length; o < s; o++)
        i.$on(n[o], r);
    else
      (i._events[n] || (i._events[n] = [])).push(r), e.test(n) && (i._hasHookEvent = !0);
    return i;
  }, t.prototype.$once = function(n, r) {
    var i = this;
    function o() {
      i.$off(n, o), r.apply(i, arguments);
    }
    return o.fn = r, i.$on(n, o), i;
  }, t.prototype.$off = function(n, r) {
    var i = this;
    if (!arguments.length)
      return i._events = /* @__PURE__ */ Object.create(null), i;
    if (K(n)) {
      for (var o = 0, s = n.length; o < s; o++)
        i.$off(n[o], r);
      return i;
    }
    var a = i._events[n];
    if (!a)
      return i;
    if (!r)
      return i._events[n] = null, i;
    for (var l, c = a.length; c--; )
      if (l = a[c], l === r || l.fn === r) {
        a.splice(c, 1);
        break;
      }
    return i;
  }, t.prototype.$emit = function(n) {
    var r = this;
    if (process.env.NODE_ENV !== "production") {
      var i = n.toLowerCase();
      i !== n && r._events[i] && im('Event "'.concat(i, '" is emitted in component ') + "".concat(Pr(r), ' but the handler is registered for "').concat(n, '". ') + "Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. " + 'You should probably use "'.concat(ci(n), '" instead of "').concat(n, '".'));
    }
    var o = r._events[n];
    if (o) {
      o = o.length > 1 ? ud(o) : o;
      for (var s = ud(arguments, 1), a = 'event handler for "'.concat(n, '"'), l = 0, c = o.length; l < c; l++)
        An(o[l], r, s, r, a);
    }
    return r;
  };
}
var Vr = null, is = !1;
function yE(t) {
  var e = Vr;
  return Vr = t, function() {
    Vr = e;
  };
}
function $B(t) {
  var e = t.$options, n = e.parent;
  if (n && !e.abstract) {
    for (; n.$options.abstract && n.$parent; )
      n = n.$parent;
    n.$children.push(t);
  }
  t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._provided = n ? n._provided : /* @__PURE__ */ Object.create(null), t._watcher = null, t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1;
}
function IB(t) {
  t.prototype._update = function(e, n) {
    var r = this, i = r.$el, o = r._vnode, s = yE(r);
    r._vnode = e, o ? r.$el = r.__patch__(o, e) : r.$el = r.__patch__(
      r.$el,
      e,
      n,
      !1
      /* removeOnly */
    ), s(), i && (i.__vue__ = null), r.$el && (r.$el.__vue__ = r);
    for (var a = r; a && a.$vnode && a.$parent && a.$vnode === a.$parent._vnode; )
      a.$parent.$el = a.$el, a = a.$parent;
  }, t.prototype.$forceUpdate = function() {
    var e = this;
    e._watcher && e._watcher.update();
  }, t.prototype.$destroy = function() {
    var e = this;
    if (!e._isBeingDestroyed) {
      xt(e, "beforeDestroy"), e._isBeingDestroyed = !0;
      var n = e.$parent;
      n && !n._isBeingDestroyed && !e.$options.abstract && yr(n.$children, e), e._scope.stop(), e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), xt(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null);
    }
  };
}
function PB(t, e, n) {
  t.$el = e, t.$options.render || (t.$options.render = zr, process.env.NODE_ENV !== "production" && (t.$options.template && t.$options.template.charAt(0) !== "#" || t.$options.el || e ? M("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.", t) : M("Failed to mount component: template or render function not defined.", t))), xt(t, "beforeMount");
  var r;
  process.env.NODE_ENV !== "production" && ue.performance && ln ? r = function() {
    var a = t._name, l = t._uid, c = "vue-perf-start:".concat(l), u = "vue-perf-end:".concat(l);
    ln(c);
    var f = t._render();
    ln(u), dl("vue ".concat(a, " render"), c, u), ln(c), t._update(f, n), ln(u), dl("vue ".concat(a, " patch"), c, u);
  } : r = function() {
    t._update(t._render(), n);
  };
  var i = {
    before: function() {
      t._isMounted && !t._isDestroyed && xt(t, "beforeUpdate");
    }
  };
  process.env.NODE_ENV !== "production" && (i.onTrack = function(a) {
    return xt(t, "renderTracked", [a]);
  }, i.onTrigger = function(a) {
    return xt(t, "renderTriggered", [a]);
  }), new xs(
    t,
    r,
    he,
    i,
    !0
    /* isRenderWatcher */
  ), n = !1;
  var o = t._preWatchers;
  if (o)
    for (var s = 0; s < o.length; s++)
      o[s].run();
  return t.$vnode == null && (t._isMounted = !0, xt(t, "mounted")), t;
}
function DB(t, e, n, r, i) {
  process.env.NODE_ENV !== "production" && (is = !0);
  var o = r.data.scopedSlots, s = t.$scopedSlots, a = !!(o && !o.$stable || s !== Le && !s.$stable || o && t.$scopedSlots.$key !== o.$key || !o && t.$scopedSlots.$key), l = !!(i || // has new static slots
  t.$options._renderChildren || // has old static slots
  a), c = t.$vnode;
  t.$options._parentVnode = r, t.$vnode = r, t._vnode && (t._vnode.parent = r), t.$options._renderChildren = i;
  var u = r.data.attrs || Le;
  t._attrsProxy && pl(t._attrsProxy, u, c.data && c.data.attrs || Le, t, "$attrs") && (l = !0), t.$attrs = u, n = n || Le;
  var f = t.$options._parentListeners;
  if (t._listenersProxy && pl(t._listenersProxy, n, f || Le, t, "$listeners"), t.$listeners = t.$options._parentListeners = n, gE(t, n, f), e && t.$options.props) {
    sr(!1);
    for (var p = t._props, d = t.$options._propKeys || [], h = 0; h < d.length; h++) {
      var m = d[h], v = t.$options.props;
      p[m] = am(m, v, e, t);
    }
    sr(!0), t.$options.propsData = e;
  }
  l && (t.$slots = Yh(i, r.context), t.$forceUpdate()), process.env.NODE_ENV !== "production" && (is = !1);
}
function bE(t) {
  for (; t && (t = t.$parent); )
    if (t._inactive)
      return !0;
  return !1;
}
function Qh(t, e) {
  if (e) {
    if (t._directInactive = !1, bE(t))
      return;
  } else if (t._directInactive)
    return;
  if (t._inactive || t._inactive === null) {
    t._inactive = !1;
    for (var n = 0; n < t.$children.length; n++)
      Qh(t.$children[n]);
    xt(t, "activated");
  }
}
function wE(t, e) {
  if (!(e && (t._directInactive = !0, bE(t))) && !t._inactive) {
    t._inactive = !0;
    for (var n = 0; n < t.$children.length; n++)
      wE(t.$children[n]);
    xt(t, "deactivated");
  }
}
function xt(t, e, n, r) {
  r === void 0 && (r = !0), lo();
  var i = we;
  r && ir(t);
  var o = t.$options[e], s = "".concat(e, " hook");
  if (o)
    for (var a = 0, l = o.length; a < l; a++)
      An(o[a], t, n || null, t, s);
  t._hasHookEvent && t.$emit("hook:" + e), r && ir(i), co();
}
var AB = 100, Tn = [], em = [], ss = {}, Ra = {}, bd = !1, tm = !1, $i = 0;
function RB() {
  $i = Tn.length = em.length = 0, ss = {}, process.env.NODE_ENV !== "production" && (Ra = {}), bd = tm = !1;
}
var SE = 0, wd = Date.now;
if (dt && !so) {
  var Hf = window.performance;
  Hf && typeof Hf.now == "function" && wd() > document.createEvent("Event").timeStamp && (wd = function() {
    return Hf.now();
  });
}
var FB = function(t, e) {
  if (t.post) {
    if (!e.post)
      return 1;
  } else if (e.post)
    return -1;
  return t.id - e.id;
};
function h1() {
  SE = wd(), tm = !0;
  var t, e;
  for (Tn.sort(FB), $i = 0; $i < Tn.length; $i++)
    if (t = Tn[$i], t.before && t.before(), e = t.id, ss[e] = null, t.run(), process.env.NODE_ENV !== "production" && ss[e] != null && (Ra[e] = (Ra[e] || 0) + 1, Ra[e] > AB)) {
      M("You may have an infinite update loop " + (t.user ? 'in watcher with expression "'.concat(t.expression, '"') : "in a component render function."), t.vm);
      break;
    }
  var n = em.slice(), r = Tn.slice();
  RB(), BB(n), LB(r), ej(), ll && ue.devtools && ll.emit("flush");
}
function LB(t) {
  for (var e = t.length; e--; ) {
    var n = t[e], r = n.vm;
    r && r._watcher === n && r._isMounted && !r._isDestroyed && xt(r, "updated");
  }
}
function jB(t) {
  t._inactive = !1, em.push(t);
}
function BB(t) {
  for (var e = 0; e < t.length; e++)
    t[e]._inactive = !0, Qh(
      t[e],
      !0
      /* true */
    );
}
function Sd(t) {
  var e = t.id;
  if (ss[e] == null && !(t === rt.target && t.noRecurse)) {
    if (ss[e] = !0, !tm)
      Tn.push(t);
    else {
      for (var n = Tn.length - 1; n > $i && Tn[n].id > t.id; )
        n--;
      Tn.splice(n + 1, 0, t);
    }
    if (!bd) {
      if (bd = !0, process.env.NODE_ENV !== "production" && !ue.async) {
        h1();
        return;
      }
      oc(h1);
    }
  }
}
function zB(t) {
  var e = t.$options.provide;
  if (e) {
    var n = oe(e) ? e.call(t) : e;
    if (!Ae(n))
      return;
    for (var r = oE(t), i = ws ? Reflect.ownKeys(n) : Object.keys(n), o = 0; o < i.length; o++) {
      var s = i[o];
      Object.defineProperty(r, s, Object.getOwnPropertyDescriptor(n, s));
    }
  }
}
function VB(t) {
  var e = xE(t.$options.inject, t);
  e && (sr(!1), Object.keys(e).forEach(function(n) {
    process.env.NODE_ENV !== "production" ? Dt(t, n, e[n], function() {
      M("Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. " + 'injection being mutated: "'.concat(n, '"'), t);
    }) : Dt(t, n, e[n]);
  }), sr(!0));
}
function xE(t, e) {
  if (t) {
    for (var n = /* @__PURE__ */ Object.create(null), r = ws ? Reflect.ownKeys(t) : Object.keys(t), i = 0; i < r.length; i++) {
      var o = r[i];
      if (o !== "__ob__") {
        var s = t[o].from;
        if (s in e._provided)
          n[o] = e._provided[s];
        else if ("default" in t[o]) {
          var a = t[o].default;
          n[o] = oe(a) ? a.call(e) : a;
        } else
          process.env.NODE_ENV !== "production" && M('Injection "'.concat(o, '" not found'), e);
      }
    }
    return n;
  }
}
function nm(t, e, n, r, i) {
  var o = this, s = i.options, a;
  Be(r, "_uid") ? (a = Object.create(r), a._original = r) : (a = r, r = r._original);
  var l = xe(s._compiled), c = !l;
  this.data = t, this.props = e, this.children = n, this.parent = r, this.listeners = t.on || Le, this.injections = xE(s.inject, r), this.slots = function() {
    return o.$slots || Vo(r, t.scopedSlots, o.$slots = Yh(n, r)), o.$slots;
  }, Object.defineProperty(this, "scopedSlots", {
    enumerable: !0,
    get: function() {
      return Vo(r, t.scopedSlots, this.slots());
    }
  }), l && (this.$options = s, this.$slots = this.slots(), this.$scopedSlots = Vo(r, t.scopedSlots, this.$slots)), s._scopeId ? this._c = function(u, f, p, d) {
    var h = ns(a, u, f, p, d, c);
    return h && !K(h) && (h.fnScopeId = s._scopeId, h.fnContext = r), h;
  } : this._c = function(u, f, p, d) {
    return ns(a, u, f, p, d, c);
  };
}
uE(nm.prototype);
function WB(t, e, n, r, i) {
  var o = t.options, s = {}, a = o.props;
  if (E(a))
    for (var l in a)
      s[l] = am(l, a, e || Le);
  else
    E(n.attrs) && v1(s, n.attrs), E(n.props) && v1(s, n.props);
  var c = new nm(n, s, i, r, t), u = o.render.call(null, c._c, c);
  if (u instanceof bt)
    return m1(u, n, c.parent, o, c);
  if (K(u)) {
    for (var f = Xh(u) || [], p = new Array(f.length), d = 0; d < f.length; d++)
      p[d] = m1(f[d], n, c.parent, o, c);
    return p;
  }
}
function m1(t, e, n, r, i) {
  var o = dd(t);
  return o.fnContext = n, o.fnOptions = r, process.env.NODE_ENV !== "production" && ((o.devtoolsMeta = o.devtoolsMeta || {}).renderContext = i), e.slot && ((o.data || (o.data = {})).slot = e.slot), o;
}
function v1(t, e) {
  for (var n in e)
    t[Kr(n)] = e[n];
}
function qi(t) {
  return t.name || t.__name || t._componentTag;
}
var rm = {
  init: function(t, e) {
    if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
      var n = t;
      rm.prepatch(n, n);
    } else {
      var r = t.componentInstance = HB(t, Vr);
      r.$mount(e ? t.elm : void 0, e);
    }
  },
  prepatch: function(t, e) {
    var n = e.componentOptions, r = e.componentInstance = t.componentInstance;
    DB(
      r,
      n.propsData,
      // updated props
      n.listeners,
      // updated listeners
      e,
      // new parent vnode
      n.children
      // new children
    );
  },
  insert: function(t) {
    var e = t.context, n = t.componentInstance;
    n._isMounted || (n._isMounted = !0, xt(n, "mounted")), t.data.keepAlive && (e._isMounted ? jB(n) : Qh(
      n,
      !0
      /* direct */
    ));
  },
  destroy: function(t) {
    var e = t.componentInstance;
    e._isDestroyed || (t.data.keepAlive ? wE(
      e,
      !0
      /* direct */
    ) : e.$destroy());
  }
}, g1 = Object.keys(rm);
function y1(t, e, n, r, i) {
  if (!J(t)) {
    var o = n.$options._base;
    if (Ae(t) && (t = o.extend(t)), typeof t != "function") {
      process.env.NODE_ENV !== "production" && M("Invalid Component definition: ".concat(String(t)), n);
      return;
    }
    var s;
    if (J(t.cid) && (s = t, t = Qj(s, o), t === void 0))
      return Zj(s, e, n, r, i);
    e = e || {}, cm(t), E(e.model) && qB(t.options, e);
    var a = Nj(e, t, i);
    if (xe(t.options.functional))
      return WB(t, a, e, n, r);
    var l = e.on;
    if (e.on = e.nativeOn, xe(t.options.abstract)) {
      var c = e.slot;
      e = {}, c && (e.slot = c);
    }
    UB(e);
    var u = qi(t.options) || i, f = new bt(
      // @ts-expect-error
      "vue-component-".concat(t.cid).concat(u ? "-".concat(u) : ""),
      e,
      void 0,
      void 0,
      void 0,
      n,
      // @ts-expect-error
      { Ctor: t, propsData: a, listeners: l, tag: i, children: r },
      s
    );
    return f;
  }
}
function HB(t, e) {
  var n = {
    _isComponent: !0,
    _parentVnode: t,
    parent: e
  }, r = t.data.inlineTemplate;
  return E(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns), new t.componentOptions.Ctor(n);
}
function UB(t) {
  for (var e = t.hook || (t.hook = {}), n = 0; n < g1.length; n++) {
    var r = g1[n], i = e[r], o = rm[r];
    i !== o && !(i && i._merged) && (e[r] = i ? GB(o, i) : o);
  }
}
function GB(t, e) {
  var n = function(r, i) {
    t(r, i), e(r, i);
  };
  return n._merged = !0, n;
}
function qB(t, e) {
  var n = t.model && t.model.prop || "value", r = t.model && t.model.event || "input";
  (e.attrs || (e.attrs = {}))[n] = e.model.value;
  var i = e.on || (e.on = {}), o = i[r], s = e.model.callback;
  E(o) ? (K(o) ? o.indexOf(s) === -1 : o !== s) && (i[r] = [s].concat(o)) : i[r] = s;
}
var M = he, im = he, Uf, Pr;
if (process.env.NODE_ENV !== "production") {
  var b1 = typeof console < "u", JB = /(?:^|[-_])(\w)/g, KB = function(t) {
    return t.replace(JB, function(e) {
      return e.toUpperCase();
    }).replace(/[-_]/g, "");
  };
  M = function(t, e) {
    e === void 0 && (e = we);
    var n = e ? Uf(e) : "";
    ue.warnHandler ? ue.warnHandler.call(null, t, e, n) : b1 && !ue.silent && console.error("[Vue warn]: ".concat(t).concat(n));
  }, im = function(t, e) {
    b1 && !ue.silent && console.warn("[Vue tip]: ".concat(t) + (e ? Uf(e) : ""));
  }, Pr = function(t, e) {
    if (t.$root === t)
      return "<Root>";
    var n = oe(t) && t.cid != null ? t.options : t._isVue ? t.$options || t.constructor.options : t, r = qi(n), i = n.__file;
    if (!r && i) {
      var o = i.match(/([^/\\]+)\.vue$/);
      r = o && o[1];
    }
    return (r ? "<".concat(KB(r), ">") : "<Anonymous>") + (i && e !== !1 ? " at ".concat(i) : "");
  };
  var XB = function(t, e) {
    for (var n = ""; e; )
      e % 2 === 1 && (n += t), e > 1 && (t += t), e >>= 1;
    return n;
  };
  Uf = function(t) {
    if (t._isVue && t.$parent) {
      for (var e = [], n = 0; t; ) {
        if (e.length > 0) {
          var r = e[e.length - 1];
          if (r.constructor === t.constructor) {
            n++, t = t.$parent;
            continue;
          } else
            n > 0 && (e[e.length - 1] = [r, n], n = 0);
        }
        e.push(t), t = t.$parent;
      }
      return `

found in

` + e.map(function(i, o) {
        return "".concat(o === 0 ? "---> " : XB(" ", 5 + o * 2)).concat(K(i) ? "".concat(Pr(i[0]), "... (").concat(i[1], " recursive calls)") : Pr(i));
      }).join(`
`);
    } else
      return `

(found in `.concat(Pr(t), ")");
  };
}
var At = ue.optionMergeStrategies;
process.env.NODE_ENV !== "production" && (At.el = At.propsData = function(t, e, n, r) {
  return n || M('option "'.concat(r, '" can only be used during instance ') + "creation with the `new` keyword."), EE(t, e);
});
function as(t, e, n) {
  if (n === void 0 && (n = !0), !e)
    return t;
  for (var r, i, o, s = ws ? Reflect.ownKeys(e) : Object.keys(e), a = 0; a < s.length; a++)
    r = s[a], r !== "__ob__" && (i = t[r], o = e[r], !n || !Be(t, r) ? nc(t, r, o) : i !== o && Ke(i) && Ke(o) && as(i, o));
  return t;
}
function w1(t, e, n) {
  return n ? function() {
    var i = oe(e) ? e.call(n, n) : e, o = oe(t) ? t.call(n, n) : t;
    return i ? as(i, o) : o;
  } : e ? t ? function() {
    return as(oe(e) ? e.call(this, this) : e, oe(t) ? t.call(this, this) : t);
  } : e : t;
}
At.data = function(t, e, n) {
  return n ? w1(t, e, n) : e && typeof e != "function" ? (process.env.NODE_ENV !== "production" && M('The "data" option should be a function that returns a per-instance value in component definitions.', n), t) : w1(t, e);
};
function OE(t, e) {
  var n = e ? t ? t.concat(e) : K(e) ? e : [e] : t;
  return n && YB(n);
}
function YB(t) {
  for (var e = [], n = 0; n < t.length; n++)
    e.indexOf(t[n]) === -1 && e.push(t[n]);
  return e;
}
HO.forEach(function(t) {
  At[t] = OE;
});
function ZB(t, e, n, r) {
  var i = Object.create(t || null);
  return e ? (process.env.NODE_ENV !== "production" && sm(r, e, n), me(i, e)) : i;
}
tc.forEach(function(t) {
  At[t + "s"] = ZB;
});
At.watch = function(t, e, n, r) {
  if (t === pd && (t = void 0), e === pd && (e = void 0), !e)
    return Object.create(t || null);
  if (process.env.NODE_ENV !== "production" && sm(r, e, n), !t)
    return e;
  var i = {};
  me(i, t);
  for (var o in e) {
    var s = i[o], a = e[o];
    s && !K(s) && (s = [s]), i[o] = s ? s.concat(a) : K(a) ? a : [a];
  }
  return i;
};
At.props = At.methods = At.inject = At.computed = function(t, e, n, r) {
  if (e && process.env.NODE_ENV !== "production" && sm(r, e, n), !t)
    return e;
  var i = /* @__PURE__ */ Object.create(null);
  return me(i, t), e && me(i, e), i;
};
At.provide = function(t, e) {
  return t ? function() {
    var n = /* @__PURE__ */ Object.create(null);
    return as(n, oe(t) ? t.call(this) : t), e && as(
      n,
      oe(e) ? e.call(this) : e,
      !1
      // non-recursive
    ), n;
  } : e;
};
var EE = function(t, e) {
  return e === void 0 ? t : e;
};
function QB(t) {
  for (var e in t.components)
    om(e);
}
function om(t) {
  new RegExp("^[a-zA-Z][\\-\\.0-9_".concat(UO.source, "]*$")).test(t) || M('Invalid component name: "' + t + '". Component names should conform to valid custom element name in html5 specification.'), (V2(t) || ue.isReservedTag(t)) && M("Do not use built-in or reserved HTML elements as component id: " + t);
}
function ez(t, e) {
  var n = t.props;
  if (n) {
    var r = {}, i, o, s;
    if (K(n))
      for (i = n.length; i--; )
        o = n[i], typeof o == "string" ? (s = Kr(o), r[s] = { type: null }) : process.env.NODE_ENV !== "production" && M("props must be strings when using array syntax.");
    else if (Ke(n))
      for (var a in n)
        o = n[a], s = Kr(a), r[s] = Ke(o) ? o : { type: o };
    else
      process.env.NODE_ENV !== "production" && M('Invalid value for option "props": expected an Array or an Object, ' + "but got ".concat(bs(n), "."), e);
    t.props = r;
  }
}
function tz(t, e) {
  var n = t.inject;
  if (n) {
    var r = t.inject = {};
    if (K(n))
      for (var i = 0; i < n.length; i++)
        r[n[i]] = { from: n[i] };
    else if (Ke(n))
      for (var o in n) {
        var s = n[o];
        r[o] = Ke(s) ? me({ from: o }, s) : { from: s };
      }
    else
      process.env.NODE_ENV !== "production" && M('Invalid value for option "inject": expected an Array or an Object, ' + "but got ".concat(bs(n), "."), e);
  }
}
function nz(t) {
  var e = t.directives;
  if (e)
    for (var n in e) {
      var r = e[n];
      oe(r) && (e[n] = { bind: r, update: r });
    }
}
function sm(t, e, n) {
  Ke(e) || M('Invalid value for option "'.concat(t, '": expected an Object, ') + "but got ".concat(bs(e), "."), n);
}
function Yr(t, e, n) {
  if (process.env.NODE_ENV !== "production" && QB(e), oe(e) && (e = e.options), ez(e, n), tz(e, n), nz(e), !e._base && (e.extends && (t = Yr(t, e.extends, n)), e.mixins))
    for (var r = 0, i = e.mixins.length; r < i; r++)
      t = Yr(t, e.mixins[r], n);
  var o = {}, s;
  for (s in t)
    a(s);
  for (s in e)
    Be(t, s) || a(s);
  function a(l) {
    var c = At[l] || EE;
    o[l] = c(t[l], e[l], n, l);
  }
  return o;
}
function hl(t, e, n, r) {
  if (typeof n == "string") {
    var i = t[e];
    if (Be(i, n))
      return i[n];
    var o = Kr(n);
    if (Be(i, o))
      return i[o];
    var s = jO(o);
    if (Be(i, s))
      return i[s];
    var a = i[n] || i[o] || i[s];
    return process.env.NODE_ENV !== "production" && r && !a && M("Failed to resolve " + e.slice(0, -1) + ": " + n), a;
  }
}
function am(t, e, n, r) {
  var i = e[t], o = !Be(n, t), s = n[t], a = x1(Boolean, i.type);
  if (a > -1) {
    if (o && !Be(i, "default"))
      s = !1;
    else if (s === "" || s === ci(t)) {
      var l = x1(String, i.type);
      (l < 0 || a < l) && (s = !0);
    }
  }
  if (s === void 0) {
    s = rz(r, i, t);
    var c = Gh;
    sr(!0), Dn(s), sr(c);
  }
  return process.env.NODE_ENV !== "production" && iz(i, t, s, r, o), s;
}
function rz(t, e, n) {
  if (Be(e, "default")) {
    var r = e.default;
    return process.env.NODE_ENV !== "production" && Ae(r) && M('Invalid default value for prop "' + n + '": Props with type Object/Array must use a factory function to return the default value.', t), t && t.$options.propsData && t.$options.propsData[n] === void 0 && t._props[n] !== void 0 ? t._props[n] : oe(r) && ml(e.type) !== "Function" ? r.call(t) : r;
  }
}
function iz(t, e, n, r, i) {
  if (t.required && i) {
    M('Missing required prop: "' + e + '"', r);
    return;
  }
  if (!(n == null && !t.required)) {
    var o = t.type, s = !o || o === !0, a = [];
    if (o) {
      K(o) || (o = [o]);
      for (var l = 0; l < o.length && !s; l++) {
        var c = sz(n, o[l], r);
        a.push(c.expectedType || ""), s = c.valid;
      }
    }
    var u = a.some(function(p) {
      return p;
    });
    if (!s && u) {
      M(lz(e, n, a), r);
      return;
    }
    var f = t.validator;
    f && (f(n) || M('Invalid prop: custom validator check failed for prop "' + e + '".', r));
  }
}
var oz = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;
function sz(t, e, n) {
  var r, i = ml(e);
  if (oz.test(i)) {
    var o = typeof t;
    r = o === i.toLowerCase(), !r && o === "object" && (r = t instanceof e);
  } else if (i === "Object")
    r = Ke(t);
  else if (i === "Array")
    r = K(t);
  else
    try {
      r = t instanceof e;
    } catch {
      M('Invalid prop type: "' + String(e) + '" is not a constructor', n), r = !1;
    }
  return {
    valid: r,
    expectedType: i
  };
}
var az = /^\s*function (\w+)/;
function ml(t) {
  var e = t && t.toString().match(az);
  return e ? e[1] : "";
}
function S1(t, e) {
  return ml(t) === ml(e);
}
function x1(t, e) {
  if (!K(e))
    return S1(e, t) ? 0 : -1;
  for (var n = 0, r = e.length; n < r; n++)
    if (S1(e[n], t))
      return n;
  return -1;
}
function lz(t, e, n) {
  var r = 'Invalid prop: type check failed for prop "'.concat(t, '".') + " Expected ".concat(n.map(jO).join(", ")), i = n[0], o = bs(e);
  return n.length === 1 && Gf(i) && Gf(typeof e) && !uz(i, o) && (r += " with value ".concat(O1(e, i))), r += ", got ".concat(o, " "), Gf(o) && (r += "with value ".concat(O1(e, o), ".")), r;
}
function O1(t, e) {
  return e === "String" ? '"'.concat(t, '"') : e === "Number" ? "".concat(Number(t)) : "".concat(t);
}
var cz = ["string", "number", "boolean"];
function Gf(t) {
  return cz.some(function(e) {
    return t.toLowerCase() === e;
  });
}
function uz() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return t.some(function(n) {
    return n.toLowerCase() === "boolean";
  });
}
var CE;
if (process.env.NODE_ENV !== "production") {
  var fz = Ct(
    "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,require"
    // for Webpack/Browserify
  ), E1 = function(t, e) {
    M('Property or method "'.concat(e, '" is not defined on the instance but ') + "referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://v2.vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.", t);
  }, C1 = function(t, e) {
    M('Property "'.concat(e, '" must be accessed with "$data.').concat(e, '" because ') + 'properties starting with "$" or "_" are not proxied in the Vue instance to prevent conflicts with Vue internals. See: https://v2.vuejs.org/v2/api/#data', t);
  }, _1 = typeof Proxy < "u" && Br(Proxy);
  if (_1) {
    var pz = Ct("stop,prevent,self,ctrl,shift,alt,meta,exact");
    ue.keyCodes = new Proxy(ue.keyCodes, {
      set: function(t, e, n) {
        return pz(e) ? (M("Avoid overwriting built-in modifier in config.keyCodes: .".concat(e)), !1) : (t[e] = n, !0);
      }
    });
  }
  var dz = {
    has: function(t, e) {
      var n = e in t, r = fz(e) || typeof e == "string" && e.charAt(0) === "_" && !(e in t.$data);
      return !n && !r && (e in t.$data ? C1(t, e) : E1(t, e)), n || !r;
    }
  }, hz = {
    get: function(t, e) {
      return typeof e == "string" && !(e in t) && (e in t.$data ? C1(t, e) : E1(t, e)), t[e];
    }
  };
  CE = function(e) {
    if (_1) {
      var n = e.$options, r = n.render && n.render._withStripped ? hz : dz;
      e._renderProxy = new Proxy(e, r);
    } else
      e._renderProxy = e;
  };
}
var sn = {
  enumerable: !0,
  configurable: !0,
  get: he,
  set: he
};
function lm(t, e, n) {
  sn.get = function() {
    return this[e][n];
  }, sn.set = function(i) {
    this[e][n] = i;
  }, Object.defineProperty(t, n, sn);
}
function mz(t) {
  var e = t.$options;
  if (e.props && vz(t, e.props), Wj(t), e.methods && Sz(t, e.methods), e.data)
    gz(t);
  else {
    var n = Dn(t._data = {});
    n && n.vmCount++;
  }
  e.computed && wz(t, e.computed), e.watch && e.watch !== pd && xz(t, e.watch);
}
function vz(t, e) {
  var n = t.$options.propsData || {}, r = t._props = Jh({}), i = t.$options._propKeys = [], o = !t.$parent;
  o || sr(!1);
  var s = function(l) {
    i.push(l);
    var c = am(l, e, n, t);
    if (process.env.NODE_ENV !== "production") {
      var u = ci(l);
      (LO(u) || ue.isReservedAttr(u)) && M('"'.concat(u, '" is a reserved attribute and cannot be used as component prop.'), t), Dt(r, l, c, function() {
        !o && !is && M("Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's " + 'value. Prop being mutated: "'.concat(l, '"'), t);
      });
    } else
      Dt(r, l, c);
    l in t || lm(t, "_props", l);
  };
  for (var a in e)
    s(a);
  sr(!0);
}
function gz(t) {
  var e = t.$options.data;
  e = t._data = oe(e) ? yz(e, t) : e || {}, Ke(e) || (e = {}, process.env.NODE_ENV !== "production" && M(`data functions should return an object:
https://v2.vuejs.org/v2/guide/components.html#data-Must-Be-a-Function`, t));
  for (var n = Object.keys(e), r = t.$options.props, i = t.$options.methods, o = n.length; o--; ) {
    var s = n[o];
    process.env.NODE_ENV !== "production" && i && Be(i, s) && M('Method "'.concat(s, '" has already been defined as a data property.'), t), r && Be(r, s) ? process.env.NODE_ENV !== "production" && M('The data property "'.concat(s, '" is already declared as a prop. ') + "Use prop default value instead.", t) : Uh(s) || lm(t, "_data", s);
  }
  var a = Dn(e);
  a && a.vmCount++;
}
function yz(t, e) {
  lo();
  try {
    return t.call(e, e);
  } catch (n) {
    return ar(n, e, "data()"), {};
  } finally {
    co();
  }
}
var bz = { lazy: !0 };
function wz(t, e) {
  var n = t._computedWatchers = /* @__PURE__ */ Object.create(null), r = br();
  for (var i in e) {
    var o = e[i], s = oe(o) ? o : o.get;
    process.env.NODE_ENV !== "production" && s == null && M('Getter is missing for computed property "'.concat(i, '".'), t), r || (n[i] = new xs(t, s || he, he, bz)), i in t ? process.env.NODE_ENV !== "production" && (i in t.$data ? M('The computed property "'.concat(i, '" is already defined in data.'), t) : t.$options.props && i in t.$options.props ? M('The computed property "'.concat(i, '" is already defined as a prop.'), t) : t.$options.methods && i in t.$options.methods && M('The computed property "'.concat(i, '" is already defined as a method.'), t)) : _E(t, i, o);
  }
}
function _E(t, e, n) {
  var r = !br();
  oe(n) ? (sn.get = r ? k1(e) : N1(n), sn.set = he) : (sn.get = n.get ? r && n.cache !== !1 ? k1(e) : N1(n.get) : he, sn.set = n.set || he), process.env.NODE_ENV !== "production" && sn.set === he && (sn.set = function() {
    M('Computed property "'.concat(e, '" was assigned to but it has no setter.'), this);
  }), Object.defineProperty(t, e, sn);
}
function k1(t) {
  return function() {
    var n = this._computedWatchers && this._computedWatchers[t];
    if (n)
      return n.dirty && n.evaluate(), rt.target && (process.env.NODE_ENV !== "production" && rt.target.onTrack && rt.target.onTrack({
        effect: rt.target,
        target: this,
        type: "get",
        key: t
      }), n.depend()), n.value;
  };
}
function N1(t) {
  return function() {
    return t.call(this, this);
  };
}
function Sz(t, e) {
  var n = t.$options.props;
  for (var r in e)
    process.env.NODE_ENV !== "production" && (typeof e[r] != "function" && M('Method "'.concat(r, '" has type "').concat(typeof e[r], '" in the component definition. ') + "Did you reference the function correctly?", t), n && Be(n, r) && M('Method "'.concat(r, '" has already been defined as a prop.'), t), r in t && Uh(r) && M('Method "'.concat(r, '" conflicts with an existing Vue instance method. ') + "Avoid defining component methods that start with _ or $.")), t[r] = typeof e[r] != "function" ? he : BO(e[r], t);
}
function xz(t, e) {
  for (var n in e) {
    var r = e[n];
    if (K(r))
      for (var i = 0; i < r.length; i++)
        xd(t, n, r[i]);
    else
      xd(t, n, r);
  }
}
function xd(t, e, n, r) {
  return Ke(n) && (r = n, n = n.handler), typeof n == "string" && (n = t[n]), t.$watch(e, n, r);
}
function Oz(t) {
  var e = {};
  e.get = function() {
    return this._data;
  };
  var n = {};
  n.get = function() {
    return this._props;
  }, process.env.NODE_ENV !== "production" && (e.set = function() {
    M("Avoid replacing instance root $data. Use nested data properties instead.", this);
  }, n.set = function() {
    M("$props is readonly.", this);
  }), Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", n), t.prototype.$set = nc, t.prototype.$delete = qh, t.prototype.$watch = function(r, i, o) {
    var s = this;
    if (Ke(i))
      return xd(s, r, i, o);
    o = o || {}, o.user = !0;
    var a = new xs(s, r, i, o);
    if (o.immediate) {
      var l = 'callback for immediate watcher "'.concat(a.expression, '"');
      lo(), An(i, s, [a.value], s, l), co();
    }
    return function() {
      a.teardown();
    };
  };
}
var Ez = 0;
function Cz(t) {
  t.prototype._init = function(e) {
    var n = this;
    n._uid = Ez++;
    var r, i;
    process.env.NODE_ENV !== "production" && ue.performance && ln && (r = "vue-perf-start:".concat(n._uid), i = "vue-perf-end:".concat(n._uid), ln(r)), n._isVue = !0, n.__v_skip = !0, n._scope = new Kh(
      !0
      /* detached */
    ), n._scope._vm = !0, e && e._isComponent ? _z(n, e) : n.$options = Yr(cm(n.constructor), e || {}, n), process.env.NODE_ENV !== "production" ? CE(n) : n._renderProxy = n, n._self = n, $B(n), _B(n), Xj(n), xt(
      n,
      "beforeCreate",
      void 0,
      !1
      /* setContext */
    ), VB(n), mz(n), zB(n), xt(n, "created"), process.env.NODE_ENV !== "production" && ue.performance && ln && (n._name = Pr(n, !1), ln(i), dl("vue ".concat(n._name, " init"), r, i)), n.$options.el && n.$mount(n.$options.el);
  };
}
function _z(t, e) {
  var n = t.$options = Object.create(t.constructor.options), r = e._parentVnode;
  n.parent = e.parent, n._parentVnode = r;
  var i = r.componentOptions;
  n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns);
}
function cm(t) {
  var e = t.options;
  if (t.super) {
    var n = cm(t.super), r = t.superOptions;
    if (n !== r) {
      t.superOptions = n;
      var i = kz(t);
      i && me(t.extendOptions, i), e = t.options = Yr(n, t.extendOptions), e.name && (e.components[e.name] = t);
    }
  }
  return e;
}
function kz(t) {
  var e, n = t.options, r = t.sealedOptions;
  for (var i in n)
    n[i] !== r[i] && (e || (e = {}), e[i] = n[i]);
  return e;
}
function Ce(t) {
  process.env.NODE_ENV !== "production" && !(this instanceof Ce) && M("Vue is a constructor and should be called with the `new` keyword"), this._init(t);
}
Cz(Ce);
Oz(Ce);
TB(Ce);
IB(Ce);
Yj(Ce);
function Nz(t) {
  t.use = function(e) {
    var n = this._installedPlugins || (this._installedPlugins = []);
    if (n.indexOf(e) > -1)
      return this;
    var r = ud(arguments, 1);
    return r.unshift(this), oe(e.install) ? e.install.apply(e, r) : oe(e) && e.apply(null, r), n.push(e), this;
  };
}
function Mz(t) {
  t.mixin = function(e) {
    return this.options = Yr(this.options, e), this;
  };
}
function Tz(t) {
  t.cid = 0;
  var e = 1;
  t.extend = function(n) {
    n = n || {};
    var r = this, i = r.cid, o = n._Ctor || (n._Ctor = {});
    if (o[i])
      return o[i];
    var s = qi(n) || qi(r.options);
    process.env.NODE_ENV !== "production" && s && om(s);
    var a = function(c) {
      this._init(c);
    };
    return a.prototype = Object.create(r.prototype), a.prototype.constructor = a, a.cid = e++, a.options = Yr(r.options, n), a.super = r, a.options.props && $z(a), a.options.computed && Iz(a), a.extend = r.extend, a.mixin = r.mixin, a.use = r.use, tc.forEach(function(l) {
      a[l] = r[l];
    }), s && (a.options.components[s] = a), a.superOptions = r.options, a.extendOptions = n, a.sealedOptions = me({}, a.options), o[i] = a, a;
  };
}
function $z(t) {
  var e = t.options.props;
  for (var n in e)
    lm(t.prototype, "_props", n);
}
function Iz(t) {
  var e = t.options.computed;
  for (var n in e)
    _E(t.prototype, n, e[n]);
}
function Pz(t) {
  tc.forEach(function(e) {
    t[e] = function(n, r) {
      return r ? (process.env.NODE_ENV !== "production" && e === "component" && om(n), e === "component" && Ke(r) && (r.name = r.name || n, r = this.options._base.extend(r)), e === "directive" && oe(r) && (r = { bind: r, update: r }), this.options[e + "s"][n] = r, r) : this.options[e + "s"][n];
    };
  });
}
function M1(t) {
  return t && (qi(t.Ctor.options) || t.tag);
}
function ga(t, e) {
  return K(t) ? t.indexOf(e) > -1 : typeof t == "string" ? t.split(",").indexOf(e) > -1 : RO(t) ? t.test(e) : !1;
}
function T1(t, e) {
  var n = t.cache, r = t.keys, i = t._vnode;
  for (var o in n) {
    var s = n[o];
    if (s) {
      var a = s.name;
      a && !e(a) && Od(n, o, r, i);
    }
  }
}
function Od(t, e, n, r) {
  var i = t[e];
  i && (!r || i.tag !== r.tag) && i.componentInstance.$destroy(), t[e] = null, yr(n, e);
}
var $1 = [String, RegExp, Array], Dz = {
  name: "keep-alive",
  abstract: !0,
  props: {
    include: $1,
    exclude: $1,
    max: [String, Number]
  },
  methods: {
    cacheVNode: function() {
      var t = this, e = t.cache, n = t.keys, r = t.vnodeToCache, i = t.keyToCache;
      if (r) {
        var o = r.tag, s = r.componentInstance, a = r.componentOptions;
        e[i] = {
          name: M1(a),
          tag: o,
          componentInstance: s
        }, n.push(i), this.max && n.length > parseInt(this.max) && Od(e, n[0], n, this._vnode), this.vnodeToCache = null;
      }
    }
  },
  created: function() {
    this.cache = /* @__PURE__ */ Object.create(null), this.keys = [];
  },
  destroyed: function() {
    for (var t in this.cache)
      Od(this.cache, t, this.keys);
  },
  mounted: function() {
    var t = this;
    this.cacheVNode(), this.$watch("include", function(e) {
      T1(t, function(n) {
        return ga(e, n);
      });
    }), this.$watch("exclude", function(e) {
      T1(t, function(n) {
        return !ga(e, n);
      });
    });
  },
  updated: function() {
    this.cacheVNode();
  },
  render: function() {
    var t = this.$slots.default, e = dE(t), n = e && e.componentOptions;
    if (n) {
      var r = M1(n), i = this, o = i.include, s = i.exclude;
      if (
        // not included
        o && (!r || !ga(o, r)) || // excluded
        s && r && ga(s, r)
      )
        return e;
      var a = this, l = a.cache, c = a.keys, u = e.key == null ? (
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        n.Ctor.cid + (n.tag ? "::".concat(n.tag) : "")
      ) : e.key;
      l[u] ? (e.componentInstance = l[u].componentInstance, yr(c, u), c.push(u)) : (this.vnodeToCache = e, this.keyToCache = u), e.data.keepAlive = !0;
    }
    return e || t && t[0];
  }
}, Az = {
  KeepAlive: Dz
};
function Rz(t) {
  var e = {};
  e.get = function() {
    return ue;
  }, process.env.NODE_ENV !== "production" && (e.set = function() {
    M("Do not replace the Vue.config object, set individual fields instead.");
  }), Object.defineProperty(t, "config", e), t.util = {
    warn: M,
    extend: me,
    mergeOptions: Yr,
    defineReactive: Dt
  }, t.set = nc, t.delete = qh, t.nextTick = oc, t.observable = function(n) {
    return Dn(n), n;
  }, t.options = /* @__PURE__ */ Object.create(null), tc.forEach(function(n) {
    t.options[n + "s"] = /* @__PURE__ */ Object.create(null);
  }), t.options._base = t, me(t.options.components, Az), Nz(t), Mz(t), Tz(t), Pz(t);
}
Rz(Ce);
Object.defineProperty(Ce.prototype, "$isServer", {
  get: br
});
Object.defineProperty(Ce.prototype, "$ssrContext", {
  get: function() {
    return this.$vnode && this.$vnode.ssrContext;
  }
});
Object.defineProperty(Ce, "FunctionalRenderContext", {
  value: nm
});
Ce.version = vE;
var Fz = Ct("style,class"), Lz = Ct("input,textarea,option,select,progress"), jz = function(t, e, n) {
  return n === "value" && Lz(t) && e !== "button" || n === "selected" && t === "option" || n === "checked" && t === "input" || n === "muted" && t === "video";
}, kE = Ct("contenteditable,draggable,spellcheck"), Bz = Ct("events,caret,typing,plaintext-only"), zz = function(t, e) {
  return vl(e) || e === "false" ? "false" : (
    // allow arbitrary string value for contenteditable
    t === "contenteditable" && Bz(e) ? e : "true"
  );
}, Vz = Ct("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"), Ed = "http://www.w3.org/1999/xlink", um = function(t) {
  return t.charAt(5) === ":" && t.slice(0, 5) === "xlink";
}, NE = function(t) {
  return um(t) ? t.slice(6, t.length) : "";
}, vl = function(t) {
  return t == null || t === !1;
};
function Wz(t) {
  for (var e = t.data, n = t, r = t; E(r.componentInstance); )
    r = r.componentInstance._vnode, r && r.data && (e = I1(r.data, e));
  for (; E(n = n.parent); )
    n && n.data && (e = I1(e, n.data));
  return Hz(e.staticClass, e.class);
}
function I1(t, e) {
  return {
    staticClass: fm(t.staticClass, e.staticClass),
    class: E(t.class) ? [t.class, e.class] : e.class
  };
}
function Hz(t, e) {
  return E(t) || E(e) ? fm(t, pm(e)) : "";
}
function fm(t, e) {
  return t ? e ? t + " " + e : t : e || "";
}
function pm(t) {
  return Array.isArray(t) ? Uz(t) : Ae(t) ? Gz(t) : typeof t == "string" ? t : "";
}
function Uz(t) {
  for (var e = "", n, r = 0, i = t.length; r < i; r++)
    E(n = pm(t[r])) && n !== "" && (e && (e += " "), e += n);
  return e;
}
function Gz(t) {
  var e = "";
  for (var n in t)
    t[n] && (e && (e += " "), e += n);
  return e;
}
var qz = {
  svg: "http://www.w3.org/2000/svg",
  math: "http://www.w3.org/1998/Math/MathML"
}, Jz = Ct("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"), dm = Ct("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0), ME = function(t) {
  return Jz(t) || dm(t);
};
function Kz(t) {
  if (dm(t))
    return "svg";
  if (t === "math")
    return "math";
}
var ya = /* @__PURE__ */ Object.create(null);
function Xz(t) {
  if (!dt)
    return !0;
  if (ME(t))
    return !1;
  if (t = t.toLowerCase(), ya[t] != null)
    return ya[t];
  var e = document.createElement(t);
  return t.indexOf("-") > -1 ? ya[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : ya[t] = /HTMLUnknownElement/.test(e.toString());
}
var Cd = Ct("text,number,password,search,email,tel,url");
function Yz(t) {
  if (typeof t == "string") {
    var e = document.querySelector(t);
    return e || (process.env.NODE_ENV !== "production" && M("Cannot find element: " + t), document.createElement("div"));
  } else
    return t;
}
function Zz(t, e) {
  var n = document.createElement(t);
  return t !== "select" || e.data && e.data.attrs && e.data.attrs.multiple !== void 0 && n.setAttribute("multiple", "multiple"), n;
}
function Qz(t, e) {
  return document.createElementNS(qz[t], e);
}
function eV(t) {
  return document.createTextNode(t);
}
function tV(t) {
  return document.createComment(t);
}
function nV(t, e, n) {
  t.insertBefore(e, n);
}
function rV(t, e) {
  t.removeChild(e);
}
function iV(t, e) {
  t.appendChild(e);
}
function oV(t) {
  return t.parentNode;
}
function sV(t) {
  return t.nextSibling;
}
function aV(t) {
  return t.tagName;
}
function lV(t, e) {
  t.textContent = e;
}
function cV(t, e) {
  t.setAttribute(e, "");
}
var uV = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  createElement: Zz,
  createElementNS: Qz,
  createTextNode: eV,
  createComment: tV,
  insertBefore: nV,
  removeChild: rV,
  appendChild: iV,
  parentNode: oV,
  nextSibling: sV,
  tagName: aV,
  setTextContent: lV,
  setStyleScope: cV
}), fV = {
  create: function(t, e) {
    Ii(e);
  },
  update: function(t, e) {
    t.data.ref !== e.data.ref && (Ii(t, !0), Ii(e));
  },
  destroy: function(t) {
    Ii(t, !0);
  }
};
function Ii(t, e) {
  var n = t.data.ref;
  if (E(n)) {
    var r = t.context, i = t.componentInstance || t.elm, o = e ? null : i, s = e ? void 0 : i;
    if (oe(n)) {
      An(n, r, [o], r, "template ref function");
      return;
    }
    var a = t.data.refInFor, l = typeof n == "string" || typeof n == "number", c = Je(n), u = r.$refs;
    if (l || c)
      if (a) {
        var f = l ? u[n] : n.value;
        e ? K(f) && yr(f, i) : K(f) ? f.includes(i) || f.push(i) : l ? (u[n] = [i], P1(r, n, u[n])) : n.value = [i];
      } else if (l) {
        if (e && u[n] !== i)
          return;
        u[n] = s, P1(r, n, o);
      } else if (c) {
        if (e && n.value !== i)
          return;
        n.value = o;
      } else
        process.env.NODE_ENV !== "production" && M("Invalid template ref type: ".concat(typeof n));
  }
}
function P1(t, e, n) {
  var r = t._setupState;
  r && Be(r, e) && (Je(r[e]) ? r[e].value = n : r[e] = n);
}
var Kn = new bt("", {}, []), ko = ["create", "activate", "update", "remove", "destroy"];
function _r(t, e) {
  return t.key === e.key && t.asyncFactory === e.asyncFactory && (t.tag === e.tag && t.isComment === e.isComment && E(t.data) === E(e.data) && pV(t, e) || xe(t.isAsyncPlaceholder) && J(e.asyncFactory.error));
}
function pV(t, e) {
  if (t.tag !== "input")
    return !0;
  var n, r = E(n = t.data) && E(n = n.attrs) && n.type, i = E(n = e.data) && E(n = n.attrs) && n.type;
  return r === i || Cd(r) && Cd(i);
}
function dV(t, e, n) {
  var r, i, o = {};
  for (r = e; r <= n; ++r)
    i = t[r].key, E(i) && (o[i] = r);
  return o;
}
function hV(t) {
  var e, n, r = {}, i = t.modules, o = t.nodeOps;
  for (e = 0; e < ko.length; ++e)
    for (r[ko[e]] = [], n = 0; n < i.length; ++n)
      E(i[n][ko[e]]) && r[ko[e]].push(i[n][ko[e]]);
  function s(x) {
    return new bt(o.tagName(x).toLowerCase(), {}, [], void 0, x);
  }
  function a(x, w) {
    function g() {
      --g.listeners === 0 && l(x);
    }
    return g.listeners = w, g;
  }
  function l(x) {
    var w = o.parentNode(x);
    E(w) && o.removeChild(w, x);
  }
  function c(x, w) {
    return !w && !x.ns && !(ue.ignoredElements.length && ue.ignoredElements.some(function(g) {
      return RO(g) ? g.test(x.tag) : g === x.tag;
    })) && ue.isUnknownElement(x.tag);
  }
  var u = 0;
  function f(x, w, g, S, _, D, P) {
    if (E(x.elm) && E(D) && (x = D[P] = dd(x)), x.isRootInsert = !_, !p(x, w, g, S)) {
      var A = x.data, U = x.children, H = x.tag;
      E(H) ? (process.env.NODE_ENV !== "production" && (A && A.pre && u++, c(x, u) && M("Unknown custom element: <" + H + '> - did you register the component correctly? For recursive components, make sure to provide the "name" option.', x.context)), x.elm = x.ns ? o.createElementNS(x.ns, H) : o.createElement(H, x), O(x), v(x, U, w), E(A) && C(x, w), m(g, x.elm, S), process.env.NODE_ENV !== "production" && A && A.pre && u--) : xe(x.isComment) ? (x.elm = o.createComment(x.text), m(g, x.elm, S)) : (x.elm = o.createTextNode(x.text), m(g, x.elm, S));
    }
  }
  function p(x, w, g, S) {
    var _ = x.data;
    if (E(_)) {
      var D = E(x.componentInstance) && _.keepAlive;
      if (E(_ = _.hook) && E(_ = _.init) && _(
        x,
        !1
        /* hydrating */
      ), E(x.componentInstance))
        return d(x, w), m(g, x.elm, S), xe(D) && h(x, w, g, S), !0;
    }
  }
  function d(x, w) {
    E(x.data.pendingInsert) && (w.push.apply(w, x.data.pendingInsert), x.data.pendingInsert = null), x.elm = x.componentInstance.$el, y(x) ? (C(x, w), O(x)) : (Ii(x), w.push(x));
  }
  function h(x, w, g, S) {
    for (var _, D = x; D.componentInstance; )
      if (D = D.componentInstance._vnode, E(_ = D.data) && E(_ = _.transition)) {
        for (_ = 0; _ < r.activate.length; ++_)
          r.activate[_](Kn, D);
        w.push(D);
        break;
      }
    m(g, x.elm, S);
  }
  function m(x, w, g) {
    E(x) && (E(g) ? o.parentNode(g) === x && o.insertBefore(x, w, g) : o.appendChild(x, w));
  }
  function v(x, w, g) {
    if (K(w)) {
      process.env.NODE_ENV !== "production" && j(w);
      for (var S = 0; S < w.length; ++S)
        f(w[S], g, x.elm, null, !0, w, S);
    } else
      jn(x.text) && o.appendChild(x.elm, o.createTextNode(String(x.text)));
  }
  function y(x) {
    for (; x.componentInstance; )
      x = x.componentInstance._vnode;
    return E(x.tag);
  }
  function C(x, w) {
    for (var g = 0; g < r.create.length; ++g)
      r.create[g](Kn, x);
    e = x.data.hook, E(e) && (E(e.create) && e.create(Kn, x), E(e.insert) && w.push(x));
  }
  function O(x) {
    var w;
    if (E(w = x.fnScopeId))
      o.setStyleScope(x.elm, w);
    else
      for (var g = x; g; )
        E(w = g.context) && E(w = w.$options._scopeId) && o.setStyleScope(x.elm, w), g = g.parent;
    E(w = Vr) && w !== x.context && w !== x.fnContext && E(w = w.$options._scopeId) && o.setStyleScope(x.elm, w);
  }
  function N(x, w, g, S, _, D) {
    for (; S <= _; ++S)
      f(g[S], D, x, w, !1, g, S);
  }
  function T(x) {
    var w, g, S = x.data;
    if (E(S))
      for (E(w = S.hook) && E(w = w.destroy) && w(x), w = 0; w < r.destroy.length; ++w)
        r.destroy[w](x);
    if (E(w = x.children))
      for (g = 0; g < x.children.length; ++g)
        T(x.children[g]);
  }
  function B(x, w, g) {
    for (; w <= g; ++w) {
      var S = x[w];
      E(S) && (E(S.tag) ? (b(S), T(S)) : l(S.elm));
    }
  }
  function b(x, w) {
    if (E(w) || E(x.data)) {
      var g, S = r.remove.length + 1;
      for (E(w) ? w.listeners += S : w = a(x.elm, S), E(g = x.componentInstance) && E(g = g._vnode) && E(g.data) && b(g, w), g = 0; g < r.remove.length; ++g)
        r.remove[g](x, w);
      E(g = x.data.hook) && E(g = g.remove) ? g(x, w) : w();
    } else
      l(x.elm);
  }
  function re(x, w, g, S, _) {
    var D = 0, P = 0, A = w.length - 1, U = w[0], H = w[A], q = g.length - 1, Z = g[0], ye = g[q], ve, fe, it, wr, Ut = !_;
    for (process.env.NODE_ENV !== "production" && j(g); D <= A && P <= q; )
      J(U) ? U = w[++D] : J(H) ? H = w[--A] : _r(U, Z) ? (ee(U, Z, S, g, P), U = w[++D], Z = g[++P]) : _r(H, ye) ? (ee(H, ye, S, g, q), H = w[--A], ye = g[--q]) : _r(U, ye) ? (ee(U, ye, S, g, q), Ut && o.insertBefore(x, U.elm, o.nextSibling(H.elm)), U = w[++D], ye = g[--q]) : _r(H, Z) ? (ee(H, Z, S, g, P), Ut && o.insertBefore(x, H.elm, U.elm), H = w[--A], Z = g[++P]) : (J(ve) && (ve = dV(w, D, A)), fe = E(Z.key) ? ve[Z.key] : Q(Z, w, D, A), J(fe) ? f(Z, S, x, U.elm, !1, g, P) : (it = w[fe], _r(it, Z) ? (ee(it, Z, S, g, P), w[fe] = void 0, Ut && o.insertBefore(x, it.elm, U.elm)) : f(Z, S, x, U.elm, !1, g, P)), Z = g[++P]);
    D > A ? (wr = J(g[q + 1]) ? null : g[q + 1].elm, N(x, wr, g, P, q, S)) : P > q && B(w, D, A);
  }
  function j(x) {
    for (var w = {}, g = 0; g < x.length; g++) {
      var S = x[g], _ = S.key;
      E(_) && (w[_] ? M("Duplicate keys detected: '".concat(_, "'. This may cause an update error."), S.context) : w[_] = !0);
    }
  }
  function Q(x, w, g, S) {
    for (var _ = g; _ < S; _++) {
      var D = w[_];
      if (E(D) && _r(x, D))
        return _;
    }
  }
  function ee(x, w, g, S, _, D) {
    if (x !== w) {
      E(w.elm) && E(S) && (w = S[_] = dd(w));
      var P = w.elm = x.elm;
      if (xe(x.isAsyncPlaceholder)) {
        E(w.asyncFactory.resolved) ? He(x.elm, w, g) : w.isAsyncPlaceholder = !0;
        return;
      }
      if (xe(w.isStatic) && xe(x.isStatic) && w.key === x.key && (xe(w.isCloned) || xe(w.isOnce))) {
        w.componentInstance = x.componentInstance;
        return;
      }
      var A, U = w.data;
      E(U) && E(A = U.hook) && E(A = A.prepatch) && A(x, w);
      var H = x.children, q = w.children;
      if (E(U) && y(w)) {
        for (A = 0; A < r.update.length; ++A)
          r.update[A](x, w);
        E(A = U.hook) && E(A = A.update) && A(x, w);
      }
      J(w.text) ? E(H) && E(q) ? H !== q && re(P, H, q, g, D) : E(q) ? (process.env.NODE_ENV !== "production" && j(q), E(x.text) && o.setTextContent(P, ""), N(P, null, q, 0, q.length - 1, g)) : E(H) ? B(H, 0, H.length - 1) : E(x.text) && o.setTextContent(P, "") : x.text !== w.text && o.setTextContent(P, w.text), E(U) && E(A = U.hook) && E(A = A.postpatch) && A(x, w);
    }
  }
  function ke(x, w, g) {
    if (xe(g) && E(x.parent))
      x.parent.data.pendingInsert = w;
    else
      for (var S = 0; S < w.length; ++S)
        w[S].data.hook.insert(w[S]);
  }
  var $e = !1, Nt = Ct("attrs,class,staticClass,staticStyle,key");
  function He(x, w, g, S) {
    var _, D = w.tag, P = w.data, A = w.children;
    if (S = S || P && P.pre, w.elm = x, xe(w.isComment) && E(w.asyncFactory))
      return w.isAsyncPlaceholder = !0, !0;
    if (process.env.NODE_ENV !== "production" && !Xe(x, w, S))
      return !1;
    if (E(P) && (E(_ = P.hook) && E(_ = _.init) && _(
      w,
      !0
      /* hydrating */
    ), E(_ = w.componentInstance)))
      return d(w, g), !0;
    if (E(D)) {
      if (E(A))
        if (!x.hasChildNodes())
          v(w, A, g);
        else if (E(_ = P) && E(_ = _.domProps) && E(_ = _.innerHTML)) {
          if (_ !== x.innerHTML)
            return process.env.NODE_ENV !== "production" && typeof console < "u" && !$e && ($e = !0, console.warn("Parent: ", x), console.warn("server innerHTML: ", _), console.warn("client innerHTML: ", x.innerHTML)), !1;
        } else {
          for (var U = !0, H = x.firstChild, q = 0; q < A.length; q++) {
            if (!H || !He(H, A[q], g, S)) {
              U = !1;
              break;
            }
            H = H.nextSibling;
          }
          if (!U || H)
            return process.env.NODE_ENV !== "production" && typeof console < "u" && !$e && ($e = !0, console.warn("Parent: ", x), console.warn("Mismatching childNodes vs. VNodes: ", x.childNodes, A)), !1;
        }
      if (E(P)) {
        var Z = !1;
        for (var ye in P)
          if (!Nt(ye)) {
            Z = !0, C(w, g);
            break;
          }
        !Z && P.class && Gi(P.class);
      }
    } else
      x.data !== w.text && (x.data = w.text);
    return !0;
  }
  function Xe(x, w, g) {
    return E(w.tag) ? w.tag.indexOf("vue-component") === 0 || !c(w, g) && w.tag.toLowerCase() === (x.tagName && x.tagName.toLowerCase()) : x.nodeType === (w.isComment ? 8 : 3);
  }
  return function(w, g, S, _) {
    if (J(g)) {
      E(w) && T(w);
      return;
    }
    var D = !1, P = [];
    if (J(w))
      D = !0, f(g, P);
    else {
      var A = E(w.nodeType);
      if (!A && _r(w, g))
        ee(w, g, P, null, null, _);
      else {
        if (A) {
          if (w.nodeType === 1 && w.hasAttribute(Z0) && (w.removeAttribute(Z0), S = !0), xe(S)) {
            if (He(w, g, P))
              return ke(g, P, !0), w;
            process.env.NODE_ENV !== "production" && M("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.");
          }
          w = s(w);
        }
        var U = w.elm, H = o.parentNode(U);
        if (f(
          g,
          P,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          U._leaveCb ? null : H,
          o.nextSibling(U)
        ), E(g.parent))
          for (var q = g.parent, Z = y(g); q; ) {
            for (var ye = 0; ye < r.destroy.length; ++ye)
              r.destroy[ye](q);
            if (q.elm = g.elm, Z) {
              for (var ve = 0; ve < r.create.length; ++ve)
                r.create[ve](Kn, q);
              var fe = q.data.hook.insert;
              if (fe.merged)
                for (var it = 1; it < fe.fns.length; it++)
                  fe.fns[it]();
            } else
              Ii(q);
            q = q.parent;
          }
        E(H) ? B([w], 0, 0) : E(w.tag) && T(w);
      }
    }
    return ke(g, P, D), g.elm;
  };
}
var mV = {
  create: qf,
  update: qf,
  destroy: function(e) {
    qf(e, Kn);
  }
};
function qf(t, e) {
  (t.data.directives || e.data.directives) && vV(t, e);
}
function vV(t, e) {
  var n = t === Kn, r = e === Kn, i = D1(t.data.directives, t.context), o = D1(e.data.directives, e.context), s = [], a = [], l, c, u;
  for (l in o)
    c = i[l], u = o[l], c ? (u.oldValue = c.value, u.oldArg = c.arg, No(u, "update", e, t), u.def && u.def.componentUpdated && a.push(u)) : (No(u, "bind", e, t), u.def && u.def.inserted && s.push(u));
  if (s.length) {
    var f = function() {
      for (var p = 0; p < s.length; p++)
        No(s[p], "inserted", e, t);
    };
    n ? Jn(e, "insert", f) : f();
  }
  if (a.length && Jn(e, "postpatch", function() {
    for (var p = 0; p < a.length; p++)
      No(a[p], "componentUpdated", e, t);
  }), !n)
    for (l in i)
      o[l] || No(i[l], "unbind", t, t, r);
}
var gV = /* @__PURE__ */ Object.create(null);
function D1(t, e) {
  var n = /* @__PURE__ */ Object.create(null);
  if (!t)
    return n;
  var r, i;
  for (r = 0; r < t.length; r++) {
    if (i = t[r], i.modifiers || (i.modifiers = gV), n[yV(i)] = i, e._setupState && e._setupState.__sfc) {
      var o = i.def || hl(e, "_setupState", "v-" + i.name);
      typeof o == "function" ? i.def = {
        bind: o,
        update: o
      } : i.def = o;
    }
    i.def = i.def || hl(e.$options, "directives", i.name, !0);
  }
  return n;
}
function yV(t) {
  return t.rawName || "".concat(t.name, ".").concat(Object.keys(t.modifiers || {}).join("."));
}
function No(t, e, n, r, i) {
  var o = t.def && t.def[e];
  if (o)
    try {
      o(n.elm, t, n, r, i);
    } catch (s) {
      ar(s, n.context, "directive ".concat(t.name, " ").concat(e, " hook"));
    }
}
var bV = [fV, mV];
function A1(t, e) {
  var n = e.componentOptions;
  if (!(E(n) && n.Ctor.options.inheritAttrs === !1) && !(J(t.data.attrs) && J(e.data.attrs))) {
    var r, i, o, s = e.elm, a = t.data.attrs || {}, l = e.data.attrs || {};
    (E(l.__ob__) || xe(l._v_attr_proxy)) && (l = e.data.attrs = me({}, l));
    for (r in l)
      i = l[r], o = a[r], o !== i && R1(s, r, i, e.data.pre);
    (so || GO) && l.value !== a.value && R1(s, "value", l.value);
    for (r in a)
      J(l[r]) && (um(r) ? s.removeAttributeNS(Ed, NE(r)) : kE(r) || s.removeAttribute(r));
  }
}
function R1(t, e, n, r) {
  r || t.tagName.indexOf("-") > -1 ? F1(t, e, n) : Vz(e) ? vl(n) ? t.removeAttribute(e) : (n = e === "allowfullscreen" && t.tagName === "EMBED" ? "true" : e, t.setAttribute(e, n)) : kE(e) ? t.setAttribute(e, zz(e, n)) : um(e) ? vl(n) ? t.removeAttributeNS(Ed, NE(e)) : t.setAttributeNS(Ed, e, n) : F1(t, e, n);
}
function F1(t, e, n) {
  if (vl(n))
    t.removeAttribute(e);
  else {
    if (so && !ao && t.tagName === "TEXTAREA" && e === "placeholder" && n !== "" && !t.__ieph) {
      var r = function(i) {
        i.stopImmediatePropagation(), t.removeEventListener("input", r);
      };
      t.addEventListener("input", r), t.__ieph = !0;
    }
    t.setAttribute(e, n);
  }
}
var wV = {
  create: A1,
  update: A1
};
function L1(t, e) {
  var n = e.elm, r = e.data, i = t.data;
  if (!(J(r.staticClass) && J(r.class) && (J(i) || J(i.staticClass) && J(i.class)))) {
    var o = Wz(e), s = n._transitionClasses;
    E(s) && (o = fm(o, pm(s))), o !== n._prevClass && (n.setAttribute("class", o), n._prevClass = o);
  }
}
var SV = {
  create: L1,
  update: L1
}, Jf = "__r", Kf = "__c";
function xV(t) {
  if (E(t[Jf])) {
    var e = so ? "change" : "input";
    t[e] = [].concat(t[Jf], t[e] || []), delete t[Jf];
  }
  E(t[Kf]) && (t.change = [].concat(t[Kf], t.change || []), delete t[Kf]);
}
var ls;
function OV(t, e, n) {
  var r = ls;
  return function i() {
    var o = e.apply(null, arguments);
    o !== null && TE(t, i, n, r);
  };
}
var EV = vd && !(Q0 && Number(Q0[1]) <= 53);
function CV(t, e, n, r) {
  if (EV) {
    var i = SE, o = e;
    e = o._wrapper = function(s) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        s.target === s.currentTarget || // event is fired after handler attachment
        s.timeStamp >= i || // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        s.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        s.target.ownerDocument !== document
      )
        return o.apply(this, arguments);
    };
  }
  ls.addEventListener(t, e, qO ? { capture: n, passive: r } : n);
}
function TE(t, e, n, r) {
  (r || ls).removeEventListener(
    t,
    //@ts-expect-error
    e._wrapper || e,
    n
  );
}
function Xf(t, e) {
  if (!(J(t.data.on) && J(e.data.on))) {
    var n = e.data.on || {}, r = t.data.on || {};
    ls = e.elm || t.elm, xV(n), sE(n, r, CV, TE, OV, e.context), ls = void 0;
  }
}
var _V = {
  create: Xf,
  update: Xf,
  // @ts-expect-error emptyNode has actually data
  destroy: function(t) {
    return Xf(t, Kn);
  }
}, ba;
function j1(t, e) {
  if (!(J(t.data.domProps) && J(e.data.domProps))) {
    var n, r, i = e.elm, o = t.data.domProps || {}, s = e.data.domProps || {};
    (E(s.__ob__) || xe(s._v_attr_proxy)) && (s = e.data.domProps = me({}, s));
    for (n in o)
      n in s || (i[n] = "");
    for (n in s) {
      if (r = s[n], n === "textContent" || n === "innerHTML") {
        if (e.children && (e.children.length = 0), r === o[n])
          continue;
        i.childNodes.length === 1 && i.removeChild(i.childNodes[0]);
      }
      if (n === "value" && i.tagName !== "PROGRESS") {
        i._value = r;
        var a = J(r) ? "" : String(r);
        kV(i, a) && (i.value = a);
      } else if (n === "innerHTML" && dm(i.tagName) && J(i.innerHTML)) {
        ba = ba || document.createElement("div"), ba.innerHTML = "<svg>".concat(r, "</svg>");
        for (var l = ba.firstChild; i.firstChild; )
          i.removeChild(i.firstChild);
        for (; l.firstChild; )
          i.appendChild(l.firstChild);
      } else if (
        // skip the update if old and new VDOM state is the same.
        // `value` is handled separately because the DOM value may be temporarily
        // out of sync with VDOM state due to focus, composition and modifiers.
        // This  #4521 by skipping the unnecessary `checked` update.
        r !== o[n]
      )
        try {
          i[n] = r;
        } catch {
        }
    }
  }
}
function kV(t, e) {
  return (
    //@ts-expect-error
    !t.composing && (t.tagName === "OPTION" || NV(t, e) || MV(t, e))
  );
}
function NV(t, e) {
  var n = !0;
  try {
    n = document.activeElement !== t;
  } catch {
  }
  return n && t.value !== e;
}
function MV(t, e) {
  var n = t.value, r = t._vModifiers;
  if (E(r)) {
    if (r.number)
      return Qo(n) !== Qo(e);
    if (r.trim)
      return n.trim() !== e.trim();
  }
  return n !== e;
}
var TV = {
  create: j1,
  update: j1
}, $V = li(function(t) {
  var e = {}, n = /;(?![^(]*\))/g, r = /:(.+)/;
  return t.split(n).forEach(function(i) {
    if (i) {
      var o = i.split(r);
      o.length > 1 && (e[o[0].trim()] = o[1].trim());
    }
  }), e;
});
function Yf(t) {
  var e = $E(t.style);
  return t.staticStyle ? me(t.staticStyle, e) : e;
}
function $E(t) {
  return Array.isArray(t) ? zO(t) : typeof t == "string" ? $V(t) : t;
}
function IV(t, e) {
  var n = {}, r;
  if (e)
    for (var i = t; i.componentInstance; )
      i = i.componentInstance._vnode, i && i.data && (r = Yf(i.data)) && me(n, r);
  (r = Yf(t.data)) && me(n, r);
  for (var o = t; o = o.parent; )
    o.data && (r = Yf(o.data)) && me(n, r);
  return n;
}
var PV = /^--/, B1 = /\s*!important$/, z1 = function(t, e, n) {
  if (PV.test(e))
    t.style.setProperty(e, n);
  else if (B1.test(n))
    t.style.setProperty(ci(e), n.replace(B1, ""), "important");
  else {
    var r = DV(e);
    if (Array.isArray(n))
      for (var i = 0, o = n.length; i < o; i++)
        t.style[r] = n[i];
    else
      t.style[r] = n;
  }
}, V1 = ["Webkit", "Moz", "ms"], wa, DV = li(function(t) {
  if (wa = wa || document.createElement("div").style, t = Kr(t), t !== "filter" && t in wa)
    return t;
  for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < V1.length; n++) {
    var r = V1[n] + e;
    if (r in wa)
      return r;
  }
});
function W1(t, e) {
  var n = e.data, r = t.data;
  if (!(J(n.staticStyle) && J(n.style) && J(r.staticStyle) && J(r.style))) {
    var i, o, s = e.elm, a = r.staticStyle, l = r.normalizedStyle || r.style || {}, c = a || l, u = $E(e.data.style) || {};
    e.data.normalizedStyle = E(u.__ob__) ? me({}, u) : u;
    var f = IV(e, !0);
    for (o in c)
      J(f[o]) && z1(s, o, "");
    for (o in f)
      i = f[o], i !== c[o] && z1(s, o, i ?? "");
  }
}
var AV = {
  create: W1,
  update: W1
}, IE = /\s+/;
function PE(t, e) {
  if (!(!e || !(e = e.trim())))
    if (t.classList)
      e.indexOf(" ") > -1 ? e.split(IE).forEach(function(r) {
        return t.classList.add(r);
      }) : t.classList.add(e);
    else {
      var n = " ".concat(t.getAttribute("class") || "", " ");
      n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim());
    }
}
function DE(t, e) {
  if (!(!e || !(e = e.trim())))
    if (t.classList)
      e.indexOf(" ") > -1 ? e.split(IE).forEach(function(i) {
        return t.classList.remove(i);
      }) : t.classList.remove(e), t.classList.length || t.removeAttribute("class");
    else {
      for (var n = " ".concat(t.getAttribute("class") || "", " "), r = " " + e + " "; n.indexOf(r) >= 0; )
        n = n.replace(r, " ");
      n = n.trim(), n ? t.setAttribute("class", n) : t.removeAttribute("class");
    }
}
function AE(t) {
  if (t) {
    if (typeof t == "object") {
      var e = {};
      return t.css !== !1 && me(e, H1(t.name || "v")), me(e, t), e;
    } else if (typeof t == "string")
      return H1(t);
  }
}
var H1 = li(function(t) {
  return {
    enterClass: "".concat(t, "-enter"),
    enterToClass: "".concat(t, "-enter-to"),
    enterActiveClass: "".concat(t, "-enter-active"),
    leaveClass: "".concat(t, "-leave"),
    leaveToClass: "".concat(t, "-leave-to"),
    leaveActiveClass: "".concat(t, "-leave-active")
  };
}), RE = dt && !ao, Ci = "transition", Zf = "animation", Fa = "transition", gl = "transitionend", _d = "animation", FE = "animationend";
RE && (window.ontransitionend === void 0 && window.onwebkittransitionend !== void 0 && (Fa = "WebkitTransition", gl = "webkitTransitionEnd"), window.onanimationend === void 0 && window.onwebkitanimationend !== void 0 && (_d = "WebkitAnimation", FE = "webkitAnimationEnd"));
var U1 = dt ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : (
  /* istanbul ignore next */
  function(t) {
    return t();
  }
);
function LE(t) {
  U1(function() {
    U1(t);
  });
}
function Wr(t, e) {
  var n = t._transitionClasses || (t._transitionClasses = []);
  n.indexOf(e) < 0 && (n.push(e), PE(t, e));
}
function $n(t, e) {
  t._transitionClasses && yr(t._transitionClasses, e), DE(t, e);
}
function jE(t, e, n) {
  var r = BE(t, e), i = r.type, o = r.timeout, s = r.propCount;
  if (!i)
    return n();
  var a = i === Ci ? gl : FE, l = 0, c = function() {
    t.removeEventListener(a, u), n();
  }, u = function(f) {
    f.target === t && ++l >= s && c();
  };
  setTimeout(function() {
    l < s && c();
  }, o + 1), t.addEventListener(a, u);
}
var RV = /\b(transform|all)(,|$)/;
function BE(t, e) {
  var n = window.getComputedStyle(t), r = (n[Fa + "Delay"] || "").split(", "), i = (n[Fa + "Duration"] || "").split(", "), o = G1(r, i), s = (n[_d + "Delay"] || "").split(", "), a = (n[_d + "Duration"] || "").split(", "), l = G1(s, a), c, u = 0, f = 0;
  e === Ci ? o > 0 && (c = Ci, u = o, f = i.length) : e === Zf ? l > 0 && (c = Zf, u = l, f = a.length) : (u = Math.max(o, l), c = u > 0 ? o > l ? Ci : Zf : null, f = c ? c === Ci ? i.length : a.length : 0);
  var p = c === Ci && RV.test(n[Fa + "Property"]);
  return {
    type: c,
    timeout: u,
    propCount: f,
    hasTransform: p
  };
}
function G1(t, e) {
  for (; t.length < e.length; )
    t = t.concat(t);
  return Math.max.apply(null, e.map(function(n, r) {
    return q1(n) + q1(t[r]);
  }));
}
function q1(t) {
  return Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function kd(t, e) {
  var n = t.elm;
  E(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
  var r = AE(t.data.transition);
  if (!J(r) && !(E(n._enterCb) || n.nodeType !== 1)) {
    for (var i = r.css, o = r.type, s = r.enterClass, a = r.enterToClass, l = r.enterActiveClass, c = r.appearClass, u = r.appearToClass, f = r.appearActiveClass, p = r.beforeEnter, d = r.enter, h = r.afterEnter, m = r.enterCancelled, v = r.beforeAppear, y = r.appear, C = r.afterAppear, O = r.appearCancelled, N = r.duration, T = Vr, B = Vr.$vnode; B && B.parent; )
      T = B.context, B = B.parent;
    var b = !T._isMounted || !t.isRootInsert;
    if (!(b && !y && y !== "")) {
      var re = b && c ? c : s, j = b && f ? f : l, Q = b && u ? u : a, ee = b && v || p, ke = b && oe(y) ? y : d, $e = b && C || h, Nt = b && O || m, He = Qo(Ae(N) ? N.enter : N);
      process.env.NODE_ENV !== "production" && He != null && VE(He, "enter", t);
      var Xe = i !== !1 && !ao, x = hm(ke), w = n._enterCb = al(function() {
        Xe && ($n(n, Q), $n(n, j)), w.cancelled ? (Xe && $n(n, re), Nt && Nt(n)) : $e && $e(n), n._enterCb = null;
      });
      t.data.show || Jn(t, "insert", function() {
        var g = n.parentNode, S = g && g._pending && g._pending[t.key];
        S && S.tag === t.tag && S.elm._leaveCb && S.elm._leaveCb(), ke && ke(n, w);
      }), ee && ee(n), Xe && (Wr(n, re), Wr(n, j), LE(function() {
        $n(n, re), w.cancelled || (Wr(n, Q), x || (WE(He) ? setTimeout(w, He) : jE(n, o, w)));
      })), t.data.show && (e && e(), ke && ke(n, w)), !Xe && !x && w();
    }
  }
}
function zE(t, e) {
  var n = t.elm;
  E(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
  var r = AE(t.data.transition);
  if (J(r) || n.nodeType !== 1)
    return e();
  if (E(n._leaveCb))
    return;
  var i = r.css, o = r.type, s = r.leaveClass, a = r.leaveToClass, l = r.leaveActiveClass, c = r.beforeLeave, u = r.leave, f = r.afterLeave, p = r.leaveCancelled, d = r.delayLeave, h = r.duration, m = i !== !1 && !ao, v = hm(u), y = Qo(Ae(h) ? h.leave : h);
  process.env.NODE_ENV !== "production" && E(y) && VE(y, "leave", t);
  var C = n._leaveCb = al(function() {
    n.parentNode && n.parentNode._pending && (n.parentNode._pending[t.key] = null), m && ($n(n, a), $n(n, l)), C.cancelled ? (m && $n(n, s), p && p(n)) : (e(), f && f(n)), n._leaveCb = null;
  });
  d ? d(O) : O();
  function O() {
    C.cancelled || (!t.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[t.key] = t), c && c(n), m && (Wr(n, s), Wr(n, l), LE(function() {
      $n(n, s), C.cancelled || (Wr(n, a), v || (WE(y) ? setTimeout(C, y) : jE(n, o, C)));
    })), u && u(n, C), !m && !v && C());
  }
}
function VE(t, e, n) {
  typeof t != "number" ? M("<transition> explicit ".concat(e, " duration is not a valid number - ") + "got ".concat(JSON.stringify(t), "."), n.context) : isNaN(t) && M("<transition> explicit ".concat(e, " duration is NaN - ") + "the duration expression might be incorrect.", n.context);
}
function WE(t) {
  return typeof t == "number" && !isNaN(t);
}
function hm(t) {
  if (J(t))
    return !1;
  var e = t.fns;
  return E(e) ? hm(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1;
}
function J1(t, e) {
  e.data.show !== !0 && kd(e);
}
var FV = dt ? {
  create: J1,
  activate: J1,
  remove: function(t, e) {
    t.data.show !== !0 ? zE(t, e) : e();
  }
} : {}, LV = [wV, SV, _V, TV, AV, FV], jV = LV.concat(bV), BV = hV({ nodeOps: uV, modules: jV });
ao && document.addEventListener("selectionchange", function() {
  var t = document.activeElement;
  t && t.vmodel && mm(t, "input");
});
var HE = {
  inserted: function(t, e, n, r) {
    n.tag === "select" ? (r.elm && !r.elm._vOptions ? Jn(n, "postpatch", function() {
      HE.componentUpdated(t, e, n);
    }) : K1(t, e, n.context), t._vOptions = [].map.call(t.options, yl)) : (n.tag === "textarea" || Cd(t.type)) && (t._vModifiers = e.modifiers, e.modifiers.lazy || (t.addEventListener("compositionstart", zV), t.addEventListener("compositionend", Z1), t.addEventListener("change", Z1), ao && (t.vmodel = !0)));
  },
  componentUpdated: function(t, e, n) {
    if (n.tag === "select") {
      K1(t, e, n.context);
      var r = t._vOptions, i = t._vOptions = [].map.call(t.options, yl);
      if (i.some(function(s, a) {
        return !Xr(s, r[a]);
      })) {
        var o = t.multiple ? e.value.some(function(s) {
          return Y1(s, i);
        }) : e.value !== e.oldValue && Y1(e.value, i);
        o && mm(t, "change");
      }
    }
  }
};
function K1(t, e, n) {
  X1(t, e, n), (so || GO) && setTimeout(function() {
    X1(t, e, n);
  }, 0);
}
function X1(t, e, n) {
  var r = e.value, i = t.multiple;
  if (i && !Array.isArray(r)) {
    process.env.NODE_ENV !== "production" && M('<select multiple v-model="'.concat(e.expression, '"> ') + "expects an Array value for its binding, but got ".concat(Object.prototype.toString.call(r).slice(8, -1)), n);
    return;
  }
  for (var o, s, a = 0, l = t.options.length; a < l; a++)
    if (s = t.options[a], i)
      o = WO(r, yl(s)) > -1, s.selected !== o && (s.selected = o);
    else if (Xr(yl(s), r)) {
      t.selectedIndex !== a && (t.selectedIndex = a);
      return;
    }
  i || (t.selectedIndex = -1);
}
function Y1(t, e) {
  return e.every(function(n) {
    return !Xr(n, t);
  });
}
function yl(t) {
  return "_value" in t ? t._value : t.value;
}
function zV(t) {
  t.target.composing = !0;
}
function Z1(t) {
  t.target.composing && (t.target.composing = !1, mm(t.target, "input"));
}
function mm(t, e) {
  var n = document.createEvent("HTMLEvents");
  n.initEvent(e, !0, !0), t.dispatchEvent(n);
}
function Nd(t) {
  return t.componentInstance && (!t.data || !t.data.transition) ? Nd(t.componentInstance._vnode) : t;
}
var VV = {
  bind: function(t, e, n) {
    var r = e.value;
    n = Nd(n);
    var i = n.data && n.data.transition, o = t.__vOriginalDisplay = t.style.display === "none" ? "" : t.style.display;
    r && i ? (n.data.show = !0, kd(n, function() {
      t.style.display = o;
    })) : t.style.display = r ? o : "none";
  },
  update: function(t, e, n) {
    var r = e.value, i = e.oldValue;
    if (!r != !i) {
      n = Nd(n);
      var o = n.data && n.data.transition;
      o ? (n.data.show = !0, r ? kd(n, function() {
        t.style.display = t.__vOriginalDisplay;
      }) : zE(n, function() {
        t.style.display = "none";
      })) : t.style.display = r ? t.__vOriginalDisplay : "none";
    }
  },
  unbind: function(t, e, n, r, i) {
    i || (t.style.display = t.__vOriginalDisplay);
  }
}, WV = {
  model: HE,
  show: VV
}, UE = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};
function Md(t) {
  var e = t && t.componentOptions;
  return e && e.Ctor.options.abstract ? Md(dE(e.children)) : t;
}
function GE(t) {
  var e = {}, n = t.$options;
  for (var r in n.propsData)
    e[r] = t[r];
  var i = n._parentListeners;
  for (var r in i)
    e[Kr(r)] = i[r];
  return e;
}
function Q1(t, e) {
  if (/\d-keep-alive$/.test(e.tag))
    return t("keep-alive", {
      props: e.componentOptions.propsData
    });
}
function HV(t) {
  for (; t = t.parent; )
    if (t.data.transition)
      return !0;
}
function UV(t, e) {
  return e.key === t.key && e.tag === t.tag;
}
var GV = function(t) {
  return t.tag || ts(t);
}, qV = function(t) {
  return t.name === "show";
}, JV = {
  name: "transition",
  props: UE,
  abstract: !0,
  render: function(t) {
    var e = this, n = this.$slots.default;
    if (n && (n = n.filter(GV), !!n.length)) {
      process.env.NODE_ENV !== "production" && n.length > 1 && M("<transition> can only be used on a single element. Use <transition-group> for lists.", this.$parent);
      var r = this.mode;
      process.env.NODE_ENV !== "production" && r && r !== "in-out" && r !== "out-in" && M("invalid <transition> mode: " + r, this.$parent);
      var i = n[0];
      if (HV(this.$vnode))
        return i;
      var o = Md(i);
      if (!o)
        return i;
      if (this._leaving)
        return Q1(t, i);
      var s = "__transition-".concat(this._uid, "-");
      o.key = o.key == null ? o.isComment ? s + "comment" : s + o.tag : jn(o.key) ? String(o.key).indexOf(s) === 0 ? o.key : s + o.key : o.key;
      var a = (o.data || (o.data = {})).transition = GE(this), l = this._vnode, c = Md(l);
      if (o.data.directives && o.data.directives.some(qV) && (o.data.show = !0), c && c.data && !UV(o, c) && !ts(c) && // #6687 component root is a comment node
      !(c.componentInstance && c.componentInstance._vnode.isComment)) {
        var u = c.data.transition = me({}, a);
        if (r === "out-in")
          return this._leaving = !0, Jn(u, "afterLeave", function() {
            e._leaving = !1, e.$forceUpdate();
          }), Q1(t, i);
        if (r === "in-out") {
          if (ts(o))
            return l;
          var f, p = function() {
            f();
          };
          Jn(a, "afterEnter", p), Jn(a, "enterCancelled", p), Jn(u, "delayLeave", function(d) {
            f = d;
          });
        }
      }
      return i;
    }
  }
}, qE = me({
  tag: String,
  moveClass: String
}, UE);
delete qE.mode;
var KV = {
  props: qE,
  beforeMount: function() {
    var t = this, e = this._update;
    this._update = function(n, r) {
      var i = yE(t);
      t.__patch__(
        t._vnode,
        t.kept,
        !1,
        // hydrating
        !0
        // removeOnly (!important, avoids unnecessary moves)
      ), t._vnode = t.kept, i(), e.call(t, n, r);
    };
  },
  render: function(t) {
    for (var e = this.tag || this.$vnode.data.tag || "span", n = /* @__PURE__ */ Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], o = this.children = [], s = GE(this), a = 0; a < i.length; a++) {
      var l = i[a];
      if (l.tag) {
        if (l.key != null && String(l.key).indexOf("__vlist") !== 0)
          o.push(l), n[l.key] = l, (l.data || (l.data = {})).transition = s;
        else if (process.env.NODE_ENV !== "production") {
          var c = l.componentOptions, u = c ? qi(c.Ctor.options) || c.tag || "" : l.tag;
          M("<transition-group> children must be keyed: <".concat(u, ">"));
        }
      }
    }
    if (r) {
      for (var f = [], p = [], a = 0; a < r.length; a++) {
        var l = r[a];
        l.data.transition = s, l.data.pos = l.elm.getBoundingClientRect(), n[l.key] ? f.push(l) : p.push(l);
      }
      this.kept = t(e, null, f), this.removed = p;
    }
    return t(e, null, o);
  },
  updated: function() {
    var t = this.prevChildren, e = this.moveClass || (this.name || "v") + "-move";
    !t.length || !this.hasMove(t[0].elm, e) || (t.forEach(XV), t.forEach(YV), t.forEach(ZV), this._reflow = document.body.offsetHeight, t.forEach(function(n) {
      if (n.data.moved) {
        var r = n.elm, i = r.style;
        Wr(r, e), i.transform = i.WebkitTransform = i.transitionDuration = "", r.addEventListener(gl, r._moveCb = function o(s) {
          s && s.target !== r || (!s || /transform$/.test(s.propertyName)) && (r.removeEventListener(gl, o), r._moveCb = null, $n(r, e));
        });
      }
    }));
  },
  methods: {
    hasMove: function(t, e) {
      if (!RE)
        return !1;
      if (this._hasMove)
        return this._hasMove;
      var n = t.cloneNode();
      t._transitionClasses && t._transitionClasses.forEach(function(i) {
        DE(n, i);
      }), PE(n, e), n.style.display = "none", this.$el.appendChild(n);
      var r = BE(n);
      return this.$el.removeChild(n), this._hasMove = r.hasTransform;
    }
  }
};
function XV(t) {
  t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb();
}
function YV(t) {
  t.data.newPos = t.elm.getBoundingClientRect();
}
function ZV(t) {
  var e = t.data.pos, n = t.data.newPos, r = e.left - n.left, i = e.top - n.top;
  if (r || i) {
    t.data.moved = !0;
    var o = t.elm.style;
    o.transform = o.WebkitTransform = "translate(".concat(r, "px,").concat(i, "px)"), o.transitionDuration = "0s";
  }
}
var QV = {
  Transition: JV,
  TransitionGroup: KV
};
Ce.config.mustUseProp = jz;
Ce.config.isReservedTag = ME;
Ce.config.isReservedAttr = Fz;
Ce.config.getTagNamespace = Kz;
Ce.config.isUnknownElement = Xz;
me(Ce.options.directives, WV);
me(Ce.options.components, QV);
Ce.prototype.__patch__ = dt ? BV : he;
Ce.prototype.$mount = function(t, e) {
  return t = t && dt ? Yz(t) : void 0, PB(this, t, e);
};
dt && setTimeout(function() {
  ue.devtools && (ll ? ll.emit("init", Ce) : process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && console[console.info ? "info" : "log"](`Download the Vue Devtools extension for a better development experience:
https://github.com/vuejs/vue-devtools`)), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && ue.productionTip !== !1 && typeof console < "u" && console[console.info ? "info" : "log"](`You are running Vue in development mode.
Make sure to turn on production mode when deploying for production.
See more tips at https://vuejs.org/guide/deployment.html`);
}, 0);
const e3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EffectScope: Kh,
  computed: gj,
  customRef: fj,
  default: Ce,
  defineAsyncComponent: lB,
  defineComponent: EB,
  del: qh,
  effectScope: xj,
  getCurrentInstance: Z2,
  getCurrentScope: Ej,
  h: rB,
  inject: kj,
  isProxy: ij,
  isReactive: tr,
  isReadonly: ui,
  isRef: Je,
  isShallow: ul,
  markRaw: oj,
  mergeDefaults: Kj,
  nextTick: oc,
  onActivated: gB,
  onBeforeMount: fB,
  onBeforeUnmount: mB,
  onBeforeUpdate: dB,
  onDeactivated: yB,
  onErrorCaptured: OB,
  onMounted: pB,
  onRenderTracked: wB,
  onRenderTriggered: SB,
  onScopeDispose: Cj,
  onServerPrefetch: bB,
  onUnmounted: vB,
  onUpdated: hB,
  provide: _j,
  proxyRefs: uj,
  reactive: rj,
  readonly: nE,
  ref: sj,
  set: nc,
  shallowReactive: Jh,
  shallowReadonly: vj,
  shallowRef: aj,
  toRaw: ZO,
  toRef: tE,
  toRefs: pj,
  triggerRef: lj,
  unref: cj,
  useAttrs: qj,
  useCssModule: sB,
  useCssVars: aB,
  useListeners: Jj,
  useSlots: Gj,
  version: vE,
  watch: Sj,
  watchEffect: bj,
  watchPostEffect: iE,
  watchSyncEffect: wj
}, Symbol.toStringTag, { value: "Module" }));
var _n = {}, sc = {}, ht = {}, fi = {};
const t3 = /* @__PURE__ */ zC(e3);
var ac = {};
Object.defineProperty(ac, "__esModule", { value: !0 });
ac.isInstanceOf = void 0;
const n3 = (t) => (e) => {
  if (!(e instanceof t))
    return `value should be an instance of ${t.name}`;
};
ac.isInstanceOf = n3;
var lc = {};
Object.defineProperty(lc, "__esModule", { value: !0 });
lc.isInteger = void 0;
const r3 = (t) => {
  if (typeof t != "number" || !Number.isInteger(t))
    return "value should be an integer";
};
lc.isInteger = r3;
var cc = {};
Object.defineProperty(cc, "__esModule", { value: !0 });
cc.isOneOf = void 0;
const i3 = (t) => (e) => {
  if (!t.includes(e))
    return `value should be one of "${t.join('", "')}"`;
};
cc.isOneOf = i3;
var uc = {};
Object.defineProperty(uc, "__esModule", { value: !0 });
uc.isSymbol = void 0;
const o3 = (t) => {
  if (typeof t != "symbol")
    return "value should be a symbol";
};
uc.isSymbol = o3;
(function(t) {
  var e = un && un.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.isSymbol = t.isOneOf = t.isInteger = t.isInstanceOf = t.vuePropValidator = void 0;
  const n = e(t3);
  function r(l, ...c) {
    const u = l ? [...c, l] : c;
    if (u.length !== 0)
      return (f) => {
        for (const p of u) {
          const d = p(f);
          if (d)
            return typeof n.default == "object" && "util" in n.default ? n.default.util.warn(`${d} (received: '${String(f)}')`) : console.warn(`${d} (received: '${String(f)}')`), !1;
        }
        return !0;
      };
  }
  t.vuePropValidator = r;
  var i = ac;
  Object.defineProperty(t, "isInstanceOf", { enumerable: !0, get: function() {
    return i.isInstanceOf;
  } });
  var o = lc;
  Object.defineProperty(t, "isInteger", { enumerable: !0, get: function() {
    return o.isInteger;
  } });
  var s = cc;
  Object.defineProperty(t, "isOneOf", { enumerable: !0, get: function() {
    return s.isOneOf;
  } });
  var a = uc;
  Object.defineProperty(t, "isSymbol", { enumerable: !0, get: function() {
    return a.isSymbol;
  } });
})(fi);
Object.defineProperty(ht, "__esModule", { value: !0 });
ht.propOptionsGenerator = void 0;
const Sa = fi, s3 = (t, e, ...n) => ({
  optional: {
    type: t,
    required: !1,
    default: void 0,
    validator: (0, Sa.vuePropValidator)(e, ...n)
  },
  nullable: {
    type: t,
    required: !1,
    default: null,
    validator: (0, Sa.vuePropValidator)(e, ...n)
  },
  withDefault: (r) => ({
    type: t,
    required: !1,
    default: r,
    validator: (0, Sa.vuePropValidator)(e, ...n)
  }),
  required: {
    type: t,
    required: !0,
    validator: (0, Sa.vuePropValidator)(e, ...n)
  }
});
ht.propOptionsGenerator = s3;
Object.defineProperty(sc, "__esModule", { value: !0 });
sc.stringProp = void 0;
const a3 = ht, l3 = (t) => (0, a3.propOptionsGenerator)(String, t);
sc.stringProp = l3;
var fc = {};
Object.defineProperty(fc, "__esModule", { value: !0 });
fc.booleanProp = void 0;
const c3 = ht, u3 = (t) => (0, c3.propOptionsGenerator)(Boolean, t);
fc.booleanProp = u3;
var pc = {};
Object.defineProperty(pc, "__esModule", { value: !0 });
pc.numberProp = void 0;
const f3 = ht, p3 = (t) => (0, f3.propOptionsGenerator)(Number, t);
pc.numberProp = p3;
var dc = {};
Object.defineProperty(dc, "__esModule", { value: !0 });
dc.integerProp = void 0;
const d3 = ht, h3 = fi, m3 = (t) => (0, d3.propOptionsGenerator)(Number, t, h3.isInteger);
dc.integerProp = m3;
var hc = {};
Object.defineProperty(hc, "__esModule", { value: !0 });
hc.symbolProp = void 0;
const v3 = ht, g3 = fi, y3 = (t) => (0, v3.propOptionsGenerator)(void 0, t, g3.isSymbol);
hc.symbolProp = y3;
var mc = {};
Object.defineProperty(mc, "__esModule", { value: !0 });
mc.vueComponentProp = void 0;
const b3 = ht, w3 = (t) => (0, b3.propOptionsGenerator)([Object, String], t);
mc.vueComponentProp = w3;
var vc = {};
Object.defineProperty(vc, "__esModule", { value: !0 });
vc.anyProp = void 0;
const S3 = ht, x3 = (t) => (0, S3.propOptionsGenerator)(void 0, t);
vc.anyProp = x3;
var gc = {};
Object.defineProperty(gc, "__esModule", { value: !0 });
gc.arrayProp = void 0;
const O3 = ht, E3 = (t) => (0, O3.propOptionsGenerator)(Array, t);
gc.arrayProp = E3;
var yc = {};
Object.defineProperty(yc, "__esModule", { value: !0 });
yc.objectProp = void 0;
const C3 = ht, _3 = (t) => (0, C3.propOptionsGenerator)(Object, t);
yc.objectProp = _3;
var bc = {};
Object.defineProperty(bc, "__esModule", { value: !0 });
bc.functionProp = void 0;
const Qf = fi, k3 = (t) => ({
  optional: {
    type: Function,
    required: !1,
    default: void 0,
    validator: (0, Qf.vuePropValidator)(t)
  },
  nullable: {
    type: Function,
    required: !1,
    default: null,
    validator: (0, Qf.vuePropValidator)(t)
  },
  required: {
    type: Function,
    required: !0,
    validator: (0, Qf.vuePropValidator)(t)
  }
});
bc.functionProp = k3;
var Os = {};
Object.defineProperty(Os, "__esModule", { value: !0 });
Os.oneOfProp = void 0;
const N3 = ht, M3 = fi, T3 = (t) => {
  const e = [
    ...new Set(t.flatMap((n) => {
      var r;
      return n == null ? [] : (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        (r = n.constructor) !== null && r !== void 0 ? r : []
      );
    }))
  ];
  if (e.length !== 0)
    return e.length === 1 ? e[0] : e;
}, $3 = (t, e) => (0, N3.propOptionsGenerator)(T3(t), e, (0, M3.isOneOf)(t));
Os.oneOfProp = $3;
var wc = {};
Object.defineProperty(wc, "__esModule", { value: !0 });
wc.oneOfObjectKeysProp = void 0;
const I3 = Os, P3 = (t, e) => (0, I3.oneOfProp)(Object.keys(t), e);
wc.oneOfObjectKeysProp = P3;
var Sc = {};
Object.defineProperty(Sc, "__esModule", { value: !0 });
Sc.oneOfTypesProp = void 0;
const D3 = ht, A3 = (t, e) => (0, D3.propOptionsGenerator)(t, e);
Sc.oneOfTypesProp = A3;
var xc = {};
Object.defineProperty(xc, "__esModule", { value: !0 });
xc.instanceOfProp = void 0;
const R3 = ht, F3 = fi, L3 = (t, e) => (0, R3.propOptionsGenerator)(t, e, (0, F3.isInstanceOf)(t));
xc.instanceOfProp = L3;
var Oc = {};
Object.defineProperty(Oc, "__esModule", { value: !0 });
Oc.isNegative = void 0;
const j3 = (t) => {
  if (typeof t != "number" || t >= 0 || Number.isNaN(t))
    return "value should be a negative number";
};
Oc.isNegative = j3;
var Ec = {};
Object.defineProperty(Ec, "__esModule", { value: !0 });
Ec.isPositive = void 0;
const B3 = (t) => {
  if (typeof t != "number" || t <= 0 || Number.isNaN(t))
    return "value should be a positive number";
};
Ec.isPositive = B3;
var Cc = {};
Object.defineProperty(Cc, "__esModule", { value: !0 });
Cc.isNonNegative = void 0;
const z3 = (t) => {
  if (typeof t != "number" || t < 0 || Number.isNaN(t))
    return "value should be a non-negative number";
};
Cc.isNonNegative = z3;
var _c = {};
Object.defineProperty(_c, "__esModule", { value: !0 });
_c.isNonPositive = void 0;
const V3 = (t) => {
  if (typeof t != "number" || t > 0 || Number.isNaN(t))
    return "value should be a non-positive number";
};
_c.isNonPositive = V3;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.isNonPositive = t.isNonNegative = t.isPositive = t.isNegative = t.instanceOfProp = t.oneOfTypesProp = t.oneOfObjectKeysProp = t.oneOfProp = t.functionProp = t.objectProp = t.arrayProp = t.anyProp = t.vueComponentProp = t.symbolProp = t.integerProp = t.numberProp = t.booleanProp = t.stringProp = void 0;
  var e = sc;
  Object.defineProperty(t, "stringProp", { enumerable: !0, get: function() {
    return e.stringProp;
  } });
  var n = fc;
  Object.defineProperty(t, "booleanProp", { enumerable: !0, get: function() {
    return n.booleanProp;
  } });
  var r = pc;
  Object.defineProperty(t, "numberProp", { enumerable: !0, get: function() {
    return r.numberProp;
  } });
  var i = dc;
  Object.defineProperty(t, "integerProp", { enumerable: !0, get: function() {
    return i.integerProp;
  } });
  var o = hc;
  Object.defineProperty(t, "symbolProp", { enumerable: !0, get: function() {
    return o.symbolProp;
  } });
  var s = mc;
  Object.defineProperty(t, "vueComponentProp", { enumerable: !0, get: function() {
    return s.vueComponentProp;
  } });
  var a = vc;
  Object.defineProperty(t, "anyProp", { enumerable: !0, get: function() {
    return a.anyProp;
  } });
  var l = gc;
  Object.defineProperty(t, "arrayProp", { enumerable: !0, get: function() {
    return l.arrayProp;
  } });
  var c = yc;
  Object.defineProperty(t, "objectProp", { enumerable: !0, get: function() {
    return c.objectProp;
  } });
  var u = bc;
  Object.defineProperty(t, "functionProp", { enumerable: !0, get: function() {
    return u.functionProp;
  } });
  var f = Os;
  Object.defineProperty(t, "oneOfProp", { enumerable: !0, get: function() {
    return f.oneOfProp;
  } });
  var p = wc;
  Object.defineProperty(t, "oneOfObjectKeysProp", { enumerable: !0, get: function() {
    return p.oneOfObjectKeysProp;
  } });
  var d = Sc;
  Object.defineProperty(t, "oneOfTypesProp", { enumerable: !0, get: function() {
    return d.oneOfTypesProp;
  } });
  var h = xc;
  Object.defineProperty(t, "instanceOfProp", { enumerable: !0, get: function() {
    return h.instanceOfProp;
  } });
  var m = Oc;
  Object.defineProperty(t, "isNegative", { enumerable: !0, get: function() {
    return m.isNegative;
  } });
  var v = Ec;
  Object.defineProperty(t, "isPositive", { enumerable: !0, get: function() {
    return v.isPositive;
  } });
  var y = Cc;
  Object.defineProperty(t, "isNonNegative", { enumerable: !0, get: function() {
    return y.isNonNegative;
  } });
  var C = _c;
  Object.defineProperty(t, "isNonPositive", { enumerable: !0, get: function() {
    return C.isNonPositive;
  } });
})(_n);
class W3 extends j2 {
  constructor() {
    super(...arguments), this.contentComponent = null;
  }
}
const H3 = {
  name: "EditorContent",
  props: {
    editor: {
      default: null,
      type: Object
    }
  },
  watch: {
    editor: {
      immediate: !0,
      handler(t) {
        t && t.options.element && this.$nextTick(() => {
          const e = this.$el;
          !e || !t.options.element.firstChild || (e.append(...t.options.element.childNodes), t.contentComponent = this, t.setOptions({
            element: e
          }), t.createNodeViews());
        });
      }
    }
  },
  render(t) {
    return t("div");
  },
  beforeDestroy() {
    const { editor: t } = this;
    if (!t || (t.isDestroyed || t.view.setProps({
      nodeViews: {}
    }), t.contentComponent = null, !t.options.element.firstChild))
      return;
    const e = document.createElement("div");
    e.append(...t.options.element.childNodes), t.setOptions({
      element: e
    });
  }
};
_n.objectProp().required, _n.objectProp().required, _n.objectProp().required, _n.booleanProp().required, _n.objectProp().required, _n.functionProp().required, _n.functionProp().required, _n.functionProp().required;
const U3 = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/, G3 = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))/g, q3 = /(?:^|\s)((?:__)((?:[^__]+))(?:__))$/, J3 = /(?:^|\s)((?:__)((?:[^__]+))(?:__))/g, K3 = Jr.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (t) => t.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight",
        getAttrs: (t) => /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["strong", vr(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands: t }) => t.setMark(this.name),
      toggleBold: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetBold: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      ol({
        find: U3,
        type: this.type
      }),
      ol({
        find: q3,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      sl({
        find: G3,
        type: this.type
      }),
      sl({
        find: J3,
        type: this.type
      })
    ];
  }
}), X3 = ai.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["li", vr(this.options.HTMLAttributes, t), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), ew = Jr.create({
  name: "textStyle",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (t) => t.hasAttribute("style") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["span", vr(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ state: t, commands: e }) => {
        const n = Wh(t, this.type);
        return Object.entries(n).some(([, i]) => !!i) ? !0 : e.unsetMark(this.name);
      }
    };
  }
}), tw = /^\s*([-+*])\s$/, Y3 = ai.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      { tag: "ul" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["ul", vr(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: t, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(X3.name, this.editor.getAttributes(ew.name)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let t = Y0({
      find: tw,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (t = Y0({
      find: tw,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(ew.name),
      editor: this.editor
    })), [
      t
    ];
  }
}), Z3 = Lt.create({
  name: "characterCount",
  addOptions() {
    return {
      limit: null,
      mode: "textSize"
    };
  },
  addStorage() {
    return {
      characters: () => 0,
      words: () => 0
    };
  },
  onBeforeCreate() {
    this.storage.characters = (t) => {
      const e = (t == null ? void 0 : t.node) || this.editor.state.doc;
      return ((t == null ? void 0 : t.mode) || this.options.mode) === "textSize" ? e.textBetween(0, e.content.size, void 0, " ").length : e.nodeSize;
    }, this.storage.words = (t) => {
      const e = (t == null ? void 0 : t.node) || this.editor.state.doc;
      return e.textBetween(0, e.content.size, " ", " ").split(" ").filter((i) => i !== "").length;
    };
  },
  addProseMirrorPlugins() {
    return [
      new Wt({
        key: new wn("characterCount"),
        filterTransaction: (t, e) => {
          const n = this.options.limit;
          if (!t.docChanged || n === 0 || n === null || n === void 0)
            return !0;
          const r = this.storage.characters({ node: e.doc }), i = this.storage.characters({ node: t.doc });
          if (i <= n || r > n && i > n && i <= r)
            return !0;
          if (r > n && i > n && i > r || !t.getMeta("paste"))
            return !1;
          const s = t.selection.$head.pos, a = i - n, l = s - a, c = s;
          return t.deleteRange(l, c), !(this.storage.characters({ node: t.doc }) > n);
        }
      })
    ];
  }
}), Q3 = ai.create({
  name: "doc",
  topNode: !0,
  content: "block+"
}), eW = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/, tW = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))/g, nW = /(?:^|\s)((?:_)((?:[^_]+))(?:_))$/, rW = /(?:^|\s)((?:_)((?:[^_]+))(?:_))/g, iW = Jr.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (t) => t.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["em", vr(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: t }) => t.setMark(this.name),
      toggleItalic: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetItalic: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      ol({
        find: eW,
        type: this.type
      }),
      ol({
        find: nW,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      sl({
        find: tW,
        type: this.type
      }),
      sl({
        find: rW,
        type: this.type
      })
    ];
  }
});
var bl = 200, ze = function() {
};
ze.prototype.append = function(e) {
  return e.length ? (e = ze.from(e), !this.length && e || e.length < bl && this.leafAppend(e) || this.length < bl && e.leafPrepend(this) || this.appendInner(e)) : this;
};
ze.prototype.prepend = function(e) {
  return e.length ? ze.from(e).append(this) : this;
};
ze.prototype.appendInner = function(e) {
  return new oW(this, e);
};
ze.prototype.slice = function(e, n) {
  return e === void 0 && (e = 0), n === void 0 && (n = this.length), e >= n ? ze.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, n));
};
ze.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
ze.prototype.forEach = function(e, n, r) {
  n === void 0 && (n = 0), r === void 0 && (r = this.length), n <= r ? this.forEachInner(e, n, r, 0) : this.forEachInvertedInner(e, n, r, 0);
};
ze.prototype.map = function(e, n, r) {
  n === void 0 && (n = 0), r === void 0 && (r = this.length);
  var i = [];
  return this.forEach(function(o, s) {
    return i.push(e(o, s));
  }, n, r), i;
};
ze.from = function(e) {
  return e instanceof ze ? e : e && e.length ? new JE(e) : ze.empty;
};
var JE = /* @__PURE__ */ function(t) {
  function e(r) {
    t.call(this), this.values = r;
  }
  t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
  var n = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(i, o) {
    return i == 0 && o == this.length ? this : new e(this.values.slice(i, o));
  }, e.prototype.getInner = function(i) {
    return this.values[i];
  }, e.prototype.forEachInner = function(i, o, s, a) {
    for (var l = o; l < s; l++)
      if (i(this.values[l], a + l) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(i, o, s, a) {
    for (var l = o - 1; l >= s; l--)
      if (i(this.values[l], a + l) === !1)
        return !1;
  }, e.prototype.leafAppend = function(i) {
    if (this.length + i.length <= bl)
      return new e(this.values.concat(i.flatten()));
  }, e.prototype.leafPrepend = function(i) {
    if (this.length + i.length <= bl)
      return new e(i.flatten().concat(this.values));
  }, n.length.get = function() {
    return this.values.length;
  }, n.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, n), e;
}(ze);
ze.empty = new JE([]);
var oW = /* @__PURE__ */ function(t) {
  function e(n, r) {
    t.call(this), this.left = n, this.right = r, this.length = n.length + r.length, this.depth = Math.max(n.depth, r.depth) + 1;
  }
  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, i, o, s) {
    var a = this.left.length;
    if (i < a && this.left.forEachInner(r, i, Math.min(o, a), s) === !1 || o > a && this.right.forEachInner(r, Math.max(i - a, 0), Math.min(this.length, o) - a, s + a) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, i, o, s) {
    var a = this.left.length;
    if (i > a && this.right.forEachInvertedInner(r, i - a, Math.max(o, a) - a, s + a) === !1 || o < a && this.left.forEachInvertedInner(r, Math.min(i, a), o, s) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, i) {
    if (r == 0 && i == this.length)
      return this;
    var o = this.left.length;
    return i <= o ? this.left.slice(r, i) : r >= o ? this.right.slice(r - o, i - o) : this.left.slice(r, o).append(this.right.slice(0, i - o));
  }, e.prototype.leafAppend = function(r) {
    var i = this.right.leafAppend(r);
    if (i)
      return new e(this.left, i);
  }, e.prototype.leafPrepend = function(r) {
    var i = this.left.leafPrepend(r);
    if (i)
      return new e(i, this.right);
  }, e.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
  }, e;
}(ze);
const sW = 500;
class Xt {
  constructor(e, n) {
    this.items = e, this.eventCount = n;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, n) {
    if (this.eventCount == 0)
      return null;
    let r = this.items.length;
    for (; ; r--)
      if (this.items.get(r - 1).selection) {
        --r;
        break;
      }
    let i, o;
    n && (i = this.remapping(r, this.items.length), o = i.maps.length);
    let s = e.tr, a, l, c = [], u = [];
    return this.items.forEach((f, p) => {
      if (!f.step) {
        i || (i = this.remapping(r, p + 1), o = i.maps.length), o--, u.push(f);
        return;
      }
      if (i) {
        u.push(new on(f.map));
        let d = f.step.map(i.slice(o)), h;
        d && s.maybeStep(d).doc && (h = s.mapping.maps[s.mapping.maps.length - 1], c.push(new on(h, void 0, void 0, c.length + u.length))), o--, h && i.appendMap(h, o);
      } else
        s.maybeStep(f.step);
      if (f.selection)
        return a = i ? f.selection.map(i.slice(o)) : f.selection, l = new Xt(this.items.slice(0, r).append(u.reverse().concat(c)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: l, transform: s, selection: a };
  }
  // Create a new branch with the given transform added.
  addTransform(e, n, r, i) {
    let o = [], s = this.eventCount, a = this.items, l = !i && a.length ? a.get(a.length - 1) : null;
    for (let u = 0; u < e.steps.length; u++) {
      let f = e.steps[u].invert(e.docs[u]), p = new on(e.mapping.maps[u], f, n), d;
      (d = l && l.merge(p)) && (p = d, u ? o.pop() : a = a.slice(0, a.length - 1)), o.push(p), n && (s++, n = void 0), i || (l = p);
    }
    let c = s - r.depth;
    return c > lW && (a = aW(a, c), s -= c), new Xt(a.append(o), s);
  }
  remapping(e, n) {
    let r = new Di();
    return this.items.forEach((i, o) => {
      let s = i.mirrorOffset != null && o - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
      r.appendMap(i.map, s);
    }, e, n), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new Xt(this.items.append(e.map((n) => new on(n))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, n) {
    if (!this.eventCount)
      return this;
    let r = [], i = Math.max(0, this.items.length - n), o = e.mapping, s = e.steps.length, a = this.eventCount;
    this.items.forEach((p) => {
      p.selection && a--;
    }, i);
    let l = n;
    this.items.forEach((p) => {
      let d = o.getMirror(--l);
      if (d == null)
        return;
      s = Math.min(s, d);
      let h = o.maps[d];
      if (p.step) {
        let m = e.steps[d].invert(e.docs[d]), v = p.selection && p.selection.map(o.slice(l + 1, d));
        v && a++, r.push(new on(h, m, v));
      } else
        r.push(new on(h));
    }, i);
    let c = [];
    for (let p = n; p < s; p++)
      c.push(new on(o.maps[p]));
    let u = this.items.slice(0, i).append(c).append(r), f = new Xt(u, a);
    return f.emptyItemCount() > sW && (f = f.compress(this.items.length - r.length)), f;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((n) => {
      n.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let n = this.remapping(0, e), r = n.maps.length, i = [], o = 0;
    return this.items.forEach((s, a) => {
      if (a >= e)
        i.push(s), s.selection && o++;
      else if (s.step) {
        let l = s.step.map(n.slice(r)), c = l && l.getMap();
        if (r--, c && n.appendMap(c, r), l) {
          let u = s.selection && s.selection.map(n.slice(r));
          u && o++;
          let f = new on(c.invert(), l, u), p, d = i.length - 1;
          (p = i.length && i[d].merge(f)) ? i[d] = p : i.push(f);
        }
      } else
        s.map && r--;
    }, this.items.length, 0), new Xt(ze.from(i.reverse()), o);
  }
}
Xt.empty = new Xt(ze.empty, 0);
function aW(t, e) {
  let n;
  return t.forEach((r, i) => {
    if (r.selection && e-- == 0)
      return n = i, !1;
  }), t.slice(n);
}
class on {
  constructor(e, n, r, i) {
    this.map = e, this.step = n, this.selection = r, this.mirrorOffset = i;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let n = e.step.merge(this.step);
      if (n)
        return new on(n.getMap().invert(), n, this.selection);
    }
  }
}
class Vn {
  constructor(e, n, r, i, o) {
    this.done = e, this.undone = n, this.prevRanges = r, this.prevTime = i, this.prevComposition = o;
  }
}
const lW = 20;
function cW(t, e, n, r) {
  let i = n.getMeta(nr), o;
  if (i)
    return i.historyState;
  n.getMeta(fW) && (t = new Vn(t.done, t.undone, null, 0, -1));
  let s = n.getMeta("appendedTransaction");
  if (n.steps.length == 0)
    return t;
  if (s && s.getMeta(nr))
    return s.getMeta(nr).redo ? new Vn(t.done.addTransform(n, void 0, r, La(e)), t.undone, nw(n.mapping.maps[n.steps.length - 1]), t.prevTime, t.prevComposition) : new Vn(t.done, t.undone.addTransform(n, void 0, r, La(e)), null, t.prevTime, t.prevComposition);
  if (n.getMeta("addToHistory") !== !1 && !(s && s.getMeta("addToHistory") === !1)) {
    let a = n.getMeta("composition"), l = t.prevTime == 0 || !s && t.prevComposition != a && (t.prevTime < (n.time || 0) - r.newGroupDelay || !uW(n, t.prevRanges)), c = s ? ep(t.prevRanges, n.mapping) : nw(n.mapping.maps[n.steps.length - 1]);
    return new Vn(t.done.addTransform(n, l ? e.selection.getBookmark() : void 0, r, La(e)), Xt.empty, c, n.time, a ?? t.prevComposition);
  } else
    return (o = n.getMeta("rebased")) ? new Vn(t.done.rebased(n, o), t.undone.rebased(n, o), ep(t.prevRanges, n.mapping), t.prevTime, t.prevComposition) : new Vn(t.done.addMaps(n.mapping.maps), t.undone.addMaps(n.mapping.maps), ep(t.prevRanges, n.mapping), t.prevTime, t.prevComposition);
}
function uW(t, e) {
  if (!e)
    return !1;
  if (!t.docChanged)
    return !0;
  let n = !1;
  return t.mapping.maps[0].forEach((r, i) => {
    for (let o = 0; o < e.length; o += 2)
      r <= e[o + 1] && i >= e[o] && (n = !0);
  }), n;
}
function nw(t) {
  let e = [];
  return t.forEach((n, r, i, o) => e.push(i, o)), e;
}
function ep(t, e) {
  if (!t)
    return null;
  let n = [];
  for (let r = 0; r < t.length; r += 2) {
    let i = e.map(t[r], 1), o = e.map(t[r + 1], -1);
    i <= o && n.push(i, o);
  }
  return n;
}
function KE(t, e, n, r) {
  let i = La(e), o = nr.get(e).spec.config, s = (r ? t.undone : t.done).popEvent(e, i);
  if (!s)
    return;
  let a = s.selection.resolve(s.transform.doc), l = (r ? t.done : t.undone).addTransform(s.transform, e.selection.getBookmark(), o, i), c = new Vn(r ? l : s.remaining, r ? s.remaining : l, null, 0, -1);
  n(s.transform.setSelection(a).setMeta(nr, { redo: r, historyState: c }).scrollIntoView());
}
let tp = !1, rw = null;
function La(t) {
  let e = t.plugins;
  if (rw != e) {
    tp = !1, rw = e;
    for (let n = 0; n < e.length; n++)
      if (e[n].spec.historyPreserveItems) {
        tp = !0;
        break;
      }
  }
  return tp;
}
const nr = new wn("history"), fW = new wn("closeHistory");
function pW(t = {}) {
  return t = {
    depth: t.depth || 100,
    newGroupDelay: t.newGroupDelay || 500
  }, new Wt({
    key: nr,
    state: {
      init() {
        return new Vn(Xt.empty, Xt.empty, null, 0, -1);
      },
      apply(e, n, r) {
        return cW(n, r, e, t);
      }
    },
    config: t,
    props: {
      handleDOMEvents: {
        beforeinput(e, n) {
          let r = n.inputType, i = r == "historyUndo" ? XE : r == "historyRedo" ? YE : null;
          return i ? (n.preventDefault(), i(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
const XE = (t, e) => {
  let n = nr.getState(t);
  return !n || n.done.eventCount == 0 ? !1 : (e && KE(n, t, e, !1), !0);
}, YE = (t, e) => {
  let n = nr.getState(t);
  return !n || n.undone.eventCount == 0 ? !1 : (e && KE(n, t, e, !0), !0);
}, dW = Lt.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: t, dispatch: e }) => XE(t, e),
      redo: () => ({ state: t, dispatch: e }) => YE(t, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      pW(this.options)
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Mod-Z": () => this.editor.commands.undo(),
      "Mod-y": () => this.editor.commands.redo(),
      "Mod-Y": () => this.editor.commands.redo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Shift-Mod-Z": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
}), hW = ai.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["li", vr(this.options.HTMLAttributes, t), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), mW = ai.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "p" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["p", vr(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: t }) => t.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), vW = Lt.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    };
  },
  addProseMirrorPlugins() {
    return [
      new Wt({
        key: new wn("placeholder"),
        props: {
          decorations: ({ doc: t, selection: e }) => {
            const n = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: r } = e, i = [];
            if (!n)
              return null;
            const o = t.type.createAndFill(), s = (o == null ? void 0 : o.sameMarkup(t)) && o.content.findDiffStart(t.content) === null;
            return t.descendants((a, l) => {
              const c = r >= l && r <= l + a.nodeSize, u = !a.isLeaf && !a.childCount;
              if ((c || !this.options.showOnlyCurrent) && u) {
                const f = [this.options.emptyNodeClass];
                s && f.push(this.options.emptyEditorClass);
                const p = Et.node(l, l + a.nodeSize, {
                  class: f.join(" "),
                  "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                    editor: this.editor,
                    node: a,
                    pos: l,
                    hasAnchor: c
                  }) : this.options.placeholder
                });
                i.push(p);
              }
              return this.options.includeChildren;
            }), Me.create(t, i);
          }
        }
      })
    ];
  }
}), gW = ai.create({
  name: "text",
  group: "inline"
});
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var Es = typeof window < "u" && typeof document < "u" && typeof navigator < "u", yW = function() {
  for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)
    if (Es && navigator.userAgent.indexOf(t[e]) >= 0)
      return 1;
  return 0;
}();
function bW(t) {
  var e = !1;
  return function() {
    e || (e = !0, window.Promise.resolve().then(function() {
      e = !1, t();
    }));
  };
}
function wW(t) {
  var e = !1;
  return function() {
    e || (e = !0, setTimeout(function() {
      e = !1, t();
    }, yW));
  };
}
var SW = Es && window.Promise, xW = SW ? bW : wW;
function ZE(t) {
  var e = {};
  return t && e.toString.call(t) === "[object Function]";
}
function pi(t, e) {
  if (t.nodeType !== 1)
    return [];
  var n = t.ownerDocument.defaultView, r = n.getComputedStyle(t, null);
  return e ? r[e] : r;
}
function vm(t) {
  return t.nodeName === "HTML" ? t : t.parentNode || t.host;
}
function Cs(t) {
  if (!t)
    return document.body;
  switch (t.nodeName) {
    case "HTML":
    case "BODY":
      return t.ownerDocument.body;
    case "#document":
      return t.body;
  }
  var e = pi(t), n = e.overflow, r = e.overflowX, i = e.overflowY;
  return /(auto|scroll|overlay)/.test(n + i + r) ? t : Cs(vm(t));
}
function QE(t) {
  return t && t.referenceNode ? t.referenceNode : t;
}
var iw = Es && !!(window.MSInputMethodContext && document.documentMode), ow = Es && /MSIE 10/.test(navigator.userAgent);
function uo(t) {
  return t === 11 ? iw : t === 10 ? ow : iw || ow;
}
function Ji(t) {
  if (!t)
    return document.documentElement;
  for (var e = uo(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling; )
    n = (t = t.nextElementSibling).offsetParent;
  var r = n && n.nodeName;
  return !r || r === "BODY" || r === "HTML" ? t ? t.ownerDocument.documentElement : document.documentElement : ["TH", "TD", "TABLE"].indexOf(n.nodeName) !== -1 && pi(n, "position") === "static" ? Ji(n) : n;
}
function OW(t) {
  var e = t.nodeName;
  return e === "BODY" ? !1 : e === "HTML" || Ji(t.firstElementChild) === t;
}
function Td(t) {
  return t.parentNode !== null ? Td(t.parentNode) : t;
}
function wl(t, e) {
  if (!t || !t.nodeType || !e || !e.nodeType)
    return document.documentElement;
  var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING, r = n ? t : e, i = n ? e : t, o = document.createRange();
  o.setStart(r, 0), o.setEnd(i, 0);
  var s = o.commonAncestorContainer;
  if (t !== s && e !== s || r.contains(i))
    return OW(s) ? s : Ji(s);
  var a = Td(t);
  return a.host ? wl(a.host, e) : wl(t, Td(e).host);
}
function Ki(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top", n = e === "top" ? "scrollTop" : "scrollLeft", r = t.nodeName;
  if (r === "BODY" || r === "HTML") {
    var i = t.ownerDocument.documentElement, o = t.ownerDocument.scrollingElement || i;
    return o[n];
  }
  return t[n];
}
function EW(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = Ki(e, "top"), i = Ki(e, "left"), o = n ? -1 : 1;
  return t.top += r * o, t.bottom += r * o, t.left += i * o, t.right += i * o, t;
}
function sw(t, e) {
  var n = e === "x" ? "Left" : "Top", r = n === "Left" ? "Right" : "Bottom";
  return parseFloat(t["border" + n + "Width"]) + parseFloat(t["border" + r + "Width"]);
}
function aw(t, e, n, r) {
  return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], uo(10) ? parseInt(n["offset" + t]) + parseInt(r["margin" + (t === "Height" ? "Top" : "Left")]) + parseInt(r["margin" + (t === "Height" ? "Bottom" : "Right")]) : 0);
}
function eC(t) {
  var e = t.body, n = t.documentElement, r = uo(10) && getComputedStyle(n);
  return {
    height: aw("Height", e, n, r),
    width: aw("Width", e, n, r)
  };
}
var CW = function(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}, _W = function() {
  function t(e, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }
  return function(e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  };
}(), Xi = function(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}, Rt = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
};
function lr(t) {
  return Rt({}, t, {
    right: t.left + t.width,
    bottom: t.top + t.height
  });
}
function $d(t) {
  var e = {};
  try {
    if (uo(10)) {
      e = t.getBoundingClientRect();
      var n = Ki(t, "top"), r = Ki(t, "left");
      e.top += n, e.left += r, e.bottom += n, e.right += r;
    } else
      e = t.getBoundingClientRect();
  } catch {
  }
  var i = {
    left: e.left,
    top: e.top,
    width: e.right - e.left,
    height: e.bottom - e.top
  }, o = t.nodeName === "HTML" ? eC(t.ownerDocument) : {}, s = o.width || t.clientWidth || i.width, a = o.height || t.clientHeight || i.height, l = t.offsetWidth - s, c = t.offsetHeight - a;
  if (l || c) {
    var u = pi(t);
    l -= sw(u, "x"), c -= sw(u, "y"), i.width -= l, i.height -= c;
  }
  return lr(i);
}
function gm(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = uo(10), i = e.nodeName === "HTML", o = $d(t), s = $d(e), a = Cs(t), l = pi(e), c = parseFloat(l.borderTopWidth), u = parseFloat(l.borderLeftWidth);
  n && i && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
  var f = lr({
    top: o.top - s.top - c,
    left: o.left - s.left - u,
    width: o.width,
    height: o.height
  });
  if (f.marginTop = 0, f.marginLeft = 0, !r && i) {
    var p = parseFloat(l.marginTop), d = parseFloat(l.marginLeft);
    f.top -= c - p, f.bottom -= c - p, f.left -= u - d, f.right -= u - d, f.marginTop = p, f.marginLeft = d;
  }
  return (r && !n ? e.contains(a) : e === a && a.nodeName !== "BODY") && (f = EW(f, e)), f;
}
function kW(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = t.ownerDocument.documentElement, r = gm(t, n), i = Math.max(n.clientWidth, window.innerWidth || 0), o = Math.max(n.clientHeight, window.innerHeight || 0), s = e ? 0 : Ki(n), a = e ? 0 : Ki(n, "left"), l = {
    top: s - r.top + r.marginTop,
    left: a - r.left + r.marginLeft,
    width: i,
    height: o
  };
  return lr(l);
}
function tC(t) {
  var e = t.nodeName;
  if (e === "BODY" || e === "HTML")
    return !1;
  if (pi(t, "position") === "fixed")
    return !0;
  var n = vm(t);
  return n ? tC(n) : !1;
}
function nC(t) {
  if (!t || !t.parentElement || uo())
    return document.documentElement;
  for (var e = t.parentElement; e && pi(e, "transform") === "none"; )
    e = e.parentElement;
  return e || document.documentElement;
}
function ym(t, e, n, r) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, o = { top: 0, left: 0 }, s = i ? nC(t) : wl(t, QE(e));
  if (r === "viewport")
    o = kW(s, i);
  else {
    var a = void 0;
    r === "scrollParent" ? (a = Cs(vm(e)), a.nodeName === "BODY" && (a = t.ownerDocument.documentElement)) : r === "window" ? a = t.ownerDocument.documentElement : a = r;
    var l = gm(a, s, i);
    if (a.nodeName === "HTML" && !tC(s)) {
      var c = eC(t.ownerDocument), u = c.height, f = c.width;
      o.top += l.top - l.marginTop, o.bottom = u + l.top, o.left += l.left - l.marginLeft, o.right = f + l.left;
    } else
      o = l;
  }
  n = n || 0;
  var p = typeof n == "number";
  return o.left += p ? n : n.left || 0, o.top += p ? n : n.top || 0, o.right -= p ? n : n.right || 0, o.bottom -= p ? n : n.bottom || 0, o;
}
function NW(t) {
  var e = t.width, n = t.height;
  return e * n;
}
function rC(t, e, n, r, i) {
  var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  if (t.indexOf("auto") === -1)
    return t;
  var s = ym(n, r, o, i), a = {
    top: {
      width: s.width,
      height: e.top - s.top
    },
    right: {
      width: s.right - e.right,
      height: s.height
    },
    bottom: {
      width: s.width,
      height: s.bottom - e.bottom
    },
    left: {
      width: e.left - s.left,
      height: s.height
    }
  }, l = Object.keys(a).map(function(p) {
    return Rt({
      key: p
    }, a[p], {
      area: NW(a[p])
    });
  }).sort(function(p, d) {
    return d.area - p.area;
  }), c = l.filter(function(p) {
    var d = p.width, h = p.height;
    return d >= n.clientWidth && h >= n.clientHeight;
  }), u = c.length > 0 ? c[0].key : l[0].key, f = t.split("-")[1];
  return u + (f ? "-" + f : "");
}
function iC(t, e, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, i = r ? nC(e) : wl(e, QE(n));
  return gm(n, i, r);
}
function oC(t) {
  var e = t.ownerDocument.defaultView, n = e.getComputedStyle(t), r = parseFloat(n.marginTop || 0) + parseFloat(n.marginBottom || 0), i = parseFloat(n.marginLeft || 0) + parseFloat(n.marginRight || 0), o = {
    width: t.offsetWidth + i,
    height: t.offsetHeight + r
  };
  return o;
}
function Sl(t) {
  var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
  return t.replace(/left|right|bottom|top/g, function(n) {
    return e[n];
  });
}
function sC(t, e, n) {
  n = n.split("-")[0];
  var r = oC(t), i = {
    width: r.width,
    height: r.height
  }, o = ["right", "left"].indexOf(n) !== -1, s = o ? "top" : "left", a = o ? "left" : "top", l = o ? "height" : "width", c = o ? "width" : "height";
  return i[s] = e[s] + e[l] / 2 - r[l] / 2, n === a ? i[a] = e[a] - r[c] : i[a] = e[Sl(a)], i;
}
function _s(t, e) {
  return Array.prototype.find ? t.find(e) : t.filter(e)[0];
}
function MW(t, e, n) {
  if (Array.prototype.findIndex)
    return t.findIndex(function(i) {
      return i[e] === n;
    });
  var r = _s(t, function(i) {
    return i[e] === n;
  });
  return t.indexOf(r);
}
function aC(t, e, n) {
  var r = n === void 0 ? t : t.slice(0, MW(t, "name", n));
  return r.forEach(function(i) {
    i.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
    var o = i.function || i.fn;
    i.enabled && ZE(o) && (e.offsets.popper = lr(e.offsets.popper), e.offsets.reference = lr(e.offsets.reference), e = o(e, i));
  }), e;
}
function TW() {
  if (!this.state.isDestroyed) {
    var t = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: !1,
      offsets: {}
    };
    t.offsets.reference = iC(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = rC(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = sC(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = aC(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t));
  }
}
function lC(t, e) {
  return t.some(function(n) {
    var r = n.name, i = n.enabled;
    return i && r === e;
  });
}
function bm(t) {
  for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), r = 0; r < e.length; r++) {
    var i = e[r], o = i ? "" + i + n : t;
    if (typeof document.body.style[o] < "u")
      return o;
  }
  return null;
}
function $W() {
  return this.state.isDestroyed = !0, lC(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[bm("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
}
function cC(t) {
  var e = t.ownerDocument;
  return e ? e.defaultView : window;
}
function uC(t, e, n, r) {
  var i = t.nodeName === "BODY", o = i ? t.ownerDocument.defaultView : t;
  o.addEventListener(e, n, { passive: !0 }), i || uC(Cs(o.parentNode), e, n, r), r.push(o);
}
function IW(t, e, n, r) {
  n.updateBound = r, cC(t).addEventListener("resize", n.updateBound, { passive: !0 });
  var i = Cs(t);
  return uC(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n;
}
function PW() {
  this.state.eventsEnabled || (this.state = IW(this.reference, this.options, this.state, this.scheduleUpdate));
}
function DW(t, e) {
  return cC(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function(n) {
    n.removeEventListener("scroll", e.updateBound);
  }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e;
}
function AW() {
  this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = DW(this.reference, this.state));
}
function wm(t) {
  return t !== "" && !isNaN(parseFloat(t)) && isFinite(t);
}
function Id(t, e) {
  Object.keys(e).forEach(function(n) {
    var r = "";
    ["width", "height", "top", "right", "bottom", "left"].indexOf(n) !== -1 && wm(e[n]) && (r = "px"), t.style[n] = e[n] + r;
  });
}
function RW(t, e) {
  Object.keys(e).forEach(function(n) {
    var r = e[n];
    r !== !1 ? t.setAttribute(n, e[n]) : t.removeAttribute(n);
  });
}
function FW(t) {
  return Id(t.instance.popper, t.styles), RW(t.instance.popper, t.attributes), t.arrowElement && Object.keys(t.arrowStyles).length && Id(t.arrowElement, t.arrowStyles), t;
}
function LW(t, e, n, r, i) {
  var o = iC(i, e, t, n.positionFixed), s = rC(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
  return e.setAttribute("x-placement", s), Id(e, { position: n.positionFixed ? "fixed" : "absolute" }), n;
}
function jW(t, e) {
  var n = t.offsets, r = n.popper, i = n.reference, o = Math.round, s = Math.floor, a = function(y) {
    return y;
  }, l = o(i.width), c = o(r.width), u = ["left", "right"].indexOf(t.placement) !== -1, f = t.placement.indexOf("-") !== -1, p = l % 2 === c % 2, d = l % 2 === 1 && c % 2 === 1, h = e ? u || f || p ? o : s : a, m = e ? o : a;
  return {
    left: h(d && !f && e ? r.left - 1 : r.left),
    top: m(r.top),
    bottom: m(r.bottom),
    right: h(r.right)
  };
}
var BW = Es && /Firefox/i.test(navigator.userAgent);
function zW(t, e) {
  var n = e.x, r = e.y, i = t.offsets.popper, o = _s(t.instance.modifiers, function(O) {
    return O.name === "applyStyle";
  }).gpuAcceleration;
  o !== void 0 && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
  var s = o !== void 0 ? o : e.gpuAcceleration, a = Ji(t.instance.popper), l = $d(a), c = {
    position: i.position
  }, u = jW(t, window.devicePixelRatio < 2 || !BW), f = n === "bottom" ? "top" : "bottom", p = r === "right" ? "left" : "right", d = bm("transform"), h = void 0, m = void 0;
  if (f === "bottom" ? a.nodeName === "HTML" ? m = -a.clientHeight + u.bottom : m = -l.height + u.bottom : m = u.top, p === "right" ? a.nodeName === "HTML" ? h = -a.clientWidth + u.right : h = -l.width + u.right : h = u.left, s && d)
    c[d] = "translate3d(" + h + "px, " + m + "px, 0)", c[f] = 0, c[p] = 0, c.willChange = "transform";
  else {
    var v = f === "bottom" ? -1 : 1, y = p === "right" ? -1 : 1;
    c[f] = m * v, c[p] = h * y, c.willChange = f + ", " + p;
  }
  var C = {
    "x-placement": t.placement
  };
  return t.attributes = Rt({}, C, t.attributes), t.styles = Rt({}, c, t.styles), t.arrowStyles = Rt({}, t.offsets.arrow, t.arrowStyles), t;
}
function fC(t, e, n) {
  var r = _s(t, function(a) {
    var l = a.name;
    return l === e;
  }), i = !!r && t.some(function(a) {
    return a.name === n && a.enabled && a.order < r.order;
  });
  if (!i) {
    var o = "`" + e + "`", s = "`" + n + "`";
    console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!");
  }
  return i;
}
function VW(t, e) {
  var n;
  if (!fC(t.instance.modifiers, "arrow", "keepTogether"))
    return t;
  var r = e.element;
  if (typeof r == "string") {
    if (r = t.instance.popper.querySelector(r), !r)
      return t;
  } else if (!t.instance.popper.contains(r))
    return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
  var i = t.placement.split("-")[0], o = t.offsets, s = o.popper, a = o.reference, l = ["left", "right"].indexOf(i) !== -1, c = l ? "height" : "width", u = l ? "Top" : "Left", f = u.toLowerCase(), p = l ? "left" : "top", d = l ? "bottom" : "right", h = oC(r)[c];
  a[d] - h < s[f] && (t.offsets.popper[f] -= s[f] - (a[d] - h)), a[f] + h > s[d] && (t.offsets.popper[f] += a[f] + h - s[d]), t.offsets.popper = lr(t.offsets.popper);
  var m = a[f] + a[c] / 2 - h / 2, v = pi(t.instance.popper), y = parseFloat(v["margin" + u]), C = parseFloat(v["border" + u + "Width"]), O = m - t.offsets.popper[f] - y - C;
  return O = Math.max(Math.min(s[c] - h, O), 0), t.arrowElement = r, t.offsets.arrow = (n = {}, Xi(n, f, Math.round(O)), Xi(n, p, ""), n), t;
}
function WW(t) {
  return t === "end" ? "start" : t === "start" ? "end" : t;
}
var pC = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], np = pC.slice(3);
function lw(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = np.indexOf(t), r = np.slice(n + 1).concat(np.slice(0, n));
  return e ? r.reverse() : r;
}
var rp = {
  FLIP: "flip",
  CLOCKWISE: "clockwise",
  COUNTERCLOCKWISE: "counterclockwise"
};
function HW(t, e) {
  if (lC(t.instance.modifiers, "inner") || t.flipped && t.placement === t.originalPlacement)
    return t;
  var n = ym(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed), r = t.placement.split("-")[0], i = Sl(r), o = t.placement.split("-")[1] || "", s = [];
  switch (e.behavior) {
    case rp.FLIP:
      s = [r, i];
      break;
    case rp.CLOCKWISE:
      s = lw(r);
      break;
    case rp.COUNTERCLOCKWISE:
      s = lw(r, !0);
      break;
    default:
      s = e.behavior;
  }
  return s.forEach(function(a, l) {
    if (r !== a || s.length === l + 1)
      return t;
    r = t.placement.split("-")[0], i = Sl(r);
    var c = t.offsets.popper, u = t.offsets.reference, f = Math.floor, p = r === "left" && f(c.right) > f(u.left) || r === "right" && f(c.left) < f(u.right) || r === "top" && f(c.bottom) > f(u.top) || r === "bottom" && f(c.top) < f(u.bottom), d = f(c.left) < f(n.left), h = f(c.right) > f(n.right), m = f(c.top) < f(n.top), v = f(c.bottom) > f(n.bottom), y = r === "left" && d || r === "right" && h || r === "top" && m || r === "bottom" && v, C = ["top", "bottom"].indexOf(r) !== -1, O = !!e.flipVariations && (C && o === "start" && d || C && o === "end" && h || !C && o === "start" && m || !C && o === "end" && v), N = !!e.flipVariationsByContent && (C && o === "start" && h || C && o === "end" && d || !C && o === "start" && v || !C && o === "end" && m), T = O || N;
    (p || y || T) && (t.flipped = !0, (p || y) && (r = s[l + 1]), T && (o = WW(o)), t.placement = r + (o ? "-" + o : ""), t.offsets.popper = Rt({}, t.offsets.popper, sC(t.instance.popper, t.offsets.reference, t.placement)), t = aC(t.instance.modifiers, t, "flip"));
  }), t;
}
function UW(t) {
  var e = t.offsets, n = e.popper, r = e.reference, i = t.placement.split("-")[0], o = Math.floor, s = ["top", "bottom"].indexOf(i) !== -1, a = s ? "right" : "bottom", l = s ? "left" : "top", c = s ? "width" : "height";
  return n[a] < o(r[l]) && (t.offsets.popper[l] = o(r[l]) - n[c]), n[l] > o(r[a]) && (t.offsets.popper[l] = o(r[a])), t;
}
function GW(t, e, n, r) {
  var i = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), o = +i[1], s = i[2];
  if (!o)
    return t;
  if (s.indexOf("%") === 0) {
    var a = void 0;
    switch (s) {
      case "%p":
        a = n;
        break;
      case "%":
      case "%r":
      default:
        a = r;
    }
    var l = lr(a);
    return l[e] / 100 * o;
  } else if (s === "vh" || s === "vw") {
    var c = void 0;
    return s === "vh" ? c = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : c = Math.max(document.documentElement.clientWidth, window.innerWidth || 0), c / 100 * o;
  } else
    return o;
}
function qW(t, e, n, r) {
  var i = [0, 0], o = ["right", "left"].indexOf(r) !== -1, s = t.split(/(\+|\-)/).map(function(u) {
    return u.trim();
  }), a = s.indexOf(_s(s, function(u) {
    return u.search(/,|\s/) !== -1;
  }));
  s[a] && s[a].indexOf(",") === -1 && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
  var l = /\s*,\s*|\s+/, c = a !== -1 ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
  return c = c.map(function(u, f) {
    var p = (f === 1 ? !o : o) ? "height" : "width", d = !1;
    return u.reduce(function(h, m) {
      return h[h.length - 1] === "" && ["+", "-"].indexOf(m) !== -1 ? (h[h.length - 1] = m, d = !0, h) : d ? (h[h.length - 1] += m, d = !1, h) : h.concat(m);
    }, []).map(function(h) {
      return GW(h, p, e, n);
    });
  }), c.forEach(function(u, f) {
    u.forEach(function(p, d) {
      wm(p) && (i[f] += p * (u[d - 1] === "-" ? -1 : 1));
    });
  }), i;
}
function JW(t, e) {
  var n = e.offset, r = t.placement, i = t.offsets, o = i.popper, s = i.reference, a = r.split("-")[0], l = void 0;
  return wm(+n) ? l = [+n, 0] : l = qW(n, o, s, a), a === "left" ? (o.top += l[0], o.left -= l[1]) : a === "right" ? (o.top += l[0], o.left += l[1]) : a === "top" ? (o.left += l[0], o.top -= l[1]) : a === "bottom" && (o.left += l[0], o.top += l[1]), t.popper = o, t;
}
function KW(t, e) {
  var n = e.boundariesElement || Ji(t.instance.popper);
  t.instance.reference === n && (n = Ji(n));
  var r = bm("transform"), i = t.instance.popper.style, o = i.top, s = i.left, a = i[r];
  i.top = "", i.left = "", i[r] = "";
  var l = ym(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
  i.top = o, i.left = s, i[r] = a, e.boundaries = l;
  var c = e.priority, u = t.offsets.popper, f = {
    primary: function(d) {
      var h = u[d];
      return u[d] < l[d] && !e.escapeWithReference && (h = Math.max(u[d], l[d])), Xi({}, d, h);
    },
    secondary: function(d) {
      var h = d === "right" ? "left" : "top", m = u[h];
      return u[d] > l[d] && !e.escapeWithReference && (m = Math.min(u[h], l[d] - (d === "right" ? u.width : u.height))), Xi({}, h, m);
    }
  };
  return c.forEach(function(p) {
    var d = ["left", "top"].indexOf(p) !== -1 ? "primary" : "secondary";
    u = Rt({}, u, f[d](p));
  }), t.offsets.popper = u, t;
}
function XW(t) {
  var e = t.placement, n = e.split("-")[0], r = e.split("-")[1];
  if (r) {
    var i = t.offsets, o = i.reference, s = i.popper, a = ["bottom", "top"].indexOf(n) !== -1, l = a ? "left" : "top", c = a ? "width" : "height", u = {
      start: Xi({}, l, o[l]),
      end: Xi({}, l, o[l] + o[c] - s[c])
    };
    t.offsets.popper = Rt({}, s, u[r]);
  }
  return t;
}
function YW(t) {
  if (!fC(t.instance.modifiers, "hide", "preventOverflow"))
    return t;
  var e = t.offsets.reference, n = _s(t.instance.modifiers, function(r) {
    return r.name === "preventOverflow";
  }).boundaries;
  if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
    if (t.hide === !0)
      return t;
    t.hide = !0, t.attributes["x-out-of-boundaries"] = "";
  } else {
    if (t.hide === !1)
      return t;
    t.hide = !1, t.attributes["x-out-of-boundaries"] = !1;
  }
  return t;
}
function ZW(t) {
  var e = t.placement, n = e.split("-")[0], r = t.offsets, i = r.popper, o = r.reference, s = ["left", "right"].indexOf(n) !== -1, a = ["top", "left"].indexOf(n) === -1;
  return i[s ? "left" : "top"] = o[n] - (a ? i[s ? "width" : "height"] : 0), t.placement = Sl(e), t.offsets.popper = lr(i), t;
}
var QW = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: XW
  },
  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: JW,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },
  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: KW,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ["left", "right", "top", "bottom"],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: "scrollParent"
  },
  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: UW
  },
  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: VW,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: "[x-arrow]"
  },
  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: HW,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: "flip",
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: "viewport",
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: !1,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: !1
  },
  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: !1,
    /** @prop {ModifierFn} */
    fn: ZW
  },
  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: YW
  },
  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: zW,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: !0,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: "bottom",
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: "right"
  },
  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: FW,
    /** @prop {Function} */
    onLoad: LW,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: void 0
  }
}, eH = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: "bottom",
  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: !1,
  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: !0,
  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: !1,
  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function() {
  },
  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function() {
  },
  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: QW
}, kc = function() {
  function t(e, n) {
    var r = this, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    CW(this, t), this.scheduleUpdate = function() {
      return requestAnimationFrame(r.update);
    }, this.update = xW(this.update.bind(this)), this.options = Rt({}, t.Defaults, i), this.state = {
      isDestroyed: !1,
      isCreated: !1,
      scrollParents: []
    }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(Rt({}, t.Defaults.modifiers, i.modifiers)).forEach(function(s) {
      r.options.modifiers[s] = Rt({}, t.Defaults.modifiers[s] || {}, i.modifiers ? i.modifiers[s] : {});
    }), this.modifiers = Object.keys(this.options.modifiers).map(function(s) {
      return Rt({
        name: s
      }, r.options.modifiers[s]);
    }).sort(function(s, a) {
      return s.order - a.order;
    }), this.modifiers.forEach(function(s) {
      s.enabled && ZE(s.onLoad) && s.onLoad(r.reference, r.popper, r.options, s, r.state);
    }), this.update();
    var o = this.options.eventsEnabled;
    o && this.enableEventListeners(), this.state.eventsEnabled = o;
  }
  return _W(t, [{
    key: "update",
    value: function() {
      return TW.call(this);
    }
  }, {
    key: "destroy",
    value: function() {
      return $W.call(this);
    }
  }, {
    key: "enableEventListeners",
    value: function() {
      return PW.call(this);
    }
  }, {
    key: "disableEventListeners",
    value: function() {
      return AW.call(this);
    }
    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */
    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */
  }]), t;
}();
kc.Utils = (typeof window < "u" ? window : global).PopperUtils;
kc.placements = pC;
kc.Defaults = eH;
const tH = kc;
var nH = '.tippy-iOS{cursor:pointer!important;-webkit-tap-highlight-color:transparent}.tippy-popper{transition-timing-function:cubic-bezier(.165,.84,.44,1);max-width:calc(100% - 8px);pointer-events:none;outline:0}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-7px;bottom:-6.5px;-webkit-transform-origin:50% 0;transform-origin:50% 0;margin:0 3px}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;bottom:-7px;margin:0 3px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 25%;transform-origin:0 25%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-55%);transform:scale(1) translate(-50%,-55%)}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%,-45%);transform:scale(.2) translate(-50%,-45%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateY(-10px);transform:perspective(700px) translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateX(60deg);transform:perspective(700px) rotateX(60deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=top] [data-animation=scale]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px) scale(.5);transform:translateY(-10px) scale(.5)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-7px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;margin:0 3px}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;top:-7px;margin:0 3px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -50%;transform-origin:0 -50%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-45%);transform:scale(1) translate(-50%,-45%)}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%);transform:scale(.2) translate(-50%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateY(10px);transform:perspective(700px) translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateX(-60deg);transform:perspective(700px) rotateX(-60deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=scale]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px) scale(.5);transform:translateY(10px) scale(.5)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-12px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%;margin:3px 0}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-75%,-50%);transform:scale(.2) translate(-75%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateX(-10px);transform:perspective(700px) translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateY(-60deg);transform:perspective(700px) rotateY(-60deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=left] [data-animation=scale]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px) scale(.5);transform:translateX(-10px) scale(.5)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-12px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%;margin:3px 0}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-50% 0;transform-origin:-50% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-25%,-50%);transform:scale(.2) translate(-25%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateX(10px);transform:perspective(700px) translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) rotateY(60deg);transform:perspective(700px) rotateY(60deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-popper[x-placement^=right] [data-animation=scale]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px) scale(.5);transform:translateX(10px) scale(.5)}.tippy-tooltip{position:relative;color:#fff;border-radius:.25rem;font-size:.875rem;padding:.3125rem .5625rem;line-height:1.4;text-align:center;background-color:#333}.tippy-tooltip[data-size=small]{padding:.1875rem .375rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.375rem .75rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:initial}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] .tippy-roundarrow path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:18px;height:7px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;background-color:#333;border-radius:50%;width:calc(110% + 2rem);left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:"";float:left;padding-top:100%}.tippy-backdrop+.tippy-content{transition-property:opacity;will-change:opacity}.tippy-backdrop+.tippy-content[data-state=hidden]{opacity:0}';
function st() {
  return st = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, st.apply(this, arguments);
}
var rH = "4.3.5", ks = typeof window < "u" && typeof document < "u", dC = ks ? navigator.userAgent : "", cw = /MSIE |Trident\//.test(dC), hC = /UCBrowser\//.test(dC), mC = ks && /iPhone|iPad|iPod/.test(navigator.platform) && !window.MSStream, cn = {
  a11y: !0,
  allowHTML: !0,
  animateFill: !0,
  animation: "shift-away",
  appendTo: function() {
    return document.body;
  },
  aria: "describedby",
  arrow: !1,
  arrowType: "sharp",
  boundary: "scrollParent",
  content: "",
  delay: 0,
  distance: 10,
  duration: [325, 275],
  flip: !0,
  flipBehavior: "flip",
  flipOnUpdate: !1,
  followCursor: !1,
  hideOnClick: !0,
  ignoreAttributes: !1,
  inertia: !1,
  interactive: !1,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  lazy: !0,
  maxWidth: 350,
  multiple: !1,
  offset: 0,
  onHidden: function() {
  },
  onHide: function() {
  },
  onMount: function() {
  },
  onShow: function() {
  },
  onShown: function() {
  },
  onTrigger: function() {
  },
  placement: "top",
  popperOptions: {},
  role: "tooltip",
  showOnInit: !1,
  size: "regular",
  sticky: !1,
  target: "",
  theme: "dark",
  touch: !0,
  touchHold: !1,
  trigger: "mouseenter focus",
  triggerTarget: null,
  updateDuration: 0,
  wait: null,
  zIndex: 9999
  /**
   * If the set() method encounters one of these, the popperInstance must be
   * recreated
   */
}, iH = ["arrow", "arrowType", "boundary", "distance", "flip", "flipBehavior", "flipOnUpdate", "offset", "placement", "popperOptions"], Mo = ks ? Element.prototype : {}, Sm = Mo.matches || Mo.matchesSelector || Mo.webkitMatchesSelector || Mo.mozMatchesSelector || Mo.msMatchesSelector;
function cs(t) {
  return [].slice.call(t);
}
function xa(t, e) {
  return Pd(t, function(n) {
    return Sm.call(n, e);
  });
}
function Pd(t, e) {
  for (; t; ) {
    if (e(t))
      return t;
    t = t.parentElement;
  }
  return null;
}
var Dd = {
  passive: !0
  // Popper `preventOverflow` padding
}, ip = 4, Ad = "x-placement", op = "x-out-of-boundaries", vC = "tippy-iOS", uw = "tippy-active", gC = "tippy-popper", yC = "tippy-tooltip", bC = "tippy-content", wC = "tippy-backdrop", SC = "tippy-arrow", xC = "tippy-roundarrow", xm = ".".concat(gC), oH = ".".concat(yC), sH = ".".concat(bC), aH = ".".concat(wC), lH = ".".concat(SC), cH = ".".concat(xC), Hn = !1;
function uH() {
  Hn || (Hn = !0, mC && document.body.classList.add(vC), window.performance && document.addEventListener("mousemove", OC));
}
var fw = 0;
function OC() {
  var t = performance.now();
  t - fw < 20 && (Hn = !1, document.removeEventListener("mousemove", OC), mC || document.body.classList.remove(vC)), fw = t;
}
function fH() {
  var t = document, e = t.activeElement;
  e && e.blur && e._tippy && e.blur();
}
function pH() {
  document.addEventListener("touchstart", uH, Dd), window.addEventListener("blur", fH);
}
var dH = Object.keys(cn);
function hH(t) {
  return dH.reduce(function(e, n) {
    var r = (t.getAttribute("data-tippy-".concat(n)) || "").trim();
    if (!r)
      return e;
    if (n === "content")
      e[n] = r;
    else
      try {
        e[n] = JSON.parse(r);
      } catch {
        e[n] = r;
      }
    return e;
  }, {});
}
function mH(t) {
  var e = {
    isVirtual: !0,
    attributes: t.attributes || {},
    contains: function() {
    },
    setAttribute: function(i, o) {
      t.attributes[i] = o;
    },
    getAttribute: function(i) {
      return t.attributes[i];
    },
    removeAttribute: function(i) {
      delete t.attributes[i];
    },
    hasAttribute: function(i) {
      return i in t.attributes;
    },
    addEventListener: function() {
    },
    removeEventListener: function() {
    },
    classList: {
      classNames: {},
      add: function(i) {
        t.classList.classNames[i] = !0;
      },
      remove: function(i) {
        delete t.classList.classNames[i];
      },
      contains: function(i) {
        return i in t.classList.classNames;
      }
    }
  };
  for (var n in e)
    t[n] = e[n];
}
function vH(t) {
  return {}.toString.call(t) === "[object Object]" && !t.addEventListener;
}
function gH(t) {
  return !!t._tippy && !Sm.call(t, xm);
}
function xl(t, e) {
  return {}.hasOwnProperty.call(t, e);
}
function yH(t) {
  if (EC(t))
    return [t];
  if (t instanceof NodeList)
    return cs(t);
  if (Array.isArray(t))
    return t;
  try {
    return cs(document.querySelectorAll(t));
  } catch {
    return [];
  }
}
function Oa(t, e, n) {
  if (Array.isArray(t)) {
    var r = t[e];
    return r ?? n;
  }
  return t;
}
function pw(t, e) {
  if (e === 0)
    return t;
  var n;
  return function(r) {
    clearTimeout(n), n = setTimeout(function() {
      t(r);
    }, e);
  };
}
function Ea(t, e) {
  return t && t.modifiers && t.modifiers[e];
}
function sp(t, e) {
  return t.indexOf(e) > -1;
}
function Ns(t) {
  return t instanceof Element;
}
function EC(t) {
  return !!(t && xl(t, "isVirtual")) || Ns(t);
}
function dw() {
  return "innerHTML";
}
function Rd(t, e) {
  return typeof t == "function" ? t.apply(null, e) : t;
}
function hw(t, e) {
  t.filter(function(n) {
    return n.name === "flip";
  })[0].enabled = e;
}
function bH(t) {
  return Ns(t) ? Sm.call(t, "a[href],area[href],button,details,input,textarea,select,iframe,[tabindex]") && !t.hasAttribute("disabled") : !0;
}
function Wo() {
  return document.createElement("div");
}
function To(t, e) {
  t.forEach(function(n) {
    n && (n.style.transitionDuration = "".concat(e, "ms"));
  });
}
function mw(t, e) {
  t.forEach(function(n) {
    n && n.setAttribute("data-state", e);
  });
}
function vw(t, e) {
  var n = st({}, e, {
    content: Rd(e.content, [t])
  }, e.ignoreAttributes ? {} : hH(t));
  return (n.arrow || hC) && (n.animateFill = !1), n;
}
function CC(t, e) {
  Object.keys(t).forEach(function(n) {
    if (!xl(e, n))
      throw new Error("[tippy]: `".concat(n, "` is not a valid option"));
  });
}
function _C(t, e) {
  t[dw()] = Ns(e) ? e[dw()] : e;
}
function kC(t, e) {
  if (Ns(e.content))
    _C(t, ""), t.appendChild(e.content);
  else if (typeof e.content != "function") {
    var n = e.allowHTML ? "innerHTML" : "textContent";
    t[n] = e.content;
  }
}
function Fd(t) {
  return {
    tooltip: t.querySelector(oH),
    backdrop: t.querySelector(aH),
    content: t.querySelector(sH),
    arrow: t.querySelector(lH) || t.querySelector(cH)
  };
}
function NC(t) {
  t.setAttribute("data-inertia", "");
}
function wH(t) {
  t.removeAttribute("data-inertia");
}
function Ld(t) {
  var e = Wo();
  return t === "round" ? (e.className = xC, _C(e, '<svg viewBox="0 0 18 7" xmlns="http://www.w3.org/2000/svg"><path d="M0 7s2.021-.015 5.253-4.218C6.584 1.051 7.797.007 9 0c1.203-.007 2.416 1.035 3.761 2.782C16.012 7.005 18 7 18 7H0z"/></svg>')) : e.className = SC, e;
}
function MC() {
  var t = Wo();
  return t.className = wC, t.setAttribute("data-state", "hidden"), t;
}
function TC(t, e) {
  t.setAttribute("tabindex", "-1"), e.setAttribute("data-interactive", "");
}
function SH(t, e) {
  t.removeAttribute("tabindex"), e.removeAttribute("data-interactive");
}
function ap(t, e, n) {
  var r = hC && document.body.style.webkitTransition !== void 0 ? "webkitTransitionEnd" : "transitionend";
  t[e + "EventListener"](r, n);
}
function lp(t) {
  var e = t.getAttribute(Ad);
  return e ? e.split("-")[0] : "";
}
function xH(t) {
  t.offsetHeight;
}
function jd(t, e, n) {
  n.split(" ").forEach(function(r) {
    t.classList[e](r + "-theme");
  });
}
function OH(t, e) {
  var n = Wo();
  n.className = gC, n.id = "tippy-".concat(t), n.style.zIndex = "" + e.zIndex, n.style.position = "absolute", n.style.top = "0", n.style.left = "0", e.role && n.setAttribute("role", e.role);
  var r = Wo();
  r.className = yC, r.style.maxWidth = e.maxWidth + (typeof e.maxWidth == "number" ? "px" : ""), r.setAttribute("data-size", e.size), r.setAttribute("data-animation", e.animation), r.setAttribute("data-state", "hidden"), jd(r, "add", e.theme);
  var i = Wo();
  return i.className = bC, i.setAttribute("data-state", "hidden"), e.interactive && TC(n, r), e.arrow && r.appendChild(Ld(e.arrowType)), e.animateFill && (r.appendChild(MC()), r.setAttribute("data-animatefill", "")), e.inertia && NC(r), kC(i, e), r.appendChild(i), n.appendChild(r), n;
}
function EH(t, e, n) {
  var r = Fd(t), i = r.tooltip, o = r.content, s = r.backdrop, a = r.arrow;
  t.style.zIndex = "" + n.zIndex, i.setAttribute("data-size", n.size), i.setAttribute("data-animation", n.animation), i.style.maxWidth = n.maxWidth + (typeof n.maxWidth == "number" ? "px" : ""), n.role ? t.setAttribute("role", n.role) : t.removeAttribute("role"), e.content !== n.content && kC(o, n), !e.animateFill && n.animateFill ? (i.appendChild(MC()), i.setAttribute("data-animatefill", "")) : e.animateFill && !n.animateFill && (i.removeChild(s), i.removeAttribute("data-animatefill")), !e.arrow && n.arrow ? i.appendChild(Ld(n.arrowType)) : e.arrow && !n.arrow && i.removeChild(a), e.arrow && n.arrow && e.arrowType !== n.arrowType && i.replaceChild(Ld(n.arrowType), a), !e.interactive && n.interactive ? TC(t, i) : e.interactive && !n.interactive && SH(t, i), !e.inertia && n.inertia ? NC(i) : e.inertia && !n.inertia && wH(i), e.theme !== n.theme && (jd(i, "remove", e.theme), jd(i, "add", n.theme));
}
function CH() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = t.exclude, n = t.duration;
  cs(document.querySelectorAll(xm)).forEach(function(r) {
    var i = r._tippy;
    if (i) {
      var o = !1;
      e && (o = gH(e) ? i.reference === e : r === e.popper), o || i.hide(n);
    }
  });
}
function _H(t, e, n, r) {
  if (!t)
    return !0;
  var i = n.clientX, o = n.clientY, s = r.interactiveBorder, a = r.distance, l = e.top - o > (t === "top" ? s + a : s), c = o - e.bottom > (t === "bottom" ? s + a : s), u = e.left - i > (t === "left" ? s + a : s), f = i - e.right > (t === "right" ? s + a : s);
  return l || c || u || f;
}
function kH(t) {
  return -(t - 10) + "px";
}
var NH = 1, Ca = [];
function $C(t, e) {
  var n = vw(t, e);
  if (!n.multiple && t._tippy)
    return null;
  var r, i, o, s, a, l = !1, c = !1, u, f = !1, p = !1, d, h, m = [], v, y = pw(U, n.interactiveDebounce), C = NH++, O = OH(C, n), N = Fd(O), T = null, B = {
    // Is the instance currently enabled?
    isEnabled: !0,
    // Is the tippy currently showing and not transitioning out?
    isVisible: !1,
    // Has the instance been destroyed?
    isDestroyed: !1,
    // Is the tippy currently mounted to the DOM?
    isMounted: !1,
    // Has the tippy finished transitioning in?
    isShown: !1
  }, b = {
    // properties
    id: C,
    reference: t,
    popper: O,
    popperChildren: N,
    popperInstance: T,
    props: n,
    state: B,
    // methods
    clearDelayTimeouts: F,
    set: Y,
    setContent: Ie,
    show: Pe,
    hide: be,
    enable: Ms,
    disable: R,
    destroy: Ne
    /* ==================== Initial instance mutations =================== */
  };
  return t._tippy = b, O._tippy = b, S(), n.lazy || it(), n.showOnInit && Ut(), n.a11y && !n.target && !bH(Q()) && Q().setAttribute("tabindex", "0"), O.addEventListener("mouseenter", function(k) {
    b.props.interactive && b.state.isVisible && r === "mouseenter" && Ut(k, !0);
  }), O.addEventListener("mouseleave", function() {
    b.props.interactive && r === "mouseenter" && document.addEventListener("mousemove", y);
  }), b;
  function re() {
    document.removeEventListener("mousemove", D);
  }
  function j() {
    document.body.removeEventListener("mouseleave", Gt), document.removeEventListener("mousemove", y), Ca = Ca.filter(function(k) {
      return k !== y;
    });
  }
  function Q() {
    return b.props.triggerTarget || t;
  }
  function ee() {
    document.addEventListener("click", Sr, !0);
  }
  function ke() {
    document.removeEventListener("click", Sr, !0);
  }
  function $e() {
    return [b.popperChildren.tooltip, b.popperChildren.backdrop, b.popperChildren.content];
  }
  function Nt() {
    var k = b.props.followCursor;
    return k && r !== "focus" || Hn && k === "initial";
  }
  function He() {
    To([O], cw ? 0 : b.props.updateDuration);
    var k = t.getBoundingClientRect();
    function z() {
      var W = t.getBoundingClientRect();
      (k.top !== W.top || k.right !== W.right || k.bottom !== W.bottom || k.left !== W.left) && b.popperInstance.scheduleUpdate(), k = W, b.state.isMounted && requestAnimationFrame(z);
    }
    z();
  }
  function Xe(k, z) {
    w(k, function() {
      !b.state.isVisible && O.parentNode && O.parentNode.contains(O) && z();
    });
  }
  function x(k, z) {
    w(k, z);
  }
  function w(k, z) {
    var W = b.popperChildren.tooltip;
    function G(Oe) {
      Oe.target === W && (ap(W, "remove", G), z());
    }
    if (k === 0)
      return z();
    ap(W, "remove", h), ap(W, "add", G), h = G;
  }
  function g(k, z) {
    var W = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    Q().addEventListener(k, z, W), m.push({
      eventType: k,
      handler: z,
      options: W
    });
  }
  function S() {
    b.props.touchHold && !b.props.target && (g("touchstart", A, Dd), g("touchend", H, Dd)), b.props.trigger.trim().split(" ").forEach(function(k) {
      if (k !== "manual")
        if (b.props.target)
          switch (k) {
            case "mouseenter":
              g("mouseover", Z), g("mouseout", ye);
              break;
            case "focus":
              g("focusin", Z), g("focusout", ye);
              break;
            case "click":
              g(k, Z);
              break;
          }
        else
          switch (g(k, A), k) {
            case "mouseenter":
              g("mouseleave", H);
              break;
            case "focus":
              g(cw ? "focusout" : "blur", q);
              break;
          }
    });
  }
  function _() {
    m.forEach(function(k) {
      var z = k.eventType, W = k.handler, G = k.options;
      Q().removeEventListener(z, W, G);
    }), m = [];
  }
  function D(k) {
    var z = i = k, W = z.clientX, G = z.clientY;
    if (v) {
      var Oe = Pd(k.target, function(Mm) {
        return Mm === t;
      }), mt = t.getBoundingClientRect(), po = b.props.followCursor, qt = po === "horizontal", Mt = po === "vertical", Jt = sp(["top", "bottom"], lp(O)), ot = O.getAttribute(Ad), Sn = ot ? !!ot.split("-")[1] : !1, xn = Jt ? O.offsetWidth : O.offsetHeight, Ts = xn / 2, km = Jt ? 0 : Sn ? xn : Ts, Nm = Jt ? Sn ? xn : Ts : 0;
      (Oe || !b.props.interactive) && (b.popperInstance.reference = st({}, b.popperInstance.reference, {
        // This will exist in next Popper.js feature release to fix #532
        // @ts-ignore
        referenceNode: t,
        // These `client` values don't get used by Popper.js if they are 0
        clientWidth: 0,
        clientHeight: 0,
        getBoundingClientRect: function() {
          return {
            width: Jt ? xn : 0,
            height: Jt ? 0 : xn,
            top: (qt ? mt.top : G) - km,
            bottom: (qt ? mt.bottom : G) + km,
            left: (Mt ? mt.left : W) - Nm,
            right: (Mt ? mt.right : W) + Nm
          };
        }
      }), b.popperInstance.update()), po === "initial" && b.state.isVisible && re();
    }
  }
  function P(k) {
    if (k) {
      var z = xa(k.target, b.props.target);
      z && !z._tippy && $C(z, st({}, b.props, {
        content: Rd(e.content, [z]),
        appendTo: e.appendTo,
        target: "",
        showOnInit: !0
      }));
    }
  }
  function A(k) {
    !b.state.isEnabled || ve(k) || (b.state.isVisible || (r = k.type, k instanceof MouseEvent && (i = k, Ca.forEach(function(z) {
      return z(k);
    }))), k.type === "click" && b.props.hideOnClick !== !1 && b.state.isVisible ? Gt() : Ut(k));
  }
  function U(k) {
    var z = xa(k.target, xm) === O, W = Pd(k.target, function(G) {
      return G === t;
    });
    z || W || _H(lp(O), O.getBoundingClientRect(), k, b.props) && (j(), Gt());
  }
  function H(k) {
    if (!ve(k)) {
      if (b.props.interactive) {
        document.body.addEventListener("mouseleave", Gt), document.addEventListener("mousemove", y), Ca.push(y);
        return;
      }
      Gt();
    }
  }
  function q(k) {
    k.target === Q() && (b.props.interactive && k.relatedTarget && O.contains(k.relatedTarget) || Gt());
  }
  function Z(k) {
    xa(k.target, b.props.target) && Ut(k);
  }
  function ye(k) {
    xa(k.target, b.props.target) && Gt();
  }
  function ve(k) {
    var z = "ontouchstart" in window, W = sp(k.type, "touch"), G = b.props.touchHold;
    return z && Hn && G && !W || Hn && !G && W;
  }
  function fe() {
    !p && d && (p = !0, xH(O), d());
  }
  function it() {
    var k = b.props.popperOptions, z = b.popperChildren, W = z.tooltip, G = z.arrow, Oe = Ea(k, "preventOverflow");
    function mt(qt) {
      b.props.flip && !b.props.flipOnUpdate && (qt.flipped && (b.popperInstance.options.placement = qt.placement), hw(b.popperInstance.modifiers, !1)), W.setAttribute(Ad, qt.placement), qt.attributes[op] !== !1 ? W.setAttribute(op, "") : W.removeAttribute(op), u && u !== qt.placement && f && (W.style.transition = "none", requestAnimationFrame(function() {
        W.style.transition = "";
      })), u = qt.placement, f = b.state.isVisible;
      var Mt = lp(O), Jt = W.style;
      Jt.top = Jt.bottom = Jt.left = Jt.right = "", Jt[Mt] = kH(b.props.distance);
      var ot = Oe && Oe.padding !== void 0 ? Oe.padding : ip, Sn = typeof ot == "number", xn = st({
        top: Sn ? ot : ot.top,
        bottom: Sn ? ot : ot.bottom,
        left: Sn ? ot : ot.left,
        right: Sn ? ot : ot.right
      }, !Sn && ot);
      xn[Mt] = Sn ? ot + b.props.distance : (ot[Mt] || 0) + b.props.distance, b.popperInstance.modifiers.filter(function(Ts) {
        return Ts.name === "preventOverflow";
      })[0].padding = xn, v = xn;
    }
    var po = st({
      eventsEnabled: !1,
      placement: b.props.placement
    }, k, {
      modifiers: st({}, k ? k.modifiers : {}, {
        preventOverflow: st({
          boundariesElement: b.props.boundary,
          padding: ip
        }, Oe),
        arrow: st({
          element: G,
          enabled: !!G
        }, Ea(k, "arrow")),
        flip: st({
          enabled: b.props.flip,
          // The tooltip is offset by 10px from the popper in CSS,
          // we need to account for its distance
          padding: b.props.distance + ip,
          behavior: b.props.flipBehavior
        }, Ea(k, "flip")),
        offset: st({
          offset: b.props.offset
        }, Ea(k, "offset"))
      }),
      onCreate: function(Mt) {
        mt(Mt), fe(), k && k.onCreate && k.onCreate(Mt);
      },
      onUpdate: function(Mt) {
        mt(Mt), fe(), k && k.onUpdate && k.onUpdate(Mt);
      }
    });
    b.popperInstance = new tH(t, O, po);
  }
  function wr() {
    p = !1;
    var k = Nt();
    b.popperInstance ? (hw(b.popperInstance.modifiers, b.props.flip), k || (b.popperInstance.reference = t, b.popperInstance.enableEventListeners()), b.popperInstance.scheduleUpdate()) : (it(), k || b.popperInstance.enableEventListeners());
    var z = b.props.appendTo, W = z === "parent" ? t.parentNode : Rd(z, [t]);
    W.contains(O) || (W.appendChild(O), b.props.onMount(b), b.state.isMounted = !0);
  }
  function Ut(k, z) {
    if (F(), !b.state.isVisible) {
      if (b.props.target)
        return P(k);
      if (l = !0, k && !z && b.props.onTrigger(b, k), b.props.wait)
        return b.props.wait(b, k);
      Nt() && !b.state.isMounted && (b.popperInstance || it(), document.addEventListener("mousemove", D)), ee();
      var W = Oa(b.props.delay, 0, cn.delay);
      W ? o = setTimeout(function() {
        Pe();
      }, W) : Pe();
    }
  }
  function Gt() {
    if (F(), !b.state.isVisible) {
      re(), ke();
      return;
    }
    l = !1;
    var k = Oa(b.props.delay, 1, cn.delay);
    k ? s = setTimeout(function() {
      b.state.isVisible && be();
    }, k) : a = requestAnimationFrame(function() {
      be();
    });
  }
  function Sr(k) {
    b.props.interactive && O.contains(k.target) || Q().contains(k.target) && (Hn || b.state.isVisible && sp(b.props.trigger, "click")) || b.props.hideOnClick === !0 && (F(), be());
  }
  function Ms() {
    b.state.isEnabled = !0;
  }
  function R() {
    b.state.isEnabled = !1;
  }
  function F() {
    clearTimeout(o), clearTimeout(s), cancelAnimationFrame(a);
  }
  function Y(k) {
    k = k || {}, CC(k, cn), _();
    var z = b.props, W = vw(t, st({}, b.props, {}, k, {
      ignoreAttributes: !0
    }));
    W.ignoreAttributes = xl(k, "ignoreAttributes") ? k.ignoreAttributes || !1 : z.ignoreAttributes, b.props = W, S(), j(), y = pw(U, W.interactiveDebounce), EH(O, z, W), b.popperChildren = Fd(O), b.popperInstance && (iH.some(function(G) {
      return xl(k, G) && k[G] !== z[G];
    }) ? (b.popperInstance.destroy(), it(), b.state.isVisible && b.popperInstance.enableEventListeners(), b.props.followCursor && i && D(i)) : b.popperInstance.update());
  }
  function Ie(k) {
    Y({
      content: k
    });
  }
  function Pe() {
    var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Oa(b.props.duration, 0, cn.duration[1]);
    if (!(b.state.isDestroyed || !b.state.isEnabled || Hn && !b.props.touch) && !Q().hasAttribute("disabled") && b.props.onShow(b) !== !1) {
      ee(), O.style.visibility = "visible", b.state.isVisible = !0, b.props.interactive && Q().classList.add(uw);
      var z = $e();
      To(z.concat(O), 0), d = function() {
        if (b.state.isVisible) {
          var G = Nt();
          G && i ? D(i) : G || b.popperInstance.update(), b.popperChildren.backdrop && (b.popperChildren.content.style.transitionDelay = Math.round(k / 12) + "ms"), b.props.sticky && He(), To([O], b.props.updateDuration), To(z, k), mw(z, "visible"), x(k, function() {
            b.props.aria && Q().setAttribute("aria-".concat(b.props.aria), O.id), b.props.onShown(b), b.state.isShown = !0;
          });
        }
      }, wr();
    }
  }
  function be() {
    var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Oa(b.props.duration, 1, cn.duration[1]);
    if (!(b.state.isDestroyed || !b.state.isEnabled && !c) && !(b.props.onHide(b) === !1 && !c)) {
      ke(), O.style.visibility = "hidden", b.state.isVisible = !1, b.state.isShown = !1, f = !1, b.props.interactive && Q().classList.remove(uw);
      var z = $e();
      To(z, k), mw(z, "hidden"), Xe(k, function() {
        l || re(), b.props.aria && Q().removeAttribute("aria-".concat(b.props.aria)), b.popperInstance.disableEventListeners(), b.popperInstance.options.placement = b.props.placement, O.parentNode.removeChild(O), b.props.onHidden(b), b.state.isMounted = !1;
      });
    }
  }
  function Ne(k) {
    if (!b.state.isDestroyed) {
      c = !0, b.state.isMounted && be(0), _(), delete t._tippy;
      var z = b.props.target;
      z && k && Ns(t) && cs(t.querySelectorAll(z)).forEach(function(W) {
        W._tippy && W._tippy.destroy();
      }), b.popperInstance && b.popperInstance.destroy(), c = !1, b.state.isDestroyed = !0;
    }
  }
}
function MH(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = e.delay, r = n === void 0 ? t[0].props.delay : n, i = e.duration, o = i === void 0 ? 0 : i, s = !1;
  t.forEach(function(p) {
    p._originalProps ? p.set(p._originalProps) : p._originalProps = st({}, p.props);
  });
  function a(p) {
    s = p, f();
  }
  function l(p) {
    p._originalProps.onShow(p), t.forEach(function(d) {
      d.set({
        duration: o
      }), d.state.isVisible && d.hide();
    }), a(!0);
  }
  function c(p) {
    p._originalProps.onHide(p), a(!1);
  }
  function u(p) {
    p._originalProps.onShown(p), p.set({
      duration: p._originalProps.duration
    });
  }
  function f() {
    t.forEach(function(p) {
      p.set({
        onShow: l,
        onShown: u,
        onHide: c,
        delay: s ? [0, Array.isArray(r) ? r[1] : r] : r,
        duration: s ? o : p._originalProps.duration
      });
    });
  }
  f();
}
var gw = !1;
function cr(t, e) {
  CC(e || {}, cn), gw || (pH(), gw = !0);
  var n = st({}, cn, {}, e);
  vH(t) && mH(t);
  var r = yH(t).reduce(function(i, o) {
    var s = o && $C(o, n);
    return s && i.push(s), i;
  }, []);
  return EC(t) ? r[0] : r;
}
cr.version = rH;
cr.defaults = cn;
cr.setDefaults = function(t) {
  Object.keys(t).forEach(function(e) {
    cn[e] = t[e];
  });
};
cr.hideAll = CH;
cr.group = MH;
function TH() {
  cs(document.querySelectorAll("[data-tippy]")).forEach(function(t) {
    var e = t.getAttribute("data-tippy");
    e && cr(t, {
      content: e
    });
  });
}
ks && setTimeout(TH);
function $H(t) {
  if (ks) {
    var e = document.createElement("style");
    e.type = "text/css", e.textContent = t, e.setAttribute("data-tippy-stylesheet", "");
    var n = document.head, r = n.querySelector("style,link");
    r ? n.insertBefore(e, r) : n.appendChild(e);
  }
}
$H(nH);
var IH = "Expected a function", IC = "__lodash_hash_undefined__", PC = 1 / 0, PH = "[object Function]", DH = "[object GeneratorFunction]", AH = "[object Symbol]", RH = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, FH = /^\w*$/, LH = /^\./, jH = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, BH = /[\\^$.*+?()[\]{}|]/g, zH = /\\(\\)?/g, VH = /^\[object .+?Constructor\]$/, WH = typeof un == "object" && un && un.Object === Object && un, HH = typeof self == "object" && self && self.Object === Object && self, Om = WH || HH || Function("return this")();
function UH(t, e) {
  return t == null ? void 0 : t[e];
}
function GH(t) {
  var e = !1;
  if (t != null && typeof t.toString != "function")
    try {
      e = !!(t + "");
    } catch {
    }
  return e;
}
var qH = Array.prototype, JH = Function.prototype, DC = Object.prototype, cp = Om["__core-js_shared__"], yw = function() {
  var t = /[^.]+$/.exec(cp && cp.keys && cp.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}(), AC = JH.toString, Em = DC.hasOwnProperty, RC = DC.toString, KH = RegExp(
  "^" + AC.call(Em).replace(BH, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
), bw = Om.Symbol, XH = qH.splice, YH = FC(Om, "Map"), us = FC(Object, "create"), ww = bw ? bw.prototype : void 0, Sw = ww ? ww.toString : void 0;
function Zr(t) {
  var e = -1, n = t ? t.length : 0;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
function ZH() {
  this.__data__ = us ? us(null) : {};
}
function QH(t) {
  return this.has(t) && delete this.__data__[t];
}
function e6(t) {
  var e = this.__data__;
  if (us) {
    var n = e[t];
    return n === IC ? void 0 : n;
  }
  return Em.call(e, t) ? e[t] : void 0;
}
function t6(t) {
  var e = this.__data__;
  return us ? e[t] !== void 0 : Em.call(e, t);
}
function n6(t, e) {
  var n = this.__data__;
  return n[t] = us && e === void 0 ? IC : e, this;
}
Zr.prototype.clear = ZH;
Zr.prototype.delete = QH;
Zr.prototype.get = e6;
Zr.prototype.has = t6;
Zr.prototype.set = n6;
function fo(t) {
  var e = -1, n = t ? t.length : 0;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
function r6() {
  this.__data__ = [];
}
function i6(t) {
  var e = this.__data__, n = Nc(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : XH.call(e, n, 1), !0;
}
function o6(t) {
  var e = this.__data__, n = Nc(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function s6(t) {
  return Nc(this.__data__, t) > -1;
}
function a6(t, e) {
  var n = this.__data__, r = Nc(n, t);
  return r < 0 ? n.push([t, e]) : n[r][1] = e, this;
}
fo.prototype.clear = r6;
fo.prototype.delete = i6;
fo.prototype.get = o6;
fo.prototype.has = s6;
fo.prototype.set = a6;
function di(t) {
  var e = -1, n = t ? t.length : 0;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
function l6() {
  this.__data__ = {
    hash: new Zr(),
    map: new (YH || fo)(),
    string: new Zr()
  };
}
function c6(t) {
  return Mc(this, t).delete(t);
}
function u6(t) {
  return Mc(this, t).get(t);
}
function f6(t) {
  return Mc(this, t).has(t);
}
function p6(t, e) {
  return Mc(this, t).set(t, e), this;
}
di.prototype.clear = l6;
di.prototype.delete = c6;
di.prototype.get = u6;
di.prototype.has = f6;
di.prototype.set = p6;
function Nc(t, e) {
  for (var n = t.length; n--; )
    if (O6(t[n][0], e))
      return n;
  return -1;
}
function d6(t, e) {
  e = g6(e, t) ? [e] : v6(e);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[S6(e[n++])];
  return n && n == r ? t : void 0;
}
function h6(t) {
  if (!jC(t) || b6(t))
    return !1;
  var e = E6(t) || GH(t) ? KH : VH;
  return e.test(x6(t));
}
function m6(t) {
  if (typeof t == "string")
    return t;
  if (_m(t))
    return Sw ? Sw.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -PC ? "-0" : e;
}
function v6(t) {
  return LC(t) ? t : w6(t);
}
function Mc(t, e) {
  var n = t.__data__;
  return y6(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function FC(t, e) {
  var n = UH(t, e);
  return h6(n) ? n : void 0;
}
function g6(t, e) {
  if (LC(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || _m(t) ? !0 : FH.test(t) || !RH.test(t) || e != null && t in Object(e);
}
function y6(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function b6(t) {
  return !!yw && yw in t;
}
var w6 = Cm(function(t) {
  t = _6(t);
  var e = [];
  return LH.test(t) && e.push(""), t.replace(jH, function(n, r, i, o) {
    e.push(i ? o.replace(zH, "$1") : r || n);
  }), e;
});
function S6(t) {
  if (typeof t == "string" || _m(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -PC ? "-0" : e;
}
function x6(t) {
  if (t != null) {
    try {
      return AC.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
function Cm(t, e) {
  if (typeof t != "function" || e && typeof e != "function")
    throw new TypeError(IH);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], o = n.cache;
    if (o.has(i))
      return o.get(i);
    var s = t.apply(this, r);
    return n.cache = o.set(i, s), s;
  };
  return n.cache = new (Cm.Cache || di)(), n;
}
Cm.Cache = di;
function O6(t, e) {
  return t === e || t !== t && e !== e;
}
var LC = Array.isArray;
function E6(t) {
  var e = jC(t) ? RC.call(t) : "";
  return e == PH || e == DH;
}
function jC(t) {
  var e = typeof t;
  return !!t && (e == "object" || e == "function");
}
function C6(t) {
  return !!t && typeof t == "object";
}
function _m(t) {
  return typeof t == "symbol" || C6(t) && RC.call(t) == AH;
}
function _6(t) {
  return t == null ? "" : m6(t);
}
function k6(t, e, n) {
  var r = t == null ? void 0 : d6(t, e);
  return r === void 0 ? n : r;
}
var N6 = k6;
const M6 = /* @__PURE__ */ kw(N6);
function T6(t) {
  const n = new RegExp(/[!@#$^%^&*(),.?":{}|<>]/g).test(t.value[0]);
  return t.isWord && !n;
}
function xw(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Ow(t, e, n, r, i) {
  const o = r(), s = o.map((f) => T6(f) ? `\\b(${xw(f.value)})\\b` : `(${xw(f.value)})`).join("|"), a = new RegExp(s, "ig");
  let l = [], c = { active: !1 };
  if (o.length < 1)
    return { highlights: l, on: c };
  function u(f, p, d) {
    const h = o.find((m) => m.value === d);
    if (h !== void 0) {
      const m = h.overrideClass;
      if (e && e.pos >= f && e.pos <= p) {
        const v = M6(
          n,
          "on.decorationId",
          (Math.random() + 1).toString(36).substr(2, 5)
        );
        l.push({ from: f, to: p, text: d, decorationId: v, overrideClass: m }), c.active = !0, c.decorationId = v, c.range = { to: p, from: f }, c.query = d, c.text = d;
      } else
        l.push({ from: f, to: p, text: d, overrideClass: m });
    }
  }
  return t.descendants((f, p) => {
    if (f.isText) {
      let d;
      for (; d = a.exec(f.text); ) {
        const h = o.filter((y) => y.value === d[0]), m = p + d.index;
        let v = !1;
        h.forEach((y) => {
          y.offset && y.length && (v = !0, m - 1 === y.offset && u(m, m + d[0].length, d[0]));
        }), v || u(m, m + d[0].length, d[0]);
      }
    }
  }), { highlights: l, on: c };
}
const $6 = ai.create({
  name: "Warning",
  addOptions() {
    return {
      getErrorWords: () => [],
      onChange: () => {
      },
      onEnter: () => {
      },
      onExit: () => {
      },
      onKeyDown: () => {
      },
      getInitialCharacterCount: () => 0,
      defaultClass: "underline-red"
    };
  },
  group: "inline*",
  inline: !0,
  atom: !1,
  selectable: !1,
  parseHTML() {
    return [
      {
        tag: "[data-mention-id]",
        getAttrs: (t) => {
          const e = t.getAttribute("data-mention-id"), n = t.innerText.split(this.options.matcher.char).join("");
          return { id: e, label: n };
        }
      }
    ];
  },
  addProseMirrorPlugins() {
    const t = this;
    return [
      // underline the words
      new Wt({
        key: new wn("warning"),
        appendTransaction: (e, n, r) => {
          const i = r.doc.content.size, o = r.selection.$from.pos, s = r.selection.$to.pos, a = r.tr;
          return a.selection.$from.pos = Math.min(i, o), a.selection.$to.pos = Math.min(i, s), a;
        },
        view() {
          return {
            update: (e, n) => {
              const r = this.key.getState(n).on, i = this.key.getState(e.state).on, o = r.active && i.active && r.range.from !== i.range.from, s = !r.active && i.active, a = r.active && !i.active, l = !s && !a && r.query !== i.query, c = s || o, u = l, f = a || o;
              if (!c && !u && !f)
                return;
              const p = f && !u ? r : i, d = document.querySelector(
                '[data-decoration-id="' + p.decorationId + '"]'
              ), h = d ? {
                getBoundingClientRect() {
                  return d.getBoundingClientRect();
                },
                clientWidth: d.clientWidth,
                clientHeight: d.clientHeight
              } : null, m = {
                view: e,
                range: p.range,
                text: p.text,
                decorationNode: d,
                virtualNode: h,
                command: function({ range: v, attrs: y }) {
                  const C = e.state.tr.replaceWith(
                    v.from,
                    v.to,
                    e.state.schema.text(y.label)
                  ), O = e.dispatch(C);
                  return setTimeout(() => {
                    document.getElementsByClassName("editor__content")[0].normalize();
                  }), O;
                }
              };
              f && t.options.onExit(m), u && t.options.onChange(m), c && t.options.onEnter(m);
            }
          };
        },
        state: {
          init(e, { doc: n }) {
            return Ow(
              n,
              null,
              {},
              t.options.getErrorWords,
              t.options.getInitialCharacterCount
            );
          },
          apply(e, n) {
            const { selection: r } = e;
            Object.assign({}, n);
            const i = r.$from;
            return Ow(
              e.doc,
              i,
              n,
              t.options.getErrorWords,
              t.options.getInitialCharacterCount
            );
          }
        },
        props: {
          handleKeyDown(e, n) {
            const { active: r, range: i } = this.getState(e.state).on;
            return r ? t.options.onKeyDown({ event: n }) : !1;
          },
          decorations(e) {
            let n = [];
            return this.getState(e).highlights.forEach((r) => {
              n.push(
                Et.inline(r.from, r.to, {
                  class: r.overrideClass ? r.overrideClass : t.options.defaultClass,
                  "data-decoration-id": r.decorationId ? r.decorationId : void 0
                })
              );
            }), Me.create(e.doc, n);
          }
        }
      })
    ];
  }
});
var I6 = 1 / 0, P6 = "[object Symbol]", BC = /&(?:amp|lt|gt|quot|#39|#96);/g, D6 = RegExp(BC.source), A6 = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&#96;": "`"
}, R6 = typeof un == "object" && un && un.Object === Object && un, F6 = typeof self == "object" && self && self.Object === Object && self, L6 = R6 || F6 || Function("return this")();
function j6(t) {
  return function(e) {
    return t == null ? void 0 : t[e];
  };
}
var B6 = j6(A6), z6 = Object.prototype, V6 = z6.toString, Ew = L6.Symbol, Cw = Ew ? Ew.prototype : void 0, _w = Cw ? Cw.toString : void 0;
function W6(t) {
  if (typeof t == "string")
    return t;
  if (U6(t))
    return _w ? _w.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -I6 ? "-0" : e;
}
function H6(t) {
  return !!t && typeof t == "object";
}
function U6(t) {
  return typeof t == "symbol" || H6(t) && V6.call(t) == P6;
}
function G6(t) {
  return t == null ? "" : W6(t);
}
function q6(t) {
  return t = G6(t), t && D6.test(t) ? t.replace(BC, B6) : t;
}
var J6 = q6;
const K6 = /* @__PURE__ */ kw(J6);
function X6(t, e, n, r, i, o, s, a) {
  var l = typeof t == "function" ? t.options : t;
  e && (l.render = e, l.staticRenderFns = n, l._compiled = !0), r && (l.functional = !0), o && (l._scopeId = "data-v-" + o);
  var c;
  if (s ? (c = function(p) {
    p = p || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !p && typeof __VUE_SSR_CONTEXT__ < "u" && (p = __VUE_SSR_CONTEXT__), i && i.call(this, p), p && p._registeredComponents && p._registeredComponents.add(s);
  }, l._ssrRegister = c) : i && (c = a ? function() {
    i.call(
      this,
      (l.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : i), c)
    if (l.functional) {
      l._injectStyles = c;
      var u = l.render;
      l.render = function(d, h) {
        return c.call(h), u(d, h);
      };
    } else {
      var f = l.beforeCreate;
      l.beforeCreate = f ? [].concat(f, c) : [c];
    }
  return {
    exports: t,
    options: l
  };
}
const Y6 = {
  name: "tiptapEditor",
  props: {
    height: {
      type: String,
      default: "300px"
    },
    id: { type: String, default: null },
    value: { type: String, default: "" },
    warnings: {
      type: Array,
      default: () => []
    },
    maxCharacterCount: {
      type: Number,
      default: null
    },
    placeholder: { type: String, default: "write your content here..." },
    showMenu: {
      type: Boolean,
      default: !0
    }
  },
  components: { EditorContent: H3 },
  data() {
    return {
      editor: null,
      currentWarning: null,
      currentOptions: null,
      currentValue: "",
      navigatedOptionIndex: 0,
      insertOption: () => {
      },
      optionsRange: null,
      initialCharacterCount: 0,
      previousCharacterCount: 0
    };
  },
  computed: {
    errors() {
      return this.warnings.length < 1 ? [] : this.warnings.map((t) => {
        const e = t.isWord === void 0 ? !0 : t.isWord;
        return {
          overrideClass: t.overrideClass,
          isWord: e,
          value: e ? t.value : K6(t.value),
          message: t.message,
          offset: t.offset,
          length: t.length,
          options: (t.options || []).map((n, r) => ({ value: n, id: r }))
        };
      });
    },
    currentCharacterCount() {
      return this.editor.storage.characterCount.characters();
    },
    maxCharacterCountExceeded() {
      if (this.editor)
        return this.currentCharacterCount >= this.maxCharacterCount;
    },
    characterCountPercentage() {
      if (this.editor)
        return Math.round(100 / this.maxCharacterCount * this.currentCharacterCount);
    }
  },
  mounted() {
    this.currentValue = this.value, this.editor = new W3({
      content: this.value,
      parseOptions: { preserveWhitespace: "full" },
      onUpdate: ({ getJSON: t, getHTML: e }) => {
        this.currentValue = this.editor.getHTML(), this.$emit("update:value", this.currentValue);
      },
      extensions: [
        K3,
        Y3,
        Z3.configure({ limit: this.maxCharacterCount }),
        Q3,
        dW,
        iW,
        hW,
        mW,
        vW.configure({
          placeholder: this.placeholder
        }),
        gW,
        $6.configure({
          getErrorWords: this.getErrorWords,
          getInitialCharacterCount: this.getInitialCharacterCount,
          onEnter: ({ range: t, command: e, virtualNode: n, text: r }) => {
            this.currentWarning = this.errors.find((i) => i.value === r), this.currentOptions = this.currentWarning.options || [], this.navigatedOptionIndex = 0, this.optionRange = t, this.renderPopup(n), this.insertOption = e;
          },
          onChange: ({ range: t, virtualNode: e, text: n }) => {
            this.currentWarning = this.errors.find((r) => r.value === n), this.currentOptions = this.currentWarning.options || [], this.navigatedOptionIndex = 0, this.optionRange = t, this.renderPopup(e);
          },
          onExit: () => {
            this.navigatedOptionIndex = 0, this.currentOptions = null, this.optionRange = null, this.destroyPopup();
          },
          onKeyDown: ({ event: t }) => t.keyCode === 38 && this.currentOptions !== null ? (this.upHandler(), !0) : t.keyCode === 40 && this.currentOptions !== null ? (this.downHandler(), !0) : t.keyCode === 13 ? this.enterHandler() : t.keyCode === 27 ? (this.navigatedOptionIndex = 0, this.optionRange = null, this.currentOptions = null, this.destroyPopup(), !0) : !1
        })
      ]
    }), cr.setDefaults({
      content: this.$refs.errors,
      trigger: "mouseenter",
      interactive: !0,
      theme: "dark",
      placement: "top-start",
      performance: !0,
      inertia: !0,
      duration: [400, 200],
      showOnInit: !0,
      arrow: !0,
      arrowType: "round",
      hideOnClick: !1
    }), this.initialCharacterCount = this.currentCharacterCount, this.previousCharacterCount = this.currentCharacterCount, this.editor.on("update", ({ editor: t }) => {
      this.warnings.forEach((e) => {
        if (e.length && e.offset && t.state.selection.head - 1 <= e.offset) {
          const n = this.currentCharacterCount - this.previousCharacterCount;
          e.offset += n;
        }
      }), this.previousCharacterCount = this.currentCharacterCount, this.editor.commands.focus();
    });
  },
  destroyed() {
    this.editor.destroy(), this.popup && this.popup.destroy();
  },
  methods: {
    getErrorWords() {
      return this.errors.length < 1 ? [] : this.errors.map((t) => ({
        value: t.value,
        overrideClass: t.overrideClass,
        isWord: t.isWord,
        offset: t.offset,
        length: t.length
      }));
    },
    getInitialCharacterCount() {
      return this.initialCharacterCount;
    },
    upHandler() {
      this.navigatedOptionIndex = (this.navigatedOptionIndex + this.currentOptions.length - 1) % this.currentOptions.length;
    },
    downHandler() {
      this.navigatedOptionIndex = (this.navigatedOptionIndex + 1) % this.currentOptions.length;
    },
    enterHandler() {
      if (this.currentOptions.length === 0)
        return !1;
      const t = this.currentOptions[this.navigatedOptionIndex];
      return t && this.selectOption(t), !0;
    },
    selectOption(t) {
      this.insertOption({
        range: this.optionRange,
        attrs: {
          id: t.id,
          label: t.value
        }
      }), this.editor.commands.focus();
    },
    renderPopup(t) {
      this.popup || (this.popup = cr(t, { content: this.$refs.errors }));
    },
    destroyPopup() {
      this.popup && (this.popup.destroy(), this.popup = null);
    },
    toolbarGoLeft(t) {
      t.preventDefault();
      const e = t.target.previousSibling;
      e && e.focus !== void 0 && e.focus();
    },
    toolbarGoRight(t) {
      t.preventDefault();
      const e = t.target.nextSibling;
      e && e.focus !== void 0 && e.focus();
    }
  },
  watch: {
    warnings: function(t, e) {
      if (this.editor) {
        const n = this.editor.selection;
        this.editor.commands.setContent(this.currentValue), this.editor.commands.setSelection(n.from, n.to), this.initialCharacterCount = this.currentCharacterCount;
      }
    }
  }
};
var Z6 = function() {
  var e = this, n = e._self._c;
  return n("div", [n("div", { staticClass: "tiptap-editor", attrs: { tabindex: "0" } }, [e.showMenu && e.editor ? n("div", { staticClass: "menubar", attrs: { role: "toolbar", "aria-controls": e.id || null } }, [n("button", { class: { "is-active": e.editor.isActive("bold") }, attrs: { "aria-pressed": `${e.editor.isActive("bold") ? "true" : "false"}`, "aria-label": "bold", value: "bold", type: "button" }, on: { keyup: [function(r) {
    return !r.type.indexOf("key") && e._k(r.keyCode, "left", 37, r.key, ["Left", "ArrowLeft"]) || "button" in r && r.button !== 0 ? null : e.toolbarGoLeft.apply(null, arguments);
  }, function(r) {
    return !r.type.indexOf("key") && e._k(r.keyCode, "right", 39, r.key, ["Right", "ArrowRight"]) || "button" in r && r.button !== 2 ? null : e.toolbarGoRight.apply(null, arguments);
  }], click: function(r) {
    e.editor.chain().focus().toggleBold().run();
  } } }, [n("b", [e._v("B")])]), n("button", { class: { "is-active": e.editor.isActive("italic") }, attrs: { "aria-pressed": `${e.editor.isActive("italic") ? "true" : "false"}`, value: "italic", type: "button" }, on: { click: function(r) {
    e.editor.chain().focus().toggleItalic().run();
  }, keyup: [function(r) {
    return !r.type.indexOf("key") && e._k(r.keyCode, "left", 37, r.key, ["Left", "ArrowLeft"]) || "button" in r && r.button !== 0 ? null : e.toolbarGoLeft.apply(null, arguments);
  }, function(r) {
    return !r.type.indexOf("key") && e._k(r.keyCode, "right", 39, r.key, ["Right", "ArrowRight"]) || "button" in r && r.button !== 2 ? null : e.toolbarGoRight.apply(null, arguments);
  }] } }, [n("i", [e._v("I")])]), n("button", { class: { "is-active": e.editor.isActive("bulletList") }, attrs: { "aria-label": "bullet list", value: "bulletlist", type: "button" }, on: { click: function(r) {
    e.editor.chain().focus().toggleBulletList().run();
  }, keyup: [function(r) {
    return !r.type.indexOf("key") && e._k(r.keyCode, "left", 37, r.key, ["Left", "ArrowLeft"]) || "button" in r && r.button !== 0 ? null : e.toolbarGoLeft.apply(null, arguments);
  }, function(r) {
    return !r.type.indexOf("key") && e._k(r.keyCode, "right", 39, r.key, ["Right", "ArrowRight"]) || "button" in r && r.button !== 2 ? null : e.toolbarGoRight.apply(null, arguments);
  }] } }, [n("svg", { staticClass: "svg-inline--fa fa-list-ul fa-w-16", attrs: { "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "list-ul", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" } }, [n("path", { attrs: { fill: "currentColor", d: "M96 96c0 26.51-21.49 48-48 48S0 122.51 0 96s21.49-48 48-48 48 21.49 48 48zM48 208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm0 160c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm96-236h352c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" } })])]), e.maxCharacterCount && e.editor ? n("div", { staticClass: "character-count" }, [n("svg", { class: e.maxCharacterCountExceeded ? "character-count__graph--warning" : "character-count__graph", attrs: { height: "20", width: "20", viewBox: "0 0 20 20" } }, [n("circle", { attrs: { r: "10", cx: "10", cy: "10", fill: "#e9ecef" } }), n("circle", { attrs: { r: "5", cx: "10", cy: "10", fill: "transparent", stroke: "currentColor", "stroke-width": "10", "stroke-dasharray": `calc(${e.characterCountPercentage}px * 31.4 / 100) 31.4`, transform: "rotate(-90) translate(-20)" } }), n("circle", { attrs: { r: "6", cx: "10", cy: "10", fill: "white" } })]), n("div", { staticClass: "character-count__text", attrs: { "aria-live": "polite" } }, [e._v(" " + e._s(e.currentCharacterCount) + " / " + e._s(e.maxCharacterCount) + " characters ")])]) : e._e()]) : e._e(), n("editor-content", { staticClass: "editor__content", style: { height: e.height }, attrs: { editor: e.editor, id: e.id || null, role: "textbox", "aria-label": "text area", tabindex: "-1" } })], 1), n("div", { ref: "errors", staticClass: "error-list", attrs: { "v-show": !1 } }, [e.currentWarning ? [n("b", [e._v(e._s(e.currentWarning.message))]), e._l(e.currentOptions, function(r, i) {
    return n("div", { key: r.id, staticClass: "error-list__item", class: { selected: e.navigatedOptionIndex === i }, on: { click: function(o) {
      return e.selectOption(r);
    } } }, [e._v(" " + e._s(r.value) + " ")]);
  })] : e._e()], 2)]);
}, Q6 = [], e5 = /* @__PURE__ */ X6(
  Y6,
  Z6,
  Q6,
  !1,
  null,
  null,
  null,
  null
);
const n5 = e5.exports;
export {
  n5 as default
};
