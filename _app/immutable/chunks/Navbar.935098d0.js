import {
  s as Tt,
  F as wt,
  G as $t,
  f as c,
  d as r,
  i as u,
  k as O,
  j as l,
  n as Ze,
  e as a,
  a as g,
  r as st,
  c as s,
  b,
  w as S,
  A as it,
  R as Q,
  D as Nt,
  m as Ot,
  v as Vt,
  t as ve,
  g as _e,
  a1 as Be,
  E as qt,
  B as Bt,
  l as Ct,
} from "./scheduler.b44937bc.js";
import {
  S as Ut,
  i as jt,
  c as be,
  a as we,
  m as $e,
  t as M,
  g as rt,
  b as j,
  e as ot,
  d as Ce,
  k as Et,
} from "./index.08749574.js";
import { I as Te } from "./Icon.bcad08c4.js";
import { s as kt } from "./index.e14db2ec.js";
import { p as Pt } from "./stores.8bffc7f8.js";
import { g as Rt } from "./navigation.348d0091.js";
import { t as Yt, w as Ft, d as Ht } from "./utils.7de8c714.js";
import { w as Wt } from "./index.6e4317f1.js";
import { e as yt } from "./index.06e46af8.js";
import { L as Gt } from "./LogoWithText.07dfda91.js";
import { f as Jt } from "./featureFlags.9a490bb5.js";
import { n as Kt } from "./notify.112187cd.js";
(function () {
  try {
    var o =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      e = new Error().stack;
    e &&
      ((o._sentryDebugIds = o._sentryDebugIds || {}),
      (o._sentryDebugIds[e] = "f8a23385-f8fb-46b1-bdac-87436888aa24"),
      (o._sentryDebugIdIdentifier =
        "sentry-dbid-f8a23385-f8fb-46b1-bdac-87436888aa24"));
  } catch {}
})();
function Qt(o = {}) {
  const { window: e = Ht } = o,
    n = e == null ? void 0 : e.navigator,
    t = !!(n && "connection" in n),
    i = Wt({
      isSupported: t,
      isOnline: !0,
      saveData: !1,
      offlineAt: void 0,
      onlineAt: void 0,
      downlink: void 0,
      downlinkMax: void 0,
      rtt: void 0,
      effectiveType: void 0,
      type: "unknown",
    }),
    d = t && n.connection;
  function m() {
    if (!n) return;
    const h = {};
    (h.isOnline = n.onLine),
      (h.offlineAt = h.isOnline ? void 0 : Date.now()),
      (h.onlineAt = h.isOnline ? Date.now() : void 0),
      d &&
        ((h.downlink = d.downlink),
        (h.downlinkMax = d.downlinkMax),
        (h.effectiveType = d.effectiveType),
        (h.rtt = d.rtt),
        (h.saveData = d.saveData),
        (h.type = d.type)),
      i.update((f) => ({ ...f, ...h }));
  }
  return (
    e &&
      (yt("offline", () => {
        i.update((h) => ({ ...h, isOnline: !1, offlineAt: Date.now() }));
      }),
      yt("online", () => {
        i.update((h) => ({ ...h, isOnline: !0, onlineAt: Date.now() }));
      })),
    d &&
      (d.addEventListener("change", m, !1),
      Yt(() => {
        d.removeEventListener("change", m);
      })),
    m(),
    Ft(i)
  );
}
function Xt(o) {
  let e, n, t;
  return {
    c() {
      (e = wt("svg")), (n = wt("path")), this.h();
    },
    l(i) {
      e = $t(i, "svg", {
        class: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0,
      });
      var d = c(e);
      (n = $t(d, "path", { fill: !0, d: !0 })),
        c(n).forEach(r),
        d.forEach(r),
        this.h();
    },
    h() {
      u(n, "fill", "currentColor"),
        u(
          n,
          "d",
          "M37.7 23.9c0 .6-.1 1.1-.2 1.7l3.7 2.8c.3.2.4.7.1 1.1l-3.4 5.9c-.2.3-.6.5-1 .3L32.7 34c-.9.7-1.9 1.3-2.9 1.7l-.6 4.5c-.1.4-.5.7-.9.7h-6.8c-.4 0-.8-.3-.9-.7l-.6-4.5c-1-.4-2-1-2.9-1.7l-4.2 1.7c-.4.2-.8 0-1-.3l-3.4-5.9c-.3-.4-.2-.9.1-1.1l3.6-2.8c0-.6-.1-1.1-.1-1.7 0-.6.1-1.1.1-1.7l-3.6-2.8c-.3-.2-.4-.7-.1-1.1l3.4-5.9c.2-.4.6-.5 1-.4l4.2 1.8c.9-.7 1.9-1.3 2.9-1.7l.6-4.5c.1-.4.5-.7.9-.7h6.8c.4 0 .8.3.9.7l.6 4.5c1 .4 2 1 2.9 1.7l4.2-1.8c.4-.1.8 0 1 .4l3.4 5.9c.3.4.2.9-.1 1.1l-3.7 2.8c.1.6.2 1.1.2 1.7zM41.9 2h-34C5.2 2 3 4.2 3 6.9v34c0 1.3.5 2.6 1.4 3.5.9.9 2.2 1.4 3.5 1.4h34c1.3 0 2.6-.5 3.5-1.4.9-.9 1.4-2.2 1.4-3.5v-34c0-2.7-2.2-4.9-4.9-4.9zm-17 17c-2.7 0-4.9 2.2-4.9 4.9 0 1.3.5 2.5 1.5 3.4.9 1 2.1 1.5 3.4 1.5 1.3 0 2.5-.5 3.4-1.5 1-.9 1.5-2.1 1.5-3.4 0-2.7-2.2-4.9-4.9-4.9zM81.3 18.7c-.4-6.1-2.9-12.1-7.5-16.7-4.7 4.7-7.3 10.6-7.8 16.7 2.8 1.5 5.4 3.4 7.7 5.8 2.2-2.4 4.8-4.3 7.6-5.8zm-7.6 12.8c-4.8-7.2-12.8-12-21.9-12 0 21.9 20.4 26.1 21.9 26.3 1.4-.3 21.8-4.4 21.8-26.3-9.1 0-17.1 4.8-21.8 12zM91 51.2H56.3c-2.7 0-4.9 2.2-4.9 4.9v34.6c0 2.7 2.2 4.9 4.9 4.9h34.6c2.7 0 4.9-2.2 4.9-4.9V56.2c0-2.7-2.2-4.9-4.9-4.9zm-7.7 9.6s-1.7-.7-2.5-.7c-1.5-.2-2.5.2-3 2.7l-4.1 22.5c-.5 2-1.2 3.5-2.5 4.5-1 .7-2 1-3.2 1-2 0-4.9-1.2-4.9-1.2l1.2-3.5s2 .7 2.5.7c.7.2 1.2 0 1.7-.2s.7-1 1-1.7l4-22.7c.2-2 1.2-3.5 2.5-4.7 1.5-1 3.2-1.2 5.2-1 1.7.2 3.7 1.2 3.7 1.2zM24.9 70.9c.7 0 1.3.3 1.8.8.5.4.8 1.1.8 1.8s-.3 1.3-.8 1.8-1.1.7-1.8.7-1.3-.2-1.8-.7c-.5-.5-.8-1.1-.8-1.8s.3-1.4.8-1.8c.5-.5 1.1-.8 1.8-.8zM5 53.5c3.6-3.6 11.6-2 19.9 3.5 8.3-5.5 16.3-7.1 19.9-3.5 3.7 3.7 2.1 11.6-3.4 20 5.5 8.3 7.1 16.2 3.4 19.9-3.6 3.7-11.6 2-19.9-3.4-8.3 5.4-16.3 7.1-19.9 3.4-3.7-3.7-2.1-11.6 3.4-19.9-5.5-8.4-7.1-16.3-3.4-20zm29 10.9c1.5 1.6 3 3.2 4.3 4.8 3.5-5.4 4.8-10.1 2.9-12-1.9-1.9-6.6-.7-12 2.9 1.6 1.3 3.2 2.7 4.8 4.3zM15.8 82.5c-1.5-1.5-3-3.2-4.3-4.8C8 83.2 6.7 87.9 8.6 89.8c1.9 1.9 6.6.6 12-2.9-1.6-1.4-3.2-2.8-4.8-4.4zM8.6 57.2c-1.9 1.9-.6 6.6 2.9 12 1.3-1.6 2.8-3.2 4.3-4.8 1.6-1.6 3.2-3 4.8-4.3-5.4-3.6-10.1-4.8-12-2.9zm10.9 21.7c1.8 1.8 3.6 3.4 5.4 4.9 1.8-1.5 3.6-3.1 5.4-4.9 1.8-1.8 3.5-3.6 4.9-5.4-1.4-1.8-3.1-3.7-4.9-5.5-1.8-1.7-3.6-3.4-5.4-4.8-1.8 1.4-3.6 3.1-5.4 4.8-1.8 1.8-3.5 3.7-4.9 5.5 1.4 1.8 3.1 3.6 4.9 5.4zm21.7 10.9c1.9-1.9.6-6.6-2.9-12.1-1.3 1.6-2.8 3.3-4.3 4.8-1.6 1.6-3.2 3-4.8 4.4 5.4 3.5 10.1 4.8 12 2.9z"
        ),
        u(e, "class", (t = `main-container ${o[0] || ""}`)),
        u(e, "width", "100"),
        u(e, "height", "100"),
        u(e, "viewBox", "0 0 100 100"),
        u(e, "fill", "none"),
        u(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, d) {
      O(i, e, d), l(e, n);
    },
    p(i, [d]) {
      d & 1 && t !== (t = `main-container ${i[0] || ""}`) && u(e, "class", t);
    },
    i: Ze,
    o: Ze,
    d(i) {
      i && r(e);
    },
  };
}
function Zt(o, e, n) {
  let { class: t = "" } = e;
  return (
    (o.$$set = (i) => {
      "class" in i && n(0, (t = i.class));
    }),
    [t]
  );
}
class el extends Ut {
  constructor(e) {
    super(), jt(this, e, Zt, Xt, Tt, { class: 0 });
  }
}
function Lt(o) {
  let e, n;
  return {
    c() {
      (e = a("span")), (n = ve("d")), this.h();
    },
    l(t) {
      (e = s(t, "SPAN", {})), c(e).forEach(r), (n = _e(t, "d")), this.h();
    },
    h() {
      Be(e, "--value", o[2].d);
    },
    m(t, i) {
      O(t, e, i), O(t, n, i);
    },
    p(t, i) {
      i & 4 && Be(e, "--value", t[2].d);
    },
    d(t) {
      t && (r(e), r(n));
    },
  };
}
function It(o) {
  let e, n;
  return {
    c() {
      (e = a("span")), (n = ve("h")), this.h();
    },
    l(t) {
      (e = s(t, "SPAN", {})), c(e).forEach(r), (n = _e(t, "h")), this.h();
    },
    h() {
      Be(e, "--value", o[2].h);
    },
    m(t, i) {
      O(t, e, i), O(t, n, i);
    },
    p(t, i) {
      i & 4 && Be(e, "--value", t[2].h);
    },
    d(t) {
      t && (r(e), r(n));
    },
  };
}
function At(o) {
  let e, n;
  return {
    c() {
      (e = a("span")), (n = ve("m")), this.h();
    },
    l(t) {
      (e = s(t, "SPAN", {})), c(e).forEach(r), (n = _e(t, "m")), this.h();
    },
    h() {
      Be(e, "--value", o[2].m);
    },
    m(t, i) {
      O(t, e, i), O(t, n, i);
    },
    p(t, i) {
      i & 4 && Be(e, "--value", t[2].m);
    },
    d(t) {
      t && (r(e), r(n));
    },
  };
}
function xt(o) {
  let e, n;
  return {
    c() {
      (e = a("span")), (n = ve("s")), this.h();
    },
    l(t) {
      (e = s(t, "SPAN", {})), c(e).forEach(r), (n = _e(t, "s")), this.h();
    },
    h() {
      Be(e, "--value", o[2].s);
    },
    m(t, i) {
      O(t, e, i), O(t, n, i);
    },
    p(t, i) {
      i & 4 && Be(e, "--value", t[2].s);
    },
    d(t) {
      t && (r(e), r(n));
    },
  };
}
function tl(o) {
  let e, n, t, i;
  const d = [nl, ll],
    m = [];
  function h(f, E) {
    return f[0].session ? 0 : 1;
  }
  return (
    (e = h(o)),
    (n = m[e] = d[e](o)),
    {
      c() {
        n.c(), (t = st());
      },
      l(f) {
        n.l(f), (t = st());
      },
      m(f, E) {
        m[e].m(f, E), O(f, t, E), (i = !0);
      },
      p(f, E) {
        let _ = e;
        (e = h(f)),
          e === _
            ? m[e].p(f, E)
            : (rt(),
              j(m[_], 1, 1, () => {
                m[_] = null;
              }),
              ot(),
              (n = m[e]),
              n ? n.p(f, E) : ((n = m[e] = d[e](f)), n.c()),
              M(n, 1),
              n.m(t.parentNode, t));
      },
      i(f) {
        i || (M(n), (i = !0));
      },
      o(f) {
        j(n), (i = !1);
      },
      d(f) {
        f && r(t), m[e].d(f);
      },
    }
  );
}
function ll(o) {
  let e,
    n = "เข้าสู่ระบบ";
  return {
    c() {
      (e = a("a")), (e.textContent = n), this.h();
    },
    l(t) {
      (e = s(t, "A", { class: !0, href: !0, ["data-svelte-h"]: !0 })),
        S(e) !== "svelte-173vp9r" && (e.textContent = n),
        this.h();
    },
    h() {
      u(e, "class", "btn btn-primary"), u(e, "href", "/login");
    },
    m(t, i) {
      O(t, e, i);
    },
    p: Ze,
    i: Ze,
    o: Ze,
    d(t) {
      t && r(e);
    },
  };
}
function nl(o) {
  var De, de, R;
  let e,
    n,
    t,
    i,
    d,
    m = "เปิดเครื่องมือผู้ใช้",
    h,
    f,
    E,
    _,
    v,
    y,
    L,
    V,
    C,
    P,
    I,
    X,
    N,
    pe,
    ne,
    H,
    q,
    ce,
    U,
    ae,
    D,
    se,
    re,
    oe,
    z,
    Ne,
    xe;
  t = new Te({ props: { icon: "line-md:account", class: "h-5 w-5" } });
  let A =
    ((De = o[0].user_metadata) == null ? void 0 : De.firstname_th) &&
    ((de = o[0].user_metadata) == null ? void 0 : de.lastname_th) &&
    Dt(o);
  y = new Te({ props: { icon: "mdi:view-dashboard", class: "h-5 w-5" } });
  let w =
      (o[0].role === "teacher" ||
        o[0].role === "school-contact" ||
        o[0].role === "staff") &&
      Mt(),
    x =
      ((R = o[0].user_metadata) == null ? void 0 : R.role) ===
        "student-team-contact" && zt();
  return (
    (N = new Te({ props: { icon: "mdi:email-search", class: "h-5 w-5" } })),
    (ce = new Te({ props: { icon: "mdi:account", class: "h-5 w-5" } })),
    (re = new Te({ props: { icon: "mdi:logout", class: "h-5 w-5" } })),
    {
      c() {
        (e = a("div")),
          (n = a("button")),
          be(t.$$.fragment),
          (i = g()),
          (d = a("span")),
          (d.textContent = m),
          (h = g()),
          (f = a("ul")),
          A && A.c(),
          (E = g()),
          (_ = a("li")),
          (v = a("a")),
          be(y.$$.fragment),
          (L = ve(`
								เครื่องมือ`)),
          (V = g()),
          w && w.c(),
          (C = g()),
          x && x.c(),
          (P = g()),
          (I = a("li")),
          (X = a("a")),
          be(N.$$.fragment),
          (pe = ve(`
								อีเมลที่ได้รับเชิญแล้ว`)),
          (ne = g()),
          (H = a("li")),
          (q = a("a")),
          be(ce.$$.fragment),
          (U = ve(`
								บัญชีของฉัน`)),
          (ae = g()),
          (D = a("li")),
          (se = a("a")),
          be(re.$$.fragment),
          (oe = ve(`
								ออกจากระบบ`)),
          this.h();
      },
      l($) {
        e = s($, "DIV", { class: !0 });
        var G = c(e);
        n = s(G, "BUTTON", { tabindex: !0, class: !0 });
        var J = c(n);
        we(t.$$.fragment, J),
          (i = b(J)),
          (d = s(J, "SPAN", { class: !0, ["data-svelte-h"]: !0 })),
          S(d) !== "svelte-idmht9" && (d.textContent = m),
          J.forEach(r),
          (h = b(G)),
          (f = s(G, "UL", { class: !0 }));
        var k = c(f);
        A && A.l(k), (E = b(k)), (_ = s(k, "LI", {}));
        var he = c(_);
        v = s(he, "A", { href: !0 });
        var K = c(v);
        we(y.$$.fragment, K),
          (L = _e(
            K,
            `
								เครื่องมือ`
          )),
          K.forEach(r),
          he.forEach(r),
          (V = b(k)),
          w && w.l(k),
          (C = b(k)),
          x && x.l(k),
          (P = b(k)),
          (I = s(k, "LI", {}));
        var Ee = c(I);
        X = s(Ee, "A", { href: !0 });
        var ie = c(X);
        we(N.$$.fragment, ie),
          (pe = _e(
            ie,
            `
								อีเมลที่ได้รับเชิญแล้ว`
          )),
          ie.forEach(r),
          Ee.forEach(r),
          (ne = b(k)),
          (H = s(k, "LI", {}));
        var fe = c(H);
        q = s(fe, "A", { href: !0 });
        var Z = c(q);
        we(ce.$$.fragment, Z),
          (U = _e(
            Z,
            `
								บัญชีของฉัน`
          )),
          Z.forEach(r),
          fe.forEach(r),
          (ae = b(k)),
          (D = s(k, "LI", {}));
        var Ue = c(D);
        se = s(Ue, "A", { href: !0, class: !0 });
        var B = c(se);
        we(re.$$.fragment, B),
          (oe = _e(
            B,
            `
								ออกจากระบบ`
          )),
          B.forEach(r),
          Ue.forEach(r),
          k.forEach(r),
          G.forEach(r),
          this.h();
      },
      h() {
        u(d, "class", "sr-only"),
          u(n, "tabindex", "0"),
          u(n, "class", "btn btn-square btn-primary"),
          u(v, "href", "/dashboard"),
          u(X, "href", "/auth/list-of-invited"),
          u(q, "href", "/account"),
          u(se, "href", "/logout"),
          u(se, "class", "g_id_signout btn-error btn-outline"),
          u(
            f,
            "class",
            "menu dropdown-content rounded-box w-52 bg-base-200 shadow"
          ),
          u(e, "class", "dropdown dropdown-end dropdown-hover");
      },
      m($, G) {
        O($, e, G),
          l(e, n),
          $e(t, n, null),
          l(n, i),
          l(n, d),
          l(e, h),
          l(e, f),
          A && A.m(f, null),
          l(f, E),
          l(f, _),
          l(_, v),
          $e(y, v, null),
          l(v, L),
          l(f, V),
          w && w.m(f, null),
          l(f, C),
          x && x.m(f, null),
          l(f, P),
          l(f, I),
          l(I, X),
          $e(N, X, null),
          l(X, pe),
          l(f, ne),
          l(f, H),
          l(H, q),
          $e(ce, q, null),
          l(q, U),
          l(f, ae),
          l(f, D),
          l(D, se),
          $e(re, se, null),
          l(se, oe),
          (z = !0),
          Ne || ((xe = it(se, "click", Bt(o[5]))), (Ne = !0));
      },
      p($, G) {
        var J, k, he;
        (J = $[0].user_metadata) != null &&
        J.firstname_th &&
        (k = $[0].user_metadata) != null &&
        k.lastname_th
          ? A
            ? A.p($, G)
            : ((A = Dt($)), A.c(), A.m(f, E))
          : A && (A.d(1), (A = null)),
          $[0].role === "teacher" ||
          $[0].role === "school-contact" ||
          $[0].role === "staff"
            ? w
              ? G & 1 && M(w, 1)
              : ((w = Mt()), w.c(), M(w, 1), w.m(f, C))
            : w &&
              (rt(),
              j(w, 1, 1, () => {
                w = null;
              }),
              ot()),
          ((he = $[0].user_metadata) == null ? void 0 : he.role) ===
          "student-team-contact"
            ? x
              ? G & 1 && M(x, 1)
              : ((x = zt()), x.c(), M(x, 1), x.m(f, P))
            : x &&
              (rt(),
              j(x, 1, 1, () => {
                x = null;
              }),
              ot());
      },
      i($) {
        z ||
          (M(t.$$.fragment, $),
          M(y.$$.fragment, $),
          M(w),
          M(x),
          M(N.$$.fragment, $),
          M(ce.$$.fragment, $),
          M(re.$$.fragment, $),
          (z = !0));
      },
      o($) {
        j(t.$$.fragment, $),
          j(y.$$.fragment, $),
          j(w),
          j(x),
          j(N.$$.fragment, $),
          j(ce.$$.fragment, $),
          j(re.$$.fragment, $),
          (z = !1);
      },
      d($) {
        $ && r(e),
          Ce(t),
          A && A.d(),
          Ce(y),
          w && w.d(),
          x && x.d(),
          Ce(N),
          Ce(ce),
          Ce(re),
          (Ne = !1),
          xe();
      },
    }
  );
}
function Dt(o) {
  var f, E;
  let e,
    n,
    t = ((f = o[0].user_metadata) == null ? void 0 : f.firstname_th) + "",
    i,
    d,
    m = ((E = o[0].user_metadata) == null ? void 0 : E.lastname_th) + "",
    h;
  return {
    c() {
      (e = a("li")),
        (n = ve("ยินดีต้อนรับ, ")),
        (i = ve(t)),
        (d = g()),
        (h = ve(m)),
        this.h();
    },
    l(_) {
      e = s(_, "LI", { class: !0 });
      var v = c(e);
      (n = _e(v, "ยินดีต้อนรับ, ")),
        (i = _e(v, t)),
        (d = b(v)),
        (h = _e(v, m)),
        v.forEach(r),
        this.h();
    },
    h() {
      u(e, "class", "menu-title text-sm");
    },
    m(_, v) {
      O(_, e, v), l(e, n), l(e, i), l(e, d), l(e, h);
    },
    p(_, v) {
      var y, L;
      v & 1 &&
        t !==
          (t =
            ((y = _[0].user_metadata) == null ? void 0 : y.firstname_th) +
            "") &&
        Ct(i, t),
        v & 1 &&
          m !==
            (m =
              ((L = _[0].user_metadata) == null ? void 0 : L.lastname_th) +
              "") &&
          Ct(h, m);
    },
    d(_) {
      _ && r(e);
    },
  };
}
function Mt(o) {
  let e, n, t, i, d, m, h, f, E, _;
  return (
    (t = new Te({
      props: { icon: "mdi:account-multiple-plus", class: "h-5 w-5" },
    })),
    (f = new Te({
      props: { icon: "mdi:arrow-projectile-multiple", class: "h-5 w-5" },
    })),
    {
      c() {
        (e = a("li")),
          (n = a("a")),
          be(t.$$.fragment),
          (i = ve(`
									ส่งคำเชิญ`)),
          (d = g()),
          (m = a("li")),
          (h = a("a")),
          be(f.$$.fragment),
          (E = ve(`
									รายการโครงงาน`)),
          this.h();
      },
      l(v) {
        e = s(v, "LI", {});
        var y = c(e);
        n = s(y, "A", { href: !0 });
        var L = c(n);
        we(t.$$.fragment, L),
          (i = _e(
            L,
            `
									ส่งคำเชิญ`
          )),
          L.forEach(r),
          y.forEach(r),
          (d = b(v)),
          (m = s(v, "LI", {}));
        var V = c(m);
        h = s(V, "A", { href: !0 });
        var C = c(h);
        we(f.$$.fragment, C),
          (E = _e(
            C,
            `
									รายการโครงงาน`
          )),
          C.forEach(r),
          V.forEach(r),
          this.h();
      },
      h() {
        u(n, "href", "/manage/invite"), u(h, "href", "/projects");
      },
      m(v, y) {
        O(v, e, y),
          l(e, n),
          $e(t, n, null),
          l(n, i),
          O(v, d, y),
          O(v, m, y),
          l(m, h),
          $e(f, h, null),
          l(h, E),
          (_ = !0);
      },
      i(v) {
        _ || (M(t.$$.fragment, v), M(f.$$.fragment, v), (_ = !0));
      },
      o(v) {
        j(t.$$.fragment, v), j(f.$$.fragment, v), (_ = !1);
      },
      d(v) {
        v && (r(e), r(d), r(m)), Ce(t), Ce(f);
      },
    }
  );
}
function zt(o) {
  let e, n, t, i, d;
  return (
    (t = new Te({ props: { icon: "mdi:account-group", class: "h-5 w-5" } })),
    {
      c() {
        (e = a("li")),
          (n = a("a")),
          be(t.$$.fragment),
          (i = ve(`
									จัดการโครงงานของฉัน`)),
          this.h();
      },
      l(m) {
        e = s(m, "LI", {});
        var h = c(e);
        n = s(h, "A", { href: !0 });
        var f = c(n);
        we(t.$$.fragment, f),
          (i = _e(
            f,
            `
									จัดการโครงงานของฉัน`
          )),
          f.forEach(r),
          h.forEach(r),
          this.h();
      },
      h() {
        u(n, "href", "/my-project");
      },
      m(m, h) {
        O(m, e, h), l(e, n), $e(t, n, null), l(n, i), (d = !0);
      },
      i(m) {
        d || (M(t.$$.fragment, m), (d = !0));
      },
      o(m) {
        j(t.$$.fragment, m), (d = !1);
      },
      d(m) {
        m && r(e), Ce(t);
      },
    }
  );
}
function St(o) {
  let e,
    n,
    t,
    i,
    d,
    m = "หน้าแรก",
    h,
    f,
    E,
    _ = "ดาวน์โหลดเอกสาร",
    v,
    y,
    L,
    V,
    C = "ข้อมูลงาน",
    P,
    I,
    X,
    N,
    pe = "กำหนดการ",
    ne,
    H,
    q,
    ce = "ตารางงาน",
    U,
    ae,
    D,
    se = "ทัศนศึกษา",
    re,
    oe,
    z,
    Ne = "วิทยากร",
    xe,
    A,
    w,
    x = "เอกสาร",
    De,
    de,
    R,
    $,
    G = "โครงงาน",
    J,
    k,
    he,
    K,
    Ee = "โครงงานพร้อมรหัสโครงงาน",
    ie,
    fe,
    Z,
    Ue = "ลำดับการนำเสนอโครงงาน",
    B,
    ke,
    ge,
    Qe;
  return {
    c() {
      (e = a("div")),
        (n = a("div")),
        (t = a("ul")),
        (i = a("li")),
        (d = a("a")),
        (d.textContent = m),
        (h = g()),
        (f = a("li")),
        (E = a("a")),
        (E.textContent = _),
        (v = g()),
        (y = a("li")),
        (L = a("details")),
        (V = a("summary")),
        (V.textContent = C),
        (P = g()),
        (I = a("ul")),
        (X = a("li")),
        (N = a("a")),
        (N.textContent = pe),
        (ne = g()),
        (H = a("li")),
        (q = a("a")),
        (q.textContent = ce),
        (U = g()),
        (ae = a("li")),
        (D = a("a")),
        (D.textContent = se),
        (re = g()),
        (oe = a("li")),
        (z = a("a")),
        (z.textContent = Ne),
        (xe = g()),
        (A = a("li")),
        (w = a("a")),
        (w.textContent = x),
        (De = g()),
        (de = a("li")),
        (R = a("details")),
        ($ = a("summary")),
        ($.textContent = G),
        (J = g()),
        (k = a("ul")),
        (he = a("li")),
        (K = a("a")),
        (K.textContent = Ee),
        (ie = g()),
        (fe = a("li")),
        (Z = a("a")),
        (Z.textContent = Ue),
        this.h();
    },
    l(me) {
      e = s(me, "DIV", { class: !0 });
      var Me = c(e);
      n = s(Me, "DIV", { class: !0 });
      var ye = c(n);
      t = s(ye, "UL", { class: !0 });
      var Le = c(t);
      i = s(Le, "LI", {});
      var He = c(i);
      (d = s(He, "A", { href: !0, class: !0, ["data-svelte-h"]: !0 })),
        S(d) !== "svelte-5uwxw5" && (d.textContent = m),
        He.forEach(r),
        (h = b(Le)),
        (f = s(Le, "LI", {}));
      var Ie = c(f);
      (E = s(Ie, "A", { href: !0, class: !0, ["data-svelte-h"]: !0 })),
        S(E) !== "svelte-1r9hhwv" && (E.textContent = _),
        Ie.forEach(r),
        (v = b(Le)),
        (y = s(Le, "LI", {}));
      var je = c(y);
      L = s(je, "DETAILS", {});
      var T = c(L);
      (V = s(T, "SUMMARY", { class: !0, ["data-svelte-h"]: !0 })),
        S(V) !== "svelte-1ph5z9n" && (V.textContent = C),
        (P = b(T)),
        (I = s(T, "UL", {}));
      var ue = c(I);
      X = s(ue, "LI", {});
      var Pe = c(X);
      (N = s(Pe, "A", { href: !0, class: !0, ["data-svelte-h"]: !0 })),
        S(N) !== "svelte-198g0hn" && (N.textContent = pe),
        Pe.forEach(r),
        (ne = b(ue)),
        (H = s(ue, "LI", {}));
      var Re = c(H);
      (q = s(Re, "A", { href: !0, class: !0, ["data-svelte-h"]: !0 })),
        S(q) !== "svelte-1ddhlcp" && (q.textContent = ce),
        Re.forEach(r),
        (U = b(ue)),
        (ae = s(ue, "LI", {}));
      var We = c(ae);
      (D = s(We, "A", { href: !0, class: !0, ["data-svelte-h"]: !0 })),
        S(D) !== "svelte-12jt3gl" && (D.textContent = se),
        We.forEach(r),
        (re = b(ue)),
        (oe = s(ue, "LI", {}));
      var Ye = c(oe);
      (z = s(Ye, "A", { href: !0, class: !0, ["data-svelte-h"]: !0 })),
        S(z) !== "svelte-byjbxs" && (z.textContent = Ne),
        Ye.forEach(r),
        (xe = b(ue)),
        (A = s(ue, "LI", {}));
      var Fe = c(A);
      (w = s(Fe, "A", { href: !0, class: !0, ["data-svelte-h"]: !0 })),
        S(w) !== "svelte-fil5jr" && (w.textContent = x),
        Fe.forEach(r),
        ue.forEach(r),
        T.forEach(r),
        je.forEach(r),
        (De = b(Le)),
        (de = s(Le, "LI", {}));
      var Oe = c(de);
      R = s(Oe, "DETAILS", {});
      var ze = c(R);
      ($ = s(ze, "SUMMARY", { class: !0, ["data-svelte-h"]: !0 })),
        S($) !== "svelte-1rqehtk" && ($.textContent = G),
        (J = b(ze)),
        (k = s(ze, "UL", {}));
      var Ve = c(k);
      he = s(Ve, "LI", {});
      var Xe = c(he);
      (K = s(Xe, "A", { href: !0, class: !0, ["data-svelte-h"]: !0 })),
        S(K) !== "svelte-wxlx7o" && (K.textContent = Ee),
        Xe.forEach(r),
        (ie = b(Ve)),
        (fe = s(Ve, "LI", {}));
      var Y = c(fe);
      (Z = s(Y, "A", { href: !0, class: !0, ["data-svelte-h"]: !0 })),
        S(Z) !== "svelte-177sgmf" && (Z.textContent = Ue),
        Y.forEach(r),
        Ve.forEach(r),
        ze.forEach(r),
        Oe.forEach(r),
        Le.forEach(r),
        ye.forEach(r),
        Me.forEach(r),
        this.h();
    },
    h() {
      u(d, "href", "/"),
        u(d, "class", "svelte-o0yggu"),
        u(E, "href", "/#event-document"),
        u(E, "class", "svelte-o0yggu"),
        u(V, "class", "svelte-o0yggu"),
        u(N, "href", "/#event-calendar"),
        u(N, "class", "svelte-o0yggu"),
        u(q, "href", "/#event-schedule"),
        u(q, "class", "svelte-o0yggu"),
        u(D, "href", "/#event-trip"),
        u(D, "class", "svelte-o0yggu"),
        u(z, "href", "/#event-speaker"),
        u(z, "class", "svelte-o0yggu"),
        u(w, "href", "/#event-document"),
        u(w, "class", "svelte-o0yggu"),
        u($, "class", "svelte-o0yggu"),
        u(K, "href", "/projects"),
        u(K, "class", "svelte-o0yggu"),
        u(Z, "href", "/schedule"),
        u(Z, "class", "svelte-o0yggu"),
        u(t, "class", "menu w-full px-1"),
        u(
          n,
          "class",
          "sidemenu absolute left-0 top-[4rem] z-[999] h-[calc(100vh-4rem)] max-h-screen w-screen overflow-y-auto bg-base-200 shadow-xl md:w-[300px] svelte-o0yggu"
        ),
        u(e, "class", "fixed z-[999] h-screen w-screen bg-base-200 md:hidden");
    },
    m(me, Me) {
      O(me, e, Me),
        l(e, n),
        l(n, t),
        l(t, i),
        l(i, d),
        l(t, h),
        l(t, f),
        l(f, E),
        l(t, v),
        l(t, y),
        l(y, L),
        l(L, V),
        l(L, P),
        l(L, I),
        l(I, X),
        l(X, N),
        l(I, ne),
        l(I, H),
        l(H, q),
        l(I, U),
        l(I, ae),
        l(ae, D),
        l(I, re),
        l(I, oe),
        l(oe, z),
        l(I, xe),
        l(I, A),
        l(A, w),
        l(t, De),
        l(t, de),
        l(de, R),
        l(R, $),
        l(R, J),
        l(R, k),
        l(k, he),
        l(he, K),
        l(k, ie),
        l(k, fe),
        l(fe, Z),
        (ke = !0),
        ge ||
          ((Qe = [
            Q(o[3].call(null, d)),
            Q(o[3].call(null, E)),
            Q(o[3].call(null, N)),
            Q(o[3].call(null, q)),
            Q(o[3].call(null, D)),
            Q(o[3].call(null, z)),
            Q(o[3].call(null, w)),
            Q(o[3].call(null, K)),
            Q(o[3].call(null, Z)),
          ]),
          (ge = !0));
    },
    i(me) {
      ke ||
        (me &&
          qt(() => {
            ke && (B || (B = Et(e, kt, { duration: 500 }, !0)), B.run(1));
          }),
        (ke = !0));
    },
    o(me) {
      me && (B || (B = Et(e, kt, { duration: 500 }, !1)), B.run(0)), (ke = !1);
    },
    d(me) {
      me && r(e), me && B && B.end(), (ge = !1), Nt(Qe);
    },
  };
}
function al(o) {
  let e,
    n,
    t,
    i,
    d,
    m,
    h,
    f,
    E,
    _,
    v,
    y,
    L,
    V,
    C,
    P,
    I,
    X = "หน้าแรก",
    N,
    pe,
    ne,
    H,
    q = "ข้อมูลงาน",
    ce,
    U,
    ae,
    D,
    se = "กำหนดการ",
    re,
    oe,
    z,
    Ne = "ตารางกิจกรรม",
    xe,
    A,
    w,
    x = "ทัศนศึกษา",
    De,
    de,
    R,
    $ = "วิทยากร",
    G,
    J,
    k,
    he = "ดาวโหลดเอกสาร",
    K,
    Ee,
    ie,
    fe,
    Z = "โครงงาน",
    Ue,
    B,
    ke,
    ge,
    Qe = "โครงงานพร้อมรหัสโครงงาน",
    me,
    Me,
    ye,
    Le = "ลำดับการนำเสนอโครงงาน",
    He,
    Ie,
    je,
    T,
    ue,
    Pe,
    Re,
    We,
    Ye,
    Fe,
    Oe,
    ze,
    Ve,
    Xe;
  (m = new Te({ props: { icon: "mdi:menu", class: "swap-off text-2xl" } })),
    (f = new Te({ props: { icon: "mdi:close", class: "swap-on text-2xl" } })),
    (v = new Gt({ props: { class: "hidden h-full w-full md:block" } })),
    (L = new el({ props: { class: "block h-5/6 w-full md:hidden" } }));
  let Y = o[2].d > 0 && Lt(o),
    ee = (o[2].h > 0 || o[2].d > 0) && It(o),
    te = (o[2].m > 0 || o[2].h > 0 || o[2].d > 0) && At(o),
    le = (o[2].s > 0 || o[2].m > 0 || o[2].h > 0 || o[2].d > 0) && xt(o),
    Ae = !o[4] && tl(o),
    F = o[1] && St(o);
  return {
    c() {
      (e = a("nav")),
        (n = a("div")),
        (t = a("button")),
        (i = a("input")),
        (d = g()),
        be(m.$$.fragment),
        (h = g()),
        be(f.$$.fragment),
        (E = g()),
        (_ = a("a")),
        be(v.$$.fragment),
        (y = g()),
        be(L.$$.fragment),
        (V = g()),
        (C = a("ul")),
        (P = a("li")),
        (I = a("a")),
        (I.textContent = X),
        (N = g()),
        (pe = a("li")),
        (ne = a("details")),
        (H = a("summary")),
        (H.textContent = q),
        (ce = g()),
        (U = a("ul")),
        (ae = a("li")),
        (D = a("a")),
        (D.textContent = se),
        (re = g()),
        (oe = a("li")),
        (z = a("a")),
        (z.textContent = Ne),
        (xe = g()),
        (A = a("li")),
        (w = a("a")),
        (w.textContent = x),
        (De = g()),
        (de = a("li")),
        (R = a("a")),
        (R.textContent = $),
        (G = g()),
        (J = a("li")),
        (k = a("a")),
        (k.textContent = he),
        (K = g()),
        (Ee = a("li")),
        (ie = a("details")),
        (fe = a("summary")),
        (fe.textContent = Z),
        (Ue = g()),
        (B = a("ul")),
        (ke = a("li")),
        (ge = a("a")),
        (ge.textContent = Qe),
        (me = g()),
        (Me = a("li")),
        (ye = a("a")),
        (ye.textContent = Le),
        (He = g()),
        (Ie = a("div")),
        (je = a("div")),
        (T = a("a")),
        Y && Y.c(),
        (ue = g()),
        ee && ee.c(),
        (Pe = g()),
        te && te.c(),
        (Re = g()),
        le && le.c(),
        (We = g()),
        Ae && Ae.c(),
        (Fe = g()),
        F && F.c(),
        (Oe = st()),
        this.h();
    },
    l(p) {
      e = s(p, "NAV", { class: !0 });
      var W = c(e);
      n = s(W, "DIV", {});
      var Ge = c(n);
      t = s(Ge, "BUTTON", { "aria-label": !0, type: !0, class: !0 });
      var Je = c(t);
      (i = s(Je, "INPUT", { class: !0, type: !0 })),
        (d = b(Je)),
        we(m.$$.fragment, Je),
        (h = b(Je)),
        we(f.$$.fragment, Je),
        Je.forEach(r),
        (E = b(Ge)),
        (_ = s(Ge, "A", { class: !0, href: !0 }));
      var et = c(_);
      we(v.$$.fragment, et),
        (y = b(et)),
        we(L.$$.fragment, et),
        et.forEach(r),
        (V = b(Ge)),
        (C = s(Ge, "UL", { class: !0 }));
      var Ke = c(C);
      P = s(Ke, "LI", {});
      var ft = c(P);
      (I = s(ft, "A", { href: !0, ["data-svelte-h"]: !0 })),
        S(I) !== "svelte-5uwxw5" && (I.textContent = X),
        ft.forEach(r),
        (N = b(Ke)),
        (pe = s(Ke, "LI", {}));
      var ut = c(pe);
      ne = s(ut, "DETAILS", {});
      var tt = c(ne);
      (H = s(tt, "SUMMARY", { ["data-svelte-h"]: !0 })),
        S(H) !== "svelte-1ph5z9n" && (H.textContent = q),
        (ce = b(tt)),
        (U = s(tt, "UL", {}));
      var Se = c(U);
      ae = s(Se, "LI", {});
      var ct = c(ae);
      (D = s(ct, "A", { href: !0, ["data-svelte-h"]: !0 })),
        S(D) !== "svelte-198g0hn" && (D.textContent = se),
        ct.forEach(r),
        (re = b(Se)),
        (oe = s(Se, "LI", {}));
      var dt = c(oe);
      (z = s(dt, "A", { href: !0, ["data-svelte-h"]: !0 })),
        S(z) !== "svelte-3h4qm8" && (z.textContent = Ne),
        dt.forEach(r),
        (xe = b(Se)),
        (A = s(Se, "LI", {}));
      var ht = c(A);
      (w = s(ht, "A", { href: !0, ["data-svelte-h"]: !0 })),
        S(w) !== "svelte-12jt3gl" && (w.textContent = x),
        ht.forEach(r),
        (De = b(Se)),
        (de = s(Se, "LI", {}));
      var mt = c(de);
      (R = s(mt, "A", { href: !0, ["data-svelte-h"]: !0 })),
        S(R) !== "svelte-byjbxs" && (R.textContent = $),
        mt.forEach(r),
        (G = b(Se)),
        (J = s(Se, "LI", {}));
      var vt = c(J);
      (k = s(vt, "A", { href: !0, ["data-svelte-h"]: !0 })),
        S(k) !== "svelte-1lbc5e6" && (k.textContent = he),
        vt.forEach(r),
        Se.forEach(r),
        tt.forEach(r),
        ut.forEach(r),
        (K = b(Ke)),
        (Ee = s(Ke, "LI", {}));
      var _t = c(Ee);
      ie = s(_t, "DETAILS", {});
      var lt = c(ie);
      (fe = s(lt, "SUMMARY", { ["data-svelte-h"]: !0 })),
        S(fe) !== "svelte-1rqehtk" && (fe.textContent = Z),
        (Ue = b(lt)),
        (B = s(lt, "UL", {}));
      var nt = c(B);
      ke = s(nt, "LI", {});
      var pt = c(ke);
      (ge = s(pt, "A", { href: !0, ["data-svelte-h"]: !0 })),
        S(ge) !== "svelte-wxlx7o" && (ge.textContent = Qe),
        pt.forEach(r),
        (me = b(nt)),
        (Me = s(nt, "LI", {}));
      var gt = c(Me);
      (ye = s(gt, "A", { href: !0, ["data-svelte-h"]: !0 })),
        S(ye) !== "svelte-177sgmf" && (ye.textContent = Le),
        gt.forEach(r),
        nt.forEach(r),
        lt.forEach(r),
        _t.forEach(r),
        Ke.forEach(r),
        Ge.forEach(r),
        (He = b(W)),
        (Ie = s(W, "DIV", { class: !0 }));
      var at = c(Ie);
      je = s(at, "DIV", { class: !0 });
      var bt = c(je);
      T = s(bt, "A", { href: !0, class: !0 });
      var qe = c(T);
      Y && Y.l(qe),
        (ue = b(qe)),
        ee && ee.l(qe),
        (Pe = b(qe)),
        te && te.l(qe),
        (Re = b(qe)),
        le && le.l(qe),
        qe.forEach(r),
        bt.forEach(r),
        (We = b(at)),
        Ae && Ae.l(at),
        at.forEach(r),
        W.forEach(r),
        (Fe = b(p)),
        F && F.l(p),
        (Oe = st()),
        this.h();
    },
    h() {
      u(i, "class", "hidden"),
        u(i, "type", "checkbox"),
        u(t, "aria-label", "เปิด/ปิดเมนู"),
        u(t, "type", "button"),
        u(t, "class", "btn btn-square btn-ghost swap swap-rotate md:hidden"),
        u(_, "class", "btn btn-ghost text-xl normal-case"),
        u(_, "href", "/"),
        u(I, "href", "/"),
        u(D, "href", "/#event-calendar"),
        u(z, "href", "/#event-schedule"),
        u(w, "href", "/#event-trip"),
        u(R, "href", "/#event-speaker"),
        u(k, "href", "/#event-document"),
        u(ge, "href", "/projects"),
        u(ye, "href", "/schedule"),
        u(C, "class", "menu menu-horizontal hidden flex-row px-1 md:flex"),
        u(T, "href", "https://web.facebook.com/events/1148410762743328"),
        u(T, "class", "countdown text-right font-mono font-semibold"),
        u(je, "class", ""),
        u(Ie, "class", "gap-4"),
        u(
          e,
          "class",
          (Ye =
            "navbar fixed z-[1000] h-14 justify-between border-neutral " +
            (o[1] ? "bg-transparent" : "bg-base-100/70") +
            " backdrop-blur-sm")
        );
    },
    m(p, W) {
      O(p, e, W),
        l(e, n),
        l(n, t),
        l(t, i),
        (i.checked = o[1]),
        l(t, d),
        $e(m, t, null),
        l(t, h),
        $e(f, t, null),
        l(n, E),
        l(n, _),
        $e(v, _, null),
        l(_, y),
        $e(L, _, null),
        l(n, V),
        l(n, C),
        l(C, P),
        l(P, I),
        l(C, N),
        l(C, pe),
        l(pe, ne),
        l(ne, H),
        l(ne, ce),
        l(ne, U),
        l(U, ae),
        l(ae, D),
        l(U, re),
        l(U, oe),
        l(oe, z),
        l(U, xe),
        l(U, A),
        l(A, w),
        l(U, De),
        l(U, de),
        l(de, R),
        l(U, G),
        l(U, J),
        l(J, k),
        l(C, K),
        l(C, Ee),
        l(Ee, ie),
        l(ie, fe),
        l(ie, Ue),
        l(ie, B),
        l(B, ke),
        l(ke, ge),
        l(B, me),
        l(B, Me),
        l(Me, ye),
        l(e, He),
        l(e, Ie),
        l(Ie, je),
        l(je, T),
        Y && Y.m(T, null),
        l(T, ue),
        ee && ee.m(T, null),
        l(T, Pe),
        te && te.m(T, null),
        l(T, Re),
        le && le.m(T, null),
        l(Ie, We),
        Ae && Ae.m(Ie, null),
        O(p, Fe, W),
        F && F.m(p, W),
        O(p, Oe, W),
        (ze = !0),
        Ve ||
          ((Xe = [
            it(i, "change", o[6]),
            it(t, "click", o[7]),
            Q(o[3].call(null, I)),
            Q(o[3].call(null, D)),
            Q(o[3].call(null, z)),
            Q(o[3].call(null, w)),
            Q(o[3].call(null, R)),
            Q(o[3].call(null, k)),
            Q(o[3].call(null, ge)),
            Q(o[3].call(null, ye)),
          ]),
          (Ve = !0));
    },
    p(p, [W]) {
      W & 2 && (i.checked = p[1]),
        p[2].d > 0
          ? Y
            ? Y.p(p, W)
            : ((Y = Lt(p)), Y.c(), Y.m(T, ue))
          : Y && (Y.d(1), (Y = null)),
        p[2].h > 0 || p[2].d > 0
          ? ee
            ? ee.p(p, W)
            : ((ee = It(p)), ee.c(), ee.m(T, Pe))
          : ee && (ee.d(1), (ee = null)),
        p[2].m > 0 || p[2].h > 0 || p[2].d > 0
          ? te
            ? te.p(p, W)
            : ((te = At(p)), te.c(), te.m(T, Re))
          : te && (te.d(1), (te = null)),
        p[2].s > 0 || p[2].m > 0 || p[2].h > 0 || p[2].d > 0
          ? le
            ? le.p(p, W)
            : ((le = xt(p)), le.c(), le.m(T, null))
          : le && (le.d(1), (le = null)),
        p[4] || Ae.p(p, W),
        (!ze ||
          (W & 2 &&
            Ye !==
              (Ye =
                "navbar fixed z-[1000] h-14 justify-between border-neutral " +
                (p[1] ? "bg-transparent" : "bg-base-100/70") +
                " backdrop-blur-sm"))) &&
          u(e, "class", Ye),
        p[1]
          ? F
            ? W & 2 && M(F, 1)
            : ((F = St(p)), F.c(), M(F, 1), F.m(Oe.parentNode, Oe))
          : F &&
            (rt(),
            j(F, 1, 1, () => {
              F = null;
            }),
            ot());
    },
    i(p) {
      ze ||
        (M(m.$$.fragment, p),
        M(f.$$.fragment, p),
        M(v.$$.fragment, p),
        M(L.$$.fragment, p),
        M(Ae),
        M(F),
        (ze = !0));
    },
    o(p) {
      j(m.$$.fragment, p),
        j(f.$$.fragment, p),
        j(v.$$.fragment, p),
        j(L.$$.fragment, p),
        j(Ae),
        j(F),
        (ze = !1);
    },
    d(p) {
      p && (r(e), r(Fe), r(Oe)),
        Ce(m),
        Ce(f),
        Ce(v),
        Ce(L),
        Y && Y.d(),
        ee && ee.d(),
        te && te.d(),
        le && le.d(),
        Ae && Ae.d(),
        F && F.d(p),
        (Ve = !1),
        Nt(Xe);
    },
  };
}
function sl(o, e, n) {
  let t;
  Ot(o, Pt, (C) => n(10, (t = C))), Qt();
  function i(C) {
    return (
      C == null ||
        C.addEventListener("click", () => {
          n(1, (h = !1));
        }),
      {
        destroy() {
          n(1, (h = !1));
        },
      }
    );
  }
  Vt(() => {
    window.addEventListener("scroll", () => {
      f = window.scrollY > window.innerHeight * 2;
    });
  });
  let { data: d = t.data } = e,
    m = !Jt.openForLogin,
    h,
    f;
  d.session;
  const E = async () => {
    let C = await d.supabase.auth.signOut();
    return C.error && Kt({ message: C.error.message, type: "error" }), Rt("/");
  };
  let _ = { d: 0, h: 0, m: 0, s: 0 };
  const v = new Date("2023-09-04T08:00:00+07:00").getTime();
  function y() {
    const P = v - new Date().getTime();
    n(2, (_.d = Math.floor(P / (1e3 * 60 * 60 * 24))), _),
      n(2, (_.h = Math.floor((P % (1e3 * 60 * 60 * 24)) / (1e3 * 60 * 60))), _),
      n(2, (_.m = Math.floor((P % (1e3 * 60 * 60)) / (1e3 * 60))), _),
      n(2, (_.s = Math.floor((P % (1e3 * 60)) / 1e3)), _);
  }
  y(), setInterval(y, 1e3);
  function L() {
    (h = this.checked), n(1, h);
  }
  const V = () => {
    n(1, (h = !h));
  };
  return (
    (o.$$set = (C) => {
      "data" in C && n(0, (d = C.data));
    }),
    [d, h, _, i, m, E, L, V]
  );
}
class gl extends Ut {
  constructor(e) {
    super(), jt(this, e, sl, al, Tt, { data: 0 });
  }
}
export { gl as N };
//# sourceMappingURL=Navbar.935098d0.js.map
