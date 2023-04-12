/*
 * @Author: 章红平
 * @Date: 2023-04-12 15:23:59
 * @LastEditors: 章红平
 * @LastEditTime: 2023-04-12 17:21:09
 * @FilePath: \cocosCreator\designModeTs\adapter.ts
 * @Description: 描述 将一个类的接口转换成客户希望的另一个接口。适配器模式可以让原本不兼容的类可以一起工作。
 * 常见应用场景: 将一个旧的 API 转换为一个新的 API，或者在使用第三方库时将其接口转换为符合自己系统的接口。
 * 角色与分类
 * 角色：
 * Target（目标）：客户的目标接口，可以是一个抽象类或接口，也可以是具体类。
 * Adaptee（适配者）：被适配的角色，是一个已有接口，但不符合客户要求。
 * Adapter（适配器）：将已有接口转换成目标接口
 * 分类：
 * 类适配器模式
 * 对象适配器模式
 * 缺省适配器模式，也叫接口适配器模式
 */
 /**
  * 类适配器模式
  * Adapter 可以继承一个已有的 Adaptee，然后实现 Target。这种情况下只能有一个 Adaptee，且 Target 必须是接口。
  */
 export interface PowerTarget {
    output12V(): string;
}
class PowerAdaptee {
    output220V() {
        return '220V 交流电';
    }
}

const adapt = (input:String) => {
    // TODO 具体转换逻辑
    console.log(`${input} 被转换成 12V 直流电`);
    return '12V 直流电';
};
export class PowerAdapter extends PowerAdaptee implements PowerTarget {
    public output12V() {
        const input:String = this.output220V();
        console.log(`电源适配器开始工作，获取：${input}`);
        const output = adapt(input);
        console.log(`电源适配器工作完成，输出：${output}`);
        return output;
    }
}
 /**
  * 对象适配器模式
  * Adapter 可以关联个已有的 Adaptee，然后实现 Target。这种情况下你要依赖多个 Adaptee 实现也是 okay 的，Target 可以是接口也可以是抽象类甚至是类。
  *  不过这里因为是关联，所以改写关联对象的方法就很麻烦了，不像继承那么简单。
  */

 export class PowerAdapter1 implements PowerTarget {
    private powerAdaptee: PowerAdaptee;
    constructor() {
        this.powerAdaptee = new PowerAdaptee();
    }
    public output12V(): string {
        const input:String  = this.powerAdaptee.output220V();
        console.log(`电源适配器开始工作，获取：${input}`);
        const output = adapt(input);
        console.log(`电源适配器工作完成，输出：${output}`);
        return output;
    }
}

