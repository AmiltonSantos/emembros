import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    TableModule
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {

  membros = [
    { nome: 'João Silva', email: 'joao@email.com', status: 'Ativo' },
    { nome: 'Maria Souza', email: 'maria@email.com', status: 'Ativo' },
    { nome: 'Pedro Lima', email: 'pedro@email.com', status: 'Inativo' }
  ];

}