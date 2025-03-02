(function () {
  try {
    var a =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      f = new Error().stack;
    f &&
      ((a._sentryDebugIds = a._sentryDebugIds || {}),
      (a._sentryDebugIds[f] = "5ea816f8-306e-4a7e-8d51-95c1070a4174"),
      (a._sentryDebugIdIdentifier =
        "sentry-dbid-5ea816f8-306e-4a7e-8d51-95c1070a4174"));
  } catch {}
})();
const I = -1,
  g = -2,
  w = -3,
  p = -4,
  E = -5,
  h = -6;
function k(a, f) {
  return N(JSON.parse(a), f);
}
function N(a, f) {
  if (typeof a == "number") return s(a, !0);
  if (!Array.isArray(a) || a.length === 0) throw new Error("Invalid input");
  const l = a,
    n = Array(l.length);
  function s(e, b = !1) {
    if (e === I) return;
    if (e === w) return NaN;
    if (e === p) return 1 / 0;
    if (e === E) return -1 / 0;
    if (e === h) return -0;
    if (b) throw new Error("Invalid input");
    if (e in n) return n[e];
    const t = l[e];
    if (!t || typeof t != "object") n[e] = t;
    else if (Array.isArray(t))
      if (typeof t[0] == "string") {
        const c = t[0],
          o = f == null ? void 0 : f[c];
        if (o) return (n[e] = o(s(t[1])));
        switch (c) {
          case "Date":
            n[e] = new Date(t[1]);
            break;
          case "Set":
            const u = new Set();
            n[e] = u;
            for (let r = 1; r < t.length; r += 1) u.add(s(t[r]));
            break;
          case "Map":
            const i = new Map();
            n[e] = i;
            for (let r = 1; r < t.length; r += 2) i.set(s(t[r]), s(t[r + 1]));
            break;
          case "RegExp":
            n[e] = new RegExp(t[1], t[2]);
            break;
          case "Object":
            n[e] = Object(t[1]);
            break;
          case "BigInt":
            n[e] = BigInt(t[1]);
            break;
          case "null":
            const y = Object.create(null);
            n[e] = y;
            for (let r = 1; r < t.length; r += 2) y[t[r]] = s(t[r + 1]);
            break;
          default:
            throw new Error(`Unknown type ${c}`);
        }
      } else {
        const c = new Array(t.length);
        n[e] = c;
        for (let o = 0; o < t.length; o += 1) {
          const u = t[o];
          u !== g && (c[o] = s(u));
        }
      }
    else {
      const c = {};
      n[e] = c;
      for (const o in t) {
        const u = t[o];
        c[o] = s(u);
      }
    }
    return n[e];
  }
  return s(0);
}
export { g as H, w as N, p as P, I as U, E as a, h as b, k as p, N as u };
//# sourceMappingURL=parse.82a1be7b.js.map
