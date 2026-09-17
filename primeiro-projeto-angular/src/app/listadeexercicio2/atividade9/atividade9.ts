import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-atividade9',
  standalone: false,
  templateUrl: './atividade9.html',
  styleUrl: './atividade9.css',
})

export class Atividade9 {
  produtos: Produto[] = [
    {id: 1, nome: 'Teclado mecânico', preco: 290, quantidade: 0},
    {id: 2, nome: 'Monitor', preco: 500, quantidade: 3},
    {id: 3, nome: 'Mouse Pad', preco: 120, quantidade: 5},
    {id: 4, nome: 'Headset', preco: 350, quantidade: 6},
    {id: 5, nome: 'Mouse', preco: 150, quantidade: 10}
  ];

  calcularTotal(produto: Produto): number {
    return produto.preco * produto.quantidade;
  }

  classificar(quantidade: number): string {
    if (quantidade === 0) {
      return 'Sem Estoque';
    } else if (quantidade <= 5) {
      return 'Estoque Baixo';
    } else {
      return 'Estoque Alto';
    }
  }
}
