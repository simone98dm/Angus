import {Injectable} from '@angular/core';
import {ProfileDTO} from '../models/Profile';

@Injectable()
export class ArchiveService {
  //key for logged user
  _USER_LOGGED_KEY = 'loggedUser';

  //key for the token
  _TOKEN_NAME = 'currentUser';

  constructor() {
  }

  /**
   * set Profile object into the localStorage memory
   * @param user
   */
  setProfile(user: ProfileDTO) {
    localStorage.setItem(this._USER_LOGGED_KEY, JSON.stringify(user));
  }

  /**
   * get the Profile object saved into the localStorage memory
   */
  getProfile(): ProfileDTO {
    if (localStorage.getItem(this._USER_LOGGED_KEY)) {
      return JSON.parse(localStorage.getItem(this._USER_LOGGED_KEY));
    }
    return null;
  }

  /**
   * remove the user currently logged
   */
  removeUser() {
    if (localStorage.getItem(this._USER_LOGGED_KEY)) {
      localStorage.removeItem(this._USER_LOGGED_KEY);
    }
  }

  /*--------------------------------------------------------------------------------------*/

  /*--------------------------------------------------------------------------------------*/


  /**
   * set the token into the localstorage
   * @param token
   */
  setToken(token: string) {
    localStorage.setItem(this._TOKEN_NAME, JSON.stringify({token: token}));
  }

  /**
   * get the current token saved in localstorae
   */
  getToken(): string {
    if (localStorage.getItem(this._TOKEN_NAME)) {
      return JSON.parse(localStorage.getItem(this._TOKEN_NAME)).token;
    }

    return null;
  }

  /**
   * remove the current token
   */
  removeToken() {
    if (localStorage.getItem(this._TOKEN_NAME)) {
      localStorage.removeItem(this._TOKEN_NAME);
    }
  }
}
