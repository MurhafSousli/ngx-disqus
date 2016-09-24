import { Component } from '@angular/core';
import {AppState} from "../app.state";

@Component({
  selector: 'app-light',
  template: `<disqus [identifier]="'light'" [shortname]="'ng2'" [removeOnDestroy]="true"></disqus>`
})
export class LightComponent {

  constructor(appState: AppState) {
    /** add dark class to app */

    appState.set('themeSwitcher', false);
    appState.set('themeName', 'Light Theme');
    appState.set('themeCover', prefixRepo("../../assets/img/light.png"));
  }
}
var prefixRepo = (path) => {
  return path;//'ng2-disqus' + path;
};
