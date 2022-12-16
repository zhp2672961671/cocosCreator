System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioManager, GameManager, Constant, _decorator, Component, game, Game, PhysicsSystem, profiler, find, PlayerData, StorageManager, LocalConfig, Util, SdkUtil, UIManager, _dec, _class, _crd, ccclass, property, main;

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./framework/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./fight/gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "./framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "./framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStorageManager(extras) {
    _reporterNs.report("StorageManager", "./framework/storageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalConfig(extras) {
    _reporterNs.report("LocalConfig", "./framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "./framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSdkUtil(extras) {
    _reporterNs.report("SdkUtil", "./framework/sdkUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./framework/uiManager", _context.meta, extras);
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
      game = _cc.game;
      Game = _cc.Game;
      PhysicsSystem = _cc.PhysicsSystem;
      profiler = _cc.profiler;
      find = _cc.find;
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }, function (_unresolved_4) {
      Constant = _unresolved_4.Constant;
    }, function (_unresolved_5) {
      PlayerData = _unresolved_5.PlayerData;
    }, function (_unresolved_6) {
      StorageManager = _unresolved_6.StorageManager;
    }, function (_unresolved_7) {
      LocalConfig = _unresolved_7.LocalConfig;
    }, function (_unresolved_8) {
      Util = _unresolved_8.Util;
    }, function (_unresolved_9) {
      SdkUtil = _unresolved_9.SdkUtil;
    }, function (_unresolved_10) {
      UIManager = _unresolved_10.UIManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e6cdfvKp2ZFaptVtIM6k1Cy", "main", undefined);

      __checkObsolete__(['_decorator', 'Component', 'game', 'Game', 'PhysicsSystem', 'profiler', 'sys', 'find']);

      //挂载到fight场景下的canvas节点
      ({
        ccclass,
        property
      } = _decorator);

      _export("main", main = (_dec = ccclass('main'), _dec(_class = class main extends Component {
        constructor() {
          super(...arguments);
          this._minLoadDuration = 2;
        }

        //加载开屏最小持续时间
        onEnable() {}

        onDisable() {}

        start() {
          var _instance$getGlobalDa;

          var frameRate = (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.getGlobalData("frameRate");

          if (typeof frameRate !== "number") {
            frameRate = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).GAME_FRAME; //@ts-ignore

            if (window.wx && (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
              error: Error()
            }), Util) : Util).checkIsLowPhone()) {
              frameRate = 30;
            }

            (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
              error: Error()
            }), StorageManager) : StorageManager).instance.setGlobalData("frameRate", frameRate);
          }

          console.log("###frameRate", frameRate); // 设置帧率

          game.frameRate = frameRate; // 获取或设置每步模拟消耗的固定时间（以 s 为单位）。

          PhysicsSystem.instance.fixedTimeStep = 1 / frameRate;
          var isDebugOpen = (_instance$getGlobalDa = (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.getGlobalData("debug")) != null ? _instance$getGlobalDa : false;
          isDebugOpen === true ? profiler.showStats() : profiler.hideStats(); // 加上用户id

          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).instance.loadGlobalCache();

          if (!(_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).instance.userId) {
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).instance.generateRandomAccount();
            console.log("###生成随机userId", (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).instance.userId);
          } // 处理用户数据


          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).instance.loadFromCache();

          if (!(_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).instance.playerInfo || !(_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).instance.playerInfo.createDate) {
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).instance.createPlayerInfo();
          } //加载CSV相关配置


          (_crd && LocalConfig === void 0 ? (_reportPossibleCrUseOfLocalConfig({
            error: Error()
          }), LocalConfig) : LocalConfig).instance.loadConfig(() => {
            (_crd && SdkUtil === void 0 ? (_reportPossibleCrUseOfSdkUtil({
              error: Error()
            }), SdkUtil) : SdkUtil).shareGame((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).GAME_NAME_CH, "");

            this._loadFinish();
          }); //AudioManager.instance.init();

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.setMusic(0.3);
          game.on(Game.EVENT_HIDE, () => {
            if (!(_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).instance.settings) {
              (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).instance.settings = {};
            }

            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).instance.settings.hideTime = Date.now();
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).instance.saveAll();
            (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
              error: Error()
            }), StorageManager) : StorageManager).instance.save();
          });
        }

        _loadFinish() {
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isFirstLoad = true;
          this.scheduleOnce(() => {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).instance.showDialog("home/homePanel", [], () => {
              var _find;

              (_find = find("CanvasLogin")) == null ? void 0 : _find.destroy();
              console.log("###开屏界面展示时长", Date.now() - (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).LOGIN_TIME);
            });
          }, this._minLoadDuration);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d1df844a6d191d11806c05bc1693f67db21c85a6.js.map