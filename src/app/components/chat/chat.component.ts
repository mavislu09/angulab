import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
public nombre: string;
public mensajes: string;
public year: number;
  constructor() { 
    this.nombre= "Laura";
    this.mensajes="Wenas como estan";
    this.year=2020;
  }/*Una funcion que se ejecuta de una vez, sin esperar */
  ngOnInit(): void { /*datos de manera instantanea */
  }
videojuego="Pacman"
calse= "lol"
getVideojuego(){
  return this.videojuego
}
imagenUrl="https://uvm.cdn-capital.digital/img/2019/11/anime-en-Netflix.jpg"
botonStatus= false;
/*true: desactivado
false: acyivado */
online= true;
/*True: se aplica la clase 
false no se aplica la clase */
}
