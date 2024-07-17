import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { HttpService } from '../../common/services/http.service';
import { Routes } from '../../common/routes';
import { IEvent } from '../../models/IEvent';
import { FixtureRowComponent } from "../../common/fixture-row/fixture-row.component";

@Component({
  selector: 'app-fixtures',
  standalone: true,
  imports: [DropdownModule, FormsModule, FixtureRowComponent],
  templateUrl: './fixtures.component.html',
  styleUrl: './fixtures.component.css'
})
export class FixturesComponent {
  events: IEvent[] = [];
  selectedEvent: any | undefined;

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
      });
  }

  getFixtures = (eventId: number) => {
    this.httpService.get(Routes.eventFixtures, {id : eventId})
      .subscribe(response => 
      {
        console.log(response);
      });
  }

  onChange = (event: DropdownChangeEvent) => {
    let value = event.value as IEvent;
    this.getFixtures(value.id);
  }
}
