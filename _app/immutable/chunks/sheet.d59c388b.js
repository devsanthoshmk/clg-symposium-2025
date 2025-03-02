import "./index.08749574.js";
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
      t = new Error().stack;
    t &&
      ((n._sentryDebugIds = n._sentryDebugIds || {}),
      (n._sentryDebugIds[t] = "f079c817-37af-43e7-9787-1075d6129252"),
      (n._sentryDebugIdIdentifier =
        "sentry-dbid-f079c817-37af-43e7-9787-1075d6129252"));
  } catch {}
})();
var b = {},
  T = {},
  _ = 34,
  g = 10,
  w = 13;
function U(n) {
  return new Function(
    "d",
    "return {" +
      n
        .map(function (t, r) {
          return JSON.stringify(t) + ": d[" + r + '] || ""';
        })
        .join(",") +
      "}"
  );
}
function L(n, t) {
  var r = U(n);
  return function (i, u) {
    return t(r(i), u, n);
  };
}
function j(n) {
  var t = Object.create(null),
    r = [];
  return (
    n.forEach(function (i) {
      for (var u in i) u in t || r.push((t[u] = u));
    }),
    r
  );
}
function a(n, t) {
  var r = n + "",
    i = r.length;
  return i < t ? new Array(t - i + 1).join(0) + r : r;
}
function O(n) {
  return n < 0 ? "-" + a(-n, 6) : n > 9999 ? "+" + a(n, 6) : a(n, 4);
}
function S(n) {
  var t = n.getUTCHours(),
    r = n.getUTCMinutes(),
    i = n.getUTCSeconds(),
    u = n.getUTCMilliseconds();
  return isNaN(n)
    ? "Invalid Date"
    : O(n.getUTCFullYear()) +
        "-" +
        a(n.getUTCMonth() + 1, 2) +
        "-" +
        a(n.getUTCDate(), 2) +
        (u
          ? "T" + a(t, 2) + ":" + a(r, 2) + ":" + a(i, 2) + "." + a(u, 3) + "Z"
          : i
          ? "T" + a(t, 2) + ":" + a(r, 2) + ":" + a(i, 2) + "Z"
          : r || t
          ? "T" + a(t, 2) + ":" + a(r, 2) + "Z"
          : "");
}
function M(n) {
  var t = new RegExp(
      '["' +
        n +
        `
\r]`
    ),
    r = n.charCodeAt(0);
  function i(e, o) {
    var f,
      s,
      c = u(e, function (d, l) {
        if (f) return f(d, l - 1);
        (s = d), (f = o ? L(d, o) : U(d));
      });
    return (c.columns = s || []), c;
  }
  function u(e, o) {
    var f = [],
      s = e.length,
      c = 0,
      d = 0,
      l,
      A = s <= 0,
      h = !1;
    e.charCodeAt(s - 1) === g && --s, e.charCodeAt(s - 1) === w && --s;
    function y() {
      if (A) return T;
      if (h) return (h = !1), b;
      var C,
        E = c,
        p;
      if (e.charCodeAt(E) === _) {
        for (; (c++ < s && e.charCodeAt(c) !== _) || e.charCodeAt(++c) === _; );
        return (
          (C = c) >= s
            ? (A = !0)
            : (p = e.charCodeAt(c++)) === g
            ? (h = !0)
            : p === w && ((h = !0), e.charCodeAt(c) === g && ++c),
          e.slice(E + 1, C - 1).replace(/""/g, '"')
        );
      }
      for (; c < s; ) {
        if ((p = e.charCodeAt((C = c++))) === g) h = !0;
        else if (p === w) (h = !0), e.charCodeAt(c) === g && ++c;
        else if (p !== r) continue;
        return e.slice(E, C);
      }
      return (A = !0), e.slice(E, s);
    }
    for (; (l = y()) !== T; ) {
      for (var m = []; l !== b && l !== T; ) m.push(l), (l = y());
      (o && (m = o(m, d++)) == null) || f.push(m);
    }
    return f;
  }
  function D(e, o) {
    return e.map(function (f) {
      return o
        .map(function (s) {
          return v(f[s]);
        })
        .join(n);
    });
  }
  function N(e, o) {
    return (
      o == null && (o = j(e)),
      [o.map(v).join(n)].concat(D(e, o)).join(`
`)
    );
  }
  function F(e, o) {
    return (
      o == null && (o = j(e)),
      D(e, o).join(`
`)
    );
  }
  function z(e) {
    return e.map(I).join(`
`);
  }
  function I(e) {
    return e.map(v).join(n);
  }
  function v(e) {
    return e == null
      ? ""
      : e instanceof Date
      ? S(e)
      : t.test((e += ""))
      ? '"' + e.replace(/"/g, '""') + '"'
      : e;
  }
  return {
    parse: i,
    parseRows: u,
    format: N,
    formatBody: F,
    formatRows: z,
    formatRow: I,
    formatValue: v,
  };
}
var q = M(","),
  k = q.parse;
function B(n) {
  if (!n.ok) throw new Error(n.status + " " + n.statusText);
  return n.text();
}
function Z(n, t) {
  return fetch(n, t).then(B);
}
function P(n) {
  return function (t, r, i) {
    return (
      arguments.length === 2 &&
        typeof r == "function" &&
        ((i = r), (r = void 0)),
      Z(t, r).then(function (u) {
        return n(u, i);
      })
    );
  };
}
var R = P(k);
const W = "1CSKItilWJM6vgqFzg1zxCAL2EcFdvmas3ANCaQZ-z-Y",
  Y = "downloadable-documents",
  H = encodeURI(
    `https://docs.google.com/spreadsheets/d/${W}/gviz/tq?tqx=out:csv&sheet=${Y}`
  ),
  Q = async () =>
    R(H, (n) => ({
      name: n.name,
      description: n.description,
      link: n.link,
      isDownload: n.isDownload === "TRUE",
    })),
  $ = async () =>
    R(
      encodeURI(
        "https://docs.google.com/spreadsheets/d/1CSKItilWJM6vgqFzg1zxCAL2EcFdvmas3ANCaQZ-z-Y/gviz/tq?tqx=out:csv&sheet=projects"
      ),
      (n) => ({
        internal_code: n.internal_code,
        code: n.code,
        field: n.field,
        type: n.type,
        title_th: n.title_th,
        title_en: n.title_en,
        province: n.province,
        members: n.members,
        teachers: n.teachers,
        special_advisors: n.special_advisors,
      })
    );
export { Q as a, $ as f };
//# sourceMappingURL=sheet.d59c388b.js.map
