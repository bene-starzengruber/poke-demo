import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokedex } from './pokedex/pokedex';
import { PokeList } from './poke-list/poke-list';
import { PokeDetail } from './poke-detail/poke-detail';

@NgModule({
  imports: [CommonModule],
  declarations: [Pokedex, PokeList, PokeDetail],
  exports: [Pokedex]
})
export class PokeModule {}
