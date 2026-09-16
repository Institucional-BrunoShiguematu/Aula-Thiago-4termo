import { Component } from '@angular/core';

@Component({
  selector: 'app-atividade6',
  standalone: false,
  templateUrl: './atividade6.html',
  styleUrl: './atividade6.css',
})
export class Atividade6 {
  nomes: string[] = ['Bruno','Guilherme','Davi','Diego','Carlos']

  tirar(){
    this.nomes.pop()
  }
  removerTudo(){
    this.nomes = []
  }
  restaurar(){
    this.nomes = ['Bruno','Guilherme','Davi','Diego','Carlos']
  }




}
