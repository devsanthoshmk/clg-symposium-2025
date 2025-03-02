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
      (e._sentryDebugIds[t] = "1baea43b-c57a-4805-92b4-9b276586a173"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-1baea43b-c57a-4805-92b4-9b276586a173"));
  } catch {}
})();
var vn = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  bt = vn(() => {});
String.prototype.codePointAt ||
  (function () {
    var e = (function () {
        try {
          var r = {},
            n = Object.defineProperty,
            a = n(r, r, r) && n;
        } catch {}
        return a;
      })(),
      t = function (r) {
        if (this == null) throw TypeError();
        var n = String(this),
          a = n.length,
          o = r ? Number(r) : 0;
        if ((o != o && (o = 0), !(o < 0 || o >= a))) {
          var s = n.charCodeAt(o),
            u;
          return s >= 55296 &&
            s <= 56319 &&
            a > o + 1 &&
            ((u = n.charCodeAt(o + 1)), u >= 56320 && u <= 57343)
            ? (s - 55296) * 1024 + u - 56320 + 65536
            : s;
        }
      };
    e
      ? e(String.prototype, "codePointAt", {
          value: t,
          configurable: !0,
          writable: !0,
        })
      : (String.prototype.codePointAt = t);
  })();
var St = 0,
  xr = -3;
function Oe() {
  (this.table = new Uint16Array(16)), (this.trans = new Uint16Array(288));
}
function gn(e, t) {
  (this.source = e),
    (this.sourceIndex = 0),
    (this.tag = 0),
    (this.bitcount = 0),
    (this.dest = t),
    (this.destLen = 0),
    (this.ltree = new Oe()),
    (this.dtree = new Oe());
}
var br = new Oe(),
  Sr = new Oe(),
  Et = new Uint8Array(30),
  Ct = new Uint16Array(30),
  Er = new Uint8Array(30),
  Cr = new Uint16Array(30),
  mn = new Uint8Array([
    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
  ]),
  Lt = new Oe(),
  oe = new Uint8Array(288 + 32);
function Tr(e, t, r, n) {
  var a, o;
  for (a = 0; a < r; ++a) e[a] = 0;
  for (a = 0; a < 30 - r; ++a) e[a + r] = (a / r) | 0;
  for (o = n, a = 0; a < 30; ++a) (t[a] = o), (o += 1 << e[a]);
}
function yn(e, t) {
  var r;
  for (r = 0; r < 7; ++r) e.table[r] = 0;
  for (e.table[7] = 24, e.table[8] = 152, e.table[9] = 112, r = 0; r < 24; ++r)
    e.trans[r] = 256 + r;
  for (r = 0; r < 144; ++r) e.trans[24 + r] = r;
  for (r = 0; r < 8; ++r) e.trans[24 + 144 + r] = 280 + r;
  for (r = 0; r < 112; ++r) e.trans[24 + 144 + 8 + r] = 144 + r;
  for (r = 0; r < 5; ++r) t.table[r] = 0;
  for (t.table[5] = 32, r = 0; r < 32; ++r) t.trans[r] = r;
}
var It = new Uint16Array(16);
function rt(e, t, r, n) {
  var a, o;
  for (a = 0; a < 16; ++a) e.table[a] = 0;
  for (a = 0; a < n; ++a) e.table[t[r + a]]++;
  for (e.table[0] = 0, o = 0, a = 0; a < 16; ++a)
    (It[a] = o), (o += e.table[a]);
  for (a = 0; a < n; ++a) t[r + a] && (e.trans[It[t[r + a]]++] = a);
}
function xn(e) {
  e.bitcount-- || ((e.tag = e.source[e.sourceIndex++]), (e.bitcount = 7));
  var t = e.tag & 1;
  return (e.tag >>>= 1), t;
}
function se(e, t, r) {
  if (!t) return r;
  for (; e.bitcount < 24; )
    (e.tag |= e.source[e.sourceIndex++] << e.bitcount), (e.bitcount += 8);
  var n = e.tag & (65535 >>> (16 - t));
  return (e.tag >>>= t), (e.bitcount -= t), n + r;
}
function ct(e, t) {
  for (; e.bitcount < 24; )
    (e.tag |= e.source[e.sourceIndex++] << e.bitcount), (e.bitcount += 8);
  var r = 0,
    n = 0,
    a = 0,
    o = e.tag;
  do
    (n = 2 * n + (o & 1)),
      (o >>>= 1),
      ++a,
      (r += t.table[a]),
      (n -= t.table[a]);
  while (n >= 0);
  return (e.tag = o), (e.bitcount -= a), t.trans[r + n];
}
function bn(e, t, r) {
  var n, a, o, s, u, i;
  for (n = se(e, 5, 257), a = se(e, 5, 1), o = se(e, 4, 4), s = 0; s < 19; ++s)
    oe[s] = 0;
  for (s = 0; s < o; ++s) {
    var p = se(e, 3, 0);
    oe[mn[s]] = p;
  }
  for (rt(Lt, oe, 0, 19), u = 0; u < n + a; ) {
    var l = ct(e, Lt);
    switch (l) {
      case 16:
        var h = oe[u - 1];
        for (i = se(e, 2, 3); i; --i) oe[u++] = h;
        break;
      case 17:
        for (i = se(e, 3, 3); i; --i) oe[u++] = 0;
        break;
      case 18:
        for (i = se(e, 7, 11); i; --i) oe[u++] = 0;
        break;
      default:
        oe[u++] = l;
        break;
    }
  }
  rt(t, oe, 0, n), rt(r, oe, n, a);
}
function Mt(e, t, r) {
  for (;;) {
    var n = ct(e, t);
    if (n === 256) return St;
    if (n < 256) e.dest[e.destLen++] = n;
    else {
      var a, o, s, u;
      for (
        n -= 257,
          a = se(e, Et[n], Ct[n]),
          o = ct(e, r),
          s = e.destLen - se(e, Er[o], Cr[o]),
          u = s;
        u < s + a;
        ++u
      )
        e.dest[e.destLen++] = e.dest[u];
    }
  }
}
function Sn(e) {
  for (var t, r, n; e.bitcount > 8; ) e.sourceIndex--, (e.bitcount -= 8);
  if (
    ((t = e.source[e.sourceIndex + 1]),
    (t = 256 * t + e.source[e.sourceIndex]),
    (r = e.source[e.sourceIndex + 3]),
    (r = 256 * r + e.source[e.sourceIndex + 2]),
    t !== (~r & 65535))
  )
    return xr;
  for (e.sourceIndex += 4, n = t; n; --n)
    e.dest[e.destLen++] = e.source[e.sourceIndex++];
  return (e.bitcount = 0), St;
}
function En(e, t) {
  var r = new gn(e, t),
    n,
    a,
    o;
  do {
    switch (((n = xn(r)), (a = se(r, 2, 0)), a)) {
      case 0:
        o = Sn(r);
        break;
      case 1:
        o = Mt(r, br, Sr);
        break;
      case 2:
        bn(r, r.ltree, r.dtree), (o = Mt(r, r.ltree, r.dtree));
        break;
      default:
        o = xr;
    }
    if (o !== St) throw new Error("Data error");
  } while (!n);
  return r.destLen < r.dest.length
    ? typeof r.dest.slice == "function"
      ? r.dest.slice(0, r.destLen)
      : r.dest.subarray(0, r.destLen)
    : r.dest;
}
yn(br, Sr);
Tr(Et, Ct, 4, 3);
Tr(Er, Cr, 2, 1);
Et[28] = 0;
Ct[28] = 258;
var Cn = En;
function Ee(e, t, r, n, a) {
  return (
    Math.pow(1 - a, 3) * e +
    3 * Math.pow(1 - a, 2) * a * t +
    3 * (1 - a) * Math.pow(a, 2) * r +
    Math.pow(a, 3) * n
  );
}
function ce() {
  (this.x1 = Number.NaN),
    (this.y1 = Number.NaN),
    (this.x2 = Number.NaN),
    (this.y2 = Number.NaN);
}
ce.prototype.isEmpty = function () {
  return isNaN(this.x1) || isNaN(this.y1) || isNaN(this.x2) || isNaN(this.y2);
};
ce.prototype.addPoint = function (e, t) {
  typeof e == "number" &&
    ((isNaN(this.x1) || isNaN(this.x2)) && ((this.x1 = e), (this.x2 = e)),
    e < this.x1 && (this.x1 = e),
    e > this.x2 && (this.x2 = e)),
    typeof t == "number" &&
      ((isNaN(this.y1) || isNaN(this.y2)) && ((this.y1 = t), (this.y2 = t)),
      t < this.y1 && (this.y1 = t),
      t > this.y2 && (this.y2 = t));
};
ce.prototype.addX = function (e) {
  this.addPoint(e, null);
};
ce.prototype.addY = function (e) {
  this.addPoint(null, e);
};
ce.prototype.addBezier = function (e, t, r, n, a, o, s, u) {
  var i = [e, t],
    p = [r, n],
    l = [a, o],
    h = [s, u];
  this.addPoint(e, t), this.addPoint(s, u);
  for (var c = 0; c <= 1; c++) {
    var f = 6 * i[c] - 12 * p[c] + 6 * l[c],
      v = -3 * i[c] + 9 * p[c] - 9 * l[c] + 3 * h[c],
      x = 3 * p[c] - 3 * i[c];
    if (v === 0) {
      if (f === 0) continue;
      var m = -x / f;
      0 < m &&
        m < 1 &&
        (c === 0 && this.addX(Ee(i[c], p[c], l[c], h[c], m)),
        c === 1 && this.addY(Ee(i[c], p[c], l[c], h[c], m)));
      continue;
    }
    var y = Math.pow(f, 2) - 4 * x * v;
    if (!(y < 0)) {
      var U = (-f + Math.sqrt(y)) / (2 * v);
      0 < U &&
        U < 1 &&
        (c === 0 && this.addX(Ee(i[c], p[c], l[c], h[c], U)),
        c === 1 && this.addY(Ee(i[c], p[c], l[c], h[c], U)));
      var S = (-f - Math.sqrt(y)) / (2 * v);
      0 < S &&
        S < 1 &&
        (c === 0 && this.addX(Ee(i[c], p[c], l[c], h[c], S)),
        c === 1 && this.addY(Ee(i[c], p[c], l[c], h[c], S)));
    }
  }
};
ce.prototype.addQuad = function (e, t, r, n, a, o) {
  var s = e + 0.6666666666666666 * (r - e),
    u = t + (2 / 3) * (n - t),
    i = s + (1 / 3) * (a - e),
    p = u + (1 / 3) * (o - t);
  this.addBezier(e, t, s, u, i, p, a, o);
};
function G() {
  (this.commands = []),
    (this.fill = "black"),
    (this.stroke = null),
    (this.strokeWidth = 1);
}
G.prototype.moveTo = function (e, t) {
  this.commands.push({ type: "M", x: e, y: t });
};
G.prototype.lineTo = function (e, t) {
  this.commands.push({ type: "L", x: e, y: t });
};
G.prototype.curveTo = G.prototype.bezierCurveTo = function (e, t, r, n, a, o) {
  this.commands.push({ type: "C", x1: e, y1: t, x2: r, y2: n, x: a, y: o });
};
G.prototype.quadTo = G.prototype.quadraticCurveTo = function (e, t, r, n) {
  this.commands.push({ type: "Q", x1: e, y1: t, x: r, y: n });
};
G.prototype.close = G.prototype.closePath = function () {
  this.commands.push({ type: "Z" });
};
G.prototype.extend = function (e) {
  if (e.commands) e = e.commands;
  else if (e instanceof ce) {
    var t = e;
    this.moveTo(t.x1, t.y1),
      this.lineTo(t.x2, t.y1),
      this.lineTo(t.x2, t.y2),
      this.lineTo(t.x1, t.y2),
      this.close();
    return;
  }
  Array.prototype.push.apply(this.commands, e);
};
G.prototype.getBoundingBox = function () {
  for (
    var e = new ce(), t = 0, r = 0, n = 0, a = 0, o = 0;
    o < this.commands.length;
    o++
  ) {
    var s = this.commands[o];
    switch (s.type) {
      case "M":
        e.addPoint(s.x, s.y), (t = n = s.x), (r = a = s.y);
        break;
      case "L":
        e.addPoint(s.x, s.y), (n = s.x), (a = s.y);
        break;
      case "Q":
        e.addQuad(n, a, s.x1, s.y1, s.x, s.y), (n = s.x), (a = s.y);
        break;
      case "C":
        e.addBezier(n, a, s.x1, s.y1, s.x2, s.y2, s.x, s.y),
          (n = s.x),
          (a = s.y);
        break;
      case "Z":
        (n = t), (a = r);
        break;
      default:
        throw new Error("Unexpected path command " + s.type);
    }
  }
  return e.isEmpty() && e.addPoint(0, 0), e;
};
G.prototype.draw = function (e) {
  e.beginPath();
  for (var t = 0; t < this.commands.length; t += 1) {
    var r = this.commands[t];
    r.type === "M"
      ? e.moveTo(r.x, r.y)
      : r.type === "L"
      ? e.lineTo(r.x, r.y)
      : r.type === "C"
      ? e.bezierCurveTo(r.x1, r.y1, r.x2, r.y2, r.x, r.y)
      : r.type === "Q"
      ? e.quadraticCurveTo(r.x1, r.y1, r.x, r.y)
      : r.type === "Z" && e.closePath();
  }
  this.fill && ((e.fillStyle = this.fill), e.fill()),
    this.stroke &&
      ((e.strokeStyle = this.stroke),
      (e.lineWidth = this.strokeWidth),
      e.stroke());
};
G.prototype.toPathData = function (e) {
  e = e !== void 0 ? e : 2;
  function t(s) {
    return Math.round(s) === s ? "" + Math.round(s) : s.toFixed(e);
  }
  function r() {
    for (var s = arguments, u = "", i = 0; i < arguments.length; i += 1) {
      var p = s[i];
      p >= 0 && i > 0 && (u += " "), (u += t(p));
    }
    return u;
  }
  for (var n = "", a = 0; a < this.commands.length; a += 1) {
    var o = this.commands[a];
    o.type === "M"
      ? (n += "M" + r(o.x, o.y))
      : o.type === "L"
      ? (n += "L" + r(o.x, o.y))
      : o.type === "C"
      ? (n += "C" + r(o.x1, o.y1, o.x2, o.y2, o.x, o.y))
      : o.type === "Q"
      ? (n += "Q" + r(o.x1, o.y1, o.x, o.y))
      : o.type === "Z" && (n += "Z");
  }
  return n;
};
G.prototype.toSVG = function (e) {
  var t = '<path d="';
  return (
    (t += this.toPathData(e)),
    (t += '"'),
    this.fill &&
      this.fill !== "black" &&
      (this.fill === null
        ? (t += ' fill="none"')
        : (t += ' fill="' + this.fill + '"')),
    this.stroke &&
      (t +=
        ' stroke="' +
        this.stroke +
        '" stroke-width="' +
        this.strokeWidth +
        '"'),
    (t += "/>"),
    t
  );
};
G.prototype.toDOMElement = function (e) {
  var t = this.toPathData(e),
    r = document.createElementNS("http://www.w3.org/2000/svg", "path");
  return r.setAttribute("d", t), r;
};
function kr(e) {
  throw new Error(e);
}
function Gt(e, t) {
  e || kr(t);
}
var k = { fail: kr, argument: Gt, assert: Gt },
  Pt = 32768,
  Nt = 2147483648,
  Te = {},
  g = {},
  D = {};
