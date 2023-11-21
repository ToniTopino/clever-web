import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  public oneSurvey: any[] = [
    { title: 'Music', active: false },
    { title: 'Memory', active: false },
    { title: 'Math', active: false },
    { title: 'Logic', active: false },
    { title: 'Vigilance', active: false },
    { title: 'Art & Creativity', active: false },
    { title: 'Other', active: false },
  ];

  public twoSurvey: any[] = [
    { title: 'Brain training', active: false },
    { title: 'Easy games', active: false },
    { title: 'Puzzles', active: false },
    { title: 'Board Games', active: false },
    { title: 'Card', active: false },
    { title: 'Word', active: false },
    { title: 'Action', active: false },
  ];

  public treeSurvey: any[] = [
    { title: 'Alone', active: false },
    { title: 'With friends', active: false },
    { title: 'Both options', active: false },
  ];

  public forSurvey: any[] = [
    { title: 'Self-development', active: false },
    { title: 'Time kill', active: false },
    { title: 'Entertainment', active: false },
    { title: 'Curiosity', active: false },
  ];

  public fiveSurvey: any[] = [
    { title: 'Very superior (IQ > 130)', active: false },
    { title: 'Superior (IQ 120 -129)', active: false },
    { title: 'Bright normal (110 - 119)', active: false },
    { title: 'Average (90 - 109)', active: false },
    { title: 'Dull normal (80 - 89)', active: false },
    { title: 'Borderline (70 - 79)', active: false },
    { title: 'Below 70 (Mentally retarded)', active: false },
  ];

  public sixSurvey: any[] = [
    { title: 'Under 12', active: false },
    { title: '12-17', active: false },
    { title: '18-24', active: false },
    { title: '25-34', active: false },
    { title: '35-44', active: false },
    { title: '45-54', active: false },
    { title: '55 or older', active: false },
  ];
}
