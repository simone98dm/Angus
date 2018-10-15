import {Component, OnInit} from '@angular/core';
import {SummaryDTO} from '../../models/Summary';
import {ArchiveService} from '../../services/archive.service';
import {ProfileDTO} from '../../models/Profile';
import {IFactoryStructure} from '../shared/sidebar/sidebar.component';
import {RetriveDataService} from '../../services/retrive-data.service';

import {RetriveChartService} from '../../services/retrive-chart.service';
import {RefreshRateDTO} from '../../models/RefreshRate';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  refreshRate: RefreshRateDTO;

  summaryCardItems: SummaryDTO[] = [
    {title: 'Temperatura', text: 'Description1', value: '1234', icon: '', style: 'primary'},
    {title: 'Numero Giri', text: 'Description2', value: '4567', icon: '', style: 'danger'},
    {title: 'Livello massimo acqua', text: 'Description3', value: '89', icon: '', style: 'success'},
  ];

  energySummaryChart: any = {
    chartType: 'ColumnChart',
    dataTable: [],
    options: {
      title: 'Consumi Elettrici',
      height: 623
    }
  };

  waterSummaryChart: any = {
    chartType: 'ColumnChart',
    dataTable: [],
    options: {
      title: 'Consumi Acqua',
      height: 623
    }
  };

  uptimeSummaryChart: any = {
    chartType: 'ColumnChart',
    dataTable: [],
    options: {
      title: 'Uptime',
      height: 623
    }
  };

  loggedUser: ProfileDTO = this.archive.getProfile();

  constructor(private archive: ArchiveService, private factory: RetriveDataService) {
  }

  ngOnInit() {
    if (this.archive.getAreas() == null) {
      this.updateAreas();
    }
    this.socket.reclaimSupervisorHome();
    this.socket.getSupervisorHome()
      .subscribe((data: any) => {
        console.log(data);
        this.energySummaryChart = Object.create(this.energySummaryChart);
        this.energySummaryChart.dataTable.length = 0;
        this.energySummaryChart.dataTable.push(['Consumi Elettrici', 'Settimana', 'Attuale']);
        this.energySummaryChart.dataTable.push(['Energia', data.energy_Average, data.energy_Instant]);
        //-------------------------
        this.waterSummaryChart = Object.create(this.waterSummaryChart);
        this.waterSummaryChart.dataTable.length = 0;
        this.waterSummaryChart.dataTable.push(['Consumi Acqua', 'Settimana', 'Attuale']);
        this.waterSummaryChart.dataTable.push(['Acqua', data.water_Average, data.water_Instant]);
        //-------------------------
        this.uptimeSummaryChart = Object.create(this.uptimeSummaryChart);
        this.uptimeSummaryChart.dataTable.length = 0;
        this.uptimeSummaryChart.dataTable.push(['Uptime', 'Settimana', 'Attuale']);
        this.uptimeSummaryChart.dataTable.push(['Attività', data.uptime_Average, data.uptime_Instant]);
      });
  }

  setRefreshrate(refresh: number) {
    this.refreshRate = refresh;
  }

  updateAreas(){
    this.factory.getAreas()
      .subscribe((response: IFactoryStructure) => {
        let areaList = [];
        for (let item of response.result) {
          areaList.push({
            id: item.pLineId,
            name: item.pLineName
          });
        }

        this.archive.setAreas(areaList);
      });
  }

}
