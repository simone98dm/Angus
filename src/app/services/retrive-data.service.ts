import {Injectable} from '@angular/core';
import {ArchiveService} from './archive.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {factoryStructApiUrl} from '../app.module';

@Injectable()
export class RetriveDataService {

  constructor(private http: HttpClient, private archive: ArchiveService) {
  }

  getAreas() {
    return this.http.get(factoryStructApiUrl + '/areas', {
      headers: new HttpHeaders().set('x-access-token', this.archive.getToken())
    }).map((response) => {
      return response;
    });
  }

  getArea(n: number) {
    return this.http.get(factoryStructApiUrl + '/area/' + n, {
      headers: new HttpHeaders().set('x-access-token', this.archive.getToken())
    }).map((response) => {
      return response;
    });
  }

}


