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
    {title: 'Temperatura', text: 'Description1', value: '1234', icon: '', style: 'primary'},
    {title: 'Numero Giri', text: 'Description2', value: '4567', icon: '', style: 'danger'},
    {title: 'Livello massimo acqua', text: 'Description3', value: '89', icon: '', style: 'success'},
  ];


  loggedUser: ProfileDTO = this.archive.getProfile();

  constructor(private archive: ArchiveService) {
  }

  ngOnInit() {
  }
}
