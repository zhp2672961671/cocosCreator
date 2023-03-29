System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, PoolManager, _dec, _class, _crd, ccclass, property, WarningLine;

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
    }, function (_unresolved_2) {
      PoolManager = _unresolved_2.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "249fettRepLDLPIq30iHueC", "warningLine", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator); //直线预警脚本

      _export("WarningLine", WarningLine = (_dec = ccclass('WarningLine'), _dec(_class = class WarningLine extends Component {
        constructor(...args) {
          super(...args);
          this._scriptParent = null;
        }

        start() {// [3]
        }

        init(scale, scriptParent) {
          scriptParent.recycleWarning();
          this._scriptParent = scriptParent;
          this.node.setWorldPosition(scriptParent.node.worldPosition.x, 2.5, scriptParent.node.worldPosition.z);
          this.node.forward = scriptParent.attackForward;
          this.node.setScale(1, 1, scale);
          this.showWarning();
        }

        showWarning() {}

        hideWarning() {
          (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).instance.putNode(this.node);
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a2cd8e3051f96bc0cb3dc3f0eba3d3c2e6424d74.js.map