import {Component} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.css']
})
export class GuardComponent implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthenticationService) {
  }

  canActivate() {
    if (this.auth.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
