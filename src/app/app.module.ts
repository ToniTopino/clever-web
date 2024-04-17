import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';

import { CarouselModule } from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './loading/loading.component';

import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { HomeComponent } from './home/home.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    LoadingComponent,
    HomeComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    IconModule,
    BrowserAnimationsModule,
    RoundProgressModule,
    SlickCarouselModule,
    FormsModule
  ],
  providers: [IconSetService],
  bootstrap: [AppComponent]
})
export class AppModule {}
