import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loader = () => {
  const containedStyles = {
    height: "100%",
    width: "100%"
  };

  return (
    <div className="loader" style={containedStyles}>
      <FontAwesomeIcon icon="spinner" spin />
    </div>
  );
};

export default Loader;
