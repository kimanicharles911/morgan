/* I imported the image of the Turkish Pumpkin Oriental Lamps from the src/images folder.
I imported the Row, Button, Col, and Card components from the react-bootstrap library.
I learn to use react-bootstrap from: https://react-bootstrap.netlify.app/components/navbar/ 
I learn to use react-bootstrap from: https://faiizii992.medium.com/creating-a-navbar-using-react-router-dom-and-react-bootstrap-react-router-bootstrap-e6b59015a5ec 

I imported the LinkContainer component from the react-router-bootstrap library.  */

/* <!-- I obtained this image from unsplash via this url: https://unsplash.com/photos/HbN5sXoMtAA --> */
import turkishPumpkinOrientalLamps from "../../images/raimond-klavins-HbN5sXoMtAA-unsplash.jpg";
import { Row, Button, Col, Card } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

/* I created a react component called TurkishPumpkinLampsComponent.
I then used both normal bootstrap and react-router-bootstrap to write the JSX that showcases my product */
const TurkishPumpkinLampsComponent = () => {

  return(
    /* Row is one among many of the react-router-bootstrap components I used. */
    <Row >
      <Col>
        <Card>
            {/* <!-- I obtained this image from unsplash via this url: https://unsplash.com/photos/HbN5sXoMtAA --> */}       
          <img src={turkishPumpkinOrientalLamps} alt="" className="img-fluid img-thumbnail"  style={{height: 325 + "px", width: 20 + "%", display: "block"}} />
          <Card.Body>
            <h5 className="card-title">Turkish Pumpkin Lamps</h5>
            <h6>$149.99</h6>
            <p className="card-text">
              <ol>
                <li>Get a lamp for your study desk or home that is made from the design of Turkish Pumpkins</li>
                <li>Enjoy low but beautiful light.</li>
              </ol>
            </p>              
            <Row>
              <Col>
                {/* The LinkContainer component from the react-router-bootstrap library is used to make links that don't send external http requests but that use the react-dom to manipulate the page. */}
                <LinkContainer to="/">
                  <Button variant="success">Back</Button>
                </LinkContainer>
              </Col>
              <Col>
                <LinkContainer to="/">
                  <Button variant="warning">Purchase 🛒</Button>
                </LinkContainer>
              </Col>
            </Row>
          </Card.Body>          
        </Card>
      </Col>
    </Row>
  );
};
export default TurkishPumpkinLampsComponent;