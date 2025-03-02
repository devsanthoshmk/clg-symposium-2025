import { t as k, b as A } from "./index.08749574.js";
import { D as E } from "./scheduler.b44937bc.js";
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
      f = new Error().stack;
    f &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[f] = "d23ee070-0846-47ac-b926-57823c8fdb80"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-d23ee070-0846-47ac-b926-57823c8fdb80"));
  } catch {}
})();
function B(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function j(e, f) {
  A(e, 1, 1, () => {
    f.delete(e.key);
  });
}
function C(e, f) {
  e.f(), j(e, f);
}
function F(e, f, b, I, v, p, o, M, _, x, a, S) {
  let d = e.length,
    c = p.length,
    i = d;
  const w = {};
  for (; i--; ) w[e[i].key] = i;
  const u = [],
    h = new Map(),
    y = new Map(),
    m = [];
  for (i = c; i--; ) {
    const n = S(v, p, i),
      t = b(n);
    let s = o.get(t);
    s ? I && m.push(() => s.p(n, f)) : ((s = x(t, n)), s.c()),
      h.set(t, (u[i] = s)),
      t in w && y.set(t, Math.abs(i - w[t]));
  }
  const r = new Set(),
    D = new Set();
  function g(n) {
    k(n, 1), n.m(M, a), o.set(n.key, n), (a = n.first), c--;
  }
  for (; d && c; ) {
    const n = u[c - 1],
      t = e[d - 1],
      s = n.key,
      l = t.key;
    n === t
      ? ((a = n.first), d--, c--)
      : h.has(l)
      ? !o.has(s) || r.has(s)
        ? g(n)
        : D.has(l)
        ? d--
        : y.get(s) > y.get(l)
        ? (D.add(s), g(n))
        : (r.add(l), d--)
      : (_(t, o), d--);
  }
  for (; d--; ) {
    const n = e[d];
    h.has(n.key) || _(n, o);
  }
  for (; c; ) g(u[c - 1]);
  return E(m), u;
}
export { B as e, C as f, F as u };
//# sourceMappingURL=each.3cf95a54.js.map
