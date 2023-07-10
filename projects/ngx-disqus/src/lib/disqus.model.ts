import { InjectionToken } from '@angular/core';

export const DISQUS_SHORTNAME: InjectionToken<string> = new InjectionToken<string>('DISQUS_SHORTNAME');

export interface DisqusComment {
  id: number;
  name: string;
}

export interface DisqusReady {
  height: number;
}
