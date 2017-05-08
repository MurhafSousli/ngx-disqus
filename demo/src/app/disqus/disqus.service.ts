import { Injectable, Optional } from '@angular/core';

@Injectable()
export class DisqusService {

  shortname;

  constructor( @Optional() shortname: string) {
    this.shortname = shortname;
  }
}

