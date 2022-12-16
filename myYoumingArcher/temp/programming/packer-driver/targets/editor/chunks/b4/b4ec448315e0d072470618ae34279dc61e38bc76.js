System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, find, isValid, Vec3, ResourceUtil, Constant, _dec, _class, _class2, _crd, ccclass, property, SHOW_STR_INTERVAL_TIME, v3_playerBloodOffsetPos, v3_playerBloodScale, v3_monsterBloodOffsetPos, v3_monsterBloodScale, UIManager;

  function _reportPossibleCrUseOfResourceUtil(extras) {
    _reporterNs.report("ResourceUtil", "./resourceUtil", _context.meta, extras);
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
      ResourceUtil = _unresolved_2.ResourceUtil;
    }, function (_unresolved_3) {
      Constant = _unresolved_3.Constant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "232c84ursBKcqHw4dA/hQl7", "uiManager", undefined);

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

          let panel = this._dictSharedPanel[panelPath];
          return isValid(panel) && panel.active && isValid(panel.parent);
        }
        /**
         * 显示单例界面
         * @param {String} panelPath
         * @param {Array} args
         * @param {Function} cb 回调函数，创建完毕后回调
         */


        showDialog(panelPath, args, cb, panelPriority = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
          error: Error()
        }), Constant) : Constant).PRIORITY.NORMAL) {
          if (this._dictLoading[panelPath]) {
            return;
          }

          let idxSplit = panelPath.lastIndexOf('/');
          let scriptName = panelPath.slice(idxSplit + 1);

          if (!args) {
            args = [];
          }

          if (this._dictSharedPanel.hasOwnProperty(panelPath)) {
            let panel = this._dictSharedPanel[panelPath];

            if (isValid(panel)) {
              panel.parent = find("Canvas");
              panel.active = true;
              let script = panel.getComponent(scriptName);
              let script2 = panel.getComponent(scriptName.charAt(0).toUpperCase() + scriptName.slice(1));

              if (script && script.show) {
                script.show.apply(script, args);
                cb && cb(script);
              } else if (script2 && script2.show) {
                script2.show.apply(script2, args);
                cb && cb(script2);
              } else {
                throw `查找不到脚本文件${scriptName}`;
              }

              return;
            }
          }

          this._dictLoading[panelPath] = true;
          (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
            error: Error()
          }), ResourceUtil) : ResourceUtil).createUI(panelPath, (err, node) => {
            //判断是否有可能在显示前已经被关掉了？
            let isCloseBeforeShow = false;

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
            let script = node.getComponent(scriptName);
            let script2 = node.getComponent(scriptName.charAt(0).toUpperCase() + scriptName.slice(1));

            if (script && script.show) {
              script.show.apply(script, args);
              cb && cb(script);
            } else if (script2 && script2.show) {
              script2.show.apply(script2, args);
              cb && cb(script2);
            } else {
              throw `查找不到脚本文件${scriptName}`;
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
            let panel = this._dictSharedPanel[panelPath];

            if (panel && isValid(panel)) {
              let ani = panel.getComponent('animationUI');

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
          let popupDialog = {
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
          let popupDialog = {
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
            let first = this._arrPopupDialog[0];

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


        showTips(content, type = 'txt', targetPos = new Vec3(), scale = 1, callback = () => {}) {
          let str = String(content);

          let next = () => {
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


        _showTipsAni(content, type, targetPos, scale, callback) {// ResourceUtil.getUIPrefabRes('common/tips', function (err: any, prefab: any) {
          //     if (err) {
          //         return;
          //     }
          //     let tipsNode = PoolManager.instance.getNode(prefab, find("Canvas") as Node);
          //     let tipScript = tipsNode.getComponent(tips) as tips;
          //     tipScript.show(content, type, targetPos, scale, callback);
          // });
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


        showPlayerBloodBar(scriptParent, totalBlood, curBlood, callback = () => {}, offsetPos = v3_playerBloodOffsetPos, scale = v3_playerBloodScale) {// ResourceUtil.getUIPrefabRes('fight/playerBloodBar', function (err: any, prefab: any) {
          //     if (err) {
          //         return;
          //     }
          //     let ndBloodBar = PoolManager.instance.getNode(prefab, find("Canvas") as Node) as Node;
          //     ndBloodBar.setSiblingIndex(0);
          //     let scriptBloodBar = ndBloodBar.getComponent(PlayerBloodBar) as PlayerBloodBar;
          //     scriptParent.scriptBloodBar = scriptBloodBar;
          //     scriptBloodBar.show(scriptParent, totalBlood, curBlood, offsetPos, scale, callback);
          // });
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


        showMonsterBloodBar(scriptParent, totalBlood, callback = () => {}, offsetPos = v3_monsterBloodOffsetPos, scale = v3_monsterBloodScale) {// ResourceUtil.getUIPrefabRes('fight/monsterBloodBar', function (err: any, prefab: any) {
          //     if (err) {
          //         return;
          //     }
          //     let ndBloodBar = PoolManager.instance.getNode(prefab, find("Canvas") as Node);
          //     let scriptBloodBar = ndBloodBar.getComponent(MonsterBloodBar) as MonsterBloodBar;
          //     scriptParent.scriptBloodBar = scriptBloodBar;
          //     scriptBloodBar.show(scriptParent, totalBlood, offsetPos, scale, callback);
          // });
        }
        /**
         * 展示血量提示
         */


        showBloodTips(scriptParent, type, bloodNum, offset, callback) {// ResourceUtil.getUIPrefabRes('common/fightTip',  (err: any, prefab: any)=> {
          //     if (err) {
          //         return;
          //     }
          //     let ndTip = <Node>PoolManager.instance.getNode(prefab,  <Node>find("Canvas"));
          //     let pos = GameManager.mainCamera?.convertToUINode(scriptParent.node.worldPosition, find('Canvas') as Node) as Vec3;
          //     pos.add(offset);
          //     ndTip.setPosition(pos);
          //     let scriptTip = ndTip.getComponent(FightTip) as FightTip;
          //     scriptTip.show(scriptParent, type, bloodNum, callback);
          // });
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b4ec448315e0d072470618ae34279dc61e38bc76.js.map