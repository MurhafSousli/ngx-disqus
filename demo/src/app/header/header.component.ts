import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  disqusLogo = prefixRepo('../../assets/img/disqus.svg');
  angularLogo = prefixRepo('../../assets/img/angular-logo.png');


}


var prefixRepo = (path) => {
  return path;// 'ng2-disqus' + path;
};
