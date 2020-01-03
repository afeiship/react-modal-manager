import ReactModalManager, { connect } from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

const Button = connect((props) => {
  return (
    <button
      onClick={() => {
        props.present('aaa');
      }}>
      Open
    </button>
  );
});

class App extends React.Component {
  render() {
    const ctx = require.context('./modals/', true, /\.js$/);
    return (
      <div className="app-container">
        <ReactModalManager context={ctx}>
          My App Running
          <Button />
        </ReactModalManager>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
