import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RetriveDataService} from '../../services/retrive-data.service';
import {AreaServiceService} from '../../services/area-service.service';

@Component({
  selector: 'app-area-details',
  templateUrl: './area-details.component.html',
  styleUrls: ['./area-details.component.css']
})
export class AreaDetailsComponent implements OnInit {
  area: any;
  machineId: number;
  paramId: number;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private factory: RetriveDataService) {

  }

  ngOnInit() {
    this.paramId = +this.route.snapshot.paramMap.get('id');
    this.area = JSON.parse(localStorage.getItem('area'));
    console.log(this.area);
    /*
    this.factory.getArea(this.parentRouteId)
      .subscribe((response: IFactoryStructure) => {
          if (response) {
            this.area = [];
            for (let item in response.result) {
              this.area.push({
                // add here structure
              });
            }
          }
        }
      );
    */
  }
}
