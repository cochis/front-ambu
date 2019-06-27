import { Component, OnInit, OnChanges } from '@angular/core';
import { Sitio } from '../../../../models/sitio';
import { sitiosService } from '../../../../services/sitiosService.service';
import { SharedService } from '../../../../services/shared';
import { Localidad } from '../../../../models/localidad';
import { localidadsService } from '../../../../services/localidadesService.service';
import { Empleado } from '../../../../models/empleado';
import { EmpleadoService } from '../../../../services/empleado.service';

@Component({
  selector: 'app-localidades',
  templateUrl: './localidades.component.html'
})
export class LocalidadesComponent implements OnInit, OnChanges {

  window: any;
  sitio: Sitio;
  sitios: Sitio[];
  localidad: Localidad;
  localidades: Localidad[];
  selectedLocalidades: Localidad[];
  cols: any[];
  permisos: any;
  desAct: Boolean = false;
  cambio: any;
  empleado: Empleado;
  empleados: Empleado[];
  constructor(private _sitioService: sitiosService,
    private _sharedService: SharedService,
    private _localidadService: localidadsService,
    private _empleadoService: EmpleadoService) { }

  ngOnInit() {

    this._empleadoService.getEmpleados().subscribe(data => {
      this.empleados = data;
    },
      error => {
        console.log(<any>error);
      });
    this._sitioService.getSitio().subscribe(data => {
      this.sitios = data;
      console.log(this.sitios);
      this._localidadService.getLocalidad().subscribe(response => {
        this.localidades = response;
        console.log(this.localidades);
      },
        error => {
          console.log(<any>error);
        });
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
    this._localidadService.getLocalidad().subscribe(data => {
      // console.log(data);
      this.localidades = data;
    },
      err => {
        console.log(<any>err);
      });


  }
  cambiarEstado(cambio) {
    this.desAct = false;
    console.log(cambio);
    if (cambio.estado) {
      this._localidadService.activate(cambio.clvLocalidad, cambio.localidad).subscribe(data => {
        console.log(data);
        this.ngOnChanges();
      },
        error => {
          console.log(<any>error);
        });

    } else {
      this._localidadService.desactivate(cambio.clvLocalidad, cambio.localidad).subscribe(data => {
        this.ngOnChanges();
      },
        error => {
          console.log(<any>error);
        });
    }

  }
  desactivar(estado, clvLocalidad, localidad) {
    this.cambio = {
      'estado': estado,
      'clvLocalidad': clvLocalidad,
      'localidad': localidad
    };
    console.log(this.cambio);
    this.desAct = true;
  }

}
