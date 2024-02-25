if (!self.define) {
  let e,
    t = {};
  const r = (r, n) => (
    (r = new URL(r + ".js", n).href),
    t[r] ||
      new Promise((t) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = r), (e.onload = t), document.head.appendChild(e);
        } else (e = r), importScripts(r), t();
      }).then(() => {
        let e = t[r];
        if (!e) throw new Error(`Module ${r} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, a) => {
    const o =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (t[o]) return;
    let i = {};
    const s = (e) => r(e, o),
      l = { module: { uri: o }, exports: i, require: s };
    t[o] = Promise.all(n.map((e) => l[e] || s(e))).then((e) => (a(...e), i));
  };
}
define(["module", "require", "./comlink-0zLmyqPh"], function (e, t, r) {
  "use strict";
  var n,
    a =
      ((n = e.uri),
      function (t = {}) {
        var r,
          a,
          o = t;
        (o.ready = new Promise((e, t) => {
          (r = e), (a = t);
        })),
          [
            "_main",
            "_memory",
            "___indirect_function_table",
            "_fflush",
            "onRuntimeInitialized",
          ].forEach((e) => {
            Object.getOwnPropertyDescriptor(o.ready, e) ||
              Object.defineProperty(o.ready, e, {
                get: () =>
                  $(
                    "You are getting " +
                      e +
                      " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
                  ),
                set: () =>
                  $(
                    "You are setting " +
                      e +
                      " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js",
                  ),
              });
          });
        var i = Object.assign({}, o),
          s = [],
          l = "./this.program",
          u = (e, t) => {
            throw t;
          };
        if (o.ENVIRONMENT)
          throw Error(
            "Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)",
          );
        var c,
          d = "";
        if (
          ((d = self.location.href),
          n && (d = n),
          (d =
            0 !== d.indexOf("blob:")
              ? d.substr(0, d.replace(/[?#].*/, "").lastIndexOf("/") + 1)
              : ""),
          "object" != typeof window && "function" != typeof importScripts)
        )
          throw Error(
            "not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)",
          );
        c = (e) => {
          var t = new XMLHttpRequest();
          return (
            t.open("GET", e, !1),
            (t.responseType = "arraybuffer"),
            t.send(null),
            new Uint8Array(t.response)
          );
        };
        var f,
          h = o.print || console.log.bind(console),
          m = o.printErr || console.error.bind(console);
        Object.assign(o, i),
          (i = null),
          Object.getOwnPropertyDescriptor(o, "fetchSettings") &&
            $(
              "`Module.fetchSettings` was supplied but `fetchSettings` not included in INCOMING_MODULE_JS_API",
            ),
          o.arguments && (s = o.arguments),
          q("arguments", "arguments_"),
          o.thisProgram && (l = o.thisProgram),
          q("thisProgram", "thisProgram"),
          o.quit && (u = o.quit),
          q("quit", "quit_"),
          S(
            void 0 === o.memoryInitializerPrefixURL,
            "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead",
          ),
          S(
            void 0 === o.pthreadMainPrefixURL,
            "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead",
          ),
          S(
            void 0 === o.cdInitializerPrefixURL,
            "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead",
          ),
          S(
            void 0 === o.filePackagePrefixURL,
            "Module.filePackagePrefixURL option was removed, use Module.locateFile instead",
          ),
          S(
            void 0 === o.read,
            "Module.read option was removed (modify read_ in JS)",
          ),
          S(
            void 0 === o.readAsync,
            "Module.readAsync option was removed (modify readAsync in JS)",
          ),
          S(
            void 0 === o.readBinary,
            "Module.readBinary option was removed (modify readBinary in JS)",
          ),
          S(
            void 0 === o.setWindowTitle,
            "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)",
          ),
          S(
            void 0 === o.TOTAL_MEMORY,
            "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY",
          ),
          q("asm", "wasmExports"),
          q("read", "read_"),
          q("readAsync", "readAsync"),
          q("readBinary", "readBinary"),
          q("setWindowTitle", "setWindowTitle"),
          S(
            !0,
            "web environment detected but not enabled at build time.  Add 'web' to `-sENVIRONMENT` to enable.",
          ),
          S(
            !0,
            "node environment detected but not enabled at build time.  Add 'node' to `-sENVIRONMENT` to enable.",
          ),
          S(
            !0,
            "shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.",
          ),
          o.wasmBinary && (f = o.wasmBinary),
          q("wasmBinary", "wasmBinary"),
          "object" != typeof WebAssembly &&
            $("no native wasm support detected");
        var p,
          g,
          y,
          v,
          w,
          E,
          b,
          T,
          _,
          A = !1;
        function S(e, t) {
          e || $("Assertion failed" + (t ? ": " + t : ""));
        }
        function O() {
          var e = p.buffer;
          (o.HEAP8 = g = new Int8Array(e)),
            (o.HEAP16 = v = new Int16Array(e)),
            (o.HEAPU8 = y = new Uint8Array(e)),
            (o.HEAPU16 = w = new Uint16Array(e)),
            (o.HEAP32 = E = new Int32Array(e)),
            (o.HEAPU32 = b = new Uint32Array(e)),
            (o.HEAPF32 = T = new Float32Array(e)),
            (o.HEAPF64 = _ = new Float64Array(e));
        }
        function C() {
          if (!A) {
            var e = Ir();
            0 == e && (e += 4);
            var t = b[e >> 2],
              r = b[(e + 4) >> 2];
            (34821223 == t && 2310721022 == r) ||
              $(
                `Stack overflow! Stack cookie has been overwritten at ${ne(e)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${ne(r)} ${ne(t)}`,
              ),
              1668509029 != b[0] &&
                $(
                  "Runtime error: The application has corrupted its heap memory area (address zero)!",
                );
          }
        }
        S(
          !o.STACK_SIZE,
          "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time",
        ),
          S(
            "undefined" != typeof Int32Array &&
              "undefined" != typeof Float64Array &&
              null != Int32Array.prototype.subarray &&
              null != Int32Array.prototype.set,
            "JS engine does not provide full typed array support",
          ),
          S(
            !o.wasmMemory,
            "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally",
          ),
          S(
            !o.INITIAL_MEMORY,
            "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically",
          );
        var M = new Int16Array(1),
          F = new Int8Array(M.buffer);
        if (((M[0] = 25459), 115 !== F[0] || 99 !== F[1]))
          throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";
        var I = [],
          P = [],
          N = [],
          R = [],
          D = !1;
        function L() {
          var e = o.preRun.shift();
          I.unshift(e);
        }
        S(
          Math.imul,
          "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill",
        ),
          S(
            Math.fround,
            "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill",
          ),
          S(
            Math.clz32,
            "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill",
          ),
          S(
            Math.trunc,
            "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill",
          );
        var k = 0,
          U = null,
          j = null,
          x = {};
        function $(e) {
          throw (
            (o.onAbort?.(e),
            m((e = "Aborted(" + e + ")")),
            (A = !0),
            (e = new WebAssembly.RuntimeError(e)),
            a(e),
            e)
          );
        }
        var W,
          B,
          G,
          H = (e) => e.startsWith("data:application/octet-stream;base64,"),
          Y = (e) => e.startsWith("file://");
        function V(e) {
          return function () {
            S(
              D,
              `native function \`${e}\` called before runtime initialization`,
            );
            var t = Tr[e];
            return (
              S(t, `exported native function \`${e}\` not found`),
              t.apply(null, arguments)
            );
          };
        }
        if (o.locateFile) {
          if (!H((W = "jxl.wasm"))) {
            var z = W;
            W = o.locateFile ? o.locateFile(z, d) : d + z;
          }
        } else W = new URL("jxl.wasm", e.uri).href;
        function J(e) {
          if (e == W && f) return new Uint8Array(f);
          if (c) return c(e);
          throw "both async and sync fetching of the wasm failed";
        }
        function K(e, t, r) {
          return (function (e) {
            return f || "function" != typeof fetch
              ? Promise.resolve().then(() => J(e))
              : fetch(e, { credentials: "same-origin" })
                  .then((t) => {
                    if (!t.ok)
                      throw "failed to load wasm binary file at '" + e + "'";
                    return t.arrayBuffer();
                  })
                  .catch(() => J(e));
          })(e)
            .then((e) => WebAssembly.instantiate(e, t))
            .then((e) => e)
            .then(r, (e) => {
              m(`failed to asynchronously prepare wasm: ${e}`),
                Y(W) &&
                  m(
                    `warning: Loading from a file URI (${W}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`,
                  ),
                $(e);
            });
        }
        function q(e, t) {
          Object.getOwnPropertyDescriptor(o, e) ||
            Object.defineProperty(o, e, {
              configurable: !0,
              get() {
                $(
                  `\`Module.${e}\` has been replaced by \`${t}\` (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)`,
                );
              },
            });
        }
        function X(e) {
          return (
            "FS_createPath" === e ||
            "FS_createDataFile" === e ||
            "FS_createPreloadedFile" === e ||
            "FS_unlink" === e ||
            "addRunDependency" === e ||
            "FS_createLazyFile" === e ||
            "FS_createDevice" === e ||
            "removeRunDependency" === e
          );
        }
        function Z(e, t) {
          "undefined" != typeof globalThis &&
            Object.defineProperty(globalThis, e, {
              configurable: !0,
              get() {
                ae(`\`${e}\` is not longer defined by emscripten. ${t}`);
              },
            });
        }
        function Q(e) {
          Object.getOwnPropertyDescriptor(o, e) ||
            Object.defineProperty(o, e, {
              configurable: !0,
              get() {
                var t = `'${e}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
                X(e) &&
                  (t +=
                    ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),
                  $(t);
              },
            });
        }
        function ee(e) {
          (this.name = "ExitStatus"),
            (this.message = `Program terminated with exit(${e})`),
            (this.status = e);
        }
        Z("buffer", "Please use HEAP8.buffer or wasmMemory.buffer"),
          Z("asm", "Please use wasmExports instead");
        var te = (e) => {
            for (; 0 < e.length; ) e.shift()(o);
          },
          re = o.noExitRuntime || !0,
          ne = (e) => (
            S("number" == typeof e),
            "0x" + (e >>> 0).toString(16).padStart(8, "0")
          ),
          ae = (e) => {
            ae.ca || (ae.ca = {}), ae.ca[e] || ((ae.ca[e] = 1), m(e));
          };
        function oe(e) {
          (this.V = e - 24),
            (this.Ha = function (e) {
              b[(this.V + 4) >> 2] = e;
            }),
            (this.za = function (e) {
              b[(this.V + 8) >> 2] = e;
            }),
            (this.G = function (e, t) {
              this.$(), this.Ha(e), this.za(t);
            }),
            (this.$ = function () {
              b[(this.V + 16) >> 2] = 0;
            });
        }
        var ie = (e, t) => {
            for (var r = 0, n = e.length - 1; 0 <= n; n--) {
              var a = e[n];
              "." === a
                ? e.splice(n, 1)
                : ".." === a
                  ? (e.splice(n, 1), r++)
                  : r && (e.splice(n, 1), r--);
            }
            if (t) for (; r; r--) e.unshift("..");
            return e;
          },
          se = (e) => {
            var t = "/" === e.charAt(0),
              r = "/" === e.substr(-1);
            return (
              (e = ie(
                e.split("/").filter((e) => !!e),
                !t,
              ).join("/")) ||
                t ||
                (e = "."),
              e && r && (e += "/"),
              (t ? "/" : "") + e
            );
          },
          le = (e) => {
            var t =
              /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
                .exec(e)
                .slice(1);
            return (
              (e = t[0]),
              (t = t[1]),
              e || t ? (t && (t = t.substr(0, t.length - 1)), e + t) : "."
            );
          },
          ue = (e) => {
            if ("/" === e) return "/";
            var t = (e = (e = se(e)).replace(/\/$/, "")).lastIndexOf("/");
            return -1 === t ? e : e.substr(t + 1);
          },
          ce = (e) =>
            (ce = (() => {
              if (
                "object" == typeof crypto &&
                "function" == typeof crypto.getRandomValues
              )
                return (e) => crypto.getRandomValues(e);
              $(
                "no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };",
              );
            })())(e);
        function de() {
          for (
            var e = "", t = !1, r = arguments.length - 1;
            -1 <= r && !t;
            r--
          ) {
            if ("string" != typeof (t = 0 <= r ? arguments[r] : "/"))
              throw new TypeError("Arguments to path.resolve must be strings");
            if (!t) return "";
            (e = t + "/" + e), (t = "/" === t.charAt(0));
          }
          return (
            (t ? "/" : "") +
              (e = ie(
                e.split("/").filter((e) => !!e),
                !t,
              ).join("/")) || "."
          );
        }
        var fe = new TextDecoder("utf8"),
          he = (e) => {
            for (var t = 0; e[t] && !(NaN <= t); ) ++t;
            return fe.decode(
              e.buffer ? e.subarray(0, t) : new Uint8Array(e.slice(0, t)),
            );
          },
          me = [],
          pe = (e) => {
            for (var t = 0, r = 0; r < e.length; ++r) {
              var n = e.charCodeAt(r);
              127 >= n
                ? t++
                : 2047 >= n
                  ? (t += 2)
                  : 55296 <= n && 57343 >= n
                    ? ((t += 4), ++r)
                    : (t += 3);
            }
            return t;
          },
          ge = (e, t, r, n) => {
            if (
              (S(
                "string" == typeof e,
                `stringToUTF8Array expects a string (got ${typeof e})`,
              ),
              !(0 < n))
            )
              return 0;
            var a = r;
            n = r + n - 1;
            for (var o = 0; o < e.length; ++o) {
              var i = e.charCodeAt(o);
              if (
                (55296 <= i &&
                  57343 >= i &&
                  (i =
                    (65536 + ((1023 & i) << 10)) | (1023 & e.charCodeAt(++o))),
                127 >= i)
              ) {
                if (r >= n) break;
                t[r++] = i;
              } else {
                if (2047 >= i) {
                  if (r + 1 >= n) break;
                  t[r++] = 192 | (i >> 6);
                } else {
                  if (65535 >= i) {
                    if (r + 2 >= n) break;
                    t[r++] = 224 | (i >> 12);
                  } else {
                    if (r + 3 >= n) break;
                    1114111 < i &&
                      ae(
                        "Invalid Unicode code point " +
                          ne(i) +
                          " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).",
                      ),
                      (t[r++] = 240 | (i >> 18)),
                      (t[r++] = 128 | ((i >> 12) & 63));
                  }
                  t[r++] = 128 | ((i >> 6) & 63);
                }
                t[r++] = 128 | (63 & i);
              }
            }
            return (t[r] = 0), r - a;
          };
        function ye(e, t) {
          var r = Array(pe(e) + 1);
          return (e = ge(e, r, 0, r.length)), t && (r.length = e), r;
        }
        var ve = [];
        function we(e, t) {
          (ve[e] = { input: [], m: [], I: t }), Ke(e, Ee);
        }
        var Ee = {
            open(e) {
              var t = ve[e.node.M];
              if (!t) throw new Le(43);
              (e.j = t), (e.seekable = !1);
            },
            close(e) {
              e.j.I.S(e.j);
            },
            S(e) {
              e.j.I.S(e.j);
            },
            read(e, t, r, n) {
              if (!e.j || !e.j.I.ha) throw new Le(60);
              for (var a = 0, o = 0; o < n; o++) {
                try {
                  var i = e.j.I.ha(e.j);
                } catch (e) {
                  throw new Le(29);
                }
                if (void 0 === i && 0 === a) throw new Le(6);
                if (null == i) break;
                a++, (t[r + o] = i);
              }
              return a && (e.node.timestamp = Date.now()), a;
            },
            write(e, t, r, n) {
              if (!e.j || !e.j.I.aa) throw new Le(60);
              try {
                for (var a = 0; a < n; a++) e.j.I.aa(e.j, t[r + a]);
              } catch (e) {
                throw new Le(29);
              }
              return n && (e.node.timestamp = Date.now()), a;
            },
          },
          be = {
            ha() {
              e: {
                if (!me.length) {
                  var e = null;
                  if (
                    ("undefined" != typeof window &&
                    "function" == typeof window.prompt
                      ? null !== (e = window.prompt("Input: ")) && (e += "\n")
                      : "function" == typeof readline &&
                        null !== (e = readline()) &&
                        (e += "\n"),
                    !e)
                  ) {
                    e = null;
                    break e;
                  }
                  me = ye(e, !0);
                }
                e = me.shift();
              }
              return e;
            },
            aa(e, t) {
              null === t || 10 === t
                ? (h(he(e.m)), (e.m = []))
                : 0 != t && e.m.push(t);
            },
            S(e) {
              e.m && 0 < e.m.length && (h(he(e.m)), (e.m = []));
            },
            Ca: () => ({
              Xa: 25856,
              Za: 5,
              Wa: 191,
              Ya: 35387,
              Va: [
                3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              ],
            }),
            Da: () => 0,
            Ea: () => [24, 80],
          },
          Te = {
            aa(e, t) {
              null === t || 10 === t
                ? (m(he(e.m)), (e.m = []))
                : 0 != t && e.m.push(t);
            },
            S(e) {
              e.m && 0 < e.m.length && (m(he(e.m)), (e.m = []));
            },
          };
        function _e(e, t) {
          var r = e.h ? e.h.length : 0;
          r >= t ||
            ((t = Math.max(t, (r * (1048576 > r ? 2 : 1.125)) >>> 0)),
            0 != r && (t = Math.max(t, 256)),
            (r = e.h),
            (e.h = new Uint8Array(t)),
            0 < e.l && e.h.set(r.subarray(0, e.l), 0));
        }
        var Ae = {
            A: null,
            H: () => Ae.createNode(null, "/", 16895, 0),
            createNode(e, t, r, n) {
              if (24576 == (61440 & r) || 4096 == (61440 & r)) throw new Le(63);
              return (
                Ae.A ||
                  (Ae.A = {
                    dir: {
                      node: {
                        v: Ae.g.v,
                        C: Ae.g.C,
                        O: Ae.g.O,
                        T: Ae.g.T,
                        oa: Ae.g.oa,
                        qa: Ae.g.qa,
                        pa: Ae.g.pa,
                        ma: Ae.g.ma,
                        W: Ae.g.W,
                      },
                      stream: { J: Ae.i.J },
                    },
                    file: {
                      node: { v: Ae.g.v, C: Ae.g.C },
                      stream: {
                        J: Ae.i.J,
                        read: Ae.i.read,
                        write: Ae.i.write,
                        R: Ae.i.R,
                        ja: Ae.i.ja,
                        la: Ae.i.la,
                      },
                    },
                    link: {
                      node: { v: Ae.g.v, C: Ae.g.C, P: Ae.g.P },
                      stream: {},
                    },
                    ea: { node: { v: Ae.g.v, C: Ae.g.C }, stream: Je },
                  }),
                16384 == (61440 & (r = We(e, t, r, n)).mode)
                  ? ((r.g = Ae.A.dir.node), (r.i = Ae.A.dir.stream), (r.h = {}))
                  : 32768 == (61440 & r.mode)
                    ? ((r.g = Ae.A.file.node),
                      (r.i = Ae.A.file.stream),
                      (r.l = 0),
                      (r.h = null))
                    : 40960 == (61440 & r.mode)
                      ? ((r.g = Ae.A.link.node), (r.i = Ae.A.link.stream))
                      : 8192 == (61440 & r.mode) &&
                        ((r.g = Ae.A.ea.node), (r.i = Ae.A.ea.stream)),
                (r.timestamp = Date.now()),
                e && ((e.h[t] = r), (e.timestamp = r.timestamp)),
                r
              );
            },
            $a: (e) =>
              e.h
                ? e.h.subarray
                  ? e.h.subarray(0, e.l)
                  : new Uint8Array(e.h)
                : new Uint8Array(0),
            g: {
              v(e) {
                var t = {};
                return (
                  (t.wa = 8192 == (61440 & e.mode) ? e.id : 1),
                  (t.ia = e.id),
                  (t.mode = e.mode),
                  (t.La = 1),
                  (t.uid = 0),
                  (t.ya = 0),
                  (t.M = e.M),
                  16384 == (61440 & e.mode)
                    ? (t.size = 4096)
                    : 32768 == (61440 & e.mode)
                      ? (t.size = e.l)
                      : 40960 == (61440 & e.mode)
                        ? (t.size = e.link.length)
                        : (t.size = 0),
                  (t.sa = new Date(e.timestamp)),
                  (t.Ja = new Date(e.timestamp)),
                  (t.va = new Date(e.timestamp)),
                  (t.ta = 4096),
                  (t.ua = Math.ceil(t.size / t.ta)),
                  t
                );
              },
              C(e, t) {
                if (
                  (void 0 !== t.mode && (e.mode = t.mode),
                  void 0 !== t.timestamp && (e.timestamp = t.timestamp),
                  void 0 !== t.size && ((t = t.size), e.l != t))
                )
                  if (0 == t) (e.h = null), (e.l = 0);
                  else {
                    var r = e.h;
                    (e.h = new Uint8Array(t)),
                      r && e.h.set(r.subarray(0, Math.min(t, e.l))),
                      (e.l = t);
                  }
              },
              O() {
                throw ke[44];
              },
              T: (e, t, r, n) => Ae.createNode(e, t, r, n),
              oa(e, t, r) {
                if (16384 == (61440 & e.mode)) {
                  try {
                    var n = $e(t, r);
                  } catch (e) {}
                  if (n) for (var a in n.h) throw new Le(55);
                }
                delete e.parent.h[e.name],
                  (e.parent.timestamp = Date.now()),
                  (e.name = r),
                  (t.h[r] = e),
                  (t.timestamp = e.parent.timestamp),
                  (e.parent = t);
              },
              qa(e, t) {
                delete e.h[t], (e.timestamp = Date.now());
              },
              pa(e, t) {
                var r,
                  n = $e(e, t);
                for (r in n.h) throw new Le(55);
                delete e.h[t], (e.timestamp = Date.now());
              },
              ma(e) {
                var t,
                  r = [".", ".."];
                for (t of Object.keys(e.h)) r.push(t);
                return r;
              },
              W: (e, t, r) => (
                ((e = Ae.createNode(e, t, 41471, 0)).link = r), e
              ),
              P(e) {
                if (40960 != (61440 & e.mode)) throw new Le(28);
                return e.link;
              },
            },
            i: {
              read(e, t, r, n, a) {
                var o = e.node.h;
                if (a >= e.node.l) return 0;
                if (
                  (S(0 <= (e = Math.min(e.node.l - a, n))), 8 < e && o.subarray)
                )
                  t.set(o.subarray(a, a + e), r);
                else for (n = 0; n < e; n++) t[r + n] = o[a + n];
                return e;
              },
              write(e, t, r, n, a, o) {
                if (
                  (S(!(t instanceof ArrayBuffer)),
                  t.buffer === g.buffer && (o = !1),
                  !n)
                )
                  return 0;
                if (
                  (((e = e.node).timestamp = Date.now()),
                  t.subarray && (!e.h || e.h.subarray))
                ) {
                  if (o)
                    return (
                      S(
                        0 === a,
                        "canOwn must imply no weird position inside the file",
                      ),
                      (e.h = t.subarray(r, r + n)),
                      (e.l = n)
                    );
                  if (0 === e.l && 0 === a)
                    return (e.h = t.slice(r, r + n)), (e.l = n);
                  if (a + n <= e.l) return e.h.set(t.subarray(r, r + n), a), n;
                }
                if ((_e(e, a + n), e.h.subarray && t.subarray))
                  e.h.set(t.subarray(r, r + n), a);
                else for (o = 0; o < n; o++) e.h[a + o] = t[r + o];
                return (e.l = Math.max(e.l, a + n)), n;
              },
              J(e, t, r) {
                if (
                  (1 === r
                    ? (t += e.position)
                    : 2 === r &&
                      32768 == (61440 & e.node.mode) &&
                      (t += e.node.l),
                  0 > t)
                )
                  throw new Le(28);
                return t;
              },
              R(e, t, r) {
                _e(e.node, t + r), (e.node.l = Math.max(e.node.l, t + r));
              },
              ja(e, t, r, n, a) {
                if (32768 != (61440 & e.node.mode)) throw new Le(43);
                if (((e = e.node.h), 2 & a || e.buffer !== g.buffer)) {
                  if (
                    ((0 < r || r + t < e.length) &&
                      (e = e.subarray
                        ? e.subarray(r, r + t)
                        : Array.prototype.slice.call(e, r, r + t)),
                    (r = !0),
                    $(
                      "internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported",
                    ),
                    !(t = void 0))
                  )
                    throw new Le(48);
                  g.set(e, t);
                } else (r = !1), (t = e.byteOffset);
                return { V: t, s: r };
              },
              la: (e, t, r, n) => (Ae.i.write(e, t, 0, n, r, !1), 0),
            },
          },
          Se = (e, t) => {
            var r = 0;
            return e && (r |= 365), t && (r |= 146), r;
          },
          Oe = {
            0: "Success",
            1: "Arg list too long",
            2: "Permission denied",
            3: "Address already in use",
            4: "Address not available",
            5: "Address family not supported by protocol family",
            6: "No more processes",
            7: "Socket already connected",
            8: "Bad file number",
            9: "Trying to read unreadable message",
            10: "Mount device busy",
            11: "Operation canceled",
            12: "No children",
            13: "Connection aborted",
            14: "Connection refused",
            15: "Connection reset by peer",
            16: "File locking deadlock error",
            17: "Destination address required",
            18: "Math arg out of domain of func",
            19: "Quota exceeded",
            20: "File exists",
            21: "Bad address",
            22: "File too large",
            23: "Host is unreachable",
            24: "Identifier removed",
            25: "Illegal byte sequence",
            26: "Connection already in progress",
            27: "Interrupted system call",
            28: "Invalid argument",
            29: "I/O error",
            30: "Socket is already connected",
            31: "Is a directory",
            32: "Too many symbolic links",
            33: "Too many open files",
            34: "Too many links",
            35: "Message too long",
            36: "Multihop attempted",
            37: "File or path name too long",
            38: "Network interface is not configured",
            39: "Connection reset by network",
            40: "Network is unreachable",
            41: "Too many open files in system",
            42: "No buffer space available",
            43: "No such device",
            44: "No such file or directory",
            45: "Exec format error",
            46: "No record locks available",
            47: "The link has been severed",
            48: "Not enough core",
            49: "No message of desired type",
            50: "Protocol not available",
            51: "No space left on device",
            52: "Function not implemented",
            53: "Socket is not connected",
            54: "Not a directory",
            55: "Directory not empty",
            56: "State not recoverable",
            57: "Socket operation on non-socket",
            59: "Not a typewriter",
            60: "No such device or address",
            61: "Value too large for defined data type",
            62: "Previous owner died",
            63: "Not super-user",
            64: "Broken pipe",
            65: "Protocol error",
            66: "Unknown protocol",
            67: "Protocol wrong type for socket",
            68: "Math result not representable",
            69: "Read only file system",
            70: "Illegal seek",
            71: "No such process",
            72: "Stale file handle",
            73: "Connection timed out",
            74: "Text file busy",
            75: "Cross-device link",
            100: "Device not a stream",
            101: "Bad font file fmt",
            102: "Invalid slot",
            103: "Invalid request code",
            104: "No anode",
            105: "Block device required",
            106: "Channel number out of range",
            107: "Level 3 halted",
            108: "Level 3 reset",
            109: "Link number out of range",
            110: "Protocol driver not attached",
            111: "No CSI structure available",
            112: "Level 2 halted",
            113: "Invalid exchange",
            114: "Invalid request descriptor",
            115: "Exchange full",
            116: "No data (for no delay io)",
            117: "Timer expired",
            118: "Out of streams resources",
            119: "Machine is not on the network",
            120: "Package not installed",
            121: "The object is remote",
            122: "Advertise error",
            123: "Srmount error",
            124: "Communication error on send",
            125: "Cross mount point (not really error)",
            126: "Given log. name not unique",
            127: "f.d. invalid for this operation",
            128: "Remote address changed",
            129: "Can   access a needed shared lib",
            130: "Accessing a corrupted shared lib",
            131: ".lib section in a.out corrupted",
            132: "Attempting to link in too many libs",
            133: "Attempting to exec a shared library",
            135: "Streams pipe error",
            136: "Too many users",
            137: "Socket type not supported",
            138: "Not supported",
            139: "Protocol family not supported",
            140: "Can't send after socket shutdown",
            141: "Too many references",
            142: "Host is down",
            148: "No medium (in tape drive)",
            156: "Level 2 not synchronized",
          },
          Ce = {
            EPERM: 63,
            ENOENT: 44,
            ESRCH: 71,
            EINTR: 27,
            EIO: 29,
            ENXIO: 60,
            E2BIG: 1,
            ENOEXEC: 45,
            EBADF: 8,
            ECHILD: 12,
            EAGAIN: 6,
            EWOULDBLOCK: 6,
            ENOMEM: 48,
            EACCES: 2,
            EFAULT: 21,
            ENOTBLK: 105,
            EBUSY: 10,
            EEXIST: 20,
            EXDEV: 75,
            ENODEV: 43,
            ENOTDIR: 54,
            EISDIR: 31,
            EINVAL: 28,
            ENFILE: 41,
            EMFILE: 33,
            ENOTTY: 59,
            ETXTBSY: 74,
            EFBIG: 22,
            ENOSPC: 51,
            ESPIPE: 70,
            EROFS: 69,
            EMLINK: 34,
            EPIPE: 64,
            EDOM: 18,
            ERANGE: 68,
            ENOMSG: 49,
            EIDRM: 24,
            ECHRNG: 106,
            EL2NSYNC: 156,
            EL3HLT: 107,
            EL3RST: 108,
            ELNRNG: 109,
            EUNATCH: 110,
            ENOCSI: 111,
            EL2HLT: 112,
            EDEADLK: 16,
            ENOLCK: 46,
            EBADE: 113,
            EBADR: 114,
            EXFULL: 115,
            ENOANO: 104,
            EBADRQC: 103,
            EBADSLT: 102,
            EDEADLOCK: 16,
            EBFONT: 101,
            ENOSTR: 100,
            ENODATA: 116,
            ETIME: 117,
            ENOSR: 118,
            ENONET: 119,
            ENOPKG: 120,
            EREMOTE: 121,
            ENOLINK: 47,
            EADV: 122,
            ESRMNT: 123,
            ECOMM: 124,
            EPROTO: 65,
            EMULTIHOP: 36,
            EDOTDOT: 125,
            EBADMSG: 9,
            ENOTUNIQ: 126,
            EBADFD: 127,
            EREMCHG: 128,
            ELIBACC: 129,
            ELIBBAD: 130,
            ELIBSCN: 131,
            ELIBMAX: 132,
            ELIBEXEC: 133,
            ENOSYS: 52,
            ENOTEMPTY: 55,
            ENAMETOOLONG: 37,
            ELOOP: 32,
            EOPNOTSUPP: 138,
            EPFNOSUPPORT: 139,
            ECONNRESET: 15,
            ENOBUFS: 42,
            EAFNOSUPPORT: 5,
            EPROTOTYPE: 67,
            ENOTSOCK: 57,
            ENOPROTOOPT: 50,
            ESHUTDOWN: 140,
            ECONNREFUSED: 14,
            EADDRINUSE: 3,
            ECONNABORTED: 13,
            ENETUNREACH: 40,
            ENETDOWN: 38,
            ETIMEDOUT: 73,
            EHOSTDOWN: 142,
            EHOSTUNREACH: 23,
            EINPROGRESS: 26,
            EALREADY: 7,
            EDESTADDRREQ: 17,
            EMSGSIZE: 35,
            EPROTONOSUPPORT: 66,
            ESOCKTNOSUPPORT: 137,
            EADDRNOTAVAIL: 4,
            ENETRESET: 39,
            EISCONN: 30,
            ENOTCONN: 53,
            ETOOMANYREFS: 141,
            EUSERS: 136,
            EDQUOT: 19,
            ESTALE: 72,
            ENOTSUP: 138,
            ENOMEDIUM: 148,
            EILSEQ: 25,
            EOVERFLOW: 61,
            ECANCELED: 11,
            ENOTRECOVERABLE: 56,
            EOWNERDEAD: 62,
            ESTRPIPE: 135,
          },
          Me = (e) =>
            e.replace(/\b_Z[\w\d_]+/g, function (e) {
              return (
                ae(
                  "warning: build with -sDEMANGLE_SUPPORT to link in libcxxabi demangling",
                ),
                e == e ? e : e + " [" + e + "]"
              );
            }),
          Fe = null,
          Ie = {},
          Pe = [],
          Ne = 1,
          Re = null,
          De = !0,
          Le = null,
          ke = {};
        function Ue(e, t = {}) {
          if (!(e = de(e))) return { path: "", node: null };
          if (8 < (t = Object.assign({ fa: !0, ba: 0 }, t)).ba)
            throw new Le(32);
          e = e.split("/").filter((e) => !!e);
          for (var r = Fe, n = "/", a = 0; a < e.length; a++) {
            var o = a === e.length - 1;
            if (o && t.parent) break;
            if (
              ((r = $e(r, e[a])),
              (n = se(n + "/" + e[a])),
              r.U && (!o || (o && t.fa)) && (r = r.U.root),
              !o || t.N)
            )
              for (o = 0; 40960 == (61440 & r.mode); )
                if (
                  ((r = tt(n)),
                  (r = Ue((n = de(le(n), r)), { ba: t.ba + 1 }).node),
                  40 < o++)
                )
                  throw new Le(32);
          }
          return { path: n, node: r };
        }
        function je(e) {
          for (var t; ; ) {
            if (e === e.parent)
              return (
                (e = e.H.ka),
                t ? ("/" !== e[e.length - 1] ? `${e}/${t}` : e + t) : e
              );
            (t = t ? `${e.name}/${t}` : e.name), (e = e.parent);
          }
        }
        function xe(e, t) {
          for (var r = 0, n = 0; n < t.length; n++)
            r = ((r << 5) - r + t.charCodeAt(n)) | 0;
          return ((e + r) >>> 0) % Re.length;
        }
        function $e(e, t) {
          var r;
          if ((r = (r = Ge(e, "x")) ? r : e.g.O ? 0 : 2)) throw new Le(r, e);
          for (r = Re[xe(e.id, t)]; r; r = r.Ka) {
            var n = r.name;
            if (r.parent.id === e.id && n === t) return r;
          }
          return e.g.O(e, t);
        }
        function We(e, t, r, n) {
          return (
            S("object" == typeof e),
            (t = xe((e = new yr(e, t, r, n)).parent.id, e.name)),
            (e.Ka = Re[t]),
            (Re[t] = e)
          );
        }
        function Be(e) {
          var t = ["r", "w", "rw"][3 & e];
          return 512 & e && (t += "w"), t;
        }
        function Ge(e, t) {
          return De
            ? 0
            : !t.includes("r") || 292 & e.mode
              ? (t.includes("w") && !(146 & e.mode)) ||
                (t.includes("x") && !(73 & e.mode))
                ? 2
                : 0
              : 2;
        }
        function He(e, t) {
          try {
            return $e(e, t), 20;
          } catch (e) {}
          return Ge(e, "wx");
        }
        function Ye(e) {
          if (!(e = Pe[e])) throw new Le(8);
          return e;
        }
        function Ve(e, t = -1) {
          return (
            ut ||
              (((ut = function () {
                this.G = {};
              }).prototype = {}),
              Object.defineProperties(ut.prototype, {
                object: {
                  get() {
                    return this.node;
                  },
                  set(e) {
                    this.node = e;
                  },
                },
                flags: {
                  get() {
                    return this.G.flags;
                  },
                  set(e) {
                    this.G.flags = e;
                  },
                },
                position: {
                  get() {
                    return this.G.position;
                  },
                  set(e) {
                    this.G.position = e;
                  },
                },
              })),
            (e = Object.assign(new ut(), e)),
            -1 == t &&
              (t = (function () {
                for (var e = 0; 4096 >= e; e++) if (!Pe[e]) return e;
                throw new Le(33);
              })()),
            (e.o = t),
            (Pe[t] = e)
          );
        }
        var ze,
          Je = {
            open(e) {
              (e.i = Ie[e.node.M].i), e.i.open?.(e);
            },
            J() {
              throw new Le(70);
            },
          };
        function Ke(e, t) {
          Ie[e] = { i: t };
        }
        function qe(e, t) {
          if ("string" == typeof e) throw e;
          var r = "/" === t,
            n = !t;
          if (r && Fe) throw new Le(10);
          if (!r && !n) {
            var a = Ue(t, { fa: !1 });
            if (((t = a.path), (a = a.node).U)) throw new Le(10);
            if (16384 != (61440 & a.mode)) throw new Le(54);
          }
          (t = { type: e, bb: {}, ka: t, Ia: [] }),
            ((e = e.H(t)).H = t),
            (t.root = e),
            r ? (Fe = e) : a && ((a.U = t), a.H && a.H.Ia.push(t));
        }
        function Xe(e, t, r) {
          var n = Ue(e, { parent: !0 }).node;
          if (!(e = ue(e)) || "." === e || ".." === e) throw new Le(28);
          var a = He(n, e);
          if (a) throw new Le(a);
          if (!n.g.T) throw new Le(63);
          return n.g.T(n, e, t, r);
        }
        function Ze(e) {
          return Xe(e, 16895, 0);
        }
        function Qe(e, t, r) {
          void 0 === r && ((r = t), (t = 438)), Xe(e, 8192 | t, r);
        }
        function et(e, t) {
          if (!de(e)) throw new Le(44);
          var r = Ue(t, { parent: !0 }).node;
          if (!r) throw new Le(44);
          var n = He(r, (t = ue(t)));
          if (n) throw new Le(n);
          if (!r.g.W) throw new Le(63);
          r.g.W(r, t, e);
        }
        function tt(e) {
          if (!(e = Ue(e).node)) throw new Le(44);
          if (!e.g.P) throw new Le(28);
          return de(je(e.parent), e.g.P(e));
        }
        function rt(e, t) {
          if (!(e = Ue(e, { N: !t }).node)) throw new Le(44);
          if (!e.g.v) throw new Le(63);
          return e.g.v(e);
        }
        function nt(e) {
          return rt(e, !0);
        }
        function at(e, t, r) {
          if ("" === e) throw new Le(44);
          if ("string" == typeof t) {
            var n = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[
              t
            ];
            if (void 0 === n) throw Error(`Unknown file open mode: ${t}`);
            t = n;
          }
          if (
            ((r = 64 & t ? (4095 & (void 0 === r ? 438 : r)) | 32768 : 0),
            "object" == typeof e)
          )
            var a = e;
          else {
            e = se(e);
            try {
              a = Ue(e, { N: !(131072 & t) }).node;
            } catch (e) {}
          }
          if (((n = !1), 64 & t))
            if (a) {
              if (128 & t) throw new Le(20);
            } else (a = Xe(e, r, 0)), (n = !0);
          if (!a) throw new Le(44);
          if (
            (8192 == (61440 & a.mode) && (t &= -513),
            65536 & t && 16384 != (61440 & a.mode))
          )
            throw new Le(54);
          if (
            !n &&
            (r = a
              ? 40960 == (61440 & a.mode)
                ? 32
                : 16384 == (61440 & a.mode) && ("r" !== Be(t) || 512 & t)
                  ? 31
                  : Ge(a, Be(t))
              : 44)
          )
            throw new Le(r);
          if (512 & t && !n) {
            if (
              !(r = "string" == typeof (r = a) ? Ue(r, { N: !0 }).node : r).g.C
            )
              throw new Le(63);
            if (16384 == (61440 & r.mode)) throw new Le(31);
            if (32768 != (61440 & r.mode)) throw new Le(28);
            if ((n = Ge(r, "w"))) throw new Le(n);
            r.g.C(r, { size: 0, timestamp: Date.now() });
          }
          return (
            (t &= -131713),
            (a = Ve({
              node: a,
              path: je(a),
              flags: t,
              seekable: !0,
              position: 0,
              i: a.i,
              Ua: [],
              error: !1,
            })).i.open && a.i.open(a),
            !o.logReadFiles ||
              1 & t ||
              (ct || (ct = {}), e in ct || (ct[e] = 1)),
            a
          );
        }
        function ot(e, t, r) {
          if (null === e.o) throw new Le(8);
          if (!e.seekable || !e.i.J) throw new Le(70);
          if (0 != r && 1 != r && 2 != r) throw new Le(28);
          (e.position = e.i.J(e, t, r)), (e.Ua = []);
        }
        function it() {
          Le ||
            (((Le = function (e, t) {
              (this.name = "ErrnoError"),
                (this.node = t),
                (this.Pa = function (e) {
                  for (var t in ((this.u = e), Ce))
                    if (Ce[t] === e) {
                      this.code = t;
                      break;
                    }
                }),
                this.Pa(e),
                (this.message = Oe[e]),
                this.stack &&
                  (Object.defineProperty(this, "stack", {
                    value: Error().stack,
                    writable: !0,
                  }),
                  (this.stack = Me(this.stack)));
            }).prototype = Error()),
            (Le.prototype.constructor = Le),
            [44].forEach((e) => {
              (ke[e] = new Le(e)), (ke[e].stack = "<generic error, no stack>");
            }));
        }
        function st(e, t, r) {
          e = se("/dev/" + e);
          var n = Se(!!t, !!r);
          lt || (lt = 64);
          var a = (lt++ << 8) | 0;
          Ke(a, {
            open(e) {
              e.seekable = !1;
            },
            close() {
              r?.buffer?.length && r(10);
            },
            read(e, r, n, a) {
              for (var o = 0, i = 0; i < a; i++) {
                try {
                  var s = t();
                } catch (e) {
                  throw new Le(29);
                }
                if (void 0 === s && 0 === o) throw new Le(6);
                if (null == s) break;
                o++, (r[n + i] = s);
              }
              return o && (e.node.timestamp = Date.now()), o;
            },
            write(e, t, n, a) {
              for (var o = 0; o < a; o++)
                try {
                  r(t[n + o]);
                } catch (e) {
                  throw new Le(29);
                }
              return a && (e.node.timestamp = Date.now()), o;
            },
          }),
            Qe(e, n, a);
        }
        var lt,
          ut,
          ct,
          dt = {},
          ft = (e, t) => {
            if (
              (S(
                "number" == typeof e,
                `UTF8ToString expects a number (got ${typeof e})`,
              ),
              !e)
            )
              return "";
            t = e + t;
            for (var r = e; !(r >= t) && y[r]; ) ++r;
            return fe.decode(y.subarray(e, r));
          };
        function ht(e, t, r) {
          if ("/" === t.charAt(0)) return t;
          if (((e = -100 === e ? "/" : Ye(e).path), 0 == t.length)) {
            if (!r) throw new Le(44);
            return e;
          }
          return se(e + "/" + t);
        }
        function mt(e, t, r) {
          try {
            var n = e(t);
          } catch (e) {
            if (e && e.node && se(t) !== se(je(e.node))) return -54;
            throw e;
          }
          (E[r >> 2] = n.wa),
            (E[(r + 4) >> 2] = n.mode),
            (b[(r + 8) >> 2] = n.La),
            (E[(r + 12) >> 2] = n.uid),
            (E[(r + 16) >> 2] = n.ya),
            (E[(r + 20) >> 2] = n.M),
            (G = [
              n.size >>> 0,
              ((B = n.size),
              1 <= +Math.abs(B)
                ? 0 < B
                  ? +Math.floor(B / 4294967296) >>> 0
                  : ~~+Math.ceil((B - +(~~B >>> 0)) / 4294967296) >>> 0
                : 0),
            ]),
            (E[(r + 24) >> 2] = G[0]),
            (E[(r + 28) >> 2] = G[1]),
            (E[(r + 32) >> 2] = 4096),
            (E[(r + 36) >> 2] = n.ua),
            (e = n.sa.getTime()),
            (t = n.Ja.getTime());
          var a = n.va.getTime();
          return (
            (G = [
              Math.floor(e / 1e3) >>> 0,
              ((B = Math.floor(e / 1e3)),
              1 <= +Math.abs(B)
                ? 0 < B
                  ? +Math.floor(B / 4294967296) >>> 0
                  : ~~+Math.ceil((B - +(~~B >>> 0)) / 4294967296) >>> 0
                : 0),
            ]),
            (E[(r + 40) >> 2] = G[0]),
            (E[(r + 44) >> 2] = G[1]),
            (b[(r + 48) >> 2] = (e % 1e3) * 1e3),
            (G = [
              Math.floor(t / 1e3) >>> 0,
              ((B = Math.floor(t / 1e3)),
              1 <= +Math.abs(B)
                ? 0 < B
                  ? +Math.floor(B / 4294967296) >>> 0
                  : ~~+Math.ceil((B - +(~~B >>> 0)) / 4294967296) >>> 0
                : 0),
            ]),
            (E[(r + 56) >> 2] = G[0]),
            (E[(r + 60) >> 2] = G[1]),
            (b[(r + 64) >> 2] = (t % 1e3) * 1e3),
            (G = [
              Math.floor(a / 1e3) >>> 0,
              ((B = Math.floor(a / 1e3)),
              1 <= +Math.abs(B)
                ? 0 < B
                  ? +Math.floor(B / 4294967296) >>> 0
                  : ~~+Math.ceil((B - +(~~B >>> 0)) / 4294967296) >>> 0
                : 0),
            ]),
            (E[(r + 72) >> 2] = G[0]),
            (E[(r + 76) >> 2] = G[1]),
            (b[(r + 80) >> 2] = (a % 1e3) * 1e3),
            (G = [
              n.ia >>> 0,
              ((B = n.ia),
              1 <= +Math.abs(B)
                ? 0 < B
                  ? +Math.floor(B / 4294967296) >>> 0
                  : ~~+Math.ceil((B - +(~~B >>> 0)) / 4294967296) >>> 0
                : 0),
            ]),
            (E[(r + 88) >> 2] = G[0]),
            (E[(r + 92) >> 2] = G[1]),
            0
          );
        }
        var pt = void 0;
        function gt() {
          S(null != pt);
          var e = E[+pt >> 2];
          return (pt += 4), e;
        }
        var yt,
          vt,
          wt,
          Et = (e) => {
            for (var t = ""; y[e]; ) t += yt[y[e++]];
            return t;
          },
          bt = {},
          Tt = {},
          _t = {},
          At = (e) => {
            throw new vt(e);
          };
        function St(e, t, r = {}) {
          if (!("argPackAdvance" in t))
            throw new TypeError(
              "registerType registeredInstance requires argPackAdvance",
            );
          !(function (e, t, r = {}) {
            var n = t.name;
            if (!e)
              throw new vt(
                `type "${n}" must have a positive integer typeid pointer`,
              );
            if (Tt.hasOwnProperty(e)) {
              if (r.Aa) return;
              throw new vt(`Cannot register type '${n}' twice`);
            }
            (Tt[e] = t),
              delete _t[e],
              bt.hasOwnProperty(e) &&
                ((t = bt[e]), delete bt[e], t.forEach((e) => e()));
          })(e, t, r);
        }
        function Ot() {
          (this.s = [void 0]), (this.ga = []);
        }
        var Ct = new Ot(),
          Mt = (e) => {
            e >= Ct.G && 0 == --Ct.get(e).na && Ct.$(e);
          },
          Ft = (e) => {
            if (!e) throw new vt("Cannot use deleted val. handle = " + e);
            return Ct.get(e).value;
          },
          It = (e) => {
            switch (e) {
              case void 0:
                return 1;
              case null:
                return 2;
              case !0:
                return 3;
              case !1:
                return 4;
              default:
                return Ct.R({ na: 1, value: e });
            }
          };
        function Pt(e) {
          return this.fromWireType(E[e >> 2]);
        }
        var Nt = (e) => {
            if (null === e) return "null";
            var t = typeof e;
            return "object" === t || "array" === t || "function" === t
              ? e.toString()
              : "" + e;
          },
          Rt = (e, t) => {
            switch (t) {
              case 4:
                return function (e) {
                  return this.fromWireType(T[e >> 2]);
                };
              case 8:
                return function (e) {
                  return this.fromWireType(_[e >> 3]);
                };
              default:
                throw new TypeError(`invalid float width (${t}): ${e}`);
            }
          },
          Dt = (e, t) => Object.defineProperty(t, "name", { value: e }),
          Lt = (e) => {
            for (; e.length; ) {
              var t = e.pop();
              e.pop()(t);
            }
          };
        function kt(e) {
          for (var t = 1; t < e.length; ++t)
            if (null !== e[t] && void 0 === e[t].F) return !0;
          return !1;
        }
        function Ut(e) {
          var t = Function;
          if (!(t instanceof Function))
            throw new TypeError(
              `new_ called with constructor type ${typeof t} which is not a function`,
            );
          var r = Dt(t.name || "unknownFunctionName", function () {});
          return (
            (r.prototype = t.prototype),
            (r = new r()),
            (e = t.apply(r, e)) instanceof Object ? e : r
          );
        }
        var jt,
          xt,
          $t = (e, t) => {
            if (void 0 === o[e].B) {
              var r = o[e];
              (o[e] = function () {
                if (!o[e].B.hasOwnProperty(arguments.length))
                  throw new vt(
                    `Function '${t}' called with an invalid number of arguments (${arguments.length}) - expects one of (${o[e].B})!`,
                  );
                return o[e].B[arguments.length].apply(this, arguments);
              }),
                (o[e].B = []),
                (o[e].B[r.ra] = r);
            }
          },
          Wt = [],
          Bt = (e) => {
            var t = Wt[e];
            return (
              t ||
                (e >= Wt.length && (Wt.length = e + 1),
                (Wt[e] = t = jt.get(e))),
              S(
                jt.get(e) == t,
                "JavaScript-side Wasm function table mirror is out of date!",
              ),
              t
            );
          },
          Gt = (e, t) => {
            var r = (e = Et(e)).includes("j")
              ? ((e, t) => {
                  S(
                    e.includes("j") || e.includes("p"),
                    "getDynCaller should only be called with i64 sigs",
                  );
                  var r = [];
                  return function () {
                    if (
                      ((r.length = 0),
                      Object.assign(r, arguments),
                      e.includes("j"))
                    ) {
                      S(
                        "dynCall_" + e in o,
                        `bad function pointer type - dynCall function not found for sig '${e}'`,
                      ),
                        S(
                          r?.length
                            ? r.length ===
                                e.substring(1).replace(/j/g, "--").length
                            : 1 == e.length,
                        );
                      var n = o["dynCall_" + e];
                      n =
                        r && r.length
                          ? n.apply(null, [t].concat(r))
                          : n.call(null, t);
                    } else
                      S(Bt(t), `missing table entry in dynCall: ${t}`),
                        (n = Bt(t).apply(null, r));
                    return n;
                  };
                })(e, t)
              : Bt(t);
            if ("function" != typeof r)
              throw new vt(
                `unknown function pointer with signature ${e}: ${t}`,
              );
            return r;
          },
          Ht = (e) => {
            e = Mr(e);
            var t = Et(e);
            return Ar(e), t;
          },
          Yt = (e, t, r) => {
            switch (t) {
              case 1:
                return r ? (e) => g[e >> 0] : (e) => y[e >> 0];
              case 2:
                return r ? (e) => v[e >> 1] : (e) => w[e >> 1];
              case 4:
                return r ? (e) => E[e >> 2] : (e) => b[e >> 2];
              default:
                throw new TypeError(`invalid integer width (${t}): ${e}`);
            }
          };
        function Vt(e) {
          return this.fromWireType(b[e >> 2]);
        }
        var zt,
          Jt,
          Kt,
          qt,
          Xt = (e, t, r) => {
            S(
              "number" == typeof r,
              "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!",
            ),
              ge(e, y, t, r);
          },
          Zt = new TextDecoder("utf-16le"),
          Qt = (e, t) => {
            S(
              0 == e % 2,
              "Pointer passed to UTF16ToString must be aligned to two bytes!",
            );
            var r = e >> 1;
            for (t = r + t / 2; !(r >= t) && w[r]; ) ++r;
            return Zt.decode(y.subarray(e, r << 1));
          },
          er = (e, t, r) => {
            if (
              (S(
                0 == t % 2,
                "Pointer passed to stringToUTF16 must be aligned to two bytes!",
              ),
              S(
                "number" == typeof r,
                "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!",
              ),
              r ?? (r = 2147483647),
              2 > r)
            )
              return 0;
            var n = t;
            r = (r -= 2) < 2 * e.length ? r / 2 : e.length;
            for (var a = 0; a < r; ++a) (v[t >> 1] = e.charCodeAt(a)), (t += 2);
            return (v[t >> 1] = 0), t - n;
          },
          tr = (e) => 2 * e.length,
          rr = (e, t) => {
            S(
              0 == e % 4,
              "Pointer passed to UTF32ToString must be aligned to four bytes!",
            );
            for (var r = 0, n = ""; !(r >= t / 4); ) {
              var a = E[(e + 4 * r) >> 2];
              if (0 == a) break;
              ++r,
                65536 <= a
                  ? ((a -= 65536),
                    (n += String.fromCharCode(
                      55296 | (a >> 10),
                      56320 | (1023 & a),
                    )))
                  : (n += String.fromCharCode(a));
            }
            return n;
          },
          nr = (e, t, r) => {
            if (
              (S(
                0 == t % 4,
                "Pointer passed to stringToUTF32 must be aligned to four bytes!",
              ),
              S(
                "number" == typeof r,
                "stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!",
              ),
              r ?? (r = 2147483647),
              4 > r)
            )
              return 0;
            var n = t;
            r = n + r - 4;
            for (var a = 0; a < e.length; ++a) {
              var o = e.charCodeAt(a);
              if (
                (55296 <= o &&
                  57343 >= o &&
                  (o =
                    (65536 + ((1023 & o) << 10)) | (1023 & e.charCodeAt(++a))),
                (E[t >> 2] = o),
                (t += 4) + 4 > r)
              )
                break;
            }
            return (E[t >> 2] = 0), t - n;
          },
          ar = (e) => {
            for (var t = 0, r = 0; r < e.length; ++r) {
              var n = e.charCodeAt(r);
              55296 <= n && 57343 >= n && ++r, (t += 4);
            }
            return t;
          },
          or = [],
          ir = {},
          sr = () =>
            "object" == typeof globalThis
              ? globalThis
              : Function("return this")(),
          lr = (e, t, r) => {
            var n = [];
            return (e = e.toWireType(n, r)), n.length && (b[t >> 2] = It(n)), e;
          },
          ur = {},
          cr = () => {
            if (!zt) {
              var e,
                t = {
                  USER: "web_user",
                  LOGNAME: "web_user",
                  PATH: "/",
                  PWD: "/",
                  HOME: "/home/web_user",
                  LANG:
                    (
                      ("object" == typeof navigator &&
                        navigator.languages &&
                        navigator.languages[0]) ||
                      "C"
                    ).replace("-", "_") + ".UTF-8",
                  _: l || "./this.program",
                };
              for (e in ur) void 0 === ur[e] ? delete t[e] : (t[e] = ur[e]);
              var r = [];
              for (e in t) r.push(`${e}=${t[e]}`);
              zt = r;
            }
            return zt;
          },
          dr = (e) => 0 == e % 4 && (0 != e % 100 || 0 == e % 400),
          fr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
          hr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
          mr = (e, t, r, n) => {
            function a(e, t, r) {
              for (
                e = "number" == typeof e ? e.toString() : e || "";
                e.length < t;

              )
                e = r[0] + e;
              return e;
            }
            function o(e, t) {
              return a(e, t, "0");
            }
            function i(e, t) {
              function r(e) {
                return 0 > e ? -1 : 0 < e ? 1 : 0;
              }
              var n;
              return (
                0 === (n = r(e.getFullYear() - t.getFullYear())) &&
                  0 === (n = r(e.getMonth() - t.getMonth())) &&
                  (n = r(e.getDate() - t.getDate())),
                n
              );
            }
            function s(e) {
              switch (e.getDay()) {
                case 0:
                  return new Date(e.getFullYear() - 1, 11, 29);
                case 1:
                  return e;
                case 2:
                  return new Date(e.getFullYear(), 0, 3);
                case 3:
                  return new Date(e.getFullYear(), 0, 2);
                case 4:
                  return new Date(e.getFullYear(), 0, 1);
                case 5:
                  return new Date(e.getFullYear() - 1, 11, 31);
                case 6:
                  return new Date(e.getFullYear() - 1, 11, 30);
              }
            }
            function l(e) {
              var t = e.K;
              for (
                e = new Date(new Date(e.L + 1900, 0, 1).getTime());
                0 < t;

              ) {
                var r = e.getMonth(),
                  n = (dr(e.getFullYear()) ? fr : hr)[r];
                if (!(t > n - e.getDate())) {
                  e.setDate(e.getDate() + t);
                  break;
                }
                (t -= n - e.getDate() + 1),
                  e.setDate(1),
                  11 > r
                    ? e.setMonth(r + 1)
                    : (e.setMonth(0), e.setFullYear(e.getFullYear() + 1));
              }
              return (
                (r = new Date(e.getFullYear() + 1, 0, 4)),
                (t = s(new Date(e.getFullYear(), 0, 4))),
                (r = s(r)),
                0 >= i(t, e)
                  ? 0 >= i(r, e)
                    ? e.getFullYear() + 1
                    : e.getFullYear()
                  : e.getFullYear() - 1
              );
            }
            var u = b[(n + 40) >> 2];
            for (var c in ((n = {
              Sa: E[n >> 2],
              Ra: E[(n + 4) >> 2],
              X: E[(n + 8) >> 2],
              da: E[(n + 12) >> 2],
              Y: E[(n + 16) >> 2],
              L: E[(n + 20) >> 2],
              D: E[(n + 24) >> 2],
              K: E[(n + 28) >> 2],
              cb: E[(n + 32) >> 2],
              Qa: E[(n + 36) >> 2],
              Ta: u ? ft(u) : "",
            }),
            (r = ft(r)),
            (u = {
              "%c": "%a %b %d %H:%M:%S %Y",
              "%D": "%m/%d/%y",
              "%F": "%Y-%m-%d",
              "%h": "%b",
              "%r": "%I:%M:%S %p",
              "%R": "%H:%M",
              "%T": "%H:%M:%S",
              "%x": "%m/%d/%y",
              "%X": "%H:%M:%S",
              "%Ec": "%c",
              "%EC": "%C",
              "%Ex": "%m/%d/%y",
              "%EX": "%H:%M:%S",
              "%Ey": "%y",
              "%EY": "%Y",
              "%Od": "%d",
              "%Oe": "%e",
              "%OH": "%H",
              "%OI": "%I",
              "%Om": "%m",
              "%OM": "%M",
              "%OS": "%S",
              "%Ou": "%u",
              "%OU": "%U",
              "%OV": "%V",
              "%Ow": "%w",
              "%OW": "%W",
              "%Oy": "%y",
            })))
              r = r.replace(new RegExp(c, "g"), u[c]);
            var d =
                "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
                  " ",
                ),
              f =
                "January February March April May June July August September October November December".split(
                  " ",
                );
            for (c in ((u = {
              "%a": (e) => d[e.D].substring(0, 3),
              "%A": (e) => d[e.D],
              "%b": (e) => f[e.Y].substring(0, 3),
              "%B": (e) => f[e.Y],
              "%C": (e) => o(((e.L + 1900) / 100) | 0, 2),
              "%d": (e) => o(e.da, 2),
              "%e": (e) => a(e.da, 2, " "),
              "%g": (e) => l(e).toString().substring(2),
              "%G": (e) => l(e),
              "%H": (e) => o(e.X, 2),
              "%I": (e) => (
                0 == (e = e.X) ? (e = 12) : 12 < e && (e -= 12), o(e, 2)
              ),
              "%j": (e) => {
                for (
                  var t = 0, r = 0;
                  r <= e.Y - 1;
                  t += (dr(e.L + 1900) ? fr : hr)[r++]
                );
                return o(e.da + t, 3);
              },
              "%m": (e) => o(e.Y + 1, 2),
              "%M": (e) => o(e.Ra, 2),
              "%n": () => "\n",
              "%p": (e) => (0 <= e.X && 12 > e.X ? "AM" : "PM"),
              "%S": (e) => o(e.Sa, 2),
              "%t": () => "\t",
              "%u": (e) => e.D || 7,
              "%U": (e) => o(Math.floor((e.K + 7 - e.D) / 7), 2),
              "%V": (e) => {
                var t = Math.floor((e.K + 7 - ((e.D + 6) % 7)) / 7);
                if ((2 >= (e.D + 371 - e.K - 2) % 7 && t++, t))
                  53 == t &&
                    (4 == (r = (e.D + 371 - e.K) % 7) ||
                      (3 == r && dr(e.L)) ||
                      (t = 1));
                else {
                  t = 52;
                  var r = (e.D + 7 - e.K - 1) % 7;
                  (4 == r || (5 == r && dr((e.L % 400) - 1))) && t++;
                }
                return o(t, 2);
              },
              "%w": (e) => e.D,
              "%W": (e) => o(Math.floor((e.K + 7 - ((e.D + 6) % 7)) / 7), 2),
              "%y": (e) => (e.L + 1900).toString().substring(2),
              "%Y": (e) => e.L + 1900,
              "%z": (e) => {
                var t = 0 <= (e = e.Qa);
                return (
                  (e = Math.abs(e) / 60),
                  (t ? "+" : "-") +
                    String("0000" + ((e / 60) * 100 + (e % 60))).slice(-4)
                );
              },
              "%Z": (e) => e.Ta,
              "%%": () => "%",
            }),
            (r = r.replace(/%%/g, "\0\0")),
            u))
              r.includes(c) && (r = r.replace(new RegExp(c, "g"), u[c](n)));
            return (c = ye((r = r.replace(/\0\0/g, "%")), !1)).length > t
              ? 0
              : (((e, t) => {
                  S(
                    0 <= e.length,
                    "writeArrayToMemory array must have a length (should be an array or typed array)",
                  ),
                    g.set(e, t);
                })(c, e),
                c.length - 1);
          },
          pr = (e) => {
            !(function () {
              var e = h,
                t = m,
                r = !1;
              h = m = () => {
                r = !0;
              };
              try {
                Cr(0),
                  ["stdout", "stderr"].forEach(function (e) {
                    e = "/dev/" + e;
                    try {
                      var t = Ue(e, { N: !0 });
                      e = t.path;
                    } catch (e) {}
                    var n = {
                      Fa: !1,
                      xa: !1,
                      error: 0,
                      name: null,
                      path: null,
                      object: null,
                      Ma: !1,
                      Oa: null,
                      Na: null,
                    };
                    try {
                      (t = Ue(e, { parent: !0 })),
                        (n.Ma = !0),
                        (n.Oa = t.path),
                        (n.Na = t.node),
                        (n.name = ue(e)),
                        (t = Ue(e, { N: !0 })),
                        (n.xa = !0),
                        (n.path = t.path),
                        (n.object = t.node),
                        (n.name = t.node.name),
                        (n.Fa = "/" === t.path);
                    } catch (e) {
                      n.error = e.u;
                    }
                    n && ve[n.object.M]?.m?.length && (r = !0);
                  });
              } catch (e) {}
              (h = e),
                (m = t),
                r &&
                  ae(
                    "stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.",
                  );
            })(),
              re || (o.onExit?.(e), (A = !0)),
              u(e, new ee(e));
          },
          gr = (e) => {
            e instanceof ee ||
              "unwind" == e ||
              (C(),
              e instanceof WebAssembly.RuntimeError &&
                0 >= Nr() &&
                m(
                  "Stack overflow detected.  You can try increasing -sSTACK_SIZE (currently set to 65536)",
                ),
              u(1, e));
          };
        function yr(e, t, r, n) {
          e || (e = this),
            (this.parent = e),
            (this.H = e.H),
            (this.U = null),
            (this.id = Ne++),
            (this.name = t),
            (this.mode = r),
            (this.g = {}),
            (this.i = {}),
            (this.M = n);
        }
        Object.defineProperties(yr.prototype, {
          read: {
            get: function () {
              return 365 == (365 & this.mode);
            },
            set: function (e) {
              e ? (this.mode |= 365) : (this.mode &= -366);
            },
          },
          write: {
            get: function () {
              return 146 == (146 & this.mode);
            },
            set: function (e) {
              e ? (this.mode |= 146) : (this.mode &= -147);
            },
          },
        }),
          it(),
          (Re = Array(4096)),
          qe(Ae, "/"),
          Ze("/tmp"),
          Ze("/home"),
          Ze("/home/web_user"),
          (function () {
            Ze("/dev"),
              Ke(259, { read: () => 0, write: (e, t, r, n) => n }),
              Qe("/dev/null", 259),
              we(1280, be),
              we(1536, Te),
              Qe("/dev/tty", 1280),
              Qe("/dev/tty1", 1536);
            var e = new Uint8Array(1024),
              t = 0,
              r = () => (0 === t && (t = ce(e).byteLength), e[--t]);
            st("random", r),
              st("urandom", r),
              Ze("/dev/shm"),
              Ze("/dev/shm/tmp");
          })(),
          (function () {
            Ze("/proc");
            var e = Ze("/proc/self");
            Ze("/proc/self/fd"),
              qe(
                {
                  H() {
                    var t = We(e, "fd", 16895, 73);
                    return (
                      (t.g = {
                        O(e, t) {
                          var r = Ye(+t);
                          return ((e = {
                            parent: null,
                            H: { ka: "fake" },
                            g: { P: () => r.path },
                          }).parent = e);
                        },
                      }),
                      t
                    );
                  },
                },
                "/proc/self/fd",
              );
          })();
        for (var vr = Array(256), wr = 0; 256 > wr; ++wr)
          vr[wr] = String.fromCharCode(wr);
        (yt = vr),
          (vt = o.BindingError =
            class extends Error {
              constructor(e) {
                super(e), (this.name = "BindingError");
              }
            }),
          (wt = o.InternalError =
            class extends Error {
              constructor(e) {
                super(e), (this.name = "InternalError");
              }
            }),
          Object.assign(Ot.prototype, {
            get(e) {
              return S(void 0 !== this.s[e], `invalid handle: ${e}`), this.s[e];
            },
            has(e) {
              return void 0 !== this.s[e];
            },
            R(e) {
              var t = this.ga.pop() || this.s.length;
              return (this.s[t] = e), t;
            },
            $(e) {
              S(void 0 !== this.s[e]), (this.s[e] = void 0), this.ga.push(e);
            },
          }),
          Ct.s.push(
            { value: void 0 },
            { value: null },
            { value: !0 },
            { value: !1 },
          ),
          (Ct.G = Ct.s.length),
          (o.count_emval_handles = () => {
            for (var e = 0, t = Ct.G; t < Ct.s.length; ++t)
              void 0 !== Ct.s[t] && ++e;
            return e;
          }),
          (xt = o.UnboundTypeError =
            ((Jt = Error),
            ((qt = Dt((Kt = "UnboundTypeError"), function (e) {
              (this.name = Kt),
                (this.message = e),
                void 0 !== (e = Error(e).stack) &&
                  (this.stack =
                    this.toString() +
                    "\n" +
                    e.replace(/^Error(:[^\n]*)?\n/, ""));
            })).prototype = Object.create(Jt.prototype)),
            (qt.prototype.constructor = qt),
            (qt.prototype.toString = function () {
              return void 0 === this.message
                ? this.name
                : `${this.name}: ${this.message}`;
            }),
            qt));
        var Er,
          br = {
            __cxa_throw: (e, t, r) => {
              new oe(e).G(t, r),
                S(
                  !1,
                  "Exception thrown, but exception catching is not enabled. Compile with -sNO_DISABLE_EXCEPTION_CATCHING or -sEXCEPTION_CATCHING_ALLOWED=[..] to catch.",
                );
            },
            __syscall_fcntl64: function (e, t, r) {
              pt = r;
              try {
                var n = Ye(e);
                switch (t) {
                  case 0:
                    var a = gt();
                    if (0 > a) return -28;
                    for (; Pe[a]; ) a++;
                    return Ve(n, a).o;
                  case 1:
                  case 2:
                  case 6:
                  case 7:
                    return 0;
                  case 3:
                    return n.flags;
                  case 4:
                    return (a = gt()), (n.flags |= a), 0;
                  case 5:
                    return (a = gt()), (v[(a + 0) >> 1] = 2), 0;
                  case 16:
                  case 8:
                  default:
                    return -28;
                  case 9:
                    return (E[Sr() >> 2] = 28), -1;
                }
              } catch (e) {
                if (void 0 === dt || "ErrnoError" !== e.name) throw e;
                return -e.u;
              }
            },
            __syscall_fstat64: function (e, t) {
              try {
                return mt(rt, Ye(e).path, t);
              } catch (e) {
                if (void 0 === dt || "ErrnoError" !== e.name) throw e;
                return -e.u;
              }
            },
            __syscall_ioctl: function (e, t, r) {
              pt = r;
              try {
                var n = Ye(e);
                switch (t) {
                  case 21509:
                  case 21510:
                  case 21511:
                  case 21512:
                  case 21524:
                  case 21515:
                    return n.j ? 0 : -59;
                  case 21505:
                    if (!n.j) return -59;
                    if (n.j.I.Ca) {
                      t = [
                        3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23,
                        22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      ];
                      var a = gt();
                      (E[a >> 2] = 25856),
                        (E[(a + 4) >> 2] = 5),
                        (E[(a + 8) >> 2] = 191),
                        (E[(a + 12) >> 2] = 35387);
                      for (var o = 0; 32 > o; o++)
                        g[(a + o + 17) >> 0] = t[o] || 0;
                    }
                    return 0;
                  case 21506:
                  case 21507:
                  case 21508:
                    if (!n.j) return -59;
                    if (n.j.I.Da)
                      for (a = gt(), t = [], o = 0; 32 > o; o++)
                        t.push(g[(a + o + 17) >> 0]);
                    return 0;
                  case 21519:
                    return n.j ? ((a = gt()), (E[a >> 2] = 0)) : -59;
                  case 21520:
                    return n.j ? -28 : -59;
                  case 21531:
                    if (((a = gt()), !n.i.Ba)) throw new Le(59);
                    return n.i.Ba(n, t, a);
                  case 21523:
                    return n.j
                      ? (n.j.I.Ea &&
                          ((o = [24, 80]),
                          (a = gt()),
                          (v[a >> 1] = o[0]),
                          (v[(a + 2) >> 1] = o[1])),
                        0)
                      : -59;
                  default:
                    return -28;
                }
              } catch (e) {
                if (void 0 === dt || "ErrnoError" !== e.name) throw e;
                return -e.u;
              }
            },
            __syscall_lstat64: function (e, t) {
              try {
                return mt(nt, (e = ft(e)), t);
              } catch (e) {
                if (void 0 === dt || "ErrnoError" !== e.name) throw e;
                return -e.u;
              }
            },
            __syscall_newfstatat: function (e, t, r, n) {
              try {
                t = ft(t);
                var a = 256 & n,
                  o = 4096 & n;
                return (
                  S(
                    !(n &= -6401),
                    `unknown flags in __syscall_newfstatat: ${n}`,
                  ),
                  mt(a ? nt : rt, (t = ht(e, t, o)), r)
                );
              } catch (e) {
                if (void 0 === dt || "ErrnoError" !== e.name) throw e;
                return -e.u;
              }
            },
            __syscall_openat: function (e, t, r, n) {
              pt = n;
              try {
                return at((t = ht(e, (t = ft(t)))), r, n ? gt() : 0).o;
              } catch (e) {
                if (void 0 === dt || "ErrnoError" !== e.name) throw e;
                return -e.u;
              }
            },
            __syscall_stat64: function (e, t) {
              try {
                return mt(rt, (e = ft(e)), t);
              } catch (e) {
                if (void 0 === dt || "ErrnoError" !== e.name) throw e;
                return -e.u;
              }
            },
            _embind_register_bigint: () => {},
            _embind_register_bool: (e, t, r, n) => {
              St(e, {
                name: (t = Et(t)),
                fromWireType: function (e) {
                  return !!e;
                },
                toWireType: function (e, t) {
                  return t ? r : n;
                },
                argPackAdvance: 8,
                readValueFromPointer: function (e) {
                  return this.fromWireType(y[e]);
                },
                F: null,
              });
            },
            _embind_register_emval: (e, t) => {
              St(e, {
                name: (t = Et(t)),
                fromWireType: (e) => {
                  var t = Ft(e);
                  return Mt(e), t;
                },
                toWireType: (e, t) => It(t),
                argPackAdvance: 8,
                readValueFromPointer: Pt,
                F: null,
              });
            },
            _embind_register_float: (e, t, r) => {
              St(e, {
                name: (t = Et(t)),
                fromWireType: (e) => e,
                toWireType: (e, t) => {
                  if ("number" != typeof t && "boolean" != typeof t)
                    throw new TypeError(
                      `Cannot convert ${Nt(t)} to ${this.name}`,
                    );
                  return t;
                },
                argPackAdvance: 8,
                readValueFromPointer: Rt(t, r),
                F: null,
              });
            },
            _embind_register_function: (e, t, r, n, a, i, s) => {
              var l = ((e, t) => {
                for (var r = [], n = 0; n < e; n++) r.push(b[(t + 4 * n) >> 2]);
                return r;
              })(t, r);
              (e = ((e) => {
                const t = (e = e.trim()).indexOf("(");
                return -1 !== t
                  ? (S(
                      ")" == e[e.length - 1],
                      "Parentheses for argument names should match.",
                    ),
                    e.substr(0, t))
                  : e;
              })((e = Et(e)))),
                (a = Gt(n, a)),
                ((e, t, r) => {
                  if (o.hasOwnProperty(e)) {
                    if (
                      void 0 === r ||
                      (void 0 !== o[e].B && void 0 !== o[e].B[r])
                    )
                      throw new vt(`Cannot register public name '${e}' twice`);
                    if (($t(e, e), o.hasOwnProperty(r)))
                      throw new vt(
                        `Cannot register multiple overloads of a function with the same number of arguments (${r})!`,
                      );
                    o[e].B[r] = t;
                  } else (o[e] = t), void 0 !== r && (o[e].ab = r);
                })(
                  e,
                  function () {
                    ((e, t) => {
                      var r = [],
                        n = {};
                      throw (
                        (t.forEach(function e(t) {
                          n[t] ||
                            Tt[t] ||
                            (_t[t]
                              ? _t[t].forEach(e)
                              : (r.push(t), (n[t] = !0)));
                        }),
                        new xt(`${e}: ` + r.map(Ht).join([", "])))
                      );
                    })(`Cannot call ${e} due to unbound types`, l);
                  },
                  t - 1,
                ),
                ((e, t) => {
                  function r(e) {
                    if ((e = t(e)).length !== n.length)
                      throw new wt("Mismatched type converter count");
                    for (var r = 0; r < n.length; ++r) St(n[r], e[r]);
                  }
                  var n = [];
                  n.forEach(function (t) {
                    _t[t] = e;
                  });
                  var a = Array(e.length),
                    o = [],
                    i = 0;
                  e.forEach((e, t) => {
                    Tt.hasOwnProperty(e)
                      ? (a[t] = Tt[e])
                      : (o.push(e),
                        bt.hasOwnProperty(e) || (bt[e] = []),
                        bt[e].push(() => {
                          (a[t] = Tt[e]), ++i === o.length && r(a);
                        }));
                  }),
                    0 === o.length && r(a);
                })(l, function (r) {
                  var n = e,
                    l = e;
                  r = [r[0], null].concat(r.slice(1));
                  var u = a,
                    c = r.length;
                  if (2 > c)
                    throw new vt(
                      "argTypes array size mismatch! Must at least get return value and 'this' types!",
                    );
                  S(!s, "Async bindings are only supported with JSPI.");
                  var d = null !== r[1] && !1,
                    f = kt(r),
                    h = "void" !== r[0].name;
                  u = [At, u, i, Lt, r[0], r[1]];
                  for (var m = 0; m < c - 2; ++m) u.push(r[m + 2]);
                  if (!f)
                    for (m = d ? 1 : 2; m < r.length; ++m)
                      null !== r[m].F && u.push(r[m].F);
                  (f = kt(r)), (m = r.length);
                  var p = "",
                    g = "";
                  for (c = 0; c < m - 2; ++c)
                    (p += (0 !== c ? ", " : "") + "arg" + c),
                      (g += (0 !== c ? ", " : "") + "arg" + c + "Wired");
                  (p = `\n        return function (${p}) {\n        if (arguments.length !== ${m - 2}) {\n          throwBindingError('function ${l} called with ' + arguments.length + ' arguments, expected ${m - 2}');\n        }`),
                    f && (p += "var destructors = [];\n");
                  var y = f ? "destructors" : "null",
                    v =
                      "throwBindingError invoker fn runDestructors retType classParam".split(
                        " ",
                      );
                  for (
                    d &&
                      (p +=
                        "var thisWired = classParam['toWireType'](" +
                        y +
                        ", this);\n"),
                      c = 0;
                    c < m - 2;
                    ++c
                  )
                    (p +=
                      "var arg" +
                      c +
                      "Wired = argType" +
                      c +
                      "['toWireType'](" +
                      y +
                      ", arg" +
                      c +
                      "); // " +
                      r[c + 2].name +
                      "\n"),
                      v.push("argType" + c);
                  if (
                    (d && (g = "thisWired" + (0 < g.length ? ", " : "") + g),
                    (p +=
                      (h || s ? "var rv = " : "") +
                      "invoker(fn" +
                      (0 < g.length ? ", " : "") +
                      g +
                      ");\n"),
                    f)
                  )
                    p += "runDestructors(destructors);\n";
                  else
                    for (c = d ? 1 : 2; c < r.length; ++c)
                      (d = 1 === c ? "thisWired" : "arg" + (c - 2) + "Wired"),
                        null !== r[c].F &&
                          ((p +=
                            d + "_dtor(" + d + "); // " + r[c].name + "\n"),
                          v.push(d + "_dtor"));
                  h &&
                    (p +=
                      "var ret = retType['fromWireType'](rv);\nreturn ret;\n"),
                    (p = `if (arguments.length !== ${v.length}){ throw new Error("${l} Expected ${v.length} closure arguments " + arguments.length + " given."); }\n${p + "}\n"}`);
                  let [w, E] = [v, p];
                  if (
                    (w.push(E),
                    (r = Ut(w).apply(null, u)),
                    (l = Dt(l, r)),
                    (r = t - 1),
                    !o.hasOwnProperty(n))
                  )
                    throw new wt("Replacing nonexistant public symbol");
                  return (
                    void 0 !== o[n].B && void 0 !== r
                      ? (o[n].B[r] = l)
                      : ((o[n] = l), (o[n].ra = r)),
                    []
                  );
                });
            },
            _embind_register_integer: (e, t, r, n, a) => {
              (t = Et(t)), -1 === a && (a = 4294967295);
              var o = (e) => e;
              if (0 === n) {
                var i = 32 - 8 * r;
                o = (e) => (e << i) >>> i;
              }
              var s = (e, r) => {
                  if ("number" != typeof e && "boolean" != typeof e)
                    throw new TypeError(`Cannot convert "${Nt(e)}" to ${r}`);
                  if (e < n || e > a)
                    throw new TypeError(
                      `Passing a number "${Nt(e)}" from JS side to C/C++ side to an argument of type "${t}", which is outside the valid range [${n}, ${a}]!`,
                    );
                },
                l = t.includes("unsigned")
                  ? function (e, t) {
                      return s(t, this.name), t >>> 0;
                    }
                  : function (e, t) {
                      return s(t, this.name), t;
                    };
              St(e, {
                name: t,
                fromWireType: o,
                toWireType: l,
                argPackAdvance: 8,
                readValueFromPointer: Yt(t, r, 0 !== n),
                F: null,
              });
            },
            _embind_register_memory_view: (e, t, r) => {
              function n(e) {
                return new a(g.buffer, b[(e + 4) >> 2], b[e >> 2]);
              }
              var a = [
                Int8Array,
                Uint8Array,
                Int16Array,
                Uint16Array,
                Int32Array,
                Uint32Array,
                Float32Array,
                Float64Array,
              ][t];
              St(
                e,
                {
                  name: (r = Et(r)),
                  fromWireType: n,
                  argPackAdvance: 8,
                  readValueFromPointer: n,
                },
                { Aa: !0 },
              );
            },
            _embind_register_std_string: (e, t) => {
              var r = "std::string" === (t = Et(t));
              St(e, {
                name: t,
                fromWireType: function (e) {
                  var t = b[e >> 2],
                    n = e + 4;
                  if (r)
                    for (var a = n, o = 0; o <= t; ++o) {
                      var i = n + o;
                      if (o == t || 0 == y[i]) {
                        if (((a = ft(a, i - a)), void 0 === s)) var s = a;
                        else (s += String.fromCharCode(0)), (s += a);
                        a = i + 1;
                      }
                    }
                  else {
                    for (s = Array(t), o = 0; o < t; ++o)
                      s[o] = String.fromCharCode(y[n + o]);
                    s = s.join("");
                  }
                  return Ar(e), s;
                },
                toWireType: function (e, t) {
                  t instanceof ArrayBuffer && (t = new Uint8Array(t));
                  var n = "string" == typeof t;
                  if (
                    !(
                      n ||
                      t instanceof Uint8Array ||
                      t instanceof Uint8ClampedArray ||
                      t instanceof Int8Array
                    )
                  )
                    throw new vt("Cannot pass non-string to std::string");
                  var a = r && n ? pe(t) : t.length,
                    o = _r(4 + a + 1),
                    i = o + 4;
                  if (((b[o >> 2] = a), r && n)) Xt(t, i, a + 1);
                  else if (n)
                    for (n = 0; n < a; ++n) {
                      var s = t.charCodeAt(n);
                      if (255 < s)
                        throw (
                          (Ar(i),
                          new vt(
                            "String has UTF-16 code units that do not fit in 8 bits",
                          ))
                        );
                      y[i + n] = s;
                    }
                  else for (n = 0; n < a; ++n) y[i + n] = t[n];
                  return null !== e && e.push(Ar, o), o;
                },
                argPackAdvance: 8,
                readValueFromPointer: Vt,
                F(e) {
                  Ar(e);
                },
              });
            },
            _embind_register_std_wstring: (e, t, r) => {
              if (((r = Et(r)), 2 === t))
                var n = Qt,
                  a = er,
                  o = tr,
                  i = () => w,
                  s = 1;
              else
                4 === t &&
                  ((n = rr), (a = nr), (o = ar), (i = () => b), (s = 2));
              St(e, {
                name: r,
                fromWireType: (e) => {
                  for (
                    var r, a = b[e >> 2], o = i(), l = e + 4, u = 0;
                    u <= a;
                    ++u
                  ) {
                    var c = e + 4 + u * t;
                    (u != a && 0 != o[c >> s]) ||
                      ((l = n(l, c - l)),
                      void 0 === r
                        ? (r = l)
                        : ((r += String.fromCharCode(0)), (r += l)),
                      (l = c + t));
                  }
                  return Ar(e), r;
                },
                toWireType: (e, n) => {
                  if ("string" != typeof n)
                    throw new vt(
                      `Cannot pass non-string to C++ string type ${r}`,
                    );
                  var i = o(n),
                    l = _r(4 + i + t);
                  return (
                    (b[l >> 2] = i >> s),
                    a(n, l + 4, i + t),
                    null !== e && e.push(Ar, l),
                    l
                  );
                },
                argPackAdvance: 8,
                readValueFromPointer: Pt,
                F(e) {
                  Ar(e);
                },
              });
            },
            _embind_register_void: (e, t) => {
              St(e, {
                Ga: !0,
                name: (t = Et(t)),
                argPackAdvance: 0,
                fromWireType: () => {},
                toWireType: () => {},
              });
            },
            _emval_call: (e, t, r, n) => (e = or[e])(null, (t = Ft(t)), r, n),
            _emval_decref: Mt,
            _emval_get_global: (e) => {
              if (0 === e) return It(sr());
              var t = ir[e];
              return (e = void 0 === t ? Et(e) : t), It(sr()[e]);
            },
            _emval_get_method_caller: (e, t, r) => {
              t = ((e, t) => {
                for (var r = Array(e), n = 0; n < e; ++n) {
                  var a = n,
                    o = b[(t + 4 * n) >> 2],
                    i = Tt[o];
                  if (void 0 === i)
                    throw (
                      ((e = "parameter " + n + " has unknown type " + Ht(o)),
                      new vt(e))
                    );
                  r[a] = i;
                }
                return r;
              })(e, t);
              var n = t.shift();
              e--;
              var a = "return function (obj, func, destructorsRef, args) {\n",
                o = 0,
                i = [];
              0 === r && i.push("obj");
              for (var s = ["retType"], l = [n], u = 0; u < e; ++u)
                i.push("arg" + u),
                  s.push("argType" + u),
                  l.push(t[u]),
                  (a += `  var arg${u} = argType${u}.readValueFromPointer(args${o ? "+" + o : ""});\n`),
                  (o += t[u].argPackAdvance);
              for (
                a += `  var rv = ${1 === r ? "new func" : "func.call"}(${i.join(", ")});\n`,
                  u = 0;
                u < e;
                ++u
              )
                t[u].deleteObject &&
                  (a += `  argType${u}.deleteObject(arg${u});\n`);
              return (
                n.Ga ||
                  (s.push("emval_returnValue"),
                  l.push(lr),
                  (a +=
                    "  return emval_returnValue(retType, destructorsRef, rv);\n")),
                s.push(a + "};\n"),
                (e = Ut(s).apply(null, l)),
                (r = `methodCaller<(${t.map((e) => e.name).join(", ")}) => ${n.name}>`),
                ((e) => {
                  var t = or.length;
                  return or.push(e), t;
                })(Dt(r, e))
              );
            },
            _emval_incref: (e) => {
              4 < e && (Ct.get(e).na += 1);
            },
            _emval_run_destructors: (e) => {
              var t = Ft(e);
              Lt(t), Mt(e);
            },
            abort: () => {
              $("native code called abort()");
            },
            emscripten_memcpy_js: (e, t, r) => y.copyWithin(e, t, t + r),
            emscripten_resize_heap: (e) => {
              var t = y.length;
              if ((S((e >>>= 0) > t), 2147483648 < e))
                return (
                  m(
                    `Cannot enlarge memory, requested ${e} bytes, but the limit is 2147483648 bytes!`,
                  ),
                  !1
                );
              for (var r = 1; 4 >= r; r *= 2) {
                var n = t * (1 + 0.2 / r);
                n = Math.min(n, e + 100663296);
                var a = Math;
                n = Math.max(e, n);
                e: {
                  n = a = a.min.call(
                    a,
                    2147483648,
                    n + ((65536 - (n % 65536)) % 65536),
                  );
                  var o = p.buffer,
                    i = (n - o.byteLength + 65535) / 65536;
                  try {
                    p.grow(i), O();
                    var s = 1;
                    break e;
                  } catch (e) {
                    m(
                      `growMemory: Attempted to grow heap from ${o.byteLength} bytes to ${n} bytes, but got error: ${e}`,
                    );
                  }
                  s = void 0;
                }
                if (s) return !0;
              }
              return (
                m(
                  `Failed to grow the heap from ${t} bytes to ${a} bytes, not enough memory!`,
                ),
                !1
              );
            },
            environ_get: (e, t) => {
              var r = 0;
              return (
                cr().forEach((n, a) => {
                  var o = t + r;
                  for (a = b[(e + 4 * a) >> 2] = o, o = 0; o < n.length; ++o)
                    S(n.charCodeAt(o) === (255 & n.charCodeAt(o))),
                      (g[a++ >> 0] = n.charCodeAt(o));
                  (g[a >> 0] = 0), (r += n.length + 1);
                }),
                0
              );
            },
            environ_sizes_get: (e, t) => {
              var r = cr();
              b[e >> 2] = r.length;
              var n = 0;
              return r.forEach((e) => (n += e.length + 1)), (b[t >> 2] = n), 0;
            },
            fd_close: function (e) {
              try {
                var t = Ye(e);
                if (null === t.o) throw new Le(8);
                t.Z && (t.Z = null);
                try {
                  t.i.close && t.i.close(t);
                } catch (e) {
                  throw e;
                } finally {
                  Pe[t.o] = null;
                }
                return (t.o = null), 0;
              } catch (e) {
                if (void 0 === dt || "ErrnoError" !== e.name) throw e;
                return e.u;
              }
            },
            fd_read: function (e, t, r, n) {
              try {
                e: {
                  var a = Ye(e);
                  e = t;
                  for (var o, i = (t = 0); i < r; i++) {
                    var s = b[e >> 2],
                      l = b[(e + 4) >> 2];
                    e += 8;
                    var u = a,
                      c = s,
                      d = l,
                      f = o,
                      h = g;
                    if ((S(0 <= c), 0 > d || 0 > f)) throw new Le(28);
                    if (null === u.o) throw new Le(8);
                    if (1 == (2097155 & u.flags)) throw new Le(8);
                    if (16384 == (61440 & u.node.mode)) throw new Le(31);
                    if (!u.i.read) throw new Le(28);
                    var m = void 0 !== f;
                    if (m) {
                      if (!u.seekable) throw new Le(70);
                    } else f = u.position;
                    var p = u.i.read(u, h, c, d, f);
                    m || (u.position += p);
                    var y = p;
                    if (0 > y) {
                      var v = -1;
                      break e;
                    }
                    if (((t += y), y < l)) break;
                    void 0 !== o && (o += y);
                  }
                  v = t;
                }
                return (b[n >> 2] = v), 0;
              } catch (e) {
                if (void 0 === dt || "ErrnoError" !== e.name) throw e;
                return e.u;
              }
            },
            fd_seek: function (e, t, r, n, a) {
              S(t == t >>> 0 || t == (0 | t)),
                S(r === (0 | r)),
                (t =
                  (r + 2097152) >>> 0 < 4194305 - !!t
                    ? (t >>> 0) + 4294967296 * r
                    : NaN);
              try {
                if (isNaN(t)) return 61;
                var o = Ye(e);
                return (
                  ot(o, t, n),
                  (G = [
                    o.position >>> 0,
                    ((B = o.position),
                    1 <= +Math.abs(B)
                      ? 0 < B
                        ? +Math.floor(B / 4294967296) >>> 0
                        : ~~+Math.ceil((B - +(~~B >>> 0)) / 4294967296) >>> 0
                      : 0),
                  ]),
                  (E[a >> 2] = G[0]),
                  (E[(a + 4) >> 2] = G[1]),
                  o.Z && 0 === t && 0 === n && (o.Z = null),
                  0
                );
              } catch (e) {
                if (void 0 === dt || "ErrnoError" !== e.name) throw e;
                return e.u;
              }
            },
            fd_write: function (e, t, r, n) {
              try {
                e: {
                  var a = Ye(e);
                  e = t;
                  for (var o, i = (t = 0); i < r; i++) {
                    var s = b[e >> 2],
                      l = b[(e + 4) >> 2];
                    e += 8;
                    var u = a,
                      c = s,
                      d = l,
                      f = o,
                      h = g;
                    if ((S(0 <= c), 0 > d || 0 > f)) throw new Le(28);
                    if (null === u.o) throw new Le(8);
                    if (0 == (2097155 & u.flags)) throw new Le(8);
                    if (16384 == (61440 & u.node.mode)) throw new Le(31);
                    if (!u.i.write) throw new Le(28);
                    u.seekable && 1024 & u.flags && ot(u, 0, 2);
                    var m = void 0 !== f;
                    if (m) {
                      if (!u.seekable) throw new Le(70);
                    } else f = u.position;
                    var p = u.i.write(u, h, c, d, f, void 0);
                    m || (u.position += p);
                    var y = p;
                    if (0 > y) {
                      var v = -1;
                      break e;
                    }
                    (t += y), void 0 !== o && (o += y);
                  }
                  v = t;
                }
                return (b[n >> 2] = v), 0;
              } catch (e) {
                if (void 0 === dt || "ErrnoError" !== e.name) throw e;
                return e.u;
              }
            },
            strftime_l: (e, t, r, n) => mr(e, t, r, n),
            system: (e) => (e ? ((E[Sr() >> 2] = 52), -1) : 0),
          },
          Tr = (function () {
            function e(e) {
              return (
                (Tr = e.exports),
                S((p = Tr.memory), "memory not found in wasm exports"),
                O(),
                S(
                  (jt = Tr.__indirect_function_table),
                  "table not found in wasm exports",
                ),
                P.unshift(Tr.__wasm_call_ctors),
                k--,
                o.monitorRunDependencies?.(k),
                S(x["wasm-instantiate"]),
                delete x["wasm-instantiate"],
                0 == k &&
                  (null !== U && (clearInterval(U), (U = null)),
                  j && ((e = j), (j = null), e())),
                Tr
              );
            }
            var t = { env: br, wasi_snapshot_preview1: br };
            k++,
              o.monitorRunDependencies?.(k),
              S(!x["wasm-instantiate"]),
              (x["wasm-instantiate"] = 1),
              null === U &&
                "undefined" != typeof setInterval &&
                (U = setInterval(() => {
                  if (A) clearInterval(U), (U = null);
                  else {
                    var e,
                      t = !1;
                    for (e in x)
                      t || ((t = !0), m("still waiting on run dependencies:")),
                        m(`dependency: ${e}`);
                    t && m("(end of list)");
                  }
                }, 1e4));
            var r = o;
            if (o.instantiateWasm)
              try {
                return o.instantiateWasm(t, e);
              } catch (e) {
                m(`Module.instantiateWasm callback failed with error: ${e}`),
                  a(e);
              }
            return (
              (function (e, t) {
                var r = W;
                return f ||
                  "function" != typeof WebAssembly.instantiateStreaming ||
                  H(r) ||
                  "function" != typeof fetch
                  ? K(r, e, t)
                  : fetch(r, { credentials: "same-origin" }).then((n) =>
                      WebAssembly.instantiateStreaming(n, e).then(
                        t,
                        function (n) {
                          return (
                            m(`wasm streaming compile failed: ${n}`),
                            m("falling back to ArrayBuffer instantiation"),
                            K(r, e, t)
                          );
                        },
                      ),
                    );
              })(t, function (t) {
                S(
                  o === r,
                  "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?",
                ),
                  (r = null),
                  e(t.instance);
              }).catch(a),
              {}
            );
          })(),
          _r = V("malloc"),
          Ar = V("free"),
          Sr = V("__errno_location"),
          Or = (o._main = V("__main_argc_argv")),
          Cr = (o._fflush = V("fflush")),
          Mr = V("__getTypeName"),
          Fr = () => (Fr = Tr.emscripten_stack_init)(),
          Ir = () => (Ir = Tr.emscripten_stack_get_end)(),
          Pr = V("stackAlloc"),
          Nr = () => (Nr = Tr.emscripten_stack_get_current)();
        function Rr() {
          var e = s;
          function t() {
            if (!Er && ((Er = !0), (o.calledRun = !0), !A)) {
              if ((S(!D), (D = !0), C(), !o.noFSInit && !ze)) {
                S(
                  !ze,
                  "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)",
                ),
                  (ze = !0),
                  it(),
                  (o.stdin = o.stdin),
                  (o.stdout = o.stdout),
                  (o.stderr = o.stderr),
                  o.stdin ? st("stdin", o.stdin) : et("/dev/tty", "/dev/stdin"),
                  o.stdout
                    ? st("stdout", null, o.stdout)
                    : et("/dev/tty", "/dev/stdout"),
                  o.stderr
                    ? st("stderr", null, o.stderr)
                    : et("/dev/tty1", "/dev/stderr");
                var t = at("/dev/stdin", 0),
                  n = at("/dev/stdout", 1),
                  a = at("/dev/stderr", 1);
                S(0 === t.o, `invalid handle for stdin (${t.o})`),
                  S(1 === n.o, `invalid handle for stdout (${n.o})`),
                  S(2 === a.o, `invalid handle for stderr (${a.o})`);
              }
              if (
                ((De = !1),
                te(P),
                C(),
                te(N),
                r(o),
                o.onRuntimeInitialized && o.onRuntimeInitialized(),
                Dr &&
                  (function (e = []) {
                    S(
                      0 == k,
                      'cannot call main when async dependencies remain! (listen on Module["onRuntimeInitialized"])',
                    ),
                      S(
                        0 == I.length,
                        "cannot call main when preRun functions remain to be called",
                      ),
                      e.unshift(l);
                    var t = e.length,
                      r = Pr(4 * (t + 1)),
                      n = r;
                    e.forEach((e) => {
                      var t = b,
                        r = n >> 2,
                        a = pe(e) + 1,
                        o = Pr(a);
                      Xt(e, o, a), (t[r] = o), (n += 4);
                    }),
                      (b[n >> 2] = 0);
                    try {
                      var a = Or(t, r);
                      pr(a);
                    } catch (e) {
                      gr(e);
                    }
                  })(e),
                C(),
                o.postRun)
              )
                for (
                  "function" == typeof o.postRun && (o.postRun = [o.postRun]);
                  o.postRun.length;

                )
                  (t = o.postRun.shift()), R.unshift(t);
              te(R);
            }
          }
          if (!(0 < k)) {
            if (
              (Fr(),
              (function () {
                var e = Ir();
                S(0 == (3 & e)),
                  0 == e && (e += 4),
                  (b[e >> 2] = 34821223),
                  (b[(e + 4) >> 2] = 2310721022),
                  (b[0] = 1668509029);
              })(),
              o.preRun)
            )
              for (
                "function" == typeof o.preRun && (o.preRun = [o.preRun]);
                o.preRun.length;

              )
                L();
            te(I),
              0 < k ||
                (o.setStatus
                  ? (o.setStatus("Running..."),
                    setTimeout(function () {
                      setTimeout(function () {
                        o.setStatus("");
                      }, 1),
                        t();
                    }, 1))
                  : t(),
                C());
          }
        }
        if (
          ((o.dynCall_iiji = V("dynCall_iiji")),
          (o.dynCall_jiji = V("dynCall_jiji")),
          (o.dynCall_viijii = V("dynCall_viijii")),
          (o.dynCall_iiiiij = V("dynCall_iiiiij")),
          (o.dynCall_iiiiijj = V("dynCall_iiiiijj")),
          (o.dynCall_iiiiiijj = V("dynCall_iiiiiijj")),
          "writeI53ToI64 writeI53ToI64Clamped writeI53ToI64Signaling writeI53ToU64Clamped writeI53ToU64Signaling readI53FromI64 readI53FromU64 convertI32PairToI53 convertU32PairToI53 ydayFromDate inetPton4 inetNtop4 inetPton6 inetNtop6 readSockaddr writeSockaddr getHostByName getCallstack emscriptenLog convertPCtoSourceLocation readEmAsmArgs jstoi_q jstoi_s listenOnce autoResumeAudioContext runtimeKeepalivePush runtimeKeepalivePop callUserCallback maybeExit asmjsMangle getNativeTypeSize STACK_SIZE STACK_ALIGN POINTER_SIZE ASSERTIONS getCFunc ccall cwrap uleb128Encode sigToWasmTypes generateFuncType convertJsFunctionToWasm getEmptyTableSlot updateTableMap getFunctionAddress addFunction removeFunction reallyNegative unSign strLen reSign formatString intArrayToString AsciiToString stringToNewUTF8 registerKeyEventCallback maybeCStringToJsString findEventTarget findCanvasEventTarget getBoundingClientRect fillMouseEventData registerMouseEventCallback registerWheelEventCallback registerUiEventCallback registerFocusEventCallback fillDeviceOrientationEventData registerDeviceOrientationEventCallback fillDeviceMotionEventData registerDeviceMotionEventCallback screenOrientation fillOrientationChangeEventData registerOrientationChangeEventCallback fillFullscreenChangeEventData registerFullscreenChangeEventCallback JSEvents_requestFullscreen JSEvents_resizeCanvasForFullscreen registerRestoreOldStyle hideEverythingExceptGivenElement restoreHiddenElements setLetterbox softFullscreenResizeWebGLRenderTarget doRequestFullscreen fillPointerlockChangeEventData registerPointerlockChangeEventCallback registerPointerlockErrorEventCallback requestPointerLock fillVisibilityChangeEventData registerVisibilityChangeEventCallback registerTouchEventCallback fillGamepadEventData registerGamepadEventCallback disableGamepadApiIfItThrows registerBeforeUnloadEventCallback fillBatteryEventData battery registerBatteryEventCallback setCanvasElementSize getCanvasElementSize jsStackTrace stackTrace checkWasiClock wasiRightsToMuslOFlags wasiOFlagsToMuslOFlags createDyncallWrapper safeSetTimeout setImmediateWrapped clearImmediateWrapped polyfillSetImmediate getPromise makePromise idsToPromises makePromiseCallback findMatchingCatch Browser_asyncPrepareDataCounter setMainLoop getSocketFromFD getSocketAddress FS_unlink FS_mkdirTree _setNetworkCallback heapObjectForWebGLType heapAccessShiftForWebGLHeap webgl_enable_ANGLE_instanced_arrays webgl_enable_OES_vertex_array_object webgl_enable_WEBGL_draw_buffers webgl_enable_WEBGL_multi_draw emscriptenWebGLGet computeUnpackAlignedImageSize colorChannelsInGlTextureFormat emscriptenWebGLGetTexPixelData __glGenObject emscriptenWebGLGetUniform webglGetUniformLocation webglPrepareUniformLocationsBeforeFirstUse webglGetLeftBracePos emscriptenWebGLGetVertexAttrib __glGetActiveAttribOrUniform writeGLArray registerWebGlEventCallback runAndAbortIfError SDL_unicode SDL_ttfContext SDL_audio ALLOC_NORMAL ALLOC_STACK allocate writeStringToMemory writeAsciiToMemory getFunctionArgsName init_embind getBasestPointer registerInheritedInstance unregisterInheritedInstance getInheritedInstance getInheritedInstanceCount getLiveInheritedInstances enumReadValueFromPointer genericPointerToWireType constNoSmartPtrRawPointerToWireType nonConstNoSmartPtrRawPointerToWireType init_RegisteredPointer RegisteredPointer RegisteredPointer_fromWireType runDestructor releaseClassHandle detachFinalizer attachFinalizer makeClassHandle init_ClassHandle ClassHandle throwInstanceAlreadyDeleted flushPendingDeletes setDelayFunction RegisteredClass shallowCopyInternalPointer downcastPointer upcastPointer validateThis char_0 char_9 makeLegalFunctionName"
            .split(" ")
            .forEach(function (e) {
              "undefined" == typeof globalThis ||
                Object.getOwnPropertyDescriptor(globalThis, e) ||
                Object.defineProperty(globalThis, e, {
                  configurable: !0,
                  get() {
                    var t = `\`${e}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,
                      r = e;
                    r.startsWith("_") || (r = "$" + e),
                      (t += ` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${r}')`),
                      X(e) &&
                        (t +=
                          ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),
                      ae(t);
                  },
                }),
                Q(e);
            }),
          "run addOnPreRun addOnInit addOnPreMain addOnExit addOnPostRun addRunDependency removeRunDependency FS_createFolder FS_createPath FS_createLazyFile FS_createLink FS_createDevice FS_readFile out err callMain abort wasmMemory wasmExports stackAlloc stackSave stackRestore getTempRet0 setTempRet0 writeStackCookie checkStackCookie convertI32PairToI53Checked ptrToString zeroMemory exitJS getHeapMax growMemory ENV MONTH_DAYS_REGULAR MONTH_DAYS_LEAP MONTH_DAYS_REGULAR_CUMULATIVE MONTH_DAYS_LEAP_CUMULATIVE isLeapYear arraySum addDays ERRNO_CODES ERRNO_MESSAGES setErrNo DNS Protocols Sockets initRandomFill randomFill timers warnOnce UNWIND_CACHE readEmAsmArgsArray getExecutableName dynCallLegacy getDynCaller dynCall handleException keepRuntimeAlive asyncLoad alignMemory mmapAlloc handleAllocatorInit HandleAllocator wasmTable noExitRuntime freeTableIndexes functionsInTableMap setValue getValue PATH PATH_FS UTF8Decoder UTF8ArrayToString UTF8ToString stringToUTF8Array stringToUTF8 lengthBytesUTF8 intArrayFromString stringToAscii UTF16Decoder UTF16ToString stringToUTF16 lengthBytesUTF16 UTF32ToString stringToUTF32 lengthBytesUTF32 stringToUTF8OnStack writeArrayToMemory JSEvents specialHTMLTargets currentFullscreenStrategy restoreOldWindowedStyle demangle demangleAll ExitStatus getEnvStrings doReadv doWritev promiseMap uncaughtExceptionCount exceptionLast exceptionCaught ExceptionInfo Browser wget SYSCALLS preloadPlugins FS_createPreloadedFile FS_modeStringToFlags FS_getMode FS_stdin_getChar_buffer FS_stdin_getChar FS FS_createDataFile MEMFS TTY PIPEFS SOCKFS tempFixedLengthArray miniTempWebGLFloatBuffers miniTempWebGLIntBuffers GL emscripten_webgl_power_preferences AL GLUT EGL GLEW IDBStore SDL SDL_gfx allocateUTF8 allocateUTF8OnStack InternalError BindingError throwInternalError throwBindingError registeredTypes awaitingDependencies typeDependencies tupleRegistrations structRegistrations sharedRegisterType whenDependentTypesAreResolved embind_charCodes embind_init_charCodes readLatin1String getTypeName getFunctionName heap32VectorToArray requireRegisteredType usesDestructorStack createJsInvoker UnboundTypeError PureVirtualError GenericWireTypeSize throwUnboundTypeError ensureOverloadTable exposePublicSymbol replacePublicSymbol extendError createNamedFunction embindRepr registeredInstances registeredPointers registerType integerReadValueFromPointer floatReadValueFromPointer simpleReadValueFromPointer readPointer runDestructors newFunc craftInvokerFunction embind__requireFunction finalizationRegistry detachFinalizer_deps deletionQueue delayFunction emval_handles emval_symbols init_emval count_emval_handles getStringOrSymbol Emval emval_get_global emval_returnValue emval_lookupTypes emval_methodCallers emval_addMethodCaller reflectConstruct"
            .split(" ")
            .forEach(Q),
          (j = function e() {
            Er || Rr(), Er || (j = e);
          }),
          o.preInit)
        )
          for (
            "function" == typeof o.preInit && (o.preInit = [o.preInit]);
            0 < o.preInit.length;

          )
            o.preInit.pop()();
        var Dr = !1;
        return o.noInitialRun && (Dr = !1), Rr(), t.ready;
      });
  const o = a({ locateFile: () => "assets/jxl-DkjOts8j.wasm" });
  function i(e) {
    const { value: t, done: r } = e.next();
    if (r) throw Error("Unexpected end of file");
    return t;
  }
  r.expose({
    encodeJxl: async (e) => (await o).jxl_from_tree(e),
    decodeJxl: async (e) => (await o).decode(e),
    prettier: function e(t, r = 0) {
      let n = "";
      "string" == typeof t &&
        (t = t
          .split(/\s/)
          .filter((e) => e)
          [Symbol.iterator]());
      let a,
        o,
        s = !1;
      for (;;) {
        if ((({ value: a, done: o } = t.next()), o)) return n;
        if ("if" === a.toLowerCase() || "-" === a.toLowerCase()) {
          s && (n += "\n");
          break;
        }
        if (a.startsWith("/*")) {
          let e = a.endsWith("*/");
          for (n += `${"  ".repeat(r)}${a}`; !e; ) {
            const r = i(t);
            (e = r.endsWith("*/")), (n += ` ${r}`);
          }
          n += "\n";
          continue;
        }
        n += a;
        let e = u(a.toLowerCase());
        for (; e > 0; ) (n += ` ${i(t)}`), e--;
        (n += "\n"), (s = !0);
      }
      if ("if" === a.toLowerCase())
        n += `${"  ".repeat(r)}if ${i(t)} ${(i(t), ">")} ${i(t)}\n${e(t, r + 1)}\n${e(t, r + 1)}`;
      else if ("-" === a) {
        n += `${"  ".repeat(r)}- ${i(t)}`;
        const e = i(t);
        n += "+" === e || "-" === e ? ` ${e} ${i(t)}` : ` ${e}`;
      }
      0 == r && ((n += "\n"), (n += e(t)));
      return n;
    },
  });
  const s = ["squeeze", "xyb", "cbycr", "alpha", "notlast"],
    l = ["framepos"];
  function u(e) {
    return s.includes(e) ? 0 : l.includes(e) ? 2 : 1;
  }
});
