/*
 * @Author: 章红平
 * @Date: 2023-04-23 11:56:46
 * @LastEditors: 章红平
 * @LastEditTime: 2023-04-23 14:41:07
 * @FilePath: \cocosCreator\designModeTs\proxy.ts
 * @Description:
 * 代理模式就是用一个类来代理另一个类或几个类的功能，以便隔绝外部客户和内部真实类
 * 这样真实类和调用方之间有一个代理屏障，保证了安全
 * 同时真实的类如果初始化过，就不再初始化，提升了性能
 *
 *
 */
// 定义一个接口供代理和实际调用来使用
class Image {
    fileName!: string
    display() {}
 }
// 真实类实现基础接口
class RealImage extends Image {
    constructor(fileName) {
      // 在初始化时执行内部逻辑
      super()
      this.fileName = fileName
      this.loadFromDisk(fileName)
    }

    display() {
      console.log('RealImage::display() ' + this.fileName)
    }

    // 这个方法只是内部使用
    loadFromDisk(fileName) {
      console.log('RealImage::loadFromDisk()  ' + fileName)
    }
  }
// 代理类也实现了基础接口
export class ProxyImage extends Image {
    realImage: any
    constructor(fileName) {
      super()
      this.realImage = null
      this.fileName = fileName
    }

    display() {
      console.log('ProxyImage::display() ' + this.fileName)
      if (this.realImage === null) {
        this.realImage = new RealImage(this.fileName)
      }
      // 代理类调用真实类的方法
      this.realImage.display()
    }
  }


