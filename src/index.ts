import 'rxjs/operators/add/map';

import {NgModule} from '@angular/core';
import {Disqus} from './disqus/disqus.component';


@NgModule({
    declarations: [Disqus],
    exports: [Disqus]
})
export class DisqusModule{

}

export {Disqus}