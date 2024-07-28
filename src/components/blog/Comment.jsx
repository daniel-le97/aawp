
import PropTypes from "prop-types";
import { DiscussionEmbed } from 'disqus-react';

const Comment = ({url, id, title}) => {
    const disqusShortname = 'All-American Pressure Washing, LLC';
    const disqusConfig = {
        url: url,
        identifier: `${id}`,
        title: title
    };
    return (
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    )
}


Comment.propTypes = {
    url: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string
};

export default Comment
