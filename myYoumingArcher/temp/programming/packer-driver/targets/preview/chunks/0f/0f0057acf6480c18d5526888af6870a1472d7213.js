System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _dec2, _class, _class2, _descriptor, _class3, _crd, ccclass, property, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8e95bLaPptDnrwd4yvi8T3l", "gameManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'CameraComponent', 'Vec3', 'SkeletalAnimationComponent', 'ParticleSystemComponent', 'AnimationComponent', 'find', 'Prefab']);

      // import { PoolManager } from '../framework/poolManager';
      ({
        ccclass,
        property
      } = _decorator); //游戏管理脚本

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property(Node), _dec(_class = (_class2 = (_class3 = class GameManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "ndLight", _descriptor, this);

          this.mapInfo = {};
        }

        //本层敌人攻速加成
        start() {}

        update(deltaTime) {}

      }, _class3.mainCamera = null, _class3.isGameStart = false, _class3.isGamePause = false, _class3.isGameOver = false, _class3.ndPlayer = null, _class3.ndBoss = null, _class3.ndGameManager = void 0, _class3.ndEffectManager = null, _class3.ndMapManager = null, _class3.isRevive = false, _class3.isTesting = true, _class3.isFirstLoad = false, _class3.arrMonster = [], _class3.existentNum = 0, _class3.attackAddition = 1, _class3.defenseAddition = 1, _class3.hpAddition = 1, _class3.moveSpeedAddition = 1, _class3.attackSpeedAddition = 1, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ndLight", [_dec2], {
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
//# sourceMappingURL=0f0057acf6480c18d5526888af6870a1472d7213.js.map