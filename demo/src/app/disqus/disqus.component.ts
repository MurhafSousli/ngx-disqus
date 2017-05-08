import { Component, Input, Output, OnChanges, OnDestroy, ChangeDetectionStrategy, Renderer2, ElementRef, EventEmitter } from '@angular/core';
import { DisqusService } from './disqus.service';

declare const window: any;

@Component({
  selector: 'disqus',
  template: '<div id="disqus_thread"></div>',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DisqusComponent implements OnChanges, OnDestroy {

  @Input() url: string;
  @Input() identifier: string;
  @Input() title: string;
  @Input() category: string;
  @Input() language: string;

  /** Track Comments */
  @Output() comment = new EventEmitter<any>();

  constructor(private renderer: Renderer2, private el: ElementRef, private dService: DisqusService) { }

  ngOnChanges() {

    if (!window.DISQUS) {
      this.addDisqusScript();
    } else {
      this.reset();
    }
  }

  addDisqusScript() {

    /** Set DISQUS config */
    window.disqus_config = this.getConfig();

    /** Add DISQUS script */
    const disqusScript = this.renderer.createElement('script');
    disqusScript.src = `//${this.dService.shortname}.disqus.com/embed.js`;
    disqusScript.async = true;
    disqusScript.type = 'text/javascript';
    this.renderer.setAttribute(disqusScript, 'data-timestamp', new Date().getTime().toString());
    this.renderer.appendChild(this.el.nativeElement, disqusScript);
  }

  /** Reset DISQUS with the new inputs */
  reset() {
    window.DISQUS.reset({
      reload: true,
      config: this.getConfig()
    });
  }

  /** Get DISQUS settings from inputs */
  getConfig() {
    const self = this;
    return function () {
      this.page.identifier = self.identifier;
      this.page.url = self.validateUrl(self.url);
      this.page.title = self.title;
      this.category_id = self.category;
      this.language = self.language;

      /* Available callbacks are afterRender, onInit, onNewComment, onPaginate, onReady, preData, preInit, preReset */
      this.callbacks.onNewComment = [(comment) => {
        self.comment.emit(comment);
      }];
    };
  }

  validateUrl(url: string) {
    /** Validate URL input */
    if (url) {
      const r = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

      if (r.test(url)) {
        return url;
      } else {
        console.warn('[Disqus]: Invalid URL, return undefined');
      }
    }
    /** DISQUS will fallback to "Window.location.href" when URL is undefined */
    return undefined;
  }

  ngOnDestroy() {
    window.DISQUS = undefined;
    window.disqus_config = undefined;
  }
}
