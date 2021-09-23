/* I imported the three images shown in the carousel slider.
I also imported the style sheet for the LandingPageComponent */
import royalOntarioArt from "../images/matthew-tenbruggencate-oZVbsRE99rg-unsplash.jpg";
import tortoiseArt from "../images/max-kleinen-fg23HeRx4-k-unsplash.jpg";
import turkishPumpkinOrientalLamps from "../images/raimond-klavins-HbN5sXoMtAA-unsplash.jpg";
import "./LandingPageComponent.css";

const LandingPageComponent = () => {

  return(
    /* <!-- The beginning of the slider carousel --> */
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

        {/* <!-- The carousel's slide selecting rectangular bars found at the bottom-middle of the carousel. --> */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        {/* <!-- The beginning of the slider images code --> */}
        <div className="carousel-inner">

          {/* <!-- The first image --> */}
          <div className="carousel-item active">
            {/* <!-- I obtained this image from unsplash via this url: https://unsplash.com/photos/oZVbsRE99rg --> */}
            <img src={royalOntarioArt} alt="slider image 1" className="d-block w-100" />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1 className="carouselDescription rounded">Acme provides customized Art for it's clients✨</h1>
                <p className="carouselDescription rounded"></p>
                <p><a href="#" className="btn btn-lg btn-warning">Order your Idea</a></p>
              </div>
            </div>
          </div>

          {/* <!-- The second image --> */}
          <div className="carousel-item">
            {/* <!-- I obtained this image from unsplash via this url: https://unsplash.com/photos/fg23HeRx4-k --> */}
            <img src={tortoiseArt} alt="slider image 1" className="d-block w-100" />
            <div className="container">
              <div className="carousel-caption">
                <h1 className="carouselDescription rounded">Our Art products beautify Homes, offices, hotels, bathrooms name it😉</h1>
                <p className="carouselDescription rounded"></p>
                <p><a href="#" className="btn btn-lg btn-warning">View our Products</a></p>
              </div>
            </div>
          </div>
          
          {/* <!-- The third image --> */}
          <div className="carousel-item">
            {/* <!-- I obtained this image from unsplash via this url: https://unsplash.com/photos/HbN5sXoMtAA --> */}
            <img src={turkishPumpkinOrientalLamps} alt="slider image 1" className="d-block w-100" />
            <div className="container">
              <div className="carousel-caption text-end">
                <h1 className="carouselDescription rounded">Acme brings your Art dreams into a reality.</h1>
                <p className="carouselDescription rounded"></p>
                <p><a href="#" className="btn btn-lg btn-warning">Order your Idea</a></p>
              </div>
            </div>
          </div>

        </div>
        {/* <!-- The End of the slider images code --> */}

        {/* <!-- The left slider navigating arrow --> */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* <!-- The right slider navigating arrow --> */}
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      /* <!-- The end of the slider carousel --> */
  );
};
export default LandingPageComponent;