if (!self.define) {
  let e,
    t = {};
  const n = (n, i) => (
    (n = new URL(n + ".js", i).href),
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
  self.define = (i, o) => {
    const r =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (t[r]) return;
    let s = {};
    const c = (e) => n(e, r),
      a = { module: { uri: r }, exports: s, require: c };
    t[r] = Promise.all(i.map((e) => a[e] || c(e))).then((e) => (o(...e), s));
  };
}
define([], function () {
  "use strict";
  const { nuke: e } = document.all;
  e.onclick = async () => {
    (e.disabled = !0), (e.textContent = "Nuking...");
    const t = await navigator.serviceWorker.getRegistration();
    t && (await t.unregister());
    for (const e of await caches.keys()) await caches.delete(e);
    e.textContent = "Done.";
  };
});
