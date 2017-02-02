import { NgModule } from '@angular/core';
import { DisqusComponent } from './component/disqus.component';
import { DisqusService } from './service/disqus.service';
import { WindowService } from './window/window.service';

@NgModule({
    declarations: [DisqusComponent],
    providers: [WindowService, DisqusService],
    exports: [DisqusComponent]
})
export class DisqusModule { }
export { DisqusComponent }
