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
      (e._sentryDebugIds[t] = "423cd67c-658e-4ec0-926f-f5ad1b3a8474"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-423cd67c-658e-4ec0-926f-f5ad1b3a8474"));
  } catch {}
})();
const r = new Map([
  [
    "fetch failed",
    "ไม่สามารถเข้าถึงเซิร์ฟเวอร์ได้ โปรดตรวจสอบการเชื่อมต่ออินเตอร์เน็ต",
  ],
  ["Failed to fetch", "ไม่สามารถเข้าถึงอินเตอร์เน็ต"],
  ["TypeError: fetch failed", "ไม่มีการเข้าถึงอินเตอร์เน็ต"],
  ["Invalid login credentials", "อีเมลหรือรหัสผ่านไม่ถูกต้อง"],
  [
    "Unable to validate email address: invalid format",
    "ไม่สามารถตรวจสอบอีเมลได้: รูปแบบไม่ถูกต้อง",
  ],
  ["staff", "เจ้าหน้าที่"],
  ["teacher", "ครู"],
  ["school-contact", "ผู้ติดต่อโรงเรียน"],
  ["student-team-contact", "นักเรียน"],
  [
    "For security purposes, you can only request this once every 60 seconds",
    "เนื่องด้วยเหตุผลด้านความปลอดภัย คุณสามารถส่งคำขอรีเซ็ตรหัสผ่านได้หนึ่งครั้งทุก ๆ 60 วินาที",
  ],
  [
    "Email rate limit exceeded",
    "คุณส่งคำเขิญมากเกินไป โปรดรอสักครู่ก่อนส่งคำเชิญใหม่",
  ],
  [
    "Email link is invalid or has expired",
    "ลิงก์รับคำเชิญผ่านอีเมลไม่ถูกต้องหรือหมดอายุแล้ว",
  ],
  [
    "A user with this email address has already been registered",
    "อีเมลที่ได้รับการลงทะเบียนไปแล้ว",
  ],
  [
    "Auth session missing!",
    "ไม่พบเซสชันการยืนยันตัวตน คุณอาจไม่ได้มาตามลิงก์ที่ถูกต้อง",
  ],
  [
    "New password should be different from the old password.",
    "รหัสผ่านใหม่ควรแตกต่างกับรหัสผ่านเดิม",
  ],
  [
    "Email link is invalid or has expired",
    "ลิงก์รับคำเชิญผ่านอีเมลไม่ถูกต้องหรือหมดอายุแล้ว",
  ],
]);
function o(e) {
  return r.has(e ?? "") ? r.get(e ?? "") : e;
}
function d(e) {
  return typeof e > "u"
    ? void 0
    : ((e = e.map((n) => n.trim()).filter((n) => n !== "" || n !== void 0)),
      new Intl.ListFormat("th-TH", {
        style: "long",
        type: "conjunction",
      }).format(e));
}
function i(e, t) {
  if (!(typeof e > "u"))
    return t
      ? new Intl.DateTimeFormat("th-TH", t).format(e)
      : new Intl.DateTimeFormat("th-TH", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(e);
}
function f(e, t) {
  if (!(typeof e > "u"))
    return t
      ? new Intl.DateTimeFormat("th-TH", t).format(e)
      : new Intl.DateTimeFormat("th-TH", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        }).format(e);
}
function s(e, t) {
  if (e !== void 0) return i(new Date(e ?? ""), t);
}
export { d as a, f as b, s as d, o as t };
//# sourceMappingURL=langUtils.50e57082.js.map
