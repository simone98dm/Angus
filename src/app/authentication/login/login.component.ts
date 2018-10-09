import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';
import {ProfileService} from '../profile.service';
import {ArchiveService} from '../../services/archive.service';
import {ProfileDTO} from '../../models/Profile';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  error = 'Enter your credentials';
  style = 'alert alert-info';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private user: ProfileService,
    private archive: ArchiveService) {
  }

  ngOnInit() {
    if (this.authenticationService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    } else {
      this.authenticationService.logout();
    }
  }

  getRoleFullnameFromLoggedUser(tmp: ProfileDTO): string {
    switch (tmp.grade) {
      case 0:
        return 'root';
      case 1:
        return 'Supervisore';
      case 2:
        return 'Manutentore';
      case 3:
        return 'user';
      default:
        return null;
    }
  }

  login() {
    this.loading = true;

    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        (result) => {
          if (result === true) {
            this.user.getUserDetails().subscribe((data: ProfileDTO) => {
              this.archive.setProfile(data);
              this.archive.setRole(this.getRoleFullnameFromLoggedUser(this.archive.getProfile()));
              if (this.archive.getProfile() !== null) {
                this.router.navigate(['/dashboard']);
              } else {
                this.router.navigate(['/login']);
              }
            });
          } else {
            this.error = 'Username or password is incorrect';
            this.style = 'alert alert-warning';
            this.loading = false;
          }
        },
        (error1) => {
          console.log(error1);
          this.error = 'Unknow error';
          this.style = 'alert alert-danger';
          this.loading = false;
        });
  }
}
