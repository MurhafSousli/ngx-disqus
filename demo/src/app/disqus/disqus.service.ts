import { Injectable, Renderer } from '@angular/core';

declare const global: any; // To make AoT compiler (ngc) happy

@Injectable()
export class DisqusService {

  window;

  constructor() {
    this.window = nativeWindow();
  }

  get url(): string {
    return (this.window) ? this.window.location.href : (<any>global).url || '';
  }

  get disqus(): any {
    return (this.window) ? this.window.DISQUS : (<any>global).DISQUS;
  }

}

const nativeWindow = (): any => {
  // return the global native browser window object
  return typeof window !== 'undefined' ? window : undefined;
}
