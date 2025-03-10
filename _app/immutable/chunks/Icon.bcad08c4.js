import {
  s as Re,
  r as L,
  k as N,
  n as oe,
  d as k,
  v as ze,
  Y as Be,
  I as A,
  J as re,
  e as qe,
  c as He,
  f as xe,
  K as ie,
  F as Qe,
  G as Ue,
  _ as se,
  $ as Ve,
} from "./scheduler.b44937bc.js";
import { g as ve } from "./spread.5cc747ed.js";
import { S as Ke, i as Ge } from "./index.08749574.js";
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
      (e._sentryDebugIds[t] = "c588244f-ff9f-4a95-90df-530006589d78"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-c588244f-ff9f-4a95-90df-530006589d78"));
  } catch {}
})();
const T = /^[a-z0-9]+(-[a-z0-9]+)*$/,
  R = (e, t, o, r = "") => {
    const n = e.split(":");
    if (e.slice(0, 1) === "@") {
      if (n.length < 2 || n.length > 3) return null;
      r = n.shift().slice(1);
    }
    if (n.length > 3 || !n.length) return null;
    if (n.length > 1) {
      const c = n.pop(),
        l = n.pop(),
        f = { provider: n.length > 0 ? n[0] : r, prefix: l, name: c };
      return t && !O(f) ? null : f;
    }
    const i = n[0],
      s = i.split("-");
    if (s.length > 1) {
      const c = { provider: r, prefix: s.shift(), name: s.join("-") };
      return t && !O(c) ? null : c;
    }
    if (o && r === "") {
      const c = { provider: r, prefix: "", name: i };
      return t && !O(c, o) ? null : c;
    }
    return null;
  },
  O = (e, t) =>
    e
      ? !!(
          (e.provider === "" || e.provider.match(T)) &&
          ((t && e.prefix === "") || e.prefix.match(T)) &&
          e.name.match(T)
        )
      : !1,
  Ie = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
  D = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
  z = Object.freeze({ ...Ie, ...D }),
  U = Object.freeze({ ...z, body: "", hidden: !1 });
