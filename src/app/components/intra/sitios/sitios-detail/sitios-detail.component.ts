import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { sitiosService } from '../../../../services/sitiosService.service';
import { Sitio } from '../../../../models/sitio';
@Component({
  selector: 'app-sitios-detail',
  templateUrl: './sitios-detail.component.html'
})
export class SitiosDetailComponent implements OnInit {

  public sitio: Sitio;
  public clvSitio: String;
  public cambioSitio: any;
  actualizar: Boolean = false;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _sitioService: sitiosService) {
    this.sitio = new Sitio(0, '', '', '', '', false, '', '', '');
  }


  
  ngOnInit() {
    this._route.params.subscribe(params => {
      this.clvSitio = params.clvSitio;
     console.log("entro  a detalle");
      this._sitioService.getSitioByClv(this.clvSitio).subscribe(response => {
        this.sitio = response;
      },
        error => {
          console.log(<any>error);

        });

    });
  }
  onSubmit(form) {
    this._sitioService.updateSitio(this.clvSitio, this.sitio).subscribe(response => {
      this._router.navigate(['/intra/sitios']);

    },
      error => {
        console.log(<any>error);
      });
  }
  confirmacion() {
    this.actualizar = true;

  }

}
