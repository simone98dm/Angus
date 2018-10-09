import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../../authentication/profile.service';
import {ProfileDTO} from '../../../models/Profile';
import {ArchiveService} from '../../../services/archive.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public areaList = [];
  public loggedUser: ProfileDTO = new ProfileDTO('simple', 'simple', 'simple', 'simple', 3, 'non');

  constructor(private user: ProfileService, public archive: ArchiveService) {
    this.areaList = [
      {id: 1, name: 'Lavaggio'},
      {id: 2, name: 'Pretrattamento'},
      {id: 3, name: 'Stoccaggio'}
    ];

    this.loggedUser = this.archive.getProfile();

  }

  ngOnInit() {
  }

}
