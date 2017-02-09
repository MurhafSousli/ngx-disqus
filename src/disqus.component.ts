import {
    Component,
    Input,
    Output,
    OnChanges,
    OnDestroy,
    ChangeDetectionStrategy,
    SimpleChanges,
    Renderer,
    ElementRef,
    EventEmitter
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
    /** Track Comments */
    @Output() comment = new EventEmitter<any>();

    constructor(private renderer: Renderer, private el: ElementRef, private dService: DisqusService) {
    }

    ngOnChanges(changes: SimpleChanges) {

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

            if (isResetNeeded) {
                this.reset();
            }
        }

    }

    addDisqusScript() {

        /** Set disqus config */
        this.dService.disqusConfig = this.getConfig();

        /** Add DISQUS script */
        let diqusScript = this.renderer.createElement(this.el.nativeElement, 'script');
        diqusScript.src = `//${this.shortname}.disqus.com/embed.js`;
        diqusScript.async = true;
        diqusScript.type = 'text/javascript';
        this.renderer.setElementAttribute(diqusScript, 'data-timestamp', new Date().getTime().toString());
    }

    /** Reset disqus with new inputs. */
    reset() {
        this.dService.disqus.reset({
            reload: true,
            config: this.getConfig()
        });
    }

    /** TODO: Get DISQUS Count */
    /** ngAfterViewInit(){
            this.dService.getCount().subscribe((res)=>{
                console.log(res);
            })
        }
    */

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

    /** Get disqus settings from inputs */
    getConfig() {
        let self = this;
        return function () {
            this.page.identifier = self.identifier;
            this.page.url = self.url;
            this.page.title = self.title;
            this.category_id = self.categoryId;
            this.language = self.language;

            /* Available callbacks are afterRender, onInit, onNewComment, onPaginate, onReady, preData, preInit, preReset */
            this.callbacks.onNewComment = [(comment) => {
                self.comment.emit(comment);
            }];
        };
    }

    ngOnDestroy() {
        if (this.dService.window) {
            this.dService.window.DISQUS = undefined;
            this.dService.window.disqusConfig = undefined;
            this.dService.window.DISQUSWIDGETS = undefined;
        } else {
            (<any>global).DISQUS = undefined;
            (<any>global).disqusConfig = undefined;
            (<any>global).DISQUSWIDGETS = undefined;
        }
    }
}
