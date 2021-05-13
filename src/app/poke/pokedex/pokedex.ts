import { Component } from '@angular/core';
import { PokeStore } from '../poke.store';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.html',
  styleUrls: ['./pokedex.css'],
  providers: [PokeStore]
})
export class Pokedex {
  constructor(private pokeStore: PokeStore) {}

  ngOnInit() {
    this.pokeStore.loadAllPokemon();
  }
}
