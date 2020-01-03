import React, { Component } from 'react';
import ModalContext from './context';

export default (WrapComponent) => {
  class ContextProps extends Component {
    render() {
      const { forwardedRef, ...otherProps } = this.props;
      return (
        <ModalContext.Consumer>
          {(globalContext) => {
            return (
              <WrapComponent
                ref={forwardedRef}
                {...globalContext}
                {...otherProps}
              />
            );
          }}
        </ModalContext.Consumer>
      );
    }
  }
  const forwardRef = (props, ref) => {
    return <ContextProps {...props} forwardedRef={ref} />;
  };

  forwardRef.displayName = Component.displayName || Component.name;
  return React.forwardRef(forwardRef);
};
