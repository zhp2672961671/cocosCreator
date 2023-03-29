System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Constant, UIManager, PlayerData, _decorator, Component, LabelComponent, SpriteComponent, Color, ClientEvent, AudioManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, DebugLevelItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "./../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./../../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "./../../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientEvent(extras) {
    _reporterNs.report("ClientEvent", "../../framework/clientEvent", _context.meta, extras);
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
      LabelComponent = _cc.LabelComponent;
      SpriteComponent = _cc.SpriteComponent;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      Constant = _unresolved_2.Constant;
    }, function (_unresolved_3) {
      UIManager = _unresolved_3.UIManager;
    }, function (_unresolved_4) {
      PlayerData = _unresolved_4.PlayerData;
    }, function (_unresolved_5) {
      ClientEvent = _unresolved_5.ClientEvent;
    }, function (_unresolved_6) {
      AudioManager = _unresolved_6.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1cca3We2mBMHb1+U22HEfn6", "debugLevelItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'LabelComponent', 'SpriteComponent', 'Color']);

      ({
        ccclass,
        property
      } = _decorator); //调试关卡等级脚本

      _export("DebugLevelItem", DebugLevelItem = (_dec = ccclass('DebugLevelItem'), _dec2 = property(LabelComponent), _dec3 = property(SpriteComponent), _dec(_class = (_class2 = class DebugLevelItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lbLevelTxt", _descriptor, this);

          _initializerDefineProperty(this, "spCom", _descriptor2, this);

          this._colorSelected = new Color().fromHEX("#3CE649");
          this._colorUnSelected = new Color().fromHEX("#ffffff");
          this._isSelected = false;
          this._level = 0;
          this._itemInfo = null;
        }

        //自节点数据
        onEnable() {
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).on((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.HIDE_DEBUG_LEVEL_SELECTED, this._hideDebugLevelSelected, this);
        }

        onDisable() {
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).off((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.HIDE_DEBUG_LEVEL_SELECTED, this._hideDebugLevelSelected, this);
        }

        start() {// [3]
        }
        /**
         *  初始化
         *
         * @param {*} itemInfo
         * @memberof DebugLevelItem
         */


        init(itemInfo) {
          this._level = itemInfo.ID;
          this.lbLevelTxt.string = `${this._level}`;
          this._itemInfo = itemInfo;

          this._refreshState();
        }
        /**
         * 切换选中与非选中状态
         *
         * @private
         * @memberof DebugSkillItem
         */


        _refreshState() {
          this._isSelected = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).instance.playerInfo.level === this._itemInfo.ID;

          if (this._isSelected) {
            this.spCom.color = this._colorSelected;
          } else {
            this.spCom.color = this._colorUnSelected;
          }
        }
        /**
         * 点击按钮
         */


        onBtnClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SOUND.CLICK);
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).dispatchEvent((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.HIDE_DEBUG_LEVEL_SELECTED);
          this._isSelected = true;

          this._refreshState();

          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).dispatchEvent((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.RECYCLE_ALL);
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).instance.playerInfo.level = Number(this._level);
          (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).instance.savePlayerInfoToLocalCache();
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).dispatchEvent((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.ON_GAME_INIT);
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).instance.hideDialog("debug/debugPanel");
        }
        /**
         * 隐藏选中状态
         *
         * @private
         * @memberof DebugLevelItem
         */


        _hideDebugLevelSelected() {
          this._isSelected = false;

          this._refreshState();
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbLevelTxt", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spCom", [_dec3], {
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
//# sourceMappingURL=d3f77b1fe3f62f7b4352cbef3f4849e72f021cfb.js.map