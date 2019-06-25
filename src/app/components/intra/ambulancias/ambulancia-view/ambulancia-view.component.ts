import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AmbulanciasService } from '../../../../services/ambulanciasService';
import { Ambulancia } from '../../../../models/ambulancia';
@Component({
  selector: 'app-ambulancia-view',
  templateUrl: './ambulancia-view.component.html'
})
export class AmbulanciaViewComponent implements OnInit {
  public ambulancia: Ambulancia;
  public clvAmbulancia: String;
  public cambioAmbulancia: any;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _ambulanciasService: AmbulanciasService) {
    this.ambulancia = new Ambulancia(0, '', '', '', '', '', '', false, '', '');
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.clvAmbulancia = params.clvAmbulancia;
      console.log(this.clvAmbulancia);
      this._ambulanciasService.getAmbulanciaByClv(this.clvAmbulancia).subscribe(response => {
        this.ambulancia = response;
        console.log(response);
      },
        error => {
          console.log(<any>error);
        });

    });

  }

}
