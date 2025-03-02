var R = Object.defineProperty;
var F = (t, e, n) =>
  e in t
    ? R(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (t[e] = n);
var f = (t, e, n) => (F(t, typeof e != "symbol" ? e + "" : e, n), n);
(function () {
  try {
    var t =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      e = new Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = "efe09dc9-4967-40bb-9422-44189abad44c"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-efe09dc9-4967-40bb-9422-44189abad44c"));
  } catch {}
})();
function j() {}
const ut = (t) => t;
function G(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function at(t) {
  return (
    !!t &&
    (typeof t == "object" || typeof t == "function") &&
    typeof t.then == "function"
  );
}
function z(t) {
  return t();
}
function ft() {
  return Object.create(null);
}
function W(t) {
  t.forEach(z);
}
function J(t) {
  return typeof t == "function";
}
function _t(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == "object") || typeof t == "function";
}
let m;
function dt(t, e) {
  return m || (m = document.createElement("a")), (m.href = e), t === m.href;
}
function ht(t) {
  return Object.keys(t).length === 0;
}
function H(t, ...e) {
  if (t == null) {
    for (const i of e) i(void 0);
    return j;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function mt(t) {
  let e;
  return H(t, (n) => (e = n))(), e;
}
function pt(t, e, n) {
  t.$$.on_destroy.push(H(e, n));
}
function yt(t, e, n, i) {
  if (t) {
    const s = L(t, e, n, i);
    return t[0](s);
  }
}
function L(t, e, n, i) {
  return t[1] && i ? G(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function gt(t, e, n, i) {
  if (t[2] && i) {
    const s = t[2](i(n));
    if (e.dirty === void 0) return s;
    if (typeof s == "object") {
      const o = [],
        r = Math.max(e.dirty.length, s.length);
      for (let l = 0; l < r; l += 1) o[l] = e.dirty[l] | s[l];
      return o;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function bt(t, e, n, i, s, o) {
  if (s) {
    const r = L(e, n, i, o);
    t.p(r, s);
  }
}
function xt(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32;
    for (let i = 0; i < n; i++) e[i] = -1;
    return e;
  }
  return -1;
}
function vt(t) {
  const e = {};
  for (const n in t) n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function wt(t, e) {
  const n = {};
  e = new Set(e);
  for (const i in t) !e.has(i) && i[0] !== "$" && (n[i] = t[i]);
  return n;
}
function Et(t) {
  return t ?? "";
}
function Tt(t, e, n) {
  return t.set(n), e;
}
function Nt(t) {
  return t && J(t.destroy) ? t.destroy : j;
}
function At(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [t, "px"];
}
let y = !1;
function kt() {
  y = !0;
}
function Dt() {
  y = !1;
}
function K(t, e, n, i) {
  for (; t < e; ) {
    const s = t + ((e - t) >> 1);
    n(s) <= i ? (t = s + 1) : (e = s);
  }
  return t;
}
function Q(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const c = [];
    for (let u = 0; u < e.length; u++) {
      const a = e[u];
      a.claim_order !== void 0 && c.push(a);
    }
    e = c;
  }
  const n = new Int32Array(e.length + 1),
    i = new Int32Array(e.length);
  n[0] = -1;
  let s = 0;
  for (let c = 0; c < e.length; c++) {
    const u = e[c].claim_order,
      a =
        (s > 0 && e[n[s]].claim_order <= u
          ? s + 1
          : K(1, s, (B) => e[n[B]].claim_order, u)) - 1;
    i[c] = n[a] + 1;
    const A = a + 1;
    (n[A] = c), (s = Math.max(A, s));
  }
  const o = [],
    r = [];
  let l = e.length - 1;
  for (let c = n[s] + 1; c != 0; c = i[c - 1]) {
    for (o.push(e[c - 1]); l >= c; l--) r.push(e[l]);
    l--;
  }
  for (; l >= 0; l--) r.push(e[l]);
  o.reverse(), r.sort((c, u) => c.claim_order - u.claim_order);
  for (let c = 0, u = 0; c < r.length; c++) {
    for (; u < o.length && r[c].claim_order >= o[u].claim_order; ) u++;
    const a = u < o.length ? o[u] : null;
    t.insertBefore(r[c], a);
  }
}
function U(t, e) {
  t.appendChild(e);
}
function V(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function St(t) {
  const e = T("style");
  return (e.textContent = "/* empty */"), X(V(t), e), e.sheet;
}
function X(t, e) {
  return U(t.head || t, e), e.sheet;
}
function Y(t, e) {
  if (y) {
    for (
      Q(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null &&
            t.actual_end_child.parentNode !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child
      ? (e.claim_order !== void 0 || e.parentNode !== t) &&
        t.insertBefore(e, t.actual_end_child)
      : (t.actual_end_child = e.nextSibling);
  } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function Z(t, e, n) {
  t.insertBefore(e, n || null);
}
function $(t, e, n) {
  y && !n
    ? Y(t, e)
    : (e.parentNode !== t || e.nextSibling != n) &&
      t.insertBefore(e, n || null);
}
function v(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function jt(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function T(t) {
  return document.createElement(t);
}
function M(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function N(t) {
  return document.createTextNode(t);
}
function Ht() {
  return N(" ");
}
function Lt() {
  return N("");
}
function Mt(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function Ct(t) {
  return function (e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function C(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const tt = ["width", "height"];
function Pt(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const i in e)
    e[i] == null
      ? t.removeAttribute(i)
      : i === "style"
      ? (t.style.cssText = e[i])
      : i === "__value"
      ? (t.value = t[i] = e[i])
      : n[i] && n[i].set && tt.indexOf(i) === -1
      ? (t[i] = e[i])
      : C(t, i, e[i]);
}
function Ot(t, e) {
  for (const n in e) C(t, n, e[n]);
}
function It(t) {
  return t.dataset.svelteH;
}
function qt(t) {
  return Array.from(t.childNodes);
}
function P(t) {
  t.claim_info === void 0 &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function O(t, e, n, i, s = !1) {
  P(t);
  const o = (() => {
    for (let r = t.claim_info.last_index; r < t.length; r++) {
      const l = t[r];
      if (e(l)) {
        const c = n(l);
        return (
          c === void 0 ? t.splice(r, 1) : (t[r] = c),
          s || (t.claim_info.last_index = r),
          l
        );
      }
    }
    for (let r = t.claim_info.last_index - 1; r >= 0; r--) {
      const l = t[r];
      if (e(l)) {
        const c = n(l);
        return (
          c === void 0 ? t.splice(r, 1) : (t[r] = c),
          s
            ? c === void 0 && t.claim_info.last_index--
            : (t.claim_info.last_index = r),
          l
        );
      }
    }
    return i();
  })();
  return (
    (o.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    o
  );
}
function I(t, e, n, i) {
  return O(
    t,
    (s) => s.nodeName === e,
    (s) => {
      const o = [];
      for (let r = 0; r < s.attributes.length; r++) {
        const l = s.attributes[r];
        n[l.name] || o.push(l.name);
      }
      o.forEach((r) => s.removeAttribute(r));
    },
    () => i(e)
  );
}
function Bt(t, e, n) {
  return I(t, e, n, T);
}
function Rt(t, e, n) {
  return I(t, e, n, M);
}
function et(t, e) {
  return O(
    t,
    (n) => n.nodeType === 3,
    (n) => {
      const i = "" + e;
      if (n.data.startsWith(i)) {
        if (n.data.length !== i.length) return n.splitText(i.length);
      } else n.data = i;
    },
    () => N(e),
    !0
  );
}
function Ft(t) {
  return et(t, " ");
}
function k(t, e, n) {
  for (let i = n; i < t.length; i += 1) {
    const s = t[i];
    if (s.nodeType === 8 && s.textContent.trim() === e) return i;
  }
  return t.length;
}
function Gt(t, e) {
  const n = k(t, "HTML_TAG_START", 0),
    i = k(t, "HTML_TAG_END", n);
  if (n === i) return new D(void 0, e);
  P(t);
  const s = t.splice(n, i - n + 1);
  v(s[0]), v(s[s.length - 1]);
  const o = s.slice(1, s.length - 1);
  for (const r of o)
    (r.claim_order = t.claim_info.total_claimed),
      (t.claim_info.total_claimed += 1);
  return new D(o, e);
}
function zt(t, e) {
  (e = "" + e), t.data !== e && (t.data = e);
}
function Wt(t, e) {
  t.value = e ?? "";
}
function Jt(t, e, n, i) {
  n == null
    ? t.style.removeProperty(e)
    : t.style.setProperty(e, n, i ? "important" : "");
}
function Kt(t, e, n) {
  for (let i = 0; i < t.options.length; i += 1) {
    const s = t.options[i];
    if (s.__value === e) {
      s.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function Qt(t, e) {
  for (let n = 0; n < t.options.length; n += 1) {
    const i = t.options[n];
    i.selected = ~e.indexOf(i.__value);
  }
}
function Ut(t) {
  const e = t.querySelector(":checked");
  return e && e.__value;
}
function Vt(t, e, n) {
  t.classList.toggle(e, !!n);
}
function nt(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: i });
}
function Xt(t, e) {
  const n = [];
  let i = 0;
  for (const s of e.childNodes)
    if (s.nodeType === 8) {
      const o = s.textContent.trim();
      o === `HEAD_${t}_END`
        ? ((i -= 1), n.push(s))
        : o === `HEAD_${t}_START` && ((i += 1), n.push(s));
    } else i > 0 && n.push(s);
  return n;
}
class it {
  constructor(e = !1) {
    f(this, "is_svg", !1);
    f(this, "e");
    f(this, "n");
    f(this, "t");
    f(this, "a");
    (this.is_svg = e), (this.e = this.n = null);
  }
  c(e) {
    this.h(e);
  }
  m(e, n, i = null) {
    this.e ||
      (this.is_svg
        ? (this.e = M(n.nodeName))
        : (this.e = T(n.nodeType === 11 ? "TEMPLATE" : n.nodeName)),
      (this.t = n.tagName !== "TEMPLATE" ? n : n.content),
      this.c(e)),
      this.i(i);
  }
  h(e) {
    (this.e.innerHTML = e),
      (this.n = Array.from(
        this.e.nodeName === "TEMPLATE"
          ? this.e.content.childNodes
          : this.e.childNodes
      ));
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1) Z(this.t, this.n[n], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(v);
  }
}
class D extends it {
  constructor(n, i = !1) {
    super(i);
    f(this, "l");
    (this.e = this.n = null), (this.l = n);
  }
  c(n) {
    this.l ? (this.n = this.l) : super.c(n);
  }
  i(n) {
    for (let i = 0; i < this.n.length; i += 1) $(this.t, this.n[i], n);
  }
}
function Yt(t, e) {
  return new t(e);
}
let p;
function b(t) {
  p = t;
}
function g() {
  if (!p) throw new Error("Function called outside component initialization");
  return p;
}
function Zt(t) {
  g().$$.on_mount.push(t);
}
function $t(t) {
  g().$$.after_update.push(t);
}
function te(t) {
  g().$$.on_destroy.push(t);
}
function ee() {
  const t = g();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const s = t.$$.callbacks[e];
    if (s) {
      const o = nt(e, n, { cancelable: i });
      return (
        s.slice().forEach((r) => {
          r.call(t, o);
        }),
        !o.defaultPrevented
      );
    }
    return !0;
  };
}
const h = [],
  S = [];
let d = [];
const w = [],
  q = Promise.resolve();
let E = !1;
function st() {
  E || ((E = !0), q.then(ct));
}
function ne() {
  return st(), q;
}
function rt(t) {
  d.push(t);
}
function ie(t) {
  w.push(t);
}
const x = new Set();
let _ = 0;
function ct() {
  if (_ !== 0) return;
  const t = p;
  do {
    try {
      for (; _ < h.length; ) {
        const e = h[_];
        _++, b(e), ot(e.$$);
      }
    } catch (e) {
      throw ((h.length = 0), (_ = 0), e);
    }
    for (b(null), h.length = 0, _ = 0; S.length; ) S.pop()();
    for (let e = 0; e < d.length; e += 1) {
      const n = d[e];
      x.has(n) || (x.add(n), n());
    }
    d.length = 0;
  } while (h.length);
  for (; w.length; ) w.pop()();
  (E = !1), x.clear(), b(t);
}
function ot(t) {
  if (t.fragment !== null) {
    t.update(), W(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(rt);
  }
}
function se(t) {
  const e = [],
    n = [];
  d.forEach((i) => (t.indexOf(i) === -1 ? e.push(i) : n.push(i))),
    n.forEach((i) => i()),
    (d = e);
}
export {
  ee as $,
  Mt as A,
  Ct as B,
  ie as C,
  W as D,
  rt as E,
  M as F,
  Rt as G,
  wt as H,
  G as I,
  vt as J,
  Pt as K,
  H as L,
  J as M,
  D as N,
  Gt as O,
  dt as P,
  Vt as Q,
  Nt as R,
  Ut as S,
  Qt as T,
  Kt as U,
  ut as V,
  At as W,
  mt as X,
  te as Y,
  ne as Z,
  Ot as _,
  Ht as a,
  g as a0,
  Jt as a1,
  Tt as a2,
  V as a3,
  St as a4,
  nt as a5,
  ft as a6,
  ct as a7,
  ht as a8,
  se as a9,
  p as aa,
  b as ab,
  z as ac,
  h as ad,
  st as ae,
  kt as af,
  Dt as ag,
  at as ah,
  Et as ai,
  Yt as aj,
  $t as ak,
  Ft as b,
  Bt as c,
  v as d,
  T as e,
  qt as f,
  et as g,
  Xt as h,
  C as i,
  Y as j,
  $ as k,
  zt as l,
  pt as m,
  j as n,
  yt as o,
  xt as p,
  gt as q,
  Lt as r,
  _t as s,
  N as t,
  bt as u,
  Zt as v,
  It as w,
  jt as x,
  S as y,
  Wt as z,
};
//# sourceMappingURL=scheduler.b44937bc.js.map
