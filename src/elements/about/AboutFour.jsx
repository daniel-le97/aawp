import React from "react";
import VideoTwo from "../video/VideoTwo";
import { FiCheck } from "react-icons/fi";

const PopupData = [
  {
    id: "01",
    image: "./images/bg/bg-image-4.jpg",
    popupLink: [
      "https://www.youtube.com/watch?v=ctsT5Y-InqE&ab_channel=Rainbow-Themes",
    ],
  },
];

const AboutFour = ({ image }) => {
  return (
    // <div className="about-area about-style-4 rn-section-gap">
    <div className="about-area about-style-4">
      <div className="container">
        <div className="row row--40 align-items-center">
          <div className="col-lg-6">
            {/* {PopupData.map((item) => (
              <div className="video-btn" key={item.id}>
                <VideoTwo imagename={`${image}`} galleryItem={item} />
              </div>
            ))} */}
            <div>
              
            </div>
          </div>
          <div className="col-lg-6 mt_md--40 mt_sm--40">
            <div className="content">
              <div className="inner">
                <h3 className="title">
                  We specialize in Residential and Commercial Pressure Washing.
                </h3>
                <ul className="feature-list">
                  <li>
                    <div className="icon">
                      <FiCheck />
                    </div>
                    <div className="title-wrapper">
                      {/* <h4 className="title">A good traveler has no fixed plans</h4> */}
                      <h4 className="title">Residential Pressure Washing</h4>
                      <p className="text">
                        We specialize in restoring the beauty of your home's
                        exterior. From your siding to your driveway, we can
                        remove years of dirt, mold, and grime, leaving your
                        property looking as good as new.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <FiCheck />
                    </div>
                    <div className="title-wrapper">
                      {/* <h4 className="title">A good traveler has no fixed plans</h4> */}
                      <h4 className="title">Commercial Pressure Washing</h4>
                      <p className="text">
                        Boost your business's image with our commercial pressure
                        washing services. We clean storefronts, parking lots,
                        sidewalks, and more, helping you create an inviting
                        environment for customers and employees.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <FiCheck />
                    </div>
                    <div className="title-wrapper">
                      {/* <h4 className="title">A good traveler has no fixed plans</h4> */}
                      <h4 className="title">Deck and Patio Cleaning</h4>
                      <p className="text">
                        Extend the life of your outdoor spaces with our deck and
                        patio cleaning services. We'll remove dirt, algae, and
                        stains, making your outdoor areas safe and enjoyable.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <FiCheck />
                    </div>
                    <div className="title-wrapper">
                      {/* <h4 className="title">A good traveler has no fixed plans</h4> */}
                      <h4 className="title">Fleet Washing</h4>
                      <p className="text">
                        Maintain your company's vehicles with our fleet washing
                        services. We'll keep your trucks, vans, and other
                        vehicles looking professional and clean.
                      </p>
                    </div>
                  </li>
                </ul>
                {/* <div className="about-btn mt--30"> */}
                  {/* <a className="btn-default" href="">About All-American Pressure Washing</a> */}
                  {/* <a className="btn-default" href="#contact">
                    Get a Free Quote
                  </a> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFour;
