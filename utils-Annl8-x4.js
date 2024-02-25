define(["require", "exports", "./comlink-0zLmyqPh"], function (r, t, n) {
  "use strict";
  function e(r) {
    return new Promise((t, n) => {
      (r.oncomplete = r.onsuccess = () => t(r.result)),
        (r.onabort = r.onerror = () => n(r.error));
    });
  }
  let o;
  function i() {
    return (
      o ||
        (o = (function (r, t) {
          const n = indexedDB.open(r);
          n.onupgradeneeded = () => n.result.createObjectStore(t);
          const o = e(n);
          return (r, n) => o.then((e) => n(e.transaction(t, r).objectStore(t)));
        })("keyval-store", "keyval")),
      o
    );
  }
  var s,
    u,
    f,
    a,
    l,
    c,
    h,
    w,
    d,
    A,
    m,
    y,
    b,
    g,
    v,
    p,
    B,
    k,
    M,
    X,
    x,
    j,
    C,
    D,
    S,
    q,
    I,
    P,
    T,
    E,
    H,
    J,
    N,
    _,
    F,
    O =
      ((k = null),
      (M = new Array(
        0,
        1,
        3,
        7,
        15,
        31,
        63,
        127,
        255,
        511,
        1023,
        2047,
        4095,
        8191,
        16383,
        32767,
        65535,
      )),
      (X = new Array(
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        13,
        15,
        17,
        19,
        23,
        27,
        31,
        35,
        43,
        51,
        59,
        67,
        83,
        99,
        115,
        131,
        163,
        195,
        227,
        258,
        0,
        0,
      )),
      (x = new Array(
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        3,
        3,
        3,
        3,
        4,
        4,
        4,
        4,
        5,
        5,
        5,
        5,
        0,
        99,
        99,
      )),
      (j = new Array(
        1,
        2,
        3,
        4,
        5,
        7,
        9,
        13,
        17,
        25,
        33,
        49,
        65,
        97,
        129,
        193,
        257,
        385,
        513,
        769,
        1025,
        1537,
        2049,
        3073,
        4097,
        6145,
        8193,
        12289,
        16385,
        24577,
      )),
      (C = new Array(
        0,
        0,
        0,
        0,
        1,
        1,
        2,
        2,
        3,
        3,
        4,
        4,
        5,
        5,
        6,
        6,
        7,
        7,
        8,
        8,
        9,
        9,
        10,
        10,
        11,
        11,
        12,
        12,
        13,
        13,
      )),
      (D = new Array(
        16,
        17,
        18,
        0,
        8,
        7,
        9,
        6,
        10,
        5,
        11,
        4,
        12,
        3,
        13,
        2,
        14,
        1,
        15,
      )),
      (S = function () {
        (this.next = null), (this.list = null);
      }),
      (q = function () {
        (this.e = 0), (this.b = 0), (this.n = 0), (this.t = null);
      }),
      (I = function (r, t, n, e, o, i) {
        (this.BMAX = 16),
          (this.N_MAX = 288),
          (this.status = 0),
          (this.root = null),
          (this.m = 0);
        var s,
          u,
          f,
          a,
          l,
          c,
          h,
          w,
          d,
          A,
          m,
          y,
          b,
          g,
          v,
          p,
          B,
          k = new Array(this.BMAX + 1),
          M = new Array(this.BMAX + 1),
          X = new q(),
          x = new Array(this.BMAX),
          j = new Array(this.N_MAX),
          C = new Array(this.BMAX + 1);
        for (B = this.root = null, c = 0; c < k.length; c++) k[c] = 0;
        for (c = 0; c < M.length; c++) M[c] = 0;
        for (c = 0; c < x.length; c++) x[c] = null;
        for (c = 0; c < j.length; c++) j[c] = 0;
        for (c = 0; c < C.length; c++) C[c] = 0;
        (u = t > 256 ? r[256] : this.BMAX), (d = r), (A = 0), (c = t);
        do {
          k[d[A]]++, A++;
        } while (--c > 0);
        if (k[0] == t)
          return (this.root = null), (this.m = 0), void (this.status = 0);
        for (h = 1; h <= this.BMAX && 0 == k[h]; h++);
        for (w = h, i < h && (i = h), c = this.BMAX; 0 != c && 0 == k[c]; c--);
        for (a = c, i > c && (i = c), g = 1 << h; h < c; h++, g <<= 1)
          if ((g -= k[h]) < 0) return (this.status = 2), void (this.m = i);
        if ((g -= k[c]) < 0) return (this.status = 2), void (this.m = i);
        for (k[c] += g, C[1] = h = 0, d = k, A = 1, b = 2; --c > 0; )
          C[b++] = h += d[A++];
        (d = r), (A = 0), (c = 0);
        do {
          0 != (h = d[A++]) && (j[C[h]++] = c);
        } while (++c < t);
        for (
          t = C[a],
            C[0] = c = 0,
            d = j,
            A = 0,
            l = -1,
            y = M[0] = 0,
            m = null,
            v = 0;
          w <= a;
          w++
        )
          for (s = k[w]; s-- > 0; ) {
            for (; w > y + M[1 + l]; ) {
              if (
                ((y += M[1 + l]),
                l++,
                (v = (v = a - y) > i ? i : v),
                (f = 1 << (h = w - y)) > s + 1)
              )
                for (f -= s + 1, b = w; ++h < v && !((f <<= 1) <= k[++b]); )
                  f -= k[b];
              for (
                y + h > u && y < u && (h = u - y),
                  v = 1 << h,
                  M[1 + l] = h,
                  m = new Array(v),
                  p = 0;
                p < v;
                p++
              )
                m[p] = new q();
              ((B =
                null == B ? (this.root = new S()) : (B.next = new S())).next =
                null),
                (B.list = m),
                (x[l] = m),
                l > 0 &&
                  ((C[l] = c),
                  (X.b = M[l]),
                  (X.e = 16 + h),
                  (X.t = m),
                  (h = (c & ((1 << y) - 1)) >> (y - M[l])),
                  (x[l - 1][h].e = X.e),
                  (x[l - 1][h].b = X.b),
                  (x[l - 1][h].n = X.n),
                  (x[l - 1][h].t = X.t));
            }
            for (
              X.b = w - y,
                A >= t
                  ? (X.e = 99)
                  : d[A] < n
                    ? ((X.e = d[A] < 256 ? 16 : 15), (X.n = d[A++]))
                    : ((X.e = o[d[A] - n]), (X.n = e[d[A++] - n])),
                f = 1 << (w - y),
                h = c >> y;
              h < v;
              h += f
            )
              (m[h].e = X.e), (m[h].b = X.b), (m[h].n = X.n), (m[h].t = X.t);
            for (h = 1 << (w - 1); 0 != (c & h); h >>= 1) c ^= h;
            for (c ^= h; (c & ((1 << y) - 1)) != C[l]; ) (y -= M[l]), l--;
          }
        (this.m = M[1]), (this.status = 0 != g && 1 != a ? 1 : 0);
      }),
      (P = function (r) {
        for (; h < r; )
          (c |= (p.length == B ? -1 : 255 & p.charCodeAt(B++)) << h), (h += 8);
      }),
      (T = function (r) {
        return c & M[r];
      }),
      (E = function (r) {
        (c >>= r), (h -= r);
      }),
      (H = function (r, t, n) {
        var e, o, i;
        if (0 == n) return 0;
        for (i = 0; ; ) {
          for (P(g), e = (o = y.list[T(g)]).e; e > 16; ) {
            if (99 == e) return -1;
            E(o.b), P((e -= 16)), (e = (o = o.t[T(e)]).e);
          }
          if ((E(o.b), 16 != e)) {
            if (15 == e) break;
            for (
              P(e), A = o.n + T(e), E(e), P(v), e = (o = b.list[T(v)]).e;
              e > 16;

            ) {
              if (99 == e) return -1;
              E(o.b), P((e -= 16)), (e = (o = o.t[T(e)]).e);
            }
            for (E(o.b), P(e), m = u - o.n - T(e), E(e); A > 0 && i < n; )
              A--, (m &= 32767), (u &= 32767), (r[t + i++] = s[u++] = s[m++]);
            if (i == n) return n;
          } else if (((u &= 32767), (r[t + i++] = s[u++] = o.n), i == n))
            return n;
        }
        return (w = -1), i;
      }),
      (J = function (r, t, n) {
        var e;
        if (
          (E((e = 7 & h)), P(16), (e = T(16)), E(16), P(16), e != (65535 & ~c))
        )
          return -1;
        for (E(16), A = e, e = 0; A > 0 && e < n; )
          A--, (u &= 32767), P(8), (r[t + e++] = s[u++] = T(8)), E(8);
        return 0 == A && (w = -1), e;
      }),
      (N = function (r, t, n) {
        if (null == k) {
          var e,
            o,
            i = new Array(288);
          for (e = 0; e < 144; e++) i[e] = 8;
          for (; e < 256; e++) i[e] = 9;
          for (; e < 280; e++) i[e] = 7;
          for (; e < 288; e++) i[e] = 8;
          if (0 != (o = new I(i, 288, 257, X, x, (a = 7))).status)
            return alert("HufBuild error: " + o.status), -1;
          for (k = o.root, a = o.m, e = 0; e < 30; e++) i[e] = 5;
          if ((o = new I(i, 30, 0, j, C, (l = 5))).status > 1)
            return (k = null), alert("HufBuild error: " + o.status), -1;
          (f = o.root), (l = o.m);
        }
        return (y = k), (b = f), (g = a), (v = l), H(r, t, n);
      }),
      (_ = function (r, t, n) {
        var e,
          o,
          i,
          s,
          u,
          f,
          a,
          l,
          c,
          h = new Array(316);
        for (e = 0; e < h.length; e++) h[e] = 0;
        if (
          (P(5),
          (a = 257 + T(5)),
          E(5),
          P(5),
          (l = 1 + T(5)),
          E(5),
          P(4),
          (f = 4 + T(4)),
          E(4),
          a > 286 || l > 30)
        )
          return -1;
        for (o = 0; o < f; o++) P(3), (h[D[o]] = T(3)), E(3);
        for (; o < 19; o++) h[D[o]] = 0;
        if (0 != (c = new I(h, 19, 19, null, null, (g = 7))).status) return -1;
        for (y = c.root, g = c.m, s = a + l, e = i = 0; e < s; )
          if ((P(g), (o = (u = y.list[T(g)]).b), E(o), (o = u.n) < 16))
            h[e++] = i = o;
          else if (16 == o) {
            if ((P(2), (o = 3 + T(2)), E(2), e + o > s)) return -1;
            for (; o-- > 0; ) h[e++] = i;
          } else if (17 == o) {
            if ((P(3), (o = 3 + T(3)), E(3), e + o > s)) return -1;
            for (; o-- > 0; ) h[e++] = 0;
            i = 0;
          } else {
            if ((P(7), (o = 11 + T(7)), E(7), e + o > s)) return -1;
            for (; o-- > 0; ) h[e++] = 0;
            i = 0;
          }
        if (
          ((c = new I(h, a, 257, X, x, (g = 9))),
          0 == g && (c.status = 1),
          0 != c.status)
        )
          return c.status, -1;
        for (y = c.root, g = c.m, e = 0; e < l; e++) h[e] = h[e + a];
        return (
          (c = new I(h, l, 0, j, C, (v = 6))),
          (b = c.root),
          0 == (v = c.m) && a > 257
            ? -1
            : (c.status, 0 != c.status ? -1 : H(r, t, n))
        );
      }),
      (F = function (r, t, n) {
        var e, o;
        for (e = 0; e < n; ) {
          if (d && -1 == w) return e;
          if (A > 0) {
            if (0 != w)
              for (; A > 0 && e < n; )
                A--, (m &= 32767), (u &= 32767), (r[t + e++] = s[u++] = s[m++]);
            else {
              for (; A > 0 && e < n; )
                A--, (u &= 32767), P(8), (r[t + e++] = s[u++] = T(8)), E(8);
              0 == A && (w = -1);
            }
            if (e == n) return e;
          }
          if (-1 == w) {
            if (d) break;
            P(1),
              0 != T(1) && (d = !0),
              E(1),
              P(2),
              (w = T(2)),
              E(2),
              (y = null),
              (A = 0);
          }
          switch (w) {
            case 0:
              o = J(r, t + e, n - e);
              break;
            case 1:
              o = null != y ? H(r, t + e, n - e) : N(r, t + e, n - e);
              break;
            case 2:
              o = null != y ? H(r, t + e, n - e) : _(r, t + e, n - e);
              break;
            default:
              o = -1;
          }
          if (-1 == o) return d ? 0 : -1;
          e += o;
        }
        return e;
      }),
      function (r) {
        var t, n;
        null == s && (s = new Array(65536)),
          (u = 0),
          (c = 0),
          (h = 0),
          (w = -1),
          (d = !1),
          (A = m = 0),
          (y = null),
          (p = r),
          (B = 0);
        for (var e = new Array(1024), o = []; (t = F(e, 0, e.length)) > 0; ) {
          var i = new Array(t);
          for (n = 0; n < t; n++) i[n] = String.fromCharCode(e[n]);
          o[o.length] = i.join("");
        }
        return (p = null), o.join("");
      });
  const W = new Worker("worker-BnlTghi1.js"),
    z = n.wrap(W);
  (t.api = z),
    (t.canvasToBlob = async function (
      r,
      { name: t = "image.png", type: n = "image/png" } = {},
    ) {
      const e = await new Promise((t) => r.toBlob(t, n));
      return new File([e], t, { type: n });
    }),
    (t.get = function (r, t = i()) {
      return t("readonly", (t) => e(t.get(r)));
    }),
    (t.idle = function () {
      return new Promise((r) => {
        "requestIdleCallback" in self
          ? requestIdleCallback(r)
          : setTimeout(r, 5e3);
      });
    }),
    (t.imageDataToCanvas = function (r) {
      const t = document.createElement("canvas");
      return (
        (t.width = r.width),
        (t.height = r.height),
        t.getContext("2d").putImageData(r, 0, 0),
        t
      );
    }),
    (t.inflate = O),
    (t.process = async function (r) {
      const t = await z.encodeJxl(r);
      if ("string" == typeof t) throw Error(t);
      return { code: r, jxlData: t, imageData: await z.decodeJxl(t) };
    }),
    (t.set = function (r, t, n = i()) {
      return n("readwrite", (n) => (n.put(t, r), e(n.transaction)));
    }),
    (t.unindent = function (r) {
      const t = r.split("\n");
      "" === t[0] && t.shift();
      const n = t[0].search(/\S/);
      return t.map((r) => r.slice(n)).join("\n");
    });
});
