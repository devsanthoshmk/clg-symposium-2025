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
      c = new Error().stack;
    c &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[c] = "ee802234-8887-49d9-9003-3ccf1bf76014"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-ee802234-8887-49d9-9003-3ccf1bf76014"));
  } catch {}
})();
function r(e, c) {
  const t = {},
    s = {},
    d = { $$scope: 1 };
  let i = e.length;
  for (; i--; ) {
    const o = e[i],
      f = c[i];
    if (f) {
      for (const n in o) n in f || (s[n] = 1);
      for (const n in f) d[n] || ((t[n] = f[n]), (d[n] = 1));
      e[i] = f;
    } else for (const n in o) d[n] = 1;
  }
  for (const o in s) o in t || (t[o] = void 0);
  return t;
}
function u(e) {
  return typeof e == "object" && e !== null ? e : {};
}
export { u as a, r as g };
//# sourceMappingURL=spread.5cc747ed.js.map
