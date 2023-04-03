/*
 * @Author: 章红平
 * @Date: 2023-04-03 14:31:43
 * @LastEditors: 章红平
 * @LastEditTime: 2023-04-03 14:56:48
 * @FilePath: \cocosCreator\designModeTs\structure.ts
 * @Description:数据结构
 */
// js原生类型
let num: number = 5000;
let str: string = '你好，我是一个字符串';
let bool: boolean = false;
let nul = null;
let undef;
// Symbol 表示独一无二的值，用于防止对象属性名冲突
let sym: symbol = Symbol('tag_info');
let obj_stu = {
    id: '10086',
    name: 'cupido',
    hobby: 'swim'
}
let nums: number[] = [1, 2, 3, 5, 8, 7]
let strs: Array<string> = ['a', 'ccc', 'sad', 'affad', '123486']
// ts新增检查类型
// 联合类型
// 有（）表示混合型数组
let arr: (number | string | boolean)[] = ['sad', 12345, 'haha', 89898.2, 'aa', false, true];
// 没有（）表示或关系  只能是指定类型中的一种
let arr_or: number | string | boolean[] = [false, true];
// 类型别名
// 自定义接口类型的数据结构  避免重复使用时候重复声明类型
type Mix_num_str = (number | string)[];
let arr_mix: Mix_num_str = [45654, "哈哈", 'asdafbjh', 45564688, 2.2, '45']
let arr_mixdemo: Mix_num_str = [11111, 22222, 'haha']
// 函数类型
function plus(a: number, b: number): number {
    return a + b;
}
console.log(plus(1, 2));
const add = (a: number, b: number): number => {
    return a + b;
}
console.log(add(1, 2));
const add_obj: (a: number, b: number) => number = (a, b) => { return a + b; };
// 空类型
function none(a: number, b: number): void {
    console.log('无返回值的函数')
}
// 可选参数  
// 类似于可变参数  可以传参  也可以传指定参数类型的任意几个
function Slice(start?: number, end?: number): number {
    //@ts-ignore
    return start + end;
}
Slice()
Slice(1)
Slice(1, 2)
// 对象类型限定
// 类型声明
var Person1: { id: number; name: string; gender: boolean; SayHi(name: string): void } = {
    id: 1001,
    name: "cupido",
    gender: false,
    SayHi: function (name): void {
        throw new Error("Function not implemented.");
    }
}
// 可选属性?
var Person2: { id: number; name: string; gender?: boolean; SayHi(name: string): void } = {
    id: 1001,
    name: "cupido",
    SayHi: function (name): void {
        throw new Error("Function not implemented.");
    }
}
// 接口类型
interface IPerson { id: number; name: string; gender?: boolean; SayHi(name: string): void }
let person_obj: IPerson = {
    id: 0,
    name: "Lulu",
    // 可选属性
    gender: true,
    SayHi: function (name: string): void {
        throw new Error("Function not implemented.");
    }
}
// 接口继承
interface Point2D { x: number; y: number }
interface Point3D extends Point2D { z: number }
let point1: Point3D = {
    z: 0,
    x: 0,
    y: 0
}
// 元组类型tuple
// 可以指定元素类型和参数个数检查
let location_obj: [number, number] = [25.65, 66.33]
// 类型推断
let name1;
// name1=22此时不报错
let age = 18;
// age = 'a' 不指定变量类型的时候  类型推断会在变量初始化后指定变量声明时相应的数据类型   再次改变变量类型报错
// 类型断言
// 未使用断言关键字as时   alink的父类HtmlElement中没有href属性   当我们明确alink的类型是子类HTMLAnchorElement时
// 可以进行as类型指定  这样就可以获得子类型HTMLAnchorElement下的href属性
// 父类属性的获取可以查看控制台的检查信息中 a标签的_protoType_的类型
// const alink = document.getElementById('alink') as HTMLAnchorElement
// alink.href == 'http://www......'
// 字面量类型
// str02的类型是'cupido' 由于它为常量枚举类型  所以会有独有的类型  所以字符串也是可以作为类型出现的 但是值只能相同
// 这种类型的数据可以理解为枚举的充当品
let str01 = 'cupido';
const str02 = 'cupido';
let str03: 'cupido' = 'cupido';
function ChangeDirection1(derection: 'up' | "down" | 'left' | 'right') {
    console.log('我移动的方向是：' + derection)
}
// 调用时会指定相应的常量
ChangeDirection1('up')
// 枚举类型
// 如果枚举中的枚举成员不初始化  会有默认值并且默认值会自增   从0----1，1++.....
enum Derections {
    UP = 'up',
    DOWN = 'down',
    LEFT = 'left',
    RIGHT = 'right'
}
function ChangeDirection2(derection: Derections) {
    console.log('我移动的方向是：' + Derections)
}
// 调用时会指定相应的常量
ChangeDirection2(Derections.UP)
// any类型
// 使用any类型的时候 对象将失去类型检查机制  可以任意修改行为
let num_obj: any = 'haha';
num_obj = 123456789;
let any_OBJ = {
    id: 123456,
    maker: 'xiaomi',
    person: Person1,
    date: new Date()
}
// typeof()
console.log(typeof (num_obj))
// 可以用于传参类型检查
function sayHI(name: typeof Person1): void {
    throw new Error("Function not implemented.");
}
