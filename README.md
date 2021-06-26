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
| Name      | Type   | Required | Default | Description                                            |
| --------- | ------ | -------- | ------- | ------------------------------------------------------ |
| className | string | false    | -       | The extended className for component.                  |
| context   | func   | false    | -       | The model required context pattern.                    |
| name      | string | false    | -       | The only shared model name.                            |
| inject    | func   | false    | noop    | Callback when you want to inject to some other object. |
| ready     | bool   | false    | true    | If your app has ready.                                 |


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
  import NxOfflineSw from '@jswork/next-offline-sw';
  import ReactGithubCorner from '@jswork/react-github-corner';
  import ReactSwUpdateTips from '@jswork/react-sw-update-tips';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactModalManager, { modal } from '@jswork/react-modal-manager';
  import './assets/style.scss';

  const code = `
  /* ---- Run in console ---- */

  // show modal1
  store.present('modal1');

  // show modal1 with data
  store.present('modal1',{ key:"1", key2: "2" });

  // hide modal1
  store.present('modal1');
  `;

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
    state = { hasUpdate: false, items: ['value1', 'value2', 'value3', 'value4'] };

    componentDidMount() {
      NxOfflineSw.install({
        onUpdateReady: () => {
          this.setState({ hasUpdate: true });
        }
      });
    }

    render() {
      const ctx = require.context('./modals/', true, /\.js$/);
      return (
        <div className="app-container bg-gray-100">
          <ReactModalManager
            context={ctx}
            inject={(e) => {
              window.store = e;
            }}>
            <h2 style={{ marginBottom: 20 }}>My Modals App</h2>
            <center className="mb-4">
              <img src="https://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
            </center>
            <Button />
          </ReactModalManager>

          <pre>
            <code className="w-full p-2">{code}</code>
          </pre>

          <ReactSwUpdateTips value={this.state.hasUpdate} />
          <ReactGithubCorner value="https://github.com/afeiship/react-modal-manager" />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

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
