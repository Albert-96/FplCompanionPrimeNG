import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MediaDevice, PhoneDevice } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class MediaMessageService {

  private _mediaDeviceSource = new Subject<MediaDevice>();
  private _phoneDeviceSource = new Subject<PhoneDevice>();
  private mediaDevice: MediaDevice = MediaDevice.Large;
  private phoneDevice: PhoneDevice = PhoneDevice.Medium;
  public getDeviceChange$ = this._mediaDeviceSource.asObservable();
  public getPhoneChange$ = this._phoneDeviceSource.asObservable();

  constructor() { }

  sendDeviceChange = (media: MediaDevice) => {
    this.mediaDevice = media;
    this._mediaDeviceSource.next(media);
  }

  sendPhoneChange = (phone: PhoneDevice) => {
    this.phoneDevice = phone;
    this._phoneDeviceSource.next(phone);
  }

  getDevice = () => {
    return this.mediaDevice;
  }

  getPhone = () => {
    return this.phoneDevice;
  }
}
