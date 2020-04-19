import { Component, OnInit } from '@angular/core';

interface Productos{
  nombre: string;
  stock: number;
  fabricante: string;
  fechaVence: Date;
  esImportante: boolean;
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent implements OnInit {

nombres:Array<string> = ["Maria " , "Ana" , "Juan" , "Pedro"] 

pestana: string=''

productos: Array<Productos> = [
  {
    nombre : 'Arroz',
    stock : 20,
    fabricante : 'Camil',
    fechaVence : new Date('04/15/2020'),
    esImportante : true
  },
  {
    nombre : 'Feijao',
    stock : 12,
    fabricante : 'Super Caldo',
    fechaVence : new Date('08/19/2020'),
    esImportante : false

  },
  {
    nombre : 'Farofa',
    stock : 100,
    fabricante : 'YOKI',
    fechaVence : new Date('09/12/2024'),
    esImportante : true
  }
]


  cargando: boolean = true;

mostrarCuadrado:boolean = false;



  constructor() { }

  ngOnInit(): void {

    setTimeout(() =>{
      this.cargando = false
    }, 5000);
  }

 alternar(){
  this.cargando = !this.cargando;
}

cambiarPestana(pestana:string) {
  this.pestana = pestana;
}

alternarFondo(){
  this.mostrarCuadrado = !this.mostrarCuadrado
}

}
