import { Injectable } from '@angular/core';
import { track, init, flush } from '@amplitude/analytics-browser';

@Injectable({
  providedIn: 'root',
})
export class AmplitudeService {
  constructor() {
    // init('a2581b6cc15fe576679a020998a609ed');
  }

  eventAnalytics(event: any, property: any) {
    track(event, property).promise.then((result) => {
      console.log(result.code);
    });

    flush();
  }
}
