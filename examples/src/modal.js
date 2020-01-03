import React from "react";
import connect from "./lib/connect";

export default connect(({ visible, present, dismiss }) => {
  const _visible = visible('aaa')
  return (
    <div className="modal" data-visible={_visible}>
      Modal - {String(_visible)}
      <button
        onClick={e => {
          dismiss("aaa");
        }}
      >
        Close
      </button>
    </div>
  );
});
