import objectPath from 'object-path';
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

  /**
   * Show modal with given name and data.
   * @param inName
   * @param inData
   */
  present(inName: string, inData?): Promise<void> | void {
    const only = inName && typeof inName === 'object';
    const name = (only ? this.name : inName) as string;
    const data = only ? inName : inData || {};
    this.modals[name] = { visible: true, data };
    return new Promise((resolve) => {
      this.context.setState({ modals: this.modals }, () => {
        this.emit(`${name}:present`);
        resolve();
      });
    });
  }

  /**
   * Present modal with given name and data then wait for dismiss.
   * @param inName
   * @param inData
   */
  presentWhen(inName: string, inData?): Promise<void> | void {
    const eventName = `${inName}:dismiss`;
    return new Promise((resolve) => {
      this.once(eventName, resolve);
      void this.present(inName, inData);
    });
  }

  /**
   * Dismiss modal with given name.
   * @param inName
   */
  dismiss(inName: string): Promise<void> | void {
    const name = (inName || this.name) as string;
    this.modals[name] = { visible: false, data: {} };
    this.context.setState({ modals: this.modals });
    return new Promise((resolve) => {
      this.emit(`${name}:dismiss`);
      resolve();
    });
  }

  /**
   * Dismiss all the modals with given names or all.
   * @param inNames
   */
  dismissAll = (inNames?: string[] | any): Promise<any> | void => {
    const names = Array.isArray(inNames) ? inNames : Object.keys(this.modals);
    return Promise.all(names.map((name) => this.dismiss(name)));
  };

  /**
   * Get modal data by given name, return visible status and data.
   * @param inName
   */
  value(inName: string) {
    const visible = this.visible(inName);
    const data = this.data(inName);
    return { visible, data };
  }

  /**
   * Get modal visible status by given name.
   * @param inName
   */
  visible(inName: string) {
    const name = inName || this.name;
    return objectPath.get(this.modals, `${name}.visible`, false);
  }

  /**
   * Get modal data by given name.
   * @param inName
   */
  data(inName: string) {
    const name = inName || this.name;
    return objectPath.get(this.modals, `${name}.data`, null);
  }
}
