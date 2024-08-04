import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { HttpService } from '../../common/services/http.service';
import { MediaDevice, Routes } from '../../app.constants';
import { IEvent } from '../../models/IEvent';
import { FixtureRowComponent } from "../../common/fixture-row/fixture-row.component";
import { IFixtureView } from '../../models/IFixtureView';
import { CommonModule } from '@angular/common';
import { MediaMessageService } from '../../common/services/mediaMessage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fixtures',
  standalone: true,
  imports: [DropdownModule, FormsModule, FixtureRowComponent, CommonModule],
  templateUrl: './fixtures.component.html',
  styleUrl: './fixtures.component.css'
})
export class FixturesComponent implements OnInit,OnDestroy {
  mediaDevice: MediaDevice = MediaDevice.Large;
  mediaDevices = MediaDevice;
  events: IEvent[] = [];
  fixtures: IFixtureView[] = [];
  selectedEvent!: IEvent;
  messageSubscription!: Subscription;

  constructor(
    private httpService : HttpService<any[]>,
    private messageService: MediaMessageService) {
  }

  ngOnInit() {
    this.getEvents();
    this.mediaDevice = this.messageService.getDevice();
    this.messageSubscription = this.messageService.getDeviceChange$
    .subscribe((message) => {
      console.log(message);
      this.mediaDevice = message;
    });
  }

  getEvents = () => {
    this.httpService.get(Routes.dreamTeamEvents)
      .subscribe(response => 
      {
        this.events = response;
        this.selectedEvent = response.find(x => x.is_current || x.is_next);
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
    if (value) {
      this.getFixtures(value.id);
    }
  }

  ngOnDestroy(): void {
    this.messageSubscription.unsubscribe();
  }
}
