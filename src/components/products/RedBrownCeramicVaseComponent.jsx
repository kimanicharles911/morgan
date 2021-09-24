/* I obtained the image below from unsplash : https://unsplash.com/photos/qixtBdqyNqI  */
import RedBrownCeramicVasePicture from "../../images/muthengi-mbuvi-qixtBdqyNqI-unsplash.jpg";

/* I created react component that will render one of my shop products. */
const RedBrownCeramicVaseComponent = () => {

  return(
    /* Below is the JSX for this shop product.
    I have heavily relied on bootstrap to style my components */
    <div class="col">
      <div class="card">
        {/* I obtained this image from unsplash : https://unsplash.com/photos/qixtBdqyNqI */}
        <img src={RedBrownCeramicVasePicture} alt="" class="img-fluid img-thumbnail" style={{height: 225 + "px", width: 100 + "%",  display: "block"}} />
        <div class="card-body">
          <h5 class="card-title" id="hisenseH5">African Red Brown Ceramic Vase</h5>
          <h6 id="hisenseH6">$507</h6>
          <button id="hisenseAddToCart" class="btn-sm btn-primary productAddToCart"  style={{textDecoration: "none"}}>Add to Cart</button>
          <a href="#" class="btn-sm btn-link">See More</a>
        </div>
      </div>   
    </div>
  );
};

export default RedBrownCeramicVaseComponent;