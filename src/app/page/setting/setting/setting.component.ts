import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ArchiveService} from '../../../services/archive.service';
import {ProfileDTO} from '../../../models/Profile';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  loggedUser: ProfileDTO;

  constructor(private archive: ArchiveService) {
    this.loggedUser = archive.loadUser();
  }

  ngOnInit() {
  }

  saveForm(myForm: NgForm) {

  }

}
