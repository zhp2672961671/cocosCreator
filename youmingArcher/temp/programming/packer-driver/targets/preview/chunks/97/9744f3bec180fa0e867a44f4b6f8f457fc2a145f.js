System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Constant, _decorator, Component, Vec3, RigidBodyComponent, EPSILON, _dec, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, v3_0, v3_1, CharacterRigid;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../framework/constant", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
      RigidBodyComponent = _cc.RigidBodyComponent;
      EPSILON = _cc.EPSILON;
    }, function (_unresolved_2) {
      Constant = _unresolved_2.Constant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "661afbK8/hPNbWGsBzk8GsI", "characterRigid", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Vec3', 'RigidBodyComponent', 'EPSILON']);

      //角色刚体碰撞检测脚本
      ({
        ccclass,
        property
      } = _decorator);
      v3_0 = new Vec3();
      v3_1 = new Vec3();

      _export("CharacterRigid", CharacterRigid = (_dec = ccclass('CharacterRigid'), _dec(_class = (_class2 = class CharacterRigid extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "damping", _descriptor, this);

          _initializerDefineProperty(this, "gravity", _descriptor2, this);

          this._rigidBody = null;
          this._grounded = true;
          this._velocity = new Vec3();
          this._curMaxSpeed = 0;
          this._prevAngleY = 0;
          this._stateX = 0;
          this._stateZ = 0;
        }

        get velocity() {
          return this._velocity;
        }

        get onGround() {
          return this._grounded;
        }

        onLoad() {
          this._rigidBody = this.getComponent(RigidBodyComponent);
        }

        start() {
          this._prevAngleY = this.node.eulerAngles.y;
        }
        /**
         * 初始化角色最大速度
         *
         * @param {number} moveSpeed
         * @param {number} [ratio=1]
         * @memberof CharacterRigid
         */


        initSpeed(moveSpeed, ratio) {
          if (ratio === void 0) {
            ratio = 1;
          }

          this._curMaxSpeed = moveSpeed * ratio;
        }
        /**
         * 角色移动传入x和z
         *
         * @param {number} x
         * @param {number} z
         */


        move(x, z) {
          if (x > 0 && this._stateX < 0 || x < 0 && this._stateX > 0 || z > 0 && this._stateZ < 0 || z < 0 && this._stateZ > 0) {
            this.clearVelocity(); // console.log("当前跟之前方向不一致则清除速度,避免惯性太大");
          }

          this._stateX = x;
          this._stateZ = z; // console.log("_stateX", this._stateX, "z", this._stateZ);
        }
        /**
         * 刚体停止移动
         *
         */


        stopMove() {
          this._stateX = 0;
          this._stateZ = 0;
          this.clearVelocity();
        }
        /**
         * 更新刚体状态
         *
         * @private
         * @param {number} dt
         * @return {*} 
         */


        _updateCharacter(dt) {
          this.updateFunction(dt);
          if (!this.onGround) return;

          if (this._stateX || this._stateZ) {
            v3_0.set(this._stateX, 0, this._stateZ);
            v3_0.normalize().negative();
            this.rigidMove(v3_0, 1);
          }
        }
        /**
         * 清除移动速度
         */


        clearVelocity() {
          this._rigidBody.clearVelocity();
        }
        /**
         * 刚体移动
         *
         * @param {Vec3} dir
         * @param {number} speed
         */


        rigidMove(dir, speed) {
          this._rigidBody.getLinearVelocity(v3_1);

          Vec3.scaleAndAdd(v3_1, v3_1, dir, speed); // console.log('v3_1' + v3_1);

          var ms = this._curMaxSpeed;
          var len = v3_1.lengthSqr();
          var ratio = 1;

          if (len > ms) {
            if (Math.abs(this.node.eulerAngles.y - this._prevAngleY) >= 10) {
              ratio = 2;
            }

            this._prevAngleY = this.node.eulerAngles.y;
            v3_1.normalize();
            v3_1.multiplyScalar(ms / ratio);
          }

          this._rigidBody.setLinearVelocity(v3_1); // console.log('setLinearVelocity1' + v3_1);

        }
        /**
         * 刷新
         * @param dt 
         */


        updateFunction(dt) {
          // this._updateContactInfo();
          this._applyGravity();

          this._applyDamping();

          this._saveState();
        }
        /**
         * 施加阻尼
         *
         * @private
         * @param {number} [dt=1 / constant.GAME_FRAME]
         */


        _applyDamping(dt) {
          if (dt === void 0) {
            dt = 1 / (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).GAME_FRAME;
          }

          this._rigidBody.getLinearVelocity(v3_1); // console.log('getLinearVelocity2' + v3_1);


          if (v3_1.lengthSqr() > EPSILON) {
            v3_1.multiplyScalar(Math.pow(1.0 - this.damping, dt));

            this._rigidBody.setLinearVelocity(v3_1); // console.log('setLinearVelocity2' + v3_1);

          }
        }
        /**
         * 施加重力
         *
         * @private
         */


        _applyGravity() {
          var g = this.gravity;
          var m = this._rigidBody.mass;
          v3_1.set(0, m * g, 0);

          this._rigidBody.applyForce(v3_1);
        }
        /**
         * 获取线性速度
         *
         * @private
         */


        _saveState() {
          this._rigidBody.getLinearVelocity(this._velocity); // console.log('getLinearVelocity3' + this._velocity  + ":" + this._grounded);

        }

        update(dtS) {
          var dt = 1000 / (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).GAME_FRAME;

          this._updateCharacter(dt);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "damping", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gravity", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -10;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9744f3bec180fa0e867a44f4b6f8f457fc2a145f.js.map