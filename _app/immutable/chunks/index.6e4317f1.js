import { n as a, L as h, D, s as I, M as m } from "./scheduler.b44937bc.js";
(function () {
  try {
    var e =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      n = new Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = "17825779-6593-4487-8f44-d9f5333b9338"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-17825779-6593-4487-8f44-d9f5333b9338"));
  } catch {}
})();
const c = [];
function q(e, n) {
  return { subscribe: x(e, n).subscribe };
}
function x(e, n = a) {
  let r;
  const o = new Set();
  function u(t) {
    if (I(e, t) && ((e = t), r)) {
      const i = !c.length;
      for (const s of o) s[1](), c.push(s, e);
      if (i) {
        for (let s = 0; s < c.length; s += 2) c[s][0](c[s + 1]);
        c.length = 0;
      }
    }
  }
  function b(t) {
    u(t(e));
  }
  function d(t, i = a) {
    const s = [t, i];
    return (
      o.add(s),
      o.size === 1 && (r = n(u, b) || a),
      t(e),
      () => {
        o.delete(s), o.size === 0 && r && (r(), (r = null));
      }
    );
  }
  return { set: u, update: b, subscribe: d };
}
function A(e, n, r) {
  const o = !Array.isArray(e),
    u = o ? [e] : e;
  if (!u.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const b = n.length < 2;
  return q(r, (d, t) => {
    let i = !1;
    const s = [];
    let l = 0,
      p = a;
    const g = () => {
        if (l) return;
        p();
        const f = n(o ? s[0] : s, d, t);
        b ? d(f) : (p = m(f) ? f : a);
      },
      _ = u.map((f, y) =>
        h(
          f,
          (w) => {
            (s[y] = w), (l &= ~(1 << y)), i && g();
          },
          () => {
            l |= 1 << y;
          }
        )
      );
    return (
      (i = !0),
      g(),
      function () {
        D(_), p(), (i = !1);
      }
    );
  });
}
export { A as d, q as r, x as w };
//# sourceMappingURL=index.6e4317f1.js.map
