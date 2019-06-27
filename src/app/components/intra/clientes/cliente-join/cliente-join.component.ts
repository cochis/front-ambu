import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { SharedService } from '../../../../services/shared';
import { clientesService } from '../../../../services/clientesService.service';
import { Cliente } from '../../../../models/cliente';

@Component({
  selector: 'app-cliente-join',
  templateUrl: './cliente-join.component.html'
})
export class ClienteJoinComponent implements OnInit {

  public cliente: Cliente;
  msgs: any[];
  ingresar: Boolean = false;
  errores:boolean = false;
  er:any;
  constructor(private _clienteService: clientesService,
    private _sharedService: SharedService,
    private _route: ActivatedRoute,
    private _router: Router) {
    this.cliente = new Cliente(0, '', '', '', '', false, '', '', '');
  }

  ngOnInit() {
    this.cliente.clvCliente = this._sharedService.obtenerClave('CL', 5);
  }
  onSubmit(form) {
    this._clienteService.postCliente(this.cliente).subscribe(data => {
      if (data.error) {
        this.ingresar = false;  
        this.errores = true;
        this.er = data.error;
        console.log(this.er);
       
      } else {
        this._router.navigate(['/intra/clientes']);
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
