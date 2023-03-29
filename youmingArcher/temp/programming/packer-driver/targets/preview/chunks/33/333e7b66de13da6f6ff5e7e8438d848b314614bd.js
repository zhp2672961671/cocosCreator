System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Util, _decorator, Component, Constant, LocalConfig, StorageManager, ClientEvent, _dec, _class, _class2, _crd, ccclass, property, PlayerData;

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "./util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "./constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalConfig(extras) {
    _reporterNs.report("LocalConfig", "./localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStorageManager(extras) {
    _reporterNs.report("StorageManager", "./storageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientEvent(extras) {
    _reporterNs.report("ClientEvent", "./clientEvent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Util = _unresolved_2.Util;
    }, function (_unresolved_3) {
      Constant = _unresolved_3.Constant;
    }, function (_unresolved_4) {
      LocalConfig = _unresolved_4.LocalConfig;
    }, function (_unresolved_5) {
      StorageManager = _unresolved_5.StorageManager;
    }, function (_unresolved_6) {
      ClientEvent = _unresolved_6.ClientEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e5927B2lO9C6o5eLg2NmcKB", "playerData", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerData", PlayerData = (_dec = ccclass("PlayerData"), _dec(_class = (_class2 = class PlayerData extends Component {
        constructor() {
          super(...arguments);
          this.serverTime = 0;
          this.localTime = 0;
          this._userId = '';
          this._playerInfo = null;
          this._history = null;
          this._settings = null;
          this._isNewBee = false;
          this._dataVersion = '';
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new PlayerData();
          return this._instance;
        }

        get userId() {
          return this._userId;
        }

        set userId(v) {
          this._userId = v;
        }

        get settings() {
          return this._settings;
        }

        set settings(v) {
          this._settings = v;
        }

        get playerInfo() {
          return this._playerInfo;
        }

        set playerInfo(v) {
          this._playerInfo = v;
        }

        get history() {
          return this._history;
        }

        set history(v) {
          this._history = v;
        }

        get isNewBee() {
          return this._isNewBee;
        }

        set isNewBee(v) {
          this._isNewBee = v;
        } //是否已经解锁完成所有技能


        get isPlayerSkillAllUnlock() {
          var arrSkill = (_crd && LocalConfig === void 0 ? (_reportPossibleCrUseOfLocalConfig({
            error: Error()
          }), LocalConfig) : LocalConfig).instance.getTableArr("playerSkill"); //生命回复技能不在技能列表里面出现，而是在游戏内多次出现，所以减去1

          return this.playerInfo.arrSkill.length === arrSkill.length - 1;
        }
        /**
         * 加上用户数据
         */


        loadGlobalCache() {
          var userId = (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.getUserId();

          if (userId) {
            this._userId = userId;
          }
        }
        /**
         * 加载本地存储数据
         */


        loadFromCache() {
          //读取玩家基础数据
          this._playerInfo = this._loadDataByKey((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).LOCAL_CACHE.PLAYER);
          this._history = this._loadDataByKey((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).LOCAL_CACHE.HISTORY);
          this._settings = this._loadDataByKey((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).LOCAL_CACHE.SETTINGS);
        }
        /**
         * 获取本地存储数据
         * @param {string}keyName 
         * @returns 
         */


        _loadDataByKey(keyName) {
          var ret = {};
          var str = (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.getConfigData(keyName);

          if (str) {
            try {
              ret = JSON.parse(str);
            } catch (e) {
              ret = {};
            }
          }

          return ret;
        }
        /**
         * 创建角色数据
         * @param loginData 
         */


        createPlayerInfo(loginData) {
          this._playerInfo = {
            diamond: 0,
            //钻石总数
            gold: 0,
            //金币数量
            key: 0,
            //钥匙数量
            level: 1,
            //当前层级
            highestLevel: 1,
            //已经解锁的最高层级
            arrSkill: [],
            //已经解锁的玩家技能ID
            createDate: new Date() //记录创建时间

          };
          this._isNewBee = true; //区分新老玩家

          if (loginData) {
            for (var key in loginData) {
              this._playerInfo[key] = loginData[key];
            }
          }

          this.savePlayerInfoToLocalCache();
        }
        /**
         * 生成随机账户
         * @returns
         */


        generateRandomAccount() {
          this.userId = "" + Date.now() + (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).getRandomInt(0, 1000);
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setUserId(this._userId);
        }
        /**
         * 存用户数据
         * @param userId 
         */


        saveAccount(userId) {
          this._userId = userId;
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setUserId(userId);
        }
        /**
         * 保存玩家数据
         */


        savePlayerInfoToLocalCache() {
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setConfigData((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).LOCAL_CACHE.PLAYER, JSON.stringify(this._playerInfo));
        }
        /**
         * 保存玩家设置相关信息
         */


        saveSettingsToLocalCache() {
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setConfigData((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).LOCAL_CACHE.SETTINGS, JSON.stringify(this._settings));
        }
        /**
         * 当数据同步完毕，即被覆盖的情况下，需要将数据写入到本地缓存，以免数据丢失
         */


        saveAll() {
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setConfigDataWithoutSave((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).LOCAL_CACHE.PLAYER, JSON.stringify(this._playerInfo));
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setConfigDataWithoutSave((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).LOCAL_CACHE.HISTORY, JSON.stringify(this._history));
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setConfigDataWithoutSave((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).LOCAL_CACHE.SETTINGS, JSON.stringify(this._settings));
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setConfigData((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).LOCAL_CACHE.DATA_VERSION, this._dataVersion);
        }
        /**
         * 更新用户信息
         * 例如钻石、金币、道具
         * @param {String} key
         * @param {Number} value
         */


        updatePlayerInfo(key, value) {
          var isChanged = false;

          if (this._playerInfo.hasOwnProperty(key)) {
            if (typeof value === 'number') {
              isChanged = true;
              this._playerInfo[key] += value;

              if (this._playerInfo[key] < 0) {
                this._playerInfo[key] = 0;
              } //return;

            } else if (typeof value === 'boolean' || typeof value === 'string') {
              isChanged = true;
              this._playerInfo[key] = value;
            }
          }

          if (isChanged) {
            //有修改就保存到localcache
            (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
              error: Error()
            }), StorageManager) : StorageManager).instance.setConfigData((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).LOCAL_CACHE.PLAYER, JSON.stringify(this._playerInfo));
          }
        }
        /**
         * 获取玩家杂项值
         * @param {string} key 
         */


        getSetting(key) {
          if (!this._settings) {
            return null;
          }

          if (!this._settings.hasOwnProperty(key)) {
            return null;
          }

          return this._settings[key];
        }
        /**
         * 设置玩家杂项值
         * @param {string} key 
         * @param {*} value 
         */


        setSetting(key, value) {
          if (!this._settings) {
            this._settings = {};
          }

          this._settings[key] = value;
          this.saveSettingsToLocalCache();
        }
        /**
         * 清除用户信息
         */


        clear() {
          this._playerInfo = {};
          this._settings = {};
          this.saveAll();
        }
        /**
         * 增加战斗次数
         * @param times 
         */


        addFightTimes(times) {
          if (times === void 0) {
            times = 1;
          }

          var fightTimes = this.getFightTimes();
          fightTimes += 1;
          this.setSetting((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SETTINGS_KEY.FIGHT_TIMES, fightTimes);
        }
        /**
         * 获取战斗次数
         * @returns 
         */


        getFightTimes() {
          var fightTimes = this.getSetting((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SETTINGS_KEY.FIGHT_TIMES);

          if (!fightTimes) {
            fightTimes = 0;
            this.setSetting((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).SETTINGS_KEY.FIGHT_TIMES, 0);
          }

          return fightTimes;
        }
        /**
         * 获取未解锁的玩家技能
         *
         * @memberof playerData
         */


        getLockPlyerSkill() {
          var arrSkill = (_crd && LocalConfig === void 0 ? (_reportPossibleCrUseOfLocalConfig({
            error: Error()
          }), LocalConfig) : LocalConfig).instance.getTableArr("playerSkill");
          var arrLock = [];
          arrLock = arrSkill.filter(item => {
            return !this.playerInfo.arrSkill.includes(item.ID) && item.ID !== (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).PLAYER_SKILL.RECOVERY;
          });
          return arrLock;
        }
        /**
         * 添加玩家某项技能
         *
         * @param {*} info
         * @memberof playerData
         */


        addPlayerSkill(info) {
          if (!this.playerInfo.arrSkill.includes(info.ID)) {
            this.playerInfo.arrSkill.push(info.ID);
            this.savePlayerInfoToLocalCache();
            (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
              error: Error()
            }), ClientEvent) : ClientEvent).dispatchEvent((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).EVENT_TYPE.PARSE_PLAYER_SKILL);
          }
        }
        /**
         * 删除玩家某项技能
         *
         * @param {*} info
         * @memberof playerData
         */


        reducePlayerSkill(info) {
          if (this.playerInfo.arrSkill.includes(info.ID)) {
            var idx = this.playerInfo.arrSkill.findIndex(item => {
              return item === info.ID;
            });
            this.playerInfo.arrSkill.splice(idx, 1);
            this.savePlayerInfoToLocalCache();
            (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
              error: Error()
            }), ClientEvent) : ClientEvent).dispatchEvent((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).EVENT_TYPE.PARSE_PLAYER_SKILL);
          }
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=333e7b66de13da6f6ff5e7e8438d848b314614bd.js.map