/* I imported the NavbarComponent */
import NavbarComponent from "./NavbarComponent.jsx";

/* I created a react component called HeaderComponent.
I destructured the signedIn prop I passed from the file App.js   */
const HeaderComponent = ({ signedIn }) => {

  return(
    <header>
      {/* I added the NavbarComponent and passed the signedIn props */}
      <NavbarComponent  signedIn={signedIn} />
    </header>
  );
};
export default HeaderComponent;