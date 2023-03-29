System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Util, GameManager, _decorator, Component, Node, Vec3, EffectManager, AudioManager, Constant, PoolManager, _dec, _class, _crd, ccclass, property, EnergyBall;

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "./../../framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./../gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "../../framework/effectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../framework/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../../framework/constant", _context.meta, extras);
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
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Util = _unresolved_2.Util;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }, function (_unresolved_4) {
      EffectManager = _unresolved_4.EffectManager;
    }, function (_unresolved_5) {
      AudioManager = _unresolved_5.AudioManager;
    }, function (_unresolved_6) {
      Constant = _unresolved_6.Constant;
    }, function (_unresolved_7) {
      PoolManager = _unresolved_7.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "37dc2IA7blBo4bx2LK3KFIH", "energyBall", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3']);

      //能量球脚本: 直线飞行
      ({
        ccclass,
        property
      } = _decorator);

      _export("EnergyBall", EnergyBall = (_dec = ccclass('EnergyBall'), _dec(_class = class EnergyBall extends Component {
        constructor(...args) {
          super(...args);
          this.baseInfo = null;
          this.skillInfo = null;
          this._curSpeed = 0;
          this._targetSpeed = 0;
          this._offsetPos = new Vec3();
          this._curWorPos = new Vec3();
          this._disappearRange = 25;
          this._targetWorPos = new Vec3();
        }

        //能量球的下次目标位置
        start() {// [3]
        }
        /**
        * 初始化 
        */


        init(skillInfo, baseInfo, scriptParent) {
          var _scriptParent$scriptW;

          this.skillInfo = skillInfo;
          this.baseInfo = baseInfo;
          (_scriptParent$scriptW = scriptParent.scriptWarning) == null ? void 0 : _scriptParent$scriptW.hideWarning();
          this._targetSpeed = skillInfo.flySpeed;
          ;
          this._curSpeed = skillInfo.flySpeed * 0.5;
          (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).instance.playParticle(this.node);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SOUND.ENERGY_BALL);
        }

        update(deltaTime) {
          if (!this.node.parent || !(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameOver || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGamePause) {
            return;
          } //朝forward方向飞行


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

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7e79fcfb6475fe125c5130827805dccce16e8b75.js.map