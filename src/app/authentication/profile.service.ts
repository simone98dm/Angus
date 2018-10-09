import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {userApiUrl} from '../app.module';
import {ProfileDTO} from '../models/Profile';
import 'rxjs/add/operator/map';
import {ArchiveService} from '../services/archive.service';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient, private archive: ArchiveService) {
  }

  getUserDetails() {
    return this.http.get(userApiUrl,
      {
        headers: new HttpHeaders().set('x-access-token', this.archive.getToken())
      })
      .map((response: IUserDetailsResponse) => {
        if (response.auth === true) {
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
  grade: number;
  profileImg: string;
}
