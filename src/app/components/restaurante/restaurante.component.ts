import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lista } from 'src/app/models/lista.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {
 title: string = 'Guia Restaurantes';
 items: Lista[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }
 
  validaRestaurant(nombre: string){
    this.items.forEach(element => {
      if(element.nombre === nombre){
        return false;
      }
    });
    }

agregar(nombre: string, ciudad: string) { 
   nombre = nombre.split(",")[0];
   ciudad = ciudad.split(",")[1];
   const id = this.items.length + 1;
  let resul=true;
console.log('resultado de Datos:',nombre,ciudad);

if(this.items.length>0){
  this.items.forEach(element => {
    if(element.nombre === nombre){
      console.log('Ya existe Restaurant');
      alert('Ya existe Restaurant');
      resul=false;
    }    
  });
  if(resul){
      console.log('tamaño de lista:' , this.items.length);
      this.items.push({id,nombre,ciudad});    
  }
}else{
  console.log('tamaño de lista:' , this.items.length);
  this.items.push({id,nombre,ciudad})
}

this.items.sort((a,b)=>{
  //if(a[0]-b[0]){
    if(a.id[0]-b.id[0]){
    return 1;
  }else{
    console.log('2' , this.items.length-1);
    return -1;
  }});

//this.items.sort((a,b)=> (a.id[0]>b.id[this.items.length-1])?1:-1)

console.log('resultado de items:',this.items);

}



}
