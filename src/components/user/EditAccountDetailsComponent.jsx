import { useState } from "react";
import {  useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

const EditAccountDetailsComponent = () => {

  // const [user, setUser ] = useState(JSON.parse(localStorage.getItem("userDetails")));
  const [userEmail, setUserEmail ] = useState(JSON.parse(localStorage.getItem("userDetails")).email);
  const [userPassword, setUserPassword ] = useState(JSON.parse(localStorage.getItem("userDetails")).password);
  const [userName, setUserName ] = useState(JSON.parse(localStorage.getItem("userDetails")).full_name === undefined ? "" : JSON.parse(localStorage.getItem("userDetails")).full_name );
  const [userPhone, setUserPhone ] = useState(JSON.parse(localStorage.getItem("userDetails")).phone_number === undefined ? "" : JSON.parse(localStorage.getItem("userDetails")).phone_number);
  const [userCountry, setUserCountry ] = useState(JSON.parse(localStorage.getItem("userDetails")).country === undefined ? "" : JSON.parse(localStorage.getItem("userDetails")).country);
  const [userState, setUserState ] = useState(JSON.parse(localStorage.getItem("userDetails")).state === undefined ? "" : JSON.parse(localStorage.getItem("userDetails")).state);
  const [userAddress, setUserAddress ] = useState(JSON.parse(localStorage.getItem("userDetails")).address === undefined ? "" : JSON.parse(localStorage.getItem("userDetails")).address);

  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    const formDataObject = {
      email: userEmail, 
      password: userPassword, 
      full_name: userName, 
      phone_number: userPhone, 
      country: userCountry, 
      state: userState, address: userAddress
    };
    localStorage.setItem("userDetails",JSON.stringify(formDataObject));
    history.push("/")

  };
  
  return (
    <form className="needs-validation mt-3" onSubmit={submitHandler} novalidate>
      <div className="row g-3 mb-3">
        <div className="col-5">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">Name</span>
            <input type="text" value={userName} onChange={ (event) => setUserName(event.target.value) } className="form-control" placeholder="Full name" aria-describedby="basic-addon1" />
          </div>
        </div>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-5">
          <div className="input-group has-validation">
            <span className="input-group-text" id="basic-addon2">Email</span>
            <input type="email" value={userEmail} onChange={ (event) => setUserEmail(event.target.value) } className="form-control" placeholder="you@example.com" aria-describedby="basic-addon2" required />
            <div className="invalid-feedback">
              Your Email is required.
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-5">
          <div className="input-group has-validation">
            <span className="input-group-text" id="basic-addon3">Password</span>
            <input type="text" value={userPassword} onChange={ (event) => setUserPassword(event.target.value) } className="form-control" aria-describedby="basic-addon3" required />
            <div className="invalid-feedback">
              Your Password is required.
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-5">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon4">Phone</span>
            <input type="tel" value={userPhone} onChange={ (event) => setUserPhone(event.target.value) } className="form-control" placeholder="+25420987555" aria-describedby="basic-addon4" />
          </div>
        </div>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-5">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon5">Country</span>
            <input type="text" value={userCountry} onChange={ (event) => setUserCountry(event.target.value) } className="form-control" placeholder="Zambia" aria-describedby="basic-addon5" />
          </div>
        </div>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-5">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon6">State</span>
            <input type="text" value={userState} onChange={ (event) => setUserState(event.target.value) } className="form-control" aria-describedby="basic-addon6" />
          </div>
        </div>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-5">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon7">Address</span>
            <input type="text" value={userAddress} onChange={ (event) => setUserAddress(event.target.value) } className="form-control" placeholder="542 Main St" aria-describedby="basic-addon7" />
          </div>
        </div>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-5">
          <Button variant="primary" className="w-100 btn btn-lg" type="submit">Save</Button>
        </div>
      </div>

    </form>
  );
};

export default EditAccountDetailsComponent;