import { Component, OnDestroy } from '@angular/core';
import { PlayersConfig } from './players.config';
import { GridComponent } from '../../common/grid/grid.component';
import { GridConstants } from '../../common/grid/grid.constants';
import { HttpService } from '../../common/services/http.service';
import { IPlayer } from '../../models/IPlayer';
import { TableLazyLoadEvent } from 'primeng/table';
import { Routes } from '../../app.constants';
import { GridResponse } from '../../models/IGridResponse';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PlayerDetailDialogComponent } from '../../common/player-detail-dialog/player-detail-dialog.component';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [GridComponent, DynamicDialogModule, ButtonModule],
  providers: [DialogService],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent implements OnDestroy{
  columns : any[];
  selectedColumns!: any[];
  loading: boolean = false;
  dataSource: IPlayer[] = [];
  totalRecords: number = 0;
  contextMenuItems!: MenuItem[];
  selectionMode: "single" | "multiple" | null | undefined = GridConstants.singleSelection;
  ref: DynamicDialogRef | undefined;

  constructor(private httpService : HttpService<GridResponse>,
    public dialogService: DialogService) {
    this.columns = PlayersConfig.columns;
    this.selectedColumns = this.columns.filter(x => x.visible == true);
  }

  ngOnInit() {
    this.loading = true;
    this.contextMenuItems = [
      { label: 'View', icon: 'pi pi-fw pi-search'},
    ];
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
    if (this.ref) {
        this.ref.close();
    }
  }
}
