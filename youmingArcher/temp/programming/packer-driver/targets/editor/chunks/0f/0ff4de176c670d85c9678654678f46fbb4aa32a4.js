System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Constant, PlayerData, GameManager, SpriteComponent, UIManager, _decorator, Component, Node, SpriteFrame, LabelComponent, ClientEvent, SkillList, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, SettlementPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "./../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "./../../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./../../fight/gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./../../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientEvent(extras) {
    _reporterNs.report("ClientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillList(extras) {
    _reporterNs.report("SkillList", "../pause/skillList", _context.meta, extras);
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
      SpriteComponent = _cc.SpriteComponent;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      SpriteFrame = _cc.SpriteFrame;
      LabelComponent = _cc.LabelComponent;
    }, function (_unresolved_2) {
      Constant = _unresolved_2.Constant;
    }, function (_unresolved_3) {
      PlayerData = _unresolved_3.PlayerData;
    }, function (_unresolved_4) {
      GameManager = _unresolved_4.GameManager;
    }, function (_unresolved_5) {
      UIManager = _unresolved_5.UIManager;
    }, function (_unresolved_6) {
      ClientEvent = _unresolved_6.ClientEvent;
    }, function (_unresolved_7) {
      SkillList = _unresolved_7.SkillList;
    }, function (_unresolved_8) {
      AudioManager = _unresolved_8.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6bc867ji2JNjZoTsbw3Odz5", "settlementPanel", undefined);

      __checkObsolete__(['SpriteComponent']);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SpriteFrame', 'LabelComponent']);

      ({
        ccclass,
        property
      } = _decorator); //结算界面脚本

      _export("SettlementPanel", SettlementPanel = (_dec = ccclass('SettlementPanel'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec4 = property(SpriteComponent), _dec5 = property(LabelComponent), _dec6 = property(Node), _dec(_class = (_class2 = class SettlementPanel extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "sfTitleWin", _descriptor, this);

          _initializerDefineProperty(this, "sfTitleFail", _descriptor2, this);

          _initializerDefineProperty(this, "spTitle", _descriptor3, this);

          _initializerDefineProperty(this, "lbLevel", _descriptor4, this);

          _initializerDefineProperty(this, "ndSkillList", _descriptor5, this);

          this._callback = null;
        }

        start() {// [3]
        }

        show(callback) {
          this._callback = callback;
          this.lbLevel.string = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).instance.playerInfo.level;

          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isWin) {
            this.spTitle.spriteFrame = this.sfTitleWin;
          } else {
            this.spTitle.spriteFrame = this.sfTitleWin;
          }

          let scriptSkillList = this.ndSkillList.getComponent(_crd && SkillList === void 0 ? (_reportPossibleCrUseOfSkillList({
            error: Error()
          }), SkillList) : SkillList);
          scriptSkillList.init();
        }

        onBtnHomeClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SOUND.CLICK);
          this._callback && this._callback();

          if (!(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isWin) {
            //失败的时候清空技能和层级
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).instance.playerInfo.arrSkill = [];
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).instance.playerInfo.level = 1;
            (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
              error: Error()
            }), PlayerData) : PlayerData).instance.savePlayerInfoToLocalCache();
          }

          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).instance.hideDialog("settlement/settlementPanel");
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).instance.showDialog("home/homePanel");
        }

        onBtnPlayAgainClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SOUND.CLICK);
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).instance.hideDialog("settlement/settlementPanel");
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).instance.showDialog("fight/fightPanel");
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).dispatchEvent((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.ON_GAME_INIT);
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sfTitleWin", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sfTitleFail", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spTitle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbLevel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ndSkillList", [_dec6], {
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
//# sourceMappingURL=0ff4de176c670d85c9678654678f46fbb4aa32a4.js.map