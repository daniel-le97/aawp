/* eslint-disable react/no-unescaped-entities */

import SEO from "../common/SEO";
import HeaderOne from "../common/header/HeaderOne";
import AboutFour from "../elements/about/AboutFour";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import { FiArrowDown } from "react-icons/fi";

const AboutUs = () => {
  return (
    <>
      <SEO title="About Us" />
      <main className="page-wrapper" id="about">
        {/* <HeaderTopNews /> */}
        <HeaderOne
          btnStyle="btn-small round btn-icon"
          HeaderSTyle="header-transparent"
        />

        {/* Start Slider Area  */}
        {/* <div
          className="slider-area slider-style-1 height-850 bg_image"
          data-black-overlay="7"
          style={{
            backgroundImage: `url(/images/bg/bg-image-1.jpg)`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner pt--80 text-center">
                  <div>
                    <h3 className="rn-sub-badge">
                      <span className="theme-gradient">About Our Company</span>
                    </h3>
                  </div>
                  <h1 className="title display-one">
                    We are the <br /> war on grime!
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* End Slider Area  */}

        {/* Start Service Area  */}
        <div className="rwt-portfolio-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="About"
                  title=""
                  description=""
                />
                <h4>About Us</h4>
                <p>
                  Welcome to All-American Pressure Washing, your trusted partner
                  in maintaining the beauty and integrity of your property.
                  Founded with a commitment to excellence, we've proudly served
                  our local community. At All-American Pressure Washing, we're
                  more than just a business; we're your neighbors, dedicated to
                  enhancing the curb appeal and longevity of your investments.
                </p>
                <h4>Our Mission</h4>
                <p className="large">
                  Our mission is simple: to transform your residential or
                  commercial property into a spotless, pristine space. We
                  understand the importance of first impressions and the lasting
                  impact a clean property can have on visitors, customers, and
                  even your own peace of mind. That's why we've made it our
                  mission to provide top-notch pressure washing services that
                  not only meet but exceed your expectations.
                </p>
              </div>
            </div>
            
          </div>
        </div>

        {/* <div className="service-area rn-section-gapTop">
          <div className="container">
            <div className="row">
              <div className="inner pt--80 text-center">
                <div>
                  <h3 className="rn-sub-badge">
                    <span className="theme-gradient">About Our Company</span>
                  </h3>
                </div>
                
              </div>
              <div className="col-lg-6">
                <h4>About Us</h4>
                <p>
                  Welcome to All-American Pressure Washing, your trusted partner
                  in maintaining the beauty and integrity of your property.
                  Founded with a commitment to excellence, we've proudly served
                  our local community. At All-American Pressure Washing, we're
                  more than just a business; we're your neighbors, dedicated to
                  enhancing the curb appeal and longevity of your investments.
                </p>
                
              </div>

              <div className="col-lg-6">
                <h4>Our Mission</h4>
                <p className="large">
                  Our mission is simple: to transform your residential or
                  commercial property into a spotless, pristine space. We
                  understand the importance of first impressions and the lasting
                  impact a clean property can have on visitors, customers, and
                  even your own peace of mind. That's why we've made it our
                  mission to provide top-notch pressure washing services that
                  not only meet but exceed your expectations.
                </p> */}

                {/* <h4>Why Choose Us?</h4>
                <p className="mb--10">
                  <ol>
                    <li>
                      <p className="mb--10">
                      <strong>Experience: </strong>With over a decade of experience in the industry, we've honed our skills to perfection. Our team of skilled professionals is well-versed in the latest pressure washing techniques, ensuring your property receives the best care possible.
                      </p>
                    </li>
                    <li>
                      <p className="mb--10">
                      <strong>State-of-the-Art Equipment: </strong>We invest in the latest, high-quality pressure washing equipment to deliver outstanding results every time. Our advanced tools allow us to tackle even the toughest stains, dirt, and grime effectively.
                      </p>
                    </li>
                    <li>
                      <p className="mb--10">
                      <strong>Eco-Friendly Solutions: </strong>We care about our environment and your health. That's why we use eco-friendly, biodegradable cleaning solutions that are safe for your property and the planet.
                      </p>
                    </li>
                    <li>
                      <p className="mb--10">
                      <strong>Fully Licensed and Insured: </strong>Your peace of mind is essential to us. All-American Pressure Washing is a fully licensed and insured company, giving you the confidence that your property is in capable hands.
                      </p>
                    </li>
                    <li>
                      <p className="mb--10">
                      <strong>Customer-Centric Approach: </strong>Your satisfaction is our priority. We work closely with you to understand your specific needs and customize our services accordingly. We're not just cleaning your property; we're building lasting relationships.
                      </p>
                    </li>
                    
                    
                  </ol>
                </p> */}
              {/* </div>
            </div>
          </div>
        </div> */}
        {/* End Service Area  */}

        {/* Start Brand Area  */}
        {/* <div className="rwt-brand-area pb--60 pt--30">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mt--10">
                <BrandThree brandStyle="brand-style-2" />
              </div>
            </div>
          </div>
        </div> */}
        {/* End Brand Area  */}

      

        {/* Start Service Area  */}
        {/* <div className="rn-service-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="What we can do for you"
                  title="Services provide for you."
                  description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                />
              </div>
            </div>
            <ServiceOne 
                            serviceStyle = "service__style--1 bg-color-blackest radius mt--25"
                            textAlign = "text-center"
                            />
          </div>
        </div> */}
        {/* End Service Area  */}

        {/* <div className="rwt-timeline-area rn-section-gapBottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <TimelineTwo classVar="no-gradient" />
              </div>
            </div>
          </div>
        </div> */}

       

        <AboutFour image="./images/about/contact-image.jpg" />

        {/* Start Elements Area  */}
        {/* <div className="rwt-counterup-area pb--100">
          <div className="container mt_dec--30">
            <CounterUpFour
              column="col-lg-3 col-md-6 col-sm-6 col-12"
              counterStyle="counter-style-4"
              textALign="text-center"
            />
          </div>
        </div> */}
        {/* End Elements Area  */}

     

        {/* Start Elements Area  */}
        {/* <div className="rwt-team-area rn-section-gap">
          <div className="container">
            <div className="row mb--20">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Our Corporate Team."
                  title="Corporate Team Member."
                  description=""
                />
              </div>
            </div>
            <TeamFour
              column="col-lg-6 col-xl-3 col-md-6 col-12 mt--30"
              teamStyle="team-style-three"
            />
          </div>
        </div> */}
        {/* End Elements Area  */}

        <div className="demo-slider-area slider-area bg-transparent slider-style-1 pb--100 pt--70">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner text-center">
                  <div className="button-group">
                    <a
                      className="btn-default btn-large round btn-icon"
                      href="#services"
                    >
                      Our Services <FiArrowDown />
                    </a>
                    {/* <a className="btn-default btn-large round btn-icon" href="/business-consulting">View Projects <FiArrowDown /></a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <FooterFour /> */}
      </main>
    </>
  );
};

export default AboutUs;
