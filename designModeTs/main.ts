/*
 * @Author: 章红平
 * @Date: 2023-04-03 13:56:49
 * @LastEditors: 章红平
 * @LastEditTime: 2023-04-12 15:03:13
 * @FilePath: \cocosCreator\designModeTs\main.ts
 * @Description: 测试
 * https://www.zhihu.com/question/46221055/answer/2930828231
 */
import Singlerow from './singlerow';
import {MCPizza,KFCPizza,PizzaFactory,PizzaFactory2,KFCPizzaFactory,PizzaFactory3,CheesePizzaFactory} from './factory';
import {Dog}from './prototypePattern'
import {HamburgDirector,BeefHamburgBuilder,PorkHamburgBuilder,BeefHamburgBuilder1,PorkHamburgBuilder1,HamburgDirector1}from './builder'
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