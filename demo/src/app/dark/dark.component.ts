import { Component } from '@angular/core';
import {AppState} from "../app.state";

@Component({
  selector: 'app-dark',
  template: `<disqus [identifier]="'dark'" [shortname]="'ng2'" [removeOnDestroy]="true"></disqus>`
})
export class DarkComponent {

  constructor(appState: AppState) {
    /** add dark class to app */

    appState.set('themeSwitcher', true);
    appState.set('themeName', 'Dark Theme');
    appState.set('themeCover', prefixRepo("../../assets/img/dark.png"));
  }


}
var prefixRepo = (path) => {
  return 'ng2-disqus' + path;
};
