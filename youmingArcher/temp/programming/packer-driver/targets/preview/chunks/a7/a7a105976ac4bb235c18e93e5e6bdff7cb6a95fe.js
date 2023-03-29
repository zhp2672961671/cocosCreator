System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioManager, Util, LocalConfig, EffectManager, UIManager, _decorator, Component, Vec3, macro, Quat, Material, SkinnedMeshRenderer, tween, Constant, GameManager, ClientEvent, MonsterModel, ResourceUtil, EnergyBall, FireBall, DispersionSurround, Dispersion, FireBallBig, Tornado, Laser, CharacterRigid, PoolManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, qt_0, v3_0, ccclass, property, Monster;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./../framework/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "./../framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalConfig(extras) {
    _reporterNs.report("LocalConfig", "./../framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "./../framework/effectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterBloodBar(extras) {
    _reporterNs.report("MonsterBloodBar", "../ui/fight/monsterBloodBar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientEvent(extras) {
    _reporterNs.report("ClientEvent", "../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterModel(extras) {
    _reporterNs.report("MonsterModel", "./monsterModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourceUtil(extras) {
    _reporterNs.report("ResourceUtil", "../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnergyBall(extras) {
    _reporterNs.report("EnergyBall", "./monsterSkill/energyBall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFireBall(extras) {
    _reporterNs.report("FireBall", "./monsterSkill/fireBall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDispersionSurround(extras) {
    _reporterNs.report("DispersionSurround", "./monsterSkill/dispersionSurround", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDispersion(extras) {
    _reporterNs.report("Dispersion", "./monsterSkill/dispersion", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFireBallBig(extras) {
    _reporterNs.report("FireBallBig", "./monsterSkill/fireBallBig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTornado(extras) {
    _reporterNs.report("Tornado", "./monsterSkill/tornado", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLaser(extras) {
    _reporterNs.report("Laser", "./monsterSkill/laser", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterRigid(extras) {
    _reporterNs.report("CharacterRigid", "./characterRigid", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
      macro = _cc.macro;
      Quat = _cc.Quat;
      Material = _cc.Material;
      SkinnedMeshRenderer = _cc.SkinnedMeshRenderer;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }, function (_unresolved_3) {
      Util = _unresolved_3.Util;
    }, function (_unresolved_4) {
      LocalConfig = _unresolved_4.LocalConfig;
    }, function (_unresolved_5) {
      EffectManager = _unresolved_5.EffectManager;
    }, function (_unresolved_6) {
      UIManager = _unresolved_6.UIManager;
    }, function (_unresolved_7) {
      Constant = _unresolved_7.Constant;
    }, function (_unresolved_8) {
      GameManager = _unresolved_8.GameManager;
    }, function (_unresolved_9) {
      ClientEvent = _unresolved_9.ClientEvent;
    }, function (_unresolved_10) {
      MonsterModel = _unresolved_10.MonsterModel;
    }, function (_unresolved_11) {
      ResourceUtil = _unresolved_11.ResourceUtil;
    }, function (_unresolved_12) {
      EnergyBall = _unresolved_12.EnergyBall;
    }, function (_unresolved_13) {
      FireBall = _unresolved_13.FireBall;
    }, function (_unresolved_14) {
      DispersionSurround = _unresolved_14.DispersionSurround;
    }, function (_unresolved_15) {
      Dispersion = _unresolved_15.Dispersion;
    }, function (_unresolved_16) {
      FireBallBig = _unresolved_16.FireBallBig;
    }, function (_unresolved_17) {
      Tornado = _unresolved_17.Tornado;
    }, function (_unresolved_18) {
      Laser = _unresolved_18.Laser;
    }, function (_unresolved_19) {
      CharacterRigid = _unresolved_19.CharacterRigid;
    }, function (_unresolved_20) {
      PoolManager = _unresolved_20.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "75fe4NpEqNMNZSSj5Z9vDnA", "monster", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Vec3', 'macro', 'Node', 'Quat', 'Material', 'MeshRenderer', 'SkinnedMeshBatchRenderer', 'SkinnedMeshRenderer', 'tween']);

      qt_0 = new Quat();
      v3_0 = new Vec3();
      ({
        ccclass,
        property
      } = _decorator); //普通怪物脚本

      _export("Monster", Monster = (_dec = ccclass('Monster'), _dec2 = property(Material), _dec3 = property(Material), _dec4 = property(SkinnedMeshRenderer), _dec(_class = (_class2 = class Monster extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "matNormal", _descriptor, this);

          _initializerDefineProperty(this, "matDissolve", _descriptor2, this);

          _initializerDefineProperty(this, "skiMeshCom", _descriptor3, this);

          this.scriptMonsterModel = null;
          this.isMoving = false;
          this.scriptBloodBar = null;
          this.bloodTipDirection = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).BLOOD_TIP_DIRECTION.LEFT_UP;
          this.skillInfo = null;
          this.allSkillInfo = null;
          this.baseInfo = null;
          this.layerInfo = null;
          this.curAttackSpeed = 0;
          this.scriptWarning = null;
          this.attackForward = new Vec3();
          this.attackPos = new Vec3();
          this.scriptCharacterRigid = null;
          this._isDie = false;
          this._curAttackInterval = 0;
          this._isHitByPlayer = false;
          this._isInitBloodBar = false;
          this._bloodTipOffsetPos = new Vec3(0, 50, 0);
          this._hideBloodCountDown = 3;
          this._hitEffectPos = new Vec3(0, 0.2, 0);
          this._isAllowToAttack = false;
          this._playerMonsterOffset = new Vec3();
          this._curAngleY = 0;
          this._horizontal = 0;
          this._vertical = 0;
          this._iceDamageCountDown = 0;
          this._fireDamageCountDown = 0;
          this._ndMonsterSkill = null;
          this._skillIndex = 0;
          this._minLength = 3;
          this._curMoveSpeed = 0;
          this._dissolveData = {
            uEdge: 1,
            time: 1
          };
          this._moveMode = 0;
          this._movePattern = 0;
          this._moveFrequency = 0;
          this._offsetPos = new Vec3();
          this._offsetPos_2 = new Vec3();
          this._mixOffset = new Vec3(1, 0, 1);
          this._targetWorPos = new Vec3();
          this._isPlayRotate = false;
          this._curAngle = new Vec3();
          this._curAngle_2 = new Vec3();
          this._tempAngle = new Vec3();
          this._rotateDirection = new Vec3();
          this._forWard = new Vec3();
          this._ndRunSmokeEffect = null;
          this._originAngle = new Vec3(0, -90, 0);
          this._targetAngle = new Vec3();
          this._checkInterval = 0.04;
          this._currentTime = 0;
          this._ndBody = null;
          this._curMoveWorPos = new Vec3();
          this._isArrived = false;
          this._checkMoveInterval = 0;
          this._prevMoveWorPos = new Vec3();
          this._moveUnit = new Vec3();
          this._minLengthRatio = 1.1;
          this._randomMoveTryTimes = 5;
          this._action = 0;
        }

        set curMoveSpeed(v) {
          this._curMoveSpeed = v;
          this.scriptCharacterRigid.initSpeed(v, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).moveSpeedAddition);
        }

        get curMoveSpeed() {
          return this._curMoveSpeed;
        }

        set isDie(v) {
          this._isDie = v;

          if (this._isDie) {
            this.showDie();
          }
        }

        get isDie() {
          return this._isDie;
        }

        //怪物行为
        onEnable() {
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).on((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.MONSTER_MOVE, this._monsterMove, this);
        }

        onDisable() {
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).off((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.MONSTER_MOVE, this._monsterMove, this); //回收血条节点

          if (this.scriptBloodBar) {
            if (this.scriptBloodBar.node.parent) {
              (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance.putNode(this.scriptBloodBar.node);
            }

            this.scriptBloodBar = null;
          } //回收预警节点


          this.recycleWarning(); //回收技能节点

          if (this._ndMonsterSkill) {
            (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.putNode(this._ndMonsterSkill);
            this._ndMonsterSkill = null;
          }
        }

        start() {// [3]
        }

        init(baseInfo, layerInfo) {
          this.baseInfo = baseInfo;
          this.layerInfo = layerInfo;
          this.isDie = false;
          this.recycleWarning();
          this.skiMeshCom.setMaterial(this.matNormal, 0);
          this._ndBody = this.node.getChildByName("body");
          this.scriptMonsterModel = this._ndBody.getComponent(_crd && MonsterModel === void 0 ? (_reportPossibleCrUseOfMonsterModel({
            error: Error()
          }), MonsterModel) : MonsterModel);
          this.scriptMonsterModel.playAni((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).MONSTER_ANI_TYPE.IDLE, true);
          this.scriptCharacterRigid = this.node.getComponent(_crd && CharacterRigid === void 0 ? (_reportPossibleCrUseOfCharacterRigid({
            error: Error()
          }), CharacterRigid) : CharacterRigid);
          this.scriptCharacterRigid.stopMove();
          this._curAttackInterval = 0;
          this._isHitByPlayer = false;
          this._isInitBloodBar = false;
          this._isAllowToAttack = false;
          this._isArrived = false;
          this._checkMoveInterval = 0;
          this._iceDamageCountDown = 0;
          this._fireDamageCountDown = 0;
          this._ndMonsterSkill = null;
          this._skillIndex = 0;

          this._moveUnit.set(0, 0, 0);

          this._movePattern = layerInfo.movePattern ? layerInfo.movePattern : this.baseInfo.movePattern;
          this._dissolveData.uEdge = 1;
          this.scriptBloodBar = null;

          this._refreshSkill();

          this.scriptMonsterModel.scriptMonster = this;
          this.curAttackSpeed = this.baseInfo.attackSpeed;
          this.curMoveSpeed = this.baseInfo.moveSpeed;

          this._getMinLength();
        }
        /**
         * 获取怪物和玩家之间的最小距离
         *
         * @memberof Monster
         */


        _getMinLength() {
          if (this.node.name === "aula") {
            this._minLength = 2;
            this._dissolveData.time = 3.33;
          } else if (this.node.name === "boomDragon") {
            this._minLength = 2;
            this._dissolveData.time = 0.87;
          } else if (this.node.name === "hellFire") {
            this._minLength = 2.5;
            this._dissolveData.time = 1.06;
          } else if (this.node.name === "magician") {
            this._minLength = 2.5;
            this._dissolveData.time = 0.87;
          } else if (this.node.name === "dragon") {
            this._minLength = 5;
            this._dissolveData.time = 2;
          }
        }
        /**
         * 刷新当前使用技能
         *
         * @private
         * @memberof Monster
         */


        _refreshSkill() {
          this.allSkillInfo = this.layerInfo.skill === "" ? [] : this.layerInfo.skill.split("#");

          if (this.allSkillInfo.length) {
            this._skillIndex = this._skillIndex >= this.allSkillInfo.length ? 0 : this._skillIndex;
            var skillID = this.allSkillInfo[this._skillIndex];
            this.skillInfo = (_crd && LocalConfig === void 0 ? (_reportPossibleCrUseOfLocalConfig({
              error: Error()
            }), LocalConfig) : LocalConfig).instance.queryByID("monsterSkill", skillID);
            this._skillIndex += 1;
          }
        }
        /**
         * 怪物阵亡
         *
         * @memberof Monster
         */


        showDie() {
          this.scriptCharacterRigid.stopMove();
          this.recycleWarning();
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound(this.node.name + "Die");
          (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).instance.showRewardBounce(this.node, "gold/gold", this.baseInfo.goldNum, () => {
            if (this.baseInfo.heartDropRate >= Math.random()) {
              (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
                error: Error()
              }), EffectManager) : EffectManager).instance.showRewardBounce(this.node, "heart/heart", 1);
            }
          }); //检查玩家是否拥有嗜血技能：主角击杀敌人时回复自身生命上限2%的生命值。

          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).scriptPlayer.isBloodthirsty) {
            var bloodNum = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).scriptPlayer.curHpLimit * 0.02;
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).scriptPlayer.addBlood(bloodNum);
          } //溶解效果


          this.skiMeshCom.setMaterial(this.matDissolve, 0);
          tween(this._dissolveData).to(this._dissolveData.time, {
            uEdge: 0.1
          }).start();
          this.scriptMonsterModel.playAni((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).MONSTER_ANI_TYPE.DIE, false, () => {
            if (this.isDie) {
              if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).ndBoss) {
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).ndBoss = null;
              }

              if (this.scriptBloodBar) {
                this.scriptBloodBar = null;
              }

              (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance.putNode(this.node);
            }
          });
        }

        recycleWarning() {
          //回收预警节点
          if (this.scriptWarning) {
            if (this.scriptWarning.node.parent) {
              (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance.putNode(this.scriptWarning.node);
            }

            this.scriptWarning = null;
          }
        }
        /**
         * 怪物播放受击效果
         *
         * @param {boolean} isArrowLaunch 是否被弹射的弓箭射中，如果是则造成普通伤害
         * @param {boolean} isPassiveLightning 是否被动受到电击
         * @return {*} 
         * @memberof Monster
         */


        playHit(isArrowLaunch, isPassiveLightning) {
          if (isArrowLaunch === void 0) {
            isArrowLaunch = false;
          }

          if (isPassiveLightning === void 0) {
            isPassiveLightning = false;
          }

          if (this.isDie) {
            return;
          }

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SOUND.HIT_MONSTER); //播放受击特效

          var effectPath = "hit/hit";
          var arrEffectPath = [];
          var recycleTime = 1.2;
          var isHasIce = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).scriptPlayer.isArrowIce;
          var isHasFire = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).scriptPlayer.isArrowFire;
          var isHasLightning = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).scriptPlayer.isArrowLightning;

          if (isHasFire || isHasIce || isHasLightning) {
            if (isHasFire && isHasIce && isHasLightning) {
              arrEffectPath = ["hit/hitFire", "hit/hitIce", "hit/hitLightning"];
            } else {
              if (isHasFire && isHasIce || isHasFire && isHasLightning || isHasIce && isHasLightning) {
                if (isHasFire && isHasIce) {
                  arrEffectPath = ["hit/hitFire", "hit/hitIce"];
                } else if (isHasLightning && isHasFire) {
                  arrEffectPath = ["hit/hitFire", "hit/hitLightning"];
                } else if (isHasLightning && isHasIce) {
                  arrEffectPath = ["hit/hitIce", "hit/hitLightning"];
                }
              } else {
                if (isHasFire) {
                  arrEffectPath = ["hit/hitFire"];
                } else if (isHasIce) {
                  arrEffectPath = ["hit/hitIce"];
                } else if (isHasLightning) {
                  arrEffectPath = ["hit/hitLightning"];
                }
              }
            }

            effectPath = arrEffectPath[Math.floor(Math.random() * arrEffectPath.length)];

            if (effectPath === "hit/hitFire") {
              //灼烧技能持续2秒
              recycleTime = 2;
            } else if (effectPath === "hit/hitIce") {
              recycleTime = 1;
            } //被冰冻技能击中


            if (isHasIce && this._iceDamageCountDown <= 0) {
              this._iceDamageCountDown = 1;
            } //被灼烧技能击中


            if (isHasFire && this._fireDamageCountDown <= 0) {
              this._fireDamageCountDown = 2;
            }
          }

          (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).instance.loadAndPlayEffect(true, this.node, effectPath, 1, this._hitEffectPos, null, false, true, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).gameSpeed, true, recycleTime); //攻击的时候霸体状态

          if (!this.scriptMonsterModel.isAttacking) {
            this.scriptMonsterModel.playAni((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).MONSTER_ANI_TYPE.HIT);
          } //受到攻击的敌人会向身旁一定范围内的所有敌人发射闪电，减少生命上限5%的生命值


          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).scriptPlayer.isArrowLightning && !isPassiveLightning) {
            var arrTargets = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getNearbyMonster(this.node, true);

            if (arrTargets) {
              arrTargets.forEach(ndChild => {
                (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
                  error: Error()
                }), EffectManager) : EffectManager).instance.showLightningChain(this.node, ndChild);
                var scriptMonster = ndChild.getComponent(Monster);
                scriptMonster.playHit(false, true);
              });
            }
          } //怪物扣血


          if (Math.random() > this.baseInfo.dodgeRate) {
            //闪避失败
            var tipType = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).FIGHT_TIP.REDUCE_BLOOD;
            var damage = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).scriptPlayer.curAttackPower * (1 - this.baseInfo.defensePower * (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).defenseAddition / (this.baseInfo.defensePower + 400));
            var isCriticalHit = Math.random() <= (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).scriptPlayer.curCriticalHitRate; //是否暴击
            //是否暴击

            if (isCriticalHit) {
              //不是被弹射的箭击中，且不是被动受到电击
              if (!isArrowLaunch && !isPassiveLightning) {
                damage = damage * (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.curCriticalHitDamage;
                tipType = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                  error: Error()
                }), Constant) : Constant).FIGHT_TIP.CRITICAL_HIT;
              }
            }

            if (isPassiveLightning) {
              damage = this.baseInfo.hp * 0.05 * (1 - this.baseInfo.defensePower / (this.baseInfo.defensePower + 400));
            }

            this.refreshBlood(-damage, tipType);
          }
        }
        /**
         * 刷新血量
         *
         * @private
         * @param {number} bloodNum
         * @memberof Monster
         */


        refreshBlood(bloodNum, tipType) {
          var cb = () => {
            this.scriptBloodBar.refreshBlood(bloodNum);
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).instance.showBloodTips(this, tipType, bloodNum, this._bloodTipOffsetPos);
          };

          this._curAttackInterval = 0;

          if (!this._isInitBloodBar) {
            this._isInitBloodBar = true;
            console.log("###小怪生成新的血条", this.node.name);
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).instance.showMonsterBloodBar(this, this.baseInfo.hp, () => {
              cb();
            });
          } else {
            if (this.scriptBloodBar) {
              this.scriptBloodBar.node.active = true;
              cb();
            }
          }
        }
        /**
         * 怪物行为
         *
         * @param {*} obj
         * @memberof Player
         */


        playAction(obj) {
          this._action = obj.action;

          switch (obj.action) {
            case (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).MONSTER_ACTION.MOVE:
              //向目标位置移动
              var angle = obj.value + 135;
              var radian = angle * macro.RAD;
              this._horizontal = Math.round(Math.cos(radian) * 1);
              this._vertical = Math.round(Math.sin(radian) * 1);
              this._curAngleY = obj.value;
              this._curAngleY = this._curAngleY < 0 ? this._curAngleY + 360 : this._curAngleY > 360 ? this._curAngleY - 360 : this._curAngleY;
              this.isMoving = true;
              break;

            case (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).MONSTER_ACTION.STOP_MOVE:
              //停止移动，原地转向玩家，攻击玩家
              var angle_1 = obj.value + 135;
              var radian_1 = angle_1 * macro.RAD;
              this._horizontal = Math.round(Math.cos(radian_1) * 1);
              this._vertical = Math.round(Math.sin(radian_1) * 1);
              this._curAngleY = obj.value;
              this._curAngleY = this._curAngleY < 0 ? this._curAngleY + 360 : this._curAngleY > 360 ? this._curAngleY - 360 : this._curAngleY;
              this.isMoving = false;
              this.scriptCharacterRigid.stopMove();

              if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).ndPlayer) {
                this._attackPlayer();
              } else {
                this.scriptMonsterModel.playAni((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                  error: Error()
                }), Constant) : Constant).MONSTER_ANI_TYPE.IDLE, true);
              }

              break;

            default:
              break;
          }
        }
        /**
         * 攻击玩家
        */


        _attackPlayer() {
          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).scriptPlayer.isDie || this.scriptMonsterModel.isAttacking) {
            return;
          }

          Vec3.subtract(this._offsetPos_2, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer.worldPosition, this.node.worldPosition);

          var length = this._offsetPos_2.length();

          this.attackForward = this._offsetPos_2.normalize().negative();
          this.attackForward.y = 0;
          this.attackPos.set((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer.worldPosition); //预警

          if (this.allSkillInfo.length && this.skillInfo && this.skillInfo.warning) {
            var scale = 1;

            if (this.skillInfo.ID === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).MONSTER_SKILL.FIRE_BALL) {
              scale = 0.1;
            } else if (this.skillInfo.ID === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).MONSTER_SKILL.FIRE_BALL_BIG) {
              scale = 0.4;
            } else if (this.skillInfo.ID === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).MONSTER_SKILL.LASER) {
              scale = 3;
            } else if (this.skillInfo.ID === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).MONSTER_SKILL.ENERGY_BALL) {
              scale = length;
            } //回收预警节点


            this.recycleWarning();
            (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).instance.showWarning(this.skillInfo.warning, scale, this, () => {
              this.playAttackAni();
            });
          } else {
            this.playAttackAni();
          }
        }
        /**
         * 播放攻击动画
         *
         * @protected
         * @memberof Monster
         */


        playAttackAni() {
          var attackAniName = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).MONSTER_ANI_TYPE.ATTACK;

          if (this.baseInfo.resName === "hellFire") {
            //hellFire的攻击动画有两个，其他小怪动画只有一个
            if (!this.allSkillInfo.length) {
              //近战
              attackAniName = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).MONSTER_ANI_TYPE.ATTACK_1;
            } else {
              //远程
              attackAniName = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).MONSTER_ANI_TYPE.ATTACK_2;
            }
          } //远程


          if (this.allSkillInfo.length) {
            this.scriptMonsterModel.playAni(attackAniName, false, () => {
              if (!this.isDie && !this.scriptMonsterModel.isHitting) {
                this.scheduleOnce(() => {
                  this._monsterMove();
                }, this.baseInfo.moveFrequency);
              }
            });
          } else {
            //近战
            var offsetLength = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
              error: Error()
            }), Util) : Util).getTwoNodeXZLength(this.node, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).ndPlayer);

            if (offsetLength <= this._minLength * this._minLengthRatio) {
              this.scriptMonsterModel.playAni(attackAniName, false, () => {
                if (!this.isDie && !this.scriptMonsterModel.isHitting) {
                  this.scheduleOnce(() => {
                    this._monsterMove();
                  }, this.baseInfo.moveFrequency);
                }
              });
            } else {
              if (!this.isDie && !this.scriptMonsterModel.isHitting) {
                this.scheduleOnce(() => {
                  this._monsterMove();
                }, this.baseInfo.moveFrequency);
              }
            }
          }
        }
        /**
         * 移动到随机位置
         *
         * @private
         * @memberof Monster
         */


        _moveToRandomPos() {
          this._randomMoveTryTimes -= 1; //随机移动：先以怪物圆环区间(1, minLength)随机移动,再朝向玩家,然后攻击

          var x = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).getRandom(1, 3) * (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).getRandomDirector();
          var z = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).getRandom(1, 3) * (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).getRandomDirector();

          this._targetWorPos.set((_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).toFixed(this.node.worldPosition.x + x), (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).toFixed(this.node.worldPosition.y), (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).toFixed(this.node.worldPosition.z + z));

          var offsetLength = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).getTwoPosXZLength(this._targetWorPos.x, this._targetWorPos.z, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer.worldPosition.x, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer.worldPosition.z); //当目标位置和玩家大于最小距离，进行移动

          if (offsetLength > this._minLength) {
            Vec3.subtract(this._offsetPos, this._targetWorPos, this.node.worldPosition);
            this._offsetPos.y = 0;
            Vec3.normalize(this._moveUnit, this._offsetPos);

            this._moveToTargetWorPos(this._targetWorPos);

            this.isMoving = true;
            this._isArrived = false;
          } else {
            //否则尝试5次随机移动，都没合适的位置则进行进攻
            if (this._randomMoveTryTimes <= 0) {
              this._stayRotateAttack();
            } else {
              this._moveToRandomPos();
            }
          }
        }
        /**
         * 先移动
         *
         * @private
         * @memberof Monster
         */


        _monsterMove() {
          if (this.isDie) {
            return;
          }

          if (!this._isAllowToAttack) {
            this._isAllowToAttack = true;
          }

          if (this._movePattern === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).MONSTER_MOVE_PATTERN.NO_MOVE) {
            //不移动，原地攻击玩家
            this._stayRotateAttack();
          } else if (this._movePattern === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).MONSTER_MOVE_PATTERN.RANDOM) {
            this._randomMoveTryTimes = 5;

            this._moveToRandomPos();
          } else if (this._movePattern === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).MONSTER_MOVE_PATTERN.FORWARD_PLAYER) {
            //面向玩家移动：先面向玩家，再移动，然后攻击
            this._moveToTargetWorPos((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).ndPlayer.worldPosition);

            Vec3.subtract(this._offsetPos, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).ndPlayer.worldPosition, this.node.worldPosition);
            this._offsetPos.y = 0;
            var offsetLength = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
              error: Error()
            }), Util) : Util).getTwoNodeXZLength(this.node, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).ndPlayer); //当怪物和玩家小于2个最小距离之和或者大于一个最小距离且小于两个最小距离，进行移动

            if (offsetLength > this._minLength * 2 || offsetLength > this._minLength && offsetLength < this._minLength * 2) {
              //单位向量
              Vec3.normalize(this._moveUnit, this._offsetPos);
              Vec3.multiplyScalar(this._offsetPos, this._moveUnit, this._minLength);

              if (offsetLength > this._minLength * 2) {
                //向玩家移动2个单位向量
                Vec3.add(this._targetWorPos, this.node.worldPosition, this._offsetPos);
              } else {
                Vec3.subtract(this._targetWorPos, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).ndPlayer.worldPosition, this._offsetPos);
              }

              this._targetWorPos.set((_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
                error: Error()
              }), Util) : Util).toFixed(this._targetWorPos.x), (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
                error: Error()
              }), Util) : Util).toFixed(this.node.worldPosition.y), (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
                error: Error()
              }), Util) : Util).toFixed(this._targetWorPos.z));

              this._isArrived = false;
              this.isMoving = true;
            } else {
              //与玩家相距小于等于最小距离，怪物原地进行攻击
              this._stayRotateAttack();
            }
          }
        }
        /**
         * 怪物向目标位置移动
         *
         * @private
         * @memberof Monster
         */


        _moveToTargetWorPos(targetWorPos) {
          var angleY = this._getTwoPosAngleY(this.node.worldPosition, targetWorPos);

          this.playAction({
            action: (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).MONSTER_ACTION.MOVE,
            value: angleY
          });
        }

        _getTwoPosAngleY(selfWorPos, targetWorPos) {
          var _mainCamera, _mainCamera2;

          var targetScreenPos = (_mainCamera = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).mainCamera) == null ? void 0 : _mainCamera.worldToScreen(targetWorPos);
          var selfScreenPos = (_mainCamera2 = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).mainCamera) == null ? void 0 : _mainCamera2.worldToScreen(selfWorPos);
          Vec3.subtract(this._playerMonsterOffset, targetScreenPos, selfScreenPos);
          var angleY = Math.round(Math.atan2(this._playerMonsterOffset.y, this._playerMonsterOffset.x) * 180 / Math.PI);
          return angleY;
        }
        /**
         * 怪物原地不动-旋转角度朝向玩家-攻击玩家
         *
         * @protected
         * @memberof Monster
         */


        _stayRotateAttack() {
          var angleY = this._getTwoPosAngleY(this.node.worldPosition, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer.worldPosition);

          this.playAction({
            action: (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).MONSTER_ACTION.STOP_MOVE,
            value: angleY
          });
        }
        /**
         * 向玩家释放技能
         *
         * @returns
         * @memberof Player
         */


        releaseSkillToPlayer(isNormalAttack) {
          //没有技能则使用近战
          if (!this.allSkillInfo.length) {
            var offsetLength = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
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
          } //加载对应技能


          (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
            error: Error()
          }), ResourceUtil) : ResourceUtil).loadEffectRes(this.skillInfo.resName + "/" + this.skillInfo.resName).then(prefab => {
            if (this.isMoving) {
              return;
            }

            this._ndMonsterSkill = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.getNode(prefab, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).ndGameManager);

            this._ndMonsterSkill.setWorldPosition(this.node.worldPosition.x, 2.5, this.node.worldPosition.z);

            this._ndMonsterSkill.forward = this.attackForward.negative();
            var scriptSkillCollider = null; //怪物技能初始化

            switch (this.skillInfo.ID) {
              case (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).MONSTER_SKILL.ENERGY_BALL:
                scriptSkillCollider = this._ndMonsterSkill.getComponent(_crd && EnergyBall === void 0 ? (_reportPossibleCrUseOfEnergyBall({
                  error: Error()
                }), EnergyBall) : EnergyBall);
                scriptSkillCollider.init(this.skillInfo, this.baseInfo, this);
                break;

              case (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).MONSTER_SKILL.FIRE_BALL:
                scriptSkillCollider = this._ndMonsterSkill.getComponent(_crd && FireBall === void 0 ? (_reportPossibleCrUseOfFireBall({
                  error: Error()
                }), FireBall) : FireBall);
                scriptSkillCollider.init(this.skillInfo, this.baseInfo, this);
                break;

              case (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).MONSTER_SKILL.DISPERSION:
                this._ndMonsterSkill.children.forEach((ndChild, idx) => {
                  var scriptSkillCollider = ndChild.getComponent(_crd && Dispersion === void 0 ? (_reportPossibleCrUseOfDispersion({
                    error: Error()
                  }), Dispersion) : Dispersion);
                  scriptSkillCollider.init(this.skillInfo, this.baseInfo);
                });

                break;

              case (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).MONSTER_SKILL.TORNADO:
                scriptSkillCollider = this._ndMonsterSkill.getComponent(_crd && Tornado === void 0 ? (_reportPossibleCrUseOfTornado({
                  error: Error()
                }), Tornado) : Tornado);
                scriptSkillCollider.init(this.skillInfo, this.baseInfo, this);
                break;

              case (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).MONSTER_SKILL.FIRE_BALL_BIG:
                scriptSkillCollider = this._ndMonsterSkill.getComponent(_crd && FireBallBig === void 0 ? (_reportPossibleCrUseOfFireBallBig({
                  error: Error()
                }), FireBallBig) : FireBallBig);
                scriptSkillCollider.init(this.skillInfo, this.baseInfo, this);
                break;

              case (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).MONSTER_SKILL.DISPERSION_SURROUND:
                this._ndMonsterSkill.children.forEach(ndChild => {
                  var scriptSkillCollider = ndChild.getComponent(_crd && DispersionSurround === void 0 ? (_reportPossibleCrUseOfDispersionSurround({
                    error: Error()
                  }), DispersionSurround) : DispersionSurround);
                  scriptSkillCollider.init(this.skillInfo, this.baseInfo);
                });

                break;

              case (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).MONSTER_SKILL.LASER:
                scriptSkillCollider = this._ndMonsterSkill.getComponent(_crd && Laser === void 0 ? (_reportPossibleCrUseOfLaser({
                  error: Error()
                }), Laser) : Laser);
                scriptSkillCollider.init(this.skillInfo, this.baseInfo, this);
                break;
            }

            this._refreshSkill();
          });
        }

        update(deltaTime) {
          //刷新溶解材质
          if (this.isDie && this._dissolveData.uEdge > 0.1) {
            this.matDissolve.setProperty("uEdge", this._dissolveData.uEdge);
            return;
          }

          if (!(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameStart || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameOver || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGamePause || this.isDie || !this._isAllowToAttack || !(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).scriptPlayer || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).scriptPlayer.isDie) {
            return;
          } //3秒未被攻击则会隐藏血条


          if (!this._isHitByPlayer && this.scriptBloodBar) {
            this._curAttackInterval += deltaTime;

            if (this._curAttackInterval >= this._hideBloodCountDown && this.scriptBloodBar.node.active) {
              this.scriptBloodBar.node.active = false;
            }
          } //是否进行移动


          if (this.isMoving) {
            if (this._movePattern === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).MONSTER_MOVE_PATTERN.RANDOM) {
              //如果移动到目标位置就停止移动
              var offsetLength = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
                error: Error()
              }), Util) : Util).getTwoPosXZLength(this.node.worldPosition.x, this.node.worldPosition.z, this._targetWorPos.x, this._targetWorPos.z);
              var offsetTarget = 0.05; //爆炸龙的位移是跳，不容易精准到达目标位置,把达到范围适当增大

              if (this.baseInfo.resName === 'boomDragon') {
                offsetTarget = 0.5;
              }

              if (offsetLength <= offsetTarget && !this._isArrived) {
                // console.log("###随机移动，到达目标位置");
                this._isArrived = true;

                this._stayRotateAttack();
              }
            } else if (this._movePattern === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).MONSTER_MOVE_PATTERN.FORWARD_PLAYER) {
              var _offsetLength = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
                error: Error()
              }), Util) : Util).getTwoPosXZLength(this.node.worldPosition.x, this.node.worldPosition.z, this._targetWorPos.x, this._targetWorPos.z);

              if (_offsetLength <= 0.05 && !this._isArrived) {
                // console.log("###面向玩家移动，到达目标位置");
                // 进行攻击
                this._isArrived = true;

                this._stayRotateAttack();
              }
            }
          } //怪物旋转


          if (this._isPlayRotate) {
            //当前怪物角度
            this._tempAngle.set(this.node.eulerAngles);

            this._tempAngle.y = this._tempAngle.y < 0 ? this._tempAngle.y + 360 : this._tempAngle.y;

            if (this._curAngle.length() === 0) {
              this._curAngle.set(this._tempAngle);
            }

            this.node.eulerAngles = this._tempAngle; //第二个参数越小朝向越精确

            var isEqual = this._curAngle.equals(this._targetAngle, 0.01);

            if (!isEqual) {
              Vec3.lerp(this._curAngle, this._curAngle, this._targetAngle, 0.167);
              this.node.eulerAngles = this._curAngle;
            } else {
              this._isPlayRotate = false;
              this.node.eulerAngles = this._targetAngle;

              this._curAngle.set(0, 0, 0);
            }
          }

          if (this._horizontal !== 0 || this._vertical !== 0) {
            //计算出旋转角度
            this._rotateDirection.set(this._horizontal, 0, -this._vertical);

            this._rotateDirection = this._rotateDirection.normalize();
            Quat.fromViewUp(qt_0, this._rotateDirection);
            Quat.toEuler(v3_0, qt_0);
            v3_0.y = v3_0.y < 0 ? v3_0.y + 360 : v3_0.y;
            this._isPlayRotate = true; //设置当前怪物角度为正数

            this._curAngle_2.set(this.node.eulerAngles);

            if (this._curAngle_2.y < 0) {
              this._curAngle_2.y += 360;
              this.node.eulerAngles = this._curAngle_2; // 转为0~360
            } else if (this._curAngle_2.y > 360) {
              this._curAngle_2.y -= 360;
              this.node.eulerAngles = this._curAngle_2; // 转为0~360
            } //设置目标旋转角度


            if (!v3_0.equals(this.node.eulerAngles, 0.01)) {
              this._targetAngle.y = this._curAngleY + 225;
              this._targetAngle.y = this._targetAngle.y < 0 ? this._targetAngle.y + 360 : this._targetAngle.y > 360 ? this._targetAngle.y - 360 : this._targetAngle.y;
              this._targetAngle.x = 0;
              this._targetAngle.z = 0;

              if (Math.abs(this._targetAngle.y - this._curAngle_2.y) > 180) {
                if (this._targetAngle.y > this._curAngle_2.y) {
                  this._targetAngle.y -= 360;
                } else {
                  this._targetAngle.y += 360;
                }
              } //每次有新的_targetAngle之后，先将_curAngle初始化


              this._curAngle.set(0, 0, 0);
            } else {
              this._isPlayRotate = false;
              this.node.eulerAngles = v3_0;
            }

            if (!this.isMoving) {
              return;
            } //怪物朝着目标位置移动：


            if (this._movePattern !== (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).MONSTER_MOVE_PATTERN.NO_MOVE) {
              this.scriptCharacterRigid.move(-this._moveUnit.x * this.curMoveSpeed * (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).moveSpeedAddition * 0.5 * deltaTime, -this._moveUnit.z * this.curMoveSpeed * (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).moveSpeedAddition * 0.5 * deltaTime);
            }

            if (!this.scriptMonsterModel.isRunning && this._movePattern !== (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).MONSTER_MOVE_PATTERN.NO_MOVE && this._action !== (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).MONSTER_ACTION.STOP_MOVE) {
              this.scriptMonsterModel.playAni((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).MONSTER_ANI_TYPE.RUN, true);
            }
          } else {
            if (!this.isDie && !this.scriptMonsterModel.isIdle && !this.scriptMonsterModel.isAttacking && !this.scriptMonsterModel.isHitting) {
              this.scriptMonsterModel.playAni((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).MONSTER_ANI_TYPE.IDLE, true);
              this.scriptCharacterRigid.stopMove();
            }
          } //冰冻持续降低攻击力和伤害


          if (this._iceDamageCountDown > 0) {
            this._iceDamageCountDown -= deltaTime;
            this.curAttackSpeed = this.baseInfo.attackSpeed * (1 - 0.1);
            this.curMoveSpeed = this.baseInfo.moveSpeed * (1 - 0.5);

            if (this._iceDamageCountDown <= 0) {
              this.curAttackSpeed = this.baseInfo.attackSpeed;
              this.curMoveSpeed = this.baseInfo.moveSpeed;
            }
          } //灼烧持续扣血


          if (this._fireDamageCountDown > 0) {
            this._fireDamageCountDown -= deltaTime;
            var countDown = Number(this._fireDamageCountDown.toFixed(2));
            countDown = countDown * 100 % 50;

            if (countDown === 0) {
              var bloodNum = this.baseInfo.hp * 0.05;
              this.refreshBlood(-bloodNum, (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).FIGHT_TIP.REDUCE_BLOOD);
            }
          } //检查当前是否碰到障碍或者其他物体导致无法达到目标位置


          if (this._movePattern !== (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).MONSTER_MOVE_PATTERN.NO_MOVE && !this._isArrived) {
            this._checkMoveInterval += deltaTime;

            if (this._checkMoveInterval >= 0.2) {
              this._checkMoveInterval = 0;
              var length = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
                error: Error()
              }), Util) : Util).getTwoPosXZLength(this._prevMoveWorPos.x, this._prevMoveWorPos.z, this.node.worldPosition.x, this.node.worldPosition.z);

              if (this.scriptMonsterModel.isRunning && length <= 0.01) {
                this._stayRotateAttack(); // console.log("###碰到障碍, 停止移动");

              } else {
                this._prevMoveWorPos.set(this.node.worldPosition);
              }
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "matNormal", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "matDissolve", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "skiMeshCom", [_dec4], {
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
//# sourceMappingURL=a7a105976ac4bb235c18e93e5e6bdff7cb6a95fe.js.map