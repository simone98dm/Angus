import {Component, OnInit} from '@angular/core';
import {ArchiveService} from '../../services/archive.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RetriveDataService} from '../../services/retrive-data.service';
import {ProfileDTO} from '../../models/Profile';
import {RefreshRateDTO} from '../../models/RefreshRate';
import {SummaryDTO} from '../../models/Summary';

@Component({
  selector: 'app-area-full',
  templateUrl: './area-full.component.html',
  styleUrls: ['./area-full.component.css']
})
export class AreaFullComponent implements OnInit {
  paramId: number;

  private machineId: number;
  private data;

  public userLogged: ProfileDTO = null;
  refreshRate: RefreshRateDTO;
  summaryCardItems: SummaryDTO[] = [
    {title: 'Temperatura', text: 'Description1', value: '1234', icon: '', style: 'primary'},
    {title: 'Numero Giri', text: 'Description2', value: '4567', icon: '', style: 'danger'},
    {title: 'Livello massimo acqua', text: 'Description3', value: '89', icon: '', style: 'success'},
  ];

  constructor(private route: ActivatedRoute,
              private archive: ArchiveService,
              private factory: RetriveDataService,
              private router: Router) {
  }

  private productLines: any[] = [];
  private machines: any[] = [];
  private sensors: any[] = [];
  private areaList;

  ngOnInit() {
    // get the id of the page
    this.route.params.subscribe(params => {
      this.paramId = params['id'];
    });
    console.log(this.paramId);

    /*
    this.factory.getArea(this.paramId)
      .subscribe((data: IAreaResponse) => {
          console.log(data);
        for (let item of data.result) {

          if (!this.productLines.indexOf(item.pLineName)) {
          }
          this.productLines.push({id: item.pLineId, name: item.pLineName, eId: item.pLineEId});

          if (!this.machines.indexOf(item.machineName)) {
          }
          this.machines.push({
            id: item.machineId,
            pLineId: item.machinePLineId,
            name: item.machineName,
            sector: item.machineSector
          });

          if (!this.sensors.indexOf(item.sensorId)) {
          }
          this.sensors.push({id: item.sensorId, machineId: item.machineId, type: item.sensorType});


          console.log(this.machines);

        }
        }
      );
      */
  }

  trendSummaryChart: any = {
    chartType: 'LineChart',
    dataTable: [
      ['Consumi Elettrici', 'Settimana', 'Attuale'],
      ['Energia', 0, 0]
    ],
    options: {
      title: 'Consumi Elettrici',
      height: 623
    }
  };

  parseAreaResponse(item) {
    console.log('parse');
    console.log(item);


  }
}


export interface IAreaResponse {
  result: IArea[];
}

export interface IArea {
  pLineId: number;
  pLineName: string;
  pLineEId: number;
  machineId: number;
  machinePLineId: number;
  machineName: string;
  machineSector: string;
  sensorId: number;
  sensorMachineId: number;
  sensorType: string;
}
