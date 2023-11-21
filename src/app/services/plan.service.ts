import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
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
    },
    {
      id: 3,
      active: false,
      title: '3-Month Plan',
      description: '$19,99 per month',
      price: { period: 'per Day', dollars: '1', cents: '15', currency: '$' },
      additional_information: '',
      reset_price: {
        period: 'per month',
        dollars: '19',
        cents: '99',
        currency: '$',
      },
    },
    {
      id: 4,
      active: false,
      title: 'Annual Plan',
      description: '$49,99 per month',
      price: { period: 'per Day', dollars: '1', cents: '15', currency: '$' },
      additional_information: 'Save 87%',
      reset_price: {
        period: 'per month',
        dollars: '49',
        cents: '99',
        currency: '$',
      },
    },
  ];
}
