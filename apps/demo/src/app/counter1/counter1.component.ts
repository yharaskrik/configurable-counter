import { Component, OnInit } from '@angular/core';
import {
  ConfigurableCounter,
  provideConfigurableCounter,
} from '@yharaskrik/configurable-counter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'configurable-counter-counter1',
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.css'],
  providers: [
    provideConfigurableCounter({
      interval: 0.5,
      start: 0,
      step: 0.1,
    }),
  ],
  standalone: true,
  imports: [CommonModule],
})
export class Counter1Component implements OnInit {
  counter$ = this.configurableCounter.counter$;
  constructor(private configurableCounter: ConfigurableCounter) {}

  ngOnInit(): void {}
}
