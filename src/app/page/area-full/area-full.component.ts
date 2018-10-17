import {Component, Input, OnInit} from '@angular/core';
import {ArchiveService} from '../../services/archive.service';
import {ActivatedRoute} from '@angular/router';
import {AreaServiceService} from '../../services/area-service.service';
import {RetriveDataService} from '../../services/retrive-data.service';

@Component({
  selector: 'app-area-full',
  templateUrl: './area-full.component.html',
  styleUrls: ['./area-full.component.css']
})
export class AreaFullComponent implements OnInit {
  paramId: number;

  private machineId: number;
  private machine: MachineDTO[];
  private data;

  constructor(private route: ActivatedRoute,
              private archive: ArchiveService,
              private factory: RetriveDataService) {
  }


  ngOnInit() {
    // get the id of the page
    this.paramId = +this.route.snapshot.paramMap.get('id');
    console.log(this.paramId);

    this.factory.getArea(this.paramId)
      .subscribe((data: IAreaResponse) => {
          console.log(data);
          this.data = data;
          localStorage.setItem('area', JSON.stringify(this.data));
        }
      );
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
}

export interface IAreaResponse {
  pLineId: number,
  pLineName: string,
  machineId: number,
  machineSector: string,
  machineName: string,
  sensorId: number,
  sensorType: string
}

export class MachineDTO {
  constructor(id: number, name: string) {
  }
}
