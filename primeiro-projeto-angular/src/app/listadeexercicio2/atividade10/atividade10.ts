import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-atividade10',
  standalone: false,
  templateUrl: './atividade10.html',
  styleUrl: './atividade10.css',
})
export class Atividade10 {
  produtos: Produto[] = [
    {id: 1, nome: 'Teclado mecânico', preco: 290, quantidade: 0, promocao: true},
    {id: 2, nome: 'Monitor', preco: 500, quantidade: 3, promocao: false},
    {id: 3, nome: 'Mouse Pad', preco: 120, quantidade: 5, promocao: true},
    {id: 4, nome: 'Headset', preco: 350, quantidade: 6, promocao: true},
    {id: 5, nome: 'Mouse', preco: 150, quantidade: 10, promocao: true}
  ];

  calcularTotal(produto: Produto): number {
    return produto.preco * produto.quantidade;
  }

  alterarPromocao(produto: Produto){
    produto.promocao = !produto.promocao
  }
}
