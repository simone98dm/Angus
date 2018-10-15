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
  public grade: string;
  private loggedUser: ProfileDTO;

  constructor(private user: ProfileService, public archive: ArchiveService) {
    this.areaList = [
      {id: 1, name: 'Lavaggio'},
      {id: 2, name: 'Pretrattamento'},
      {id: 3, name: 'Stoccaggio'}
    ];

  }

  constructor(private user: ProfileService, public archive: ArchiveService) {
    this.areaList = [
      {id: 1, name: ''},
      {id: 2, name: 'Pretrattamento'},
      {id: 3, name: 'Stoccaggio'}
    ];

  }


  ngOnInit() {
    this.grade = this.archive.getRole();
    this.loggedUser = this.archive.getProfile();
  }

}
