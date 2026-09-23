import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Cabecalho } from './cabecalho/cabecalho';
import { Cardproduto } from './cardproduto/cardproduto';

@NgModule({
  declarations: [App, Cabecalho, Cardproduto],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
