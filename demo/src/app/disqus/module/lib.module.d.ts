import { ModuleWithProviders, InjectionToken } from '@angular/core';
import { DisqusService } from './disqus.service';
/** Initialize Disqus with shortname */
export declare function DisqusFactory(shortname: string): DisqusService;
export declare const SHORTNAME: InjectionToken<string>;
export declare class DisqusModule {
    static forRoot(shortname: string): ModuleWithProviders;
}
