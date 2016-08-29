import {Component, Input, ElementRef, OnInit, Renderer} from '@angular/core';

@Component({
    selector: 'disqus',
    template: '<div id="disqus_thread"></div>',
})

export class Disqus implements OnInit{

    @Input() public identifier:string;
    @Input() public shortname:string;

    constructor(private el:ElementRef, private renderer:Renderer) {
    }

    ngOnInit() {
        if ((<any>window).DISQUS === undefined) {
            this.addScriptTag();
        }
        else {
            this.reset();
        }
    }

    /**
     * Reset disqus with new inputs.
     */
    reset() {
        (<any>window).DISQUS.reset({
            reload: true,
            config: this.getConfig()
        });
    }

    /**
     * Add disqus script to the document.
     */
    addScriptTag() {
        (<any>window).disqus_config = this.getConfig();

        let script = this.renderer.createElement(this.el.nativeElement, 'script');
        script.src = `//${this.shortname}.disqus.com/embed.js`;
        script.async = true;
        script.type = 'text/javascript';
        script.setAttribute('data-timestamp', new Date().getTime().toString());
    }

    /**
     * Get disqus config
     */
    getConfig() {
        let _self = this;
        return function () {
            this.page.url = window.location.href;
            this.page.identifier = _self.identifier;
            this.language = 'en';
        };
    }

}