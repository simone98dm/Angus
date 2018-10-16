import {Injectable} from '@angular/core';
import { Socket } from 'ng-socket-io';

@Injectable()
export class RetriveChartService {

  constructor(private socket: Socket) {
  }

  reclaimHomeData(auth_id) {
    this.socket.emit('home_run', auth_id);
  }  

  getSupervisorHome() {
    return this.socket.fromEvent('supervisor_data_home').map(data => data);
  }

  getManutentorHome() {
    return this.socket.fromEvent('manutentor_data_home').map(data => data);
  }
  
  getInstantEnergyDrainBySensor() {
    return this.socket.fromEvent('instant_energy').map(data => data);
  }
}
