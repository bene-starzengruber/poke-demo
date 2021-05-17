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

  // expects { selection, caught }
  vm$ = null;

  constructor(private pokeStore: PokeStore) {

  }

  catchOrRelase(id: number) {

  }

}
