import { NgModule, ModuleWithProviders } from '@angular/core';
import { DisqusComponent } from './disqus.component';
import { SHORTNAME } from './disqus.token';

@NgModule({
  declarations: [DisqusComponent],
  exports: [DisqusComponent]
})
export class DisqusModule {
  static forRoot(shortname: string): ModuleWithProviders {
    return {
      ngModule: DisqusModule,
      providers: [
        { provide: SHORTNAME, useValue: shortname }
      ]
    };
  }
}
