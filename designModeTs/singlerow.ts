/*
 * @Author: 章红平
 * @Date: 2023-04-03 11:29:29
 * @LastEditors: 章红平
 * @LastEditTime: 2023-04-03 15:21:06
 * @FilePath: \cocosCreator\designModeTs\singlerow.ts
 * @Description: 单列模式
 * 确保某个类只有一个实例，提供对该实例的全局访问点。
 * 在游戏中，单例模式经常被用来管理全局状态或资源，例游戏管理器、音频管理器A、场景管理器等
 */
export default class Singlerow {
    private static singlerow: Singlerow;

    private constructor() {
        // 构造器
    }
    public static getInstance(): Singlerow {
        if (this.singlerow == null) {
            this.singlerow = new Singlerow();
        }
        return this.singlerow;
    }
}