import {Injectable} from '@angular/core';
import { Socket } from 'ng-socket-io';

@Injectable()
export class RetriveChartService {

  constructor(private socket: Socket) {
  }

  getInstantEnergyDrainBySensor() {
    return this.socket.fromEvent('instant_energy').map(data => data);
  }
}
