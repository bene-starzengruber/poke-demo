import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon, PokeService } from '../poke.service';
import { PokeStore } from '../poke.store';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.html',
  styleUrls: ['./poke-list.less'],
})
export class PokeList {

  // expects { pokemon, selection, caught, loading }
  vm$ = null;

  constructor(private pokeStore: PokeStore) { }

  selectPokemon(pokemon: Pokemon) {

  }

  catchAll() {

  }

  changeSearch(search: string) {

  }
}
