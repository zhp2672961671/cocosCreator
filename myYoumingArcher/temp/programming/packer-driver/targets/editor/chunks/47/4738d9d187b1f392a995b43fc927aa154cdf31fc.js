System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, sys, log, Util, _dec, _class, _class2, _crd, ccclass, property, StorageManager;

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "./util", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      sys = _cc.sys;
      log = _cc.log;
    }, function (_unresolved_2) {
      Util = _unresolved_2.Util;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5689348bSJGyYo12WGa6eeJ", "storageManager", undefined);

      __checkObsolete__(['_decorator', 'sys', 'log']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StorageManager", StorageManager = (_dec = ccclass("StorageManager"), _dec(_class = (_class2 = class StorageManager {
        constructor() {
          this._path = null;
          this._keyConfig = 'archero';
          this._markSave = false;
          this._saveTimer = -1;
          this.jsonData = {};
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new StorageManager();

          this._instance.start();

          return this._instance;
        }

        start() {
          this.jsonData = {
            "userId": ""
          };
          this._path = this._getConfigPath();
          var content;

          if (sys.isNative) {
            var valueObject = jsb.fileUtils.getValueMapFromFile(this._path);
            content = valueObject[this._keyConfig];
          } else {
            content = sys.localStorage.getItem(this._keyConfig);
          } // // ????????????
          // if (cc.game.config["encript"]) {
          //     var newContent = new Xxtea("upgradeHeroAbility").xxteaDecrypt(content);
          //     if (newContent && newContent.length > 0) {
          //         content = newContent;
          //     }
          // }


          if (content && content.length) {
            if (content.startsWith('@')) {
              content = content.substring(1);
              content = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
                error: Error()
              }), Util) : Util).decrypt(content);
            }

            try {
              //???????????????
              var jsonData = JSON.parse(content);
              this.jsonData = jsonData;
            } catch (excepaiton) {}
          } //???????????????????????????1???????????????????????????????????????????????????
          // this._saveTimer = setInterval(() =>{
          //     this.scheduleSave();
          // }, 500);
          //??????5????????????????????????????????????????????????????????????????????????????????????????????????


          this._saveTimer = setInterval(() => {
            this.scheduleSave();
          }, 5000);
        }
        /**
         * ???????????????????????????????????????
         * @param {string}key  ?????????
         * @param {any}value  ?????????
         */


        setConfigDataWithoutSave(key, value) {
          let account = this.jsonData.userId;

          if (this.jsonData[account]) {
            this.jsonData[account][key] = value;
          } else {
            console.error("no account can not save");
          }
        }
        /**
           * ????????????????????????????????????
           * @param {string}key  ?????????
           * @param {any}value  ?????????
           */


        setConfigData(key, value) {
          this.setConfigDataWithoutSave(key, value);
          this._markSave = true; //????????????????????????????????????????????????????????????????????????????????????
        }
        /**
         * ???????????????????????????
         * @param {string} key ?????????
         * @returns 
         */


        getConfigData(key) {
          let account = this.jsonData.userId;

          if (this.jsonData[account]) {
            var value = this.jsonData[account][key];
            return value ? value : "";
          } else {
            log("no account can not load");
            return "";
          }
        }
        /**
         * ??????????????????
         * @param {string} key ?????????
         * @param {any}value  ?????????
         * @returns 
         */


        setGlobalData(key, value) {
          this.jsonData[key] = value;
          this.save();
        }
        /**
         * ??????????????????
         * @param {string} key ?????????
         * @returns 
         */


        getGlobalData(key) {
          return this.jsonData[key];
        }
        /**
         * ???????????????????????????
         * @param {string} userId ?????????????????????
         * @param {any}value  ?????????
         * @returns 
         */


        setUserId(userId) {
          this.jsonData.userId = userId;

          if (!this.jsonData[userId]) {
            this.jsonData[userId] = {};
          }

          this.save();
        }
        /**
         * ???????????????????????????
         * @returns {string}
         */


        getUserId() {
          return this.jsonData.userId;
        }
        /**
         * ????????????
         * @returns 
         */


        scheduleSave() {
          if (!this._markSave) {
            return;
          }

          this.save();
        }
        /**
         * ??????????????????
         */


        markModified() {
          this._markSave = true;
        }
        /**
         * ??????????????????
         * @returns 
         */


        save() {
          // ????????????
          var str = JSON.stringify(this.jsonData); // // ????????????
          // if (cc.game.config["encript"]) {
          //     str = new Xxtea("upgradeHeroAbility").xxteaEncrypt(str);
          // }

          let zipStr = '@' + (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).encrypt(str); // let zipStr = str;

          this._markSave = false;

          if (!sys.isNative) {
            var ls = sys.localStorage;
            ls.setItem(this._keyConfig, zipStr);
            return;
          }

          var valueObj = {};
          valueObj[this._keyConfig] = zipStr; //@ts-ignore

          jsb.fileUtils.writeToFile(valueObj, this._getConfigPath());
        }
        /**
         * ????????????????????????
         * @returns ????????????????????????
         */


        _getConfigPath() {
          let platform = sys.platform;
          let path = "";

          if (platform === sys.OS.WINDOWS) {
            path = "src/conf";
          } else if (platform === sys.OS.LINUX) {
            path = "./conf";
          } else {
            if (sys.isNative) {
              path = jsb.fileUtils.getWritablePath();
              path = path + "conf";
            } else {
              path = "src/conf";
            }
          }

          return path;
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4738d9d187b1f392a995b43fc927aa154cdf31fc.js.map