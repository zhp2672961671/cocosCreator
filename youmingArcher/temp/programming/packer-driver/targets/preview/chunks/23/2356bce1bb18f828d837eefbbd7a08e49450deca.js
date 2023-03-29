System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Constant, LocalConfig, SkillIcon, PoolManager, _decorator, Component, Prefab, PlayerData, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, SkillList;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "./../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalConfig(extras) {
    _reporterNs.report("LocalConfig", "./../../framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillIcon(extras) {
    _reporterNs.report("SkillIcon", "./skillIcon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "./../../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "../../framework/playerData", _context.meta, extras);
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
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      Constant = _unresolved_2.Constant;
    }, function (_unresolved_3) {
      LocalConfig = _unresolved_3.LocalConfig;
    }, function (_unresolved_4) {
      SkillIcon = _unresolved_4.SkillIcon;
    }, function (_unresolved_5) {
      PoolManager = _unresolved_5.PoolManager;
    }, function (_unresolved_6) {
      PlayerData = _unresolved_6.PlayerData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7f904J+miVGoI/YxEAcqFJg", "skillList", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator); //技能列表脚本

      _export("SkillList", SkillList = (_dec = ccclass('SkillList'), _dec2 = property(Prefab), _dec(_class = (_class2 = class SkillList extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pbSkillIcon", _descriptor, this);
        }

        start() {// [3]
        }

        init(callback) {
          var arrUnLockSkill = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).instance.playerInfo.arrSkill.concat();
          this.node.children.forEach(ndChild => {
            ndChild.active = false;
          });

          if (arrUnLockSkill.length > (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).MAX_SKILL_ICON_NUM) {
            arrUnLockSkill.length = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).MAX_SKILL_ICON_NUM;
          }

          arrUnLockSkill.forEach((skillInfo, idx) => {
            var ndChild;

            if (idx >= this.node.children.length) {
              ndChild = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance.getNode(this.pbSkillIcon, this.node);
            } else {
              ndChild = this.node.children[idx];
            }

            ndChild.active = true;
            var itemInfo = (_crd && LocalConfig === void 0 ? (_reportPossibleCrUseOfLocalConfig({
              error: Error()
            }), LocalConfig) : LocalConfig).instance.queryByID("playerSkill", arrUnLockSkill[idx]);
            var scriptSkillIcon = ndChild.getComponent(_crd && SkillIcon === void 0 ? (_reportPossibleCrUseOfSkillIcon({
              error: Error()
            }), SkillIcon) : SkillIcon);
            scriptSkillIcon.init(idx, itemInfo, callback);
          });
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pbSkillIcon", [_dec2], {
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
//# sourceMappingURL=2356bce1bb18f828d837eefbbd7a08e49450deca.js.map