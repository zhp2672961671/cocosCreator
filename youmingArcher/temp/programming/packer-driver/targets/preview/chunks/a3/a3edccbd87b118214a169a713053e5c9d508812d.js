System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Util, _decorator, Component, LabelComponent, Vec3, tween, UIOpacityComponent, isValid, SpriteFrame, SpriteComponent, UITransformComponent, Color, PoolManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, tips;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "./../../framework/util", _context.meta, extras);
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
      LabelComponent = _cc.LabelComponent;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      UIOpacityComponent = _cc.UIOpacityComponent;
      isValid = _cc.isValid;
      SpriteFrame = _cc.SpriteFrame;
      SpriteComponent = _cc.SpriteComponent;
      UITransformComponent = _cc.UITransformComponent;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      Util = _unresolved_2.Util;
    }, function (_unresolved_3) {
      PoolManager = _unresolved_3.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a91d7M56W1FG4vm4cXb+REy", "tips", undefined);

      __checkObsolete__(['_decorator', 'Component', 'LabelComponent', 'Vec3', 'tween', 'UIOpacityComponent', 'isValid', 'SpriteFrame', 'SpriteComponent', 'UITransformComponent', 'Color']);

      ({
        ccclass,
        property
      } = _decorator); //提示脚本

      _export("tips", tips = (_dec = ccclass('tips'), _dec2 = property(LabelComponent), _dec3 = property(SpriteComponent), _dec4 = property(SpriteComponent), _dec5 = property(UIOpacityComponent), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec(_class = (_class2 = class tips extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lbTips", _descriptor, this);

          _initializerDefineProperty(this, "spIcon", _descriptor2, this);

          _initializerDefineProperty(this, "spBg", _descriptor3, this);

          _initializerDefineProperty(this, "UIOpacityBg", _descriptor4, this);

          _initializerDefineProperty(this, "sfGold", _descriptor5, this);

          _initializerDefineProperty(this, "sfHeart", _descriptor6, this);

          this._movePos = new Vec3();
          this._curTipPos = new Vec3();
          this._uiTipTargetPos = new Vec3(0, 230, 0);
        }

        //文字提示目标位置
        start() {}

        show(content, type, targetPos, scale, callback) {
          var _this$lbTips, _this$lbTips$node, _this$lbTips$node$get;

          if (callback === void 0) {
            callback = () => {};
          }

          this.node.setScale(scale, scale, scale);
          var size = (_this$lbTips = this.lbTips) == null ? void 0 : (_this$lbTips$node = _this$lbTips.node) == null ? void 0 : (_this$lbTips$node$get = _this$lbTips$node.getComponent(UITransformComponent)) == null ? void 0 : _this$lbTips$node$get.contentSize;

          if (!isValid(size)) {
            //size不存在，自我销毁
            (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.putNode(this.node);
            return;
          }

          this.lbTips.string = content;
          this.lbTips.color = new Color(214, 132, 53, 255);

          if (type === 'gold' || type === 'heart') {
            this.spBg.enabled = false;

            this._movePos.set(0, 0, 0);

            this._curTipPos.set(0, 0, 0);

            this.UIOpacityBg.opacity = 50;

            if (type === 'gold') {
              this.spIcon.spriteFrame = this.sfGold;
            } else if (type === 'heart') {
              this.spIcon.spriteFrame = this.sfHeart;
            }

            this.lbTips.color = new Color(255, 255, 255, 255);
            this.lbTips.string = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
              error: Error()
            }), Util) : Util).formatValue(Number(content));
            tween(this.node).to(1.2, {
              scale: new Vec3(scale, scale, scale)
            }, {
              easing: 'smooth'
            }).start();
            tween(this.UIOpacityBg).to(0.8, {
              opacity: 255
            }, {
              easing: 'smooth'
            }).to(0.4, {
              opacity: 0
            }, {
              easing: 'smooth'
            }).call(() => {
              callback && callback();
              (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance.putNode(this.node);
            }).start();
          } else {
            //纯文字提示
            this.spBg.enabled = true;
            this.UIOpacityBg.opacity = 255;
            this.node.setPosition(targetPos);
            this.spIcon.node.active = false;
            this.scheduleOnce(() => {
              tween(this.node).to(1.1, {
                position: this._uiTipTargetPos
              }, {
                easing: 'smooth'
              }).call(() => {
                callback && callback();
                (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                  error: Error()
                }), PoolManager) : PoolManager).instance.putNode(this.node);
              }).start();
              tween(this.UIOpacityBg).to(0.7, {
                opacity: 220
              }, {
                easing: 'smooth'
              }).to(0.4, {
                opacity: 0
              }, {
                easing: 'smooth'
              }).call(() => {}).start();
            }, 0.8);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbTips", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spIcon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spBg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "UIOpacityBg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sfGold", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sfHeart", [_dec7], {
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
//# sourceMappingURL=a3edccbd87b118214a169a713053e5c9d508812d.js.map