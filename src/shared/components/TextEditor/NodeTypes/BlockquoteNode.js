import React from 'react';

const BlockquoteNode = ({ attributes, children }) => {
  return <quote {...attributes}>{children}</quote>;
};

export default BlockquoteNode;
