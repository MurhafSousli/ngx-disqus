import { Component, Input, ElementRef, AfterViewInit, OnDestroy, Renderer, ChangeDetectionStrategy } from '@angular/core';
import { WindowService } from '../window/window.service';

@Component({
  selector: 'disqus',
  template: '<div id="disqus_thread"></div>',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DisqusComponent implements AfterViewInit, OnDestroy {

  @Input() identifier: string;
  @Input() shortname: string;
  @Input() url: string;
  @Input() categoryId: string;
  @Input() lang: string;

  /** Remove DISQUS script on destroy
   *  This is useful to let DISQUS change its theme according if the page background color changed.
   */
  @Input() removeOnDestroy: boolean;

  window;

  constructor(private el: ElementRef, private renderer: Renderer, window: WindowService) {
    this.window = window.nativeWindow;
  }

  ngAfterViewInit() {
    if (typeof this.window.DISQUS === 'undefined') {
      this.addDisqusScript();
    } else {
      this.reset();
    }
  }

  /**
   * Reset disqus with new inputs.
   */
  reset() {
    this.window.DISQUS.reset({
      reload: true,
      config: this.getConfig()
    });
  }

  /**
   * Add disqus script to the document.
   */
  addDisqusScript() {
    this.window.disqus_config = this.getConfig();

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
    return function () {
      this.page.url = this.validateUrl(this.url);
      this.page.identifier = this.identifier;
      this.page.category_id = this.categoryId;
      this.language = this.lang;
    };
  }

  validateUrl(url: string) {
    /** If URL is specified then validate it, otherwise use window URL */
    if (url) {
      let r = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

      if (r.test(url)) {
        return encodeURIComponent(url);
      } else {
        console.warn('[Disqus]: Invalid URL, fallback to Window URL');
      }
    }
    /** fallback to "Window" URL, or to "Global" in universal */
    return (this.window) ? encodeURIComponent(this.window.location.href) : (<any>global).url || '';
  }

  ngOnDestroy() {
    if (this.removeOnDestroy) {
      this.window.DISQUS = undefined;
    }
  }

}
