import { Component, OnInit } from '@angular/core';
import { RolesService } from '../../services/roles.service';
import { Rol } from '../../../../../models/rol';
import { SharedService } from '../../../../../services/shared';
import { Empleado } from '../../../../../models/empleado';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html'
})
export class RolesComponent implements OnInit {
  window: any;
  empleado: Empleado;
  rol: Rol;
  roles: Rol[];
  selectedRoles: Rol[];
  cols: any[];
  permisos: any;
  desAct: Boolean = false;
  cambio: any;

  constructor(private _rolService: RolesService,
    private _sharedService: SharedService) { }

  ngOnInit() {
    this.empleado = this._sharedService.getLocal('empleado');
    this._rolService.getRolByClvRol(this.empleado.rolEmpleado).subscribe(data => {
      this.permisos = JSON.parse(data.permisos);
      this.permisos = this.permisos.permisos;

      this._rolService.getRoles().subscribe(response => {
        this.roles = response;
        for (var i = 0; i < this.roles.length; i++) {
          this.permisos[i] = JSON.stringify(this.roles[i].permisos);
        }
      },
        error => {
          console.log(<any>error);

        });
    },
      error => {
        console.log(<any>error)
      });




    this.cols = [
      { field: 'idRol', header: 'Id' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'clvRol', header: 'Clave' },
      { field: 'activo', header: 'Activo' },
      { field: 'permisos', header: 'Permisos' },
      { field: 'tipo', header: 'Tipo' },
      { field: 'ultimaActualizacion', header: 'Ultima Modificacion' }
    ];
  }
  ngOnChanges() {

    this._rolService.getRoles().subscribe(data => {
      // console.log(data);
      this.roles = data;
    },
      err => {
        console.log(<any>err);
      });


  }
  cambiarEstado(cambio) {
    this.desAct = false;
    console.log(cambio);
    if (cambio.estado) {
      console.log(cambio.rol);
      this._rolService.activate(cambio.clvRol, cambio.rol).subscribe(data => {
        console.log(data);
        this.ngOnChanges();
      },
        error => {
          console.log(<any>error);
        });

    } else {
      this._rolService.desactivate(cambio.clvRol, cambio.rol).subscribe(data => {
        console.log(data);
        this.ngOnChanges();
      },
        error => {
          console.log(<any>error);
        });
    }

  }
  desactivar(estado, clvRol, rol) {
    this.cambio = {
      'estado': estado,
      'clvRol': clvRol,
      'rol': rol
    };

    console.log(this.cambio);
    // console.log(estado + '  ' + clvEmpleado);
    this.desAct = true;



  }

}
