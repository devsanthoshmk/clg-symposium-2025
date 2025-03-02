import { c as e } from "./singletons.9c14e83c.js";
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
      t = new Error().stack;
    t &&
      ((a._sentryDebugIds = a._sentryDebugIds || {}),
      (a._sentryDebugIds[t] = "9d0910ed-f95e-40a4-9db4-c128bc895d2a"),
      (a._sentryDebugIdIdentifier =
        "sentry-dbid-9d0910ed-f95e-40a4-9db4-c128bc895d2a"));
  } catch {}
})();
const i = e("goto"),
  o = e("invalidate"),
  s = e("invalidate_all"),
  r = e("before_navigate"),
  f = e("after_navigate");
export { f as a, r as b, o as c, i as g, s as i };
//# sourceMappingURL=navigation.348d0091.js.map
