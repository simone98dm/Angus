import {Component, OnInit, ViewChild} from '@angular/core';
import {RetriveChartService} from '../../../services/retrive-chart.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  @ViewChild('energy') bar_chart;
  barChartData: any = {
    chartType: 'ColumnChart',
    dataTable: [],
    options: {
      title: 'Instant Energy Drain'
    }
  };
  constructor(private chart_sock: RetriveChartService) {
  }

  ngOnInit() {
    this.chart_sock
    .getInstantEnergyDrainBySensor()
    .subscribe((data: any[]) => {
      this.barChartData = Object.create(this.barChartData);
      this.barChartData.dataTable.length = 0;
      this.barChartData.dataTable.push(['Components', 'Instant']);
      data.forEach(x => {
        this.barChartData.dataTable.push([x.machine_name, x.value]);
      });
      this.bar_chart.redraw();
      console.log(data);
    });
  }

}
