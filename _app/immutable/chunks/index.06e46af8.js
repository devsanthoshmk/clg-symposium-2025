import { t as o } from "./utils.7de8c714.js";
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
      (t._sentryDebugIds[n] = "efc922c5-502a-41cf-8213-b6668f257f0e"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-efc922c5-502a-41cf-8213-b6668f257f0e"));
  } catch {}
})();
function a(t, n, r, f) {
  const s = (e) => n(e);
  function d() {
    const e = r ?? window;
    e && e.addEventListener && e && e.addEventListener(t, s, f);
  }
  function i() {
    const e = r ?? window;
    e && e.addEventListener && e.removeEventListener(t, s, f);
  }
  return d(), o(i), { start: d, stop: i };
}
export { a as e };
//# sourceMappingURL=index.06e46af8.js.map
