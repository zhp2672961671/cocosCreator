System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Util, _decorator, Component, Node, Vec3, EffectManager, GameManager, AudioManager, Constant, PoolManager, _dec, _class, _crd, ccclass, property, DispersionSurround;

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "./../../framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "../../framework/effectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../gameManager", _context.meta, extras);
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
      EffectManager = _unresolved_3.EffectManager;
    }, function (_unresolved_4) {
      GameManager = _unresolved_4.GameManager;
    }, function (_unresolved_5) {
      AudioManager = _unresolved_5.AudioManager;
    }, function (_unresolved_6) {
      Constant = _unresolved_6.Constant;
    }, function (_unresolved_7) {
      PoolManager = _unresolved_7.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1fdcfxvDc9CIZfp1zEdq2Yu", "dispersionSurround", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3']);

      //360度散射脚本: 挂载每个球上,而非父节点上
      ({
        ccclass,
        property
      } = _decorator);

      _export("DispersionSurround", DispersionSurround = (_dec = ccclass('DispersionSurround'), _dec(_class = class DispersionSurround extends Component {
        constructor(...args) {
          super(...args);
          this.baseInfo = null;
          this.skillInfo = null;
          this._curSpeed = 0;
          this._targetSpeed = 0;
          this._oriPos = null;
          this._oriEulerAngles = null;
          this._offsetPos = new Vec3();
          this._curWorPos = new Vec3();
          this._disappearRange = 20;
          this._targetWorPos = new Vec3();
          this._oriScale = new Vec3();
        }

        //初始缩放大小
        start() {// [3]
        }
        /**
        * 初始化 
        */


        init(skillInfo, baseInfo) {
          this.skillInfo = skillInfo;
          this.baseInfo = baseInfo;
          this.node.active = true;

          if (!this._oriPos) {
            this._oriPos = this.node.position.clone();
          }

          if (!this._oriEulerAngles) {
            this._oriEulerAngles = this.node.eulerAngles.clone();
          }

          this.node.setPosition(this._oriPos);
          this.node.eulerAngles.set(this._oriEulerAngles);
          this._targetSpeed = skillInfo.flySpeed;
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
        /**
         * 击中玩家后隐藏
         *
         * @memberof Arrow
         */


        hide() {
          var _this$node$parent;

          if (!this.node.parent) {
            return;
          }

          this.node.active = false; //如果dispersionSurround组里所有的球都隐藏了则回收整个dispersion预制体

          let isAllHide = (_this$node$parent = this.node.parent) == null ? void 0 : _this$node$parent.children.every(ndChild => {
            return ndChild.active === false;
          });

          if (isAllHide && this.node.parent) {
            (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.putNode(this.node.parent);
          }
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

          this.node.translate(this._targetWorPos, Node.NodeSpace.LOCAL); //超过玩家一定范围则隐藏

          this._curWorPos.set(this.node.worldPosition);

          Vec3.subtract(this._offsetPos, this._curWorPos, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer.worldPosition);

          if (this._offsetPos && this._offsetPos.length() >= this._disappearRange) {
            this.hide();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0ea1ccdd32b2fe810c952b13cd70dc1bc3abc80e.js.map