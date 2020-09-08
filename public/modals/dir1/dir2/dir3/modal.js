import connect from '@/components/lib/connect';
import React from 'react';
import ReactModal from 'react-modal';

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
    <ReactModal
      style={customStyles}
      isOpen={props.$modal.visible('dir1/dir2/dir3/modal')}>
      <p>I am modal - modal1</p>
      <button
        className="button"
        onClick={(e) => {
          props.$modal.dismiss('dir1/dir2/dir3/modal');
        }}>
        Close ME(Deep path.)
      </button>
    </ReactModal>
  );
});
