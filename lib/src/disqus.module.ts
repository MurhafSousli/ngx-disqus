import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { DisqusComponent } from './disqus.component';
import { DisqusService } from './disqus.service';
import { SHORTNAME } from './disqus.token';

/** Initialize Disqus with shortname */
export function DisqusFactory(shortname: string) {
  return new DisqusService(shortname);
}

@NgModule({
  declarations: [DisqusComponent],
  exports: [DisqusComponent]
})
export class DisqusModule {
  static forRoot(shortname: string): ModuleWithProviders {
    return {
      ngModule: DisqusModule,
      providers: [
        { provide: SHORTNAME, useValue: shortname },
        {
          provide: DisqusService,
          useFactory: DisqusFactory,
          deps: [SHORTNAME]
        }
      ]
    };
  }
}
