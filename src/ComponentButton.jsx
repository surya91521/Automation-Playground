import React from "react";
import PropTypes from "prop-types";

function ComponentButton({ label, ariaLabel, dataTest, onClick }) {
  return (
    <button
      className="component-button"
      aria-label={ariaLabel}
      data-test={dataTest}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

ComponentButton.propTypes = {
  label: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  dataTest: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ComponentButton;
