import { Component } from '@angular/core';

@Component({
  selector: 'app-atividade2',
  standalone: false,
  templateUrl: './atividade2.html',
  styleUrl: './atividade2.css',
})
export class Atividade2 {
  usuarioLogado: boolean = true
  deslogar: boolean = true


  alterarStatus(){
    this.usuarioLogado = !this.usuarioLogado;
  }
}
