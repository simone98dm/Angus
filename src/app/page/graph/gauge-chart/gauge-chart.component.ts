import {Component, OnInit, ViewChild} from '@angular/core';
import {RetriveChartService} from '../../../services/retrive-chart.service';

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.css']
})
export class GaugeChartComponent implements OnInit {

  @ViewChild('energy') gauge_chart;
  gaugeChartData: any = {
    chartType: 'gauge',
    dataTable: [],
    options: {
      title: 'Somma Consumi Elettrici',
      height: 623
    }
  };

  constructor(private chart_sock: RetriveChartService) {
  }


  ngOnInit() {
    this.chart_sock
      .getInstantEnergyDrainBySensor()
      .subscribe((data: any[]) => {
        this.gaugeChartData = Object.create(this.gaugeChartData);
        this.gaugeChartData.dataTable.length = 0;
        this.gaugeChartData.dataTable.push(['Components', 'Attuale']);
        data.forEach(x => {
          this.gaugeChartData.dataTable.push([x.machine_name, x.value]);
        });
        this.gauge_chart.redraw();
        console.log(data);
      });
  }

}
