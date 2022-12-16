System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ClientEvent, PlayerData, UIManager, _decorator, Component, Node, Vec3, SkeletalAnimationComponent, ParticleSystemComponent, AnimationComponent, find, GameCamera, Constant, LocalConfig, AudioManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _crd, ccclass, property, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfClientEvent(extras) {
    _reporterNs.report("ClientEvent", "./../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "./../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameCamera(extras) {
    _reporterNs.report("GameCamera", "./gameCamera", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalConfig(extras) {
    _reporterNs.report("LocalConfig", "../framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../framework/audioManager", _context.meta, extras);
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
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
      ParticleSystemComponent = _cc.ParticleSystemComponent;
      AnimationComponent = _cc.AnimationComponent;
      find = _cc.find;
    }, function (_unresolved_2) {
      ClientEvent = _unresolved_2.ClientEvent;
    }, function (_unresolved_3) {
      PlayerData = _unresolved_3.PlayerData;
    }, function (_unresolved_4) {
      UIManager = _unresolved_4.UIManager;
    }, function (_unresolved_5) {
      GameCamera = _unresolved_5.GameCamera;
    }, function (_unresolved_6) {
      Constant = _unresolved_6.Constant;
    }, function (_unresolved_7) {
      LocalConfig = _unresolved_7.LocalConfig;
    }, function (_unresolved_8) {
      AudioManager = _unresolved_8.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8e95bLaPptDnrwd4yvi8T3l", "gameManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'CameraComponent', 'Vec3', 'SkeletalAnimationComponent', 'ParticleSystemComponent', 'AnimationComponent', 'find', 'Prefab']);

      // import { PoolManager } from '../framework/poolManager';
      ({
        ccclass,
        property
      } = _decorator); //游戏管理脚本

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property(_crd && GameCamera === void 0 ? (_reportPossibleCrUseOfGameCamera({
        error: Error()
      }), GameCamera) : GameCamera), _dec3 = property(Node), _dec(_class = (_class2 = (_class3 = class GameManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "camera", _descriptor, this);

          _initializerDefineProperty(this, "ndLight", _descriptor2, this);

          this.mapInfo = {};
          this._dictMonsterSkill = {};
          this._oriMainLightWorPos = null;
          this._offsetWorPosMainLight = new Vec3();
        }

        //是否取得胜利
        static set isWin(value) {
          this._isWin = value;

          if (GameManager.isGameStart) {
            (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
              error: Error()
            }), ClientEvent) : ClientEvent).dispatchEvent((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).EVENT_TYPE.ON_GAME_OVER);
          }
        }

        static get isWin() {
          return this._isWin;
        }

        static set gameSpeed(value) {
          console.log("gameSpeed", GameManager.gameSpeed);
          this._gameSpeed = value;
          GameManager.refreshEffectSpeed(GameManager.ndGameManager, this._gameSpeed);
          GameManager.refreshEffectSpeed(GameManager.ndPlayer, this._gameSpeed);
          GameManager.refreshEffectSpeed(GameManager.ndEffectManager, this._gameSpeed);
        }

        static get gameSpeed() {
          return this._gameSpeed;
        }

        onEnable() {
          // 游戏初始监听
          console.log("onstant.EVENT_TYPE.ON_GAME_INIT============================");
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).on((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.ON_GAME_INIT, this._onGameInit, this); // ClientEvent.on(Constant.EVENT_TYPE.ON_GAME_OVER, this._onGameOver, this);
          // ClientEvent.on(Constant.EVENT_TYPE.ON_GAME_PAUSE, this._onGamePause, this);
          // ClientEvent.on(Constant.EVENT_TYPE.REFRESH_LEVEL, this._refreshLevel, this);
          // ClientEvent.on(Constant.EVENT_TYPE.RECYCLE_ALL, this._recycleAll, this);
        }

        onDisable() {
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).off((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.ON_GAME_INIT, this._onGameInit, this); // ClientEvent.off(Constant.EVENT_TYPE.ON_GAME_OVER, this._onGameOver, this);
          // ClientEvent.off(Constant.EVENT_TYPE.ON_GAME_PAUSE, this._onGamePause, this);
          // ClientEvent.off(Constant.EVENT_TYPE.REFRESH_LEVEL, this._refreshLevel, this);
          // ClientEvent.off(Constant.EVENT_TYPE.RECYCLE_ALL, this._recycleAll, this);
        }

        start() {
          // GameManager.mainCamera = this.camera?.getComponent(CameraComponent) as CameraComponent;
          // GameManager.scriptGameCamera = this.camera?.getComponent(GameCamera) as GameCamera;
          GameManager.ndGameManager = this.node;
          GameManager.ndMapManager = find("mapManager");
          GameManager.ndEffectManager = find("effectManager");
          this._oriMainLightWorPos = this.ndLight.worldPosition.clone();

          if (GameManager.isTesting) {
            //@ts-ignore
            window.uiManager = (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).instance; //@ts-ignore

            window.AudioManager = (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance; //@ts-ignore

            window.playerData = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).instance; //@ts-ignore

            window.clientEvent = _crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
              error: Error()
            }), ClientEvent) : ClientEvent; //@ts-ignore

            window.ndGameManager = GameManager.ndGameManager; //@ts-ignore

            window.GameManager = GameManager; //@ts-ignore

            window.ndMapManager = GameManager.ndMapManager; //@ts-ignore

            window.EffectManager = EffectManager.instance; //@ts-ignore

            window.ndEffectManager = GameManager.ndEffectManager; //@ts-ignore

            window.constant = _crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant; //@ts-ignore
            //@ts-ignore
          }
        }
        /**
        * 初始化游戏
        */


        _onGameInit() {
          let level = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).instance.playerInfo.level;
          console.log("_onGameInit=================="); // “getTableArr”获取表格数组

          let totalLevel = (_crd && LocalConfig === void 0 ? (_reportPossibleCrUseOfLocalConfig({
            error: Error()
          }), LocalConfig) : LocalConfig).instance.getTableArr("checkpoint").length; //游戏通关后从倒数第10关开始循环(61-70)

          if (level > totalLevel) {
            level = totalLevel - 10 + (level - totalLevel) % 10;
          } // queryByID 通过id获取字典中一条


          this.mapInfo = (_crd && LocalConfig === void 0 ? (_reportPossibleCrUseOfLocalConfig({
            error: Error()
          }), LocalConfig) : LocalConfig).instance.queryByID("checkpoint", String(level)); //设置本层敌人属性加成比例

          GameManager.attackAddition = this.mapInfo.attackAddition;
          GameManager.defenseAddition = this.mapInfo.defenseAddition;
          GameManager.hpAddition = this.mapInfo.hpAddition;
          GameManager.moveSpeedAddition = this.mapInfo.moveSpeedAddition;
          GameManager.attackSpeedAddition = this.mapInfo.attackSpeedAddition;
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).dispatchEvent((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.HIDE_WARP_GATE);
          GameManager.isGameStart = false;
          GameManager.isGamePause = false;
          GameManager.isGameOver = false;
          GameManager.isWin = false;
          GameManager.isRevive = false;
          GameManager.arrMonster = [];
          GameManager.gameSpeed = 1;
          GameManager.ndBoss = null;
          GameManager.existentNum = 0;
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).instance.addFightTimes();
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.pauseAll();
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).instance.showDialog("loading/loadingPanel", [() => {// this._refreshLevel();
          }]);
        }
        /**
        * 刷新节点下的动画、粒子播放速度
        * @param targetNode
        * @param value
        * @returns
        */


        static refreshEffectSpeed(targetNode, value) {
          if (!targetNode) {
            return;
          }

          let arrAni = targetNode.getComponentsInChildren(AnimationComponent);
          arrAni.forEach(item => {
            item.clips.forEach(clip => {
              let aniName = clip == null ? void 0 : clip.name;
              let aniState = item.getState(aniName);
              aniState.speed = value;
            });
          });
          let arrSkeletalAni = targetNode.getComponentsInChildren(SkeletalAnimationComponent);
          arrSkeletalAni.forEach(item => {
            item.clips.forEach(clip => {
              let aniName = clip == null ? void 0 : clip.name;
              let aniState = item.getState(aniName);
              aniState.speed = value;
            });
          });
          let arrParticle = targetNode.getComponentsInChildren(ParticleSystemComponent);
          arrParticle.forEach(item => {
            item.simulationSpeed = value;
          });
        }

        update(deltaTime) {}

      }, _class3.mainCamera = null, _class3.isGameStart = false, _class3.isGamePause = false, _class3.isGameOver = false, _class3.scriptGameCamera = void 0, _class3.ndPlayer = null, _class3.ndBoss = null, _class3.ndGameManager = void 0, _class3.ndEffectManager = null, _class3.ndMapManager = null, _class3.isRevive = false, _class3.isTesting = true, _class3.isFirstLoad = false, _class3.arrMonster = [], _class3.existentNum = 0, _class3.attackAddition = 1, _class3.defenseAddition = 1, _class3.hpAddition = 1, _class3.moveSpeedAddition = 1, _class3.attackSpeedAddition = 1, _class3._gameSpeed = 1, _class3._isWin = false, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ndLight", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0dd72d665ac9c38c70c1061d33d4138aebf101bb.js.map