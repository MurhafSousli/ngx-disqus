# Changelog

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