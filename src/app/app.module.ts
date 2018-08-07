import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { DisqusModule } from 'ngx-disqus';
import { AppComponent } from './app.component';
import { DocsComponent } from './docs/docs.component';

@NgModule({
  declarations: [
    AppComponent,
    DocsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    DisqusModule.forRoot('ngx'),
    HighlightModule.forRoot({ theme: 'vs' })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
