import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class ConfigService {
  settings: any;
  defaultSettings: any;
  onSettingsChanged: BehaviorSubject<any>;

  constructor() {
    this.defaultSettings = {
      colorClasses: {
<<<<<<< HEAD
        header: 'stbui-background-primary',
        footer: 'stbui-background-blue',
        brand: 'stbui-background-primary',
        navigation: 'stbui-background-white'
=======
        header: "stbui-background-primary",
        footer: "stbui-background-blue",
        brand: "stbui-background-primary",
        navigation: "stbui-background-dark"
>>>>>>> 8dd581ef4860bfdfda0edd154bba04c9f78dfc64
      },
      layout: {
        mode: "fullwidth",
        navigation: "left",
        header: "below",
        footer: "below"
      }
    };

    this.settings = Object.assign({}, this.defaultSettings);
    this.onSettingsChanged = new BehaviorSubject(this.settings);
  }

  setSettings(setting) {
    this.settings = Object.assign({}, this.settings, setting);
    this.onSettingsChanged.next(this.settings);
  }
}
