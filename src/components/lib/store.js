import nx from '@feizheng/next-js-core2';

export default class {
  constructor(inModals, inContext) {
    this.modals = inModals;
    this.context = inContext;
  }

  present(inName, inData) {
    const data = inData || {};
    this.modals[inName] = { visible: true, data };
    this.context.setState({ modals: this.modals });
  }

  dismiss(inName) {
    this.modals[inName] = { visible: false, data: {} };
    this.context.setState({ modals: this.modals });
  }

  visible(inName) {
    return nx.get(this.modals, `${inName}.visible`) || false;
  }

  data(inName) {
    return nx.get(this.modals, `${inName}.data`) || false;
  }
}
