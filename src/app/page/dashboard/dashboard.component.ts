import {Component, OnInit, ViewChild} from '@angular/core';
import {SummaryDTO} from '../../models/Summary';
import {ArchiveService} from '../../services/archive.service';
import {ProfileDTO} from '../../models/Profile';
import { RetriveChartService } from '../../services/retrive-chart.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('energy') energyChart;
  @ViewChild('water') waterChart;
  @ViewChild('uptime') uptimeChart;
  summaryCardItems: SummaryDTO[] = [
    {title: 'Temperatura', text: 'Description1', value: '1234', icon: '', style: 'primary'},
    {title: 'Numero Giri', text: 'Description2', value: '4567', icon: '', style: 'danger'},
    {title: 'Livello massimo acqua', text: 'Description3', value: '89', icon: '', style: 'success'},
  ];

  energySummaryChart: any = {
    chartType: 'ColumnChart',
    dataTable: [
      ['Consumi Elettrici', 'Settimana',  'Attuale'],
      ['Energia', 0, 0]
    ],
    options: {
      title: 'Consumi Elettrici',
      height: 623
    }
  }

  waterSummaryChart: any = {
    chartType: 'ColumnChart',
    dataTable: [
      ['Consumi Acqua', 'Settimana',  'Attuale'],
      ['Acqua', 0, 0]
    ],
    options: {
      title: 'Consumi Acqua',
      height: 623
    }
  }

  uptimeSummaryChart: any = {
    chartType: 'ColumnChart',
    dataTable: [
      ['Uptime', 'Settimana',  'Attuale'],
      ['Attività', 0, 0]
    ],
    options: {
      title: 'Uptime',
      height: 623
    }
  }

  loggedUser: ProfileDTO = this.archive.getProfile();

  constructor(private archive: ArchiveService, private socket: RetriveChartService) {
  }

  ngOnInit() {
    this.socket.reclaimSupervisorHome();
    this.socket.getSupervisorHome()
    .subscribe((data: any) => {
      console.log(data);
      this.energySummaryChart = Object.create(this.energySummaryChart);
      this.energySummaryChart.dataTable.length = 0;
      this.energySummaryChart.dataTable.push(['Consumi Elettrici', 'Settimana',  'Attuale']);
      this.energySummaryChart.dataTable.push(['Energia', data.energy_Average, data.energy_Instant]);
      this.energyChart.redraw();
      //-------------------------
      this.waterSummaryChart = Object.create(this.waterSummaryChart);
      this.waterSummaryChart.dataTable.length = 0;
      this.waterSummaryChart.dataTable.push(['Consumi Acqua', 'Settimana',  'Attuale']);
      this.waterSummaryChart.dataTable.push(['Acqua', data.water_Average, data.water_Instant]);
      this.waterChart.redraw();
      //-------------------------
      this.uptimeSummaryChart = Object.create(this.uptimeSummaryChart);
      this.uptimeSummaryChart.dataTable.length = 0;
      this.uptimeSummaryChart.dataTable.push(['Uptime', 'Settimana',  'Attuale']);
      this.uptimeSummaryChart.dataTable.push(['Attività', data.uptime_Average, data.uptime_Instant]);
      this.uptimeChart.redraw();

    });
  }
}
