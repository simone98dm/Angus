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
  error = 'Accedi con le tue credenziali';
  style = 'alert alert-info animated swing';

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
            this.error = 'Username o password non corretti ';
            this.style = 'alert alert-warning  animated shake';
            this.loading = false;
          }
        },
        (error1) => {
          console.log(error1);
          this.error = 'Errore interno';
          this.style = 'alert alert-danger  animated shake';
          this.loading = false;
        });
  }
}
