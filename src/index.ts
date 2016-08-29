import {Disqus} from './disqus/disqus.component';

import {NgModule} from '@angular/core';

@NgModule({
    declarations: [Disqus],
    exports: [Disqus]
})
export class DisqusModule{

}

export {Disqus}