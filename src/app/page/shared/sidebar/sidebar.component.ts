import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../../authentication/profile.service';
import {ProfileDTO} from '../../../models/Profile';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public areaList = [];
  public loggedUser: ProfileDTO;

  constructor(private user: ProfileService) {
    this.areaList = [
      {id: 1, name: 'Lavaggio'},
      {id: 2, name: 'Pretrattamento'},
      {id: 3, name: 'Stoccaggio'}
    ];

    user.getUserDetails()
      .subscribe((data) => {
          this.loggedUser = data;
        },
        (error1) => {
          console.log(error1);
        });
  }

  ngOnInit() {
  }

}
