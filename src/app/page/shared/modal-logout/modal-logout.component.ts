import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modal-logout',
  templateUrl: './modal-logout.component.html',
  styleUrls: ['./modal-logout.component.css']
})
export class ModalLogoutComponent implements OnInit {

  @Input() showModal = false;
  @ViewChild('closeBtn') closeBtn: ElementRef;

  constructor(private router: Router) {
  }

  logout() {
    this.showModal = this.showModal !== true;
    this.router.navigate(['/logout']);
  }

  ngOnInit() {
  }

}
