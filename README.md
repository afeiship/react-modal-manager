# react-modal-manager
> A cool modal manager for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/react-modal-manager
```

## update
```shell
npm update @feizheng/react-modal-manager
```

## properties
__GENERATE_DOCS__

## usage
1. import css
  ```scss
  @import "~@feizheng/react-modal-manager/dist/style.scss";

  // customize your styles:
  $react-modal-manager-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactModalManager, { modal } from '../src/main';
  import './assets/style.scss';

  const Button = modal((props) => {
    return (
      <React.Fragment>
        <button
          className="button"
          onClick={() => {
            props.$modal.present('modal1');
          }}>
          Open modal
        </button>

        <button
          className="button"
          onClick={() => {
            props.$modal.present('modal2');
          }}>
          Open Modal2
        </button>

        <button
          className="button"
          onClick={() => {
            props.$modal.present('dir1/dir2/dir3/modal');
          }}>
          Model in deep path
        </button>
      </React.Fragment>
    );
  });

  class App extends React.Component {
    render() {
      const ctx = require.context('./modals/', true, /\.js$/);
      return (
        <div className="app-container">
          <ReactModalManager context={ctx}>
            <h2 style={{ marginBottom: 20 }}>My Modals App</h2>
            <center>
              <img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
            </center>
            <Button />
          </ReactModalManager>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-modal-manager/


## license
Code released under [the MIT license](https://github.com/afeiship/react-modal-manager/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/react-modal-manager
[version-url]: https://npmjs.org/package/@feizheng/react-modal-manager

[license-image]: https://img.shields.io/npm/l/@feizheng/react-modal-manager
[license-url]: https://github.com/afeiship/react-modal-manager/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/react-modal-manager
[size-url]: https://github.com/afeiship/react-modal-manager/blob/master/dist/react-modal-manager.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/react-modal-manager
[download-url]: https://www.npmjs.com/package/@feizheng/react-modal-manager
