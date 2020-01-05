import { get } from 'lodash';

export default class {
  constructor(inModals, inContext, inName) {
    this.modals = inModals;
    this.context = inContext;
    this.name = inName;
  }

  present(inName, inData) {
    const name = inName || this.name;
    const data = inData || {};
    this.modals[name] = { visible: true, data };
    this.context.setState({ modals: this.modals });
  }

  dismiss(inName) {
    const name = inName || this.name;
    this.modals[name] = { visible: false, data: {} };
    this.context.setState({ modals: this.modals });
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
