import {Component, Input, ElementRef, AfterViewInit, OnDestroy, Renderer, ChangeDetectionStrategy} from '@angular/core';
import {WindowService} from '../window/window.service';

@Component({
  selector: 'disqus',
  template: '<div id="disqus_thread"></div>',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class Disqus implements AfterViewInit, OnDestroy {

  @Input() public identifier: string;
  @Input() public shortname: string;
  @Input() public url: string;
  @Input() public categoryId: string;
  @Input() public lang: string;

  /** Remove DISQUS script on destroy
   *  This is useful to let DISQUS change its theme according if the page background color changed.
   */
  @Input() public removeOnDestroy: boolean;

  private window;

  constructor(private el: ElementRef, private renderer: Renderer, window: WindowService) {
    this.window = window.nativeWindow;
  }

  ngAfterViewInit() {
    if (this.window.DISQUS === undefined) {
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
    this.window.DISQUS.reset({
      reload: true,
      config: this.getConfig()
    });
  }

  /**
   * Add disqus script to the document.
   */
  addScriptTag() {
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
    let _self = this;
    return function () {
      this.page.url = this.url || this.window.location.href;
      this.page.identifier = _self.identifier;
      this.page.category_id = this.categoryId;
      this.language = this.lang;
    };
  }

  ngOnDestroy() {
    if(this.removeOnDestroy){
      this.window.DISQUS = undefined;
    }
  }

}
