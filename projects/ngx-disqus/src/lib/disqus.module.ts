import { NgModule } from '@angular/core';
import { Disqus } from './disqus';

@NgModule({
  imports: [Disqus],
  exports: [Disqus]
})
export class DisqusModule {
}
