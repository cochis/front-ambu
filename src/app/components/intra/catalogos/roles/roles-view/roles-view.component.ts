import { Component, OnInit } from '@angular/core';
import { Rol } from '../../../../../models/rol';
import { RolesService } from '../../services/roles.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-roles-view',
  templateUrl: './roles-view.component.html'
})
export class RolesViewComponent implements OnInit {
  public rol: Rol;
  public clvRol:String;
  public cambioRol: any;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
     private _rolesService: RolesService) {
    this.rol = new Rol(0, '', '', '', '', '', '', '');
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.clvRol = params.clvRol;
      console.log(this.clvRol);
      this._rolesService.getRolByClvRol(this.clvRol).subscribe( response => {
        this.rol = response;
        console.log(this.rol.permisos);
       

      },
      error => {
  console.log(<any> error);
      });
      
      
    });
  }
}
