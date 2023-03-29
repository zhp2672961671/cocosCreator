System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Lodash, _decorator, AudioClip, StorageManager, ResourceUtil, _dec, _class, _class2, _crd, ccclass, property, AudioManager;

  function _reportPossibleCrUseOfLodash(extras) {
    _reporterNs.report("Lodash", "./lodash", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStorageManager(extras) {
    _reporterNs.report("StorageManager", "./storageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourceUtil(extras) {
    _reporterNs.report("ResourceUtil", "./resourceUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AudioClip = _cc.AudioClip;
    }, function (_unresolved_2) {
      Lodash = _unresolved_2.Lodash;
    }, function (_unresolved_3) {
      StorageManager = _unresolved_3.StorageManager;
    }, function (_unresolved_4) {
      ResourceUtil = _unresolved_4.ResourceUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e2ecZFEJFEHoCgx6lXVYHB", "audioManager", undefined);

      __checkObsolete__(['_decorator', 'AudioClip']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AudioManager", AudioManager = (_dec = ccclass("AudioManager"), _dec(_class = (_class2 = class AudioManager {
        constructor() {
          this.dictWeaponSoundIndex = {};
          this.musicVolume = 0.8;
          this.soundVolume = 1;
          this.audios = {};
          this.arrSound = [];
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new AudioManager();

          this._instance.init();

          return this._instance;
        }

        init() {
          this.musicVolume = this.getAudioSetting(true) ? 0.8 : 0;
          this.soundVolume = this.getAudioSetting(false) ? 1 : 0;
        }

        onAppShow() {
          for (var name in this.audios) {
            var audio = this.audios[name];

            if (audio.loop) {
              //属于无限循环的，则需要在wx环境下自己开启播放
              audio.clip.play();
            }
          }
        }

        getAudioSetting(isMusic) {
          var state;

          if (isMusic) {
            state = (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
              error: Error()
            }), StorageManager) : StorageManager).instance.getGlobalData('music');
          } else {
            state = (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
              error: Error()
            }), StorageManager) : StorageManager).instance.getGlobalData('sound');
          } // console.log('Config for [' + (isMusic ? 'Music' : 'Sound') + '] is ' + state);


          return !state || state === 'true' ? true : false;
        }
        /**
         * 播放音乐
         * @param {String} name 音乐名称可通过constants.AUDIO_MUSIC 获取
         * @param {Boolean} loop 是否循环播放
         */


        playMusic(name, loop) {
          var path = 'audio/music/' + name; //微信特殊处理，除一开场的音乐，其余的放在子包里头
          // if (name !== 'click') {
          //     path =  path; //微信特殊处理，除一开场的音乐，其余的放在子包里头
          // }

          (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
            error: Error()
          }), ResourceUtil) : ResourceUtil).loadRes(path, AudioClip, (err, clip) => {
            var tmp = {};
            tmp.clip = clip;
            tmp.loop = loop;
            tmp.isMusic = true;
            this.audios[name] = tmp;
            this.playClip(name, true);
          });
        }
        /**
         * 播放音效
         * @param {String} name 音效名称可通过constants.AUDIO_SOUND 获取
         * @param {Boolean} loop 是否循环播放
         */


        playSound(name, loop) {
          if (loop === void 0) {
            loop = false;
          }

          if (!this.soundVolume) {
            return;
          } //音效一般是多个的，不会只有一个


          var path = 'audio/sound/'; // if (name !== 'click') {
          //     path = path; //微信特殊处理，除一开场的音乐，其余的放在子包里头
          // }

          (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
            error: Error()
          }), ResourceUtil) : ResourceUtil).loadRes(path + name, AudioClip, (err, clip) => {
            var tmp = {};
            tmp.clip = clip;
            tmp.loop = loop;
            tmp.isMusic = false;
            this.arrSound.push(tmp);

            if (loop) {
              this.audios[name] = tmp;
              clip.setLoop(loop);
            }

            clip.setVolume(this.soundVolume);
            clip.playOneShot();
            clip.once('ended', () => {
              (_crd && Lodash === void 0 ? (_reportPossibleCrUseOfLodash({
                error: Error()
              }), Lodash) : Lodash).remove(this.arrSound, obj => {
                return obj.clip === tmp.clip;
              });
            });
          });
        }

        playClip(name, isMusic) {
          // console.log('playClip: ' + JSON.stringify(this.audios));
          var audio = this.audios[name]; // if (typeof audio.audioId === "number") {
          //     let state = cc.audioEngine.getState(audio.audioId);
          //     if (state === cc.audioEngine.AudioState.PLAYING && audio.loop) return;
          // }

          var volume = this.musicVolume;

          if (!isMusic) {
            volume = this.soundVolume;
          }

          var clip = audio.clip;
          clip.setVolume(volume);
          clip.setLoop(audio.loop);
          clip.play(); // let audioId = cc.audioEngine.play(audio.clip, audio.loop, volume);
          // audio.audioId = audioId;
        }

        stop(name) {
          if (this.audios.hasOwnProperty(name)) {
            var audio = this.audios[name];
            audio.clip.stop();
          }
        }

        stopAll() {
          for (var i in this.audios) {
            if (this.audios.hasOwnProperty(i)) {
              var audio = this.audios[i];
              audio.clip.stop();
            }
          }
        }

        setMusic(flag) {
          if (typeof flag !== "number") {
            flag = flag ? 1 : 0;
          }

          this.musicVolume = flag;

          for (var item in this.audios) {
            if (this.audios.hasOwnProperty(item) && this.audios[item].isMusic) {
              // this.changeState(item, flag);
              var audio = this.audios[item];
              audio.clip.setVolume(this.musicVolume);
            }
          }
        } //看广告时先将音乐暂停


        pauseAll() {
          console.log("pause all music!!!");

          for (var item in this.audios) {
            if (this.audios.hasOwnProperty(item)) {
              var audio = this.audios[item];
              audio.clip.pause();
            }
          }
        }

        resumeAll() {
          for (var item in this.audios) {
            if (this.audios.hasOwnProperty(item)) {
              var audio = this.audios[item];
              audio.clip.play();
            }
          }
        }

        openMusic() {
          this.setMusic(0.8);
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setGlobalData('music', 'true');
        }

        closeMusic() {
          this.setMusic(0);
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setGlobalData('music', 'false');
        }

        openSound() {
          this.setSound(1);
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setGlobalData('sound', 'true');
        }

        closeSound() {
          this.setSound(0);
          (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
            error: Error()
          }), StorageManager) : StorageManager).instance.setGlobalData('sound', 'false');
        }

        setSound(flag) {
          this.soundVolume = flag;

          for (var item in this.audios) {
            if (this.audios.hasOwnProperty(item) && !this.audios[item].isMusic) {
              // this.changeState(item, flag);
              var audio = this.audios[item];
              audio.clip.setVolume(this.soundVolume);
            }
          }

          for (var idx = 0; idx < this.arrSound.length; idx++) {
            var _audio = this.arrSound[idx];

            _audio.clip.setVolume(this.soundVolume);
          }
        }

        stopSingleSound(name) {
          if (this.audios.hasOwnProperty(name) && !this.audios[name].isMusic) {
            var audio = this.audios[name];
            audio.clip.stop();
          }
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cb39d2d9ce1778af99709aaef8bcb2987ca5cece.js.map