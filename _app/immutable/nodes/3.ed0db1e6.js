import {
  s as B,
  o as F,
  e as k,
  a as S,
  r as I,
  h as R,
  c as v,
  d,
  b as w,
  f as j,
  i as b,
  j as z,
  k as g,
  u as L,
  p as U,
  q as V,
  m as G,
  v as J,
} from "../chunks/scheduler.b44937bc.js";
import {
  S as K,
  i as O,
  t as p,
  b as h,
  e as C,
  c as P,
  a as T,
  m as q,
  d as A,
  g as N,
} from "../chunks/index.08749574.js";
import { N as Q } from "../chunks/Navbar.935098d0.js";
import { F as W } from "../chunks/Footer.2a10735b.js";
import { p as X } from "../chunks/stores.8bffc7f8.js";
import { n as D } from "../chunks/notify.112187cd.js";
import { t as E } from "../chunks/langUtils.50e57082.js";
(function () {
  try {
    var n =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      t = new Error().stack;
    t &&
      ((n._sentryDebugIds = n._sentryDebugIds || {}),
      (n._sentryDebugIds[t] = "256febaa-ad0e-44a6-949f-a132fdca4ce4"),
      (n._sentryDebugIdIdentifier =
        "sentry-dbid-256febaa-ad0e-44a6-949f-a132fdca4ce4"));
  } catch {}
})();
function H(n) {
  let t, o;
  return (
    (t = new Q({ props: { data: n[0] } })),
    {
      c() {
        P(t.$$.fragment);
      },
      l(a) {
        T(t.$$.fragment, a);
      },
      m(a, f) {
        q(t, a, f), (o = !0);
      },
      p(a, f) {
        const c = {};
        f & 1 && (c.data = a[0]), t.$set(c);
      },
      i(a) {
        o || (p(t.$$.fragment, a), (o = !0));
      },
      o(a) {
        h(t.$$.fragment, a), (o = !1);
      },
      d(a) {
        A(t, a);
      },
    }
  );
}
function M(n) {
  let t, o;
  return (
    (t = new W({})),
    {
      c() {
        P(t.$$.fragment);
      },
      l(a) {
        T(t.$$.fragment, a);
      },
      m(a, f) {
        q(t, a, f), (o = !0);
      },
      i(a) {
        o || (p(t.$$.fragment, a), (o = !0));
      },
      o(a) {
        h(t.$$.fragment, a), (o = !1);
      },
      d(a) {
        A(t, a);
      },
    }
  );
}
function Y(n) {
  let t,
    o,
    a,
    f,
    c,
    _,
    u,
    r,
    s = !n[1] && H(n);
  const y = n[4].default,
    m = F(y, n, n[3], null);
  let i = !n[1] && M();
  return {
    c() {
      (t = k("meta")),
        (o = S()),
        s && s.c(),
        (a = S()),
        (f = k("main")),
        m && m.c(),
        (_ = S()),
        i && i.c(),
        (u = I()),
        this.h();
    },
    l(e) {
      const l = R("svelte-ai4z9m", document.head);
      (t = v(l, "META", { name: !0, content: !0 })),
        l.forEach(d),
        (o = w(e)),
        s && s.l(e),
        (a = w(e)),
        (f = v(e, "MAIN", { class: !0 }));
      var $ = j(f);
      m && m.l($), $.forEach(d), (_ = w(e)), i && i.l(e), (u = I()), this.h();
    },
    h() {
      b(t, "name", "keywords"),
        b(
          t,
          "content",
          "PCSHS, PCSHSBR, Science Symposium, Symposium 2023, Thailand, Princess Chulabhorn Science High School, Princess Chulabhorn Science High School Buriram"
        ),
        b(f, "class", (c = n[2].url.pathname == "/" || n[1] ? "" : "pt-16"));
    },
    m(e, l) {
      z(document.head, t),
        g(e, o, l),
        s && s.m(e, l),
        g(e, a, l),
        g(e, f, l),
        m && m.m(f, null),
        g(e, _, l),
        i && i.m(e, l),
        g(e, u, l),
        (r = !0);
    },
    p(e, [l]) {
      e[1]
        ? s &&
          (N(),
          h(s, 1, 1, () => {
            s = null;
          }),
          C())
        : s
        ? (s.p(e, l), l & 2 && p(s, 1))
        : ((s = H(e)), s.c(), p(s, 1), s.m(a.parentNode, a)),
        m &&
          m.p &&
          (!r || l & 8) &&
          L(m, y, e, e[3], r ? V(y, e[3], l, null) : U(e[3]), null),
        (!r ||
          (l & 6 &&
            c !== (c = e[2].url.pathname == "/" || e[1] ? "" : "pt-16"))) &&
          b(f, "class", c),
        e[1]
          ? i &&
            (N(),
            h(i, 1, 1, () => {
              i = null;
            }),
            C())
          : i
          ? l & 2 && p(i, 1)
          : ((i = M()), i.c(), p(i, 1), i.m(u.parentNode, u));
    },
    i(e) {
      r || (p(s), p(m, e), p(i), (r = !0));
    },
    o(e) {
      h(s), h(m, e), h(i), (r = !1);
    },
    d(e) {
      e && (d(o), d(a), d(f), d(_), d(u)),
        d(t),
        s && s.d(e),
        m && m.d(e),
        i && i.d(e);
    },
  };
}
function Z(n, t, o) {
  let a;
  G(n, X, (r) => o(2, (a = r)));
  let { $$slots: f = {}, $$scope: c } = t,
    { data: _ } = t,
    u = !1;
  return (
    J(() => {
      if (
        (o(1, (u = localStorage.getItem("standtv") === "1")),
        !window.location.hash)
      )
        return;
      const r = new Map(
        window.location.hash
          .split("#")[1]
          .split("&")
          .map((s) => s.split("=").map(decodeURIComponent))
      );
      r.get("message") &&
        D({ message: E(r.get("message")) || "", type: "default" }),
        r.get("error") &&
          D({ message: E(r.get("error_description")) || "", type: "error" });
    }),
    (n.$$set = (r) => {
      "data" in r && o(0, (_ = r.data)),
        "$$scope" in r && o(3, (c = r.$$scope));
    }),
    [_, u, a, c, f]
  );
}
class re extends K {
  constructor(t) {
    super(), O(this, t, Z, Y, B, { data: 0 });
  }
}
export { re as component };
//# sourceMappingURL=3.ed0db1e6.js.map
