import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="mainmenu">
      <li className="has-droupdown">
        <Link to="/">Home</Link>
        {/* <ul className="submenu">
                    <li><Link to="/business-consulting">House Sidings</Link></li>
                    <li><Link to="/business-consulting-2">Driveways</Link></li>
                    <li><Link to="/corporate">Decks and Patios</Link></li>
                    <li><Link to="/business">Roofs</Link></li>
                    <li><Link to="/digital-agency">Garbage Cans</Link></li>
                    <li><Link to="/finance">Fences</Link></li>
                    <li><Link to="/company">Gas Stations</Link></li>
                    <li><Link to="/marketing">Restaurants</Link></li>
                    <li><Link to="/travel-agency">Kitchens</Link></li>
                    <li><Link to="/consulting">Parking Lots</Link></li>
                    <li><Link to="/seo-agency">Sidewalks</Link></li>
                    <li><Link to="/personal-portfolio">Dumpsters</Link></li>
                    <li><Link to="/event-conference">Event Conference</Link></li>
                    <li><Link to="/creative-portfolio">Creative Portfolio</Link></li>
                    <li><Link to="/freelancer">Freelancer</Link></li>
                    <li><Link to="/international-consulting">International Consulting</Link></li>
                    <li><Link to="/startup">Startup</Link></li>
                    <li><Link to="/web-agency">Web Agency</Link></li>
                </ul> */}
      </li>

      {/* <li><Link to="">About</Link></li> */}
      <li>
        <a href="#about">About</a>
      </li>

      <li className="with-megamenu">
        <a href="#services">Services</a>
        {/* <div className="rn-megamenu">
                    <div className="wrapper">
                        <div className="row row--0">
                            <div className="col-lg-3 single-mega-item">
                                <ul className="mega-menu-item">Residential
                                    <li><Link to="/business-consulting">House Sidings</Link></li>
                                    <li><Link to="/business-consulting-2">Driveways</Link></li>
                                    <li><Link to="/corporate">Decks and Patios</Link></li>
                                    <li><Link to="/startup">Roofs</Link></li>
                                    <li><Link to="/web-agency">Garbage Cans</Link></li>
                                    <li><Link to="/international-consulting">Fences</Link></li>
                                    <li><Link to="/blog-grid">...and More</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 single-mega-item">
                                <ul className="mega-menu-item">Commercial
                                    <li><Link to="/consulting">Gas Stations</Link></li>
                                    <li><Link to="/finance">Restaurants</Link></li>
                                    <li><Link to="/digital-agency">Kitchens</Link></li>
                                    <li><Link to="/seo-agency">Parking Lots</Link></li>
                                    <li><Link to="/company">Sidewalks</Link></li>
                                    <li><Link to="/personal-portfolio">Dumpsters</Link></li>
                                    <li><Link to="/split">...and More</Link></li>
                                </ul>
                            </div> 
                            <div className="col-lg-3 single-mega-item">
                                <ul className="mega-menu-item">
                                    <li><Link to="/call-to-action">Call To Action</Link></li>
                                    <li><Link to="/video-popup">Video</Link></li>
                                    <li><Link to="/gallery">Gallery</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="/brand">Brand</Link></li>
                                    <li><Link to="/portfolio">Portfolio</Link></li>
                                    <li><Link to="/error">404</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 single-mega-item">
                                <ul className="mega-menu-item">
                                    <li><Link to="/advance-tab">Advance Tab <span className="rn-badge-card">Hot</span></Link></li>
                                    <li><Link to="#">Brand Carousel <span className="rn-badge-card">Comming</span></Link></li>
                                    <li><Link to="advance-pricing">Advance Pricing <span className="rn-badge-card">Hot</span></Link></li>
                                    <li><Link to="/portfolio-details/1">Portfolio Details</Link></li>
                                    <li><Link to="/blog-details/1">Blog Details</Link></li>
                                    <li><Link to="/error">404 Page</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
      </li>

      <li className="has-droupdown">
        <a href="#contact">Contact</a>
      </li>

      {/* <li className="has-droupdown">
        <Link to="#">Blog</Link>
        <ul className="submenu">
          <li>
            <Link to="/blog-grid">Blog Grid</Link>
          </li>
          <li>
            <Link to="/blog-grid-sidebar">Blog Grid Sidebar</Link>
          </li>
          <li>
            <Link to="/blog-list-view">Blog List View</Link>
          </li>
          <li>
            <Link to="/blog-list-sidebar">Blog List View Sidebar</Link>
          </li>
        </ul>
      </li> */}

      {/* <li className="has-droupdown"><Link to="#">Portfolio</Link>
                <ul className="submenu">
                    <li><Link to="/portfolio">Portfolio Default</Link></li>
                    <li><Link to="/portfolio-three-column">Portfolio Three Column</Link></li>
                    <li><Link to="/portfolio-full-width">Portfolio Full Width</Link></li>
                    <li><Link to="/portfolio-grid-layout">Portfolio Grid Layout</Link></li>
                    <li><Link to="/portfolio-box-layout">Portfolio Box Layout</Link></li>
                </ul>
            </li> */}
    </ul>
  );
};
export default Nav;
