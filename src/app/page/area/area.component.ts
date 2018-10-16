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
  public paramId;
  public userLogged: ProfileDTO = null;
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
  }
}

/*

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


 */
