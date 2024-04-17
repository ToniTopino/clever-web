import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  public oneSurvey: any[] = [
    { title: 'Male', active: false, image: 'assets/image/male-middle@2x.png' },
    { title: 'Female', active: false, image: 'assets/image/Female-middle@2x.png' },
    { title: 'Other', active: false, image: 'assets/image/Non-binary-middle@2x.png' }
  ];

  public twoSurvey: any[] = [
    { title: '<12', active: false },
    { title: '12-17', active: false },
    { title: '18-55', active: false },
    { title: '>55', active: false },
  ];

  public treeSurvey: any[] = [
    { title: 'Brain fitness', active: false },
    { title: 'Test my IQ & skills', active: false },
    { title: 'Fun & relax', active: false },
    { title: 'Other', active: false },
  ];

  public forSurvey: any[] = [
    { title: 'Problem solving', active: false },
    { title: 'Language', active: false },
    { title: 'Logic', active: false },
    { title: 'Math', active: false },
    { title: 'Memory', active: false },
    { title: 'Focus', active: false },
  ];

  public fiveSurvey: any[] = [
    { title: '3 DAYS FREE TRIAL', description_start: 'then ', description: '$7.99', description_end: ' per week', active: true, price: '$7.99' },
    { title: 'LIFETIME', description_start: '', description: '$39.99', description_end: ', one-time payment ', active: false, price: '$39.99' },
  ];
}
