import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DISQUS_SHORTNAME } from './disqus.model';

@Injectable({
  providedIn: 'root'
})
export class DisqusService {

  get DISQUS(): any {
    return this.document.defaultView['DISQUS'];
  }

  get config(): any {
    return this.document.defaultView['disqus_config'];
  }

  set config(config: any) {
    this.document.defaultView['disqus_config'] = config;
  }

  constructor(@Inject(DISQUS_SHORTNAME) public shortname: string, @Inject(DOCUMENT) private document: Document) {
  }
}
