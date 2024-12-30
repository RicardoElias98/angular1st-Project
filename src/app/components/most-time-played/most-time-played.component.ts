import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Player } from '../../interfaces/player';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { SortByTimePipe } from "../../pipes/sort-by-time/sort-by-time.pipe";
import { MatIconModule } from '@angular/material/icon';
import { PlayerCardComponent } from "../player-card/player-card.component";
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-most-time-played',
  standalone: true,
  imports: [CommonModule, SortByTimePipe, PlayerCardComponent, MatIconModule, MatButtonModule],
  templateUrl: './most-time-played.component.html',
  styleUrl: './most-time-played.component.css'
})
export class MostTimePlayedComponent implements OnInit {

  public players$: Observable<Player [] | undefined> = of(undefined);

  constructor(
    private api: ApiService
  ) {}

  public ngOnInit(): void {
    this.players$ = this.api.getPlayers();
    console.log(this.players$);
  }

  slice5players() {
    this.players$ = this.players$.pipe(
      map(players => players ? players.slice(0, 5) : [])
    );
  }

}