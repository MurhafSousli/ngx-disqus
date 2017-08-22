import { OnChanges, OnDestroy, Renderer2, ElementRef, EventEmitter } from '@angular/core';
import { DisqusService } from './disqus.service';
import { DisqusComment, DisqusReady } from './disqus.model';
export declare class DisqusComponent implements OnChanges, OnDestroy {
    private renderer;
    private el;
    private dService;
    /** DISQUS options */
    url: string;
    identifier: string;
    title: string;
    category: string;
    language: string;
    /** DISQUS events */
    onNewComment: EventEmitter<DisqusComment>;
    onReady: EventEmitter<DisqusReady>;
    onPaginate: EventEmitter<any>;
    constructor(renderer: Renderer2, el: ElementRef, dService: DisqusService);
    ngOnChanges(): void;
    /** Add DISQUS script */
    addDisqusScript(): void;
    /** Reset DISQUS with the new config */
    reset(): void;
    /** Create DISQUS config from inputs */
    getConfig(): () => void;
    validateUrl(url: string): string;
    ngOnDestroy(): void;
}
