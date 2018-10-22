import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

const tooltip = (strong, regular) => (
  <Tooltip>
    <strong>{strong}</strong>
    {regular}
  </Tooltip>
);

const ToolTip = props => {
  const { strong = null, regular = null, children = null } = props;

  const tooltipinfo = tooltip(strong, regular);

  return (
    <OverlayTrigger placement="top" overlay={tooltipinfo}>
      {children}
    </OverlayTrigger>
  );
};

export default ToolTip;
