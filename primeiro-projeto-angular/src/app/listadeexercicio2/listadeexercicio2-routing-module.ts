import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Atividade1 } from './atividade1/atividade1';
import { Atividade2 } from './atividade2/atividade2';
import { Atividade3 } from './atividade3/atividade3';
import { Atividade4 } from './atividade4/atividade4';
import { Atividade5 } from './atividade5/atividade5';
import { Atividade6 } from './atividade6/atividade6';
import { Atividade7 } from './atividade7/atividade7';
import { Atividade8 } from './atividade8/atividade8';
import { Atividade9 } from './atividade9/atividade9';


const routes: Routes = [
   {path: 'atividade1', component: Atividade1},
   {path: 'atividade2', component: Atividade2},
   {path: 'atividade3', component: Atividade3},
   {path: 'atividade4', component: Atividade4},
   {path: 'atividade5', component: Atividade5},
   {path: 'atividade6', component: Atividade6},
   {path: 'atividade7', component: Atividade7},
   {path: 'atividade8', component: Atividade8},
   {path: 'atividade9', component: Atividade9},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listadeexercicio2RoutingModule {}
