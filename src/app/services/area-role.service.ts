import {Injectable} from '@angular/core';
import {MachineDTO} from '../models/Area';

@Injectable()
export class AreaRoleService {

  private _id: number;
  private _name: string;
  private _machine: MachineDTO[];

  constructor() {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  addMachine(item) {
    this._machine.push(item);
  }
}

