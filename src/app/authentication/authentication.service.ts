import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {authenticationApiUrl} from '../app.module';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import {tokenNotExpired} from 'angular2-jwt';

export const TOKEN_NAME = 'currentUser';

@Injectable()
export class AuthenticationService {
  public token: string;

  constructor(private http: HttpClient) {
    this.token = this.getToken();
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
    this.token = null;
    localStorage.removeItem(TOKEN_NAME);
  }


  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, JSON.stringify({token: token}));
  }

  getToken(): string {
    if (localStorage.getItem(TOKEN_NAME)) {
      return JSON.parse(localStorage.getItem(TOKEN_NAME)).token;
    }
  }

  public isAuthenticated(): boolean {
    return tokenNotExpired(TOKEN_NAME, this.getToken());
  }
}


export interface IAuthenticationResponse {
  auth: boolean;
  token: string;
}

