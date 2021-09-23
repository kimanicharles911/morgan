/* I imported the NavbarComponent */
import NavbarComponent from "./NavbarComponent.jsx";

/* I created a react component called HeaderComponent.
I destructured the signedIn prop I passed from the file App.js   */
const HeaderComponent = ({ signedIn, setSignedIn }) => {

  return(
    <header>
      {/* I added the NavbarComponent and passed the signedIn props */}
      <NavbarComponent  signedIn={signedIn} setSignedIn={setSignedIn} />
    </header>
  );
};
export default HeaderComponent;