define(["require"], function (e) {
  "use strict";
  const r = new URLSearchParams(location.search).has("no-cache");
  (async () => {
    if ((r || navigator.serviceWorker.register("sw.js"), r)) {
      const e = await navigator.serviceWorker.getRegistration();
      e && (await e.unregister());
    }
  })();
});
