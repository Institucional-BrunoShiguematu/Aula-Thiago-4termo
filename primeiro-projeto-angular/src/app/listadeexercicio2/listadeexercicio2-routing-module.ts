import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Atividade1 } from './atividade1/atividade1';
import { Atividade2 } from './atividade2/atividade2';

const routes: Routes = [
   {path: 'atividade1', component: Atividade1},
   {path: 'atividade2', component: Atividade2}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listadeexercicio2RoutingModule {}
