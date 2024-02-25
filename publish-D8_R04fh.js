if (!self.define) {
  let e,
    t = {};
  const n = (n, a) => (
    (n = new URL(n + ".js", a).href),
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
  self.define = (a, r) => {
    const o =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (t[o]) return;
    let i = {};
    const s = (e) => n(e, o),
      c = { module: { uri: o }, exports: i, require: s };
    t[o] = Promise.all(a.map((e) => c[e] || s(e))).then((e) => (r(...e), i));
  };
}
define(["./utils-Annl8-x4", "./comlink-0zLmyqPh"], function (e, t) {
  "use strict";
  const n = new Uint8Array([
      2, 230, 22, 153, 133, 117, 235, 88, 115, 237, 101, 112, 253, 102, 39, 7,
    ]),
    a = new Uint8Array([
      204, 139, 126, 93, 137, 227, 169, 235, 243, 20, 48, 2, 15, 97, 157, 98,
    ]);
  !(async function () {})();
  const {
    title: r,
    artist: o,
    publishbtn: i,
    img: s,
    bottest: c,
  } = document.all;
  let l, u, d, p;
  (i.onclick = async () => {
    let t;
    try {
      const e = c.value.toLowerCase(),
        r = await (async function (e, t) {
          return e.subtle.importKey(
            "raw",
            new Uint8Array(
              await e.subtle.digest(
                "SHA-256",
                new TextEncoder("utf8").encode(t),
              ),
            ).slice(0, 16),
            { name: "AES-CBC" },
            !1,
            ["encrypt", "decrypt"],
          );
        })(crypto, e);
      t = JSON.parse(
        await (async function (e, t, n, a) {
          return new TextDecoder("utf8").decode(
            await e.subtle.decrypt({ name: "AES-CBC", iv: n }, a, t),
          );
        })(crypto, a, n, r),
      );
    } catch (e) {
      return console.log(e), void (c.style.borderColor = "red");
    }
    i.disabled = !0;
    const s = new FormData(),
      u = e.unindent(
        `\n    **${o.value}**\n    _“${r.value}”_\n    ${new Date().getFullYear()}\n    image/jxl\n    ${d.byteLength} bytes\n\n    https://jxl-art.surma.technology/?${new URLSearchParams({ zcode: p }).toString()}\n  `,
      );
    s.append("payload_json", JSON.stringify({ content: u })),
      s.append("file", l),
      await fetch(t, { method: "POST", body: s }),
      await e.set("previous-artist", o.value),
      await e.set("previous-title", r.value),
      (location.href = "/");
  }),
    (async function () {
      const t = new URLSearchParams(location.search);
      if (!t.has("payload")) return void (location.href = "/");
      (p = t.get("payload")), (u = e.inflate(atob(p)));
      let n = u;
      for (; n !== (u = ejs.render(n)); n = u);
      const a = await e.get("previous-title");
      a && (r.value = a);
      const c = await e.get("previous-artist");
      let f;
      c && (o.value = c);
      try {
        ({ jxlData: d, imageData: f } = await e.process(u));
      } catch (e) {
        return void (location.href = "/");
      }
      const m = e.imageDataToCanvas(f);
      (l = await e.canvasToBlob(m, { name: "art.jpg", type: "image/jpeg" })),
        (s.src = URL.createObjectURL(l)),
        (i.disabled = !1);
    })();
});
