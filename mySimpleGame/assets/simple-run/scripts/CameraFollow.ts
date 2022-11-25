import { _decorator, Component, Node, Vec3, CCFloat } from 'cc';
const { ccclass, property } = _decorator;

let v3_a = new Vec3();
let v3_b = new Vec3();

@ccclass('CameraFollow')
export class CameraFollow extends Component {
    @property({type: Node})
    public target: Node = null;
    @property({type: CCFloat})
    public smoothSpeed: number = 0.125;
    @property(Vec3)
    public offset: Vec3 = new Vec3();
    @property(Vec3)
    public lookAtOffset: Vec3 = new Vec3();
    start() {

    }
    lateUpdate (deltaTime: number) {
        // Your update function goes here.
        // 获取世界坐标
        this.target.getWorldPosition(v3_a);
        Vec3.add(v3_b, v3_a, this.offset);
        // 逐元素向量线性插值： A + t * (B - A)
        Vec3.lerp(v3_b, this.node.position, v3_b, this.smoothSpeed);
        this.node.setWorldPosition(v3_b);

        Vec3.add(v3_a, v3_a, this.lookAtOffset);
        this.node.lookAt(v3_a);
    }

    update(deltaTime: number) {

    }
}


