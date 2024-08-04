import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MediaDevice } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class MediaMessageService {

  private _playerDetailSource = new Subject<MediaDevice>();
  private mediaDevice: MediaDevice = MediaDevice.Large;
  public getDeviceChange$ = this._playerDetailSource.asObservable();

  constructor() { }

  sendDeviceChange = (media: MediaDevice) => {
    this.mediaDevice = media;
    this._playerDetailSource.next(media);
  }

  getDevice = () => {
    return this.mediaDevice;
  }
}
