import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; // Importa RouterModule para routing
import { routes } from './app.routes'; // Rutas definidas en otro archivo

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule, // Requerido para cualquier aplicación Angular
    RouterModule.forRoot(routes) // Configura el enrutamiento
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
