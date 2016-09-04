import {Component} from '@angular/core';
import {AppState} from "../app.service";

@Component({
  selector: 'dark-theme',
  template: `
      <disqus [identifier]="'dark'" [shortname]="'ng2'" [lang]="'fr_FR'" [removeOnDestroy]="true"></disqus>
  `
})
export class DarkTheme {

  constructor(appState: AppState) {
    /** add dark class to app */

    appState.set('themeSwitcher', true);
    appState.set('themeName', 'Dark Theme');
    appState.set('themeCover', prefixRepo("../../assets/img/dark.png"));
  }

}
var prefixRepo = (path) => {
  return path;//'ng2-disqus' + path;
}
