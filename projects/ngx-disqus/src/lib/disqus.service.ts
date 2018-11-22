import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DISQUS_SHORTNAME } from './disqus.model';

@Injectable({
  providedIn: 'root'
})
export class DisqusService {

  get DISQUS(): any {
    return this._document.defaultView.DISQUS;
  }

  get disqus_config(): any {
    return this._document.defaultView.disqus_config;
  }

  set disqus_config(config: any) {
    this._document.defaultView.disqus_config = config;
  }

  constructor( @Inject(DISQUS_SHORTNAME) public shortname: string, @Inject(DOCUMENT) private _document: any) {
  }
}

