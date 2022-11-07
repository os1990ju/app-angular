import { Injectable } from '@angular/core';
import { Client } from './client';
import { CLIENTES } from './clientes.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }
  getClientes(): Observable<Client[]>{
    return of(CLIENTES);
  }
}
