import { NgModule, ModuleWithProviders } from '@angular/core';
import { DisqusComponent } from './disqus.component';
import { DISQUS_SHORTNAME } from './disqus.model';

@NgModule({
  declarations: [DisqusComponent],
  exports: [DisqusComponent]
})
export class DisqusModule {
  static forRoot(shortname: string): ModuleWithProviders<DisqusModule> {
    return {
      ngModule: DisqusModule,
      providers: [
        { provide: DISQUS_SHORTNAME, useValue: shortname }
      ]
    };
  }
}
