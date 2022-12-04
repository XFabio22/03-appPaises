import { PaisService } from './../../services/pais.service';
import { Component, Input,  } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles:[
      `
      li{
        cursor: pointer;
      }
      `
  ]
})
export class PorPaisComponent {

  constructor(private PaisService:PaisService) { }
  termino:string =''
  hayError: boolean   = false;
  paises  : Country[] = [];
  paisesSugeridos  : Country[] = [];
  mostrarSugerencias: boolean = false

  
  buscar(termino:string){
    this.termino = termino
    this.hayError= false
    console.log(this.termino);
    this.PaisService.buscarPais(termino)
    .subscribe( (pais)=>{
      console.log(pais)
      this.paises=pais
      
    }, (err)=>{
      this.hayError = true;
      this.paises = [];
    }
    );
    
  }

  sugerencias(termino:string){
    this.mostrarSugerencias = true
    this.hayError = false;
    this.termino = termino;
    this.PaisService.buscarPais(termino)
    .subscribe(paises =>
       this.paisesSugeridos = paises.splice(0,5),
       (err)=>this.paisesSugeridos = [] 
    )

  }

  BuscarSugerido(termino:string){
    this.buscar(termino);
  }
  



}
