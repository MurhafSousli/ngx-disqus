import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Injectable, InjectionToken, Input, NgModule, Output, Renderer2 } from '@angular/core';

var DisqusService = (function () {
    /**
     * @param {?} shortname
     */
    function DisqusService(shortname) {
        this.shortname = shortname;
    }
    Object.defineProperty(DisqusService.prototype, "window", {
        /**
         * @return {?}
         */
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return DisqusService;
}());
DisqusService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
DisqusService.ctorParameters = function () { return [
    null,
]; };
/**
 * @return {?}
 */
function _window() {
    return typeof window !== 'undefined' ? window : global;
}

var DisqusComponent = (function () {
    /**
     * @param {?} renderer
     * @param {?} el
     * @param {?} dService
     */
    function DisqusComponent(renderer, el, dService) {
        this.renderer = renderer;
        this.el = el;
        this.dService = dService;
        /**
         * DISQUS events
         */
        this.onNewComment = new EventEmitter();
        this.onReady = new EventEmitter();
        this.onPaginate = new EventEmitter();
    }
    /**
     * @return {?}
     */
    DisqusComponent.prototype.ngOnChanges = function () {
        /** Reset Disqus if any input changed */
        if (!this.dService.window.DISQUS) {
            this.addDisqusScript();
        }
        else {
            this.reset();
        }
    };
    /**
     * Add DISQUS script
     * @return {?}
     */
    DisqusComponent.prototype.addDisqusScript = function () {
        /** Set DISQUS config */
        this.dService.window.disqus_config = this.getConfig();
        var /** @type {?} */ disqusScript = this.renderer.createElement('script');
        disqusScript.src = "//" + this.dService.shortname + ".disqus.com/embed.js";
        disqusScript.async = true;
        disqusScript.type = 'text/javascript';
        this.renderer.setAttribute(disqusScript, 'data-timestamp', new Date().getTime().toString());
        this.renderer.appendChild(this.el.nativeElement, disqusScript);
    };
    /**
     * Reset DISQUS with the new config
     * @return {?}
     */
    DisqusComponent.prototype.reset = function () {
        this.dService.window.DISQUS.reset({
            reload: true,
            config: this.getConfig()
        });
    };
    /**
     * Create DISQUS config from inputs
     * @return {?}
     */
    DisqusComponent.prototype.getConfig = function () {
        var /** @type {?} */ self = this;
        return function () {
            this.page.identifier = self.identifier;
            this.page.url = self.validateUrl(self.url);
            this.page.title = self.title;
            this.category_id = self.category;
            this.language = self.language;
            /* Available callbacks are afterRender, onInit, onNewComment, onPaginate, onReady, preData, preInit, preReset */
            this.callbacks.onNewComment = [function (e) {
                    self.onNewComment.emit(e);
                }];
            this.callbacks.onReady = [function (e) {
                    self.onReady.emit(e);
                }];
            this.callbacks.onPaginate = [function (e) {
                    self.onPaginate.emit(e);
                }];
        };
    };
    /**
     * @param {?} url
     * @return {?}
     */
    DisqusComponent.prototype.validateUrl = function (url) {
        /** Validate URL input */
        if (url) {
            var /** @type {?} */ r = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            if (r.test(url)) {
                return url;
            }
            else {
                console.warn('[Disqus]: Invalid URL, return undefined');
            }
        }
        /** DISQUS will fallback to "Window.location.href" when URL is undefined */
        return undefined;
    };
    /**
     * @return {?}
     */
    DisqusComponent.prototype.ngOnDestroy = function () {
        this.dService.window.DISQUS = undefined;
        this.dService.window.disqus_config = undefined;
    };
    return DisqusComponent;
}());
DisqusComponent.decorators = [
    { type: Component, args: [{
                selector: 'disqus',
                template: '<div id="disqus_thread"></div>',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/**
 * @nocollapse
 */
DisqusComponent.ctorParameters = function () { return [
    { type: Renderer2, },
    { type: ElementRef, },
    { type: DisqusService, },
]; };
DisqusComponent.propDecorators = {
    'url': [{ type: Input },],
    'identifier': [{ type: Input },],
    'title': [{ type: Input },],
    'category': [{ type: Input },],
    'language': [{ type: Input },],
    'onNewComment': [{ type: Output },],
    'onReady': [{ type: Output },],
    'onPaginate': [{ type: Output },],
};

/**
 * Initialize Disqus with shortname
 * @param {?} shortname
 * @return {?}
 */
function DisqusFactory(shortname) {
    return new DisqusService(shortname);
}
var SHORTNAME = new InjectionToken('shortname');
var DisqusModule = (function () {
    function DisqusModule() {
    }
    /**
     * @param {?} shortname
     * @return {?}
     */
    DisqusModule.forRoot = function (shortname) {
        return {
            ngModule: DisqusModule,
            providers: [
                { provide: SHORTNAME, useValue: shortname },
                {
                    provide: DisqusService,
                    useFactory: DisqusFactory,
                    deps: [SHORTNAME]
                }
            ]
        };
    };
    return DisqusModule;
}());
DisqusModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DisqusComponent],
                exports: [DisqusComponent]
            },] },
];
/**
 * @nocollapse
 */
DisqusModule.ctorParameters = function () { return []; };

/**
 * Generated bundle index. Do not edit.
 */

export { DisqusFactory, SHORTNAME, DisqusModule, DisqusComponent as ɵb, DisqusService as ɵa };
//# sourceMappingURL=ngx-disqus.es5.js.map
