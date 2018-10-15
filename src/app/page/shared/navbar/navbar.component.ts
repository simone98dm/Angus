import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output()
  refreshGraphRate = new EventEmitter();

  refreshOptions = [
    {id: 0, name: 'Istantaneo'},
    {id: 1, name: '1 Min'},
    {id: 2, name: '1 Ora'},
    {id: 3, name: '1 Giorno'},
    {id: 4, name: '1 Sett'},
    {id: 5, name: '1 Mese'},
    {id: 6, name: '1 anno'}
  ];

  refreshRate: string;

  constructor() {
  }


  print(rate) {
    this.refreshGraphRate.emit(rate.value);
  }

  refresh(): void {
    window.location.reload();
  }

  ngOnInit() {
  }

}
