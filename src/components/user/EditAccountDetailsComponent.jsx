/* I imported:
  * the useState react hook.
  * the useHistory react-router-dom hook to redirect the page after form submission
  * a button component from react-bootstrap
*/
import { useState } from "react";
import {  useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

/* I created react component that will enable editing of the user's profile details. */
const EditAccountDetailsComponent = () => {
  
  /* I implemented state variables for all the fields the user edits.
    The email and password are set by default from the localStorage since only registered users can access the edit form.
    The other state variables are set conditionally (via a ternary operator):
      if their field in the localStorage is empty the state is set to an empty string.
      if their field in the localStorage has data then it is set to those values.
  */
  const [userEmail, setUserEmail ] = useState(JSON.parse(localStorage.getItem("userDetails")).email);
  const [userPassword, setUserPassword ] = useState(JSON.parse(localStorage.getItem("userDetails")).password);
  const [userName, setUserName ] = useState(JSON.parse(localStorage.getItem("userDetails")).full_name === undefined ? "" : JSON.parse(localStorage.getItem("userDetails")).full_name );
  const [userPhone, setUserPhone ] = useState(JSON.parse(localStorage.getItem("userDetails")).phone_number === undefined ? "" : JSON.parse(localStorage.getItem("userDetails")).phone_number);
  const [userCountry, setUserCountry ] = useState(JSON.parse(localStorage.getItem("userDetails")).country === undefined ? "" : JSON.parse(localStorage.getItem("userDetails")).country);
  const [userState, setUserState ] = useState(JSON.parse(localStorage.getItem("userDetails")).state === undefined ? "" : JSON.parse(localStorage.getItem("userDetails")).state);
  const [userAddress, setUserAddress ] = useState(JSON.parse(localStorage.getItem("userDetails")).address === undefined ? "" : JSON.parse(localStorage.getItem("userDetails")).address);


  /* I created a variable that stores the useHistory hook that is then called by the onsubmit function to redirect to homepage.  */
  const history = useHistory();

  /* I created a function that is called upon form submission.
    It prevents automatic form submission.
    It stores the state values stores into the respective field's state variable in an object.
    It updates the localStorage item that holds the user's details.
    It redirects to the homepage*/
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
    /* Below is the JSX for this edit form.
    I have heavily relied on bootstrap to style my components */
    <form className="needs-validation mt-3" onSubmit={submitHandler} novalidate>
      <div className="row g-3 mb-3">
        <div className="col-5">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">Name</span>
            {/* I use the value attribute to set the field's value according to it's state variable.
                I use the onChange event listener to update the input field's state variable with anything that will be keyed in by the user into the input field */}
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
            {/* I use the value attribute to set the field's value according to it's state variable.
                I use the onChange event listener to update the input field's state variable with anything that will be keyed in by the user into the input field */}
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
            {/* I use the value attribute to set the field's value according to it's state variable.
                I use the onChange event listener to update the input field's state variable with anything that will be keyed in by the user into the input field */}
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
            {/* I use the value attribute to set the field's value according to it's state variable.
                I use the onChange event listener to update the input field's state variable with anything that will be keyed in by the user into the input field */}
            <input type="text" value={userAddress} onChange={ (event) => setUserAddress(event.target.value) } className="form-control" placeholder="542 Main St" aria-describedby="basic-addon7" />
          </div>
        </div>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-5">
          {/* This submit button uses the react-bootstrap library */}
          <Button variant="primary" className="w-100 btn btn-lg" type="submit">Save</Button>
        </div>
      </div>
    </form>
  );
};

export default EditAccountDetailsComponent;