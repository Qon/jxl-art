if (!self.define) {
  let e,
    t = {};
  const n = (n, s) => (
    (n = new URL(n + ".js", s).href),
    t[n] ||
      new Promise((t) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = t), document.head.appendChild(e);
        } else (e = n), importScripts(n), t();
      }).then(() => {
        let e = t[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (s, i) => {
    const r =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (t[r]) return;
    let c = {};
    const a = (e) => n(e, r),
      o = { module: { uri: r }, exports: c, require: a };
    t[r] = Promise.all(s.map((e) => o[e] || a(e))).then((e) => (i(...e), c));
  };
}
define([], function () {
  "use strict";
  var e = [
    {
      name: "_headers",
      digest:
        "a21fbee9ad9d1f21ac3300ecf3bb51aad8e1270f5d18810d37c26589730884ea",
    },
    {
      name: "index.html",
      digest:
        "fed0f0b7cff1b1c2b324ce27f9b4cbe66a9bab7484acae79bd1860e985d087ec",
    },
    {
      name: "manifest.json",
      digest:
        "37564433e64dde864167f671a6816484613c60216713f34db546e77db45ae464",
    },
    {
      name: "publish.html",
      digest:
        "f8d137db458bf2ff87b8957b13c5242047c933447f80ba48988249ca67fdafae",
    },
    {
      name: "wtf.html",
      digest:
        "c1505585a83e6f149cd18e6acefd70cd2340de034f932aaf019bf4b3bff2e2ec",
    },
    {
      name: "sw.js",
      digest:
        "4dcf3433f8bfc959194a4ea69d743abf292768cf4a480a64e16aacbe50026f8f",
    },
    {
      name: "assets/styles-BJjSVWh9.css",
      digest:
        "47190aeb27ef0e1b71a1caf0dd97acab44134f16bf2df6e2c9af8b0853afe108",
    },
    {
      name: "assets/ejs.min-X9lO47Yx.js",
      digest:
        "d2b81f1de5b30ae997e0a84c7a2d9fc977814a364b7284ac50da5a5d7e5d6152",
    },
    {
      name: "assets/logo-BoiSh0TC.png",
      digest:
        "440d00f27d51c24e8746d32d891583c05b470a77aa3cbb53be791018dae63234",
    },
    {
      name: "assets/jxl-DkjOts8j.wasm",
      digest:
        "8a4db674412de84d7a4af1548e9d0e6b82bdb13578ff669ec7e225eeddb89ade",
    },
    {
      name: "wtf-DsXt6i7D.js",
      digest:
        "b09fa76b3a905cb6ed0dab3402896fb3090806c6c2fd27c98775f65fdac69351",
    },
    {
      name: "publish-D8_R04fh.js",
      digest:
        "b96c919edcc109dbdfa27553cfe05e4303dc74d1883580650a0894c27f98b450",
    },
    {
      name: "comlink-0zLmyqPh.js",
      digest:
        "5615e08335e46154d6d2c0933f1a0a8fbc15ede0d675774034ef5c7070dd8a43",
    },
    {
      name: "utils-Annl8-x4.js",
      digest:
        "9938a79924f1c25be320a934af584bffb6c351728454c3835cea53c11d98a0a2",
    },
    {
      name: "sw-installer-Ss1VIsNn.js",
      digest:
        "54cd60e53cccc6f420a517ddf908a3d6a43f5e64bd1cca61781074901399be43",
    },
    {
      name: "deflate-BWM7g5_r.js",
      digest:
        "f32f84c736a1a05ac7a07916461b13489b5236a8d8e6d651d008858c51e3f30d",
    },
    {
      name: "worker-BnlTghi1.js",
      digest:
        "2e8435c6e6a8666185ece4e8461b798d9fa86d41e46eb43d6140dbd9d9f5f173",
    },
    {
      name: "main-B3LnBNpY.js",
      digest:
        "c8c228caf534204fc306e9caf799015cc1fc911501043d2ea23a9319c372f5a1",
    },
  ];
  const t = ["sw.js", "_headers"];
  addEventListener("install", (n) => {
    const s = e.filter((e) => !t.includes(e.name)).map((e) => e.name);
    n.waitUntil(
      (async () => {
        const e = await caches.open("assets");
        await e.addAll(["/", ...s]);
      })(),
    );
  }),
    addEventListener("activate", (e) => {
      self.clients.claim();
    }),
    addEventListener("fetch", (e) => {
      "GET" === e.request.method &&
        e.respondWith(
          (async () =>
            (await caches.match(e.request, { ignoreSearch: !0 })) ||
            fetch(e.request))(),
        );
    });
});
