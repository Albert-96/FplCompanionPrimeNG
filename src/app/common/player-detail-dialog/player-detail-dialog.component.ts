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
import { CommonModule, NgFor } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { IHistoryPastView } from '../../models/IHistoryPastView';
import { IElementFixtureView } from '../../models/IElementFixtureView';
import { IFixtureCardView } from '../../models/IFixtureCardView';

@Component({
  selector: 'app-player-detail-dialog',
  standalone: true,
  imports: [CommonModule, NgFor, DialogModule, ButtonModule, InputTextModule, PanelModule, SplitterModule, DividerModule, FixtureCardComponent, TabViewModule, TableModule],
  providers: [DialogService],
  templateUrl: './player-detail-dialog.component.html',
  styleUrl: './player-detail-dialog.component.css'
})
export class PlayerDetailDialogComponent implements OnInit{
  visible: boolean = false;
  playerDetail!: IPlayerView | null;
  pastDataSource: IHistoryPastView[] = [];
  fixtureDataSource: IElementFixtureView[] = [];
  fixtureCardArray: IFixtureCardView[] = [];
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
        let fixtureCards: IFixtureCardView[] = this.playerDetail.previousFixtures.slice(0,3).map(
          item => {
            return {
              id: item.fixture,
              event: null,
              code: item.opponent_team!.code,
              points: item.total_points,
              difficulty: 3,
              is_home: item.was_home
            }
          }
        );
        this.fixtureCardArray.push(...fixtureCards);
        fixtureCards = this.playerDetail.elementFixtures.slice(0,(6 - this.fixtureCardArray.length)).map(
          item => {
            return {
              id: item.id,
              event: item.event,
              code: item.is_home ? item.away!.code : item.home!.code,
              points: null,
              difficulty: item.difficulty,
              is_home: item.is_home
            }
          }
        );
        this.fixtureCardArray.push(...fixtureCards);
        console.log(this.fixtureCardArray);
      });
  }

  ngOnInit() {
    this.loading = true;
  }

  async loadPlayerData(): Promise<IPlayerView>  {
    let result = await firstValueFrom(this.httpService.get(Routes.playerDetail, {id: 184}));
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
