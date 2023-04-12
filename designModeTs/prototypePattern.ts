/*
 * @Author: 章红平
 * @Date: 2023-04-12 09:54:39
 * @LastEditors: 章红平
 * @LastEditTime: 2023-04-12 11:18:42
 * @FilePath: \cocosCreator\designModeTs\prototypePattern.ts
 * @Description: 原型模式常常用于创建复杂的游戏对象，以及实现对象的复制和克隆。原型模式通过使用原型实例来创建新的对象，
 * 而不需要调用构造函数，从而提高了对象的创建效率。具体实现上，原型模式需要实现一个抽象的原型接口，以及一个具体的原型类，
 * 这个类实现了原型接口，并且包含一个克隆方法，用于复制自身。当需要创建新的对象时，只需要调用原型对象的克隆方法，
 * 就可以创建一个和原型对象相同的新对象。这样就可以避免重复创建对象，提高了程序的性能和效率
 * 优点:
 * 创建新的对象比较复杂时，可以利用原型模式简化对象的创建过程，同时也能够提高效率。
 * 不用重新初始化对象，而是动态地获得对象运行时的状态
 * 如果原始对象发生变化（增加或者减少属性），其它克隆对象也会发生相应的变化，无需修改代码。
 * 缺点:
 * 需要为每一个类配备一个克隆方法，这对全新的类来说不是很难，但对已有的类进行修改时，需要修改其源代码，违背了ocp原则。
 */
interface Prototype {
    clone():Prototype;
}
export class Dog implements Prototype {
    public name: string;
    public birthYear: number;
    public sex: string;
    public presentYear: number;
    constructor() {
        this.name = "lili";
        this.birthYear = 2015;
        this.sex = "男";
        this.presentYear = 2018;
    }
    public getDiscription(): string {
        return `狗狗叫${this.name},性别${this.sex},${this.presentYear}年${this.presentYear - this.birthYear}岁了`
    }

    // 实现复制
    public clone(): Dog {
        return Object.create(this);
    }
}
