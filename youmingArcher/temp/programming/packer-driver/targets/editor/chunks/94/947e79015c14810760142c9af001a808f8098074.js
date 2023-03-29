System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GameManager, ClientEvent, Constant, _decorator, Component, UITransformComponent, tween, clamp, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, BossBloodBar;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./../../fight/gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientEvent(extras) {
    _reporterNs.report("ClientEvent", "./../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "./../../framework/constant", _context.meta, extras);
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
      UITransformComponent = _cc.UITransformComponent;
      tween = _cc.tween;
      clamp = _cc.clamp;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }, function (_unresolved_3) {
      ClientEvent = _unresolved_3.ClientEvent;
    }, function (_unresolved_4) {
      Constant = _unresolved_4.Constant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "320dc/VulBCMLlzDmV4dtU0", "bossBloodBar", undefined);

      __checkObsolete__(['_decorator', 'Component', 'UITransformComponent', 'tween', 'clamp']);

      ({
        ccclass,
        property
      } = _decorator); //boss血条脚本

      _export("BossBloodBar", BossBloodBar = (_dec = ccclass('BossBloodBar'), _dec2 = property(UITransformComponent), _dec3 = property(UITransformComponent), _dec(_class = (_class2 = class BossBloodBar extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "UIComWhiteBar", _descriptor, this);

          _initializerDefineProperty(this, "UIComRedBar", _descriptor2, this);

          this._whiteBarHeight = 28;
          this._redBarHeight = 28;
          this._totalBlood = 0;
          this._curBlood = 0;
          this._maxBossWhiteBarWidth = 560;
          this._maxBossRedBarWidth = 560;
          this._isBloodEmpty = false;
        }

        //血条是否为空
        onEnable() {
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).on((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.REFRESH_BOSS_BLOOD, this._refreshBossBlood, this);
        }

        onDisable() {
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).off((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.REFRESH_BOSS_BLOOD, this._refreshBossBlood, this);
        }

        start() {// [3]
        }
        /**
         * 展示血条
         *
         * @param {*} scriptParent 血条使用者绑定的节点，如玩家或者小怪
         * @param {number} totalBlood 总血量
         * @param {boolean} [isInit=true] 是否是初次展示，初次展示则显示完整血量，否则刷新的时候展示当前血量
         * @memberof BloodBar
         */


        show(scriptParent, totalBlood, isInit = true) {
          this.node.active = true;
          this._totalBlood = totalBlood;
          this._isBloodEmpty = false;

          if (isInit) {
            this._curBlood = this._totalBlood;
          } //当前血量占全部的比例


          let ratio = this._curBlood / this._totalBlood;
          ratio = clamp(ratio, 0, 1); //进度条宽度设置

          this.UIComWhiteBar.setContentSize(ratio * this._maxBossWhiteBarWidth, this._whiteBarHeight);
          this.UIComRedBar.setContentSize(ratio * this._maxBossRedBarWidth, this._redBarHeight);
        }
        /**
         * 刷新boss血量
         *
         * @param {number} num 血量值
         * @memberof BossBloodBar
         */


        _refreshBossBlood(num) {
          this._curBlood += num;
          let ratio = this._curBlood / this._totalBlood;
          ratio = ratio <= 0 ? 0 : ratio;

          if (num < 0) {
            //减血
            this.UIComRedBar.setContentSize(this._maxBossRedBarWidth * ratio, this._whiteBarHeight);

            if (!this._isBloodEmpty) {
              this._isBloodEmpty = ratio <= 0;
              tween(this.UIComWhiteBar).to(0.7, {
                width: this._maxBossWhiteBarWidth * ratio
              }).call(() => {
                if (ratio <= 0) {
                  this.node.active = false;
                  (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                    error: Error()
                  }), GameManager) : GameManager).scriptBoss.isDie = true;
                }
              }).start();
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "UIComWhiteBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "UIComRedBar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=947e79015c14810760142c9af001a808f8098074.js.map