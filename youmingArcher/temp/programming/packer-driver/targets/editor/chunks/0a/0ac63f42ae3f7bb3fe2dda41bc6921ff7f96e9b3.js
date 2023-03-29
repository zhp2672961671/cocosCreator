System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Util, GameManager, _decorator, Component, Node, Vec3, ParticleSystemComponent, math, BoxColliderComponent, ResourceUtil, Constant, Monster, PoolManager, _dec, _class, _crd, ccclass, property, Arrow;

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "./../framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourceUtil(extras) {
    _reporterNs.report("ResourceUtil", "../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "./monster", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "../framework/poolManager", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
      ParticleSystemComponent = _cc.ParticleSystemComponent;
      math = _cc.math;
      BoxColliderComponent = _cc.BoxColliderComponent;
    }, function (_unresolved_2) {
      Util = _unresolved_2.Util;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }, function (_unresolved_4) {
      ResourceUtil = _unresolved_4.ResourceUtil;
    }, function (_unresolved_5) {
      Constant = _unresolved_5.Constant;
    }, function (_unresolved_6) {
      Monster = _unresolved_6.Monster;
    }, function (_unresolved_7) {
      PoolManager = _unresolved_7.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9b706mx99ZI/ZmcpsAOpihz", "arrow", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'Quat', 'ParticleSystemComponent', 'math', 'ITriggerEvent', 'BoxColliderComponent']);

      //单只弓箭脚本
      ({
        ccclass,
        property
      } = _decorator);

      _export("Arrow", Arrow = (_dec = ccclass('Arrow'), _dec(_class = class Arrow extends Component {
        constructor(...args) {
          super(...args);
          this.isAutoRotate = true;
          this.isArrowLaunch = false;
          this._ndBody = null;
          this._curSpeed = 0;
          this._targetSpeed = 0;
          this._oriPos = null;
          this._oriEulerAngles = null;
          this._offsetPos = new Vec3();
          this._curWorPos = new Vec3();
          this._disappearRange = 25;
          this._isLoadEffectOver = false;
          this._isNeedShowEffect = false;
          this._targetWorPos = new Vec3();
          this._curEulerAngles = new Vec3();
          this._oriForward = null;
          this._curForward = new Vec3();
          this._releaseWorPos = new Vec3();
          this._offsetPos_1 = new Vec3();
          this._offsetPos_2 = new Vec3();
          this._cross = new Vec3();
          this._colliderCom = null;
        }

        //
        onLoad() {
          this._colliderCom = this.node.getComponent(BoxColliderComponent);
        }

        onEnable() {
          this._colliderCom.on('onTriggerEnter', this._onTriggerEnterCb, this);
        }

        onDisable() {
          this._colliderCom.off('onTriggerEnter', this._onTriggerEnterCb, this);
        }

        start() {// [3]
        }
        /**
        * 初始化 
        */


        init(speed, releaseWorPos, isPreload = false) {
          this._releaseWorPos.set(releaseWorPos);

          if (!this._ndBody) {
            this._ndBody = this.node.getChildByName("body");
          }

          this._isLoadEffectOver = false;
          this._isNeedShowEffect = false;
          this._disappearRange = isPreload ? 5 : 25;
          this.isArrowLaunch = false;

          if (!this._oriPos) {
            this._oriPos = this.node.position.clone();
          }

          if (!this._oriEulerAngles) {
            this._oriEulerAngles = this.node.eulerAngles.clone();
          }

          if (!this._oriForward) {
            this._oriForward = this.node.forward.clone();
          }

          this.node.active = false;
          this.node.setPosition(this._oriPos);
          this.node.eulerAngles = this._oriEulerAngles;

          this._curForward.set(this._oriForward);

          this._targetSpeed = speed;
          this._curSpeed = speed * 0.5;

          this._ndBody.children.forEach(ndChild => {
            if (ndChild.name.startsWith("arrow")) {
              ndChild.active = false;
            }
          });

          let isHasIce = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).scriptPlayer.isArrowIce;
          let isHasFire = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).scriptPlayer.isArrowFire;
          let isHasLightning = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).scriptPlayer.isArrowLightning; //根据玩家拥有的不同技能展示对应特效

          if (isHasFire || isHasIce || isHasLightning) {
            this._isNeedShowEffect = true;

            if (isHasFire && isHasIce && isHasLightning) {
              this._showTrail("arrowAll");
            } else {
              if (isHasFire && isHasIce || isHasFire && isHasLightning || isHasIce && isHasLightning) {
                if (isHasFire && isHasIce) {
                  this._showTrail("arrowFireIce");
                } else if (isHasLightning && isHasFire) {
                  this._showTrail("arrowLightningFire");
                } else if (isHasLightning && isHasIce) {
                  this._showTrail("arrowLightningIce");
                }
              } else {
                if (isHasFire) {
                  this._showTrail("arrowFire");
                } else if (isHasIce) {
                  this._showTrail("arrowIce");
                } else if (isHasLightning) {
                  this._showTrail("arrowLightning");
                }
              }
            }
          } else {
            //不展示特效
            this._ndBody.children.forEach(ndChild => {
              if (ndChild.name.startsWith("arrow")) {
                ndChild.active = false;
              }
            });

            this.node.active = true;
          }
        }
        /**
         * 展示箭的特效拖尾
         *
         * @private
         * @param {string} effectName
         * @memberof Arrow
         */


        _showTrail(effectName) {
          let ndTrail = this._ndBody.getChildByName(effectName);

          if (ndTrail) {
            ndTrail.active = true;
            this.node.active = true;
            this._isLoadEffectOver = true;
          } else {
            (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
              error: Error()
            }), ResourceUtil) : ResourceUtil).loadEffectRes(`arrow/${effectName}`).then(pf => {
              ndTrail = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance.getNode(pf, this._ndBody);
              this.node.active = true;
              this._isLoadEffectOver = true;
            });
          }
        }
        /**
         *  回收弓箭组，在weapon/arrow下
         *
         * @memberof Arrow
         */


        recycleArrowGroup() {
          if (this.node.parent) {
            (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.putNode(this.node.parent);
          }
        }
        /**
         * 击中目标,隐藏箭
         *
         * @memberof Arrow
         */


        hideArrow() {
          var _this$node$parent;

          if (!this.node.parent) {
            return;
          } //清除拖尾特效残留


          let arrParticle = this._ndBody.getComponentsInChildren(ParticleSystemComponent);

          arrParticle.forEach(item => {
            item.simulationSpeed = 1;
            item == null ? void 0 : item.clear();
            item == null ? void 0 : item.stop();
          });
          this.node.active = false; //如果弓箭组里所有的箭都隐藏了则回收整个弓箭组

          let isAllArrowHide = (_this$node$parent = this.node.parent) == null ? void 0 : _this$node$parent.children.every(ndArrow => {
            return ndArrow.active === false;
          });

          if (isAllArrowHide) {
            this.recycleArrowGroup();
          }
        }
        /**
         * 箭弹射给一定范围内的某个敌人
         *
         * @param {Node} ndMonster
         * @memberof Arrow
         */


        playArrowLaunch(ndMonster) {
          this.isArrowLaunch = true;
          let arrTargets = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getNearbyMonster(ndMonster);

          if (arrTargets.length) {
            let ndTarget = arrTargets[0];

            this._offsetPos_1.set(this._releaseWorPos.x - this.node.worldPosition.x, 0, this._releaseWorPos.z - this.node.worldPosition.z);

            this._offsetPos_2.set(this.node.worldPosition.x - ndTarget.worldPosition.x, 0, this.node.worldPosition.z - ndTarget.worldPosition.z); //两个向量之间弧度


            let radian = Vec3.angle(this._offsetPos_1, this._offsetPos_2); //角度

            let angle = math.toDegree(radian); //叉乘

            Vec3.cross(this._cross, this._offsetPos_1, this._offsetPos_2); //判断正反角度

            if (this._cross.y > 0) {
              this._curEulerAngles.y = angle;
            } else {
              this._curEulerAngles.y = -angle;
            }

            this.node.eulerAngles = this._curEulerAngles;
          }
        }

        _onTriggerEnterCb(event) {
          // this._hitTarget(event.otherCollider, event.selfCollider);
          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameOver || !(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameStart) {
            return;
          }

          let otherCollider = event.otherCollider;

          if (otherCollider.getGroup() === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).PHY_GROUP.OBSTACLE) {
            //箭碰到游戏中的障碍则回收
            let scriptArrow = this.node.getComponent(Arrow);
            scriptArrow.hideArrow();
          } else if (otherCollider.getGroup() === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).PHY_GROUP.MONSTER) {
            //箭碰到敌人
            let ndMonster = otherCollider.node;
            let scriptMonster = ndMonster.getComponent(_crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
              error: Error()
            }), Monster) : Monster);
            let scriptArrow = this.node.getComponent(Arrow); //箭是否弹射

            if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).scriptPlayer.isArrowLaunch) {
              if (!scriptArrow.isArrowLaunch) {
                //第一次弹射
                scriptArrow.playArrowLaunch(ndMonster);
              } else {
                //第二次直接隐藏
                scriptArrow.hideArrow();
              }
            } else if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).scriptPlayer.isArrowPenetrate) {//箭穿透
            } else {
              scriptArrow.hideArrow();
            }

            scriptMonster.playHit(scriptArrow.isArrowLaunch); //龙被射到龙改变颜色

            if (ndMonster.name === "dragon") {
              //@ts-ignore
              scriptMonster.changeDragonMat();
            }
          }
        }

        update(deltaTime) {
          if (!this.node.parent || !(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameOver || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGamePause || this._isNeedShowEffect && !this._isLoadEffectOver) {
            return;
          } //朝forward方向飞行


          this._curSpeed = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).lerp(this._targetSpeed, this._curSpeed, 0.25);

          this._targetWorPos.set(0, 0, -deltaTime * this._curSpeed);

          this.node.translate(this._targetWorPos, Node.NodeSpace.LOCAL);

          this._curWorPos.set(this.node.worldPosition); //超过玩家一定范围则隐藏


          Vec3.subtract(this._offsetPos, this._curWorPos, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer.worldPosition);

          if (this._offsetPos && this._offsetPos.length() >= this._disappearRange) {
            this.hideArrow();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0ac63f42ae3f7bb3fe2dda41bc6921ff7f96e9b3.js.map