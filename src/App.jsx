 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageScrollTop from './components/pageToTop/PageScrollTop'

// Pages import Here 
import Splash from "./pages/Splash";
import HomeDefault from "./pages/HomeDefault";
import BusinessConsulting2 from "./pages/BusinessConsulting2";
import Corporate from "./pages/Corporate";
import Business from "./pages/Business";
import DigitalAgency from "./pages/DigitalAgency";
import Finance from "./pages/Finance";
import Company from "./pages/Company";
import Marketing from "./pages/Marketing";
import TravelAgency from "./pages/TravelAgency";
import Consulting from "./pages/Consulting";
import SeoAgency from "./pages/SeoAgency";
import PersonalPortfolio from "./pages/PersonalPortfolio";
import EventConference from "./pages/EventConference";
import CreativePortfolio from "./pages/CreativePortfolio";
import Freelancer from "./pages/Freelancer";
import InternationalConsulting from "./pages/InternationalConsulting";
import Startup from "./pages/Startup";
import WebAgency from "./pages/WebAgency";


import CategoryList from "./pages/CategoryList";
import TagList from "./pages/TagList";
import Author from "./pages/Author";
import AboutUs from "./pages/AboutUs";

// Elements import Here 

import Elements from "./elements/elements/Elements";
import Button from "./elements/button/Button";
import Service from "./elements/service/Service";
import CounterUp from "./elements/counterup/CounterUp";
import Progressbar from "./elements/progressbar/Progressbar";

import Portfolio from "./elements/portfolio/Portfolio";
import PortfolioThreeColumn from "./elements/portfolio/PortfolioThreeColumn";
import PortfolioFullWidth from "./elements/portfolio/PortfolioFullWidth";
import PortfolioGrid from "./elements/portfolio/PortfolioGrid";
import PortfolioBoxLayout from "./elements/portfolio/PortfolioBoxLayout";
import PortfolioDetails from "./pages/PortfolioDetails";
import Social from "./elements/social/Social";
import Team from "./elements/team/Team";
import Timeline from "./elements/timeline/Timeline";
import Testimonial from "./elements/testimonial/Testimonial";
import RnAccordion from "./elements/accordion/RnAccordion";
import Tab from "./elements/tab/Tab";
import Pricing from "./elements/pricing/Pricing";
import Split from "./elements/split/Split";
import CalltoAction from "./elements/calltoaction/CalltoAction";
import Video from "./elements/video/Video";
import Gallery from "./elements/gallery/Gallery";
import Contact from "./elements/contact/Contact";
import Brand from "./elements/brand/Brand";
import AdvanceTab from "./elements/advancetab/AdvanceTab";
import AdvancePricing from "./elements/advancePricing/AdvancePricing";


import BlogGridView from "./components/blog/BlogGridView";
import BlogListView from "./components/blog/BlogListView";
import BlogGridSidebar from "./components/blog/BlogGridSidebar";
import BlogListSidebar from "./components/blog/BlogListSidebar";
import BlogDetails from "./pages/BlogDetails";
import Error from "./pages/Error";


// Import Css Here 
import './assets/scss/style.scss';
// import { lazy } from 'react';


// all routes should be converted to using the above function except for the first route ("/") which should be left as is
// this can massively speed up your app load time by only loading the components when they are needed
const App = () => {
    return (
      <Router>
        <PageScrollTop>
          <Switch>
            <Route path="/" exact component={Splash} />
            <Route path="/business-consulting" exact component={HomeDefault} />
            <Route path="/business-consulting-2" exact component={BusinessConsulting2} />
            <Route path="/corporate" exact component={Corporate} />
            <Route path="/business" exact component={Business} />
            <Route path="/digital-agency" exact component={DigitalAgency} />
            <Route path="/finance" exact component={Finance} />
            <Route path="/company" exact component={Company} />
            <Route path="/marketing" exact component={Marketing} />
            <Route path="/travel-agency" exact component={TravelAgency} />
            <Route path="/consulting" exact component={Consulting} />
            <Route path="/seo-agency" exact component={SeoAgency} />
            <Route path="/personal-portfolio" exact component={PersonalPortfolio} />
            <Route path="/event-conference" exact component={EventConference} />
            <Route path="/creative-portfolio" exact component={CreativePortfolio} />
            <Route path="/freelancer" exact component={Freelancer} />
            <Route path="/international-consulting" exact component={InternationalConsulting} />
            <Route path="/startup" exact component={Startup} />
            <Route path="/web-agency" exact component={WebAgency} />
            <Route path="/blog-grid" exact component={BlogGridView} />
            <Route path="/blog-list-view" exact component={BlogListView} />
            <Route path="/blog-grid-sidebar" exact component={BlogGridSidebar} />
            <Route path="/blog-list-sidebar" exact component={BlogListSidebar} />
            <Route path="/blog-details/:id" exact component={BlogDetails} />
            <Route path="/category/:slug" exact component={CategoryList} />
            <Route path="/archive/:slug" exact component={Author} />
            <Route path="/tag/:slug" exact component={TagList} />
            <Route path="/elements" exact component={Elements} />
            <Route path="/button" exact component={Button} />
            <Route path="/service" exact component={Service} />
            <Route path="/counter" exact component={CounterUp} />
            <Route path="/progressbar" exact component={Progressbar} />
            <Route path="/social-share" exact component={Social} />
            <Route path="/team" exact component={Team} />
            <Route path="/testimonial" exact component={Testimonial} />
            <Route path="/timeline" exact component={Timeline} />
            <Route path="/accordion" exact component={RnAccordion} />
            <Route path="/tab" exact component={Tab} />
            <Route path="/pricing" exact component={Pricing} />
            <Route path="/split" exact component={Split} />
            <Route path="/call-to-action" exact component={CalltoAction} />
            <Route path="/video-popup" exact component={Video} />
            <Route path="/gallery" exact component={Gallery} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/brand" exact component={Brand} />
            <Route path="/advance-tab" exact component={AdvanceTab} />
            <Route path="/advance-pricing" exact component={AdvancePricing} />
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/error" exact component={Error} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/portfolio-three-column" exact component={PortfolioThreeColumn} />
            <Route path="/portfolio-full-width" exact component={PortfolioFullWidth} />
            <Route path="/portfolio-grid-layout" exact component={PortfolioGrid} />
            <Route path="/portfolio-box-layout" exact component={PortfolioBoxLayout} />
            <Route path="/portfolio-details/:id" exact component={PortfolioDetails} />
          </Switch>
        </PageScrollTop>
      </Router>
    );
  };


export default App
