import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  private refreshRate: number;

  constructor() {
  }

  ngOnInit() {
  }

  setRefreshrate(refresh: number) {
    this.refreshRate = refresh;
  }
}
