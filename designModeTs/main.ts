/*
 * @Author: 章红平
 * @Date: 2023-04-03 13:56:49
 * @LastEditors: 章红平
 * @LastEditTime: 2023-04-23 10:41:08
 * @FilePath: \cocosCreator\designModeTs\main.ts
 * @Description: 测试
 * https://www.zhihu.com/question/46221055/answer/2930828231
 */
import Singlerow from './singlerow';
import {MCPizza,KFCPizza,PizzaFactory,PizzaFactory2,KFCPizzaFactory,PizzaFactory3,CheesePizzaFactory} from './factory';
import {Dog}from './prototypePattern'
import {HamburgDirector,BeefHamburgBuilder,PorkHamburgBuilder,BeefHamburgBuilder1,PorkHamburgBuilder1,HamburgDirector1}from './builder'
import {PowerAdapter,PowerTarget,PowerAdapter1}from './adapter'
import {Circle,Square,RedShapeDecorator,ShadowShapeDecorator}from './decorator '
// 单列
var s1 = Singlerow.getInstance();
var s2 = Singlerow.getInstance();
if (s1 === s2) { console.log('两个实例相等'); } else { console.log('两个实例不等'); }
// 简单工厂模式
let pizza = PizzaFactory.createPizza(KFCPizza);
pizza.show();
pizza = PizzaFactory.createPizza(MCPizza);
pizza.show();
// 工厂方法模式
let factory: PizzaFactory2 = new KFCPizzaFactory();
let pizza2 = factory.createPizza();
pizza2.show();
let factory2: PizzaFactory3 = new CheesePizzaFactory();
let cheesePizza = factory2.createKFCPizza();
cheesePizza.show();
// 原型模式
let dog = new Dog();
console.log(dog.getDiscription());
dog.presentYear = 2020;
let dog1 = Object.create(dog);
let dog2 = dog.clone()
console.log(dog1.getDiscription());
console.log(dog2.getDiscription());
// 建造者模式
let beefHamburgBuilder = new BeefHamburgBuilder();
let porkHamburgBuilder = new PorkHamburgBuilder();
HamburgDirector.construct1(beefHamburgBuilder, 2, 'beef', 'carrot');
HamburgDirector.construct2(porkHamburgBuilder, 3, 'pork');

let beefHamburgBuilder1 = new BeefHamburgBuilder1();
let porkHamburgBuilder1 = new PorkHamburgBuilder1();
HamburgDirector1.construct1(beefHamburgBuilder1, 2, 'beef', 'carrot');
HamburgDirector1.construct2(porkHamburgBuilder1, 3, 'pork');
// 适配器模式
let  target: PowerTarget = new PowerAdapter();
target.output12V();
let  target1: PowerTarget = new PowerAdapter1();
target1.output12V();

/**
 * 装饰器模式是将一个对象放到一个装饰器对象中，执行装饰器类里的方法时，对象的行为能力得到增强。
 * 先声明具体对象，然后放到装饰器，得到一个带有装饰器的新对象，该对象具备了新的能力。
 */

// 声明形状
const circle = new Circle()
const square = new Square()

// 增加红色装饰
const redCircle = new RedShapeDecorator(circle)
const redSquare = new RedShapeDecorator(square)
circle.draw()
redCircle.draw()
redSquare.draw()

// 增加影子装饰
const shadowCircle = new ShadowShapeDecorator(circle)
const shadowSquare = new ShadowShapeDecorator(square)
shadowCircle.draw()
shadowSquare.draw()