import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import Store from './lib/store';
import ModalContext from './lib/context';

const CLASS_NAME = 'react-modal-manager';

export default class extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    className: PropTypes.string,
    context: PropTypes.func.isRequired,
    inject: PropTypes.func
  };

  static defaultProps = {
    inject: noop
  };

  constructor(inProps) {
    super(inProps);
    const { inject } = inProps;
    this.state = { modals: {} };
    this.store = new Store(this.state.modals, this);
    inject(this.store);
  }

  render() {
    const { children, context } = this.props;
    const callback = context;
    const keys = context.keys();
    const store = {
      modals: this.store.modals,
      present: this.store.present.bind(this.store),
      dismiss: this.store.dismiss.bind(this.store),
      visible: this.store.visible.bind(this.store),
      data: this.store.data.bind(this.store)
    };

    return (
      <ModalContext.Provider value={store}>
        {children}
        {keys.map((item) => {
          return React.createElement(callback(item).default, { key: item });
        })}
      </ModalContext.Provider>
    );
  }
}
