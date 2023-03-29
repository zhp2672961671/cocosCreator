System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EffectManager, _decorator, Component, Constant, AudioManager, _dec, _class, _crd, ccclass, property, Laser;

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "./../../framework/effectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../framework/audioManager", _context.meta, extras);
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
      EffectManager = _unresolved_2.EffectManager;
    }, function (_unresolved_3) {
      Constant = _unresolved_3.Constant;
    }, function (_unresolved_4) {
      AudioManager = _unresolved_4.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "504049FuYdEFIRZxBEBstqp", "laser", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator); //激光技能脚本

      _export("Laser", Laser = (_dec = ccclass('Laser'), _dec(_class = class Laser extends Component {
        constructor(...args) {
          super(...args);
          this.skillInfo = null;
          this.baseInfo = null;
          this.scriptWarning = null;
          this.timer = null;
        }

        //定时器
        start() {// [3]
        }

        init(skillInfo, baseInfo, scriptParent) {
          this.skillInfo = skillInfo;
          this.baseInfo = baseInfo;
          this.node.active = false;

          this._closeTimer();

          this.timer = setTimeout(() => {
            if (!scriptParent.isDie) {
              var _scriptParent$scriptW;

              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).SOUND.LASER);
              this.node.active = true;
              scriptParent == null ? void 0 : (_scriptParent$scriptW = scriptParent.scriptWarning) == null ? void 0 : _scriptParent$scriptW.hideWarning();
              (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
                error: Error()
              }), EffectManager) : EffectManager).instance.playParticle(this.node, skillInfo.flySpeed, true, null, () => {
                this._closeTimer();
              });
            } else {
              this._closeTimer();
            }
          }, 400);
        }

        _closeTimer() {
          if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
          }
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cdb7490a926948d07e77d538417ebeb6d5dec3c9.js.map