import {Component, Input, OnInit} from '@angular/core';
import {ArchiveService} from '../../services/archive.service';
import {ActivatedRoute} from '@angular/router';
import {AreaServiceService} from '../../services/area-service.service';

@Component({
  selector: 'app-area-full',
  templateUrl: './area-full.component.html',
  styleUrls: ['./area-full.component.css']
})
export class AreaFullComponent implements OnInit {
  paramId: number;


  @Input()
  areaId: number;

  constructor(private route: ActivatedRoute, private archive: ArchiveService, private area: AreaServiceService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.paramId = params['id'];
      this.area.setParam(this.paramId);
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
