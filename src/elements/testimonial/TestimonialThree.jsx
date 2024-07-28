
import Slider from "react-slick";
import { slickDot } from "../../utils/script";

const TestimonialData = [
    {
        form: "Kuna",
        description: "I recently had the pleasure of using the services of All-American Pressure Washing, and I couldn't be happier with the results. From start to finish, their team demonstrated professionalism, expertise, and a commitment to delivering top-notch service.",
        name: "John",
        subtitle: "Home Owner",
        image: "testimonial-dark-01"
    },
    {
        form: "Boise",
        description: "I highly recommend All-American Pressure Washing for apartment building pressure washing services. Their professionalism, expertise, attention to detail, and outstanding results make them the go-to choice for any property owner or manager looking to refresh their building's exterior. I'll definitely be a repeat customer, and you should consider them too for your pressure washing needs.",
        name: "David",
        subtitle: "Property Manager",
        image: "testimonial-dark-02"
    },
    {
        form: "Nampa",
        description: "All-American Pressure Washing has truly transformed the curb appeal of my home. From the moment I contacted them for a quote to the day they completed the job, their professionalism and attention to detail were remarkable. They revived my tired-looking siding and driveway, making them look brand new. I highly recommend All-American Pressure Washing to anyone in need of a thorough and reliable pressure washing service.",
        name: "James",
        subtitle: "Home Owner",
        image: "testimonial-dark-03"
    },
]
const TestimonialThree = ({teamStyle}) => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <Slider className="slick-space-gutter--15 rn-slick-dot rn-slick-arrow mb--60" {...slickDot}>
                    {TestimonialData.map((data, index) => (
                        <div key={index} className={`testimonial-style-two ${teamStyle}`}>
                            <div className="row align-items-center row--20">
                                <div className="order-2 order-md-1 col-lg-6 col-md-8 offset-lg-1">
                                    <div className="content mt_sm--40">
                                        <span className="form">{data.form}</span>
                                        <p className="description">{data.description}</p>
                                        <div className="client-info">
                                            <h4 className="title">{data.name}</h4>
                                            <h6 className="subtitle">{data.subtitle}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 order-md-2 col-lg-4 col-md-4">
                                    <div className="thumbnail">
                                        <img className="w-100" src={`./images/testimonial/${data.image}.jpg`} alt="Corporate React Template" />
                                    </div>
                                </div>
                            </div> 
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
export default TestimonialThree;




