function ne(e) {
  return function () {
    return e;
  };
}
g.BYTE = function (e) {
  return (
    k.argument(e >= 0 && e <= 255, "Byte value should be between 0 and 255."),
    [e]
  );
};
D.BYTE = ne(1);
g.CHAR = function (e) {
  return [e.charCodeAt(0)];
};
D.CHAR = ne(1);
g.CHARARRAY = function (e) {
  typeof e > "u" &&
    ((e = ""),
    console.warn(
      "Undefined CHARARRAY encountered and treated as an empty string. This is probably caused by a missing glyph name."
    ));
  for (var t = [], r = 0; r < e.length; r += 1) t[r] = e.charCodeAt(r);
  return t;
};
D.CHARARRAY = function (e) {
  return typeof e > "u" ? 0 : e.length;
};
g.USHORT = function (e) {
  return [(e >> 8) & 255, e & 255];
};
D.USHORT = ne(2);
g.SHORT = function (e) {
  return e >= Pt && (e = -(2 * Pt - e)), [(e >> 8) & 255, e & 255];
};
D.SHORT = ne(2);
g.UINT24 = function (e) {
  return [(e >> 16) & 255, (e >> 8) & 255, e & 255];
};
D.UINT24 = ne(3);
g.ULONG = function (e) {
  return [(e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, e & 255];
};
D.ULONG = ne(4);
g.LONG = function (e) {
  return (
    e >= Nt && (e = -(2 * Nt - e)),
    [(e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, e & 255]
  );
};
D.LONG = ne(4);
g.FIXED = g.ULONG;
D.FIXED = D.ULONG;
g.FWORD = g.SHORT;
D.FWORD = D.SHORT;
g.UFWORD = g.USHORT;
D.UFWORD = D.USHORT;
g.LONGDATETIME = function (e) {
  return [
    0,
    0,
    0,
    0,
    (e >> 24) & 255,
    (e >> 16) & 255,
    (e >> 8) & 255,
    e & 255,
  ];
};
D.LONGDATETIME = ne(8);
g.TAG = function (e) {
  return (
    k.argument(e.length === 4, "Tag should be exactly 4 ASCII characters."),
    [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]
  );
};
D.TAG = ne(4);
g.Card8 = g.BYTE;
D.Card8 = D.BYTE;
g.Card16 = g.USHORT;
D.Card16 = D.USHORT;
g.OffSize = g.BYTE;
D.OffSize = D.BYTE;
g.SID = g.USHORT;
D.SID = D.USHORT;
g.NUMBER = function (e) {
  return e >= -107 && e <= 107
    ? [e + 139]
    : e >= 108 && e <= 1131
    ? ((e = e - 108), [(e >> 8) + 247, e & 255])
    : e >= -1131 && e <= -108
    ? ((e = -e - 108), [(e >> 8) + 251, e & 255])
    : e >= -32768 && e <= 32767
    ? g.NUMBER16(e)
    : g.NUMBER32(e);
};
D.NUMBER = function (e) {
  return g.NUMBER(e).length;
};
g.NUMBER16 = function (e) {
  return [28, (e >> 8) & 255, e & 255];
};
D.NUMBER16 = ne(3);
g.NUMBER32 = function (e) {
  return [29, (e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, e & 255];
};
D.NUMBER32 = ne(5);
g.REAL = function (e) {
  var t = e.toString(),
    r = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(t);
  if (r) {
    var n = parseFloat("1e" + ((r[2] ? +r[2] : 0) + r[1].length));
    t = (Math.round(e * n) / n).toString();
  }
  for (var a = "", o = 0, s = t.length; o < s; o += 1) {
    var u = t[o];
    u === "e"
      ? (a += t[++o] === "-" ? "c" : "b")
      : u === "."
      ? (a += "a")
      : u === "-"
      ? (a += "e")
      : (a += u);
  }
  a += a.length & 1 ? "f" : "ff";
  for (var i = [30], p = 0, l = a.length; p < l; p += 2)
    i.push(parseInt(a.substr(p, 2), 16));
  return i;
};
D.REAL = function (e) {
  return g.REAL(e).length;
};
g.NAME = g.CHARARRAY;
D.NAME = D.CHARARRAY;
g.STRING = g.CHARARRAY;
D.STRING = D.CHARARRAY;
Te.UTF8 = function (e, t, r) {
  for (var n = [], a = r, o = 0; o < a; o++, t += 1) n[o] = e.getUint8(t);
  return String.fromCharCode.apply(null, n);
};
Te.UTF16 = function (e, t, r) {
  for (var n = [], a = r / 2, o = 0; o < a; o++, t += 2) n[o] = e.getUint16(t);
  return String.fromCharCode.apply(null, n);
};
g.UTF16 = function (e) {
  for (var t = [], r = 0; r < e.length; r += 1) {
    var n = e.charCodeAt(r);
    (t[t.length] = (n >> 8) & 255), (t[t.length] = n & 255);
  }
  return t;
};
D.UTF16 = function (e) {
  return e.length * 2;
};
var ht = {
  "x-mac-croatian":
    "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ",
  "x-mac-cyrillic":
    "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю",
  "x-mac-gaelic":
    "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ",
  "x-mac-greek":
    "Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­",
  "x-mac-icelandic":
    "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
  "x-mac-inuit":
    "ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł",
  "x-mac-ce":
    "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",
  macintosh:
    "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
  "x-mac-romanian":
    "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
  "x-mac-turkish":
    "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ",
};
Te.MACSTRING = function (e, t, r, n) {
  var a = ht[n];
  if (a !== void 0) {
    for (var o = "", s = 0; s < r; s++) {
      var u = e.getUint8(t + s);
      u <= 127 ? (o += String.fromCharCode(u)) : (o += a[u & 127]);
    }
    return o;
  }
};
var Ne = typeof WeakMap == "function" && new WeakMap(),
  He,
  Tn = function (e) {
    if (!He) {
      He = {};
      for (var t in ht) He[t] = new String(t);
    }
    var r = He[e];
    if (r !== void 0) {
      if (Ne) {
        var n = Ne.get(r);
        if (n !== void 0) return n;
      }
      var a = ht[e];
      if (a !== void 0) {
        for (var o = {}, s = 0; s < a.length; s++) o[a.charCodeAt(s)] = s + 128;
        return Ne && Ne.set(r, o), o;
      }
    }
  };
g.MACSTRING = function (e, t) {
  var r = Tn(t);
  if (r !== void 0) {
    for (var n = [], a = 0; a < e.length; a++) {
      var o = e.charCodeAt(a);
      if (o >= 128 && ((o = r[o]), o === void 0)) return;
      n[a] = o;
    }
    return n;
  }
};
D.MACSTRING = function (e, t) {
  var r = g.MACSTRING(e, t);
  return r !== void 0 ? r.length : 0;
};
function ft(e) {
  return e >= -128 && e <= 127;
}
function kn(e, t, r) {
  for (var n = 0, a = e.length; t < a && n < 64 && e[t] === 0; ) ++t, ++n;
  return r.push(128 | (n - 1)), t;
}
function Un(e, t, r) {
  for (var n = 0, a = e.length, o = t; o < a && n < 64; ) {
    var s = e[o];
    if (!ft(s) || (s === 0 && o + 1 < a && e[o + 1] === 0)) break;
    ++o, ++n;
  }
  r.push(n - 1);
  for (var u = t; u < o; ++u) r.push((e[u] + 256) & 255);
  return o;
}
function Dn(e, t, r) {
  for (var n = 0, a = e.length, o = t; o < a && n < 64; ) {
    var s = e[o];
    if (s === 0 || (ft(s) && o + 1 < a && ft(e[o + 1]))) break;
    ++o, ++n;
  }
  r.push(64 | (n - 1));
  for (var u = t; u < o; ++u) {
    var i = e[u];
    r.push(((i + 65536) >> 8) & 255, (i + 256) & 255);
  }
  return o;
}
g.VARDELTAS = function (e) {
  for (var t = 0, r = []; t < e.length; ) {
    var n = e[t];
    n === 0
      ? (t = kn(e, t, r))
      : n >= -128 && n <= 127
      ? (t = Un(e, t, r))
      : (t = Dn(e, t, r));
  }
  return r;
};
g.INDEX = function (e) {
  for (var t = 1, r = [t], n = [], a = 0; a < e.length; a += 1) {
    var o = g.OBJECT(e[a]);
    Array.prototype.push.apply(n, o), (t += o.length), r.push(t);
  }
  if (n.length === 0) return [0, 0];
  for (
    var s = [],
      u = (1 + Math.floor(Math.log(t) / Math.log(2)) / 8) | 0,
      i = [void 0, g.BYTE, g.USHORT, g.UINT24, g.ULONG][u],
      p = 0;
    p < r.length;
    p += 1
  ) {
    var l = i(r[p]);
    Array.prototype.push.apply(s, l);
  }
  return Array.prototype.concat(g.Card16(e.length), g.OffSize(u), s, n);
};
D.INDEX = function (e) {
  return g.INDEX(e).length;
};
g.DICT = function (e) {
  for (var t = [], r = Object.keys(e), n = r.length, a = 0; a < n; a += 1) {
    var o = parseInt(r[a], 0),
      s = e[o];
    (t = t.concat(g.OPERAND(s.value, s.type))), (t = t.concat(g.OPERATOR(o)));
  }
  return t;
};
D.DICT = function (e) {
  return g.DICT(e).length;
};
g.OPERATOR = function (e) {
  return e < 1200 ? [e] : [12, e - 1200];
};
g.OPERAND = function (e, t) {
  var r = [];
  if (Array.isArray(t))
    for (var n = 0; n < t.length; n += 1)
      k.argument(
        e.length === t.length,
        "Not enough arguments given for type" + t
      ),
        (r = r.concat(g.OPERAND(e[n], t[n])));
  else if (t === "SID") r = r.concat(g.NUMBER(e));
  else if (t === "offset") r = r.concat(g.NUMBER32(e));
  else if (t === "number") r = r.concat(g.NUMBER(e));
  else if (t === "real") r = r.concat(g.REAL(e));
  else throw new Error("Unknown operand type " + t);
  return r;
};
g.OP = g.BYTE;
D.OP = D.BYTE;
var ze = typeof WeakMap == "function" && new WeakMap();
g.CHARSTRING = function (e) {
  if (ze) {
    var t = ze.get(e);
    if (t !== void 0) return t;
  }
  for (var r = [], n = e.length, a = 0; a < n; a += 1) {
    var o = e[a];
    r = r.concat(g[o.type](o.value));
  }
  return ze && ze.set(e, r), r;
};
D.CHARSTRING = function (e) {
  return g.CHARSTRING(e).length;
};
g.OBJECT = function (e) {
  var t = g[e.type];
  return (
    k.argument(t !== void 0, "No encoding function for type " + e.type),
    t(e.value)
  );
};
D.OBJECT = function (e) {
  var t = D[e.type];
  return (
    k.argument(t !== void 0, "No sizeOf function for type " + e.type),
    t(e.value)
  );
};
g.TABLE = function (e) {
  for (var t = [], r = e.fields.length, n = [], a = [], o = 0; o < r; o += 1) {
    var s = e.fields[o],
      u = g[s.type];
    k.argument(
      u !== void 0,
      "No encoding function for field type " + s.type + " (" + s.name + ")"
    );
    var i = e[s.name];
    i === void 0 && (i = s.value);
    var p = u(i);
    s.type === "TABLE"
      ? (a.push(t.length), (t = t.concat([0, 0])), n.push(p))
      : (t = t.concat(p));
  }
  for (var l = 0; l < n.length; l += 1) {
    var h = a[l],
      c = t.length;
    k.argument(c < 65536, "Table " + e.tableName + " too big."),
      (t[h] = c >> 8),
      (t[h + 1] = c & 255),
      (t = t.concat(n[l]));
  }
  return t;
};
D.TABLE = function (e) {
  for (var t = 0, r = e.fields.length, n = 0; n < r; n += 1) {
    var a = e.fields[n],
      o = D[a.type];
    k.argument(
      o !== void 0,
      "No sizeOf function for field type " + a.type + " (" + a.name + ")"
    );
    var s = e[a.name];
    s === void 0 && (s = a.value), (t += o(s)), a.type === "TABLE" && (t += 2);
  }
  return t;
};
g.RECORD = g.TABLE;
D.RECORD = D.TABLE;
g.LITERAL = function (e) {
  return e;
};
D.LITERAL = function (e) {
  return e.length;
};
function z(e, t, r) {
  if (t.length && (t[0].name !== "coverageFormat" || t[0].value === 1))
    for (var n = 0; n < t.length; n += 1) {
      var a = t[n];
      this[a.name] = a.value;
    }
  if (((this.tableName = e), (this.fields = t), r))
    for (var o = Object.keys(r), s = 0; s < o.length; s += 1) {
      var u = o[s],
        i = r[u];
      this[u] !== void 0 && (this[u] = i);
    }
}
z.prototype.encode = function () {
  return g.TABLE(this);
};
z.prototype.sizeOf = function () {
  return D.TABLE(this);
};
function Be(e, t, r) {
  r === void 0 && (r = t.length);
  var n = new Array(t.length + 1);
  n[0] = { name: e + "Count", type: "USHORT", value: r };
  for (var a = 0; a < t.length; a++)
    n[a + 1] = { name: e + a, type: "USHORT", value: t[a] };
  return n;
}
function dt(e, t, r) {
  var n = t.length,
    a = new Array(n + 1);
  a[0] = { name: e + "Count", type: "USHORT", value: n };
  for (var o = 0; o < n; o++)
    a[o + 1] = { name: e + o, type: "TABLE", value: r(t[o], o) };
  return a;
}
function Re(e, t, r) {
  var n = t.length,
    a = [];
  a[0] = { name: e + "Count", type: "USHORT", value: n };
  for (var o = 0; o < n; o++) a = a.concat(r(t[o], o));
  return a;
}
function Ve(e) {
  e.format === 1
    ? z.call(
        this,
        "coverageTable",
        [{ name: "coverageFormat", type: "USHORT", value: 1 }].concat(
          Be("glyph", e.glyphs)
        )
      )
    : e.format === 2
    ? z.call(
        this,
        "coverageTable",
        [{ name: "coverageFormat", type: "USHORT", value: 2 }].concat(
          Re("rangeRecord", e.ranges, function (t) {
            return [
              { name: "startGlyphID", type: "USHORT", value: t.start },
              { name: "endGlyphID", type: "USHORT", value: t.end },
              { name: "startCoverageIndex", type: "USHORT", value: t.index },
            ];
          })
        )
      )
    : k.assert(!1, "Coverage format must be 1 or 2.");
}
Ve.prototype = Object.create(z.prototype);
Ve.prototype.constructor = Ve;
function Ye(e) {
  z.call(
    this,
    "scriptListTable",
    Re("scriptRecord", e, function (t, r) {
      var n = t.script,
        a = n.defaultLangSys;
      return (
        k.assert(
          !!a,
          "Unable to write GSUB: script " +
            t.tag +
            " has no default language system."
        ),
        [
          { name: "scriptTag" + r, type: "TAG", value: t.tag },
          {
            name: "script" + r,
            type: "TABLE",
            value: new z(
              "scriptTable",
              [
                {
                  name: "defaultLangSys",
                  type: "TABLE",
                  value: new z(
                    "defaultLangSys",
                    [
                      { name: "lookupOrder", type: "USHORT", value: 0 },
                      {
                        name: "reqFeatureIndex",
                        type: "USHORT",
                        value: a.reqFeatureIndex,
                      },
                    ].concat(Be("featureIndex", a.featureIndexes))
                  ),
                },
              ].concat(
                Re("langSys", n.langSysRecords, function (o, s) {
                  var u = o.langSys;
                  return [
                    { name: "langSysTag" + s, type: "TAG", value: o.tag },
                    {
                      name: "langSys" + s,
                      type: "TABLE",
                      value: new z(
                        "langSys",
                        [
                          { name: "lookupOrder", type: "USHORT", value: 0 },
                          {
                            name: "reqFeatureIndex",
                            type: "USHORT",
                            value: u.reqFeatureIndex,
                          },
                        ].concat(Be("featureIndex", u.featureIndexes))
                      ),
                    },
                  ];
                })
              )
            ),
          },
        ]
      );
    })
  );
}
Ye.prototype = Object.create(z.prototype);
Ye.prototype.constructor = Ye;
function je(e) {
  z.call(
    this,
    "featureListTable",
    Re("featureRecord", e, function (t, r) {
      var n = t.feature;
      return [
        { name: "featureTag" + r, type: "TAG", value: t.tag },
        {
          name: "feature" + r,
          type: "TABLE",
          value: new z(
            "featureTable",
            [
              { name: "featureParams", type: "USHORT", value: n.featureParams },
            ].concat(Be("lookupListIndex", n.lookupListIndexes))
          ),
        },
      ];
    })
  );
}
je.prototype = Object.create(z.prototype);
je.prototype.constructor = je;
function Ze(e, t) {
  z.call(
    this,
    "lookupListTable",
    dt("lookup", e, function (r) {
      var n = t[r.lookupType];
      return (
        k.assert(
          !!n,
          "Unable to write GSUB lookup type " + r.lookupType + " tables."
        ),
        new z(
          "lookupTable",
          [
            { name: "lookupType", type: "USHORT", value: r.lookupType },
            { name: "lookupFlag", type: "USHORT", value: r.lookupFlag },
          ].concat(dt("subtable", r.subtables, n))
        )
      );
    })
  );
}
Ze.prototype = Object.create(z.prototype);
Ze.prototype.constructor = Ze;
var b = {
  Table: z,
  Record: z,
  Coverage: Ve,
  ScriptList: Ye,
  FeatureList: je,
  LookupList: Ze,
  ushortList: Be,
  tableList: dt,
  recordList: Re,
};
function Ht(e, t) {
  return e.getUint8(t);
}
function Qe(e, t) {
  return e.getUint16(t, !1);
}
function An(e, t) {
  return e.getInt16(t, !1);
}
function Tt(e, t) {
  return e.getUint32(t, !1);
}
function Ur(e, t) {
  var r = e.getInt16(t, !1),
    n = e.getUint16(t + 2, !1);
  return r + n / 65535;
}
function On(e, t) {
  for (var r = "", n = t; n < t + 4; n += 1)
    r += String.fromCharCode(e.getInt8(n));
  return r;
}
function Bn(e, t, r) {
  for (var n = 0, a = 0; a < r; a += 1) (n <<= 8), (n += e.getUint8(t + a));
  return n;
}
function Rn(e, t, r) {
  for (var n = [], a = t; a < r; a += 1) n.push(e.getUint8(a));
  return n;
}
function wn(e) {
  for (var t = "", r = 0; r < e.length; r += 1) t += String.fromCharCode(e[r]);
  return t;
}
var Fn = {
  byte: 1,
  uShort: 2,
  short: 2,
  uLong: 4,
  fixed: 4,
  longDateTime: 8,
  tag: 4,
};
function d(e, t) {
  (this.data = e), (this.offset = t), (this.relativeOffset = 0);
}
d.prototype.parseByte = function () {
  var e = this.data.getUint8(this.offset + this.relativeOffset);
  return (this.relativeOffset += 1), e;
};
d.prototype.parseChar = function () {
  var e = this.data.getInt8(this.offset + this.relativeOffset);
  return (this.relativeOffset += 1), e;
};
d.prototype.parseCard8 = d.prototype.parseByte;
d.prototype.parseUShort = function () {
  var e = this.data.getUint16(this.offset + this.relativeOffset);
  return (this.relativeOffset += 2), e;
};
d.prototype.parseCard16 = d.prototype.parseUShort;
d.prototype.parseSID = d.prototype.parseUShort;
d.prototype.parseOffset16 = d.prototype.parseUShort;
d.prototype.parseShort = function () {
  var e = this.data.getInt16(this.offset + this.relativeOffset);
  return (this.relativeOffset += 2), e;
};
d.prototype.parseF2Dot14 = function () {
  var e = this.data.getInt16(this.offset + this.relativeOffset) / 16384;
  return (this.relativeOffset += 2), e;
};
d.prototype.parseULong = function () {
  var e = Tt(this.data, this.offset + this.relativeOffset);
  return (this.relativeOffset += 4), e;
};
d.prototype.parseOffset32 = d.prototype.parseULong;
d.prototype.parseFixed = function () {
  var e = Ur(this.data, this.offset + this.relativeOffset);
  return (this.relativeOffset += 4), e;
};
d.prototype.parseString = function (e) {
  var t = this.data,
    r = this.offset + this.relativeOffset,
    n = "";
  this.relativeOffset += e;
  for (var a = 0; a < e; a++) n += String.fromCharCode(t.getUint8(r + a));
  return n;
};
d.prototype.parseTag = function () {
  return this.parseString(4);
};
d.prototype.parseLongDateTime = function () {
  var e = Tt(this.data, this.offset + this.relativeOffset + 4);
  return (e -= 2082844800), (this.relativeOffset += 8), e;
};
d.prototype.parseVersion = function (e) {
  var t = Qe(this.data, this.offset + this.relativeOffset),
    r = Qe(this.data, this.offset + this.relativeOffset + 2);
  return (this.relativeOffset += 4), e === void 0 && (e = 4096), t + r / e / 10;
};
d.prototype.skip = function (e, t) {
  t === void 0 && (t = 1), (this.relativeOffset += Fn[e] * t);
};
d.prototype.parseULongList = function (e) {
  e === void 0 && (e = this.parseULong());
  for (
    var t = new Array(e),
      r = this.data,
      n = this.offset + this.relativeOffset,
      a = 0;
    a < e;
    a++
  )
    (t[a] = r.getUint32(n)), (n += 4);
  return (this.relativeOffset += e * 4), t;
};
d.prototype.parseOffset16List = d.prototype.parseUShortList = function (e) {
  e === void 0 && (e = this.parseUShort());
  for (
    var t = new Array(e),
      r = this.data,
      n = this.offset + this.relativeOffset,
      a = 0;
    a < e;
    a++
  )
    (t[a] = r.getUint16(n)), (n += 2);
  return (this.relativeOffset += e * 2), t;
};
d.prototype.parseShortList = function (e) {
  for (
    var t = new Array(e),
      r = this.data,
      n = this.offset + this.relativeOffset,
      a = 0;
    a < e;
    a++
  )
    (t[a] = r.getInt16(n)), (n += 2);
  return (this.relativeOffset += e * 2), t;
};
d.prototype.parseByteList = function (e) {
  for (
    var t = new Array(e),
      r = this.data,
      n = this.offset + this.relativeOffset,
      a = 0;
    a < e;
    a++
  )
    t[a] = r.getUint8(n++);
  return (this.relativeOffset += e), t;
};
d.prototype.parseList = function (e, t) {
  t || ((t = e), (e = this.parseUShort()));
  for (var r = new Array(e), n = 0; n < e; n++) r[n] = t.call(this);
  return r;
};
d.prototype.parseList32 = function (e, t) {
  t || ((t = e), (e = this.parseULong()));
  for (var r = new Array(e), n = 0; n < e; n++) r[n] = t.call(this);
  return r;
};
d.prototype.parseRecordList = function (e, t) {
  t || ((t = e), (e = this.parseUShort()));
  for (var r = new Array(e), n = Object.keys(t), a = 0; a < e; a++) {
    for (var o = {}, s = 0; s < n.length; s++) {
      var u = n[s],
        i = t[u];
      o[u] = i.call(this);
    }
    r[a] = o;
  }
  return r;
};
d.prototype.parseRecordList32 = function (e, t) {
  t || ((t = e), (e = this.parseULong()));
  for (var r = new Array(e), n = Object.keys(t), a = 0; a < e; a++) {
    for (var o = {}, s = 0; s < n.length; s++) {
      var u = n[s],
        i = t[u];
      o[u] = i.call(this);
    }
    r[a] = o;
  }
  return r;
};
d.prototype.parseStruct = function (e) {
  if (typeof e == "function") return e.call(this);
  for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
    var a = t[n],
      o = e[a];
    r[a] = o.call(this);
  }
  return r;
};
d.prototype.parseValueRecord = function (e) {
  if ((e === void 0 && (e = this.parseUShort()), e !== 0)) {
    var t = {};
    return (
      e & 1 && (t.xPlacement = this.parseShort()),
      e & 2 && (t.yPlacement = this.parseShort()),
      e & 4 && (t.xAdvance = this.parseShort()),
      e & 8 && (t.yAdvance = this.parseShort()),
      e & 16 && ((t.xPlaDevice = void 0), this.parseShort()),
      e & 32 && ((t.yPlaDevice = void 0), this.parseShort()),
      e & 64 && ((t.xAdvDevice = void 0), this.parseShort()),
      e & 128 && ((t.yAdvDevice = void 0), this.parseShort()),
      t
    );
  }
};
d.prototype.parseValueRecordList = function () {
  for (
    var e = this.parseUShort(), t = this.parseUShort(), r = new Array(t), n = 0;
    n < t;
    n++
  )
    r[n] = this.parseValueRecord(e);
  return r;
};
d.prototype.parsePointer = function (e) {
  var t = this.parseOffset16();
  if (t > 0) return new d(this.data, this.offset + t).parseStruct(e);
};
d.prototype.parsePointer32 = function (e) {
  var t = this.parseOffset32();
  if (t > 0) return new d(this.data, this.offset + t).parseStruct(e);
};
d.prototype.parseListOfLists = function (e) {
  for (
    var t = this.parseOffset16List(),
      r = t.length,
      n = this.relativeOffset,
      a = new Array(r),
      o = 0;
    o < r;
    o++
  ) {
    var s = t[o];
    if (s === 0) {
      a[o] = void 0;
      continue;
    }
    if (((this.relativeOffset = s), e)) {
      for (
        var u = this.parseOffset16List(), i = new Array(u.length), p = 0;
        p < u.length;
        p++
      )
        (this.relativeOffset = s + u[p]), (i[p] = e.call(this));
      a[o] = i;
    } else a[o] = this.parseUShortList();
  }
  return (this.relativeOffset = n), a;
};
d.prototype.parseCoverage = function () {
  var e = this.offset + this.relativeOffset,
    t = this.parseUShort(),
    r = this.parseUShort();
  if (t === 1) return { format: 1, glyphs: this.parseUShortList(r) };
  if (t === 2) {
    for (var n = new Array(r), a = 0; a < r; a++)
      n[a] = {
        start: this.parseUShort(),
        end: this.parseUShort(),
        index: this.parseUShort(),
      };
    return { format: 2, ranges: n };
  }
  throw new Error("0x" + e.toString(16) + ": Coverage format must be 1 or 2.");
};
d.prototype.parseClassDef = function () {
  var e = this.offset + this.relativeOffset,
    t = this.parseUShort();
  if (t === 1)
    return {
      format: 1,
      startGlyph: this.parseUShort(),
      classes: this.parseUShortList(),
    };
  if (t === 2)
    return {
      format: 2,
      ranges: this.parseRecordList({
        start: d.uShort,
        end: d.uShort,
        classId: d.uShort,
      }),
    };
  throw new Error("0x" + e.toString(16) + ": ClassDef format must be 1 or 2.");
};
d.list = function (e, t) {
  return function () {
    return this.parseList(e, t);
  };
};
d.list32 = function (e, t) {
  return function () {
    return this.parseList32(e, t);
  };
};
d.recordList = function (e, t) {
  return function () {
    return this.parseRecordList(e, t);
  };
};
d.recordList32 = function (e, t) {
  return function () {
    return this.parseRecordList32(e, t);
  };
};
d.pointer = function (e) {
  return function () {
    return this.parsePointer(e);
  };
};
d.pointer32 = function (e) {
  return function () {
    return this.parsePointer32(e);
  };
};
d.tag = d.prototype.parseTag;
d.byte = d.prototype.parseByte;
d.uShort = d.offset16 = d.prototype.parseUShort;
d.uShortList = d.prototype.parseUShortList;
d.uLong = d.offset32 = d.prototype.parseULong;
d.uLongList = d.prototype.parseULongList;
d.struct = d.prototype.parseStruct;
d.coverage = d.prototype.parseCoverage;
d.classDef = d.prototype.parseClassDef;
var zt = {
  reserved: d.uShort,
  reqFeatureIndex: d.uShort,
  featureIndexes: d.uShortList,
};
d.prototype.parseScriptList = function () {
  return (
    this.parsePointer(
      d.recordList({
        tag: d.tag,
        script: d.pointer({
          defaultLangSys: d.pointer(zt),
          langSysRecords: d.recordList({ tag: d.tag, langSys: d.pointer(zt) }),
        }),
      })
    ) || []
  );
};
d.prototype.parseFeatureList = function () {
  return (
    this.parsePointer(
      d.recordList({
        tag: d.tag,
        feature: d.pointer({
          featureParams: d.offset16,
          lookupListIndexes: d.uShortList,
        }),
      })
    ) || []
  );
};
d.prototype.parseLookupList = function (e) {
  return (
    this.parsePointer(
      d.list(
        d.pointer(function () {
          var t = this.parseUShort();
          k.argument(
            1 <= t && t <= 9,
            "GPOS/GSUB lookup type " + t + " unknown."
          );
          var r = this.parseUShort(),
            n = r & 16;
          return {
            lookupType: t,
            lookupFlag: r,
            subtables: this.parseList(d.pointer(e[t])),
            markFilteringSet: n ? this.parseUShort() : void 0,
          };
        })
      )
    ) || []
  );
};
d.prototype.parseFeatureVariationsList = function () {
  return (
    this.parsePointer32(function () {
      var e = this.parseUShort(),
        t = this.parseUShort();
      k.argument(
        e === 1 && t < 1,
        "GPOS/GSUB feature variations table unknown."
      );
      var r = this.parseRecordList32({
        conditionSetOffset: d.offset32,
        featureTableSubstitutionOffset: d.offset32,
      });
      return r;
    }) || []
  );
};
var C = {
  getByte: Ht,
  getCard8: Ht,
  getUShort: Qe,
  getCard16: Qe,
  getShort: An,
  getULong: Tt,
  getFixed: Ur,
  getTag: On,
  getOffset: Bn,
  getBytes: Rn,
  bytesToString: wn,
  Parser: d,
};
function Ln(e, t) {
  t.parseUShort(), (e.length = t.parseULong()), (e.language = t.parseULong());
  var r;
  (e.groupCount = r = t.parseULong()), (e.glyphIndexMap = {});
  for (var n = 0; n < r; n += 1)
    for (
      var a = t.parseULong(), o = t.parseULong(), s = t.parseULong(), u = a;
      u <= o;
      u += 1
    )
      (e.glyphIndexMap[u] = s), s++;
}
function In(e, t, r, n, a) {
  (e.length = t.parseUShort()), (e.language = t.parseUShort());
  var o;
  (e.segCount = o = t.parseUShort() >> 1),
    t.skip("uShort", 3),
    (e.glyphIndexMap = {});
  for (
    var s = new C.Parser(r, n + a + 14),
      u = new C.Parser(r, n + a + 16 + o * 2),
      i = new C.Parser(r, n + a + 16 + o * 4),
      p = new C.Parser(r, n + a + 16 + o * 6),
      l = n + a + 16 + o * 8,
      h = 0;
    h < o - 1;
    h += 1
  )
    for (
      var c = void 0,
        f = s.parseUShort(),
        v = u.parseUShort(),
        x = i.parseShort(),
        m = p.parseUShort(),
        y = v;
      y <= f;
      y += 1
    )
      m !== 0
        ? ((l = p.offset + p.relativeOffset - 2),
          (l += m),
          (l += (y - v) * 2),
          (c = C.getUShort(r, l)),
          c !== 0 && (c = (c + x) & 65535))
        : (c = (y + x) & 65535),
        (e.glyphIndexMap[y] = c);
}
function Mn(e, t) {
  var r = {};
  (r.version = C.getUShort(e, t)),
    k.argument(r.version === 0, "cmap table version should be 0."),
    (r.numTables = C.getUShort(e, t + 2));
  for (var n = -1, a = r.numTables - 1; a >= 0; a -= 1) {
    var o = C.getUShort(e, t + 4 + a * 8),
      s = C.getUShort(e, t + 4 + a * 8 + 2);
    if (
      (o === 3 && (s === 0 || s === 1 || s === 10)) ||
      (o === 0 && (s === 0 || s === 1 || s === 2 || s === 3 || s === 4))
    ) {
      n = C.getULong(e, t + 4 + a * 8 + 4);
      break;
    }
  }
  if (n === -1) throw new Error("No valid cmap sub-tables found.");
  var u = new C.Parser(e, t + n);
  if (((r.format = u.parseUShort()), r.format === 12)) Ln(r, u);
  else if (r.format === 4) In(r, u, e, t, n);
  else
    throw new Error(
      "Only format 4 and 12 cmap tables are supported (found format " +
        r.format +
        ")."
    );
  return r;
}
function Gn(e, t, r) {
  e.segments.push({
    end: t,
    start: t,
    delta: -(t - r),
    offset: 0,
    glyphIndex: r,
  });
}
function Pn(e) {
  e.segments.push({ end: 65535, start: 65535, delta: 1, offset: 0 });
}
function Nn(e) {
  var t = !0,
    r;
  for (r = e.length - 1; r > 0; r -= 1) {
    var n = e.get(r);
    if (n.unicode > 65535) {
      console.log("Adding CMAP format 12 (needed!)"), (t = !1);
      break;
    }
  }
  var a = [
    { name: "version", type: "USHORT", value: 0 },
    { name: "numTables", type: "USHORT", value: t ? 1 : 2 },
    { name: "platformID", type: "USHORT", value: 3 },
    { name: "encodingID", type: "USHORT", value: 1 },
    { name: "offset", type: "ULONG", value: t ? 12 : 12 + 8 },
  ];
  t ||
    (a = a.concat([
      { name: "cmap12PlatformID", type: "USHORT", value: 3 },
      { name: "cmap12EncodingID", type: "USHORT", value: 10 },
      { name: "cmap12Offset", type: "ULONG", value: 0 },
    ])),
    (a = a.concat([
      { name: "format", type: "USHORT", value: 4 },
      { name: "cmap4Length", type: "USHORT", value: 0 },
      { name: "language", type: "USHORT", value: 0 },
      { name: "segCountX2", type: "USHORT", value: 0 },
      { name: "searchRange", type: "USHORT", value: 0 },
      { name: "entrySelector", type: "USHORT", value: 0 },
      { name: "rangeShift", type: "USHORT", value: 0 },
    ]));
  var o = new b.Table("cmap", a);
  for (o.segments = [], r = 0; r < e.length; r += 1) {
    for (var s = e.get(r), u = 0; u < s.unicodes.length; u += 1)
      Gn(o, s.unicodes[u], r);
    o.segments = o.segments.sort(function (U, S) {
      return U.start - S.start;
    });
  }
  Pn(o);
  var i = o.segments.length,
    p = 0,
    l = [],
    h = [],
    c = [],
    f = [],
    v = [],
    x = [];
  for (r = 0; r < i; r += 1) {
    var m = o.segments[r];
    m.end <= 65535 && m.start <= 65535
      ? ((l = l.concat({ name: "end_" + r, type: "USHORT", value: m.end })),
        (h = h.concat({ name: "start_" + r, type: "USHORT", value: m.start })),
        (c = c.concat({ name: "idDelta_" + r, type: "SHORT", value: m.delta })),
        (f = f.concat({
          name: "idRangeOffset_" + r,
          type: "USHORT",
          value: m.offset,
        })),
        m.glyphId !== void 0 &&
          (v = v.concat({
            name: "glyph_" + r,
            type: "USHORT",
            value: m.glyphId,
          })))
      : (p += 1),
      !t &&
        m.glyphIndex !== void 0 &&
        ((x = x.concat({
          name: "cmap12Start_" + r,
          type: "ULONG",
          value: m.start,
        })),
        (x = x.concat({ name: "cmap12End_" + r, type: "ULONG", value: m.end })),
        (x = x.concat({
          name: "cmap12Glyph_" + r,
          type: "ULONG",
          value: m.glyphIndex,
        })));
  }
  if (
    ((o.segCountX2 = (i - p) * 2),
    (o.searchRange =
      Math.pow(2, Math.floor(Math.log(i - p) / Math.log(2))) * 2),
    (o.entrySelector = Math.log(o.searchRange / 2) / Math.log(2)),
    (o.rangeShift = o.segCountX2 - o.searchRange),
    (o.fields = o.fields.concat(l)),
    o.fields.push({ name: "reservedPad", type: "USHORT", value: 0 }),
    (o.fields = o.fields.concat(h)),
    (o.fields = o.fields.concat(c)),
    (o.fields = o.fields.concat(f)),
    (o.fields = o.fields.concat(v)),
    (o.cmap4Length =
      14 +
      l.length * 2 +
      2 +
      h.length * 2 +
      c.length * 2 +
      f.length * 2 +
      v.length * 2),
    !t)
  ) {
    var y = 16 + x.length * 4;
    (o.cmap12Offset = 12 + 2 * 2 + 4 + o.cmap4Length),
      (o.fields = o.fields.concat([
        { name: "cmap12Format", type: "USHORT", value: 12 },
        { name: "cmap12Reserved", type: "USHORT", value: 0 },
        { name: "cmap12Length", type: "ULONG", value: y },
        { name: "cmap12Language", type: "ULONG", value: 0 },
        { name: "cmap12nGroups", type: "ULONG", value: x.length / 3 },
      ])),
      (o.fields = o.fields.concat(x));
  }
  return o;
}
var Dr = { parse: Mn, make: Nn },
  qe = [
    ".notdef",
    "space",
    "exclam",
    "quotedbl",
    "numbersign",
    "dollar",
    "percent",
    "ampersand",
    "quoteright",
    "parenleft",
    "parenright",
    "asterisk",
    "plus",
    "comma",
    "hyphen",
    "period",
    "slash",
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "colon",
    "semicolon",
    "less",
    "equal",
    "greater",
    "question",
    "at",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "bracketleft",
    "backslash",
    "bracketright",
    "asciicircum",
    "underscore",
    "quoteleft",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "braceleft",
    "bar",
    "braceright",
    "asciitilde",
    "exclamdown",
    "cent",
    "sterling",
    "fraction",
    "yen",
    "florin",
    "section",
    "currency",
    "quotesingle",
    "quotedblleft",
    "guillemotleft",
    "guilsinglleft",
    "guilsinglright",
    "fi",
    "fl",
    "endash",
    "dagger",
    "daggerdbl",
    "periodcentered",
    "paragraph",
    "bullet",
    "quotesinglbase",
    "quotedblbase",
    "quotedblright",
    "guillemotright",
    "ellipsis",
    "perthousand",
    "questiondown",
    "grave",
    "acute",
    "circumflex",
    "tilde",
    "macron",
    "breve",
    "dotaccent",
    "dieresis",
    "ring",
    "cedilla",
    "hungarumlaut",
    "ogonek",
    "caron",
    "emdash",
    "AE",
    "ordfeminine",
    "Lslash",
    "Oslash",
    "OE",
    "ordmasculine",
    "ae",
    "dotlessi",
    "lslash",
    "oslash",
    "oe",
    "germandbls",
    "onesuperior",
    "logicalnot",
    "mu",
    "trademark",
    "Eth",
    "onehalf",
    "plusminus",
    "Thorn",
    "onequarter",
    "divide",
    "brokenbar",
    "degree",
    "thorn",
    "threequarters",
    "twosuperior",
    "registered",
    "minus",
    "eth",
    "multiply",
    "threesuperior",
    "copyright",
    "Aacute",
    "Acircumflex",
    "Adieresis",
    "Agrave",
    "Aring",
    "Atilde",
    "Ccedilla",
    "Eacute",
    "Ecircumflex",
    "Edieresis",
    "Egrave",
    "Iacute",
    "Icircumflex",
    "Idieresis",
    "Igrave",
    "Ntilde",
    "Oacute",
    "Ocircumflex",
    "Odieresis",
    "Ograve",
    "Otilde",
    "Scaron",
    "Uacute",
    "Ucircumflex",
    "Udieresis",
    "Ugrave",
    "Yacute",
    "Ydieresis",
    "Zcaron",
    "aacute",
    "acircumflex",
    "adieresis",
    "agrave",
    "aring",
    "atilde",
    "ccedilla",
    "eacute",
    "ecircumflex",
    "edieresis",
    "egrave",
    "iacute",
    "icircumflex",
    "idieresis",
    "igrave",
    "ntilde",
    "oacute",
    "ocircumflex",
    "odieresis",
    "ograve",
    "otilde",
    "scaron",
    "uacute",
    "ucircumflex",
    "udieresis",
    "ugrave",
    "yacute",
    "ydieresis",
    "zcaron",
    "exclamsmall",
    "Hungarumlautsmall",
    "dollaroldstyle",
    "dollarsuperior",
    "ampersandsmall",
    "Acutesmall",
    "parenleftsuperior",
    "parenrightsuperior",
    "266 ff",
    "onedotenleader",
    "zerooldstyle",
    "oneoldstyle",
    "twooldstyle",
    "threeoldstyle",
    "fouroldstyle",
    "fiveoldstyle",
    "sixoldstyle",
    "sevenoldstyle",
    "eightoldstyle",
    "nineoldstyle",
    "commasuperior",
    "threequartersemdash",
    "periodsuperior",
    "questionsmall",
    "asuperior",
    "bsuperior",
    "centsuperior",
    "dsuperior",
    "esuperior",
    "isuperior",
    "lsuperior",
    "msuperior",
    "nsuperior",
    "osuperior",
    "rsuperior",
    "ssuperior",
    "tsuperior",
    "ff",
    "ffi",
    "ffl",
    "parenleftinferior",
    "parenrightinferior",
    "Circumflexsmall",
    "hyphensuperior",
    "Gravesmall",
    "Asmall",
    "Bsmall",
    "Csmall",
    "Dsmall",
    "Esmall",
    "Fsmall",
    "Gsmall",
    "Hsmall",
    "Ismall",
    "Jsmall",
    "Ksmall",
    "Lsmall",
    "Msmall",
    "Nsmall",
    "Osmall",
    "Psmall",
    "Qsmall",
    "Rsmall",
    "Ssmall",
    "Tsmall",
    "Usmall",
    "Vsmall",
    "Wsmall",
    "Xsmall",
    "Ysmall",
    "Zsmall",
    "colonmonetary",
    "onefitted",
    "rupiah",
    "Tildesmall",
    "exclamdownsmall",
    "centoldstyle",
    "Lslashsmall",
    "Scaronsmall",
    "Zcaronsmall",
    "Dieresissmall",
    "Brevesmall",
    "Caronsmall",
    "Dotaccentsmall",
    "Macronsmall",
    "figuredash",
    "hypheninferior",
    "Ogoneksmall",
    "Ringsmall",
    "Cedillasmall",
    "questiondownsmall",
    "oneeighth",
    "threeeighths",
    "fiveeighths",
    "seveneighths",
    "onethird",
    "twothirds",
    "zerosuperior",
    "foursuperior",
    "fivesuperior",
    "sixsuperior",
    "sevensuperior",
    "eightsuperior",
    "ninesuperior",
    "zeroinferior",
    "oneinferior",
    "twoinferior",
    "threeinferior",
    "fourinferior",
    "fiveinferior",
    "sixinferior",
    "seveninferior",
    "eightinferior",
    "nineinferior",
    "centinferior",
    "dollarinferior",
    "periodinferior",
    "commainferior",
    "Agravesmall",
    "Aacutesmall",
    "Acircumflexsmall",
    "Atildesmall",
    "Adieresissmall",
    "Aringsmall",
    "AEsmall",
    "Ccedillasmall",
    "Egravesmall",
    "Eacutesmall",
    "Ecircumflexsmall",
    "Edieresissmall",
    "Igravesmall",
    "Iacutesmall",
    "Icircumflexsmall",
    "Idieresissmall",
    "Ethsmall",
    "Ntildesmall",
    "Ogravesmall",
    "Oacutesmall",
    "Ocircumflexsmall",
    "Otildesmall",
    "Odieresissmall",
    "OEsmall",
    "Oslashsmall",
    "Ugravesmall",
    "Uacutesmall",
    "Ucircumflexsmall",
    "Udieresissmall",
    "Yacutesmall",
    "Thornsmall",
    "Ydieresissmall",
    "001.000",
    "001.001",
    "001.002",
    "001.003",
    "Black",
    "Bold",
    "Book",
    "Light",
    "Medium",
    "Regular",
    "Roman",
    "Semibold",
  ],
  Hn = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "space",
    "exclam",
    "quotedbl",
    "numbersign",
    "dollar",
    "percent",
    "ampersand",
    "quoteright",
    "parenleft",
    "parenright",
    "asterisk",
    "plus",
    "comma",
    "hyphen",
    "period",
    "slash",
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "colon",
    "semicolon",
    "less",
    "equal",
    "greater",
    "question",
    "at",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "bracketleft",
    "backslash",
    "bracketright",
    "asciicircum",
    "underscore",
    "quoteleft",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "braceleft",
    "bar",
    "braceright",
    "asciitilde",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "exclamdown",
    "cent",
    "sterling",
    "fraction",
    "yen",
    "florin",
    "section",
    "currency",
    "quotesingle",
    "quotedblleft",
    "guillemotleft",
    "guilsinglleft",
    "guilsinglright",
    "fi",
    "fl",
    "",
    "endash",
    "dagger",
    "daggerdbl",
    "periodcentered",
    "",
    "paragraph",
    "bullet",
    "quotesinglbase",
    "quotedblbase",
    "quotedblright",
    "guillemotright",
    "ellipsis",
    "perthousand",
    "",
    "questiondown",
    "",
    "grave",
    "acute",
    "circumflex",
    "tilde",
    "macron",
    "breve",
    "dotaccent",
    "dieresis",
    "",
    "ring",
    "cedilla",
    "",
    "hungarumlaut",
    "ogonek",
    "caron",
    "emdash",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "AE",
    "",
    "ordfeminine",
    "",
    "",
    "",
    "",
    "Lslash",
    "Oslash",
    "OE",
    "ordmasculine",
    "",
    "",
    "",
    "",
    "",
    "ae",
    "",
    "",
    "",
    "dotlessi",
    "",
    "",
    "lslash",
    "oslash",
    "oe",
    "germandbls",
  ],
  zn = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "space",
    "exclamsmall",
    "Hungarumlautsmall",
    "",
    "dollaroldstyle",
    "dollarsuperior",
    "ampersandsmall",
    "Acutesmall",
    "parenleftsuperior",
    "parenrightsuperior",
    "twodotenleader",
    "onedotenleader",
    "comma",
    "hyphen",
    "period",
    "fraction",
    "zerooldstyle",
    "oneoldstyle",
    "twooldstyle",
    "threeoldstyle",
    "fouroldstyle",
    "fiveoldstyle",
    "sixoldstyle",
    "sevenoldstyle",
    "eightoldstyle",
    "nineoldstyle",
    "colon",
    "semicolon",
    "commasuperior",
    "threequartersemdash",
    "periodsuperior",
    "questionsmall",
    "",
    "asuperior",
    "bsuperior",
    "centsuperior",
    "dsuperior",
    "esuperior",
    "",
    "",
    "isuperior",
    "",
    "",
    "lsuperior",
    "msuperior",
    "nsuperior",
    "osuperior",
    "",
    "",
    "rsuperior",
    "ssuperior",
    "tsuperior",
    "",
    "ff",
    "fi",
    "fl",
    "ffi",
    "ffl",
    "parenleftinferior",
    "",
    "parenrightinferior",
    "Circumflexsmall",
    "hyphensuperior",
    "Gravesmall",
    "Asmall",
    "Bsmall",
    "Csmall",
    "Dsmall",
    "Esmall",
    "Fsmall",
    "Gsmall",
    "Hsmall",
    "Ismall",
    "Jsmall",
    "Ksmall",
    "Lsmall",
    "Msmall",
    "Nsmall",
    "Osmall",
    "Psmall",
    "Qsmall",
    "Rsmall",
    "Ssmall",
    "Tsmall",
    "Usmall",
    "Vsmall",
    "Wsmall",
    "Xsmall",
    "Ysmall",
    "Zsmall",
    "colonmonetary",
    "onefitted",
    "rupiah",
    "Tildesmall",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "exclamdownsmall",
    "centoldstyle",
    "Lslashsmall",
    "",
    "",
    "Scaronsmall",
    "Zcaronsmall",
    "Dieresissmall",
    "Brevesmall",
    "Caronsmall",
    "",
    "Dotaccentsmall",
    "",
    "",
    "Macronsmall",
    "",
    "",
    "figuredash",
    "hypheninferior",
    "",
    "",
    "Ogoneksmall",
    "Ringsmall",
    "Cedillasmall",
    "",
    "",
    "",
    "onequarter",
    "onehalf",
    "threequarters",
    "questiondownsmall",
    "oneeighth",
    "threeeighths",
    "fiveeighths",
    "seveneighths",
    "onethird",
    "twothirds",
    "",
    "",
    "zerosuperior",
    "onesuperior",
    "twosuperior",
    "threesuperior",
    "foursuperior",
    "fivesuperior",
    "sixsuperior",
    "sevensuperior",
    "eightsuperior",
    "ninesuperior",
    "zeroinferior",
    "oneinferior",
    "twoinferior",
    "threeinferior",
    "fourinferior",
    "fiveinferior",
    "sixinferior",
    "seveninferior",
    "eightinferior",
    "nineinferior",
    "centinferior",
    "dollarinferior",
    "periodinferior",
    "commainferior",
    "Agravesmall",
    "Aacutesmall",
    "Acircumflexsmall",
    "Atildesmall",
    "Adieresissmall",
    "Aringsmall",
    "AEsmall",
    "Ccedillasmall",
    "Egravesmall",
    "Eacutesmall",
    "Ecircumflexsmall",
    "Edieresissmall",
    "Igravesmall",
    "Iacutesmall",
    "Icircumflexsmall",
    "Idieresissmall",
    "Ethsmall",
    "Ntildesmall",
    "Ogravesmall",
    "Oacutesmall",
    "Ocircumflexsmall",
    "Otildesmall",
    "Odieresissmall",
    "OEsmall",
    "Oslashsmall",
    "Ugravesmall",
    "Uacutesmall",
    "Ucircumflexsmall",
    "Udieresissmall",
    "Yacutesmall",
    "Thornsmall",
    "Ydieresissmall",
  ],
  xe = [
    ".notdef",
    ".null",
    "nonmarkingreturn",
    "space",
    "exclam",
    "quotedbl",
    "numbersign",
    "dollar",
    "percent",
    "ampersand",
    "quotesingle",
    "parenleft",
    "parenright",
    "asterisk",
    "plus",
    "comma",
    "hyphen",
    "period",
    "slash",
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "colon",
    "semicolon",
    "less",
    "equal",
    "greater",
    "question",
    "at",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "bracketleft",
    "backslash",
    "bracketright",
    "asciicircum",
    "underscore",
    "grave",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "braceleft",
    "bar",
    "braceright",
    "asciitilde",
    "Adieresis",
    "Aring",
    "Ccedilla",
    "Eacute",
    "Ntilde",
    "Odieresis",
    "Udieresis",
    "aacute",
    "agrave",
    "acircumflex",
    "adieresis",
    "atilde",
    "aring",
    "ccedilla",
    "eacute",
    "egrave",
    "ecircumflex",
    "edieresis",
    "iacute",
    "igrave",
    "icircumflex",
    "idieresis",
    "ntilde",
    "oacute",
    "ograve",
    "ocircumflex",
    "odieresis",
    "otilde",
    "uacute",
    "ugrave",
    "ucircumflex",
    "udieresis",
    "dagger",
    "degree",
    "cent",
    "sterling",
    "section",
    "bullet",
    "paragraph",
    "germandbls",
    "registered",
    "copyright",
    "trademark",
    "acute",
    "dieresis",
    "notequal",
    "AE",
    "Oslash",
    "infinity",
    "plusminus",
    "lessequal",
    "greaterequal",
    "yen",
    "mu",
    "partialdiff",
    "summation",
    "product",
    "pi",
    "integral",
    "ordfeminine",
    "ordmasculine",
    "Omega",
    "ae",
    "oslash",
    "questiondown",
    "exclamdown",
    "logicalnot",
    "radical",
    "florin",
    "approxequal",
    "Delta",
    "guillemotleft",
    "guillemotright",
    "ellipsis",
    "nonbreakingspace",
    "Agrave",
    "Atilde",
    "Otilde",
    "OE",
    "oe",
    "endash",
    "emdash",
    "quotedblleft",
    "quotedblright",
    "quoteleft",
    "quoteright",
    "divide",
    "lozenge",
    "ydieresis",
    "Ydieresis",
    "fraction",
    "currency",
    "guilsinglleft",
    "guilsinglright",
    "fi",
    "fl",
    "daggerdbl",
    "periodcentered",
    "quotesinglbase",
    "quotedblbase",
    "perthousand",
    "Acircumflex",
    "Ecircumflex",
    "Aacute",
    "Edieresis",
    "Egrave",
    "Iacute",
    "Icircumflex",
    "Idieresis",
    "Igrave",
    "Oacute",
    "Ocircumflex",
    "apple",
    "Ograve",
    "Uacute",
    "Ucircumflex",
    "Ugrave",
    "dotlessi",
    "circumflex",
    "tilde",
    "macron",
    "breve",
    "dotaccent",
    "ring",
    "cedilla",
    "hungarumlaut",
    "ogonek",
    "caron",
    "Lslash",
    "lslash",
    "Scaron",
    "scaron",
    "Zcaron",
    "zcaron",
    "brokenbar",
    "Eth",
    "eth",
    "Yacute",
    "yacute",
    "Thorn",
    "thorn",
    "minus",
    "multiply",
    "onesuperior",
    "twosuperior",
    "threesuperior",
    "onehalf",
    "onequarter",
    "threequarters",
    "franc",
    "Gbreve",
    "gbreve",
    "Idotaccent",
    "Scedilla",
    "scedilla",
    "Cacute",
    "cacute",
    "Ccaron",
    "ccaron",
    "dcroat",
  ];
