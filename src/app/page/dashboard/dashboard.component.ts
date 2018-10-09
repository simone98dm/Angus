import {Component, OnInit} from '@angular/core';
import {SummaryDTO} from '../../models/Summary';
import {ArchiveService} from '../../services/archive.service';
import {ProfileDTO} from '../../models/Profile';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  summaryCardItems: SummaryDTO[] = [
    {title: 'Card1', text: 'Description1', value: '1234', icon: '', style: 'primary'},
    {title: 'Card2', text: 'Description2', value: '4567', icon: '', style: 'danger'},
    {title: 'Card3', text: 'Description3', value: '89', icon: '', style: 'success'},
    {title: 'Card4', text: 'Description4', value: '85476', icon: '', style: 'warning'}
  ];
  loggedUser: ProfileDTO = this.archive.getProfile();

  constructor(private archive: ArchiveService) {
  }

  ngOnInit() {
    console.log(this.loggedUser.grade);
  }

  getPermission(): string {
    return this.loggedUser.getPermissionName();
  }

}
