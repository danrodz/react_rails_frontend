import React from 'react';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Panel
} from 'react-bootstrap';
import TextEditor from '../../../../shared/components/TextEditor/TextEditor';

const Stories = props => {
  const { storyTitle, handleInputChange, handleStorySubmit } = props;

  return (
    <Panel bsStyle="success">
      <Panel.Heading>
        <Panel.Title componentClass="h2">Share a Story</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <form onSubmit={handleStorySubmit}>
          <FormGroup controlId="formControlStoryTitle">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              componentClass="input"
              type="text"
              placeholder="+Add Title (Optional)"
              value={storyTitle}
              onChange={handleInputChange}
              name="storyTitle"
            />
          </FormGroup>
          <TextEditor />
          <Button type="submit">Share Story</Button>
        </form>
      </Panel.Body>
    </Panel>
  );
};

export default Stories;
