import React, { Component, Fragment } from 'react';
import { Jumbotron, Button, Col, Row, Panel, Image } from 'react-bootstrap';
import { Editor } from 'slate-react';
import Html from 'slate-html-serializer';

import FormatToolbar from './FormatToolbar/FormatToolbar';
import MarkHotKey from './MarkHotKey/MarkHotKey';
import rules from './Plugins/Rules';
import InsertImage from './Plugins/InsertImage';
import ImageUploadTool from '../ImageUploadTool/ImageUploadTool';

import CodeNode from './NodeTypes/CodeNode';
import HeaderNode from './NodeTypes/HeaderNode';
import ParagraphNode from './NodeTypes/ParagraphNode';
import BlockquoteNode from './NodeTypes/BlockquoteNode';

import BoldMark from './MarkTypes/BoldMark';
import ItalicMark from './MarkTypes/ItalicMark';
import UnderlineMark from './MarkTypes/UnderlineMark';
import StrikeThroughMark from './MarkTypes/StrikeThroughMark';

const html = new Html({ rules });

const initialValue = `<h3>Tommy's life was too short, but it was full.  For someone his age, there are many chapters of his life to record. </h3>
<p>Over time, we will fill this page with memorable dates, events from childhood, teen years, college, and adult life.  The stories and pictures that are uploaded will provide a source of comfort over the years as we recall the life of our son, brother, cousin, friend and Dad.</p>
<p>Help us build the story.  Please share some memories on the STORIES tab or even just upload a photo on the GALLERY TAB. It would be great if you can reference how you knew Tommy/first met, if you went to school or worked with him. You can also illustrate your story with a picture, music, or video.  There is no storage limit, so please keep it flowing!</p>
<p>Sharing your memory and pictures is such a precious gift and our family is forever grateful!</p>
`;

const plugins = [
  MarkHotKey({ key: '`', type: 'code', renderNode: true }),
  MarkHotKey({ key: 'h', type: 'header', renderNode: true }),
  MarkHotKey({ key: 'q', type: 'quote', renderNode: true }),
  MarkHotKey({ key: 'p', type: 'paragraph', renderNode: true }),
  MarkHotKey({ key: 'b', type: 'bold' }),
  MarkHotKey({ key: 'i', type: 'italic' }),
  MarkHotKey({ key: 'u', type: 'underline' }),
  MarkHotKey({ key: 's', type: 'strikeThrough' }),
  InsertImage()
];

class TextEditor extends Component {
  state = {
    value: html.deserialize(initialValue),
    htmlValue: initialValue,
    hide: true,
    showImageUploadTool: false
  };

  ref = editor => {
    this.editor = editor;
  };

  renderMark = (props, next) => {
    switch (props.mark.type) {
      case 'bold':
        return <BoldMark {...props} />;
      case 'italic':
        return <ItalicMark {...props} />;
      case 'underline':
        return <UnderlineMark {...props} />;
      case 'strikeThrough':
        return <StrikeThroughMark {...props} />;
      default:
        return next();
    }
  };

  renderNode = (props, next) => {
    switch (props.node.type) {
      case 'code':
        return <CodeNode {...props} />;
      case 'header':
        return <HeaderNode {...props} />;
      case 'quote':
        return <BlockquoteNode {...props} />;
      case 'paragraph':
        return <ParagraphNode {...props} />;
      case 'image':
        const src = props.node.data.get('src');
        return <Image {...props.attributes} responsive src={src} />;
      default:
        return next();
    }
  };

  onChange = ({ value }) => {
    const htmlValue = html.serialize(value);
    this.setState({ value, htmlValue });
  };

  onMarkClick = (e, type, nodeType) => {
    if (!nodeType) return this.editor.change(change => change.toggleMark(type));

    let node;
    this.editor.change(change => {
      node = change.value.blocks.some(block => block.type == type);

      change.setBlocks(node ? 'paragraph' : type);
    });
  };

  toggleAddImage = () => {
    let { showImageUploadTool } = this.state;
    this.setState({ showImageUploadTool: !showImageUploadTool });
    this.editor.change(change =>
      change.insertImage('https://placeimg.com/800/640/any')
    );
  };

  onSaveClick = hide => {
    this.setState({ hide });
  };

  render() {
    const { hide, showImageUploadTool } = this.state;

    return (
      <Fragment>
        <Jumbotron>
          <Row>
            <Col sm={2}>
              <Button onClick={() => this.onSaveClick(!hide)}>
                {hide ? 'Edit' : 'Save'}
              </Button>
            </Col>
            <Col sm={10}>
              {!hide ? (
                <FormatToolbar
                  onMarkClick={this.onMarkClick}
                  toggleAddImage={this.toggleAddImage}
                />
              ) : null}
            </Col>
          </Row>
          {showImageUploadTool ? (
            <Panel>
              <Panel.Body>
                <ImageUploadTool />
              </Panel.Body>
            </Panel>
          ) : null}
          <Editor
            plugins={plugins}
            ref={this.ref}
            value={this.state.value}
            onChange={this.onChange}
            renderNode={this.renderNode}
            renderMark={this.renderMark}
            readOnly={hide ? true : false}
          />
        </Jumbotron>
      </Fragment>
    );
  }
}

export default TextEditor;
