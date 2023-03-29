System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, AudioManager, Constant, EffectManager, PoolManager, ResourceUtil, GameManager, _dec, _class, _crd, ccclass, property, FireBall;

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../framework/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "../../framework/effectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "../../framework/poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourceUtil(extras) {
    _reporterNs.report("ResourceUtil", "../../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../gameManager", _context.meta, extras);
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
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }, function (_unresolved_3) {
      Constant = _unresolved_3.Constant;
    }, function (_unresolved_4) {
      EffectManager = _unresolved_4.EffectManager;
    }, function (_unresolved_5) {
      PoolManager = _unresolved_5.PoolManager;
    }, function (_unresolved_6) {
      ResourceUtil = _unresolved_6.ResourceUtil;
    }, function (_unresolved_7) {
      GameManager = _unresolved_7.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "90320FRD9ZBib7MUibgkbJA", "fireBall", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Vec3', 'Node', 'Prefab']);

      //小火球脚本：抛物线，只有落地(播放爆炸)才有伤害, 所以碰撞器在hitFireBall1里面
      ({
        ccclass,
        property
      } = _decorator);

      _export("FireBall", FireBall = (_dec = ccclass('FireBall'), _dec(_class = class FireBall extends Component {
        constructor(...args) {
          super(...args);
          this.isPlayHitFireBall = false;
          this.groundWorPosY = 1.8;
          this.scriptWarning = null;
          this.skillInfo = null;
          this.baseInfo = null;
          this._isAutoRotate = true;
          this._posStart = new Vec3();
          this._posEnd = new Vec3();
          this._posOffset = new Vec3();
          this._totalFlyTime = 0;
          this._maxFlyHeight = 0;
          this._curFlyTime = 0;
          this._rotateCoolTime = 0;
          this._posNextTarget = new Vec3();
          this._scriptParent = null;
          this._targetPos = new Vec3();
        }

        //目标位置
        start() {}
        /**
        * 初始化 
        */


        init(skillInfo, baseInfo, scriptParent) {
          this.skillInfo = skillInfo;
          this.baseInfo = baseInfo;
          this._scriptParent = scriptParent;
          this._totalFlyTime = 0;
          this._maxFlyHeight = 0;
          this._curFlyTime = 0;

          this._posStart.set(this.node.worldPosition.x, this.groundWorPosY, this.node.worldPosition.z);

          this._posEnd.set(scriptParent.attackPos);

          Vec3.subtract(this._posOffset, this._posEnd, this._posStart);
          this._totalFlyTime = this._posOffset.length() / skillInfo.flySpeed;
          this._maxFlyHeight = this._totalFlyTime * 3; //最大飞行高度跟飞行距离成正比     

          this.isPlayHitFireBall = false;
          this.node.children.forEach(ndChild => {
            ndChild.active = true;
          });
          (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).instance.playParticle(this.node);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SOUND.FIRE_BALL);
        }

        update(deltaTime) {
          if (!this.node.parent || !(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameOver || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGamePause) {
            return;
          } //向指定目标飞行


          if (this._totalFlyTime > 0 && this.node.parent) {
            if (this._curFlyTime < this._totalFlyTime) {
              this._curFlyTime += deltaTime;
              this._curFlyTime = this._curFlyTime >= this._totalFlyTime ? this._totalFlyTime : this._curFlyTime;
              let percent = Number((this._curFlyTime / this._totalFlyTime).toFixed(2)); //曲线飞行

              let height = this._maxFlyHeight * Math.cos(percent * Math.PI - Math.PI / 2);

              this._targetPos.set(this._posStart.x + this._posOffset.x * percent, this._posStart.y + height, this._posStart.z + this._posOffset.z * percent);

              this.node.setWorldPosition(this._targetPos);

              if (this._isAutoRotate) {
                this._rotateCoolTime -= deltaTime;

                if (this._rotateCoolTime < 0) {
                  this._rotateCoolTime = 0.1;
                  percent = Number(((this._curFlyTime + deltaTime) / this._totalFlyTime).toFixed(2));

                  if (percent < 1) {
                    //曲线飞行
                    height = this._maxFlyHeight * Math.cos(percent * Math.PI - Math.PI / 2);

                    this._posNextTarget.set(this._posStart.x + this._posOffset.x * percent, this._posStart.y + height, this._posStart.z + this._posOffset.z * percent);

                    this.node.forward = this._posNextTarget.subtract(this._targetPos).normalize();
                  }
                }
              } //小火球碰到地面


              if (Number(this.node.position.y.toFixed(2)) <= this.groundWorPosY && !this.isPlayHitFireBall && this._curFlyTime > 0) {
                var _this$_scriptParent$s;

                this.isPlayHitFireBall = true; //关闭预警

                (_this$_scriptParent$s = this._scriptParent.scriptWarning) == null ? void 0 : _this$_scriptParent$s.hideWarning();
                this.node.children.forEach(ndChild => {
                  ndChild.active = false;
                }); //展示火焰爆炸

                (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
                  error: Error()
                }), ResourceUtil) : ResourceUtil).loadEffectRes("hit/hitFireBall1").then(prefab => {
                  let ndEffect = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                    error: Error()
                  }), PoolManager) : PoolManager).instance.getNode(prefab, this.node);
                  ndEffect.setWorldPosition(this.node.worldPosition);
                  (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
                    error: Error()
                  }), EffectManager) : EffectManager).instance.playParticle(ndEffect, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                    error: Error()
                  }), GameManager) : GameManager).gameSpeed, true, 1.1, () => {
                    (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                      error: Error()
                    }), PoolManager) : PoolManager).instance.putNode(this.node);
                  });
                });
              }
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1bb63f20478df6ae481ad3a49c89bc4b967f4225.js.map