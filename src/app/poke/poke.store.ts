import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Pokemon, PokemonDetail, PokeService } from './poke.service';

@Injectable()
export class PokeStore {

  constructor(private pokeService: PokeService) {

  }

}