function Ar(e) {
  this.font = e;
}
Ar.prototype.charToGlyphIndex = function (e) {
  var t = e.codePointAt(0),
    r = this.font.glyphs;
  if (r) {
    for (var n = 0; n < r.length; n += 1)
      for (var a = r.get(n), o = 0; o < a.unicodes.length; o += 1)
        if (a.unicodes[o] === t) return n;
  }
  return null;
};
function Or(e) {
  this.cmap = e;
}
Or.prototype.charToGlyphIndex = function (e) {
  return this.cmap.glyphIndexMap[e.codePointAt(0)] || 0;
};
function Ke(e, t) {
  (this.encoding = e), (this.charset = t);
}
Ke.prototype.charToGlyphIndex = function (e) {
  var t = e.codePointAt(0),
    r = this.encoding[t];
  return this.charset.indexOf(r);
};
function kt(e) {
  switch (e.version) {
    case 1:
      this.names = xe.slice();
      break;
    case 2:
      this.names = new Array(e.numberOfGlyphs);
      for (var t = 0; t < e.numberOfGlyphs; t++)
        e.glyphNameIndex[t] < xe.length
          ? (this.names[t] = xe[e.glyphNameIndex[t]])
          : (this.names[t] = e.names[e.glyphNameIndex[t] - xe.length]);
      break;
    case 2.5:
      this.names = new Array(e.numberOfGlyphs);
      for (var r = 0; r < e.numberOfGlyphs; r++)
        this.names[r] = xe[r + e.glyphNameIndex[r]];
      break;
    case 3:
      this.names = [];
      break;
    default:
      this.names = [];
      break;
  }
}
kt.prototype.nameToGlyphIndex = function (e) {
  return this.names.indexOf(e);
};
kt.prototype.glyphIndexToName = function (e) {
  return this.names[e];
};
function Wn(e) {
  for (
    var t, r = e.tables.cmap.glyphIndexMap, n = Object.keys(r), a = 0;
    a < n.length;
    a += 1
  ) {
    var o = n[a],
      s = r[o];
    (t = e.glyphs.get(s)), t.addUnicode(parseInt(o));
  }
  for (var u = 0; u < e.glyphs.length; u += 1)
    (t = e.glyphs.get(u)),
      e.cffEncoding
        ? e.isCIDFont
          ? (t.name = "gid" + u)
          : (t.name = e.cffEncoding.charset[u])
        : e.glyphNames.names && (t.name = e.glyphNames.glyphIndexToName(u));
}
function _n(e) {
  e._IndexToUnicodeMap = {};
  for (
    var t = e.tables.cmap.glyphIndexMap, r = Object.keys(t), n = 0;
    n < r.length;
    n += 1
  ) {
    var a = r[n],
      o = t[a];
    e._IndexToUnicodeMap[o] === void 0
      ? (e._IndexToUnicodeMap[o] = { unicodes: [parseInt(a)] })
      : e._IndexToUnicodeMap[o].unicodes.push(parseInt(a));
  }
}
function qn(e, t) {
  t.lowMemory ? _n(e) : Wn(e);
}
function Xn(e, t, r, n, a) {
  e.beginPath(), e.moveTo(t, r), e.lineTo(n, a), e.stroke();
}
var ye = { line: Xn };
function Vn(e, t) {
  var r = t || new G();
  return {
    configurable: !0,
    get: function () {
      return typeof r == "function" && (r = r()), r;
    },
    set: function (n) {
      r = n;
    },
  };
}
function Z(e) {
  this.bindConstructorValues(e);
}
Z.prototype.bindConstructorValues = function (e) {
  (this.index = e.index || 0),
    (this.name = e.name || null),
    (this.unicode = e.unicode || void 0),
    (this.unicodes = e.unicodes || e.unicode !== void 0 ? [e.unicode] : []),
    "xMin" in e && (this.xMin = e.xMin),
    "yMin" in e && (this.yMin = e.yMin),
    "xMax" in e && (this.xMax = e.xMax),
    "yMax" in e && (this.yMax = e.yMax),
    "advanceWidth" in e && (this.advanceWidth = e.advanceWidth),
    Object.defineProperty(this, "path", Vn(this, e.path));
};
Z.prototype.addUnicode = function (e) {
  this.unicodes.length === 0 && (this.unicode = e), this.unicodes.push(e);
};
Z.prototype.getBoundingBox = function () {
  return this.path.getBoundingBox();
};
Z.prototype.getPath = function (e, t, r, n, a) {
  (e = e !== void 0 ? e : 0),
    (t = t !== void 0 ? t : 0),
    (r = r !== void 0 ? r : 72);
  var o, s;
  n || (n = {});
  var u = n.xScale,
    i = n.yScale;
  if (
    (n.hinting && a && a.hinting && (s = this.path && a.hinting.exec(this, r)),
    s)
  )
    (o = a.hinting.getCommands(s)),
      (e = Math.round(e)),
      (t = Math.round(t)),
      (u = i = 1);
  else {
    o = this.path.commands;
    var p = (1 / (this.path.unitsPerEm || 1e3)) * r;
    u === void 0 && (u = p), i === void 0 && (i = p);
  }
  for (var l = new G(), h = 0; h < o.length; h += 1) {
    var c = o[h];
    c.type === "M"
      ? l.moveTo(e + c.x * u, t + -c.y * i)
      : c.type === "L"
      ? l.lineTo(e + c.x * u, t + -c.y * i)
      : c.type === "Q"
      ? l.quadraticCurveTo(
          e + c.x1 * u,
          t + -c.y1 * i,
          e + c.x * u,
          t + -c.y * i
        )
      : c.type === "C"
      ? l.curveTo(
          e + c.x1 * u,
          t + -c.y1 * i,
          e + c.x2 * u,
          t + -c.y2 * i,
          e + c.x * u,
          t + -c.y * i
        )
      : c.type === "Z" && l.closePath();
  }
  return l;
};
Z.prototype.getContours = function () {
  if (this.points === void 0) return [];
  for (var e = [], t = [], r = 0; r < this.points.length; r += 1) {
    var n = this.points[r];
    t.push(n), n.lastPointOfContour && (e.push(t), (t = []));
  }
  return (
    k.argument(
      t.length === 0,
      "There are still points left in the current contour."
    ),
    e
  );
};
Z.prototype.getMetrics = function () {
  for (
    var e = this.path.commands, t = [], r = [], n = 0;
    n < e.length;
    n += 1
  ) {
    var a = e[n];
    a.type !== "Z" && (t.push(a.x), r.push(a.y)),
      (a.type === "Q" || a.type === "C") && (t.push(a.x1), r.push(a.y1)),
      a.type === "C" && (t.push(a.x2), r.push(a.y2));
  }
  var o = {
    xMin: Math.min.apply(null, t),
    yMin: Math.min.apply(null, r),
    xMax: Math.max.apply(null, t),
    yMax: Math.max.apply(null, r),
    leftSideBearing: this.leftSideBearing,
  };
  return (
    isFinite(o.xMin) || (o.xMin = 0),
    isFinite(o.xMax) || (o.xMax = this.advanceWidth),
    isFinite(o.yMin) || (o.yMin = 0),
    isFinite(o.yMax) || (o.yMax = 0),
    (o.rightSideBearing =
      this.advanceWidth - o.leftSideBearing - (o.xMax - o.xMin)),
    o
  );
};
Z.prototype.draw = function (e, t, r, n, a) {
  this.getPath(t, r, n, a).draw(e);
};
Z.prototype.drawPoints = function (e, t, r, n) {
  function a(h, c, f, v) {
    e.beginPath();
    for (var x = 0; x < h.length; x += 1)
      e.moveTo(c + h[x].x * v, f + h[x].y * v),
        e.arc(c + h[x].x * v, f + h[x].y * v, 2, 0, Math.PI * 2, !1);
    e.closePath(), e.fill();
  }
  (t = t !== void 0 ? t : 0),
    (r = r !== void 0 ? r : 0),
    (n = n !== void 0 ? n : 24);
  for (
    var o = (1 / this.path.unitsPerEm) * n,
      s = [],
      u = [],
      i = this.path,
      p = 0;
    p < i.commands.length;
    p += 1
  ) {
    var l = i.commands[p];
    l.x !== void 0 && s.push({ x: l.x, y: -l.y }),
      l.x1 !== void 0 && u.push({ x: l.x1, y: -l.y1 }),
      l.x2 !== void 0 && u.push({ x: l.x2, y: -l.y2 });
  }
  (e.fillStyle = "blue"), a(s, t, r, o), (e.fillStyle = "red"), a(u, t, r, o);
};
Z.prototype.drawMetrics = function (e, t, r, n) {
  var a;
  (t = t !== void 0 ? t : 0),
    (r = r !== void 0 ? r : 0),
    (n = n !== void 0 ? n : 24),
    (a = (1 / this.path.unitsPerEm) * n),
    (e.lineWidth = 1),
    (e.strokeStyle = "black"),
    ye.line(e, t, -1e4, t, 1e4),
    ye.line(e, -1e4, r, 1e4, r);
  var o = this.xMin || 0,
    s = this.yMin || 0,
    u = this.xMax || 0,
    i = this.yMax || 0,
    p = this.advanceWidth || 0;
  (e.strokeStyle = "blue"),
    ye.line(e, t + o * a, -1e4, t + o * a, 1e4),
    ye.line(e, t + u * a, -1e4, t + u * a, 1e4),
    ye.line(e, -1e4, r + -s * a, 1e4, r + -s * a),
    ye.line(e, -1e4, r + -i * a, 1e4, r + -i * a),
    (e.strokeStyle = "green"),
    ye.line(e, t + p * a, -1e4, t + p * a, 1e4);
};
function We(e, t, r) {
  Object.defineProperty(e, t, {
    get: function () {
      return e.path, e[r];
    },
    set: function (n) {
      e[r] = n;
    },
    enumerable: !0,
    configurable: !0,
  });
}
function Ut(e, t) {
  if (((this.font = e), (this.glyphs = {}), Array.isArray(t)))
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.path.unitsPerEm = e.unitsPerEm), (this.glyphs[r] = n);
    }
  this.length = (t && t.length) || 0;
}
Ut.prototype.get = function (e) {
  if (this.glyphs[e] === void 0) {
    this.font._push(e),
      typeof this.glyphs[e] == "function" &&
        (this.glyphs[e] = this.glyphs[e]());
    var t = this.glyphs[e],
      r = this.font._IndexToUnicodeMap[e];
    if (r)
      for (var n = 0; n < r.unicodes.length; n++) t.addUnicode(r.unicodes[n]);
    this.font.cffEncoding
      ? this.font.isCIDFont
        ? (t.name = "gid" + e)
        : (t.name = this.font.cffEncoding.charset[e])
      : this.font.glyphNames.names &&
        (t.name = this.font.glyphNames.glyphIndexToName(e)),
      (this.glyphs[e].advanceWidth = this.font._hmtxTableData[e].advanceWidth),
      (this.glyphs[e].leftSideBearing =
        this.font._hmtxTableData[e].leftSideBearing);
  } else
    typeof this.glyphs[e] == "function" && (this.glyphs[e] = this.glyphs[e]());
  return this.glyphs[e];
};
Ut.prototype.push = function (e, t) {
  (this.glyphs[e] = t), this.length++;
};
function Yn(e, t) {
  return new Z({ index: t, font: e });
}
function jn(e, t, r, n, a, o) {
  return function () {
    var s = new Z({ index: t, font: e });
    return (
      (s.path = function () {
        r(s, n, a);
        var u = o(e.glyphs, s);
        return (u.unitsPerEm = e.unitsPerEm), u;
      }),
      We(s, "xMin", "_xMin"),
      We(s, "xMax", "_xMax"),
      We(s, "yMin", "_yMin"),
      We(s, "yMax", "_yMax"),
      s
    );
  };
}
function Zn(e, t, r, n) {
  return function () {
    var a = new Z({ index: t, font: e });
    return (
      (a.path = function () {
        var o = r(e, a, n);
        return (o.unitsPerEm = e.unitsPerEm), o;
      }),
      a
    );
  };
}
var ue = {
  GlyphSet: Ut,
  glyphLoader: Yn,
  ttfGlyphLoader: jn,
  cffGlyphLoader: Zn,
};
function Br(e, t) {
  if (e === t) return !0;
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return !1;
    for (var r = 0; r < e.length; r += 1) if (!Br(e[r], t[r])) return !1;
    return !0;
  } else return !1;
}
function vt(e) {
  var t;
  return (
    e.length < 1240 ? (t = 107) : e.length < 33900 ? (t = 1131) : (t = 32768), t
  );
}
function de(e, t, r) {
  var n = [],
    a = [],
    o = C.getCard16(e, t),
    s,
    u;
  if (o !== 0) {
    var i = C.getByte(e, t + 2);
    s = t + (o + 1) * i + 2;
    for (var p = t + 3, l = 0; l < o + 1; l += 1)
      n.push(C.getOffset(e, p, i)), (p += i);
    u = s + n[o];
  } else u = t + 2;
  for (var h = 0; h < n.length - 1; h += 1) {
    var c = C.getBytes(e, s + n[h], s + n[h + 1]);
    r && (c = r(c)), a.push(c);
  }
  return { objects: a, startOffset: t, endOffset: u };
}
function Qn(e, t) {
  var r = [],
    n = C.getCard16(e, t),
    a,
    o;
  if (n !== 0) {
    var s = C.getByte(e, t + 2);
    a = t + (n + 1) * s + 2;
    for (var u = t + 3, i = 0; i < n + 1; i += 1)
      r.push(C.getOffset(e, u, s)), (u += s);
    o = a + r[n];
  } else o = t + 2;
  return { offsets: r, startOffset: t, endOffset: o };
}
function Kn(e, t, r, n, a) {
  var o = C.getCard16(r, n),
    s = 0;
  if (o !== 0) {
    var u = C.getByte(r, n + 2);
    s = n + (o + 1) * u + 2;
  }
  var i = C.getBytes(r, s + t[e], s + t[e + 1]);
  return a && (i = a(i)), i;
}
function Jn(e) {
  for (
    var t = "",
      r = 15,
      n = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        ".",
        "E",
        "E-",
        null,
        "-",
      ];
    ;

  ) {
    var a = e.parseByte(),
      o = a >> 4,
      s = a & 15;
    if (o === r || ((t += n[o]), s === r)) break;
    t += n[s];
  }
  return parseFloat(t);
}
function $n(e, t) {
  var r, n, a, o;
  if (t === 28) return (r = e.parseByte()), (n = e.parseByte()), (r << 8) | n;
  if (t === 29)
    return (
      (r = e.parseByte()),
      (n = e.parseByte()),
      (a = e.parseByte()),
      (o = e.parseByte()),
      (r << 24) | (n << 16) | (a << 8) | o
    );
  if (t === 30) return Jn(e);
  if (t >= 32 && t <= 246) return t - 139;
  if (t >= 247 && t <= 250)
    return (r = e.parseByte()), (t - 247) * 256 + r + 108;
  if (t >= 251 && t <= 254)
    return (r = e.parseByte()), -(t - 251) * 256 - r - 108;
  throw new Error("Invalid b0 " + t);
}
function ea(e) {
  for (var t = {}, r = 0; r < e.length; r += 1) {
    var n = e[r][0],
      a = e[r][1],
      o = void 0;
    if (
      (a.length === 1 ? (o = a[0]) : (o = a),
      t.hasOwnProperty(n) && !isNaN(t[n]))
    )
      throw new Error("Object " + t + " already has key " + n);
    t[n] = o;
  }
  return t;
}
function Rr(e, t, r) {
  t = t !== void 0 ? t : 0;
  var n = new C.Parser(e, t),
    a = [],
    o = [];
  for (r = r !== void 0 ? r : e.length; n.relativeOffset < r; ) {
    var s = n.parseByte();
    s <= 21
      ? (s === 12 && (s = 1200 + n.parseByte()), a.push([s, o]), (o = []))
      : o.push($n(n, s));
  }
  return ea(a);
}
function Ae(e, t) {
  return t <= 390 ? (t = qe[t]) : (t = e[t - 391]), t;
}
function wr(e, t, r) {
  for (var n = {}, a, o = 0; o < t.length; o += 1) {
    var s = t[o];
    if (Array.isArray(s.type)) {
      var u = [];
      u.length = s.type.length;
      for (var i = 0; i < s.type.length; i++)
        (a = e[s.op] !== void 0 ? e[s.op][i] : void 0),
          a === void 0 &&
            (a =
              s.value !== void 0 && s.value[i] !== void 0 ? s.value[i] : null),
          s.type[i] === "SID" && (a = Ae(r, a)),
          (u[i] = a);
      n[s.name] = u;
    } else
      (a = e[s.op]),
        a === void 0 && (a = s.value !== void 0 ? s.value : null),
        s.type === "SID" && (a = Ae(r, a)),
        (n[s.name] = a);
  }
  return n;
}
function ta(e, t) {
  var r = {};
  return (
    (r.formatMajor = C.getCard8(e, t)),
    (r.formatMinor = C.getCard8(e, t + 1)),
    (r.size = C.getCard8(e, t + 2)),
    (r.offsetSize = C.getCard8(e, t + 3)),
    (r.startOffset = t),
    (r.endOffset = t + 4),
    r
  );
}
var Fr = [
    { name: "version", op: 0, type: "SID" },
    { name: "notice", op: 1, type: "SID" },
    { name: "copyright", op: 1200, type: "SID" },
    { name: "fullName", op: 2, type: "SID" },
    { name: "familyName", op: 3, type: "SID" },
    { name: "weight", op: 4, type: "SID" },
    { name: "isFixedPitch", op: 1201, type: "number", value: 0 },
    { name: "italicAngle", op: 1202, type: "number", value: 0 },
    { name: "underlinePosition", op: 1203, type: "number", value: -100 },
    { name: "underlineThickness", op: 1204, type: "number", value: 50 },
    { name: "paintType", op: 1205, type: "number", value: 0 },
    { name: "charstringType", op: 1206, type: "number", value: 2 },
    {
      name: "fontMatrix",
      op: 1207,
      type: ["real", "real", "real", "real", "real", "real"],
      value: [0.001, 0, 0, 0.001, 0, 0],
    },
    { name: "uniqueId", op: 13, type: "number" },
    {
      name: "fontBBox",
      op: 5,
      type: ["number", "number", "number", "number"],
      value: [0, 0, 0, 0],
    },
    { name: "strokeWidth", op: 1208, type: "number", value: 0 },
    { name: "xuid", op: 14, type: [], value: null },
    { name: "charset", op: 15, type: "offset", value: 0 },
    { name: "encoding", op: 16, type: "offset", value: 0 },
    { name: "charStrings", op: 17, type: "offset", value: 0 },
    { name: "private", op: 18, type: ["number", "offset"], value: [0, 0] },
    { name: "ros", op: 1230, type: ["SID", "SID", "number"] },
    { name: "cidFontVersion", op: 1231, type: "number", value: 0 },
    { name: "cidFontRevision", op: 1232, type: "number", value: 0 },
    { name: "cidFontType", op: 1233, type: "number", value: 0 },
    { name: "cidCount", op: 1234, type: "number", value: 8720 },
    { name: "uidBase", op: 1235, type: "number" },
    { name: "fdArray", op: 1236, type: "offset" },
    { name: "fdSelect", op: 1237, type: "offset" },
    { name: "fontName", op: 1238, type: "SID" },
  ],
  Lr = [
    { name: "subrs", op: 19, type: "offset", value: 0 },
    { name: "defaultWidthX", op: 20, type: "number", value: 0 },
    { name: "nominalWidthX", op: 21, type: "number", value: 0 },
  ];
function ra(e, t) {
  var r = Rr(e, 0, e.byteLength);
  return wr(r, Fr, t);
}
function Ir(e, t, r, n) {
  var a = Rr(e, t, r);
  return wr(a, Lr, n);
}
function Wt(e, t, r, n) {
  for (var a = [], o = 0; o < r.length; o += 1) {
    var s = new DataView(new Uint8Array(r[o]).buffer),
      u = ra(s, n);
    (u._subrs = []),
      (u._subrsBias = 0),
      (u._defaultWidthX = 0),
      (u._nominalWidthX = 0);
    var i = u.private[0],
      p = u.private[1];
    if (i !== 0 && p !== 0) {
      var l = Ir(e, p + t, i, n);
      if (
        ((u._defaultWidthX = l.defaultWidthX),
        (u._nominalWidthX = l.nominalWidthX),
        l.subrs !== 0)
      ) {
        var h = p + l.subrs,
          c = de(e, h + t);
        (u._subrs = c.objects), (u._subrsBias = vt(u._subrs));
      }
      u._privateDict = l;
    }
    a.push(u);
  }
  return a;
}
function na(e, t, r, n) {
  var a,
    o,
    s = new C.Parser(e, t);
  r -= 1;
  var u = [".notdef"],
    i = s.parseCard8();
  if (i === 0)
    for (var p = 0; p < r; p += 1) (a = s.parseSID()), u.push(Ae(n, a));
  else if (i === 1)
    for (; u.length <= r; ) {
      (a = s.parseSID()), (o = s.parseCard8());
      for (var l = 0; l <= o; l += 1) u.push(Ae(n, a)), (a += 1);
    }
  else if (i === 2)
    for (; u.length <= r; ) {
      (a = s.parseSID()), (o = s.parseCard16());
      for (var h = 0; h <= o; h += 1) u.push(Ae(n, a)), (a += 1);
    }
  else throw new Error("Unknown charset format " + i);
  return u;
}
function aa(e, t, r) {
  var n,
    a = {},
    o = new C.Parser(e, t),
    s = o.parseCard8();
  if (s === 0)
    for (var u = o.parseCard8(), i = 0; i < u; i += 1)
      (n = o.parseCard8()), (a[n] = i);
  else if (s === 1) {
    var p = o.parseCard8();
    n = 1;
    for (var l = 0; l < p; l += 1)
      for (
        var h = o.parseCard8(), c = o.parseCard8(), f = h;
        f <= h + c;
        f += 1
      )
        (a[f] = n), (n += 1);
  } else throw new Error("Unknown encoding format " + s);
  return new Ke(a, r);
}
function _t(e, t, r) {
  var n,
    a,
    o,
    s,
    u = new G(),
    i = [],
    p = 0,
    l = !1,
    h = !1,
    c = 0,
    f = 0,
    v,
    x,
    m,
    y;
  if (e.isCIDFont) {
    var U = e.tables.cff.topDict._fdSelect[t.index],
      S = e.tables.cff.topDict._fdArray[U];
    (v = S._subrs),
      (x = S._subrsBias),
      (m = S._defaultWidthX),
      (y = S._nominalWidthX);
  } else
    (v = e.tables.cff.topDict._subrs),
      (x = e.tables.cff.topDict._subrsBias),
      (m = e.tables.cff.topDict._defaultWidthX),
      (y = e.tables.cff.topDict._nominalWidthX);
  var B = m;
  function A(T, P) {
    h && u.closePath(), u.moveTo(T, P), (h = !0);
  }
  function w() {
    var T;
    (T = i.length % 2 !== 0),
      T && !l && (B = i.shift() + y),
      (p += i.length >> 1),
      (i.length = 0),
      (l = !0);
  }
  function O(T) {
    for (var P, Y, j, J, $, M, N, W, _, q, H, V, F = 0; F < T.length; ) {
      var X = T[F];
      switch (((F += 1), X)) {
        case 1:
          w();
          break;
        case 3:
          w();
          break;
        case 4:
          i.length > 1 && !l && ((B = i.shift() + y), (l = !0)),
            (f += i.pop()),
            A(c, f);
          break;
        case 5:
          for (; i.length > 0; )
            (c += i.shift()), (f += i.shift()), u.lineTo(c, f);
          break;
        case 6:
          for (
            ;
            i.length > 0 && ((c += i.shift()), u.lineTo(c, f), i.length !== 0);

          )
            (f += i.shift()), u.lineTo(c, f);
          break;
        case 7:
          for (
            ;
            i.length > 0 && ((f += i.shift()), u.lineTo(c, f), i.length !== 0);

          )
            (c += i.shift()), u.lineTo(c, f);
          break;
        case 8:
          for (; i.length > 0; )
            (n = c + i.shift()),
              (a = f + i.shift()),
              (o = n + i.shift()),
              (s = a + i.shift()),
              (c = o + i.shift()),
              (f = s + i.shift()),
              u.curveTo(n, a, o, s, c, f);
          break;
        case 10:
          ($ = i.pop() + x), (M = v[$]), M && O(M);
          break;
        case 11:
          return;
        case 12:
          switch (((X = T[F]), (F += 1), X)) {
            case 35:
              (n = c + i.shift()),
                (a = f + i.shift()),
                (o = n + i.shift()),
                (s = a + i.shift()),
                (N = o + i.shift()),
                (W = s + i.shift()),
                (_ = N + i.shift()),
                (q = W + i.shift()),
                (H = _ + i.shift()),
                (V = q + i.shift()),
                (c = H + i.shift()),
                (f = V + i.shift()),
                i.shift(),
                u.curveTo(n, a, o, s, N, W),
                u.curveTo(_, q, H, V, c, f);
              break;
            case 34:
              (n = c + i.shift()),
                (a = f),
                (o = n + i.shift()),
                (s = a + i.shift()),
                (N = o + i.shift()),
                (W = s),
                (_ = N + i.shift()),
                (q = s),
                (H = _ + i.shift()),
                (V = f),
                (c = H + i.shift()),
                u.curveTo(n, a, o, s, N, W),
                u.curveTo(_, q, H, V, c, f);
              break;
            case 36:
              (n = c + i.shift()),
                (a = f + i.shift()),
                (o = n + i.shift()),
                (s = a + i.shift()),
                (N = o + i.shift()),
                (W = s),
                (_ = N + i.shift()),
                (q = s),
                (H = _ + i.shift()),
                (V = q + i.shift()),
                (c = H + i.shift()),
                u.curveTo(n, a, o, s, N, W),
                u.curveTo(_, q, H, V, c, f);
              break;
            case 37:
              (n = c + i.shift()),
                (a = f + i.shift()),
                (o = n + i.shift()),
                (s = a + i.shift()),
                (N = o + i.shift()),
                (W = s + i.shift()),
                (_ = N + i.shift()),
                (q = W + i.shift()),
                (H = _ + i.shift()),
                (V = q + i.shift()),
                Math.abs(H - c) > Math.abs(V - f)
                  ? (c = H + i.shift())
                  : (f = V + i.shift()),
                u.curveTo(n, a, o, s, N, W),
                u.curveTo(_, q, H, V, c, f);
              break;
            default:
              console.log("Glyph " + t.index + ": unknown operator 1200" + X),
                (i.length = 0);
          }
          break;
        case 14:
          i.length > 0 && !l && ((B = i.shift() + y), (l = !0)),
            h && (u.closePath(), (h = !1));
          break;
        case 18:
          w();
          break;
        case 19:
        case 20:
          w(), (F += (p + 7) >> 3);
          break;
        case 21:
          i.length > 2 && !l && ((B = i.shift() + y), (l = !0)),
            (f += i.pop()),
            (c += i.pop()),
            A(c, f);
          break;
        case 22:
          i.length > 1 && !l && ((B = i.shift() + y), (l = !0)),
            (c += i.pop()),
            A(c, f);
          break;
        case 23:
          w();
          break;
        case 24:
          for (; i.length > 2; )
            (n = c + i.shift()),
              (a = f + i.shift()),
              (o = n + i.shift()),
              (s = a + i.shift()),
              (c = o + i.shift()),
              (f = s + i.shift()),
              u.curveTo(n, a, o, s, c, f);
          (c += i.shift()), (f += i.shift()), u.lineTo(c, f);
          break;
        case 25:
          for (; i.length > 6; )
            (c += i.shift()), (f += i.shift()), u.lineTo(c, f);
          (n = c + i.shift()),
            (a = f + i.shift()),
            (o = n + i.shift()),
            (s = a + i.shift()),
            (c = o + i.shift()),
            (f = s + i.shift()),
            u.curveTo(n, a, o, s, c, f);
          break;
        case 26:
          for (i.length % 2 && (c += i.shift()); i.length > 0; )
            (n = c),
              (a = f + i.shift()),
              (o = n + i.shift()),
              (s = a + i.shift()),
              (c = o),
              (f = s + i.shift()),
              u.curveTo(n, a, o, s, c, f);
          break;
        case 27:
          for (i.length % 2 && (f += i.shift()); i.length > 0; )
            (n = c + i.shift()),
              (a = f),
              (o = n + i.shift()),
              (s = a + i.shift()),
              (c = o + i.shift()),
              (f = s),
              u.curveTo(n, a, o, s, c, f);
          break;
        case 28:
          (P = T[F]),
            (Y = T[F + 1]),
            i.push(((P << 24) | (Y << 16)) >> 16),
            (F += 2);
          break;
        case 29:
          ($ = i.pop() + e.gsubrsBias), (M = e.gsubrs[$]), M && O(M);
          break;
        case 30:
          for (
            ;
            i.length > 0 &&
            ((n = c),
            (a = f + i.shift()),
            (o = n + i.shift()),
            (s = a + i.shift()),
            (c = o + i.shift()),
            (f = s + (i.length === 1 ? i.shift() : 0)),
            u.curveTo(n, a, o, s, c, f),
            i.length !== 0);

          )
            (n = c + i.shift()),
              (a = f),
              (o = n + i.shift()),
              (s = a + i.shift()),
              (f = s + i.shift()),
              (c = o + (i.length === 1 ? i.shift() : 0)),
              u.curveTo(n, a, o, s, c, f);
          break;
        case 31:
          for (
            ;
            i.length > 0 &&
            ((n = c + i.shift()),
            (a = f),
            (o = n + i.shift()),
            (s = a + i.shift()),
            (f = s + i.shift()),
            (c = o + (i.length === 1 ? i.shift() : 0)),
            u.curveTo(n, a, o, s, c, f),
            i.length !== 0);

          )
            (n = c),
              (a = f + i.shift()),
              (o = n + i.shift()),
              (s = a + i.shift()),
              (c = o + i.shift()),
              (f = s + (i.length === 1 ? i.shift() : 0)),
              u.curveTo(n, a, o, s, c, f);
          break;
        default:
          X < 32
            ? console.log("Glyph " + t.index + ": unknown operator " + X)
            : X < 247
            ? i.push(X - 139)
            : X < 251
            ? ((P = T[F]), (F += 1), i.push((X - 247) * 256 + P + 108))
            : X < 255
            ? ((P = T[F]), (F += 1), i.push(-(X - 251) * 256 - P - 108))
            : ((P = T[F]),
              (Y = T[F + 1]),
              (j = T[F + 2]),
              (J = T[F + 3]),
              (F += 4),
              i.push(((P << 24) | (Y << 16) | (j << 8) | J) / 65536));
      }
    }
  }
  return O(r), (t.advanceWidth = B), u;
}
function oa(e, t, r, n) {
  var a = [],
    o,
    s = new C.Parser(e, t),
    u = s.parseCard8();
  if (u === 0)
    for (var i = 0; i < r; i++) {
      if (((o = s.parseCard8()), o >= n))
        throw new Error(
          "CFF table CID Font FDSelect has bad FD index value " +
            o +
            " (FD count " +
            n +
            ")"
        );
      a.push(o);
    }
  else if (u === 3) {
    var p = s.parseCard16(),
      l = s.parseCard16();
    if (l !== 0)
      throw new Error(
        "CFF Table CID Font FDSelect format 3 range has bad initial GID " + l
      );
    for (var h, c = 0; c < p; c++) {
      if (((o = s.parseCard8()), (h = s.parseCard16()), o >= n))
        throw new Error(
          "CFF table CID Font FDSelect has bad FD index value " +
            o +
            " (FD count " +
            n +
            ")"
        );
      if (h > r)
        throw new Error(
          "CFF Table CID Font FDSelect format 3 range has bad GID " + h
        );
      for (; l < h; l++) a.push(o);
      l = h;
    }
    if (h !== r)
      throw new Error(
        "CFF Table CID Font FDSelect format 3 range has bad final GID " + h
      );
  } else
    throw new Error(
      "CFF Table CID Font FDSelect table has unsupported format " + u
    );
  return a;
}
function sa(e, t, r, n) {
  r.tables.cff = {};
  var a = ta(e, t),
    o = de(e, a.endOffset, C.bytesToString),
    s = de(e, o.endOffset),
    u = de(e, s.endOffset, C.bytesToString),
    i = de(e, u.endOffset);
  (r.gsubrs = i.objects), (r.gsubrsBias = vt(r.gsubrs));
  var p = Wt(e, t, s.objects, u.objects);
  if (p.length !== 1)
    throw new Error(
      "CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = " +
        p.length
    );
  var l = p[0];
  if (
    ((r.tables.cff.topDict = l),
    l._privateDict &&
      ((r.defaultWidthX = l._privateDict.defaultWidthX),
      (r.nominalWidthX = l._privateDict.nominalWidthX)),
    l.ros[0] !== void 0 && l.ros[1] !== void 0 && (r.isCIDFont = !0),
    r.isCIDFont)
  ) {
    var h = l.fdArray,
      c = l.fdSelect;
    if (h === 0 || c === 0)
      throw new Error(
        "Font is marked as a CID font, but FDArray and/or FDSelect information is missing"
      );
    h += t;
    var f = de(e, h),
      v = Wt(e, t, f.objects, u.objects);
    (l._fdArray = v), (c += t), (l._fdSelect = oa(e, c, r.numGlyphs, v.length));
  }
  var x = t + l.private[1],
    m = Ir(e, x, l.private[0], u.objects);
  if (
    ((r.defaultWidthX = m.defaultWidthX),
    (r.nominalWidthX = m.nominalWidthX),
    m.subrs !== 0)
  ) {
    var y = x + m.subrs,
      U = de(e, y);
    (r.subrs = U.objects), (r.subrsBias = vt(r.subrs));
  } else (r.subrs = []), (r.subrsBias = 0);
  var S;
  n.lowMemory
    ? ((S = Qn(e, t + l.charStrings)), (r.nGlyphs = S.offsets.length))
    : ((S = de(e, t + l.charStrings)), (r.nGlyphs = S.objects.length));
  var B = na(e, t + l.charset, r.nGlyphs, u.objects);
  if (
    (l.encoding === 0
      ? (r.cffEncoding = new Ke(Hn, B))
      : l.encoding === 1
      ? (r.cffEncoding = new Ke(zn, B))
      : (r.cffEncoding = aa(e, t + l.encoding, B)),
    (r.encoding = r.encoding || r.cffEncoding),
    (r.glyphs = new ue.GlyphSet(r)),
    n.lowMemory)
  )
    r._push = function (O) {
      var T = Kn(O, S.offsets, e, t + l.charStrings);
      r.glyphs.push(O, ue.cffGlyphLoader(r, O, _t, T));
    };
  else
    for (var A = 0; A < r.nGlyphs; A += 1) {
      var w = S.objects[A];
      r.glyphs.push(A, ue.cffGlyphLoader(r, A, _t, w));
    }
}
function Mr(e, t) {
  var r,
    n = qe.indexOf(e);
  return (
    n >= 0 && (r = n),
    (n = t.indexOf(e)),
    n >= 0 ? (r = n + qe.length) : ((r = qe.length + t.length), t.push(e)),
    r
  );
}
function ia() {
  return new b.Record("Header", [
    { name: "major", type: "Card8", value: 1 },
    { name: "minor", type: "Card8", value: 0 },
    { name: "hdrSize", type: "Card8", value: 4 },
    { name: "major", type: "Card8", value: 1 },
  ]);
}
function ua(e) {
  var t = new b.Record("Name INDEX", [
    { name: "names", type: "INDEX", value: [] },
  ]);
  t.names = [];
  for (var r = 0; r < e.length; r += 1)
    t.names.push({ name: "name_" + r, type: "NAME", value: e[r] });
  return t;
}
function Gr(e, t, r) {
  for (var n = {}, a = 0; a < e.length; a += 1) {
    var o = e[a],
      s = t[o.name];
    s !== void 0 &&
      !Br(s, o.value) &&
      (o.type === "SID" && (s = Mr(s, r)),
      (n[o.op] = { name: o.name, type: o.type, value: s }));
  }
  return n;
}
function qt(e, t) {
  var r = new b.Record("Top DICT", [{ name: "dict", type: "DICT", value: {} }]);
  return (r.dict = Gr(Fr, e, t)), r;
}
function Xt(e) {
  var t = new b.Record("Top DICT INDEX", [
    { name: "topDicts", type: "INDEX", value: [] },
  ]);
  return (t.topDicts = [{ name: "topDict_0", type: "TABLE", value: e }]), t;
}
function la(e) {
  var t = new b.Record("String INDEX", [
    { name: "strings", type: "INDEX", value: [] },
  ]);
  t.strings = [];
  for (var r = 0; r < e.length; r += 1)
    t.strings.push({ name: "string_" + r, type: "STRING", value: e[r] });
  return t;
}
function pa() {
  return new b.Record("Global Subr INDEX", [
    { name: "subrs", type: "INDEX", value: [] },
  ]);
}
function ca(e, t) {
  for (
    var r = new b.Record("Charsets", [
        { name: "format", type: "Card8", value: 0 },
      ]),
      n = 0;
    n < e.length;
    n += 1
  ) {
    var a = e[n],
      o = Mr(a, t);
    r.fields.push({ name: "glyph_" + n, type: "SID", value: o });
  }
  return r;
}
function ha(e) {
  var t = [],
    r = e.path;
  t.push({ name: "width", type: "NUMBER", value: e.advanceWidth });
  for (var n = 0, a = 0, o = 0; o < r.commands.length; o += 1) {
    var s = void 0,
      u = void 0,
      i = r.commands[o];
    if (i.type === "Q") {
      var p = 0.3333333333333333,
        l = 2 / 3;
      i = {
        type: "C",
        x: i.x,
        y: i.y,
        x1: Math.round(p * n + l * i.x1),
        y1: Math.round(p * a + l * i.y1),
        x2: Math.round(p * i.x + l * i.x1),
        y2: Math.round(p * i.y + l * i.y1),
      };
    }
    if (i.type === "M")
      (s = Math.round(i.x - n)),
        (u = Math.round(i.y - a)),
        t.push({ name: "dx", type: "NUMBER", value: s }),
        t.push({ name: "dy", type: "NUMBER", value: u }),
        t.push({ name: "rmoveto", type: "OP", value: 21 }),
        (n = Math.round(i.x)),
        (a = Math.round(i.y));
    else if (i.type === "L")
      (s = Math.round(i.x - n)),
        (u = Math.round(i.y - a)),
        t.push({ name: "dx", type: "NUMBER", value: s }),
        t.push({ name: "dy", type: "NUMBER", value: u }),
        t.push({ name: "rlineto", type: "OP", value: 5 }),
        (n = Math.round(i.x)),
        (a = Math.round(i.y));
    else if (i.type === "C") {
      var h = Math.round(i.x1 - n),
        c = Math.round(i.y1 - a),
        f = Math.round(i.x2 - i.x1),
        v = Math.round(i.y2 - i.y1);
      (s = Math.round(i.x - i.x2)),
        (u = Math.round(i.y - i.y2)),
        t.push({ name: "dx1", type: "NUMBER", value: h }),
        t.push({ name: "dy1", type: "NUMBER", value: c }),
        t.push({ name: "dx2", type: "NUMBER", value: f }),
        t.push({ name: "dy2", type: "NUMBER", value: v }),
        t.push({ name: "dx", type: "NUMBER", value: s }),
        t.push({ name: "dy", type: "NUMBER", value: u }),
        t.push({ name: "rrcurveto", type: "OP", value: 8 }),
        (n = Math.round(i.x)),
        (a = Math.round(i.y));
    }
  }
  return t.push({ name: "endchar", type: "OP", value: 14 }), t;
}
function fa(e) {
  for (
    var t = new b.Record("CharStrings INDEX", [
        { name: "charStrings", type: "INDEX", value: [] },
      ]),
      r = 0;
    r < e.length;
    r += 1
  ) {
    var n = e.get(r),
      a = ha(n);
    t.charStrings.push({ name: n.name, type: "CHARSTRING", value: a });
  }
  return t;
}
function da(e, t) {
  var r = new b.Record("Private DICT", [
    { name: "dict", type: "DICT", value: {} },
  ]);
  return (r.dict = Gr(Lr, e, t)), r;
}
function va(e, t) {
  for (
    var r = new b.Table("CFF ", [
        { name: "header", type: "RECORD" },
        { name: "nameIndex", type: "RECORD" },
        { name: "topDictIndex", type: "RECORD" },
        { name: "stringIndex", type: "RECORD" },
        { name: "globalSubrIndex", type: "RECORD" },
        { name: "charsets", type: "RECORD" },
        { name: "charStringsIndex", type: "RECORD" },
        { name: "privateDict", type: "RECORD" },
      ]),
      n = 1 / t.unitsPerEm,
      a = {
        version: t.version,
        fullName: t.fullName,
        familyName: t.familyName,
        weight: t.weightName,
        fontBBox: t.fontBBox || [0, 0, 0, 0],
        fontMatrix: [n, 0, 0, n, 0, 0],
        charset: 999,
        encoding: 0,
        charStrings: 999,
        private: [0, 999],
      },
      o = {},
      s = [],
      u,
      i = 1;
    i < e.length;
    i += 1
  )
    (u = e.get(i)), s.push(u.name);
  var p = [];
  (r.header = ia()), (r.nameIndex = ua([t.postScriptName]));
  var l = qt(a, p);
  (r.topDictIndex = Xt(l)),
    (r.globalSubrIndex = pa()),
    (r.charsets = ca(s, p)),
    (r.charStringsIndex = fa(e)),
    (r.privateDict = da(o, p)),
    (r.stringIndex = la(p));
  var h =
    r.header.sizeOf() +
    r.nameIndex.sizeOf() +
    r.topDictIndex.sizeOf() +
    r.stringIndex.sizeOf() +
    r.globalSubrIndex.sizeOf();
  return (
    (a.charset = h),
    (a.encoding = 0),
    (a.charStrings = a.charset + r.charsets.sizeOf()),
    (a.private[1] = a.charStrings + r.charStringsIndex.sizeOf()),
    (l = qt(a, p)),
    (r.topDictIndex = Xt(l)),
    r
  );
}
var Pr = { parse: sa, make: va };
function ga(e, t) {
  var r = {},
    n = new C.Parser(e, t);
  return (
    (r.version = n.parseVersion()),
    (r.fontRevision = Math.round(n.parseFixed() * 1e3) / 1e3),
    (r.checkSumAdjustment = n.parseULong()),
    (r.magicNumber = n.parseULong()),
    k.argument(
      r.magicNumber === 1594834165,
      "Font header has wrong magic number."
    ),
    (r.flags = n.parseUShort()),
    (r.unitsPerEm = n.parseUShort()),
    (r.created = n.parseLongDateTime()),
    (r.modified = n.parseLongDateTime()),
    (r.xMin = n.parseShort()),
    (r.yMin = n.parseShort()),
    (r.xMax = n.parseShort()),
    (r.yMax = n.parseShort()),
    (r.macStyle = n.parseUShort()),
    (r.lowestRecPPEM = n.parseUShort()),
    (r.fontDirectionHint = n.parseShort()),
    (r.indexToLocFormat = n.parseShort()),
    (r.glyphDataFormat = n.parseShort()),
    r
  );
}
function ma(e) {
  var t = Math.round(new Date().getTime() / 1e3) + 2082844800,
    r = t;
  return (
    e.createdTimestamp && (r = e.createdTimestamp + 2082844800),
    new b.Table(
      "head",
      [
        { name: "version", type: "FIXED", value: 65536 },
        { name: "fontRevision", type: "FIXED", value: 65536 },
        { name: "checkSumAdjustment", type: "ULONG", value: 0 },
        { name: "magicNumber", type: "ULONG", value: 1594834165 },
        { name: "flags", type: "USHORT", value: 0 },
        { name: "unitsPerEm", type: "USHORT", value: 1e3 },
        { name: "created", type: "LONGDATETIME", value: r },
        { name: "modified", type: "LONGDATETIME", value: t },
        { name: "xMin", type: "SHORT", value: 0 },
        { name: "yMin", type: "SHORT", value: 0 },
        { name: "xMax", type: "SHORT", value: 0 },
        { name: "yMax", type: "SHORT", value: 0 },
        { name: "macStyle", type: "USHORT", value: 0 },
        { name: "lowestRecPPEM", type: "USHORT", value: 0 },
        { name: "fontDirectionHint", type: "SHORT", value: 2 },
        { name: "indexToLocFormat", type: "SHORT", value: 0 },
        { name: "glyphDataFormat", type: "SHORT", value: 0 },
      ],
      e
    )
  );
}
var Nr = { parse: ga, make: ma };
function ya(e, t) {
  var r = {},
    n = new C.Parser(e, t);
  return (
    (r.version = n.parseVersion()),
    (r.ascender = n.parseShort()),
    (r.descender = n.parseShort()),
    (r.lineGap = n.parseShort()),
    (r.advanceWidthMax = n.parseUShort()),
    (r.minLeftSideBearing = n.parseShort()),
    (r.minRightSideBearing = n.parseShort()),
    (r.xMaxExtent = n.parseShort()),
    (r.caretSlopeRise = n.parseShort()),
    (r.caretSlopeRun = n.parseShort()),
    (r.caretOffset = n.parseShort()),
    (n.relativeOffset += 8),
    (r.metricDataFormat = n.parseShort()),
    (r.numberOfHMetrics = n.parseUShort()),
    r
  );
}
function xa(e) {
  return new b.Table(
    "hhea",
    [
      { name: "version", type: "FIXED", value: 65536 },
      { name: "ascender", type: "FWORD", value: 0 },
      { name: "descender", type: "FWORD", value: 0 },
      { name: "lineGap", type: "FWORD", value: 0 },
      { name: "advanceWidthMax", type: "UFWORD", value: 0 },
      { name: "minLeftSideBearing", type: "FWORD", value: 0 },
      { name: "minRightSideBearing", type: "FWORD", value: 0 },
      { name: "xMaxExtent", type: "FWORD", value: 0 },
      { name: "caretSlopeRise", type: "SHORT", value: 1 },
      { name: "caretSlopeRun", type: "SHORT", value: 0 },
      { name: "caretOffset", type: "SHORT", value: 0 },
      { name: "reserved1", type: "SHORT", value: 0 },
      { name: "reserved2", type: "SHORT", value: 0 },
      { name: "reserved3", type: "SHORT", value: 0 },
      { name: "reserved4", type: "SHORT", value: 0 },
      { name: "metricDataFormat", type: "SHORT", value: 0 },
      { name: "numberOfHMetrics", type: "USHORT", value: 0 },
    ],
    e
  );
}
var Hr = { parse: ya, make: xa };
function ba(e, t, r, n, a) {
  for (var o, s, u = new C.Parser(e, t), i = 0; i < n; i += 1) {
    i < r && ((o = u.parseUShort()), (s = u.parseShort()));
    var p = a.get(i);
    (p.advanceWidth = o), (p.leftSideBearing = s);
  }
}
function Sa(e, t, r, n, a) {
  e._hmtxTableData = {};
  for (var o, s, u = new C.Parser(t, r), i = 0; i < a; i += 1)
    i < n && ((o = u.parseUShort()), (s = u.parseShort())),
      (e._hmtxTableData[i] = { advanceWidth: o, leftSideBearing: s });
}
function Ea(e, t, r, n, a, o, s) {
  s.lowMemory ? Sa(e, t, r, n, a) : ba(t, r, n, a, o);
}
function Ca(e) {
  for (var t = new b.Table("hmtx", []), r = 0; r < e.length; r += 1) {
    var n = e.get(r),
      a = n.advanceWidth || 0,
      o = n.leftSideBearing || 0;
    t.fields.push({ name: "advanceWidth_" + r, type: "USHORT", value: a }),
      t.fields.push({ name: "leftSideBearing_" + r, type: "SHORT", value: o });
  }
  return t;
}
var zr = { parse: Ea, make: Ca };
function Ta(e) {
  for (
    var t = new b.Table("ltag", [
        { name: "version", type: "ULONG", value: 1 },
        { name: "flags", type: "ULONG", value: 0 },
        { name: "numTags", type: "ULONG", value: e.length },
      ]),
      r = "",
      n = 12 + e.length * 4,
      a = 0;
    a < e.length;
    ++a
  ) {
    var o = r.indexOf(e[a]);
    o < 0 && ((o = r.length), (r += e[a])),
      t.fields.push({ name: "offset " + a, type: "USHORT", value: n + o }),
      t.fields.push({
        name: "length " + a,
        type: "USHORT",
        value: e[a].length,
      });
  }
  return t.fields.push({ name: "stringPool", type: "CHARARRAY", value: r }), t;
}
function ka(e, t) {
  var r = new C.Parser(e, t),
    n = r.parseULong();
  k.argument(n === 1, "Unsupported ltag table version."), r.skip("uLong", 1);
  for (var a = r.parseULong(), o = [], s = 0; s < a; s++) {
    for (
      var u = "", i = t + r.parseUShort(), p = r.parseUShort(), l = i;
      l < i + p;
      ++l
    )
      u += String.fromCharCode(e.getInt8(l));
    o.push(u);
  }
  return o;
}
var Wr = { make: Ta, parse: ka };
function Ua(e, t) {
  var r = {},
    n = new C.Parser(e, t);
  return (
    (r.version = n.parseVersion()),
    (r.numGlyphs = n.parseUShort()),
    r.version === 1 &&
      ((r.maxPoints = n.parseUShort()),
      (r.maxContours = n.parseUShort()),
      (r.maxCompositePoints = n.parseUShort()),
      (r.maxCompositeContours = n.parseUShort()),
      (r.maxZones = n.parseUShort()),
      (r.maxTwilightPoints = n.parseUShort()),
      (r.maxStorage = n.parseUShort()),
      (r.maxFunctionDefs = n.parseUShort()),
      (r.maxInstructionDefs = n.parseUShort()),
      (r.maxStackElements = n.parseUShort()),
      (r.maxSizeOfInstructions = n.parseUShort()),
      (r.maxComponentElements = n.parseUShort()),
      (r.maxComponentDepth = n.parseUShort())),
    r
  );
}
function Da(e) {
  return new b.Table("maxp", [
    { name: "version", type: "FIXED", value: 20480 },
    { name: "numGlyphs", type: "USHORT", value: e },
  ]);
}
var _r = { parse: Ua, make: Da },
  qr = [
    "copyright",
    "fontFamily",
    "fontSubfamily",
    "uniqueID",
    "fullName",
    "version",
    "postScriptName",
    "trademark",
    "manufacturer",
    "designer",
    "description",
    "manufacturerURL",
    "designerURL",
    "license",
    "licenseURL",
    "reserved",
    "preferredFamily",
    "preferredSubfamily",
    "compatibleFullName",
    "sampleText",
    "postScriptFindFontName",
    "wwsFamily",
    "wwsSubfamily",
  ],
  Xr = {
    0: "en",
    1: "fr",
    2: "de",
    3: "it",
    4: "nl",
    5: "sv",
    6: "es",
    7: "da",
    8: "pt",
    9: "no",
    10: "he",
    11: "ja",
    12: "ar",
    13: "fi",
    14: "el",
    15: "is",
    16: "mt",
    17: "tr",
    18: "hr",
    19: "zh-Hant",
    20: "ur",
    21: "hi",
    22: "th",
    23: "ko",
    24: "lt",
    25: "pl",
    26: "hu",
    27: "es",
    28: "lv",
    29: "se",
    30: "fo",
    31: "fa",
    32: "ru",
    33: "zh",
    34: "nl-BE",
    35: "ga",
    36: "sq",
    37: "ro",
    38: "cz",
    39: "sk",
    40: "si",
    41: "yi",
    42: "sr",
    43: "mk",
    44: "bg",
    45: "uk",
    46: "be",
    47: "uz",
    48: "kk",
    49: "az-Cyrl",
    50: "az-Arab",
    51: "hy",
    52: "ka",
    53: "mo",
    54: "ky",
    55: "tg",
    56: "tk",
    57: "mn-CN",
    58: "mn",
    59: "ps",
    60: "ks",
    61: "ku",
    62: "sd",
    63: "bo",
    64: "ne",
    65: "sa",
    66: "mr",
    67: "bn",
    68: "as",
    69: "gu",
    70: "pa",
    71: "or",
    72: "ml",
    73: "kn",
    74: "ta",
    75: "te",
    76: "si",
    77: "my",
    78: "km",
    79: "lo",
    80: "vi",
    81: "id",
    82: "tl",
    83: "ms",
    84: "ms-Arab",
    85: "am",
    86: "ti",
    87: "om",
    88: "so",
    89: "sw",
    90: "rw",
    91: "rn",
    92: "ny",
    93: "mg",
    94: "eo",
    128: "cy",
    129: "eu",
    130: "ca",
    131: "la",
    132: "qu",
    133: "gn",
    134: "ay",
    135: "tt",
    136: "ug",
    137: "dz",
    138: "jv",
    139: "su",
    140: "gl",
    141: "af",
    142: "br",
    143: "iu",
    144: "gd",
    145: "gv",
    146: "ga",
    147: "to",
    148: "el-polyton",
    149: "kl",
    150: "az",
    151: "nn",
  },
  Aa = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 5,
    11: 1,
    12: 4,
    13: 0,
    14: 6,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 2,
    20: 4,
    21: 9,
    22: 21,
    23: 3,
    24: 29,
    25: 29,
    26: 29,
    27: 29,
    28: 29,
    29: 0,
    30: 0,
    31: 4,
    32: 7,
    33: 25,
    34: 0,
    35: 0,
    36: 0,
    37: 0,
    38: 29,
    39: 29,
    40: 0,
    41: 5,
    42: 7,
    43: 7,
    44: 7,
    45: 7,
    46: 7,
    47: 7,
    48: 7,
    49: 7,
    50: 4,
    51: 24,
    52: 23,
    53: 7,
    54: 7,
    55: 7,
    56: 7,
    57: 27,
    58: 7,
    59: 4,
    60: 4,
    61: 4,
    62: 4,
    63: 26,
    64: 9,
    65: 9,
    66: 9,
    67: 13,
    68: 13,
    69: 11,
    70: 10,
    71: 12,
    72: 17,
    73: 16,
    74: 14,
    75: 15,
    76: 18,
    77: 19,
    78: 20,
    79: 22,
    80: 30,
    81: 0,
    82: 0,
    83: 0,
    84: 4,
    85: 28,
    86: 28,
    87: 28,
    88: 0,
    89: 0,
    90: 0,
    91: 0,
    92: 0,
    93: 0,
    94: 0,
    128: 0,
    129: 0,
    130: 0,
    131: 0,
    132: 0,
    133: 0,
    134: 0,
    135: 7,
    136: 4,
    137: 26,
    138: 0,
    139: 0,
    140: 0,
    141: 0,
    142: 0,
    143: 28,
    144: 0,
    145: 0,
    146: 0,
    147: 0,
    148: 6,
    149: 0,
    150: 0,
    151: 0,
  },
  Vr = {
    1078: "af",
    1052: "sq",
    1156: "gsw",
    1118: "am",
    5121: "ar-DZ",
    15361: "ar-BH",
    3073: "ar",
    2049: "ar-IQ",
    11265: "ar-JO",
    13313: "ar-KW",
    12289: "ar-LB",
    4097: "ar-LY",
    6145: "ary",
    8193: "ar-OM",
    16385: "ar-QA",
    1025: "ar-SA",
    10241: "ar-SY",
    7169: "aeb",
    14337: "ar-AE",
    9217: "ar-YE",
    1067: "hy",
    1101: "as",
    2092: "az-Cyrl",
    1068: "az",
    1133: "ba",
    1069: "eu",
    1059: "be",
    2117: "bn",
    1093: "bn-IN",
    8218: "bs-Cyrl",
    5146: "bs",
    1150: "br",
    1026: "bg",
    1027: "ca",
    3076: "zh-HK",
    5124: "zh-MO",
    2052: "zh",
    4100: "zh-SG",
    1028: "zh-TW",
    1155: "co",
    1050: "hr",
    4122: "hr-BA",
    1029: "cs",
    1030: "da",
    1164: "prs",
    1125: "dv",
    2067: "nl-BE",
    1043: "nl",
    3081: "en-AU",
    10249: "en-BZ",
    4105: "en-CA",
    9225: "en-029",
    16393: "en-IN",
    6153: "en-IE",
    8201: "en-JM",
    17417: "en-MY",
    5129: "en-NZ",
    13321: "en-PH",
    18441: "en-SG",
    7177: "en-ZA",
    11273: "en-TT",
    2057: "en-GB",
    1033: "en",
    12297: "en-ZW",
    1061: "et",
    1080: "fo",
    1124: "fil",
    1035: "fi",
    2060: "fr-BE",
    3084: "fr-CA",
    1036: "fr",
    5132: "fr-LU",
    6156: "fr-MC",
    4108: "fr-CH",
    1122: "fy",
    1110: "gl",
    1079: "ka",
    3079: "de-AT",
    1031: "de",
    5127: "de-LI",
    4103: "de-LU",
    2055: "de-CH",
    1032: "el",
    1135: "kl",
    1095: "gu",
    1128: "ha",
    1037: "he",
    1081: "hi",
    1038: "hu",
    1039: "is",
    1136: "ig",
    1057: "id",
    1117: "iu",
    2141: "iu-Latn",
    2108: "ga",
    1076: "xh",
    1077: "zu",
    1040: "it",
    2064: "it-CH",
    1041: "ja",
    1099: "kn",
    1087: "kk",
    1107: "km",
    1158: "quc",
    1159: "rw",
    1089: "sw",
    1111: "kok",
    1042: "ko",
    1088: "ky",
    1108: "lo",
    1062: "lv",
    1063: "lt",
    2094: "dsb",
    1134: "lb",
    1071: "mk",
    2110: "ms-BN",
    1086: "ms",
    1100: "ml",
    1082: "mt",
    1153: "mi",
    1146: "arn",
    1102: "mr",
    1148: "moh",
    1104: "mn",
    2128: "mn-CN",
    1121: "ne",
    1044: "nb",
    2068: "nn",
    1154: "oc",
    1096: "or",
    1123: "ps",
    1045: "pl",
    1046: "pt",
    2070: "pt-PT",
    1094: "pa",
    1131: "qu-BO",
    2155: "qu-EC",
    3179: "qu",
    1048: "ro",
    1047: "rm",
    1049: "ru",
    9275: "smn",
    4155: "smj-NO",
    5179: "smj",
    3131: "se-FI",
    1083: "se",
    2107: "se-SE",
    8251: "sms",
    6203: "sma-NO",
    7227: "sms",
    1103: "sa",
    7194: "sr-Cyrl-BA",
    3098: "sr",
    6170: "sr-Latn-BA",
    2074: "sr-Latn",
    1132: "nso",
    1074: "tn",
    1115: "si",
    1051: "sk",
    1060: "sl",
    11274: "es-AR",
    16394: "es-BO",
    13322: "es-CL",
    9226: "es-CO",
    5130: "es-CR",
    7178: "es-DO",
    12298: "es-EC",
    17418: "es-SV",
    4106: "es-GT",
    18442: "es-HN",
    2058: "es-MX",
    19466: "es-NI",
    6154: "es-PA",
    15370: "es-PY",
    10250: "es-PE",
    20490: "es-PR",
    3082: "es",
    1034: "es",
    21514: "es-US",
    14346: "es-UY",
    8202: "es-VE",
    2077: "sv-FI",
    1053: "sv",
    1114: "syr",
    1064: "tg",
    2143: "tzm",
    1097: "ta",
    1092: "tt",
    1098: "te",
    1054: "th",
    1105: "bo",
    1055: "tr",
    1090: "tk",
    1152: "ug",
    1058: "uk",
    1070: "hsb",
    1056: "ur",
    2115: "uz-Cyrl",
    1091: "uz",
    1066: "vi",
    1106: "cy",
    1160: "wo",
    1157: "sah",
    1144: "ii",
    1130: "yo",
  };
