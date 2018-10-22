import React, { Component } from 'react';
import {
  FormGroup,
  ControlLabel,
  Button,
  HelpBlock,
  FormControl,
  Panel,
  Row,
  Col
} from 'react-bootstrap';

class ImageUploadTool extends Component {
  state = {
    caption: '',
    showUpload: false
  };

  toggleShowUpload = e => {
    e.preventDefault();
    const showUpload = !this.state.showUpload;
    this.setState({ showUpload });
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { showUpload, caption } = this.state;

    if (!showUpload) {
      return <Button onClick={this.toggleShowUpload}>+Add Images</Button>;
    }

    return (
      <Panel>
        <Panel.Body>
          <form onSubmit={this.toggleShowUpload}>
            <FormGroup controlId="formControlStoryTitle">
              <ControlLabel>Caption</ControlLabel>
              <FormControl
                bsSize="large"
                componentClass="input"
                type="text"
                placeholder="+Add Caption (Optional)"
                value={caption}
                onChange={this.handleInputChange}
                name="caption"
              />
            </FormGroup>
            <FormGroup bsSize="large" controlId="formControlStoryFileUpload">
              <HelpBlock>+Add Images</HelpBlock>
              <FormControl
                className="btn-lg"
                type="file"
                label="images[]"
                multiple="multiple"
                accept="image/*"
              />
            </FormGroup>
            <Row>
              <Col smOffset={2} sm={2}>
                <Button bsStyle="success btn-lg" type="submit">
                  Upload
                </Button>
              </Col>
              <Col smOffset={2} sm={2}>
                <Button bsStyle="danger btn-lg" onClick={this.toggleShowUpload}>
                  Cancel
                </Button>
              </Col>
            </Row>
          </form>
        </Panel.Body>
      </Panel>
    );
  }
}

export default ImageUploadTool;
