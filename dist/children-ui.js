import { defineComponent as B, ref as _, computed as W, watch as Y, onMounted as O, openBlock as d, createElementBlock as y, normalizeClass as T, unref as k, createCommentVNode as E, withDirectives as C, createElementVNode as M, renderSlot as J, vShow as Q, reactive as L, Fragment as Z, renderList as ee, createBlock as te, withCtx as re, createTextVNode as ne, toDisplayString as oe, normalizeStyle as ae, vModelDynamic as se } from "vue";
var R = typeof global == "object" && global && global.Object === Object && global, ie = typeof self == "object" && self && self.Object === Object && self, U = R || ie || Function("return this")(), v = U.Symbol, G = Object.prototype, ue = G.hasOwnProperty, le = G.toString, x = v ? v.toStringTag : void 0;
function ce(e) {
  var t = ue.call(e, x), r = e[x];
  try {
    e[x] = void 0;
    var n = !0;
  } catch {
  }
  var a = le.call(e);
  return n && (t ? e[x] = r : delete e[x]), a;
}
var pe = Object.prototype, fe = pe.toString;
function de(e) {
  return fe.call(e);
}
var be = "[object Null]", ye = "[object Undefined]", $ = v ? v.toStringTag : void 0;
function A(e) {
  return e == null ? e === void 0 ? ye : be : $ && $ in Object(e) ? ce(e) : de(e);
}
function w(e) {
  return e != null && typeof e == "object";
}
var V = Array.isArray;
function ge(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function xe(e) {
  return e;
}
var me = "[object AsyncFunction]", Te = "[object Function]", ve = "[object GeneratorFunction]", je = "[object Proxy]";
function he(e) {
  if (!ge(e))
    return !1;
  var t = A(e);
  return t == Te || t == ve || t == me || t == je;
}
function _e(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Be = 9007199254740991, Oe = /^(?:0|[1-9]\d*)$/;
function Ae(e, t) {
  var r = typeof e;
  return t = t ?? Be, !!t && (r == "number" || r != "symbol" && Oe.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var we = 9007199254740991;
function N(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= we;
}
function D(e) {
  return e != null && N(e.length) && !he(e);
}
var Ee = Object.prototype;
function $e(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ee;
  return e === r;
}
function Se(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Ie = "[object Arguments]";
function S(e) {
  return w(e) && A(e) == Ie;
}
var K = Object.prototype, Fe = K.hasOwnProperty, Pe = K.propertyIsEnumerable, ze = S(/* @__PURE__ */ function() {
  return arguments;
}()) ? S : function(e) {
  return w(e) && Fe.call(e, "callee") && !Pe.call(e, "callee");
};
function ke() {
  return !1;
}
var X = typeof exports == "object" && exports && !exports.nodeType && exports, I = X && typeof module == "object" && module && !module.nodeType && module, Ce = I && I.exports === X, F = Ce ? U.Buffer : void 0, Me = F ? F.isBuffer : void 0, Le = Me || ke, Re = "[object Arguments]", Ue = "[object Array]", Ge = "[object Boolean]", Ve = "[object Date]", Ne = "[object Error]", De = "[object Function]", Ke = "[object Map]", Xe = "[object Number]", qe = "[object Object]", He = "[object RegExp]", We = "[object Set]", Ye = "[object String]", Je = "[object WeakMap]", Qe = "[object ArrayBuffer]", Ze = "[object DataView]", et = "[object Float32Array]", tt = "[object Float64Array]", rt = "[object Int8Array]", nt = "[object Int16Array]", ot = "[object Int32Array]", at = "[object Uint8Array]", st = "[object Uint8ClampedArray]", it = "[object Uint16Array]", ut = "[object Uint32Array]", o = {};
o[et] = o[tt] = o[rt] = o[nt] = o[ot] = o[at] = o[st] = o[it] = o[ut] = !0;
o[Re] = o[Ue] = o[Qe] = o[Ge] = o[Ze] = o[Ve] = o[Ne] = o[De] = o[Ke] = o[Xe] = o[qe] = o[He] = o[We] = o[Ye] = o[Je] = !1;
function lt(e) {
  return w(e) && N(e.length) && !!o[A(e)];
}
function ct(e) {
  return function(t) {
    return e(t);
  };
}
var q = typeof exports == "object" && exports && !exports.nodeType && exports, m = q && typeof module == "object" && module && !module.nodeType && module, pt = m && m.exports === q, h = pt && R.process, P = function() {
  try {
    var e = m && m.require && m.require("util").types;
    return e || h && h.binding && h.binding("util");
  } catch {
  }
}(), z = P && P.isTypedArray, ft = z ? ct(z) : lt, dt = Object.prototype, bt = dt.hasOwnProperty;
function yt(e, t) {
  var r = V(e), n = !r && ze(e), a = !r && !n && Le(e), i = !r && !n && !a && ft(e), s = r || n || a || i, p = s ? Se(e.length, String) : [], b = p.length;
  for (var c in e)
    bt.call(e, c) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Ae(c, b))) && p.push(c);
  return p;
}
function gt(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var xt = gt(Object.keys, Object), mt = Object.prototype, Tt = mt.hasOwnProperty;
function vt(e) {
  if (!$e(e))
    return xt(e);
  var t = [];
  for (var r in Object(e))
    Tt.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function jt(e) {
  return D(e) ? yt(e) : vt(e);
}
function ht(e) {
  return function(t, r, n) {
    for (var a = -1, i = Object(t), s = n(t), p = s.length; p--; ) {
      var b = s[++a];
      if (r(i[b], b, i) === !1)
        break;
    }
    return t;
  };
}
var _t = ht();
function Bt(e, t) {
  return e && _t(e, t, jt);
}
function Ot(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!D(r))
      return e(r, n);
    for (var a = r.length, i = -1, s = Object(r); ++i < a && n(s[i], i, s) !== !1; )
      ;
    return r;
  };
}
var At = Ot(Bt);
function wt(e) {
  return typeof e == "function" ? e : xe;
}
function Et(e, t) {
  var r = V(e) ? _e : At;
  return r(e, wt(t));
}
const $t = ["disabled"], St = {
  key: 0,
  class: "loading bi-arrow-clockwise"
}, It = {
  name: "EnButton"
}, Ft = /* @__PURE__ */ B({
  ...It,
  props: {
    type: { default: "primary" },
    icon: { default: "" },
    size: { default: "default" },
    circle: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    plain: { type: Boolean, default: !1 },
    text: { type: Boolean, default: !1 },
    isLoading: { type: Boolean, default: !1 },
    isRipple: { type: Boolean, default: !1 }
  },
  setup(e) {
    let t = _("");
    const r = _(null), n = e, a = (u) => {
      if (n.isRipple) {
        const l = u.currentTarget, f = l.getBoundingClientRect(), g = document.createElement("span");
        g.classList.add("en-ripple"), g.style.left = u.clientX - f.left + "px", g.style.top = u.clientY - f.top + "px", l.appendChild(g), setTimeout(() => {
          g.remove();
        }, 500);
      }
    }, i = (u) => {
      const l = u.currentTarget;
      l.style.opacity = "0.7";
    }, s = (u) => {
      const l = u.currentTarget;
      l.style.opacity = "1";
    }, p = (u) => {
      const l = u.currentTarget;
      l.style.boxShadow = "1px 2px 10px 2px rgba(0,0,0,0.2)";
    }, b = (u) => {
      const l = u.currentTarget;
      l.style.boxShadow = "none";
    }, c = W(() => n.isRipple && !n.plain && !n.text && !n.disabled);
    return Y(() => n.size, (u) => {
      t.value = ["default", "small", "large"].includes(u) ? u : "default";
    }, { immediate: !0 }), O(() => {
      r.value && r.value.innerHTML.length === 0 && n.icon && (r.value.style.paddingLeft = "0");
    }), (u, l) => (d(), y("button", {
      onMouseenter: l[0] || (l[0] = (f) => c.value ? p(f) : i(f)),
      onMouseleave: l[1] || (l[1] = (f) => c.value ? b(f) : s(f)),
      onClick: l[2] || (l[2] = (f) => a(f)),
      disabled: u.disabled,
      class: T(["en-button en-button-" + u.type + " en-button-" + k(t), {
        "is-text": n.text,
        "is-plain": n.plain,
        "is-circle": n.circle
      }])
    }, [
      u.isLoading ? (d(), y("i", St)) : E("", !0),
      u.icon && !u.isLoading ? (d(), y("i", {
        key: 1,
        class: T(["uIcon", n.icon])
      }, null, 2)) : E("", !0),
      C(M("span", {
        class: "buttonText",
        ref_key: "text",
        ref: r
      }, [
        J(u.$slots, "default", {}, void 0, !0)
      ], 512), [
        [Q, !n.circle]
      ])
    ], 42, $t));
  }
}), j = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of t)
    r[n] = a;
  return r;
}, H = /* @__PURE__ */ j(Ft, [["__scopeId", "data-v-5788de11"]]), Pt = { class: "buttonGroup" }, zt = { name: "EnButtonGroup" }, kt = /* @__PURE__ */ B({
  ...zt,
  props: {
    group: { default: () => [
      {
        text: "",
        icon: "bi-hand-thumbs-up"
      },
      {
        text: "转发",
        icon: "bi-star"
      },
      {
        text: "",
        icon: "bi-star"
      }
    ] },
    type: {},
    size: {}
  },
  setup(e) {
    let t = L([]);
    function r() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
        const i = Math.random() * 16 | 0;
        return (a === "x" ? i : i & 3 | 8).toString(16);
      });
    }
    const n = e;
    return n.group.forEach((a) => {
      a.guid = r(), t.push(a);
    }), O(() => {
    }), (a, i) => (d(), y("div", Pt, [
      (d(!0), y(Z, null, ee(k(t), (s) => (d(), te(H, {
        icon: s.icon,
        type: n.type,
        size: n.size,
        key: s.guid
      }, {
        default: re(() => [
          ne(oe(s.text), 1)
        ]),
        _: 2
      }, 1032, ["icon", "type", "size"]))), 128))
    ]));
  }
}), Ct = /* @__PURE__ */ j(kt, [["__scopeId", "data-v-22f3bc89"]]), Mt = {
  name: "EnContainer"
};
function Lt(e, t, r, n, a, i) {
  return null;
}
const Rt = /* @__PURE__ */ j(Mt, [["render", Lt]]), Ut = ["disabled", "readonly", "placeholder", "type"], Gt = {
  name: "EnInput"
}, Vt = /* @__PURE__ */ B({
  ...Gt,
  props: {
    width: {},
    modelValue: { default: "" },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 },
    size: { default: "default" },
    type: { default: "text" }
  },
  setup(e) {
    const t = e, r = L({
      inputSize: "",
      isFocus: !1
    }), n = _(null), a = () => {
      var i;
      (i = n.value) == null || i.focus();
    };
    return O(() => {
      r.inputSize = ["default", "small", "large"].includes(t.size) ? t.size : "default";
    }), (i, s) => (d(), y("div", {
      class: T(["en-input-box", "en-input-box-" + t.size, {
        "is-focus": r.isFocus
      }]),
      style: ae({ width: t.width }),
      onClick: a
    }, [
      C(M("input", {
        ref_key: "input",
        ref: n,
        onFocus: s[0] || (s[0] = (p) => r.isFocus = !0),
        onBlur: s[1] || (s[1] = (p) => r.isFocus = !1),
        class: T("en-input"),
        disabled: t.disabled,
        readonly: t.readonly,
        "onUpdate:modelValue": s[2] || (s[2] = (p) => t.modelValue = p),
        placeholder: t.placeholder,
        type: t.type
      }, null, 40, Ut), [
        [se, t.modelValue]
      ])
    ], 6));
  }
}), Nt = /* @__PURE__ */ j(Vt, [["__scopeId", "data-v-74ca52d8"]]), Dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EnButton: H,
  EnButtonGroup: Ct,
  EnContainer: Rt,
  EnInput: Nt
}, Symbol.toStringTag, { value: "Module" })), Xt = () => ({
  install: (e) => {
    Et(Dt, (t) => {
      e.component(t.name ?? "未命名", t);
    });
  }
});
export {
  Xt as ChildrenUI,
  Dt as components
};
