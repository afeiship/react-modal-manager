import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@jswork/noop';
import Store from './lib/store';
import ModalContext from './lib/context';

const CLASS_NAME = 'react-modal-manager';

export default class ReactModalManager extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The model required context pattern.
     */
    context: PropTypes.func,
    /**
     * The only shared model name.
     */
    name: PropTypes.string,
    /**
     * Callback when you want to inject to some other object.
     */
    inject: PropTypes.func,
    /**
     * If your app has ready.
     */
    ready: PropTypes.bool
  };

  static defaultProps = {
    inject: noop,
    ready: true
  };

  constructor(inProps) {
    super(inProps);
    const { inject, name } = inProps;
    this.state = { modals: {} };
    this.store = new Store(this.state.modals, this, name);
    inject(this.store);
  }

  render() {
    const { children, context, ready } = this.props;
    if (!context) return null;
    const callback = context;
    const keys = context.keys();
    return (
      <ModalContext.Provider value={{ $modal: this.store }}>
        {children}
        {ready &&
          keys.map((item) =>
            React.createElement(callback(item).default, { key: item })
          )}
      </ModalContext.Provider>
    );
  }
}
