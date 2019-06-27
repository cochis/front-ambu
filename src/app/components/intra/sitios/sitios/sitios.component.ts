import { Component, OnInit, OnChanges } from '@angular/core';
import { Sitio } from '../../../../models/sitio';
import { sitiosService } from '../../../../services/sitiosService.service';
import { SharedService } from '../../../../services/shared';
@Component({
  selector: 'app-sitios',
  templateUrl: './sitios.component.html'
})
export class SitiosComponent implements OnInit, OnChanges {

  window: any;
  sitio: Sitio;
  sitios: Sitio[];
  selectedSitios: Sitio[];
  cols: any[];
  permisos: any;
  desAct: Boolean = false;
  cambio: any;
  constructor(private _sitioService: sitiosService,
    private _sharedService: SharedService) { }

  ngOnInit() {
    this._sitioService.getSitio().subscribe(data => {
      this.sitios = data;
    },
      error => {
        console.log(<any>error);
      });
    this.cols = [
      { field: 'idSitio', header: 'ID' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'clvSitio', header: 'Sitio' },
      { field: 'direccion', header: 'Direccion' },
      { field: 'telefono', header: 'telefono' },
      { field: 'activo', header: 'activo' },
      { field: 'fechaCreacion', header: 'Fecha de creación' },
      { field: 'ultimaActualizacion', header: 'Ultima Actualizacion' },
      { field: 'modifico', header: 'Modifico' },
    ];
  }
  ngOnChanges() {
    this._sitioService.getSitio().subscribe(data => {
      // console.log(data);
      this.sitios = data;
    },
      err => {
        console.log(<any>err);
      });


  }
  cambiarEstado(cambio) {
    this.desAct = false;
    console.log(cambio);
    if (cambio.estado) {
      this._sitioService.activate(cambio.clvSitio, cambio.sitio).subscribe(data => {
        this.ngOnChanges();
      },
        error => {
          console.log(<any>error);
        });

    } else {
      this._sitioService.desactivate(cambio.clvSitio, cambio.sitio).subscribe(data => {
        this.ngOnChanges();
      },
        error => {
          console.log(<any>error);
        });
    }

  }
  desactivar(estado, clvSitio, sitio) {
    this.cambio = {
      'estado': estado,
      'clvSitio': clvSitio,
      'sitio': sitio
    };
    console.log(this.cambio);
    this.desAct = true;
  }

}
