"use strict";
cc._RF.push(module, '92cf70DxStB5YOXYCT9fNH0', 'hotupdate');
// Script/hotupdate.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Helloworld = /** @class */ (function (_super) {
    __extends(Helloworld, _super);
    function Helloworld() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**显示更新信息 */
        _this.label = null;
        /**当前版本信息 */
        _this.versionStr = null;
        /**远程版本资源缓存路径 */
        _this.storagePath = "";
        /**资源管理 */
        _this.am = null;
        /**更新状态 */
        _this.updating = false;
        /**版本资源信息文件 */
        _this.mainifestUrl = null;
        /**远程版本 */
        _this.remoteVersion = "";
        /**热更后的搜索路径 */
        _this.HotUpdateSearchPaths = "HotUpdateSearchPaths";
        /**远程资源缓存路径 */
        _this.remotePath = "remotePath";
        _this.curVersion = "curVersion";
        return _this;
    }
    Helloworld.prototype.start = function () {
    };
    Helloworld.prototype.onLoad = function () {
        cc.sys.localStorage.removeItem("curVersion");
        this.versionStr.string = this.getCurVesion();
        this.storagePath = this.getRootPath();
        cc.log('远程版本缓存路径 : ' + this.storagePath);
        this.am = new jsb.AssetsManager('', this.storagePath, this.versionCompareHanle);
        this.am.setVerifyCallback(this.setVerifycb.bind(this));
    };
    Helloworld.prototype.setVerifycb = function (path, asset) {
        var compressed = asset.compressed;
        var expectedMD5 = asset.md5;
        var relativePath = asset.path;
        var size = asset.size;
        cc.log("assetPath", path);
        cc.log("assetSize:", size);
        if (compressed) {
            this.label.string = "检查压缩 : " + relativePath;
            return true;
        }
        else {
            this.label.string = "检查压缩 : " + relativePath + ' (' + expectedMD5 + ')';
            return true;
        }
    };
    /**比较版本 版本不同则更新*/
    Helloworld.prototype.versionCompareHanle = function (versionA, versionB) {
        console.log("\u5F53\u524D\u7248\u672C :  " + versionA + " , \u8FDC\u7A0B\u7248\u672C : " + versionB);
        var vA = versionA.split('.');
        var vB = versionB.split('.');
        for (var i = 0; i < vA.length && i < vB.length; ++i) {
            var a = parseInt(vA[i]);
            var b = parseInt(vB[i]);
            if (a === b) {
                continue;
            }
            else {
                return -1;
            }
        }
        if (vB.length > vA.length) {
            return -1;
        }
        return 0;
    };
    Helloworld.prototype.onClickTest = function () {
        console.log("onClickTest=========================0");
    };
    Helloworld.prototype.checkUpdate = function () {
        console.log("checkUpdate=========================0");
        if (this.updating) {
            return;
        }
        console.log("checkUpdate=========================1");
        var url = this.mainifestUrl.nativeUrl;
        console.log("checkUpdate=========================2");
        cc.log("原包版本信息url:", this.mainifestUrl.nativeUrl);
        if (this.am.getState() === jsb.AssetsManager.State.UNINITED) {
            if (cc.loader.md5Pipe) {
                url = cc.loader.md5Pipe.transformURL(url);
            }
            console.log("checkUpdate=========================3");
            this.am.loadLocalManifest(url);
        }
        if (!this.am.getLocalManifest() || !this.am.getLocalManifest().isLoaded()) {
            this.label.string = '加载本地manifest文件失败';
            console.log("checkUpdate=========================4");
            return;
        }
        this.am.setEventCallback(this.checkCb.bind(this));
        console.log("checkUpdate=========================5");
        this.am.checkUpdate();
        console.log("checkUpdate=========================6");
        this.updating = true;
    };
    Helloworld.prototype.checkCb = function (event) {
        cc.log('Code: ' + event.getEventCode());
        switch (event.getEventCode()) {
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
                this.label.string = '发现新版本，请尝试热更';
                break;
            default:
                return;
        }
        this.am.setEventCallback(null);
        this.updating = false;
    };
    Helloworld.prototype.hotUpdate = function () {
        if (this.am && !this.updating) {
            console.log("hotUpdate==================");
            this.am.setEventCallback(this.updateCb.bind(this));
            if (this.am.getState() === jsb.AssetsManager.State.UNINITED) {
                console.log("hotUpdate==================1");
                var url = this.mainifestUrl.nativeUrl;
                if (cc.loader.md5Pipe) {
                    url = cc.loader.md5Pipe.transformURL(url);
                }
                this.am.loadLocalManifest(url);
            }
            this.am.update();
            this.updating = true;
        }
    };
    Helloworld.prototype.updateCb = function (event) {
        cc.log("热更回调");
        var needRestart = false;
        var failed = false;
        var mm = event.getMessage();
        if (mm) {
            this.label.string = 'Updated file: ' + mm;
        }
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                this.label.string = '没有本地manifest文件，跳过热更.';
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                console.log("当前下载文件数", event.getDownloadedFiles());
                console.log("总文件数", event.getTotalFiles());
                var msg = event.getMessage();
                if (msg) {
                    this.label.string = '更新的文件：: ' + msg;
                }
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                this.label.string = '下载远程manifest文件失败，跳过热更.';
                failed = true;
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                this.label.string = '已经更新到远程最新版本.';
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                this.label.string = '更新完成，即将重启游戏. ' + event.getMessage();
                needRestart = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                this.label.string = '更新失败. ' + event.getMessage();
                this.updating = false;
                // this._canRetry = true;
                break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                this.label.string = 'Asset 更新错误: ' + event.getAssetId() + ', ' + event.getMessage();
                break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                this.label.string = event.getMessage();
                break;
            default:
                break;
        }
        if (failed) {
            this.updating = false;
        }
        /**重启游戏，并把缓存资源路径前置到搜索路径 */
        if (needRestart) {
            this.remoteVersion = this.getRemoteVersion();
            cc.log("remoteversion:", this.remoteVersion);
            this.am.setEventCallback(null);
            var searchPaths = jsb.fileUtils.getSearchPaths();
            var newPaths = this.am.getLocalManifest().getSearchPaths();
            Array.prototype.unshift(searchPaths, newPaths);
            cc.sys.localStorage.setItem(this.HotUpdateSearchPaths, JSON.stringify(searchPaths));
            jsb.fileUtils.setSearchPaths(searchPaths);
            cc.sys.localStorage.setItem(this.curVersion, this.remoteVersion);
            cc.game.restart();
        }
        this.versionStr.string = this.getCurVesion();
    };
    Helloworld.prototype.getRemoteVersion = function () {
        var storagePath = this.getRootPath();
        console.log("有下载的manifest文件", storagePath);
        var loadManifest = jsb.fileUtils.getStringFromFile(storagePath + '/project.manifest');
        var manifestObject = JSON.parse(loadManifest);
        return manifestObject.version;
    };
    /**获取缓存路径 */
    Helloworld.prototype.getRootPath = function () {
        return ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + this.remotePath);
    };
    /**
     * 获取版本号
     * 如果已存有版本号则直接返回，如果没有则在本地manifest文件中取版本号；
     */
    Helloworld.prototype.getCurVesion = function () {
        var curversion = cc.sys.localStorage.getItem(this.curVersion);
        cc.log("curversion", curversion);
        if (curversion)
            return curversion;
        var storagePath = this.getRootPath();
        storagePath = this.mainifestUrl.nativeUrl;
        if (storagePath) {
            var loadManifest = jsb.fileUtils.getStringFromFile(storagePath);
            var manifestObject = JSON.parse(loadManifest);
            curversion = manifestObject.version;
            console.log("当前版本号origin：", curversion);
        }
        return curversion;
    };
    /**获取远程动态 url和版本号 ，版本号相同，直接进入游戏，否则重新设置project.manifest地址数据 然后更新 */
    Helloworld.prototype.configUpdate = function () {
        cc.sys.localStorage.removeItem("curVersion");
        var curVersion = this.getCurVesion();
        var remoteVersion = "1.0.0";
        // 大版本号
        // curVersion第一个数字为主版本号，如果大版本大于本地版本则重新下载包（大版本更新部分）
        var curMainId = 1;
        var bigVersion = 1;
        if (bigVersion > curMainId) {
            var rootpath = this.getRootPath();
            //删掉之前大版本的缓存路径
            jsb.fileUtils.removeDirectory(rootpath);
            //清除缓存的版本号 和 版本路径
            cc.sys.localStorage.removeItem("curversion");
            var packageUrl = "apk/api地址";
            cc.sys.openURL(packageUrl);
            return;
        }
        //下面是 资源的更新检查（小版本更新部分）
        var needcheck = this.versionCompareHanle(curVersion, remoteVersion);
        // 本地版本和远程版本 相同直接跳转登陆, 这里 加判断是为了 防止每次都下载 manifest文件
        if (needcheck == 0) {
            console.log("小版本相同 进入登陆界面");
            return;
        }
        //拼接远程资源的下载地址
        var scripturl = "远程服务器地址";
        this._modifyAppLoadUrlForManifestFile(scripturl, this.mainifestUrl.nativeUrl);
    };
    /**
    * 修改.manifest文件,如果有缓存则比较缓存的版本和应用包的版本，取较高者 热更，如果没有缓存则下载远程的版本文件 取版本号，这里统一修改地址为
    * 远程地址，不管 如何变化 都是从最新的地址下载版本文件。这里远程
    * @param {新的升级包地址} newAppHotUpdateUrl
    * @param {本地project.manifest文件地址} localManifestPath
    */
    Helloworld.prototype._modifyAppLoadUrlForManifestFile = function (newAppHotUpdateUrl, localManifestPath) {
        var isWritten = false;
        if (jsb.fileUtils.isFileExist(jsb.fileUtils.getWritablePath() + 'plane/project.manifest')) {
            var storagePath = this.getRootPath();
            console.log("有下载的manifest文件", storagePath);
            var loadManifest = jsb.fileUtils.getStringFromFile(storagePath + '/project.manifest');
            var manifestObject = JSON.parse(loadManifest);
            manifestObject.packageUrl = newAppHotUpdateUrl;
            manifestObject.remoteManifestUrl = manifestObject.packageUrl + "project.manifest";
            manifestObject.remoteVersionUrl = manifestObject.packageUrl + "version.manifest";
            var afterString = JSON.stringify(manifestObject);
            isWritten = jsb.fileUtils.writeStringToFile(afterString, storagePath + '/project.manifest');
        }
        else {
            /**
             * 执行到这里说明App之前没有进行过热更，所以不存在热更的plane文件夹。
             */
            /**
             * plane文件夹不存在的时候，我们就主动创建“plane”文件夹，并将打包时候的project.manifest文件中升级包地址修改后，存放到“plane”文件夹下面。
             */
            var initializedManifestPath = this.getRootPath();
            if (!jsb.fileUtils.isDirectoryExist(initializedManifestPath)) {
                jsb.fileUtils.createDirectory(initializedManifestPath);
            }
            //修改原始manifest文件
            var originManifestPath = localManifestPath;
            var originManifest = jsb.fileUtils.getStringFromFile(originManifestPath);
            var originManifestObject = JSON.parse(originManifest);
            originManifestObject.packageUrl = newAppHotUpdateUrl;
            originManifestObject.remoteManifestUrl = originManifestObject.packageUrl + 'project.manifest';
            originManifestObject.remoteVersionUrl = originManifestObject.packageUrl + 'version.manifest';
            var afterString = JSON.stringify(originManifestObject);
            isWritten = jsb.fileUtils.writeStringToFile(afterString, initializedManifestPath + '/project.manifest');
        }
        cc.log("Written Status : ", isWritten);
        if (isWritten) {
            this.checkUpdate();
        }
    };
    __decorate([
        property(cc.RichText)
    ], Helloworld.prototype, "label", void 0);
    __decorate([
        property(cc.RichText)
    ], Helloworld.prototype, "versionStr", void 0);
    __decorate([
        property(cc.Asset)
    ], Helloworld.prototype, "mainifestUrl", void 0);
    Helloworld = __decorate([
        ccclass
    ], Helloworld);
    return Helloworld;
}(cc.Component));
exports.default = Helloworld;

cc._RF.pop();