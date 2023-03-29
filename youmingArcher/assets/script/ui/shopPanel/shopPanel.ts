import { ShopItem } from './shopItem';
import { Util } from './../../framework/util';
import { UIManager } from './../../framework/uiManager';
import { Constant } from './../../framework/constant';
import { PlayerData } from './../../framework/playerData';
import { _decorator, Component, Node, SpriteComponent, LabelComponent } from 'cc';
import { LocalConfig } from '../../framework/localConfig';
import { AudioManager } from '../../framework/audioManager';

const { ccclass, property } = _decorator;
//商店脚本
@ccclass('ShopPanel')
export class ShopPanel extends Component {
    @property(Node)
    public ndSkills: Node = null!;

    @property(SpriteComponent)
    public spRefreshIcon: SpriteComponent = null!;

    private _callback: Function = null!;

    start () {
        // [3]
    }

    public show (callback?: Function) {
        this._callback = callback!;

        let arrLock: any = PlayerData.instance.getLockPlyerSkill();
        arrLock = Util.shuffle(arrLock);
        
        this.ndSkills.children.forEach((ndChild: Node, idx: number, arr: any)=>{
            if (arrLock[idx]) {
                let info: any = LocalConfig.instance.queryByID("playerSkill", arrLock[idx].ID);
                ndChild.active = true;
                let scriptItem = ndChild.getComponent(ShopItem) as ShopItem;
                scriptItem.init(info, ()=>{
                    this._close();
                });
            } else {
                ndChild.active = false;
            }
        })
    }

    public onBtnGiveUpClick () {
        AudioManager.instance.playSound(Constant.SOUND.CLICK);

        this._close();
    }

    public onBtnRefreshClick () {
        AudioManager.instance.playSound(Constant.SOUND.CLICK);
        this.show(this._callback);
    }

    private _close () {
        this._callback && this._callback();
        UIManager.instance.hideDialog("shop/shopPanel");
        UIManager.instance.showDialog("fight/fightPanel");
    }

    public onBtnCloseClick () {
        AudioManager.instance.playSound(Constant.SOUND.CLICK);

        this._close();
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
