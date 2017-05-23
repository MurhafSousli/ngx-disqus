import { Injectable, Optional } from '@angular/core';

@Injectable()
export class DisqusService {

  shortname;

  constructor( @Optional() shortname: string) {
    this.shortname = shortname;
  }

  get window(): any {
    return _window();
  }
}

function _window(): any {
  return typeof window !== 'undefined' ? window : global;
}

