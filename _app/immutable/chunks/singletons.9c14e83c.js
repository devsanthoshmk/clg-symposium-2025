import { w as u } from "./index.6e4317f1.js";
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
      t = new Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "5b54cf63-8f64-49e3-8842-0524aeb84f95"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-5b54cf63-8f64-49e3-8842-0524aeb84f95"));
  } catch {}
})();
var p;
const y =
  ((p = globalThis.__sveltekit_18t6c8s) == null ? void 0 : p.base) ?? "";
var b;
const k =
    ((b = globalThis.__sveltekit_18t6c8s) == null ? void 0 : b.assets) ?? y,
  w = "1702515953614",
  A = "sveltekit:snapshot",
  R = "sveltekit:scroll",
  T = "sveltekit:index",
  f = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1 };
function S(e) {
  let t = e.baseURI;
  if (!t) {
    const n = e.getElementsByTagName("base");
    t = n.length ? n[0].href : e.URL;
  }
  return t;
}
function x() {
  return { x: pageXOffset, y: pageYOffset };
}
function c(e, t) {
  return e.getAttribute(`data-sveltekit-${t}`);
}
const d = { ...f, "": f.hover };
function g(e) {
  let t = e.assignedSlot ?? e.parentNode;
  return (t == null ? void 0 : t.nodeType) === 11 && (t = t.host), t;
}
function D(e, t) {
  for (; e && e !== t; ) {
    if (e.nodeName.toUpperCase() === "A" && e.hasAttribute("href")) return e;
    e = g(e);
  }
}
function O(e, t) {
  let n;
  try {
    n = new URL(
      e instanceof SVGAElement ? e.href.baseVal : e.href,
      document.baseURI
    );
  } catch {}
  const o = e instanceof SVGAElement ? e.target.baseVal : e.target,
    r =
      !n ||
      !!o ||
      m(n, t) ||
      (e.getAttribute("rel") || "").split(/\s+/).includes("external"),
    l =
      (n == null ? void 0 : n.origin) === location.origin &&
      e.hasAttribute("download");
  return { url: n, external: r, target: o, download: l };
}
function U(e) {
  let t = null,
    n = null,
    o = null,
    r = null,
    l = null,
    a = null,
    s = e;
  for (; s && s !== document.documentElement; )
    o === null && (o = c(s, "preload-code")),
      r === null && (r = c(s, "preload-data")),
      t === null && (t = c(s, "keepfocus")),
      n === null && (n = c(s, "noscroll")),
      l === null && (l = c(s, "reload")),
      a === null && (a = c(s, "replacestate")),
      (s = g(s));
  function i(v) {
    switch (v) {
      case "":
      case "true":
        return !0;
      case "off":
      case "false":
        return !1;
      default:
        return null;
    }
  }
  return {
    preload_code: d[o ?? "off"],
    preload_data: d[r ?? "off"],
    keep_focus: i(t),
    noscroll: i(n),
    reload: i(l),
    replace_state: i(a),
  };
}
function _(e) {
  const t = u(e);
  let n = !0;
  function o() {
    (n = !0), t.update((a) => a);
  }
  function r(a) {
    (n = !1), t.set(a);
  }
  function l(a) {
    let s;
    return t.subscribe((i) => {
      (s === void 0 || (n && i !== s)) && a((s = i));
    });
  }
  return { notify: o, set: r, subscribe: l };
}
function I() {
  const { set: e, subscribe: t } = u(!1);
  let n;
  async function o() {
    clearTimeout(n);
    try {
      const r = await fetch(`${k}/_app/version.json`, {
        headers: { pragma: "no-cache", "cache-control": "no-cache" },
      });
      if (!r.ok) return !1;
      const a = (await r.json()).version !== w;
      return a && (e(!0), clearTimeout(n)), a;
    } catch {
      return !1;
    }
  }
  return { subscribe: t, check: o };
}
function m(e, t) {
  return e.origin !== location.origin || !e.pathname.startsWith(t);
}
let h;
function L(e) {
  h = e.client;
}
function N(e) {
  return (...t) => h[e](...t);
}
const P = { url: _({}), page: _({}), navigating: u(null), updated: I() };
export {
  T as I,
  f as P,
  R as S,
  A as a,
  O as b,
  N as c,
  U as d,
  x as e,
  D as f,
  S as g,
  y as h,
  m as i,
  L as j,
  h as k,
  P as s,
};
//# sourceMappingURL=singletons.9c14e83c.js.map
