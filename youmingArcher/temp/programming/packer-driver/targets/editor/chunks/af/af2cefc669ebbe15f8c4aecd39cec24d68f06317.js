System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ShopItem, Util, UIManager, Constant, PlayerData, _decorator, Component, Node, SpriteComponent, LocalConfig, AudioManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ShopPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfShopItem(extras) {
    _reporterNs.report("ShopItem", "./shopItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "./../../framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./../../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "./../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "./../../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalConfig(extras) {
    _reporterNs.report("LocalConfig", "../../framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../framework/audioManager", _context.meta, extras);
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
      SpriteComponent = _cc.SpriteComponent;
    }, function (_unresolved_2) {
      ShopItem = _unresolved_2.ShopItem;
    }, function (_unresolved_3) {
      Util = _unresolved_3.Util;
    }, function (_unresolved_4) {
      UIManager = _unresolved_4.UIManager;
    }, function (_unresolved_5) {
      Constant = _unresolved_5.Constant;
    }, function (_unresolved_6) {
      PlayerData = _unresolved_6.PlayerData;
    }, function (_unresolved_7) {
      LocalConfig = _unresolved_7.LocalConfig;
    }, function (_unresolved_8) {
      AudioManager = _unresolved_8.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "434ebEgTgJEaYZMyqxnlnJN", "shopPanel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SpriteComponent', 'LabelComponent']);

      ({
        ccclass,
        property
      } = _decorator); //商店脚本

      _export("ShopPanel", ShopPanel = (_dec = ccclass('ShopPanel'), _dec2 = property(Node), _dec3 = property(SpriteComponent), _dec(_class = (_class2 = class ShopPanel extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ndSkills", _descriptor, this);

          _initializerDefineProperty(this, "spRefreshIcon", _descriptor2, this);

          this._callback = null;
        }

        start() {// [3]
        }

        show(callback) {
          this._callback = callback;
          let arrLock = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).instance.getLockPlyerSkill();
          arrLock = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).shuffle(arrLock);
          this.ndSkills.children.forEach((ndChild, idx, arr) => {
            if (arrLock[idx]) {
              let info = (_crd && LocalConfig === void 0 ? (_reportPossibleCrUseOfLocalConfig({
                error: Error()
              }), LocalConfig) : LocalConfig).instance.queryByID("playerSkill", arrLock[idx].ID);
              ndChild.active = true;
              let scriptItem = ndChild.getComponent(_crd && ShopItem === void 0 ? (_reportPossibleCrUseOfShopItem({
                error: Error()
              }), ShopItem) : ShopItem);
              scriptItem.init(info, () => {
                this._close();
              });
            } else {
              ndChild.active = false;
            }
          });
        }

        onBtnGiveUpClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SOUND.CLICK);

          this._close();
        }

        onBtnRefreshClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SOUND.CLICK);
          this.show(this._callback);
        }

        _close() {
          this._callback && this._callback();
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).instance.hideDialog("shop/shopPanel");
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).instance.showDialog("fight/fightPanel");
        }

        onBtnCloseClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SOUND.CLICK);

          this._close();
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ndSkills", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spRefreshIcon", [_dec3], {
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
//# sourceMappingURL=af2cefc669ebbe15f8c4aecd39cec24d68f06317.js.map