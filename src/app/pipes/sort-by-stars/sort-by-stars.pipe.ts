import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../../interfaces/player';

@Pipe({
  name: 'sortByStars',
  standalone: true
})
export class SortByStarsPipe implements PipeTransform {

  transform(players: Player[]): Player[] {
    return players.sort((a, b) => b.stars - a.stars);
  }

}
