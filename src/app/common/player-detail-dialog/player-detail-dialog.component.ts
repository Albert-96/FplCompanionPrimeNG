import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { SplitterModule } from 'primeng/splitter';
import { IPlayerView } from '../../models/IPlayerDetailView';
import { DividerModule } from 'primeng/divider';
import { TabViewModule } from 'primeng/tabview';
import { FixtureCardComponent } from "../fixture-card/fixture-card.component";
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { FixtureConfig, PastSeasonMidConfig } from './player-detail-dialog.config';
import { HttpService } from '../services/http.service';
import { Routes } from '../../app.constants';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { IHistoryPastView } from '../../models/IHistoryPastView';
import { IElementFixtureView } from '../../models/IElementFixtureView';

@Component({
  selector: 'app-player-detail-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule, PanelModule, SplitterModule, DividerModule, FixtureCardComponent, TabViewModule, TableModule, CommonModule],
  providers: [DialogService],
  templateUrl: './player-detail-dialog.component.html',
  styleUrl: './player-detail-dialog.component.css'
})
export class PlayerDetailDialogComponent implements OnInit{
  visible: boolean = false;
  playerDetail!: IPlayerView;
  pastDataSource: IHistoryPastView[] = [];
  fixtureDataSource: IElementFixtureView[] = [];
  pastColumns : any[];
  fixtureColumns: any[];
  loading: boolean = false;
  loadPlayerDataPromise: Promise<any> = Promise.resolve();

  constructor (
    public dialogService: DialogService,
    private httpService : HttpService<IPlayerView>) {
      this.pastColumns = PastSeasonMidConfig.columns;
      this.fixtureColumns = FixtureConfig.columns;
      this.loadPlayerDataPromise = this.loadPlayerData();
      this.loadPlayerDataPromise.then((response: IPlayerView) => {
        this.playerDetail = response;
      });
  }

  ngOnInit() {
    this.loading = true;
  }

  async loadPlayerData(): Promise<IPlayerView>  {
    let result = await firstValueFrom(this.httpService.get(Routes.playerDetail, {id: 182}));
    return result;
  }

  loadPastSeasonsData = (event: TableLazyLoadEvent) => {
    this.loading = true;
    this.loadPlayerDataPromise.then((response: IPlayerView) => {
      this.loading = false;
      this.pastDataSource = response.previousSeasons.sort((a, b) => {
        const seasonA = a.season_name.split('/').map(Number);
        const seasonB = b.season_name.split('/').map(Number);
        return seasonB[0] - seasonA[0];
      });
    });
  }

  loadFixtureData = (event: TableLazyLoadEvent) => {
    this.loadPlayerDataPromise.then((response: IPlayerView) => {
      this.fixtureDataSource = response.elementFixtures;
      console.log(this.fixtureDataSource);
    });
  }
}
