import { AudioManager } from './framework/audioManager';
import { GameManager } from './fight/gameManager';
import { Constant } from './framework/constant';
import { _decorator, Component, game, Game, PhysicsSystem, profiler, sys, find } from 'cc';
import { PlayerData } from './framework/playerData';
import { StorageManager } from './framework/storageManager';
import { LocalConfig } from './framework/localConfig';
import { Util } from './framework/util';
import { SdkUtil } from './framework/sdkUtil';
import { UIManager } from './framework/uiManager';
//挂载到fight场景下的canvas节点
const { ccclass, property } = _decorator;

@ccclass('main')
export class main extends Component {
    private _minLoadDuration: number = 2;//加载开屏最小持续时间

    onEnable () {
    }

    onDisable () {
    }
    start() {
        let frameRate = StorageManager.instance.getGlobalData("frameRate");
        if (typeof frameRate !== "number") {
            frameRate = Constant.GAME_FRAME;
            //@ts-ignore
            if (window.wx && Util.checkIsLowPhone()) {
                frameRate = 30;
            }

            StorageManager.instance.setGlobalData("frameRate", frameRate);
        }
        console.log("###frameRate", frameRate);
        // 设置帧率
        game.frameRate = frameRate;
        // 获取或设置每步模拟消耗的固定时间（以 s 为单位）。
        PhysicsSystem.instance.fixedTimeStep = 1 / frameRate;

        let isDebugOpen = StorageManager.instance.getGlobalData("debug") ?? false;
        isDebugOpen === true ? profiler.showStats() : profiler.hideStats();

        // 加上用户id
        PlayerData.instance.loadGlobalCache();
        if (!PlayerData.instance.userId) {
            PlayerData.instance.generateRandomAccount();
            console.log("###生成随机userId", PlayerData.instance.userId);
        }
        // 处理用户数据
        PlayerData.instance.loadFromCache();
        if (!PlayerData.instance.playerInfo || !PlayerData.instance.playerInfo.createDate) {
            PlayerData.instance.createPlayerInfo();
        }
         //加载CSV相关配置
         LocalConfig.instance.loadConfig(()=>{
            SdkUtil.shareGame(Constant.GAME_NAME_CH, "");
            this._loadFinish();
        })



        //AudioManager.instance.init();
        AudioManager.instance.setMusic(0.3);
        game.on(Game.EVENT_HIDE, ()=>{
            if (!PlayerData.instance.settings) {
                PlayerData.instance.settings = {}
            }

            PlayerData.instance.settings.hideTime = Date.now();
            PlayerData.instance.saveAll();
            StorageManager.instance.save();
        })

    }
    private _loadFinish () {
        GameManager.isFirstLoad = true;

        this.scheduleOnce(()=>{
            UIManager.instance.showDialog("home/homePanel", [], ()=>{
                find("CanvasLogin")?.destroy();
                console.log("###开屏界面展示时长", Date.now() - Constant.LOGIN_TIME);
            });
        }, this._minLoadDuration)
    }

    update(deltaTime: number) {

    }
}