function Je(e, t) {
  const o = {};
  !e.hFlip != !t.hFlip && (o.hFlip = !0),
    !e.vFlip != !t.vFlip && (o.vFlip = !0);
  const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return r && (o.rotate = r), o;
}
function ce(e, t) {
  const o = Je(e, t);
  for (const r in U)
    r in D
      ? r in e && !(r in o) && (o[r] = D[r])
      : r in t
      ? (o[r] = t[r])
      : r in e && (o[r] = e[r]);
  return o;
}
function We(e, t) {
  const o = e.icons,
    r = e.aliases || Object.create(null),
    n = Object.create(null);
  function i(s) {
    if (o[s]) return (n[s] = []);
    if (!(s in n)) {
      n[s] = null;
      const c = r[s] && r[s].parent,
        l = c && i(c);
      l && (n[s] = [c].concat(l));
    }
    return n[s];
  }
  return (t || Object.keys(o).concat(Object.keys(r))).forEach(i), n;
}
function Ye(e, t, o) {
  const r = e.icons,
    n = e.aliases || Object.create(null);
  let i = {};
  function s(c) {
    i = ce(r[c] || n[c], i);
  }
  return s(t), o.forEach(s), ce(e, i);
}
function Se(e, t) {
  const o = [];
  if (typeof e != "object" || typeof e.icons != "object") return o;
  e.not_found instanceof Array &&
    e.not_found.forEach((n) => {
      t(n, null), o.push(n);
    });
  const r = We(e);
  for (const n in r) {
    const i = r[n];
    i && (t(n, Ye(e, n, i)), o.push(n));
  }
  return o;
}
const Xe = { provider: "", aliases: {}, not_found: {}, ...Ie };
function H(e, t) {
  for (const o in t) if (o in e && typeof e[o] != typeof t[o]) return !1;
  return !0;
}
function ke(e) {
  if (typeof e != "object" || e === null) return null;
  const t = e;
  if (
    typeof t.prefix != "string" ||
    !e.icons ||
    typeof e.icons != "object" ||
    !H(e, Xe)
  )
    return null;
  const o = t.icons;
  for (const n in o) {
    const i = o[n];
    if (!n.match(T) || typeof i.body != "string" || !H(i, U)) return null;
  }
  const r = t.aliases || Object.create(null);
  for (const n in r) {
    const i = r[n],
      s = i.parent;
    if (!n.match(T) || typeof s != "string" || (!o[s] && !r[s]) || !H(i, U))
      return null;
  }
  return t;
}
const le = Object.create(null);
function Ze(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: Object.create(null),
    missing: new Set(),
  };
}
function I(e, t) {
  const o = le[e] || (le[e] = Object.create(null));
  return o[t] || (o[t] = Ze(e, t));
}
function X(e, t) {
  return ke(t)
    ? Se(t, (o, r) => {
        r ? (e.icons[o] = r) : e.missing.add(o);
      })
    : [];
}
function $e(e, t, o) {
  try {
    if (typeof o.body == "string") return (e.icons[t] = { ...o }), !0;
  } catch {}
  return !1;
}
let j = !1;
function _e(e) {
  return typeof e == "boolean" && (j = e), j;
}
function et(e) {
  const t = typeof e == "string" ? R(e, !0, j) : e;
  if (t) {
    const o = I(t.provider, t.prefix),
      r = t.name;
    return o.icons[r] || (o.missing.has(r) ? null : void 0);
  }
}
function tt(e, t) {
  const o = R(e, !0, j);
  if (!o) return !1;
  const r = I(o.provider, o.prefix);
  return $e(r, o.name, t);
}
function nt(e, t) {
  if (typeof e != "object") return !1;
  if ((typeof t != "string" && (t = e.provider || ""), j && !t && !e.prefix)) {
    let n = !1;
    return (
      ke(e) &&
        ((e.prefix = ""),
        Se(e, (i, s) => {
          s && tt(i, s) && (n = !0);
        })),
      n
    );
  }
  const o = e.prefix;
  if (!O({ provider: t, prefix: o, name: "a" })) return !1;
  const r = I(t, o);
  return !!X(r, e);
}
const Ce = Object.freeze({ width: null, height: null }),
  Te = Object.freeze({ ...Ce, ...D }),
  ot = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
  rt = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function fe(e, t, o) {
  if (t === 1) return e;
  if (((o = o || 100), typeof e == "number")) return Math.ceil(e * t * o) / o;
  if (typeof e != "string") return e;
  const r = e.split(ot);
  if (r === null || !r.length) return e;
  const n = [];
  let i = r.shift(),
    s = rt.test(i);
  for (;;) {
    if (s) {
      const c = parseFloat(i);
      isNaN(c) ? n.push(i) : n.push(Math.ceil(c * t * o) / o);
    } else n.push(i);
    if (((i = r.shift()), i === void 0)) return n.join("");
    s = !s;
  }
}
const it = (e) => e === "unset" || e === "undefined" || e === "none";
function st(e, t) {
  const o = { ...z, ...e },
    r = { ...Te, ...t },
    n = { left: o.left, top: o.top, width: o.width, height: o.height };
  let i = o.body;
  [o, r].forEach((y) => {
    const m = [],
      S = y.hFlip,
      g = y.vFlip;
    let u = y.rotate;
    S
      ? g
        ? (u += 2)
        : (m.push(
            "translate(" +
              (n.width + n.left).toString() +
              " " +
              (0 - n.top).toString() +
              ")"
          ),
          m.push("scale(-1 1)"),
          (n.top = n.left = 0))
      : g &&
        (m.push(
          "translate(" +
            (0 - n.left).toString() +
            " " +
            (n.height + n.top).toString() +
            ")"
        ),
        m.push("scale(1 -1)"),
        (n.top = n.left = 0));
    let b;
    switch ((u < 0 && (u -= Math.floor(u / 4) * 4), (u = u % 4), u)) {
      case 1:
        (b = n.height / 2 + n.top),
          m.unshift("rotate(90 " + b.toString() + " " + b.toString() + ")");
        break;
      case 2:
        m.unshift(
          "rotate(180 " +
            (n.width / 2 + n.left).toString() +
            " " +
            (n.height / 2 + n.top).toString() +
            ")"
        );
        break;
      case 3:
        (b = n.width / 2 + n.left),
          m.unshift("rotate(-90 " + b.toString() + " " + b.toString() + ")");
        break;
    }
    u % 2 === 1 &&
      (n.left !== n.top && ((b = n.left), (n.left = n.top), (n.top = b)),
      n.width !== n.height &&
        ((b = n.width), (n.width = n.height), (n.height = b))),
      m.length && (i = '<g transform="' + m.join(" ") + '">' + i + "</g>");
  });
  const s = r.width,
    c = r.height,
    l = n.width,
    f = n.height;
  let a, d;
  s === null
    ? ((d = c === null ? "1em" : c === "auto" ? f : c), (a = fe(d, l / f)))
    : ((a = s === "auto" ? l : s),
      (d = c === null ? fe(a, f / l) : c === "auto" ? f : c));
  const h = {},
    w = (y, m) => {
      it(m) || (h[y] = m.toString());
    };
  return (
    w("width", a),
    w("height", d),
    (h.viewBox =
      n.left.toString() +
      " " +
      n.top.toString() +
      " " +
      l.toString() +
      " " +
      f.toString()),
    { attributes: h, body: i }
  );
}
const ct = /\sid="(\S+)"/g,
  lt =
    "IconifyId" +
    Date.now().toString(16) +
    ((Math.random() * 16777216) | 0).toString(16);
