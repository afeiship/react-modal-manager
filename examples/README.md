## react-modal-controller

```jsx
// initial:
import { ModalProvider } from 'react-modal-controller';

<ModalProvider value={{ present, dismiss, store }}>
    <ModalContext value={require.context('#/modals/', true, /index\.js$/)} />
</ModalProvider>


// usage:
@connectModal
class extends React.Component{
    dismiss(){
        const { store } = this.props.modalContext;
        store.dismiss('esbi-dashboard-share');
    },
    render(){
        const { store } = this.props.modalContext;
        return <Modal visible={store['esbi-dashboard-share'].visible}>xxx</Modal>
    }
}
```

## 1. context
```js
// context.js
export default React.createContext();
```
## 2. provider
```js
const { Provider } = require('./context').default;
export default ModalProvider = Provider;
```

## 3. connect
```js
const { Consumer } = require('./context').default;
export default (WrapComponent) => {
  class ContextProps extends Component {
    render() {
      const { forwardedRef, ...otherProps } = this.props;
      return (
        <Consumer>
          {(globalContext) => {
            return <WrapComponent ref={forwardedRef} {...globalContext} {...otherProps} />;
          }}
        </Consumer>
      );
    }
  }

  const forwardRef = (props, ref) => {
    return <ContextProps {...props} forwardedRef={ref} />;
  };

  forwardRef.displayName = Component.displayName || Component.name;
  return React.forwardRef(forwardRef);
};
```
