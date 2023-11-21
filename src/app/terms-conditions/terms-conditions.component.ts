import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss'],
})
export class TermsConditionsComponent {
  constructor() {
    const logo_container: any = document.querySelector('.logo_container');
    logo_container.style.display = 'flex';
  }
}
