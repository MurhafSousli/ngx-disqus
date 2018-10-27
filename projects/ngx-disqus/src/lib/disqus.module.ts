import { NgModule, ModuleWithProviders } from '@angular/core';
import { DisqusComponent } from './disqus.component';
import { SHORTNAME } from './disqus.token';
import { WINDOW_PROVIDERS } from './window.service';

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
        { provide: SHORTNAME, useValue: shortname }
      ]
    };
  }
}
