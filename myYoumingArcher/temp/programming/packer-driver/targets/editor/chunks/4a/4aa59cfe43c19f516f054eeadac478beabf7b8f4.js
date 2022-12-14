System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, AnimationComponent, ParticleSystemComponent, Vec3, find, AnimationClip, isValid, director, PoolManager, ResourceUtil, WarningCircle, Reward, WarningStrip, WarningLine, _dec, _class, _class2, _crd, ccclass, property, EffectManager;

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "./poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourceUtil(extras) {
    _reporterNs.report("ResourceUtil", "./resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWarningCircle(extras) {
    _reporterNs.report("WarningCircle", "../fight/warningSkill/warningCircle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReward(extras) {
    _reporterNs.report("Reward", "../fight/reward", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWarningStrip(extras) {
    _reporterNs.report("WarningStrip", "../fight/warningSkill/warningStrip", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWarningLine(extras) {
    _reporterNs.report("WarningLine", "../fight/warningSkill/warningLine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      AnimationComponent = _cc.AnimationComponent;
      ParticleSystemComponent = _cc.ParticleSystemComponent;
      Vec3 = _cc.Vec3;
      find = _cc.find;
      AnimationClip = _cc.AnimationClip;
      isValid = _cc.isValid;
      director = _cc.director;
    }, function (_unresolved_2) {
      PoolManager = _unresolved_2.PoolManager;
    }, function (_unresolved_3) {
      ResourceUtil = _unresolved_3.ResourceUtil;
    }, function (_unresolved_4) {
      WarningCircle = _unresolved_4.WarningCircle;
    }, function (_unresolved_5) {
      Reward = _unresolved_5.Reward;
    }, function (_unresolved_6) {
      WarningStrip = _unresolved_6.WarningStrip;
    }, function (_unresolved_7) {
      WarningLine = _unresolved_7.WarningLine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "554baRvdXVCaZZeXFSvvApe", "effectManager", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Prefab', 'AnimationComponent', 'ParticleSystemComponent', 'Vec3', 'find', 'AnimationState', 'AnimationClip', 'isValid', 'director']);

      /**
       * Predefined variables
       * Name = EffectManager
       * DateTime = Mon Dec 06 2021 16:13:38 GMT+0800 (??????????????????)
       * Author = yveda
       * FileBasename = effectManager.ts
       * FileBasenameNoExtension = effectManager
       * URL = db://assets/script/framework/effectManager.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */
      ({
        ccclass,
        property
      } = _decorator); //??????????????????

      _export("EffectManager", EffectManager = (_dec = ccclass('EffectManager'), _dec(_class = (_class2 = class EffectManager {
        constructor() {
          this._ndParent = null;
        }

        get ndParent() {
          if (!this._ndParent) {
            let ndEffectParent = find("effectManager");

            if (ndEffectParent) {
              this._ndParent = ndEffectParent;
            } else {
              var _director$getScene;

              // console.warn("?????????????????????effectManager??????");
              this._ndParent = new Node("effectManager");
              (_director$getScene = director.getScene()) == null ? void 0 : _director$getScene.addChild(this._ndParent);
            }
          }

          return this._ndParent;
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new EffectManager();
          return this._instance;
        }
        /**
         * ????????????????????????
         * @param ndEffect ????????????
         * @param aniName ????????????
         * @returns 
         */


        resetEffectState(ndEffect, aniName) {
          if (!isValid(ndEffect)) {
            return;
          }

          let arrParticle = ndEffect.getComponentsInChildren(ParticleSystemComponent);

          if (arrParticle.length) {
            arrParticle.forEach(element => {
              element == null ? void 0 : element.stop();
              element == null ? void 0 : element.clear();
            });
          }

          let arrAni = ndEffect.getComponentsInChildren(AnimationComponent);

          if (arrAni.length) {
            arrAni.forEach((element, idx) => {
              if (element.defaultClip && element.defaultClip.name) {
                let aniState = null;

                if (aniName) {
                  aniState = element.getState(aniName);
                }

                if (!aniState) {
                  aniState = element.getState(element.defaultClip.name);
                }

                if (aniState) {
                  aniState.stop();
                  aniState.time = 0;
                  aniState.sample();
                }
              }
            });
          }
        }
        /**
         * ?????????????????????????????????????????????????????????
         *
         * @param {boolean} [isLocal=true] ???????????????????????????????????????????????????????????????
         * @param {Node} ndTarget ??????????????????
         * @param {string} effectPath ????????????
         * @param {number} [scale=1] ????????????
         * @param {(Vec3 | null)} pos ??????
         * @param {(Vec3 | null)} eulerAngles ??????
         * @param {boolean} [isPlayAnimation=true] ??????????????????
         * @param {boolean} [isPlayParticle=true] ??????????????????
         * @param {number} [speed=1] ????????????
         * @param {boolean} [isRecycle=false] ????????????
         * @param {number} [recycleTime=0] ????????????
         * @param {(Function | null)} callback ????????????
         * @returns
         * @memberof EffectManager
         */


        loadAndPlayEffect(isLocal = true, ndTarget, effectPath, scale = 1, pos, eulerAngles, isPlayAnimation = true, isPlayParticle = true, speed = 1, isRecycle = false, recycleTime, callback) {
          //????????????????????????????????????????????????????????????
          if (isLocal && (!ndTarget || !ndTarget.parent)) {
            return;
          }

          (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
            error: Error()
          }), ResourceUtil) : ResourceUtil).loadEffectRes(effectPath).then(prefab => {
            let ndParent = isLocal ? ndTarget : this.ndParent;
            let ndEffect = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.getNode(prefab, ndParent);

            if (isLocal) {
              ndEffect.setScale(scale, scale, scale);

              if (pos) {
                ndEffect.setPosition(pos);
              }

              if (eulerAngles) {
                ndEffect.eulerAngles = eulerAngles;
              }
            } else {
              ndEffect.setWorldScale(scale, scale, scale);

              if (pos) {
                ndEffect.setWorldPosition(pos);
              }

              if (eulerAngles) {
                ndEffect.setWorldRotationFromEuler(eulerAngles.x, eulerAngles.y, eulerAngles.z);
              }
            }

            this.playEffect(ndEffect, isPlayAnimation, isPlayParticle, speed, isRecycle, recycleTime, callback);
          });
        }
        /**
         * ????????????????????????????????????
         *
         * @param {Node} ndEffect ????????????
         * @param {boolean} [isPlayAnimation=true] ??????????????????
         * @param {boolean} [isPlayParticle=true] ??????????????????
         * @param {number} [speed=1] ????????????
         * @param {boolean} [isRecycle=false] ????????????
         * @param {number} [recycleTime=0] ????????????
         * @param {(Function | null)} callback ????????????
         * @returns
         * @memberof EffectManager
         */


        playEffect(ndEffect, isPlayAnimation = true, isPlayParticle = true, speed = 1, isRecycle = false, recycleTime, callback) {
          //????????????????????????
          let maxDuration = 0;

          if (isPlayAnimation) {
            let duration = this.playAnimation(ndEffect, speed, null, false, false, null, null);
            maxDuration = duration > maxDuration ? duration : maxDuration;
          }

          if (isPlayParticle) {
            let duration = this.playParticle(ndEffect, speed, false, null, null);
            maxDuration = duration > maxDuration ? duration : maxDuration;
          }

          maxDuration = recycleTime && recycleTime > 0 ? recycleTime : maxDuration;

          if (callback || isRecycle) {
            setTimeout(() => {
              if (ndEffect.parent) {
                callback && callback();

                if (isRecycle) {
                  (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                    error: Error()
                  }), PoolManager) : PoolManager).instance.putNode(ndEffect);
                } else {
                  ndEffect.destroy();
                }
              }
            }, maxDuration * 1000);
          }
        }
        /**
         * ????????????????????????????????????
         *
         * @param {Node} ndEffect ????????????
         * @param {number} [speed=1] ??????????????????
         * @param {(string | null)} animationName ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
         * @param {boolean} [isLoop=false] ??????????????????
         * @param {boolean} [isRecycle=false] ????????????
         * @param {(number | null)} recycleTime ????????????,?????????null?????????maxDuration
         * @param {(Function | null)} callback ????????????
         * @returns
         * @memberof EffectManager
         */


        playAnimation(ndEffect, speed = 1, animationName, isLoop = false, isRecycle = false, recycleTime, callback) {
          //????????????????????????
          let maxDuration = 0;
          let aniState = null;

          if (!ndEffect.active) {
            ndEffect.active = true;
          }

          let arrAni = ndEffect.getComponentsInChildren(AnimationComponent);

          if (arrAni.length) {
            arrAni.forEach((element, idx) => {
              var _element$defaultClip;

              let aniName = animationName ? animationName : element == null ? void 0 : (_element$defaultClip = element.defaultClip) == null ? void 0 : _element$defaultClip.name;

              if (aniName) {
                aniState = element.getState(aniName);

                if (aniState) {
                  aniState.time = 0;
                  aniState.speed = speed;
                  aniState.sample();
                  let duration = aniState.duration;
                  maxDuration = duration > maxDuration ? duration : maxDuration;

                  if (isLoop) {
                    aniState.wrapMode = AnimationClip.WrapMode.Loop;
                  } else {
                    aniState.wrapMode = AnimationClip.WrapMode.Normal;
                  }

                  element == null ? void 0 : element.play(aniName);
                }
              }
            });
            maxDuration = recycleTime && recycleTime > 0 ? recycleTime : maxDuration;

            let cb = () => {
              if (ndEffect && ndEffect.parent) {
                callback && callback();

                if (isRecycle) {
                  (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                    error: Error()
                  }), PoolManager) : PoolManager).instance.putNode(ndEffect);
                }
              }
            };

            if (callback || isRecycle) {
              if (arrAni.length === 1) {
                arrAni[0].once(AnimationComponent.EventType.FINISHED, () => {
                  cb();
                });
              } else {
                setTimeout(() => {
                  cb();
                }, maxDuration * 1000);
              }
            }

            return maxDuration;
          } else {
            console.warn(`###${ndEffect.name}???????????????????????????`);
            return 0;
          }
        }
        /**
         * ??????????????????????????????
         *
         * @param {Node} ndEffect ????????????
         * @param {number} [speed=1] ??????????????????
         * @param {boolean} [isRecycle=false] ??????????????????????????????
         * @param {(number | null)} [recycleTime] ????????????, ?????????null?????????maxDuration
         * @param {(Function | null)} [callback] ????????????
         * @returns ??????????????????????????????
         * @memberof EffectManager
         */


        playParticle(ndEffect, speed = 1, isRecycle = false, recycleTime, callback) {
          //????????????????????????
          let maxDuration = 0;

          if (!ndEffect.active) {
            ndEffect.active = true;
          }

          let arrParticle = ndEffect.getComponentsInChildren(ParticleSystemComponent);

          if (arrParticle.length) {
            arrParticle.forEach(element => {
              element.simulationSpeed = speed;
              element == null ? void 0 : element.clear();
              element == null ? void 0 : element.stop();
              element == null ? void 0 : element.play();
              let duration = element.duration;
              maxDuration = duration > maxDuration ? duration : maxDuration;
            }); //????????????????????????????????????????????????????????????

            maxDuration = recycleTime && recycleTime > 0 ? recycleTime : maxDuration;

            if (callback || isRecycle) {
              setTimeout(() => {
                if (ndEffect && ndEffect.parent) {
                  callback && callback();

                  if (isRecycle) {
                    (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                      error: Error()
                    }), PoolManager) : PoolManager).instance.putNode(ndEffect);
                  }
                }
              }, maxDuration * 1000);
            }

            return maxDuration;
          } else {
            console.warn(`###${ndEffect.name}???????????????????????????`);
            return 0;
          }
        }
        /**
         * ????????????(???????????????)??????
         *
         * @param {Node} ndMonster
         * @param {string} modelPath
         * @param {number} [rewardNum=1]
         * @param {Function} [callback=()=>{}]
         * @memberof EffectManager
         */


        showRewardBounce(ndMonster, modelPath, rewardNum = 1, callback = () => {}) {
          let time = rewardNum <= 10 ? 0.15 : 0.07;
          (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
            error: Error()
          }), ResourceUtil) : ResourceUtil).loadModelRes(modelPath).then(pf => {
            for (let i = 0; i < rewardNum; i++) {
              let ndReward = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance.getNode(pf, this.ndParent);
              ndReward.setWorldPosition(ndMonster.worldPosition.x, 1.65, ndMonster.worldPosition.z);
              ndReward.active = false;
              let scriptReward = ndReward.getComponent(_crd && Reward === void 0 ? (_reportPossibleCrUseOfReward({
                error: Error()
              }), Reward) : Reward);
              scriptReward.init((i + 1) * time, this.ndParent);
            }

            callback && callback();
          });
        }
        /**
         * ????????????
         *
         * @param {string} warningName
         * @param {number} scale
         * @param {*} scriptParent
         * @memberof EffectManager
         */


        showWarning(warningName, scale, scriptParent, callback) {
          (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
            error: Error()
          }), ResourceUtil) : ResourceUtil).loadEffectRes(`warning/${warningName}`).then(pf => {
            let ndWarning = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.getNode(pf, this.ndParent);
            let scriptWarning = null;

            if (warningName === "warningLine") {
              scriptWarning = ndWarning.getComponent(_crd && WarningLine === void 0 ? (_reportPossibleCrUseOfWarningLine({
                error: Error()
              }), WarningLine) : WarningLine);
            } else if (warningName === "warningStrip") {
              scriptWarning = ndWarning.getComponent(_crd && WarningStrip === void 0 ? (_reportPossibleCrUseOfWarningStrip({
                error: Error()
              }), WarningStrip) : WarningStrip);
            } else if (warningName === "warningCircle") {
              scriptWarning = ndWarning.getComponent(_crd && WarningCircle === void 0 ? (_reportPossibleCrUseOfWarningCircle({
                error: Error()
              }), WarningCircle) : WarningCircle);
            }

            scriptWarning.init(scale, scriptParent);
            scriptParent.scriptWarning = scriptWarning;
            callback && callback();
          });
        }
        /**
         * ????????????????????????
         *
         * @param {Node} ndParent
         * @param {Node} ndTarget
         * @memberof EffectManager
         */


        showLightningChain(ndParent, ndTarget) {
          (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
            error: Error()
          }), ResourceUtil) : ResourceUtil).loadEffectRes(`lightningChain/lightningChain`).then(pf => {
            let ndEffect = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.getNode(pf, ndParent);
            ndEffect.setWorldPosition(ndParent.worldPosition.x, 2.3, ndParent.worldPosition.z);
            let offsetPos = new Vec3();
            Vec3.subtract(offsetPos, ndTarget.worldPosition, ndParent.worldPosition);
            ndEffect.setWorldScale(1, offsetPos.length(), 1);
            ndEffect.forward = offsetPos.normalize().negative();
            setTimeout(() => {
              (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).instance.putNode(ndEffect);
            }, 100);
          });
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4aa59cfe43c19f516f054eeadac478beabf7b8f4.js.map