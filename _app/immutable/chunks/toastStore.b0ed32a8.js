import { w as y } from "./index.6e4317f1.js";
import "./index.08749574.js";
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
      a = new Error().stack;
    a &&
      ((o._sentryDebugIds = o._sentryDebugIds || {}),
      (o._sentryDebugIds[a] = "42bcbb31-f266-4934-9725-bd1ac490b954"),
      (o._sentryDebugIdIdentifier =
        "sentry-dbid-42bcbb31-f266-4934-9725-bd1ac490b954"));
  } catch {}
})();
const g = {
  duration: 4e3,
  initial: 1,
  next: 0,
  pausable: !1,
  dismissable: !0,
  reversed: !1,
  intro: { x: 256 },
};
function m() {
  const { subscribe: o, update: a } = y([]),
    i = {};
  let c = 0;
  function u(t) {
    return t instanceof Object;
  }
  function d(t = "default", n = {}) {
    return (i[t] = n), i;
  }
  function b(t, n) {
    const r = { target: "default", ...(u(t) ? t : { ...n, msg: t }) },
      e = i[r.target] || {},
      s = {
        ...g,
        ...e,
        ...r,
        theme: { ...e.theme, ...r.theme },
        classes: [...(e.classes || []), ...(r.classes || [])],
        id: ++c,
      };
    return a((f) => (s.reversed ? [...f, s] : [s, ...f])), c;
  }
  function l(t) {
    a((n) => {
      if (!n.length || t === 0) return [];
      if (typeof t == "function") return n.filter((e) => t(e));
      if (u(t)) return n.filter((e) => e.target !== t.target);
      const r = t || Math.max(...n.map((e) => e.id));
      return n.filter((e) => e.id !== r);
    });
  }
  function p(t, n) {
    const r = u(t) ? t : { ...n, id: t };
    a((e) => {
      const s = e.findIndex((f) => f.id === r.id);
      return s > -1 && (e[s] = { ...e[s], ...r }), e;
    });
  }
  return { subscribe: o, push: b, pop: l, set: p, _init: d };
}
const x = m();
export { x as t };
//# sourceMappingURL=toastStore.b0ed32a8.js.map
