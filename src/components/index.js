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
    name: PropTypes.string,
    inject: PropTypes.func
  };

  static defaultProps = {
    inject: noop
  };

  constructor(inProps) {
    super(inProps);
    const { inject, name } = inProps;
    this.state = { modals: {} };
    this.store = new Store(this.state.modals, this, name);
    inject(this.store);
  }

  render() {
    const { children, context } = this.props;
    const callback = context;
    const keys = context.keys();
    return (
      <ModalContext.Provider value={{ $modal: this.store }}>
        {children}
        {keys.map((item) => {
          return React.createElement(callback(item).default, { key: item });
        })}
      </ModalContext.Provider>
    );
  }
}
