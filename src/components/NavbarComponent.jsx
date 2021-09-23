import { useState } from "react";
import acmeLogo from "../images/acme-logo.jpg";
import githubAvatar from "../images/github_avatar.png";
import { Navbar, Nav, Container, NavDropdown, Row, Button } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

const NavbarComponent = ({ signedIn, setSignedIn }) => {
  const [expanded, setExpanded] = useState(false);

  return(
    <Navbar bg="light" expand="sm" variant="dark" bg="dark" expanded={expanded}>
      <Container fluid>
        <LinkContainer to="/">
          <Nav.Link><img src={acmeLogo} alt="Morgan logo" className="img-fluid" width={50 + "px"} height={30 + "px"}/></Nav.Link>
        </LinkContainer>
        <LinkContainer to="/">
          <Nav.Link><Navbar.Brand href="#">Morgan</Navbar.Brand></Nav.Link>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />

        <Navbar.Collapse id="navbarsExample03">
          <Container>
            <Row>
              <Nav>
                <ul className="navbar-nav me-auto mb-2 mb-sm-0">           
                </ul>
                <ul className="d-flex navbar-nav me-2 mb-2 mb-sm-0">
                  <LinkContainer to="/" onClick={() => setExpanded(false)}>
                    <Nav.Link href="#">Location</Nav.Link>
                  </LinkContainer>
                  <NavDropdown title="Products" id="basic-nav-dropdown">
                    <LinkContainer to="/elephantcurvings" onClick={() => setExpanded(false)}>
                      <Nav.Link href="/elephantcurvings"><NavDropdown.Item href="/elephantcurvings">Elephant Curvings</NavDropdown.Item></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/chesspieces" onClick={() => setExpanded(false)}>
                      <Nav.Link href="/chesspieces"><NavDropdown.Item href="/chesspieces">Chess Pieces</NavDropdown.Item></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/turkishpumpkinlamps" onClick={() => setExpanded(false)}>
                      <Nav.Link href="/turkishpumpkinlamps"><NavDropdown.Item href="/turkishpumpkinlamps">Turkish Pumpkin Lamps</NavDropdown.Item></Nav.Link>
                    </LinkContainer>
                  </NavDropdown>
                  <LinkContainer to="/" onClick={() => setExpanded(false)}>
                    <Nav.Link href="#">About Us</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/" onClick={() => setExpanded(false)}>
                    <Nav.Link href="#">Privacy & Legal</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/" onClick={() => setExpanded(false)}>
                    <Nav.Link href="#">Contact</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/" onClick={() => setExpanded(false)}>
                    <Nav.Link href="#">FAQ</Nav.Link>
                  </LinkContainer>

                  {
                    !signedIn ? <LinkContainer to="/signin" onClick={() => setExpanded(false)}>
                                <Button variant="primary">{signedIn === false ? "Sign In": "Sign Out"}</Button>
                              </LinkContainer>
                    : <li className="d-grid flex-shrink-0" style={{gridTemplateColumns: "1fr 2fr"}}>
                        {/* I obtained the below profile avatar image from: https://avatars.githubusercontent.com/u/7065836?v=4 */}
                        <NavDropdown title={<img src={githubAvatar} alt="mdo" width="32" height="32" className="rounded-circle" />} >
                          <LinkContainer to="/account/profile/" onClick={() => setExpanded(false)}>
                            <Nav.Link href="/account/profile/"><NavDropdown.Item href="/account/profile/">Your Profile</NavDropdown.Item></Nav.Link>
                          </LinkContainer>
                          <LinkContainer to="/account/edit/" onClick={() => setExpanded(false)}>
                            <Nav.Link href="/account/edit/"><NavDropdown.Item href="/account/edit/">Edit Profile</NavDropdown.Item></Nav.Link>
                          </LinkContainer>
                          <LinkContainer to="/" onClick={() => setExpanded(false)}>
                            <Nav.Link href="/"><NavDropdown.Item href="#">Home</NavDropdown.Item></Nav.Link>
                          </LinkContainer>
                          <LinkContainer to="/" onClick={() => setExpanded(false)}>
                            <Nav.Link href="/"><NavDropdown.Item href="#">Shop</NavDropdown.Item></Nav.Link>
                          </LinkContainer>
                          {/* I learn to use two inline functions from: https://stackoverflow.com/a/26069299/9497346 */}
                          <LinkContainer to="/" onClick={() => { setExpanded(false); setSignedIn(false); localStorage.removeItem("userDetails"); }}>
                            <Nav.Link href="/"><NavDropdown.Item href="#">Sign Out</NavDropdown.Item></Nav.Link>
                          </LinkContainer>
                        </NavDropdown>
                      </li>
                  }

                </ul>
              </Nav>
            </Row>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarComponent;