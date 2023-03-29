System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GameManager, _decorator, Component, Vec3, Node, AnimationComponent, EffectManager, Util, Constant, AudioManager, PoolManager, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Tornado;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./../gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "../../framework/effectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "../../framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../framework/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "../../framework/poolManager", _context.meta, extras);
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
      Node = _cc.Node;
      AnimationComponent = _cc.AnimationComponent;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }, function (_unresolved_3) {
      EffectManager = _unresolved_3.EffectManager;
    }, function (_unresolved_4) {
      Util = _unresolved_4.Util;
    }, function (_unresolved_5) {
      Constant = _unresolved_5.Constant;
    }, function (_unresolved_6) {
      AudioManager = _unresolved_6.AudioManager;
    }, function (_unresolved_7) {
      PoolManager = _unresolved_7.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c5fdbt9RkFOCaHUSrwAIUTs", "tornado", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Vec3', 'Node', 'AnimationComponent']);

      ({
        ccclass,
        property
      } = _decorator); //台风S型脚本

      _export("Tornado", Tornado = (_dec = ccclass('Tornado'), _dec2 = property(AnimationComponent), _dec(_class = (_class2 = class Tornado extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "aniMove", _descriptor, this);

          this.skillInfo = null;
          this.baseInfo = null;
          this._offsetPos = new Vec3();
          this._oriWorPos = new Vec3();
          this._targetSpeed = 0;
          this._curSpeed = 0;
          this._targetWorPos = new Vec3();
          this._curWorPos = new Vec3();
          this._disappearRange = 25;
        }

        //箭节点超过玩家这个范围则隐藏
        start() {// [3]
        }

        init(skillInfo, baseInfo, scriptParent) {
          var _scriptParent$scriptW;

          this.skillInfo = skillInfo;
          this.baseInfo = baseInfo;
          scriptParent == null ? void 0 : (_scriptParent$scriptW = scriptParent.scriptWarning) == null ? void 0 : _scriptParent$scriptW.hideWarning();

          this._oriWorPos.set(this.node.worldPosition);

          this._curWorPos.set(this.node.worldPosition);

          Vec3.subtract(this._offsetPos, this._curWorPos, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer.worldPosition);

          this._offsetPos.normalize().negative();

          Vec3.add(this._curWorPos, this._curWorPos, this._offsetPos.multiplyScalar(2));
          this.node.setWorldPosition(this._curWorPos);
          (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).instance.playParticle(this.node);
          this._targetSpeed = skillInfo.flySpeed;
          this._curSpeed = this._targetSpeed * 0.5;
          this.aniMove.getState("tornado").time = 0;
          this.aniMove.getState("tornado").sample();
          this.aniMove.play();
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SOUND.TORNADO);
        }

        update(deltaTime) {
          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer) {
            //朝forward方向飞行
            this._curSpeed = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
              error: Error()
            }), Util) : Util).lerp(this._targetSpeed, this._curSpeed, 0.25);

            this._targetWorPos.set(0, 0, -deltaTime * this._curSpeed);

            this.node.translate(this._targetWorPos, Node.NodeSpace.LOCAL);

            this._curWorPos.set(this.node.worldPosition); //超过玩家一定范围则隐藏


            Vec3.subtract(this._offsetPos, this._curWorPos, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).ndPlayer.worldPosition);

            if (this._offsetPos && this._offsetPos.length() >= this._disappearRange) {
              (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance.putNode(this.node);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "aniMove", [_dec2], {
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
//# sourceMappingURL=8f9c10a124cefc379d4fb03a090aa93e2d774df7.js.map