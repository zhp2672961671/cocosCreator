import { ClientEvent } from './../../framework/clientEvent';
import { Constant } from './../../framework/constant';
import { GameManager } from './../../fight/gameManager';
import { UIManager } from './../../framework/uiManager';
import { SkillList } from './skillList';
import { _decorator, Component, Node, SpriteComponent, LabelComponent, SpriteFrame } from 'cc';
import { AudioManager } from '../../framework/audioManager';
import { ResourceUtil } from '../../framework/resourceUtil';
import { PlayerData } from '../../framework/playerData';
const { ccclass, property } = _decorator;
//暂停界面脚本
@ccclass('PausePanel')
export class PausePanel extends Component {
    @property(SpriteComponent)
    public spSkillIcon: SpriteComponent = null!;

    @property(LabelComponent)
    public lbSkillName: LabelComponent = null!;

    @property(LabelComponent)
    public lbSkillDesc: LabelComponent = null!;

    @property(Node)
    public ndSkillList: Node = null!;

    @property(SpriteFrame)
    public sfMusicOn: SpriteFrame = null!;

    @property(SpriteFrame)
    public sfMusicOff: SpriteFrame = null!;

    @property(SpriteComponent)
    public spBtnSound: SpriteComponent = null!;

    @property(Node)
    public ndSkillItem: Node = null!;

    private _isMusicOpen: boolean = false;

    start () {
        // [3]
    }

    show () {
        let arrSkill = PlayerData.instance.playerInfo.arrSkill;
        if (!arrSkill.length) {
            this.ndSkillItem.active = false;
            this.ndSkillList.active = false;
        } else {
            this.ndSkillItem.active = true;
            this.ndSkillList.active = true;

            let scriptSkillList = this.ndSkillList.getComponent(SkillList) as SkillList;

            scriptSkillList.init((itemInfo: any)=>{
                this.lbSkillName.string = itemInfo.name;
                this.lbSkillDesc.string = itemInfo.desc;
                ResourceUtil.setSpriteFrame(`texture/skillIcon/${itemInfo.icon}`, this.spSkillIcon, (err: any)=>{});
            });
        }

        this._isMusicOpen = AudioManager.instance.getAudioSetting(true);
        this.changeState();
    }

    public changeState () {
        if (this._isMusicOpen) {
            this.spBtnSound.spriteFrame = this.sfMusicOn;
        } else {
            this.spBtnSound.spriteFrame = this.sfMusicOff;
        }
    }

    public onBtnSoundClick () {
        AudioManager.instance.playSound(Constant.SOUND.CLICK);

        this._isMusicOpen = !this._isMusicOpen;
        this.changeState();

        if (this._isMusicOpen) {
            AudioManager.instance.openMusic();
            AudioManager.instance.openSound();
        } else {
            AudioManager.instance.closeMusic();
            AudioManager.instance.closeSound();
        }
    }

    public onBtnHomeClick () {
        AudioManager.instance.playSound(Constant.SOUND.CLICK);

        UIManager.instance.showDialog("back/backPanel", [()=>{
            UIManager.instance.hideDialog("fight/fightPanel");
            UIManager.instance.hideDialog("pause/pausePanel");
            GameManager.isGameOver = true;
            ClientEvent.dispatchEvent(Constant.EVENT_TYPE.RECYCLE_ALL);
            UIManager.instance.showDialog("home/homePanel");
        }], ()=>{}, Constant.PRIORITY.WAITING);
    }

    public onBtnPlayClick () {
        AudioManager.instance.playSound(Constant.SOUND.CLICK);

        UIManager.instance.hideDialog("pause/pausePanel");
        GameManager.isGamePause = false;
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
