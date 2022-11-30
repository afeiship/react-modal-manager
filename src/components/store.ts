import { get } from 'lodash';
import EventMitt from '@jswork/event-mitt';

export default class {
  private modals = {};
  private context: any;
  private name = null;

  // todo: merged from `@jswork/event-mitt` package
  emit: any;
  on: any;
  off: any;
  one: any;
  once: any;

  constructor(inModals, inContext, inName) {
    this.modals = inModals;
    this.context = inContext;
    this.name = inName;
    Object.assign(this, EventMitt);
  }

  present(inName, inData): Promise<void> {
    const only = inName && typeof inName === 'object';
    const name = only ? this.name : inName;
    const data = only ? inName : inData || {};
    this.modals[name] = { visible: true, data };
    return new Promise((resolve) => {
      this.context.setState({ modals: this.modals }, () => {
        this.emit(`${name}:present`);
        resolve();
      });
    });
  }

  dismiss(inName): Promise<void> {
    const name = inName || this.name;
    this.modals[name] = { visible: false, data: {} };
    this.context.setState({ modals: this.modals });
    return new Promise((resolve) => {
      this.emit(`${name}:dismiss`);
      resolve();
    });
  }

  dismissAll = (inNames): Promise<any> => {
    const names = Array.isArray(inNames) ? inNames : Object.keys(this.modals);
    return Promise.all(names.map((name) => this.dismiss(name)));
  };

  value(inName) {
    const visible = this.visible(inName);
    const data = this.data(inName);
    return { visible, data };
  }

  visible(inName) {
    const name = inName || this.name;
    return get(this.modals, `${name}.visible`, false);
  }

  data(inName) {
    const name = inName || this.name;
    return get(this.modals, `${name}.data`, false);
  }
}
