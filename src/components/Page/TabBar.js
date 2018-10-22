import React from 'react';
import { Tabs, Tab, Row, Col, Nav } from 'react-bootstrap';

const TabBar = props => {
  const { sectionKey, handleSectionClick } = props;
  return (
    <Row>
      <Tabs activeKey={sectionKey} onSelect={handleSectionClick}>
        <Tab eventKey={1} title="About" />
        <Tab bsStyle="info" eventKey={2} title="Life" />
        <Tab eventKey={3} title="Gallery" />
        <Tab eventKey={4} title="Stories" />
      </Tabs>
    </Row>
  );
};

export default TabBar;
