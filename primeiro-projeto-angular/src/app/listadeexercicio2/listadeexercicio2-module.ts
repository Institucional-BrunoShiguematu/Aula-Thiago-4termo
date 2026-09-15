import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Listadeexercicio2RoutingModule } from './listadeexercicio2-routing-module';
import { Atividade1 } from './atividade1/atividade1';

@NgModule({
  declarations: [Atividade1],
  imports: [CommonModule, Listadeexercicio2RoutingModule],
})
export class Listadeexercicio2Module {}
