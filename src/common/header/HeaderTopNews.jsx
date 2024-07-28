import {useState} from "react";
import { FiX , FiArrowRight} from "react-icons/fi";

const HeaderTopNews = () => {
    const [deactive, setClass] = useState('');
    return (
        <div className={`header-top-news bg_image ${deactive}`}  style={{backgroundImage: `url(/images/bg/top-banner.png)`}}>
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <div className="content">
                                    {/* <span className="rn-badge">Limited Time Offer</span> */}
                                    {/* <span className="news-text">Intro price. Subscribe to All-American All-In-One <strong>- 25% off.</strong></span> */}
                                </div>
                                <div className="right-button">
                                    <a className="btn-read-more" target="_blank" href="">
                                        <span> 
                                            {/* <FiArrowRight /> */}
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="icon-close">
                <button className="close-button" onClick={() => setClass('deactive')}><FiX /></button>
            </div>
        </div>
    )
}

export default HeaderTopNews;
