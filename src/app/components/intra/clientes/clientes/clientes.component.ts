import { Component, OnInit, OnChanges } from '@angular/core';
import { Cliente } from '../../../../models/cliente';
import { clientesService } from '../../../../services/clientesService.service';
import { SharedService } from '../../../../services/shared';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit, OnChanges {
  window: any;
  cliente: Cliente;
  clientes: Cliente[];
  selectedClientes: Cliente[];
  cols: any[];
  permisos: any;
  desAct: Boolean = false;
  cambio: any;
  constructor(private _clienteService: clientesService,
    private _sharedService: SharedService) { }
  ngOnInit() {
    this._clienteService.getClientes().subscribe(data => {
      this.clientes = data;
    },
      error => {
        console.log(<any>error);
      });
    this.cols = [
      { field: 'idCLiente', header: 'ID' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'clvCliente', header: 'Cliente' },
      { field: 'direccion', header: 'Direccion' },
      { field: 'telefono', header: 'telefono' },
      { field: 'activo', header: 'activo' },
      { field: 'fechaCreacion', header: 'Fecha de creación' },
      { field: 'ultimaActualizacion', header: 'Ultima Actualizacion' },
      { field: 'modifico', header: 'Modifico' },
    ];
  }

  ngOnChanges() {
    this._clienteService.getClientes().subscribe(data => {
      // console.log(data);
      this.clientes = data;
    },
      err => {
        console.log(<any>err);
      });


  }
  cambiarEstado(cambio) {
    this.desAct = false;
    console.log(cambio);
    if (cambio.estado) {
      this._clienteService.activate(cambio.clvCliente, cambio.cliente).subscribe(data => {
        this.ngOnChanges();
      },
        error => {
          console.log(<any>error);
        });

    } else {
      this._clienteService.desactivate(cambio.clvCliente, cambio.cliente).subscribe(data => {
        this.ngOnChanges();
      },
        error => {
          console.log(<any>error);
        });
    }

  }
  desactivar(estado, clvCliente, cliente) {
    this.cambio = {
      'estado': estado,
      'clvCliente': clvCliente,
      'cliente': cliente
    };
    console.log(this.cambio);
    this.desAct = true;
  }
}
