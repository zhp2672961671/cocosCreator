System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EffectManager, ClientEvent, PlayerData, Monster, UIManager, MapManager, _decorator, Component, Node, CameraComponent, Vec3, SkeletalAnimationComponent, ParticleSystemComponent, AnimationComponent, find, Prefab, GameCamera, Player, ResourceUtil, Constant, LocalConfig, AudioManager, Util, PoolManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _crd, ccclass, property, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "./../framework/effectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientEvent(extras) {
    _reporterNs.report("ClientEvent", "./../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "./../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "./monster", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapManager(extras) {
    _reporterNs.report("MapManager", "./mapManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameCamera(extras) {
    _reporterNs.report("GameCamera", "./gameCamera", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "./player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourceUtil(extras) {
    _reporterNs.report("ResourceUtil", "../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalConfig(extras) {
    _reporterNs.report("LocalConfig", "../framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoss(extras) {
    _reporterNs.report("Boss", "./boss", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../framework/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "../framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "../framework/poolManager", _context.meta, extras);
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
      CameraComponent = _cc.CameraComponent;
      Vec3 = _cc.Vec3;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
      ParticleSystemComponent = _cc.ParticleSystemComponent;
      AnimationComponent = _cc.AnimationComponent;
      find = _cc.find;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      EffectManager = _unresolved_2.EffectManager;
    }, function (_unresolved_3) {
      ClientEvent = _unresolved_3.ClientEvent;
    }, function (_unresolved_4) {
      PlayerData = _unresolved_4.PlayerData;
    }, function (_unresolved_5) {
      Monster = _unresolved_5.Monster;
    }, function (_unresolved_6) {
      UIManager = _unresolved_6.UIManager;
    }, function (_unresolved_7) {
      MapManager = _unresolved_7.MapManager;
    }, function (_unresolved_8) {
      GameCamera = _unresolved_8.GameCamera;
    }, function (_unresolved_9) {
      Player = _unresolved_9.Player;
    }, function (_unresolved_10) {
      ResourceUtil = _unresolved_10.ResourceUtil;
    }, function (_unresolved_11) {
      Constant = _unresolved_11.Constant;
    }, function (_unresolved_12) {
      LocalConfig = _unresolved_12.LocalConfig;
    }, function (_unresolved_13) {
      AudioManager = _unresolved_13.AudioManager;
    }, function (_unresolved_14) {
      Util = _unresolved_14.Util;
    }, function (_unresolved_15) {
      PoolManager = _unresolved_15.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "74bb5fEKqJBI7792FWkxSP/", "gameManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'CameraComponent', 'Vec3', 'SkeletalAnimationComponent', 'ParticleSystemComponent', 'AnimationComponent', 'find', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator); //游戏管理脚本

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property(_crd && GameCamera === void 0 ? (_reportPossibleCrUseOfGameCamera({
        error: Error()
      }), GameCamera) : GameCamera), _dec3 = property({
        type: _crd && MapManager === void 0 ? (_reportPossibleCrUseOfMapManager({
          error: Error()
        }), MapManager) : MapManager
      }), _dec4 = property(Node), _dec(_class = (_class2 = (_class3 = class GameManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "camera", _descriptor, this);

          _initializerDefineProperty(this, "scriptMapManager", _descriptor2, this);

          _initializerDefineProperty(this, "ndLight", _descriptor3, this);

          this.mapInfo = {};
          this._dictMonsterSkill = {};
          this._oriMainLightWorPos = null;
          this._offsetWorPosMainLight = new Vec3();
        }

        //本层敌人攻速加成
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

        //是否取得胜利
        onEnable() {
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).on((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.ON_GAME_INIT, this._onGameInit, this);
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).on((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.ON_GAME_OVER, this._onGameOver, this);
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).on((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.ON_GAME_PAUSE, this._onGamePause, this);
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).on((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.REFRESH_LEVEL, this._refreshLevel, this);
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).on((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.RECYCLE_ALL, this._recycleAll, this);
        }

        onDisable() {
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).off((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.ON_GAME_INIT, this._onGameInit, this);
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).off((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.ON_GAME_OVER, this._onGameOver, this);
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).off((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.ON_GAME_PAUSE, this._onGamePause, this);
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).off((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.REFRESH_LEVEL, this._refreshLevel, this);
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).off((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.RECYCLE_ALL, this._recycleAll, this);
        }

        start() {
          var _this$camera, _this$camera2;

          GameManager.mainCamera = (_this$camera = this.camera) == null ? void 0 : _this$camera.getComponent(CameraComponent);
          GameManager.scriptGameCamera = (_this$camera2 = this.camera) == null ? void 0 : _this$camera2.getComponent(_crd && GameCamera === void 0 ? (_reportPossibleCrUseOfGameCamera({
            error: Error()
          }), GameCamera) : GameCamera);
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

            window.EffectManager = (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).instance; //@ts-ignore

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
          var level = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).instance.playerInfo.level;
          var totalLevel = (_crd && LocalConfig === void 0 ? (_reportPossibleCrUseOfLocalConfig({
            error: Error()
          }), LocalConfig) : LocalConfig).instance.getTableArr("checkpoint").length; //游戏通关后从倒数第10关开始循环(61-70)

          if (level > totalLevel) {
            level = totalLevel - 10 + (level - totalLevel) % 10;
          }

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
          }), AudioManager) : AudioManager).instance.pauseAll(); // if (GameManager.isFirstLoad) {
          //     this._refreshLevel();
          // } else {

          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).instance.showDialog("loading/loadingPanel", [() => {
            this._refreshLevel();
          }]); // }
        }
        /**
         * 刷新关卡, 后期优化写法。。。
         */


        _refreshLevel() {
          //每层随机一张地图
          var arrMap = this.mapInfo.mapName.split("#");
          var mapName = arrMap[Math.floor(Math.random() * arrMap.length)];
          this.preloadMonsterSkill(mapName).then(() => {
            this._recycleAll();

            this._loadMap(mapName, () => {
              //第一次进入或者失败后被销毁需要重新创建
              if (!GameManager.ndPlayer) {
                this._createPlayer();
              } else {
                GameManager.scriptPlayer.preloadArrow(() => {
                  console.log("###_refreshLevel1");
                  (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
                    error: Error()
                  }), ClientEvent) : ClientEvent).dispatchEvent((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                    error: Error()
                  }), Constant) : Constant).EVENT_TYPE.HIDE_LOADING_PANEL, () => {
                    GameManager.scriptPlayer.resetPlayerState();
                  });
                });
              }
            });
          });
        }
        /**
         * 加载地图数据
         *
         * @private
         * @param {Function} [cb=()=>{}]
         * @memberof GameManager
         */


        _loadMap(mapName, cb) {
          if (cb === void 0) {
            cb = () => {};
          }

          this.scriptMapManager.buildMap(mapName, () => {}, () => {
            cb && cb();
          });
        }
        /**
         * 创建玩家
         *
         * @private
         * @memberof GameManager
         */


        _createPlayer() {
          (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
            error: Error()
          }), ResourceUtil) : ResourceUtil).loadModelRes("player/player01").then(pf => {
            var _GameManager$mainCame, _GameManager$ndPlayer;

            GameManager.ndPlayer = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.getNode(pf, this.node);
            var scriptGameCamera = (_GameManager$mainCame = GameManager.mainCamera) == null ? void 0 : _GameManager$mainCame.node.getComponent(_crd && GameCamera === void 0 ? (_reportPossibleCrUseOfGameCamera({
              error: Error()
            }), GameCamera) : GameCamera);
            scriptGameCamera.ndFollowTarget = GameManager.ndPlayer;
            var scriptPlayer = (_GameManager$ndPlayer = GameManager.ndPlayer) == null ? void 0 : _GameManager$ndPlayer.getComponent(_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player);
            GameManager.scriptPlayer = scriptPlayer;
            scriptPlayer == null ? void 0 : scriptPlayer.init(); // if (GameManager.isFirstLoad) {
            //     GameManager.isFirstLoad = false;
            //     scriptPlayer.preloadArrow(()=>{
            //         clientEvent.dispatchEvent(constant.EVENT_TYPE.REMOVE_NODE_GAME_START);
            //     })
            // } else {

            scriptPlayer.preloadArrow(() => {
              (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
                error: Error()
              }), ClientEvent) : ClientEvent).dispatchEvent((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).EVENT_TYPE.HIDE_LOADING_PANEL);
            }); // }
          });
        }
        /**
         * 回收怪兽, 武器，特效等
         *
         * @private
         * @memberof GameManager
         */


        _recycleAll() {
          this.scriptMapManager.recycle();

          for (var i = this.node.children.length - 1; i >= 0; i--) {
            var ndChild = this.node.children[i];

            if (ndChild.name !== "player01") {
              (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance.putNode(ndChild);
            }
          }

          while (GameManager.ndEffectManager.children.length) {
            (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.putNode(GameManager.ndEffectManager.children[0]);
          }
        }
        /**
         * 游戏结束
         */


        _onGameOver() {
          if (GameManager.isGameOver) {
            return;
          }

          GameManager.isGamePause = true;
          console.log("game over!", "isWin ?", GameManager.isWin);

          if (GameManager.isWin) {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).instance.hideDialog("fight/fightPanel");
            GameManager.isGameOver = true;

            this._recycleAll();

            var nextLevel = Number((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).instance.playerInfo.level) + 1;
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).instance.playerInfo.level = nextLevel; //更新已解锁最高层级

            if (nextLevel > (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).instance.playerInfo.highestLevel) {
              (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                error: Error()
              }), PlayerData) : PlayerData).instance.playerInfo.highestLevel = nextLevel;
            }

            (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
              error: Error()
            }), ClientEvent) : ClientEvent).dispatchEvent((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).EVENT_TYPE.ON_GAME_INIT);
          } else {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).instance.showDialog("revive/revivePanel", [() => {
              if (GameManager.ndPlayer) {
                (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                  error: Error()
                }), PoolManager) : PoolManager).instance.putNode(GameManager.ndPlayer);
                GameManager.ndPlayer = null;
                GameManager.scriptPlayer = null;
              }

              this._recycleAll();
            }]);
          }
        }
        /**
         * 游戏暂停
         */


        _onGamePause() {
          GameManager.isGamePause = true;
        }
        /**
         * 获取距离最近的小怪、boss节点
         * @returns 
         */


        static getNearestMonster() {
          if (GameManager.arrMonster.length) {
            var arr = GameManager.arrMonster.sort((a, b) => {
              var distanceA = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
                error: Error()
              }), Util) : Util).getTwoNodeXZLength(GameManager.ndPlayer, a);
              var distanceB = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
                error: Error()
              }), Util) : Util).getTwoNodeXZLength(GameManager.ndPlayer, b);
              return distanceA - distanceB;
            });
            arr = arr.filter(item => {
              var scriptMonster = item.getComponent(_crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
                error: Error()
              }), Monster) : Monster);
              return item.parent !== null && !scriptMonster.isDie;
            });
            return arr[0];
          } else {
            return null;
          }
        }
        /**
         * 获取除了怪物本身自己外一定范围内的怪物
         *
         * @static
         * @param {Node} ndMonster 被击中的敌人
         * @param {boolean} [isAll=false] 是否返回全部敌人,否则只随机返回一个
         * @param {number} [range=5] 范围
         * @return {*} 
         * @memberof GameManager
         */


        static getNearbyMonster(ndMonster, isAll, range) {
          if (isAll === void 0) {
            isAll = false;
          }

          if (range === void 0) {
            range = 7;
          }

          //范围
          var arrMonster = [];

          if (GameManager.arrMonster.length) {
            arrMonster = GameManager.arrMonster.concat();
          }

          arrMonster = arrMonster.filter(item => {
            var scriptMonster = item.getComponent(_crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
              error: Error()
            }), Monster) : Monster);
            var length = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
              error: Error()
            }), Util) : Util).getTwoNodeXZLength(GameManager.ndPlayer, item);
            return item.parent !== null && !scriptMonster.isDie && length <= range && ndMonster.worldPosition !== item.worldPosition;
          });

          if (arrMonster.length) {
            if (!isAll) {
              var index = Math.floor(Math.random() * arrMonster.length);
              return arrMonster = arrMonster.filter((ndChild, idx) => {
                return idx === index;
              });
            } else {
              return arrMonster;
            }
          } else {
            return arrMonster;
          }
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

          var arrAni = targetNode.getComponentsInChildren(AnimationComponent);
          arrAni.forEach(item => {
            item.clips.forEach(clip => {
              var aniName = clip == null ? void 0 : clip.name;
              var aniState = item.getState(aniName);
              aniState.speed = value;
            });
          });
          var arrSkeletalAni = targetNode.getComponentsInChildren(SkeletalAnimationComponent);
          arrSkeletalAni.forEach(item => {
            item.clips.forEach(clip => {
              var aniName = clip == null ? void 0 : clip.name;
              var aniState = item.getState(aniName);
              aniState.speed = value;
            });
          });
          var arrParticle = targetNode.getComponentsInChildren(ParticleSystemComponent);
          arrParticle.forEach(item => {
            item.simulationSpeed = value;
          });
        }
        /**
         * 添加金币
         *
         * @static
         * @param {number} [value=1]
         * @memberof GameManager
         */


        static addGold(value) {
          if (value === void 0) {
            value = 1;
          }

          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).instance.updatePlayerInfo('gold', Math.ceil(value));
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).dispatchEvent((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.REFRESH_GOLD);
        }
        /**
         * 每层进入前预加载该层所需的敌人技能
         *
         * @private
         * @memberof GameManager
         */


        preloadMonsterSkill(mapName) {
          return new Promise((resolve, reject) => {
            var arrLoadSkill = []; //等待预加载的技能

            var arrInfo = (_crd && LocalConfig === void 0 ? (_reportPossibleCrUseOfLocalConfig({
              error: Error()
            }), LocalConfig) : LocalConfig).instance.getTableArr(mapName); //获取所有敌人信息

            arrInfo = arrInfo.filter(item => {
              return item.ID.startsWith("2");
            }); //获得敌人技能列表

            if (arrInfo.length) {
              var arrSkill = [];
              arrInfo.forEach(element => {
                arrSkill = arrSkill.concat(element.skill === "" ? [] : element.skill.split("#"));
              });
              arrSkill.length && arrSkill.forEach(id => {
                if (!this._dictMonsterSkill[id]) {
                  arrLoadSkill.push(id);
                  this._dictMonsterSkill[id] = {
                    "num": 1
                  };
                } else {
                  var arr = arrSkill.filter(itemId => {
                    return itemId === id;
                  });

                  if (arr.length > this._dictMonsterSkill[id].num) {
                    arrLoadSkill.push(id);
                    this._dictMonsterSkill[id].num += 1;
                  }
                }
              });
              var arrPromise = []; // console.log("需要预加载的技能数组", arrLoadSkill, "已经预加载的敌人技能", this._dictMonsterSkill);

              if (arrLoadSkill.length) {
                for (var i = 0; i < arrLoadSkill.length; i++) {
                  var element = arrLoadSkill[i]; //预加载敌人技能

                  var skillInfo = (_crd && LocalConfig === void 0 ? (_reportPossibleCrUseOfLocalConfig({
                    error: Error()
                  }), LocalConfig) : LocalConfig).instance.queryByID("monsterSkill", element);
                  var p = (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
                    error: Error()
                  }), ResourceUtil) : ResourceUtil).loadEffectRes(skillInfo.resName + "/" + skillInfo.resName).then(prefab => {
                    var ndSkillCollider = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                      error: Error()
                    }), PoolManager) : PoolManager).instance.getNode(prefab, GameManager.ndGameManager);
                    ndSkillCollider.setWorldPosition(this.node.worldPosition.x, 30, this.node.worldPosition.z);
                  });
                  arrPromise.push(p);
                }

                Promise.all(arrPromise).then(() => {
                  resolve(null);
                }).catch(e => {
                  console.error("预加载敌人技能报错", e);
                });
              } else {
                resolve(null);
              }
            } else {
              resolve(null);
            }
          });
        }
        /**
         * 判断本层的爱心、npc是否都已经触发
         *
         * @static
         * @memberof GameManager
         */


        static checkTriggerAll() {
          GameManager.existentNum -= 1;

          if (GameManager.existentNum <= 0) {
            (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
              error: Error()
            }), ClientEvent) : ClientEvent).dispatchEvent((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).EVENT_TYPE.SHOW_WARP_GATE);
          }
        }
        /**
         * 预加载弓箭特效
         * 
         * @static
         * @param {number} num
         * @returns
         * @memberof GameManager
         */


        static preloadArrowEffects(num) {
          return new Promise((resolve, reject) => {
            (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
              error: Error()
            }), ResourceUtil) : ResourceUtil).loadDirRes("prefab/effect/arrow", Prefab, (err, pfs) => {
              if (err) {
                console.error(err);
                reject(err);
              } else {
                pfs.forEach(pf => {
                  (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                    error: Error()
                  }), PoolManager) : PoolManager).instance.preloadPool(pf, num);
                });
                resolve(null);
              }
            });
          });
        }
        /**
         * 预加载箭
         *
         * @static
         * @param {string} arrowName
         * @param {number} num
         * @memberof GameManager
         */


        static preloadArrow(arrowName, num) {
          (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
            error: Error()
          }), ResourceUtil) : ResourceUtil).loadModelRes("weapon/arrow/" + arrowName).then(prefab => {
            (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.preloadPool(prefab, num);
          });
        }

        update(deltaTime) {
          //光源跟随玩家人物移动
          if (GameManager.scriptPlayer && GameManager.scriptPlayer.node && !GameManager.isGameOver) {
            Vec3.subtract(this._offsetWorPosMainLight, GameManager.ndPlayer.worldPosition, this._oriMainLightWorPos);

            this._offsetWorPosMainLight.set(this._offsetWorPosMainLight.x, 0, this._offsetWorPosMainLight.z);

            this.ndLight.setWorldPosition(this._offsetWorPosMainLight.add(this._oriMainLightWorPos));
          }
        }

      }, _class3.mainCamera = null, _class3.isGameStart = false, _class3.isGamePause = false, _class3.isGameOver = false, _class3.scriptPlayer = null, _class3.scriptGameCamera = void 0, _class3.ndPlayer = null, _class3.ndBoss = null, _class3.scriptBoss = null, _class3.ndGameManager = void 0, _class3.ndEffectManager = null, _class3.ndMapManager = null, _class3.isRevive = false, _class3.isTesting = true, _class3.isFirstLoad = false, _class3.arrMonster = [], _class3.existentNum = 0, _class3.attackAddition = 1, _class3.defenseAddition = 1, _class3.hpAddition = 1, _class3.moveSpeedAddition = 1, _class3.attackSpeedAddition = 1, _class3._gameSpeed = 1, _class3._isWin = false, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scriptMapManager", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ndLight", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=27fed994df577b26d18a93169915066164c02697.js.map