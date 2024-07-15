import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-pitch-player',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './pitch-player.component.html',
  styleUrl: './pitch-player.component.css'
})
export class PitchPlayerComponent {
  playerName: string = "Player";
  points:number = 0; 
}
