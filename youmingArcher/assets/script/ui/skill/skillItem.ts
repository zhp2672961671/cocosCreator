import { _decorator, Component, SpriteComponent, LabelComponent } from 'cc';
import { GameManager } from '../../fight/gameManager';
import { AudioManager } from '../../framework/audioManager';
import { Constant } from '../../framework/constant';
import { EffectManager } from '../../framework/effectManager';
import { PlayerData } from '../../framework/playerData';
import { ResourceUtil } from '../../framework/resourceUtil';
const { ccclass, property } = _decorator;
//技能脚本
@ccclass('SkillItem')
export class SkillItem extends Component {
    @property(SpriteComponent)
    public spIcon: SpriteComponent = null!;
    
    @property(LabelComponent)
    public lbName: LabelComponent = null!;

    @property(LabelComponent)
    public lbDesc: LabelComponent = null!;

    private _callback: Function = null!;
    private _itemInfo: any = null!;

    start () {
        // [3]
    }

    public init (itemInfo: any, callback: Function) {
        this._itemInfo = itemInfo;
        this._callback = callback;

        this.lbName.string = itemInfo.name;
        this.lbDesc.string = itemInfo.desc;
        ResourceUtil.setSpriteFrame(`texture/skillIcon/${itemInfo.icon}`, this.spIcon, (err: any)=>{});
    }

    public onBtnItemClick () {
        AudioManager.instance.playSound(Constant.SOUND.GET_SKILL);

        this._callback && this._callback();
        PlayerData.instance.addPlayerSkill(this._itemInfo);

        EffectManager.instance.loadAndPlayEffect(true, GameManager.ndPlayer, "levelUp/levelUp", 1, null, null, false, true, GameManager.gameSpeed, true);
    }
}
