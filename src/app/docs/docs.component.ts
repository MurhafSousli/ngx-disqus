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
    selector: 'any-component',
    template: \`<disqus [identifier]="pageId"></disqus>\`
  })
  export class AnyComponent {

    pageId = '/about';
  }`;

  advancedUsage = `<disqus [identifier]="pageId" [url]="url" [category]="catId" [lang]="'en'"
        (onNewComment)="onComment($event)" (onReady)="onReady($event)" (onPaginate)="onPaginate($event)"></disqus>`;

}
