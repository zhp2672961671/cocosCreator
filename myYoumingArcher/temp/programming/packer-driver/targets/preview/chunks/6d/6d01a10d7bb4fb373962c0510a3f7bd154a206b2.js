System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, _dec, _class, _crd, ccclass, property, GameCamera;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7b36dlhjPBALJv1VQ9Wc7M+", "gameCamera", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator); //游戏相机脚本

      _export("GameCamera", GameCamera = (_dec = ccclass('GameCamera'), _dec(_class = class GameCamera extends Component {
        constructor() {
          super(...arguments);
          this.ndFollowTarget = null;
          this._oriCameraWorPos = new Vec3();
          this._targetCameraWorPos = new Vec3();
          this._curCameraWorPos = new Vec3();
        }

        //目标相机世界坐标
        start() {
          this._oriCameraWorPos = this.node.worldPosition.clone();
        }

        resetCamera() {
          this._targetCameraWorPos.set(this._oriCameraWorPos);
        } // update (deltaTime: number) {
        //     // [4]
        // }


        lateUpdate() {
          if (!this.ndFollowTarget || !this.ndFollowTarget.worldPosition || !this.ndFollowTarget.active) {
            return;
          }

          this._targetCameraWorPos = this._targetCameraWorPos.lerp(this.ndFollowTarget.worldPosition, 0.5);

          this._curCameraWorPos.set(this._oriCameraWorPos.x + this._targetCameraWorPos.x, this._oriCameraWorPos.y, this._oriCameraWorPos.z + this._targetCameraWorPos.z);

          this.node.setWorldPosition(this._curCameraWorPos);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6d01a10d7bb4fb373962c0510a3f7bd154a206b2.js.map