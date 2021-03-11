# react-modal-manager
> A cool modal manager for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-modal-manager
```

## properties
__GENERATE_DOCS__

## usage
1. import css
  ```scss
  @import "~@jswork/react-modal-manager/dist/style.css";

  // or use sass
  @import "~@jswork/react-modal-manager/dist/style.scss";

  // customize your styles:
  $react-modal-manager-options: ()
  ```
2. import js
  ```js
__GENERATE_DAPP__
  ```

## todos
- [ ] 在 `dismiss` 的时候，会有带一些data出去的需求
- [ ] 在与其它的 `@observe`r 组合的时候，会出现无法触发的情况
- [ ] 在 `present/dismiss` 的时候，配合一下全局事件，这样就可以完美处理 `data` 里带 `callback` 的需求了

## documentation
- https://afeiship.github.io/react-modal-manager/


## license
Code released under [the MIT license](https://github.com/afeiship/react-modal-manager/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-modal-manager
[version-url]: https://npmjs.org/package/@jswork/react-modal-manager

[license-image]: https://img.shields.io/npm/l/@jswork/react-modal-manager
[license-url]: https://github.com/afeiship/react-modal-manager/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-modal-manager
[size-url]: https://github.com/afeiship/react-modal-manager/blob/master/dist/react-modal-manager.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-modal-manager
[download-url]: https://www.npmjs.com/package/@jswork/react-modal-manager
