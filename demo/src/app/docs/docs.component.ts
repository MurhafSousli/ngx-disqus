import {Component, AfterContentInit} from '@angular/core';

import 'prismjs/prism';
declare var Prism: any;

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html'
})
export class DocsComponent implements AfterContentInit {

  constructor() { }

  importing = `import {DisqusModule} from "ng2-awesome-disqus";
@NgModule({
  imports: [
    DisqusModule
  ]
})`;

  usage = `<disqus [shortname]="disqusShortname" [identifier]="pageIdentifier" ></disqus>`;

  advancedUsage = `<disqus [shortname]="disqusShortname" [identifier]="pageIdentifier" 
    [url]="customUrl" [categoryId]="catId" [lang]="'en'"
      
    [removeOnDestroy]="true"
  ></disqus>`;


  ngAfterContentInit() {
    setTimeout(()=>Prism.highlightAll(), 500);
  }

}
