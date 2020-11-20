/*MODULO: es donde llamamos y ejecutamos las librerias y componentes de nuestro proyecto
COMPONENTE: html con css y un ts */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], /* Servicios, creamo sel modem*/ 
  bootstrap: [AppComponent]
})
export class AppModule { }
