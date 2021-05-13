import { Component } from '@angular/core';
import { Pokemon, PokeService } from '../poke.service';
import { PokeStore } from '../poke.store';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.html',
  styleUrls: ['./poke-list.css']
})
export class PokeList {
  allPokemon$ = this.pokeStore.allPokemon$;
  loading$ = this.pokeStore.loading$;

  constructor(private pokeStore: PokeStore) {}
}
