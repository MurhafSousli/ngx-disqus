import { Injectable } from '@angular/core';
import {WindowService} from '../window/window.service';

@Injectable()
export class DisqusService {

    constructor(private window: WindowService) {

    }

    get nativeDisqus(): any {
        return _disqus(this.window.nativeWindow);
    }
    get disqusConfig(): any{
        return _disqusConfig(this.window.nativeWindow);
    }
}

function _disqus(window): any {
    return (window) ? window.DISQUS : (<any>global).DISQUS;
}
function _disqusConfig(window): any {
    return (window) ? window.disqus_config : (<any>global).disqus_config;
}
