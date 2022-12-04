import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private ApiUrl: string = 'https://restcountries.com/v2';
 
  get params(){
    return new HttpParams().set('fields','name,capital,alpha2Code,flag,population')
  }

  constructor(private http:HttpClient) { }

  
  buscarPais(termino:string):Observable<Country[]>{
    const url=`${this.ApiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url,{params:this.params});
  }

  buscarCapital(termino:string):Observable<Country[]>{
    const url=`${this.ApiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url,{params:this.params});
  }


  getPaisPorAlpha(id:string):Observable<Country>{
    const url=`${this.ApiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarPorRegion(region:string):Observable<Country[]>{
    
    const url=`${this.ApiUrl}/regionalbloc/${region}`;

    return this.http.get<Country[]>(url,{params:this.params});
  }

}
