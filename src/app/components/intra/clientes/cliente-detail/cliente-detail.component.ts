import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { clientesService } from '../../../../services/clientesService.service';
import { Cliente } from '../../../../models/cliente';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html'
})
export class ClienteDetailComponent implements OnInit {

  public cliente: Cliente;
  public clvCliente: String;
  public cambioCliente: any;
  actualizar: Boolean = false;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _clienteService: clientesService) {
    this.cliente = new Cliente(0, '', '', '', '', false, '',  '', '');
  }


  ngOnInit() {
    this._route.params.subscribe(params => {
      this.clvCliente = params.clvCliente;
      console.log(this.clvCliente);
      this._clienteService.getClienteByClv(this.clvCliente).subscribe(response => {
        this.cliente = response;
        console.log(response);
      },
        error => {
          console.log(<any>error);
        });

    });
  }
  onSubmit(form) {
    this._clienteService.updateCliente(this.clvCliente, this.cliente).subscribe(response => {
      console.log(response);
      this._router.navigate(['/intra/clientes']);

    },
      error => {
        console.log(<any>error);
      });
  }
  confirmacion() {
    this.actualizar = true;

  }

}
