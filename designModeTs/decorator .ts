/*
 * @Author: 章红平
 * @Date: 2023-04-13 09:05:37
 * @LastEditors: 章红平
 * @LastEditTime: 2023-04-23 15:16:01
 * @FilePath: \cocosCreator\designModeTs\decorator .ts
 * @Description:
 *  装饰器模式是将一个对象放到一个装饰器对象中，执行装饰器类里的方法时，对象的行为能力得到增强。
 * 先声明具体对象，然后放到装饰器，得到一个带有装饰器的新对象，该对象具备了新的能力。
 * 在游戏开发中，装饰模式常常用于给游戏对象动态地添力些新的行为或者属性，而不需要改变其原有的结构。
   比如，在一个RPG游戏中，你可以通过装备不同的武器、防具来改变角色的属性，而不需要改变色本身的类结构。具体实现上，
   装饰器模式通常使用组合的方式，将装饰器和被装饰的对象放在层级结构中，并且实现相同的接口，
   这样可以确保装饰器和被装饰的对象具有相同的外部接口.装饰器模式还可以使用链式调用的方式，来实现多个装饰器的查加。
 */

// 基础形状类，可定义公共方法
interface Shape {
    draw(): void
}
// 具体形状实现了基础形状接口
export class Circle implements Shape {
    draw() {
        console.log('Circle::draw()')
    }
}
// 具体形状实现了基础形状接口
export class Square implements Shape {
    draw() {
        console.log('Square::draw()')
    }
}
// 抽象装饰类，是否继承Shape可选
class ShapeDecorator implements Shape {
    decoratedShape: Shape
    constructor(decoratedShape: Shape) {
        this.decoratedShape = decoratedShape
    }

    draw() {
        this.decoratedShape.draw()
    }
}
// 具体装饰器1
export class RedShapeDecorator extends ShapeDecorator {
    constructor(decoratedShape: Shape) {
        super(decoratedShape)
    }

    draw() {
        this.decoratedShape.draw()
        this.setRedColor(this.decoratedShape)
    }

    setRedColor(decoratedShape: Shape) {
        console.log(
            'RedShapeDecorator::setRedColor() '
        )
    }
}
// 具体装饰器2
export class ShadowShapeDecorator extends ShapeDecorator {
    constructor(decoratedShape: Shape) {
        super(decoratedShape)
    }

    draw() {
        this.setShadow(this.decoratedShape)
    }

    setShadow(decoratedShape: Shape) {
        console.log(
            'ShadowShapeDecorator::setShadow() '
        )
    }
}