import React from 'react';
import ReactModal from 'react-modal';
import { useModal } from '../../../src/main';

ReactModal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
export default (props) => {
  const md = useModal();
  return (
    <ReactModal style={customStyles} isOpen={nx.$modal.visible('modal1')}>
      <p>I am modal - modal1</p>
      <button
        className="button"
        onClick={(e) => {
          console.log('close with useModal:', md);
          md.$modal.dismiss('modal1');
        }}>
        Close
      </button>
    </ReactModal>
  );
};
