import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ex1RoutingModule } from './ex1-routing-module';
import { Atividade1 } from './atividade1/atividade1';

@NgModule({
  declarations: [Atividade1],
  imports: [CommonModule, Ex1RoutingModule],
})
export class Ex1Module {}
