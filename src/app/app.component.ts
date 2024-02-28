import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from './common/grid/grid.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { environment } from '../environments/enviornment';
import { PlayersComponent } from './modules/players/players.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayersComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public static title = 'FPL Companion';

  constructor() {
    console.log(environment.production);
  }
}
