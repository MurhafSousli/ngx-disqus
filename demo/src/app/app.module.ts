import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// import { DisqusModule } from 'ng2-awesome-disqus';
import { DisqusModule } from 'ng2-awesome-disqus';

import { ROUTES } from './app.routes';

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
    DisqusModule
  ],
  providers: [AppState],
  bootstrap: [AppComponent]
})
export class AppModule { }
