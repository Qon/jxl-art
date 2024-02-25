define(["exports"], function (e) {
  "use strict";
  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   */ const t = Symbol("Comlink.proxy"),
    n = Symbol("Comlink.endpoint"),
    r = Symbol("Comlink.releaseProxy"),
    a = Symbol("Comlink.finalizer"),
    s = Symbol("Comlink.thrown"),
    o = (e) => ("object" == typeof e && null !== e) || "function" == typeof e,
    i = new Map([
      [
        "proxy",
        {
          canHandle: (e) => o(e) && e[t],
          serialize(e) {
            const { port1: t, port2: n } = new MessageChannel();
            return c(e, t), [n, [n]];
          },
          deserialize: (e) => (e.start(), l(e)),
        },
      ],
      [
        "throw",
        {
          canHandle: (e) => o(e) && s in e,
          serialize({ value: e }) {
            let t;
            return (
              (t =
                e instanceof Error
                  ? {
                      isError: !0,
                      value: {
                        message: e.message,
                        name: e.name,
                        stack: e.stack,
                      },
                    }
                  : { isError: !1, value: e }),
              [t, []]
            );
          },
          deserialize(e) {
            if (e.isError)
              throw Object.assign(new Error(e.value.message), e.value);
            throw e.value;
          },
        },
      ],
    ]);
  function c(e, n = globalThis, r = ["*"]) {
    n.addEventListener("message", function o(i) {
      if (!i || !i.data) return;
      if (
        !(function (e, t) {
          for (const n of e) {
            if (t === n || "*" === n) return !0;
            if (n instanceof RegExp && n.test(t)) return !0;
          }
          return !1;
        })(r, i.origin)
      )
        return void console.warn(
          `Invalid origin '${i.origin}' for comlink proxy`,
        );
      const { id: l, type: p, path: f } = Object.assign({ path: [] }, i.data),
        g = (i.data.argumentList || []).map(b);
      let m;
      try {
        const n = f.slice(0, -1).reduce((e, t) => e[t], e),
          r = f.reduce((e, t) => e[t], e);
        switch (p) {
          case "GET":
            m = r;
            break;
          case "SET":
            (n[f.slice(-1)[0]] = b(i.data.value)), (m = !0);
            break;
          case "APPLY":
            m = r.apply(n, g);
            break;
          case "CONSTRUCT":
            m = (function (e) {
              return Object.assign(e, { [t]: !0 });
            })(new r(...g));
            break;
          case "ENDPOINT":
            {
              const { port1: t, port2: n } = new MessageChannel();
              c(e, n),
                (m = (function (e, t) {
                  return y.set(e, t), e;
                })(t, [t]));
            }
            break;
          case "RELEASE":
            m = void 0;
            break;
          default:
            return;
        }
      } catch (e) {
        m = { value: e, [s]: 0 };
      }
      Promise.resolve(m)
        .catch((e) => ({ value: e, [s]: 0 }))
        .then((t) => {
          const [r, s] = E(t);
          n.postMessage(Object.assign(Object.assign({}, r), { id: l }), s),
            "RELEASE" === p &&
              (n.removeEventListener("message", o),
              u(n),
              a in e && "function" == typeof e[a] && e[a]());
        })
        .catch((e) => {
          const [t, r] = E({
            value: new TypeError("Unserializable return value"),
            [s]: 0,
          });
          n.postMessage(Object.assign(Object.assign({}, t), { id: l }), r);
        });
    }),
      n.start && n.start();
  }
  function u(e) {
    (function (e) {
      return "MessagePort" === e.constructor.name;
    })(e) && e.close();
  }
  function l(e, t) {
    return d(e, [], t);
  }
  function p(e) {
    if (e) throw new Error("Proxy has been released and is not useable");
  }
  function f(e) {
    return v(e, { type: "RELEASE" }).then(() => {
      u(e);
    });
  }
  const g = new WeakMap(),
    m =
      "FinalizationRegistry" in globalThis &&
      new FinalizationRegistry((e) => {
        const t = (g.get(e) || 0) - 1;
        g.set(e, t), 0 === t && f(e);
      });
  function d(e, t = [], a = function () {}) {
    let s = !1;
    const o = new Proxy(a, {
      get(n, a) {
        if ((p(s), a === r))
          return () => {
            !(function (e) {
              m && m.unregister(e);
            })(o),
              f(e),
              (s = !0);
          };
        if ("then" === a) {
          if (0 === t.length) return { then: () => o };
          const n = v(e, {
            type: "GET",
            path: t.map((e) => e.toString()),
          }).then(b);
          return n.then.bind(n);
        }
        return d(e, [...t, a]);
      },
      set(n, r, a) {
        p(s);
        const [o, i] = E(a);
        return v(
          e,
          { type: "SET", path: [...t, r].map((e) => e.toString()), value: o },
          i,
        ).then(b);
      },
      apply(r, a, o) {
        p(s);
        const i = t[t.length - 1];
        if (i === n) return v(e, { type: "ENDPOINT" }).then(b);
        if ("bind" === i) return d(e, t.slice(0, -1));
        const [c, u] = h(o);
        return v(
          e,
          { type: "APPLY", path: t.map((e) => e.toString()), argumentList: c },
          u,
        ).then(b);
      },
      construct(n, r) {
        p(s);
        const [a, o] = h(r);
        return v(
          e,
          {
            type: "CONSTRUCT",
            path: t.map((e) => e.toString()),
            argumentList: a,
          },
          o,
        ).then(b);
      },
    });
    return (
      (function (e, t) {
        const n = (g.get(t) || 0) + 1;
        g.set(t, n), m && m.register(e, t, e);
      })(o, e),
      o
    );
  }
  function h(e) {
    const t = e.map(E);
    return [
      t.map((e) => e[0]),
      ((n = t.map((e) => e[1])), Array.prototype.concat.apply([], n)),
    ];
    var n;
  }
  const y = new WeakMap();
  function E(e) {
    for (const [t, n] of i)
      if (n.canHandle(e)) {
        const [r, a] = n.serialize(e);
        return [{ type: "HANDLER", name: t, value: r }, a];
      }
    return [{ type: "RAW", value: e }, y.get(e) || []];
  }
  function b(e) {
    switch (e.type) {
      case "HANDLER":
        return i.get(e.name).deserialize(e.value);
      case "RAW":
        return e.value;
    }
  }
  function v(e, t, n) {
    return new Promise((r) => {
      const a = new Array(4)
        .fill(0)
        .map(() =>
          Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16),
        )
        .join("-");
      e.addEventListener("message", function t(n) {
        n.data &&
          n.data.id &&
          n.data.id === a &&
          (e.removeEventListener("message", t), r(n.data));
      }),
        e.start && e.start(),
        e.postMessage(Object.assign({ id: a }, t), n);
    });
  }
  (e.expose = c), (e.wrap = l);
});
