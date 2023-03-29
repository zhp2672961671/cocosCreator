System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GameManager, _decorator, Component, tween, Vec3, PoolManager, _dec, _class, _crd, ccclass, property, WarningCircle;

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./../gameManager", _context.meta, extras);
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
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }, function (_unresolved_3) {
      PoolManager = _unresolved_3.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f4b57yoodpAooaYvsjlnvtZ", "warningCircle", undefined);

      __checkObsolete__(['_decorator', 'Component', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator); //圆圈预警脚本

      _export("WarningCircle", WarningCircle = (_dec = ccclass('WarningCircle'), _dec(_class = class WarningCircle extends Component {
        constructor() {
          super(...arguments);
          this._tweenLoop = null;
          this._tweenHide = null;
          this._targetWorPos = new Vec3();
          this._targetScale_1 = new Vec3();
          this._targetScale_2 = new Vec3();
          this._targetScale_3 = new Vec3();
          this._scriptParent = null;
        }

        start() {// [3]
        }

        init(scale, scriptParent) {
          scriptParent.recycleWarning();
          this._scriptParent = scriptParent;

          this._targetScale_1.set(scale, scale, scale);

          this._targetScale_2.set(scale * 0.8, scale * 0.8, scale * 0.8);

          this.node.setScale(this._targetScale_3);
          var playerWorPos = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer.worldPosition;

          this._targetWorPos.set(playerWorPos.x, playerWorPos.y + 0.2, playerWorPos.z);

          this.node.setWorldPosition(this._targetWorPos);

          this._closeTween();

          this.showWarning();
        }

        showWarning() {
          var showTime = 0.4;
          this._tweenLoop = tween(this.node).to(showTime, {
            scale: this._targetScale_1
          }, {
            easing: "smooth"
          }).start();
        }

        hideWarning() {
          this._closeTween();

          this._tweenHide = tween(this.node).to(0.3, {
            scale: this._targetScale_3
          }, {
            easing: "backInOut"
          }).call(() => {
            (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.putNode(this.node);

            this._closeTween();
          }).start();
        }

        _closeTween() {
          if (this._tweenHide) {
            this._tweenHide.stop();

            this._tweenHide = null;
          }

          if (this._tweenLoop) {
            this._tweenLoop.stop();

            this._tweenLoop = null;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e977a199ead9cc156f799d7731dead29e3b04909.js.map