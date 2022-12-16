import { _decorator, Node, Prefab, AnimationComponent, ParticleSystemComponent, Vec3, find, AnimationState, AnimationClip, isValid, director } from 'cc';
import { PoolManager } from './poolManager';
import { ResourceUtil } from './resourceUtil';
import { WarningCircle } from '../fight/warningSkill/warningCircle';
import { Reward } from '../fight/reward';
import { WarningStrip } from '../fight/warningSkill/warningStrip';
import { WarningLine } from '../fight/warningSkill/warningLine';

/**
 * Predefined variables
 * Name = EffectManager
 * DateTime = Mon Dec 06 2021 16:13:38 GMT+0800 (中国标准时间)
 * Author = yveda
 * FileBasename = effectManager.ts
 * FileBasenameNoExtension = effectManager
 * URL = db://assets/script/framework/effectManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

const { ccclass, property } = _decorator;
//特效管理脚本
@ccclass('EffectManager')
export class EffectManager {
    private _ndParent: Node = null!;

    private static _instance: EffectManager;

    public get ndParent() {
        if (!this._ndParent) {
            let ndEffectParent = find("effectManager") as Node;

            if (ndEffectParent) {
                this._ndParent = ndEffectParent;
            } else {
                // console.warn("请在场景里添加effectManager节点");
                this._ndParent = new Node("effectManager");
                director.getScene()?.addChild(this._ndParent);
            }
        }

        return this._ndParent;
    }

    public static get instance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new EffectManager();
        return this._instance;
    }

    /**
     * 重置特效节点状态
     * @param ndEffect 特效节点
     * @param aniName 动画名字
     * @returns
     */
    public resetEffectState (ndEffect: Node, aniName?: string) {
        if (!isValid(ndEffect)) {
            return;
        }

        let arrParticle: ParticleSystemComponent[] = ndEffect.getComponentsInChildren(ParticleSystemComponent);

        if (arrParticle.length) {
            arrParticle.forEach((element: ParticleSystemComponent) => {
                element?.stop();
                element?.clear();
            })
        }

        let arrAni: AnimationComponent[] = ndEffect.getComponentsInChildren(AnimationComponent);

        if (arrAni.length) {
            arrAni.forEach((element: AnimationComponent, idx: number) => {

                if (element.defaultClip && element.defaultClip.name) {
                    let aniState: any = null!;

                    if (aniName) {
                        aniState = element.getState(aniName);
                    }

                    if (!aniState) {
                        aniState = element.getState(element.defaultClip.name);
                    }

                    if (aniState) {
                        aniState.stop();
                        aniState.time = 0;
                        aniState.sample();
                    }
                }
            })
        }
    }

    /**
     * 加载特效节点并播放节点下面的动画、粒子
     *
     * @param {boolean} [isLocal=true] 是否将特效节点设置在本地坐标或者世界坐标下
     * @param {Node} ndTarget 特效所在节点
     * @param {string} effectPath 特效路径
     * @param {number} [scale=1] 缩放大小
     * @param {(Vec3 | null)} pos 坐标
     * @param {(Vec3 | null)} eulerAngles 角度
     * @param {boolean} [isPlayAnimation=true] 是否播放动画
     * @param {boolean} [isPlayParticle=true] 是否播放特效
     * @param {number} [speed=1] 播放速度
     * @param {boolean} [isRecycle=false] 是否回收
     * @param {number} [recycleTime=0] 回收时间
     * @param {(Function | null)} callback 回调函数
     * @returns
     * @memberof EffectManager
     */
    public loadAndPlayEffect (isLocal: boolean = true, ndTarget: Node, effectPath: string, scale: number = 1, pos: Vec3 | null, eulerAngles: Vec3 | null, isPlayAnimation: boolean = true, isPlayParticle: boolean = true, speed: number = 1, isRecycle: boolean = false, recycleTime?: number | null, callback?: Function | null) {

        //如果是本地坐标，父节点被回收的时候不播放
        if (isLocal && (!ndTarget || !ndTarget.parent)) {
            return;
        }

        ResourceUtil.loadEffectRes(effectPath).then((prefab: any) => {
            let ndParent: Node = isLocal ? ndTarget : this.ndParent;
            let ndEffect: Node = PoolManager.instance.getNode(prefab as Prefab, ndParent);

            if (isLocal) {
                ndEffect.setScale(scale, scale, scale);

                if (pos) {
                    ndEffect.setPosition(pos);
                }

                if (eulerAngles) {
                    ndEffect.eulerAngles = eulerAngles;
                }
            } else {
                ndEffect.setWorldScale(scale, scale, scale);

                if (pos) {
                    ndEffect.setWorldPosition(pos);
                }

                if (eulerAngles) {
                    ndEffect.setWorldRotationFromEuler(eulerAngles.x, eulerAngles.y, eulerAngles.z);
                }
            }

            this.playEffect(ndEffect, isPlayAnimation, isPlayParticle, speed, isRecycle, recycleTime, callback);
        })
    }

    /**
     * 播放节点下面的动画、粒子
     *
     * @param {Node} ndEffect 特效节点
     * @param {boolean} [isPlayAnimation=true] 是否播放动画
     * @param {boolean} [isPlayParticle=true] 是否播放特效
     * @param {number} [speed=1] 播放速度
     * @param {boolean} [isRecycle=false] 是否回收
     * @param {number} [recycleTime=0] 回收时间
     * @param {(Function | null)} callback 回调函数
     * @returns
     * @memberof EffectManager
     */
    public playEffect (ndEffect: Node, isPlayAnimation: boolean = true, isPlayParticle: boolean = true, speed: number = 1, isRecycle: boolean = false, recycleTime?: number | null, callback?: Function | null) {
        //特效最长持续时间
        let maxDuration: number = 0;

        if (isPlayAnimation) {
            let duration = this.playAnimation(ndEffect, speed, null, false, false, null, null);
            maxDuration = duration > maxDuration ? duration : maxDuration;

        }

        if (isPlayParticle) {
            let duration = this.playParticle(ndEffect, speed, false, null, null);
            maxDuration = duration > maxDuration ? duration : maxDuration;
        }

        maxDuration = recycleTime && recycleTime > 0 ? recycleTime : maxDuration;

        if (callback || isRecycle) {
            setTimeout(() => {
                if (ndEffect.parent) {
                    callback && callback();

                    if (isRecycle) {
                        PoolManager.instance.putNode(ndEffect);
                    } else {
                        ndEffect.destroy();
                    }
                }
            }, maxDuration * 1000)
        }
    }

    /**
     * 播放节点上的默认动画特效
     *
     * @param {Node} ndEffect 特效节点
     * @param {number} [speed=1] 动画播放速度
     * @param {(string | null)} animationName 动画名称（当节点下只有一个动画组件，并指定播放动画的时候才会使用这个参数，否则都使用默认动画）
     * @param {boolean} [isLoop=false] 是否循环播放
     * @param {boolean} [isRecycle=false] 是否回收
     * @param {(number | null)} recycleTime 回收时间,如果为null则使用maxDuration
     * @param {(Function | null)} callback 回调函数
     * @returns
     * @memberof EffectManager
     */
    public playAnimation (ndEffect: Node, speed: number = 1, animationName: string | null,  isLoop: boolean = false, isRecycle: boolean = false, recycleTime?: number | null, callback?: Function | null) {
        //动画播放最长时间
        let maxDuration: number = 0;
        let aniState: AnimationState = null!;

        if (!ndEffect.active) {
            ndEffect.active = true;
        }

        let arrAni: AnimationComponent[] = ndEffect.getComponentsInChildren(AnimationComponent);

        if (arrAni.length) {
            arrAni.forEach((element: AnimationComponent, idx: number) => {
                let aniName = animationName ? animationName : element?.defaultClip?.name;

                if (aniName) {
                    aniState = element.getState(aniName);
                    if (aniState) {
                        aniState.time = 0;
                        aniState.speed = speed;
                        aniState.sample();

                        let duration = aniState.duration;
                        maxDuration = duration > maxDuration ? duration : maxDuration;

                        if (isLoop) {
                            aniState.wrapMode = AnimationClip.WrapMode.Loop;
                        } else {
                            aniState.wrapMode = AnimationClip.WrapMode.Normal;
                        }

                        element?.play(aniName);
                    }
                }
            })

            maxDuration = recycleTime && recycleTime > 0 ? recycleTime : maxDuration;

            let cb = ()=>{
                if (ndEffect && ndEffect.parent) {
                    callback && callback();

                    if (isRecycle) {
                        PoolManager.instance.putNode(ndEffect);
                    }
                }
            }

            if (callback || isRecycle) {
                if (arrAni.length === 1) {
                    arrAni[0].once(AnimationComponent.EventType.FINISHED, ()=>{
                        cb();
                    })
                } else {
                    setTimeout(() => {
                        cb();
                    }, maxDuration * 1000)
                }
            }

            return maxDuration;
        } else {
            console.warn(`###${ndEffect.name}节点下没有动画特效`);
            return 0;
        }
    }

    /**
     * 播放节点上的粒子特效
     *
     * @param {Node} ndEffect 特效节点
     * @param {number} [speed=1] 粒子播放速度
     * @param {boolean} [isRecycle=false] 是否需要回收特效节点
     * @param {(number | null)} [recycleTime] 回收时间, 如果为null则使用maxDuration
     * @param {(Function | null)} [callback] 回调函数
     * @returns 返回播放完成所需秒数
     * @memberof EffectManager
     */
    public playParticle (ndEffect: Node, speed: number = 1, isRecycle: boolean = false, recycleTime?: number | null, callback?: Function | null) {
        //粒子播放最长时间
        let maxDuration: number = 0;

        if (!ndEffect.active) {
            ndEffect.active = true;
        }

        let arrParticle: ParticleSystemComponent[] = ndEffect.getComponentsInChildren(ParticleSystemComponent);

        if (arrParticle.length) {
            arrParticle.forEach((element: ParticleSystemComponent) => {
                element.simulationSpeed = speed;
                element?.clear();
                element?.stop();
                element?.play();

                let duration: number = element.duration;
                maxDuration = duration > maxDuration ? duration : maxDuration;
            })

            //使用传进来的回收时间，否则设置为时长最长
            maxDuration = recycleTime && recycleTime > 0 ? recycleTime : maxDuration;

            if (callback || isRecycle) {
                setTimeout(() => {
                    if (ndEffect && ndEffect.parent) {
                        callback && callback();

                        if (isRecycle) {
                            PoolManager.instance.putNode(ndEffect);
                        }
                    }
                }, maxDuration * 1000)
            }

            return maxDuration;
        } else {
            console.warn(`###${ndEffect.name}节点下没有粒子特效`);
            return 0;
        }
    }

    /**
     * 展示奖励(金币、爱心)弹跳
     *
     * @param {Node} ndMonster
     * @param {string} modelPath
     * @param {number} [rewardNum=1]
     * @param {Function} [callback=()=>{}]
     * @memberof EffectManager
     */
    public showRewardBounce (ndMonster: Node, modelPath: string, rewardNum: number = 1, callback: Function = ()=>{}) {
        let time = rewardNum <= 10 ? 0.15 : 0.07;
        ResourceUtil.loadModelRes(modelPath).then((pf: any)=>{
            for (let i = 0; i < rewardNum; i++) {
                let ndReward = PoolManager.instance.getNode(pf, this.ndParent) as Node;
                ndReward.setWorldPosition(ndMonster.worldPosition.x, 1.65, ndMonster.worldPosition.z);
                ndReward.active = false;
                let scriptReward = ndReward.getComponent(Reward) as Reward;
                scriptReward.init((i+1) * time, this.ndParent);
            }

            callback && callback();
        });
    }

    /**
     * 展示预警
     *
     * @param {string} warningName
     * @param {number} scale
     * @param {*} scriptParent
     * @memberof EffectManager
     */
    public showWarning (warningName: string, scale: number, scriptParent: any, callback?: Function) {
        ResourceUtil.loadEffectRes(`warning/${warningName}`).then((pf: any)=>{
            let ndWarning = PoolManager.instance.getNode(pf, this.ndParent) as Node;

            let scriptWarning: any = null;
            if (warningName === "warningLine") {
                scriptWarning = ndWarning.getComponent(WarningLine) as WarningLine;
            } else if (warningName === "warningStrip") {
                scriptWarning = ndWarning.getComponent(WarningStrip) as WarningStrip;
            } else if (warningName === "warningCircle") {
                scriptWarning = ndWarning.getComponent(WarningCircle) as WarningCircle;
            }

            scriptWarning.init(scale, scriptParent);

            scriptParent.scriptWarning = scriptWarning;

            callback && callback();
        });
    }

    /**
     * 展示闪电特效连接
     *
     * @param {Node} ndParent
     * @param {Node} ndTarget
     * @memberof EffectManager
     */
    public showLightningChain (ndParent: Node, ndTarget: Node) {
        ResourceUtil.loadEffectRes(`lightningChain/lightningChain`).then((pf: any)=>{
            let ndEffect = PoolManager.instance.getNode(pf, ndParent) as Node;
            ndEffect.setWorldPosition(ndParent.worldPosition.x, 2.3, ndParent.worldPosition.z);

            let offsetPos: Vec3 = new Vec3();

            Vec3.subtract(offsetPos, ndTarget.worldPosition, ndParent.worldPosition);
            ndEffect.setWorldScale(1, offsetPos.length(), 1);
            ndEffect.forward = offsetPos.normalize().negative();

            setTimeout(()=>{
                PoolManager.instance.putNode(ndEffect);
            }, 100)
        });
    }
}
