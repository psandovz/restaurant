
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-restaurante-input',
  templateUrl: './restaurante-input.component.html',
  styleUrls: ['./restaurante-input.component.css']
})
export class RestauranteInputComponent implements OnInit {
  @Output() value = new EventEmitter();


  nombre: string= "";
  ciudad: string= ""; 
 
  constructor() { }

  ngOnInit(): void {
  }

  agregar (){
    if (this.nombre && this.ciudad){

      const n = this.nombre;
      const c = this.ciudad;

      this.value.emit(`${n},${c}`);

      this.nombre = '';
      this.ciudad = '';
    }else{
      alert('Los campos estan vacios');
    }
  }

}
