import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlanService } from '../services/plan.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit, OnDestroy {
  public activePlan: any;
  public cardExpiresData: string = '';

  constructor(
    public planService: PlanService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const background_container: any = document.querySelector(
      '.background_container'
    );
    const app_home: any = document.querySelector(
      'app-home'
    );
    const header: any = document.querySelector('.header');
    const body: any = document.querySelector('body');
    background_container.style.backgroundImage = 'none';
    header.style.display = 'none';
    body.style.overflow = 'auto';
    if (app_home) {
      app_home.style.display = 'none';
    }

    this.route.queryParams.subscribe((params: any) => {
      this.planService.planList.filter((plan: any) =>
        plan.id === Number(params.plan) ? (this.activePlan = plan) : {}
      );
    });
  }

  ngOnDestroy() {
    const header: any = document.querySelector('.header');

    if (header) {
      setTimeout(() => {
        header.style.display = 'flex';
      }, 200)
    }

  }

  cardExpires(event: any) {
    if (event.keyCode === 8) {
      return
    }
    if (this.cardExpiresData.length === 2) {
      this.cardExpiresData += ' / '
    }
  }

  privacyLink() {
    window.open('/privacy-policy', '_blank');
  }

  termsLink() {
    window.open('/terms-of-use', '_blank');
  }
}
