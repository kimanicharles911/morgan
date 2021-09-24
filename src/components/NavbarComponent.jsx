/* I learnt to use react-router-dom from: https://youtu.be/Law7wfdg_ls */
/* I learn to use react-bootstrap from: https://react-bootstrap.netlify.app/components/navbar/ */
/* I learn to use react-bootstrap from: https://faiizii992.medium.com/creating-a-navbar-using-react-router-dom-and-react-bootstrap-react-router-bootstrap-e6b59015a5ec */
/* I learn to use react-bootstrap &  react-router-bootstrap from: https://medium.com/how-to-react/use-react-router-link-with-bootstrap-315a8b88e129 */
/* I learn to collapse  the navbar when an item is clicked from : https://stackoverflow.com/a/58530447/9497346 */

/* I imported the useState hook from the react library.
I then imported the company logo image called acmeLogo, which I obtained from: https://unsplash.com/photos/kgd43BJGyGc 
I imported the user avatar image called githubAvatar, which I obtained from: https://avatars.githubusercontent.com/u/7065836?v=4 
I imported the Row, Button, Col, and Card components from the react-bootstrap library.
I imported the LinkContainer component from the react-router-bootstrap library.
*/
import { useState } from "react";
import acmeLogo from "../images/acme-logo.jpg";
import githubAvatar from "../images/github_avatar.png";
import { Navbar, Nav, Container, NavDropdown, Row, Button } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

/* I created a react component called NavbarComponent .
I then created a state variable that uses the useState hook. It's default value is false. This state variable will be used to collapse the navbar whenever a nav item is clicked. */
const NavbarComponent = ({ signedIn, setSignedIn }) => {
  const [expanded, setExpanded] = useState(false);

  return(
    /* All the JSX below is very rich in its use of the react-bootstrap library react-bootstrap does not allow conflicts in the DOM to arise when using the bootstrap navbar and react-router in the case for a collapsing and expanding mobile navbar. */
    /* I then passed the expanded state variable as a prop and since it's value is false the menu will be hidden when any page loads.  */
    <Navbar bg="light" expand="sm" variant="dark" bg="dark" expanded={expanded}>
      <Container fluid>
        {/* I obtained the below avatar image from: https://unsplash.com/photos/kgd43BJGyGc */}
        {/* The LinkContainer component from the react-router-bootstrap library is used to make links that don't send external http requests but that use the react-dom to manipulate the page and its link. */}
        <LinkContainer to="/">
          <Nav.Link><img src={acmeLogo} alt="Morgan logo" className="img-fluid" width={50 + "px"} height={30 + "px"}/></Nav.Link>
        </LinkContainer>
        <LinkContainer to="/">
          <Nav.Link><Navbar.Brand href="#">Morgan</Navbar.Brand></Nav.Link>
        </LinkContainer>
        {/* The react-bootstrap navbar toggle is where the functionality of collapsing or expanding the navbar is usually toggled from, hence I set an onClick eventListener here to change the menu visiblity status from false to true.  */}
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />

        <Navbar.Collapse id="navbarsExample03">
          <Container>
            <Row>
              <Nav>
                <ul className="navbar-nav me-auto mb-2 mb-sm-0">           
                </ul>
                <ul className="d-flex navbar-nav me-2 mb-2 mb-sm-0">
                  {/* I add an onclick event listener that collapses the mobile navbar whenever a navbar item is clicked. It sets the expanded hook to false */}
                  <LinkContainer to="/" onClick={() => setExpanded(false)}>
                    <Nav.Link href="#">Location</Nav.Link>
                  </LinkContainer>
                  <NavDropdown title="Products" id="basic-nav-dropdown">
                  {/* I add an onclick event listener that collapses the mobile navbar whenever a navbar item is clicked. It sets the expanded hook to false */}
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
                  {/* I add an onclick event listener that collapses the mobile navbar whenever a navbar item is clicked. It sets the expanded hook to false */}
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
                  {/* Below is the logic that changes the UI based on whether a user is logged in or not.
                      I check with the signedIn prop whether a user is signed in with a ternary operator.
                      A button requesting them to Sign In is rendered if the user has not signed in.
                      The profile dropdown renders if the user is signed in.
                  */}
                  {
                    !signedIn ? <LinkContainer to="/signin" onClick={() => setExpanded(false)}>
                                  <Button variant="primary">Sign In</Button>
                                </LinkContainer>
                    : <li className="d-grid flex-shrink-0" style={{gridTemplateColumns: "1fr 2fr"}}>
                        {/* I obtained the below profile avatar image from: https://avatars.githubusercontent.com/u/7065836?v=4 */}
                        <NavDropdown title={(<img src={githubAvatar} alt="mdo" width="32" height="32" className="rounded-circle" />) }  >
                          <LinkContainer to="/account/profile/" onClick={() => setExpanded(false)}>
                            <Nav.Link href="/account/profile/"><NavDropdown.Item href="/account/profile/">Your Profile</NavDropdown.Item></Nav.Link>
                          </LinkContainer>
                          <LinkContainer to="/account/edit/" onClick={() => setExpanded(false)}>
                            <Nav.Link href="/account/edit/"><NavDropdown.Item href="/account/edit/">Edit Profile</NavDropdown.Item></Nav.Link>
                          </LinkContainer>
                          {/* I add an onclick event listener that collapses the mobile navbar whenever a navbar item is clicked. It sets the expanded hook to false */}
                          <LinkContainer to="/" onClick={() => setExpanded(false)}>
                            <Nav.Link href="/"><NavDropdown.Item href="#">Home</NavDropdown.Item></Nav.Link>
                          </LinkContainer>
                          <LinkContainer to="/shop/" onClick={() => setExpanded(false)}>
                            <Nav.Link href="/shop/"><NavDropdown.Item href="/shop/">Shop</NavDropdown.Item></Nav.Link>
                          </LinkContainer>
                          {/* 
                            When the sign out dropdown option is clicked the signIn state variable is set to false, the localStorage is cleared and the navbar is condensed.
                            I learn to use three inline functions from: https://stackoverflow.com/a/26069299/9497346 
                          */}
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