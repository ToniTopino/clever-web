import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent {
  constructor() {
    const logo_container: any = document.querySelector('.logo_container');
    logo_container.style.display = 'flex';
  }
}
