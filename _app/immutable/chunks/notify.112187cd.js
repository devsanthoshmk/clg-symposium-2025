import { t as d } from "./toastStore.b0ed32a8.js";
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
      n = new Error().stack;
    n &&
      ((o._sentryDebugIds = o._sentryDebugIds || {}),
      (o._sentryDebugIds[n] = "790c8787-c102-4c81-98dd-9117a88503c4"),
      (o._sentryDebugIdIdentifier =
        "sentry-dbid-790c8787-c102-4c81-98dd-9117a88503c4"));
  } catch {}
})();
const i = ({ message: o, type: n = "default", ...r }) => (
  n === "error" && console.error(o),
  n === "warning" && console.warn(o),
  n === "success" && console.log(o),
  n === "default" && console.log(o),
  d.push(o, { ...r, duration: 1e4, dismissable: !0, type: n })
);
export { i as n };
//# sourceMappingURL=notify.112187cd.js.map
