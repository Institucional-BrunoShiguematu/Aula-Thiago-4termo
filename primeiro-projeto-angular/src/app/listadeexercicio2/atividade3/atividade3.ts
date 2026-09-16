import { Component } from '@angular/core';

@Component({
  selector: 'app-atividade3',
  standalone: false,
  templateUrl: './atividade3.html',
  styleUrl: './atividade3.css',
})
export class Atividade3 {
  classificacao = 0;
  statusBotao: boolean = true

  add(){
    this.classificacao++;
    this.verificarStatusBotao();
  }
  minus(){
    this.classificacao = this.classificacao - 1;
    this.verificarStatusBotao();
  }

  verificarStatusBotao(){
    if(this.classificacao === 0){
      this.statusBotao = true;
    }else{
      this.statusBotao = false;
    }
  }


}
