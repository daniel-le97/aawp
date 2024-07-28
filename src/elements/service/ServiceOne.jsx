
// import { FiActivity, FiCast, FiMap } from "react-icons/fi";
import { BsHouse, BsBuildings, BsCarFront } from "react-icons/bs";

import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        // icon: <FiActivity />,
        icon: <BsHouse />,
        // title: 'Awarded Design',
        title: 'Residential Pressure Washing',
        description: 'We offer professional residential pressure washing services. We use high-pressure water and specialized cleaning solutions to effectively remove dirt, grime, and contaminants from home exteriors, including siding, decks, driveways, and more. Our expert team ensures thorough and safe cleaning, enhancing curb appeal, and preserving property value.'
    },
    {
        icon: <BsBuildings />,
        // title: 'Design & Creative',
        title: 'Commercial Pressure Washing',
        description: 'Passages there are many variations variations  of of Lorem Ipsum available, but the majority have suffered.'
    },
    {
        icon: <BsCarFront />,
        // title: 'App Development',
        title: 'Other Services',
        description: 'Variations There are many variations  of passages of Lorem Ipsum available, but the majority have suffered.'
    },
]

const ServiceOne = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title w-600"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceOne;