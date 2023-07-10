import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [CommonModule, Highlight],
  templateUrl: './docs.component.html',
})
export class DocsComponent {

  readonly usage: string = `import { DisqusModule } from 'ngx-disqus';

@Component({
  standalone: true,
  imports: [DisqusModule],
  selector: 'single-post',
  template: \`<disqus [identifier]="pageId"></disqus>\`
})
export class SinglePostComponent {
  pageId = '/post/123';
}`;

  readonly shortname: string = `import { DISQUS_SHORTNAME } from 'ngx-disqus';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: DISQUS_SHORTNAME,
      useValue: 'disqus_shortname'
    },
  ]
}`;

  readonly advancedUsage: string = `<disqus [identifier]="pageId" [url]="url" [category]="catId"
        [language]="language" (newComment)="onNewComment($event)"
        (ready)="onReady($event)" (paginate)="onPaginate($event)"></disqus>`;
}
