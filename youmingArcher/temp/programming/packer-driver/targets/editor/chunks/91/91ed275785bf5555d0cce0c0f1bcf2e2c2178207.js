System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, PlayerData, StorageManager, SdkUtil, _crd;

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "./playerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStorageManager(extras) {
    _reporterNs.report("StorageManager", "./storageManager", _context.meta, extras);
  }

  _export("SdkUtil", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      PlayerData = _unresolved_2.PlayerData;
    }, function (_unresolved_3) {
      StorageManager = _unresolved_3.StorageManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a8753/f8aJIM6kpa2WkESB8", "sdkUtil", undefined);

      __checkObsolete__(['_decorator', 'SpriteFrame', 'sys']);

      //管理广告、分享、SDK相关内容的组件
      _export("SdkUtil", SdkUtil = class SdkUtil {
        //平台
        //登录后会检查是否展示登录界面，而且只检查一次
        //是否正在播放广告
        //是否允许屏幕上下移动
        //是否允许屏幕缩放
        //未解锁日记
        //两次震动之间的间隔,AppActivity里面的震动间隔也是100
        //上次震动时间

        /**
           * 自定义事件统计
           *
           * @param {string} eventType
           * @param {object} objParams
           */
        static customEventStatistics(eventType, objParams) {
          eventType = eventType.toString();

          if (!objParams) {
            objParams = {};
          } // console.log({'eventType': eventType},{'objParams': objParams});


          objParams.isNewBee = (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData).instance.isNewBee;

          if (this.platform === 'wx') {
            //@ts-ignore
            if (window['wx'] && window['wx']['aldSendEvent']) {
              //@ts-ignore
              window.wx['aldSendEvent'](eventType, objParams);
            }
          } //@ts-ignore


          if (this.platform === 'cocos' && window.cocosAnalytics && window.cocosAnalytics.isInited()) {
            console.log("###统计", eventType, objParams); //@ts-ignore

            window.cocosAnalytics.CACustomEvent.onStarted(eventType, objParams);
          }
        }
        /**
         * 调用震动
         */


        static vibrateShort() {
          var _instance$getGlobalDa;

          let isEnableVibrate = (_instance$getGlobalDa = (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.getGlobalData("vibration")) != null ? _instance$getGlobalDa : true;

          if (isEnableVibrate) {
            let now = Date.now();

            if (now - this.vibratePreTime >= this.vibrateInterval) {
              if (sys.isNative) {
                jsb.reflection.callStaticMethod("com/cocos/game/AppActivity", "vibrator", "()V"); //@ts-ignore
              } else if (window.wx) {
                //@ts-ignore
                wx.vibrateShort({
                  success: result => {},
                  fail: () => {},
                  complete: () => {}
                });
              }

              this.vibratePreTime = now;
            }
          }
        }
        /**
         * 微信分享
         * 
         * @static
         * @param {string} title
         * @param {string} imageUrl
         * @returns
         * @memberof SdkUtil
         */


        static shareGame(title, imageUrl) {
          //@ts-ignore
          if (!window.wx) {
            return;
          } //@ts-ignore


          wx.showShareMenu({
            withShareTicket: true,
            complete: () => {}
          }); //@ts-ignore

          if (wx.aldOnShareAppMessage) {
            //@ts-ignore
            wx.aldOnShareAppMessage(function () {
              // 用户点击了“转发”按钮
              return {
                title: title,
                imageUrl: imageUrl
              };
            });
          } else {
            //@ts-ignore
            wx.onShareAppMessage(function () {
              // 用户点击了“转发”按钮
              return {
                title: title,
                imageUrl: imageUrl
              };
            });
          }
        }

      });

      SdkUtil.platform = 'cocos';
      SdkUtil.imgAd = null;
      SdkUtil.imgShare = null;
      SdkUtil.isDebugMode = false;
      SdkUtil.onlineInterval = -1;
      SdkUtil.isEnableVibrate = true;
      SdkUtil.isCheckOffline = false;
      SdkUtil.isWatchVideoAd = false;
      SdkUtil.isEnableMoving = false;
      SdkUtil.isEnableZoom = false;
      SdkUtil.arrLockDiary = [];
      SdkUtil.vibrateInterval = 100;
      SdkUtil.vibratePreTime = 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=91ed275785bf5555d0cce0c0f1bcf2e2c2178207.js.map