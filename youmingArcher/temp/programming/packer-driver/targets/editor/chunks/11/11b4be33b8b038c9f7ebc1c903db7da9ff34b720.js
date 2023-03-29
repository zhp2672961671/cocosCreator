System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Constant, _decorator, Component, tween, EffectManager, ResourceUtil, AudioManager, PoolManager, GameManager, _dec, _class, _crd, ccclass, property, FireBallBig;

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "./../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "../../framework/effectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourceUtil(extras) {
    _reporterNs.report("ResourceUtil", "../../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../framework/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "../../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../gameManager", _context.meta, extras);
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
      tween = _cc.tween;
    }, function (_unresolved_2) {
      Constant = _unresolved_2.Constant;
    }, function (_unresolved_3) {
      EffectManager = _unresolved_3.EffectManager;
    }, function (_unresolved_4) {
      ResourceUtil = _unresolved_4.ResourceUtil;
    }, function (_unresolved_5) {
      AudioManager = _unresolved_5.AudioManager;
    }, function (_unresolved_6) {
      PoolManager = _unresolved_6.PoolManager;
    }, function (_unresolved_7) {
      GameManager = _unresolved_7.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "07328JA8aFLSbjSpxzXqaIZ", "fireBallBig", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator); //大火球脚本: 炸开的时候才有伤害，跟小火球一样

      _export("FireBallBig", FireBallBig = (_dec = ccclass('FireBallBig'), _dec(_class = class FireBallBig extends Component {
        constructor(...args) {
          super(...args);
          this.scriptWarning = null;
          this.isPlayHitFireBall = false;
          this.skillInfo = null;
          this.baseInfo = null;
        }

        //敌人基本信息
        start() {// [3]
        }

        init(skillInfo, baseInfo, scriptParent) {
          this.skillInfo = skillInfo;
          this.baseInfo = baseInfo;
          this.isPlayHitFireBall = false;
          let playerWorPos = scriptParent.attackPos;
          this.node.setWorldPosition(playerWorPos.x, 23, playerWorPos.z);
          this.node.children.forEach(ndChild => {
            ndChild.active = true;
          });
          (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).instance.playParticle(this.node);
          tween(this.node).to(1 / skillInfo.flySpeed, {
            position: playerWorPos
          }, {
            easing: "elasticIn"
          }).call(() => {
            var _scriptParent$scriptW;

            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).SOUND.FIRE_BALL_BIG);
            this.isPlayHitFireBall = true; //关闭预警

            scriptParent == null ? void 0 : (_scriptParent$scriptW = scriptParent.scriptWarning) == null ? void 0 : _scriptParent$scriptW.hideWarning();
            this.node.children.forEach(ndChild => {
              ndChild.active = false;
            }); // console.log("大火球碰到地面");

            (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
              error: Error()
            }), ResourceUtil) : ResourceUtil).loadEffectRes("hit/hitFireBall2").then(prefab => {
              let ndEffect = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance.getNode(prefab, this.node);
              ndEffect.setWorldPosition(this.node.worldPosition);
              (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
                error: Error()
              }), EffectManager) : EffectManager).instance.playParticle(ndEffect, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).gameSpeed, true, 1.1, () => {
                (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                  error: Error()
                }), PoolManager) : PoolManager).instance.putNode(ndEffect);
                (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                  error: Error()
                }), PoolManager) : PoolManager).instance.putNode(this.node);
              });
            });
          }).start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=11b4be33b8b038c9f7ebc1c903db7da9ff34b720.js.map