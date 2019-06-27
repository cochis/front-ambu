import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { SharedService } from './shared';
import { Localidad } from '../models/localidad';

@Injectable({
    providedIn: 'root'
})
export class localidadsService {
    public url = Global.url;
    public logueado: boolean;
    public localidad: Localidad;
    public token: String;
    public localidades: Localidad[];
    constructor(private _http: HttpClient,
        private _sharedService: SharedService) { }
    // : Observable<any> 
    getLocalidad(): Observable<any> {
        // const params = JSON.stringify(contacto);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        const slide = 'localidades/';
        return this._http.get(this.url + slide, { headers: headers });
    }
    getLocalidadesByClv(clvLocalidad): Observable<any> {
        // var params = JSON.stringify(empleado.rolEmpleado);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        const slide = 'localidades/' + clvLocalidad;
        return this._http.get(this.url + slide, { headers: headers });
    }
    getLocalidadesBySitio(clvSitio): Observable<any> {
        // var params = JSON.stringify(empleado.rolEmpleado);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        const slide = 'localidades/localidadesBySitio/' + clvSitio;
        return this._http.get(this.url + slide, { headers: headers });
    }

    activate(clvLocalidad, localidad): Observable<any> {
        const clv = clvLocalidad;
        const params = JSON.stringify(localidad);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        const slide = 'localidades/activar/' + clv;
        return this._http.put(this.url + slide, localidad, { headers: headers });


    }
    updateLocalidad(clvLocalidad, localidad): Observable<any> {


        const clv = clvLocalidad;
        const params = JSON.stringify(localidad);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        const slide = 'localidades/' + clv;
        return this._http.put(this.url + slide, localidad, { headers: headers });
    }

    desactivate(clvLocalidad, localidad): Observable<any> {
        const clv = clvLocalidad;
        const params = JSON.stringify(localidad);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        const slide = 'localidades/desactivar/' + clv;
        return this._http.put(this.url + slide, localidad, { headers: headers });


    }
    postLocalidad(localidad): Observable<any> {
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        const slide = 'localidades/';
        return this._http.post(this.url + slide, localidad, { headers: headers });
    }
}
