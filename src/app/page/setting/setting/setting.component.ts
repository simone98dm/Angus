import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProfileService} from '../../../authentication/profile.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  loggedEmail: string;
  loggedName: string;
  loggedSurname: string;
  loggedImageProfile: string;
  @Output()
  save: EventEmitter<TempProfileDTO> = new EventEmitter<TempProfileDTO>();

  constructor(private profile: ProfileService) {
    profile.getUserDetails()
      .subscribe((data) => {
          this.loggedName = data.name;
          this.loggedEmail = data.email;
          this.loggedSurname = data.surname;
          this.loggedImageProfile = data.profileImg;
        },
        (error1) => {
          console.log(error1);
        },
        () => {
          console.log('Task complete!');
        });
  }

  ngOnInit() {
  }

  saveForm(myForm: NgForm) {
    if (myForm.valid) {
      this.save.emit(
        new TempProfileDTO(
          myForm.value.email,
          myForm.value.name,
          myForm.value.surname
        )
      );
    }
  }

}


export class TempProfileDTO {
  constructor(public email: string, public name: string, public surname: string) {
  }
}
