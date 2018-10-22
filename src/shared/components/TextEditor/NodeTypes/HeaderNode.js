import React from 'react';

const HeaderNode = ({ attributes, children }) => (
  <h3 {...attributes}>{children}</h3>
);

export default HeaderNode;
