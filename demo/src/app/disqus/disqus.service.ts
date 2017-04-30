import {Injectable} from '@angular/core';

const nativeWindow = (): any => {
  // return the global native browser window object
  return typeof window !== 'undefined' ? window : undefined;
};

// To make AoT compiler (ngc) happy
declare const global: any;

@Injectable()
export class DisqusService {

  window;

  constructor() {
    // constructor() {
    this.window = nativeWindow();
  }

  get url(): string {
    return (this.window) ? this.window.location.href : (<any>global).url || '';
  }

  get disqus(): any {
    return (this.window) ? this.window.DISQUS : (<any>global).DISQUS;
  }

  get disqusConfig(): any {
    return (this.window) ? this.window.disqus_config : (<any>global).disqus_config;
  }

  set disqusConfig(config) {
    if (this.window) {
      this.window.disqus_config = config;
    } else {
      (<any>global).disqus_config = config;
    }
  }

  validateUrl(url: string) {
    /** If URL is specified then validate it, otherwise use window URL */
    if (url) {
      const r = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

      if (r.test(url)) {
        return url;
      } else {
        console.warn('[Disqus]: Invalid URL, fallback to Window URL');
      }
    }
    /** fallback to "Window" URL, or to "Global" in universal */
    return this.url;
  };
}

