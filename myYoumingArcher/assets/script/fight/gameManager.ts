// import { EffectManager } from './../framework/effectManager';
import { ClientEvent } from './../framework/clientEvent';
import { PlayerData } from './../framework/playerData';
// import { Monster } from './monster';
import { UIManager } from './../framework/uiManager';
// import { MapManager } from './mapManager';
import { _decorator, Component, Node, CameraComponent, Vec3, SkeletalAnimationComponent, ParticleSystemComponent, AnimationComponent, find, Prefab } from 'cc';
import { GameCamera } from './gameCamera';
// import { Player } from './player';
import { ResourceUtil } from '../framework/resourceUtil';
import { Constant } from '../framework/constant';
import { LocalConfig } from '../framework/localConfig';
// import { Boss } from './boss';
import { AudioManager } from '../framework/audioManager';
import { Util } from '../framework/util';
// import { PoolManager } from '../framework/poolManager';
const { ccclass, property } = _decorator;
//游戏管理脚本
@ccclass('GameManager')
export class GameManager extends Component {
    @property(GameCamera)
    public camera: GameCamera = null!;//相机脚本

    // @property({type: MapManager})
    // public scriptMapManager: MapManager = null!;//地图脚本脚本

    @property(Node)
    public ndLight: Node = null!; //主光源

    public mapInfo: any = {};//地图信息

    public static mainCamera: CameraComponent | null = null;//相机脚本
    public static isGameStart: boolean = false;//游戏是否开始
    public static isGamePause: boolean = false;//游戏是否暂停
    public static isGameOver: boolean = false;//游戏是否结束
    // public static scriptPlayer: Player = null!;//玩家脚本
    public static scriptGameCamera: GameCamera;//相机脚本
    public static ndPlayer: Node = null!;//玩家节点
    public static ndBoss: Node = null!;//boss节点
    // public static scriptBoss: Boss = null!;//boss脚本
    public static ndGameManager: Node;//游戏全局管理节点
    public static ndEffectManager: Node = null!;//特效节点
    public static ndMapManager: Node = null!;//地图节点
    public static isRevive: boolean = false;//玩家是否复活
    public static isTesting: boolean = true;//是否开启测试代码
    public static isFirstLoad: boolean = false;//是否首次加载
    public static arrMonster: Node[] = []; //小怪、boss数组
    public static existentNum: number = 0;//本层加载的npc、大爱心现存数量（怪物不会和npc、大爱心同时出现，配置表格需注意）
    //本层敌人加成
    public static attackAddition: number = 1;//本层敌人攻击加成
    public static defenseAddition: number = 1;//本层敌人防御加成
    public static hpAddition: number = 1;//本层敌人生命加成
    public static moveSpeedAddition: number = 1;//本层敌人移速加成
    public static attackSpeedAddition: number = 1;//本层敌人攻速加成

    private _dictMonsterSkill: any = {};//已经预加载的敌人技能
    private _oriMainLightWorPos: Vec3 = null!;//主光源节点初始世界坐标
    private _offsetWorPosMainLight: Vec3 = new Vec3();//主光源和玩家的向量差

    private static _gameSpeed: number = 1;//游戏速度
    private static _isWin: boolean = false;//是否取得胜利


    public static set isWin(value: boolean) {
        this._isWin = value;

        if (GameManager.isGameStart) {
            ClientEvent.dispatchEvent(Constant.EVENT_TYPE.ON_GAME_OVER);
        }
    }

    public static get isWin() {
        return this._isWin;
    }
    public static set gameSpeed(value: number) {
        console.log("gameSpeed", GameManager.gameSpeed);

        this._gameSpeed = value;
        GameManager.refreshEffectSpeed(GameManager.ndGameManager, this._gameSpeed);
        GameManager.refreshEffectSpeed(GameManager.ndPlayer as Node, this._gameSpeed);
        GameManager.refreshEffectSpeed(GameManager.ndEffectManager as Node, this._gameSpeed);
    };

    public static get gameSpeed() {
        return this._gameSpeed;
    }

