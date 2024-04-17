import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../services/survey.service';
import { Router } from '@angular/router';
import { AmplitudeService } from '../services/amplitude.service';
import { indexOf, uniq, without } from 'lodash';
import {elementAt} from "rxjs";
import {PlanService} from "../services/plan.service";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
})
export class SurveyComponent implements OnInit {
  public approveActive = false;
  public approveTwoActive = false;
  public activeIndexCarousel = 0;
  public activeIndexCarouselFirst: number = 0;
  public width = 16.66;
  private surveyOneAnalytics: any[] = [];
  private surveyTwoAnalytics: any[] = [];
  private surveyTreeAnalytics: any[] = [];
  private surveyForAnalytics: any[] = [];
  private surveyFiveAnalytics: any[] = [];
  private surveySixAnalytics: any[] = [];
  public showDoteCarusel: boolean = true;
  public nameButtom: string = 'Next';
  public activeImageGender: string = 'assets/image/empty_face.png';
  public controlNext: boolean = true;
  public termsShow: boolean = false;

  constructor(
    public surveyService: SurveyService,
    private router: Router,
    private amplitudeService: AmplitudeService,
    private planService: PlanService,
  ) {}

  ngOnInit(): void {

  }

  activeSurvey(title: string, activeIndex: number, arraySurvey: any[]): any {
    if (this.activeIndexCarousel === activeIndex) {
      arraySurvey.reduce((acc, item) => {

        if (activeIndex === 1) {
          if (item.title === title) {
            arraySurvey.forEach(element => element.active = false);
            item.active = true;
            this.nameButtom = 'Next';
            this.activeImageGender = item.image;
          }

        }
        if (activeIndex === 2) {
          if (item.title === title) {
            arraySurvey.forEach(element => element.active = false);
            item.active = true;
            this.nameButtom = 'Next';
          }
        }
        if (activeIndex === 3) {
          let findActive = 0;
          if (item.title === title) {
            item.active = !item.active;
            this.nameButtom = 'Next';
            arraySurvey.forEach(element => {
              if (element.active) {
                findActive++
              }
            });
            if (findActive === 0) {
              this.nameButtom = 'Skip'
            }
          }
        }
        if (activeIndex === 4) {
          let findActive = 0;
          if (item.title === title) {
            item.active = !item.active;
            this.nameButtom = 'Next';
            arraySurvey.forEach(element => {
              if (element.active) {
                findActive++
              }
            });
            if (findActive === 0) {
              this.nameButtom = 'like it all'
            }
          }
        }

        if (activeIndex === 5) {
          if (item.title === title) {
            arraySurvey.forEach(element => element.active = false);
            item.active = true;
            if (item.title === '3 DAYS FREE TRIAL') {
              this.nameButtom = 'TRY FREE & UNLOCK';
            } else {
              this.nameButtom = 'NEXT';
            }
          }
          arraySurvey.forEach((element) => {
            if (element.active) {
              this.planService.activePlan = element;
            }
          })
        }

        return acc;
      }, []);
    }
    this.findActiveApprove(activeIndex, arraySurvey);
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

  async onItemChangeFirst($event: number) {
    if ($event >= 3) {
      if (window.innerHeight <= 660) {
        let dots: any = document.querySelector('.dots-carousel-first');
        dots.style.display = 'none'
      }
    } else {
      if (window.innerHeight <= 660) {
        let dots: any = document.querySelector('.dots-carousel-first');
        dots.style.display = 'flex'
      }
    }
    this.activeIndexCarouselFirst = $event;
    if ($event !== 7) {
      this.controlNext = true;
    }
    if ($event === 7) {
      setTimeout(() => {
        this.termsShow = true
      }, 200)
    } else {
      setTimeout(() => {
        this.termsShow = false;
      }, 200)
    }
    if ($event === 2) {
      this.showDoteCarusel = true;
      setTimeout(() => {
        this.nameButtom = 'Next'
      }, 350);

    }
    if ($event === 3) {
      this.nameButtom = 'Maybe later';
      this.surveyService.oneSurvey.find(element => {
        switch (element.active) {
          case true:
            this.nameButtom = 'Next'
            break;
        }
      });
    }

    if ($event === 4) {
      this.nameButtom = 'Skip';
      if (this.activeImageGender === 'assets/image/empty_face.png') {
        setTimeout(() => {
          this.activeImageGender = 'assets/image/No-choice@2x.png';
        }, 300);
      }
      this.surveyService.twoSurvey.find(element => {
        switch (element.active) {
          case true:
            this.nameButtom = 'Next'
            break;
        }
      });
    }

    if ($event === 5) {
      this.nameButtom = 'Skip'
      this.surveyService.treeSurvey.find(element => {
        switch (element.active) {
          case true:
            this.nameButtom = 'Next'
            break;
        }
      });
    }

    if ($event === 6) {
      this.nameButtom = 'like it all'
      this.surveyService.forSurvey.find(element => {
        switch (element.active) {
          case true:
            this.nameButtom = 'Next'
            break;
        }
      });
    }

    if ($event === 7) {
      this.controlNext = false;
      this.nameButtom = 'TRY FREE & UNLOCK';

    }
  }

  lastBtnControll() {
    setTimeout(async () => {
      await this.router.navigate(['payment']);
    }, 150);
  }

  async onItemChange($event: number) {
    this.activeIndexCarousel = $event;
    if ($event === 0) {
      this.amplitudeService.eventAnalytics('open_page_1', null);
    }
    if ($event === 1) {
      if (
        this.surveyOneAnalytics.length == 0 ||
        uniq(this.surveyOneAnalytics).length == 7
      ) {
        this.amplitudeService.eventAnalytics('tap_approve_1', {
          choices: 'Like It All',
        });
      } else {
        this.amplitudeService.eventAnalytics('tap_approve_1', {
          choices: uniq(this.surveyOneAnalytics).join(', '),
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
          choices: uniq(this.surveyTwoAnalytics).join(', '),
        });
      }
      this.amplitudeService.eventAnalytics('open_page_3', null);
    }
    if ($event === 3) {
      this.amplitudeService.eventAnalytics('tap_approve_3', {
        choices: uniq(this.surveyTreeAnalytics).join(', '),
      });
      this.amplitudeService.eventAnalytics('open_page_4', null);
    }
    if ($event === 4) {
      this.amplitudeService.eventAnalytics('tap_approve_4', {
        choices: uniq(this.surveyForAnalytics).join(', '),
      });
      this.amplitudeService.eventAnalytics('open_page_5', null);
    }
    if ($event === 5) {
      this.amplitudeService.eventAnalytics('tap_approve_5', {
        choices: uniq(this.surveyFiveAnalytics).join(', '),
      });
      this.amplitudeService.eventAnalytics('open_page_6', null);
    }
  }

  nextActiveIndexCarousel() {
    this.activeIndexCarousel === 5
      ? (this.width = 100)
      : (this.width = this.width + 16.66);
  }

  nextActiveIndexCarouselFirst() {
    if (
      this.activeIndexCarouselFirst === 3 ||
      this.activeIndexCarouselFirst === 4 ||
      this.activeIndexCarouselFirst === 5 ||
      this.activeIndexCarouselFirst === 6 ||
      this.activeIndexCarouselFirst === 7
    ) {
      this.showDoteCarusel = false;
      this.width = this.width + 16.66;
      this.activeIndexCarousel++
    } else {
      this.showDoteCarusel = true;
    }
  }

  prevActiveIndexCarouselFirst() {
    this.width = this.width - 16.66;
    this.activeIndexCarousel--;
    if (this.activeIndexCarouselFirst === 2) {
      this.showDoteCarusel = true;
    }
  }

  uniqArray(arr: any[], value: string) {

    if (indexOf(arr, value) === -1) {
      const copy = arr.slice();
      copy.push(value);

      return copy;
    }

    return without(arr, value);
  }

  privacyLink() {
    window.open('/privacy-policy', '_blank');
  }

  termsLink() {
    window.open('/terms-of-use', '_blank');
  }
}
