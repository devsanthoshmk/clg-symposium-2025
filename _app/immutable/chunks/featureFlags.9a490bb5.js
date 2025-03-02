import "./index.08749574.js";
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
      (e._sentryDebugIds[t] = "03fc7214-0980-4175-9498-c0d85e55efe3"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-03fc7214-0980-4175-9498-c0d85e55efe3"));
  } catch {}
})();
const r = {
  openForLogin: !1,
  disableInviteNewUser: !0,
  openForRegistrationAndEditProject: !1,
  openForUploadAbstract: !1,
  openForUploadArticle: !1,
};
export { r as f };
//# sourceMappingURL=featureFlags.9a490bb5.js.map
