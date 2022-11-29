import Component from './components';
import Store from './components/store';
import { useModal } from './components/context';

export default Component;
export { useModal, Store };

export interface NxStatic {
  $modal: Store;
}
