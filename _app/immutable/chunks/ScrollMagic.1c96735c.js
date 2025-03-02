import { g as re, c as oe } from "./_commonjsHelpers.3bb56e27.js";
(function () {
  try {
    var H =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      Y = new Error().stack;
    Y &&
      ((H._sentryDebugIds = H._sentryDebugIds || {}),
      (H._sentryDebugIds[Y] = "fc565aae-15ed-45ea-b3db-88b8550c9664"),
      (H._sentryDebugIdIdentifier =
        "sentry-dbid-fc565aae-15ed-45ea-b3db-88b8550c9664"));
  } catch {}
})();
function se(H, Y) {
  for (var d = 0; d < Y.length; d++) {
    const N = Y[d];
    if (typeof N != "string" && !Array.isArray(N)) {
      for (const V in N)
        if (V !== "default" && !(V in H)) {
          const B = Object.getOwnPropertyDescriptor(N, V);
          B &&
            Object.defineProperty(
              H,
              V,
              B.get ? B : { enumerable: !0, get: () => N[V] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(H, Symbol.toStringTag, { value: "Module" })
  );
}
var te = { exports: {} };
/*!
 * ScrollMagic v2.0.8 (2020-08-14)
 * The javascript library for magical scroll interactions.
 * (c) 2020 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 *
 * @version 2.0.8
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */ (function (H, Y) {
  (function (d, N) {
    H.exports = N();
  })(oe, function () {
    var d = function () {
      i.log(
        2,
        "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene."
      );
    };
    (d.version = "2.0.8"),
      typeof window < "u" && window.addEventListener("mousewheel", void 0);
    var N = "data-scrollmagic-pin-spacer";
    d.Controller = function (a) {
      var p = "ScrollMagic.Controller",
        E = "FORWARD",
        R = "REVERSE",
        L = "PAUSED",
        j = V.defaults,
        r = this,
        o = i.extend({}, j, a),
        c = [],
        y = !1,
        C = 0,
        F = L,
        T = !0,
        I = 0,
        u = !0,
        z,
        t,
        l = function () {
          for (var n in o)
            j.hasOwnProperty(n) ||
              (f(2, 'WARNING: Unknown option "' + n + '"'), delete o[n]);
          if (((o.container = i.get.elements(o.container)[0]), !o.container))
            throw (
              (f(
                1,
                "ERROR creating object " +
                  p +
                  ": No valid scroll container supplied"
              ),
              p + " init failed.")
            );
          (T =
            o.container === window ||
            o.container === document.body ||
            !document.body.contains(o.container)),
            T && (o.container = window),
            (I = P()),
            o.container.addEventListener("resize", q),
            o.container.addEventListener("scroll", q);
          var m = parseInt(o.refreshInterval, 10);
          (o.refreshInterval = i.type.Number(m) ? m : j.refreshInterval),
            S(),
            f(3, "added new " + p + " controller (v" + d.version + ")");
        },
        S = function () {
          o.refreshInterval > 0 &&
            (t = window.setTimeout(Z, o.refreshInterval));
        },
        A = function () {
          return o.vertical
            ? i.get.scrollTop(o.container)
            : i.get.scrollLeft(o.container);
        },
        P = function () {
          return o.vertical
            ? i.get.height(o.container)
            : i.get.width(o.container);
        },
        x = (this._setScrollPos = function (n) {
          o.vertical
            ? T
              ? window.scrollTo(i.get.scrollLeft(), n)
              : (o.container.scrollTop = n)
            : T
            ? window.scrollTo(n, i.get.scrollTop())
            : (o.container.scrollLeft = n);
        }),
        U = function () {
          if (u && y) {
            var n = i.type.Array(y) ? y : c.slice(0);
            y = !1;
            var m = C;
            C = r.scrollPos();
            var O = C - m;
            O !== 0 && (F = O > 0 ? E : R),
              F === R && n.reverse(),
              n.forEach(function (D, $) {
                f(
                  3,
                  "updating Scene " +
                    ($ + 1) +
                    "/" +
                    n.length +
                    " (" +
                    c.length +
                    " total)"
                ),
                  D.update(!0);
              }),
              n.length === 0 &&
                o.loglevel >= 3 &&
                f(3, "updating 0 Scenes (nothing added to controller)");
          }
        },
        G = function () {
          z = i.rAF(U);
        },
        q = function (n) {
          f(3, "event fired causing an update:", n.type),
            n.type == "resize" && ((I = P()), (F = L)),
            y !== !0 && ((y = !0), G());
        },
        Z = function () {
          if (!T && I != P()) {
            var n;
            try {
              n = new Event("resize", { bubbles: !1, cancelable: !1 });
            } catch {
              (n = document.createEvent("Event")),
                n.initEvent("resize", !1, !1);
            }
            o.container.dispatchEvent(n);
          }
          c.forEach(function (m, O) {
            m.refresh();
          }),
            S();
        },
        f = (this._log = function (n, m) {
          o.loglevel >= n &&
            (Array.prototype.splice.call(arguments, 1, 0, "(" + p + ") ->"),
            i.log.apply(window, arguments));
        });
      this._options = o;
      var v = function (n) {
        if (n.length <= 1) return n;
        var m = n.slice(0);
        return (
          m.sort(function (O, D) {
            return O.scrollOffset() > D.scrollOffset() ? 1 : -1;
          }),
          m
        );
      };
      return (
        (this.addScene = function (n) {
          if (i.type.Array(n))
            n.forEach(function (O, D) {
              r.addScene(O);
            });
          else if (n instanceof d.Scene) {
            if (n.controller() !== r) n.addTo(r);
            else if (c.indexOf(n) < 0) {
              c.push(n),
                (c = v(c)),
                n.on("shift.controller_sort", function () {
                  c = v(c);
                });
              for (var m in o.globalSceneOptions)
                n[m] && n[m].call(n, o.globalSceneOptions[m]);
              f(3, "adding Scene (now " + c.length + " total)");
            }
          } else f(1, "ERROR: invalid argument supplied for '.addScene()'");
          return r;
        }),
        (this.removeScene = function (n) {
          if (i.type.Array(n))
            n.forEach(function (O, D) {
              r.removeScene(O);
            });
          else {
            var m = c.indexOf(n);
            m > -1 &&
              (n.off("shift.controller_sort"),
              c.splice(m, 1),
              f(3, "removing Scene (now " + c.length + " left)"),
              n.remove());
          }
          return r;
        }),
        (this.updateScene = function (n, m) {
          return (
            i.type.Array(n)
              ? n.forEach(function (O, D) {
                  r.updateScene(O, m);
                })
              : m
              ? n.update(!0)
              : y !== !0 &&
                n instanceof d.Scene &&
                ((y = y || []),
                y.indexOf(n) == -1 && y.push(n),
                (y = v(y)),
                G()),
            r
          );
        }),
        (this.update = function (n) {
          return q({ type: "resize" }), n && U(), r;
        }),
        (this.scrollTo = function (n, m) {
          if (i.type.Number(n)) x.call(o.container, n, m);
          else if (n instanceof d.Scene)
            n.controller() === r
              ? r.scrollTo(n.scrollOffset(), m)
              : f(
                  2,
                  "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",
                  n
                );
          else if (i.type.Function(n)) x = n;
          else {
            var O = i.get.elements(n)[0];
            if (O) {
              for (; O.parentNode.hasAttribute(N); ) O = O.parentNode;
              var D = o.vertical ? "top" : "left",
                $ = i.get.offset(o.container),
                X = i.get.offset(O);
              T || ($[D] -= r.scrollPos()), r.scrollTo(X[D] - $[D], m);
            } else
              f(
                2,
                "scrollTo(): The supplied argument is invalid. Scroll cancelled.",
                n
              );
          }
          return r;
        }),
        (this.scrollPos = function (n) {
          if (arguments.length)
            i.type.Function(n)
              ? (A = n)
              : f(
                  2,
                  "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."
                );
          else return A.call(r);
          return r;
        }),
        (this.info = function (n) {
          var m = {
            size: I,
            vertical: o.vertical,
            scrollPos: C,
            scrollDirection: F,
            container: o.container,
            isDocument: T,
          };
          if (arguments.length) {
            if (m[n] !== void 0) return m[n];
            f(1, 'ERROR: option "' + n + '" is not available');
            return;
          } else return m;
        }),
        (this.loglevel = function (n) {
          if (arguments.length) o.loglevel != n && (o.loglevel = n);
          else return o.loglevel;
          return r;
        }),
        (this.enabled = function (n) {
          if (arguments.length) u != n && ((u = !!n), r.updateScene(c, !0));
          else return u;
          return r;
        }),
        (this.destroy = function (n) {
          window.clearTimeout(t);
          for (var m = c.length; m--; ) c[m].destroy(n);
          return (
            o.container.removeEventListener("resize", q),
            o.container.removeEventListener("scroll", q),
            i.cAF(z),
            f(3, "destroyed " + p + " (reset: " + (n ? "true" : "false") + ")"),
            null
          );
        }),
        l(),
        r
      );
    };
    var V = {
      defaults: {
        container: window,
        vertical: !0,
        globalSceneOptions: {},
        loglevel: 2,
        refreshInterval: 100,
      },
    };
    (d.Controller.addOption = function (a, p) {
      V.defaults[a] = p;
    }),
      (d.Controller.extend = function (a) {
        var p = this;
        (d.Controller = function () {
          return (
            p.apply(this, arguments),
            (this.$super = i.extend({}, this)),
            a.apply(this, arguments) || this
          );
        }),
          i.extend(d.Controller, p),
          (d.Controller.prototype = p.prototype),
          (d.Controller.prototype.constructor = d.Controller);
      }),
      (d.Scene = function (a) {
        var p = "ScrollMagic.Scene",
          E = "BEFORE",
          R = "DURING",
          L = "AFTER",
          j = B.defaults,
          r = this,
          o = i.extend({}, j, a),
          c = E,
          y = 0,
          C = { start: 0, end: 0 },
          F = 0,
          T = !0,
          I,
          u,
          z = function () {
            for (var e in o)
              j.hasOwnProperty(e) ||
                (l(2, 'WARNING: Unknown option "' + e + '"'), delete o[e]);
            for (var s in j) Z(s);
            G();
          },
          t = {};
        (this.on = function (e, s) {
          return (
            i.type.Function(s)
              ? ((e = e.trim().split(" ")),
                e.forEach(function (g) {
                  var b = g.split("."),
                    h = b[0],
                    w = b[1];
                  h != "*" &&
                    (t[h] || (t[h] = []),
                    t[h].push({ namespace: w || "", callback: s }));
                }))
              : l(
                  1,
                  "ERROR when calling '.on()': Supplied callback for '" +
                    e +
                    "' is not a valid function!"
                ),
            r
          );
        }),
          (this.off = function (e, s) {
            return e
              ? ((e = e.trim().split(" ")),
                e.forEach(function (g, b) {
                  var h = g.split("."),
                    w = h[0],
                    _ = h[1] || "",
                    M = w === "*" ? Object.keys(t) : [w];
                  M.forEach(function (W) {
                    for (var k = t[W] || [], J = k.length; J--; ) {
                      var Q = k[J];
                      Q &&
                        (_ === Q.namespace || _ === "*") &&
                        (!s || s == Q.callback) &&
                        k.splice(J, 1);
                    }
                    k.length || delete t[W];
                  });
                }),
                r)
              : (l(1, "ERROR: Invalid event name supplied."), r);
          }),
          (this.trigger = function (e, s) {
            if (e) {
              var g = e.trim().split("."),
                b = g[0],
                h = g[1],
                w = t[b];
              l(3, "event fired:", b, s ? "->" : "", s || ""),
                w &&
                  w.forEach(function (_, M) {
                    (!h || h === _.namespace) &&
                      _.callback.call(r, new d.Event(b, _.namespace, r, s));
                  });
            } else l(1, "ERROR: Invalid event name supplied.");
            return r;
          }),
          r
            .on("change.internal", function (e) {
              e.what !== "loglevel" &&
                e.what !== "tweenChanges" &&
                (e.what === "triggerElement"
                  ? P()
                  : e.what === "reverse" && r.update());
            })
            .on("shift.internal", function (e) {
              S(), r.update();
            });
        var l = (this._log = function (e, s) {
          o.loglevel >= e &&
            (Array.prototype.splice.call(arguments, 1, 0, "(" + p + ") ->"),
            i.log.apply(window, arguments));
        });
        (this.addTo = function (e) {
          return (
            e instanceof d.Controller
              ? u != e &&
                (u && u.removeScene(r),
                (u = e),
                G(),
                A(!0),
                P(!0),
                S(),
                u.info("container").addEventListener("resize", x),
                e.addScene(r),
                r.trigger("add", { controller: u }),
                l(3, "added " + p + " to controller"),
                r.update())
              : l(
                  1,
                  "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"
                ),
            r
          );
        }),
          (this.enabled = function (e) {
            if (arguments.length) T != e && ((T = !!e), r.update(!0));
            else return T;
            return r;
          }),
          (this.remove = function () {
            if (u) {
              u.info("container").removeEventListener("resize", x);
              var e = u;
              (u = void 0),
                e.removeScene(r),
                r.trigger("remove"),
                l(3, "removed " + p + " from controller");
            }
            return r;
          }),
          (this.destroy = function (e) {
            return (
              r.trigger("destroy", { reset: e }),
              r.remove(),
              r.off("*.*"),
              l(
                3,
                "destroyed " + p + " (reset: " + (e ? "true" : "false") + ")"
              ),
              null
            );
          }),
          (this.update = function (e) {
            if (u)
              if (e)
                if (u.enabled() && T) {
                  var s = u.info("scrollPos"),
                    g;
                  o.duration > 0
                    ? (g = (s - C.start) / (C.end - C.start))
                    : (g = s >= C.start ? 1 : 0),
                    r.trigger("update", {
                      startPos: C.start,
                      endPos: C.end,
                      scrollPos: s,
                    }),
                    r.progress(g);
                } else f && c === R && n(!0);
              else u.updateScene(r, !1);
            return r;
          }),
          (this.refresh = function () {
            return A(), P(), r;
          }),
          (this.progress = function (e) {
            if (arguments.length) {
              var s = !1,
                g = c,
                b = u ? u.info("scrollDirection") : "PAUSED",
                h = o.reverse || e >= y;
              if (
                (o.duration === 0
                  ? ((s = y != e),
                    (y = e < 1 && h ? 0 : 1),
                    (c = y === 0 ? E : R))
                  : e < 0 && c !== E && h
                  ? ((y = 0), (c = E), (s = !0))
                  : e >= 0 && e < 1 && h
                  ? ((y = e), (c = R), (s = !0))
                  : e >= 1 && c !== L
                  ? ((y = 1), (c = L), (s = !0))
                  : c === R && !h && n(),
                s)
              ) {
                var w = { progress: y, state: c, scrollDirection: b },
                  _ = c != g,
                  M = function (W) {
                    r.trigger(W, w);
                  };
                _ && g !== R && (M("enter"), M(g === E ? "start" : "end")),
                  M("progress"),
                  _ && c !== R && (M(c === E ? "start" : "end"), M("leave"));
              }
              return r;
            } else return y;
          });
        var S = function () {
            (C = { start: F + o.offset }),
              u &&
                o.triggerElement &&
                (C.start -= u.info("size") * o.triggerHook),
              (C.end = C.start + o.duration);
          },
          A = function (e) {
            if (I) {
              var s = "duration";
              q(s, I.call(r)) &&
                !e &&
                (r.trigger("change", { what: s, newval: o[s] }),
                r.trigger("shift", { reason: s }));
            }
          },
          P = function (e) {
            var s = 0,
              g = o.triggerElement;
            if (u && (g || F > 0)) {
              if (g)
                if (g.parentNode) {
                  for (
                    var b = u.info(),
                      h = i.get.offset(b.container),
                      w = b.vertical ? "top" : "left";
                    g.parentNode.hasAttribute(N);

                  )
                    g = g.parentNode;
                  var _ = i.get.offset(g);
                  b.isDocument || (h[w] -= u.scrollPos()), (s = _[w] - h[w]);
                } else
                  l(
                    2,
                    "WARNING: triggerElement was removed from DOM and will be reset to",
                    void 0
                  ),
                    r.triggerElement(void 0);
              var M = s != F;
              (F = s),
                M &&
                  !e &&
                  r.trigger("shift", { reason: "triggerElementPosition" });
            }
          },
          x = function (e) {
            o.triggerHook > 0 &&
              r.trigger("shift", { reason: "containerResize" });
          },
          U = i.extend(B.validate, {
            duration: function (e) {
              if (i.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                var s = parseFloat(e) / 100;
                e = function () {
                  return u ? u.info("size") * s : 0;
                };
              }
              if (i.type.Function(e)) {
                I = e;
                try {
                  e = parseFloat(I.call(r));
                } catch {
                  e = -1;
                }
              }
              if (((e = parseFloat(e)), !i.type.Number(e) || e < 0))
                throw I
                  ? ((I = void 0),
                    [
                      'Invalid return value of supplied function for option "duration":',
                      e,
                    ])
                  : ['Invalid value for option "duration":', e];
              return e;
            },
          }),
          G = function (e) {
            (e = arguments.length ? [e] : Object.keys(U)),
              e.forEach(function (s, g) {
                var b;
                if (U[s])
                  try {
                    b = U[s](o[s]);
                  } catch (w) {
                    b = j[s];
                    var h = i.type.String(w) ? [w] : w;
                    i.type.Array(h)
                      ? ((h[0] = "ERROR: " + h[0]),
                        h.unshift(1),
                        l.apply(this, h))
                      : l(
                          1,
                          "ERROR: Problem executing validation callback for option '" +
                            s +
                            "':",
                          w.message
                        );
                  } finally {
                    o[s] = b;
                  }
              });
          },
          q = function (e, s) {
            var g = !1,
              b = o[e];
            return o[e] != s && ((o[e] = s), G(e), (g = b != o[e])), g;
          },
          Z = function (e) {
            r[e] ||
              (r[e] = function (s) {
                if (arguments.length)
                  e === "duration" && (I = void 0),
                    q(e, s) &&
                      (r.trigger("change", { what: e, newval: o[e] }),
                      B.shifts.indexOf(e) > -1 &&
                        r.trigger("shift", { reason: e }));
                else return o[e];
                return r;
              });
          };
        (this.controller = function () {
          return u;
        }),
          (this.state = function () {
            return c;
          }),
          (this.scrollOffset = function () {
            return C.start;
          }),
          (this.triggerPosition = function () {
            var e = o.offset;
            return (
              u &&
                (o.triggerElement
                  ? (e += F)
                  : (e += u.info("size") * r.triggerHook())),
              e
            );
          });
        var f, v;
        r.on("shift.internal", function (e) {
          var s = e.reason === "duration";
          ((c === L && s) || (c === R && o.duration === 0)) && n(), s && m();
        })
          .on("progress.internal", function (e) {
            n();
          })
          .on("add.internal", function (e) {
            m();
          })
          .on("destroy.internal", function (e) {
            r.removePin(e.reset);
          });
        var n = function (e) {
            if (f && u) {
              var s = u.info(),
                g = v.spacer.firstChild;
              if (!e && c === R) {
                i.css(g, "position") != "fixed" &&
                  (i.css(g, { position: "fixed" }), m());
                var b = i.get.offset(v.spacer, !0),
                  h =
                    o.reverse || o.duration === 0
                      ? s.scrollPos - C.start
                      : Math.round(y * o.duration * 10) / 10;
                (b[s.vertical ? "top" : "left"] += h),
                  i.css(v.spacer.firstChild, { top: b.top, left: b.left });
              } else {
                var w = {
                    position: v.inFlow ? "relative" : "absolute",
                    top: 0,
                    left: 0,
                  },
                  _ = i.css(g, "position") != w.position;
                v.pushFollowers
                  ? o.duration > 0 &&
                    ((c === L &&
                      parseFloat(i.css(v.spacer, "padding-top")) === 0) ||
                      (c === E &&
                        parseFloat(i.css(v.spacer, "padding-bottom")) === 0)) &&
                    (_ = !0)
                  : (w[s.vertical ? "top" : "left"] = o.duration * y),
                  i.css(g, w),
                  _ && m();
              }
            }
          },
          m = function () {
            if (f && u && v.inFlow) {
              var e = c === R,
                s = u.info("vertical"),
                g = v.spacer.firstChild,
                b = i.isMarginCollapseType(i.css(v.spacer, "display")),
                h = {};
              v.relSize.width || v.relSize.autoFullWidth
                ? e
                  ? i.css(f, { width: i.get.width(v.spacer) })
                  : i.css(f, { width: "100%" })
                : ((h["min-width"] = i.get.width(s ? f : g, !0, !0)),
                  (h.width = e ? h["min-width"] : "auto")),
                v.relSize.height
                  ? e
                    ? i.css(f, {
                        height:
                          i.get.height(v.spacer) -
                          (v.pushFollowers ? o.duration : 0),
                      })
                    : i.css(f, { height: "100%" })
                  : ((h["min-height"] = i.get.height(s ? g : f, !0, !b)),
                    (h.height = e ? h["min-height"] : "auto")),
                v.pushFollowers &&
                  ((h["padding" + (s ? "Top" : "Left")] = o.duration * y),
                  (h["padding" + (s ? "Bottom" : "Right")] =
                    o.duration * (1 - y))),
                i.css(v.spacer, h);
            }
          },
          O = function () {
            u && f && c === R && !u.info("isDocument") && n();
          },
          D = function () {
            u &&
              f &&
              c === R &&
              (((v.relSize.width || v.relSize.autoFullWidth) &&
                i.get.width(window) != i.get.width(v.spacer.parentNode)) ||
                (v.relSize.height &&
                  i.get.height(window) != i.get.height(v.spacer.parentNode))) &&
              m();
          },
          $ = function (e) {
            u &&
              f &&
              c === R &&
              !u.info("isDocument") &&
              (e.preventDefault(),
              u._setScrollPos(
                u.info("scrollPos") -
                  ((e.wheelDelta ||
                    e[u.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) /
                    3 || -e.detail * 30)
              ));
          };
        (this.setPin = function (e, s) {
          var g = { pushFollowers: !0, spacerClass: "scrollmagic-pin-spacer" },
            b = s && s.hasOwnProperty("pushFollowers");
          if (((s = i.extend({}, g, s)), (e = i.get.elements(e)[0]), e)) {
            if (i.css(e, "position") === "fixed")
              return (
                l(
                  1,
                  "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."
                ),
                r
              );
          } else
            return (
              l(
                1,
                "ERROR calling method 'setPin()': Invalid pin element supplied."
              ),
              r
            );
          if (f) {
            if (f === e) return r;
            r.removePin();
          }
          f = e;
          var h = f.parentNode.style.display,
            w = [
              "top",
              "left",
              "bottom",
              "right",
              "margin",
              "marginLeft",
              "marginRight",
              "marginTop",
              "marginBottom",
            ];
          f.parentNode.style.display = "none";
          var _ = i.css(f, "position") != "absolute",
            M = i.css(f, w.concat(["display"])),
            W = i.css(f, ["width", "height"]);
          (f.parentNode.style.display = h),
            !_ &&
              s.pushFollowers &&
              (l(
                2,
                "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."
              ),
              (s.pushFollowers = !1)),
            window.setTimeout(function () {
              f &&
                o.duration === 0 &&
                b &&
                s.pushFollowers &&
                l(
                  2,
                  "WARNING: pushFollowers =",
                  !0,
                  "has no effect, when scene duration is 0."
                );
            }, 0);
          var k = f.parentNode.insertBefore(document.createElement("div"), f),
            J = i.extend(M, {
              position: _ ? "relative" : "absolute",
              boxSizing: "content-box",
              mozBoxSizing: "content-box",
              webkitBoxSizing: "content-box",
            });
          if (
            (_ || i.extend(J, i.css(f, ["width", "height"])),
            i.css(k, J),
            k.setAttribute(N, ""),
            i.addClass(k, s.spacerClass),
            (v = {
              spacer: k,
              relSize: {
                width: W.width.slice(-1) === "%",
                height: W.height.slice(-1) === "%",
                autoFullWidth:
                  W.width === "auto" && _ && i.isMarginCollapseType(M.display),
              },
              pushFollowers: s.pushFollowers,
              inFlow: _,
            }),
            !f.___origStyle)
          ) {
            f.___origStyle = {};
            var Q = f.style,
              ie = w.concat([
                "width",
                "height",
                "position",
                "boxSizing",
                "mozBoxSizing",
                "webkitBoxSizing",
              ]);
            ie.forEach(function (ee) {
              f.___origStyle[ee] = Q[ee] || "";
            });
          }
          return (
            v.relSize.width && i.css(k, { width: W.width }),
            v.relSize.height && i.css(k, { height: W.height }),
            k.appendChild(f),
            i.css(f, {
              position: _ ? "relative" : "absolute",
              margin: "auto",
              top: "auto",
              left: "auto",
              bottom: "auto",
              right: "auto",
            }),
            (v.relSize.width || v.relSize.autoFullWidth) &&
              i.css(f, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box",
              }),
            window.addEventListener("scroll", O),
            window.addEventListener("resize", O),
            window.addEventListener("resize", D),
            f.addEventListener("mousewheel", $),
            f.addEventListener("DOMMouseScroll", $),
            l(3, "added pin"),
            n(),
            r
          );
        }),
          (this.removePin = function (e) {
            if (f) {
              if ((c === R && n(!0), e || !u)) {
                var s = v.spacer.firstChild;
                if (s.hasAttribute(N)) {
                  var g = v.spacer.style,
                    b = [
                      "margin",
                      "marginLeft",
                      "marginRight",
                      "marginTop",
                      "marginBottom",
                    ],
                    h = {};
                  b.forEach(function (w) {
                    h[w] = g[w] || "";
                  }),
                    i.css(s, h);
                }
                v.spacer.parentNode.insertBefore(s, v.spacer),
                  v.spacer.parentNode.removeChild(v.spacer),
                  f.parentNode.hasAttribute(N) ||
                    (i.css(f, f.___origStyle), delete f.___origStyle);
              }
              window.removeEventListener("scroll", O),
                window.removeEventListener("resize", O),
                window.removeEventListener("resize", D),
                f.removeEventListener("mousewheel", $),
                f.removeEventListener("DOMMouseScroll", $),
                (f = void 0),
                l(3, "removed pin (reset: " + (e ? "true" : "false") + ")");
            }
            return r;
          });
        var X,
          K = [];
        return (
          r.on("destroy.internal", function (e) {
            r.removeClassToggle(e.reset);
          }),
          (this.setClassToggle = function (e, s) {
            var g = i.get.elements(e);
            return g.length === 0 || !i.type.String(s)
              ? (l(
                  1,
                  "ERROR calling method 'setClassToggle()': Invalid " +
                    (g.length === 0 ? "element" : "classes") +
                    " supplied."
                ),
                r)
              : (K.length > 0 && r.removeClassToggle(),
                (X = s),
                (K = g),
                r.on("enter.internal_class leave.internal_class", function (b) {
                  var h = b.type === "enter" ? i.addClass : i.removeClass;
                  K.forEach(function (w, _) {
                    h(w, X);
                  });
                }),
                r);
          }),
          (this.removeClassToggle = function (e) {
            return (
              e &&
                K.forEach(function (s, g) {
                  i.removeClass(s, X);
                }),
              r.off("start.internal_class end.internal_class"),
              (X = void 0),
              (K = []),
              r
            );
          }),
          z(),
          r
        );
      });
    var B = {
      defaults: {
        duration: 0,
        offset: 0,
        triggerElement: void 0,
        triggerHook: 0.5,
        reverse: !0,
        loglevel: 2,
      },
      validate: {
        offset: function (a) {
          if (((a = parseFloat(a)), !i.type.Number(a)))
            throw ['Invalid value for option "offset":', a];
          return a;
        },
        triggerElement: function (a) {
          if (((a = a || void 0), a)) {
            var p = i.get.elements(a)[0];
            if (p && p.parentNode) a = p;
            else
              throw [
                'Element defined in option "triggerElement" was not found:',
                a,
              ];
          }
          return a;
        },
        triggerHook: function (a) {
          var p = { onCenter: 0.5, onEnter: 1, onLeave: 0 };
          if (i.type.Number(a)) a = Math.max(0, Math.min(parseFloat(a), 1));
          else if (a in p) a = p[a];
          else throw ['Invalid value for option "triggerHook": ', a];
          return a;
        },
        reverse: function (a) {
          return !!a;
        },
        loglevel: function (a) {
          if (((a = parseInt(a)), !i.type.Number(a) || a < 0 || a > 3))
            throw ['Invalid value for option "loglevel":', a];
          return a;
        },
      },
      shifts: ["duration", "offset", "triggerHook"],
    };
    (d.Scene.addOption = function (a, p, E, R) {
      a in B.defaults
        ? d._util.log(
            1,
            "[static] ScrollMagic.Scene -> Cannot add Scene option '" +
              a +
              "', because it already exists."
          )
        : ((B.defaults[a] = p), (B.validate[a] = E), R && B.shifts.push(a));
    }),
      (d.Scene.extend = function (a) {
        var p = this;
        (d.Scene = function () {
          return (
            p.apply(this, arguments),
            (this.$super = i.extend({}, this)),
            a.apply(this, arguments) || this
          );
        }),
          i.extend(d.Scene, p),
          (d.Scene.prototype = p.prototype),
          (d.Scene.prototype.constructor = d.Scene);
      }),
      (d.Event = function (a, p, E, R) {
        R = R || {};
        for (var L in R) this[L] = R[L];
        return (
          (this.type = a),
          (this.target = this.currentTarget = E),
          (this.namespace = p || ""),
          (this.timeStamp = this.timestamp = Date.now()),
          this
        );
      });
    var i = (d._util = (function (a) {
      var p = {},
        E,
        R = function (t) {
          return parseFloat(t) || 0;
        },
        L = function (t) {
          return t.currentStyle ? t.currentStyle : a.getComputedStyle(t);
        },
        j = function (t, l, S, A) {
          if (((l = l === document ? a : l), l === a)) A = !1;
          else if (!u.DomElement(l)) return 0;
          t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
          var P =
            (S
              ? l["offset" + t] || l["outer" + t]
              : l["client" + t] || l["inner" + t]) || 0;
          if (S && A) {
            var x = L(l);
            P +=
              t === "Height"
                ? R(x.marginTop) + R(x.marginBottom)
                : R(x.marginLeft) + R(x.marginRight);
          }
          return P;
        },
        r = function (t) {
          return t
            .replace(/^[^a-z]+([a-z])/g, "$1")
            .replace(/-([a-z])/g, function (l) {
              return l[1].toUpperCase();
            });
        };
      (p.extend = function (t) {
        for (t = t || {}, E = 1; E < arguments.length; E++)
          if (arguments[E])
            for (var l in arguments[E])
              arguments[E].hasOwnProperty(l) && (t[l] = arguments[E][l]);
        return t;
      }),
        (p.isMarginCollapseType = function (t) {
          return (
            ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) >
            -1
          );
        });
      var o = 0,
        c = ["ms", "moz", "webkit", "o"],
        y = a.requestAnimationFrame,
        C = a.cancelAnimationFrame;
      for (E = 0; !y && E < c.length; ++E)
        (y = a[c[E] + "RequestAnimationFrame"]),
          (C =
            a[c[E] + "CancelAnimationFrame"] ||
            a[c[E] + "CancelRequestAnimationFrame"]);
      y ||
        (y = function (t) {
          var l = new Date().getTime(),
            S = Math.max(0, 16 - (l - o)),
            A = a.setTimeout(function () {
              t(l + S);
            }, S);
          return (o = l + S), A;
        }),
        C ||
          (C = function (t) {
            a.clearTimeout(t);
          }),
        (p.rAF = y.bind(a)),
        (p.cAF = C.bind(a));
      var F = ["error", "warn", "log"],
        T = a.console || {};
      for (T.log = T.log || function () {}, E = 0; E < F.length; E++) {
        var I = F[E];
        T[I] || (T[I] = T.log);
      }
      p.log = function (t) {
        (t > F.length || t <= 0) && (t = F.length);
        var l = new Date(),
          S =
            ("0" + l.getHours()).slice(-2) +
            ":" +
            ("0" + l.getMinutes()).slice(-2) +
            ":" +
            ("0" + l.getSeconds()).slice(-2) +
            ":" +
            ("00" + l.getMilliseconds()).slice(-3),
          A = F[t - 1],
          P = Array.prototype.splice.call(arguments, 1),
          x = Function.prototype.bind.call(T[A], T);
        P.unshift(S), x.apply(T, P);
      };
      var u = (p.type = function (t) {
        return Object.prototype.toString
          .call(t)
          .replace(/^\[object (.+)\]$/, "$1")
          .toLowerCase();
      });
      (u.String = function (t) {
        return u(t) === "string";
      }),
        (u.Function = function (t) {
          return u(t) === "function";
        }),
        (u.Array = function (t) {
          return Array.isArray(t);
        }),
        (u.Number = function (t) {
          return !u.Array(t) && t - parseFloat(t) + 1 >= 0;
        }),
        (u.DomElement = function (t) {
          return typeof HTMLElement == "object" ||
            typeof HTMLElement == "function"
            ? t instanceof HTMLElement || t instanceof SVGElement
            : t &&
                typeof t == "object" &&
                t !== null &&
                t.nodeType === 1 &&
                typeof t.nodeName == "string";
        });
      var z = (p.get = {});
      return (
        (z.elements = function (t) {
          var l = [];
          if (u.String(t))
            try {
              t = document.querySelectorAll(t);
            } catch {
              return l;
            }
          if (u(t) === "nodelist" || u.Array(t) || t instanceof NodeList)
            for (var S = 0, A = (l.length = t.length); S < A; S++) {
              var P = t[S];
              l[S] = u.DomElement(P) ? P : z.elements(P);
            }
          else (u.DomElement(t) || t === document || t === a) && (l = [t]);
          return l;
        }),
        (z.scrollTop = function (t) {
          return t && typeof t.scrollTop == "number"
            ? t.scrollTop
            : a.pageYOffset || 0;
        }),
        (z.scrollLeft = function (t) {
          return t && typeof t.scrollLeft == "number"
            ? t.scrollLeft
            : a.pageXOffset || 0;
        }),
        (z.width = function (t, l, S) {
          return j("width", t, l, S);
        }),
        (z.height = function (t, l, S) {
          return j("height", t, l, S);
        }),
        (z.offset = function (t, l) {
          var S = { top: 0, left: 0 };
          if (t && t.getBoundingClientRect) {
            var A = t.getBoundingClientRect();
            (S.top = A.top),
              (S.left = A.left),
              l || ((S.top += z.scrollTop()), (S.left += z.scrollLeft()));
          }
          return S;
        }),
        (p.addClass = function (t, l) {
          l && (t.classList ? t.classList.add(l) : (t.className += " " + l));
        }),
        (p.removeClass = function (t, l) {
          l &&
            (t.classList
              ? t.classList.remove(l)
              : (t.className = t.className.replace(
                  new RegExp(
                    "(^|\\b)" + l.split(" ").join("|") + "(\\b|$)",
                    "gi"
                  ),
                  " "
                )));
        }),
        (p.css = function (t, l) {
          if (u.String(l)) return L(t)[r(l)];
          if (u.Array(l)) {
            var S = {},
              A = L(t);
            return (
              l.forEach(function (U, G) {
                S[U] = A[r(U)];
              }),
              S
            );
          } else
            for (var P in l) {
              var x = l[P];
              x == parseFloat(x) && (x += "px"), (t.style[r(P)] = x);
            }
        }),
        p
      );
    })(window || {}));
    return (
      (d.Scene.prototype.addIndicators = function () {
        return (
          d._util.log(
            1,
            "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"
          ),
          this
        );
      }),
      (d.Scene.prototype.removeIndicators = function () {
        return (
          d._util.log(
            1,
            "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"
          ),
          this
        );
      }),
      (d.Scene.prototype.setTween = function () {
        return (
          d._util.log(
            1,
            "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"
          ),
          this
        );
      }),
      (d.Scene.prototype.removeTween = function () {
        return (
          d._util.log(
            1,
            "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"
          ),
          this
        );
      }),
      (d.Scene.prototype.setVelocity = function () {
        return (
          d._util.log(
            1,
            "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"
          ),
          this
        );
      }),
      (d.Scene.prototype.removeVelocity = function () {
        return (
          d._util.log(
            1,
            "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"
          ),
          this
        );
      }),
      d
    );
  });
})(te);
var ne = te.exports;
const le = re(ne),
  ue = se({ __proto__: null, default: le }, [ne]);
export { ue as S };
//# sourceMappingURL=ScrollMagic.1c96735c.js.map
