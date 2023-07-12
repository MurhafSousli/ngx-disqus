# Changelog

## 3.0.1

- Upgrade to Angular 16

## 2.4.3

- enhance(Disqus): Ability to provide disqus shortname value using the `DISQUS_SHORTNAME` token.

## 2.4.2

- refactor(DisqusService): Remove Window provider in favor of document.defaultView, in [f427ea9](https://github.com/MurhafSousli/ngx-disqus/pull/52/commits/f427ea99e455fd21cee711242d3a6c12e6c7933e).

## 2.4.1

- fix peerDependencies for Angular > 5, closes [#50](https://github.com/MurhafSousli/ngx-disqus/issues/50) in [1019a0b](https://github.com/MurhafSousli/ngx-disqus/pull/51/commits/1019a0bf1346fee553e7e791328cf43fdf97d686).
- refactor(Disqus): Provide `DisqusService` using `providedIn: 'root'` in [87514ac](https://github.com/MurhafSousli/ngx-disqus/pull/51/commits/87514accb7dc8104f92c2d70faffe56c6e23394d).

## 2.4.0

- fix(Disqus): Duplicated disqus scripts and styles in the head tag, closes [#42](https://github.com/MurhafSousli/ngx-disqus/issues/42) in [e98d224](https://github.com/MurhafSousli/ngx-disqus/pull/43/commits/e98d224ce737830a949bbeabc1600eb8ea14dd85).
- refactor(Disqus): Improve disqus service, adds window provider.
- export `DisqusService` so it can be importable everywhere.

## 2.3.7

No changes, republished the library with ng-packagr@2.0.0-rc.7, fixes [#33](https://github.com/MurhafSousli/ngx-disqus/issues/33).

## 2.3.5

- Fix(no provider for rendered2) closes [#28](https://github.com/MurhafSousli/ngx-disqus/issues/28)

## 2.3.1

- Recompile with the next version of ng-packagr

## 2.3.0

### Breaking changes

- rename `onReady` output to `ready`.
- rename `onPaginate` output to `paginate`.
- rename `onNewComment` output to `newComment`.

 rename

## 2.2.1

- Fix cannot resolve all parameter warning, closes #18.

## 2.2.0

- feat(onReady, onPaginate) events.
- rename `comment` output to `onNewComment`.

## 2.1.1

- support for Universal

## 2.1.0

- refactor(DisqusComponent) remove unnecessary checks for input changes
- refactor(DisqusService) remove unnecessary getters for `window`

 **Breaking changes**

- `shortname` input is removed, set your disqus shortname here `DisqusModule.forRoot('disqus_shortname')`
- `categoryId` input is renamed to `category`

## 2.0.0

- Change package name to `ngx-disqus`

## 1.1.1

- Cleanup
- Update dependencies

## 1.1.0

- (fix) Passing identifiers, closes [#3](https://github.com/MurhafSousli/ng2-disqus/issues/3)
- (feat) @Output() `comment` callback (output)
- **[removeOnDestroy]** input is deprecated, it will remove disqus script on destroy by default.
 
## 1.0.4
- Improve component code
- Add URL validator
- Add tests for window service

## 1.0.3
- AOT support
- Adds window service

## 1.0.2
- initial release
