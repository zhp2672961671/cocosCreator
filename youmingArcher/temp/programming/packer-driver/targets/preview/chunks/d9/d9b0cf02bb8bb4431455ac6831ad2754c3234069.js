System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE

        /*! For license information please see cocosAnalytics.min.js.LICENSE.txt */
        !function (t) {
          var e = {};

          function r(n) {
            if (e[n]) return e[n].exports;
            var i = e[n] = {
              i: n,
              l: !1,
              exports: {}
            };
            return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
          }

          r.m = t, r.c = e, r.d = function (t, e, n) {
            r.o(t, e) || Object.defineProperty(t, e, {
              enumerable: !0,
              get: n
            });
          }, r.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
              value: "Module"
            }), Object.defineProperty(t, "__esModule", {
              value: !0
            });
          }, r.t = function (t, e) {
            if (1 & e && (t = r(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
              enumerable: !0,
              value: t
            }), 2 & e && "string" != typeof t) for (var i in t) {
              r.d(n, i, function (e) {
                return t[e];
              }.bind(null, i));
            }
            return n;
          }, r.n = function (t) {
            var e = t && t.__esModule ? function () {
              return t.default;
            } : function () {
              return t;
            };
            return r.d(e, "a", e), e;
          }, r.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }, r.p = "/assets/", r(r.s = 3);
        }([function (t, e) {
          var r;

          r = function () {
            return this;
          }();

          try {
            r = r || new Function("return this")();
          } catch (t) {
            "object" == typeof window && (r = window);
          }

          t.exports = r;
        }, function (t, e) {
          t.exports = function (t) {
            return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
              enumerable: !0,
              get: function get() {
                return t.l;
              }
            }), Object.defineProperty(t, "id", {
              enumerable: !0,
              get: function get() {
                return t.i;
              }
            }), t.webpackPolyfill = 1), t;
          };
        }, function (t, e) {
          var r = {
            utf8: {
              stringToBytes: function stringToBytes(t) {
                return r.bin.stringToBytes(unescape(encodeURIComponent(t)));
              },
              bytesToString: function bytesToString(t) {
                return decodeURIComponent(escape(r.bin.bytesToString(t)));
              }
            },
            bin: {
              stringToBytes: function stringToBytes(t) {
                for (var e = [], r = 0; r < t.length; r++) {
                  e.push(255 & t.charCodeAt(r));
                }

                return e;
              },
              bytesToString: function bytesToString(t) {
                for (var e = [], r = 0; r < t.length; r++) {
                  e.push(String.fromCharCode(t[r]));
                }

                return e.join("");
              }
            }
          };
          t.exports = r;
        }, function (t, e, r) {
          (function (t, n) {
            var i, o;
            !function (s, a, u) {
              "use strict";

              var h = {
                function: !0,
                object: !0
              },
                  l = h[typeof window] && window || this,
                  c = h[typeof e] && e,
                  f = h[typeof t] && t && !t.nodeType && t,
                  p = c && f && "object" == typeof n && n;
              !p || p.global !== p && p.window !== p && p.self !== p || (l = p), void 0 === (o = "function" == typeof (i = u) ? i.call(e, r, e, t) : i) || (t.exports = o), l.cocosAnalytics = u();
            }(0, window, function () {
              return r(4);
            });
          }).call(this, r(1)(t), r(0));
        }, function (t, e, r) {
          "use strict";

          var n = r(5),
              i = r(11),
              o = r(12),
              s = r(15),
              a = r(16),
              u = r(17),
              h = r(18),
              l = r(19),
              c = r(20),
              f = r(21),
              p = r(22),
              d = r(23),
              g = r(24),
              v = {
            data: {
              msgPlus: 0,
              isInit: !1,
              isShowLog: !1,
              msgPool: [],
              apiURL: "https://logstorage.cocos.com/log/v2",
              apiURLReserved: "http://logstorage.cocos.com/log/v2",
              versionCode: "v2"
            },
            version: "2.2.1",
            browserVersion: void 0,
            isActive: !0,
            init: function init(t) {
              this.CAAccount = new a(this), this.CAEvent = new u(this), this.CAPayment = new h(this), this.CALevels = new l(this), this.CATask = new c(this), this.CAItem = new f(this), this.CAVirtual = new p(this), this.CATaskType = new d(this), this.CACustomEvent = new s(this), this.CAAdvertising = new g(this), i.manufacturer = i.manufacturer || "", this.data.appVersion = t.version, this.data.appBuild = t.build, this.data.engine = t.engine || "", this.data.resolution = this._getScreenResolution(), this.data.uniqueID = this._getUniqueID(), this.data.CCID = this._getCCID(), this.data.age = 0, this.data.sex = 0, this._runInterval(), this._bindPageVisibilityEvent(), this.data.isInit = !0, console.log("cocos analytics version :" + this.version);
              var e = this._getLocalStorage("_SDK_APPID_") || "",
                  r = this._getLocalStorage("_SDK_STORE_") || "",
                  n = this._getLocalStorage("_SDK_CALLNUMBER_") || "";

              if (e.length > 0 && e != t.appID || r.length > 0 && r != t.storeID || n.length > 0 && n != t.callNumber) {
                var o = this._getLocalStorage("onlineDuration"),
                    v = this._getLocalStorage("_UID_" + e) || "";

                v.length > 0 && parseInt(o) > 0 && (this.data.appID = e, this.data.userID = v, this.data.storeID = r, this.data.callNumber = n, this.CAAccount.logout());
              }

              return t.appID ? (this.data.appID = t.appID, t.storeID = t.storeID, t.storeID && 0 != t.storeID.replace(/\s/g, "").length ? (this.data.storeID = t.storeID, this.data.callNumber = t.callNumber || "", this.data.userID = "", this.data.channel = "", this._addLocalStorage("_SDK_STORE_", this.data.storeID), this._addLocalStorage("_SDK_APPID_", t.appID), this._addLocalStorage("_SDK_CALLNUMBER_", this.data.callNumber), void this._sendInitEvent()) : (console.log("storeID 不能为空!"), void (this.data.isInit = !1))) : (console.log("appID 不能为空!"), void (this.data.isInit = !1));
            },
            isInited: function isInited() {
              return this.data.isInit;
            },
            onPause: function onPause() {
              this.isActive = !1, this.data.end = (new Date().getTime() + "").substr(0, 10);
              var t = this.data.end - this.data.start;
              this.log("duration..." + t + "s");

              var e = this._generatePostData({
                eventValue: {
                  action: "background",
                  start: this.data.start,
                  end: this.data.end
                },
                eventTag: "successed",
                eventID: "view"
              });

              this._upload(e);
            },
            onResume: function onResume() {
              (this.isActive = !0, this.data.start = (new Date().getTime() + "").substr(0, 10), this.data.end) && this.data.start - this.data.end > 3600 && this._sendInitEvent();
            },
            enableDebug: function enableDebug(t) {
              this.data.isShowLog = t;
            },
            _sendInitEvent: function _sendInitEvent() {
              if (i.runtimeMask) {
                var t = null;
                t = setInterval(function () {
                  if (!i.runtimeMask) {
                    clearInterval(t);

                    var e = this._generatePostData({
                      eventTag: "successed",
                      eventID: "init"
                    });

                    this._upload(e);
                  }
                }.bind(this), 10);
              } else {
                var e = this._generatePostData({
                  eventTag: "successed",
                  eventID: "init"
                });

                this._upload(e);
              }
            },
            _runInterval: function _runInterval() {
              var t = this;
              this.isInited() || (setInterval(function () {
                t.log("cocos analytics check and upload log...");

                for (var e = t._getLocalStorage("_MSG_" + t.data.appID), r = JSON.parse(e || "[]") || t.data.msgPool; 0 !== r.length;) {
                  if (r.length <= 100) r.forEach(function (e) {
                    t._submit(e);
                  }), r = [], t.data.msgPool = r, t._addLocalStorage("_MSG_" + t.data.appID, t._toJson(t.data.msgPool));else {
                    var n = r.splice(0, 100);
                    t._submit(n), t.data.msgPool = r, t._addLocalStorage("_MSG_" + t.data.appID, t._toJson(t.data.msgPool));
                  }
                }
              }, 3e4), setInterval(function () {
                t.isActive && t.data.heartBeat && (t.data.onlineTime = parseInt(t.data.onlineTime || 0) + 1, t._addLocalStorage("onlineDuration", t.data.onlineTime));
              }, 1e3));
            },
            _bindPageVisibilityEvent: function _bindPageVisibilityEvent() {
              var t = "hidden";
              t in document ? document.addEventListener("visibilitychange", r) : (t = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", r) : (t = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", r) : (t = "msHidden") in document ? document.addEventListener("msvisibilitychange", r) : "onfocusin" in document ? document.onfocusin = document.onfocusout = r : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = r;
              var e = this;

              function r() {
                var t = document.visibilityState;
                "visible" === t && e.onResume(), "hidden" === t && e.onPause();
              }

              void 0 !== document[t] && r();
            },
            _generatePostData: function _generatePostData(t) {
              var e = this._generateBasePostData();

              if (null == t) return e;

              for (var r in t) {
                null != t[r] && e[r] !== t[r] && (e[r] = t[r]);
              }

              return e;
            },
            _lastMsgID: function _lastMsgID() {
              return this.data.saveMsgID || "";
            },
            _msgID: function _msgID() {
              return this.data.saveMsgID = o(this.data.CCID + (new Date().getTime() + this.data.msgPlus)), this.data.msgPlus = this.data.msgPlus + 1, this.data.saveMsgID;
            },
            _generateBasePostData: function _generateBasePostData() {
              var t = (new Date().getTime() + "").substr(0, 10),
                  e = {
                appVersion: this.data.appVersion,
                versionCode: this.data.versionCode,
                uniqueID: this.data.uniqueID,
                appID: this.data.appID,
                channelID: this.data.channel,
                platform: "H5",
                engine: this.data.engine,
                chargeTime: t,
                userID: this.data.userID,
                resolution: this.data.resolution,
                osVersion: i.os.version,
                language: this._getLanguage(),
                manufacturer: i.manufacturer || "",
                store: this.data.storeID,
                age: this.data.age,
                sex: this.data.sex,
                callNumber: this.data.callNumber,
                model: i.product
              };
              return e.lastMsgID = this._lastMsgID(), e.msgID = this._msgID(), e;
            },
            _toJson: function _toJson(t) {
              return JSON.stringify(t);
            },
            _fromJson: function _fromJson(t) {
              return JSON.parse(t);
            },
            _upload: function _upload(t) {
              this.data.isInit ? this._submit(t) : console.log("Please init first!");
            },
            log: function log() {
              if (!0 === this.data.isShowLog) for (var t in arguments) {
                console.log(arguments[t]);
              }
            },
            _submit: function _submit(t) {
              var e;
              e = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
              var r = this;
              e.onreadystatechange = function () {
                if (4 == e.readyState) {
                  if (0 == e.status && r.data.apiURL != r.data.apiURLReserved) return r.data.apiURL = r.data.apiURLReserved, void r._msgPersist(t);
                  200 == e.status && r.log(r._toJson(t));
                }
              }, e.onerror = function (e) {
                r._msgPersist(t);
              };
              var i = n.encryptPostData(this._toJson(t));
              e.open("POST", this.data.apiURL, !0), e.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"), e.send(i);
            },
            _msgPersist: function _msgPersist(t) {
              this.data.msgPool.push(t), this._addLocalStorage("_MSG_" + this.data.appID, this._toJson(this.data.msgPool));
            },
            _getUniqueID: function _getUniqueID() {
              var t = "_SDK_UNIQUE_ID_",
                  e = this._getLocalStorage(t);

              return e || (e = n.random32Str(), this._addLocalStorage(t, e)), e;
            },
            _getCCID: function _getCCID() {
              var t = n.x64hash128(),
                  e = this._getLocalStorage(t);

              return e || (e = n.random32Str(), this._addLocalStorage(t, e)), e;
            },
            extends: function _extends(t) {
              t.data = this.data, t.log = this.log, t._toJson = this._toJson, t._upload = this._upload, t._submit = this._submit, t._msgPersist = this._msgPersist, t._generatePostData = this._generatePostData, t._generateBasePostData = this._generateBasePostData, t._addLocalStorage = this._addLocalStorage, t._delLocalStorage = this._delLocalStorage, t._getLocalStorage = this._getLocalStorage, t._getLanguage = this._getLanguage, t._setHeartBeat = this._setHeartBeat, t._lastMsgID = this._lastMsgID, t._msgID = this._msgID;
            },
            _addLocalStorage: function _addLocalStorage(t, e) {
              e = e.toString(), window.localStorage && ("sessionId" == t && window.sessionStorage ? sessionStorage.setItem("__CA_" + t, e) : window.wx && wx.setStorage ? wx.setStorage({
                key: "__CA_" + t,
                data: e
              }) : localStorage.setItem("__CA_" + t, e));
            },
            _delLocalStorage: function _delLocalStorage(t) {
              window.localStorage && ("sessionId" == t && window.sessionStorage ? sessionStorage.removeItem("__CA_" + t) : window.wx && wx.removeStorageSync ? wx.removeStorageSync("__CA_" + t) : localStorage.removeItem("__CA_" + t));
            },
            _getLocalStorage: function _getLocalStorage(t) {
              if (window.localStorage) return "sessionId" == t && window.sessionStorage ? sessionStorage.getItem("__CA_" + t) : window.wx && wx.getStorageSync ? wx.getStorageSync("__CA_" + t) : localStorage.getItem("__CA_" + t);
            },
            _getScreenResolution: function _getScreenResolution() {
              if (null != window.BK && null != window.BK.Director) {
                var t = window.BK.Director.renderSize;
                return t.width + "*" + t.height;
              }

              return null == window.screen.width ? window.screen.availWidth + "*" + window.screen.availHeight : window.screen.width + "*" + window.screen.height;
            },
            _getBrowserVersion: function _getBrowserVersion() {
              if (!this.browserVersion) {
                var t = window.navigator.userAgent.toLowerCase(),
                    e = /micromessenger|qqbrowser|sogou|qzone|liebao|ucbrowser|360 aphone|360browser|edge|baiduboxapp|bidubrowser|baidubrowser|maxthon|mxbrowser|trident|miuibrowser/i.exec(t);
                e || (e = /chrome|safari|firefox|opr|oupeng|opera/i.exec(t));
                var r = e ? e[0] : "unknown";
                "micromessenger" === r ? r = "wechat" : "safari" === r && t.match(/android.*applewebkit/) ? r = "androidbrowser" : "trident" === r ? r = "ie" : "360 aphone" === r ? r = "360browser" : "mxbrowser" === r ? r = "maxthon" : "opr" === r ? r = "opera" : "bidubrowser" === r && (r = "baidubrowser");
                var n = t.match(/(micromessenger|qq|mx|maxthon|edge|bidu|baidu|sogou)(mobile)?(browserType)?\/?([\d.]+)/i);
                n || (n = t.match(/(msie |rv:|firefox|chrome|ucbrowser|oupeng|opera|opr|safari|miui)(mobile)?(browserType)?\/?([\d.]+)/i));
                var i = n ? n[4] : "";
                this.browserVersion = r, i && (this.browserVersion += "-" + i);
              }

              return this.browserVersion;
            },
            _getLanguage: function _getLanguage() {
              var t = window.navigator.language;
              return t = (t = t || window.navigator.browserLanguage) ? t.split("-")[0] : "en";
            },
            _setHeartBeat: function _setHeartBeat(t) {
              this.data.heartBeat = t || !1, this.data.onlineTime = this._getLocalStorage("onlineDuration") || 0;
            }
          };
          t.exports = v;
        }, function (t, e, r) {
          "use strict";

          (function (e) {
            r(10);

            function n(t, e) {
              var r = 0,
                  n = t.length;
              if (!t) return 0;

              for (; e < n;) {
                var i = e,
                    o = t.charCodeAt(e);

                if ((r += o <= 127 ? 1 : o <= 2047 ? 2 : o <= 65535 ? 3 : o <= 2097151 ? 4 : o <= 67108863 ? 5 : 6) > 117) {
                  e = i;
                  break;
                }

                e++;
              }

              return e;
            }

            function i(t) {
              var e = new JSEncrypt();
              return e.setPublicKey("-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC9LCzyypg24REurnyflGy2LdFj\nc63hBk/69r84TAJHlE7x92kUpZBF+7cRf0bFRIRA52OsKlF/ljzCjfOPBE9JfNIq\n+dwF/rSqns+eyQHPQFd5lY692loz9Mo1pNgElpHuJbfydju7F5KTnQYqviCWompm\nLKKdzAPcY1AVJfWd+QIDAQAB\n-----END PUBLIC KEY-----"), e.key.encrypt(t);
            }

            var o = {
              urlsafe_b64encode: t => t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""),

              encryptPostData(t) {
                for (var r = new e(0), o = 0, s = t.length; s - o > 0;) {
                  var a = o,
                      u = n(t, o),
                      h = "";

                  do {
                    h = i(t.substr(a, u - a));
                  } while (256 != h.length);

                  r += h, o = u;
                }

                var l = e.from(r, "hex").toString("base64");
                return l = this.urlsafe_b64encode(l);
              },

              x64Add: function x64Add(t, e) {
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
                var r = [0, 0, 0, 0];
                return r[3] += t[3] + e[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += t[2] + e[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += t[1] + e[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += t[0] + e[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]];
              },
              x64Multiply: function x64Multiply(t, e) {
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
                var r = [0, 0, 0, 0];
                return r[3] += t[3] * e[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += t[2] * e[3], r[1] += r[2] >>> 16, r[2] &= 65535, r[2] += t[3] * e[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += t[1] * e[3], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += t[2] * e[2], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += t[3] * e[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += t[0] * e[3] + t[1] * e[2] + t[2] * e[1] + t[3] * e[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]];
              },
              x64Rotl: function x64Rotl(t, e) {
                return 32 === (e %= 64) ? [t[1], t[0]] : e < 32 ? [t[0] << e | t[1] >>> 32 - e, t[1] << e | t[0] >>> 32 - e] : (e -= 32, [t[1] << e | t[0] >>> 32 - e, t[0] << e | t[1] >>> 32 - e]);
              },
              x64LeftShift: function x64LeftShift(t, e) {
                return 0 === (e %= 64) ? t : e < 32 ? [t[0] << e | t[1] >>> 32 - e, t[1] << e] : [t[1] << e - 32, 0];
              },
              x64Xor: function x64Xor(t, e) {
                return [t[0] ^ e[0], t[1] ^ e[1]];
              },
              x64Fmix: function x64Fmix(t) {
                return t = this.x64Xor(t, [0, t[0] >>> 1]), t = this.x64Multiply(t, [4283543511, 3981806797]), t = this.x64Xor(t, [0, t[0] >>> 1]), t = this.x64Multiply(t, [3301882366, 444984403]), t = this.x64Xor(t, [0, t[0] >>> 1]);
              },
              x64hash128: function x64hash128(t, e) {
                e = e || 0;

                for (var r = (t = t || "0").length % 16, n = t.length - r, i = [0, e], o = [0, e], s = [0, 0], a = [0, 0], u = [2277735313, 289559509], h = [1291169091, 658871167], l = 0; l < n; l += 16) {
                  s = [255 & t.charCodeAt(l + 4) | (255 & t.charCodeAt(l + 5)) << 8 | (255 & t.charCodeAt(l + 6)) << 16 | (255 & t.charCodeAt(l + 7)) << 24, 255 & t.charCodeAt(l) | (255 & t.charCodeAt(l + 1)) << 8 | (255 & t.charCodeAt(l + 2)) << 16 | (255 & t.charCodeAt(l + 3)) << 24], a = [255 & t.charCodeAt(l + 12) | (255 & t.charCodeAt(l + 13)) << 8 | (255 & t.charCodeAt(l + 14)) << 16 | (255 & t.charCodeAt(l + 15)) << 24, 255 & t.charCodeAt(l + 8) | (255 & t.charCodeAt(l + 9)) << 8 | (255 & t.charCodeAt(l + 10)) << 16 | (255 & t.charCodeAt(l + 11)) << 24], s = this.x64Multiply(s, u), s = this.x64Rotl(s, 31), s = this.x64Multiply(s, h), i = this.x64Xor(i, s), i = this.x64Rotl(i, 27), i = this.x64Add(i, o), i = this.x64Add(this.x64Multiply(i, [0, 5]), [0, 1390208809]), a = this.x64Multiply(a, h), a = this.x64Rotl(a, 33), a = this.x64Multiply(a, u), o = this.x64Xor(o, a), o = this.x64Rotl(o, 31), o = this.x64Add(o, i), o = this.x64Add(this.x64Multiply(o, [0, 5]), [0, 944331445]);
                }

                switch (s = [0, 0], a = [0, 0], r) {
                  case 15:
                    a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(l + 14)], 48));

                  case 14:
                    a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(l + 13)], 40));

                  case 13:
                    a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(l + 12)], 32));

                  case 12:
                    a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(l + 11)], 24));

                  case 11:
                    a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(l + 10)], 16));

                  case 10:
                    a = this.x64Xor(a, this.x64LeftShift([0, t.charCodeAt(l + 9)], 8));

                  case 9:
                    a = this.x64Xor(a, [0, t.charCodeAt(l + 8)]), a = this.x64Multiply(a, h), a = this.x64Rotl(a, 33), a = this.x64Multiply(a, u), o = this.x64Xor(o, a);

                  case 8:
                    s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(l + 7)], 56));

                  case 7:
                    s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(l + 6)], 48));

                  case 6:
                    s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(l + 5)], 40));

                  case 5:
                    s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(l + 4)], 32));

                  case 4:
                    s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(l + 3)], 24));

                  case 3:
                    s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(l + 2)], 16));

                  case 2:
                    s = this.x64Xor(s, this.x64LeftShift([0, t.charCodeAt(l + 1)], 8));

                  case 1:
                    s = this.x64Xor(s, [0, t.charCodeAt(l)]), s = this.x64Multiply(s, u), s = this.x64Rotl(s, 31), s = this.x64Multiply(s, h), i = this.x64Xor(i, s);
                }

                return i = this.x64Xor(i, [0, t.length]), o = this.x64Xor(o, [0, t.length]), i = this.x64Add(i, o), o = this.x64Add(o, i), i = this.x64Fmix(i), o = this.x64Fmix(o), i = this.x64Add(i, o), o = this.x64Add(o, i), ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8);
              },
              random32Str: function random32Str() {
                var t,
                    e = Date.now().toString(32).toUpperCase();
                return t = Date.now(), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", (e || "") + "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                  var r;
                  return r = (t + 16 * Math.random()) % 16 | 0, t = Math.floor(t / 16), "x" === e ? r.toString(16) : (7 & r | 8).toString(16);
                }).replace(/-/g, "").toUpperCase();
              }
            };
            t.exports = o;
          }).call(this, r(6).Buffer);
        }, function (t, e, r) {
          "use strict";

          (function (t) {
            var n = r(7),
                i = r(8),
                o = r(9);

            function s() {
              return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
            }

            function a(t, e) {
              if (s() < e) throw new RangeError("Invalid typed array length");
              return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = u.prototype : (null === t && (t = new u(e)), t.length = e), t;
            }

            function u(t, e, r) {
              if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(t, e, r);

              if ("number" == typeof t) {
                if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                return c(this, t);
              }

              return h(this, t, e, r);
            }

            function h(t, e, r, n) {
              if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
              return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, r, n) {
                if (e.byteLength, r < 0 || e.byteLength < r) throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
                e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n);
                u.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = u.prototype : t = f(t, e);
                return t;
              }(t, e, r, n) : "string" == typeof e ? function (t, e, r) {
                "string" == typeof r && "" !== r || (r = "utf8");
                if (!u.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                var n = 0 | d(e, r),
                    i = (t = a(t, n)).write(e, r);
                i !== n && (t = t.slice(0, i));
                return t;
              }(t, e, r) : function (t, e) {
                if (u.isBuffer(e)) {
                  var r = 0 | p(e.length);
                  return 0 === (t = a(t, r)).length || e.copy(t, 0, 0, r), t;
                }

                if (e) {
                  if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (n = e.length) != n ? a(t, 0) : f(t, e);
                  if ("Buffer" === e.type && o(e.data)) return f(t, e.data);
                }

                var n;
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
              }(t, e);
            }

            function l(t) {
              if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
              if (t < 0) throw new RangeError('"size" argument must not be negative');
            }

            function c(t, e) {
              if (l(e), t = a(t, e < 0 ? 0 : 0 | p(e)), !u.TYPED_ARRAY_SUPPORT) for (var r = 0; r < e; ++r) {
                t[r] = 0;
              }
              return t;
            }

            function f(t, e) {
              var r = e.length < 0 ? 0 : 0 | p(e.length);
              t = a(t, r);

              for (var n = 0; n < r; n += 1) {
                t[n] = 255 & e[n];
              }

              return t;
            }

            function p(t) {
              if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
              return 0 | t;
            }

            function d(t, e) {
              if (u.isBuffer(t)) return t.length;
              if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
              "string" != typeof t && (t = "" + t);
              var r = t.length;
              if (0 === r) return 0;

              for (var n = !1;;) {
                switch (e) {
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return r;

                  case "utf8":
                  case "utf-8":
                  case void 0:
                    return F(t).length;

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return 2 * r;

                  case "hex":
                    return r >>> 1;

                  case "base64":
                    return j(t).length;

                  default:
                    if (n) return F(t).length;
                    e = ("" + e).toLowerCase(), n = !0;
                }
              }
            }

            function g(t, e, r) {
              var n = !1;
              if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
              if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
              if ((r >>>= 0) <= (e >>>= 0)) return "";

              for (t || (t = "utf8");;) {
                switch (t) {
                  case "hex":
                    return P(this, e, r);

                  case "utf8":
                  case "utf-8":
                    return T(this, e, r);

                  case "ascii":
                    return A(this, e, r);

                  case "latin1":
                  case "binary":
                    return E(this, e, r);

                  case "base64":
                    return I(this, e, r);

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return B(this, e, r);

                  default:
                    if (n) throw new TypeError("Unknown encoding: " + t);
                    t = (t + "").toLowerCase(), n = !0;
                }
              }
            }

            function v(t, e, r) {
              var n = t[e];
              t[e] = t[r], t[r] = n;
            }

            function y(t, e, r, n, i) {
              if (0 === t.length) return -1;

              if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                if (i) return -1;
                r = t.length - 1;
              } else if (r < 0) {
                if (!i) return -1;
                r = 0;
              }

              if ("string" == typeof e && (e = u.from(e, n)), u.isBuffer(e)) return 0 === e.length ? -1 : m(t, e, r, n, i);
              if ("number" == typeof e) return e &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : m(t, [e], r, n, i);
              throw new TypeError("val must be string, number or Buffer");
            }

            function m(t, e, r, n, i) {
              var o,
                  s = 1,
                  a = t.length,
                  u = e.length;

              if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                if (t.length < 2 || e.length < 2) return -1;
                s = 2, a /= 2, u /= 2, r /= 2;
              }

              function h(t, e) {
                return 1 === s ? t[e] : t.readUInt16BE(e * s);
              }

              if (i) {
                var l = -1;

                for (o = r; o < a; o++) {
                  if (h(t, o) === h(e, -1 === l ? 0 : o - l)) {
                    if (-1 === l && (l = o), o - l + 1 === u) return l * s;
                  } else -1 !== l && (o -= o - l), l = -1;
                }
              } else for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
                for (var c = !0, f = 0; f < u; f++) {
                  if (h(t, o + f) !== h(e, f)) {
                    c = !1;
                    break;
                  }
                }

                if (c) return o;
              }

              return -1;
            }

            function b(t, e, r, n) {
              r = Number(r) || 0;
              var i = t.length - r;
              n ? (n = Number(n)) > i && (n = i) : n = i;
              var o = e.length;
              if (o % 2 != 0) throw new TypeError("Invalid hex string");
              n > o / 2 && (n = o / 2);

              for (var s = 0; s < n; ++s) {
                var a = parseInt(e.substr(2 * s, 2), 16);
                if (isNaN(a)) return s;
                t[r + s] = a;
              }

              return s;
            }

            function w(t, e, r, n) {
              return X(F(e, t.length - r), t, r, n);
            }

            function x(t, e, r, n) {
              return X(function (t) {
                for (var e = [], r = 0; r < t.length; ++r) {
                  e.push(255 & t.charCodeAt(r));
                }

                return e;
              }(e), t, r, n);
            }

            function S(t, e, r, n) {
              return x(t, e, r, n);
            }

            function _(t, e, r, n) {
              return X(j(e), t, r, n);
            }

            function D(t, e, r, n) {
              return X(function (t, e) {
                for (var r, n, i, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) {
                  r = t.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
                }

                return o;
              }(e, t.length - r), t, r, n);
            }

            function I(t, e, r) {
              return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r));
            }

            function T(t, e, r) {
              r = Math.min(t.length, r);

              for (var n = [], i = e; i < r;) {
                var o,
                    s,
                    a,
                    u,
                    h = t[i],
                    l = null,
                    c = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
                if (i + c <= r) switch (c) {
                  case 1:
                    h < 128 && (l = h);
                    break;

                  case 2:
                    128 == (192 & (o = t[i + 1])) && (u = (31 & h) << 6 | 63 & o) > 127 && (l = u);
                    break;

                  case 3:
                    o = t[i + 1], s = t[i + 2], 128 == (192 & o) && 128 == (192 & s) && (u = (15 & h) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (l = u);
                    break;

                  case 4:
                    o = t[i + 1], s = t[i + 2], a = t[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & h) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (l = u);
                }
                null === l ? (l = 65533, c = 1) : l > 65535 && (l -= 65536, n.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), n.push(l), i += c;
              }

              return function (t) {
                var e = t.length;
                if (e <= 4096) return String.fromCharCode.apply(String, t);
                var r = "",
                    n = 0;

                for (; n < e;) {
                  r += String.fromCharCode.apply(String, t.slice(n, n += 4096));
                }

                return r;
              }(n);
            }

            e.Buffer = u, e.SlowBuffer = function (t) {
              +t != t && (t = 0);
              return u.alloc(+t);
            }, e.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
              try {
                var t = new Uint8Array(1);
                return t.__proto__ = {
                  __proto__: Uint8Array.prototype,
                  foo: function foo() {
                    return 42;
                  }
                }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
              } catch (t) {
                return !1;
              }
            }(), e.kMaxLength = s(), u.poolSize = 8192, u._augment = function (t) {
              return t.__proto__ = u.prototype, t;
            }, u.from = function (t, e, r) {
              return h(null, t, e, r);
            }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
              value: null,
              configurable: !0
            })), u.alloc = function (t, e, r) {
              return function (t, e, r, n) {
                return l(e), e <= 0 ? a(t, e) : void 0 !== r ? "string" == typeof n ? a(t, e).fill(r, n) : a(t, e).fill(r) : a(t, e);
              }(null, t, e, r);
            }, u.allocUnsafe = function (t) {
              return c(null, t);
            }, u.allocUnsafeSlow = function (t) {
              return c(null, t);
            }, u.isBuffer = function (t) {
              return !(null == t || !t._isBuffer);
            }, u.compare = function (t, e) {
              if (!u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
              if (t === e) return 0;

              for (var r = t.length, n = e.length, i = 0, o = Math.min(r, n); i < o; ++i) {
                if (t[i] !== e[i]) {
                  r = t[i], n = e[i];
                  break;
                }
              }

              return r < n ? -1 : n < r ? 1 : 0;
            }, u.isEncoding = function (t) {
              switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return !0;

                default:
                  return !1;
              }
            }, u.concat = function (t, e) {
              if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
              if (0 === t.length) return u.alloc(0);
              var r;
              if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) {
                e += t[r].length;
              }
              var n = u.allocUnsafe(e),
                  i = 0;

              for (r = 0; r < t.length; ++r) {
                var s = t[r];
                if (!u.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                s.copy(n, i), i += s.length;
              }

              return n;
            }, u.byteLength = d, u.prototype._isBuffer = !0, u.prototype.swap16 = function () {
              var t = this.length;
              if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");

              for (var e = 0; e < t; e += 2) {
                v(this, e, e + 1);
              }

              return this;
            }, u.prototype.swap32 = function () {
              var t = this.length;
              if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");

              for (var e = 0; e < t; e += 4) {
                v(this, e, e + 3), v(this, e + 1, e + 2);
              }

              return this;
            }, u.prototype.swap64 = function () {
              var t = this.length;
              if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");

              for (var e = 0; e < t; e += 8) {
                v(this, e, e + 7), v(this, e + 1, e + 6), v(this, e + 2, e + 5), v(this, e + 3, e + 4);
              }

              return this;
            }, u.prototype.toString = function () {
              var t = 0 | this.length;
              return 0 === t ? "" : 0 === arguments.length ? T(this, 0, t) : g.apply(this, arguments);
            }, u.prototype.equals = function (t) {
              if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
              return this === t || 0 === u.compare(this, t);
            }, u.prototype.inspect = function () {
              var t = "",
                  r = e.INSPECT_MAX_BYTES;
              return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">";
            }, u.prototype.compare = function (t, e, r, n, i) {
              if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
              if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
              if (n >= i && e >= r) return 0;
              if (n >= i) return -1;
              if (e >= r) return 1;
              if (this === t) return 0;

              for (var o = (i >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (e >>>= 0), a = Math.min(o, s), h = this.slice(n, i), l = t.slice(e, r), c = 0; c < a; ++c) {
                if (h[c] !== l[c]) {
                  o = h[c], s = l[c];
                  break;
                }
              }

              return o < s ? -1 : s < o ? 1 : 0;
            }, u.prototype.includes = function (t, e, r) {
              return -1 !== this.indexOf(t, e, r);
            }, u.prototype.indexOf = function (t, e, r) {
              return y(this, t, e, r, !0);
            }, u.prototype.lastIndexOf = function (t, e, r) {
              return y(this, t, e, r, !1);
            }, u.prototype.write = function (t, e, r, n) {
              if (void 0 === e) n = "utf8", r = this.length, e = 0;else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;else {
                if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                e |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
              }
              var i = this.length - e;
              if ((void 0 === r || r > i) && (r = i), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
              n || (n = "utf8");

              for (var o = !1;;) {
                switch (n) {
                  case "hex":
                    return b(this, t, e, r);

                  case "utf8":
                  case "utf-8":
                    return w(this, t, e, r);

                  case "ascii":
                    return x(this, t, e, r);

                  case "latin1":
                  case "binary":
                    return S(this, t, e, r);

                  case "base64":
                    return _(this, t, e, r);

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return D(this, t, e, r);

                  default:
                    if (o) throw new TypeError("Unknown encoding: " + n);
                    n = ("" + n).toLowerCase(), o = !0;
                }
              }
            }, u.prototype.toJSON = function () {
              return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
              };
            };

            function A(t, e, r) {
              var n = "";
              r = Math.min(t.length, r);

              for (var i = e; i < r; ++i) {
                n += String.fromCharCode(127 & t[i]);
              }

              return n;
            }

            function E(t, e, r) {
              var n = "";
              r = Math.min(t.length, r);

              for (var i = e; i < r; ++i) {
                n += String.fromCharCode(t[i]);
              }

              return n;
            }

            function P(t, e, r) {
              var n = t.length;
              (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);

              for (var i = "", o = e; o < r; ++o) {
                i += V(t[o]);
              }

              return i;
            }

            function B(t, e, r) {
              for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2) {
                i += String.fromCharCode(n[o] + 256 * n[o + 1]);
              }

              return i;
            }

            function C(t, e, r) {
              if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
              if (t + e > r) throw new RangeError("Trying to access beyond buffer length");
            }

            function R(t, e, r, n, i, o) {
              if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
              if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
              if (r + n > t.length) throw new RangeError("Index out of range");
            }

            function M(t, e, r, n) {
              e < 0 && (e = 65535 + e + 1);

              for (var i = 0, o = Math.min(t.length - r, 2); i < o; ++i) {
                t[r + i] = (e & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i);
              }
            }

            function O(t, e, r, n) {
              e < 0 && (e = 4294967295 + e + 1);

              for (var i = 0, o = Math.min(t.length - r, 4); i < o; ++i) {
                t[r + i] = e >>> 8 * (n ? i : 3 - i) & 255;
              }
            }

            function L(t, e, r, n, i, o) {
              if (r + n > t.length) throw new RangeError("Index out of range");
              if (r < 0) throw new RangeError("Index out of range");
            }

            function k(t, e, r, n, o) {
              return o || L(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4;
            }

            function N(t, e, r, n, o) {
              return o || L(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8;
            }

            u.prototype.slice = function (t, e) {
              var r,
                  n = this.length;
              if ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t), u.TYPED_ARRAY_SUPPORT) (r = this.subarray(t, e)).__proto__ = u.prototype;else {
                var i = e - t;
                r = new u(i, void 0);

                for (var o = 0; o < i; ++o) {
                  r[o] = this[o + t];
                }
              }
              return r;
            }, u.prototype.readUIntLE = function (t, e, r) {
              t |= 0, e |= 0, r || C(t, e, this.length);

              for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) {
                n += this[t + o] * i;
              }

              return n;
            }, u.prototype.readUIntBE = function (t, e, r) {
              t |= 0, e |= 0, r || C(t, e, this.length);

              for (var n = this[t + --e], i = 1; e > 0 && (i *= 256);) {
                n += this[t + --e] * i;
              }

              return n;
            }, u.prototype.readUInt8 = function (t, e) {
              return e || C(t, 1, this.length), this[t];
            }, u.prototype.readUInt16LE = function (t, e) {
              return e || C(t, 2, this.length), this[t] | this[t + 1] << 8;
            }, u.prototype.readUInt16BE = function (t, e) {
              return e || C(t, 2, this.length), this[t] << 8 | this[t + 1];
            }, u.prototype.readUInt32LE = function (t, e) {
              return e || C(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
            }, u.prototype.readUInt32BE = function (t, e) {
              return e || C(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
            }, u.prototype.readIntLE = function (t, e, r) {
              t |= 0, e |= 0, r || C(t, e, this.length);

              for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) {
                n += this[t + o] * i;
              }

              return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
            }, u.prototype.readIntBE = function (t, e, r) {
              t |= 0, e |= 0, r || C(t, e, this.length);

              for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256);) {
                o += this[t + --n] * i;
              }

              return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
            }, u.prototype.readInt8 = function (t, e) {
              return e || C(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
            }, u.prototype.readInt16LE = function (t, e) {
              e || C(t, 2, this.length);
              var r = this[t] | this[t + 1] << 8;
              return 32768 & r ? 4294901760 | r : r;
            }, u.prototype.readInt16BE = function (t, e) {
              e || C(t, 2, this.length);
              var r = this[t + 1] | this[t] << 8;
              return 32768 & r ? 4294901760 | r : r;
            }, u.prototype.readInt32LE = function (t, e) {
              return e || C(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
            }, u.prototype.readInt32BE = function (t, e) {
              return e || C(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
            }, u.prototype.readFloatLE = function (t, e) {
              return e || C(t, 4, this.length), i.read(this, t, !0, 23, 4);
            }, u.prototype.readFloatBE = function (t, e) {
              return e || C(t, 4, this.length), i.read(this, t, !1, 23, 4);
            }, u.prototype.readDoubleLE = function (t, e) {
              return e || C(t, 8, this.length), i.read(this, t, !0, 52, 8);
            }, u.prototype.readDoubleBE = function (t, e) {
              return e || C(t, 8, this.length), i.read(this, t, !1, 52, 8);
            }, u.prototype.writeUIntLE = function (t, e, r, n) {
              (t = +t, e |= 0, r |= 0, n) || R(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
              var i = 1,
                  o = 0;

              for (this[e] = 255 & t; ++o < r && (i *= 256);) {
                this[e + o] = t / i & 255;
              }

              return e + r;
            }, u.prototype.writeUIntBE = function (t, e, r, n) {
              (t = +t, e |= 0, r |= 0, n) || R(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
              var i = r - 1,
                  o = 1;

              for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) {
                this[e + i] = t / o & 255;
              }

              return e + r;
            }, u.prototype.writeUInt8 = function (t, e, r) {
              return t = +t, e |= 0, r || R(this, t, e, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1;
            }, u.prototype.writeUInt16LE = function (t, e, r) {
              return t = +t, e |= 0, r || R(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : M(this, t, e, !0), e + 2;
            }, u.prototype.writeUInt16BE = function (t, e, r) {
              return t = +t, e |= 0, r || R(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : M(this, t, e, !1), e + 2;
            }, u.prototype.writeUInt32LE = function (t, e, r) {
              return t = +t, e |= 0, r || R(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : O(this, t, e, !0), e + 4;
            }, u.prototype.writeUInt32BE = function (t, e, r) {
              return t = +t, e |= 0, r || R(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : O(this, t, e, !1), e + 4;
            }, u.prototype.writeIntLE = function (t, e, r, n) {
              if (t = +t, e |= 0, !n) {
                var i = Math.pow(2, 8 * r - 1);
                R(this, t, e, r, i - 1, -i);
              }

              var o = 0,
                  s = 1,
                  a = 0;

              for (this[e] = 255 & t; ++o < r && (s *= 256);) {
                t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
              }

              return e + r;
            }, u.prototype.writeIntBE = function (t, e, r, n) {
              if (t = +t, e |= 0, !n) {
                var i = Math.pow(2, 8 * r - 1);
                R(this, t, e, r, i - 1, -i);
              }

              var o = r - 1,
                  s = 1,
                  a = 0;

              for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) {
                t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
              }

              return e + r;
            }, u.prototype.writeInt8 = function (t, e, r) {
              return t = +t, e |= 0, r || R(this, t, e, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
            }, u.prototype.writeInt16LE = function (t, e, r) {
              return t = +t, e |= 0, r || R(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : M(this, t, e, !0), e + 2;
            }, u.prototype.writeInt16BE = function (t, e, r) {
              return t = +t, e |= 0, r || R(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : M(this, t, e, !1), e + 2;
            }, u.prototype.writeInt32LE = function (t, e, r) {
              return t = +t, e |= 0, r || R(this, t, e, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : O(this, t, e, !0), e + 4;
            }, u.prototype.writeInt32BE = function (t, e, r) {
              return t = +t, e |= 0, r || R(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : O(this, t, e, !1), e + 4;
            }, u.prototype.writeFloatLE = function (t, e, r) {
              return k(this, t, e, !0, r);
            }, u.prototype.writeFloatBE = function (t, e, r) {
              return k(this, t, e, !1, r);
            }, u.prototype.writeDoubleLE = function (t, e, r) {
              return N(this, t, e, !0, r);
            }, u.prototype.writeDoubleBE = function (t, e, r) {
              return N(this, t, e, !1, r);
            }, u.prototype.copy = function (t, e, r, n) {
              if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
              if (0 === t.length || 0 === this.length) return 0;
              if (e < 0) throw new RangeError("targetStart out of bounds");
              if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
              if (n < 0) throw new RangeError("sourceEnd out of bounds");
              n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
              var i,
                  o = n - r;
              if (this === t && r < e && e < n) for (i = o - 1; i >= 0; --i) {
                t[i + e] = this[i + r];
              } else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) {
                t[i + e] = this[i + r];
              } else Uint8Array.prototype.set.call(t, this.subarray(r, r + o), e);
              return o;
            }, u.prototype.fill = function (t, e, r, n) {
              if ("string" == typeof t) {
                if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === t.length) {
                  var i = t.charCodeAt(0);
                  i < 256 && (t = i);
                }

                if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                if ("string" == typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
              } else "number" == typeof t && (t &= 255);

              if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
              if (r <= e) return this;
              var o;
              if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t) for (o = e; o < r; ++o) {
                this[o] = t;
              } else {
                var s = u.isBuffer(t) ? t : F(new u(t, n).toString()),
                    a = s.length;

                for (o = 0; o < r - e; ++o) {
                  this[o + e] = s[o % a];
                }
              }
              return this;
            };
            var U = /[^+\/0-9A-Za-z-_]/g;

            function V(t) {
              return t < 16 ? "0" + t.toString(16) : t.toString(16);
            }

            function F(t, e) {
              var r;
              e = e || 1 / 0;

              for (var n = t.length, i = null, o = [], s = 0; s < n; ++s) {
                if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
                  if (!i) {
                    if (r > 56319) {
                      (e -= 3) > -1 && o.push(239, 191, 189);
                      continue;
                    }

                    if (s + 1 === n) {
                      (e -= 3) > -1 && o.push(239, 191, 189);
                      continue;
                    }

                    i = r;
                    continue;
                  }

                  if (r < 56320) {
                    (e -= 3) > -1 && o.push(239, 191, 189), i = r;
                    continue;
                  }

                  r = 65536 + (i - 55296 << 10 | r - 56320);
                } else i && (e -= 3) > -1 && o.push(239, 191, 189);

                if (i = null, r < 128) {
                  if ((e -= 1) < 0) break;
                  o.push(r);
                } else if (r < 2048) {
                  if ((e -= 2) < 0) break;
                  o.push(r >> 6 | 192, 63 & r | 128);
                } else if (r < 65536) {
                  if ((e -= 3) < 0) break;
                  o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
                } else {
                  if (!(r < 1114112)) throw new Error("Invalid code point");
                  if ((e -= 4) < 0) break;
                  o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
                }
              }

              return o;
            }

            function j(t) {
              return n.toByteArray(function (t) {
                if ((t = function (t) {
                  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
                }(t).replace(U, "")).length < 2) return "";

                for (; t.length % 4 != 0;) {
                  t += "=";
                }

                return t;
              }(t));
            }

            function X(t, e, r, n) {
              for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) {
                e[i + r] = t[i];
              }

              return i;
            }
          }).call(this, r(0));
        }, function (t, e, r) {
          "use strict";

          e.byteLength = function (t) {
            var e = h(t),
                r = e[0],
                n = e[1];
            return 3 * (r + n) / 4 - n;
          }, e.toByteArray = function (t) {
            var e,
                r,
                n = h(t),
                s = n[0],
                a = n[1],
                u = new o(function (t, e, r) {
              return 3 * (e + r) / 4 - r;
            }(0, s, a)),
                l = 0,
                c = a > 0 ? s - 4 : s;

            for (r = 0; r < c; r += 4) {
              e = i[t.charCodeAt(r)] << 18 | i[t.charCodeAt(r + 1)] << 12 | i[t.charCodeAt(r + 2)] << 6 | i[t.charCodeAt(r + 3)], u[l++] = e >> 16 & 255, u[l++] = e >> 8 & 255, u[l++] = 255 & e;
            }

            2 === a && (e = i[t.charCodeAt(r)] << 2 | i[t.charCodeAt(r + 1)] >> 4, u[l++] = 255 & e);
            1 === a && (e = i[t.charCodeAt(r)] << 10 | i[t.charCodeAt(r + 1)] << 4 | i[t.charCodeAt(r + 2)] >> 2, u[l++] = e >> 8 & 255, u[l++] = 255 & e);
            return u;
          }, e.fromByteArray = function (t) {
            for (var e, r = t.length, i = r % 3, o = [], s = 0, a = r - i; s < a; s += 16383) {
              o.push(l(t, s, s + 16383 > a ? a : s + 16383));
            }

            1 === i ? (e = t[r - 1], o.push(n[e >> 2] + n[e << 4 & 63] + "==")) : 2 === i && (e = (t[r - 2] << 8) + t[r - 1], o.push(n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "="));
            return o.join("");
          };

          for (var n = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a) {
            n[a] = s[a], i[s.charCodeAt(a)] = a;
          }

          function h(t) {
            var e = t.length;
            if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var r = t.indexOf("=");
            return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4];
          }

          function l(t, e, r) {
            for (var i, o, s = [], a = e; a < r; a += 3) {
              i = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
            }

            return s.join("");
          }

          i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63;
        }, function (t, e) {
          e.read = function (t, e, r, n, i) {
            var o,
                s,
                a = 8 * i - n - 1,
                u = (1 << a) - 1,
                h = u >> 1,
                l = -7,
                c = r ? i - 1 : 0,
                f = r ? -1 : 1,
                p = t[e + c];

            for (c += f, o = p & (1 << -l) - 1, p >>= -l, l += a; l > 0; o = 256 * o + t[e + c], c += f, l -= 8) {
              ;
            }

            for (s = o & (1 << -l) - 1, o >>= -l, l += n; l > 0; s = 256 * s + t[e + c], c += f, l -= 8) {
              ;
            }

            if (0 === o) o = 1 - h;else {
              if (o === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
              s += Math.pow(2, n), o -= h;
            }
            return (p ? -1 : 1) * s * Math.pow(2, o - n);
          }, e.write = function (t, e, r, n, i, o) {
            var s,
                a,
                u,
                h = 8 * o - i - 1,
                l = (1 << h) - 1,
                c = l >> 1,
                f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                p = n ? 0 : o - 1,
                d = n ? 1 : -1,
                g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;

            for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = l) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e += s + c >= 1 ? f / u : f * Math.pow(2, 1 - c)) * u >= 2 && (s++, u /= 2), s + c >= l ? (a = 0, s = l) : s + c >= 1 ? (a = (e * u - 1) * Math.pow(2, i), s += c) : (a = e * Math.pow(2, c - 1) * Math.pow(2, i), s = 0)); i >= 8; t[r + p] = 255 & a, p += d, a /= 256, i -= 8) {
              ;
            }

            for (s = s << i | a, h += i; h > 0; t[r + p] = 255 & s, p += d, s /= 256, h -= 8) {
              ;
            }

            t[r + p - d] |= 128 * g;
          };
        }, function (t, e) {
          var r = {}.toString;

          t.exports = Array.isArray || function (t) {
            return "[object Array]" == r.call(t);
          };
        }, function (t, e, r) {
          !function (t) {
            "use strict";

            function e(t) {
              return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t);
            }

            function r(t, e) {
              return t & e;
            }

            function n(t, e) {
              return t | e;
            }

            function i(t, e) {
              return t ^ e;
            }

            function o(t, e) {
              return t & ~e;
            }

            function s(t) {
              if (0 == t) return -1;
              var e = 0;
              return 0 == (65535 & t) && (t >>= 16, e += 16), 0 == (255 & t) && (t >>= 8, e += 8), 0 == (15 & t) && (t >>= 4, e += 4), 0 == (3 & t) && (t >>= 2, e += 2), 0 == (1 & t) && ++e, e;
            }

            function a(t) {
              for (var e = 0; 0 != t;) {
                t &= t - 1, ++e;
              }

              return e;
            }

            var u,
                h,
                _l = function l(t, e) {
              return (_l = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (t, e) {
                t.__proto__ = e;
              } || function (t, e) {
                for (var r in e) {
                  e.hasOwnProperty(r) && (t[r] = e[r]);
                }
              })(t, e);
            },
                c = {
              decode: function decode(t) {
                var e;

                if (void 0 === u) {
                  for (u = Object.create(null), e = 0; e < 64; ++e) {
                    u["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)] = e;
                  }

                  for (e = 0; e < "= \f\n\r\t \u2028\u2029".length; ++e) {
                    u["= \f\n\r\t \u2028\u2029".charAt(e)] = -1;
                  }
                }

                var r = [],
                    n = 0,
                    i = 0;

                for (e = 0; e < t.length; ++e) {
                  var o = t.charAt(e);
                  if ("=" == o) break;

                  if (-1 != (o = u[o])) {
                    if (void 0 === o) throw new Error("Illegal character at offset " + e);
                    n |= o, ++i >= 4 ? (r[r.length] = n >> 16, r[r.length] = n >> 8 & 255, r[r.length] = 255 & n, n = 0, i = 0) : n <<= 6;
                  }
                }

                switch (i) {
                  case 1:
                    throw new Error("Base64 encoding incomplete: at least 2 bits missing");

                  case 2:
                    r[r.length] = n >> 10;
                    break;

                  case 3:
                    r[r.length] = n >> 16, r[r.length] = n >> 8 & 255;
                }

                return r;
              },
              re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
              unarmor: function unarmor(t) {
                var e = c.re.exec(t);
                if (e) if (e[1]) t = e[1];else {
                  if (!e[2]) throw new Error("RegExp out of sync");
                  t = e[2];
                }
                return c.decode(t);
              }
            },
                f = function () {
              function t(e, r) {
                this.hexDigits = "0123456789ABCDEF", e instanceof t ? (this.enc = e.enc, this.pos = e.pos) : (this.enc = e, this.pos = r);
              }

              return t.prototype.get = function (t) {
                if (void 0 === t && (t = this.pos++), t >= this.enc.length) throw new Error("Requesting byte offset " + t + " on a stream of length " + this.enc.length);
                return "string" == typeof this.enc ? this.enc.charCodeAt(t) : this.enc[t];
              }, t.prototype.hexByte = function (t) {
                return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t);
              }, t.prototype.hexDump = function (t, e, r) {
                for (var n = "", i = t; i < e; ++i) {
                  if (n += this.hexByte(this.get(i)), !0 !== r) switch (15 & i) {
                    case 7:
                      n += "  ";
                      break;

                    case 15:
                      n += "\n";
                      break;

                    default:
                      n += " ";
                  }
                }

                return n;
              }, t;
            }(),
                p = function () {
              function t(t, e, r, n, i) {
                if (!(n instanceof d)) throw new Error("Invalid tag value.");
                this.stream = t, this.header = e, this.length = r, this.tag = n, this.sub = i;
              }

              return t.prototype.toString = function () {
                return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]";
              }, t.prototype.posStart = function () {
                return this.stream.pos;
              }, t.prototype.posContent = function () {
                return this.stream.pos + this.header;
              }, t.prototype.posEnd = function () {
                return this.stream.pos + this.header + Math.abs(this.length);
              }, t.prototype.toHexString = function () {
                return this.stream.hexDump(this.posStart(), this.posEnd(), !0);
              }, t.decodeLength = function (t) {
                var e = t.get(),
                    r = 127 & e;
                if (r == e) return r;
                if (r > 6) throw new Error("Length over 48 bits not supported at position " + (t.pos - 1));
                if (0 === r) return null;
                e = 0;

                for (var n = 0; n < r; ++n) {
                  e = 256 * e + t.get();
                }

                return e;
              }, t.prototype.getHexStringValue = function () {
                var t = this.toHexString(),
                    e = 2 * this.header,
                    r = 2 * this.length;
                return t.substr(e, r);
              }, t.decode = function (e) {
                var r;
                r = e instanceof f ? e : new f(e, 0);

                var n = new f(r),
                    i = new d(r),
                    o = t.decodeLength(r),
                    s = r.pos,
                    a = s - n.pos,
                    u = null,
                    h = function h() {
                  var e = [];

                  if (null !== o) {
                    for (var n = s + o; r.pos < n;) {
                      e[e.length] = t.decode(r);
                    }

                    if (r.pos != n) throw new Error("Content size is not correct for container starting at offset " + s);
                  } else try {
                    for (;;) {
                      var i = t.decode(r);
                      if (i.tag.isEOC()) break;
                      e[e.length] = i;
                    }

                    o = s - r.pos;
                  } catch (t) {
                    throw new Error("Exception while decoding undefined length content: " + t);
                  }

                  return e;
                };

                if (i.tagConstructed) u = h();else if (i.isUniversal() && (3 == i.tagNumber || 4 == i.tagNumber)) try {
                  if (3 == i.tagNumber && 0 != r.get()) throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                  u = h();

                  for (var l = 0; l < u.length; ++l) {
                    if (u[l].tag.isEOC()) throw new Error("EOC is not supposed to be actual content.");
                  }
                } catch (t) {
                  u = null;
                }

                if (null === u) {
                  if (null === o) throw new Error("We can't skip over an invalid tag with undefined length at offset " + s);
                  r.pos = s + Math.abs(o);
                }

                return new t(n, a, o, i, u);
              }, t;
            }(),
                d = function () {
              function t(t) {
                var e = t.get();
                this.tagClass = e >> 6, this.tagConstructed = 0 != (32 & e), this.tagNumber = 31 & e, 31 == this.tagNumber && null.error(0);
              }

              return t.prototype.isUniversal = function () {
                return 0 === this.tagClass;
              }, t.prototype.isEOC = function () {
                return 0 === this.tagClass && 0 === this.tagNumber;
              }, t;
            }(),
                g = function () {
              function t(t, e, r) {
                null != t && ("number" == typeof t ? this.fromNumber(t, e, r) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e));
              }

              return t.prototype.toString = function (t) {
                if (this.s < 0) return "-" + this.negate().toString(t);
                var r;
                if (16 == t) r = 4;else if (8 == t) r = 3;else if (2 == t) r = 1;else if (32 == t) r = 5;else {
                  if (4 != t) return this.toRadix(t);
                  r = 2;
                }
                var n,
                    i = (1 << r) - 1,
                    o = !1,
                    s = "",
                    a = this.t,
                    u = this.DB - a * this.DB % r;
                if (a-- > 0) for (u < this.DB && (n = this[a] >> u) > 0 && (o = !0, s = e(n)); a >= 0;) {
                  u < r ? (n = (this[a] & (1 << u) - 1) << r - u, n |= this[--a] >> (u += this.DB - r)) : (n = this[a] >> (u -= r) & i, u <= 0 && (u += this.DB, --a)), n > 0 && (o = !0), o && (s += e(n));
                }
                return o ? s : "0";
              }, t.prototype.negate = function () {
                var e = b();
                return t.ZERO.subTo(this, e), e;
              }, t.prototype.abs = function () {
                return this.s < 0 ? this.negate() : this;
              }, t.prototype.compareTo = function (t) {
                var e = this.s - t.s;
                if (0 != e) return e;
                var r = this.t;
                if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;

                for (; --r >= 0;) {
                  if (0 != (e = this[r] - t[r])) return e;
                }

                return 0;
              }, t.prototype.bitLength = function () {
                return this.t <= 0 ? 0 : this.DB * (this.t - 1) + T(this[this.t - 1] ^ this.s & this.DM);
              }, t.prototype.mod = function (e) {
                var r = b();
                return this.abs().divRemTo(e, null, r), this.s < 0 && r.compareTo(t.ZERO) > 0 && e.subTo(r, r), r;
              }, t.prototype.modPowInt = function (t, e) {
                var r;
                return r = t < 256 || e.isEven() ? new y(e) : new m(e), this.exp(t, r);
              }, t.prototype.clone = function () {
                var t = b();
                return this.copyTo(t), t;
              }, t.prototype.intValue = function () {
                if (this.s < 0) {
                  if (1 == this.t) return this[0] - this.DV;
                  if (0 == this.t) return -1;
                } else {
                  if (1 == this.t) return this[0];
                  if (0 == this.t) return 0;
                }

                return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
              }, t.prototype.byteValue = function () {
                return 0 == this.t ? this.s : this[0] << 24 >> 24;
              }, t.prototype.shortValue = function () {
                return 0 == this.t ? this.s : this[0] << 16 >> 16;
              }, t.prototype.signum = function () {
                return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1;
              }, t.prototype.equals = function (t) {
                return 0 == this.compareTo(t);
              }, t.prototype.min = function (t) {
                return this.compareTo(t) < 0 ? this : t;
              }, t.prototype.max = function (t) {
                return this.compareTo(t) > 0 ? this : t;
              }, t.prototype.and = function (t) {
                var e = b();
                return this.bitwiseTo(t, r, e), e;
              }, t.prototype.or = function (t) {
                var e = b();
                return this.bitwiseTo(t, n, e), e;
              }, t.prototype.xor = function (t) {
                var e = b();
                return this.bitwiseTo(t, i, e), e;
              }, t.prototype.andNot = function (t) {
                var e = b();
                return this.bitwiseTo(t, o, e), e;
              }, t.prototype.not = function () {
                for (var t = b(), e = 0; e < this.t; ++e) {
                  t[e] = this.DM & ~this[e];
                }

                return t.t = this.t, t.s = ~this.s, t;
              }, t.prototype.shiftLeft = function (t) {
                var e = b();
                return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e;
              }, t.prototype.shiftRight = function (t) {
                var e = b();
                return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e;
              }, t.prototype.getLowestSetBit = function () {
                for (var t = 0; t < this.t; ++t) {
                  if (0 != this[t]) return t * this.DB + s(this[t]);
                }

                return this.s < 0 ? this.t * this.DB : -1;
              }, t.prototype.bitCount = function () {
                for (var t = 0, e = this.s & this.DM, r = 0; r < this.t; ++r) {
                  t += a(this[r] ^ e);
                }

                return t;
              }, t.prototype.testBit = function (t) {
                var e = Math.floor(t / this.DB);
                return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB);
              }, t.prototype.setBit = function (t) {
                return this.changeBit(t, n);
              }, t.prototype.clearBit = function (t) {
                return this.changeBit(t, o);
              }, t.prototype.flipBit = function (t) {
                return this.changeBit(t, i);
              }, t.prototype.add = function (t) {
                var e = b();
                return this.addTo(t, e), e;
              }, t.prototype.subtract = function (t) {
                var e = b();
                return this.subTo(t, e), e;
              }, t.prototype.multiply = function (t) {
                var e = b();
                return this.multiplyTo(t, e), e;
              }, t.prototype.divide = function (t) {
                var e = b();
                return this.divRemTo(t, e, null), e;
              }, t.prototype.remainder = function (t) {
                var e = b();
                return this.divRemTo(t, null, e), e;
              }, t.prototype.divideAndRemainder = function (t) {
                var e = b(),
                    r = b();
                return this.divRemTo(t, e, r), [e, r];
              }, t.prototype.pow = function (t) {
                return this.exp(t, new v());
              }, t.prototype.copyTo = function (t) {
                for (var e = this.t - 1; e >= 0; --e) {
                  t[e] = this[e];
                }

                t.t = this.t, t.s = this.s;
              }, t.prototype.fromInt = function (t) {
                this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0;
              }, t.prototype.fromString = function (e, r) {
                var n;
                if (16 == r) n = 4;else if (8 == r) n = 3;else if (256 == r) n = 8;else if (2 == r) n = 1;else if (32 == r) n = 5;else {
                  if (4 != r) return void this.fromRadix(e, r);
                  n = 2;
                }
                this.t = 0, this.s = 0;

                for (var i = e.length, o = !1, s = 0; --i >= 0;) {
                  var a = 8 == n ? 255 & +e[i] : D(e, i);
                  a < 0 ? "-" == e.charAt(i) && (o = !0) : (o = !1, 0 == s ? this[this.t++] = a : s + n > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - s) - 1) << s, this[this.t++] = a >> this.DB - s) : this[this.t - 1] |= a << s, (s += n) >= this.DB && (s -= this.DB));
                }

                8 == n && 0 != (128 & +e[0]) && (this.s = -1, s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), this.clamp(), o && t.ZERO.subTo(this, this);
              }, t.prototype.clamp = function () {
                for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;) {
                  --this.t;
                }
              }, t.prototype.dlShiftTo = function (t, e) {
                var r;

                for (r = this.t - 1; r >= 0; --r) {
                  e[r + t] = this[r];
                }

                for (r = t - 1; r >= 0; --r) {
                  e[r] = 0;
                }

                e.t = this.t + t, e.s = this.s;
              }, t.prototype.drShiftTo = function (t, e) {
                for (var r = t; r < this.t; ++r) {
                  e[r - t] = this[r];
                }

                e.t = Math.max(this.t - t, 0), e.s = this.s;
              }, t.prototype.lShiftTo = function (t, e) {
                for (var r = t % this.DB, n = this.DB - r, i = (1 << n) - 1, o = Math.floor(t / this.DB), s = this.s << r & this.DM, a = this.t - 1; a >= 0; --a) {
                  e[a + o + 1] = this[a] >> n | s, s = (this[a] & i) << r;
                }

                for (a = o - 1; a >= 0; --a) {
                  e[a] = 0;
                }

                e[o] = s, e.t = this.t + o + 1, e.s = this.s, e.clamp();
              }, t.prototype.rShiftTo = function (t, e) {
                e.s = this.s;
                var r = Math.floor(t / this.DB);
                if (r >= this.t) e.t = 0;else {
                  var n = t % this.DB,
                      i = this.DB - n,
                      o = (1 << n) - 1;
                  e[0] = this[r] >> n;

                  for (var s = r + 1; s < this.t; ++s) {
                    e[s - r - 1] |= (this[s] & o) << i, e[s - r] = this[s] >> n;
                  }

                  n > 0 && (e[this.t - r - 1] |= (this.s & o) << i), e.t = this.t - r, e.clamp();
                }
              }, t.prototype.subTo = function (t, e) {
                for (var r = 0, n = 0, i = Math.min(t.t, this.t); r < i;) {
                  n += this[r] - t[r], e[r++] = n & this.DM, n >>= this.DB;
                }

                if (t.t < this.t) {
                  for (n -= t.s; r < this.t;) {
                    n += this[r], e[r++] = n & this.DM, n >>= this.DB;
                  }

                  n += this.s;
                } else {
                  for (n += this.s; r < t.t;) {
                    n -= t[r], e[r++] = n & this.DM, n >>= this.DB;
                  }

                  n -= t.s;
                }

                e.s = n < 0 ? -1 : 0, n < -1 ? e[r++] = this.DV + n : n > 0 && (e[r++] = n), e.t = r, e.clamp();
              }, t.prototype.multiplyTo = function (e, r) {
                var n = this.abs(),
                    i = e.abs(),
                    o = n.t;

                for (r.t = o + i.t; --o >= 0;) {
                  r[o] = 0;
                }

                for (o = 0; o < i.t; ++o) {
                  r[o + n.t] = n.am(0, i[o], r, o, 0, n.t);
                }

                r.s = 0, r.clamp(), this.s != e.s && t.ZERO.subTo(r, r);
              }, t.prototype.squareTo = function (t) {
                for (var e = this.abs(), r = t.t = 2 * e.t; --r >= 0;) {
                  t[r] = 0;
                }

                for (r = 0; r < e.t - 1; ++r) {
                  var n = e.am(r, e[r], t, 2 * r, 0, 1);
                  (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, n, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV, t[r + e.t + 1] = 1);
                }

                t.t > 0 && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)), t.s = 0, t.clamp();
              }, t.prototype.divRemTo = function (e, r, n) {
                var i = e.abs();

                if (!(i.t <= 0)) {
                  var o = this.abs();
                  if (o.t < i.t) return null != r && r.fromInt(0), void (null != n && this.copyTo(n));
                  null == n && (n = b());
                  var s = b(),
                      a = this.s,
                      u = e.s,
                      h = this.DB - T(i[i.t - 1]);
                  h > 0 ? (i.lShiftTo(h, s), o.lShiftTo(h, n)) : (i.copyTo(s), o.copyTo(n));
                  var l = s.t,
                      c = s[l - 1];

                  if (0 != c) {
                    var f = c * (1 << this.F1) + (l > 1 ? s[l - 2] >> this.F2 : 0),
                        p = this.FV / f,
                        d = (1 << this.F1) / f,
                        g = 1 << this.F2,
                        v = n.t,
                        y = v - l,
                        m = null == r ? b() : r;

                    for (s.dlShiftTo(y, m), n.compareTo(m) >= 0 && (n[n.t++] = 1, n.subTo(m, n)), t.ONE.dlShiftTo(l, m), m.subTo(s, s); s.t < l;) {
                      s[s.t++] = 0;
                    }

                    for (; --y >= 0;) {
                      var w = n[--v] == c ? this.DM : Math.floor(n[v] * p + (n[v - 1] + g) * d);
                      if ((n[v] += s.am(0, w, n, y, 0, l)) < w) for (s.dlShiftTo(y, m), n.subTo(m, n); n[v] < --w;) {
                        n.subTo(m, n);
                      }
                    }

                    null != r && (n.drShiftTo(l, r), a != u && t.ZERO.subTo(r, r)), n.t = l, n.clamp(), h > 0 && n.rShiftTo(h, n), a < 0 && t.ZERO.subTo(n, n);
                  }
                }
              }, t.prototype.invDigit = function () {
                if (this.t < 1) return 0;
                var t = this[0];
                if (0 == (1 & t)) return 0;
                var e = 3 & t;
                return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e;
              }, t.prototype.isEven = function () {
                return 0 == (this.t > 0 ? 1 & this[0] : this.s);
              }, t.prototype.exp = function (e, r) {
                if (e > 4294967295 || e < 1) return t.ONE;
                var n = b(),
                    i = b(),
                    o = r.convert(this),
                    s = T(e) - 1;

                for (o.copyTo(n); --s >= 0;) {
                  if (r.sqrTo(n, i), (e & 1 << s) > 0) r.mulTo(i, o, n);else {
                    var a = n;
                    n = i, i = a;
                  }
                }

                return r.revert(n);
              }, t;
            }(),
                v = function () {
              function t() {}

              return t.prototype.convert = function (t) {
                return t;
              }, t.prototype.revert = function (t) {
                return t;
              }, t.prototype.mulTo = function (t, e, r) {
                t.multiplyTo(e, r);
              }, t.prototype.sqrTo = function (t, e) {
                t.squareTo(e);
              }, t;
            }(),
                y = function () {
              function t(t) {
                this.m = t;
              }

              return t.prototype.convert = function (t) {
                return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
              }, t.prototype.revert = function (t) {
                return t;
              }, t.prototype.reduce = function (t) {
                t.divRemTo(this.m, null, t);
              }, t.prototype.mulTo = function (t, e, r) {
                t.multiplyTo(e, r), this.reduce(r);
              }, t.prototype.sqrTo = function (t, e) {
                t.squareTo(e), this.reduce(e);
              }, t;
            }(),
                m = function () {
              function t(t) {
                this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t;
              }

              return t.prototype.convert = function (t) {
                var e = b();
                return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && e.compareTo(g.ZERO) > 0 && this.m.subTo(e, e), e;
              }, t.prototype.revert = function (t) {
                var e = b();
                return t.copyTo(e), this.reduce(e), e;
              }, t.prototype.reduce = function (t) {
                for (; t.t <= this.mt2;) {
                  t[t.t++] = 0;
                }

                for (var e = 0; e < this.m.t; ++e) {
                  var r = 32767 & t[e],
                      n = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;

                  for (t[r = e + this.m.t] += this.m.am(0, n, t, e, 0, this.m.t); t[r] >= t.DV;) {
                    t[r] -= t.DV, t[++r]++;
                  }
                }

                t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
              }, t.prototype.mulTo = function (t, e, r) {
                t.multiplyTo(e, r), this.reduce(r);
              }, t.prototype.sqrTo = function (t, e) {
                t.squareTo(e), this.reduce(e);
              }, t;
            }();

            function b() {
              return new g(null);
            }

            function w(t, e) {
              return new g(t, e);
            }

            !function () {
              function t(t) {
                this.m = t, this.r2 = b(), this.q3 = b(), g.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t);
              }

              t.prototype.convert = function (t) {
                if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
                if (t.compareTo(this.m) < 0) return t;
                var e = b();
                return t.copyTo(e), this.reduce(e), e;
              }, t.prototype.revert = function (t) {
                return t;
              }, t.prototype.reduce = function (t) {
                for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;) {
                  t.dAddOffset(1, this.m.t + 1);
                }

                for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;) {
                  t.subTo(this.m, t);
                }
              }, t.prototype.mulTo = function (t, e, r) {
                t.multiplyTo(e, r), this.reduce(r);
              }, t.prototype.sqrTo = function (t, e) {
                t.squareTo(e), this.reduce(e);
              };
            }(), "Microsoft Internet Explorer" == window.navigator.appName ? (g.prototype.am = function (t, e, r, n, i, o) {
              for (var s = 32767 & e, a = e >> 15; --o >= 0;) {
                var u = 32767 & this[t],
                    h = this[t++] >> 15,
                    l = a * u + h * s;
                i = ((u = s * u + ((32767 & l) << 15) + r[n] + (1073741823 & i)) >>> 30) + (l >>> 15) + a * h + (i >>> 30), r[n++] = 1073741823 & u;
              }

              return i;
            }, h = 30) : "Netscape" != window.navigator.appName ? (g.prototype.am = function (t, e, r, n, i, o) {
              for (; --o >= 0;) {
                var s = e * this[t++] + r[n] + i;
                i = Math.floor(s / 67108864), r[n++] = 67108863 & s;
              }

              return i;
            }, h = 26) : (g.prototype.am = function (t, e, r, n, i, o) {
              for (var s = 16383 & e, a = e >> 14; --o >= 0;) {
                var u = 16383 & this[t],
                    h = this[t++] >> 14,
                    l = a * u + h * s;
                i = ((u = s * u + ((16383 & l) << 14) + r[n] + i) >> 28) + (l >> 14) + a * h, r[n++] = 268435455 & u;
              }

              return i;
            }, h = 28), g.prototype.DB = h, g.prototype.DM = (1 << h) - 1, g.prototype.DV = 1 << h, g.prototype.FV = Math.pow(2, 52), g.prototype.F1 = 52 - h, g.prototype.F2 = 2 * h - 52;
            var x,
                S,
                _ = [];

            for (x = "0".charCodeAt(0), S = 0; S <= 9; ++S) {
              _[x++] = S;
            }

            for (x = "a".charCodeAt(0), S = 10; S < 36; ++S) {
              _[x++] = S;
            }

            for (x = "A".charCodeAt(0), S = 10; S < 36; ++S) {
              _[x++] = S;
            }

            function D(t, e) {
              var r = _[t.charCodeAt(e)];

              return null == r ? -1 : r;
            }

            function I(t) {
              var e = b();
              return e.fromInt(t), e;
            }

            function T(t) {
              var e,
                  r = 1;
              return 0 != (e = t >>> 16) && (t = e, r += 16), 0 != (e = t >> 8) && (t = e, r += 8), 0 != (e = t >> 4) && (t = e, r += 4), 0 != (e = t >> 2) && (t = e, r += 2), 0 != (e = t >> 1) && (t = e, r += 1), r;
            }

            g.ZERO = I(0), g.ONE = I(1);

            var A,
                E,
                P = function () {
              function t() {
                this.i = 0, this.j = 0, this.S = [];
              }

              return t.prototype.init = function (t) {
                var e, r, n;

                for (e = 0; e < 256; ++e) {
                  this.S[e] = e;
                }

                for (r = 0, e = 0; e < 256; ++e) {
                  r = r + this.S[e] + t[e % t.length] & 255, n = this.S[e], this.S[e] = this.S[r], this.S[r] = n;
                }

                this.i = 0, this.j = 0;
              }, t.prototype.next = function () {
                var t;
                return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255];
              }, t;
            }(),
                B = null;

            if (null == B) {
              B = [], E = 0;
              var C = void 0;

              if (window.crypto && window.crypto.getRandomValues) {
                var R = new Uint32Array(256);

                for (window.crypto.getRandomValues(R), C = 0; C < R.length; ++C) {
                  B[E++] = 255 & R[C];
                }
              }

              var M = function M(t) {
                if (this.count = this.count || 0, this.count >= 256 || E >= 256) window.removeEventListener ? window.removeEventListener("mousemove", M, !1) : window.detachEvent && window.detachEvent("onmousemove", M);else try {
                  var e = t.x + t.y;
                  B[E++] = 255 & e, this.count += 1;
                } catch (t) {}
              };

              window.addEventListener ? window.addEventListener("mousemove", M, !1) : window.attachEvent && window.attachEvent("onmousemove", M);
            }

            function O() {
              if (null == A) {
                for (A = new P(); E < 256;) {
                  var t = Math.floor(65536 * Math.random());
                  B[E++] = 255 & t;
                }

                for (A.init(B), E = 0; E < B.length; ++E) {
                  B[E] = 0;
                }

                E = 0;
              }

              return A.next();
            }

            var L = function () {
              function t() {}

              return t.prototype.nextBytes = function (t) {
                for (var e = 0; e < t.length; ++e) {
                  t[e] = O();
                }
              }, t;
            }(),
                k = function (t) {
              function e(r) {
                var n = t.call(this) || this;
                return r && ("string" == typeof r ? n.parseKey(r) : (e.hasPrivateKeyProperty(r) || e.hasPublicKeyProperty(r)) && n.parsePropertiesFrom(r)), n;
              }

              return function (t, e) {
                function r() {
                  this.constructor = t;
                }

                _l(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
              }(e, t), e.prototype.parseKey = function (t) {
                try {
                  var e = 0,
                      r = 0,
                      n = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t) ? Hex.decode(t) : c.unarmor(t),
                      i = p.decode(n);

                  if (3 === i.sub.length && (i = i.sub[2].sub[0]), 9 === i.sub.length) {
                    e = i.sub[1].getHexStringValue(), this.n = w(e, 16), r = i.sub[2].getHexStringValue(), this.e = parseInt(r, 16);
                    var o = i.sub[3].getHexStringValue();
                    this.d = w(o, 16);
                    var s = i.sub[4].getHexStringValue();
                    this.p = w(s, 16);
                    var a = i.sub[5].getHexStringValue();
                    this.q = w(a, 16);
                    var u = i.sub[6].getHexStringValue();
                    this.dmp1 = w(u, 16);
                    var h = i.sub[7].getHexStringValue();
                    this.dmq1 = w(h, 16);
                    var l = i.sub[8].getHexStringValue();
                    this.coeff = w(l, 16);
                  } else {
                    if (2 !== i.sub.length) return !1;
                    var f = i.sub[1].sub[0];
                    e = f.sub[0].getHexStringValue(), this.n = w(e, 16), r = f.sub[1].getHexStringValue(), this.e = parseInt(r, 16);
                  }

                  return !0;
                } catch (t) {
                  return !1;
                }
              }, e;
            }(function () {
              function t() {
                this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null;
              }

              return t.prototype.doPublic = function (t) {
                return t.modPowInt(this.e, this.n);
              }, t.prototype.setPublic = function (t, e) {
                null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = w(t, 16), this.e = parseInt(e, 16)) : console.error("Invalid RSA public key");
              }, t.prototype.encrypt = function (t) {
                var e = function (t, e) {
                  if (e < t.length + 11) return console.error("Message too long for RSA"), null;

                  for (var r = [], n = t.length - 1; n >= 0 && e > 0;) {
                    var i = t.charCodeAt(n--);
                    i < 128 ? r[--e] = i : i > 127 && i < 2048 ? (r[--e] = 63 & i | 128, r[--e] = i >> 6 | 192) : (r[--e] = 63 & i | 128, r[--e] = i >> 6 & 63 | 128, r[--e] = i >> 12 | 224);
                  }

                  r[--e] = 0;

                  for (var o = new L(), s = []; e > 2;) {
                    for (s[0] = 0; 0 == s[0];) {
                      o.nextBytes(s);
                    }

                    r[--e] = s[0];
                  }

                  return r[--e] = 2, r[--e] = 0, new g(r);
                }(t, this.n.bitLength() + 7 >> 3);

                if (null == e) return null;
                var r = this.doPublic(e);
                if (null == r) return null;
                var n = r.toString(16);
                return 0 == (1 & n.length) ? n : "0" + n;
              }, t;
            }()),
                N = function () {
              function t(t) {
                t = t || {}, this.default_key_size = parseInt(t.default_key_size, 10) || 1024, this.default_public_exponent = t.default_public_exponent || "010001", this.log = t.log || !1, this.key = null;
              }

              return t.prototype.setKey = function (t) {
                this.log && this.key && console.warn("A key was already set, overriding existing."), this.key = new k(t);
              }, t.prototype.setPublicKey = function (t) {
                this.setKey(t);
              }, t.version = "3.0.0-rc.1", t;
            }();

            window.JSEncrypt = N, t.JSEncrypt = N, t.default = N, Object.defineProperty(t, "__esModule", {
              value: !0
            });
          }(e);
        }, function (t, e, r) {
          (function (t, n) {
            var i;
            (function () {
              "use strict";

              var o = {
                function: !0,
                object: !0
              },
                  s = o[typeof window] && window || this,
                  a = o[typeof e] && e,
                  u = o[typeof t] && t && !t.nodeType && t,
                  h = a && u && "object" == typeof n && n;
              !h || h.global !== h && h.window !== h && h.self !== h || (s = h);
              var l = Math.pow(2, 53) - 1,
                  c = /\bOpera/,
                  f = Object.prototype,
                  p = f.hasOwnProperty,
                  d = f.toString;

              function g(t) {
                return (t = String(t)).charAt(0).toUpperCase() + t.slice(1);
              }

              function v(t) {
                return t = x(t), /^(?:webOS|i(?:OS|P))/.test(t) ? t : g(t);
              }

              function y(t, e) {
                for (var r in t) {
                  p.call(t, r) && e(t[r], r, t);
                }
              }

              function m(t) {
                return null == t ? g(t) : d.call(t).slice(8, -1);
              }

              function b(t) {
                return String(t).replace(/([ -])(?!$)/g, "$1?");
              }

              function w(t, e) {
                var r = null;
                return function (t, e) {
                  var r = -1,
                      n = t ? t.length : 0;
                  if ("number" == typeof n && n > -1 && n <= l) for (; ++r < n;) {
                    e(t[r], r, t);
                  } else y(t, e);
                }(t, function (n, i) {
                  r = e(r, n, i, t);
                }), r;
              }

              function x(t) {
                return String(t).replace(/^ +| +$/g, "");
              }

              var S = function t(e) {
                var r = s,
                    n = e && "object" == typeof e && "String" != m(e);
                n && (r = e, e = null);
                var i = r.navigator || {},
                    o = i.userAgent || "";
                e || (e = o);

                var a,
                    u,
                    h,
                    l,
                    f,
                    p = n ? !!i.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(d.toString()),
                    g = n ? "Object" : "ScriptBridgingProxyObject",
                    S = n ? "Object" : "Environment",
                    _ = n && r.java ? "JavaPackage" : m(r.java),
                    D = n ? "Object" : "RuntimeObject",
                    I = /\bJava/.test(_) && r.java,
                    T = I && m(r.environment) == S,
                    A = I ? "a" : "α",
                    E = I ? "b" : "β",
                    P = r.document || {},
                    B = r.operamini || r.opera,
                    C = c.test(C = n && B ? B["[[Class]]"] : m(B)) ? C : B = null,
                    R = e,
                    M = [],
                    O = null,
                    L = e == o,
                    k = L && B && "function" == typeof B.version && B.version(),
                    N = w([{
                  label: "EdgeHTML",
                  pattern: "Edge"
                }, "Trident", {
                  label: "WebKit",
                  pattern: "AppleWebKit"
                }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"], function (t, r) {
                  return t || RegExp("\\b" + (r.pattern || b(r)) + "\\b", "i").exec(e) && (r.label || r);
                }),
                    U = function (t) {
                  return w(t, function (t, r) {
                    return t || RegExp("\\b" + (r.pattern || b(r)) + "\\b", "i").exec(e) && (r.label || r);
                  });
                }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                  label: "Microsoft Edge",
                  pattern: "Edge"
                }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                  label: "Samsung Internet",
                  pattern: "SamsungBrowser"
                }, "SeaMonkey", {
                  label: "Silk",
                  pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Sleipnir", "SlimBrowser", {
                  label: "SRWare Iron",
                  pattern: "Iron"
                }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                  label: "Opera Mini",
                  pattern: "OPiOS"
                }, "Opera", {
                  label: "Opera",
                  pattern: "OPR"
                }, "Chrome", {
                  label: "Chrome Mobile",
                  pattern: "(?:CriOS|CrMo)"
                }, {
                  label: "Firefox",
                  pattern: "(?:Firefox|Minefield)"
                }, {
                  label: "Firefox for iOS",
                  pattern: "FxiOS"
                }, {
                  label: "IE",
                  pattern: "IEMobile"
                }, {
                  label: "IE",
                  pattern: "MSIE"
                }, "Safari"]),
                    V = Y([{
                  label: "BlackBerry",
                  pattern: "BB10"
                }, "BlackBerry", {
                  label: "Galaxy S",
                  pattern: "GT-I9000"
                }, {
                  label: "Galaxy S2",
                  pattern: "GT-I9100"
                }, {
                  label: "Galaxy S3",
                  pattern: "GT-I9300"
                }, {
                  label: "Galaxy S4",
                  pattern: "GT-I9500"
                }, {
                  label: "Galaxy S5",
                  pattern: "SM-G900"
                }, {
                  label: "Galaxy S6",
                  pattern: "SM-G920"
                }, {
                  label: "Galaxy S6 Edge",
                  pattern: "SM-G925"
                }, {
                  label: "Galaxy S7",
                  pattern: "SM-G930"
                }, {
                  label: "Galaxy S7 Edge",
                  pattern: "SM-G935"
                }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                  label: "Kindle Fire",
                  pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                  label: "Wii U",
                  pattern: "WiiU"
                }, "Wii", "Xbox One", {
                  label: "Xbox 360",
                  pattern: "Xbox"
                }, "Xoom"]),
                    F = function (t) {
                  return w(t, function (t, r, n) {
                    return t || (r[V] || r[/^[a-z]+(?: +[a-z]+\b)*/i.exec(V)] || RegExp("\\b" + b(n) + "(?:\\b|\\w*\\d)", "i").exec(e)) && n;
                  });
                }({
                  Apple: {
                    iPad: 1,
                    iPhone: 1,
                    iPod: 1
                  },
                  Archos: {},
                  Amazon: {
                    Kindle: 1,
                    "Kindle Fire": 1
                  },
                  Asus: {
                    Transformer: 1
                  },
                  "Barnes & Noble": {
                    Nook: 1
                  },
                  BlackBerry: {
                    PlayBook: 1
                  },
                  Google: {
                    "Google TV": 1,
                    Nexus: 1
                  },
                  HP: {
                    TouchPad: 1
                  },
                  HTC: {},
                  LG: {},
                  Microsoft: {
                    Xbox: 1,
                    "Xbox One": 1
                  },
                  Motorola: {
                    Xoom: 1
                  },
                  Nintendo: {
                    "Wii U": 1,
                    Wii: 1
                  },
                  Nokia: {
                    Lumia: 1
                  },
                  Samsung: {
                    "Galaxy S": 1,
                    "Galaxy S2": 1,
                    "Galaxy S3": 1,
                    "Galaxy S4": 1
                  },
                  Sony: {
                    PlayStation: 1,
                    "PlayStation Vita": 1
                  }
                }),
                    j = function (t) {
                  return w(t, function (t, r) {
                    var n = r.pattern || b(r);
                    return !t && (t = RegExp("\\b" + n + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(e)) && (t = function (t, e, r) {
                      var n = {
                        "10.0": "10",
                        6.4: "10 Technical Preview",
                        6.3: "8.1",
                        6.2: "8",
                        6.1: "Server 2008 R2 / 7",
                        "6.0": "Server 2008 / Vista",
                        5.2: "Server 2003 / XP 64-bit",
                        5.1: "XP",
                        5.01: "2000 SP1",
                        "5.0": "2000",
                        "4.0": "NT",
                        "4.90": "ME"
                      };
                      return e && r && /^Win/i.test(t) && !/^Windows Phone /i.test(t) && (n = n[/[\d.]+$/.exec(t)]) && (t = "Windows " + n), t = String(t), e && r && (t = t.replace(RegExp(e, "i"), r)), t = v(t.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0]);
                    }(t, n, r.label || r)), t;
                  });
                }(["Windows Phone", "Android", "CentOS", {
                  label: "Chrome OS",
                  pattern: "CrOS"
                }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);

                if (window.BK) {
                  var X = BK.getSystemInfoSync();
                  -1 != (V = X.platform).indexOf("ios") ? (V = V.replace(/ios/, "iPhone"), e = " OS " + X.osVersion + ") ") : (V = V.replace(/ios/, "Android"), e = " Android " + X.osVersion + "; ", j = "Android " + X.osVersion), k = X.osVersion;
                }

                function Y(t) {
                  return w(t, function (t, r) {
                    var n = r.pattern || b(r);
                    return !t && (t = RegExp("\\b" + n + " *\\d+[.\\w_]*", "i").exec(e) || RegExp("\\b" + n + " *\\w+-[\\w]*", "i").exec(e) || RegExp("\\b" + n + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(e)) && ((t = String(r.label && !RegExp(n, "i").test(r.label) ? r.label : t).split("/"))[1] && !/[\d.]+/.test(t[0]) && (t[0] += " " + t[1]), r = r.label || r, t = v(t[0].replace(RegExp(n, "i"), r).replace(RegExp("; *(?:" + r + "[_-])?", "i"), " ").replace(RegExp("(" + r + ")[-_.]?(\\w)", "i"), "$1 $2"))), t;
                  });
                }

                if (N && (N = [N]), F && !V && (V = Y([F])), (a = /\bGoogle TV\b/.exec(V)) && (V = a[0]), /\bSimulator\b/i.test(e) && (V = (V ? V + " " : "") + "Simulator"), "Opera Mini" == U && /\bOPiOS\b/.test(e) && M.push("running in Turbo/Uncompressed mode"), "IE" == U && /\blike iPhone OS\b/.test(e) ? (F = (a = t(e.replace(/like iPhone OS/, ""))).manufacturer, V = a.product) : /^iP/.test(V) ? (U || (U = "Safari"), j = "iOS" + ((a = / OS ([\d_]+)/i.exec(e)) || (a = / OS[^]+?([\d\.]+?) /i.exec(e)) ? " " + a[1].replace(/_/g, ".") : "")) : "Konqueror" != U || /buntu/i.test(j) ? F && "Google" != F && (/Chrome/.test(U) && !/\bMobile Safari\b/i.test(e) || /\bVita\b/.test(V)) || /\bAndroid\b/.test(j) && /^Chrome/.test(U) && /\bVersion\//i.test(e) ? (U = "Android Browser", j = /\bAndroid\b/.test(j) ? j : "Android") : "Silk" == U ? (/\bMobi/i.test(e) || (j = "Android", M.unshift("desktop mode")), /Accelerated *= *true/i.test(e) && M.unshift("accelerated")) : "PaleMoon" == U && (a = /\bFirefox\/([\d.]+)\b/.exec(e)) ? M.push("identifying as Firefox " + a[1]) : "Firefox" == U && (a = /\b(Mobile|Tablet|TV)\b/i.exec(e)) ? (j || (j = "Firefox OS"), V || (V = a[1])) : !U || (a = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(U)) ? (U && !V && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(a + "/") + 8)) && (U = null), (a = V || F || j) && (V || F || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(j)) && (U = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(j) ? j : a) + " Browser")) : "Electron" == U && (a = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) && M.push("Chromium " + a) : j = "Kubuntu", k || (j && -1 != j.indexOf("Android") && (V = V || "Android", (a = / Android[^]+?([\d\.]+?)[\)|;]/i.exec(e)) && (j = "Android " + ((k = a[1].replace(/_/g, ".")) || ""))), k || (k = w(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", b(U), "(?:Firefox|Minefield|NetFront)"], function (t, r) {
                  return t || (RegExp(r + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(e) || 0)[1] || null;
                }))), (a = ("iCab" == N && parseFloat(k) > 3 ? "WebKit" : /\bOpera\b/.test(U) && (/\bOPR\b/.test(e) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test(N) && "WebKit" || !N && /\bMSIE\b/i.test(e) && ("Mac OS" == j ? "Tasman" : "Trident") || "WebKit" == N && /\bPlayStation\b(?! Vita\b)/i.test(U) && "NetFront") && (N = [a]), "IE" == U && (a = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1]) ? (U += " Mobile", j = "Windows Phone " + (/\+$/.test(a) ? a : a + ".x"), M.unshift("desktop mode")) : /\bWPDesktop\b/i.test(e) ? (U = "IE Mobile", j = "Windows Phone 8.x", M.unshift("desktop mode"), k || (k = (/\brv:([\d.]+)/.exec(e) || 0)[1])) : "IE" != U && "Trident" == N && (a = /\brv:([\d.]+)/.exec(e)) && (U && M.push("identifying as " + U + (k ? " " + k : "")), U = "IE", k = a[1]), L) {
                  if (l = "global", f = null != (h = r) ? typeof h[l] : "number", /^(?:boolean|number|string|undefined)$/.test(f) || "object" == f && !h[l]) m(a = r.runtime) == g ? (U = "Adobe AIR", j = a.flash.system.Capabilities.os) : m(a = r.phantom) == D ? (U = "PhantomJS", k = (a = a.version || null) && a.major + "." + a.minor + "." + a.patch) : "number" == typeof P.documentMode && (a = /\bTrident\/(\d+)/i.exec(e)) ? (k = [k, P.documentMode], (a = +a[1] + 4) != k[1] && (M.push("IE " + k[1] + " mode"), N && (N[1] = ""), k[1] = a), k = "IE" == U ? String(k[1].toFixed(1)) : k[0]) : "number" == typeof P.documentMode && /^(?:Chrome|Firefox)\b/.test(U) && (M.push("masking as " + U + " " + k), U = "IE", k = "11.0", N = ["Trident"], j = "Windows");else if (I && (R = (a = I.lang.System).getProperty("os.arch"), j = j || a.getProperty("os.name") + " " + a.getProperty("os.version")), T) {
                    try {
                      k = r.require("ringo/engine").version.join("."), U = "RingoJS";
                    } catch (t) {
                      (a = r.system) && a.global.system == r.system && (U = "Narwhal", j || (j = a[0].os || null));
                    }

                    U || (U = "Rhino");
                  } else "object" == typeof r.process && !r.process.browser && (a = r.process) && ("object" == typeof a.versions && ("string" == typeof a.versions.electron ? (M.push("Node " + a.versions.node), U = "Electron", k = a.versions.electron) : "string" == typeof a.versions.nw && (M.push("Chromium " + k, "Node " + a.versions.node), U = "NW.js", k = a.versions.nw)), U || (U = "Node.js", R = a.arch, j = a.platform, k = (k = /[\d.]+/.exec(a.version)) ? k[0] : null));
                  j = j && v(j);
                }

                if (k && (a = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(k) || /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (L && i.appMinorVersion)) || /\bMinefield\b/i.test(e) && "a") && (O = /b/i.test(a) ? "beta" : "alpha", k = k.replace(RegExp(a + "\\+?$"), "") + ("beta" == O ? E : A) + (/\d+\+?/.exec(a) || "")), "Fennec" == U || "Firefox" == U && /\b(?:Android|Firefox OS)\b/.test(j)) U = "Firefox Mobile";else if ("Maxthon" == U && k) k = k.replace(/\.[\d.]+/, ".x");else if (/\bXbox\b/i.test(V)) "Xbox 360" == V && (j = null), "Xbox 360" == V && /\bIEMobile\b/.test(e) && M.unshift("mobile mode");else if (!/^(?:Chrome|IE|Opera)$/.test(U) && (!U || V || /Browser|Mobi/.test(U)) || "Windows CE" != j && !/Mobi/i.test(e)) {
                  if ("IE" == U && L) try {
                    null === r.external && M.unshift("platform preview");
                  } catch (t) {
                    M.unshift("embedded");
                  } else (/\bBlackBerry\b/.test(V) || /\bBB10\b/.test(e)) && (a = (RegExp(V.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || k) ? (j = ((a = [a, /BB10/.test(e)])[1] ? (V = null, F = "BlackBerry") : "Device Software") + " " + a[0], k = null) : this != y && "Wii" != V && (L && B || /Opera/.test(U) && /\b(?:MSIE|Firefox)\b/i.test(e) || "Firefox" == U && /\bOS X (?:\d+\.){2,}/.test(j) || "IE" == U && (j && !/^Win/.test(j) && k > 5.5 || /\bWindows XP\b/.test(j) && k > 8 || 8 == k && !/\bTrident\b/.test(e))) && !c.test(a = t.call(y, e.replace(c, "") + ";")) && a.name && (a = "ing as " + a.name + ((a = a.version) ? " " + a : ""), c.test(U) ? (/\bIE\b/.test(a) && "Mac OS" == j && (j = null), a = "identify" + a) : (a = "mask" + a, U = C ? v(C.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(a) && (j = null), L || (k = null)), N = ["Presto"], M.push(a));
                } else U += " Mobile";
                (a = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) && (a = [parseFloat(a.replace(/\.(\d)$/, ".0$1")), a], "Safari" == U && "+" == a[1].slice(-1) ? (U = "WebKit Nightly", O = "alpha", k = a[1].slice(0, -1)) : k != a[1] && k != (a[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1]) || (k = null), a[1] = (/\bChrome\/([\d.]+)/i.exec(e) || 0)[1], 537.36 == a[0] && 537.36 == a[2] && parseFloat(a[1]) >= 28 && "WebKit" == N && (N = ["Blink"]), L && (p || a[1]) ? (N && (N[1] = "like Chrome"), a = a[1] || ((a = a[0]) < 530 ? 1 : a < 532 ? 2 : a < 532.05 ? 3 : a < 533 ? 4 : a < 534.03 ? 5 : a < 534.07 ? 6 : a < 534.1 ? 7 : a < 534.13 ? 8 : a < 534.16 ? 9 : a < 534.24 ? 10 : a < 534.3 ? 11 : a < 535.01 ? 12 : a < 535.02 ? "13+" : a < 535.07 ? 15 : a < 535.11 ? 16 : a < 535.19 ? 17 : a < 536.05 ? 18 : a < 536.1 ? 19 : a < 537.01 ? 20 : a < 537.11 ? "21+" : a < 537.13 ? 23 : a < 537.18 ? 24 : a < 537.24 ? 25 : a < 537.36 ? 26 : "Blink" != N ? "27" : "28")) : (N && (N[1] = "like Safari"), a = (a = a[0]) < 400 ? 1 : a < 500 ? 2 : a < 526 ? 3 : a < 533 ? 4 : a < 534 ? "4+" : a < 535 ? 5 : a < 537 ? 6 : a < 538 ? 7 : a < 601 ? 8 : "8"), N && (N[1] += " " + (a += "number" == typeof a ? ".x" : /[.+]/.test(a) ? "" : "+")), "Safari" == U && (!k || parseInt(k) > 45) && (k = a)), "Opera" == U && (a = /\bzbov|zvav$/.exec(j)) ? (U += " ", M.unshift("desktop mode"), "zvav" == a ? (U += "Mini", k = null) : U += "Mobile", j = j.replace(RegExp(" *" + a + "$"), "")) : "Safari" == U && /\bChrome\b/.exec(N && N[1]) && (M.unshift("desktop mode"), U = "Chrome Mobile", k = null, /\bOS X\b/.test(j) ? (F = "Apple", j = "iOS 4.3+") : j = null), k && 0 == k.indexOf(a = /[\d.]+$/.exec(j)) && e.indexOf("/" + a + "-") > -1 && (j = x(j.replace(a, ""))), N && !/\b(?:Avant|Nook)\b/.test(U) && (/Browser|Lunascape|Maxthon/.test(U) || "Safari" != U && /^iOS/.test(j) && /\bSafari\b/.test(N[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(U) && N[1]) && (a = N[N.length - 1]) && M.push(a), M.length && (M = ["(" + M.join("; ") + ")"]), F && V && V.indexOf(F) < 0 && M.push("on " + F), V && M.push((/^on /.test(M[M.length - 1]) ? "" : "on ") + V), j && (a = / ([\d.+]+)$/.exec(j), u = a && "/" == j.charAt(j.length - a[0].length - 1), j = {
                  architecture: 32,
                  family: a && !u ? j.replace(a[0], "") : j,
                  version: a ? a[1] : null,
                  toString: function toString() {
                    var t = this.version;
                    return this.family + (t && !u ? " " + t : "") + (64 == this.architecture ? " 64-bit" : "");
                  }
                }), (a = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(R)) && !/\bi686\b/i.test(R) ? (j && (j.architecture = 64, j.family = j.family.replace(RegExp(" *" + a), "")), U && (/\bWOW64\b/i.test(e) || L && /\w(?:86|32)$/.test(i.cpuClass || i.platform) && !/\bWin64; x64\b/i.test(e)) && M.unshift("32-bit")) : j && /^OS X/.test(j.family) && "Chrome" == U && parseFloat(k) >= 39 && (j.architecture = 64), e || (e = null);
                var K = {};
                K.description = e, K.layout = N && N[0], K.manufacturer = F, K.name = U, K.prerelease = O, K.product = V, K.ua = e, K.version = U && k, K.os = j || {
                  architecture: null,
                  family: null,
                  version: null,
                  toString: function toString() {
                    return "null";
                  }
                };
                var W = window.my || window.hbs || window.qg || window.wx || window.tt || window.loadRuntime && window.loadRuntime();
                return W && W.getSystemInfo && (K.runtimeMask = !0, K.product = "", K.manufacturer = "", K.os.version = "", W.getSystemInfo({
                  success: function success(t) {
                    K.product = t.model, K.manufacturer = t.brand || "";
                    var e = /Android[^]+?([\d\.]+?)\s/i.exec(t.system + " ");
                    e && e.length > 1 ? K.os.version = e[1].replace(/_/g, ".") : K.os.version = t.system, K.runtimeMask = !1;
                  },
                  fail: function fail() {
                    K.runtimeMask = !1;
                  },
                  complete: function complete() {
                    K.runtimeMask = !1;
                  }
                })), K.parse = t, K.toString = function () {
                  return this.description || "";
                }, K.version && M.unshift(k), K.name && M.unshift(U), j && U && (j != String(j).split(" ")[0] || j != U.split(" ")[0] && !V) && M.push(V ? "(" + j + ")" : "on " + j), M.length && (K.description = M.join(" ")), K;
              }();

              s.platform = S, void 0 === (i = function () {
                return S;
              }.call(e, r, e, t)) || (t.exports = i);
            }).call(this);
          }).call(this, r(1)(t), r(0));
        }, function (t, e, r) {
          var n, i, o, s, _a;

          n = r(13), i = r(2).utf8, o = r(14), s = r(2).bin, (_a = function a(t, e) {
            t.constructor == String ? t = e && "binary" === e.encoding ? s.stringToBytes(t) : i.stringToBytes(t) : o(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || (t = t.toString());

            for (var r = n.bytesToWords(t), u = 8 * t.length, h = 1732584193, l = -271733879, c = -1732584194, f = 271733878, p = 0; p < r.length; p++) {
              r[p] = 16711935 & (r[p] << 8 | r[p] >>> 24) | 4278255360 & (r[p] << 24 | r[p] >>> 8);
            }

            r[u >>> 5] |= 128 << u % 32, r[14 + (u + 64 >>> 9 << 4)] = u;
            var d = _a._ff,
                g = _a._gg,
                v = _a._hh,
                y = _a._ii;

            for (p = 0; p < r.length; p += 16) {
              var m = h,
                  b = l,
                  w = c,
                  x = f;
              h = d(h, l, c, f, r[p + 0], 7, -680876936), f = d(f, h, l, c, r[p + 1], 12, -389564586), c = d(c, f, h, l, r[p + 2], 17, 606105819), l = d(l, c, f, h, r[p + 3], 22, -1044525330), h = d(h, l, c, f, r[p + 4], 7, -176418897), f = d(f, h, l, c, r[p + 5], 12, 1200080426), c = d(c, f, h, l, r[p + 6], 17, -1473231341), l = d(l, c, f, h, r[p + 7], 22, -45705983), h = d(h, l, c, f, r[p + 8], 7, 1770035416), f = d(f, h, l, c, r[p + 9], 12, -1958414417), c = d(c, f, h, l, r[p + 10], 17, -42063), l = d(l, c, f, h, r[p + 11], 22, -1990404162), h = d(h, l, c, f, r[p + 12], 7, 1804603682), f = d(f, h, l, c, r[p + 13], 12, -40341101), c = d(c, f, h, l, r[p + 14], 17, -1502002290), h = g(h, l = d(l, c, f, h, r[p + 15], 22, 1236535329), c, f, r[p + 1], 5, -165796510), f = g(f, h, l, c, r[p + 6], 9, -1069501632), c = g(c, f, h, l, r[p + 11], 14, 643717713), l = g(l, c, f, h, r[p + 0], 20, -373897302), h = g(h, l, c, f, r[p + 5], 5, -701558691), f = g(f, h, l, c, r[p + 10], 9, 38016083), c = g(c, f, h, l, r[p + 15], 14, -660478335), l = g(l, c, f, h, r[p + 4], 20, -405537848), h = g(h, l, c, f, r[p + 9], 5, 568446438), f = g(f, h, l, c, r[p + 14], 9, -1019803690), c = g(c, f, h, l, r[p + 3], 14, -187363961), l = g(l, c, f, h, r[p + 8], 20, 1163531501), h = g(h, l, c, f, r[p + 13], 5, -1444681467), f = g(f, h, l, c, r[p + 2], 9, -51403784), c = g(c, f, h, l, r[p + 7], 14, 1735328473), h = v(h, l = g(l, c, f, h, r[p + 12], 20, -1926607734), c, f, r[p + 5], 4, -378558), f = v(f, h, l, c, r[p + 8], 11, -2022574463), c = v(c, f, h, l, r[p + 11], 16, 1839030562), l = v(l, c, f, h, r[p + 14], 23, -35309556), h = v(h, l, c, f, r[p + 1], 4, -1530992060), f = v(f, h, l, c, r[p + 4], 11, 1272893353), c = v(c, f, h, l, r[p + 7], 16, -155497632), l = v(l, c, f, h, r[p + 10], 23, -1094730640), h = v(h, l, c, f, r[p + 13], 4, 681279174), f = v(f, h, l, c, r[p + 0], 11, -358537222), c = v(c, f, h, l, r[p + 3], 16, -722521979), l = v(l, c, f, h, r[p + 6], 23, 76029189), h = v(h, l, c, f, r[p + 9], 4, -640364487), f = v(f, h, l, c, r[p + 12], 11, -421815835), c = v(c, f, h, l, r[p + 15], 16, 530742520), h = y(h, l = v(l, c, f, h, r[p + 2], 23, -995338651), c, f, r[p + 0], 6, -198630844), f = y(f, h, l, c, r[p + 7], 10, 1126891415), c = y(c, f, h, l, r[p + 14], 15, -1416354905), l = y(l, c, f, h, r[p + 5], 21, -57434055), h = y(h, l, c, f, r[p + 12], 6, 1700485571), f = y(f, h, l, c, r[p + 3], 10, -1894986606), c = y(c, f, h, l, r[p + 10], 15, -1051523), l = y(l, c, f, h, r[p + 1], 21, -2054922799), h = y(h, l, c, f, r[p + 8], 6, 1873313359), f = y(f, h, l, c, r[p + 15], 10, -30611744), c = y(c, f, h, l, r[p + 6], 15, -1560198380), l = y(l, c, f, h, r[p + 13], 21, 1309151649), h = y(h, l, c, f, r[p + 4], 6, -145523070), f = y(f, h, l, c, r[p + 11], 10, -1120210379), c = y(c, f, h, l, r[p + 2], 15, 718787259), l = y(l, c, f, h, r[p + 9], 21, -343485551), h = h + m >>> 0, l = l + b >>> 0, c = c + w >>> 0, f = f + x >>> 0;
            }

            return n.endian([h, l, c, f]);
          })._ff = function (t, e, r, n, i, o, s) {
            var a = t + (e & r | ~e & n) + (i >>> 0) + s;
            return (a << o | a >>> 32 - o) + e;
          }, _a._gg = function (t, e, r, n, i, o, s) {
            var a = t + (e & n | r & ~n) + (i >>> 0) + s;
            return (a << o | a >>> 32 - o) + e;
          }, _a._hh = function (t, e, r, n, i, o, s) {
            var a = t + (e ^ r ^ n) + (i >>> 0) + s;
            return (a << o | a >>> 32 - o) + e;
          }, _a._ii = function (t, e, r, n, i, o, s) {
            var a = t + (r ^ (e | ~n)) + (i >>> 0) + s;
            return (a << o | a >>> 32 - o) + e;
          }, _a._blocksize = 16, _a._digestsize = 16, t.exports = function (t, e) {
            if (null == t) throw new Error("Illegal argument " + t);
            var r = n.wordsToBytes(_a(t, e));
            return e && e.asBytes ? r : e && e.asString ? s.bytesToString(r) : n.bytesToHex(r);
          };
        }, function (t, e) {
          var r, n;
          r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = {
            rotl: function rotl(t, e) {
              return t << e | t >>> 32 - e;
            },
            rotr: function rotr(t, e) {
              return t << 32 - e | t >>> e;
            },
            endian: function endian(t) {
              if (t.constructor == Number) return 16711935 & n.rotl(t, 8) | 4278255360 & n.rotl(t, 24);

              for (var e = 0; e < t.length; e++) {
                t[e] = n.endian(t[e]);
              }

              return t;
            },
            randomBytes: function randomBytes(t) {
              for (var e = []; t > 0; t--) {
                e.push(Math.floor(256 * Math.random()));
              }

              return e;
            },
            bytesToWords: function bytesToWords(t) {
              for (var e = [], r = 0, n = 0; r < t.length; r++, n += 8) {
                e[n >>> 5] |= t[r] << 24 - n % 32;
              }

              return e;
            },
            wordsToBytes: function wordsToBytes(t) {
              for (var e = [], r = 0; r < 32 * t.length; r += 8) {
                e.push(t[r >>> 5] >>> 24 - r % 32 & 255);
              }

              return e;
            },
            bytesToHex: function bytesToHex(t) {
              for (var e = [], r = 0; r < t.length; r++) {
                e.push((t[r] >>> 4).toString(16)), e.push((15 & t[r]).toString(16));
              }

              return e.join("");
            },
            hexToBytes: function hexToBytes(t) {
              for (var e = [], r = 0; r < t.length; r += 2) {
                e.push(parseInt(t.substr(r, 2), 16));
              }

              return e;
            },
            bytesToBase64: function bytesToBase64(t) {
              for (var e = [], n = 0; n < t.length; n += 3) {
                for (var i = t[n] << 16 | t[n + 1] << 8 | t[n + 2], o = 0; o < 4; o++) {
                  8 * n + 6 * o <= 8 * t.length ? e.push(r.charAt(i >>> 6 * (3 - o) & 63)) : e.push("=");
                }
              }

              return e.join("");
            },
            base64ToBytes: function base64ToBytes(t) {
              t = t.replace(/[^A-Z0-9+\/]/gi, "");

              for (var e = [], n = 0, i = 0; n < t.length; i = ++n % 4) {
                0 != i && e.push((r.indexOf(t.charAt(n - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | r.indexOf(t.charAt(n)) >>> 6 - 2 * i);
              }

              return e;
            }
          }, t.exports = n;
        }, function (t, e) {
          function r(t) {
            return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
          }

          t.exports = function (t) {
            return null != t && (r(t) || function (t) {
              return "function" == typeof t.readFloatLE && "function" == typeof t.slice && r(t.slice(0, 0));
            }(t) || !!t._isBuffer);
          };
        }, function (t, e, r) {
          "use strict";

          var n = function n(t) {
            t.extends(this);
          };

          n.prototype = {
            onStarted: function onStarted(t, e) {
              if (e && t && 0 != t.replace(/\s/g, "").length) {
                var r = this._generatePostData({
                  eventTag: "started",
                  eventID: t,
                  eventValue: e
                });

                this._upload(r);
              } else console.log("eventID 不能为空!");
            },
            onSuccess: function onSuccess(t, e) {
              if (e && t && 0 != t.replace(/\s/g, "").length) {
                var r = this._generatePostData({
                  eventTag: "successed",
                  eventID: t,
                  eventValue: e
                });

                this._upload(r);
              } else console.log("eventID 不能为空!");
            },
            onCancelled: function onCancelled(t, e) {
              if (e && t && 0 != t.replace(/\s/g, "").length) {
                var r = this._generatePostData({
                  eventTag: "cancelled",
                  eventID: t,
                  eventValue: e
                });

                this._upload(r);
              } else console.log("eventID 不能为空!");
            },
            onFailed: function onFailed(t, e, r) {
              if (e && t && 0 != t.replace(/\s/g, "").length) {
                var n = this._generatePostData({
                  eventTag: "failed",
                  eventID: t,
                  eventFailDesc: r,
                  eventValue: e
                });

                this._upload(n);
              } else console.log("eventID 不能为空!");
            }
          }, t.exports = n;
        }, function (t, e, r) {
          "use strict";

          var n = function n(t) {
            t.extends(this);
          };

          n.prototype = {
            loginStart: function loginStart(t) {
              this.data.channel = t && t.channel || "";

              var e = this._generatePostData({
                eventTag: "started",
                eventID: "login"
              });

              this._upload(e);
            },
            loginSuccess: function loginSuccess(t) {
              if (t && t.userID) {
                this.data.age = t.age || 0, this.data.sex = t.sex || 0;

                var e = t.channel || this.data.channel,
                    r = this._getLocalStorage("onlineDuration"),
                    n = this._getLocalStorage("_UID_" + this.data.appID) || "";

                n.length > 0 && parseInt(r) > 0 && (this.data.userID = n, this.logout()), this.data.channel = e, this.data.userID = t.userID, this._addLocalStorage("_UID_" + this.data.appID, this.data.userID), this._addLocalStorage("__SDK_CHANNEL_", this.data.channel);

                var i = this._generatePostData({
                  onlineDuration: 0,
                  eventTag: "successed",
                  eventID: "login"
                });

                this._upload(i), this._addLocalStorage("onlineDuration", 0), this._setHeartBeat(!0);
              } else console.log("userID 不能为空!");
            },
            loginFailed: function loginFailed(t) {
              if (t) {
                var e = t;
                "string" != typeof t && (this.data.channel = t.channel, e = t.reason);

                var r = this._generatePostData({
                  exitFailDesc: e || "",
                  eventTag: "failed",
                  eventID: "login"
                });

                this._upload(r);
              } else console.log("loginFailed 参数不能为空!");
            },
            logout: function logout() {
              this.data.channel = this._getLocalStorage("__SDK_CHANNEL_") || "";

              var t = this._getLocalStorage("onlineDuration") || 0,
                  e = this._generatePostData({
                onlineDuration: t,
                exitTag: "successed",
                eventID: "logout"
              });

              this._upload(e), this.data.userID = "", this._setHeartBeat(!1), this._addLocalStorage("onlineDuration", 0), this._addLocalStorage("__SDK_CHANNEL_", ""), this._addLocalStorage("_UID_" + this.data.appID, "");
            },
            setAccountType: function setAccountType(t) {
              var e = this._generatePostData({
                eventTag: "successed",
                eventID: "role",
                eventValue: {
                  action: "update",
                  accountType: t
                }
              });

              this._upload(e);
            },
            setAge: function setAge(t) {
              t && (this.data.age = t);
            },
            setGender: function setGender(t) {
              0 == t || 1 == t || 2 == t ? t && (this.data.aex = t) : console.log("gender 为 int 类型：0 未知、1 男性、 2 女性");
            },
            createRole: function createRole(t) {
              var e = {
                action: "createRole",
                roleID: t.roleID,
                userName: t.userName,
                race: t.race,
                class: t.class,
                gameServer: t.gameServer
              },
                  r = this._generatePostData({
                eventTag: "successed",
                eventID: "role",
                eventValue: e
              });

              this._upload(r);
            },
            setLevel: function setLevel(t) {
              var e = this._generatePostData({
                eventTag: "successed",
                eventID: "role",
                eventValue: {
                  action: "update",
                  level: t
                }
              });

              this._upload(e);
            }
          }, t.exports = n;
        }, function (t, e, r) {
          "use strict";

          var n = function n(t) {
            t.extends(this);
          };

          n.prototype = {
            onEvent: function onEvent(t) {
              if (t && t.eventName && 0 != t.eventName.replace(/\s/g, "").length) {
                var e = this._generatePostData({
                  eventTag: "successed",
                  eventID: t.eventName
                });

                this._upload(e);
              } else console.log("eventName 不能为空或者包含空格!");
            },
            onEventStart: function onEventStart(t) {
              if (t && t.eventName && 0 != t.eventName.replace(/\s/g, "").length) {
                var e = this._generatePostData({
                  eventTag: "started",
                  eventID: t.eventName
                });

                this._upload(e);
              } else console.log("eventName 不能为空或者包含空格!");
            },
            onEventEnd: function onEventEnd(t) {
              if (t && t.eventName && 0 != t.eventName.replace(/\s/g, "").length) {
                var e = this._generatePostData({
                  eventTag: "successed",
                  eventID: t.eventName
                });

                this._upload(e);
              } else console.log("eventName 不能为空或者包含空格!");
            }
          }, t.exports = n;
        }, function (t, e, r) {
          "use strict";

          var n = function n(t) {
            t.extends(this);
          };

          n.prototype = {
            payBegin: function payBegin(t) {
              var e = this._generatePostData({
                expendTag: "started",
                eventID: "pay",
                eventValue: {
                  orderID: t.orderID,
                  accountID: t.accountID,
                  partner: t.partner || "",
                  currencyAmount: t.amount,
                  currencyType: t.currencyType,
                  virtualCurrencyAmount: t.virtualCurrencyAmount || "0",
                  subjectID: t.iapID || "",
                  paymentType: t.payType || "",
                  gameServer: t.gameServer || "",
                  level: t.level || "",
                  mission: t.mission || ""
                }
              });

              this._upload(e);
            },
            paySuccess: function paySuccess(t) {
              var e = this._generatePostData({
                expendTag: "successed",
                eventID: "pay",
                eventValue: {
                  orderID: t.orderID,
                  accountID: t.accountID,
                  partner: t.partner || "",
                  currencyAmount: t.amount,
                  currencyType: t.currencyType,
                  virtualCurrencyAmount: t.virtualCurrencyAmount || "0",
                  subjectID: t.iapID || "",
                  paymentType: t.payType || "",
                  gameServer: t.gameServer || "",
                  level: t.level || "",
                  mission: t.mission || ""
                }
              });

              this._upload(e);
            },
            payFailed: function payFailed(t) {
              var e = this._generatePostData({
                expendTag: "failed",
                eventID: "pay",
                expendFailDesc: t.reason || "",
                eventValue: {
                  orderID: t.orderID,
                  accountID: t.accountID,
                  partner: t.partner || "",
                  currencyAmount: t.amount,
                  currencyType: t.currencyType,
                  virtualCurrencyAmount: t.virtualCurrencyAmount || "0",
                  subjectID: t.iapID || "",
                  paymentType: t.payType || "",
                  gameServer: t.gameServer || "",
                  level: t.level || "",
                  mission: t.mission || ""
                }
              });

              this._upload(e);
            },
            payCanceled: function payCanceled(t) {
              var e = this._generatePostData({
                expendTag: "cancelled",
                eventID: "pay",
                eventValue: {
                  orderID: t.orderID,
                  accountID: t.accountID,
                  partner: t.partner || "",
                  currencyAmount: t.amount,
                  currencyType: t.currencyType,
                  virtualCurrencyAmount: t.virtualCurrencyAmount || "0",
                  subjectID: t.iapID || "",
                  paymentType: t.payType || "",
                  gameServer: t.gameServer || "",
                  level: t.level || "",
                  mission: t.mission || ""
                }
              });

              this._upload(e);
            }
          }, t.exports = n;
        }, function (t, e, r) {
          "use strict";

          var n = function n(t) {
            t.extends(this);
          };

          n.prototype = {
            begin: function begin(t) {
              if (t && t.level) {
                var e = this._generatePostData({
                  eventTag: "started",
                  eventID: "barrier",
                  eventValue: {
                    level: t.level
                  }
                });

                this._upload(e);
              } else console.log("level 不能为空!");
            },
            complete: function complete(t) {
              if (t && t.level) {
                var e = this._generatePostData({
                  eventTag: "successed",
                  eventID: "barrier",
                  eventValue: {
                    level: t.level
                  }
                });

                this._upload(e);
              } else console.log("level 不能为空!");
            },
            failed: function failed(t, e) {
              if (t && t.level) {
                var r = this._generatePostData({
                  eventTag: "failed",
                  eventID: "barrier",
                  eventFailDesc: t.reason || e,
                  eventValue: {
                    level: t.level
                  }
                });

                this._upload(r);
              } else console.log("level 不能为空!");
            }
          }, t.exports = n;
        }, function (t, e, r) {
          "use strict";

          var n = function n(t) {
            t.extends(this);
          };

          n.prototype = {
            begin: function begin(t) {
              if (t && t.taskID) {
                var e = this._generatePostData({
                  eventTag: "started",
                  eventID: "task",
                  eventValue: {
                    taskID: t.taskID,
                    taskType: t.type
                  }
                });

                this._upload(e);
              } else console.log("taskID 不能为空!");
            },
            complete: function complete(t) {
              if (t && t.taskID) {
                var e = this._generatePostData({
                  eventTag: "successed",
                  eventID: "task",
                  eventValue: {
                    taskID: t.taskID
                  }
                });

                this._upload(e);
              } else console.log("taskID 不能为空!");
            },
            failed: function failed(t) {
              if (t && t.taskID) {
                var e = this._generatePostData({
                  eventTag: "failed",
                  eventID: "task",
                  eventFailDesc: t.reason || "",
                  eventValue: {
                    taskID: t.taskID
                  }
                });

                this._upload(e);
              } else console.log("taskID 不能为空!");
            }
          }, t.exports = n;
        }, function (t, e, r) {
          "use strict";

          var n = function n(t) {
            t.extends(this);
          };

          n.prototype = {
            buy: function buy(t) {
              var e = {
                action: "buy",
                itemID: t.itemID,
                itemType: t.itemType,
                itemCount: t.itemCount,
                virtualCoin: t.virtualCoin,
                virtualType: t.virtualType,
                consumePoint: t.consumePoint
              },
                  r = this._generatePostData({
                eventTag: "successed",
                eventID: "item",
                eventValue: e
              });

              this._upload(r);
            },
            get: function get(t) {
              var e = {
                action: "get",
                itemID: t.itemID,
                itemType: t.itemType,
                itemCount: t.itemCount,
                reason: t.reason
              },
                  r = this._generatePostData({
                eventTag: "successed",
                eventID: "item",
                eventValue: e
              });

              this._upload(r);
            },
            consume: function consume(t) {
              var e = {
                action: "consume",
                itemID: t.itemID,
                itemType: t.itemType,
                itemCount: t.itemCount,
                reason: t.reason
              },
                  r = this._generatePostData({
                eventTag: "successed",
                eventID: "item",
                eventValue: e
              });

              this._upload(r);
            }
          }, t.exports = n;
        }, function (t, e, r) {
          "use strict";

          var n = function n(t) {
            t.extends(this);
          };

          n.prototype = {
            setVirtualNum: function setVirtualNum(t) {
              var e = {
                action: "set",
                type: t.type,
                count: t.count
              },
                  r = this._generatePostData({
                eventTag: "successed",
                eventID: "virtual",
                eventValue: e
              });

              this._upload(r);
            },
            get: function get(t) {
              var e = {
                action: "get",
                type: t.type,
                count: t.count,
                reason: t.reason
              },
                  r = this._generatePostData({
                eventTag: "successed",
                eventID: "virtual",
                eventValue: e
              });

              this._upload(r);
            },
            consume: function consume(t) {
              var e = {
                action: "consume",
                type: t.type,
                count: t.count,
                reason: t.reason
              },
                  r = this._generatePostData({
                eventTag: "successed",
                eventID: "virtual",
                eventValue: e
              });

              this._upload(r);
            }
          }, t.exports = n;
        }, function (t, e, r) {
          "use strict";

          var n = function n(t) {};

          n.prototype = {
            GuideLine: 1,
            MainLine: 2,
            BranchLine: 3,
            Daily: 4,
            Activity: 5,
            Other: 100
          }, t.exports = n;
        }, function (t, e, r) {
          "use strict";

          var n = function n(t) {
            t.extends(this);
          };

          n.prototype = {
            begin: function begin(t) {
              if (t && t.adID) {
                var e = this._generatePostData({
                  eventTag: "started",
                  eventID: "advertising",
                  eventValue: {
                    ID: t.adID
                  }
                });

                this._upload(e);
              } else console.log("adID 不能为空!");
            },
            complete: function complete(t) {
              if (t && t.adID && t.timeLong && t.profit) {
                var e = this._generatePostData({
                  eventTag: "successed",
                  eventID: "advertising",
                  eventValue: {
                    ID: t.adID,
                    timeLong: t.timeLong,
                    profit: t.profit
                  }
                });

                this._upload(e);
              } else console.log("adID 不能为空!");
            },
            failed: function failed(t) {
              if (t && t.adID) {
                var e = this._generatePostData({
                  eventTag: "failed",
                  eventID: "advertising",
                  eventFailDesc: t.reason || "",
                  eventValue: {
                    ID: t.adID
                  }
                });

                this._upload(e);
              } else console.log("adID 不能为空!");
            }
          }, t.exports = n;
        }]); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=d9b0cf02bb8bb4431455ac6831ad2754c3234069.js.map