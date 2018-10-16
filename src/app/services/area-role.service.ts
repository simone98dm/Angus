import {Injectable} from '@angular/core';

@Injectable()
export class AreaRoleService {

  private _id: number;
  private _machine: number;

  constructor() {
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get machine(): number {
    return this._machine;
  }

  set machine(value: number) {
    this._machine = value;
  }
}
