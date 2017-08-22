<p align="center">
  <img height="150px" width="150px" style="text-align: center;" src="https://cdn.rawgit.com/MurhafSousli/ngx-disqus/master/assets/logo.svg">
  <h1 align="center">Angular Disqus Module</h1>
</p>

Add Disqus to your app instantly!

[![npm](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://murhafsousli.github.io/ngx-disqus/)
[![npm](https://img.shields.io/npm/v/ngx-disqus.svg)](https://www.npmjs.com/package/ngx-disqus)
[![Build Status](https://travis-ci.org/MurhafSousli/ngx-disqus.svg)](https://travis-ci.org/MurhafSousli/ngx-disqus)
[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](/LICENSE)

## Installation

Install it with npm

`npm install --save ngx-disqus`

### SystemJS

If you are using SystemJS, you should also adjust your configuration to point to the UMD bundle.

In your systemjs config file, map needs to tell the System loader where to look for ngx-disqus:

```
map: {
  'ngx-disqus': 'node_modules/ngx-disqus/bundles/ngx-disqus.umd.js',
}
```

## Basic usage:

Import `DisqusModule` in the root module

```ts
import { DisqusModule } from "ngx-disqus";
@NgModule({
  imports: [
    // ...
    DisqusModule.forRoot('disqus_shortname')
  ]
})
```
The function `forRoot(shortname: string)` tells the Disqus service your forum's shortname, which is the unique identifier for your website as registered on Disqus. If undefined, the Disqus embed will not load.

**Now you can add Disqus component**

```ts
@Component({
  selector: 'any-component',
  template: `<disqus [identifier]="pageId"></disqus>`
})
export class AnyComponent {

  pageId = '/about';
}
```

Disqus component requires the `identifier` input to work properly on your app
For example If the page URL is `localhost:4200/about` then the identifier should be `/about`.

## More Options:

See Disqus official documentation ([JavaScript configuration variables](https://help.disqus.com/customer/portal/articles/472098-javascript-configuration-variables)) before using these inputs.

```ts
<disqus [identifier]="pageId" [url]="url" [category]="catId" [lang]="'en'"
        (onNewComment)="onComment($event)" (onReady)="onReady($event)" (onPaginate)="onPaginate($event)"></disqus>
```

#### NOTE

Angular router supports two LocationStrategy providers: </p>

  - **PathLocationStrategy:** the default "HTML5 pushState" style. (Compatible with Disqus)
  - **HashLocationStrategy:** the "hash URL" style. (Incompatible with Disqus)

For more info check [DISQUS on ajax sites](https://help.disqus.com/customer/portal/articles/472107-using-disqus-on-ajax-sites)

## Issues

If you identify any errors in this component, or have an idea for an improvement, please open an [issue](https://github.com/MurhafSousli/ngx-disqus/issues). I am excited to see what the community thinks of this project, and I would love your input!

## Author

 **Murhaf Sousli**

 - [github/murhafsousli](https://github.com/MurhafSousli)
 - [twitter/murhafsousli](https://twitter.com/MurhafSousli)

