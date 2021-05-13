import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Pokemon, PokemonDetail, PokeService } from './poke.service';

interface PokeState {
  allPokemon: Pokemon[];
  loading: boolean;
  search: string;
  selection?: PokemonDetail;
  caught: Set<number>;
}

@Injectable()
export class PokeStore extends ComponentStore<PokeState> {
  constructor(private pokeService: PokeService) {
    super({
      allPokemon: [],
      loading: true,
      caught: new Set(),
      search: ''
    });
  }

  readonly #allPokemon$ = this.select((state) => state.allPokemon);

  readonly search$ = this.select((state) => state.search);
  readonly loading$ = this.select((state) => state.loading);
  readonly selection$ = this.select((state) => state.selection);
  readonly caught$ = this.select((state) => state.caught);
  readonly filteredPokemon$ = this.select(
    this.#allPokemon$,
    this.search$,
    (allPokemon, search) => allPokemon.filter(({ name }) => name.includes(search))
  )

  readonly loadAllPokemon = this.effect((called$) => {
    return called$.pipe(
      switchMap(() => this.pokeService.getAllPokemon()),
      tap((allPokemon) => {
        this.patchState({ loading: false, allPokemon });
        this.selectPokemon(allPokemon[0].id);
      })
    );
  });

  readonly selectPokemon = this.effect((id$: Observable<number>) => {
    return id$.pipe(
      switchMap(id => this.pokeService.getPokemon(id)),
      tap(pokemon => {
        this.patchState({ selection: pokemon });
      })
    )
  });

  readonly catchOrRelasePokemon = this.updater((state, id: number) => {
    const updated = new Set(state.caught);
    updated.has(id) ? updated.delete(id) : updated.add(id);
    return { ...state, caught: updated };
  });

  readonly changeSearch = this.updater((state, search: string) => {
    return { ...state, search };
  });

  catchThemAll() {
    const allIds = this.get().allPokemon.map(pokemon => pokemon.id);
    this.patchState({ caught: new Set(allIds) });
  }

}
