
import ScrollAnimation from "react-animate-on-scroll";

const callToActionData = {
    title: "Ready to start creating a standard website?",
    subtitle: "Finest choice for your home & office",
    // btnText: "Purchase All-American Pressure Washing, LLC",
    btnText: "Get a Free Quote",
}

const CalltoActionOne = () => {
    return (
        <div className="rn-callto-action clltoaction-style-default bg_image bg_image_fixed"  style={{backgroundImage: `url(/images/bg/bg-image-1.jpg)`}} data-black-overlay="7">
            <div className="container">
                <div className="row">
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
                                    <div className="call-to-btn">
                                        <a className="btn-default" href="#">{callToActionData.btnText}</a>
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
export default CalltoActionOne;