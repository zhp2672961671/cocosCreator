System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, JetFires;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "20cb3raNbRA/YYlE7ckG1Nj", "jetFires", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator); //直线范围型的火焰

      _export("JetFires", JetFires = (_dec = ccclass('JetFires'), _dec(_class = class JetFires extends Component {
        constructor(...args) {
          super(...args);
          this.skillInfo = null;
          this.baseInfo = null;
        }

        start() {// [3]
        }

        init(skillInfo, baseInfo, scriptParent) {
          this.skillInfo = skillInfo;
          this.baseInfo = baseInfo;
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4844f9cb16902ae1d44d2314ffa6df07f3f15ab9.js.map