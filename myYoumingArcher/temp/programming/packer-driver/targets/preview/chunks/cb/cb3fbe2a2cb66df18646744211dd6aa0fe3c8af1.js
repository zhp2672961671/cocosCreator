System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Constant, _decorator, Component, game, PhysicsSystem, StorageManager, Util, _dec, _class, _crd, ccclass, property, main;

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "./framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStorageManager(extras) {
    _reporterNs.report("StorageManager", "./framework/storageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "./framework/util", _context.meta, extras);
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
      game = _cc.game;
      PhysicsSystem = _cc.PhysicsSystem;
    }, function (_unresolved_2) {
      Constant = _unresolved_2.Constant;
    }, function (_unresolved_3) {
      StorageManager = _unresolved_3.StorageManager;
    }, function (_unresolved_4) {
      Util = _unresolved_4.Util;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e6cdfvKp2ZFaptVtIM6k1Cy", "main", undefined);

      __checkObsolete__(['_decorator', 'Component', 'game', 'Game', 'PhysicsSystem', 'profiler', 'sys', 'find']);

      // import { SdkUtil } from './framework/sdkUtil';
      // import { UIManager } from './framework/uiManager';
      //挂载到fight场景下的canvas节点
      ({
        ccclass,
        property
      } = _decorator);

      _export("main", main = (_dec = ccclass('main'), _dec(_class = class main extends Component {
        constructor() {
          super(...arguments);
          this._minLoadDuration = 4;
        }

        //加载开屏最小持续时间
        onEnable() {}

        onDisable() {}

        start() {
          var frameRate = (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.getGlobalData("frameRate");

          if (typeof frameRate !== "number") {
            frameRate = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).GAME_FRAME; //@ts-ignore

            if (window.wx && (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
              error: Error()
            }), Util) : Util).checkIsLowPhone()) {
              frameRate = 30;
            }

            (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
              error: Error()
            }), StorageManager) : StorageManager).instance.setGlobalData("frameRate", frameRate);
          }

          console.log("###frameRate", frameRate); // 设置帧率

          game.frameRate = frameRate; // 获取或设置每步模拟消耗的固定时间（以 s 为单位）。

          PhysicsSystem.instance.fixedTimeStep = 1 / frameRate;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cb3fbe2a2cb66df18646744211dd6aa0fe3c8af1.js.map