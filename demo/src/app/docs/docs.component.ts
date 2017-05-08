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
    DisqusModule.forRoot('disqus_shortname')
  ]
})`;

  usage = `<disqus [identifier]="pageId"></disqus>`;

  advancedUsage = `<disqus [identifier]="pageId" [url]="url" [category]="catId" [lang]="'en'" 
        (comment)="onComment($event)"></disqus>`;

}