let ft = 0;
function at(e, t = lt) {
  const o = [];
  let r;
  for (; (r = ct.exec(e)); ) o.push(r[1]);
  if (!o.length) return e;
  const n = "suffix" + ((Math.random() * 16777216) | Date.now()).toString(16);
  return (
    o.forEach((i) => {
      const s = typeof t == "function" ? t(i) : t + (ft++).toString(),
        c = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      e = e.replace(
        new RegExp('([#;"])(' + c + ')([")]|\\.[a-z])', "g"),
        "$1" + s + n + "$3"
      );
    }),
    (e = e.replace(new RegExp(n, "g"), "")),
    e
  );
}
const V = Object.create(null);
function ut(e, t) {
  V[e] = t;
}
function K(e) {
  return V[e] || V[""];
}
function Z(e) {
  let t;
  if (typeof e.resources == "string") t = [e.resources];
  else if (((t = e.resources), !(t instanceof Array) || !t.length)) return null;
  return {
    resources: t,
    path: e.path || "/",
    maxURL: e.maxURL || 500,
    rotate: e.rotate || 750,
    timeout: e.timeout || 5e3,
    random: e.random === !0,
    index: e.index || 0,
    dataAfterTimeout: e.dataAfterTimeout !== !1,
  };
}
const $ = Object.create(null),
  C = ["https://api.simplesvg.com", "https://api.unisvg.com"],
  F = [];
for (; C.length > 0; )
  C.length === 1 || Math.random() > 0.5 ? F.push(C.shift()) : F.push(C.pop());
$[""] = Z({ resources: ["https://api.iconify.design"].concat(F) });
function dt(e, t) {
  const o = Z(t);
  return o === null ? !1 : (($[e] = o), !0);
}
function ee(e) {
  return $[e];
}
const pt = () => {
  let e;
  try {
    if (((e = fetch), typeof e == "function")) return e;
  } catch {}
};
let ae = pt();
function ht(e, t) {
  const o = ee(e);
  if (!o) return 0;
  let r;
  if (!o.maxURL) r = 0;
  else {
    let n = 0;
    o.resources.forEach((s) => {
      n = Math.max(n, s.length);
    });
    const i = t + ".json?icons=";
    r = o.maxURL - n - o.path.length - i.length;
  }
  return r;
}
function gt(e) {
  return e === 404;
}
const mt = (e, t, o) => {
  const r = [],
    n = ht(e, t),
    i = "icons";
  let s = { type: i, provider: e, prefix: t, icons: [] },
    c = 0;
  return (
    o.forEach((l, f) => {
      (c += l.length + 1),
        c >= n &&
          f > 0 &&
          (r.push(s),
          (s = { type: i, provider: e, prefix: t, icons: [] }),
          (c = l.length)),
        s.icons.push(l);
    }),
    r.push(s),
    r
  );
};
function yt(e) {
  if (typeof e == "string") {
    const t = ee(e);
    if (t) return t.path;
  }
  return "/";
}
const bt = (e, t, o) => {
    if (!ae) {
      o("abort", 424);
      return;
    }
    let r = yt(t.provider);
    switch (t.type) {
      case "icons": {
        const i = t.prefix,
          c = t.icons.join(","),
          l = new URLSearchParams({ icons: c });
        r += i + ".json?" + l.toString();
        break;
      }
      case "custom": {
        const i = t.uri;
        r += i.slice(0, 1) === "/" ? i.slice(1) : i;
        break;
      }
      default:
        o("abort", 400);
        return;
    }
    let n = 503;
    ae(e + r)
      .then((i) => {
        const s = i.status;
        if (s !== 200) {
          setTimeout(() => {
            o(gt(s) ? "abort" : "next", s);
          });
          return;
        }
        return (n = 501), i.json();
      })
      .then((i) => {
        if (typeof i != "object" || i === null) {
          setTimeout(() => {
            i === 404 ? o("abort", i) : o("next", n);
          });
          return;
        }
        setTimeout(() => {
          o("success", i);
        });
      })
      .catch(() => {
        o("next", n);
      });
  },
  wt = { prepare: mt, send: bt };
