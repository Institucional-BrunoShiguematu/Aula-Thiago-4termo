import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Listadeexercicio2RoutingModule } from './listadeexercicio2-routing-module';
import { Atividade1 } from './atividade1/atividade1';
import { Atividade2 } from './atividade2/atividade2';
import { Atividade3 } from './atividade3/atividade3';
import { Atividade4 } from './atividade4/atividade4';
import { Atividade5 } from './atividade5/atividade5';
import { Atividade6 } from './atividade6/atividade6';
import { Atividade7 } from './atividade7/atividade7';
import { Atividade8 } from './atividade8/atividade8';
import { Atividade9 } from './atividade9/atividade9';
import { Atividade10 } from './atividade10/atividade10';

@NgModule({
  declarations: [
    Atividade1,
    Atividade2,
    Atividade3,
    Atividade4,
    Atividade5,
    Atividade6,
    Atividade7,
    Atividade8,
    Atividade9,
    Atividade10,
  ],
  imports: [CommonModule, Listadeexercicio2RoutingModule],
})
export class Listadeexercicio2Module {}
