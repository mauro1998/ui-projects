import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lux-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() highlight: boolean = false;
  @Input() fluid: boolean = false;
  @Input() padding: number;

  constructor() { }

  ngOnInit() {
  }

}
