import { Component, Inject, LOCALE_ID } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-fixture-row',
  standalone: true,
  imports: [],
  templateUrl: './fixture-row.component.html',
  styleUrl: './fixture-row.component.css'
})
export class FixtureRowComponent {
  homeTeam: string = "Man United";
  awayTeam: string = "Fulham";
  fixtureDate: string | null = "";

  constructor(@Inject(LOCALE_ID) public locale: string) {
    var datePipe = new DatePipe(locale);
    this.fixtureDate = datePipe.transform(new Date(), 'EEEE dd MMM yyy HH:mm');
  }
}
