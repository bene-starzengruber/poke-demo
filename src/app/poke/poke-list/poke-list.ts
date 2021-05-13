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
  vm$ = combineLatest([
    this.pokeStore.filteredPokemon$,
    this.pokeStore.loading$,
    this.pokeStore.selection$,
    this.pokeStore.caught$]).pipe(
      map(([pokemon, loading, selection, caught]) => ({ pokemon, loading, selection, caught }))
    );

  constructor(private pokeStore: PokeStore) { }

  selectPokemon(pokemon: Pokemon) {
    this.pokeStore.selectPokemon(pokemon.id);
  }

  catchAll() {
    this.pokeStore.catchThemAll();
  }

  changeSearch(search: string) {
    this.pokeStore.changeSearch(search);
  }
}
