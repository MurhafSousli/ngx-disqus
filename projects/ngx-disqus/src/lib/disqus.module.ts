import { NgModule, ModuleWithProviders } from '@angular/core';
import { DisqusComponent } from './disqus.component';
import { DisqusService } from './disqus.service';
import { SHORTNAME } from './disqus.token';
import { WINDOW_PROVIDERS, WINDOW } from './window.service';

/** Initialize Disqus with shortname */
export function DisqusFactory(shortname: string, window: any) {
  return new DisqusService(shortname, window);
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
        WINDOW_PROVIDERS,
        { provide: SHORTNAME, useValue: shortname },
        {
          provide: DisqusService,
          useFactory: DisqusFactory,
          deps: [SHORTNAME, WINDOW]
        },
      ]
    };
  }
}
