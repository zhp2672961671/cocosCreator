System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Constant, _decorator, Component, Node, ButtonComponent, SpriteComponent, ClientEvent, ResourceUtil, AudioManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, SkillIcon;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "./../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientEvent(extras) {
    _reporterNs.report("ClientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourceUtil(extras) {
    _reporterNs.report("ResourceUtil", "../../framework/resourceUtil", _context.meta, extras);
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
      ButtonComponent = _cc.ButtonComponent;
      SpriteComponent = _cc.SpriteComponent;
    }, function (_unresolved_2) {
      Constant = _unresolved_2.Constant;
    }, function (_unresolved_3) {
      ClientEvent = _unresolved_3.ClientEvent;
    }, function (_unresolved_4) {
      ResourceUtil = _unresolved_4.ResourceUtil;
    }, function (_unresolved_5) {
      AudioManager = _unresolved_5.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4a59a0RrSJPEbbf8yzemWPE", "skillIcon", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'ButtonComponent', 'Button', 'SpriteComponent']);

      ({
        ccclass,
        property
      } = _decorator); //技能图标脚本

      _export("SkillIcon", SkillIcon = (_dec = ccclass('SkillIcon'), _dec2 = property(ButtonComponent), _dec3 = property(SpriteComponent), _dec4 = property(Node), _dec(_class = (_class2 = class SkillIcon extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "btnCom", _descriptor, this);

          _initializerDefineProperty(this, "spIcon", _descriptor2, this);

          _initializerDefineProperty(this, "ndBg", _descriptor3, this);

          this._callback = null;
          this._itemInfo = null;
          this._isSelected = false;
        }

        onEnable() {
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).on((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.HIDE_SKILL_ICON_SELECTED, this._hideSelected, this);
        }

        onDisable() {
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).off((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.HIDE_SKILL_ICON_SELECTED, this._hideSelected, this);
        }

        start() {// [3]
        }

        init(idx, itemInfo, callback) {
          this._itemInfo = itemInfo;
          this._callback = callback;
          this._isSelected = false;

          if (idx === 0 && this._callback) {
            this._showSelected();

            this._callback(this._itemInfo);
          } else {
            this._hideSelected();
          }

          if (callback) {
            this.btnCom.transition = ButtonComponent.Transition.SCALE;
          } else {
            this.btnCom.transition = ButtonComponent.Transition.NONE;
          }

          (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
            error: Error()
          }), ResourceUtil) : ResourceUtil).setSpriteFrame("texture/skillIcon/" + itemInfo.icon, this.spIcon, err => {});
        }

        onItemClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SOUND.CLICK);

          if (!this._isSelected && this._callback) {
            (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
              error: Error()
            }), ClientEvent) : ClientEvent).dispatchEvent((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).EVENT_TYPE.HIDE_SKILL_ICON_SELECTED);

            this._callback(this._itemInfo);

            this._showSelected();
          }
        }

        _showSelected() {
          this._isSelected = true;
          this.ndBg.active = true;
        }

        _hideSelected() {
          this._isSelected = false;
          this.ndBg.active = false;
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnCom", [_dec2], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ndBg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bf392e0ff786f53a9e341b9dfb46c7d220df96aa.js.map