import { Injectable } from '@angular/core';
import { MediaDevice, PhoneDevice } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class SharedLogicService {

  constructor() { }

  getScreenColumnConfig = (
    mediaDevice: MediaDevice,
    phoneDevice: PhoneDevice,
    Large: any[],
    Medium: any[],
    Small: any[],
    XSmall: any[]
  ) => {
    console.log(mediaDevice + ":" + phoneDevice);
    if (mediaDevice == MediaDevice.Large) {
      return Large;
    }
    else {
      if (phoneDevice == PhoneDevice.XSmall) {
        return XSmall;
      }
      else if (phoneDevice == PhoneDevice.Small) {
        return Small;
      }
      else {
        return Medium;
      }
    }
  }
}
