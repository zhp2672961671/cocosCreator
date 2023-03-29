System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, FightTip, _decorator, find, isValid, Vec3, ResourceUtil, PoolManager, tips, GameManager, PlayerBloodBar, MonsterBloodBar, Constant, _dec, _class, _class2, _crd, ccclass, property, SHOW_STR_INTERVAL_TIME, v3_playerBloodOffsetPos, v3_playerBloodScale, v3_monsterBloodOffsetPos, v3_monsterBloodScale, UIManager;

  function _reportPossibleCrUseOfFightTip(extras) {
    _reporterNs.report("FightTip", "./../ui/common/fightTip", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourceUtil(extras) {
    _reporterNs.report("ResourceUtil", "./resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "./poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOftips(extras) {
    _reporterNs.report("tips", "../ui/common/tips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../fight/gameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerBloodBar(extras) {
    _reporterNs.report("PlayerBloodBar", "../ui/fight/playerBloodBar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterBloodBar(extras) {
    _reporterNs.report("MonsterBloodBar", "../ui/fight/monsterBloodBar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "./constant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      find = _cc.find;
      isValid = _cc.isValid;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      FightTip = _unresolved_2.FightTip;
    }, function (_unresolved_3) {
      ResourceUtil = _unresolved_3.ResourceUtil;
    }, function (_unresolved_4) {
      PoolManager = _unresolved_4.PoolManager;
    }, function (_unresolved_5) {
      tips = _unresolved_5.tips;
    }, function (_unresolved_6) {
      GameManager = _unresolved_6.GameManager;
    }, function (_unresolved_7) {
      PlayerBloodBar = _unresolved_7.PlayerBloodBar;
    }, function (_unresolved_8) {
      MonsterBloodBar = _unresolved_8.MonsterBloodBar;
    }, function (_unresolved_9) {
      Constant = _unresolved_9.Constant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f9384FYDp5GqoW+CtrCla3U", "uiManager", undefined);

      __checkObsolete__(['_decorator', 'Node', 'find', 'isValid', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      SHOW_STR_INTERVAL_TIME = 800;
      v3_playerBloodOffsetPos = new Vec3(-10, 100, 0); //血条距离玩家节点位置

      v3_playerBloodScale = new Vec3(1.5, 1.5, 1.5); //玩家血条缩放大小

      v3_monsterBloodOffsetPos = new Vec3(-10, 100, 0); //血条距离小怪节点位置

      v3_monsterBloodScale = new Vec3(1.5, 1.5, 1.5); //小怪血条缩放大小

      _export("UIManager", UIManager = (_dec = ccclass("UIManager"), _dec(_class = (_class2 = class UIManager {
        constructor() {
          this._dictSharedPanel = {};
          this._dictLoading = {};
          this._arrPopupDialog = [];
          this._showTipsTime = 0;
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new UIManager();
          return this._instance;
        }
        /**
         * 检查当前界面是否正在展示
         * @param panelPath 
         */


        isDialogVisible(panelPath) {
          if (!this._dictSharedPanel.hasOwnProperty(panelPath)) {
            return false;
          }

          var panel = this._dictSharedPanel[panelPath];
          return isValid(panel) && panel.active && isValid(panel.parent);
        }
        /**
         * 显示单例界面
         * @param {String} panelPath 
         * @param {Array} args 
         * @param {Function} cb 回调函数，创建完毕后回调
         */


        showDialog(panelPath, args, cb, panelPriority) {
          if (panelPriority === void 0) {
            panelPriority = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).PRIORITY.NORMAL;
          }

          if (this._dictLoading[panelPath]) {
            return;
          }

          var idxSplit = panelPath.lastIndexOf('/');
          var scriptName = panelPath.slice(idxSplit + 1);

          if (!args) {
            args = [];
          }

          if (this._dictSharedPanel.hasOwnProperty(panelPath)) {
            var panel = this._dictSharedPanel[panelPath];

            if (isValid(panel)) {
              panel.parent = find("Canvas");
              panel.active = true;
              var script = panel.getComponent(scriptName);
              var script2 = panel.getComponent(scriptName.charAt(0).toUpperCase() + scriptName.slice(1));

              if (script && script.show) {
                script.show.apply(script, args);
                cb && cb(script);
              } else if (script2 && script2.show) {
                script2.show.apply(script2, args);
                cb && cb(script2);
              } else {
                throw "\u67E5\u627E\u4E0D\u5230\u811A\u672C\u6587\u4EF6" + scriptName;
              }

              return;
            }
          }

          this._dictLoading[panelPath] = true;
          (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
            error: Error()
          }), ResourceUtil) : ResourceUtil).createUI(panelPath, (err, node) => {
            //判断是否有可能在显示前已经被关掉了？
            var isCloseBeforeShow = false;

            if (!this._dictLoading[panelPath]) {
              //已经被关掉
              isCloseBeforeShow = true;
            }

            this._dictLoading[panelPath] = false;

            if (err) {
              console.error(err);
              return;
            } // node.getComponent(UITransformComponent).priority = panelPriority;


            node.setSiblingIndex(panelPriority);
            this._dictSharedPanel[panelPath] = node;
            var script = node.getComponent(scriptName);
            var script2 = node.getComponent(scriptName.charAt(0).toUpperCase() + scriptName.slice(1));

            if (script && script.show) {
              script.show.apply(script, args);
              cb && cb(script);
            } else if (script2 && script2.show) {
              script2.show.apply(script2, args);
              cb && cb(script2);
            } else {
              throw "\u67E5\u627E\u4E0D\u5230\u811A\u672C\u6587\u4EF6" + scriptName;
            }

            if (isCloseBeforeShow) {
              //如果在显示前又被关闭，则直接触发关闭掉
              this.hideDialog(panelPath);
            }
          });
        }
        /**
         * 隐藏单例界面
         * @param {String} panelPath 
         * @param {fn} callback
         */


        hideDialog(panelPath, callback) {
          if (this._dictSharedPanel.hasOwnProperty(panelPath)) {
            var panel = this._dictSharedPanel[panelPath];

            if (panel && isValid(panel)) {
              var ani = panel.getComponent('animationUI');

              if (ani) {
                ani.close(() => {
                  panel.parent = null;

                  if (callback && typeof callback === 'function') {
                    callback();
                  }
                });
              } else {
                panel.parent = null;

                if (callback && typeof callback === 'function') {
                  callback();
                }
              }
            } else if (callback && typeof callback === 'function') {
              callback();
            }
          }

          this._dictLoading[panelPath] = false;
        }
        /**
         * 将弹窗加入弹出窗队列
         * @param {string} panelPath 
         * @param {string} scriptName 
         * @param {*} param 
         */


        pushToPopupSeq(panelPath, scriptName, param) {
          var popupDialog = {
            panelPath: panelPath,
            scriptName: scriptName,
            param: param,
            isShow: false
          };

          this._arrPopupDialog.push(popupDialog);

          this._checkPopupSeq();
        }
        /**
         * 将弹窗加入弹出窗队列
         * @param {number} index 
         * @param {string} panelPath 
         * @param {string} scriptName 
         * @param {*} param 
         */


        insertToPopupSeq(index, panelPath, param) {
          var popupDialog = {
            panelPath: panelPath,
            param: param,
            isShow: false
          };

          this._arrPopupDialog.splice(index, 0, popupDialog); //this._checkPopupSeq();

        }
        /**
         * 将弹窗从弹出窗队列中移除
         * @param {string} panelPath 
         */


        shiftFromPopupSeq(panelPath) {
          this.hideDialog(panelPath, () => {
            if (this._arrPopupDialog[0] && this._arrPopupDialog[0].panelPath === panelPath) {
              this._arrPopupDialog.shift();

              this._checkPopupSeq();
            }
          });
        }
        /**
         * 检查当前是否需要弹窗
         */


        _checkPopupSeq() {
          if (this._arrPopupDialog.length > 0) {
            var first = this._arrPopupDialog[0];

            if (!first.isShow) {
              this.showDialog(first.panelPath, first.param);
              this._arrPopupDialog[0].isShow = true;
            }
          }
        }
        /**
         * 显示提示
         * @param {String} content 
         * @param {Function} cb 
         */


        showTips(content, type, targetPos, scale, callback) {
          if (type === void 0) {
            type = 'txt';
          }

          if (targetPos === void 0) {
            targetPos = new Vec3();
          }

          if (scale === void 0) {
            scale = 1;
          }

          if (callback === void 0) {
            callback = () => {};
          }

          var str = String(content);

          var next = () => {
            this._showTipsAni(str, type, targetPos, scale, callback);
          };

          var now = Date.now();

          if (now - this._showTipsTime < SHOW_STR_INTERVAL_TIME && type !== 'gold' && type !== 'heart') {
            var spareTime = SHOW_STR_INTERVAL_TIME - (now - this._showTipsTime);
            setTimeout(() => {
              next();
            }, spareTime);
            this._showTipsTime = now + spareTime;
          } else {
            next();
            this._showTipsTime = now;
          }
        }
        /**
         * 内部函数
         * @param {String} content 
         * @param {Function} cb 
         */


        _showTipsAni(content, type, targetPos, scale, callback) {
          (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
            error: Error()
          }), ResourceUtil) : ResourceUtil).getUIPrefabRes('common/tips', function (err, prefab) {
            if (err) {
              return;
            }

            var tipsNode = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.getNode(prefab, find("Canvas"));
            var tipScript = tipsNode.getComponent(_crd && tips === void 0 ? (_reportPossibleCrUseOftips({
              error: Error()
            }), tips) : tips);
            tipScript.show(content, type, targetPos, scale, callback);
          });
        }
        /**
         * 展示玩家血条
         *
         * @param {*} scriptParent 条使用者绑定的节点，如玩家或者小怪
         * @param {number} totalBlood 总血量
         * @param {number} curBlood 当前血量
         * @param {Function} [callback=()=>{}]
         * @param {Vec3} [offsetPos=v3_playerBloodOffsetPos] 血条位置偏差
         * @param {Vec3} [scale=v3_playerBloodScale] 血条缩放大小
         * @memberof UIManager
         */


        showPlayerBloodBar(scriptParent, totalBlood, curBlood, callback, offsetPos, scale) {
          if (callback === void 0) {
            callback = () => {};
          }

          if (offsetPos === void 0) {
            offsetPos = v3_playerBloodOffsetPos;
          }

          if (scale === void 0) {
            scale = v3_playerBloodScale;
          }

          (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
            error: Error()
          }), ResourceUtil) : ResourceUtil).getUIPrefabRes('fight/playerBloodBar', function (err, prefab) {
            if (err) {
              return;
            }

            var ndBloodBar = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.getNode(prefab, find("Canvas"));
            ndBloodBar.setSiblingIndex(0);
            var scriptBloodBar = ndBloodBar.getComponent(_crd && PlayerBloodBar === void 0 ? (_reportPossibleCrUseOfPlayerBloodBar({
              error: Error()
            }), PlayerBloodBar) : PlayerBloodBar);
            scriptParent.scriptBloodBar = scriptBloodBar;
            scriptBloodBar.show(scriptParent, totalBlood, curBlood, offsetPos, scale, callback);
          });
        }
        /**
         * 展示小怪血条
         *  
         * @param {*} scriptParent 
         * @param {number} totalBlood
         * @param {number} bloodBarType
         * @param {Function} [callback=()=>{}]
         * @param {Vec3} [offsetPos=MONSTER_BLOOD_OFFSET_POS]
         * @param {Vec3} [scale=MONSTER_BLOOD_SCALE]
         * @memberof uiManager
         */


        showMonsterBloodBar(scriptParent, totalBlood, callback, offsetPos, scale) {
          if (callback === void 0) {
            callback = () => {};
          }

          if (offsetPos === void 0) {
            offsetPos = v3_monsterBloodOffsetPos;
          }

          if (scale === void 0) {
            scale = v3_monsterBloodScale;
          }

          (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
            error: Error()
          }), ResourceUtil) : ResourceUtil).getUIPrefabRes('fight/monsterBloodBar', function (err, prefab) {
            if (err) {
              return;
            }

            var ndBloodBar = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.getNode(prefab, find("Canvas"));
            var scriptBloodBar = ndBloodBar.getComponent(_crd && MonsterBloodBar === void 0 ? (_reportPossibleCrUseOfMonsterBloodBar({
              error: Error()
            }), MonsterBloodBar) : MonsterBloodBar);
            scriptParent.scriptBloodBar = scriptBloodBar;
            scriptBloodBar.show(scriptParent, totalBlood, offsetPos, scale, callback);
          });
        }
        /**
         * 展示血量提示
         */


        showBloodTips(scriptParent, type, bloodNum, offset, callback) {
          (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
            error: Error()
          }), ResourceUtil) : ResourceUtil).getUIPrefabRes('common/fightTip', (err, prefab) => {
            var _mainCamera;

            if (err) {
              return;
            }

            var ndTip = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.getNode(prefab, find("Canvas"));
            var pos = (_mainCamera = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).mainCamera) == null ? void 0 : _mainCamera.convertToUINode(scriptParent.node.worldPosition, find('Canvas'));
            pos.add(offset);
            ndTip.setPosition(pos);
            var scriptTip = ndTip.getComponent(_crd && FightTip === void 0 ? (_reportPossibleCrUseOfFightTip({
              error: Error()
            }), FightTip) : FightTip);
            scriptTip.show(scriptParent, type, bloodNum, callback);
          });
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c5545b1b899042780cf83fa8677eed64ab37805b.js.map