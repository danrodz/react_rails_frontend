import React, { Component } from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button,
  Panel
} from 'react-bootstrap';

class Signin extends Component {
  render() {
    return (
      <div className="container">
        <Panel bsStyle="info">
          <Panel.Heading>
            <h1>Sign In</h1>
          </Panel.Heading>
          <form>
            <Panel.Body>
              <FieldGroup
                id="formControlsEmail"
                bsSize="large"
                type="email"
                name="username"
                label="Email Address"
                placeholder="Enter email"
              />
              <FieldGroup
                id="formControlsPassword"
                bsSize="large"
                name="password"
                label="Password"
                type="password"
                placeholder="Password"
                required
              />
            </Panel.Body>
            <Panel.Footer>
              <Button bsSize="large" bsStyle="info" type="submit">
                Submit
              </Button>
            </Panel.Footer>
          </form>
        </Panel>
      </div>
    );
  }
}

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default Signin;
