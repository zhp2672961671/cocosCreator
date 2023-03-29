System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, PlayerData, _decorator, Component, LabelComponent, SpriteComponent, Color, Constant, GameManager, EffectManager, AudioManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, DebugSkillItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "./../../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../../fight/gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "../../framework/effectManager", _context.meta, extras);
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
      PlayerData = _unresolved_2.PlayerData;
    }, function (_unresolved_3) {
      Constant = _unresolved_3.Constant;
    }, function (_unresolved_4) {
      GameManager = _unresolved_4.GameManager;
    }, function (_unresolved_5) {
      EffectManager = _unresolved_5.EffectManager;
    }, function (_unresolved_6) {
      AudioManager = _unresolved_6.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "46cbc5Ll/lDvotI3m9eD0Of", "debugSkillItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'LabelComponent', 'SpriteComponent', 'Color']);

      ({
        ccclass,
        property
      } = _decorator); //调试单个选项脚本

      _export("DebugSkillItem", DebugSkillItem = (_dec = ccclass('DebugSkillItem'), _dec2 = property(LabelComponent), _dec3 = property(SpriteComponent), _dec(_class = (_class2 = class DebugSkillItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lbLevelTxt", _descriptor, this);

          _initializerDefineProperty(this, "spCom", _descriptor2, this);

          this._colorSelected = new Color().fromHEX("#3CE649");
          this._colorUnSelected = new Color().fromHEX("#ffffff");
          this._isSelected = false;
          this._itemInfo = null;
        }

        //子节点数据
        start() {// [3]
        }

        init(itemInfo) {
          this.lbLevelTxt.string = itemInfo.name;
          this._itemInfo = itemInfo;

          this._changeState();
        }
        /**
         * 切换选中与非选中状态
         *
         * @private
         * @memberof DebugSkillItem
         */


        _changeState() {
          this._isSelected = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).instance.playerInfo.arrSkill.includes(this._itemInfo.ID);

          if (this._isSelected) {
            this.spCom.color = this._colorSelected;
          } else {
            this.spCom.color = this._colorUnSelected;
          }
        }

        onBtnClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SOUND.GET_SKILL);

          if (this._isSelected) {
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).instance.reducePlayerSkill(this._itemInfo);
          } else {
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).instance.addPlayerSkill(this._itemInfo);
            (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).instance.loadAndPlayEffect(true, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).ndPlayer, "levelUp/levelUp", 1, null, null, false, true, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).gameSpeed, true);
          }

          this._changeState();
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
//# sourceMappingURL=e76a2797a25abf38d9ead5c033c26f44f42921d3.js.map