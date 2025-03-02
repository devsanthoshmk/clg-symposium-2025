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
      n = new Error().stack;
    n &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[n] = "af41f09b-00f8-42d4-b7b6-b70069c893ce"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-af41f09b-00f8-42d4-b7b6-b70069c893ce"));
  } catch {}
})();
const u = "modulepreload",
  b = function (t, n) {
    return new URL(t, n).href;
  },
  a = {},
  y = function (n, o, c) {
    if (!o || o.length === 0) return n();
    const f = document.getElementsByTagName("link");
    return Promise.all(
      o.map((e) => {
        if (((e = b(e, c)), e in a)) return;
        a[e] = !0;
        const s = e.endsWith(".css"),
          d = s ? '[rel="stylesheet"]' : "";
        if (!!c)
          for (let i = f.length - 1; i >= 0; i--) {
            const l = f[i];
            if (l.href === e && (!s || l.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${e}"]${d}`)) return;
        const r = document.createElement("link");
        if (
          ((r.rel = s ? "stylesheet" : u),
          s || ((r.as = "script"), (r.crossOrigin = "")),
          (r.href = e),
          document.head.appendChild(r),
          s)
        )
          return new Promise((i, l) => {
            r.addEventListener("load", i),
              r.addEventListener("error", () =>
                l(new Error(`Unable to preload CSS for ${e}`))
              );
          });
      })
    ).then(() => n());
  };
export { y as _ };
//# sourceMappingURL=preload-helper.6d58dae5.js.map
