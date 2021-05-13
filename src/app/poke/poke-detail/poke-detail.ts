import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokeStore } from '../poke.store';

@Component({
  selector: 'poke-detail',
  templateUrl: './poke-detail.html',
  styleUrls: ['./poke-detail.less']
})
export class PokeDetail {

  vm$ = combineLatest([this.pokeStore.selection$, this.pokeStore.caught$]).pipe(
    map(([selection, caught]) => ({ selection, caught }))
  );

  constructor(private pokeStore: PokeStore) {

  }

  catchOrRelase(id: number) {
    this.pokeStore.catchOrRelasePokemon(id);
  }

}
