# Angular 2 Disqus [![npm](https://img.shields.io/npm/v/ng2-awesome-disqus.svg?maxAge=2592000?style=plastic)](https://github.com/MurhafSousli/ng2-awesome-disqus) [![Build Status](https://travis-ci.org/MurhafSousli/ng2-disqus.svg?branch=master)](https://travis-ci.org/MurhafSousli/ng2-disqus) [![npm](https://img.shields.io/npm/dt/ng2-awesome-disqus.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/ng2-awesome-disqus)

<p align="center"><img style="text-align: center;" src="/assets/cover.PNG?raw=true"></p>

Angular 2 Disqus comment system | [live demo](https://murhafsousli.github.io/ng2-disqus/)

## Installation

Install it with npm

`npm install ng2-awesome-disqus --save`

## Basic usage:

Add `DisqusModule` to **NgModule** `imports` array.

```
import {DisqusModule} from "ng2-awesome-disqus";
@NgModule({
  imports: [
    DisqusModule
  ]
})
```
In your template

```
<disqus [shortname]="disqusShortname" [identifier]="pageIdentifier" ></disqus>
```

## Advanced usage:

It's highly recommended to read Disqus official documentation ([JavaScript configuration variables](https://help.disqus.com/customer/portal/articles/472098-javascript-configuration-variables)) before setting these inputs.

```
<disqus [shortname]="disqusShortname" [identifier]="pageIdentifier" 
    [url]="customUrl" [categoryId]="catId" [lang]="'en'"
      
    [removeOnDestroy]="true"
  ></disqus>
```
 by default the component will reset *Disqus* configurations after its view initializes again, to remove *Disqus* script completely on component destroy,
      set `[removeOnDestroy]="true"` (you won't need this option unless you change the site theme as in the preview).

## Issues


If you identify any errors in this component, or have an idea for an improvement, please open an [issue](https://github.com/MurhafSousli/ng2-awesome-disqus/issues). I am excited to see what the community thinks of this project, and I would love your input!

## Author

 **Murhaf Sousli**

 - [github/murhafsousli](https://github.com/MurhafSousli)
 - [twitter/murhafsousli](https://twitter.com/MurhafSousli)

## License

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](/LICENSE)