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
    transform: 'translate(-50%, -50%)',
    background: '#eee'
  }
};
export default connect((props) => {
  return (
    <ReactModal style={customStyles} isOpen={props.$modal.visible('modal2')}>
      <h2>Modal2</h2>
      <p>I am modal - modal2</p>
      <button
        className="button"
        onClick={(e) => {
          props.$modal.dismiss('modal2');
        }}>
        Close
      </button>
    </ReactModal>
  );
});
