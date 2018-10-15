import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {authenticationApiUrl} from '../app.module';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import {JwtHelper} from 'angular2-jwt';
import {ArchiveService} from '../services/archive.service';

@Injectable()
export class AuthenticationService {
  private jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http: HttpClient, public archive: ArchiveService) {
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<any>(authenticationApiUrl, {email: email, password: password})
      .map((response: IAuthenticationResponse) => {
        if (response.auth === true) {
          if (response.token) {
            this.archive.setToken(response.token);
            return true;
          }
          return false;
        }
        return false;
      }).catch((err) => {
        console.log(err);
        return Observable.throw(err);
      });
  }

  logout(): void {
    this.archive.removeToken();
    this.archive.removeUser();
    this.archive.removeRole();
    this.archive.removeAreas();
  }

  public isAuthenticated(): boolean {
    /*
    tokenNotExpired(this.archive.getLocalStorageTokenKey(), this.archive.getToken()) &&
    this other kind of check is commented because allow foreign user to get the location of the token
    in localstorage, this is a little sec flow
     */
    return this.archive.getToken() != null &&
      !this.jwtHelper.isTokenExpired(this.archive.getToken());
  }
}


export interface IAuthenticationResponse {
  auth: boolean;
  token: string;
}

