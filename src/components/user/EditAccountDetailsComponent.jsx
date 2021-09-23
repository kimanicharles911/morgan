import { useForm } from "react-hook-form";
import {  useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

const EditAccountDetailsComponent = () => {

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  const { register, formState: { errors }, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    localStorage.setItem("userDetails", JSON.stringify(data));
    console.log(data);
  };
  
  return (
    <form className="needs-validation mt-3" onSubmit={handleSubmit(onSubmit)} novalidate>
      <div className="row g-3 mb-3">
        <div className="col-5">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">Name</span>
            <input type="text" {...register("full_name")} className="form-control" placeholder="Full name" aria-describedby="basic-addon1" />
          </div>
        </div>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-5">
          <div className="input-group has-validation">
            <span className="input-group-text" id="basic-addon2">Email</span>
            <input type="email" value={ userDetails !== null ? userDetails.email : null } {...register("email", {required: true, pattern: {value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "This input is for emails only."}})} className="form-control" placeholder="you@example.com" aria-describedby="basic-addon2" required />
            {errors.email?.type === "required" && "Email is Required"}
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
            <input type="text" value={ userDetails !== null ? userDetails.password : null } {...register("password", {required: true, minLength: {value: 4, message: "This input is below minimum length."}})} className="form-control" aria-describedby="basic-addon3" required />
            {errors.password && "Password is required"}
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
            <input type="tel" {...register("phone_number")} className="form-control" placeholder="+25420987555" aria-describedby="basic-addon4" />
          </div>
        </div>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-5">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon5">Country</span>
            <input type="text" {...register("country")} className="form-control" placeholder="Zambia" aria-describedby="basic-addon5" />
          </div>
        </div>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-5">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon6">State</span>
            <input type="text" {...register("state")} className="form-control" aria-describedby="basic-addon6" />
          </div>
        </div>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-5">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon7">Address</span>
            <input type="text" {...register("address")} className="form-control" placeholder="542 Main St" aria-describedby="basic-addon7" />
          </div>
        </div>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-5">
          <LinkContainer to="/">
            <Button variant="primary" className="w-100 btn btn-lg" type="submit">Save</Button>
          </LinkContainer>
        </div>
      </div>

    </form>
  );
};

export default EditAccountDetailsComponent;