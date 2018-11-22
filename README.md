<p align="center">
  <img height="150px" width="150px" style="text-align: center;" src="https://cdn.rawgit.com/MurhafSousli/ngx-disqus/55fb00f5/src/assets/logo.svg">
  <h1 align="center">Angular Disqus Module</h1>
</p>

Add Disqus to your app instantly!

[![npm](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://murhafsousli.github.io/ngx-disqus/)
[![npm](https://img.shields.io/npm/v/ngx-disqus.svg)](https://www.npmjs.com/package/ngx-disqus)
[![Build Status](https://travis-ci.org/MurhafSousli/ngx-disqus.svg)](https://travis-ci.org/MurhafSousli/ngx-disqus)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/ngx-disqus.svg)](https://bundlephobia.com/result?p=ngx-disqus)
[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](/LICENSE)

## Installation

**NPM**

```bash
$ npm install -S ngx-disqus
```

**YARN**

```bash
$ yarn add ngx-disqus
```

## Usage

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

The paramter `shortname` is the unique identifier for your website as registered on Disqus, make sure it is defined in your module.

Now you can add Disqus component

```ts
@Component({
  selector: 'any-component',
  template: `<disqus [identifier]="pageId"></disqus>`
})
export class AnyComponent {

  pageId = '/about';
}
```

- Disqus component requires the `identifier` input to work properly on your app
- For examplev if the page URL is `localhost:4200/about` then the identifier should be `/about`.

Here is a [stackblitz](https://stackblitz.com/edit/ngx-disqus)

### Lazy load `DisqusModule`

If you wish to lazy load this library, set the shortname value in the root module using `DISQUS_SHORTNAME` token.

```ts
import { DISQUS_SHORTNAME } from 'ngx-disqus';

@NgModule({
  providers: [
    { provide: DISQUS_SHORTNAME, useValue: 'shortname_value' }
  ]
})
export class AppModule { }
```

And just import `DisqusModule` in the feature module

```ts
import { DisqusModule } from 'ngx-disqus';

@NgModule({
  imports: [
    DisqusModule
  ]
})
export class FeatureModule { }
```

## More Options

See Disqus official documentation ([JavaScript configuration variables](https://help.disqus.com/customer/portal/articles/472098-javascript-configuration-variables)) before using these inputs.

```ts
<disqus [identifier]="pageId" [url]="url" [category]="catId" [language]="'en'"
        (newComment)="onComment($event)" (ready)="onReady($event)" (paginate)="onPaginate($event)"></disqus>
```

___

### NOTE

The HashLocationStrategy is not compatible with Disqus

For more info check [DISQUS on ajax sites](https://help.disqus.com/customer/portal/articles/472107-using-disqus-on-ajax-sites)

___

## Issues

If you identify any errors in this component, or have an idea for an improvement, please open an [issue](https://github.com/MurhafSousli/ngx-disqus/issues)!

## Author

**Murhaf Sousli**

- [github/murhafsousli](https://github.com/MurhafSousli)
- [twitter/murhafsousli](https://twitter.com/MurhafSousli)

## More plugins

- [ngx-sharebuttons](https://github.com/MurhafSousli/ngx-sharebuttons)
- [ngx-gallery](https://github.com/MurhafSousli/ngx-gallery)
- [ngx-progressbar](https://github.com/MurhafSousli/ngx-progressbar)
- [ngx-scrollbar](https://github.com/MurhafSousli/ngx-scrollbar)
- [ngx-bar-rating](https://github.com/MurhafSousli/ngx-bar-rating)
- [ngx-disqus](https://github.com/MurhafSousli/ngx-disqus)
- [ngx-wordpress](https://github.com/MurhafSousli/ngx-wordpress)
- [ngx-highlightjs](https://github.com/MurhafSousli/ngx-highlightjs)
- [ngx-teximate](https://github.com/MurhafSousli/ngx-teximate)
