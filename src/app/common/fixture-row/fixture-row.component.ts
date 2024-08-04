import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITeamView } from '../../models/ITeamView';

@Component({
  selector: 'app-fixture-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fixture-row.component.html',
  styleUrl: './fixture-row.component.css'
})
export class FixtureRowComponent {
  @Input() id!: number;
  @Input() homeTeam!: ITeamView;
  @Input() awayTeam!: ITeamView;
  @Input() fixtureDate!: Date;
  @Input() started!: boolean;
  @Input() finished!: boolean;
  @Input() homeScore!: number | null;
  @Input() awayScore!: number | null;

  constructor() {
    console.log(this.homeTeam);
  }
}
