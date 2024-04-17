import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AmplitudeService } from '../services/amplitude.service';
import { PlanService } from '../services/plan.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public activePlanId = 1;
  public slides: any[] = [
    { img: 'assets/image/game-1.png', title: 'Pin Connect' },
    { img: 'assets/image/game-2.png', title: 'Twin Tones' },
    { img: 'assets/image/game-3.png', title: 'Memory Eclipse' },
    { img: 'assets/image/game-4.png', title: 'Calculation' },
    { img: 'assets/image/game-5.png', title: 'Sequence' },
    { img: 'assets/image/game-6.png', title: 'Space Beat' },
  ];

  public slideConfig: any = {
    slidesToShow: 5,
    slidesToScroll: 3,
    infinity: true,
    centerMode: true,
    dots: false,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          centerMode: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          centerMode: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          centerMode: true,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1450,
        settings: {
          centerMode: true,
          slidesToShow: 5,
        },
      },
    ],
  };

  constructor(
    public appComponent: AppComponent,
    private amplitudeService: AmplitudeService,
    public planService: PlanService
  ) {
    if (window.innerWidth <= 920) {
      const logo: any = document.querySelector('.logo_container');
      logo.style.display = 'none';
    }
    const background_container: any = document.querySelector(
      '.background_container'
    );
    background_container.style.backgroundImage = 'none';
  }

  ngOnInit(): void {
    Promise.resolve().then(() => (this.appComponent.activeDownloadBtn = true));
    this.amplitudeService.eventAnalytics('open_page_main', null);
  }

  ngOnDestroy(): void {
    Promise.resolve().then(() => (this.appComponent.activeDownloadBtn = false));
  }

  privacyLink() {
    window.open('/privacy-policy', '_blank');
  }

  termsLink() {
    window.open('/terms-of-use', '_blank');
  }

  planListActive(id: number) {
    this.activePlanId = id;
    this.planService.planList.reduce((acc, plan) => {
      plan.id === id ? (plan.active = true) : (plan.active = false);
      acc.push(plan);
      return acc;
    }, []);
  }
}
