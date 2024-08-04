import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AppComponent, RouterOutlet, RouterLink, RouterLinkActive, MenubarModule, RippleModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  title: string;
  items: MenuItem[] | undefined;

  constructor() {
    this.title = AppComponent.title;
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Fixtures',
        route: '/fixtures'
      },
      {
        label: 'Players',
        route: '/players'
      }
    ]
  }
}
