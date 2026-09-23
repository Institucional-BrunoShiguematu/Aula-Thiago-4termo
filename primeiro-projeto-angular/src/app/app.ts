import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('primeiro-projeto-angular');

  cabecalhoLoja = 'Loja Angular';

  nomeProduto1 = 'Teclado'
  valorProduto1 = 220
  disponivelProduto1 = true

  nomeProduto2 = 'Monitor'
  valorProduto2 = 550
  disponivelProduto2 = true

  nomeProduto3 = 'Mouse'
  valorProduto3 = 170
  disponivelProduto3 = false

}
