import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { HttpService } from '../../common/services/http.service';
import { Routes } from '../../app.constants';
import { IEvent } from '../../models/IEvent';
import { FixtureRowComponent } from "../../common/fixture-row/fixture-row.component";
import { IFixture } from '../../models/IFixture';
import { IFixtureView } from '../../models/IFixtureView';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fixtures',
  standalone: true,
  imports: [DropdownModule, FormsModule, FixtureRowComponent, CommonModule],
  templateUrl: './fixtures.component.html',
  styleUrl: './fixtures.component.css'
})
export class FixturesComponent {
  events: IEvent[] = [];
  fixtures: IFixtureView[] = [];
  selectedEvent!: IEvent;

  constructor(private httpService : HttpService<any[]>) {
  }

  ngOnInit() {
    this.getEvents();
  }

  getEvents = () => {
    this.httpService.get(Routes.dreamTeamEvents)
      .subscribe(response => 
      {
        this.events = response;
        this.selectedEvent = response[0];
        this.getFixtures(this.selectedEvent.id);
      });
  }

  getFixtures = (eventId: number) => {
    this.httpService.get(Routes.eventFixtures, {id : eventId})
      .subscribe(response => 
      {
        this.fixtures = response;
      });
  }

  onChange = (event: DropdownChangeEvent) => {
    let value = event.value as IEvent;
    this.getFixtures(value.id);
  }
}
