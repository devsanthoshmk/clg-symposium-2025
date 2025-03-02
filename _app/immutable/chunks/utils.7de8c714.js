import { a0 as ce, Y as de } from "./scheduler.b44937bc.js";
(function () {
  try {
    var f =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      h = new Error().stack;
    h &&
      ((f._sentryDebugIds = f._sentryDebugIds || {}),
      (f._sentryDebugIds[h] = "b190eb42-7217-4567-a4dd-8b0afbabdea0"),
      (f._sentryDebugIdIdentifier =
        "sentry-dbid-b190eb42-7217-4567-a4dd-8b0afbabdea0"));
  } catch {}
})();
function me(f) {
  try {
    ce(), de(f);
  } catch {}
}
function ge({ subscribe: f }) {
  return { subscribe: f };
}
const ue = typeof window < "u",
  ve = ue ? window : void 0;
var z = {};
(function f(h, M, R, w) {
  var x = !!(
    h.Worker &&
    h.Blob &&
    h.Promise &&
    h.OffscreenCanvas &&
    h.OffscreenCanvasRenderingContext2D &&
    h.HTMLCanvasElement &&
    h.HTMLCanvasElement.prototype.transferControlToOffscreen &&
    h.URL &&
    h.URL.createObjectURL
  );
  function D() {}
  function C(r) {
    var e = M.exports.Promise,
      i = e !== void 0 ? e : h.Promise;
    return typeof i == "function" ? new i(r) : (r(D, D), null);
  }
  var T = (function () {
      var r = Math.floor(16.666666666666668),
        e,
        i,
        a = {},
        l = 0;
      return (
        typeof requestAnimationFrame == "function" &&
        typeof cancelAnimationFrame == "function"
          ? ((e = function (o) {
              var n = Math.random();
              return (
                (a[n] = requestAnimationFrame(function t(d) {
                  l === d || l + r - 1 < d
                    ? ((l = d), delete a[n], o())
                    : (a[n] = requestAnimationFrame(t));
                })),
                n
              );
            }),
            (i = function (o) {
              a[o] && cancelAnimationFrame(a[o]);
            }))
          : ((e = function (o) {
              return setTimeout(o, r);
            }),
            (i = function (o) {
              return clearTimeout(o);
            })),
        { frame: e, cancel: i }
      );
    })(),
    B = (function () {
      var r,
        e,
        i = {};
      function a(l) {
        function o(n, t) {
          l.postMessage({ options: n || {}, callback: t });
        }
        (l.init = function (t) {
          var d = t.transferControlToOffscreen();
          l.postMessage({ canvas: d }, [d]);
        }),
          (l.fire = function (t, d, v) {
            if (e) return o(t, null), e;
            var s = Math.random().toString(36).slice(2);
            return (
              (e = C(function (g) {
                function m(c) {
                  c.data.callback === s &&
                    (delete i[s],
                    l.removeEventListener("message", m),
                    (e = null),
                    v(),
                    g());
                }
                l.addEventListener("message", m),
                  o(t, s),
                  (i[s] = m.bind(null, { data: { callback: s } }));
              })),
              e
            );
          }),
          (l.reset = function () {
            l.postMessage({ reset: !0 });
            for (var t in i) i[t](), delete i[t];
          });
      }
      return function () {
        if (r) return r;
        if (!R && x) {
          var l = [
            "var CONFETTI, SIZE = {}, module = {};",
            "(" + f.toString() + ")(this, module, true, SIZE);",
            "onmessage = function(msg) {",
            "  if (msg.data.options) {",
            "    CONFETTI(msg.data.options).then(function () {",
            "      if (msg.data.callback) {",
            "        postMessage({ callback: msg.data.callback });",
            "      }",
            "    });",
            "  } else if (msg.data.reset) {",
            "    CONFETTI && CONFETTI.reset();",
            "  } else if (msg.data.resize) {",
            "    SIZE.width = msg.data.resize.width;",
            "    SIZE.height = msg.data.resize.height;",
            "  } else if (msg.data.canvas) {",
            "    SIZE.width = msg.data.canvas.width;",
            "    SIZE.height = msg.data.canvas.height;",
            "    CONFETTI = module.exports.create(msg.data.canvas);",
            "  }",
            "}",
          ].join(`
`);
          try {
            r = new Worker(URL.createObjectURL(new Blob([l])));
          } catch (o) {
            return (
              typeof console !== void 0 &&
                typeof console.warn == "function" &&
                console.warn("🎊 Could not load worker", o),
              null
            );
          }
          a(r);
        }
        return r;
      };
    })(),
    U = {
      particleCount: 50,
      angle: 90,
      spread: 45,
      startVelocity: 45,
      decay: 0.9,
      gravity: 1,
      drift: 0,
      ticks: 200,
      x: 0.5,
      y: 0.5,
      shapes: ["square", "circle"],
      zIndex: 100,
      colors: [
        "#26ccff",
        "#a25afd",
        "#ff5e7e",
        "#88ff5a",
        "#fcff42",
        "#ffa62d",
        "#ff36ff",
      ],
      disableForReducedMotion: !1,
      scalar: 1,
    };
  function V(r, e) {
    return e ? e(r) : r;
  }
  function Y(r) {
    return r != null;
  }
  function u(r, e, i) {
    return V(r && Y(r[e]) ? r[e] : U[e], i);
  }
  function Z(r) {
    return r < 0 ? 0 : Math.floor(r);
  }
  function X(r, e) {
    return Math.floor(Math.random() * (e - r)) + r;
  }
  function E(r) {
    return parseInt(r, 16);
  }
  function j(r) {
    return r.map(q);
  }
  function q(r) {
    var e = String(r).replace(/[^0-9a-f]/gi, "");
    return (
      e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
      {
        r: E(e.substring(0, 2)),
        g: E(e.substring(2, 4)),
        b: E(e.substring(4, 6)),
      }
    );
  }
  function H(r) {
    var e = u(r, "origin", Object);
    return (e.x = u(e, "x", Number)), (e.y = u(e, "y", Number)), e;
  }
  function G(r) {
    (r.width = document.documentElement.clientWidth),
      (r.height = document.documentElement.clientHeight);
  }
  function J(r) {
    var e = r.getBoundingClientRect();
    (r.width = e.width), (r.height = e.height);
  }
  function K(r) {
    var e = document.createElement("canvas");
    return (
      (e.style.position = "fixed"),
      (e.style.top = "0px"),
      (e.style.left = "0px"),
      (e.style.pointerEvents = "none"),
      (e.style.zIndex = r),
      e
    );
  }
  function Q(r, e, i, a, l, o, n, t, d) {
    r.save(),
      r.translate(e, i),
      r.rotate(o),
      r.scale(a, l),
      r.arc(0, 0, 1, n, t, d),
      r.restore();
  }
  function $(r) {
    var e = r.angle * (Math.PI / 180),
      i = r.spread * (Math.PI / 180);
    return {
      x: r.x,
      y: r.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: r.startVelocity * 0.5 + Math.random() * r.startVelocity,
      angle2D: -e + (0.5 * i - Math.random() * i),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: r.color,
      shape: r.shape,
      tick: 0,
      totalTicks: r.ticks,
      decay: r.decay,
      drift: r.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: r.gravity * 3,
      ovalScalar: 0.6,
      scalar: r.scalar,
    };
  }
  function ee(r, e) {
    (e.x += Math.cos(e.angle2D) * e.velocity + e.drift),
      (e.y += Math.sin(e.angle2D) * e.velocity + e.gravity),
      (e.wobble += e.wobbleSpeed),
      (e.velocity *= e.decay),
      (e.tiltAngle += 0.1),
      (e.tiltSin = Math.sin(e.tiltAngle)),
      (e.tiltCos = Math.cos(e.tiltAngle)),
      (e.random = Math.random() + 2),
      (e.wobbleX = e.x + 10 * e.scalar * Math.cos(e.wobble)),
      (e.wobbleY = e.y + 10 * e.scalar * Math.sin(e.wobble));
    var i = e.tick++ / e.totalTicks,
      a = e.x + e.random * e.tiltCos,
      l = e.y + e.random * e.tiltSin,
      o = e.wobbleX + e.random * e.tiltCos,
      n = e.wobbleY + e.random * e.tiltSin;
    if (
      ((r.fillStyle =
        "rgba(" +
        e.color.r +
        ", " +
        e.color.g +
        ", " +
        e.color.b +
        ", " +
        (1 - i) +
        ")"),
      r.beginPath(),
      e.shape === "circle")
    )
      r.ellipse
        ? r.ellipse(
            e.x,
            e.y,
            Math.abs(o - a) * e.ovalScalar,
            Math.abs(n - l) * e.ovalScalar,
            (Math.PI / 10) * e.wobble,
            0,
            2 * Math.PI
          )
        : Q(
            r,
            e.x,
            e.y,
            Math.abs(o - a) * e.ovalScalar,
            Math.abs(n - l) * e.ovalScalar,
            (Math.PI / 10) * e.wobble,
            0,
            2 * Math.PI
          );
    else if (e.shape === "star")
      for (
        var t = (Math.PI / 2) * 3,
          d = 4 * e.scalar,
          v = 8 * e.scalar,
          s = e.x,
          g = e.y,
          m = 5,
          c = Math.PI / m;
        m--;

      )
        (s = e.x + Math.cos(t) * v),
          (g = e.y + Math.sin(t) * v),
          r.lineTo(s, g),
          (t += c),
          (s = e.x + Math.cos(t) * d),
          (g = e.y + Math.sin(t) * d),
          r.lineTo(s, g),
          (t += c);
    else
      r.moveTo(Math.floor(e.x), Math.floor(e.y)),
        r.lineTo(Math.floor(e.wobbleX), Math.floor(l)),
        r.lineTo(Math.floor(o), Math.floor(n)),
        r.lineTo(Math.floor(a), Math.floor(e.wobbleY));
    return r.closePath(), r.fill(), e.tick < e.totalTicks;
  }
  function re(r, e, i, a, l) {
    var o = e.slice(),
      n = r.getContext("2d"),
      t,
      d,
      v = C(function (s) {
        function g() {
          (t = d = null), n.clearRect(0, 0, a.width, a.height), l(), s();
        }
        function m() {
          R &&
            !(a.width === w.width && a.height === w.height) &&
            ((a.width = r.width = w.width), (a.height = r.height = w.height)),
            !a.width &&
              !a.height &&
              (i(r), (a.width = r.width), (a.height = r.height)),
            n.clearRect(0, 0, a.width, a.height),
            (o = o.filter(function (c) {
              return ee(n, c);
            })),
            o.length ? (t = T.frame(m)) : g();
        }
        (t = T.frame(m)), (d = g);
      });
    return {
      addFettis: function (s) {
        return (o = o.concat(s)), v;
      },
      canvas: r,
      promise: v,
      reset: function () {
        t && T.cancel(t), d && d();
      },
    };
  }
  function L(r, e) {
    var i = !r,
      a = !!u(e || {}, "resize"),
      l = u(e, "disableForReducedMotion", Boolean),
      o = x && !!u(e || {}, "useWorker"),
      n = o ? B() : null,
      t = i ? G : J,
      d = r && n ? !!r.__confetti_initialized : !1,
      v =
        typeof matchMedia == "function" &&
        matchMedia("(prefers-reduced-motion)").matches,
      s;
    function g(c, k, S) {
      for (
        var y = u(c, "particleCount", Z),
          p = u(c, "angle", Number),
          I = u(c, "spread", Number),
          b = u(c, "startVelocity", Number),
          ae = u(c, "decay", Number),
          ne = u(c, "gravity", Number),
          te = u(c, "drift", Number),
          O = u(c, "colors", j),
          ie = u(c, "ticks", Number),
          W = u(c, "shapes"),
          oe = u(c, "scalar"),
          _ = H(c),
          A = y,
          P = [],
          le = r.width * _.x,
          se = r.height * _.y;
        A--;

      )
        P.push(
          $({
            x: le,
            y: se,
            angle: p,
            spread: I,
            startVelocity: b,
            color: O[A % O.length],
            shape: W[X(0, W.length)],
            ticks: ie,
            decay: ae,
            gravity: ne,
            drift: te,
            scalar: oe,
          })
        );
      return s ? s.addFettis(P) : ((s = re(r, P, t, k, S)), s.promise);
    }
    function m(c) {
      var k = l || u(c, "disableForReducedMotion", Boolean),
        S = u(c, "zIndex", Number);
      if (k && v)
        return C(function (b) {
          b();
        });
      i && s
        ? (r = s.canvas)
        : i && !r && ((r = K(S)), document.body.appendChild(r)),
        a && !d && t(r);
      var y = { width: r.width, height: r.height };
      n && !d && n.init(r), (d = !0), n && (r.__confetti_initialized = !0);
      function p() {
        if (n) {
          var b = {
            getBoundingClientRect: function () {
              if (!i) return r.getBoundingClientRect();
            },
          };
          t(b), n.postMessage({ resize: { width: b.width, height: b.height } });
          return;
        }
        y.width = y.height = null;
      }
      function I() {
        (s = null),
          a && h.removeEventListener("resize", p),
          i && r && (document.body.removeChild(r), (r = null), (d = !1));
      }
      return (
        a && h.addEventListener("resize", p, !1),
        n ? n.fire(c, y, I) : g(c, y, I)
      );
    }
    return (
      (m.reset = function () {
        n && n.reset(), s && s.reset();
      }),
      m
    );
  }
  var F;
  function N() {
    return F || (F = L(null, { useWorker: !0, resize: !0 })), F;
  }
  (M.exports = function () {
    return N().apply(this, arguments);
  }),
    (M.exports.reset = function () {
      N().reset();
    }),
    (M.exports.create = L);
})(
  (function () {
    return typeof window < "u" ? window : typeof self < "u" ? self : this || {};
  })(),
  z,
  !1
);
z.exports.create;
let he = !1;
try {
  let f = Object.defineProperty({}, "passive", {
    get: function () {
      he = !0;
    },
  });
  window.addEventListener("test", null, f);
} catch {}
export { ve as d, me as t, ge as w };
//# sourceMappingURL=utils.7de8c714.js.map
