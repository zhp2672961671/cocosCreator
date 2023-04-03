/*
 * @Author: 章红平
 * @Date: 2023-04-03 11:29:29
 * @LastEditors: 章红平
 * @LastEditTime: 2023-04-03 13:56:24
 * @FilePath: \designModeTs\singlerow.ts
 * @Description: 单列模式
 */
export default class Singlerow {
    private static mgr: Singlerow;

    private constructor() {
        // 构造器
    }
    public static getMgr(): Singlerow {
        if (this.mgr == null) {
            this.mgr = new Singlerow();
        }
        return this.mgr;
    }
}