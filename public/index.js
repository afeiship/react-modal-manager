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
        <ReactModalManager
          context={ctx}
          inject={(e) => {
            window.store = e;
          }}>
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
