import { get } from 'lodash';
import EventMitt from '@jswork/event-mitt';

export default class {
  constructor(inModals, inContext, inName) {
    this.modals = inModals;
    this.context = inContext;
    this.name = inName;
    Object.assign(this, EventMitt);
  }

  present(inName, inData) {
    const only = name && typeof name === 'object';
    const name = only ? this.name : inName;
    const data = only ? inName : inData || {};
    this.modals[name] = { visible: true, data };
    this.context.setState({ modals: this.modals });
    this.emit(`${name}:present`);
  }

  dismiss(inName) {
    const name = inName || this.name;
    this.modals[name] = { visible: false, data: {} };
    this.context.setState({ modals: this.modals });
    this.emit(`${name}:dismiss`);
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
