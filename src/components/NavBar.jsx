import React from "react";
import { Navbar, Nav } from "react-bootstrap";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    console.log("Initialized Navbar rendering..");
  }
  render = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          {!this.props.links === "Alfredo"
            ? "Strive for food"
            : "The perfect place for pasta lovers"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {this.props.links.map((link) => (
              <Nav.Link key={link} href={"#" + link.toLowerCase()}>
                {link}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
}
export default NavBar;

// functional components are a touch faster than class based ones
