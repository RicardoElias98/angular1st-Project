import { Component, Input } from '@angular/core';
import { Player } from '../../interfaces/player';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';


@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatChipsModule],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.css'
})
export class PlayerCardComponent {

  @Input() player: Player | undefined; 
  @Input() index: number | undefined;
  @Input() slice5playersIsActive: boolean = false;
}
