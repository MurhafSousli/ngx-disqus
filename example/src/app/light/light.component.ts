import {Component} from '@angular/core';
import {AppState} from "../app.service";

@Component({
  selector: 'light-theme',
  template: `
    <disqus [identifier]="'light'" [shortname]="'ng2'" [removeOnDestroy]="true"></disqus>
  `
})
export class LightTheme {

  constructor(appState: AppState) {
    /** add dark class to app */

    appState.set('themeSwitcher', false);
    appState.set('themeName', 'Light Theme');
    appState.set('themeCover', prefixRepo("../../assets/img/light.png"));
  }
}
var prefixRepo = (path) => {
  return path;//'ng2-disqus' + path;
}
