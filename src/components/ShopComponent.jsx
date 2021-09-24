import RedBrownCeramicVaseComponent from "./products/RedBrownCeramicVaseComponent.jsx";
import PolytelisMelanuraPaintingComponent from "./products/PolytelisMelanuraPaintingComponent.jsx";
import DecorativePlatesComponent from "./products/DecorativePlatesComponent.jsx";

const ShopComponent = () => {

  return(
    <div class="row">
      <RedBrownCeramicVaseComponent />
      <PolytelisMelanuraPaintingComponent />
      <DecorativePlatesComponent />
    </div>
  );
};

export default ShopComponent;