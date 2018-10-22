import React from 'react';

const ParagraphNode = ({ attributes, children }) => {
  return <p {...attributes}>{children}</p>;
};

export default ParagraphNode;
