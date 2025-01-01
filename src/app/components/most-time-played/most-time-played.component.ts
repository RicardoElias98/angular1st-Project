import { Component, OnInit, Output } from '@angular/core';
import { map, BehaviorSubject } from 'rxjs';
import { Player } from '../../interfaces/player';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { SortByTimePipe } from "../../pipes/sort-by-time/sort-by-time.pipe";
import { MatIconModule } from '@angular/material/icon';
import { PlayerCardComponent } from "../player-card/player-card.component";
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SortByStarsPipe } from '../../pipes/sort-by-stars/sort-by-stars.pipe';


@Component({
  selector: 'app-most-time-played',
  standalone: true,
  imports: [CommonModule, PlayerCardComponent, MatIconModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './most-time-played.component.html',
  styleUrl: './most-time-played.component.css',
  providers: [SortByTimePipe,SortByStarsPipe]
})
export class MostTimePlayedComponent implements OnInit {

  public players$: BehaviorSubject<Player[] | undefined> = new BehaviorSubject<Player[] | undefined>(undefined);
  private allPlayers: Player[] | undefined = undefined;
  @Output() slice5playersIsActive: boolean = false;

  constructor(
    private api: ApiService,
    private sortByTime: SortByTimePipe,
    private sortByStars: SortByStarsPipe
  ) {}

  public ngOnInit(): void {
   this.api.getPlayers().subscribe(players => {
      this.allPlayers = players;
      this.players$.next(players);
    });
  }

  slice5players() {
    if (this.allPlayers) {
      const slicedPlayers = this.sortByTime.transform(this.allPlayers.slice(0, 5));
      this.players$.next(slicedPlayers);
      this.slice5playersIsActive = true;
    }
  }

  slice5playersByStars() {
    if (this.allPlayers) {
      const slicedPlayers = this.sortByStars.transform(this.allPlayers.slice(0, 5));
      this.players$.next(slicedPlayers);
      this.slice5playersIsActive = true;
    }
  }

  inactiveSlice5players() {
    this.players$.next(this.allPlayers);
    this.slice5playersIsActive = false;
  }
}