import { Component, OnDestroy } from '@angular/core';
import { PlayersConfig } from './players.config';
import { GridComponent } from '../../common/grid/grid.component';
import { GridConstants } from '../../common/grid/grid.constants';
import { HttpService } from '../../common/services/http.service';
import { IPlayer } from '../../models/IPlayer';
import { TableLazyLoadEvent } from 'primeng/table';
import { Routes } from '../../common/routes';
import { GridResponse } from '../../models/IGridResponse';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PlayerDetailDialogComponent } from '../../common/player-detail-dialog/player-detail-dialog.component';
import { ButtonModule } from 'primeng/button';

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
  selectionMode: "single" | "multiple" | null | undefined = GridConstants.singleSelection;
  ref: DynamicDialogRef | undefined;

  constructor(private httpService : HttpService<GridResponse>,
    public dialogService: DialogService) {
    this.columns = PlayersConfig.columns;
    this.selectedColumns = this.columns.filter(x => x.visible == true);
  }

  ngOnInit() {
    this.loading = true;
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

  show = () => {
    this.ref = this.dialogService.open(PlayerDetailDialogComponent,
      {
        header: "Player Details",
        position: "top",
        maximizable: true,
        modal:true,
        data: {
          id: '51gF3'
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
