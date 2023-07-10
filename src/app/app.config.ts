import { ApplicationConfig } from '@angular/core';
import { DISQUS_SHORTNAME } from 'ngx-disqus';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: DISQUS_SHORTNAME,
      useValue: 'ngx'
    },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml')
        },
        themePath: 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.8.0/build/styles/github.min.css'
      }
    }
  ]
};
