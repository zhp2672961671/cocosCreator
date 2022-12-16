import { _decorator, Component, game, Node, assetManager, director } from 'cc';
import { Constant } from './framework/constant';

//挂载到login场景下的canvas节点
const { ccclass, property } = _decorator;

@ccclass('Login')
export class Login extends Component {
    @property(Node)
    public ndCanvas: Node = null!;

    onEnable () {
    }

    onDisable () {
    }

    start () {
        console.log("login");
        // 添加常驻节点
        director.addPersistRootNode(this.ndCanvas);
        Constant.LOGIN_TIME = Date.now();

        let bundleRoot = ["resources", "main"];
        let arr: any = [];

        //微信优化开屏加载性能
        //@ts-ignore
        if (window.wx) {
            bundleRoot.forEach((item: string)=>{
                let p = new Promise((resolve, reject)=>{
                    assetManager.loadBundle(item, function (err, bundle) {
                        if (err) {
                          return reject(err);
                        }

                        resolve(bundle);
                    });
                })

                arr.push(p);
            })
            // 异步加载
            Promise.all(arr).then(()=>{
                director.loadScene("fight", ()=>{
                }, ()=>{

                })
            })
        } else {
            // 进入主场景
            director.loadScene("fight", (err)=>{
                console.log("loadScene========end")
                // this.ndCanvas.active=false;
                if(err)console.error(err)
            }, ()=>{

            })
        }
    }
}
