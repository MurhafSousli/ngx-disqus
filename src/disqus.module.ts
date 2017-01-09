import {NgModule} from '@angular/core';
import {Disqus} from './disqus/disqus.component';
import {WindowService} from "./window/window.service";

@NgModule({
    declarations: [Disqus],
    providers: [WindowService],
    exports: [Disqus]
})
export class DisqusModule{
}

export {Disqus}