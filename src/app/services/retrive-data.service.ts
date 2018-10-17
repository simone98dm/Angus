import {Injectable} from '@angular/core';
import {ArchiveService} from './archive.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {factoryStructApiUrl} from '../app.module';

@Injectable()
export class RetriveDataService {

  constructor(private http: HttpClient, private archive: ArchiveService) {
  }

  /**
   * get all areas informations by the API entry point,
   * the response is a JSON array with all the information needed
   * is neccessary to provide a valid token to get the info
   */
  getAreas() {
    return this.http.get(factoryStructApiUrl + '/areas', {
      headers: new HttpHeaders().set('x-access-token', this.archive.getToken())
    }).map((response) => {
      return response;
    });
  }

  /**
   * get the information about a single area in the factory
   * the response is a JSON array with all the information needed
   * is neccessary to provide a valid token to get the info
   */
  getArea(n: number) {
    return this.http.get(factoryStructApiUrl + '/area/' + n, {
      headers: new HttpHeaders().set('x-access-token', this.archive.getToken())
    }).map((response) => {
      return response;
    });
  }
}


