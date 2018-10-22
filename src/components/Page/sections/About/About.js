import React, { Fragment } from 'react';
import {
  FormGroup,
  FormControl,
  Button,
  Panel,
  Row,
  Col,
  Image,
  Media,
  Jumbotron
} from 'react-bootstrap';

import TextEditor from '../../../../shared/components/TextEditor/TextEditor';

import flower from '../../../../shared/images/flower.png';
import pencil from '../../../../shared/images/pencil.png';
import candle from '../../../../shared/images/flame.png';

const About = props => {
  const imageStyle = { maxHeight: '64px', width: 'auto', margin: '10px 0px' };

  const {
    tribute,
    tributeType,
    handleInputChange,
    handleTributeTypeChange
  } = props;

  const tributeTypes = {
    flower: flower,
    pencil: pencil,
    candle: candle
  };

  return (
    <Fragment>
      <Jumbotron>
        <TextEditor />
      </Jumbotron>
      <Panel bsStyle="info">
        <Panel.Heading>
          <Panel.Title componentClass="h2">Leave a Tribute</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Row>
            <Col xsOffset={3} xs={2} md={2}>
              <Image
                src={flower}
                alt="flower"
                style={imageStyle}
                onClick={() => handleTributeTypeChange('flower')}
              />
              <p>Lay Flower</p>
            </Col>
            <Col xs={2} md={2}>
              <Image
                src={pencil}
                alt="pencil"
                style={imageStyle}
                onClick={() => handleTributeTypeChange('pencil')}
              />
              <p>Leave Note</p>
            </Col>
            <Col xs={2} md={2}>
              <Image
                src={candle}
                alt="candle"
                style={imageStyle}
                onClick={() => handleTributeTypeChange('candle')}
              />
              <p>Light Candle</p>
            </Col>
          </Row>
          <Media>
            <Media.Left align="middle">
              <img
                width={64}
                height={64}
                src={tributeTypes[tributeType]}
                alt="candle thumbnail"
              />
            </Media.Left>
            <Media.Body>
              <form>
                <FormGroup controlId="formControlStoryTextarea">
                  <FormControl
                    bsSize="large"
                    componentClass="textarea"
                    placeholder="+Add Tribute Text Here"
                    value={tribute}
                    onChange={handleInputChange}
                    name="tribute"
                    rows={5}
                  />
                </FormGroup>
                <Button type="submit">Submit Tribute</Button>
              </form>
            </Media.Body>
          </Media>
        </Panel.Body>
      </Panel>
    </Fragment>
  );
};

export default About;
