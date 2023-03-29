System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Constant, UIManager, _decorator, Component, AnimationComponent, ClientEvent, GameManager, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, LoadingPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "./../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./../../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientEvent(extras) {
    _reporterNs.report("ClientEvent", "../../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../../fight/gameManager", _context.meta, extras);
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
      AnimationComponent = _cc.AnimationComponent;
    }, function (_unresolved_2) {
      Constant = _unresolved_2.Constant;
    }, function (_unresolved_3) {
      UIManager = _unresolved_3.UIManager;
    }, function (_unresolved_4) {
      ClientEvent = _unresolved_4.ClientEvent;
    }, function (_unresolved_5) {
      GameManager = _unresolved_5.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "951bd+IBg9Bz438MxpTOrH1", "loadingPanel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'AnimationComponent']);

      ({
        ccclass,
        property
      } = _decorator); //加载界面脚本

      _export("LoadingPanel", LoadingPanel = (_dec = ccclass('LoadingPanel'), _dec2 = property(AnimationComponent), _dec(_class = (_class2 = class LoadingPanel extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "aniCloud", _descriptor, this);

          this._isShowOver = false;
          this._isNeedHide = false;
          this._showCb = null;
          this._hideCb = null;
        }

        onEnable() {
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).on((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.HIDE_LOADING_PANEL, this._hideLoadingPanel, this);
        }

        onDisable() {
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).off((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.HIDE_LOADING_PANEL, this._hideLoadingPanel, this);
        }

        start() {// [3]
        }

        show(callback) {
          this._isShowOver = false;
          this._isNeedHide = false;
          this._hideCb = null;
          this._showCb = callback;

          this._showLoadingPanel();
        }

        _hideLoadingPanel(callback) {
          this._hideCb = callback;
          this._isNeedHide = true;

          if (this._isShowOver) {
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).scriptGameCamera.resetCamera();
            this._hideCb && this._hideCb();
            this.aniCloud.getState("cloudAnimationOut").time = 0;
            this.aniCloud.getState("cloudAnimationOut").sample();
            this.aniCloud.play("cloudAnimationOut");
            this.aniCloud.once(AnimationComponent.EventType.FINISHED, () => {
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).instance.hideDialog("loading/loadingPanel");
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).instance.showDialog("fight/fightPanel", [this]);
            });
          }
        }

        _showLoadingPanel() {
          this.aniCloud.getState("cloudAnimationIn").time = 0;
          this.aniCloud.getState("cloudAnimationIn").sample();
          this.aniCloud.play("cloudAnimationIn");
          this.aniCloud.once(AnimationComponent.EventType.FINISHED, () => {
            this._showCb && this._showCb();
            this._isShowOver = true;

            if (this._isNeedHide) {
              this._hideLoadingPanel(this._hideCb);
            }
          });
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "aniCloud", [_dec2], {
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
//# sourceMappingURL=41faea7f118b3972e6cedcab39287d1b8bb85c5d.js.map