function Oa(e, t, r) {
  switch (e) {
    case 0:
      if (t === 65535) return "und";
      if (r) return r[t];
      break;
    case 1:
      return Xr[t];
    case 3:
      return Vr[t];
  }
}
var gt = "utf-16",
  Ba = {
    0: "macintosh",
    1: "x-mac-japanese",
    2: "x-mac-chinesetrad",
    3: "x-mac-korean",
    6: "x-mac-greek",
    7: "x-mac-cyrillic",
    9: "x-mac-devanagai",
    10: "x-mac-gurmukhi",
    11: "x-mac-gujarati",
    12: "x-mac-oriya",
    13: "x-mac-bengali",
    14: "x-mac-tamil",
    15: "x-mac-telugu",
    16: "x-mac-kannada",
    17: "x-mac-malayalam",
    18: "x-mac-sinhalese",
    19: "x-mac-burmese",
    20: "x-mac-khmer",
    21: "x-mac-thai",
    22: "x-mac-lao",
    23: "x-mac-georgian",
    24: "x-mac-armenian",
    25: "x-mac-chinesesimp",
    26: "x-mac-tibetan",
    27: "x-mac-mongolian",
    28: "x-mac-ethiopic",
    29: "x-mac-ce",
    30: "x-mac-vietnamese",
    31: "x-mac-extarabic",
  },
  Ra = {
    15: "x-mac-icelandic",
    17: "x-mac-turkish",
    18: "x-mac-croatian",
    24: "x-mac-ce",
    25: "x-mac-ce",
    26: "x-mac-ce",
    27: "x-mac-ce",
    28: "x-mac-ce",
    30: "x-mac-icelandic",
    37: "x-mac-romanian",
    38: "x-mac-ce",
    39: "x-mac-ce",
    40: "x-mac-ce",
    143: "x-mac-inuit",
    146: "x-mac-gaelic",
  };
function Yr(e, t, r) {
  switch (e) {
    case 0:
      return gt;
    case 1:
      return Ra[r] || Ba[t];
    case 3:
      if (t === 1 || t === 10) return gt;
      break;
  }
}
function wa(e, t, r) {
  for (
    var n = {},
      a = new C.Parser(e, t),
      o = a.parseUShort(),
      s = a.parseUShort(),
      u = a.offset + a.parseUShort(),
      i = 0;
    i < s;
    i++
  ) {
    var p = a.parseUShort(),
      l = a.parseUShort(),
      h = a.parseUShort(),
      c = a.parseUShort(),
      f = qr[c] || c,
      v = a.parseUShort(),
      x = a.parseUShort(),
      m = Oa(p, h, r),
      y = Yr(p, l, h);
    if (y !== void 0 && m !== void 0) {
      var U = void 0;
      if (
        (y === gt
          ? (U = Te.UTF16(e, u + x, v))
          : (U = Te.MACSTRING(e, u + x, v, y)),
        U)
      ) {
        var S = n[f];
        S === void 0 && (S = n[f] = {}), (S[m] = U);
      }
    }
  }
  return o === 1 && a.parseUShort(), n;
}
function nt(e) {
  var t = {};
  for (var r in e) t[e[r]] = parseInt(r);
  return t;
}
function Vt(e, t, r, n, a, o) {
  return new b.Record("NameRecord", [
    { name: "platformID", type: "USHORT", value: e },
    { name: "encodingID", type: "USHORT", value: t },
    { name: "languageID", type: "USHORT", value: r },
    { name: "nameID", type: "USHORT", value: n },
    { name: "length", type: "USHORT", value: a },
    { name: "offset", type: "USHORT", value: o },
  ]);
}
function Fa(e, t) {
  var r = e.length,
    n = t.length - r + 1;
  e: for (var a = 0; a < n; a++)
    for (; a < n; a++) {
      for (var o = 0; o < r; o++) if (t[a + o] !== e[o]) continue e;
      return a;
    }
  return -1;
}
function Yt(e, t) {
  var r = Fa(e, t);
  if (r < 0) {
    r = t.length;
    for (var n = 0, a = e.length; n < a; ++n) t.push(e[n]);
  }
  return r;
}
function La(e, t) {
  var r,
    n = [],
    a = {},
    o = nt(qr);
  for (var s in e) {
    var u = o[s];
    if ((u === void 0 && (u = s), (r = parseInt(u)), isNaN(r)))
      throw new Error(
        'Name table entry "' +
          s +
          '" does not exist, see nameTableNames for complete list.'
      );
    (a[r] = e[s]), n.push(r);
  }
  for (var i = nt(Xr), p = nt(Vr), l = [], h = [], c = 0; c < n.length; c++) {
    r = n[c];
    var f = a[r];
    for (var v in f) {
      var x = f[v],
        m = 1,
        y = i[v],
        U = Aa[y],
        S = Yr(m, U, y),
        B = g.MACSTRING(x, S);
      B === void 0 &&
        ((m = 0),
        (y = t.indexOf(v)),
        y < 0 && ((y = t.length), t.push(v)),
        (U = 4),
        (B = g.UTF16(x)));
      var A = Yt(B, h);
      l.push(Vt(m, U, y, r, B.length, A));
      var w = p[v];
      if (w !== void 0) {
        var O = g.UTF16(x),
          T = Yt(O, h);
        l.push(Vt(3, 1, w, r, O.length, T));
      }
    }
  }
  l.sort(function (j, J) {
    return (
      j.platformID - J.platformID ||
      j.encodingID - J.encodingID ||
      j.languageID - J.languageID ||
      j.nameID - J.nameID
    );
  });
  for (
    var P = new b.Table("name", [
        { name: "format", type: "USHORT", value: 0 },
        { name: "count", type: "USHORT", value: l.length },
        { name: "stringOffset", type: "USHORT", value: 6 + l.length * 12 },
      ]),
      Y = 0;
    Y < l.length;
    Y++
  )
    P.fields.push({ name: "record_" + Y, type: "RECORD", value: l[Y] });
  return P.fields.push({ name: "strings", type: "LITERAL", value: h }), P;
}
var jr = { parse: wa, make: La },
  mt = [
    { begin: 0, end: 127 },
    { begin: 128, end: 255 },
    { begin: 256, end: 383 },
    { begin: 384, end: 591 },
    { begin: 592, end: 687 },
    { begin: 688, end: 767 },
    { begin: 768, end: 879 },
    { begin: 880, end: 1023 },
    { begin: 11392, end: 11519 },
    { begin: 1024, end: 1279 },
    { begin: 1328, end: 1423 },
    { begin: 1424, end: 1535 },
    { begin: 42240, end: 42559 },
    { begin: 1536, end: 1791 },
    { begin: 1984, end: 2047 },
    { begin: 2304, end: 2431 },
    { begin: 2432, end: 2559 },
    { begin: 2560, end: 2687 },
    { begin: 2688, end: 2815 },
    { begin: 2816, end: 2943 },
    { begin: 2944, end: 3071 },
    { begin: 3072, end: 3199 },
    { begin: 3200, end: 3327 },
    { begin: 3328, end: 3455 },
    { begin: 3584, end: 3711 },
    { begin: 3712, end: 3839 },
    { begin: 4256, end: 4351 },
    { begin: 6912, end: 7039 },
    { begin: 4352, end: 4607 },
    { begin: 7680, end: 7935 },
    { begin: 7936, end: 8191 },
    { begin: 8192, end: 8303 },
    { begin: 8304, end: 8351 },
    { begin: 8352, end: 8399 },
    { begin: 8400, end: 8447 },
    { begin: 8448, end: 8527 },
    { begin: 8528, end: 8591 },
    { begin: 8592, end: 8703 },
    { begin: 8704, end: 8959 },
    { begin: 8960, end: 9215 },
    { begin: 9216, end: 9279 },
    { begin: 9280, end: 9311 },
    { begin: 9312, end: 9471 },
    { begin: 9472, end: 9599 },
    { begin: 9600, end: 9631 },
    { begin: 9632, end: 9727 },
    { begin: 9728, end: 9983 },
    { begin: 9984, end: 10175 },
    { begin: 12288, end: 12351 },
    { begin: 12352, end: 12447 },
    { begin: 12448, end: 12543 },
    { begin: 12544, end: 12591 },
    { begin: 12592, end: 12687 },
    { begin: 43072, end: 43135 },
    { begin: 12800, end: 13055 },
    { begin: 13056, end: 13311 },
    { begin: 44032, end: 55215 },
    { begin: 55296, end: 57343 },
    { begin: 67840, end: 67871 },
    { begin: 19968, end: 40959 },
    { begin: 57344, end: 63743 },
    { begin: 12736, end: 12783 },
    { begin: 64256, end: 64335 },
    { begin: 64336, end: 65023 },
    { begin: 65056, end: 65071 },
    { begin: 65040, end: 65055 },
    { begin: 65104, end: 65135 },
    { begin: 65136, end: 65279 },
    { begin: 65280, end: 65519 },
    { begin: 65520, end: 65535 },
    { begin: 3840, end: 4095 },
    { begin: 1792, end: 1871 },
    { begin: 1920, end: 1983 },
    { begin: 3456, end: 3583 },
    { begin: 4096, end: 4255 },
    { begin: 4608, end: 4991 },
    { begin: 5024, end: 5119 },
    { begin: 5120, end: 5759 },
    { begin: 5760, end: 5791 },
    { begin: 5792, end: 5887 },
    { begin: 6016, end: 6143 },
    { begin: 6144, end: 6319 },
    { begin: 10240, end: 10495 },
    { begin: 40960, end: 42127 },
    { begin: 5888, end: 5919 },
    { begin: 66304, end: 66351 },
    { begin: 66352, end: 66383 },
    { begin: 66560, end: 66639 },
    { begin: 118784, end: 119039 },
    { begin: 119808, end: 120831 },
    { begin: 1044480, end: 1048573 },
    { begin: 65024, end: 65039 },
    { begin: 917504, end: 917631 },
    { begin: 6400, end: 6479 },
    { begin: 6480, end: 6527 },
    { begin: 6528, end: 6623 },
    { begin: 6656, end: 6687 },
    { begin: 11264, end: 11359 },
    { begin: 11568, end: 11647 },
    { begin: 19904, end: 19967 },
    { begin: 43008, end: 43055 },
    { begin: 65536, end: 65663 },
    { begin: 65856, end: 65935 },
    { begin: 66432, end: 66463 },
    { begin: 66464, end: 66527 },
    { begin: 66640, end: 66687 },
    { begin: 66688, end: 66735 },
    { begin: 67584, end: 67647 },
    { begin: 68096, end: 68191 },
    { begin: 119552, end: 119647 },
    { begin: 73728, end: 74751 },
    { begin: 119648, end: 119679 },
    { begin: 7040, end: 7103 },
    { begin: 7168, end: 7247 },
    { begin: 7248, end: 7295 },
    { begin: 43136, end: 43231 },
    { begin: 43264, end: 43311 },
    { begin: 43312, end: 43359 },
    { begin: 43520, end: 43615 },
    { begin: 65936, end: 65999 },
    { begin: 66e3, end: 66047 },
    { begin: 66208, end: 66271 },
    { begin: 127024, end: 127135 },
  ];
function Ia(e) {
  for (var t = 0; t < mt.length; t += 1) {
    var r = mt[t];
    if (e >= r.begin && e < r.end) return t;
  }
  return -1;
}
function Ma(e, t) {
  var r = {},
    n = new C.Parser(e, t);
  (r.version = n.parseUShort()),
    (r.xAvgCharWidth = n.parseShort()),
    (r.usWeightClass = n.parseUShort()),
    (r.usWidthClass = n.parseUShort()),
    (r.fsType = n.parseUShort()),
    (r.ySubscriptXSize = n.parseShort()),
    (r.ySubscriptYSize = n.parseShort()),
    (r.ySubscriptXOffset = n.parseShort()),
    (r.ySubscriptYOffset = n.parseShort()),
    (r.ySuperscriptXSize = n.parseShort()),
    (r.ySuperscriptYSize = n.parseShort()),
    (r.ySuperscriptXOffset = n.parseShort()),
    (r.ySuperscriptYOffset = n.parseShort()),
    (r.yStrikeoutSize = n.parseShort()),
    (r.yStrikeoutPosition = n.parseShort()),
    (r.sFamilyClass = n.parseShort()),
    (r.panose = []);
  for (var a = 0; a < 10; a++) r.panose[a] = n.parseByte();
  return (
    (r.ulUnicodeRange1 = n.parseULong()),
    (r.ulUnicodeRange2 = n.parseULong()),
    (r.ulUnicodeRange3 = n.parseULong()),
    (r.ulUnicodeRange4 = n.parseULong()),
    (r.achVendID = String.fromCharCode(
      n.parseByte(),
      n.parseByte(),
      n.parseByte(),
      n.parseByte()
    )),
    (r.fsSelection = n.parseUShort()),
    (r.usFirstCharIndex = n.parseUShort()),
    (r.usLastCharIndex = n.parseUShort()),
    (r.sTypoAscender = n.parseShort()),
    (r.sTypoDescender = n.parseShort()),
    (r.sTypoLineGap = n.parseShort()),
    (r.usWinAscent = n.parseUShort()),
    (r.usWinDescent = n.parseUShort()),
    r.version >= 1 &&
      ((r.ulCodePageRange1 = n.parseULong()),
      (r.ulCodePageRange2 = n.parseULong())),
    r.version >= 2 &&
      ((r.sxHeight = n.parseShort()),
      (r.sCapHeight = n.parseShort()),
      (r.usDefaultChar = n.parseUShort()),
      (r.usBreakChar = n.parseUShort()),
      (r.usMaxContent = n.parseUShort())),
    r
  );
}
function Ga(e) {
  return new b.Table(
    "OS/2",
    [
      { name: "version", type: "USHORT", value: 3 },
      { name: "xAvgCharWidth", type: "SHORT", value: 0 },
      { name: "usWeightClass", type: "USHORT", value: 0 },
      { name: "usWidthClass", type: "USHORT", value: 0 },
      { name: "fsType", type: "USHORT", value: 0 },
      { name: "ySubscriptXSize", type: "SHORT", value: 650 },
      { name: "ySubscriptYSize", type: "SHORT", value: 699 },
      { name: "ySubscriptXOffset", type: "SHORT", value: 0 },
      { name: "ySubscriptYOffset", type: "SHORT", value: 140 },
      { name: "ySuperscriptXSize", type: "SHORT", value: 650 },
      { name: "ySuperscriptYSize", type: "SHORT", value: 699 },
      { name: "ySuperscriptXOffset", type: "SHORT", value: 0 },
      { name: "ySuperscriptYOffset", type: "SHORT", value: 479 },
      { name: "yStrikeoutSize", type: "SHORT", value: 49 },
      { name: "yStrikeoutPosition", type: "SHORT", value: 258 },
      { name: "sFamilyClass", type: "SHORT", value: 0 },
      { name: "bFamilyType", type: "BYTE", value: 0 },
      { name: "bSerifStyle", type: "BYTE", value: 0 },
      { name: "bWeight", type: "BYTE", value: 0 },
      { name: "bProportion", type: "BYTE", value: 0 },
      { name: "bContrast", type: "BYTE", value: 0 },
      { name: "bStrokeVariation", type: "BYTE", value: 0 },
      { name: "bArmStyle", type: "BYTE", value: 0 },
      { name: "bLetterform", type: "BYTE", value: 0 },
      { name: "bMidline", type: "BYTE", value: 0 },
      { name: "bXHeight", type: "BYTE", value: 0 },
      { name: "ulUnicodeRange1", type: "ULONG", value: 0 },
      { name: "ulUnicodeRange2", type: "ULONG", value: 0 },
      { name: "ulUnicodeRange3", type: "ULONG", value: 0 },
      { name: "ulUnicodeRange4", type: "ULONG", value: 0 },
      { name: "achVendID", type: "CHARARRAY", value: "XXXX" },
      { name: "fsSelection", type: "USHORT", value: 0 },
      { name: "usFirstCharIndex", type: "USHORT", value: 0 },
      { name: "usLastCharIndex", type: "USHORT", value: 0 },
      { name: "sTypoAscender", type: "SHORT", value: 0 },
      { name: "sTypoDescender", type: "SHORT", value: 0 },
      { name: "sTypoLineGap", type: "SHORT", value: 0 },
      { name: "usWinAscent", type: "USHORT", value: 0 },
      { name: "usWinDescent", type: "USHORT", value: 0 },
      { name: "ulCodePageRange1", type: "ULONG", value: 0 },
      { name: "ulCodePageRange2", type: "ULONG", value: 0 },
      { name: "sxHeight", type: "SHORT", value: 0 },
      { name: "sCapHeight", type: "SHORT", value: 0 },
      { name: "usDefaultChar", type: "USHORT", value: 0 },
      { name: "usBreakChar", type: "USHORT", value: 0 },
      { name: "usMaxContext", type: "USHORT", value: 0 },
    ],
    e
  );
}
var yt = { parse: Ma, make: Ga, unicodeRanges: mt, getUnicodeRange: Ia };
function Pa(e, t) {
  var r = {},
    n = new C.Parser(e, t);
  switch (
    ((r.version = n.parseVersion()),
    (r.italicAngle = n.parseFixed()),
    (r.underlinePosition = n.parseShort()),
    (r.underlineThickness = n.parseShort()),
    (r.isFixedPitch = n.parseULong()),
    (r.minMemType42 = n.parseULong()),
    (r.maxMemType42 = n.parseULong()),
    (r.minMemType1 = n.parseULong()),
    (r.maxMemType1 = n.parseULong()),
    r.version)
  ) {
    case 1:
      r.names = xe.slice();
      break;
    case 2:
      (r.numberOfGlyphs = n.parseUShort()),
        (r.glyphNameIndex = new Array(r.numberOfGlyphs));
      for (var a = 0; a < r.numberOfGlyphs; a++)
        r.glyphNameIndex[a] = n.parseUShort();
      r.names = [];
      for (var o = 0; o < r.numberOfGlyphs; o++)
        if (r.glyphNameIndex[o] >= xe.length) {
          var s = n.parseChar();
          r.names.push(n.parseString(s));
        }
      break;
    case 2.5:
      (r.numberOfGlyphs = n.parseUShort()),
        (r.offset = new Array(r.numberOfGlyphs));
      for (var u = 0; u < r.numberOfGlyphs; u++) r.offset[u] = n.parseChar();
      break;
  }
  return r;
}
function Na() {
  return new b.Table("post", [
    { name: "version", type: "FIXED", value: 196608 },
    { name: "italicAngle", type: "FIXED", value: 0 },
    { name: "underlinePosition", type: "FWORD", value: 0 },
    { name: "underlineThickness", type: "FWORD", value: 0 },
    { name: "isFixedPitch", type: "ULONG", value: 0 },
    { name: "minMemType42", type: "ULONG", value: 0 },
    { name: "maxMemType42", type: "ULONG", value: 0 },
    { name: "minMemType1", type: "ULONG", value: 0 },
    { name: "maxMemType1", type: "ULONG", value: 0 },
  ]);
}
var Zr = { parse: Pa, make: Na },
  ee = new Array(9);
