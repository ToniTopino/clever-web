import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  public activePlan: any = {
    title: '3 DAYS FREE TRIAL',
    description_start: 'then ',
    description: '$7.99',
    description_end: ' per week',
    active: true,
    price: '$7.99'
  }
  public planList: any[] = [
    {
      id: 1,
      active: true,
      title: '3 Days FREE',
      description: 'then $7,99 per week',
      price: { period: 'per Day', dollars: '1', cents: '15', currency: '$' },
      additional_information: '',
      reset_price: {
        period: 'per week',
        dollars: '7',
        cents: '99',
        currency: '$',
      },
    },
    {
      id: 2,
      active: false,
      title: '1-Month Plan',
      description: '$19,99 per month',
      price: { period: 'per Day', dollars: '1', cents: '15', currency: '$' },
      additional_information: '',
      reset_price: {
        period: 'per month',
        dollars: '19',
        cents: '99',
        currency: '$',
      },
    }
  ];
}
