import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { switchMap, tap } from 'rxjs/operators';
import { Pokemon, PokeService } from './poke.service';

interface PokeState {
  allPokemon: Pokemon[];
  loading: boolean;
}

@Injectable()
export class PokeStore extends ComponentStore<PokeState> {
  constructor(private pokeService: PokeService) {
    super({
      allPokemon: [],
      loading: true
    });
  }

  readonly allPokemon$ = this.select(state => state.allPokemon);
  readonly loading$ = this.select(state => state.loading);

  readonly loadAllPokemon = this.effect(called$ => {
    return called$.pipe(
      switchMap(() => this.pokeService.getAllPokemon()),
      tap(allPokemon => {
        this.patchState({ loading: false, allPokemon: allPokemon });
      })
    );
  });
}
