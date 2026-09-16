import { Component } from '@angular/core';

@Component({
  selector: 'app-atividade4',
  standalone: false,
  templateUrl: './atividade4.html',
  styleUrl: './atividade4.css',
})
export class Atividade4 {
  produto = 'Teclado'
  estoque = 0
  statusBotao: boolean = true

  add(){
    this.estoque++
   this.verificacao()
  }
  minus(){
    this.estoque--
    this.verificacao()
  }
 
  verificacao(){
    if(this.estoque === 0){
      this.statusBotao = true
    }else {
      this.statusBotao = false
    }
  }


}
