import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { AmbulanciasService } from '../../../../services/ambulanciasService';
import { SharedService } from '../../../../services/shared';
import { Ambulancia } from '../../../../models/ambulancia';

@Component({
  selector: 'app-ambulancia-join',
  templateUrl: './ambulancia-join.component.html'
})
export class AmbulanciaJoinComponent implements OnInit {
  public ambulancia: Ambulancia;
  msgs: any[];
  ingresar: Boolean = false;
  errores:boolean = false;
  er:any;
  constructor(private _ambulanciasService: AmbulanciasService,
    private _sharedService: SharedService,
    private _route: ActivatedRoute,
    private _router: Router) {
    this.ambulancia = new Ambulancia(0, '', '', '', '', '', '', false, '', '');
  }

  ngOnInit() {
    this.ambulancia.clvAmbulancia = this._sharedService.obtenerClave('AM', 5);
  }
  onSubmit(form) {
    this._ambulanciasService.postAmbulancia(this.ambulancia).subscribe(data => {
      if (data.error) {
        this.ingresar = false;  
        this.errores = true;
        this.er = data.error;
        console.log(this.er);
       
      } else {
        this._router.navigate(['/intra/ambulancias']);
      }
     
    },
      error => {
        console.log(<any>error);
      });


  }
  show(mes) {
    this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
  }
  hide() {
    this.msgs = [];
  }
  confirmacion() {
    this.ingresar = true;

  }

}
