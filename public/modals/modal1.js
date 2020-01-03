import React from 'react';
import ReactModal from 'react-modal';
import connect from '@/components/lib/connect';

ReactModal.setAppElement('#app');

export default connect((props) => {
  return (
    <ReactModal isOpen={props.visible('aaa')}>
      <button
        onClick={(e) => {
          props.dismiss('aaa');
        }}>
        Close
      </button>
    </ReactModal>
  );
});
