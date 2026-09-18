import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  disponivel: boolean;
}

@Component({
  selector: 'app-atividade11',
  standalone: false,
  templateUrl: './atividade11.html',
  styleUrl: './atividade11.css',
})
export class Atividade11 {

  somenteDisponiveis: boolean = false;

  produtos: Produto[] = [
    {id: 1, nome: 'Teclado mecânico', preco: 290, quantidade: 0, disponivel: true},
    {id: 2, nome: 'Monitor', preco: 500, quantidade: 3, disponivel: true},
    {id: 3, nome: 'Mouse Pad', preco: 120, quantidade: 0, disponivel: true},
    {id: 4, nome: 'Headset', preco: 350, quantidade: 6, disponivel: true},
    {id: 5, nome: 'Mouse', preco: 150, quantidade: 10, disponivel: true}
  ];

  alterarVisibilidade(){
    this.somenteDisponiveis = !this.somenteDisponiveis
  }
}
