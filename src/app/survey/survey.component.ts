import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../services/survey.service';
import { Router } from '@angular/router';
import { AmplitudeService } from '../services/amplitude.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
})
export class SurveyComponent implements OnInit {
  public approveActive = false;
  public approveTwoActive = false;
  public activeIndexCarousel = 0;
  public width = 16.6;
  private surveyOneAnalytics: any[] = [];
  private surveyTwoAnalytics: any[] = [];
  private surveyTreeAnalytics: any[] = [];
  private surveyForAnalytics: any[] = [];
  private surveyFiveAnalytics: any[] = [];
  private surveySixAnalytics: any[] = [];

  constructor(
    public surveyService: SurveyService,
    private router: Router,
    private amplitudeService: AmplitudeService
  ) {}

  ngOnInit(): void {
    const logo: any = document.querySelector('.logo_container');
    logo.style.display = 'flex';
  }

  activeSurvey(title: string, activeIndex: number, arraySurvey: any[]): any {
    if (this.activeIndexCarousel === activeIndex) {
      arraySurvey.reduce((acc, item) => {
        if (activeIndex < 2) {
          if (item.title === title) {
            item.active = item.title === title && !item.active;
            if (activeIndex === 0) {
              this.surveyOneAnalytics = this.uniqArray(
                this.surveyOneAnalytics,
                item.title
              );
            }
            if (activeIndex === 1) {
              this.surveyTwoAnalytics = this.uniqArray(
                this.surveyTwoAnalytics,
                item.title
              );
            }
          }
        } else {
          item.active = item.title === title && true;
          if (activeIndex === 2) {
            this.surveyTreeAnalytics.push(title);
          }
          if (activeIndex === 3) {
            this.surveyForAnalytics.push(title);
          }
          if (activeIndex === 4) {
            this.surveyFiveAnalytics.push(title);
          }
          if (activeIndex === 5) {
            this.surveySixAnalytics.push(title);
          }
        }

        return acc;
      }, []);
    }
    this.findActiveApprove(activeIndex, arraySurvey);
    if (activeIndex === 5) {
      setTimeout(async () => {
        this.amplitudeService.eventAnalytics('tap_approve_6', {
          choices: _.uniq(this.surveySixAnalytics).join(', '),
        });
        await this.router.navigate(['loading']);
      }, 100);
    }
  }

  activeSurveyAll(arraySurvey: any[]) {
    arraySurvey.reduce((acc, item) => {
      item.active = true;
      this.approveActive = true;
      return acc;
    }, []);
  }

  findActiveApprove(activeIndex: number, arraySurvey: any[]) {
    if (activeIndex < 1) {
      if (this.activeIndexCarousel === activeIndex) {
        return arraySurvey.find((item) =>
          item.active
            ? (this.approveActive = true)
            : (this.approveActive = false)
        );
      }
    } else {
      if (this.activeIndexCarousel === activeIndex) {
        return arraySurvey.find((item) =>
          item.active
            ? (this.approveTwoActive = true)
            : (this.approveTwoActive = false)
        );
      }
    }
  }

  async onItemChange($event: number) {
    this.activeIndexCarousel = $event;
    if ($event === 0) {
      this.amplitudeService.eventAnalytics('open_page_1', null);
    }
    if ($event === 1) {
      if (
        this.surveyOneAnalytics.length == 0 ||
        _.uniq(this.surveyOneAnalytics).length == 7
      ) {
        this.amplitudeService.eventAnalytics('tap_approve_1', {
          choices: 'Like It All',
        });
      } else {
        this.amplitudeService.eventAnalytics('tap_approve_1', {
          choices: _.uniq(this.surveyOneAnalytics).join(', '),
        });
      }
      this.amplitudeService.eventAnalytics('open_page_2', null);
    }
    if ($event === 2) {
      if (this.surveyTwoAnalytics.length == 0) {
        this.amplitudeService.eventAnalytics('tap_approve_2', {
          choices: 'Skip',
        });
      } else {
        this.amplitudeService.eventAnalytics('tap_approve_2', {
          choices: _.uniq(this.surveyTwoAnalytics).join(', '),
        });
      }
      this.amplitudeService.eventAnalytics('open_page_3', null);
    }
    if ($event === 3) {
      this.amplitudeService.eventAnalytics('tap_approve_3', {
        choices: _.uniq(this.surveyTreeAnalytics).join(', '),
      });
      this.amplitudeService.eventAnalytics('open_page_4', null);
    }
    if ($event === 4) {
      this.amplitudeService.eventAnalytics('tap_approve_4', {
        choices: _.uniq(this.surveyForAnalytics).join(', '),
      });
      this.amplitudeService.eventAnalytics('open_page_5', null);
    }
    if ($event === 5) {
      this.amplitudeService.eventAnalytics('tap_approve_5', {
        choices: _.uniq(this.surveyFiveAnalytics).join(', '),
      });
      this.amplitudeService.eventAnalytics('open_page_6', null);
    }
  }

  prevActiveIndexCarousel() {
    this.width = this.width - 16.6;
  }

  nextActiveIndexCarousel() {
    this.activeIndexCarousel === 5
      ? (this.width = 100)
      : (this.width = this.width + 16.6);
  }

  uniqArray(arr: any[], value: string) {
    if (_.indexOf(arr, value) === -1) {
      const copy = arr.slice();
      copy.push(value);

      return copy;
    }

    return _.without(arr, value);
  }
}
