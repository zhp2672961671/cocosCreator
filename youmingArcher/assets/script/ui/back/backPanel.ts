import { AudioManager } from './../../framework/audioManager';
import { UIManager } from './../../framework/uiManager';
import { _decorator, Component, Node } from 'cc';
import { Constant } from '../../framework/constant';
const { ccclass, property } = _decorator;
//返回界面提示脚本
@ccclass('BackPanel')
export class BackPanel extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    private _callback: Function = null!;

    start () {
        // [3]
    }

    public show (callback: Function) {
        this._callback = callback;
    }

    public onBtnYesClick () {
        AudioManager.instance.playSound(Constant.SOUND.CLICK);

        UIManager.instance.hideDialog("back/backPanel");
        this._callback && this._callback();
    }

    public onBtnNoClick () {
        UIManager.instance.hideDialog("back/backPanel");

        AudioManager.instance.playSound(Constant.SOUND.CLICK);
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
