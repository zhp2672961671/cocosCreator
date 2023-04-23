import { Vehicle } from './Vehicle.js'
// 具体产品类，实现抽象产品类
export class Van implements Vehicle {
  run() {
    console.log('Van::run().')
  }
}