
import {slugify} from "../../../utils";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const BlogListTwo = ({ data, StyleVar }) => {
    const cate = data.categories.map((value, i) => {
        return (
            <Link to={import.meta.env.PUBLIC_URL + `/category/${slugify(value)}`} key={i}>{value}{i !== data.categories.length - 1 && ","}</Link>
        )
    });
    
    return (
        <div className={`rn-card ${StyleVar}`}>
            <div className="inner">
                <div className="thumbnail">
                    <Link to={import.meta.env.PUBLIC_URL + `/blog-details/${data.id}`} className="image">
                        <img src={`/${data.image}`} alt="Blog Image" />
                    </Link>
                </div>
                <div className="content">
                    <h4 className="title">
                        <Link to={import.meta.env.PUBLIC_URL + `/blog-details/${data.id}`}>
                            {data.title}
                        </Link>
                    </h4>
                    <ul className="rn-meta-list">
                        <li><Link to={import.meta.env.PUBLIC_URL + `/archive/${slugify(data.author)}`}>{data.author}</Link></li>
                        <li className="separator">/</li>
                        <li>{data.date}</li>
                    </ul>
                    <p className="descriptiion">{data.excerpt}</p>
                </div>
            </div>
        </div>
    )
}
BlogListTwo.propTypes = {
    data: PropTypes.object
};
export default BlogListTwo;