function xt(e) {
  const t = { loaded: [], missing: [], pending: [] },
    o = Object.create(null);
  e.sort((n, i) =>
    n.provider !== i.provider
      ? n.provider.localeCompare(i.provider)
      : n.prefix !== i.prefix
      ? n.prefix.localeCompare(i.prefix)
      : n.name.localeCompare(i.name)
  );
  let r = { provider: "", prefix: "", name: "" };
  return (
    e.forEach((n) => {
      if (
        r.name === n.name &&
        r.prefix === n.prefix &&
        r.provider === n.provider
      )
        return;
      r = n;
      const i = n.provider,
        s = n.prefix,
        c = n.name,
        l = o[i] || (o[i] = Object.create(null)),
        f = l[s] || (l[s] = I(i, s));
      let a;
      c in f.icons
        ? (a = t.loaded)
        : s === "" || f.missing.has(c)
        ? (a = t.missing)
        : (a = t.pending);
      const d = { provider: i, prefix: s, name: c };
      a.push(d);
    }),
    t
  );
}
function je(e, t) {
  e.forEach((o) => {
    const r = o.loaderCallbacks;
    r && (o.loaderCallbacks = r.filter((n) => n.id !== t));
  });
}
function vt(e) {
  e.pendingCallbacksFlag ||
    ((e.pendingCallbacksFlag = !0),
    setTimeout(() => {
      e.pendingCallbacksFlag = !1;
      const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
      if (!t.length) return;
      let o = !1;
      const r = e.provider,
        n = e.prefix;
      t.forEach((i) => {
        const s = i.icons,
          c = s.pending.length;
        (s.pending = s.pending.filter((l) => {
          if (l.prefix !== n) return !0;
          const f = l.name;
          if (e.icons[f]) s.loaded.push({ provider: r, prefix: n, name: f });
          else if (e.missing.has(f))
            s.missing.push({ provider: r, prefix: n, name: f });
          else return (o = !0), !0;
          return !1;
        })),
          s.pending.length !== c &&
            (o || je([e], i.id),
            i.callback(
              s.loaded.slice(0),
              s.missing.slice(0),
              s.pending.slice(0),
              i.abort
            ));
      });
    }));
}
let It = 0;
function St(e, t, o) {
  const r = It++,
    n = je.bind(null, o, r);
  if (!t.pending.length) return n;
  const i = { id: r, icons: t, callback: e, abort: n };
  return (
    o.forEach((s) => {
      (s.loaderCallbacks || (s.loaderCallbacks = [])).push(i);
    }),
    n
  );
}
function kt(e, t = !0, o = !1) {
  const r = [];
  return (
    e.forEach((n) => {
      const i = typeof n == "string" ? R(n, t, o) : n;
      i && r.push(i);
    }),
    r
  );
}
var _t = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1,
};
function Ct(e, t, o, r) {
  const n = e.resources.length,
    i = e.random ? Math.floor(Math.random() * n) : e.index;
  let s;
  if (e.random) {
    let p = e.resources.slice(0);
    for (s = []; p.length > 1; ) {
      const x = Math.floor(Math.random() * p.length);
      s.push(p[x]), (p = p.slice(0, x).concat(p.slice(x + 1)));
    }
    s = s.concat(p);
  } else s = e.resources.slice(i).concat(e.resources.slice(0, i));
  const c = Date.now();
  let l = "pending",
    f = 0,
    a,
    d = null,
    h = [],
    w = [];
  typeof r == "function" && w.push(r);
  function y() {
    d && (clearTimeout(d), (d = null));
  }
  function m() {
    l === "pending" && (l = "aborted"),
      y(),
      h.forEach((p) => {
        p.status === "pending" && (p.status = "aborted");
      }),
      (h = []);
  }
  function S(p, x) {
    x && (w = []), typeof p == "function" && w.push(p);
  }
  function g() {
    return {
      startTime: c,
      payload: t,
      status: l,
      queriesSent: f,
      queriesPending: h.length,
      subscribe: S,
      abort: m,
    };
  }
  function u() {
    (l = "failed"),
      w.forEach((p) => {
        p(void 0, a);
      });
  }
  function b() {
    h.forEach((p) => {
      p.status === "pending" && (p.status = "aborted");
    }),
      (h = []);
  }
  function Ne(p, x, _) {
    const P = x !== "success";
    switch (((h = h.filter((v) => v !== p)), l)) {
      case "pending":
        break;
      case "failed":
        if (P || !e.dataAfterTimeout) return;
        break;
      default:
        return;
    }
    if (x === "abort") {
      (a = _), u();
      return;
    }
    if (P) {
      (a = _), h.length || (s.length ? q() : u());
      return;
    }
    if ((y(), b(), !e.random)) {
      const v = e.resources.indexOf(p.resource);
      v !== -1 && v !== e.index && (e.index = v);
    }
    (l = "completed"),
      w.forEach((v) => {
        v(_);
      });
  }
  function q() {
    if (l !== "pending") return;
    y();
    const p = s.shift();
    if (p === void 0) {
      if (h.length) {
        d = setTimeout(() => {
          y(), l === "pending" && (b(), u());
        }, e.timeout);
        return;
      }
      u();
      return;
    }
    const x = {
      status: "pending",
      resource: p,
      callback: (_, P) => {
        Ne(x, _, P);
      },
    };
    h.push(x), f++, (d = setTimeout(q, e.rotate)), o(p, t, x.callback);
  }
  return setTimeout(q), g;
}
function Ee(e) {
  const t = { ..._t, ...e };
  let o = [];
  function r() {
    o = o.filter((c) => c().status === "pending");
  }
  function n(c, l, f) {
    const a = Ct(t, c, l, (d, h) => {
      r(), f && f(d, h);
    });
    return o.push(a), a;
  }
  function i(c) {
    return o.find((l) => c(l)) || null;
  }
  return {
    query: n,
    find: i,
    setIndex: (c) => {
      t.index = c;
    },
    getIndex: () => t.index,
    cleanup: r,
  };
}
function ue() {}
const Q = Object.create(null);
function Tt(e) {
  if (!Q[e]) {
    const t = ee(e);
    if (!t) return;
    const o = Ee(t),
      r = { config: t, redundancy: o };
    Q[e] = r;
  }
  return Q[e];
}
function jt(e, t, o) {
  let r, n;
  if (typeof e == "string") {
    const i = K(e);
    if (!i) return o(void 0, 424), ue;
    n = i.send;
    const s = Tt(e);
    s && (r = s.redundancy);
  } else {
    const i = Z(e);
    if (i) {
      r = Ee(i);
      const s = e.resources ? e.resources[0] : "",
        c = K(s);
      c && (n = c.send);
    }
  }
  return !r || !n ? (o(void 0, 424), ue) : r.query(t, n, o)().abort;
}
const de = "iconify2",
  E = "iconify",
  Pe = E + "-count",
  pe = E + "-version",
  Me = 36e5,
  Et = 168;
