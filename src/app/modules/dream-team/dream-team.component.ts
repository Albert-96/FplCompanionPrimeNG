import { Component } from '@angular/core';
import { PitchComponent } from "../../common/pitch/pitch.component";
import { PitchPlayerComponent } from "../../common/pitch-player/pitch-player.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-dream-team',
  standalone: true,
  imports: [PitchComponent, PitchPlayerComponent, CommonModule, AvatarModule, DropdownModule, FormsModule],
  templateUrl: './dream-team.component.html',
  styleUrl: './dream-team.component.css'
})
export class DreamTeamComponent {
  items: number[] = Array.from({ length: 4 }, (_, i) => i);
  cities: any[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  selectedCity: any | undefined;
}
