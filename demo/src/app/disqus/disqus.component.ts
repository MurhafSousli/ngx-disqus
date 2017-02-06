import {
    Component,
    Input,
    OnChanges,
    OnDestroy,
    ChangeDetectionStrategy,
    SimpleChanges,
    Renderer,
    ElementRef
} from '@angular/core';
import { DisqusService } from './disqus.service';

@Component({
    selector: 'disqus',
    template: '<div id="disqus_thread"></div>',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class DisqusComponent implements OnChanges, OnDestroy {

    /** DISQUS Account Name */
    @Input() shortname: string;

    @Input() identifier: string;
    @Input() url: string;
    @Input() categoryId: string;
    @Input() language: string;
    @Input() title: string;

    /** Add DISQUS count script */
    @Input() count: boolean;
    /** Remove DISQUS script on destroy */
    @Input() removeOnDestroy: boolean;

    constructor(private renderer: Renderer, private el: ElementRef, private dService: DisqusService) {
    }

    ngOnChanges(changes: SimpleChanges) {

        console.log(this.dService.disqus);

        if (!this.dService.disqus) {
            this.addDisqusScript();
        } else {
            let idChange = changes['identifier'];
            let urlChange = changes['url'];
            let catChange = changes['categoryId'];
            let titleChange = changes['title'];
            let langChange = changes['language'];

            let isResetNeeded = false;

            if (idChange && idChange.currentValue !== idChange.previousValue) {
                isResetNeeded = true;
            }
            if (urlChange && urlChange.currentValue !== urlChange.previousValue) {
                isResetNeeded = true;
            }
            if (catChange && catChange.currentValue !== catChange.previousValue) {
                isResetNeeded = true;
            }
            if (titleChange && titleChange.currentValue !== titleChange.previousValue) {
                isResetNeeded = true;
            }
            if (langChange && langChange.currentValue !== langChange.previousValue) {
                isResetNeeded = true;
            }
            console.log('check Changes');
            if (isResetNeeded) {
                console.log('Reset');
                this.reset();
            }
        }

    }

    addDisqusScript() {
        console.log('addDisqusScript');
        /** Set disqus config */
        // this.disqusConfig = config;
        let self = this;
        this.dService.window.disqus_config = function () {
            this.page.identifier = self.identifier;
            this.page.url = self.url;
            this.page.title = self.title;
            this.language = self.language;
        };

        /** Add disqus script */
        let diqusScript = this.renderer.createElement(this.el.nativeElement, 'script');
        diqusScript.src = `//${this.shortname}.disqus.com/embed.js`;
        diqusScript.async = true;
        diqusScript.type = 'text/javascript';
        this.renderer.setElementAttribute(diqusScript, 'data-timestamp', new Date().getTime().toString());

        /** Add disqus count script */
        let countScript = this.renderer.createElement(this.el.nativeElement, 'script');
        countScript.src = `//${this.shortname}.disqus.com/count.js`;
        countScript.async = true;
        countScript.type = 'text/javascript';
        this.renderer.setElementAttribute(countScript, 'id', 'dsq-count-scr');

    }

    /** Reset disqus with new inputs. */
    reset() {
        let self = this;
        this.dService.disqus.reset({
            reload: true,
            config: function () {
                this.page.identifier = self.identifier;
                this.page.url = self.url;
                this.page.title = self.title;
                this.language = self.language;
            }
        });
    }
    /** Get the valid URL */
    validatedUrl() {
        /** If URL is specified then validate it, otherwise use window URL */
        if (this.url) {
            let r = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

            if (r.test(this.url)) {
                return this.url;
            } else {
                console.warn('[Disqus]: Invalid URL, fallback to Window URL');
            }
        }
        /** fallback to "Window" URL, or to "Global" in universal */
        return this.dService.url;
    }

    ngOnDestroy() {
        if (this.removeOnDestroy) {
            if (this.dService.window) {
                this.dService.window.DISQUS = undefined;
                if (this.count) {
                    this.dService.window.DISQUSWIDGETS = undefined;
                }
            } else {
                (<any>global).DISQUS = undefined;
                if (this.count) {
                    (<any>global).DISQUSWIDGETS = undefined;
                }
            }
        }
    }

}
