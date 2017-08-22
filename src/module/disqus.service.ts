import { Injectable } from '@angular/core';

declare const global: any;

@Injectable()
export class DisqusService {

  constructor(public shortname: string) {
  }

  get window() {
    return _window();
  }
}

function _window() {
  return typeof window !== 'undefined' ? window : global;
}

