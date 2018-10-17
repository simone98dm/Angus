/*
export class AreaDTO {
  constructor(id: number, productLines: ProductLineDTO[]) {
  }
}
*/

export class ProductLineDTO {
  constructor(id: number, name: string, machines: MachineDTO[]) {
  }
}

export class MachineDTO {
  constructor(id: number, sector: string, name: string, sensors: SensorDTO[]) {
  }
}

export class SensorDTO {
  constructor(id: number, type: string) {
  }
}
