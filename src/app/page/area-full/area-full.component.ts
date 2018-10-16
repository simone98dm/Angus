import {Component, OnInit} from '@angular/core';
import {ArchiveService} from '../../services/archive.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-area-full',
  templateUrl: './area-full.component.html',
  styleUrls: ['./area-full.component.css']
})
export class AreaFullComponent implements OnInit {
  paramId: number;

  constructor(private archive: ArchiveService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.paramId = params['id'];
    });
  }

  trendSummaryChart: any = {
    chartType: 'LineChart',
    dataTable: [
      ['Consumi Elettrici', 'Settimana', 'Attuale'],
      ['Energia', 0, 0]
    ],
    options: {
      title: 'Consumi Elettrici',
      height: 623
    }
  };

}
