import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IPlayerView } from '../../models/IPlayerDetailView';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _playerDetailSource = new Subject<IPlayerView>();
  public playerDetailMsg$ = this._playerDetailSource.asObservable();

  constructor() { }

  sendPlayerMsg = (playerDetail: IPlayerView) => {
    this._playerDetailSource.next(playerDetail);
  }
}
