System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, Prefab, LabelComponent, NodePool, instantiate, math, AnimationComponent, PlayerController, GameDefines, GameState, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, tempVec3_a, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayerController(extras) {
    _reporterNs.report("PlayerController", "./PlayerController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameDefines(extras) {
    _reporterNs.report("GameDefines", "./GameDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "./GameDefines", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      LabelComponent = _cc.LabelComponent;
      NodePool = _cc.NodePool;
      instantiate = _cc.instantiate;
      math = _cc.math;
      AnimationComponent = _cc.AnimationComponent;
    }, function (_unresolved_2) {
      PlayerController = _unresolved_2.PlayerController;
    }, function (_unresolved_3) {
      GameDefines = _unresolved_3.GameDefines;
      GameState = _unresolved_3.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "87ac5dcju1LYYm8jC0IIexv", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'Prefab', 'LabelComponent', 'NodePool', 'instantiate', 'math', 'AnimationComponent']);

      ({
        ccclass,
        property
      } = _decorator);
      tempVec3_a = new Vec3();

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: _crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
          error: Error()
        }), PlayerController) : PlayerController
      }), _dec6 = property({
        type: LabelComponent
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node
      }), _dec(_class = (_class2 = class GameManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "straitFloorPrfb", _descriptor, this);

          _initializerDefineProperty(this, "coinPrfb", _descriptor2, this);

          _initializerDefineProperty(this, "roadBlockPrfb", _descriptor3, this);

          _initializerDefineProperty(this, "playerCtrl", _descriptor4, this);

          _initializerDefineProperty(this, "coinScoreLabel", _descriptor5, this);

          _initializerDefineProperty(this, "initPanel", _descriptor6, this);

          _initializerDefineProperty(this, "playingPanel", _descriptor7, this);

          _initializerDefineProperty(this, "endPanel", _descriptor8, this);

          this._coinPool = new NodePool();
          this._coinNum = 0;
          this._straitFloorPool = new NodePool();
          this._roadBlockPool = new NodePool();
          this._checkPassedTime = 0;
          this._checkInterval = 1;
          this._activeFloors = [];
          this._curState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).INIT;
        }

        get coinNum() {
          return this._coinNum;
        }

        set coinNum(value) {
          this._coinNum = value;
          this.coinScoreLabel.string = '' + value;
        }

        set curState(value) {
          switch (value) {
            case (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).INIT:
              this.initPanel.active = true;
              this.playingPanel.active = false;
              this.endPanel.active = false;
              this.reset();
              break;

            case (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).PLAYING:
              this.initPanel.active = false;
              this.playingPanel.active = true;
              this.coinNum = 0;
              break;

            case (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).END:
              this.playingPanel.active = false;
              this.endPanel.active = true;
              break;
          }

          this._curState = value;
          this.playerCtrl.onGameStateChanged(value);
        }

        get curState() {
          return this._curState;
        }

        start() {
          this.curState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).INIT;
          this.playerCtrl.onTriggerCoin = this.onCoinTriggered.bind(this);
          this.playerCtrl.onTriggerBlock = this.onBlockTriggered.bind(this);
        }

        reset() {
          // clear all
          this._activeFloors.forEach(floorNode => {
            this.destroyFloor(floorNode);
          });

          this._activeFloors = []; // init

          for (let i = 0; i < (_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
            error: Error()
          }), GameDefines) : GameDefines).maxActiveFloor; i++) {
            const posZ = i * (_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
              error: Error()
            }), GameDefines) : GameDefines).floorLength;
            let needItem = false;

            if (i > 1) {
              needItem = true;
            }

            console.log("posZ=================", posZ);
            this.generateFloor(tempVec3_a.set(0, 0, posZ), needItem);
          }
        } // 销毁地面


        destroyFloor(floorNode) {
          for (let j = 0; j < floorNode.children.length; j++) {
            const child = floorNode.children[j]; // 回收金币1和障碍物

            if (child.name === (_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
              error: Error()
            }), GameDefines) : GameDefines).CoinNodeName) {
              child.parent = null;

              this._coinPool.put(child);
            } else if (child.name === (_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
              error: Error()
            }), GameDefines) : GameDefines).BlockNodeName) {
              child.parent = null;

              this._roadBlockPool.put(child);
            }
          }

          this._straitFloorPool.put(floorNode);
        }

        generateFloor(pos, generateItem = false) {
          console.log("generateFloor============================", pos.z);
          let floorNode = this.createStraitFloor(pos);

          this._activeFloors.push(floorNode);

          if (generateItem) {
            const generateType = math.randomRangeInt(0, 3);

            if (generateType === 1) {
              this.createCoin(floorNode, tempVec3_a.set(this.randomXPos(), 1, 0));
            } else if (generateType === 2) {
              this.createRoadBlock(floorNode, tempVec3_a.set(this.randomXPos(), 0, 0));
            }
          }
        } // 创建地面


        createStraitFloor(pos) {
          let straitFloorNode = null;

          if (this._straitFloorPool.size() > 0) {
            straitFloorNode = this._straitFloorPool.get();
          } else {
            straitFloorNode = instantiate(this.straitFloorPrfb);
          }

          straitFloorNode.setPosition(pos);
          straitFloorNode.parent = this.node;
          return straitFloorNode;
        } // 创建金币


        createCoin(parent, localPos) {
          let coinNode = null;

          if (this._coinPool.size() > 0) {
            coinNode = this._coinPool.get();
          } else {
            coinNode = instantiate(this.coinPrfb);
          }

          coinNode.setPosition(localPos);
          coinNode.parent = parent;
          return coinNode;
        } // 创建挡板


        createRoadBlock(parent, localPos) {
          let roadBlock = null;

          if (this._roadBlockPool.size() > 0) {
            roadBlock = this._roadBlockPool.get();
          } else {
            roadBlock = instantiate(this.roadBlockPrfb);
          }

          roadBlock.setPosition(localPos);
          roadBlock.parent = parent; // 初始动画

          const animComp = roadBlock.getComponent(AnimationComponent);
          const downName = 'block_down';
          const state = animComp.getState(downName);
          state.setTime(0);
          state.sample();
          return roadBlock;
        }

        onCoinTriggered(coinNode) {
          this._coinNum++;
          this.coinScoreLabel.string = '' + this._coinNum;

          this._coinPool.put(coinNode);
        }

        onBlockTriggered(blockNode) {
          this.curState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).END;
        } // 获取随机位置


        randomXPos() {
          const posXPool = [(_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
            error: Error()
          }), GameDefines) : GameDefines).leftLineX, (_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
            error: Error()
          }), GameDefines) : GameDefines).middleLineX, (_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
            error: Error()
          }), GameDefines) : GameDefines).rightLineX];
          const index = math.randomRangeInt(0, 3);
          const posX = posXPool[index];
          return posX;
        }

        checkToGenerateElem(deltaTime) {
          this._checkPassedTime += deltaTime;

          if (this._checkPassedTime > this._checkInterval) {
            // 隐藏在人物身后的Floor
            let backIndex = 0;

            for (let i = 0; i < this._activeFloors.length; i++) {
              const floor = this._activeFloors[i];

              if (floor.position.z > this.playerCtrl.node.position.z - (_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
                error: Error()
              }), GameDefines) : GameDefines).floorLength) {
                backIndex = i;
                break;
              }
            }

            if (backIndex > 0) {
              for (let i = 0; i < backIndex; i++) {
                const first = this._activeFloors.shift();

                this.destroyFloor(first);
                const last = this._activeFloors[this._activeFloors.length - 1];
                const posZ = last.position.z + (_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
                  error: Error()
                }), GameDefines) : GameDefines).floorLength;
                this.generateFloor(tempVec3_a.set(0, 0, posZ), true);
              }
            }

            this._checkPassedTime = 0;
          }
        }

        update(deltaTime) {
          this.checkToGenerateElem(deltaTime);
        } // 游戏开始按钮


        onStartButtonClicked() {
          this.curState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).PLAYING;
        } // 游戏重新开始按钮


        onRestartButtonClicked() {
          this.curState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).INIT;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "straitFloorPrfb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "coinPrfb", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "roadBlockPrfb", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "playerCtrl", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "coinScoreLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "initPanel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "playingPanel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "endPanel", [_dec9], {
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
//# sourceMappingURL=94a93511d284ece29cddcda45e6bff4ba55e76ef.js.map