/*
 * @Author: 章红平
 * @Date: 2023-04-12 11:32:37
 * @LastEditors: 章红平
 * @LastEditTime: 2023-04-12 15:35:55
 * @FilePath: \cocosCreator\designModeTs\builder.ts
 * @Description: 描述
 *.建造者模式Q (Builder Pattern) 机制: 通过将一个复杂对象的构建过程分解为多个简单的步骤来构建对象。
 用途:使得对象的构建过程更加灵活，易于扩展。
 应用场景:在游戏开发中，可以使用建造者模式来构建游戏对象，例如游戏场景、游戏角色等，从而使得对象的构建更加灵活，易于扩展
 建造者模式的核心其实就是将具体的建造过程提取出来，进行封装。
 构建步骤封装在建造者，构建顺序封装在导演类。你可以一个导演类对应于一个建造者，也可以对应对个建造者，
 甚至你如果不用导演类，由客户端来选择构建顺序也是 okay 的。
 建造者模式和工厂模式的区别
 1 建造者模式更加注重方法的调用顺序，工厂模式注重创建对象
 2创建对象的力度不同，建造者创建复杂的对象，由各路复杂的部件组成，工厂模式创建出的对象都一样
 3关注点：工厂模式只需要把对象创建出来就可以，而建造者不仅要创建出这个对象，还要知道这个对象由哪些部件组成
 4建造者模式根据建造过程中的顺序不一样，最终的对象部件组成也不一样
 */
class Hamburg {
    name: string;
    // 可选参数也可以使用 set，但是 ts 中直接在这里声明更方便, 当然如果是 private，需要使用 set 来封装
    meatType?: string;
    vegetableType?: string;
    private breadNum?: number;

    constructor(name: string) { // 如果我们不用建造者模式，那么产品类的 constructor 这里将要传入所有参数
        this.name = name; // 必选参数可以放在这里，步骤具体实现可变的就抽出来
    }

    // 利用 ts 的 set 当然也是 okay 的，比如 set num(num){ this.breadNum = num; }
    setBreadNum(num: number) {
        this.breadNum = num;
    }
}
// 原本放在产品类的构建步骤被转移到了建造者类，由具体的建造者实现
abstract class HamburgBuilder {
    abstract buildBread(breadNum: number): void;
    abstract buildMeat(meatType: string): void;
    abstract buildVegetable(vegetableTYpe: string): void;
    abstract createHamburg(): Hamburg;
}
export class BeefHamburgBuilder extends HamburgBuilder {
    // 这里如果可以确定 name，就不需要用户再传入了
    private hamburg: Hamburg = new Hamburg('牛肉汉堡');

    buildBread(breadNum: number): void {
        console.log(`制作牛肉汉堡需要的 ${breadNum} 片面包`);
        this.hamburg.setBreadNum(breadNum);
    }

    buildMeat(meatType: string): void {
        console.log(`制作牛肉汉堡需要的 ${meatType}`);
        this.hamburg.meatType = meatType;
    }

    buildVegetable(vegetableType: string): void {
        console.log(`制作牛肉汉堡需要的 ${vegetableType}`);
        this.hamburg.vegetableType = vegetableType;
    }

    createHamburg(): Hamburg {
        return this.hamburg;
    }
}
export class PorkHamburgBuilder extends HamburgBuilder {
    private hamburg: Hamburg = new Hamburg('猪肉汉堡');

    buildBread(breadNum: number): void {
        console.log(`制作猪肉汉堡需要的 ${breadNum} 片面包`);
        this.hamburg.setBreadNum(breadNum);
    }

    buildMeat(meatType: string): void {
        console.log(`制作猪肉汉堡需要的 ${meatType}`);
        this.hamburg.meatType = meatType;
    }

    buildVegetable(vegetableType: string): void {
        console.log(`制作猪肉汉堡需要的 ${vegetableType}`);
        this.hamburg.vegetableType = vegetableType;
    }

