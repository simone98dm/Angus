import {Injectable} from '@angular/core';
import {ProfileDTO} from '../models/Profile';

@Injectable()
export class ArchiveService {
  USER_LOGGED_KEY = 'loggedUser';
  TOKEN_NAME = 'currentUser';

  constructor() {
  }

  saveUser(user: ProfileDTO) {
    localStorage.setItem(this.USER_LOGGED_KEY, JSON.stringify(user));
  }

  loadUser(): ProfileDTO {
    if (localStorage.getItem(this.USER_LOGGED_KEY)) {
      return JSON.parse(localStorage.getItem(this.USER_LOGGED_KEY));
    }
    return null;
  }

  removeUser() {
    if (localStorage.getItem(this.USER_LOGGED_KEY)) {
      localStorage.removeItem(this.USER_LOGGED_KEY);
    }
  }

  saveToken(token: string) {
    localStorage.setItem(this.TOKEN_NAME, JSON.stringify({token: token}));
  }

  loadToken(): string {
    if (localStorage.getItem(this.TOKEN_NAME)) {
      return JSON.parse(localStorage.getItem(this.TOKEN_NAME)).token;
    }

    return null;
  }

  removeToken() {
    if (localStorage.getItem(this.TOKEN_NAME)) {
      localStorage.removeItem(this.TOKEN_NAME);
    }

  }
}
