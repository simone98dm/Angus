import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-logout',
  templateUrl: './modal-logout.component.html',
  styleUrls: ['./modal-logout.component.css']
})
export class ModalLogoutComponent implements OnInit {

  constructor() { }


  refresh(): void {
    window.location.reload();
  }
  ngOnInit() {
  }

}
