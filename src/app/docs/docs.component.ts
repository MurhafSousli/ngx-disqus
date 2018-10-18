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

  usage = `@Component({
  selector: 'single-post',
  template: \`<disqus [identifier]="pageId"></disqus>\`
})
export class SinglePostComponent {
  pageId = '/post/123';
}`;

  advancedUsage = `<disqus [identifier]="pageId" [url]="url" [category]="catId"
        [language]="language" (newComment)="onNewComment($event)"
        (ready)="onReady($event)" (paginate)="onPaginate($event)"></disqus>`;

}
