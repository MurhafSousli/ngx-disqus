import { Routes } from '@angular/router';

import { DarkComponent } from './dark/dark.component';
import { LightComponent } from './light/light.component';
import { NocontentComponent } from './nocontent/nocontent.component';



export const ROUTES: Routes = [
  { path: '',      component: LightComponent },
  { path: 'light',  component: LightComponent },
  { path: 'dark', component: DarkComponent },
  { path: '**',    component: NocontentComponent },
];
