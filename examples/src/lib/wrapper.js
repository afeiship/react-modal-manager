import Modal from "../modal";
import ModalContext from "./context";
import React from "react";

export default class extends React.Component {
  static defaultProps = {
    inject: store => {}
  };

  constructor(inProps) {
    super(inProps);
    this.state = {
      modals: {}
    };
  }

  render() {
    const { children, inject } = this.props;
    const { modals } = this.state;
    const present = (inName, inData) => {
      modals[inName] = { visible: true, data: inData };
      this.setState({ modals });
    };

    const dismiss = (inName, inData) => {
      modals[inName] = { visible: false, data: {} };
      this.setState({ modals });
    };

    const visible = inName => {
      return modals[inName] ? modals[inName].visible : false;
    };

    const data = inName => {
      return modals[inName] ? modals[inName].data : null;
    };

    const $store = { modals, data, visible, present, dismiss };

    inject($store);

    return (
      <ModalContext.Provider value={$store}>
        {children}
        <Modal />
      </ModalContext.Provider>
    );
  }
}
