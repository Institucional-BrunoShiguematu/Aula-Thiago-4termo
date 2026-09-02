import { Component } from '@angular/core';

@Component({
  selector: 'app-atividade5',
  standalone: false,
  templateUrl: './atividade5.html',
  styleUrl: './atividade5.css',
})
export class Atividade5 {
  curtidas = 0

  addCurtida(){
    this.curtidas = this.curtidas + 1;
  }
  reset(){
    this.curtidas = 0
  }
}
