import React from 'react';

const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: 'solid black 1px',
        height: '800px',
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
