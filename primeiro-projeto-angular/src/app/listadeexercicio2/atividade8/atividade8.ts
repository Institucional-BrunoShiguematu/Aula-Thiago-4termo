import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-atividade8',
  standalone: false,
  templateUrl: './atividade8.html',
  styleUrl: './atividade8.css',
})

export class Atividade8 {
  produtos: Produto[] = [
    {id: 1, nome: 'Teclado mecânico', preco: 290, quantidade: 12},
    {id: 2, nome: 'Monitor', preco: 500, quantidade: 20},
    {id: 3, nome: 'Mouse Pad', preco: 120, quantidade: 25},
    {id: 4, nome: 'Headset', preco: 350, quantidade: 10},
    {id: 5, nome: 'Mouse', preco: 150, quantidade: 10}
  ];

  calcularTotal(produto: Produto): number {
    return produto.preco * produto.quantidade;
  }
}
