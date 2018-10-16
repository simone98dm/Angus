import {Injectable} from '@angular/core';

@Injectable()
export class AreaServiceService {
  private _id: number;

  constructor() {
  }

  getParam() {
    return this._id;
  }

  setParam(id: number) {
    this._id = id;
  }

}
