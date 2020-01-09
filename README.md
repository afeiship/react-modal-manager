# react-modal-manager
> A cool modal manager for react.

## installation
```shell
npm install -S @feizheng/react-modal-manager
```

## update
```shell
npm update @feizheng/react-modal-manager
```

## properties
| property  | type     | default | description                    |
| --------- | -------- | ------- | ------------------------------ |
| className | String   | -       | The extened className          |
| value     | Function | -       | The require.context            |
| inject    | Function | -       | The injector for app           |
| name      | String   | -       | The default dynamic modal name |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-modal-manager/dist/style.scss";

  // customize your styles:
  $react-modal-manager-options: ()
  ```
2. import js
  ```js
  import ReactModalManager, { modal } from '../src/main';
  import ReactDOM from 'react-dom';
  import React from 'react';
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
