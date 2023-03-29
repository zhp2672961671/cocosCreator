System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Constant, LabelComponent, tween, Vec3, UITransformComponent, view, _decorator, Component, find, Util, GameManager, PoolManager, _dec, _class, _crd, ccclass, property, FightTip;

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "./../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "../../framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../../fight/gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "../../framework/poolManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      LabelComponent = _cc.LabelComponent;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      UITransformComponent = _cc.UITransformComponent;
      view = _cc.view;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      find = _cc.find;
    }, function (_unresolved_2) {
      Constant = _unresolved_2.Constant;
    }, function (_unresolved_3) {
      Util = _unresolved_3.Util;
    }, function (_unresolved_4) {
      GameManager = _unresolved_4.GameManager;
    }, function (_unresolved_5) {
      PoolManager = _unresolved_5.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4caf7l6Ri5P6JX9Le02LsCW", "fightTip", undefined);

      __checkObsolete__(['LabelComponent', 'tween', 'Vec3', 'UITransformComponent', 'view', '_decorator', 'Component', 'Node', 'find']);

      //战斗血量增减提示脚本
      ({
        ccclass,
        property
      } = _decorator);

      _export("FightTip", FightTip = (_dec = ccclass('FightTip'), _dec(_class = class FightTip extends Component {
        constructor() {
          super(...arguments);
          this._tweenTip = null;
          this._costTime = 1.5;
          this._arrDirection = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).objectToArray((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).BLOOD_TIP_DIRECTION);
          this._isChangePos = false;
          this._targetPos = new Vec3(0, 200, 0);
          this._oriWorPos = new Vec3();
          this._curWorPos = new Vec3();
          this._oriScale = new Vec3(0.7, 0.7, 0.7);
          this._oriAngle = new Vec3();
          this._scale_1 = new Vec3(1, 1, 1);
          this._scale_2 = new Vec3();
        }

        //最终缩放
        start() {// Your initialization goes here.
        }
        /**
         * 展示血量提示
         *
         * @param {*} scriptParent 关联的血条脚本
         * @param {number} tipType 提示类型
         * @param {string} bloodNum 数值
         * @param {Function} [callback] 回调函数
         * @memberof FightTip
         */


        show(scriptParent, tipType, bloodNum, callback) {
          var _ndSub$getChildByName, _ndSub$getComponent, _ndSub$getComponent2;

          this._closeTweenTip();

          this.node.eulerAngles = this._oriAngle;
          this.node.setScale(this._oriScale);
          this._isChangePos = false;

          this._oriWorPos.set(scriptParent.node.worldPosition);

          var arrChildren = this.node.children;
          arrChildren.forEach(item => {
            item.active = false;
          }); // let UICom = this.node.getComponent(UITransformComponent) as UITransformComponent;
          // UICom.priority = constant.PRIORITY.BLOOD_TIP;

          this.node.setSiblingIndex((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).PRIORITY.BLOOD_TIP);
          bloodNum = Math.round(bloodNum);
          var txt = String(bloodNum);
          var ndSub = null;

          if (tipType === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).FIGHT_TIP.ADD_BLOOD) {
            ndSub = this.node.getChildByName("addBlood");
            txt = "+" + txt;
          } else if (tipType === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).FIGHT_TIP.REDUCE_BLOOD) {
            ndSub = this.node.getChildByName("reduceBlood");
          } else if (tipType === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).FIGHT_TIP.CRITICAL_HIT) {
            ndSub = this.node.getChildByName("criticalHit"); // UICom.priority = constant.PRIORITY.BLOOD_CRITICAL_TIP;

            this.node.setSiblingIndex((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).PRIORITY.BLOOD_CRITICAL_TIP);
          }

          var lbHitNum = (_ndSub$getChildByName = ndSub.getChildByName('num')) == null ? void 0 : _ndSub$getChildByName.getComponent(LabelComponent);
          lbHitNum && (lbHitNum.string = txt);
          ndSub.active = true;
          var pos = this.node.getPosition();
          var width = (_ndSub$getComponent = ndSub.getComponent(UITransformComponent)) == null ? void 0 : _ndSub$getComponent.width;
          var height = (_ndSub$getComponent2 = ndSub.getComponent(UITransformComponent)) == null ? void 0 : _ndSub$getComponent2.height;

          if (Math.abs(pos.x) + width / 2 > view.getCanvasSize().width / 2) {
            var w = view.getCanvasSize().width / 2 - width / 2;
            pos.x = pos.x > 0 ? w : -w;
          }

          if (Math.abs(pos.y) + height / 2 > view.getCanvasSize().height / 2) {
            var h = view.getCanvasSize().height / 2 - height / 2;
            pos.y = pos.y > 0 ? h : -h;
          }

          this.node.setPosition(pos);
          this.getTargetPos(scriptParent);
          this._isChangePos = true;
          this._tweenTip = tween(this.node).to(this._costTime * 0.4, {
            scale: this._scale_1
          }, {
            easing: 'smooth'
          }).to(this._costTime * 0.2, {
            scale: this._scale_2
          }, {
            easing: "backIn"
          }).call(() => {
            this._closeTweenTip();

            (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.putNode(this.node);
            callback && callback();
            this._isChangePos = false;
          }).start();
        }
        /**
         * 获取跟上次血量提示不一样方向的提示
         */


        getTargetPos(scriptParent) {
          var dir;

          var arr = this._arrDirection.concat();

          arr = arr.filter(item => {
            return item !== scriptParent.bloodTipDirection;
          });
          dir = arr[Math.floor(Math.random() * arr.length)];

          switch (dir) {
            case (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).BLOOD_TIP_DIRECTION.LEFT_UP:
              this._targetPos.set(-2, 5, 0);

              break;

            case (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).BLOOD_TIP_DIRECTION.MID_UP:
              this._targetPos.set(0, 4, 0);

              break;

            case (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).BLOOD_TIP_DIRECTION.RIGHT_UP:
              this._targetPos.set(2, 2, 0);

              break;

            default:
              break;
          }

          this._targetPos.add(scriptParent.node.worldPosition.clone());

          scriptParent.bloodTipDirection = dir;
        }

        _closeTweenTip() {
          if (this._tweenTip) {
            this._tweenTip.stop();

            this._tweenTip = null;
          }
        }

        update(deltaTime) {
          // Your update function goes here.
          if (this._isChangePos) {
            var _mainCamera;

            this._oriWorPos.lerp(this._targetPos, 0.05);

            (_mainCamera = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).mainCamera) == null ? void 0 : _mainCamera.convertToUINode(this._oriWorPos, find('Canvas'), this._curWorPos);
            this.node.setPosition(this._curWorPos);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=09855dd533be88ad2baf9391da5fb7d55731ab86.js.map