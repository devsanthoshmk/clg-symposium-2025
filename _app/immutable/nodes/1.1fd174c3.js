import {
  s as X,
  e as i,
  a as w,
  t as S,
  h as Y,
  c,
  d as t,
  b as j,
  f as h,
  g as V,
  i as f,
  j as E,
  k as U,
  l as O,
  n as W,
  m as Z,
} from "../chunks/scheduler.b44937bc.js";
import { S as $, i as u0 } from "../chunks/index.08749574.js";
import { p as E0 } from "../chunks/stores.8bffc7f8.js";
(function () {
  try {
    var u =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      s = new s0().stack;
    s &&
      ((u._sentryDebugIds = u._sentryDebugIds || {}),
      (u._sentryDebugIds[s] = "8f604e7f-fdd5-4037-ba79-fe61579872fa"),
      (u._sentryDebugIdIdentifier =
        "sentry-dbid-8f604e7f-fdd5-4037-ba79-fe61579872fa"));
  } catch {}
})();
function e0(u) {
  var R, z, G;
  let s,
    l,
    _,
    n,
    m,
    o,
    a,
    A = u[1].status + "",
    k,
    x,
    r,
    v,
    P = u[3][Math.floor(Math.random() * u[3].length)] + "",
    T,
    q,
    b,
    C =
      (u[2][u[1].status] ?? ((R = u[1].error) == null ? void 0 : R.message)) +
      "",
    H,
    F,
    N,
    g,
    B = ((z = u[1].error) == null ? void 0 : z.message) + "",
    M;
  return (
    (document.title = s =
      u[1].status + " - " + ((G = u[1].error) == null ? void 0 : G.message)),
    {
      c() {
        (l = i("meta")),
          (_ = w()),
          (n = i("section")),
          (m = i("div")),
          (o = i("div")),
          (a = i("h1")),
          (k = S(A)),
          (x = w()),
          (r = i("div")),
          (v = i("h2")),
          (T = S(P)),
          (q = w()),
          (b = i("h2")),
          (H = S(C)),
          (F = w()),
          (N = w()),
          (g = i("pre")),
          (M = S(B)),
          this.h();
      },
      l(e) {
        const d = Y("svelte-1ukkjju", document.head);
        (l = c(d, "META", { name: !0, content: !0 })),
          d.forEach(t),
          (_ = j(e)),
          (n = c(e, "SECTION", { class: !0 }));
        var y = h(n);
        m = c(y, "DIV", { class: !0 });
        var I = h(m);
        o = c(I, "DIV", { class: !0 });
        var D = h(o);
        a = c(D, "H1", { class: !0 });
        var J = h(a);
        (k = V(J, A)),
          J.forEach(t),
          (x = j(D)),
          (r = c(D, "DIV", { class: !0 }));
        var p = h(r);
        v = c(p, "H2", { class: !0 });
        var K = h(v);
        (T = V(K, P)), K.forEach(t), (q = j(p)), (b = c(p, "H2", {}));
        var L = h(b);
        (H = V(L, C)),
          L.forEach(t),
          (F = j(p)),
          (N = j(p)),
          (g = c(p, "PRE", { class: !0 }));
        var Q = h(g);
        (M = V(Q, B)),
          Q.forEach(t),
          p.forEach(t),
          D.forEach(t),
          I.forEach(t),
          y.forEach(t),
          this.h();
      },
      h() {
        f(l, "name", "robots"),
          f(l, "content", "noindex"),
          f(a, "class", "text-8xl"),
          f(v, "class", "text-2xl font-bold"),
          f(g, "class", "mt-3"),
          f(r, "class", "text-left"),
          f(o, "class", "flex flex-wrap items-center gap-4"),
          f(
            m,
            "class",
            "flex h-screen items-center justify-center text-center align-middle"
          ),
          f(n, "class", "m-auto max-w-md px-10");
      },
      m(e, d) {
        E(document.head, l),
          U(e, _, d),
          U(e, n, d),
          E(n, m),
          E(m, o),
          E(o, a),
          E(a, k),
          E(o, x),
          E(o, r),
          E(r, v),
          E(v, T),
          E(r, q),
          E(r, b),
          E(b, H),
          E(r, F),
          E(r, N),
          E(r, g),
          E(g, M);
      },
      p(e, [d]) {
        var y, I, D;
        d & 2 &&
          s !==
            (s =
              e[1].status +
              " - " +
              ((y = e[1].error) == null ? void 0 : y.message)) &&
          (document.title = s),
          d & 2 && A !== (A = e[1].status + "") && O(k, A),
          d & 2 &&
            C !==
              (C =
                (e[2][e[1].status] ??
                  ((I = e[1].error) == null ? void 0 : I.message)) + "") &&
            O(H, C),
          d & 2 &&
            B !== (B = ((D = e[1].error) == null ? void 0 : D.message) + "") &&
            O(M, B);
      },
      i: W,
      o: W,
      d(e) {
        e && (t(_), t(n)), t(l);
      },
    }
  );
}
function t0(u, s, l) {
  let _;
  Z(u, E0, (a) => l(1, (_ = a)));
  let { data: n } = s;
  const m = {
      400: "คุณส่งอะไรมาเนีย!",
      401: "คุณไม่มีสิทธิ์เข้าถึงหน้านี้",
      403: "เขตหวงห้ามเด้อ",
      404: "ไม่พบหน้าที่คุณต้องการ อาจจะเป็นเพราะคุณพิมพ์ผิดหรือเว็บล่มแต่ไม่น่าใช่",
      405: "ไม่รับครับ",
      406: "รับไม่ได้!",
      408: "เกินเวลา",
      409: "เกิดความขัดแย้งขึ้น",
      410: "หายไปแล้ว",
      414: "ยาวไปแล้ว",
      500: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์",
      501: "ยังไม่ได้ทำ",
      504: "เกตเวย์หมดเวลา",
    },
    o = [
      "ทำไมเรายังไม่วาร์ปคุณปรารีส",
      "ขออภัยครับตอนนี้แมวนอนทับคีย์บอร์ดอยู่",
      '"เว็บล่มอีกแล้ว???" คุณอาจกำลังคิด',
      "เราไม่ได้ทำอะไรผิด แต่เราก็ไม่ได้ทำอะไรเลย",
      "เกิด ทำโครงงาน ตาย(ยังไม่ได้ต้องส่งโครงงานก่อน)",
      "มีข้อผิดพลาดเกิดขึ้น",
    ];
  return (
    (u.$$set = (a) => {
      "data" in a && l(0, (n = a.data));
    }),
    [n, _, m, o]
  );
}
class s0 extends $ {
  constructor(s) {
    super(), u0(this, s, t0, e0, X, { data: 0 });
  }
}
export { s0 as component };
//# sourceMappingURL=1.1fd174c3.js.map
