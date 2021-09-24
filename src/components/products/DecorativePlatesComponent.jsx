/* I obtained the image below from unsplash : https://unsplash.com/photos/fm9wqDNXyQ0  */
import DecorativePlatesPicture from "../../images/karim-manjra-fm9wqDNXyQ0-unsplash.jpg";

/* I created react component that will render one of my shop products. */
const DecorativePlatesComponent = () => {

  return(
    /* Below is the JSX for this shop product.
    I have heavily relied on bootstrap to style my components */
    <div class="col">
      <div class="card">
        {/* I obtained this image from unsplash : https://unsplash.com/photos/fm9wqDNXyQ0 */}
        <img src={DecorativePlatesPicture} alt="" class="img-fluid img-thumbnail" style={{height: 225 + "px", width: 100 + "%",  display: "block"}} />
        <div class="card-body">
          <h5 class="card-title" id="hisenseH5">African Decorative Plates</h5>
          <h6 id="hisenseH6">$999</h6>
          <button id="hisenseAddToCart" class="btn-sm btn-primary productAddToCart"  style={{textDecoration: "none"}}>Add to Cart</button>
          <a href="#" class="btn-sm btn-link">See More</a>
        </div>
      </div>   
    </div>
  );
};

export default DecorativePlatesComponent;