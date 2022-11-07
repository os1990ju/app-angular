import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'

})
export class ClientesComponent implements OnInit {
  clientes: Client[];
  constructor(private clientService: ClienteService) { }

  ngOnInit(): void {
    this.clientService.getClientes().subscribe(
      clientes=>this.clientes=clientes
    )
  }

}
