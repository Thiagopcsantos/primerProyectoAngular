import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent implements OnInit {

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
