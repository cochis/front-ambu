import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { clientesService } from 'src/app/services/clientesService.service';
import { Cliente } from '../../../../models/cliente';

@Component({
  selector: 'app-cliente-view',
  templateUrl: './cliente-view.component.html'
})
export class ClienteViewComponent implements OnInit {

  public cliente: Cliente;
  public clvCliente: String;
  public cambioCliente: any;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _clienteService: clientesService) {
    this.cliente = new Cliente(0, '', '', '', '', false, '', '', '');
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

}
