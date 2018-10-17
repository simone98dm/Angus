import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RetriveDataService} from '../../services/retrive-data.service';
import {AreaRoleService} from '../../services/area-role.service';

@Component({
  selector: 'app-area-details',
  templateUrl: './area-details.component.html',
  styleUrls: ['./area-details.component.css']
})
export class AreaDetailsComponent implements OnInit {
  area: any;
  machineId: number;
  paramId: number;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private factory: RetriveDataService,
              private areaRole: AreaRoleService) {

  }

  ngOnInit() {
    this.paramId = +this.route.snapshot.paramMap.get('id');
    /*
    this.factory.getArea(this.parentRouteId)
      .subscribe((response: IFactoryStructure) => {
          if (response) {
            this.area = [];
            for (let item in response.result) {
              this.area.push({
                // add here structure
              });
            }
          }
        }
      );
    */
  }
}


export interface IAreaResponse {
  machineId: number;
  machineName: string;
  machineSector: string;
  pLineId: number;
  pLineName: string;
  sensorId: number;
  sensorType: string;
}
