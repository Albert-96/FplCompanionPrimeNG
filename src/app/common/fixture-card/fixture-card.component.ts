import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-fixture-card',
  standalone: true,
  imports: [CommonModule, PanelModule],
  templateUrl: './fixture-card.component.html',
  styleUrl: './fixture-card.component.css'
})
export class FixtureCardComponent {
  @Input() event: number | null = null;
  @Input() code: number = 0;
  @Input() points: number | null = null;
  @Input() difficulty: number | null = null;
}
