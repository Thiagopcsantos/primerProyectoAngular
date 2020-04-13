import { Component, OnInit } from '@angular/core';

interface Productos{
  nombre: string;
  stock: number;
  fabricante: string;
  fechaVence: Date;
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent implements OnInit {

nombres:Array<string> = ["Maria " , "Ana" , "Juan" , "Pedro"] 

productos: Array<Productos> = [
  {
    nombre : 'Arroz',
    stock : 20,
    fabricante : 'Camil',
    fechaVence : new Date('04/15/2020')
  },
  {
    nombre : 'Feijao',
    stock : 12,
    fabricante : 'Super Caldo',
    fechaVence : new Date('08/19/2020')
  },
  {
    nombre : 'Farofa',
    stock : 100,
    fabricante : 'YOKI',
    fechaVence : new Date('09/12/2024')
  }
]


  cargando: boolean = true;

  constructor() { }

  ngOnInit(): void {

    setTimeout(() =>{
      this.cargando = false
    }, 5000);
  }

 alternar(){
  this.cargando = !this.cargando;
}


}
