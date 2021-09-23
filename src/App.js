/* I import the useState react library hook.
I import both the HeaderComponent and the MainComponent. 
I import the BrowserRouter component from the react-router-dom and give it a nick-name of Router*/
import { useState } from "react";
import HeaderComponent from "./components/HeaderComponent.jsx";
import MainComponent from "./components/MainComponent.jsx";
import { BrowserRouter as Router} from "react-router-dom";

/* I modified the App component from a normal function component to a an arrow function component since I love arrow functions.
I declared a state variable called signedIn to pass the status of whther a user has signed in to the navbar component. Its default value is false.  */
const App = () => {
  const [signedIn, setSignedIn] = useState(false);

  return (
    /* I wrapped all the components that I want to have the react-router functionality with the Router component.
    Meaning even the child components of this components will have the react-router functionality. */
    <Router>
      <HeaderComponent signedIn={signedIn} />
      <MainComponent setSignedIn={setSignedIn} />
    </Router>
  );
}

export default App;
