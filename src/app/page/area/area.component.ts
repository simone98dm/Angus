import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  public idArea: number;
  public area;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.area = [
      {
        idArea: 1,
        sensors: [
          {
            id: 1,
            name: 'Piscina',
            desc: 'Vasca con acqua'
          },
          {
            id: 2,
            name: 'Che palle!',
            desc: 'Non ghen pose pì'
          }
        ]
      },
      {
        idArea: 2,
        sensors: [
          {
            id: 1,
            name: 'Fresa',
            desc: 'Che cazzo ne so io'
          },
          {
            id: 2,
            name: 'Gancio',
            desc: 'quello per agganciare le cose'
          }
        ]
      }

    ];
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.idArea = params['id'];
    });
  }

}
