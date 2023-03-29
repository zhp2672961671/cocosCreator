System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, PlayerData, _decorator, Component, Node, SpriteComponent, LabelComponent, UITransformComponent, ClientEvent, Constant, UIManager, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, RevivePanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "./../../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientEvent(extras) {
    _reporterNs.report("ClientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../../framework/uiManager", _context.meta, extras);
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
      LabelComponent = _cc.LabelComponent;
      UITransformComponent = _cc.UITransformComponent;
    }, function (_unresolved_2) {
      PlayerData = _unresolved_2.PlayerData;
    }, function (_unresolved_3) {
      ClientEvent = _unresolved_3.ClientEvent;
    }, function (_unresolved_4) {
      Constant = _unresolved_4.Constant;
    }, function (_unresolved_5) {
      UIManager = _unresolved_5.UIManager;
    }, function (_unresolved_6) {
      AudioManager = _unresolved_6.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e234a52wbRAh4xy02FAvDwv", "revivePanel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'SpriteComponent', 'LabelComponent', 'UITransformComponent']);

      ({
        ccclass,
        property
      } = _decorator); //复活界面脚本

      _export("RevivePanel", RevivePanel = (_dec = ccclass('RevivePanel'), _dec2 = property(SpriteComponent), _dec3 = property(LabelComponent), _dec4 = property(Node), _dec5 = property(LabelComponent), _dec(_class = (_class2 = class RevivePanel extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "spPayIcon", _descriptor, this);

          _initializerDefineProperty(this, "lbLevel", _descriptor2, this);

          _initializerDefineProperty(this, "ndMask", _descriptor3, this);

          _initializerDefineProperty(this, "lbCountDown", _descriptor4, this);

          this._countDown = 10;
          this._maxMaskHeight = 190;
          this._curMaskHeight = 0;
          this._callback = null;
        }

        set countDown(value) {
          var _this$ndMask$getCompo;

          this._countDown = value;
          this.lbCountDown.string = String(Math.floor(this._countDown));
          this.lbLevel.string = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).instance.playerInfo.level;
          this._curMaskHeight += this._maxMaskHeight / (this._countDown * 120);
          this._curMaskHeight = this._curMaskHeight >= this._maxMaskHeight ? this._maxMaskHeight : this._curMaskHeight;
          (_this$ndMask$getCompo = this.ndMask.getComponent(UITransformComponent)) == null ? void 0 : _this$ndMask$getCompo.setContentSize(260, this._curMaskHeight);

          if (value < 0) {
            this._close();
          }
        }

        get countDown() {
          return this._countDown;
        }

        start() {// [3]
        }

        show(callback) {
          this._countDown = 10;
          this._curMaskHeight = 0;
          this._callback = callback;
        }

        onBtnSkipClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SOUND.CLICK);

          this._close();
        }

        onBtnReviveClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SOUND.CLICK);
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).instance.hideDialog("revive/revivePanel");
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).dispatchEvent((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.ON_REVIVE);
        }

        _close() {
          this._callback && this._callback();
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).instance.hideDialog("fight/fightPanel");
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).instance.hideDialog("revive/revivePanel");
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).instance.showDialog("settlement/settlementPanel");
        }

        update(deltaTime) {
          if (this.countDown > 0) {
            this.countDown -= deltaTime;
          }
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spPayIcon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbLevel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ndMask", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbCountDown", [_dec5], {
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
//# sourceMappingURL=0303a8082a3378bb1420c3935e611978db5b97f3.js.map