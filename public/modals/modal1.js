import React from 'react';
import ReactModal from 'react-modal';
import connect from '@/components/lib/connect';

ReactModal.setAppElement('#app');

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
export default connect((props) => {
  return (
    <ReactModal style={customStyles} isOpen={props.$modal.visible('modal1')}>
      <p>I am modal - modal1</p>
      <button
        className="button"
        onClick={(e) => {
          props.$modal.dismiss('modal1');
        }}>
        Close
      </button>
    </ReactModal>
  );
});
