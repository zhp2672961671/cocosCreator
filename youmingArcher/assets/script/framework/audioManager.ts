import { Lodash } from './lodash';
import { _decorator, AudioClip } from "cc";
import { StorageManager } from "./storageManager";
import { ResourceUtil } from "./resourceUtil";
const { ccclass, property } = _decorator;
@ccclass("AudioManager")
export class AudioManager  {
    public dictWeaponSoundIndex: any = {};
    public musicVolume: number = 0.8;
    public soundVolume: number = 1;
    public audios: any = {};
    public arrSound: any = [];

    public static _instance: AudioManager;

    public static get instance () {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new AudioManager();
        this._instance.init();
        return this._instance;
    }

    public init () {
        this.musicVolume = this.getAudioSetting(true) ? 0.8: 0;
        this.soundVolume = this.getAudioSetting(false) ? 1 : 0;
    }

    public onAppShow () {
        for (let name in this.audios) {
            let audio = this.audios[name];
            if (audio.loop) {
                //属于无限循环的，则需要在wx环境下自己开启播放
                audio.clip.play();
            }
        }
    }

    public getAudioSetting (isMusic: boolean) {
        let state;
        if (isMusic) {
            state = StorageManager.instance.getGlobalData('music');
        } else {
            state = StorageManager.instance.getGlobalData('sound');
        }

        // console.log('Config for [' + (isMusic ? 'Music' : 'Sound') + '] is ' + state);

        return !state || state === 'true' ? true : false;
    }

    /**
     * 播放音乐
     * @param {String} name 音乐名称可通过constants.AUDIO_MUSIC 获取
     * @param {Boolean} loop 是否循环播放
     */
     public playMusic (name:string, loop: boolean) {
        let path = 'audio/music/' + name;
        //微信特殊处理，除一开场的音乐，其余的放在子包里头
        // if (name !== 'click') {
        //     path =  path; //微信特殊处理，除一开场的音乐，其余的放在子包里头
        // }
         
        ResourceUtil.loadRes(path, AudioClip, (err: any, clip: any)=> {
            let tmp = {} as any;
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
    public playSound (name:string, loop:boolean = false) {
        if (!this.soundVolume) {
            return;
        }

        //音效一般是多个的，不会只有一个
        let path = 'audio/sound/';
        // if (name !== 'click') {
        //     path = path; //微信特殊处理，除一开场的音乐，其余的放在子包里头
        // }

        ResourceUtil.loadRes(path + name, AudioClip, (err: any, clip: any)=> {
            let tmp = {} as any;
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

            clip.once('ended', ()=>{
                Lodash.remove(this.arrSound, (obj: any)=>{
                    return obj.clip === tmp.clip;
                });
            })
        });
    }

    public playClip (name: string, isMusic?: boolean) {
        // console.log('playClip: ' + JSON.stringify(this.audios));
        let audio = this.audios[name];
        // if (typeof audio.audioId === "number") {
        //     let state = cc.audioEngine.getState(audio.audioId);
        //     if (state === cc.audioEngine.AudioState.PLAYING && audio.loop) return;
        // }

        let volume = this.musicVolume;
        if (!isMusic) {
            volume = this.soundVolume;
        }

        let clip = audio.clip as AudioClip;
        clip.setVolume(volume);
        clip.setLoop(audio.loop);
        clip.play();
        // let audioId = cc.audioEngine.play(audio.clip, audio.loop, volume);
        // audio.audioId = audioId;
    }

    public stop (name: any) {
        if (this.audios.hasOwnProperty(name)) {
            let audio = this.audios[name];
            audio.clip.stop();
        }
    }

    public stopAll () {
        for (const i in this.audios) {
            if (this.audios.hasOwnProperty(i)) {
                let audio = this.audios[i];
                audio.clip.stop();
            }
        }
    }

    public setMusic (flag: any) {
        if (typeof flag !== "number") {
            flag = flag ? 1 : 0;
        }

        this.musicVolume = flag;
        for (let item in this.audios) {
            if (this.audios.hasOwnProperty(item) && this.audios[item].isMusic) {
                // this.changeState(item, flag);
                let audio = this.audios[item];
                audio.clip.setVolume(this.musicVolume);
            }
        }
    }

    //看广告时先将音乐暂停
    public pauseAll () {
        console.log("pause all music!!!");

        for (let item in this.audios) {
            if (this.audios.hasOwnProperty(item)) {
                let audio = this.audios[item];
                audio.clip.pause();
            }
        }
    }

    public resumeAll () {
        for (let item in this.audios) {
            if (this.audios.hasOwnProperty(item)) {
                let audio = this.audios[item];
                audio.clip.play();
            }
        }
    }

    public openMusic () {
        this.setMusic(0.8);
        StorageManager.instance.setGlobalData('music', 'true');
    }

    public closeMusic () {
        this.setMusic(0);
        StorageManager.instance.setGlobalData('music', 'false');
    }

    public openSound () {
        this.setSound(1);
        StorageManager.instance.setGlobalData('sound', 'true');
    }

    public closeSound () {
        this.setSound(0);
        StorageManager.instance.setGlobalData('sound', 'false');
    }

    public setSound (flag: any) {
        this.soundVolume = flag;
        for (let item in this.audios) {
            if (this.audios.hasOwnProperty(item) && !this.audios[item].isMusic) {
                // this.changeState(item, flag);
                let audio = this.audios[item];
                audio.clip.setVolume(this.soundVolume);
            }
        }

        for (let idx = 0; idx < this.arrSound.length; idx++) {
            let audio = this.arrSound[idx];
            audio.clip.setVolume(this.soundVolume);
        }
    }

    public stopSingleSound (name: string) {
        if (this.audios.hasOwnProperty(name) && !this.audios[name].isMusic) {
            let audio = this.audios[name];
            audio.clip.stop();
        }
    }
}
