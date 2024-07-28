import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-fixture-card',
  standalone: true,
  imports: [PanelModule],
  templateUrl: './fixture-card.component.html',
  styleUrl: './fixture-card.component.css'
})
export class FixtureCardComponent {

}
