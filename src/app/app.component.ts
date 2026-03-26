import { Component } from '@angular/core';
import { MainComponent } from './views/main/main.component';

@Component({
  selector: 'app-root',
  imports: [MainComponent],
  template: '<app-main />',
})
export class AppComponent {}
