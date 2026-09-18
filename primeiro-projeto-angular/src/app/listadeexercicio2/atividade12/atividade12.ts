import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-atividade12',
  standalone: false,
  templateUrl: './atividade12.html',
  styleUrl: './atividade12.css'
})
export class Atividade12 {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', quantidade: 5 },
    { id: 2, nome: 'Mouse', quantidade: 12 }
  ];

  nome: string = '';
  quantidade: number = 0;
  mensagem: string = '';
  proximoId: number = 3;

  cadastrar() {
    if (this.nome.trim() === '') {
      this.mensagem = 'Informe o nome do produto.';
      return;
    }

    if (this.quantidade === null || this.quantidade < 0) {
      this.mensagem = 'A quantidade deve ser igual ou maior que zero.';
      return;
    }

    this.produtos.push({
      id: this.proximoId,
      nome: this.nome,
      quantidade: this.quantidade
    });

    this.proximoId++;
    this.nome = '';
    this.quantidade = 0;
    this.mensagem = '';
  }

  excluir(produto: Produto) {
    const posicao = this.produtos.indexOf(produto);
    this.produtos.splice(posicao, 1);
  }
}