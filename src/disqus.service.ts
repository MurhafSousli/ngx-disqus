import { Injectable } from '@angular/core';
// import { Jsonp } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/empty';
// import 'rxjs/add/operator/catch';

const nativeWindow = (): any => {
  // return the global native browser window object
  return typeof window !== 'undefined' ? window : undefined;
};

export interface DisqusWidget {
  proto;
  forum;
  displayCount;
  getCount;
}

declare const global: any; // To make AoT compiler (ngc) happy

@Injectable()
export class DisqusService {

  window;

  // constructor(private jsonp: Jsonp) {
  constructor() {
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

  get disqusWidget(): DisqusWidget {
    return (this.window) ? this.window.DISQUSWIDGETS : (<any>global).DISQUSWIDGETS;
  }

  // getCount() {

  //   //TODO: http://ng2.disqus.com/count-data.js?2=https://murhafsousli.github.io/ng2-disqus/
  //   let proto = 'https:';
  //   let forum = 'ng2';
  //   let url = 'https://murhafsousli.github.io/ng2-disqus/';
  //   let finalUrl = `${proto}//${forum}.disqus.com/count-data.js?callback=JSONP_CALLBACK&2=${url}`;
  //   console.log(finalUrl);
  //   return this.jsonp.request(finalUrl)
  //     .map((data: any) => {
  //       console.log(data);
  //       data = data.text();
  //       let result = JSON.parse(data.replace(/^displayCount\((.*)\)/, '$1'));
  //       return result.count || 0;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       return Observable.empty()
  //     });
  // }

}

