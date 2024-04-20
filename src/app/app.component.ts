import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './views/main/main.component';

const views = [MainComponent];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, views],
  template: '<app-main />',
})
export class AppComponent {
  title = 'projects';
  version = 0.1;
}
