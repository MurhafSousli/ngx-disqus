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

  usage = `<disqus [shortname]="shortname" [identifier]="pageId" ></disqus>`;

  advancedUsage = `<disqus [shortname]="shortname" [identifier]="pageId" [url]="anyUrl"
  [categoryId]="catId" [lang]="'en'" (comment)="onComment($event)"></disqus>`;


  ngAfterContentInit() {
    setTimeout(()=>Prism.highlightAll(), 500);
  }

}
