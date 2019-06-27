import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Empleado } from '../../../../models/empleado';
import { EmpleadoService } from '../../../../services/empleado.service';
import { RolesService } from '../../catalogos/services/roles.service';
import { Rol } from '../../../../models/rol';
import { SharedService } from '../../../../services/shared';
@Component({
  selector: 'app-empleado-join',
  templateUrl: './empleado-join.component.html'
})
export class EmpleadoJoinComponent implements OnInit {
  public empleado: Empleado;
  
  rol: Rol;
  roles: Rol[];
  msgs: any[];
  ingresar: Boolean = false;
  errores:boolean = false;
  er:any;
  constructor(private _empleadoService: EmpleadoService,
    private _rolesService: RolesService,
    private _sharedService: SharedService,
    private _route: ActivatedRoute,
    private _router: Router) {
    this.empleado = new Empleado(0, '', '', '', '', '', '', '', '', false, '', '', '', '');
    this.rol = new Rol(0, '', '', '', '', '', '', '');
    // this.value= new Confirmacion('',false);
  }

  ngOnInit() {

    this.empleado.clvEmpleado = this._sharedService.obtenerClave('EM', 8);
    console.log(this.empleado.clvEmpleado);
    this._rolesService.getRolesActivo().subscribe(response => {
      this.roles = response;

    },
      error => {
        console.log(<any>error);
      });
  }
  onSubmit(empleado) {
    console.log(empleado);
    this._empleadoService.create(empleado).subscribe(data => {
      console.log(data);
      if (data.error) {
        this.ingresar = false;
        this.errores = true;
        this.er = data.error;
        console.log(this.er);
       
      } else {
        this._router.navigate(['/intra/empleados']);
      }

    });
  }
  

  show() {
    this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
  }

  hide() {
    this.msgs = [];
  }
  confirmacion() {
    this.ingresar = true;

  }


}

