import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }
clase=["Laura",1001,"laurajimenacortessoto@gmail.com",123456];
getClase(){
  return this.clase
}
}
