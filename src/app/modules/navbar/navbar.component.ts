import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { MediaMessageService } from '../../common/services/mediaMessage.service';
import { MediaDevice } from '../../app.constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AppComponent, RouterOutlet, RouterLink, RouterLinkActive, MenubarModule, RippleModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy{
  title: string;
  items: MenuItem[] | undefined;
  breakpointXSmallSubscription!: Subscription;
  breakpointSmallSubscription!: Subscription;
  breakpointMediumSubscription!: Subscription;
  breakpointLargeSubscription!: Subscription;

  constructor(
    public breakPointObserver: BreakpointObserver,
    public messageService: MediaMessageService
  ) {
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
    ];

    if (this.breakPointObserver.isMatched(Breakpoints.XSmall)) {
      this.messageService.sendDeviceChange(MediaDevice.XSmall);
    }
    else if (this.breakPointObserver.isMatched(Breakpoints.Small)) {
      this.messageService.sendDeviceChange(MediaDevice.Small);
    }
    else if (this.breakPointObserver.isMatched(Breakpoints.Medium)) {
      this.messageService.sendDeviceChange(MediaDevice.Medium);
    }
    else if (this.breakPointObserver.isMatched(Breakpoints.Large)) {
      this.messageService.sendDeviceChange(MediaDevice.Large);
    }
    else if (this.breakPointObserver.isMatched(Breakpoints.XLarge)) {
      this.messageService.sendDeviceChange(MediaDevice.Large);
    }

    this.breakpointXSmallSubscription = this.breakPointObserver.observe([
      Breakpoints.XSmall,
    ]).subscribe(result => {
      if (result.matches) {
        this.messageService.sendDeviceChange(MediaDevice.XSmall);
      }
    });
    this.breakpointSmallSubscription = this.breakPointObserver.observe([
      Breakpoints.Small,
    ]).subscribe(result => {
      if (result.matches) {
        this.messageService.sendDeviceChange(MediaDevice.Small);
      }
    });
    this.breakpointMediumSubscription = this.breakPointObserver.observe([
      Breakpoints.Medium,
    ]).subscribe(result => {
      if (result.matches) {
        this.messageService.sendDeviceChange(MediaDevice.Small);
      }
    });
    this.breakpointLargeSubscription = this.breakPointObserver.observe([
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      if (result.matches) {
        this.messageService.sendDeviceChange(MediaDevice.Small);
      }
    });
  }

  ngOnDestroy() {
    this.breakpointXSmallSubscription.unsubscribe();
    this.breakpointSmallSubscription.unsubscribe();
    this.breakpointMediumSubscription.unsubscribe();
    this.breakpointLargeSubscription.unsubscribe();
  }
}
