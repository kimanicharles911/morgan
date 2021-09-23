/* I imported the useForm hook from the react-hook-form library. The react-hook-form library makes it easier to handle form data and errors compared to using the defacto react library method.
I imported the useHistory hook from the react-router-dom library. The useHistory hook helps to redirect to another page once a certain condition is met. It uses the react-router to achieve this.
I then imported the company logo image called acmeLogo, which I obtained from: https://unsplash.com/photos/kgd43BJGyGc .
I also imported the stylesheet for the SignInComponent.
*/
import { useForm } from "react-hook-form";
import {  useHistory } from "react-router-dom";
import acmeLogo from "../images/acme-logo.jpg";
import "./SignInComponent.css";

/* I created a react component called SignInComponent . */
const SignInComponent = ({ setSignedIn }) => {

  /* I use the useForm hook and its methods for tracking the user input (i.e register), throwing validation errors and handling form submission.
  I also created a variable that stores the useHistory hook that is then called by the onsubmit function to redirect to homepage if the login was successful.  */
  const { register, formState: { errors }, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    setSignedIn(true);
    console.log(data);
    history.push("/")
  };

  return(
    /* The sign in form JSX begins here. */
    <div className="text-center" id="topSignInDiv">
      <div className="form-signin">
        {/* The handleSubmit useForm hook method calls the onSubmit function.  */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/*The Logo below was obtained from: https://unsplash.com/photos/kgd43BJGyGc */}
          <img src={acmeLogo} alt="Acme logo" className="img-fluid mb-4" width={72} height={57}/>   
          <h1 className="h3 mb-3 fw-normal">Please Sign in</h1>

          <div className="form-floating">
            {/* I include the register method in all inputs to track changes set a field as required and set validation rules */}
            <input type="email" {...register("email", {required: true, pattern: {value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "This input is for emails only."}})} className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email Address</label>
          </div>
          {/* I learnt to validate the form from: https://react-hook-form.com/get-started */ }
          {errors.email?.type === "required" && "Email is Required"}

          <div className="form-floating">
            <input type="password" {...register("password", {required: true, minLength: {value: 4, message: "This input is below minimum length."}})} className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          {/* I learnt to validate the form from: https://react-hook-form.com/get-started */ }
          {errors.password && "Password is required"}

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label> 
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          {/* I use the JS newDate() method to get the full year  */}
          <p className="mt-5 mb-3 text-muted">&copy; {new Date().getFullYear()}</p>

        </form>
      </div>
    </div>
  );
};
export default SignInComponent;