ee[1] = function () {
  var e = this.offset + this.relativeOffset,
    t = this.parseUShort();
  if (t === 1)
    return {
      substFormat: 1,
      coverage: this.parsePointer(d.coverage),
      deltaGlyphId: this.parseUShort(),
    };
  if (t === 2)
    return {
      substFormat: 2,
      coverage: this.parsePointer(d.coverage),
      substitute: this.parseOffset16List(),
    };
  k.assert(
    !1,
    "0x" + e.toString(16) + ": lookup type 1 format must be 1 or 2."
  );
};
ee[2] = function () {
  var e = this.parseUShort();
  return (
    k.argument(
      e === 1,
      "GSUB Multiple Substitution Subtable identifier-format must be 1"
    ),
    {
      substFormat: e,
      coverage: this.parsePointer(d.coverage),
      sequences: this.parseListOfLists(),
    }
  );
};
ee[3] = function () {
  var e = this.parseUShort();
  return (
    k.argument(
      e === 1,
      "GSUB Alternate Substitution Subtable identifier-format must be 1"
    ),
    {
      substFormat: e,
      coverage: this.parsePointer(d.coverage),
      alternateSets: this.parseListOfLists(),
    }
  );
};
ee[4] = function () {
  var e = this.parseUShort();
  return (
    k.argument(e === 1, "GSUB ligature table identifier-format must be 1"),
    {
      substFormat: e,
      coverage: this.parsePointer(d.coverage),
      ligatureSets: this.parseListOfLists(function () {
        return {
          ligGlyph: this.parseUShort(),
          components: this.parseUShortList(this.parseUShort() - 1),
        };
      }),
    }
  );
};
var Ce = { sequenceIndex: d.uShort, lookupListIndex: d.uShort };
ee[5] = function () {
  var e = this.offset + this.relativeOffset,
    t = this.parseUShort();
  if (t === 1)
    return {
      substFormat: t,
      coverage: this.parsePointer(d.coverage),
      ruleSets: this.parseListOfLists(function () {
        var a = this.parseUShort(),
          o = this.parseUShort();
        return {
          input: this.parseUShortList(a - 1),
          lookupRecords: this.parseRecordList(o, Ce),
        };
      }),
    };
  if (t === 2)
    return {
      substFormat: t,
      coverage: this.parsePointer(d.coverage),
      classDef: this.parsePointer(d.classDef),
      classSets: this.parseListOfLists(function () {
        var a = this.parseUShort(),
          o = this.parseUShort();
        return {
          classes: this.parseUShortList(a - 1),
          lookupRecords: this.parseRecordList(o, Ce),
        };
      }),
    };
  if (t === 3) {
    var r = this.parseUShort(),
      n = this.parseUShort();
    return {
      substFormat: t,
      coverages: this.parseList(r, d.pointer(d.coverage)),
      lookupRecords: this.parseRecordList(n, Ce),
    };
  }
  k.assert(
    !1,
    "0x" + e.toString(16) + ": lookup type 5 format must be 1, 2 or 3."
  );
};
ee[6] = function () {
  var e = this.offset + this.relativeOffset,
    t = this.parseUShort();
  if (t === 1)
    return {
      substFormat: 1,
      coverage: this.parsePointer(d.coverage),
      chainRuleSets: this.parseListOfLists(function () {
        return {
          backtrack: this.parseUShortList(),
          input: this.parseUShortList(this.parseShort() - 1),
          lookahead: this.parseUShortList(),
          lookupRecords: this.parseRecordList(Ce),
        };
      }),
    };
  if (t === 2)
    return {
      substFormat: 2,
      coverage: this.parsePointer(d.coverage),
      backtrackClassDef: this.parsePointer(d.classDef),
      inputClassDef: this.parsePointer(d.classDef),
      lookaheadClassDef: this.parsePointer(d.classDef),
      chainClassSet: this.parseListOfLists(function () {
        return {
          backtrack: this.parseUShortList(),
          input: this.parseUShortList(this.parseShort() - 1),
          lookahead: this.parseUShortList(),
          lookupRecords: this.parseRecordList(Ce),
        };
      }),
    };
  if (t === 3)
    return {
      substFormat: 3,
      backtrackCoverage: this.parseList(d.pointer(d.coverage)),
      inputCoverage: this.parseList(d.pointer(d.coverage)),
      lookaheadCoverage: this.parseList(d.pointer(d.coverage)),
      lookupRecords: this.parseRecordList(Ce),
    };
  k.assert(
    !1,
    "0x" + e.toString(16) + ": lookup type 6 format must be 1, 2 or 3."
  );
};
ee[7] = function () {
  var e = this.parseUShort();
  k.argument(
    e === 1,
    "GSUB Extension Substitution subtable identifier-format must be 1"
  );
  var t = this.parseUShort(),
    r = new d(this.data, this.offset + this.parseULong());
  return { substFormat: 1, lookupType: t, extension: ee[t].call(r) };
};
ee[8] = function () {
  var e = this.parseUShort();
  return (
    k.argument(
      e === 1,
      "GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"
    ),
    {
      substFormat: e,
      coverage: this.parsePointer(d.coverage),
      backtrackCoverage: this.parseList(d.pointer(d.coverage)),
      lookaheadCoverage: this.parseList(d.pointer(d.coverage)),
      substitutes: this.parseUShortList(),
    }
  );
};
function Ha(e, t) {
  t = t || 0;
  var r = new d(e, t),
    n = r.parseVersion(1);
  return (
    k.argument(n === 1 || n === 1.1, "Unsupported GSUB table version."),
    n === 1
      ? {
          version: n,
          scripts: r.parseScriptList(),
          features: r.parseFeatureList(),
          lookups: r.parseLookupList(ee),
        }
      : {
          version: n,
          scripts: r.parseScriptList(),
          features: r.parseFeatureList(),
          lookups: r.parseLookupList(ee),
          variations: r.parseFeatureVariationsList(),
        }
  );
}
var ke = new Array(9);
ke[1] = function (e) {
  return e.substFormat === 1
    ? new b.Table("substitutionTable", [
        { name: "substFormat", type: "USHORT", value: 1 },
        { name: "coverage", type: "TABLE", value: new b.Coverage(e.coverage) },
        { name: "deltaGlyphID", type: "USHORT", value: e.deltaGlyphId },
      ])
    : new b.Table(
        "substitutionTable",
        [
          { name: "substFormat", type: "USHORT", value: 2 },
          {
            name: "coverage",
            type: "TABLE",
            value: new b.Coverage(e.coverage),
          },
        ].concat(b.ushortList("substitute", e.substitute))
      );
};
ke[2] = function (e) {
  return (
    k.assert(e.substFormat === 1, "Lookup type 2 substFormat must be 1."),
    new b.Table(
      "substitutionTable",
      [
        { name: "substFormat", type: "USHORT", value: 1 },
        { name: "coverage", type: "TABLE", value: new b.Coverage(e.coverage) },
      ].concat(
        b.tableList("seqSet", e.sequences, function (t) {
          return new b.Table("sequenceSetTable", b.ushortList("sequence", t));
        })
      )
    )
  );
};
ke[3] = function (e) {
  return (
    k.assert(e.substFormat === 1, "Lookup type 3 substFormat must be 1."),
    new b.Table(
      "substitutionTable",
      [
        { name: "substFormat", type: "USHORT", value: 1 },
        { name: "coverage", type: "TABLE", value: new b.Coverage(e.coverage) },
      ].concat(
        b.tableList("altSet", e.alternateSets, function (t) {
          return new b.Table("alternateSetTable", b.ushortList("alternate", t));
        })
      )
    )
  );
};
ke[4] = function (e) {
  return (
    k.assert(e.substFormat === 1, "Lookup type 4 substFormat must be 1."),
    new b.Table(
      "substitutionTable",
      [
        { name: "substFormat", type: "USHORT", value: 1 },
        { name: "coverage", type: "TABLE", value: new b.Coverage(e.coverage) },
      ].concat(
        b.tableList("ligSet", e.ligatureSets, function (t) {
          return new b.Table(
            "ligatureSetTable",
            b.tableList("ligature", t, function (r) {
              return new b.Table(
                "ligatureTable",
                [
                  { name: "ligGlyph", type: "USHORT", value: r.ligGlyph },
                ].concat(
                  b.ushortList(
                    "component",
                    r.components,
                    r.components.length + 1
                  )
                )
              );
            })
          );
        })
      )
    )
  );
};
ke[6] = function (e) {
  if (e.substFormat === 1) {
    var t = new b.Table(
      "chainContextTable",
      [
        { name: "substFormat", type: "USHORT", value: e.substFormat },
        { name: "coverage", type: "TABLE", value: new b.Coverage(e.coverage) },
      ].concat(
        b.tableList("chainRuleSet", e.chainRuleSets, function (a) {
          return new b.Table(
            "chainRuleSetTable",
            b.tableList("chainRule", a, function (o) {
              var s = b
                .ushortList("backtrackGlyph", o.backtrack, o.backtrack.length)
                .concat(b.ushortList("inputGlyph", o.input, o.input.length + 1))
                .concat(
                  b.ushortList(
                    "lookaheadGlyph",
                    o.lookahead,
                    o.lookahead.length
                  )
                )
                .concat(
                  b.ushortList("substitution", [], o.lookupRecords.length)
                );
              return (
                o.lookupRecords.forEach(function (u, i) {
                  s = s
                    .concat({
                      name: "sequenceIndex" + i,
                      type: "USHORT",
                      value: u.sequenceIndex,
                    })
                    .concat({
                      name: "lookupListIndex" + i,
                      type: "USHORT",
                      value: u.lookupListIndex,
                    });
                }),
                new b.Table("chainRuleTable", s)
              );
            })
          );
        })
      )
    );
    return t;
  } else if (e.substFormat === 2)
    k.assert(!1, "lookup type 6 format 2 is not yet supported.");
  else if (e.substFormat === 3) {
    var r = [{ name: "substFormat", type: "USHORT", value: e.substFormat }];
    r.push({
      name: "backtrackGlyphCount",
      type: "USHORT",
      value: e.backtrackCoverage.length,
    }),
      e.backtrackCoverage.forEach(function (a, o) {
        r.push({
          name: "backtrackCoverage" + o,
          type: "TABLE",
          value: new b.Coverage(a),
        });
      }),
      r.push({
        name: "inputGlyphCount",
        type: "USHORT",
        value: e.inputCoverage.length,
      }),
      e.inputCoverage.forEach(function (a, o) {
        r.push({
          name: "inputCoverage" + o,
          type: "TABLE",
          value: new b.Coverage(a),
        });
      }),
      r.push({
        name: "lookaheadGlyphCount",
        type: "USHORT",
        value: e.lookaheadCoverage.length,
      }),
      e.lookaheadCoverage.forEach(function (a, o) {
        r.push({
          name: "lookaheadCoverage" + o,
          type: "TABLE",
          value: new b.Coverage(a),
        });
      }),
      r.push({
        name: "substitutionCount",
        type: "USHORT",
        value: e.lookupRecords.length,
      }),
      e.lookupRecords.forEach(function (a, o) {
        r = r
          .concat({
            name: "sequenceIndex" + o,
            type: "USHORT",
            value: a.sequenceIndex,
          })
          .concat({
            name: "lookupListIndex" + o,
            type: "USHORT",
            value: a.lookupListIndex,
          });
      });
    var n = new b.Table("chainContextTable", r);
    return n;
  }
  k.assert(!1, "lookup type 6 format must be 1, 2 or 3.");
};
function za(e) {
  return new b.Table("GSUB", [
    { name: "version", type: "ULONG", value: 65536 },
    { name: "scripts", type: "TABLE", value: new b.ScriptList(e.scripts) },
    { name: "features", type: "TABLE", value: new b.FeatureList(e.features) },
    { name: "lookups", type: "TABLE", value: new b.LookupList(e.lookups, ke) },
  ]);
}
var Qr = { parse: Ha, make: za };
function Wa(e, t) {
  var r = new C.Parser(e, t),
    n = r.parseULong();
  k.argument(n === 1, "Unsupported META table version."),
    r.parseULong(),
    r.parseULong();
  for (var a = r.parseULong(), o = {}, s = 0; s < a; s++) {
    var u = r.parseTag(),
      i = r.parseULong(),
      p = r.parseULong(),
      l = Te.UTF8(e, t + i, p);
    o[u] = l;
  }
  return o;
}
function _a(e) {
  var t = Object.keys(e).length,
    r = "",
    n = 16 + t * 12,
    a = new b.Table("meta", [
      { name: "version", type: "ULONG", value: 1 },
      { name: "flags", type: "ULONG", value: 0 },
      { name: "offset", type: "ULONG", value: n },
      { name: "numTags", type: "ULONG", value: t },
    ]);
  for (var o in e) {
    var s = r.length;
    (r += e[o]),
      a.fields.push({ name: "tag " + o, type: "TAG", value: o }),
      a.fields.push({ name: "offset " + o, type: "ULONG", value: n + s }),
      a.fields.push({ name: "length " + o, type: "ULONG", value: e[o].length });
  }
  return a.fields.push({ name: "stringPool", type: "CHARARRAY", value: r }), a;
}
var Kr = { parse: Wa, make: _a };
function jt(e) {
  return (Math.log(e) / Math.log(2)) | 0;
}
function Dt(e) {
  for (; e.length % 4 !== 0; ) e.push(0);
  for (var t = 0, r = 0; r < e.length; r += 4)
    t += (e[r] << 24) + (e[r + 1] << 16) + (e[r + 2] << 8) + e[r + 3];
  return (t %= Math.pow(2, 32)), t;
}
function Zt(e, t, r, n) {
  return new b.Record("Table Record", [
    { name: "tag", type: "TAG", value: e !== void 0 ? e : "" },
    { name: "checkSum", type: "ULONG", value: t !== void 0 ? t : 0 },
    { name: "offset", type: "ULONG", value: r !== void 0 ? r : 0 },
    { name: "length", type: "ULONG", value: n !== void 0 ? n : 0 },
  ]);
}
function Jr(e) {
  var t = new b.Table("sfnt", [
    { name: "version", type: "TAG", value: "OTTO" },
    { name: "numTables", type: "USHORT", value: 0 },
    { name: "searchRange", type: "USHORT", value: 0 },
    { name: "entrySelector", type: "USHORT", value: 0 },
    { name: "rangeShift", type: "USHORT", value: 0 },
  ]);
  (t.tables = e), (t.numTables = e.length);
  var r = Math.pow(2, jt(t.numTables));
  (t.searchRange = 16 * r),
    (t.entrySelector = jt(r)),
    (t.rangeShift = t.numTables * 16 - t.searchRange);
  for (
    var n = [], a = [], o = t.sizeOf() + Zt().sizeOf() * t.numTables;
    o % 4 !== 0;

  )
    (o += 1), a.push({ name: "padding", type: "BYTE", value: 0 });
  for (var s = 0; s < e.length; s += 1) {
    var u = e[s];
    k.argument(
      u.tableName.length === 4,
      "Table name" + u.tableName + " is invalid."
    );
    var i = u.sizeOf(),
      p = Zt(u.tableName, Dt(u.encode()), o, i);
    for (
      n.push({ name: p.tag + " Table Record", type: "RECORD", value: p }),
        a.push({ name: u.tableName + " table", type: "RECORD", value: u }),
        o += i,
        k.argument(!isNaN(o), "Something went wrong calculating the offset.");
      o % 4 !== 0;

    )
      (o += 1), a.push({ name: "padding", type: "BYTE", value: 0 });
  }
  return (
    n.sort(function (l, h) {
      return l.value.tag > h.value.tag ? 1 : -1;
    }),
    (t.fields = t.fields.concat(n)),
    (t.fields = t.fields.concat(a)),
    t
  );
}
function Qt(e, t, r) {
  for (var n = 0; n < t.length; n += 1) {
    var a = e.charToGlyphIndex(t[n]);
    if (a > 0) {
      var o = e.glyphs.get(a);
      return o.getMetrics();
    }
  }
  return r;
}
function qa(e) {
  for (var t = 0, r = 0; r < e.length; r += 1) t += e[r];
  return t / e.length;
}
function Xa(e) {
  for (
    var t = [],
      r = [],
      n = [],
      a = [],
      o = [],
      s = [],
      u = [],
      i,
      p = 0,
      l = 0,
      h = 0,
      c = 0,
      f = 0,
      v = 0;
    v < e.glyphs.length;
    v += 1
  ) {
    var x = e.glyphs.get(v),
      m = x.unicode | 0;
    if (isNaN(x.advanceWidth))
      throw new Error(
        "Glyph " + x.name + " (" + v + "): advanceWidth is not a number."
      );
    (i > m || i === void 0) && m > 0 && (i = m), p < m && (p = m);
    var y = yt.getUnicodeRange(m);
    if (y < 32) l |= 1 << y;
    else if (y < 64) h |= 1 << (y - 32);
    else if (y < 96) c |= 1 << (y - 64);
    else if (y < 123) f |= 1 << (y - 96);
    else
      throw new Error(
        "Unicode ranges bits > 123 are reserved for internal usage"
      );
    if (x.name !== ".notdef") {
      var U = x.getMetrics();
      t.push(U.xMin),
        r.push(U.yMin),
        n.push(U.xMax),
        a.push(U.yMax),
        s.push(U.leftSideBearing),
        u.push(U.rightSideBearing),
        o.push(x.advanceWidth);
    }
  }
  var S = {
    xMin: Math.min.apply(null, t),
    yMin: Math.min.apply(null, r),
    xMax: Math.max.apply(null, n),
    yMax: Math.max.apply(null, a),
    advanceWidthMax: Math.max.apply(null, o),
    advanceWidthAvg: qa(o),
    minLeftSideBearing: Math.min.apply(null, s),
    maxLeftSideBearing: Math.max.apply(null, s),
    minRightSideBearing: Math.min.apply(null, u),
  };
  (S.ascender = e.ascender), (S.descender = e.descender);
  var B = Nr.make({
      flags: 3,
      unitsPerEm: e.unitsPerEm,
      xMin: S.xMin,
      yMin: S.yMin,
      xMax: S.xMax,
      yMax: S.yMax,
      lowestRecPPEM: 3,
      createdTimestamp: e.createdTimestamp,
    }),
    A = Hr.make({
      ascender: S.ascender,
      descender: S.descender,
      advanceWidthMax: S.advanceWidthMax,
      minLeftSideBearing: S.minLeftSideBearing,
      minRightSideBearing: S.minRightSideBearing,
      xMaxExtent: S.maxLeftSideBearing + (S.xMax - S.xMin),
      numberOfHMetrics: e.glyphs.length,
    }),
    w = _r.make(e.glyphs.length),
    O = yt.make(
      Object.assign(
        {
          xAvgCharWidth: Math.round(S.advanceWidthAvg),
          usFirstCharIndex: i,
          usLastCharIndex: p,
          ulUnicodeRange1: l,
          ulUnicodeRange2: h,
          ulUnicodeRange3: c,
          ulUnicodeRange4: f,
          sTypoAscender: S.ascender,
          sTypoDescender: S.descender,
          sTypoLineGap: 0,
          usWinAscent: S.yMax,
          usWinDescent: Math.abs(S.yMin),
          ulCodePageRange1: 1,
          sxHeight: Qt(e, "xyvw", { yMax: Math.round(S.ascender / 2) }).yMax,
          sCapHeight: Qt(e, "HIKLEFJMNTZBDPRAGOQSUVWXY", S).yMax,
          usDefaultChar: e.hasChar(" ") ? 32 : 0,
          usBreakChar: e.hasChar(" ") ? 32 : 0,
        },
        e.tables.os2
      )
    ),
    T = zr.make(e.glyphs),
    P = Dr.make(e.glyphs),
    Y = e.getEnglishName("fontFamily"),
    j = e.getEnglishName("fontSubfamily"),
    J = Y + " " + j,
    $ = e.getEnglishName("postScriptName");
  $ || ($ = Y.replace(/\s/g, "") + "-" + j);
  var M = {};
  for (var N in e.names) M[N] = e.names[N];
  M.uniqueID ||
    (M.uniqueID = { en: e.getEnglishName("manufacturer") + ":" + J }),
    M.postScriptName || (M.postScriptName = { en: $ }),
    M.preferredFamily || (M.preferredFamily = e.names.fontFamily),
    M.preferredSubfamily || (M.preferredSubfamily = e.names.fontSubfamily);
  var W = [],
    _ = jr.make(M, W),
    q = W.length > 0 ? Wr.make(W) : void 0,
    H = Zr.make(),
    V = Pr.make(e.glyphs, {
      version: e.getEnglishName("version"),
      fullName: J,
      familyName: Y,
      weightName: j,
      postScriptName: $,
      unitsPerEm: e.unitsPerEm,
      fontBBox: [0, S.yMin, S.ascender, S.advanceWidthMax],
    }),
    F = e.metas && Object.keys(e.metas).length > 0 ? Kr.make(e.metas) : void 0,
    X = [B, A, w, O, _, P, H, V, T];
  q && X.push(q),
    e.tables.gsub && X.push(Qr.make(e.tables.gsub)),
    F && X.push(F);
  for (
    var et = Jr(X),
      fn = et.encode(),
      dn = Dt(fn),
      tt = et.fields,
      Ft = !1,
      Pe = 0;
    Pe < tt.length;
    Pe += 1
  )
    if (tt[Pe].name === "head table") {
      (tt[Pe].value.checkSumAdjustment = 2981146554 - dn), (Ft = !0);
      break;
    }
  if (!Ft)
    throw new Error("Could not find head table with checkSum to adjust.");
  return et;
}
var Va = { make: Jr, fontToTable: Xa, computeCheckSum: Dt };
function at(e, t) {
  for (var r = 0, n = e.length - 1; r <= n; ) {
    var a = (r + n) >>> 1,
      o = e[a].tag;
    if (o === t) return a;
    o < t ? (r = a + 1) : (n = a - 1);
  }
  return -r - 1;
}
function Kt(e, t) {
  for (var r = 0, n = e.length - 1; r <= n; ) {
    var a = (r + n) >>> 1,
      o = e[a];
    if (o === t) return a;
    o < t ? (r = a + 1) : (n = a - 1);
  }
  return -r - 1;
}
function Jt(e, t) {
  for (var r, n = 0, a = e.length - 1; n <= a; ) {
    var o = (n + a) >>> 1;
    r = e[o];
    var s = r.start;
    if (s === t) return r;
    s < t ? (n = o + 1) : (a = o - 1);
  }
  if (n > 0) return (r = e[n - 1]), t > r.end ? 0 : r;
}
function Fe(e, t) {
  (this.font = e), (this.tableName = t);
}
Fe.prototype = {
  searchTag: at,
  binSearch: Kt,
  getTable: function (e) {
    var t = this.font.tables[this.tableName];
    return (
      !t &&
        e &&
        (t = this.font.tables[this.tableName] = this.createDefaultTable()),
      t
    );
  },
  getScriptNames: function () {
    var e = this.getTable();
    return e
      ? e.scripts.map(function (t) {
          return t.tag;
        })
      : [];
  },
  getDefaultScriptName: function () {
    var e = this.getTable();
    if (e) {
      for (var t = !1, r = 0; r < e.scripts.length; r++) {
        var n = e.scripts[r].tag;
        if (n === "DFLT") return n;
        n === "latn" && (t = !0);
      }
      if (t) return "latn";
    }
  },
  getScriptTable: function (e, t) {
    var r = this.getTable(t);
    if (r) {
      e = e || "DFLT";
      var n = r.scripts,
        a = at(r.scripts, e);
      if (a >= 0) return n[a].script;
      if (t) {
        var o = {
          tag: e,
          script: {
            defaultLangSys: {
              reserved: 0,
              reqFeatureIndex: 65535,
              featureIndexes: [],
            },
            langSysRecords: [],
          },
        };
        return n.splice(-1 - a, 0, o), o.script;
      }
    }
  },
  getLangSysTable: function (e, t, r) {
    var n = this.getScriptTable(e, r);
    if (n) {
      if (!t || t === "dflt" || t === "DFLT") return n.defaultLangSys;
      var a = at(n.langSysRecords, t);
      if (a >= 0) return n.langSysRecords[a].langSys;
      if (r) {
        var o = {
          tag: t,
          langSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] },
        };
        return n.langSysRecords.splice(-1 - a, 0, o), o.langSys;
      }
    }
  },
  getFeatureTable: function (e, t, r, n) {
    var a = this.getLangSysTable(e, t, n);
    if (a) {
      for (
        var o,
          s = a.featureIndexes,
          u = this.font.tables[this.tableName].features,
          i = 0;
        i < s.length;
        i++
      )
        if (((o = u[s[i]]), o.tag === r)) return o.feature;
      if (n) {
        var p = u.length;
        return (
          k.assert(
            p === 0 || r >= u[p - 1].tag,
            "Features must be added in alphabetical order."
          ),
          (o = { tag: r, feature: { params: 0, lookupListIndexes: [] } }),
          u.push(o),
          s.push(p),
          o.feature
        );
      }
    }
  },
  getLookupTables: function (e, t, r, n, a) {
    var o = this.getFeatureTable(e, t, r, a),
      s = [];
    if (o) {
      for (
        var u,
          i = o.lookupListIndexes,
          p = this.font.tables[this.tableName].lookups,
          l = 0;
        l < i.length;
        l++
      )
        (u = p[i[l]]), u.lookupType === n && s.push(u);
      if (s.length === 0 && a) {
        u = {
          lookupType: n,
          lookupFlag: 0,
          subtables: [],
          markFilteringSet: void 0,
        };
        var h = p.length;
        return p.push(u), i.push(h), [u];
      }
    }
    return s;
  },
  getGlyphClass: function (e, t) {
    switch (e.format) {
      case 1:
        return e.startGlyph <= t && t < e.startGlyph + e.classes.length
          ? e.classes[t - e.startGlyph]
          : 0;
      case 2:
        var r = Jt(e.ranges, t);
        return r ? r.classId : 0;
    }
  },
  getCoverageIndex: function (e, t) {
    switch (e.format) {
      case 1:
        var r = Kt(e.glyphs, t);
        return r >= 0 ? r : -1;
      case 2:
        var n = Jt(e.ranges, t);
        return n ? n.index + t - n.start : -1;
    }
  },
  expandCoverage: function (e) {
    if (e.format === 1) return e.glyphs;
    for (var t = [], r = e.ranges, n = 0; n < r.length; n++)
      for (var a = r[n], o = a.start, s = a.end, u = o; u <= s; u++) t.push(u);
    return t;
  },
};
function Le(e) {
  Fe.call(this, e, "gpos");
}
Le.prototype = Fe.prototype;
Le.prototype.init = function () {
  var e = this.getDefaultScriptName();
  this.defaultKerningTables = this.getKerningTables(e);
};
Le.prototype.getKerningValue = function (e, t, r) {
  for (var n = 0; n < e.length; n++)
    for (var a = e[n].subtables, o = 0; o < a.length; o++) {
      var s = a[o],
        u = this.getCoverageIndex(s.coverage, t);
      if (!(u < 0))
        switch (s.posFormat) {
          case 1:
            for (var i = s.pairSets[u], p = 0; p < i.length; p++) {
              var l = i[p];
              if (l.secondGlyph === r)
                return (l.value1 && l.value1.xAdvance) || 0;
            }
            break;
          case 2:
            var h = this.getGlyphClass(s.classDef1, t),
              c = this.getGlyphClass(s.classDef2, r),
              f = s.classRecords[h][c];
            return (f.value1 && f.value1.xAdvance) || 0;
        }
    }
  return 0;
};
Le.prototype.getKerningTables = function (e, t) {
  if (this.font.tables.gpos) return this.getLookupTables(e, t, "kern", 2);
};
function Q(e) {
  Fe.call(this, e, "gsub");
}
function Ya(e, t) {
  var r = e.length;
  if (r !== t.length) return !1;
  for (var n = 0; n < r; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function At(e, t, r) {
  for (var n = e.subtables, a = 0; a < n.length; a++) {
    var o = n[a];
    if (o.substFormat === t) return o;
  }
  if (r) return n.push(r), r;
}
Q.prototype = Fe.prototype;
Q.prototype.createDefaultTable = function () {
  return {
    version: 1,
    scripts: [
      {
        tag: "DFLT",
        script: {
          defaultLangSys: {
            reserved: 0,
            reqFeatureIndex: 65535,
            featureIndexes: [],
          },
          langSysRecords: [],
        },
      },
    ],
    features: [],
    lookups: [],
  };
};
Q.prototype.getSingle = function (e, t, r) {
  for (
    var n = [], a = this.getLookupTables(t, r, e, 1), o = 0;
    o < a.length;
    o++
  )
    for (var s = a[o].subtables, u = 0; u < s.length; u++) {
      var i = s[u],
        p = this.expandCoverage(i.coverage),
        l = void 0;
      if (i.substFormat === 1) {
        var h = i.deltaGlyphId;
        for (l = 0; l < p.length; l++) {
          var c = p[l];
          n.push({ sub: c, by: c + h });
        }
      } else {
        var f = i.substitute;
        for (l = 0; l < p.length; l++) n.push({ sub: p[l], by: f[l] });
      }
    }
  return n;
};
Q.prototype.getMultiple = function (e, t, r) {
  for (
    var n = [], a = this.getLookupTables(t, r, e, 2), o = 0;
    o < a.length;
    o++
  )
    for (var s = a[o].subtables, u = 0; u < s.length; u++) {
      var i = s[u],
        p = this.expandCoverage(i.coverage),
        l = void 0;
      for (l = 0; l < p.length; l++) {
        var h = p[l],
          c = i.sequences[l];
        n.push({ sub: h, by: c });
      }
    }
  return n;
};
Q.prototype.getAlternates = function (e, t, r) {
  for (
    var n = [], a = this.getLookupTables(t, r, e, 3), o = 0;
    o < a.length;
    o++
  )
    for (var s = a[o].subtables, u = 0; u < s.length; u++)
      for (
        var i = s[u],
          p = this.expandCoverage(i.coverage),
          l = i.alternateSets,
          h = 0;
        h < p.length;
        h++
      )
        n.push({ sub: p[h], by: l[h] });
  return n;
};
Q.prototype.getLigatures = function (e, t, r) {
  for (
    var n = [], a = this.getLookupTables(t, r, e, 4), o = 0;
    o < a.length;
    o++
  )
    for (var s = a[o].subtables, u = 0; u < s.length; u++)
      for (
        var i = s[u],
          p = this.expandCoverage(i.coverage),
          l = i.ligatureSets,
          h = 0;
        h < p.length;
        h++
      )
        for (var c = p[h], f = l[h], v = 0; v < f.length; v++) {
          var x = f[v];
          n.push({ sub: [c].concat(x.components), by: x.ligGlyph });
        }
  return n;
};
Q.prototype.addSingle = function (e, t, r, n) {
  var a = this.getLookupTables(r, n, e, 1, !0)[0],
    o = At(a, 2, {
      substFormat: 2,
      coverage: { format: 1, glyphs: [] },
      substitute: [],
    });
  k.assert(
    o.coverage.format === 1,
    "Single: unable to modify coverage table format " + o.coverage.format
  );
  var s = t.sub,
    u = this.binSearch(o.coverage.glyphs, s);
  u < 0 &&
    ((u = -1 - u),
    o.coverage.glyphs.splice(u, 0, s),
    o.substitute.splice(u, 0, 0)),
    (o.substitute[u] = t.by);
};
Q.prototype.addMultiple = function (e, t, r, n) {
  k.assert(
    t.by instanceof Array && t.by.length > 1,
    'Multiple: "by" must be an array of two or more ids'
  );
  var a = this.getLookupTables(r, n, e, 2, !0)[0],
    o = At(a, 1, {
      substFormat: 1,
      coverage: { format: 1, glyphs: [] },
      sequences: [],
    });
  k.assert(
    o.coverage.format === 1,
    "Multiple: unable to modify coverage table format " + o.coverage.format
  );
  var s = t.sub,
    u = this.binSearch(o.coverage.glyphs, s);
  u < 0 &&
    ((u = -1 - u),
    o.coverage.glyphs.splice(u, 0, s),
    o.sequences.splice(u, 0, 0)),
    (o.sequences[u] = t.by);
};
Q.prototype.addAlternate = function (e, t, r, n) {
  var a = this.getLookupTables(r, n, e, 3, !0)[0],
    o = At(a, 1, {
      substFormat: 1,
      coverage: { format: 1, glyphs: [] },
      alternateSets: [],
    });
  k.assert(
    o.coverage.format === 1,
    "Alternate: unable to modify coverage table format " + o.coverage.format
  );
  var s = t.sub,
    u = this.binSearch(o.coverage.glyphs, s);
  u < 0 &&
    ((u = -1 - u),
    o.coverage.glyphs.splice(u, 0, s),
    o.alternateSets.splice(u, 0, 0)),
    (o.alternateSets[u] = t.by);
};
Q.prototype.addLigature = function (e, t, r, n) {
  var a = this.getLookupTables(r, n, e, 4, !0)[0],
    o = a.subtables[0];
  o ||
    ((o = {
      substFormat: 1,
      coverage: { format: 1, glyphs: [] },
      ligatureSets: [],
    }),
    (a.subtables[0] = o)),
    k.assert(
      o.coverage.format === 1,
      "Ligature: unable to modify coverage table format " + o.coverage.format
    );
  var s = t.sub[0],
    u = t.sub.slice(1),
    i = { ligGlyph: t.by, components: u },
    p = this.binSearch(o.coverage.glyphs, s);
  if (p >= 0) {
    for (var l = o.ligatureSets[p], h = 0; h < l.length; h++)
      if (Ya(l[h].components, u)) return;
    l.push(i);
  } else
    (p = -1 - p),
      o.coverage.glyphs.splice(p, 0, s),
      o.ligatureSets.splice(p, 0, [i]);
};
Q.prototype.getFeature = function (e, t, r) {
  if (/ss\d\d/.test(e)) return this.getSingle(e, t, r);
  switch (e) {
    case "aalt":
    case "salt":
      return this.getSingle(e, t, r).concat(this.getAlternates(e, t, r));
    case "dlig":
    case "liga":
    case "rlig":
      return this.getLigatures(e, t, r);
    case "ccmp":
      return this.getMultiple(e, t, r).concat(this.getLigatures(e, t, r));
    case "stch":
      return this.getMultiple(e, t, r);
  }
};
Q.prototype.add = function (e, t, r, n) {
  if (/ss\d\d/.test(e)) return this.addSingle(e, t, r, n);
  switch (e) {
    case "aalt":
    case "salt":
      return typeof t.by == "number"
        ? this.addSingle(e, t, r, n)
        : this.addAlternate(e, t, r, n);
    case "dlig":
    case "liga":
    case "rlig":
      return this.addLigature(e, t, r, n);
    case "ccmp":
      return t.by instanceof Array
        ? this.addMultiple(e, t, r, n)
        : this.addLigature(e, t, r, n);
  }
};
function ja() {
  return typeof window < "u";
}
function $r(e) {
  for (
    var t = new ArrayBuffer(e.length), r = new Uint8Array(t), n = 0;
    n < e.length;
    ++n
  )
    r[n] = e[n];
  return t;
}
function Za(e) {
  for (
    var t = new Buffer(e.byteLength), r = new Uint8Array(e), n = 0;
    n < t.length;
    ++n
  )
    t[n] = r[n];
  return t;
}
function De(e, t) {
  if (!e) throw t;
}
function $t(e, t, r, n, a) {
  var o;
  return (
    (t & n) > 0
      ? ((o = e.parseByte()), !(t & a) && (o = -o), (o = r + o))
      : (t & a) > 0
      ? (o = r)
      : (o = r + e.parseShort()),
    o
  );
}
function en(e, t, r) {
  var n = new C.Parser(t, r);
  (e.numberOfContours = n.parseShort()),
    (e._xMin = n.parseShort()),
    (e._yMin = n.parseShort()),
    (e._xMax = n.parseShort()),
    (e._yMax = n.parseShort());
  var a, o;
  if (e.numberOfContours > 0) {
    for (
      var s = (e.endPointIndices = []), u = 0;
      u < e.numberOfContours;
      u += 1
    )
      s.push(n.parseUShort());
    (e.instructionLength = n.parseUShort()), (e.instructions = []);
    for (var i = 0; i < e.instructionLength; i += 1)
      e.instructions.push(n.parseByte());
    var p = s[s.length - 1] + 1;
    a = [];
    for (var l = 0; l < p; l += 1)
      if (((o = n.parseByte()), a.push(o), (o & 8) > 0))
        for (var h = n.parseByte(), c = 0; c < h; c += 1) a.push(o), (l += 1);
    if ((k.argument(a.length === p, "Bad flags."), s.length > 0)) {
      var f = [],
        v;
      if (p > 0) {
        for (var x = 0; x < p; x += 1)
          (o = a[x]),
            (v = {}),
            (v.onCurve = !!(o & 1)),
            (v.lastPointOfContour = s.indexOf(x) >= 0),
            f.push(v);
        for (var m = 0, y = 0; y < p; y += 1)
          (o = a[y]), (v = f[y]), (v.x = $t(n, o, m, 2, 16)), (m = v.x);
        for (var U = 0, S = 0; S < p; S += 1)
          (o = a[S]), (v = f[S]), (v.y = $t(n, o, U, 4, 32)), (U = v.y);
      }
      e.points = f;
    } else e.points = [];
  } else if (e.numberOfContours === 0) e.points = [];
  else {
    (e.isComposite = !0), (e.points = []), (e.components = []);
    for (var B = !0; B; ) {
      a = n.parseUShort();
      var A = {
        glyphIndex: n.parseUShort(),
        xScale: 1,
        scale01: 0,
        scale10: 0,
        yScale: 1,
        dx: 0,
        dy: 0,
      };
      (a & 1) > 0
        ? (a & 2) > 0
          ? ((A.dx = n.parseShort()), (A.dy = n.parseShort()))
          : (A.matchedPoints = [n.parseUShort(), n.parseUShort()])
        : (a & 2) > 0
        ? ((A.dx = n.parseChar()), (A.dy = n.parseChar()))
        : (A.matchedPoints = [n.parseByte(), n.parseByte()]),
        (a & 8) > 0
          ? (A.xScale = A.yScale = n.parseF2Dot14())
          : (a & 64) > 0
          ? ((A.xScale = n.parseF2Dot14()), (A.yScale = n.parseF2Dot14()))
          : (a & 128) > 0 &&
            ((A.xScale = n.parseF2Dot14()),
            (A.scale01 = n.parseF2Dot14()),
            (A.scale10 = n.parseF2Dot14()),
            (A.yScale = n.parseF2Dot14())),
        e.components.push(A),
        (B = !!(a & 32));
    }
    if (a & 256) {
      (e.instructionLength = n.parseUShort()), (e.instructions = []);
      for (var w = 0; w < e.instructionLength; w += 1)
        e.instructions.push(n.parseByte());
    }
  }
}
function ot(e, t) {
  for (var r = [], n = 0; n < e.length; n += 1) {
    var a = e[n],
      o = {
        x: t.xScale * a.x + t.scale01 * a.y + t.dx,
        y: t.scale10 * a.x + t.yScale * a.y + t.dy,
        onCurve: a.onCurve,
        lastPointOfContour: a.lastPointOfContour,
      };
    r.push(o);
  }
  return r;
}
function Qa(e) {
  for (var t = [], r = [], n = 0; n < e.length; n += 1) {
    var a = e[n];
    r.push(a), a.lastPointOfContour && (t.push(r), (r = []));
  }
  return (
    k.argument(
      r.length === 0,
      "There are still points left in the current contour."
    ),
    t
  );
}
function tn(e) {
  var t = new G();
  if (!e) return t;
  for (var r = Qa(e), n = 0; n < r.length; ++n) {
    var a = r[n],
      o = null,
      s = a[a.length - 1],
      u = a[0];
    if (s.onCurve) t.moveTo(s.x, s.y);
    else if (u.onCurve) t.moveTo(u.x, u.y);
    else {
      var i = { x: (s.x + u.x) * 0.5, y: (s.y + u.y) * 0.5 };
      t.moveTo(i.x, i.y);
    }
    for (var p = 0; p < a.length; ++p)
      if (((o = s), (s = u), (u = a[(p + 1) % a.length]), s.onCurve))
        t.lineTo(s.x, s.y);
      else {
        var l = u;
        o.onCurve || ((s.x + o.x) * 0.5, (s.y + o.y) * 0.5),
          u.onCurve || (l = { x: (s.x + u.x) * 0.5, y: (s.y + u.y) * 0.5 }),
          t.quadraticCurveTo(s.x, s.y, l.x, l.y);
      }
    t.closePath();
  }
  return t;
}
function rn(e, t) {
  if (t.isComposite)
    for (var r = 0; r < t.components.length; r += 1) {
      var n = t.components[r],
        a = e.get(n.glyphIndex);
      if ((a.getPath(), a.points)) {
        var o = void 0;
        if (n.matchedPoints === void 0) o = ot(a.points, n);
        else {
          if (
            n.matchedPoints[0] > t.points.length - 1 ||
            n.matchedPoints[1] > a.points.length - 1
          )
            throw Error("Matched points out of range in " + t.name);
          var s = t.points[n.matchedPoints[0]],
            u = a.points[n.matchedPoints[1]],
            i = {
              xScale: n.xScale,
              scale01: n.scale01,
              scale10: n.scale10,
              yScale: n.yScale,
              dx: 0,
              dy: 0,
            };
          (u = ot([u], i)[0]),
            (i.dx = s.x - u.x),
            (i.dy = s.y - u.y),
            (o = ot(a.points, i));
        }
        t.points = t.points.concat(o);
      }
    }
  return tn(t.points);
}
function Ka(e, t, r, n) {
  for (var a = new ue.GlyphSet(n), o = 0; o < r.length - 1; o += 1) {
    var s = r[o],
      u = r[o + 1];
    s !== u
      ? a.push(o, ue.ttfGlyphLoader(n, o, en, e, t + s, rn))
      : a.push(o, ue.glyphLoader(n, o));
  }
  return a;
}
function Ja(e, t, r, n) {
  var a = new ue.GlyphSet(n);
  return (
    (n._push = function (o) {
      var s = r[o],
        u = r[o + 1];
      s !== u
        ? a.push(o, ue.ttfGlyphLoader(n, o, en, e, t + s, rn))
        : a.push(o, ue.glyphLoader(n, o));
    }),
    a
  );
}
function $a(e, t, r, n, a) {
  return a.lowMemory ? Ja(e, t, r, n) : Ka(e, t, r, n);
}
var nn = { getPath: tn, parse: $a },
  an,
  Se,
  on,
  xt;
function sn(e) {
  (this.font = e),
    (this.getCommands = function (t) {
      return nn.getPath(t).commands;
    }),
    (this._fpgmState = this._prepState = void 0),
    (this._errorState = 0);
}
function eo(e) {
  return e;
}
function un(e) {
  return Math.sign(e) * Math.round(Math.abs(e));
}
function to(e) {
  return (Math.sign(e) * Math.round(Math.abs(e * 2))) / 2;
}
function ro(e) {
  return Math.sign(e) * (Math.round(Math.abs(e) + 0.5) - 0.5);
}
function no(e) {
  return Math.sign(e) * Math.ceil(Math.abs(e));
}
function ao(e) {
  return Math.sign(e) * Math.floor(Math.abs(e));
}
var ln = function (e) {
    var t = this.srPeriod,
      r = this.srPhase,
      n = this.srThreshold,
      a = 1;
    return (
      e < 0 && ((e = -e), (a = -1)),
      (e += n - r),
      (e = Math.trunc(e / t) * t),
      (e += r),
      e < 0 ? r * a : e * a
    );
  },
  ie = {
    x: 1,
    y: 0,
    axis: "x",
    distance: function (e, t, r, n) {
      return (r ? e.xo : e.x) - (n ? t.xo : t.x);
    },
    interpolate: function (e, t, r, n) {
      var a, o, s, u, i, p, l;
      if (!n || n === this) {
        if (
          ((a = e.xo - t.xo),
          (o = e.xo - r.xo),
          (i = t.x - t.xo),
          (p = r.x - r.xo),
          (s = Math.abs(a)),
          (u = Math.abs(o)),
          (l = s + u),
          l === 0)
        ) {
          e.x = e.xo + (i + p) / 2;
          return;
        }
        e.x = e.xo + (i * u + p * s) / l;
        return;
      }
      if (
        ((a = n.distance(e, t, !0, !0)),
        (o = n.distance(e, r, !0, !0)),
        (i = n.distance(t, t, !1, !0)),
        (p = n.distance(r, r, !1, !0)),
        (s = Math.abs(a)),
        (u = Math.abs(o)),
        (l = s + u),
        l === 0)
      ) {
        ie.setRelative(e, e, (i + p) / 2, n, !0);
        return;
      }
      ie.setRelative(e, e, (i * u + p * s) / l, n, !0);
    },
    normalSlope: Number.NEGATIVE_INFINITY,
    setRelative: function (e, t, r, n, a) {
      if (!n || n === this) {
        e.x = (a ? t.xo : t.x) + r;
        return;
      }
      var o = a ? t.xo : t.x,
        s = a ? t.yo : t.y,
        u = o + r * n.x,
        i = s + r * n.y;
      e.x = u + (e.y - i) / n.normalSlope;
    },
    slope: 0,
    touch: function (e) {
      e.xTouched = !0;
    },
    touched: function (e) {
      return e.xTouched;
    },
    untouch: function (e) {
      e.xTouched = !1;
    },
  },
  le = {
    x: 0,
    y: 1,
    axis: "y",
    distance: function (e, t, r, n) {
      return (r ? e.yo : e.y) - (n ? t.yo : t.y);
    },
    interpolate: function (e, t, r, n) {
      var a, o, s, u, i, p, l;
      if (!n || n === this) {
        if (
          ((a = e.yo - t.yo),
          (o = e.yo - r.yo),
          (i = t.y - t.yo),
          (p = r.y - r.yo),
          (s = Math.abs(a)),
          (u = Math.abs(o)),
          (l = s + u),
          l === 0)
        ) {
          e.y = e.yo + (i + p) / 2;
          return;
        }
        e.y = e.yo + (i * u + p * s) / l;
        return;
      }
      if (
        ((a = n.distance(e, t, !0, !0)),
        (o = n.distance(e, r, !0, !0)),
        (i = n.distance(t, t, !1, !0)),
        (p = n.distance(r, r, !1, !0)),
        (s = Math.abs(a)),
        (u = Math.abs(o)),
        (l = s + u),
        l === 0)
      ) {
        le.setRelative(e, e, (i + p) / 2, n, !0);
        return;
      }
      le.setRelative(e, e, (i * u + p * s) / l, n, !0);
    },
    normalSlope: 0,
    setRelative: function (e, t, r, n, a) {
      if (!n || n === this) {
        e.y = (a ? t.yo : t.y) + r;
        return;
      }
      var o = a ? t.xo : t.x,
        s = a ? t.yo : t.y,
        u = o + r * n.x,
        i = s + r * n.y;
      e.y = i + n.normalSlope * (e.x - u);
    },
    slope: Number.POSITIVE_INFINITY,
    touch: function (e) {
      e.yTouched = !0;
    },
    touched: function (e) {
      return e.yTouched;
    },
    untouch: function (e) {
      e.yTouched = !1;
    },
  };
Object.freeze(ie);
Object.freeze(le);
function Ie(e, t) {
  (this.x = e),
    (this.y = t),
    (this.axis = void 0),
    (this.slope = t / e),
    (this.normalSlope = -e / t),
    Object.freeze(this);
}
Ie.prototype.distance = function (e, t, r, n) {
  return this.x * ie.distance(e, t, r, n) + this.y * le.distance(e, t, r, n);
};
Ie.prototype.interpolate = function (e, t, r, n) {
  var a, o, s, u, i, p, l;
  if (
    ((s = n.distance(e, t, !0, !0)),
    (u = n.distance(e, r, !0, !0)),
    (a = n.distance(t, t, !1, !0)),
    (o = n.distance(r, r, !1, !0)),
    (i = Math.abs(s)),
    (p = Math.abs(u)),
    (l = i + p),
    l === 0)
  ) {
    this.setRelative(e, e, (a + o) / 2, n, !0);
    return;
  }
  this.setRelative(e, e, (a * p + o * i) / l, n, !0);
};
Ie.prototype.setRelative = function (e, t, r, n, a) {
  n = n || this;
  var o = a ? t.xo : t.x,
    s = a ? t.yo : t.y,
    u = o + r * n.x,
    i = s + r * n.y,
    p = n.normalSlope,
    l = this.slope,
    h = e.x,
    c = e.y;
  (e.x = (l * h - p * u + i - c) / (l - p)), (e.y = l * (e.x - h) + c);
};
Ie.prototype.touch = function (e) {
  (e.xTouched = !0), (e.yTouched = !0);
};
function Me(e, t) {
  var r = Math.sqrt(e * e + t * t);
  return (
    (e /= r),
    (t /= r),
    e === 1 && t === 0 ? ie : e === 0 && t === 1 ? le : new Ie(e, t)
  );
}
function pe(e, t, r, n) {
  (this.x = this.xo = Math.round(e * 64) / 64),
    (this.y = this.yo = Math.round(t * 64) / 64),
    (this.lastPointOfContour = r),
    (this.onCurve = n),
    (this.prevPointOnContour = void 0),
    (this.nextPointOnContour = void 0),
    (this.xTouched = !1),
    (this.yTouched = !1),
    Object.preventExtensions(this);
}
pe.prototype.nextTouched = function (e) {
  for (var t = this.nextPointOnContour; !e.touched(t) && t !== this; )
    t = t.nextPointOnContour;
  return t;
};
pe.prototype.prevTouched = function (e) {
  for (var t = this.prevPointOnContour; !e.touched(t) && t !== this; )
    t = t.prevPointOnContour;
  return t;
};
var we = Object.freeze(new pe(0, 0)),
  oo = {
    cvCutIn: 17 / 16,
    deltaBase: 9,
    deltaShift: 0.125,
    loop: 1,
    minDis: 1,
    autoFlip: !0,
  };
function ve(e, t) {
  switch (((this.env = e), (this.stack = []), (this.prog = t), e)) {
    case "glyf":
      (this.zp0 = this.zp1 = this.zp2 = 1),
        (this.rp0 = this.rp1 = this.rp2 = 0);
    case "prep":
      (this.fv = this.pv = this.dpv = ie), (this.round = un);
  }
}
sn.prototype.exec = function (e, t) {
  if (typeof t != "number") throw new Error("Point size is not a number!");
  if (!(this._errorState > 2)) {
    var r = this.font,
      n = this._prepState;
    if (!n || n.ppem !== t) {
      var a = this._fpgmState;
      if (!a) {
        (ve.prototype = oo),
          (a = this._fpgmState = new ve("fpgm", r.tables.fpgm)),
          (a.funcs = []),
          (a.font = r),
          exports.DEBUG && (console.log("---EXEC FPGM---"), (a.step = -1));
        try {
          Se(a);
        } catch (p) {
          console.log("Hinting error in FPGM:" + p), (this._errorState = 3);
          return;
        }
      }
      (ve.prototype = a),
        (n = this._prepState = new ve("prep", r.tables.prep)),
        (n.ppem = t);
      var o = r.tables.cvt;
      if (o)
        for (
          var s = (n.cvt = new Array(o.length)), u = t / r.unitsPerEm, i = 0;
          i < o.length;
          i++
        )
          s[i] = o[i] * u;
      else n.cvt = [];
      exports.DEBUG && (console.log("---EXEC PREP---"), (n.step = -1));
      try {
        Se(n);
      } catch (p) {
        this._errorState < 2 && console.log("Hinting error in PREP:" + p),
          (this._errorState = 2);
      }
    }
    if (!(this._errorState > 1))
      try {
        return on(e, n);
      } catch (p) {
        this._errorState < 1 &&
          (console.log("Hinting error:" + p),
          console.log("Note: further hinting errors are silenced")),
          (this._errorState = 1);
        return;
      }
  }
};
on = function (e, t) {
  var r = t.ppem / t.font.unitsPerEm,
    n = r,
    a = e.components,
    o,
    s,
    u;
  if (((ve.prototype = t), !a))
    (u = new ve("glyf", e.instructions)),
      exports.DEBUG && (console.log("---EXEC GLYPH---"), (u.step = -1)),
      xt(e, u, r, n),
      (s = u.gZone);
  else {
    var i = t.font;
    (s = []), (o = []);
    for (var p = 0; p < a.length; p++) {
      var l = a[p],
        h = i.glyphs.get(l.glyphIndex);
      (u = new ve("glyf", h.instructions)),
        exports.DEBUG &&
          (console.log("---EXEC COMP " + p + "---"), (u.step = -1)),
        xt(h, u, r, n);
      for (
        var c = Math.round(l.dx * r),
          f = Math.round(l.dy * n),
          v = u.gZone,
          x = u.contours,
          m = 0;
        m < v.length;
        m++
      ) {
        var y = v[m];
        (y.xTouched = y.yTouched = !1),
          (y.xo = y.x = y.x + c),
          (y.yo = y.y = y.y + f);
      }
      var U = s.length;
      s.push.apply(s, v);
      for (var S = 0; S < x.length; S++) o.push(x[S] + U);
    }
    e.instructions &&
      !u.inhibitGridFit &&
      ((u = new ve("glyf", e.instructions)),
      (u.gZone = u.z0 = u.z1 = u.z2 = s),
      (u.contours = o),
      s.push(new pe(0, 0), new pe(Math.round(e.advanceWidth * r), 0)),
      exports.DEBUG && (console.log("---EXEC COMPOSITE---"), (u.step = -1)),
      Se(u),
      (s.length -= 2));
  }
  return s;
};
xt = function (e, t, r, n) {
  for (
    var a = e.points || [],
      o = a.length,
      s = (t.gZone = t.z0 = t.z1 = t.z2 = []),
      u = (t.contours = []),
      i,
      p = 0;
    p < o;
    p++
  )
    (i = a[p]),
      (s[p] = new pe(i.x * r, i.y * n, i.lastPointOfContour, i.onCurve));
  for (var l, h, c = 0; c < o; c++)
    (i = s[c]),
      l || ((l = i), u.push(c)),
      i.lastPointOfContour
        ? ((i.nextPointOnContour = l), (l.prevPointOnContour = i), (l = void 0))
        : ((h = s[c + 1]),
          (i.nextPointOnContour = h),
          (h.prevPointOnContour = i));
  if (!t.inhibitGridFit) {
    if (exports.DEBUG) {
      console.log("PROCESSING GLYPH", t.stack);
      for (var f = 0; f < o; f++) console.log(f, s[f].x, s[f].y);
    }
    if (
      (s.push(new pe(0, 0), new pe(Math.round(e.advanceWidth * r), 0)),
      Se(t),
      (s.length -= 2),
      exports.DEBUG)
    ) {
      console.log("FINISHED GLYPH", t.stack);
      for (var v = 0; v < o; v++) console.log(v, s[v].x, s[v].y);
    }
  }
};
Se = function (e) {
  var t = e.prog;
  if (t) {
    var r = t.length,
      n;
    for (e.ip = 0; e.ip < r; e.ip++) {
      if ((exports.DEBUG && e.step++, (n = an[t[e.ip]]), !n))
        throw new Error(
          "unknown instruction: 0x" + Number(t[e.ip]).toString(16)
        );
      n(e);
    }
  }
};
function Je(e) {
  for (var t = (e.tZone = new Array(e.gZone.length)), r = 0; r < t.length; r++)
    t[r] = new pe(0, 0);
}
function pn(e, t) {
  var r = e.prog,
    n = e.ip,
    a = 1,
    o;
  do
    if (((o = r[++n]), o === 88)) a++;
    else if (o === 89) a--;
    else if (o === 64) n += r[n + 1] + 1;
    else if (o === 65) n += 2 * r[n + 1] + 1;
    else if (o >= 176 && o <= 183) n += o - 176 + 1;
    else if (o >= 184 && o <= 191) n += (o - 184 + 1) * 2;
    else if (t && a === 1 && o === 27) break;
  while (a > 0);
  e.ip = n;
}
function er(e, t) {
  exports.DEBUG && console.log(t.step, "SVTCA[" + e.axis + "]"),
    (t.fv = t.pv = t.dpv = e);
}
function tr(e, t) {
  exports.DEBUG && console.log(t.step, "SPVTCA[" + e.axis + "]"),
    (t.pv = t.dpv = e);
}
function rr(e, t) {
  exports.DEBUG && console.log(t.step, "SFVTCA[" + e.axis + "]"), (t.fv = e);
}
function nr(e, t) {
  var r = t.stack,
    n = r.pop(),
    a = r.pop(),
    o = t.z2[n],
    s = t.z1[a];
  exports.DEBUG && console.log("SPVTL[" + e + "]", n, a);
  var u, i;
  e ? ((u = o.y - s.y), (i = s.x - o.x)) : ((u = s.x - o.x), (i = s.y - o.y)),
    (t.pv = t.dpv = Me(u, i));
}
function ar(e, t) {
  var r = t.stack,
    n = r.pop(),
    a = r.pop(),
    o = t.z2[n],
    s = t.z1[a];
  exports.DEBUG && console.log("SFVTL[" + e + "]", n, a);
  var u, i;
  e ? ((u = o.y - s.y), (i = s.x - o.x)) : ((u = s.x - o.x), (i = s.y - o.y)),
    (t.fv = Me(u, i));
}
function so(e) {
  var t = e.stack,
    r = t.pop(),
    n = t.pop();
  exports.DEBUG && console.log(e.step, "SPVFS[]", r, n),
    (e.pv = e.dpv = Me(n, r));
}
function io(e) {
  var t = e.stack,
    r = t.pop(),
    n = t.pop();
  exports.DEBUG && console.log(e.step, "SPVFS[]", r, n), (e.fv = Me(n, r));
}
function uo(e) {
  var t = e.stack,
    r = e.pv;
  exports.DEBUG && console.log(e.step, "GPV[]"),
    t.push(r.x * 16384),
    t.push(r.y * 16384);
}
function lo(e) {
  var t = e.stack,
    r = e.fv;
  exports.DEBUG && console.log(e.step, "GFV[]"),
    t.push(r.x * 16384),
    t.push(r.y * 16384);
}
function po(e) {
  (e.fv = e.pv), exports.DEBUG && console.log(e.step, "SFVTPV[]");
}
function co(e) {
  var t = e.stack,
    r = t.pop(),
    n = t.pop(),
    a = t.pop(),
    o = t.pop(),
    s = t.pop(),
    u = e.z0,
    i = e.z1,
    p = u[r],
    l = u[n],
    h = i[a],
    c = i[o],
    f = e.z2[s];
  exports.DEBUG && console.log("ISECT[], ", r, n, a, o, s);
  var v = p.x,
    x = p.y,
    m = l.x,
    y = l.y,
    U = h.x,
    S = h.y,
    B = c.x,
    A = c.y,
    w = (v - m) * (S - A) - (x - y) * (U - B),
    O = v * y - x * m,
    T = U * A - S * B;
  (f.x = (O * (U - B) - T * (v - m)) / w),
    (f.y = (O * (S - A) - T * (x - y)) / w);
}
function ho(e) {
  (e.rp0 = e.stack.pop()),
    exports.DEBUG && console.log(e.step, "SRP0[]", e.rp0);
}
function fo(e) {
  (e.rp1 = e.stack.pop()),
    exports.DEBUG && console.log(e.step, "SRP1[]", e.rp1);
}
function vo(e) {
  (e.rp2 = e.stack.pop()),
    exports.DEBUG && console.log(e.step, "SRP2[]", e.rp2);
}
function go(e) {
  var t = e.stack.pop();
  switch ((exports.DEBUG && console.log(e.step, "SZP0[]", t), (e.zp0 = t), t)) {
    case 0:
      e.tZone || Je(e), (e.z0 = e.tZone);
      break;
    case 1:
      e.z0 = e.gZone;
      break;
    default:
      throw new Error("Invalid zone pointer");
  }
}
function mo(e) {
  var t = e.stack.pop();
  switch ((exports.DEBUG && console.log(e.step, "SZP1[]", t), (e.zp1 = t), t)) {
    case 0:
      e.tZone || Je(e), (e.z1 = e.tZone);
      break;
    case 1:
      e.z1 = e.gZone;
      break;
    default:
      throw new Error("Invalid zone pointer");
  }
}
function yo(e) {
  var t = e.stack.pop();
  switch ((exports.DEBUG && console.log(e.step, "SZP2[]", t), (e.zp2 = t), t)) {
    case 0:
      e.tZone || Je(e), (e.z2 = e.tZone);
      break;
    case 1:
      e.z2 = e.gZone;
      break;
    default:
      throw new Error("Invalid zone pointer");
  }
}
function xo(e) {
  var t = e.stack.pop();
  switch (
    (exports.DEBUG && console.log(e.step, "SZPS[]", t),
    (e.zp0 = e.zp1 = e.zp2 = t),
    t)
  ) {
    case 0:
      e.tZone || Je(e), (e.z0 = e.z1 = e.z2 = e.tZone);
      break;
    case 1:
      e.z0 = e.z1 = e.z2 = e.gZone;
      break;
    default:
      throw new Error("Invalid zone pointer");
  }
}
function bo(e) {
  (e.loop = e.stack.pop()),
    exports.DEBUG && console.log(e.step, "SLOOP[]", e.loop);
}
function So(e) {
  exports.DEBUG && console.log(e.step, "RTG[]"), (e.round = un);
}
function Eo(e) {
  exports.DEBUG && console.log(e.step, "RTHG[]"), (e.round = ro);
}
function Co(e) {
  var t = e.stack.pop();
  exports.DEBUG && console.log(e.step, "SMD[]", t), (e.minDis = t / 64);
}
function To(e) {
  exports.DEBUG && console.log(e.step, "ELSE[]"), pn(e, !1);
}
function ko(e) {
  var t = e.stack.pop();
  exports.DEBUG && console.log(e.step, "JMPR[]", t), (e.ip += t - 1);
}
function Uo(e) {
  var t = e.stack.pop();
  exports.DEBUG && console.log(e.step, "SCVTCI[]", t), (e.cvCutIn = t / 64);
}
function Do(e) {
  var t = e.stack;
  exports.DEBUG && console.log(e.step, "DUP[]"), t.push(t[t.length - 1]);
}
function st(e) {
  exports.DEBUG && console.log(e.step, "POP[]"), e.stack.pop();
}
function Ao(e) {
  exports.DEBUG && console.log(e.step, "CLEAR[]"), (e.stack.length = 0);
}
function Oo(e) {
  var t = e.stack,
    r = t.pop(),
    n = t.pop();
  exports.DEBUG && console.log(e.step, "SWAP[]"), t.push(r), t.push(n);
}
function Bo(e) {
  var t = e.stack;
  exports.DEBUG && console.log(e.step, "DEPTH[]"), t.push(t.length);
}
function Ro(e) {
  var t = e.stack,
    r = t.pop(),
    n = t.pop();
  exports.DEBUG && console.log(e.step, "LOOPCALL[]", r, n);
  var a = e.ip,
    o = e.prog;
  e.prog = e.funcs[r];
  for (var s = 0; s < n; s++)
    Se(e),
      exports.DEBUG &&
        console.log(++e.step, s + 1 < n ? "next loopcall" : "done loopcall", s);
  (e.ip = a), (e.prog = o);
}
function wo(e) {
  var t = e.stack.pop();
  exports.DEBUG && console.log(e.step, "CALL[]", t);
  var r = e.ip,
    n = e.prog;
  (e.prog = e.funcs[t]),
    Se(e),
    (e.ip = r),
    (e.prog = n),
    exports.DEBUG && console.log(++e.step, "returning from", t);
}
function Fo(e) {
  var t = e.stack,
    r = t.pop();
  exports.DEBUG && console.log(e.step, "CINDEX[]", r), t.push(t[t.length - r]);
}
function Lo(e) {
  var t = e.stack,
    r = t.pop();
  exports.DEBUG && console.log(e.step, "MINDEX[]", r),
    t.push(t.splice(t.length - r, 1)[0]);
}
function Io(e) {
  if (e.env !== "fpgm") throw new Error("FDEF not allowed here");
  var t = e.stack,
    r = e.prog,
    n = e.ip,
    a = t.pop(),
    o = n;
  for (exports.DEBUG && console.log(e.step, "FDEF[]", a); r[++n] !== 45; );
  (e.ip = n), (e.funcs[a] = r.slice(o + 1, n));
}
function or(e, t) {
  var r = t.stack.pop(),
    n = t.z0[r],
    a = t.fv,
    o = t.pv;
  exports.DEBUG && console.log(t.step, "MDAP[" + e + "]", r);
  var s = o.distance(n, we);
  e && (s = t.round(s)),
    a.setRelative(n, we, s, o),
    a.touch(n),
    (t.rp0 = t.rp1 = r);
}
function sr(e, t) {
  var r = t.z2,
    n = r.length - 2,
    a,
    o,
    s;
  exports.DEBUG && console.log(t.step, "IUP[" + e.axis + "]");
  for (var u = 0; u < n; u++)
    (a = r[u]),
      !e.touched(a) &&
        ((o = a.prevTouched(e)),
        o !== a &&
          ((s = a.nextTouched(e)),
          o === s && e.setRelative(a, a, e.distance(o, o, !1, !0), e, !0),
          e.interpolate(a, o, s, e)));
}
function ir(e, t) {
  for (
    var r = t.stack,
      n = e ? t.rp1 : t.rp2,
      a = (e ? t.z0 : t.z1)[n],
      o = t.fv,
      s = t.pv,
      u = t.loop,
      i = t.z2;
    u--;

  ) {
    var p = r.pop(),
      l = i[p],
      h = s.distance(a, a, !1, !0);
    o.setRelative(l, l, h, s),
      o.touch(l),
      exports.DEBUG &&
        console.log(
          t.step,
          (t.loop > 1 ? "loop " + (t.loop - u) + ": " : "") +
            "SHP[" +
            (e ? "rp1" : "rp2") +
            "]",
          p
        );
  }
  t.loop = 1;
}
function ur(e, t) {
  var r = t.stack,
    n = e ? t.rp1 : t.rp2,
    a = (e ? t.z0 : t.z1)[n],
    o = t.fv,
    s = t.pv,
    u = r.pop(),
    i = t.z2[t.contours[u]],
    p = i;
  exports.DEBUG && console.log(t.step, "SHC[" + e + "]", u);
  var l = s.distance(a, a, !1, !0);
  do p !== a && o.setRelative(p, p, l, s), (p = p.nextPointOnContour);
  while (p !== i);
}
function lr(e, t) {
  var r = t.stack,
    n = e ? t.rp1 : t.rp2,
    a = (e ? t.z0 : t.z1)[n],
    o = t.fv,
    s = t.pv,
    u = r.pop();
  exports.DEBUG && console.log(t.step, "SHZ[" + e + "]", u);
  var i;
  switch (u) {
    case 0:
      i = t.tZone;
      break;
    case 1:
      i = t.gZone;
      break;
    default:
      throw new Error("Invalid zone");
  }
  for (var p, l = s.distance(a, a, !1, !0), h = i.length - 2, c = 0; c < h; c++)
    (p = i[c]), o.setRelative(p, p, l, s);
}
function Mo(e) {
  for (
    var t = e.stack, r = e.loop, n = e.fv, a = t.pop() / 64, o = e.z2;
    r--;

  ) {
    var s = t.pop(),
      u = o[s];
    exports.DEBUG &&
      console.log(
        e.step,
        (e.loop > 1 ? "loop " + (e.loop - r) + ": " : "") + "SHPIX[]",
        s,
        a
      ),
      n.setRelative(u, u, a),
      n.touch(u);
  }
  e.loop = 1;
}
function Go(e) {
  for (
    var t = e.stack,
      r = e.rp1,
      n = e.rp2,
      a = e.loop,
      o = e.z0[r],
      s = e.z1[n],
      u = e.fv,
      i = e.dpv,
      p = e.z2;
    a--;

  ) {
    var l = t.pop(),
      h = p[l];
    exports.DEBUG &&
      console.log(
        e.step,
        (e.loop > 1 ? "loop " + (e.loop - a) + ": " : "") + "IP[]",
        l,
        r,
        "<->",
        n
      ),
      u.interpolate(h, o, s, i),
      u.touch(h);
  }
  e.loop = 1;
}
function pr(e, t) {
  var r = t.stack,
    n = r.pop() / 64,
    a = r.pop(),
    o = t.z1[a],
    s = t.z0[t.rp0],
    u = t.fv,
    i = t.pv;
  u.setRelative(o, s, n, i),
    u.touch(o),
    exports.DEBUG && console.log(t.step, "MSIRP[" + e + "]", n, a),
    (t.rp1 = t.rp0),
    (t.rp2 = a),
    e && (t.rp0 = a);
}
function Po(e) {
  for (
    var t = e.stack,
      r = e.rp0,
      n = e.z0[r],
      a = e.loop,
      o = e.fv,
      s = e.pv,
      u = e.z1;
    a--;

  ) {
    var i = t.pop(),
      p = u[i];
    exports.DEBUG &&
      console.log(
        e.step,
        (e.loop > 1 ? "loop " + (e.loop - a) + ": " : "") + "ALIGNRP[]",
        i
      ),
      o.setRelative(p, n, 0, s),
      o.touch(p);
  }
  e.loop = 1;
}
function No(e) {
  exports.DEBUG && console.log(e.step, "RTDG[]"), (e.round = to);
}
function cr(e, t) {
  var r = t.stack,
    n = r.pop(),
    a = r.pop(),
    o = t.z0[a],
    s = t.fv,
    u = t.pv,
    i = t.cvt[n];
  exports.DEBUG && console.log(t.step, "MIAP[" + e + "]", n, "(", i, ")", a);
  var p = u.distance(o, we);
  e && (Math.abs(p - i) < t.cvCutIn && (p = i), (p = t.round(p))),
    s.setRelative(o, we, p, u),
    t.zp0 === 0 && ((o.xo = o.x), (o.yo = o.y)),
    s.touch(o),
    (t.rp0 = t.rp1 = a);
}
function Ho(e) {
  var t = e.prog,
    r = e.ip,
    n = e.stack,
    a = t[++r];
  exports.DEBUG && console.log(e.step, "NPUSHB[]", a);
  for (var o = 0; o < a; o++) n.push(t[++r]);
  e.ip = r;
}
function zo(e) {
  var t = e.ip,
    r = e.prog,
    n = e.stack,
    a = r[++t];
  exports.DEBUG && console.log(e.step, "NPUSHW[]", a);
  for (var o = 0; o < a; o++) {
    var s = (r[++t] << 8) | r[++t];
    s & 32768 && (s = -((s ^ 65535) + 1)), n.push(s);
  }
  e.ip = t;
}
function Wo(e) {
  var t = e.stack,
    r = e.store;
  r || (r = e.store = []);
  var n = t.pop(),
    a = t.pop();
  exports.DEBUG && console.log(e.step, "WS", n, a), (r[a] = n);
}
function _o(e) {
  var t = e.stack,
    r = e.store,
    n = t.pop();
  exports.DEBUG && console.log(e.step, "RS", n);
  var a = (r && r[n]) || 0;
  t.push(a);
}
function qo(e) {
  var t = e.stack,
    r = t.pop(),
    n = t.pop();
  exports.DEBUG && console.log(e.step, "WCVTP", r, n), (e.cvt[n] = r / 64);
}
function Xo(e) {
  var t = e.stack,
    r = t.pop();
  exports.DEBUG && console.log(e.step, "RCVT", r), t.push(e.cvt[r] * 64);
}
function hr(e, t) {
  var r = t.stack,
    n = r.pop(),
    a = t.z2[n];
  exports.DEBUG && console.log(t.step, "GC[" + e + "]", n),
    r.push(t.dpv.distance(a, we, e, !1) * 64);
}
function fr(e, t) {
  var r = t.stack,
    n = r.pop(),
    a = r.pop(),
    o = t.z1[n],
    s = t.z0[a],
    u = t.dpv.distance(s, o, e, e);
  exports.DEBUG && console.log(t.step, "MD[" + e + "]", n, a, "->", u),
    t.stack.push(Math.round(u * 64));
}
function Vo(e) {
  exports.DEBUG && console.log(e.step, "MPPEM[]"), e.stack.push(e.ppem);
}
function Yo(e) {
  exports.DEBUG && console.log(e.step, "FLIPON[]"), (e.autoFlip = !0);
}
function jo(e) {
  var t = e.stack,
    r = t.pop(),
    n = t.pop();
  exports.DEBUG && console.log(e.step, "LT[]", r, n), t.push(n < r ? 1 : 0);
}
function Zo(e) {
  var t = e.stack,
    r = t.pop(),
    n = t.pop();
  exports.DEBUG && console.log(e.step, "LTEQ[]", r, n), t.push(n <= r ? 1 : 0);
}
function Qo(e) {
  var t = e.stack,
    r = t.pop(),
    n = t.pop();
  exports.DEBUG && console.log(e.step, "GT[]", r, n), t.push(n > r ? 1 : 0);
}
function Ko(e) {
  var t = e.stack,
    r = t.pop(),
    n = t.pop();
  exports.DEBUG && console.log(e.step, "GTEQ[]", r, n), t.push(n >= r ? 1 : 0);
}
function Jo(e) {
  var t = e.stack,
    r = t.pop(),
    n = t.pop();
  exports.DEBUG && console.log(e.step, "EQ[]", r, n), t.push(r === n ? 1 : 0);
}
function $o(e) {
  var t = e.stack,
    r = t.pop(),
    n = t.pop();
  exports.DEBUG && console.log(e.step, "NEQ[]", r, n), t.push(r !== n ? 1 : 0);
}
function es(e) {
  var t = e.stack,
    r = t.pop();
  exports.DEBUG && console.log(e.step, "ODD[]", r),
    t.push(Math.trunc(r) % 2 ? 1 : 0);
}
function ts(e) {
  var t = e.stack,
    r = t.pop();
  exports.DEBUG && console.log(e.step, "EVEN[]", r),
    t.push(Math.trunc(r) % 2 ? 0 : 1);
}
function rs(e) {
  var t = e.stack.pop();
  exports.DEBUG && console.log(e.step, "IF[]", t),
    t || (pn(e, !0), exports.DEBUG && console.log(e.step, "EIF[]"));
}
function ns(e) {
  exports.DEBUG && console.log(e.step, "EIF[]");
}
function as(e) {
  var t = e.stack,
    r = t.pop(),
    n = t.pop();
  exports.DEBUG && console.log(e.step, "AND[]", r, n), t.push(r && n ? 1 : 0);
}
function os(e) {
  var t = e.stack,
    r = t.pop(),
    n = t.pop();
  exports.DEBUG && console.log(e.step, "OR[]", r, n), t.push(r || n ? 1 : 0);
}
function ss(e) {
  var t = e.stack,
    r = t.pop();
  exports.DEBUG && console.log(e.step, "NOT[]", r), t.push(r ? 0 : 1);
}
function it(e, t) {
  var r = t.stack,
    n = r.pop(),
    a = t.fv,
    o = t.pv,
    s = t.ppem,
    u = t.deltaBase + (e - 1) * 16,
    i = t.deltaShift,
    p = t.z0;
  exports.DEBUG && console.log(t.step, "DELTAP[" + e + "]", n, r);
  for (var l = 0; l < n; l++) {
    var h = r.pop(),
      c = r.pop(),
      f = u + ((c & 240) >> 4);
    if (f === s) {
      var v = (c & 15) - 8;
      v >= 0 && v++,
        exports.DEBUG && console.log(t.step, "DELTAPFIX", h, "by", v * i);
      var x = p[h];
      a.setRelative(x, x, v * i, o);
    }
  }
}
function is(e) {
  var t = e.stack,
    r = t.pop();
  exports.DEBUG && console.log(e.step, "SDB[]", r), (e.deltaBase = r);
}
function us(e) {
  var t = e.stack,
    r = t.pop();
  exports.DEBUG && console.log(e.step, "SDS[]", r),
    (e.deltaShift = Math.pow(0.5, r));
}
function ls(e) {
  var t = e.stack,
    r = t.pop(),
    n = t.pop();
  exports.DEBUG && console.log(e.step, "ADD[]", r, n), t.push(n + r);
}
function ps(e) {
  var t = e.stack,
    r = t.pop(),
    n = t.pop();
  exports.DEBUG && console.log(e.step, "SUB[]", r, n), t.push(n - r);
}
function cs(e) {
  var t = e.stack,
    r = t.pop(),
    n = t.pop();
  exports.DEBUG && console.log(e.step, "DIV[]", r, n), t.push((n * 64) / r);
}
function hs(e) {
  var t = e.stack,
    r = t.pop(),
    n = t.pop();
  exports.DEBUG && console.log(e.step, "MUL[]", r, n), t.push((n * r) / 64);
}
function fs(e) {
  var t = e.stack,
    r = t.pop();
  exports.DEBUG && console.log(e.step, "ABS[]", r), t.push(Math.abs(r));
}
function ds(e) {
  var t = e.stack,
    r = t.pop();
  exports.DEBUG && console.log(e.step, "NEG[]", r), t.push(-r);
}
function vs(e) {
  var t = e.stack,
    r = t.pop();
  exports.DEBUG && console.log(e.step, "FLOOR[]", r),
    t.push(Math.floor(r / 64) * 64);
}
function gs(e) {
  var t = e.stack,
    r = t.pop();
  exports.DEBUG && console.log(e.step, "CEILING[]", r),
    t.push(Math.ceil(r / 64) * 64);
}
function _e(e, t) {
  var r = t.stack,
    n = r.pop();
  exports.DEBUG && console.log(t.step, "ROUND[]"), r.push(t.round(n / 64) * 64);
}
function ms(e) {
  var t = e.stack,
    r = t.pop(),
    n = t.pop();
  exports.DEBUG && console.log(e.step, "WCVTF[]", r, n),
    (e.cvt[n] = (r * e.ppem) / e.font.unitsPerEm);
}
function ut(e, t) {
  var r = t.stack,
    n = r.pop(),
    a = t.ppem,
    o = t.deltaBase + (e - 1) * 16,
    s = t.deltaShift;
  exports.DEBUG && console.log(t.step, "DELTAC[" + e + "]", n, r);
  for (var u = 0; u < n; u++) {
    var i = r.pop(),
      p = r.pop(),
      l = o + ((p & 240) >> 4);
    if (l === a) {
      var h = (p & 15) - 8;
      h >= 0 && h++;
      var c = h * s;
      exports.DEBUG && console.log(t.step, "DELTACFIX", i, "by", c),
        (t.cvt[i] += c);
    }
  }
}
function ys(e) {
  var t = e.stack.pop();
  exports.DEBUG && console.log(e.step, "SROUND[]", t), (e.round = ln);
  var r;
  switch (t & 192) {
    case 0:
      r = 0.5;
      break;
    case 64:
      r = 1;
      break;
    case 128:
      r = 2;
      break;
    default:
      throw new Error("invalid SROUND value");
  }
  switch (((e.srPeriod = r), t & 48)) {
    case 0:
      e.srPhase = 0;
      break;
    case 16:
      e.srPhase = 0.25 * r;
      break;
    case 32:
      e.srPhase = 0.5 * r;
      break;
    case 48:
      e.srPhase = 0.75 * r;
      break;
    default:
      throw new Error("invalid SROUND value");
  }
  (t &= 15),
    t === 0 ? (e.srThreshold = 0) : (e.srThreshold = (t / 8 - 0.5) * r);
}
function xs(e) {
  var t = e.stack.pop();
  exports.DEBUG && console.log(e.step, "S45ROUND[]", t), (e.round = ln);
  var r;
  switch (t & 192) {
    case 0:
      r = Math.sqrt(2) / 2;
      break;
    case 64:
      r = Math.sqrt(2);
      break;
    case 128:
      r = 2 * Math.sqrt(2);
      break;
    default:
      throw new Error("invalid S45ROUND value");
  }
  switch (((e.srPeriod = r), t & 48)) {
    case 0:
      e.srPhase = 0;
      break;
    case 16:
      e.srPhase = 0.25 * r;
      break;
    case 32:
      e.srPhase = 0.5 * r;
      break;
    case 48:
      e.srPhase = 0.75 * r;
      break;
    default:
      throw new Error("invalid S45ROUND value");
  }
  (t &= 15),
    t === 0 ? (e.srThreshold = 0) : (e.srThreshold = (t / 8 - 0.5) * r);
}
function bs(e) {
  exports.DEBUG && console.log(e.step, "ROFF[]"), (e.round = eo);
}
function Ss(e) {
  exports.DEBUG && console.log(e.step, "RUTG[]"), (e.round = no);
}
function Es(e) {
  exports.DEBUG && console.log(e.step, "RDTG[]"), (e.round = ao);
}
function Cs(e) {
  var t = e.stack.pop();
  exports.DEBUG && console.log(e.step, "SCANCTRL[]", t);
}
function dr(e, t) {
  var r = t.stack,
    n = r.pop(),
    a = r.pop(),
    o = t.z2[n],
    s = t.z1[a];
  exports.DEBUG && console.log(t.step, "SDPVTL[" + e + "]", n, a);
  var u, i;
  e ? ((u = o.y - s.y), (i = s.x - o.x)) : ((u = s.x - o.x), (i = s.y - o.y)),
    (t.dpv = Me(u, i));
}
function Ts(e) {
  var t = e.stack,
    r = t.pop(),
    n = 0;
  exports.DEBUG && console.log(e.step, "GETINFO[]", r),
    r & 1 && (n = 35),
    r & 32 && (n |= 4096),
    t.push(n);
}
function ks(e) {
  var t = e.stack,
    r = t.pop(),
    n = t.pop(),
    a = t.pop();
  exports.DEBUG && console.log(e.step, "ROLL[]"),
    t.push(n),
    t.push(r),
    t.push(a);
}
function Us(e) {
  var t = e.stack,
    r = t.pop(),
    n = t.pop();
  exports.DEBUG && console.log(e.step, "MAX[]", r, n), t.push(Math.max(n, r));
}
function Ds(e) {
  var t = e.stack,
    r = t.pop(),
    n = t.pop();
  exports.DEBUG && console.log(e.step, "MIN[]", r, n), t.push(Math.min(n, r));
}
function As(e) {
  var t = e.stack.pop();
  exports.DEBUG && console.log(e.step, "SCANTYPE[]", t);
}
function Os(e) {
  var t = e.stack.pop(),
    r = e.stack.pop();
  switch ((exports.DEBUG && console.log(e.step, "INSTCTRL[]", t, r), t)) {
    case 1:
      e.inhibitGridFit = !!r;
      return;
    case 2:
      e.ignoreCvt = !!r;
      return;
    default:
      throw new Error("invalid INSTCTRL[] selector");
  }
}
function he(e, t) {
  var r = t.stack,
    n = t.prog,
    a = t.ip;
  exports.DEBUG && console.log(t.step, "PUSHB[" + e + "]");
  for (var o = 0; o < e; o++) r.push(n[++a]);
  t.ip = a;
}
function fe(e, t) {
  var r = t.ip,
    n = t.prog,
    a = t.stack;
  exports.DEBUG && console.log(t.ip, "PUSHW[" + e + "]");
  for (var o = 0; o < e; o++) {
    var s = (n[++r] << 8) | n[++r];
    s & 32768 && (s = -((s ^ 65535) + 1)), a.push(s);
  }
  t.ip = r;
}
function E(e, t, r, n, a, o) {
  var s = o.stack,
    u = e && s.pop(),
    i = s.pop(),
    p = o.rp0,
    l = o.z0[p],
    h = o.z1[i],
    c = o.minDis,
    f = o.fv,
    v = o.dpv,
    x,
    m,
    y,
    U;
  (m = x = v.distance(h, l, !0, !0)),
    (y = m >= 0 ? 1 : -1),
    (m = Math.abs(m)),
    e && ((U = o.cvt[u]), n && Math.abs(m - U) < o.cvCutIn && (m = U)),
    r && m < c && (m = c),
    n && (m = o.round(m)),
    f.setRelative(h, l, y * m, v),
    f.touch(h),
    exports.DEBUG &&
      console.log(
        o.step,
        (e ? "MIRP[" : "MDRP[") +
          (t ? "M" : "m") +
          (r ? ">" : "_") +
          (n ? "R" : "_") +
          (a === 0 ? "Gr" : a === 1 ? "Bl" : a === 2 ? "Wh" : "") +
          "]",
        e ? u + "(" + o.cvt[u] + "," + U + ")" : "",
        i,
        "(d =",
        x,
        "->",
        y * m,
        ")"
      ),
    (o.rp1 = o.rp0),
    (o.rp2 = i),
    t && (o.rp0 = i);
}
an = [
  er.bind(void 0, le),
  er.bind(void 0, ie),
  tr.bind(void 0, le),
  tr.bind(void 0, ie),
  rr.bind(void 0, le),
  rr.bind(void 0, ie),
  nr.bind(void 0, 0),
  nr.bind(void 0, 1),
  ar.bind(void 0, 0),
  ar.bind(void 0, 1),
  so,
  io,
  uo,
  lo,
  po,
  co,
  ho,
  fo,
  vo,
  go,
  mo,
  yo,
  xo,
  bo,
  So,
  Eo,
  Co,
  To,
  ko,
  Uo,
  void 0,
  void 0,
  Do,
  st,
  Ao,
  Oo,
  Bo,
  Fo,
  Lo,
  void 0,
  void 0,
  void 0,
  Ro,
  wo,
  Io,
  void 0,
  or.bind(void 0, 0),
  or.bind(void 0, 1),
  sr.bind(void 0, le),
  sr.bind(void 0, ie),
  ir.bind(void 0, 0),
  ir.bind(void 0, 1),
  ur.bind(void 0, 0),
  ur.bind(void 0, 1),
  lr.bind(void 0, 0),
  lr.bind(void 0, 1),
  Mo,
  Go,
  pr.bind(void 0, 0),
  pr.bind(void 0, 1),
  Po,
  No,
  cr.bind(void 0, 0),
  cr.bind(void 0, 1),
  Ho,
  zo,
  Wo,
  _o,
  qo,
  Xo,
  hr.bind(void 0, 0),
  hr.bind(void 0, 1),
  void 0,
  fr.bind(void 0, 0),
  fr.bind(void 0, 1),
  Vo,
  void 0,
  Yo,
  void 0,
  void 0,
  jo,
  Zo,
  Qo,
  Ko,
  Jo,
  $o,
  es,
  ts,
  rs,
  ns,
  as,
  os,
  ss,
  it.bind(void 0, 1),
  is,
  us,
  ls,
  ps,
  cs,
  hs,
  fs,
  ds,
  vs,
  gs,
  _e.bind(void 0, 0),
  _e.bind(void 0, 1),
  _e.bind(void 0, 2),
  _e.bind(void 0, 3),
  void 0,
  void 0,
  void 0,
  void 0,
  ms,
  it.bind(void 0, 2),
  it.bind(void 0, 3),
  ut.bind(void 0, 1),
  ut.bind(void 0, 2),
  ut.bind(void 0, 3),
  ys,
  xs,
  void 0,
  void 0,
  bs,
  void 0,
  Ss,
  Es,
  st,
  st,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  Cs,
  dr.bind(void 0, 0),
  dr.bind(void 0, 1),
  Ts,
  void 0,
  ks,
  Us,
  Ds,
  As,
  Os,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  he.bind(void 0, 1),
  he.bind(void 0, 2),
  he.bind(void 0, 3),
  he.bind(void 0, 4),
  he.bind(void 0, 5),
  he.bind(void 0, 6),
  he.bind(void 0, 7),
  he.bind(void 0, 8),
  fe.bind(void 0, 1),
  fe.bind(void 0, 2),
  fe.bind(void 0, 3),
  fe.bind(void 0, 4),
  fe.bind(void 0, 5),
  fe.bind(void 0, 6),
  fe.bind(void 0, 7),
  fe.bind(void 0, 8),
  E.bind(void 0, 0, 0, 0, 0, 0),
  E.bind(void 0, 0, 0, 0, 0, 1),
  E.bind(void 0, 0, 0, 0, 0, 2),
  E.bind(void 0, 0, 0, 0, 0, 3),
  E.bind(void 0, 0, 0, 0, 1, 0),
  E.bind(void 0, 0, 0, 0, 1, 1),
  E.bind(void 0, 0, 0, 0, 1, 2),
  E.bind(void 0, 0, 0, 0, 1, 3),
  E.bind(void 0, 0, 0, 1, 0, 0),
  E.bind(void 0, 0, 0, 1, 0, 1),
  E.bind(void 0, 0, 0, 1, 0, 2),
  E.bind(void 0, 0, 0, 1, 0, 3),
  E.bind(void 0, 0, 0, 1, 1, 0),
  E.bind(void 0, 0, 0, 1, 1, 1),
  E.bind(void 0, 0, 0, 1, 1, 2),
  E.bind(void 0, 0, 0, 1, 1, 3),
  E.bind(void 0, 0, 1, 0, 0, 0),
  E.bind(void 0, 0, 1, 0, 0, 1),
  E.bind(void 0, 0, 1, 0, 0, 2),
  E.bind(void 0, 0, 1, 0, 0, 3),
  E.bind(void 0, 0, 1, 0, 1, 0),
  E.bind(void 0, 0, 1, 0, 1, 1),
  E.bind(void 0, 0, 1, 0, 1, 2),
  E.bind(void 0, 0, 1, 0, 1, 3),
  E.bind(void 0, 0, 1, 1, 0, 0),
  E.bind(void 0, 0, 1, 1, 0, 1),
  E.bind(void 0, 0, 1, 1, 0, 2),
  E.bind(void 0, 0, 1, 1, 0, 3),
  E.bind(void 0, 0, 1, 1, 1, 0),
  E.bind(void 0, 0, 1, 1, 1, 1),
  E.bind(void 0, 0, 1, 1, 1, 2),
  E.bind(void 0, 0, 1, 1, 1, 3),
  E.bind(void 0, 1, 0, 0, 0, 0),
  E.bind(void 0, 1, 0, 0, 0, 1),
  E.bind(void 0, 1, 0, 0, 0, 2),
  E.bind(void 0, 1, 0, 0, 0, 3),
  E.bind(void 0, 1, 0, 0, 1, 0),
  E.bind(void 0, 1, 0, 0, 1, 1),
  E.bind(void 0, 1, 0, 0, 1, 2),
  E.bind(void 0, 1, 0, 0, 1, 3),
  E.bind(void 0, 1, 0, 1, 0, 0),
  E.bind(void 0, 1, 0, 1, 0, 1),
  E.bind(void 0, 1, 0, 1, 0, 2),
  E.bind(void 0, 1, 0, 1, 0, 3),
  E.bind(void 0, 1, 0, 1, 1, 0),
  E.bind(void 0, 1, 0, 1, 1, 1),
  E.bind(void 0, 1, 0, 1, 1, 2),
  E.bind(void 0, 1, 0, 1, 1, 3),
  E.bind(void 0, 1, 1, 0, 0, 0),
  E.bind(void 0, 1, 1, 0, 0, 1),
  E.bind(void 0, 1, 1, 0, 0, 2),
  E.bind(void 0, 1, 1, 0, 0, 3),
  E.bind(void 0, 1, 1, 0, 1, 0),
  E.bind(void 0, 1, 1, 0, 1, 1),
  E.bind(void 0, 1, 1, 0, 1, 2),
  E.bind(void 0, 1, 1, 0, 1, 3),
  E.bind(void 0, 1, 1, 1, 0, 0),
  E.bind(void 0, 1, 1, 1, 0, 1),
  E.bind(void 0, 1, 1, 1, 0, 2),
  E.bind(void 0, 1, 1, 1, 0, 3),
  E.bind(void 0, 1, 1, 1, 1, 0),
  E.bind(void 0, 1, 1, 1, 1, 1),
  E.bind(void 0, 1, 1, 1, 1, 2),
  E.bind(void 0, 1, 1, 1, 1, 3),
];
function Ue(e) {
  (this.char = e), (this.state = {}), (this.activeState = null);
}
function Ot(e, t, r) {
  (this.contextName = r), (this.startIndex = e), (this.endOffset = t);
}
function Bs(e, t, r) {
  (this.contextName = e),
    (this.openRange = null),
    (this.ranges = []),
    (this.checkStart = t),
    (this.checkEnd = r);
}
function te(e, t) {
  (this.context = e),
    (this.index = t),
    (this.length = e.length),
    (this.current = e[t]),
    (this.backtrack = e.slice(0, t)),
    (this.lookahead = e.slice(t + 1));
}
function $e(e) {
  (this.eventId = e), (this.subscribers = []);
}
function Rs(e) {
  var t = this,
    r = [
      "start",
      "end",
      "next",
      "newToken",
      "contextStart",
      "contextEnd",
      "insertToken",
      "removeToken",
      "removeRange",
      "replaceToken",
      "replaceRange",
      "composeRUD",
      "updateContextsRanges",
    ];
  r.forEach(function (a) {
    Object.defineProperty(t.events, a, { value: new $e(a) });
  }),
    e &&
      r.forEach(function (a) {
        var o = e[a];
        typeof o == "function" && t.events[a].subscribe(o);
      });
  var n = [
    "insertToken",
    "removeToken",
    "removeRange",
    "replaceToken",
    "replaceRange",
    "composeRUD",
  ];
  n.forEach(function (a) {
    t.events[a].subscribe(t.updateContextsRanges);
  });
}
function L(e) {
  (this.tokens = []),
    (this.registeredContexts = {}),
    (this.contextCheckers = []),
    (this.events = {}),
    (this.registeredModifiers = []),
    Rs.call(this, e);
}
Ue.prototype.setState = function (e, t) {
  return (
    (this.state[e] = t),
    (this.activeState = { key: e, value: this.state[e] }),
    this.activeState
  );
};
Ue.prototype.getState = function (e) {
  return this.state[e] || null;
};
L.prototype.inboundIndex = function (e) {
  return e >= 0 && e < this.tokens.length;
};
L.prototype.composeRUD = function (e) {
  var t = this,
    r = !0,
    n = e.map(function (o) {
      return t[o[0]].apply(t, o.slice(1).concat(r));
    }),
    a = function (o) {
      return typeof o == "object" && o.hasOwnProperty("FAIL");
    };
  if (n.every(a))
    return {
      FAIL: "composeRUD: one or more operations hasn't completed successfully",
      report: n.filter(a),
    };
  this.dispatch("composeRUD", [
    n.filter(function (o) {
      return !a(o);
    }),
  ]);
};
L.prototype.replaceRange = function (e, t, r, n) {
  t = t !== null ? t : this.tokens.length;
  var a = r.every(function (s) {
    return s instanceof Ue;
  });
  if (!isNaN(e) && this.inboundIndex(e) && a) {
    var o = this.tokens.splice.apply(this.tokens, [e, t].concat(r));
    return n || this.dispatch("replaceToken", [e, t, r]), [o, r];
  } else return { FAIL: "replaceRange: invalid tokens or startIndex." };
};
L.prototype.replaceToken = function (e, t, r) {
  if (!isNaN(e) && this.inboundIndex(e) && t instanceof Ue) {
    var n = this.tokens.splice(e, 1, t);
    return r || this.dispatch("replaceToken", [e, t]), [n[0], t];
  } else return { FAIL: "replaceToken: invalid token or index." };
};
L.prototype.removeRange = function (e, t, r) {
  t = isNaN(t) ? this.tokens.length : t;
  var n = this.tokens.splice(e, t);
  return r || this.dispatch("removeRange", [n, e, t]), n;
};
L.prototype.removeToken = function (e, t) {
  if (!isNaN(e) && this.inboundIndex(e)) {
    var r = this.tokens.splice(e, 1);
    return t || this.dispatch("removeToken", [r, e]), r;
  } else return { FAIL: "removeToken: invalid token index." };
};
L.prototype.insertToken = function (e, t, r) {
  var n = e.every(function (a) {
    return a instanceof Ue;
  });
  return n
    ? (this.tokens.splice.apply(this.tokens, [t, 0].concat(e)),
      r || this.dispatch("insertToken", [e, t]),
      e)
    : { FAIL: "insertToken: invalid token(s)." };
};
L.prototype.registerModifier = function (e, t, r) {
  this.events.newToken.subscribe(function (n, a) {
    var o = [n, a],
      s = t === null || t.apply(this, o) === !0,
      u = [n, a];
    if (s) {
      var i = r.apply(this, u);
      n.setState(e, i);
    }
  }),
    this.registeredModifiers.push(e);
};
$e.prototype.subscribe = function (e) {
  return typeof e == "function"
    ? this.subscribers.push(e) - 1
    : { FAIL: "invalid '" + this.eventId + "' event handler" };
};
$e.prototype.unsubscribe = function (e) {
  this.subscribers.splice(e, 1);
};
te.prototype.setCurrentIndex = function (e) {
  (this.index = e),
    (this.current = this.context[e]),
    (this.backtrack = this.context.slice(0, e)),
    (this.lookahead = this.context.slice(e + 1));
};
te.prototype.get = function (e) {
  switch (!0) {
    case e === 0:
      return this.current;
    case e < 0 && Math.abs(e) <= this.backtrack.length:
      return this.backtrack.slice(e)[0];
    case e > 0 && e <= this.lookahead.length:
      return this.lookahead[e - 1];
    default:
      return null;
  }
};
L.prototype.rangeToText = function (e) {
  if (e instanceof Ot)
    return this.getRangeTokens(e)
      .map(function (t) {
        return t.char;
      })
      .join("");
};
L.prototype.getText = function () {
  return this.tokens
    .map(function (e) {
      return e.char;
    })
    .join("");
};
L.prototype.getContext = function (e) {
  var t = this.registeredContexts[e];
  return t || null;
};
L.prototype.on = function (e, t) {
  var r = this.events[e];
  return r ? r.subscribe(t) : null;
};
L.prototype.dispatch = function (e, t) {
  var r = this,
    n = this.events[e];
  n instanceof $e &&
    n.subscribers.forEach(function (a) {
      a.apply(r, t || []);
    });
};
L.prototype.registerContextChecker = function (e, t, r) {
  if (this.getContext(e))
    return { FAIL: "context name '" + e + "' is already registered." };
  if (typeof t != "function") return { FAIL: "missing context start check." };
  if (typeof r != "function") return { FAIL: "missing context end check." };
  var n = new Bs(e, t, r);
  return (this.registeredContexts[e] = n), this.contextCheckers.push(n), n;
};
L.prototype.getRangeTokens = function (e) {
  var t = e.startIndex + e.endOffset;
  return [].concat(this.tokens.slice(e.startIndex, t));
};
L.prototype.getContextRanges = function (e) {
  var t = this.getContext(e);
  return t
    ? t.ranges
    : { FAIL: "context checker '" + e + "' is not registered." };
};
L.prototype.resetContextsRanges = function () {
  var e = this.registeredContexts;
  for (var t in e)
    if (e.hasOwnProperty(t)) {
      var r = e[t];
      r.ranges = [];
    }
};
L.prototype.updateContextsRanges = function () {
  this.resetContextsRanges();
  for (
    var e = this.tokens.map(function (n) {
        return n.char;
      }),
      t = 0;
    t < e.length;
    t++
  ) {
    var r = new te(e, t);
    this.runContextCheck(r);
  }
  this.dispatch("updateContextsRanges", [this.registeredContexts]);
};
L.prototype.setEndOffset = function (e, t) {
  var r = this.getContext(t).openRange.startIndex,
    n = new Ot(r, e, t),
    a = this.getContext(t).ranges;
  return (
    (n.rangeId = t + "." + a.length),
    a.push(n),
    (this.getContext(t).openRange = null),
    n
  );
};
L.prototype.runContextCheck = function (e) {
  var t = this,
    r = e.index;
  this.contextCheckers.forEach(function (n) {
    var a = n.contextName,
      o = t.getContext(a).openRange;
    if (
      (!o &&
        n.checkStart(e) &&
        ((o = new Ot(r, null, a)),
        (t.getContext(a).openRange = o),
        t.dispatch("contextStart", [a, r])),
      !!o && n.checkEnd(e))
    ) {
      var s = r - o.startIndex + 1,
        u = t.setEndOffset(s, a);
      t.dispatch("contextEnd", [a, u]);
    }
  });
};
L.prototype.tokenize = function (e) {
  (this.tokens = []), this.resetContextsRanges();
  var t = Array.from(e);
  this.dispatch("start");
  for (var r = 0; r < t.length; r++) {
    var n = t[r],
      a = new te(t, r);
    this.dispatch("next", [a]), this.runContextCheck(a);
    var o = new Ue(n);
    this.tokens.push(o), this.dispatch("newToken", [o, a]);
  }
  return this.dispatch("end", [this.tokens]), this.tokens;
};
function ge(e) {
  return /[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(e);
}
function cn(e) {
  return /[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(
    e
  );
}
function me(e) {
  return /[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(
    e
  );
}
function Xe(e) {
  return /[A-z]/.test(e);
}
function ws(e) {
  return /\s/.test(e);
}
function K(e) {
  (this.font = e), (this.features = {});
}
function be(e) {
  (this.id = e.id), (this.tag = e.tag), (this.substitution = e.substitution);
}
function Ge(e, t) {
  if (!e) return -1;
  switch (t.format) {
    case 1:
      return t.glyphs.indexOf(e);
    case 2:
      for (var r = t.ranges, n = 0; n < r.length; n++) {
        var a = r[n];
        if (e >= a.start && e <= a.end) {
          var o = e - a.start;
          return a.index + o;
        }
      }
      break;
    default:
      return -1;
  }
  return -1;
}
function Fs(e, t) {
  var r = Ge(e, t.coverage);
  return r === -1 ? null : e + t.deltaGlyphId;
}
function Ls(e, t) {
  var r = Ge(e, t.coverage);
  return r === -1 ? null : t.substitute[r];
}
function lt(e, t) {
  for (var r = [], n = 0; n < e.length; n++) {
    var a = e[n],
      o = t.current;
    o = Array.isArray(o) ? o[0] : o;
    var s = Ge(o, a);
    s !== -1 && r.push(s);
  }
  return r.length !== e.length ? -1 : r;
}
function Is(e, t) {
  var r =
    t.inputCoverage.length +
    t.lookaheadCoverage.length +
    t.backtrackCoverage.length;
  if (e.context.length < r) return [];
  var n = lt(t.inputCoverage, e);
  if (n === -1) return [];
  var a = t.inputCoverage.length - 1;
  if (e.lookahead.length < t.lookaheadCoverage.length) return [];
  for (var o = e.lookahead.slice(a); o.length && me(o[0].char); ) o.shift();
  var s = new te(o, 0),
    u = lt(t.lookaheadCoverage, s),
    i = [].concat(e.backtrack);
  for (i.reverse(); i.length && me(i[0].char); ) i.shift();
  if (i.length < t.backtrackCoverage.length) return [];
  var p = new te(i, 0),
    l = lt(t.backtrackCoverage, p),
    h =
      n.length === t.inputCoverage.length &&
      u.length === t.lookaheadCoverage.length &&
      l.length === t.backtrackCoverage.length,
    c = [];
  if (h)
    for (var f = 0; f < t.lookupRecords.length; f++)
      for (
        var v = t.lookupRecords[f],
          x = v.lookupListIndex,
          m = this.getLookupByIndex(x),
          y = 0;
        y < m.subtables.length;
        y++
      ) {
        var U = m.subtables[y],
          S = this.getLookupMethod(m, U),
          B = this.getSubstitutionType(m, U);
        if (B === "12")
          for (var A = 0; A < n.length; A++) {
            var w = e.get(A),
              O = S(w);
            O && c.push(O);
          }
      }
  return c;
}
function Ms(e, t) {
  var r = e.current,
    n = Ge(r, t.coverage);
  if (n === -1) return null;
  for (var a, o = t.ligatureSets[n], s = 0; s < o.length; s++) {
    a = o[s];
    for (var u = 0; u < a.components.length; u++) {
      var i = e.lookahead[u],
        p = a.components[u];
      if (i !== p) break;
      if (u === a.components.length - 1) return a;
    }
  }
  return null;
}
function Gs(e, t) {
  var r = Ge(e, t.coverage);
  return r === -1 ? null : t.sequences[r];
}
K.prototype.getDefaultScriptFeaturesIndexes = function () {
  for (var e = this.font.tables.gsub.scripts, t = 0; t < e.length; t++) {
    var r = e[t];
    if (r.tag === "DFLT") return r.script.defaultLangSys.featureIndexes;
  }
  return [];
};
K.prototype.getScriptFeaturesIndexes = function (e) {
  var t = this.font.tables;
  if (!t.gsub) return [];
  if (!e) return this.getDefaultScriptFeaturesIndexes();
  for (var r = this.font.tables.gsub.scripts, n = 0; n < r.length; n++) {
    var a = r[n];
    if (a.tag === e && a.script.defaultLangSys)
      return a.script.defaultLangSys.featureIndexes;
    var o = a.langSysRecords;
    if (o)
      for (var s = 0; s < o.length; s++) {
        var u = o[s];
        if (u.tag === e) {
          var i = u.langSys;
          return i.featureIndexes;
        }
      }
  }
  return this.getDefaultScriptFeaturesIndexes();
};
K.prototype.mapTagsToFeatures = function (e, t) {
  for (var r = {}, n = 0; n < e.length; n++) {
    var a = e[n].tag,
      o = e[n].feature;
    r[a] = o;
  }
  this.features[t].tags = r;
};
K.prototype.getScriptFeatures = function (e) {
  var t = this.features[e];
  if (this.features.hasOwnProperty(e)) return t;
  var r = this.getScriptFeaturesIndexes(e);
  if (!r) return null;
  var n = this.font.tables.gsub;
  return (
    (t = r.map(function (a) {
      return n.features[a];
    })),
    (this.features[e] = t),
    this.mapTagsToFeatures(t, e),
    t
  );
};
K.prototype.getSubstitutionType = function (e, t) {
  var r = e.lookupType.toString(),
    n = t.substFormat.toString();
  return r + n;
};
K.prototype.getLookupMethod = function (e, t) {
  var r = this,
    n = this.getSubstitutionType(e, t);
  switch (n) {
    case "11":
      return function (a) {
        return Fs.apply(r, [a, t]);
      };
    case "12":
      return function (a) {
        return Ls.apply(r, [a, t]);
      };
    case "63":
      return function (a) {
        return Is.apply(r, [a, t]);
      };
    case "41":
      return function (a) {
        return Ms.apply(r, [a, t]);
      };
    case "21":
      return function (a) {
        return Gs.apply(r, [a, t]);
      };
    default:
      throw new Error(
        "lookupType: " +
          e.lookupType +
          " - substFormat: " +
          t.substFormat +
          " is not yet supported"
      );
  }
};
K.prototype.lookupFeature = function (e) {
  var t = e.contextParams,
    r = t.index,
    n = this.getFeature({ tag: e.tag, script: e.script });
  if (!n)
    return new Error(
      "font '" +
        this.font.names.fullName.en +
        "' doesn't support feature '" +
        e.tag +
        "' for script '" +
        e.script +
        "'."
    );
  for (
    var a = this.getFeatureLookups(n), o = [].concat(t.context), s = 0;
    s < a.length;
    s++
  )
    for (
      var u = a[s], i = this.getLookupSubtables(u), p = 0;
      p < i.length;
      p++
    ) {
      var l = i[p],
        h = this.getSubstitutionType(u, l),
        c = this.getLookupMethod(u, l),
        f = void 0;
      switch (h) {
        case "11":
          (f = c(t.current)),
            f &&
              o.splice(r, 1, new be({ id: 11, tag: e.tag, substitution: f }));
          break;
        case "12":
          (f = c(t.current)),
            f &&
              o.splice(r, 1, new be({ id: 12, tag: e.tag, substitution: f }));
          break;
        case "63":
          (f = c(t)),
            Array.isArray(f) &&
              f.length &&
              o.splice(r, 1, new be({ id: 63, tag: e.tag, substitution: f }));
          break;
        case "41":
          (f = c(t)),
            f &&
              o.splice(r, 1, new be({ id: 41, tag: e.tag, substitution: f }));
          break;
        case "21":
          (f = c(t.current)),
            f &&
              o.splice(r, 1, new be({ id: 21, tag: e.tag, substitution: f }));
          break;
      }
      (t = new te(o, r)), !(Array.isArray(f) && !f.length) && (f = null);
    }
  return o.length ? o : null;
};
K.prototype.supports = function (e) {
  if (!e.script) return !1;
  this.getScriptFeatures(e.script);
  var t = this.features.hasOwnProperty(e.script);
  if (!e.tag) return t;
  var r = this.features[e.script].some(function (n) {
    return n.tag === e.tag;
  });
  return t && r;
};
K.prototype.getLookupSubtables = function (e) {
  return e.subtables || null;
};
K.prototype.getLookupByIndex = function (e) {
  var t = this.font.tables.gsub.lookups;
  return t[e] || null;
};
K.prototype.getFeatureLookups = function (e) {
  return e.lookupListIndexes.map(this.getLookupByIndex.bind(this));
};
K.prototype.getFeature = function (e) {
  if (!this.font) return { FAIL: "No font was found" };
  this.features.hasOwnProperty(e.script) || this.getScriptFeatures(e.script);
  var t = this.features[e.script];
  return t
    ? t.tags[e.tag]
      ? this.features[e.script].tags[e.tag]
      : null
    : { FAIL: "No feature for script " + e.script };
};
function Ps(e) {
  var t = e.current,
    r = e.get(-1);
  return (r === null && ge(t)) || (!ge(r) && ge(t));
}
function Ns(e) {
  var t = e.get(1);
  return t === null || !ge(t);
}
var Hs = { startCheck: Ps, endCheck: Ns };
function zs(e) {
  var t = e.current,
    r = e.get(-1);
  return (ge(t) || me(t)) && !ge(r);
}
function Ws(e) {
  var t = e.get(1);
  switch (!0) {
    case t === null:
      return !0;
    case !ge(t) && !me(t):
      var r = ws(t);
      if (!r) return !0;
      if (r) {
        var n = !1;
        if (
          ((n = e.lookahead.some(function (a) {
            return ge(a) || me(a);
          })),
          !n)
        )
          return !0;
      }
      break;
    default:
      return !1;
  }
}
var _s = { startCheck: zs, endCheck: Ws };
function qs(e, t, r) {
  t[r].setState(e.tag, e.substitution);
}
function Xs(e, t, r) {
  t[r].setState(e.tag, e.substitution);
}
function Vs(e, t, r) {
  e.substitution.forEach(function (n, a) {
    var o = t[r + a];
    o.setState(e.tag, n);
  });
}
function Ys(e, t, r) {
  var n = t[r];
  n.setState(e.tag, e.substitution.ligGlyph);
  for (var a = e.substitution.components.length, o = 0; o < a; o++)
    (n = t[r + o + 1]), n.setState("deleted", !0);
}
var vr = { 11: qs, 12: Xs, 63: Vs, 41: Ys };
function Bt(e, t, r) {
  e instanceof be && vr[e.id] && vr[e.id](e, t, r);
}
function js(e) {
  for (var t = [].concat(e.backtrack), r = t.length - 1; r >= 0; r--) {
    var n = t[r],
      a = cn(n),
      o = me(n);
    if (!a && !o) return !0;
    if (a) return !1;
  }
  return !1;
}
function Zs(e) {
  if (cn(e.current)) return !1;
  for (var t = 0; t < e.lookahead.length; t++) {
    var r = e.lookahead[t],
      n = me(r);
    if (!n) return !0;
  }
  return !1;
}
function Qs(e) {
  var t = this,
    r = "arab",
    n = this.featuresTags[r],
    a = this.tokenizer.getRangeTokens(e);
  if (a.length !== 1) {
    var o = new te(
        a.map(function (u) {
          return u.getState("glyphIndex");
        }),
        0
      ),
      s = new te(
        a.map(function (u) {
          return u.char;
        }),
        0
      );
    a.forEach(function (u, i) {
      if (!me(u.char)) {
        o.setCurrentIndex(i), s.setCurrentIndex(i);
        var p = 0;
        js(s) && (p |= 1), Zs(s) && (p |= 2);
        var l;
        switch (p) {
          case 1:
            l = "fina";
            break;
          case 2:
            l = "init";
            break;
          case 3:
            l = "medi";
            break;
        }
        if (n.indexOf(l) !== -1) {
          var h = t.query.lookupFeature({
            tag: l,
            script: r,
            contextParams: o,
          });
          if (h instanceof Error) return console.info(h.message);
          h.forEach(function (c, f) {
            c instanceof be && (Bt(c, a, f), (o.context[f] = c.substitution));
          });
        }
      }
    });
  }
}
function gr(e, t) {
  var r = e.map(function (n) {
    return n.activeState.value;
  });
  return new te(r, t || 0);
}
function Ks(e) {
  var t = this,
    r = "arab",
    n = this.tokenizer.getRangeTokens(e),
    a = gr(n);
  a.context.forEach(function (o, s) {
    a.setCurrentIndex(s);
    var u = t.query.lookupFeature({ tag: "rlig", script: r, contextParams: a });
    u.length &&
      (u.forEach(function (i) {
        return Bt(i, n, s);
      }),
      (a = gr(n)));
  });
}
function Js(e) {
  var t = e.current,
    r = e.get(-1);
  return (r === null && Xe(t)) || (!Xe(r) && Xe(t));
}
function $s(e) {
  var t = e.get(1);
  return t === null || !Xe(t);
}
var ei = { startCheck: Js, endCheck: $s };
function mr(e, t) {
  var r = e.map(function (n) {
    return n.activeState.value;
  });
  return new te(r, t || 0);
}
function ti(e) {
  var t = this,
    r = "latn",
    n = this.tokenizer.getRangeTokens(e),
    a = mr(n);
  a.context.forEach(function (o, s) {
    a.setCurrentIndex(s);
    var u = t.query.lookupFeature({ tag: "liga", script: r, contextParams: a });
    u.length &&
      (u.forEach(function (i) {
        return Bt(i, n, s);
      }),
      (a = mr(n)));
  });
}
function ae(e) {
  (this.baseDir = e || "ltr"),
    (this.tokenizer = new L()),
    (this.featuresTags = {});
}
ae.prototype.setText = function (e) {
  this.text = e;
};
ae.prototype.contextChecks = {
  latinWordCheck: ei,
  arabicWordCheck: Hs,
  arabicSentenceCheck: _s,
};
function pt(e) {
  var t = this.contextChecks[e + "Check"];
  return this.tokenizer.registerContextChecker(e, t.startCheck, t.endCheck);
}
function ri() {
  return (
    pt.call(this, "latinWord"),
    pt.call(this, "arabicWord"),
    pt.call(this, "arabicSentence"),
    this.tokenizer.tokenize(this.text)
  );
}
function ni() {
  var e = this,
    t = this.tokenizer.getContextRanges("arabicSentence");
  t.forEach(function (r) {
    var n = e.tokenizer.getRangeTokens(r);
    e.tokenizer.replaceRange(r.startIndex, r.endOffset, n.reverse());
  });
}
ae.prototype.registerFeatures = function (e, t) {
  var r = this,
    n = t.filter(function (a) {
      return r.query.supports({ script: e, tag: a });
    });
  this.featuresTags.hasOwnProperty(e)
    ? (this.featuresTags[e] = this.featuresTags[e].concat(n))
    : (this.featuresTags[e] = n);
};
ae.prototype.applyFeatures = function (e, t) {
  if (!e) throw new Error("No valid font was provided to apply features");
  this.query || (this.query = new K(e));
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    !this.query.supports({ script: n.script }) ||
      this.registerFeatures(n.script, n.tags);
  }
};
ae.prototype.registerModifier = function (e, t, r) {
  this.tokenizer.registerModifier(e, t, r);
};
function Rt() {
  if (this.tokenizer.registeredModifiers.indexOf("glyphIndex") === -1)
    throw new Error(
      "glyphIndex modifier is required to apply arabic presentation features."
    );
}
function ai() {
  var e = this,
    t = "arab";
  if (this.featuresTags.hasOwnProperty(t)) {
    Rt.call(this);
    var r = this.tokenizer.getContextRanges("arabicWord");
    r.forEach(function (n) {
      Qs.call(e, n);
    });
  }
}
function oi() {
  var e = this,
    t = "arab";
  if (this.featuresTags.hasOwnProperty(t)) {
    var r = this.featuresTags[t];
    if (r.indexOf("rlig") !== -1) {
      Rt.call(this);
      var n = this.tokenizer.getContextRanges("arabicWord");
      n.forEach(function (a) {
        Ks.call(e, a);
      });
    }
  }
}
function si() {
  var e = this,
    t = "latn";
  if (this.featuresTags.hasOwnProperty(t)) {
    var r = this.featuresTags[t];
    if (r.indexOf("liga") !== -1) {
      Rt.call(this);
      var n = this.tokenizer.getContextRanges("latinWord");
      n.forEach(function (a) {
        ti.call(e, a);
      });
    }
  }
}
ae.prototype.checkContextReady = function (e) {
  return !!this.tokenizer.getContext(e);
};
ae.prototype.applyFeaturesToContexts = function () {
  this.checkContextReady("arabicWord") && (ai.call(this), oi.call(this)),
    this.checkContextReady("latinWord") && si.call(this),
    this.checkContextReady("arabicSentence") && ni.call(this);
};
ae.prototype.processText = function (e) {
  (!this.text || this.text !== e) &&
    (this.setText(e), ri.call(this), this.applyFeaturesToContexts());
};
ae.prototype.getBidiText = function (e) {
  return this.processText(e), this.tokenizer.getText();
};
ae.prototype.getTextGlyphs = function (e) {
  this.processText(e);
  for (var t = [], r = 0; r < this.tokenizer.tokens.length; r++) {
    var n = this.tokenizer.tokens[r];
    if (!n.state.deleted) {
      var a = n.activeState.value;
      t.push(Array.isArray(a) ? a[0] : a);
    }
  }
  return t;
};
function R(e) {
  (e = e || {}),
    (e.tables = e.tables || {}),
    e.empty ||
      (De(
        e.familyName,
        "When creating a new Font object, familyName is required."
      ),
      De(
        e.styleName,
        "When creating a new Font object, styleName is required."
      ),
      De(
        e.unitsPerEm,
        "When creating a new Font object, unitsPerEm is required."
      ),
      De(e.ascender, "When creating a new Font object, ascender is required."),
      De(
        e.descender <= 0,
        "When creating a new Font object, negative descender value is required."
      ),
      (this.names = {
        fontFamily: { en: e.familyName || " " },
        fontSubfamily: { en: e.styleName || " " },
        fullName: { en: e.fullName || e.familyName + " " + e.styleName },
        postScriptName: {
          en:
            e.postScriptName || (e.familyName + e.styleName).replace(/\s/g, ""),
        },
        designer: { en: e.designer || " " },
        designerURL: { en: e.designerURL || " " },
        manufacturer: { en: e.manufacturer || " " },
        manufacturerURL: { en: e.manufacturerURL || " " },
        license: { en: e.license || " " },
        licenseURL: { en: e.licenseURL || " " },
        version: { en: e.version || "Version 0.1" },
        description: { en: e.description || " " },
        copyright: { en: e.copyright || " " },
        trademark: { en: e.trademark || " " },
      }),
      (this.unitsPerEm = e.unitsPerEm || 1e3),
      (this.ascender = e.ascender),
      (this.descender = e.descender),
      (this.createdTimestamp = e.createdTimestamp),
      (this.tables = Object.assign(e.tables, {
        os2: Object.assign(
          {
            usWeightClass: e.weightClass || this.usWeightClasses.MEDIUM,
            usWidthClass: e.widthClass || this.usWidthClasses.MEDIUM,
            fsSelection: e.fsSelection || this.fsSelectionValues.REGULAR,
          },
          e.tables.os2
        ),
      }))),
    (this.supported = !0),
    (this.glyphs = new ue.GlyphSet(this, e.glyphs || [])),
    (this.encoding = new Ar(this)),
    (this.position = new Le(this)),
    (this.substitution = new Q(this)),
    (this.tables = this.tables || {}),
    (this._push = null),
    (this._hmtxTableData = {}),
    Object.defineProperty(this, "hinting", {
      get: function () {
        if (this._hinting) return this._hinting;
        if (this.outlinesFormat === "truetype")
          return (this._hinting = new sn(this));
      },
    });
}
R.prototype.hasChar = function (e) {
  return this.encoding.charToGlyphIndex(e) !== null;
};
R.prototype.charToGlyphIndex = function (e) {
  return this.encoding.charToGlyphIndex(e);
};
R.prototype.charToGlyph = function (e) {
  var t = this.charToGlyphIndex(e),
    r = this.glyphs.get(t);
  return r || (r = this.glyphs.get(0)), r;
};
R.prototype.updateFeatures = function (e) {
  return this.defaultRenderOptions.features.map(function (t) {
    return t.script === "latn"
      ? {
          script: "latn",
          tags: t.tags.filter(function (r) {
            return e[r];
          }),
        }
      : t;
  });
};
R.prototype.stringToGlyphs = function (e, t) {
  var r = this,
    n = new ae(),
    a = function (h) {
      return r.charToGlyphIndex(h.char);
    };
  n.registerModifier("glyphIndex", null, a);
  var o = t
    ? this.updateFeatures(t.features)
    : this.defaultRenderOptions.features;
  n.applyFeatures(this, o);
  for (
    var s = n.getTextGlyphs(e),
      u = s.length,
      i = new Array(u),
      p = this.glyphs.get(0),
      l = 0;
    l < u;
    l += 1
  )
    i[l] = this.glyphs.get(s[l]) || p;
  return i;
};
R.prototype.nameToGlyphIndex = function (e) {
  return this.glyphNames.nameToGlyphIndex(e);
};
R.prototype.nameToGlyph = function (e) {
  var t = this.nameToGlyphIndex(e),
    r = this.glyphs.get(t);
  return r || (r = this.glyphs.get(0)), r;
};
R.prototype.glyphIndexToName = function (e) {
  return this.glyphNames.glyphIndexToName
    ? this.glyphNames.glyphIndexToName(e)
    : "";
};
R.prototype.getKerningValue = function (e, t) {
  (e = e.index || e), (t = t.index || t);
  var r = this.position.defaultKerningTables;
  return r
    ? this.position.getKerningValue(r, e, t)
    : this.kerningPairs[e + "," + t] || 0;
};
R.prototype.defaultRenderOptions = {
  kerning: !0,
  features: [
    { script: "arab", tags: ["init", "medi", "fina", "rlig"] },
    { script: "latn", tags: ["liga", "rlig"] },
  ],
};
R.prototype.forEachGlyph = function (e, t, r, n, a, o) {
  (t = t !== void 0 ? t : 0),
    (r = r !== void 0 ? r : 0),
    (n = n !== void 0 ? n : 72),
    (a = Object.assign({}, this.defaultRenderOptions, a));
  var s = (1 / this.unitsPerEm) * n,
    u = this.stringToGlyphs(e, a),
    i;
  if (a.kerning) {
    var p = a.script || this.position.getDefaultScriptName();
    i = this.position.getKerningTables(p, a.language);
  }
  for (var l = 0; l < u.length; l += 1) {
    var h = u[l];
    if (
      (o.call(this, h, t, r, n, a),
      h.advanceWidth && (t += h.advanceWidth * s),
      a.kerning && l < u.length - 1)
    ) {
      var c = i
        ? this.position.getKerningValue(i, h.index, u[l + 1].index)
        : this.getKerningValue(h, u[l + 1]);
      t += c * s;
    }
    a.letterSpacing
      ? (t += a.letterSpacing * n)
      : a.tracking && (t += (a.tracking / 1e3) * n);
  }
  return t;
};
R.prototype.getPath = function (e, t, r, n, a) {
  var o = new G();
  return (
    this.forEachGlyph(e, t, r, n, a, function (s, u, i, p) {
      var l = s.getPath(u, i, p, a, this);
      o.extend(l);
    }),
    o
  );
};
R.prototype.getPaths = function (e, t, r, n, a) {
  var o = [];
  return (
    this.forEachGlyph(e, t, r, n, a, function (s, u, i, p) {
      var l = s.getPath(u, i, p, a, this);
      o.push(l);
    }),
    o
  );
};
R.prototype.getAdvanceWidth = function (e, t, r) {
  return this.forEachGlyph(e, 0, 0, t, r, function () {});
};
R.prototype.draw = function (e, t, r, n, a, o) {
  this.getPath(t, r, n, a, o).draw(e);
};
R.prototype.drawPoints = function (e, t, r, n, a, o) {
  this.forEachGlyph(t, r, n, a, o, function (s, u, i, p) {
    s.drawPoints(e, u, i, p);
  });
};
R.prototype.drawMetrics = function (e, t, r, n, a, o) {
  this.forEachGlyph(t, r, n, a, o, function (s, u, i, p) {
    s.drawMetrics(e, u, i, p);
  });
};
R.prototype.getEnglishName = function (e) {
  var t = this.names[e];
  if (t) return t.en;
};
R.prototype.validate = function () {
  var e = this;
  function t(r) {
    var n = e.getEnglishName(r);
    n && n.trim().length > 0;
  }
  t("fontFamily"),
    t("weightName"),
    t("manufacturer"),
    t("copyright"),
    t("version"),
    this.unitsPerEm > 0;
};
R.prototype.toTables = function () {
  return Va.fontToTable(this);
};
R.prototype.toBuffer = function () {
  return (
    console.warn(
      "Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."
    ),
    this.toArrayBuffer()
  );
};
R.prototype.toArrayBuffer = function () {
  for (
    var e = this.toTables(),
      t = e.encode(),
      r = new ArrayBuffer(t.length),
      n = new Uint8Array(r),
      a = 0;
    a < t.length;
    a++
  )
    n[a] = t[a];
  return r;
};
R.prototype.download = function (e) {
  var t = this.getEnglishName("fontFamily"),
    r = this.getEnglishName("fontSubfamily");
  e = e || t.replace(/\s/g, "") + "-" + r + ".otf";
  var n = this.toArrayBuffer();
  if (ja())
    if (((window.URL = window.URL || window.webkitURL), window.URL)) {
      var a = new DataView(n),
        o = new Blob([a], { type: "font/opentype" }),
        s = document.createElement("a");
      (s.href = window.URL.createObjectURL(o)), (s.download = e);
      var u = document.createEvent("MouseEvents");
      u.initEvent("click", !0, !1), s.dispatchEvent(u);
    } else
      console.warn(
        "Font file could not be downloaded. Try using a different browser."
      );
  else {
    var i = bt(),
      p = Za(n);
    i.writeFileSync(e, p);
  }
};
R.prototype.fsSelectionValues = {
  ITALIC: 1,
  UNDERSCORE: 2,
  NEGATIVE: 4,
  OUTLINED: 8,
  STRIKEOUT: 16,
  BOLD: 32,
  REGULAR: 64,
  USER_TYPO_METRICS: 128,
  WWS: 256,
  OBLIQUE: 512,
};
R.prototype.usWidthClasses = {
  ULTRA_CONDENSED: 1,
  EXTRA_CONDENSED: 2,
  CONDENSED: 3,
  SEMI_CONDENSED: 4,
  MEDIUM: 5,
  SEMI_EXPANDED: 6,
  EXPANDED: 7,
  EXTRA_EXPANDED: 8,
  ULTRA_EXPANDED: 9,
};
R.prototype.usWeightClasses = {
  THIN: 100,
  EXTRA_LIGHT: 200,
  LIGHT: 300,
  NORMAL: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
  EXTRA_BOLD: 800,
  BLACK: 900,
};
function hn(e, t) {
  var r = JSON.stringify(e),
    n = 256;
  for (var a in t) {
    var o = parseInt(a);
    if (!(!o || o < 256)) {
      if (JSON.stringify(t[a]) === r) return o;
      n <= o && (n = o + 1);
    }
  }
  return (t[n] = e), n;
}
function ii(e, t, r) {
  var n = hn(t.name, r);
  return [
    { name: "tag_" + e, type: "TAG", value: t.tag },
    { name: "minValue_" + e, type: "FIXED", value: t.minValue << 16 },
    { name: "defaultValue_" + e, type: "FIXED", value: t.defaultValue << 16 },
    { name: "maxValue_" + e, type: "FIXED", value: t.maxValue << 16 },
    { name: "flags_" + e, type: "USHORT", value: 0 },
    { name: "nameID_" + e, type: "USHORT", value: n },
  ];
}
function ui(e, t, r) {
  var n = {},
    a = new C.Parser(e, t);
  return (
    (n.tag = a.parseTag()),
    (n.minValue = a.parseFixed()),
    (n.defaultValue = a.parseFixed()),
    (n.maxValue = a.parseFixed()),
    a.skip("uShort", 1),
    (n.name = r[a.parseUShort()] || {}),
    n
  );
}
function li(e, t, r, n) {
  for (
    var a = hn(t.name, n),
      o = [
        { name: "nameID_" + e, type: "USHORT", value: a },
        { name: "flags_" + e, type: "USHORT", value: 0 },
      ],
      s = 0;
    s < r.length;
    ++s
  ) {
    var u = r[s].tag;
    o.push({
      name: "axis_" + e + " " + u,
      type: "FIXED",
      value: t.coordinates[u] << 16,
    });
  }
  return o;
}
function pi(e, t, r, n) {
  var a = {},
    o = new C.Parser(e, t);
  (a.name = n[o.parseUShort()] || {}),
    o.skip("uShort", 1),
    (a.coordinates = {});
  for (var s = 0; s < r.length; ++s) a.coordinates[r[s].tag] = o.parseFixed();
  return a;
}
function ci(e, t) {
  var r = new b.Table("fvar", [
    { name: "version", type: "ULONG", value: 65536 },
    { name: "offsetToData", type: "USHORT", value: 0 },
    { name: "countSizePairs", type: "USHORT", value: 2 },
    { name: "axisCount", type: "USHORT", value: e.axes.length },
    { name: "axisSize", type: "USHORT", value: 20 },
    { name: "instanceCount", type: "USHORT", value: e.instances.length },
    { name: "instanceSize", type: "USHORT", value: 4 + e.axes.length * 4 },
  ]);
  r.offsetToData = r.sizeOf();
  for (var n = 0; n < e.axes.length; n++)
    r.fields = r.fields.concat(ii(n, e.axes[n], t));
  for (var a = 0; a < e.instances.length; a++)
    r.fields = r.fields.concat(li(a, e.instances[a], e.axes, t));
  return r;
}
function hi(e, t, r) {
  var n = new C.Parser(e, t),
    a = n.parseULong();
  k.argument(a === 65536, "Unsupported fvar table version.");
  var o = n.parseOffset16();
  n.skip("uShort", 1);
  for (
    var s = n.parseUShort(),
      u = n.parseUShort(),
      i = n.parseUShort(),
      p = n.parseUShort(),
      l = [],
      h = 0;
    h < s;
    h++
  )
    l.push(ui(e, t + o + h * u, r));
  for (var c = [], f = t + o + s * u, v = 0; v < i; v++)
    c.push(pi(e, f + v * p, l, r));
  return { axes: l, instances: c };
}
var fi = { make: ci, parse: hi },
  di = function () {
    return {
      coverage: this.parsePointer(d.coverage),
      attachPoints: this.parseList(d.pointer(d.uShortList)),
    };
  },
  vi = function () {
    var e = this.parseUShort();
    if (
      (k.argument(
        e === 1 || e === 2 || e === 3,
        "Unsupported CaretValue table version."
      ),
      e === 1)
    )
      return { coordinate: this.parseShort() };
    if (e === 2) return { pointindex: this.parseShort() };
    if (e === 3) return { coordinate: this.parseShort() };
  },
  gi = function () {
    return this.parseList(d.pointer(vi));
  },
  mi = function () {
    return {
      coverage: this.parsePointer(d.coverage),
      ligGlyphs: this.parseList(d.pointer(gi)),
    };
  },
  yi = function () {
    return this.parseUShort(), this.parseList(d.pointer(d.coverage));
  };
function xi(e, t) {
  t = t || 0;
  var r = new d(e, t),
    n = r.parseVersion(1);
  k.argument(
    n === 1 || n === 1.2 || n === 1.3,
    "Unsupported GDEF table version."
  );
  var a = {
    version: n,
    classDef: r.parsePointer(d.classDef),
    attachList: r.parsePointer(di),
    ligCaretList: r.parsePointer(mi),
    markAttachClassDef: r.parsePointer(d.classDef),
  };
  return n >= 1.2 && (a.markGlyphSets = r.parsePointer(yi)), a;
}
var bi = { parse: xi },
  re = new Array(10);
re[1] = function () {
  var e = this.offset + this.relativeOffset,
    t = this.parseUShort();
  if (t === 1)
    return {
      posFormat: 1,
      coverage: this.parsePointer(d.coverage),
      value: this.parseValueRecord(),
    };
  if (t === 2)
    return {
      posFormat: 2,
      coverage: this.parsePointer(d.coverage),
      values: this.parseValueRecordList(),
    };
  k.assert(
    !1,
    "0x" + e.toString(16) + ": GPOS lookup type 1 format must be 1 or 2."
  );
};
re[2] = function () {
  var e = this.offset + this.relativeOffset,
    t = this.parseUShort();
  k.assert(
    t === 1 || t === 2,
    "0x" + e.toString(16) + ": GPOS lookup type 2 format must be 1 or 2."
  );
  var r = this.parsePointer(d.coverage),
    n = this.parseUShort(),
    a = this.parseUShort();
  if (t === 1)
    return {
      posFormat: t,
      coverage: r,
      valueFormat1: n,
      valueFormat2: a,
      pairSets: this.parseList(
        d.pointer(
          d.list(function () {
            return {
              secondGlyph: this.parseUShort(),
              value1: this.parseValueRecord(n),
              value2: this.parseValueRecord(a),
            };
          })
        )
      ),
    };
  if (t === 2) {
    var o = this.parsePointer(d.classDef),
      s = this.parsePointer(d.classDef),
      u = this.parseUShort(),
      i = this.parseUShort();
    return {
      posFormat: t,
      coverage: r,
      valueFormat1: n,
      valueFormat2: a,
      classDef1: o,
      classDef2: s,
      class1Count: u,
      class2Count: i,
      classRecords: this.parseList(
        u,
        d.list(i, function () {
          return {
            value1: this.parseValueRecord(n),
            value2: this.parseValueRecord(a),
          };
        })
      ),
    };
  }
};
re[3] = function () {
  return { error: "GPOS Lookup 3 not supported" };
};
re[4] = function () {
  return { error: "GPOS Lookup 4 not supported" };
};
re[5] = function () {
  return { error: "GPOS Lookup 5 not supported" };
};
re[6] = function () {
  return { error: "GPOS Lookup 6 not supported" };
};
re[7] = function () {
  return { error: "GPOS Lookup 7 not supported" };
};
re[8] = function () {
  return { error: "GPOS Lookup 8 not supported" };
};
re[9] = function () {
  return { error: "GPOS Lookup 9 not supported" };
};
function Si(e, t) {
  t = t || 0;
  var r = new d(e, t),
    n = r.parseVersion(1);
  return (
    k.argument(n === 1 || n === 1.1, "Unsupported GPOS table version " + n),
    n === 1
      ? {
          version: n,
          scripts: r.parseScriptList(),
          features: r.parseFeatureList(),
          lookups: r.parseLookupList(re),
        }
      : {
          version: n,
          scripts: r.parseScriptList(),
          features: r.parseFeatureList(),
          lookups: r.parseLookupList(re),
          variations: r.parseFeatureVariationsList(),
        }
  );
}
var Ei = new Array(10);
function Ci(e) {
  return new b.Table("GPOS", [
    { name: "version", type: "ULONG", value: 65536 },
    { name: "scripts", type: "TABLE", value: new b.ScriptList(e.scripts) },
    { name: "features", type: "TABLE", value: new b.FeatureList(e.features) },
    { name: "lookups", type: "TABLE", value: new b.LookupList(e.lookups, Ei) },
  ]);
}
var Ti = { parse: Si, make: Ci };
function ki(e) {
  var t = {};
  e.skip("uShort");
  var r = e.parseUShort();
  k.argument(r === 0, "Unsupported kern sub-table version."),
    e.skip("uShort", 2);
  var n = e.parseUShort();
  e.skip("uShort", 3);
  for (var a = 0; a < n; a += 1) {
    var o = e.parseUShort(),
      s = e.parseUShort(),
      u = e.parseShort();
    t[o + "," + s] = u;
  }
  return t;
}
function Ui(e) {
  var t = {};
  e.skip("uShort");
  var r = e.parseULong();
  r > 1 && console.warn("Only the first kern subtable is supported."),
    e.skip("uLong");
  var n = e.parseUShort(),
    a = n & 255;
  if ((e.skip("uShort"), a === 0)) {
    var o = e.parseUShort();
    e.skip("uShort", 3);
    for (var s = 0; s < o; s += 1) {
      var u = e.parseUShort(),
        i = e.parseUShort(),
        p = e.parseShort();
      t[u + "," + i] = p;
    }
  }
  return t;
}
function Di(e, t) {
  var r = new C.Parser(e, t),
    n = r.parseUShort();
  if (n === 0) return ki(r);
  if (n === 1) return Ui(r);
  throw new Error("Unsupported kern table version (" + n + ").");
}
var Ai = { parse: Di };
function Oi(e, t, r, n) {
  for (
    var a = new C.Parser(e, t),
      o = n ? a.parseUShort : a.parseULong,
      s = [],
      u = 0;
    u < r + 1;
    u += 1
  ) {
    var i = o.call(a);
    n && (i *= 2), s.push(i);
  }
  return s;
}
var Bi = { parse: Oi };
function Ri(e, t) {
  var r = bt();
  r.readFile(e, function (n, a) {
    if (n) return t(n.message);
    t(null, $r(a));
  });
}
function wi(e, t) {
  var r = new XMLHttpRequest();
  r.open("get", e, !0),
    (r.responseType = "arraybuffer"),
    (r.onload = function () {
      return r.response
        ? t(null, r.response)
        : t("Font could not be loaded: " + r.statusText);
    }),
    (r.onerror = function () {
      t("Font could not be loaded");
    }),
    r.send();
}
function yr(e, t) {
  for (var r = [], n = 12, a = 0; a < t; a += 1) {
    var o = C.getTag(e, n),
      s = C.getULong(e, n + 4),
      u = C.getULong(e, n + 8),
      i = C.getULong(e, n + 12);
    r.push({ tag: o, checksum: s, offset: u, length: i, compression: !1 }),
      (n += 16);
  }
  return r;
}
function Fi(e, t) {
  for (var r = [], n = 44, a = 0; a < t; a += 1) {
    var o = C.getTag(e, n),
      s = C.getULong(e, n + 4),
      u = C.getULong(e, n + 8),
      i = C.getULong(e, n + 12),
      p = void 0;
    u < i ? (p = "WOFF") : (p = !1),
      r.push({
        tag: o,
        offset: s,
        compression: p,
        compressedLength: u,
        length: i,
      }),
      (n += 20);
  }
  return r;
}
function I(e, t) {
  if (t.compression === "WOFF") {
    var r = new Uint8Array(e.buffer, t.offset + 2, t.compressedLength - 2),
      n = new Uint8Array(t.length);
    if ((Cn(r, n), n.byteLength !== t.length))
      throw new Error(
        "Decompression error: " +
          t.tag +
          " decompressed length doesn't match recorded length"
      );
    var a = new DataView(n.buffer, 0);
    return { data: a, offset: 0 };
  } else return { data: e, offset: t.offset };
}
function wt(e, t) {
  t = t ?? {};
  var r,
    n,
    a = new R({ empty: !0 }),
    o = new DataView(e, 0),
    s,
    u = [],
    i = C.getTag(o, 0);
  if (i === String.fromCharCode(0, 1, 0, 0) || i === "true" || i === "typ1")
    (a.outlinesFormat = "truetype"), (s = C.getUShort(o, 4)), (u = yr(o, s));
  else if (i === "OTTO")
    (a.outlinesFormat = "cff"), (s = C.getUShort(o, 4)), (u = yr(o, s));
  else if (i === "wOFF") {
    var p = C.getTag(o, 4);
    if (p === String.fromCharCode(0, 1, 0, 0)) a.outlinesFormat = "truetype";
    else if (p === "OTTO") a.outlinesFormat = "cff";
    else throw new Error("Unsupported OpenType flavor " + i);
    (s = C.getUShort(o, 12)), (u = Fi(o, s));
  } else throw new Error("Unsupported OpenType signature " + i);
  for (var l, h, c, f, v, x, m, y, U, S, B, A, w = 0; w < s; w += 1) {
    var O = u[w],
      T = void 0;
    switch (O.tag) {
      case "cmap":
        (T = I(o, O)),
          (a.tables.cmap = Dr.parse(T.data, T.offset)),
          (a.encoding = new Or(a.tables.cmap));
        break;
      case "cvt ":
        (T = I(o, O)),
          (A = new C.Parser(T.data, T.offset)),
          (a.tables.cvt = A.parseShortList(O.length / 2));
        break;
      case "fvar":
        h = O;
        break;
      case "fpgm":
        (T = I(o, O)),
          (A = new C.Parser(T.data, T.offset)),
          (a.tables.fpgm = A.parseByteList(O.length));
        break;
      case "head":
        (T = I(o, O)),
          (a.tables.head = Nr.parse(T.data, T.offset)),
          (a.unitsPerEm = a.tables.head.unitsPerEm),
          (r = a.tables.head.indexToLocFormat);
        break;
      case "hhea":
        (T = I(o, O)),
          (a.tables.hhea = Hr.parse(T.data, T.offset)),
          (a.ascender = a.tables.hhea.ascender),
          (a.descender = a.tables.hhea.descender),
          (a.numberOfHMetrics = a.tables.hhea.numberOfHMetrics);
        break;
      case "hmtx":
        m = O;
        break;
      case "ltag":
        (T = I(o, O)), (n = Wr.parse(T.data, T.offset));
        break;
      case "maxp":
        (T = I(o, O)),
          (a.tables.maxp = _r.parse(T.data, T.offset)),
          (a.numGlyphs = a.tables.maxp.numGlyphs);
        break;
      case "name":
        S = O;
        break;
      case "OS/2":
        (T = I(o, O)), (a.tables.os2 = yt.parse(T.data, T.offset));
        break;
      case "post":
        (T = I(o, O)),
          (a.tables.post = Zr.parse(T.data, T.offset)),
          (a.glyphNames = new kt(a.tables.post));
        break;
      case "prep":
        (T = I(o, O)),
          (A = new C.Parser(T.data, T.offset)),
          (a.tables.prep = A.parseByteList(O.length));
        break;
      case "glyf":
        c = O;
        break;
      case "loca":
        U = O;
        break;
      case "CFF ":
        l = O;
        break;
      case "kern":
        y = O;
        break;
      case "GDEF":
        f = O;
        break;
      case "GPOS":
        v = O;
        break;
      case "GSUB":
        x = O;
        break;
      case "meta":
        B = O;
        break;
    }
  }
  var P = I(o, S);
  if (
    ((a.tables.name = jr.parse(P.data, P.offset, n)),
    (a.names = a.tables.name),
    c && U)
  ) {
    var Y = r === 0,
      j = I(o, U),
      J = Bi.parse(j.data, j.offset, a.numGlyphs, Y),
      $ = I(o, c);
    a.glyphs = nn.parse($.data, $.offset, J, a, t);
  } else if (l) {
    var M = I(o, l);
    Pr.parse(M.data, M.offset, a, t);
  } else throw new Error("Font doesn't contain TrueType or CFF outlines.");
  var N = I(o, m);
  if (
    (zr.parse(
      a,
      N.data,
      N.offset,
      a.numberOfHMetrics,
      a.numGlyphs,
      a.glyphs,
      t
    ),
    qn(a, t),
    y)
  ) {
    var W = I(o, y);
    a.kerningPairs = Ai.parse(W.data, W.offset);
  } else a.kerningPairs = {};
  if (f) {
    var _ = I(o, f);
    a.tables.gdef = bi.parse(_.data, _.offset);
  }
  if (v) {
    var q = I(o, v);
    (a.tables.gpos = Ti.parse(q.data, q.offset)), a.position.init();
  }
  if (x) {
    var H = I(o, x);
    a.tables.gsub = Qr.parse(H.data, H.offset);
  }
  if (h) {
    var V = I(o, h);
    a.tables.fvar = fi.parse(V.data, V.offset, a.names);
  }
  if (B) {
    var F = I(o, B);
    (a.tables.meta = Kr.parse(F.data, F.offset)), (a.metas = a.tables.meta);
  }
  return a;
}
function Li(e, t, r) {
  r = r ?? {};
  var n = typeof window > "u",
    a = n && !r.isUrl ? Ri : wi;
  return new Promise(function (o, s) {
    a(e, function (u, i) {
      if (u) {
        if (t) return t(u);
        s(u);
      }
      var p;
      try {
        p = wt(i, r);
      } catch (l) {
        if (t) return t(l, null);
        s(l);
      }
      if (t) return t(null, p);
      o(p);
    });
  });
}
function Ii(e, t) {
  var r = bt(),
    n = r.readFileSync(e);
  return wt($r(n), t);
}
var Mi = Object.freeze({
    __proto__: null,
    Font: R,
    Glyph: Z,
    Path: G,
    BoundingBox: ce,
    _parse: C,
    parse: wt,
    load: Li,
    loadSync: Ii,
  }),
  Gi = Mi;
export {
  ae as Bidi,
  ce as BoundingBox,
  R as Font,
  Z as Glyph,
  G as Path,
  C as _parse,
  Gi as default,
  Li as load,
  Ii as loadSync,
  wt as parse,
};
//# sourceMappingURL=opentype.d77fd7e6.js.map
