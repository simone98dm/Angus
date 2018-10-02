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
        machines: [
          {
            id: 1,
            code: 48595,
            name: 'Prelavaggio',
            sensors: [
              {id: 1, name: 'Pompa d\'acqua'},
              {id: 2, name: 'Contatore acqua'},
              {id: 3, name: 'Temperatura'},
              {id: 4, name: 'Livello'}
            ]
          },
          {
            id: 2,
            code: 98165,
            name: 'Lavaggio',
            sensors: [
              {id: 1, name: 'pompa'},
              {id: 2, name: 'contatore'},
              {id: 3, name: 'temperatura'},
              {id: 4, name: 'livello'}
            ]
          },
          {
            id: 3,
            code: 74589,
            name: 'Asciugatura',
            sensors: [
              {id: 1, name: 'ventilatore'},
              {id: 2, name: 'contatore'},
              {id: 3, name: 'temperatura'},
              {id: 4, name: 'livello'},
            ]
          }
        ]
      },
      {
        idArea: 2,
        machines: [
          {
            id: 1,
            code: 86625,
            name: 'Vasca pre-trattamento',
            sensors: [
              {id: 1, name: 'livello'},
              {id: 2, name: 'ph'},
            ]
          },
          {
            id: 2,
            code: 96385,
            name: 'Vasca primer',
            sensors: [
              {id: 1, name: 'livello'},
              {id: 2, name: 'ph'},
            ]
          },
          {
            id: 3,
            code: 12345,
            name: 'Vasca finisher',
            sensors: [
              {id: 1, name: 'livello'},
              {id: 2, name: 'ph'},
            ]
          },
        ]
      },
      {
        idArea: 3,
        machines: [
          {
            id: 1,
            code: 32651,
            name: 'motore',
            sensors: [
              {id: 1, name: 'corrente assorbita'},
              {id: 2, name: 'n di giri'},
              {id: 3, name: 'ore di lavoro'}
            ]
          },
          {
            id: 2,
            code: 12121,
            name: 'motore',
            sensors: [
              {id: 1, name: 'corrente assorbita'},
              {id: 2, name: 'n di giri'},
              {id: 3, name: 'ore di lavoro'}
            ]
          }
        ]
      }
    ];
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.idArea = params['id'];
    });
  }

}
