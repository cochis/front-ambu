import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { SharedService } from './shared';
import { Sitio } from '../models/sitio';

@Injectable({
    providedIn: 'root'
})
export class sitiosService {
    public url = Global.url;
    public logueado: boolean;
    public sitio: Sitio;
    public token: String;
    public sitios: Sitio[];
    constructor(private _http: HttpClient,
        private _sharedService: SharedService) { }
    // : Observable<any> 
    getSitio(): Observable<any> {
        // const params = JSON.stringify(contacto);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        const slide = 'sitios/';
        return this._http.get(this.url + slide, { headers: headers });
    }
    getSitioActivo(): Observable<any> {
        // const params = JSON.stringify(contacto);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        const slide = 'sitios/activo';
        return this._http.get(this.url + slide, { headers: headers });
    }
    getSitioByClv(clvSitio): Observable<any> {
        // var params = JSON.stringify(empleado.rolEmpleado);
        console.log('entro a getclave');
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        const slide = 'sitios/' + clvSitio;
        console.log(this.url + slide);
        return this._http.get(this.url + slide, { headers: headers });
    }

    activate(clvSitio, sitio): Observable<any> {
        const clv = clvSitio;
        const params = JSON.stringify(sitio);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        const slide = 'sitios/activar/' + clv;
        return this._http.put(this.url + slide, sitio, { headers: headers });


    }
    updateSitio(clvSitio, sitio): Observable<any> {


        const clv = clvSitio;
        const params = JSON.stringify(sitio);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        const slide = 'sitios/' + clv;
        console.log(this.url + slide);
        return this._http.put(this.url + slide, sitio, { headers: headers });
    }

    desactivate(clvSitio, sitio): Observable<any> {
        const clv = clvSitio;
        const params = JSON.stringify(sitio);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        const slide = 'sitios/desactivar/' + clv;
        return this._http.put(this.url + slide, sitio, { headers: headers });


    }
    postSitio(sitio): Observable<any> {
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        const slide = 'sitios/';
        return this._http.post(this.url + slide, sitio, { headers: headers });
    }
}
