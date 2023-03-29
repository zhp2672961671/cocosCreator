import { Constant } from './../../framework/constant';
import { _decorator, Component, Node, tween, Prefab } from 'cc';
import { EffectManager } from '../../framework/effectManager';
import { ResourceUtil } from '../../framework/resourceUtil';
import { AudioManager } from '../../framework/audioManager';
import { PoolManager } from '../../framework/poolManager';
import { GameManager } from '../gameManager';
const { ccclass, property } = _decorator;
//大火球脚本: 炸开的时候才有伤害，跟小火球一样
@ccclass('FireBallBig')
export class FireBallBig extends Component {
    public scriptWarning: any = null!;//预警技能脚本
    public isPlayHitFireBall: boolean = false;//是否开始播放爆炸特效
    public skillInfo: any = null!;//技能信息
    public baseInfo: any = null!;//敌人基本信息

    start () {
        // [3]
    }

    public init (skillInfo: any, baseInfo: any, scriptParent?: any) {
        this.skillInfo = skillInfo;
        this.baseInfo = baseInfo;
        this.isPlayHitFireBall = false;

        let playerWorPos = scriptParent.attackPos;
        this.node.setWorldPosition(playerWorPos.x, 23, playerWorPos.z);

        this.node.children.forEach((ndChild: Node)=>{
            ndChild.active = true;
        })

        EffectManager.instance.playParticle(this.node);

        tween(this.node)
        .to(1 / skillInfo.flySpeed, {position: playerWorPos}, {easing: "elasticIn"})
        .call(()=>{
            AudioManager.instance.playSound(Constant.SOUND.FIRE_BALL_BIG);  

            this.isPlayHitFireBall = true;
            //关闭预警
            scriptParent?.scriptWarning?.hideWarning();

            this.node.children.forEach((ndChild: Node)=>{
                ndChild.active = false;
            })

            // console.log("大火球碰到地面");

            ResourceUtil.loadEffectRes("hit/hitFireBall2").then((prefab: any)=>{
                let ndEffect: Node = PoolManager.instance.getNode(prefab as Prefab, this.node) as Node;
                ndEffect.setWorldPosition(this.node.worldPosition);  

                EffectManager.instance.playParticle(ndEffect, GameManager.gameSpeed, true, 1.1, ()=>{
                    PoolManager.instance.putNode(ndEffect);
                    PoolManager.instance.putNode(this.node);
                });
            })
        })
        .start()
    }
}