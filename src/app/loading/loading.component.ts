import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AmplitudeService } from '../services/amplitude.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  public current = 0;
  public processTitle = 'Data analysing...';

  constructor(
    private router: Router,
    private amplitudeService: AmplitudeService
  ) {}

  ngOnInit(): void {
    this.loadingProcess();
    this.amplitudeService.eventAnalytics('open_page_data_analytics', null);
  }

  loadingProcess() {
    setTimeout(() => {
      const interval = setInterval(() => {
        this.current++;
        if (this.current === 42) {
          this.processTitle = 'Person formation...';
        }
        if (this.current === 70) {
          this.processTitle = 'Creating a training program...';
        }
        if (this.current === 100) {
          clearInterval(interval);
          setTimeout(async () => {
            await this.router.navigate(['home']);
          }, 300);
        }
      }, 50);
    }, 700);
  }
}
