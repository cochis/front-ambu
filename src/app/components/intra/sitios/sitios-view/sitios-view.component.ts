import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { sitiosService } from 'src/app/services/sitiosService.service';
import { Sitio } from '../../../../models/sitio';
@Component({
  selector: 'app-sitios-view',
  templateUrl: './sitios-view.component.html'
})
export class SitiosViewComponent implements OnInit {

  public sitio: Sitio;
  public clvSitio: String;
  public cambioSitio: any;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _sitioService: sitiosService) {
    this.sitio = new Sitio(0, '', '', '', '', false, '', '', '');
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.clvSitio = params.clvSitio;
      console.log(this.clvSitio);
      this._sitioService.getSitioByClv(this.clvSitio).subscribe(response => {
        this.sitio = response;
        console.log(response);
      },
        error => {
          console.log(<any>error);
        });

    })

  }
}
