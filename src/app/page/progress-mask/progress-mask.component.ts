import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-mask',
  templateUrl: './progress-mask.component.html',
  styleUrls: ['./progress-mask.component.css']
})
export class ProgressMaskComponent implements OnInit {

  @Input() showProgress = false;

  constructor() {
  }

  ngOnInit() {
  }

}
