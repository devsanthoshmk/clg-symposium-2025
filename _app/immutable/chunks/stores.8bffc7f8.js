import { s as r } from "./singletons.9c14e83c.js";
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
      s = new Error().stack;
    s &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[s] = "c5236976-7243-4d28-bc30-f53dd13419c9"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-c5236976-7243-4d28-bc30-f53dd13419c9"));
  } catch {}
})();
const t = () => {
    const e = r;
    return {
      page: { subscribe: e.page.subscribe },
      navigating: { subscribe: e.navigating.subscribe },
      updated: e.updated,
    };
  },
  b = {
    subscribe(e) {
      return t().page.subscribe(e);
    },
  },
  d = {
    subscribe(e) {
      return t().navigating.subscribe(e);
    },
  };
export { d as n, b as p };
//# sourceMappingURL=stores.8bffc7f8.js.map
