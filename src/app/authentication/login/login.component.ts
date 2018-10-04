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
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        (result) => {
          if (result === true) {
            this.user.getUserDetails().subscribe((data: ProfileDTO) => {
              this.archive.saveUser(data);
              if (this.archive.loadUser() !== null) {
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
          this.error = 'Username or password is incorrect';
          this.style = 'alert alert-warning';
          this.loading = false;
        });
  }
}
