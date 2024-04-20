import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};

export interface Project {
  id?: string;
  title?: string;
  matIcon?: string;
  link?: string;
  enabled?: boolean;
}
