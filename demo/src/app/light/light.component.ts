import { Component } from '@angular/core';
import {AppState} from "../app.state";

@Component({
  selector: 'app-light',
  template: `
    <p><button (click)="test()">Test</button></p>
    <a href="#disqus_thread">Link</a>
    <disqus [identifier]="identifier" [url]="url" [title]="title" [shortname]="'ng2'" [removeOnDestroy]="true"></disqus>
    `
})
export class LightComponent {

  identifier = 'light';
  title = 'LIGHTER'
  url = 'http://localhost:4200';

  constructor(appState: AppState) {
    /** add dark class to app */

    appState.set('themeSwitcher', false);
    appState.set('themeName', 'Light Theme');
    appState.set('themeCover', prefixRepo("../../assets/img/light.png"));
  }

  test(){
    this.identifier = "dark";
    this.title = "DARKER";
    this.url = 'http://localhost:4200';
  }
}
var prefixRepo = (path) => {
  return 'ng2-disqus' + path;
};
