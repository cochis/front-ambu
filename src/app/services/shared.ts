import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  getLocal(key: any) {
    // const item = localStorage.getItem(key);
    const item = JSON.parse(sessionStorage.getItem(key));
    return item;
  }

  setLocal(key: any, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
  getSession(key: any) {
    const item = JSON.parse(sessionStorage.getItem(key));
    return item;
  }

  setSession(key: any, value: any) {
    console.log('set ' + key);
    sessionStorage.setItem(key, JSON.stringify(value));
  }
  obtenerClave(tipo, cantidad) {

    var hoy = new Date();
    var yy = hoy.getFullYear();
    var mm = hoy.getMonth() + 1;
    var year = yy.toString();
    year = year.substr(2, 4);
    var mounth = mm.toString();
    if (mounth.length == 1) {
      mounth = '0' + mounth;
    }
    var clv = tipo;

    var next = 0;
    var rdm = this.ramdom();


    if (cantidad == 5) {
      var busqueda =  clv + '-'+ rdm.toUpperCase();
    
    } else  {
      var busqueda = year + mounth + clv + rdm.toUpperCase();
    }


    return busqueda;

  }

  ramdom() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 2; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
