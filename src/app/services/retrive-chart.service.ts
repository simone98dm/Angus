import {Injectable} from '@angular/core';
import { Socket } from 'ng-socket-io';

@Injectable()
export class RetriveChartService {

  constructor(private socket: Socket) {
  }

  reclaimHomeData(auth_id) {
    this.socket.emit('home_run', auth_id);
  }

  getSupervisorHome_AeroGraphs() {
    return this.socket.fromEvent('supervisor_data_aero_graphs').map(data => data);
  }

  getSupervisorHome_Energy() {
    return this.socket.fromEvent('supervisor_data_home_energy');
  }

  getSupervisorHome_Water() {
    return this.socket.fromEvent('supervisor_data_home_water');
  }

  getSupervisorHome_Uptime() {
    return this.socket.fromEvent('supervisor_data_home_uptime');
  }

  getManutentorHome() {
    return this.socket.fromEvent('manutentor_data_home').map(data => data);
  }

  getInstantEnergyDrainBySensor() {
    return this.socket.fromEvent('instant_energy').map(data => data);
  }
}
