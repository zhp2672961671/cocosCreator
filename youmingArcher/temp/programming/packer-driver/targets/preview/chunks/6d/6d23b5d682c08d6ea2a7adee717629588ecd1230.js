System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, ParticleSystemComponent, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Test;

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
      Vec3 = _cc.Vec3;
      ParticleSystemComponent = _cc.ParticleSystemComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2b6adRTWCtEz5SjJi1RaOm5", "test", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'ParticleSystemComponent']);

      ({
        ccclass,
        property
      } = _decorator); //测试武器飞行脚本

      _export("Test", Test = (_dec = ccclass('Test'), _dec2 = property([Node]), _dec(_class = (_class2 = class Test extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "speed", _descriptor, this);

          _initializerDefineProperty(this, "range", _descriptor2, this);

          _initializerDefineProperty(this, "arrNdTarget", _descriptor3, this);

          this._arrOriPos = [];
          this._arrArriveEnd = [];
        }

        start() {
          // [3]
          this._arrOriPos = [];
          this._arrArriveEnd = [];
          this.arrNdTarget.forEach(ndItem => {
            this._arrOriPos.push(ndItem.worldPosition.clone());
          });
        }

        _resetAllPos() {
          this.arrNdTarget.forEach((ndItem, idx) => {
            ndItem.setWorldPosition(this._arrOriPos[idx]); //清除拖尾特效残留

            var arrParticle = ndItem.getComponentsInChildren(ParticleSystemComponent);
            arrParticle.forEach(item => {
              item.simulationSpeed = 1;
              item == null ? void 0 : item.clear();
              item == null ? void 0 : item.stop();
              item == null ? void 0 : item.play();
            });
          });
          this._arrArriveEnd = [];
        }

        update(deltaTime) {
          // [4]
          if (this.arrNdTarget.length) {
            for (var idx = 0; idx < this.arrNdTarget.length; idx++) {
              var ndItem = this.arrNdTarget[idx];
              var pos = ndItem.worldPosition.clone();

              if (pos.length() >= this.range) {
                if (this._arrArriveEnd.indexOf(idx) === -1) {
                  this._arrArriveEnd.push(idx);
                }

                if (this._arrArriveEnd.length >= this.arrNdTarget.length) {
                  this._resetAllPos();

                  break;
                }
              } else {
                ndItem.translate(new Vec3(0, 0, -deltaTime * this.speed), Node.NodeSpace.LOCAL);
              }
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "range", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 30;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "arrNdTarget", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6d23b5d682c08d6ea2a7adee717629588ecd1230.js.map