import { _ as R } from "../chunks/preload-helper.6d58dae5.js";
import { b as Na } from "../chunks/public.4926c498.js";
import { p as Da, n as Ia } from "../chunks/stores.8bffc7f8.js";
import {
  S as Aa,
  i as xa,
  b as j,
  e as kt,
  t as W,
  g as Nt,
  c as at,
  a as Qt,
  m as ot,
  d as ct,
} from "../chunks/index.08749574.js";
import {
  s as Oa,
  a as Ca,
  r as q,
  b as Ua,
  k as ht,
  d as ut,
  ak as La,
  v as Ba,
  e as Ma,
  c as Pa,
  f as za,
  i as $n,
  a1 as Dt,
  t as Ga,
  g as Fa,
  l as Ya,
  y as Wt,
  aj as lt,
} from "../chunks/scheduler.b44937bc.js";
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
      (e._sentryDebugIds[t] = "5ff51573-7b8d-4f98-8f7c-ab56adf1462e"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-5ff51573-7b8d-4f98-8f7c-ab56adf1462e"));
  } catch {}
})();
const ts = Object.prototype.toString;
function es(e) {
  switch (ts.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      return !0;
    default:
      return $t(e, Error);
  }
}
function be(e, t) {
  return ts.call(e) === `[object ${t}]`;
}
function Ri(e) {
  return be(e, "ErrorEvent");
}
function Qi(e) {
  return be(e, "DOMError");
}
function $a(e) {
  return be(e, "DOMException");
}
function Yt(e) {
  return be(e, "String");
}
function ns(e) {
  return e === null || (typeof e != "object" && typeof e != "function");
}
function le(e) {
  return be(e, "Object");
}
function Nn(e) {
  return typeof Event < "u" && $t(e, Event);
}
function Ha(e) {
  return typeof Element < "u" && $t(e, Element);
}
function ja(e) {
  return be(e, "RegExp");
}
function ki(e) {
  return !!(e && e.then && typeof e.then == "function");
}
function Wa(e) {
  return (
    le(e) &&
    "nativeEvent" in e &&
    "preventDefault" in e &&
    "stopPropagation" in e
  );
}
function is(e) {
  return typeof e == "number" && e !== e;
}
function $t(e, t) {
  try {
    return e instanceof t;
  } catch {
    return !1;
  }
}
function Xe(e) {
  return e && e.Math == Math ? e : void 0;
}
const st =
  (typeof globalThis == "object" && Xe(globalThis)) ||
  (typeof window == "object" && Xe(window)) ||
  (typeof self == "object" && Xe(self)) ||
  (typeof global == "object" && Xe(global)) ||
  (function () {
    return this;
  })() ||
  {};
function We() {
  return st;
}
function Ni(e, t, n) {
  const i = n || st,
    r = (i.__SENTRY__ = i.__SENTRY__ || {});
  return r[e] || (r[e] = t());
}
const fn = We(),
  qa = 80;
function Ht(e, t = {}) {
  try {
    let n = e;
    const i = 5,
      r = [];
    let a = 0,
      s = 0;
    const o = " > ",
      c = o.length;
    let u;
    const l = Array.isArray(t) ? t : t.keyAttrs,
      d = (!Array.isArray(t) && t.maxStringLength) || qa;
    for (
      ;
      n &&
      a++ < i &&
      ((u = Va(n, l)),
      !(u === "html" || (a > 1 && s + r.length * c + u.length >= d)));

    )
      r.push(u), (s += u.length), (n = n.parentNode);
    return r.reverse().join(o);
  } catch {
    return "<unknown>";
  }
}
function Va(e, t) {
  const n = e,
    i = [];
  let r, a, s, o, c;
  if (!n || !n.tagName) return "";
  i.push(n.tagName.toLowerCase());
  const u =
    t && t.length
      ? t.filter((d) => n.getAttribute(d)).map((d) => [d, n.getAttribute(d)])
      : null;
  if (u && u.length)
    u.forEach((d) => {
      i.push(`[${d[0]}="${d[1]}"]`);
    });
  else if ((n.id && i.push(`#${n.id}`), (r = n.className), r && Yt(r)))
    for (a = r.split(/\s+/), c = 0; c < a.length; c++) i.push(`.${a[c]}`);
  const l = ["aria-label", "type", "name", "title", "alt"];
  for (c = 0; c < l.length; c++)
    (s = l[c]), (o = n.getAttribute(s)), o && i.push(`[${s}="${o}"]`);
  return i.join("");
}
function Za() {
  try {
    return fn.document.location.href;
  } catch {
    return "";
  }
}
function rs(e) {
  return fn.document && fn.document.querySelector
    ? fn.document.querySelector(e)
    : null;
}
const Ka = "Sentry Logger ",
  gn = ["debug", "info", "warn", "error", "log", "assert", "trace"];
function ss(e) {
  if (!("console" in st)) return e();
  const t = st.console,
    n = {};
  gn.forEach((i) => {
    const r = t[i] && t[i].__sentry_original__;
    i in t && r && ((n[i] = t[i]), (t[i] = r));
  });
  try {
    return e();
  } finally {
    Object.keys(n).forEach((i) => {
      t[i] = n[i];
    });
  }
}
function tr() {
  let e = !1;
  const t = {
    enable: () => {
      e = !0;
    },
    disable: () => {
      e = !1;
    },
  };
  return (
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
      ? gn.forEach((n) => {
          t[n] = (...i) => {
            e &&
              ss(() => {
                st.console[n](`${Ka}[${n}]:`, ...i);
              });
          };
        })
      : gn.forEach((n) => {
          t[n] = () => {};
        }),
    t
  );
}
let _;
typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
  ? (_ = Ni("logger", tr))
  : (_ = tr());
const Xa = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function Ja(e) {
  return e === "http" || e === "https";
}
function Dn(e, t = !1) {
  const {
    host: n,
    path: i,
    pass: r,
    port: a,
    projectId: s,
    protocol: o,
    publicKey: c,
  } = e;
  return `${o}://${c}${t && r ? `:${r}` : ""}@${n}${a ? `:${a}` : ""}/${
    i && `${i}/`
  }${s}`;
}
function Qa(e) {
  const t = Xa.exec(e);
  if (!t) {
    console.error(`Invalid Sentry Dsn: ${e}`);
    return;
  }
  const [n, i, r = "", a, s = "", o] = t.slice(1);
  let c = "",
    u = o;
  const l = u.split("/");
  if ((l.length > 1 && ((c = l.slice(0, -1).join("/")), (u = l.pop())), u)) {
    const d = u.match(/^\d+/);
    d && (u = d[0]);
  }
  return as({
    host: a,
    pass: r,
    path: c,
    projectId: u,
    port: s,
    protocol: n,
    publicKey: i,
  });
}
function as(e) {
  return {
    protocol: e.protocol,
    publicKey: e.publicKey || "",
    pass: e.pass || "",
    host: e.host,
    port: e.port || "",
    path: e.path || "",
    projectId: e.projectId,
  };
}
function to(e) {
  if (!(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__)) return !0;
  const { port: t, projectId: n, protocol: i } = e;
  return ["protocol", "publicKey", "host", "projectId"].find((s) =>
    e[s] ? !1 : (_.error(`Invalid Sentry Dsn: ${s} missing`), !0)
  )
    ? !1
    : n.match(/^\d+$/)
    ? Ja(i)
      ? t && isNaN(parseInt(t, 10))
        ? (_.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1)
        : !0
      : (_.error(`Invalid Sentry Dsn: Invalid protocol ${i}`), !1)
    : (_.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
}
function eo(e) {
  const t = typeof e == "string" ? Qa(e) : as(e);
  if (!(!t || !to(t))) return t;
}
class Et extends Error {
  constructor(t, n = "warn") {
    super(t),
      (this.message = t),
      (this.name = new.target.prototype.constructor.name),
      Object.setPrototypeOf(this, new.target.prototype),
      (this.logLevel = n);
  }
}
function Ae(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t
    ? e
    : `${e.slice(0, t)}...`;
}
function er(e, t) {
  if (!Array.isArray(e)) return "";
  const n = [];
  for (let i = 0; i < e.length; i++) {
    const r = e[i];
    try {
      n.push(String(r));
    } catch {
      n.push("[value cannot be serialized]");
    }
  }
  return n.join(t);
}
function no(e, t, n = !1) {
  return Yt(e)
    ? ja(t)
      ? t.test(e)
      : Yt(t)
      ? n
        ? e === t
        : e.includes(t)
      : !1
    : !1;
}
function Se(e, t = [], n = !1) {
  return t.some((i) => no(e, i, n));
}
function J(e, t, n) {
  if (!(t in e)) return;
  const i = e[t],
    r = n(i);
  if (typeof r == "function")
    try {
      os(r, i);
    } catch {}
  e[t] = r;
}
function Di(e, t, n) {
  Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 });
}
function os(e, t) {
  const n = t.prototype || {};
  (e.prototype = t.prototype = n), Di(e, "__sentry_original__", t);
}
function Ii(e) {
  return e.__sentry_original__;
}
function io(e) {
  return Object.keys(e)
    .map((t) => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)
    .join("&");
}
function cs(e) {
  if (es(e))
    return { message: e.message, name: e.name, stack: e.stack, ...ir(e) };
  if (Nn(e)) {
    const t = {
      type: e.type,
      target: nr(e.target),
      currentTarget: nr(e.currentTarget),
      ...ir(e),
    };
    return (
      typeof CustomEvent < "u" && $t(e, CustomEvent) && (t.detail = e.detail), t
    );
  } else return e;
}
function nr(e) {
  try {
    return Ha(e) ? Ht(e) : Object.prototype.toString.call(e);
  } catch {
    return "<unknown>";
  }
}
function ir(e) {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t;
  } else return {};
}
function ro(e, t = 40) {
  const n = Object.keys(cs(e));
  if ((n.sort(), !n.length)) return "[object has no keys]";
  if (n[0].length >= t) return Ae(n[0], t);
  for (let i = n.length; i > 0; i--) {
    const r = n.slice(0, i).join(", ");
    if (!(r.length > t)) return i === n.length ? r : Ae(r, t);
  }
  return "";
}
function Rt(e) {
  return Xn(e, new Map());
}
function Xn(e, t) {
  if (le(e)) {
    const n = t.get(e);
    if (n !== void 0) return n;
    const i = {};
    t.set(e, i);
    for (const r of Object.keys(e)) typeof e[r] < "u" && (i[r] = Xn(e[r], t));
    return i;
  }
  if (Array.isArray(e)) {
    const n = t.get(e);
    if (n !== void 0) return n;
    const i = [];
    return (
      t.set(e, i),
      e.forEach((r) => {
        i.push(Xn(r, t));
      }),
      i
    );
  }
  return e;
}
const us = 50,
  rr = /\(error: (.*)\)/;
function ls(...e) {
  const t = e.sort((n, i) => n[0] - i[0]).map((n) => n[1]);
  return (n, i = 0) => {
    const r = [],
      a = n.split(`
`);
    for (let s = i; s < a.length; s++) {
      const o = a[s];
      if (o.length > 1024) continue;
      const c = rr.test(o) ? o.replace(rr, "$1") : o;
      if (!c.match(/\S*Error: /)) {
        for (const u of t) {
          const l = u(c);
          if (l) {
            r.push(l);
            break;
          }
        }
        if (r.length >= us) break;
      }
    }
    return ao(r);
  };
}
function so(e) {
  return Array.isArray(e) ? ls(...e) : e;
}
function ao(e) {
  if (!e.length) return [];
  const t = e.slice(0, us),
    n = t[t.length - 1].function;
  n && /sentryWrapped/.test(n) && t.pop(), t.reverse();
  const i = t[t.length - 1].function;
  return (
    i && /captureMessage|captureException/.test(i) && t.pop(),
    t.map((r) => ({
      ...r,
      filename: r.filename || t[t.length - 1].filename,
      function: r.function || "?",
    }))
  );
}
const Hn = "<anonymous>";
function jt(e) {
  try {
    return !e || typeof e != "function" ? Hn : e.name || Hn;
  } catch {
    return Hn;
  }
}
const Jn = We();
function ds() {
  if (!("fetch" in Jn)) return !1;
  try {
    return (
      new Headers(), new Request("http://www.example.com"), new Response(), !0
    );
  } catch {
    return !1;
  }
}
function Qn(e) {
  return (
    e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
  );
}
function oo() {
  if (!ds()) return !1;
  if (Qn(Jn.fetch)) return !0;
  let e = !1;
  const t = Jn.document;
  if (t && typeof t.createElement == "function")
    try {
      const n = t.createElement("iframe");
      (n.hidden = !0),
        t.head.appendChild(n),
        n.contentWindow &&
          n.contentWindow.fetch &&
          (e = Qn(n.contentWindow.fetch)),
        t.head.removeChild(n);
    } catch (n) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          n
        );
    }
  return e;
}
const Je = We();
function co() {
  const e = Je.chrome,
    t = e && e.app && e.app.runtime,
    n = "history" in Je && !!Je.history.pushState && !!Je.history.replaceState;
  return !t && n;
}
const G = We(),
  Pt = "__sentry_xhr_v2__",
  xe = {},
  sr = {};
function uo(e) {
  if (!sr[e])
    switch (((sr[e] = !0), e)) {
      case "console":
        lo();
        break;
      case "dom":
        Eo();
        break;
      case "xhr":
        ho();
        break;
      case "fetch":
        fo();
        break;
      case "history":
        po();
        break;
      case "error":
        bo();
        break;
      case "unhandledrejection":
        So();
        break;
      default:
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          _.warn("unknown instrumentation type:", e);
        return;
    }
}
function et(e, t) {
  (xe[e] = xe[e] || []), xe[e].push(t), uo(e);
}
function bt(e, t) {
  if (!(!e || !xe[e]))
    for (const n of xe[e] || [])
      try {
        n(t);
      } catch (i) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          _.error(
            `Error while triggering instrumentation handler.
Type: ${e}
Name: ${jt(n)}
Error:`,
            i
          );
      }
}
function lo() {
  "console" in G &&
    gn.forEach(function (e) {
      e in G.console &&
        J(G.console, e, function (t) {
          return function (...n) {
            bt("console", { args: n, level: e }), t && t.apply(G.console, n);
          };
        });
    });
}
function fo() {
  oo() &&
    J(G, "fetch", function (e) {
      return function (...t) {
        const { method: n, url: i } = _o(t),
          r = {
            args: t,
            fetchData: { method: n, url: i },
            startTimestamp: Date.now(),
          };
        return (
          bt("fetch", { ...r }),
          e.apply(G, t).then(
            (a) => (
              bt("fetch", { ...r, endTimestamp: Date.now(), response: a }), a
            ),
            (a) => {
              throw (
                (bt("fetch", { ...r, endTimestamp: Date.now(), error: a }), a)
              );
            }
          )
        );
      };
    });
}
function ti(e, t) {
  return !!e && typeof e == "object" && !!e[t];
}
function ar(e) {
  return typeof e == "string"
    ? e
    : e
    ? ti(e, "url")
      ? e.url
      : e.toString
      ? e.toString()
      : ""
    : "";
}
function _o(e) {
  if (e.length === 0) return { method: "GET", url: "" };
  if (e.length === 2) {
    const [n, i] = e;
    return {
      url: ar(n),
      method: ti(i, "method") ? String(i.method).toUpperCase() : "GET",
    };
  }
  const t = e[0];
  return {
    url: ar(t),
    method: ti(t, "method") ? String(t.method).toUpperCase() : "GET",
  };
}
function ho() {
  if (!("XMLHttpRequest" in G)) return;
  const e = XMLHttpRequest.prototype;
  J(e, "open", function (t) {
    return function (...n) {
      const i = n[1],
        r = (this[Pt] = {
          method: Yt(n[0]) ? n[0].toUpperCase() : n[0],
          url: n[1],
          request_headers: {},
        });
      Yt(i) &&
        r.method === "POST" &&
        i.match(/sentry_key/) &&
        (this.__sentry_own_request__ = !0);
      const a = () => {
        const s = this[Pt];
        if (s && this.readyState === 4) {
          try {
            s.status_code = this.status;
          } catch {}
          bt("xhr", {
            args: n,
            endTimestamp: Date.now(),
            startTimestamp: Date.now(),
            xhr: this,
          });
        }
      };
      return (
        "onreadystatechange" in this &&
        typeof this.onreadystatechange == "function"
          ? J(this, "onreadystatechange", function (s) {
              return function (...o) {
                return a(), s.apply(this, o);
              };
            })
          : this.addEventListener("readystatechange", a),
        J(this, "setRequestHeader", function (s) {
          return function (...o) {
            const [c, u] = o,
              l = this[Pt];
            return (
              l && (l.request_headers[c.toLowerCase()] = u), s.apply(this, o)
            );
          };
        }),
        t.apply(this, n)
      );
    };
  }),
    J(e, "send", function (t) {
      return function (...n) {
        const i = this[Pt];
        return (
          i && n[0] !== void 0 && (i.body = n[0]),
          bt("xhr", { args: n, startTimestamp: Date.now(), xhr: this }),
          t.apply(this, n)
        );
      };
    });
}
let Qe;
function po() {
  if (!co()) return;
  const e = G.onpopstate;
  G.onpopstate = function (...n) {
    const i = G.location.href,
      r = Qe;
    if (((Qe = i), bt("history", { from: r, to: i }), e))
      try {
        return e.apply(this, n);
      } catch {}
  };
  function t(n) {
    return function (...i) {
      const r = i.length > 2 ? i[2] : void 0;
      if (r) {
        const a = Qe,
          s = String(r);
        (Qe = s), bt("history", { from: a, to: s });
      }
      return n.apply(this, i);
    };
  }
  J(G.history, "pushState", t), J(G.history, "replaceState", t);
}
const mo = 1e3;
let tn, en;
function go(e, t) {
  if (!e || e.type !== t.type) return !0;
  try {
    if (e.target !== t.target) return !0;
  } catch {}
  return !1;
}
function yo(e) {
  if (e.type !== "keypress") return !1;
  try {
    const t = e.target;
    if (!t || !t.tagName) return !0;
    if (
      t.tagName === "INPUT" ||
      t.tagName === "TEXTAREA" ||
      t.isContentEditable
    )
      return !1;
  } catch {}
  return !0;
}
function or(e, t = !1) {
  return (n) => {
    if (!n || en === n || yo(n)) return;
    const i = n.type === "keypress" ? "input" : n.type;
    tn === void 0
      ? (e({ event: n, name: i, global: t }), (en = n))
      : go(en, n) && (e({ event: n, name: i, global: t }), (en = n)),
      clearTimeout(tn),
      (tn = G.setTimeout(() => {
        tn = void 0;
      }, mo));
  };
}
function Eo() {
  if (!("document" in G)) return;
  const e = bt.bind(null, "dom"),
    t = or(e, !0);
  G.document.addEventListener("click", t, !1),
    G.document.addEventListener("keypress", t, !1),
    ["EventTarget", "Node"].forEach((n) => {
      const i = G[n] && G[n].prototype;
      !i ||
        !i.hasOwnProperty ||
        !i.hasOwnProperty("addEventListener") ||
        (J(i, "addEventListener", function (r) {
          return function (a, s, o) {
            if (a === "click" || a == "keypress")
              try {
                const c = this,
                  u = (c.__sentry_instrumentation_handlers__ =
                    c.__sentry_instrumentation_handlers__ || {}),
                  l = (u[a] = u[a] || { refCount: 0 });
                if (!l.handler) {
                  const d = or(e);
                  (l.handler = d), r.call(this, a, d, o);
                }
                l.refCount++;
              } catch {}
            return r.call(this, a, s, o);
          };
        }),
        J(i, "removeEventListener", function (r) {
          return function (a, s, o) {
            if (a === "click" || a == "keypress")
              try {
                const c = this,
                  u = c.__sentry_instrumentation_handlers__ || {},
                  l = u[a];
                l &&
                  (l.refCount--,
                  l.refCount <= 0 &&
                    (r.call(this, a, l.handler, o),
                    (l.handler = void 0),
                    delete u[a]),
                  Object.keys(u).length === 0 &&
                    delete c.__sentry_instrumentation_handlers__);
              } catch {}
            return r.call(this, a, s, o);
          };
        }));
    });
}
let nn = null;
function bo() {
  (nn = G.onerror),
    (G.onerror = function (e, t, n, i, r) {
      return (
        bt("error", { column: i, error: r, line: n, msg: e, url: t }),
        nn && !nn.__SENTRY_LOADER__ ? nn.apply(this, arguments) : !1
      );
    }),
    (G.onerror.__SENTRY_INSTRUMENTED__ = !0);
}
let rn = null;
function So() {
  (rn = G.onunhandledrejection),
    (G.onunhandledrejection = function (e) {
      return (
        bt("unhandledrejection", e),
        rn && !rn.__SENTRY_LOADER__ ? rn.apply(this, arguments) : !0
      );
    }),
    (G.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
}
function wo() {
  const e = typeof WeakSet == "function",
    t = e ? new WeakSet() : [];
  function n(r) {
    if (e) return t.has(r) ? !0 : (t.add(r), !1);
    for (let a = 0; a < t.length; a++) if (t[a] === r) return !0;
    return t.push(r), !1;
  }
  function i(r) {
    if (e) t.delete(r);
    else
      for (let a = 0; a < t.length; a++)
        if (t[a] === r) {
          t.splice(a, 1);
          break;
        }
  }
  return [n, i];
}
function Ct() {
  const e = st,
    t = e.crypto || e.msCrypto;
  if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
  const n =
    t && t.getRandomValues
      ? () => t.getRandomValues(new Uint8Array(1))[0]
      : () => Math.random() * 16;
  return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (i) =>
    (i ^ ((n() & 15) >> (i / 4))).toString(16)
  );
}
function fs(e) {
  return e.exception && e.exception.values ? e.exception.values[0] : void 0;
}
function Mt(e) {
  const { message: t, event_id: n } = e;
  if (t) return t;
  const i = fs(e);
  return i
    ? i.type && i.value
      ? `${i.type}: ${i.value}`
      : i.type || i.value || n || "<unknown>"
    : n || "<unknown>";
}
function ei(e, t, n) {
  const i = (e.exception = e.exception || {}),
    r = (i.values = i.values || []),
    a = (r[0] = r[0] || {});
  a.value || (a.value = t || ""), a.type || (a.type = n || "Error");
}
function Me(e, t) {
  const n = fs(e);
  if (!n) return;
  const i = { type: "generic", handled: !0 },
    r = n.mechanism;
  if (((n.mechanism = { ...i, ...r, ...t }), t && "data" in t)) {
    const a = { ...(r && r.data), ...t.data };
    n.mechanism.data = a;
  }
}
function cr(e) {
  if (e && e.__sentry_captured__) return !0;
  try {
    Di(e, "__sentry_captured__", !0);
  } catch {}
  return !1;
}
function _s(e) {
  return Array.isArray(e) ? e : [e];
}
function vo() {
  return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__;
}
function To() {
  return "npm";
}
function hs() {
  return (
    !vo() &&
    Object.prototype.toString.call(typeof process < "u" ? process : 0) ===
      "[object process]"
  );
}
function Ro(e, t) {
  return e.require(t);
}
function Tt(e, t = 100, n = 1 / 0) {
  try {
    return ni("", e, t, n);
  } catch (i) {
    return { ERROR: `**non-serializable** (${i})` };
  }
}
function ps(e, t = 3, n = 100 * 1024) {
  const i = Tt(e, t);
  return Io(i) > n ? ps(e, t - 1, n) : i;
}
function ni(e, t, n = 1 / 0, i = 1 / 0, r = wo()) {
  const [a, s] = r;
  if (
    t == null ||
    (["number", "boolean", "string"].includes(typeof t) && !is(t))
  )
    return t;
  const o = ko(e, t);
  if (!o.startsWith("[object ")) return o;
  if (t.__sentry_skip_normalization__) return t;
  const c =
    typeof t.__sentry_override_normalization_depth__ == "number"
      ? t.__sentry_override_normalization_depth__
      : n;
  if (c === 0) return o.replace("object ", "");
  if (a(t)) return "[Circular ~]";
  const u = t;
  if (u && typeof u.toJSON == "function")
    try {
      const f = u.toJSON();
      return ni("", f, c - 1, i, r);
    } catch {}
  const l = Array.isArray(t) ? [] : {};
  let d = 0;
  const h = cs(t);
  for (const f in h) {
    if (!Object.prototype.hasOwnProperty.call(h, f)) continue;
    if (d >= i) {
      l[f] = "[MaxProperties ~]";
      break;
    }
    const p = h[f];
    (l[f] = ni(f, p, c - 1, i, r)), d++;
  }
  return s(t), l;
}
function ko(e, t) {
  try {
    if (e === "domain" && t && typeof t == "object" && t._events)
      return "[Domain]";
    if (e === "domainEmitter") return "[DomainEmitter]";
    if (typeof global < "u" && t === global) return "[Global]";
    if (typeof window < "u" && t === window) return "[Window]";
    if (typeof document < "u" && t === document) return "[Document]";
    if (Wa(t)) return "[SyntheticEvent]";
    if (typeof t == "number" && t !== t) return "[NaN]";
    if (typeof t == "function") return `[Function: ${jt(t)}]`;
    if (typeof t == "symbol") return `[${String(t)}]`;
    if (typeof t == "bigint") return `[BigInt: ${String(t)}]`;
    const n = No(t);
    return /^HTML(\w*)Element$/.test(n)
      ? `[HTMLElement: ${n}]`
      : `[object ${n}]`;
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function No(e) {
  const t = Object.getPrototypeOf(e);
  return t ? t.constructor.name : "null prototype";
}
function Do(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function Io(e) {
  return Do(JSON.stringify(e));
}
var It;
(function (e) {
  e[(e.PENDING = 0)] = "PENDING";
  const n = 1;
  e[(e.RESOLVED = n)] = "RESOLVED";
  const i = 2;
  e[(e.REJECTED = i)] = "REJECTED";
})(It || (It = {}));
function Kt(e) {
  return new it((t) => {
    t(e);
  });
}
function yn(e) {
  return new it((t, n) => {
    n(e);
  });
}
class it {
  __init() {
    this._state = It.PENDING;
  }
  __init2() {
    this._handlers = [];
  }
  constructor(t) {
    it.prototype.__init.call(this),
      it.prototype.__init2.call(this),
      it.prototype.__init3.call(this),
      it.prototype.__init4.call(this),
      it.prototype.__init5.call(this),
      it.prototype.__init6.call(this);
    try {
      t(this._resolve, this._reject);
    } catch (n) {
      this._reject(n);
    }
  }
  then(t, n) {
    return new it((i, r) => {
      this._handlers.push([
        !1,
        (a) => {
          if (!t) i(a);
          else
            try {
              i(t(a));
            } catch (s) {
              r(s);
            }
        },
        (a) => {
          if (!n) r(a);
          else
            try {
              i(n(a));
            } catch (s) {
              r(s);
            }
        },
      ]),
        this._executeHandlers();
    });
  }
  catch(t) {
    return this.then((n) => n, t);
  }
  finally(t) {
    return new it((n, i) => {
      let r, a;
      return this.then(
        (s) => {
          (a = !1), (r = s), t && t();
        },
        (s) => {
          (a = !0), (r = s), t && t();
        }
      ).then(() => {
        if (a) {
          i(r);
          return;
        }
        n(r);
      });
    });
  }
  __init3() {
    this._resolve = (t) => {
      this._setResult(It.RESOLVED, t);
    };
  }
  __init4() {
    this._reject = (t) => {
      this._setResult(It.REJECTED, t);
    };
  }
  __init5() {
    this._setResult = (t, n) => {
      if (this._state === It.PENDING) {
        if (ki(n)) {
          n.then(this._resolve, this._reject);
          return;
        }
        (this._state = t), (this._value = n), this._executeHandlers();
      }
    };
  }
  __init6() {
    this._executeHandlers = () => {
      if (this._state === It.PENDING) return;
      const t = this._handlers.slice();
      (this._handlers = []),
        t.forEach((n) => {
          n[0] ||
            (this._state === It.RESOLVED && n[1](this._value),
            this._state === It.REJECTED && n[2](this._value),
            (n[0] = !0));
        });
    };
  }
}
function Ao(e) {
  const t = [];
  function n() {
    return e === void 0 || t.length < e;
  }
  function i(s) {
    return t.splice(t.indexOf(s), 1)[0];
  }
  function r(s) {
    if (!n())
      return yn(new Et("Not adding Promise because buffer limit was reached."));
    const o = s();
    return (
      t.indexOf(o) === -1 && t.push(o),
      o.then(() => i(o)).then(null, () => i(o).then(null, () => {})),
      o
    );
  }
  function a(s) {
    return new it((o, c) => {
      let u = t.length;
      if (!u) return o(!0);
      const l = setTimeout(() => {
        s && s > 0 && o(!1);
      }, s);
      t.forEach((d) => {
        Kt(d).then(() => {
          --u || (clearTimeout(l), o(!0));
        }, c);
      });
    });
  }
  return { $: t, add: r, drain: a };
}
function jn(e) {
  if (!e) return {};
  const t = e.match(
    /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
  );
  if (!t) return {};
  const n = t[6] || "",
    i = t[8] || "";
  return {
    host: t[4],
    path: t[5],
    protocol: t[2],
    search: n,
    hash: i,
    relative: t[5] + n + i,
  };
}
const xo = ["fatal", "error", "warning", "log", "info", "debug"];
function Oo(e) {
  return e === "warn" ? "warning" : xo.includes(e) ? e : "log";
}
const ms = We(),
  ii = { nowSeconds: () => Date.now() / 1e3 };
function Co() {
  const { performance: e } = ms;
  if (!e || !e.now) return;
  const t = Date.now() - e.now();
  return { now: () => e.now(), timeOrigin: t };
}
function Uo() {
  try {
    return Ro(module, "perf_hooks").performance;
  } catch {
    return;
  }
}
const Wn = hs() ? Uo() : Co(),
  ur =
    Wn === void 0 ? ii : { nowSeconds: () => (Wn.timeOrigin + Wn.now()) / 1e3 },
  In = ii.nowSeconds.bind(ii),
  Xt = ur.nowSeconds.bind(ur),
  ft = (() => {
    const { performance: e } = ms;
    if (!e || !e.now) return;
    const t = 3600 * 1e3,
      n = e.now(),
      i = Date.now(),
      r = e.timeOrigin ? Math.abs(e.timeOrigin + n - i) : t,
      a = r < t,
      s = e.timing && e.timing.navigationStart,
      c = typeof s == "number" ? Math.abs(s + n - i) : t,
      u = c < t;
    return a || u ? (r <= c ? e.timeOrigin : s) : i;
  })(),
  Lo = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
function Bo(e) {
  const t = e.match(Lo);
  if (!e || !t) return;
  let n;
  return (
    t[3] === "1" ? (n = !0) : t[3] === "0" && (n = !1),
    { traceId: t[1], parentSampled: n, parentSpanId: t[2] }
  );
}
function we(e, t = []) {
  return [e, t];
}
function Mo(e, t) {
  const [n, i] = e;
  return [n, [...i, t]];
}
function lr(e, t) {
  const n = e[1];
  for (const i of n) {
    const r = i[0].type;
    if (t(i, r)) return !0;
  }
  return !1;
}
function ri(e, t) {
  return (t || new TextEncoder()).encode(e);
}
function Po(e, t) {
  const [n, i] = e;
  let r = JSON.stringify(n);
  function a(s) {
    typeof r == "string"
      ? (r = typeof s == "string" ? r + s : [ri(r, t), s])
      : r.push(typeof s == "string" ? ri(s, t) : s);
  }
  for (const s of i) {
    const [o, c] = s;
    if (
      (a(`
${JSON.stringify(o)}
`),
      typeof c == "string" || c instanceof Uint8Array)
    )
      a(c);
    else {
      let u;
      try {
        u = JSON.stringify(c);
      } catch {
        u = JSON.stringify(Tt(c));
      }
      a(u);
    }
  }
  return typeof r == "string" ? r : zo(r);
}
function zo(e) {
  const t = e.reduce((r, a) => r + a.length, 0),
    n = new Uint8Array(t);
  let i = 0;
  for (const r of e) n.set(r, i), (i += r.length);
  return n;
}
function Go(e, t) {
  const n = typeof e.data == "string" ? ri(e.data, t) : e.data;
  return [
    Rt({
      type: "attachment",
      length: n.length,
      filename: e.filename,
      content_type: e.contentType,
      attachment_type: e.attachmentType,
    }),
    n,
  ];
}
const Fo = {
  session: "session",
  sessions: "session",
  attachment: "attachment",
  transaction: "transaction",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor",
};
function dr(e) {
  return Fo[e];
}
function Ai(e) {
  if (!e || !e.sdk) return;
  const { name: t, version: n } = e.sdk;
  return { name: t, version: n };
}
function gs(e, t, n, i) {
  const r =
    e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
  return {
    event_id: e.event_id,
    sent_at: new Date().toISOString(),
    ...(t && { sdk: t }),
    ...(!!n && { dsn: Dn(i) }),
    ...(r && { trace: Rt({ ...r }) }),
  };
}
function Yo(e, t, n) {
  const i = [
    { type: "client_report" },
    { timestamp: n || In(), discarded_events: e },
  ];
  return we(t ? { dsn: t } : {}, [i]);
}
const $o = 60 * 1e3;
function Ho(e, t = Date.now()) {
  const n = parseInt(`${e}`, 10);
  if (!isNaN(n)) return n * 1e3;
  const i = Date.parse(`${e}`);
  return isNaN(i) ? $o : i - t;
}
function jo(e, t) {
  return e[t] || e.all || 0;
}
function Wo(e, t, n = Date.now()) {
  return jo(e, t) > n;
}
function qo(e, { statusCode: t, headers: n }, i = Date.now()) {
  const r = { ...e },
    a = n && n["x-sentry-rate-limits"],
    s = n && n["retry-after"];
  if (a)
    for (const o of a.trim().split(",")) {
      const [c, u] = o.split(":", 2),
        l = parseInt(c, 10),
        d = (isNaN(l) ? 60 : l) * 1e3;
      if (!u) r.all = i + d;
      else for (const h of u.split(";")) r[h] = i + d;
    }
  else s ? (r.all = i + Ho(s, i)) : t === 429 && (r.all = i + 60 * 1e3);
  return r;
}
const si = "baggage",
  ys = "sentry-",
  Vo = /^sentry-/,
  Zo = 8192;
function Ko(e) {
  if (!Yt(e) && !Array.isArray(e)) return;
  let t = {};
  if (Array.isArray(e))
    t = e.reduce((i, r) => {
      const a = fr(r);
      return { ...i, ...a };
    }, {});
  else {
    if (!e) return;
    t = fr(e);
  }
  const n = Object.entries(t).reduce((i, [r, a]) => {
    if (r.match(Vo)) {
      const s = r.slice(ys.length);
      i[s] = a;
    }
    return i;
  }, {});
  if (Object.keys(n).length > 0) return n;
}
function Es(e) {
  const t = Object.entries(e).reduce(
    (n, [i, r]) => (r && (n[`${ys}${i}`] = r), n),
    {}
  );
  return Xo(t);
}
function fr(e) {
  return e
    .split(",")
    .map((t) => t.split("=").map((n) => decodeURIComponent(n.trim())))
    .reduce((t, [n, i]) => ((t[n] = i), t), {});
}
function Xo(e) {
  if (Object.keys(e).length !== 0)
    return Object.entries(e).reduce((t, [n, i], r) => {
      const a = `${encodeURIComponent(n)}=${encodeURIComponent(i)}`,
        s = r === 0 ? a : `${t},${a}`;
      return s.length > Zo
        ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            _.warn(
              `Not adding key: ${n} with val: ${i} to baggage header due to exceeding baggage size limits.`
            ),
          t)
        : s;
    }, "");
}
function bs(e, t, n) {
  const i = t.match(/([a-z_]+)\.(.*)/i);
  if (i === null) e[t] = n;
  else {
    const r = e[i[1]];
    bs(r, i[2], n);
  }
}
function Jo(e, t, n = {}) {
  return Array.isArray(t) ? Ss(e, t, n) : Qo(e, t, n);
}
function Ss(e, t, n) {
  const i = t.find((r) => r.name === e.name);
  if (i) {
    for (const [r, a] of Object.entries(n)) bs(i, r, a);
    return t;
  }
  return [...t, e];
}
function Qo(e, t, n) {
  return (r) => {
    const a = t(r);
    return e.allowExclusionByUser && !a.find((o) => o.name === e.name)
      ? a
      : Ss(e, a, n);
  };
}
const xi = "production";
function tc(e) {
  const t = Xt(),
    n = {
      sid: Ct(),
      init: !0,
      timestamp: t,
      started: t,
      duration: 0,
      status: "ok",
      errors: 0,
      ignoreDuration: !1,
      toJSON: () => nc(n),
    };
  return e && de(n, e), n;
}
function de(e, t = {}) {
  if (
    (t.user &&
      (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
      !e.did &&
        !t.did &&
        (e.did = t.user.id || t.user.email || t.user.username)),
    (e.timestamp = t.timestamp || Xt()),
    t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
    t.sid && (e.sid = t.sid.length === 32 ? t.sid : Ct()),
    t.init !== void 0 && (e.init = t.init),
    !e.did && t.did && (e.did = `${t.did}`),
    typeof t.started == "number" && (e.started = t.started),
    e.ignoreDuration)
  )
    e.duration = void 0;
  else if (typeof t.duration == "number") e.duration = t.duration;
  else {
    const n = e.timestamp - e.started;
    e.duration = n >= 0 ? n : 0;
  }
  t.release && (e.release = t.release),
    t.environment && (e.environment = t.environment),
    !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
    !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
    typeof t.errors == "number" && (e.errors = t.errors),
    t.status && (e.status = t.status);
}
function ec(e, t) {
  let n = {};
  t ? (n = { status: t }) : e.status === "ok" && (n = { status: "exited" }),
    de(e, n);
}
function nc(e) {
  return Rt({
    sid: `${e.sid}`,
    init: e.init,
    started: new Date(e.started * 1e3).toISOString(),
    timestamp: new Date(e.timestamp * 1e3).toISOString(),
    status: e.status,
    errors: e.errors,
    did:
      typeof e.did == "number" || typeof e.did == "string"
        ? `${e.did}`
        : void 0,
    duration: e.duration,
    attrs: {
      release: e.release,
      environment: e.environment,
      ip_address: e.ipAddress,
      user_agent: e.userAgent,
    },
  });
}
const ic = 100;
class Zt {
  constructor() {
    (this._notifyingListeners = !1),
      (this._scopeListeners = []),
      (this._eventProcessors = []),
      (this._breadcrumbs = []),
      (this._attachments = []),
      (this._user = {}),
      (this._tags = {}),
      (this._extra = {}),
      (this._contexts = {}),
      (this._sdkProcessingMetadata = {});
  }
  static clone(t) {
    const n = new Zt();
    return (
      t &&
        ((n._breadcrumbs = [...t._breadcrumbs]),
        (n._tags = { ...t._tags }),
        (n._extra = { ...t._extra }),
        (n._contexts = { ...t._contexts }),
        (n._user = t._user),
        (n._level = t._level),
        (n._span = t._span),
        (n._session = t._session),
        (n._transactionName = t._transactionName),
        (n._fingerprint = t._fingerprint),
        (n._eventProcessors = [...t._eventProcessors]),
        (n._requestSession = t._requestSession),
        (n._attachments = [...t._attachments]),
        (n._sdkProcessingMetadata = { ...t._sdkProcessingMetadata })),
      n
    );
  }
  addScopeListener(t) {
    this._scopeListeners.push(t);
  }
  addEventProcessor(t) {
    return this._eventProcessors.push(t), this;
  }
  setUser(t) {
    return (
      (this._user = t || {}),
      this._session && de(this._session, { user: t }),
      this._notifyScopeListeners(),
      this
    );
  }
  getUser() {
    return this._user;
  }
  getRequestSession() {
    return this._requestSession;
  }
  setRequestSession(t) {
    return (this._requestSession = t), this;
  }
  setTags(t) {
    return (
      (this._tags = { ...this._tags, ...t }), this._notifyScopeListeners(), this
    );
  }
  setTag(t, n) {
    return (
      (this._tags = { ...this._tags, [t]: n }),
      this._notifyScopeListeners(),
      this
    );
  }
  setExtras(t) {
    return (
      (this._extra = { ...this._extra, ...t }),
      this._notifyScopeListeners(),
      this
    );
  }
  setExtra(t, n) {
    return (
      (this._extra = { ...this._extra, [t]: n }),
      this._notifyScopeListeners(),
      this
    );
  }
  setFingerprint(t) {
    return (this._fingerprint = t), this._notifyScopeListeners(), this;
  }
  setLevel(t) {
    return (this._level = t), this._notifyScopeListeners(), this;
  }
  setTransactionName(t) {
    return (this._transactionName = t), this._notifyScopeListeners(), this;
  }
  setContext(t, n) {
    return (
      n === null ? delete this._contexts[t] : (this._contexts[t] = n),
      this._notifyScopeListeners(),
      this
    );
  }
  setSpan(t) {
    return (this._span = t), this._notifyScopeListeners(), this;
  }
  getSpan() {
    return this._span;
  }
  getTransaction() {
    const t = this.getSpan();
    return t && t.transaction;
  }
  setSession(t) {
    return (
      t ? (this._session = t) : delete this._session,
      this._notifyScopeListeners(),
      this
    );
  }
  getSession() {
    return this._session;
  }
  update(t) {
    if (!t) return this;
    if (typeof t == "function") {
      const n = t(this);
      return n instanceof Zt ? n : this;
    }
    return (
      t instanceof Zt
        ? ((this._tags = { ...this._tags, ...t._tags }),
          (this._extra = { ...this._extra, ...t._extra }),
          (this._contexts = { ...this._contexts, ...t._contexts }),
          t._user && Object.keys(t._user).length && (this._user = t._user),
          t._level && (this._level = t._level),
          t._fingerprint && (this._fingerprint = t._fingerprint),
          t._requestSession && (this._requestSession = t._requestSession))
        : le(t) &&
          ((t = t),
          (this._tags = { ...this._tags, ...t.tags }),
          (this._extra = { ...this._extra, ...t.extra }),
          (this._contexts = { ...this._contexts, ...t.contexts }),
          t.user && (this._user = t.user),
          t.level && (this._level = t.level),
          t.fingerprint && (this._fingerprint = t.fingerprint),
          t.requestSession && (this._requestSession = t.requestSession)),
      this
    );
  }
  clear() {
    return (
      (this._breadcrumbs = []),
      (this._tags = {}),
      (this._extra = {}),
      (this._user = {}),
      (this._contexts = {}),
      (this._level = void 0),
      (this._transactionName = void 0),
      (this._fingerprint = void 0),
      (this._requestSession = void 0),
      (this._span = void 0),
      (this._session = void 0),
      this._notifyScopeListeners(),
      (this._attachments = []),
      this
    );
  }
  addBreadcrumb(t, n) {
    const i = typeof n == "number" ? n : ic;
    if (i <= 0) return this;
    const r = { timestamp: In(), ...t };
    return (
      (this._breadcrumbs = [...this._breadcrumbs, r].slice(-i)),
      this._notifyScopeListeners(),
      this
    );
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
  }
  addAttachment(t) {
    return this._attachments.push(t), this;
  }
  getAttachments() {
    return this._attachments;
  }
  clearAttachments() {
    return (this._attachments = []), this;
  }
  applyToEvent(t, n = {}) {
    if (
      (this._extra &&
        Object.keys(this._extra).length &&
        (t.extra = { ...this._extra, ...t.extra }),
      this._tags &&
        Object.keys(this._tags).length &&
        (t.tags = { ...this._tags, ...t.tags }),
      this._user &&
        Object.keys(this._user).length &&
        (t.user = { ...this._user, ...t.user }),
      this._contexts &&
        Object.keys(this._contexts).length &&
        (t.contexts = { ...this._contexts, ...t.contexts }),
      this._level && (t.level = this._level),
      this._transactionName && (t.transaction = this._transactionName),
      this._span)
    ) {
      t.contexts = { trace: this._span.getTraceContext(), ...t.contexts };
      const i = this._span.transaction;
      if (i) {
        t.sdkProcessingMetadata = {
          dynamicSamplingContext: i.getDynamicSamplingContext(),
          ...t.sdkProcessingMetadata,
        };
        const r = i.name;
        r && (t.tags = { transaction: r, ...t.tags });
      }
    }
    return (
      this._applyFingerprint(t),
      (t.breadcrumbs = [...(t.breadcrumbs || []), ...this._breadcrumbs]),
      (t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0),
      (t.sdkProcessingMetadata = {
        ...t.sdkProcessingMetadata,
        ...this._sdkProcessingMetadata,
      }),
      this._notifyEventProcessors([...ws(), ...this._eventProcessors], t, n)
    );
  }
  setSDKProcessingMetadata(t) {
    return (
      (this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...t }),
      this
    );
  }
  _notifyEventProcessors(t, n, i, r = 0) {
    return new it((a, s) => {
      const o = t[r];
      if (n === null || typeof o != "function") a(n);
      else {
        const c = o({ ...n }, i);
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          o.id &&
          c === null &&
          _.log(`Event processor "${o.id}" dropped event`),
          ki(c)
            ? c
                .then((u) =>
                  this._notifyEventProcessors(t, u, i, r + 1).then(a)
                )
                .then(null, s)
            : this._notifyEventProcessors(t, c, i, r + 1)
                .then(a)
                .then(null, s);
      }
    });
  }
  _notifyScopeListeners() {
    this._notifyingListeners ||
      ((this._notifyingListeners = !0),
      this._scopeListeners.forEach((t) => {
        t(this);
      }),
      (this._notifyingListeners = !1));
  }
  _applyFingerprint(t) {
    (t.fingerprint = t.fingerprint ? _s(t.fingerprint) : []),
      this._fingerprint &&
        (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
      t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
  }
}
function ws() {
  return Ni("globalEventProcessors", () => []);
}
function qe(e) {
  ws().push(e);
}
const vs = 4,
  rc = 100;
class Ts {
  constructor(t, n = new Zt(), i = vs) {
    (this._version = i),
      (this._stack = [{ scope: n }]),
      t && this.bindClient(t);
  }
  isOlderThan(t) {
    return this._version < t;
  }
  bindClient(t) {
    const n = this.getStackTop();
    (n.client = t), t && t.setupIntegrations && t.setupIntegrations();
  }
  pushScope() {
    const t = Zt.clone(this.getScope());
    return this.getStack().push({ client: this.getClient(), scope: t }), t;
  }
  popScope() {
    return this.getStack().length <= 1 ? !1 : !!this.getStack().pop();
  }
  withScope(t) {
    const n = this.pushScope();
    try {
      t(n);
    } finally {
      this.popScope();
    }
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getStack() {
    return this._stack;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  captureException(t, n) {
    const i = (this._lastEventId = n && n.event_id ? n.event_id : Ct()),
      r = new Error("Sentry syntheticException");
    return (
      this._withClient((a, s) => {
        a.captureException(
          t,
          { originalException: t, syntheticException: r, ...n, event_id: i },
          s
        );
      }),
      i
    );
  }
  captureMessage(t, n, i) {
    const r = (this._lastEventId = i && i.event_id ? i.event_id : Ct()),
      a = new Error(t);
    return (
      this._withClient((s, o) => {
        s.captureMessage(
          t,
          n,
          { originalException: t, syntheticException: a, ...i, event_id: r },
          o
        );
      }),
      r
    );
  }
  captureEvent(t, n) {
    const i = n && n.event_id ? n.event_id : Ct();
    return (
      t.type || (this._lastEventId = i),
      this._withClient((r, a) => {
        r.captureEvent(t, { ...n, event_id: i }, a);
      }),
      i
    );
  }
  lastEventId() {
    return this._lastEventId;
  }
  addBreadcrumb(t, n) {
    const { scope: i, client: r } = this.getStackTop();
    if (!r) return;
    const { beforeBreadcrumb: a = null, maxBreadcrumbs: s = rc } =
      (r.getOptions && r.getOptions()) || {};
    if (s <= 0) return;
    const c = { timestamp: In(), ...t },
      u = a ? ss(() => a(c, n)) : c;
    u !== null &&
      (r.emit && r.emit("beforeAddBreadcrumb", u, n), i.addBreadcrumb(u, s));
  }
  setUser(t) {
    this.getScope().setUser(t);
  }
  setTags(t) {
    this.getScope().setTags(t);
  }
  setExtras(t) {
    this.getScope().setExtras(t);
  }
  setTag(t, n) {
    this.getScope().setTag(t, n);
  }
  setExtra(t, n) {
    this.getScope().setExtra(t, n);
  }
  setContext(t, n) {
    this.getScope().setContext(t, n);
  }
  configureScope(t) {
    const { scope: n, client: i } = this.getStackTop();
    i && t(n);
  }
  run(t) {
    const n = _r(this);
    try {
      t(this);
    } finally {
      _r(n);
    }
  }
  getIntegration(t) {
    const n = this.getClient();
    if (!n) return null;
    try {
      return n.getIntegration(t);
    } catch {
      return (
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          _.warn(`Cannot retrieve integration ${t.id} from the current Hub`),
        null
      );
    }
  }
  startTransaction(t, n) {
    const i = this._callExtensionMethod("startTransaction", t, n);
    return (
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        !i &&
        console.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`),
      i
    );
  }
  traceHeaders() {
    return this._callExtensionMethod("traceHeaders");
  }
  captureSession(t = !1) {
    if (t) return this.endSession();
    this._sendSessionUpdate();
  }
  endSession() {
    const n = this.getStackTop().scope,
      i = n.getSession();
    i && ec(i), this._sendSessionUpdate(), n.setSession();
  }
  startSession(t) {
    const { scope: n, client: i } = this.getStackTop(),
      { release: r, environment: a = xi } = (i && i.getOptions()) || {},
      { userAgent: s } = st.navigator || {},
      o = tc({
        release: r,
        environment: a,
        user: n.getUser(),
        ...(s && { userAgent: s }),
        ...t,
      }),
      c = n.getSession && n.getSession();
    return (
      c && c.status === "ok" && de(c, { status: "exited" }),
      this.endSession(),
      n.setSession(o),
      o
    );
  }
  shouldSendDefaultPii() {
    const t = this.getClient(),
      n = t && t.getOptions();
    return !!(n && n.sendDefaultPii);
  }
  _sendSessionUpdate() {
    const { scope: t, client: n } = this.getStackTop(),
      i = t.getSession();
    i && n && n.captureSession && n.captureSession(i);
  }
  _withClient(t) {
    const { scope: n, client: i } = this.getStackTop();
    i && t(i, n);
  }
  _callExtensionMethod(t, ...n) {
    const r = Ve().__SENTRY__;
    if (r && r.extensions && typeof r.extensions[t] == "function")
      return r.extensions[t].apply(this, n);
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      _.warn(`Extension method ${t} couldn't be found, doing nothing.`);
  }
}
function Ve() {
  return (st.__SENTRY__ = st.__SENTRY__ || { extensions: {}, hub: void 0 }), st;
}
function _r(e) {
  const t = Ve(),
    n = ai(t);
  return Rs(t, e), n;
}
function w() {
  const e = Ve();
  if (e.__SENTRY__ && e.__SENTRY__.acs) {
    const t = e.__SENTRY__.acs.getCurrentHub();
    if (t) return t;
  }
  return sc(e);
}
function sc(e = Ve()) {
  return (!ac(e) || ai(e).isOlderThan(vs)) && Rs(e, new Ts()), ai(e);
}
function ac(e) {
  return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
}
function ai(e) {
  return Ni("hub", () => new Ts(), e);
}
function Rs(e, t) {
  if (!e) return !1;
  const n = (e.__SENTRY__ = e.__SENTRY__ || {});
  return (n.hub = t), !0;
}
function An(e) {
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
  const t = w().getClient(),
    n = e || (t && t.getOptions());
  return (
    !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
  );
}
function ve(e) {
  return (e || w()).getScope().getTransaction();
}
let hr = !1;
function oc() {
  hr || ((hr = !0), et("error", oi), et("unhandledrejection", oi));
}
function oi() {
  const e = ve();
  if (e) {
    const t = "internal_error";
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      _.log(`[Tracing] Transaction: ${t} -> Global error occured`),
      e.setStatus(t);
  }
}
oi.tag = "sentry_tracingErrorCallback";
class xn {
  __init() {
    this.spans = [];
  }
  constructor(t = 1e3) {
    xn.prototype.__init.call(this), (this._maxlen = t);
  }
  add(t) {
    this.spans.length > this._maxlen
      ? (t.spanRecorder = void 0)
      : this.spans.push(t);
  }
}
class At {
  __init2() {
    this.traceId = Ct();
  }
  __init3() {
    this.spanId = Ct().substring(16);
  }
  __init4() {
    this.startTimestamp = Xt();
  }
  __init5() {
    this.tags = {};
  }
  __init6() {
    this.data = {};
  }
  __init7() {
    this.instrumenter = "sentry";
  }
  constructor(t) {
    if (
      (At.prototype.__init2.call(this),
      At.prototype.__init3.call(this),
      At.prototype.__init4.call(this),
      At.prototype.__init5.call(this),
      At.prototype.__init6.call(this),
      At.prototype.__init7.call(this),
      !t)
    )
      return this;
    t.traceId && (this.traceId = t.traceId),
      t.spanId && (this.spanId = t.spanId),
      t.parentSpanId && (this.parentSpanId = t.parentSpanId),
      "sampled" in t && (this.sampled = t.sampled),
      t.op && (this.op = t.op),
      t.description && (this.description = t.description),
      t.data && (this.data = t.data),
      t.tags && (this.tags = t.tags),
      t.status && (this.status = t.status),
      t.startTimestamp && (this.startTimestamp = t.startTimestamp),
      t.endTimestamp && (this.endTimestamp = t.endTimestamp),
      t.instrumenter && (this.instrumenter = t.instrumenter);
  }
  startChild(t) {
    const n = new At({
      ...t,
      parentSpanId: this.spanId,
      sampled: this.sampled,
      traceId: this.traceId,
    });
    if (
      ((n.spanRecorder = this.spanRecorder),
      n.spanRecorder && n.spanRecorder.add(n),
      (n.transaction = this.transaction),
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && n.transaction)
    ) {
      const i = (t && t.op) || "< unknown op >",
        r = n.transaction.name || "< unknown name >",
        a = n.transaction.spanId,
        s = `[Tracing] Starting '${i}' span on transaction '${r}' (${a}).`;
      (n.transaction.metadata.spanMetadata[n.spanId] = { logMessage: s }),
        _.log(s);
    }
    return n;
  }
  setTag(t, n) {
    return (this.tags = { ...this.tags, [t]: n }), this;
  }
  setData(t, n) {
    return (this.data = { ...this.data, [t]: n }), this;
  }
  setStatus(t) {
    return (this.status = t), this;
  }
  setHttpStatus(t) {
    this.setTag("http.status_code", String(t)),
      this.setData("http.response.status_code", t);
    const n = cc(t);
    return n !== "unknown_error" && this.setStatus(n), this;
  }
  isSuccess() {
    return this.status === "ok";
  }
  finish(t) {
    if (
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      this.transaction &&
      this.transaction.spanId !== this.spanId
    ) {
      const { logMessage: n } =
        this.transaction.metadata.spanMetadata[this.spanId];
      n && _.log(n.replace("Starting", "Finishing"));
    }
    this.endTimestamp = typeof t == "number" ? t : Xt();
  }
  toTraceparent() {
    let t = "";
    return (
      this.sampled !== void 0 && (t = this.sampled ? "-1" : "-0"),
      `${this.traceId}-${this.spanId}${t}`
    );
  }
  toContext() {
    return Rt({
      data: this.data,
      description: this.description,
      endTimestamp: this.endTimestamp,
      op: this.op,
      parentSpanId: this.parentSpanId,
      sampled: this.sampled,
      spanId: this.spanId,
      startTimestamp: this.startTimestamp,
      status: this.status,
      tags: this.tags,
      traceId: this.traceId,
    });
  }
  updateWithContext(t) {
    return (
      (this.data = t.data || {}),
      (this.description = t.description),
      (this.endTimestamp = t.endTimestamp),
      (this.op = t.op),
      (this.parentSpanId = t.parentSpanId),
      (this.sampled = t.sampled),
      (this.spanId = t.spanId || this.spanId),
      (this.startTimestamp = t.startTimestamp || this.startTimestamp),
      (this.status = t.status),
      (this.tags = t.tags || {}),
      (this.traceId = t.traceId || this.traceId),
      this
    );
  }
  getTraceContext() {
    return Rt({
      data: Object.keys(this.data).length > 0 ? this.data : void 0,
      description: this.description,
      op: this.op,
      parent_span_id: this.parentSpanId,
      span_id: this.spanId,
      status: this.status,
      tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
      trace_id: this.traceId,
    });
  }
  toJSON() {
    return Rt({
      data: Object.keys(this.data).length > 0 ? this.data : void 0,
      description: this.description,
      op: this.op,
      parent_span_id: this.parentSpanId,
      span_id: this.spanId,
      start_timestamp: this.startTimestamp,
      status: this.status,
      tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
      timestamp: this.endTimestamp,
      trace_id: this.traceId,
    });
  }
}
function cc(e) {
  if (e < 400 && e >= 100) return "ok";
  if (e >= 400 && e < 500)
    switch (e) {
      case 401:
        return "unauthenticated";
      case 403:
        return "permission_denied";
      case 404:
        return "not_found";
      case 409:
        return "already_exists";
      case 413:
        return "failed_precondition";
      case 429:
        return "resource_exhausted";
      default:
        return "invalid_argument";
    }
  if (e >= 500 && e < 600)
    switch (e) {
      case 501:
        return "unimplemented";
      case 503:
        return "unavailable";
      case 504:
        return "deadline_exceeded";
      default:
        return "internal_error";
    }
  return "unknown_error";
}
class se extends At {
  __init() {
    this._measurements = {};
  }
  __init2() {
    this._contexts = {};
  }
  __init3() {
    this._frozenDynamicSamplingContext = void 0;
  }
  constructor(t, n) {
    super(t),
      se.prototype.__init.call(this),
      se.prototype.__init2.call(this),
      se.prototype.__init3.call(this),
      (this._hub = n || w()),
      (this._name = t.name || ""),
      (this.metadata = { source: "custom", ...t.metadata, spanMetadata: {} }),
      (this._trimEnd = t.trimEnd),
      (this.transaction = this);
    const i = this.metadata.dynamicSamplingContext;
    i && (this._frozenDynamicSamplingContext = { ...i });
  }
  get name() {
    return this._name;
  }
  set name(t) {
    this.setName(t);
  }
  setName(t, n = "custom") {
    (this._name = t), (this.metadata.source = n);
  }
  initSpanRecorder(t = 1e3) {
    this.spanRecorder || (this.spanRecorder = new xn(t)),
      this.spanRecorder.add(this);
  }
  setContext(t, n) {
    n === null ? delete this._contexts[t] : (this._contexts[t] = n);
  }
  setMeasurement(t, n, i = "") {
    this._measurements[t] = { value: n, unit: i };
  }
  setMetadata(t) {
    this.metadata = { ...this.metadata, ...t };
  }
  finish(t) {
    if (this.endTimestamp !== void 0) return;
    this.name ||
      ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.warn(
          "Transaction has no name, falling back to `<unlabeled transaction>`."
        ),
      (this.name = "<unlabeled transaction>")),
      super.finish(t);
    const n = this._hub.getClient();
    if (
      (n && n.emit && n.emit("finishTransaction", this), this.sampled !== !0)
    ) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.log(
          "[Tracing] Discarding transaction because its trace was not chosen to be sampled."
        ),
        n && n.recordDroppedEvent("sample_rate", "transaction");
      return;
    }
    const i = this.spanRecorder
      ? this.spanRecorder.spans.filter((o) => o !== this && o.endTimestamp)
      : [];
    this._trimEnd &&
      i.length > 0 &&
      (this.endTimestamp = i.reduce((o, c) =>
        o.endTimestamp && c.endTimestamp
          ? o.endTimestamp > c.endTimestamp
            ? o
            : c
          : o
      ).endTimestamp);
    const r = this.metadata,
      a = {
        contexts: { ...this._contexts, trace: this.getTraceContext() },
        spans: i,
        start_timestamp: this.startTimestamp,
        tags: this.tags,
        timestamp: this.endTimestamp,
        transaction: this.name,
        type: "transaction",
        sdkProcessingMetadata: {
          ...r,
          dynamicSamplingContext: this.getDynamicSamplingContext(),
        },
        ...(r.source && { transaction_info: { source: r.source } }),
      };
    return (
      Object.keys(this._measurements).length > 0 &&
        ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          _.log(
            "[Measurements] Adding measurements to transaction",
            JSON.stringify(this._measurements, void 0, 2)
          ),
        (a.measurements = this._measurements)),
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`),
      this._hub.captureEvent(a)
    );
  }
  toContext() {
    const t = super.toContext();
    return Rt({ ...t, name: this.name, trimEnd: this._trimEnd });
  }
  updateWithContext(t) {
    return (
      super.updateWithContext(t),
      (this.name = t.name || ""),
      (this._trimEnd = t.trimEnd),
      this
    );
  }
  getDynamicSamplingContext() {
    if (this._frozenDynamicSamplingContext)
      return this._frozenDynamicSamplingContext;
    const t = this._hub || w(),
      n = t && t.getClient();
    if (!n) return {};
    const { environment: i, release: r } = n.getOptions() || {},
      { publicKey: a } = n.getDsn() || {},
      s = this.metadata.sampleRate,
      o = s !== void 0 ? s.toString() : void 0,
      { segment: c } = t.getScope().getUser() || {},
      u = this.metadata.source,
      l = u && u !== "url" ? this.name : void 0,
      d = Rt({
        environment: i || xi,
        release: r,
        transaction: l,
        user_segment: c,
        public_key: a,
        trace_id: this.traceId,
        sample_rate: o,
      });
    return n.emit && n.emit("createDsc", d), d;
  }
  setHub(t) {
    this._hub = t;
  }
}
const _n = { idleTimeout: 1e3, finalTimeout: 3e4, heartbeatInterval: 5e3 },
  uc = "finishReason",
  te = [
    "heartbeatFailed",
    "idleTimeout",
    "documentHidden",
    "finalTimeout",
    "externalFinish",
    "cancelled",
  ];
class lc extends xn {
  constructor(t, n, i, r) {
    super(r),
      (this._pushActivity = t),
      (this._popActivity = n),
      (this.transactionSpanId = i);
  }
  add(t) {
    t.spanId !== this.transactionSpanId &&
      ((t.finish = (n) => {
        (t.endTimestamp = typeof n == "number" ? n : Xt()),
          this._popActivity(t.spanId);
      }),
      t.endTimestamp === void 0 && this._pushActivity(t.spanId)),
      super.add(t);
  }
}
class Lt extends se {
  __init() {
    this.activities = {};
  }
  __init2() {
    this._heartbeatCounter = 0;
  }
  __init3() {
    this._finished = !1;
  }
  __init4() {
    this._idleTimeoutCanceledPermanently = !1;
  }
  __init5() {
    this._beforeFinishCallbacks = [];
  }
  __init6() {
    this._finishReason = te[4];
  }
  constructor(
    t,
    n,
    i = _n.idleTimeout,
    r = _n.finalTimeout,
    a = _n.heartbeatInterval,
    s = !1
  ) {
    super(t, n),
      (this._idleHub = n),
      (this._idleTimeout = i),
      (this._finalTimeout = r),
      (this._heartbeatInterval = a),
      (this._onScope = s),
      Lt.prototype.__init.call(this),
      Lt.prototype.__init2.call(this),
      Lt.prototype.__init3.call(this),
      Lt.prototype.__init4.call(this),
      Lt.prototype.__init5.call(this),
      Lt.prototype.__init6.call(this),
      s &&
        ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          _.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`),
        n.configureScope((o) => o.setSpan(this))),
      this._restartIdleTimeout(),
      setTimeout(() => {
        this._finished ||
          (this.setStatus("deadline_exceeded"),
          (this._finishReason = te[3]),
          this.finish());
      }, this._finalTimeout);
  }
  finish(t = Xt()) {
    if (
      ((this._finished = !0),
      (this.activities = {}),
      this.op === "ui.action.click" && this.setTag(uc, this._finishReason),
      this.spanRecorder)
    ) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.log(
          "[Tracing] finishing IdleTransaction",
          new Date(t * 1e3).toISOString(),
          this.op
        );
      for (const n of this._beforeFinishCallbacks) n(this, t);
      (this.spanRecorder.spans = this.spanRecorder.spans.filter((n) => {
        if (n.spanId === this.spanId) return !0;
        n.endTimestamp ||
          ((n.endTimestamp = t),
          n.setStatus("cancelled"),
          (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            _.log(
              "[Tracing] cancelling span since transaction ended early",
              JSON.stringify(n, void 0, 2)
            ));
        const i = n.startTimestamp < t;
        return (
          i ||
            ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
              _.log(
                "[Tracing] discarding Span since it happened after Transaction was finished",
                JSON.stringify(n, void 0, 2)
              )),
          i
        );
      })),
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          _.log("[Tracing] flushing IdleTransaction");
    } else
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.log("[Tracing] No active IdleTransaction");
    if (this._onScope) {
      const n = this._idleHub.getScope();
      n.getTransaction() === this && n.setSpan(void 0);
    }
    return super.finish(t);
  }
  registerBeforeFinishCallback(t) {
    this._beforeFinishCallbacks.push(t);
  }
  initSpanRecorder(t) {
    if (!this.spanRecorder) {
      const n = (r) => {
          this._finished || this._pushActivity(r);
        },
        i = (r) => {
          this._finished || this._popActivity(r);
        };
      (this.spanRecorder = new lc(n, i, this.spanId, t)),
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          _.log("Starting heartbeat"),
        this._pingHeartbeat();
    }
    this.spanRecorder.add(this);
  }
  cancelIdleTimeout(
    t,
    { restartOnChildSpanChange: n } = { restartOnChildSpanChange: !0 }
  ) {
    (this._idleTimeoutCanceledPermanently = n === !1),
      this._idleTimeoutID &&
        (clearTimeout(this._idleTimeoutID),
        (this._idleTimeoutID = void 0),
        Object.keys(this.activities).length === 0 &&
          this._idleTimeoutCanceledPermanently &&
          ((this._finishReason = te[5]), this.finish(t)));
  }
  setFinishReason(t) {
    this._finishReason = t;
  }
  _restartIdleTimeout(t) {
    this.cancelIdleTimeout(),
      (this._idleTimeoutID = setTimeout(() => {
        !this._finished &&
          Object.keys(this.activities).length === 0 &&
          ((this._finishReason = te[1]), this.finish(t));
      }, this._idleTimeout));
  }
  _pushActivity(t) {
    this.cancelIdleTimeout(void 0, {
      restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently,
    }),
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.log(`[Tracing] pushActivity: ${t}`),
      (this.activities[t] = !0),
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.log(
          "[Tracing] new activities count",
          Object.keys(this.activities).length
        );
  }
  _popActivity(t) {
    if (
      (this.activities[t] &&
        ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          _.log(`[Tracing] popActivity ${t}`),
        delete this.activities[t],
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          _.log(
            "[Tracing] new activities count",
            Object.keys(this.activities).length
          )),
      Object.keys(this.activities).length === 0)
    ) {
      const n = Xt();
      this._idleTimeoutCanceledPermanently
        ? ((this._finishReason = te[5]), this.finish(n))
        : this._restartIdleTimeout(n + this._idleTimeout / 1e3);
    }
  }
  _beat() {
    if (this._finished) return;
    const t = Object.keys(this.activities).join("");
    t === this._prevHeartbeatString
      ? this._heartbeatCounter++
      : (this._heartbeatCounter = 1),
      (this._prevHeartbeatString = t),
      this._heartbeatCounter >= 3
        ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            _.log(
              "[Tracing] Transaction finished because of no change for 3 heart beats"
            ),
          this.setStatus("deadline_exceeded"),
          (this._finishReason = te[0]),
          this.finish())
        : this._pingHeartbeat();
  }
  _pingHeartbeat() {
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      _.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),
      setTimeout(() => {
        this._beat();
      }, this._heartbeatInterval);
  }
}
function dc() {
  const t = this.getScope().getSpan();
  return t ? { "sentry-trace": t.toTraceparent() } : {};
}
function ks(e, t, n) {
  if (!An(t)) return (e.sampled = !1), e;
  if (e.sampled !== void 0)
    return e.setMetadata({ sampleRate: Number(e.sampled) }), e;
  let i;
  return (
    typeof t.tracesSampler == "function"
      ? ((i = t.tracesSampler(n)), e.setMetadata({ sampleRate: Number(i) }))
      : n.parentSampled !== void 0
      ? (i = n.parentSampled)
      : typeof t.tracesSampleRate < "u"
      ? ((i = t.tracesSampleRate), e.setMetadata({ sampleRate: Number(i) }))
      : ((i = 1), e.setMetadata({ sampleRate: i })),
    fc(i)
      ? i
        ? ((e.sampled = Math.random() < i),
          e.sampled
            ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
                _.log(`[Tracing] starting ${e.op} transaction - ${e.name}`),
              e)
            : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
                _.log(
                  `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(
                    i
                  )})`
                ),
              e))
        : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            _.log(
              `[Tracing] Discarding transaction because ${
                typeof t.tracesSampler == "function"
                  ? "tracesSampler returned 0 or false"
                  : "a negative sampling decision was inherited or tracesSampleRate is set to 0"
              }`
            ),
          (e.sampled = !1),
          e)
      : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          _.warn(
            "[Tracing] Discarding transaction because of invalid sample rate."
          ),
        (e.sampled = !1),
        e)
  );
}
function fc(e) {
  return is(e) || !(typeof e == "number" || typeof e == "boolean")
    ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.warn(
          `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
            e
          )} of type ${JSON.stringify(typeof e)}.`
        ),
      !1)
    : e < 0 || e > 1
    ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.warn(
          `[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${e}.`
        ),
      !1)
    : !0;
}
function _c(e, t) {
  const n = this.getClient(),
    i = (n && n.getOptions()) || {},
    r = i.instrumenter || "sentry",
    a = e.instrumenter || "sentry";
  r !== a &&
    ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      _.error(`A transaction was started with instrumenter=\`${a}\`, but the SDK is configured with the \`${r}\` instrumenter.
The transaction will not be sampled. Please use the ${r} instrumentation to start transactions.`),
    (e.sampled = !1));
  let s = new se(e, this);
  return (
    (s = ks(s, i, {
      parentSampled: e.parentSampled,
      transactionContext: e,
      ...t,
    })),
    s.sampled && s.initSpanRecorder(i._experiments && i._experiments.maxSpans),
    n && n.emit && n.emit("startTransaction", s),
    s
  );
}
function pr(e, t, n, i, r, a, s) {
  const o = e.getClient(),
    c = (o && o.getOptions()) || {};
  let u = new Lt(t, e, n, i, s, r);
  return (
    (u = ks(u, c, {
      parentSampled: t.parentSampled,
      transactionContext: t,
      ...a,
    })),
    u.sampled && u.initSpanRecorder(c._experiments && c._experiments.maxSpans),
    o && o.emit && o.emit("startTransaction", u),
    u
  );
}
function hc() {
  const e = Ve();
  e.__SENTRY__ &&
    ((e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}),
    e.__SENTRY__.extensions.startTransaction ||
      (e.__SENTRY__.extensions.startTransaction = _c),
    e.__SENTRY__.extensions.traceHeaders ||
      (e.__SENTRY__.extensions.traceHeaders = dc),
    oc());
}
function On(e, t) {
  return w().captureException(e, { captureContext: t });
}
function pc(e) {
  w().configureScope(e);
}
function mc(e, t) {
  w().setContext(e, t);
}
function gc(e) {
  w().withScope(e);
}
const yc = "7";
function Ec(e) {
  const t = e.protocol ? `${e.protocol}:` : "",
    n = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function bc(e) {
  return `${Ec(e)}${e.projectId}/envelope/`;
}
function Sc(e, t) {
  return io({
    sentry_key: e.publicKey,
    sentry_version: yc,
    ...(t && { sentry_client: `${t.name}/${t.version}` }),
  });
}
function wc(e, t = {}) {
  const n = typeof t == "string" ? t : t.tunnel,
    i = typeof t == "string" || !t._metadata ? void 0 : t._metadata.sdk;
  return n || `${bc(e)}?${Sc(e, i)}`;
}
function vc(e, t) {
  return (
    t &&
      ((e.sdk = e.sdk || {}),
      (e.sdk.name = e.sdk.name || t.name),
      (e.sdk.version = e.sdk.version || t.version),
      (e.sdk.integrations = [
        ...(e.sdk.integrations || []),
        ...(t.integrations || []),
      ]),
      (e.sdk.packages = [...(e.sdk.packages || []), ...(t.packages || [])])),
    e
  );
}
function Tc(e, t, n, i) {
  const r = Ai(n),
    a = {
      sent_at: new Date().toISOString(),
      ...(r && { sdk: r }),
      ...(!!i && { dsn: Dn(t) }),
    },
    s =
      "aggregates" in e
        ? [{ type: "sessions" }, e]
        : [{ type: "session" }, e.toJSON()];
  return we(a, [s]);
}
function Rc(e, t, n, i) {
  const r = Ai(n),
    a = e.type && e.type !== "replay_event" ? e.type : "event";
  vc(e, n && n.sdk);
  const s = gs(e, r, i, t);
  return delete e.sdkProcessingMetadata, we(s, [[{ type: a }, e]]);
}
const mr = [];
function kc(e) {
  const t = {};
  return (
    e.forEach((n) => {
      const { name: i } = n,
        r = t[i];
      (r && !r.isDefaultInstance && n.isDefaultInstance) || (t[i] = n);
    }),
    Object.keys(t).map((n) => t[n])
  );
}
function Nc(e) {
  const t = e.defaultIntegrations || [],
    n = e.integrations;
  t.forEach((s) => {
    s.isDefaultInstance = !0;
  });
  let i;
  Array.isArray(n)
    ? (i = [...t, ...n])
    : typeof n == "function"
    ? (i = _s(n(t)))
    : (i = t);
  const r = kc(i),
    a = Ic(r, (s) => s.name === "Debug");
  if (a !== -1) {
    const [s] = r.splice(a, 1);
    r.push(s);
  }
  return r;
}
function Dc(e) {
  const t = {};
  return (
    e.forEach((n) => {
      n && Ns(n, t);
    }),
    t
  );
}
function Ns(e, t) {
  (t[e.name] = e),
    mr.indexOf(e.name) === -1 &&
      (e.setupOnce(qe, w),
      mr.push(e.name),
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.log(`Integration installed: ${e.name}`));
}
function Ic(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n]) === !0) return n;
  return -1;
}
function Ds(e, t, n, i) {
  const { normalizeDepth: r = 3, normalizeMaxBreadth: a = 1e3 } = e,
    s = {
      ...t,
      event_id: t.event_id || n.event_id || Ct(),
      timestamp: t.timestamp || In(),
    },
    o = n.integrations || e.integrations.map((l) => l.name);
  Ac(s, e), Cc(s, o), t.type === void 0 && xc(s, e.stackParser);
  let c = i;
  n.captureContext && (c = Zt.clone(c).update(n.captureContext));
  let u = Kt(s);
  if (c) {
    if (c.getAttachments) {
      const l = [...(n.attachments || []), ...c.getAttachments()];
      l.length && (n.attachments = l);
    }
    u = c.applyToEvent(s, n);
  }
  return u.then(
    (l) => (l && Oc(l), typeof r == "number" && r > 0 ? Uc(l, r, a) : l)
  );
}
function Ac(e, t) {
  const { environment: n, release: i, dist: r, maxValueLength: a = 250 } = t;
  "environment" in e || (e.environment = "environment" in t ? n : xi),
    e.release === void 0 && i !== void 0 && (e.release = i),
    e.dist === void 0 && r !== void 0 && (e.dist = r),
    e.message && (e.message = Ae(e.message, a));
  const s = e.exception && e.exception.values && e.exception.values[0];
  s && s.value && (s.value = Ae(s.value, a));
  const o = e.request;
  o && o.url && (o.url = Ae(o.url, a));
}
const gr = new WeakMap();
function xc(e, t) {
  const n = st._sentryDebugIds;
  if (!n) return;
  let i;
  const r = gr.get(t);
  r ? (i = r) : ((i = new Map()), gr.set(t, i));
  const a = Object.keys(n).reduce((s, o) => {
    let c;
    const u = i.get(o);
    u ? (c = u) : ((c = t(o)), i.set(o, c));
    for (let l = c.length - 1; l >= 0; l--) {
      const d = c[l];
      if (d.filename) {
        s[d.filename] = n[o];
        break;
      }
    }
    return s;
  }, {});
  try {
    e.exception.values.forEach((s) => {
      s.stacktrace.frames.forEach((o) => {
        o.filename && (o.debug_id = a[o.filename]);
      });
    });
  } catch {}
}
function Oc(e) {
  const t = {};
  try {
    e.exception.values.forEach((i) => {
      i.stacktrace.frames.forEach((r) => {
        r.debug_id &&
          (r.abs_path
            ? (t[r.abs_path] = r.debug_id)
            : r.filename && (t[r.filename] = r.debug_id),
          delete r.debug_id);
      });
    });
  } catch {}
  if (Object.keys(t).length === 0) return;
  (e.debug_meta = e.debug_meta || {}),
    (e.debug_meta.images = e.debug_meta.images || []);
  const n = e.debug_meta.images;
  Object.keys(t).forEach((i) => {
    n.push({ type: "sourcemap", code_file: i, debug_id: t[i] });
  });
}
function Cc(e, t) {
  t.length > 0 &&
    ((e.sdk = e.sdk || {}),
    (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]));
}
function Uc(e, t, n) {
  if (!e) return null;
  const i = {
    ...e,
    ...(e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map((r) => ({
        ...r,
        ...(r.data && { data: Tt(r.data, t, n) }),
      })),
    }),
    ...(e.user && { user: Tt(e.user, t, n) }),
    ...(e.contexts && { contexts: Tt(e.contexts, t, n) }),
    ...(e.extra && { extra: Tt(e.extra, t, n) }),
  };
  return (
    e.contexts &&
      e.contexts.trace &&
      i.contexts &&
      ((i.contexts.trace = e.contexts.trace),
      e.contexts.trace.data &&
        (i.contexts.trace.data = Tt(e.contexts.trace.data, t, n))),
    e.spans &&
      (i.spans = e.spans.map(
        (r) => (r.data && (r.data = Tt(r.data, t, n)), r)
      )),
    i
  );
}
const yr = "Not capturing exception because it's already been captured.";
class qt {
  __init() {
    this._integrations = {};
  }
  __init2() {
    this._integrationsInitialized = !1;
  }
  __init3() {
    this._numProcessing = 0;
  }
  __init4() {
    this._outcomes = {};
  }
  __init5() {
    this._hooks = {};
  }
  constructor(t) {
    if (
      (qt.prototype.__init.call(this),
      qt.prototype.__init2.call(this),
      qt.prototype.__init3.call(this),
      qt.prototype.__init4.call(this),
      qt.prototype.__init5.call(this),
      (this._options = t),
      t.dsn
        ? (this._dsn = eo(t.dsn))
        : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          _.warn("No DSN provided, client will not do anything."),
      this._dsn)
    ) {
      const n = wc(this._dsn, t);
      this._transport = t.transport({
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...t.transportOptions,
        url: n,
      });
    }
  }
  captureException(t, n, i) {
    if (cr(t)) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && _.log(yr);
      return;
    }
    let r = n && n.event_id;
    return (
      this._process(
        this.eventFromException(t, n)
          .then((a) => this._captureEvent(a, n, i))
          .then((a) => {
            r = a;
          })
      ),
      r
    );
  }
  captureMessage(t, n, i, r) {
    let a = i && i.event_id;
    const s = ns(t)
      ? this.eventFromMessage(String(t), n, i)
      : this.eventFromException(t, i);
    return (
      this._process(
        s
          .then((o) => this._captureEvent(o, i, r))
          .then((o) => {
            a = o;
          })
      ),
      a
    );
  }
  captureEvent(t, n, i) {
    if (n && n.originalException && cr(n.originalException)) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && _.log(yr);
      return;
    }
    let r = n && n.event_id;
    return (
      this._process(
        this._captureEvent(t, n, i).then((a) => {
          r = a;
        })
      ),
      r
    );
  }
  captureSession(t) {
    if (!this._isEnabled()) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.warn("SDK not enabled, will not capture session.");
      return;
    }
    typeof t.release != "string"
      ? (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.warn("Discarded session because of missing or non-string release")
      : (this.sendSession(t), de(t, { init: !1 }));
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  flush(t) {
    const n = this._transport;
    return n
      ? this._isClientDoneProcessing(t).then((i) =>
          n.flush(t).then((r) => i && r)
        )
      : Kt(!0);
  }
  close(t) {
    return this.flush(t).then((n) => ((this.getOptions().enabled = !1), n));
  }
  setupIntegrations() {
    this._isEnabled() &&
      !this._integrationsInitialized &&
      ((this._integrations = Dc(this._options.integrations)),
      (this._integrationsInitialized = !0));
  }
  getIntegrationById(t) {
    return this._integrations[t];
  }
  getIntegration(t) {
    try {
      return this._integrations[t.id] || null;
    } catch {
      return (
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          _.warn(`Cannot retrieve integration ${t.id} from the current Client`),
        null
      );
    }
  }
  addIntegration(t) {
    Ns(t, this._integrations);
  }
  sendEvent(t, n = {}) {
    if (this._dsn) {
      let i = Rc(t, this._dsn, this._options._metadata, this._options.tunnel);
      for (const a of n.attachments || [])
        i = Mo(
          i,
          Go(
            a,
            this._options.transportOptions &&
              this._options.transportOptions.textEncoder
          )
        );
      const r = this._sendEnvelope(i);
      r && r.then((a) => this.emit("afterSendEvent", t, a), null);
    }
  }
  sendSession(t) {
    if (this._dsn) {
      const n = Tc(t, this._dsn, this._options._metadata, this._options.tunnel);
      this._sendEnvelope(n);
    }
  }
  recordDroppedEvent(t, n, i) {
    if (this._options.sendClientReports) {
      const r = `${t}:${n}`;
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.log(`Adding outcome: "${r}"`),
        (this._outcomes[r] = this._outcomes[r] + 1 || 1);
    }
  }
  on(t, n) {
    this._hooks[t] || (this._hooks[t] = []), this._hooks[t].push(n);
  }
  emit(t, ...n) {
    this._hooks[t] && this._hooks[t].forEach((i) => i(...n));
  }
  _updateSessionFromEvent(t, n) {
    let i = !1,
      r = !1;
    const a = n.exception && n.exception.values;
    if (a) {
      r = !0;
      for (const c of a) {
        const u = c.mechanism;
        if (u && u.handled === !1) {
          i = !0;
          break;
        }
      }
    }
    const s = t.status === "ok";
    ((s && t.errors === 0) || (s && i)) &&
      (de(t, {
        ...(i && { status: "crashed" }),
        errors: t.errors || Number(r || i),
      }),
      this.captureSession(t));
  }
  _isClientDoneProcessing(t) {
    return new it((n) => {
      let i = 0;
      const r = 1,
        a = setInterval(() => {
          this._numProcessing == 0
            ? (clearInterval(a), n(!0))
            : ((i += r), t && i >= t && (clearInterval(a), n(!1)));
        }, r);
    });
  }
  _isEnabled() {
    return this.getOptions().enabled !== !1 && this._dsn !== void 0;
  }
  _prepareEvent(t, n, i) {
    const r = this.getOptions(),
      a = Object.keys(this._integrations);
    return (
      !n.integrations && a.length > 0 && (n.integrations = a), Ds(r, t, n, i)
    );
  }
  _captureEvent(t, n = {}, i) {
    return this._processEvent(t, n, i).then(
      (r) => r.event_id,
      (r) => {
        if (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) {
          const a = r;
          a.logLevel === "log" ? _.log(a.message) : _.warn(a);
        }
      }
    );
  }
  _processEvent(t, n, i) {
    const r = this.getOptions(),
      { sampleRate: a } = r;
    if (!this._isEnabled())
      return yn(new Et("SDK not enabled, will not capture event.", "log"));
    const s = As(t),
      o = Is(t),
      c = t.type || "error",
      u = `before send for type \`${c}\``;
    if (o && typeof a == "number" && Math.random() > a)
      return (
        this.recordDroppedEvent("sample_rate", "error", t),
        yn(
          new Et(
            `Discarding event because it's not included in the random sample (sampling rate = ${a})`,
            "log"
          )
        )
      );
    const l = c === "replay_event" ? "replay" : c;
    return this._prepareEvent(t, n, i)
      .then((d) => {
        if (d === null)
          throw (
            (this.recordDroppedEvent("event_processor", l, t),
            new Et(
              "An event processor returned `null`, will not send event.",
              "log"
            ))
          );
        if (n.data && n.data.__sentry__ === !0) return d;
        const f = Bc(r, d, n);
        return Lc(f, u);
      })
      .then((d) => {
        if (d === null)
          throw (
            (this.recordDroppedEvent("before_send", l, t),
            new Et(`${u} returned \`null\`, will not send event.`, "log"))
          );
        const h = i && i.getSession();
        !s && h && this._updateSessionFromEvent(h, d);
        const f = d.transaction_info;
        if (s && f && d.transaction !== t.transaction) {
          const p = "custom";
          d.transaction_info = { ...f, source: p };
        }
        return this.sendEvent(d, n), d;
      })
      .then(null, (d) => {
        throw d instanceof Et
          ? d
          : (this.captureException(d, {
              data: { __sentry__: !0 },
              originalException: d,
            }),
            new Et(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${d}`));
      });
  }
  _process(t) {
    this._numProcessing++,
      t.then(
        (n) => (this._numProcessing--, n),
        (n) => (this._numProcessing--, n)
      );
  }
  _sendEnvelope(t) {
    if (this._transport && this._dsn)
      return (
        this.emit("beforeEnvelope", t),
        this._transport.send(t).then(null, (n) => {
          (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            _.error("Error while sending event:", n);
        })
      );
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      _.error("Transport disabled");
  }
  _clearOutcomes() {
    const t = this._outcomes;
    return (
      (this._outcomes = {}),
      Object.keys(t).map((n) => {
        const [i, r] = n.split(":");
        return { reason: i, category: r, quantity: t[n] };
      })
    );
  }
}
function Lc(e, t) {
  const n = `${t} must return \`null\` or a valid event.`;
  if (ki(e))
    return e.then(
      (i) => {
        if (!le(i) && i !== null) throw new Et(n);
        return i;
      },
      (i) => {
        throw new Et(`${t} rejected with ${i}`);
      }
    );
  if (!le(e) && e !== null) throw new Et(n);
  return e;
}
function Bc(e, t, n) {
  const { beforeSend: i, beforeSendTransaction: r } = e;
  return Is(t) && i ? i(t, n) : As(t) && r ? r(t, n) : t;
}
function Is(e) {
  return e.type === void 0;
}
function As(e) {
  return e.type === "transaction";
}
function Mc(e, t) {
  t.debug === !0 &&
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
      ? _.enable()
      : console.warn(
          "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
        ));
  const n = w();
  n.getScope().update(t.initialScope);
  const r = new e(t);
  n.bindClient(r);
}
const Pc = 30;
function xs(e, t, n = Ao(e.bufferSize || Pc)) {
  let i = {};
  const r = (s) => n.drain(s);
  function a(s) {
    const o = [];
    if (
      (lr(s, (d, h) => {
        const f = dr(h);
        if (Wo(i, f)) {
          const p = Er(d, h);
          e.recordDroppedEvent("ratelimit_backoff", f, p);
        } else o.push(d);
      }),
      o.length === 0)
    )
      return Kt();
    const c = we(s[0], o),
      u = (d) => {
        lr(c, (h, f) => {
          const p = Er(h, f);
          e.recordDroppedEvent(d, dr(f), p);
        });
      },
      l = () =>
        t({ body: Po(c, e.textEncoder) }).then(
          (d) => (
            d.statusCode !== void 0 &&
              (d.statusCode < 200 || d.statusCode >= 300) &&
              (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
              _.warn(
                `Sentry responded with status code ${d.statusCode} to sent event.`
              ),
            (i = qo(i, d)),
            d
          ),
          (d) => {
            throw (u("network_error"), d);
          }
        );
    return n.add(l).then(
      (d) => d,
      (d) => {
        if (d instanceof Et)
          return (
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
              _.error("Skipped sending event because buffer is full."),
            u("queue_overflow"),
            Kt()
          );
        throw d;
      }
    );
  }
  return (a.__sentry__baseTransport__ = !0), { send: a, flush: r };
}
function Er(e, t) {
  if (!(t !== "event" && t !== "transaction"))
    return Array.isArray(e) ? e[1] : void 0;
}
const fe = "7.57.0";
let br;
class Pe {
  constructor() {
    Pe.prototype.__init.call(this);
  }
  static __initStatic() {
    this.id = "FunctionToString";
  }
  __init() {
    this.name = Pe.id;
  }
  setupOnce() {
    br = Function.prototype.toString;
    try {
      Function.prototype.toString = function (...t) {
        const n = Ii(this) || this;
        return br.apply(n, t);
      };
    } catch {}
  }
}
Pe.__initStatic();
const zc = [
    /^Script error\.?$/,
    /^Javascript error: Script error\.? on line 0$/,
  ],
  Gc = [
    /^.*healthcheck.*$/,
    /^.*healthy.*$/,
    /^.*live.*$/,
    /^.*ready.*$/,
    /^.*heartbeat.*$/,
    /^.*\/health$/,
    /^.*\/healthz$/,
  ];
class ae {
  static __initStatic() {
    this.id = "InboundFilters";
  }
  __init() {
    this.name = ae.id;
  }
  constructor(t = {}) {
    (this._options = t), ae.prototype.__init.call(this);
  }
  setupOnce(t, n) {
    const i = (r) => {
      const a = n();
      if (a) {
        const s = a.getIntegration(ae);
        if (s) {
          const o = a.getClient(),
            c = o ? o.getOptions() : {},
            u = Fc(s._options, c);
          return Yc(r, u) ? null : r;
        }
      }
      return r;
    };
    (i.id = this.name), t(i);
  }
}
ae.__initStatic();
function Fc(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : zc),
    ],
    ignoreTransactions: [
      ...(e.ignoreTransactions || []),
      ...(t.ignoreTransactions || []),
      ...(e.disableTransactionDefaults ? [] : Gc),
    ],
    ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0,
  };
}
function Yc(e, t) {
  return t.ignoreInternal && Vc(e)
    ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.warn(`Event dropped due to being internal Sentry Error.
Event: ${Mt(e)}`),
      !0)
    : $c(e, t.ignoreErrors)
    ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Mt(e)}`),
      !0)
    : Hc(e, t.ignoreTransactions)
    ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Mt(e)}`),
      !0)
    : jc(e, t.denyUrls)
    ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Mt(e)}.
Url: ${En(e)}`),
      !0)
    : Wc(e, t.allowUrls)
    ? !1
    : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Mt(e)}.
Url: ${En(e)}`),
      !0);
}
function $c(e, t) {
  return e.type || !t || !t.length ? !1 : qc(e).some((n) => Se(n, t));
}
function Hc(e, t) {
  if (e.type !== "transaction" || !t || !t.length) return !1;
  const n = e.transaction;
  return n ? Se(n, t) : !1;
}
function jc(e, t) {
  if (!t || !t.length) return !1;
  const n = En(e);
  return n ? Se(n, t) : !1;
}
function Wc(e, t) {
  if (!t || !t.length) return !0;
  const n = En(e);
  return n ? Se(n, t) : !0;
}
function qc(e) {
  if (e.message) return [e.message];
  if (e.exception) {
    const { values: t } = e.exception;
    try {
      const { type: n = "", value: i = "" } = (t && t[t.length - 1]) || {};
      return [`${i}`, `${n}: ${i}`];
    } catch {
      return (
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          _.error(`Cannot extract message for event ${Mt(e)}`),
        []
      );
    }
  }
  return [];
}
function Vc(e) {
  try {
    return e.exception.values[0].type === "SentryError";
  } catch {}
  return !1;
}
function Zc(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    const n = e[t];
    if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]")
      return n.filename || null;
  }
  return null;
}
function En(e) {
  try {
    let t;
    try {
      t = e.exception.values[0].stacktrace.frames;
    } catch {}
    return t ? Zc(t) : null;
  } catch {
    return (
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.error(`Cannot extract url for event ${Mt(e)}`),
      null
    );
  }
}
const D = st;
let ci = 0;
function Os() {
  return ci > 0;
}
function Kc() {
  ci++,
    setTimeout(() => {
      ci--;
    });
}
function _e(e, t = {}, n) {
  if (typeof e != "function") return e;
  try {
    const r = e.__sentry_wrapped__;
    if (r) return r;
    if (Ii(e)) return e;
  } catch {
    return e;
  }
  const i = function () {
    const r = Array.prototype.slice.call(arguments);
    try {
      n && typeof n == "function" && n.apply(this, arguments);
      const a = r.map((s) => _e(s, t));
      return e.apply(this, a);
    } catch (a) {
      throw (
        (Kc(),
        gc((s) => {
          s.addEventProcessor(
            (o) => (
              t.mechanism && (ei(o, void 0, void 0), Me(o, t.mechanism)),
              (o.extra = { ...o.extra, arguments: r }),
              o
            )
          ),
            On(a);
        }),
        a)
      );
    }
  };
  try {
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (i[r] = e[r]);
  } catch {}
  os(i, e), Di(e, "__sentry_wrapped__", i);
  try {
    Object.getOwnPropertyDescriptor(i, "name").configurable &&
      Object.defineProperty(i, "name", {
        get() {
          return e.name;
        },
      });
  } catch {}
  return i;
}
function Cs(e, t) {
  const n = Oi(e, t),
    i = { type: t && t.name, value: tu(t) };
  return (
    n.length && (i.stacktrace = { frames: n }),
    i.type === void 0 &&
      i.value === "" &&
      (i.value = "Unrecoverable error caught"),
    i
  );
}
function Xc(e, t, n, i) {
  const a = w().getClient(),
    s = a && a.getOptions().normalizeDepth,
    o = {
      exception: {
        values: [
          {
            type: Nn(t)
              ? t.constructor.name
              : i
              ? "UnhandledRejection"
              : "Error",
            value: iu(t, { isUnhandledRejection: i }),
          },
        ],
      },
      extra: { __serialized__: ps(t, s) },
    };
  if (n) {
    const c = Oi(e, n);
    c.length && (o.exception.values[0].stacktrace = { frames: c });
  }
  return o;
}
function qn(e, t) {
  return { exception: { values: [Cs(e, t)] } };
}
function Oi(e, t) {
  const n = t.stacktrace || t.stack || "",
    i = Qc(t);
  try {
    return e(n, i);
  } catch {}
  return [];
}
const Jc = /Minified React error #\d+;/i;
function Qc(e) {
  if (e) {
    if (typeof e.framesToPop == "number") return e.framesToPop;
    if (Jc.test(e.message)) return 1;
  }
  return 0;
}
function tu(e) {
  const t = e && e.message;
  return t
    ? t.error && typeof t.error.message == "string"
      ? t.error.message
      : t
    : "No error message";
}
function eu(e, t, n, i) {
  const r = (n && n.syntheticException) || void 0,
    a = Ci(e, t, r, i);
  return (
    Me(a),
    (a.level = "error"),
    n && n.event_id && (a.event_id = n.event_id),
    Kt(a)
  );
}
function nu(e, t, n = "info", i, r) {
  const a = (i && i.syntheticException) || void 0,
    s = ui(e, t, a, r);
  return (s.level = n), i && i.event_id && (s.event_id = i.event_id), Kt(s);
}
function Ci(e, t, n, i, r) {
  let a;
  if (Ri(t) && t.error) return qn(e, t.error);
  if (Qi(t) || $a(t)) {
    const s = t;
    if ("stack" in t) a = qn(e, t);
    else {
      const o = s.name || (Qi(s) ? "DOMError" : "DOMException"),
        c = s.message ? `${o}: ${s.message}` : o;
      (a = ui(e, c, n, i)), ei(a, c);
    }
    return (
      "code" in s && (a.tags = { ...a.tags, "DOMException.code": `${s.code}` }),
      a
    );
  }
  return es(t)
    ? qn(e, t)
    : le(t) || Nn(t)
    ? ((a = Xc(e, t, n, r)), Me(a, { synthetic: !0 }), a)
    : ((a = ui(e, t, n, i)),
      ei(a, `${t}`, void 0),
      Me(a, { synthetic: !0 }),
      a);
}
function ui(e, t, n, i) {
  const r = { message: t };
  if (i && n) {
    const a = Oi(e, n);
    a.length &&
      (r.exception = { values: [{ value: t, stacktrace: { frames: a } }] });
  }
  return r;
}
function iu(e, { isUnhandledRejection: t }) {
  const n = ro(e),
    i = t ? "promise rejection" : "exception";
  return Ri(e)
    ? `Event \`ErrorEvent\` captured as ${i} with message \`${e.message}\``
    : Nn(e)
    ? `Event \`${ru(e)}\` (type=${e.type}) captured as ${i}`
    : `Object captured as ${i} with keys: ${n}`;
}
function ru(e) {
  try {
    const t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : void 0;
  } catch {}
}
const sn = 1024,
  Us = "Breadcrumbs";
class ze {
  static __initStatic() {
    this.id = Us;
  }
  __init() {
    this.name = ze.id;
  }
  constructor(t) {
    ze.prototype.__init.call(this),
      (this.options = {
        console: !0,
        dom: !0,
        fetch: !0,
        history: !0,
        sentry: !0,
        xhr: !0,
        ...t,
      });
  }
  setupOnce() {
    this.options.console && et("console", au),
      this.options.dom && et("dom", su(this.options.dom)),
      this.options.xhr && et("xhr", ou),
      this.options.fetch && et("fetch", cu),
      this.options.history && et("history", uu);
  }
  addSentryBreadcrumb(t) {
    this.options.sentry &&
      w().addBreadcrumb(
        {
          category: `sentry.${
            t.type === "transaction" ? "transaction" : "event"
          }`,
          event_id: t.event_id,
          level: t.level,
          message: Mt(t),
        },
        { event: t }
      );
  }
}
ze.__initStatic();
function su(e) {
  function t(n) {
    let i,
      r = typeof e == "object" ? e.serializeAttribute : void 0,
      a =
        typeof e == "object" && typeof e.maxStringLength == "number"
          ? e.maxStringLength
          : void 0;
    a &&
      a > sn &&
      ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.warn(
          `\`dom.maxStringLength\` cannot exceed ${sn}, but a value of ${a} was configured. Sentry will use ${sn} instead.`
        ),
      (a = sn)),
      typeof r == "string" && (r = [r]);
    try {
      const s = n.event;
      i = lu(s)
        ? Ht(s.target, { keyAttrs: r, maxStringLength: a })
        : Ht(s, { keyAttrs: r, maxStringLength: a });
    } catch {
      i = "<unknown>";
    }
    i.length !== 0 &&
      w().addBreadcrumb(
        { category: `ui.${n.name}`, message: i },
        { event: n.event, name: n.name, global: n.global }
      );
  }
  return t;
}
function au(e) {
  for (let n = 0; n < e.args.length; n++)
    if (e.args[n] === "ref=Ref<") {
      e.args[n + 1] = "viewRef";
      break;
    }
  const t = {
    category: "console",
    data: { arguments: e.args, logger: "console" },
    level: Oo(e.level),
    message: er(e.args, " "),
  };
  if (e.level === "assert")
    if (e.args[0] === !1)
      (t.message = `Assertion failed: ${
        er(e.args.slice(1), " ") || "console.assert"
      }`),
        (t.data.arguments = e.args.slice(1));
    else return;
  w().addBreadcrumb(t, { input: e.args, level: e.level });
}
function ou(e) {
  const { startTimestamp: t, endTimestamp: n } = e,
    i = e.xhr[Pt];
  if (!t || !n || !i) return;
  const { method: r, url: a, status_code: s, body: o } = i,
    c = { method: r, url: a, status_code: s },
    u = { xhr: e.xhr, input: o, startTimestamp: t, endTimestamp: n };
  w().addBreadcrumb({ category: "xhr", data: c, type: "http" }, u);
}
function cu(e) {
  const { startTimestamp: t, endTimestamp: n } = e;
  if (
    n &&
    !(e.fetchData.url.match(/sentry_key/) && e.fetchData.method === "POST")
  )
    if (e.error) {
      const i = e.fetchData,
        r = {
          data: e.error,
          input: e.args,
          startTimestamp: t,
          endTimestamp: n,
        };
      w().addBreadcrumb(
        { category: "fetch", data: i, level: "error", type: "http" },
        r
      );
    } else {
      const i = {
          ...e.fetchData,
          status_code: e.response && e.response.status,
        },
        r = {
          input: e.args,
          response: e.response,
          startTimestamp: t,
          endTimestamp: n,
        };
      w().addBreadcrumb({ category: "fetch", data: i, type: "http" }, r);
    }
}
function uu(e) {
  let t = e.from,
    n = e.to;
  const i = jn(D.location.href);
  let r = jn(t);
  const a = jn(n);
  r.path || (r = i),
    i.protocol === a.protocol && i.host === a.host && (n = a.relative),
    i.protocol === r.protocol && i.host === r.host && (t = r.relative),
    w().addBreadcrumb({ category: "navigation", data: { from: t, to: n } });
}
function lu(e) {
  return !!e && !!e.target;
}
function du(e, { metadata: t, tunnel: n, dsn: i }) {
  const r = {
      event_id: e.event_id,
      sent_at: new Date().toISOString(),
      ...(t && t.sdk && { sdk: { name: t.sdk.name, version: t.sdk.version } }),
      ...(!!n && !!i && { dsn: Dn(i) }),
    },
    a = fu(e);
  return we(r, [a]);
}
function fu(e) {
  return [{ type: "user_report" }, e];
}
class _u extends qt {
  constructor(t) {
    const n = D.SENTRY_SDK_SOURCE || To();
    (t._metadata = t._metadata || {}),
      (t._metadata.sdk = t._metadata.sdk || {
        name: "sentry.javascript.browser",
        packages: [{ name: `${n}:@sentry/browser`, version: fe }],
        version: fe,
      }),
      super(t),
      t.sendClientReports &&
        D.document &&
        D.document.addEventListener("visibilitychange", () => {
          D.document.visibilityState === "hidden" && this._flushOutcomes();
        });
  }
  eventFromException(t, n) {
    return eu(this._options.stackParser, t, n, this._options.attachStacktrace);
  }
  eventFromMessage(t, n = "info", i) {
    return nu(
      this._options.stackParser,
      t,
      n,
      i,
      this._options.attachStacktrace
    );
  }
  sendEvent(t, n) {
    const i = this.getIntegrationById(Us);
    i && i.addSentryBreadcrumb && i.addSentryBreadcrumb(t),
      super.sendEvent(t, n);
  }
  captureUserFeedback(t) {
    if (!this._isEnabled()) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.warn("SDK not enabled, will not capture user feedback.");
      return;
    }
    const n = du(t, {
      metadata: this.getSdkMetadata(),
      dsn: this.getDsn(),
      tunnel: this.getOptions().tunnel,
    });
    this._sendEnvelope(n);
  }
  _prepareEvent(t, n, i) {
    return (
      (t.platform = t.platform || "javascript"), super._prepareEvent(t, n, i)
    );
  }
  _flushOutcomes() {
    const t = this._clearOutcomes();
    if (t.length === 0) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.log("No outcomes to send");
      return;
    }
    if (!this._dsn) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.log("No dsn provided, will not send outcomes");
      return;
    }
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      _.log("Sending outcomes:", t);
    const n = Yo(t, this._options.tunnel && Dn(this._dsn));
    this._sendEnvelope(n);
  }
}
let De;
function hu() {
  if (De) return De;
  if (Qn(D.fetch)) return (De = D.fetch.bind(D));
  const e = D.document;
  let t = D.fetch;
  if (e && typeof e.createElement == "function")
    try {
      const n = e.createElement("iframe");
      (n.hidden = !0), e.head.appendChild(n);
      const i = n.contentWindow;
      i && i.fetch && (t = i.fetch), e.head.removeChild(n);
    } catch (n) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          n
        );
    }
  return (De = t.bind(D));
}
function pu() {
  De = void 0;
}
function mu(e, t = hu()) {
  let n = 0,
    i = 0;
  function r(a) {
    const s = a.body.length;
    (n += s), i++;
    const o = {
      body: a.body,
      method: "POST",
      referrerPolicy: "origin",
      headers: e.headers,
      keepalive: n <= 6e4 && i < 15,
      ...e.fetchOptions,
    };
    try {
      return t(e.url, o).then(
        (c) => (
          (n -= s),
          i--,
          {
            statusCode: c.status,
            headers: {
              "x-sentry-rate-limits": c.headers.get("X-Sentry-Rate-Limits"),
              "retry-after": c.headers.get("Retry-After"),
            },
          }
        )
      );
    } catch (c) {
      return pu(), (n -= s), i--, yn(c);
    }
  }
  return xs(e, r);
}
const gu = 4;
function yu(e) {
  function t(n) {
    return new it((i, r) => {
      const a = new XMLHttpRequest();
      (a.onerror = r),
        (a.onreadystatechange = () => {
          a.readyState === gu &&
            i({
              statusCode: a.status,
              headers: {
                "x-sentry-rate-limits": a.getResponseHeader(
                  "X-Sentry-Rate-Limits"
                ),
                "retry-after": a.getResponseHeader("Retry-After"),
              },
            });
        }),
        a.open("POST", e.url);
      for (const s in e.headers)
        Object.prototype.hasOwnProperty.call(e.headers, s) &&
          a.setRequestHeader(s, e.headers[s]);
      a.send(n.body);
    });
  }
  return xs(e, t);
}
const Cn = "?",
  Eu = 30,
  bu = 40,
  Su = 50;
function Ui(e, t, n, i) {
  const r = { filename: e, function: t, in_app: !0 };
  return n !== void 0 && (r.lineno = n), i !== void 0 && (r.colno = i), r;
}
const wu =
    /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  vu = /\((\S*)(?::(\d+))(?::(\d+))\)/,
  Tu = (e) => {
    const t = wu.exec(e);
    if (t) {
      if (t[2] && t[2].indexOf("eval") === 0) {
        const a = vu.exec(t[2]);
        a && ((t[2] = a[1]), (t[3] = a[2]), (t[4] = a[3]));
      }
      const [i, r] = Ls(t[1] || Cn, t[2]);
      return Ui(r, i, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0);
    }
  },
  Ru = [Eu, Tu],
  ku =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
  Nu = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
  Du = (e) => {
    const t = ku.exec(e);
    if (t) {
      if (t[3] && t[3].indexOf(" > eval") > -1) {
        const a = Nu.exec(t[3]);
        a &&
          ((t[1] = t[1] || "eval"), (t[3] = a[1]), (t[4] = a[2]), (t[5] = ""));
      }
      let i = t[3],
        r = t[1] || Cn;
      return (
        ([r, i] = Ls(r, i)),
        Ui(i, r, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
      );
    }
  },
  Iu = [Su, Du],
  Au =
    /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
  xu = (e) => {
    const t = Au.exec(e);
    return t ? Ui(t[2], t[1] || Cn, +t[3], t[4] ? +t[4] : void 0) : void 0;
  },
  Ou = [bu, xu],
  Cu = [Ru, Iu, Ou],
  Uu = ls(...Cu),
  Ls = (e, t) => {
    const n = e.indexOf("safari-extension") !== -1,
      i = e.indexOf("safari-web-extension") !== -1;
    return n || i
      ? [
          e.indexOf("@") !== -1 ? e.split("@")[0] : Cn,
          n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
        ]
      : [e, t];
  };
class Ft {
  static __initStatic() {
    this.id = "GlobalHandlers";
  }
  __init() {
    this.name = Ft.id;
  }
  __init2() {
    this._installFunc = { onerror: Lu, onunhandledrejection: Bu };
  }
  constructor(t) {
    Ft.prototype.__init.call(this),
      Ft.prototype.__init2.call(this),
      (this._options = { onerror: !0, onunhandledrejection: !0, ...t });
  }
  setupOnce() {
    Error.stackTraceLimit = 50;
    const t = this._options;
    for (const n in t) {
      const i = this._installFunc[n];
      i && t[n] && (zu(n), i(), (this._installFunc[n] = void 0));
    }
  }
}
Ft.__initStatic();
function Lu() {
  et("error", (e) => {
    const [t, n, i] = Ps();
    if (!t.getIntegration(Ft)) return;
    const { msg: r, url: a, line: s, column: o, error: c } = e;
    if (Os() || (c && c.__sentry_own_request__)) return;
    const u =
      c === void 0 && Yt(r)
        ? Pu(r, a, s, o)
        : Bs(Ci(n, c || r, void 0, i, !1), a, s, o);
    (u.level = "error"), Ms(t, c, u, "onerror");
  });
}
function Bu() {
  et("unhandledrejection", (e) => {
    const [t, n, i] = Ps();
    if (!t.getIntegration(Ft)) return;
    let r = e;
    try {
      "reason" in e
        ? (r = e.reason)
        : "detail" in e && "reason" in e.detail && (r = e.detail.reason);
    } catch {}
    if (Os() || (r && r.__sentry_own_request__)) return !0;
    const a = ns(r) ? Mu(r) : Ci(n, r, void 0, i, !0);
    (a.level = "error"), Ms(t, r, a, "onunhandledrejection");
  });
}
function Mu(e) {
  return {
    exception: {
      values: [
        {
          type: "UnhandledRejection",
          value: `Non-Error promise rejection captured with value: ${String(
            e
          )}`,
        },
      ],
    },
  };
}
function Pu(e, t, n, i) {
  const r =
    /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
  let a = Ri(e) ? e.message : e,
    s = "Error";
  const o = a.match(r);
  return (
    o && ((s = o[1]), (a = o[2])),
    Bs({ exception: { values: [{ type: s, value: a }] } }, t, n, i)
  );
}
function Bs(e, t, n, i) {
  const r = (e.exception = e.exception || {}),
    a = (r.values = r.values || []),
    s = (a[0] = a[0] || {}),
    o = (s.stacktrace = s.stacktrace || {}),
    c = (o.frames = o.frames || []),
    u = isNaN(parseInt(i, 10)) ? void 0 : i,
    l = isNaN(parseInt(n, 10)) ? void 0 : n,
    d = Yt(t) && t.length > 0 ? t : Za();
  return (
    c.length === 0 &&
      c.push({ colno: u, filename: d, function: "?", in_app: !0, lineno: l }),
    e
  );
}
function zu(e) {
  (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
    _.log(`Global Handler attached: ${e}`);
}
function Ms(e, t, n, i) {
  Me(n, { handled: !1, type: i }), e.captureEvent(n, { originalException: t });
}
function Ps() {
  const e = w(),
    t = e.getClient(),
    n = (t && t.getOptions()) || {
      stackParser: () => [],
      attachStacktrace: !1,
    };
  return [e, n.stackParser, n.attachStacktrace];
}
const Gu = [
  "EventTarget",
  "Window",
  "Node",
  "ApplicationCache",
  "AudioTrackList",
  "ChannelMergerNode",
  "CryptoOperation",
  "EventSource",
  "FileReader",
  "HTMLUnknownElement",
  "IDBDatabase",
  "IDBRequest",
  "IDBTransaction",
  "KeyOperation",
  "MediaController",
  "MessagePort",
  "ModalWindow",
  "Notification",
  "SVGElementInstance",
  "Screen",
  "TextTrack",
  "TextTrackCue",
  "TextTrackList",
  "WebSocket",
  "WebSocketWorker",
  "Worker",
  "XMLHttpRequest",
  "XMLHttpRequestEventTarget",
  "XMLHttpRequestUpload",
];
class Ge {
  static __initStatic() {
    this.id = "TryCatch";
  }
  __init() {
    this.name = Ge.id;
  }
  constructor(t) {
    Ge.prototype.__init.call(this),
      (this._options = {
        XMLHttpRequest: !0,
        eventTarget: !0,
        requestAnimationFrame: !0,
        setInterval: !0,
        setTimeout: !0,
        ...t,
      });
  }
  setupOnce() {
    this._options.setTimeout && J(D, "setTimeout", Sr),
      this._options.setInterval && J(D, "setInterval", Sr),
      this._options.requestAnimationFrame && J(D, "requestAnimationFrame", Fu),
      this._options.XMLHttpRequest &&
        "XMLHttpRequest" in D &&
        J(XMLHttpRequest.prototype, "send", Yu);
    const t = this._options.eventTarget;
    t && (Array.isArray(t) ? t : Gu).forEach($u);
  }
}
Ge.__initStatic();
function Sr(e) {
  return function (...t) {
    const n = t[0];
    return (
      (t[0] = _e(n, {
        mechanism: {
          data: { function: jt(e) },
          handled: !0,
          type: "instrument",
        },
      })),
      e.apply(this, t)
    );
  };
}
function Fu(e) {
  return function (t) {
    return e.apply(this, [
      _e(t, {
        mechanism: {
          data: { function: "requestAnimationFrame", handler: jt(e) },
          handled: !0,
          type: "instrument",
        },
      }),
    ]);
  };
}
function Yu(e) {
  return function (...t) {
    const n = this;
    return (
      ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((r) => {
        r in n &&
          typeof n[r] == "function" &&
          J(n, r, function (a) {
            const s = {
                mechanism: {
                  data: { function: r, handler: jt(a) },
                  handled: !0,
                  type: "instrument",
                },
              },
              o = Ii(a);
            return o && (s.mechanism.data.handler = jt(o)), _e(a, s);
          });
      }),
      e.apply(this, t)
    );
  };
}
function $u(e) {
  const t = D,
    n = t[e] && t[e].prototype;
  !n ||
    !n.hasOwnProperty ||
    !n.hasOwnProperty("addEventListener") ||
    (J(n, "addEventListener", function (i) {
      return function (r, a, s) {
        try {
          typeof a.handleEvent == "function" &&
            (a.handleEvent = _e(a.handleEvent, {
              mechanism: {
                data: { function: "handleEvent", handler: jt(a), target: e },
                handled: !0,
                type: "instrument",
              },
            }));
        } catch {}
        return i.apply(this, [
          r,
          _e(a, {
            mechanism: {
              data: { function: "addEventListener", handler: jt(a), target: e },
              handled: !0,
              type: "instrument",
            },
          }),
          s,
        ]);
      };
    }),
    J(n, "removeEventListener", function (i) {
      return function (r, a, s) {
        const o = a;
        try {
          const c = o && o.__sentry_wrapped__;
          c && i.call(this, r, c, s);
        } catch {}
        return i.call(this, r, o, s);
      };
    }));
}
const Hu = "cause",
  ju = 5;
class oe {
  static __initStatic() {
    this.id = "LinkedErrors";
  }
  __init() {
    this.name = oe.id;
  }
  constructor(t = {}) {
    oe.prototype.__init.call(this),
      (this._key = t.key || Hu),
      (this._limit = t.limit || ju);
  }
  setupOnce() {
    const t = w().getClient();
    t &&
      qe((n, i) => {
        const r = w().getIntegration(oe);
        return r ? Wu(t.getOptions().stackParser, r._key, r._limit, n, i) : n;
      });
  }
}
oe.__initStatic();
function Wu(e, t, n, i, r) {
  if (
    !i.exception ||
    !i.exception.values ||
    !r ||
    !$t(r.originalException, Error)
  )
    return i;
  const a = zs(e, n, r.originalException, t);
  return (i.exception.values = [...a, ...i.exception.values]), i;
}
function zs(e, t, n, i, r = []) {
  if (!$t(n[i], Error) || r.length + 1 >= t) return r;
  const a = Cs(e, n[i]);
  return zs(e, t, n[i], i, [a, ...r]);
}
class ce {
  constructor() {
    ce.prototype.__init.call(this);
  }
  static __initStatic() {
    this.id = "HttpContext";
  }
  __init() {
    this.name = ce.id;
  }
  setupOnce() {
    qe((t) => {
      if (w().getIntegration(ce)) {
        if (!D.navigator && !D.location && !D.document) return t;
        const n =
            (t.request && t.request.url) || (D.location && D.location.href),
          { referrer: i } = D.document || {},
          { userAgent: r } = D.navigator || {},
          a = {
            ...(t.request && t.request.headers),
            ...(i && { Referer: i }),
            ...(r && { "User-Agent": r }),
          },
          s = { ...t.request, ...(n && { url: n }), headers: a };
        return { ...t, request: s };
      }
      return t;
    });
  }
}
ce.__initStatic();
class ue {
  constructor() {
    ue.prototype.__init.call(this);
  }
  static __initStatic() {
    this.id = "Dedupe";
  }
  __init() {
    this.name = ue.id;
  }
  setupOnce(t, n) {
    const i = (r) => {
      if (r.type) return r;
      const a = n().getIntegration(ue);
      if (a) {
        try {
          if (qu(r, a._previousEvent))
            return (
              (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
                _.warn(
                  "Event dropped due to being a duplicate of previously captured event."
                ),
              null
            );
        } catch {
          return (a._previousEvent = r);
        }
        return (a._previousEvent = r);
      }
      return r;
    };
    (i.id = this.name), t(i);
  }
}
ue.__initStatic();
function qu(e, t) {
  return t ? !!(Vu(e, t) || Zu(e, t)) : !1;
}
function Vu(e, t) {
  const n = e.message,
    i = t.message;
  return !(
    (!n && !i) ||
    (n && !i) ||
    (!n && i) ||
    n !== i ||
    !Fs(e, t) ||
    !Gs(e, t)
  );
}
function Zu(e, t) {
  const n = wr(t),
    i = wr(e);
  return !(
    !n ||
    !i ||
    n.type !== i.type ||
    n.value !== i.value ||
    !Fs(e, t) ||
    !Gs(e, t)
  );
}
function Gs(e, t) {
  let n = vr(e),
    i = vr(t);
  if (!n && !i) return !0;
  if ((n && !i) || (!n && i) || ((n = n), (i = i), i.length !== n.length))
    return !1;
  for (let r = 0; r < i.length; r++) {
    const a = i[r],
      s = n[r];
    if (
      a.filename !== s.filename ||
      a.lineno !== s.lineno ||
      a.colno !== s.colno ||
      a.function !== s.function
    )
      return !1;
  }
  return !0;
}
function Fs(e, t) {
  let n = e.fingerprint,
    i = t.fingerprint;
  if (!n && !i) return !0;
  if ((n && !i) || (!n && i)) return !1;
  (n = n), (i = i);
  try {
    return n.join("") === i.join("");
  } catch {
    return !1;
  }
}
function wr(e) {
  return e.exception && e.exception.values && e.exception.values[0];
}
function vr(e) {
  const t = e.exception;
  if (t)
    try {
      return t.values[0].stacktrace.frames;
    } catch {
      return;
    }
}
const Ku = [
  new ae(),
  new Pe(),
  new Ge(),
  new ze(),
  new Ft(),
  new oe(),
  new ue(),
  new ce(),
];
function Xu(e = {}) {
  e.defaultIntegrations === void 0 && (e.defaultIntegrations = Ku),
    e.release === void 0 &&
      (typeof __SENTRY_RELEASE__ == "string" &&
        (e.release = __SENTRY_RELEASE__),
      D.SENTRY_RELEASE &&
        D.SENTRY_RELEASE.id &&
        (e.release = D.SENTRY_RELEASE.id)),
    e.autoSessionTracking === void 0 && (e.autoSessionTracking = !0),
    e.sendClientReports === void 0 && (e.sendClientReports = !0);
  const t = {
    ...e,
    stackParser: so(e.stackParser || Uu),
    integrations: Nc(e),
    transport: e.transport || (ds() ? mu : yu),
  };
  Mc(_u, t), e.autoSessionTracking && Ju();
}
function Tr(e) {
  e.startSession({ ignoreDuration: !0 }), e.captureSession();
}
function Ju() {
  if (typeof D.document > "u") {
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      _.warn(
        "Session tracking in non-browser environment with @sentry/browser is not supported."
      );
    return;
  }
  const e = w();
  e.captureSession &&
    (Tr(e),
    et("history", ({ from: t, to: n }) => {
      t === void 0 || t === n || Tr(w());
    }));
}
const k = st,
  Li = "sentryReplaySession",
  Qu = "replay_event",
  Bi = "Unable to send Replay",
  tl = 3e5,
  el = 9e5,
  nl = 36e5,
  il = 5e3,
  rl = 5500,
  sl = 6e4,
  al = 5e3,
  ol = 3,
  an = 15e4,
  on = 5e3,
  cl = 3e3,
  ul = 300,
  ll = 1e3,
  Mi = 2e7;
var X;
(function (e) {
  (e[(e.Document = 0)] = "Document"),
    (e[(e.DocumentType = 1)] = "DocumentType"),
    (e[(e.Element = 2)] = "Element"),
    (e[(e.Text = 3)] = "Text"),
    (e[(e.CDATA = 4)] = "CDATA"),
    (e[(e.Comment = 5)] = "Comment");
})(X || (X = {}));
function dl(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Oe(e) {
  const t = e == null ? void 0 : e.host;
  return !!(t && t.shadowRoot && t.shadowRoot === e);
}
function Ys({ maskInputOptions: e, tagName: t, type: n }) {
  t.toLowerCase() === "option" && (t = "select");
  const i = typeof n == "string" ? n.toLowerCase() : void 0;
  return (
    e[t.toLowerCase()] ||
    (i && e[i]) ||
    i === "password" ||
    (t === "input" && !n && e.text)
  );
}
function fl({
  tagName: e,
  type: t,
  maskInputOptions: n,
  maskInputSelector: i,
}) {
  return i || Ys({ maskInputOptions: n, tagName: e, type: t });
}
function Fe({
  input: e,
  maskInputSelector: t,
  unmaskInputSelector: n,
  maskInputOptions: i,
  tagName: r,
  type: a,
  value: s,
  maskInputFn: o,
}) {
  let c = s || "";
  return (
    (n && e.matches(n)) ||
      (e.hasAttribute("data-rr-is-password") && (a = "password"),
      (Ys({ maskInputOptions: i, tagName: r, type: a }) ||
        (t && e.matches(t))) &&
        (o ? (c = o(c)) : (c = "*".repeat(c.length)))),
    c
  );
}
const Rr = "__rrweb_original__";
function _l(e) {
  const t = e.getContext("2d");
  if (!t) return !0;
  const n = 50;
  for (let i = 0; i < e.width; i += n)
    for (let r = 0; r < e.height; r += n) {
      const a = t.getImageData,
        s = Rr in a ? a[Rr] : a;
      if (
        new Uint32Array(
          s.call(
            t,
            i,
            r,
            Math.min(n, e.width - i),
            Math.min(n, e.height - r)
          ).data.buffer
        ).some((c) => c !== 0)
      )
        return !1;
    }
  return !0;
}
function $s(e) {
  const t = e.type;
  return e.hasAttribute("data-rr-is-password")
    ? "password"
    : t
    ? t.toLowerCase()
    : null;
}
function li(e, t, n) {
  return (
    typeof n == "string" && n.toLowerCase(),
    t === "INPUT" && (n === "radio" || n === "checkbox")
      ? e.getAttribute("value") || ""
      : e.value
  );
}
let hl = 1;
const pl = new RegExp("[^a-z0-9-_:]"),
  Ye = -2;
function Hs(e) {
  return e ? e.replace(/[\S]/g, "*") : "";
}
function ml() {
  return hl++;
}
function gl(e) {
  if (e instanceof HTMLFormElement) return "form";
  const t = e.tagName.toLowerCase().trim();
  return pl.test(t) ? "div" : t;
}
function di(e) {
  try {
    const t = e.rules || e.cssRules;
    return t ? Array.from(t).map(yl).join("") : null;
  } catch {
    return null;
  }
}
function yl(e) {
  let t = e.cssText;
  if (El(e))
    try {
      t = di(e.styleSheet) || t;
    } catch {}
  return js(t);
}
function js(e) {
  if (e.indexOf(":") > -1) {
    const t = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
    return e.replace(t, "$1\\$2");
  }
  return e;
}
function El(e) {
  return "styleSheet" in e;
}
function bl(e) {
  return e.cssRules
    ? Array.from(e.cssRules)
        .map((t) => (t.cssText ? js(t.cssText) : ""))
        .join("")
    : "";
}
function Sl(e) {
  let t = "";
  return (
    e.indexOf("//") > -1
      ? (t = e.split("/").slice(0, 3).join("/"))
      : (t = e.split("/")[0]),
    (t = t.split("?")[0]),
    t
  );
}
let ee, kr;
const wl = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
  vl = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/,
  Tl = /^(data:)([^,]*),(.*)/i;
function hn(e, t) {
  return (e || "").replace(wl, (n, i, r, a, s, o) => {
    const c = r || s || o,
      u = i || a || "";
    if (!c) return n;
    if (!vl.test(c)) return `url(${u}${c}${u})`;
    if (Tl.test(c)) return `url(${u}${c}${u})`;
    if (c[0] === "/") return `url(${u}${Sl(t) + c}${u})`;
    const l = t.split("/"),
      d = c.split("/");
    l.pop();
    for (const h of d) h !== "." && (h === ".." ? l.pop() : l.push(h));
    return `url(${u}${l.join("/")}${u})`;
  });
}
const Rl = /^[^ \t\n\r\u000c]+/,
  kl = /^[, \t\n\r\u000c]+/;
function Nl(e, t) {
  if (t.trim() === "") return t;
  let n = 0;
  function i(a) {
    let s,
      o = a.exec(t.substring(n));
    return o ? ((s = o[0]), (n += s.length), s) : "";
  }
  let r = [];
  for (; i(kl), !(n >= t.length); ) {
    let a = i(Rl);
    if (a.slice(-1) === ",")
      (a = ie(e, a.substring(0, a.length - 1))), r.push(a);
    else {
      let s = "";
      a = ie(e, a);
      let o = !1;
      for (;;) {
        let c = t.charAt(n);
        if (c === "") {
          r.push((a + s).trim());
          break;
        } else if (o) c === ")" && (o = !1);
        else if (c === ",") {
          (n += 1), r.push((a + s).trim());
          break;
        } else c === "(" && (o = !0);
        (s += c), (n += 1);
      }
    }
  }
  return r.join(", ");
}
function ie(e, t) {
  if (!t || t.trim() === "") return t;
  const n = e.createElement("a");
  return (n.href = t), n.href;
}
function Dl(e) {
  return !!(e.tagName === "svg" || e.ownerSVGElement);
}
function fi() {
  const e = document.createElement("a");
  return (e.href = ""), e.href;
}
function Ws(e, t, n, i, r, a, s, o) {
  if (!r) return r;
  const c = i.toLowerCase(),
    u = n.toLowerCase();
  return c === "src" ||
    c === "href" ||
    (c === "xlink:href" && r[0] !== "#") ||
    (c === "background" && (u === "table" || u === "td" || u === "th"))
    ? ie(e, r)
    : c === "srcset"
    ? Nl(e, r)
    : c === "style"
    ? hn(r, fi())
    : u === "object" && c === "data"
    ? ie(e, r)
    : a && Il(t, c, u, s)
    ? o
      ? o(r)
      : Hs(r)
    : r;
}
function Il(e, t, n, i) {
  return i && e.matches(i)
    ? !1
    : ["placeholder", "title", "aria-label"].indexOf(t) > -1 ||
        (n === "input" &&
          t === "value" &&
          e.hasAttribute("type") &&
          ["submit", "button"].indexOf(e.getAttribute("type").toLowerCase()) >
            -1);
}
function Al(e, t, n, i) {
  if (i && e.matches(i)) return !1;
  if (typeof t == "string") {
    if (e.classList.contains(t)) return !0;
  } else
    for (let r = 0; r < e.classList.length; r++) {
      const a = e.classList[r];
      if (t.test(a)) return !0;
    }
  return n ? e.matches(n) : !1;
}
function bn(e, t, n, i, r) {
  if (!e) return !1;
  if (e.nodeType !== e.ELEMENT_NODE) return bn(e.parentNode, t, n, i, r);
  if (i && (e.matches(i) || e.closest(i))) return !1;
  if (r) return !0;
  if (typeof t == "string") {
    if (e.classList.contains(t)) return !0;
  } else
    for (let a = 0; a < e.classList.length; a++) {
      const s = e.classList[a];
      if (t.test(s)) return !0;
    }
  return n && e.matches(n) ? !0 : bn(e.parentNode, t, n, i, r);
}
function xl(e, t, n) {
  const i = e.contentWindow;
  if (!i) return;
  let r = !1,
    a;
  try {
    a = i.document.readyState;
  } catch {
    return;
  }
  if (a !== "complete") {
    const o = setTimeout(() => {
      r || (t(), (r = !0));
    }, n);
    e.addEventListener("load", () => {
      clearTimeout(o), (r = !0), t();
    });
    return;
  }
  const s = "about:blank";
  if (i.location.href !== s || e.src === s || e.src === "") {
    setTimeout(t, 0);
    return;
  }
  e.addEventListener("load", t);
}
function Ol(e, t) {
  var n;
  const {
    doc: i,
    blockClass: r,
    blockSelector: a,
    unblockSelector: s,
    maskTextClass: o,
    maskTextSelector: c,
    unmaskTextSelector: u,
    inlineStylesheet: l,
    maskInputSelector: d,
    unmaskInputSelector: h,
    maskAllText: f,
    maskInputOptions: p = {},
    maskTextFn: b,
    maskInputFn: v,
    dataURLOptions: E = {},
    inlineImages: O,
    recordCanvas: x,
    keepIframeSrcFn: N,
  } = t;
  let S;
  if (i.__sn) {
    const m = i.__sn.id;
    S = m === 1 ? void 0 : m;
  }
  switch (e.nodeType) {
    case e.DOCUMENT_NODE:
      return e.compatMode !== "CSS1Compat"
        ? {
            type: X.Document,
            childNodes: [],
            compatMode: e.compatMode,
            rootId: S,
          }
        : { type: X.Document, childNodes: [], rootId: S };
    case e.DOCUMENT_TYPE_NODE:
      return {
        type: X.DocumentType,
        name: e.name,
        publicId: e.publicId,
        systemId: e.systemId,
        rootId: S,
      };
    case e.ELEMENT_NODE:
      const m = Al(e, r, a, s),
        T = gl(e);
      let y = {};
      for (const { name: g, value: U } of Array.from(e.attributes))
        Ll(T, g) || (y[g] = Ws(i, e, T, g, U, f, u, b));
      if (T === "link" && l) {
        const g = Array.from(i.styleSheets).find(($) => $.href === e.href);
        let U = null;
        g && (U = di(g)),
          U && (delete y.rel, delete y.href, (y._cssText = hn(U, g.href)));
      }
      if (
        T === "style" &&
        e.sheet &&
        !(e.innerText || e.textContent || "").trim().length
      ) {
        const g = di(e.sheet);
        g && (y._cssText = hn(g, fi()));
      }
      if (
        T === "input" ||
        T === "textarea" ||
        T === "select" ||
        T === "option"
      ) {
        const g = e,
          U = $s(g),
          $ = li(g, T.toUpperCase(), U),
          nt = e.checked;
        U !== "submit" &&
          U !== "button" &&
          $ &&
          (y.value = Fe({
            input: g,
            type: U,
            tagName: T,
            value: $,
            maskInputSelector: d,
            unmaskInputSelector: h,
            maskInputOptions: p,
            maskInputFn: v,
          })),
          nt && (y.checked = nt);
      }
      if (
        (T === "option" &&
          (e.selected && !p.select ? (y.selected = !0) : delete y.selected),
        T === "canvas" && x)
      ) {
        if (e.__context === "2d")
          _l(e) || (y.rr_dataURL = e.toDataURL(E.type, E.quality));
        else if (!("__context" in e)) {
          const g = e.toDataURL(E.type, E.quality),
            U = document.createElement("canvas");
          (U.width = e.width), (U.height = e.height);
          const $ = U.toDataURL(E.type, E.quality);
          g !== $ && (y.rr_dataURL = g);
        }
      }
      if (T === "img" && O) {
        ee || ((ee = i.createElement("canvas")), (kr = ee.getContext("2d")));
        const g = e,
          U = g.crossOrigin;
        g.crossOrigin = "anonymous";
        const $ = () => {
          try {
            (ee.width = g.naturalWidth),
              (ee.height = g.naturalHeight),
              kr.drawImage(g, 0, 0),
              (y.rr_dataURL = ee.toDataURL(E.type, E.quality));
          } catch (nt) {
            console.warn(`Cannot inline img src=${g.currentSrc}! Error: ${nt}`);
          }
          U ? (y.crossOrigin = U) : delete y.crossOrigin;
        };
        g.complete && g.naturalWidth !== 0 ? $() : (g.onload = $);
      }
      if (
        ((T === "audio" || T === "video") &&
          ((y.rr_mediaState = e.paused ? "paused" : "played"),
          (y.rr_mediaCurrentTime = e.currentTime)),
        e.scrollLeft && (y.rr_scrollLeft = e.scrollLeft),
        e.scrollTop && (y.rr_scrollTop = e.scrollTop),
        m)
      ) {
        const { width: g, height: U } = e.getBoundingClientRect();
        y = { class: y.class, rr_width: `${g}px`, rr_height: `${U}px` };
      }
      return (
        T === "iframe" &&
          !N(y.src) &&
          (e.contentDocument || (y.rr_src = y.src), delete y.src),
        {
          type: X.Element,
          tagName: T,
          attributes: y,
          childNodes: [],
          isSVG: Dl(e) || void 0,
          needBlock: m,
          rootId: S,
        }
      );
    case e.TEXT_NODE:
      const M = e.parentNode && e.parentNode.tagName;
      let C = e.textContent;
      const Y = M === "STYLE" ? !0 : void 0,
        K = M === "SCRIPT" ? !0 : void 0;
      if (Y && C) {
        try {
          e.nextSibling ||
            e.previousSibling ||
            (!((n = e.parentNode.sheet) === null || n === void 0) &&
              n.cssRules &&
              (C = bl(e.parentNode.sheet)));
        } catch (g) {
          console.warn(
            `Cannot get CSS styles from text's parentNode. Error: ${g}`,
            e
          );
        }
        C = hn(C, fi());
      }
      if ((K && (C = "SCRIPT_PLACEHOLDER"), M === "TEXTAREA" && C)) C = "";
      else if (M === "OPTION" && C) {
        const g = e.parentNode;
        C = Fe({
          input: g,
          type: null,
          tagName: M,
          value: C,
          maskInputSelector: d,
          unmaskInputSelector: h,
          maskInputOptions: p,
          maskInputFn: v,
        });
      } else !Y && !K && bn(e, o, c, u, f) && C && (C = b ? b(C) : Hs(C));
      return { type: X.Text, textContent: C || "", isStyle: Y, rootId: S };
    case e.CDATA_SECTION_NODE:
      return { type: X.CDATA, textContent: "", rootId: S };
    case e.COMMENT_NODE:
      return { type: X.Comment, textContent: e.textContent || "", rootId: S };
    default:
      return !1;
  }
}
function P(e) {
  return e == null ? "" : e.toLowerCase();
}
function Cl(e, t) {
  if (t.comment && e.type === X.Comment) return !0;
  if (e.type === X.Element) {
    if (
      t.script &&
      (e.tagName === "script" ||
        (e.tagName === "link" &&
          (e.attributes.rel === "preload" ||
            e.attributes.rel === "modulepreload") &&
          e.attributes.as === "script") ||
        (e.tagName === "link" &&
          e.attributes.rel === "prefetch" &&
          typeof e.attributes.href == "string" &&
          e.attributes.href.endsWith(".js")))
    )
      return !0;
    if (
      t.headFavicon &&
      ((e.tagName === "link" && e.attributes.rel === "shortcut icon") ||
        (e.tagName === "meta" &&
          (P(e.attributes.name).match(/^msapplication-tile(image|color)$/) ||
            P(e.attributes.name) === "application-name" ||
            P(e.attributes.rel) === "icon" ||
            P(e.attributes.rel) === "apple-touch-icon" ||
            P(e.attributes.rel) === "shortcut icon")))
    )
      return !0;
    if (e.tagName === "meta") {
      if (
        t.headMetaDescKeywords &&
        P(e.attributes.name).match(/^description|keywords$/)
      )
        return !0;
      if (
        t.headMetaSocial &&
        (P(e.attributes.property).match(/^(og|twitter|fb):/) ||
          P(e.attributes.name).match(/^(og|twitter):/) ||
          P(e.attributes.name) === "pinterest")
      )
        return !0;
      if (
        t.headMetaRobots &&
        (P(e.attributes.name) === "robots" ||
          P(e.attributes.name) === "googlebot" ||
          P(e.attributes.name) === "bingbot")
      )
        return !0;
      if (t.headMetaHttpEquiv && e.attributes["http-equiv"] !== void 0)
        return !0;
      if (
        t.headMetaAuthorship &&
        (P(e.attributes.name) === "author" ||
          P(e.attributes.name) === "generator" ||
          P(e.attributes.name) === "framework" ||
          P(e.attributes.name) === "publisher" ||
          P(e.attributes.name) === "progid" ||
          P(e.attributes.property).match(/^article:/) ||
          P(e.attributes.property).match(/^product:/))
      )
        return !0;
      if (
        t.headMetaVerification &&
        (P(e.attributes.name) === "google-site-verification" ||
          P(e.attributes.name) === "yandex-verification" ||
          P(e.attributes.name) === "csrf-token" ||
          P(e.attributes.name) === "p:domain_verify" ||
          P(e.attributes.name) === "verify-v1" ||
          P(e.attributes.name) === "verification" ||
          P(e.attributes.name) === "shopify-checkout-api-token")
      )
        return !0;
    }
  }
  return !1;
}
function Ce(e, t) {
  const {
    doc: n,
    map: i,
    blockClass: r,
    blockSelector: a,
    unblockSelector: s,
    maskTextClass: o,
    maskTextSelector: c,
    unmaskTextSelector: u,
    skipChild: l = !1,
    inlineStylesheet: d = !0,
    maskInputSelector: h,
    unmaskInputSelector: f,
    maskAllText: p,
    maskInputOptions: b = {},
    maskTextFn: v,
    maskInputFn: E,
    slimDOMOptions: O,
    dataURLOptions: x = {},
    inlineImages: N = !1,
    recordCanvas: S = !1,
    onSerialize: m,
    onIframeLoad: T,
    iframeLoadTimeout: y = 5e3,
    keepIframeSrcFn: M = () => !1,
  } = t;
  let { preserveWhiteSpace: C = !0 } = t;
  const Y = Ol(e, {
    doc: n,
    blockClass: r,
    blockSelector: a,
    unblockSelector: s,
    maskTextClass: o,
    maskTextSelector: c,
    unmaskTextSelector: u,
    inlineStylesheet: d,
    maskInputSelector: h,
    unmaskInputSelector: f,
    maskAllText: p,
    maskInputOptions: b,
    maskTextFn: v,
    maskInputFn: E,
    dataURLOptions: x,
    inlineImages: N,
    recordCanvas: S,
    keepIframeSrcFn: M,
  });
  if (!Y) return console.warn(e, "not serialized"), null;
  let K;
  "__sn" in e
    ? (K = e.__sn.id)
    : Cl(Y, O) ||
      (!C &&
        Y.type === X.Text &&
        !Y.isStyle &&
        !Y.textContent.replace(/^\s+|\s+$/gm, "").length)
    ? (K = Ye)
    : (K = ml());
  const g = Object.assign(Y, { id: K });
  if (((e.__sn = g), K === Ye)) return null;
  (i[K] = e), m && m(e);
  let U = !l;
  if (
    (g.type === X.Element &&
      ((U = U && !g.needBlock),
      delete g.needBlock,
      e.shadowRoot && (g.isShadowHost = !0)),
    (g.type === X.Document || g.type === X.Element) && U)
  ) {
    O.headWhitespace &&
      Y.type === X.Element &&
      Y.tagName === "head" &&
      (C = !1);
    const $ = {
      doc: n,
      map: i,
      blockClass: r,
      blockSelector: a,
      unblockSelector: s,
      maskTextClass: o,
      maskTextSelector: c,
      unmaskTextSelector: u,
      skipChild: l,
      inlineStylesheet: d,
      maskInputSelector: h,
      unmaskInputSelector: f,
      maskAllText: p,
      maskInputOptions: b,
      maskTextFn: v,
      maskInputFn: E,
      slimDOMOptions: O,
      dataURLOptions: x,
      inlineImages: N,
      recordCanvas: S,
      preserveWhiteSpace: C,
      onSerialize: m,
      onIframeLoad: T,
      iframeLoadTimeout: y,
      keepIframeSrcFn: M,
    };
    for (const nt of Array.from(e.childNodes)) {
      const St = Ce(nt, $);
      St && g.childNodes.push(St);
    }
    if (dl(e) && e.shadowRoot)
      for (const nt of Array.from(e.shadowRoot.childNodes)) {
        const St = Ce(nt, $);
        St && ((St.isShadow = !0), g.childNodes.push(St));
      }
  }
  return (
    e.parentNode && Oe(e.parentNode) && (g.isShadow = !0),
    g.type === X.Element &&
      g.tagName === "iframe" &&
      xl(
        e,
        () => {
          const $ = e.contentDocument;
          if ($ && T) {
            const nt = Ce($, {
              doc: $,
              map: i,
              blockClass: r,
              blockSelector: a,
              unblockSelector: s,
              maskTextClass: o,
              maskTextSelector: c,
              unmaskTextSelector: u,
              skipChild: !1,
              inlineStylesheet: d,
              maskInputSelector: h,
              unmaskInputSelector: f,
              maskAllText: p,
              maskInputOptions: b,
              maskTextFn: v,
              maskInputFn: E,
              slimDOMOptions: O,
              dataURLOptions: x,
              inlineImages: N,
              recordCanvas: S,
              preserveWhiteSpace: C,
              onSerialize: m,
              onIframeLoad: T,
              iframeLoadTimeout: y,
              keepIframeSrcFn: M,
            });
            nt && T(e, nt);
          }
        },
        y
      ),
    g
  );
}
function Ul(e, t) {
  const {
      blockClass: n = "rr-block",
      blockSelector: i = null,
      unblockSelector: r = null,
      maskTextClass: a = "rr-mask",
      maskTextSelector: s = null,
      unmaskTextSelector: o = null,
      inlineStylesheet: c = !0,
      inlineImages: u = !1,
      recordCanvas: l = !1,
      maskInputSelector: d = null,
      unmaskInputSelector: h = null,
      maskAllText: f = !1,
      maskAllInputs: p = !1,
      maskTextFn: b,
      maskInputFn: v,
      slimDOM: E = !1,
      dataURLOptions: O,
      preserveWhiteSpace: x,
      onSerialize: N,
      onIframeLoad: S,
      iframeLoadTimeout: m,
      keepIframeSrcFn: T = () => !1,
    } = t || {},
    y = {};
  return [
    Ce(e, {
      doc: e,
      map: y,
      blockClass: n,
      blockSelector: i,
      unblockSelector: r,
      maskTextClass: a,
      maskTextSelector: s,
      unmaskTextSelector: o,
      skipChild: !1,
      inlineStylesheet: c,
      maskInputSelector: d,
      unmaskInputSelector: h,
      maskAllText: f,
      maskInputOptions:
        p === !0
          ? {
              color: !0,
              date: !0,
              "datetime-local": !0,
              email: !0,
              month: !0,
              number: !0,
              range: !0,
              search: !0,
              tel: !0,
              text: !0,
              time: !0,
              url: !0,
              week: !0,
              textarea: !0,
              select: !0,
            }
          : p === !1
          ? {}
          : p,
      maskTextFn: b,
      maskInputFn: v,
      slimDOMOptions:
        E === !0 || E === "all"
          ? {
              script: !0,
              comment: !0,
              headFavicon: !0,
              headWhitespace: !0,
              headMetaDescKeywords: E === "all",
              headMetaSocial: !0,
              headMetaRobots: !0,
              headMetaHttpEquiv: !0,
              headMetaAuthorship: !0,
              headMetaVerification: !0,
            }
          : E === !1
          ? {}
          : E,
      dataURLOptions: O,
      inlineImages: u,
      recordCanvas: l,
      preserveWhiteSpace: x,
      onSerialize: N,
      onIframeLoad: S,
      iframeLoadTimeout: m,
      keepIframeSrcFn: T,
    }),
    y,
  ];
}
function Ll(e, t, n) {
  return (e === "video" || e === "audio") && t === "autoplay";
}
var L;
(function (e) {
  (e[(e.DomContentLoaded = 0)] = "DomContentLoaded"),
    (e[(e.Load = 1)] = "Load"),
    (e[(e.FullSnapshot = 2)] = "FullSnapshot"),
    (e[(e.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
    (e[(e.Meta = 4)] = "Meta"),
    (e[(e.Custom = 5)] = "Custom"),
    (e[(e.Plugin = 6)] = "Plugin");
})(L || (L = {}));
var tt;
(function (e) {
  (e[(e.Mutation = 0)] = "Mutation"),
    (e[(e.MouseMove = 1)] = "MouseMove"),
    (e[(e.MouseInteraction = 2)] = "MouseInteraction"),
    (e[(e.Scroll = 3)] = "Scroll"),
    (e[(e.ViewportResize = 4)] = "ViewportResize"),
    (e[(e.Input = 5)] = "Input"),
    (e[(e.TouchMove = 6)] = "TouchMove"),
    (e[(e.MediaInteraction = 7)] = "MediaInteraction"),
    (e[(e.StyleSheetRule = 8)] = "StyleSheetRule"),
    (e[(e.CanvasMutation = 9)] = "CanvasMutation"),
    (e[(e.Font = 10)] = "Font"),
    (e[(e.Log = 11)] = "Log"),
    (e[(e.Drag = 12)] = "Drag"),
    (e[(e.StyleDeclaration = 13)] = "StyleDeclaration");
})(tt || (tt = {}));
var Sn;
(function (e) {
  (e[(e.MouseUp = 0)] = "MouseUp"),
    (e[(e.MouseDown = 1)] = "MouseDown"),
    (e[(e.Click = 2)] = "Click"),
    (e[(e.ContextMenu = 3)] = "ContextMenu"),
    (e[(e.DblClick = 4)] = "DblClick"),
    (e[(e.Focus = 5)] = "Focus"),
    (e[(e.Blur = 6)] = "Blur"),
    (e[(e.TouchStart = 7)] = "TouchStart"),
    (e[(e.TouchMove_Departed = 8)] = "TouchMove_Departed"),
    (e[(e.TouchEnd = 9)] = "TouchEnd"),
    (e[(e.TouchCancel = 10)] = "TouchCancel");
})(Sn || (Sn = {}));
var he;
(function (e) {
  (e[(e["2D"] = 0)] = "2D"),
    (e[(e.WebGL = 1)] = "WebGL"),
    (e[(e.WebGL2 = 2)] = "WebGL2");
})(he || (he = {}));
var Nr;
(function (e) {
  (e[(e.Play = 0)] = "Play"),
    (e[(e.Pause = 1)] = "Pause"),
    (e[(e.Seeked = 2)] = "Seeked"),
    (e[(e.VolumeChange = 3)] = "VolumeChange");
})(Nr || (Nr = {}));
var Dr;
(function (e) {
  (e.Start = "start"),
    (e.Pause = "pause"),
    (e.Resume = "resume"),
    (e.Resize = "resize"),
    (e.Finish = "finish"),
    (e.FullsnapshotRebuilded = "fullsnapshot-rebuilded"),
    (e.LoadStylesheetStart = "load-stylesheet-start"),
    (e.LoadStylesheetEnd = "load-stylesheet-end"),
    (e.SkipStart = "skip-start"),
    (e.SkipEnd = "skip-end"),
    (e.MouseInteraction = "mouse-interaction"),
    (e.EventCast = "event-cast"),
    (e.CustomEvent = "custom-event"),
    (e.Flush = "flush"),
    (e.StateChange = "state-change"),
    (e.PlayBack = "play-back");
})(Dr || (Dr = {}));
function _t(e, t, n = document) {
  const i = { capture: !0, passive: !0 };
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function Bl() {
  return {
    map: {},
    getId(e) {
      return !e || !e.__sn ? -1 : e.__sn.id;
    },
    getNode(e) {
      return this.map[e] || null;
    },
    removeNodeFromMap(e) {
      const t = e.__sn && e.__sn.id;
      delete this.map[t],
        e.childNodes && e.childNodes.forEach((n) => this.removeNodeFromMap(n));
    },
    has(e) {
      return this.map.hasOwnProperty(e);
    },
    reset() {
      this.map = {};
    },
  };
}
const ne = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`;
let Ir = {
  map: {},
  getId() {
    return console.error(ne), -1;
  },
  getNode() {
    return console.error(ne), null;
  },
  removeNodeFromMap() {
    console.error(ne);
  },
  has() {
    return console.error(ne), !1;
  },
  reset() {
    console.error(ne);
  },
};
typeof window < "u" &&
  window.Proxy &&
  window.Reflect &&
  (Ir = new Proxy(Ir, {
    get(e, t, n) {
      return t === "map" && console.error(ne), Reflect.get(e, t, n);
    },
  }));
function $e(e, t, n = {}) {
  let i = null,
    r = 0;
  return function (a) {
    let s = Date.now();
    !r && n.leading === !1 && (r = s);
    let o = t - (s - r),
      c = this,
      u = arguments;
    o <= 0 || o > t
      ? (i && (clearTimeout(i), (i = null)), (r = s), e.apply(c, u))
      : !i &&
        n.trailing !== !1 &&
        (i = setTimeout(() => {
          (r = n.leading === !1 ? 0 : Date.now()), (i = null), e.apply(c, u);
        }, o));
  };
}
function Un(e, t, n, i, r = window) {
  const a = r.Object.getOwnPropertyDescriptor(e, t);
  return (
    r.Object.defineProperty(
      e,
      t,
      i
        ? n
        : {
            set(s) {
              setTimeout(() => {
                n.set.call(this, s);
              }, 0),
                a && a.set && a.set.call(this, s);
            },
          }
    ),
    () => Un(e, t, a || {}, !0)
  );
}
function pe(e, t, n) {
  try {
    if (!(t in e)) return () => {};
    const i = e[t],
      r = n(i);
    return (
      typeof r == "function" &&
        ((r.prototype = r.prototype || {}),
        Object.defineProperties(r, {
          __rrweb_original__: { enumerable: !1, value: i },
        })),
      (e[t] = r),
      () => {
        e[t] = i;
      }
    );
  } catch {
    return () => {};
  }
}
function qs() {
  return (
    window.innerHeight ||
    (document.documentElement && document.documentElement.clientHeight) ||
    (document.body && document.body.clientHeight)
  );
}
function Vs() {
  return (
    window.innerWidth ||
    (document.documentElement && document.documentElement.clientWidth) ||
    (document.body && document.body.clientWidth)
  );
}
function rt(e, t, n, i) {
  if (!e) return !1;
  if (e.nodeType === e.ELEMENT_NODE) {
    let r = !1;
    const a = i && e.matches(i);
    return (
      typeof t == "string"
        ? e.closest !== void 0
          ? (r = !a && e.closest("." + t) !== null)
          : (r = !a && e.classList.contains(t))
        : !a &&
          e.classList.forEach((s) => {
            t.test(s) && (r = !0);
          }),
      !r && n && (r = e.matches(n)),
      (!a && r) || rt(e.parentNode, t, n, i)
    );
  }
  return e.nodeType === e.TEXT_NODE, rt(e.parentNode, t, n, i);
}
function Vn(e) {
  return "__sn" in e ? e.__sn.id === Ye : !1;
}
function Zs(e, t) {
  if (Oe(e)) return !1;
  const n = t.getId(e);
  return t.has(n)
    ? e.parentNode && e.parentNode.nodeType === e.DOCUMENT_NODE
      ? !1
      : e.parentNode
      ? Zs(e.parentNode, t)
      : !0
    : !0;
}
function Ks(e) {
  return !!e.changedTouches;
}
function Ml(e = window) {
  "NodeList" in e &&
    !e.NodeList.prototype.forEach &&
    (e.NodeList.prototype.forEach = Array.prototype.forEach),
    "DOMTokenList" in e &&
      !e.DOMTokenList.prototype.forEach &&
      (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
    Node.prototype.contains ||
      (Node.prototype.contains = function (n) {
        if (!(0 in arguments)) throw new TypeError("1 argument is required");
        do if (this === n) return !0;
        while ((n = n && n.parentNode));
        return !1;
      });
}
function Xs(e) {
  return "__sn" in e
    ? e.__sn.type === X.Element && e.__sn.tagName === "iframe"
    : !1;
}
function Js(e) {
  return !!(e != null && e.shadowRoot);
}
function Ar(e) {
  return "__ln" in e;
}
class Pl {
  constructor() {
    (this.length = 0), (this.head = null);
  }
  get(t) {
    if (t >= this.length) throw new Error("Position outside of list range");
    let n = this.head;
    for (let i = 0; i < t; i++) n = (n == null ? void 0 : n.next) || null;
    return n;
  }
  addNode(t) {
    const n = { value: t, previous: null, next: null };
    if (((t.__ln = n), t.previousSibling && Ar(t.previousSibling))) {
      const i = t.previousSibling.__ln.next;
      (n.next = i),
        (n.previous = t.previousSibling.__ln),
        (t.previousSibling.__ln.next = n),
        i && (i.previous = n);
    } else if (
      t.nextSibling &&
      Ar(t.nextSibling) &&
      t.nextSibling.__ln.previous
    ) {
      const i = t.nextSibling.__ln.previous;
      (n.previous = i),
        (n.next = t.nextSibling.__ln),
        (t.nextSibling.__ln.previous = n),
        i && (i.next = n);
    } else
      this.head && (this.head.previous = n),
        (n.next = this.head),
        (this.head = n);
    this.length++;
  }
  removeNode(t) {
    const n = t.__ln;
    this.head &&
      (n.previous
        ? ((n.previous.next = n.next), n.next && (n.next.previous = n.previous))
        : ((this.head = n.next), this.head && (this.head.previous = null)),
      t.__ln && delete t.__ln,
      this.length--);
  }
}
const xr = (e, t) => `${e}@${t}`;
function Or(e) {
  return "__sn" in e;
}
class zl {
  constructor() {
    (this.frozen = !1),
      (this.locked = !1),
      (this.texts = []),
      (this.attributes = []),
      (this.removes = []),
      (this.mapRemoves = []),
      (this.movedMap = {}),
      (this.addedSet = new Set()),
      (this.movedSet = new Set()),
      (this.droppedSet = new Set()),
      (this.processMutations = (t) => {
        t.forEach(this.processMutation), this.emit();
      }),
      (this.emit = () => {
        if (this.frozen || this.locked) return;
        const t = [],
          n = new Pl(),
          i = (o) => {
            let c = o,
              u = Ye;
            for (; u === Ye; )
              (c = c && c.nextSibling), (u = c && this.mirror.getId(c));
            return u;
          },
          r = (o) => {
            var c, u, l, d, h;
            const f = o.getRootNode
              ? (c = o.getRootNode()) === null || c === void 0
                ? void 0
                : c.host
              : null;
            let p = f;
            for (
              ;
              !(
                (l =
                  (u = p == null ? void 0 : p.getRootNode) === null ||
                  u === void 0
                    ? void 0
                    : u.call(p)) === null || l === void 0
              ) && l.host;

            )
              p =
                ((h =
                  (d = p == null ? void 0 : p.getRootNode) === null ||
                  d === void 0
                    ? void 0
                    : d.call(p)) === null || h === void 0
                  ? void 0
                  : h.host) || null;
            const b = !this.doc.contains(o) && (!p || !this.doc.contains(p));
            if (!o.parentNode || b) return;
            const v = Oe(o.parentNode)
                ? this.mirror.getId(f)
                : this.mirror.getId(o.parentNode),
              E = i(o);
            if (v === -1 || E === -1) return n.addNode(o);
            let O = Ce(o, {
              doc: this.doc,
              map: this.mirror.map,
              blockClass: this.blockClass,
              blockSelector: this.blockSelector,
              unblockSelector: this.unblockSelector,
              maskTextClass: this.maskTextClass,
              maskTextSelector: this.maskTextSelector,
              unmaskTextSelector: this.unmaskTextSelector,
              maskInputSelector: this.maskInputSelector,
              unmaskInputSelector: this.unmaskInputSelector,
              skipChild: !0,
              inlineStylesheet: this.inlineStylesheet,
              maskAllText: this.maskAllText,
              maskInputOptions: this.maskInputOptions,
              maskTextFn: this.maskTextFn,
              maskInputFn: this.maskInputFn,
              slimDOMOptions: this.slimDOMOptions,
              recordCanvas: this.recordCanvas,
              inlineImages: this.inlineImages,
              onSerialize: (x) => {
                Xs(x) && this.iframeManager.addIframe(x),
                  Js(o) &&
                    this.shadowDomManager.addShadowRoot(o.shadowRoot, document);
              },
              onIframeLoad: (x, N) => {
                this.iframeManager.attachIframe(x, N),
                  this.shadowDomManager.observeAttachShadow(x);
              },
            });
            O && t.push({ parentId: v, nextId: E, node: O });
          };
        for (; this.mapRemoves.length; )
          this.mirror.removeNodeFromMap(this.mapRemoves.shift());
        for (const o of this.movedSet)
          (hi(this.removes, o, this.mirror) &&
            !this.movedSet.has(o.parentNode)) ||
            r(o);
        for (const o of this.addedSet)
          (!pi(this.droppedSet, o) && !hi(this.removes, o, this.mirror)) ||
          pi(this.movedSet, o)
            ? r(o)
            : this.droppedSet.add(o);
        let a = null;
        for (; n.length; ) {
          let o = null;
          if (a) {
            const c = this.mirror.getId(a.value.parentNode),
              u = i(a.value);
            c !== -1 && u !== -1 && (o = a);
          }
          if (!o)
            for (let c = n.length - 1; c >= 0; c--) {
              const u = n.get(c);
              if (u) {
                const l = this.mirror.getId(u.value.parentNode),
                  d = i(u.value);
                if (l !== -1 && d !== -1) {
                  o = u;
                  break;
                }
              }
            }
          if (!o) {
            for (; n.head; ) n.removeNode(n.head.value);
            break;
          }
          (a = o.previous), n.removeNode(o.value), r(o.value);
        }
        const s = {
          texts: this.texts
            .map((o) => ({ id: this.mirror.getId(o.node), value: o.value }))
            .filter((o) => this.mirror.has(o.id)),
          attributes: this.attributes
            .map((o) => ({
              id: this.mirror.getId(o.node),
              attributes: o.attributes,
            }))
            .filter((o) => this.mirror.has(o.id)),
          removes: this.removes,
          adds: t,
        };
        (!s.texts.length &&
          !s.attributes.length &&
          !s.removes.length &&
          !s.adds.length) ||
          ((this.texts = []),
          (this.attributes = []),
          (this.removes = []),
          (this.addedSet = new Set()),
          (this.movedSet = new Set()),
          (this.droppedSet = new Set()),
          (this.movedMap = {}),
          this.mutationCb(s));
      }),
      (this.processMutation = (t) => {
        if (!Vn(t.target))
          switch (t.type) {
            case "characterData": {
              const n = t.target.textContent;
              !rt(
                t.target,
                this.blockClass,
                this.blockSelector,
                this.unblockSelector
              ) &&
                n !== t.oldValue &&
                this.texts.push({
                  value:
                    bn(
                      t.target,
                      this.maskTextClass,
                      this.maskTextSelector,
                      this.unmaskTextSelector,
                      this.maskAllText
                    ) && n
                      ? this.maskTextFn
                        ? this.maskTextFn(n)
                        : n.replace(/[\S]/g, "*")
                      : n,
                  node: t.target,
                });
              break;
            }
            case "attributes": {
              const n = t.target;
              let i = n.getAttribute(t.attributeName);
              if (
                (t.attributeName === "value" &&
                  (i = Fe({
                    input: n,
                    maskInputSelector: this.maskInputSelector,
                    unmaskInputSelector: this.unmaskInputSelector,
                    maskInputOptions: this.maskInputOptions,
                    tagName: n.tagName,
                    type: n.getAttribute("type"),
                    value: i,
                    maskInputFn: this.maskInputFn,
                  })),
                rt(
                  t.target,
                  this.blockClass,
                  this.blockSelector,
                  this.unblockSelector
                ) || i === t.oldValue)
              )
                return;
              let r = this.attributes.find((a) => a.node === t.target);
              if (
                (r ||
                  ((r = { node: t.target, attributes: {} }),
                  this.attributes.push(r)),
                t.attributeName === "type" &&
                  n.tagName === "INPUT" &&
                  (t.oldValue || "").toLowerCase() === "password" &&
                  n.setAttribute("data-rr-is-password", "true"),
                t.attributeName === "style")
              ) {
                const a = this.doc.createElement("span");
                t.oldValue && a.setAttribute("style", t.oldValue),
                  (r.attributes.style === void 0 ||
                    r.attributes.style === null) &&
                    (r.attributes.style = {});
                try {
                  const s = r.attributes.style;
                  for (const o of Array.from(n.style)) {
                    const c = n.style.getPropertyValue(o),
                      u = n.style.getPropertyPriority(o);
                    (c !== a.style.getPropertyValue(o) ||
                      u !== a.style.getPropertyPriority(o)) &&
                      (u === "" ? (s[o] = c) : (s[o] = [c, u]));
                  }
                  for (const o of Array.from(a.style))
                    n.style.getPropertyValue(o) === "" && (s[o] = !1);
                } catch (s) {
                  console.warn(
                    "[rrweb] Error when parsing update to style attribute:",
                    s
                  );
                }
              } else {
                const a = t.target;
                r.attributes[t.attributeName] = Ws(
                  this.doc,
                  a,
                  a.tagName,
                  t.attributeName,
                  i,
                  this.maskAllText,
                  this.unmaskTextSelector,
                  this.maskTextFn
                );
              }
              break;
            }
            case "childList": {
              t.addedNodes.forEach((n) => this.genAdds(n, t.target)),
                t.removedNodes.forEach((n) => {
                  const i = this.mirror.getId(n),
                    r = Oe(t.target)
                      ? this.mirror.getId(t.target.host)
                      : this.mirror.getId(t.target);
                  rt(
                    t.target,
                    this.blockClass,
                    this.blockSelector,
                    this.unblockSelector
                  ) ||
                    Vn(n) ||
                    (this.addedSet.has(n)
                      ? (_i(this.addedSet, n), this.droppedSet.add(n))
                      : (this.addedSet.has(t.target) && i === -1) ||
                        Zs(t.target, this.mirror) ||
                        (this.movedSet.has(n) && this.movedMap[xr(i, r)]
                          ? _i(this.movedSet, n)
                          : this.removes.push({
                              parentId: r,
                              id: i,
                              isShadow: Oe(t.target) ? !0 : void 0,
                            })),
                    this.mapRemoves.push(n));
                });
              break;
            }
          }
      }),
      (this.genAdds = (t, n) => {
        if (
          !(
            n &&
            rt(n, this.blockClass, this.blockSelector, this.unblockSelector)
          )
        ) {
          if (Or(t)) {
            if (Vn(t)) return;
            this.movedSet.add(t);
            let i = null;
            n && Or(n) && (i = n.__sn.id),
              i && (this.movedMap[xr(t.__sn.id, i)] = !0);
          } else this.addedSet.add(t), this.droppedSet.delete(t);
          rt(t, this.blockClass, this.blockSelector, this.unblockSelector) ||
            t.childNodes.forEach((i) => this.genAdds(i));
        }
      });
  }
  init(t) {
    [
      "mutationCb",
      "blockClass",
      "blockSelector",
      "unblockSelector",
      "maskTextClass",
      "maskTextSelector",
      "unmaskTextSelector",
      "maskInputSelector",
      "unmaskInputSelector",
      "inlineStylesheet",
      "maskAllText",
      "maskInputOptions",
      "maskTextFn",
      "maskInputFn",
      "recordCanvas",
      "inlineImages",
      "slimDOMOptions",
      "doc",
      "mirror",
      "iframeManager",
      "shadowDomManager",
      "canvasManager",
    ].forEach((n) => {
      this[n] = t[n];
    });
  }
  freeze() {
    (this.frozen = !0), this.canvasManager.freeze();
  }
  unfreeze() {
    (this.frozen = !1), this.canvasManager.unfreeze(), this.emit();
  }
  isFrozen() {
    return this.frozen;
  }
  lock() {
    (this.locked = !0), this.canvasManager.lock();
  }
  unlock() {
    (this.locked = !1), this.canvasManager.unlock(), this.emit();
  }
  reset() {
    this.shadowDomManager.reset(), this.canvasManager.reset();
  }
}
function _i(e, t) {
  e.delete(t), t.childNodes.forEach((n) => _i(e, n));
}
function hi(e, t, n) {
  const { parentNode: i } = t;
  if (!i) return !1;
  const r = n.getId(i);
  return e.some((a) => a.id === r) ? !0 : hi(e, i, n);
}
function pi(e, t) {
  const { parentNode: n } = t;
  return n ? (e.has(n) ? !0 : pi(e, n)) : !1;
}
const A =
    (e) =>
    (...n) => {
      try {
        return e(...n);
      } catch (i) {
        try {
          i.__rrweb__ = !0;
        } catch {}
        throw i;
      }
    },
  Vt = [];
function Ze(e) {
  try {
    if ("composedPath" in e) {
      const t = e.composedPath();
      if (t.length) return t[0];
    } else if ("path" in e && e.path.length) return e.path[0];
  } catch {}
  return e && e.target;
}
function Qs(e, t) {
  var n, i;
  const r = new zl();
  Vt.push(r), r.init(e);
  let a = window.MutationObserver || window.__rrMutationObserver;
  const s =
    (i =
      (n = window == null ? void 0 : window.Zone) === null || n === void 0
        ? void 0
        : n.__symbol__) === null || i === void 0
      ? void 0
      : i.call(n, "MutationObserver");
  s && window[s] && (a = window[s]);
  const o = new a(
    A((c) => {
      (e.onMutation && e.onMutation(c) === !1) || r.processMutations(c);
    })
  );
  return (
    o.observe(t, {
      attributes: !0,
      attributeOldValue: !0,
      characterData: !0,
      characterDataOldValue: !0,
      childList: !0,
      subtree: !0,
    }),
    o
  );
}
function Gl({ mousemoveCb: e, sampling: t, doc: n, mirror: i }) {
  if (t.mousemove === !1) return () => {};
  const r = typeof t.mousemove == "number" ? t.mousemove : 50,
    a = typeof t.mousemoveCallback == "number" ? t.mousemoveCallback : 500;
  let s = [],
    o;
  const c = $e((d) => {
      const h = Date.now() - o;
      A(e)(
        s.map((f) => ((f.timeOffset -= h), f)),
        d
      ),
        (s = []),
        (o = null);
    }, a),
    u = $e(
      (d) => {
        const h = Ze(d),
          { clientX: f, clientY: p } = Ks(d) ? d.changedTouches[0] : d;
        o || (o = Date.now()),
          s.push({ x: f, y: p, id: i.getId(h), timeOffset: Date.now() - o }),
          c(
            typeof DragEvent < "u" && d instanceof DragEvent
              ? tt.Drag
              : d instanceof MouseEvent
              ? tt.MouseMove
              : tt.TouchMove
          );
      },
      r,
      { trailing: !1 }
    ),
    l = [
      _t("mousemove", A(u), n),
      _t("touchmove", A(u), n),
      _t("drag", A(u), n),
    ];
  return A(() => {
    l.forEach((d) => d());
  });
}
function Fl({
  mouseInteractionCb: e,
  doc: t,
  mirror: n,
  blockClass: i,
  blockSelector: r,
  unblockSelector: a,
  sampling: s,
}) {
  if (s.mouseInteraction === !1) return () => {};
  const o =
      s.mouseInteraction === !0 || s.mouseInteraction === void 0
        ? {}
        : s.mouseInteraction,
    c = [],
    u = (l) => (d) => {
      const h = Ze(d);
      if (rt(h, i, r, a)) return;
      const f = Ks(d) ? d.changedTouches[0] : d;
      if (!f) return;
      const p = n.getId(h),
        { clientX: b, clientY: v } = f;
      A(e)({ type: Sn[l], id: p, x: b, y: v });
    };
  return (
    Object.keys(Sn)
      .filter(
        (l) =>
          Number.isNaN(Number(l)) && !l.endsWith("_Departed") && o[l] !== !1
      )
      .forEach((l) => {
        const d = l.toLowerCase(),
          h = A(u(l));
        c.push(_t(d, h, t));
      }),
    A(() => {
      c.forEach((l) => l());
    })
  );
}
function ta({
  scrollCb: e,
  doc: t,
  mirror: n,
  blockClass: i,
  blockSelector: r,
  unblockSelector: a,
  sampling: s,
}) {
  const o = $e((c) => {
    const u = Ze(c);
    if (!u || rt(u, i, r, a)) return;
    const l = n.getId(u);
    if (u === t) {
      const d = t.scrollingElement || t.documentElement;
      A(e)({ id: l, x: d.scrollLeft, y: d.scrollTop });
    } else A(e)({ id: l, x: u.scrollLeft, y: u.scrollTop });
  }, s.scroll || 100);
  return _t("scroll", A(o), t);
}
function Yl({ viewportResizeCb: e }) {
  let t = -1,
    n = -1;
  const i = $e(() => {
    const r = qs(),
      a = Vs();
    (t !== r || n !== a) &&
      (A(e)({ width: Number(a), height: Number(r) }), (t = r), (n = a));
  }, 200);
  return _t("resize", A(i), window);
}
function Cr(e, t) {
  const n = Object.assign({}, e);
  return t || delete n.userTriggered, n;
}
const $l = ["INPUT", "TEXTAREA", "SELECT"],
  Ur = new WeakMap();
function Hl({
  inputCb: e,
  doc: t,
  mirror: n,
  blockClass: i,
  blockSelector: r,
  unblockSelector: a,
  ignoreClass: s,
  ignoreSelector: o,
  maskInputSelector: c,
  unmaskInputSelector: u,
  maskInputOptions: l,
  maskInputFn: d,
  sampling: h,
  userTriggeredOnInput: f,
}) {
  function p(N) {
    let S = Ze(N);
    const m = S && S.tagName,
      T = N.isTrusted;
    if (
      (m === "OPTION" && (S = S.parentElement),
      !S || !m || $l.indexOf(m) < 0 || rt(S, i, r, a))
    )
      return;
    const y = S,
      M = $s(y);
    if (y.classList.contains(s) || (o && y.matches(o))) return;
    let C = li(y, m, M),
      Y = !1;
    (M === "radio" || M === "checkbox") && (Y = S.checked),
      fl({ maskInputOptions: l, maskInputSelector: c, tagName: m, type: M }) &&
        (C = Fe({
          input: y,
          maskInputOptions: l,
          maskInputSelector: c,
          unmaskInputSelector: u,
          tagName: m,
          type: M,
          value: C,
          maskInputFn: d,
        })),
      b(S, A(Cr)({ text: C, isChecked: Y, userTriggered: T }, f));
    const K = S.name;
    M === "radio" &&
      K &&
      Y &&
      t.querySelectorAll(`input[type="radio"][name="${K}"]`).forEach((g) => {
        if (g !== S) {
          const U = Fe({
            input: g,
            maskInputOptions: l,
            maskInputSelector: c,
            unmaskInputSelector: u,
            tagName: m,
            type: M,
            value: li(g, m, M),
            maskInputFn: d,
          });
          b(g, A(Cr)({ text: U, isChecked: !Y, userTriggered: !1 }, f));
        }
      });
  }
  function b(N, S) {
    const m = Ur.get(N);
    if (!m || m.text !== S.text || m.isChecked !== S.isChecked) {
      Ur.set(N, S);
      const T = n.getId(N);
      e(Object.assign(Object.assign({}, S), { id: T }));
    }
  }
  const E = (h.input === "last" ? ["change"] : ["input", "change"]).map((N) =>
      _t(N, A(p), t)
    ),
    O = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value"),
    x = [
      [HTMLInputElement.prototype, "value"],
      [HTMLInputElement.prototype, "checked"],
      [HTMLSelectElement.prototype, "value"],
      [HTMLTextAreaElement.prototype, "value"],
      [HTMLSelectElement.prototype, "selectedIndex"],
      [HTMLOptionElement.prototype, "selected"],
    ];
  return (
    O &&
      O.set &&
      E.push(
        ...x.map((N) =>
          Un(N[0], N[1], {
            set() {
              A(p)({ target: this });
            },
          })
        )
      ),
    A(() => {
      E.forEach((N) => N());
    })
  );
}
function wn(e) {
  const t = [];
  function n(i, r) {
    if (
      (cn("CSSGroupingRule") && i.parentRule instanceof CSSGroupingRule) ||
      (cn("CSSMediaRule") && i.parentRule instanceof CSSMediaRule) ||
      (cn("CSSSupportsRule") && i.parentRule instanceof CSSSupportsRule) ||
      (cn("CSSConditionRule") && i.parentRule instanceof CSSConditionRule)
    ) {
      const s = Array.from(i.parentRule.cssRules).indexOf(i);
      r.unshift(s);
    } else {
      const s = Array.from(i.parentStyleSheet.cssRules).indexOf(i);
      r.unshift(s);
    }
    return r;
  }
  return n(e, t);
}
function jl({ styleSheetRuleCb: e, mirror: t }, { win: n }) {
  if (!n.CSSStyleSheet || !n.CSSStyleSheet.prototype) return () => {};
  const i = n.CSSStyleSheet.prototype.insertRule;
  n.CSSStyleSheet.prototype.insertRule = new Proxy(i, {
    apply: A((o, c, u) => {
      const [l, d] = u,
        h = t.getId(c.ownerNode);
      return (
        h !== -1 && e({ id: h, adds: [{ rule: l, index: d }] }), o.apply(c, u)
      );
    }),
  });
  const r = n.CSSStyleSheet.prototype.deleteRule;
  n.CSSStyleSheet.prototype.deleteRule = new Proxy(r, {
    apply: A((o, c, u) => {
      const [l] = u,
        d = t.getId(c.ownerNode);
      return d !== -1 && e({ id: d, removes: [{ index: l }] }), o.apply(c, u);
    }),
  });
  const a = {};
  un("CSSGroupingRule")
    ? (a.CSSGroupingRule = n.CSSGroupingRule)
    : (un("CSSMediaRule") && (a.CSSMediaRule = n.CSSMediaRule),
      un("CSSConditionRule") && (a.CSSConditionRule = n.CSSConditionRule),
      un("CSSSupportsRule") && (a.CSSSupportsRule = n.CSSSupportsRule));
  const s = {};
  return (
    Object.entries(a).forEach(([o, c]) => {
      (s[o] = {
        insertRule: c.prototype.insertRule,
        deleteRule: c.prototype.deleteRule,
      }),
        (c.prototype.insertRule = new Proxy(s[o].insertRule, {
          apply: A((u, l, d) => {
            const [h, f] = d,
              p = t.getId(l.parentStyleSheet.ownerNode);
            return (
              p !== -1 &&
                e({ id: p, adds: [{ rule: h, index: [...wn(l), f || 0] }] }),
              u.apply(l, d)
            );
          }),
        })),
        (c.prototype.deleteRule = new Proxy(s[o].deleteRule, {
          apply: A((u, l, d) => {
            const [h] = d,
              f = t.getId(l.parentStyleSheet.ownerNode);
            return (
              f !== -1 && e({ id: f, removes: [{ index: [...wn(l), h] }] }),
              u.apply(l, d)
            );
          }),
        }));
    }),
    A(() => {
      (n.CSSStyleSheet.prototype.insertRule = i),
        (n.CSSStyleSheet.prototype.deleteRule = r),
        Object.entries(a).forEach(([o, c]) => {
          (c.prototype.insertRule = s[o].insertRule),
            (c.prototype.deleteRule = s[o].deleteRule);
        });
    })
  );
}
function Wl({ styleDeclarationCb: e, mirror: t }, { win: n }) {
  const i = n.CSSStyleDeclaration.prototype.setProperty;
  n.CSSStyleDeclaration.prototype.setProperty = new Proxy(i, {
    apply: A((a, s, o) => {
      var c, u;
      const [l, d, h] = o,
        f = t.getId(
          (u =
            (c = s.parentRule) === null || c === void 0
              ? void 0
              : c.parentStyleSheet) === null || u === void 0
            ? void 0
            : u.ownerNode
        );
      return (
        f !== -1 &&
          e({
            id: f,
            set: { property: l, value: d, priority: h },
            index: wn(s.parentRule),
          }),
        a.apply(s, o)
      );
    }),
  });
  const r = n.CSSStyleDeclaration.prototype.removeProperty;
  return (
    (n.CSSStyleDeclaration.prototype.removeProperty = new Proxy(r, {
      apply: A((a, s, o) => {
        var c, u;
        const [l] = o,
          d = t.getId(
            (u =
              (c = s.parentRule) === null || c === void 0
                ? void 0
                : c.parentStyleSheet) === null || u === void 0
              ? void 0
              : u.ownerNode
          );
        return (
          d !== -1 &&
            e({ id: d, remove: { property: l }, index: wn(s.parentRule) }),
          a.apply(s, o)
        );
      }),
    })),
    A(() => {
      (n.CSSStyleDeclaration.prototype.setProperty = i),
        (n.CSSStyleDeclaration.prototype.removeProperty = r);
    })
  );
}
function ql({
  mediaInteractionCb: e,
  blockClass: t,
  blockSelector: n,
  unblockSelector: i,
  mirror: r,
  sampling: a,
}) {
  const s = (c) =>
      $e(
        A((u) => {
          const l = Ze(u);
          if (!l || rt(l, t, n, i)) return;
          const { currentTime: d, volume: h, muted: f } = l;
          e({ type: c, id: r.getId(l), currentTime: d, volume: h, muted: f });
        }),
        a.media || 500
      ),
    o = [
      _t("play", s(0)),
      _t("pause", s(1)),
      _t("seeked", s(2)),
      _t("volumechange", s(3)),
    ];
  return A(() => {
    o.forEach((c) => c());
  });
}
function Vl({ fontCb: e, doc: t }) {
  const n = t.defaultView;
  if (!n) return () => {};
  const i = [],
    r = new WeakMap(),
    a = n.FontFace;
  n.FontFace = function (c, u, l) {
    const d = new a(c, u, l);
    return (
      r.set(d, {
        family: c,
        buffer: typeof u != "string",
        descriptors: l,
        fontSource:
          typeof u == "string"
            ? u
            : JSON.stringify(Array.from(new Uint8Array(u))),
      }),
      d
    );
  };
  const s = pe(t.fonts, "add", function (o) {
    return function (c) {
      return (
        setTimeout(() => {
          const u = r.get(c);
          u && (e(u), r.delete(c));
        }, 0),
        o.apply(this, [c])
      );
    };
  });
  return (
    i.push(() => {
      n.FontFace = a;
    }),
    i.push(s),
    A(() => {
      i.forEach((o) => o());
    })
  );
}
function Zl(e, t) {
  const {
    mutationCb: n,
    mousemoveCb: i,
    mouseInteractionCb: r,
    scrollCb: a,
    viewportResizeCb: s,
    inputCb: o,
    mediaInteractionCb: c,
    styleSheetRuleCb: u,
    styleDeclarationCb: l,
    canvasMutationCb: d,
    fontCb: h,
  } = e;
  (e.mutationCb = (...f) => {
    t.mutation && t.mutation(...f), n(...f);
  }),
    (e.mousemoveCb = (...f) => {
      t.mousemove && t.mousemove(...f), i(...f);
    }),
    (e.mouseInteractionCb = (...f) => {
      t.mouseInteraction && t.mouseInteraction(...f), r(...f);
    }),
    (e.scrollCb = (...f) => {
      t.scroll && t.scroll(...f), a(...f);
    }),
    (e.viewportResizeCb = (...f) => {
      t.viewportResize && t.viewportResize(...f), s(...f);
    }),
    (e.inputCb = (...f) => {
      t.input && t.input(...f), o(...f);
    }),
    (e.mediaInteractionCb = (...f) => {
      t.mediaInteaction && t.mediaInteaction(...f), c(...f);
    }),
    (e.styleSheetRuleCb = (...f) => {
      t.styleSheetRule && t.styleSheetRule(...f), u(...f);
    }),
    (e.styleDeclarationCb = (...f) => {
      t.styleDeclaration && t.styleDeclaration(...f), l(...f);
    }),
    (e.canvasMutationCb = (...f) => {
      t.canvasMutation && t.canvasMutation(...f), d(...f);
    }),
    (e.fontCb = (...f) => {
      t.font && t.font(...f), h(...f);
    });
}
function Kl(e, t = {}) {
  const n = e.doc.defaultView;
  if (!n) return () => {};
  Zl(e, t);
  const i = Qs(e, e.doc),
    r = Gl(e),
    a = Fl(e),
    s = ta(e),
    o = Yl(e),
    c = Hl(e),
    u = ql(e),
    l = jl(e, { win: n }),
    d = Wl(e, { win: n }),
    h = e.collectFonts ? Vl(e) : () => {},
    f = [];
  for (const p of e.plugins) f.push(p.observer(p.callback, n, p.options));
  return A(() => {
    Vt.forEach((p) => p.reset()), i.disconnect(), r(), a(), s(), o(), c(), u();
    try {
      l(), d();
    } catch {}
    h(), f.forEach((p) => p());
  });
}
function cn(e) {
  return typeof window[e] < "u";
}
function un(e) {
  return !!(
    typeof window[e] < "u" &&
    window[e].prototype &&
    "insertRule" in window[e].prototype &&
    "deleteRule" in window[e].prototype
  );
}
class Xl {
  constructor(t) {
    (this.iframes = new WeakMap()), (this.mutationCb = t.mutationCb);
  }
  addIframe(t) {
    this.iframes.set(t, !0);
  }
  addLoadListener(t) {
    this.loadListener = t;
  }
  attachIframe(t, n) {
    var i;
    this.mutationCb({
      adds: [{ parentId: t.__sn.id, nextId: null, node: n }],
      removes: [],
      texts: [],
      attributes: [],
      isAttachIframe: !0,
    }),
      (i = this.loadListener) === null || i === void 0 || i.call(this, t);
  }
}
class Jl {
  constructor(t) {
    (this.restorePatches = []),
      (this.mutationCb = t.mutationCb),
      (this.scrollCb = t.scrollCb),
      (this.bypassOptions = t.bypassOptions),
      (this.mirror = t.mirror);
    const n = this;
    this.restorePatches.push(
      pe(HTMLElement.prototype, "attachShadow", function (i) {
        return function () {
          const r = i.apply(this, arguments);
          return (
            this.shadowRoot &&
              n.addShadowRoot(this.shadowRoot, this.ownerDocument),
            r
          );
        };
      })
    );
  }
  addShadowRoot(t, n) {
    Qs(
      Object.assign(Object.assign({}, this.bypassOptions), {
        doc: n,
        mutationCb: this.mutationCb,
        mirror: this.mirror,
        shadowDomManager: this,
      }),
      t
    ),
      ta(
        Object.assign(Object.assign({}, this.bypassOptions), {
          scrollCb: this.scrollCb,
          doc: t,
          mirror: this.mirror,
        })
      );
  }
  observeAttachShadow(t) {
    if (t.contentWindow) {
      const n = this;
      this.restorePatches.push(
        pe(t.contentWindow.HTMLElement.prototype, "attachShadow", function (i) {
          return function () {
            const r = i.apply(this, arguments);
            return (
              this.shadowRoot &&
                n.addShadowRoot(this.shadowRoot, t.contentDocument),
              r
            );
          };
        })
      );
    }
  }
  reset() {
    this.restorePatches.forEach((t) => t());
  }
}
function Ql(e, t) {
  var n = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) &&
      t.indexOf(i) < 0 &&
      (n[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++)
      t.indexOf(i[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
        (n[i[r]] = e[i[r]]);
  return n;
}
function td(e, t, n, i, r, a) {
  const s = [],
    o = Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype);
  for (const c of o)
    try {
      if (typeof t.CanvasRenderingContext2D.prototype[c] != "function")
        continue;
      const u = pe(t.CanvasRenderingContext2D.prototype, c, function (l) {
        return function (...d) {
          return (
            rt(this.canvas, n, r, i) ||
              setTimeout(() => {
                const h = [...d];
                if (
                  c === "drawImage" &&
                  h[0] &&
                  h[0] instanceof HTMLCanvasElement
                ) {
                  const f = h[0],
                    p = f.getContext("2d");
                  let b =
                      p == null
                        ? void 0
                        : p.getImageData(0, 0, f.width, f.height),
                    v = b == null ? void 0 : b.data;
                  h[0] = JSON.stringify(v);
                }
                e(this.canvas, { type: he["2D"], property: c, args: h });
              }, 0),
            l.apply(this, d)
          );
        };
      });
      s.push(u);
    } catch {
      const l = Un(t.CanvasRenderingContext2D.prototype, c, {
        set(d) {
          e(this.canvas, {
            type: he["2D"],
            property: c,
            args: [d],
            setter: !0,
          });
        },
      });
      s.push(l);
    }
  return () => {
    s.forEach((c) => c());
  };
}
function ed(e, t, n, i) {
  const r = [];
  try {
    const a = pe(e.HTMLCanvasElement.prototype, "getContext", function (s) {
      return function (o, ...c) {
        return (
          rt(this, t, n, i) || "__context" in this || (this.__context = o),
          s.apply(this, [o, ...c])
        );
      };
    });
    r.push(a);
  } catch {
    console.error("failed to patch HTMLCanvasElement.prototype.getContext");
  }
  return () => {
    r.forEach((a) => a());
  };
}
var re = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  nd = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ln = 0; ln < re.length; ln++) nd[re.charCodeAt(ln)] = ln;
var id = function (e) {
  var t = new Uint8Array(e),
    n,
    i = t.length,
    r = "";
  for (n = 0; n < i; n += 3)
    (r += re[t[n] >> 2]),
      (r += re[((t[n] & 3) << 4) | (t[n + 1] >> 4)]),
      (r += re[((t[n + 1] & 15) << 2) | (t[n + 2] >> 6)]),
      (r += re[t[n + 2] & 63]);
  return (
    i % 3 === 2
      ? (r = r.substring(0, r.length - 1) + "=")
      : i % 3 === 1 && (r = r.substring(0, r.length - 2) + "=="),
    r
  );
};
const Lr = new Map();
function rd(e, t) {
  let n = Lr.get(e);
  return (
    n || ((n = new Map()), Lr.set(e, n)), n.has(t) || n.set(t, []), n.get(t)
  );
}
const ea = (e, t, n) => {
  if (!e || !(na(e, t) || typeof e == "object")) return;
  const i = e.constructor.name,
    r = rd(n, i);
  let a = r.indexOf(e);
  return a === -1 && ((a = r.length), r.push(e)), a;
};
function pn(e, t, n) {
  if (e instanceof Array) return e.map((i) => pn(i, t, n));
  if (e === null) return e;
  if (
    e instanceof Float32Array ||
    e instanceof Float64Array ||
    e instanceof Int32Array ||
    e instanceof Uint32Array ||
    e instanceof Uint8Array ||
    e instanceof Uint16Array ||
    e instanceof Int16Array ||
    e instanceof Int8Array ||
    e instanceof Uint8ClampedArray
  )
    return { rr_type: e.constructor.name, args: [Object.values(e)] };
  if (e instanceof ArrayBuffer) {
    const i = e.constructor.name,
      r = id(e);
    return { rr_type: i, base64: r };
  } else {
    if (e instanceof DataView)
      return {
        rr_type: e.constructor.name,
        args: [pn(e.buffer, t, n), e.byteOffset, e.byteLength],
      };
    if (e instanceof HTMLImageElement) {
      const i = e.constructor.name,
        { src: r } = e;
      return { rr_type: i, src: r };
    } else {
      if (e instanceof ImageData)
        return {
          rr_type: e.constructor.name,
          args: [pn(e.data, t, n), e.width, e.height],
        };
      if (na(e, t) || typeof e == "object") {
        const i = e.constructor.name,
          r = ea(e, t, n);
        return { rr_type: i, index: r };
      }
    }
  }
  return e;
}
const sd = (e, t, n) => [...e].map((i) => pn(i, t, n)),
  na = (e, t) =>
    !![
      "WebGLActiveInfo",
      "WebGLBuffer",
      "WebGLFramebuffer",
      "WebGLProgram",
      "WebGLRenderbuffer",
      "WebGLShader",
      "WebGLShaderPrecisionFormat",
      "WebGLTexture",
      "WebGLUniformLocation",
      "WebGLVertexArrayObject",
      "WebGLVertexArrayObjectOES",
    ]
      .filter((r) => typeof t[r] == "function")
      .find((r) => e instanceof t[r]);
function Br(e, t, n, i, r, a, s, o) {
  const c = [],
    u = Object.getOwnPropertyNames(e);
  for (const l of u)
    try {
      if (typeof e[l] != "function") continue;
      const d = pe(e, l, function (h) {
        return function (...f) {
          const p = h.apply(this, f);
          if ((ea(p, o, e), !rt(this.canvas, i, a, r))) {
            const b = s.getId(this.canvas),
              v = sd([...f], o, e),
              E = { type: t, property: l, args: v };
            n(this.canvas, E);
          }
          return p;
        };
      });
      c.push(d);
    } catch {
      const h = Un(e, l, {
        set(f) {
          n(this.canvas, { type: t, property: l, args: [f], setter: !0 });
        },
      });
      c.push(h);
    }
  return c;
}
function ad(e, t, n, i, r, a) {
  const s = [];
  return (
    s.push(
      ...Br(t.WebGLRenderingContext.prototype, he.WebGL, e, n, i, r, a, t)
    ),
    typeof t.WebGL2RenderingContext < "u" &&
      s.push(
        ...Br(t.WebGL2RenderingContext.prototype, he.WebGL2, e, n, i, r, a, t)
      ),
    () => {
      s.forEach((o) => o());
    }
  );
}
class od {
  reset() {
    this.pendingCanvasMutations.clear(),
      this.resetObservers && this.resetObservers();
  }
  freeze() {
    this.frozen = !0;
  }
  unfreeze() {
    this.frozen = !1;
  }
  lock() {
    this.locked = !0;
  }
  unlock() {
    this.locked = !1;
  }
  constructor(t) {
    (this.pendingCanvasMutations = new Map()),
      (this.rafStamps = { latestId: 0, invokeId: null }),
      (this.frozen = !1),
      (this.locked = !1),
      (this.processMutation = function (n, i) {
        ((this.rafStamps.invokeId &&
          this.rafStamps.latestId !== this.rafStamps.invokeId) ||
          !this.rafStamps.invokeId) &&
          (this.rafStamps.invokeId = this.rafStamps.latestId),
          this.pendingCanvasMutations.has(n) ||
            this.pendingCanvasMutations.set(n, []),
          this.pendingCanvasMutations.get(n).push(i);
      }),
      (this.mutationCb = t.mutationCb),
      (this.mirror = t.mirror),
      t.recordCanvas === !0 &&
        this.initCanvasMutationObserver(
          t.win,
          t.blockClass,
          t.blockSelector,
          t.unblockSelector
        );
  }
  initCanvasMutationObserver(t, n, i, r) {
    this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
    const a = ed(t, n, r, i),
      s = td(this.processMutation.bind(this), t, n, r, i, this.mirror),
      o = ad(this.processMutation.bind(this), t, n, r, i, this.mirror);
    this.resetObservers = () => {
      a(), s(), o();
    };
  }
  startPendingCanvasMutationFlusher() {
    requestAnimationFrame(() => this.flushPendingCanvasMutations());
  }
  startRAFTimestamping() {
    const t = (n) => {
      (this.rafStamps.latestId = n), requestAnimationFrame(t);
    };
    requestAnimationFrame(t);
  }
  flushPendingCanvasMutations() {
    this.pendingCanvasMutations.forEach((t, n) => {
      const i = this.mirror.getId(n);
      this.flushPendingCanvasMutationFor(n, i);
    }),
      requestAnimationFrame(() => this.flushPendingCanvasMutations());
  }
  flushPendingCanvasMutationFor(t, n) {
    if (this.frozen || this.locked) return;
    const i = this.pendingCanvasMutations.get(t);
    if (!i || n === -1) return;
    const r = i.map((s) => Ql(s, ["type"])),
      { type: a } = i[0];
    this.mutationCb({ id: n, type: a, commands: r }),
      this.pendingCanvasMutations.delete(t);
  }
}
function Q(e) {
  return Object.assign(Object.assign({}, e), { timestamp: Date.now() });
}
let V, Ue;
const Ie = Bl();
function Jt(e = {}) {
  const {
    emit: t,
    checkoutEveryNms: n,
    checkoutEveryNth: i,
    blockClass: r = "rr-block",
    blockSelector: a = null,
    unblockSelector: s = null,
    ignoreClass: o = "rr-ignore",
    ignoreSelector: c = null,
    maskTextClass: u = "rr-mask",
    maskTextSelector: l = null,
    maskInputSelector: d = null,
    unmaskTextSelector: h = null,
    unmaskInputSelector: f = null,
    inlineStylesheet: p = !0,
    maskAllText: b = !1,
    maskAllInputs: v,
    maskInputOptions: E,
    slimDOMOptions: O,
    maskInputFn: x,
    maskTextFn: N,
    hooks: S,
    packFn: m,
    sampling: T = {},
    mousemoveWait: y,
    recordCanvas: M = !1,
    userTriggeredOnInput: C = !1,
    collectFonts: Y = !1,
    inlineImages: K = !1,
    plugins: g,
    keepIframeSrcFn: U = () => !1,
    onMutation: $,
  } = e;
  if (!t) throw new Error("emit function is required");
  y !== void 0 && T.mousemove === void 0 && (T.mousemove = y);
  const nt =
      v === !0
        ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
            radio: !0,
            checkbox: !0,
          }
        : E !== void 0
        ? E
        : {},
    St =
      O === !0 || O === "all"
        ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaVerification: !0,
            headMetaAuthorship: O === "all",
            headMetaDescKeywords: O === "all",
          }
        : O || {};
  Ml();
  let Zi,
    Gn = 0;
  const Ra = (I) => {
    for (const mt of g || []) mt.eventProcessor && (I = mt.eventProcessor(I));
    return m && (I = m(I)), I;
  };
  V = (I, mt) => {
    var wt;
    if (
      (!((wt = Vt[0]) === null || wt === void 0) &&
        wt.isFrozen() &&
        I.type !== L.FullSnapshot &&
        !(I.type === L.IncrementalSnapshot && I.data.source === tt.Mutation) &&
        Vt.forEach((dt) => dt.unfreeze()),
      t(Ra(I), mt),
      I.type === L.FullSnapshot)
    )
      (Zi = I), (Gn = 0);
    else if (I.type === L.IncrementalSnapshot) {
      if (I.data.source === tt.Mutation && I.data.isAttachIframe) return;
      Gn++;
      const dt = i && Gn >= i,
        gt = n && I.timestamp - Zi.timestamp > n;
      (dt || gt) && Ue(!0);
    }
  };
  const Fn = (I) => {
      V(
        Q({
          type: L.IncrementalSnapshot,
          data: Object.assign({ source: tt.Mutation }, I),
        })
      );
    },
    Ki = (I) =>
      V(
        Q({
          type: L.IncrementalSnapshot,
          data: Object.assign({ source: tt.Scroll }, I),
        })
      ),
    Xi = (I) =>
      V(
        Q({
          type: L.IncrementalSnapshot,
          data: Object.assign({ source: tt.CanvasMutation }, I),
        })
      ),
    Te = new Xl({ mutationCb: Fn }),
    Ji = new od({
      recordCanvas: M,
      mutationCb: Xi,
      win: window,
      blockClass: r,
      blockSelector: a,
      unblockSelector: s,
      mirror: Ie,
    }),
    Yn = new Jl({
      mutationCb: Fn,
      scrollCb: Ki,
      bypassOptions: {
        onMutation: $,
        blockClass: r,
        blockSelector: a,
        unblockSelector: s,
        maskTextClass: u,
        maskTextSelector: l,
        unmaskTextSelector: h,
        maskInputSelector: d,
        unmaskInputSelector: f,
        inlineStylesheet: p,
        maskAllText: b,
        maskInputOptions: nt,
        maskTextFn: N,
        maskInputFn: x,
        recordCanvas: M,
        inlineImages: K,
        sampling: T,
        slimDOMOptions: St,
        iframeManager: Te,
        canvasManager: Ji,
      },
      mirror: Ie,
    });
  Ue = (I = !1) => {
    var mt, wt, dt, gt;
    V(
      Q({
        type: L.Meta,
        data: { href: window.location.href, width: Vs(), height: qs() },
      }),
      I
    ),
      Vt.forEach((yt) => yt.lock());
    const [z, Re] = Ul(document, {
      blockClass: r,
      blockSelector: a,
      unblockSelector: s,
      maskTextClass: u,
      maskTextSelector: l,
      unmaskTextSelector: h,
      maskInputSelector: d,
      unmaskInputSelector: f,
      inlineStylesheet: p,
      maskAllText: b,
      maskAllInputs: nt,
      maskTextFn: N,
      slimDOM: St,
      recordCanvas: M,
      inlineImages: K,
      onSerialize: (yt) => {
        Xs(yt) && Te.addIframe(yt),
          Js(yt) && Yn.addShadowRoot(yt.shadowRoot, document);
      },
      onIframeLoad: (yt, ka) => {
        Te.attachIframe(yt, ka), Yn.observeAttachShadow(yt);
      },
      keepIframeSrcFn: U,
    });
    if (!z) return console.warn("Failed to snapshot the document");
    (Ie.map = Re),
      V(
        Q({
          type: L.FullSnapshot,
          data: {
            node: z,
            initialOffset: {
              left:
                window.pageXOffset !== void 0
                  ? window.pageXOffset
                  : (document == null
                      ? void 0
                      : document.documentElement.scrollLeft) ||
                    ((wt =
                      (mt = document == null ? void 0 : document.body) ===
                        null || mt === void 0
                        ? void 0
                        : mt.parentElement) === null || wt === void 0
                      ? void 0
                      : wt.scrollLeft) ||
                    (document == null ? void 0 : document.body.scrollLeft) ||
                    0,
              top:
                window.pageYOffset !== void 0
                  ? window.pageYOffset
                  : (document == null
                      ? void 0
                      : document.documentElement.scrollTop) ||
                    ((gt =
                      (dt = document == null ? void 0 : document.body) ===
                        null || dt === void 0
                        ? void 0
                        : dt.parentElement) === null || gt === void 0
                      ? void 0
                      : gt.scrollTop) ||
                    (document == null ? void 0 : document.body.scrollTop) ||
                    0,
            },
          },
        })
      ),
      Vt.forEach((yt) => yt.unlock());
  };
  try {
    const I = [];
    I.push(
      _t("DOMContentLoaded", () => {
        V(Q({ type: L.DomContentLoaded, data: {} }));
      })
    );
    const mt = (dt) => {
      var gt;
      return A(Kl)(
        {
          onMutation: $,
          mutationCb: Fn,
          mousemoveCb: (z, Re) =>
            V(
              Q({
                type: L.IncrementalSnapshot,
                data: { source: Re, positions: z },
              })
            ),
          mouseInteractionCb: (z) =>
            V(
              Q({
                type: L.IncrementalSnapshot,
                data: Object.assign({ source: tt.MouseInteraction }, z),
              })
            ),
          scrollCb: Ki,
          viewportResizeCb: (z) =>
            V(
              Q({
                type: L.IncrementalSnapshot,
                data: Object.assign({ source: tt.ViewportResize }, z),
              })
            ),
          inputCb: (z) =>
            V(
              Q({
                type: L.IncrementalSnapshot,
                data: Object.assign({ source: tt.Input }, z),
              })
            ),
          mediaInteractionCb: (z) =>
            V(
              Q({
                type: L.IncrementalSnapshot,
                data: Object.assign({ source: tt.MediaInteraction }, z),
              })
            ),
          styleSheetRuleCb: (z) =>
            V(
              Q({
                type: L.IncrementalSnapshot,
                data: Object.assign({ source: tt.StyleSheetRule }, z),
              })
            ),
          styleDeclarationCb: (z) =>
            V(
              Q({
                type: L.IncrementalSnapshot,
                data: Object.assign({ source: tt.StyleDeclaration }, z),
              })
            ),
          canvasMutationCb: Xi,
          fontCb: (z) =>
            V(
              Q({
                type: L.IncrementalSnapshot,
                data: Object.assign({ source: tt.Font }, z),
              })
            ),
          blockClass: r,
          ignoreClass: o,
          ignoreSelector: c,
          maskTextClass: u,
          maskTextSelector: l,
          unmaskTextSelector: h,
          maskInputSelector: d,
          unmaskInputSelector: f,
          maskInputOptions: nt,
          inlineStylesheet: p,
          sampling: T,
          recordCanvas: M,
          inlineImages: K,
          userTriggeredOnInput: C,
          collectFonts: Y,
          doc: dt,
          maskAllText: b,
          maskInputFn: x,
          maskTextFn: N,
          blockSelector: a,
          unblockSelector: s,
          slimDOMOptions: St,
          mirror: Ie,
          iframeManager: Te,
          shadowDomManager: Yn,
          canvasManager: Ji,
          plugins:
            ((gt = g == null ? void 0 : g.filter((z) => z.observer)) === null ||
            gt === void 0
              ? void 0
              : gt.map((z) => ({
                  observer: z.observer,
                  options: z.options,
                  callback: (Re) =>
                    V(
                      Q({
                        type: L.Plugin,
                        data: { plugin: z.name, payload: Re },
                      })
                    ),
                }))) || [],
        },
        S
      );
    };
    Te.addLoadListener((dt) => {
      try {
        I.push(mt(dt.contentDocument));
      } catch (gt) {
        console.warn(gt);
      }
    });
    const wt = () => {
      Ue(), I.push(mt(document));
    };
    return (
      document.readyState === "interactive" ||
      document.readyState === "complete"
        ? wt()
        : I.push(
            _t(
              "load",
              () => {
                V(Q({ type: L.Load, data: {} })), wt();
              },
              window
            )
          ),
      () => {
        I.forEach((dt) => dt());
      }
    );
  } catch (I) {
    console.warn(I);
  }
}
Jt.addCustomEvent = (e, t) => {
  if (!V) throw new Error("please add custom event after start recording");
  V(Q({ type: L.Custom, data: { tag: e, payload: t } }));
};
Jt.freezePage = () => {
  Vt.forEach((e) => e.freeze());
};
Jt.takeFullSnapshot = (e) => {
  if (!Ue) throw new Error("please take full snapshot after start recording");
  Ue(e);
};
Jt.mirror = Ie;
function Ln(e, t) {
  t.category !== "sentry.transaction" &&
    (["ui.click", "ui.input"].includes(t.category)
      ? e.triggerUserActivity()
      : e.checkAndHandleExpiredSession(),
    e.addUpdate(
      () => (
        e.throttledAddEvent({
          type: L.Custom,
          timestamp: (t.timestamp || 0) * 1e3,
          data: { tag: "breadcrumb", payload: Tt(t, 10, 1e3) },
        }),
        t.category === "console"
      )
    ));
}
const cd = "button,a";
function Pi(e) {
  const t = ia(e);
  return !t || !(t instanceof Element) ? t : t.closest(cd) || t;
}
function ia(e) {
  return ud(e) ? e.target : e;
}
function ud(e) {
  return typeof e == "object" && !!e && "target" in e;
}
let Bt;
function ld(e) {
  return (
    Bt || ((Bt = []), dd()),
    Bt.push(e),
    () => {
      const t = Bt ? Bt.indexOf(e) : -1;
      t > -1 && Bt.splice(t, 1);
    }
  );
}
function dd() {
  J(k, "open", function (e) {
    return function (...t) {
      if (Bt)
        try {
          Bt.forEach((n) => n());
        } catch {}
      return e.apply(k, t);
    };
  });
}
function fd(e, t, n) {
  e.handleClick(t, n);
}
class Le {
  __init() {
    this._lastMutation = 0;
  }
  __init2() {
    this._lastScroll = 0;
  }
  __init3() {
    this._clicks = [];
  }
  constructor(t, n, i = Ln) {
    Le.prototype.__init.call(this),
      Le.prototype.__init2.call(this),
      Le.prototype.__init3.call(this),
      (this._timeout = n.timeout / 1e3),
      (this._multiClickTimeout = n.multiClickTimeout / 1e3),
      (this._threshold = n.threshold / 1e3),
      (this._scollTimeout = n.scrollTimeout / 1e3),
      (this._replay = t),
      (this._ignoreSelector = n.ignoreSelector),
      (this._addBreadcrumbEvent = i);
  }
  addListeners() {
    const t = () => {
        this._lastMutation = ke();
      },
      n = () => {
        this._lastScroll = ke();
      },
      i = ld(() => {
        this._lastMutation = ke();
      }),
      r = (s) => {
        if (!s.target) return;
        const o = Pi(s);
        o && this._handleMultiClick(o);
      },
      a = new MutationObserver(t);
    a.observe(k.document.documentElement, {
      attributes: !0,
      characterData: !0,
      childList: !0,
      subtree: !0,
    }),
      k.addEventListener("scroll", n, { passive: !0 }),
      k.addEventListener("click", r, { passive: !0 }),
      (this._teardown = () => {
        k.removeEventListener("scroll", n),
          k.removeEventListener("click", r),
          i(),
          a.disconnect(),
          (this._clicks = []),
          (this._lastMutation = 0),
          (this._lastScroll = 0);
      });
  }
  removeListeners() {
    this._teardown && this._teardown(),
      this._checkClickTimeout && clearTimeout(this._checkClickTimeout);
  }
  handleClick(t, n) {
    if (hd(n, this._ignoreSelector) || !pd(t) || this._getClick(n)) return;
    const r = {
      timestamp: t.timestamp,
      clickBreadcrumb: t,
      clickCount: 0,
      node: n,
    };
    this._clicks.push(r),
      this._clicks.length === 1 && this._scheduleCheckClicks();
  }
  _handleMultiClick(t) {
    const n = this._getClick(t);
    n && n.clickCount++;
  }
  _getClick(t) {
    const n = ke();
    return this._clicks.find(
      (i) => i.node === t && n - i.timestamp < this._multiClickTimeout
    );
  }
  _checkClicks() {
    const t = [],
      n = ke();
    this._clicks.forEach((i) => {
      !i.mutationAfter &&
        this._lastMutation &&
        (i.mutationAfter =
          i.timestamp <= this._lastMutation
            ? this._lastMutation - i.timestamp
            : void 0),
        !i.scrollAfter &&
          this._lastScroll &&
          (i.scrollAfter =
            i.timestamp <= this._lastScroll
              ? this._lastScroll - i.timestamp
              : void 0);
      const r = i.scrollAfter || i.mutationAfter || 0;
      if (r && r >= this._multiClickTimeout) {
        t.push(i);
        return;
      }
      i.timestamp + this._timeout <= n && t.push(i);
    });
    for (const i of t) {
      this._generateBreadcrumbs(i);
      const r = this._clicks.indexOf(i);
      r !== -1 && this._clicks.splice(r, 1);
    }
    this._clicks.length && this._scheduleCheckClicks();
  }
  _generateBreadcrumbs(t) {
    const n = this._replay,
      i = t.scrollAfter && t.scrollAfter <= this._scollTimeout,
      r = t.mutationAfter && t.mutationAfter <= this._threshold,
      a = !i && !r,
      { clickCount: s, clickBreadcrumb: o } = t;
    if (a) {
      const c = Math.min(t.mutationAfter || this._timeout, this._timeout) * 1e3,
        u = c < this._timeout * 1e3 ? "mutation" : "timeout",
        l = {
          type: "default",
          message: o.message,
          timestamp: o.timestamp,
          category: "ui.slowClickDetected",
          data: {
            ...o.data,
            url: k.location.href,
            route: n.getCurrentRoute(),
            timeAfterClickMs: c,
            endReason: u,
            clickCount: s || 1,
          },
        };
      this._addBreadcrumbEvent(n, l);
      return;
    }
    if (s > 1) {
      const c = {
        type: "default",
        message: o.message,
        timestamp: o.timestamp,
        category: "ui.multiClick",
        data: {
          ...o.data,
          url: k.location.href,
          route: n.getCurrentRoute(),
          clickCount: s,
          metric: !0,
        },
      };
      this._addBreadcrumbEvent(n, c);
    }
  }
  _scheduleCheckClicks() {
    this._checkClickTimeout = setTimeout(() => this._checkClicks(), 1e3);
  }
}
const _d = ["A", "BUTTON", "INPUT"];
function hd(e, t) {
  return !!(
    !_d.includes(e.tagName) ||
    (e.tagName === "INPUT" &&
      !["submit", "button"].includes(e.getAttribute("type") || "")) ||
    (e.tagName === "A" &&
      (e.hasAttribute("download") ||
        (e.hasAttribute("target") && e.getAttribute("target") !== "_self"))) ||
    (t && e.matches(t))
  );
}
function pd(e) {
  return !!(e.data && typeof e.data.nodeId == "number" && e.timestamp);
}
function ke() {
  return Date.now() / 1e3;
}
function Ot(e) {
  return { timestamp: Date.now() / 1e3, type: "default", ...e };
}
var vn;
(function (e) {
  (e[(e.Document = 0)] = "Document"),
    (e[(e.DocumentType = 1)] = "DocumentType"),
    (e[(e.Element = 2)] = "Element"),
    (e[(e.Text = 3)] = "Text"),
    (e[(e.CDATA = 4)] = "CDATA"),
    (e[(e.Comment = 5)] = "Comment");
})(vn || (vn = {}));
const md = new Set([
  "id",
  "class",
  "aria-label",
  "role",
  "name",
  "alt",
  "title",
  "data-test-id",
  "data-testid",
  "disabled",
  "aria-disabled",
]);
function gd(e) {
  const t = {};
  for (const n in e)
    if (md.has(n)) {
      let i = n;
      (n === "data-testid" || n === "data-test-id") && (i = "testId"),
        (t[i] = e[n]);
    }
  return t;
}
const yd = (e) => (t) => {
  if (!e.isEnabled()) return;
  const n = Ed(t);
  if (!n) return;
  const i = t.name === "click",
    r = i && t.event;
  i &&
    e.clickDetector &&
    r &&
    !r.altKey &&
    !r.metaKey &&
    !r.ctrlKey &&
    fd(e.clickDetector, n, Pi(t.event)),
    Ln(e, n);
};
function ra(e, t) {
  const n = e && Sd(e) && e.__sn.type === vn.Element ? e.__sn : null;
  return {
    message: t,
    data: n
      ? {
          nodeId: n.id,
          node: {
            id: n.id,
            tagName: n.tagName,
            textContent: e
              ? Array.from(e.childNodes)
                  .map(
                    (i) =>
                      "__sn" in i &&
                      i.__sn.type === vn.Text &&
                      i.__sn.textContent
                  )
                  .filter(Boolean)
                  .map((i) => i.trim())
                  .join("")
              : "",
            attributes: gd(n.attributes),
          },
        }
      : {},
  };
}
function Ed(e) {
  const { target: t, message: n } = bd(e);
  return Ot({ category: `ui.${e.name}`, ...ra(t, n) });
}
function bd(e) {
  const t = e.name === "click";
  let n,
    i = null;
  try {
    (i = t ? Pi(e.event) : ia(e.event)),
      (n = Ht(i, { maxStringLength: 200 }) || "<unknown>");
  } catch {
    n = "<unknown>";
  }
  return { target: i, message: n };
}
function Sd(e) {
  return "__sn" in e;
}
function wd(e, t) {
  if (!e.isEnabled()) return;
  e.updateUserActivity();
  const n = vd(t);
  n && Ln(e, n);
}
function vd(e) {
  const {
    metaKey: t,
    shiftKey: n,
    ctrlKey: i,
    altKey: r,
    key: a,
    target: s,
  } = e;
  if (!s || Td(s) || !a) return null;
  const o = t || i || r,
    c = a.length === 1;
  if (!o && c) return null;
  const u = Ht(s, { maxStringLength: 200 }) || "<unknown>",
    l = ra(s, u);
  return Ot({
    category: "ui.keyDown",
    message: u,
    data: { ...l.data, metaKey: t, shiftKey: n, ctrlKey: i, altKey: r, key: a },
  });
}
function Td(e) {
  return (
    e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable
  );
}
const Rd = ["name", "type", "startTime", "transferSize", "duration"];
function Mr(e) {
  return function (t) {
    return Rd.every((n) => e[n] === t[n]);
  };
}
function kd(e, t) {
  const [n, i, r] = e.reduce(
      (c, u) => (
        u.entryType === "navigation"
          ? c[0].push(u)
          : u.entryType === "largest-contentful-paint"
          ? c[1].push(u)
          : c[2].push(u),
        c
      ),
      [[], [], []]
    ),
    a = [],
    s = [];
  let o = i.length ? i[i.length - 1] : void 0;
  return (
    t.forEach((c) => {
      if (c.entryType === "largest-contentful-paint") {
        (!o || o.startTime < c.startTime) && (o = c);
        return;
      }
      if (c.entryType === "navigation") {
        const u = c;
        c.duration > 0 && !n.find(Mr(u)) && !s.find(Mr(u)) && s.push(u);
        return;
      }
      a.push(c);
    }),
    [...(o ? [o] : []), ...n, ...r, ...a, ...s].sort(
      (c, u) => c.startTime - u.startTime
    )
  );
}
function Nd(e) {
  const t = (i) => {
      const r = kd(e.performanceEvents, i.getEntries());
      e.performanceEvents = r;
    },
    n = new PerformanceObserver(t);
  return (
    [
      "element",
      "event",
      "first-input",
      "largest-contentful-paint",
      "layout-shift",
      "longtask",
      "navigation",
      "paint",
      "resource",
    ].forEach((i) => {
      try {
        n.observe({ type: i, buffered: !0 });
      } catch {}
    }),
    n
  );
}
const Dd = `/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
function t(t){let e=t.length;for(;--e>=0;)t[e]=0}const e=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),a=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),i=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),n=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=new Array(576);t(s);const r=new Array(60);t(r);const o=new Array(512);t(o);const l=new Array(256);t(l);const h=new Array(29);t(h);const d=new Array(30);function _(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}let f,c,u;function w(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}t(d);const m=t=>t<256?o[t]:o[256+(t>>>7)],b=(t,e)=>{t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},g=(t,e,a)=>{t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,b(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},p=(t,e,a)=>{g(t,a[2*e],a[2*e+1])},k=(t,e)=>{let a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},v=(t,e,a)=>{const i=new Array(16);let n,s,r=0;for(n=1;n<=15;n++)r=r+a[n-1]<<1,i[n]=r;for(s=0;s<=e;s++){let e=t[2*s+1];0!==e&&(t[2*s]=k(i[e]++,e))}},y=t=>{let e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.sym_next=t.matches=0},x=t=>{t.bi_valid>8?b(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},z=(t,e,a,i)=>{const n=2*e,s=2*a;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[a]},A=(t,e,a)=>{const i=t.heap[a];let n=a<<1;for(;n<=t.heap_len&&(n<t.heap_len&&z(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!z(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i},E=(t,i,n)=>{let s,r,o,_,f=0;if(0!==t.sym_next)do{s=255&t.pending_buf[t.sym_buf+f++],s+=(255&t.pending_buf[t.sym_buf+f++])<<8,r=t.pending_buf[t.sym_buf+f++],0===s?p(t,r,i):(o=l[r],p(t,o+256+1,i),_=e[o],0!==_&&(r-=h[o],g(t,r,_)),s--,o=m(s),p(t,o,n),_=a[o],0!==_&&(s-=d[o],g(t,s,_)))}while(f<t.sym_next);p(t,256,i)},R=(t,e)=>{const a=e.dyn_tree,i=e.stat_desc.static_tree,n=e.stat_desc.has_stree,s=e.stat_desc.elems;let r,o,l,h=-1;for(t.heap_len=0,t.heap_max=573,r=0;r<s;r++)0!==a[2*r]?(t.heap[++t.heap_len]=h=r,t.depth[r]=0):a[2*r+1]=0;for(;t.heap_len<2;)l=t.heap[++t.heap_len]=h<2?++h:0,a[2*l]=1,t.depth[l]=0,t.opt_len--,n&&(t.static_len-=i[2*l+1]);for(e.max_code=h,r=t.heap_len>>1;r>=1;r--)A(t,a,r);l=s;do{r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],A(t,a,1),o=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=o,a[2*l]=a[2*r]+a[2*o],t.depth[l]=(t.depth[r]>=t.depth[o]?t.depth[r]:t.depth[o])+1,a[2*r+1]=a[2*o+1]=l,t.heap[1]=l++,A(t,a,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],((t,e)=>{const a=e.dyn_tree,i=e.max_code,n=e.stat_desc.static_tree,s=e.stat_desc.has_stree,r=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,l=e.stat_desc.max_length;let h,d,_,f,c,u,w=0;for(f=0;f<=15;f++)t.bl_count[f]=0;for(a[2*t.heap[t.heap_max]+1]=0,h=t.heap_max+1;h<573;h++)d=t.heap[h],f=a[2*a[2*d+1]+1]+1,f>l&&(f=l,w++),a[2*d+1]=f,d>i||(t.bl_count[f]++,c=0,d>=o&&(c=r[d-o]),u=a[2*d],t.opt_len+=u*(f+c),s&&(t.static_len+=u*(n[2*d+1]+c)));if(0!==w){do{for(f=l-1;0===t.bl_count[f];)f--;t.bl_count[f]--,t.bl_count[f+1]+=2,t.bl_count[l]--,w-=2}while(w>0);for(f=l;0!==f;f--)for(d=t.bl_count[f];0!==d;)_=t.heap[--h],_>i||(a[2*_+1]!==f&&(t.opt_len+=(f-a[2*_+1])*a[2*_],a[2*_+1]=f),d--)}})(t,e),v(a,h,t.bl_count)},Z=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=r,r=e[2*(i+1)+1],++o<l&&n===r||(o<h?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[32]++):o<=10?t.bl_tree[34]++:t.bl_tree[36]++,o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4))},U=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),i=0;i<=a;i++)if(n=r,r=e[2*(i+1)+1],!(++o<l&&n===r)){if(o<h)do{p(t,n,t.bl_tree)}while(0!=--o);else 0!==n?(n!==s&&(p(t,n,t.bl_tree),o--),p(t,16,t.bl_tree),g(t,o-3,2)):o<=10?(p(t,17,t.bl_tree),g(t,o-3,3)):(p(t,18,t.bl_tree),g(t,o-11,7));o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4)}};let S=!1;const D=(t,e,a,i)=>{g(t,0+(i?1:0),3),x(t),b(t,a),b(t,~a),a&&t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a};var T=(t,e,a,i)=>{let o,l,h=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=(t=>{let e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0})(t)),R(t,t.l_desc),R(t,t.d_desc),h=(t=>{let e;for(Z(t,t.dyn_ltree,t.l_desc.max_code),Z(t,t.dyn_dtree,t.d_desc.max_code),R(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*n[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e})(t),o=t.opt_len+3+7>>>3,l=t.static_len+3+7>>>3,l<=o&&(o=l)):o=l=a+5,a+4<=o&&-1!==e?D(t,e,a,i):4===t.strategy||l===o?(g(t,2+(i?1:0),3),E(t,s,r)):(g(t,4+(i?1:0),3),((t,e,a,i)=>{let s;for(g(t,e-257,5),g(t,a-1,5),g(t,i-4,4),s=0;s<i;s++)g(t,t.bl_tree[2*n[s]+1],3);U(t,t.dyn_ltree,e-1),U(t,t.dyn_dtree,a-1)})(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),E(t,t.dyn_ltree,t.dyn_dtree)),y(t),i&&x(t)},O={_tr_init:t=>{S||((()=>{let t,n,w,m,b;const g=new Array(16);for(w=0,m=0;m<28;m++)for(h[m]=w,t=0;t<1<<e[m];t++)l[w++]=m;for(l[w-1]=m,b=0,m=0;m<16;m++)for(d[m]=b,t=0;t<1<<a[m];t++)o[b++]=m;for(b>>=7;m<30;m++)for(d[m]=b<<7,t=0;t<1<<a[m]-7;t++)o[256+b++]=m;for(n=0;n<=15;n++)g[n]=0;for(t=0;t<=143;)s[2*t+1]=8,t++,g[8]++;for(;t<=255;)s[2*t+1]=9,t++,g[9]++;for(;t<=279;)s[2*t+1]=7,t++,g[7]++;for(;t<=287;)s[2*t+1]=8,t++,g[8]++;for(v(s,287,g),t=0;t<30;t++)r[2*t+1]=5,r[2*t]=k(t,5);f=new _(s,e,257,286,15),c=new _(r,a,0,30,15),u=new _(new Array(0),i,0,19,7)})(),S=!0),t.l_desc=new w(t.dyn_ltree,f),t.d_desc=new w(t.dyn_dtree,c),t.bl_desc=new w(t.bl_tree,u),t.bi_buf=0,t.bi_valid=0,y(t)},_tr_stored_block:D,_tr_flush_block:T,_tr_tally:(t,e,a)=>(t.pending_buf[t.sym_buf+t.sym_next++]=e,t.pending_buf[t.sym_buf+t.sym_next++]=e>>8,t.pending_buf[t.sym_buf+t.sym_next++]=a,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(l[a]+256+1)]++,t.dyn_dtree[2*m(e)]++),t.sym_next===t.sym_end),_tr_align:t=>{g(t,2,3),p(t,256,s),(t=>{16===t.bi_valid?(b(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)})(t)}};var F=(t,e,a,i)=>{let n=65535&t|0,s=t>>>16&65535|0,r=0;for(;0!==a;){r=a>2e3?2e3:a,a-=r;do{n=n+e[i++]|0,s=s+n|0}while(--r);n%=65521,s%=65521}return n|s<<16|0};const L=new Uint32Array((()=>{let t,e=[];for(var a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e})());var N=(t,e,a,i)=>{const n=L,s=i+a;t^=-1;for(let a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t},I={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},B={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:C,_tr_stored_block:H,_tr_flush_block:M,_tr_tally:j,_tr_align:K}=O,{Z_NO_FLUSH:P,Z_PARTIAL_FLUSH:Y,Z_FULL_FLUSH:G,Z_FINISH:X,Z_BLOCK:W,Z_OK:q,Z_STREAM_END:J,Z_STREAM_ERROR:Q,Z_DATA_ERROR:V,Z_BUF_ERROR:$,Z_DEFAULT_COMPRESSION:tt,Z_FILTERED:et,Z_HUFFMAN_ONLY:at,Z_RLE:it,Z_FIXED:nt,Z_DEFAULT_STRATEGY:st,Z_UNKNOWN:rt,Z_DEFLATED:ot}=B,lt=(t,e)=>(t.msg=I[e],e),ht=t=>2*t-(t>4?9:0),dt=t=>{let e=t.length;for(;--e>=0;)t[e]=0},_t=t=>{let e,a,i,n=t.w_size;e=t.hash_size,i=e;do{a=t.head[--i],t.head[i]=a>=n?a-n:0}while(--e);e=n,i=e;do{a=t.prev[--i],t.prev[i]=a>=n?a-n:0}while(--e)};let ft=(t,e,a)=>(e<<t.hash_shift^a)&t.hash_mask;const ct=t=>{const e=t.state;let a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},ut=(t,e)=>{M(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,ct(t.strm)},wt=(t,e)=>{t.pending_buf[t.pending++]=e},mt=(t,e)=>{t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},bt=(t,e,a,i)=>{let n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,e.set(t.input.subarray(t.next_in,t.next_in+n),a),1===t.state.wrap?t.adler=F(t.adler,e,n,a):2===t.state.wrap&&(t.adler=N(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)},gt=(t,e)=>{let a,i,n=t.max_chain_length,s=t.strstart,r=t.prev_length,o=t.nice_match;const l=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,h=t.window,d=t.w_mask,_=t.prev,f=t.strstart+258;let c=h[s+r-1],u=h[s+r];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(a=e,h[a+r]===u&&h[a+r-1]===c&&h[a]===h[s]&&h[++a]===h[s+1]){s+=2,a++;do{}while(h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&s<f);if(i=258-(f-s),s=f-258,i>r){if(t.match_start=e,r=i,i>=o)break;c=h[s+r-1],u=h[s+r]}}}while((e=_[e&d])>l&&0!=--n);return r<=t.lookahead?r:t.lookahead},pt=t=>{const e=t.w_size;let a,i,n;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=e+(e-262)&&(t.window.set(t.window.subarray(e,e+e-i),0),t.match_start-=e,t.strstart-=e,t.block_start-=e,t.insert>t.strstart&&(t.insert=t.strstart),_t(t),i+=e),0===t.strm.avail_in)break;if(a=bt(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=a,t.lookahead+t.insert>=3)for(n=t.strstart-t.insert,t.ins_h=t.window[n],t.ins_h=ft(t,t.ins_h,t.window[n+1]);t.insert&&(t.ins_h=ft(t,t.ins_h,t.window[n+3-1]),t.prev[n&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=n,n++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)},kt=(t,e)=>{let a,i,n,s=t.pending_buf_size-5>t.w_size?t.w_size:t.pending_buf_size-5,r=0,o=t.strm.avail_in;do{if(a=65535,n=t.bi_valid+42>>3,t.strm.avail_out<n)break;if(n=t.strm.avail_out-n,i=t.strstart-t.block_start,a>i+t.strm.avail_in&&(a=i+t.strm.avail_in),a>n&&(a=n),a<s&&(0===a&&e!==X||e===P||a!==i+t.strm.avail_in))break;r=e===X&&a===i+t.strm.avail_in?1:0,H(t,0,0,r),t.pending_buf[t.pending-4]=a,t.pending_buf[t.pending-3]=a>>8,t.pending_buf[t.pending-2]=~a,t.pending_buf[t.pending-1]=~a>>8,ct(t.strm),i&&(i>a&&(i=a),t.strm.output.set(t.window.subarray(t.block_start,t.block_start+i),t.strm.next_out),t.strm.next_out+=i,t.strm.avail_out-=i,t.strm.total_out+=i,t.block_start+=i,a-=i),a&&(bt(t.strm,t.strm.output,t.strm.next_out,a),t.strm.next_out+=a,t.strm.avail_out-=a,t.strm.total_out+=a)}while(0===r);return o-=t.strm.avail_in,o&&(o>=t.w_size?(t.matches=2,t.window.set(t.strm.input.subarray(t.strm.next_in-t.w_size,t.strm.next_in),0),t.strstart=t.w_size,t.insert=t.strstart):(t.window_size-t.strstart<=o&&(t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,t.insert>t.strstart&&(t.insert=t.strstart)),t.window.set(t.strm.input.subarray(t.strm.next_in-o,t.strm.next_in),t.strstart),t.strstart+=o,t.insert+=o>t.w_size-t.insert?t.w_size-t.insert:o),t.block_start=t.strstart),t.high_water<t.strstart&&(t.high_water=t.strstart),r?4:e!==P&&e!==X&&0===t.strm.avail_in&&t.strstart===t.block_start?2:(n=t.window_size-t.strstart,t.strm.avail_in>n&&t.block_start>=t.w_size&&(t.block_start-=t.w_size,t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,n+=t.w_size,t.insert>t.strstart&&(t.insert=t.strstart)),n>t.strm.avail_in&&(n=t.strm.avail_in),n&&(bt(t.strm,t.window,t.strstart,n),t.strstart+=n,t.insert+=n>t.w_size-t.insert?t.w_size-t.insert:n),t.high_water<t.strstart&&(t.high_water=t.strstart),n=t.bi_valid+42>>3,n=t.pending_buf_size-n>65535?65535:t.pending_buf_size-n,s=n>t.w_size?t.w_size:n,i=t.strstart-t.block_start,(i>=s||(i||e===X)&&e!==P&&0===t.strm.avail_in&&i<=n)&&(a=i>n?n:i,r=e===X&&0===t.strm.avail_in&&a===i?1:0,H(t,t.block_start,a,r),t.block_start+=a,ct(t.strm)),r?3:1)},vt=(t,e)=>{let a,i;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a)),t.match_length>=3)if(i=j(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=ft(t,t.ins_h,t.window[t.strstart+1]);else i=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2},yt=(t,e)=>{let a,i,n;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a),t.match_length<=5&&(t.strategy===et||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-3,i=j(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,i&&(ut(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if(i=j(t,0,t.window[t.strstart-1]),i&&ut(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=j(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2};function xt(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}const zt=[new xt(0,0,0,0,kt),new xt(4,4,8,4,vt),new xt(4,5,16,8,vt),new xt(4,6,32,32,vt),new xt(4,4,16,16,yt),new xt(8,16,32,32,yt),new xt(8,16,128,128,yt),new xt(8,32,128,256,yt),new xt(32,128,258,1024,yt),new xt(32,258,258,4096,yt)];function At(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ot,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),dt(this.dyn_ltree),dt(this.dyn_dtree),dt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),dt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),dt(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Et=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||42!==e.status&&57!==e.status&&69!==e.status&&73!==e.status&&91!==e.status&&103!==e.status&&113!==e.status&&666!==e.status?1:0},Rt=t=>{if(Et(t))return lt(t,Q);t.total_in=t.total_out=0,t.data_type=rt;const e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=2===e.wrap?57:e.wrap?42:113,t.adler=2===e.wrap?0:1,e.last_flush=-2,C(e),q},Zt=t=>{const e=Rt(t);var a;return e===q&&((a=t.state).window_size=2*a.w_size,dt(a.head),a.max_lazy_match=zt[a.level].max_lazy,a.good_match=zt[a.level].good_length,a.nice_match=zt[a.level].nice_length,a.max_chain_length=zt[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=2,a.match_available=0,a.ins_h=0),e},Ut=(t,e,a,i,n,s)=>{if(!t)return Q;let r=1;if(e===tt&&(e=6),i<0?(r=0,i=-i):i>15&&(r=2,i-=16),n<1||n>9||a!==ot||i<8||i>15||e<0||e>9||s<0||s>nt||8===i&&1!==r)return lt(t,Q);8===i&&(i=9);const o=new At;return t.state=o,o.strm=t,o.status=42,o.wrap=r,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+3-1)/3),o.window=new Uint8Array(2*o.w_size),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=3*(o.lit_bufsize-1),o.level=e,o.strategy=s,o.method=a,Zt(t)};var St={deflateInit:(t,e)=>Ut(t,e,ot,15,8,st),deflateInit2:Ut,deflateReset:Zt,deflateResetKeep:Rt,deflateSetHeader:(t,e)=>Et(t)||2!==t.state.wrap?Q:(t.state.gzhead=e,q),deflate:(t,e)=>{if(Et(t)||e>W||e<0)return t?lt(t,Q):Q;const a=t.state;if(!t.output||0!==t.avail_in&&!t.input||666===a.status&&e!==X)return lt(t,0===t.avail_out?$:Q);const i=a.last_flush;if(a.last_flush=e,0!==a.pending){if(ct(t),0===t.avail_out)return a.last_flush=-1,q}else if(0===t.avail_in&&ht(e)<=ht(i)&&e!==X)return lt(t,$);if(666===a.status&&0!==t.avail_in)return lt(t,$);if(42===a.status&&0===a.wrap&&(a.status=113),42===a.status){let e=ot+(a.w_bits-8<<4)<<8,i=-1;if(i=a.strategy>=at||a.level<2?0:a.level<6?1:6===a.level?2:3,e|=i<<6,0!==a.strstart&&(e|=32),e+=31-e%31,mt(a,e),0!==a.strstart&&(mt(a,t.adler>>>16),mt(a,65535&t.adler)),t.adler=1,a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(57===a.status)if(t.adler=0,wt(a,31),wt(a,139),wt(a,8),a.gzhead)wt(a,(a.gzhead.text?1:0)+(a.gzhead.hcrc?2:0)+(a.gzhead.extra?4:0)+(a.gzhead.name?8:0)+(a.gzhead.comment?16:0)),wt(a,255&a.gzhead.time),wt(a,a.gzhead.time>>8&255),wt(a,a.gzhead.time>>16&255),wt(a,a.gzhead.time>>24&255),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,255&a.gzhead.os),a.gzhead.extra&&a.gzhead.extra.length&&(wt(a,255&a.gzhead.extra.length),wt(a,a.gzhead.extra.length>>8&255)),a.gzhead.hcrc&&(t.adler=N(t.adler,a.pending_buf,a.pending,0)),a.gzindex=0,a.status=69;else if(wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,3),a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q;if(69===a.status){if(a.gzhead.extra){let e=a.pending,i=(65535&a.gzhead.extra.length)-a.gzindex;for(;a.pending+i>a.pending_buf_size;){let n=a.pending_buf_size-a.pending;if(a.pending_buf.set(a.gzhead.extra.subarray(a.gzindex,a.gzindex+n),a.pending),a.pending=a.pending_buf_size,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex+=n,ct(t),0!==a.pending)return a.last_flush=-1,q;e=0,i-=n}let n=new Uint8Array(a.gzhead.extra);a.pending_buf.set(n.subarray(a.gzindex,a.gzindex+i),a.pending),a.pending+=i,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex=0}a.status=73}if(73===a.status){if(a.gzhead.name){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.name.length?255&a.gzhead.name.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),a.gzindex=0}a.status=91}if(91===a.status){if(a.gzhead.comment){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.comment.length?255&a.gzhead.comment.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i))}a.status=103}if(103===a.status){if(a.gzhead.hcrc){if(a.pending+2>a.pending_buf_size&&(ct(t),0!==a.pending))return a.last_flush=-1,q;wt(a,255&t.adler),wt(a,t.adler>>8&255),t.adler=0}if(a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(0!==t.avail_in||0!==a.lookahead||e!==P&&666!==a.status){let i=0===a.level?kt(a,e):a.strategy===at?((t,e)=>{let a;for(;;){if(0===t.lookahead&&(pt(t),0===t.lookahead)){if(e===P)return 1;break}if(t.match_length=0,a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):a.strategy===it?((t,e)=>{let a,i,n,s;const r=t.window;for(;;){if(t.lookahead<=258){if(pt(t),t.lookahead<=258&&e===P)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=t.strstart-1,i=r[n],i===r[++n]&&i===r[++n]&&i===r[++n])){s=t.strstart+258;do{}while(i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&n<s);t.match_length=258-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=j(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):zt[a.level].func(a,e);if(3!==i&&4!==i||(a.status=666),1===i||3===i)return 0===t.avail_out&&(a.last_flush=-1),q;if(2===i&&(e===Y?K(a):e!==W&&(H(a,0,0,!1),e===G&&(dt(a.head),0===a.lookahead&&(a.strstart=0,a.block_start=0,a.insert=0))),ct(t),0===t.avail_out))return a.last_flush=-1,q}return e!==X?q:a.wrap<=0?J:(2===a.wrap?(wt(a,255&t.adler),wt(a,t.adler>>8&255),wt(a,t.adler>>16&255),wt(a,t.adler>>24&255),wt(a,255&t.total_in),wt(a,t.total_in>>8&255),wt(a,t.total_in>>16&255),wt(a,t.total_in>>24&255)):(mt(a,t.adler>>>16),mt(a,65535&t.adler)),ct(t),a.wrap>0&&(a.wrap=-a.wrap),0!==a.pending?q:J)},deflateEnd:t=>{if(Et(t))return Q;const e=t.state.status;return t.state=null,113===e?lt(t,V):q},deflateSetDictionary:(t,e)=>{let a=e.length;if(Et(t))return Q;const i=t.state,n=i.wrap;if(2===n||1===n&&42!==i.status||i.lookahead)return Q;if(1===n&&(t.adler=F(t.adler,e,a,0)),i.wrap=0,a>=i.w_size){0===n&&(dt(i.head),i.strstart=0,i.block_start=0,i.insert=0);let t=new Uint8Array(i.w_size);t.set(e.subarray(a-i.w_size,a),0),e=t,a=i.w_size}const s=t.avail_in,r=t.next_in,o=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,pt(i);i.lookahead>=3;){let t=i.strstart,e=i.lookahead-2;do{i.ins_h=ft(i,i.ins_h,i.window[t+3-1]),i.prev[t&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=t,t++}while(--e);i.strstart=t,i.lookahead=2,pt(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,t.next_in=r,t.input=o,t.avail_in=s,i.wrap=n,q},deflateInfo:"pako deflate (from Nodeca project)"};const Dt=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var Tt=function(t){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(const e in a)Dt(a,e)&&(t[e]=a[e])}}return t},Ot=t=>{let e=0;for(let a=0,i=t.length;a<i;a++)e+=t[a].length;const a=new Uint8Array(e);for(let e=0,i=0,n=t.length;e<n;e++){let n=t[e];a.set(n,i),i+=n.length}return a};let Ft=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){Ft=!1}const Lt=new Uint8Array(256);for(let t=0;t<256;t++)Lt[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;Lt[254]=Lt[254]=1;var Nt=t=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,i,n,s,r=t.length,o=0;for(n=0;n<r;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),o+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(o),s=0,n=0;s<o;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},It=(t,e)=>{const a=e||t.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(t.subarray(0,e));let i,n;const s=new Array(2*a);for(n=0,i=0;i<a;){let e=t[i++];if(e<128){s[n++]=e;continue}let r=Lt[e];if(r>4)s[n++]=65533,i+=r-1;else{for(e&=2===r?31:3===r?15:7;r>1&&i<a;)e=e<<6|63&t[i++],r--;r>1?s[n++]=65533:e<65536?s[n++]=e:(e-=65536,s[n++]=55296|e>>10&1023,s[n++]=56320|1023&e)}}return((t,e)=>{if(e<65534&&t.subarray&&Ft)return String.fromCharCode.apply(null,t.length===e?t:t.subarray(0,e));let a="";for(let i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a})(s,n)},Bt=(t,e)=>{(e=e||t.length)>t.length&&(e=t.length);let a=e-1;for(;a>=0&&128==(192&t[a]);)a--;return a<0||0===a?e:a+Lt[t[a]]>e?a:e};var Ct=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};const Ht=Object.prototype.toString,{Z_NO_FLUSH:Mt,Z_SYNC_FLUSH:jt,Z_FULL_FLUSH:Kt,Z_FINISH:Pt,Z_OK:Yt,Z_STREAM_END:Gt,Z_DEFAULT_COMPRESSION:Xt,Z_DEFAULT_STRATEGY:Wt,Z_DEFLATED:qt}=B;function Jt(t){this.options=Tt({level:Xt,method:qt,chunkSize:16384,windowBits:15,memLevel:8,strategy:Wt},t||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=St.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==Yt)throw new Error(I[a]);if(e.header&&St.deflateSetHeader(this.strm,e.header),e.dictionary){let t;if(t="string"==typeof e.dictionary?Nt(e.dictionary):"[object ArrayBuffer]"===Ht.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=St.deflateSetDictionary(this.strm,t),a!==Yt)throw new Error(I[a]);this._dict_set=!0}}function Qt(t,e){const a=new Jt(e);if(a.push(t,!0),a.err)throw a.msg||I[a.err];return a.result}Jt.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize;let n,s;if(this.ended)return!1;for(s=e===~~e?e:!0===e?Pt:Mt,"string"==typeof t?a.input=Nt(t):"[object ArrayBuffer]"===Ht.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;)if(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),(s===jt||s===Kt)&&a.avail_out<=6)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else{if(n=St.deflate(a,s),n===Gt)return a.next_out>0&&this.onData(a.output.subarray(0,a.next_out)),n=St.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===Yt;if(0!==a.avail_out){if(s>0&&a.next_out>0)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else if(0===a.avail_in)break}else this.onData(a.output)}return!0},Jt.prototype.onData=function(t){this.chunks.push(t)},Jt.prototype.onEnd=function(t){t===Yt&&(this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var Vt={Deflate:Jt,deflate:Qt,deflateRaw:function(t,e){return(e=e||{}).raw=!0,Qt(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,Qt(t,e)},constants:B};var $t=function(t,e){let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z,A;const E=t.state;a=t.next_in,z=t.input,i=a+(t.avail_in-5),n=t.next_out,A=t.output,s=n-(e-t.avail_out),r=n+(t.avail_out-257),o=E.dmax,l=E.wsize,h=E.whave,d=E.wnext,_=E.window,f=E.hold,c=E.bits,u=E.lencode,w=E.distcode,m=(1<<E.lenbits)-1,b=(1<<E.distbits)-1;t:do{c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=u[f&m];e:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,0===p)A[n++]=65535&g;else{if(!(16&p)){if(0==(64&p)){g=u[(65535&g)+(f&(1<<p)-1)];continue e}if(32&p){E.mode=16191;break t}t.msg="invalid literal/length code",E.mode=16209;break t}k=65535&g,p&=15,p&&(c<p&&(f+=z[a++]<<c,c+=8),k+=f&(1<<p)-1,f>>>=p,c-=p),c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=w[f&b];a:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,!(16&p)){if(0==(64&p)){g=w[(65535&g)+(f&(1<<p)-1)];continue a}t.msg="invalid distance code",E.mode=16209;break t}if(v=65535&g,p&=15,c<p&&(f+=z[a++]<<c,c+=8,c<p&&(f+=z[a++]<<c,c+=8)),v+=f&(1<<p)-1,v>o){t.msg="invalid distance too far back",E.mode=16209;break t}if(f>>>=p,c-=p,p=n-s,v>p){if(p=v-p,p>h&&E.sane){t.msg="invalid distance too far back",E.mode=16209;break t}if(y=0,x=_,0===d){if(y+=l-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}else if(d<p){if(y+=l+d-p,p-=d,p<k){k-=p;do{A[n++]=_[y++]}while(--p);if(y=0,d<k){p=d,k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}}else if(y+=d-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}for(;k>2;)A[n++]=x[y++],A[n++]=x[y++],A[n++]=x[y++],k-=3;k&&(A[n++]=x[y++],k>1&&(A[n++]=x[y++]))}else{y=n-v;do{A[n++]=A[y++],A[n++]=A[y++],A[n++]=A[y++],k-=3}while(k>2);k&&(A[n++]=A[y++],k>1&&(A[n++]=A[y++]))}break}}break}}while(a<i&&n<r);k=c>>3,a-=k,c-=k<<3,f&=(1<<c)-1,t.next_in=a,t.next_out=n,t.avail_in=a<i?i-a+5:5-(a-i),t.avail_out=n<r?r-n+257:257-(n-r),E.hold=f,E.bits=c};const te=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),ee=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),ae=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),ie=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var ne=(t,e,a,i,n,s,r,o)=>{const l=o.bits;let h,d,_,f,c,u,w=0,m=0,b=0,g=0,p=0,k=0,v=0,y=0,x=0,z=0,A=null;const E=new Uint16Array(16),R=new Uint16Array(16);let Z,U,S,D=null;for(w=0;w<=15;w++)E[w]=0;for(m=0;m<i;m++)E[e[a+m]]++;for(p=l,g=15;g>=1&&0===E[g];g--);if(p>g&&(p=g),0===g)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(b=1;b<g&&0===E[b];b++);for(p<b&&(p=b),y=1,w=1;w<=15;w++)if(y<<=1,y-=E[w],y<0)return-1;if(y>0&&(0===t||1!==g))return-1;for(R[1]=0,w=1;w<15;w++)R[w+1]=R[w]+E[w];for(m=0;m<i;m++)0!==e[a+m]&&(r[R[e[a+m]]++]=m);if(0===t?(A=D=r,u=20):1===t?(A=te,D=ee,u=257):(A=ae,D=ie,u=0),z=0,m=0,w=b,c=s,k=p,v=0,_=-1,x=1<<p,f=x-1,1===t&&x>852||2===t&&x>592)return 1;for(;;){Z=w-v,r[m]+1<u?(U=0,S=r[m]):r[m]>=u?(U=D[r[m]-u],S=A[r[m]-u]):(U=96,S=0),h=1<<w-v,d=1<<k,b=d;do{d-=h,n[c+(z>>v)+d]=Z<<24|U<<16|S|0}while(0!==d);for(h=1<<w-1;z&h;)h>>=1;if(0!==h?(z&=h-1,z+=h):z=0,m++,0==--E[w]){if(w===g)break;w=e[a+r[m]]}if(w>p&&(z&f)!==_){for(0===v&&(v=p),c+=b,k=w-v,y=1<<k;k+v<g&&(y-=E[k+v],!(y<=0));)k++,y<<=1;if(x+=1<<k,1===t&&x>852||2===t&&x>592)return 1;_=z&f,n[_]=p<<24|k<<16|c-s|0}}return 0!==z&&(n[c+z]=w-v<<24|64<<16|0),o.bits=p,0};const{Z_FINISH:se,Z_BLOCK:re,Z_TREES:oe,Z_OK:le,Z_STREAM_END:he,Z_NEED_DICT:de,Z_STREAM_ERROR:_e,Z_DATA_ERROR:fe,Z_MEM_ERROR:ce,Z_BUF_ERROR:ue,Z_DEFLATED:we}=B,me=16209,be=t=>(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24);function ge(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const pe=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||e.mode<16180||e.mode>16211?1:0},ke=t=>{if(pe(t))return _e;const e=t.state;return t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=16180,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,le},ve=t=>{if(pe(t))return _e;const e=t.state;return e.wsize=0,e.whave=0,e.wnext=0,ke(t)},ye=(t,e)=>{let a;if(pe(t))return _e;const i=t.state;return e<0?(a=0,e=-e):(a=5+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?_e:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,ve(t))},xe=(t,e)=>{if(!t)return _e;const a=new ge;t.state=a,a.strm=t,a.window=null,a.mode=16180;const i=ye(t,e);return i!==le&&(t.state=null),i};let ze,Ae,Ee=!0;const Re=t=>{if(Ee){ze=new Int32Array(512),Ae=new Int32Array(32);let e=0;for(;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(ne(1,t.lens,0,288,ze,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;ne(2,t.lens,0,32,Ae,0,t.work,{bits:5}),Ee=!1}t.lencode=ze,t.lenbits=9,t.distcode=Ae,t.distbits=5},Ze=(t,e,a,i)=>{let n;const s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(a-s.wsize,a),0),s.wnext=0,s.whave=s.wsize):(n=s.wsize-s.wnext,n>i&&(n=i),s.window.set(e.subarray(a-i,a-i+n),s.wnext),(i-=n)?(s.window.set(e.subarray(a-i,a),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0};var Ue={inflateReset:ve,inflateReset2:ye,inflateResetKeep:ke,inflateInit:t=>xe(t,15),inflateInit2:xe,inflate:(t,e)=>{let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z=0;const A=new Uint8Array(4);let E,R;const Z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(pe(t)||!t.output||!t.input&&0!==t.avail_in)return _e;a=t.state,16191===a.mode&&(a.mode=16192),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,_=o,f=l,x=le;t:for(;;)switch(a.mode){case 16180:if(0===a.wrap){a.mode=16192;break}for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(2&a.wrap&&35615===h){0===a.wbits&&(a.wbits=15),a.check=0,A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0),h=0,d=0,a.mode=16181;break}if(a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&h)<<8)+(h>>8))%31){t.msg="incorrect header check",a.mode=me;break}if((15&h)!==we){t.msg="unknown compression method",a.mode=me;break}if(h>>>=4,d-=4,y=8+(15&h),0===a.wbits&&(a.wbits=y),y>15||y>a.wbits){t.msg="invalid window size",a.mode=me;break}a.dmax=1<<a.wbits,a.flags=0,t.adler=a.check=1,a.mode=512&h?16189:16191,h=0,d=0;break;case 16181:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.flags=h,(255&a.flags)!==we){t.msg="unknown compression method",a.mode=me;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=me;break}a.head&&(a.head.text=h>>8&1),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16182;case 16182:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.time=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,A[2]=h>>>16&255,A[3]=h>>>24&255,a.check=N(a.check,A,4,0)),h=0,d=0,a.mode=16183;case 16183:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.xflags=255&h,a.head.os=h>>8),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16184;case 16184:if(1024&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length=h,a.head&&(a.head.extra_len=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0}else a.head&&(a.head.extra=null);a.mode=16185;case 16185:if(1024&a.flags&&(c=a.length,c>o&&(c=o),c&&(a.head&&(y=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Uint8Array(a.head.extra_len)),a.head.extra.set(i.subarray(s,s+c),y)),512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,a.length-=c),a.length))break t;a.length=0,a.mode=16186;case 16186:if(2048&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.name+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=16187;case 16187:if(4096&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.comment+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.comment=null);a.mode=16188;case 16188:if(512&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(65535&a.check)){t.msg="header crc mismatch",a.mode=me;break}h=0,d=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=16191;break;case 16189:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}t.adler=a.check=be(h),h=0,d=0,a.mode=16190;case 16190:if(0===a.havedict)return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,de;t.adler=a.check=1,a.mode=16191;case 16191:if(e===re||e===oe)break t;case 16192:if(a.last){h>>>=7&d,d-=7&d,a.mode=16206;break}for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}switch(a.last=1&h,h>>>=1,d-=1,3&h){case 0:a.mode=16193;break;case 1:if(Re(a),a.mode=16199,e===oe){h>>>=2,d-=2;break t}break;case 2:a.mode=16196;break;case 3:t.msg="invalid block type",a.mode=me}h>>>=2,d-=2;break;case 16193:for(h>>>=7&d,d-=7&d;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if((65535&h)!=(h>>>16^65535)){t.msg="invalid stored block lengths",a.mode=me;break}if(a.length=65535&h,h=0,d=0,a.mode=16194,e===oe)break t;case 16194:a.mode=16195;case 16195:if(c=a.length,c){if(c>o&&(c=o),c>l&&(c=l),0===c)break t;n.set(i.subarray(s,s+c),r),o-=c,s+=c,l-=c,r+=c,a.length-=c;break}a.mode=16191;break;case 16196:for(;d<14;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.nlen=257+(31&h),h>>>=5,d-=5,a.ndist=1+(31&h),h>>>=5,d-=5,a.ncode=4+(15&h),h>>>=4,d-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=me;break}a.have=0,a.mode=16197;case 16197:for(;a.have<a.ncode;){for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.lens[Z[a.have++]]=7&h,h>>>=3,d-=3}for(;a.have<19;)a.lens[Z[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,E={bits:a.lenbits},x=ne(0,a.lens,0,19,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid code lengths set",a.mode=me;break}a.have=0,a.mode=16198;case 16198:for(;a.have<a.nlen+a.ndist;){for(;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(g<16)h>>>=m,d-=m,a.lens[a.have++]=g;else{if(16===g){for(R=m+2;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(h>>>=m,d-=m,0===a.have){t.msg="invalid bit length repeat",a.mode=me;break}y=a.lens[a.have-1],c=3+(3&h),h>>>=2,d-=2}else if(17===g){for(R=m+3;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=3+(7&h),h>>>=3,d-=3}else{for(R=m+7;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=11+(127&h),h>>>=7,d-=7}if(a.have+c>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=me;break}for(;c--;)a.lens[a.have++]=y}}if(a.mode===me)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=me;break}if(a.lenbits=9,E={bits:a.lenbits},x=ne(1,a.lens,0,a.nlen,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid literal/lengths set",a.mode=me;break}if(a.distbits=6,a.distcode=a.distdyn,E={bits:a.distbits},x=ne(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,E),a.distbits=E.bits,x){t.msg="invalid distances set",a.mode=me;break}if(a.mode=16199,e===oe)break t;case 16199:a.mode=16200;case 16200:if(o>=6&&l>=258){t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,$t(t,f),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,16191===a.mode&&(a.back=-1);break}for(a.back=0;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(b&&0==(240&b)){for(p=m,k=b,v=g;z=a.lencode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,a.length=g,0===b){a.mode=16205;break}if(32&b){a.back=-1,a.mode=16191;break}if(64&b){t.msg="invalid literal/length code",a.mode=me;break}a.extra=15&b,a.mode=16201;case 16201:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=16202;case 16202:for(;z=a.distcode[h&(1<<a.distbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(0==(240&b)){for(p=m,k=b,v=g;z=a.distcode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,64&b){t.msg="invalid distance code",a.mode=me;break}a.offset=g,a.extra=15&b,a.mode=16203;case 16203:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.offset+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=me;break}a.mode=16204;case 16204:if(0===l)break t;if(c=f-l,a.offset>c){if(c=a.offset-c,c>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=me;break}c>a.wnext?(c-=a.wnext,u=a.wsize-c):u=a.wnext-c,c>a.length&&(c=a.length),w=a.window}else w=n,u=r-a.offset,c=a.length;c>l&&(c=l),l-=c,a.length-=c;do{n[r++]=w[u++]}while(--c);0===a.length&&(a.mode=16200);break;case 16205:if(0===l)break t;n[r++]=a.length,l--,a.mode=16200;break;case 16206:if(a.wrap){for(;d<32;){if(0===o)break t;o--,h|=i[s++]<<d,d+=8}if(f-=l,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,r-f):F(a.check,n,f,r-f)),f=l,4&a.wrap&&(a.flags?h:be(h))!==a.check){t.msg="incorrect data check",a.mode=me;break}h=0,d=0}a.mode=16207;case 16207:if(a.wrap&&a.flags){for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=me;break}h=0,d=0}a.mode=16208;case 16208:x=he;break t;case me:x=fe;break t;case 16210:return ce;default:return _e}return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,(a.wsize||f!==t.avail_out&&a.mode<me&&(a.mode<16206||e!==se))&&Ze(t,t.output,t.next_out,f-t.avail_out),_-=t.avail_in,f-=t.avail_out,t.total_in+=_,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,t.next_out-f):F(a.check,n,f,t.next_out-f)),t.data_type=a.bits+(a.last?64:0)+(16191===a.mode?128:0)+(16199===a.mode||16194===a.mode?256:0),(0===_&&0===f||e===se)&&x===le&&(x=ue),x},inflateEnd:t=>{if(pe(t))return _e;let e=t.state;return e.window&&(e.window=null),t.state=null,le},inflateGetHeader:(t,e)=>{if(pe(t))return _e;const a=t.state;return 0==(2&a.wrap)?_e:(a.head=e,e.done=!1,le)},inflateSetDictionary:(t,e)=>{const a=e.length;let i,n,s;return pe(t)?_e:(i=t.state,0!==i.wrap&&16190!==i.mode?_e:16190===i.mode&&(n=1,n=F(n,e,a,0),n!==i.check)?fe:(s=Ze(t,e,a,a),s?(i.mode=16210,ce):(i.havedict=1,le)))},inflateInfo:"pako inflate (from Nodeca project)"};var Se=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const De=Object.prototype.toString,{Z_NO_FLUSH:Te,Z_FINISH:Oe,Z_OK:Fe,Z_STREAM_END:Le,Z_NEED_DICT:Ne,Z_STREAM_ERROR:Ie,Z_DATA_ERROR:Be,Z_MEM_ERROR:Ce}=B;function He(t){this.options=Tt({chunkSize:65536,windowBits:15,to:""},t||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=Ue.inflateInit2(this.strm,e.windowBits);if(a!==Fe)throw new Error(I[a]);if(this.header=new Se,Ue.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=Nt(e.dictionary):"[object ArrayBuffer]"===De.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(a=Ue.inflateSetDictionary(this.strm,e.dictionary),a!==Fe)))throw new Error(I[a])}He.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize,n=this.options.dictionary;let s,r,o;if(this.ended)return!1;for(r=e===~~e?e:!0===e?Oe:Te,"[object ArrayBuffer]"===De.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;){for(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),s=Ue.inflate(a,r),s===Ne&&n&&(s=Ue.inflateSetDictionary(a,n),s===Fe?s=Ue.inflate(a,r):s===Be&&(s=Ne));a.avail_in>0&&s===Le&&a.state.wrap>0&&0!==t[a.next_in];)Ue.inflateReset(a),s=Ue.inflate(a,r);switch(s){case Ie:case Be:case Ne:case Ce:return this.onEnd(s),this.ended=!0,!1}if(o=a.avail_out,a.next_out&&(0===a.avail_out||s===Le))if("string"===this.options.to){let t=Bt(a.output,a.next_out),e=a.next_out-t,n=It(a.output,t);a.next_out=e,a.avail_out=i-e,e&&a.output.set(a.output.subarray(t,t+e),0),this.onData(n)}else this.onData(a.output.length===a.next_out?a.output:a.output.subarray(0,a.next_out));if(s!==Fe||0!==o){if(s===Le)return s=Ue.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(0===a.avail_in)break}}return!0},He.prototype.onData=function(t){this.chunks.push(t)},He.prototype.onEnd=function(t){t===Fe&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};const{Deflate:Me,deflate:je,deflateRaw:Ke,gzip:Pe}=Vt;var Ye=Me,Ge=je,Xe=B;const We=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const e=this._hasEvents?",":"";this.deflate.push(e+t,Xe.Z_SYNC_FLUSH),this._hasEvents=!0}finish(){if(this.deflate.push("]",Xe.Z_FINISH),this.deflate.err)throw this.deflate.err;const t=this.deflate.result;return this._init(),t}_init(){this._hasEvents=!1,this.deflate=new Ye,this.deflate.push("[",Xe.Z_NO_FLUSH)}},qe={clear:()=>{We.clear()},addEvent:t=>We.addEvent(t),finish:()=>We.finish(),compress:t=>function(t){return Ge(t)}(t)};addEventListener("message",(function(t){const e=t.data.method,a=t.data.id,i=t.data.arg;if(e in qe&&"function"==typeof qe[e])try{const t=qe[e](i);postMessage({id:a,method:e,success:!0,response:t})}catch(t){postMessage({id:a,method:e,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});`;
function Id() {
  const e = new Blob([Dd]);
  return URL.createObjectURL(e);
}
function zi(e) {
  return e > 9999999999 ? e : e * 1e3;
}
class Gi extends Error {
  constructor() {
    super(`Event buffer exceeded maximum size of ${Mi}.`);
  }
}
class Bn {
  __init() {
    this._totalSize = 0;
  }
  constructor() {
    Bn.prototype.__init.call(this), (this.events = []);
  }
  get hasEvents() {
    return this.events.length > 0;
  }
  get type() {
    return "sync";
  }
  destroy() {
    this.events = [];
  }
  async addEvent(t) {
    const n = JSON.stringify(t).length;
    if (((this._totalSize += n), this._totalSize > Mi)) throw new Gi();
    this.events.push(t);
  }
  finish() {
    return new Promise((t) => {
      const n = this.events;
      this.clear(), t(JSON.stringify(n));
    });
  }
  clear() {
    (this.events = []), (this._totalSize = 0);
  }
  getEarliestTimestamp() {
    const t = this.events.map((n) => n.timestamp).sort()[0];
    return t ? zi(t) : null;
  }
}
class Ad {
  constructor(t) {
    (this._worker = t), (this._id = 0);
  }
  ensureReady() {
    return this._ensureReadyPromise
      ? this._ensureReadyPromise
      : ((this._ensureReadyPromise = new Promise((t, n) => {
          this._worker.addEventListener(
            "message",
            ({ data: i }) => {
              i.success ? t() : n();
            },
            { once: !0 }
          ),
            this._worker.addEventListener(
              "error",
              (i) => {
                n(i);
              },
              { once: !0 }
            );
        })),
        this._ensureReadyPromise);
  }
  destroy() {
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      _.log("[Replay] Destroying compression worker"),
      this._worker.terminate();
  }
  postMessage(t, n) {
    const i = this._getAndIncrementId();
    return new Promise((r, a) => {
      const s = ({ data: o }) => {
        const c = o;
        if (c.method === t && c.id === i) {
          if ((this._worker.removeEventListener("message", s), !c.success)) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
              _.error("[Replay]", c.response),
              a(new Error("Error in compression worker"));
            return;
          }
          r(c.response);
        }
      };
      this._worker.addEventListener("message", s),
        this._worker.postMessage({ id: i, method: t, arg: n });
    });
  }
  _getAndIncrementId() {
    return this._id++;
  }
}
class Fi {
  __init() {
    this._totalSize = 0;
  }
  constructor(t) {
    Fi.prototype.__init.call(this),
      (this._worker = new Ad(t)),
      (this._earliestTimestamp = null);
  }
  get hasEvents() {
    return !!this._earliestTimestamp;
  }
  get type() {
    return "worker";
  }
  ensureReady() {
    return this._worker.ensureReady();
  }
  destroy() {
    this._worker.destroy();
  }
  addEvent(t) {
    const n = zi(t.timestamp);
    (!this._earliestTimestamp || n < this._earliestTimestamp) &&
      (this._earliestTimestamp = n);
    const i = JSON.stringify(t);
    return (
      (this._totalSize += i.length),
      this._totalSize > Mi
        ? Promise.reject(new Gi())
        : this._sendEventToWorker(i)
    );
  }
  finish() {
    return this._finishRequest();
  }
  clear() {
    (this._earliestTimestamp = null),
      (this._totalSize = 0),
      this._worker.postMessage("clear");
  }
  getEarliestTimestamp() {
    return this._earliestTimestamp;
  }
  _sendEventToWorker(t) {
    return this._worker.postMessage("addEvent", t);
  }
  async _finishRequest() {
    const t = await this._worker.postMessage("finish");
    return (this._earliestTimestamp = null), (this._totalSize = 0), t;
  }
}
class xd {
  constructor(t) {
    (this._fallback = new Bn()),
      (this._compression = new Fi(t)),
      (this._used = this._fallback),
      (this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded());
  }
  get type() {
    return this._used.type;
  }
  get hasEvents() {
    return this._used.hasEvents;
  }
  destroy() {
    this._fallback.destroy(), this._compression.destroy();
  }
  clear() {
    return this._used.clear();
  }
  getEarliestTimestamp() {
    return this._used.getEarliestTimestamp();
  }
  addEvent(t) {
    return this._used.addEvent(t);
  }
  async finish() {
    return await this.ensureWorkerIsLoaded(), this._used.finish();
  }
  ensureWorkerIsLoaded() {
    return this._ensureWorkerIsLoadedPromise;
  }
  async _ensureWorkerIsLoaded() {
    try {
      await this._compression.ensureReady();
    } catch {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.log(
          "[Replay] Failed to load the compression worker, falling back to simple buffer"
        );
      return;
    }
    await this._switchToCompressionWorker();
  }
  async _switchToCompressionWorker() {
    const { events: t } = this._fallback,
      n = [];
    for (const i of t) n.push(this._compression.addEvent(i));
    this._used = this._compression;
    try {
      await Promise.all(n);
    } catch (i) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.warn("[Replay] Failed to add events when switching buffers.", i);
    }
  }
}
function Od({ useCompression: e }) {
  if (e && window.Worker)
    try {
      const t = Id();
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.log("[Replay] Using compression worker");
      const n = new Worker(t);
      return new xd(n);
    } catch {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.log("[Replay] Failed to create compression worker");
    }
  return (
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      _.log("[Replay] Using simple buffer"),
    new Bn()
  );
}
function Yi() {
  return "sessionStorage" in k && !!k.sessionStorage;
}
function Cd(e) {
  Ud(), (e.session = void 0);
}
function Ud() {
  if (Yi())
    try {
      k.sessionStorage.removeItem(Li);
    } catch {}
}
function mi(e, t, n = +new Date()) {
  return e === null || t === void 0 || t < 0 ? !0 : t === 0 ? !1 : e + t <= n;
}
function sa(e, t, n = +new Date()) {
  return (
    mi(e.started, t.maxSessionLife, n) ||
    mi(e.lastActivity, t.sessionIdleExpire, n)
  );
}
function aa(e) {
  return e === void 0 ? !1 : Math.random() < e;
}
function $i(e) {
  if (Yi())
    try {
      k.sessionStorage.setItem(Li, JSON.stringify(e));
    } catch {}
}
function Hi(e) {
  const t = Date.now(),
    n = e.id || Ct(),
    i = e.started || t,
    r = e.lastActivity || t,
    a = e.segmentId || 0,
    s = e.sampled;
  return {
    id: n,
    started: i,
    lastActivity: r,
    segmentId: a,
    sampled: s,
    shouldRefresh: !0,
  };
}
function Ld(e, t) {
  return aa(e) ? "session" : t ? "buffer" : !1;
}
function Bd({
  sessionSampleRate: e,
  allowBuffering: t,
  stickySession: n = !1,
}) {
  const i = Ld(e, t),
    r = Hi({ sampled: i });
  return (
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      _.log(`[Replay] Creating new session: ${r.id}`),
    n && $i(r),
    r
  );
}
function Md() {
  if (!Yi()) return null;
  try {
    const e = k.sessionStorage.getItem(Li);
    if (!e) return null;
    const t = JSON.parse(e);
    return Hi(t);
  } catch {
    return null;
  }
}
function Zn({
  timeouts: e,
  currentSession: t,
  stickySession: n,
  sessionSampleRate: i,
  allowBuffering: r,
}) {
  const a = t || (n && Md());
  if (a) {
    if (!sa(a, e) || (r && a.shouldRefresh))
      return { type: "saved", session: a };
    if (a.shouldRefresh)
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.log("[Replay] Session has expired");
    else return { type: "new", session: Hi({ sampled: !1 }) };
  }
  return {
    type: "new",
    session: Bd({ stickySession: n, sessionSampleRate: i, allowBuffering: r }),
  };
}
function Pd(e) {
  return e.type === L.Custom;
}
async function Tn(e, t, n) {
  if (
    !e.eventBuffer ||
    e.isPaused() ||
    zi(t.timestamp) + e.timeouts.sessionIdlePause < Date.now()
  )
    return null;
  try {
    n && e.eventBuffer.clear();
    const r = e.getOptions(),
      a =
        typeof r.beforeAddRecordingEvent == "function" && Pd(t)
          ? r.beforeAddRecordingEvent(t)
          : t;
    return a ? await e.eventBuffer.addEvent(a) : void 0;
  } catch (r) {
    const a = r && r instanceof Gi ? "addEventSizeExceeded" : "addEvent";
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && _.error(r),
      await e.stop(a);
    const s = w().getClient();
    s && s.recordDroppedEvent("internal_sdk_error", "replay");
  }
}
function gi(e) {
  return !e.type;
}
function yi(e) {
  return e.type === "transaction";
}
function zd(e) {
  return e.type === "replay_event";
}
function oa(e) {
  const t = Gd();
  return (n, i) => {
    if (!gi(n) && !yi(n)) return;
    const r = i && i.statusCode;
    if (!(t && (!r || r < 200 || r >= 300))) {
      if (
        yi(n) &&
        n.contexts &&
        n.contexts.trace &&
        n.contexts.trace.trace_id
      ) {
        e.getContext().traceIds.add(n.contexts.trace.trace_id);
        return;
      }
      gi(n) &&
        (n.event_id && e.getContext().errorIds.add(n.event_id),
        e.recordingMode === "buffer" &&
          n.tags &&
          n.tags.replayId &&
          setTimeout(() => {
            e.sendBufferedReplayOrFlush();
          }));
    }
  };
}
function Gd() {
  const e = w().getClient();
  if (!e) return !1;
  const t = e.getTransport();
  return (t && t.send.__sentry__baseTransport__) || !1;
}
function Fd(e, t) {
  return e.type ||
    !e.exception ||
    !e.exception.values ||
    !e.exception.values.length
    ? !1
    : t.originalException && t.originalException.__rrweb__
    ? !0
    : e.exception.values.some((n) =>
        !n.stacktrace || !n.stacktrace.frames || !n.stacktrace.frames.length
          ? !1
          : n.stacktrace.frames.some(
              (i) => i.filename && i.filename.includes("/rrweb/src/")
            )
      );
}
function Yd(e, t) {
  return e.recordingMode !== "buffer" ||
    t.message === Bi ||
    !t.exception ||
    t.type
    ? !1
    : aa(e.getOptions().errorSampleRate);
}
function $d(e, t = !1) {
  const n = t ? oa(e) : void 0;
  return (i, r) =>
    zd(i)
      ? (delete i.breadcrumbs, i)
      : !gi(i) && !yi(i)
      ? i
      : Fd(i, r) && !e.getOptions()._experiments.captureExceptions
      ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          _.log("[Replay] Ignoring error from rrweb internals", i),
        null)
      : ((Yd(e, i) || e.recordingMode === "session") &&
          (i.tags = { ...i.tags, replayId: e.getSessionId() }),
        n && n(i, { statusCode: 200 }),
        i);
}
function Mn(e, t) {
  return t.map(({ type: n, start: i, end: r, name: a, data: s }) => {
    const o = e.throttledAddEvent({
      type: L.Custom,
      timestamp: i,
      data: {
        tag: "performanceSpan",
        payload: {
          op: n,
          description: a,
          startTimestamp: i,
          endTimestamp: r,
          data: s,
        },
      },
    });
    return typeof o == "string" ? Promise.resolve(null) : o;
  });
}
function Hd(e) {
  const { from: t, to: n } = e,
    i = Date.now() / 1e3;
  return {
    type: "navigation.push",
    start: i,
    end: i,
    name: n,
    data: { previous: t },
  };
}
function jd(e) {
  return (t) => {
    if (!e.isEnabled()) return;
    const n = Hd(t);
    n !== null &&
      (e.getContext().urls.push(n.name),
      e.triggerUserActivity(),
      e.addUpdate(() => (Mn(e, [n]), !1)));
  };
}
function Wd(e, t) {
  return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
    e.getOptions()._experiments.traceInternals
    ? !1
    : qd(t);
}
function qd(e) {
  const t = w().getClient(),
    n = t && t.getDsn();
  return n ? e.includes(n.host) : !1;
}
function Pn(e, t) {
  e.isEnabled() &&
    t !== null &&
    (Wd(e, t.name) || e.addUpdate(() => (Mn(e, [t]), !0)));
}
function Vd(e) {
  const { startTimestamp: t, endTimestamp: n, fetchData: i, response: r } = e;
  if (!n) return null;
  const { method: a, url: s } = i;
  return {
    type: "resource.fetch",
    start: t / 1e3,
    end: n / 1e3,
    name: s,
    data: { method: a, statusCode: r ? r.status : void 0 },
  };
}
function Zd(e) {
  return (t) => {
    if (!e.isEnabled()) return;
    const n = Vd(t);
    Pn(e, n);
  };
}
function Kd(e) {
  const { startTimestamp: t, endTimestamp: n, xhr: i } = e,
    r = i[Pt];
  if (!t || !n || !r) return null;
  const { method: a, url: s, status_code: o } = r;
  return s === void 0
    ? null
    : {
        type: "resource.xhr",
        name: s,
        start: t / 1e3,
        end: n / 1e3,
        data: { method: a, statusCode: o },
      };
}
function Xd(e) {
  return (t) => {
    if (!e.isEnabled()) return;
    const n = Kd(t);
    Pn(e, n);
  };
}
const zt = 10,
  ji = 11,
  Ei = 12,
  Ut = 13,
  bi = 14,
  me = 15,
  xt = 20,
  pt = 21,
  Si = 22,
  ge = 23,
  ca = ["true", "false", "null"];
function Jd(e, t) {
  if (!t.length) return e;
  let n = e;
  const i = t.length - 1,
    r = t[i];
  n = Qd(n, r);
  for (let a = i; a >= 0; a--)
    switch (t[a]) {
      case zt:
        n = `${n}}`;
        break;
      case xt:
        n = `${n}]`;
        break;
    }
  return n;
}
function Qd(e, t) {
  switch (t) {
    case zt:
      return `${e}"~~":"~~"`;
    case ji:
      return `${e}:"~~"`;
    case Ei:
      return `${e}~~":"~~"`;
    case Ut:
      return nf(e);
    case bi:
      return `${e}~~"`;
    case me:
      return `${e},"~~":"~~"`;
    case xt:
      return `${e}"~~"`;
    case pt:
      return tf(e);
    case Si:
      return `${e}~~"`;
    case ge:
      return `${e},"~~"`;
  }
  return e;
}
function tf(e) {
  const t = ef(e);
  if (t > -1) {
    const n = e.slice(t + 1);
    return ca.includes(n.trim()) ? `${e},"~~"` : `${e.slice(0, t + 1)}"~~"`;
  }
  return e;
}
function ef(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    const n = e[t];
    if (n === "," || n === "[") return t;
  }
  return -1;
}
function nf(e) {
  const t = e.lastIndexOf(":"),
    n = e.slice(t + 1);
  return ca.includes(n.trim()) ? `${e},"~~":"~~"` : `${e.slice(0, t + 1)}"~~"`;
}
function rf(e) {
  const t = [];
  for (let n = 0; n < e.length; n++) sf(t, e, n);
  return t;
}
function sf(e, t, n) {
  const i = e[e.length - 1],
    r = t[n];
  if (!/\s/.test(r)) {
    if (r === '"' && !ua(t, n)) {
      af(e, i);
      return;
    }
    switch (r) {
      case "{":
        of(e, i);
        break;
      case "[":
        cf(e, i);
        break;
      case ":":
        uf(e, i);
        break;
      case ",":
        lf(e, i);
        break;
      case "}":
        df(e, i);
        break;
      case "]":
        ff(e, i);
        break;
    }
  }
}
function af(e, t) {
  if (t === bi) {
    e.pop(), e.push(me);
    return;
  }
  if (t === Si) {
    e.pop(), e.push(ge);
    return;
  }
  if (t === Ut) {
    e.push(bi);
    return;
  }
  if (t === pt) {
    e.push(Si);
    return;
  }
  if (t === zt) {
    e.push(Ei);
    return;
  }
  if (t === Ei) {
    e.pop(), e.push(ji);
    return;
  }
}
function of(e, t) {
  if (!t) {
    e.push(zt);
    return;
  }
  if (t === Ut) {
    e.push(zt);
    return;
  }
  if ((t === pt && e.push(zt), t === xt)) {
    e.push(zt);
    return;
  }
}
function cf(e, t) {
  if (!t) {
    e.push(xt), e.push(pt);
    return;
  }
  if (t === Ut) {
    e.push(xt), e.push(pt);
    return;
  }
  if ((t === pt && (e.push(xt), e.push(pt)), t === xt)) {
    e.push(xt), e.push(pt);
    return;
  }
}
function uf(e, t) {
  t === ji && (e.pop(), e.push(Ut));
}
function lf(e, t) {
  if (t === Ut) {
    e.pop();
    return;
  }
  if (t === me) {
    e.pop(), e.pop();
    return;
  }
  if (t !== pt && t === ge) {
    e.pop();
    return;
  }
}
function df(e, t) {
  t === zt && e.pop(),
    t === Ut && (e.pop(), e.pop()),
    t === me && (e.pop(), e.pop(), e.pop()),
    e[e.length - 1] === Ut && e.push(me),
    e[e.length - 1] === pt && e.push(ge);
}
function ff(e, t) {
  t === xt && e.pop(),
    t === pt && (e.pop(), e.pop()),
    t === ge && (e.pop(), e.pop(), e.pop()),
    e[e.length - 1] === Ut && e.push(me),
    e[e.length - 1] === pt && e.push(ge);
}
function ua(e, t) {
  return e[t - 1] === "\\" && !ua(e, t - 1);
}
function la(e) {
  const t = rf(e);
  return Jd(e, t);
}
function Rn(e, t) {
  if (e)
    try {
      if (typeof e == "string") return t.encode(e).length;
      if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
      if (e instanceof FormData) {
        const n = ha(e);
        return t.encode(n).length;
      }
      if (e instanceof Blob) return e.size;
      if (e instanceof ArrayBuffer) return e.byteLength;
    } catch {}
}
function da(e) {
  if (!e) return;
  const t = parseInt(e, 10);
  return isNaN(t) ? void 0 : t;
}
function fa(e) {
  if (typeof e == "string") return e;
  if (e instanceof URLSearchParams) return e.toString();
  if (e instanceof FormData) return ha(e);
}
function _a(e, t) {
  if (!t) return null;
  const {
    startTimestamp: n,
    endTimestamp: i,
    url: r,
    method: a,
    statusCode: s,
    request: o,
    response: c,
  } = t;
  return {
    type: e,
    start: n / 1e3,
    end: i / 1e3,
    name: r,
    data: Rt({ method: a, statusCode: s, request: o, response: c }),
  };
}
function He(e) {
  return { headers: {}, size: e, _meta: { warnings: ["URL_SKIPPED"] } };
}
function Gt(e, t, n) {
  if (!t && Object.keys(e).length === 0) return;
  if (!t) return { headers: e };
  if (!n) return { headers: e, size: t };
  const i = { headers: e, size: t },
    { body: r, warnings: a } = _f(n);
  return (i.body = r), a.length > 0 && (i._meta = { warnings: a }), i;
}
function wi(e, t) {
  return Object.keys(e).reduce((n, i) => {
    const r = i.toLowerCase();
    return t.includes(r) && e[i] && (n[r] = e[i]), n;
  }, {});
}
function ha(e) {
  return new URLSearchParams(e).toString();
}
function _f(e) {
  if (!e || typeof e != "string") return { body: e, warnings: [] };
  const t = e.length > an;
  if (hf(e))
    try {
      const n = t ? la(e.slice(0, an)) : e;
      return { body: JSON.parse(n), warnings: t ? ["JSON_TRUNCATED"] : [] };
    } catch {
      return {
        body: t ? `${e.slice(0, an)}…` : e,
        warnings: t ? ["INVALID_JSON", "TEXT_TRUNCATED"] : ["INVALID_JSON"],
      };
    }
  return {
    body: t ? `${e.slice(0, an)}…` : e,
    warnings: t ? ["TEXT_TRUNCATED"] : [],
  };
}
function hf(e) {
  const t = e[0],
    n = e[e.length - 1];
  return (t === "[" && n === "]") || (t === "{" && n === "}");
}
function pa(e, t) {
  const n = pf(e);
  return Se(n, t);
}
function pf(e, t = k.document.baseURI) {
  if (
    e.startsWith("http://") ||
    e.startsWith("https://") ||
    e.startsWith(k.location.origin)
  )
    return e;
  const n = new URL(e, t);
  if (n.origin !== new URL(t).origin) return e;
  const i = n.href;
  return !e.endsWith("/") && i.endsWith("/") ? i.slice(0, -1) : i;
}
async function mf(e, t, n) {
  try {
    const i = await yf(e, t, n),
      r = _a("resource.fetch", i);
    Pn(n.replay, r);
  } catch (i) {
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      _.error("[Replay] Failed to capture fetch breadcrumb", i);
  }
}
function gf(e, t, n) {
  const { input: i, response: r } = t,
    a = ma(i),
    s = Rn(a, n.textEncoder),
    o = r ? da(r.headers.get("content-length")) : void 0;
  s !== void 0 && (e.data.request_body_size = s),
    o !== void 0 && (e.data.response_body_size = o);
}
async function yf(e, t, n) {
  const { startTimestamp: i, endTimestamp: r } = t,
    {
      url: a,
      method: s,
      status_code: o = 0,
      request_body_size: c,
      response_body_size: u,
    } = e.data,
    l = pa(a, n.networkDetailAllowUrls),
    d = l ? Ef(n, t.input, c) : He(c),
    h = await bf(l, n, t.response, u);
  return {
    startTimestamp: i,
    endTimestamp: r,
    url: a,
    method: s,
    statusCode: o,
    request: d,
    response: h,
  };
}
function Ef({ networkCaptureBodies: e, networkRequestHeaders: t }, n, i) {
  const r = wf(n, t);
  if (!e) return Gt(r, i, void 0);
  const a = ma(n),
    s = fa(a);
  return Gt(r, i, s);
}
async function bf(
  e,
  { networkCaptureBodies: t, textEncoder: n, networkResponseHeaders: i },
  r,
  a
) {
  if (!e && a !== void 0) return He(a);
  const s = ga(r.headers, i);
  if (!t && a !== void 0) return Gt(s, a, void 0);
  try {
    const o = r.clone(),
      c = await Sf(o),
      u = c && c.length && a === void 0 ? Rn(c, n) : a;
    return e ? (t ? Gt(s, u, c) : Gt(s, u, void 0)) : He(u);
  } catch {
    return Gt(s, a, void 0);
  }
}
async function Sf(e) {
  try {
    return await e.text();
  } catch {
    return;
  }
}
function ma(e = []) {
  if (!(e.length !== 2 || typeof e[1] != "object")) return e[1].body;
}
function ga(e, t) {
  const n = {};
  return (
    t.forEach((i) => {
      e.get(i) && (n[i] = e.get(i));
    }),
    n
  );
}
function wf(e, t) {
  return e.length === 1 && typeof e[0] != "string"
    ? Pr(e[0], t)
    : e.length === 2
    ? Pr(e[1], t)
    : {};
}
function Pr(e, t) {
  if (!e) return {};
  const n = e.headers;
  return n
    ? n instanceof Headers
      ? ga(n, t)
      : Array.isArray(n)
      ? {}
      : wi(n, t)
    : {};
}
async function vf(e, t, n) {
  try {
    const i = Rf(e, t, n),
      r = _a("resource.xhr", i);
    Pn(n.replay, r);
  } catch (i) {
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      _.error("[Replay] Failed to capture fetch breadcrumb", i);
  }
}
function Tf(e, t, n) {
  const { xhr: i, input: r } = t,
    a = Rn(r, n.textEncoder),
    s = i.getResponseHeader("content-length")
      ? da(i.getResponseHeader("content-length"))
      : Rn(i.response, n.textEncoder);
  a !== void 0 && (e.data.request_body_size = a),
    s !== void 0 && (e.data.response_body_size = s);
}
function Rf(e, t, n) {
  const { startTimestamp: i, endTimestamp: r, input: a, xhr: s } = t,
    {
      url: o,
      method: c,
      status_code: u = 0,
      request_body_size: l,
      response_body_size: d,
    } = e.data;
  if (!o) return null;
  if (!pa(o, n.networkDetailAllowUrls)) {
    const E = He(l),
      O = He(d);
    return {
      startTimestamp: i,
      endTimestamp: r,
      url: o,
      method: c,
      statusCode: u,
      request: E,
      response: O,
    };
  }
  const h = s[Pt],
    f = h ? wi(h.request_headers, n.networkRequestHeaders) : {},
    p = wi(kf(s), n.networkResponseHeaders),
    b = Gt(f, l, n.networkCaptureBodies ? fa(a) : void 0),
    v = Gt(p, d, n.networkCaptureBodies ? t.xhr.responseText : void 0);
  return {
    startTimestamp: i,
    endTimestamp: r,
    url: o,
    method: c,
    statusCode: u,
    request: b,
    response: v,
  };
}
function kf(e) {
  const t = e.getAllResponseHeaders();
  return t
    ? t
        .split(
          `\r
`
        )
        .reduce((n, i) => {
          const [r, a] = i.split(": ");
          return (n[r.toLowerCase()] = a), n;
        }, {})
    : {};
}
function Nf(e) {
  const t = w().getClient();
  try {
    const n = new TextEncoder(),
      {
        networkDetailAllowUrls: i,
        networkCaptureBodies: r,
        networkRequestHeaders: a,
        networkResponseHeaders: s,
      } = e.getOptions(),
      o = {
        replay: e,
        textEncoder: n,
        networkDetailAllowUrls: i,
        networkCaptureBodies: r,
        networkRequestHeaders: a,
        networkResponseHeaders: s,
      };
    t && t.on
      ? t.on("beforeAddBreadcrumb", (c, u) => Df(o, c, u))
      : (et("fetch", Zd(e)), et("xhr", Xd(e)));
  } catch {}
}
function Df(e, t, n) {
  if (t.data)
    try {
      If(t) && xf(n) && (Tf(t, n, e), vf(t, n, e)),
        Af(t) && Of(n) && (gf(t, n, e), mf(t, n, e));
    } catch {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.warn("Error when enriching network breadcrumb");
    }
}
function If(e) {
  return e.category === "xhr";
}
function Af(e) {
  return e.category === "fetch";
}
function xf(e) {
  return e && e.xhr;
}
function Of(e) {
  return e && e.response;
}
let zr = null;
function Cf(e) {
  return !!e.category;
}
const Uf = (e) => (t) => {
  if (!e.isEnabled()) return;
  const n = Lf(t);
  n && Ln(e, n);
};
function Lf(e) {
  const t = e.getLastBreadcrumb && e.getLastBreadcrumb();
  return zr === t ||
    !t ||
    ((zr = t),
    !Cf(t) ||
      ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(
        t.category
      ) ||
      t.category.startsWith("ui."))
    ? null
    : t.category === "console"
    ? Bf(t)
    : Ot(t);
}
function Bf(e) {
  const t = e.data && e.data.arguments;
  if (!Array.isArray(t) || t.length === 0) return Ot(e);
  let n = !1;
  const i = t.map((r) => {
    if (!r) return r;
    if (typeof r == "string")
      return r.length > on ? ((n = !0), `${r.slice(0, on)}…`) : r;
    if (typeof r == "object")
      try {
        const a = Tt(r, 7),
          s = JSON.stringify(a);
        if (s.length > on) {
          const o = la(s.slice(0, on)),
            c = JSON.parse(o);
          return (n = !0), c;
        }
        return a;
      } catch {}
    return r;
  });
  return Ot({
    ...e,
    data: {
      ...e.data,
      arguments: i,
      ...(n ? { _meta: { warnings: ["CONSOLE_ARG_TRUNCATED"] } } : {}),
    },
  });
}
function Mf(e) {
  const t = w().getScope(),
    n = w().getClient();
  t && t.addScopeListener(Uf(e)),
    et("dom", yd(e)),
    et("history", jd(e)),
    Nf(e),
    qe($d(e, !Gr(n))),
    Gr(n) &&
      (n.on("afterSendEvent", oa(e)),
      n.on("createDsc", (i) => {
        const r = e.getSessionId();
        r &&
          e.isEnabled() &&
          e.recordingMode === "session" &&
          (i.replay_id = r);
      }),
      n.on("startTransaction", (i) => {
        e.lastTransaction = i;
      }),
      n.on("finishTransaction", (i) => {
        e.lastTransaction = i;
      }));
}
function Gr(e) {
  return !!(e && e.on);
}
async function Pf(e) {
  try {
    return Promise.all(Mn(e, [zf(k.performance.memory)]));
  } catch {
    return [];
  }
}
function zf(e) {
  const { jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: i } = e,
    r = Date.now() / 1e3;
  return {
    type: "memory",
    name: "memory",
    start: r,
    end: r,
    data: {
      memory: { jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: i },
    },
  };
}
const Fr = {
  resource: Hf,
  paint: Yf,
  navigation: $f,
  ["largest-contentful-paint"]: jf,
};
function Gf(e) {
  return e.map(Ff).filter(Boolean);
}
function Ff(e) {
  return Fr[e.entryType] === void 0 ? null : Fr[e.entryType](e);
}
function ye(e) {
  return ((ft || k.performance.timeOrigin) + e) / 1e3;
}
function Yf(e) {
  const { duration: t, entryType: n, name: i, startTime: r } = e,
    a = ye(r);
  return { type: n, name: i, start: a, end: a + t, data: void 0 };
}
function $f(e) {
  const {
    entryType: t,
    name: n,
    decodedBodySize: i,
    duration: r,
    domComplete: a,
    encodedBodySize: s,
    domContentLoadedEventStart: o,
    domContentLoadedEventEnd: c,
    domInteractive: u,
    loadEventStart: l,
    loadEventEnd: d,
    redirectCount: h,
    startTime: f,
    transferSize: p,
    type: b,
  } = e;
  return r === 0
    ? null
    : {
        type: `${t}.${b}`,
        start: ye(f),
        end: ye(a),
        name: n,
        data: {
          size: p,
          decodedBodySize: i,
          encodedBodySize: s,
          duration: r,
          domInteractive: u,
          domContentLoadedEventStart: o,
          domContentLoadedEventEnd: c,
          loadEventStart: l,
          loadEventEnd: d,
          domComplete: a,
          redirectCount: h,
        },
      };
}
function Hf(e) {
  const {
    entryType: t,
    initiatorType: n,
    name: i,
    responseEnd: r,
    startTime: a,
    decodedBodySize: s,
    encodedBodySize: o,
    responseStatus: c,
    transferSize: u,
  } = e;
  return ["fetch", "xmlhttprequest"].includes(n)
    ? null
    : {
        type: `${t}.${n}`,
        start: ye(a),
        end: ye(r),
        name: i,
        data: {
          size: u,
          statusCode: c,
          decodedBodySize: s,
          encodedBodySize: o,
        },
      };
}
function jf(e) {
  const { entryType: t, startTime: n, size: i } = e;
  let r = 0;
  if (k.performance) {
    const o = k.performance.getEntriesByType("navigation")[0];
    r = (o && o.activationStart) || 0;
  }
  const a = Math.max(n - r, 0),
    s = ye(r) + a / 1e3;
  return {
    type: t,
    name: t,
    start: s,
    end: s,
    data: { value: a, size: i, nodeId: Jt.mirror.getId(e.element) },
  };
}
function Wf(e, t, n) {
  let i, r, a;
  const s = n && n.maxWait ? Math.max(n.maxWait, t) : 0;
  function o() {
    return c(), (i = e()), i;
  }
  function c() {
    r !== void 0 && clearTimeout(r),
      a !== void 0 && clearTimeout(a),
      (r = a = void 0);
  }
  function u() {
    return r !== void 0 || a !== void 0 ? o() : i;
  }
  function l() {
    return (
      r && clearTimeout(r),
      (r = setTimeout(o, t)),
      s && a === void 0 && (a = setTimeout(o, s)),
      i
    );
  }
  return (l.cancel = c), (l.flush = u), l;
}
function qf(e) {
  let t = !1;
  return (n, i) => {
    if (!e.checkAndHandleExpiredSession()) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.warn("[Replay] Received replay event after session expired.");
      return;
    }
    const r = i || !t;
    (t = !0),
      e.addUpdate(() => {
        if (
          (e.recordingMode === "buffer" && r && e.setInitialState(),
          Tn(e, n, r),
          !r)
        )
          return !1;
        if ((Zf(e, r), e.session && e.session.previousSessionId)) return !0;
        if (e.recordingMode === "buffer" && e.session && e.eventBuffer) {
          const a = e.eventBuffer.getEarliestTimestamp();
          a &&
            ((e.session.started = a),
            e.getOptions().stickySession && $i(e.session));
        }
        return e.recordingMode === "session" && e.flush(), !0;
      });
  };
}
function Vf(e) {
  const t = e.getOptions();
  return {
    type: L.Custom,
    timestamp: Date.now(),
    data: {
      tag: "options",
      payload: {
        sessionSampleRate: t.sessionSampleRate,
        errorSampleRate: t.errorSampleRate,
        useCompressionOption: t.useCompression,
        blockAllMedia: t.blockAllMedia,
        maskAllText: t.maskAllText,
        maskAllInputs: t.maskAllInputs,
        useCompression: e.eventBuffer ? e.eventBuffer.type === "worker" : !1,
        networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
        networkCaptureBodies: t.networkCaptureBodies,
        networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
        networkResponseHasHeaders: t.networkResponseHeaders.length > 0,
      },
    },
  };
}
function Zf(e, t) {
  return !t || !e.session || e.session.segmentId !== 0
    ? Promise.resolve(null)
    : Tn(e, Vf(e), !1);
}
function Kf(e, t, n, i) {
  return we(gs(e, Ai(e), i, n), [
    [{ type: "replay_event" }, e],
    [
      {
        type: "replay_recording",
        length:
          typeof t == "string" ? new TextEncoder().encode(t).length : t.length,
      },
      t,
    ],
  ]);
}
function Xf({ recordingData: e, headers: t }) {
  let n;
  const i = `${JSON.stringify(t)}
`;
  if (typeof e == "string") n = `${i}${e}`;
  else {
    const a = new TextEncoder().encode(i);
    (n = new Uint8Array(a.length + e.length)), n.set(a), n.set(e, a.length);
  }
  return n;
}
async function Jf({ client: e, scope: t, replayId: n, event: i }) {
  const r =
      typeof e._integrations == "object" &&
      e._integrations !== null &&
      !Array.isArray(e._integrations)
        ? Object.keys(e._integrations)
        : void 0,
    a = await Ds(e.getOptions(), i, { event_id: n, integrations: r }, t);
  if (!a) return null;
  a.platform = a.platform || "javascript";
  const s = e.getSdkMetadata && e.getSdkMetadata(),
    { name: o, version: c } = (s && s.sdk) || {};
  return (
    (a.sdk = {
      ...a.sdk,
      name: o || "sentry.javascript.unknown",
      version: c || "0.0.0",
    }),
    a
  );
}
async function Qf({
  recordingData: e,
  replayId: t,
  segmentId: n,
  eventContext: i,
  timestamp: r,
  session: a,
}) {
  const s = Xf({ recordingData: e, headers: { segment_id: n } }),
    { urls: o, errorIds: c, traceIds: u, initialTimestamp: l } = i,
    d = w(),
    h = d.getClient(),
    f = d.getScope(),
    p = h && h.getTransport(),
    b = h && h.getDsn();
  if (!h || !p || !b || !a.sampled) return;
  const v = {
      type: Qu,
      replay_start_timestamp: l / 1e3,
      timestamp: r / 1e3,
      error_ids: c,
      trace_ids: u,
      urls: o,
      replay_id: t,
      segment_id: n,
      replay_type: a.sampled,
    },
    E = await Jf({ scope: f, client: h, replayId: t, event: v });
  if (!E) {
    h.recordDroppedEvent("event_processor", "replay", v),
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.log("An event processor returned `null`, will not send event.");
    return;
  }
  const O = Kf(E, s, b, h.getOptions().tunnel);
  let x;
  try {
    x = await p.send(O);
  } catch (N) {
    const S = new Error(Bi);
    try {
      S.cause = N;
    } catch {}
    throw S;
  }
  if (!x) return x;
  if (
    typeof x.statusCode == "number" &&
    (x.statusCode < 200 || x.statusCode >= 300)
  )
    throw new ya(x.statusCode);
  return x;
}
class ya extends Error {
  constructor(t) {
    super(`Transport returned status code ${t}`);
  }
}
async function Ea(e, t = { count: 0, interval: al }) {
  const { recordingData: n, options: i } = e;
  if (n.length)
    try {
      return await Qf(e), !0;
    } catch (r) {
      if (r instanceof ya) throw r;
      if (
        (mc("Replays", { _retryCount: t.count }),
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          i._experiments &&
          i._experiments.captureExceptions &&
          On(r),
        t.count >= ol)
      ) {
        const a = new Error(`${Bi} - max retries exceeded`);
        try {
          a.cause = r;
        } catch {}
        throw a;
      }
      return (
        (t.interval *= ++t.count),
        new Promise((a, s) => {
          setTimeout(async () => {
            try {
              await Ea(e, t), a(!0);
            } catch (o) {
              s(o);
            }
          }, t.interval);
        })
      );
    }
}
const ba = "__THROTTLED",
  t_ = "__SKIPPED";
function e_(e, t, n) {
  const i = new Map(),
    r = (o) => {
      const c = o - n;
      i.forEach((u, l) => {
        l < c && i.delete(l);
      });
    },
    a = () => [...i.values()].reduce((o, c) => o + c, 0);
  let s = !1;
  return (...o) => {
    const c = Math.floor(Date.now() / 1e3);
    if ((r(c), a() >= t)) {
      const l = s;
      return (s = !0), l ? t_ : ba;
    }
    s = !1;
    const u = i.get(c) || 0;
    return i.set(c, u + 1), e(...o);
  };
}
class H {
  __init() {
    this.eventBuffer = null;
  }
  __init2() {
    this.performanceEvents = [];
  }
  __init3() {
    this.recordingMode = "session";
  }
  __init4() {
    this.timeouts = {
      sessionIdlePause: tl,
      sessionIdleExpire: el,
      maxSessionLife: nl,
    };
  }
  __init5() {
    this._performanceObserver = null;
  }
  __init6() {
    this._flushLock = null;
  }
  __init7() {
    this._lastActivity = Date.now();
  }
  __init8() {
    this._isEnabled = !1;
  }
  __init9() {
    this._isPaused = !1;
  }
  __init10() {
    this._hasInitializedCoreListeners = !1;
  }
  __init11() {
    this._stopRecording = null;
  }
  __init12() {
    this._context = {
      errorIds: new Set(),
      traceIds: new Set(),
      urls: [],
      initialTimestamp: Date.now(),
      initialUrl: "",
    };
  }
  constructor({ options: t, recordingOptions: n }) {
    H.prototype.__init.call(this),
      H.prototype.__init2.call(this),
      H.prototype.__init3.call(this),
      H.prototype.__init4.call(this),
      H.prototype.__init5.call(this),
      H.prototype.__init6.call(this),
      H.prototype.__init7.call(this),
      H.prototype.__init8.call(this),
      H.prototype.__init9.call(this),
      H.prototype.__init10.call(this),
      H.prototype.__init11.call(this),
      H.prototype.__init12.call(this),
      H.prototype.__init13.call(this),
      H.prototype.__init14.call(this),
      H.prototype.__init15.call(this),
      H.prototype.__init16.call(this),
      H.prototype.__init17.call(this),
      H.prototype.__init18.call(this),
      (this._recordingOptions = n),
      (this._options = t),
      (this._debouncedFlush = Wf(
        () => this._flush(),
        this._options.flushMinDelay,
        { maxWait: this._options.flushMaxDelay }
      )),
      (this._throttledAddEvent = e_((s, o) => Tn(this, s, o), 300, 5));
    const { slowClickTimeout: i, slowClickIgnoreSelectors: r } =
        this.getOptions(),
      a = i
        ? {
            threshold: Math.min(cl, i),
            timeout: i,
            scrollTimeout: ul,
            ignoreSelector: r ? r.join(",") : "",
            multiClickTimeout: ll,
          }
        : void 0;
    a && (this.clickDetector = new Le(this, a));
  }
  getContext() {
    return this._context;
  }
  isEnabled() {
    return this._isEnabled;
  }
  isPaused() {
    return this._isPaused;
  }
  getOptions() {
    return this._options;
  }
  initializeSampling() {
    const { errorSampleRate: t, sessionSampleRate: n } = this._options;
    if (!((t <= 0 && n <= 0) || !this._loadAndCheckSession())) {
      if (!this.session) {
        this._handleException(
          new Error("Unable to initialize and create session")
        );
        return;
      }
      this.session.sampled &&
        this.session.sampled !== "session" &&
        (this.recordingMode = "buffer"),
        this._initializeRecording();
    }
  }
  start() {
    if (this._isEnabled && this.recordingMode === "session")
      throw new Error("Replay recording is already in progress");
    if (this._isEnabled && this.recordingMode === "buffer")
      throw new Error(
        "Replay buffering is in progress, call `flush()` to save the replay"
      );
    const t = this.session && this.session.id,
      { session: n } = Zn({
        timeouts: this.timeouts,
        stickySession: !!this._options.stickySession,
        currentSession: this.session,
        sessionSampleRate: 1,
        allowBuffering: !1,
      });
    (n.previousSessionId = t), (this.session = n), this._initializeRecording();
  }
  startBuffering() {
    if (this._isEnabled)
      throw new Error("Replay recording is already in progress");
    const t = this.session && this.session.id,
      { session: n } = Zn({
        timeouts: this.timeouts,
        stickySession: !!this._options.stickySession,
        currentSession: this.session,
        sessionSampleRate: 0,
        allowBuffering: !0,
      });
    (n.previousSessionId = t),
      (this.session = n),
      (this.recordingMode = "buffer"),
      this._initializeRecording();
  }
  startRecording() {
    try {
      this._stopRecording = Jt({
        ...this._recordingOptions,
        ...(this.recordingMode === "buffer" && { checkoutEveryNms: sl }),
        emit: qf(this),
        onMutation: this._onMutationHandler,
      });
    } catch (t) {
      this._handleException(t);
    }
  }
  stopRecording() {
    try {
      return (
        this._stopRecording &&
          (this._stopRecording(), (this._stopRecording = void 0)),
        !0
      );
    } catch (t) {
      return this._handleException(t), !1;
    }
  }
  async stop(t) {
    if (this._isEnabled)
      try {
        if (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) {
          const n = `[Replay] Stopping Replay${t ? ` triggered by ${t}` : ""}`;
          (this.getOptions()._experiments.traceInternals
            ? console.warn
            : _.log)(n);
        }
        (this._isEnabled = !1),
          this._removeListeners(),
          this.stopRecording(),
          this._debouncedFlush.cancel(),
          this.recordingMode === "session" &&
            (await this._flush({ force: !0 })),
          this.eventBuffer && this.eventBuffer.destroy(),
          (this.eventBuffer = null),
          Cd(this);
      } catch (n) {
        this._handleException(n);
      }
  }
  pause() {
    (this._isPaused = !0), this.stopRecording();
  }
  resume() {
    this._loadAndCheckSession() &&
      ((this._isPaused = !1), this.startRecording());
  }
  async sendBufferedReplayOrFlush({ continueRecording: t = !0 } = {}) {
    if (this.recordingMode === "session") return this.flushImmediate();
    const n = Date.now();
    await this.flushImmediate();
    const i = this.stopRecording();
    !t ||
      !i ||
      ((this.recordingMode = "session"),
      this.session &&
        ((this.session.shouldRefresh = !1),
        this._updateUserActivity(n),
        this._updateSessionActivity(n),
        (this.session.started = n),
        this._maybeSaveSession()),
      this.startRecording());
  }
  addUpdate(t) {
    const n = t();
    this.recordingMode !== "buffer" && n !== !0 && this._debouncedFlush();
  }
  triggerUserActivity() {
    if ((this._updateUserActivity(), !this._stopRecording)) {
      if (!this._loadAndCheckSession()) return;
      this.resume();
      return;
    }
    this.checkAndHandleExpiredSession(), this._updateSessionActivity();
  }
  updateUserActivity() {
    this._updateUserActivity(), this._updateSessionActivity();
  }
  conditionalFlush() {
    return this.recordingMode === "buffer"
      ? Promise.resolve()
      : this.flushImmediate();
  }
  flush() {
    return this._debouncedFlush();
  }
  flushImmediate() {
    return this._debouncedFlush(), this._debouncedFlush.flush();
  }
  cancelFlush() {
    this._debouncedFlush.cancel();
  }
  getSessionId() {
    return this.session && this.session.id;
  }
  checkAndHandleExpiredSession() {
    const t = this.getSessionId();
    if (
      this._lastActivity &&
      mi(this._lastActivity, this.timeouts.sessionIdlePause) &&
      this.session &&
      this.session.sampled === "session"
    ) {
      this.pause();
      return;
    }
    return this._loadAndCheckSession()
      ? t !== this.getSessionId()
        ? (this._triggerFullSnapshot(), !1)
        : !0
      : void 0;
  }
  setInitialState() {
    const t = `${k.location.pathname}${k.location.hash}${k.location.search}`,
      n = `${k.location.origin}${t}`;
    (this.performanceEvents = []),
      this._clearContext(),
      (this._context.initialUrl = n),
      (this._context.initialTimestamp = Date.now()),
      this._context.urls.push(n);
  }
  throttledAddEvent(t, n) {
    const i = this._throttledAddEvent(t, n);
    if (i === ba) {
      const r = Ot({ category: "replay.throttled" });
      this.addUpdate(() => {
        Tn(this, {
          type: L.Custom,
          timestamp: r.timestamp || 0,
          data: { tag: "breadcrumb", payload: r, metric: !0 },
        });
      });
    }
    return i;
  }
  getCurrentRoute() {
    const t = this.lastTransaction || w().getScope().getTransaction();
    if (!(!t || !["route", "custom"].includes(t.metadata.source)))
      return t.name;
  }
  _initializeRecording() {
    this.setInitialState(),
      this._updateSessionActivity(),
      (this.eventBuffer = Od({ useCompression: this._options.useCompression })),
      this._removeListeners(),
      this._addListeners(),
      (this._isEnabled = !0),
      this.startRecording();
  }
  _handleException(t) {
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      _.error("[Replay]", t),
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        this._options._experiments &&
        this._options._experiments.captureExceptions &&
        On(t);
  }
  _loadAndCheckSession() {
    const { type: t, session: n } = Zn({
      timeouts: this.timeouts,
      stickySession: !!this._options.stickySession,
      currentSession: this.session,
      sessionSampleRate: this._options.sessionSampleRate,
      allowBuffering:
        this._options.errorSampleRate > 0 || this.recordingMode === "buffer",
    });
    t === "new" && this.setInitialState();
    const i = this.getSessionId();
    return (
      n.id !== i && (n.previousSessionId = i),
      (this.session = n),
      this.session.sampled ? !0 : (this.stop("session unsampled"), !1)
    );
  }
  _addListeners() {
    try {
      k.document.addEventListener(
        "visibilitychange",
        this._handleVisibilityChange
      ),
        k.addEventListener("blur", this._handleWindowBlur),
        k.addEventListener("focus", this._handleWindowFocus),
        k.addEventListener("keydown", this._handleKeyboardEvent),
        this.clickDetector && this.clickDetector.addListeners(),
        this._hasInitializedCoreListeners ||
          (Mf(this), (this._hasInitializedCoreListeners = !0));
    } catch (t) {
      this._handleException(t);
    }
    "PerformanceObserver" in k && (this._performanceObserver = Nd(this));
  }
  _removeListeners() {
    try {
      k.document.removeEventListener(
        "visibilitychange",
        this._handleVisibilityChange
      ),
        k.removeEventListener("blur", this._handleWindowBlur),
        k.removeEventListener("focus", this._handleWindowFocus),
        k.removeEventListener("keydown", this._handleKeyboardEvent),
        this.clickDetector && this.clickDetector.removeListeners(),
        this._performanceObserver &&
          (this._performanceObserver.disconnect(),
          (this._performanceObserver = null));
    } catch (t) {
      this._handleException(t);
    }
  }
  __init13() {
    this._handleVisibilityChange = () => {
      k.document.visibilityState === "visible"
        ? this._doChangeToForegroundTasks()
        : this._doChangeToBackgroundTasks();
    };
  }
  __init14() {
    this._handleWindowBlur = () => {
      const t = Ot({ category: "ui.blur" });
      this._doChangeToBackgroundTasks(t);
    };
  }
  __init15() {
    this._handleWindowFocus = () => {
      const t = Ot({ category: "ui.focus" });
      this._doChangeToForegroundTasks(t);
    };
  }
  __init16() {
    this._handleKeyboardEvent = (t) => {
      wd(this, t);
    };
  }
  _doChangeToBackgroundTasks(t) {
    if (!this.session) return;
    const n = sa(this.session, this.timeouts);
    t && !n && this._createCustomBreadcrumb(t), this.conditionalFlush();
  }
  _doChangeToForegroundTasks(t) {
    if (!this.session) return;
    if (!this.checkAndHandleExpiredSession()) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.log("[Replay] Document has become active, but session has expired");
      return;
    }
    t && this._createCustomBreadcrumb(t);
  }
  _triggerFullSnapshot(t = !0) {
    try {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.log("[Replay] Taking full rrweb snapshot"),
        Jt.takeFullSnapshot(t);
    } catch (n) {
      this._handleException(n);
    }
  }
  _updateUserActivity(t = Date.now()) {
    this._lastActivity = t;
  }
  _updateSessionActivity(t = Date.now()) {
    this.session && ((this.session.lastActivity = t), this._maybeSaveSession());
  }
  _createCustomBreadcrumb(t) {
    this.addUpdate(() => {
      this.throttledAddEvent({
        type: L.Custom,
        timestamp: t.timestamp || 0,
        data: { tag: "breadcrumb", payload: t },
      });
    });
  }
  _addPerformanceEntries() {
    const t = [...this.performanceEvents];
    return (this.performanceEvents = []), Promise.all(Mn(this, Gf(t)));
  }
  _clearContext() {
    this._context.errorIds.clear(),
      this._context.traceIds.clear(),
      (this._context.urls = []);
  }
  _updateInitialTimestampFromEventBuffer() {
    const { session: t, eventBuffer: n } = this;
    if (!t || !n || t.segmentId) return;
    const i = n.getEarliestTimestamp();
    i &&
      i < this._context.initialTimestamp &&
      (this._context.initialTimestamp = i);
  }
  _popEventContext() {
    const t = {
      initialTimestamp: this._context.initialTimestamp,
      initialUrl: this._context.initialUrl,
      errorIds: Array.from(this._context.errorIds),
      traceIds: Array.from(this._context.traceIds),
      urls: this._context.urls,
    };
    return this._clearContext(), t;
  }
  async _runFlush() {
    if (!this.session || !this.eventBuffer) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.error("[Replay] No session or eventBuffer found to flush.");
      return;
    }
    if (
      (await this._addPerformanceEntries(),
      !(!this.eventBuffer || !this.eventBuffer.hasEvents) &&
        (await Pf(this), !!this.eventBuffer))
    )
      try {
        this._updateInitialTimestampFromEventBuffer();
        const t = await this.eventBuffer.finish(),
          n = this.session.id,
          i = this._popEventContext(),
          r = this.session.segmentId++;
        this._maybeSaveSession(),
          await Ea({
            replayId: n,
            recordingData: t,
            segmentId: r,
            eventContext: i,
            session: this.session,
            options: this.getOptions(),
            timestamp: Date.now(),
          });
      } catch (t) {
        this._handleException(t), this.stop("sendReplay");
        const n = w().getClient();
        n && n.recordDroppedEvent("send_error", "replay");
      }
  }
  __init17() {
    this._flush = async ({ force: t = !1 } = {}) => {
      if (!(!this._isEnabled && !t)) {
        if (!this.checkAndHandleExpiredSession()) {
          (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            _.error(
              "[Replay] Attempting to finish replay event after session expired."
            );
          return;
        }
        if (!this.session) {
          (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            _.error("[Replay] No session found to flush.");
          return;
        }
        if ((this._debouncedFlush.cancel(), !this._flushLock)) {
          (this._flushLock = this._runFlush()),
            await this._flushLock,
            (this._flushLock = null);
          return;
        }
        try {
          await this._flushLock;
        } catch (n) {
          (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && _.error(n);
        } finally {
          this._debouncedFlush();
        }
      }
    };
  }
  _maybeSaveSession() {
    this.session && this._options.stickySession && $i(this.session);
  }
  __init18() {
    this._onMutationHandler = (t) => {
      const n = t.length,
        i = this._options.mutationLimit,
        r = this._options.mutationBreadcrumbLimit,
        a = i && n > i;
      if (n > r || a) {
        const s = Ot({
          category: "replay.mutations",
          data: { count: n, limit: a },
        });
        this._createCustomBreadcrumb(s);
      }
      return a ? (this.stop("mutationLimit"), !1) : !0;
    };
  }
}
function Ne(e, t, n, i) {
  const r = typeof i == "string" ? i.split(",") : [],
    a = [...e, ...r, ...t];
  return (
    typeof n < "u" &&
      (typeof n == "string" && a.push(`.${n}`),
      console.warn(
        "[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration."
      )),
    a.join(",")
  );
}
function n_({
  mask: e,
  unmask: t,
  block: n,
  unblock: i,
  ignore: r,
  blockClass: a,
  blockSelector: s,
  maskTextClass: o,
  maskTextSelector: c,
  ignoreClass: u,
}) {
  const l = ['base[href="/"]'],
    d = Ne(e, [".sentry-mask", "[data-sentry-mask]"], o, c),
    h = Ne(t, [".sentry-unmask", "[data-sentry-unmask]"]),
    f = {
      maskTextSelector: d,
      unmaskTextSelector: h,
      maskInputSelector: d,
      unmaskInputSelector: h,
      blockSelector: Ne(
        n,
        [".sentry-block", "[data-sentry-block]", ...l],
        a,
        s
      ),
      unblockSelector: Ne(i, [".sentry-unblock", "[data-sentry-unblock]"]),
      ignoreSelector: Ne(
        r,
        [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'],
        u
      ),
    };
  return (
    a instanceof RegExp && (f.blockClass = a),
    o instanceof RegExp && (f.maskTextClass = o),
    f
  );
}
function Yr() {
  return typeof window < "u" && (!hs() || i_());
}
function i_() {
  return typeof process < "u" && process.type === "renderer";
}
const $r =
    'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
  r_ = ["content-length", "content-type", "accept"];
let Hr = !1;
class je {
  static __initStatic() {
    this.id = "Replay";
  }
  __init() {
    this.name = je.id;
  }
  constructor({
    flushMinDelay: t = il,
    flushMaxDelay: n = rl,
    stickySession: i = !0,
    useCompression: r = !0,
    _experiments: a = {},
    sessionSampleRate: s,
    errorSampleRate: o,
    maskAllText: c = !0,
    maskAllInputs: u = !0,
    blockAllMedia: l = !0,
    mutationBreadcrumbLimit: d = 750,
    mutationLimit: h = 1e4,
    slowClickTimeout: f = 7e3,
    slowClickIgnoreSelectors: p = [],
    networkDetailAllowUrls: b = [],
    networkCaptureBodies: v = !0,
    networkRequestHeaders: E = [],
    networkResponseHeaders: O = [],
    mask: x = [],
    unmask: N = [],
    block: S = [],
    unblock: m = [],
    ignore: T = [],
    maskFn: y,
    beforeAddRecordingEvent: M,
    blockClass: C,
    blockSelector: Y,
    maskInputOptions: K,
    maskTextClass: g,
    maskTextSelector: U,
    ignoreClass: $,
  } = {}) {
    if (
      (je.prototype.__init.call(this),
      (this._recordingOptions = {
        maskAllInputs: u,
        maskAllText: c,
        maskInputOptions: { ...(K || {}), password: !0 },
        maskTextFn: y,
        maskInputFn: y,
        ...n_({
          mask: x,
          unmask: N,
          block: S,
          unblock: m,
          ignore: T,
          blockClass: C,
          blockSelector: Y,
          maskTextClass: g,
          maskTextSelector: U,
          ignoreClass: $,
        }),
        slimDOMOptions: "all",
        inlineStylesheet: !0,
        inlineImages: !1,
        collectFonts: !0,
      }),
      (this._initialOptions = {
        flushMinDelay: t,
        flushMaxDelay: n,
        stickySession: i,
        sessionSampleRate: s,
        errorSampleRate: o,
        useCompression: r,
        blockAllMedia: l,
        maskAllInputs: u,
        maskAllText: c,
        mutationBreadcrumbLimit: d,
        mutationLimit: h,
        slowClickTimeout: f,
        slowClickIgnoreSelectors: p,
        networkDetailAllowUrls: b,
        networkCaptureBodies: v,
        networkRequestHeaders: jr(E),
        networkResponseHeaders: jr(O),
        beforeAddRecordingEvent: M,
        _experiments: a,
      }),
      typeof s == "number" &&
        (console.warn(`[Replay] You are passing \`sessionSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysSessionSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysSessionSampleRate: ${s} })`),
        (this._initialOptions.sessionSampleRate = s)),
      typeof o == "number" &&
        (console.warn(`[Replay] You are passing \`errorSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysOnErrorSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysOnErrorSampleRate: ${o} })`),
        (this._initialOptions.errorSampleRate = o)),
      this._initialOptions.blockAllMedia &&
        (this._recordingOptions.blockSelector = this._recordingOptions
          .blockSelector
          ? `${this._recordingOptions.blockSelector},${$r}`
          : $r),
      this._isInitialized && Yr())
    )
      throw new Error(
        "Multiple Sentry Session Replay instances are not supported"
      );
    this._isInitialized = !0;
  }
  get _isInitialized() {
    return Hr;
  }
  set _isInitialized(t) {
    Hr = t;
  }
  setupOnce() {
    Yr() && (this._setup(), setTimeout(() => this._initialize()));
  }
  start() {
    this._replay && this._replay.start();
  }
  startBuffering() {
    this._replay && this._replay.startBuffering();
  }
  stop() {
    return this._replay ? this._replay.stop() : Promise.resolve();
  }
  flush(t) {
    return !this._replay || !this._replay.isEnabled()
      ? Promise.resolve()
      : this._replay.sendBufferedReplayOrFlush(t);
  }
  getReplayId() {
    if (!(!this._replay || !this._replay.isEnabled()))
      return this._replay.getSessionId();
  }
  _initialize() {
    this._replay && this._replay.initializeSampling();
  }
  _setup() {
    const t = s_(this._initialOptions);
    this._replay = new H({
      options: t,
      recordingOptions: this._recordingOptions,
    });
  }
}
je.__initStatic();
function s_(e) {
  const t = w().getClient(),
    n = t && t.getOptions(),
    i = { sessionSampleRate: 0, errorSampleRate: 0, ...Rt(e) };
  return n
    ? (e.sessionSampleRate == null &&
        e.errorSampleRate == null &&
        n.replaysSessionSampleRate == null &&
        n.replaysOnErrorSampleRate == null &&
        console.warn(
          "Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set."
        ),
      typeof n.replaysSessionSampleRate == "number" &&
        (i.sessionSampleRate = n.replaysSessionSampleRate),
      typeof n.replaysOnErrorSampleRate == "number" &&
        (i.errorSampleRate = n.replaysOnErrorSampleRate),
      i)
    : (console.warn("SDK client is not available."), i);
}
function jr(e) {
  return [...r_, ...e.map((t) => t.toLowerCase())];
}
function Wr(e) {
  let t,
    n = e[0],
    i = 1;
  for (; i < e.length; ) {
    const r = e[i],
      a = e[i + 1];
    if (
      ((i += 2), (r === "optionalAccess" || r === "optionalCall") && n == null)
    )
      return;
    r === "access" || r === "optionalAccess"
      ? ((t = n), (n = a(n)))
      : (r === "call" || r === "optionalCall") &&
        ((n = a((...s) => n.call(t, ...s))), (t = void 0));
  }
  return n;
}
const B = st;
function a_() {
  B && B.document
    ? B.document.addEventListener("visibilitychange", () => {
        const e = ve();
        if (B.document.hidden && e) {
          const t = "cancelled";
          (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            _.log(
              `[Tracing] Transaction: ${t} -> since tab moved to the background, op: ${e.op}`
            ),
            e.status || e.setStatus(t),
            e.setTag("visibilitychange", "document.hidden"),
            e.finish();
        }
      })
    : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      _.warn(
        "[Tracing] Could not set up background tab detection due to lack of global document"
      );
}
const Wi = (e, t, n) => {
    let i, r;
    return (a) => {
      t.value >= 0 &&
        (a || n) &&
        ((r = t.value - (i || 0)),
        (r || i === void 0) && ((i = t.value), (t.delta = r), e(t)));
    };
  },
  o_ = () =>
    `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`,
  c_ = () => {
    const e = B.performance.timing,
      t = B.performance.navigation.type,
      n = {
        entryType: "navigation",
        startTime: 0,
        type: t == 2 ? "back_forward" : t === 1 ? "reload" : "navigate",
      };
    for (const i in e)
      i !== "navigationStart" &&
        i !== "toJSON" &&
        (n[i] = Math.max(e[i] - e.navigationStart, 0));
    return n;
  },
  Sa = () =>
    B.__WEB_VITALS_POLYFILL__
      ? B.performance &&
        ((performance.getEntriesByType &&
          performance.getEntriesByType("navigation")[0]) ||
          c_())
      : B.performance &&
        performance.getEntriesByType &&
        performance.getEntriesByType("navigation")[0],
  wa = () => {
    const e = Sa();
    return (e && e.activationStart) || 0;
  },
  qi = (e, t) => {
    const n = Sa();
    let i = "navigate";
    return (
      n &&
        (B.document.prerendering || wa() > 0
          ? (i = "prerender")
          : (i = n.type.replace(/_/g, "-"))),
      {
        name: e,
        value: typeof t > "u" ? -1 : t,
        rating: "good",
        delta: 0,
        entries: [],
        id: o_(),
        navigationType: i,
      }
    );
  },
  Ke = (e, t, n) => {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
        const i = new PerformanceObserver((r) => {
          t(r.getEntries());
        });
        return i.observe(Object.assign({ type: e, buffered: !0 }, n || {})), i;
      }
    } catch {}
  },
  zn = (e, t) => {
    const n = (i) => {
      (i.type === "pagehide" || B.document.visibilityState === "hidden") &&
        (e(i),
        t &&
          (removeEventListener("visibilitychange", n, !0),
          removeEventListener("pagehide", n, !0)));
    };
    addEventListener("visibilitychange", n, !0),
      addEventListener("pagehide", n, !0);
  },
  u_ = (e) => {
    const t = qi("CLS", 0);
    let n,
      i = 0,
      r = [];
    const a = (o) => {
        o.forEach((c) => {
          if (!c.hadRecentInput) {
            const u = r[0],
              l = r[r.length - 1];
            i &&
            r.length !== 0 &&
            c.startTime - l.startTime < 1e3 &&
            c.startTime - u.startTime < 5e3
              ? ((i += c.value), r.push(c))
              : ((i = c.value), (r = [c])),
              i > t.value && ((t.value = i), (t.entries = r), n && n());
          }
        });
      },
      s = Ke("layout-shift", a);
    if (s) {
      n = Wi(e, t);
      const o = () => {
        a(s.takeRecords()), n(!0);
      };
      return zn(o), o;
    }
  };
let mn = -1;
const l_ = () =>
    B.document.visibilityState === "hidden" && !B.document.prerendering
      ? 0
      : 1 / 0,
  d_ = () => {
    zn(({ timeStamp: e }) => {
      mn = e;
    }, !0);
  },
  Vi = () => (
    mn < 0 && ((mn = l_()), d_()),
    {
      get firstHiddenTime() {
        return mn;
      },
    }
  ),
  f_ = (e) => {
    const t = Vi(),
      n = qi("FID");
    let i;
    const r = (o) => {
        o.startTime < t.firstHiddenTime &&
          ((n.value = o.processingStart - o.startTime),
          n.entries.push(o),
          i(!0));
      },
      a = (o) => {
        o.forEach(r);
      },
      s = Ke("first-input", a);
    (i = Wi(e, n)),
      s &&
        zn(() => {
          a(s.takeRecords()), s.disconnect();
        }, !0);
  },
  qr = {},
  __ = (e) => {
    const t = Vi(),
      n = qi("LCP");
    let i;
    const r = (s) => {
        const o = s[s.length - 1];
        if (o) {
          const c = Math.max(o.startTime - wa(), 0);
          c < t.firstHiddenTime && ((n.value = c), (n.entries = [o]), i());
        }
      },
      a = Ke("largest-contentful-paint", r);
    if (a) {
      i = Wi(e, n);
      const s = () => {
        qr[n.id] ||
          (r(a.takeRecords()), a.disconnect(), (qr[n.id] = !0), i(!0));
      };
      return (
        ["keydown", "click"].forEach((o) => {
          addEventListener(o, s, { once: !0, capture: !0 });
        }),
        zn(s, !0),
        s
      );
    }
  };
function Kn(e) {
  return typeof e == "number" && isFinite(e);
}
function Ee(e, { startTimestamp: t, ...n }) {
  return (
    t && e.startTimestamp > t && (e.startTimestamp = t),
    e.startChild({ startTimestamp: t, ...n })
  );
}
function Z(e) {
  return e / 1e3;
}
function va() {
  return B && B.addEventListener && B.performance;
}
let Vr = 0,
  F = {},
  vt,
  Be;
function h_() {
  const e = va();
  if (e && ft) {
    e.mark && B.performance.mark("sentry-tracing-init"), E_();
    const t = g_(),
      n = y_();
    return () => {
      t && t(), n && n();
    };
  }
  return () => {};
}
function p_() {
  Ke("longtask", (t) => {
    for (const n of t) {
      const i = ve();
      if (!i) return;
      const r = Z(ft + n.startTime),
        a = Z(n.duration);
      i.startChild({
        description: "Main UI thread blocked",
        op: "ui.long-task",
        startTimestamp: r,
        endTimestamp: r + a,
      });
    }
  });
}
function m_() {
  Ke(
    "event",
    (t) => {
      for (const n of t) {
        const i = ve();
        if (!i) return;
        if (n.name === "click") {
          const r = Z(ft + n.startTime),
            a = Z(n.duration);
          i.startChild({
            description: Ht(n.target),
            op: `ui.interaction.${n.name}`,
            startTimestamp: r,
            endTimestamp: r + a,
          });
        }
      }
    },
    { durationThreshold: 0 }
  );
}
function g_() {
  return u_((e) => {
    const t = e.entries.pop();
    t &&
      ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.log("[Measurements] Adding CLS"),
      (F.cls = { value: e.value, unit: "" }),
      (Be = t));
  });
}
function y_() {
  return __((e) => {
    const t = e.entries.pop();
    t &&
      ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.log("[Measurements] Adding LCP"),
      (F.lcp = { value: e.value, unit: "millisecond" }),
      (vt = t));
  });
}
function E_() {
  f_((e) => {
    const t = e.entries.pop();
    if (!t) return;
    const n = Z(ft),
      i = Z(t.startTime);
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      _.log("[Measurements] Adding FID"),
      (F.fid = { value: e.value, unit: "millisecond" }),
      (F["mark.fid"] = { value: n + i, unit: "second" });
  });
}
function b_(e) {
  const t = va();
  if (!t || !B.performance.getEntries || !ft) return;
  (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
    _.log("[Tracing] Adding & adjusting spans using Performance API");
  const n = Z(ft),
    i = t.getEntries();
  let r, a;
  if (
    (i.slice(Vr).forEach((s) => {
      const o = Z(s.startTime),
        c = Z(s.duration);
      if (!(e.op === "navigation" && n + o < e.startTimestamp))
        switch (s.entryType) {
          case "navigation": {
            w_(e, s, n),
              (r = n + Z(s.responseStart)),
              (a = n + Z(s.requestStart));
            break;
          }
          case "mark":
          case "paint":
          case "measure": {
            S_(e, s, o, c, n);
            const u = Vi(),
              l = s.startTime < u.firstHiddenTime;
            s.name === "first-paint" &&
              l &&
              ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
                _.log("[Measurements] Adding FP"),
              (F.fp = { value: s.startTime, unit: "millisecond" })),
              s.name === "first-contentful-paint" &&
                l &&
                ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
                  _.log("[Measurements] Adding FCP"),
                (F.fcp = { value: s.startTime, unit: "millisecond" }));
            break;
          }
          case "resource": {
            const u = s.name.replace(B.location.origin, "");
            T_(e, s, u, o, c, n);
            break;
          }
        }
    }),
    (Vr = Math.max(i.length - 1, 0)),
    R_(e),
    e.op === "pageload")
  ) {
    typeof r == "number" &&
      ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.log("[Measurements] Adding TTFB"),
      (F.ttfb = { value: (r - e.startTimestamp) * 1e3, unit: "millisecond" }),
      typeof a == "number" &&
        a <= r &&
        (F["ttfb.requestTime"] = {
          value: (r - a) * 1e3,
          unit: "millisecond",
        })),
      ["fcp", "fp", "lcp"].forEach((o) => {
        if (!F[o] || n >= e.startTimestamp) return;
        const c = F[o].value,
          u = n + Z(c),
          l = Math.abs((u - e.startTimestamp) * 1e3),
          d = l - c;
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          _.log(`[Measurements] Normalized ${o} from ${c} to ${l} (${d})`),
          (F[o].value = l);
      });
    const s = F["mark.fid"];
    s &&
      F.fid &&
      (Ee(e, {
        description: "first input delay",
        endTimestamp: s.value + Z(F.fid.value),
        op: "ui.action",
        startTimestamp: s.value,
      }),
      delete F["mark.fid"]),
      "fcp" in F || delete F.cls,
      Object.keys(F).forEach((o) => {
        e.setMeasurement(o, F[o].value, F[o].unit);
      }),
      k_(e);
  }
  (vt = void 0), (Be = void 0), (F = {});
}
function S_(e, t, n, i, r) {
  const a = r + n,
    s = a + i;
  return (
    Ee(e, {
      description: t.name,
      endTimestamp: s,
      op: t.entryType,
      startTimestamp: a,
    }),
    a
  );
}
function w_(e, t, n) {
  [
    "unloadEvent",
    "redirect",
    "domContentLoadedEvent",
    "loadEvent",
    "connect",
  ].forEach((i) => {
    dn(e, t, i, n);
  }),
    dn(e, t, "secureConnection", n, "TLS/SSL", "connectEnd"),
    dn(e, t, "fetch", n, "cache", "domainLookupStart"),
    dn(e, t, "domainLookup", n, "DNS"),
    v_(e, t, n);
}
function dn(e, t, n, i, r, a) {
  const s = a ? t[a] : t[`${n}End`],
    o = t[`${n}Start`];
  !o ||
    !s ||
    Ee(e, {
      op: "browser",
      description: r || n,
      startTimestamp: i + Z(o),
      endTimestamp: i + Z(s),
    });
}
function v_(e, t, n) {
  Ee(e, {
    op: "browser",
    description: "request",
    startTimestamp: n + Z(t.requestStart),
    endTimestamp: n + Z(t.responseEnd),
  }),
    Ee(e, {
      op: "browser",
      description: "response",
      startTimestamp: n + Z(t.responseStart),
      endTimestamp: n + Z(t.responseEnd),
    });
}
function T_(e, t, n, i, r, a) {
  if (t.initiatorType === "xmlhttprequest" || t.initiatorType === "fetch")
    return;
  const s = {};
  "transferSize" in t && (s["http.response_transfer_size"] = t.transferSize),
    "encodedBodySize" in t &&
      (s["http.response_content_length"] = t.encodedBodySize),
    "decodedBodySize" in t &&
      (s["http.decoded_response_content_length"] = t.decodedBodySize),
    "renderBlockingStatus" in t &&
      (s["resource.render_blocking_status"] = t.renderBlockingStatus);
  const o = a + i,
    c = o + r;
  Ee(e, {
    description: n,
    endTimestamp: c,
    op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
    startTimestamp: o,
    data: s,
  });
}
function R_(e) {
  const t = B.navigator;
  if (!t) return;
  const n = t.connection;
  n &&
    (n.effectiveType && e.setTag("effectiveConnectionType", n.effectiveType),
    n.type && e.setTag("connectionType", n.type),
    Kn(n.rtt) && (F["connection.rtt"] = { value: n.rtt, unit: "millisecond" })),
    Kn(t.deviceMemory) && e.setTag("deviceMemory", `${t.deviceMemory} GB`),
    Kn(t.hardwareConcurrency) &&
      e.setTag("hardwareConcurrency", String(t.hardwareConcurrency));
}
function k_(e) {
  vt &&
    ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      _.log("[Measurements] Adding LCP Data"),
    vt.element && e.setTag("lcp.element", Ht(vt.element)),
    vt.id && e.setTag("lcp.id", vt.id),
    vt.url && e.setTag("lcp.url", vt.url.trim().slice(0, 200)),
    e.setTag("lcp.size", vt.size)),
    Be &&
      Be.sources &&
      ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.log("[Measurements] Adding CLS Data"),
      Be.sources.forEach((t, n) =>
        e.setTag(`cls.source.${n + 1}`, Ht(t.node))
      ));
}
const vi = ["localhost", /^\/(?!\/)/],
  Ti = {
    traceFetch: !0,
    traceXHR: !0,
    tracingOrigins: vi,
    tracePropagationTargets: vi,
    _experiments: {},
  };
function N_(e) {
  const {
      traceFetch: t,
      traceXHR: n,
      tracePropagationTargets: i,
      tracingOrigins: r,
      shouldCreateSpanForRequest: a,
      _experiments: s,
    } = { traceFetch: Ti.traceFetch, traceXHR: Ti.traceXHR, ...e },
    o = typeof a == "function" ? a : (l) => !0,
    c = (l) => I_(l, i || r),
    u = {};
  t &&
    et("fetch", (l) => {
      const d = A_(l, o, c, u);
      Wr([s, "optionalAccess", (h) => h.enableHTTPTimings]) && d && Zr(d);
    }),
    n &&
      et("xhr", (l) => {
        const d = O_(l, o, c, u);
        Wr([s, "optionalAccess", (h) => h.enableHTTPTimings]) && d && Zr(d);
      });
}
function Zr(e) {
  const t = e.data.url,
    n = new PerformanceObserver((i) => {
      i.getEntries().forEach((a) => {
        (a.initiatorType === "fetch" || a.initiatorType === "xmlhttprequest") &&
          a.name.endsWith(t) &&
          (D_(a).forEach((o) => e.setData(...o)), n.disconnect());
      });
    });
  n.observe({ entryTypes: ["resource"] });
}
function D_(e) {
  const t = e.nextHopProtocol.split("/")[1] || "none",
    n = [];
  return (
    t && n.push(["network.protocol.version", t]),
    ft
      ? [
          ...n,
          ["http.request.connect_start", (ft + e.connectStart) / 1e3],
          ["http.request.request_start", (ft + e.requestStart) / 1e3],
          ["http.request.response_start", (ft + e.responseStart) / 1e3],
        ]
      : n
  );
}
function I_(e, t) {
  return Se(e, t || vi);
}
function A_(e, t, n, i) {
  if (!An() || !(e.fetchData && t(e.fetchData.url))) return;
  if (e.endTimestamp) {
    const s = e.fetchData.__span;
    if (!s) return;
    const o = i[s];
    if (o) {
      if (e.response) {
        o.setHttpStatus(e.response.status);
        const c =
            e.response &&
            e.response.headers &&
            e.response.headers.get("content-length"),
          u = parseInt(c);
        u > 0 && o.setData("http.response_content_length", u);
      } else e.error && o.setStatus("internal_error");
      o.finish(), delete i[s];
    }
    return;
  }
  const r = w().getScope().getSpan(),
    a = r && r.transaction;
  if (r && a) {
    const { method: s, url: o } = e.fetchData,
      c = r.startChild({
        data: { url: o, type: "fetch", "http.method": s },
        description: `${s} ${o}`,
        op: "http.client",
      });
    (e.fetchData.__span = c.spanId), (i[c.spanId] = c);
    const u = e.args[0];
    e.args[1] = e.args[1] || {};
    const l = e.args[1];
    return (
      n(e.fetchData.url) &&
        (l.headers = x_(u, a.getDynamicSamplingContext(), c, l)),
      c
    );
  }
}
function x_(e, t, n, i) {
  const r = Es(t),
    a = n.toTraceparent(),
    s = typeof Request < "u" && $t(e, Request) ? e.headers : i.headers;
  if (s)
    if (typeof Headers < "u" && $t(s, Headers)) {
      const o = new Headers(s);
      return o.append("sentry-trace", a), r && o.append(si, r), o;
    } else if (Array.isArray(s)) {
      const o = [...s, ["sentry-trace", a]];
      return r && o.push([si, r]), o;
    } else {
      const o = "baggage" in s ? s.baggage : void 0,
        c = [];
      return (
        Array.isArray(o) ? c.push(...o) : o && c.push(o),
        r && c.push(r),
        {
          ...s,
          "sentry-trace": a,
          baggage: c.length > 0 ? c.join(",") : void 0,
        }
      );
    }
  else return { "sentry-trace": a, baggage: r };
}
function O_(e, t, n, i) {
  const r = e.xhr,
    a = r && r[Pt];
  if (!An() || (r && r.__sentry_own_request__) || !(r && a && t(a.url))) return;
  if (e.endTimestamp) {
    const c = r.__sentry_xhr_span_id__;
    if (!c) return;
    const u = i[c];
    u && (u.setHttpStatus(a.status_code), u.finish(), delete i[c]);
    return;
  }
  const s = w().getScope().getSpan(),
    o = s && s.transaction;
  if (s && o) {
    const c = s.startChild({
      data: { ...a.data, type: "xhr", "http.method": a.method, url: a.url },
      description: `${a.method} ${a.url}`,
      op: "http.client",
    });
    if (
      ((r.__sentry_xhr_span_id__ = c.spanId),
      (i[r.__sentry_xhr_span_id__] = c),
      r.setRequestHeader && n(a.url))
    )
      try {
        r.setRequestHeader("sentry-trace", c.toTraceparent());
        const u = o.getDynamicSamplingContext(),
          l = Es(u);
        l && r.setRequestHeader(si, l);
      } catch {}
    return c;
  }
}
function C_(e, t = !0, n = !0) {
  if (!B || !B.location) {
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      _.warn(
        "Could not initialize routing instrumentation due to invalid location"
      );
    return;
  }
  let i = B.location.href,
    r;
  t &&
    (r = e({
      name: B.location.pathname,
      startTimestamp: ft ? ft / 1e3 : void 0,
      op: "pageload",
      metadata: { source: "url" },
    })),
    n &&
      et("history", ({ to: a, from: s }) => {
        if (s === void 0 && i && i.indexOf(a) !== -1) {
          i = void 0;
          return;
        }
        s !== a &&
          ((i = void 0),
          r &&
            ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
              _.log(`[Tracing] Finishing current transaction with op: ${r.op}`),
            r.finish()),
          (r = e({
            name: B.location.pathname,
            op: "navigation",
            metadata: { source: "url" },
          })));
      });
}
const U_ = "BrowserTracing",
  L_ = {
    ..._n,
    markBackgroundTransactions: !0,
    routingInstrumentation: C_,
    startTransactionOnLocationChange: !0,
    startTransactionOnPageLoad: !0,
    enableLongTask: !0,
    ...Ti,
  };
class kn {
  __init() {
    this.name = U_;
  }
  __init2() {
    this._hasSetTracePropagationTargets = !1;
  }
  constructor(t) {
    kn.prototype.__init.call(this),
      kn.prototype.__init2.call(this),
      hc(),
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        (this._hasSetTracePropagationTargets = !!(
          t &&
          (t.tracePropagationTargets || t.tracingOrigins)
        )),
      (this.options = { ...L_, ...t }),
      this.options._experiments.enableLongTask !== void 0 &&
        (this.options.enableLongTask =
          this.options._experiments.enableLongTask),
      t &&
        !t.tracePropagationTargets &&
        t.tracingOrigins &&
        (this.options.tracePropagationTargets = t.tracingOrigins),
      (this._collectWebVitals = h_()),
      this.options.enableLongTask && p_(),
      this.options._experiments.enableInteractions && m_();
  }
  setupOnce(t, n) {
    this._getCurrentHub = n;
    const r = n().getClient(),
      a = r && r.getOptions(),
      {
        routingInstrumentation: s,
        startTransactionOnLocationChange: o,
        startTransactionOnPageLoad: c,
        markBackgroundTransactions: u,
        traceFetch: l,
        traceXHR: d,
        shouldCreateSpanForRequest: h,
        _experiments: f,
      } = this.options,
      p = a && a.tracePropagationTargets,
      b = p || this.options.tracePropagationTargets;
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      this._hasSetTracePropagationTargets &&
      p &&
      _.warn(
        "[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."
      ),
      s(
        (v) => {
          const E = this._createRouteTransaction(v);
          return (
            this.options._experiments.onStartRouteTransaction &&
              this.options._experiments.onStartRouteTransaction(E, v, n),
            E
          );
        },
        c,
        o
      ),
      u && a_(),
      f.enableInteractions && this._registerInteractionListener(),
      N_({
        traceFetch: l,
        traceXHR: d,
        tracePropagationTargets: b,
        shouldCreateSpanForRequest: h,
        _experiments: { enableHTTPTimings: f.enableHTTPTimings },
      });
  }
  _createRouteTransaction(t) {
    if (!this._getCurrentHub) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.warn(
          `[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`
        );
      return;
    }
    const {
        beforeNavigate: n,
        idleTimeout: i,
        finalTimeout: r,
        heartbeatInterval: a,
      } = this.options,
      s = t.op === "pageload",
      o = s ? Kr("sentry-trace") : null,
      c = s ? Kr("baggage") : null,
      u = o ? Bo(o) : void 0,
      l = c ? Ko(c) : void 0,
      d = {
        ...t,
        ...u,
        metadata: { ...t.metadata, dynamicSamplingContext: u && !l ? {} : l },
        trimEnd: !0,
      },
      h = typeof n == "function" ? n(d) : d,
      f = h === void 0 ? { ...d, sampled: !1 } : h;
    (f.metadata =
      f.name !== d.name ? { ...f.metadata, source: "custom" } : f.metadata),
      (this._latestRouteName = f.name),
      (this._latestRouteSource = f.metadata && f.metadata.source),
      f.sampled === !1 &&
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.log(
          `[Tracing] Will not send ${f.op} transaction because of beforeNavigate.`
        ),
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        _.log(`[Tracing] Starting ${f.op} transaction on scope`);
    const p = this._getCurrentHub(),
      { location: b } = B,
      v = pr(p, f, i, r, !0, { location: b }, a);
    return (
      v.registerBeforeFinishCallback((E) => {
        this._collectWebVitals(), b_(E);
      }),
      v
    );
  }
  _registerInteractionListener() {
    let t;
    const n = () => {
      const {
          idleTimeout: i,
          finalTimeout: r,
          heartbeatInterval: a,
        } = this.options,
        s = "ui.action.click",
        o = ve();
      if (o && o.op && ["navigation", "pageload"].includes(o.op)) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          _.warn(
            `[Tracing] Did not create ${s} transaction because a pageload or navigation transaction is in progress.`
          );
        return;
      }
      if (
        (t &&
          (t.setFinishReason("interactionInterrupted"),
          t.finish(),
          (t = void 0)),
        !this._getCurrentHub)
      ) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          _.warn(
            `[Tracing] Did not create ${s} transaction because _getCurrentHub is invalid.`
          );
        return;
      }
      if (!this._latestRouteName) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          _.warn(
            `[Tracing] Did not create ${s} transaction because _latestRouteName is missing.`
          );
        return;
      }
      const c = this._getCurrentHub(),
        { location: u } = B,
        l = {
          name: this._latestRouteName,
          op: s,
          trimEnd: !0,
          metadata: { source: this._latestRouteSource || "url" },
        };
      t = pr(c, l, i, r, !0, { location: u }, a);
    };
    ["click"].forEach((i) => {
      addEventListener(i, n, { once: !1, capture: !0 });
    });
  }
}
function Kr(e) {
  const t = rs(`meta[name=${e}]`);
  return t ? t.getAttribute("content") : null;
}
function B_(e) {
  (e._metadata = e._metadata || {}),
    (e._metadata.sdk = e._metadata.sdk || {
      name: "sentry.javascript.svelte",
      packages: [{ name: "npm:@sentry/svelte", version: fe }],
      version: fe,
    }),
    Xu(e),
    M_();
}
function M_() {
  let e;
  const t = (n) => (
    e === void 0 && (e = P_()),
    e && (n.modules = { svelteKit: "latest", ...n.modules }),
    n
  );
  (t.id = "svelteKitProcessor"), qe(t);
}
function P_() {
  return rs("div#svelte-announcer") !== null;
}
const z_ = "npm:@sentry/";
function G_(e, t) {
  (e._metadata = e._metadata || {}),
    (e._metadata.sdk = e._metadata.sdk || {
      name: "sentry.javascript.sveltekit",
      packages: t.map((n) => ({ name: `${z_}${n}`, version: fe })),
      version: fe,
    });
}
const Ta = { "routing.instrumentation": "@sentry/sveltekit" };
function Xr(e, t = !0, n = !0) {
  t && F_(e), n && Y_(e);
}
function F_(e) {
  const t = D && D.location && D.location.pathname,
    n = e({
      name: t,
      op: "pageload",
      description: t,
      tags: { ...Ta },
      metadata: { source: "url" },
    });
  Da.subscribe((i) => {
    if (!i) return;
    const r = i.route && i.route.id;
    n && r && n.setName(r, "route");
  });
}
function Y_(e) {
  let t, n;
  Ia.subscribe((i) => {
    if (!i) {
      t && (t.finish(), (t = void 0));
      return;
    }
    const r = i.from,
      a = i.to,
      s = (r && r.url.pathname) || (D && D.location && D.location.pathname),
      o = a && a.url.pathname;
    if (s === o) return;
    const c = r && r.route.id,
      u = a && a.route.id;
    (n = ve()),
      n ||
        (n = e({
          name: u || o || "unknown",
          op: "navigation",
          metadata: { source: u ? "route" : "url" },
          tags: { ...Ta },
        })),
      n &&
        (t && t.finish(),
        (t = n.startChild({
          op: "ui.sveltekit.routing",
          description: "SvelteKit Route Change",
        })),
        n.setTag("from", c));
  });
}
function $_(e) {
  G_(e, ["sveltekit", "svelte"]),
    H_(e),
    B_(e),
    pc((t) => {
      t.setTag("runtime", "browser");
    });
}
function H_(e) {
  let t = e.integrations || [];
  if ((typeof __SENTRY_TRACING__ > "u" || __SENTRY_TRACING__) && An(e)) {
    const n = new kn({ routingInstrumentation: Xr });
    t = Jo(n, t, { "options.routingInstrumentation": Xr });
  }
  e.integrations = t;
}
$_({
  dsn: Na,
  tracesSampleRate: 1,
  integrations: [new je()],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  beforeSend(e, t) {
    return e;
  },
});
const j_ = ({ error: e, event: t }) => (
    On(e, { extra: { event: t } }),
    { message: "Whoops! Something went wrong on the client." }
  ),
  ch = {};
function W_(e) {
  let t, n, i;
  var r = e[1][0];
  function a(s) {
    return { props: { data: s[3], form: s[2] } };
  }
  return (
    r && ((t = lt(r, a(e))), e[18](t)),
    {
      c() {
        t && at(t.$$.fragment), (n = q());
      },
      l(s) {
        t && Qt(t.$$.fragment, s), (n = q());
      },
      m(s, o) {
        t && ot(t, s, o), ht(s, n, o), (i = !0);
      },
      p(s, o) {
        const c = {};
        if (
          (o & 8 && (c.data = s[3]),
          o & 4 && (c.form = s[2]),
          o & 2 && r !== (r = s[1][0]))
        ) {
          if (t) {
            Nt();
            const u = t;
            j(u.$$.fragment, 1, 0, () => {
              ct(u, 1);
            }),
              kt();
          }
          r
            ? ((t = lt(r, a(s))),
              s[18](t),
              at(t.$$.fragment),
              W(t.$$.fragment, 1),
              ot(t, n.parentNode, n))
            : (t = null);
        } else r && t.$set(c);
      },
      i(s) {
        i || (t && W(t.$$.fragment, s), (i = !0));
      },
      o(s) {
        t && j(t.$$.fragment, s), (i = !1);
      },
      d(s) {
        s && ut(n), e[18](null), t && ct(t, s);
      },
    }
  );
}
function q_(e) {
  let t, n, i;
  var r = e[1][0];
  function a(s) {
    return {
      props: { data: s[3], $$slots: { default: [th] }, $$scope: { ctx: s } },
    };
  }
  return (
    r && ((t = lt(r, a(e))), e[17](t)),
    {
      c() {
        t && at(t.$$.fragment), (n = q());
      },
      l(s) {
        t && Qt(t.$$.fragment, s), (n = q());
      },
      m(s, o) {
        t && ot(t, s, o), ht(s, n, o), (i = !0);
      },
      p(s, o) {
        const c = {};
        if (
          (o & 8 && (c.data = s[3]),
          o & 524407 && (c.$$scope = { dirty: o, ctx: s }),
          o & 2 && r !== (r = s[1][0]))
        ) {
          if (t) {
            Nt();
            const u = t;
            j(u.$$.fragment, 1, 0, () => {
              ct(u, 1);
            }),
              kt();
          }
          r
            ? ((t = lt(r, a(s))),
              s[17](t),
              at(t.$$.fragment),
              W(t.$$.fragment, 1),
              ot(t, n.parentNode, n))
            : (t = null);
        } else r && t.$set(c);
      },
      i(s) {
        i || (t && W(t.$$.fragment, s), (i = !0));
      },
      o(s) {
        t && j(t.$$.fragment, s), (i = !1);
      },
      d(s) {
        s && ut(n), e[17](null), t && ct(t, s);
      },
    }
  );
}
function V_(e) {
  let t, n, i;
  var r = e[1][1];
  function a(s) {
    return { props: { data: s[4], form: s[2] } };
  }
  return (
    r && ((t = lt(r, a(e))), e[16](t)),
    {
      c() {
        t && at(t.$$.fragment), (n = q());
      },
      l(s) {
        t && Qt(t.$$.fragment, s), (n = q());
      },
      m(s, o) {
        t && ot(t, s, o), ht(s, n, o), (i = !0);
      },
      p(s, o) {
        const c = {};
        if (
          (o & 16 && (c.data = s[4]),
          o & 4 && (c.form = s[2]),
          o & 2 && r !== (r = s[1][1]))
        ) {
          if (t) {
            Nt();
            const u = t;
            j(u.$$.fragment, 1, 0, () => {
              ct(u, 1);
            }),
              kt();
          }
          r
            ? ((t = lt(r, a(s))),
              s[16](t),
              at(t.$$.fragment),
              W(t.$$.fragment, 1),
              ot(t, n.parentNode, n))
            : (t = null);
        } else r && t.$set(c);
      },
      i(s) {
        i || (t && W(t.$$.fragment, s), (i = !0));
      },
      o(s) {
        t && j(t.$$.fragment, s), (i = !1);
      },
      d(s) {
        s && ut(n), e[16](null), t && ct(t, s);
      },
    }
  );
}
function Z_(e) {
  let t, n, i;
  var r = e[1][1];
  function a(s) {
    return {
      props: { data: s[4], $$slots: { default: [Q_] }, $$scope: { ctx: s } },
    };
  }
  return (
    r && ((t = lt(r, a(e))), e[15](t)),
    {
      c() {
        t && at(t.$$.fragment), (n = q());
      },
      l(s) {
        t && Qt(t.$$.fragment, s), (n = q());
      },
      m(s, o) {
        t && ot(t, s, o), ht(s, n, o), (i = !0);
      },
      p(s, o) {
        const c = {};
        if (
          (o & 16 && (c.data = s[4]),
          o & 524391 && (c.$$scope = { dirty: o, ctx: s }),
          o & 2 && r !== (r = s[1][1]))
        ) {
          if (t) {
            Nt();
            const u = t;
            j(u.$$.fragment, 1, 0, () => {
              ct(u, 1);
            }),
              kt();
          }
          r
            ? ((t = lt(r, a(s))),
              s[15](t),
              at(t.$$.fragment),
              W(t.$$.fragment, 1),
              ot(t, n.parentNode, n))
            : (t = null);
        } else r && t.$set(c);
      },
      i(s) {
        i || (t && W(t.$$.fragment, s), (i = !0));
      },
      o(s) {
        t && j(t.$$.fragment, s), (i = !1);
      },
      d(s) {
        s && ut(n), e[15](null), t && ct(t, s);
      },
    }
  );
}
function K_(e) {
  let t, n, i;
  var r = e[1][2];
  function a(s) {
    return { props: { data: s[5], form: s[2] } };
  }
  return (
    r && ((t = lt(r, a(e))), e[14](t)),
    {
      c() {
        t && at(t.$$.fragment), (n = q());
      },
      l(s) {
        t && Qt(t.$$.fragment, s), (n = q());
      },
      m(s, o) {
        t && ot(t, s, o), ht(s, n, o), (i = !0);
      },
      p(s, o) {
        const c = {};
        if (
          (o & 32 && (c.data = s[5]),
          o & 4 && (c.form = s[2]),
          o & 2 && r !== (r = s[1][2]))
        ) {
          if (t) {
            Nt();
            const u = t;
            j(u.$$.fragment, 1, 0, () => {
              ct(u, 1);
            }),
              kt();
          }
          r
            ? ((t = lt(r, a(s))),
              s[14](t),
              at(t.$$.fragment),
              W(t.$$.fragment, 1),
              ot(t, n.parentNode, n))
            : (t = null);
        } else r && t.$set(c);
      },
      i(s) {
        i || (t && W(t.$$.fragment, s), (i = !0));
      },
      o(s) {
        t && j(t.$$.fragment, s), (i = !1);
      },
      d(s) {
        s && ut(n), e[14](null), t && ct(t, s);
      },
    }
  );
}
function X_(e) {
  let t, n, i;
  var r = e[1][2];
  function a(s) {
    return {
      props: { data: s[5], $$slots: { default: [J_] }, $$scope: { ctx: s } },
    };
  }
  return (
    r && ((t = lt(r, a(e))), e[13](t)),
    {
      c() {
        t && at(t.$$.fragment), (n = q());
      },
      l(s) {
        t && Qt(t.$$.fragment, s), (n = q());
      },
      m(s, o) {
        t && ot(t, s, o), ht(s, n, o), (i = !0);
      },
      p(s, o) {
        const c = {};
        if (
          (o & 32 && (c.data = s[5]),
          o & 524359 && (c.$$scope = { dirty: o, ctx: s }),
          o & 2 && r !== (r = s[1][2]))
        ) {
          if (t) {
            Nt();
            const u = t;
            j(u.$$.fragment, 1, 0, () => {
              ct(u, 1);
            }),
              kt();
          }
          r
            ? ((t = lt(r, a(s))),
              s[13](t),
              at(t.$$.fragment),
              W(t.$$.fragment, 1),
              ot(t, n.parentNode, n))
            : (t = null);
        } else r && t.$set(c);
      },
      i(s) {
        i || (t && W(t.$$.fragment, s), (i = !0));
      },
      o(s) {
        t && j(t.$$.fragment, s), (i = !1);
      },
      d(s) {
        s && ut(n), e[13](null), t && ct(t, s);
      },
    }
  );
}
function J_(e) {
  let t, n, i;
  var r = e[1][3];
  function a(s) {
    return { props: { data: s[6], form: s[2] } };
  }
  return (
    r && ((t = lt(r, a(e))), e[12](t)),
    {
      c() {
        t && at(t.$$.fragment), (n = q());
      },
      l(s) {
        t && Qt(t.$$.fragment, s), (n = q());
      },
      m(s, o) {
        t && ot(t, s, o), ht(s, n, o), (i = !0);
      },
      p(s, o) {
        const c = {};
        if (
          (o & 64 && (c.data = s[6]),
          o & 4 && (c.form = s[2]),
          o & 2 && r !== (r = s[1][3]))
        ) {
          if (t) {
            Nt();
            const u = t;
            j(u.$$.fragment, 1, 0, () => {
              ct(u, 1);
            }),
              kt();
          }
          r
            ? ((t = lt(r, a(s))),
              s[12](t),
              at(t.$$.fragment),
              W(t.$$.fragment, 1),
              ot(t, n.parentNode, n))
            : (t = null);
        } else r && t.$set(c);
      },
      i(s) {
        i || (t && W(t.$$.fragment, s), (i = !0));
      },
      o(s) {
        t && j(t.$$.fragment, s), (i = !1);
      },
      d(s) {
        s && ut(n), e[12](null), t && ct(t, s);
      },
    }
  );
}
function Q_(e) {
  let t, n, i, r;
  const a = [X_, K_],
    s = [];
  function o(c, u) {
    return c[1][3] ? 0 : 1;
  }
  return (
    (t = o(e)),
    (n = s[t] = a[t](e)),
    {
      c() {
        n.c(), (i = q());
      },
      l(c) {
        n.l(c), (i = q());
      },
      m(c, u) {
        s[t].m(c, u), ht(c, i, u), (r = !0);
      },
      p(c, u) {
        let l = t;
        (t = o(c)),
          t === l
            ? s[t].p(c, u)
            : (Nt(),
              j(s[l], 1, 1, () => {
                s[l] = null;
              }),
              kt(),
              (n = s[t]),
              n ? n.p(c, u) : ((n = s[t] = a[t](c)), n.c()),
              W(n, 1),
              n.m(i.parentNode, i));
      },
      i(c) {
        r || (W(n), (r = !0));
      },
      o(c) {
        j(n), (r = !1);
      },
      d(c) {
        c && ut(i), s[t].d(c);
      },
    }
  );
}
function th(e) {
  let t, n, i, r;
  const a = [Z_, V_],
    s = [];
  function o(c, u) {
    return c[1][2] ? 0 : 1;
  }
  return (
    (t = o(e)),
    (n = s[t] = a[t](e)),
    {
      c() {
        n.c(), (i = q());
      },
      l(c) {
        n.l(c), (i = q());
      },
      m(c, u) {
        s[t].m(c, u), ht(c, i, u), (r = !0);
      },
      p(c, u) {
        let l = t;
        (t = o(c)),
          t === l
            ? s[t].p(c, u)
            : (Nt(),
              j(s[l], 1, 1, () => {
                s[l] = null;
              }),
              kt(),
              (n = s[t]),
              n ? n.p(c, u) : ((n = s[t] = a[t](c)), n.c()),
              W(n, 1),
              n.m(i.parentNode, i));
      },
      i(c) {
        r || (W(n), (r = !0));
      },
      o(c) {
        j(n), (r = !1);
      },
      d(c) {
        c && ut(i), s[t].d(c);
      },
    }
  );
}
function Jr(e) {
  let t,
    n = e[8] && Qr(e);
  return {
    c() {
      (t = Ma("div")), n && n.c(), this.h();
    },
    l(i) {
      t = Pa(i, "DIV", {
        id: !0,
        "aria-live": !0,
        "aria-atomic": !0,
        style: !0,
      });
      var r = za(t);
      n && n.l(r), r.forEach(ut), this.h();
    },
    h() {
      $n(t, "id", "svelte-announcer"),
        $n(t, "aria-live", "assertive"),
        $n(t, "aria-atomic", "true"),
        Dt(t, "position", "absolute"),
        Dt(t, "left", "0"),
        Dt(t, "top", "0"),
        Dt(t, "clip", "rect(0 0 0 0)"),
        Dt(t, "clip-path", "inset(50%)"),
        Dt(t, "overflow", "hidden"),
        Dt(t, "white-space", "nowrap"),
        Dt(t, "width", "1px"),
        Dt(t, "height", "1px");
    },
    m(i, r) {
      ht(i, t, r), n && n.m(t, null);
    },
    p(i, r) {
      i[8]
        ? n
          ? n.p(i, r)
          : ((n = Qr(i)), n.c(), n.m(t, null))
        : n && (n.d(1), (n = null));
    },
    d(i) {
      i && ut(t), n && n.d();
    },
  };
}
function Qr(e) {
  let t;
  return {
    c() {
      t = Ga(e[9]);
    },
    l(n) {
      t = Fa(n, e[9]);
    },
    m(n, i) {
      ht(n, t, i);
    },
    p(n, i) {
      i & 512 && Ya(t, n[9]);
    },
    d(n) {
      n && ut(t);
    },
  };
}
function eh(e) {
  let t, n, i, r, a;
  const s = [q_, W_],
    o = [];
  function c(l, d) {
    return l[1][1] ? 0 : 1;
  }
  (t = c(e)), (n = o[t] = s[t](e));
  let u = e[7] && Jr(e);
  return {
    c() {
      n.c(), (i = Ca()), u && u.c(), (r = q());
    },
    l(l) {
      n.l(l), (i = Ua(l)), u && u.l(l), (r = q());
    },
    m(l, d) {
      o[t].m(l, d), ht(l, i, d), u && u.m(l, d), ht(l, r, d), (a = !0);
    },
    p(l, [d]) {
      let h = t;
      (t = c(l)),
        t === h
          ? o[t].p(l, d)
          : (Nt(),
            j(o[h], 1, 1, () => {
              o[h] = null;
            }),
            kt(),
            (n = o[t]),
            n ? n.p(l, d) : ((n = o[t] = s[t](l)), n.c()),
            W(n, 1),
            n.m(i.parentNode, i)),
        l[7]
          ? u
            ? u.p(l, d)
            : ((u = Jr(l)), u.c(), u.m(r.parentNode, r))
          : u && (u.d(1), (u = null));
    },
    i(l) {
      a || (W(n), (a = !0));
    },
    o(l) {
      j(n), (a = !1);
    },
    d(l) {
      l && (ut(i), ut(r)), o[t].d(l), u && u.d(l);
    },
  };
}
function nh(e, t, n) {
  let { stores: i } = t,
    { page: r } = t,
    { constructors: a } = t,
    { components: s = [] } = t,
    { form: o } = t,
    { data_0: c = null } = t,
    { data_1: u = null } = t,
    { data_2: l = null } = t,
    { data_3: d = null } = t;
  La(i.page.notify);
  let h = !1,
    f = !1,
    p = null;
  Ba(() => {
    const m = i.page.subscribe(() => {
      h && (n(8, (f = !0)), n(9, (p = document.title || "untitled page")));
    });
    return n(7, (h = !0)), m;
  });
  function b(m) {
    Wt[m ? "unshift" : "push"](() => {
      (s[3] = m), n(0, s);
    });
  }
  function v(m) {
    Wt[m ? "unshift" : "push"](() => {
      (s[2] = m), n(0, s);
    });
  }
  function E(m) {
    Wt[m ? "unshift" : "push"](() => {
      (s[2] = m), n(0, s);
    });
  }
  function O(m) {
    Wt[m ? "unshift" : "push"](() => {
      (s[1] = m), n(0, s);
    });
  }
  function x(m) {
    Wt[m ? "unshift" : "push"](() => {
      (s[1] = m), n(0, s);
    });
  }
  function N(m) {
    Wt[m ? "unshift" : "push"](() => {
      (s[0] = m), n(0, s);
    });
  }
  function S(m) {
    Wt[m ? "unshift" : "push"](() => {
      (s[0] = m), n(0, s);
    });
  }
  return (
    (e.$$set = (m) => {
      "stores" in m && n(10, (i = m.stores)),
        "page" in m && n(11, (r = m.page)),
        "constructors" in m && n(1, (a = m.constructors)),
        "components" in m && n(0, (s = m.components)),
        "form" in m && n(2, (o = m.form)),
        "data_0" in m && n(3, (c = m.data_0)),
        "data_1" in m && n(4, (u = m.data_1)),
        "data_2" in m && n(5, (l = m.data_2)),
        "data_3" in m && n(6, (d = m.data_3));
    }),
    (e.$$.update = () => {
      e.$$.dirty & 3072 && i.page.set(r);
    }),
    [s, a, o, c, u, l, d, h, f, p, i, r, b, v, E, O, x, N, S]
  );
}
class uh extends Aa {
  constructor(t) {
    super(),
      xa(this, t, nh, eh, Oa, {
        stores: 10,
        page: 11,
        constructors: 1,
        components: 0,
        form: 2,
        data_0: 3,
        data_1: 4,
        data_2: 5,
        data_3: 6,
      });
  }
}
const lh = [
    () =>
      R(
        () => import("../nodes/0.8dd4a607.js"),
        [
          "../nodes/0.8dd4a607.js",
          "../chunks/public.4926c498.js",
          "../chunks/_commonjsHelpers.3bb56e27.js",
          "../chunks/index.08749574.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/preload-helper.6d58dae5.js",
          "../chunks/navigation.348d0091.js",
          "../chunks/singletons.9c14e83c.js",
          "../chunks/index.6e4317f1.js",
          "../chunks/each.3cf95a54.js",
          "../chunks/index.e14db2ec.js",
          "../chunks/toastStore.b0ed32a8.js",
          "../chunks/spread.5cc747ed.js",
          "../chunks/Icon.bcad08c4.js",
          "../chunks/langUtils.50e57082.js",
          "../assets/0.3bf91538.css",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/1.1fd174c3.js"),
        [
          "../nodes/1.1fd174c3.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/stores.8bffc7f8.js",
          "../chunks/singletons.9c14e83c.js",
          "../chunks/index.6e4317f1.js",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/2.b5a55309.js"),
        [
          "../nodes/2.b5a55309.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/Navbar.935098d0.js",
          "../chunks/Icon.bcad08c4.js",
          "../chunks/spread.5cc747ed.js",
          "../chunks/index.e14db2ec.js",
          "../chunks/stores.8bffc7f8.js",
          "../chunks/singletons.9c14e83c.js",
          "../chunks/index.6e4317f1.js",
          "../chunks/navigation.348d0091.js",
          "../chunks/utils.7de8c714.js",
          "../chunks/index.06e46af8.js",
          "../chunks/LogoWithText.07dfda91.js",
          "../chunks/featureFlags.9a490bb5.js",
          "../chunks/notify.112187cd.js",
          "../chunks/toastStore.b0ed32a8.js",
          "../assets/Navbar.4065a536.css",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/3.ed0db1e6.js"),
        [
          "../nodes/3.ed0db1e6.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/Navbar.935098d0.js",
          "../chunks/Icon.bcad08c4.js",
          "../chunks/spread.5cc747ed.js",
          "../chunks/index.e14db2ec.js",
          "../chunks/stores.8bffc7f8.js",
          "../chunks/singletons.9c14e83c.js",
          "../chunks/index.6e4317f1.js",
          "../chunks/navigation.348d0091.js",
          "../chunks/utils.7de8c714.js",
          "../chunks/index.06e46af8.js",
          "../chunks/LogoWithText.07dfda91.js",
          "../chunks/featureFlags.9a490bb5.js",
          "../chunks/notify.112187cd.js",
          "../chunks/toastStore.b0ed32a8.js",
          "../assets/Navbar.4065a536.css",
          "../chunks/Footer.2a10735b.js",
          "../chunks/langUtils.50e57082.js",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/4.b291d27c.js"),
        [
          "../nodes/4.b291d27c.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/each.3cf95a54.js",
          "../chunks/stores.8bffc7f8.js",
          "../chunks/singletons.9c14e83c.js",
          "../chunks/index.6e4317f1.js",
          "../assets/4.0ed63405.css",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/5.40e8c6a0.js"),
        [
          "../nodes/5.40e8c6a0.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/Navbar.935098d0.js",
          "../chunks/Icon.bcad08c4.js",
          "../chunks/spread.5cc747ed.js",
          "../chunks/index.e14db2ec.js",
          "../chunks/stores.8bffc7f8.js",
          "../chunks/singletons.9c14e83c.js",
          "../chunks/index.6e4317f1.js",
          "../chunks/navigation.348d0091.js",
          "../chunks/utils.7de8c714.js",
          "../chunks/index.06e46af8.js",
          "../chunks/LogoWithText.07dfda91.js",
          "../chunks/featureFlags.9a490bb5.js",
          "../chunks/notify.112187cd.js",
          "../chunks/toastStore.b0ed32a8.js",
          "../assets/Navbar.4065a536.css",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/6.f3f04863.js"),
        [
          "../nodes/6.f3f04863.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/Footer.2a10735b.js",
          "../chunks/LogoWithText.07dfda91.js",
          "../chunks/Icon.bcad08c4.js",
          "../chunks/spread.5cc747ed.js",
          "../chunks/Navbar.935098d0.js",
          "../chunks/index.e14db2ec.js",
          "../chunks/stores.8bffc7f8.js",
          "../chunks/singletons.9c14e83c.js",
          "../chunks/index.6e4317f1.js",
          "../chunks/navigation.348d0091.js",
          "../chunks/utils.7de8c714.js",
          "../chunks/index.06e46af8.js",
          "../chunks/featureFlags.9a490bb5.js",
          "../chunks/notify.112187cd.js",
          "../chunks/toastStore.b0ed32a8.js",
          "../assets/Navbar.4065a536.css",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/7.28d264bf.js"),
        [
          "../nodes/7.28d264bf.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/Icon.bcad08c4.js",
          "../chunks/spread.5cc747ed.js",
          "../chunks/stores.8bffc7f8.js",
          "../chunks/singletons.9c14e83c.js",
          "../chunks/index.6e4317f1.js",
          "../chunks/utils.7de8c714.js",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/8.f424aca5.js"),
        [
          "../nodes/8.f424aca5.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/PasswordRequirementsBox.aeca6ba5.js",
          "../chunks/each.3cf95a54.js",
          "../chunks/Icon.bcad08c4.js",
          "../chunks/spread.5cc747ed.js",
          "../chunks/utils.87b66c49.js",
          "../chunks/browser.759ad576.js",
          "../chunks/_commonjsHelpers.3bb56e27.js",
          "../assets/8.930ff023.css",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/9.7ff83f08.js"),
        [
          "../nodes/9.7ff83f08.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/10.a27baade.js"),
        [
          "../nodes/10.a27baade.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/each.3cf95a54.js",
          "../chunks/Icon.bcad08c4.js",
          "../chunks/spread.5cc747ed.js",
          "../chunks/langUtils.50e57082.js",
          "../chunks/Navbar.935098d0.js",
          "../chunks/index.e14db2ec.js",
          "../chunks/stores.8bffc7f8.js",
          "../chunks/singletons.9c14e83c.js",
          "../chunks/index.6e4317f1.js",
          "../chunks/navigation.348d0091.js",
          "../chunks/utils.7de8c714.js",
          "../chunks/index.06e46af8.js",
          "../chunks/LogoWithText.07dfda91.js",
          "../chunks/featureFlags.9a490bb5.js",
          "../chunks/notify.112187cd.js",
          "../chunks/toastStore.b0ed32a8.js",
          "../assets/Navbar.4065a536.css",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/11.7d5cf4a8.js"),
        [
          "../nodes/11.7d5cf4a8.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/stores.8bffc7f8.js",
          "../chunks/singletons.9c14e83c.js",
          "../chunks/index.6e4317f1.js",
          "../chunks/PasswordRequirementsBox.aeca6ba5.js",
          "../chunks/each.3cf95a54.js",
          "../chunks/Icon.bcad08c4.js",
          "../chunks/spread.5cc747ed.js",
          "../chunks/langUtils.50e57082.js",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/12.5451f9cd.js"),
        [
          "../nodes/12.5451f9cd.js",
          "../chunks/index.ce895744.js",
          "../chunks/index.08749574.js",
          "../chunks/scheduler.b44937bc.js",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/13.8f12804a.js"),
        [
          "../nodes/13.8f12804a.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/navigation.348d0091.js",
          "../chunks/singletons.9c14e83c.js",
          "../chunks/index.6e4317f1.js",
          "../chunks/langUtils.50e57082.js",
          "../chunks/Icon.bcad08c4.js",
          "../chunks/spread.5cc747ed.js",
          "../chunks/notify.112187cd.js",
          "../chunks/toastStore.b0ed32a8.js",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/14.f668c7b8.js"),
        [
          "../nodes/14.f668c7b8.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/spread.5cc747ed.js",
          "../chunks/formEnhance.d64645fd.js",
          "../chunks/parse.82a1be7b.js",
          "../chunks/singletons.9c14e83c.js",
          "../chunks/index.6e4317f1.js",
          "../chunks/navigation.348d0091.js",
          "../chunks/stores.8bffc7f8.js",
          "../chunks/index.74df5271.js",
          "../chunks/index.ce895744.js",
          "../chunks/Icon.bcad08c4.js",
          "../chunks/langUtils.50e57082.js",
          "../chunks/notify.112187cd.js",
          "../chunks/toastStore.b0ed32a8.js",
          "../assets/14.17027ac4.css",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../chunks/15.38969a3a.js"),
        [
          "../chunks/15.38969a3a.js",
          "../chunks/index.08749574.js",
          "../chunks/scheduler.b44937bc.js",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/16.50dcc030.js"),
        [
          "../nodes/16.50dcc030.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/spread.5cc747ed.js",
          "../chunks/formEnhance.d64645fd.js",
          "../chunks/parse.82a1be7b.js",
          "../chunks/singletons.9c14e83c.js",
          "../chunks/index.6e4317f1.js",
          "../chunks/navigation.348d0091.js",
          "../chunks/stores.8bffc7f8.js",
          "../chunks/index.74df5271.js",
          "../chunks/index.ce895744.js",
          "../chunks/langUtils.50e57082.js",
          "../chunks/Icon.bcad08c4.js",
          "../assets/14.17027ac4.css",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/17.34647845.js"),
        [
          "../nodes/17.34647845.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/each.3cf95a54.js",
          "../chunks/spread.5cc747ed.js",
          "../chunks/TextInput.5e76878d.js",
          "../chunks/Icon.bcad08c4.js",
          "../chunks/PasswordRequirementsBox.aeca6ba5.js",
          "../chunks/index.74df5271.js",
          "../chunks/navigation.348d0091.js",
          "../chunks/singletons.9c14e83c.js",
          "../chunks/index.6e4317f1.js",
          "../chunks/stores.8bffc7f8.js",
          "../chunks/formEnhance.d64645fd.js",
          "../chunks/parse.82a1be7b.js",
          "../chunks/index.ce895744.js",
          "../chunks/notify.112187cd.js",
          "../chunks/toastStore.b0ed32a8.js",
          "../chunks/index.e14db2ec.js",
          "../chunks/langUtils.50e57082.js",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/18.c4071e26.js"),
        [
          "../nodes/18.c4071e26.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/navigation.348d0091.js",
          "../chunks/singletons.9c14e83c.js",
          "../chunks/index.6e4317f1.js",
          "../chunks/stores.8bffc7f8.js",
          "../chunks/index.e14db2ec.js",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/19.73cfa827.js"),
        [
          "../nodes/19.73cfa827.js",
          "../chunks/preload-helper.6d58dae5.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/Icon.bcad08c4.js",
          "../chunks/spread.5cc747ed.js",
          "../chunks/index.6e4317f1.js",
          "../chunks/LogoWithText.07dfda91.js",
          "../chunks/notify.112187cd.js",
          "../chunks/toastStore.b0ed32a8.js",
          "../chunks/langUtils.50e57082.js",
          "../chunks/CDNImage.3b610445.js",
          "../assets/CDNImage.bf83d3b7.css",
          "../chunks/index.e14db2ec.js",
          "../chunks/navigation.348d0091.js",
          "../chunks/singletons.9c14e83c.js",
          "../chunks/stores.8bffc7f8.js",
          "../chunks/each.3cf95a54.js",
          "../chunks/sheet.d59c388b.js",
          "../assets/19.5c73a235.css",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../chunks/20.38969a3a.js"),
        [
          "../chunks/20.38969a3a.js",
          "../chunks/index.08749574.js",
          "../chunks/scheduler.b44937bc.js",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/21.fffc31f5.js"),
        [
          "../nodes/21.fffc31f5.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/Icon.bcad08c4.js",
          "../chunks/spread.5cc747ed.js",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/22.468da00a.js"),
        [
          "../nodes/22.468da00a.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/23.876c71c6.js"),
        [
          "../nodes/23.876c71c6.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/Icon.bcad08c4.js",
          "../chunks/spread.5cc747ed.js",
          "../chunks/_commonjsHelpers.3bb56e27.js",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/24.5f2280e1.js"),
        [
          "../nodes/24.5f2280e1.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/sheet.d59c388b.js",
          "../assets/24.7d5e120d.css",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/25.92683a06.js"),
        [
          "../nodes/25.92683a06.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/Icon.bcad08c4.js",
          "../chunks/spread.5cc747ed.js",
          "../chunks/each.3cf95a54.js",
          "../assets/25.14c789a1.css",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/26.139354e5.js"),
        [
          "../nodes/26.139354e5.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/CDNImage.3b610445.js",
          "../chunks/spread.5cc747ed.js",
          "../assets/CDNImage.bf83d3b7.css",
          "../assets/26.ad9a772f.css",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/27.705ff9af.js"),
        [
          "../nodes/27.705ff9af.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/each.3cf95a54.js",
          "../chunks/CDNImage.3b610445.js",
          "../chunks/spread.5cc747ed.js",
          "../assets/CDNImage.bf83d3b7.css",
          "../chunks/Icon.bcad08c4.js",
          "../chunks/index.e14db2ec.js",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/28.a5fa5f26.js"),
        [
          "../nodes/28.a5fa5f26.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/Icon.bcad08c4.js",
          "../chunks/spread.5cc747ed.js",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../chunks/29.38969a3a.js"),
        [
          "../chunks/29.38969a3a.js",
          "../chunks/index.08749574.js",
          "../chunks/scheduler.b44937bc.js",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/30.ef0ba414.js"),
        [
          "../nodes/30.ef0ba414.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/formEnhance.d64645fd.js",
          "../chunks/parse.82a1be7b.js",
          "../chunks/singletons.9c14e83c.js",
          "../chunks/index.6e4317f1.js",
          "../chunks/navigation.348d0091.js",
          "../chunks/stores.8bffc7f8.js",
          "../chunks/index.ce895744.js",
          "../chunks/Icon.bcad08c4.js",
          "../chunks/spread.5cc747ed.js",
          "../chunks/each.3cf95a54.js",
          "../chunks/featureFlags.9a490bb5.js",
          "../assets/14.17027ac4.css",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/31.6e9f4039.js"),
        [
          "../nodes/31.6e9f4039.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/Icon.bcad08c4.js",
          "../chunks/spread.5cc747ed.js",
          "../chunks/RenderStyledText.5f4802df.js",
          "../chunks/browser.759ad576.js",
          "../chunks/_commonjsHelpers.3bb56e27.js",
          "../chunks/notify.112187cd.js",
          "../chunks/toastStore.b0ed32a8.js",
          "../chunks/index.6e4317f1.js",
          "../chunks/langUtils.50e57082.js",
          "../chunks/index.e14db2ec.js",
          "../assets/31.7d8e66b2.css",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/32.3a76e8f2.js"),
        [
          "../nodes/32.3a76e8f2.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/each.3cf95a54.js",
          "../chunks/spread.5cc747ed.js",
          "../chunks/browser.759ad576.js",
          "../chunks/_commonjsHelpers.3bb56e27.js",
          "../chunks/Icon.bcad08c4.js",
          "../chunks/TextInput.5e76878d.js",
          "../chunks/BottomChevron.19394680.js",
          "../chunks/index.74df5271.js",
          "../chunks/navigation.348d0091.js",
          "../chunks/singletons.9c14e83c.js",
          "../chunks/index.6e4317f1.js",
          "../chunks/stores.8bffc7f8.js",
          "../chunks/formEnhance.d64645fd.js",
          "../chunks/parse.82a1be7b.js",
          "../chunks/index.ce895744.js",
          "../chunks/RenderStyledText.5f4802df.js",
          "../chunks/notify.112187cd.js",
          "../chunks/toastStore.b0ed32a8.js",
          "../chunks/langUtils.50e57082.js",
          "../assets/32.481dd399.css",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/33.3e56a6c2.js"),
        [
          "../nodes/33.3e56a6c2.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/BottomChevron.19394680.js",
          "../chunks/Icon.bcad08c4.js",
          "../chunks/spread.5cc747ed.js",
          "../chunks/Upload.84c5138f.js",
          "../chunks/index.06e46af8.js",
          "../chunks/utils.7de8c714.js",
          "../chunks/RenderStyledText.5f4802df.js",
          "../chunks/browser.759ad576.js",
          "../chunks/_commonjsHelpers.3bb56e27.js",
          "../chunks/notify.112187cd.js",
          "../chunks/toastStore.b0ed32a8.js",
          "../chunks/index.6e4317f1.js",
          "../chunks/utils.87b66c49.js",
          "../chunks/langUtils.50e57082.js",
          "../assets/34.ab8b9ad6.css",
        ],
        import.meta.url
      ),
    () =>
      R(
        () => import("../nodes/34.2f15ffa8.js"),
        [
          "../nodes/34.2f15ffa8.js",
          "../chunks/scheduler.b44937bc.js",
          "../chunks/index.08749574.js",
          "../chunks/Icon.bcad08c4.js",
          "../chunks/spread.5cc747ed.js",
          "../chunks/BottomChevron.19394680.js",
          "../chunks/Upload.84c5138f.js",
          "../chunks/langUtils.50e57082.js",
          "../chunks/notify.112187cd.js",
          "../chunks/toastStore.b0ed32a8.js",
          "../chunks/index.6e4317f1.js",
          "../assets/34.ab8b9ad6.css",
        ],
        import.meta.url
      ),
  ],
  dh = [0, 2, 6],
  fh = {
    "/(contents)": [19, [3]],
    "/(auth)/account": [-9, [2]],
    "/(auth)/auth": [-10, [2]],
    "/(auth)/auth/list-of-invited": [-11],
    "/(auth)/auth/set-new-password": [-12, [2]],
    "/(auth)/auth/verify": [12, [2]],
    "/(contents)/certificates": [21, [3]],
    "/(auth)/dashboard": [-14, [2]],
    "/(contents)/legal/privacy-and-terms": [22, [3]],
    "/(auth)/login": [-15, [2]],
    "/(auth)/logout": [-16, [2]],
    "/(staff)/manage": [-30, [5]],
    "/(staff)/manage/invite": [-31, [5]],
    "/(contents)/map": [23, [3]],
    "/(student-team-contact)/my-project": [-32, [6]],
    "/(student-team-contact)/my-project/edit/step-2-project-information": [
      -33,
      [6, 7],
    ],
    "/(student-team-contact)/my-project/edit/step-3-abstract": [-34, [6, 7]],
    "/(student-team-contact)/my-project/edit/step-4-article": [-35, [6, 7]],
    "/(contents)/projects": [24, [3]],
    "/(auth)/reset-password": [-17, [2]],
    "/(contents)/schedule": [25, [3]],
    "/(contents)/shop": [26, [3, 4]],
    "/(contents)/shop/shirt": [27, [3, 4]],
    "/(contents)/submission-closed": [-29, [3]],
    "/(auth)/welcome": [-18, [2]],
    "/(auth)/welcome/done": [18, [2]],
    "/(contents)/[slug]": [-21, [3]],
  },
  _h = {
    handleError:
      j_ ||
      (({ error: e }) => {
        console.error(e);
      }),
  };
export {
  fh as dictionary,
  _h as hooks,
  ch as matchers,
  lh as nodes,
  uh as root,
  dh as server_loads,
};
//# sourceMappingURL=app.04c0cc7d.js.map
