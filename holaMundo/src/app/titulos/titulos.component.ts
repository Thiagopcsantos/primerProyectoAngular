import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {
  nombre:string = "Maria"

  inputNuevo: string = "hola desde un input"

  correo: string = ""
  password: string = ""

  
  constructor() { }

  ngOnInit(): void {
  }


  ingresar(){
    console.log(this.correo)
    console.log(this.password)
  }


}
