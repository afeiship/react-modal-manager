import React, { Component, HTMLAttributes } from 'react';
import noop from '@jswork/noop';
import Store from './store';
import { ModalContext } from './context';

const CLASS_NAME = 'react-modal-manager';

export type ReactModalManagerProps = {
  /**
   * The extended className for component.
   */
  className?: string;
  /**
   * The model required store pattern.
   */
  store?: any;
  /**
   * The only shared model name.
   */
  name?: string;
  /**
   * Callback when you want to inject to some other object.
   */
  inject?: (target: any) => void;
  /**
   * If inject $modal to nx;
   */
  harmony?: boolean;
  /**
   * If your app has ready.
   */
  ready?: boolean;
} & HTMLAttributes<any>;

type ReactModalManagerState = {
  modals: {};
};

export default class ReactModalManager extends Component<
  ReactModalManagerProps,
  ReactModalManagerState
> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    inject: noop,
    ready: true,
    name: 'nx-modal'
  };

  private readonly store: Store;

  constructor(inProps) {
    super(inProps);
    const { inject, name } = inProps;
    this.state = { modals: {} };
    this.store = new Store(this.state.modals, this, name);
    inject(this.store);
    this.processHarmony();
  }

  processHarmony = () => {
    const { harmony } = this.props;
    const harmonyCtx = window['nx'];
    if (harmony && harmonyCtx) {
      harmonyCtx.set(harmonyCtx, '$modal', this.store);
    }
  };

  render() {
    const { children, store, ready } = this.props;
    const keys = Object.keys(store);

    return (
      <ModalContext.Provider value={{ $modal: this.store }}>
        {children}
        {ready && keys.map((item) => React.createElement(store[item], { key: item }))}
      </ModalContext.Provider>
    );
  }
}
