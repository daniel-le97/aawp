
const callToActionData = {
    title: "Ready to start creating a standard website?",
    subtitle: "Finest choice for your home & office",
    // btnText: "Purchase All-American Pressure Washing, LLC",
    btnText: "Get a Quote Now",
}
const CalltoActionFour = () => {
    return (
        <div className="rn-callto-action clltoaction-style-default style-4">
            <div className="container">
                <div className="row row--0 align-items-center content-wrapper">
                    <div className="col-lg-8">
                        <div className="inner">
                            <div className="content text-start">
                                <h2 className="title">{callToActionData.title}</h2>
                                <h6 className="subtitle">{callToActionData.subtitle}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="call-to-btn text-start text-lg-right">
                            <a className="btn-default" href="#contact">{callToActionData.btnText}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CalltoActionFour;