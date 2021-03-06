import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Search from  './Search'
import Table from 'react-bootstrap/Table'
import Main from "./Main";


const renderTable =()=>{
  return 
    <Main> 
      <div>
          <Container>
              <Table />
          </Container>
      </div>
    </Main>
     
 }




export default props =>



<div className="menu">


<Container className="d-flex justify-content-center" >
<Navbar bg="light" expand="lg">
  <Container fluid='md'>
      
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link onClick={...renderTable} >Pesquisar</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</Container>


</div>
