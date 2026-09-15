import { Component } from '@angular/core';

@Component({
  selector: 'app-atividade6',
  standalone: false,
  templateUrl: './atividade6.html',
  styleUrl: './atividade6.css',
})
export class Atividade6 {
  contador = 0;
  botaoValido: boolean = true

  add(){
    this.contador =  this.contador + 1;
    this.verificarBotao();
  }
  minus(){
    this.contador =  this.contador - 1;
    this.verificarBotao();
  }

  verificarBotao(){
  if (this.contador === 0) {
    this.botaoValido = true
  }else {
    this.botaoValido = false
  }
}

}
