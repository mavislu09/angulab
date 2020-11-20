import { Component } from '@angular/core';  /*Importamos un componente/angular*/
/*decorador, es un funcion que almacena caracteristicas y propiedades que va a tener el componente*/ 
@Component({
  selector: 'app-root',/*Nombre de la eqyiqueta que vamos a utilizar dentro de angular */
  templateUrl: './app.component.html',/*La ruta de nuestro html */
  styleUrls: ['./app.component.css'] /*La ruta de nuestro css */
})
/*Se exporta una clase, una funcion gigante que almacena peqeñas funciones */
export class AppComponent {
  title = 'front';
  public colegio = "ISPA";
  
}
