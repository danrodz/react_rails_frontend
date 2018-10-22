import React from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import Icon from 'react-icons-kit';
import { bold } from 'react-icons-kit/fa/bold';
import { italic } from 'react-icons-kit/fa/italic';
import { underline } from 'react-icons-kit/fa/underline';
import { strikethrough } from 'react-icons-kit/fa/strikethrough';

import ToolTip from '../../ToolTip/ToolTip';

import { code } from 'react-icons-kit/fa/code';
import { textHeight } from 'react-icons-kit/fa/textHeight';
import { quoteLeft } from 'react-icons-kit/fa/quoteLeft';
import { paragraph } from 'react-icons-kit/fa/paragraph';

import { image } from 'react-icons-kit/fa/image';

const FormatToolbar = ({ onMarkClick, toggleAddImage }) => {
  return (
    <ButtonToolbar>
      <ButtonGroup>
        <ToolTip strong="+Add Image">
          <Button
            className="tooltip-icon-button"
            onPointerDown={toggleAddImage}>
            <Icon icon={image} />
          </Button>
        </ToolTip>
      </ButtonGroup>
      <ButtonGroup>
        <ToolTip strong="Bold">
          <Button
            className="tooltip-icon-button"
            onPointerDown={e => onMarkClick(e, 'bold')}>
            <Icon icon={bold} />
          </Button>
        </ToolTip>
        <ToolTip strong="Italic">
          <Button
            className="tooltip-icon-button"
            onPointerDown={e => onMarkClick(e, 'italic')}>
            <Icon icon={italic} />
          </Button>
        </ToolTip>
        <ToolTip strong="Underline">
          <Button
            className="tooltip-icon-button"
            onPointerDown={e => onMarkClick(e, 'underline')}>
            <Icon icon={underline} />
          </Button>
        </ToolTip>
        <ToolTip strong="Strike Through">
          <Button
            className="tooltip-icon-button"
            onPointerDown={e => onMarkClick(e, 'strikeThrough')}>
            <Icon icon={strikethrough} />
          </Button>
        </ToolTip>
      </ButtonGroup>
      <ButtonGroup>
        <ToolTip strong="Paragraph">
          <Button
            className="tooltip-icon-button"
            onPointerDown={e => onMarkClick(e, 'paragraph', true)}>
            <Icon icon={paragraph} />
          </Button>
        </ToolTip>
        <ToolTip strong="Heading">
          <Button
            className="tooltip-icon-button"
            onPointerDown={e => onMarkClick(e, 'header', true)}>
            <Icon icon={textHeight} />
          </Button>
        </ToolTip>
        <ToolTip strong="Quote">
          <Button
            className="tooltip-icon-button"
            onPointerDown={e => onMarkClick(e, 'quote', true)}>
            <Icon icon={quoteLeft} />
          </Button>
        </ToolTip>
        <ToolTip strong="Unformat">
          <Button
            className="tooltip-icon-button"
            onPointerDown={e => onMarkClick(e, 'code', true)}>
            <Icon icon={code} />
          </Button>
        </ToolTip>
      </ButtonGroup>
    </ButtonToolbar>
  );
};

export default FormatToolbar;
