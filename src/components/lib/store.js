import { get } from 'lodash';
import EventMitt from '@feizheng/event-mitt';

export default class {
  constructor(inModals, inContext, inName) {
    this.modals = inModals;
    this.context = inContext;
    this.name = inName;
    Object.assign(this, EventMitt);
  }

  present(inName, inData) {
    const name = inName || this.name;
    const data = inData || {};
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
}
