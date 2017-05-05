<p align="center">
  <img height="300px" width="300px" style="text-align: center;" src="https://cdn.rawgit.com/MurhafSousli/ngx-disqus/master/assets/logo.svg">
  <h1 align="center">Angular Disqus Module</h1>
</p>

 Add disqus to your app instantly 
 [![npm](https://img.shields.io/badge/demo-online-ed1c46.svg?style=flat-square)](https://murhafsousli.github.io/ngx-disqus/) [![npm](https://img.shields.io/npm/v/ngx-disqus.svg?style=flat-square)](https://github.com/MurhafSousli/ngx-disqus) [![Build Status](https://travis-ci.org/MurhafSousli/ngx-disqus.svg?style=flat-square)](https://travis-ci.org/MurhafSousli/ngx-disqus) [![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](/LICENSE)

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

Add `DisqusModule` in your root module

```ts
import { DisqusModule } from "ngx-disqus";
@NgModule({
  imports: [
    // ...
    DisqusModule
  ]
})
```

Add disqus component

```html
<disqus [shortname]="shortname" [identifier]="pageId"></disqus>
```

## Advanced usage:

See Disqus official documentation ([JavaScript configuration variables](https://help.disqus.com/customer/portal/articles/472098-javascript-configuration-variables)) before using these inputs.

```ts
<disqus [shortname]="shortname" [identifier]="pageId" 
    [url]="customUrl" [categoryId]="catId" [lang]="'en'"     
    (comment)="onComment($event)"
  ></disqus>
```

Use the output `(comment)` to get the responses for the new comments posted by users.

## Issues


If you identify any errors in this component, or have an idea for an improvement, please open an [issue](https://github.com/MurhafSousli/ngx-disqus/issues). I am excited to see what the community thinks of this project, and I would love your input!

## Author

 **Murhaf Sousli**

 - [github/murhafsousli](https://github.com/MurhafSousli)
 - [twitter/murhafsousli](https://twitter.com/MurhafSousli)

