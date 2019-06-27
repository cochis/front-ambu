import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { SharedService } from '../../../../services/shared';
import { sitiosService } from '../../../../services/sitiosService.service';
import { Sitio } from '../../../../models/sitio';
@Component({
  selector: 'app-sitios-join',
  templateUrl: './sitios-join.component.html'
})
export class SitiosJoinComponent implements OnInit {


  public sitio: Sitio;
  msgs: any[];
  ingresar: Boolean = false;
  errores:boolean = false;
  er:any;
  constructor(private _sitioService: sitiosService,
    private _sharedService: SharedService,
    private _route: ActivatedRoute,
    private _router: Router) {
    this.sitio = new Sitio(0, '', '', '', '', false, '', '', '');
  }

  ngOnInit() {
    this.sitio.clvSitio = this._sharedService.obtenerClave('ST', 5);
  }
  onSubmit(form) {
    this._sitioService.postSitio(this.sitio).subscribe(data => {
      if (data.error) {
        this.ingresar = false;  
        this.errores = true;
        this.er = data.error;
        console.log(this.er);
       
      } else {
        this._router.navigate(['/intra/sitios']);
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
