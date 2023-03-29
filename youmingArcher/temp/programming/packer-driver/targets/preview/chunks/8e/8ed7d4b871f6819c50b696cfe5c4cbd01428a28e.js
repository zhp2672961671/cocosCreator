System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, PlayerData, UIManager, GameManager, _decorator, Component, Quat, MeshColliderComponent, BoxColliderComponent, CylinderColliderComponent, Enum, CapsuleColliderComponent, Constant, PoolManager, _dec, _dec2, _class, _class2, _descriptor, _class3, _crd, ccclass, property, COLLIDER_NAME, ColliderItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "./../framework/playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./../framework/uiManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../framework/constant", _context.meta, extras);
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
      MeshColliderComponent = _cc.MeshColliderComponent;
      BoxColliderComponent = _cc.BoxColliderComponent;
      CylinderColliderComponent = _cc.CylinderColliderComponent;
      Enum = _cc.Enum;
      CapsuleColliderComponent = _cc.CapsuleColliderComponent;
    }, function (_unresolved_2) {
      PlayerData = _unresolved_2.PlayerData;
    }, function (_unresolved_3) {
      UIManager = _unresolved_3.UIManager;
    }, function (_unresolved_4) {
      GameManager = _unresolved_4.GameManager;
    }, function (_unresolved_5) {
      Constant = _unresolved_5.Constant;
    }, function (_unresolved_6) {
      PoolManager = _unresolved_6.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a3c3eSoUrFKl5IFTQQGWnRd", "colliderItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Quat', 'MeshColliderComponent', 'Node', 'BoxColliderComponent', 'CylinderColliderComponent', 'ITriggerEvent', 'Enum', 'AnimationComponent', 'CapsuleColliderComponent', 'ICollisionEvent', 'math']);

      //碰撞器脚本
      ({
        ccclass,
        property
      } = _decorator);
      COLLIDER_NAME = Enum({
        HEART_BIG: 1,
        //大爱心, 玩家吃到后增加生命上限
        WARP_GATE: 2,
        //传送门
        NPC_BUSINESS_MAN: 3,
        //NPC商人
        NPC_WISE_MAN: 4 //NPC智慧老头

      }); //管理游戏中若干碰撞器

      _export("ColliderItem", ColliderItem = (_dec = ccclass('ColliderItem'), _dec2 = property({
        type: COLLIDER_NAME,
        displayOrder: 1
      }), _dec(_class = (_class2 = (_class3 = class ColliderItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "colliderName", _descriptor, this);

          this.colliderCom = null;
          this.ani = null;
          this._curHeartBigQuat = new Quat();
          this._timer = null;
        }

        set timer(obj) {
          if (this._timer) {
            clearTimeout(this._timer);
            this._timer = null;
          }
        }

        //定时器
        onLoad() {
          this.colliderCom = this.node.getComponent(BoxColliderComponent) || this.node.getComponent(CylinderColliderComponent) || this.node.getComponent(CapsuleColliderComponent) || this.node.getComponent(MeshColliderComponent);

          if (!this.colliderCom) {
            console.error("this node does not have collider component");
          }
        }

        onEnable() {
          if (this.colliderCom.isTrigger) {
            this.colliderCom.on('onTriggerEnter', this._onTriggerEnterCb, this);
          } else {
            this.colliderCom.on('onCollisionEnter', this._onCollisionEnterCb, this);
          }
        }

        onDisable() {
          if (this.colliderCom.isTrigger) {
            this.colliderCom.off('onTriggerEnter', this._onTriggerEnterCb, this);
          } else {
            this.colliderCom.off('onCollisionEnter', this._onCollisionEnterCb, this);
          }
        }

        start() {}
        /**
         * 初始化
         */


        init() {}

        _onTriggerEnterCb(event) {
          this._hitTarget(event.otherCollider, event.selfCollider);
        }

        _onCollisionEnterCb(event) {
          this._hitTarget(event.otherCollider, event.selfCollider);
        }

        _hitTarget(otherCollider, selfCollider) {
          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameOver || !(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameStart) {
            return;
          } // console.log("getGroup", otherCollider.getGroup());


          if (otherCollider.getGroup() == (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).PHY_GROUP.PLAYER && (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer) {
            switch (this.colliderName) {
              case COLLIDER_NAME.HEART_BIG:
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.addBlood(300);
                (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                  error: Error()
                }), PoolManager) : PoolManager).instance.putNode(this.node);
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).checkTriggerAll();
                break;

              case COLLIDER_NAME.WARP_GATE:
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.playAction({
                  action: (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                    error: Error()
                  }), Constant) : Constant).PLAYER_ACTION.STOP_MOVE
                });
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.scriptCharacterRigid.stopMove();
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).ndPlayer.active = false;
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).isWin = true;
                break;

              case COLLIDER_NAME.NPC_BUSINESS_MAN:
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).isGamePause = true;
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.scriptCharacterRigid.stopMove();
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.scriptPlayerModel.playAni((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                  error: Error()
                }), Constant) : Constant).PLAYER_ANI_TYPE.IDLE, true);

                if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).instance.isPlayerSkillAllUnlock) {
                  //防错
                  (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                    error: Error()
                  }), UIManager) : UIManager).instance.showTips("所有技能均已解锁");
                  (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                    error: Error()
                  }), PoolManager) : PoolManager).instance.putNode(this.node);
                  (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                    error: Error()
                  }), GameManager) : GameManager).isGamePause = false;
                } else {
                  (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                    error: Error()
                  }), UIManager) : UIManager).instance.hideDialog("fight/fightPanel");
                  (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                    error: Error()
                  }), UIManager) : UIManager).instance.showDialog("shop/shopPanel", [() => {
                    (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                      error: Error()
                    }), GameManager) : GameManager).isGamePause = false;
                    (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                      error: Error()
                    }), PoolManager) : PoolManager).instance.putNode(this.node);
                  }], () => {}, (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                    error: Error()
                  }), Constant) : Constant).PRIORITY.DIALOG);
                }

                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).checkTriggerAll();
                break;

              case COLLIDER_NAME.NPC_WISE_MAN:
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).isGamePause = true;
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.scriptCharacterRigid.stopMove();
                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).scriptPlayer.scriptPlayerModel.playAni((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                  error: Error()
                }), Constant) : Constant).PLAYER_ANI_TYPE.IDLE, true);

                if ((_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
                  error: Error()
                }), PlayerData) : PlayerData).instance.isPlayerSkillAllUnlock) {
                  (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                    error: Error()
                  }), UIManager) : UIManager).instance.showTips("所有技能均已解锁");
                  (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                    error: Error()
                  }), PoolManager) : PoolManager).instance.putNode(this.node);
                  (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                    error: Error()
                  }), GameManager) : GameManager).isGamePause = false;
                } else {
                  (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                    error: Error()
                  }), UIManager) : UIManager).instance.hideDialog("fight/fightPanel");
                  (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                    error: Error()
                  }), UIManager) : UIManager).instance.showDialog("skill/skillPanel", [() => {
                    (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                      error: Error()
                    }), PoolManager) : PoolManager).instance.putNode(this.node);
                    (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                      error: Error()
                    }), GameManager) : GameManager).isGamePause = false;
                  }], () => {}, (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
                    error: Error()
                  }), Constant) : Constant).PRIORITY.DIALOG);
                }

                (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).checkTriggerAll();
                break;
            }
          }
        }

        update(deltaTime) {
          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isGameOver || !(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).ndPlayer || !this.node.parent) {
            return;
          }

          if (this.colliderName === COLLIDER_NAME.HEART_BIG) {
            Quat.fromEuler(this._curHeartBigQuat, 0, 120 * deltaTime, 0);
            this.node.rotate(this._curHeartBigQuat);
          }
        }

      }, _class3.COLLIDER_NAME = COLLIDER_NAME, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "colliderName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return COLLIDER_NAME.HEART_BIG;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8ed7d4b871f6819c50b696cfe5c4cbd01428a28e.js.map