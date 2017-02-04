import { Injectable, Renderer } from '@angular/core';

declare const global: any; // To make AoT compiler (ngc) happy

@Injectable()
export class DisqusService {

  window;

  constructor() {
    this.window = nativeWindow();
  }

  get url(): string {
    return (this.window) ? this.window.location.href : (<any>global).url || '';
  }

  get disqus(): any {
    return (this.window) ? this.window.DISQUS : (<any>global).DISQUS;
  }

  get disqusConfig(): any {
    return (this.window) ? this.window.disqus_config : (<any>global).disqus_config;
  }

  set disqusConfig(config) {
    if (this.window) {
      this.window.disqus_config = config;
    } else {
      (<any>global).disqus_config = config;
    }
  }

  addDisqusScript(renderer: Renderer, element: HTMLElement, shortname: string, config: any) {
    console.log('addDisqusScript');
    /** Set disqus config */
    this.disqusConfig = config;

    /** Add disqus script */
    let diqusScript = renderer.createElement(element, 'script');
    diqusScript.src = `//${shortname}.disqus.com/embed.js`;
    diqusScript.async = true;
    diqusScript.type = 'text/javascript';
    renderer.setElementAttribute(diqusScript, 'data-timestamp', new Date().getTime().toString());

    /** Add disqus count script */
    let countScript = renderer.createElement(element, 'script');
    countScript.src = `//${shortname}.disqus.com/count.js`;
    countScript.async = true;
    countScript.type = 'text/javascript';
    renderer.setElementAttribute(countScript, 'id', 'dsq-count-scr');
  }

  /** Reset disqus with new inputs. */
  reset(disqusConfig: any) {
    this.disqus.reset({
      reload: true,
      config: disqusConfig
    });
  }

  removeDisqusScript() {
    if (this.window) {
      this.window.DISQUS = undefined;
      this.window.DISQUSWIDGETS = undefined;
    } else {
      (<any>global).DISQUS = undefined;
      (<any>global).DISQUSWIDGETS = undefined;
    }
  }


}

const nativeWindow = (): any => {
  // return the global native browser window object
  return typeof window !== 'undefined' ? window : undefined;
}
