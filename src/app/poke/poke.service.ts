import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PokeService {

  readonly #baseUrl = `https://pokeapi.co/api/v2/`;

  constructor(private http: HttpClient) { }


  getAllPokemon(): Observable<Pokemon[]> {
    return this.http.get(`${this.#baseUrl}pokedex/kanto`).pipe(
      map((res: any) => res.pokemon_entries.map(entry => ({ id: entry.entry_number, name: entry.pokemon_species.name})))
    );
  }

  getPokemon(id: number): Observable<PokemonDetail> {
    return this.http.get(`${this.#baseUrl}pokemon/${id}`).pipe(
      map((res: any) => ({
        id: res.id,
        image: res.sprites.front_default,
        name: res.name
      }))
    )
  }

}

export interface Pokemon {
  id: number;
  name: string;
}

export interface PokemonDetail extends Pokemon {
  image: string;
}