import React, { Component } from "react";
import {Navbar,Nav,Form,Button,Container} from "react-bootstrap"

export default class Navbarcomp extends Component {
    render(){
        return(
            <div>
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
           
          >
            <Nav.Link href="#action1" className="left">Home</Nav.Link>
            <Nav.Link href="#action2" className="left">Link</Nav.Link>
            <Nav.Link href="#" className="left">
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 left"
              aria-label="Search"
            />
            <Button variant="outline-success" className="left">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  
            </div>

        )
    }
}