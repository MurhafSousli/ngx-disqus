import { Routes, RouterModule } from '@angular/router';
import { LightTheme } from './light';
import { DarkTheme } from './dark';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: LightTheme },
  { path: 'light',  component: LightTheme },
  { path: 'dark', component: DarkTheme },
  { path: '**',    component: NoContent },
];
