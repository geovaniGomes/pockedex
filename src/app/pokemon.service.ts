import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url ="http://www.json-generator.com/api/json/get/cfjBorXJua?indent=2";
  data: any;
  public Map = new Map();


  constructor(private http:HttpClient) { }

  getPokemons(){
  
    return this.http.get(this.url)
  }
}
