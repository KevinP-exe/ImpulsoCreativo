import React from "react";
import PropTypes from "prop-types";
import "../components/Button.css";

const icons = {
  edit: (
    <svg
      className="w-4 h-4 inline-block mr-1"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z" />
    </svg>
  ),
  delete: (
    <svg
      className="w-4 h-4 inline-block mr-1"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m-7 0a1 1 0 011-1h4a1 1 0 011 1" />
    </svg>
  ),
};

const Button = ({ type = "button", onClick, text, variant = "default", icon }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${variant === "edit" ? "btn-edit" : ""} ${
        variant === "delete" ? "btn-delete" : ""
      }`}
    >
      {icon && icons[icon]}
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["default", "edit", "delete"]),
  icon: PropTypes.oneOf(["edit", "delete"]),
};

export default Button;
