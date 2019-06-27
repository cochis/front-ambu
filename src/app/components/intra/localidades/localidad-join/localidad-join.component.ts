import { Component, OnInit } from '@angular/core';
import { Sitio } from '../../../../models/sitio';
import { sitiosService } from '../../../../services/sitiosService.service';
import { SharedService } from '../../../../services/shared';
import { Localidad } from '../../../../models/localidad';
import { localidadsService } from '../../../../services/localidadesService.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Empleado } from '../../../../models/empleado';
import { EmpleadoService } from '../../../../services/empleado.service';

@Component({
  selector: 'app-localidad-join',
  templateUrl: './localidad-join.component.html'
})
export class LocalidadJoinComponent implements OnInit {
  window: any;
  sitio: Sitio;
  sitios: Sitio[];
  localidad: Localidad;
  localidades: Localidad[];
  empleado: Empleado;
  empleados: Empleado[];
  selectedLocalidades: Localidad[];
  cols: any[];
  permisos: any;
  desAct: Boolean = false;
  cambio: any;
  msgs: any[];
  ingresar: Boolean = false;
  errores:boolean = false;
  er:any;
  constructor(private _sitioService: sitiosService,
    private _sharedService: SharedService,
    private _localidadService: localidadsService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _empleadoService: EmpleadoService) {
    this.sitio = new Sitio(0, '', '', '', '', false, '', '', '');
    this.localidad = new Localidad(0, '', '', '', '', '', false, '', '', '', '');
  }

  ngOnInit() {
    this.localidad.clvLocalidad = this._sharedService.obtenerClave('LC', 5);
    this._empleadoService.getEmpleadosActivo().subscribe(data=> {
    this.empleados = data;
    },
    error=> {
      console.log(<any>error);
    });
    this._sitioService.getSitioActivo().subscribe(data => {
      this.sitios = data;
      console.log(this.sitios);
    },
      error => {
        console.log(<any>error);
      });
  }
  onSubmit(form) {
    this._localidadService.postLocalidad(this.localidad).subscribe(data => {
      if (data.error) {
        this.ingresar = false;  
        this.errores = true;
        this.er = data.error;
        console.log(this.er);
       
      } else {
        this._router.navigate(['/intra/localidades']);
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
