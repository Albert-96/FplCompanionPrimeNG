import { Component } from '@angular/core';
import { PitchPlayerComponent } from "../../common/pitch-player/pitch-player.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { DropdownModule } from 'primeng/dropdown';
import { HttpService } from '../../common/services/http.service';
import { IEvent } from '../../models/IEvent';
import { Routes } from '../../app.constants';

@Component({
  selector: 'app-dream-team',
  standalone: true,
  imports: [PitchPlayerComponent, CommonModule, AvatarModule, DropdownModule, FormsModule],
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

  constructor(private httpService : HttpService<IEvent>) {
  }

  ngOnInit() {
    this.getEvents();
  }

  getEvents = () => {
    this.httpService.get(Routes.dreamTeamEvents)
      .subscribe(response => 
      {
        console.log(response);
      });
  }
}
