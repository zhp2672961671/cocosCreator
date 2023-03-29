System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GameManager, _decorator, Component, Node, Vec3, AnimationClip, SkeletalAnimationComponent, Constant, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, PlayerModel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../framework/constant", _context.meta, extras);
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
      AnimationClip = _cc.AnimationClip;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }, function (_unresolved_3) {
      Constant = _unresolved_3.Constant;
    }, function (_unresolved_4) {
      AudioManager = _unresolved_4.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6d341OU0KFKnp6rW79mlG0J", "playerModel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'SkeletalAnimationState', 'AnimationClip', 'SkeletalAnimationComponent']);

      ({
        ccclass,
        property
      } = _decorator); //玩家角色模型脚本

      _export("PlayerModel", PlayerModel = (_dec = ccclass('PlayerModel'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(SkeletalAnimationComponent), _dec(_class = (_class2 = class PlayerModel extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ndSocketLoose", _descriptor, this);

          _initializerDefineProperty(this, "ndSocketHand", _descriptor2, this);

          _initializerDefineProperty(this, "ndArrow", _descriptor3, this);

          _initializerDefineProperty(this, "aniComPlayer", _descriptor4, this);

          this.looseEulerAngles = new Vec3();
          this.isAniPlaying = false;
          this._aniType = "";
          this._aniState = null;
          this._stepIndex = 0;
        }

        //当前动画是否正在播放
        //是否正在跑
        get isRunning() {
          return this._aniType === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).PLAYER_ANI_TYPE.RUN && this.isAniPlaying === true;
        } //是否待机


        get isIdle() {
          return this._aniType === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).PLAYER_ANI_TYPE.IDLE && this.isAniPlaying === true;
        } //是否正在攻击


        get isAttacking() {
          return this._aniType === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).PLAYER_ANI_TYPE.ATTACK && this.isAniPlaying === true;
        }

        //脚步
        start() {// [3]
        }

        init() {
          this.hideArrow();
        }
        /**
         * attack帧事件:箭射出去的时候触发
         * @returns 
         */


        onFrameAttackLoose() {
          var _this$node$parent;

          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameOver || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGamePause) {
            return;
          }

          this.looseEulerAngles = (_this$node$parent = this.node.parent) == null ? void 0 : _this$node$parent.eulerAngles;
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).scriptPlayer.throwArrowToEnemy();
          this.ndArrow.active = false; // console.log("looseEulerAngles", this.looseEulerAngles);
        }
        /**
         * run帧事件：脚落地的时候播放音效
         *
         * @memberof PlayerModel
         */


        onFrameRun() {
          this._stepIndex = this._stepIndex === 0 ? 1 : 0;
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SOUND.FOOT_STEP[this._stepIndex]);
        }
        /**
         * attack帧事件: 拉弓的时候触发
         */


        onFrameAttackDraw() {
          this.ndArrow.active = true;
        }
        /**
         * 隐藏模型手中默认的箭
         */


        hideArrow() {
          this.ndArrow.active = false;
        }
        /**
        * 播放玩家动画
        *
        * @param {string} aniType 动画类型
        * @param {boolean} [isLoop=false] 是否循环
        * @param {Function} [callback] 回调函数
        * @param {number} [callback] 调用播放动画的位置，方便用于测试
        * @returns
        * @memberof Player
        */


        playAni(aniType, isLoop = false, callback, pos) {
          var _this$aniComPlayer, _this$aniComPlayer2;

          // console.log("playerAniType", aniType, "curAniType", this.aniType, "pos", pos);
          this._aniState = (_this$aniComPlayer = this.aniComPlayer) == null ? void 0 : _this$aniComPlayer.getState(aniType);

          if (this._aniState && this._aniState.isPlaying) {
            return;
          }

          this._aniType = aniType;

          if (this._aniType !== (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).PLAYER_ANI_TYPE.ATTACK) {
            this.hideArrow();
          }

          (_this$aniComPlayer2 = this.aniComPlayer) == null ? void 0 : _this$aniComPlayer2.play(aniType);
          this.isAniPlaying = true;

          if (this._aniState) {
            if (isLoop) {
              this._aniState.wrapMode = AnimationClip.WrapMode.Loop;
            } else {
              this._aniState.wrapMode = AnimationClip.WrapMode.Normal;
            }

            switch (aniType) {
              case (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).PLAYER_ANI_TYPE.ATTACK:
                this._aniState.speed = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).gameSpeed * (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.curAttackSpeed;
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.hideRunSmoke();
                break;

              case (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).PLAYER_ANI_TYPE.RUN:
                this._aniState.speed = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).gameSpeed * ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.curMoveSpeed / (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.playerBaseInfo.moveSpeed);
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.playRunSmoke();
                break;

              case (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).PLAYER_ANI_TYPE.IDLE:
                this._aniState.speed = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).gameSpeed;
                break;

              default:
                this._aniState.speed = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).gameSpeed;
                break;
            }
          }

          if (!isLoop) {
            this.aniComPlayer.once(SkeletalAnimationComponent.EventType.FINISHED, () => {
              this.isAniPlaying = false;
              callback && callback();
            });
          }
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ndSocketLoose", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ndSocketHand", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ndArrow", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "aniComPlayer", [_dec5], {
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
//# sourceMappingURL=d9cfc6fa9010b3418f615943318da7e294ab3abd.js.map