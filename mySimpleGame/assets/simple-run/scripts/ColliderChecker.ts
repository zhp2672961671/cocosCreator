import { _decorator, Component, Node, ColliderComponent, ITriggerEvent } from 'cc';
import { PlayerController } from './PlayerController';
const { ccclass, property } = _decorator;

@ccclass('ColliderChecker')
export class ColliderChecker extends Component {

    @property({type: PlayerController})
    public playerCtrl: PlayerController = null;
    start() {
        const collider = this.getComponent(ColliderComponent);
        // 碰撞监听
        collider.on('onTriggerEnter', this.onTriggerEnter, this);
    }
    onTriggerEnter(event: ITriggerEvent) {
        if (this.playerCtrl) {
            this.playerCtrl.onTriggerEnter(event);
        }
    }

    // update(deltaTime: number) {

    // }
}


