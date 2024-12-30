import { Component } from '@angular/core';
import { MostTimePlayedComponent } from '../../components/most-time-played/most-time-played.component';

@Component({
  selector: 'app-leadersboard',
  standalone: true,
  imports: [MostTimePlayedComponent],
  templateUrl: './leadersboard.component.html',
  styleUrl: './leadersboard.component.css'
})
export class LeadersboardComponent {

}
