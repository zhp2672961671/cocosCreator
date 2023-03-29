window.__require = function t(e, s, r) {
function i(a, n) {
if (!s[a]) {
if (!e[a]) {
var l = a.split("/");
l = l[l.length - 1];
if (!e[l]) {
var c = "function" == typeof __require && __require;
if (!n && c) return c(l, !0);
if (o) return o(l, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = l;
}
var p = s[a] = {
exports: {}
};
e[a][0].call(p.exports, function(t) {
return i(e[a][1][t] || t);
}, p, p.exports, t, e, s, r);
}
return s[a].exports;
}
for (var o = "function" == typeof __require && __require, a = 0; a < r.length; a++) i(r[a]);
return i;
}({
Helloworld: [ function(t, e, s) {
"use strict";
cc._RF.push(e, "e1b90/rohdEk4SdmmEZANaD", "Helloworld");
var r, i = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
})(t, e);
}, function(t, e) {
r(t, e);
function s() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (s.prototype = e.prototype, new s());
}), o = this && this.__decorate || function(t, e, s, r) {
var i, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, s) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, s, r); else for (var n = t.length - 1; n >= 0; n--) (i = t[n]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, s, a) : i(e, s)) || a);
return o > 3 && a && Object.defineProperty(e, s, a), a;
};
Object.defineProperty(s, "__esModule", {
value: !0
});
var a = cc._decorator, n = a.ccclass, l = a.property, c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.text = "hello";
return e;
}
e.prototype.start = function() {
this.label.string = this.text;
};
o([ l(cc.Label) ], e.prototype, "label", void 0);
o([ l ], e.prototype, "text", void 0);
return o([ n ], e);
}(cc.Component);
s.default = c;
cc._RF.pop();
}, {} ],
hotupdate: [ function(t, e, s) {
"use strict";
cc._RF.push(e, "92cf70DxStB5YOXYCT9fNH0", "hotupdate");
var r, i = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
})(t, e);
}, function(t, e) {
r(t, e);
function s() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (s.prototype = e.prototype, new s());
}), o = this && this.__decorate || function(t, e, s, r) {
var i, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, s) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, s, r); else for (var n = t.length - 1; n >= 0; n--) (i = t[n]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, s, a) : i(e, s)) || a);
return o > 3 && a && Object.defineProperty(e, s, a), a;
};
Object.defineProperty(s, "__esModule", {
value: !0
});
var a = cc._decorator, n = a.ccclass, l = a.property, c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.versionStr = null;
e.storagePath = "";
e.am = null;
e.updating = !1;
e.mainifestUrl = null;
e.remoteVersion = "";
e.HotUpdateSearchPaths = "HotUpdateSearchPaths";
e.remotePath = "remotePath";
e.curVersion = "curVersion";
return e;
}
e.prototype.start = function() {};
e.prototype.onLoad = function() {
cc.sys.localStorage.removeItem("curVersion");
this.versionStr.string = this.getCurVesion();
this.storagePath = this.getRootPath();
cc.log("远程版本缓存路径 : " + this.storagePath);
this.am = new jsb.AssetsManager("", this.storagePath, this.versionCompareHanle);
this.am.setVerifyCallback(this.setVerifycb.bind(this));
};
e.prototype.setVerifycb = function(t, e) {
var s = e.compressed, r = e.md5, i = e.path, o = e.size;
cc.log("assetPath", t);
cc.log("assetSize:", o);
if (s) {
this.label.string = "检查压缩 : " + i;
return !0;
}
this.label.string = "检查压缩 : " + i + " (" + r + ")";
return !0;
};
e.prototype.versionCompareHanle = function(t, e) {
console.log("当前版本 :  " + t + " , 远程版本 : " + e);
for (var s = t.split("."), r = e.split("."), i = 0; i < s.length && i < r.length; ++i) if (parseInt(s[i]) !== parseInt(r[i])) return -1;
return r.length > s.length ? -1 : 0;
};
e.prototype.checkUpdate = function() {
if (!this.updating) {
var t = this.mainifestUrl.nativeUrl;
cc.log("原包版本信息url:", this.mainifestUrl.nativeUrl);
if (this.am.getState() === jsb.AssetsManager.State.UNINITED) {
cc.loader.md5Pipe && (t = cc.loader.md5Pipe.transformURL(t));
this.am.loadLocalManifest(t);
}
if (this.am.getLocalManifest() && this.am.getLocalManifest().isLoaded()) {
this.am.setEventCallback(this.checkCb.bind(this));
this.am.checkUpdate();
this.updating = !0;
} else this.label.string = "加载本地manifest文件失败";
}
};
e.prototype.checkCb = function(t) {
cc.log("Code: " + t.getEventCode());
switch (t.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
this.label.string = "没有本地manifest文件，跳过热更.";
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
this.label.string = "下载远程manifest文件失败，跳过热更.";
break;

case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
this.label.string = "已经更新到远程最新版本.";
break;

case jsb.EventAssetsManager.NEW_VERSION_FOUND:
this.label.string = "发现新版本，请尝试热更";
break;

default:
return;
}
this.am.setEventCallback(null);
this.updating = !1;
};
e.prototype.hotUpdate = function() {
if (this.am && !this.updating) {
console.log("hotUpdate==================");
this.am.setEventCallback(this.updateCb.bind(this));
if (this.am.getState() === jsb.AssetsManager.State.UNINITED) {
console.log("hotUpdate==================1");
var t = this.mainifestUrl.nativeUrl;
cc.loader.md5Pipe && (t = cc.loader.md5Pipe.transformURL(t));
this.am.loadLocalManifest(t);
}
this.am.update();
this.updating = !0;
}
};
e.prototype.updateCb = function(t) {
cc.log("热更回调");
var e = !1, s = !1, r = t.getMessage();
r && (this.label.string = "Updated file: " + r);
switch (t.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
this.label.string = "没有本地manifest文件，跳过热更.";
s = !0;
break;

case jsb.EventAssetsManager.UPDATE_PROGRESSION:
console.log("当前下载文件数", t.getDownloadedFiles());
console.log("总文件数", t.getTotalFiles());
var i = t.getMessage();
i && (this.label.string = "更新的文件：: " + i);
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
this.label.string = "下载远程manifest文件失败，跳过热更.";
s = !0;
break;

case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
this.label.string = "已经更新到远程最新版本.";
s = !0;
break;

case jsb.EventAssetsManager.UPDATE_FINISHED:
this.label.string = "更新完成，即将重启游戏. " + t.getMessage();
e = !0;
break;

case jsb.EventAssetsManager.UPDATE_FAILED:
this.label.string = "更新失败. " + t.getMessage();
this.updating = !1;
break;

case jsb.EventAssetsManager.ERROR_UPDATING:
this.label.string = "Asset 更新错误: " + t.getAssetId() + ", " + t.getMessage();
break;

case jsb.EventAssetsManager.ERROR_DECOMPRESS:
this.label.string = t.getMessage();
}
s && (this.updating = !1);
if (e) {
this.remoteVersion = this.getRemoteVersion();
cc.log("remoteversion:", this.remoteVersion);
this.am.setEventCallback(null);
var o = jsb.fileUtils.getSearchPaths(), a = this.am.getLocalManifest().getSearchPaths();
Array.prototype.unshift(o, a);
cc.sys.localStorage.setItem(this.HotUpdateSearchPaths, JSON.stringify(o));
jsb.fileUtils.setSearchPaths(o);
cc.sys.localStorage.setItem(this.curVersion, this.remoteVersion);
cc.game.restart();
}
this.versionStr.string = this.getCurVesion();
};
e.prototype.getRemoteVersion = function() {
var t = this.getRootPath();
console.log("有下载的manifest文件", t);
var e = jsb.fileUtils.getStringFromFile(t + "/project.manifest");
return JSON.parse(e).version;
};
e.prototype.getRootPath = function() {
return (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + this.remotePath;
};
e.prototype.getCurVesion = function() {
var t = cc.sys.localStorage.getItem(this.curVersion);
cc.log("curversion", t);
if (t) return t;
var e = this.getRootPath();
if (e = this.mainifestUrl.nativeUrl) {
var s = jsb.fileUtils.getStringFromFile(e);
t = JSON.parse(s).version;
console.log("当前版本号origin：", t);
}
return t;
};
e.prototype.configUpdate = function() {
cc.sys.localStorage.removeItem("curVersion");
var t = this.getCurVesion();
0 != this.versionCompareHanle(t, "1.0.0") ? this._modifyAppLoadUrlForManifestFile("远程服务器地址", this.mainifestUrl.nativeUrl) : console.log("小版本相同 进入登陆界面");
};
e.prototype._modifyAppLoadUrlForManifestFile = function(t, e) {
var s = !1;
if (jsb.fileUtils.isFileExist(jsb.fileUtils.getWritablePath() + "plane/project.manifest")) {
var r = this.getRootPath();
console.log("有下载的manifest文件", r);
var i = jsb.fileUtils.getStringFromFile(r + "/project.manifest"), o = JSON.parse(i);
o.packageUrl = t;
o.remoteManifestUrl = o.packageUrl + "project.manifest";
o.remoteVersionUrl = o.packageUrl + "version.manifest";
var a = JSON.stringify(o);
s = jsb.fileUtils.writeStringToFile(a, r + "/project.manifest");
} else {
var n = this.getRootPath();
jsb.fileUtils.isDirectoryExist(n) || jsb.fileUtils.createDirectory(n);
var l = e, c = jsb.fileUtils.getStringFromFile(l), p = JSON.parse(c);
p.packageUrl = t;
p.remoteManifestUrl = p.packageUrl + "project.manifest";
p.remoteVersionUrl = p.packageUrl + "version.manifest";
a = JSON.stringify(p);
s = jsb.fileUtils.writeStringToFile(a, n + "/project.manifest");
}
cc.log("Written Status : ", s);
s && this.checkUpdate();
};
o([ l(cc.RichText) ], e.prototype, "label", void 0);
o([ l(cc.RichText) ], e.prototype, "versionStr", void 0);
o([ l(cc.Asset) ], e.prototype, "mainifestUrl", void 0);
return o([ n ], e);
}(cc.Component);
s.default = c;
cc._RF.pop();
}, {} ],
"use_v2.1-2.2.1_cc.Toggle_event": [ function(t, e) {
"use strict";
cc._RF.push(e, "d51b9WsYBFLjZlAM2UBfHra", "use_v2.1-2.2.1_cc.Toggle_event");
cc.Toggle && (cc.Toggle._triggerEventInScript_isChecked = !0);
cc._RF.pop();
}, {} ]
}, {}, [ "Helloworld", "hotupdate", "use_v2.1-2.2.1_cc.Toggle_event" ]);