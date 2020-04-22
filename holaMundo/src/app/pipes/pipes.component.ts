import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {


  titulo: string = 'Hola soy un titulo'
  dinero: number =2400

  constructor() { }

  ngOnInit(): void {
  }

}
