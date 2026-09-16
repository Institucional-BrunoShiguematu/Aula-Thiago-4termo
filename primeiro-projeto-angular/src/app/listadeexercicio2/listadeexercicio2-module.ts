import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Listadeexercicio2RoutingModule } from './listadeexercicio2-routing-module';
import { Atividade1 } from './atividade1/atividade1';
import { Atividade2 } from './atividade2/atividade2';

@NgModule({
  declarations: [Atividade1, Atividade2],
  imports: [CommonModule, Listadeexercicio2RoutingModule],
})
export class Listadeexercicio2Module {}
