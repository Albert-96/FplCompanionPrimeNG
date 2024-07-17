import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from './common/grid/grid.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { environment } from '../environments/enviornment';
import { PlayersComponent } from './modules/players/players.component';
import { DreamTeamComponent } from "./modules/dream-team/dream-team.component";
import { FixturesComponent } from "./modules/fixtures/fixtures.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayersComponent, NavbarComponent, DreamTeamComponent, FixturesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public static title = 'FPL Companion';

  constructor() {
    console.log(environment.production);
  }
}
