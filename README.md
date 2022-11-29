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
  import React from 'react';
  import ReactModalManager from '@jswork/react-modal-manager';
  import styled from 'styled-components';
  import viteRequireContext from '@jswork/vite-require-context';
  import '@jswork/next';

  const Container = styled.div`
    width: 80%;
    margin: 30px auto 0;
  `;

  const moduleFiles = import.meta.globEager('./modals/*.jsx');
  const context = viteRequireContext(moduleFiles);

  export default () => {
    return (
      <Container>
        <ReactModalManager
          context={context}
          inject={(e) => {
            nx.$modal = e;
          }}>
          <button
            onClick={() => {
              nx.$modal.present('modal1');
            }}>
            MyModal
          </button>
        </ReactModalManager>
      </Container>
    );
  };

  ```

## preview
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
