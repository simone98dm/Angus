import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RetriveDataService} from '../../services/retrive-data.service';

@Component({
  selector: 'app-area-details',
  templateUrl: './area-details.component.html',
  styleUrls: ['./area-details.component.css']
})
export class AreaDetailsComponent implements OnInit {
  paramId: number;
  public area = [];
  private sub: any;

  constructor(private route: ActivatedRoute,
              private factory: RetriveDataService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.paramId = params['id'];
    });
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
