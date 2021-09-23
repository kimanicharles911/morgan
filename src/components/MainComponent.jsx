/* I imported the components that needed to be rendered independently which are the SignInComponent, LandingPageComponent, and the three product components which are the TurkishPumpkinLampsComponent, ElephantCurvingsComponent and the ChessPiecesComponent . 
I imported the Switch and Route component from the react-router-dom library.
I learnt to use react-router-dom from: https://youtu.be/Law7wfdg_ls .
I learnt to pass props in routed components from: https://github.com/remix-run/react-router/issues/4105#issuecomment-291834881 */
import { useState, useEffect } from "react";
import SignInComponent from "./SignInComponent.jsx";
import LandingPageComponent from "./LandingPageComponent.jsx"
import TurkishPumpkinLampsComponent from "./products/TurkishPumpkinLampsComponent.jsx";
import ElephantCurvingsComponent from "./products/ElephantCurvingsComponent.jsx";
import ChessPiecesComponent from "./products/ChessPiecesComponent.jsx";
import ViewAccountDetailsComponent from "./user/ViewAccountDetailsComponent.jsx";
import EditAccountDetailsComponent from "./user/EditAccountDetailsComponent.jsx";
import {Switch, Route } from "react-router-dom";

/* I created a react component called ChessPiecesComponent.
I then destructured the setSignedIn prop passed from the file App.js */
const MainComponent = ({ setSignedIn }) => {

  // const [userDetails, setUserDetails] = useState(JSON.parse(localStorage.getItem("userDetails")));
  // console.log(`😜`, userDetails);

  // useEffect(() => {
  //   setUserDetails(JSON.parse(localStorage.getItem("userDetails")))
  // }, [userDetails])

  return(
    <>
      <main className="container-fluid">
        {/* I then configured routing to the Landing page, Sign In Page and the three product pages.
        I learnt to pass props in routed components from: https://github.com/remix-run/react-router/issues/4105#issuecomment-291834881 . */}
        <Switch>
          <Route path="/signin" exact render={() => <SignInComponent  setSignedIn={setSignedIn} />} />
          <Route path="/" exact render={() => <LandingPageComponent />} />
          <Route path="/turkishpumpkinlamps" exact render={() => <TurkishPumpkinLampsComponent />} />
          <Route path="/elephantcurvings" exact render={() => <ElephantCurvingsComponent />} />
          <Route path="/chesspieces" exact render={() => <ChessPiecesComponent />} />
          {/* https://stackoverflow.com/a/48497783/9497346 */}
          { 
            userDetails !== null && <Route path="/account/profile" exact render={() => <ViewAccountDetailsComponent />} />    
          }
          { 
            userDetails !== null && <Route path="/account/edit" exact render={() => <EditAccountDetailsComponent />} />
          }
        </Switch>
      </main>
    </>
  );
};
export default MainComponent;