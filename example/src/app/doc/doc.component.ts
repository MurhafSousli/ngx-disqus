import {Component, AfterContentInit} from '@angular/core';

var Prism: any = require('prismjs');

@Component({
  selector: 'documentation',
  templateUrl: './doc.template.html'
})
export class Doc implements AfterContentInit {

  usage = `<disqus [shortname]="disqusShortname" [identifier]="pageIdentifier" ></disqus>`;

  advancedUsage = `
  <disqus [shortname]="disqusShortname" [identifier]="pageIdentifier" 
    [url]="customUrl" [categoryId]="catId"
    [lang]="'en'"
      
    [removeOnDestroy]="true"
  ></disqus>
  `;


  ngAfterContentInit() {
    setTimeout(()=>Prism.highlightAll(), 500);
  }
}
