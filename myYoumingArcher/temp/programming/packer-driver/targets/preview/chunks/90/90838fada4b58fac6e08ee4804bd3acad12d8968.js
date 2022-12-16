System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, UIManager, AudioManager, SpriteFrame, SpriteComponent, Vec3, profiler, LabelComponent, _decorator, Component, Node, StorageManager, Constant, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, SettingPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./../../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./../../framework/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStorageManager(extras) {
    _reporterNs.report("StorageManager", "../../framework/storageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../../framework/constant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      SpriteFrame = _cc.SpriteFrame;
      SpriteComponent = _cc.SpriteComponent;
      Vec3 = _cc.Vec3;
      profiler = _cc.profiler;
      LabelComponent = _cc.LabelComponent;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      UIManager = _unresolved_2.UIManager;
    }, function (_unresolved_3) {
      AudioManager = _unresolved_3.AudioManager;
    }, function (_unresolved_4) {
      StorageManager = _unresolved_4.StorageManager;
    }, function (_unresolved_5) {
      Constant = _unresolved_5.Constant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "97ae7Pk189CwayAava/p+Ah", "settingPanel", undefined);

      __checkObsolete__(['SpriteFrame', 'SpriteComponent', 'Vec3', 'profiler', 'LabelComponent']);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator); //设置界面脚本

      _export("SettingPanel", SettingPanel = (_dec = ccclass('SettingPanel'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = class SettingPanel extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "sfSelect", _descriptor, this);

          _initializerDefineProperty(this, "sfUnSelect", _descriptor2, this);

          _initializerDefineProperty(this, "ndBtnVibration", _descriptor3, this);

          _initializerDefineProperty(this, "ndBtnMusic", _descriptor4, this);

          _initializerDefineProperty(this, "ndBtnDebug", _descriptor5, this);

          this._isMusicOpen = false;
          this._isVibrationOpen = false;
          this._isDebugOpen = false;
          this._curDotPos = new Vec3();
        }

        //当前选中点的位置
        start() {// [3]
        }

        show() {
          var _instance$getGlobalDa, _instance$getGlobalDa2;

          this._isMusicOpen = (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.getAudioSetting(true);

          this._changeState(this.ndBtnMusic, this._isMusicOpen);

          this._isVibrationOpen = (_instance$getGlobalDa = (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.getGlobalData("vibration")) != null ? _instance$getGlobalDa : true;

          this._changeState(this.ndBtnVibration, this._isVibrationOpen);

          this._isDebugOpen = (_instance$getGlobalDa2 = (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.getGlobalData("debug")) != null ? _instance$getGlobalDa2 : false;

          this._changeState(this.ndBtnDebug, this._isDebugOpen);
        }

        _changeState(ndParget, isOpen) {
          var _ndDot$getChildByName;

          var spCom = ndParget.getComponent(SpriteComponent);
          var ndDot = ndParget.getChildByName("dot");
          var lbTxt = (_ndDot$getChildByName = ndDot.getChildByName("txt")) == null ? void 0 : _ndDot$getChildByName.getComponent(LabelComponent);
          var ndDotPos = ndDot.position;

          if (isOpen) {
            spCom.spriteFrame = this.sfSelect;

            this._curDotPos.set(24, ndDotPos.y, ndDotPos.z);

            ndDot.setPosition(this._curDotPos);
            lbTxt.string = "开";
          } else {
            spCom.spriteFrame = this.sfUnSelect;

            this._curDotPos.set(-24, ndDotPos.y, ndDotPos.z);

            ndDot.setPosition(this._curDotPos);
            lbTxt.string = "关";
          }
        }

        onBtnVibrationClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SOUND.CLICK);
          this._isVibrationOpen = !this._isVibrationOpen;

          this._changeState(this.ndBtnVibration, this._isVibrationOpen);

          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setGlobalData("vibration", this._isVibrationOpen);
        }

        onBtnMusicClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SOUND.CLICK);
          this._isMusicOpen = !this._isMusicOpen;

          this._changeState(this.ndBtnMusic, this._isMusicOpen);

          if (this._isMusicOpen) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.openMusic();
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.openSound();
          } else {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.closeMusic();
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.closeSound();
          }
        }

        onBtnDebugClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SOUND.CLICK);
          this._isDebugOpen = !this._isDebugOpen;

          this._changeState(this.ndBtnDebug, this._isDebugOpen);

          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setGlobalData("debug", this._isDebugOpen);
          this._isDebugOpen === true ? profiler.showStats() : profiler.hideStats();
        }

        onBtnCloseClick() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SOUND.CLICK);
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).instance.hideDialog("setting/settingPanel");
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sfSelect", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sfUnSelect", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ndBtnVibration", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ndBtnMusic", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ndBtnDebug", [_dec6], {
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
//# sourceMappingURL=90838fada4b58fac6e08ee4804bd3acad12d8968.js.map