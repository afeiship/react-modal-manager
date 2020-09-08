import NxOfflineSw from '@feizheng/next-offline-sw';
import ReactGithubCorner from '@feizheng/react-github-corner';
import ReactSwUpdateTips from '@feizheng/react-sw-update-tips';
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
            <img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
          </center>
          <Button />
        </ReactModalManager>

        <ReactSwUpdateTips value={this.state.hasUpdate} />
        <ReactGithubCorner value="https://github.com/afeiship/react-modal-manager" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
