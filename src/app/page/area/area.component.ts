import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}

/*

export interface IFactoryStructure {
  result: IArea[];
}

export interface IArea {
  pLineId: number,
  pLineName: string,
  mId: number,
  mSector: string,
  mName: string,
  sId: number,
  sType: string
}
*/
