import { Bus } from './vehicle/Bus.js'
import { Car } from './vehicle/Car.js'
import { Motorcycle } from './vehicle/Motorcycle.js'
import { Van } from './vehicle/Van.js'
import { AbstractFactory } from './AbstractFactory.js'
export const VehicleType = {
  BUS: 'bus',
  CAR: 'car',
  MOTORCYCLE: 'motorcycle',
  VAN: 'van'
}
export class VehicleFactory extends AbstractFactory {
  getVehicle(type) {
    switch (type) {
      case VehicleType.BUS:
        return new Bus()
      case VehicleType.CAR:
        return new Car()
      case VehicleType.MOTORCYCLE:
        return new Motorcycle()
      case VehicleType.VAN:
        return new Van()
      default:
        return undefined
    }
  }
}
