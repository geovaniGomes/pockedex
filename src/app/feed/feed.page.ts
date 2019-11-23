import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import _ from 'lodash';
import { ChildActivationEnd } from '@angular/router';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  providers:[
    PokemonService
  ]
})
export class FeedPage implements OnInit {

  public lista_pokemons: any;
  public todos_pokemons:any;
  public queryText:any;

  constructor(private pokemonService:PokemonService) { 

  }

  IniciarPokemons(){
    return this.getLista();
  }

  getLista(){
    return this.pokemonService.getPokemons()
    .subscribe(
      data =>{
          let  response = data      
          const url ="assets/img/";
            for( let i in response){           
                response[i].foto_trainner=url+response[i].trainner.toLowerCase()+'.png';
                response[i].foto_poke =url+response[i].name.toLowerCase()+'.png';           
            }
          this.todos_pokemons = response;  
      }, error =>{
        console.log(error)
      }
    );
   }
  
  ngOnInit() {
         this.pokemonService.getPokemons()
         .subscribe(
      data =>{
          let  response = data      
          const url ="assets/img/";
            for( let i in response){           
                response[i].foto_trainner=url+response[i].trainner.toLowerCase()+'.png';
                response[i].foto_poke =url+response[i].name.toLowerCase()+'.png';           
            }
          this.lista_pokemons = response;  
      }, error =>{
        console.log(error)
      }

    );
  }

  getPokemons(ev: any){
    this.IniciarPokemons();
    let val = ev.target.value;

    if(val && val.trim()!=''){
        this.lista_pokemons = this.lista_pokemons.filter((items)=>{
          return (items.name.toLowerCase().indexOf(val.toLowerCase())>-1);
        });
    }else{

      this.lista_pokemons = this.todos_pokemons;      
    }
  }

 
}
