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
    @Input() lang: string;
    @Input() title: string;

    /** Remove DISQUS script on destroy */
    @Input() removeOnDestroy: boolean;

    constructor(private renderer: Renderer, private el: ElementRef, private dService: DisqusService) {
    }

    ngOnChanges(changes: SimpleChanges) {

        console.log(this.dService.disqus);

        if (!this.dService.disqus) {
            this.dService.addDisqusScript(this.renderer, this.el.nativeElement, this.shortname, this.getConfig());
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
                this.dService.reset(this.getConfig());
            }
        }

    }

    /** Get disqus config */
    getConfig() {
        let test = {
            page: {
                url: this.validatedUrl(),
                identifier: this.identifier,
                category_id: this.categoryId,
                title: this.title
            },
            language: this.lang
        };
        console.log(test);
        return test;
    }

    /** Get the valid URL */
    validatedUrl() {
        /** If URL is specified then validate it, otherwise use window URL */
        if (this.url) {
            let r = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

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
            this.dService.removeDisqusScript();
        }
    }

}
