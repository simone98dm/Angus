import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {authenticationApiUrl} from '../app.module';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import {tokenNotExpired} from 'angular2-jwt';
import {ArchiveService} from '../services/archive.service';

export const TOKEN_NAME = 'currentUser';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient, public archive: ArchiveService) {
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<any>(authenticationApiUrl, {email: email, password: password})
      .map((response: IAuthenticationResponse) => {
        if (response.auth === true) {
          if (response.token) {
            this.setToken(response.token);
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
  }


  setToken(token: string): void {
    this.archive.saveToken(token);
  }

  getToken(): string {
    return this.archive.loadToken();
  }

  public isAuthenticated(): boolean {
    return tokenNotExpired(TOKEN_NAME, this.getToken());
  }
}


export interface IAuthenticationResponse {
  auth: boolean;
  token: string;
}

