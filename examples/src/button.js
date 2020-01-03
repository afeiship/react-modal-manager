import React from "react";
import connect from './lib/connect';

export default connect(({ present }) => {
  return (
    <button
      onClick={e => {
        present('aaa');
      }}
    >
      Open Modal
    </button>
  );
});
