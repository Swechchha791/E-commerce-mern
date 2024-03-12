import React from "react";
import { Star, StarFill, StarHalf } from "react-bootstrap-icons";
import PropTypes from "prop-types";

function Rating({ value, text, color }) {
  return (
    <div className="rating">
      <span style={{ color }}>
        {value >= 1 ? <StarFill /> : value >= 0.5 ? <StarHalf /> : <Star />}
      </span>
      <span style={{ color }}>
        {value >= 2 ? <StarFill /> : value >= 1.5 ? <StarHalf /> : <Star />}
      </span>
      <span style={{ color }}>
        {value >= 3 ? <StarFill /> : value >= 2.5 ? <StarHalf /> : <Star />}
      </span>
      <span style={{ color }}>
        {value >= 4 ? <StarFill /> : value >= 3.5 ? <StarHalf /> : <Star />}
      </span>
      <span style={{ color }}>
        {value >= 5 ? <StarFill /> : value >= 4.5 ? <StarHalf /> : <Star />}
      </span>
      &nbsp;
      <span>{text && text}</span>
    </div>
  );
}

Rating.defaultProps = {
  color: "#FFBF00",
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
