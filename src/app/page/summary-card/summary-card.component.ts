import {Component, Input, OnInit} from '@angular/core';
import {SummaryDTO} from '../../models/Summary';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.css']
})
export class SummaryCardComponent implements OnInit {

  @Input()
  item: SummaryDTO;

  constructor() {
  }

  ngOnInit() {
  }

}


