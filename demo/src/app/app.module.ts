import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { DisqusModule } from './disqus';
import { HighlightModule } from 'ngx-highlightjs';
// import { DisqusModule } from 'ngx-disqus';

import { ROUTES } from './app-routing';

import { AppComponent } from './app.component';
import { DarkComponent } from './dark/dark.component';
import { LightComponent } from './light/light.component';
import { HeaderComponent } from './header/header.component';
import { NocontentComponent } from './nocontent/nocontent.component';
import { DocsComponent } from './docs/docs.component';
import { PreviewComponent } from './preview/preview.component';
import { AppState } from './app.state';

@NgModule({
  declarations: [
    AppComponent,
    DarkComponent,
    LightComponent,
    HeaderComponent,
    NocontentComponent,
    DocsComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    DisqusModule.forRoot('ngx'),
    HighlightModule.forRoot({ theme: 'vs' })
  ],
  providers: [AppState],
  bootstrap: [AppComponent]
})
export class AppModule { }
