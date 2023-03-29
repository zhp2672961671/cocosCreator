window.__require = function e(t, s, r) {
function o(a, n) {
if (!s[a]) {
if (!t[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!t[c]) {
var l = "function" == typeof __require && __require;
if (!n && l) return l(c, !0);
if (i) return i(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var p = s[a] = {
exports: {}
};
t[a][0].call(p.exports, function(e) {
return o(t[a][1][e] || e);
}, p, p.exports, e, t, s, r);
}
return s[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < r.length; a++) o(r[a]);
return o;
}({
Helloworld: [ function(e, t, s) {
"use strict";
cc._RF.push(t, "e1b90/rohdEk4SdmmEZANaD", "Helloworld");
var r, o = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
})(e, t);
}, function(e, t) {
r(e, t);
function s() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (s.prototype = t.prototype, new s());
}), i = this && this.__decorate || function(e, t, s, r) {
var o, i = arguments.length, a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, s) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, s, r); else for (var n = e.length - 1; n >= 0; n--) (o = e[n]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, s, a) : o(t, s)) || a);
return i > 3 && a && Object.defineProperty(t, s, a), a;
};
Object.defineProperty(s, "__esModule", {
value: !0
});
var a = cc._decorator, n = a.ccclass, c = a.property, l = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
return t;
}
t.prototype.start = function() {
this.label.string = this.text;
};
i([ c(cc.Label) ], t.prototype, "label", void 0);
i([ c ], t.prototype, "text", void 0);
return i([ n ], t);
}(cc.Component);
s.default = l;
cc._RF.pop();
}, {} ],
hotupdate: [ function(e, t, s) {
"use strict";
cc._RF.push(t, "92cf70DxStB5YOXYCT9fNH0", "hotupdate");
var r, o = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
})(e, t);
}, function(e, t) {
r(e, t);
function s() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (s.prototype = t.prototype, new s());
}), i = this && this.__decorate || function(e, t, s, r) {
var o, i = arguments.length, a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, s) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, s, r); else for (var n = e.length - 1; n >= 0; n--) (o = e[n]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, s, a) : o(t, s)) || a);
return i > 3 && a && Object.defineProperty(t, s, a), a;
};
Object.defineProperty(s, "__esModule", {
value: !0
});
var a = cc._decorator, n = a.ccclass, c = a.property, l = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.versionStr = null;
t.storagePath = "";
t.am = null;
t.updating = !1;
t.mainifestUrl = null;
t.remoteVersion = "";
t.HotUpdateSearchPaths = "HotUpdateSearchPaths";
t.remotePath = "remotePath";
t.curVersion = "curVersion";
return t;
}
t.prototype.start = function() {};
t.prototype.onLoad = function() {
cc.sys.localStorage.removeItem("curVersion");
this.versionStr.string = this.getCurVesion();
this.storagePath = this.getRootPath();
cc.log("远程版本缓存路径 : " + this.storagePath);
this.am = new jsb.AssetsManager("", this.storagePath, this.versionCompareHanle);
this.am.setVerifyCallback(this.setVerifycb.bind(this));
};
t.prototype.setVerifycb = function(e, t) {
var s = t.compressed, r = t.md5, o = t.path, i = t.size;
cc.log("assetPath", e);
cc.log("assetSize:", i);
if (s) {
this.label.string = "检查压缩 : " + o;
return !0;
}
this.label.string = "检查压缩 : " + o + " (" + r + ")";
return !0;
};
t.prototype.versionCompareHanle = function(e, t) {
console.log("当前版本 :  " + e + " , 远程版本 : " + t);
for (var s = e.split("."), r = t.split("."), o = 0; o < s.length && o < r.length; ++o) if (parseInt(s[o]) !== parseInt(r[o])) return -1;
return r.length > s.length ? -1 : 0;
};
t.prototype.onClickTest = function() {
console.log("onClickTest=========================0");
};
t.prototype.checkUpdate = function() {
console.log("checkUpdate=========================0");
if (!this.updating) {
console.log("checkUpdate=========================1");
var e = this.mainifestUrl.nativeUrl;
console.log("checkUpdate=========================2");
cc.log("原包版本信息url:", this.mainifestUrl.nativeUrl);
if (this.am.getState() === jsb.AssetsManager.State.UNINITED) {
cc.loader.md5Pipe && (e = cc.loader.md5Pipe.transformURL(e));
console.log("checkUpdate=========================3");
this.am.loadLocalManifest(e);
}
if (this.am.getLocalManifest() && this.am.getLocalManifest().isLoaded()) {
this.am.setEventCallback(this.checkCb.bind(this));
console.log("checkUpdate=========================5");
this.am.checkUpdate();
console.log("checkUpdate=========================6");
this.updating = !0;
} else {
this.label.string = "加载本地manifest文件失败";
console.log("checkUpdate=========================4");
}
}
};
t.prototype.checkCb = function(e) {
cc.log("Code: " + e.getEventCode());
switch (e.getEventCode()) {
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
t.prototype.hotUpdate = function() {
if (this.am && !this.updating) {
console.log("hotUpdate==================");
this.am.setEventCallback(this.updateCb.bind(this));
if (this.am.getState() === jsb.AssetsManager.State.UNINITED) {
console.log("hotUpdate==================1");
var e = this.mainifestUrl.nativeUrl;
cc.loader.md5Pipe && (e = cc.loader.md5Pipe.transformURL(e));
this.am.loadLocalManifest(e);
}
this.am.update();
this.updating = !0;
}
};
t.prototype.updateCb = function(e) {
cc.log("热更回调");
var t = !1, s = !1, r = e.getMessage();
r && (this.label.string = "Updated file: " + r);
switch (e.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
this.label.string = "没有本地manifest文件，跳过热更.";
s = !0;
break;

case jsb.EventAssetsManager.UPDATE_PROGRESSION:
console.log("当前下载文件数", e.getDownloadedFiles());
console.log("总文件数", e.getTotalFiles());
var o = e.getMessage();
o && (this.label.string = "更新的文件：: " + o);
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
this.label.string = "更新完成，即将重启游戏. " + e.getMessage();
t = !0;
break;

case jsb.EventAssetsManager.UPDATE_FAILED:
this.label.string = "更新失败. " + e.getMessage();
this.updating = !1;
break;

case jsb.EventAssetsManager.ERROR_UPDATING:
this.label.string = "Asset 更新错误: " + e.getAssetId() + ", " + e.getMessage();
break;

case jsb.EventAssetsManager.ERROR_DECOMPRESS:
this.label.string = e.getMessage();
}
s && (this.updating = !1);
if (t) {
this.remoteVersion = this.getRemoteVersion();
cc.log("remoteversion:", this.remoteVersion);
this.am.setEventCallback(null);
var i = jsb.fileUtils.getSearchPaths(), a = this.am.getLocalManifest().getSearchPaths();
Array.prototype.unshift(i, a);
cc.sys.localStorage.setItem(this.HotUpdateSearchPaths, JSON.stringify(i));
jsb.fileUtils.setSearchPaths(i);
cc.sys.localStorage.setItem(this.curVersion, this.remoteVersion);
cc.game.restart();
}
this.versionStr.string = this.getCurVesion();
};
t.prototype.getRemoteVersion = function() {
var e = this.getRootPath();
console.log("有下载的manifest文件", e);
var t = jsb.fileUtils.getStringFromFile(e + "/project.manifest");
return JSON.parse(t).version;
};
t.prototype.getRootPath = function() {
return (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + this.remotePath;
};
t.prototype.getCurVesion = function() {
var e = cc.sys.localStorage.getItem(this.curVersion);
cc.log("curversion", e);
if (e) return e;
var t = this.getRootPath();
if (t = this.mainifestUrl.nativeUrl) {
var s = jsb.fileUtils.getStringFromFile(t);
e = JSON.parse(s).version;
console.log("当前版本号origin：", e);
}
return e;
};
t.prototype.configUpdate = function() {
cc.sys.localStorage.removeItem("curVersion");
var e = this.getCurVesion();
0 != this.versionCompareHanle(e, "1.0.0") ? this._modifyAppLoadUrlForManifestFile("远程服务器地址", this.mainifestUrl.nativeUrl) : console.log("小版本相同 进入登陆界面");
};
t.prototype._modifyAppLoadUrlForManifestFile = function(e, t) {
var s = !1;
if (jsb.fileUtils.isFileExist(jsb.fileUtils.getWritablePath() + "plane/project.manifest")) {
var r = this.getRootPath();
console.log("有下载的manifest文件", r);
var o = jsb.fileUtils.getStringFromFile(r + "/project.manifest"), i = JSON.parse(o);
i.packageUrl = e;
i.remoteManifestUrl = i.packageUrl + "project.manifest";
i.remoteVersionUrl = i.packageUrl + "version.manifest";
var a = JSON.stringify(i);
s = jsb.fileUtils.writeStringToFile(a, r + "/project.manifest");
} else {
var n = this.getRootPath();
jsb.fileUtils.isDirectoryExist(n) || jsb.fileUtils.createDirectory(n);
var c = t, l = jsb.fileUtils.getStringFromFile(c), p = JSON.parse(l);
p.packageUrl = e;
p.remoteManifestUrl = p.packageUrl + "project.manifest";
p.remoteVersionUrl = p.packageUrl + "version.manifest";
a = JSON.stringify(p);
s = jsb.fileUtils.writeStringToFile(a, n + "/project.manifest");
}
cc.log("Written Status : ", s);
s && this.checkUpdate();
};
i([ c(cc.RichText) ], t.prototype, "label", void 0);
i([ c(cc.RichText) ], t.prototype, "versionStr", void 0);
i([ c(cc.Asset) ], t.prototype, "mainifestUrl", void 0);
return i([ n ], t);
}(cc.Component);
s.default = l;
cc._RF.pop();
}, {} ],
"use_v2.1-2.2.1_cc.Toggle_event": [ function(e, t) {
"use strict";
cc._RF.push(t, "d51b9WsYBFLjZlAM2UBfHra", "use_v2.1-2.2.1_cc.Toggle_event");
cc.Toggle && (cc.Toggle._triggerEventInScript_isChecked = !0);
cc._RF.pop();
}, {} ]
}, {}, [ "Helloworld", "hotupdate", "use_v2.1-2.2.1_cc.Toggle_event" ]);