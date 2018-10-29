import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NavbarService {

private data = {
  title:'asdasd',
  username:'Andres Lopez',
  permission : [
    {
      id:1,
      name:'Nueva Cotizacion'
    },
    {
      id:2,
      name:'Hacer PQR'
    },
    {
      id:3,
      name:'Buscar Inventario'
    }
  ]
}
private restUrl:string = "";

  constructor(private http: HttpClient) { 
    console.log("Este servicio esta listo para usar");
  }

  getRol(){
    console.log(this.data)
    return this.data;
  }

}
