import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { SharedService } from './shared';
import { Cliente } from '../models/cliente';

@Injectable({
    providedIn: 'root'
})
export class clientesService {
    public url = Global.url;
    public logueado: boolean;
    public cliente: Cliente;
    public token: String;
    public clientes: Cliente[];
    constructor(private _http: HttpClient,
        private _sharedService: SharedService) { }
    // : Observable<any> 
    getClientes(): Observable<any> {
        // const params = JSON.stringify(contacto);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        const slide = 'clientes/';
        console.log(this.url + slide);
        return this._http.get(this.url + slide, { headers: headers });
    }
    getClientesActivo(): Observable<any> {
        // const params = JSON.stringify(contacto);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        const slide = 'clientes/activo';
        console.log(this.url + slide);
        return this._http.get(this.url + slide, { headers: headers });
    }
    getClienteByClv(clvCliente): Observable<any> {
        // var params = JSON.stringify(empleado.rolEmpleado);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        const slide = 'clientes/' + clvCliente;
        return this._http.get(this.url + slide, { headers: headers });
    }

    activate(clvCliente, cliente): Observable<any> {
        const clv = clvCliente;
        const params = JSON.stringify(cliente);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        const slide = 'clientes/activar/' + clv;
        return this._http.put(this.url + slide, cliente, { headers: headers });


    }
    updateCliente(clvCliente, cliente): Observable<any> {


        const clv = clvCliente;
        const params = JSON.stringify(cliente);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        const slide = 'clientes/' + clv;
        return this._http.put(this.url + slide, cliente, { headers: headers });
    }

    desactivate(clvCliente, cliente): Observable<any> {
        const clv = clvCliente;
        const params = JSON.stringify(cliente);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        const slide = 'clientes/desactivar/' + clv;
        return this._http.put(this.url + slide, cliente, { headers: headers });


    }
    postCliente(cliente): Observable<any> {
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        const slide = 'clientes/';
        return this._http.post(this.url + slide, cliente, { headers: headers });
    }
}
