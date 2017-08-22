(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.ngxDisqus = {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

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
    { type: _angular_core.Injectable },
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
        this.onNewComment = new _angular_core.EventEmitter();
        this.onReady = new _angular_core.EventEmitter();
        this.onPaginate = new _angular_core.EventEmitter();
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
    { type: _angular_core.Component, args: [{
                selector: 'disqus',
                template: '<div id="disqus_thread"></div>',
                changeDetection: _angular_core.ChangeDetectionStrategy.OnPush
            },] },
];
/**
 * @nocollapse
 */
DisqusComponent.ctorParameters = function () { return [
    { type: _angular_core.Renderer2, },
    { type: _angular_core.ElementRef, },
    { type: DisqusService, },
]; };
DisqusComponent.propDecorators = {
    'url': [{ type: _angular_core.Input },],
    'identifier': [{ type: _angular_core.Input },],
    'title': [{ type: _angular_core.Input },],
    'category': [{ type: _angular_core.Input },],
    'language': [{ type: _angular_core.Input },],
    'onNewComment': [{ type: _angular_core.Output },],
    'onReady': [{ type: _angular_core.Output },],
    'onPaginate': [{ type: _angular_core.Output },],
};

/**
 * Initialize Disqus with shortname
 * @param {?} shortname
 * @return {?}
 */
function DisqusFactory(shortname) {
    return new DisqusService(shortname);
}
var SHORTNAME = new _angular_core.InjectionToken('shortname');
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
    { type: _angular_core.NgModule, args: [{
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

exports.DisqusFactory = DisqusFactory;
exports.SHORTNAME = SHORTNAME;
exports.DisqusModule = DisqusModule;
exports.ɵb = DisqusComponent;
exports.ɵa = DisqusService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-disqus.umd.js.map
