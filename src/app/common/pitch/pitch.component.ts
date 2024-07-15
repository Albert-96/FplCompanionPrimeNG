import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { PitchPlayerComponent } from "../pitch-player/pitch-player.component";

@Component({
  selector: 'app-pitch',
  standalone: true,
  imports: [CommonModule, CardModule, PitchPlayerComponent],
  templateUrl: './pitch.component.html',
  styleUrl: './pitch.component.css'
})
export class PitchComponent {
  items: number[] = Array.from({ length: 5 }, (_, i) => i);
  playerPositions: {x: number, y:number}[] = [
    {x: 200, y: 300}
];
}
