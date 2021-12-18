import React from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import {NavLink} from "react-router-dom"

function NavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
                    <NavLink className="navbar-brand" exact to="/">React-Boostrap</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                            <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                            {/*<Nav.Link href="#link">Link</Nav.Link>*/}
                            <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
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
        </div>
    )
}

export default NavBar
