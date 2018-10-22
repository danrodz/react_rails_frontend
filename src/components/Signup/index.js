import React, { Component } from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button,
  Panel
} from 'react-bootstrap';

class Signup extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: ''
  };
  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  render() {
    const {
      username,
      password,
      confirmPassword,
      firstName,
      lastName
    } = this.state;
    return (
      <div className="container">
        <Panel bsStyle="success">
          <Panel.Heading>
            <h1>Register</h1>
          </Panel.Heading>
          <form>
            <Panel.Body>
              <FieldGroup
                id="formControlsName"
                bsSize="large"
                type="text"
                name="firstName"
                label="First Name:"
                placeholder="Ex: John"
                required
                onChange={this.onInputChange}
                value={firstName}
              />
              <FieldGroup
                id="formControlsLastName"
                bsSize="large"
                type="text"
                name="lastName"
                label="Last Name:"
                placeholder="Ex: Smith"
                required
                onChange={this.onInputChange}
                value={lastName}
              />
              <FieldGroup
                id="formControlsEmail"
                bsSize="large"
                type="email"
                name="username"
                label="Email Address"
                placeholder="Enter email"
                required
                onChange={this.onInputChange}
                value={username}
              />
              <FieldGroup
                id="formControlsPassword"
                bsSize="large"
                name="password"
                label="Password"
                type="password"
                placeholder="Password"
                required
                onChange={this.onInputChange}
                value={password}
              />
              <FieldGroup
                id="formControlsConfirmPassword"
                bsSize="large"
                name="password"
                label="Confirm Password"
                type="password"
                placeholder="Confirm Password"
                required
                onChange={this.onInputChange}
                value={confirmPassword}
              />
              <FieldGroup
                id="formControlsFile"
                type="file"
                label="Select Image"
                help="Upload Profile Picture (Optional)"
              />
            </Panel.Body>
            <Panel.Footer>
              <Button bsStyle="danger" bsSize="large" type="button">
                Cancel
              </Button>
              <Button bsStyle="primary" bsSize="large" type="submit">
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

export default Signup;
