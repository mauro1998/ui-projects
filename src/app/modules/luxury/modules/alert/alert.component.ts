import { Component, Input } from '@angular/core';

@Component({
  selector: 'lux-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() type: string = 'info';
  @Input() fluid: boolean = false;
  @Input() boldText: string = '';
  @Input() text: string = '';

  constructor() { }

  getCSSClasses() {
    return {
      [`alert--${this.type}`]: true,
      'alert--fluid': !!this.fluid
    };
  }
}
