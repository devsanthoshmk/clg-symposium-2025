import { V as h, W as b } from "./scheduler.b44937bc.js";
(function () {
  try {
    var t =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      e = new Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = "f2f12982-480b-4b4c-8d14-8e2bbc318ca2"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-f2f12982-480b-4b4c-8d14-8e2bbc318ca2"));
  } catch {}
})();
function m(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function v(t, { delay: e = 0, duration: s = 400, easing: c = h } = {}) {
  const i = +getComputedStyle(t).opacity;
  return { delay: e, duration: s, easing: c, css: (o) => `opacity: ${o * i}` };
}
function x(
  t,
  {
    delay: e = 0,
    duration: s = 400,
    easing: c = m,
    x: i = 0,
    y: o = 0,
    opacity: y = 0,
  } = {}
) {
  const d = getComputedStyle(t),
    p = +d.opacity,
    r = d.transform === "none" ? "" : d.transform,
    a = p * (1 - y),
    [u, $] = b(i),
    [f, _] = b(o);
  return {
    delay: e,
    duration: s,
    easing: c,
    css: (l, g) => `
			transform: ${r} translate(${(1 - l) * u}${$}, ${(1 - l) * f}${_});
			opacity: ${p - a * g}`,
  };
}
function F(
  t,
  { delay: e = 0, duration: s = 400, easing: c = m, axis: i = "y" } = {}
) {
  const o = getComputedStyle(t),
    y = +o.opacity,
    d = i === "y" ? "height" : "width",
    p = parseFloat(o[d]),
    r = i === "y" ? ["top", "bottom"] : ["left", "right"],
    a = r.map((n) => `${n[0].toUpperCase()}${n.slice(1)}`),
    u = parseFloat(o[`padding${a[0]}`]),
    $ = parseFloat(o[`padding${a[1]}`]),
    f = parseFloat(o[`margin${a[0]}`]),
    _ = parseFloat(o[`margin${a[1]}`]),
    l = parseFloat(o[`border${a[0]}Width`]),
    g = parseFloat(o[`border${a[1]}Width`]);
  return {
    delay: e,
    duration: s,
    easing: c,
    css: (n) =>
      `overflow: hidden;opacity: ${Math.min(n * 20, 1) * y};${d}: ${
        n * p
      }px;padding-${r[0]}: ${n * u}px;padding-${r[1]}: ${n * $}px;margin-${
        r[0]
      }: ${n * f}px;margin-${r[1]}: ${n * _}px;border-${r[0]}-width: ${
        n * l
      }px;border-${r[1]}-width: ${n * g}px;`,
  };
}
export { x as a, m as c, v as f, F as s };
//# sourceMappingURL=index.e14db2ec.js.map
