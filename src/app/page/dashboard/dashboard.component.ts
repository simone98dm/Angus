import { Component, OnInit, ViewChild } from "@angular/core";
import { SummaryDTO } from "../../models/Summary";
import { ArchiveService } from "../../services/archive.service";
import { ProfileDTO } from "../../models/Profile";
import { IFactoryStructure } from "../shared/sidebar/sidebar.component";
import { RetriveDataService } from "../../services/retrive-data.service";

import { RetriveChartService } from "../../services/retrive-chart.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  @ViewChild("energy")
  energyChart;
  @ViewChild("water")
  waterChart;
  @ViewChild("uptime")
  uptimeChart;
  @ViewChild("energy_grouped")
  energyAero;
  @ViewChild("water_grouped")
  waterAero;

  refreshRate: number;

  water_Grouped: any = {
    chartType: "PieChart",
    dataTable: [["Consumi Acqua", "Giorno"], ["No data", 50]],
    options: {
      title: "Acqua",
      slices: {
        0: {
          offset: 0.3
        },
        1: {
          offset: 0.2
        }
      }
    }
  };

  energy_Grouped: any = {
    chartType: "PieChart",
    dataTable: [["Consumi Acqua", "Giorno"], ["No data", 100]],
    options: {
      title: "Energia",
      slices: {
        0: {
          offset: 0.3
        },
        1: {
          offset: 0.2
        }
      }
    }
  };

  summaryCardItems: SummaryDTO[] = [
    {
      title: "Temperatura",
      text: "Description1",
      value: "1234",
      icon: "",
      style: "primary"
    },
    {
      title: "Numero Giri",
      text: "Description2",
      value: "4567",
      icon: "",
      style: "danger"
    },
    {
      title: "Livello massimo acqua",
      text: "Description3",
      value: "89",
      icon: "",
      style: "success"
    }
  ];

  refreshOptions = [
    { id: 0, name: "Istantaneo" },
    { id: 1, name: "1 Min" },
    { id: 2, name: "1 Ora" },
    { id: 3, name: "1 Giorno" },
    { id: 4, name: "1 Sett" }
  ];

  manutentor_data: IManutentorData = {
    pretreatment: {
      finisher: {
        max: 0,
        min: 0
      },
      primer: {
        max: 0,
        min: 0
      },
      pretreatment: {
        max: 0,
        min: 0
      }
    },
    prewashing: {
      temp: 0,
      revolutionxminute: 0,
      water_level: {
        max: 0,
        min: 0
      }
    },
    washing: {
      temp: 0,
      revolutionxminute: 0,
      water_level: {
        max: 0,
        min: 0
      }
    },
    drying: {
      temp: 0,
      revolutionxminute: 0
    },
    storage: {
      engine_one: {
        revolutionxminute: 0
      },
      engine_two: {
        revolutionxminute: 0
      }
    }
  };

  energySummaryChart: any = {
    chartType: "ColumnChart",
    dataTable: [
      ["Consumi Elettrici", "Settimana", "Attuale"],
      ["Energia", 0, 0]
    ],
    options: {
      title: "Consumi Elettrici",
      height: 623
    }
  };

  waterSummaryChart: any = {
    chartType: "ColumnChart",
    dataTable: [["Consumi Acqua", "Settimana", "Attuale"], ["Acqua", 0, 0]],
    options: {
      title: "Consumi Acqua",
      height: 623
    }
  };

  uptimeSummaryChart: any = {
    chartType: "ColumnChart",
    dataTable: [["Uptime", "Settimana", "Attuale"], ["Attività", 0, 0]],
    options: {
      title: "Uptime",
      height: 623
    }
  };
  public loggedUser: ProfileDTO = this.archive.getProfile();

  constructor(
    private archive: ArchiveService,
    private factory: RetriveDataService,
    private socket: RetriveChartService
  ) {}

  ngOnInit() {
    if (this.archive.getAreas() == null) {
      this.updateAreas();
    }
    this.socket.reclaimHomeData(this.loggedUser.grade);
    this.socket.getSupervisorHome_Energy().subscribe((data: any) => {
      console.log(data);
      this.energySummaryChart = Object.create(this.energySummaryChart);
      this.energySummaryChart.dataTable.length = 0;
      this.energySummaryChart.dataTable.push([
        "Consumi Elettrici",
        "Settimana",
        "Attuale"
      ]);
      this.energySummaryChart.dataTable.push([
        "Energia",
        data.energy_Average,
        data.energy_Instant
      ]);
      this.energyChart.redraw();
    });

    this.socket.getSupervisorHome_Uptime().subscribe((data: any) => {
      // -------------------------
      this.uptimeSummaryChart = Object.create(this.uptimeSummaryChart);
      this.uptimeSummaryChart.dataTable.length = 0;
      this.uptimeSummaryChart.dataTable.push([
        "Uptime",
        "Settimana",
        "Attuale"
      ]);
      this.uptimeSummaryChart.dataTable.push([
        "Attività",
        data.uptime_Average,
        data.uptime_Instant
      ]);
      this.uptimeChart.redraw();
    });

    this.socket.getSupervisorHome_Water().subscribe((data: any) => {
      // -------------------------
      this.waterSummaryChart = Object.create(this.waterSummaryChart);
      this.waterSummaryChart.dataTable.length = 0;
      this.waterSummaryChart.dataTable.push([
        "Consumi Acqua",
        "Settimana",
        "Attuale"
      ]);
      this.waterSummaryChart.dataTable.push([
        "Acqua",
        data.water_Average,
        data.water_Instant
      ]);
      this.waterChart.redraw();
    });

    this.socket.getManutentorHome().subscribe((data: IManutentorData) => {
      console.log(data);
      this.manutentor_data = data;
    });

    this.socket.getSupervisorHome_AeroGraphs().subscribe((data: any) => {
      console.log(data);
      this.water_Grouped = Object.create(this.water_Grouped);

      this.water_Grouped.dataTable.lenght = 0;
      this.water_Grouped.dataTable.push(["Consumi Acqua", "Giorno"]);
      data.energy.forEach(element => {
        this.water_Grouped.dataTable.push([
          element.machine_name,
          element.value
        ]);
      });

      this.waterAero.redraw();
    });
  }

  setRefreshRate(refresh: number) {
    this.refreshRate = refresh;
  }

  updateAreas() {
    this.factory.getAreas().subscribe((response: IFactoryStructure) => {
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

interface IManutentorData {
  pretreatment: IPreTreatment;
  prewashing: IPreWashing;
  washing: IWashing;
  drying: IDrying;
  storage: IStorage;
}

interface IPreTreatment {
  finisher: IWaterLevel;
  primer: IWaterLevel;
  pretreatment: IWaterLevel;
}

interface IPreWashing {
  temp: number;
  revolutionxminute: number;
  water_level: IWaterLevel;
}

interface IWashing {
  temp: number;
  revolutionxminute: number;
  water_level: IWaterLevel;
}

interface IDrying {
  temp: number;
  revolutionxminute: number;
}

interface IStorage {
  engine_one: IEngine;
  engine_two: IEngine;
}

interface IEngine {
  revolutionxminute: number;
}

interface IWaterLevel {
  min: number;
  max: number;
}
