import { NgModule } from '@angular/core';
import { DisqusComponent } from './disqus.component';
import { DisqusService } from './disqus.service';

@NgModule({
    declarations: [DisqusComponent],
    providers: [DisqusService],
    exports: [DisqusComponent]
})
export class DisqusModule { }