    onEnable() {
        // 游戏初始监听
        console.log("onstant.EVENT_TYPE.ON_GAME_INIT============================")
        ClientEvent.on(Constant.EVENT_TYPE.ON_GAME_INIT, this._onGameInit, this);
        return
        ClientEvent.on(Constant.EVENT_TYPE.ON_GAME_OVER, this._onGameOver, this);
        ClientEvent.on(Constant.EVENT_TYPE.ON_GAME_PAUSE, this._onGamePause, this);
        ClientEvent.on(Constant.EVENT_TYPE.REFRESH_LEVEL, this._refreshLevel, this);
        ClientEvent.on(Constant.EVENT_TYPE.RECYCLE_ALL, this._recycleAll, this);
    }

    onDisable() {
        ClientEvent.off(Constant.EVENT_TYPE.ON_GAME_INIT, this._onGameInit, this);
        return
        ClientEvent.off(Constant.EVENT_TYPE.ON_GAME_OVER, this._onGameOver, this);
        ClientEvent.off(Constant.EVENT_TYPE.ON_GAME_PAUSE, this._onGamePause, this);
        ClientEvent.off(Constant.EVENT_TYPE.REFRESH_LEVEL, this._refreshLevel, this);
        ClientEvent.off(Constant.EVENT_TYPE.RECYCLE_ALL, this._recycleAll, this);
    }

    start() {
        GameManager.mainCamera = this.camera?.getComponent(CameraComponent) as CameraComponent;
        GameManager.scriptGameCamera = this.camera?.getComponent(GameCamera) as GameCamera;
        GameManager.ndGameManager = this.node;
        GameManager.ndMapManager = find("mapManager") as Node;
        GameManager.ndEffectManager = find("effectManager") as Node;

        this._oriMainLightWorPos = this.ndLight.worldPosition.clone();
    }
    /**
 * 初始化游戏
 */
    private _onGameInit() {
        let level = PlayerData.instance.playerInfo.level;
        console.log("_onGameInit==================")
        // “getTableArr”获取表格数组
        let totalLevel = LocalConfig.instance.getTableArr("checkpoint").length;
        //游戏通关后从倒数第10关开始循环(61-70)
        if (level > totalLevel) {
            level = (totalLevel - 10) + (level - totalLevel) % 10;
        }
        // queryByID 通过id获取字典中一条
        this.mapInfo = LocalConfig.instance.queryByID("checkpoint", String(level));
        //设置本层敌人属性加成比例
        GameManager.attackAddition = this.mapInfo.attackAddition;
        GameManager.defenseAddition = this.mapInfo.defenseAddition;
        GameManager.hpAddition = this.mapInfo.hpAddition;
        GameManager.moveSpeedAddition = this.mapInfo.moveSpeedAddition;
        GameManager.attackSpeedAddition = this.mapInfo.attackSpeedAddition;

        ClientEvent.dispatchEvent(Constant.EVENT_TYPE.HIDE_WARP_GATE);

        GameManager.isGameStart = false;
        GameManager.isGamePause = false;
        GameManager.isGameOver = false;
        GameManager.isWin = false;
        GameManager.isRevive = false;
        GameManager.arrMonster = [];
        GameManager.gameSpeed = 1;
        GameManager.ndBoss = null!;
        GameManager.existentNum = 0;

        PlayerData.instance.addFightTimes();

        AudioManager.instance.pauseAll();
        UIManager.instance.showDialog("loading/loadingPanel", [() => {
            // this._refreshLevel();
        }]);
    }
    /**
* 刷新节点下的动画、粒子播放速度
* @param targetNode
* @param value
* @returns
*/
    public static refreshEffectSpeed(targetNode: Node, value: number) {
        if (!targetNode) {
            return;
        }
        let arrAni = targetNode.getComponentsInChildren(AnimationComponent);
        arrAni.forEach((item: AnimationComponent) => {
            item.clips.forEach((clip: any) => {
                let aniName = clip?.name as string
                let aniState = item.getState(aniName);
                aniState.speed = value;
            })
        })

        let arrSkeletalAni = targetNode.getComponentsInChildren(SkeletalAnimationComponent);
        arrSkeletalAni.forEach((item: SkeletalAnimationComponent) => {
            item.clips.forEach((clip: any) => {
                let aniName = clip?.name as string
                let aniState = item.getState(aniName);
                aniState.speed = value;
            })
        })

        let arrParticle = targetNode.getComponentsInChildren(ParticleSystemComponent);
        arrParticle.forEach((item: ParticleSystemComponent) => {
            item.simulationSpeed = value;
        })
    }
    update(deltaTime: number) {

    }
}


