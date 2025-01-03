import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Player } from '../../interfaces/player';

@Pipe({
  name: 'sortByTime',
  standalone: true
})
@Injectable()
export class SortByTimePipe implements PipeTransform {

  transform(players: Player[]): Player[] {
    return players.sort((a, b) => b.timePlayed - a.timePlayed);
  }

}
