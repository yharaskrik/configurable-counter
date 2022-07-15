import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Counter } from './counter';

@Component({
  selector: 'configurable-counter-counter-display',
  standalone: true,
  imports: [CommonModule],
  template: ` <div>display works! {{ counter$ | async | number }}</div> `,
  styles: [],
})
export class CounterDisplayComponent {
  readonly counter$ = this.counter.counter$;

  constructor(private counter: Counter) {}

  @Input() set step(step: number) {
    this.counter.setStep(step);
  }
}
