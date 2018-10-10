import {Component, OnInit} from '@angular/core';
import {ArchiveService} from '../../services/archive.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private archive: ArchiveService) {
  }

  ngOnInit() {
    this.archive.removeUser();
    this.archive.removeToken();
  }

}
