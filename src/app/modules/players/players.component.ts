import { Component } from '@angular/core';
import { PlayersConfig } from './players.config';
import { GridComponent } from '../../common/grid/grid.component';
import { GridConstants } from '../../common/grid/grid.constants';
import { HttpService } from '../../common/services/http.service';
import { IPlayer } from '../../models/IPlayer';
import { TableLazyLoadEvent } from 'primeng/table';
import { Routes } from '../../common/routes';
import { GridResponse } from '../../models/IGridResponse';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [GridComponent],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent {
  columns : any[];
  loading: boolean = false;
  dataSource: IPlayer[] = [];
  totalRecords: number = 0;
  selectionMode: "single" | "multiple" | null | undefined = GridConstants.singleSelection;

  constructor(private httpService : HttpService<GridResponse>) {
    this.columns = PlayersConfig.columns;
  }

  ngOnInit() {
    this.loading = true;
  }

  loadData = (event: TableLazyLoadEvent) => {
    this.loading = true;
    console.log(event);
    this.httpService.post(Routes.player, event)
      .subscribe(response => 
      {
        this.dataSource = response.records;
        this.totalRecords = response.totalRecords;
        this.loading = false;
      });
  }
}
