import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ex1RoutingModule } from './ex1-routing-module';
import { Atividade1 } from './atividade1/atividade1';
import { Atividade2 } from './atividade2/atividade2';
import { Atividade3 } from './atividade3/atividade3';
import { Atividade4 } from './atividade4/atividade4';

@NgModule({
  declarations: [Atividade1, Atividade2, Atividade3, Atividade4],
  imports: [CommonModule, Ex1RoutingModule],
})
export class Ex1Module {}
