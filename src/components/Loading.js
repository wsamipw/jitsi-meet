import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";

const Loading = (props) => {
  const { full, color, text } = props;
  return (
    <div
      style={{
        width: "100%",
        height: full && "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"

      }}
    >
      <CircularProgress color={color} />
    <p className="mt-3">{text}</p>
    </div>
  );
};

Loading.propTypes={
    full: PropTypes.bool,
    color: PropTypes.string,
    text: PropTypes.string
}

Loading.defaultProps ={
    full: false,
    color: "primary",
    text: "Joining conference"
}

export default Loading;
