import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroAlunos } from './cadastro-alunos/cadastro-alunos';

const routes: Routes = [
  {path: 'cadastro-alunos', component: CadastroAlunos}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunosRoutingModule {}
