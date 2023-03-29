const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {
    /**显示更新信息 */
    @property(cc.RichText)
    label: cc.RichText = null;
    /**当前版本信息 */
    @property(cc.RichText)
    versionStr: cc.RichText = null;
    /**远程版本资源缓存路径 */
    storagePath: string = "";
    /**资源管理 */
    am: jsb.AssetsManager = null;
    /**更新状态 */
    updating: boolean = false;
    /**版本资源信息文件 */
    @property(cc.Asset)
    mainifestUrl: cc.Asset = null;
    /**远程版本 */
    private remoteVersion: string = "";
    /**热更后的搜索路径 */
    private HotUpdateSearchPaths: string = "HotUpdateSearchPaths";
    /**远程资源缓存路径 */
    private remotePath: string = "remotePath";
    private curVersion: string = "curVersion";
    start() {
    }
    onLoad() {
        cc.sys.localStorage.removeItem("curVersion")
        this.versionStr.string = this.getCurVesion();
        this.storagePath = this.getRootPath();
        cc.log('远程版本缓存路径 : ' + this.storagePath);
        this.am = new jsb.AssetsManager('', this.storagePath, this.versionCompareHanle);
        this.am.setVerifyCallback(this.setVerifycb.bind(this));
    }

    setVerifycb(path, asset) {
        let compressed = asset.compressed;
        let expectedMD5 = asset.md5;
        let relativePath = asset.path;
        let size = asset.size;
        cc.log("assetPath", path)
        cc.log("assetSize:", size);
        if (compressed) {
            this.label.string = "检查压缩 : " + relativePath;
            return true;
        }
        else {
            this.label.string = "检查压缩 : " + relativePath + ' (' + expectedMD5 + ')';
            return true;
        }
    }
    /**比较版本 版本不同则更新*/
    versionCompareHanle(versionA: string, versionB: string) {
        console.log(`当前版本 :  ${versionA} , 远程版本 : ${versionB}`);
        let vA = versionA.split('.');
        let vB = versionB.split('.');
        for (let i = 0; i < vA.length && i < vB.length; ++i) {
            let a = parseInt(vA[i]);
            let b = parseInt(vB[i]);
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
    }
    onClickTest(){
        console.log("onClickTest=========================0")
    }
    checkUpdate() {
        console.log("checkUpdate=========================0")
        if (this.updating) {
            return;
        }
        console.log("checkUpdate=========================1")
        let url = this.mainifestUrl.nativeUrl;
        console.log("checkUpdate=========================2")
        cc.log("原包版本信息url:", this.mainifestUrl.nativeUrl)
        if (this.am.getState() === jsb.AssetsManager.State.UNINITED) {
            if (cc.loader.md5Pipe) {
                url = cc.loader.md5Pipe.transformURL(url);
            }
            console.log("checkUpdate=========================3")
            this.am.loadLocalManifest(url);
        }
        if (!this.am.getLocalManifest() || !this.am.getLocalManifest().isLoaded()) {
            this.label.string = '加载本地manifest文件失败';
            console.log("checkUpdate=========================4")
            return;
        }
        this.am.setEventCallback(this.checkCb.bind(this));
        console.log("checkUpdate=========================5")
        this.am.checkUpdate();
        console.log("checkUpdate=========================6")
        this.updating = true;
    }

    checkCb(event) {
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
    }

    hotUpdate() {
        if (this.am && !this.updating) {
            console.log("hotUpdate==================")
            this.am.setEventCallback(this.updateCb.bind(this));
            if (this.am.getState() === jsb.AssetsManager.State.UNINITED) {
                console.log("hotUpdate==================1")
                let url = this.mainifestUrl.nativeUrl;
                if (cc.loader.md5Pipe) {
                    url = cc.loader.md5Pipe.transformURL(url);
                }
                this.am.loadLocalManifest(url);
            }
            this.am.update();
            this.updating = true;
        }
    }

    updateCb(event) {
        cc.log("热更回调")
        var needRestart = false;
        var failed = false;
        let mm = event.getMessage();
        if (mm) {
            this.label.string = 'Updated file: ' + mm;
        }
        switch (event.getEventCode()) {

            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                this.label.string = '没有本地manifest文件，跳过热更.';
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                console.log("当前下载文件数", event.getDownloadedFiles())
                console.log("总文件数", event.getTotalFiles())
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
            cc.log("remoteversion:", this.remoteVersion)
            this.am.setEventCallback(null);
            let searchPaths = jsb.fileUtils.getSearchPaths();
            let newPaths = this.am.getLocalManifest().getSearchPaths();
            Array.prototype.unshift(searchPaths, newPaths);
            cc.sys.localStorage.setItem(this.HotUpdateSearchPaths, JSON.stringify(searchPaths));
            jsb.fileUtils.setSearchPaths(searchPaths);
            cc.sys.localStorage.setItem(this.curVersion, this.remoteVersion)
            cc.game.restart();
        }
        this.versionStr.string = this.getCurVesion();
    }

    getRemoteVersion() {
        let storagePath = this.getRootPath();
        console.log("有下载的manifest文件", storagePath);
        let loadManifest = jsb.fileUtils.getStringFromFile(storagePath + '/project.manifest');
        let manifestObject = JSON.parse(loadManifest);
        return manifestObject.version;
    }

    /**获取缓存路径 */
    getRootPath() {
        return ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + this.remotePath);
    }
    /**
     * 获取版本号
     * 如果已存有版本号则直接返回，如果没有则在本地manifest文件中取版本号；
     */
    getCurVesion() {
        let curversion = cc.sys.localStorage.getItem(this.curVersion);
        cc.log("curversion", curversion)
        if (curversion) return curversion
        let storagePath = this.getRootPath();
        storagePath = this.mainifestUrl.nativeUrl;
        if (storagePath) {
            let loadManifest = jsb.fileUtils.getStringFromFile(storagePath);
            let manifestObject = JSON.parse(loadManifest);
            curversion = manifestObject.version;
            console.log("当前版本号origin：", curversion)
        }
        return curversion;
    }


    /**获取远程动态 url和版本号 ，版本号相同，直接进入游戏，否则重新设置project.manifest地址数据 然后更新 */
    configUpdate() {
        cc.sys.localStorage.removeItem("curVersion")
        let curVersion = this.getCurVesion();
        let remoteVersion = "1.0.0"
        // 大版本号
        // curVersion第一个数字为主版本号，如果大版本大于本地版本则重新下载包（大版本更新部分）
        let curMainId = 1
        let bigVersion = 1
        if (bigVersion > curMainId) {
            let rootpath = this.getRootPath();
            //删掉之前大版本的缓存路径
            jsb.fileUtils.removeDirectory(rootpath);
            //清除缓存的版本号 和 版本路径
            cc.sys.localStorage.removeItem("curversion");
            let packageUrl = "apk/api地址";
            cc.sys.openURL(packageUrl);
            return;
        }
        //下面是 资源的更新检查（小版本更新部分）
        let needcheck = this.versionCompareHanle(curVersion, remoteVersion);
        // 本地版本和远程版本 相同直接跳转登陆, 这里 加判断是为了 防止每次都下载 manifest文件
        if (needcheck == 0) {
            console.log("小版本相同 进入登陆界面")
            return;
        }
        //拼接远程资源的下载地址
        let scripturl = "远程服务器地址"
        this._modifyAppLoadUrlForManifestFile(scripturl, this.mainifestUrl.nativeUrl);
    }
    /**
    * 修改.manifest文件,如果有缓存则比较缓存的版本和应用包的版本，取较高者 热更，如果没有缓存则下载远程的版本文件 取版本号，这里统一修改地址为
    * 远程地址，不管 如何变化 都是从最新的地址下载版本文件。这里远程
    * @param {新的升级包地址} newAppHotUpdateUrl
    * @param {本地project.manifest文件地址} localManifestPath
    */
    _modifyAppLoadUrlForManifestFile(newAppHotUpdateUrl, localManifestPath) {
        let isWritten = false;
        if (jsb.fileUtils.isFileExist(jsb.fileUtils.getWritablePath() + 'plane/project.manifest')) {
            let storagePath = this.getRootPath();
            console.log("有下载的manifest文件", storagePath);
            let loadManifest = jsb.fileUtils.getStringFromFile(storagePath + '/project.manifest');
            let manifestObject = JSON.parse(loadManifest);
            manifestObject.packageUrl = newAppHotUpdateUrl;
            manifestObject.remoteManifestUrl = manifestObject.packageUrl + "project.manifest";
            manifestObject.remoteVersionUrl = manifestObject.packageUrl + "version.manifest";
            let afterString = JSON.stringify(manifestObject);
            isWritten = jsb.fileUtils.writeStringToFile(afterString, storagePath + '/project.manifest');
        } else {
            /**
             * 执行到这里说明App之前没有进行过热更，所以不存在热更的plane文件夹。
             */

            /**
             * plane文件夹不存在的时候，我们就主动创建“plane”文件夹，并将打包时候的project.manifest文件中升级包地址修改后，存放到“plane”文件夹下面。
             */
            let initializedManifestPath = this.getRootPath();
            if (!jsb.fileUtils.isDirectoryExist(initializedManifestPath)) {
                jsb.fileUtils.createDirectory(initializedManifestPath);
            }
            //修改原始manifest文件
            let originManifestPath = localManifestPath;
            let originManifest = jsb.fileUtils.getStringFromFile(originManifestPath);
            let originManifestObject = JSON.parse(originManifest);
            originManifestObject.packageUrl = newAppHotUpdateUrl;
            originManifestObject.remoteManifestUrl = originManifestObject.packageUrl + 'project.manifest';
            originManifestObject.remoteVersionUrl = originManifestObject.packageUrl + 'version.manifest';

            let afterString = JSON.stringify(originManifestObject);
            isWritten = jsb.fileUtils.writeStringToFile(afterString, initializedManifestPath + '/project.manifest');
        }
        cc.log("Written Status : ", isWritten);
        if (isWritten) {
            this.checkUpdate();
        }

    }

}
