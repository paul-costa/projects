import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync()],
};

export interface Project {
  id?: string;
  title?: string;
  matIcon?: string;
  link?: string;
  enabled?: boolean;
}

export interface ToolbarButtonConfig {
  tooltip: string;
  matIcon: string;
  onClick: () => void;
}
