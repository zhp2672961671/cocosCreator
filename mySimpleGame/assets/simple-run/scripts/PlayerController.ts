import { _decorator, Component, Node, Vec3, CCFloat,input, Input,SkeletalAnimationComponent, AudioClip, AudioSourceComponent, AnimationComponent, EventTouch, tween, ITriggerEvent } from 'cc';
const { ccclass, property } = _decorator;
import {GameDefines, GameState} from './GameDefines';
const tempVec3_a = new Vec3();

enum MoveAction {
    LEFT,
    RIGHT,
    UP,
}

enum MoveState {
    RUNNING,
    MOVING_LEFT,
    MOVING_RIGHT,
    JUMPING,
}
const cocosAnim = {
    idle: 'cocos_anim_idle',
    run: 'cocos_anim_run',
    jump: 'cocos_anim_jump',
}
@ccclass('PlayerController')
export class PlayerController extends Component {
    @property({type: CCFloat})
    public speed: number = 1;
// 骨骼动画组件
    @property({type: SkeletalAnimationComponent})
    public playerAnimComp: SkeletalAnimationComponent = null;
    @property({type: AudioClip})
    public coinAC: AudioClip = null;
    @property({type: AudioClip})
    public jumpAC: AudioClip = null;
    public onTriggerCoin: (coinNode: Node) => void;
    public onTriggerBlock: (roadBlockNode: Node) => void;

    private _pressedX = 0;
    private _pressedY = 0;

    private _moveState: MoveState = MoveState.RUNNING;
    private _gameState: GameState = GameState.INIT;

    private _audioSourceComp: AudioSourceComponent = null;
    start() {

        this._audioSourceComp = this.getComponent(AudioSourceComponent);
    }
    // 切换游戏状态
    onGameStateChanged(state: GameState) {
        switch(state) {
            case GameState.INIT:
                this.onGameInit();
                break;
            case GameState.PLAYING:
                this.onGamePlaying();
                break;
            case GameState.END:
                this.onGameEnd();
                break;
        }

        this._gameState = state;
    }
    // 游戏初始
    onGameInit() {
        // 播放动画
        this.playerAnimComp.play(cocosAnim.idle);
        // 设置位置
        this.node.setPosition(tempVec3_a.set(0, 0, 0));
    }
    // 开始游戏
    onGamePlaying() {
        // 切换状态位
        this._moveState = MoveState.RUNNING;
        // 播放跑步动画
        this.playerAnimComp.play(cocosAnim.run);
        const jumpState = this.playerAnimComp.getState(cocosAnim.jump);
        // 注册监听
        jumpState.on(AnimationComponent.EventType.FINISHED, this.onJumpEnd,this);
        input.on(Input.EventType.TOUCH_START, this.onViewTouchStart, this);
        input.on(Input.EventType.TOUCH_END, this.onViewTouchEnd, this);

    }
    // 游戏结束
    onGameEnd() {
        const jumpState = this.playerAnimComp.getState(cocosAnim.jump);
        jumpState.off(AnimationComponent.EventType.FINISHED, this.onJumpEnd, this);

        input.off(Input.EventType.TOUCH_START, this.onViewTouchStart, this);
        input.off(Input.EventType.TOUCH_END, this.onViewTouchEnd, this);
    }
    // 处理碰撞
    onTriggerEnter(event: ITriggerEvent) {
        console.log("onTriggerEnter====================")
        const triggerNode: Node = event.otherCollider.node;
        if (triggerNode.name === 'Coin') {
            this._audioSourceComp.playOneShot(this.coinAC);
            if (this.onTriggerCoin) {
                this.onTriggerCoin(triggerNode);
            }
        } else if (triggerNode.name === 'RoadBlock') {
            const animComp = triggerNode.getComponent(AnimationComponent);
            const downName = 'block_down';
            const state = animComp.getState(downName);
            if (!state.isPlaying) {
                animComp.play(downName);
            }
            if (this.onTriggerBlock) {
                this.onTriggerBlock(triggerNode);
            }
        }
    }
    // 跳跃动作结束
    onJumpEnd(type, state) {
        if (state?.name === cocosAnim.jump) {
            this.playerAnimComp.play(cocosAnim.run);
            this._moveState = MoveState.RUNNING;
        }
    }
    // 触摸开始
    onViewTouchStart(event: EventTouch) {
        let location = event.getLocation();// 获取节点坐标
        // 记录触摸开始位置
        this._pressedX = location.x;
        this._pressedY = location.y;
    }
    //触摸结束
    onViewTouchEnd(event: EventTouch) {
        let touchPoint = event.getLocation();
        let endX = this._pressedX - touchPoint.x;
        let endY = this._pressedY - touchPoint.y;

        if (Math.abs(endX) > Math.abs(endY)){
            //手势向左右
            //判断向左还是向右
            if (endX  > 0){
                // left
                this.move(MoveAction.LEFT);
            } else {
                // right
                this.move(MoveAction.RIGHT);
            }
        } else {
            //手势向上下
            //判断手势向上还是向下
            if (endY  > 0){
                // down
            } else {
                // up
                this.move(MoveAction.UP);
            }
         }
    }
    move(moveAction: MoveAction) {
        switch (moveAction) {
            case MoveAction.LEFT:
                if (this._moveState === MoveState.RUNNING) {
                    tween(this.node)
                        .by(0.5, {position: new Vec3(GameDefines.leftLineX, 0, 0)}, {onComplete: ()=> {
                            this._moveState = MoveState.RUNNING;
                        }})
                        .start();
                    this._moveState = MoveState.MOVING_LEFT;
                }
                break;
            case MoveAction.RIGHT:
                if (this._moveState === MoveState.RUNNING) {
                    tween(this.node)
                    .by(0.5, {position: new Vec3(GameDefines.rightLineX, 0, 0)}, {onComplete: ()=> {
                        this._moveState = MoveState.RUNNING;
                    }})
                    .start();
                    this._moveState = MoveState.MOVING_RIGHT;
                }
                break;
            case MoveAction.UP:
                if (this._moveState === MoveState.RUNNING) {
                    this._audioSourceComp.playOneShot(this.jumpAC);
                    this.playerAnimComp.crossFade(cocosAnim.jump);
                    const state = this.playerAnimComp.getState(cocosAnim.jump);
                    state.speed = 1.5;
                    tween(this.node)
                    .by(0.75, {position: new Vec3(0, 0, 10)}, {onComplete: ()=> {
                        // this._moveState = MoveState.RUNNING;
                    }})
                    .start();
                    this._moveState = MoveState.JUMPING;
                }
                break;
        }
    }



    update (deltaTime: number) {
        if (this._gameState === GameState.PLAYING) {
            if (this._moveState === MoveState.JUMPING) {
                // this.node.translate(tempVec3_a.set(0, 0, this.speed * 1.5 * deltaTime));
            } else {
                this.node.translate(tempVec3_a.set(0, 0, this.speed * deltaTime));
            }
        }
    }

    onDestroy() {
        input.off(Input.EventType.TOUCH_START, this.onViewTouchStart, this);
        input.off(Input.EventType.TOUCH_END, this.onViewTouchEnd, this);
    }

}


