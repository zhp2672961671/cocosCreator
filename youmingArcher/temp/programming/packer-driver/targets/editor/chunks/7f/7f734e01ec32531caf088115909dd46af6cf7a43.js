System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, MapManager, Util, AudioManager, EffectManager, PlayerData, LocalConfig, PlayerModel, ClientEvent, _decorator, Component, Quat, Vec3, macro, RigidBodyComponent, CapsuleColliderComponent, Constant, GameManager, ResourceUtil, Arrow, UIManager, CharacterRigid, PoolManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, qt_0, v3_0, ccclass, property, Player;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMapManager(extras) {
    _reporterNs.report("MapManager", "./mapManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "./../framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./../framework/audioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectManager(extras) {
    _reporterNs.report("EffectManager", "./../framework/effectManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "./../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalConfig(extras) {
    _reporterNs.report("LocalConfig", "./../framework/localConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerModel(extras) {
    _reporterNs.report("PlayerModel", "./playerModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientEvent(extras) {
    _reporterNs.report("ClientEvent", "./../framework/clientEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../framework/constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourceUtil(extras) {
    _reporterNs.report("ResourceUtil", "../framework/resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArrow(extras) {
    _reporterNs.report("Arrow", "./arrow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerBloodBar(extras) {
    _reporterNs.report("PlayerBloodBar", "../ui/fight/playerBloodBar", _context.meta, extras);
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
      Quat = _cc.Quat;
      Vec3 = _cc.Vec3;
      macro = _cc.macro;
      RigidBodyComponent = _cc.RigidBodyComponent;
      CapsuleColliderComponent = _cc.CapsuleColliderComponent;
    }, function (_unresolved_2) {
      MapManager = _unresolved_2.MapManager;
    }, function (_unresolved_3) {
      Util = _unresolved_3.Util;
    }, function (_unresolved_4) {
      AudioManager = _unresolved_4.AudioManager;
    }, function (_unresolved_5) {
      EffectManager = _unresolved_5.EffectManager;
    }, function (_unresolved_6) {
      PlayerData = _unresolved_6.PlayerData;
    }, function (_unresolved_7) {
      LocalConfig = _unresolved_7.LocalConfig;
    }, function (_unresolved_8) {
      PlayerModel = _unresolved_8.PlayerModel;
    }, function (_unresolved_9) {
      ClientEvent = _unresolved_9.ClientEvent;
    }, function (_unresolved_10) {
      Constant = _unresolved_10.Constant;
    }, function (_unresolved_11) {
      GameManager = _unresolved_11.GameManager;
    }, function (_unresolved_12) {
      ResourceUtil = _unresolved_12.ResourceUtil;
    }, function (_unresolved_13) {
      Arrow = _unresolved_13.Arrow;
    }, function (_unresolved_14) {
      UIManager = _unresolved_14.UIManager;
    }, function (_unresolved_15) {
      CharacterRigid = _unresolved_15.CharacterRigid;
    }, function (_unresolved_16) {
      PoolManager = _unresolved_16.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "00abeCWTxpAwrraoA+2UT4q", "player", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Quat', 'Vec3', 'Node', 'macro', 'RigidBodyComponent', 'CapsuleColliderComponent', 'Prefab']);

      //玩家脚本
      qt_0 = new Quat();
      v3_0 = new Vec3();
      ({
        ccclass,
        property
      } = _decorator);

      _export("Player", Player = (_dec = ccclass('Player'), _dec2 = property(_crd && PlayerModel === void 0 ? (_reportPossibleCrUseOfPlayerModel({
        error: Error()
      }), PlayerModel) : PlayerModel), _dec3 = property(RigidBodyComponent), _dec4 = property(CapsuleColliderComponent), _dec(_class = (_class2 = class Player extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "scriptPlayerModel", _descriptor, this);

          _initializerDefineProperty(this, "rigidComPlayer", _descriptor2, this);

          _initializerDefineProperty(this, "colliderComPlayer", _descriptor3, this);

          this.scriptBloodBar = null;
          this.isMoving = false;
          this.isPlayRotate = false;
          this.scriptCharacterRigid = null;
          this.playerBaseInfo = {};
          this.isArrowDouble = false;
          this.isArrowPenetrate = false;
          this.isArrowContinuous = false;
          this.isArrowIce = false;
          this.isArrowFire = false;
          this.isBloodthirsty = false;
          this.isArrowLightning = false;
          this.isArrowLaunch = false;
          this.curAttackPower = 20;
          this.curDefensePower = 1;
          this.curAttackSpeed = 1;
          this.curDodgeRate = 0;
          this.curCriticalHitRate = 0;
          this.curCriticalHitDamage = 0;
          this.curHpLimit = 0;
          this._arrFormChangeSkill = [];
          this._arrValueChangeSkill = [];
          this._arrBuffSkill = [];
          this._arrTriggerSkill = [];
          this._hp = 0;
          this._isDie = false;
          this._horizontal = 0;
          this._vertical = 0;
          this._targetAngle = new Vec3();
          this._curAngleY = 0;
          this._ndTarget = null;
          this._throwArrowSpeed = 30;
          this._arrowPos = new Vec3();
          this._bloodTipOffsetPos = new Vec3(-10, 150, 0);
          this._playerMonsterOffset = new Vec3();
          this._oriPlayerPos = new Vec3(0, 1.7, 0);
          this._oriPlayerScale = new Vec3(4, 4, 4);
          this._oriPlayerAngle = new Vec3(0, -90, 0);
          this._curAngle_1 = new Vec3();
          this._curAngle_2 = new Vec3();
          this._rotateDirection = new Vec3();
          this._ndRunSmokeEffect = null;
          this._originAngle = new Vec3(0, -90, 0);
          this._tempAngle = new Vec3();
          this._forWard = new Vec3();
          this._range = 0.01;
          this._curMoveSpeed = 0;
          this._curBlood = 0;
          this._rotateInterval = 0.3;
          this._arrArrowPreload = [];
        }

        //玩家在base.csv的基础数据
        set isDie(v) {
          this._isDie = v;

          if (this._isDie) {
            this._showDie();
          }
        }

        get isDie() {
          return this._isDie;
        } //是否拥有形态技能


        //当前玩家生命值上限（这个是上限，是生命上限，不是当前生命值）
        set curMoveSpeed(v) {
          this._curMoveSpeed = v;
          this.scriptCharacterRigid.initSpeed(v);
        }

        get curMoveSpeed() {
          return this._curMoveSpeed;
        } //技能数组


        onEnable() {
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).on((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.PARSE_PLAYER_SKILL, this._parsePlayerSkill, this);
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).on((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.ON_REVIVE, this._onRevive, this);
        }

        onDisable() {
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).off((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.PARSE_PLAYER_SKILL, this._parsePlayerSkill, this);
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).off((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).EVENT_TYPE.ON_REVIVE, this._onRevive, this);

          if (this.scriptBloodBar) {
            this._curBlood = this.scriptBloodBar.curBlood;
            this.scriptBloodBar.node.destroy();
            this.scriptBloodBar = null;
          }
        }

        start() {}

        init() {
          this.isMoving = false;
          this.isDie = false;
          this.isPlayRotate = false;
          this.isArrowDouble = false;
          this.isArrowPenetrate = false;
          this.isArrowContinuous = false;
          this.isArrowIce = false;
          this.isArrowFire = false;
          this.isBloodthirsty = false;
          this.isArrowLightning = false;
          this.isArrowLaunch = false;
          this._horizontal = 0;
          this._vertical = 0;
          this._curBlood = 0;
          this._ndTarget = null;
          this.scriptCharacterRigid = this.node.getComponent(_crd && CharacterRigid === void 0 ? (_reportPossibleCrUseOfCharacterRigid({
            error: Error()
          }), CharacterRigid) : CharacterRigid); //获取玩家基础数据

          this.playerBaseInfo = (_crd && LocalConfig === void 0 ? (_reportPossibleCrUseOfLocalConfig({
            error: Error()
          }), LocalConfig) : LocalConfig).instance.queryByID("base", (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).BASE.PLAYER_01);

          if (this.playerBaseInfo) {
            //设置玩家大小
            let arrScale = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
              error: Error()
            }), Util) : Util).parseStringData(this.playerBaseInfo.scale, ",");

            this._oriPlayerScale.set(arrScale[0], arrScale[1], arrScale[2]);

            this.node.setScale(this._oriPlayerScale);
            this.resetPlayerWorPos(); //设置角度

            let arrAngle = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
              error: Error()
            }), Util) : Util).parseStringData(this.playerBaseInfo.angle, ",");

            this._oriPlayerAngle.set(arrAngle[0], arrAngle[1], arrAngle[2]);

            this.node.eulerAngles = this._oriPlayerAngle;
            this.curAttackPower = this.playerBaseInfo.attackPower;
            this.curDefensePower = this.playerBaseInfo.defensePower;
            this.curAttackSpeed = this.playerBaseInfo.attackSpeed;
            this.curMoveSpeed = this.playerBaseInfo.moveSpeed;
            this.curDodgeRate = this.playerBaseInfo.dodgeRate;
            this.curCriticalHitRate = this.playerBaseInfo.criticalHitRate;
            this.curCriticalHitDamage = this.playerBaseInfo.criticalHitDamage;
            this.curHpLimit = this.playerBaseInfo.hp;
            this._hp = this.playerBaseInfo.hp;
          }

          this._parsePlayerSkill(true);

          console.log("###加载血条1"); //展示血条

          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).instance.showPlayerBloodBar(this, this._hp, this._hp, () => {// if (GameManager.isTesting) {
            //     this.addBlood(2000, true);
            // }
          }, this._bloodTipOffsetPos);
          this.scriptPlayerModel.playAni((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).PLAYER_ANI_TYPE.IDLE, true);
          this.scriptPlayerModel.init();
          this.rigidComPlayer.clearState();
        }
        /**
         * 每次成功进入新的一层则更新玩家状态
         *
         * @memberof Player
         */


        resetPlayerState() {
          this.node.active = true;
          this.rigidComPlayer.clearState();
          this.resetPlayerWorPos();
          this.node.eulerAngles = this._originAngle;
          this.scriptPlayerModel.playAni((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).PLAYER_ANI_TYPE.IDLE, true); //将未播放结束的特效节点隐藏，避免到下一层还在展示特效

          this.node.children.forEach(ndChild => {
            if (ndChild.name !== "body") {
              ndChild.active = false;
            }
          });

          if (!this.scriptBloodBar) {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).instance.showPlayerBloodBar(this, this.curHpLimit, this._curBlood, () => {}, this._bloodTipOffsetPos);
          }
        }
        /**
         * 根据an、anS两张图设置不同的玩家初始位置
         */


        resetPlayerWorPos() {
          let arrPosition = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).parseStringData(this.playerBaseInfo.position, ",");

          if ((_crd && MapManager === void 0 ? (_reportPossibleCrUseOfMapManager({
            error: Error()
          }), MapManager) : MapManager).isMapAnS) {
            this._oriPlayerPos.set(-16.742, arrPosition[1], -0.719);
          } else {
            //设置坐标
            this._oriPlayerPos.set(arrPosition[0], arrPosition[1], arrPosition[2]);
          }

          this.node.setPosition(this._oriPlayerPos);
        }
        /**
         * 解析玩家当前技能
         * 
         * @param {boolean} isCoverSkill 是否重新覆盖技能，主角初始化的要，其他时候不需要
         * @memberof Player
         */


        _parsePlayerSkill(isCoverSkill = false) {
          let arrSkill = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).instance.playerInfo.arrSkill;
          let arrFormChangeSkill = [];
          let arrValueChangeSkill = [];
          let arrBuffSkill = [];
          let arrTriggerSkill = [];

          if (arrSkill.length) {
            arrSkill.forEach(item => {
              if (item.startsWith((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).PLAYER_SKILL_USE.FORM_CHANGE)) {
                arrFormChangeSkill.push(item);
              } else if (item.startsWith((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).PLAYER_SKILL_USE.VALUE)) {
                arrValueChangeSkill.push(item);
              } else if (item.startsWith((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).PLAYER_SKILL_USE.BUFF)) {
                arrBuffSkill.push(item);
              } else if (item.startsWith((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).PLAYER_SKILL_USE.TRIGGER)) {
                arrTriggerSkill.push(item);
              }
            });
          }

          this._arrFormChangeSkill = arrFormChangeSkill;
          this._arrValueChangeSkill = arrValueChangeSkill;
          this._arrBuffSkill = arrBuffSkill;
          this._arrTriggerSkill = arrTriggerSkill; // console.log("###_arrFormChangeSkill", this._arrFormChangeSkill);
          // console.log("###_arrValueChangeSkill", this._arrValueChangeSkill);
          // console.log("###_arrBuffSkill", this._arrBuffSkill);
          // console.log("###_arrTriggerSkill", this._arrTriggerSkill);

          if (this._arrFormChangeSkill.length) {
            this.isArrowDouble = this._arrFormChangeSkill.indexOf((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).PLAYER_SKILL.ARROW_DOUBLE) !== -1;
            this.isArrowPenetrate = this._arrFormChangeSkill.indexOf((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).PLAYER_SKILL.ARROW_PENETRATE) !== -1;
            this.isArrowContinuous = this._arrFormChangeSkill.indexOf((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).PLAYER_SKILL.ARROW_CONTINUOUS) !== -1;
          } else {
            this.isArrowDouble = false;
            this.isArrowPenetrate = false;
            this.isArrowContinuous = false;
          } //数值技能只使用一次, 注意：每次获得到需用乘法都是用当前值去乘，而不是乘以最开始的值


          if (this._arrValueChangeSkill.length) {
            //攻击力提升百分比
            let oriAttackPower = this.playerBaseInfo.attackPower;
            let curAttackPower = oriAttackPower; //攻击力1

            let raiseAttackPowerRate_1 = this.getValueSkillRate((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).PLAYER_SKILL.RAISE_ATTACK_01);
            curAttackPower = oriAttackPower * (1 + raiseAttackPowerRate_1); //攻击力2

            let raiseAttackPowerRate_2 = this.getValueSkillRate((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).PLAYER_SKILL.RAISE_ATTACK_02);
            this.curAttackPower = curAttackPower * (1 + raiseAttackPowerRate_2); //闪避率提升百分比

            let oriDodgeRate = this.playerBaseInfo.dodgeRate;
            let raiseDodgeRate = this.getValueSkillRate((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).PLAYER_SKILL.RAISE_DODGE);
            this.curDodgeRate = oriDodgeRate + raiseDodgeRate; //注：以加法形式增加
            //攻速提升百分比

            let oriAttackSpeed = this.playerBaseInfo.attackSpeed;
            let curAttackSpeed = oriAttackSpeed; //攻速1

            let raiseAttackSpeedRate_1 = this.getValueSkillRate((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).PLAYER_SKILL.RAISE_ATTACK_SPEED_01);
            curAttackSpeed = oriAttackSpeed * (1 + raiseAttackSpeedRate_1); //攻速2

            let raiseAttackSpeedRate_2 = this.getValueSkillRate((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).PLAYER_SKILL.RAISE_ATTACK_SPEED_02);
            this.curAttackSpeed = curAttackSpeed * (1 + raiseAttackSpeedRate_2);

            if (!isCoverSkill) {
              let oriHpLimit = this.playerBaseInfo.hp;
              let raiseHpLimitRate = this.getValueSkillRate((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).PLAYER_SKILL.RAISE_HP_LIMIT);
              let offsetHp = oriHpLimit * raiseHpLimitRate;
              let curHpLimit = oriHpLimit + offsetHp;

              if (curHpLimit > this.curHpLimit) {
                this.addBlood(offsetHp, true);
                this.curHpLimit = curHpLimit;
                this._hp += offsetHp;
              }
            } //移速提升百分比


            let oriMoveSpeed = this.playerBaseInfo.moveSpeed;
            let raiseMoveSpeedRate = this.getValueSkillRate((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).PLAYER_SKILL.MOVE_SPEED);
            this.curMoveSpeed = oriMoveSpeed * (1 + raiseMoveSpeedRate); //暴击+爆伤提升百分比

            let oriCriticalHitRate = this.playerBaseInfo.criticalHitRate;
            let oriCriticalHitDamage = this.playerBaseInfo.criticalHitDamage;
            let arrCritical_1 = [0, 0]; //暴击率,暴击伤害比

            let arrCritical_2 = [0, 0]; //暴击率,暴击伤害比

            arrCritical_1 = this.getValueSkillRateArr((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).PLAYER_SKILL.RAISE_CRITICAL_HIT_DAMAGE_01);
            arrCritical_2 = this.getValueSkillRateArr((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).PLAYER_SKILL.RAISE_CRITICAL_HIT_DAMAGE_02);
            let raiseCriticalHitRate = arrCritical_1[0] + arrCritical_2[0];
            let raiseCriticalHitDamage = arrCritical_1[1] + arrCritical_2[1];

            if (raiseCriticalHitRate) {
              this.curCriticalHitRate = oriCriticalHitRate + raiseCriticalHitRate; //注：以加法形式增加
            }

            if (raiseCriticalHitDamage) {
              this.curCriticalHitDamage = oriCriticalHitDamage + raiseCriticalHitDamage; //注：以加法形式增加
            }
          } else {
            this.curAttackPower = this.playerBaseInfo.attackPower;
            this.curAttackSpeed = this.playerBaseInfo.attackSpeed;
            this.curMoveSpeed = this.playerBaseInfo.moveSpeed;
            this.curDodgeRate = this.playerBaseInfo.dodgeRate;
            this.curCriticalHitRate = this.playerBaseInfo.criticalHitRate;
            this.curCriticalHitDamage = this.playerBaseInfo.criticalHitDamage;
            this.curHpLimit = this.playerBaseInfo.hp;
          }

          if (this._arrBuffSkill.length) {
            this.isArrowIce = this._arrBuffSkill.indexOf((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).PLAYER_SKILL.ARROW_ICE) !== -1;
            this.isArrowFire = this._arrBuffSkill.indexOf((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).PLAYER_SKILL.ARROW_FIRE) !== -1;
          } else {
            this.isArrowIce = false;
            this.isArrowFire = false;
          }

          if (this._arrTriggerSkill.length) {
            this.isArrowLightning = this._arrTriggerSkill.indexOf((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).PLAYER_SKILL.ARROW_LIGHTNING) !== -1;
            this.isArrowLaunch = this._arrTriggerSkill.indexOf((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).PLAYER_SKILL.ARROW_LAUNCH) !== -1;
            this.isBloodthirsty = this._arrTriggerSkill.indexOf((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).PLAYER_SKILL.BLOODTHIRSTY) !== -1;
          } else {
            this.isArrowLightning = false;
            this.isArrowLaunch = false;
            this.isBloodthirsty = false;
          }
        }
        /**
         * 返回当前数值技能提升比例
         */


        getValueSkillRate(key) {
          var _rate;

          let rate = 0; //百分比

          if (this._arrValueChangeSkill.indexOf(key) !== -1) {
            let skillInfo = (_crd && LocalConfig === void 0 ? (_reportPossibleCrUseOfLocalConfig({
              error: Error()
            }), LocalConfig) : LocalConfig).instance.queryByID("playerSkill", key);
            rate = Number(skillInfo.value);
          }

          return (_rate = rate) != null ? _rate : 0;
        }
        /**
         * 返回当前数值技能提升比例数组
         */


        getValueSkillRateArr(key) {
          let arrRate = [];

          if (this._arrValueChangeSkill.indexOf(key) !== -1) {
            let skillInfo = (_crd && LocalConfig === void 0 ? (_reportPossibleCrUseOfLocalConfig({
              error: Error()
            }), LocalConfig) : LocalConfig).instance.queryByID("playerSkill", key);
            arrRate = skillInfo.value.split("#");
          }

          arrRate = arrRate.map(item => {
            return item ? Number(item) : 0;
          });

          if (arrRate.length === 0) {
            arrRate = [0, 0];
          }

          return arrRate;
        }
        /**
         * 玩家行为
         *
         * @param {*} obj
         * @memberof Player
         */


        playAction(obj) {
          if (this.isDie) {
            return;
          }

          switch (obj.action) {
            case (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).PLAYER_ACTION.MOVE:
              let angle = obj.value + 135;
              let radian = angle * macro.RAD;
              this._horizontal = Math.round(Math.cos(radian) * 1);
              this._vertical = Math.round(Math.sin(radian) * 1);
              this.isMoving = true;
              this._curAngleY = obj.value;
              this._curAngleY = this._curAngleY < 0 ? this._curAngleY + 360 : this._curAngleY > 360 ? this._curAngleY - 360 : this._curAngleY;
              break;

            case (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).PLAYER_ACTION.STOP_MOVE:
              this._horizontal = 0;
              this._vertical = 0;

              this._onPlayerStopMove();

              this.isMoving = false;
              this.rigidComPlayer.clearState();
              this.scriptCharacterRigid.stopMove();
              this._rotateInterval = 0.2;
              break;

            default:
              break;
          }
        }
        /**
         * 玩家不移动时：a) 地图上没有怪物：在原地待机。b) 地图上有怪物：向怪物方向攻击。
         *
         * @private
         * @memberof Player
         */


        _onPlayerStopMove() {
          if (!(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameOver && (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameStart) {
            if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).arrMonster.length) {
              let isMonsterSurvive = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).arrMonster.some(item => {
                return item.parent !== null;
              });

              if (isMonsterSurvive) {
                this._attackMonster();
              }
            } else {
              this.scriptPlayerModel.playAni((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).PLAYER_ANI_TYPE.IDLE, true);
            }
          }
        }
        /**
         * 向目标位置移动
         *
         * @private
         * @memberof Monster
         */


        _moveToTargetWorPos(targetWorPos) {
          let angleY = this._getTwoPosAngleY(this.node.worldPosition, targetWorPos);

          this.playAction({
            action: (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).MONSTER_ACTION.MOVE,
            value: angleY
          });
        }

        _getTwoPosAngleY(selfWorPos, targetWorPos) {
          var _mainCamera, _mainCamera2;

          let targetScreenPos = (_mainCamera = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).mainCamera) == null ? void 0 : _mainCamera.worldToScreen(targetWorPos);
          let selfScreenPos = (_mainCamera2 = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).mainCamera) == null ? void 0 : _mainCamera2.worldToScreen(selfWorPos);
          Vec3.subtract(this._playerMonsterOffset, targetScreenPos, selfScreenPos);
          let angleY = Math.round(Math.atan2(this._playerMonsterOffset.y, this._playerMonsterOffset.x) * 180 / Math.PI);
          return angleY;
        }
        /**
         * 向怪物方向攻击
         */


        _attackMonster() {
          this._ndTarget = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getNearestMonster();

          if (!this._ndTarget || this.isDie) {
            return;
          }

          this._moveToTargetWorPos(this._ndTarget.worldPosition);

          this.isMoving = false; //播放攻击动画

          this.scriptPlayerModel.playAni((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).PLAYER_ANI_TYPE.ATTACK, false, () => {
            if (!this.scriptPlayerModel.isRunning) {
              this._attackMonster();
            }
          });
        }
        /**
         * 向敌人射箭
         *
         * @returns
         * @memberof Player
         */


        throwArrowToEnemy() {
          //射击摇摆
          this.node.forward = Vec3.subtract(this._forWard, this.node.worldPosition, this._ndTarget.worldPosition).normalize().negative(); //使用形态变换技能

          if (this._arrFormChangeSkill.length) {
            //使用技能
            if (this.isArrowDouble) {
              if (this.isArrowContinuous) {
                this._initArrow("arrowDoubleContinuous");
              } else {
                this._initArrow("arrowDouble");
              }
            } else {
              if (this.isArrowContinuous) {
                this._initArrow("arrowSingleContinuous");
              } else {
                this._initArrow("arrowSingle");
              }
            }

            this._arrFormChangeSkill.forEach(item => {
              let skillInfo = (_crd && LocalConfig === void 0 ? (_reportPossibleCrUseOfLocalConfig({
                error: Error()
              }), LocalConfig) : LocalConfig).instance.queryByID("playerSkill", String(item));

              if (item === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).PLAYER_SKILL.ARROW_REVERSE || item === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).PLAYER_SKILL.ARROW_SIDE || item === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).PLAYER_SKILL.ARROW_UMBRELLA) {
                this._initArrow(skillInfo.resName);
              }
            });
          } else {
            //没有技能则默认连续射单只箭
            this._initArrow("arrowSingle");
          }
        }
        /**
         * 初始化箭
         *
         * @private
         * @param {string} arrowName
         * @memberof Player
         */


        _initArrow(arrowName) {
          (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
            error: Error()
          }), ResourceUtil) : ResourceUtil).loadModelRes(`weapon/arrow/${arrowName}`).then(prefab => {
            if (this.isMoving) {
              return;
            }

            let ndArrow = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.getNode(prefab, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).ndGameManager);
            let playerWorPos = this.node.worldPosition;

            this._arrowPos.set(playerWorPos.x, 3, playerWorPos.z); // if (GameManager.isTesting) {
            //     this._arrowPos.set(playerWorPos.x, -3, playerWorPos.z);
            // }


            ndArrow.setWorldPosition(this._arrowPos);
            ndArrow.eulerAngles = this.node.eulerAngles;
            ndArrow.children.forEach(ndArrowItem => {
              let scriptArrowItem = ndArrowItem.getComponent(_crd && Arrow === void 0 ? (_reportPossibleCrUseOfArrow({
                error: Error()
              }), Arrow) : Arrow);
              scriptArrowItem.init(this._throwArrowSpeed, this.node.worldPosition);
            }); //播放箭的音效

            let isHasIce = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).scriptPlayer.isArrowIce;
            let isHasFire = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).scriptPlayer.isArrowFire;
            let isHasLightning = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).scriptPlayer.isArrowLightning;

            if (isHasIce || isHasFire || isHasLightning) {
              if (isHasIce) {
                (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                  error: Error()
                }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                  error: Error()
                }), Constant) : Constant).SOUND.ICE);
              }

              if (isHasFire) {
                (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                  error: Error()
                }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                  error: Error()
                }), Constant) : Constant).SOUND.FIRE);
              }

              if (isHasLightning) {
                (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                  error: Error()
                }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                  error: Error()
                }), Constant) : Constant).SOUND.LIGHTNING);
              }
            } else {
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).SOUND.LOOSE);
            }
          });
        }
        /**
         * 玩家加血、增加血量上限
         *
         * @param {number} bloodNum
         * @param {boolean} [isIncreaseLimit]
         * @memberof Player
         */


        addBlood(bloodNum, isIncreaseLimit) {
          (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
            error: Error()
          }), EffectManager) : EffectManager).instance.loadAndPlayEffect(true, this.node, "recovery/recovery", 1, null, null, true, true, (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).gameSpeed, true);
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).instance.showBloodTips(this, (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).FIGHT_TIP.ADD_BLOOD, bloodNum, this._bloodTipOffsetPos);
          this.scriptBloodBar.refreshBlood(bloodNum, isIncreaseLimit);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SOUND.RECOVERY);
        }
        /**
         * 玩家扣血
         *
         * @param {*} baseInfo 敌人基础信息
         * @return {*} 
         * @memberof Player
         */


        reduceBlood(baseInfo) {
          if (this.isDie) {
            return;
          }

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SOUND.HIT_PLAYER);

          if (Math.random() > this.playerBaseInfo.dodgeRate) {
            //扣血
            let tipType = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).FIGHT_TIP.REDUCE_BLOOD; //敌人伤害

            let damage = baseInfo.attackPower * (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).attackAddition * (1 - this.playerBaseInfo.defensePower / (this.playerBaseInfo.defensePower + 400));
            let isCriticalHit = Math.random() <= baseInfo.criticalHitRate; //是否暴击

            if (isCriticalHit) {
              damage = damage * baseInfo.criticalHitDamage;
              tipType = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).FIGHT_TIP.CRITICAL_HIT;
            }

            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).instance.showBloodTips(this, tipType, -damage, this._bloodTipOffsetPos);
            this.scriptBloodBar.refreshBlood(-damage);
          }
        }
        /**
         * 奔跑的时候加个烟雾
         *
         * @memberof Player
         */


        playRunSmoke() {
          // console.log("展示烟雾");
          if (!this._ndRunSmokeEffect) {
            (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
              error: Error()
            }), ResourceUtil) : ResourceUtil).loadEffectRes("runSmoke/runSmoke").then(pf => {
              this._ndRunSmokeEffect = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance.getNode(pf, this.node);
              this._ndRunSmokeEffect.active = true;
              (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
                error: Error()
              }), EffectManager) : EffectManager).instance.playParticle(this._ndRunSmokeEffect);
            });
          } else {
            this._ndRunSmokeEffect.active = true;
            (_crd && EffectManager === void 0 ? (_reportPossibleCrUseOfEffectManager({
              error: Error()
            }), EffectManager) : EffectManager).instance.playParticle(this._ndRunSmokeEffect);
          }
        }
        /**
         * 攻击的时候隐藏烟雾
         *
         * @memberof Player
         */


        hideRunSmoke() {
          if (this._ndRunSmokeEffect && this._ndRunSmokeEffect.active) {
            this._ndRunSmokeEffect.active = false; // console.log("隐藏烟雾");
          }
        }
        /**
         * 预加载箭和特效
         *
         * @param {Function} callback
         * @memberof Player
         */


        preloadArrow(callback) {
          let arrPromise = [];

          let loadArrow = (arrowName, arrowItemNum) => {
            return new Promise((resolve, reject) => {
              if (this._arrArrowPreload.indexOf(arrowName) == -1) {
                console.log("是否首次加载箭", arrowName);

                this._arrArrowPreload.push(arrowName);

                let groupNum = 2; //加载两三组

                let p1 = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).preloadArrowEffects(arrowItemNum * groupNum);
                let p2 = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).preloadArrow(arrowName, groupNum);
                Promise.all([p1, p2]).then(() => {
                  resolve(null);
                });
              } else {
                resolve(null);
              }
            });
          }; //没有技能,默认单只箭


          if (this._arrFormChangeSkill.length) {
            //使用技能
            this._arrFormChangeSkill.forEach(item => {
              let skillInfo = (_crd && LocalConfig === void 0 ? (_reportPossibleCrUseOfLocalConfig({
                error: Error()
              }), LocalConfig) : LocalConfig).instance.queryByID("playerSkill", String(item));

              if (item === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).PLAYER_SKILL.ARROW_REVERSE || item === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).PLAYER_SKILL.ARROW_SIDE || item === (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).PLAYER_SKILL.ARROW_UMBRELLA) {
                let p = loadArrow(skillInfo.resName, 2);
                arrPromise.push(p);
              }
            });

            if (this.isArrowDouble) {
              if (this.isArrowContinuous) {
                let p = loadArrow("arrowDoubleContinuous", 4);
                arrPromise.push(p);
              } else {
                let p = loadArrow("arrowDouble", 2);
                arrPromise.push(p);
              }
            } else {
              if (this.isArrowContinuous) {
                let p = loadArrow("arrowSingleContinuous", 2);
                arrPromise.push(p);
              } else {
                let p = loadArrow("arrowSingle", 1);
                arrPromise.push(p);
              }
            }
          } else {
            //默认连续射单只箭
            let p = loadArrow("arrowSingle", 1);
            arrPromise.push(p);
          }

          Promise.all(arrPromise).then(() => {
            callback && callback();
          });
        }

        _showDie() {
          this.scriptCharacterRigid.stopMove();
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SOUND.PLAYER_01_DIE);
          this.scriptPlayerModel.playAni((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).PLAYER_ANI_TYPE.DIE, false, () => {
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).isWin = false;
          });
        }
        /**
         * 玩家复活
         */


        _onRevive() {
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGamePause = false;
          this.addBlood(this.curHpLimit * 0.5);
          this.scriptBloodBar.node.active = true;
          this.scriptPlayerModel.playAni((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).PLAYER_ANI_TYPE.REVIVE, false, () => {
            this.isDie = false;
            this.playAction({
              action: (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).PLAYER_ACTION.STOP_MOVE
            });
            (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
              error: Error()
            }), ClientEvent) : ClientEvent).dispatchEvent((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).EVENT_TYPE.MONSTER_MOVE);
          });
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSound((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).SOUND.REVIVE);
        }

        update(deltaTime) {
          if (!(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameStart || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameOver || (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGamePause || this.isDie) {
            return;
          } //玩家旋转


          if (this.isPlayRotate) {
            //当前玩家角度
            this._tempAngle.set(this.node.eulerAngles);

            this._tempAngle.y = this._tempAngle.y < 0 ? this._tempAngle.y + 360 : this._tempAngle.y;
            this.node.eulerAngles = this._tempAngle;

            this._curAngle_1.set(0, this._tempAngle.y, 0);

            if (this._horizontal === 0 && this._vertical === 0) {
              this._range = 0.1;
            } else {
              this._range = 0.01;
            } //第二个参数越小朝向敌人越精确


            let isEqual = this._curAngle_1.equals(this._targetAngle, this._range);

            if (!isEqual) {
              Vec3.lerp(this._curAngle_1, this._curAngle_1, this._targetAngle, 0.167);
              this.node.eulerAngles = this._curAngle_1;
            } else {
              this.isPlayRotate = false;
              this.node.eulerAngles = this._targetAngle;
            }
          }

          if (this._horizontal !== 0 || this._vertical !== 0) {
            //计算出旋转角度
            this._rotateDirection.set(this._horizontal, 0, -this._vertical);

            this._rotateDirection.normalize();

            Quat.fromViewUp(qt_0, this._rotateDirection);
            Quat.toEuler(v3_0, qt_0);
            v3_0.y = v3_0.y < 0 ? v3_0.y + 360 : v3_0.y; // console.log("v3_0", v3_0.y);

            this.isPlayRotate = true; //设置当前玩家角度为正数

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

              this._targetAngle.set(0, this._targetAngle.y, 0);

              if (Math.abs(this._targetAngle.y - this._curAngle_2.y) > 180) {
                if (this._targetAngle.y > this._curAngle_2.y) {
                  this._targetAngle.y -= 360;
                } else {
                  this._targetAngle.y += 360;
                }
              } // console.log("this._targetAngle.y", this._targetAngle.y);

            } else {
              this.isPlayRotate = false;
              this.node.eulerAngles = v3_0;
            }

            if (!this.isMoving) {
              return;
            }

            this.scriptCharacterRigid.move(this._rotateDirection.x * this.curMoveSpeed * 0.5 * deltaTime, this._rotateDirection.z * this.curMoveSpeed * 0.5 * deltaTime);

            if (!this.scriptPlayerModel.isRunning && !this.isDie) {
              this.scriptPlayerModel.playAni((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).PLAYER_ANI_TYPE.RUN, true);
            }
          } else {
            if (!this.isDie && !this.scriptPlayerModel.isIdle && !this.scriptPlayerModel.isAttacking) {
              this.scriptPlayerModel.playAni((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                error: Error()
              }), Constant) : Constant).PLAYER_ANI_TYPE.IDLE, true);
              this.scriptCharacterRigid.stopMove();
            }

            if (this._rotateInterval > 0) {
              this._rotateInterval -= deltaTime;

              if (this._rotateInterval <= 0 && this.isPlayRotate) {
                this.isPlayRotate = false;
              }
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scriptPlayerModel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rigidComPlayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "colliderComPlayer", [_dec4], {
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
//# sourceMappingURL=7f734e01ec32531caf088115909dd46af6cf7a43.js.map