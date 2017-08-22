import { Injectable, Optional } from '@angular/core';

declare const global;

@Injectable()
export class DisqusService {

  constructor(public shortname: string) {
  }

  get window(): any {
    return _window();
  }
}

function _window(): any {
  return typeof window !== 'undefined' ? window : global;
}

