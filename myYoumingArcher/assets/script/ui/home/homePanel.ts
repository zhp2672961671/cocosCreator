import { UIManager } from './../../framework/uiManager';
import { PlayerData } from './../../framework/playerData';
import { _decorator, Component, LabelComponent, SpriteComponent } from 'cc';
import { ClientEvent } from '../../framework/clientEvent';
import { Constant } from '../../framework/constant';
import { AudioManager } from '../../framework/audioManager';
const { ccclass, property } = _decorator;

@ccclass('homePanel')
export class homePanel extends Component {
    @property(SpriteComponent)
    public spLevelName: SpriteComponent = null!;

    @property(LabelComponent)
    public lbLevel: LabelComponent = null!;

    private _callback: Function = null!;
    show (callback?: Function) {
        this._callback = callback!;
        //已经解锁的最高层级
        this.lbLevel.string = `${PlayerData.instance.playerInfo.highestLevel}层`;
    }
    onBtnSettingClick () {
        AudioManager.instance.playSound(Constant.SOUND.CLICK);

        UIManager.instance.showDialog("setting/settingPanel", [], ()=>{}, Constant.PRIORITY.DIALOG);
    }

    onBtnStartClick () {
        AudioManager.instance.playSound(Constant.SOUND.HOME_PANEL_CLICK);

        UIManager.instance.hideDialog("home/homePanel");

        // if (this._callback) {
        //     this._callback();
        // } else {
            ClientEvent.dispatchEvent(Constant.EVENT_TYPE.ON_GAME_INIT);
        // }
    }

    start() {

    }

    update(deltaTime: number) {

    }
}


