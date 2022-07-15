import { Component } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'configurable-counter-root',
  template: `
    <configurable-counter-counter-display
      *ngIf="step$ | async as step"
      [step]="step"
    ></configurable-counter-counter-display>
    <div>
      <configurable-counter-counter1></configurable-counter-counter1>
    </div>
    <div>
      <configurable-counter-counter2></configurable-counter-counter2>
    </div>
    <div>
      <configurable-counter-counter3></configurable-counter-counter3>
    </div>
  `,
  styles: [``],
})
export class AppComponent {
  step$ = interval(1000).pipe(map(() => Math.floor(Math.random() * 100)));
}
