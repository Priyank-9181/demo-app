import React from "react";
import { Button, Col, Form, InputGroup, Navbar, Row } from "react-bootstrap";

function SearchBar(props) {
  return (
    <Navbar className="p-2 bg-body-tertiary justify-content-between">
      <Form inline>
        <h1
          style={{
            fontSize: "2.2rem",
          }}
        >
          PokeDex
        </h1>
      </Form>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={(e) => {
                props.setQuery(e.target.value);
              }}
            />
          </Col>
          <Col xs="auto">
            <Button type="button" onClick={props.getDetail}>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default SearchBar;
