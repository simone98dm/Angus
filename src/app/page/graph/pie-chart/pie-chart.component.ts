import {Component, OnInit, ViewChild} from '@angular/core';
import {RetriveChartService} from '../../../services/retrive-chart.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @ViewChild('energy') pie_chart;
  pieChartData: any = {
    chartType: 'PieChart',
    dataTable: [],
    options: {
      title: 'Ripartizione dei consumi',
      height: 300
    }
  };

  constructor(private chart_sock: RetriveChartService) {
  }

  ngOnInit() {
    this.chart_sock
      .getInstantEnergyDrainBySensor()
      .subscribe((data: any[]) => {
        this.pieChartData = Object.create(this.pieChartData);
        this.pieChartData.dataTable.length = 0;
        this.pieChartData.dataTable.push(['Components', 'Attuale']);
        data.forEach(x => {
          this.pieChartData.dataTable.push([x.machine_name, x.value]);
        });
        this.pie_chart.redraw();
        console.log(data);
      });
  }

}
