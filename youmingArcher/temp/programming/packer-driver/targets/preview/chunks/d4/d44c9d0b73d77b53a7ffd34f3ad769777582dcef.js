System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LocalConfig, GameManager, SkillItem, Util, UIManager, Constant, PlayerData, _decorator, Component, Node, SpriteComponent, LabelComponent, AudioManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, SkillPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLocalConfig(extras) {
    _reporterNs.report("LocalConfig", "./../../framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./../../fight/gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillItem(extras) {
    _reporterNs.report("SkillItem", "./skillItem", _context.meta, extras);
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
    }, function (_unresolved_2) {
      LocalConfig = _unresolved_2.LocalConfig;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }, function (_unresolved_4) {
      SkillItem = _unresolved_4.SkillItem;
    }, function (_unresolved_5) {
      Util = _unresolved_5.Util;
    }, function (_unresolved_6) {
      UIManager = _unresolved_6.UIManager;
    }, function (_unresolved_7) {
      Constant = _unresolved_7.Constant;
    }, function (_unresolved_8) {
      PlayerData = _unresolved_8.PlayerData;
    }, function (_unresolved_9) {
      AudioManager = _unresolved_9.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ccff8loXZRAR5uAetyAqv+L", "skillPanel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SpriteComponent', 'LabelComponent']);

      ({
        ccclass,
        property
      } = _decorator); //技能界面脚本

      _export("SkillPanel", SkillPanel = (_dec = ccclass('SkillPanel'), _dec2 = property(Node), _dec3 = property(SpriteComponent), _dec4 = property(LabelComponent), _dec(_class = (_class2 = class SkillPanel extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "ndSkills", _descriptor, this);

          _initializerDefineProperty(this, "spRefreshIcon", _descriptor2, this);

          _initializerDefineProperty(this, "lbGold", _descriptor3, this);

          this._gold = 50;
          this._callback = null;
        }

        start() {// [3]
        }

        show(callback) {
          this._callback = callback;
          this.lbGold.string = "\u83B7\u5F97 " + this._gold;
          var arrLock = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).instance.getLockPlyerSkill();
          arrLock = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).shuffle(arrLock);
          this.ndSkills.children.forEach((ndChild, idx, arr) => {
            if (arrLock[idx]) {
              var info = (_crd && LocalConfig === void 0 ? (_reportPossibleCrUseOfLocalConfig({
                error: Error()
              }), LocalConfig) : LocalConfig).instance.queryByID("playerSkill", arrLock[idx].ID);
              ndChild.active = true;
              var scriptItem = ndChild.getComponent(_crd && SkillItem === void 0 ? (_reportPossibleCrUseOfSkillItem({
                error: Error()
              }), SkillItem) : SkillItem);
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
          }), Constant) : Constant).SOUND.SELL);
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).addGold(this._gold);

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
          }), UIManager) : UIManager).instance.hideDialog("skill/skillPanel");
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).instance.showDialog("fight/fightPanel");
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ndSkills", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spRefreshIcon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbGold", [_dec4], {
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
//# sourceMappingURL=d44c9d0b73d77b53a7ffd34f3ad769777582dcef.js.map