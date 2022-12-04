import { PaisService } from './../../services/pais.service';
import { Component, } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
  constructor(private PaisService:PaisService) { }
  termino:string =''
  hayError: boolean   = false;
  paises  : Country[] = [];

  
  buscar(termino:string){
    this.termino = termino
    this.hayError= false
    console.log(this.termino);
    this.PaisService.buscarCapital(termino)
    .subscribe( (paises)=>{
  
      this.paises=paises
       
    }, (err)=>{
      this.hayError = true;
      this.paises = [];
    }
    );
    
  }


  



}
