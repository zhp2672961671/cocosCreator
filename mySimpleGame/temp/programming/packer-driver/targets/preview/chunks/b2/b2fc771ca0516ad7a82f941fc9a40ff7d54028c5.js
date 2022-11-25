System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, CCFloat, SkeletalAnimationComponent, AudioClip, AudioSourceComponent, GameState, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, tempVec3_a, MoveAction, MoveState, cocosAnim, PlayerController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
      Vec3 = _cc.Vec3;
      CCFloat = _cc.CCFloat;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
      AudioClip = _cc.AudioClip;
      AudioSourceComponent = _cc.AudioSourceComponent;
    }, function (_unresolved_2) {
      GameState = _unresolved_2.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "06539Gj1FJEaYVDFM2PNQAi", "PlayerController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'CCFloat', 'SkeletalAnimationComponent', 'AudioClip', 'AudioSourceComponent']);

      ({
        ccclass,
        property
      } = _decorator);
      tempVec3_a = new Vec3();

      (function (MoveAction) {
        MoveAction[MoveAction["LEFT"] = 0] = "LEFT";
        MoveAction[MoveAction["RIGHT"] = 1] = "RIGHT";
        MoveAction[MoveAction["UP"] = 2] = "UP";
      })(MoveAction || (MoveAction = {}));

      (function (MoveState) {
        MoveState[MoveState["RUNNING"] = 0] = "RUNNING";
        MoveState[MoveState["MOVING_LEFT"] = 1] = "MOVING_LEFT";
        MoveState[MoveState["MOVING_RIGHT"] = 2] = "MOVING_RIGHT";
        MoveState[MoveState["JUMPING"] = 3] = "JUMPING";
      })(MoveState || (MoveState = {}));

      cocosAnim = {
        idle: 'cocos_anim_idle',
        run: 'cocos_anim_run',
        jump: 'cocos_anim_jump'
      };

      _export("PlayerController", PlayerController = (_dec = ccclass('PlayerController'), _dec2 = property({
        type: CCFloat
      }), _dec3 = property({
        type: SkeletalAnimationComponent
      }), _dec4 = property({
        type: AudioClip
      }), _dec5 = property({
        type: AudioClip
      }), _dec(_class = (_class2 = class PlayerController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "speed", _descriptor, this);

          _initializerDefineProperty(this, "playerAnimComp", _descriptor2, this);

          _initializerDefineProperty(this, "coinAC", _descriptor3, this);

          _initializerDefineProperty(this, "jumpAC", _descriptor4, this);

          this.onTriggerCoin = void 0;
          this.onTriggerBlock = void 0;
          this._pressedX = 0;
          this._pressedY = 0;
          this._moveState = MoveState.RUNNING;
          this._gameState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).INIT;
          this._audioSourceComp = null;
        }

        start() {
          this._audioSourceComp = this.getComponent(AudioSourceComponent);
        } // 游戏初始


        onGameInit() {
          // 播放动画
          this.playerAnimComp.play(cocosAnim.idle); // 设置位置

          this.node.setPosition(tempVec3_a.set(0, 0, 0));
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playerAnimComp", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "coinAC", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "jumpAC", [_dec5], {
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
//# sourceMappingURL=b2fc771ca0516ad7a82f941fc9a40ff7d54028c5.js.map