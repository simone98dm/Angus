import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../../authentication/profile.service';
import {ProfileDTO} from '../../../models/Profile';
import {ArchiveService} from '../../../services/archive.service';
import {RetriveDataService} from '../../../services/retrive-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public areaList = [];
  public grade: string;
  public loggedUser: ProfileDTO;

  constructor(private user: ProfileService,
              public archive: ArchiveService,
              private factory: RetriveDataService) {
    this.updateAreas();
  }

  updateAreas() {
    this.factory.getAreas()
      .subscribe((response: IFactoryStructure) => {
        this.areaList = [];
        for (let item of response.result) {
          this.areaList.push({
            id: item.pLineId,
            name: item.pLineName
          });
        }
      });
  }


  ngOnInit() {
    this.grade = this.archive.getRole();
    this.loggedUser = this.archive.getProfile();
    this.areaList = this.archive.getAreas();
  }

}

export interface IFactoryStructure {
  result: IArea[];
}

export interface IArea {
  pLineId: number,
  pLineName: string
}
