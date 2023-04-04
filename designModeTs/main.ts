/*
 * @Author: 章红平
 * @Date: 2023-04-03 13:56:49
 * @LastEditors: 章红平
 * @LastEditTime: 2023-04-04 09:06:12
 * @FilePath: \cocosCreator\designModeTs\main.ts
 * @Description: 测试
 * https://www.zhihu.com/question/46221055/answer/2930828231
 */
import Singlerow from './singlerow';
import {MCPizza,KFCPizza,PizzaFactory,PizzaFactory2,KFCPizzaFactory,PizzaFactory3,CheesePizzaFactory} from './factory';
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