    createHamburg(): Hamburg {
        return this.hamburg;
    }
}
// 我们用 director 来封装顺序，如果要改变工序，只要新增一个 director 或者新增一个 construct 即可
export class HamburgDirector {
    // 顺序1，包含三道工序
    static construct1(builder: HamburgBuilder, breadNum: number, meatType: string, vegetableType: string): Hamburg {
        builder.buildBread(breadNum);
        builder.buildMeat(meatType);
        builder.buildVegetable(vegetableType);
        return builder.createHamburg();
    }

    // 顺序2，包含两道工序
    static construct2(builder: HamburgBuilder, breadNum: number, meatType: string): Hamburg {
        builder.buildMeat(meatType);
        builder.buildBread(breadNum);
        return builder.createHamburg();
    }
}

/*
 * 改进构造调用
 * 目前导演类在调用建造者进行建造时，建造步骤如果一多会显得不清晰。使用链式调用方法来进行优化。
 */
// 原本放在产品类的构建步骤被转移到了建造者类，由具体的建造者实现
abstract class HamburgBuilder1 {
    abstract buildBread(breadNum: number): HamburgBuilder1;
    abstract buildMeat(meatType: string): HamburgBuilder1;
    abstract buildVegetable(vegetableTYpe: string): HamburgBuilder1;
    abstract createHamburg(): Hamburg;
}
export class BeefHamburgBuilder1 extends HamburgBuilder1 {
    // 这里如果可以确定 name，就不需要用户再传入了
    private hamburg: Hamburg = new Hamburg('牛肉汉堡');

    buildBread(breadNum: number): HamburgBuilder1 {
        console.log(`制作牛肉汉堡需要的 ${breadNum} 片面包`);
        this.hamburg.setBreadNum(breadNum);
        return this;
    }

    buildMeat(meatType: string): HamburgBuilder1 {
        console.log(`制作牛肉汉堡需要的 ${meatType}`);
        this.hamburg.meatType = meatType;
        return this;
    }

    buildVegetable(vegetableType: string): HamburgBuilder1 {
        console.log(`制作牛肉汉堡需要的 ${vegetableType}`);
        this.hamburg.vegetableType = vegetableType;
        return this;
    }

    createHamburg(): Hamburg {
        return this.hamburg;
    }
}
export class PorkHamburgBuilder1 extends HamburgBuilder1 {
    private hamburg: Hamburg = new Hamburg('猪肉汉堡');

    buildBread(breadNum: number): HamburgBuilder1 {
        console.log(`制作猪肉汉堡需要的 ${breadNum} 片面包`);
        this.hamburg.setBreadNum(breadNum);
        return this;
    }

    buildMeat(meatType: string): HamburgBuilder1 {
        console.log(`制作猪肉汉堡需要的 ${meatType}`);
        this.hamburg.meatType = meatType;
        return this;
    }

    buildVegetable(vegetableType: string): HamburgBuilder1 {
        console.log(`制作猪肉汉堡需要的 ${vegetableType}`);
        this.hamburg.vegetableType = vegetableType;
        return this;
    }

    createHamburg(): Hamburg {
        return this.hamburg;
    }
}
// 我们用 director 来封装顺序，如果要改变工序，只要新增一个 director 或者新增一个 construct 即可
export class HamburgDirector1 {
    // 顺序1，包含三道工序
    static construct1(builder: HamburgBuilder1, breadNum: number, meatType: string, vegetableType: string): Hamburg {
        return builder.buildBread(breadNum)
            .buildMeat(meatType)
            .buildVegetable(vegetableType)
            .createHamburg();
    }

    // 顺序2，包含两道工序
    static construct2(builder: HamburgBuilder1, breadNum: number, meatType: string): Hamburg {
        return builder.buildMeat(meatType)
            .buildBread(breadNum)
            .createHamburg();
    }
}