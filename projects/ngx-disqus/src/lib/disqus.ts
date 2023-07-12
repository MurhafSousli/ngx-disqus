import {
  Component,
  Inject,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  ElementRef,
  Renderer2,
  ChangeDetectionStrategy
} from '@angular/core';
import { DisqusComment, DisqusReady } from './disqus.model';
import { DisqusService } from './disqus.service';

@Component({
  standalone: true,
  selector: 'disqus',
  template: '<div id="disqus_thread"></div>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Disqus implements OnChanges {

  /** DISQUS options */
  @Input() url: string;
  @Input() identifier: string;
  @Input() title: string;
  @Input() category: string;
  @Input() language: string;

  /** DISQUS events */
  @Output() newComment = new EventEmitter<DisqusComment>(true);
  @Output() ready = new EventEmitter<DisqusReady>(true);
  @Output() paginate = new EventEmitter<any>(true);

  constructor(private disqus: DisqusService,
              private renderer: Renderer2,
              private el: ElementRef<HTMLElement>) {
  }

  ngOnChanges(): void {
    /** Reset Disqus if any input changed */
    if (!this.disqus.DISQUS) {
      this.addDisqusScript();
    } else {
      this.reset();
    }
  }

  /** Add DISQUS script */
  addDisqusScript(): void {
    /** Set DISQUS config */
    this.disqus.config = this.getConfig();

    const disqusScript = this.renderer.createElement('script');
    disqusScript.src = `//${ this.disqus.shortname }.disqus.com/embed.js`;
    disqusScript.async = true;
    disqusScript.type = 'text/javascript';
    this.renderer.setAttribute(disqusScript, 'data-timestamp', new Date().getTime().toString());
    this.renderer.appendChild(this.el.nativeElement, disqusScript);
  }

  /** Reset DISQUS with the new config */
  reset(): void {
    this.disqus.DISQUS.reset({
      reload: true,
      config: this.getConfig()
    });
  }

  /** Create DISQUS config from the inputs */
  getConfig(): () => void {
    const self = this;
    return function (): void {
      this.page.identifier = self.identifier;
      this.page.url = self.validateUrl(self.url);
      this.page.title = self.title;
      this.category_id = self.category;
      this.language = self.language;

      /* Available callbacks are afterRender, onInit, onNewComment, onPaginate, onReady, preData, preInit, preReset */
      this.callbacks.onNewComment = [(e: any) => {
        self.newComment.emit(e);
      }];

      this.callbacks.onReady = [(e: any) => {
        self.ready.emit(e);
      }];

      this.callbacks.onPaginate = [(e: any) => {
        self.paginate.emit(e);
      }];
    };
  }

  validateUrl(url: string): string | undefined {
    /** Validate URL input */
    if (url) {
      const r = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

      if (r.test(url)) {
        return url;
      } else {
        console.warn('[Disqus]: Invalid URL');
      }
    }
    /** DISQUS will fallback to "Window.location.href" when URL is undefined */
    return undefined;
  }
}
