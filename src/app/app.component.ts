import { Component } from '@angular/core';
import { fadeAnimation } from './animations/fade-animation';
import { AmplitudeService } from './services/amplitude.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation],
})
export class AppComponent {
  public activeDownloadBtn = false;

  constructor(private amplitudeService: AmplitudeService) {}

  appStoreLink(button_placement: string) {
    window.open('https://supernovaapp.onelink.me/kbYW/1gxjfrxr', '_blank');
    if (button_placement === 'top') {
      this.amplitudeService.eventAnalytics('tap_main_download_top', null);
    }
    if (button_placement === 'bottom') {
      this.amplitudeService.eventAnalytics('tap_main_download_bottom', null);
    }
  }
}
