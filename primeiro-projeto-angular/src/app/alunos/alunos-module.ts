import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing-module';
import { CadastroAlunos } from './cadastro-alunos/cadastro-alunos';

@NgModule({
  declarations: [CadastroAlunos],
  imports: [CommonModule, AlunosRoutingModule],
})
export class AlunosModule {}
