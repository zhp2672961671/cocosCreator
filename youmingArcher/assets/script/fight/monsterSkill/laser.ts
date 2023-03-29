import { EffectManager } from './../../framework/effectManager';
import { _decorator, Component } from 'cc';
import { Constant } from '../../framework/constant';
import { AudioManager } from '../../framework/audioManager';
const { ccclass, property } = _decorator;
//激光技能脚本
@ccclass('Laser')
export class Laser extends Component {
    public skillInfo: any = null!;//技能信息
    public baseInfo: any = null!;//基础信息
    public scriptWarning: any = null!;//预警技能脚本

    private timer: any = null!;//定时器

    start () {
        // [3]
    }

    public init (skillInfo: any, baseInfo: any, scriptParent?: any) {
        this.skillInfo = skillInfo;
        this.baseInfo = baseInfo;
        this.node.active = false;
        this._closeTimer();

        this.timer = setTimeout(()=>{
            if (!scriptParent.isDie) {
                AudioManager.instance.playSound(Constant.SOUND.LASER);  
                this.node.active = true;
                scriptParent?.scriptWarning?.hideWarning();
                EffectManager.instance.playParticle(this.node, skillInfo.flySpeed, true, null, ()=>{
                    this._closeTimer();
                });
            } else {
                this._closeTimer();
            }
        }, 400)
    }

    private _closeTimer () {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null!;
        }
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}