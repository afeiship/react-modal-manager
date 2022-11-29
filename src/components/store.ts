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

  present(inName, inData) {
    const only = inName && typeof inName === 'object';
    const name = only ? this.name : inName;
    const data = only ? inName : inData || {};
    this.modals[name] = { visible: true, data };
    this.context.setState({ modals: this.modals });
    return this.emit(`${name}:present`);
  }

  dismiss(inName) {
    const name = inName || this.name;
    this.modals[name] = { visible: false, data: {} };
    this.context.setState({ modals: this.modals });
    return this.emit(`${name}:dismiss`);
  }

  visible(inName) {
    const name = inName || this.name;
    return get(this.modals, `${name}.visible`, false);
  }

  data(inName) {
    const name = inName || this.name;
    return get(this.modals, `${name}.data`, false);
  }

  dismissAll = (inNames) => {
    const names = Array.isArray(inNames) ? inNames : Object.keys(this.modals);
    names.forEach((name) => this.dismiss(name));
  };
}
