import { Component, OnInit } from '@angular/core';
import { Sitio } from '../../../../models/sitio';
import { sitiosService } from '../../../../services/sitiosService.service';
import { SharedService } from '../../../../services/shared';
import { Localidad } from '../../../../models/localidad';
import { localidadsService } from '../../../../services/localidadesService.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EmpleadoService } from '../../../../services/empleado.service';
import { Empleado } from '../../../../models/empleado';

@Component({
  selector: 'app-localidad-view',
  templateUrl: './localidad-view.component.html'
})
export class LocalidadViewComponent implements OnInit {
  window: any;
  sitio: Sitio;
  sitios: Sitio[];
  localidad: Localidad;
  localidades: Localidad[];
  selectedLocalidades: Localidad[];
  empleado: Empleado;
  empleados: Empleado[];
  cols: any[];
  permisos: any;
  desAct: Boolean = false;
  cambio: any;
  clvLocalidad: any;
  actualizar: boolean = false;
  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _sitioService: sitiosService,
    private _sharedService: SharedService,
    private _localidadService: localidadsService,
    private _empleadoService: EmpleadoService) { }

  ngOnInit() {
    this._empleadoService.getEmpleados().subscribe(data=> {
      this.empleados= data;
    },
    error => {
      console.log(<any>error);
    });
    this._sitioService.getSitio().subscribe(data => {
      this.sitios = data;
      console.log(this.sitios);
    },
      error => {
        console.log(<any>error);
      });
    this._route.params.subscribe(params => {
      this.clvLocalidad = params.clvLocalidad;

      this._localidadService.getLocalidadesByClv(this.clvLocalidad).subscribe(response => {
        this.localidad = response;

      },
        error => {
          console.log(<any>error);

        });

    });
  }

}
