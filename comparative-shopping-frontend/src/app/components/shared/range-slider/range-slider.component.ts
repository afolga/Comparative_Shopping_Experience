import { RangeSliderOptions } from './../../../../shoewizard.interfaces';
import { Options } from '@angular-slider/ngx-slider';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: ' range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent implements OnInit {
  @Input() sliderOptions!: RangeSliderOptions;
  @Output() userChange: EventEmitter<RangeSliderOptions> = new EventEmitter();

  options: Options = {
    floor: 0,
    ceil: 100,
    hidePointerLabels: true,
    hideLimitLabels: true,
  };

  constructor() { }

  ngOnInit(): void {
  }

  onUserChanges(e: any) {
    this.userChange.emit(this.sliderOptions)
  }
}
