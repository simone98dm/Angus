import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProfileDTO} from '../../models/Profile';
import {ArchiveService} from '../../services/archive.service';
import {RetriveDataService} from '../../services/retrive-data.service';
import {RefreshRateDTO} from '../../models/RefreshRate';
import {SummaryDTO} from '../../models/Summary';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  public idArea;
  public userLogged: ProfileDTO = null;
  public area;
  private areaList;

  refreshRate: RefreshRateDTO;

  summaryCardItems: SummaryDTO[] = [
    {title: 'Temperatura', text: 'Description1', value: '1234', icon: '', style: 'primary'},
    {title: 'Numero Giri', text: 'Description2', value: '4567', icon: '', style: 'danger'},
    {title: 'Livello massimo acqua', text: 'Description3', value: '89', icon: '', style: 'success'},
  ];

  constructor(private activatedRoute: ActivatedRoute, public archive: ArchiveService, private factory: RetriveDataService) {
    this.userLogged = this.archive.getProfile();
  }

  ngOnInit() {
    this.idArea = this.activatedRoute.snapshot.paramMap.get('id');
    this.factory.getArea(this.idArea)
      .subscribe((response: IFactoryStructure) => {
        if (response) {
          for (let item in response.result) {
            this.area.push({
              /*
              prodLineId: item.pLineId,
              prodLineName: item.pLineName,
              machines: [
                {
                  machineId: item.mId,
                  machineName: item.mName,
                  machineSector: item.mSector,
                  sensors: [
                    {
                      sensorId: item.sId,
                      sensorName: item.sName
                    }
                  ]
                }
              ]*/
            });
          }
        }
      });
  }
}


export interface IFactoryStructure {
  result: IArea[];
}

export interface IArea {
  pLineId: number,
  pLineName: string,
  mId: number,
  mSector: string,
  mName: string,
  sId: number,
  sType: string
}

