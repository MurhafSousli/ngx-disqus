import { Injectable, Inject } from '@angular/core';
import { SHORTNAME } from './disqus.token';
import { WINDOW } from './window.service';

@Injectable()
export class DisqusService {

  get DISQUS(): any {
    return this._window.DISQUS;
  }

  get disqus_config(): any {
    return this._window.disqus_config;
  }

  set disqus_config(config: any) {
    this._window.disqus_config = config;
  }

  constructor( @Inject(SHORTNAME) public shortname: string, @Inject(WINDOW) private _window: any) {
  }
}

