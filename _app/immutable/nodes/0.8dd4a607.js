import { P as cr, a as hr } from "../chunks/public.4926c498.js";
import { g as ur, c as dr } from "../chunks/_commonjsHelpers.3bb56e27.js";
import {
  n as Mt,
  l as Ht,
  o as fr,
  p as pr,
  S as lt,
  i as ct,
  g as Ce,
  b as G,
  e as Re,
  t as q,
  c as we,
  a as Ue,
  m as Te,
  d as Se,
  h as vr,
  j as _r,
} from "../chunks/index.08749574.js";
import { _ as Le } from "../chunks/preload-helper.6d58dae5.js";
import {
  n as ne,
  V as ht,
  M as yr,
  I as et,
  s as ut,
  e as M,
  a as ce,
  c as H,
  f as he,
  d as x,
  b as ue,
  i as P,
  a1 as gt,
  k as Q,
  j as B,
  A as Ie,
  D as Jt,
  m as qt,
  v as zt,
  Y as mr,
  t as gr,
  g as br,
  l as wr,
  aj as bt,
  r as De,
  E as Tr,
  o as Sr,
  N as wt,
  O as Tt,
  h as Or,
  w as Je,
  P as kr,
  u as Er,
  p as $r,
  q as jr,
} from "../chunks/scheduler.b44937bc.js";
import { c as Ar } from "../chunks/navigation.348d0091.js";
import "../chunks/singletons.9c14e83c.js";
import { e as St, u as xr, f as Pr } from "../chunks/each.3cf95a54.js";
import { c as Cr, a as Rr, f as Ir } from "../chunks/index.e14db2ec.js";
import { t as tt } from "../chunks/toastStore.b0ed32a8.js";
import { g as Dr, a as Ur } from "../chunks/spread.5cc747ed.js";
import { w as Lr } from "../chunks/index.6e4317f1.js";
import { I as Nr } from "../chunks/Icon.bcad08c4.js";
import { t as Ot } from "../chunks/langUtils.50e57082.js";
(function () {
  try {
    var i =
        typeof window < "u"
          ? window
          : typeof me < "u"
          ? me
          : typeof self < "u"
          ? self
          : {},
      e = new Error().stack;
    e &&
      ((i._sentryDebugIds = i._sentryDebugIds || {}),
      (i._sentryDebugIds[e] = "3d1086b4-4959-41b7-a607-5592d4a0a6a5"),
      (i._sentryDebugIdIdentifier =
        "sentry-dbid-3d1086b4-4959-41b7-a607-5592d4a0a6a5"));
  } catch {}
})();
function Fr(i, e) {
  for (var t = 0; t < e.length; t++) {
    const r = e[t];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const n in r)
        if (n !== "default" && !(n in i)) {
          const s = Object.getOwnPropertyDescriptor(r, n);
          s &&
            Object.defineProperty(
              i,
              n,
              s.get ? s : { enumerable: !0, get: () => r[n] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(i, Symbol.toStringTag, { value: "Module" })
  );
}
function Br(i, e, t, r) {
  if (!e) return ne;
  const n = i.getBoundingClientRect();
  if (
    e.left === n.left &&
    e.right === n.right &&
    e.top === n.top &&
    e.bottom === n.bottom
  )
    return ne;
  const {
    delay: s = 0,
    duration: o = 300,
    easing: a = ht,
    start: l = Mt() + s,
    end: c = l + o,
    tick: h = ne,
    css: u,
  } = t(i, { from: e, to: n }, r);
  let f = !0,
    p = !1,
    y;
  function v() {
    u && (y = fr(i, 0, 1, o, s, a, u)), s || (p = !0);
  }
  function _() {
    u && pr(i, y), (f = !1);
  }
  return (
    Ht((g) => {
      if ((!p && g >= l && (p = !0), p && g >= c && (h(1, 0), _()), !f))
        return !1;
      if (p) {
        const b = g - l,
          O = 0 + 1 * a(b / o);
        h(O, 1 - O);
      }
      return !0;
    }),
    v(),
    h(0, 1),
    _
  );
}
function Mr(i) {
  const e = getComputedStyle(i);
  if (e.position !== "absolute" && e.position !== "fixed") {
    const { width: t, height: r } = e,
      n = i.getBoundingClientRect();
    (i.style.position = "absolute"),
      (i.style.width = t),
      (i.style.height = r),
      Gt(i, n);
  }
}
function Gt(i, e) {
  const t = i.getBoundingClientRect();
  if (e.left !== t.left || e.top !== t.top) {
    const r = getComputedStyle(i),
      n = r.transform === "none" ? "" : r.transform;
    i.style.transform = `${n} translate(${e.left - t.left}px, ${
      e.top - t.top
    }px)`;
  }
}
new TextEncoder();
const Hr = new TextDecoder(),
  Jr = (i) => {
    const e = atob(i),
      t = new Uint8Array(e.length);
    for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
    return t;
  },
  qr = (i) => {
    let e = i;
    e instanceof Uint8Array && (e = Hr.decode(e)),
      (e = e.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, ""));
    try {
      return Jr(e);
    } catch {
      throw new TypeError("The input to be decoded is not correctly encoded.");
    }
  },
  zr = qr;
var Gr =
  (globalThis && globalThis.__awaiter) ||
  function (i, e, t, r) {
    function n(s) {
      return s instanceof t
        ? s
        : new t(function (o) {
            o(s);
          });
    }
    return new (t || (t = Promise))(function (s, o) {
      function a(h) {
        try {
          c(r.next(h));
        } catch (u) {
          o(u);
        }
      }
      function l(h) {
        try {
          c(r.throw(h));
        } catch (u) {
          o(u);
        }
      }
      function c(h) {
        h.done ? s(h.value) : n(h.value).then(a, l);
      }
      c((r = r.apply(i, e || [])).next());
    });
  };
const Kr = (i) => {
  let e;
  return (
    i
      ? (e = i)
      : typeof fetch > "u"
      ? (e = (...t) =>
          Gr(void 0, void 0, void 0, function* () {
            return yield (yield Le(
              () => Promise.resolve().then(() => Ne),
              void 0,
              import.meta.url
            )).fetch(...t);
          }))
      : (e = fetch),
    (...t) => e(...t)
  );
};
class dt extends Error {
  constructor(e, t = "FunctionsError", r) {
    super(e), (super.name = t), (this.context = r);
  }
}
class Vr extends dt {
  constructor(e) {
    super(
      "Failed to send a request to the Edge Function",
      "FunctionsFetchError",
      e
    );
  }
}
class Wr extends dt {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class Qr extends dt {
  constructor(e) {
    super(
      "Edge Function returned a non-2xx status code",
      "FunctionsHttpError",
      e
    );
  }
}
var Xr =
  (globalThis && globalThis.__awaiter) ||
  function (i, e, t, r) {
    function n(s) {
      return s instanceof t
        ? s
        : new t(function (o) {
            o(s);
          });
    }
    return new (t || (t = Promise))(function (s, o) {
      function a(h) {
        try {
          c(r.next(h));
        } catch (u) {
          o(u);
        }
      }
      function l(h) {
        try {
          c(r.throw(h));
        } catch (u) {
          o(u);
        }
      }
      function c(h) {
        h.done ? s(h.value) : n(h.value).then(a, l);
      }
      c((r = r.apply(i, e || [])).next());
    });
  };
class Yr {
  constructor(e, { headers: t = {}, customFetch: r } = {}) {
    (this.url = e), (this.headers = t), (this.fetch = Kr(r));
  }
  setAuth(e) {
    this.headers.Authorization = `Bearer ${e}`;
  }
  invoke(e, t = {}) {
    var r;
    return Xr(this, void 0, void 0, function* () {
      try {
        const { headers: n, method: s, body: o } = t;
        let a = {},
          l;
        o &&
          ((n && !Object.prototype.hasOwnProperty.call(n, "Content-Type")) ||
            !n) &&
          ((typeof Blob < "u" && o instanceof Blob) || o instanceof ArrayBuffer
            ? ((a["Content-Type"] = "application/octet-stream"), (l = o))
            : typeof o == "string"
            ? ((a["Content-Type"] = "text/plain"), (l = o))
            : typeof FormData < "u" && o instanceof FormData
            ? (l = o)
            : ((a["Content-Type"] = "application/json"),
              (l = JSON.stringify(o))));
        const c = yield this.fetch(`${this.url}/${e}`, {
            method: s || "POST",
            headers: Object.assign(
              Object.assign(Object.assign({}, a), this.headers),
              n
            ),
            body: l,
          }).catch((p) => {
            throw new Vr(p);
          }),
          h = c.headers.get("x-relay-error");
        if (h && h === "true") throw new Wr(c);
        if (!c.ok) throw new Qr(c);
        let u = (
            (r = c.headers.get("Content-Type")) !== null && r !== void 0
              ? r
              : "text/plain"
          )
            .split(";")[0]
            .trim(),
          f;
        return (
          u === "application/json"
            ? (f = yield c.json())
            : u === "application/octet-stream"
            ? (f = yield c.blob())
            : u === "multipart/form-data"
            ? (f = yield c.formData())
            : (f = yield c.text()),
          { data: f, error: null }
        );
      } catch (n) {
        return { data: null, error: n };
      }
    });
  }
}
var rt = { exports: {} };
(function (i, e) {
  var t = typeof self < "u" ? self : dr,
    r = (function () {
      function s() {
        (this.fetch = !1), (this.DOMException = t.DOMException);
      }
      return (s.prototype = t), new s();
    })();
  (function (s) {
    (function (o) {
      var a = {
        searchParams: "URLSearchParams" in s,
        iterable: "Symbol" in s && "iterator" in Symbol,
        blob:
          "FileReader" in s &&
          "Blob" in s &&
          (function () {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          })(),
        formData: "FormData" in s,
        arrayBuffer: "ArrayBuffer" in s,
      };
      function l(d) {
        return d && DataView.prototype.isPrototypeOf(d);
      }
      if (a.arrayBuffer)
        var c = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          h =
            ArrayBuffer.isView ||
            function (d) {
              return d && c.indexOf(Object.prototype.toString.call(d)) > -1;
            };
      function u(d) {
        if (
          (typeof d != "string" && (d = String(d)),
          /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(d))
        )
          throw new TypeError("Invalid character in header field name");
        return d.toLowerCase();
      }
      function f(d) {
        return typeof d != "string" && (d = String(d)), d;
      }
      function p(d) {
        var m = {
          next: function () {
            var T = d.shift();
            return { done: T === void 0, value: T };
          },
        };
        return (
          a.iterable &&
            (m[Symbol.iterator] = function () {
              return m;
            }),
          m
        );
      }
      function y(d) {
        (this.map = {}),
          d instanceof y
            ? d.forEach(function (m, T) {
                this.append(T, m);
              }, this)
            : Array.isArray(d)
            ? d.forEach(function (m) {
                this.append(m[0], m[1]);
              }, this)
            : d &&
              Object.getOwnPropertyNames(d).forEach(function (m) {
                this.append(m, d[m]);
              }, this);
      }
      (y.prototype.append = function (d, m) {
        (d = u(d)), (m = f(m));
        var T = this.map[d];
        this.map[d] = T ? T + ", " + m : m;
      }),
        (y.prototype.delete = function (d) {
          delete this.map[u(d)];
        }),
        (y.prototype.get = function (d) {
          return (d = u(d)), this.has(d) ? this.map[d] : null;
        }),
        (y.prototype.has = function (d) {
          return this.map.hasOwnProperty(u(d));
        }),
        (y.prototype.set = function (d, m) {
          this.map[u(d)] = f(m);
        }),
        (y.prototype.forEach = function (d, m) {
          for (var T in this.map)
            this.map.hasOwnProperty(T) && d.call(m, this.map[T], T, this);
        }),
        (y.prototype.keys = function () {
          var d = [];
          return (
            this.forEach(function (m, T) {
              d.push(T);
            }),
            p(d)
          );
        }),
        (y.prototype.values = function () {
          var d = [];
          return (
            this.forEach(function (m) {
              d.push(m);
            }),
            p(d)
          );
        }),
        (y.prototype.entries = function () {
          var d = [];
          return (
            this.forEach(function (m, T) {
              d.push([T, m]);
            }),
            p(d)
          );
        }),
        a.iterable && (y.prototype[Symbol.iterator] = y.prototype.entries);
      function v(d) {
        if (d.bodyUsed) return Promise.reject(new TypeError("Already read"));
        d.bodyUsed = !0;
      }
      function _(d) {
        return new Promise(function (m, T) {
          (d.onload = function () {
            m(d.result);
          }),
            (d.onerror = function () {
              T(d.error);
            });
        });
      }
      function g(d) {
        var m = new FileReader(),
          T = _(m);
        return m.readAsArrayBuffer(d), T;
      }
      function b(d) {
        var m = new FileReader(),
          T = _(m);
        return m.readAsText(d), T;
      }
      function O(d) {
        for (
          var m = new Uint8Array(d), T = new Array(m.length), I = 0;
          I < m.length;
          I++
        )
          T[I] = String.fromCharCode(m[I]);
        return T.join("");
      }
      function A(d) {
        if (d.slice) return d.slice(0);
        var m = new Uint8Array(d.byteLength);
        return m.set(new Uint8Array(d)), m.buffer;
      }
      function L() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (d) {
            (this._bodyInit = d),
              d
                ? typeof d == "string"
                  ? (this._bodyText = d)
                  : a.blob && Blob.prototype.isPrototypeOf(d)
                  ? (this._bodyBlob = d)
                  : a.formData && FormData.prototype.isPrototypeOf(d)
                  ? (this._bodyFormData = d)
                  : a.searchParams && URLSearchParams.prototype.isPrototypeOf(d)
                  ? (this._bodyText = d.toString())
                  : a.arrayBuffer && a.blob && l(d)
                  ? ((this._bodyArrayBuffer = A(d.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : a.arrayBuffer &&
                    (ArrayBuffer.prototype.isPrototypeOf(d) || h(d))
                  ? (this._bodyArrayBuffer = A(d))
                  : (this._bodyText = d = Object.prototype.toString.call(d))
                : (this._bodyText = ""),
              this.headers.get("content-type") ||
                (typeof d == "string"
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : a.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(d) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          a.blob &&
            ((this.blob = function () {
              var d = v(this);
              if (d) return d;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? v(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(g);
            })),
          (this.text = function () {
            var d = v(this);
            if (d) return d;
            if (this._bodyBlob) return b(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(O(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          a.formData &&
            (this.formData = function () {
              return this.text().then(C);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      var ve = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function U(d) {
        var m = d.toUpperCase();
        return ve.indexOf(m) > -1 ? m : d;
      }
      function S(d, m) {
        m = m || {};
        var T = m.body;
        if (d instanceof S) {
          if (d.bodyUsed) throw new TypeError("Already read");
          (this.url = d.url),
            (this.credentials = d.credentials),
            m.headers || (this.headers = new y(d.headers)),
            (this.method = d.method),
            (this.mode = d.mode),
            (this.signal = d.signal),
            !T && d._bodyInit != null && ((T = d._bodyInit), (d.bodyUsed = !0));
        } else this.url = String(d);
        if (
          ((this.credentials =
            m.credentials || this.credentials || "same-origin"),
          (m.headers || !this.headers) && (this.headers = new y(m.headers)),
          (this.method = U(m.method || this.method || "GET")),
          (this.mode = m.mode || this.mode || null),
          (this.signal = m.signal || this.signal),
          (this.referrer = null),
          (this.method === "GET" || this.method === "HEAD") && T)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(T);
      }
      S.prototype.clone = function () {
        return new S(this, { body: this._bodyInit });
      };
      function C(d) {
        var m = new FormData();
        return (
          d
            .trim()
            .split("&")
            .forEach(function (T) {
              if (T) {
                var I = T.split("="),
                  R = I.shift().replace(/\+/g, " "),
                  $ = I.join("=").replace(/\+/g, " ");
                m.append(decodeURIComponent(R), decodeURIComponent($));
              }
            }),
          m
        );
      }
      function ar(d) {
        var m = new y(),
          T = d.replace(/\r?\n[\t ]+/g, " ");
        return (
          T.split(/\r?\n/).forEach(function (I) {
            var R = I.split(":"),
              $ = R.shift().trim();
            if ($) {
              var ke = R.join(":").trim();
              m.append($, ke);
            }
          }),
          m
        );
      }
      L.call(S.prototype);
      function K(d, m) {
        m || (m = {}),
          (this.type = "default"),
          (this.status = m.status === void 0 ? 200 : m.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = "statusText" in m ? m.statusText : "OK"),
          (this.headers = new y(m.headers)),
          (this.url = m.url || ""),
          this._initBody(d);
      }
      L.call(K.prototype),
        (K.prototype.clone = function () {
          return new K(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new y(this.headers),
            url: this.url,
          });
        }),
        (K.error = function () {
          var d = new K(null, { status: 0, statusText: "" });
          return (d.type = "error"), d;
        });
      var lr = [301, 302, 303, 307, 308];
      (K.redirect = function (d, m) {
        if (lr.indexOf(m) === -1) throw new RangeError("Invalid status code");
        return new K(null, { status: m, headers: { location: d } });
      }),
        (o.DOMException = s.DOMException);
      try {
        new o.DOMException();
      } catch {
        (o.DOMException = function (m, T) {
          (this.message = m), (this.name = T);
          var I = Error(m);
          this.stack = I.stack;
        }),
          (o.DOMException.prototype = Object.create(Error.prototype)),
          (o.DOMException.prototype.constructor = o.DOMException);
      }
      function Me(d, m) {
        return new Promise(function (T, I) {
          var R = new S(d, m);
          if (R.signal && R.signal.aborted)
            return I(new o.DOMException("Aborted", "AbortError"));
          var $ = new XMLHttpRequest();
          function ke() {
            $.abort();
          }
          ($.onload = function () {
            var _e = {
              status: $.status,
              statusText: $.statusText,
              headers: ar($.getAllResponseHeaders() || ""),
            };
            _e.url =
              "responseURL" in $
                ? $.responseURL
                : _e.headers.get("X-Request-URL");
            var He = "response" in $ ? $.response : $.responseText;
            T(new K(He, _e));
          }),
            ($.onerror = function () {
              I(new TypeError("Network request failed"));
            }),
            ($.ontimeout = function () {
              I(new TypeError("Network request failed"));
            }),
            ($.onabort = function () {
              I(new o.DOMException("Aborted", "AbortError"));
            }),
            $.open(R.method, R.url, !0),
            R.credentials === "include"
              ? ($.withCredentials = !0)
              : R.credentials === "omit" && ($.withCredentials = !1),
            "responseType" in $ && a.blob && ($.responseType = "blob"),
            R.headers.forEach(function (_e, He) {
              $.setRequestHeader(He, _e);
            }),
            R.signal &&
              (R.signal.addEventListener("abort", ke),
              ($.onreadystatechange = function () {
                $.readyState === 4 && R.signal.removeEventListener("abort", ke);
              })),
            $.send(typeof R._bodyInit > "u" ? null : R._bodyInit);
        });
      }
      return (
        (Me.polyfill = !0),
        s.fetch ||
          ((s.fetch = Me), (s.Headers = y), (s.Request = S), (s.Response = K)),
        (o.Headers = y),
        (o.Request = S),
        (o.Response = K),
        (o.fetch = Me),
        Object.defineProperty(o, "__esModule", { value: !0 }),
        o
      );
    })({});
  })(r),
    (r.fetch.ponyfill = !0),
    delete r.fetch.polyfill;
  var n = r;
  (e = n.fetch),
    (e.default = n.fetch),
    (e.fetch = n.fetch),
    (e.Headers = n.Headers),
    (e.Request = n.Request),
    (e.Response = n.Response),
    (i.exports = e);
})(rt, rt.exports);
var ft = rt.exports;
const pt = ur(ft),
  Ne = Fr({ __proto__: null, default: pt }, [ft]);
class Zr {
  constructor(e) {
    (this.shouldThrowOnError = !1),
      (this.method = e.method),
      (this.url = e.url),
      (this.headers = e.headers),
      (this.schema = e.schema),
      (this.body = e.body),
      (this.shouldThrowOnError = e.shouldThrowOnError),
      (this.signal = e.signal),
      (this.isMaybeSingle = e.isMaybeSingle),
      e.fetch
        ? (this.fetch = e.fetch)
        : typeof fetch > "u"
        ? (this.fetch = pt)
        : (this.fetch = fetch);
  }
  throwOnError() {
    return (this.shouldThrowOnError = !0), this;
  }
  then(e, t) {
    this.schema === void 0 ||
      (["GET", "HEAD"].includes(this.method)
        ? (this.headers["Accept-Profile"] = this.schema)
        : (this.headers["Content-Profile"] = this.schema)),
      this.method !== "GET" &&
        this.method !== "HEAD" &&
        (this.headers["Content-Type"] = "application/json");
    const r = this.fetch;
    let n = r(this.url.toString(), {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
      signal: this.signal,
    }).then(async (s) => {
      var o, a, l;
      let c = null,
        h = null,
        u = null,
        f = s.status,
        p = s.statusText;
      if (s.ok) {
        if (this.method !== "HEAD") {
          const g = await s.text();
          g === "" ||
            (this.headers.Accept === "text/csv" ||
            (this.headers.Accept &&
              this.headers.Accept.includes("application/vnd.pgrst.plan+text"))
              ? (h = g)
              : (h = JSON.parse(g)));
        }
        const v =
            (o = this.headers.Prefer) === null || o === void 0
              ? void 0
              : o.match(/count=(exact|planned|estimated)/),
          _ =
            (a = s.headers.get("content-range")) === null || a === void 0
              ? void 0
              : a.split("/");
        v && _ && _.length > 1 && (u = parseInt(_[1])),
          this.isMaybeSingle &&
            this.method === "GET" &&
            Array.isArray(h) &&
            (h.length > 1
              ? ((c = {
                  code: "PGRST116",
                  details: `Results contain ${h.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                  hint: null,
                  message:
                    "JSON object requested, multiple (or no) rows returned",
                }),
                (h = null),
                (u = null),
                (f = 406),
                (p = "Not Acceptable"))
              : h.length === 1
              ? (h = h[0])
              : (h = null));
      } else {
        const v = await s.text();
        try {
          (c = JSON.parse(v)),
            Array.isArray(c) &&
              s.status === 404 &&
              ((h = []), (c = null), (f = 200), (p = "OK"));
        } catch {
          s.status === 404 && v === ""
            ? ((f = 204), (p = "No Content"))
            : (c = { message: v });
        }
        if (
          (c &&
            this.isMaybeSingle &&
            !((l = c == null ? void 0 : c.details) === null || l === void 0) &&
            l.includes("Results contain 0 rows") &&
            ((c = null), (f = 200), (p = "OK")),
          c && this.shouldThrowOnError)
        )
          throw c;
      }
      return { error: c, data: h, count: u, status: f, statusText: p };
    });
    return (
      this.shouldThrowOnError ||
        (n = n.catch((s) => {
          var o, a, l;
          return {
            error: {
              message: `${
                (o = s == null ? void 0 : s.name) !== null && o !== void 0
                  ? o
                  : "FetchError"
              }: ${s == null ? void 0 : s.message}`,
              details: `${
                (a = s == null ? void 0 : s.stack) !== null && a !== void 0
                  ? a
                  : ""
              }`,
              hint: "",
              code: `${
                (l = s == null ? void 0 : s.code) !== null && l !== void 0
                  ? l
                  : ""
              }`,
            },
            data: null,
            count: null,
            status: 0,
            statusText: "",
          };
        })),
      n.then(e, t)
    );
  }
}
class ei extends Zr {
  select(e) {
    let t = !1;
    const r = (e ?? "*")
      .split("")
      .map((n) => (/\s/.test(n) && !t ? "" : (n === '"' && (t = !t), n)))
      .join("");
    return (
      this.url.searchParams.set("select", r),
      this.headers.Prefer && (this.headers.Prefer += ","),
      (this.headers.Prefer += "return=representation"),
      this
    );
  }
  order(e, { ascending: t = !0, nullsFirst: r, foreignTable: n } = {}) {
    const s = n ? `${n}.order` : "order",
      o = this.url.searchParams.get(s);
    return (
      this.url.searchParams.set(
        s,
        `${o ? `${o},` : ""}${e}.${t ? "asc" : "desc"}${
          r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"
        }`
      ),
      this
    );
  }
  limit(e, { foreignTable: t } = {}) {
    const r = typeof t > "u" ? "limit" : `${t}.limit`;
    return this.url.searchParams.set(r, `${e}`), this;
  }
  range(e, t, { foreignTable: r } = {}) {
    const n = typeof r > "u" ? "offset" : `${r}.offset`,
      s = typeof r > "u" ? "limit" : `${r}.limit`;
    return (
      this.url.searchParams.set(n, `${e}`),
      this.url.searchParams.set(s, `${t - e + 1}`),
      this
    );
  }
  abortSignal(e) {
    return (this.signal = e), this;
  }
  single() {
    return (this.headers.Accept = "application/vnd.pgrst.object+json"), this;
  }
  maybeSingle() {
    return (
      this.method === "GET"
        ? (this.headers.Accept = "application/json")
        : (this.headers.Accept = "application/vnd.pgrst.object+json"),
      (this.isMaybeSingle = !0),
      this
    );
  }
  csv() {
    return (this.headers.Accept = "text/csv"), this;
  }
  geojson() {
    return (this.headers.Accept = "application/geo+json"), this;
  }
  explain({
    analyze: e = !1,
    verbose: t = !1,
    settings: r = !1,
    buffers: n = !1,
    wal: s = !1,
    format: o = "text",
  } = {}) {
    const a = [
        e ? "analyze" : null,
        t ? "verbose" : null,
        r ? "settings" : null,
        n ? "buffers" : null,
        s ? "wal" : null,
      ]
        .filter(Boolean)
        .join("|"),
      l = this.headers.Accept;
    return (
      (this.headers.Accept = `application/vnd.pgrst.plan+${o}; for="${l}"; options=${a};`),
      o === "json" ? this : this
    );
  }
  rollback() {
    var e;
    return (
      ((e = this.headers.Prefer) !== null && e !== void 0 ? e : "").trim()
        .length > 0
        ? (this.headers.Prefer += ",tx=rollback")
        : (this.headers.Prefer = "tx=rollback"),
      this
    );
  }
  returns() {
    return this;
  }
}
class le extends ei {
  eq(e, t) {
    return this.url.searchParams.append(e, `eq.${t}`), this;
  }
  neq(e, t) {
    return this.url.searchParams.append(e, `neq.${t}`), this;
  }
  gt(e, t) {
    return this.url.searchParams.append(e, `gt.${t}`), this;
  }
  gte(e, t) {
    return this.url.searchParams.append(e, `gte.${t}`), this;
  }
  lt(e, t) {
    return this.url.searchParams.append(e, `lt.${t}`), this;
  }
  lte(e, t) {
    return this.url.searchParams.append(e, `lte.${t}`), this;
  }
  like(e, t) {
    return this.url.searchParams.append(e, `like.${t}`), this;
  }
  likeAllOf(e, t) {
    return this.url.searchParams.append(e, `like(all).{${t.join(",")}}`), this;
  }
  likeAnyOf(e, t) {
    return this.url.searchParams.append(e, `like(any).{${t.join(",")}}`), this;
  }
  ilike(e, t) {
    return this.url.searchParams.append(e, `ilike.${t}`), this;
  }
  ilikeAllOf(e, t) {
    return this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`), this;
  }
  ilikeAnyOf(e, t) {
    return this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`), this;
  }
  is(e, t) {
    return this.url.searchParams.append(e, `is.${t}`), this;
  }
  in(e, t) {
    const r = t
      .map((n) =>
        typeof n == "string" && new RegExp("[,()]").test(n) ? `"${n}"` : `${n}`
      )
      .join(",");
    return this.url.searchParams.append(e, `in.(${r})`), this;
  }
  contains(e, t) {
    return (
      typeof t == "string"
        ? this.url.searchParams.append(e, `cs.${t}`)
        : Array.isArray(t)
        ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`)
        : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
      this
    );
  }
  containedBy(e, t) {
    return (
      typeof t == "string"
        ? this.url.searchParams.append(e, `cd.${t}`)
        : Array.isArray(t)
        ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`)
        : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
      this
    );
  }
  rangeGt(e, t) {
    return this.url.searchParams.append(e, `sr.${t}`), this;
  }
  rangeGte(e, t) {
    return this.url.searchParams.append(e, `nxl.${t}`), this;
  }
  rangeLt(e, t) {
    return this.url.searchParams.append(e, `sl.${t}`), this;
  }
  rangeLte(e, t) {
    return this.url.searchParams.append(e, `nxr.${t}`), this;
  }
  rangeAdjacent(e, t) {
    return this.url.searchParams.append(e, `adj.${t}`), this;
  }
  overlaps(e, t) {
    return (
      typeof t == "string"
        ? this.url.searchParams.append(e, `ov.${t}`)
        : this.url.searchParams.append(e, `ov.{${t.join(",")}}`),
      this
    );
  }
  textSearch(e, t, { config: r, type: n } = {}) {
    let s = "";
    n === "plain"
      ? (s = "pl")
      : n === "phrase"
      ? (s = "ph")
      : n === "websearch" && (s = "w");
    const o = r === void 0 ? "" : `(${r})`;
    return this.url.searchParams.append(e, `${s}fts${o}.${t}`), this;
  }
  match(e) {
    return (
      Object.entries(e).forEach(([t, r]) => {
        this.url.searchParams.append(t, `eq.${r}`);
      }),
      this
    );
  }
  not(e, t, r) {
    return this.url.searchParams.append(e, `not.${t}.${r}`), this;
  }
  or(e, { foreignTable: t } = {}) {
    const r = t ? `${t}.or` : "or";
    return this.url.searchParams.append(r, `(${e})`), this;
  }
  filter(e, t, r) {
    return this.url.searchParams.append(e, `${t}.${r}`), this;
  }
}
class ti {
  constructor(e, { headers: t = {}, schema: r, fetch: n }) {
    (this.url = e), (this.headers = t), (this.schema = r), (this.fetch = n);
  }
  select(e, { head: t = !1, count: r } = {}) {
    const n = t ? "HEAD" : "GET";
    let s = !1;
    const o = (e ?? "*")
      .split("")
      .map((a) => (/\s/.test(a) && !s ? "" : (a === '"' && (s = !s), a)))
      .join("");
    return (
      this.url.searchParams.set("select", o),
      r && (this.headers.Prefer = `count=${r}`),
      new le({
        method: n,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
  insert(e, { count: t, defaultToNull: r = !0 } = {}) {
    const n = "POST",
      s = [];
    if (
      (this.headers.Prefer && s.push(this.headers.Prefer),
      t && s.push(`count=${t}`),
      r || s.push("missing=default"),
      (this.headers.Prefer = s.join(",")),
      Array.isArray(e))
    ) {
      const o = e.reduce((a, l) => a.concat(Object.keys(l)), []);
      if (o.length > 0) {
        const a = [...new Set(o)].map((l) => `"${l}"`);
        this.url.searchParams.set("columns", a.join(","));
      }
    }
    return new le({
      method: n,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: e,
      fetch: this.fetch,
      allowEmpty: !1,
    });
  }
  upsert(
    e,
    {
      onConflict: t,
      ignoreDuplicates: r = !1,
      count: n,
      defaultToNull: s = !0,
    } = {}
  ) {
    const o = "POST",
      a = [`resolution=${r ? "ignore" : "merge"}-duplicates`];
    if (
      (t !== void 0 && this.url.searchParams.set("on_conflict", t),
      this.headers.Prefer && a.push(this.headers.Prefer),
      n && a.push(`count=${n}`),
      s || a.push("missing=default"),
      (this.headers.Prefer = a.join(",")),
      Array.isArray(e))
    ) {
      const l = e.reduce((c, h) => c.concat(Object.keys(h)), []);
      if (l.length > 0) {
        const c = [...new Set(l)].map((h) => `"${h}"`);
        this.url.searchParams.set("columns", c.join(","));
      }
    }
    return new le({
      method: o,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: e,
      fetch: this.fetch,
      allowEmpty: !1,
    });
  }
  update(e, { count: t } = {}) {
    const r = "PATCH",
      n = [];
    return (
      this.headers.Prefer && n.push(this.headers.Prefer),
      t && n.push(`count=${t}`),
      (this.headers.Prefer = n.join(",")),
      new le({
        method: r,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: e,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
  delete({ count: e } = {}) {
    const t = "DELETE",
      r = [];
    return (
      e && r.push(`count=${e}`),
      this.headers.Prefer && r.unshift(this.headers.Prefer),
      (this.headers.Prefer = r.join(",")),
      new le({
        method: t,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
}
const ri = "1.7.0",
  ii = { "X-Client-Info": `postgrest-js/${ri}` };
class ni {
  constructor(e, { headers: t = {}, schema: r, fetch: n } = {}) {
    (this.url = e),
      (this.headers = Object.assign(Object.assign({}, ii), t)),
      (this.schema = r),
      (this.fetch = n);
  }
  from(e) {
    const t = new URL(`${this.url}/${e}`);
    return new ti(t, {
      headers: Object.assign({}, this.headers),
      schema: this.schema,
      fetch: this.fetch,
    });
  }
  rpc(e, t = {}, { head: r = !1, count: n } = {}) {
    let s;
    const o = new URL(`${this.url}/rpc/${e}`);
    let a;
    r
      ? ((s = "HEAD"),
        Object.entries(t).forEach(([c, h]) => {
          o.searchParams.append(c, `${h}`);
        }))
      : ((s = "POST"), (a = t));
    const l = Object.assign({}, this.headers);
    return (
      n && (l.Prefer = `count=${n}`),
      new le({
        method: s,
        url: o,
        headers: l,
        schema: this.schema,
        body: a,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
}
var me, kt;
function si() {
  if (kt) return me;
  kt = 1;
  var i = function () {
    if (typeof self == "object" && self) return self;
    if (typeof window == "object" && window) return window;
    throw new Error("Unable to resolve global `this`");
  };
  return (
    (me = (function () {
      if (this) return this;
      if (typeof globalThis == "object" && globalThis) return globalThis;
      try {
        Object.defineProperty(Object.prototype, "__global__", {
          get: function () {
            return this;
          },
          configurable: !0,
        });
      } catch {
        return i();
      }
      try {
        return __global__ || i();
      } finally {
        delete Object.prototype.__global__;
      }
    })()),
    me
  );
}
const oi = "websocket",
  ai =
    "Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",
  li = [
    "websocket",
    "websockets",
    "socket",
    "networking",
    "comet",
    "push",
    "RFC-6455",
    "realtime",
    "server",
    "client",
  ],
  ci =
    "Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)",
  hi = ["Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],
  ui = "1.0.34",
  di = {
    type: "git",
    url: "https://github.com/theturtle32/WebSocket-Node.git",
  },
  fi = "https://github.com/theturtle32/WebSocket-Node",
  pi = { node: ">=4.0.0" },
  vi = {
    bufferutil: "^4.0.1",
    debug: "^2.2.0",
    "es5-ext": "^0.10.50",
    "typedarray-to-buffer": "^3.1.5",
    "utf-8-validate": "^5.0.2",
    yaeti: "^0.0.6",
  },
  _i = {
    "buffer-equal": "^1.0.0",
    gulp: "^4.0.2",
    "gulp-jshint": "^2.0.4",
    "jshint-stylish": "^2.2.1",
    jshint: "^2.0.0",
    tape: "^4.9.1",
  },
  yi = { verbose: !1 },
  mi = { test: "tape test/unit/*.js", gulp: "gulp" },
  gi = "index",
  bi = { lib: "./lib" },
  wi = "lib/browser.js",
  Ti = "Apache-2.0",
  Si = {
    name: oi,
    description: ai,
    keywords: li,
    author: ci,
    contributors: hi,
    version: ui,
    repository: di,
    homepage: fi,
    engines: pi,
    dependencies: vi,
    devDependencies: _i,
    config: yi,
    scripts: mi,
    main: gi,
    directories: bi,
    browser: wi,
    license: Ti,
  };
var Oi = Si.version,
  te;
if (typeof globalThis == "object") te = globalThis;
else
  try {
    te = si();
  } catch {
  } finally {
    if ((!te && typeof window < "u" && (te = window), !te))
      throw new Error("Could not determine global this");
  }
var Oe = te.WebSocket || te.MozWebSocket,
  ki = Oi;
function Kt(i, e) {
  var t;
  return e ? (t = new Oe(i, e)) : (t = new Oe(i)), t;
}
Oe &&
  ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach(function (i) {
    Object.defineProperty(Kt, i, {
      get: function () {
        return Oe[i];
      },
    });
  });
var Ei = { w3cwebsocket: Oe ? Kt : null, version: ki };
const $i = "2.7.3",
  ji = { "X-Client-Info": `realtime-js/${$i}` },
  Ai = "1.0.0",
  Vt = 1e4,
  xi = 1e3;
var ge;
(function (i) {
  (i[(i.connecting = 0)] = "connecting"),
    (i[(i.open = 1)] = "open"),
    (i[(i.closing = 2)] = "closing"),
    (i[(i.closed = 3)] = "closed");
})(ge || (ge = {}));
var F;
(function (i) {
  (i.closed = "closed"),
    (i.errored = "errored"),
    (i.joined = "joined"),
    (i.joining = "joining"),
    (i.leaving = "leaving");
})(F || (F = {}));
var z;
(function (i) {
  (i.close = "phx_close"),
    (i.error = "phx_error"),
    (i.join = "phx_join"),
    (i.reply = "phx_reply"),
    (i.leave = "phx_leave"),
    (i.access_token = "access_token");
})(z || (z = {}));
var it;
(function (i) {
  i.websocket = "websocket";
})(it || (it = {}));
var re;
(function (i) {
  (i.Connecting = "connecting"),
    (i.Open = "open"),
    (i.Closing = "closing"),
    (i.Closed = "closed");
})(re || (re = {}));
class Wt {
  constructor(e, t) {
    (this.callback = e),
      (this.timerCalc = t),
      (this.timer = void 0),
      (this.tries = 0),
      (this.callback = e),
      (this.timerCalc = t);
  }
  reset() {
    (this.tries = 0), clearTimeout(this.timer);
  }
  scheduleTimeout() {
    clearTimeout(this.timer),
      (this.timer = setTimeout(() => {
        (this.tries = this.tries + 1), this.callback();
      }, this.timerCalc(this.tries + 1)));
  }
}
class Pi {
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(e, t) {
    return e.constructor === ArrayBuffer
      ? t(this._binaryDecode(e))
      : t(typeof e == "string" ? JSON.parse(e) : {});
  }
  _binaryDecode(e) {
    const t = new DataView(e),
      r = new TextDecoder();
    return this._decodeBroadcast(e, t, r);
  }
  _decodeBroadcast(e, t, r) {
    const n = t.getUint8(1),
      s = t.getUint8(2);
    let o = this.HEADER_LENGTH + 2;
    const a = r.decode(e.slice(o, o + n));
    o = o + n;
    const l = r.decode(e.slice(o, o + s));
    o = o + s;
    const c = JSON.parse(r.decode(e.slice(o, e.byteLength)));
    return { ref: null, topic: a, event: l, payload: c };
  }
}
class qe {
  constructor(e, t, r = {}, n = Vt) {
    (this.channel = e),
      (this.event = t),
      (this.payload = r),
      (this.timeout = n),
      (this.sent = !1),
      (this.timeoutTimer = void 0),
      (this.ref = ""),
      (this.receivedResp = null),
      (this.recHooks = []),
      (this.refEvent = null),
      (this.rateLimited = !1);
  }
  resend(e) {
    (this.timeout = e),
      this._cancelRefEvent(),
      (this.ref = ""),
      (this.refEvent = null),
      (this.receivedResp = null),
      (this.sent = !1),
      this.send();
  }
  send() {
    if (this._hasReceived("timeout")) return;
    this.startTimeout(),
      (this.sent = !0),
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload,
        ref: this.ref,
        join_ref: this.channel._joinRef(),
      }) === "rate limited" && (this.rateLimited = !0);
  }
  updatePayload(e) {
    this.payload = Object.assign(Object.assign({}, this.payload), e);
  }
  receive(e, t) {
    var r;
    return (
      this._hasReceived(e) &&
        t(
          (r = this.receivedResp) === null || r === void 0 ? void 0 : r.response
        ),
      this.recHooks.push({ status: e, callback: t }),
      this
    );
  }
  startTimeout() {
    if (this.timeoutTimer) return;
    (this.ref = this.channel.socket._makeRef()),
      (this.refEvent = this.channel._replyEventName(this.ref));
    const e = (t) => {
      this._cancelRefEvent(),
        this._cancelTimeout(),
        (this.receivedResp = t),
        this._matchReceive(t);
    };
    this.channel._on(this.refEvent, {}, e),
      (this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout));
  }
  trigger(e, t) {
    this.refEvent &&
      this.channel._trigger(this.refEvent, { status: e, response: t });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
  }
  _matchReceive({ status: e, response: t }) {
    this.recHooks.filter((r) => r.status === e).forEach((r) => r.callback(t));
  }
  _hasReceived(e) {
    return this.receivedResp && this.receivedResp.status === e;
  }
}
var Et;
(function (i) {
  (i.SYNC = "sync"), (i.JOIN = "join"), (i.LEAVE = "leave");
})(Et || (Et = {}));
class be {
  constructor(e, t) {
    (this.channel = e),
      (this.state = {}),
      (this.pendingDiffs = []),
      (this.joinRef = null),
      (this.caller = { onJoin: () => {}, onLeave: () => {}, onSync: () => {} });
    const r = (t == null ? void 0 : t.events) || {
      state: "presence_state",
      diff: "presence_diff",
    };
    this.channel._on(r.state, {}, (n) => {
      const { onJoin: s, onLeave: o, onSync: a } = this.caller;
      (this.joinRef = this.channel._joinRef()),
        (this.state = be.syncState(this.state, n, s, o)),
        this.pendingDiffs.forEach((l) => {
          this.state = be.syncDiff(this.state, l, s, o);
        }),
        (this.pendingDiffs = []),
        a();
    }),
      this.channel._on(r.diff, {}, (n) => {
        const { onJoin: s, onLeave: o, onSync: a } = this.caller;
        this.inPendingSyncState()
          ? this.pendingDiffs.push(n)
          : ((this.state = be.syncDiff(this.state, n, s, o)), a());
      }),
      this.onJoin((n, s, o) => {
        this.channel._trigger("presence", {
          event: "join",
          key: n,
          currentPresences: s,
          newPresences: o,
        });
      }),
      this.onLeave((n, s, o) => {
        this.channel._trigger("presence", {
          event: "leave",
          key: n,
          currentPresences: s,
          leftPresences: o,
        });
      }),
      this.onSync(() => {
        this.channel._trigger("presence", { event: "sync" });
      });
  }
  static syncState(e, t, r, n) {
    const s = this.cloneDeep(e),
      o = this.transformState(t),
      a = {},
      l = {};
    return (
      this.map(s, (c, h) => {
        o[c] || (l[c] = h);
      }),
      this.map(o, (c, h) => {
        const u = s[c];
        if (u) {
          const f = h.map((_) => _.presence_ref),
            p = u.map((_) => _.presence_ref),
            y = h.filter((_) => p.indexOf(_.presence_ref) < 0),
            v = u.filter((_) => f.indexOf(_.presence_ref) < 0);
          y.length > 0 && (a[c] = y), v.length > 0 && (l[c] = v);
        } else a[c] = h;
      }),
      this.syncDiff(s, { joins: a, leaves: l }, r, n)
    );
  }
  static syncDiff(e, t, r, n) {
    const { joins: s, leaves: o } = {
      joins: this.transformState(t.joins),
      leaves: this.transformState(t.leaves),
    };
    return (
      r || (r = () => {}),
      n || (n = () => {}),
      this.map(s, (a, l) => {
        var c;
        const h = (c = e[a]) !== null && c !== void 0 ? c : [];
        if (((e[a] = this.cloneDeep(l)), h.length > 0)) {
          const u = e[a].map((p) => p.presence_ref),
            f = h.filter((p) => u.indexOf(p.presence_ref) < 0);
          e[a].unshift(...f);
        }
        r(a, h, l);
      }),
      this.map(o, (a, l) => {
        let c = e[a];
        if (!c) return;
        const h = l.map((u) => u.presence_ref);
        (c = c.filter((u) => h.indexOf(u.presence_ref) < 0)),
          (e[a] = c),
          n(a, c, l),
          c.length === 0 && delete e[a];
      }),
      e
    );
  }
  static map(e, t) {
    return Object.getOwnPropertyNames(e).map((r) => t(r, e[r]));
  }
  static transformState(e) {
    return (
      (e = this.cloneDeep(e)),
      Object.getOwnPropertyNames(e).reduce((t, r) => {
        const n = e[r];
        return (
          "metas" in n
            ? (t[r] = n.metas.map(
                (s) => (
                  (s.presence_ref = s.phx_ref),
                  delete s.phx_ref,
                  delete s.phx_ref_prev,
                  s
                )
              ))
            : (t[r] = n),
          t
        );
      }, {})
    );
  }
  static cloneDeep(e) {
    return JSON.parse(JSON.stringify(e));
  }
  onJoin(e) {
    this.caller.onJoin = e;
  }
  onLeave(e) {
    this.caller.onLeave = e;
  }
  onSync(e) {
    this.caller.onSync = e;
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var j;
(function (i) {
  (i.abstime = "abstime"),
    (i.bool = "bool"),
    (i.date = "date"),
    (i.daterange = "daterange"),
    (i.float4 = "float4"),
    (i.float8 = "float8"),
    (i.int2 = "int2"),
    (i.int4 = "int4"),
    (i.int4range = "int4range"),
    (i.int8 = "int8"),
    (i.int8range = "int8range"),
    (i.json = "json"),
    (i.jsonb = "jsonb"),
    (i.money = "money"),
    (i.numeric = "numeric"),
    (i.oid = "oid"),
    (i.reltime = "reltime"),
    (i.text = "text"),
    (i.time = "time"),
    (i.timestamp = "timestamp"),
    (i.timestamptz = "timestamptz"),
    (i.timetz = "timetz"),
    (i.tsrange = "tsrange"),
    (i.tstzrange = "tstzrange");
})(j || (j = {}));
const $t = (i, e, t = {}) => {
    var r;
    const n = (r = t.skipTypes) !== null && r !== void 0 ? r : [];
    return Object.keys(e).reduce((s, o) => ((s[o] = Ci(o, i, e, n)), s), {});
  },
  Ci = (i, e, t, r) => {
    const n = e.find((a) => a.name === i),
      s = n == null ? void 0 : n.type,
      o = t[i];
    return s && !r.includes(s) ? Qt(s, o) : nt(o);
  },
  Qt = (i, e) => {
    if (i.charAt(0) === "_") {
      const t = i.slice(1, i.length);
      return Ui(e, t);
    }
    switch (i) {
      case j.bool:
        return Ri(e);
      case j.float4:
      case j.float8:
      case j.int2:
      case j.int4:
      case j.int8:
      case j.numeric:
      case j.oid:
        return Ii(e);
      case j.json:
      case j.jsonb:
        return Di(e);
      case j.timestamp:
        return Li(e);
      case j.abstime:
      case j.date:
      case j.daterange:
      case j.int4range:
      case j.int8range:
      case j.money:
      case j.reltime:
      case j.text:
      case j.time:
      case j.timestamptz:
      case j.timetz:
      case j.tsrange:
      case j.tstzrange:
        return nt(e);
      default:
        return nt(e);
    }
  },
  nt = (i) => i,
  Ri = (i) => {
    switch (i) {
      case "t":
        return !0;
      case "f":
        return !1;
      default:
        return i;
    }
  },
  Ii = (i) => {
    if (typeof i == "string") {
      const e = parseFloat(i);
      if (!Number.isNaN(e)) return e;
    }
    return i;
  },
  Di = (i) => {
    if (typeof i == "string")
      try {
        return JSON.parse(i);
      } catch (e) {
        return console.log(`JSON parse error: ${e}`), i;
      }
    return i;
  },
  Ui = (i, e) => {
    if (typeof i != "string") return i;
    const t = i.length - 1,
      r = i[t];
    if (i[0] === "{" && r === "}") {
      let s;
      const o = i.slice(1, t);
      try {
        s = JSON.parse("[" + o + "]");
      } catch {
        s = o ? o.split(",") : [];
      }
      return s.map((a) => Qt(e, a));
    }
    return i;
  },
  Li = (i) => (typeof i == "string" ? i.replace(" ", "T") : i);
var jt =
    (globalThis && globalThis.__awaiter) ||
    function (i, e, t, r) {
      function n(s) {
        return s instanceof t
          ? s
          : new t(function (o) {
              o(s);
            });
      }
      return new (t || (t = Promise))(function (s, o) {
        function a(h) {
          try {
            c(r.next(h));
          } catch (u) {
            o(u);
          }
        }
        function l(h) {
          try {
            c(r.throw(h));
          } catch (u) {
            o(u);
          }
        }
        function c(h) {
          h.done ? s(h.value) : n(h.value).then(a, l);
        }
        c((r = r.apply(i, e || [])).next());
      });
    },
  At;
(function (i) {
  (i.ALL = "*"),
    (i.INSERT = "INSERT"),
    (i.UPDATE = "UPDATE"),
    (i.DELETE = "DELETE");
})(At || (At = {}));
var xt;
(function (i) {
  (i.BROADCAST = "broadcast"),
    (i.PRESENCE = "presence"),
    (i.POSTGRES_CHANGES = "postgres_changes");
})(xt || (xt = {}));
var Pt;
(function (i) {
  (i.SUBSCRIBED = "SUBSCRIBED"),
    (i.TIMED_OUT = "TIMED_OUT"),
    (i.CLOSED = "CLOSED"),
    (i.CHANNEL_ERROR = "CHANNEL_ERROR");
})(Pt || (Pt = {}));
class vt {
  constructor(e, t = { config: {} }, r) {
    (this.topic = e),
      (this.params = t),
      (this.socket = r),
      (this.bindings = {}),
      (this.state = F.closed),
      (this.joinedOnce = !1),
      (this.pushBuffer = []),
      (this.params.config = Object.assign(
        { broadcast: { ack: !1, self: !1 }, presence: { key: "" } },
        t.config
      )),
      (this.timeout = this.socket.timeout),
      (this.joinPush = new qe(this, z.join, this.params, this.timeout)),
      (this.rejoinTimer = new Wt(
        () => this._rejoinUntilConnected(),
        this.socket.reconnectAfterMs
      )),
      this.joinPush.receive("ok", () => {
        (this.state = F.joined),
          this.rejoinTimer.reset(),
          this.pushBuffer.forEach((n) => n.send()),
          (this.pushBuffer = []);
      }),
      this._onClose(() => {
        this.rejoinTimer.reset(),
          this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
          (this.state = F.closed),
          this.socket._remove(this);
      }),
      this._onError((n) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, n),
          (this.state = F.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("timeout", () => {
        this._isJoining() &&
          (this.socket.log(
            "channel",
            `timeout ${this.topic}`,
            this.joinPush.timeout
          ),
          (this.state = F.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this._on(z.reply, {}, (n, s) => {
        this._trigger(this._replyEventName(s), n);
      }),
      (this.presence = new be(this));
  }
  subscribe(e, t = this.timeout) {
    var r, n;
    if (this.joinedOnce)
      throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
    {
      const {
        config: { broadcast: s, presence: o },
      } = this.params;
      this._onError((c) => e && e("CHANNEL_ERROR", c)),
        this._onClose(() => e && e("CLOSED"));
      const a = {},
        l = {
          broadcast: s,
          presence: o,
          postgres_changes:
            (n =
              (r = this.bindings.postgres_changes) === null || r === void 0
                ? void 0
                : r.map((c) => c.filter)) !== null && n !== void 0
              ? n
              : [],
        };
      this.socket.accessToken && (a.access_token = this.socket.accessToken),
        this.updateJoinPayload(Object.assign({ config: l }, a)),
        (this.joinedOnce = !0),
        this._rejoin(t),
        this.joinPush
          .receive("ok", ({ postgres_changes: c }) => {
            var h;
            if (
              (this.socket.accessToken &&
                this.socket.setAuth(this.socket.accessToken),
              c === void 0)
            ) {
              e && e("SUBSCRIBED");
              return;
            } else {
              const u = this.bindings.postgres_changes,
                f =
                  (h = u == null ? void 0 : u.length) !== null && h !== void 0
                    ? h
                    : 0,
                p = [];
              for (let y = 0; y < f; y++) {
                const v = u[y],
                  {
                    filter: { event: _, schema: g, table: b, filter: O },
                  } = v,
                  A = c && c[y];
                if (
                  A &&
                  A.event === _ &&
                  A.schema === g &&
                  A.table === b &&
                  A.filter === O
                )
                  p.push(Object.assign(Object.assign({}, v), { id: A.id }));
                else {
                  this.unsubscribe(),
                    e &&
                      e(
                        "CHANNEL_ERROR",
                        new Error(
                          "mismatch between server and client bindings for postgres changes"
                        )
                      );
                  return;
                }
              }
              (this.bindings.postgres_changes = p), e && e("SUBSCRIBED");
              return;
            }
          })
          .receive("error", (c) => {
            e &&
              e(
                "CHANNEL_ERROR",
                new Error(
                  JSON.stringify(Object.values(c).join(", ") || "error")
                )
              );
          })
          .receive("timeout", () => {
            e && e("TIMED_OUT");
          });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  track(e, t = {}) {
    return jt(this, void 0, void 0, function* () {
      return yield this.send(
        { type: "presence", event: "track", payload: e },
        t.timeout || this.timeout
      );
    });
  }
  untrack(e = {}) {
    return jt(this, void 0, void 0, function* () {
      return yield this.send({ type: "presence", event: "untrack" }, e);
    });
  }
  on(e, t, r) {
    return this._on(e, t, r);
  }
  send(e, t = {}) {
    return new Promise((r) => {
      var n, s, o;
      const a = this._push(e.type, e, t.timeout || this.timeout);
      a.rateLimited && r("rate limited"),
        e.type === "broadcast" &&
          !(
            !(
              (o =
                (s =
                  (n = this.params) === null || n === void 0
                    ? void 0
                    : n.config) === null || s === void 0
                  ? void 0
                  : s.broadcast) === null || o === void 0
            ) && o.ack
          ) &&
          r("ok"),
        a.receive("ok", () => r("ok")),
        a.receive("timeout", () => r("timed out"));
    });
  }
  updateJoinPayload(e) {
    this.joinPush.updatePayload(e);
  }
  unsubscribe(e = this.timeout) {
    this.state = F.leaving;
    const t = () => {
      this.socket.log("channel", `leave ${this.topic}`),
        this._trigger(z.close, "leave", this._joinRef());
    };
    return (
      this.rejoinTimer.reset(),
      this.joinPush.destroy(),
      new Promise((r) => {
        const n = new qe(this, z.leave, {}, e);
        n
          .receive("ok", () => {
            t(), r("ok");
          })
          .receive("timeout", () => {
            t(), r("timed out");
          })
          .receive("error", () => {
            r("error");
          }),
          n.send(),
          this._canPush() || n.trigger("ok", {});
      })
    );
  }
  _push(e, t, r = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let n = new qe(this, e, t, r);
    return (
      this._canPush() ? n.send() : (n.startTimeout(), this.pushBuffer.push(n)),
      n
    );
  }
  _onMessage(e, t, r) {
    return t;
  }
  _isMember(e) {
    return this.topic === e;
  }
  _joinRef() {
    return this.joinPush.ref;
  }
  _trigger(e, t, r) {
    var n, s;
    const o = e.toLocaleLowerCase(),
      { close: a, error: l, leave: c, join: h } = z;
    if (r && [a, l, c, h].indexOf(o) >= 0 && r !== this._joinRef()) return;
    let f = this._onMessage(o, t, r);
    if (t && !f)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(o)
      ? (n = this.bindings.postgres_changes) === null ||
        n === void 0 ||
        n
          .filter((p) => {
            var y, v, _;
            return (
              ((y = p.filter) === null || y === void 0 ? void 0 : y.event) ===
                "*" ||
              ((_ =
                (v = p.filter) === null || v === void 0 ? void 0 : v.event) ===
                null || _ === void 0
                ? void 0
                : _.toLocaleLowerCase()) === o
            );
          })
          .map((p) => p.callback(f, r))
      : (s = this.bindings[o]) === null ||
        s === void 0 ||
        s
          .filter((p) => {
            var y, v, _, g, b, O;
            if (["broadcast", "presence", "postgres_changes"].includes(o))
              if ("id" in p) {
                const A = p.id,
                  L =
                    (y = p.filter) === null || y === void 0 ? void 0 : y.event;
                return (
                  A &&
                  ((v = t.ids) === null || v === void 0
                    ? void 0
                    : v.includes(A)) &&
                  (L === "*" ||
                    (L == null ? void 0 : L.toLocaleLowerCase()) ===
                      ((_ = t.data) === null || _ === void 0
                        ? void 0
                        : _.type.toLocaleLowerCase()))
                );
              } else {
                const A =
                  (b =
                    (g = p == null ? void 0 : p.filter) === null || g === void 0
                      ? void 0
                      : g.event) === null || b === void 0
                    ? void 0
                    : b.toLocaleLowerCase();
                return (
                  A === "*" ||
                  A ===
                    ((O = t == null ? void 0 : t.event) === null || O === void 0
                      ? void 0
                      : O.toLocaleLowerCase())
                );
              }
            else return p.type.toLocaleLowerCase() === o;
          })
          .map((p) => {
            if (typeof f == "object" && "ids" in f) {
              const y = f.data,
                {
                  schema: v,
                  table: _,
                  commit_timestamp: g,
                  type: b,
                  errors: O,
                } = y;
              f = Object.assign(
                Object.assign(
                  {},
                  {
                    schema: v,
                    table: _,
                    commit_timestamp: g,
                    eventType: b,
                    new: {},
                    old: {},
                    errors: O,
                  }
                ),
                this._getPayloadRecords(y)
              );
            }
            p.callback(f, r);
          });
  }
  _isClosed() {
    return this.state === F.closed;
  }
  _isJoined() {
    return this.state === F.joined;
  }
  _isJoining() {
    return this.state === F.joining;
  }
  _isLeaving() {
    return this.state === F.leaving;
  }
  _replyEventName(e) {
    return `chan_reply_${e}`;
  }
  _on(e, t, r) {
    const n = e.toLocaleLowerCase(),
      s = { type: n, filter: t, callback: r };
    return (
      this.bindings[n] ? this.bindings[n].push(s) : (this.bindings[n] = [s]),
      this
    );
  }
  _off(e, t) {
    const r = e.toLocaleLowerCase();
    return (
      (this.bindings[r] = this.bindings[r].filter((n) => {
        var s;
        return !(
          ((s = n.type) === null || s === void 0
            ? void 0
            : s.toLocaleLowerCase()) === r && vt.isEqual(n.filter, t)
        );
      })),
      this
    );
  }
  static isEqual(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const r in e) if (e[r] !== t[r]) return !1;
    return !0;
  }
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(),
      this.socket.isConnected() && this._rejoin();
  }
  _onClose(e) {
    this._on(z.close, {}, e);
  }
  _onError(e) {
    this._on(z.error, {}, (t) => e(t));
  }
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  _rejoin(e = this.timeout) {
    this._isLeaving() ||
      (this.socket._leaveOpenTopic(this.topic),
      (this.state = F.joining),
      this.joinPush.resend(e));
  }
  _getPayloadRecords(e) {
    const t = { new: {}, old: {} };
    return (
      (e.type === "INSERT" || e.type === "UPDATE") &&
        (t.new = $t(e.columns, e.record)),
      (e.type === "UPDATE" || e.type === "DELETE") &&
        (t.old = $t(e.columns, e.old_record)),
      t
    );
  }
}
var ze =
  (globalThis && globalThis.__awaiter) ||
  function (i, e, t, r) {
    function n(s) {
      return s instanceof t
        ? s
        : new t(function (o) {
            o(s);
          });
    }
    return new (t || (t = Promise))(function (s, o) {
      function a(h) {
        try {
          c(r.next(h));
        } catch (u) {
          o(u);
        }
      }
      function l(h) {
        try {
          c(r.throw(h));
        } catch (u) {
          o(u);
        }
      }
      function c(h) {
        h.done ? s(h.value) : n(h.value).then(a, l);
      }
      c((r = r.apply(i, e || [])).next());
    });
  };
const Ni = () => {};
class Fi {
  constructor(e, t) {
    var r;
    (this.accessToken = null),
      (this.channels = []),
      (this.endPoint = ""),
      (this.headers = ji),
      (this.params = {}),
      (this.timeout = Vt),
      (this.transport = Ei.w3cwebsocket),
      (this.heartbeatIntervalMs = 3e4),
      (this.heartbeatTimer = void 0),
      (this.pendingHeartbeatRef = null),
      (this.ref = 0),
      (this.logger = Ni),
      (this.conn = null),
      (this.sendBuffer = []),
      (this.serializer = new Pi()),
      (this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: [],
      }),
      (this.eventsPerSecondLimitMs = 100),
      (this.inThrottle = !1),
      (this.endPoint = `${e}/${it.websocket}`),
      t != null && t.params && (this.params = t.params),
      t != null &&
        t.headers &&
        (this.headers = Object.assign(
          Object.assign({}, this.headers),
          t.headers
        )),
      t != null && t.timeout && (this.timeout = t.timeout),
      t != null && t.logger && (this.logger = t.logger),
      t != null && t.transport && (this.transport = t.transport),
      t != null &&
        t.heartbeatIntervalMs &&
        (this.heartbeatIntervalMs = t.heartbeatIntervalMs);
    const n =
      (r = t == null ? void 0 : t.params) === null || r === void 0
        ? void 0
        : r.eventsPerSecond;
    n && (this.eventsPerSecondLimitMs = Math.floor(1e3 / n)),
      (this.reconnectAfterMs =
        t != null && t.reconnectAfterMs
          ? t.reconnectAfterMs
          : (s) => [1e3, 2e3, 5e3, 1e4][s - 1] || 1e4),
      (this.encode =
        t != null && t.encode ? t.encode : (s, o) => o(JSON.stringify(s))),
      (this.decode =
        t != null && t.decode
          ? t.decode
          : this.serializer.decode.bind(this.serializer)),
      (this.reconnectTimer = new Wt(
        () =>
          ze(this, void 0, void 0, function* () {
            this.disconnect(), this.connect();
          }),
        this.reconnectAfterMs
      ));
  }
  connect() {
    this.conn ||
      ((this.conn = new this.transport(
        this._endPointURL(),
        [],
        null,
        this.headers
      )),
      this.conn &&
        ((this.conn.binaryType = "arraybuffer"),
        (this.conn.onopen = () => this._onConnOpen()),
        (this.conn.onerror = (e) => this._onConnError(e)),
        (this.conn.onmessage = (e) => this._onConnMessage(e)),
        (this.conn.onclose = (e) => this._onConnClose(e))));
  }
  disconnect(e, t) {
    this.conn &&
      ((this.conn.onclose = function () {}),
      e ? this.conn.close(e, t ?? "") : this.conn.close(),
      (this.conn = null),
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      this.reconnectTimer.reset());
  }
  getChannels() {
    return this.channels;
  }
  removeChannel(e) {
    return ze(this, void 0, void 0, function* () {
      const t = yield e.unsubscribe();
      return this.channels.length === 0 && this.disconnect(), t;
    });
  }
  removeAllChannels() {
    return ze(this, void 0, void 0, function* () {
      const e = yield Promise.all(this.channels.map((t) => t.unsubscribe()));
      return this.disconnect(), e;
    });
  }
  log(e, t, r) {
    this.logger(e, t, r);
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case ge.connecting:
        return re.Connecting;
      case ge.open:
        return re.Open;
      case ge.closing:
        return re.Closing;
      default:
        return re.Closed;
    }
  }
  isConnected() {
    return this.connectionState() === re.Open;
  }
  channel(e, t = { config: {} }) {
    this.isConnected() || this.connect();
    const r = new vt(`realtime:${e}`, t, this);
    return this.channels.push(r), r;
  }
  push(e) {
    const { topic: t, event: r, payload: n, ref: s } = e;
    let o = () => {
      this.encode(e, (a) => {
        var l;
        (l = this.conn) === null || l === void 0 || l.send(a);
      });
    };
    if ((this.log("push", `${t} ${r} (${s})`, n), this.isConnected()))
      if (["broadcast", "presence", "postgres_changes"].includes(r)) {
        if (this._throttle(o)()) return "rate limited";
      } else o();
    else this.sendBuffer.push(o);
  }
  setAuth(e) {
    (this.accessToken = e),
      this.channels.forEach((t) => {
        e && t.updateJoinPayload({ access_token: e }),
          t.joinedOnce &&
            t._isJoined() &&
            t._push(z.access_token, { access_token: e });
      });
  }
  _makeRef() {
    let e = this.ref + 1;
    return (
      e === this.ref ? (this.ref = 0) : (this.ref = e), this.ref.toString()
    );
  }
  _leaveOpenTopic(e) {
    let t = this.channels.find(
      (r) => r.topic === e && (r._isJoined() || r._isJoining())
    );
    t &&
      (this.log("transport", `leaving duplicate topic "${e}"`),
      t.unsubscribe());
  }
  _remove(e) {
    this.channels = this.channels.filter((t) => t._joinRef() !== e._joinRef());
  }
  _endPointURL() {
    return this._appendParams(
      this.endPoint,
      Object.assign({}, this.params, { vsn: Ai })
    );
  }
  _onConnMessage(e) {
    this.decode(e.data, (t) => {
      let { topic: r, event: n, payload: s, ref: o } = t;
      ((o && o === this.pendingHeartbeatRef) ||
        n === (s == null ? void 0 : s.type)) &&
        (this.pendingHeartbeatRef = null),
        this.log(
          "receive",
          `${s.status || ""} ${r} ${n} ${(o && "(" + o + ")") || ""}`,
          s
        ),
        this.channels
          .filter((a) => a._isMember(r))
          .forEach((a) => a._trigger(n, s, o)),
        this.stateChangeCallbacks.message.forEach((a) => a(t));
    });
  }
  _onConnOpen() {
    this.log("transport", `connected to ${this._endPointURL()}`),
      this._flushSendBuffer(),
      this.reconnectTimer.reset(),
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      (this.heartbeatTimer = setInterval(
        () => this._sendHeartbeat(),
        this.heartbeatIntervalMs
      )),
      this.stateChangeCallbacks.open.forEach((e) => e());
  }
  _onConnClose(e) {
    this.log("transport", "close", e),
      this._triggerChanError(),
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      this.reconnectTimer.scheduleTimeout(),
      this.stateChangeCallbacks.close.forEach((t) => t(e));
  }
  _onConnError(e) {
    this.log("transport", e.message),
      this._triggerChanError(),
      this.stateChangeCallbacks.error.forEach((t) => t(e));
  }
  _triggerChanError() {
    this.channels.forEach((e) => e._trigger(z.error));
  }
  _appendParams(e, t) {
    if (Object.keys(t).length === 0) return e;
    const r = e.match(/\?/) ? "&" : "?",
      n = new URLSearchParams(t);
    return `${e}${r}${n}`;
  }
  _flushSendBuffer() {
    this.isConnected() &&
      this.sendBuffer.length > 0 &&
      (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
  }
  _sendHeartbeat() {
    var e;
    if (this.isConnected()) {
      if (this.pendingHeartbeatRef) {
        (this.pendingHeartbeatRef = null),
          this.log(
            "transport",
            "heartbeat timeout. Attempting to re-establish connection"
          ),
          (e = this.conn) === null ||
            e === void 0 ||
            e.close(xi, "hearbeat timeout");
        return;
      }
      (this.pendingHeartbeatRef = this._makeRef()),
        this.push({
          topic: "phoenix",
          event: "heartbeat",
          payload: {},
          ref: this.pendingHeartbeatRef,
        }),
        this.setAuth(this.accessToken);
    }
  }
  _throttle(e, t = this.eventsPerSecondLimitMs) {
    return () =>
      this.inThrottle
        ? !0
        : (e(),
          t > 0 &&
            ((this.inThrottle = !0),
            setTimeout(() => {
              this.inThrottle = !1;
            }, t)),
          !1);
  }
}
class _t extends Error {
  constructor(e) {
    super(e), (this.__isStorageError = !0), (this.name = "StorageError");
  }
}
function D(i) {
  return typeof i == "object" && i !== null && "__isStorageError" in i;
}
class Bi extends _t {
  constructor(e, t) {
    super(e), (this.name = "StorageApiError"), (this.status = t);
  }
  toJSON() {
    return { name: this.name, message: this.message, status: this.status };
  }
}
class Ct extends _t {
  constructor(e, t) {
    super(e), (this.name = "StorageUnknownError"), (this.originalError = t);
  }
}
var Xt =
  (globalThis && globalThis.__awaiter) ||
  function (i, e, t, r) {
    function n(s) {
      return s instanceof t
        ? s
        : new t(function (o) {
            o(s);
          });
    }
    return new (t || (t = Promise))(function (s, o) {
      function a(h) {
        try {
          c(r.next(h));
        } catch (u) {
          o(u);
        }
      }
      function l(h) {
        try {
          c(r.throw(h));
        } catch (u) {
          o(u);
        }
      }
      function c(h) {
        h.done ? s(h.value) : n(h.value).then(a, l);
      }
      c((r = r.apply(i, e || [])).next());
    });
  };
const Yt = (i) => {
    let e;
    return (
      i
        ? (e = i)
        : typeof fetch > "u"
        ? (e = (...t) =>
            Xt(void 0, void 0, void 0, function* () {
              return yield (yield Le(
                () => Promise.resolve().then(() => Ne),
                void 0,
                import.meta.url
              )).fetch(...t);
            }))
        : (e = fetch),
      (...t) => e(...t)
    );
  },
  Mi = () =>
    Xt(void 0, void 0, void 0, function* () {
      return typeof Response > "u"
        ? (yield Le(
            () => Promise.resolve().then(() => Ne),
            void 0,
            import.meta.url
          )).Response
        : Response;
    });
var fe =
  (globalThis && globalThis.__awaiter) ||
  function (i, e, t, r) {
    function n(s) {
      return s instanceof t
        ? s
        : new t(function (o) {
            o(s);
          });
    }
    return new (t || (t = Promise))(function (s, o) {
      function a(h) {
        try {
          c(r.next(h));
        } catch (u) {
          o(u);
        }
      }
      function l(h) {
        try {
          c(r.throw(h));
        } catch (u) {
          o(u);
        }
      }
      function c(h) {
        h.done ? s(h.value) : n(h.value).then(a, l);
      }
      c((r = r.apply(i, e || [])).next());
    });
  };
const Ge = (i) =>
    i.msg || i.message || i.error_description || i.error || JSON.stringify(i),
  Hi = (i, e) =>
    fe(void 0, void 0, void 0, function* () {
      const t = yield Mi();
      i instanceof t
        ? i
            .json()
            .then((r) => {
              e(new Bi(Ge(r), i.status || 500));
            })
            .catch((r) => {
              e(new Ct(Ge(r), r));
            })
        : e(new Ct(Ge(i), i));
    }),
  Ji = (i, e, t, r) => {
    const n = { method: i, headers: (e == null ? void 0 : e.headers) || {} };
    return i === "GET"
      ? n
      : ((n.headers = Object.assign(
          { "Content-Type": "application/json" },
          e == null ? void 0 : e.headers
        )),
        (n.body = JSON.stringify(r)),
        Object.assign(Object.assign({}, n), t));
  };
function Fe(i, e, t, r, n, s) {
  return fe(this, void 0, void 0, function* () {
    return new Promise((o, a) => {
      i(t, Ji(e, r, n, s))
        .then((l) => {
          if (!l.ok) throw l;
          return r != null && r.noResolveJson ? l : l.json();
        })
        .then((l) => o(l))
        .catch((l) => Hi(l, a));
    });
  });
}
function st(i, e, t, r) {
  return fe(this, void 0, void 0, function* () {
    return Fe(i, "GET", e, t, r);
  });
}
function Z(i, e, t, r, n) {
  return fe(this, void 0, void 0, function* () {
    return Fe(i, "POST", e, r, n, t);
  });
}
function qi(i, e, t, r, n) {
  return fe(this, void 0, void 0, function* () {
    return Fe(i, "PUT", e, r, n, t);
  });
}
function Zt(i, e, t, r, n) {
  return fe(this, void 0, void 0, function* () {
    return Fe(i, "DELETE", e, r, n, t);
  });
}
var J =
  (globalThis && globalThis.__awaiter) ||
  function (i, e, t, r) {
    function n(s) {
      return s instanceof t
        ? s
        : new t(function (o) {
            o(s);
          });
    }
    return new (t || (t = Promise))(function (s, o) {
      function a(h) {
        try {
          c(r.next(h));
        } catch (u) {
          o(u);
        }
      }
      function l(h) {
        try {
          c(r.throw(h));
        } catch (u) {
          o(u);
        }
      }
      function c(h) {
        h.done ? s(h.value) : n(h.value).then(a, l);
      }
      c((r = r.apply(i, e || [])).next());
    });
  };
const zi = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
  Rt = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1,
  };
class Gi {
  constructor(e, t = {}, r, n) {
    (this.url = e),
      (this.headers = t),
      (this.bucketId = r),
      (this.fetch = Yt(n));
  }
  uploadOrUpdate(e, t, r, n) {
    return J(this, void 0, void 0, function* () {
      try {
        let s;
        const o = Object.assign(Object.assign({}, Rt), n),
          a = Object.assign(
            Object.assign({}, this.headers),
            e === "POST" && { "x-upsert": String(o.upsert) }
          );
        typeof Blob < "u" && r instanceof Blob
          ? ((s = new FormData()),
            s.append("cacheControl", o.cacheControl),
            s.append("", r))
          : typeof FormData < "u" && r instanceof FormData
          ? ((s = r), s.append("cacheControl", o.cacheControl))
          : ((s = r),
            (a["cache-control"] = `max-age=${o.cacheControl}`),
            (a["content-type"] = o.contentType));
        const l = this._removeEmptyFolders(t),
          c = this._getFinalPath(l),
          h = yield this.fetch(
            `${this.url}/object/${c}`,
            Object.assign(
              { method: e, body: s, headers: a },
              o != null && o.duplex ? { duplex: o.duplex } : {}
            )
          );
        return h.ok
          ? { data: { path: l }, error: null }
          : { data: null, error: yield h.json() };
      } catch (s) {
        if (D(s)) return { data: null, error: s };
        throw s;
      }
    });
  }
  upload(e, t, r) {
    return J(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", e, t, r);
    });
  }
  uploadToSignedUrl(e, t, r, n) {
    return J(this, void 0, void 0, function* () {
      const s = this._removeEmptyFolders(e),
        o = this._getFinalPath(s),
        a = new URL(this.url + `/object/upload/sign/${o}`);
      a.searchParams.set("token", t);
      try {
        let l;
        const c = Object.assign({ upsert: Rt.upsert }, n),
          h = Object.assign(Object.assign({}, this.headers), {
            "x-upsert": String(c.upsert),
          });
        typeof Blob < "u" && r instanceof Blob
          ? ((l = new FormData()),
            l.append("cacheControl", c.cacheControl),
            l.append("", r))
          : typeof FormData < "u" && r instanceof FormData
          ? ((l = r), l.append("cacheControl", c.cacheControl))
          : ((l = r),
            (h["cache-control"] = `max-age=${c.cacheControl}`),
            (h["content-type"] = c.contentType));
        const u = yield this.fetch(a.toString(), {
          method: "PUT",
          body: l,
          headers: h,
        });
        return u.ok
          ? { data: { path: s }, error: null }
          : { data: null, error: yield u.json() };
      } catch (l) {
        if (D(l)) return { data: null, error: l };
        throw l;
      }
    });
  }
  createSignedUploadUrl(e) {
    return J(this, void 0, void 0, function* () {
      try {
        let t = this._getFinalPath(e);
        const r = yield Z(
            this.fetch,
            `${this.url}/object/upload/sign/${t}`,
            {},
            { headers: this.headers }
          ),
          n = new URL(this.url + r.url),
          s = n.searchParams.get("token");
        if (!s) throw new _t("No token returned by API");
        return {
          data: { signedUrl: n.toString(), path: e, token: s },
          error: null,
        };
      } catch (t) {
        if (D(t)) return { data: null, error: t };
        throw t;
      }
    });
  }
  update(e, t, r) {
    return J(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", e, t, r);
    });
  }
  move(e, t) {
    return J(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Z(
            this.fetch,
            `${this.url}/object/move`,
            { bucketId: this.bucketId, sourceKey: e, destinationKey: t },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (D(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  copy(e, t) {
    return J(this, void 0, void 0, function* () {
      try {
        return {
          data: {
            path: (yield Z(
              this.fetch,
              `${this.url}/object/copy`,
              { bucketId: this.bucketId, sourceKey: e, destinationKey: t },
              { headers: this.headers }
            )).Key,
          },
          error: null,
        };
      } catch (r) {
        if (D(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  createSignedUrl(e, t, r) {
    return J(this, void 0, void 0, function* () {
      try {
        let n = this._getFinalPath(e),
          s = yield Z(
            this.fetch,
            `${this.url}/object/sign/${n}`,
            Object.assign(
              { expiresIn: t },
              r != null && r.transform ? { transform: r.transform } : {}
            ),
            { headers: this.headers }
          );
        const o =
          r != null && r.download
            ? `&download=${r.download === !0 ? "" : r.download}`
            : "";
        return (
          (s = { signedUrl: encodeURI(`${this.url}${s.signedURL}${o}`) }),
          { data: s, error: null }
        );
      } catch (n) {
        if (D(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  createSignedUrls(e, t, r) {
    return J(this, void 0, void 0, function* () {
      try {
        const n = yield Z(
            this.fetch,
            `${this.url}/object/sign/${this.bucketId}`,
            { expiresIn: t, paths: e },
            { headers: this.headers }
          ),
          s =
            r != null && r.download
              ? `&download=${r.download === !0 ? "" : r.download}`
              : "";
        return {
          data: n.map((o) =>
            Object.assign(Object.assign({}, o), {
              signedUrl: o.signedURL
                ? encodeURI(`${this.url}${o.signedURL}${s}`)
                : null,
            })
          ),
          error: null,
        };
      } catch (n) {
        if (D(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  download(e, t) {
    return J(this, void 0, void 0, function* () {
      const n =
          typeof (t == null ? void 0 : t.transform) < "u"
            ? "render/image/authenticated"
            : "object",
        s = this.transformOptsToQueryString(
          (t == null ? void 0 : t.transform) || {}
        ),
        o = s ? `?${s}` : "";
      try {
        const a = this._getFinalPath(e);
        return {
          data: yield (yield st(this.fetch, `${this.url}/${n}/${a}${o}`, {
            headers: this.headers,
            noResolveJson: !0,
          })).blob(),
          error: null,
        };
      } catch (a) {
        if (D(a)) return { data: null, error: a };
        throw a;
      }
    });
  }
  getPublicUrl(e, t) {
    const r = this._getFinalPath(e),
      n = [],
      s =
        t != null && t.download
          ? `download=${t.download === !0 ? "" : t.download}`
          : "";
    s !== "" && n.push(s);
    const a =
        typeof (t == null ? void 0 : t.transform) < "u"
          ? "render/image"
          : "object",
      l = this.transformOptsToQueryString(
        (t == null ? void 0 : t.transform) || {}
      );
    l !== "" && n.push(l);
    let c = n.join("&");
    return (
      c !== "" && (c = `?${c}`),
      { data: { publicUrl: encodeURI(`${this.url}/${a}/public/${r}${c}`) } }
    );
  }
  remove(e) {
    return J(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Zt(
            this.fetch,
            `${this.url}/object/${this.bucketId}`,
            { prefixes: e },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (t) {
        if (D(t)) return { data: null, error: t };
        throw t;
      }
    });
  }
  list(e, t, r) {
    return J(this, void 0, void 0, function* () {
      try {
        const n = Object.assign(Object.assign(Object.assign({}, zi), t), {
          prefix: e || "",
        });
        return {
          data: yield Z(
            this.fetch,
            `${this.url}/object/list/${this.bucketId}`,
            n,
            { headers: this.headers },
            r
          ),
          error: null,
        };
      } catch (n) {
        if (D(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  _getFinalPath(e) {
    return `${this.bucketId}/${e}`;
  }
  _removeEmptyFolders(e) {
    return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(e) {
    const t = [];
    return (
      e.width && t.push(`width=${e.width}`),
      e.height && t.push(`height=${e.height}`),
      e.resize && t.push(`resize=${e.resize}`),
      e.format && t.push(`format=${e.format}`),
      e.quality && t.push(`quality=${e.quality}`),
      t.join("&")
    );
  }
}
const Ki = "2.5.1",
  Vi = { "X-Client-Info": `storage-js/${Ki}` };
var oe =
  (globalThis && globalThis.__awaiter) ||
  function (i, e, t, r) {
    function n(s) {
      return s instanceof t
        ? s
        : new t(function (o) {
            o(s);
          });
    }
    return new (t || (t = Promise))(function (s, o) {
      function a(h) {
        try {
          c(r.next(h));
        } catch (u) {
          o(u);
        }
      }
      function l(h) {
        try {
          c(r.throw(h));
        } catch (u) {
          o(u);
        }
      }
      function c(h) {
        h.done ? s(h.value) : n(h.value).then(a, l);
      }
      c((r = r.apply(i, e || [])).next());
    });
  };
class Wi {
  constructor(e, t = {}, r) {
    (this.url = e),
      (this.headers = Object.assign(Object.assign({}, Vi), t)),
      (this.fetch = Yt(r));
  }
  listBuckets() {
    return oe(this, void 0, void 0, function* () {
      try {
        return {
          data: yield st(this.fetch, `${this.url}/bucket`, {
            headers: this.headers,
          }),
          error: null,
        };
      } catch (e) {
        if (D(e)) return { data: null, error: e };
        throw e;
      }
    });
  }
  getBucket(e) {
    return oe(this, void 0, void 0, function* () {
      try {
        return {
          data: yield st(this.fetch, `${this.url}/bucket/${e}`, {
            headers: this.headers,
          }),
          error: null,
        };
      } catch (t) {
        if (D(t)) return { data: null, error: t };
        throw t;
      }
    });
  }
  createBucket(e, t = { public: !1 }) {
    return oe(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Z(
            this.fetch,
            `${this.url}/bucket`,
            {
              id: e,
              name: e,
              public: t.public,
              file_size_limit: t.fileSizeLimit,
              allowed_mime_types: t.allowedMimeTypes,
            },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (D(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  updateBucket(e, t) {
    return oe(this, void 0, void 0, function* () {
      try {
        return {
          data: yield qi(
            this.fetch,
            `${this.url}/bucket/${e}`,
            {
              id: e,
              name: e,
              public: t.public,
              file_size_limit: t.fileSizeLimit,
              allowed_mime_types: t.allowedMimeTypes,
            },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (D(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  emptyBucket(e) {
    return oe(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Z(
            this.fetch,
            `${this.url}/bucket/${e}/empty`,
            {},
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (t) {
        if (D(t)) return { data: null, error: t };
        throw t;
      }
    });
  }
  deleteBucket(e) {
    return oe(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Zt(
            this.fetch,
            `${this.url}/bucket/${e}`,
            {},
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (t) {
        if (D(t)) return { data: null, error: t };
        throw t;
      }
    });
  }
}
class Qi extends Wi {
  constructor(e, t = {}, r) {
    super(e, t, r);
  }
  from(e) {
    return new Gi(this.url, this.headers, e, this.fetch);
  }
}
const Xi = "2.26.0",
  Yi = { "X-Client-Info": `supabase-js/${Xi}` };
var Zi =
  (globalThis && globalThis.__awaiter) ||
  function (i, e, t, r) {
    function n(s) {
      return s instanceof t
        ? s
        : new t(function (o) {
            o(s);
          });
    }
    return new (t || (t = Promise))(function (s, o) {
      function a(h) {
        try {
          c(r.next(h));
        } catch (u) {
          o(u);
        }
      }
      function l(h) {
        try {
          c(r.throw(h));
        } catch (u) {
          o(u);
        }
      }
      function c(h) {
        h.done ? s(h.value) : n(h.value).then(a, l);
      }
      c((r = r.apply(i, e || [])).next());
    });
  };
const en = (i) => {
    let e;
    return (
      i ? (e = i) : typeof fetch > "u" ? (e = pt) : (e = fetch),
      (...t) => e(...t)
    );
  },
  tn = () => (typeof Headers > "u" ? ft.Headers : Headers),
  rn = (i, e, t) => {
    const r = en(t),
      n = tn();
    return (s, o) =>
      Zi(void 0, void 0, void 0, function* () {
        var a;
        const l = (a = yield e()) !== null && a !== void 0 ? a : i;
        let c = new n(o == null ? void 0 : o.headers);
        return (
          c.has("apikey") || c.set("apikey", i),
          c.has("Authorization") || c.set("Authorization", `Bearer ${l}`),
          r(s, Object.assign(Object.assign({}, o), { headers: c }))
        );
      });
  };
function nn(i) {
  return i.replace(/\/$/, "");
}
function sn(i, e) {
  const { db: t, auth: r, realtime: n, global: s } = i,
    { db: o, auth: a, realtime: l, global: c } = e;
  return {
    db: Object.assign(Object.assign({}, o), t),
    auth: Object.assign(Object.assign({}, a), r),
    realtime: Object.assign(Object.assign({}, l), n),
    global: Object.assign(Object.assign({}, c), s),
  };
}
var se =
  (globalThis && globalThis.__awaiter) ||
  function (i, e, t, r) {
    function n(s) {
      return s instanceof t
        ? s
        : new t(function (o) {
            o(s);
          });
    }
    return new (t || (t = Promise))(function (s, o) {
      function a(h) {
        try {
          c(r.next(h));
        } catch (u) {
          o(u);
        }
      }
      function l(h) {
        try {
          c(r.throw(h));
        } catch (u) {
          o(u);
        }
      }
      function c(h) {
        h.done ? s(h.value) : n(h.value).then(a, l);
      }
      c((r = r.apply(i, e || [])).next());
    });
  };
function on(i) {
  return Math.round(Date.now() / 1e3) + i;
}
function an() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (i) {
    const e = (Math.random() * 16) | 0;
    return (i == "x" ? e : (e & 3) | 8).toString(16);
  });
}
const Y = () => typeof document < "u",
  ee = { tested: !1, writable: !1 },
  Pe = () => {
    if (!Y()) return !1;
    try {
      if (typeof globalThis.localStorage != "object") return !1;
    } catch {
      return !1;
    }
    if (ee.tested) return ee.writable;
    const i = `lswt-${Math.random()}${Math.random()}`;
    try {
      globalThis.localStorage.setItem(i, i),
        globalThis.localStorage.removeItem(i),
        (ee.tested = !0),
        (ee.writable = !0);
    } catch {
      (ee.tested = !0), (ee.writable = !1);
    }
    return ee.writable;
  };
function N(i, e) {
  var t;
  e ||
    (e =
      ((t = window == null ? void 0 : window.location) === null || t === void 0
        ? void 0
        : t.href) || ""),
    (i = i.replace(/[\[\]]/g, "\\$&"));
  const r = new RegExp("[?&#]" + i + "(=([^&#]*)|&|#|$)"),
    n = r.exec(e);
  return n ? (n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "") : null;
}
const er = (i) => {
    let e;
    return (
      i
        ? (e = i)
        : typeof fetch > "u"
        ? (e = (...t) =>
            se(void 0, void 0, void 0, function* () {
              return yield (yield Le(
                () => Promise.resolve().then(() => Ne),
                void 0,
                import.meta.url
              )).fetch(...t);
            }))
        : (e = fetch),
      (...t) => e(...t)
    );
  },
  ln = (i) =>
    typeof i == "object" &&
    i !== null &&
    "status" in i &&
    "ok" in i &&
    "json" in i &&
    typeof i.json == "function",
  ye = (i, e, t) =>
    se(void 0, void 0, void 0, function* () {
      yield i.setItem(e, JSON.stringify(t));
    }),
  Ee = (i, e) =>
    se(void 0, void 0, void 0, function* () {
      const t = yield i.getItem(e);
      if (!t) return null;
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    }),
  Ke = (i, e) =>
    se(void 0, void 0, void 0, function* () {
      yield i.removeItem(e);
    });
function cn(i) {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let t = "",
    r,
    n,
    s,
    o,
    a,
    l,
    c,
    h = 0;
  for (i = i.replace("-", "+").replace("_", "/"); h < i.length; )
    (o = e.indexOf(i.charAt(h++))),
      (a = e.indexOf(i.charAt(h++))),
      (l = e.indexOf(i.charAt(h++))),
      (c = e.indexOf(i.charAt(h++))),
      (r = (o << 2) | (a >> 4)),
      (n = ((a & 15) << 4) | (l >> 2)),
      (s = ((l & 3) << 6) | c),
      (t = t + String.fromCharCode(r)),
      l != 64 && n != 0 && (t = t + String.fromCharCode(n)),
      c != 64 && s != 0 && (t = t + String.fromCharCode(s));
  return t;
}
class Be {
  constructor() {
    this.promise = new Be.promiseConstructor((e, t) => {
      (this.resolve = e), (this.reject = t);
    });
  }
}
Be.promiseConstructor = Promise;
function It(i) {
  const e = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,
    t = i.split(".");
  if (t.length !== 3) throw new Error("JWT is not valid: not a JWT structure");
  if (!e.test(t[1]))
    throw new Error("JWT is not valid: payload is not in base64url format");
  const r = t[1];
  return JSON.parse(cn(r));
}
function hn(i) {
  return new Promise((e) => {
    setTimeout(() => e(null), i);
  });
}
function un(i, e) {
  return new Promise((r, n) => {
    se(this, void 0, void 0, function* () {
      for (let s = 0; s < 1 / 0; s++)
        try {
          const o = yield i(s);
          if (!e(s, null, o)) {
            r(o);
            return;
          }
        } catch (o) {
          if (!e(s, o)) {
            n(o);
            return;
          }
        }
    });
  });
}
function dn(i) {
  return ("0" + i.toString(16)).substr(-2);
}
function $e() {
  const e = new Uint32Array(56);
  if (typeof crypto > "u") {
    const t =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
      r = t.length;
    let n = "";
    for (let s = 0; s < 56; s++) n += t.charAt(Math.floor(Math.random() * r));
    return n;
  }
  return crypto.getRandomValues(e), Array.from(e, dn).join("");
}
function fn(i) {
  return se(this, void 0, void 0, function* () {
    const t = new TextEncoder().encode(i),
      r = yield crypto.subtle.digest("SHA-256", t),
      n = new Uint8Array(r);
    return Array.from(n)
      .map((s) => String.fromCharCode(s))
      .join("");
  });
}
function pn(i) {
  return btoa(i).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function je(i) {
  return se(this, void 0, void 0, function* () {
    if (typeof crypto > "u")
      return (
        console.warn(
          "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."
        ),
        i
      );
    const e = yield fn(i);
    return pn(e);
  });
}
class yt extends Error {
  constructor(e, t) {
    super(e),
      (this.__isAuthError = !0),
      (this.name = "AuthError"),
      (this.status = t);
  }
}
function k(i) {
  return typeof i == "object" && i !== null && "__isAuthError" in i;
}
class vn extends yt {
  constructor(e, t) {
    super(e, t), (this.name = "AuthApiError"), (this.status = t);
  }
  toJSON() {
    return { name: this.name, message: this.message, status: this.status };
  }
}
function _n(i) {
  return k(i) && i.name === "AuthApiError";
}
class tr extends yt {
  constructor(e, t) {
    super(e), (this.name = "AuthUnknownError"), (this.originalError = t);
  }
}
class pe extends yt {
  constructor(e, t, r) {
    super(e), (this.name = t), (this.status = r);
  }
  toJSON() {
    return { name: this.name, message: this.message, status: this.status };
  }
}
class ae extends pe {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400);
  }
}
class Ve extends pe {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500);
  }
}
class Ae extends pe {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400);
  }
}
class W extends pe {
  constructor(e, t = null) {
    super(e, "AuthImplicitGrantRedirectError", 500),
      (this.details = null),
      (this.details = t);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
class We extends pe {
  constructor(e, t = null) {
    super(e, "AuthPKCEGrantCodeExchangeError", 500),
      (this.details = null),
      (this.details = t);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
class ot extends pe {
  constructor(e, t) {
    super(e, "AuthRetryableFetchError", t);
  }
}
var mt =
    (globalThis && globalThis.__awaiter) ||
    function (i, e, t, r) {
      function n(s) {
        return s instanceof t
          ? s
          : new t(function (o) {
              o(s);
            });
      }
      return new (t || (t = Promise))(function (s, o) {
        function a(h) {
          try {
            c(r.next(h));
          } catch (u) {
            o(u);
          }
        }
        function l(h) {
          try {
            c(r.throw(h));
          } catch (u) {
            o(u);
          }
        }
        function c(h) {
          h.done ? s(h.value) : n(h.value).then(a, l);
        }
        c((r = r.apply(i, e || [])).next());
      });
    },
  yn =
    (globalThis && globalThis.__rest) ||
    function (i, e) {
      var t = {};
      for (var r in i)
        Object.prototype.hasOwnProperty.call(i, r) &&
          e.indexOf(r) < 0 &&
          (t[r] = i[r]);
      if (i != null && typeof Object.getOwnPropertySymbols == "function")
        for (var n = 0, r = Object.getOwnPropertySymbols(i); n < r.length; n++)
          e.indexOf(r[n]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(i, r[n]) &&
            (t[r[n]] = i[r[n]]);
      return t;
    };
const xe = (i) =>
    i.msg || i.message || i.error_description || i.error || JSON.stringify(i),
  mn = (i, e) =>
    mt(void 0, void 0, void 0, function* () {
      const t = [502, 503, 504];
      ln(i)
        ? t.includes(i.status)
          ? e(new ot(xe(i), i.status))
          : i
              .json()
              .then((r) => {
                e(new vn(xe(r), i.status || 500));
              })
              .catch((r) => {
                e(new tr(xe(r), r));
              })
        : e(new ot(xe(i), 0));
    }),
  gn = (i, e, t, r) => {
    const n = { method: i, headers: (e == null ? void 0 : e.headers) || {} };
    return i === "GET"
      ? n
      : ((n.headers = Object.assign(
          { "Content-Type": "application/json;charset=UTF-8" },
          e == null ? void 0 : e.headers
        )),
        (n.body = JSON.stringify(r)),
        Object.assign(Object.assign({}, n), t));
  };
function E(i, e, t, r) {
  var n;
  return mt(this, void 0, void 0, function* () {
    const s = Object.assign({}, r == null ? void 0 : r.headers);
    r != null && r.jwt && (s.Authorization = `Bearer ${r.jwt}`);
    const o =
      (n = r == null ? void 0 : r.query) !== null && n !== void 0 ? n : {};
    r != null && r.redirectTo && (o.redirect_to = r.redirectTo);
    const a = Object.keys(o).length
        ? "?" + new URLSearchParams(o).toString()
        : "",
      l = yield bn(
        i,
        e,
        t + a,
        { headers: s, noResolveJson: r == null ? void 0 : r.noResolveJson },
        {},
        r == null ? void 0 : r.body
      );
    return r != null && r.xform
      ? r == null
        ? void 0
        : r.xform(l)
      : { data: Object.assign({}, l), error: null };
  });
}
function bn(i, e, t, r, n, s) {
  return mt(this, void 0, void 0, function* () {
    return new Promise((o, a) => {
      i(t, gn(e, r, n, s))
        .then((l) => {
          if (!l.ok) throw l;
          return r != null && r.noResolveJson ? l : l.json();
        })
        .then((l) => o(l))
        .catch((l) => mn(l, a));
    });
  });
}
function X(i) {
  var e;
  let t = null;
  On(i) && ((t = Object.assign({}, i)), (t.expires_at = on(i.expires_in)));
  const r = (e = i.user) !== null && e !== void 0 ? e : i;
  return { data: { session: t, user: r }, error: null };
}
function ie(i) {
  var e;
  return {
    data: { user: (e = i.user) !== null && e !== void 0 ? e : i },
    error: null,
  };
}
function wn(i) {
  return { data: i, error: null };
}
function Tn(i) {
  const {
      action_link: e,
      email_otp: t,
      hashed_token: r,
      redirect_to: n,
      verification_type: s,
    } = i,
    o = yn(i, [
      "action_link",
      "email_otp",
      "hashed_token",
      "redirect_to",
      "verification_type",
    ]),
    a = {
      action_link: e,
      email_otp: t,
      hashed_token: r,
      redirect_to: n,
      verification_type: s,
    },
    l = Object.assign({}, o);
  return { data: { properties: a, user: l }, error: null };
}
function Sn(i) {
  return i;
}
function On(i) {
  return i.access_token && i.refresh_token && i.expires_in;
}
var V =
    (globalThis && globalThis.__awaiter) ||
    function (i, e, t, r) {
      function n(s) {
        return s instanceof t
          ? s
          : new t(function (o) {
              o(s);
            });
      }
      return new (t || (t = Promise))(function (s, o) {
        function a(h) {
          try {
            c(r.next(h));
          } catch (u) {
            o(u);
          }
        }
        function l(h) {
          try {
            c(r.throw(h));
          } catch (u) {
            o(u);
          }
        }
        function c(h) {
          h.done ? s(h.value) : n(h.value).then(a, l);
        }
        c((r = r.apply(i, e || [])).next());
      });
    },
  kn =
    (globalThis && globalThis.__rest) ||
    function (i, e) {
      var t = {};
      for (var r in i)
        Object.prototype.hasOwnProperty.call(i, r) &&
          e.indexOf(r) < 0 &&
          (t[r] = i[r]);
      if (i != null && typeof Object.getOwnPropertySymbols == "function")
        for (var n = 0, r = Object.getOwnPropertySymbols(i); n < r.length; n++)
          e.indexOf(r[n]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(i, r[n]) &&
            (t[r[n]] = i[r[n]]);
      return t;
    };
class En {
  constructor({ url: e = "", headers: t = {}, fetch: r }) {
    (this.url = e),
      (this.headers = t),
      (this.fetch = er(r)),
      (this.mfa = {
        listFactors: this._listFactors.bind(this),
        deleteFactor: this._deleteFactor.bind(this),
      });
  }
  signOut(e) {
    return V(this, void 0, void 0, function* () {
      try {
        return (
          yield E(this.fetch, "POST", `${this.url}/logout`, {
            headers: this.headers,
            jwt: e,
            noResolveJson: !0,
          }),
          { data: null, error: null }
        );
      } catch (t) {
        if (k(t)) return { data: null, error: t };
        throw t;
      }
    });
  }
  inviteUserByEmail(e, t = {}) {
    return V(this, void 0, void 0, function* () {
      try {
        return yield E(this.fetch, "POST", `${this.url}/invite`, {
          body: { email: e, data: t.data },
          headers: this.headers,
          redirectTo: t.redirectTo,
          xform: ie,
        });
      } catch (r) {
        if (k(r)) return { data: { user: null }, error: r };
        throw r;
      }
    });
  }
  generateLink(e) {
    return V(this, void 0, void 0, function* () {
      try {
        const { options: t } = e,
          r = kn(e, ["options"]),
          n = Object.assign(Object.assign({}, r), t);
        return (
          "newEmail" in r &&
            ((n.new_email = r == null ? void 0 : r.newEmail),
            delete n.newEmail),
          yield E(this.fetch, "POST", `${this.url}/admin/generate_link`, {
            body: n,
            headers: this.headers,
            xform: Tn,
            redirectTo: t == null ? void 0 : t.redirectTo,
          })
        );
      } catch (t) {
        if (k(t)) return { data: { properties: null, user: null }, error: t };
        throw t;
      }
    });
  }
  createUser(e) {
    return V(this, void 0, void 0, function* () {
      try {
        return yield E(this.fetch, "POST", `${this.url}/admin/users`, {
          body: e,
          headers: this.headers,
          xform: ie,
        });
      } catch (t) {
        if (k(t)) return { data: { user: null }, error: t };
        throw t;
      }
    });
  }
  listUsers(e) {
    var t, r, n, s, o, a, l;
    return V(this, void 0, void 0, function* () {
      try {
        const c = { nextPage: null, lastPage: 0, total: 0 },
          h = yield E(this.fetch, "GET", `${this.url}/admin/users`, {
            headers: this.headers,
            noResolveJson: !0,
            query: {
              page:
                (r =
                  (t = e == null ? void 0 : e.page) === null || t === void 0
                    ? void 0
                    : t.toString()) !== null && r !== void 0
                  ? r
                  : "",
              per_page:
                (s =
                  (n = e == null ? void 0 : e.perPage) === null || n === void 0
                    ? void 0
                    : n.toString()) !== null && s !== void 0
                  ? s
                  : "",
            },
            xform: Sn,
          });
        if (h.error) throw h.error;
        const u = yield h.json(),
          f =
            (o = h.headers.get("x-total-count")) !== null && o !== void 0
              ? o
              : 0,
          p =
            (l =
              (a = h.headers.get("link")) === null || a === void 0
                ? void 0
                : a.split(",")) !== null && l !== void 0
              ? l
              : [];
        return (
          p.length > 0 &&
            (p.forEach((y) => {
              const v = parseInt(y.split(";")[0].split("=")[1].substring(0, 1)),
                _ = JSON.parse(y.split(";")[1].split("=")[1]);
              c[`${_}Page`] = v;
            }),
            (c.total = parseInt(f))),
          { data: Object.assign(Object.assign({}, u), c), error: null }
        );
      } catch (c) {
        if (k(c)) return { data: { users: [] }, error: c };
        throw c;
      }
    });
  }
  getUserById(e) {
    return V(this, void 0, void 0, function* () {
      try {
        return yield E(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
          headers: this.headers,
          xform: ie,
        });
      } catch (t) {
        if (k(t)) return { data: { user: null }, error: t };
        throw t;
      }
    });
  }
  updateUserById(e, t) {
    return V(this, void 0, void 0, function* () {
      try {
        return yield E(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
          body: t,
          headers: this.headers,
          xform: ie,
        });
      } catch (r) {
        if (k(r)) return { data: { user: null }, error: r };
        throw r;
      }
    });
  }
  deleteUser(e, t = !1) {
    return V(this, void 0, void 0, function* () {
      try {
        return yield E(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
          headers: this.headers,
          body: { should_soft_delete: t },
          xform: ie,
        });
      } catch (r) {
        if (k(r)) return { data: { user: null }, error: r };
        throw r;
      }
    });
  }
  _listFactors(e) {
    return V(this, void 0, void 0, function* () {
      try {
        const { data: t, error: r } = yield E(
          this.fetch,
          "GET",
          `${this.url}/admin/users/${e.userId}/factors`,
          {
            headers: this.headers,
            xform: (n) => ({ data: { factors: n }, error: null }),
          }
        );
        return { data: t, error: r };
      } catch (t) {
        if (k(t)) return { data: null, error: t };
        throw t;
      }
    });
  }
  _deleteFactor(e) {
    return V(this, void 0, void 0, function* () {
      try {
        return {
          data: yield E(
            this.fetch,
            "DELETE",
            `${this.url}/admin/users/${e.userId}/factors/${e.id}`,
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (t) {
        if (k(t)) return { data: null, error: t };
        throw t;
      }
    });
  }
}
const $n = "2.31.0",
  jn = "http://localhost:9999",
  An = "supabase.auth.token",
  xn = { "X-Client-Info": `gotrue-js/${$n}` },
  Pn = 10,
  Dt = {
    getItem: (i) => (Pe() ? globalThis.localStorage.getItem(i) : null),
    setItem: (i, e) => {
      Pe() && globalThis.localStorage.setItem(i, e);
    },
    removeItem: (i) => {
      Pe() && globalThis.localStorage.removeItem(i);
    },
  };
function Cn() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: !0,
      }),
        (__magic__.globalThis = __magic__),
        delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
var w =
  (globalThis && globalThis.__awaiter) ||
  function (i, e, t, r) {
    function n(s) {
      return s instanceof t
        ? s
        : new t(function (o) {
            o(s);
          });
    }
    return new (t || (t = Promise))(function (s, o) {
      function a(h) {
        try {
          c(r.next(h));
        } catch (u) {
          o(u);
        }
      }
      function l(h) {
        try {
          c(r.throw(h));
        } catch (u) {
          o(u);
        }
      }
      function c(h) {
        h.done ? s(h.value) : n(h.value).then(a, l);
      }
      c((r = r.apply(i, e || [])).next());
    });
  };
Cn();
const Rn = {
    url: jn,
    storageKey: An,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: xn,
    flowType: "implicit",
  },
  Qe = 30 * 1e3,
  In = 3;
class Dn {
  constructor(e) {
    var t;
    (this.stateChangeEmitters = new Map()),
      (this.autoRefreshTicker = null),
      (this.visibilityChangedCallback = null),
      (this.refreshingDeferred = null),
      (this.initializePromise = null),
      (this.detectSessionInUrl = !0),
      (this.broadcastChannel = null);
    const r = Object.assign(Object.assign({}, Rn), e);
    if (
      ((this.inMemorySession = null),
      (this.storageKey = r.storageKey),
      (this.autoRefreshToken = r.autoRefreshToken),
      (this.persistSession = r.persistSession),
      (this.storage = r.storage || Dt),
      (this.admin = new En({ url: r.url, headers: r.headers, fetch: r.fetch })),
      (this.url = r.url),
      (this.headers = r.headers),
      (this.fetch = er(r.fetch)),
      (this.detectSessionInUrl = r.detectSessionInUrl),
      (this.flowType = r.flowType),
      (this.mfa = {
        verify: this._verify.bind(this),
        enroll: this._enroll.bind(this),
        unenroll: this._unenroll.bind(this),
        challenge: this._challenge.bind(this),
        listFactors: this._listFactors.bind(this),
        challengeAndVerify: this._challengeAndVerify.bind(this),
        getAuthenticatorAssuranceLevel:
          this._getAuthenticatorAssuranceLevel.bind(this),
      }),
      this.persistSession &&
        this.storage === Dt &&
        !Pe() &&
        console.warn(`No storage option exists to persist the session, which may result in unexpected behavior when using auth.
        If you want to set persistSession to true, please provide a storage option or you may set persistSession to false to disable this warning.`),
      Y() &&
        globalThis.BroadcastChannel &&
        this.persistSession &&
        this.storageKey)
    ) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(
          this.storageKey
        );
      } catch (n) {
        console.error(
          "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
          n
        );
      }
      (t = this.broadcastChannel) === null ||
        t === void 0 ||
        t.addEventListener("message", (n) =>
          w(this, void 0, void 0, function* () {
            yield this._notifyAllSubscribers(n.data.event, n.data.session, !1);
          })
        );
    }
    this.initialize();
  }
  initialize() {
    return (
      this.initializePromise || (this.initializePromise = this._initialize()),
      this.initializePromise
    );
  }
  _initialize() {
    return w(this, void 0, void 0, function* () {
      if (this.initializePromise) return this.initializePromise;
      try {
        const e = Y() ? yield this._isPKCEFlow() : !1;
        if (e || (this.detectSessionInUrl && this._isImplicitGrantFlow())) {
          const { data: t, error: r } = yield this._getSessionFromUrl(e);
          if (r) return yield this._removeSession(), { error: r };
          const { session: n, redirectType: s } = t;
          return (
            yield this._saveSession(n),
            setTimeout(
              () =>
                w(this, void 0, void 0, function* () {
                  s === "recovery"
                    ? yield this._notifyAllSubscribers("PASSWORD_RECOVERY", n)
                    : yield this._notifyAllSubscribers("SIGNED_IN", n);
                }),
              0
            ),
            { error: null }
          );
        }
        return yield this._recoverAndRefresh(), { error: null };
      } catch (e) {
        return k(e)
          ? { error: e }
          : { error: new tr("Unexpected error during initialization", e) };
      } finally {
        yield this._handleVisibilityChange();
      }
    });
  }
  signUp(e) {
    var t, r, n;
    return w(this, void 0, void 0, function* () {
      try {
        yield this._removeSession();
        let s;
        if ("email" in e) {
          const { email: h, password: u, options: f } = e;
          let p = null,
            y = null;
          if (this.flowType === "pkce") {
            const v = $e();
            yield ye(this.storage, `${this.storageKey}-code-verifier`, v),
              (p = yield je(v)),
              (y = v === p ? "plain" : "s256");
          }
          s = yield E(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            redirectTo: f == null ? void 0 : f.emailRedirectTo,
            body: {
              email: h,
              password: u,
              data:
                (t = f == null ? void 0 : f.data) !== null && t !== void 0
                  ? t
                  : {},
              gotrue_meta_security: {
                captcha_token: f == null ? void 0 : f.captchaToken,
              },
              code_challenge: p,
              code_challenge_method: y,
            },
            xform: X,
          });
        } else if ("phone" in e) {
          const { phone: h, password: u, options: f } = e;
          s = yield E(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            body: {
              phone: h,
              password: u,
              data:
                (r = f == null ? void 0 : f.data) !== null && r !== void 0
                  ? r
                  : {},
              channel:
                (n = f == null ? void 0 : f.channel) !== null && n !== void 0
                  ? n
                  : "sms",
              gotrue_meta_security: {
                captcha_token: f == null ? void 0 : f.captchaToken,
              },
            },
            xform: X,
          });
        } else
          throw new Ae(
            "You must provide either an email or phone number and a password"
          );
        const { data: o, error: a } = s;
        if (a || !o) return { data: { user: null, session: null }, error: a };
        const l = o.session,
          c = o.user;
        return (
          o.session &&
            (yield this._saveSession(o.session),
            yield this._notifyAllSubscribers("SIGNED_IN", l)),
          { data: { user: c, session: l }, error: null }
        );
      } catch (s) {
        if (k(s)) return { data: { user: null, session: null }, error: s };
        throw s;
      }
    });
  }
  signInWithPassword(e) {
    return w(this, void 0, void 0, function* () {
      try {
        yield this._removeSession();
        let t;
        if ("email" in e) {
          const { email: s, password: o, options: a } = e;
          t = yield E(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=password`,
            {
              headers: this.headers,
              body: {
                email: s,
                password: o,
                gotrue_meta_security: {
                  captcha_token: a == null ? void 0 : a.captchaToken,
                },
              },
              xform: X,
            }
          );
        } else if ("phone" in e) {
          const { phone: s, password: o, options: a } = e;
          t = yield E(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=password`,
            {
              headers: this.headers,
              body: {
                phone: s,
                password: o,
                gotrue_meta_security: {
                  captcha_token: a == null ? void 0 : a.captchaToken,
                },
              },
              xform: X,
            }
          );
        } else
          throw new Ae(
            "You must provide either an email or phone number and a password"
          );
        const { data: r, error: n } = t;
        return n
          ? { data: { user: null, session: null }, error: n }
          : !r || !r.session || !r.user
          ? { data: { user: null, session: null }, error: new Ve() }
          : (r.session &&
              (yield this._saveSession(r.session),
              yield this._notifyAllSubscribers("SIGNED_IN", r.session)),
            { data: { user: r.user, session: r.session }, error: n });
      } catch (t) {
        if (k(t)) return { data: { user: null, session: null }, error: t };
        throw t;
      }
    });
  }
  signInWithOAuth(e) {
    var t, r, n, s;
    return w(this, void 0, void 0, function* () {
      return (
        yield this._removeSession(),
        yield this._handleProviderSignIn(e.provider, {
          redirectTo:
            (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo,
          scopes: (r = e.options) === null || r === void 0 ? void 0 : r.scopes,
          queryParams:
            (n = e.options) === null || n === void 0 ? void 0 : n.queryParams,
          skipBrowserRedirect:
            (s = e.options) === null || s === void 0
              ? void 0
              : s.skipBrowserRedirect,
        })
      );
    });
  }
  exchangeCodeForSession(e) {
    return w(this, void 0, void 0, function* () {
      const t = yield Ee(this.storage, `${this.storageKey}-code-verifier`),
        { data: r, error: n } = yield E(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=pkce`,
          {
            headers: this.headers,
            body: { auth_code: e, code_verifier: t },
            xform: X,
          }
        );
      return (
        yield Ke(this.storage, `${this.storageKey}-code-verifier`),
        n
          ? { data: { user: null, session: null }, error: n }
          : !r || !r.session || !r.user
          ? { data: { user: null, session: null }, error: new Ve() }
          : (r.session &&
              (yield this._saveSession(r.session),
              yield this._notifyAllSubscribers("SIGNED_IN", r.session)),
            { data: r, error: n })
      );
    });
  }
  signInWithIdToken(e) {
    return w(this, void 0, void 0, function* () {
      yield this._removeSession();
      try {
        const { options: t, provider: r, token: n, nonce: s } = e,
          o = yield E(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=id_token`,
            {
              headers: this.headers,
              body: {
                provider: r,
                id_token: n,
                nonce: s,
                gotrue_meta_security: {
                  captcha_token: t == null ? void 0 : t.captchaToken,
                },
              },
              xform: X,
            }
          ),
          { data: a, error: l } = o;
        return l
          ? { data: { user: null, session: null }, error: l }
          : !a || !a.session || !a.user
          ? { data: { user: null, session: null }, error: new Ve() }
          : (a.session &&
              (yield this._saveSession(a.session),
              yield this._notifyAllSubscribers("SIGNED_IN", a.session)),
            { data: a, error: l });
      } catch (t) {
        if (k(t)) return { data: { user: null, session: null }, error: t };
        throw t;
      }
    });
  }
  signInWithOtp(e) {
    var t, r, n, s, o;
    return w(this, void 0, void 0, function* () {
      try {
        if ((yield this._removeSession(), "email" in e)) {
          const { email: a, options: l } = e;
          let c = null,
            h = null;
          if (this.flowType === "pkce") {
            const f = $e();
            yield ye(this.storage, `${this.storageKey}-code-verifier`, f),
              (c = yield je(f)),
              (h = f === c ? "plain" : "s256");
          }
          const { error: u } = yield E(this.fetch, "POST", `${this.url}/otp`, {
            headers: this.headers,
            body: {
              email: a,
              data:
                (t = l == null ? void 0 : l.data) !== null && t !== void 0
                  ? t
                  : {},
              create_user:
                (r = l == null ? void 0 : l.shouldCreateUser) !== null &&
                r !== void 0
                  ? r
                  : !0,
              gotrue_meta_security: {
                captcha_token: l == null ? void 0 : l.captchaToken,
              },
              code_challenge: c,
              code_challenge_method: h,
            },
            redirectTo: l == null ? void 0 : l.emailRedirectTo,
          });
          return { data: { user: null, session: null }, error: u };
        }
        if ("phone" in e) {
          const { phone: a, options: l } = e,
            { data: c, error: h } = yield E(
              this.fetch,
              "POST",
              `${this.url}/otp`,
              {
                headers: this.headers,
                body: {
                  phone: a,
                  data:
                    (n = l == null ? void 0 : l.data) !== null && n !== void 0
                      ? n
                      : {},
                  create_user:
                    (s = l == null ? void 0 : l.shouldCreateUser) !== null &&
                    s !== void 0
                      ? s
                      : !0,
                  gotrue_meta_security: {
                    captcha_token: l == null ? void 0 : l.captchaToken,
                  },
                  channel:
                    (o = l == null ? void 0 : l.channel) !== null &&
                    o !== void 0
                      ? o
                      : "sms",
                },
              }
            );
          return {
            data: {
              user: null,
              session: null,
              messageId: c == null ? void 0 : c.message_id,
            },
            error: h,
          };
        }
        throw new Ae("You must provide either an email or phone number.");
      } catch (a) {
        if (k(a)) return { data: { user: null, session: null }, error: a };
        throw a;
      }
    });
  }
  verifyOtp(e) {
    var t, r;
    return w(this, void 0, void 0, function* () {
      try {
        e.type !== "email_change" &&
          e.type !== "phone_change" &&
          (yield this._removeSession());
        const { data: n, error: s } = yield E(
          this.fetch,
          "POST",
          `${this.url}/verify`,
          {
            headers: this.headers,
            body: Object.assign(Object.assign({}, e), {
              gotrue_meta_security: {
                captcha_token:
                  (t = e.options) === null || t === void 0
                    ? void 0
                    : t.captchaToken,
              },
            }),
            redirectTo:
              (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo,
            xform: X,
          }
        );
        if (s) throw s;
        if (!n) throw new Error("An error occurred on token verification.");
        const o = n.session,
          a = n.user;
        return (
          o != null &&
            o.access_token &&
            (yield this._saveSession(o),
            yield this._notifyAllSubscribers("SIGNED_IN", o)),
          { data: { user: a, session: o }, error: null }
        );
      } catch (n) {
        if (k(n)) return { data: { user: null, session: null }, error: n };
        throw n;
      }
    });
  }
  signInWithSSO(e) {
    var t, r, n;
    return w(this, void 0, void 0, function* () {
      try {
        return (
          yield this._removeSession(),
          yield E(this.fetch, "POST", `${this.url}/sso`, {
            body: Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      {},
                      "providerId" in e ? { provider_id: e.providerId } : null
                    ),
                    "domain" in e ? { domain: e.domain } : null
                  ),
                  {
                    redirect_to:
                      (r =
                        (t = e.options) === null || t === void 0
                          ? void 0
                          : t.redirectTo) !== null && r !== void 0
                        ? r
                        : void 0,
                  }
                ),
                !(
                  (n = e == null ? void 0 : e.options) === null || n === void 0
                ) && n.captchaToken
                  ? {
                      gotrue_meta_security: {
                        captcha_token: e.options.captchaToken,
                      },
                    }
                  : null
              ),
              { skip_http_redirect: !0 }
            ),
            headers: this.headers,
            xform: wn,
          })
        );
      } catch (s) {
        if (k(s)) return { data: null, error: s };
        throw s;
      }
    });
  }
  reauthenticate() {
    return w(this, void 0, void 0, function* () {
      try {
        const {
          data: { session: e },
          error: t,
        } = yield this.getSession();
        if (t) throw t;
        if (!e) throw new ae();
        const { error: r } = yield E(
          this.fetch,
          "GET",
          `${this.url}/reauthenticate`,
          { headers: this.headers, jwt: e.access_token }
        );
        return { data: { user: null, session: null }, error: r };
      } catch (e) {
        if (k(e)) return { data: { user: null, session: null }, error: e };
        throw e;
      }
    });
  }
  resend(e) {
    return w(this, void 0, void 0, function* () {
      try {
        yield this._removeSession();
        const t = `${this.url}/resend`;
        if ("email" in e) {
          const { email: r, type: n, options: s } = e,
            { error: o } = yield E(this.fetch, "POST", t, {
              headers: this.headers,
              body: {
                email: r,
                type: n,
                gotrue_meta_security: {
                  captcha_token: s == null ? void 0 : s.captchaToken,
                },
              },
            });
          return { data: { user: null, session: null }, error: o };
        } else if ("phone" in e) {
          const { phone: r, type: n, options: s } = e,
            { data: o, error: a } = yield E(this.fetch, "POST", t, {
              headers: this.headers,
              body: {
                phone: r,
                type: n,
                gotrue_meta_security: {
                  captcha_token: s == null ? void 0 : s.captchaToken,
                },
              },
            });
          return {
            data: {
              user: null,
              session: null,
              messageId: o == null ? void 0 : o.message_id,
            },
            error: a,
          };
        }
        throw new Ae(
          "You must provide either an email or phone number and a type"
        );
      } catch (t) {
        if (k(t)) return { data: { user: null, session: null }, error: t };
        throw t;
      }
    });
  }
  getSession() {
    return w(this, void 0, void 0, function* () {
      yield this.initializePromise;
      let e = null;
      if (this.persistSession) {
        const s = yield Ee(this.storage, this.storageKey);
        s !== null &&
          (this._isValidSession(s) ? (e = s) : yield this._removeSession());
      } else e = this.inMemorySession;
      if (!e) return { data: { session: null }, error: null };
      if (!(e.expires_at ? e.expires_at <= Date.now() / 1e3 : !1))
        return { data: { session: e }, error: null };
      const { session: r, error: n } = yield this._callRefreshToken(
        e.refresh_token
      );
      return n
        ? { data: { session: null }, error: n }
        : { data: { session: r }, error: null };
    });
  }
  getUser(e) {
    var t, r;
    return w(this, void 0, void 0, function* () {
      try {
        if (!e) {
          const { data: n, error: s } = yield this.getSession();
          if (s) throw s;
          e =
            (r =
              (t = n.session) === null || t === void 0
                ? void 0
                : t.access_token) !== null && r !== void 0
              ? r
              : void 0;
        }
        return yield E(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: e,
          xform: ie,
        });
      } catch (n) {
        if (k(n)) return { data: { user: null }, error: n };
        throw n;
      }
    });
  }
  updateUser(e, t = {}) {
    return w(this, void 0, void 0, function* () {
      try {
        const { data: r, error: n } = yield this.getSession();
        if (n) throw n;
        if (!r.session) throw new ae();
        const s = r.session,
          { data: o, error: a } = yield E(
            this.fetch,
            "PUT",
            `${this.url}/user`,
            {
              headers: this.headers,
              redirectTo: t == null ? void 0 : t.emailRedirectTo,
              body: e,
              jwt: s.access_token,
              xform: ie,
            }
          );
        if (a) throw a;
        return (
          (s.user = o.user),
          yield this._saveSession(s),
          yield this._notifyAllSubscribers("USER_UPDATED", s),
          { data: { user: s.user }, error: null }
        );
      } catch (r) {
        if (k(r)) return { data: { user: null }, error: r };
        throw r;
      }
    });
  }
  _decodeJWT(e) {
    return It(e);
  }
  setSession(e) {
    return w(this, void 0, void 0, function* () {
      try {
        if (!e.access_token || !e.refresh_token) throw new ae();
        const t = Date.now() / 1e3;
        let r = t,
          n = !0,
          s = null;
        const o = It(e.access_token);
        if ((o.exp && ((r = o.exp), (n = r <= t)), n)) {
          const { session: a, error: l } = yield this._callRefreshToken(
            e.refresh_token
          );
          if (l) return { data: { user: null, session: null }, error: l };
          if (!a) return { data: { user: null, session: null }, error: null };
          s = a;
        } else {
          const { data: a, error: l } = yield this.getUser(e.access_token);
          if (l) throw l;
          (s = {
            access_token: e.access_token,
            refresh_token: e.refresh_token,
            user: a.user,
            token_type: "bearer",
            expires_in: r - t,
            expires_at: r,
          }),
            yield this._saveSession(s),
            yield this._notifyAllSubscribers("SIGNED_IN", s);
        }
        return { data: { user: s.user, session: s }, error: null };
      } catch (t) {
        if (k(t)) return { data: { session: null, user: null }, error: t };
        throw t;
      }
    });
  }
  refreshSession(e) {
    var t;
    return w(this, void 0, void 0, function* () {
      try {
        if (!e) {
          const { data: s, error: o } = yield this.getSession();
          if (o) throw o;
          e = (t = s.session) !== null && t !== void 0 ? t : void 0;
        }
        if (!(e != null && e.refresh_token)) throw new ae();
        const { session: r, error: n } = yield this._callRefreshToken(
          e.refresh_token
        );
        return n
          ? { data: { user: null, session: null }, error: n }
          : r
          ? { data: { user: r.user, session: r }, error: null }
          : { data: { user: null, session: null }, error: null };
      } catch (r) {
        if (k(r)) return { data: { user: null, session: null }, error: r };
        throw r;
      }
    });
  }
  _getSessionFromUrl(e) {
    return w(this, void 0, void 0, function* () {
      try {
        if (!Y()) throw new W("No browser detected.");
        if (this.flowType === "implicit" && !this._isImplicitGrantFlow())
          throw new W("Not a valid implicit grant flow url.");
        if (this.flowType == "pkce" && !e)
          throw new We("Not a valid PKCE flow url.");
        if (e) {
          const _ = N("code");
          if (!_) throw new We("No code detected.");
          const { data: g, error: b } = yield this.exchangeCodeForSession(_);
          if (b) throw b;
          if (!g.session) throw new We("No session detected.");
          let O = new URL(window.location.href);
          return (
            O.searchParams.delete("code"),
            window.history.replaceState(window.history.state, "", O.toString()),
            { data: { session: g.session, redirectType: null }, error: null }
          );
        }
        const t = N("error_description");
        if (t) {
          const _ = N("error_code");
          if (!_) throw new W("No error_code detected.");
          const g = N("error");
          throw g
            ? new W(t, { error: g, code: _ })
            : new W("No error detected.");
        }
        const r = N("provider_token"),
          n = N("provider_refresh_token"),
          s = N("access_token");
        if (!s) throw new W("No access_token detected.");
        const o = N("expires_in");
        if (!o) throw new W("No expires_in detected.");
        const a = N("refresh_token");
        if (!a) throw new W("No refresh_token detected.");
        const l = N("token_type");
        if (!l) throw new W("No token_type detected.");
        const h = Math.round(Date.now() / 1e3) + parseInt(o),
          { data: u, error: f } = yield this.getUser(s);
        if (f) throw f;
        const p = u.user,
          y = {
            provider_token: r,
            provider_refresh_token: n,
            access_token: s,
            expires_in: parseInt(o),
            expires_at: h,
            refresh_token: a,
            token_type: l,
            user: p,
          },
          v = N("type");
        return (
          (window.location.hash = ""),
          { data: { session: y, redirectType: v }, error: null }
        );
      } catch (t) {
        if (k(t))
          return { data: { session: null, redirectType: null }, error: t };
        throw t;
      }
    });
  }
  _isImplicitGrantFlow() {
    return Y() && (!!N("access_token") || !!N("error_description"));
  }
  _isPKCEFlow() {
    return w(this, void 0, void 0, function* () {
      const e = yield Ee(this.storage, `${this.storageKey}-code-verifier`);
      return !!N("code") && !!e;
    });
  }
  signOut() {
    var e;
    return w(this, void 0, void 0, function* () {
      const { data: t, error: r } = yield this.getSession();
      if (r) return { error: r };
      const n =
        (e = t.session) === null || e === void 0 ? void 0 : e.access_token;
      if (n) {
        const { error: s } = yield this.admin.signOut(n);
        if (s && !(_n(s) && (s.status === 404 || s.status === 401)))
          return { error: s };
      }
      return (
        yield this._removeSession(),
        yield Ke(this.storage, `${this.storageKey}-code-verifier`),
        yield this._notifyAllSubscribers("SIGNED_OUT", null),
        { error: null }
      );
    });
  }
  onAuthStateChange(e) {
    const t = an(),
      r = {
        id: t,
        callback: e,
        unsubscribe: () => {
          this.stateChangeEmitters.delete(t);
        },
      };
    return (
      this.stateChangeEmitters.set(t, r),
      this.emitInitialSession(t),
      { data: { subscription: r } }
    );
  }
  emitInitialSession(e) {
    var t, r;
    return w(this, void 0, void 0, function* () {
      try {
        const {
          data: { session: n },
          error: s,
        } = yield this.getSession();
        if (s) throw s;
        yield (t = this.stateChangeEmitters.get(e)) === null || t === void 0
          ? void 0
          : t.callback("INITIAL_SESSION", n);
      } catch (n) {
        yield (r = this.stateChangeEmitters.get(e)) === null || r === void 0
          ? void 0
          : r.callback("INITIAL_SESSION", null),
          console.error(n);
      }
    });
  }
  resetPasswordForEmail(e, t = {}) {
    return w(this, void 0, void 0, function* () {
      let r = null,
        n = null;
      if (this.flowType === "pkce") {
        const s = $e();
        yield ye(this.storage, `${this.storageKey}-code-verifier`, s),
          (r = yield je(s)),
          (n = s === r ? "plain" : "s256");
      }
      try {
        return yield E(this.fetch, "POST", `${this.url}/recover`, {
          body: {
            email: e,
            code_challenge: r,
            code_challenge_method: n,
            gotrue_meta_security: { captcha_token: t.captchaToken },
          },
          headers: this.headers,
          redirectTo: t.redirectTo,
        });
      } catch (s) {
        if (k(s)) return { data: null, error: s };
        throw s;
      }
    });
  }
  _refreshAccessToken(e) {
    return w(this, void 0, void 0, function* () {
      try {
        const t = Date.now();
        return yield un(
          (r) =>
            w(this, void 0, void 0, function* () {
              return (
                yield hn(r * 200),
                yield E(
                  this.fetch,
                  "POST",
                  `${this.url}/token?grant_type=refresh_token`,
                  {
                    body: { refresh_token: e },
                    headers: this.headers,
                    xform: X,
                  }
                )
              );
            }),
          (r, n, s) =>
            s &&
            s.error &&
            s.error instanceof ot &&
            Date.now() + (r + 1) * 200 - t < Qe
        );
      } catch (t) {
        if (k(t)) return { data: { session: null, user: null }, error: t };
        throw t;
      }
    });
  }
  _isValidSession(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      "access_token" in e &&
      "refresh_token" in e &&
      "expires_at" in e
    );
  }
  _handleProviderSignIn(e, t) {
    return w(this, void 0, void 0, function* () {
      const r = yield this._getUrlForProvider(e, {
        redirectTo: t.redirectTo,
        scopes: t.scopes,
        queryParams: t.queryParams,
      });
      return (
        Y() && !t.skipBrowserRedirect && window.location.assign(r),
        { data: { provider: e, url: r }, error: null }
      );
    });
  }
  _recoverAndRefresh() {
    var e;
    return w(this, void 0, void 0, function* () {
      try {
        const t = yield Ee(this.storage, this.storageKey);
        if (!this._isValidSession(t)) {
          t !== null && (yield this._removeSession());
          return;
        }
        const r = Math.round(Date.now() / 1e3);
        if (
          ((e = t.expires_at) !== null && e !== void 0 ? e : 1 / 0) <
          r + Pn
        ) {
          if (this.autoRefreshToken && t.refresh_token) {
            const { error: n } = yield this._callRefreshToken(t.refresh_token);
            n && (console.log(n.message), yield this._removeSession());
          }
        } else this.persistSession && (yield this._saveSession(t)), yield this._notifyAllSubscribers("SIGNED_IN", t);
      } catch (t) {
        console.error(t);
        return;
      }
    });
  }
  _callRefreshToken(e) {
    var t, r;
    return w(this, void 0, void 0, function* () {
      if (this.refreshingDeferred) return this.refreshingDeferred.promise;
      try {
        if (((this.refreshingDeferred = new Be()), !e)) throw new ae();
        const { data: n, error: s } = yield this._refreshAccessToken(e);
        if (s) throw s;
        if (!n.session) throw new ae();
        yield this._saveSession(n.session),
          yield this._notifyAllSubscribers("TOKEN_REFRESHED", n.session);
        const o = { session: n.session, error: null };
        return this.refreshingDeferred.resolve(o), o;
      } catch (n) {
        if (k(n)) {
          const s = { session: null, error: n };
          return (
            (t = this.refreshingDeferred) === null ||
              t === void 0 ||
              t.resolve(s),
            s
          );
        }
        throw (
          ((r = this.refreshingDeferred) === null ||
            r === void 0 ||
            r.reject(n),
          n)
        );
      } finally {
        this.refreshingDeferred = null;
      }
    });
  }
  _notifyAllSubscribers(e, t, r = !0) {
    return w(this, void 0, void 0, function* () {
      this.broadcastChannel &&
        r &&
        this.broadcastChannel.postMessage({ event: e, session: t });
      const n = [],
        s = Array.from(this.stateChangeEmitters.values()).map((o) =>
          w(this, void 0, void 0, function* () {
            try {
              yield o.callback(e, t);
            } catch (a) {
              n.push(a);
            }
          })
        );
      if ((yield Promise.all(s), n.length > 0)) {
        for (let o = 0; o < n.length; o += 1) console.error(n[o]);
        throw n[0];
      }
    });
  }
  _saveSession(e) {
    return w(this, void 0, void 0, function* () {
      this.persistSession || (this.inMemorySession = e),
        this.persistSession && e.expires_at && (yield this._persistSession(e));
    });
  }
  _persistSession(e) {
    return ye(this.storage, this.storageKey, e);
  }
  _removeSession() {
    return w(this, void 0, void 0, function* () {
      this.persistSession
        ? yield Ke(this.storage, this.storageKey)
        : (this.inMemorySession = null);
    });
  }
  _removeVisibilityChangedCallback() {
    const e = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      e &&
        Y() &&
        window != null &&
        window.removeEventListener &&
        window.removeEventListener("visibilitychange", e);
    } catch (t) {
      console.error("removing visibilitychange callback failed", t);
    }
  }
  _startAutoRefresh() {
    return w(this, void 0, void 0, function* () {
      yield this._stopAutoRefresh();
      const e = setInterval(() => this._autoRefreshTokenTick(), Qe);
      (this.autoRefreshTicker = e),
        e && typeof e == "object" && typeof e.unref == "function"
          ? e.unref()
          : typeof Deno < "u" &&
            typeof Deno.unrefTimer == "function" &&
            Deno.unrefTimer(e),
        yield this._autoRefreshTokenTick();
    });
  }
  _stopAutoRefresh() {
    return w(this, void 0, void 0, function* () {
      const e = this.autoRefreshTicker;
      (this.autoRefreshTicker = null), e && clearInterval(e);
    });
  }
  startAutoRefresh() {
    return w(this, void 0, void 0, function* () {
      this._removeVisibilityChangedCallback(), yield this._startAutoRefresh();
    });
  }
  stopAutoRefresh() {
    return w(this, void 0, void 0, function* () {
      this._removeVisibilityChangedCallback(), yield this._stopAutoRefresh();
    });
  }
  _autoRefreshTokenTick() {
    return w(this, void 0, void 0, function* () {
      const e = Date.now();
      try {
        const {
          data: { session: t },
        } = yield this.getSession();
        if (!t || !t.refresh_token || !t.expires_at) return;
        Math.floor((t.expires_at * 1e3 - e) / Qe) < In &&
          (yield this._callRefreshToken(t.refresh_token));
      } catch (t) {
        console.error(
          "Auto refresh tick failed with error. This is likely a transient error.",
          t
        );
      }
    });
  }
  _handleVisibilityChange() {
    return w(this, void 0, void 0, function* () {
      if (!Y() || !(window != null && window.addEventListener))
        return this.autoRefreshToken && this.startAutoRefresh(), !1;
      try {
        (this.visibilityChangedCallback = () =>
          w(this, void 0, void 0, function* () {
            return yield this._onVisibilityChanged(!1);
          })),
          window == null ||
            window.addEventListener(
              "visibilitychange",
              this.visibilityChangedCallback
            ),
          yield this._onVisibilityChanged(!0);
      } catch (e) {
        console.error("_handleVisibilityChange", e);
      }
    });
  }
  _onVisibilityChanged(e) {
    return w(this, void 0, void 0, function* () {
      document.visibilityState === "visible"
        ? (e || (yield this.initializePromise, yield this._recoverAndRefresh()),
          this.autoRefreshToken && this._startAutoRefresh())
        : document.visibilityState === "hidden" &&
          this.autoRefreshToken &&
          this._stopAutoRefresh();
    });
  }
  _getUrlForProvider(e, t) {
    return w(this, void 0, void 0, function* () {
      const r = [`provider=${encodeURIComponent(e)}`];
      if (
        (t != null &&
          t.redirectTo &&
          r.push(`redirect_to=${encodeURIComponent(t.redirectTo)}`),
        t != null &&
          t.scopes &&
          r.push(`scopes=${encodeURIComponent(t.scopes)}`),
        this.flowType === "pkce")
      ) {
        const n = $e();
        yield ye(this.storage, `${this.storageKey}-code-verifier`, n);
        const s = yield je(n),
          o = n === s ? "plain" : "s256",
          a = new URLSearchParams({
            code_challenge: `${encodeURIComponent(s)}`,
            code_challenge_method: `${encodeURIComponent(o)}`,
          });
        r.push(a.toString());
      }
      if (t != null && t.queryParams) {
        const n = new URLSearchParams(t.queryParams);
        r.push(n.toString());
      }
      return `${this.url}/authorize?${r.join("&")}`;
    });
  }
  _unenroll(e) {
    var t;
    return w(this, void 0, void 0, function* () {
      try {
        const { data: r, error: n } = yield this.getSession();
        return n
          ? { data: null, error: n }
          : yield E(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
              headers: this.headers,
              jwt:
                (t = r == null ? void 0 : r.session) === null || t === void 0
                  ? void 0
                  : t.access_token,
            });
      } catch (r) {
        if (k(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  _enroll(e) {
    var t, r;
    return w(this, void 0, void 0, function* () {
      try {
        const { data: n, error: s } = yield this.getSession();
        if (s) return { data: null, error: s };
        const { data: o, error: a } = yield E(
          this.fetch,
          "POST",
          `${this.url}/factors`,
          {
            body: {
              friendly_name: e.friendlyName,
              factor_type: e.factorType,
              issuer: e.issuer,
            },
            headers: this.headers,
            jwt:
              (t = n == null ? void 0 : n.session) === null || t === void 0
                ? void 0
                : t.access_token,
          }
        );
        return a
          ? { data: null, error: a }
          : (!((r = o == null ? void 0 : o.totp) === null || r === void 0) &&
              r.qr_code &&
              (o.totp.qr_code = `data:image/svg+xml;utf-8,${o.totp.qr_code}`),
            { data: o, error: null });
      } catch (n) {
        if (k(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  _verify(e) {
    var t;
    return w(this, void 0, void 0, function* () {
      try {
        const { data: r, error: n } = yield this.getSession();
        if (n) return { data: null, error: n };
        const { data: s, error: o } = yield E(
          this.fetch,
          "POST",
          `${this.url}/factors/${e.factorId}/verify`,
          {
            body: { code: e.code, challenge_id: e.challengeId },
            headers: this.headers,
            jwt:
              (t = r == null ? void 0 : r.session) === null || t === void 0
                ? void 0
                : t.access_token,
          }
        );
        return o
          ? { data: null, error: o }
          : (yield this._saveSession(
              Object.assign(
                { expires_at: Math.round(Date.now() / 1e3) + s.expires_in },
                s
              )
            ),
            yield this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", s),
            { data: s, error: o });
      } catch (r) {
        if (k(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  _challenge(e) {
    var t;
    return w(this, void 0, void 0, function* () {
      try {
        const { data: r, error: n } = yield this.getSession();
        return n
          ? { data: null, error: n }
          : yield E(
              this.fetch,
              "POST",
              `${this.url}/factors/${e.factorId}/challenge`,
              {
                headers: this.headers,
                jwt:
                  (t = r == null ? void 0 : r.session) === null || t === void 0
                    ? void 0
                    : t.access_token,
              }
            );
      } catch (r) {
        if (k(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  _challengeAndVerify(e) {
    return w(this, void 0, void 0, function* () {
      const { data: t, error: r } = yield this._challenge({
        factorId: e.factorId,
      });
      return r
        ? { data: null, error: r }
        : yield this._verify({
            factorId: e.factorId,
            challengeId: t.id,
            code: e.code,
          });
    });
  }
  _listFactors() {
    return w(this, void 0, void 0, function* () {
      const {
        data: { user: e },
        error: t,
      } = yield this.getUser();
      if (t) return { data: null, error: t };
      const r = (e == null ? void 0 : e.factors) || [],
        n = r.filter(
          (s) => s.factor_type === "totp" && s.status === "verified"
        );
      return { data: { all: r, totp: n }, error: null };
    });
  }
  _getAuthenticatorAssuranceLevel() {
    var e, t;
    return w(this, void 0, void 0, function* () {
      const {
        data: { session: r },
        error: n,
      } = yield this.getSession();
      if (n) return { data: null, error: n };
      if (!r)
        return {
          data: {
            currentLevel: null,
            nextLevel: null,
            currentAuthenticationMethods: [],
          },
          error: null,
        };
      const s = this._decodeJWT(r.access_token);
      let o = null;
      s.aal && (o = s.aal);
      let a = o;
      ((t =
        (e = r.user.factors) === null || e === void 0
          ? void 0
          : e.filter((h) => h.status === "verified")) !== null && t !== void 0
        ? t
        : []
      ).length > 0 && (a = "aal2");
      const c = s.amr || [];
      return {
        data: {
          currentLevel: o,
          nextLevel: a,
          currentAuthenticationMethods: c,
        },
        error: null,
      };
    });
  }
}
class Un extends Dn {
  constructor(e) {
    super(e);
  }
}
var Ln =
  (globalThis && globalThis.__awaiter) ||
  function (i, e, t, r) {
    function n(s) {
      return s instanceof t
        ? s
        : new t(function (o) {
            o(s);
          });
    }
    return new (t || (t = Promise))(function (s, o) {
      function a(h) {
        try {
          c(r.next(h));
        } catch (u) {
          o(u);
        }
      }
      function l(h) {
        try {
          c(r.throw(h));
        } catch (u) {
          o(u);
        }
      }
      function c(h) {
        h.done ? s(h.value) : n(h.value).then(a, l);
      }
      c((r = r.apply(i, e || [])).next());
    });
  };
const Nn = { headers: Yi },
  Fn = { schema: "public" },
  Bn = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit",
  },
  Mn = {};
class Hn {
  constructor(e, t, r) {
    var n, s, o, a, l, c, h, u;
    if (((this.supabaseUrl = e), (this.supabaseKey = t), !e))
      throw new Error("supabaseUrl is required.");
    if (!t) throw new Error("supabaseKey is required.");
    const f = nn(e);
    (this.realtimeUrl = `${f}/realtime/v1`.replace(/^http/i, "ws")),
      (this.authUrl = `${f}/auth/v1`),
      (this.storageUrl = `${f}/storage/v1`),
      (this.functionsUrl = `${f}/functions/v1`);
    const p = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,
      y = {
        db: Fn,
        realtime: Mn,
        auth: Object.assign(Object.assign({}, Bn), { storageKey: p }),
        global: Nn,
      },
      v = sn(r ?? {}, y);
    (this.storageKey =
      (s = (n = v.auth) === null || n === void 0 ? void 0 : n.storageKey) !==
        null && s !== void 0
        ? s
        : ""),
      (this.headers =
        (a = (o = v.global) === null || o === void 0 ? void 0 : o.headers) !==
          null && a !== void 0
          ? a
          : {}),
      (this.auth = this._initSupabaseAuthClient(
        (l = v.auth) !== null && l !== void 0 ? l : {},
        this.headers,
        (c = v.global) === null || c === void 0 ? void 0 : c.fetch
      )),
      (this.fetch = rn(
        t,
        this._getAccessToken.bind(this),
        (h = v.global) === null || h === void 0 ? void 0 : h.fetch
      )),
      (this.realtime = this._initRealtimeClient(
        Object.assign({ headers: this.headers }, v.realtime)
      )),
      (this.rest = new ni(`${f}/rest/v1`, {
        headers: this.headers,
        schema: (u = v.db) === null || u === void 0 ? void 0 : u.schema,
        fetch: this.fetch,
      })),
      this._listenForAuthEvents();
  }
  get functions() {
    return new Yr(this.functionsUrl, {
      headers: this.headers,
      customFetch: this.fetch,
    });
  }
  get storage() {
    return new Qi(this.storageUrl, this.headers, this.fetch);
  }
  from(e) {
    return this.rest.from(e);
  }
  rpc(e, t = {}, r) {
    return this.rest.rpc(e, t, r);
  }
  channel(e, t = { config: {} }) {
    return this.realtime.channel(e, t);
  }
  getChannels() {
    return this.realtime.getChannels();
  }
  removeChannel(e) {
    return this.realtime.removeChannel(e);
  }
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  _getAccessToken() {
    var e, t;
    return Ln(this, void 0, void 0, function* () {
      const { data: r } = yield this.auth.getSession();
      return (t =
        (e = r.session) === null || e === void 0 ? void 0 : e.access_token) !==
        null && t !== void 0
        ? t
        : null;
    });
  }
  _initSupabaseAuthClient(
    {
      autoRefreshToken: e,
      persistSession: t,
      detectSessionInUrl: r,
      storage: n,
      storageKey: s,
      flowType: o,
    },
    a,
    l
  ) {
    const c = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`,
    };
    return new Un({
      url: this.authUrl,
      headers: Object.assign(Object.assign({}, c), a),
      storageKey: s,
      autoRefreshToken: e,
      persistSession: t,
      detectSessionInUrl: r,
      storage: n,
      flowType: o,
      fetch: l,
    });
  }
  _initRealtimeClient(e) {
    return new Fi(
      this.realtimeUrl,
      Object.assign(Object.assign({}, e), {
        params: Object.assign(
          { apikey: this.supabaseKey },
          e == null ? void 0 : e.params
        ),
      })
    );
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((t, r) => {
      this._handleTokenChanged(
        t,
        "CLIENT",
        r == null ? void 0 : r.access_token
      );
    });
  }
  _handleTokenChanged(e, t, r) {
    (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") &&
    this.changedAccessToken !== r
      ? (this.realtime.setAuth(r ?? null), (this.changedAccessToken = r))
      : e === "SIGNED_OUT" &&
        (this.realtime.setAuth(this.supabaseKey),
        t == "STORAGE" && this.auth.signOut(),
        (this.changedAccessToken = void 0));
  }
}
const Jn = (i, e, t) => new Hn(i, e, t);
var qn = Object.create,
  rr = Object.defineProperty,
  zn = Object.getOwnPropertyDescriptor,
  ir = Object.getOwnPropertyNames,
  Gn = Object.getPrototypeOf,
  Kn = Object.prototype.hasOwnProperty,
  Vn = (i, e) =>
    function () {
      return e || (0, i[ir(i)[0]])((e = { exports: {} }).exports, e), e.exports;
    },
  Wn = (i, e, t, r) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let n of ir(e))
        !Kn.call(i, n) &&
          n !== t &&
          rr(i, n, {
            get: () => e[n],
            enumerable: !(r = zn(e, n)) || r.enumerable,
          });
    return i;
  },
  nr = (i, e, t) => (
    (t = i != null ? qn(Gn(i)) : {}),
    Wn(
      e || !i || !i.__esModule
        ? rr(t, "default", { value: i, enumerable: !0 })
        : t,
      i
    )
  ),
  sr = Vn({
    "../../node_modules/.pnpm/cookie@0.5.0/node_modules/cookie/index.js"(i) {
      (i.parse = r), (i.serialize = n);
      var e = Object.prototype.toString,
        t = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
      function r(c, h) {
        if (typeof c != "string")
          throw new TypeError("argument str must be a string");
        for (
          var u = {}, f = h || {}, p = f.decode || s, y = 0;
          y < c.length;

        ) {
          var v = c.indexOf("=", y);
          if (v === -1) break;
          var _ = c.indexOf(";", y);
          if (_ === -1) _ = c.length;
          else if (_ < v) {
            y = c.lastIndexOf(";", v - 1) + 1;
            continue;
          }
          var g = c.slice(y, v).trim();
          if (u[g] === void 0) {
            var b = c.slice(v + 1, _).trim();
            b.charCodeAt(0) === 34 && (b = b.slice(1, -1)), (u[g] = l(b, p));
          }
          y = _ + 1;
        }
        return u;
      }
      function n(c, h, u) {
        var f = u || {},
          p = f.encode || o;
        if (typeof p != "function")
          throw new TypeError("option encode is invalid");
        if (!t.test(c)) throw new TypeError("argument name is invalid");
        var y = p(h);
        if (y && !t.test(y)) throw new TypeError("argument val is invalid");
        var v = c + "=" + y;
        if (f.maxAge != null) {
          var _ = f.maxAge - 0;
          if (isNaN(_) || !isFinite(_))
            throw new TypeError("option maxAge is invalid");
          v += "; Max-Age=" + Math.floor(_);
        }
        if (f.domain) {
          if (!t.test(f.domain))
            throw new TypeError("option domain is invalid");
          v += "; Domain=" + f.domain;
        }
        if (f.path) {
          if (!t.test(f.path)) throw new TypeError("option path is invalid");
          v += "; Path=" + f.path;
        }
        if (f.expires) {
          var g = f.expires;
          if (!a(g) || isNaN(g.valueOf()))
            throw new TypeError("option expires is invalid");
          v += "; Expires=" + g.toUTCString();
        }
        if (
          (f.httpOnly && (v += "; HttpOnly"),
          f.secure && (v += "; Secure"),
          f.priority)
        ) {
          var b =
            typeof f.priority == "string"
              ? f.priority.toLowerCase()
              : f.priority;
          switch (b) {
            case "low":
              v += "; Priority=Low";
              break;
            case "medium":
              v += "; Priority=Medium";
              break;
            case "high":
              v += "; Priority=High";
              break;
            default:
              throw new TypeError("option priority is invalid");
          }
        }
        if (f.sameSite) {
          var O =
            typeof f.sameSite == "string"
              ? f.sameSite.toLowerCase()
              : f.sameSite;
          switch (O) {
            case !0:
              v += "; SameSite=Strict";
              break;
            case "lax":
              v += "; SameSite=Lax";
              break;
            case "strict":
              v += "; SameSite=Strict";
              break;
            case "none":
              v += "; SameSite=None";
              break;
            default:
              throw new TypeError("option sameSite is invalid");
          }
        }
        return v;
      }
      function s(c) {
        return c.indexOf("%") !== -1 ? decodeURIComponent(c) : c;
      }
      function o(c) {
        return encodeURIComponent(c);
      }
      function a(c) {
        return e.call(c) === "[object Date]" || c instanceof Date;
      }
      function l(c, h) {
        try {
          return h(c);
        } catch {
          return c;
        }
      }
    },
  }),
  Xe = nr(sr()),
  or = nr(sr());
function Qn(i) {
  if (!i) return null;
  try {
    const e = JSON.parse(i);
    if (!e) return null;
    if (e.constructor.name === "Object") return e;
    if (e.constructor.name !== "Array")
      throw new Error(`Unexpected format: ${e.constructor.name}`);
    const [t, r, n] = e[0].split("."),
      s = zr(r),
      o = new TextDecoder(),
      { exp: a, sub: l, ...c } = JSON.parse(o.decode(s));
    return {
      expires_at: a,
      expires_in: a - Math.round(Date.now() / 1e3),
      token_type: "bearer",
      access_token: e[0],
      refresh_token: e[1],
      provider_token: e[2],
      provider_refresh_token: e[3],
      user: { id: l, factors: e[4], ...c },
    };
  } catch (e) {
    return console.warn("Failed to parse cookie string:", e), null;
  }
}
function Xn(i) {
  var e;
  return JSON.stringify([
    i.access_token,
    i.refresh_token,
    i.provider_token,
    i.provider_refresh_token,
    ((e = i.user) == null ? void 0 : e.factors) ?? null,
  ]);
}
function de() {
  return typeof window < "u" && typeof window.document < "u";
}
var Yn = { path: "/", maxAge: 60 * 60 * 24 * 365 * 1e3 },
  Zn = class {
    constructor(i) {
      this.cookieOptions = { ...Yn, ...i };
    }
    getItem(i) {
      const e = this.getCookie(i);
      return e
        ? i.endsWith("-code-verifier")
          ? e
          : JSON.stringify(Qn(e))
        : null;
    }
    setItem(i, e) {
      if (i.endsWith("-code-verifier")) {
        this.setCookie(i, e);
        return;
      }
      let t = JSON.parse(e);
      const r = Xn(t);
      this.setCookie(i, r);
    }
    removeItem(i) {
      this.deleteCookie(i);
    }
  },
  es = class extends Zn {
    constructor(i) {
      super(i);
    }
    getCookie(i) {
      return de() ? (0, Xe.parse)(document.cookie)[i] : null;
    }
    setCookie(i, e) {
      if (!de()) return null;
      document.cookie = (0, Xe.serialize)(i, e, {
        ...this.cookieOptions,
        httpOnly: !1,
      });
    }
    deleteCookie(i) {
      if (!de()) return null;
      document.cookie = (0, Xe.serialize)(i, "", {
        ...this.cookieOptions,
        maxAge: 0,
        httpOnly: !1,
      });
    }
  };
function ts(i, e, t) {
  var r;
  const n = de();
  return Jn(i, e, {
    ...t,
    auth: {
      flowType: "pkce",
      autoRefreshToken: n,
      detectSessionInUrl: n,
      persistSession: !0,
      storage: t.auth.storage,
      ...((r = t.auth) != null && r.storageKey
        ? { storageKey: t.auth.storageKey }
        : {}),
    },
  });
}
or.parse;
or.serialize;
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ var rs = class extends es {
    constructor(i = null, e) {
      super(e), (this.serverSession = i);
    }
    getItem(i) {
      return de() ? super.getItem(i) : JSON.stringify(this.serverSession);
    }
  },
  Ye;
function is({
  supabaseUrl: i,
  supabaseKey: e,
  event: t,
  serverSession: r,
  options: n,
  cookieOptions: s,
}) {
  var o;
  const a = de();
  if (a && Ye) return Ye;
  const l = ts(i, e, {
    ...n,
    global: {
      fetch: t.fetch,
      ...(n == null ? void 0 : n.global),
      headers: {
        ...((o = n == null ? void 0 : n.global) == null ? void 0 : o.headers),
        "X-Client-Info": "@supabase/auth-helpers-sveltekit@0.10.1",
      },
    },
    auth: { storageKey: s == null ? void 0 : s.name, storage: new rs(r, s) },
  });
  return a && (Ye = l), l;
}
const ns = async ({ fetch: i, data: e, depends: t, url: r }) => {
    t("supabase:auth");
    const n = is({
        supabaseUrl: cr,
        supabaseKey: hr,
        event: { fetch: i },
        serverSession: e.session,
      }),
      {
        data: { session: s },
      } = await n.auth.getSession();
    return {
      supabase: n,
      session: s,
      role: e.role,
      user_metadata: e.user_metadata,
    };
  },
  Is = Object.freeze(
    Object.defineProperty({ __proto__: null, load: ns }, Symbol.toStringTag, {
      value: "Module",
    })
  );
function ss(i, { from: e, to: t }, r = {}) {
  const n = getComputedStyle(i),
    s = n.transform === "none" ? "" : n.transform,
    [o, a] = n.transformOrigin.split(" ").map(parseFloat),
    l = e.left + (e.width * o) / t.width - (t.left + o),
    c = e.top + (e.height * a) / t.height - (t.top + a),
    {
      delay: h = 0,
      duration: u = (p) => Math.sqrt(p) * 120,
      easing: f = Cr,
    } = r;
  return {
    delay: h,
    duration: yr(u) ? u(Math.sqrt(l * l + c * c)) : u,
    easing: f,
    css: (p, y) => {
      const v = y * l,
        _ = y * c,
        g = p + (y * e.width) / t.width,
        b = p + (y * e.height) / t.height;
      return `transform: ${s} translate(${v}px, ${_}px) scale(${g}, ${b});`;
    },
  };
}
function Ut(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function at(i, e) {
  if (i === e || i !== i) return () => i;
  const t = typeof i;
  if (t !== typeof e || Array.isArray(i) !== Array.isArray(e))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(i)) {
    const r = e.map((n, s) => at(i[s], n));
    return (n) => r.map((s) => s(n));
  }
  if (t === "object") {
    if (!i || !e) throw new Error("Object cannot be null");
    if (Ut(i) && Ut(e)) {
      (i = i.getTime()), (e = e.getTime());
      const s = e - i;
      return (o) => new Date(i + o * s);
    }
    const r = Object.keys(e),
      n = {};
    return (
      r.forEach((s) => {
        n[s] = at(i[s], e[s]);
      }),
      (s) => {
        const o = {};
        return (
          r.forEach((a) => {
            o[a] = n[a](s);
          }),
          o
        );
      }
    );
  }
  if (t === "number") {
    const r = e - i;
    return (n) => i + n * r;
  }
  throw new Error(`Cannot interpolate ${t} values`);
}
function os(i, e = {}) {
  const t = Lr(i);
  let r,
    n = i;
  function s(o, a) {
    if (i == null) return t.set((i = o)), Promise.resolve();
    n = o;
    let l = r,
      c = !1,
      {
        delay: h = 0,
        duration: u = 400,
        easing: f = ht,
        interpolate: p = at,
      } = et(et({}, e), a);
    if (u === 0)
      return l && (l.abort(), (l = null)), t.set((i = n)), Promise.resolve();
    const y = Mt() + h;
    let v;
    return (
      (r = Ht((_) => {
        if (_ < y) return !0;
        c || ((v = p(i, o)), typeof u == "function" && (u = u(i, o)), (c = !0)),
          l && (l.abort(), (l = null));
        const g = _ - y;
        return g > u ? (t.set((i = o)), !1) : (t.set((i = v(f(g / u)))), !0);
      })),
      r.promise
    );
  }
  return { set: s, update: (o, a) => s(o(n, i), a), subscribe: t.subscribe };
}
function as(i) {
  let e = Ot(i[0].msg) + "",
    t;
  return {
    c() {
      t = gr(e);
    },
    l(r) {
      t = br(r, e);
    },
    m(r, n) {
      Q(r, t, n);
    },
    p(r, n) {
      n & 1 && e !== (e = Ot(r[0].msg) + "") && wr(t, e);
    },
    i: ne,
    o: ne,
    d(r) {
      r && x(t);
    },
  };
}
function ls(i) {
  let e, t, r;
  const n = [i[2]];
  var s = i[0].component.src;
  function o(a) {
    let l = {};
    for (let c = 0; c < n.length; c += 1) l = et(l, n[c]);
    return { props: l };
  }
  return (
    s && (e = bt(s, o())),
    {
      c() {
        e && we(e.$$.fragment), (t = De());
      },
      l(a) {
        e && Ue(e.$$.fragment, a), (t = De());
      },
      m(a, l) {
        e && Te(e, a, l), Q(a, t, l), (r = !0);
      },
      p(a, l) {
        const c = l & 4 ? Dr(n, [Ur(a[2])]) : {};
        if (l & 1 && s !== (s = a[0].component.src)) {
          if (e) {
            Ce();
            const h = e;
            G(h.$$.fragment, 1, 0, () => {
              Se(h, 1);
            }),
              Re();
          }
          s
            ? ((e = bt(s, o())),
              we(e.$$.fragment),
              q(e.$$.fragment, 1),
              Te(e, t.parentNode, t))
            : (e = null);
        } else s && e.$set(c);
      },
      i(a) {
        r || (e && q(e.$$.fragment, a), (r = !0));
      },
      o(a) {
        e && G(e.$$.fragment, a), (r = !1);
      },
      d(a) {
        a && x(t), e && Se(e, a);
      },
    }
  );
}
function Lt(i) {
  let e, t, r, n, s;
  return (
    (t = new Nr({ props: { icon: "mdi:close", class: "h-5 w-5" } })),
    {
      c() {
        (e = M("div")), we(t.$$.fragment), this.h();
      },
      l(o) {
        e = H(o, "DIV", { class: !0, role: !0, tabindex: !0 });
        var a = he(e);
        Ue(t.$$.fragment, a), a.forEach(x), this.h();
      },
      h() {
        P(e, "class", "btn-error btn-ghost btn-sm btn z-10"),
          P(e, "role", "button"),
          P(e, "tabindex", "0");
      },
      m(o, a) {
        Q(o, e, a),
          Te(t, e, null),
          (r = !0),
          n || ((s = [Ie(e, "click", i[4]), Ie(e, "keydown", i[8])]), (n = !0));
      },
      p: ne,
      i(o) {
        r || (q(t.$$.fragment, o), (r = !0));
      },
      o(o) {
        G(t.$$.fragment, o), (r = !1);
      },
      d(o) {
        o && x(e), Se(t), (n = !1), Jt(s);
      },
    }
  );
}
function cs(i) {
  let e, t, r, n, s, o, a, l, c, h, u;
  const f = [ls, as],
    p = [];
  function y(_, g) {
    return _[0].component ? 0 : 1;
  }
  (s = y(i)), (o = p[s] = f[s](i));
  let v = i[0].dismissable && Lt(i);
  return {
    c() {
      (e = M("div")),
        (t = M("span")),
        (r = ce()),
        (n = M("div")),
        o.c(),
        (a = ce()),
        v && v.c(),
        this.h();
    },
    l(_) {
      e = H(_, "DIV", { role: !0, class: !0 });
      var g = he(e);
      (t = H(g, "SPAN", { class: !0 })),
        he(t).forEach(x),
        (r = ue(g)),
        (n = H(g, "DIV", { class: !0 }));
      var b = he(n);
      o.l(b), b.forEach(x), (a = ue(g)), v && v.l(g), g.forEach(x), this.h();
    },
    h() {
      P(t, "class", "pe svelte-3nrzo"),
        gt(t, "--progress", i[1]),
        P(n, "class", "p-1 text-sm"),
        P(e, "role", "status"),
        P(
          e,
          "class",
          (l =
            "alert alert-" +
            i[0].type +
            " relative max-w-sm flex-col p-4 align-middle shadow-lg svelte-3nrzo")
        );
    },
    m(_, g) {
      Q(_, e, g),
        B(e, t),
        B(e, r),
        B(e, n),
        p[s].m(n, null),
        B(e, a),
        v && v.m(e, null),
        (c = !0),
        h ||
          ((u = [Ie(e, "mouseenter", i[9]), Ie(e, "mouseleave", i[6])]),
          (h = !0));
    },
    p(_, [g]) {
      g & 2 && gt(t, "--progress", _[1]);
      let b = s;
      (s = y(_)),
        s === b
          ? p[s].p(_, g)
          : (Ce(),
            G(p[b], 1, 1, () => {
              p[b] = null;
            }),
            Re(),
            (o = p[s]),
            o ? o.p(_, g) : ((o = p[s] = f[s](_)), o.c()),
            q(o, 1),
            o.m(n, null)),
        _[0].dismissable
          ? v
            ? (v.p(_, g), g & 1 && q(v, 1))
            : ((v = Lt(_)), v.c(), q(v, 1), v.m(e, null))
          : v &&
            (Ce(),
            G(v, 1, 1, () => {
              v = null;
            }),
            Re()),
        (!c ||
          (g & 1 &&
            l !==
              (l =
                "alert alert-" +
                _[0].type +
                " relative max-w-sm flex-col p-4 align-middle shadow-lg svelte-3nrzo"))) &&
          P(e, "class", l);
    },
    i(_) {
      c || (q(o), q(v), (c = !0));
    },
    o(_) {
      G(o), G(v), (c = !1);
    },
    d(_) {
      _ && x(e), p[s].d(), v && v.d(), (h = !1), Jt(u);
    },
  };
}
function Ze(i, e = "undefined") {
  return typeof i === e;
}
function hs(i, e, t) {
  let r,
    { item: n } = e,
    s = n.initial,
    o = s,
    a = !1,
    l = {},
    c;
  const h = os(n.initial, { duration: n.duration, easing: ht });
  qt(i, h, (b) => t(1, (r = b)));
  function u() {
    tt.pop(n.id);
  }
  function f() {
    (r === 1 || r === 0) && u();
  }
  function p() {
    !a && r !== s && (h.set(r, { duration: 0 }), (a = !0));
  }
  function y() {
    if (a) {
      const b = n.duration,
        O = b - b * ((r - o) / (s - o));
      h.set(s, { duration: O }).then(f), (a = !1);
    }
  }
  function v(b = document) {
    if (Ze(b.hidden)) return;
    const O = () => (b.hidden ? p() : y()),
      A = "visibilitychange";
    b.addEventListener(A, O), (c = () => b.removeEventListener(A, O)), O();
  }
  zt(v),
    mr(() => {
      Ze(n.onpop, "function") && n.onpop(n.id), c && c();
    });
  const _ = (b) => {
      b instanceof KeyboardEvent && ["Enter", " "].includes(b.key) && u();
    },
    g = () => {
      n.pausable && p();
    };
  return (
    (i.$$set = (b) => {
      "item" in b && t(0, (n = b.item));
    }),
    (i.$$.update = () => {
      if (
        (i.$$.dirty & 1 && (Ze(n.progress) || t(0, (n.next = n.progress), n)),
        i.$$.dirty & 131 &&
          s !== n.next &&
          (t(7, (s = n.next)), (o = r), (a = !1), h.set(s).then(f)),
        i.$$.dirty & 1 && n.component)
      ) {
        const { props: b = {}, sendIdTo: O } = n.component;
        t(2, (l = { ...b, ...(O && { [O]: n.id }) }));
      }
    }),
    [n, r, l, h, u, p, y, s, _, g]
  );
}
class us extends lt {
  constructor(e) {
    super(), ct(this, e, hs, cs, ut, { item: 0 });
  }
}
function Nt(i, e, t) {
  const r = i.slice();
  return (r[4] = e[t]), r;
}
function Ft(i, e) {
  let t,
    r,
    n,
    s,
    o,
    a,
    l,
    c,
    h = ne,
    u;
  return (
    (r = new us({ props: { item: e[4] } })),
    {
      key: i,
      first: null,
      c() {
        (t = M("li")), we(r.$$.fragment), (n = ce()), this.h();
      },
      l(f) {
        t = H(f, "LI", { class: !0, style: !0 });
        var p = he(t);
        Ue(r.$$.fragment, p), (n = ue(p)), p.forEach(x), this.h();
      },
      h() {
        var f;
        P(t, "class", (s = (f = e[4].classes) == null ? void 0 : f.join(" "))),
          P(t, "style", (o = Bt(e[4].theme))),
          (this.first = t);
      },
      m(f, p) {
        Q(f, t, p), Te(r, t, null), B(t, n), (u = !0);
      },
      p(f, p) {
        var v;
        e = f;
        const y = {};
        p & 1 && (y.item = e[4]),
          r.$set(y),
          (!u ||
            (p & 1 &&
              s !== (s = (v = e[4].classes) == null ? void 0 : v.join(" ")))) &&
            P(t, "class", s),
          (!u || (p & 1 && o !== (o = Bt(e[4].theme)))) && P(t, "style", o);
      },
      r() {
        c = t.getBoundingClientRect();
      },
      f() {
        Mr(t), h(), Gt(t, c);
      },
      a() {
        h(), (h = Br(t, c, ss, { duration: 200 }));
      },
      i(f) {
        u ||
          (q(r.$$.fragment, f),
          f &&
            Tr(() => {
              u && (l && l.end(1), (a = vr(t, Rr, e[4].intro)), a.start());
            }),
          (u = !0));
      },
      o(f) {
        G(r.$$.fragment, f),
          a && a.invalidate(),
          f && (l = _r(t, Ir, {})),
          (u = !1);
      },
      d(f) {
        f && x(t), Se(r), f && l && l.end();
      },
    }
  );
}
function ds(i) {
  let e,
    t = [],
    r = new Map(),
    n,
    s = St(i[0]);
  const o = (a) => a[4].id;
  for (let a = 0; a < s.length; a += 1) {
    let l = Nt(i, s, a),
      c = o(l);
    r.set(c, (t[a] = Ft(c, l)));
  }
  return {
    c() {
      e = M("ul");
      for (let a = 0; a < t.length; a += 1) t[a].c();
      this.h();
    },
    l(a) {
      e = H(a, "UL", { class: !0 });
      var l = he(e);
      for (let c = 0; c < t.length; c += 1) t[c].l(l);
      l.forEach(x), this.h();
    },
    h() {
      P(
        e,
        "class",
        "fixed right-3 top-16 z-[9999] flex flex-col-reverse gap-2"
      );
    },
    m(a, l) {
      Q(a, e, l);
      for (let c = 0; c < t.length; c += 1) t[c] && t[c].m(e, null);
      n = !0;
    },
    p(a, [l]) {
      if (l & 1) {
        (s = St(a[0])), Ce();
        for (let c = 0; c < t.length; c += 1) t[c].r();
        t = xr(t, l, o, 1, a, s, r, e, Pr, Ft, null, Nt);
        for (let c = 0; c < t.length; c += 1) t[c].a();
        Re();
      }
    },
    i(a) {
      if (!n) {
        for (let l = 0; l < s.length; l += 1) q(t[l]);
        n = !0;
      }
    },
    o(a) {
      for (let l = 0; l < t.length; l += 1) G(t[l]);
      n = !1;
    },
    d(a) {
      a && x(e);
      for (let l = 0; l < t.length; l += 1) t[l].d();
    },
  };
}
function Bt(i) {
  return i ? Object.keys(i).reduce((e, t) => `${e}${t}:${i[t]};`, "") : void 0;
}
function fs(i, e, t) {
  let r;
  qt(i, tt, (a) => t(3, (r = a)));
  let { options: n = {} } = e,
    { target: s = "default" } = e,
    o = [];
  return (
    (i.$$set = (a) => {
      "options" in a && t(1, (n = a.options)),
        "target" in a && t(2, (s = a.target));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 6 && tt._init(s, n),
        i.$$.dirty & 12 && t(0, (o = r.filter((a) => a.target === s)));
    }),
    [o, n, s, r]
  );
}
class ps extends lt {
  constructor(e) {
    super(), ct(this, e, fs, ds, ut, { options: 1, target: 2 });
  }
}
const vs = `/* Partytown 0.8.0 - MIT builder.io */
!function(t,e,n,i,r,o,a,d,s,c,l,p){function u(){p||(p=1,"/"==(a=(o.lib||"/~partytown/")+(o.debug?"debug/":""))[0]&&(s=e.querySelectorAll('script[type="text/partytown"]'),i!=t?i.dispatchEvent(new CustomEvent("pt1",{detail:t})):(d=setTimeout(f,1e4),e.addEventListener("pt0",w),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||"partytown-sw.js"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener("statechange",(function(t){"activated"==t.target.state&&h()}))}),console.error):f())))}function h(t){c=e.createElement(t?"script":"iframe"),t||(c.setAttribute("style","display:block;width:0;height:0;border:0;visibility:hidden"),c.setAttribute("aria-hidden",!0)),c.src=a+"partytown-"+(t?"atomics.js?v=0.8.0":"sandbox-sw.html?"+Date.now()),e.querySelector(o.sandboxParent||"body").appendChild(c)}function f(n,r){for(w(),i==t&&(o.forward||[]).map((function(e){delete t[e.split(".")[0]]})),n=0;n<s.length;n++)(r=e.createElement("script")).innerHTML=s[n].innerHTML,e.head.appendChild(r);c&&c.parentNode.removeChild(c)}function w(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){l=t,e.split(".").map((function(e,n,i){l=l[i[n]]=n+1<i.length?"push"==i[n+1]?[]:l[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),"complete"==e.readyState?u():(t.addEventListener("DOMContentLoaded",u),t.addEventListener("load",u))}(window,document,navigator,top,window.crossOriginIsolated);`,
  _s = (i, e) => {
    const { forward: t = [], ...r } = i || {},
      n = JSON.stringify(
        r,
        (s, o) => (
          typeof o == "function" &&
            ((o = String(o)), o.startsWith(s + "(") && (o = "function " + o)),
          o
        )
      );
    return [
      "!(function(w,p,f,c){",
      Object.keys(r).length > 0
        ? `c=w[p]=Object.assign(w[p]||{},${n});`
        : "c=w[p]=w[p]||{};",
      "c[f]=(c[f]||[])",
      t.length > 0 ? `.concat(${JSON.stringify(t)})` : "",
      "})(window,'partytown','forward');",
      e,
    ].join("");
  },
  ys = (i) => _s(i, vs);
function ms(i) {
  let e,
    t = `<!--
                       _oo0oo_
                      o8888888o
                      88" . "88
                      (| -_- |)
                      0\\  =  /0
                    ___/\`---'\\___
                  .' \\\\|     |// '.
                 / \\\\|||  :  |||// \\
                / _||||| -:- |||||- \\
               |   | \\\\\\  -  /// |   |
               | \\_|  ''\\---/''  |_/ |
               \\  .-\\__  '-'  ___/-. /
             ___'. .'  /--.--\\  \`. .'___
          ."" '<  \`.___\\_<|>_/___.' >' "".
         | | :  \`- \\\`.;\`\\ _ /\`;.\`/ - \` : | |
         \\  \\ \`_.   \\_ __\\ /__ _/   .-\` /  /
     =====\`-.____\`.___ \\_____/___.-\`___.-'=====
                       \`=---='
นะโม ตัสสะ ภะคะวะโต อะระหะโต สัมมาสัมพุทธัสสะ
	นะโม ตัสสะ ภะคะวะโต อะระหะโต สัมมาสัมพุทธัสสะ
		นะโม ตัสสะ ภะคะวะโต อะระหะโต สัมมาสัมพุทธัสสะ

ขอให้ผลบุญที่ข้าพเจ้าได้สั่งสมดลให้เว็บแอปนี้ไม่มีบั๊กด้วยเถิด
	ขออย่าให้ข้าพเจ้าต้องตื่นมาแก้ตอนตีสองตีสาม
		ขอให้การทำงานผ่านไปอย่างราบรื่นทุกประการ
			สาธุ สาธุ สาธุ

คณะผู้จัดทำ
นักเรียนโรงเรียนวิทยาศาสตร๋ลุ่มแม่น้ำมูล
-->`,
    r,
    n,
    s,
    o,
    a,
    l,
    c = `partytown = {
			forward: ['dataLayer.push']
		};
	`,
    h,
    u = "<script>" + ys() + "</script>",
    f,
    p,
    y = "",
    v,
    _,
    g = `window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-VPF67T58QS');`,
    b,
    O,
    A,
    L;
  O = new ps({});
  const ve = i[2].default,
    U = Sr(ve, i, i[1], null);
  return {
    c() {
      (e = new wt(!1)),
        (r = ce()),
        (n = M("meta")),
        (s = M("meta")),
        (o = M("meta")),
        (a = M("meta")),
        (l = M("script")),
        (l.textContent = c),
        (h = new wt(!1)),
        (f = De()),
        (p = M("script")),
        (p.innerHTML = y),
        (_ = M("script")),
        (_.textContent = g),
        (b = ce()),
        we(O.$$.fragment),
        (A = ce()),
        U && U.c(),
        this.h();
    },
    l(S) {
      (e = Tt(S, !1)), (r = ue(S));
      const C = Or("svelte-53oth6", document.head);
      (n = H(C, "META", { name: !0, content: !0 })),
        (s = H(C, "META", { name: !0, content: !0 })),
        (o = H(C, "META", { name: !0, content: !0 })),
        (a = H(C, "META", { name: !0, content: !0 })),
        (l = H(C, "SCRIPT", { ["data-svelte-h"]: !0 })),
        Je(l) !== "svelte-1oz1dk" && (l.textContent = c),
        (h = Tt(C, !1)),
        (f = De()),
        (p = H(C, "SCRIPT", { type: !0, src: !0, ["data-svelte-h"]: !0 })),
        Je(p) !== "svelte-q26bcf" && (p.innerHTML = y),
        (_ = H(C, "SCRIPT", { type: !0, ["data-svelte-h"]: !0 })),
        Je(_) !== "svelte-1rkwmco" && (_.textContent = g),
        C.forEach(x),
        (b = ue(S)),
        Ue(O.$$.fragment, S),
        (A = ue(S)),
        U && U.l(S),
        this.h();
    },
    h() {
      (e.a = r),
        P(n, "name", "theme-color"),
        P(n, "content", "#374250"),
        P(s, "name", "msapplication-navbutton-color"),
        P(s, "content", "#374250"),
        P(o, "name", "apple-mobile-web-app-capable"),
        P(o, "content", "yes"),
        P(a, "name", "apple-mobile-web-app-status-bar-style"),
        P(a, "content", "#374250"),
        (h.a = f),
        (p.async = !0),
        P(p, "type", "text/partytown"),
        kr(
          p.src,
          (v = "https://www.googletagmanager.com/gtag/js?id=G-VPF67T58QS")
        ) || P(p, "src", v),
        P(_, "type", "text/partytown");
    },
    m(S, C) {
      e.m(t, S, C),
        Q(S, r, C),
        B(document.head, n),
        B(document.head, s),
        B(document.head, o),
        B(document.head, a),
        B(document.head, l),
        h.m(u, document.head),
        B(document.head, f),
        B(document.head, p),
        B(document.head, _),
        Q(S, b, C),
        Te(O, S, C),
        Q(S, A, C),
        U && U.m(S, C),
        (L = !0);
    },
    p(S, [C]) {
      U &&
        U.p &&
        (!L || C & 2) &&
        Er(U, ve, S, S[1], L ? jr(ve, S[1], C, null) : $r(S[1]), null);
    },
    i(S) {
      L || (q(O.$$.fragment, S), q(U, S), (L = !0));
    },
    o(S) {
      G(O.$$.fragment, S), G(U, S), (L = !1);
    },
    d(S) {
      S && (e.d(), x(r), h.d(), x(b), x(A)),
        x(n),
        x(s),
        x(o),
        x(a),
        x(l),
        x(f),
        x(p),
        x(_),
        Se(O, S),
        U && U.d(S);
    },
  };
}
function gs(i, e, t) {
  let { $$slots: r = {}, $$scope: n } = e,
    { data: s } = e,
    { supabase: o, session: a } = s;
  return (
    zt(() => {
      const {
        data: { subscription: l },
      } = o.auth.onAuthStateChange((c, h) => {
        (h == null ? void 0 : h.expires_at) !==
          (a == null ? void 0 : a.expires_at) && Ar("supabase:auth");
      });
      return () => l.unsubscribe();
    }),
    (i.$$set = (l) => {
      "data" in l && t(0, (s = l.data)),
        "$$scope" in l && t(1, (n = l.$$scope));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 1 && ({ supabase: o, session: a } = s);
    }),
    [s, n, r]
  );
}
class Ds extends lt {
  constructor(e) {
    super(), ct(this, e, gs, ms, ut, { data: 0 });
  }
}
export { Ds as component, Is as universal };
//# sourceMappingURL=0.8dd4a607.js.map
