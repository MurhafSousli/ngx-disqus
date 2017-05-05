import {
  Component,
  Input,
  Output,
  OnChanges,
  OnDestroy,
  ChangeDetectionStrategy,
  SimpleChanges,
  Renderer2,
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

  /** Track Comments */
  @Output() comment = new EventEmitter<any>();

  constructor(private renderer: Renderer2, private el: ElementRef, private dService: DisqusService) {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (!this.dService.disqus) {
      this.addDisqusScript();
    } else {
      const idChange = changes['identifier'];
      const urlChange = changes['url'];
      const catChange = changes['categoryId'];
      const titleChange = changes['title'];
      const langChange = changes['language'];

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
    const disqusScript = this.renderer.createElement('script');
    disqusScript.src = `//${this.shortname}.disqus.com/embed.js`;
    disqusScript.async = true;
    disqusScript.type = 'text/javascript';
    this.renderer.setAttribute(disqusScript, 'data-timestamp', new Date().getTime().toString());
    this.renderer.appendChild(this.el.nativeElement, disqusScript);
  }

  /** Reset disqus with new inputs. */
  reset() {
    this.dService.disqus.reset({
      reload: true,
      config: this.getConfig()
    });
  }

  /** Get disqus settings from inputs */
  getConfig() {
    const self = this;
    return function () {
      this.page.identifier = self.identifier;
      this.page.url = self.dService.validateUrl(self.url);
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
    } else {
      (<any>global).DISQUS = undefined;
      (<any>global).disqusConfig = undefined;
    }
  }
}
