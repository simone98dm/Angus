export class ComponentDTO {
  constructor(public id: number,          // id del componente
              public name: string) {      // nome del componente
  }
}


export class MeasurementsDTO {
  constructor(public id: number,          // id della musirazione
              public sensor_id: number,   // id del sensore
              public timestamp: Date,     // stampa del time
              public value: number) {     // valore
  }
}

export class LinesDTO {
  constructor(public id: number,
              public estavlishment_id: number) {
  }
}

export class MachinesDTO {
  constructor(public id: number,
              public line_id: number,
              public sensors_n: number) {
  }
}

export class SensorsDTO {
  constructor(public id: number,
              public machine_id: number,
              public type: string) {
  }
}

export class EstablishmentsDTO {
  constructor(public id: number,
              public address: string) {
  }
}
