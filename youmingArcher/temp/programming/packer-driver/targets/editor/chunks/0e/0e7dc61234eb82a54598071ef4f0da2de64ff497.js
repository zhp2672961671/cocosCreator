System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Monster, ClientEvent, UIManager, Node, ParticleSystemComponent, Vec3, _decorator, AnimationComponent, Material, MeshRenderer, Constant, EffectManager, GameManager, ResourceUtil, JetFires, EnergyBall, FireBall, Dispersion, Tornado, FireBallBig, DispersionSurround, Laser, AudioManager, Util, PoolManager, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, Boss;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "./monster", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientEvent(extras) {
    _reporterNs.report("ClientEvent", "./../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "../framework/effectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourceUtil(extras) {
    _reporterNs.report("ResourceUtil", "../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJetFires(extras) {
    _reporterNs.report("JetFires", "./monsterSkill/jetFires", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnergyBall(extras) {
    _reporterNs.report("EnergyBall", "./monsterSkill/energyBall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFireBall(extras) {
    _reporterNs.report("FireBall", "./monsterSkill/fireBall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDispersion(extras) {
    _reporterNs.report("Dispersion", "./monsterSkill/dispersion", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTornado(extras) {
    _reporterNs.report("Tornado", "./monsterSkill/tornado", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFireBallBig(extras) {
    _reporterNs.report("FireBallBig", "./monsterSkill/fireBallBig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDispersionSurround(extras) {
    _reporterNs.report("DispersionSurround", "./monsterSkill/dispersionSurround", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLaser(extras) {
    _reporterNs.report("Laser", "./monsterSkill/laser", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../framework/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "../framework/util", _context.meta, extras);
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
      Node = _cc.Node;
      ParticleSystemComponent = _cc.ParticleSystemComponent;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      AnimationComponent = _cc.AnimationComponent;
      Material = _cc.Material;
      MeshRenderer = _cc.MeshRenderer;
    }, function (_unresolved_2) {
      Monster = _unresolved_2.Monster;
    }, function (_unresolved_3) {
      ClientEvent = _unresolved_3.ClientEvent;
    }, function (_unresolved_4) {
      UIManager = _unresolved_4.UIManager;
    }, function (_unresolved_5) {
      Constant = _unresolved_5.Constant;
    }, function (_unresolved_6) {
      EffectManager = _unresolved_6.EffectManager;
    }, function (_unresolved_7) {
      GameManager = _unresolved_7.GameManager;
    }, function (_unresolved_8) {
      ResourceUtil = _unresolved_8.ResourceUtil;
    }, function (_unresolved_9) {
      JetFires = _unresolved_9.JetFires;
    }, function (_unresolved_10) {
      EnergyBall = _unresolved_10.EnergyBall;
    }, function (_unresolved_11) {
      FireBall = _unresolved_11.FireBall;
    }, function (_unresolved_12) {
      Dispersion = _unresolved_12.Dispersion;
    }, function (_unresolved_13) {
      Tornado = _unresolved_13.Tornado;
    }, function (_unresolved_14) {
      FireBallBig = _unresolved_14.FireBallBig;
    }, function (_unresolved_15) {
      DispersionSurround = _unresolved_15.DispersionSurround;
    }, function (_unresolved_16) {
      Laser = _unresolved_16.Laser;
    }, function (_unresolved_17) {
      AudioManager = _unresolved_17.AudioManager;
    }, function (_unresolved_18) {
      Util = _unresolved_18.Util;
    }, function (_unresolved_19) {
      PoolManager = _unresolved_19.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2b656AN2JJJ2KGEYhDM/3Bh", "boss", undefined);

      __checkObsolete__(['Node', 'ParticleSystemComponent', 'Vec3', '_decorator', 'AnimationComponent', 'AnimationState', 'Material', 'MeshRenderer']);

      ({
        ccclass,
        property
      } = _decorator); //大龙boss脚本, 继承monster.ts

      _export("Boss", Boss = (_dec = ccclass('Boss'), _dec2 = property(Node), _dec3 = property(Material), _dec4 = property(Material), _dec5 = property(MeshRenderer), _dec(_class = (_class2 = class Boss extends (_crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
        error: Error()
      }), Monster) : Monster) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ndSocketDragonHead", _descriptor, this);

          _initializerDefineProperty(this, "matDragon", _descriptor2, this);

          _initializerDefineProperty(this, "matDragonHit", _descriptor3, this);

          _initializerDefineProperty(this, "meshDragon", _descriptor4, this);

          this._countdown = 0.2;
          this._oriSkillEuler = new Vec3();
          this._isSkillReleasing = false;
        }

        //是否正在释放技能 
        init(baseInfo, layerInfo) {
          var _this$meshDragon;

          super.init(baseInfo, layerInfo);

          this._bloodTipOffsetPos.set(0, 50, 0);

          this._hitEffectPos.set(0, 0.04, 0);

          this._isSkillReleasing = false;
          this._countdown = 0.2;
          (_this$meshDragon = this.meshDragon) == null ? void 0 : _this$meshDragon.setMaterial(this.matDragon, 0);
        }

        refreshBlood(bloodNum, tipType) {
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).dispatchEvent((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.REFRESH_BOSS_BLOOD, bloodNum);
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).instance.showBloodTips(this, tipType, bloodNum, this._bloodTipOffsetPos);
        }

        playAttackAni() {
          super.playAttackAni();
          this._isSkillReleasing = false;
        }
        /**
         * 向玩家释放技能
         *
         * @param {boolean} [isNormalAttack=false] 是否是普通攻击、反之喷火
         * @return {*} 
         * @memberof Boss
         */


        releaseSkillToPlayer(isNormalAttack = false) {
          if (this._isSkillReleasing) {
            return;
          } //boss是非近战的怪物，必须带技能，这里做个容错


          if (!this.allSkillInfo.length) {
            let offsetLength = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
              error: Error()
            }), Util) : Util).getTwoNodeXZLength(this.node, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).ndPlayer);

            if (offsetLength <= this._minLength * this._minLengthRatio) {
              (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).scriptPlayer.reduceBlood(this.baseInfo);
            }

            return;
          }

          if (isNormalAttack && this.skillInfo.ID !== (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).MONSTER_SKILL.JET_FIRES) {
            this._isSkillReleasing = true;
            (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
              error: Error()
            }), ResourceUtil) : ResourceUtil).loadEffectRes(`${this.skillInfo.resName}/${this.skillInfo.resName}`).then(prefab => {
              if (this.isMoving) {
                return;
              }

              let ndMonsterSkill = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance.getNode(prefab, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).ndGameManager);
              ndMonsterSkill.setWorldPosition(this.node.worldPosition.x, 2.5, this.node.worldPosition.z);
              ndMonsterSkill.forward = this.attackForward.negative();
              let scriptSkillCollider = null; //怪物技能初始化

              switch (this.skillInfo.ID) {
                case (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                  error: Error()
                }), Constant) : Constant).MONSTER_SKILL.ENERGY_BALL:
                  ndMonsterSkill.setWorldPosition(this.ndSocketDragonHead.worldPosition.x, 2.5, this.ndSocketDragonHead.worldPosition.z);
                  scriptSkillCollider = ndMonsterSkill.getComponent(_crd && EnergyBall === void 0 ? (_reportPossibleCrUseOfEnergyBall({
                    error: Error()
                  }), EnergyBall) : EnergyBall);
                  scriptSkillCollider.init(this.skillInfo, this.baseInfo, this);
                  break;

                case (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                  error: Error()
                }), Constant) : Constant).MONSTER_SKILL.FIRE_BALL:
                  ndMonsterSkill.setWorldPosition(this.ndSocketDragonHead.worldPosition);
                  scriptSkillCollider = ndMonsterSkill.getComponent(_crd && FireBall === void 0 ? (_reportPossibleCrUseOfFireBall({
                    error: Error()
                  }), FireBall) : FireBall);
                  scriptSkillCollider.init(this.skillInfo, this.baseInfo, this);
                  break;

                case (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                  error: Error()
                }), Constant) : Constant).MONSTER_SKILL.DISPERSION:
                  ndMonsterSkill.children.forEach((ndChild, idx) => {
                    let scriptSkillCollider = ndChild.getComponent(_crd && Dispersion === void 0 ? (_reportPossibleCrUseOfDispersion({
                      error: Error()
                    }), Dispersion) : Dispersion);
                    scriptSkillCollider.init(this.skillInfo, this.baseInfo);
                  });
                  break;

                case (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                  error: Error()
                }), Constant) : Constant).MONSTER_SKILL.TORNADO:
                  ndMonsterSkill.setWorldPosition(this.ndSocketDragonHead.worldPosition);
                  scriptSkillCollider = ndMonsterSkill.getComponent(_crd && Tornado === void 0 ? (_reportPossibleCrUseOfTornado({
                    error: Error()
                  }), Tornado) : Tornado);
                  scriptSkillCollider.init(this.skillInfo, this.baseInfo, this);
                  break;

                case (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                  error: Error()
                }), Constant) : Constant).MONSTER_SKILL.FIRE_BALL_BIG:
                  scriptSkillCollider = ndMonsterSkill.getComponent(_crd && FireBallBig === void 0 ? (_reportPossibleCrUseOfFireBallBig({
                    error: Error()
                  }), FireBallBig) : FireBallBig);
                  scriptSkillCollider.init(this.skillInfo, this.baseInfo, this);
                  break;

                case (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                  error: Error()
                }), Constant) : Constant).MONSTER_SKILL.DISPERSION_SURROUND:
                  ndMonsterSkill.children.forEach(ndChild => {
                    let scriptSkillCollider = ndChild.getComponent(_crd && DispersionSurround === void 0 ? (_reportPossibleCrUseOfDispersionSurround({
                      error: Error()
                    }), DispersionSurround) : DispersionSurround);
                    scriptSkillCollider.init(this.skillInfo, this.baseInfo);
                  });
                  break;

                case (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                  error: Error()
                }), Constant) : Constant).MONSTER_SKILL.LASER:
                  ndMonsterSkill.setWorldPosition(this.ndSocketDragonHead.worldPosition);
                  scriptSkillCollider = ndMonsterSkill.getComponent(_crd && Laser === void 0 ? (_reportPossibleCrUseOfLaser({
                    error: Error()
                  }), Laser) : Laser);
                  scriptSkillCollider.init(this.skillInfo, this.baseInfo, this);
                  break;
              }

              this._refreshSkill();
            });
          } else if (!isNormalAttack && this.skillInfo.ID === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).MONSTER_SKILL.JET_FIRES) {
            this._isSkillReleasing = true;
            (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
              error: Error()
            }), ResourceUtil) : ResourceUtil).loadEffectRes(`${this.skillInfo.resName}/${this.skillInfo.resName}`).then(prefab => {
              var _aniCom$defaultClip, _this$scriptWarning;

              if (this.isMoving) {
                return;
              }

              let ndMonsterSkill = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance.getNode(prefab, this.ndSocketDragonHead);
              ndMonsterSkill.eulerAngles = this._oriSkillEuler;
              let ndChild = ndMonsterSkill.getChildByName("boxCollider");
              ndChild.active = true;
              let scriptSkillCollider = ndMonsterSkill.getComponent(_crd && JetFires === void 0 ? (_reportPossibleCrUseOfJetFires({
                error: Error()
              }), JetFires) : JetFires);
              (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
                error: Error()
              }), EffectManager) : EffectManager).instance.playParticle(ndMonsterSkill);
              scriptSkillCollider.init(this.skillInfo, this.baseInfo, this);
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).SOUND.JET_FIRE);
              let arrParticle = ndMonsterSkill.getComponentsInChildren(ParticleSystemComponent);
              arrParticle.forEach(element => {
                element.simulationSpeed = 1;
                element == null ? void 0 : element.clear();
                element == null ? void 0 : element.stop();
                element == null ? void 0 : element.play();
              }); //播放触发器动画            

              let aniCom = ndMonsterSkill.getComponent(AnimationComponent);
              let aniState;
              let aniName = (_aniCom$defaultClip = aniCom.defaultClip) == null ? void 0 : _aniCom$defaultClip.name;

              if (aniName) {
                aniCom.getState(aniName).time = 0;
                aniCom.getState(aniName).sample();
                aniCom.play();
                aniState = aniCom.getState(aniName);
                aniState.speed = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).gameSpeed;
              }

              aniCom.once(AnimationComponent.EventType.FINISHED, () => {
                ndChild.active = false;
              });
              (_this$scriptWarning = this.scriptWarning) == null ? void 0 : _this$scriptWarning.hideWarning();
              setTimeout(() => {
                (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                  error: Error()
                }), PoolManager) : PoolManager).instance.putNode(ndMonsterSkill);
              }, 4000);

              this._refreshSkill();
            });
          }
        }
        /**
         * 大龙受击打后闪白效果
         *
         * @memberof Boss
         */


        changeDragonMat() {
          if (this._countdown <= 0) {
            var _this$meshDragon2;

            (_this$meshDragon2 = this.meshDragon) == null ? void 0 : _this$meshDragon2.setMaterial(this.matDragonHit, 0);
            this._countdown = 0.2;
          }
        }

        lateUpdate(deltaTime) {
          if (this._countdown > 0 && !this.isDie) {
            this._countdown -= deltaTime;

            if (this._countdown <= 0) {
              var _this$meshDragon3;

              (_this$meshDragon3 = this.meshDragon) == null ? void 0 : _this$meshDragon3.setMaterial(this.matDragon, 0);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ndSocketDragonHead", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "matDragon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "matDragonHit", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "meshDragon", [_dec5], {
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
//# sourceMappingURL=0e7dc61234eb82a54598071ef4f0da2de64ff497.js.map