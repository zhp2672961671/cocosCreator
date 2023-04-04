/*
 * @Author: 章红平
 * @Date: 2023-04-03 15:32:44
 * @LastEditors: 章红平
 * @LastEditTime: 2023-04-03 18:29:48
 * @FilePath: \cocosCreator\designModeTs\factory.ts
 * @Description:工厂模式(Factory Pattern): 将对象的创建与使用分离，让客户端通过一个工厂类来创建所需的对象。
 * 在游戏中，工厂模式常用于创建各种游戏对象，例如敌人、道具、场景元素等。常见应用场景: 游戏中的物品生成器、NPC生成器等。
 * 分为：简单工厂模式，工厂方法模式，抽象工厂模式
 * https://zhuanlan.zhihu.com/p/370659909
 */

/**
 * 简单工厂模式
 * @description: 通常在业务比较简单的情况下使用，它有三个部分组成：工厂类、抽象产品类、具体产品类。
 */
/**
 * 抽象产品类Pizza
 * 以abstract开头的类是抽象类
 * 抽象类和其他类区别不大，只是不能用来创建对象
 * 抽象类就是专门用来被继承的类
 * 抽象类中可以添加抽象方法抽象方法只能定义抽象类中，子类必须对抽象方法进行重写
 */
abstract class Pizza {
    public abstract show(): void;
    public abstract cut(): void;
}
/**
 * 具体产品类KFCPizza MCPizza
 */
export class KFCPizza extends Pizza {
    public show(): void {
        console.log('This is KFCPizza!');
    }
    public cut(): void {
        console.log('Cut KFCPizza!');
    }
}

export class MCPizza extends Pizza {
    public show(): void {
        console.log('This is MCPizza!');
    }
    public cut(): void {
        console.log('Cut MCPizza!');
    }
}
/**
* 工厂类
*/
export class PizzaFactory {
    /**
     * 静态工厂方法
     * @param pizzaType 限制传入的参数为类，而非类的实例
     */
    public static createPizza(pizzaType: new () => Pizza): Pizza {
        // new () => Pizza 意为约束未知类的实例类型为Pizza ，
        // 此处 new 关键字 有类似typeof 查找类型的作用。
        //@ts-ignore
        let pizza: Pizza = null;
        try {
            pizza = new pizzaType();
        } catch (e) {
            console.error('Create failed!');
        }

        return pizza;
    }
}
/**
 * 工厂方法模式
 * @description: 正常情况下，简单工厂模式每次增加新的产品都需要在工厂类中增加对应的逻辑，
 * 这样就违背了开闭原则（但因为ts和我举的例子的原因体现不出这个缺点）。工厂方法模式就解决了这个问题，
 * 同时它能更好的解决复杂的业务环境。
 * 工厂方法模式具有四个部分：抽象工厂类、具体工厂类、抽象产品类、具体产品类。
 */
/**
 * 抽象工厂类
 */
export abstract class PizzaFactory2 {
    public abstract createPizza(): Pizza;
}
/**
 * 具体工厂类
 */
export class KFCPizzaFactory extends PizzaFactory2 {
    public createPizza(): Pizza {
        //@ts-ignore
        let pizza: Pizza = null;
        try {
            return new KFCPizza();
        } catch (error) {
            console.log(error);
            return pizza
        }
    }
}

export class MCPizzaFactory extends PizzaFactory2 {
    public createPizza(): Pizza {
        //@ts-ignore
        let pizza: Pizza = null;
        try {
            return new MCPizza();
        } catch (error) {
            console.log(error);
            return pizza
        }
    }
}
/**
 * 工厂方法模式
 * @description: 产品等级结构
 *产品等级结构即产品的继承结构，例如抽象的披萨类和具体某品牌的披萨类之间就构成了一个产品等级结构。
 *产品族
 *位于不同产品等级结构中的一组产品，功能相关联的产品组成的家族，如KFC水果披萨、MC水果披萨都是水果披萨，就可以放到同一个产品族中。
 * 抽象工厂模式具有和工厂方法模式一样的四个部分：抽象工厂类、具体工厂类、抽象产品类、具体产品类。
 */
/**
 * 抽象产品类
 */
// KFC产品父类
abstract class KFCPizza2 {
    public abstract show(): void;
    public abstract cut(): void;
}

// MC产品父类
abstract class MCPizza2 {
    public abstract show(): void;
    public abstract cut(): void;
}
/**
* 具体产品类
*/
// 具体KFCPizza类
export class KFCFruitPizza extends KFCPizza2 {
    public show(): void {
        console.log('This is KFCFruitPizza!');
    }
    public cut(): void {
        console.log('Cut KFCFruitPizza!');
    }
}

export class KFCCheesePizza extends KFCPizza2 {
    public show(): void {
        console.log('This is KFCCheesePizza!');
    }
    public cut(): void {
        console.log('Cut KFCCheesePizza!');
    }
}
// 具体KFCPizza类
export class MCFruitPizza extends MCPizza2 {
    public show(): void {
        console.log('This is MCFruitPizza!');
    }
    public cut(): void {
        console.log('Cut MCFruitPizza!');
    }
}

export class MCCheesePizza extends MCPizza2 {
    public show(): void {
        console.log('This is MCCheesePizza!');
    }
    public cut(): void {
        console.log('Cut MCCheesePizza!');
    }
}
/**
* 抽象工厂类
*/
export abstract class PizzaFactory3 {
    public abstract createKFCPizza(): KFCPizza;
    public abstract createMCPizza(): MCPizza;
}
/**
* 具体工厂类
*/
// 水果披萨工厂
export class FruitPizzaFactory extends PizzaFactory3 {
    public createKFCPizza(): KFCPizza2 {
        //@ts-ignore
        let KFCPizza2: KFCPizza2 = null;
        try {
            return new KFCFruitPizza();
        } catch (error) {
            console.log(error);
            return KFCPizza2
        }
    }
    public createMCPizza(): MCPizza2 {
        //@ts-ignore
        let MCPizza2: MCPizza2 = null;
        try {
            return new MCFruitPizza();
        } catch (error) {
            console.log(error);
            return MCPizza2
        }
    }
}

// 芝士披萨工厂
export class CheesePizzaFactory extends PizzaFactory {
    public createKFCPizza(): KFCPizza2 {
        //@ts-ignore
        let KFCPizza2: KFCPizza2 = null;
        try {
            return new KFCCheesePizza();
        } catch (error) {
            console.log(error);
            return KFCPizza2
        }
    }
    public createMCPizza(): MCPizza2 {
        //@ts-ignore
        let MCPizza2: MCPizza2 = null;
        try {
            return new MCCheesePizza();
        } catch (error) {
            console.log(error);
            return MCPizza2
        }
    }
}