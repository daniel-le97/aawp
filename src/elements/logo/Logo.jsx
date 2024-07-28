import PropTypes from "prop-types";

import {Link} from "react-router-dom";

const Logo = ({image, image2}) => {
    return(
        <div className="logo">
            <Link to={import.meta.env.PUBLIC_URL + "/"}>
                <img className="logo-light" src={import.meta.env.PUBLIC_URL + image} alt="Corporate Logo" />
                <img className="logo-dark" src={import.meta.env.PUBLIC_URL + image2} alt="Corporate Logo" />
            </Link>
        </div>
    )
}
Logo.propTypes = {
    image: PropTypes.string
};

export default Logo;
