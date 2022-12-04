import { Country } from './../../interfaces/pais.interfaces';
import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles:[]
  })
export class PorRegionComponent  {

  regiones:string[]=['EU', 'EFTA' ,'CARICOM' ,'PA', 'AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regionActiva:string='';

  paises:Country[]=[];


  constructor(private PaisService:PaisService) { }

  getClassCss(region:string){
    return region === this.regionActiva ? 'btn btn-primary text-white ': 'btn btn-outline-primary';
  }

  activarRegion(region:string){
    if(region === this.regionActiva){return;}

    this.regionActiva = region;

    this.paises = [];
    this.PaisService.buscarPorRegion(region).subscribe((regionX)=>{
      this.paises=regionX
    })
    
  }
}
