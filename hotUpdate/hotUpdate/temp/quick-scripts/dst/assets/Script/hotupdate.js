
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/hotupdate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxob3R1cGRhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFpVUM7UUFoVUcsWUFBWTtRQUVaLFdBQUssR0FBZ0IsSUFBSSxDQUFDO1FBQzFCLFlBQVk7UUFFWixnQkFBVSxHQUFnQixJQUFJLENBQUM7UUFDL0IsZ0JBQWdCO1FBQ2hCLGlCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLFVBQVU7UUFDVixRQUFFLEdBQXNCLElBQUksQ0FBQztRQUM3QixVQUFVO1FBQ1YsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixjQUFjO1FBRWQsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFDOUIsVUFBVTtRQUNGLG1CQUFhLEdBQVcsRUFBRSxDQUFDO1FBQ25DLGNBQWM7UUFDTiwwQkFBb0IsR0FBVyxzQkFBc0IsQ0FBQztRQUM5RCxjQUFjO1FBQ04sZ0JBQVUsR0FBVyxZQUFZLENBQUM7UUFDbEMsZ0JBQVUsR0FBVyxZQUFZLENBQUM7O0lBMlM5QyxDQUFDO0lBMVNHLDBCQUFLLEdBQUw7SUFDQSxDQUFDO0lBQ0QsMkJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsZ0NBQVcsR0FBWCxVQUFZLElBQUksRUFBRSxLQUFLO1FBQ25CLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbEMsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUM1QixJQUFJLFlBQVksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQzlCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDdEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDekIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxVQUFVLEVBQUU7WUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLEdBQUcsWUFBWSxDQUFDO1lBQzdDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7YUFDSTtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsR0FBRyxZQUFZLEdBQUcsSUFBSSxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDeEUsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUM7SUFDRCxpQkFBaUI7SUFDakIsd0NBQW1CLEdBQW5CLFVBQW9CLFFBQWdCLEVBQUUsUUFBZ0I7UUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBVyxRQUFRLHNDQUFhLFFBQVUsQ0FBQyxDQUFDO1FBQ3hELElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNqRCxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDVCxTQUFTO2FBQ1o7aUJBQ0k7Z0JBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNiO1NBQ0o7UUFDRCxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUN2QixPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ2I7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFDRCxnQ0FBVyxHQUFYO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFBO0lBQ3hELENBQUM7SUFDRCxnQ0FBVyxHQUFYO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFBO1FBQ3BELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLE9BQU87U0FDVjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQTtRQUNwRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUE7UUFDcEQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUNqRCxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ3pELElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7Z0JBQ25CLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDN0M7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUE7WUFDcEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDdkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFBO1lBQ3BELE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUE7UUFDcEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUE7UUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVELDRCQUFPLEdBQVAsVUFBUSxLQUFLO1FBQ1QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDeEMsUUFBUSxLQUFLLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDMUIsS0FBSyxHQUFHLENBQUMsa0JBQWtCLENBQUMsdUJBQXVCO2dCQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxzQkFBc0IsQ0FBQztnQkFDM0MsTUFBTTtZQUNWLEtBQUssR0FBRyxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDO1lBQ3BELEtBQUssR0FBRyxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQjtnQkFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsd0JBQXdCLENBQUM7Z0JBQzdDLE1BQU07WUFDVixLQUFLLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0I7Z0JBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztnQkFDbkMsTUFBTTtZQUNWLEtBQUssR0FBRyxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQjtnQkFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO2dCQUNsQyxNQUFNO1lBQ1Y7Z0JBQ0ksT0FBTztTQUNkO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRUQsOEJBQVMsR0FBVDtRQUNJLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO1lBQzFDLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO2dCQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUE7Z0JBQzNDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO2dCQUN0QyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO29CQUNuQixHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUM3QztnQkFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2xDO1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN4QjtJQUNMLENBQUM7SUFFRCw2QkFBUSxHQUFSLFVBQVMsS0FBSztRQUNWLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDZCxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM1QixJQUFJLEVBQUUsRUFBRTtZQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztTQUM3QztRQUNELFFBQVEsS0FBSyxDQUFDLFlBQVksRUFBRSxFQUFFO1lBRTFCLEtBQUssR0FBRyxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QjtnQkFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsc0JBQXNCLENBQUM7Z0JBQzNDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2QsTUFBTTtZQUNWLEtBQUssR0FBRyxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQjtnQkFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQTtnQkFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUE7Z0JBQzFDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDN0IsSUFBSSxHQUFHLEVBQUU7b0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsVUFBVSxHQUFHLEdBQUcsQ0FBQztpQkFDeEM7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssR0FBRyxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDO1lBQ3BELEtBQUssR0FBRyxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQjtnQkFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsd0JBQXdCLENBQUM7Z0JBQzdDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2QsTUFBTTtZQUNWLEtBQUssR0FBRyxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQjtnQkFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDO2dCQUNuQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNkLE1BQU07WUFDVixLQUFLLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlO2dCQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxlQUFlLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUN6RCxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixNQUFNO1lBQ1YsS0FBSyxHQUFHLENBQUMsa0JBQWtCLENBQUMsYUFBYTtnQkFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLHlCQUF5QjtnQkFDekIsTUFBTTtZQUNWLEtBQUssR0FBRyxDQUFDLGtCQUFrQixDQUFDLGNBQWM7Z0JBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLGNBQWMsR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDcEYsTUFBTTtZQUNWLEtBQUssR0FBRyxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQjtnQkFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUN2QyxNQUFNO1lBQ1Y7Z0JBQ0ksTUFBTTtTQUNiO1FBR0QsSUFBSSxNQUFNLEVBQUU7WUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN6QjtRQUNELDBCQUEwQjtRQUMxQixJQUFJLFdBQVcsRUFBRTtZQUNiLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDN0MsRUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7WUFDNUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixJQUFJLFdBQVcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2pELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMzRCxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDL0MsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDcEYsR0FBRyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDMUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBQ2hFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVELHFDQUFnQixHQUFoQjtRQUNJLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzNDLElBQUksWUFBWSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsV0FBVyxHQUFHLG1CQUFtQixDQUFDLENBQUM7UUFDdEYsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5QyxPQUFPLGNBQWMsQ0FBQyxPQUFPLENBQUM7SUFDbEMsQ0FBQztJQUVELFlBQVk7SUFDWixnQ0FBVyxHQUFYO1FBQ0ksT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFDRDs7O09BR0c7SUFDSCxpQ0FBWSxHQUFaO1FBQ0ksSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5RCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQTtRQUNoQyxJQUFJLFVBQVU7WUFBRSxPQUFPLFVBQVUsQ0FBQTtRQUNqQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1FBQzFDLElBQUksV0FBVyxFQUFFO1lBQ2IsSUFBSSxZQUFZLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNoRSxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzlDLFVBQVUsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFBO1NBQzFDO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQUdELGtFQUFrRTtJQUNsRSxpQ0FBWSxHQUFaO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQzVDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyQyxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUE7UUFDM0IsT0FBTztRQUNQLGtEQUFrRDtRQUNsRCxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUE7UUFDakIsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFBO1FBQ2xCLElBQUksVUFBVSxHQUFHLFNBQVMsRUFBRTtZQUN4QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbEMsY0FBYztZQUNkLEdBQUcsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hDLGlCQUFpQjtZQUNqQixFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDN0MsSUFBSSxVQUFVLEdBQUcsV0FBVyxDQUFDO1lBQzdCLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzNCLE9BQU87U0FDVjtRQUNELHNCQUFzQjtRQUN0QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3BFLG1EQUFtRDtRQUNuRCxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUU7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQTtZQUMzQixPQUFPO1NBQ1Y7UUFDRCxhQUFhO1FBQ2IsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBQ0Q7Ozs7O01BS0U7SUFDRixxREFBZ0MsR0FBaEMsVUFBaUMsa0JBQWtCLEVBQUUsaUJBQWlCO1FBQ2xFLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLEdBQUcsd0JBQXdCLENBQUMsRUFBRTtZQUN2RixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUMzQyxJQUFJLFlBQVksR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3RGLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUMsY0FBYyxDQUFDLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQztZQUMvQyxjQUFjLENBQUMsaUJBQWlCLEdBQUcsY0FBYyxDQUFDLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQztZQUNsRixjQUFjLENBQUMsZ0JBQWdCLEdBQUcsY0FBYyxDQUFDLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQztZQUNqRixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2pELFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxXQUFXLEdBQUcsbUJBQW1CLENBQUMsQ0FBQztTQUMvRjthQUFNO1lBQ0g7O2VBRUc7WUFFSDs7ZUFFRztZQUNILElBQUksdUJBQXVCLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2pELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLEVBQUU7Z0JBQzFELEdBQUcsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLHVCQUF1QixDQUFDLENBQUM7YUFDMUQ7WUFDRCxnQkFBZ0I7WUFDaEIsSUFBSSxrQkFBa0IsR0FBRyxpQkFBaUIsQ0FBQztZQUMzQyxJQUFJLGNBQWMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDekUsSUFBSSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3RELG9CQUFvQixDQUFDLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQztZQUNyRCxvQkFBb0IsQ0FBQyxpQkFBaUIsR0FBRyxvQkFBb0IsQ0FBQyxVQUFVLEdBQUcsa0JBQWtCLENBQUM7WUFDOUYsb0JBQW9CLENBQUMsZ0JBQWdCLEdBQUcsb0JBQW9CLENBQUMsVUFBVSxHQUFHLGtCQUFrQixDQUFDO1lBRTdGLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUN2RCxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsdUJBQXVCLEdBQUcsbUJBQW1CLENBQUMsQ0FBQztTQUMzRztRQUNELEVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDdkMsSUFBSSxTQUFTLEVBQUU7WUFDWCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7SUFFTCxDQUFDO0lBNVREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7NkNBQ0k7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztrREFDUztJQVMvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO29EQUNXO0lBZmIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWlVOUI7SUFBRCxpQkFBQztDQWpVRCxBQWlVQyxDQWpVdUMsRUFBRSxDQUFDLFNBQVMsR0FpVW5EO2tCQWpVb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxsb3dvcmxkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICAvKirmmL7npLrmm7TmlrDkv6Hmga8gKi9cbiAgICBAcHJvcGVydHkoY2MuUmljaFRleHQpXG4gICAgbGFiZWw6IGNjLlJpY2hUZXh0ID0gbnVsbDtcbiAgICAvKirlvZPliY3niYjmnKzkv6Hmga8gKi9cbiAgICBAcHJvcGVydHkoY2MuUmljaFRleHQpXG4gICAgdmVyc2lvblN0cjogY2MuUmljaFRleHQgPSBudWxsO1xuICAgIC8qKui/nOeoi+eJiOacrOi1hOa6kOe8k+WtmOi3r+W+hCAqL1xuICAgIHN0b3JhZ2VQYXRoOiBzdHJpbmcgPSBcIlwiO1xuICAgIC8qKui1hOa6kOeuoeeQhiAqL1xuICAgIGFtOiBqc2IuQXNzZXRzTWFuYWdlciA9IG51bGw7XG4gICAgLyoq5pu05paw54q25oCBICovXG4gICAgdXBkYXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKirniYjmnKzotYTmupDkv6Hmga/mlofku7YgKi9cbiAgICBAcHJvcGVydHkoY2MuQXNzZXQpXG4gICAgbWFpbmlmZXN0VXJsOiBjYy5Bc3NldCA9IG51bGw7XG4gICAgLyoq6L+c56iL54mI5pysICovXG4gICAgcHJpdmF0ZSByZW1vdGVWZXJzaW9uOiBzdHJpbmcgPSBcIlwiO1xuICAgIC8qKueDreabtOWQjueahOaQnOe0oui3r+W+hCAqL1xuICAgIHByaXZhdGUgSG90VXBkYXRlU2VhcmNoUGF0aHM6IHN0cmluZyA9IFwiSG90VXBkYXRlU2VhcmNoUGF0aHNcIjtcbiAgICAvKirov5znqIvotYTmupDnvJPlrZjot6/lvoQgKi9cbiAgICBwcml2YXRlIHJlbW90ZVBhdGg6IHN0cmluZyA9IFwicmVtb3RlUGF0aFwiO1xuICAgIHByaXZhdGUgY3VyVmVyc2lvbjogc3RyaW5nID0gXCJjdXJWZXJzaW9uXCI7XG4gICAgc3RhcnQoKSB7XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY3VyVmVyc2lvblwiKVxuICAgICAgICB0aGlzLnZlcnNpb25TdHIuc3RyaW5nID0gdGhpcy5nZXRDdXJWZXNpb24oKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlUGF0aCA9IHRoaXMuZ2V0Um9vdFBhdGgoKTtcbiAgICAgICAgY2MubG9nKCfov5znqIvniYjmnKznvJPlrZjot6/lvoQgOiAnICsgdGhpcy5zdG9yYWdlUGF0aCk7XG4gICAgICAgIHRoaXMuYW0gPSBuZXcganNiLkFzc2V0c01hbmFnZXIoJycsIHRoaXMuc3RvcmFnZVBhdGgsIHRoaXMudmVyc2lvbkNvbXBhcmVIYW5sZSk7XG4gICAgICAgIHRoaXMuYW0uc2V0VmVyaWZ5Q2FsbGJhY2sodGhpcy5zZXRWZXJpZnljYi5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBzZXRWZXJpZnljYihwYXRoLCBhc3NldCkge1xuICAgICAgICBsZXQgY29tcHJlc3NlZCA9IGFzc2V0LmNvbXByZXNzZWQ7XG4gICAgICAgIGxldCBleHBlY3RlZE1ENSA9IGFzc2V0Lm1kNTtcbiAgICAgICAgbGV0IHJlbGF0aXZlUGF0aCA9IGFzc2V0LnBhdGg7XG4gICAgICAgIGxldCBzaXplID0gYXNzZXQuc2l6ZTtcbiAgICAgICAgY2MubG9nKFwiYXNzZXRQYXRoXCIsIHBhdGgpXG4gICAgICAgIGNjLmxvZyhcImFzc2V0U2l6ZTpcIiwgc2l6ZSk7XG4gICAgICAgIGlmIChjb21wcmVzc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IFwi5qOA5p+l5Y6L57ypIDogXCIgKyByZWxhdGl2ZVBhdGg7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCLmo4Dmn6XljovnvKkgOiBcIiArIHJlbGF0aXZlUGF0aCArICcgKCcgKyBleHBlY3RlZE1ENSArICcpJztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKuavlOi+g+eJiOacrCDniYjmnKzkuI3lkIzliJnmm7TmlrAqL1xuICAgIHZlcnNpb25Db21wYXJlSGFubGUodmVyc2lvbkE6IHN0cmluZywgdmVyc2lvbkI6IHN0cmluZykge1xuICAgICAgICBjb25zb2xlLmxvZyhg5b2T5YmN54mI5pysIDogICR7dmVyc2lvbkF9ICwg6L+c56iL54mI5pysIDogJHt2ZXJzaW9uQn1gKTtcbiAgICAgICAgbGV0IHZBID0gdmVyc2lvbkEuc3BsaXQoJy4nKTtcbiAgICAgICAgbGV0IHZCID0gdmVyc2lvbkIuc3BsaXQoJy4nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2QS5sZW5ndGggJiYgaSA8IHZCLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgYSA9IHBhcnNlSW50KHZBW2ldKTtcbiAgICAgICAgICAgIGxldCBiID0gcGFyc2VJbnQodkJbaV0pO1xuICAgICAgICAgICAgaWYgKGEgPT09IGIpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodkIubGVuZ3RoID4gdkEubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIG9uQ2xpY2tUZXN0KCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25DbGlja1Rlc3Q9PT09PT09PT09PT09PT09PT09PT09PT09MFwiKVxuICAgIH1cbiAgICBjaGVja1VwZGF0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVja1VwZGF0ZT09PT09PT09PT09PT09PT09PT09PT09PT0wXCIpXG4gICAgICAgIGlmICh0aGlzLnVwZGF0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVja1VwZGF0ZT09PT09PT09PT09PT09PT09PT09PT09PT0xXCIpXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLm1haW5pZmVzdFVybC5uYXRpdmVVcmw7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tVcGRhdGU9PT09PT09PT09PT09PT09PT09PT09PT09MlwiKVxuICAgICAgICBjYy5sb2coXCLljp/ljIXniYjmnKzkv6Hmga91cmw6XCIsIHRoaXMubWFpbmlmZXN0VXJsLm5hdGl2ZVVybClcbiAgICAgICAgaWYgKHRoaXMuYW0uZ2V0U3RhdGUoKSA9PT0ganNiLkFzc2V0c01hbmFnZXIuU3RhdGUuVU5JTklURUQpIHtcbiAgICAgICAgICAgIGlmIChjYy5sb2FkZXIubWQ1UGlwZSkge1xuICAgICAgICAgICAgICAgIHVybCA9IGNjLmxvYWRlci5tZDVQaXBlLnRyYW5zZm9ybVVSTCh1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGVja1VwZGF0ZT09PT09PT09PT09PT09PT09PT09PT09PT0zXCIpXG4gICAgICAgICAgICB0aGlzLmFtLmxvYWRMb2NhbE1hbmlmZXN0KHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmFtLmdldExvY2FsTWFuaWZlc3QoKSB8fCAhdGhpcy5hbS5nZXRMb2NhbE1hbmlmZXN0KCkuaXNMb2FkZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAn5Yqg6L295pys5ZywbWFuaWZlc3Tmlofku7blpLHotKUnO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGVja1VwZGF0ZT09PT09PT09PT09PT09PT09PT09PT09PT00XCIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbS5zZXRFdmVudENhbGxiYWNrKHRoaXMuY2hlY2tDYi5iaW5kKHRoaXMpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVja1VwZGF0ZT09PT09PT09PT09PT09PT09PT09PT09PT01XCIpXG4gICAgICAgIHRoaXMuYW0uY2hlY2tVcGRhdGUoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVja1VwZGF0ZT09PT09PT09PT09PT09PT09PT09PT09PT02XCIpXG4gICAgICAgIHRoaXMudXBkYXRpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIGNoZWNrQ2IoZXZlbnQpIHtcbiAgICAgICAgY2MubG9nKCdDb2RlOiAnICsgZXZlbnQuZ2V0RXZlbnRDb2RlKCkpO1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmdldEV2ZW50Q29kZSgpKSB7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuRVJST1JfTk9fTE9DQUxfTUFOSUZFU1Q6XG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIuayoeacieacrOWcsG1hbmlmZXN05paH5Lu277yM6Lez6L+H54Ot5pu0LlwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLkVSUk9SX0RPV05MT0FEX01BTklGRVNUOlxuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLkVSUk9SX1BBUlNFX01BTklGRVNUOlxuICAgICAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCLkuIvovb3ov5znqIttYW5pZmVzdOaWh+S7tuWksei0pe+8jOi3s+i/h+eDreabtC5cIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5BTFJFQURZX1VQX1RPX0RBVEU6XG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIuW3sue7j+abtOaWsOWIsOi/nOeoi+acgOaWsOeJiOacrC5cIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5ORVdfVkVSU0lPTl9GT1VORDpcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICflj5HnjrDmlrDniYjmnKzvvIzor7flsJ3or5Xng63mm7QnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbS5zZXRFdmVudENhbGxiYWNrKG51bGwpO1xuICAgICAgICB0aGlzLnVwZGF0aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaG90VXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5hbSAmJiAhdGhpcy51cGRhdGluZykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJob3RVcGRhdGU9PT09PT09PT09PT09PT09PT1cIilcbiAgICAgICAgICAgIHRoaXMuYW0uc2V0RXZlbnRDYWxsYmFjayh0aGlzLnVwZGF0ZUNiLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYW0uZ2V0U3RhdGUoKSA9PT0ganNiLkFzc2V0c01hbmFnZXIuU3RhdGUuVU5JTklURUQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhvdFVwZGF0ZT09PT09PT09PT09PT09PT09PTFcIilcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gdGhpcy5tYWluaWZlc3RVcmwubmF0aXZlVXJsO1xuICAgICAgICAgICAgICAgIGlmIChjYy5sb2FkZXIubWQ1UGlwZSkge1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSBjYy5sb2FkZXIubWQ1UGlwZS50cmFuc2Zvcm1VUkwodXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5hbS5sb2FkTG9jYWxNYW5pZmVzdCh1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hbS51cGRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlQ2IoZXZlbnQpIHtcbiAgICAgICAgY2MubG9nKFwi54Ot5pu05Zue6LCDXCIpXG4gICAgICAgIHZhciBuZWVkUmVzdGFydCA9IGZhbHNlO1xuICAgICAgICB2YXIgZmFpbGVkID0gZmFsc2U7XG4gICAgICAgIGxldCBtbSA9IGV2ZW50LmdldE1lc3NhZ2UoKTtcbiAgICAgICAgaWYgKG1tKSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdVcGRhdGVkIGZpbGU6ICcgKyBtbTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmdldEV2ZW50Q29kZSgpKSB7XG5cbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5FUlJPUl9OT19MT0NBTF9NQU5JRkVTVDpcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICfmsqHmnInmnKzlnLBtYW5pZmVzdOaWh+S7tu+8jOi3s+i/h+eDreabtC4nO1xuICAgICAgICAgICAgICAgIGZhaWxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuVVBEQVRFX1BST0dSRVNTSU9OOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5b2T5YmN5LiL6L295paH5Lu25pWwXCIsIGV2ZW50LmdldERvd25sb2FkZWRGaWxlcygpKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5oC75paH5Lu25pWwXCIsIGV2ZW50LmdldFRvdGFsRmlsZXMoKSlcbiAgICAgICAgICAgICAgICB2YXIgbXNnID0gZXZlbnQuZ2V0TWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgIGlmIChtc2cpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAn5pu05paw55qE5paH5Lu277yaOiAnICsgbXNnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5FUlJPUl9ET1dOTE9BRF9NQU5JRkVTVDpcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5FUlJPUl9QQVJTRV9NQU5JRkVTVDpcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICfkuIvovb3ov5znqIttYW5pZmVzdOaWh+S7tuWksei0pe+8jOi3s+i/h+eDreabtC4nO1xuICAgICAgICAgICAgICAgIGZhaWxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuQUxSRUFEWV9VUF9UT19EQVRFOlxuICAgICAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ+W3sue7j+abtOaWsOWIsOi/nOeoi+acgOaWsOeJiOacrC4nO1xuICAgICAgICAgICAgICAgIGZhaWxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuVVBEQVRFX0ZJTklTSEVEOlxuICAgICAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJ+abtOaWsOWujOaIkO+8jOWNs+WwhumHjeWQr+a4uOaIjy4gJyArIGV2ZW50LmdldE1lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICBuZWVkUmVzdGFydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuVVBEQVRFX0ZBSUxFRDpcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICfmm7TmlrDlpLHotKUuICcgKyBldmVudC5nZXRNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuX2NhblJldHJ5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5FUlJPUl9VUERBVElORzpcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9ICdBc3NldCDmm7TmlrDplJnor686ICcgKyBldmVudC5nZXRBc3NldElkKCkgKyAnLCAnICsgZXZlbnQuZ2V0TWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLkVSUk9SX0RFQ09NUFJFU1M6XG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBldmVudC5nZXRNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoZmFpbGVkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLyoq6YeN5ZCv5ri45oiP77yM5bm25oqK57yT5a2Y6LWE5rqQ6Lev5b6E5YmN572u5Yiw5pCc57Si6Lev5b6EICovXG4gICAgICAgIGlmIChuZWVkUmVzdGFydCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdGVWZXJzaW9uID0gdGhpcy5nZXRSZW1vdGVWZXJzaW9uKCk7XG4gICAgICAgICAgICBjYy5sb2coXCJyZW1vdGV2ZXJzaW9uOlwiLCB0aGlzLnJlbW90ZVZlcnNpb24pXG4gICAgICAgICAgICB0aGlzLmFtLnNldEV2ZW50Q2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICBsZXQgc2VhcmNoUGF0aHMgPSBqc2IuZmlsZVV0aWxzLmdldFNlYXJjaFBhdGhzKCk7XG4gICAgICAgICAgICBsZXQgbmV3UGF0aHMgPSB0aGlzLmFtLmdldExvY2FsTWFuaWZlc3QoKS5nZXRTZWFyY2hQYXRocygpO1xuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQoc2VhcmNoUGF0aHMsIG5ld1BhdGhzKTtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLkhvdFVwZGF0ZVNlYXJjaFBhdGhzLCBKU09OLnN0cmluZ2lmeShzZWFyY2hQYXRocykpO1xuICAgICAgICAgICAganNiLmZpbGVVdGlscy5zZXRTZWFyY2hQYXRocyhzZWFyY2hQYXRocyk7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5jdXJWZXJzaW9uLCB0aGlzLnJlbW90ZVZlcnNpb24pXG4gICAgICAgICAgICBjYy5nYW1lLnJlc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlcnNpb25TdHIuc3RyaW5nID0gdGhpcy5nZXRDdXJWZXNpb24oKTtcbiAgICB9XG5cbiAgICBnZXRSZW1vdGVWZXJzaW9uKCkge1xuICAgICAgICBsZXQgc3RvcmFnZVBhdGggPSB0aGlzLmdldFJvb3RQYXRoKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5pyJ5LiL6L2955qEbWFuaWZlc3Tmlofku7ZcIiwgc3RvcmFnZVBhdGgpO1xuICAgICAgICBsZXQgbG9hZE1hbmlmZXN0ID0ganNiLmZpbGVVdGlscy5nZXRTdHJpbmdGcm9tRmlsZShzdG9yYWdlUGF0aCArICcvcHJvamVjdC5tYW5pZmVzdCcpO1xuICAgICAgICBsZXQgbWFuaWZlc3RPYmplY3QgPSBKU09OLnBhcnNlKGxvYWRNYW5pZmVzdCk7XG4gICAgICAgIHJldHVybiBtYW5pZmVzdE9iamVjdC52ZXJzaW9uO1xuICAgIH1cblxuICAgIC8qKuiOt+WPlue8k+WtmOi3r+W+hCAqL1xuICAgIGdldFJvb3RQYXRoKCkge1xuICAgICAgICByZXR1cm4gKChqc2IuZmlsZVV0aWxzID8ganNiLmZpbGVVdGlscy5nZXRXcml0YWJsZVBhdGgoKSA6ICcvJykgKyB0aGlzLnJlbW90ZVBhdGgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bniYjmnKzlj7dcbiAgICAgKiDlpoLmnpzlt7LlrZjmnInniYjmnKzlj7fliJnnm7TmjqXov5Tlm57vvIzlpoLmnpzmsqHmnInliJnlnKjmnKzlnLBtYW5pZmVzdOaWh+S7tuS4reWPlueJiOacrOWPt++8m1xuICAgICAqL1xuICAgIGdldEN1clZlc2lvbigpIHtcbiAgICAgICAgbGV0IGN1cnZlcnNpb24gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5jdXJWZXJzaW9uKTtcbiAgICAgICAgY2MubG9nKFwiY3VydmVyc2lvblwiLCBjdXJ2ZXJzaW9uKVxuICAgICAgICBpZiAoY3VydmVyc2lvbikgcmV0dXJuIGN1cnZlcnNpb25cbiAgICAgICAgbGV0IHN0b3JhZ2VQYXRoID0gdGhpcy5nZXRSb290UGF0aCgpO1xuICAgICAgICBzdG9yYWdlUGF0aCA9IHRoaXMubWFpbmlmZXN0VXJsLm5hdGl2ZVVybDtcbiAgICAgICAgaWYgKHN0b3JhZ2VQYXRoKSB7XG4gICAgICAgICAgICBsZXQgbG9hZE1hbmlmZXN0ID0ganNiLmZpbGVVdGlscy5nZXRTdHJpbmdGcm9tRmlsZShzdG9yYWdlUGF0aCk7XG4gICAgICAgICAgICBsZXQgbWFuaWZlc3RPYmplY3QgPSBKU09OLnBhcnNlKGxvYWRNYW5pZmVzdCk7XG4gICAgICAgICAgICBjdXJ2ZXJzaW9uID0gbWFuaWZlc3RPYmplY3QudmVyc2lvbjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5b2T5YmN54mI5pys5Y+3b3JpZ2lu77yaXCIsIGN1cnZlcnNpb24pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnZlcnNpb247XG4gICAgfVxuXG5cbiAgICAvKirojrflj5bov5znqIvliqjmgIEgdXJs5ZKM54mI5pys5Y+3IO+8jOeJiOacrOWPt+ebuOWQjO+8jOebtOaOpei/m+WFpea4uOaIj++8jOWQpuWImemHjeaWsOiuvue9rnByb2plY3QubWFuaWZlc3TlnLDlnYDmlbDmja4g54S25ZCO5pu05pawICovXG4gICAgY29uZmlnVXBkYXRlKCkge1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJjdXJWZXJzaW9uXCIpXG4gICAgICAgIGxldCBjdXJWZXJzaW9uID0gdGhpcy5nZXRDdXJWZXNpb24oKTtcbiAgICAgICAgbGV0IHJlbW90ZVZlcnNpb24gPSBcIjEuMC4wXCJcbiAgICAgICAgLy8g5aSn54mI5pys5Y+3XG4gICAgICAgIC8vIGN1clZlcnNpb27nrKzkuIDkuKrmlbDlrZfkuLrkuLvniYjmnKzlj7fvvIzlpoLmnpzlpKfniYjmnKzlpKfkuo7mnKzlnLDniYjmnKzliJnph43mlrDkuIvovb3ljIXvvIjlpKfniYjmnKzmm7TmlrDpg6jliIbvvIlcbiAgICAgICAgbGV0IGN1ck1haW5JZCA9IDFcbiAgICAgICAgbGV0IGJpZ1ZlcnNpb24gPSAxXG4gICAgICAgIGlmIChiaWdWZXJzaW9uID4gY3VyTWFpbklkKSB7XG4gICAgICAgICAgICBsZXQgcm9vdHBhdGggPSB0aGlzLmdldFJvb3RQYXRoKCk7XG4gICAgICAgICAgICAvL+WIoOaOieS5i+WJjeWkp+eJiOacrOeahOe8k+WtmOi3r+W+hFxuICAgICAgICAgICAganNiLmZpbGVVdGlscy5yZW1vdmVEaXJlY3Rvcnkocm9vdHBhdGgpO1xuICAgICAgICAgICAgLy/muIXpmaTnvJPlrZjnmoTniYjmnKzlj7cg5ZKMIOeJiOacrOi3r+W+hFxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY3VydmVyc2lvblwiKTtcbiAgICAgICAgICAgIGxldCBwYWNrYWdlVXJsID0gXCJhcGsvYXBp5Zyw5Z2AXCI7XG4gICAgICAgICAgICBjYy5zeXMub3BlblVSTChwYWNrYWdlVXJsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvL+S4i+mdouaYryDotYTmupDnmoTmm7TmlrDmo4Dmn6XvvIjlsI/niYjmnKzmm7TmlrDpg6jliIbvvIlcbiAgICAgICAgbGV0IG5lZWRjaGVjayA9IHRoaXMudmVyc2lvbkNvbXBhcmVIYW5sZShjdXJWZXJzaW9uLCByZW1vdGVWZXJzaW9uKTtcbiAgICAgICAgLy8g5pys5Zyw54mI5pys5ZKM6L+c56iL54mI5pysIOebuOWQjOebtOaOpei3s+i9rOeZu+mZhiwg6L+Z6YeMIOWKoOWIpOaWreaYr+S4uuS6hiDpmLLmraLmr4/mrKHpg73kuIvovb0gbWFuaWZlc3Tmlofku7ZcbiAgICAgICAgaWYgKG5lZWRjaGVjayA9PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWwj+eJiOacrOebuOWQjCDov5vlhaXnmbvpmYbnlYzpnaJcIilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvL+aLvOaOpei/nOeoi+i1hOa6kOeahOS4i+i9veWcsOWdgFxuICAgICAgICBsZXQgc2NyaXB0dXJsID0gXCLov5znqIvmnI3liqHlmajlnLDlnYBcIlxuICAgICAgICB0aGlzLl9tb2RpZnlBcHBMb2FkVXJsRm9yTWFuaWZlc3RGaWxlKHNjcmlwdHVybCwgdGhpcy5tYWluaWZlc3RVcmwubmF0aXZlVXJsKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiDkv67mlLkubWFuaWZlc3Tmlofku7Ys5aaC5p6c5pyJ57yT5a2Y5YiZ5q+U6L6D57yT5a2Y55qE54mI5pys5ZKM5bqU55So5YyF55qE54mI5pys77yM5Y+W6L6D6auY6ICFIOeDreabtO+8jOWmguaenOayoeaciee8k+WtmOWImeS4i+i9vei/nOeoi+eahOeJiOacrOaWh+S7tiDlj5bniYjmnKzlj7fvvIzov5nph4znu5/kuIDkv67mlLnlnLDlnYDkuLpcbiAgICAqIOi/nOeoi+WcsOWdgO+8jOS4jeeuoSDlpoLkvZXlj5jljJYg6YO95piv5LuO5pyA5paw55qE5Zyw5Z2A5LiL6L2954mI5pys5paH5Lu244CC6L+Z6YeM6L+c56iLXG4gICAgKiBAcGFyYW0ge+aWsOeahOWNh+e6p+WMheWcsOWdgH0gbmV3QXBwSG90VXBkYXRlVXJsXG4gICAgKiBAcGFyYW0ge+acrOWcsHByb2plY3QubWFuaWZlc3Tmlofku7blnLDlnYB9IGxvY2FsTWFuaWZlc3RQYXRoXG4gICAgKi9cbiAgICBfbW9kaWZ5QXBwTG9hZFVybEZvck1hbmlmZXN0RmlsZShuZXdBcHBIb3RVcGRhdGVVcmwsIGxvY2FsTWFuaWZlc3RQYXRoKSB7XG4gICAgICAgIGxldCBpc1dyaXR0ZW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKGpzYi5maWxlVXRpbHMuaXNGaWxlRXhpc3QoanNiLmZpbGVVdGlscy5nZXRXcml0YWJsZVBhdGgoKSArICdwbGFuZS9wcm9qZWN0Lm1hbmlmZXN0JykpIHtcbiAgICAgICAgICAgIGxldCBzdG9yYWdlUGF0aCA9IHRoaXMuZ2V0Um9vdFBhdGgoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pyJ5LiL6L2955qEbWFuaWZlc3Tmlofku7ZcIiwgc3RvcmFnZVBhdGgpO1xuICAgICAgICAgICAgbGV0IGxvYWRNYW5pZmVzdCA9IGpzYi5maWxlVXRpbHMuZ2V0U3RyaW5nRnJvbUZpbGUoc3RvcmFnZVBhdGggKyAnL3Byb2plY3QubWFuaWZlc3QnKTtcbiAgICAgICAgICAgIGxldCBtYW5pZmVzdE9iamVjdCA9IEpTT04ucGFyc2UobG9hZE1hbmlmZXN0KTtcbiAgICAgICAgICAgIG1hbmlmZXN0T2JqZWN0LnBhY2thZ2VVcmwgPSBuZXdBcHBIb3RVcGRhdGVVcmw7XG4gICAgICAgICAgICBtYW5pZmVzdE9iamVjdC5yZW1vdGVNYW5pZmVzdFVybCA9IG1hbmlmZXN0T2JqZWN0LnBhY2thZ2VVcmwgKyBcInByb2plY3QubWFuaWZlc3RcIjtcbiAgICAgICAgICAgIG1hbmlmZXN0T2JqZWN0LnJlbW90ZVZlcnNpb25VcmwgPSBtYW5pZmVzdE9iamVjdC5wYWNrYWdlVXJsICsgXCJ2ZXJzaW9uLm1hbmlmZXN0XCI7XG4gICAgICAgICAgICBsZXQgYWZ0ZXJTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShtYW5pZmVzdE9iamVjdCk7XG4gICAgICAgICAgICBpc1dyaXR0ZW4gPSBqc2IuZmlsZVV0aWxzLndyaXRlU3RyaW5nVG9GaWxlKGFmdGVyU3RyaW5nLCBzdG9yYWdlUGF0aCArICcvcHJvamVjdC5tYW5pZmVzdCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDmiafooYzliLDov5nph4zor7TmmI5BcHDkuYvliY3msqHmnInov5vooYzov4fng63mm7TvvIzmiYDku6XkuI3lrZjlnKjng63mm7TnmoRwbGFuZeaWh+S7tuWkueOAglxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogcGxhbmXmlofku7blpLnkuI3lrZjlnKjnmoTml7blgJnvvIzmiJHku6zlsLHkuLvliqjliJvlu7rigJxwbGFuZeKAneaWh+S7tuWkue+8jOW5tuWwhuaJk+WMheaXtuWAmeeahHByb2plY3QubWFuaWZlc3Tmlofku7bkuK3ljYfnuqfljIXlnLDlnYDkv67mlLnlkI7vvIzlrZjmlL7liLDigJxwbGFuZeKAneaWh+S7tuWkueS4i+mdouOAglxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBsZXQgaW5pdGlhbGl6ZWRNYW5pZmVzdFBhdGggPSB0aGlzLmdldFJvb3RQYXRoKCk7XG4gICAgICAgICAgICBpZiAoIWpzYi5maWxlVXRpbHMuaXNEaXJlY3RvcnlFeGlzdChpbml0aWFsaXplZE1hbmlmZXN0UGF0aCkpIHtcbiAgICAgICAgICAgICAgICBqc2IuZmlsZVV0aWxzLmNyZWF0ZURpcmVjdG9yeShpbml0aWFsaXplZE1hbmlmZXN0UGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL+S/ruaUueWOn+Wni21hbmlmZXN05paH5Lu2XG4gICAgICAgICAgICBsZXQgb3JpZ2luTWFuaWZlc3RQYXRoID0gbG9jYWxNYW5pZmVzdFBhdGg7XG4gICAgICAgICAgICBsZXQgb3JpZ2luTWFuaWZlc3QgPSBqc2IuZmlsZVV0aWxzLmdldFN0cmluZ0Zyb21GaWxlKG9yaWdpbk1hbmlmZXN0UGF0aCk7XG4gICAgICAgICAgICBsZXQgb3JpZ2luTWFuaWZlc3RPYmplY3QgPSBKU09OLnBhcnNlKG9yaWdpbk1hbmlmZXN0KTtcbiAgICAgICAgICAgIG9yaWdpbk1hbmlmZXN0T2JqZWN0LnBhY2thZ2VVcmwgPSBuZXdBcHBIb3RVcGRhdGVVcmw7XG4gICAgICAgICAgICBvcmlnaW5NYW5pZmVzdE9iamVjdC5yZW1vdGVNYW5pZmVzdFVybCA9IG9yaWdpbk1hbmlmZXN0T2JqZWN0LnBhY2thZ2VVcmwgKyAncHJvamVjdC5tYW5pZmVzdCc7XG4gICAgICAgICAgICBvcmlnaW5NYW5pZmVzdE9iamVjdC5yZW1vdGVWZXJzaW9uVXJsID0gb3JpZ2luTWFuaWZlc3RPYmplY3QucGFja2FnZVVybCArICd2ZXJzaW9uLm1hbmlmZXN0JztcblxuICAgICAgICAgICAgbGV0IGFmdGVyU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkob3JpZ2luTWFuaWZlc3RPYmplY3QpO1xuICAgICAgICAgICAgaXNXcml0dGVuID0ganNiLmZpbGVVdGlscy53cml0ZVN0cmluZ1RvRmlsZShhZnRlclN0cmluZywgaW5pdGlhbGl6ZWRNYW5pZmVzdFBhdGggKyAnL3Byb2plY3QubWFuaWZlc3QnKTtcbiAgICAgICAgfVxuICAgICAgICBjYy5sb2coXCJXcml0dGVuIFN0YXR1cyA6IFwiLCBpc1dyaXR0ZW4pO1xuICAgICAgICBpZiAoaXNXcml0dGVuKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrVXBkYXRlKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIl19