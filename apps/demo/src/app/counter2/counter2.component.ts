import { Component, OnInit } from '@angular/core';
import {
  ConfigurableCounter,
  provideConfigurableCounter,
} from '@yharaskrik/configurable-counter';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'configurable-counter-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.css'],
  standalone: true,
  providers: [
    provideConfigurableCounter({
      interval: 1,
      start: 0,
      step: 0.5,
    }),
  ],
  imports: [CommonModule],
})
export class Counter2Component implements OnInit {
  counter$ = this.configurableCounter.counter$;
  constructor(private configurableCounter: ConfigurableCounter) {}

  ngOnInit(): void {}
}
