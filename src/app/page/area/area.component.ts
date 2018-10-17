import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  private paramId: number;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

  }
}
