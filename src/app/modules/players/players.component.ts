import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlayersLargeConfig, PlayersMediumPhoneConfig, PlayersSmallPhoneConfig, PlayersXSmallPhoneConfig } from './players.config';
import { GridComponent } from '../../common/grid/grid.component';
import { GridConstants } from '../../common/grid/grid.constants';
import { HttpService } from '../../common/services/http.service';
import { IPlayer } from '../../models/IPlayer';
import { TableLazyLoadEvent } from 'primeng/table';
import { MediaDevice, PhoneDevice, Routes } from '../../app.constants';
import { GridResponse } from '../../models/IGridResponse';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PlayerDetailDialogComponent } from '../../common/player-detail-dialog/player-detail-dialog.component';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { MediaMessageService } from '../../common/services/mediaMessage.service';
import { SharedLogicService } from '../../common/services/shared-logic.service';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [GridComponent, DynamicDialogModule, ButtonModule],
  providers: [DialogService],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent implements OnInit, OnDestroy{
  columns : any[];
  selectedColumns!: any[];
  loading: boolean = false;
  dataSource: IPlayer[] = [];
  totalRecords: number = 0;
  contextMenuItems!: MenuItem[];
  mediaDevice: MediaDevice = MediaDevice.Large;
  mediaDevices = MediaDevice;
  phoneDevice: PhoneDevice  = PhoneDevice.Large;
  phoneDevices = PhoneDevice;
  mediaSubscription!: Subscription;
  phoneSubscription!:Subscription;
  selectionMode: "single" | "multiple" | null | undefined = GridConstants.singleSelection;
  ref: DynamicDialogRef | undefined;

  constructor(
    private httpService : HttpService<GridResponse>,
    public dialogService: DialogService,
    private messageService: MediaMessageService,
    private sharedLogic: SharedLogicService) {
    this.mediaDevice = this.messageService.getDevice();
    this.phoneDevice = messageService.getPhone();
    this.columns = sharedLogic.getScreenColumnConfig(
      this.mediaDevice,
      this.phoneDevice,
      PlayersLargeConfig.columns,
      PlayersMediumPhoneConfig.columns,
      PlayersSmallPhoneConfig.columns,
      PlayersXSmallPhoneConfig.columns);
    this.selectedColumns = this.columns.filter(x => x.visible == true);
  }

  ngOnInit() {
    this.loading = true;
    this.contextMenuItems = [
      { label: 'View', icon: 'pi pi-fw pi-search'},
    ];
    this.mediaSubscription = this.messageService.getDeviceChange$
    .subscribe((message) => {
      this.mediaDevice = message;
      this.columns = this.sharedLogic.getScreenColumnConfig(
        this.mediaDevice,
        this.phoneDevice,
        PlayersLargeConfig.columns,
        PlayersMediumPhoneConfig.columns,
        PlayersSmallPhoneConfig.columns,
        PlayersXSmallPhoneConfig.columns);
      this.selectedColumns = this.columns.filter(x => x.visible == true);
    });
    this.phoneSubscription = this.messageService.getPhoneChange$
    .subscribe((message) => {
      this.phoneDevice = message;
      this.columns = this.sharedLogic.getScreenColumnConfig(
        this.mediaDevice,
        this.phoneDevice,
        PlayersLargeConfig.columns,
        PlayersMediumPhoneConfig.columns,
        PlayersSmallPhoneConfig.columns,
        PlayersXSmallPhoneConfig.columns);
      this.selectedColumns = this.columns.filter(x => x.visible == true);
    });
  }

  loadData = (event: TableLazyLoadEvent) => {
    this.loading = true;
    this.httpService.post(Routes.player, event)
      .subscribe(response => 
      {
        this.dataSource = response.records;
        this.totalRecords = response.totalRecords;
        this.loading = false;
      });
  }

  onContextMenuClick = (event: any) => {
    if (event.label === 'View') {
      this.viewPlayerDetail(event.id);
    }
  }

  viewPlayerDetail = (id: number) => {
    this.ref = this.dialogService.open(PlayerDetailDialogComponent,
      {
        header: "Player Details",
        position: "top",
        maximizable: true,
        modal:true,
        data: {
          id: id
        },
        width: '63rem',
        contentStyle: { overflow: 'auto' },
        breakpoints: {
            '960px': '75vw',
            '640px': '90vw'
        },
      });
  }

  ngOnDestroy() {
    this.mediaSubscription.unsubscribe();
    if (this.ref) {
        this.ref.close();
    }
  }
}