function G(e, t) {
  try {
    return e.getItem(t);
  } catch {}
}
function te(e, t, o) {
  try {
    return e.setItem(t, o), !0;
  } catch {}
}
function he(e, t) {
  try {
    e.removeItem(t);
  } catch {}
}
function J(e, t) {
  return te(e, Pe, t.toString());
}
function W(e) {
  return parseInt(G(e, Pe)) || 0;
}
const B = { local: !0, session: !0 },
  Oe = { local: new Set(), session: new Set() };
let ne = !1;
function Pt(e) {
  ne = e;
}
let M = typeof window > "u" ? {} : window;
function Fe(e) {
  const t = e + "Storage";
  try {
    if (M && M[t] && typeof M[t].length == "number") return M[t];
  } catch {}
  B[e] = !1;
}
function Le(e, t) {
  const o = Fe(e);
  if (!o) return;
  const r = G(o, pe);
  if (r !== de) {
    if (r) {
      const c = W(o);
      for (let l = 0; l < c; l++) he(o, E + l.toString());
    }
    te(o, pe, de), J(o, 0);
    return;
  }
  const n = Math.floor(Date.now() / Me) - Et,
    i = (c) => {
      const l = E + c.toString(),
        f = G(o, l);
      if (typeof f == "string") {
        try {
          const a = JSON.parse(f);
          if (
            typeof a == "object" &&
            typeof a.cached == "number" &&
            a.cached > n &&
            typeof a.provider == "string" &&
            typeof a.data == "object" &&
            typeof a.data.prefix == "string" &&
            t(a, c)
          )
            return !0;
        } catch {}
        he(o, l);
      }
    };
  let s = W(o);
  for (let c = s - 1; c >= 0; c--)
    i(c) || (c === s - 1 ? (s--, J(o, s)) : Oe[e].add(c));
}
function Ae() {
  if (!ne) {
    Pt(!0);
    for (const e in B)
      Le(e, (t) => {
        const o = t.data,
          r = t.provider,
          n = o.prefix,
          i = I(r, n);
        if (!X(i, o).length) return !1;
        const s = o.lastModified || -1;
        return (
          (i.lastModifiedCached = i.lastModifiedCached
            ? Math.min(i.lastModifiedCached, s)
            : s),
          !0
        );
      });
  }
}
function Mt(e, t) {
  const o = e.lastModifiedCached;
  if (o && o >= t) return o === t;
  if (((e.lastModifiedCached = t), o))
    for (const r in B)
      Le(r, (n) => {
        const i = n.data;
        return (
          n.provider !== e.provider ||
          i.prefix !== e.prefix ||
          i.lastModified === t
        );
      });
  return !0;
}
function Ot(e, t) {
  ne || Ae();
  function o(r) {
    let n;
    if (!B[r] || !(n = Fe(r))) return;
    const i = Oe[r];
    let s;
    if (i.size) i.delete((s = Array.from(i).shift()));
    else if (((s = W(n)), !J(n, s + 1))) return;
    const c = {
      cached: Math.floor(Date.now() / Me),
      provider: e.provider,
      data: t,
    };
    return te(n, E + s.toString(), JSON.stringify(c));
  }
  (t.lastModified && !Mt(e, t.lastModified)) ||
    (Object.keys(t.icons).length &&
      (t.not_found && ((t = Object.assign({}, t)), delete t.not_found),
      o("local") || o("session")));
}
function ge() {}
function Ft(e) {
  e.iconsLoaderFlag ||
    ((e.iconsLoaderFlag = !0),
    setTimeout(() => {
      (e.iconsLoaderFlag = !1), vt(e);
    }));
}
function Lt(e, t) {
  e.iconsToLoad
    ? (e.iconsToLoad = e.iconsToLoad.concat(t).sort())
    : (e.iconsToLoad = t),
    e.iconsQueueFlag ||
      ((e.iconsQueueFlag = !0),
      setTimeout(() => {
        e.iconsQueueFlag = !1;
        const { provider: o, prefix: r } = e,
          n = e.iconsToLoad;
        delete e.iconsToLoad;
        let i;
        if (!n || !(i = K(o))) return;
        i.prepare(o, r, n).forEach((c) => {
          jt(o, c, (l) => {
            if (typeof l != "object")
              c.icons.forEach((f) => {
                e.missing.add(f);
              });
            else
              try {
                const f = X(e, l);
                if (!f.length) return;
                const a = e.pendingIcons;
                a &&
                  f.forEach((d) => {
                    a.delete(d);
                  }),
                  Ot(e, l);
              } catch (f) {
                console.error(f);
              }
            Ft(e);
          });
        });
      }));
}
const At = (e, t) => {
  const o = kt(e, !0, _e()),
    r = xt(o);
  if (!r.pending.length) {
    let l = !0;
    return (
      t &&
        setTimeout(() => {
          l && t(r.loaded, r.missing, r.pending, ge);
        }),
      () => {
        l = !1;
      }
    );
  }
  const n = Object.create(null),
    i = [];
  let s, c;
  return (
    r.pending.forEach((l) => {
      const { provider: f, prefix: a } = l;
      if (a === c && f === s) return;
      (s = f), (c = a), i.push(I(f, a));
      const d = n[f] || (n[f] = Object.create(null));
      d[a] || (d[a] = []);
    }),
    r.pending.forEach((l) => {
      const { provider: f, prefix: a, name: d } = l,
        h = I(f, a),
        w = h.pendingIcons || (h.pendingIcons = new Set());
      w.has(d) || (w.add(d), n[f][a].push(d));
    }),
    i.forEach((l) => {
      const { provider: f, prefix: a } = l;
      n[f][a].length && Lt(l, n[f][a]);
    }),
    t ? St(t, r, i) : ge
  );
};
function Dt(e, t) {
  const o = { ...e };
  for (const r in t) {
    const n = t[r],
      i = typeof n;
    r in Ce
      ? (n === null || (n && (i === "string" || i === "number"))) && (o[r] = n)
      : i === typeof o[r] && (o[r] = r === "rotate" ? n % 4 : n);
  }
  return o;
}
const Nt = /[\s,]+/;
function Rt(e, t) {
  t.split(Nt).forEach((o) => {
    switch (o.trim()) {
      case "horizontal":
        e.hFlip = !0;
        break;
      case "vertical":
        e.vFlip = !0;
        break;
    }
  });
}
function zt(e, t = 0) {
  const o = e.replace(/^-?[0-9.]*/, "");
  function r(n) {
    for (; n < 0; ) n += 4;
    return n % 4;
  }
  if (o === "") {
    const n = parseInt(e);
    return isNaN(n) ? 0 : r(n);
  } else if (o !== e) {
    let n = 0;
    switch (o) {
      case "%":
        n = 25;
        break;
      case "deg":
        n = 90;
    }
    if (n) {
      let i = parseFloat(e.slice(0, e.length - o.length));
      return isNaN(i) ? 0 : ((i = i / n), i % 1 === 0 ? r(i) : 0);
    }
  }
  return t;
}
function Bt(e, t) {
  let o =
    e.indexOf("xlink:") === -1
      ? ""
      : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in t) o += " " + r + '="' + t[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + o + ">" + e + "</svg>";
}
function qt(e) {
  return e
    .replace(/"/g, "'")
    .replace(/%/g, "%25")
    .replace(/#/g, "%23")
    .replace(/</g, "%3C")
    .replace(/>/g, "%3E")
    .replace(/\s+/g, " ");
}
function Ht(e) {
  return "data:image/svg+xml," + qt(e);
}
function Qt(e) {
  return 'url("' + Ht(e) + '")';
}
const me = { ...Te, inline: !1 },
  Ut = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "aria-hidden": !0,
    role: "img",
  },
  Vt = { display: "inline-block" },
  Y = { "background-color": "currentColor" },
  De = { "background-color": "transparent" },
  ye = { image: "var(--svg)", repeat: "no-repeat", size: "100% 100%" },
  be = { "-webkit-mask": Y, mask: Y, background: De };
for (const e in be) {
  const t = be[e];
  for (const o in ye) t[e + "-" + o] = ye[o];
}
function Kt(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
function Gt(e, t) {
  const o = Dt(me, t),
    r = t.mode || "svg",
    n = r === "svg" ? { ...Ut } : {};
  e.body.indexOf("xlink:") === -1 && delete n["xmlns:xlink"];
  let i = typeof t.style == "string" ? t.style : "";
  for (let g in t) {
    const u = t[g];
    if (u !== void 0)
      switch (g) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          o[g] = u === !0 || u === "true" || u === 1;
          break;
        case "flip":
          typeof u == "string" && Rt(o, u);
          break;
        case "color":
          i =
            i +
            (i.length > 0 && i.trim().slice(-1) !== ";" ? ";" : "") +
            "color: " +
            u +
            "; ";
          break;
        case "rotate":
          typeof u == "string"
            ? (o[g] = zt(u))
            : typeof u == "number" && (o[g] = u);
          break;
        case "ariaHidden":
        case "aria-hidden":
          u !== !0 && u !== "true" && delete n["aria-hidden"];
          break;
        default:
          if (g.slice(0, 3) === "on:") break;
          me[g] === void 0 && (n[g] = u);
      }
  }
  const s = st(e, o),
    c = s.attributes;
  if ((o.inline && (i = "vertical-align: -0.125em; " + i), r === "svg")) {
    Object.assign(n, c), i !== "" && (n.style = i);
    let g = 0,
      u = t.id;
    return (
      typeof u == "string" && (u = u.replace(/-/g, "_")),
      {
        svg: !0,
        attributes: n,
        body: at(s.body, u ? () => u + "ID" + g++ : "iconifySvelte"),
      }
    );
  }
  const { body: l, width: f, height: a } = e,
    d = r === "mask" || (r === "bg" ? !1 : l.indexOf("currentColor") !== -1),
    h = Bt(l, { ...c, width: f + "", height: a + "" }),
    y = { "--svg": Qt(h) },
    m = (g) => {
      const u = c[g];
      u && (y[g] = Kt(u));
    };
  m("width"), m("height"), Object.assign(y, Vt, d ? Y : De);
  let S = "";
  for (const g in y) S += g + ": " + y[g] + ";";
  return (n.style = S + i), { svg: !1, attributes: n };
}
_e(!0);
ut("", wt);
if (typeof document < "u" && typeof window < "u") {
  Ae();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload,
      o = "Invalid IconifyPreload syntax.";
    typeof t == "object" &&
      t !== null &&
      (t instanceof Array ? t : [t]).forEach((r) => {
        try {
          (typeof r != "object" ||
            r === null ||
            r instanceof Array ||
            typeof r.icons != "object" ||
            typeof r.prefix != "string" ||
            !nt(r)) &&
            console.error(o);
        } catch {
          console.error(o);
        }
      });
  }
  if (e.IconifyProviders !== void 0) {
    const t = e.IconifyProviders;
    if (typeof t == "object" && t !== null)
      for (let o in t) {
        const r = "IconifyProviders[" + o + "] is invalid.";
        try {
          const n = t[o];
          if (typeof n != "object" || !n || n.resources === void 0) continue;
          dt(o, n) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
function Jt(e, t, o, r, n) {
  function i() {
    t.loading && (t.loading.abort(), (t.loading = null));
  }
  if (typeof e == "object" && e !== null && typeof e.body == "string")
    return (t.name = ""), i(), { data: { ...z, ...e } };
  let s;
  if (typeof e != "string" || (s = R(e, !1, !0)) === null) return i(), null;
  const c = et(s);
  if (!c)
    return (
      o &&
        (!t.loading || t.loading.name !== e) &&
        (i(), (t.name = ""), (t.loading = { name: e, abort: At([s], r) })),
      null
    );
  i(), t.name !== e && ((t.name = e), n && !t.destroyed && n(e));
  const l = ["iconify"];
  return (
    s.prefix !== "" && l.push("iconify--" + s.prefix),
    s.provider !== "" && l.push("iconify--" + s.provider),
    { data: c, classes: l }
  );
}
function Wt(e, t) {
  return e ? Gt({ ...z, ...e }, t) : null;
}
function we(e) {
  let t;
  function o(i, s) {
    return i[0].svg ? Xt : Yt;
  }
  let r = o(e),
    n = r(e);
  return {
    c() {
      n.c(), (t = L());
    },
    l(i) {
      n.l(i), (t = L());
    },
    m(i, s) {
      n.m(i, s), N(i, t, s);
    },
    p(i, s) {
      r === (r = o(i)) && n
        ? n.p(i, s)
        : (n.d(1), (n = r(i)), n && (n.c(), n.m(t.parentNode, t)));
    },
    d(i) {
      i && k(t), n.d(i);
    },
  };
}
function Yt(e) {
  let t,
    o = [e[0].attributes],
    r = {};
  for (let n = 0; n < o.length; n += 1) r = A(r, o[n]);
  return {
    c() {
      (t = qe("span")), this.h();
    },
    l(n) {
      (t = He(n, "SPAN", {})), xe(t).forEach(k), this.h();
    },
    h() {
      ie(t, r);
    },
    m(n, i) {
      N(n, t, i);
    },
    p(n, i) {
      ie(t, (r = ve(o, [i & 1 && n[0].attributes])));
    },
    d(n) {
      n && k(t);
    },
  };
}
function Xt(e) {
  let t,
    o = e[0].body + "",
    r = [e[0].attributes],
    n = {};
  for (let i = 0; i < r.length; i += 1) n = A(n, r[i]);
  return {
    c() {
      (t = Qe("svg")), this.h();
    },
    l(i) {
      t = Ue(i, "svg", {});
      var s = xe(t);
      s.forEach(k), this.h();
    },
    h() {
      se(t, n);
    },
    m(i, s) {
      N(i, t, s), (t.innerHTML = o);
    },
    p(i, s) {
      s & 1 && o !== (o = i[0].body + "") && (t.innerHTML = o),
        se(t, (n = ve(r, [s & 1 && i[0].attributes])));
    },
    d(i) {
      i && k(t);
    },
  };
}
function Zt(e) {
  let t,
    o = e[0] && we(e);
  return {
    c() {
      o && o.c(), (t = L());
    },
    l(r) {
      o && o.l(r), (t = L());
    },
    m(r, n) {
      o && o.m(r, n), N(r, t, n);
    },
    p(r, [n]) {
      r[0]
        ? o
          ? o.p(r, n)
          : ((o = we(r)), o.c(), o.m(t.parentNode, t))
        : o && (o.d(1), (o = null));
    },
    i: oe,
    o: oe,
    d(r) {
      r && k(t), o && o.d(r);
    },
  };
}
function $t(e, t, o) {
  const r = { name: "", loading: null, destroyed: !1 };
  let n = !1,
    i = 0,
    s;
  const c = (f) => {
    typeof t.onLoad == "function" && t.onLoad(f), Ve()("load", { icon: f });
  };
  function l() {
    o(3, i++, i);
  }
  return (
    ze(() => {
      o(2, (n = !0));
    }),
    Be(() => {
      o(1, (r.destroyed = !0), r),
        r.loading && (r.loading.abort(), o(1, (r.loading = null), r));
    }),
    (e.$$set = (f) => {
      o(6, (t = A(A({}, t), re(f))));
    }),
    (e.$$.update = () => {
      {
        const f = Jt(t.icon, r, n, l, c);
        o(0, (s = f ? Wt(f.data, t) : null)),
          s &&
            f.classes &&
            o(
              0,
              (s.attributes.class =
                (typeof t.class == "string" ? t.class + " " : "") +
                f.classes.join(" ")),
              s
            );
      }
    }),
    (t = re(t)),
    [s, r, n, i]
  );
}
class on extends Ke {
  constructor(t) {
    super(), Ge(this, t, $t, Zt, Re, {});
  }
}
export { on as I };
//# sourceMappingURL=Icon.bcad08c4.js.map
