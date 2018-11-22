import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { DisqusModule } from 'ngx-disqus';
import { AppComponent } from './app.component';
import { DocsComponent } from './docs/docs.component';

import xml from 'highlight.js/lib/languages/xml';
import typescript from 'highlight.js/lib/languages/typescript';

export function languages() {
  return [
    {name: 'xml', func: xml},
    {name: 'typescript', func: typescript },
  ]
}

@NgModule({
  declarations: [
    AppComponent,
    DocsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    DisqusModule.forRoot('ngx'),
    HighlightModule.forRoot({ languages })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
