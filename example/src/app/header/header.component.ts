import {Component} from '@angular/core';

@Component({
  selector: 'header',
  template: require('./header.template.html')
})

export class Header {
  disqusLogo = prefixRepo('../../assets/img/disqus.svg');
  angularLogo = prefixRepo('../../assets/img/angular-logo.png');
}

var prefixRepo = (path) => {
  return 'ng2-disqus' + path;
}
