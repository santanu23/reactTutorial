import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Dropdown, Button, Row, Col, Icon } from 'react-materialize';

class App extends Component {
  render() {
    return (
      <div>
      <Row>
      <Col s={6}>
      <Button waves='light'>Add<Icon right>add</Icon></Button>
      </Col>
      <Col s={6}>
      <Button waves='light'>Remove<Icon right>remove</Icon></Button>
      </Col>
      </Row> 
      <Dropdown trigger={
        <Button>Drop me!</Button>
      }>
    <p>Hello</p>
    <p>Hello</p>
    <p>Hello</p>
    <p>Bye</p>
      </Dropdown>
      </div>
    );
  }
}

export default App;
