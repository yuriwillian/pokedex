import { Component, OnInit } from '@angular/core';
import { PokemonsListServiceService } from 'src/app/services/pokemons-list-service.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {

  constructor(private pokemonsListService: PokemonsListServiceService) { }

  data: any = this.pokemonsListService.fazGet("https://pokeapi.co/api/v2/pokemon/")
  dataJson: any = JSON.parse(this.data)
  pokemons: any = this.dataJson.results

  ngOnInit() {
    console.log(this.pokemons)
  }

  capturaId(url: string) {
    let urlEditada = url.slice(34)
    let urlEditArray = urlEditada.split('')
    urlEditArray.pop()
    let id = urlEditArray.join()
    id = id.replace(',', '')
    return id
  }


}
