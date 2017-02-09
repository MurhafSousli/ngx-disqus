import { NgModule } from '@angular/core';
import { DisqusComponent } from './disqus.component';
import { DisqusService } from './disqus.service';
// import { JsonpModule } from '@angular/http';

@NgModule({
    declarations: [DisqusComponent],
    providers: [DisqusService],
    // imports: [JsonpModule],/
    exports: [DisqusComponent]
})
export class DisqusModule { }

