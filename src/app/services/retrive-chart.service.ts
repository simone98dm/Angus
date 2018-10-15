import {Injectable} from '@angular/core';
import { Socket } from 'ng-socket-io';

@Injectable()
export class RetriveChartService {

  constructor(private socket: Socket) {
  }

  reclaimManutentorHome() {
    this.socket.emit('manutentor_home');
  }

  reclaimSupervisorHome() {
    this.socket.emit('supervisor_home');
  }

  getSupervisorHome() {
    return this.socket.fromEvent('supervisor_data_home').map(data => data);
  }
  
  getInstantEnergyDrainBySensor() {
    return this.socket.fromEvent('instant_energy').map(data => data);
  }
}
