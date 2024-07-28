import PropTypes from "prop-types";



const SEO = ( {title} ) => {
    return (
        <>
            <meta charSet="utf-8" />
            <title>{title} || All-American Pressure Washing, LLC</title>
            <meta name="robots" content="noindex, follow" />
            <meta name="description" content="All-American Pressure Washing, LLC" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </>
    )
}
SEO.propTypes = {
    title: PropTypes.string
};

export default SEO;


