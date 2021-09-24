/* I imported the three product components i.e RedBrownCeramicVaseComponent, PolytelisMelanuraPaintingComponent and DecorativePlatesComponent */
import RedBrownCeramicVaseComponent from "./products/RedBrownCeramicVaseComponent.jsx";
import PolytelisMelanuraPaintingComponent from "./products/PolytelisMelanuraPaintingComponent.jsx";
import DecorativePlatesComponent from "./products/DecorativePlatesComponent.jsx";

/* I created a react component that holds the shop page of the site*/
const ShopComponent = () => {

  return(
    /* Below is the JSX that enables a client to view the shop products.
    I wrapped each product component in a bootstrap grid.
    I have heavily relied on bootstrap to style my components */
    <div class="row">
      <RedBrownCeramicVaseComponent />
      <PolytelisMelanuraPaintingComponent />
      <DecorativePlatesComponent />
    </div>
  );
};

export default ShopComponent;