import { v as Te, Z as ye } from "../chunks/scheduler.b44937bc.js";
import {
  S as Ke,
  a as ze,
  I as q,
  g as Ne,
  f as qe,
  b as _e,
  d as le,
  s as F,
  e as ee,
  i as we,
  h as z,
  P as Me,
  j as Ye,
} from "../chunks/singletons.9c14e83c.js";
import { u as Xe } from "../chunks/parse.82a1be7b.js";
(function () {
  try {
    var n =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      o = new Error().stack;
    o &&
      ((n._sentryDebugIds = n._sentryDebugIds || {}),
      (n._sentryDebugIds[o] = "3fcc0511-04e7-42bb-9e76-744fd7d56043"),
      (n._sentryDebugIdIdentifier =
        "sentry-dbid-3fcc0511-04e7-42bb-9e76-744fd7d56043"));
  } catch {}
})();
function Ze(n, o) {
  return n === "/" || o === "ignore"
    ? n
    : o === "never"
    ? n.endsWith("/")
      ? n.slice(0, -1)
      : n
    : o === "always" && !n.endsWith("/")
    ? n + "/"
    : n;
}
function Qe(n) {
  return n.split("%25").map(decodeURI).join("%25");
}
function et(n) {
  for (const o in n) n[o] = decodeURIComponent(n[o]);
  return n;
}
const tt = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];
function nt(n, o) {
  const l = new URL(n);
  for (const c of tt)
    Object.defineProperty(l, c, {
      get() {
        return o(), n[c];
      },
      enumerable: !0,
      configurable: !0,
    });
  return at(l), l;
}
function at(n) {
  Object.defineProperty(n, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    },
  });
}
const rt = "/__data.json";
function ot(n) {
  return n.replace(/\/$/, "") + rt;
}
function He(n) {
  try {
    return JSON.parse(sessionStorage[n]);
  } catch {}
}
function Ve(n, o) {
  const l = JSON.stringify(o);
  try {
    sessionStorage[n] = l;
  } catch {}
}
function it(...n) {
  let o = 5381;
  for (const l of n)
    if (typeof l == "string") {
      let c = l.length;
      for (; c; ) o = (o * 33) ^ l.charCodeAt(--c);
    } else if (ArrayBuffer.isView(l)) {
      const c = new Uint8Array(l.buffer, l.byteOffset, l.byteLength);
      let g = c.length;
      for (; g; ) o = (o * 33) ^ c[--g];
    } else throw new TypeError("value must be a string or TypedArray");
  return (o >>> 0).toString(36);
}
const fe = window.fetch;
window.fetch = (n, o) => (
  (n instanceof Request
    ? n.method
    : (o == null ? void 0 : o.method) || "GET") !== "GET" && ne.delete(Ee(n)),
  fe(n, o)
);
const ne = new Map();
function st(n, o) {
  const l = Ee(n, o),
    c = document.querySelector(l);
  if (c != null && c.textContent) {
    const { body: g, ...y } = JSON.parse(c.textContent),
      E = c.getAttribute("data-ttl");
    return (
      E && ne.set(l, { body: g, init: y, ttl: 1e3 * Number(E) }),
      Promise.resolve(new Response(g, y))
    );
  }
  return fe(n, o);
}
function ct(n, o, l) {
  if (ne.size > 0) {
    const c = Ee(n, l),
      g = ne.get(c);
    if (g) {
      if (
        performance.now() < g.ttl &&
        ["default", "force-cache", "only-if-cached", void 0].includes(
          l == null ? void 0 : l.cache
        )
      )
        return new Response(g.body, g.init);
      ne.delete(c);
    }
  }
  return fe(o, l);
}
function Ee(n, o) {
  let c = `script[data-sveltekit-fetched][data-url=${JSON.stringify(
    n instanceof Request ? n.url : n
  )}]`;
  if ((o != null && o.headers) || (o != null && o.body)) {
    const g = [];
    o.headers && g.push([...new Headers(o.headers)].join(",")),
      o.body &&
        (typeof o.body == "string" || ArrayBuffer.isView(o.body)) &&
        g.push(o.body),
      (c += `[data-hash="${it(...g)}"]`);
  }
  return c;
}
const lt = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function ft(n) {
  const o = [];
  return {
    pattern:
      n === "/"
        ? /^\/$/
        : new RegExp(
            `^${dt(n)
              .map((c) => {
                const g = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);
                if (g)
                  return (
                    o.push({
                      name: g[1],
                      matcher: g[2],
                      optional: !1,
                      rest: !0,
                      chained: !0,
                    }),
                    "(?:/(.*))?"
                  );
                const y = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c);
                if (y)
                  return (
                    o.push({
                      name: y[1],
                      matcher: y[2],
                      optional: !0,
                      rest: !1,
                      chained: !0,
                    }),
                    "(?:/([^/]+))?"
                  );
                if (!c) return;
                const E = c.split(/\[(.+?)\](?!\])/);
                return (
                  "/" +
                  E.map((v, S) => {
                    if (S % 2) {
                      if (v.startsWith("x+"))
                        return be(
                          String.fromCharCode(parseInt(v.slice(2), 16))
                        );
                      if (v.startsWith("u+"))
                        return be(
                          String.fromCharCode(
                            ...v
                              .slice(2)
                              .split("-")
                              .map((P) => parseInt(P, 16))
                          )
                        );
                      const m = lt.exec(v);
                      if (!m)
                        throw new Error(
                          `Invalid param: ${v}. Params and matcher names can only have underscores and alphanumeric characters.`
                        );
                      const [, N, j, D, I] = m;
                      return (
                        o.push({
                          name: D,
                          matcher: I,
                          optional: !!N,
                          rest: !!j,
                          chained: j ? S === 1 && E[0] === "" : !1,
                        }),
                        j ? "(.*?)" : N ? "([^/]*)?" : "([^/]+?)"
                      );
                    }
                    return be(v);
                  }).join("")
                );
              })
              .join("")}/?$`
          ),
    params: o,
  };
}
function ut(n) {
  return !/^\([^)]+\)$/.test(n);
}
function dt(n) {
  return n.slice(1).split("/").filter(ut);
}
function pt(n, o, l) {
  const c = {},
    g = n.slice(1);
  let y = 0;
  for (let E = 0; E < o.length; E += 1) {
    const _ = o[E];
    let v = g[E - y];
    if (
      (_.chained &&
        _.rest &&
        y &&
        ((v = g
          .slice(E - y, E + 1)
          .filter((S) => S)
          .join("/")),
        (y = 0)),
      v === void 0)
    ) {
      _.rest && (c[_.name] = "");
      continue;
    }
    if (!_.matcher || l[_.matcher](v)) {
      c[_.name] = v;
      const S = o[E + 1],
        m = g[E + 1];
      S && !S.rest && S.optional && m && _.chained && (y = 0);
      continue;
    }
    if (_.optional && _.chained) {
      y++;
      continue;
    }
    return;
  }
  if (!y) return c;
}
function be(n) {
  return n
    .normalize()
    .replace(/[[\]]/g, "\\$&")
    .replace(/%/g, "%25")
    .replace(/\//g, "%2[Ff]")
    .replace(/\?/g, "%3[Ff]")
    .replace(/#/g, "%23")
    .replace(/[.*+?^${}()|\\]/g, "\\$&");
}
function ht({ nodes: n, server_loads: o, dictionary: l, matchers: c }) {
  const g = new Set(o);
  return Object.entries(l).map(([_, [v, S, m]]) => {
    const { pattern: N, params: j } = ft(_),
      D = {
        id: _,
        exec: (I) => {
          const P = N.exec(I);
          if (P) return pt(P, j, c);
        },
        errors: [1, ...(m || [])].map((I) => n[I]),
        layouts: [0, ...(S || [])].map(E),
        leaf: y(v),
      };
    return (
      (D.errors.length = D.layouts.length =
        Math.max(D.errors.length, D.layouts.length)),
      D
    );
  });
  function y(_) {
    const v = _ < 0;
    return v && (_ = ~_), [v, n[_]];
  }
  function E(_) {
    return _ === void 0 ? _ : [g.has(_), n[_]];
  }
}
class te {
  constructor(o, l) {
    (this.status = o),
      typeof l == "string"
        ? (this.body = { message: l })
        : l
        ? (this.body = l)
        : (this.body = { message: `Error: ${o}` });
  }
  toString() {
    return JSON.stringify(this.body);
  }
}
class Fe {
  constructor(o, l) {
    (this.status = o), (this.location = l);
  }
}
async function mt(n) {
  var o;
  for (const l in n)
    if (typeof ((o = n[l]) == null ? void 0 : o.then) == "function")
      return Object.fromEntries(
        await Promise.all(Object.entries(n).map(async ([c, g]) => [c, await g]))
      );
  return n;
}
const Be = new Set([
  "load",
  "prerender",
  "csr",
  "ssr",
  "trailingSlash",
  "config",
]);
[...Be];
const gt = new Set([...Be]);
[...gt];
function yt(n) {
  return n.filter((o) => o != null);
}
const _t = "x-sveltekit-invalidated",
  H = He(Ke) ?? {},
  Q = He(ze) ?? {};
function ve(n) {
  H[n] = ee();
}
function wt(n, o) {
  var De;
  const l = ht(n),
    c = n.nodes[0],
    g = n.nodes[1];
  c(), g();
  const y = document.documentElement,
    E = [],
    _ = [];
  let v = null;
  const S = { before_navigate: [], after_navigate: [] };
  let m = { branch: [], error: null, url: null },
    N = !1,
    j = !1,
    D = !0,
    I = !1,
    P = !1,
    B = !1,
    J = !1,
    M,
    $ = (De = history.state) == null ? void 0 : De[q];
  $ ||
    (($ = Date.now()),
    history.replaceState({ ...history.state, [q]: $ }, "", location.href));
  const ue = H[$];
  ue && ((history.scrollRestoration = "manual"), scrollTo(ue.x, ue.y));
  let V, ae, W;
  async function ke() {
    if (((W = W || Promise.resolve()), await W, !W)) return;
    W = null;
    const e = new URL(location.href),
      t = X(e, !0);
    v = null;
    const r = (ae = {}),
      a = t && (await he(t));
    if (r === ae && a) {
      if (a.type === "redirect")
        return re(new URL(a.location, e).href, {}, [e.pathname], r);
      a.props.page !== void 0 && (V = a.props.page), M.$set(a.props);
    }
  }
  function xe(e) {
    _.some((t) => (t == null ? void 0 : t.snapshot)) &&
      (Q[e] = _.map((t) => {
        var r;
        return (r = t == null ? void 0 : t.snapshot) == null
          ? void 0
          : r.capture();
      }));
  }
  function Re(e) {
    var t;
    (t = Q[e]) == null ||
      t.forEach((r, a) => {
        var i, s;
        (s = (i = _[a]) == null ? void 0 : i.snapshot) == null || s.restore(r);
      });
  }
  function Le() {
    ve($), Ve(Ke, H), xe($), Ve(ze, Q);
  }
  async function re(
    e,
    {
      noScroll: t = !1,
      replaceState: r = !1,
      keepFocus: a = !1,
      state: i = {},
      invalidateAll: s = !1,
    },
    u,
    d
  ) {
    return (
      typeof e == "string" && (e = new URL(e, Ne(document))),
      ce({
        url: e,
        scroll: t ? ee() : null,
        keepfocus: a,
        redirect_chain: u,
        details: { state: i, replaceState: r },
        nav_token: d,
        accepted: () => {
          s && (J = !0);
        },
        blocked: () => {},
        type: "goto",
      })
    );
  }
  async function Ae(e) {
    return (
      (v = {
        id: e.id,
        promise: he(e).then(
          (t) => (t.type === "loaded" && t.state.error && (v = null), t)
        ),
      }),
      v.promise
    );
  }
  async function oe(...e) {
    const r = l
      .filter((a) => e.some((i) => a.exec(i)))
      .map((a) =>
        Promise.all(
          [...a.layouts, a.leaf].map((i) => (i == null ? void 0 : i[1]()))
        )
      );
    await Promise.all(r);
  }
  function Pe(e) {
    var a;
    m = e.state;
    const t = document.querySelector("style[data-sveltekit]");
    t && t.remove(),
      (V = e.props.page),
      (M = new n.root({
        target: o,
        props: { ...e.props, stores: F, components: _ },
        hydrate: !0,
      })),
      Re($);
    const r = {
      from: null,
      to: {
        params: m.params,
        route: { id: ((a = m.route) == null ? void 0 : a.id) ?? null },
        url: new URL(location.href),
      },
      willUnload: !1,
      type: "enter",
    };
    S.after_navigate.forEach((i) => i(r)), (j = !0);
  }
  async function Y({
    url: e,
    params: t,
    branch: r,
    status: a,
    error: i,
    route: s,
    form: u,
  }) {
    let d = "never";
    for (const h of r)
      (h == null ? void 0 : h.slash) !== void 0 && (d = h.slash);
    (e.pathname = Ze(e.pathname, d)), (e.search = e.search);
    const w = {
      type: "loaded",
      state: { url: e, params: t, branch: r, error: i, route: s },
      props: { constructors: yt(r).map((h) => h.node.component) },
    };
    u !== void 0 && (w.props.form = u);
    let p = {},
      k = !V,
      x = 0;
    for (let h = 0; h < Math.max(r.length, m.branch.length); h += 1) {
      const f = r[h],
        U = m.branch[h];
      (f == null ? void 0 : f.data) !== (U == null ? void 0 : U.data) &&
        (k = !0),
        f &&
          ((p = { ...p, ...f.data }),
          k && (w.props[`data_${x}`] = p),
          (x += 1));
    }
    return (
      (!m.url ||
        e.href !== m.url.href ||
        m.error !== i ||
        (u !== void 0 && u !== V.form) ||
        k) &&
        (w.props.page = {
          error: i,
          params: t,
          route: { id: (s == null ? void 0 : s.id) ?? null },
          status: a,
          url: new URL(e),
          form: u ?? null,
          data: k ? p : V.data,
        }),
      w
    );
  }
  async function de({
    loader: e,
    parent: t,
    url: r,
    params: a,
    route: i,
    server_data_node: s,
  }) {
    var p, k, x;
    let u = null;
    const d = {
        dependencies: new Set(),
        params: new Set(),
        parent: !1,
        route: !1,
        url: !1,
      },
      w = await e();
    if ((p = w.universal) != null && p.load) {
      let A = function (...f) {
        for (const U of f) {
          const { href: O } = new URL(U, r);
          d.dependencies.add(O);
        }
      };
      const h = {
        route: {
          get id() {
            return (d.route = !0), i.id;
          },
        },
        params: new Proxy(a, { get: (f, U) => (d.params.add(U), f[U]) }),
        data: (s == null ? void 0 : s.data) ?? null,
        url: nt(r, () => {
          d.url = !0;
        }),
        async fetch(f, U) {
          let O;
          f instanceof Request
            ? ((O = f.url),
              (U = {
                body:
                  f.method === "GET" || f.method === "HEAD"
                    ? void 0
                    : await f.blob(),
                cache: f.cache,
                credentials: f.credentials,
                headers: f.headers,
                integrity: f.integrity,
                keepalive: f.keepalive,
                method: f.method,
                mode: f.mode,
                redirect: f.redirect,
                referrer: f.referrer,
                referrerPolicy: f.referrerPolicy,
                signal: f.signal,
                ...U,
              }))
            : (O = f);
          const T = new URL(O, r);
          return (
            A(T.href),
            T.origin === r.origin && (O = T.href.slice(r.origin.length)),
            j ? ct(O, T.href, U) : st(O, U)
          );
        },
        setHeaders: () => {},
        depends: A,
        parent() {
          return (d.parent = !0), t();
        },
      };
      (u = (await w.universal.load.call(null, h)) ?? null),
        (u = u ? await mt(u) : null);
    }
    return {
      node: w,
      loader: e,
      server: s,
      universal:
        (k = w.universal) != null && k.load
          ? { type: "data", data: u, uses: d }
          : null,
      data: u ?? (s == null ? void 0 : s.data) ?? null,
      slash:
        ((x = w.universal) == null ? void 0 : x.trailingSlash) ??
        (s == null ? void 0 : s.slash),
    };
  }
  function Ue(e, t, r, a, i) {
    if (J) return !0;
    if (!a) return !1;
    if ((a.parent && e) || (a.route && t) || (a.url && r)) return !0;
    for (const s of a.params) if (i[s] !== m.params[s]) return !0;
    for (const s of a.dependencies) if (E.some((u) => u(new URL(s)))) return !0;
    return !1;
  }
  function pe(e, t) {
    return (e == null ? void 0 : e.type) === "data"
      ? e
      : (e == null ? void 0 : e.type) === "skip"
      ? t ?? null
      : null;
  }
  async function he({ id: e, invalidating: t, url: r, params: a, route: i }) {
    if ((v == null ? void 0 : v.id) === e) return v.promise;
    const { errors: s, layouts: u, leaf: d } = i,
      w = [...u, d];
    s.forEach((b) => (b == null ? void 0 : b().catch(() => {}))),
      w.forEach((b) => (b == null ? void 0 : b[1]().catch(() => {})));
    let p = null;
    const k = m.url ? e !== m.url.pathname + m.url.search : !1,
      x = m.route ? i.id !== m.route.id : !1;
    let A = !1;
    const h = w.map((b, L) => {
      var K;
      const R = m.branch[L],
        C =
          !!(b != null && b[0]) &&
          ((R == null ? void 0 : R.loader) !== b[1] ||
            Ue(A, x, k, (K = R.server) == null ? void 0 : K.uses, a));
      return C && (A = !0), C;
    });
    if (h.some(Boolean)) {
      try {
        p = await Je(r, h);
      } catch (b) {
        return ie({
          status: b instanceof te ? b.status : 500,
          error: await Z(b, { url: r, params: a, route: { id: i.id } }),
          url: r,
          route: i,
        });
      }
      if (p.type === "redirect") return p;
    }
    const f = p == null ? void 0 : p.nodes;
    let U = !1;
    const O = w.map(async (b, L) => {
      var me;
      if (!b) return;
      const R = m.branch[L],
        C = f == null ? void 0 : f[L];
      if (
        (!C || C.type === "skip") &&
        b[1] === (R == null ? void 0 : R.loader) &&
        !Ue(U, x, k, (me = R.universal) == null ? void 0 : me.uses, a)
      )
        return R;
      if (((U = !0), (C == null ? void 0 : C.type) === "error")) throw C;
      return de({
        loader: b[1],
        url: r,
        params: a,
        route: i,
        parent: async () => {
          var je;
          const Ce = {};
          for (let ge = 0; ge < L; ge += 1)
            Object.assign(Ce, (je = await O[ge]) == null ? void 0 : je.data);
          return Ce;
        },
        server_data_node: pe(
          C === void 0 && b[0] ? { type: "skip" } : C ?? null,
          b[0] ? (R == null ? void 0 : R.server) : void 0
        ),
      });
    });
    for (const b of O) b.catch(() => {});
    const T = [];
    for (let b = 0; b < w.length; b += 1)
      if (w[b])
        try {
          T.push(await O[b]);
        } catch (L) {
          if (L instanceof Fe)
            return { type: "redirect", location: L.location };
          let R = 500,
            C;
          if (f != null && f.includes(L)) (R = L.status ?? R), (C = L.error);
          else if (L instanceof te) (R = L.status), (C = L.body);
          else {
            if (await F.updated.check()) return await G(r);
            C = await Z(L, { params: a, url: r, route: { id: i.id } });
          }
          const K = await Ie(b, T, s);
          return K
            ? await Y({
                url: r,
                params: a,
                branch: T.slice(0, K.idx).concat(K.node),
                status: R,
                error: C,
                route: i,
              })
            : await $e(r, { id: i.id }, C, R);
        }
      else T.push(void 0);
    return await Y({
      url: r,
      params: a,
      branch: T,
      status: 200,
      error: null,
      route: i,
      form: t ? void 0 : null,
    });
  }
  async function Ie(e, t, r) {
    for (; e--; )
      if (r[e]) {
        let a = e;
        for (; !t[a]; ) a -= 1;
        try {
          return {
            idx: a + 1,
            node: {
              node: await r[e](),
              loader: r[e],
              data: {},
              server: null,
              universal: null,
            },
          };
        } catch {
          continue;
        }
      }
  }
  async function ie({ status: e, error: t, url: r, route: a }) {
    const i = {};
    let s = null;
    if (n.server_loads[0] === 0)
      try {
        const p = await Je(r, [!0]);
        if (p.type !== "data" || (p.nodes[0] && p.nodes[0].type !== "data"))
          throw 0;
        s = p.nodes[0] ?? null;
      } catch {
        (r.origin !== location.origin ||
          r.pathname !== location.pathname ||
          N) &&
          (await G(r));
      }
    const d = await de({
        loader: c,
        url: r,
        params: i,
        route: a,
        parent: () => Promise.resolve({}),
        server_data_node: pe(s),
      }),
      w = {
        node: await g(),
        loader: g,
        universal: null,
        server: null,
        data: null,
      };
    return await Y({
      url: r,
      params: i,
      branch: [d, w],
      status: e,
      error: t,
      route: null,
    });
  }
  function X(e, t) {
    if (we(e, z)) return;
    const r = se(e);
    for (const a of l) {
      const i = a.exec(r);
      if (i)
        return {
          id: e.pathname + e.search,
          invalidating: t,
          route: a,
          params: et(i),
          url: e,
        };
    }
  }
  function se(e) {
    return Qe(e.pathname.slice(z.length) || "/");
  }
  function Oe({ url: e, type: t, intent: r, delta: a }) {
    var d, w;
    let i = !1;
    const s = {
      from: {
        params: m.params,
        route: { id: ((d = m.route) == null ? void 0 : d.id) ?? null },
        url: m.url,
      },
      to: {
        params: (r == null ? void 0 : r.params) ?? null,
        route: {
          id:
            ((w = r == null ? void 0 : r.route) == null ? void 0 : w.id) ??
            null,
        },
        url: e,
      },
      willUnload: !r,
      type: t,
    };
    a !== void 0 && (s.delta = a);
    const u = {
      ...s,
      cancel: () => {
        i = !0;
      },
    };
    return P || S.before_navigate.forEach((p) => p(u)), i ? null : s;
  }
  async function ce({
    url: e,
    scroll: t,
    keepfocus: r,
    redirect_chain: a,
    details: i,
    type: s,
    delta: u,
    nav_token: d = {},
    accepted: w,
    blocked: p,
  }) {
    var O, T, b;
    const k = X(e, !1),
      x = Oe({ url: e, type: s, delta: u, intent: k });
    if (!x) {
      p();
      return;
    }
    const A = $;
    w(), (P = !0), j && F.navigating.set(x), (ae = d);
    let h = k && (await he(k));
    if (!h) {
      if (we(e, z)) return await G(e);
      h = await $e(
        e,
        { id: null },
        await Z(new Error(`Not found: ${e.pathname}`), {
          url: e,
          params: {},
          route: { id: null },
        }),
        404
      );
    }
    if (((e = (k == null ? void 0 : k.url) || e), ae !== d)) return !1;
    if (h.type === "redirect")
      if (a.length > 10 || a.includes(e.pathname))
        h = await ie({
          status: 500,
          error: await Z(new Error("Redirect loop"), {
            url: e,
            params: {},
            route: { id: null },
          }),
          url: e,
          route: { id: null },
        });
      else
        return re(new URL(h.location, e).href, {}, [...a, e.pathname], d), !1;
    else
      ((O = h.props.page) == null ? void 0 : O.status) >= 400 &&
        (await F.updated.check()) &&
        (await G(e));
    if (
      ((E.length = 0),
      (J = !1),
      (I = !0),
      ve(A),
      xe(A),
      (T = h.props.page) != null &&
        T.url &&
        h.props.page.url.pathname !== e.pathname &&
        (e.pathname = (b = h.props.page) == null ? void 0 : b.url.pathname),
      i)
    ) {
      const L = i.replaceState ? 0 : 1;
      if (
        ((i.state[q] = $ += L),
        history[i.replaceState ? "replaceState" : "pushState"](i.state, "", e),
        !i.replaceState)
      ) {
        let R = $ + 1;
        for (; Q[R] || H[R]; ) delete Q[R], delete H[R], (R += 1);
      }
    }
    (v = null),
      j
        ? ((m = h.state),
          h.props.page && (h.props.page.url = e),
          M.$set(h.props))
        : Pe(h);
    const { activeElement: f } = document;
    if ((await ye(), D)) {
      const L =
        e.hash && document.getElementById(decodeURIComponent(e.hash.slice(1)));
      t ? scrollTo(t.x, t.y) : L ? L.scrollIntoView() : scrollTo(0, 0);
    }
    const U =
      document.activeElement !== f && document.activeElement !== document.body;
    !r && !U && Se(),
      (D = !0),
      h.props.page && (V = h.props.page),
      (P = !1),
      s === "popstate" && Re($),
      S.after_navigate.forEach((L) => L(x)),
      F.navigating.set(null),
      (I = !1);
  }
  async function $e(e, t, r, a) {
    return e.origin === location.origin &&
      e.pathname === location.pathname &&
      !N
      ? await ie({ status: a, error: r, url: e, route: t })
      : await G(e);
  }
  function G(e) {
    return (location.href = e.href), new Promise(() => {});
  }
  function We() {
    let e;
    y.addEventListener("mousemove", (s) => {
      const u = s.target;
      clearTimeout(e),
        (e = setTimeout(() => {
          a(u, 2);
        }, 20));
    });
    function t(s) {
      a(s.composedPath()[0], 1);
    }
    y.addEventListener("mousedown", t),
      y.addEventListener("touchstart", t, { passive: !0 });
    const r = new IntersectionObserver(
      (s) => {
        for (const u of s)
          u.isIntersecting &&
            (oe(se(new URL(u.target.href))), r.unobserve(u.target));
      },
      { threshold: 0 }
    );
    function a(s, u) {
      const d = qe(s, y);
      if (!d) return;
      const { url: w, external: p, download: k } = _e(d, z);
      if (p || k) return;
      const x = le(d);
      if (!x.reload)
        if (u <= x.preload_data) {
          const A = X(w, !1);
          A && Ae(A);
        } else u <= x.preload_code && oe(se(w));
    }
    function i() {
      r.disconnect();
      for (const s of y.querySelectorAll("a")) {
        const { url: u, external: d, download: w } = _e(s, z);
        if (d || w) continue;
        const p = le(s);
        p.reload ||
          (p.preload_code === Me.viewport && r.observe(s),
          p.preload_code === Me.eager && oe(se(u)));
      }
    }
    S.after_navigate.push(i), i();
  }
  function Z(e, t) {
    return e instanceof te
      ? e.body
      : n.hooks.handleError({ error: e, event: t }) ?? {
          message: t.route.id != null ? "Internal Error" : "Not Found",
        };
  }
  return {
    after_navigate: (e) => {
      Te(
        () => (
          S.after_navigate.push(e),
          () => {
            const t = S.after_navigate.indexOf(e);
            S.after_navigate.splice(t, 1);
          }
        )
      );
    },
    before_navigate: (e) => {
      Te(
        () => (
          S.before_navigate.push(e),
          () => {
            const t = S.before_navigate.indexOf(e);
            S.before_navigate.splice(t, 1);
          }
        )
      );
    },
    disable_scroll_handling: () => {
      (I || !j) && (D = !1);
    },
    goto: (e, t = {}) => re(e, t, []),
    invalidate: (e) => {
      if (typeof e == "function") E.push(e);
      else {
        const { href: t } = new URL(e, location.href);
        E.push((r) => r.href === t);
      }
      return ke();
    },
    invalidate_all: () => ((J = !0), ke()),
    preload_data: async (e) => {
      const t = new URL(e, Ne(document)),
        r = X(t, !1);
      if (!r)
        throw new Error(
          `Attempted to preload a URL that does not belong to this app: ${t}`
        );
      await Ae(r);
    },
    preload_code: oe,
    apply_action: async (e) => {
      if (e.type === "error") {
        const t = new URL(location.href),
          { branch: r, route: a } = m;
        if (!a) return;
        const i = await Ie(m.branch.length, r, a.errors);
        if (i) {
          const s = await Y({
            url: t,
            params: m.params,
            branch: r.slice(0, i.idx).concat(i.node),
            status: e.status ?? 500,
            error: e.error,
            route: a,
          });
          (m = s.state), M.$set(s.props), ye().then(Se);
        }
      } else
        e.type === "redirect"
          ? re(e.location, { invalidateAll: !0 }, [])
          : (M.$set({
              form: null,
              page: { ...V, form: e.data, status: e.status },
            }),
            await ye(),
            M.$set({ form: e.data }),
            e.type === "success" && Se());
    },
    _start_router: () => {
      var e;
      (history.scrollRestoration = "manual"),
        addEventListener("beforeunload", (t) => {
          var a;
          let r = !1;
          if ((Le(), !P)) {
            const i = {
              from: {
                params: m.params,
                route: { id: ((a = m.route) == null ? void 0 : a.id) ?? null },
                url: m.url,
              },
              to: null,
              willUnload: !0,
              type: "leave",
              cancel: () => (r = !0),
            };
            S.before_navigate.forEach((s) => s(i));
          }
          r
            ? (t.preventDefault(), (t.returnValue = ""))
            : (history.scrollRestoration = "auto");
        }),
        addEventListener("visibilitychange", () => {
          document.visibilityState === "hidden" && Le();
        }),
        ((e = navigator.connection) != null && e.saveData) || We(),
        y.addEventListener("click", (t) => {
          var x;
          if (
            t.button ||
            t.which !== 1 ||
            t.metaKey ||
            t.ctrlKey ||
            t.shiftKey ||
            t.altKey ||
            t.defaultPrevented
          )
            return;
          const r = qe(t.composedPath()[0], y);
          if (!r) return;
          const { url: a, external: i, target: s, download: u } = _e(r, z);
          if (!a) return;
          if (s === "_parent" || s === "_top") {
            if (window.parent !== window) return;
          } else if (s && s !== "_self") return;
          const d = le(r);
          if (
            (!(r instanceof SVGAElement) &&
              a.protocol !== location.protocol &&
              !(a.protocol === "https:" || a.protocol === "http:")) ||
            u
          )
            return;
          if (i || d.reload) {
            Oe({ url: a, type: "link" }) ? (P = !0) : t.preventDefault();
            return;
          }
          const [p, k] = a.href.split("#");
          if (k !== void 0 && p === location.href.split("#")[0]) {
            if (m.url.hash === a.hash) {
              t.preventDefault(),
                (x = r.ownerDocument.getElementById(k)) == null ||
                  x.scrollIntoView();
              return;
            }
            if (
              ((B = !0),
              ve($),
              (m.url = a),
              F.page.set({ ...V, url: a }),
              F.page.notify(),
              !d.replace_state)
            )
              return;
            (B = !1), t.preventDefault();
          }
          ce({
            url: a,
            scroll: d.noscroll ? ee() : null,
            keepfocus: d.keep_focus ?? !1,
            redirect_chain: [],
            details: {
              state: {},
              replaceState: d.replace_state ?? a.href === location.href,
            },
            accepted: () => t.preventDefault(),
            blocked: () => t.preventDefault(),
            type: "link",
          });
        }),
        y.addEventListener("submit", (t) => {
          if (t.defaultPrevented) return;
          const r = HTMLFormElement.prototype.cloneNode.call(t.target),
            a = t.submitter;
          if (((a == null ? void 0 : a.formMethod) || r.method) !== "get")
            return;
          const s = new URL(
            ((a == null ? void 0 : a.hasAttribute("formaction")) &&
              (a == null ? void 0 : a.formAction)) ||
              r.action
          );
          if (we(s, z)) return;
          const u = t.target,
            { keep_focus: d, noscroll: w, reload: p, replace_state: k } = le(u);
          if (p) return;
          t.preventDefault(), t.stopPropagation();
          const x = new FormData(u),
            A = a == null ? void 0 : a.getAttribute("name");
          A &&
            x.append(A, (a == null ? void 0 : a.getAttribute("value")) ?? ""),
            (s.search = new URLSearchParams(x).toString()),
            ce({
              url: s,
              scroll: w ? ee() : null,
              keepfocus: d ?? !1,
              redirect_chain: [],
              details: {
                state: {},
                replaceState: k ?? s.href === location.href,
              },
              nav_token: {},
              accepted: () => {},
              blocked: () => {},
              type: "form",
            });
        }),
        addEventListener("popstate", async (t) => {
          var r;
          if ((r = t.state) != null && r[q]) {
            if (t.state[q] === $) return;
            const a = H[t.state[q]];
            if (m.url.href.split("#")[0] === location.href.split("#")[0]) {
              (H[$] = ee()), ($ = t.state[q]), scrollTo(a.x, a.y);
              return;
            }
            const i = t.state[q] - $;
            await ce({
              url: new URL(location.href),
              scroll: a,
              keepfocus: !1,
              redirect_chain: [],
              details: null,
              accepted: () => {
                $ = t.state[q];
              },
              blocked: () => {
                history.go(-i);
              },
              type: "popstate",
              delta: i,
            });
          }
        }),
        addEventListener("hashchange", () => {
          B &&
            ((B = !1),
            history.replaceState(
              { ...history.state, [q]: ++$ },
              "",
              location.href
            ));
        });
      for (const t of document.querySelectorAll("link"))
        t.rel === "icon" && (t.href = t.href);
      addEventListener("pageshow", (t) => {
        t.persisted && F.navigating.set(null);
      });
    },
    _hydrate: async ({
      status: e = 200,
      error: t,
      node_ids: r,
      params: a,
      route: i,
      data: s,
      form: u,
    }) => {
      N = !0;
      const d = new URL(location.href);
      ({ params: a = {}, route: i = { id: null } } = X(d, !1) || {});
      let w;
      try {
        const p = r.map(async (A, h) => {
            const f = s[h];
            return (
              f != null && f.uses && (f.uses = Ge(f.uses)),
              de({
                loader: n.nodes[A],
                url: d,
                params: a,
                route: i,
                parent: async () => {
                  const U = {};
                  for (let O = 0; O < h; O += 1)
                    Object.assign(U, (await p[O]).data);
                  return U;
                },
                server_data_node: pe(f),
              })
            );
          }),
          k = await Promise.all(p),
          x = l.find(({ id: A }) => A === i.id);
        if (x) {
          const A = x.layouts;
          for (let h = 0; h < A.length; h++) A[h] || k.splice(h, 0, void 0);
        }
        w = await Y({
          url: d,
          params: a,
          branch: k,
          status: e,
          error: t,
          form: u,
          route: x ?? null,
        });
      } catch (p) {
        if (p instanceof Fe) {
          await G(new URL(p.location, location.href));
          return;
        }
        w = await ie({
          status: p instanceof te ? p.status : 500,
          error: await Z(p, { url: d, params: a, route: i }),
          url: d,
          route: i,
        });
      }
      Pe(w);
    },
  };
}
async function Je(n, o) {
  const l = new URL(n);
  (l.pathname = ot(n.pathname)),
    l.searchParams.append(_t, o.map((g) => (g ? "1" : "0")).join(""));
  const c = await fe(l.href);
  if (!c.ok) throw new te(c.status, await c.json());
  return new Promise(async (g) => {
    var m;
    const y = new Map(),
      E = c.body.getReader(),
      _ = new TextDecoder();
    function v(N) {
      return Xe(N, {
        Promise: (j) =>
          new Promise((D, I) => {
            y.set(j, { fulfil: D, reject: I });
          }),
      });
    }
    let S = "";
    for (;;) {
      const { done: N, value: j } = await E.read();
      if (N && !S) break;
      for (
        S +=
          !j && S
            ? `
`
            : _.decode(j);
        ;

      ) {
        const D = S.indexOf(`
`);
        if (D === -1) break;
        const I = JSON.parse(S.slice(0, D));
        if (((S = S.slice(D + 1)), I.type === "redirect")) return g(I);
        if (I.type === "data")
          (m = I.nodes) == null ||
            m.forEach((P) => {
              (P == null ? void 0 : P.type) === "data" &&
                ((P.uses = Ge(P.uses)), (P.data = v(P.data)));
            }),
            g(I);
        else if (I.type === "chunk") {
          const { id: P, data: B, error: J } = I,
            M = y.get(P);
          y.delete(P), J ? M.reject(v(J)) : M.fulfil(v(B));
        }
      }
    }
  });
}
function Ge(n) {
  return {
    dependencies: new Set((n == null ? void 0 : n.dependencies) ?? []),
    params: new Set((n == null ? void 0 : n.params) ?? []),
    parent: !!(n != null && n.parent),
    route: !!(n != null && n.route),
    url: !!(n != null && n.url),
  };
}
function Se() {
  const n = document.querySelector("[autofocus]");
  if (n) n.focus();
  else {
    const o = document.body,
      l = o.getAttribute("tabindex");
    (o.tabIndex = -1),
      o.focus({ preventScroll: !0, focusVisible: !1 }),
      l !== null
        ? o.setAttribute("tabindex", l)
        : o.removeAttribute("tabindex");
    const c = getSelection();
    if (c && c.type !== "None") {
      const g = [];
      for (let y = 0; y < c.rangeCount; y += 1) g.push(c.getRangeAt(y));
      setTimeout(() => {
        if (c.rangeCount === g.length) {
          for (let y = 0; y < c.rangeCount; y += 1) {
            const E = g[y],
              _ = c.getRangeAt(y);
            if (
              E.commonAncestorContainer !== _.commonAncestorContainer ||
              E.startContainer !== _.startContainer ||
              E.endContainer !== _.endContainer ||
              E.startOffset !== _.startOffset ||
              E.endOffset !== _.endOffset
            )
              return;
          }
          c.removeAllRanges();
        }
      });
    }
  }
}
async function Et(n, o, l) {
  const c = wt(n, o);
  Ye({ client: c }),
    l ? await c._hydrate(l) : c.goto(location.href, { replaceState: !0 }),
    c._start_router();
}
export { Et as start };
//# sourceMappingURL=start.9b96536a.js.map
