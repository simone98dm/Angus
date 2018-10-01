import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public areaList = [];

  constructor() {
    this.areaList = [
      {id: 1, name: 'Produzione'},
      {id: 2, name: 'Piscine'},
      {id: 3, name: 'Stoccaggio'},
      {id: 4, name: 'Magazzino'},
      {id: 5, name: 'Spedizioni'}
    ];
  }

  ngOnInit() {
  }

}
