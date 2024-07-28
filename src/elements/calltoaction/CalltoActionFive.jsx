
import ScrollAnimation from "react-animate-on-scroll";
import { FiArrowRight } from "react-icons/fi";

const callToActionData = {
    title: "Ready to start a quote for your property?",
    subtitle: "Finest choice for your home & office",
    // btnText: "Purchase All-American Pressure Washing, LLC",
    btnText: "Get a Quote Now",
}

const CalltoActionFive = () => {
    return (
        <div className="rn-callto-action clltoaction-style-default style-5">
            <div className="container">
                <div className="row row--0 align-items-center content-wrapper theme-shape">
                    <div className="col-lg-12">
                        <div className="inner">
                            <div className="content text-center">
                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <h2 className="title">{callToActionData.title}</h2>
                                </ScrollAnimation>
                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <h6 className="subtitle">{callToActionData.subtitle}</h6>
                                </ScrollAnimation>

                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <div className="call-to-btn text-center">
                                        <a className="btn-default btn-icon" href="#contact">{callToActionData.btnText} <i className="icon"><FiArrowRight /></i></a>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CalltoActionFive;