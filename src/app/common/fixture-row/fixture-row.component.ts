import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITeamView } from '../../models/ITeamView';
import { MediaMessageService } from '../services/mediaMessage.service';
import { MediaDevice } from '../../app.constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fixture-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fixture-row.component.html',
  styleUrl: './fixture-row.component.css'
})
export class FixtureRowComponent implements OnInit, OnDestroy{
  @Input() id!: number;
  @Input() homeTeam!: ITeamView;
  @Input() awayTeam!: ITeamView;
  @Input() fixtureDate!: Date;
  @Input() started!: boolean;
  @Input() finished!: boolean;
  @Input() homeScore!: number | null;
  @Input() awayScore!: number | null;
  mediaDevice: MediaDevice = MediaDevice.Large;
  messageSubscription!: Subscription;
  mediaDevices = MediaDevice;

  constructor(
    private messageService: MediaMessageService
  ) {
  }

  ngOnInit(): void {
    this.mediaDevice = this.messageService.getDevice();
    this.messageSubscription = this.messageService.getDeviceChange$
    .subscribe((message) => {
      this.mediaDevice = message;
    });
  }

  ngOnDestroy(): void {
    this.messageSubscription.unsubscribe();
  }
}
