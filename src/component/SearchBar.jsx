import React from "react";
import { Button, Col, Form, Navbar, Row } from "react-bootstrap";

function SearchBar(props) {
  return (
    <Navbar
      className="d-flex justify-content-center"
      style={{
        backgroundColor: "#9fa8da",
      }}
    >
      <Form>
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
