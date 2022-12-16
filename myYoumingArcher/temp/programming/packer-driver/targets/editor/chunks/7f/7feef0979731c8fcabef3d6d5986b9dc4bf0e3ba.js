System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, assetManager, director, Constant, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Login;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "./framework/constant", _context.meta, extras);
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
      assetManager = _cc.assetManager;
      director = _cc.director;
    }, function (_unresolved_2) {
      Constant = _unresolved_2.Constant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9fc5fQI+hNKNpFq7t/f/YIY", "login", undefined);

      __checkObsolete__(['_decorator', 'Component', 'game', 'Node', 'assetManager', 'director']);

      //挂载到login场景下的canvas节点
      ({
        ccclass,
        property
      } = _decorator);

      _export("Login", Login = (_dec = ccclass('Login'), _dec2 = property(Node), _dec(_class = (_class2 = class Login extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ndCanvas", _descriptor, this);
        }

        onEnable() {}

        onDisable() {}

        start() {
          console.log("login"); // 添加常驻节点

          director.addPersistRootNode(this.ndCanvas);
          (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).LOGIN_TIME = Date.now();
          let bundleRoot = ["resources", "main"];
          let arr = []; //微信优化开屏加载性能
          //@ts-ignore

          if (window.wx) {
            bundleRoot.forEach(item => {
              let p = new Promise((resolve, reject) => {
                assetManager.loadBundle(item, function (err, bundle) {
                  if (err) {
                    return reject(err);
                  }

                  resolve(bundle);
                });
              });
              arr.push(p);
            }); // 异步加载

            Promise.all(arr).then(() => {
              director.loadScene("fight", () => {}, () => {});
            });
          } else {
            // 进入主场景
            director.loadScene("fight", err => {
              console.log("loadScene========end"); // this.ndCanvas.active=false;

              if (err) console.error(err);
            }, () => {});
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ndCanvas", [_dec2], {
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
//# sourceMappingURL=7feef0979731c8fcabef3d6d5986b9dc4bf0e3ba.js.map