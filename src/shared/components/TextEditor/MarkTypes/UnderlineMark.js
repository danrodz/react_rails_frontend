import React from 'react';

const UnderlineMark = ({ attributes, children }) => {
  return (
    <div>
      <u {...attributes}>{children}</u>
    </div>
  );
};

export default UnderlineMark;
