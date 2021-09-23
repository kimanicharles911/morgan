import { Button } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

const ViewAccountDetailsComponent = () => {

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  return (
    <form className="needs-validation mt-3">
      <fieldset disabled>
        <div className="row g-3 mb-3">
          <div className="col-5">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">Name</span>
              <input type="text" value={userDetails !== null ? userDetails.full_name : null} className="form-control" placeholder={userDetails === null ? "You haven't added your name" : null} aria-describedby="basic-addon1" />
            </div>
          </div>
        </div>

        <div className="row g-3 mb-3">
          <div className="col-5">
            <div className="input-group has-validation">
              <span className="input-group-text" id="basic-addon2">Email</span>
              <input type="email" value={userDetails !== null ? userDetails.email : null} className="form-control" placeholder={userDetails === null ? "You haven't added your email" : null} aria-describedby="basic-addon2" required />
            </div>
          </div>
        </div>

        <div className="row g-3 mb-3">
          <div className="col-5">
            <div className="input-group has-validation">
              <span className="input-group-text" id="basic-addon3">Password</span>
              <input type="text" value={userDetails !== null ? userDetails.password : null} className="form-control" placeholder={userDetails === null ? "You haven't added your password" : null} aria-describedby="basic-addon3" required />
            </div>
          </div>
        </div>

        <div className="row g-3 mb-3">
          <div className="col-5">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon4">Phone</span>
              <input type="tel" value={userDetails !== null ? userDetails.phone_number : null} className="form-control" placeholder="You haven't added your Phone" aria-describedby="basic-addon4" />
            </div>
          </div>
        </div>

        <div className="row g-3 mb-3">
          <div className="col-5">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon5">Country</span>
              <input type="text" value={userDetails !== null ? userDetails.country : null} className="form-control" placeholder="You haven't added your Country" aria-describedby="basic-addon5" />
            </div>
          </div>
        </div>

        <div className="row g-3 mb-3">
          <div className="col-5">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon6">State</span>
              <input type="text" value={userDetails !== null ? userDetails.state : null} className="form-control" placeholder="You haven't added your State" aria-describedby="basic-addon6" />
            </div>
          </div>
        </div>

        <div className="row g-3 mb-3">
          <div className="col-5">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon7">Address</span>
              <input type="text" value={userDetails !== null ? userDetails.address : null} className="form-control" placeholder="You haven't added your Address" aria-describedby="basic-addon7" />
            </div>
          </div>
        </div>
      </fieldset>

      <div className="row g-3 mb-3">
        <div className="col-5">
          <LinkContainer to="/account/edit/">
            <Button variant="primary" className="w-100 btn btn-lg">Edit</Button>
          </LinkContainer>
        </div>
      </div>
    </form>
  );
};

export default ViewAccountDetailsComponent;