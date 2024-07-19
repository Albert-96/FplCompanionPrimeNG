import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { SplitterModule } from 'primeng/splitter';
import { IPlayerView } from '../../models/IPlayerDetailView';

@Component({
  selector: 'app-player-detail-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule, PanelModule, SplitterModule],
  providers: [DialogService],
  templateUrl: './player-detail-dialog.component.html',
  styleUrl: './player-detail-dialog.component.css'
})
export class PlayerDetailDialogComponent implements OnInit{
  visible: boolean = false;
  playerDetail!: IPlayerView;


  constructor (
    public dialogService: DialogService,
    private messageService: MessageService) {
  }

  ngOnInit() {
    this.messageService.playerDetailMsg$.subscribe(
      (message) => { this.playerDetail = message }
    );
  }
}
