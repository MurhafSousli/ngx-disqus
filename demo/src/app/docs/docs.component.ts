import { Component } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html'
})
export class DocsComponent {

  importing = `import { DisqusModule } from 'ngx-disqus';
@NgModule({
  imports: [
    // ...
    DisqusModule
  ]
})`;

  usage = `<disqus [shortname]="shortname" [identifier]="pageId"></disqus>`;

  advancedUsage = `<disqus [shortname]="shortname" [identifier]="pageId" [url]="anyUrl"
  [categoryId]="catId" [lang]="'en'" (comment)="onComment($event)"></disqus>`;

}
