import { Routes } from '@angular/router';
import { FixturesComponent } from './modules/fixtures/fixtures.component';
import { PlayersComponent } from './modules/players/players.component';

export const routes: Routes = [
    { path: '', redirectTo:'/fixtures', pathMatch: 'full' },
    { path: 'players', component: PlayersComponent },
    { path: 'fixtures', component: FixturesComponent }
];
