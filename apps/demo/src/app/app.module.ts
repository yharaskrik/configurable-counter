import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Counter2Component } from './counter2/counter2.component';
import { Counter1Component } from './counter1/counter1.component';
import { Counter3Component } from './counter3/counter3.component';
import { CounterDisplayComponent, provideCounter } from '@yharaskrik/counter';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    Counter1Component,
    Counter2Component,
    Counter3Component,
    CounterDisplayComponent,
  ],
  providers: [
    provideCounter({
      interval: 500,
      step: 0.1,
      start: 1,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
