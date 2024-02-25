define(["exports"], function (r) {
  "use strict";
  var n,
    e,
    f,
    t,
    o,
    a,
    i,
    l,
    c,
    u,
    d,
    w,
    s,
    _,
    h,
    x,
    y,
    v,
    A,
    m,
    g,
    b,
    p,
    I,
    C,
    j,
    z,
    k,
    S,
    q,
    B,
    D,
    E,
    F,
    G,
    H,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z,
    $,
    rr,
    nr,
    er,
    fr,
    tr,
    or,
    ar,
    ir,
    lr,
    cr,
    ur,
    dr,
    wr,
    sr,
    _r,
    hr,
    xr,
    yr,
    vr,
    Ar,
    mr,
    gr,
    br,
    pr,
    Ir,
    Cr,
    jr,
    zr,
    kr,
    Sr,
    qr,
    Br,
    Dr,
    Er,
    Fr,
    Gr,
    Hr,
    Jr,
    Kr,
    Lr,
    Mr,
    Nr,
    Or,
    Pr,
    Qr,
    Rr,
    Tr,
    Ur,
    Vr,
    Wr,
    Xr,
    Yr,
    Zr,
    $r,
    rn =
      ((er = 32768),
      (fr = 8192),
      (tr = 258),
      (or = 8192),
      (ar = 8191),
      (ir = 262),
      (lr = 32506),
      (cr = 15),
      (ur = 256),
      (dr = 286),
      (wr = 30),
      (sr = 573),
      (_r = parseInt(5)),
      (hr = null),
      (xr = function () {
        (this.fc = 0), (this.dl = 0);
      }),
      (yr = function () {
        (this.dyn_tree = null),
          (this.static_tree = null),
          (this.extra_bits = null),
          (this.extra_base = 0),
          (this.elems = 0),
          (this.max_length = 0),
          (this.max_code = 0);
      }),
      (vr = function (r, n, e, f) {
        (this.good_length = r),
          (this.max_lazy = n),
          (this.nice_length = e),
          (this.max_chain = f);
      }),
      (Ar = function () {
        (this.next = null),
          (this.len = 0),
          (this.ptr = new Array(fr)),
          (this.off = 0);
      }),
      (mr = new Array(
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
      )),
      (gr = new Array(
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
      (br = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7)),
      (pr = new Array(
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
      (Ir = new Array(
        new vr(0, 0, 0, 0),
        new vr(4, 4, 8, 4),
        new vr(4, 5, 16, 8),
        new vr(4, 6, 32, 32),
        new vr(4, 4, 16, 16),
        new vr(8, 16, 32, 32),
        new vr(8, 16, 128, 128),
        new vr(8, 32, 128, 256),
        new vr(32, 128, 258, 1024),
        new vr(32, 258, 258, 4096),
      )),
      (Cr = function (r) {
        (r.next = n), (n = r);
      }),
      (jr = function (r) {
        return d[er + r];
      }),
      (zr = function (r, n) {
        return (d[er + r] = n);
      }),
      (kr = function (r) {
        (hr[a + o++] = r), a + o == fr && $r();
      }),
      (Sr = function (r) {
        (r &= 65535),
          a + o < 8190
            ? ((hr[a + o++] = 255 & r), (hr[a + o++] = r >>> 8))
            : (kr(255 & r), kr(r >>> 8));
      }),
      (qr = function () {
        (h = ((h << _r) ^ (255 & l[g + 3 - 1])) & ar),
          (x = jr(h)),
          (d[32767 & g] = x),
          zr(h, g);
      }),
      (Br = function (r, n) {
        Xr(n[r].fc, n[r].dl);
      }),
      (Dr = function (r) {
        return 255 & (r < 256 ? P[r] : P[256 + (r >> 7)]);
      }),
      (Er = function (r, n, e) {
        return r[n].fc < r[e].fc || (r[n].fc == r[e].fc && N[n] <= N[e]);
      }),
      (Fr = function (r, n, e) {
        var f;
        for (f = 0; f < e && nr < rr.length; f++)
          r[n + f] = 255 & rr.charCodeAt(nr++);
        return f;
      }),
      (Gr = function (r) {
        var n,
          e,
          f = C,
          t = g,
          o = m,
          a = g > lr ? g - lr : 0,
          i = g + tr,
          c = l[t + o - 1],
          u = l[t + o];
        m >= k && (f >>= 2);
        do {
          if (
            l[(n = r) + o] == u &&
            l[n + o - 1] == c &&
            l[n] == l[t] &&
            l[++n] == l[t + 1]
          ) {
            (t += 2), n++;
            do {} while (
              l[++t] == l[++n] &&
              l[++t] == l[++n] &&
              l[++t] == l[++n] &&
              l[++t] == l[++n] &&
              l[++t] == l[++n] &&
              l[++t] == l[++n] &&
              l[++t] == l[++n] &&
              l[++t] == l[++n] &&
              t < i
            );
            if (((e = tr - (i - t)), (t = i - tr), e > o)) {
              if (((b = r), (o = e), e >= tr)) break;
              (c = l[t + o - 1]), (u = l[t + o]);
            }
          }
        } while ((r = d[32767 & r]) > a && 0 != --f);
        return o;
      }),
      (Hr = function () {
        var r,
          n,
          e = 65536 - I - g;
        if (-1 == e) e--;
        else if (g >= 65274) {
          for (r = 0; r < er; r++) l[r] = l[r + er];
          for (b -= er, g -= er, _ -= er, r = 0; r < or; r++)
            (n = jr(r)), zr(r, n >= er ? n - er : 0);
          for (r = 0; r < er; r++) (n = d[r]), (d[r] = n >= er ? n - er : 0);
          e += er;
        }
        p || ((r = Fr(l, g + I, e)) <= 0 ? (p = !0) : (I += r));
      }),
      (Jr = function () {
        p ||
          ((w = 0),
          (s = 0),
          Mr(),
          (function () {
            var r;
            for (r = 0; r < or; r++) d[er + r] = 0;
            if (
              ((j = Ir[z].max_lazy),
              (k = Ir[z].good_length),
              (C = Ir[z].max_chain),
              (g = 0),
              (_ = 0),
              (I = Fr(l, 0, 65536)) <= 0)
            )
              return (p = !0), void (I = 0);
            for (p = !1; I < ir && !p; ) Hr();
            for (h = 0, r = 0; r < 2; r++) h = ((h << _r) ^ (255 & l[r])) & ar;
          })(),
          (e = null),
          (o = 0),
          (a = 0),
          (v = 0),
          z <= 3 ? ((m = 2), (A = 0)) : ((A = 2), (v = 0), (v = 0)),
          (i = !1));
      }),
      (Kr = function (r, n, f) {
        var o;
        return t || (Jr(), (t = !0), 0 != I)
          ? (o = Lr(r, n, f)) == f
            ? f
            : i
              ? o
              : (z <= 3
                  ? (function () {
                      for (; 0 != I && null == e; ) {
                        var r;
                        if (
                          (qr(),
                          0 != x && g - x <= lr && (A = Gr(x)) > I && (A = I),
                          A >= 3)
                        )
                          if (((r = Vr(g - b, A - 3)), (I -= A), A <= j)) {
                            A--;
                            do {
                              g++, qr();
                            } while (0 != --A);
                            g++;
                          } else
                            (g += A),
                              (A = 0),
                              (h =
                                (((h = 255 & l[g]) << _r) ^ (255 & l[g + 1])) &
                                ar);
                        else (r = Vr(0, 255 & l[g])), I--, g++;
                        for (r && (Ur(0), (_ = g)); I < ir && !p; ) Hr();
                      }
                    })()
                  : (function () {
                      for (; 0 != I && null == e; ) {
                        if (
                          (qr(),
                          (m = A),
                          (y = b),
                          (A = 2),
                          0 != x &&
                            m < j &&
                            g - x <= lr &&
                            ((A = Gr(x)) > I && (A = I),
                            3 == A && g - b > 4096 && A--),
                          m >= 3 && A <= m)
                        ) {
                          var r;
                          (r = Vr(g - 1 - y, m - 3)), (I -= m - 1), (m -= 2);
                          do {
                            g++, qr();
                          } while (0 != --m);
                          (v = 0), (A = 2), g++, r && (Ur(0), (_ = g));
                        } else
                          0 != v
                            ? (Vr(0, 255 & l[g - 1]) && (Ur(0), (_ = g)),
                              g++,
                              I--)
                            : ((v = 1), g++, I--);
                        for (; I < ir && !p; ) Hr();
                      }
                    })(),
                0 == I && (0 != v && Vr(0, 255 & l[g - 1]), Ur(1), (i = !0)),
                o + Lr(r, o + n, f - o))
          : ((i = !0), 0);
      }),
      (Lr = function (r, n, f) {
        var t, i, l;
        for (t = 0; null != e && t < f; ) {
          for ((i = f - t) > e.len && (i = e.len), l = 0; l < i; l++)
            r[n + t + l] = e.ptr[e.off + l];
          var c;
          (e.off += i),
            (e.len -= i),
            (t += i),
            0 == e.len && ((c = e), (e = e.next), Cr(c));
        }
        if (t == f) return t;
        if (a < o) {
          for ((i = f - t) > o - a && (i = o - a), l = 0; l < i; l++)
            r[n + t + l] = hr[a + l];
          (t += i), o == (a += i) && (o = a = 0);
        }
        return t;
      }),
      (Mr = function () {
        var r, n, e, f, t;
        if (0 == D[0].dl) {
          for (
            F.dyn_tree = S,
              F.static_tree = B,
              F.extra_bits = mr,
              F.extra_base = 257,
              F.elems = dr,
              F.max_length = cr,
              F.max_code = 0,
              G.dyn_tree = q,
              G.static_tree = D,
              G.extra_bits = gr,
              G.extra_base = 0,
              G.elems = wr,
              G.max_length = cr,
              G.max_code = 0,
              H.dyn_tree = E,
              H.static_tree = null,
              H.extra_bits = br,
              H.extra_base = 0,
              H.elems = 19,
              H.max_length = 7,
              H.max_code = 0,
              e = 0,
              f = 0;
            f < 28;
            f++
          )
            for (Q[f] = e, r = 0; r < 1 << mr[f]; r++) O[e++] = f;
          for (O[e - 1] = f, t = 0, f = 0; f < 16; f++)
            for (R[f] = t, r = 0; r < 1 << gr[f]; r++) P[t++] = f;
          for (t >>= 7; f < wr; f++)
            for (R[f] = t << 7, r = 0; r < 1 << (gr[f] - 7); r++)
              P[256 + t++] = f;
          for (n = 0; n <= cr; n++) J[n] = 0;
          for (r = 0; r <= 143; ) (B[r++].dl = 8), J[8]++;
          for (; r <= 255; ) (B[r++].dl = 9), J[9]++;
          for (; r <= 279; ) (B[r++].dl = 7), J[7]++;
          for (; r <= 287; ) (B[r++].dl = 8), J[8]++;
          for (Pr(B, 287), r = 0; r < wr; r++)
            (D[r].dl = 5), (D[r].fc = Yr(r, 5));
          Nr();
        }
      }),
      (Nr = function () {
        var r;
        for (r = 0; r < dr; r++) S[r].fc = 0;
        for (r = 0; r < wr; r++) q[r].fc = 0;
        for (r = 0; r < 19; r++) E[r].fc = 0;
        (S[256].fc = 1), (Z = $ = 0), (U = V = W = 0), (X = 0), (Y = 1);
      }),
      (Or = function (r, n) {
        for (
          var e = K[n], f = n << 1;
          f <= L && (f < L && Er(r, K[f + 1], K[f]) && f++, !Er(r, e, K[f]));

        )
          (K[n] = K[f]), (n = f), (f <<= 1);
        K[n] = e;
      }),
      (Pr = function (r, n) {
        var e,
          f,
          t = new Array(16),
          o = 0;
        for (e = 1; e <= cr; e++) (o = (o + J[e - 1]) << 1), (t[e] = o);
        for (f = 0; f <= n; f++) {
          var a = r[f].dl;
          0 != a && (r[f].fc = Yr(t[a]++, a));
        }
      }),
      (Qr = function (r) {
        var n,
          e,
          f = r.dyn_tree,
          t = r.static_tree,
          o = r.elems,
          a = -1,
          i = o;
        for (L = 0, M = sr, n = 0; n < o; n++)
          0 != f[n].fc ? ((K[++L] = a = n), (N[n] = 0)) : (f[n].dl = 0);
        for (; L < 2; ) {
          var l = (K[++L] = a < 2 ? ++a : 0);
          (f[l].fc = 1), (N[l] = 0), Z--, null != t && ($ -= t[l].dl);
        }
        for (r.max_code = a, n = L >> 1; n >= 1; n--) Or(f, n);
        do {
          (n = K[1]),
            (K[1] = K[L--]),
            Or(f, 1),
            (e = K[1]),
            (K[--M] = n),
            (K[--M] = e),
            (f[i].fc = f[n].fc + f[e].fc),
            N[n] > N[e] + 1 ? (N[i] = N[n]) : (N[i] = N[e] + 1),
            (f[n].dl = f[e].dl = i),
            (K[1] = i++),
            Or(f, 1);
        } while (L >= 2);
        (K[--M] = K[1]),
          (function (r) {
            var n,
              e,
              f,
              t,
              o,
              a,
              i = r.dyn_tree,
              l = r.extra_bits,
              c = r.extra_base,
              u = r.max_code,
              d = r.max_length,
              w = r.static_tree,
              s = 0;
            for (t = 0; t <= cr; t++) J[t] = 0;
            for (i[K[M]].dl = 0, n = M + 1; n < sr; n++)
              (t = i[i[(e = K[n])].dl].dl + 1) > d && ((t = d), s++),
                (i[e].dl = t),
                e > u ||
                  (J[t]++,
                  (o = 0),
                  e >= c && (o = l[e - c]),
                  (a = i[e].fc),
                  (Z += a * (t + o)),
                  null != w && ($ += a * (w[e].dl + o)));
            if (0 != s) {
              do {
                for (t = d - 1; 0 == J[t]; ) t--;
                J[t]--, (J[t + 1] += 2), J[d]--, (s -= 2);
              } while (s > 0);
              for (t = d; 0 != t; t--)
                for (e = J[t]; 0 != e; )
                  (f = K[--n]) > u ||
                    (i[f].dl != t &&
                      ((Z += (t - i[f].dl) * i[f].fc), (i[f].fc = t)),
                    e--);
            }
          })(r),
          Pr(f, a);
      }),
      (Rr = function (r, n) {
        var e,
          f,
          t = -1,
          o = r[0].dl,
          a = 0,
          i = 7,
          l = 4;
        for (
          0 == o && ((i = 138), (l = 3)), r[n + 1].dl = 65535, e = 0;
          e <= n;
          e++
        )
          (f = o),
            (o = r[e + 1].dl),
            (++a < i && f == o) ||
              (a < l
                ? (E[f].fc += a)
                : 0 != f
                  ? (f != t && E[f].fc++, E[16].fc++)
                  : a <= 10
                    ? E[17].fc++
                    : E[18].fc++,
              (a = 0),
              (t = f),
              0 == o
                ? ((i = 138), (l = 3))
                : f == o
                  ? ((i = 6), (l = 3))
                  : ((i = 7), (l = 4)));
      }),
      (Tr = function (r, n) {
        var e,
          f,
          t = -1,
          o = r[0].dl,
          a = 0,
          i = 7,
          l = 4;
        for (0 == o && ((i = 138), (l = 3)), e = 0; e <= n; e++)
          if (((f = o), (o = r[e + 1].dl), !(++a < i && f == o))) {
            if (a < l)
              do {
                Br(f, E);
              } while (0 != --a);
            else
              0 != f
                ? (f != t && (Br(f, E), a--), Br(16, E), Xr(a - 3, 2))
                : a <= 10
                  ? (Br(17, E), Xr(a - 3, 3))
                  : (Br(18, E), Xr(a - 11, 7));
            (a = 0),
              (t = f),
              0 == o
                ? ((i = 138), (l = 3))
                : f == o
                  ? ((i = 6), (l = 3))
                  : ((i = 7), (l = 4));
          }
      }),
      (Ur = function (r) {
        var n, e, f, t, o;
        if (
          ((t = g - _),
          (T[W] = X),
          Qr(F),
          Qr(G),
          (f = (function () {
            var r;
            for (
              Rr(S, F.max_code), Rr(q, G.max_code), Qr(H), r = 18;
              r >= 3 && 0 == E[pr[r]].dl;
              r--
            );
            return (Z += 3 * (r + 1) + 5 + 5 + 4), r;
          })()),
          (e = ($ + 3 + 7) >> 3) <= (n = (Z + 3 + 7) >> 3) && (n = e),
          t + 4 <= n && _ >= 0)
        )
          for (Xr(0 + r, 3), Zr(), Sr(t), Sr(~t), o = 0; o < t; o++)
            kr(l[_ + o]);
        else
          e == n
            ? (Xr(2 + r, 3), Wr(B, D))
            : (Xr(4 + r, 3),
              (function (r, n, e) {
                var f;
                for (
                  Xr(r - 257, 5), Xr(n - 1, 5), Xr(e - 4, 4), f = 0;
                  f < e;
                  f++
                )
                  Xr(E[pr[f]].dl, 3);
                Tr(S, r - 1), Tr(q, n - 1);
              })(F.max_code + 1, G.max_code + 1, f + 1),
              Wr(S, q));
        Nr(), 0 != r && Zr();
      }),
      (Vr = function (r, n) {
        if (
          ((u[U++] = n),
          0 == r
            ? S[n].fc++
            : (r--,
              S[O[n] + ur + 1].fc++,
              q[Dr(r)].fc++,
              (c[V++] = r),
              (X |= Y)),
          (Y <<= 1),
          0 == (7 & U) && ((T[W++] = X), (X = 0), (Y = 1)),
          z > 2 && 0 == (4095 & U))
        ) {
          var e,
            f = 8 * U,
            t = g - _;
          for (e = 0; e < wr; e++) f += q[e].fc * (5 + gr[e]);
          if (((f >>= 3), V < parseInt(U / 2) && f < parseInt(t / 2)))
            return !0;
        }
        return 8191 == U || 8192 == V;
      }),
      (Wr = function (r, n) {
        var e,
          f,
          t,
          o,
          a = 0,
          i = 0,
          l = 0,
          d = 0;
        if (0 != U)
          do {
            0 == (7 & a) && (d = T[l++]),
              (f = 255 & u[a++]),
              0 == (1 & d)
                ? Br(f, r)
                : ((t = O[f]),
                  Br(t + ur + 1, r),
                  0 != (o = mr[t]) && ((f -= Q[t]), Xr(f, o)),
                  (e = c[i++]),
                  (t = Dr(e)),
                  Br(t, n),
                  0 != (o = gr[t]) && ((e -= R[t]), Xr(e, o))),
              (d >>= 1);
          } while (a < U);
        Br(256, r);
      }),
      (Xr = function (r, n) {
        s > 16 - n
          ? (Sr((w |= r << s)), (w = r >> (16 - s)), (s += n - 16))
          : ((w |= r << s), (s += n));
      }),
      (Yr = function (r, n) {
        var e = 0;
        do {
          (e |= 1 & r), (r >>= 1), (e <<= 1);
        } while (--n > 0);
        return e >> 1;
      }),
      (Zr = function () {
        s > 8 ? Sr(w) : s > 0 && kr(w), (w = 0), (s = 0);
      }),
      ($r = function () {
        if (0 != o) {
          var r, t;
          for (
            null != n ? ((i = n), (n = n.next)) : (i = new Ar()),
              i.next = null,
              i.len = i.off = 0,
              r = i,
              null == e ? (e = f = r) : (f = f.next = r),
              r.len = o - a,
              t = 0;
            t < r.len;
            t++
          )
            r.ptr[t] = hr[a + t];
          o = a = 0;
        }
        var i;
      }),
      function (r, o) {
        var a, i;
        (rr = r),
          (nr = 0),
          void 0 === o && (o = 6),
          (function (r) {
            var o;
            if (
              (r ? (r < 1 ? (r = 1) : r > 9 && (r = 9)) : (r = 6),
              (z = r),
              (t = !1),
              (p = !1),
              null == hr)
            ) {
              for (
                n = e = f = null,
                  hr = new Array(fr),
                  l = new Array(65536),
                  c = new Array(8192),
                  u = new Array(32832),
                  d = new Array(65536),
                  S = new Array(sr),
                  o = 0;
                o < sr;
                o++
              )
                S[o] = new xr();
              for (q = new Array(61), o = 0; o < 61; o++) q[o] = new xr();
              for (B = new Array(288), o = 0; o < 288; o++) B[o] = new xr();
              for (D = new Array(wr), o = 0; o < wr; o++) D[o] = new xr();
              for (E = new Array(39), o = 0; o < 39; o++) E[o] = new xr();
              (F = new yr()),
                (G = new yr()),
                (H = new yr()),
                (J = new Array(16)),
                (K = new Array(573)),
                (N = new Array(573)),
                (O = new Array(256)),
                (P = new Array(512)),
                (Q = new Array(29)),
                (R = new Array(wr)),
                (T = new Array(parseInt(1024)));
            }
          })(o);
        for (var w = new Array(1024), s = []; (a = Kr(w, 0, w.length)) > 0; ) {
          var _ = new Array(a);
          for (i = 0; i < a; i++) _[i] = String.fromCharCode(w[i]);
          s[s.length] = _.join("");
        }
        return (rr = null), s.join("");
      });
  r.default = rn;
});
