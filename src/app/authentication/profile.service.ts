import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {auth} from '../app.module';
import {ProfileDTO} from '../models/Profile';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) {
  }

  getUserDetails(): Observable<ProfileDTO> {
    return this.http.get(auth,
      {headers: new HttpHeaders().set('x-access-token', JSON.parse(localStorage.getItem('currentUser')).token)})
      .map((response: IUserDetailsResponse) => {
        if (response.auth !== false) {
          return new ProfileDTO(
            response.username,
            response.name,
            response.surname,
            response.email,
            response.grade,
            response.profileImg
          );
        } else {
          return null;
        }
      });

  }
}

export interface IUserDetailsResponse {
  auth: boolean;
  username: string;
  name: string;
  surname: string;
  email: string;
  grade: string;
  profileImg: string;
}
