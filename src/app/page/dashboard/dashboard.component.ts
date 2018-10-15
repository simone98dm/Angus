import {Component, OnInit} from '@angular/core';
import {SummaryDTO} from '../../models/Summary';
import {ArchiveService} from '../../services/archive.service';
import {ProfileDTO} from '../../models/Profile';
import {IFactoryStructure} from '../shared/sidebar/sidebar.component';
import {RetriveDataService} from '../../services/retrive-data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loggedUser: ProfileDTO = this.archive.getProfile();

  constructor(private archive: ArchiveService, private factory: RetriveDataService) {
  }

  ngOnInit() {
    if (this.archive.getAreas() == null) {
      this.updateAreas();
    }
  }

  updateAreas(){
    this.factory.getAreas()
      .subscribe((response: IFactoryStructure) => {
        let areaList = [];
        for (let item of response.result) {
          areaList.push({
            id: item.pLineId,
            name: item.pLineName
          });
        }

        this.archive.setAreas(areaList);
      });
  }

}
